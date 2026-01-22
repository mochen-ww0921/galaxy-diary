(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function nv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var mh={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function WS(){if(X0)return Xo;X0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Xo.Fragment=t,Xo.jsx=i,Xo.jsxs=i,Xo}var W0;function YS(){return W0||(W0=1,mh.exports=WS()),mh.exports}var wt=YS(),gh={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function qS(){if(Y0)return oe;Y0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function E(w){return w===null||typeof w!="object"?null:(w=S&&w[S]||w["@@iterator"],typeof w=="function"?w:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function v(w,K,mt){this.props=w,this.context=K,this.refs=y,this.updater=mt||A}v.prototype.isReactComponent={},v.prototype.setState=function(w,K){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,K,"setState")},v.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function P(){}P.prototype=v.prototype;function O(w,K,mt){this.props=w,this.context=K,this.refs=y,this.updater=mt||A}var N=O.prototype=new P;N.constructor=O,C(N,v.prototype),N.isPureReactComponent=!0;var F=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function R(w,K,mt){var Mt=mt.ref;return{$$typeof:o,type:w,key:K,ref:Mt!==void 0?Mt:null,props:mt}}function D(w,K){return R(w.type,K,w.props)}function k(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function it(w){var K={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(mt){return K[mt]})}var at=/\/+/g;function ft(w,K){return typeof w=="object"&&w!==null&&w.key!=null?it(""+w.key):K.toString(36)}function ot(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(B,B):(w.status="pending",w.then(function(K){w.status==="pending"&&(w.status="fulfilled",w.value=K)},function(K){w.status==="pending"&&(w.status="rejected",w.reason=K)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function L(w,K,mt,Mt,Ct){var tt=typeof w;(tt==="undefined"||tt==="boolean")&&(w=null);var W=!1;if(w===null)W=!0;else switch(tt){case"bigint":case"string":case"number":W=!0;break;case"object":switch(w.$$typeof){case o:case t:W=!0;break;case x:return W=w._init,L(W(w._payload),K,mt,Mt,Ct)}}if(W)return Ct=Ct(w),W=Mt===""?"."+ft(w,0):Mt,F(Ct)?(mt="",W!=null&&(mt=W.replace(at,"$&/")+"/"),L(Ct,K,mt,"",function(Lt){return Lt})):Ct!=null&&(k(Ct)&&(Ct=D(Ct,mt+(Ct.key==null||w&&w.key===Ct.key?"":(""+Ct.key).replace(at,"$&/")+"/")+W)),K.push(Ct)),1;W=0;var St=Mt===""?".":Mt+":";if(F(w))for(var Dt=0;Dt<w.length;Dt++)Mt=w[Dt],tt=St+ft(Mt,Dt),W+=L(Mt,K,mt,tt,Ct);else if(Dt=E(w),typeof Dt=="function")for(w=Dt.call(w),Dt=0;!(Mt=w.next()).done;)Mt=Mt.value,tt=St+ft(Mt,Dt++),W+=L(Mt,K,mt,tt,Ct);else if(tt==="object"){if(typeof w.then=="function")return L(ot(w),K,mt,Mt,Ct);throw K=String(w),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return W}function H(w,K,mt){if(w==null)return w;var Mt=[],Ct=0;return L(w,Mt,"","",function(tt){return K.call(mt,tt,Ct++)}),Mt}function Z(w){if(w._status===-1){var K=w._result;K=K(),K.then(function(mt){(w._status===0||w._status===-1)&&(w._status=1,w._result=mt)},function(mt){(w._status===0||w._status===-1)&&(w._status=2,w._result=mt)}),w._status===-1&&(w._status=0,w._result=K)}if(w._status===1)return w._result.default;throw w._result}var pt=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},dt={map:H,forEach:function(w,K,mt){H(w,function(){K.apply(this,arguments)},mt)},count:function(w){var K=0;return H(w,function(){K++}),K},toArray:function(w){return H(w,function(K){return K})||[]},only:function(w){if(!k(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return oe.Activity=g,oe.Children=dt,oe.Component=v,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=O,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,oe.__COMPILER_RUNTIME={__proto__:null,c:function(w){return z.H.useMemoCache(w)}},oe.cache=function(w){return function(){return w.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(w,K,mt){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var Mt=C({},w.props),Ct=w.key;if(K!=null)for(tt in K.key!==void 0&&(Ct=""+K.key),K)!$.call(K,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&K.ref===void 0||(Mt[tt]=K[tt]);var tt=arguments.length-2;if(tt===1)Mt.children=mt;else if(1<tt){for(var W=Array(tt),St=0;St<tt;St++)W[St]=arguments[St+2];Mt.children=W}return R(w.type,Ct,Mt)},oe.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:c,_context:w},w},oe.createElement=function(w,K,mt){var Mt,Ct={},tt=null;if(K!=null)for(Mt in K.key!==void 0&&(tt=""+K.key),K)$.call(K,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Ct[Mt]=K[Mt]);var W=arguments.length-2;if(W===1)Ct.children=mt;else if(1<W){for(var St=Array(W),Dt=0;Dt<W;Dt++)St[Dt]=arguments[Dt+2];Ct.children=St}if(w&&w.defaultProps)for(Mt in W=w.defaultProps,W)Ct[Mt]===void 0&&(Ct[Mt]=W[Mt]);return R(w,tt,Ct)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(w){return{$$typeof:d,render:w}},oe.isValidElement=k,oe.lazy=function(w){return{$$typeof:x,_payload:{_status:-1,_result:w},_init:Z}},oe.memo=function(w,K){return{$$typeof:p,type:w,compare:K===void 0?null:K}},oe.startTransition=function(w){var K=z.T,mt={};z.T=mt;try{var Mt=w(),Ct=z.S;Ct!==null&&Ct(mt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(B,pt)}catch(tt){pt(tt)}finally{K!==null&&mt.types!==null&&(K.types=mt.types),z.T=K}},oe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},oe.use=function(w){return z.H.use(w)},oe.useActionState=function(w,K,mt){return z.H.useActionState(w,K,mt)},oe.useCallback=function(w,K){return z.H.useCallback(w,K)},oe.useContext=function(w){return z.H.useContext(w)},oe.useDebugValue=function(){},oe.useDeferredValue=function(w,K){return z.H.useDeferredValue(w,K)},oe.useEffect=function(w,K){return z.H.useEffect(w,K)},oe.useEffectEvent=function(w){return z.H.useEffectEvent(w)},oe.useId=function(){return z.H.useId()},oe.useImperativeHandle=function(w,K,mt){return z.H.useImperativeHandle(w,K,mt)},oe.useInsertionEffect=function(w,K){return z.H.useInsertionEffect(w,K)},oe.useLayoutEffect=function(w,K){return z.H.useLayoutEffect(w,K)},oe.useMemo=function(w,K){return z.H.useMemo(w,K)},oe.useOptimistic=function(w,K){return z.H.useOptimistic(w,K)},oe.useReducer=function(w,K,mt){return z.H.useReducer(w,K,mt)},oe.useRef=function(w){return z.H.useRef(w)},oe.useState=function(w){return z.H.useState(w)},oe.useSyncExternalStore=function(w,K,mt){return z.H.useSyncExternalStore(w,K,mt)},oe.useTransition=function(){return z.H.useTransition()},oe.version="19.2.3",oe}var q0;function Qd(){return q0||(q0=1,gh.exports=qS()),gh.exports}var ee=Qd();const jS=nv(ee);var _h={exports:{}},Wo={},vh={exports:{}},xh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function ZS(){return j0||(j0=1,(function(o){function t(L,H){var Z=L.length;L.push(H);t:for(;0<Z;){var pt=Z-1>>>1,dt=L[pt];if(0<l(dt,H))L[pt]=H,L[Z]=dt,Z=pt;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var H=L[0],Z=L.pop();if(Z!==H){L[0]=Z;t:for(var pt=0,dt=L.length,w=dt>>>1;pt<w;){var K=2*(pt+1)-1,mt=L[K],Mt=K+1,Ct=L[Mt];if(0>l(mt,Z))Mt<dt&&0>l(Ct,mt)?(L[pt]=Ct,L[Mt]=Z,pt=Mt):(L[pt]=mt,L[K]=Z,pt=K);else if(Mt<dt&&0>l(Ct,Z))L[pt]=Ct,L[Mt]=Z,pt=Mt;else break t}}return H}function l(L,H){var Z=L.sortIndex-H.sortIndex;return Z!==0?Z:L.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,g=null,S=3,E=!1,A=!1,C=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(L){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=L)s(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function F(L){if(C=!1,N(L),!A)if(i(m)!==null)A=!0,B||(B=!0,it());else{var H=i(p);H!==null&&ot(F,H.startTime-L)}}var B=!1,z=-1,$=5,R=-1;function D(){return y?!0:!(o.unstable_now()-R<$)}function k(){if(y=!1,B){var L=o.unstable_now();R=L;var H=!0;try{t:{A=!1,C&&(C=!1,P(z),z=-1),E=!0;var Z=S;try{e:{for(N(L),g=i(m);g!==null&&!(g.expirationTime>L&&D());){var pt=g.callback;if(typeof pt=="function"){g.callback=null,S=g.priorityLevel;var dt=pt(g.expirationTime<=L);if(L=o.unstable_now(),typeof dt=="function"){g.callback=dt,N(L),H=!0;break e}g===i(m)&&s(m),N(L)}else s(m);g=i(m)}if(g!==null)H=!0;else{var w=i(p);w!==null&&ot(F,w.startTime-L),H=!1}}break t}finally{g=null,S=Z,E=!1}H=void 0}}finally{H?it():B=!1}}}var it;if(typeof O=="function")it=function(){O(k)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ft=at.port2;at.port1.onmessage=k,it=function(){ft.postMessage(null)}}else it=function(){v(k,0)};function ot(L,H){z=v(function(){L(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(L){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var Z=S;S=H;try{return L()}finally{S=Z}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(L,H){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=S;S=L;try{return H()}finally{S=Z}},o.unstable_scheduleCallback=function(L,H,Z){var pt=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?pt+Z:pt):Z=pt,L){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=Z+dt,L={id:x++,callback:H,priorityLevel:L,startTime:Z,expirationTime:dt,sortIndex:-1},Z>pt?(L.sortIndex=Z,t(p,L),i(m)===null&&L===i(p)&&(C?(P(z),z=-1):C=!0,ot(F,Z-pt))):(L.sortIndex=dt,t(m,L),A||E||(A=!0,B||(B=!0,it()))),L},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(L){var H=S;return function(){var Z=S;S=H;try{return L.apply(this,arguments)}finally{S=Z}}}})(xh)),xh}var Z0;function KS(){return Z0||(Z0=1,vh.exports=ZS()),vh.exports}var Sh={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function QS(){if(K0)return Ln;K0=1;var o=Qd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,x)},Ln.flushSync=function(m){var p=h.T,x=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=x,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:E}):x==="script"&&s.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,x){return h.H.useFormState(m,p,x)},Ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ln.version="19.2.3",Ln}var Q0;function JS(){if(Q0)return Sh.exports;Q0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Sh.exports=QS(),Sh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function $S(){if(J0)return Wo;J0=1;var o=KS(),t=Qd(),i=JS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,b=u.child;b;){if(b===a){_=!0,a=u,r=f;break}if(b===r){_=!0,r=u,a=f;break}b=b.sibling}if(!_){for(b=f.child;b;){if(b===a){_=!0,a=f,r=u;break}if(b===r){_=!0,r=f,a=u;break}b=b.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),O=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case O:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case $:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var ot=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},pt=[],dt=-1;function w(e){return{current:e}}function K(e){0>dt||(e.current=pt[dt],pt[dt]=null,dt--)}function mt(e,n){dt++,pt[dt]=e.current,e.current=n}var Mt=w(null),Ct=w(null),tt=w(null),W=w(null);function St(e,n){switch(mt(tt,n),mt(Ct,e),mt(Mt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?d0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=d0(n),e=p0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(Mt),mt(Mt,e)}function Dt(){K(Mt),K(Ct),K(tt)}function Lt(e){e.memoizedState!==null&&mt(W,e);var n=Mt.current,a=p0(n,e.type);n!==a&&(mt(Ct,e),mt(Mt,a))}function ue(e){Ct.current===e&&(K(Mt),K(Ct)),W.current===e&&(K(W),Ho._currentValue=Z)}var tn,xe;function me(e){if(tn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);tn=n&&n[1]||"",xe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tn+e+xe}var we=!1;function le(e,n){if(!e||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var rt=ct}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ct){rt=ct}e.call(vt.prototype)}}else{try{throw Error()}catch(ct){rt=ct}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&rt&&typeof ct.stack=="string")return[ct.stack,rt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],b=f[1];if(_&&b){var I=_.split(`
`),nt=b.split(`
`);for(u=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(r===I.length||u===nt.length)for(r=I.length-1,u=nt.length-1;1<=r&&0<=u&&I[r]!==nt[u];)u--;for(;1<=r&&0<=u;r--,u--)if(I[r]!==nt[u]){if(r!==1||u!==1)do if(r--,u--,0>u||I[r]!==nt[u]){var ht=`
`+I[r].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=r&&0<=u);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?me(a):""}function en(e,n){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return me("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=en(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ke=Object.prototype.hasOwnProperty,Ee=o.unstable_scheduleCallback,Le=o.unstable_cancelCallback,qt=o.unstable_shouldYield,U=o.unstable_requestPaint,M=o.unstable_now,Y=o.unstable_getCurrentPriorityLevel,gt=o.unstable_ImmediatePriority,yt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,Xt=o.log,ne=o.unstable_setDisableYieldValue,bt=null,Tt=null;function Ht(e){if(typeof Xt=="function"&&ne(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(bt,e)}catch{}}var It=Math.clz32?Math.clz32:X,Nt=Math.log,fe=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Nt(e)/fe|0)|0}var Pt=256,At=262144,Bt=4194304;function Et(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?u=Et(r):(_&=b,_!==0?u=Et(_):a||(a=b&~e,a!==0&&(u=Et(a))))):(b=r&~f,b!==0?u=Et(b):_!==0?u=Et(_):a||(a=r&~e,a!==0&&(u=Et(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Rt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ei(e,n,a,r,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,I=e.expirationTimes,nt=e.hiddenUpdates;for(a=_&~a;0<a;){var ht=31-It(a),vt=1<<ht;b[ht]=0,I[ht]=-1;var rt=nt[ht];if(rt!==null)for(nt[ht]=null,ht=0;ht<rt.length;ht++){var ct=rt[ht];ct!==null&&(ct.lane&=-536870913)}a&=~vt}r!==0&&cl(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function cl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-It(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Qr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-It(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Hs(e,n){var a=n&-n;return a=(a&42)!==0?1:Jr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Jr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $r(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:F0(e.type))}function Li(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var ri=Math.random().toString(36).slice(2),ln="__reactFiber$"+ri,yn="__reactProps$"+ri,bi="__reactContainer$"+ri,Vs="__reactEvents$"+ri,ks="__reactListeners$"+ri,ul="__reactHandles$"+ri,to="__reactResources$"+ri,cs="__reactMarker$"+ri;function eo(e){delete e[ln],delete e[yn],delete e[Vs],delete e[ks],delete e[ul]}function Aa(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[bi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=y0(e);e!==null;){if(a=e[ln])return a;e=y0(e)}return n}e=a,a=e.parentNode}return null}function Ra(e){if(e=e[ln]||e[bi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function us(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ca(e){var n=e[to];return n||(n=e[to]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function T(e){e[cs]=!0}var q=new Set,lt={};function st(e,n){Q(e,n),Q(e+"Capture",n)}function Q(e,n){for(lt[e]=n,e=0;e<n.length;e++)q.add(n[e])}var Ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gt={},zt={};function Vt(e){return Ke.call(zt,e)?!0:Ke.call(Gt,e)?!1:Ot.test(e)?zt[e]=!0:(Gt[e]=!0,!1)}function Wt(e,n,a){if(Vt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Jt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Yt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qe(e){if(!e._valueTracker){var n=De(e)?"checked":"value";e._valueTracker=Qe(e,n,""+e[n])}}function Oe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=De(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ue=/[\n"\\]/g;function se(e){return e.replace(Ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mn(e,n,a,r,u,f,_,b){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$t(n)):e.value!==""+$t(n)&&(e.value=""+$t(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?En(e,_,$t(n)):a!=null?En(e,_,$t(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+$t(b):e.removeAttribute("name")}function Ki(e,n,a,r,u,f,_,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qe(e);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),qe(e)}function En(e,n,a){n==="number"&&Kt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function oi(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Fe(e,n,a){if(n!=null&&(n=""+$t(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$t(a):""}function bn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ot(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=$t(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),qe(e)}function pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function An(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Tn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Xs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&An(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&An(e,f,n[f])}function Ti(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(e){return Vv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qi(){}var fu=null;function hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,Ys=null;function hp(e){var n=Ra(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Mn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[yn]||null;if(!u)throw Error(s(90));Mn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Oe(r)}break t;case"textarea":Fe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&oi(e,!!a.multiple,n,!1)}}}var du=!1;function dp(e,n,a){if(du)return e(n,a);du=!0;try{var r=e(n);return r}finally{if(du=!1,(Ws!==null||Ys!==null)&&(Jl(),Ws&&(n=Ws,e=Ys,Ys=Ws=null,hp(n),e)))for(n=0;n<e.length;n++)hp(e[n])}}function no(e,n){var a=e.stateNode;if(a===null)return null;var r=a[yn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=!1;if(Ji)try{var io={};Object.defineProperty(io,"passive",{get:function(){pu=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{pu=!1}var wa=null,mu=null,hl=null;function pp(){if(hl)return hl;var e,n=mu,a=n.length,r,u="value"in wa?wa.value:wa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return hl=u.slice(e,1<r?1-r:void 0)}function dl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function pl(){return!0}function mp(){return!1}function Vn(e){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?pl:mp,this.isPropagationStopped=mp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Vn(fs),ao=g({},fs,{view:0,detail:0}),kv=Vn(ao),gu,_u,so,gl=g({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(gu=e.screenX-so.screenX,_u=e.screenY-so.screenY):_u=gu=0,so=e),gu)},movementY:function(e){return"movementY"in e?e.movementY:_u}}),gp=Vn(gl),Xv=g({},gl,{dataTransfer:0}),Wv=Vn(Xv),Yv=g({},ao,{relatedTarget:0}),vu=Vn(Yv),qv=g({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=Vn(qv),Zv=g({},fs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kv=Vn(Zv),Qv=g({},fs,{data:0}),_p=Vn(Qv),Jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ex(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=tx[e])?!!n[e]:!1}function xu(){return ex}var nx=g({},ao,{key:function(e){if(e.key){var n=Jv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$v[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ix=Vn(nx),ax=g({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=Vn(ax),sx=g({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),rx=Vn(sx),ox=g({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Vn(ox),cx=g({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=Vn(cx),fx=g({},fs,{newState:0,oldState:0}),hx=Vn(fx),dx=[9,13,27,32],Su=Ji&&"CompositionEvent"in window,ro=null;Ji&&"documentMode"in document&&(ro=document.documentMode);var px=Ji&&"TextEvent"in window&&!ro,xp=Ji&&(!Su||ro&&8<ro&&11>=ro),Sp=" ",yp=!1;function Mp(e,n){switch(e){case"keyup":return dx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qs=!1;function mx(e,n){switch(e){case"compositionend":return Ep(n);case"keypress":return n.which!==32?null:(yp=!0,Sp);case"textInput":return e=n.data,e===Sp&&yp?null:e;default:return null}}function gx(e,n){if(qs)return e==="compositionend"||!Su&&Mp(e,n)?(e=pp(),hl=mu=wa=null,qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xp&&n.locale!=="ko"?null:n.data;default:return null}}var _x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!_x[e.type]:n==="textarea"}function Tp(e,n,a,r){Ws?Ys?Ys.push(r):Ys=[r]:Ws=r,n=sc(n,"onChange"),0<n.length&&(a=new ml("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var oo=null,lo=null;function vx(e){o0(e,0)}function _l(e){var n=us(e);if(Oe(n))return e}function Ap(e,n){if(e==="change")return n}var Rp=!1;if(Ji){var yu;if(Ji){var Mu="oninput"in document;if(!Mu){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Mu=typeof Cp.oninput=="function"}yu=Mu}else yu=!1;Rp=yu&&(!document.documentMode||9<document.documentMode)}function wp(){oo&&(oo.detachEvent("onpropertychange",Dp),lo=oo=null)}function Dp(e){if(e.propertyName==="value"&&_l(lo)){var n=[];Tp(n,lo,e,hu(e)),dp(vx,n)}}function xx(e,n,a){e==="focusin"?(wp(),oo=n,lo=a,oo.attachEvent("onpropertychange",Dp)):e==="focusout"&&wp()}function Sx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(lo)}function yx(e,n){if(e==="click")return _l(n)}function Mx(e,n){if(e==="input"||e==="change")return _l(n)}function Ex(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:Ex;function co(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Ke.call(n,u)||!Kn(e[u],n[u]))return!1}return!0}function Up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Np(e,n){var a=Up(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Up(a)}}function Lp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Lp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Op(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Kt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Kt(e.document)}return n}function Eu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var bx=Ji&&"documentMode"in document&&11>=document.documentMode,js=null,bu=null,uo=null,Tu=!1;function Pp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tu||js==null||js!==Kt(r)||(r=js,"selectionStart"in r&&Eu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),uo&&co(uo,r)||(uo=r,r=sc(bu,"onSelect"),0<r.length&&(n=new ml("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=js)))}function hs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Zs={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Au={},zp={};Ji&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function ds(e){if(Au[e])return Au[e];if(!Zs[e])return e;var n=Zs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in zp)return Au[e]=n[a];return e}var Fp=ds("animationend"),Ip=ds("animationiteration"),Bp=ds("animationstart"),Tx=ds("transitionrun"),Ax=ds("transitionstart"),Rx=ds("transitioncancel"),Hp=ds("transitionend"),Gp=new Map,Ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ru.push("scrollEnd");function Ai(e,n){Gp.set(e,n),st(n,[e])}var vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},li=[],Ks=0,Cu=0;function xl(){for(var e=Ks,n=Cu=Ks=0;n<e;){var a=li[n];li[n++]=null;var r=li[n];li[n++]=null;var u=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&Vp(a,u,f)}}function Sl(e,n,a,r){li[Ks++]=e,li[Ks++]=n,li[Ks++]=a,li[Ks++]=r,Cu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function wu(e,n,a,r){return Sl(e,n,a,r),yl(e)}function ps(e,n){return Sl(e,null,null,n),yl(e)}function Vp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-It(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function yl(e){if(50<Lo)throw Lo=0,Bf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Qs={};function Cx(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,r){return new Cx(e,n,a,r)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function kp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ml(e,n,a,r,u,f){var _=0;if(r=e,typeof e=="function")Du(e)&&(_=1);else if(typeof e=="string")_=LS(e,a,Mt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=Qn(31,a,n,u),e.elementType=R,e.lanes=f,e;case C:return ms(a.children,u,f,n);case y:_=8,u|=24;break;case v:return e=Qn(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case F:return e=Qn(13,a,n,u),e.elementType=F,e.lanes=f,e;case B:return e=Qn(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:_=10;break t;case P:_=9;break t;case N:_=11;break t;case z:_=14;break t;case $:_=16,r=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Qn(_,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function ms(e,n,a,r){return e=Qn(7,e,r,n),e.lanes=a,e}function Uu(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function Xp(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function Nu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Wp=new WeakMap;function ci(e,n){if(typeof e=="object"&&e!==null){var a=Wp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},Wp.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var Js=[],$s=0,El=null,fo=0,ui=[],fi=0,Da=null,Oi=1,Pi="";function ta(e,n){Js[$s++]=fo,Js[$s++]=El,El=e,fo=n}function Yp(e,n,a){ui[fi++]=Oi,ui[fi++]=Pi,ui[fi++]=Da,Da=e;var r=Oi;e=Pi;var u=32-It(r)-1;r&=~(1<<u),a+=1;var f=32-It(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,Oi=1<<32-It(n)+u|a<<u|r,Pi=f+e}else Oi=1<<f|a<<u|r,Pi=e}function Lu(e){e.return!==null&&(ta(e,1),Yp(e,1,0))}function Ou(e){for(;e===El;)El=Js[--$s],Js[$s]=null,fo=Js[--$s],Js[$s]=null;for(;e===Da;)Da=ui[--fi],ui[fi]=null,Pi=ui[--fi],ui[fi]=null,Oi=ui[--fi],ui[fi]=null}function qp(e,n){ui[fi++]=Oi,ui[fi++]=Pi,ui[fi++]=Da,Oi=n.id,Pi=n.overflow,Da=e}var Rn=null,je=null,Me=!1,Ua=null,hi=!1,Pu=Error(s(519));function Na(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ho(ci(n,e)),Pu}function jp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[ln]=e,n[yn]=r,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<Po.length;a++)_e(Po[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Ki(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),bn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||f0(n.textContent,a)?(r.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),r.onScroll!=null&&_e("scroll",n),r.onScrollEnd!=null&&_e("scrollend",n),r.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||Na(e,!0)}function Zp(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:Rn=Rn.return}}function tr(e){if(e!==Rn)return!1;if(!Me)return Zp(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||th(e.type,e.memoizedProps)),a=!a),a&&je&&Na(e),Zp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=S0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=S0(e)}else n===27?(n=je,Ya(e.type)?(e=sh,sh=null,je=e):je=n):je=Rn?pi(e.stateNode.nextSibling):null;return!0}function gs(){je=Rn=null,Me=!1}function zu(){var e=Ua;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Ua=null),e}function ho(e){Ua===null?Ua=[e]:Ua.push(e)}var Fu=w(null),_s=null,ea=null;function La(e,n,a){mt(Fu,n._currentValue),n._currentValue=a}function na(e){e._currentValue=Fu.current,K(Fu)}function Iu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Bu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var I=0;I<n.length;I++)if(b.context===n[I]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Iu(f.return,a,e),r||(_=null);break t}f=b.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Iu(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function er(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var b=u.type;Kn(u.pendingProps.value,_.value)||(e!==null?e.push(b):e=[b])}}else if(u===W.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ho):e=[Ho])}u=u.return}e!==null&&Bu(n,e,a,r),n.flags|=262144}function bl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){_s=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return Kp(_s,e)}function Tl(e,n){return _s===null&&vs(e),Kp(e,n)}function Kp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(e===null)throw Error(s(308));ea=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ea=ea.next=n;return a}var wx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Dx=o.unstable_scheduleCallback,Ux=o.unstable_NormalPriority,cn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new wx,data:new Map,refCount:0}}function po(e){e.refCount--,e.refCount===0&&Dx(Ux,function(){e.controller.abort()})}var mo=null,Gu=0,nr=0,ir=null;function Nx(e,n){if(mo===null){var a=mo=[];Gu=0,nr=Wf(),ir={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Gu++,n.then(Qp,Qp),n}function Qp(){if(--Gu===0&&mo!==null){ir!==null&&(ir.status="fulfilled");var e=mo;mo=null,nr=0,ir=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Lx(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Jp=L.S;L.S=function(e,n){Pg=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Nx(e,n),Jp!==null&&Jp(e,n)};var xs=w(null);function Vu(){var e=xs.current;return e!==null?e:Ye.pooledCache}function Al(e,n){n===null?mt(xs,xs.current):mt(xs,n.pool)}function $p(){var e=Vu();return e===null?null:{parent:cn._currentValue,pool:e}}var ar=Error(s(460)),ku=Error(s(474)),Rl=Error(s(542)),Cl={then:function(){}};function tm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function em(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Qi,Qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,im(e),e;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,im(e),e}throw ys=n,ar}}function Ss(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ys=a,ar):a}}var ys=null;function nm(){if(ys===null)throw Error(s(459));var e=ys;return ys=null,e}function im(e){if(e===ar||e===Rl)throw Error(s(483))}var sr=null,go=0;function wl(e){var n=go;return go+=1,sr===null&&(sr=[]),em(sr,e,n)}function _o(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Dl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function am(e){function n(j,V){if(e){var et=j.deletions;et===null?(j.deletions=[V],j.flags|=16):et.push(V)}}function a(j,V){if(!e)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function r(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function u(j,V){return j=$i(j,V),j.index=0,j.sibling=null,j}function f(j,V,et){return j.index=et,e?(et=j.alternate,et!==null?(et=et.index,et<V?(j.flags|=67108866,V):et):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function _(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function b(j,V,et,_t){return V===null||V.tag!==6?(V=Uu(et,j.mode,_t),V.return=j,V):(V=u(V,et),V.return=j,V)}function I(j,V,et,_t){var Qt=et.type;return Qt===C?ht(j,V,et.props.children,_t,et.key):V!==null&&(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===$&&Ss(Qt)===V.type)?(V=u(V,et.props),_o(V,et),V.return=j,V):(V=Ml(et.type,et.key,et.props,null,j.mode,_t),_o(V,et),V.return=j,V)}function nt(j,V,et,_t){return V===null||V.tag!==4||V.stateNode.containerInfo!==et.containerInfo||V.stateNode.implementation!==et.implementation?(V=Nu(et,j.mode,_t),V.return=j,V):(V=u(V,et.children||[]),V.return=j,V)}function ht(j,V,et,_t,Qt){return V===null||V.tag!==7?(V=ms(et,j.mode,_t,Qt),V.return=j,V):(V=u(V,et),V.return=j,V)}function vt(j,V,et){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Uu(""+V,j.mode,et),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return et=Ml(V.type,V.key,V.props,null,j.mode,et),_o(et,V),et.return=j,et;case A:return V=Nu(V,j.mode,et),V.return=j,V;case $:return V=Ss(V),vt(j,V,et)}if(ot(V)||it(V))return V=ms(V,j.mode,et,null),V.return=j,V;if(typeof V.then=="function")return vt(j,wl(V),et);if(V.$$typeof===O)return vt(j,Tl(j,V),et);Dl(j,V)}return null}function rt(j,V,et,_t){var Qt=V!==null?V.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Qt!==null?null:b(j,V,""+et,_t);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case E:return et.key===Qt?I(j,V,et,_t):null;case A:return et.key===Qt?nt(j,V,et,_t):null;case $:return et=Ss(et),rt(j,V,et,_t)}if(ot(et)||it(et))return Qt!==null?null:ht(j,V,et,_t,null);if(typeof et.then=="function")return rt(j,V,wl(et),_t);if(et.$$typeof===O)return rt(j,V,Tl(j,et),_t);Dl(j,et)}return null}function ct(j,V,et,_t,Qt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return j=j.get(et)||null,b(V,j,""+_t,Qt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case E:return j=j.get(_t.key===null?et:_t.key)||null,I(V,j,_t,Qt);case A:return j=j.get(_t.key===null?et:_t.key)||null,nt(V,j,_t,Qt);case $:return _t=Ss(_t),ct(j,V,et,_t,Qt)}if(ot(_t)||it(_t))return j=j.get(et)||null,ht(V,j,_t,Qt,null);if(typeof _t.then=="function")return ct(j,V,et,wl(_t),Qt);if(_t.$$typeof===O)return ct(j,V,et,Tl(V,_t),Qt);Dl(V,_t)}return null}function kt(j,V,et,_t){for(var Qt=null,Re=null,jt=V,he=V=0,ye=null;jt!==null&&he<et.length;he++){jt.index>he?(ye=jt,jt=null):ye=jt.sibling;var Ce=rt(j,jt,et[he],_t);if(Ce===null){jt===null&&(jt=ye);break}e&&jt&&Ce.alternate===null&&n(j,jt),V=f(Ce,V,he),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce,jt=ye}if(he===et.length)return a(j,jt),Me&&ta(j,he),Qt;if(jt===null){for(;he<et.length;he++)jt=vt(j,et[he],_t),jt!==null&&(V=f(jt,V,he),Re===null?Qt=jt:Re.sibling=jt,Re=jt);return Me&&ta(j,he),Qt}for(jt=r(jt);he<et.length;he++)ye=ct(jt,j,he,et[he],_t),ye!==null&&(e&&ye.alternate!==null&&jt.delete(ye.key===null?he:ye.key),V=f(ye,V,he),Re===null?Qt=ye:Re.sibling=ye,Re=ye);return e&&jt.forEach(function(Qa){return n(j,Qa)}),Me&&ta(j,he),Qt}function te(j,V,et,_t){if(et==null)throw Error(s(151));for(var Qt=null,Re=null,jt=V,he=V=0,ye=null,Ce=et.next();jt!==null&&!Ce.done;he++,Ce=et.next()){jt.index>he?(ye=jt,jt=null):ye=jt.sibling;var Qa=rt(j,jt,Ce.value,_t);if(Qa===null){jt===null&&(jt=ye);break}e&&jt&&Qa.alternate===null&&n(j,jt),V=f(Qa,V,he),Re===null?Qt=Qa:Re.sibling=Qa,Re=Qa,jt=ye}if(Ce.done)return a(j,jt),Me&&ta(j,he),Qt;if(jt===null){for(;!Ce.done;he++,Ce=et.next())Ce=vt(j,Ce.value,_t),Ce!==null&&(V=f(Ce,V,he),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce);return Me&&ta(j,he),Qt}for(jt=r(jt);!Ce.done;he++,Ce=et.next())Ce=ct(jt,j,he,Ce.value,_t),Ce!==null&&(e&&Ce.alternate!==null&&jt.delete(Ce.key===null?he:Ce.key),V=f(Ce,V,he),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce);return e&&jt.forEach(function(XS){return n(j,XS)}),Me&&ta(j,he),Qt}function ke(j,V,et,_t){if(typeof et=="object"&&et!==null&&et.type===C&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case E:t:{for(var Qt=et.key;V!==null;){if(V.key===Qt){if(Qt=et.type,Qt===C){if(V.tag===7){a(j,V.sibling),_t=u(V,et.props.children),_t.return=j,j=_t;break t}}else if(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===$&&Ss(Qt)===V.type){a(j,V.sibling),_t=u(V,et.props),_o(_t,et),_t.return=j,j=_t;break t}a(j,V);break}else n(j,V);V=V.sibling}et.type===C?(_t=ms(et.props.children,j.mode,_t,et.key),_t.return=j,j=_t):(_t=Ml(et.type,et.key,et.props,null,j.mode,_t),_o(_t,et),_t.return=j,j=_t)}return _(j);case A:t:{for(Qt=et.key;V!==null;){if(V.key===Qt)if(V.tag===4&&V.stateNode.containerInfo===et.containerInfo&&V.stateNode.implementation===et.implementation){a(j,V.sibling),_t=u(V,et.children||[]),_t.return=j,j=_t;break t}else{a(j,V);break}else n(j,V);V=V.sibling}_t=Nu(et,j.mode,_t),_t.return=j,j=_t}return _(j);case $:return et=Ss(et),ke(j,V,et,_t)}if(ot(et))return kt(j,V,et,_t);if(it(et)){if(Qt=it(et),typeof Qt!="function")throw Error(s(150));return et=Qt.call(et),te(j,V,et,_t)}if(typeof et.then=="function")return ke(j,V,wl(et),_t);if(et.$$typeof===O)return ke(j,V,Tl(j,et),_t);Dl(j,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,V!==null&&V.tag===6?(a(j,V.sibling),_t=u(V,et),_t.return=j,j=_t):(a(j,V),_t=Uu(et,j.mode,_t),_t.return=j,j=_t),_(j)):a(j,V)}return function(j,V,et,_t){try{go=0;var Qt=ke(j,V,et,_t);return sr=null,Qt}catch(jt){if(jt===ar||jt===Rl)throw jt;var Re=Qn(29,jt,null,j.mode);return Re.lanes=_t,Re.return=j,Re}finally{}}}var Ms=am(!0),sm=am(!1),Oa=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ne&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=yl(e),Vp(e,null,a),n}return Sl(e,r,n,a),yl(e)}function vo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Qr(e,a)}}function Yu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var qu=!1;function xo(){if(qu){var e=ir;if(e!==null)throw e}}function So(e,n,a,r){qu=!1;var u=e.updateQueue;Oa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var I=b,nt=I.next;I.next=null,_===null?f=nt:_.next=nt,_=I;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,b=ht.lastBaseUpdate,b!==_&&(b===null?ht.firstBaseUpdate=nt:b.next=nt,ht.lastBaseUpdate=I))}if(f!==null){var vt=u.baseState;_=0,ht=nt=I=null,b=f;do{var rt=b.lane&-536870913,ct=rt!==b.lane;if(ct?(Se&rt)===rt:(r&rt)===rt){rt!==0&&rt===nr&&(qu=!0),ht!==null&&(ht=ht.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var kt=e,te=b;rt=n;var ke=a;switch(te.tag){case 1:if(kt=te.payload,typeof kt=="function"){vt=kt.call(ke,vt,rt);break t}vt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=te.payload,rt=typeof kt=="function"?kt.call(ke,vt,rt):kt,rt==null)break t;vt=g({},vt,rt);break t;case 2:Oa=!0}}rt=b.callback,rt!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[rt]:ct.push(rt))}else ct={lane:rt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ht===null?(nt=ht=ct,I=vt):ht=ht.next=ct,_|=rt;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ct=b,b=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);ht===null&&(I=vt),u.baseState=I,u.firstBaseUpdate=nt,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Ga|=_,e.lanes=_,e.memoizedState=vt}}function rm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function om(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)rm(a[e],n)}var rr=w(null),Ul=w(0);function lm(e,n){e=fa,mt(Ul,e),mt(rr,n),fa=e|n.baseLanes}function ju(){mt(Ul,fa),mt(rr,rr.current)}function Zu(){fa=Ul.current,K(rr),K(Ul)}var Jn=w(null),di=null;function Fa(e){var n=e.alternate;mt(sn,sn.current&1),mt(Jn,e),di===null&&(n===null||rr.current!==null||n.memoizedState!==null)&&(di=e)}function Ku(e){mt(sn,sn.current),mt(Jn,e),di===null&&(di=e)}function cm(e){e.tag===22?(mt(sn,sn.current),mt(Jn,e),di===null&&(di=e)):Ia()}function Ia(){mt(sn,sn.current),mt(Jn,Jn.current)}function $n(e){K(Jn),di===e&&(di=null),K(sn)}var sn=w(0);function Nl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ih(a)||ah(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,ce=null,Ge=null,un=null,Ll=!1,or=!1,Es=!1,Ol=0,yo=0,lr=null,Ox=0;function nn(){throw Error(s(321))}function Qu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function Ju(e,n,a,r,u,f){return ia=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?Ym:pf,Es=!1,f=a(r,u),Es=!1,or&&(f=fm(n,a,r,u)),um(e),f}function um(e){L.H=bo;var n=Ge!==null&&Ge.next!==null;if(ia=0,un=Ge=ce=null,Ll=!1,yo=0,lr=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&bl(e)&&(fn=!0))}function fm(e,n,a,r){ce=e;var u=0;do{if(or&&(lr=null),yo=0,or=!1,25<=u)throw Error(s(301));if(u+=1,un=Ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=qm,f=n(a,r)}while(or);return f}function Px(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?Mo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ce.flags|=1024),n}function $u(){var e=Ol!==0;return Ol=0,e}function tf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ef(e){if(Ll){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ll=!1}ia=0,un=Ge=ce=null,or=!1,yo=Ol=0,lr=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ce.memoizedState=un=e:un=un.next=e,un}function rn(){if(Ge===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=un===null?ce.memoizedState:un.next;if(n!==null)un=n,Ge=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},un===null?ce.memoizedState=un=e:un=un.next=e}return un}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var n=yo;return yo+=1,lr===null&&(lr=[]),e=em(lr,e,n),n=ce,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Ym:pf),e}function zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mo(e);if(e.$$typeof===O)return Cn(e)}throw Error(s(438,String(e)))}function nf(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ce.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pl(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=D;return n.index++,a}function aa(e,n){return typeof n=="function"?n(e):n}function Fl(e){var n=rn();return af(n,Ge,e)}function af(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=_=null,I=null,nt=n,ht=!1;do{var vt=nt.lane&-536870913;if(vt!==nt.lane?(Se&vt)===vt:(ia&vt)===vt){var rt=nt.revertLane;if(rt===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),vt===nr&&(ht=!0);else if((ia&rt)===rt){nt=nt.next,rt===nr&&(ht=!0);continue}else vt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},I===null?(b=I=vt,_=f):I=I.next=vt,ce.lanes|=rt,Ga|=rt;vt=nt.action,Es&&a(f,vt),f=nt.hasEagerState?nt.eagerState:a(f,vt)}else rt={lane:vt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},I===null?(b=I=rt,_=f):I=I.next=rt,ce.lanes|=vt,Ga|=vt;nt=nt.next}while(nt!==null&&nt!==n);if(I===null?_=f:I.next=b,!Kn(f,e.memoizedState)&&(fn=!0,ht&&(a=ir,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=I,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function sf(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);Kn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function hm(e,n,a){var r=ce,u=rn(),f=Me;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Kn((Ge||u).memoizedState,a);if(_&&(u.memoizedState=a,fn=!0),u=u.queue,lf(mm.bind(null,r,u,e),[e]),u.getSnapshot!==n||_||un!==null&&un.memoizedState.tag&1){if(r.flags|=2048,cr(9,{destroy:void 0},pm.bind(null,r,u,a,n),null),Ye===null)throw Error(s(349));f||(ia&127)!==0||dm(r,n,a)}return a}function dm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Pl(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function pm(e,n,a,r){n.value=a,n.getSnapshot=r,gm(n)&&_m(e)}function mm(e,n,a){return a(function(){gm(n)&&_m(e)})}function gm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function _m(e){var n=ps(e,2);n!==null&&qn(n,e,2)}function rf(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),Es){Ht(!0);try{a()}finally{Ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},n}function vm(e,n,a,r){return e.baseState=a,af(e,Ge,typeof r=="function"?r:aa)}function zx(e,n,a,r,u){if(Hl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};L.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,xm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function xm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=L.T,_={};L.T=_;try{var b=a(u,r),I=L.S;I!==null&&I(_,b),Sm(e,n,b)}catch(nt){of(e,n,nt)}finally{f!==null&&_.types!==null&&(f.types=_.types),L.T=f}}else try{f=a(u,r),Sm(e,n,f)}catch(nt){of(e,n,nt)}}function Sm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){ym(e,n,r)},function(r){return of(e,n,r)}):ym(e,n,a)}function ym(e,n,a){n.status="fulfilled",n.value=a,Mm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,xm(e,a)))}function of(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Mm(n),n=n.next;while(n!==r)}e.action=null}function Mm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Em(e,n){return n}function bm(e,n){if(Me){var a=Ye.formState;if(a!==null){t:{var r=ce;if(Me){if(je){e:{for(var u=je,f=hi;u.nodeType!==8;){if(!f){u=null;break e}if(u=pi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){je=pi(u.nextSibling),r=u.data==="F!";break t}}Na(r)}r=!1}r&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Em,lastRenderedState:n},a.queue=r,a=km.bind(null,ce,r),r.dispatch=a,r=rf(!1),f=df.bind(null,ce,!1,r.queue),r=In(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=zx.bind(null,ce,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function Tm(e){var n=rn();return Am(n,Ge,e)}function Am(e,n,a){if(n=af(e,n,Em)[0],e=Fl(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Mo(n)}catch(_){throw _===ar?Rl:_}else r=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,cr(9,{destroy:void 0},Fx.bind(null,u,a),null)),[r,f,e]}function Fx(e,n){e.action=n}function Rm(e){var n=rn(),a=Ge;if(a!==null)return Am(n,a,e);rn(),n=n.memoizedState,a=rn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function cr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Pl(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Cm(){return rn().memoizedState}function Il(e,n,a,r){var u=In();ce.flags|=e,u.memoizedState=cr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Bl(e,n,a,r){var u=rn();r=r===void 0?null:r;var f=u.memoizedState.inst;Ge!==null&&r!==null&&Qu(r,Ge.memoizedState.deps)?u.memoizedState=cr(n,f,a,r):(ce.flags|=e,u.memoizedState=cr(1|n,f,a,r))}function wm(e,n){Il(8390656,8,e,n)}function lf(e,n){Bl(2048,8,e,n)}function Ix(e){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=Pl(),ce.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Dm(e){var n=rn().memoizedState;return Ix({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Um(e,n){return Bl(4,2,e,n)}function Nm(e,n){return Bl(4,4,e,n)}function Lm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Om(e,n,a){a=a!=null?a.concat([e]):null,Bl(4,4,Lm.bind(null,n,e),a)}function cf(){}function Pm(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Qu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function zm(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Qu(n,r[1]))return r[0];if(r=e(),Es){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[r,n],r}function uf(e,n,a){return a===void 0||(ia&1073741824)!==0&&(Se&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Fg(),ce.lanes|=e,Ga|=e,a)}function Fm(e,n,a,r){return Kn(a,n)?a:rr.current!==null?(e=uf(e,a,r),Kn(e,n)||(fn=!0),e):(ia&42)===0||(ia&1073741824)!==0&&(Se&261930)===0?(fn=!0,e.memoizedState=a):(e=Fg(),ce.lanes|=e,Ga|=e,n)}function Im(e,n,a,r,u){var f=H.p;H.p=f!==0&&8>f?f:8;var _=L.T,b={};L.T=b,df(e,!1,n,a);try{var I=u(),nt=L.S;if(nt!==null&&nt(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ht=Lx(I,r);Eo(e,n,ht,ni(e))}else Eo(e,n,r,ni(e))}catch(vt){Eo(e,n,{then:function(){},status:"rejected",reason:vt},ni())}finally{H.p=f,_!==null&&b.types!==null&&(_.types=b.types),L.T=_}}function Bx(){}function ff(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Bm(e).queue;Im(e,u,n,Z,a===null?Bx:function(){return Hm(e),a(r)})}function Bm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Hm(e){var n=Bm(e);n.next===null&&(n=e.alternate.memoizedState),Eo(e,n.next.queue,{},ni())}function hf(){return Cn(Ho)}function Gm(){return rn().memoizedState}function Vm(){return rn().memoizedState}function Hx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();e=Pa(a);var r=za(n,e,a);r!==null&&(qn(r,n,a),vo(r,n,a)),n={cache:Hu()},e.payload=n;return}n=n.return}}function Gx(e,n,a){var r=ni();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(e)?Xm(n,a):(a=wu(e,n,a,r),a!==null&&(qn(a,e,r),Wm(a,n,r)))}function km(e,n,a){var r=ni();Eo(e,n,a,r)}function Eo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))Xm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,b=f(_,a);if(u.hasEagerState=!0,u.eagerState=b,Kn(b,_))return Sl(e,n,u,0),Ye===null&&xl(),!1}catch{}finally{}if(a=wu(e,n,u,r),a!==null)return qn(a,e,r),Wm(a,n,r),!0}return!1}function df(e,n,a,r){if(r={lane:2,revertLane:Wf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(n)throw Error(s(479))}else n=wu(e,a,r,2),n!==null&&qn(n,e,2)}function Hl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function Xm(e,n){or=Ll=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Wm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Qr(e,a)}}var bo={readContext:Cn,use:zl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};bo.useEffectEvent=nn;var Ym={readContext:Cn,use:zl,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:wm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Il(4194308,4,Lm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Il(4194308,4,e,n)},useInsertionEffect:function(e,n){Il(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var r=e();if(Es){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=In();if(a!==void 0){var u=a(n);if(Es){Ht(!0);try{a(n)}finally{Ht(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=Gx.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=rf(e);var n=e.queue,a=km.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:cf,useDeferredValue:function(e,n){var a=In();return uf(a,e,n)},useTransition:function(){var e=rf(!1);return e=Im.bind(null,ce,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ce,u=In();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Se&127)!==0||dm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,wm(mm.bind(null,r,f,e),[e]),r.flags|=2048,cr(9,{destroy:void 0},pm.bind(null,r,f,a,n),null),a},useId:function(){var e=In(),n=Ye.identifierPrefix;if(Me){var a=Pi,r=Oi;a=(r&~(1<<32-It(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ol++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ox++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:hf,useFormState:bm,useActionState:bm,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=df.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:nf,useCacheRefresh:function(){return In().memoizedState=Hx.bind(null,ce)},useEffectEvent:function(e){var n=In(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},pf={readContext:Cn,use:zl,useCallback:Pm,useContext:Cn,useEffect:lf,useImperativeHandle:Om,useInsertionEffect:Um,useLayoutEffect:Nm,useMemo:zm,useReducer:Fl,useRef:Cm,useState:function(){return Fl(aa)},useDebugValue:cf,useDeferredValue:function(e,n){var a=rn();return Fm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Fl(aa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:hm,useId:Gm,useHostTransitionStatus:hf,useFormState:Tm,useActionState:Tm,useOptimistic:function(e,n){var a=rn();return vm(a,Ge,e,n)},useMemoCache:nf,useCacheRefresh:Vm};pf.useEffectEvent=Dm;var qm={readContext:Cn,use:zl,useCallback:Pm,useContext:Cn,useEffect:lf,useImperativeHandle:Om,useInsertionEffect:Um,useLayoutEffect:Nm,useMemo:zm,useReducer:sf,useRef:Cm,useState:function(){return sf(aa)},useDebugValue:cf,useDeferredValue:function(e,n){var a=rn();return Ge===null?uf(a,e,n):Fm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=sf(aa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:hm,useId:Gm,useHostTransitionStatus:hf,useFormState:Rm,useActionState:Rm,useOptimistic:function(e,n){var a=rn();return Ge!==null?vm(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:nf,useCacheRefresh:Vm};qm.useEffectEvent=Dm;function mf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ni(),u=Pa(r);u.payload=n,a!=null&&(u.callback=a),n=za(e,u,r),n!==null&&(qn(n,e,r),vo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ni(),u=Pa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(e,u,r),n!==null&&(qn(n,e,r),vo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ni(),r=Pa(a);r.tag=2,n!=null&&(r.callback=n),n=za(e,r,a),n!==null&&(qn(n,e,a),vo(n,e,a))}};function jm(e,n,a,r,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!co(a,r)||!co(u,f):!0}function Zm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&gf.enqueueReplaceState(n,n.state,null)}function bs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Km(e){vl(e)}function Qm(e){console.error(e)}function Jm(e){vl(e)}function Gl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function $m(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _f(e,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Gl(e,n)},a}function tg(e){return e=Pa(e),e.tag=3,e}function eg(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){$m(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){$m(n,a,r),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function Vx(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&er(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?$l():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Cl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Vf(e,r,u)),!1;case 22:return a.flags|=65536,r===Cl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Vf(e,r,u)),!1}throw Error(s(435,a.tag))}return Vf(e,r,u),$l(),!1}if(Me)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Pu&&(e=Error(s(422),{cause:r}),ho(ci(e,a)))):(r!==Pu&&(n=Error(s(423),{cause:r}),ho(ci(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=ci(r,a),u=_f(e.stateNode,r,u),Yu(e,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:r});if(f=ci(f,a),No===null?No=[f]:No.push(f),an!==4&&(an=2),n===null)return!0;r=ci(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=_f(a.stateNode,r,e),Yu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=tg(u),eg(u,e,a,r),Yu(a,u),!1}a=a.return}while(a!==null);return!1}var vf=Error(s(461)),fn=!1;function wn(e,n,a,r){n.child=e===null?sm(n,null,a,r):Ms(n,e.child,a,r)}function ng(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var b in r)b!=="ref"&&(_[b]=r[b])}else _=r;return vs(n),r=Ju(e,n,a,_,f,u),b=$u(),e!==null&&!fn?(tf(e,n,u),sa(e,n,u)):(Me&&b&&Lu(n),n.flags|=1,wn(e,n,r,u),n.child)}function ig(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!Du(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,ag(e,n,f,r,u)):(e=Ml(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Af(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:co,a(_,r)&&e.ref===n.ref)return sa(e,n,u)}return n.flags|=1,e=$i(f,r),e.ref=n.ref,e.return=n,n.child=e}function ag(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(co(f,r)&&e.ref===n.ref)if(fn=!1,n.pendingProps=r=f,Af(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,sa(e,n,u)}return xf(e,n,a,r,u)}function sg(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return rg(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Al(n,f!==null?f.cachePool:null),f!==null?lm(n,f):ju(),cm(n);else return r=n.lanes=536870912,rg(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(Al(n,f.cachePool),lm(n,f),Ia(),n.memoizedState=null):(e!==null&&Al(n,null),ju(),Ia());return wn(e,n,u,a),n.child}function To(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function rg(e,n,a,r,u){var f=Vu();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Al(n,null),ju(),cm(n),e!==null&&er(e,n,r,!0),n.childLanes=u,null}function Vl(e,n){return n=Xl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function og(e,n,a){return Ms(n,e.child,null,a),e=Vl(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function kx(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(r.mode==="hidden")return e=Vl(n,r),n.lanes=536870912,To(null,e);if(Ku(n),(e=je)?(e=x0(e,hi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Xp(e),a.return=n,n.child=a,Rn=n,je=null)):e=null,e===null)throw Na(n);return n.lanes=536870912,null}return Vl(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Ku(n),u)if(n.flags&256)n.flags&=-257,n=og(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||er(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(r=Ye,r!==null&&(_=Hs(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,ps(e,_),qn(r,e,_),vf;$l(),n=og(e,n,a)}else e=f.treeContext,je=pi(_.nextSibling),Rn=n,Me=!0,Ua=null,hi=!1,e!==null&&qp(n,e),n=Vl(n,r),n.flags|=4096;return n}return e=$i(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function kl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function xf(e,n,a,r,u){return vs(n),a=Ju(e,n,a,r,void 0,u),r=$u(),e!==null&&!fn?(tf(e,n,u),sa(e,n,u)):(Me&&r&&Lu(n),n.flags|=1,wn(e,n,a,u),n.child)}function lg(e,n,a,r,u,f){return vs(n),n.updateQueue=null,a=fm(n,r,a,u),um(e),r=$u(),e!==null&&!fn?(tf(e,n,f),sa(e,n,f)):(Me&&r&&Lu(n),n.flags|=1,wn(e,n,a,f),n.child)}function cg(e,n,a,r,u){if(vs(n),n.stateNode===null){var f=Qs,_=a.contextType;typeof _=="object"&&_!==null&&(f=Cn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=gf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Xu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Cn(_):Qs,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(mf(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&gf.enqueueReplaceState(f,f.state,null),So(n,r,f,u),xo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,I=bs(a,b);f.props=I;var nt=f.context,ht=a.contextType;_=Qs,typeof ht=="object"&&ht!==null&&(_=Cn(ht));var vt=a.getDerivedStateFromProps;ht=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||nt!==_)&&Zm(n,f,r,_),Oa=!1;var rt=n.memoizedState;f.state=rt,So(n,r,f,u),xo(),nt=n.memoizedState,b||rt!==nt||Oa?(typeof vt=="function"&&(mf(n,a,vt,r),nt=n.memoizedState),(I=Oa||jm(n,a,I,r,rt,nt,_))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=nt),f.props=r,f.state=nt,f.context=_,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Wu(e,n),_=n.memoizedProps,ht=bs(a,_),f.props=ht,vt=n.pendingProps,rt=f.context,nt=a.contextType,I=Qs,typeof nt=="object"&&nt!==null&&(I=Cn(nt)),b=a.getDerivedStateFromProps,(nt=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==vt||rt!==I)&&Zm(n,f,r,I),Oa=!1,rt=n.memoizedState,f.state=rt,So(n,r,f,u),xo();var ct=n.memoizedState;_!==vt||rt!==ct||Oa||e!==null&&e.dependencies!==null&&bl(e.dependencies)?(typeof b=="function"&&(mf(n,a,b,r),ct=n.memoizedState),(ht=Oa||jm(n,a,ht,r,rt,ct,I)||e!==null&&e.dependencies!==null&&bl(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ct,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ct,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ct),f.props=r,f.state=ct,f.context=I,r=ht):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,kl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Ms(n,e.child,null,u),n.child=Ms(n,null,a,u)):wn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=sa(e,n,u),e}function ug(e,n,a,r){return gs(),n.flags|=256,wn(e,n,a,r),n.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yf(e){return{baseLanes:e,cachePool:$p()}}function Mf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ei),e}function fg(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?Fa(n):Ia(),(e=je)?(e=x0(e,hi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Xp(e),a.return=n,n.child=a,Rn=n,je=null)):e=null,e===null)throw Na(n);return ah(e)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,u?(Ia(),u=n.mode,b=Xl({mode:"hidden",children:b},u),r=ms(r,u,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=yf(a),r.childLanes=Mf(e,_,a),n.memoizedState=Sf,To(null,r)):(Fa(n),Ef(n,b))}var I=e.memoizedState;if(I!==null&&(b=I.dehydrated,b!==null)){if(f)n.flags&256?(Fa(n),n.flags&=-257,n=bf(e,n,a)):n.memoizedState!==null?(Ia(),n.child=e.child,n.flags|=128,n=null):(Ia(),b=r.fallback,u=n.mode,r=Xl({mode:"visible",children:r.children},u),b=ms(b,u,a,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,Ms(n,e.child,null,a),r=n.child,r.memoizedState=yf(a),r.childLanes=Mf(e,_,a),n.memoizedState=Sf,n=To(null,r));else if(Fa(n),ah(b)){if(_=b.nextSibling&&b.nextSibling.dataset,_)var nt=_.dgst;_=nt,r=Error(s(419)),r.stack="",r.digest=_,ho({value:r,source:null,stack:null}),n=bf(e,n,a)}else if(fn||er(e,n,a,!1),_=(a&e.childLanes)!==0,fn||_){if(_=Ye,_!==null&&(r=Hs(_,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,ps(e,r),qn(_,e,r),vf;ih(b)||$l(),n=bf(e,n,a)}else ih(b)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,je=pi(b.nextSibling),Rn=n,Me=!0,Ua=null,hi=!1,e!==null&&qp(n,e),n=Ef(n,r.children),n.flags|=4096);return n}return u?(Ia(),b=r.fallback,u=n.mode,I=e.child,nt=I.sibling,r=$i(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,nt!==null?b=$i(nt,b):(b=ms(b,u,a,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,To(null,r),r=n.child,b=e.child.memoizedState,b===null?b=yf(a):(u=b.cachePool,u!==null?(I=cn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=$p(),b={baseLanes:b.baseLanes|a,cachePool:u}),r.memoizedState=b,r.childLanes=Mf(e,_,a),n.memoizedState=Sf,To(e.child,r)):(Fa(n),a=e.child,e=a.sibling,a=$i(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function Ef(e,n){return n=Xl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Xl(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function bf(e,n,a){return Ms(n,e.child,null,a),e=Ef(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function hg(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Iu(e.return,n,a)}function Tf(e,n,a,r,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function dg(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=sn.current,b=(_&2)!==0;if(b?(_=_&1|2,n.flags|=128):_&=1,mt(sn,_),wn(e,n,r,a),r=Me?fo:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hg(e,a,n);else if(e.tag===19)hg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Nl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Tf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Nl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Tf(n,!0,a,null,f,r);break;case"together":Tf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function sa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(er(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=$i(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=$i(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Af(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&bl(e)))}function Xx(e,n,a){switch(n.tag){case 3:St(n,n.stateNode.containerInfo),La(n,cn,e.memoizedState.cache),gs();break;case 27:case 5:Lt(n);break;case 4:St(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ku(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?fg(e,n,a):(Fa(n),e=sa(e,n,a),e!==null?e.sibling:null);Fa(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(er(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return dg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),mt(sn,sn.current),r)break;return null;case 22:return n.lanes=0,sg(e,n,a,n.pendingProps);case 24:La(n,cn,e.memoizedState.cache)}return sa(e,n,a)}function pg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Af(e,a)&&(n.flags&128)===0)return fn=!1,Xx(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Me&&(n.flags&1048576)!==0&&Yp(n,fo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=Ss(n.elementType),n.type=e,typeof e=="function")Du(e)?(r=bs(e,r),n.tag=1,n=cg(null,n,e,r,a)):(n.tag=0,n=xf(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===N){n.tag=11,n=ng(null,n,e,r,a);break t}else if(u===z){n.tag=14,n=ig(null,n,e,r,a);break t}}throw n=ft(e)||e,Error(s(306,n,""))}}return n;case 0:return xf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=bs(r,n.pendingProps),cg(e,n,r,u,a);case 3:t:{if(St(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Wu(e,n),So(n,r,null,a);var _=n.memoizedState;if(r=_.cache,La(n,cn,r),r!==f.cache&&Bu(n,[cn],a,!0),xo(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ug(e,n,r,a);break t}else if(r!==u){u=ci(Error(s(424)),n),ho(u),n=ug(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=pi(e.firstChild),Rn=n,Me=!0,Ua=null,hi=!0,a=sm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(gs(),r===u){n=sa(e,n,a);break t}wn(e,n,r,a)}n=n.child}return n;case 26:return kl(e,n),e===null?(a=T0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,r=rc(tt.current).createElement(a),r[ln]=n,r[yn]=e,Dn(r,a,e),T(r),n.stateNode=r):n.memoizedState=T0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Lt(n),e===null&&Me&&(r=n.stateNode=M0(n.type,n.pendingProps,tt.current),Rn=n,hi=!0,u=je,Ya(n.type)?(sh=u,je=pi(r.firstChild)):je=u),wn(e,n,n.pendingProps.children,a),kl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=r=je)&&(r=SS(r,n.type,n.pendingProps,hi),r!==null?(n.stateNode=r,Rn=n,je=pi(r.firstChild),hi=!1,u=!0):u=!1),u||Na(n)),Lt(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,th(u,f)?r=null:_!==null&&th(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Ju(e,n,Px,null,null,a),Ho._currentValue=u),kl(e,n),wn(e,n,r,a),n.child;case 6:return e===null&&Me&&((e=a=je)&&(a=yS(a,n.pendingProps,hi),a!==null?(n.stateNode=a,Rn=n,je=null,e=!0):e=!1),e||Na(n)),null;case 13:return fg(e,n,a);case 4:return St(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ms(n,null,r,a):wn(e,n,r,a),n.child;case 11:return ng(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,La(n,n.type,r.value),wn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,vs(n),u=Cn(u),r=r(u),n.flags|=1,wn(e,n,r,a),n.child;case 14:return ig(e,n,n.type,n.pendingProps,a);case 15:return ag(e,n,n.type,n.pendingProps,a);case 19:return dg(e,n,a);case 31:return kx(e,n,a);case 22:return sg(e,n,a,n.pendingProps);case 24:return vs(n),r=Cn(cn),e===null?(u=Vu(),u===null&&(u=Ye,f=Hu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Xu(n),La(n,cn,u)):((e.lanes&a)!==0&&(Wu(e,n),So(n,null,null,a),xo()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,cn,r)):(r=f.cache,La(n,cn,r),r!==u.cache&&Bu(n,[cn],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ra(e){e.flags|=4}function Rf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Gg())e.flags|=8192;else throw ys=Cl,ku}else e.flags&=-16777217}function mg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!D0(n))if(Gg())e.flags|=8192;else throw ys=Cl,ku}function Wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ze():536870912,e.lanes|=n,dr|=n)}function Ao(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Wx(e,n,a){var r=n.pendingProps;switch(Ou(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),na(cn),Dt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(tr(n)?ra(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zu())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ra(n),f!==null?(Ze(n),mg(n,f)):(Ze(n),Rf(n,u,null,r,a))):f?f!==e.memoizedState?(ra(n),Ze(n),mg(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&ra(n),Ze(n),Rf(n,u,e,r,a)),null;case 27:if(ue(n),a=tt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ra(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=Mt.current,tr(n)?jp(n):(e=M0(u,r,a),n.stateNode=e,ra(n))}return Ze(n),null;case 5:if(ue(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ra(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=Mt.current,tr(n))jp(n);else{var _=rc(tt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[ln]=n,f[yn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Dn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ra(n)}}return Ze(n),Rf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ra(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=tt.current,tr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||f0(e.nodeValue,a)),e||Na(n,!0)}else e=rc(e).createTextNode(r),e[ln]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=tr(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=tr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Wl(n,n.updateQueue),Ze(n),null);case 4:return Dt(),e===null&&Zf(n.stateNode.containerInfo),Ze(n),null;case 10:return na(n.type),Ze(n),null;case 19:if(K(sn),r=n.memoizedState,r===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)Ao(r,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Nl(e),f!==null){for(n.flags|=128,Ao(r,!1),e=f.updateQueue,n.updateQueue=e,Wl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)kp(a,e),a=a.sibling;return mt(sn,sn.current&1|2),Me&&ta(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&M()>Kl&&(n.flags|=128,u=!0,Ao(r,!1),n.lanes=4194304)}else{if(!u)if(e=Nl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Wl(n,e),Ao(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Me)return Ze(n),null}else 2*M()-r.renderingStartTime>Kl&&a!==536870912&&(n.flags|=128,u=!0,Ao(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=M(),e.sibling=null,a=sn.current,mt(sn,u?a&1|2:a&1),Me&&ta(n,r.treeForkCount),e):(Ze(n),null);case 22:case 23:return $n(n),Zu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Wl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&K(xs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(cn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Yx(e,n){switch(Ou(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return na(cn),Dt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ue(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return K(sn),null;case 4:return Dt(),null;case 10:return na(n.type),null;case 22:case 23:return $n(n),Zu(),e!==null&&K(xs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return na(cn),null;case 25:return null;default:return null}}function gg(e,n){switch(Ou(n),n.tag){case 3:na(cn),Dt();break;case 26:case 27:case 5:ue(n);break;case 4:Dt();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:K(sn);break;case 10:na(n.type);break;case 22:case 23:$n(n),Zu(),e!==null&&K(xs);break;case 24:na(cn)}}function Ro(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(b){Be(n,n.return,b)}}function Ba(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var _=r.inst,b=_.destroy;if(b!==void 0){_.destroy=void 0,u=n;var I=a,nt=b;try{nt()}catch(ht){Be(u,I,ht)}}}r=r.next}while(r!==f)}}catch(ht){Be(n,n.return,ht)}}function _g(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{om(n,a)}catch(r){Be(e,e.return,r)}}}function vg(e,n,a){a.props=bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Be(e,n,r)}}function Co(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Be(e,n,u)}}function zi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function xg(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function Cf(e,n,a){try{var r=e.stateNode;pS(r,e.type,a,n),r[yn]=n}catch(u){Be(e,e.return,u)}}function Sg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function wf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Sg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Df(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qi));else if(r!==4&&(r===27&&Ya(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Df(e,n,a),e=e.sibling;e!==null;)Df(e,n,a),e=e.sibling}function Yl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Yl(e,n,a),e=e.sibling;e!==null;)Yl(e,n,a),e=e.sibling}function yg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,r,a),n[ln]=e,n[yn]=a}catch(f){Be(e,e.return,f)}}var oa=!1,hn=!1,Uf=!1,Mg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function qx(e,n){if(e=e.containerInfo,Jf=dc,e=Op(e),Eu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,b=-1,I=-1,nt=0,ht=0,vt=e,rt=null;e:for(;;){for(var ct;vt!==a||u!==0&&vt.nodeType!==3||(b=_+u),vt!==f||r!==0&&vt.nodeType!==3||(I=_+r),vt.nodeType===3&&(_+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)rt=vt,vt=ct;for(;;){if(vt===e)break e;if(rt===a&&++nt===u&&(b=_),rt===f&&++ht===r&&(I=_),(ct=vt.nextSibling)!==null)break;vt=rt,rt=vt.parentNode}vt=ct}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for($f={focusedElem:e,selectionRange:a},dc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var kt=bs(a.type,u);e=r.getSnapshotBeforeUpdate(kt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(te){Be(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)nh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function Eg(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),r&4&&Ro(5,a);break;case 1:if(ca(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Be(a,a.return,_)}else{var u=bs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Be(a,a.return,_)}}r&64&&_g(a),r&512&&Co(a,a.return);break;case 3:if(ca(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{om(e,n)}catch(_){Be(a,a.return,_)}}break;case 27:n===null&&r&4&&yg(a);case 26:case 5:ca(e,a),n===null&&r&4&&xg(a),r&512&&Co(a,a.return);break;case 12:ca(e,a);break;case 31:ca(e,a),r&4&&Ag(e,a);break;case 13:ca(e,a),r&4&&Rg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=nS.bind(null,a),MS(e,a))));break;case 22:if(r=a.memoizedState!==null||oa,!r){n=n!==null&&n.memoizedState!==null||hn,u=oa;var f=hn;oa=r,(hn=n)&&!f?ua(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),oa=u,hn=f}break;case 30:break;default:ca(e,a)}}function bg(e){var n=e.alternate;n!==null&&(e.alternate=null,bg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&eo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,kn=!1;function la(e,n,a){for(a=a.child;a!==null;)Tg(e,n,a),a=a.sibling}function Tg(e,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:hn||zi(a,n),la(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||zi(a,n);var r=Je,u=kn;Ya(a.type)&&(Je=a.stateNode,kn=!1),la(e,n,a),Fo(a.stateNode),Je=r,kn=u;break;case 5:hn||zi(a,n);case 6:if(r=Je,u=kn,Je=null,la(e,n,a),Je=r,kn=u,Je!==null)if(kn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Je!==null&&(kn?(e=Je,_0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yr(e)):_0(Je,a.stateNode));break;case 4:r=Je,u=kn,Je=a.stateNode.containerInfo,kn=!0,la(e,n,a),Je=r,kn=u;break;case 0:case 11:case 14:case 15:Ba(2,a,n),hn||Ba(4,a,n),la(e,n,a);break;case 1:hn||(zi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&vg(a,n,r)),la(e,n,a);break;case 21:la(e,n,a);break;case 22:hn=(r=hn)||a.memoizedState!==null,la(e,n,a),hn=r;break;default:la(e,n,a)}}function Ag(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yr(e)}catch(a){Be(n,n.return,a)}}}function Rg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(a){Be(n,n.return,a)}}function jx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Mg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Mg),n;default:throw Error(s(435,e.tag))}}function ql(e,n){var a=jx(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=iS.bind(null,e,r);r.then(u,u)}})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,_=n,b=_;t:for(;b!==null;){switch(b.tag){case 27:if(Ya(b.type)){Je=b.stateNode,kn=!1;break t}break;case 5:Je=b.stateNode,kn=!1;break t;case 3:case 4:Je=b.stateNode.containerInfo,kn=!0;break t}b=b.return}if(Je===null)throw Error(s(160));Tg(f,_,u),Je=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Cg(n,e),n=n.sibling}var Ri=null;function Cg(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),Wn(e),r&4&&(Ba(3,e,e.return),Ro(3,e),Ba(5,e,e.return));break;case 1:Xn(n,e),Wn(e),r&512&&(hn||a===null||zi(a,a.return)),r&64&&oa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ri;if(Xn(n,e),Wn(e),r&512&&(hn||a===null||zi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[cs]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,r,a),f[ln]=e,T(f),r=f;break t;case"link":var _=C0("link","href",u).get(r+(a.href||""));if(_){for(var b=0;b<_.length;b++)if(f=_[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(b,1);break e}}f=u.createElement(r),Dn(f,r,a),u.head.appendChild(f);break;case"meta":if(_=C0("meta","content",u).get(r+(a.content||""))){for(b=0;b<_.length;b++)if(f=_[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(b,1);break e}}f=u.createElement(r),Dn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[ln]=e,T(f),r=f}e.stateNode=r}else w0(u,e.type,e.stateNode);else e.stateNode=R0(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?w0(u,e.type,e.stateNode):R0(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),Wn(e),r&512&&(hn||a===null||zi(a,a.return)),a!==null&&r&4&&Cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),Wn(e),r&512&&(hn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{pn(u,"")}catch(kt){Be(e,e.return,kt)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,Cf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(Uf=!0);break;case 6:if(Xn(n,e),Wn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(kt){Be(e,e.return,kt)}}break;case 3:if(cc=null,u=Ri,Ri=oc(n.containerInfo),Xn(n,e),Ri=u,Wn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(kt){Be(e,e.return,kt)}Uf&&(Uf=!1,wg(e));break;case 4:r=Ri,Ri=oc(e.stateNode.containerInfo),Xn(n,e),Wn(e),Ri=r;break;case 12:Xn(n,e),Wn(e);break;case 31:Xn(n,e),Wn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ql(e,r)));break;case 13:Xn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zl=M()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ql(e,r)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,nt=oa,ht=hn;if(oa=nt||u,hn=ht||I,Xn(n,e),hn=ht,oa=nt,Wn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||oa||hn||Ts(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{b=I.stateNode;var vt=I.memoizedProps.style,rt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;b.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(kt){Be(I,I.return,kt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(kt){Be(I,I.return,kt)}}}else if(n.tag===18){if(a===null){I=n;try{var ct=I.stateNode;u?v0(ct,!0):v0(I.stateNode,!1)}catch(kt){Be(I,I.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,ql(e,a))));break;case 19:Xn(n,e),Wn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ql(e,r)));break;case 30:break;case 21:break;default:Xn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Sg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=wf(e);Yl(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(pn(_,""),a.flags&=-33);var b=wf(e);Yl(e,b,_);break;case 3:case 4:var I=a.stateNode.containerInfo,nt=wf(e);Df(e,nt,I);break;default:throw Error(s(161))}}catch(ht){Be(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function wg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;wg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ca(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Eg(e,n.alternate,n),n=n.sibling}function Ts(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),Ts(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&vg(n,n.return,a),Ts(n);break;case 27:Fo(n.stateNode);case 26:case 5:zi(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}e=e.sibling}}function ua(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ua(u,f,a),Ro(4,f);break;case 1:if(ua(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Be(r,r.return,nt)}if(r=f,u=r.updateQueue,u!==null){var b=r.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)rm(I[u],b)}catch(nt){Be(r,r.return,nt)}}a&&_&64&&_g(f),Co(f,f.return);break;case 27:yg(f);case 26:case 5:ua(u,f,a),a&&r===null&&_&4&&xg(f),Co(f,f.return);break;case 12:ua(u,f,a);break;case 31:ua(u,f,a),a&&_&4&&Ag(u,f);break;case 13:ua(u,f,a),a&&_&4&&Rg(u,f);break;case 22:f.memoizedState===null&&ua(u,f,a),Co(f,f.return);break;case 30:break;default:ua(u,f,a)}n=n.sibling}}function Nf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&po(a))}function Lf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e))}function Ci(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Dg(e,n,a,r),n=n.sibling}function Dg(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,r),u&2048&&Ro(9,n);break;case 1:Ci(e,n,a,r);break;case 3:Ci(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e)));break;case 12:if(u&2048){Ci(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,b=f.onPostCommit;typeof b=="function"&&b(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Be(n,n.return,I)}}else Ci(e,n,a,r);break;case 31:Ci(e,n,a,r);break;case 13:Ci(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(e,n,a,r):wo(e,n):f._visibility&2?Ci(e,n,a,r):(f._visibility|=2,ur(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Nf(_,n);break;case 24:Ci(e,n,a,r),u&2048&&Lf(n.alternate,n);break;default:Ci(e,n,a,r)}}function ur(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,b=a,I=r,nt=_.flags;switch(_.tag){case 0:case 11:case 15:ur(f,_,b,I,u),Ro(8,_);break;case 23:break;case 22:var ht=_.stateNode;_.memoizedState!==null?ht._visibility&2?ur(f,_,b,I,u):wo(f,_):(ht._visibility|=2,ur(f,_,b,I,u)),u&&nt&2048&&Nf(_.alternate,_);break;case 24:ur(f,_,b,I,u),u&&nt&2048&&Lf(_.alternate,_);break;default:ur(f,_,b,I,u)}n=n.sibling}}function wo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:wo(a,r),u&2048&&Nf(r.alternate,r);break;case 24:wo(a,r),u&2048&&Lf(r.alternate,r);break;default:wo(a,r)}n=n.sibling}}var Do=8192;function fr(e,n,a){if(e.subtreeFlags&Do)for(e=e.child;e!==null;)Ug(e,n,a),e=e.sibling}function Ug(e,n,a){switch(e.tag){case 26:fr(e,n,a),e.flags&Do&&e.memoizedState!==null&&OS(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:fr(e,n,a);break;case 3:case 4:var r=Ri;Ri=oc(e.stateNode.containerInfo),fr(e,n,a),Ri=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Do,Do=16777216,fr(e,n,a),Do=r):fr(e,n,a));break;default:fr(e,n,a)}}function Ng(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,Og(r,e)}Ng(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lg(e),e=e.sibling}function Lg(e){switch(e.tag){case 0:case 11:case 15:Uo(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:Uo(e);break;case 12:Uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,jl(e)):Uo(e);break;default:Uo(e)}}function jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,Og(r,e)}Ng(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,jl(n));break;default:jl(n)}e=e.sibling}}function Og(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:po(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,xn=r;else t:for(a=e;xn!==null;){r=xn;var u=r.sibling,f=r.return;if(bg(r),r===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var Zx={getCacheForType:function(e){var n=Cn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(cn).controller.signal}},Kx=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Ye=null,ge=null,Se=0,Ie=0,ti=null,Ha=!1,hr=!1,Of=!1,fa=0,an=0,Ga=0,As=0,Pf=0,ei=0,dr=0,No=null,Yn=null,zf=!1,Zl=0,Pg=0,Kl=1/0,Ql=null,Va=null,mn=0,ka=null,pr=null,ha=0,Ff=0,If=null,zg=null,Lo=0,Bf=null;function ni(){return(Ne&2)!==0&&Se!==0?Se&-Se:L.T!==null?Wf():$r()}function Fg(){if(ei===0)if((Se&536870912)===0||Me){var e=At;At<<=1,(At&3932160)===0&&(At=262144),ei=e}else ei=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ei}function qn(e,n,a){(e===Ye&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(mr(e,0),Xa(e,Se,ei,!1)),Nn(e,a),((Ne&2)===0||e!==Ye)&&(e===Ye&&((Ne&2)===0&&(As|=a),an===4&&Xa(e,Se,ei,!1)),Fi(e))}function Ig(e,n,a){if((Ne&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Rt(e,n),u=r?$x(e,n):Gf(e,n,!0),f=r;do{if(u===0){hr&&!r&&Xa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Qx(a)){u=Gf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var b=e;u=No;var I=b.current.memoizedState.isDehydrated;if(I&&(mr(b,_).flags|=256),_=Gf(b,_,!1),_!==2){if(Of&&!I){b.errorRecoveryDisabledLanes|=f,As|=f,u=4;break t}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){mr(e,0),Xa(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(r,n,ei,!Ha);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Zl+300-M(),10<u)){if(Xa(r,n,ei,!Ha),xt(r,0,!0)!==0)break t;ha=n,r.timeoutHandle=m0(Bg.bind(null,r,a,Yn,Ql,zf,n,ei,As,dr,Ha,f,"Throttled",-0,0),u);break t}Bg(r,a,Yn,Ql,zf,n,ei,As,dr,Ha,f,null,-0,0)}}break}while(!0);Fi(e)}function Bg(e,n,a,r,u,f,_,b,I,nt,ht,vt,rt,ct){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},Ug(n,f,vt);var kt=(f&62914560)===f?Zl-M():(f&4194048)===f?Pg-M():0;if(kt=PS(vt,kt),kt!==null){ha=f,e.cancelPendingCommit=kt(qg.bind(null,e,n,f,a,r,u,_,b,I,ht,vt,null,rt,ct)),Xa(e,f,_,!nt);return}}qg(e,n,f,a,r,u,_,b,I)}function Qx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Kn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(e,n,a,r){n&=~Pf,n&=~As,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-It(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&cl(e,a,n)}function Jl(){return(Ne&6)===0?(Oo(0),!1):!0}function Hf(){if(ge!==null){if(Ie===0)var e=ge.return;else e=ge,ea=_s=null,ef(e),sr=null,go=0,e=ge;for(;e!==null;)gg(e.alternate,e),e=e.return;ge=null}}function mr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,_S(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ha=0,Hf(),Ye=e,ge=a=$i(e.current,null),Se=n,Ie=0,ti=null,Ha=!1,hr=Rt(e,n),Of=!1,dr=ei=Pf=As=Ga=an=0,Yn=No=null,zf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-It(r),f=1<<u;n|=e[u],r&=~f}return fa=n,xl(),a}function Hg(e,n){ce=null,L.H=bo,n===ar||n===Rl?(n=nm(),Ie=3):n===ku?(n=nm(),Ie=4):Ie=n===vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,ge===null&&(an=1,Gl(e,ci(n,e.current)))}function Gg(){var e=Jn.current;return e===null?!0:(Se&4194048)===Se?di===null:(Se&62914560)===Se||(Se&536870912)!==0?e===di:!1}function Vg(){var e=L.H;return L.H=bo,e===null?bo:e}function kg(){var e=L.A;return L.A=Zx,e}function $l(){an=4,Ha||(Se&4194048)!==Se&&Jn.current!==null||(hr=!0),(Ga&134217727)===0&&(As&134217727)===0||Ye===null||Xa(Ye,Se,ei,!1)}function Gf(e,n,a){var r=Ne;Ne|=2;var u=Vg(),f=kg();(Ye!==e||Se!==n)&&(Ql=null,mr(e,n)),n=!1;var _=an;t:do try{if(Ie!==0&&ge!==null){var b=ge,I=ti;switch(Ie){case 8:Hf(),_=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var nt=Ie;if(Ie=0,ti=null,gr(e,b,I,nt),a&&hr){_=0;break t}break;default:nt=Ie,Ie=0,ti=null,gr(e,b,I,nt)}}Jx(),_=an;break}catch(ht){Hg(e,ht)}while(!0);return n&&e.shellSuspendCounter++,ea=_s=null,Ne=r,L.H=u,L.A=f,ge===null&&(Ye=null,Se=0,xl()),_}function Jx(){for(;ge!==null;)Xg(ge)}function $x(e,n){var a=Ne;Ne|=2;var r=Vg(),u=kg();Ye!==e||Se!==n?(Ql=null,Kl=M()+500,mr(e,n)):hr=Rt(e,n);t:do try{if(Ie!==0&&ge!==null){n=ge;var f=ti;e:switch(Ie){case 1:Ie=0,ti=null,gr(e,n,f,1);break;case 2:case 9:if(tm(f)){Ie=0,ti=null,Wg(n);break}n=function(){Ie!==2&&Ie!==9||Ye!==e||(Ie=7),Fi(e)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:tm(f)?(Ie=0,ti=null,Wg(n)):(Ie=0,ti=null,gr(e,n,f,7));break;case 5:var _=null;switch(ge.tag){case 26:_=ge.memoizedState;case 5:case 27:var b=ge;if(_?D0(_):b.stateNode.complete){Ie=0,ti=null;var I=b.sibling;if(I!==null)ge=I;else{var nt=b.return;nt!==null?(ge=nt,tc(nt)):ge=null}break e}}Ie=0,ti=null,gr(e,n,f,5);break;case 6:Ie=0,ti=null,gr(e,n,f,6);break;case 8:Hf(),an=6;break t;default:throw Error(s(462))}}tS();break}catch(ht){Hg(e,ht)}while(!0);return ea=_s=null,L.H=r,L.A=u,Ne=a,ge!==null?0:(Ye=null,Se=0,xl(),an)}function tS(){for(;ge!==null&&!qt();)Xg(ge)}function Xg(e){var n=pg(e.alternate,e,fa);e.memoizedProps=e.pendingProps,n===null?tc(e):ge=n}function Wg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=lg(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=lg(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:ef(n);default:gg(a,n),n=ge=kp(n,fa),n=pg(a,n,fa)}e.memoizedProps=e.pendingProps,n===null?tc(e):ge=n}function gr(e,n,a,r){ea=_s=null,ef(n),sr=null,go=0;var u=n.return;try{if(Vx(e,u,n,a,Se)){an=1,Gl(e,ci(a,e.current)),ge=null;return}}catch(f){if(u!==null)throw ge=u,f;an=1,Gl(e,ci(a,e.current)),ge=null;return}n.flags&32768?(Me||r===1?e=!0:hr||(Se&536870912)!==0?e=!1:(Ha=e=!0,(r===2||r===9||r===3||r===6)&&(r=Jn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Yg(n,e)):tc(n)}function tc(e){var n=e;do{if((n.flags&32768)!==0){Yg(n,Ha);return}e=n.return;var a=Wx(n.alternate,n,fa);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);an===0&&(an=5)}function Yg(e,n){do{var a=Yx(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);an=6,ge=null}function qg(e,n,a,r,u,f,_,b,I){e.cancelPendingCommit=null;do ec();while(mn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Cu,Ei(e,a,f,_,b,I),e===Ye&&(ge=Ye=null,Se=0),pr=n,ka=e,ha=a,Ff=f,If=u,zg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,aS(ut,function(){return Jg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=L.T,L.T=null,u=H.p,H.p=2,_=Ne,Ne|=4;try{qx(e,n,a)}finally{Ne=_,H.p=u,L.T=r}}mn=1,jg(),Zg(),Kg()}}function jg(){if(mn===1){mn=0;var e=ka,n=pr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var r=H.p;H.p=2;var u=Ne;Ne|=4;try{Cg(n,e);var f=$f,_=Op(e.containerInfo),b=f.focusedElem,I=f.selectionRange;if(_!==b&&b&&b.ownerDocument&&Lp(b.ownerDocument.documentElement,b)){if(I!==null&&Eu(b)){var nt=I.start,ht=I.end;if(ht===void 0&&(ht=nt),"selectionStart"in b)b.selectionStart=nt,b.selectionEnd=Math.min(ht,b.value.length);else{var vt=b.ownerDocument||document,rt=vt&&vt.defaultView||window;if(rt.getSelection){var ct=rt.getSelection(),kt=b.textContent.length,te=Math.min(I.start,kt),ke=I.end===void 0?te:Math.min(I.end,kt);!ct.extend&&te>ke&&(_=ke,ke=te,te=_);var j=Np(b,te),V=Np(b,ke);if(j&&V&&(ct.rangeCount!==1||ct.anchorNode!==j.node||ct.anchorOffset!==j.offset||ct.focusNode!==V.node||ct.focusOffset!==V.offset)){var et=vt.createRange();et.setStart(j.node,j.offset),ct.removeAllRanges(),te>ke?(ct.addRange(et),ct.extend(V.node,V.offset)):(et.setEnd(V.node,V.offset),ct.addRange(et))}}}}for(vt=[],ct=b;ct=ct.parentNode;)ct.nodeType===1&&vt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<vt.length;b++){var _t=vt[b];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}dc=!!Jf,$f=Jf=null}finally{Ne=u,H.p=r,L.T=a}}e.current=n,mn=2}}function Zg(){if(mn===2){mn=0;var e=ka,n=pr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var r=H.p;H.p=2;var u=Ne;Ne|=4;try{Eg(e,n.alternate,n)}finally{Ne=u,H.p=r,L.T=a}}mn=3}}function Kg(){if(mn===4||mn===3){mn=0,U();var e=ka,n=pr,a=ha,r=zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,pr=ka=null,Qg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Va=null),Gs(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=L.T,u=H.p,H.p=2,L.T=null;try{for(var f=e.onRecoverableError,_=0;_<r.length;_++){var b=r[_];f(b.value,{componentStack:b.stack})}}finally{L.T=n,H.p=u}}(ha&3)!==0&&ec(),Fi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Bf?Lo++:(Lo=0,Bf=e):Lo=0,Oo(0)}}function Qg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,po(n)))}function ec(){return jg(),Zg(),Kg(),Jg()}function Jg(){if(mn!==5)return!1;var e=ka,n=Ff;Ff=0;var a=Gs(ha),r=L.T,u=H.p;try{H.p=32>a?32:a,L.T=null,a=If,If=null;var f=ka,_=ha;if(mn=0,pr=ka=null,ha=0,(Ne&6)!==0)throw Error(s(331));var b=Ne;if(Ne|=4,Lg(f.current),Dg(f,f.current,_,a),Ne=b,Oo(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{H.p=u,L.T=r,Qg(e,n)}}function $g(e,n,a){n=ci(a,n),n=_f(e.stateNode,n,2),e=za(e,n,2),e!==null&&(Nn(e,2),Fi(e))}function Be(e,n,a){if(e.tag===3)$g(e,e,a);else for(;n!==null;){if(n.tag===3){$g(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Va===null||!Va.has(r))){e=ci(a,e),a=tg(2),r=za(n,a,2),r!==null&&(eg(a,r,n,e),Nn(r,2),Fi(r));break}}n=n.return}}function Vf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Kx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Of=!0,u.add(a),e=eS.bind(null,e,n,a),n.then(e,e))}function eS(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Se&a)===a&&(an===4||an===3&&(Se&62914560)===Se&&300>M()-Zl?(Ne&2)===0&&mr(e,0):Pf|=a,dr===Se&&(dr=0)),Fi(e)}function t0(e,n){n===0&&(n=ze()),e=ps(e,n),e!==null&&(Nn(e,n),Fi(e))}function nS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),t0(e,a)}function iS(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),t0(e,a)}function aS(e,n){return Ee(e,n)}var nc=null,_r=null,kf=!1,ic=!1,Xf=!1,Wa=0;function Fi(e){e!==_r&&e.next===null&&(_r===null?nc=_r=e:_r=_r.next=e),ic=!0,kf||(kf=!0,rS())}function Oo(e,n){if(!Xf&&ic){Xf=!0;do for(var a=!1,r=nc;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-It(42|e)+1)-1,f&=u&~(_&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,a0(r,f))}else f=Se,f=xt(r,r===Ye?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Rt(r,f)||(a=!0,a0(r,f));r=r.next}while(a);Xf=!1}}function sS(){e0()}function e0(){ic=kf=!1;var e=0;Wa!==0&&gS()&&(e=Wa);for(var n=M(),a=null,r=nc;r!==null;){var u=r.next,f=n0(r,n);f===0?(r.next=null,a===null?nc=u:a.next=u,u===null&&(_r=a)):(a=r,(e!==0||(f&3)!==0)&&(ic=!0)),r=u}mn!==0&&mn!==5||Oo(e),Wa!==0&&(Wa=0)}function n0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-It(f),b=1<<_,I=u[_];I===-1?((b&a)===0||(b&r)!==0)&&(u[_]=ae(b,n)):I<=n&&(e.expiredLanes|=b),f&=~b}if(n=Ye,a=Se,a=xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Le(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Le(r),Gs(a)){case 2:case 8:a=yt;break;case 32:a=ut;break;case 268435456:a=Ut;break;default:a=ut}return r=i0.bind(null,e),a=Ee(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Le(r),e.callbackPriority=2,e.callbackNode=null,2}function i0(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ec()&&e.callbackNode!==a)return null;var r=Se;return r=xt(e,e===Ye?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Ig(e,r,n),n0(e,M()),e.callbackNode!=null&&e.callbackNode===a?i0.bind(null,e):null)}function a0(e,n){if(ec())return null;Ig(e,n,!0)}function rS(){vS(function(){(Ne&6)!==0?Ee(gt,sS):e0()})}function Wf(){if(Wa===0){var e=nr;e===0&&(e=Pt,Pt<<=1,(Pt&261888)===0&&(Pt=256)),Wa=e}return Wa}function s0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fl(""+e)}function r0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function oS(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=s0((u[yn]||null).action),_=r.submitter;_&&(n=(n=_[yn]||null)?s0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var b=new ml("action","action",null,r,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Wa!==0){var I=_?r0(u,_):new FormData(u);ff(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(b.preventDefault(),I=_?r0(u,_):new FormData(u),ff(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Yf=0;Yf<Ru.length;Yf++){var qf=Ru[Yf],lS=qf.toLowerCase(),cS=qf[0].toUpperCase()+qf.slice(1);Ai(lS,"on"+cS)}Ai(Fp,"onAnimationEnd"),Ai(Ip,"onAnimationIteration"),Ai(Bp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(Tx,"onTransitionRun"),Ai(Ax,"onTransitionStart"),Ai(Rx,"onTransitionCancel"),Ai(Hp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function o0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var b=r[_],I=b.instance,nt=b.currentTarget;if(b=b.listener,I!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=nt;try{f(u)}catch(ht){vl(ht)}u.currentTarget=null,f=I}else for(_=0;_<r.length;_++){if(b=r[_],I=b.instance,nt=b.currentTarget,b=b.listener,I!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=nt;try{f(u)}catch(ht){vl(ht)}u.currentTarget=null,f=I}}}}function _e(e,n){var a=n[Vs];a===void 0&&(a=n[Vs]=new Set);var r=e+"__bubble";a.has(r)||(l0(n,e,2,!1),a.add(r))}function jf(e,n,a){var r=0;n&&(r|=4),l0(a,e,r,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function Zf(e){if(!e[ac]){e[ac]=!0,q.forEach(function(a){a!=="selectionchange"&&(uS.has(a)||jf(a,!1,e),jf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ac]||(n[ac]=!0,jf("selectionchange",!1,n))}}function l0(e,n,a,r){switch(F0(n)){case 2:var u=IS;break;case 8:u=BS;break;default:u=uh}a=u.bind(null,n,a,e),u=void 0,!pu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Kf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var b=r.stateNode.containerInfo;if(b===u)break;if(_===4)for(_=r.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;b!==null;){if(_=Aa(b),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){r=f=_;continue t}b=b.parentNode}}r=r.return}dp(function(){var nt=f,ht=hu(a),vt=[];t:{var rt=Gp.get(e);if(rt!==void 0){var ct=ml,kt=e;switch(e){case"keypress":if(dl(a)===0)break t;case"keydown":case"keyup":ct=ix;break;case"focusin":kt="focus",ct=vu;break;case"focusout":kt="blur",ct=vu;break;case"beforeblur":case"afterblur":ct=vu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=rx;break;case Fp:case Ip:case Bp:ct=jv;break;case Hp:ct=lx;break;case"scroll":case"scrollend":ct=kv;break;case"wheel":ct=ux;break;case"copy":case"cut":case"paste":ct=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=vp;break;case"toggle":case"beforetoggle":ct=hx}var te=(n&4)!==0,ke=!te&&(e==="scroll"||e==="scrollend"),j=te?rt!==null?rt+"Capture":null:rt;te=[];for(var V=nt,et;V!==null;){var _t=V;if(et=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||et===null||j===null||(_t=no(V,j),_t!=null&&te.push(zo(V,_t,et))),ke)break;V=V.return}0<te.length&&(rt=new ct(rt,kt,null,a,ht),vt.push({event:rt,listeners:te}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",rt&&a!==fu&&(kt=a.relatedTarget||a.fromElement)&&(Aa(kt)||kt[bi]))break t;if((ct||rt)&&(rt=ht.window===ht?ht:(rt=ht.ownerDocument)?rt.defaultView||rt.parentWindow:window,ct?(kt=a.relatedTarget||a.toElement,ct=nt,kt=kt?Aa(kt):null,kt!==null&&(ke=c(kt),te=kt.tag,kt!==ke||te!==5&&te!==27&&te!==6)&&(kt=null)):(ct=null,kt=nt),ct!==kt)){if(te=gp,_t="onMouseLeave",j="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(te=vp,_t="onPointerLeave",j="onPointerEnter",V="pointer"),ke=ct==null?rt:us(ct),et=kt==null?rt:us(kt),rt=new te(_t,V+"leave",ct,a,ht),rt.target=ke,rt.relatedTarget=et,_t=null,Aa(ht)===nt&&(te=new te(j,V+"enter",kt,a,ht),te.target=et,te.relatedTarget=ke,_t=te),ke=_t,ct&&kt)e:{for(te=fS,j=ct,V=kt,et=0,_t=j;_t;_t=te(_t))et++;_t=0;for(var Qt=V;Qt;Qt=te(Qt))_t++;for(;0<et-_t;)j=te(j),et--;for(;0<_t-et;)V=te(V),_t--;for(;et--;){if(j===V||V!==null&&j===V.alternate){te=j;break e}j=te(j),V=te(V)}te=null}else te=null;ct!==null&&c0(vt,rt,ct,te,!1),kt!==null&&ke!==null&&c0(vt,ke,kt,te,!0)}}t:{if(rt=nt?us(nt):window,ct=rt.nodeName&&rt.nodeName.toLowerCase(),ct==="select"||ct==="input"&&rt.type==="file")var Re=Ap;else if(bp(rt))if(Rp)Re=Mx;else{Re=Sx;var jt=xx}else ct=rt.nodeName,!ct||ct.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&Ti(nt.elementType)&&(Re=Ap):Re=yx;if(Re&&(Re=Re(e,nt))){Tp(vt,Re,a,ht);break t}jt&&jt(e,rt,nt),e==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&En(rt,"number",rt.value)}switch(jt=nt?us(nt):window,e){case"focusin":(bp(jt)||jt.contentEditable==="true")&&(js=jt,bu=nt,uo=null);break;case"focusout":uo=bu=js=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Pp(vt,a,ht);break;case"selectionchange":if(bx)break;case"keydown":case"keyup":Pp(vt,a,ht)}var he;if(Su)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else qs?Mp(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(xp&&a.locale!=="ko"&&(qs||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&qs&&(he=pp()):(wa=ht,mu="value"in wa?wa.value:wa.textContent,qs=!0)),jt=sc(nt,ye),0<jt.length&&(ye=new _p(ye,e,null,a,ht),vt.push({event:ye,listeners:jt}),he?ye.data=he:(he=Ep(a),he!==null&&(ye.data=he)))),(he=px?mx(e,a):gx(e,a))&&(ye=sc(nt,"onBeforeInput"),0<ye.length&&(jt=new _p("onBeforeInput","beforeinput",null,a,ht),vt.push({event:jt,listeners:ye}),jt.data=he)),oS(vt,e,nt,a,ht)}o0(vt,n)})}function zo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function sc(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=no(e,a),u!=null&&r.unshift(zo(e,u,f)),u=no(e,n),u!=null&&r.push(zo(e,u,f))),e.tag===3)return r;e=e.return}return[]}function fS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function c0(e,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var b=a,I=b.alternate,nt=b.stateNode;if(b=b.tag,I!==null&&I===r)break;b!==5&&b!==26&&b!==27||nt===null||(I=nt,u?(nt=no(a,f),nt!=null&&_.unshift(zo(a,nt,I))):u||(nt=no(a,f),nt!=null&&_.push(zo(a,nt,I)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var hS=/\r\n?/g,dS=/\u0000|\uFFFD/g;function u0(e){return(typeof e=="string"?e:""+e).replace(hS,`
`).replace(dS,"")}function f0(e,n){return n=u0(n),u0(e)===n}function Ve(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||pn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&pn(e,""+r);break;case"className":Jt(e,"class",r);break;case"tabIndex":Jt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(e,a,r);break;case"style":Xs(e,r,f);break;case"data":if(n!=="object"){Jt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=fl(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=fl(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Qi);break;case"onScroll":r!=null&&_e("scroll",e);break;case"onScrollEnd":r!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=fl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":_e("beforetoggle",e),_e("toggle",e),Wt(e,"popover",r);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Wt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gv.get(a)||a,Wt(e,a,r))}}function Qf(e,n,a,r,u,f){switch(a){case"style":Xs(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?pn(e,r):(typeof r=="number"||typeof r=="bigint")&&pn(e,""+r);break;case"onScroll":r!=null&&_e("scroll",e);break;case"onScrollEnd":r!=null&&_e("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Wt(e,a,r)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,f,_,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),r&&Ve(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var b=f=_=u=null,I=null,nt=null;for(r in a)if(a.hasOwnProperty(r)){var ht=a[r];if(ht!=null)switch(r){case"name":u=ht;break;case"type":_=ht;break;case"checked":I=ht;break;case"defaultChecked":nt=ht;break;case"value":f=ht;break;case"defaultValue":b=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Ve(e,n,r,ht,a,null)}}Ki(e,f,b,I,nt,_,u,!1);return;case"select":_e("invalid",e),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":_=b;break;case"multiple":r=b;default:Ve(e,n,u,b,a,null)}n=f,a=_,e.multiple=!!r,n!=null?oi(e,!!r,n,!1):a!=null&&oi(e,!!r,a,!0);return;case"textarea":_e("invalid",e),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(b=a[_],b!=null))switch(_){case"value":r=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ve(e,n,_,b,a,null)}bn(e,r,u,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ve(e,n,I,r,a,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(r=0;r<Po.length;r++)_e(Po[r],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(r=a[nt],r!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,nt,r,a,null)}return;default:if(Ti(n)){for(ht in a)a.hasOwnProperty(ht)&&(r=a[ht],r!==void 0&&Qf(e,n,ht,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Ve(e,n,b,r,a,null))}function pS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,b=null,I=null,nt=null,ht=null;for(ct in a){var vt=a[ct];if(a.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":I=vt;default:r.hasOwnProperty(ct)||Ve(e,n,ct,null,r,vt)}}for(var rt in r){var ct=r[rt];if(vt=a[rt],r.hasOwnProperty(rt)&&(ct!=null||vt!=null))switch(rt){case"type":f=ct;break;case"name":u=ct;break;case"checked":nt=ct;break;case"defaultChecked":ht=ct;break;case"value":_=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==vt&&Ve(e,n,rt,ct,r,vt)}}Mn(e,_,b,I,nt,ht,f,u);return;case"select":ct=_=b=rt=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ct=I;default:r.hasOwnProperty(f)||Ve(e,n,f,null,r,I)}for(u in r)if(f=r[u],I=a[u],r.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":rt=f;break;case"defaultValue":b=f;break;case"multiple":_=f;default:f!==I&&Ve(e,n,u,f,r,I)}n=b,a=_,r=ct,rt!=null?oi(e,!!a,rt,!1):!!r!=!!a&&(n!=null?oi(e,!!a,n,!0):oi(e,!!a,a?[]:"",!1));return;case"textarea":ct=rt=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ve(e,n,b,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":rt=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ve(e,n,_,u,r,f)}Fe(e,rt,ct);return;case"option":for(var kt in a)if(rt=a[kt],a.hasOwnProperty(kt)&&rt!=null&&!r.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Ve(e,n,kt,null,r,rt)}for(I in r)if(rt=r[I],ct=a[I],r.hasOwnProperty(I)&&rt!==ct&&(rt!=null||ct!=null))switch(I){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Ve(e,n,I,rt,r,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)rt=a[te],a.hasOwnProperty(te)&&rt!=null&&!r.hasOwnProperty(te)&&Ve(e,n,te,null,r,rt);for(nt in r)if(rt=r[nt],ct=a[nt],r.hasOwnProperty(nt)&&rt!==ct&&(rt!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:Ve(e,n,nt,rt,r,ct)}return;default:if(Ti(n)){for(var ke in a)rt=a[ke],a.hasOwnProperty(ke)&&rt!==void 0&&!r.hasOwnProperty(ke)&&Qf(e,n,ke,void 0,r,rt);for(ht in r)rt=r[ht],ct=a[ht],!r.hasOwnProperty(ht)||rt===ct||rt===void 0&&ct===void 0||Qf(e,n,ht,rt,r,ct);return}}for(var j in a)rt=a[j],a.hasOwnProperty(j)&&rt!=null&&!r.hasOwnProperty(j)&&Ve(e,n,j,null,r,rt);for(vt in r)rt=r[vt],ct=a[vt],!r.hasOwnProperty(vt)||rt===ct||rt==null&&ct==null||Ve(e,n,vt,rt,r,ct)}function h0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,b=u.duration;if(f&&b&&h0(_)){for(_=0,b=u.responseEnd,r+=1;r<a.length;r++){var I=a[r],nt=I.startTime;if(nt>b)break;var ht=I.transferSize,vt=I.initiatorType;ht&&h0(vt)&&(I=I.responseEnd,_+=ht*(I<b?1:(b-nt)/(I-nt)))}if(--r,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jf=null,$f=null;function rc(e){return e.nodeType===9?e:e.ownerDocument}function d0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function p0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function th(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var eh=null;function gS(){var e=window.event;return e&&e.type==="popstate"?e===eh?!1:(eh=e,!0):(eh=null,!1)}var m0=typeof setTimeout=="function"?setTimeout:void 0,_S=typeof clearTimeout=="function"?clearTimeout:void 0,g0=typeof Promise=="function"?Promise:void 0,vS=typeof queueMicrotask=="function"?queueMicrotask:typeof g0<"u"?function(e){return g0.resolve(null).then(e).catch(xS)}:m0;function xS(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function _0(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),yr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Fo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Fo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,b=f.nodeName;f[cs]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Fo(e.ownerDocument.body);a=u}while(a);yr(n)}function v0(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function nh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nh(a),eo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function SS(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[cs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function yS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function x0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pi(e.nextSibling),e===null))return null;return e}function ih(e){return e.data==="$?"||e.data==="$~"}function ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function MS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var sh=null;function S0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return pi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function y0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function M0(e,n,a){switch(n=rc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Fo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);eo(e)}var mi=new Map,E0=new Set;function oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var da=H.d;H.d={f:ES,r:bS,D:TS,C:AS,L:RS,m:CS,X:DS,S:wS,M:US};function ES(){var e=da.f(),n=Jl();return e||n}function bS(e){var n=Ra(e);n!==null&&n.tag===5&&n.type==="form"?Hm(n):da.r(e)}var vr=typeof document>"u"?null:document;function b0(e,n,a){var r=vr;if(r&&typeof n=="string"&&n){var u=se(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),E0.has(u)||(E0.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Dn(n,"link",e),T(n),r.head.appendChild(n)))}}function TS(e){da.D(e),b0("dns-prefetch",e,null)}function AS(e,n){da.C(e,n),b0("preconnect",e,n)}function RS(e,n,a){da.L(e,n,a);var r=vr;if(r&&e&&n){var u='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+se(a.imageSizes)+'"]')):u+='[href="'+se(e)+'"]';var f=u;switch(n){case"style":f=xr(e);break;case"script":f=Sr(e)}mi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),mi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Io(f))||n==="script"&&r.querySelector(Bo(f))||(n=r.createElement("link"),Dn(n,"link",e),T(n),r.head.appendChild(n)))}}function CS(e,n){da.m(e,n);var a=vr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+se(r)+'"][href="'+se(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Sr(e)}if(!mi.has(f)&&(e=g({rel:"modulepreload",href:e},n),mi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bo(f)))return}r=a.createElement("link"),Dn(r,"link",e),T(r),a.head.appendChild(r)}}}function wS(e,n,a){da.S(e,n,a);var r=vr;if(r&&e){var u=Ca(r).hoistableStyles,f=xr(e);n=n||"default";var _=u.get(f);if(!_){var b={loading:0,preload:null};if(_=r.querySelector(Io(f)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=mi.get(f))&&rh(e,a);var I=_=r.createElement("link");T(I),Dn(I,"link",e),I._p=new Promise(function(nt,ht){I.onload=nt,I.onerror=ht}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,lc(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:b},u.set(f,_)}}}function DS(e,n){da.X(e,n);var a=vr;if(a&&e){var r=Ca(a).hoistableScripts,u=Sr(e),f=r.get(u);f||(f=a.querySelector(Bo(u)),f||(e=g({src:e,async:!0},n),(n=mi.get(u))&&oh(e,n),f=a.createElement("script"),T(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function US(e,n){da.M(e,n);var a=vr;if(a&&e){var r=Ca(a).hoistableScripts,u=Sr(e),f=r.get(u);f||(f=a.querySelector(Bo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=mi.get(u))&&oh(e,n),f=a.createElement("script"),T(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function T0(e,n,a,r){var u=(u=tt.current)?oc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xr(a.href),a=Ca(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xr(a.href);var f=Ca(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(Io(e)))&&!f._p&&(_.instance=f,_.state.loading=5),mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(e,a),f||NS(u,e,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Sr(a),a=Ca(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function xr(e){return'href="'+se(e)+'"'}function Io(e){return'link[rel="stylesheet"]['+e+"]"}function A0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function NS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Dn(n,"link",a),T(n),e.head.appendChild(n))}function Sr(e){return'[src="'+se(e)+'"]'}function Bo(e){return"script[async]"+e}function R0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+se(a.href)+'"]');if(r)return n.instance=r,T(r),r;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),T(r),Dn(r,"style",u),lc(r,a.precedence,e),n.instance=r;case"stylesheet":u=xr(a.href);var f=e.querySelector(Io(u));if(f)return n.state.loading|=4,n.instance=f,T(f),f;r=A0(a),(u=mi.get(u))&&rh(r,u),f=(e.ownerDocument||e).createElement("link"),T(f);var _=f;return _._p=new Promise(function(b,I){_.onload=b,_.onerror=I}),Dn(f,"link",r),n.state.loading|=4,lc(f,a.precedence,e),n.instance=f;case"script":return f=Sr(a.src),(u=e.querySelector(Bo(f)))?(n.instance=u,T(u),u):(r=a,(u=mi.get(f))&&(r=g({},a),oh(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),T(u),Dn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,lc(r,a.precedence,e));return n.instance}function lc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var b=r[_];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function rh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var cc=null;function C0(e,n,a){if(cc===null){var r=new Map,u=cc=new Map;u.set(a,r)}else u=cc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[cs]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var b=r.get(_);b?b.push(f):r.set(_,[f])}}return r}function w0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function LS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function D0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function OS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xr(r.href),f=n.querySelector(Io(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=uc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,T(f);return}f=n.ownerDocument||n,r=A0(r),(u=mi.get(u))&&rh(r,u),f=f.createElement("link"),T(f);var _=f;_._p=new Promise(function(b,I){_.onload=b,_.onerror=I}),Dn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=uc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var lh=0;function PS(e,n){return e.stylesheets&&e.count===0&&hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&lh===0&&(lh=62500*mS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>lh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fc=null;function hc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,n.forEach(zS,e),fc=null,uc.call(e))}function zS(e,n){if(!(n.state.loading&4)){var a=fc.get(e);if(a)var r=a.get(null);else{a=new Map,fc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=uc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ho={$$typeof:O,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function FS(e,n,a,r,u,f,_,b,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function U0(e,n,a,r,u,f,_,b,I,nt,ht,vt){return e=new FS(e,n,a,_,I,nt,ht,vt,b),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=Hu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Xu(f),e}function N0(e){return e?(e=Qs,e):Qs}function L0(e,n,a,r,u,f){u=N0(u),r.context===null?r.context=u:r.pendingContext=u,r=Pa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=za(e,r,n),a!==null&&(qn(a,e,n),vo(a,e,n))}function O0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ch(e,n){O0(e,n),(e=e.alternate)&&O0(e,n)}function P0(e){if(e.tag===13||e.tag===31){var n=ps(e,67108864);n!==null&&qn(n,e,67108864),ch(e,67108864)}}function z0(e){if(e.tag===13||e.tag===31){var n=ni();n=Jr(n);var a=ps(e,n);a!==null&&qn(a,e,n),ch(e,n)}}var dc=!0;function IS(e,n,a,r){var u=L.T;L.T=null;var f=H.p;try{H.p=2,uh(e,n,a,r)}finally{H.p=f,L.T=u}}function BS(e,n,a,r){var u=L.T;L.T=null;var f=H.p;try{H.p=8,uh(e,n,a,r)}finally{H.p=f,L.T=u}}function uh(e,n,a,r){if(dc){var u=fh(r);if(u===null)Kf(e,n,r,pc,a),I0(e,r);else if(GS(u,e,n,a,r))r.stopPropagation();else if(I0(e,r),n&4&&-1<HS.indexOf(e)){for(;u!==null;){var f=Ra(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Et(f.pendingLanes);if(_!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;_;){var I=1<<31-It(_);b.entanglements[1]|=I,_&=~I}Fi(f),(Ne&6)===0&&(Kl=M()+500,Oo(0))}}break;case 31:case 13:b=ps(f,2),b!==null&&qn(b,f,2),Jl(),ch(f,2)}if(f=fh(r),f===null&&Kf(e,n,r,pc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Kf(e,n,r,null,a)}}function fh(e){return e=hu(e),hh(e)}var pc=null;function hh(e){if(pc=null,e=Aa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return pc=e,null}function F0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case gt:return 2;case yt:return 8;case ut:case Zt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var dh=!1,qa=null,ja=null,Za=null,Go=new Map,Vo=new Map,Ka=[],HS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function I0(e,n){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(n.pointerId)}}function ko(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ra(n),n!==null&&P0(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function GS(e,n,a,r,u){switch(n){case"focusin":return qa=ko(qa,e,n,a,r,u),!0;case"dragenter":return ja=ko(ja,e,n,a,r,u),!0;case"mouseover":return Za=ko(Za,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Go.set(f,ko(Go.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Vo.set(f,ko(Vo.get(f)||null,e,n,a,r,u)),!0}return!1}function B0(e){var n=Aa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Li(e.priority,function(){z0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Li(e.priority,function(){z0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=fh(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);fu=r,a.target.dispatchEvent(r),fu=null}else return n=Ra(a),n!==null&&P0(n),e.blockedOn=a,!1;n.shift()}return!0}function H0(e,n,a){mc(e)&&a.delete(n)}function VS(){dh=!1,qa!==null&&mc(qa)&&(qa=null),ja!==null&&mc(ja)&&(ja=null),Za!==null&&mc(Za)&&(Za=null),Go.forEach(H0),Vo.forEach(H0)}function gc(e,n){e.blockedOn===n&&(e.blockedOn=null,dh||(dh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,VS)))}var _c=null;function G0(e){_c!==e&&(_c=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){_c===e&&(_c=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(hh(r||a)===null)continue;break}var f=Ra(a);f!==null&&(e.splice(n,3),n-=3,ff(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function yr(e){function n(I){return gc(I,e)}qa!==null&&gc(qa,e),ja!==null&&gc(ja,e),Za!==null&&gc(Za,e),Go.forEach(n),Vo.forEach(n);for(var a=0;a<Ka.length;a++){var r=Ka[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)B0(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[yn]||null;if(typeof f=="function")_||G0(a);else if(_){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[yn]||null)b=_.formAction;else if(hh(u)!==null)continue}else b=_.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),G0(a)}}}function V0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ph(e){this._internalRoot=e}vc.prototype.render=ph.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ni();L0(a,r,e,n,null,null)},vc.prototype.unmount=ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;L0(e.current,2,null,e,null,null),Jl(),n[bi]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var n=$r();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&B0(e)}};var k0=t.version;if(k0!=="19.2.3")throw Error(s(527,k0,"19.2.3"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var kS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{bt=xc.inject(kS),Tt=xc}catch{}}return Wo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Km,f=Qm,_=Jm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=U0(e,1,!1,null,null,a,r,null,u,f,_,V0),e[bi]=n.current,Zf(e),new ph(n)},Wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Km,_=Qm,b=Jm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=U0(e,1,!0,n,a??null,r,u,I,f,_,b,V0),n.context=N0(null),a=n.current,r=ni(),r=Jr(r),u=Pa(r),u.callback=null,za(a,u,r),a=r,n.current.lanes=a,Nn(n,a),Fi(n),e[bi]=n.current,Zf(e),new vc(n)},Wo.version="19.2.3",Wo}var $0;function ty(){if($0)return _h.exports;$0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),_h.exports=$S(),_h.exports}var ey=ty();const ny=nv(ey);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jd="182",Gr={ROTATE:0,DOLLY:1,PAN:2},Hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iy=0,t_=1,ay=2,Yc=1,sy=2,el=3,ls=0,Zn=1,xa=2,ya=0,Vr=1,$c=2,e_=3,n_=4,ry=5,Ls=100,oy=101,ly=102,cy=103,uy=104,fy=200,hy=201,dy=202,py=203,td=204,ed=205,my=206,gy=207,_y=208,vy=209,xy=210,Sy=211,yy=212,My=213,Ey=214,nd=0,id=1,ad=2,Xr=3,sd=4,rd=5,od=6,ld=7,iv=0,by=1,Ty=2,Xi=0,av=1,sv=2,rv=3,ov=4,lv=5,cv=6,uv=7,fv=300,Fs=301,Wr=302,cd=303,ud=304,su=306,fd=1e3,Sa=1001,hd=1002,Un=1003,Ay=1004,Sc=1005,zn=1006,yh=1007,Ps=1008,xi=1009,hv=1010,dv=1011,il=1012,$d=1013,Yi=1014,Vi=1015,Ea=1016,tp=1017,ep=1018,al=1020,pv=35902,mv=35899,gv=1021,_v=1022,Ni=1023,ba=1026,zs=1027,vv=1028,np=1029,Yr=1030,ip=1031,ap=1033,qc=33776,jc=33777,Zc=33778,Kc=33779,dd=35840,pd=35841,md=35842,gd=35843,_d=36196,vd=37492,xd=37496,Sd=37488,yd=37489,Md=37490,Ed=37491,bd=37808,Td=37809,Ad=37810,Rd=37811,Cd=37812,wd=37813,Dd=37814,Ud=37815,Nd=37816,Ld=37817,Od=37818,Pd=37819,zd=37820,Fd=37821,Id=36492,Bd=36494,Hd=36495,Gd=36283,Vd=36284,kd=36285,Xd=36286,Ry=3200,Cy=0,wy=1,ss="",_i="srgb",qr="srgb-linear",tu="linear",He="srgb",Mr=7680,i_=519,Dy=512,Uy=513,Ny=514,sp=515,Ly=516,Oy=517,rp=518,Py=519,Wd=35044,a_="300 es",ki=2e3,eu=2001;function xv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function nu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function zy(){const o=nu("canvas");return o.style.display="block",o}const s_={};function iu(...o){const t="THREE."+o.shift();console.log(t,...o)}function re(...o){const t="THREE."+o.shift();console.warn(t,...o)}function be(...o){const t="THREE."+o.shift();console.error(t,...o)}function sl(...o){const t=o.join(" ");t in s_||(s_[t]=!0,re(...o))}function Fy(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=Math.PI/180,Yd=180/Math.PI;function os(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function ve(o,t,i){return Math.max(t,Math.min(i,o))}function Iy(o,t){return(o%t+t)%t}function Mh(o,t,i){return(1-i)*o+i*t}function Gi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xe(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const By={DEG2RAD:Qc};class ie{constructor(t=0,i=0){ie.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Is{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],x=s[l+2],g=s[l+3],S=c[h+0],E=c[h+1],A=c[h+2],C=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=g;return}if(d>=1){t[i+0]=S,t[i+1]=E,t[i+2]=A,t[i+3]=C;return}if(g!==C||m!==S||p!==E||x!==A){let y=m*S+p*E+x*A+g*C;y<0&&(S=-S,E=-E,A=-A,C=-C,y=-y);let v=1-d;if(y<.9995){const P=Math.acos(y),O=Math.sin(P);v=Math.sin(v*P)/O,d=Math.sin(d*P)/O,m=m*v+S*d,p=p*v+E*d,x=x*v+A*d,g=g*v+C*d}else{m=m*v+S*d,p=p*v+E*d,x=x*v+A*d,g=g*v+C*d;const P=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=P,p*=P,x*=P,g*=P}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],x=s[l+3],g=c[h],S=c[h+1],E=c[h+2],A=c[h+3];return t[i]=d*A+x*g+m*E-p*S,t[i+1]=m*A+x*S+p*g-d*E,t[i+2]=p*A+x*E+d*S-m*g,t[i+3]=x*A-d*g-m*S-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),x=d(l/2),g=d(c/2),S=m(s/2),E=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=S*x*g+p*E*A,this._y=p*E*g-S*x*A,this._z=p*x*A+S*E*g,this._w=p*x*g-S*E*A;break;case"YXZ":this._x=S*x*g+p*E*A,this._y=p*E*g-S*x*A,this._z=p*x*A-S*E*g,this._w=p*x*g+S*E*A;break;case"ZXY":this._x=S*x*g-p*E*A,this._y=p*E*g+S*x*A,this._z=p*x*A+S*E*g,this._w=p*x*g-S*E*A;break;case"ZYX":this._x=S*x*g-p*E*A,this._y=p*E*g+S*x*A,this._z=p*x*A-S*E*g,this._w=p*x*g+S*E*A;break;case"YZX":this._x=S*x*g+p*E*A,this._y=p*E*g+S*x*A,this._z=p*x*A-S*E*g,this._w=p*x*g-S*E*A;break;case"XZY":this._x=S*x*g-p*E*A,this._y=p*E*g-S*x*A,this._z=p*x*A+S*E*g,this._w=p*x*g+S*E*A;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],g=i[10],S=s+d+g;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(x-m)*E,this._y=(c-p)*E,this._z=(h-l)*E}else if(s>d&&s>g){const E=2*Math.sqrt(1+s-d-g);this._w=(x-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+p)/E}else if(d>g){const E=2*Math.sqrt(1+d-s-g);this._w=(c-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+g-s-d);this._w=(h-l)/E,this._x=(c+p)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+h*d+l*p-c*m,this._y=l*x+h*m+c*d-s*p,this._z=c*x+h*p+s*m-l*d,this._w=h*x-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(r_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(r_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),x=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*x,this.y=s+m*x+d*p-c*g,this.z=l+m*g+c*x-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Eh.copy(this).projectOnVector(t),this.sub(Eh)}reflect(t){return this.sub(Eh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eh=new J,r_=new Is;class de{constructor(t,i,s,l,c,h,d,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=d,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],x=s[4],g=s[7],S=s[2],E=s[5],A=s[8],C=l[0],y=l[3],v=l[6],P=l[1],O=l[4],N=l[7],F=l[2],B=l[5],z=l[8];return c[0]=h*C+d*P+m*F,c[3]=h*y+d*O+m*B,c[6]=h*v+d*N+m*z,c[1]=p*C+x*P+g*F,c[4]=p*y+x*O+g*B,c[7]=p*v+x*N+g*z,c[2]=S*C+E*P+A*F,c[5]=S*y+E*O+A*B,c[8]=S*v+E*N+A*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8];return i*h*x-i*d*p-s*c*x+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],g=x*h-d*p,S=d*m-x*c,E=p*c-h*m,A=i*g+s*S+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=g*C,t[1]=(l*p-x*s)*C,t[2]=(d*s-l*h)*C,t[3]=S*C,t[4]=(x*i-l*m)*C,t[5]=(l*c-d*i)*C,t[6]=E*C,t[7]=(s*m-p*i)*C,t[8]=(h*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(bh.makeScale(t,i)),this}rotate(t){return this.premultiply(bh.makeRotation(-t)),this}translate(t,i){return this.premultiply(bh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const bh=new de,o_=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l_=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hy(){const o={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===He&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===He&&(l.r=kr(l.r),l.g=kr(l.g),l.b=kr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ss?tu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return sl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return sl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[qr]:{primaries:t,whitePoint:s,transfer:tu,toXYZ:o_,fromXYZ:l_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:s,transfer:He,toXYZ:o_,fromXYZ:l_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),o}const Ae=Hy();function Ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function kr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Er;class Gy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Er===void 0&&(Er=nu("canvas")),Er.width=t.width,Er.height=t.height;const l=Er.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Er}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=nu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ma(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ma(i[s]/255)*255):i[s]=Ma(i[s]);return{data:i,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vy=0;class op{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Th(l[h].image)):c.push(Th(l[h]))}else c=Th(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Th(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Gy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let ky=0;const Ah=new J;class Fn extends Bs{constructor(t=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=Sa,l=Sa,c=zn,h=Ps,d=Ni,m=xi,p=Fn.DEFAULT_ANISOTROPY,x=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=os(),this.name="",this.source=new op(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ah).x}get height(){return this.source.getSize(Ah).y}get depth(){return this.source.getSize(Ah).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fd:t.x=t.x-Math.floor(t.x);break;case Sa:t.x=t.x<0?0:1;break;case hd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fd:t.y=t.y-Math.floor(t.y);break;case Sa:t.y=t.y<0?0:1;break;case hd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=fv;Fn.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,i=0,s=0,l=1){on.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],x=m[4],g=m[8],S=m[1],E=m[5],A=m[9],C=m[2],y=m[6],v=m[10];if(Math.abs(x-S)<.01&&Math.abs(g-C)<.01&&Math.abs(A-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(g+C)<.1&&Math.abs(A+y)<.1&&Math.abs(p+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,N=(E+1)/2,F=(v+1)/2,B=(x+S)/4,z=(g+C)/4,$=(A+y)/4;return O>N&&O>F?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=B/s,c=z/s):N>F?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=B/l,c=$/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=z/c,l=$/c),this.set(s,l,c,i),this}let P=Math.sqrt((y-A)*(y-A)+(g-C)*(g-C)+(S-x)*(S-x));return Math.abs(P)<.001&&(P=1),this.x=(y-A)/P,this.y=(g-C)/P,this.z=(S-x)/P,this.w=Math.acos((p+E+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xy extends Bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,t,i),this.scissorTest=!1,this.viewport=new on(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Fn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new op(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends Xy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Sv extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wy extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ol{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(wi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(wi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=wi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,wi):wi.fromBufferAttribute(c,h),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),yc.copy(s.boundingBox)),yc.applyMatrix4(t.matrixWorld),this.union(yc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yo),Mc.subVectors(this.max,Yo),br.subVectors(t.a,Yo),Tr.subVectors(t.b,Yo),Ar.subVectors(t.c,Yo),Ja.subVectors(Tr,br),$a.subVectors(Ar,Tr),Rs.subVectors(br,Ar);let i=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-Rs.z,Rs.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,Rs.z,0,-Rs.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-Rs.y,Rs.x,0];return!Rh(i,br,Tr,Ar,Mc)||(i=[1,0,0,0,1,0,0,0,1],!Rh(i,br,Tr,Ar,Mc))?!1:(Ec.crossVectors(Ja,$a),i=[Ec.x,Ec.y,Ec.z],Rh(i,br,Tr,Ar,Mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pa=[new J,new J,new J,new J,new J,new J,new J,new J],wi=new J,yc=new ol,br=new J,Tr=new J,Ar=new J,Ja=new J,$a=new J,Rs=new J,Yo=new J,Mc=new J,Ec=new J,Cs=new J;function Rh(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Cs.fromArray(o,c);const d=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),m=t.dot(Cs),p=i.dot(Cs),x=s.dot(Cs);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const Yy=new ol,qo=new J,Ch=new J;class ru{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Yy.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(qo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ch.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(Ch)),this.expandByPoint(qo.copy(t.center).sub(Ch))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ma=new J,wh=new J,bc=new J,ts=new J,Dh=new J,Tc=new J,Uh=new J;class ou{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){wh.copy(t).add(i).multiplyScalar(.5),bc.copy(i).sub(t).normalize(),ts.copy(this.origin).sub(wh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(bc),d=ts.dot(this.direction),m=-ts.dot(bc),p=ts.lengthSq(),x=Math.abs(1-h*h);let g,S,E,A;if(x>0)if(g=h*m-d,S=h*d-m,A=c*x,g>=0)if(S>=-A)if(S<=A){const C=1/x;g*=C,S*=C,E=g*(g+h*S+2*d)+S*(h*g+S+2*m)+p}else S=c,g=Math.max(0,-(h*S+d)),E=-g*g+S*(S+2*m)+p;else S=-c,g=Math.max(0,-(h*S+d)),E=-g*g+S*(S+2*m)+p;else S<=-A?(g=Math.max(0,-(-h*c+d)),S=g>0?-c:Math.min(Math.max(-c,-m),c),E=-g*g+S*(S+2*m)+p):S<=A?(g=0,S=Math.min(Math.max(-c,-m),c),E=S*(S+2*m)+p):(g=Math.max(0,-(h*c+d)),S=g>0?c:Math.min(Math.max(-c,-m),c),E=-g*g+S*(S+2*m)+p);else S=h>0?-c:c,g=Math.max(0,-(h*S+d)),E=-g*g+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(wh).addScaledVector(bc,S),E}intersectSphere(t,i){ma.subVectors(t.center,this.origin);const s=ma.dot(this.direction),l=ma.dot(ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),x>=0?(c=(t.min.y-S.y)*x,h=(t.max.y-S.y)*x):(c=(t.max.y-S.y)*x,h=(t.min.y-S.y)*x),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-S.z)*g,m=(t.max.z-S.z)*g):(d=(t.max.z-S.z)*g,m=(t.min.z-S.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ma)!==null}intersectTriangle(t,i,s,l,c){Dh.subVectors(i,t),Tc.subVectors(s,t),Uh.crossVectors(Dh,Tc);let h=this.direction.dot(Uh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ts.subVectors(this.origin,t);const m=d*this.direction.dot(Tc.crossVectors(ts,Tc));if(m<0)return null;const p=d*this.direction.dot(Dh.cross(ts));if(p<0||m+p>h)return null;const x=-d*ts.dot(Uh);return x<0?null:this.at(x/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,i,s,l,c,h,d,m,p,x,g,S,E,A,C,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,x,g,S,E,A,C,y)}set(t,i,s,l,c,h,d,m,p,x,g,S,E,A,C,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=x,v[10]=g,v[14]=S,v[3]=E,v[7]=A,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Rr.setFromMatrixColumn(t,0).length(),c=1/Rr.setFromMatrixColumn(t,1).length(),h=1/Rr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const S=h*x,E=h*g,A=d*x,C=d*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=E+A*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=A+E*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*x,E=m*g,A=p*x,C=p*g;i[0]=S+C*d,i[4]=A*d-E,i[8]=h*p,i[1]=h*g,i[5]=h*x,i[9]=-d,i[2]=E*d-A,i[6]=C+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*x,E=m*g,A=p*x,C=p*g;i[0]=S-C*d,i[4]=-h*g,i[8]=A+E*d,i[1]=E+A*d,i[5]=h*x,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*x,E=h*g,A=d*x,C=d*g;i[0]=m*x,i[4]=A*p-E,i[8]=S*p+C,i[1]=m*g,i[5]=C*p+S,i[9]=E*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,E=h*p,A=d*m,C=d*p;i[0]=m*x,i[4]=C-S*g,i[8]=A*g+E,i[1]=g,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=E*g+A,i[10]=S-C*g}else if(t.order==="XZY"){const S=h*m,E=h*p,A=d*m,C=d*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=S*g+C,i[5]=h*x,i[9]=E*g-A,i[2]=A*g-E,i[6]=d*x,i[10]=C*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qy,t,jy)}lookAt(t,i,s){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),es.crossVectors(s,ii),es.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),es.crossVectors(s,ii)),es.normalize(),Ac.crossVectors(ii,es),l[0]=es.x,l[4]=Ac.x,l[8]=ii.x,l[1]=es.y,l[5]=Ac.y,l[9]=ii.y,l[2]=es.z,l[6]=Ac.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],x=s[1],g=s[5],S=s[9],E=s[13],A=s[2],C=s[6],y=s[10],v=s[14],P=s[3],O=s[7],N=s[11],F=s[15],B=l[0],z=l[4],$=l[8],R=l[12],D=l[1],k=l[5],it=l[9],at=l[13],ft=l[2],ot=l[6],L=l[10],H=l[14],Z=l[3],pt=l[7],dt=l[11],w=l[15];return c[0]=h*B+d*D+m*ft+p*Z,c[4]=h*z+d*k+m*ot+p*pt,c[8]=h*$+d*it+m*L+p*dt,c[12]=h*R+d*at+m*H+p*w,c[1]=x*B+g*D+S*ft+E*Z,c[5]=x*z+g*k+S*ot+E*pt,c[9]=x*$+g*it+S*L+E*dt,c[13]=x*R+g*at+S*H+E*w,c[2]=A*B+C*D+y*ft+v*Z,c[6]=A*z+C*k+y*ot+v*pt,c[10]=A*$+C*it+y*L+v*dt,c[14]=A*R+C*at+y*H+v*w,c[3]=P*B+O*D+N*ft+F*Z,c[7]=P*z+O*k+N*ot+F*pt,c[11]=P*$+O*it+N*L+F*dt,c[15]=P*R+O*at+N*H+F*w,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],x=t[2],g=t[6],S=t[10],E=t[14],A=t[3],C=t[7],y=t[11],v=t[15],P=m*E-p*S,O=d*E-p*g,N=d*S-m*g,F=h*E-p*x,B=h*S-m*x,z=h*g-d*x;return i*(C*P-y*O+v*N)-s*(A*P-y*F+v*B)+l*(A*O-C*F+v*z)-c*(A*N-C*B+y*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],g=t[9],S=t[10],E=t[11],A=t[12],C=t[13],y=t[14],v=t[15],P=g*y*p-C*S*p+C*m*E-d*y*E-g*m*v+d*S*v,O=A*S*p-x*y*p-A*m*E+h*y*E+x*m*v-h*S*v,N=x*C*p-A*g*p+A*d*E-h*C*E-x*d*v+h*g*v,F=A*g*m-x*C*m-A*d*S+h*C*S+x*d*y-h*g*y,B=i*P+s*O+l*N+c*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=P*z,t[1]=(C*S*c-g*y*c-C*l*E+s*y*E+g*l*v-s*S*v)*z,t[2]=(d*y*c-C*m*c+C*l*p-s*y*p-d*l*v+s*m*v)*z,t[3]=(g*m*c-d*S*c-g*l*p+s*S*p+d*l*E-s*m*E)*z,t[4]=O*z,t[5]=(x*y*c-A*S*c+A*l*E-i*y*E-x*l*v+i*S*v)*z,t[6]=(A*m*c-h*y*c-A*l*p+i*y*p+h*l*v-i*m*v)*z,t[7]=(h*S*c-x*m*c+x*l*p-i*S*p-h*l*E+i*m*E)*z,t[8]=N*z,t[9]=(A*g*c-x*C*c-A*s*E+i*C*E+x*s*v-i*g*v)*z,t[10]=(h*C*c-A*d*c+A*s*p-i*C*p-h*s*v+i*d*v)*z,t[11]=(x*d*c-h*g*c-x*s*p+i*g*p+h*s*E-i*d*E)*z,t[12]=F*z,t[13]=(x*C*l-A*g*l+A*s*S-i*C*S-x*s*y+i*g*y)*z,t[14]=(A*d*l-h*C*l-A*s*m+i*C*m+h*s*y-i*d*y)*z,t[15]=(h*g*l-x*d*l+x*s*m-i*g*m-h*s*S+i*d*S)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,x=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+s,x*m-l*h,0,p*m-l*d,x*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,x=h+h,g=d+d,S=c*p,E=c*x,A=c*g,C=h*x,y=h*g,v=d*g,P=m*p,O=m*x,N=m*g,F=s.x,B=s.y,z=s.z;return l[0]=(1-(C+v))*F,l[1]=(E+N)*F,l[2]=(A-O)*F,l[3]=0,l[4]=(E-N)*B,l[5]=(1-(S+v))*B,l[6]=(y+P)*B,l[7]=0,l[8]=(A+O)*z,l[9]=(y-P)*z,l[10]=(1-(S+C))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Rr.set(l[0],l[1],l[2]).length();const h=Rr.set(l[4],l[5],l[6]).length(),d=Rr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Di.copy(this);const p=1/c,x=1/h,g=1/d;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=x,Di.elements[5]*=x,Di.elements[6]*=x,Di.elements[8]*=g,Di.elements[9]*=g,Di.elements[10]*=g,i.setFromRotationMatrix(Di),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=ki,m=!1){const p=this.elements,x=2*c/(i-t),g=2*c/(s-l),S=(i+t)/(i-t),E=(s+l)/(s-l);let A,C;if(m)A=c/(h-c),C=h*c/(h-c);else if(d===ki)A=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===eu)A=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=ki,m=!1){const p=this.elements,x=2/(i-t),g=2/(s-l),S=-(i+t)/(i-t),E=-(s+l)/(s-l);let A,C;if(m)A=1/(h-c),C=h/(h-c);else if(d===ki)A=-2/(h-c),C=-(h+c)/(h-c);else if(d===eu)A=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Rr=new J,Di=new $e,qy=new J(0,0,0),jy=new J(1,1,1),es=new J,Ac=new J,ii=new J,c_=new $e,u_=new Is;class Ta{constructor(t=0,i=0,s=0,l=Ta.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],g=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,E),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return c_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(c_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return u_.setFromEuler(this),this.setFromQuaternion(u_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ta.DEFAULT_ORDER="XYZ";class lp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zy=0;const f_=new J,Cr=new Is,ga=new $e,Rc=new J,jo=new J,Ky=new J,Qy=new Is,h_=new J(1,0,0),d_=new J(0,1,0),p_=new J(0,0,1),m_={type:"added"},Jy={type:"removed"},wr={type:"childadded",child:null},Nh={type:"childremoved",child:null};class Gn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const t=new J,i=new Ta,s=new Is,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new de}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(h_,t)}rotateY(t){return this.rotateOnAxis(d_,t)}rotateZ(t){return this.rotateOnAxis(p_,t)}translateOnAxis(t,i){return f_.copy(t).applyQuaternion(this.quaternion),this.position.add(f_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(h_,t)}translateY(t){return this.translateOnAxis(d_,t)}translateZ(t){return this.translateOnAxis(p_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Rc.copy(t):Rc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(jo,Rc,this.up):ga.lookAt(Rc,jo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(ga),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(m_),wr.child=t,this.dispatchEvent(wr),wr.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Jy),Nh.child=t,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ga.multiply(t.parent.matrixWorld)),t.applyMatrix4(ga),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(m_),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,Ky),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,Qy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),x=h(t.images),g=h(t.shapes),S=h(t.skeletons),E=h(t.animations),A=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),A.length>0&&(s.nodes=A)}return s.object=l,s;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Gn.DEFAULT_UP=new J(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new J,_a=new J,Lh=new J,va=new J,Dr=new J,Ur=new J,g_=new J,Oh=new J,Ph=new J,zh=new J,Fh=new on,Ih=new on,Bh=new on;class Si{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ui.subVectors(t,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ui.subVectors(l,i),_a.subVectors(s,i),Lh.subVectors(t,i);const h=Ui.dot(Ui),d=Ui.dot(_a),m=Ui.dot(Lh),p=_a.dot(_a),x=_a.dot(Lh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const S=1/g,E=(p*m-d*x)*S,A=(h*x-d*m)*S;return c.set(1-E-A,A,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,va.x),m.addScaledVector(h,va.y),m.addScaledVector(d,va.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Fh.setScalar(0),Ih.setScalar(0),Bh.setScalar(0),Fh.fromBufferAttribute(t,i),Ih.fromBufferAttribute(t,s),Bh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Fh,c.x),h.addScaledVector(Ih,c.y),h.addScaledVector(Bh,c.z),h}static isFrontFacing(t,i,s,l){return Ui.subVectors(s,i),_a.subVectors(t,i),Ui.cross(_a).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Ui.cross(_a).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Si.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Dr.subVectors(l,s),Ur.subVectors(c,s),Oh.subVectors(t,s);const m=Dr.dot(Oh),p=Ur.dot(Oh);if(m<=0&&p<=0)return i.copy(s);Ph.subVectors(t,l);const x=Dr.dot(Ph),g=Ur.dot(Ph);if(x>=0&&g<=x)return i.copy(l);const S=m*g-x*p;if(S<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(s).addScaledVector(Dr,h);zh.subVectors(t,c);const E=Dr.dot(zh),A=Ur.dot(zh);if(A>=0&&E<=A)return i.copy(c);const C=E*p-m*A;if(C<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(s).addScaledVector(Ur,d);const y=x*A-E*g;if(y<=0&&g-x>=0&&E-A>=0)return g_.subVectors(c,l),d=(g-x)/(g-x+(E-A)),i.copy(l).addScaledVector(g_,d);const v=1/(y+C+S);return h=C*v,d=S*v,i.copy(s).addScaledVector(Dr,h).addScaledVector(Ur,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Hh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Pe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ae.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ae.workingColorSpace){if(t=Iy(t,1),i=ve(i,0,1),s=ve(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Hh(h,c,t+1/3),this.g=Hh(h,c,t),this.b=Hh(h,c,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,i=_i){function s(c){c!==void 0&&parseFloat(c)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:re("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=_i){const s=yv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return Ae.workingToColorSpace(Pn.copy(this),t),Math.round(ve(Pn.r*255,0,255))*65536+Math.round(ve(Pn.g*255,0,255))*256+Math.round(ve(Pn.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=x<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=_i){Ae.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==_i?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+i,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ns),t.getHSL(Cc);const s=Mh(ns.h,Cc.h,i),l=Mh(ns.s,Cc.s,i),c=Mh(ns.l,Cc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Pe;Pe.NAMES=yv;let $y=0;class Zr extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=os(),this.name="",this.type="Material",this.blending=Vr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=td,this.blendDst=ed,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(s.blending=this.blending),this.side!==ls&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==td&&(s.blendSrc=this.blendSrc),this.blendDst!==ed&&(s.blendDst=this.blendDst),this.blendEquation!==Ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class cp extends Zr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.combine=iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new J,wc=new ie;let tM=0;class yi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Wd,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)wc.fromBufferAttribute(this,i),wc.applyMatrix3(t),this.setXY(i,wc.x,wc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Gi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Xe(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Gi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Gi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Gi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Gi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array),l=Xe(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wd&&(t.usage=this.usage),t}}class Mv extends yi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Ev extends yi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Mi extends yi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let eM=0;const gi=new $e,Gh=new Gn,Nr=new J,ai=new ol,Zo=new ol,Sn=new J;class si extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xv(t)?Ev:Mv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new de().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,s){return gi.makeTranslation(t,i,s),this.applyMatrix4(gi),this}scale(t,i,s){return gi.makeScale(t,i,s),this.applyMatrix4(gi),this}lookAt(t){return Gh.lookAt(t),Gh.updateMatrix(),this.applyMatrix4(Gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Mi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ru);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Zo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ai.min,Zo.min),ai.expandByPoint(Sn),Sn.addVectors(ai.max,Zo.max),ai.expandByPoint(Sn)):(ai.expandByPoint(Zo.min),ai.expandByPoint(Zo.max))}ai.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)Sn.fromBufferAttribute(d,p),m&&(Nr.fromBufferAttribute(t,p),Sn.add(Nr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let $=0;$<s.count;$++)d[$]=new J,m[$]=new J;const p=new J,x=new J,g=new J,S=new ie,E=new ie,A=new ie,C=new J,y=new J;function v($,R,D){p.fromBufferAttribute(s,$),x.fromBufferAttribute(s,R),g.fromBufferAttribute(s,D),S.fromBufferAttribute(c,$),E.fromBufferAttribute(c,R),A.fromBufferAttribute(c,D),x.sub(p),g.sub(p),E.sub(S),A.sub(S);const k=1/(E.x*A.y-A.x*E.y);isFinite(k)&&(C.copy(x).multiplyScalar(A.y).addScaledVector(g,-E.y).multiplyScalar(k),y.copy(g).multiplyScalar(E.x).addScaledVector(x,-A.x).multiplyScalar(k),d[$].add(C),d[R].add(C),d[D].add(C),m[$].add(y),m[R].add(y),m[D].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let $=0,R=P.length;$<R;++$){const D=P[$],k=D.start,it=D.count;for(let at=k,ft=k+it;at<ft;at+=3)v(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const O=new J,N=new J,F=new J,B=new J;function z($){F.fromBufferAttribute(l,$),B.copy(F);const R=d[$];O.copy(R),O.sub(F.multiplyScalar(F.dot(R))).normalize(),N.crossVectors(B,R);const k=N.dot(m[$])<0?-1:1;h.setXYZW($,O.x,O.y,O.z,k)}for(let $=0,R=P.length;$<R;++$){const D=P[$],k=D.start,it=D.count;for(let at=k,ft=k+it;at<ft;at+=3)z(t.getX(at+0)),z(t.getX(at+1)),z(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new yi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const l=new J,c=new J,h=new J,d=new J,m=new J,p=new J,x=new J,g=new J;if(t)for(let S=0,E=t.count;S<E;S+=3){const A=t.getX(S+0),C=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),x.subVectors(h,c),g.subVectors(l,c),x.cross(g),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),d.add(x),m.add(x),p.add(x),s.setXYZ(A,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),x.subVectors(h,c),g.subVectors(l,c),x.cross(g),s.setXYZ(S+0,x.x,x.y,x.z),s.setXYZ(S+1,x.x,x.y,x.z),s.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,x=d.itemSize,g=d.normalized,S=new p.constructor(m.length*x);let E=0,A=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?E=m[C]*d.data.stride+d.offset:E=m[C]*x;for(let v=0;v<x;v++)S[A++]=p[E++]}return new yi(S,x,g)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new si,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let x=0,g=p.length;x<g;x++){const S=p[x],E=t(S,s);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,S=p.length;g<S;g++){const E=p[g];x.push(E.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=t.morphAttributes;for(const p in c){const x=[],g=c[p];for(let S=0,E=g.length;S<E;S++)x.push(g[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,x=h.length;p<x;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const __=new $e,ws=new ou,Dc=new ru,v_=new J,Uc=new J,Nc=new J,Lc=new J,Vh=new J,Oc=new J,x_=new J,Pc=new J;class qi extends Gn{constructor(t=new si,i=new cp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Oc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=d[m],g=c[m];x!==0&&(Vh.fromBufferAttribute(g,t),h?Oc.addScaledVector(Vh,x):Oc.addScaledVector(Vh.sub(i),x))}i.add(Oc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Dc.copy(s.boundingSphere),Dc.applyMatrix4(c),ws.copy(t.ray).recast(t.near),!(Dc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Dc,v_)===null||ws.origin.distanceToSquared(v_)>(t.far-t.near)**2))&&(__.copy(c).invert(),ws.copy(t.ray).applyMatrix4(__),!(s.boundingBox!==null&&ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ws)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,S=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const y=S[A],v=h[y.materialIndex],P=Math.max(y.start,E.start),O=Math.min(d.count,Math.min(y.start+y.count,E.start+E.count));for(let N=P,F=O;N<F;N+=3){const B=d.getX(N),z=d.getX(N+1),$=d.getX(N+2);l=zc(this,v,t,s,p,x,g,B,z,$),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(d.count,E.start+E.count);for(let y=A,v=C;y<v;y+=3){const P=d.getX(y),O=d.getX(y+1),N=d.getX(y+2);l=zc(this,h,t,s,p,x,g,P,O,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const y=S[A],v=h[y.materialIndex],P=Math.max(y.start,E.start),O=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let N=P,F=O;N<F;N+=3){const B=N,z=N+1,$=N+2;l=zc(this,v,t,s,p,x,g,B,z,$),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let y=A,v=C;y<v;y+=3){const P=y,O=y+1,N=y+2;l=zc(this,h,t,s,p,x,g,P,O,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function nM(o,t,i,s,l,c,h,d){let m;if(t.side===Zn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===ls,d),m===null)return null;Pc.copy(d),Pc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Pc);return p<i.near||p>i.far?null:{distance:p,point:Pc.clone(),object:o}}function zc(o,t,i,s,l,c,h,d,m,p){o.getVertexPosition(d,Uc),o.getVertexPosition(m,Nc),o.getVertexPosition(p,Lc);const x=nM(o,t,i,s,Uc,Nc,Lc,x_);if(x){const g=new J;Si.getBarycoord(x_,Uc,Nc,Lc,g),l&&(x.uv=Si.getInterpolatedAttribute(l,d,m,p,g,new ie)),c&&(x.uv1=Si.getInterpolatedAttribute(c,d,m,p,g,new ie)),h&&(x.normal=Si.getInterpolatedAttribute(h,d,m,p,g,new J),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new J,materialIndex:0};Si.getNormal(Uc,Nc,Lc,S.normal),x.face=S,x.barycoord=g}return x}class ll extends si{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],x=[],g=[];let S=0,E=0;A("z","y","x",-1,-1,s,i,t,h,c,0),A("z","y","x",1,-1,s,i,-t,h,c,1),A("x","z","y",1,1,t,s,i,l,h,2),A("x","z","y",1,-1,t,s,-i,l,h,3),A("x","y","z",1,-1,t,i,s,l,c,4),A("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Mi(p,3)),this.setAttribute("normal",new Mi(x,3)),this.setAttribute("uv",new Mi(g,2));function A(C,y,v,P,O,N,F,B,z,$,R){const D=N/z,k=F/$,it=N/2,at=F/2,ft=B/2,ot=z+1,L=$+1;let H=0,Z=0;const pt=new J;for(let dt=0;dt<L;dt++){const w=dt*k-at;for(let K=0;K<ot;K++){const mt=K*D-it;pt[C]=mt*P,pt[y]=w*O,pt[v]=ft,p.push(pt.x,pt.y,pt.z),pt[C]=0,pt[y]=0,pt[v]=B>0?1:-1,x.push(pt.x,pt.y,pt.z),g.push(K/z),g.push(1-dt/$),H+=1}}for(let dt=0;dt<$;dt++)for(let w=0;w<z;w++){const K=S+w+ot*dt,mt=S+w+ot*(dt+1),Mt=S+(w+1)+ot*(dt+1),Ct=S+(w+1)+ot*dt;m.push(K,mt,Ct),m.push(mt,Mt,Ct),Z+=6}d.addGroup(E,Z,R),E+=Z,S+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function jr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(o){const t={};for(let i=0;i<o.length;i++){const s=jr(o[i]);for(const l in s)t[l]=s[l]}return t}function iM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function bv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const aM={clone:jr,merge:Hn};var sM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Zr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sM,this.fragmentShader=rM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jr(t.uniforms),this.uniformsGroups=iM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Tv extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new J,S_=new ie,y_=new ie;class vi extends Tv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Yd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yd*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,i){return this.getViewBounds(t,S_,y_),i.subVectors(y_,S_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Qc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Lr=-90,Or=1;class oM extends Gn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new vi(Lr,Or,t,i);l.layers=this.layers,this.add(l);const c=new vi(Lr,Or,t,i);c.layers=this.layers,this.add(c);const h=new vi(Lr,Or,t,i);h.layers=this.layers,this.add(h);const d=new vi(Lr,Or,t,i);d.layers=this.layers,this.add(d);const m=new vi(Lr,Or,t,i);m.layers=this.layers,this.add(m);const p=new vi(Lr,Or,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===eu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,x]=this.children,g=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,x),t.setRenderTarget(g,S,E),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class Av extends Fn{constructor(t=[],i=Fs,s,l,c,h,d,m,p,x){super(t,i,s,l,c,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rv extends Wi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Av(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ll(5,5,5),c=new ji({name:"CubemapFromEquirect",uniforms:jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:ya});c.uniforms.tEquirect.value=i;const h=new qi(l,c),d=i.minFilter;return i.minFilter===Ps&&(i.minFilter=zn),new oM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}let Bi=class extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}};const lM={type:"move"};class kh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,s),v=this._getHandJoint(p,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=x.position.distanceTo(g.position),E=.02,A=.005;p.inputState.pinching&&S>E+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=E-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(lM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Bi;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class cM extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ta,this.environmentIntensity=1,this.environmentRotation=new Ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class uM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Wd,this.updateRanges=[],this.version=0,this.uuid=os()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=os()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=os()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new J;class au{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Gi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Xe(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Gi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Gi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Gi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Gi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array),l=Xe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){iu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new yi(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new au(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){iu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cv extends Zr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Pr;const Ko=new J,zr=new J,Fr=new J,Ir=new ie,Qo=new ie,wv=new $e,Fc=new J,Jo=new J,Ic=new J,M_=new ie,Xh=new ie,E_=new ie;class fM extends Gn{constructor(t=new Cv){if(super(),this.isSprite=!0,this.type="Sprite",Pr===void 0){Pr=new si;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new uM(i,5);Pr.setIndex([0,1,2,0,2,3]),Pr.setAttribute("position",new au(s,3,0,!1)),Pr.setAttribute("uv",new au(s,2,3,!1))}this.geometry=Pr,this.material=t,this.center=new ie(.5,.5),this.count=1}raycast(t,i){t.camera===null&&be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zr.setFromMatrixScale(this.matrixWorld),wv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zr.multiplyScalar(-Fr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const h=this.center;Bc(Fc.set(-.5,-.5,0),Fr,h,zr,l,c),Bc(Jo.set(.5,-.5,0),Fr,h,zr,l,c),Bc(Ic.set(.5,.5,0),Fr,h,zr,l,c),M_.set(0,0),Xh.set(1,0),E_.set(1,1);let d=t.ray.intersectTriangle(Fc,Jo,Ic,!1,Ko);if(d===null&&(Bc(Jo.set(-.5,.5,0),Fr,h,zr,l,c),Xh.set(0,1),d=t.ray.intersectTriangle(Fc,Ic,Jo,!1,Ko),d===null))return;const m=t.ray.origin.distanceTo(Ko);m<t.near||m>t.far||i.push({distance:m,point:Ko.clone(),uv:Si.getInterpolation(Ko,Fc,Jo,Ic,M_,Xh,E_,new ie),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Bc(o,t,i,s,l,c){Ir.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(Qo.x=c*Ir.x-l*Ir.y,Qo.y=l*Ir.x+c*Ir.y):Qo.copy(Ir),o.copy(t),o.x+=Qo.x,o.y+=Qo.y,o.applyMatrix4(wv)}class hM extends Fn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Un,x=Un,g,S){super(null,h,d,m,p,x,l,c,g,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wh=new J,dM=new J,pM=new de;class as{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Wh.subVectors(s,i).cross(dM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Wh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||pM.getNormalMatrix(t),l=this.coplanarPoint(Wh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new ru,mM=new ie(.5,.5),Hc=new J;class Dv{constructor(t=new as,i=new as,s=new as,l=new as,c=new as,h=new as){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ki,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],x=c[4],g=c[5],S=c[6],E=c[7],A=c[8],C=c[9],y=c[10],v=c[11],P=c[12],O=c[13],N=c[14],F=c[15];if(l[0].setComponents(p-h,E-x,v-A,F-P).normalize(),l[1].setComponents(p+h,E+x,v+A,F+P).normalize(),l[2].setComponents(p+d,E+g,v+C,F+O).normalize(),l[3].setComponents(p-d,E-g,v-C,F-O).normalize(),s)l[4].setComponents(m,S,y,N).normalize(),l[5].setComponents(p-m,E-S,v-y,F-N).normalize();else if(l[4].setComponents(p-m,E-S,v-y,F-N).normalize(),i===ki)l[5].setComponents(p+m,E+S,v+y,F+N).normalize();else if(i===eu)l[5].setComponents(m,S,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);const i=mM.distanceTo(t.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Hc.x=l.normal.x>0?t.max.x:t.min.x,Hc.y=l.normal.y>0?t.max.y:t.min.y,Hc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uv extends Zr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const b_=new $e,qd=new ou,Gc=new ru,Vc=new J;class gM extends Gn{constructor(t=new si,i=new Uv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Gc.copy(s.boundingSphere),Gc.applyMatrix4(l),Gc.radius+=c,t.ray.intersectsSphere(Gc)===!1)return;b_.copy(l).invert(),qd.copy(t.ray).applyMatrix4(b_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),E=Math.min(p.count,h.start+h.count);for(let A=S,C=E;A<C;A++){const y=p.getX(A);Vc.fromBufferAttribute(g,y),T_(Vc,y,m,l,t,i,this)}}else{const S=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let A=S,C=E;A<C;A++)Vc.fromBufferAttribute(g,A),T_(Vc,A,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function T_(o,t,i,s,l,c,h){const d=qd.distanceSqToPoint(o);if(d<i){const m=new J;qd.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class _M extends Fn{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rl extends Fn{constructor(t,i,s=Yi,l,c,h,d=Un,m=Un,p,x=ba,g=1){if(x!==ba&&x!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:g};super(S,l,c,h,d,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new op(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class vM extends rl{constructor(t,i=Yi,s=Fs,l,c,h=Un,d=Un,m,p=ba){const x={width:t,height:t,depth:1},g=[x,x,x,x,x,x];super(t,t,i,s,l,c,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Nv extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class lu extends si{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,x=m+1,g=t/d,S=i/m,E=[],A=[],C=[],y=[];for(let v=0;v<x;v++){const P=v*S-h;for(let O=0;O<p;O++){const N=O*g-c;A.push(N,-P,0),C.push(0,0,1),y.push(O/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let P=0;P<d;P++){const O=P+p*v,N=P+p*(v+1),F=P+1+p*(v+1),B=P+1+p*v;E.push(O,N,B),E.push(N,F,B)}this.setIndex(E),this.setAttribute("position",new Mi(A,3)),this.setAttribute("normal",new Mi(C,3)),this.setAttribute("uv",new Mi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lu(t.width,t.height,t.widthSegments,t.heightSegments)}}class up extends si{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const x=[],g=new J,S=new J,E=[],A=[],C=[],y=[];for(let v=0;v<=s;v++){const P=[],O=v/s;let N=0;v===0&&h===0?N=.5/i:v===s&&m===Math.PI&&(N=-.5/i);for(let F=0;F<=i;F++){const B=F/i;g.x=-t*Math.cos(l+B*c)*Math.sin(h+O*d),g.y=t*Math.cos(h+O*d),g.z=t*Math.sin(l+B*c)*Math.sin(h+O*d),A.push(g.x,g.y,g.z),S.copy(g).normalize(),C.push(S.x,S.y,S.z),y.push(B+N,1-O),P.push(p++)}x.push(P)}for(let v=0;v<s;v++)for(let P=0;P<i;P++){const O=x[v][P+1],N=x[v][P],F=x[v+1][P],B=x[v+1][P+1];(v!==0||h>0)&&E.push(O,N,B),(v!==s-1||m<Math.PI)&&E.push(N,F,B)}this.setIndex(E),this.setAttribute("position",new Mi(A,3)),this.setAttribute("normal",new Mi(C,3)),this.setAttribute("uv",new Mi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new up(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xM extends ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class SM extends Zr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yM extends Zr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Lv extends Tv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class MM extends vi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const A_=new $e;class EM{constructor(t,i,s=0,l=1/0){this.ray=new ou(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new lp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):be("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return A_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(A_),this}intersectObject(t,i=!0,s=[]){return jd(t,this,s,i),s.sort(R_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)jd(t[l],this,s,i);return s.sort(R_),s}}function R_(o,t){return o.distance-t.distance}function jd(o,t,i,s){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=o.children;for(let h=0,d=c.length;h<d;h++)jd(c[h],t,i,!0)}}class C_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ve(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bM extends Bs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){re("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function w_(o,t,i,s){const l=TM(s);switch(i){case gv:return o*t;case vv:return o*t/l.components*l.byteLength;case np:return o*t/l.components*l.byteLength;case Yr:return o*t*2/l.components*l.byteLength;case ip:return o*t*2/l.components*l.byteLength;case _v:return o*t*3/l.components*l.byteLength;case Ni:return o*t*4/l.components*l.byteLength;case ap:return o*t*4/l.components*l.byteLength;case qc:case jc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Zc:case Kc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case pd:case gd:return Math.max(o,16)*Math.max(t,8)/4;case dd:case md:return Math.max(o,8)*Math.max(t,8)/2;case _d:case vd:case Sd:case yd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case xd:case Md:case Ed:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case bd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Td:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case wd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Ud:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Nd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Od:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Pd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case zd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Id:case Bd:case Hd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Gd:case Vd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case kd:case Xd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function TM(o){switch(o){case xi:case hv:return{byteLength:1,components:1};case il:case dv:case Ea:return{byteLength:2,components:1};case tp:case ep:return{byteLength:2,components:4};case Yi:case $d:case Vi:return{byteLength:4,components:1};case pv:case mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jd}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ov(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function AM(o){const t=new WeakMap;function i(d,m){const p=d.array,x=d.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),d.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const x=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,x);else{g.sort((E,A)=>E.start-A.start);let S=0;for(let E=1;E<g.length;E++){const A=g[S],C=g[E];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,g[S]=C)}g.length=S+1;for(let E=0,A=g.length;E<A;E++){const C=g[E];o.bufferSubData(p,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=t.get(d);(!x||x.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var RM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,KM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iE="gl_FragColor = linearToOutputTexel( gl_FragColor );",aE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ME=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,TE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,CE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ub=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,db=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ub=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ob=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$b=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:RM,alphahash_pars_fragment:CM,alphamap_fragment:wM,alphamap_pars_fragment:DM,alphatest_fragment:UM,alphatest_pars_fragment:NM,aomap_fragment:LM,aomap_pars_fragment:OM,batching_pars_vertex:PM,batching_vertex:zM,begin_vertex:FM,beginnormal_vertex:IM,bsdfs:BM,iridescence_fragment:HM,bumpmap_pars_fragment:GM,clipping_planes_fragment:VM,clipping_planes_pars_fragment:kM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:WM,color_fragment:YM,color_pars_fragment:qM,color_pars_vertex:jM,color_vertex:ZM,common:KM,cube_uv_reflection_fragment:QM,defaultnormal_vertex:JM,displacementmap_pars_vertex:$M,displacementmap_vertex:tE,emissivemap_fragment:eE,emissivemap_pars_fragment:nE,colorspace_fragment:iE,colorspace_pars_fragment:aE,envmap_fragment:sE,envmap_common_pars_fragment:rE,envmap_pars_fragment:oE,envmap_pars_vertex:lE,envmap_physical_pars_fragment:xE,envmap_vertex:cE,fog_vertex:uE,fog_pars_vertex:fE,fog_fragment:hE,fog_pars_fragment:dE,gradientmap_pars_fragment:pE,lightmap_pars_fragment:mE,lights_lambert_fragment:gE,lights_lambert_pars_fragment:_E,lights_pars_begin:vE,lights_toon_fragment:SE,lights_toon_pars_fragment:yE,lights_phong_fragment:ME,lights_phong_pars_fragment:EE,lights_physical_fragment:bE,lights_physical_pars_fragment:TE,lights_fragment_begin:AE,lights_fragment_maps:RE,lights_fragment_end:CE,logdepthbuf_fragment:wE,logdepthbuf_pars_fragment:DE,logdepthbuf_pars_vertex:UE,logdepthbuf_vertex:NE,map_fragment:LE,map_pars_fragment:OE,map_particle_fragment:PE,map_particle_pars_fragment:zE,metalnessmap_fragment:FE,metalnessmap_pars_fragment:IE,morphinstance_vertex:BE,morphcolor_vertex:HE,morphnormal_vertex:GE,morphtarget_pars_vertex:VE,morphtarget_vertex:kE,normal_fragment_begin:XE,normal_fragment_maps:WE,normal_pars_fragment:YE,normal_pars_vertex:qE,normal_vertex:jE,normalmap_pars_fragment:ZE,clearcoat_normal_fragment_begin:KE,clearcoat_normal_fragment_maps:QE,clearcoat_pars_fragment:JE,iridescence_pars_fragment:$E,opaque_fragment:tb,packing:eb,premultiplied_alpha_fragment:nb,project_vertex:ib,dithering_fragment:ab,dithering_pars_fragment:sb,roughnessmap_fragment:rb,roughnessmap_pars_fragment:ob,shadowmap_pars_fragment:lb,shadowmap_pars_vertex:cb,shadowmap_vertex:ub,shadowmask_pars_fragment:fb,skinbase_vertex:hb,skinning_pars_vertex:db,skinning_vertex:pb,skinnormal_vertex:mb,specularmap_fragment:gb,specularmap_pars_fragment:_b,tonemapping_fragment:vb,tonemapping_pars_fragment:xb,transmission_fragment:Sb,transmission_pars_fragment:yb,uv_pars_fragment:Mb,uv_pars_vertex:Eb,uv_vertex:bb,worldpos_vertex:Tb,background_vert:Ab,background_frag:Rb,backgroundCube_vert:Cb,backgroundCube_frag:wb,cube_vert:Db,cube_frag:Ub,depth_vert:Nb,depth_frag:Lb,distance_vert:Ob,distance_frag:Pb,equirect_vert:zb,equirect_frag:Fb,linedashed_vert:Ib,linedashed_frag:Bb,meshbasic_vert:Hb,meshbasic_frag:Gb,meshlambert_vert:Vb,meshlambert_frag:kb,meshmatcap_vert:Xb,meshmatcap_frag:Wb,meshnormal_vert:Yb,meshnormal_frag:qb,meshphong_vert:jb,meshphong_frag:Zb,meshphysical_vert:Kb,meshphysical_frag:Qb,meshtoon_vert:Jb,meshtoon_frag:$b,points_vert:tT,points_frag:eT,shadow_vert:nT,shadow_frag:iT,sprite_vert:aT,sprite_frag:sT},Ft={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Hi={basic:{uniforms:Hn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Hn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Pe(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Hn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Hn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Hn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Pe(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Hn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Hn([Ft.points,Ft.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Hn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Hn([Ft.common,Ft.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Hn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Hn([Ft.sprite,Ft.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:Hn([Ft.common,Ft.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:Hn([Ft.lights,Ft.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Hi.physical={uniforms:Hn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const kc={r:0,b:0,g:0},Us=new Ta,rT=new $e;function oT(o,t,i,s,l,c,h){const d=new Pe(0);let m=c===!0?0:1,p,x,g=null,S=0,E=null;function A(O){let N=O.isScene===!0?O.background:null;return N&&N.isTexture&&(N=(O.backgroundBlurriness>0?i:t).get(N)),N}function C(O){let N=!1;const F=A(O);F===null?v(d,m):F&&F.isColor&&(v(F,1),N=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,N){const F=A(N);F&&(F.isCubeTexture||F.mapping===su)?(x===void 0&&(x=new qi(new ll(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:jr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(B,z,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Us.copy(N.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),x.material.uniforms.envMap.value=F,x.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(rT.makeRotationFromEuler(Us)),x.material.toneMapped=Ae.getTransfer(F.colorSpace)!==He,(g!==F||S!==F.version||E!==o.toneMapping)&&(x.material.needsUpdate=!0,g=F,S=F.version,E=o.toneMapping),x.layers.enableAll(),O.unshift(x,x.geometry,x.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new qi(new lu(2,2),new ji({name:"BackgroundMaterial",uniforms:jr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(F.colorSpace)!==He,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(g!==F||S!==F.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,g=F,S=F.version,E=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function v(O,N){O.getRGB(kc,bv(o)),s.buffers.color.setClear(kc.r,kc.g,kc.b,N,h)}function P(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,N=1){d.set(O),m=N,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,v(d,m)},render:C,addToRenderList:y,dispose:P}}function lT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(D,k,it,at,ft){let ot=!1;const L=g(at,it,k);c!==L&&(c=L,p(c.object)),ot=E(D,at,it,ft),ot&&A(D,at,it,ft),ft!==null&&t.update(ft,o.ELEMENT_ARRAY_BUFFER),(ot||h)&&(h=!1,N(D,k,it,at),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return o.createVertexArray()}function p(D){return o.bindVertexArray(D)}function x(D){return o.deleteVertexArray(D)}function g(D,k,it){const at=it.wireframe===!0;let ft=s[D.id];ft===void 0&&(ft={},s[D.id]=ft);let ot=ft[k.id];ot===void 0&&(ot={},ft[k.id]=ot);let L=ot[at];return L===void 0&&(L=S(m()),ot[at]=L),L}function S(D){const k=[],it=[],at=[];for(let ft=0;ft<i;ft++)k[ft]=0,it[ft]=0,at[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:it,attributeDivisors:at,object:D,attributes:{},index:null}}function E(D,k,it,at){const ft=c.attributes,ot=k.attributes;let L=0;const H=it.getAttributes();for(const Z in H)if(H[Z].location>=0){const dt=ft[Z];let w=ot[Z];if(w===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(w=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(w=D.instanceColor)),dt===void 0||dt.attribute!==w||w&&dt.data!==w.data)return!0;L++}return c.attributesNum!==L||c.index!==at}function A(D,k,it,at){const ft={},ot=k.attributes;let L=0;const H=it.getAttributes();for(const Z in H)if(H[Z].location>=0){let dt=ot[Z];dt===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(dt=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(dt=D.instanceColor));const w={};w.attribute=dt,dt&&dt.data&&(w.data=dt.data),ft[Z]=w,L++}c.attributes=ft,c.attributesNum=L,c.index=at}function C(){const D=c.newAttributes;for(let k=0,it=D.length;k<it;k++)D[k]=0}function y(D){v(D,0)}function v(D,k){const it=c.newAttributes,at=c.enabledAttributes,ft=c.attributeDivisors;it[D]=1,at[D]===0&&(o.enableVertexAttribArray(D),at[D]=1),ft[D]!==k&&(o.vertexAttribDivisor(D,k),ft[D]=k)}function P(){const D=c.newAttributes,k=c.enabledAttributes;for(let it=0,at=k.length;it<at;it++)k[it]!==D[it]&&(o.disableVertexAttribArray(it),k[it]=0)}function O(D,k,it,at,ft,ot,L){L===!0?o.vertexAttribIPointer(D,k,it,ft,ot):o.vertexAttribPointer(D,k,it,at,ft,ot)}function N(D,k,it,at){C();const ft=at.attributes,ot=it.getAttributes(),L=k.defaultAttributeValues;for(const H in ot){const Z=ot[H];if(Z.location>=0){let pt=ft[H];if(pt===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(pt=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(pt=D.instanceColor)),pt!==void 0){const dt=pt.normalized,w=pt.itemSize,K=t.get(pt);if(K===void 0)continue;const mt=K.buffer,Mt=K.type,Ct=K.bytesPerElement,tt=Mt===o.INT||Mt===o.UNSIGNED_INT||pt.gpuType===$d;if(pt.isInterleavedBufferAttribute){const W=pt.data,St=W.stride,Dt=pt.offset;if(W.isInstancedInterleavedBuffer){for(let Lt=0;Lt<Z.locationSize;Lt++)v(Z.location+Lt,W.meshPerAttribute);D.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Lt=0;Lt<Z.locationSize;Lt++)y(Z.location+Lt);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let Lt=0;Lt<Z.locationSize;Lt++)O(Z.location+Lt,w/Z.locationSize,Mt,dt,St*Ct,(Dt+w/Z.locationSize*Lt)*Ct,tt)}else{if(pt.isInstancedBufferAttribute){for(let W=0;W<Z.locationSize;W++)v(Z.location+W,pt.meshPerAttribute);D.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let W=0;W<Z.locationSize;W++)y(Z.location+W);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let W=0;W<Z.locationSize;W++)O(Z.location+W,w/Z.locationSize,Mt,dt,w*Ct,w/Z.locationSize*W*Ct,tt)}}else if(L!==void 0){const dt=L[H];if(dt!==void 0)switch(dt.length){case 2:o.vertexAttrib2fv(Z.location,dt);break;case 3:o.vertexAttrib3fv(Z.location,dt);break;case 4:o.vertexAttrib4fv(Z.location,dt);break;default:o.vertexAttrib1fv(Z.location,dt)}}}}P()}function F(){$();for(const D in s){const k=s[D];for(const it in k){const at=k[it];for(const ft in at)x(at[ft].object),delete at[ft];delete k[it]}delete s[D]}}function B(D){if(s[D.id]===void 0)return;const k=s[D.id];for(const it in k){const at=k[it];for(const ft in at)x(at[ft].object),delete at[ft];delete k[it]}delete s[D.id]}function z(D){for(const k in s){const it=s[k];if(it[D.id]===void 0)continue;const at=it[D.id];for(const ft in at)x(at[ft].object),delete at[ft];delete it[D.id]}}function $(){R(),h=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:R,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:y,disableUnusedAttributes:P}}function cT(o,t,i){let s;function l(p){s=p}function c(p,x){o.drawArrays(s,p,x),i.update(x,s,1)}function h(p,x,g){g!==0&&(o.drawArraysInstanced(s,p,x,g),i.update(x,s,g))}function d(p,x,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,g);let E=0;for(let A=0;A<g;A++)E+=x[A];i.update(E,s,1)}function m(p,x,g,S){if(g===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<p.length;A++)h(p[A],x[A],S[A]);else{E.multiDrawArraysInstancedWEBGL(s,p,0,x,0,S,0,g);let A=0;for(let C=0;C<g;C++)A+=x[C]*S[C];i.update(A,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function uT(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Ni&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const $=z===Ea&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==xi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Vi&&!$)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(re("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:N,maxSamples:F,samples:B}}function fT(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new as,d=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const E=g.length!==0||S||s!==0||l;return l=S,s=g.length,E},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,S){i=x(g,S,0)},this.setState=function(g,S,E){const A=g.clippingPlanes,C=g.clipIntersection,y=g.clipShadows,v=o.get(g);if(!l||A===null||A.length===0||c&&!y)c?x(null):p();else{const P=c?0:s,O=P*4;let N=v.clippingState||null;m.value=N,N=x(A,S,O,E);for(let F=0;F!==O;++F)N[F]=i[F];v.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(g,S,E,A){const C=g!==null?g.length:0;let y=null;if(C!==0){if(y=m.value,A!==!0||y===null){const v=E+C*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<v)&&(y=new Float32Array(v));for(let O=0,N=E;O!==C;++O,N+=4)h.copy(g[O]).applyMatrix4(P,d),h.normal.toArray(y,N),y[N+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}function hT(o){let t=new WeakMap;function i(h,d){return d===cd?h.mapping=Fs:d===ud&&(h.mapping=Wr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===cd||d===ud)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Rv(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const rs=4,D_=[.125,.215,.35,.446,.526,.582],Os=20,dT=256,$o=new Lv,U_=new Pe;let Yh=null,qh=0,jh=0,Zh=!1;const pT=new J;class N_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=pT}=c;Yh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yh,qh,jh),this._renderer.xr.enabled=Zh,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Fs||t.mapping===Wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ea,format:Ni,colorSpace:qr,depthBuffer:!1},l=L_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=L_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mT(c)),this._blurMaterial=_T(c,t,i),this._ggxMaterial=gT(c,t,i)}return l}_compileMaterial(t){const i=new qi(new si,t);this._renderer.compile(i,$o)}_sceneToCubeUV(t,i,s,l,c){const m=new vi(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,E=g.toneMapping;g.getClearColor(U_),g.toneMapping=Xi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qi(new ll,new cp({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let v=!1;const P=t.background;P?P.isColor&&(y.color.copy(P),t.background=null,v=!0):(y.color.copy(U_),v=!0);for(let O=0;O<6;O++){const N=O%3;N===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[O],c.y,c.z)):N===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[O]));const F=this._cubeSize;Br(l,N*F,O>2?F:0,F,F),g.setRenderTarget(l),v&&g.render(C,m),g.render(t,m)}g.toneMapping=E,g.autoClear=S,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Fs||t.mapping===Wr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=P_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Br(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,$o)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),S=0+p*1.25,E=g*S,{_lodMax:A}=this,C=this._sizeLods[s],y=3*C*(s>A-rs?s-A+rs:0),v=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=A-i,Br(c,y,v,3*C,2*C),l.setRenderTarget(c),l.render(d,$o),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-s,Br(t,y,v,3*C,2*C),l.setRenderTarget(t),l.render(d,$o)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&be("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,E=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Os-1),C=c/A,y=isFinite(c)?1+Math.floor(x*C):Os;y>Os&&re(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Os}`);const v=[];let P=0;for(let z=0;z<Os;++z){const $=z/C,R=Math.exp(-$*$/2);v.push(R),z===0?P+=R:z<y&&(P+=2*R)}for(let z=0;z<v.length;z++)v[z]=v[z]/P;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=A,S.mipInt.value=O-s;const N=this._sizeLods[l],F=3*N*(l>O-rs?l-O+rs:0),B=4*(this._cubeSize-N);Br(i,F,B,3*N,2*N),m.setRenderTarget(i),m.render(g,$o)}}function mT(o){const t=[],i=[],s=[];let l=o;const c=o-rs+1+D_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>o-rs?m=D_[h-o+rs-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),x=-p,g=1+p,S=[x,x,g,x,g,g,x,x,g,g,x,g],E=6,A=6,C=3,y=2,v=1,P=new Float32Array(C*A*E),O=new Float32Array(y*A*E),N=new Float32Array(v*A*E);for(let B=0;B<E;B++){const z=B%3*2/3-1,$=B>2?0:-1,R=[z,$,0,z+2/3,$,0,z+2/3,$+1,0,z,$,0,z+2/3,$+1,0,z,$+1,0];P.set(R,C*A*B),O.set(S,y*A*B);const D=[B,B,B,B,B,B];N.set(D,v*A*B)}const F=new si;F.setAttribute("position",new yi(P,C)),F.setAttribute("uv",new yi(O,y)),F.setAttribute("faceIndex",new yi(N,v)),s.push(new qi(F,null)),l>rs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function L_(o,t,i){const s=new Wi(o,t,i);return s.texture.mapping=su,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Br(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function gT(o,t,i){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function _T(o,t,i){const s=new Float32Array(Os),l=new J(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function O_(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function P_(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vT(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===cd||m===ud,x=m===Fs||m===Wr;if(p||x){let g=t.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new N_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const E=d.image;return p&&E&&E.height>0||x&&E&&l(E)?(i===null&&(i=new N_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function xT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&sl("WebGLRenderer: "+s+" extension not supported."),l}}}function ST(o,t,i,s){const l={},c=new WeakMap;function h(g){const S=g.target;S.index!==null&&t.remove(S.index);for(const A in S.attributes)t.remove(S.attributes[A]);S.removeEventListener("dispose",h),delete l[S.id];const E=c.get(S);E&&(t.remove(E),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const E in S)t.update(S[E],o.ARRAY_BUFFER)}function p(g){const S=[],E=g.index,A=g.attributes.position;let C=0;if(E!==null){const P=E.array;C=E.version;for(let O=0,N=P.length;O<N;O+=3){const F=P[O+0],B=P[O+1],z=P[O+2];S.push(F,B,B,z,z,F)}}else if(A!==void 0){const P=A.array;C=A.version;for(let O=0,N=P.length/3-1;O<N;O+=3){const F=O+0,B=O+1,z=O+2;S.push(F,B,B,z,z,F)}}else return;const y=new(xv(S)?Ev:Mv)(S,1);y.version=C;const v=c.get(g);v&&t.remove(v),c.set(g,y)}function x(g){const S=c.get(g);if(S){const E=g.index;E!==null&&S.version<E.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:x}}function yT(o,t,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,E){o.drawElements(s,E,c,S*h),i.update(E,s,1)}function p(S,E,A){A!==0&&(o.drawElementsInstanced(s,E,c,S*h,A),i.update(E,s,A))}function x(S,E,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,S,0,A);let y=0;for(let v=0;v<A;v++)y+=E[v];i.update(y,s,1)}function g(S,E,A,C){if(A===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/h,E[v],C[v]);else{y.multiDrawElementsInstancedWEBGL(s,E,0,c,S,0,C,0,A);let v=0;for(let P=0;P<A;P++)v+=E[P]*C[P];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function MT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:be("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function ET(o,t,i){const s=new WeakMap,l=new on;function c(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=x!==void 0?x.length:0;let S=s.get(d);if(S===void 0||S.count!==g){let D=function(){$.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var E=D;S!==void 0&&S.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let N=0;A===!0&&(N=1),C===!0&&(N=2),y===!0&&(N=3);let F=d.attributes.position.count*N,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const z=new Float32Array(F*B*4*g),$=new Sv(z,F,B,g);$.type=Vi,$.needsUpdate=!0;const R=N*4;for(let k=0;k<g;k++){const it=v[k],at=P[k],ft=O[k],ot=F*B*4*k;for(let L=0;L<it.count;L++){const H=L*R;A===!0&&(l.fromBufferAttribute(it,L),z[ot+H+0]=l.x,z[ot+H+1]=l.y,z[ot+H+2]=l.z,z[ot+H+3]=0),C===!0&&(l.fromBufferAttribute(at,L),z[ot+H+4]=l.x,z[ot+H+5]=l.y,z[ot+H+6]=l.z,z[ot+H+7]=0),y===!0&&(l.fromBufferAttribute(ft,L),z[ot+H+8]=l.x,z[ot+H+9]=l.y,z[ot+H+10]=l.z,z[ot+H+11]=ft.itemSize===4?l.w:1)}}S={count:g,texture:$,size:new ie(F,B)},s.set(d,S),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const C=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function bT(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,x=m.geometry,g=t.get(m,x);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const TT={[av]:"LINEAR_TONE_MAPPING",[sv]:"REINHARD_TONE_MAPPING",[rv]:"CINEON_TONE_MAPPING",[ov]:"ACES_FILMIC_TONE_MAPPING",[cv]:"AGX_TONE_MAPPING",[uv]:"NEUTRAL_TONE_MAPPING",[lv]:"CUSTOM_TONE_MAPPING"};function AT(o,t,i,s,l){const c=new Wi(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Wi(t,i,{type:Ea,depthBuffer:!1,stencilBuffer:!1}),d=new si;d.setAttribute("position",new Mi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Mi([0,2,0,0,2,0],2));const m=new xM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new qi(d,m),x=new Lv(-1,1,1,-1,0,1);let g=null,S=null,E=!1,A,C=null,y=[],v=!1;this.setSize=function(P,O){c.setSize(P,O),h.setSize(P,O);for(let N=0;N<y.length;N++){const F=y[N];F.setSize&&F.setSize(P,O)}},this.setEffects=function(P){y=P,v=y.length>0&&y[0].isRenderPass===!0;const O=c.width,N=c.height;for(let F=0;F<y.length;F++){const B=y[F];B.setSize&&B.setSize(O,N)}},this.begin=function(P,O){if(E||P.toneMapping===Xi&&y.length===0)return!1;if(C=O,O!==null){const N=O.width,F=O.height;(c.width!==N||c.height!==F)&&this.setSize(N,F)}return v===!1&&P.setRenderTarget(c),A=P.toneMapping,P.toneMapping=Xi,!0},this.hasRenderPass=function(){return v},this.end=function(P,O){P.toneMapping=A,E=!0;let N=c,F=h;for(let B=0;B<y.length;B++){const z=y[B];if(z.enabled!==!1&&(z.render(P,F,N,O),z.needsSwap!==!1)){const $=N;N=F,F=$}}if(g!==P.outputColorSpace||S!==P.toneMapping){g=P.outputColorSpace,S=P.toneMapping,m.defines={},Ae.getTransfer(g)===He&&(m.defines.SRGB_TRANSFER="");const B=TT[S];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,P.setRenderTarget(C),P.render(p,x),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Pv=new Fn,Zd=new rl(1,1),zv=new Sv,Fv=new Wy,Iv=new Av,z_=[],F_=[],I_=new Float32Array(16),B_=new Float32Array(9),H_=new Float32Array(4);function Kr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=z_[l];if(c===void 0&&(c=new Float32Array(l),z_[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function _n(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function vn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function uu(o,t){let i=F_[t];i===void 0&&(i=new Int32Array(t),F_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function RT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function CT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2fv(this.addr,t),vn(i,t)}}function wT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;o.uniform3fv(this.addr,t),vn(i,t)}}function DT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4fv(this.addr,t),vn(i,t)}}function UT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;H_.set(s),o.uniformMatrix2fv(this.addr,!1,H_),vn(i,s)}}function NT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;B_.set(s),o.uniformMatrix3fv(this.addr,!1,B_),vn(i,s)}}function LT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;I_.set(s),o.uniformMatrix4fv(this.addr,!1,I_),vn(i,s)}}function OT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function PT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2iv(this.addr,t),vn(i,t)}}function zT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3iv(this.addr,t),vn(i,t)}}function FT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4iv(this.addr,t),vn(i,t)}}function IT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function BT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2uiv(this.addr,t),vn(i,t)}}function HT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3uiv(this.addr,t),vn(i,t)}}function GT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4uiv(this.addr,t),vn(i,t)}}function VT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Zd.compareFunction=i.isReversedDepthBuffer()?rp:sp,c=Zd):c=Pv,i.setTexture2D(t||c,l)}function kT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Fv,l)}function XT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Iv,l)}function WT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||zv,l)}function YT(o){switch(o){case 5126:return RT;case 35664:return CT;case 35665:return wT;case 35666:return DT;case 35674:return UT;case 35675:return NT;case 35676:return LT;case 5124:case 35670:return OT;case 35667:case 35671:return PT;case 35668:case 35672:return zT;case 35669:case 35673:return FT;case 5125:return IT;case 36294:return BT;case 36295:return HT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return WT}}function qT(o,t){o.uniform1fv(this.addr,t)}function jT(o,t){const i=Kr(t,this.size,2);o.uniform2fv(this.addr,i)}function ZT(o,t){const i=Kr(t,this.size,3);o.uniform3fv(this.addr,i)}function KT(o,t){const i=Kr(t,this.size,4);o.uniform4fv(this.addr,i)}function QT(o,t){const i=Kr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function JT(o,t){const i=Kr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function $T(o,t){const i=Kr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function t1(o,t){o.uniform1iv(this.addr,t)}function e1(o,t){o.uniform2iv(this.addr,t)}function n1(o,t){o.uniform3iv(this.addr,t)}function i1(o,t){o.uniform4iv(this.addr,t)}function a1(o,t){o.uniform1uiv(this.addr,t)}function s1(o,t){o.uniform2uiv(this.addr,t)}function r1(o,t){o.uniform3uiv(this.addr,t)}function o1(o,t){o.uniform4uiv(this.addr,t)}function l1(o,t,i){const s=this.cache,l=t.length,c=uu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Zd:h=Pv;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function c1(o,t,i){const s=this.cache,l=t.length,c=uu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Fv,c[h])}function u1(o,t,i){const s=this.cache,l=t.length,c=uu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Iv,c[h])}function f1(o,t,i){const s=this.cache,l=t.length,c=uu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||zv,c[h])}function h1(o){switch(o){case 5126:return qT;case 35664:return jT;case 35665:return ZT;case 35666:return KT;case 35674:return QT;case 35675:return JT;case 35676:return $T;case 5124:case 35670:return t1;case 35667:case 35671:return e1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return a1;case 36294:return s1;case 36295:return r1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return f1}}class d1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=YT(i.type)}}class p1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=h1(i.type)}}class m1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Kh=/(\w+)(\])?(\[|\.)?/g;function G_(o,t){o.seq.push(t),o.map[t.id]=t}function g1(o,t,i){const s=o.name,l=s.length;for(Kh.lastIndex=0;;){const c=Kh.exec(s),h=Kh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){G_(i,p===void 0?new d1(d,o,t):new p1(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new m1(d),G_(i,g)),i=g}}}class Jc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);g1(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function V_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const _1=37297;let v1=0;function x1(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const k_=new de;function S1(o){Ae._getMatrix(k_,Ae.workingColorSpace,o);const t=`mat3( ${k_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case tu:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function X_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+x1(o.getShaderSource(t),d)}else return c}function y1(o,t){const i=S1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const M1={[av]:"Linear",[sv]:"Reinhard",[rv]:"Cineon",[ov]:"ACESFilmic",[cv]:"AgX",[uv]:"Neutral",[lv]:"Custom"};function E1(o,t){const i=M1[t];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xc=new J;function b1(){Ae.getLuminanceCoefficients(Xc);const o=Xc.x.toFixed(4),t=Xc.y.toFixed(4),i=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function A1(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function R1(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function nl(o){return o!==""}function W_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Y_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const C1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(o){return o.replace(C1,D1)}const w1=new Map;function D1(o,t){let i=pe[t];if(i===void 0){const s=w1.get(t);if(s!==void 0)i=pe[s],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Kd(i)}const U1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q_(o){return o.replace(U1,N1)}function N1(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function j_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const L1={[Yc]:"SHADOWMAP_TYPE_PCF",[el]:"SHADOWMAP_TYPE_VSM"};function O1(o){return L1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const P1={[Fs]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE",[su]:"ENVMAP_TYPE_CUBE_UV"};function z1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":P1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const F1={[Wr]:"ENVMAP_MODE_REFRACTION"};function I1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":F1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const B1={[iv]:"ENVMAP_BLENDING_MULTIPLY",[by]:"ENVMAP_BLENDING_MIX",[Ty]:"ENVMAP_BLENDING_ADD"};function H1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":B1[o.combine]||"ENVMAP_BLENDING_NONE"}function G1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function V1(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=O1(i),p=z1(i),x=I1(i),g=H1(i),S=G1(i),E=T1(i),A=A1(c),C=l.createProgram();let y,v,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(nl).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(nl).join(`
`),v.length>0&&(v+=`
`)):(y=[j_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),v=[j_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?pe.tonemapping_pars_fragment:"",i.toneMapping!==Xi?E1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,y1("linearToOutputTexel",i.outputColorSpace),b1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(nl).join(`
`)),h=Kd(h),h=W_(h,i),h=Y_(h,i),d=Kd(d),d=W_(d,i),d=Y_(d,i),h=q_(h),d=q_(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===a_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===a_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=P+y+h,N=P+v+d,F=V_(l,l.VERTEX_SHADER,O),B=V_(l,l.FRAGMENT_SHADER,N);l.attachShader(C,F),l.attachShader(C,B),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(k){if(o.debug.checkShaderErrors){const it=l.getProgramInfoLog(C)||"",at=l.getShaderInfoLog(F)||"",ft=l.getShaderInfoLog(B)||"",ot=it.trim(),L=at.trim(),H=ft.trim();let Z=!0,pt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,F,B);else{const dt=X_(l,F,"vertex"),w=X_(l,B,"fragment");be("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ot+`
`+dt+`
`+w)}else ot!==""?re("WebGLProgram: Program Info Log:",ot):(L===""||H==="")&&(pt=!1);pt&&(k.diagnostics={runnable:Z,programLog:ot,vertexShader:{log:L,prefix:y},fragmentShader:{log:H,prefix:v}})}l.deleteShader(F),l.deleteShader(B),$=new Jc(l,C),R=R1(l,C)}let $;this.getUniforms=function(){return $===void 0&&z(this),$};let R;this.getAttributes=function(){return R===void 0&&z(this),R};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(C,_1)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=v1++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=B,this}let k1=0;class X1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new W1(t),i.set(t,s)),s}}class W1{constructor(t){this.id=k1++,this.code=t,this.usedTimes=0}}function Y1(o,t,i,s,l,c,h){const d=new lp,m=new X1,p=new Set,x=[],g=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function y(R,D,k,it,at){const ft=it.fog,ot=at.geometry,L=R.isMeshStandardMaterial?it.environment:null,H=(R.isMeshStandardMaterial?i:t).get(R.envMap||L),Z=H&&H.mapping===su?H.image.height:null,pt=A[R.type];R.precision!==null&&(E=l.getMaxPrecision(R.precision),E!==R.precision&&re("WebGLProgram.getParameters:",R.precision,"not supported, using",E,"instead."));const dt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,w=dt!==void 0?dt.length:0;let K=0;ot.morphAttributes.position!==void 0&&(K=1),ot.morphAttributes.normal!==void 0&&(K=2),ot.morphAttributes.color!==void 0&&(K=3);let mt,Mt,Ct,tt;if(pt){const Te=Hi[pt];mt=Te.vertexShader,Mt=Te.fragmentShader}else mt=R.vertexShader,Mt=R.fragmentShader,m.update(R),Ct=m.getVertexShaderID(R),tt=m.getFragmentShaderID(R);const W=o.getRenderTarget(),St=o.state.buffers.depth.getReversed(),Dt=at.isInstancedMesh===!0,Lt=at.isBatchedMesh===!0,ue=!!R.map,tn=!!R.matcap,xe=!!H,me=!!R.aoMap,we=!!R.lightMap,le=!!R.bumpMap,en=!!R.normalMap,G=!!R.displacementMap,Ke=!!R.emissiveMap,Ee=!!R.metalnessMap,Le=!!R.roughnessMap,qt=R.anisotropy>0,U=R.clearcoat>0,M=R.dispersion>0,Y=R.iridescence>0,gt=R.sheen>0,yt=R.transmission>0,ut=qt&&!!R.anisotropyMap,Zt=U&&!!R.clearcoatMap,Ut=U&&!!R.clearcoatNormalMap,Xt=U&&!!R.clearcoatRoughnessMap,ne=Y&&!!R.iridescenceMap,bt=Y&&!!R.iridescenceThicknessMap,Tt=gt&&!!R.sheenColorMap,Ht=gt&&!!R.sheenRoughnessMap,It=!!R.specularMap,Nt=!!R.specularColorMap,fe=!!R.specularIntensityMap,X=yt&&!!R.transmissionMap,Pt=yt&&!!R.thicknessMap,At=!!R.gradientMap,Bt=!!R.alphaMap,Et=R.alphaTest>0,xt=!!R.alphaHash,Rt=!!R.extensions;let ae=Xi;R.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ae=o.toneMapping);const ze={shaderID:pt,shaderType:R.type,shaderName:R.name,vertexShader:mt,fragmentShader:Mt,defines:R.defines,customVertexShaderID:Ct,customFragmentShaderID:tt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:E,batching:Lt,batchingColor:Lt&&at._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&at.instanceColor!==null,instancingMorph:Dt&&at.morphTexture!==null,outputColorSpace:W===null?o.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:qr,alphaToCoverage:!!R.alphaToCoverage,map:ue,matcap:tn,envMap:xe,envMapMode:xe&&H.mapping,envMapCubeUVHeight:Z,aoMap:me,lightMap:we,bumpMap:le,normalMap:en,displacementMap:G,emissiveMap:Ke,normalMapObjectSpace:en&&R.normalMapType===wy,normalMapTangentSpace:en&&R.normalMapType===Cy,metalnessMap:Ee,roughnessMap:Le,anisotropy:qt,anisotropyMap:ut,clearcoat:U,clearcoatMap:Zt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Xt,dispersion:M,iridescence:Y,iridescenceMap:ne,iridescenceThicknessMap:bt,sheen:gt,sheenColorMap:Tt,sheenRoughnessMap:Ht,specularMap:It,specularColorMap:Nt,specularIntensityMap:fe,transmission:yt,transmissionMap:X,thicknessMap:Pt,gradientMap:At,opaque:R.transparent===!1&&R.blending===Vr&&R.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:xt,combine:R.combine,mapUv:ue&&C(R.map.channel),aoMapUv:me&&C(R.aoMap.channel),lightMapUv:we&&C(R.lightMap.channel),bumpMapUv:le&&C(R.bumpMap.channel),normalMapUv:en&&C(R.normalMap.channel),displacementMapUv:G&&C(R.displacementMap.channel),emissiveMapUv:Ke&&C(R.emissiveMap.channel),metalnessMapUv:Ee&&C(R.metalnessMap.channel),roughnessMapUv:Le&&C(R.roughnessMap.channel),anisotropyMapUv:ut&&C(R.anisotropyMap.channel),clearcoatMapUv:Zt&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&C(R.sheenRoughnessMap.channel),specularMapUv:It&&C(R.specularMap.channel),specularColorMapUv:Nt&&C(R.specularColorMap.channel),specularIntensityMapUv:fe&&C(R.specularIntensityMap.channel),transmissionMapUv:X&&C(R.transmissionMap.channel),thicknessMapUv:Pt&&C(R.thicknessMap.channel),alphaMapUv:Bt&&C(R.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(en||qt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ot.attributes.uv&&(ue||Bt),fog:!!ft,useFog:R.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:St,skinning:at.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:K,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:ue&&R.map.isVideoTexture===!0&&Ae.getTransfer(R.map.colorSpace)===He,decodeVideoTextureEmissive:Ke&&R.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(R.emissiveMap.colorSpace)===He,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===xa,flipSided:R.side===Zn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Rt&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&R.extensions.multiDraw===!0||Lt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return ze.vertexUv1s=p.has(1),ze.vertexUv2s=p.has(2),ze.vertexUv3s=p.has(3),p.clear(),ze}function v(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const k in R.defines)D.push(k),D.push(R.defines[k]);return R.isRawShaderMaterial===!1&&(P(D,R),O(D,R),D.push(o.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function P(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function O(R,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),R.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),R.push(d.mask)}function N(R){const D=A[R.type];let k;if(D){const it=Hi[D];k=aM.clone(it.uniforms)}else k=R.uniforms;return k}function F(R,D){let k=g.get(D);return k!==void 0?++k.usedTimes:(k=new V1(o,D,R,c),x.push(k),g.set(D,k)),k}function B(R){if(--R.usedTimes===0){const D=x.indexOf(R);x[D]=x[x.length-1],x.pop(),g.delete(R.cacheKey),R.destroy()}}function z(R){m.remove(R)}function $(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:N,acquireProgram:F,releaseProgram:B,releaseShaderCache:z,programs:x,dispose:$}}function q1(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function j1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Z_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function K_(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g,S,E,A,C,y){let v=o[t];return v===void 0?(v={id:g.id,object:g,geometry:S,material:E,groupOrder:A,renderOrder:g.renderOrder,z:C,group:y},o[t]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=E,v.groupOrder=A,v.renderOrder=g.renderOrder,v.z=C,v.group=y),t++,v}function d(g,S,E,A,C,y){const v=h(g,S,E,A,C,y);E.transmission>0?s.push(v):E.transparent===!0?l.push(v):i.push(v)}function m(g,S,E,A,C,y){const v=h(g,S,E,A,C,y);E.transmission>0?s.unshift(v):E.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,S){i.length>1&&i.sort(g||j1),s.length>1&&s.sort(S||Z_),l.length>1&&l.sort(S||Z_)}function x(){for(let g=t,S=o.length;g<S;g++){const E=o[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:x,sort:p}}function Z1(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new K_,o.set(s,[h])):l>=c.length?(h=new K_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function K1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new Pe};break;case"SpotLight":i={position:new J,direction:new J,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":i={color:new Pe,position:new J,halfWidth:new J,halfHeight:new J};break}return o[t.id]=i,i}}}function Q1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let J1=0;function $1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function tA(o){const t=new K1,i=Q1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,c=new $e,h=new $e;function d(p){let x=0,g=0,S=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let E=0,A=0,C=0,y=0,v=0,P=0,O=0,N=0,F=0,B=0,z=0;p.sort($1);for(let R=0,D=p.length;R<D;R++){const k=p[R],it=k.color,at=k.intensity,ft=k.distance;let ot=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Yr?ot=k.shadow.map.texture:ot=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)x+=it.r*at,g+=it.g*at,S+=it.b*at;else if(k.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(k.sh.coefficients[L],at);z++}else if(k.isDirectionalLight){const L=t.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,Z=i.get(k);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,s.directionalShadow[E]=Z,s.directionalShadowMap[E]=ot,s.directionalShadowMatrix[E]=k.shadow.matrix,P++}s.directional[E]=L,E++}else if(k.isSpotLight){const L=t.get(k);L.position.setFromMatrixPosition(k.matrixWorld),L.color.copy(it).multiplyScalar(at),L.distance=ft,L.coneCos=Math.cos(k.angle),L.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),L.decay=k.decay,s.spot[C]=L;const H=k.shadow;if(k.map&&(s.spotLightMap[F]=k.map,F++,H.updateMatrices(k),k.castShadow&&B++),s.spotLightMatrix[C]=H.matrix,k.castShadow){const Z=i.get(k);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,s.spotShadow[C]=Z,s.spotShadowMap[C]=ot,N++}C++}else if(k.isRectAreaLight){const L=t.get(k);L.color.copy(it).multiplyScalar(at),L.halfWidth.set(k.width*.5,0,0),L.halfHeight.set(0,k.height*.5,0),s.rectArea[y]=L,y++}else if(k.isPointLight){const L=t.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),L.distance=k.distance,L.decay=k.decay,k.castShadow){const H=k.shadow,Z=i.get(k);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,Z.shadowCameraNear=H.camera.near,Z.shadowCameraFar=H.camera.far,s.pointShadow[A]=Z,s.pointShadowMap[A]=ot,s.pointShadowMatrix[A]=k.shadow.matrix,O++}s.point[A]=L,A++}else if(k.isHemisphereLight){const L=t.get(k);L.skyColor.copy(k.color).multiplyScalar(at),L.groundColor.copy(k.groundColor).multiplyScalar(at),s.hemi[v]=L,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=S;const $=s.hash;($.directionalLength!==E||$.pointLength!==A||$.spotLength!==C||$.rectAreaLength!==y||$.hemiLength!==v||$.numDirectionalShadows!==P||$.numPointShadows!==O||$.numSpotShadows!==N||$.numSpotMaps!==F||$.numLightProbes!==z)&&(s.directional.length=E,s.spot.length=C,s.rectArea.length=y,s.point.length=A,s.hemi.length=v,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=N+F-B,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,$.directionalLength=E,$.pointLength=A,$.spotLength=C,$.rectAreaLength=y,$.hemiLength=v,$.numDirectionalShadows=P,$.numPointShadows=O,$.numSpotShadows=N,$.numSpotMaps=F,$.numLightProbes=z,s.version=J1++)}function m(p,x){let g=0,S=0,E=0,A=0,C=0;const y=x.matrixWorldInverse;for(let v=0,P=p.length;v<P;v++){const O=p[v];if(O.isDirectionalLight){const N=s.directional[g];N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),g++}else if(O.isSpotLight){const N=s.spot[E];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),E++}else if(O.isRectAreaLight){const N=s.rectArea[A];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(y),h.identity(),c.copy(O.matrixWorld),c.premultiply(y),h.extractRotation(c),N.halfWidth.set(O.width*.5,0,0),N.halfHeight.set(0,O.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),A++}else if(O.isPointLight){const N=s.point[S];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(y),S++}else if(O.isHemisphereLight){const N=s.hemi[C];N.direction.setFromMatrixPosition(O.matrixWorld),N.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:s}}function Q_(o){const t=new tA(o),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function h(x){s.push(x)}function d(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function eA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Q_(o),t.set(l,[d])):c>=h.length?(d=new Q_(o),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const nA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aA=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],sA=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],J_=new $e,tl=new J,Qh=new J;function rA(o,t,i){let s=new Dv;const l=new ie,c=new ie,h=new on,d=new SM,m=new yM,p={},x=i.maxTextureSize,g={[ls]:Zn,[Zn]:ls,[xa]:xa},S=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:nA,fragmentShader:iA}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const A=new si;A.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new qi(A,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let v=this.type;this.render=function(B,z,$){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;B.type===sy&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Yc);const R=o.getRenderTarget(),D=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),it=o.state;it.setBlending(ya),it.buffers.depth.getReversed()===!0?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const at=v!==this.type;at&&z.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(ot=>ot.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,ot=B.length;ft<ot;ft++){const L=B[ft],H=L.shadow;if(H===void 0){re("WebGLShadowMap:",L,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const Z=H.getFrameExtents();if(l.multiply(Z),c.copy(H.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/Z.x),l.x=c.x*Z.x,H.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/Z.y),l.y=c.y*Z.y,H.mapSize.y=c.y)),H.map===null||at===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===el){if(L.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Wi(l.x,l.y,{format:Yr,type:Ea,minFilter:zn,magFilter:zn,generateMipmaps:!1}),H.map.texture.name=L.name+".shadowMap",H.map.depthTexture=new rl(l.x,l.y,Vi),H.map.depthTexture.name=L.name+".shadowMapDepth",H.map.depthTexture.format=ba,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un}else{L.isPointLight?(H.map=new Rv(l.x),H.map.depthTexture=new vM(l.x,Yi)):(H.map=new Wi(l.x,l.y),H.map.depthTexture=new rl(l.x,l.y,Yi)),H.map.depthTexture.name=L.name+".shadowMap",H.map.depthTexture.format=ba;const dt=o.state.buffers.depth.getReversed();this.type===Yc?(H.map.depthTexture.compareFunction=dt?rp:sp,H.map.depthTexture.minFilter=zn,H.map.depthTexture.magFilter=zn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un)}H.camera.updateProjectionMatrix()}const pt=H.map.isWebGLCubeRenderTarget?6:1;for(let dt=0;dt<pt;dt++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,dt),o.clear();else{dt===0&&(o.setRenderTarget(H.map),o.clear());const w=H.getViewport(dt);h.set(c.x*w.x,c.y*w.y,c.x*w.z,c.y*w.w),it.viewport(h)}if(L.isPointLight){const w=H.camera,K=H.matrix,mt=L.distance||w.far;mt!==w.far&&(w.far=mt,w.updateProjectionMatrix()),tl.setFromMatrixPosition(L.matrixWorld),w.position.copy(tl),Qh.copy(w.position),Qh.add(aA[dt]),w.up.copy(sA[dt]),w.lookAt(Qh),w.updateMatrixWorld(),K.makeTranslation(-tl.x,-tl.y,-tl.z),J_.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),H._frustum.setFromProjectionMatrix(J_,w.coordinateSystem,w.reversedDepth)}else H.updateMatrices(L);s=H.getFrustum(),N(z,$,H.camera,L,this.type)}H.isPointLightShadow!==!0&&this.type===el&&P(H,$),H.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(R,D,k)};function P(B,z){const $=t.update(C);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,E.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Wi(l.x,l.y,{format:Yr,type:Ea})),S.uniforms.shadow_pass.value=B.map.depthTexture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(z,null,$,S,C,null),E.uniforms.shadow_pass.value=B.mapPass.texture,E.uniforms.resolution.value=B.mapSize,E.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(z,null,$,E,C,null)}function O(B,z,$,R){let D=null;const k=$.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(k!==void 0)D=k;else if(D=$.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const it=D.uuid,at=z.uuid;let ft=p[it];ft===void 0&&(ft={},p[it]=ft);let ot=ft[at];ot===void 0&&(ot=D.clone(),ft[at]=ot,z.addEventListener("dispose",F)),D=ot}if(D.visible=z.visible,D.wireframe=z.wireframe,R===el?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:g[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,$.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const it=o.properties.get(D);it.light=$}return D}function N(B,z,$,R,D){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&D===el)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,B.matrixWorld);const at=t.update(B),ft=B.material;if(Array.isArray(ft)){const ot=at.groups;for(let L=0,H=ot.length;L<H;L++){const Z=ot[L],pt=ft[Z.materialIndex];if(pt&&pt.visible){const dt=O(B,pt,R,D);B.onBeforeShadow(o,B,z,$,at,dt,Z),o.renderBufferDirect($,null,at,dt,B,Z),B.onAfterShadow(o,B,z,$,at,dt,Z)}}}else if(ft.visible){const ot=O(B,ft,R,D);B.onBeforeShadow(o,B,z,$,at,ot,null),o.renderBufferDirect($,null,at,ot,B,null),B.onAfterShadow(o,B,z,$,at,ot,null)}}const it=B.children;for(let at=0,ft=it.length;at<ft;at++)N(it[at],z,$,R,D)}function F(B){B.target.removeEventListener("dispose",F);for(const $ in p){const R=p[$],D=B.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}const oA={[nd]:id,[ad]:od,[sd]:ld,[Xr]:rd,[id]:nd,[od]:ad,[ld]:sd,[rd]:Xr};function lA(o,t){function i(){let X=!1;const Pt=new on;let At=null;const Bt=new on(0,0,0,0);return{setMask:function(Et){At!==Et&&!X&&(o.colorMask(Et,Et,Et,Et),At=Et)},setLocked:function(Et){X=Et},setClear:function(Et,xt,Rt,ae,ze){ze===!0&&(Et*=ae,xt*=ae,Rt*=ae),Pt.set(Et,xt,Rt,ae),Bt.equals(Pt)===!1&&(o.clearColor(Et,xt,Rt,ae),Bt.copy(Pt))},reset:function(){X=!1,At=null,Bt.set(-1,0,0,0)}}}function s(){let X=!1,Pt=!1,At=null,Bt=null,Et=null;return{setReversed:function(xt){if(Pt!==xt){const Rt=t.get("EXT_clip_control");xt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Pt=xt;const ae=Et;Et=null,this.setClear(ae)}},getReversed:function(){return Pt},setTest:function(xt){xt?W(o.DEPTH_TEST):St(o.DEPTH_TEST)},setMask:function(xt){At!==xt&&!X&&(o.depthMask(xt),At=xt)},setFunc:function(xt){if(Pt&&(xt=oA[xt]),Bt!==xt){switch(xt){case nd:o.depthFunc(o.NEVER);break;case id:o.depthFunc(o.ALWAYS);break;case ad:o.depthFunc(o.LESS);break;case Xr:o.depthFunc(o.LEQUAL);break;case sd:o.depthFunc(o.EQUAL);break;case rd:o.depthFunc(o.GEQUAL);break;case od:o.depthFunc(o.GREATER);break;case ld:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=xt}},setLocked:function(xt){X=xt},setClear:function(xt){Et!==xt&&(Pt&&(xt=1-xt),o.clearDepth(xt),Et=xt)},reset:function(){X=!1,At=null,Bt=null,Et=null,Pt=!1}}}function l(){let X=!1,Pt=null,At=null,Bt=null,Et=null,xt=null,Rt=null,ae=null,ze=null;return{setTest:function(Te){X||(Te?W(o.STENCIL_TEST):St(o.STENCIL_TEST))},setMask:function(Te){Pt!==Te&&!X&&(o.stencilMask(Te),Pt=Te)},setFunc:function(Te,Nn,Ei){(At!==Te||Bt!==Nn||Et!==Ei)&&(o.stencilFunc(Te,Nn,Ei),At=Te,Bt=Nn,Et=Ei)},setOp:function(Te,Nn,Ei){(xt!==Te||Rt!==Nn||ae!==Ei)&&(o.stencilOp(Te,Nn,Ei),xt=Te,Rt=Nn,ae=Ei)},setLocked:function(Te){X=Te},setClear:function(Te){ze!==Te&&(o.clearStencil(Te),ze=Te)},reset:function(){X=!1,Pt=null,At=null,Bt=null,Et=null,xt=null,Rt=null,ae=null,ze=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let x={},g={},S=new WeakMap,E=[],A=null,C=!1,y=null,v=null,P=null,O=null,N=null,F=null,B=null,z=new Pe(0,0,0),$=0,R=!1,D=null,k=null,it=null,at=null,ft=null;const ot=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,H=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Z)[1]),L=H>=1):Z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),L=H>=2);let pt=null,dt={};const w=o.getParameter(o.SCISSOR_BOX),K=o.getParameter(o.VIEWPORT),mt=new on().fromArray(w),Mt=new on().fromArray(K);function Ct(X,Pt,At,Bt){const Et=new Uint8Array(4),xt=o.createTexture();o.bindTexture(X,xt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Rt=0;Rt<At;Rt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Pt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(Pt+Rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return xt}const tt={};tt[o.TEXTURE_2D]=Ct(o.TEXTURE_2D,o.TEXTURE_2D,1),tt[o.TEXTURE_CUBE_MAP]=Ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[o.TEXTURE_2D_ARRAY]=Ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),tt[o.TEXTURE_3D]=Ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),W(o.DEPTH_TEST),h.setFunc(Xr),le(!1),en(t_),W(o.CULL_FACE),me(ya);function W(X){x[X]!==!0&&(o.enable(X),x[X]=!0)}function St(X){x[X]!==!1&&(o.disable(X),x[X]=!1)}function Dt(X,Pt){return g[X]!==Pt?(o.bindFramebuffer(X,Pt),g[X]=Pt,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Pt),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Lt(X,Pt){let At=E,Bt=!1;if(X){At=S.get(Pt),At===void 0&&(At=[],S.set(Pt,At));const Et=X.textures;if(At.length!==Et.length||At[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,Rt=Et.length;xt<Rt;xt++)At[xt]=o.COLOR_ATTACHMENT0+xt;At.length=Et.length,Bt=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(At)}function ue(X){return A!==X?(o.useProgram(X),A=X,!0):!1}const tn={[Ls]:o.FUNC_ADD,[oy]:o.FUNC_SUBTRACT,[ly]:o.FUNC_REVERSE_SUBTRACT};tn[cy]=o.MIN,tn[uy]=o.MAX;const xe={[fy]:o.ZERO,[hy]:o.ONE,[dy]:o.SRC_COLOR,[td]:o.SRC_ALPHA,[xy]:o.SRC_ALPHA_SATURATE,[_y]:o.DST_COLOR,[my]:o.DST_ALPHA,[py]:o.ONE_MINUS_SRC_COLOR,[ed]:o.ONE_MINUS_SRC_ALPHA,[vy]:o.ONE_MINUS_DST_COLOR,[gy]:o.ONE_MINUS_DST_ALPHA,[Sy]:o.CONSTANT_COLOR,[yy]:o.ONE_MINUS_CONSTANT_COLOR,[My]:o.CONSTANT_ALPHA,[Ey]:o.ONE_MINUS_CONSTANT_ALPHA};function me(X,Pt,At,Bt,Et,xt,Rt,ae,ze,Te){if(X===ya){C===!0&&(St(o.BLEND),C=!1);return}if(C===!1&&(W(o.BLEND),C=!0),X!==ry){if(X!==y||Te!==R){if((v!==Ls||N!==Ls)&&(o.blendEquation(o.FUNC_ADD),v=Ls,N=Ls),Te)switch(X){case Vr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case $c:o.blendFunc(o.ONE,o.ONE);break;case e_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case n_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:be("WebGLState: Invalid blending: ",X);break}else switch(X){case Vr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case $c:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case e_:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n_:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",X);break}P=null,O=null,F=null,B=null,z.set(0,0,0),$=0,y=X,R=Te}return}Et=Et||Pt,xt=xt||At,Rt=Rt||Bt,(Pt!==v||Et!==N)&&(o.blendEquationSeparate(tn[Pt],tn[Et]),v=Pt,N=Et),(At!==P||Bt!==O||xt!==F||Rt!==B)&&(o.blendFuncSeparate(xe[At],xe[Bt],xe[xt],xe[Rt]),P=At,O=Bt,F=xt,B=Rt),(ae.equals(z)===!1||ze!==$)&&(o.blendColor(ae.r,ae.g,ae.b,ze),z.copy(ae),$=ze),y=X,R=!1}function we(X,Pt){X.side===xa?St(o.CULL_FACE):W(o.CULL_FACE);let At=X.side===Zn;Pt&&(At=!At),le(At),X.blending===Vr&&X.transparent===!1?me(ya):me(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Bt=X.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ke(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?W(o.SAMPLE_ALPHA_TO_COVERAGE):St(o.SAMPLE_ALPHA_TO_COVERAGE)}function le(X){D!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),D=X)}function en(X){X!==iy?(W(o.CULL_FACE),X!==k&&(X===t_?o.cullFace(o.BACK):X===ay?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):St(o.CULL_FACE),k=X}function G(X){X!==it&&(L&&o.lineWidth(X),it=X)}function Ke(X,Pt,At){X?(W(o.POLYGON_OFFSET_FILL),(at!==Pt||ft!==At)&&(o.polygonOffset(Pt,At),at=Pt,ft=At)):St(o.POLYGON_OFFSET_FILL)}function Ee(X){X?W(o.SCISSOR_TEST):St(o.SCISSOR_TEST)}function Le(X){X===void 0&&(X=o.TEXTURE0+ot-1),pt!==X&&(o.activeTexture(X),pt=X)}function qt(X,Pt,At){At===void 0&&(pt===null?At=o.TEXTURE0+ot-1:At=pt);let Bt=dt[At];Bt===void 0&&(Bt={type:void 0,texture:void 0},dt[At]=Bt),(Bt.type!==X||Bt.texture!==Pt)&&(pt!==At&&(o.activeTexture(At),pt=At),o.bindTexture(X,Pt||tt[X]),Bt.type=X,Bt.texture=Pt)}function U(){const X=dt[pt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(X){be("WebGLState:",X)}}function Y(){try{o.compressedTexImage3D(...arguments)}catch(X){be("WebGLState:",X)}}function gt(){try{o.texSubImage2D(...arguments)}catch(X){be("WebGLState:",X)}}function yt(){try{o.texSubImage3D(...arguments)}catch(X){be("WebGLState:",X)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(X){be("WebGLState:",X)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){be("WebGLState:",X)}}function Ut(){try{o.texStorage2D(...arguments)}catch(X){be("WebGLState:",X)}}function Xt(){try{o.texStorage3D(...arguments)}catch(X){be("WebGLState:",X)}}function ne(){try{o.texImage2D(...arguments)}catch(X){be("WebGLState:",X)}}function bt(){try{o.texImage3D(...arguments)}catch(X){be("WebGLState:",X)}}function Tt(X){mt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),mt.copy(X))}function Ht(X){Mt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Mt.copy(X))}function It(X,Pt){let At=p.get(Pt);At===void 0&&(At=new WeakMap,p.set(Pt,At));let Bt=At.get(X);Bt===void 0&&(Bt=o.getUniformBlockIndex(Pt,X.name),At.set(X,Bt))}function Nt(X,Pt){const Bt=p.get(Pt).get(X);m.get(Pt)!==Bt&&(o.uniformBlockBinding(Pt,Bt,X.__bindingPointIndex),m.set(Pt,Bt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},pt=null,dt={},g={},S=new WeakMap,E=[],A=null,C=!1,y=null,v=null,P=null,O=null,N=null,F=null,B=null,z=new Pe(0,0,0),$=0,R=!1,D=null,k=null,it=null,at=null,ft=null,mt.set(0,0,o.canvas.width,o.canvas.height),Mt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:W,disable:St,bindFramebuffer:Dt,drawBuffers:Lt,useProgram:ue,setBlending:me,setMaterial:we,setFlipSided:le,setCullFace:en,setLineWidth:G,setPolygonOffset:Ke,setScissorTest:Ee,activeTexture:Le,bindTexture:qt,unbindTexture:U,compressedTexImage2D:M,compressedTexImage3D:Y,texImage2D:ne,texImage3D:bt,updateUBOMapping:It,uniformBlockBinding:Nt,texStorage2D:Ut,texStorage3D:Xt,texSubImage2D:gt,texSubImage3D:yt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Zt,scissor:Tt,viewport:Ht,reset:fe}}function cA(o,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ie,x=new WeakMap;let g;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,M){return E?new OffscreenCanvas(U,M):nu("canvas")}function C(U,M,Y){let gt=1;const yt=qt(U);if((yt.width>Y||yt.height>Y)&&(gt=Y/Math.max(yt.width,yt.height)),gt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ut=Math.floor(gt*yt.width),Zt=Math.floor(gt*yt.height);g===void 0&&(g=A(ut,Zt));const Ut=M?A(ut,Zt):g;return Ut.width=ut,Ut.height=Zt,Ut.getContext("2d").drawImage(U,0,0,ut,Zt),re("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ut+"x"+Zt+")."),Ut}else return"data"in U&&re("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function y(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,M,Y,gt,yt=!1){if(U!==null){if(o[U]!==void 0)return o[U];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=M;if(M===o.RED&&(Y===o.FLOAT&&(ut=o.R32F),Y===o.HALF_FLOAT&&(ut=o.R16F),Y===o.UNSIGNED_BYTE&&(ut=o.R8)),M===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ut=o.R8UI),Y===o.UNSIGNED_SHORT&&(ut=o.R16UI),Y===o.UNSIGNED_INT&&(ut=o.R32UI),Y===o.BYTE&&(ut=o.R8I),Y===o.SHORT&&(ut=o.R16I),Y===o.INT&&(ut=o.R32I)),M===o.RG&&(Y===o.FLOAT&&(ut=o.RG32F),Y===o.HALF_FLOAT&&(ut=o.RG16F),Y===o.UNSIGNED_BYTE&&(ut=o.RG8)),M===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ut=o.RG8UI),Y===o.UNSIGNED_SHORT&&(ut=o.RG16UI),Y===o.UNSIGNED_INT&&(ut=o.RG32UI),Y===o.BYTE&&(ut=o.RG8I),Y===o.SHORT&&(ut=o.RG16I),Y===o.INT&&(ut=o.RG32I)),M===o.RGB_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),Y===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),Y===o.UNSIGNED_INT&&(ut=o.RGB32UI),Y===o.BYTE&&(ut=o.RGB8I),Y===o.SHORT&&(ut=o.RGB16I),Y===o.INT&&(ut=o.RGB32I)),M===o.RGBA_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),Y===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),Y===o.UNSIGNED_INT&&(ut=o.RGBA32UI),Y===o.BYTE&&(ut=o.RGBA8I),Y===o.SHORT&&(ut=o.RGBA16I),Y===o.INT&&(ut=o.RGBA32I)),M===o.RGB&&(Y===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),Y===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),M===o.RGBA){const Zt=yt?tu:Ae.getTransfer(gt);Y===o.FLOAT&&(ut=o.RGBA32F),Y===o.HALF_FLOAT&&(ut=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(ut=Zt===He?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function N(U,M){let Y;return U?M===null||M===Yi||M===al?Y=o.DEPTH24_STENCIL8:M===Vi?Y=o.DEPTH32F_STENCIL8:M===il&&(Y=o.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yi||M===al?Y=o.DEPTH_COMPONENT24:M===Vi?Y=o.DEPTH_COMPONENT32F:M===il&&(Y=o.DEPTH_COMPONENT16),Y}function F(U,M){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Un&&U.minFilter!==zn?Math.log2(Math.max(M.width,M.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?M.mipmaps.length:1}function B(U){const M=U.target;M.removeEventListener("dispose",B),$(M),M.isVideoTexture&&x.delete(M)}function z(U){const M=U.target;M.removeEventListener("dispose",z),D(M)}function $(U){const M=s.get(U);if(M.__webglInit===void 0)return;const Y=U.source,gt=S.get(Y);if(gt){const yt=gt[M.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&R(U),Object.keys(gt).length===0&&S.delete(Y)}s.remove(U)}function R(U){const M=s.get(U);o.deleteTexture(M.__webglTexture);const Y=U.source,gt=S.get(Y);delete gt[M.__cacheKey],h.memory.textures--}function D(U){const M=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(M.__webglFramebuffer[gt]))for(let yt=0;yt<M.__webglFramebuffer[gt].length;yt++)o.deleteFramebuffer(M.__webglFramebuffer[gt][yt]);else o.deleteFramebuffer(M.__webglFramebuffer[gt]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[gt])}else{if(Array.isArray(M.__webglFramebuffer))for(let gt=0;gt<M.__webglFramebuffer.length;gt++)o.deleteFramebuffer(M.__webglFramebuffer[gt]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let gt=0;gt<M.__webglColorRenderbuffer.length;gt++)M.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[gt]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=U.textures;for(let gt=0,yt=Y.length;gt<yt;gt++){const ut=s.get(Y[gt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(Y[gt])}s.remove(U)}let k=0;function it(){k=0}function at(){const U=k;return U>=l.maxTextures&&re("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),k+=1,U}function ft(U){const M=[];return M.push(U.wrapS),M.push(U.wrapT),M.push(U.wrapR||0),M.push(U.magFilter),M.push(U.minFilter),M.push(U.anisotropy),M.push(U.internalFormat),M.push(U.format),M.push(U.type),M.push(U.generateMipmaps),M.push(U.premultiplyAlpha),M.push(U.flipY),M.push(U.unpackAlignment),M.push(U.colorSpace),M.join()}function ot(U,M){const Y=s.get(U);if(U.isVideoTexture&&Ee(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Y.__version!==U.version){const gt=U.image;if(gt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(Y,U,M);return}}else U.isExternalTexture&&(Y.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+M)}function L(U,M){const Y=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){tt(Y,U,M);return}else U.isExternalTexture&&(Y.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+M)}function H(U,M){const Y=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){tt(Y,U,M);return}i.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+M)}function Z(U,M){const Y=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Y.__version!==U.version){W(Y,U,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+M)}const pt={[fd]:o.REPEAT,[Sa]:o.CLAMP_TO_EDGE,[hd]:o.MIRRORED_REPEAT},dt={[Un]:o.NEAREST,[Ay]:o.NEAREST_MIPMAP_NEAREST,[Sc]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[yh]:o.LINEAR_MIPMAP_NEAREST,[Ps]:o.LINEAR_MIPMAP_LINEAR},w={[Dy]:o.NEVER,[Py]:o.ALWAYS,[Uy]:o.LESS,[sp]:o.LEQUAL,[Ny]:o.EQUAL,[rp]:o.GEQUAL,[Ly]:o.GREATER,[Oy]:o.NOTEQUAL};function K(U,M){if(M.type===Vi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===zn||M.magFilter===yh||M.magFilter===Sc||M.magFilter===Ps||M.minFilter===zn||M.minFilter===yh||M.minFilter===Sc||M.minFilter===Ps)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,pt[M.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,pt[M.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,pt[M.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,dt[M.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,dt[M.minFilter]),M.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,w[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==Sc&&M.minFilter!==Ps||M.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function mt(U,M){let Y=!1;U.__webglInit===void 0&&(U.__webglInit=!0,M.addEventListener("dispose",B));const gt=M.source;let yt=S.get(gt);yt===void 0&&(yt={},S.set(gt,yt));const ut=ft(M);if(ut!==U.__cacheKey){yt[ut]===void 0&&(yt[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,Y=!0),yt[ut].usedTimes++;const Zt=yt[U.__cacheKey];Zt!==void 0&&(yt[U.__cacheKey].usedTimes--,Zt.usedTimes===0&&R(M)),U.__cacheKey=ut,U.__webglTexture=yt[ut].texture}return Y}function Mt(U,M,Y){return Math.floor(Math.floor(U/Y)/M)}function Ct(U,M,Y,gt){const ut=U.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,Y,gt,M.data);else{ut.sort((bt,Tt)=>bt.start-Tt.start);let Zt=0;for(let bt=1;bt<ut.length;bt++){const Tt=ut[Zt],Ht=ut[bt],It=Tt.start+Tt.count,Nt=Mt(Ht.start,M.width,4),fe=Mt(Tt.start,M.width,4);Ht.start<=It+1&&Nt===fe&&Mt(Ht.start+Ht.count-1,M.width,4)===Nt?Tt.count=Math.max(Tt.count,Ht.start+Ht.count-Tt.start):(++Zt,ut[Zt]=Ht)}ut.length=Zt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),ne=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let bt=0,Tt=ut.length;bt<Tt;bt++){const Ht=ut[bt],It=Math.floor(Ht.start/4),Nt=Math.ceil(Ht.count/4),fe=It%M.width,X=Math.floor(It/M.width),Pt=Nt,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,fe,X,Pt,At,Y,gt,M.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ne)}}function tt(U,M,Y){let gt=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(gt=o.TEXTURE_3D);const yt=mt(U,M),ut=M.source;i.bindTexture(gt,U.__webglTexture,o.TEXTURE0+Y);const Zt=s.get(ut);if(ut.version!==Zt.__version||yt===!0){i.activeTexture(o.TEXTURE0+Y);const Ut=Ae.getPrimaries(Ae.workingColorSpace),Xt=M.colorSpace===ss?null:Ae.getPrimaries(M.colorSpace),ne=M.colorSpace===ss||Ut===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let bt=C(M.image,!1,l.maxTextureSize);bt=Le(M,bt);const Tt=c.convert(M.format,M.colorSpace),Ht=c.convert(M.type);let It=O(M.internalFormat,Tt,Ht,M.colorSpace,M.isVideoTexture);K(gt,M);let Nt;const fe=M.mipmaps,X=M.isVideoTexture!==!0,Pt=Zt.__version===void 0||yt===!0,At=ut.dataReady,Bt=F(M,bt);if(M.isDepthTexture)It=N(M.format===zs,M.type),Pt&&(X?i.texStorage2D(o.TEXTURE_2D,1,It,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,It,bt.width,bt.height,0,Tt,Ht,null));else if(M.isDataTexture)if(fe.length>0){X&&Pt&&i.texStorage2D(o.TEXTURE_2D,Bt,It,fe[0].width,fe[0].height);for(let Et=0,xt=fe.length;Et<xt;Et++)Nt=fe[Et],X?At&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Nt.width,Nt.height,Tt,Ht,Nt.data):i.texImage2D(o.TEXTURE_2D,Et,It,Nt.width,Nt.height,0,Tt,Ht,Nt.data);M.generateMipmaps=!1}else X?(Pt&&i.texStorage2D(o.TEXTURE_2D,Bt,It,bt.width,bt.height),At&&Ct(M,bt,Tt,Ht)):i.texImage2D(o.TEXTURE_2D,0,It,bt.width,bt.height,0,Tt,Ht,bt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){X&&Pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,It,fe[0].width,fe[0].height,bt.depth);for(let Et=0,xt=fe.length;Et<xt;Et++)if(Nt=fe[Et],M.format!==Ni)if(Tt!==null)if(X){if(At)if(M.layerUpdates.size>0){const Rt=w_(Nt.width,Nt.height,M.format,M.type);for(const ae of M.layerUpdates){const ze=Nt.data.subarray(ae*Rt/Nt.data.BYTES_PER_ELEMENT,(ae+1)*Rt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ae,Nt.width,Nt.height,1,Tt,ze)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Nt.width,Nt.height,bt.depth,Tt,Nt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,It,Nt.width,Nt.height,bt.depth,0,Nt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Nt.width,Nt.height,bt.depth,Tt,Ht,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Et,It,Nt.width,Nt.height,bt.depth,0,Tt,Ht,Nt.data)}else{X&&Pt&&i.texStorage2D(o.TEXTURE_2D,Bt,It,fe[0].width,fe[0].height);for(let Et=0,xt=fe.length;Et<xt;Et++)Nt=fe[Et],M.format!==Ni?Tt!==null?X?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Nt.width,Nt.height,Tt,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,Et,It,Nt.width,Nt.height,0,Nt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?At&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Nt.width,Nt.height,Tt,Ht,Nt.data):i.texImage2D(o.TEXTURE_2D,Et,It,Nt.width,Nt.height,0,Tt,Ht,Nt.data)}else if(M.isDataArrayTexture)if(X){if(Pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,It,bt.width,bt.height,bt.depth),At)if(M.layerUpdates.size>0){const Et=w_(bt.width,bt.height,M.format,M.type);for(const xt of M.layerUpdates){const Rt=bt.data.subarray(xt*Et/bt.data.BYTES_PER_ELEMENT,(xt+1)*Et/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,bt.width,bt.height,1,Tt,Ht,Rt)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Tt,Ht,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,It,bt.width,bt.height,bt.depth,0,Tt,Ht,bt.data);else if(M.isData3DTexture)X?(Pt&&i.texStorage3D(o.TEXTURE_3D,Bt,It,bt.width,bt.height,bt.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Tt,Ht,bt.data)):i.texImage3D(o.TEXTURE_3D,0,It,bt.width,bt.height,bt.depth,0,Tt,Ht,bt.data);else if(M.isFramebufferTexture){if(Pt)if(X)i.texStorage2D(o.TEXTURE_2D,Bt,It,bt.width,bt.height);else{let Et=bt.width,xt=bt.height;for(let Rt=0;Rt<Bt;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,It,Et,xt,0,Tt,Ht,null),Et>>=1,xt>>=1}}else if(fe.length>0){if(X&&Pt){const Et=qt(fe[0]);i.texStorage2D(o.TEXTURE_2D,Bt,It,Et.width,Et.height)}for(let Et=0,xt=fe.length;Et<xt;Et++)Nt=fe[Et],X?At&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Tt,Ht,Nt):i.texImage2D(o.TEXTURE_2D,Et,It,Tt,Ht,Nt);M.generateMipmaps=!1}else if(X){if(Pt){const Et=qt(bt);i.texStorage2D(o.TEXTURE_2D,Bt,It,Et.width,Et.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt,Ht,bt)}else i.texImage2D(o.TEXTURE_2D,0,It,Tt,Ht,bt);y(M)&&v(gt),Zt.__version=ut.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function W(U,M,Y){if(M.image.length!==6)return;const gt=mt(U,M),yt=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+Y);const ut=s.get(yt);if(yt.version!==ut.__version||gt===!0){i.activeTexture(o.TEXTURE0+Y);const Zt=Ae.getPrimaries(Ae.workingColorSpace),Ut=M.colorSpace===ss?null:Ae.getPrimaries(M.colorSpace),Xt=M.colorSpace===ss||Zt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ne=M.isCompressedTexture||M.image[0].isCompressedTexture,bt=M.image[0]&&M.image[0].isDataTexture,Tt=[];for(let xt=0;xt<6;xt++)!ne&&!bt?Tt[xt]=C(M.image[xt],!0,l.maxCubemapSize):Tt[xt]=bt?M.image[xt].image:M.image[xt],Tt[xt]=Le(M,Tt[xt]);const Ht=Tt[0],It=c.convert(M.format,M.colorSpace),Nt=c.convert(M.type),fe=O(M.internalFormat,It,Nt,M.colorSpace),X=M.isVideoTexture!==!0,Pt=ut.__version===void 0||gt===!0,At=yt.dataReady;let Bt=F(M,Ht);K(o.TEXTURE_CUBE_MAP,M);let Et;if(ne){X&&Pt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,fe,Ht.width,Ht.height);for(let xt=0;xt<6;xt++){Et=Tt[xt].mipmaps;for(let Rt=0;Rt<Et.length;Rt++){const ae=Et[Rt];M.format!==Ni?It!==null?X?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,0,0,ae.width,ae.height,It,ae.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,fe,ae.width,ae.height,0,ae.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,0,0,ae.width,ae.height,It,Nt,ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,fe,ae.width,ae.height,0,It,Nt,ae.data)}}}else{if(Et=M.mipmaps,X&&Pt){Et.length>0&&Bt++;const xt=qt(Tt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,fe,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(bt){X?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Tt[xt].width,Tt[xt].height,It,Nt,Tt[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,fe,Tt[xt].width,Tt[xt].height,0,It,Nt,Tt[xt].data);for(let Rt=0;Rt<Et.length;Rt++){const ze=Et[Rt].image[xt].image;X?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,0,0,ze.width,ze.height,It,Nt,ze.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,fe,ze.width,ze.height,0,It,Nt,ze.data)}}else{X?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,It,Nt,Tt[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,fe,It,Nt,Tt[xt]);for(let Rt=0;Rt<Et.length;Rt++){const ae=Et[Rt];X?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,0,0,It,Nt,ae.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,fe,It,Nt,ae.image[xt])}}}y(M)&&v(o.TEXTURE_CUBE_MAP),ut.__version=yt.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function St(U,M,Y,gt,yt,ut){const Zt=c.convert(Y.format,Y.colorSpace),Ut=c.convert(Y.type),Xt=O(Y.internalFormat,Zt,Ut,Y.colorSpace),ne=s.get(M),bt=s.get(Y);if(bt.__renderTarget=M,!ne.__hasExternalTextures){const Tt=Math.max(1,M.width>>ut),Ht=Math.max(1,M.height>>ut);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,ut,Xt,Tt,Ht,M.depth,0,Zt,Ut,null):i.texImage2D(yt,ut,Xt,Tt,Ht,0,Zt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Ke(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,yt,bt.__webglTexture,0,G(M)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,yt,bt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(U,M,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,U),M.depthBuffer){const gt=M.depthTexture,yt=gt&&gt.isDepthTexture?gt.type:null,ut=N(M.stencilBuffer,yt),Zt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ke(M)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(M),ut,M.width,M.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(M),ut,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ut,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,U)}else{const gt=M.textures;for(let yt=0;yt<gt.length;yt++){const ut=gt[yt],Zt=c.convert(ut.format,ut.colorSpace),Ut=c.convert(ut.type),Xt=O(ut.internalFormat,Zt,Ut,ut.colorSpace);Ke(M)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(M),Xt,M.width,M.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(M),Xt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Lt(U,M,Y){const gt=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=s.get(M.depthTexture);if(yt.__renderTarget=M,(!yt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),gt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,M.depthTexture.addEventListener("dispose",B)),yt.__webglTexture===void 0){yt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,yt.__webglTexture),K(o.TEXTURE_CUBE_MAP,M.depthTexture);const ne=c.convert(M.depthTexture.format),bt=c.convert(M.depthTexture.type);let Tt;M.depthTexture.format===ba?Tt=o.DEPTH_COMPONENT24:M.depthTexture.format===zs&&(Tt=o.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Tt,M.width,M.height,0,ne,bt,null)}}else ot(M.depthTexture,0);const ut=yt.__webglTexture,Zt=G(M),Ut=gt?o.TEXTURE_CUBE_MAP_POSITIVE_X+Y:o.TEXTURE_2D,Xt=M.depthTexture.format===zs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===ba)Ke(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Ut,ut,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Ut,ut,0);else if(M.depthTexture.format===zs)Ke(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Ut,ut,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Ut,ut,0);else throw new Error("Unknown depthTexture format")}function ue(U){const M=s.get(U),Y=U.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==U.depthTexture){const gt=U.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),gt){const yt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,gt.removeEventListener("dispose",yt)};gt.addEventListener("dispose",yt),M.__depthDisposeCallback=yt}M.__boundDepthTexture=gt}if(U.depthTexture&&!M.__autoAllocateDepthBuffer)if(Y)for(let gt=0;gt<6;gt++)Lt(M.__webglFramebuffer[gt],U,gt);else{const gt=U.texture.mipmaps;gt&&gt.length>0?Lt(M.__webglFramebuffer[0],U,0):Lt(M.__webglFramebuffer,U,0)}else if(Y){M.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[gt]),M.__webglDepthbuffer[gt]===void 0)M.__webglDepthbuffer[gt]=o.createRenderbuffer(),Dt(M.__webglDepthbuffer[gt],U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ut)}}else{const gt=U.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Dt(M.__webglDepthbuffer,U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function tn(U,M,Y){const gt=s.get(U);M!==void 0&&St(gt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&ue(U)}function xe(U){const M=U.texture,Y=s.get(U),gt=s.get(M);U.addEventListener("dispose",z);const yt=U.textures,ut=U.isWebGLCubeRenderTarget===!0,Zt=yt.length>1;if(Zt||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=M.version,h.memory.textures++),ut){Y.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[Ut]=[];for(let Xt=0;Xt<M.mipmaps.length;Xt++)Y.__webglFramebuffer[Ut][Xt]=o.createFramebuffer()}else Y.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ut=0;Ut<M.mipmaps.length;Ut++)Y.__webglFramebuffer[Ut]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Ut=0,Xt=yt.length;Ut<Xt;Ut++){const ne=s.get(yt[Ut]);ne.__webglTexture===void 0&&(ne.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Ke(U)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ut=0;Ut<yt.length;Ut++){const Xt=yt[Ut];Y.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[Ut]);const ne=c.convert(Xt.format,Xt.colorSpace),bt=c.convert(Xt.type),Tt=O(Xt.internalFormat,ne,bt,Xt.colorSpace,U.isXRRenderTarget===!0),Ht=G(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ht,Tt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,Y.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),Dt(Y.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),K(o.TEXTURE_CUBE_MAP,M);for(let Ut=0;Ut<6;Ut++)if(M.mipmaps&&M.mipmaps.length>0)for(let Xt=0;Xt<M.mipmaps.length;Xt++)St(Y.__webglFramebuffer[Ut][Xt],U,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Xt);else St(Y.__webglFramebuffer[Ut],U,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(M)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Ut=0,Xt=yt.length;Ut<Xt;Ut++){const ne=yt[Ut],bt=s.get(ne);let Tt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Tt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Tt,bt.__webglTexture),K(Tt,ne),St(Y.__webglFramebuffer,U,ne,o.COLOR_ATTACHMENT0+Ut,Tt,0),y(ne)&&v(Tt)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ut=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,gt.__webglTexture),K(Ut,M),M.mipmaps&&M.mipmaps.length>0)for(let Xt=0;Xt<M.mipmaps.length;Xt++)St(Y.__webglFramebuffer[Xt],U,M,o.COLOR_ATTACHMENT0,Ut,Xt);else St(Y.__webglFramebuffer,U,M,o.COLOR_ATTACHMENT0,Ut,0);y(M)&&v(Ut),i.unbindTexture()}U.depthBuffer&&ue(U)}function me(U){const M=U.textures;for(let Y=0,gt=M.length;Y<gt;Y++){const yt=M[Y];if(y(yt)){const ut=P(U),Zt=s.get(yt).__webglTexture;i.bindTexture(ut,Zt),v(ut),i.unbindTexture()}}}const we=[],le=[];function en(U){if(U.samples>0){if(Ke(U)===!1){const M=U.textures,Y=U.width,gt=U.height;let yt=o.COLOR_BUFFER_BIT;const ut=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=s.get(U),Ut=M.length>1;if(Ut)for(let ne=0;ne<M.length;ne++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Xt=U.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ne=0;ne<M.length;ne++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ne]);const bt=s.get(M[ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,Y,gt,0,0,Y,gt,yt,o.NEAREST),m===!0&&(we.length=0,le.length=0,we.push(o.COLOR_ATTACHMENT0+ne),U.depthBuffer&&U.resolveDepthBuffer===!1&&(we.push(ut),le.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,le)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let ne=0;ne<M.length;ne++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ne]);const bt=s.get(M[ne]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const M=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function G(U){return Math.min(l.maxSamples,U.samples)}function Ke(U){const M=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ee(U){const M=h.render.frame;x.get(U)!==M&&(x.set(U,M),U.update())}function Le(U,M){const Y=U.colorSpace,gt=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Y!==qr&&Y!==ss&&(Ae.getTransfer(Y)===He?(gt!==Ni||yt!==xi)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",Y)),M}function qt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=it,this.setTexture2D=ot,this.setTexture2DArray=L,this.setTexture3D=H,this.setTextureCube=Z,this.rebindTextures=tn,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function uA(o,t){function i(s,l=ss){let c;const h=Ae.getTransfer(l);if(s===xi)return o.UNSIGNED_BYTE;if(s===tp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===ep)return o.UNSIGNED_SHORT_5_5_5_1;if(s===pv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===mv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===hv)return o.BYTE;if(s===dv)return o.SHORT;if(s===il)return o.UNSIGNED_SHORT;if(s===$d)return o.INT;if(s===Yi)return o.UNSIGNED_INT;if(s===Vi)return o.FLOAT;if(s===Ea)return o.HALF_FLOAT;if(s===gv)return o.ALPHA;if(s===_v)return o.RGB;if(s===Ni)return o.RGBA;if(s===ba)return o.DEPTH_COMPONENT;if(s===zs)return o.DEPTH_STENCIL;if(s===vv)return o.RED;if(s===np)return o.RED_INTEGER;if(s===Yr)return o.RG;if(s===ip)return o.RG_INTEGER;if(s===ap)return o.RGBA_INTEGER;if(s===qc||s===jc||s===Zc||s===Kc)if(h===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dd||s===pd||s===md||s===gd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===dd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===md)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_d||s===vd||s===xd||s===Sd||s===yd||s===Md||s===Ed)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===_d||s===vd)return h===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===xd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Sd)return c.COMPRESSED_R11_EAC;if(s===yd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Md)return c.COMPRESSED_RG11_EAC;if(s===Ed)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Nd||s===Ld||s===Od||s===Pd||s===zd||s===Fd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===bd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Td)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ad)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Dd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ud)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ld)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Od)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Pd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Id||s===Bd||s===Hd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Id)return h===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Bd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Gd||s===Vd||s===kd||s===Xd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Gd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Vd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===al?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const fA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Nv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ji({vertexShader:fA,fragmentShader:hA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new qi(new lu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pA extends Bs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,x=null,g=null,S=null,E=null,A=null;const C=typeof XRWebGLBinding<"u",y=new dA,v={},P=i.getContextAttributes();let O=null,N=null;const F=[],B=[],z=new ie;let $=null;const R=new vi;R.viewport=new on;const D=new vi;D.viewport=new on;const k=[R,D],it=new MM;let at=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let W=F[tt];return W===void 0&&(W=new kh,F[tt]=W),W.getTargetRaySpace()},this.getControllerGrip=function(tt){let W=F[tt];return W===void 0&&(W=new kh,F[tt]=W),W.getGripSpace()},this.getHand=function(tt){let W=F[tt];return W===void 0&&(W=new kh,F[tt]=W),W.getHandSpace()};function ot(tt){const W=B.indexOf(tt.inputSource);if(W===-1)return;const St=F[W];St!==void 0&&(St.update(tt.inputSource,tt.frame,p||h),St.dispatchEvent({type:tt.type,data:tt.inputSource}))}function L(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",H);for(let tt=0;tt<F.length;tt++){const W=B[tt];W!==null&&(B[tt]=null,F[tt].disconnect(W))}at=null,ft=null,y.reset();for(const tt in v)delete v[tt];t.setRenderTarget(O),E=null,S=null,g=null,l=null,N=null,Ct.stop(),s.isPresenting=!1,t.setPixelRatio($),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,s.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",L),l.addEventListener("inputsourceschange",H),P.xrCompatible!==!0&&await i.makeXRCompatible(),$=t.getPixelRatio(),t.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Dt=null,Lt=null;P.depth&&(Lt=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=P.stencil?zs:ba,Dt=P.stencil?al:Yi);const ue={colorFormat:i.RGBA8,depthFormat:Lt,scaleFactor:c};g=this.getBinding(),S=g.createProjectionLayer(ue),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),N=new Wi(S.textureWidth,S.textureHeight,{format:Ni,type:xi,depthTexture:new rl(S.textureWidth,S.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const St={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new Wi(E.framebufferWidth,E.framebufferHeight,{format:Ni,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ct.setContext(l),Ct.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(tt){for(let W=0;W<tt.removed.length;W++){const St=tt.removed[W],Dt=B.indexOf(St);Dt>=0&&(B[Dt]=null,F[Dt].disconnect(St))}for(let W=0;W<tt.added.length;W++){const St=tt.added[W];let Dt=B.indexOf(St);if(Dt===-1){for(let ue=0;ue<F.length;ue++)if(ue>=B.length){B.push(St),Dt=ue;break}else if(B[ue]===null){B[ue]=St,Dt=ue;break}if(Dt===-1)break}const Lt=F[Dt];Lt&&Lt.connect(St)}}const Z=new J,pt=new J;function dt(tt,W,St){Z.setFromMatrixPosition(W.matrixWorld),pt.setFromMatrixPosition(St.matrixWorld);const Dt=Z.distanceTo(pt),Lt=W.projectionMatrix.elements,ue=St.projectionMatrix.elements,tn=Lt[14]/(Lt[10]-1),xe=Lt[14]/(Lt[10]+1),me=(Lt[9]+1)/Lt[5],we=(Lt[9]-1)/Lt[5],le=(Lt[8]-1)/Lt[0],en=(ue[8]+1)/ue[0],G=tn*le,Ke=tn*en,Ee=Dt/(-le+en),Le=Ee*-le;if(W.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Le),tt.translateZ(Ee),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Lt[10]===-1)tt.projectionMatrix.copy(W.projectionMatrix),tt.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const qt=tn+Ee,U=xe+Ee,M=G-Le,Y=Ke+(Dt-Le),gt=me*xe/U*qt,yt=we*xe/U*qt;tt.projectionMatrix.makePerspective(M,Y,gt,yt,qt,U),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function w(tt,W){W===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(W.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let W=tt.near,St=tt.far;y.texture!==null&&(y.depthNear>0&&(W=y.depthNear),y.depthFar>0&&(St=y.depthFar)),it.near=D.near=R.near=W,it.far=D.far=R.far=St,(at!==it.near||ft!==it.far)&&(l.updateRenderState({depthNear:it.near,depthFar:it.far}),at=it.near,ft=it.far),it.layers.mask=tt.layers.mask|6,R.layers.mask=it.layers.mask&3,D.layers.mask=it.layers.mask&5;const Dt=tt.parent,Lt=it.cameras;w(it,Dt);for(let ue=0;ue<Lt.length;ue++)w(Lt[ue],Dt);Lt.length===2?dt(it,R,D):it.projectionMatrix.copy(R.projectionMatrix),K(tt,it,Dt)};function K(tt,W,St){St===null?tt.matrix.copy(W.matrixWorld):(tt.matrix.copy(St.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(W.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(W.projectionMatrix),tt.projectionMatrixInverse.copy(W.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Yd*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(tt){m=tt,S!==null&&(S.fixedFoveation=tt),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=tt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(it)},this.getCameraTexture=function(tt){return v[tt]};let mt=null;function Mt(tt,W){if(x=W.getViewerPose(p||h),A=W,x!==null){const St=x.views;E!==null&&(t.setRenderTargetFramebuffer(N,E.framebuffer),t.setRenderTarget(N));let Dt=!1;St.length!==it.cameras.length&&(it.cameras.length=0,Dt=!0);for(let xe=0;xe<St.length;xe++){const me=St[xe];let we=null;if(E!==null)we=E.getViewport(me);else{const en=g.getViewSubImage(S,me);we=en.viewport,xe===0&&(t.setRenderTargetTextures(N,en.colorTexture,en.depthStencilTexture),t.setRenderTarget(N))}let le=k[xe];le===void 0&&(le=new vi,le.layers.enable(xe),le.viewport=new on,k[xe]=le),le.matrix.fromArray(me.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(me.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(we.x,we.y,we.width,we.height),xe===0&&(it.matrix.copy(le.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),Dt===!0&&it.cameras.push(le)}const Lt=l.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=s.getBinding();const xe=g.getDepthInformation(St[0]);xe&&xe.isValid&&xe.texture&&y.init(xe,l.renderState)}if(Lt&&Lt.includes("camera-access")&&C){t.state.unbindTexture(),g=s.getBinding();for(let xe=0;xe<St.length;xe++){const me=St[xe].camera;if(me){let we=v[me];we||(we=new Nv,v[me]=we);const le=g.getCameraImage(me);we.sourceTexture=le}}}}for(let St=0;St<F.length;St++){const Dt=B[St],Lt=F[St];Dt!==null&&Lt!==void 0&&Lt.update(Dt,W,p||h)}mt&&mt(tt,W),W.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:W}),A=null}const Ct=new Ov;Ct.setAnimationLoop(Mt),this.setAnimationLoop=function(tt){mt=tt},this.dispose=function(){}}}const Ns=new Ta,mA=new $e;function gA(o,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,bv(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,P,O,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),g(y,v)):v.isMeshPhongMaterial?(c(y,v),x(y,v)):v.isMeshStandardMaterial?(c(y,v),S(y,v),v.isMeshPhysicalMaterial&&E(y,v,N)):v.isMeshMatcapMaterial?(c(y,v),A(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),C(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,P,O):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Zn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Zn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const P=t.get(v),O=P.envMap,N=P.envMapRotation;O&&(y.envMap.value=O,Ns.copy(N),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),y.envMapRotation.value.setFromMatrix4(mA.makeRotationFromEuler(Ns)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,P,O){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*P,y.scale.value=O*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function E(y,v,P){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Zn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const P=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function _A(o,t,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,O){const N=O.program;s.uniformBlockBinding(P,N)}function p(P,O){let N=l[P.id];N===void 0&&(A(P),N=x(P),l[P.id]=N,P.addEventListener("dispose",y));const F=O.program;s.updateUBOMapping(P,F);const B=t.render.frame;c[P.id]!==B&&(S(P),c[P.id]=B)}function x(P){const O=g();P.__bindingPointIndex=O;const N=o.createBuffer(),F=P.__size,B=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,F,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,N),N}function g(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const O=l[P.id],N=P.uniforms,F=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let B=0,z=N.length;B<z;B++){const $=Array.isArray(N[B])?N[B]:[N[B]];for(let R=0,D=$.length;R<D;R++){const k=$[R];if(E(k,B,R,F)===!0){const it=k.__offset,at=Array.isArray(k.value)?k.value:[k.value];let ft=0;for(let ot=0;ot<at.length;ot++){const L=at[ot],H=C(L);typeof L=="number"||typeof L=="boolean"?(k.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,it+ft,k.__data)):L.isMatrix3?(k.__data[0]=L.elements[0],k.__data[1]=L.elements[1],k.__data[2]=L.elements[2],k.__data[3]=0,k.__data[4]=L.elements[3],k.__data[5]=L.elements[4],k.__data[6]=L.elements[5],k.__data[7]=0,k.__data[8]=L.elements[6],k.__data[9]=L.elements[7],k.__data[10]=L.elements[8],k.__data[11]=0):(L.toArray(k.__data,ft),ft+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,it,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(P,O,N,F){const B=P.value,z=O+"_"+N;if(F[z]===void 0)return typeof B=="number"||typeof B=="boolean"?F[z]=B:F[z]=B.clone(),!0;{const $=F[z];if(typeof B=="number"||typeof B=="boolean"){if($!==B)return F[z]=B,!0}else if($.equals(B)===!1)return $.copy(B),!0}return!1}function A(P){const O=P.uniforms;let N=0;const F=16;for(let z=0,$=O.length;z<$;z++){const R=Array.isArray(O[z])?O[z]:[O[z]];for(let D=0,k=R.length;D<k;D++){const it=R[D],at=Array.isArray(it.value)?it.value:[it.value];for(let ft=0,ot=at.length;ft<ot;ft++){const L=at[ft],H=C(L),Z=N%F,pt=Z%H.boundary,dt=Z+pt;N+=pt,dt!==0&&F-dt<H.storage&&(N+=F-dt),it.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=N,N+=H.storage}}}const B=N%F;return B>0&&(N+=F-B),P.__size=N,P.__cache={},this}function C(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",P),O}function y(P){const O=P.target;O.removeEventListener("dispose",y);const N=h.indexOf(O.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function v(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}const vA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function xA(){return Ii===null&&(Ii=new hM(vA,16,16,Yr,Ea),Ii.name="DFG_LUT",Ii.minFilter=zn,Ii.magFilter=zn,Ii.wrapS=Sa,Ii.wrapT=Sa,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class SA{constructor(t={}){const{canvas:i=zy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:E=xi}=t;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=h;const C=E,y=new Set([ap,ip,np]),v=new Set([xi,Yi,il,al,tp,ep]),P=new Uint32Array(4),O=new Int32Array(4);let N=null,F=null;const B=[],z=[];let $=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1;this._outputColorSpace=_i;let k=0,it=0,at=null,ft=-1,ot=null;const L=new on,H=new on;let Z=null;const pt=new Pe(0);let dt=0,w=i.width,K=i.height,mt=1,Mt=null,Ct=null;const tt=new on(0,0,w,K),W=new on(0,0,w,K);let St=!1;const Dt=new Dv;let Lt=!1,ue=!1;const tn=new $e,xe=new J,me=new on,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function en(){return at===null?mt:1}let G=s;function Ke(T,q){return i.getContext(T,q)}try{const T={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Jd}`),i.addEventListener("webglcontextlost",ae,!1),i.addEventListener("webglcontextrestored",ze,!1),i.addEventListener("webglcontextcreationerror",Te,!1),G===null){const q="webgl2";if(G=Ke(q,T),G===null)throw Ke(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw be("WebGLRenderer: "+T.message),T}let Ee,Le,qt,U,M,Y,gt,yt,ut,Zt,Ut,Xt,ne,bt,Tt,Ht,It,Nt,fe,X,Pt,At,Bt,Et;function xt(){Ee=new xT(G),Ee.init(),At=new uA(G,Ee),Le=new uT(G,Ee,t,At),qt=new lA(G,Ee),Le.reversedDepthBuffer&&S&&qt.buffers.depth.setReversed(!0),U=new MT(G),M=new q1,Y=new cA(G,Ee,qt,M,Le,At,U),gt=new hT(R),yt=new vT(R),ut=new AM(G),Bt=new lT(G,ut),Zt=new ST(G,ut,U,Bt),Ut=new bT(G,Zt,ut,U),fe=new ET(G,Le,Y),Ht=new fT(M),Xt=new Y1(R,gt,yt,Ee,Le,Bt,Ht),ne=new gA(R,M),bt=new Z1,Tt=new eA(Ee),Nt=new oT(R,gt,yt,qt,Ut,A,m),It=new rA(R,Ut,Le),Et=new _A(G,U,Le,qt),X=new cT(G,Ee,U),Pt=new yT(G,Ee,U),U.programs=Xt.programs,R.capabilities=Le,R.extensions=Ee,R.properties=M,R.renderLists=bt,R.shadowMap=It,R.state=qt,R.info=U}xt(),C!==xi&&($=new AT(C,i.width,i.height,l,c));const Rt=new pA(R,G);this.xr=Rt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(T){T!==void 0&&(mt=T,this.setSize(w,K,!1))},this.getSize=function(T){return T.set(w,K)},this.setSize=function(T,q,lt=!0){if(Rt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,K=q,i.width=Math.floor(T*mt),i.height=Math.floor(q*mt),lt===!0&&(i.style.width=T+"px",i.style.height=q+"px"),$!==null&&$.setSize(i.width,i.height),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(w*mt,K*mt).floor()},this.setDrawingBufferSize=function(T,q,lt){w=T,K=q,mt=lt,i.width=Math.floor(T*lt),i.height=Math.floor(q*lt),this.setViewport(0,0,T,q)},this.setEffects=function(T){if(C===xi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let q=0;q<T.length;q++)if(T[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}$.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(tt)},this.setViewport=function(T,q,lt,st){T.isVector4?tt.set(T.x,T.y,T.z,T.w):tt.set(T,q,lt,st),qt.viewport(L.copy(tt).multiplyScalar(mt).round())},this.getScissor=function(T){return T.copy(W)},this.setScissor=function(T,q,lt,st){T.isVector4?W.set(T.x,T.y,T.z,T.w):W.set(T,q,lt,st),qt.scissor(H.copy(W).multiplyScalar(mt).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(T){qt.setScissorTest(St=T)},this.setOpaqueSort=function(T){Mt=T},this.setTransparentSort=function(T){Ct=T},this.getClearColor=function(T){return T.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,lt=!0){let st=0;if(T){let Q=!1;if(at!==null){const Ot=at.texture.format;Q=y.has(Ot)}if(Q){const Ot=at.texture.type,Gt=v.has(Ot),zt=Nt.getClearColor(),Vt=Nt.getClearAlpha(),Wt=zt.r,Jt=zt.g,Yt=zt.b;Gt?(P[0]=Wt,P[1]=Jt,P[2]=Yt,P[3]=Vt,G.clearBufferuiv(G.COLOR,0,P)):(O[0]=Wt,O[1]=Jt,O[2]=Yt,O[3]=Vt,G.clearBufferiv(G.COLOR,0,O))}else st|=G.COLOR_BUFFER_BIT}q&&(st|=G.DEPTH_BUFFER_BIT),lt&&(st|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ae,!1),i.removeEventListener("webglcontextrestored",ze,!1),i.removeEventListener("webglcontextcreationerror",Te,!1),Nt.dispose(),bt.dispose(),Tt.dispose(),M.dispose(),gt.dispose(),yt.dispose(),Ut.dispose(),Bt.dispose(),Et.dispose(),Xt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Gs),Rt.removeEventListener("sessionend",$r),Li.stop()};function ae(T){T.preventDefault(),iu("WebGLRenderer: Context Lost."),D=!0}function ze(){iu("WebGLRenderer: Context Restored."),D=!1;const T=U.autoReset,q=It.enabled,lt=It.autoUpdate,st=It.needsUpdate,Q=It.type;xt(),U.autoReset=T,It.enabled=q,It.autoUpdate=lt,It.needsUpdate=st,It.type=Q}function Te(T){be("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Nn(T){const q=T.target;q.removeEventListener("dispose",Nn),Ei(q)}function Ei(T){cl(T),M.remove(T)}function cl(T){const q=M.get(T).programs;q!==void 0&&(q.forEach(function(lt){Xt.releaseProgram(lt)}),T.isShaderMaterial&&Xt.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,lt,st,Q,Ot){q===null&&(q=we);const Gt=Q.isMesh&&Q.matrixWorld.determinant()<0,zt=cs(T,q,lt,st,Q);qt.setMaterial(st,Gt);let Vt=lt.index,Wt=1;if(st.wireframe===!0){if(Vt=Zt.getWireframeAttribute(lt),Vt===void 0)return;Wt=2}const Jt=lt.drawRange,Yt=lt.attributes.position;let $t=Jt.start*Wt,De=(Jt.start+Jt.count)*Wt;Ot!==null&&($t=Math.max($t,Ot.start*Wt),De=Math.min(De,(Ot.start+Ot.count)*Wt)),Vt!==null?($t=Math.max($t,0),De=Math.min(De,Vt.count)):Yt!=null&&($t=Math.max($t,0),De=Math.min(De,Yt.count));const Qe=De-$t;if(Qe<0||Qe===1/0)return;Bt.setup(Q,st,zt,lt,Vt);let qe,Oe=X;if(Vt!==null&&(qe=ut.get(Vt),Oe=Pt,Oe.setIndex(qe)),Q.isMesh)st.wireframe===!0?(qt.setLineWidth(st.wireframeLinewidth*en()),Oe.setMode(G.LINES)):Oe.setMode(G.TRIANGLES);else if(Q.isLine){let Kt=st.linewidth;Kt===void 0&&(Kt=1),qt.setLineWidth(Kt*en()),Q.isLineSegments?Oe.setMode(G.LINES):Q.isLineLoop?Oe.setMode(G.LINE_LOOP):Oe.setMode(G.LINE_STRIP)}else Q.isPoints?Oe.setMode(G.POINTS):Q.isSprite&&Oe.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)sl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Oe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Kt=Q._multiDrawStarts,Ue=Q._multiDrawCounts,se=Q._multiDrawCount,Mn=Vt?ut.get(Vt).bytesPerElement:1,Ki=M.get(st).currentProgram.getUniforms();for(let En=0;En<se;En++)Ki.setValue(G,"_gl_DrawID",En),Oe.render(Kt[En]/Mn,Ue[En])}else if(Q.isInstancedMesh)Oe.renderInstances($t,Qe,Q.count);else if(lt.isInstancedBufferGeometry){const Kt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ue=Math.min(lt.instanceCount,Kt);Oe.renderInstances($t,Qe,Ue)}else Oe.render($t,Qe)};function Qr(T,q,lt){T.transparent===!0&&T.side===xa&&T.forceSinglePass===!1?(T.side=Zn,T.needsUpdate=!0,ks(T,q,lt),T.side=ls,T.needsUpdate=!0,ks(T,q,lt),T.side=xa):ks(T,q,lt)}this.compile=function(T,q,lt=null){lt===null&&(lt=T),F=Tt.get(lt),F.init(q),z.push(F),lt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(F.pushLight(Q),Q.castShadow&&F.pushShadow(Q))}),T!==lt&&T.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(F.pushLight(Q),Q.castShadow&&F.pushShadow(Q))}),F.setupLights();const st=new Set;return T.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ot=Q.material;if(Ot)if(Array.isArray(Ot))for(let Gt=0;Gt<Ot.length;Gt++){const zt=Ot[Gt];Qr(zt,lt,Q),st.add(zt)}else Qr(Ot,lt,Q),st.add(Ot)}),F=z.pop(),st},this.compileAsync=function(T,q,lt=null){const st=this.compile(T,q,lt);return new Promise(Q=>{function Ot(){if(st.forEach(function(Gt){M.get(Gt).currentProgram.isReady()&&st.delete(Gt)}),st.size===0){Q(T);return}setTimeout(Ot,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Hs=null;function Jr(T){Hs&&Hs(T)}function Gs(){Li.stop()}function $r(){Li.start()}const Li=new Ov;Li.setAnimationLoop(Jr),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(T){Hs=T,Rt.setAnimationLoop(T),T===null?Li.stop():Li.start()},Rt.addEventListener("sessionstart",Gs),Rt.addEventListener("sessionend",$r),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const lt=Rt.enabled===!0&&Rt.isPresenting===!0,st=$!==null&&(at===null||lt)&&$.begin(R,at);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&($===null||$.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(q),q=Rt.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,q,at),F=Tt.get(T,z.length),F.init(q),z.push(F),tn.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Dt.setFromProjectionMatrix(tn,ki,q.reversedDepth),ue=this.localClippingEnabled,Lt=Ht.init(this.clippingPlanes,ue),N=bt.get(T,B.length),N.init(),B.push(N),Rt.enabled===!0&&Rt.isPresenting===!0){const Gt=R.xr.getDepthSensingMesh();Gt!==null&&ri(Gt,q,-1/0,R.sortObjects)}ri(T,q,0,R.sortObjects),N.finish(),R.sortObjects===!0&&N.sort(Mt,Ct),le=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,le&&Nt.addToRenderList(N,T),this.info.render.frame++,Lt===!0&&Ht.beginShadows();const Q=F.state.shadowsArray;if(It.render(Q,T,q),Lt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&$.hasRenderPass())===!1){const Gt=N.opaque,zt=N.transmissive;if(F.setupLights(),q.isArrayCamera){const Vt=q.cameras;if(zt.length>0)for(let Wt=0,Jt=Vt.length;Wt<Jt;Wt++){const Yt=Vt[Wt];yn(Gt,zt,T,Yt)}le&&Nt.render(T);for(let Wt=0,Jt=Vt.length;Wt<Jt;Wt++){const Yt=Vt[Wt];ln(N,T,Yt,Yt.viewport)}}else zt.length>0&&yn(Gt,zt,T,q),le&&Nt.render(T),ln(N,T,q)}at!==null&&it===0&&(Y.updateMultisampleRenderTarget(at),Y.updateRenderTargetMipmap(at)),st&&$.end(R),T.isScene===!0&&T.onAfterRender(R,T,q),Bt.resetDefaultState(),ft=-1,ot=null,z.pop(),z.length>0?(F=z[z.length-1],Lt===!0&&Ht.setGlobalState(R.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function ri(T,q,lt,st){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)lt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)F.pushLight(T),T.castShadow&&F.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Dt.intersectsSprite(T)){st&&me.setFromMatrixPosition(T.matrixWorld).applyMatrix4(tn);const Gt=Ut.update(T),zt=T.material;zt.visible&&N.push(T,Gt,zt,lt,me.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Dt.intersectsObject(T))){const Gt=Ut.update(T),zt=T.material;if(st&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),me.copy(T.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),me.copy(Gt.boundingSphere.center)),me.applyMatrix4(T.matrixWorld).applyMatrix4(tn)),Array.isArray(zt)){const Vt=Gt.groups;for(let Wt=0,Jt=Vt.length;Wt<Jt;Wt++){const Yt=Vt[Wt],$t=zt[Yt.materialIndex];$t&&$t.visible&&N.push(T,Gt,$t,lt,me.z,Yt)}}else zt.visible&&N.push(T,Gt,zt,lt,me.z,null)}}const Ot=T.children;for(let Gt=0,zt=Ot.length;Gt<zt;Gt++)ri(Ot[Gt],q,lt,st)}function ln(T,q,lt,st){const{opaque:Q,transmissive:Ot,transparent:Gt}=T;F.setupLightsView(lt),Lt===!0&&Ht.setGlobalState(R.clippingPlanes,lt),st&&qt.viewport(L.copy(st)),Q.length>0&&bi(Q,q,lt),Ot.length>0&&bi(Ot,q,lt),Gt.length>0&&bi(Gt,q,lt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function yn(T,q,lt,st){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[st.id]===void 0){const $t=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[st.id]=new Wi(1,1,{generateMipmaps:!0,type:$t?Ea:xi,minFilter:Ps,samples:Le.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}const Ot=F.state.transmissionRenderTarget[st.id],Gt=st.viewport||L;Ot.setSize(Gt.z*R.transmissionResolutionScale,Gt.w*R.transmissionResolutionScale);const zt=R.getRenderTarget(),Vt=R.getActiveCubeFace(),Wt=R.getActiveMipmapLevel();R.setRenderTarget(Ot),R.getClearColor(pt),dt=R.getClearAlpha(),dt<1&&R.setClearColor(16777215,.5),R.clear(),le&&Nt.render(lt);const Jt=R.toneMapping;R.toneMapping=Xi;const Yt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),F.setupLightsView(st),Lt===!0&&Ht.setGlobalState(R.clippingPlanes,st),bi(T,lt,st),Y.updateMultisampleRenderTarget(Ot),Y.updateRenderTargetMipmap(Ot),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let De=0,Qe=q.length;De<Qe;De++){const qe=q[De],{object:Oe,geometry:Kt,material:Ue,group:se}=qe;if(Ue.side===xa&&Oe.layers.test(st.layers)){const Mn=Ue.side;Ue.side=Zn,Ue.needsUpdate=!0,Vs(Oe,lt,st,Kt,Ue,se),Ue.side=Mn,Ue.needsUpdate=!0,$t=!0}}$t===!0&&(Y.updateMultisampleRenderTarget(Ot),Y.updateRenderTargetMipmap(Ot))}R.setRenderTarget(zt,Vt,Wt),R.setClearColor(pt,dt),Yt!==void 0&&(st.viewport=Yt),R.toneMapping=Jt}function bi(T,q,lt){const st=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,Ot=T.length;Q<Ot;Q++){const Gt=T[Q],{object:zt,geometry:Vt,group:Wt}=Gt;let Jt=Gt.material;Jt.allowOverride===!0&&st!==null&&(Jt=st),zt.layers.test(lt.layers)&&Vs(zt,q,lt,Vt,Jt,Wt)}}function Vs(T,q,lt,st,Q,Ot){T.onBeforeRender(R,q,lt,st,Q,Ot),T.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(R,q,lt,st,T,Ot),Q.transparent===!0&&Q.side===xa&&Q.forceSinglePass===!1?(Q.side=Zn,Q.needsUpdate=!0,R.renderBufferDirect(lt,q,st,Q,T,Ot),Q.side=ls,Q.needsUpdate=!0,R.renderBufferDirect(lt,q,st,Q,T,Ot),Q.side=xa):R.renderBufferDirect(lt,q,st,Q,T,Ot),T.onAfterRender(R,q,lt,st,Q,Ot)}function ks(T,q,lt){q.isScene!==!0&&(q=we);const st=M.get(T),Q=F.state.lights,Ot=F.state.shadowsArray,Gt=Q.state.version,zt=Xt.getParameters(T,Q.state,Ot,q,lt),Vt=Xt.getProgramCacheKey(zt);let Wt=st.programs;st.environment=T.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(T.isMeshStandardMaterial?yt:gt).get(T.envMap||st.environment),st.envMapRotation=st.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,Wt===void 0&&(T.addEventListener("dispose",Nn),Wt=new Map,st.programs=Wt);let Jt=Wt.get(Vt);if(Jt!==void 0){if(st.currentProgram===Jt&&st.lightsStateVersion===Gt)return to(T,zt),Jt}else zt.uniforms=Xt.getUniforms(T),T.onBeforeCompile(zt,R),Jt=Xt.acquireProgram(zt,Vt),Wt.set(Vt,Jt),st.uniforms=zt.uniforms;const Yt=st.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Yt.clippingPlanes=Ht.uniform),to(T,zt),st.needsLights=Aa(T),st.lightsStateVersion=Gt,st.needsLights&&(Yt.ambientLightColor.value=Q.state.ambient,Yt.lightProbe.value=Q.state.probe,Yt.directionalLights.value=Q.state.directional,Yt.directionalLightShadows.value=Q.state.directionalShadow,Yt.spotLights.value=Q.state.spot,Yt.spotLightShadows.value=Q.state.spotShadow,Yt.rectAreaLights.value=Q.state.rectArea,Yt.ltc_1.value=Q.state.rectAreaLTC1,Yt.ltc_2.value=Q.state.rectAreaLTC2,Yt.pointLights.value=Q.state.point,Yt.pointLightShadows.value=Q.state.pointShadow,Yt.hemisphereLights.value=Q.state.hemi,Yt.directionalShadowMap.value=Q.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Yt.spotShadowMap.value=Q.state.spotShadowMap,Yt.spotLightMatrix.value=Q.state.spotLightMatrix,Yt.spotLightMap.value=Q.state.spotLightMap,Yt.pointShadowMap.value=Q.state.pointShadowMap,Yt.pointShadowMatrix.value=Q.state.pointShadowMatrix),st.currentProgram=Jt,st.uniformsList=null,Jt}function ul(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=Jc.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function to(T,q){const lt=M.get(T);lt.outputColorSpace=q.outputColorSpace,lt.batching=q.batching,lt.batchingColor=q.batchingColor,lt.instancing=q.instancing,lt.instancingColor=q.instancingColor,lt.instancingMorph=q.instancingMorph,lt.skinning=q.skinning,lt.morphTargets=q.morphTargets,lt.morphNormals=q.morphNormals,lt.morphColors=q.morphColors,lt.morphTargetsCount=q.morphTargetsCount,lt.numClippingPlanes=q.numClippingPlanes,lt.numIntersection=q.numClipIntersection,lt.vertexAlphas=q.vertexAlphas,lt.vertexTangents=q.vertexTangents,lt.toneMapping=q.toneMapping}function cs(T,q,lt,st,Q){q.isScene!==!0&&(q=we),Y.resetTextureUnits();const Ot=q.fog,Gt=st.isMeshStandardMaterial?q.environment:null,zt=at===null?R.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:qr,Vt=(st.isMeshStandardMaterial?yt:gt).get(st.envMap||Gt),Wt=st.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Jt=!!lt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Yt=!!lt.morphAttributes.position,$t=!!lt.morphAttributes.normal,De=!!lt.morphAttributes.color;let Qe=Xi;st.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Qe=R.toneMapping);const qe=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Oe=qe!==void 0?qe.length:0,Kt=M.get(st),Ue=F.state.lights;if(Lt===!0&&(ue===!0||T!==ot)){const Tn=T===ot&&st.id===ft;Ht.setState(st,T,Tn)}let se=!1;st.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ue.state.version||Kt.outputColorSpace!==zt||Q.isBatchedMesh&&Kt.batching===!1||!Q.isBatchedMesh&&Kt.batching===!0||Q.isBatchedMesh&&Kt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Kt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Kt.instancing===!1||!Q.isInstancedMesh&&Kt.instancing===!0||Q.isSkinnedMesh&&Kt.skinning===!1||!Q.isSkinnedMesh&&Kt.skinning===!0||Q.isInstancedMesh&&Kt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Kt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Kt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Kt.instancingMorph===!1&&Q.morphTexture!==null||Kt.envMap!==Vt||st.fog===!0&&Kt.fog!==Ot||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Ht.numPlanes||Kt.numIntersection!==Ht.numIntersection)||Kt.vertexAlphas!==Wt||Kt.vertexTangents!==Jt||Kt.morphTargets!==Yt||Kt.morphNormals!==$t||Kt.morphColors!==De||Kt.toneMapping!==Qe||Kt.morphTargetsCount!==Oe)&&(se=!0):(se=!0,Kt.__version=st.version);let Mn=Kt.currentProgram;se===!0&&(Mn=ks(st,q,Q));let Ki=!1,En=!1,oi=!1;const Fe=Mn.getUniforms(),bn=Kt.uniforms;if(qt.useProgram(Mn.program)&&(Ki=!0,En=!0,oi=!0),st.id!==ft&&(ft=st.id,En=!0),Ki||ot!==T){qt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Fe.setValue(G,"projectionMatrix",T.projectionMatrix),Fe.setValue(G,"viewMatrix",T.matrixWorldInverse);const An=Fe.map.cameraPosition;An!==void 0&&An.setValue(G,xe.setFromMatrixPosition(T.matrixWorld)),Le.logarithmicDepthBuffer&&Fe.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Fe.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),ot!==T&&(ot=T,En=!0,oi=!0)}if(Kt.needsLights&&(Ue.state.directionalShadowMap.length>0&&Fe.setValue(G,"directionalShadowMap",Ue.state.directionalShadowMap,Y),Ue.state.spotShadowMap.length>0&&Fe.setValue(G,"spotShadowMap",Ue.state.spotShadowMap,Y),Ue.state.pointShadowMap.length>0&&Fe.setValue(G,"pointShadowMap",Ue.state.pointShadowMap,Y)),Q.isSkinnedMesh){Fe.setOptional(G,Q,"bindMatrix"),Fe.setOptional(G,Q,"bindMatrixInverse");const Tn=Q.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Fe.setValue(G,"boneTexture",Tn.boneTexture,Y))}Q.isBatchedMesh&&(Fe.setOptional(G,Q,"batchingTexture"),Fe.setValue(G,"batchingTexture",Q._matricesTexture,Y),Fe.setOptional(G,Q,"batchingIdTexture"),Fe.setValue(G,"batchingIdTexture",Q._indirectTexture,Y),Fe.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Fe.setValue(G,"batchingColorTexture",Q._colorsTexture,Y));const pn=lt.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&fe.update(Q,lt,Mn),(En||Kt.receiveShadow!==Q.receiveShadow)&&(Kt.receiveShadow=Q.receiveShadow,Fe.setValue(G,"receiveShadow",Q.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(bn.envMap.value=Vt,bn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&q.environment!==null&&(bn.envMapIntensity.value=q.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=xA()),En&&(Fe.setValue(G,"toneMappingExposure",R.toneMappingExposure),Kt.needsLights&&eo(bn,oi),Ot&&st.fog===!0&&ne.refreshFogUniforms(bn,Ot),ne.refreshMaterialUniforms(bn,st,mt,K,F.state.transmissionRenderTarget[T.id]),Jc.upload(G,ul(Kt),bn,Y)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Jc.upload(G,ul(Kt),bn,Y),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Fe.setValue(G,"center",Q.center),Fe.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Fe.setValue(G,"normalMatrix",Q.normalMatrix),Fe.setValue(G,"modelMatrix",Q.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Tn=st.uniformsGroups;for(let An=0,Xs=Tn.length;An<Xs;An++){const Ti=Tn[An];Et.update(Ti,Mn),Et.bind(Ti,Mn)}}return Mn}function eo(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function Aa(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return it},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(T,q,lt){const st=M.get(T);st.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),M.get(T.texture).__webglTexture=q,M.get(T.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:lt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){const lt=M.get(T);lt.__webglFramebuffer=q,lt.__useDefaultFramebuffer=q===void 0};const Ra=G.createFramebuffer();this.setRenderTarget=function(T,q=0,lt=0){at=T,k=q,it=lt;let st=null,Q=!1,Ot=!1;if(T){const zt=M.get(T);if(zt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(G.FRAMEBUFFER,zt.__webglFramebuffer),L.copy(T.viewport),H.copy(T.scissor),Z=T.scissorTest,qt.viewport(L),qt.scissor(H),qt.setScissorTest(Z),ft=-1;return}else if(zt.__webglFramebuffer===void 0)Y.setupRenderTarget(T);else if(zt.__hasExternalTextures)Y.rebindTextures(T,M.get(T.texture).__webglTexture,M.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Jt=T.depthTexture;if(zt.__boundDepthTexture!==Jt){if(Jt!==null&&M.has(Jt)&&(T.width!==Jt.image.width||T.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(T)}}const Vt=T.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Ot=!0);const Wt=M.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[q])?st=Wt[q][lt]:st=Wt[q],Q=!0):T.samples>0&&Y.useMultisampledRTT(T)===!1?st=M.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?st=Wt[lt]:st=Wt,L.copy(T.viewport),H.copy(T.scissor),Z=T.scissorTest}else L.copy(tt).multiplyScalar(mt).floor(),H.copy(W).multiplyScalar(mt).floor(),Z=St;if(lt!==0&&(st=Ra),qt.bindFramebuffer(G.FRAMEBUFFER,st)&&qt.drawBuffers(T,st),qt.viewport(L),qt.scissor(H),qt.setScissorTest(Z),Q){const zt=M.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,zt.__webglTexture,lt)}else if(Ot){const zt=q;for(let Vt=0;Vt<T.textures.length;Vt++){const Wt=M.get(T.textures[Vt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,lt,zt)}}else if(T!==null&&lt!==0){const zt=M.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,zt.__webglTexture,lt)}ft=-1},this.readRenderTargetPixels=function(T,q,lt,st,Q,Ot,Gt,zt=0){if(!(T&&T.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Gt!==void 0&&(Vt=Vt[Gt]),Vt){qt.bindFramebuffer(G.FRAMEBUFFER,Vt);try{const Wt=T.textures[zt],Jt=Wt.format,Yt=Wt.type;if(!Le.textureFormatReadable(Jt)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Yt)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-st&&lt>=0&&lt<=T.height-Q&&(T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+zt),G.readPixels(q,lt,st,Q,At.convert(Jt),At.convert(Yt),Ot))}finally{const Wt=at!==null?M.get(at).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(T,q,lt,st,Q,Ot,Gt,zt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Gt!==void 0&&(Vt=Vt[Gt]),Vt)if(q>=0&&q<=T.width-st&&lt>=0&&lt<=T.height-Q){qt.bindFramebuffer(G.FRAMEBUFFER,Vt);const Wt=T.textures[zt],Jt=Wt.format,Yt=Wt.type;if(!Le.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.bufferData(G.PIXEL_PACK_BUFFER,Ot.byteLength,G.STREAM_READ),T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+zt),G.readPixels(q,lt,st,Q,At.convert(Jt),At.convert(Yt),0);const De=at!==null?M.get(at).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,De);const Qe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Fy(G,Qe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ot),G.deleteBuffer($t),G.deleteSync(Qe),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,lt=0){const st=Math.pow(2,-lt),Q=Math.floor(T.image.width*st),Ot=Math.floor(T.image.height*st),Gt=q!==null?q.x:0,zt=q!==null?q.y:0;Y.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,lt,0,0,Gt,zt,Q,Ot),qt.unbindTexture()};const us=G.createFramebuffer(),Ca=G.createFramebuffer();this.copyTextureToTexture=function(T,q,lt=null,st=null,Q=0,Ot=null){Ot===null&&(Q!==0?(sl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ot=Q,Q=0):Ot=0);let Gt,zt,Vt,Wt,Jt,Yt,$t,De,Qe;const qe=T.isCompressedTexture?T.mipmaps[Ot]:T.image;if(lt!==null)Gt=lt.max.x-lt.min.x,zt=lt.max.y-lt.min.y,Vt=lt.isBox3?lt.max.z-lt.min.z:1,Wt=lt.min.x,Jt=lt.min.y,Yt=lt.isBox3?lt.min.z:0;else{const pn=Math.pow(2,-Q);Gt=Math.floor(qe.width*pn),zt=Math.floor(qe.height*pn),T.isDataArrayTexture?Vt=qe.depth:T.isData3DTexture?Vt=Math.floor(qe.depth*pn):Vt=1,Wt=0,Jt=0,Yt=0}st!==null?($t=st.x,De=st.y,Qe=st.z):($t=0,De=0,Qe=0);const Oe=At.convert(q.format),Kt=At.convert(q.type);let Ue;q.isData3DTexture?(Y.setTexture3D(q,0),Ue=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Y.setTexture2DArray(q,0),Ue=G.TEXTURE_2D_ARRAY):(Y.setTexture2D(q,0),Ue=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const se=G.getParameter(G.UNPACK_ROW_LENGTH),Mn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ki=G.getParameter(G.UNPACK_SKIP_PIXELS),En=G.getParameter(G.UNPACK_SKIP_ROWS),oi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,qe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,qe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Wt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Yt);const Fe=T.isDataArrayTexture||T.isData3DTexture,bn=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const pn=M.get(T),Tn=M.get(q),An=M.get(pn.__renderTarget),Xs=M.get(Tn.__renderTarget);qt.bindFramebuffer(G.READ_FRAMEBUFFER,An.__webglFramebuffer),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let Ti=0;Ti<Vt;Ti++)Fe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(T).__webglTexture,Q,Yt+Ti),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(q).__webglTexture,Ot,Qe+Ti)),G.blitFramebuffer(Wt,Jt,Gt,zt,$t,De,Gt,zt,G.DEPTH_BUFFER_BIT,G.NEAREST);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||T.isRenderTargetTexture||M.has(T)){const pn=M.get(T),Tn=M.get(q);qt.bindFramebuffer(G.READ_FRAMEBUFFER,us),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ca);for(let An=0;An<Vt;An++)Fe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,Q,Yt+An):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,Q),bn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Tn.__webglTexture,Ot,Qe+An):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Tn.__webglTexture,Ot),Q!==0?G.blitFramebuffer(Wt,Jt,Gt,zt,$t,De,Gt,zt,G.COLOR_BUFFER_BIT,G.NEAREST):bn?G.copyTexSubImage3D(Ue,Ot,$t,De,Qe+An,Wt,Jt,Gt,zt):G.copyTexSubImage2D(Ue,Ot,$t,De,Wt,Jt,Gt,zt);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else bn?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Ue,Ot,$t,De,Qe,Gt,zt,Vt,Oe,Kt,qe.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Ue,Ot,$t,De,Qe,Gt,zt,Vt,Oe,qe.data):G.texSubImage3D(Ue,Ot,$t,De,Qe,Gt,zt,Vt,Oe,Kt,qe):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ot,$t,De,Gt,zt,Oe,Kt,qe.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ot,$t,De,qe.width,qe.height,Oe,qe.data):G.texSubImage2D(G.TEXTURE_2D,Ot,$t,De,Gt,zt,Oe,Kt,qe);G.pixelStorei(G.UNPACK_ROW_LENGTH,se),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Mn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ki),G.pixelStorei(G.UNPACK_SKIP_ROWS,En),G.pixelStorei(G.UNPACK_SKIP_IMAGES,oi),Ot===0&&q.generateMipmaps&&G.generateMipmap(Ue),qt.unbindTexture()},this.initRenderTarget=function(T){M.get(T).__webglFramebuffer===void 0&&Y.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Y.setTextureCube(T,0):T.isData3DTexture?Y.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Y.setTexture2DArray(T,0):Y.setTexture2D(T,0),qt.unbindTexture()},this.resetState=function(){k=0,it=0,at=null,qt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const $_={type:"change"},fp={type:"start"},Bv={type:"end"},Wc=new ou,tv=new as,yA=Math.cos(70*By.DEG2RAD),gn=new J,jn=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jh=1e-6;class MA extends bM{constructor(t,i=null){super(t,i),this.state=We.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gr.ROTATE,MIDDLE:Gr.DOLLY,RIGHT:Gr.PAN},this.touches={ONE:Hr.ROTATE,TWO:Hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new Is,this._lastTargetPosition=new J,this._quat=new Is().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new C_,this._sphericalDelta=new C_,this._scale=1,this._panOffset=new J,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new J,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bA.bind(this),this._onPointerDown=EA.bind(this),this._onPointerUp=TA.bind(this),this._onContextMenu=NA.bind(this),this._onMouseWheel=CA.bind(this),this._onKeyDown=wA.bind(this),this._onTouchStart=DA.bind(this),this._onTouchMove=UA.bind(this),this._onMouseDown=AA.bind(this),this._onMouseMove=RA.bind(this),this._interceptControlDown=LA.bind(this),this._interceptControlUp=OA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($_),this.update(),this.state=We.NONE}update(t=null){const i=this.object.position;gn.copy(i).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=jn:s>Math.PI&&(s-=jn),l<-Math.PI?l+=jn:l>Math.PI&&(l-=jn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),i.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=gn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Wc.origin.copy(this.object.position),Wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wc.direction))<yA?this.object.lookAt(this.target):(tv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wc.intersectPlane(tv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Jh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jh||this._lastTargetPosition.distanceToSquared(this.target)>Jh?(this.dispatchEvent($_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?jn/60*this.autoRotateSpeed*t:jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){gn.setFromMatrixColumn(i,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,i){this.screenSpacePanning===!0?gn.setFromMatrixColumn(i,1):(gn.setFromMatrixColumn(i,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ie,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function EA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function bA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function TA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bv),this.state=We.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function AA(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Gr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=We.DOLLY;break;case Gr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=We.ROTATE}break;case Gr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(fp)}function RA(o){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function CA(o){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(o.preventDefault(),this.dispatchEvent(fp),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Bv))}function wA(o){this.enabled!==!1&&this._handleKeyDown(o)}function DA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Hr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=We.TOUCH_ROTATE;break;case Hr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case Hr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=We.TOUCH_DOLLY_PAN;break;case Hr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(fp)}function UA(o){switch(this._trackPointer(o),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=We.NONE}}function NA(o){this.enabled!==!1&&o.preventDefault()}function LA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function OA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var PA=function(){return performance.now()},zA=(function(){function o(){this._tweens={},this._tweensAddedDuringUpdate={}}return o.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(i){return t._tweens[i]})},o.prototype.removeAll=function(){this._tweens={}},o.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},o.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},o.prototype.update=function(t,i){t===void 0&&(t=PA()),i===void 0&&(i=!1);var s=Object.keys(this._tweens);if(s.length===0)return!1;for(;s.length>0;){this._tweensAddedDuringUpdate={};for(var l=0;l<s.length;l++){var c=this._tweens[s[l]],h=!i;c&&c.update(t,h)===!1&&!i&&delete this._tweens[s[l]]}s=Object.keys(this._tweensAddedDuringUpdate)}return!0},o})(),FA=new zA,Zi=FA;Zi.getAll.bind(Zi);Zi.removeAll.bind(Zi);Zi.add.bind(Zi);Zi.remove.bind(Zi);var IA=Zi.update.bind(Zi);const BA=({entries:o,activeEntryId:t,currentTime:i,searchTerm:s="",onStarClick:l,onEmptySpaceClick:c,onSwipe:h,resetTrigger:d=0})=>{const m=ee.useRef(null),p=ee.useRef(null),x=ee.useRef(new cM),g=ee.useRef(null),S=ee.useRef(null),E=ee.useRef(null),A=ee.useRef(new Bi),C=ee.useRef(new Bi),y=ee.useRef(new Bi),v=ee.useRef(new Bi),P=ee.useRef(new Bi),O=ee.useRef(new EM),N=ee.useRef(new ie),F=ee.useRef(0),[B,z]=ee.useState(!1),[$,R]=ee.useState(!1),D=ee.useRef([]),k=ee.useRef(0),it=ee.useRef(0),at=ee.useRef(0),ft=ee.useRef(h);ee.useEffect(()=>{ft.current=h},[h]);const ot=ee.useRef({}),L=Z=>{if(ot.current[Z])return ot.current[Z];const pt=document.createElement("canvas");pt.width=128,pt.height=128;const dt=pt.getContext("2d"),w=dt.createRadialGradient(64,64,0,64,64,64);w.addColorStop(0,"white"),w.addColorStop(.2,Z),w.addColorStop(1,"rgba(0,0,0,0)"),dt.fillStyle=w,dt.fillRect(0,0,128,128);const K=new _M(pt);return ot.current[Z]=K,K};ee.useEffect(()=>{if(!m.current)return;const Z=window.innerWidth,pt=window.innerHeight,dt=new vi(55,Z/pt,1,15e3);dt.position.set(0,200,1800),g.current=dt;const w=new SA({antialias:!0,alpha:!0});w.setSize(Z,pt),w.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.current.appendChild(w.domElement),S.current=w;const K=new MA(dt,w.domElement);K.enableDamping=!0,E.current=K,x.current.add(A.current),A.current.add(C.current),C.current.add(y.current,v.current,P.current);const mt=Mt=>{F.current=requestAnimationFrame(mt),IA(Mt),K.update(),it.current+=(at.current-it.current)*.1;const Ct=it.current<0?Math.max(.1,1+it.current*.8):1+it.current*2.5;C.current.scale.setScalar(Ct),A.current.rotation.y+=2e-4,w.render(x.current,dt)};return mt(0),()=>{cancelAnimationFrame(F.current),w.dispose()}},[]),ee.useEffect(()=>{y.current.clear();const Z=new si,pt=5e3,dt=new Float32Array(pt*3);for(let Mt=0;Mt<pt*3;Mt++)dt[Mt]=(Math.random()-.5)*5e3;Z.setAttribute("position",new yi(dt,3));const w=new Uv({size:2,color:4474111,transparent:!0,opacity:.5,blending:$c}),K=new gM(Z,w);A.current.add(K),o.filter(Mt=>Mt.timestamp<=i).forEach(Mt=>{const Ct=new Bi;Ct.name=Mt.id,Ct.position.set(Mt.x,Mt.y,Mt.z);const tt=t===Mt.id,W=new fM(new Cv({map:L(Mt.moodColor),transparent:!0,opacity:tt?1:.7,blending:$c}));W.scale.setScalar(tt?140:50),Ct.add(W),Ct.add(new qi(new up(70,8,8),new cp({visible:!1}))),y.current.add(Ct)})},[o,i,t,s]),ee.useEffect(()=>{if(!p.current)return;let Z=!0;const pt=window;if(!pt.Hands||!pt.Camera)return;const dt=new pt.Hands({locateFile:K=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915/${K}`});dt.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.6,minTrackingConfidence:.6}),dt.onResults(K=>{if(!Z)return;let mt=!1,Mt=!1;K.multiHandLandmarks&&K.multiHandLandmarks.forEach((Ct,tt)=>{const W=K.multiHandedness[tt].label,St=Date.now();if(W==="Left"){Mt=!0;const Dt=Ct[8].x;if(D.current.push({x:Dt,t:St}),D.current.length>3&&St>k.current){const Lt=D.current[D.current.length-1].x-D.current[0].x;Math.abs(Lt)>.12&&(ft.current(Lt<0?"right":"left"),k.current=St+500,D.current=[])}}else{mt=!0;const Dt=Math.sqrt(Math.pow(Ct[4].x-Ct[8].x,2)+Math.pow(Ct[4].y-Ct[8].y,2));at.current=(Dt-.15)*8}}),z(mt),R(Mt)});const w=new pt.Camera(p.current,{onFrame:async()=>{Z&&p.current&&await dt.send({image:p.current})},width:640,height:480});return w.start(),()=>{Z=!1,w.stop(),dt.close()}},[]);const H=Z=>{if(!S.current||!g.current)return;const pt=m.current.getBoundingClientRect();N.current.x=(Z.clientX-pt.left)/pt.width*2-1,N.current.y=-((Z.clientY-pt.top)/pt.height)*2+1,O.current.setFromCamera(N.current,g.current);const dt=O.current.intersectObjects(y.current.children,!0);if(dt.length>0){let w=dt[0].object;for(;w.parent&&w.parent!==y.current;)w=w.parent;l(w.name)}else{const w=new J(N.current.x,N.current.y,.5).unproject(g.current),K=g.current.position.clone().add(w.sub(g.current.position).normalize().multiplyScalar(2e3));c(K.x,K.y,K.z,Z.clientX,Z.clientY)}};return wt.jsxs(wt.Fragment,{children:[wt.jsx("video",{ref:p,className:"hidden",autoPlay:!0,playsInline:!0,muted:!0}),wt.jsx("div",{className:"fixed inset-0 pointer-events-none z-[999]",children:$&&wt.jsx("div",{className:"absolute top-8 right-8 text-white/60 animate-pulse text-xs",children:"翻动模式"})}),wt.jsx("div",{ref:m,className:"w-full h-full",onClick:H})]})},ev="my_galaxy_diary_v2",HA="0921",$h=[{hex:"#FFD700",label:"快乐"},{hex:"#4B0082",label:"忧郁"},{hex:"#00FA9A",label:"平静"},{hex:"#FF4500",label:"热情"},{hex:"#9370DB",label:"迷茫"},{hex:"#F8F8FF",label:"观察"}],GA=()=>{const[o,t]=ee.useState(!1),[i,s]=ee.useState(""),[l,c]=ee.useState(!1),[h,d]=ee.useState(()=>{try{const W=localStorage.getItem(ev);return W?JSON.parse(W):[]}catch{return[]}}),[m,p]=ee.useState(null),[x,g]=ee.useState(!1),[S,E]=ee.useState(!1),[A,C]=ee.useState(null),[y,v]=ee.useState(""),[P,O]=ee.useState([]),[N,F]=ee.useState($h[0].hex),[B,z]=ee.useState(""),[$,R]=ee.useState(!1),[D,k]=ee.useState(0),it=ee.useRef(null),[at,ft]=ee.useState(!1),ot=ee.useMemo(()=>[...h].sort((W,St)=>W.timestamp-St.timestamp),[h]),L=ee.useMemo(()=>{if(ot.length===0)return{min:Date.now()-864e5,max:Date.now()};const W=ot[0].timestamp-36e5,St=ot[ot.length-1].timestamp+1e3;return{min:W,max:St}},[ot]),[H,Z]=ee.useState(L.max);ee.useEffect(()=>{Z(L.max)},[h.length,L.max]);const pt=W=>{i===HA?t(!0):(c(!0),setTimeout(()=>c(!1),500),s(""))},dt=ee.useCallback(W=>{if(!o)return;const St=h.find(Dt=>Dt.id===W);St&&(p(St),g(!1))},[h,o]),w=ee.useCallback((W,St,Dt,Lt,ue)=>{!o||m||(C({wx:W,wy:St,wz:Dt,sx:Lt,sy:ue}),g(!0),v(""),O([]),F($h[0].hex))},[m,o]),K=ee.useCallback(W=>{if(!o||ot.length===0)return;let St=-1;if(!m)St=W==="right"?0:ot.length-1;else{const Dt=ot.findIndex(Lt=>Lt.id===m.id);W==="right"?St=Math.min(ot.length-1,Dt+1):St=Math.max(0,Dt-1)}if(St!==-1){const Dt=ot[St];p(Dt),Z(Dt.timestamp)}},[m,ot,o]),mt=W=>{const St=W.target.files;St&&Array.from(St).forEach(Dt=>{const Lt=new FileReader;Lt.onloadend=()=>{O(ue=>[...ue,Lt.result].slice(-3))},Lt.readAsDataURL(Dt)})},Mt=W=>{O(St=>St.filter((Dt,Lt)=>Lt!==W))},Ct=async()=>{if(!y.trim()||!A)return;E(!0);const W={id:`mem-${Date.now()}`,x:A.wx,y:A.wy,z:A.wz,text:y,images:P,moodColor:N,timestamp:Date.now()};await new Promise(Dt=>setTimeout(Dt,800));const St=[...h,W];localStorage.setItem(ev,JSON.stringify(St)),d(St),E(!1),g(!1)},tt=W=>new Intl.DateTimeFormat("zh-CN",{month:"long",year:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(W));return wt.jsxs("div",{className:"relative w-full h-screen overflow-hidden select-none bg-[#020205]",children:[wt.jsx("div",{className:`absolute inset-0 z-0 transition-all duration-1000 ${m||x||!o?"opacity-30 blur-[20px] scale-105":"opacity-100 blur-0 scale-100"}`,children:wt.jsx(BA,{entries:h,activeEntryId:(m==null?void 0:m.id)||null,currentTime:H,searchTerm:B,onStarClick:dt,onEmptySpaceClick:w,onSwipe:K,resetTrigger:D})}),wt.jsxs("div",{className:`absolute top-12 right-12 z-50 flex items-center gap-6 transition-all duration-700 ${!o||m||x?"opacity-0 -translate-y-5 pointer-events-none":"opacity-100"}`,children:[wt.jsx("button",{onClick:()=>k(W=>W+1),className:"w-10 h-10 glass-card rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all",children:wt.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:wt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),wt.jsxs("div",{className:`flex items-center glass-card rounded-full overflow-hidden transition-all duration-500 ${$?"w-64 px-4":"w-10 px-0"}`,children:[wt.jsx("button",{onClick:()=>R(!$),className:"w-10 h-10 flex-shrink-0 flex items-center justify-center text-white/40 hover:text-white",children:wt.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:wt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),wt.jsx("input",{type:"text",placeholder:"搜索记忆...",value:B,onChange:W=>z(W.target.value),className:"bg-transparent border-none outline-none text-[10px] text-white/80 tracking-widest uppercase w-full ml-2 placeholder:text-white/20"})]})]}),wt.jsx("div",{className:`absolute bottom-12 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-12 transition-all duration-1000 ${!o||m||x?"opacity-0 translate-y-12 pointer-events-none":"opacity-100"}`,children:wt.jsxs("div",{className:`glass-card p-8 rounded-[2.5rem] flex flex-col gap-3 relative overflow-hidden transition-all duration-500 ${at?"timeline-dragging scale-105":""}`,children:[at&&wt.jsxs(wt.Fragment,{children:[wt.jsx("div",{className:"streak top-1/4 left-10",style:{animationDelay:"0s"}}),wt.jsx("div",{className:"streak top-2/4 right-20",style:{animationDelay:"0.5s"}}),wt.jsx("div",{className:"streak bottom-1/4 left-40",style:{animationDelay:"1s"}})]}),wt.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[wt.jsx("span",{className:"text-[9px] tracking-[0.5em] text-white/20 uppercase font-light",children:"Memory Chrono"}),wt.jsx("div",{className:`text-center transition-all duration-300 ${at?"scale-125 text-indigo-300 drop-shadow-[0_0_10px_rgba(165,180,252,0.8)]":"text-white/60"}`,children:wt.jsx("span",{className:"text-[10px] tracking-[0.3em] uppercase font-mono",children:tt(H)})}),wt.jsx("span",{className:"text-[9px] tracking-[0.5em] text-white/20 uppercase font-light",children:"Origin Axis"})]}),wt.jsxs("div",{className:"relative flex items-center h-4",children:[wt.jsx("div",{className:"absolute inset-0 rounded-full timeline-track opacity-50"}),wt.jsx("input",{type:"range",min:L.min,max:L.max,value:H,onMouseDown:()=>ft(!0),onMouseUp:()=>ft(!1),onTouchStart:()=>ft(!0),onTouchEnd:()=>ft(!1),onChange:W=>Z(Number(W.target.value)),className:"relative w-full h-1 bg-transparent appearance-none cursor-pointer z-10"})]}),wt.jsxs("div",{className:"flex justify-between text-[7px] tracking-[0.2em] text-white/10 uppercase px-2 mt-1",children:[wt.jsx("span",{children:tt(L.min).split(" ")[0]}),wt.jsx("span",{children:"Current Space-Time"}),wt.jsx("span",{children:tt(L.max).split(" ")[0]})]})]})}),m&&wt.jsx("div",{className:"absolute inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-entrance",onClick:()=>p(null),children:wt.jsxs("div",{className:"max-w-4xl w-full p-12 md:p-20 rounded-[3rem] glass-card relative pointer-events-auto",onClick:W=>W.stopPropagation(),children:[wt.jsx("div",{className:"absolute top-0 left-0 w-full h-1",style:{background:m.moodColor}}),wt.jsx("button",{onClick:()=>p(null),className:"absolute top-8 right-8 text-white/20 hover:text-white text-4xl font-thin transition-colors",children:"×"}),wt.jsxs("div",{className:"text-center mb-10",children:[wt.jsx("div",{className:"inline-block px-4 py-1 rounded-full border border-white/10 text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4",children:"Memory Resonated"}),wt.jsx("h3",{className:"text-xs font-mono text-white/40 tracking-widest uppercase",children:tt(m.timestamp)})]}),wt.jsxs("div",{className:"max-h-[60vh] overflow-y-auto pr-4 scrollbar-hide text-center",children:[wt.jsx("p",{className:"text-2xl md:text-3xl font-extralight text-white/90 leading-relaxed tracking-wide mb-8",children:m.text}),m.images&&m.images.length>0&&wt.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:m.images.map((W,St)=>wt.jsx("img",{src:W,alt:"Memory",className:"w-full max-w-md rounded-2xl object-cover shadow-2xl border border-white/10"},St))})]}),wt.jsxs("div",{className:"mt-12 flex flex-col items-center",children:[wt.jsx("div",{className:"w-12 h-[1px] bg-white/10 mb-8"}),wt.jsx("button",{onClick:()=>p(null),className:"px-10 py-4 rounded-full border border-white/10 text-[10px] tracking-[0.5em] text-white/40 uppercase hover:bg-white/5 transition-all",children:"收回思绪"})]})]})}),x&&A&&wt.jsx("div",{className:"absolute inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-entrance",onClick:()=>g(!1),children:wt.jsxs("div",{className:"w-[520px] p-10 rounded-[3rem] glass-card pointer-events-auto border-white/5 shadow-2xl",onClick:W=>W.stopPropagation(),children:[wt.jsxs("div",{className:"flex justify-between items-center mb-8",children:[wt.jsx("h2",{className:"text-[10px] tracking-[0.5em] text-white/30 uppercase font-light",children:"正在将记忆刻入星系"}),wt.jsx("button",{onClick:()=>g(!1),className:"text-white/20 hover:text-white/60 transition-colors",children:"×"})]}),wt.jsx("div",{className:"flex gap-4 mb-10 justify-start",children:$h.map(W=>wt.jsx("button",{onClick:()=>F(W.hex),className:`w-10 h-10 rounded-full transition-all duration-300 relative ${N===W.hex?"scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]":"opacity-40 grayscale-[40%]"}`,style:{backgroundColor:W.hex},children:N===W.hex&&wt.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-white animate-ping opacity-20"})},W.hex))}),wt.jsxs("div",{className:"relative mb-6",children:[wt.jsx("textarea",{autoFocus:!0,className:"w-full bg-transparent border-none outline-none text-white/90 text-xl font-light h-48 resize-none mb-2 placeholder:text-white/10 leading-relaxed",placeholder:"此时此刻的想法...",value:y,onChange:W=>v(W.target.value)}),wt.jsxs("div",{className:"flex gap-3 mt-4 flex-wrap",children:[P.map((W,St)=>wt.jsxs("div",{className:"relative group w-20 h-20 rounded-xl overflow-hidden border border-white/10",children:[wt.jsx("img",{src:W,className:"w-full h-full object-cover"}),wt.jsx("button",{onClick:()=>Mt(St),className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs transition-opacity",children:"移除"})]},St)),P.length<3&&wt.jsxs("button",{onClick:()=>{var W;return(W=it.current)==null?void 0:W.click()},className:"w-20 h-20 rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-white/20 hover:text-white/40 hover:border-white/20 transition-all gap-1",children:[wt.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:wt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 4v16m8-8H4"})}),wt.jsx("span",{className:"text-[8px] uppercase tracking-tighter",children:"添加图片"})]}),wt.jsx("input",{ref:it,type:"file",accept:"image/*",multiple:!0,className:"hidden",onChange:mt})]})]}),wt.jsx("div",{className:"flex justify-between items-center mb-8 px-1",children:wt.jsx("button",{className:"px-4 py-1.5 rounded-lg bg-white/5 text-[9px] text-white/30 uppercase tracking-[0.2em] border border-white/5 hover:bg-white/10 transition-all",children:"Preview"})}),wt.jsx("button",{onClick:Ct,disabled:S||!y.trim(),className:`w-full py-5 rounded-3xl transition-all duration-500 text-[10px] text-white tracking-[0.5em] uppercase border ${S||!y.trim()?"bg-transparent border-white/5 text-white/10 cursor-not-allowed":"bg-white/5 hover:bg-white/10 border-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"}`,children:S?"正在镌刻星纹...":"点亮这颗星"})]})}),!o&&wt.jsx("div",{className:"absolute inset-0 z-[200] flex items-center justify-center bg-[#020205] p-6 animate-entrance",children:wt.jsxs("div",{className:`glass-card p-12 rounded-[4rem] w-full max-w-sm flex flex-col items-center ${l?"shake":""}`,children:[wt.jsx("h2",{className:"text-xl font-extralight tracking-[0.5em] text-white/80 mb-12 uppercase",children:"星系权限验证"}),wt.jsx("input",{autoFocus:!0,type:"password",maxLength:4,placeholder:"密码",value:i,onChange:W=>s(W.target.value),onKeyDown:W=>W.key==="Enter"&&pt(),className:"w-full bg-white/5 border border-white/10 rounded-3xl py-6 text-center text-2xl text-white tracking-[1em] outline-none mb-8"}),wt.jsx("button",{onClick:()=>pt(),className:"w-full py-4 rounded-full border border-white/10 text-[10px] text-white/40 tracking-[0.5em] uppercase hover:bg-white/5",children:"开启接入"})]})}),wt.jsxs("div",{className:`absolute top-12 left-12 z-10 pointer-events-none transition-all duration-1000 ${!o||m||x?"opacity-20 blur-sm":"opacity-100"}`,children:[wt.jsx("h1",{className:"text-5xl font-extralight tracking-[0.6em] text-white/90 drop-shadow-2xl",children:"星系日记"}),wt.jsxs("p",{className:"text-[10px] tracking-[0.5em] text-indigo-400/60 mt-4 uppercase",children:["Galaxy Diary • ",h.length," 颗记忆星辰"]})]})]})},Hv=document.getElementById("root");if(!Hv)throw new Error("Could not find root element to mount to");const VA=ny.createRoot(Hv);VA.render(wt.jsx(jS.StrictMode,{children:wt.jsx(GA,{})}));
