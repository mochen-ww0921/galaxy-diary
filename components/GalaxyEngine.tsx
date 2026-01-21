
import React, { useRef, useEffect, useCallback, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as TWEEN from '@tweenjs/tween.js';
import { DiaryEntry } from '../types';

interface GalaxyEngineProps {
  entries: DiaryEntry[];
  activeEntryId: string | null;
  currentTime: number;
  searchTerm?: string;
  onStarClick: (starId: string) => void;
  onEmptySpaceClick: (wx: number, wy: number, wz: number, sx: number, sy: number) => void;
  onSwipe: (direction: 'left' | 'right') => void;
  resetTrigger?: number;
}

const GalaxyEngine: React.FC<GalaxyEngineProps> = ({ 
  entries, 
  activeEntryId, 
  currentTime, 
  searchTerm = '', 
  onStarClick, 
  onEmptySpaceClick,
  onSwipe,
  resetTrigger = 0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sceneRef = useRef<THREE.Scene>(new THREE.Scene());
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const webglRendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  
  const galaxyGroupRef = useRef<THREE.Group>(new THREE.Group());
  const interactiveContentRef = useRef<THREE.Group>(new THREE.Group());
  const starsGroupRef = useRef<THREE.Group>(new THREE.Group());
  const connectionsGroupRef = useRef<THREE.Group>(new THREE.Group());
  const nebulaGroupRef = useRef<THREE.Group>(new THREE.Group());
  const dustPointsRef = useRef<THREE.Points | null>(null);
  const sentinelPointsRef = useRef<THREE.Points | null>(null);
  
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const frameIdRef = useRef<number>(0);

  // Hand States
  const [leftHandDetected, setLeftHandDetected] = useState(false);
  const [rightHandDetected, setRightHandDetected] = useState(false);
  
  // Advanced swipe detection with velocity
  const xHistory = useRef<{x: number, t: number}[]>([]);
  const swipeCooldown = useRef<number>(0);
  
  const expansionRef = useRef(0);
  const targetExpansionRef = useRef(0);
  const activeEntryIdRef = useRef(activeEntryId);

  // Ref to track latest swipe handler to avoid restarting the camera effect
  const onSwipeRef = useRef(onSwipe);
  useEffect(() => { onSwipeRef.current = onSwipe; }, [onSwipe]);

  useEffect(() => { activeEntryIdRef.current = activeEntryId; }, [activeEntryId]);

  const textureCache = useRef<Record<string, THREE.Texture>>({});

  const getStarTexture = (color: string) => {
    if (textureCache.current[color]) return textureCache.current[color];
    const canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 128;
    const ctx = canvas.getContext('2d')!;
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'white'); 
    grad.addColorStop(0.2, color); 
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad; 
    ctx.fillRect(0,0,128,128);
    const texture = new THREE.CanvasTexture(canvas);
    textureCache.current[color] = texture;
    return texture;
  };

  const getNebulaTexture = () => {
    const key = 'nebula_v3';
    if (textureCache.current[key]) return textureCache.current[key];
    const canvas = document.createElement('canvas');
    canvas.width = 256; canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,256,256);
    const texture = new THREE.CanvasTexture(canvas);
    textureCache.current[key] = texture;
    return texture;
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const camera = new THREE.PerspectiveCamera(55, width / height, 1, 15000);
    camera.position.set(0, 200, 1800);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    webglRendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 6000;
    controlsRef.current = controls;

    sceneRef.current.add(galaxyGroupRef.current);
    galaxyGroupRef.current.add(interactiveContentRef.current);
    interactiveContentRef.current.add(starsGroupRef.current, connectionsGroupRef.current, nebulaGroupRef.current);

    // --- SPHERICAL DUST GENERATION ---
    const dustCount = 10000;
    const dustGeometry = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    const radius = 2500;
    
    for (let i = 0; i < dustCount; i++) {
      const r = Math.pow(Math.random(), 0.5) * radius;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      dustPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      dustPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      dustPos[i * 3 + 2] = r * Math.cos(phi);
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    
    const dustMaterial = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        uniform float time;
        void main() {
          vec3 pos = position;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = (2.5 + 1.5 * sin(time * 0.7 + position.x)) * (1500.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        void main() {
          float d = distance(gl_PointCoord, vec2(0.5));
          if (d > 0.5) discard;
          gl_FragColor = vec4(1.0, 1.0, 1.0, (1.0 - d * 2.0) * 0.4);
        }
      `,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
    });
    const dustPoints = new THREE.Points(dustGeometry, dustMaterial);
    dustPointsRef.current = dustPoints;
    interactiveContentRef.current.add(dustPoints);

    // --- SENTINEL STARS ---
    const sentinelCount = 20;
    const sentinelGeo = new THREE.BufferGeometry();
    const sentinelPos = new Float32Array(sentinelCount * 3);
    for (let i = 0; i < sentinelCount; i++) {
      const r = radius * (0.8 + Math.random() * 0.4);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      sentinelPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      sentinelPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      sentinelPos[i * 3 + 2] = r * Math.cos(phi);
    }
    sentinelGeo.setAttribute('position', new THREE.BufferAttribute(sentinelPos, 3));
    const sentinelMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        uniform float time;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = (8.0 + 4.0 * sin(time * 2.0 + position.y)) * (1500.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        void main() {
          float d = distance(gl_PointCoord, vec2(0.5));
          if (d > 0.5) discard;
          vec3 color = vec3(0.8, 0.9, 1.0);
          gl_FragColor = vec4(color, (1.0 - d * 2.0));
        }
      `,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
    });
    const sentinels = new THREE.Points(sentinelGeo, sentinelMat);
    sentinelPointsRef.current = sentinels;
    interactiveContentRef.current.add(sentinels);

    const animate = (t: number) => {
      frameIdRef.current = requestAnimationFrame(animate);
      TWEEN.update(t);
      controls.update();

      if (dustMaterial.uniforms) dustMaterial.uniforms.time.value = t * 0.001;
      if (sentinelMat.uniforms) sentinelMat.uniforms.time.value = t * 0.001;

      expansionRef.current += (targetExpansionRef.current - expansionRef.current) * 0.1;
      const scale = expansionRef.current < 0 ? Math.max(0.1, 1 + expansionRef.current * 0.8) : 1 + expansionRef.current * 2.5;
      interactiveContentRef.current.scale.setScalar(scale);

      galaxyGroupRef.current.rotation.y += 0.0002;
      webglRendererRef.current!.render(sceneRef.current, camera);
    };
    animate(0);

    const handleResize = () => {
      if (!cameraRef.current || !webglRendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      webglRendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => { cancelAnimationFrame(frameIdRef.current); window.removeEventListener('resize', handleResize); renderer.dispose(); };
  }, []);

  useEffect(() => {
    starsGroupRef.current.clear();
    connectionsGroupRef.current.clear();
    nebulaGroupRef.current.clear();

    const visibleEntries = entries.filter(e => e.timestamp <= currentTime);
    
    // Find time extent for normalization
    const earliest = entries.length > 0 ? Math.min(...entries.map(e => e.timestamp)) : currentTime;
    const timeSpan = Math.max(1, currentTime - earliest);

    const moodPoints: Record<string, THREE.Vector3[]> = {};
    visibleEntries.forEach(e => {
      if (!moodPoints[e.moodColor]) moodPoints[e.moodColor] = [];
      moodPoints[e.moodColor].push(new THREE.Vector3(e.x, e.y, e.z));
    });

    Object.entries(moodPoints).forEach(([color, pts]) => {
      const centroid = pts.reduce((a, b) => a.add(b), new THREE.Vector3()).divideScalar(pts.length);
      const neb = new THREE.Sprite(new THREE.SpriteMaterial({ 
        map: getNebulaTexture(), color: new THREE.Color(color), 
        transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending, depthWrite: false 
      }));
      neb.position.copy(centroid); 
      neb.scale.setScalar(500 + pts.length * 40);
      nebulaGroupRef.current.add(neb);
    });

    visibleEntries.forEach(entry => {
      const matchesSearch = !searchTerm || entry.text.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Calculate age factor: closer to currentTime (newest) = 1.0, furthest away = 0.4
      const ageNorm = (entry.timestamp - earliest) / timeSpan;
      const ageBrightness = 0.4 + (ageNorm * 0.6); // Range 0.4 to 1.0
      const ageScale = 0.8 + (ageNorm * 0.4); // Range 0.8 to 1.2
      
      const group = new THREE.Group(); group.name = entry.id;
      group.position.set(entry.x, entry.y, entry.z);
      
      const isFocused = activeEntryId === entry.id;
      const opacity = matchesSearch ? (isFocused ? 1.0 : ageBrightness) : 0.1;

      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ 
        map: getStarTexture(entry.moodColor), transparent: true, 
        opacity: opacity, blending: THREE.AdditiveBlending 
      }));
      
      const baseScale = isFocused ? 140 : (matchesSearch ? 50 : 20);
      sprite.scale.setScalar(baseScale * (isFocused ? 1 : ageScale));
      
      group.add(sprite);
      group.add(new THREE.Mesh(new THREE.SphereGeometry(70, 8, 8), new THREE.MeshBasicMaterial({ visible: false })));
      starsGroupRef.current.add(group);
    });

    const sorted = [...visibleEntries].sort((a,b) => a.timestamp - b.timestamp);
    for (let i = 0; i < sorted.length - 1; i++) {
      if (Math.abs(sorted[i].timestamp - sorted[i+1].timestamp) < 86400000 * 7) { 
        const geometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(sorted[i].x, sorted[i].y, sorted[i].z),
          new THREE.Vector3(sorted[i+1].x, sorted[i+1].y, sorted[i+1].z)
        ]);
        
        // Connections also fade with age
        const ageNorm = (sorted[i].timestamp - earliest) / timeSpan;
        const connectionOpacity = 0.05 + (ageNorm * 0.13);

        connectionsGroupRef.current.add(new THREE.Line(geometry, new THREE.LineBasicMaterial({ 
          color: new THREE.Color(sorted[i].moodColor), 
          transparent: true, 
          opacity: connectionOpacity 
        })));
      }
    }
  }, [entries, currentTime, activeEntryId, searchTerm]);

  useEffect(() => {
    if (resetTrigger > 0 && cameraRef.current && controlsRef.current) {
      new TWEEN.Tween(cameraRef.current.position).to({ x: 0, y: 200, z: 1800 }, 1200).easing(TWEEN.Easing.Cubic.InOut).start();
      new TWEEN.Tween(controlsRef.current.target).to({ x: 0, y: 0, z: 0 }, 1200).easing(TWEEN.Easing.Cubic.InOut).start();
    }
  }, [resetTrigger]);

  const handleInteraction = (e: React.MouseEvent) => {
    if (!webglRendererRef.current || !cameraRef.current) return;
    const rect = containerRef.current!.getBoundingClientRect();
    mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.current.setFromCamera(mouse.current, cameraRef.current);
    const intersects = raycaster.current.intersectObjects(starsGroupRef.current.children, true);
    if (intersects.length > 0) {
      let target = intersects[0].object;
      while (target.parent && target.parent !== starsGroupRef.current) target = target.parent;
      onStarClick(target.name);
      const wp = new THREE.Vector3(); target.getWorldPosition(wp);
      new TWEEN.Tween(cameraRef.current.position).to(wp.clone().add(new THREE.Vector3(0, 0, 300)), 1200).easing(TWEEN.Easing.Cubic.Out).start();
      new TWEEN.Tween(controlsRef.current!.target).to(wp, 1200).easing(TWEEN.Easing.Cubic.Out).start();
    } else {
      const vec = new THREE.Vector3(mouse.current.x, mouse.current.y, 0.5).unproject(cameraRef.current);
      const dir = vec.sub(cameraRef.current.position).normalize();
      const distance = -cameraRef.current.position.z / dir.z;
      const pos = cameraRef.current.position.clone().add(dir.multiplyScalar(distance));
      onEmptySpaceClick(pos.x, pos.y, pos.z, e.clientX, e.clientY);
    }
  };

  useEffect(() => {
    if (!videoRef.current) return;
    
    let isActive = true;
    
    // @ts-ignore
    const hands = new Hands({ locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}` });
    hands.setOptions({ maxNumHands: 2, modelComplexity: 1, minDetectionConfidence: 0.6, minTrackingConfidence: 0.6 });
    
    hands.onResults((res: any) => {
      if (!isActive) return;
      
      let lFound = false, rFound = false;
      if (res.multiHandLandmarks) {
        res.multiHandLandmarks.forEach((lm: any, idx: number) => {
          const label = res.multiHandedness[idx].label;
          const now = Date.now();
          
          // In mirrored video, 'Left' is typically the user's right hand
          if (label === 'Left') { 
            rFound = true;
            const currentX = lm[8].x;
            
            // Collect movement history for velocity detection
            xHistory.current.push({ x: currentX, t: now });
            // Maintain a short window of recent movement (150ms)
            if (xHistory.current.length > 10) {
              xHistory.current = xHistory.current.filter(p => now - p.t < 150);
            }
            
            if (xHistory.current.length > 3 && now > swipeCooldown.current) {
              const first = xHistory.current[0];
              const last = xHistory.current[xHistory.current.length - 1];
              const dx = last.x - first.x;
              const dt = last.t - first.t;
              const velocity = dt > 0 ? dx / dt : 0; // units per ms

              // Swipe threshold: a deliberate flick covering enough distance at speed
              // MediaPipe coordinates: 0 is left edge, 1 is right edge
              // Because of scaleX(-1) mirroring, dx < 0 is a physical right flick
              const swipeThreshold = 0.12; 
              const velocityThreshold = 0.0008;

              if (Math.abs(dx) > swipeThreshold && Math.abs(velocity) > velocityThreshold) {
                // If dx < 0, it means hand moved towards camera-left (physically right)
                onSwipeRef.current(dx < 0 ? 'right' : 'left');
                swipeCooldown.current = now + 500; // Shorter, more responsive cooldown
                xHistory.current = []; // Clear history after successful swipe
              }
            }
          } else {
            lFound = true;
            const d = Math.sqrt(Math.pow(lm[4].x-lm[8].x,2)+Math.pow(lm[4].y-lm[8].y,2));
            targetExpansionRef.current = (d - 0.15) * 8;
          }
        });
      }
      setLeftHandDetected(lFound); setRightHandDetected(rFound);
      if (!lFound) targetExpansionRef.current = 0;
      if (!rFound) { 
        xHistory.current = [];
      }
    });

    // @ts-ignore
    const cam = new Camera(videoRef.current, { 
      onFrame: async () => {
        if (!isActive || !videoRef.current) return;
        try {
          await hands.send({image: videoRef.current});
        } catch (e) {
          console.warn("Hands solution processed frame error:", e);
        }
      }, 
      width: 640, height: 480 
    });
    
    cam.start();
    
    return () => { 
      isActive = false;
      cam.stop(); 
      hands.close(); 
    };
  }, []); 

  return (
    <>
      <video ref={videoRef} id="hand-video-preview" autoPlay playsInline muted />
      <div className="fixed inset-0 pointer-events-none z-[999]">
        {rightHandDetected && (
           <div className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 glass-card rounded-full text-[10px] tracking-[0.2em] text-white/60 animate-pulse">
             <div className="w-2 h-2 rounded-full bg-indigo-400" />
             翻动模式
           </div>
        )}
        {leftHandDetected && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><div className={`w-20 h-20 border-2 border-white/30 rounded-full ${expansionRef.current > 0 ? 'animate-outward-ping' : 'scale-75 opacity-50'}`} /></div>}
      </div>
      <div ref={containerRef} className="w-full h-full" onClick={handleInteraction} />
    </>
  );
};

export default GalaxyEngine;
