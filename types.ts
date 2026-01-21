
export interface Point {
  x: number;
  y: number;
  z?: number;
}

export interface DiaryEntry {
  id: string;
  x: number; // World coordinates
  y: number;
  z: number; // 3D depth
  text: string;
  moodColor: string; 
  timestamp: number;
  images?: string[]; 
}

export interface Star {
  id: string;
  worldX: number;
  worldY: number;
  worldZ: number;
  size: number;
  color: string;
  glowColor: string;
  brightness: number;
  pulseSpeed: number;
  twinkleSpeed: number;
  phase: number;
  entryId?: string;
  hasImage?: boolean;
}

export interface BackgroundStar {
  x: number;
  y: number;
  z: number;
  size: number;
  baseOpacity: number;
  flickerSpeed: number;
}

export interface ViewportState {
  offsetX: number;
  offsetY: number;
  scale: number;
}
