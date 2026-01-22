(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function nv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var hh={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function WS(){if(W_)return Xo;W_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Xo.Fragment=t,Xo.jsx=i,Xo.jsxs=i,Xo}var q_;function qS(){return q_||(q_=1,hh.exports=WS()),hh.exports}var Ct=qS(),dh={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function YS(){if(Y_)return oe;Y_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function E(w){return w===null||typeof w!="object"?null:(w=S&&w[S]||w["@@iterator"],typeof w=="function"?w:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(w,Z,mt){this.props=w,this.context=Z,this.refs=y,this.updater=mt||A}x.prototype.isReactComponent={},x.prototype.setState=function(w,Z){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,Z,"setState")},x.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function L(){}L.prototype=x.prototype;function P(w,Z,mt){this.props=w,this.context=Z,this.refs=y,this.updater=mt||A}var N=P.prototype=new L;N.constructor=P,C(N,x.prototype),N.isPureReactComponent=!0;var I=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function R(w,Z,mt){var bt=mt.ref;return{$$typeof:r,type:w,key:Z,ref:bt!==void 0?bt:null,props:mt}}function D(w,Z){return R(w.type,Z,w.props)}function k(w){return typeof w=="object"&&w!==null&&w.$$typeof===r}function it(w){var Z={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(mt){return Z[mt]})}var at=/\/+/g;function dt(w,Z){return typeof w=="object"&&w!==null&&w.key!=null?it(""+w.key):Z.toString(36)}function ot(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(B,B):(w.status="pending",w.then(function(Z){w.status==="pending"&&(w.status="fulfilled",w.value=Z)},function(Z){w.status==="pending"&&(w.status="rejected",w.reason=Z)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function O(w,Z,mt,bt,Lt){var et=typeof w;(et==="undefined"||et==="boolean")&&(w=null);var W=!1;if(w===null)W=!0;else switch(et){case"bigint":case"string":case"number":W=!0;break;case"object":switch(w.$$typeof){case r:case t:W=!0;break;case v:return W=w._init,O(W(w._payload),Z,mt,bt,Lt)}}if(W)return Lt=Lt(w),W=bt===""?"."+dt(w,0):bt,I(Lt)?(mt="",W!=null&&(mt=W.replace(at,"$&/")+"/"),O(Lt,Z,mt,"",function(Nt){return Nt})):Lt!=null&&(k(Lt)&&(Lt=D(Lt,mt+(Lt.key==null||w&&w.key===Lt.key?"":(""+Lt.key).replace(at,"$&/")+"/")+W)),Z.push(Lt)),1;W=0;var xt=bt===""?".":bt+":";if(I(w))for(var wt=0;wt<w.length;wt++)bt=w[wt],et=xt+dt(bt,wt),W+=O(bt,Z,mt,et,Lt);else if(wt=E(w),typeof wt=="function")for(w=wt.call(w),wt=0;!(bt=w.next()).done;)bt=bt.value,et=xt+dt(bt,wt++),W+=O(bt,Z,mt,et,Lt);else if(et==="object"){if(typeof w.then=="function")return O(ot(w),Z,mt,bt,Lt);throw Z=String(w),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return W}function H(w,Z,mt){if(w==null)return w;var bt=[],Lt=0;return O(w,bt,"","",function(et){return Z.call(mt,et,Lt++)}),bt}function K(w){if(w._status===-1){var Z=w._result;Z=Z(),Z.then(function(mt){(w._status===0||w._status===-1)&&(w._status=1,w._result=mt)},function(mt){(w._status===0||w._status===-1)&&(w._status=2,w._result=mt)}),w._status===-1&&(w._status=0,w._result=Z)}if(w._status===1)return w._result.default;throw w._result}var ft=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},ht={map:H,forEach:function(w,Z,mt){H(w,function(){Z.apply(this,arguments)},mt)},count:function(w){var Z=0;return H(w,function(){Z++}),Z},toArray:function(w){return H(w,function(Z){return Z})||[]},only:function(w){if(!k(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return oe.Activity=_,oe.Children=ht,oe.Component=x,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=P,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,oe.__COMPILER_RUNTIME={__proto__:null,c:function(w){return z.H.useMemoCache(w)}},oe.cache=function(w){return function(){return w.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(w,Z,mt){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var bt=C({},w.props),Lt=w.key;if(Z!=null)for(et in Z.key!==void 0&&(Lt=""+Z.key),Z)!$.call(Z,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&Z.ref===void 0||(bt[et]=Z[et]);var et=arguments.length-2;if(et===1)bt.children=mt;else if(1<et){for(var W=Array(et),xt=0;xt<et;xt++)W[xt]=arguments[xt+2];bt.children=W}return R(w.type,Lt,bt)},oe.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:u,_context:w},w},oe.createElement=function(w,Z,mt){var bt,Lt={},et=null;if(Z!=null)for(bt in Z.key!==void 0&&(et=""+Z.key),Z)$.call(Z,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Lt[bt]=Z[bt]);var W=arguments.length-2;if(W===1)Lt.children=mt;else if(1<W){for(var xt=Array(W),wt=0;wt<W;wt++)xt[wt]=arguments[wt+2];Lt.children=xt}if(w&&w.defaultProps)for(bt in W=w.defaultProps,W)Lt[bt]===void 0&&(Lt[bt]=W[bt]);return R(w,et,Lt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(w){return{$$typeof:d,render:w}},oe.isValidElement=k,oe.lazy=function(w){return{$$typeof:v,_payload:{_status:-1,_result:w},_init:K}},oe.memo=function(w,Z){return{$$typeof:p,type:w,compare:Z===void 0?null:Z}},oe.startTransition=function(w){var Z=z.T,mt={};z.T=mt;try{var bt=w(),Lt=z.S;Lt!==null&&Lt(mt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(B,ft)}catch(et){ft(et)}finally{Z!==null&&mt.types!==null&&(Z.types=mt.types),z.T=Z}},oe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},oe.use=function(w){return z.H.use(w)},oe.useActionState=function(w,Z,mt){return z.H.useActionState(w,Z,mt)},oe.useCallback=function(w,Z){return z.H.useCallback(w,Z)},oe.useContext=function(w){return z.H.useContext(w)},oe.useDebugValue=function(){},oe.useDeferredValue=function(w,Z){return z.H.useDeferredValue(w,Z)},oe.useEffect=function(w,Z){return z.H.useEffect(w,Z)},oe.useEffectEvent=function(w){return z.H.useEffectEvent(w)},oe.useId=function(){return z.H.useId()},oe.useImperativeHandle=function(w,Z,mt){return z.H.useImperativeHandle(w,Z,mt)},oe.useInsertionEffect=function(w,Z){return z.H.useInsertionEffect(w,Z)},oe.useLayoutEffect=function(w,Z){return z.H.useLayoutEffect(w,Z)},oe.useMemo=function(w,Z){return z.H.useMemo(w,Z)},oe.useOptimistic=function(w,Z){return z.H.useOptimistic(w,Z)},oe.useReducer=function(w,Z,mt){return z.H.useReducer(w,Z,mt)},oe.useRef=function(w){return z.H.useRef(w)},oe.useState=function(w){return z.H.useState(w)},oe.useSyncExternalStore=function(w,Z,mt){return z.H.useSyncExternalStore(w,Z,mt)},oe.useTransition=function(){return z.H.useTransition()},oe.version="19.2.3",oe}var j_;function Kd(){return j_||(j_=1,dh.exports=YS()),dh.exports}var ee=Kd();const jS=nv(ee);var ph={exports:{}},Wo={},mh={exports:{}},_h={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function ZS(){return Z_||(Z_=1,(function(r){function t(O,H){var K=O.length;O.push(H);t:for(;0<K;){var ft=K-1>>>1,ht=O[ft];if(0<l(ht,H))O[ft]=H,O[K]=ht,K=ft;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var H=O[0],K=O.pop();if(K!==H){O[0]=K;t:for(var ft=0,ht=O.length,w=ht>>>1;ft<w;){var Z=2*(ft+1)-1,mt=O[Z],bt=Z+1,Lt=O[bt];if(0>l(mt,K))bt<ht&&0>l(Lt,mt)?(O[ft]=Lt,O[bt]=K,ft=bt):(O[ft]=mt,O[Z]=K,ft=Z);else if(bt<ht&&0>l(Lt,K))O[ft]=Lt,O[bt]=K,ft=bt;else break t}}return H}function l(O,H){var K=O.sortIndex-H.sortIndex;return K!==0?K:O.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,_=null,S=3,E=!1,A=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=O)s(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function I(O){if(C=!1,N(O),!A)if(i(m)!==null)A=!0,B||(B=!0,it());else{var H=i(p);H!==null&&ot(I,H.startTime-O)}}var B=!1,z=-1,$=5,R=-1;function D(){return y?!0:!(r.unstable_now()-R<$)}function k(){if(y=!1,B){var O=r.unstable_now();R=O;var H=!0;try{t:{A=!1,C&&(C=!1,L(z),z=-1),E=!0;var K=S;try{e:{for(N(O),_=i(m);_!==null&&!(_.expirationTime>O&&D());){var ft=_.callback;if(typeof ft=="function"){_.callback=null,S=_.priorityLevel;var ht=ft(_.expirationTime<=O);if(O=r.unstable_now(),typeof ht=="function"){_.callback=ht,N(O),H=!0;break e}_===i(m)&&s(m),N(O)}else s(m);_=i(m)}if(_!==null)H=!0;else{var w=i(p);w!==null&&ot(I,w.startTime-O),H=!1}}break t}finally{_=null,S=K,E=!1}H=void 0}}finally{H?it():B=!1}}}var it;if(typeof P=="function")it=function(){P(k)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,dt=at.port2;at.port1.onmessage=k,it=function(){dt.postMessage(null)}}else it=function(){x(k,0)};function ot(O,H){z=x(function(){O(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(O){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var K=S;S=H;try{return O()}finally{S=K}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var K=S;S=O;try{return H()}finally{S=K}},r.unstable_scheduleCallback=function(O,H,K){var ft=r.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ft+K:ft):K=ft,O){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=K+ht,O={id:v++,callback:H,priorityLevel:O,startTime:K,expirationTime:ht,sortIndex:-1},K>ft?(O.sortIndex=K,t(p,O),i(m)===null&&O===i(p)&&(C?(L(z),z=-1):C=!0,ot(I,K-ft))):(O.sortIndex=ht,t(m,O),A||E||(A=!0,B||(B=!0,it()))),O},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(O){var H=S;return function(){var K=S;S=H;try{return O.apply(this,arguments)}finally{S=K}}}})(_h)),_h}var K_;function KS(){return K_||(K_=1,mh.exports=ZS()),mh.exports}var gh={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function QS(){if(Q_)return Ln;Q_=1;var r=Kd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,v)},Ln.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:E}):v==="script"&&s.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ln.version="19.2.3",Ln}var J_;function JS(){if(J_)return gh.exports;J_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),gh.exports=QS(),gh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function $S(){if($_)return Wo;$_=1;var r=KS(),t=Kd(),i=JS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===o)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=f;else{for(var g=!1,b=c.child;b;){if(b===a){g=!0,a=c,o=f;break}if(b===o){g=!0,o=c,a=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===a){g=!0,a=f,o=c;break}if(b===o){g=!0,o=f,a=c;break}b=b.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),P=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case I:return"Suspense";case B:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case P:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case $:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var ot=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},ft=[],ht=-1;function w(e){return{current:e}}function Z(e){0>ht||(e.current=ft[ht],ft[ht]=null,ht--)}function mt(e,n){ht++,ft[ht]=e.current,e.current=n}var bt=w(null),Lt=w(null),et=w(null),W=w(null);function xt(e,n){switch(mt(et,n),mt(Lt,e),mt(bt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?p_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=p_(n),e=m_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(bt),mt(bt,e)}function wt(){Z(bt),Z(Lt),Z(et)}function Nt(e){e.memoizedState!==null&&mt(W,e);var n=bt.current,a=m_(n,e.type);n!==a&&(mt(Lt,e),mt(bt,a))}function ce(e){Lt.current===e&&(Z(bt),Z(Lt)),W.current===e&&(Z(W),Ho._currentValue=K)}var $e,xe;function me(e){if($e===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$e=n&&n[1]||"",xe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+e+xe}var we=!1;function le(e,n){if(!e||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ut){var rt=ut}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ut){rt=ut}e.call(vt.prototype)}}else{try{throw Error()}catch(ut){rt=ut}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ut){if(ut&&rt&&typeof ut.stack=="string")return[ut.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),g=f[0],b=f[1];if(g&&b){var F=g.split(`
`),nt=b.split(`
`);for(c=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;c<nt.length&&!nt[c].includes("DetermineComponentFrameRoot");)c++;if(o===F.length||c===nt.length)for(o=F.length-1,c=nt.length-1;1<=o&&0<=c&&F[o]!==nt[c];)c--;for(;1<=o&&0<=c;o--,c--)if(F[o]!==nt[c]){if(o!==1||c!==1)do if(o--,c--,0>c||F[o]!==nt[c]){var pt=`
`+F[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=c);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?me(a):""}function tn(e,n){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return me("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=tn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ke=Object.prototype.hasOwnProperty,Ee=r.unstable_scheduleCallback,Le=r.unstable_cancelCallback,Yt=r.unstable_shouldYield,U=r.unstable_requestPaint,M=r.unstable_now,q=r.unstable_getCurrentPriorityLevel,_t=r.unstable_ImmediatePriority,yt=r.unstable_UserBlockingPriority,ct=r.unstable_NormalPriority,Zt=r.unstable_LowPriority,Dt=r.unstable_IdlePriority,Xt=r.log,ne=r.unstable_setDisableYieldValue,Et=null,Tt=null;function Ht(e){if(typeof Xt=="function"&&ne(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Et,e)}catch{}}var Ft=Math.clz32?Math.clz32:X,Ut=Math.log,fe=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Ut(e)/fe|0)|0}var Pt=256,At=262144,Bt=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function St(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?c=Mt(o):(g&=b,g!==0?c=Mt(g):a||(a=b&~e,a!==0&&(c=Mt(a))))):(b=o&~f,b!==0?c=Mt(b):g!==0?c=Mt(g):a||(a=o&~e,a!==0&&(c=Mt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Rt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yi(e,n,a,o,c,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,F=e.expirationTimes,nt=e.hiddenUpdates;for(a=g&~a;0<a;){var pt=31-Ft(a),vt=1<<pt;b[pt]=0,F[pt]=-1;var rt=nt[pt];if(rt!==null)for(nt[pt]=null,pt=0;pt<rt.length;pt++){var ut=rt[pt];ut!==null&&(ut.lane&=-536870913)}a&=~vt}o!==0&&fl(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function fl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ft(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Qr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ft(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Gs(e,n){var a=n&-n;return a=(a&42)!==0?1:Jr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Jr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $r(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:F_(e.type))}function Li(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var si=Math.random().toString(36).slice(2),ln="__reactFiber$"+si,yn="__reactProps$"+si,Mi="__reactContainer$"+si,ks="__reactEvents$"+si,Xs="__reactListeners$"+si,hl="__reactHandles$"+si,to="__reactResources$"+si,us="__reactMarker$"+si;function eo(e){delete e[ln],delete e[yn],delete e[ks],delete e[Xs],delete e[hl]}function Aa(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Mi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=M_(e);e!==null;){if(a=e[ln])return a;e=M_(e)}return n}e=a,a=e.parentNode}return null}function Ra(e){if(e=e[ln]||e[Mi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function cs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ca(e){var n=e[to];return n||(n=e[to]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function T(e){e[us]=!0}var Y=new Set,lt={};function st(e,n){Q(e,n),Q(e+"Capture",n)}function Q(e,n){for(lt[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gt={},zt={};function Vt(e){return Ke.call(zt,e)?!0:Ke.call(Gt,e)?!1:Ot.test(e)?zt[e]=!0:(Gt[e]=!0,!1)}function Wt(e,n,a){if(Vt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Jt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ye(e){if(!e._valueTracker){var n=De(e)?"checked":"value";e._valueTracker=Qe(e,n,""+e[n])}}function Oe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=De(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ue=/[\n"\\]/g;function se(e){return e.replace(Ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mn(e,n,a,o,c,f,g,b){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$t(n)):e.value!==""+$t(n)&&(e.value=""+$t(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?En(e,g,$t(n)):a!=null?En(e,g,$t(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+$t(b):e.removeAttribute("name")}function Ki(e,n,a,o,c,f,g,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ye(e);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Ye(e)}function En(e,n,a){n==="number"&&Kt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ri(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function ze(e,n,a){if(n!=null&&(n=""+$t(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$t(a):""}function bn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ot(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$t(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ye(e)}function pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function An(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Tn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ws(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&An(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&An(e,f,n[f])}function Ei(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(e){return Vv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qi(){}var lc=null;function uc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,Ys=null;function dp(e){var n=Ra(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Mn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[yn]||null;if(!c)throw Error(s(90));Mn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Oe(o)}break t;case"textarea":ze(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ri(e,!!a.multiple,n,!1)}}}var cc=!1;function pp(e,n,a){if(cc)return e(n,a);cc=!0;try{var o=e(n);return o}finally{if(cc=!1,(qs!==null||Ys!==null)&&(tu(),qs&&(n=qs,e=Ys,Ys=qs=null,dp(n),e)))for(n=0;n<e.length;n++)dp(e[n])}}function no(e,n){var a=e.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fc=!1;if(Ji)try{var io={};Object.defineProperty(io,"passive",{get:function(){fc=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{fc=!1}var wa=null,hc=null,pl=null;function mp(){if(pl)return pl;var e,n=hc,a=n.length,o,c="value"in wa?wa.value:wa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var g=a-e;for(o=1;o<=g&&n[a-o]===c[f-o];o++);return pl=c.slice(e,1<o?1-o:void 0)}function ml(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function _p(){return!1}function Gn(e){function n(a,o,c,f,g){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?_l:_p,this.isPropagationStopped=_p,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=Gn(fs),ao=_({},fs,{view:0,detail:0}),kv=Gn(ao),dc,pc,so,vl=_({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(dc=e.screenX-so.screenX,pc=e.screenY-so.screenY):pc=dc=0,so=e),dc)},movementY:function(e){return"movementY"in e?e.movementY:pc}}),gp=Gn(vl),Xv=_({},vl,{dataTransfer:0}),Wv=Gn(Xv),qv=_({},ao,{relatedTarget:0}),mc=Gn(qv),Yv=_({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=Gn(Yv),Zv=_({},fs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kv=Gn(Zv),Qv=_({},fs,{data:0}),vp=Gn(Qv),Jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ex(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=tx[e])?!!n[e]:!1}function _c(){return ex}var nx=_({},ao,{key:function(e){if(e.key){var n=Jv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$v[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(e){return e.type==="keypress"?ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ix=Gn(nx),ax=_({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xp=Gn(ax),sx=_({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),rx=Gn(sx),ox=_({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Gn(ox),ux=_({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cx=Gn(ux),fx=_({},fs,{newState:0,oldState:0}),hx=Gn(fx),dx=[9,13,27,32],gc=Ji&&"CompositionEvent"in window,ro=null;Ji&&"documentMode"in document&&(ro=document.documentMode);var px=Ji&&"TextEvent"in window&&!ro,Sp=Ji&&(!gc||ro&&8<ro&&11>=ro),yp=" ",Mp=!1;function Ep(e,n){switch(e){case"keyup":return dx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var js=!1;function mx(e,n){switch(e){case"compositionend":return bp(n);case"keypress":return n.which!==32?null:(Mp=!0,yp);case"textInput":return e=n.data,e===yp&&Mp?null:e;default:return null}}function _x(e,n){if(js)return e==="compositionend"||!gc&&Ep(e,n)?(e=mp(),pl=hc=wa=null,js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sp&&n.locale!=="ko"?null:n.data;default:return null}}var gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!gx[e.type]:n==="textarea"}function Ap(e,n,a,o){qs?Ys?Ys.push(o):Ys=[o]:qs=o,n=ou(n,"onChange"),0<n.length&&(a=new gl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var oo=null,lo=null;function vx(e){l_(e,0)}function xl(e){var n=cs(e);if(Oe(n))return e}function Rp(e,n){if(e==="change")return n}var Cp=!1;if(Ji){var vc;if(Ji){var xc="oninput"in document;if(!xc){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),xc=typeof wp.oninput=="function"}vc=xc}else vc=!1;Cp=vc&&(!document.documentMode||9<document.documentMode)}function Dp(){oo&&(oo.detachEvent("onpropertychange",Up),lo=oo=null)}function Up(e){if(e.propertyName==="value"&&xl(lo)){var n=[];Ap(n,lo,e,uc(e)),pp(vx,n)}}function xx(e,n,a){e==="focusin"?(Dp(),oo=n,lo=a,oo.attachEvent("onpropertychange",Up)):e==="focusout"&&Dp()}function Sx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(lo)}function yx(e,n){if(e==="click")return xl(n)}function Mx(e,n){if(e==="input"||e==="change")return xl(n)}function Ex(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:Ex;function uo(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ke.call(n,c)||!Kn(e[c],n[c]))return!1}return!0}function Np(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lp(e,n){var a=Np(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Np(a)}}function Op(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Op(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Pp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Kt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Kt(e.document)}return n}function Sc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var bx=Ji&&"documentMode"in document&&11>=document.documentMode,Zs=null,yc=null,co=null,Mc=!1;function zp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mc||Zs==null||Zs!==Kt(o)||(o=Zs,"selectionStart"in o&&Sc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),co&&uo(co,o)||(co=o,o=ou(yc,"onSelect"),0<o.length&&(n=new gl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Zs)))}function hs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ks={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Ec={},Ip={};Ji&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function ds(e){if(Ec[e])return Ec[e];if(!Ks[e])return e;var n=Ks[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ip)return Ec[e]=n[a];return e}var Fp=ds("animationend"),Bp=ds("animationiteration"),Hp=ds("animationstart"),Tx=ds("transitionrun"),Ax=ds("transitionstart"),Rx=ds("transitioncancel"),Gp=ds("transitionend"),Vp=new Map,bc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bc.push("scrollEnd");function bi(e,n){Vp.set(e,n),st(n,[e])}var Sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oi=[],Qs=0,Tc=0;function yl(){for(var e=Qs,n=Tc=Qs=0;n<e;){var a=oi[n];oi[n++]=null;var o=oi[n];oi[n++]=null;var c=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,o!==null&&c!==null){var g=o.pending;g===null?c.next=c:(c.next=g.next,g.next=c),o.pending=c}f!==0&&kp(a,c,f)}}function Ml(e,n,a,o){oi[Qs++]=e,oi[Qs++]=n,oi[Qs++]=a,oi[Qs++]=o,Tc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ac(e,n,a,o){return Ml(e,n,a,o),El(e)}function ps(e,n){return Ml(e,null,null,n),El(e)}function kp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ft(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function El(e){if(50<Lo)throw Lo=0,zf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Js={};function Cx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,o){return new Cx(e,n,a,o)}function Rc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Xp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function bl(e,n,a,o,c,f){var g=0;if(o=e,typeof e=="function")Rc(e)&&(g=1);else if(typeof e=="string")g=LS(e,a,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=Qn(31,a,n,c),e.elementType=R,e.lanes=f,e;case C:return ms(a.children,c,f,n);case y:g=8,c|=24;break;case x:return e=Qn(12,a,n,c|2),e.elementType=x,e.lanes=f,e;case I:return e=Qn(13,a,n,c),e.elementType=I,e.lanes=f,e;case B:return e=Qn(19,a,n,c),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:g=10;break t;case L:g=9;break t;case N:g=11;break t;case z:g=14;break t;case $:g=16,o=null;break t}g=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Qn(g,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function ms(e,n,a,o){return e=Qn(7,e,o,n),e.lanes=a,e}function Cc(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function Wp(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function wc(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var qp=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=qp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},qp.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var $s=[],tr=0,Tl=null,fo=0,ui=[],ci=0,Da=null,Oi=1,Pi="";function ta(e,n){$s[tr++]=fo,$s[tr++]=Tl,Tl=e,fo=n}function Yp(e,n,a){ui[ci++]=Oi,ui[ci++]=Pi,ui[ci++]=Da,Da=e;var o=Oi;e=Pi;var c=32-Ft(o)-1;o&=~(1<<c),a+=1;var f=32-Ft(n)+c;if(30<f){var g=c-c%5;f=(o&(1<<g)-1).toString(32),o>>=g,c-=g,Oi=1<<32-Ft(n)+c|a<<c|o,Pi=f+e}else Oi=1<<f|a<<c|o,Pi=e}function Dc(e){e.return!==null&&(ta(e,1),Yp(e,1,0))}function Uc(e){for(;e===Tl;)Tl=$s[--tr],$s[tr]=null,fo=$s[--tr],$s[tr]=null;for(;e===Da;)Da=ui[--ci],ui[ci]=null,Pi=ui[--ci],ui[ci]=null,Oi=ui[--ci],ui[ci]=null}function jp(e,n){ui[ci++]=Oi,ui[ci++]=Pi,ui[ci++]=Da,Oi=n.id,Pi=n.overflow,Da=e}var Rn=null,je=null,Me=!1,Ua=null,fi=!1,Nc=Error(s(519));function Na(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ho(li(n,e)),Nc}function Zp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[yn]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<Po.length;a++)ge(Po[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Ki(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),bn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||h_(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||Na(e,!0)}function Kp(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Rn=Rn.return}}function er(e){if(e!==Rn)return!1;if(!Me)return Kp(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qf(e.type,e.memoizedProps)),a=!a),a&&je&&Na(e),Kp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=y_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=y_(e)}else n===27?(n=je,qa(e.type)?(e=nh,nh=null,je=e):je=n):je=Rn?di(e.stateNode.nextSibling):null;return!0}function _s(){je=Rn=null,Me=!1}function Lc(){var e=Ua;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Ua=null),e}function ho(e){Ua===null?Ua=[e]:Ua.push(e)}var Oc=w(null),gs=null,ea=null;function La(e,n,a){mt(Oc,n._currentValue),n._currentValue=a}function na(e){e._currentValue=Oc.current,Z(Oc)}function Pc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function zc(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var F=0;F<n.length;F++)if(b.context===n[F]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Pc(f.return,a,e),o||(g=null);break t}f=b.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Pc(g,a,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function nr(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var b=c.type;Kn(c.pendingProps.value,g.value)||(e!==null?e.push(b):e=[b])}}else if(c===W.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ho):e=[Ho])}c=c.return}e!==null&&zc(n,e,a,o),n.flags|=262144}function Al(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){gs=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return Qp(gs,e)}function Rl(e,n){return gs===null&&vs(e),Qp(e,n)}function Qp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(e===null)throw Error(s(308));ea=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ea=ea.next=n;return a}var wx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Dx=r.unstable_scheduleCallback,Ux=r.unstable_NormalPriority,un={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ic(){return{controller:new wx,data:new Map,refCount:0}}function po(e){e.refCount--,e.refCount===0&&Dx(Ux,function(){e.controller.abort()})}var mo=null,Fc=0,ir=0,ar=null;function Nx(e,n){if(mo===null){var a=mo=[];Fc=0,ir=Vf(),ar={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Fc++,n.then(Jp,Jp),n}function Jp(){if(--Fc===0&&mo!==null){ar!==null&&(ar.status="fulfilled");var e=mo;mo=null,ir=0,ar=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Lx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var $p=O.S;O.S=function(e,n){z0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Nx(e,n),$p!==null&&$p(e,n)};var xs=w(null);function Bc(){var e=xs.current;return e!==null?e:qe.pooledCache}function Cl(e,n){n===null?mt(xs,xs.current):mt(xs,n.pool)}function tm(){var e=Bc();return e===null?null:{parent:un._currentValue,pool:e}}var sr=Error(s(460)),Hc=Error(s(474)),wl=Error(s(542)),Dl={then:function(){}};function em(e){return e=e.status,e==="fulfilled"||e==="rejected"}function nm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Qi,Qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,am(e),e;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,am(e),e}throw ys=n,sr}}function Ss(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ys=a,sr):a}}var ys=null;function im(){if(ys===null)throw Error(s(459));var e=ys;return ys=null,e}function am(e){if(e===sr||e===wl)throw Error(s(483))}var rr=null,_o=0;function Ul(e){var n=_o;return _o+=1,rr===null&&(rr=[]),nm(rr,e,n)}function go(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Nl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function sm(e){function n(j,V){if(e){var tt=j.deletions;tt===null?(j.deletions=[V],j.flags|=16):tt.push(V)}}function a(j,V){if(!e)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function o(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function c(j,V){return j=$i(j,V),j.index=0,j.sibling=null,j}function f(j,V,tt){return j.index=tt,e?(tt=j.alternate,tt!==null?(tt=tt.index,tt<V?(j.flags|=67108866,V):tt):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function g(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function b(j,V,tt,gt){return V===null||V.tag!==6?(V=Cc(tt,j.mode,gt),V.return=j,V):(V=c(V,tt),V.return=j,V)}function F(j,V,tt,gt){var Qt=tt.type;return Qt===C?pt(j,V,tt.props.children,gt,tt.key):V!==null&&(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===$&&Ss(Qt)===V.type)?(V=c(V,tt.props),go(V,tt),V.return=j,V):(V=bl(tt.type,tt.key,tt.props,null,j.mode,gt),go(V,tt),V.return=j,V)}function nt(j,V,tt,gt){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=wc(tt,j.mode,gt),V.return=j,V):(V=c(V,tt.children||[]),V.return=j,V)}function pt(j,V,tt,gt,Qt){return V===null||V.tag!==7?(V=ms(tt,j.mode,gt,Qt),V.return=j,V):(V=c(V,tt),V.return=j,V)}function vt(j,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Cc(""+V,j.mode,tt),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return tt=bl(V.type,V.key,V.props,null,j.mode,tt),go(tt,V),tt.return=j,tt;case A:return V=wc(V,j.mode,tt),V.return=j,V;case $:return V=Ss(V),vt(j,V,tt)}if(ot(V)||it(V))return V=ms(V,j.mode,tt,null),V.return=j,V;if(typeof V.then=="function")return vt(j,Ul(V),tt);if(V.$$typeof===P)return vt(j,Rl(j,V),tt);Nl(j,V)}return null}function rt(j,V,tt,gt){var Qt=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Qt!==null?null:b(j,V,""+tt,gt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case E:return tt.key===Qt?F(j,V,tt,gt):null;case A:return tt.key===Qt?nt(j,V,tt,gt):null;case $:return tt=Ss(tt),rt(j,V,tt,gt)}if(ot(tt)||it(tt))return Qt!==null?null:pt(j,V,tt,gt,null);if(typeof tt.then=="function")return rt(j,V,Ul(tt),gt);if(tt.$$typeof===P)return rt(j,V,Rl(j,tt),gt);Nl(j,tt)}return null}function ut(j,V,tt,gt,Qt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return j=j.get(tt)||null,b(V,j,""+gt,Qt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case E:return j=j.get(gt.key===null?tt:gt.key)||null,F(V,j,gt,Qt);case A:return j=j.get(gt.key===null?tt:gt.key)||null,nt(V,j,gt,Qt);case $:return gt=Ss(gt),ut(j,V,tt,gt,Qt)}if(ot(gt)||it(gt))return j=j.get(tt)||null,pt(V,j,gt,Qt,null);if(typeof gt.then=="function")return ut(j,V,tt,Ul(gt),Qt);if(gt.$$typeof===P)return ut(j,V,tt,Rl(V,gt),Qt);Nl(V,gt)}return null}function kt(j,V,tt,gt){for(var Qt=null,Re=null,jt=V,he=V=0,ye=null;jt!==null&&he<tt.length;he++){jt.index>he?(ye=jt,jt=null):ye=jt.sibling;var Ce=rt(j,jt,tt[he],gt);if(Ce===null){jt===null&&(jt=ye);break}e&&jt&&Ce.alternate===null&&n(j,jt),V=f(Ce,V,he),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce,jt=ye}if(he===tt.length)return a(j,jt),Me&&ta(j,he),Qt;if(jt===null){for(;he<tt.length;he++)jt=vt(j,tt[he],gt),jt!==null&&(V=f(jt,V,he),Re===null?Qt=jt:Re.sibling=jt,Re=jt);return Me&&ta(j,he),Qt}for(jt=o(jt);he<tt.length;he++)ye=ut(jt,j,he,tt[he],gt),ye!==null&&(e&&ye.alternate!==null&&jt.delete(ye.key===null?he:ye.key),V=f(ye,V,he),Re===null?Qt=ye:Re.sibling=ye,Re=ye);return e&&jt.forEach(function(Qa){return n(j,Qa)}),Me&&ta(j,he),Qt}function te(j,V,tt,gt){if(tt==null)throw Error(s(151));for(var Qt=null,Re=null,jt=V,he=V=0,ye=null,Ce=tt.next();jt!==null&&!Ce.done;he++,Ce=tt.next()){jt.index>he?(ye=jt,jt=null):ye=jt.sibling;var Qa=rt(j,jt,Ce.value,gt);if(Qa===null){jt===null&&(jt=ye);break}e&&jt&&Qa.alternate===null&&n(j,jt),V=f(Qa,V,he),Re===null?Qt=Qa:Re.sibling=Qa,Re=Qa,jt=ye}if(Ce.done)return a(j,jt),Me&&ta(j,he),Qt;if(jt===null){for(;!Ce.done;he++,Ce=tt.next())Ce=vt(j,Ce.value,gt),Ce!==null&&(V=f(Ce,V,he),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce);return Me&&ta(j,he),Qt}for(jt=o(jt);!Ce.done;he++,Ce=tt.next())Ce=ut(jt,j,he,Ce.value,gt),Ce!==null&&(e&&Ce.alternate!==null&&jt.delete(Ce.key===null?he:Ce.key),V=f(Ce,V,he),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce);return e&&jt.forEach(function(XS){return n(j,XS)}),Me&&ta(j,he),Qt}function ke(j,V,tt,gt){if(typeof tt=="object"&&tt!==null&&tt.type===C&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case E:t:{for(var Qt=tt.key;V!==null;){if(V.key===Qt){if(Qt=tt.type,Qt===C){if(V.tag===7){a(j,V.sibling),gt=c(V,tt.props.children),gt.return=j,j=gt;break t}}else if(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===$&&Ss(Qt)===V.type){a(j,V.sibling),gt=c(V,tt.props),go(gt,tt),gt.return=j,j=gt;break t}a(j,V);break}else n(j,V);V=V.sibling}tt.type===C?(gt=ms(tt.props.children,j.mode,gt,tt.key),gt.return=j,j=gt):(gt=bl(tt.type,tt.key,tt.props,null,j.mode,gt),go(gt,tt),gt.return=j,j=gt)}return g(j);case A:t:{for(Qt=tt.key;V!==null;){if(V.key===Qt)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){a(j,V.sibling),gt=c(V,tt.children||[]),gt.return=j,j=gt;break t}else{a(j,V);break}else n(j,V);V=V.sibling}gt=wc(tt,j.mode,gt),gt.return=j,j=gt}return g(j);case $:return tt=Ss(tt),ke(j,V,tt,gt)}if(ot(tt))return kt(j,V,tt,gt);if(it(tt)){if(Qt=it(tt),typeof Qt!="function")throw Error(s(150));return tt=Qt.call(tt),te(j,V,tt,gt)}if(typeof tt.then=="function")return ke(j,V,Ul(tt),gt);if(tt.$$typeof===P)return ke(j,V,Rl(j,tt),gt);Nl(j,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(a(j,V.sibling),gt=c(V,tt),gt.return=j,j=gt):(a(j,V),gt=Cc(tt,j.mode,gt),gt.return=j,j=gt),g(j)):a(j,V)}return function(j,V,tt,gt){try{_o=0;var Qt=ke(j,V,tt,gt);return rr=null,Qt}catch(jt){if(jt===sr||jt===wl)throw jt;var Re=Qn(29,jt,null,j.mode);return Re.lanes=gt,Re.return=j,Re}finally{}}}var Ms=sm(!0),rm=sm(!1),Oa=!1;function Gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=El(e),kp(e,null,a),n}return Ml(e,o,n,a),El(e)}function vo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Qr(e,a)}}function kc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Xc=!1;function xo(){if(Xc){var e=ar;if(e!==null)throw e}}function So(e,n,a,o){Xc=!1;var c=e.updateQueue;Oa=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var F=b,nt=F.next;F.next=null,g===null?f=nt:g.next=nt,g=F;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,b=pt.lastBaseUpdate,b!==g&&(b===null?pt.firstBaseUpdate=nt:b.next=nt,pt.lastBaseUpdate=F))}if(f!==null){var vt=c.baseState;g=0,pt=nt=F=null,b=f;do{var rt=b.lane&-536870913,ut=rt!==b.lane;if(ut?(Se&rt)===rt:(o&rt)===rt){rt!==0&&rt===ir&&(Xc=!0),pt!==null&&(pt=pt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var kt=e,te=b;rt=n;var ke=a;switch(te.tag){case 1:if(kt=te.payload,typeof kt=="function"){vt=kt.call(ke,vt,rt);break t}vt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=te.payload,rt=typeof kt=="function"?kt.call(ke,vt,rt):kt,rt==null)break t;vt=_({},vt,rt);break t;case 2:Oa=!0}}rt=b.callback,rt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[rt]:ut.push(rt))}else ut={lane:rt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},pt===null?(nt=pt=ut,F=vt):pt=pt.next=ut,g|=rt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ut=b,b=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);pt===null&&(F=vt),c.baseState=F,c.firstBaseUpdate=nt,c.lastBaseUpdate=pt,f===null&&(c.shared.lanes=0),Ga|=g,e.lanes=g,e.memoizedState=vt}}function om(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function lm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)om(a[e],n)}var or=w(null),Ll=w(0);function um(e,n){e=fa,mt(Ll,e),mt(or,n),fa=e|n.baseLanes}function Wc(){mt(Ll,fa),mt(or,or.current)}function qc(){fa=Ll.current,Z(or),Z(Ll)}var Jn=w(null),hi=null;function Ia(e){var n=e.alternate;mt(sn,sn.current&1),mt(Jn,e),hi===null&&(n===null||or.current!==null||n.memoizedState!==null)&&(hi=e)}function Yc(e){mt(sn,sn.current),mt(Jn,e),hi===null&&(hi=e)}function cm(e){e.tag===22?(mt(sn,sn.current),mt(Jn,e),hi===null&&(hi=e)):Fa()}function Fa(){mt(sn,sn.current),mt(Jn,Jn.current)}function $n(e){Z(Jn),hi===e&&(hi=null),Z(sn)}var sn=w(0);function Ol(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||th(a)||eh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,ue=null,Ge=null,cn=null,Pl=!1,lr=!1,Es=!1,zl=0,yo=0,ur=null,Ox=0;function en(){throw Error(s(321))}function jc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function Zc(e,n,a,o,c,f){return ia=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Ym:ff,Es=!1,f=a(o,c),Es=!1,lr&&(f=hm(n,a,o,c)),fm(e),f}function fm(e){O.H=bo;var n=Ge!==null&&Ge.next!==null;if(ia=0,cn=Ge=ue=null,Pl=!1,yo=0,ur=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&Al(e)&&(fn=!0))}function hm(e,n,a,o){ue=e;var c=0;do{if(lr&&(ur=null),yo=0,lr=!1,25<=c)throw Error(s(301));if(c+=1,cn=Ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=jm,f=n(a,o)}while(lr);return f}function Px(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?Mo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ue.flags|=1024),n}function Kc(){var e=zl!==0;return zl=0,e}function Qc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Jc(e){if(Pl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Pl=!1}ia=0,cn=Ge=ue=null,lr=!1,yo=zl=0,ur=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ue.memoizedState=cn=e:cn=cn.next=e,cn}function rn(){if(Ge===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=cn===null?ue.memoizedState:cn.next;if(n!==null)cn=n,Ge=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},cn===null?ue.memoizedState=cn=e:cn=cn.next=e}return cn}function Il(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var n=yo;return yo+=1,ur===null&&(ur=[]),e=nm(ur,e,n),n=ue,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Ym:ff),e}function Fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mo(e);if(e.$$typeof===P)return Cn(e)}throw Error(s(438,String(e)))}function $c(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Il(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function aa(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=rn();return tf(n,Ge,e)}function tf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=g=null,F=null,nt=n,pt=!1;do{var vt=nt.lane&-536870913;if(vt!==nt.lane?(Se&vt)===vt:(ia&vt)===vt){var rt=nt.revertLane;if(rt===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),vt===ir&&(pt=!0);else if((ia&rt)===rt){nt=nt.next,rt===ir&&(pt=!0);continue}else vt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(b=F=vt,g=f):F=F.next=vt,ue.lanes|=rt,Ga|=rt;vt=nt.action,Es&&a(f,vt),f=nt.hasEagerState?nt.eagerState:a(f,vt)}else rt={lane:vt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(b=F=rt,g=f):F=F.next=rt,ue.lanes|=vt,Ga|=vt;nt=nt.next}while(nt!==null&&nt!==n);if(F===null?g=f:F.next=b,!Kn(f,e.memoizedState)&&(fn=!0,pt&&(a=ar,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=F,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ef(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);Kn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function dm(e,n,a){var o=ue,c=rn(),f=Me;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Kn((Ge||c).memoizedState,a);if(g&&(c.memoizedState=a,fn=!0),c=c.queue,sf(_m.bind(null,o,c,e),[e]),c.getSnapshot!==n||g||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,cr(9,{destroy:void 0},mm.bind(null,o,c,a,n),null),qe===null)throw Error(s(349));f||(ia&127)!==0||pm(o,n,a)}return a}function pm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Il(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function mm(e,n,a,o){n.value=a,n.getSnapshot=o,gm(n)&&vm(e)}function _m(e,n,a){return a(function(){gm(n)&&vm(e)})}function gm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function vm(e){var n=ps(e,2);n!==null&&qn(n,e,2)}function nf(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),Es){Ht(!0);try{a()}finally{Ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},n}function xm(e,n,a,o){return e.baseState=a,tf(e,Ge,typeof o=="function"?o:aa)}function zx(e,n,a,o,c){if(Vl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Sm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Sm(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=O.T,g={};O.T=g;try{var b=a(c,o),F=O.S;F!==null&&F(g,b),ym(e,n,b)}catch(nt){af(e,n,nt)}finally{f!==null&&g.types!==null&&(f.types=g.types),O.T=f}}else try{f=a(c,o),ym(e,n,f)}catch(nt){af(e,n,nt)}}function ym(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Mm(e,n,o)},function(o){return af(e,n,o)}):Mm(e,n,a)}function Mm(e,n,a){n.status="fulfilled",n.value=a,Em(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Sm(e,a)))}function af(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Em(n),n=n.next;while(n!==o)}e.action=null}function Em(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function bm(e,n){return n}function Tm(e,n){if(Me){var a=qe.formState;if(a!==null){t:{var o=ue;if(Me){if(je){e:{for(var c=je,f=fi;c.nodeType!==8;){if(!f){c=null;break e}if(c=di(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=di(c.nextSibling),o=c.data==="F!";break t}}Na(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bm,lastRenderedState:n},a.queue=o,a=Xm.bind(null,ue,o),o.dispatch=a,o=nf(!1),f=cf.bind(null,ue,!1,o.queue),o=Fn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=zx.bind(null,ue,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Am(e){var n=rn();return Rm(n,Ge,e)}function Rm(e,n,a){if(n=tf(e,n,bm)[0],e=Bl(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Mo(n)}catch(g){throw g===sr?wl:g}else o=n;n=rn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,cr(9,{destroy:void 0},Ix.bind(null,c,a),null)),[o,f,e]}function Ix(e,n){e.action=n}function Cm(e){var n=rn(),a=Ge;if(a!==null)return Rm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function cr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Il(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function wm(){return rn().memoizedState}function Hl(e,n,a,o){var c=Fn();ue.flags|=e,c.memoizedState=cr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Gl(e,n,a,o){var c=rn();o=o===void 0?null:o;var f=c.memoizedState.inst;Ge!==null&&o!==null&&jc(o,Ge.memoizedState.deps)?c.memoizedState=cr(n,f,a,o):(ue.flags|=e,c.memoizedState=cr(1|n,f,a,o))}function Dm(e,n){Hl(8390656,8,e,n)}function sf(e,n){Gl(2048,8,e,n)}function Fx(e){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=Il(),ue.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Um(e){var n=rn().memoizedState;return Fx({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Nm(e,n){return Gl(4,2,e,n)}function Lm(e,n){return Gl(4,4,e,n)}function Om(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Pm(e,n,a){a=a!=null?a.concat([e]):null,Gl(4,4,Om.bind(null,n,e),a)}function rf(){}function zm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&jc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Im(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&jc(n,o[1]))return o[0];if(o=e(),Es){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o}function of(e,n,a){return a===void 0||(ia&1073741824)!==0&&(Se&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=F0(),ue.lanes|=e,Ga|=e,a)}function Fm(e,n,a,o){return Kn(a,n)?a:or.current!==null?(e=of(e,a,o),Kn(e,n)||(fn=!0),e):(ia&42)===0||(ia&1073741824)!==0&&(Se&261930)===0?(fn=!0,e.memoizedState=a):(e=F0(),ue.lanes|=e,Ga|=e,n)}function Bm(e,n,a,o,c){var f=H.p;H.p=f!==0&&8>f?f:8;var g=O.T,b={};O.T=b,cf(e,!1,n,a);try{var F=c(),nt=O.S;if(nt!==null&&nt(b,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var pt=Lx(F,o);Eo(e,n,pt,ni(e))}else Eo(e,n,o,ni(e))}catch(vt){Eo(e,n,{then:function(){},status:"rejected",reason:vt},ni())}finally{H.p=f,g!==null&&b.types!==null&&(g.types=b.types),O.T=g}}function Bx(){}function lf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var c=Hm(e).queue;Bm(e,c,n,K,a===null?Bx:function(){return Gm(e),a(o)})}function Hm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Gm(e){var n=Hm(e);n.next===null&&(n=e.alternate.memoizedState),Eo(e,n.next.queue,{},ni())}function uf(){return Cn(Ho)}function Vm(){return rn().memoizedState}function km(){return rn().memoizedState}function Hx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();e=Pa(a);var o=za(n,e,a);o!==null&&(qn(o,n,a),vo(o,n,a)),n={cache:Ic()},e.payload=n;return}n=n.return}}function Gx(e,n,a){var o=ni();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(e)?Wm(n,a):(a=Ac(e,n,a,o),a!==null&&(qn(a,e,o),qm(a,n,o)))}function Xm(e,n,a){var o=ni();Eo(e,n,a,o)}function Eo(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vl(e))Wm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,b=f(g,a);if(c.hasEagerState=!0,c.eagerState=b,Kn(b,g))return Ml(e,n,c,0),qe===null&&yl(),!1}catch{}finally{}if(a=Ac(e,n,c,o),a!==null)return qn(a,e,o),qm(a,n,o),!0}return!1}function cf(e,n,a,o){if(o={lane:2,revertLane:Vf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vl(e)){if(n)throw Error(s(479))}else n=Ac(e,a,o,2),n!==null&&qn(n,e,2)}function Vl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Wm(e,n){lr=Pl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function qm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Qr(e,a)}}var bo={readContext:Cn,use:Fl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};bo.useEffectEvent=en;var Ym={readContext:Cn,use:Fl,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:Dm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Hl(4194308,4,Om.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Hl(4194308,4,e,n)},useInsertionEffect:function(e,n){Hl(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var o=e();if(Es){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Fn();if(a!==void 0){var c=a(n);if(Es){Ht(!0);try{a(n)}finally{Ht(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Gx.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=nf(e);var n=e.queue,a=Xm.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:rf,useDeferredValue:function(e,n){var a=Fn();return of(a,e,n)},useTransition:function(){var e=nf(!1);return e=Bm.bind(null,ue,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,c=Fn();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(Se&127)!==0||pm(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Dm(_m.bind(null,o,f,e),[e]),o.flags|=2048,cr(9,{destroy:void 0},mm.bind(null,o,f,a,n),null),a},useId:function(){var e=Fn(),n=qe.identifierPrefix;if(Me){var a=Pi,o=Oi;a=(o&~(1<<32-Ft(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ox++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:uf,useFormState:Tm,useActionState:Tm,useOptimistic:function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=cf.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:$c,useCacheRefresh:function(){return Fn().memoizedState=Hx.bind(null,ue)},useEffectEvent:function(e){var n=Fn(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ff={readContext:Cn,use:Fl,useCallback:zm,useContext:Cn,useEffect:sf,useImperativeHandle:Pm,useInsertionEffect:Nm,useLayoutEffect:Lm,useMemo:Im,useReducer:Bl,useRef:wm,useState:function(){return Bl(aa)},useDebugValue:rf,useDeferredValue:function(e,n){var a=rn();return Fm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Bl(aa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:dm,useId:Vm,useHostTransitionStatus:uf,useFormState:Am,useActionState:Am,useOptimistic:function(e,n){var a=rn();return xm(a,Ge,e,n)},useMemoCache:$c,useCacheRefresh:km};ff.useEffectEvent=Um;var jm={readContext:Cn,use:Fl,useCallback:zm,useContext:Cn,useEffect:sf,useImperativeHandle:Pm,useInsertionEffect:Nm,useLayoutEffect:Lm,useMemo:Im,useReducer:ef,useRef:wm,useState:function(){return ef(aa)},useDebugValue:rf,useDeferredValue:function(e,n){var a=rn();return Ge===null?of(a,e,n):Fm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=ef(aa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:dm,useId:Vm,useHostTransitionStatus:uf,useFormState:Cm,useActionState:Cm,useOptimistic:function(e,n){var a=rn();return Ge!==null?xm(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:$c,useCacheRefresh:km};jm.useEffectEvent=Um;function hf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var df={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ni(),c=Pa(o);c.payload=n,a!=null&&(c.callback=a),n=za(e,c,o),n!==null&&(qn(n,e,o),vo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ni(),c=Pa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=za(e,c,o),n!==null&&(qn(n,e,o),vo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ni(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=za(e,o,a),n!==null&&(qn(n,e,a),vo(n,e,a))}};function Zm(e,n,a,o,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,g):n.prototype&&n.prototype.isPureReactComponent?!uo(a,o)||!uo(c,f):!0}function Km(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&df.enqueueReplaceState(n,n.state,null)}function bs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Qm(e){Sl(e)}function Jm(e){console.error(e)}function $m(e){Sl(e)}function kl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function t0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function pf(e,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(e,n)},a}function e0(e){return e=Pa(e),e.tag=3,e}function n0(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){t0(n,a,o)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){t0(n,a,o),typeof c!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Vx(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&nr(n,a,c,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?eu():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Bf(e,o,c)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Bf(e,o,c)),!1}throw Error(s(435,a.tag))}return Bf(e,o,c),eu(),!1}if(Me)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Nc&&(e=Error(s(422),{cause:o}),ho(li(e,a)))):(o!==Nc&&(n=Error(s(423),{cause:o}),ho(li(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=li(o,a),c=pf(e.stateNode,o,c),kc(e,c),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:o});if(f=li(f,a),No===null?No=[f]:No.push(f),nn!==4&&(nn=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=pf(a.stateNode,o,e),kc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=e0(c),n0(c,e,a,o),kc(a,c),!1}a=a.return}while(a!==null);return!1}var mf=Error(s(461)),fn=!1;function wn(e,n,a,o){n.child=e===null?rm(n,null,a,o):Ms(n,e.child,a,o)}function i0(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var g={};for(var b in o)b!=="ref"&&(g[b]=o[b])}else g=o;return vs(n),o=Zc(e,n,a,g,f,c),b=Kc(),e!==null&&!fn?(Qc(e,n,c),sa(e,n,c)):(Me&&b&&Dc(n),n.flags|=1,wn(e,n,o,c),n.child)}function a0(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!Rc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,s0(e,n,f,o,c)):(e=bl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ef(e,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:uo,a(g,o)&&e.ref===n.ref)return sa(e,n,c)}return n.flags|=1,e=$i(f,o),e.ref=n.ref,e.return=n,n.child=e}function s0(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(uo(f,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=f,Ef(e,c))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,sa(e,n,c)}return _f(e,n,a,o,c)}function r0(e,n,a,o){var c=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return o0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cl(n,f!==null?f.cachePool:null),f!==null?um(n,f):Wc(),cm(n);else return o=n.lanes=536870912,o0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Cl(n,f.cachePool),um(n,f),Fa(),n.memoizedState=null):(e!==null&&Cl(n,null),Wc(),Fa());return wn(e,n,c,a),n.child}function To(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function o0(e,n,a,o,c){var f=Bc();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Cl(n,null),Wc(),cm(n),e!==null&&nr(e,n,o,!0),n.childLanes=c,null}function Xl(e,n){return n=ql({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function l0(e,n,a){return Ms(n,e.child,null,a),e=Xl(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function kx(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(o.mode==="hidden")return e=Xl(n,o),n.lanes=536870912,To(null,e);if(Yc(n),(e=je)?(e=S_(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Wp(e),a.return=n,n.child=a,Rn=n,je=null)):e=null,e===null)throw Na(n);return n.lanes=536870912,null}return Xl(n,o)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(Yc(n),c)if(n.flags&256)n.flags&=-257,n=l0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||nr(e,n,a,!1),c=(a&e.childLanes)!==0,fn||c){if(o=qe,o!==null&&(g=Gs(o,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,ps(e,g),qn(o,e,g),mf;eu(),n=l0(e,n,a)}else e=f.treeContext,je=di(g.nextSibling),Rn=n,Me=!0,Ua=null,fi=!1,e!==null&&jp(n,e),n=Xl(n,o),n.flags|=4096;return n}return e=$i(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function _f(e,n,a,o,c){return vs(n),a=Zc(e,n,a,o,void 0,c),o=Kc(),e!==null&&!fn?(Qc(e,n,c),sa(e,n,c)):(Me&&o&&Dc(n),n.flags|=1,wn(e,n,a,c),n.child)}function u0(e,n,a,o,c,f){return vs(n),n.updateQueue=null,a=hm(n,o,a,c),fm(e),o=Kc(),e!==null&&!fn?(Qc(e,n,f),sa(e,n,f)):(Me&&o&&Dc(n),n.flags|=1,wn(e,n,a,f),n.child)}function c0(e,n,a,o,c){if(vs(n),n.stateNode===null){var f=Js,g=a.contextType;typeof g=="object"&&g!==null&&(f=Cn(g)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=df,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Gc(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Cn(g):Js,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(hf(n,a,g,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&df.enqueueReplaceState(f,f.state,null),So(n,o,f,c),xo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,F=bs(a,b);f.props=F;var nt=f.context,pt=a.contextType;g=Js,typeof pt=="object"&&pt!==null&&(g=Cn(pt));var vt=a.getDerivedStateFromProps;pt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||nt!==g)&&Km(n,f,o,g),Oa=!1;var rt=n.memoizedState;f.state=rt,So(n,o,f,c),xo(),nt=n.memoizedState,b||rt!==nt||Oa?(typeof vt=="function"&&(hf(n,a,vt,o),nt=n.memoizedState),(F=Oa||Zm(n,a,F,o,rt,nt,g))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),f.props=o,f.state=nt,f.context=g,o=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Vc(e,n),g=n.memoizedProps,pt=bs(a,g),f.props=pt,vt=n.pendingProps,rt=f.context,nt=a.contextType,F=Js,typeof nt=="object"&&nt!==null&&(F=Cn(nt)),b=a.getDerivedStateFromProps,(nt=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==vt||rt!==F)&&Km(n,f,o,F),Oa=!1,rt=n.memoizedState,f.state=rt,So(n,o,f,c),xo();var ut=n.memoizedState;g!==vt||rt!==ut||Oa||e!==null&&e.dependencies!==null&&Al(e.dependencies)?(typeof b=="function"&&(hf(n,a,b,o),ut=n.memoizedState),(pt=Oa||Zm(n,a,pt,o,rt,ut,F)||e!==null&&e.dependencies!==null&&Al(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ut,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ut,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=F,o=pt):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Wl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ms(n,e.child,null,c),n.child=Ms(n,null,a,c)):wn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=sa(e,n,c),e}function f0(e,n,a,o){return _s(),n.flags|=256,wn(e,n,a,o),n.child}var gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vf(e){return{baseLanes:e,cachePool:tm()}}function xf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ei),e}function h0(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(c?Ia(n):Fa(),(e=je)?(e=S_(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Wp(e),a.return=n,n.child=a,Rn=n,je=null)):e=null,e===null)throw Na(n);return eh(e)?n.lanes=32:n.lanes=536870912,null}var b=o.children;return o=o.fallback,c?(Fa(),c=n.mode,b=ql({mode:"hidden",children:b},c),o=ms(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,o=n.child,o.memoizedState=vf(a),o.childLanes=xf(e,g,a),n.memoizedState=gf,To(null,o)):(Ia(n),Sf(n,b))}var F=e.memoizedState;if(F!==null&&(b=F.dehydrated,b!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=yf(e,n,a)):n.memoizedState!==null?(Fa(),n.child=e.child,n.flags|=128,n=null):(Fa(),b=o.fallback,c=n.mode,o=ql({mode:"visible",children:o.children},c),b=ms(b,c,a,null),b.flags|=2,o.return=n,b.return=n,o.sibling=b,n.child=o,Ms(n,e.child,null,a),o=n.child,o.memoizedState=vf(a),o.childLanes=xf(e,g,a),n.memoizedState=gf,n=To(null,o));else if(Ia(n),eh(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var nt=g.dgst;g=nt,o=Error(s(419)),o.stack="",o.digest=g,ho({value:o,source:null,stack:null}),n=yf(e,n,a)}else if(fn||nr(e,n,a,!1),g=(a&e.childLanes)!==0,fn||g){if(g=qe,g!==null&&(o=Gs(g,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,ps(e,o),qn(g,e,o),mf;th(b)||eu(),n=yf(e,n,a)}else th(b)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,je=di(b.nextSibling),Rn=n,Me=!0,Ua=null,fi=!1,e!==null&&jp(n,e),n=Sf(n,o.children),n.flags|=4096);return n}return c?(Fa(),b=o.fallback,c=n.mode,F=e.child,nt=F.sibling,o=$i(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,nt!==null?b=$i(nt,b):(b=ms(b,c,a,null),b.flags|=2),b.return=n,o.return=n,o.sibling=b,n.child=o,To(null,o),o=n.child,b=e.child.memoizedState,b===null?b=vf(a):(c=b.cachePool,c!==null?(F=un._currentValue,c=c.parent!==F?{parent:F,pool:F}:c):c=tm(),b={baseLanes:b.baseLanes|a,cachePool:c}),o.memoizedState=b,o.childLanes=xf(e,g,a),n.memoizedState=gf,To(e.child,o)):(Ia(n),a=e.child,e=a.sibling,a=$i(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function Sf(e,n){return n=ql({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ql(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function yf(e,n,a){return Ms(n,e.child,null,a),e=Sf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function d0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Pc(e.return,n,a)}function Mf(e,n,a,o,c,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=o,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function p0(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var g=sn.current,b=(g&2)!==0;if(b?(g=g&1|2,n.flags|=128):g&=1,mt(sn,g),wn(e,n,o,a),o=Me?fo:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&d0(e,a,n);else if(e.tag===19)d0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Ol(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Mf(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ol(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Mf(n,!0,a,null,f,o);break;case"together":Mf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function sa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(nr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=$i(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=$i(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ef(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Al(e)))}function Xx(e,n,a){switch(n.tag){case 3:xt(n,n.stateNode.containerInfo),La(n,un,e.memoizedState.cache),_s();break;case 27:case 5:Nt(n);break;case 4:xt(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Yc(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?h0(e,n,a):(Ia(n),e=sa(e,n,a),e!==null?e.sibling:null);Ia(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(nr(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return p0(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),mt(sn,sn.current),o)break;return null;case 22:return n.lanes=0,r0(e,n,a,n.pendingProps);case 24:La(n,un,e.memoizedState.cache)}return sa(e,n,a)}function m0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Ef(e,a)&&(n.flags&128)===0)return fn=!1,Xx(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Me&&(n.flags&1048576)!==0&&Yp(n,fo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ss(n.elementType),n.type=e,typeof e=="function")Rc(e)?(o=bs(e,o),n.tag=1,n=c0(null,n,e,o,a)):(n.tag=0,n=_f(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===N){n.tag=11,n=i0(null,n,e,o,a);break t}else if(c===z){n.tag=14,n=a0(null,n,e,o,a);break t}}throw n=dt(e)||e,Error(s(306,n,""))}}return n;case 0:return _f(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=bs(o,n.pendingProps),c0(e,n,o,c,a);case 3:t:{if(xt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Vc(e,n),So(n,o,null,a);var g=n.memoizedState;if(o=g.cache,La(n,un,o),o!==f.cache&&zc(n,[un],a,!0),xo(),o=g.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=f0(e,n,o,a);break t}else if(o!==c){c=li(Error(s(424)),n),ho(c),n=f0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=di(e.firstChild),Rn=n,Me=!0,Ua=null,fi=!0,a=rm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_s(),o===c){n=sa(e,n,a);break t}wn(e,n,o,a)}n=n.child}return n;case 26:return Wl(e,n),e===null?(a=A_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,o=lu(et.current).createElement(a),o[ln]=n,o[yn]=e,Dn(o,a,e),T(o),n.stateNode=o):n.memoizedState=A_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Nt(n),e===null&&Me&&(o=n.stateNode=E_(n.type,n.pendingProps,et.current),Rn=n,fi=!0,c=je,qa(n.type)?(nh=c,je=di(o.firstChild)):je=c),wn(e,n,n.pendingProps.children,a),Wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((c=o=je)&&(o=SS(o,n.type,n.pendingProps,fi),o!==null?(n.stateNode=o,Rn=n,je=di(o.firstChild),fi=!1,c=!0):c=!1),c||Na(n)),Nt(n),c=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,o=f.children,Qf(c,f)?o=null:g!==null&&Qf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Zc(e,n,Px,null,null,a),Ho._currentValue=c),Wl(e,n),wn(e,n,o,a),n.child;case 6:return e===null&&Me&&((e=a=je)&&(a=yS(a,n.pendingProps,fi),a!==null?(n.stateNode=a,Rn=n,je=null,e=!0):e=!1),e||Na(n)),null;case 13:return h0(e,n,a);case 4:return xt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ms(n,null,o,a):wn(e,n,o,a),n.child;case 11:return i0(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),wn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,vs(n),c=Cn(c),o=o(c),n.flags|=1,wn(e,n,o,a),n.child;case 14:return a0(e,n,n.type,n.pendingProps,a);case 15:return s0(e,n,n.type,n.pendingProps,a);case 19:return p0(e,n,a);case 31:return kx(e,n,a);case 22:return r0(e,n,a,n.pendingProps);case 24:return vs(n),o=Cn(un),e===null?(c=Bc(),c===null&&(c=qe,f=Ic(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Gc(n),La(n,un,c)):((e.lanes&a)!==0&&(Vc(e,n),So(n,null,null,a),xo()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),La(n,un,o)):(o=f.cache,La(n,un,o),o!==c.cache&&zc(n,[un],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ra(e){e.flags|=4}function bf(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(V0())e.flags|=8192;else throw ys=Dl,Hc}else e.flags&=-16777217}function _0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!U_(n))if(V0())e.flags|=8192;else throw ys=Dl,Hc}function Yl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pe():536870912,e.lanes|=n,pr|=n)}function Ao(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Wx(e,n,a){var o=n.pendingProps;switch(Uc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),na(un),wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(er(n)?ra(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lc())),Ze(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(ra(n),f!==null?(Ze(n),_0(n,f)):(Ze(n),bf(n,c,null,o,a))):f?f!==e.memoizedState?(ra(n),Ze(n),_0(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ra(n),Ze(n),bf(n,c,e,o,a)),null;case 27:if(ce(n),a=et.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=bt.current,er(n)?Zp(n):(e=E_(c,o,a),n.stateNode=e,ra(n))}return Ze(n),null;case 5:if(ce(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=bt.current,er(n))Zp(n);else{var g=lu(et.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?g.createElement("select",{is:o.is}):g.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?g.createElement(c,{is:o.is}):g.createElement(c)}}f[ln]=n,f[yn]=o;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Dn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ra(n)}}return Ze(n),bf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=et.current,er(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Rn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||h_(e.nodeValue,a)),e||Na(n,!0)}else e=lu(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=er(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else _s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=Lc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=er(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[ln]=n}else _s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=Lc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),Ze(n),null);case 4:return wt(),e===null&&qf(n.stateNode.containerInfo),Ze(n),null;case 10:return na(n.type),Ze(n),null;case 19:if(Z(sn),o=n.memoizedState,o===null)return Ze(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)Ao(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ol(e),f!==null){for(n.flags|=128,Ao(o,!1),e=f.updateQueue,n.updateQueue=e,Yl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Xp(a,e),a=a.sibling;return mt(sn,sn.current&1|2),Me&&ta(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&M()>Jl&&(n.flags|=128,c=!0,Ao(o,!1),n.lanes=4194304)}else{if(!c)if(e=Ol(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Yl(n,e),Ao(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Me)return Ze(n),null}else 2*M()-o.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,c=!0,Ao(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=M(),e.sibling=null,a=sn.current,mt(sn,c?a&1|2:a&1),Me&&ta(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return $n(n),qc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Z(xs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(un),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function qx(e,n){switch(Uc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return na(un),wt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));_s()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));_s()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(sn),null;case 4:return wt(),null;case 10:return na(n.type),null;case 22:case 23:return $n(n),qc(),e!==null&&Z(xs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return na(un),null;case 25:return null;default:return null}}function g0(e,n){switch(Uc(n),n.tag){case 3:na(un),wt();break;case 26:case 27:case 5:ce(n);break;case 4:wt();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:Z(sn);break;case 10:na(n.type);break;case 22:case 23:$n(n),qc(),e!==null&&Z(xs);break;case 24:na(un)}}function Ro(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,g=a.inst;o=f(),g.destroy=o}a=a.next}while(a!==c)}}catch(b){Fe(n,n.return,b)}}function Ba(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var g=o.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,c=n;var F=a,nt=b;try{nt()}catch(pt){Fe(c,F,pt)}}}o=o.next}while(o!==f)}}catch(pt){Fe(n,n.return,pt)}}function v0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{lm(n,a)}catch(o){Fe(e,e.return,o)}}}function x0(e,n,a){a.props=bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function Co(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Fe(e,n,c)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Fe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Fe(e,n,c)}else a.current=null}function S0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Fe(e,e.return,c)}}function Tf(e,n,a){try{var o=e.stateNode;pS(o,e.type,a,n),o[yn]=n}catch(c){Fe(e,e.return,c)}}function y0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qa(e.type)||e.tag===4}function Af(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||y0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qi));else if(o!==4&&(o===27&&qa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Rf(e,n,a),e=e.sibling;e!==null;)Rf(e,n,a),e=e.sibling}function jl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(jl(e,n,a),e=e.sibling;e!==null;)jl(e,n,a),e=e.sibling}function M0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Dn(n,o,a),n[ln]=e,n[yn]=a}catch(f){Fe(e,e.return,f)}}var oa=!1,hn=!1,Cf=!1,E0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function Yx(e,n){if(e=e.containerInfo,Zf=mu,e=Pp(e),Sc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,b=-1,F=-1,nt=0,pt=0,vt=e,rt=null;e:for(;;){for(var ut;vt!==a||c!==0&&vt.nodeType!==3||(b=g+c),vt!==f||o!==0&&vt.nodeType!==3||(F=g+o),vt.nodeType===3&&(g+=vt.nodeValue.length),(ut=vt.firstChild)!==null;)rt=vt,vt=ut;for(;;){if(vt===e)break e;if(rt===a&&++nt===c&&(b=g),rt===f&&++pt===o&&(F=g),(ut=vt.nextSibling)!==null)break;vt=rt,rt=vt.parentNode}vt=ut}a=b===-1||F===-1?null:{start:b,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kf={focusedElem:e,selectionRange:a},mu=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var kt=bs(a.type,c);e=o.getSnapshotBeforeUpdate(kt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Fe(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)$f(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$f(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function b0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),o&4&&Ro(5,a);break;case 1:if(ua(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Fe(a,a.return,g)}else{var c=bs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Fe(a,a.return,g)}}o&64&&v0(a),o&512&&Co(a,a.return);break;case 3:if(ua(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{lm(e,n)}catch(g){Fe(a,a.return,g)}}break;case 27:n===null&&o&4&&M0(a);case 26:case 5:ua(e,a),n===null&&o&4&&S0(a),o&512&&Co(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),o&4&&R0(e,a);break;case 13:ua(e,a),o&4&&C0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=nS.bind(null,a),MS(e,a))));break;case 22:if(o=a.memoizedState!==null||oa,!o){n=n!==null&&n.memoizedState!==null||hn,c=oa;var f=hn;oa=o,(hn=n)&&!f?ca(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),oa=c,hn=f}break;case 30:break;default:ua(e,a)}}function T0(e){var n=e.alternate;n!==null&&(e.alternate=null,T0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&eo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Vn=!1;function la(e,n,a){for(a=a.child;a!==null;)A0(e,n,a),a=a.sibling}function A0(e,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:hn||zi(a,n),la(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||zi(a,n);var o=Je,c=Vn;qa(a.type)&&(Je=a.stateNode,Vn=!1),la(e,n,a),Io(a.stateNode),Je=o,Vn=c;break;case 5:hn||zi(a,n);case 6:if(o=Je,c=Vn,Je=null,la(e,n,a),Je=o,Vn=c,Je!==null)if(Vn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Je!==null&&(Vn?(e=Je,v_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Mr(e)):v_(Je,a.stateNode));break;case 4:o=Je,c=Vn,Je=a.stateNode.containerInfo,Vn=!0,la(e,n,a),Je=o,Vn=c;break;case 0:case 11:case 14:case 15:Ba(2,a,n),hn||Ba(4,a,n),la(e,n,a);break;case 1:hn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&x0(a,n,o)),la(e,n,a);break;case 21:la(e,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,la(e,n,a),hn=o;break;default:la(e,n,a)}}function R0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mr(e)}catch(a){Fe(n,n.return,a)}}}function C0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mr(e)}catch(a){Fe(n,n.return,a)}}function jx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new E0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new E0),n;default:throw Error(s(435,e.tag))}}function Zl(e,n){var a=jx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=iS.bind(null,e,o);o.then(c,c)}})}function kn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,g=n,b=g;t:for(;b!==null;){switch(b.tag){case 27:if(qa(b.type)){Je=b.stateNode,Vn=!1;break t}break;case 5:Je=b.stateNode,Vn=!1;break t;case 3:case 4:Je=b.stateNode.containerInfo,Vn=!0;break t}b=b.return}if(Je===null)throw Error(s(160));A0(f,g,c),Je=null,Vn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)w0(n,e),n=n.sibling}var Ti=null;function w0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Xn(e),o&4&&(Ba(3,e,e.return),Ro(3,e),Ba(5,e,e.return));break;case 1:kn(n,e),Xn(e),o&512&&(hn||a===null||zi(a,a.return)),o&64&&oa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Ti;if(kn(n,e),Xn(e),o&512&&(hn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[us]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Dn(f,o,a),f[ln]=e,T(f),o=f;break t;case"link":var g=w_("link","href",c).get(o+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(f=g[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break e}}f=c.createElement(o),Dn(f,o,a),c.head.appendChild(f);break;case"meta":if(g=w_("meta","content",c).get(o+(a.content||""))){for(b=0;b<g.length;b++)if(f=g[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break e}}f=c.createElement(o),Dn(f,o,a),c.head.appendChild(f);break;default:throw Error(s(468,o))}f[ln]=e,T(f),o=f}e.stateNode=o}else D_(c,e.type,e.stateNode);else e.stateNode=C_(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?D_(c,e.type,e.stateNode):C_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Tf(e,e.memoizedProps,a.memoizedProps)}break;case 27:kn(n,e),Xn(e),o&512&&(hn||a===null||zi(a,a.return)),a!==null&&o&4&&Tf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,e),Xn(e),o&512&&(hn||a===null||zi(a,a.return)),e.flags&32){c=e.stateNode;try{pn(c,"")}catch(kt){Fe(e,e.return,kt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Tf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Cf=!0);break;case 6:if(kn(n,e),Xn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(kt){Fe(e,e.return,kt)}}break;case 3:if(fu=null,c=Ti,Ti=uu(n.containerInfo),kn(n,e),Ti=c,Xn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Mr(n.containerInfo)}catch(kt){Fe(e,e.return,kt)}Cf&&(Cf=!1,D0(e));break;case 4:o=Ti,Ti=uu(e.stateNode.containerInfo),kn(n,e),Xn(e),Ti=o;break;case 12:kn(n,e),Xn(e);break;case 31:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 13:kn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=M()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 22:c=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,nt=oa,pt=hn;if(oa=nt||c,hn=pt||F,kn(n,e),hn=pt,oa=nt,Xn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||oa||hn||Ts(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=F.stateNode;var vt=F.memoizedProps.style,rt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;b.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(kt){Fe(F,F.return,kt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(kt){Fe(F,F.return,kt)}}}else if(n.tag===18){if(a===null){F=n;try{var ut=F.stateNode;c?x_(ut,!0):x_(F.stateNode,!1)}catch(kt){Fe(F,F.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Zl(e,a))));break;case 19:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 30:break;case 21:break;default:kn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(y0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=Af(e);jl(e,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(pn(g,""),a.flags&=-33);var b=Af(e);jl(e,b,g);break;case 3:case 4:var F=a.stateNode.containerInfo,nt=Af(e);Rf(e,nt,F);break;default:throw Error(s(161))}}catch(pt){Fe(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function D0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;D0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ua(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)b0(e,n.alternate,n),n=n.sibling}function Ts(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),Ts(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&x0(n,n.return,a),Ts(n);break;case 27:Io(n.stateNode);case 26:case 5:zi(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}e=e.sibling}}function ca(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:ca(c,f,a),Ro(4,f);break;case 1:if(ca(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(nt){Fe(o,o.return,nt)}if(o=f,c=o.updateQueue,c!==null){var b=o.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)om(F[c],b)}catch(nt){Fe(o,o.return,nt)}}a&&g&64&&v0(f),Co(f,f.return);break;case 27:M0(f);case 26:case 5:ca(c,f,a),a&&o===null&&g&4&&S0(f),Co(f,f.return);break;case 12:ca(c,f,a);break;case 31:ca(c,f,a),a&&g&4&&R0(c,f);break;case 13:ca(c,f,a),a&&g&4&&C0(c,f);break;case 22:f.memoizedState===null&&ca(c,f,a),Co(f,f.return);break;case 30:break;default:ca(c,f,a)}n=n.sibling}}function wf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&po(a))}function Df(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e))}function Ai(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)U0(e,n,a,o),n=n.sibling}function U0(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(e,n,a,o),c&2048&&Ro(9,n);break;case 1:Ai(e,n,a,o);break;case 3:Ai(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e)));break;case 12:if(c&2048){Ai(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,b=f.onPostCommit;typeof b=="function"&&b(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Fe(n,n.return,F)}}else Ai(e,n,a,o);break;case 31:Ai(e,n,a,o);break;case 13:Ai(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Ai(e,n,a,o):wo(e,n):f._visibility&2?Ai(e,n,a,o):(f._visibility|=2,fr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&wf(g,n);break;case 24:Ai(e,n,a,o),c&2048&&Df(n.alternate,n);break;default:Ai(e,n,a,o)}}function fr(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,b=a,F=o,nt=g.flags;switch(g.tag){case 0:case 11:case 15:fr(f,g,b,F,c),Ro(8,g);break;case 23:break;case 22:var pt=g.stateNode;g.memoizedState!==null?pt._visibility&2?fr(f,g,b,F,c):wo(f,g):(pt._visibility|=2,fr(f,g,b,F,c)),c&&nt&2048&&wf(g.alternate,g);break;case 24:fr(f,g,b,F,c),c&&nt&2048&&Df(g.alternate,g);break;default:fr(f,g,b,F,c)}n=n.sibling}}function wo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:wo(a,o),c&2048&&wf(o.alternate,o);break;case 24:wo(a,o),c&2048&&Df(o.alternate,o);break;default:wo(a,o)}n=n.sibling}}var Do=8192;function hr(e,n,a){if(e.subtreeFlags&Do)for(e=e.child;e!==null;)N0(e,n,a),e=e.sibling}function N0(e,n,a){switch(e.tag){case 26:hr(e,n,a),e.flags&Do&&e.memoizedState!==null&&OS(a,Ti,e.memoizedState,e.memoizedProps);break;case 5:hr(e,n,a);break;case 3:case 4:var o=Ti;Ti=uu(e.stateNode.containerInfo),hr(e,n,a),Ti=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Do,Do=16777216,hr(e,n,a),Do=o):hr(e,n,a));break;default:hr(e,n,a)}}function L0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,P0(o,e)}L0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)O0(e),e=e.sibling}function O0(e){switch(e.tag){case 0:case 11:case 15:Uo(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:Uo(e);break;case 12:Uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Kl(e)):Uo(e);break;default:Uo(e)}}function Kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,P0(o,e)}L0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}e=e.sibling}}function P0(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:po(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var c=o.sibling,f=o.return;if(T0(o),o===a){xn=null;break t}if(c!==null){c.return=f,xn=c;break t}xn=f}}}var Zx={getCacheForType:function(e){var n=Cn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(un).controller.signal}},Kx=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,_e=null,Se=0,Ie=0,ti=null,Ha=!1,dr=!1,Uf=!1,fa=0,nn=0,Ga=0,As=0,Nf=0,ei=0,pr=0,No=null,Wn=null,Lf=!1,Ql=0,z0=0,Jl=1/0,$l=null,Va=null,mn=0,ka=null,mr=null,ha=0,Of=0,Pf=null,I0=null,Lo=0,zf=null;function ni(){return(Ne&2)!==0&&Se!==0?Se&-Se:O.T!==null?Vf():$r()}function F0(){if(ei===0)if((Se&536870912)===0||Me){var e=At;At<<=1,(At&3932160)===0&&(At=262144),ei=e}else ei=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ei}function qn(e,n,a){(e===qe&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(_r(e,0),Xa(e,Se,ei,!1)),Nn(e,a),((Ne&2)===0||e!==qe)&&(e===qe&&((Ne&2)===0&&(As|=a),nn===4&&Xa(e,Se,ei,!1)),Ii(e))}function B0(e,n,a){if((Ne&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Rt(e,n),c=o?$x(e,n):Ff(e,n,!0),f=o;do{if(c===0){dr&&!o&&Xa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Qx(a)){c=Ff(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var b=e;c=No;var F=b.current.memoizedState.isDehydrated;if(F&&(_r(b,g).flags|=256),g=Ff(b,g,!1),g!==2){if(Uf&&!F){b.errorRecoveryDisabledLanes|=f,As|=f,c=4;break t}f=Wn,Wn=c,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){_r(e,0),Xa(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ei,!Ha);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Ql+300-M(),10<c)){if(Xa(o,n,ei,!Ha),St(o,0,!0)!==0)break t;ha=n,o.timeoutHandle=__(H0.bind(null,o,a,Wn,$l,Lf,n,ei,As,pr,Ha,f,"Throttled",-0,0),c);break t}H0(o,a,Wn,$l,Lf,n,ei,As,pr,Ha,f,null,-0,0)}}break}while(!0);Ii(e)}function H0(e,n,a,o,c,f,g,b,F,nt,pt,vt,rt,ut){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},N0(n,f,vt);var kt=(f&62914560)===f?Ql-M():(f&4194048)===f?z0-M():0;if(kt=PS(vt,kt),kt!==null){ha=f,e.cancelPendingCommit=kt(j0.bind(null,e,n,f,a,o,c,g,b,F,pt,vt,null,rt,ut)),Xa(e,f,g,!nt);return}}j0(e,n,f,a,o,c,g,b,F)}function Qx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(e,n,a,o){n&=~Nf,n&=~As,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Ft(c),g=1<<f;o[f]=-1,c&=~g}a!==0&&fl(e,a,n)}function tu(){return(Ne&6)===0?(Oo(0),!1):!0}function If(){if(_e!==null){if(Ie===0)var e=_e.return;else e=_e,ea=gs=null,Jc(e),rr=null,_o=0,e=_e;for(;e!==null;)g0(e.alternate,e),e=e.return;_e=null}}function _r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,gS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ha=0,If(),qe=e,_e=a=$i(e.current,null),Se=n,Ie=0,ti=null,Ha=!1,dr=Rt(e,n),Uf=!1,pr=ei=Nf=As=Ga=nn=0,Wn=No=null,Lf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Ft(o),f=1<<c;n|=e[c],o&=~f}return fa=n,yl(),a}function G0(e,n){ue=null,O.H=bo,n===sr||n===wl?(n=im(),Ie=3):n===Hc?(n=im(),Ie=4):Ie=n===mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,_e===null&&(nn=1,kl(e,li(n,e.current)))}function V0(){var e=Jn.current;return e===null?!0:(Se&4194048)===Se?hi===null:(Se&62914560)===Se||(Se&536870912)!==0?e===hi:!1}function k0(){var e=O.H;return O.H=bo,e===null?bo:e}function X0(){var e=O.A;return O.A=Zx,e}function eu(){nn=4,Ha||(Se&4194048)!==Se&&Jn.current!==null||(dr=!0),(Ga&134217727)===0&&(As&134217727)===0||qe===null||Xa(qe,Se,ei,!1)}function Ff(e,n,a){var o=Ne;Ne|=2;var c=k0(),f=X0();(qe!==e||Se!==n)&&($l=null,_r(e,n)),n=!1;var g=nn;t:do try{if(Ie!==0&&_e!==null){var b=_e,F=ti;switch(Ie){case 8:If(),g=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var nt=Ie;if(Ie=0,ti=null,gr(e,b,F,nt),a&&dr){g=0;break t}break;default:nt=Ie,Ie=0,ti=null,gr(e,b,F,nt)}}Jx(),g=nn;break}catch(pt){G0(e,pt)}while(!0);return n&&e.shellSuspendCounter++,ea=gs=null,Ne=o,O.H=c,O.A=f,_e===null&&(qe=null,Se=0,yl()),g}function Jx(){for(;_e!==null;)W0(_e)}function $x(e,n){var a=Ne;Ne|=2;var o=k0(),c=X0();qe!==e||Se!==n?($l=null,Jl=M()+500,_r(e,n)):dr=Rt(e,n);t:do try{if(Ie!==0&&_e!==null){n=_e;var f=ti;e:switch(Ie){case 1:Ie=0,ti=null,gr(e,n,f,1);break;case 2:case 9:if(em(f)){Ie=0,ti=null,q0(n);break}n=function(){Ie!==2&&Ie!==9||qe!==e||(Ie=7),Ii(e)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:em(f)?(Ie=0,ti=null,q0(n)):(Ie=0,ti=null,gr(e,n,f,7));break;case 5:var g=null;switch(_e.tag){case 26:g=_e.memoizedState;case 5:case 27:var b=_e;if(g?U_(g):b.stateNode.complete){Ie=0,ti=null;var F=b.sibling;if(F!==null)_e=F;else{var nt=b.return;nt!==null?(_e=nt,nu(nt)):_e=null}break e}}Ie=0,ti=null,gr(e,n,f,5);break;case 6:Ie=0,ti=null,gr(e,n,f,6);break;case 8:If(),nn=6;break t;default:throw Error(s(462))}}tS();break}catch(pt){G0(e,pt)}while(!0);return ea=gs=null,O.H=o,O.A=c,Ne=a,_e!==null?0:(qe=null,Se=0,yl(),nn)}function tS(){for(;_e!==null&&!Yt();)W0(_e)}function W0(e){var n=m0(e.alternate,e,fa);e.memoizedProps=e.pendingProps,n===null?nu(e):_e=n}function q0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=u0(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=u0(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Jc(n);default:g0(a,n),n=_e=Xp(n,fa),n=m0(a,n,fa)}e.memoizedProps=e.pendingProps,n===null?nu(e):_e=n}function gr(e,n,a,o){ea=gs=null,Jc(n),rr=null,_o=0;var c=n.return;try{if(Vx(e,c,n,a,Se)){nn=1,kl(e,li(a,e.current)),_e=null;return}}catch(f){if(c!==null)throw _e=c,f;nn=1,kl(e,li(a,e.current)),_e=null;return}n.flags&32768?(Me||o===1?e=!0:dr||(Se&536870912)!==0?e=!1:(Ha=e=!0,(o===2||o===9||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Y0(n,e)):nu(n)}function nu(e){var n=e;do{if((n.flags&32768)!==0){Y0(n,Ha);return}e=n.return;var a=Wx(n.alternate,n,fa);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);nn===0&&(nn=5)}function Y0(e,n){do{var a=qx(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);nn=6,_e=null}function j0(e,n,a,o,c,f,g,b,F){e.cancelPendingCommit=null;do iu();while(mn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Tc,yi(e,a,f,g,b,F),e===qe&&(_e=qe=null,Se=0),mr=n,ka=e,ha=a,Of=f,Pf=c,I0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,aS(ct,function(){return $0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,c=H.p,H.p=2,g=Ne,Ne|=4;try{Yx(e,n,a)}finally{Ne=g,H.p=c,O.T=o}}mn=1,Z0(),K0(),Q0()}}function Z0(){if(mn===1){mn=0;var e=ka,n=mr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var c=Ne;Ne|=4;try{w0(n,e);var f=Kf,g=Pp(e.containerInfo),b=f.focusedElem,F=f.selectionRange;if(g!==b&&b&&b.ownerDocument&&Op(b.ownerDocument.documentElement,b)){if(F!==null&&Sc(b)){var nt=F.start,pt=F.end;if(pt===void 0&&(pt=nt),"selectionStart"in b)b.selectionStart=nt,b.selectionEnd=Math.min(pt,b.value.length);else{var vt=b.ownerDocument||document,rt=vt&&vt.defaultView||window;if(rt.getSelection){var ut=rt.getSelection(),kt=b.textContent.length,te=Math.min(F.start,kt),ke=F.end===void 0?te:Math.min(F.end,kt);!ut.extend&&te>ke&&(g=ke,ke=te,te=g);var j=Lp(b,te),V=Lp(b,ke);if(j&&V&&(ut.rangeCount!==1||ut.anchorNode!==j.node||ut.anchorOffset!==j.offset||ut.focusNode!==V.node||ut.focusOffset!==V.offset)){var tt=vt.createRange();tt.setStart(j.node,j.offset),ut.removeAllRanges(),te>ke?(ut.addRange(tt),ut.extend(V.node,V.offset)):(tt.setEnd(V.node,V.offset),ut.addRange(tt))}}}}for(vt=[],ut=b;ut=ut.parentNode;)ut.nodeType===1&&vt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<vt.length;b++){var gt=vt[b];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}mu=!!Zf,Kf=Zf=null}finally{Ne=c,H.p=o,O.T=a}}e.current=n,mn=2}}function K0(){if(mn===2){mn=0;var e=ka,n=mr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var c=Ne;Ne|=4;try{b0(e,n.alternate,n)}finally{Ne=c,H.p=o,O.T=a}}mn=3}}function Q0(){if(mn===4||mn===3){mn=0,U();var e=ka,n=mr,a=ha,o=I0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,mr=ka=null,J0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Va=null),Vs(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,c=H.p,H.p=2,O.T=null;try{for(var f=e.onRecoverableError,g=0;g<o.length;g++){var b=o[g];f(b.value,{componentStack:b.stack})}}finally{O.T=n,H.p=c}}(ha&3)!==0&&iu(),Ii(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===zf?Lo++:(Lo=0,zf=e):Lo=0,Oo(0)}}function J0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,po(n)))}function iu(){return Z0(),K0(),Q0(),$0()}function $0(){if(mn!==5)return!1;var e=ka,n=Of;Of=0;var a=Vs(ha),o=O.T,c=H.p;try{H.p=32>a?32:a,O.T=null,a=Pf,Pf=null;var f=ka,g=ha;if(mn=0,mr=ka=null,ha=0,(Ne&6)!==0)throw Error(s(331));var b=Ne;if(Ne|=4,O0(f.current),U0(f,f.current,g,a),Ne=b,Oo(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Et,f)}catch{}return!0}finally{H.p=c,O.T=o,J0(e,n)}}function t_(e,n,a){n=li(a,n),n=pf(e.stateNode,n,2),e=za(e,n,2),e!==null&&(Nn(e,2),Ii(e))}function Fe(e,n,a){if(e.tag===3)t_(e,e,a);else for(;n!==null;){if(n.tag===3){t_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){e=li(a,e),a=e0(2),o=za(n,a,2),o!==null&&(n0(a,o,n,e),Nn(o,2),Ii(o));break}}n=n.return}}function Bf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Kx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Uf=!0,c.add(a),e=eS.bind(null,e,n,a),n.then(e,e))}function eS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(Se&a)===a&&(nn===4||nn===3&&(Se&62914560)===Se&&300>M()-Ql?(Ne&2)===0&&_r(e,0):Nf|=a,pr===Se&&(pr=0)),Ii(e)}function e_(e,n){n===0&&(n=Pe()),e=ps(e,n),e!==null&&(Nn(e,n),Ii(e))}function nS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),e_(e,a)}function iS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),e_(e,a)}function aS(e,n){return Ee(e,n)}var au=null,vr=null,Hf=!1,su=!1,Gf=!1,Wa=0;function Ii(e){e!==vr&&e.next===null&&(vr===null?au=vr=e:vr=vr.next=e),su=!0,Hf||(Hf=!0,rS())}function Oo(e,n){if(!Gf&&su){Gf=!0;do for(var a=!1,o=au;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var g=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Ft(42|e)+1)-1,f&=c&~(g&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,s_(o,f))}else f=Se,f=St(o,o===qe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Rt(o,f)||(a=!0,s_(o,f));o=o.next}while(a);Gf=!1}}function sS(){n_()}function n_(){su=Hf=!1;var e=0;Wa!==0&&_S()&&(e=Wa);for(var n=M(),a=null,o=au;o!==null;){var c=o.next,f=i_(o,n);f===0?(o.next=null,a===null?au=c:a.next=c,c===null&&(vr=a)):(a=o,(e!==0||(f&3)!==0)&&(su=!0)),o=c}mn!==0&&mn!==5||Oo(e),Wa!==0&&(Wa=0)}function i_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Ft(f),b=1<<g,F=c[g];F===-1?((b&a)===0||(b&o)!==0)&&(c[g]=ae(b,n)):F<=n&&(e.expiredLanes|=b),f&=~b}if(n=qe,a=Se,a=St(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Le(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Le(o),Vs(a)){case 2:case 8:a=yt;break;case 32:a=ct;break;case 268435456:a=Dt;break;default:a=ct}return o=a_.bind(null,e),a=Ee(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Le(o),e.callbackPriority=2,e.callbackNode=null,2}function a_(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(iu()&&e.callbackNode!==a)return null;var o=Se;return o=St(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(B0(e,o,n),i_(e,M()),e.callbackNode!=null&&e.callbackNode===a?a_.bind(null,e):null)}function s_(e,n){if(iu())return null;B0(e,n,!0)}function rS(){vS(function(){(Ne&6)!==0?Ee(_t,sS):n_()})}function Vf(){if(Wa===0){var e=ir;e===0&&(e=Pt,Pt<<=1,(Pt&261888)===0&&(Pt=256)),Wa=e}return Wa}function r_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:dl(""+e)}function o_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function oS(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=r_((c[yn]||null).action),g=o.submitter;g&&(n=(n=g[yn]||null)?r_(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var b=new gl("action","action",null,o,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var F=g?o_(c,g):new FormData(c);lf(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(b.preventDefault(),F=g?o_(c,g):new FormData(c),lf(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var kf=0;kf<bc.length;kf++){var Xf=bc[kf],lS=Xf.toLowerCase(),uS=Xf[0].toUpperCase()+Xf.slice(1);bi(lS,"on"+uS)}bi(Fp,"onAnimationEnd"),bi(Bp,"onAnimationIteration"),bi(Hp,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(Tx,"onTransitionRun"),bi(Ax,"onTransitionStart"),bi(Rx,"onTransitionCancel"),bi(Gp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function l_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var g=o.length-1;0<=g;g--){var b=o[g],F=b.instance,nt=b.currentTarget;if(b=b.listener,F!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=nt;try{f(c)}catch(pt){Sl(pt)}c.currentTarget=null,f=F}else for(g=0;g<o.length;g++){if(b=o[g],F=b.instance,nt=b.currentTarget,b=b.listener,F!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=nt;try{f(c)}catch(pt){Sl(pt)}c.currentTarget=null,f=F}}}}function ge(e,n){var a=n[ks];a===void 0&&(a=n[ks]=new Set);var o=e+"__bubble";a.has(o)||(u_(n,e,2,!1),a.add(o))}function Wf(e,n,a){var o=0;n&&(o|=4),u_(a,e,o,n)}var ru="_reactListening"+Math.random().toString(36).slice(2);function qf(e){if(!e[ru]){e[ru]=!0,Y.forEach(function(a){a!=="selectionchange"&&(cS.has(a)||Wf(a,!1,e),Wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ru]||(n[ru]=!0,Wf("selectionchange",!1,n))}}function u_(e,n,a,o){switch(F_(n)){case 2:var c=FS;break;case 8:c=BS;break;default:c=oh}a=c.bind(null,n,a,e),c=void 0,!fc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Yf(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var g=o.tag;if(g===3||g===4){var b=o.stateNode.containerInfo;if(b===c)break;if(g===4)for(g=o.return;g!==null;){var F=g.tag;if((F===3||F===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;b!==null;){if(g=Aa(b),g===null)return;if(F=g.tag,F===5||F===6||F===26||F===27){o=f=g;continue t}b=b.parentNode}}o=o.return}pp(function(){var nt=f,pt=uc(a),vt=[];t:{var rt=Vp.get(e);if(rt!==void 0){var ut=gl,kt=e;switch(e){case"keypress":if(ml(a)===0)break t;case"keydown":case"keyup":ut=ix;break;case"focusin":kt="focus",ut=mc;break;case"focusout":kt="blur",ut=mc;break;case"beforeblur":case"afterblur":ut=mc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=rx;break;case Fp:case Bp:case Hp:ut=jv;break;case Gp:ut=lx;break;case"scroll":case"scrollend":ut=kv;break;case"wheel":ut=cx;break;case"copy":case"cut":case"paste":ut=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=xp;break;case"toggle":case"beforetoggle":ut=hx}var te=(n&4)!==0,ke=!te&&(e==="scroll"||e==="scrollend"),j=te?rt!==null?rt+"Capture":null:rt;te=[];for(var V=nt,tt;V!==null;){var gt=V;if(tt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||tt===null||j===null||(gt=no(V,j),gt!=null&&te.push(zo(V,gt,tt))),ke)break;V=V.return}0<te.length&&(rt=new ut(rt,kt,null,a,pt),vt.push({event:rt,listeners:te}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",rt&&a!==lc&&(kt=a.relatedTarget||a.fromElement)&&(Aa(kt)||kt[Mi]))break t;if((ut||rt)&&(rt=pt.window===pt?pt:(rt=pt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ut?(kt=a.relatedTarget||a.toElement,ut=nt,kt=kt?Aa(kt):null,kt!==null&&(ke=u(kt),te=kt.tag,kt!==ke||te!==5&&te!==27&&te!==6)&&(kt=null)):(ut=null,kt=nt),ut!==kt)){if(te=gp,gt="onMouseLeave",j="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(te=xp,gt="onPointerLeave",j="onPointerEnter",V="pointer"),ke=ut==null?rt:cs(ut),tt=kt==null?rt:cs(kt),rt=new te(gt,V+"leave",ut,a,pt),rt.target=ke,rt.relatedTarget=tt,gt=null,Aa(pt)===nt&&(te=new te(j,V+"enter",kt,a,pt),te.target=tt,te.relatedTarget=ke,gt=te),ke=gt,ut&&kt)e:{for(te=fS,j=ut,V=kt,tt=0,gt=j;gt;gt=te(gt))tt++;gt=0;for(var Qt=V;Qt;Qt=te(Qt))gt++;for(;0<tt-gt;)j=te(j),tt--;for(;0<gt-tt;)V=te(V),gt--;for(;tt--;){if(j===V||V!==null&&j===V.alternate){te=j;break e}j=te(j),V=te(V)}te=null}else te=null;ut!==null&&c_(vt,rt,ut,te,!1),kt!==null&&ke!==null&&c_(vt,ke,kt,te,!0)}}t:{if(rt=nt?cs(nt):window,ut=rt.nodeName&&rt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&rt.type==="file")var Re=Rp;else if(Tp(rt))if(Cp)Re=Mx;else{Re=Sx;var jt=xx}else ut=rt.nodeName,!ut||ut.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&Ei(nt.elementType)&&(Re=Rp):Re=yx;if(Re&&(Re=Re(e,nt))){Ap(vt,Re,a,pt);break t}jt&&jt(e,rt,nt),e==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&En(rt,"number",rt.value)}switch(jt=nt?cs(nt):window,e){case"focusin":(Tp(jt)||jt.contentEditable==="true")&&(Zs=jt,yc=nt,co=null);break;case"focusout":co=yc=Zs=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,zp(vt,a,pt);break;case"selectionchange":if(bx)break;case"keydown":case"keyup":zp(vt,a,pt)}var he;if(gc)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else js?Ep(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Sp&&a.locale!=="ko"&&(js||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&js&&(he=mp()):(wa=pt,hc="value"in wa?wa.value:wa.textContent,js=!0)),jt=ou(nt,ye),0<jt.length&&(ye=new vp(ye,e,null,a,pt),vt.push({event:ye,listeners:jt}),he?ye.data=he:(he=bp(a),he!==null&&(ye.data=he)))),(he=px?mx(e,a):_x(e,a))&&(ye=ou(nt,"onBeforeInput"),0<ye.length&&(jt=new vp("onBeforeInput","beforeinput",null,a,pt),vt.push({event:jt,listeners:ye}),jt.data=he)),oS(vt,e,nt,a,pt)}l_(vt,n)})}function zo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ou(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=no(e,a),c!=null&&o.unshift(zo(e,c,f)),c=no(e,n),c!=null&&o.push(zo(e,c,f))),e.tag===3)return o;e=e.return}return[]}function fS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function c_(e,n,a,o,c){for(var f=n._reactName,g=[];a!==null&&a!==o;){var b=a,F=b.alternate,nt=b.stateNode;if(b=b.tag,F!==null&&F===o)break;b!==5&&b!==26&&b!==27||nt===null||(F=nt,c?(nt=no(a,f),nt!=null&&g.unshift(zo(a,nt,F))):c||(nt=no(a,f),nt!=null&&g.push(zo(a,nt,F)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var hS=/\r\n?/g,dS=/\u0000|\uFFFD/g;function f_(e){return(typeof e=="string"?e:""+e).replace(hS,`
`).replace(dS,"")}function h_(e,n){return n=f_(n),f_(e)===n}function Ve(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pn(e,""+o);break;case"className":Jt(e,"class",o);break;case"tabIndex":Jt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(e,a,o);break;case"style":Ws(e,o,f);break;case"data":if(n!=="object"){Jt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=dl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",c.name,c,null),Ve(e,n,"formEncType",c.formEncType,c,null),Ve(e,n,"formMethod",c.formMethod,c,null),Ve(e,n,"formTarget",c.formTarget,c,null)):(Ve(e,n,"encType",c.encType,c,null),Ve(e,n,"method",c.method,c,null),Ve(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=dl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=dl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Wt(e,"popover",o);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Wt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gv.get(a)||a,Wt(e,a,o))}}function jf(e,n,a,o,c,f){switch(a){case"style":Ws(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?pn(e,o):(typeof o=="number"||typeof o=="bigint")&&pn(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Wt(e,a,o)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,f,g,a,null)}}c&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var b=f=g=c=null,F=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":c=pt;break;case"type":g=pt;break;case"checked":F=pt;break;case"defaultChecked":nt=pt;break;case"value":f=pt;break;case"defaultValue":b=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:Ve(e,n,o,pt,a,null)}}Ki(e,f,b,F,nt,g,c,!1);return;case"select":ge("invalid",e),o=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":g=b;break;case"multiple":o=b;default:Ve(e,n,c,b,a,null)}n=f,a=g,e.multiple=!!o,n!=null?ri(e,!!o,n,!1):a!=null&&ri(e,!!o,a,!0);return;case"textarea":ge("invalid",e),f=c=o=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":o=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ve(e,n,g,b,a,null)}bn(e,o,c,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ve(e,n,F,o,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<Po.length;o++)ge(Po[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,nt,o,a,null)}return;default:if(Ei(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&jf(e,n,pt,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Ve(e,n,b,o,a,null))}function pS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,b=null,F=null,nt=null,pt=null;for(ut in a){var vt=a[ut];if(a.hasOwnProperty(ut)&&vt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":F=vt;default:o.hasOwnProperty(ut)||Ve(e,n,ut,null,o,vt)}}for(var rt in o){var ut=o[rt];if(vt=a[rt],o.hasOwnProperty(rt)&&(ut!=null||vt!=null))switch(rt){case"type":f=ut;break;case"name":c=ut;break;case"checked":nt=ut;break;case"defaultChecked":pt=ut;break;case"value":g=ut;break;case"defaultValue":b=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==vt&&Ve(e,n,rt,ut,o,vt)}}Mn(e,g,b,F,nt,pt,f,c);return;case"select":ut=g=b=rt=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ut=F;default:o.hasOwnProperty(f)||Ve(e,n,f,null,o,F)}for(c in o)if(f=o[c],F=a[c],o.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":rt=f;break;case"defaultValue":b=f;break;case"multiple":g=f;default:f!==F&&Ve(e,n,c,f,o,F)}n=b,a=g,o=ut,rt!=null?ri(e,!!a,rt,!1):!!o!=!!a&&(n!=null?ri(e,!!a,n,!0):ri(e,!!a,a?[]:"",!1));return;case"textarea":ut=rt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ve(e,n,b,null,o,c)}for(g in o)if(c=o[g],f=a[g],o.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":rt=c;break;case"defaultValue":ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ve(e,n,g,c,o,f)}ze(e,rt,ut);return;case"option":for(var kt in a)if(rt=a[kt],a.hasOwnProperty(kt)&&rt!=null&&!o.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Ve(e,n,kt,null,o,rt)}for(F in o)if(rt=o[F],ut=a[F],o.hasOwnProperty(F)&&rt!==ut&&(rt!=null||ut!=null))switch(F){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Ve(e,n,F,rt,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)rt=a[te],a.hasOwnProperty(te)&&rt!=null&&!o.hasOwnProperty(te)&&Ve(e,n,te,null,o,rt);for(nt in o)if(rt=o[nt],ut=a[nt],o.hasOwnProperty(nt)&&rt!==ut&&(rt!=null||ut!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:Ve(e,n,nt,rt,o,ut)}return;default:if(Ei(n)){for(var ke in a)rt=a[ke],a.hasOwnProperty(ke)&&rt!==void 0&&!o.hasOwnProperty(ke)&&jf(e,n,ke,void 0,o,rt);for(pt in o)rt=o[pt],ut=a[pt],!o.hasOwnProperty(pt)||rt===ut||rt===void 0&&ut===void 0||jf(e,n,pt,rt,o,ut);return}}for(var j in a)rt=a[j],a.hasOwnProperty(j)&&rt!=null&&!o.hasOwnProperty(j)&&Ve(e,n,j,null,o,rt);for(vt in o)rt=o[vt],ut=a[vt],!o.hasOwnProperty(vt)||rt===ut||rt==null&&ut==null||Ve(e,n,vt,rt,o,ut)}function d_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,g=c.initiatorType,b=c.duration;if(f&&b&&d_(g)){for(g=0,b=c.responseEnd,o+=1;o<a.length;o++){var F=a[o],nt=F.startTime;if(nt>b)break;var pt=F.transferSize,vt=F.initiatorType;pt&&d_(vt)&&(F=F.responseEnd,g+=pt*(F<b?1:(b-nt)/(F-nt)))}if(--o,n+=8*(f+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Zf=null,Kf=null;function lu(e){return e.nodeType===9?e:e.ownerDocument}function p_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function m_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Qf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jf=null;function _S(){var e=window.event;return e&&e.type==="popstate"?e===Jf?!1:(Jf=e,!0):(Jf=null,!1)}var __=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,g_=typeof Promise=="function"?Promise:void 0,vS=typeof queueMicrotask=="function"?queueMicrotask:typeof g_<"u"?function(e){return g_.resolve(null).then(e).catch(xS)}:__;function xS(e){setTimeout(function(){throw e})}function qa(e){return e==="head"}function v_(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),Mr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Io(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Io(a);for(var f=a.firstChild;f;){var g=f.nextSibling,b=f.nodeName;f[us]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Io(e.ownerDocument.body);a=c}while(a);Mr(n)}function x_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function $f(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$f(a),eo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function SS(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[us])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function yS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=di(e.nextSibling),e===null))return null;return e}function S_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=di(e.nextSibling),e===null))return null;return e}function th(e){return e.data==="$?"||e.data==="$~"}function eh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function MS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function di(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var nh=null;function y_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return di(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function M_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function E_(e,n,a){switch(n=lu(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Io(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);eo(e)}var pi=new Map,b_=new Set;function uu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var da=H.d;H.d={f:ES,r:bS,D:TS,C:AS,L:RS,m:CS,X:DS,S:wS,M:US};function ES(){var e=da.f(),n=tu();return e||n}function bS(e){var n=Ra(e);n!==null&&n.tag===5&&n.type==="form"?Gm(n):da.r(e)}var xr=typeof document>"u"?null:document;function T_(e,n,a){var o=xr;if(o&&typeof n=="string"&&n){var c=se(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),b_.has(c)||(b_.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Dn(n,"link",e),T(n),o.head.appendChild(n)))}}function TS(e){da.D(e),T_("dns-prefetch",e,null)}function AS(e,n){da.C(e,n),T_("preconnect",e,n)}function RS(e,n,a){da.L(e,n,a);var o=xr;if(o&&e&&n){var c='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+se(a.imageSizes)+'"]')):c+='[href="'+se(e)+'"]';var f=c;switch(n){case"style":f=Sr(e);break;case"script":f=yr(e)}pi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Fo(f))||n==="script"&&o.querySelector(Bo(f))||(n=o.createElement("link"),Dn(n,"link",e),T(n),o.head.appendChild(n)))}}function CS(e,n){da.m(e,n);var a=xr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+se(o)+'"][href="'+se(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=yr(e)}if(!pi.has(f)&&(e=_({rel:"modulepreload",href:e},n),pi.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bo(f)))return}o=a.createElement("link"),Dn(o,"link",e),T(o),a.head.appendChild(o)}}}function wS(e,n,a){da.S(e,n,a);var o=xr;if(o&&e){var c=Ca(o).hoistableStyles,f=Sr(e);n=n||"default";var g=c.get(f);if(!g){var b={loading:0,preload:null};if(g=o.querySelector(Fo(f)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(f))&&ih(e,a);var F=g=o.createElement("link");T(F),Dn(F,"link",e),F._p=new Promise(function(nt,pt){F.onload=nt,F.onerror=pt}),F.addEventListener("load",function(){b.loading|=1}),F.addEventListener("error",function(){b.loading|=2}),b.loading|=4,cu(g,n,o)}g={type:"stylesheet",instance:g,count:1,state:b},c.set(f,g)}}}function DS(e,n){da.X(e,n);var a=xr;if(a&&e){var o=Ca(a).hoistableScripts,c=yr(e),f=o.get(c);f||(f=a.querySelector(Bo(c)),f||(e=_({src:e,async:!0},n),(n=pi.get(c))&&ah(e,n),f=a.createElement("script"),T(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function US(e,n){da.M(e,n);var a=xr;if(a&&e){var o=Ca(a).hoistableScripts,c=yr(e),f=o.get(c);f||(f=a.querySelector(Bo(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=pi.get(c))&&ah(e,n),f=a.createElement("script"),T(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function A_(e,n,a,o){var c=(c=et.current)?uu(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Sr(a.href),a=Ca(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Sr(a.href);var f=Ca(c).hoistableStyles,g=f.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=c.querySelector(Fo(e)))&&!f._p&&(g.instance=f,g.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),f||NS(c,e,a,g.state))),n&&o===null)throw Error(s(528,""));return g}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=yr(a),a=Ca(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Sr(e){return'href="'+se(e)+'"'}function Fo(e){return'link[rel="stylesheet"]['+e+"]"}function R_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function NS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),T(n),e.head.appendChild(n))}function yr(e){return'[src="'+se(e)+'"]'}function Bo(e){return"script[async]"+e}function C_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+se(a.href)+'"]');if(o)return n.instance=o,T(o),o;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),T(o),Dn(o,"style",c),cu(o,a.precedence,e),n.instance=o;case"stylesheet":c=Sr(a.href);var f=e.querySelector(Fo(c));if(f)return n.state.loading|=4,n.instance=f,T(f),f;o=R_(a),(c=pi.get(c))&&ih(o,c),f=(e.ownerDocument||e).createElement("link"),T(f);var g=f;return g._p=new Promise(function(b,F){g.onload=b,g.onerror=F}),Dn(f,"link",o),n.state.loading|=4,cu(f,a.precedence,e),n.instance=f;case"script":return f=yr(a.src),(c=e.querySelector(Bo(f)))?(n.instance=c,T(c),c):(o=a,(c=pi.get(f))&&(o=_({},a),ah(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),T(c),Dn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cu(o,a.precedence,e));return n.instance}function cu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,g=0;g<o.length;g++){var b=o[g];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ih(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ah(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var fu=null;function w_(e,n,a){if(fu===null){var o=new Map,c=fu=new Map;c.set(a,o)}else c=fu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[us]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var b=o.get(g);b?b.push(f):o.set(g,[f])}}return o}function D_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function LS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function U_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function OS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Sr(o.href),f=n.querySelector(Fo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=hu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,T(f);return}f=n.ownerDocument||n,o=R_(o),(c=pi.get(c))&&ih(o,c),f=f.createElement("link"),T(f);var g=f;g._p=new Promise(function(b,F){g.onload=b,g.onerror=F}),Dn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=hu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var sh=0;function PS(e,n){return e.stylesheets&&e.count===0&&pu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&pu(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&sh===0&&(sh=62500*mS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&pu(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>sh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function hu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var du=null;function pu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,du=new Map,n.forEach(zS,e),du=null,hu.call(e))}function zS(e,n){if(!(n.state.loading&4)){var a=du.get(e);if(a)var o=a.get(null);else{a=new Map,du.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),o=g)}o&&a.set(null,o)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||o,f===o&&a.set(null,c),a.set(g,c),this.count++,o=hu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Ho={$$typeof:P,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function IS(e,n,a,o,c,f,g,b,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function N_(e,n,a,o,c,f,g,b,F,nt,pt,vt){return e=new IS(e,n,a,g,F,nt,pt,vt,b),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=Ic(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Gc(f),e}function L_(e){return e?(e=Js,e):Js}function O_(e,n,a,o,c,f){c=L_(c),o.context===null?o.context=c:o.pendingContext=c,o=Pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(e,o,n),a!==null&&(qn(a,e,n),vo(a,e,n))}function P_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function rh(e,n){P_(e,n),(e=e.alternate)&&P_(e,n)}function z_(e){if(e.tag===13||e.tag===31){var n=ps(e,67108864);n!==null&&qn(n,e,67108864),rh(e,67108864)}}function I_(e){if(e.tag===13||e.tag===31){var n=ni();n=Jr(n);var a=ps(e,n);a!==null&&qn(a,e,n),rh(e,n)}}var mu=!0;function FS(e,n,a,o){var c=O.T;O.T=null;var f=H.p;try{H.p=2,oh(e,n,a,o)}finally{H.p=f,O.T=c}}function BS(e,n,a,o){var c=O.T;O.T=null;var f=H.p;try{H.p=8,oh(e,n,a,o)}finally{H.p=f,O.T=c}}function oh(e,n,a,o){if(mu){var c=lh(o);if(c===null)Yf(e,n,o,_u,a),B_(e,o);else if(GS(c,e,n,a,o))o.stopPropagation();else if(B_(e,o),n&4&&-1<HS.indexOf(e)){for(;c!==null;){var f=Ra(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Mt(f.pendingLanes);if(g!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var F=1<<31-Ft(g);b.entanglements[1]|=F,g&=~F}Ii(f),(Ne&6)===0&&(Jl=M()+500,Oo(0))}}break;case 31:case 13:b=ps(f,2),b!==null&&qn(b,f,2),tu(),rh(f,2)}if(f=lh(o),f===null&&Yf(e,n,o,_u,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Yf(e,n,o,null,a)}}function lh(e){return e=uc(e),uh(e)}var _u=null;function uh(e){if(_u=null,e=Aa(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return _u=e,null}function F_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case _t:return 2;case yt:return 8;case ct:case Zt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var ch=!1,Ya=null,ja=null,Za=null,Go=new Map,Vo=new Map,Ka=[],HS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function B_(e,n){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(n.pointerId)}}function ko(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ra(n),n!==null&&z_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function GS(e,n,a,o,c){switch(n){case"focusin":return Ya=ko(Ya,e,n,a,o,c),!0;case"dragenter":return ja=ko(ja,e,n,a,o,c),!0;case"mouseover":return Za=ko(Za,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Go.set(f,ko(Go.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Vo.set(f,ko(Vo.get(f)||null,e,n,a,o,c)),!0}return!1}function H_(e){var n=Aa(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Li(e.priority,function(){I_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Li(e.priority,function(){I_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=lh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);lc=o,a.target.dispatchEvent(o),lc=null}else return n=Ra(a),n!==null&&z_(n),e.blockedOn=a,!1;n.shift()}return!0}function G_(e,n,a){gu(e)&&a.delete(n)}function VS(){ch=!1,Ya!==null&&gu(Ya)&&(Ya=null),ja!==null&&gu(ja)&&(ja=null),Za!==null&&gu(Za)&&(Za=null),Go.forEach(G_),Vo.forEach(G_)}function vu(e,n){e.blockedOn===n&&(e.blockedOn=null,ch||(ch=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,VS)))}var xu=null;function V_(e){xu!==e&&(xu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xu===e&&(xu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(uh(o||a)===null)continue;break}var f=Ra(a);f!==null&&(e.splice(n,3),n-=3,lf(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Mr(e){function n(F){return vu(F,e)}Ya!==null&&vu(Ya,e),ja!==null&&vu(ja,e),Za!==null&&vu(Za,e),Go.forEach(n),Vo.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)H_(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],g=c[yn]||null;if(typeof f=="function")g||V_(a);else if(g){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[yn]||null)b=g.formAction;else if(uh(c)!==null)continue}else b=g.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),V_(a)}}}function k_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function fh(e){this._internalRoot=e}Su.prototype.render=fh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ni();O_(a,o,e,n,null,null)},Su.prototype.unmount=fh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;O_(e.current,2,null,e,null,null),tu(),n[Mi]=null}};function Su(e){this._internalRoot=e}Su.prototype.unstable_scheduleHydration=function(e){if(e){var n=$r();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&H_(e)}};var X_=t.version;if(X_!=="19.2.3")throw Error(s(527,X_,"19.2.3"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var kS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{Et=yu.inject(kS),Tt=yu}catch{}}return Wo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",c=Qm,f=Jm,g=$m;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=N_(e,1,!1,null,null,a,o,null,c,f,g,k_),e[Mi]=n.current,qf(e),new fh(n)},Wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,c="",f=Qm,g=Jm,b=$m,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=N_(e,1,!0,n,a??null,o,c,F,f,g,b,k_),n.context=L_(null),a=n.current,o=ni(),o=Jr(o),c=Pa(o),c.callback=null,za(a,c,o),a=o,n.current.lanes=a,Nn(n,a),Ii(n),e[Mi]=n.current,qf(e),new Su(n)},Wo.version="19.2.3",Wo}var tg;function ty(){if(tg)return ph.exports;tg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ph.exports=$S(),ph.exports}var ey=ty();const ny=nv(ey);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qd="182",Vr={ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iy=0,eg=1,ay=2,qu=1,sy=2,el=3,ls=0,jn=1,xa=2,ya=0,kr=1,Qh=2,ng=3,ig=4,ry=5,Ls=100,oy=101,ly=102,uy=103,cy=104,fy=200,hy=201,dy=202,py=203,Jh=204,$h=205,my=206,_y=207,gy=208,vy=209,xy=210,Sy=211,yy=212,My=213,Ey=214,td=0,ed=1,nd=2,Wr=3,id=4,ad=5,sd=6,rd=7,iv=0,by=1,Ty=2,Xi=0,av=1,sv=2,rv=3,ov=4,lv=5,uv=6,cv=7,fv=300,Fs=301,qr=302,od=303,ld=304,ac=306,ud=1e3,Sa=1001,cd=1002,Un=1003,Ay=1004,Mu=1005,zn=1006,vh=1007,Ps=1008,vi=1009,hv=1010,dv=1011,al=1012,Jd=1013,qi=1014,Vi=1015,Ea=1016,$d=1017,tp=1018,sl=1020,pv=35902,mv=35899,_v=1021,gv=1022,Di=1023,ba=1026,zs=1027,vv=1028,ep=1029,Yr=1030,np=1031,ip=1033,Yu=33776,ju=33777,Zu=33778,Ku=33779,fd=35840,hd=35841,dd=35842,pd=35843,md=36196,_d=37492,gd=37496,vd=37488,xd=37489,Sd=37490,yd=37491,Md=37808,Ed=37809,bd=37810,Td=37811,Ad=37812,Rd=37813,Cd=37814,wd=37815,Dd=37816,Ud=37817,Nd=37818,Ld=37819,Od=37820,Pd=37821,zd=36492,Id=36494,Fd=36495,Bd=36283,Hd=36284,Gd=36285,Vd=36286,Ry=3200,Cy=0,wy=1,ss="",_i="srgb",jr="srgb-linear",$u="linear",Be="srgb",Er=7680,ag=519,Dy=512,Uy=513,Ny=514,ap=515,Ly=516,Oy=517,sp=518,Py=519,kd=35044,sg="300 es",ki=2e3,tc=2001;function xv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ec(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function zy(){const r=ec("canvas");return r.style.display="block",r}const rg={};function nc(...r){const t="THREE."+r.shift();console.log(t,...r)}function re(...r){const t="THREE."+r.shift();console.warn(t,...r)}function be(...r){const t="THREE."+r.shift();console.error(t,...r)}function rl(...r){const t=r.join(" ");t in rg||(rg[t]=!0,re(...r))}function Iy(r,t,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class Hs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qu=Math.PI/180,Xd=180/Math.PI;function os(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function ve(r,t,i){return Math.max(t,Math.min(i,r))}function Fy(r,t){return(r%t+t)%t}function xh(r,t,i){return(1-i)*r+i*t}function Gi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const By={DEG2RAD:Qu};class ie{constructor(t=0,i=0){ie.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],_=s[l+3],S=u[h+0],E=u[h+1],A=u[h+2],C=u[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_;return}if(d>=1){t[i+0]=S,t[i+1]=E,t[i+2]=A,t[i+3]=C;return}if(_!==C||m!==S||p!==E||v!==A){let y=m*S+p*E+v*A+_*C;y<0&&(S=-S,E=-E,A=-A,C=-C,y=-y);let x=1-d;if(y<.9995){const L=Math.acos(y),P=Math.sin(L);x=Math.sin(x*L)/P,d=Math.sin(d*L)/P,m=m*x+S*d,p=p*x+E*d,v=v*x+A*d,_=_*x+C*d}else{m=m*x+S*d,p=p*x+E*d,v=v*x+A*d,_=_*x+C*d;const L=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=L,p*=L,v*=L,_*=L}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],_=u[h],S=u[h+1],E=u[h+2],A=u[h+3];return t[i]=d*A+v*_+m*E-p*S,t[i+1]=m*A+v*S+p*_-d*E,t[i+2]=p*A+v*E+d*S-m*_,t[i+3]=v*A-d*_-m*S-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),_=d(u/2),S=m(s/2),E=m(l/2),A=m(u/2);switch(h){case"XYZ":this._x=S*v*_+p*E*A,this._y=p*E*_-S*v*A,this._z=p*v*A+S*E*_,this._w=p*v*_-S*E*A;break;case"YXZ":this._x=S*v*_+p*E*A,this._y=p*E*_-S*v*A,this._z=p*v*A-S*E*_,this._w=p*v*_+S*E*A;break;case"ZXY":this._x=S*v*_-p*E*A,this._y=p*E*_+S*v*A,this._z=p*v*A+S*E*_,this._w=p*v*_-S*E*A;break;case"ZYX":this._x=S*v*_-p*E*A,this._y=p*E*_+S*v*A,this._z=p*v*A-S*E*_,this._w=p*v*_+S*E*A;break;case"YZX":this._x=S*v*_+p*E*A,this._y=p*E*_+S*v*A,this._z=p*v*A-S*E*_,this._w=p*v*_-S*E*A;break;case"XZY":this._x=S*v*_-p*E*A,this._y=p*E*_-S*v*A,this._z=p*v*A+S*E*_,this._w=p*v*_+S*E*A;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],_=i[10],S=s+d+_;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(v-m)*E,this._y=(u-p)*E,this._z=(h-l)*E}else if(s>d&&s>_){const E=2*Math.sqrt(1+s-d-_);this._w=(v-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(u+p)/E}else if(d>_){const E=2*Math.sqrt(1+d-s-_);this._w=(u-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+_-s-d);this._w=(h-l)/E,this._x=(u+p)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-u*m,this._y=l*v+h*m+u*d-s*p,this._z=u*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,u=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(og.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(og.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),v=2*(d*i-u*l),_=2*(u*s-h*i);return this.x=i+m*p+h*_-d*v,this.y=s+m*v+d*p-u*_,this.z=l+m*_+u*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Sh.copy(this).projectOnVector(t),this.sub(Sh)}reflect(t){return this.sub(Sh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sh=new J,og=new Bs;class de{constructor(t,i,s,l,u,h,d,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],_=s[7],S=s[2],E=s[5],A=s[8],C=l[0],y=l[3],x=l[6],L=l[1],P=l[4],N=l[7],I=l[2],B=l[5],z=l[8];return u[0]=h*C+d*L+m*I,u[3]=h*y+d*P+m*B,u[6]=h*x+d*N+m*z,u[1]=p*C+v*L+_*I,u[4]=p*y+v*P+_*B,u[7]=p*x+v*N+_*z,u[2]=S*C+E*L+A*I,u[5]=S*y+E*P+A*B,u[8]=S*x+E*N+A*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-s*u*v+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],_=v*h-d*p,S=d*m-v*u,E=p*u-h*m,A=i*_+s*S+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=_*C,t[1]=(l*p-v*s)*C,t[2]=(d*s-l*h)*C,t[3]=S*C,t[4]=(v*i-l*m)*C,t[5]=(l*u-d*i)*C,t[6]=E*C,t[7]=(s*m-p*i)*C,t[8]=(h*i-s*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(yh.makeScale(t,i)),this}rotate(t){return this.premultiply(yh.makeRotation(-t)),this}translate(t,i){return this.premultiply(yh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yh=new de,lg=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ug=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hy(){const r={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Xr(l.r),l.g=Xr(l.g),l.b=Xr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ss?$u:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return rl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return rl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[jr]:{primaries:t,whitePoint:s,transfer:$u,toXYZ:lg,fromXYZ:ug,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:lg,fromXYZ:ug,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),r}const Ae=Hy();function Ma(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let br;class Gy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{br===void 0&&(br=ec("canvas")),br.width=t.width,br.height=t.height;const l=br.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=br}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ec("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ma(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ma(i[s]/255)*255):i[s]=Ma(i[s]);return{data:i,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vy=0;class rp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Mh(l[h].image)):u.push(Mh(l[h]))}else u=Mh(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Mh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let ky=0;const Eh=new J;class In extends Hs{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=Sa,l=Sa,u=zn,h=Ps,d=Di,m=vi,p=In.DEFAULT_ANISOTROPY,v=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=os(),this.name="",this.source=new rp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Eh).x}get height(){return this.source.getSize(Eh).y}get depth(){return this.source.getSize(Eh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ud:t.x=t.x-Math.floor(t.x);break;case Sa:t.x=t.x<0?0:1;break;case cd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ud:t.y=t.y-Math.floor(t.y);break;case Sa:t.y=t.y<0?0:1;break;case cd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=fv;In.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,i=0,s=0,l=1){on.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],v=m[4],_=m[8],S=m[1],E=m[5],A=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(_-C)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+C)<.1&&Math.abs(A+y)<.1&&Math.abs(p+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,N=(E+1)/2,I=(x+1)/2,B=(v+S)/4,z=(_+C)/4,$=(A+y)/4;return P>N&&P>I?P<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(P),l=B/s,u=z/s):N>I?N<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),s=B/l,u=$/l):I<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),s=z/u,l=$/u),this.set(s,l,u,i),this}let L=Math.sqrt((y-A)*(y-A)+(_-C)*(_-C)+(S-v)*(S-v));return Math.abs(L)<.001&&(L=1),this.x=(y-A)/L,this.y=(_-C)/L,this.z=(S-v)/L,this.w=Math.acos((p+E+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xy extends Hs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,t,i),this.scissorTest=!1,this.viewport=new on(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new In(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new rp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends Xy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Sv extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wy extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ll{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ri.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ri.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ri.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ri):Ri.fromBufferAttribute(u,h),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Eu.copy(s.boundingBox)),Eu.applyMatrix4(t.matrixWorld),this.union(Eu)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qo),bu.subVectors(this.max,qo),Tr.subVectors(t.a,qo),Ar.subVectors(t.b,qo),Rr.subVectors(t.c,qo),Ja.subVectors(Ar,Tr),$a.subVectors(Rr,Ar),Rs.subVectors(Tr,Rr);let i=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-Rs.z,Rs.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,Rs.z,0,-Rs.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-Rs.y,Rs.x,0];return!bh(i,Tr,Ar,Rr,bu)||(i=[1,0,0,0,1,0,0,0,1],!bh(i,Tr,Ar,Rr,bu))?!1:(Tu.crossVectors(Ja,$a),i=[Tu.x,Tu.y,Tu.z],bh(i,Tr,Ar,Rr,bu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pa=[new J,new J,new J,new J,new J,new J,new J,new J],Ri=new J,Eu=new ll,Tr=new J,Ar=new J,Rr=new J,Ja=new J,$a=new J,Rs=new J,qo=new J,bu=new J,Tu=new J,Cs=new J;function bh(r,t,i,s,l){for(let u=0,h=r.length-3;u<=h;u+=3){Cs.fromArray(r,u);const d=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),m=t.dot(Cs),p=i.dot(Cs),v=s.dot(Cs);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const qy=new ll,Yo=new J,Th=new J;class op{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):qy.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Th.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(Th)),this.expandByPoint(Yo.copy(t.center).sub(Th))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ma=new J,Ah=new J,Au=new J,ts=new J,Rh=new J,Ru=new J,Ch=new J;class lp{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Ah.copy(t).add(i).multiplyScalar(.5),Au.copy(i).sub(t).normalize(),ts.copy(this.origin).sub(Ah);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Au),d=ts.dot(this.direction),m=-ts.dot(Au),p=ts.lengthSq(),v=Math.abs(1-h*h);let _,S,E,A;if(v>0)if(_=h*m-d,S=h*d-m,A=u*v,_>=0)if(S>=-A)if(S<=A){const C=1/v;_*=C,S*=C,E=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=u,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;else S<=-A?(_=Math.max(0,-(-h*u+d)),S=_>0?-u:Math.min(Math.max(-u,-m),u),E=-_*_+S*(S+2*m)+p):S<=A?(_=0,S=Math.min(Math.max(-u,-m),u),E=S*(S+2*m)+p):(_=Math.max(0,-(h*u+d)),S=_>0?u:Math.min(Math.max(-u,-m),u),E=-_*_+S*(S+2*m)+p);else S=h>0?-u:u,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Ah).addScaledVector(Au,S),E}intersectSphere(t,i){ma.subVectors(t.center,this.origin);const s=ma.dot(this.direction),l=ma.dot(ma)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),v>=0?(u=(t.min.y-S.y)*v,h=(t.max.y-S.y)*v):(u=(t.max.y-S.y)*v,h=(t.min.y-S.y)*v),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ma)!==null}intersectTriangle(t,i,s,l,u){Rh.subVectors(i,t),Ru.subVectors(s,t),Ch.crossVectors(Rh,Ru);let h=this.direction.dot(Ch),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ts.subVectors(this.origin,t);const m=d*this.direction.dot(Ru.crossVectors(ts,Ru));if(m<0)return null;const p=d*this.direction.dot(Rh.cross(ts));if(p<0||m+p>h)return null;const v=-d*ts.dot(Ch);return v<0?null:this.at(v/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(t,i,s,l,u,h,d,m,p,v,_,S,E,A,C,y){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,v,_,S,E,A,C,y)}set(t,i,s,l,u,h,d,m,p,v,_,S,E,A,C,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=v,x[10]=_,x[14]=S,x[3]=E,x[7]=A,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Cr.setFromMatrixColumn(t,0).length(),u=1/Cr.setFromMatrixColumn(t,1).length(),h=1/Cr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const S=h*v,E=h*_,A=d*v,C=d*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=E+A*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=A+E*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*v,E=m*_,A=p*v,C=p*_;i[0]=S+C*d,i[4]=A*d-E,i[8]=h*p,i[1]=h*_,i[5]=h*v,i[9]=-d,i[2]=E*d-A,i[6]=C+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*v,E=m*_,A=p*v,C=p*_;i[0]=S-C*d,i[4]=-h*_,i[8]=A+E*d,i[1]=E+A*d,i[5]=h*v,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*v,E=h*_,A=d*v,C=d*_;i[0]=m*v,i[4]=A*p-E,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=E*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,E=h*p,A=d*m,C=d*p;i[0]=m*v,i[4]=C-S*_,i[8]=A*_+E,i[1]=_,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=E*_+A,i[10]=S-C*_}else if(t.order==="XZY"){const S=h*m,E=h*p,A=d*m,C=d*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=S*_+C,i[5]=h*v,i[9]=E*_-A,i[2]=A*_-E,i[6]=d*v,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yy,t,jy)}lookAt(t,i,s){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),es.crossVectors(s,ii),es.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),es.crossVectors(s,ii)),es.normalize(),Cu.crossVectors(ii,es),l[0]=es.x,l[4]=Cu.x,l[8]=ii.x,l[1]=es.y,l[5]=Cu.y,l[9]=ii.y,l[2]=es.z,l[6]=Cu.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],_=s[5],S=s[9],E=s[13],A=s[2],C=s[6],y=s[10],x=s[14],L=s[3],P=s[7],N=s[11],I=s[15],B=l[0],z=l[4],$=l[8],R=l[12],D=l[1],k=l[5],it=l[9],at=l[13],dt=l[2],ot=l[6],O=l[10],H=l[14],K=l[3],ft=l[7],ht=l[11],w=l[15];return u[0]=h*B+d*D+m*dt+p*K,u[4]=h*z+d*k+m*ot+p*ft,u[8]=h*$+d*it+m*O+p*ht,u[12]=h*R+d*at+m*H+p*w,u[1]=v*B+_*D+S*dt+E*K,u[5]=v*z+_*k+S*ot+E*ft,u[9]=v*$+_*it+S*O+E*ht,u[13]=v*R+_*at+S*H+E*w,u[2]=A*B+C*D+y*dt+x*K,u[6]=A*z+C*k+y*ot+x*ft,u[10]=A*$+C*it+y*O+x*ht,u[14]=A*R+C*at+y*H+x*w,u[3]=L*B+P*D+N*dt+I*K,u[7]=L*z+P*k+N*ot+I*ft,u[11]=L*$+P*it+N*O+I*ht,u[15]=L*R+P*at+N*H+I*w,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],_=t[6],S=t[10],E=t[14],A=t[3],C=t[7],y=t[11],x=t[15],L=m*E-p*S,P=d*E-p*_,N=d*S-m*_,I=h*E-p*v,B=h*S-m*v,z=h*_-d*v;return i*(C*L-y*P+x*N)-s*(A*L-y*I+x*B)+l*(A*P-C*I+x*z)-u*(A*N-C*B+y*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],_=t[9],S=t[10],E=t[11],A=t[12],C=t[13],y=t[14],x=t[15],L=_*y*p-C*S*p+C*m*E-d*y*E-_*m*x+d*S*x,P=A*S*p-v*y*p-A*m*E+h*y*E+v*m*x-h*S*x,N=v*C*p-A*_*p+A*d*E-h*C*E-v*d*x+h*_*x,I=A*_*m-v*C*m-A*d*S+h*C*S+v*d*y-h*_*y,B=i*L+s*P+l*N+u*I;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=L*z,t[1]=(C*S*u-_*y*u-C*l*E+s*y*E+_*l*x-s*S*x)*z,t[2]=(d*y*u-C*m*u+C*l*p-s*y*p-d*l*x+s*m*x)*z,t[3]=(_*m*u-d*S*u-_*l*p+s*S*p+d*l*E-s*m*E)*z,t[4]=P*z,t[5]=(v*y*u-A*S*u+A*l*E-i*y*E-v*l*x+i*S*x)*z,t[6]=(A*m*u-h*y*u-A*l*p+i*y*p+h*l*x-i*m*x)*z,t[7]=(h*S*u-v*m*u+v*l*p-i*S*p-h*l*E+i*m*E)*z,t[8]=N*z,t[9]=(A*_*u-v*C*u-A*s*E+i*C*E+v*s*x-i*_*x)*z,t[10]=(h*C*u-A*d*u+A*s*p-i*C*p-h*s*x+i*d*x)*z,t[11]=(v*d*u-h*_*u-v*s*p+i*_*p+h*s*E-i*d*E)*z,t[12]=I*z,t[13]=(v*C*l-A*_*l+A*s*S-i*C*S-v*s*y+i*_*y)*z,t[14]=(A*d*l-h*C*l-A*s*m+i*C*m+h*s*y-i*d*y)*z,t[15]=(h*_*l-v*d*l+v*s*m-i*_*m-h*s*S+i*d*S)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,v=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,v=h+h,_=d+d,S=u*p,E=u*v,A=u*_,C=h*v,y=h*_,x=d*_,L=m*p,P=m*v,N=m*_,I=s.x,B=s.y,z=s.z;return l[0]=(1-(C+x))*I,l[1]=(E+N)*I,l[2]=(A-P)*I,l[3]=0,l[4]=(E-N)*B,l[5]=(1-(S+x))*B,l[6]=(y+L)*B,l[7]=0,l[8]=(A+P)*z,l[9]=(y-L)*z,l[10]=(1-(S+C))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let u=Cr.set(l[0],l[1],l[2]).length();const h=Cr.set(l[4],l[5],l[6]).length(),d=Cr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Ci.copy(this);const p=1/u,v=1/h,_=1/d;return Ci.elements[0]*=p,Ci.elements[1]*=p,Ci.elements[2]*=p,Ci.elements[4]*=v,Ci.elements[5]*=v,Ci.elements[6]*=v,Ci.elements[8]*=_,Ci.elements[9]*=_,Ci.elements[10]*=_,i.setFromRotationMatrix(Ci),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=ki,m=!1){const p=this.elements,v=2*u/(i-t),_=2*u/(s-l),S=(i+t)/(i-t),E=(s+l)/(s-l);let A,C;if(m)A=u/(h-u),C=h*u/(h-u);else if(d===ki)A=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(d===tc)A=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=ki,m=!1){const p=this.elements,v=2/(i-t),_=2/(s-l),S=-(i+t)/(i-t),E=-(s+l)/(s-l);let A,C;if(m)A=1/(h-u),C=h/(h-u);else if(d===ki)A=-2/(h-u),C=-(h+u)/(h-u);else if(d===tc)A=-1/(h-u),C=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Cr=new J,Ci=new an,Yy=new J(0,0,0),jy=new J(1,1,1),es=new J,Cu=new J,ii=new J,cg=new an,fg=new Bs;class Ta{constructor(t=0,i=0,s=0,l=Ta.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],_=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(ve(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,E),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return cg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return fg.setFromEuler(this),this.setFromQuaternion(fg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ta.DEFAULT_ORDER="XYZ";class up{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zy=0;const hg=new J,wr=new Bs,_a=new an,wu=new J,jo=new J,Ky=new J,Qy=new Bs,dg=new J(1,0,0),pg=new J(0,1,0),mg=new J(0,0,1),_g={type:"added"},Jy={type:"removed"},Dr={type:"childadded",child:null},wh={type:"childremoved",child:null};class Zn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const t=new J,i=new Ta,s=new Bs,l=new J(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new de}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new up,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(dg,t)}rotateY(t){return this.rotateOnAxis(pg,t)}rotateZ(t){return this.rotateOnAxis(mg,t)}translateOnAxis(t,i){return hg.copy(t).applyQuaternion(this.quaternion),this.position.add(hg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(dg,t)}translateY(t){return this.translateOnAxis(pg,t)}translateZ(t){return this.translateOnAxis(mg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?wu.copy(t):wu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(jo,wu,this.up):_a.lookAt(wu,jo,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(_a),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_g),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Jy),wh.child=t,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_a.multiply(t.parent.matrixWorld)),t.applyMatrix4(_a),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_g),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,Ky),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,Qy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),_=h(t.shapes),S=h(t.skeletons),E=h(t.animations),A=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),A.length>0&&(s.nodes=A)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Zn.DEFAULT_UP=new J(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new J,ga=new J,Dh=new J,va=new J,Ur=new J,Nr=new J,gg=new J,Uh=new J,Nh=new J,Lh=new J,Oh=new on,Ph=new on,zh=new on;class xi{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),wi.subVectors(t,i),l.cross(wi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){wi.subVectors(l,i),ga.subVectors(s,i),Dh.subVectors(t,i);const h=wi.dot(wi),d=wi.dot(ga),m=wi.dot(Dh),p=ga.dot(ga),v=ga.dot(Dh),_=h*p-d*d;if(_===0)return u.set(0,0,0),null;const S=1/_,E=(p*m-d*v)*S,A=(h*v-d*m)*S;return u.set(1-E-A,A,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,va.x),m.addScaledVector(h,va.y),m.addScaledVector(d,va.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return Oh.setScalar(0),Ph.setScalar(0),zh.setScalar(0),Oh.fromBufferAttribute(t,i),Ph.fromBufferAttribute(t,s),zh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Oh,u.x),h.addScaledVector(Ph,u.y),h.addScaledVector(zh,u.z),h}static isFrontFacing(t,i,s,l){return wi.subVectors(s,i),ga.subVectors(t,i),wi.cross(ga).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),wi.cross(ga).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return xi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return xi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;Ur.subVectors(l,s),Nr.subVectors(u,s),Uh.subVectors(t,s);const m=Ur.dot(Uh),p=Nr.dot(Uh);if(m<=0&&p<=0)return i.copy(s);Nh.subVectors(t,l);const v=Ur.dot(Nh),_=Nr.dot(Nh);if(v>=0&&_<=v)return i.copy(l);const S=m*_-v*p;if(S<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Ur,h);Lh.subVectors(t,u);const E=Ur.dot(Lh),A=Nr.dot(Lh);if(A>=0&&E<=A)return i.copy(u);const C=E*p-m*A;if(C<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(s).addScaledVector(Nr,d);const y=v*A-E*_;if(y<=0&&_-v>=0&&E-A>=0)return gg.subVectors(u,l),d=(_-v)/(_-v+(E-A)),i.copy(l).addScaledVector(gg,d);const x=1/(y+C+S);return h=C*x,d=S*x,i.copy(s).addScaledVector(Ur,h).addScaledVector(Nr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Du={h:0,s:0,l:0};function Ih(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class He{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ae.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ae.workingColorSpace){if(t=Fy(t,1),i=ve(i,0,1),s=ve(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=Ih(h,u,t+1/3),this.g=Ih(h,u,t),this.b=Ih(h,u,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,i=_i){function s(u){u!==void 0&&parseFloat(u)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:re("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=_i){const s=yv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}copyLinearToSRGB(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return Ae.workingToColorSpace(Pn.copy(this),t),Math.round(ve(Pn.r*255,0,255))*65536+Math.round(ve(Pn.g*255,0,255))*256+Math.round(ve(Pn.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,u=Pn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=v<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-s)/_+2;break;case u:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=_i){Ae.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==_i?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+i,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ns),t.getHSL(Du);const s=xh(ns.h,Du.h,i),l=xh(ns.s,Du.s,i),u=xh(ns.l,Du.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new He;He.NAMES=yv;let $y=0;class ul extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=os(),this.name="",this.type="Material",this.blending=kr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jh,this.blendDst=$h,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(s.blending=this.blending),this.side!==ls&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Jh&&(s.blendSrc=this.blendSrc),this.blendDst!==$h&&(s.blendDst=this.blendDst),this.blendEquation!==Ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ag&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class cp extends ul{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.combine=iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new J,Uu=new ie;let tM=0;class Ui{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=kd,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Uu.fromBufferAttribute(this,i),Uu.applyMatrix3(t),this.setXY(i,Uu.x,Uu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Gi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Xe(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Gi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Gi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Gi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Gi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array),l=Xe(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array),l=Xe(l,this.array),u=Xe(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kd&&(t.usage=this.usage),t}}class Mv extends Ui{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Ev extends Ui{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Si extends Ui{constructor(t,i,s){super(new Float32Array(t),i,s)}}let eM=0;const mi=new an,Fh=new Zn,Lr=new J,ai=new ll,Zo=new ll,Sn=new J;class Ni extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xv(t)?Ev:Mv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new de().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,s){return mi.makeTranslation(t,i,s),this.applyMatrix4(mi),this}scale(t,i,s){return mi.makeScale(t,i,s),this.applyMatrix4(mi),this}lookAt(t){return Fh.lookAt(t),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Si(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ai.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new op);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Zo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ai.min,Zo.min),ai.expandByPoint(Sn),Sn.addVectors(ai.max,Zo.max),ai.expandByPoint(Sn)):(ai.expandByPoint(Zo.min),ai.expandByPoint(Zo.max))}ai.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)Sn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Sn.fromBufferAttribute(d,p),m&&(Lr.fromBufferAttribute(t,p),Sn.add(Lr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let $=0;$<s.count;$++)d[$]=new J,m[$]=new J;const p=new J,v=new J,_=new J,S=new ie,E=new ie,A=new ie,C=new J,y=new J;function x($,R,D){p.fromBufferAttribute(s,$),v.fromBufferAttribute(s,R),_.fromBufferAttribute(s,D),S.fromBufferAttribute(u,$),E.fromBufferAttribute(u,R),A.fromBufferAttribute(u,D),v.sub(p),_.sub(p),E.sub(S),A.sub(S);const k=1/(E.x*A.y-A.x*E.y);isFinite(k)&&(C.copy(v).multiplyScalar(A.y).addScaledVector(_,-E.y).multiplyScalar(k),y.copy(_).multiplyScalar(E.x).addScaledVector(v,-A.x).multiplyScalar(k),d[$].add(C),d[R].add(C),d[D].add(C),m[$].add(y),m[R].add(y),m[D].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let $=0,R=L.length;$<R;++$){const D=L[$],k=D.start,it=D.count;for(let at=k,dt=k+it;at<dt;at+=3)x(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const P=new J,N=new J,I=new J,B=new J;function z($){I.fromBufferAttribute(l,$),B.copy(I);const R=d[$];P.copy(R),P.sub(I.multiplyScalar(I.dot(R))).normalize(),N.crossVectors(B,R);const k=N.dot(m[$])<0?-1:1;h.setXYZW($,P.x,P.y,P.z,k)}for(let $=0,R=L.length;$<R;++$){const D=L[$],k=D.start,it=D.count;for(let at=k,dt=k+it;at<dt;at+=3)z(t.getX(at+0)),z(t.getX(at+1)),z(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const l=new J,u=new J,h=new J,d=new J,m=new J,p=new J,v=new J,_=new J;if(t)for(let S=0,E=t.count;S<E;S+=3){const A=t.getX(S+0),C=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),v.subVectors(h,u),_.subVectors(l,u),v.cross(_),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),d.add(v),m.add(v),p.add(v),s.setXYZ(A,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),v.subVectors(h,u),_.subVectors(l,u),v.cross(_),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,_=d.normalized,S=new p.constructor(m.length*v);let E=0,A=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?E=m[C]*d.data.stride+d.offset:E=m[C]*v;for(let x=0;x<v;x++)S[A++]=p[E++]}return new Ui(S,v,_)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ni,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,_=p.length;v<_;v++){const S=p[v],E=t(S,s);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,S=p.length;_<S;_++){const E=p[_];v.push(E.toJSON(t.data))}v.length>0&&(l[m]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=t.morphAttributes;for(const p in u){const v=[],_=u[p];for(let S=0,E=_.length;S<E;S++)v.push(_[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vg=new an,ws=new lp,Nu=new op,xg=new J,Lu=new J,Ou=new J,Pu=new J,Bh=new J,zu=new J,Sg=new J,Iu=new J;class Yi extends Zn{constructor(t=new Ni,i=new cp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){zu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],_=u[m];v!==0&&(Bh.fromBufferAttribute(_,t),h?zu.addScaledVector(Bh,v):zu.addScaledVector(Bh.sub(i),v))}i.add(zu)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Nu.copy(s.boundingSphere),Nu.applyMatrix4(u),ws.copy(t.ray).recast(t.near),!(Nu.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Nu,xg)===null||ws.origin.distanceToSquared(xg)>(t.far-t.near)**2))&&(vg.copy(u).invert(),ws.copy(t.ray).applyMatrix4(vg),!(s.boundingBox!==null&&ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ws)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,S=u.groups,E=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const y=S[A],x=h[y.materialIndex],L=Math.max(y.start,E.start),P=Math.min(d.count,Math.min(y.start+y.count,E.start+E.count));for(let N=L,I=P;N<I;N+=3){const B=d.getX(N),z=d.getX(N+1),$=d.getX(N+2);l=Fu(this,x,t,s,p,v,_,B,z,$),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(d.count,E.start+E.count);for(let y=A,x=C;y<x;y+=3){const L=d.getX(y),P=d.getX(y+1),N=d.getX(y+2);l=Fu(this,h,t,s,p,v,_,L,P,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const y=S[A],x=h[y.materialIndex],L=Math.max(y.start,E.start),P=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let N=L,I=P;N<I;N+=3){const B=N,z=N+1,$=N+2;l=Fu(this,x,t,s,p,v,_,B,z,$),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let y=A,x=C;y<x;y+=3){const L=y,P=y+1,N=y+2;l=Fu(this,h,t,s,p,v,_,L,P,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function nM(r,t,i,s,l,u,h,d){let m;if(t.side===jn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===ls,d),m===null)return null;Iu.copy(d),Iu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Iu);return p<i.near||p>i.far?null:{distance:p,point:Iu.clone(),object:r}}function Fu(r,t,i,s,l,u,h,d,m,p){r.getVertexPosition(d,Lu),r.getVertexPosition(m,Ou),r.getVertexPosition(p,Pu);const v=nM(r,t,i,s,Lu,Ou,Pu,Sg);if(v){const _=new J;xi.getBarycoord(Sg,Lu,Ou,Pu,_),l&&(v.uv=xi.getInterpolatedAttribute(l,d,m,p,_,new ie)),u&&(v.uv1=xi.getInterpolatedAttribute(u,d,m,p,_,new ie)),h&&(v.normal=xi.getInterpolatedAttribute(h,d,m,p,_,new J),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new J,materialIndex:0};xi.getNormal(Lu,Ou,Pu,S.normal),v.face=S,v.barycoord=_}return v}class cl extends Ni{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],v=[],_=[];let S=0,E=0;A("z","y","x",-1,-1,s,i,t,h,u,0),A("z","y","x",1,-1,s,i,-t,h,u,1),A("x","z","y",1,1,t,s,i,l,h,2),A("x","z","y",1,-1,t,s,-i,l,h,3),A("x","y","z",1,-1,t,i,s,l,u,4),A("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Si(p,3)),this.setAttribute("normal",new Si(v,3)),this.setAttribute("uv",new Si(_,2));function A(C,y,x,L,P,N,I,B,z,$,R){const D=N/z,k=I/$,it=N/2,at=I/2,dt=B/2,ot=z+1,O=$+1;let H=0,K=0;const ft=new J;for(let ht=0;ht<O;ht++){const w=ht*k-at;for(let Z=0;Z<ot;Z++){const mt=Z*D-it;ft[C]=mt*L,ft[y]=w*P,ft[x]=dt,p.push(ft.x,ft.y,ft.z),ft[C]=0,ft[y]=0,ft[x]=B>0?1:-1,v.push(ft.x,ft.y,ft.z),_.push(Z/z),_.push(1-ht/$),H+=1}}for(let ht=0;ht<$;ht++)for(let w=0;w<z;w++){const Z=S+w+ot*ht,mt=S+w+ot*(ht+1),bt=S+(w+1)+ot*(ht+1),Lt=S+(w+1)+ot*ht;m.push(Z,mt,Lt),m.push(mt,bt,Lt),K+=6}d.addGroup(E,K,R),E+=K,S+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(r){const t={};for(let i=0;i<r.length;i++){const s=Zr(r[i]);for(const l in s)t[l]=s[l]}return t}function iM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function bv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const aM={clone:Zr,merge:Hn};var sM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends ul{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sM,this.fragmentShader=rM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zr(t.uniforms),this.uniformsGroups=iM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Tv extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new J,yg=new ie,Mg=new ie;class gi extends Tv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Xd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xd*2*Math.atan(Math.tan(Qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,i){return this.getViewBounds(t,yg,Mg),i.subVectors(Mg,yg)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Qu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Or=-90,Pr=1;class oM extends Zn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(Or,Pr,t,i);l.layers=this.layers,this.add(l);const u=new gi(Or,Pr,t,i);u.layers=this.layers,this.add(u);const h=new gi(Or,Pr,t,i);h.layers=this.layers,this.add(h);const d=new gi(Or,Pr,t,i);d.layers=this.layers,this.add(d);const m=new gi(Or,Pr,t,i);m.layers=this.layers,this.add(m);const p=new gi(Or,Pr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===tc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,v]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(_,S,E),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class Av extends In{constructor(t=[],i=Fs,s,l,u,h,d,m,p,v){super(t,i,s,l,u,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rv extends Wi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Av(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new cl(5,5,5),u=new ji({name:"CubemapFromEquirect",uniforms:Zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:ya});u.uniforms.tEquirect.value=i;const h=new Yi(l,u),d=i.minFilter;return i.minFilter===Ps&&(i.minFilter=zn),new oM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}let Bi=class extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}};const lM={type:"move"};class Hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,s),x=this._getHandJoint(p,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=v.position.distanceTo(_.position),E=.02,A=.005;p.inputState.pinching&&S>E+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=E-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(lM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Bi;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class uM extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ta,this.environmentIntensity=1,this.environmentRotation=new Ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class cM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=kd,this.updateRanges=[],this.version=0,this.uuid=os()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=os()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=os()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new J;class ic{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Gi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Xe(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Gi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Gi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Gi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Gi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array),l=Xe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array),l=Xe(l,this.array),u=Xe(u,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=u,this}clone(t){if(t===void 0){nc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new Ui(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ic(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){nc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cv extends ul{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zr;const Ko=new J,Ir=new J,Fr=new J,Br=new ie,Qo=new ie,wv=new an,Bu=new J,Jo=new J,Hu=new J,Eg=new ie,Gh=new ie,bg=new ie;class fM extends Zn{constructor(t=new Cv){if(super(),this.isSprite=!0,this.type="Sprite",zr===void 0){zr=new Ni;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new cM(i,5);zr.setIndex([0,1,2,0,2,3]),zr.setAttribute("position",new ic(s,3,0,!1)),zr.setAttribute("uv",new ic(s,2,3,!1))}this.geometry=zr,this.material=t,this.center=new ie(.5,.5),this.count=1}raycast(t,i){t.camera===null&&be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ir.setFromMatrixScale(this.matrixWorld),wv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ir.multiplyScalar(-Fr.z);const s=this.material.rotation;let l,u;s!==0&&(u=Math.cos(s),l=Math.sin(s));const h=this.center;Gu(Bu.set(-.5,-.5,0),Fr,h,Ir,l,u),Gu(Jo.set(.5,-.5,0),Fr,h,Ir,l,u),Gu(Hu.set(.5,.5,0),Fr,h,Ir,l,u),Eg.set(0,0),Gh.set(1,0),bg.set(1,1);let d=t.ray.intersectTriangle(Bu,Jo,Hu,!1,Ko);if(d===null&&(Gu(Jo.set(-.5,.5,0),Fr,h,Ir,l,u),Gh.set(0,1),d=t.ray.intersectTriangle(Bu,Hu,Jo,!1,Ko),d===null))return;const m=t.ray.origin.distanceTo(Ko);m<t.near||m>t.far||i.push({distance:m,point:Ko.clone(),uv:xi.getInterpolation(Ko,Bu,Jo,Hu,Eg,Gh,bg,new ie),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Gu(r,t,i,s,l,u){Br.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(Qo.x=u*Br.x-l*Br.y,Qo.y=l*Br.x+u*Br.y):Qo.copy(Br),r.copy(t),r.x+=Qo.x,r.y+=Qo.y,r.applyMatrix4(wv)}class hM extends In{constructor(t=null,i=1,s=1,l,u,h,d,m,p=Un,v=Un,_,S){super(null,h,d,m,p,v,l,u,_,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vh=new J,dM=new J,pM=new de;class as{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Vh.subVectors(s,i).cross(dM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Vh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||pM.getNormalMatrix(t),l=this.coplanarPoint(Vh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new op,mM=new ie(.5,.5),Vu=new J;class Dv{constructor(t=new as,i=new as,s=new as,l=new as,u=new as,h=new as){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ki,s=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],v=u[4],_=u[5],S=u[6],E=u[7],A=u[8],C=u[9],y=u[10],x=u[11],L=u[12],P=u[13],N=u[14],I=u[15];if(l[0].setComponents(p-h,E-v,x-A,I-L).normalize(),l[1].setComponents(p+h,E+v,x+A,I+L).normalize(),l[2].setComponents(p+d,E+_,x+C,I+P).normalize(),l[3].setComponents(p-d,E-_,x-C,I-P).normalize(),s)l[4].setComponents(m,S,y,N).normalize(),l[5].setComponents(p-m,E-S,x-y,I-N).normalize();else if(l[4].setComponents(p-m,E-S,x-y,I-N).normalize(),i===ki)l[5].setComponents(p+m,E+S,x+y,I+N).normalize();else if(i===tc)l[5].setComponents(m,S,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);const i=mM.distanceTo(t.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Vu.x=l.normal.x>0?t.max.x:t.min.x,Vu.y=l.normal.y>0?t.max.y:t.min.y,Vu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Vu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _M extends In{constructor(t,i,s,l,u,h,d,m,p){super(t,i,s,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ol extends In{constructor(t,i,s=qi,l,u,h,d=Un,m=Un,p,v=ba,_=1){if(v!==ba&&v!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,u,h,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class gM extends ol{constructor(t,i=qi,s=Fs,l,u,h=Un,d=Un,m,p=ba){const v={width:t,height:t,depth:1},_=[v,v,v,v,v,v];super(t,t,i,s,l,u,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Uv extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class sc extends Ni{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,_=t/d,S=i/m,E=[],A=[],C=[],y=[];for(let x=0;x<v;x++){const L=x*S-h;for(let P=0;P<p;P++){const N=P*_-u;A.push(N,-L,0),C.push(0,0,1),y.push(P/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let L=0;L<d;L++){const P=L+p*x,N=L+p*(x+1),I=L+1+p*(x+1),B=L+1+p*x;E.push(P,N,B),E.push(N,I,B)}this.setIndex(E),this.setAttribute("position",new Si(A,3)),this.setAttribute("normal",new Si(C,3)),this.setAttribute("uv",new Si(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sc(t.width,t.height,t.widthSegments,t.heightSegments)}}class fp extends Ni{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const v=[],_=new J,S=new J,E=[],A=[],C=[],y=[];for(let x=0;x<=s;x++){const L=[],P=x/s;let N=0;x===0&&h===0?N=.5/i:x===s&&m===Math.PI&&(N=-.5/i);for(let I=0;I<=i;I++){const B=I/i;_.x=-t*Math.cos(l+B*u)*Math.sin(h+P*d),_.y=t*Math.cos(h+P*d),_.z=t*Math.sin(l+B*u)*Math.sin(h+P*d),A.push(_.x,_.y,_.z),S.copy(_).normalize(),C.push(S.x,S.y,S.z),y.push(B+N,1-P),L.push(p++)}v.push(L)}for(let x=0;x<s;x++)for(let L=0;L<i;L++){const P=v[x][L+1],N=v[x][L],I=v[x+1][L],B=v[x+1][L+1];(x!==0||h>0)&&E.push(P,N,B),(x!==s-1||m<Math.PI)&&E.push(N,I,B)}this.setIndex(E),this.setAttribute("position",new Si(A,3)),this.setAttribute("normal",new Si(C,3)),this.setAttribute("uv",new Si(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vM extends ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xM extends ul{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class SM extends ul{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Nv extends Tv{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class yM extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Tg=new an;class MM{constructor(t,i,s=0,l=1/0){this.ray=new lp(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new up,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):be("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Tg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tg),this}intersectObject(t,i=!0,s=[]){return Wd(t,this,s,i),s.sort(Ag),s}intersectObjects(t,i=!0,s=[]){for(let l=0,u=t.length;l<u;l++)Wd(t[l],this,s,i);return s.sort(Ag),s}}function Ag(r,t){return r.distance-t.distance}function Wd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const u=r.children;for(let h=0,d=u.length;h<d;h++)Wd(u[h],t,i,!0)}}class Rg{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ve(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class EM extends Hs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){re("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Cg(r,t,i,s){const l=bM(s);switch(i){case _v:return r*t;case vv:return r*t/l.components*l.byteLength;case ep:return r*t/l.components*l.byteLength;case Yr:return r*t*2/l.components*l.byteLength;case np:return r*t*2/l.components*l.byteLength;case gv:return r*t*3/l.components*l.byteLength;case Di:return r*t*4/l.components*l.byteLength;case ip:return r*t*4/l.components*l.byteLength;case Yu:case ju:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Zu:case Ku:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hd:case pd:return Math.max(r,16)*Math.max(t,8)/4;case fd:case dd:return Math.max(r,8)*Math.max(t,8)/2;case md:case _d:case vd:case xd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case gd:case Sd:case yd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Md:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ed:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case bd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Td:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Rd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case wd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Dd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ld:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Od:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Pd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case zd:case Id:case Fd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Bd:case Hd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Gd:case Vd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function bM(r){switch(r){case vi:case hv:return{byteLength:1,components:1};case al:case dv:case Ea:return{byteLength:2,components:1};case $d:case tp:return{byteLength:2,components:4};case qi:case Jd:case Vi:return{byteLength:4,components:1};case pv:case mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qd}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lv(){let r=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function TM(r){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,_=p.byteLength,S=r.createBuffer();r.bindBuffer(m,S),r.bufferData(m,p,v),d.onUploadCallback();let E;if(p instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=r.SHORT;else if(p instanceof Uint32Array)E=r.UNSIGNED_INT;else if(p instanceof Int32Array)E=r.INT;else if(p instanceof Int8Array)E=r.BYTE;else if(p instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const v=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,v);else{_.sort((E,A)=>E.start-A.start);let S=0;for(let E=1;E<_.length;E++){const A=_[S],C=_[E];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,_[S]=C)}_.length=S+1;for(let E=0,A=_.length;E<A;E++){const C=_[E];r.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var AM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RM=`#ifdef USE_ALPHAHASH
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
#endif`,CM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NM=`#ifdef USE_AOMAP
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
#endif`,LM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OM=`#ifdef USE_BATCHING
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
#endif`,PM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BM=`#ifdef USE_IRIDESCENCE
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
#endif`,HM=`#ifdef USE_BUMPMAP
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
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ZM=`#define PI 3.141592653589793
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
} // validated`,KM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,QM=`vec3 transformedNormal = objectNormal;
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
#endif`,JM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nE="gl_FragColor = linearToOutputTexel( gl_FragColor );",iE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aE=`#ifdef USE_ENVMAP
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
#endif`,sE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
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
#endif`,oE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
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
#endif`,cE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dE=`#ifdef USE_GRADIENTMAP
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
}`,pE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mE=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gE=`uniform bool receiveShadow;
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
#endif`,vE=`#ifdef USE_ENVMAP
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
#endif`,xE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ME=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EE=`PhysicalMaterial material;
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
#endif`,bE=`uniform sampler2D dfgLUT;
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
}`,TE=`
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
#endif`,AE=`#if defined( RE_IndirectDiffuse )
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
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PE=`#if defined( USE_POINTS_UV )
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
#endif`,zE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GE=`#ifdef USE_MORPHTARGETS
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
#endif`,VE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,XE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WE=`#ifndef FLAT_SHADED
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
#endif`,YE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jE=`#ifdef USE_NORMALMAP
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
#endif`,ZE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$E=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ib=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ab=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cb=`float getShadowMask() {
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
}`,fb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hb=`#ifdef USE_SKINNING
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
#endif`,db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pb=`#ifdef USE_SKINNING
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
#endif`,mb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xb=`#ifdef USE_TRANSMISSION
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
#endif`,Sb=`#ifdef USE_TRANSMISSION
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ab=`uniform sampler2D t2D;
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
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Db=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`#include <common>
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
}`,Nb=`#if DEPTH_PACKING == 3200
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
}`,Lb=`#define DISTANCE
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
}`,Ob=`#define DISTANCE
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
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zb=`uniform sampler2D tEquirect;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Bb=`#include <common>
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
}`,Hb=`uniform vec3 diffuse;
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
}`,Gb=`#define LAMBERT
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
}`,Vb=`#define LAMBERT
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
}`,kb=`#define MATCAP
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
}`,Xb=`#define MATCAP
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
}`,Wb=`#define NORMAL
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
}`,Yb=`#define PHONG
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
}`,jb=`#define PHONG
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
}`,Zb=`#define STANDARD
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
}`,Kb=`#define STANDARD
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
}`,Qb=`#define TOON
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
}`,Jb=`#define TOON
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
}`,$b=`uniform float size;
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
}`,tT=`uniform vec3 diffuse;
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
}`,eT=`#include <common>
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
}`,nT=`uniform vec3 color;
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
}`,iT=`uniform float rotation;
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
}`,aT=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:AM,alphahash_pars_fragment:RM,alphamap_fragment:CM,alphamap_pars_fragment:wM,alphatest_fragment:DM,alphatest_pars_fragment:UM,aomap_fragment:NM,aomap_pars_fragment:LM,batching_pars_vertex:OM,batching_vertex:PM,begin_vertex:zM,beginnormal_vertex:IM,bsdfs:FM,iridescence_fragment:BM,bumpmap_pars_fragment:HM,clipping_planes_fragment:GM,clipping_planes_pars_fragment:VM,clipping_planes_pars_vertex:kM,clipping_planes_vertex:XM,color_fragment:WM,color_pars_fragment:qM,color_pars_vertex:YM,color_vertex:jM,common:ZM,cube_uv_reflection_fragment:KM,defaultnormal_vertex:QM,displacementmap_pars_vertex:JM,displacementmap_vertex:$M,emissivemap_fragment:tE,emissivemap_pars_fragment:eE,colorspace_fragment:nE,colorspace_pars_fragment:iE,envmap_fragment:aE,envmap_common_pars_fragment:sE,envmap_pars_fragment:rE,envmap_pars_vertex:oE,envmap_physical_pars_fragment:vE,envmap_vertex:lE,fog_vertex:uE,fog_pars_vertex:cE,fog_fragment:fE,fog_pars_fragment:hE,gradientmap_pars_fragment:dE,lightmap_pars_fragment:pE,lights_lambert_fragment:mE,lights_lambert_pars_fragment:_E,lights_pars_begin:gE,lights_toon_fragment:xE,lights_toon_pars_fragment:SE,lights_phong_fragment:yE,lights_phong_pars_fragment:ME,lights_physical_fragment:EE,lights_physical_pars_fragment:bE,lights_fragment_begin:TE,lights_fragment_maps:AE,lights_fragment_end:RE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:wE,logdepthbuf_pars_vertex:DE,logdepthbuf_vertex:UE,map_fragment:NE,map_pars_fragment:LE,map_particle_fragment:OE,map_particle_pars_fragment:PE,metalnessmap_fragment:zE,metalnessmap_pars_fragment:IE,morphinstance_vertex:FE,morphcolor_vertex:BE,morphnormal_vertex:HE,morphtarget_pars_vertex:GE,morphtarget_vertex:VE,normal_fragment_begin:kE,normal_fragment_maps:XE,normal_pars_fragment:WE,normal_pars_vertex:qE,normal_vertex:YE,normalmap_pars_fragment:jE,clearcoat_normal_fragment_begin:ZE,clearcoat_normal_fragment_maps:KE,clearcoat_pars_fragment:QE,iridescence_pars_fragment:JE,opaque_fragment:$E,packing:tb,premultiplied_alpha_fragment:eb,project_vertex:nb,dithering_fragment:ib,dithering_pars_fragment:ab,roughnessmap_fragment:sb,roughnessmap_pars_fragment:rb,shadowmap_pars_fragment:ob,shadowmap_pars_vertex:lb,shadowmap_vertex:ub,shadowmask_pars_fragment:cb,skinbase_vertex:fb,skinning_pars_vertex:hb,skinning_vertex:db,skinnormal_vertex:pb,specularmap_fragment:mb,specularmap_pars_fragment:_b,tonemapping_fragment:gb,tonemapping_pars_fragment:vb,transmission_fragment:xb,transmission_pars_fragment:Sb,uv_pars_fragment:yb,uv_pars_vertex:Mb,uv_vertex:Eb,worldpos_vertex:bb,background_vert:Tb,background_frag:Ab,backgroundCube_vert:Rb,backgroundCube_frag:Cb,cube_vert:wb,cube_frag:Db,depth_vert:Ub,depth_frag:Nb,distance_vert:Lb,distance_frag:Ob,equirect_vert:Pb,equirect_frag:zb,linedashed_vert:Ib,linedashed_frag:Fb,meshbasic_vert:Bb,meshbasic_frag:Hb,meshlambert_vert:Gb,meshlambert_frag:Vb,meshmatcap_vert:kb,meshmatcap_frag:Xb,meshnormal_vert:Wb,meshnormal_frag:qb,meshphong_vert:Yb,meshphong_frag:jb,meshphysical_vert:Zb,meshphysical_frag:Kb,meshtoon_vert:Qb,meshtoon_frag:Jb,points_vert:$b,points_frag:tT,shadow_vert:eT,shadow_frag:nT,sprite_vert:iT,sprite_frag:aT},It={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Hi={basic:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new He(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Hn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Hn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new He(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Hn([It.points,It.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Hn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Hn([It.common,It.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Hn([It.sprite,It.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:Hn([It.common,It.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:Hn([It.lights,It.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Hi.physical={uniforms:Hn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const ku={r:0,b:0,g:0},Us=new Ta,sT=new an;function rT(r,t,i,s,l,u,h){const d=new He(0);let m=u===!0?0:1,p,v,_=null,S=0,E=null;function A(P){let N=P.isScene===!0?P.background:null;return N&&N.isTexture&&(N=(P.backgroundBlurriness>0?i:t).get(N)),N}function C(P){let N=!1;const I=A(P);I===null?x(d,m):I&&I.isColor&&(x(I,1),N=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(P,N){const I=A(N);I&&(I.isCubeTexture||I.mapping===ac)?(v===void 0&&(v=new Yi(new cl(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Zr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,z,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Us.copy(N.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),v.material.uniforms.envMap.value=I,v.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(sT.makeRotationFromEuler(Us)),v.material.toneMapped=Ae.getTransfer(I.colorSpace)!==Be,(_!==I||S!==I.version||E!==r.toneMapping)&&(v.material.needsUpdate=!0,_=I,S=I.version,E=r.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Yi(new sc(2,2),new ji({name:"BackgroundMaterial",uniforms:Zr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(I.colorSpace)!==Be,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||S!==I.version||E!==r.toneMapping)&&(p.material.needsUpdate=!0,_=I,S=I.version,E=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function x(P,N){P.getRGB(ku,bv(r)),s.buffers.color.setClear(ku.r,ku.g,ku.b,N,h)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,N=1){d.set(P),m=N,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,x(d,m)},render:C,addToRenderList:y,dispose:L}}function oT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(D,k,it,at,dt){let ot=!1;const O=_(at,it,k);u!==O&&(u=O,p(u.object)),ot=E(D,at,it,dt),ot&&A(D,at,it,dt),dt!==null&&t.update(dt,r.ELEMENT_ARRAY_BUFFER),(ot||h)&&(h=!1,N(D,k,it,at),dt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function v(D){return r.deleteVertexArray(D)}function _(D,k,it){const at=it.wireframe===!0;let dt=s[D.id];dt===void 0&&(dt={},s[D.id]=dt);let ot=dt[k.id];ot===void 0&&(ot={},dt[k.id]=ot);let O=ot[at];return O===void 0&&(O=S(m()),ot[at]=O),O}function S(D){const k=[],it=[],at=[];for(let dt=0;dt<i;dt++)k[dt]=0,it[dt]=0,at[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:it,attributeDivisors:at,object:D,attributes:{},index:null}}function E(D,k,it,at){const dt=u.attributes,ot=k.attributes;let O=0;const H=it.getAttributes();for(const K in H)if(H[K].location>=0){const ht=dt[K];let w=ot[K];if(w===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(w=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(w=D.instanceColor)),ht===void 0||ht.attribute!==w||w&&ht.data!==w.data)return!0;O++}return u.attributesNum!==O||u.index!==at}function A(D,k,it,at){const dt={},ot=k.attributes;let O=0;const H=it.getAttributes();for(const K in H)if(H[K].location>=0){let ht=ot[K];ht===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(ht=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(ht=D.instanceColor));const w={};w.attribute=ht,ht&&ht.data&&(w.data=ht.data),dt[K]=w,O++}u.attributes=dt,u.attributesNum=O,u.index=at}function C(){const D=u.newAttributes;for(let k=0,it=D.length;k<it;k++)D[k]=0}function y(D){x(D,0)}function x(D,k){const it=u.newAttributes,at=u.enabledAttributes,dt=u.attributeDivisors;it[D]=1,at[D]===0&&(r.enableVertexAttribArray(D),at[D]=1),dt[D]!==k&&(r.vertexAttribDivisor(D,k),dt[D]=k)}function L(){const D=u.newAttributes,k=u.enabledAttributes;for(let it=0,at=k.length;it<at;it++)k[it]!==D[it]&&(r.disableVertexAttribArray(it),k[it]=0)}function P(D,k,it,at,dt,ot,O){O===!0?r.vertexAttribIPointer(D,k,it,dt,ot):r.vertexAttribPointer(D,k,it,at,dt,ot)}function N(D,k,it,at){C();const dt=at.attributes,ot=it.getAttributes(),O=k.defaultAttributeValues;for(const H in ot){const K=ot[H];if(K.location>=0){let ft=dt[H];if(ft===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(ft=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(ft=D.instanceColor)),ft!==void 0){const ht=ft.normalized,w=ft.itemSize,Z=t.get(ft);if(Z===void 0)continue;const mt=Z.buffer,bt=Z.type,Lt=Z.bytesPerElement,et=bt===r.INT||bt===r.UNSIGNED_INT||ft.gpuType===Jd;if(ft.isInterleavedBufferAttribute){const W=ft.data,xt=W.stride,wt=ft.offset;if(W.isInstancedInterleavedBuffer){for(let Nt=0;Nt<K.locationSize;Nt++)x(K.location+Nt,W.meshPerAttribute);D.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Nt=0;Nt<K.locationSize;Nt++)y(K.location+Nt);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let Nt=0;Nt<K.locationSize;Nt++)P(K.location+Nt,w/K.locationSize,bt,ht,xt*Lt,(wt+w/K.locationSize*Nt)*Lt,et)}else{if(ft.isInstancedBufferAttribute){for(let W=0;W<K.locationSize;W++)x(K.location+W,ft.meshPerAttribute);D.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let W=0;W<K.locationSize;W++)y(K.location+W);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let W=0;W<K.locationSize;W++)P(K.location+W,w/K.locationSize,bt,ht,w*Lt,w/K.locationSize*W*Lt,et)}}else if(O!==void 0){const ht=O[H];if(ht!==void 0)switch(ht.length){case 2:r.vertexAttrib2fv(K.location,ht);break;case 3:r.vertexAttrib3fv(K.location,ht);break;case 4:r.vertexAttrib4fv(K.location,ht);break;default:r.vertexAttrib1fv(K.location,ht)}}}}L()}function I(){$();for(const D in s){const k=s[D];for(const it in k){const at=k[it];for(const dt in at)v(at[dt].object),delete at[dt];delete k[it]}delete s[D]}}function B(D){if(s[D.id]===void 0)return;const k=s[D.id];for(const it in k){const at=k[it];for(const dt in at)v(at[dt].object),delete at[dt];delete k[it]}delete s[D.id]}function z(D){for(const k in s){const it=s[k];if(it[D.id]===void 0)continue;const at=it[D.id];for(const dt in at)v(at[dt].object),delete at[dt];delete it[D.id]}}function $(){R(),h=!0,u!==l&&(u=l,p(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:R,dispose:I,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:y,disableUnusedAttributes:L}}function lT(r,t,i){let s;function l(p){s=p}function u(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,_){_!==0&&(r.drawArraysInstanced(s,p,v,_),i.update(v,s,_))}function d(p,v,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,_);let E=0;for(let A=0;A<_;A++)E+=v[A];i.update(E,s,1)}function m(p,v,_,S){if(_===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<p.length;A++)h(p[A],v[A],S[A]);else{E.multiDrawArraysInstancedWEBGL(s,p,0,v,0,S,0,_);let A=0;for(let C=0;C<_;C++)A+=v[C]*S[C];i.update(A,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function uT(r,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Di&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const $=z===Ea&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==vi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Vi&&!$)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(re("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:N,maxSamples:I,samples:B}}function cT(r){const t=this;let i=null,s=0,l=!1,u=!1;const h=new as,d=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const E=_.length!==0||S||s!==0||l;return l=S,s=_.length,E},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=v(_,S,0)},this.setState=function(_,S,E){const A=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,x=r.get(_);if(!l||A===null||A.length===0||u&&!y)u?v(null):p();else{const L=u?0:s,P=L*4;let N=x.clippingState||null;m.value=N,N=v(A,S,P,E);for(let I=0;I!==P;++I)N[I]=i[I];x.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(_,S,E,A){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,A!==!0||y===null){const x=E+C*4,L=S.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,N=E;P!==C;++P,N+=4)h.copy(_[P]).applyMatrix4(L,d),h.normal.toArray(y,N),y[N+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}function fT(r){let t=new WeakMap;function i(h,d){return d===od?h.mapping=Fs:d===ld&&(h.mapping=qr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===od||d===ld)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Rv(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const rs=4,wg=[.125,.215,.35,.446,.526,.582],Os=20,hT=256,$o=new Nv,Dg=new He;let kh=null,Xh=0,Wh=0,qh=!1;const dT=new J;class Ug{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=dT}=u;kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Og(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kh,Xh,Wh),this._renderer.xr.enabled=qh,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Fs||t.mapping===qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ea,format:Di,colorSpace:jr,depthBuffer:!1},l=Ng(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ng(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pT(u)),this._blurMaterial=_T(u,t,i),this._ggxMaterial=mT(u,t,i)}return l}_compileMaterial(t){const i=new Yi(new Ni,t);this._renderer.compile(i,$o)}_sceneToCubeUV(t,i,s,l,u){const m=new gi(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,E=_.toneMapping;_.getClearColor(Dg),_.toneMapping=Xi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yi(new cl,new cp({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const L=t.background;L?L.isColor&&(y.color.copy(L),t.background=null,x=!0):(y.color.copy(Dg),x=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[P],u.y,u.z)):N===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[P]));const I=this._cubeSize;Hr(l,N*I,P>2?I:0,I,I),_.setRenderTarget(l),x&&_.render(C,m),_.render(t,m)}_.toneMapping=E,_.autoClear=S,t.background=L}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Fs||t.mapping===qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Og()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Hr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,$o)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),S=0+p*1.25,E=_*S,{_lodMax:A}=this,C=this._sizeLods[s],y=3*C*(s>A-rs?s-A+rs:0),x=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=A-i,Hr(u,y,x,3*C,2*C),l.setRenderTarget(u),l.render(d,$o),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-s,Hr(t,y,x,3*C,2*C),l.setRenderTarget(t),l.render(d,$o)}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&be("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,E=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Os-1),C=u/A,y=isFinite(u)?1+Math.floor(v*C):Os;y>Os&&re(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Os}`);const x=[];let L=0;for(let z=0;z<Os;++z){const $=z/C,R=Math.exp(-$*$/2);x.push(R),z===0?L+=R:z<y&&(L+=2*R)}for(let z=0;z<x.length;z++)x[z]=x[z]/L;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:P}=this;S.dTheta.value=A,S.mipInt.value=P-s;const N=this._sizeLods[l],I=3*N*(l>P-rs?l-P+rs:0),B=4*(this._cubeSize-N);Hr(i,I,B,3*N,2*N),m.setRenderTarget(i),m.render(_,$o)}}function pT(r){const t=[],i=[],s=[];let l=r;const u=r-rs+1+wg.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-rs?m=wg[h-r+rs-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,_=1+p,S=[v,v,_,v,_,_,v,v,_,_,v,_],E=6,A=6,C=3,y=2,x=1,L=new Float32Array(C*A*E),P=new Float32Array(y*A*E),N=new Float32Array(x*A*E);for(let B=0;B<E;B++){const z=B%3*2/3-1,$=B>2?0:-1,R=[z,$,0,z+2/3,$,0,z+2/3,$+1,0,z,$,0,z+2/3,$+1,0,z,$+1,0];L.set(R,C*A*B),P.set(S,y*A*B);const D=[B,B,B,B,B,B];N.set(D,x*A*B)}const I=new Ni;I.setAttribute("position",new Ui(L,C)),I.setAttribute("uv",new Ui(P,y)),I.setAttribute("faceIndex",new Ui(N,x)),s.push(new Yi(I,null)),l>rs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Ng(r,t,i){const s=new Wi(r,t,i);return s.texture.mapping=ac,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Hr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function mT(r,t,i){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function _T(r,t,i){const s=new Float32Array(Os),l=new J(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:rc(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Lg(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Og(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function gT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===od||m===ld,v=m===Fs||m===qr;if(p||v){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Ug(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const E=d.image;return p&&E&&E.height>0||v&&E&&l(E)?(i===null&&(i=new Ug(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function vT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&rl("WebGLRenderer: "+s+" extension not supported."),l}}}function xT(r,t,i,s){const l={},u=new WeakMap;function h(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const A in S.attributes)t.remove(S.attributes[A]);S.removeEventListener("dispose",h),delete l[S.id];const E=u.get(S);E&&(t.remove(E),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const E in S)t.update(S[E],r.ARRAY_BUFFER)}function p(_){const S=[],E=_.index,A=_.attributes.position;let C=0;if(E!==null){const L=E.array;C=E.version;for(let P=0,N=L.length;P<N;P+=3){const I=L[P+0],B=L[P+1],z=L[P+2];S.push(I,B,B,z,z,I)}}else if(A!==void 0){const L=A.array;C=A.version;for(let P=0,N=L.length/3-1;P<N;P+=3){const I=P+0,B=P+1,z=P+2;S.push(I,B,B,z,z,I)}}else return;const y=new(xv(S)?Ev:Mv)(S,1);y.version=C;const x=u.get(_);x&&t.remove(x),u.set(_,y)}function v(_){const S=u.get(_);if(S){const E=_.index;E!==null&&S.version<E.version&&p(_)}else p(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:v}}function ST(r,t,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,E){r.drawElements(s,E,u,S*h),i.update(E,s,1)}function p(S,E,A){A!==0&&(r.drawElementsInstanced(s,E,u,S*h,A),i.update(E,s,A))}function v(S,E,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,u,S,0,A);let y=0;for(let x=0;x<A;x++)y+=E[x];i.update(y,s,1)}function _(S,E,A,C){if(A===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/h,E[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(s,E,0,u,S,0,C,0,A);let x=0;for(let L=0;L<A;L++)x+=E[L]*C[L];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function yT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(u/3);break;case r.LINES:i.lines+=d*(u/2);break;case r.LINE_STRIP:i.lines+=d*(u-1);break;case r.LINE_LOOP:i.lines+=d*u;break;case r.POINTS:i.points+=d*u;break;default:be("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function MT(r,t,i){const s=new WeakMap,l=new on;function u(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let S=s.get(d);if(S===void 0||S.count!==_){let D=function(){$.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var E=D;S!==void 0&&S.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let N=0;A===!0&&(N=1),C===!0&&(N=2),y===!0&&(N=3);let I=d.attributes.position.count*N,B=1;I>t.maxTextureSize&&(B=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const z=new Float32Array(I*B*4*_),$=new Sv(z,I,B,_);$.type=Vi,$.needsUpdate=!0;const R=N*4;for(let k=0;k<_;k++){const it=x[k],at=L[k],dt=P[k],ot=I*B*4*k;for(let O=0;O<it.count;O++){const H=O*R;A===!0&&(l.fromBufferAttribute(it,O),z[ot+H+0]=l.x,z[ot+H+1]=l.y,z[ot+H+2]=l.z,z[ot+H+3]=0),C===!0&&(l.fromBufferAttribute(at,O),z[ot+H+4]=l.x,z[ot+H+5]=l.y,z[ot+H+6]=l.z,z[ot+H+7]=0),y===!0&&(l.fromBufferAttribute(dt,O),z[ot+H+8]=l.x,z[ot+H+9]=l.y,z[ot+H+10]=l.z,z[ot+H+11]=dt.itemSize===4?l.w:1)}}S={count:_,texture:$,size:new ie(I,B)},s.set(d,S),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const C=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:u}}function ET(r,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,v=m.geometry,_=t.get(m,v);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const bT={[av]:"LINEAR_TONE_MAPPING",[sv]:"REINHARD_TONE_MAPPING",[rv]:"CINEON_TONE_MAPPING",[ov]:"ACES_FILMIC_TONE_MAPPING",[uv]:"AGX_TONE_MAPPING",[cv]:"NEUTRAL_TONE_MAPPING",[lv]:"CUSTOM_TONE_MAPPING"};function TT(r,t,i,s,l){const u=new Wi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new Wi(t,i,{type:Ea,depthBuffer:!1,stencilBuffer:!1}),d=new Ni;d.setAttribute("position",new Si([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Si([0,2,0,0,2,0],2));const m=new vM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Yi(d,m),v=new Nv(-1,1,1,-1,0,1);let _=null,S=null,E=!1,A,C=null,y=[],x=!1;this.setSize=function(L,P){u.setSize(L,P),h.setSize(L,P);for(let N=0;N<y.length;N++){const I=y[N];I.setSize&&I.setSize(L,P)}},this.setEffects=function(L){y=L,x=y.length>0&&y[0].isRenderPass===!0;const P=u.width,N=u.height;for(let I=0;I<y.length;I++){const B=y[I];B.setSize&&B.setSize(P,N)}},this.begin=function(L,P){if(E||L.toneMapping===Xi&&y.length===0)return!1;if(C=P,P!==null){const N=P.width,I=P.height;(u.width!==N||u.height!==I)&&this.setSize(N,I)}return x===!1&&L.setRenderTarget(u),A=L.toneMapping,L.toneMapping=Xi,!0},this.hasRenderPass=function(){return x},this.end=function(L,P){L.toneMapping=A,E=!0;let N=u,I=h;for(let B=0;B<y.length;B++){const z=y[B];if(z.enabled!==!1&&(z.render(L,I,N,P),z.needsSwap!==!1)){const $=N;N=I,I=$}}if(_!==L.outputColorSpace||S!==L.toneMapping){_=L.outputColorSpace,S=L.toneMapping,m.defines={},Ae.getTransfer(_)===Be&&(m.defines.SRGB_TRANSFER="");const B=bT[S];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,L.setRenderTarget(C),L.render(p,v),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Ov=new In,qd=new ol(1,1),Pv=new Sv,zv=new Wy,Iv=new Av,Pg=[],zg=[],Ig=new Float32Array(16),Fg=new Float32Array(9),Bg=new Float32Array(4);function Kr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let u=Pg[l];if(u===void 0&&(u=new Float32Array(l),Pg[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(u,d)}return u}function gn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function oc(r,t){let i=zg[t];i===void 0&&(i=new Int32Array(t),zg[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function AT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function RT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2fv(this.addr,t),vn(i,t)}}function CT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;r.uniform3fv(this.addr,t),vn(i,t)}}function wT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4fv(this.addr,t),vn(i,t)}}function DT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,s))return;Bg.set(s),r.uniformMatrix2fv(this.addr,!1,Bg),vn(i,s)}}function UT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,s))return;Fg.set(s),r.uniformMatrix3fv(this.addr,!1,Fg),vn(i,s)}}function NT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,s))return;Ig.set(s),r.uniformMatrix4fv(this.addr,!1,Ig),vn(i,s)}}function LT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function OT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2iv(this.addr,t),vn(i,t)}}function PT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;r.uniform3iv(this.addr,t),vn(i,t)}}function zT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4iv(this.addr,t),vn(i,t)}}function IT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function FT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2uiv(this.addr,t),vn(i,t)}}function BT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;r.uniform3uiv(this.addr,t),vn(i,t)}}function HT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4uiv(this.addr,t),vn(i,t)}}function GT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(qd.compareFunction=i.isReversedDepthBuffer()?sp:ap,u=qd):u=Ov,i.setTexture2D(t||u,l)}function VT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||zv,l)}function kT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Iv,l)}function XT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Pv,l)}function WT(r){switch(r){case 5126:return AT;case 35664:return RT;case 35665:return CT;case 35666:return wT;case 35674:return DT;case 35675:return UT;case 35676:return NT;case 5124:case 35670:return LT;case 35667:case 35671:return OT;case 35668:case 35672:return PT;case 35669:case 35673:return zT;case 5125:return IT;case 36294:return FT;case 36295:return BT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return XT}}function qT(r,t){r.uniform1fv(this.addr,t)}function YT(r,t){const i=Kr(t,this.size,2);r.uniform2fv(this.addr,i)}function jT(r,t){const i=Kr(t,this.size,3);r.uniform3fv(this.addr,i)}function ZT(r,t){const i=Kr(t,this.size,4);r.uniform4fv(this.addr,i)}function KT(r,t){const i=Kr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function QT(r,t){const i=Kr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function JT(r,t){const i=Kr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function $T(r,t){r.uniform1iv(this.addr,t)}function t1(r,t){r.uniform2iv(this.addr,t)}function e1(r,t){r.uniform3iv(this.addr,t)}function n1(r,t){r.uniform4iv(this.addr,t)}function i1(r,t){r.uniform1uiv(this.addr,t)}function a1(r,t){r.uniform2uiv(this.addr,t)}function s1(r,t){r.uniform3uiv(this.addr,t)}function r1(r,t){r.uniform4uiv(this.addr,t)}function o1(r,t,i){const s=this.cache,l=t.length,u=oc(i,l);gn(s,u)||(r.uniform1iv(this.addr,u),vn(s,u));let h;this.type===r.SAMPLER_2D_SHADOW?h=qd:h=Ov;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,u[d])}function l1(r,t,i){const s=this.cache,l=t.length,u=oc(i,l);gn(s,u)||(r.uniform1iv(this.addr,u),vn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||zv,u[h])}function u1(r,t,i){const s=this.cache,l=t.length,u=oc(i,l);gn(s,u)||(r.uniform1iv(this.addr,u),vn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Iv,u[h])}function c1(r,t,i){const s=this.cache,l=t.length,u=oc(i,l);gn(s,u)||(r.uniform1iv(this.addr,u),vn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Pv,u[h])}function f1(r){switch(r){case 5126:return qT;case 35664:return YT;case 35665:return jT;case 35666:return ZT;case 35674:return KT;case 35675:return QT;case 35676:return JT;case 5124:case 35670:return $T;case 35667:case 35671:return t1;case 35668:case 35672:return e1;case 35669:case 35673:return n1;case 5125:return i1;case 36294:return a1;case 36295:return s1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return c1}}class h1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=WT(i.type)}}class d1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=f1(i.type)}}class p1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function Hg(r,t){r.seq.push(t),r.map[t.id]=t}function m1(r,t,i){const s=r.name,l=s.length;for(Yh.lastIndex=0;;){const u=Yh.exec(s),h=Yh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Hg(i,p===void 0?new h1(d,r,t):new d1(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new p1(d),Hg(i,_)),i=_}}}class Ju{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);m1(d,m,this)}const l=[],u=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Gg(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const _1=37297;let g1=0;function v1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Vg=new de;function x1(r){Ae._getMatrix(Vg,Ae.workingColorSpace,r);const t=`mat3( ${Vg.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(r)){case $u:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function kg(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),u=(r.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+v1(r.getShaderSource(t),d)}else return u}function S1(r,t){const i=x1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const y1={[av]:"Linear",[sv]:"Reinhard",[rv]:"Cineon",[ov]:"ACESFilmic",[uv]:"AgX",[cv]:"Neutral",[lv]:"Custom"};function M1(r,t){const i=y1[t];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xu=new J;function E1(){Ae.getLuminanceCoefficients(Xu);const r=Xu.x.toFixed(4),t=Xu.y.toFixed(4),i=Xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function T1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function A1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(t,l),h=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function nl(r){return r!==""}function Xg(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wg(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const R1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(r){return r.replace(R1,w1)}const C1=new Map;function w1(r,t){let i=pe[t];if(i===void 0){const s=C1.get(t);if(s!==void 0)i=pe[s],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Yd(i)}const D1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qg(r){return r.replace(D1,U1)}function U1(r,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Yg(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const N1={[qu]:"SHADOWMAP_TYPE_PCF",[el]:"SHADOWMAP_TYPE_VSM"};function L1(r){return N1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const O1={[Fs]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE",[ac]:"ENVMAP_TYPE_CUBE_UV"};function P1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":O1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const z1={[qr]:"ENVMAP_MODE_REFRACTION"};function I1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":z1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const F1={[iv]:"ENVMAP_BLENDING_MULTIPLY",[by]:"ENVMAP_BLENDING_MIX",[Ty]:"ENVMAP_BLENDING_ADD"};function B1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":F1[r.combine]||"ENVMAP_BLENDING_NONE"}function H1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function G1(r,t,i,s){const l=r.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=L1(i),p=P1(i),v=I1(i),_=B1(i),S=H1(i),E=b1(i),A=T1(u),C=l.createProgram();let y,x,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(nl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(nl).join(`
`),x.length>0&&(x+=`
`)):(y=[Yg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),x=[Yg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?pe.tonemapping_pars_fragment:"",i.toneMapping!==Xi?M1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,S1("linearToOutputTexel",i.outputColorSpace),E1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(nl).join(`
`)),h=Yd(h),h=Xg(h,i),h=Wg(h,i),d=Yd(d),d=Xg(d,i),d=Wg(d,i),h=qg(h),d=qg(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=L+y+h,N=L+x+d,I=Gg(l,l.VERTEX_SHADER,P),B=Gg(l,l.FRAGMENT_SHADER,N);l.attachShader(C,I),l.attachShader(C,B),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(k){if(r.debug.checkShaderErrors){const it=l.getProgramInfoLog(C)||"",at=l.getShaderInfoLog(I)||"",dt=l.getShaderInfoLog(B)||"",ot=it.trim(),O=at.trim(),H=dt.trim();let K=!0,ft=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,I,B);else{const ht=kg(l,I,"vertex"),w=kg(l,B,"fragment");be("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ot+`
`+ht+`
`+w)}else ot!==""?re("WebGLProgram: Program Info Log:",ot):(O===""||H==="")&&(ft=!1);ft&&(k.diagnostics={runnable:K,programLog:ot,vertexShader:{log:O,prefix:y},fragmentShader:{log:H,prefix:x}})}l.deleteShader(I),l.deleteShader(B),$=new Ju(l,C),R=A1(l,C)}let $;this.getUniforms=function(){return $===void 0&&z(this),$};let R;this.getAttributes=function(){return R===void 0&&z(this),R};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(C,_1)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=g1++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=B,this}let V1=0;class k1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new X1(t),i.set(t,s)),s}}class X1{constructor(t){this.id=V1++,this.code=t,this.usedTimes=0}}function W1(r,t,i,s,l,u,h){const d=new up,m=new k1,p=new Set,v=[],_=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function y(R,D,k,it,at){const dt=it.fog,ot=at.geometry,O=R.isMeshStandardMaterial?it.environment:null,H=(R.isMeshStandardMaterial?i:t).get(R.envMap||O),K=H&&H.mapping===ac?H.image.height:null,ft=A[R.type];R.precision!==null&&(E=l.getMaxPrecision(R.precision),E!==R.precision&&re("WebGLProgram.getParameters:",R.precision,"not supported, using",E,"instead."));const ht=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,w=ht!==void 0?ht.length:0;let Z=0;ot.morphAttributes.position!==void 0&&(Z=1),ot.morphAttributes.normal!==void 0&&(Z=2),ot.morphAttributes.color!==void 0&&(Z=3);let mt,bt,Lt,et;if(ft){const Te=Hi[ft];mt=Te.vertexShader,bt=Te.fragmentShader}else mt=R.vertexShader,bt=R.fragmentShader,m.update(R),Lt=m.getVertexShaderID(R),et=m.getFragmentShaderID(R);const W=r.getRenderTarget(),xt=r.state.buffers.depth.getReversed(),wt=at.isInstancedMesh===!0,Nt=at.isBatchedMesh===!0,ce=!!R.map,$e=!!R.matcap,xe=!!H,me=!!R.aoMap,we=!!R.lightMap,le=!!R.bumpMap,tn=!!R.normalMap,G=!!R.displacementMap,Ke=!!R.emissiveMap,Ee=!!R.metalnessMap,Le=!!R.roughnessMap,Yt=R.anisotropy>0,U=R.clearcoat>0,M=R.dispersion>0,q=R.iridescence>0,_t=R.sheen>0,yt=R.transmission>0,ct=Yt&&!!R.anisotropyMap,Zt=U&&!!R.clearcoatMap,Dt=U&&!!R.clearcoatNormalMap,Xt=U&&!!R.clearcoatRoughnessMap,ne=q&&!!R.iridescenceMap,Et=q&&!!R.iridescenceThicknessMap,Tt=_t&&!!R.sheenColorMap,Ht=_t&&!!R.sheenRoughnessMap,Ft=!!R.specularMap,Ut=!!R.specularColorMap,fe=!!R.specularIntensityMap,X=yt&&!!R.transmissionMap,Pt=yt&&!!R.thicknessMap,At=!!R.gradientMap,Bt=!!R.alphaMap,Mt=R.alphaTest>0,St=!!R.alphaHash,Rt=!!R.extensions;let ae=Xi;R.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ae=r.toneMapping);const Pe={shaderID:ft,shaderType:R.type,shaderName:R.name,vertexShader:mt,fragmentShader:bt,defines:R.defines,customVertexShaderID:Lt,customFragmentShaderID:et,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:E,batching:Nt,batchingColor:Nt&&at._colorsTexture!==null,instancing:wt,instancingColor:wt&&at.instanceColor!==null,instancingMorph:wt&&at.morphTexture!==null,outputColorSpace:W===null?r.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:jr,alphaToCoverage:!!R.alphaToCoverage,map:ce,matcap:$e,envMap:xe,envMapMode:xe&&H.mapping,envMapCubeUVHeight:K,aoMap:me,lightMap:we,bumpMap:le,normalMap:tn,displacementMap:G,emissiveMap:Ke,normalMapObjectSpace:tn&&R.normalMapType===wy,normalMapTangentSpace:tn&&R.normalMapType===Cy,metalnessMap:Ee,roughnessMap:Le,anisotropy:Yt,anisotropyMap:ct,clearcoat:U,clearcoatMap:Zt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Xt,dispersion:M,iridescence:q,iridescenceMap:ne,iridescenceThicknessMap:Et,sheen:_t,sheenColorMap:Tt,sheenRoughnessMap:Ht,specularMap:Ft,specularColorMap:Ut,specularIntensityMap:fe,transmission:yt,transmissionMap:X,thicknessMap:Pt,gradientMap:At,opaque:R.transparent===!1&&R.blending===kr&&R.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Mt,alphaHash:St,combine:R.combine,mapUv:ce&&C(R.map.channel),aoMapUv:me&&C(R.aoMap.channel),lightMapUv:we&&C(R.lightMap.channel),bumpMapUv:le&&C(R.bumpMap.channel),normalMapUv:tn&&C(R.normalMap.channel),displacementMapUv:G&&C(R.displacementMap.channel),emissiveMapUv:Ke&&C(R.emissiveMap.channel),metalnessMapUv:Ee&&C(R.metalnessMap.channel),roughnessMapUv:Le&&C(R.roughnessMap.channel),anisotropyMapUv:ct&&C(R.anisotropyMap.channel),clearcoatMapUv:Zt&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&C(R.sheenRoughnessMap.channel),specularMapUv:Ft&&C(R.specularMap.channel),specularColorMapUv:Ut&&C(R.specularColorMap.channel),specularIntensityMapUv:fe&&C(R.specularIntensityMap.channel),transmissionMapUv:X&&C(R.transmissionMap.channel),thicknessMapUv:Pt&&C(R.thicknessMap.channel),alphaMapUv:Bt&&C(R.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(tn||Yt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ot.attributes.uv&&(ce||Bt),fog:!!dt,useFog:R.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:xt,skinning:at.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:Z,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:ce&&R.map.isVideoTexture===!0&&Ae.getTransfer(R.map.colorSpace)===Be,decodeVideoTextureEmissive:Ke&&R.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(R.emissiveMap.colorSpace)===Be,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===xa,flipSided:R.side===jn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Rt&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&R.extensions.multiDraw===!0||Nt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function x(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const k in R.defines)D.push(k),D.push(R.defines[k]);return R.isRawShaderMaterial===!1&&(L(D,R),P(D,R),D.push(r.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function L(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function P(R,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),R.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),R.push(d.mask)}function N(R){const D=A[R.type];let k;if(D){const it=Hi[D];k=aM.clone(it.uniforms)}else k=R.uniforms;return k}function I(R,D){let k=_.get(D);return k!==void 0?++k.usedTimes:(k=new G1(r,D,R,u),v.push(k),_.set(D,k)),k}function B(R){if(--R.usedTimes===0){const D=v.indexOf(R);v[D]=v[v.length-1],v.pop(),_.delete(R.cacheKey),R.destroy()}}function z(R){m.remove(R)}function $(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:N,acquireProgram:I,releaseProgram:B,releaseShaderCache:z,programs:v,dispose:$}}function q1(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function u(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function Y1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function jg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Zg(){const r=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(_,S,E,A,C,y){let x=r[t];return x===void 0?(x={id:_.id,object:_,geometry:S,material:E,groupOrder:A,renderOrder:_.renderOrder,z:C,group:y},r[t]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=E,x.groupOrder=A,x.renderOrder=_.renderOrder,x.z=C,x.group=y),t++,x}function d(_,S,E,A,C,y){const x=h(_,S,E,A,C,y);E.transmission>0?s.push(x):E.transparent===!0?l.push(x):i.push(x)}function m(_,S,E,A,C,y){const x=h(_,S,E,A,C,y);E.transmission>0?s.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||Y1),s.length>1&&s.sort(S||jg),l.length>1&&l.sort(S||jg)}function v(){for(let _=t,S=r.length;_<S;_++){const E=r[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:v,sort:p}}function j1(){let r=new WeakMap;function t(s,l){const u=r.get(s);let h;return u===void 0?(h=new Zg,r.set(s,[h])):l>=u.length?(h=new Zg,u.push(h)):h=u[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function Z1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new He};break;case"SpotLight":i={position:new J,direction:new J,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new He,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new He,groundColor:new He};break;case"RectAreaLight":i={color:new He,position:new J,halfWidth:new J,halfHeight:new J};break}return r[t.id]=i,i}}}function K1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let Q1=0;function J1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function $1(r){const t=new Z1,i=K1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,u=new an,h=new an;function d(p){let v=0,_=0,S=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let E=0,A=0,C=0,y=0,x=0,L=0,P=0,N=0,I=0,B=0,z=0;p.sort(J1);for(let R=0,D=p.length;R<D;R++){const k=p[R],it=k.color,at=k.intensity,dt=k.distance;let ot=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Yr?ot=k.shadow.map.texture:ot=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=it.r*at,_+=it.g*at,S+=it.b*at;else if(k.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(k.sh.coefficients[O],at);z++}else if(k.isDirectionalLight){const O=t.get(k);if(O.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,K=i.get(k);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,s.directionalShadow[E]=K,s.directionalShadowMap[E]=ot,s.directionalShadowMatrix[E]=k.shadow.matrix,L++}s.directional[E]=O,E++}else if(k.isSpotLight){const O=t.get(k);O.position.setFromMatrixPosition(k.matrixWorld),O.color.copy(it).multiplyScalar(at),O.distance=dt,O.coneCos=Math.cos(k.angle),O.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),O.decay=k.decay,s.spot[C]=O;const H=k.shadow;if(k.map&&(s.spotLightMap[I]=k.map,I++,H.updateMatrices(k),k.castShadow&&B++),s.spotLightMatrix[C]=H.matrix,k.castShadow){const K=i.get(k);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,s.spotShadow[C]=K,s.spotShadowMap[C]=ot,N++}C++}else if(k.isRectAreaLight){const O=t.get(k);O.color.copy(it).multiplyScalar(at),O.halfWidth.set(k.width*.5,0,0),O.halfHeight.set(0,k.height*.5,0),s.rectArea[y]=O,y++}else if(k.isPointLight){const O=t.get(k);if(O.color.copy(k.color).multiplyScalar(k.intensity),O.distance=k.distance,O.decay=k.decay,k.castShadow){const H=k.shadow,K=i.get(k);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,K.shadowCameraNear=H.camera.near,K.shadowCameraFar=H.camera.far,s.pointShadow[A]=K,s.pointShadowMap[A]=ot,s.pointShadowMatrix[A]=k.shadow.matrix,P++}s.point[A]=O,A++}else if(k.isHemisphereLight){const O=t.get(k);O.skyColor.copy(k.color).multiplyScalar(at),O.groundColor.copy(k.groundColor).multiplyScalar(at),s.hemi[x]=O,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=S;const $=s.hash;($.directionalLength!==E||$.pointLength!==A||$.spotLength!==C||$.rectAreaLength!==y||$.hemiLength!==x||$.numDirectionalShadows!==L||$.numPointShadows!==P||$.numSpotShadows!==N||$.numSpotMaps!==I||$.numLightProbes!==z)&&(s.directional.length=E,s.spot.length=C,s.rectArea.length=y,s.point.length=A,s.hemi.length=x,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=N+I-B,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,$.directionalLength=E,$.pointLength=A,$.spotLength=C,$.rectAreaLength=y,$.hemiLength=x,$.numDirectionalShadows=L,$.numPointShadows=P,$.numSpotShadows=N,$.numSpotMaps=I,$.numLightProbes=z,s.version=Q1++)}function m(p,v){let _=0,S=0,E=0,A=0,C=0;const y=v.matrixWorldInverse;for(let x=0,L=p.length;x<L;x++){const P=p[x];if(P.isDirectionalLight){const N=s.directional[_];N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),_++}else if(P.isSpotLight){const N=s.spot[E];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),E++}else if(P.isRectAreaLight){const N=s.rectArea[A];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(y),h.identity(),u.copy(P.matrixWorld),u.premultiply(y),h.extractRotation(u),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),A++}else if(P.isPointLight){const N=s.point[S];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(y),S++}else if(P.isHemisphereLight){const N=s.hemi[C];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:s}}function Kg(r){const t=new $1(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function h(v){s.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function tA(r){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new Kg(r),t.set(l,[d])):u>=h.length?(d=new Kg(r),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const eA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nA=`uniform sampler2D shadow_pass;
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
}`,iA=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],aA=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Qg=new an,tl=new J,jh=new J;function sA(r,t,i){let s=new Dv;const l=new ie,u=new ie,h=new on,d=new xM,m=new SM,p={},v=i.maxTextureSize,_={[ls]:jn,[jn]:ls,[xa]:xa},S=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:eA,fragmentShader:nA}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const A=new Ni;A.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Yi(A,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qu;let x=this.type;this.render=function(B,z,$){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;B.type===sy&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=qu);const R=r.getRenderTarget(),D=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),it=r.state;it.setBlending(ya),it.buffers.depth.getReversed()===!0?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const at=x!==this.type;at&&z.traverse(function(dt){dt.material&&(Array.isArray(dt.material)?dt.material.forEach(ot=>ot.needsUpdate=!0):dt.material.needsUpdate=!0)});for(let dt=0,ot=B.length;dt<ot;dt++){const O=B[dt],H=O.shadow;if(H===void 0){re("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const K=H.getFrameExtents();if(l.multiply(K),u.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/K.x),l.x=u.x*K.x,H.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/K.y),l.y=u.y*K.y,H.mapSize.y=u.y)),H.map===null||at===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===el){if(O.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Wi(l.x,l.y,{format:Yr,type:Ea,minFilter:zn,magFilter:zn,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new ol(l.x,l.y,Vi),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=ba,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un}else{O.isPointLight?(H.map=new Rv(l.x),H.map.depthTexture=new gM(l.x,qi)):(H.map=new Wi(l.x,l.y),H.map.depthTexture=new ol(l.x,l.y,qi)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=ba;const ht=r.state.buffers.depth.getReversed();this.type===qu?(H.map.depthTexture.compareFunction=ht?sp:ap,H.map.depthTexture.minFilter=zn,H.map.depthTexture.magFilter=zn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un)}H.camera.updateProjectionMatrix()}const ft=H.map.isWebGLCubeRenderTarget?6:1;for(let ht=0;ht<ft;ht++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,ht),r.clear();else{ht===0&&(r.setRenderTarget(H.map),r.clear());const w=H.getViewport(ht);h.set(u.x*w.x,u.y*w.y,u.x*w.z,u.y*w.w),it.viewport(h)}if(O.isPointLight){const w=H.camera,Z=H.matrix,mt=O.distance||w.far;mt!==w.far&&(w.far=mt,w.updateProjectionMatrix()),tl.setFromMatrixPosition(O.matrixWorld),w.position.copy(tl),jh.copy(w.position),jh.add(iA[ht]),w.up.copy(aA[ht]),w.lookAt(jh),w.updateMatrixWorld(),Z.makeTranslation(-tl.x,-tl.y,-tl.z),Qg.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Qg,w.coordinateSystem,w.reversedDepth)}else H.updateMatrices(O);s=H.getFrustum(),N(z,$,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===el&&L(H,$),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(R,D,k)};function L(B,z){const $=t.update(C);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,E.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Wi(l.x,l.y,{format:Yr,type:Ea})),S.uniforms.shadow_pass.value=B.map.depthTexture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(z,null,$,S,C,null),E.uniforms.shadow_pass.value=B.mapPass.texture,E.uniforms.resolution.value=B.mapSize,E.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(z,null,$,E,C,null)}function P(B,z,$,R){let D=null;const k=$.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(k!==void 0)D=k;else if(D=$.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const it=D.uuid,at=z.uuid;let dt=p[it];dt===void 0&&(dt={},p[it]=dt);let ot=dt[at];ot===void 0&&(ot=D.clone(),dt[at]=ot,z.addEventListener("dispose",I)),D=ot}if(D.visible=z.visible,D.wireframe=z.wireframe,R===el?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:_[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,$.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const it=r.properties.get(D);it.light=$}return D}function N(B,z,$,R,D){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&D===el)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,B.matrixWorld);const at=t.update(B),dt=B.material;if(Array.isArray(dt)){const ot=at.groups;for(let O=0,H=ot.length;O<H;O++){const K=ot[O],ft=dt[K.materialIndex];if(ft&&ft.visible){const ht=P(B,ft,R,D);B.onBeforeShadow(r,B,z,$,at,ht,K),r.renderBufferDirect($,null,at,ht,B,K),B.onAfterShadow(r,B,z,$,at,ht,K)}}}else if(dt.visible){const ot=P(B,dt,R,D);B.onBeforeShadow(r,B,z,$,at,ot,null),r.renderBufferDirect($,null,at,ot,B,null),B.onAfterShadow(r,B,z,$,at,ot,null)}}const it=B.children;for(let at=0,dt=it.length;at<dt;at++)N(it[at],z,$,R,D)}function I(B){B.target.removeEventListener("dispose",I);for(const $ in p){const R=p[$],D=B.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}const rA={[td]:ed,[nd]:sd,[id]:rd,[Wr]:ad,[ed]:td,[sd]:nd,[rd]:id,[ad]:Wr};function oA(r,t){function i(){let X=!1;const Pt=new on;let At=null;const Bt=new on(0,0,0,0);return{setMask:function(Mt){At!==Mt&&!X&&(r.colorMask(Mt,Mt,Mt,Mt),At=Mt)},setLocked:function(Mt){X=Mt},setClear:function(Mt,St,Rt,ae,Pe){Pe===!0&&(Mt*=ae,St*=ae,Rt*=ae),Pt.set(Mt,St,Rt,ae),Bt.equals(Pt)===!1&&(r.clearColor(Mt,St,Rt,ae),Bt.copy(Pt))},reset:function(){X=!1,At=null,Bt.set(-1,0,0,0)}}}function s(){let X=!1,Pt=!1,At=null,Bt=null,Mt=null;return{setReversed:function(St){if(Pt!==St){const Rt=t.get("EXT_clip_control");St?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Pt=St;const ae=Mt;Mt=null,this.setClear(ae)}},getReversed:function(){return Pt},setTest:function(St){St?W(r.DEPTH_TEST):xt(r.DEPTH_TEST)},setMask:function(St){At!==St&&!X&&(r.depthMask(St),At=St)},setFunc:function(St){if(Pt&&(St=rA[St]),Bt!==St){switch(St){case td:r.depthFunc(r.NEVER);break;case ed:r.depthFunc(r.ALWAYS);break;case nd:r.depthFunc(r.LESS);break;case Wr:r.depthFunc(r.LEQUAL);break;case id:r.depthFunc(r.EQUAL);break;case ad:r.depthFunc(r.GEQUAL);break;case sd:r.depthFunc(r.GREATER);break;case rd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=St}},setLocked:function(St){X=St},setClear:function(St){Mt!==St&&(Pt&&(St=1-St),r.clearDepth(St),Mt=St)},reset:function(){X=!1,At=null,Bt=null,Mt=null,Pt=!1}}}function l(){let X=!1,Pt=null,At=null,Bt=null,Mt=null,St=null,Rt=null,ae=null,Pe=null;return{setTest:function(Te){X||(Te?W(r.STENCIL_TEST):xt(r.STENCIL_TEST))},setMask:function(Te){Pt!==Te&&!X&&(r.stencilMask(Te),Pt=Te)},setFunc:function(Te,Nn,yi){(At!==Te||Bt!==Nn||Mt!==yi)&&(r.stencilFunc(Te,Nn,yi),At=Te,Bt=Nn,Mt=yi)},setOp:function(Te,Nn,yi){(St!==Te||Rt!==Nn||ae!==yi)&&(r.stencilOp(Te,Nn,yi),St=Te,Rt=Nn,ae=yi)},setLocked:function(Te){X=Te},setClear:function(Te){Pe!==Te&&(r.clearStencil(Te),Pe=Te)},reset:function(){X=!1,Pt=null,At=null,Bt=null,Mt=null,St=null,Rt=null,ae=null,Pe=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},_={},S=new WeakMap,E=[],A=null,C=!1,y=null,x=null,L=null,P=null,N=null,I=null,B=null,z=new He(0,0,0),$=0,R=!1,D=null,k=null,it=null,at=null,dt=null;const ot=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),O=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),O=H>=2);let ft=null,ht={};const w=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),mt=new on().fromArray(w),bt=new on().fromArray(Z);function Lt(X,Pt,At,Bt){const Mt=new Uint8Array(4),St=r.createTexture();r.bindTexture(X,St),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Rt=0;Rt<At;Rt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Pt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(Pt+Rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return St}const et={};et[r.TEXTURE_2D]=Lt(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=Lt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=Lt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=Lt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),W(r.DEPTH_TEST),h.setFunc(Wr),le(!1),tn(eg),W(r.CULL_FACE),me(ya);function W(X){v[X]!==!0&&(r.enable(X),v[X]=!0)}function xt(X){v[X]!==!1&&(r.disable(X),v[X]=!1)}function wt(X,Pt){return _[X]!==Pt?(r.bindFramebuffer(X,Pt),_[X]=Pt,X===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Pt),X===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Nt(X,Pt){let At=E,Bt=!1;if(X){At=S.get(Pt),At===void 0&&(At=[],S.set(Pt,At));const Mt=X.textures;if(At.length!==Mt.length||At[0]!==r.COLOR_ATTACHMENT0){for(let St=0,Rt=Mt.length;St<Rt;St++)At[St]=r.COLOR_ATTACHMENT0+St;At.length=Mt.length,Bt=!0}}else At[0]!==r.BACK&&(At[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(At)}function ce(X){return A!==X?(r.useProgram(X),A=X,!0):!1}const $e={[Ls]:r.FUNC_ADD,[oy]:r.FUNC_SUBTRACT,[ly]:r.FUNC_REVERSE_SUBTRACT};$e[uy]=r.MIN,$e[cy]=r.MAX;const xe={[fy]:r.ZERO,[hy]:r.ONE,[dy]:r.SRC_COLOR,[Jh]:r.SRC_ALPHA,[xy]:r.SRC_ALPHA_SATURATE,[gy]:r.DST_COLOR,[my]:r.DST_ALPHA,[py]:r.ONE_MINUS_SRC_COLOR,[$h]:r.ONE_MINUS_SRC_ALPHA,[vy]:r.ONE_MINUS_DST_COLOR,[_y]:r.ONE_MINUS_DST_ALPHA,[Sy]:r.CONSTANT_COLOR,[yy]:r.ONE_MINUS_CONSTANT_COLOR,[My]:r.CONSTANT_ALPHA,[Ey]:r.ONE_MINUS_CONSTANT_ALPHA};function me(X,Pt,At,Bt,Mt,St,Rt,ae,Pe,Te){if(X===ya){C===!0&&(xt(r.BLEND),C=!1);return}if(C===!1&&(W(r.BLEND),C=!0),X!==ry){if(X!==y||Te!==R){if((x!==Ls||N!==Ls)&&(r.blendEquation(r.FUNC_ADD),x=Ls,N=Ls),Te)switch(X){case kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qh:r.blendFunc(r.ONE,r.ONE);break;case ng:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ig:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:be("WebGLState: Invalid blending: ",X);break}else switch(X){case kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ng:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ig:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",X);break}L=null,P=null,I=null,B=null,z.set(0,0,0),$=0,y=X,R=Te}return}Mt=Mt||Pt,St=St||At,Rt=Rt||Bt,(Pt!==x||Mt!==N)&&(r.blendEquationSeparate($e[Pt],$e[Mt]),x=Pt,N=Mt),(At!==L||Bt!==P||St!==I||Rt!==B)&&(r.blendFuncSeparate(xe[At],xe[Bt],xe[St],xe[Rt]),L=At,P=Bt,I=St,B=Rt),(ae.equals(z)===!1||Pe!==$)&&(r.blendColor(ae.r,ae.g,ae.b,Pe),z.copy(ae),$=Pe),y=X,R=!1}function we(X,Pt){X.side===xa?xt(r.CULL_FACE):W(r.CULL_FACE);let At=X.side===jn;Pt&&(At=!At),le(At),X.blending===kr&&X.transparent===!1?me(ya):me(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const Bt=X.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ke(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?W(r.SAMPLE_ALPHA_TO_COVERAGE):xt(r.SAMPLE_ALPHA_TO_COVERAGE)}function le(X){D!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),D=X)}function tn(X){X!==iy?(W(r.CULL_FACE),X!==k&&(X===eg?r.cullFace(r.BACK):X===ay?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xt(r.CULL_FACE),k=X}function G(X){X!==it&&(O&&r.lineWidth(X),it=X)}function Ke(X,Pt,At){X?(W(r.POLYGON_OFFSET_FILL),(at!==Pt||dt!==At)&&(r.polygonOffset(Pt,At),at=Pt,dt=At)):xt(r.POLYGON_OFFSET_FILL)}function Ee(X){X?W(r.SCISSOR_TEST):xt(r.SCISSOR_TEST)}function Le(X){X===void 0&&(X=r.TEXTURE0+ot-1),ft!==X&&(r.activeTexture(X),ft=X)}function Yt(X,Pt,At){At===void 0&&(ft===null?At=r.TEXTURE0+ot-1:At=ft);let Bt=ht[At];Bt===void 0&&(Bt={type:void 0,texture:void 0},ht[At]=Bt),(Bt.type!==X||Bt.texture!==Pt)&&(ft!==At&&(r.activeTexture(At),ft=At),r.bindTexture(X,Pt||et[X]),Bt.type=X,Bt.texture=Pt)}function U(){const X=ht[ft];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(X){be("WebGLState:",X)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(X){be("WebGLState:",X)}}function _t(){try{r.texSubImage2D(...arguments)}catch(X){be("WebGLState:",X)}}function yt(){try{r.texSubImage3D(...arguments)}catch(X){be("WebGLState:",X)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(X){be("WebGLState:",X)}}function Zt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){be("WebGLState:",X)}}function Dt(){try{r.texStorage2D(...arguments)}catch(X){be("WebGLState:",X)}}function Xt(){try{r.texStorage3D(...arguments)}catch(X){be("WebGLState:",X)}}function ne(){try{r.texImage2D(...arguments)}catch(X){be("WebGLState:",X)}}function Et(){try{r.texImage3D(...arguments)}catch(X){be("WebGLState:",X)}}function Tt(X){mt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),mt.copy(X))}function Ht(X){bt.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),bt.copy(X))}function Ft(X,Pt){let At=p.get(Pt);At===void 0&&(At=new WeakMap,p.set(Pt,At));let Bt=At.get(X);Bt===void 0&&(Bt=r.getUniformBlockIndex(Pt,X.name),At.set(X,Bt))}function Ut(X,Pt){const Bt=p.get(Pt).get(X);m.get(Pt)!==Bt&&(r.uniformBlockBinding(Pt,Bt,X.__bindingPointIndex),m.set(Pt,Bt))}function fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},ft=null,ht={},_={},S=new WeakMap,E=[],A=null,C=!1,y=null,x=null,L=null,P=null,N=null,I=null,B=null,z=new He(0,0,0),$=0,R=!1,D=null,k=null,it=null,at=null,dt=null,mt.set(0,0,r.canvas.width,r.canvas.height),bt.set(0,0,r.canvas.width,r.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:W,disable:xt,bindFramebuffer:wt,drawBuffers:Nt,useProgram:ce,setBlending:me,setMaterial:we,setFlipSided:le,setCullFace:tn,setLineWidth:G,setPolygonOffset:Ke,setScissorTest:Ee,activeTexture:Le,bindTexture:Yt,unbindTexture:U,compressedTexImage2D:M,compressedTexImage3D:q,texImage2D:ne,texImage3D:Et,updateUBOMapping:Ft,uniformBlockBinding:Ut,texStorage2D:Dt,texStorage3D:Xt,texSubImage2D:_t,texSubImage3D:yt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Zt,scissor:Tt,viewport:Ht,reset:fe}}function lA(r,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ie,v=new WeakMap;let _;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,M){return E?new OffscreenCanvas(U,M):ec("canvas")}function C(U,M,q){let _t=1;const yt=Yt(U);if((yt.width>q||yt.height>q)&&(_t=q/Math.max(yt.width,yt.height)),_t<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ct=Math.floor(_t*yt.width),Zt=Math.floor(_t*yt.height);_===void 0&&(_=A(ct,Zt));const Dt=M?A(ct,Zt):_;return Dt.width=ct,Dt.height=Zt,Dt.getContext("2d").drawImage(U,0,0,ct,Zt),re("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ct+"x"+Zt+")."),Dt}else return"data"in U&&re("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function y(U){return U.generateMipmaps}function x(U){r.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(U,M,q,_t,yt=!1){if(U!==null){if(r[U]!==void 0)return r[U];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ct=M;if(M===r.RED&&(q===r.FLOAT&&(ct=r.R32F),q===r.HALF_FLOAT&&(ct=r.R16F),q===r.UNSIGNED_BYTE&&(ct=r.R8)),M===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ct=r.R8UI),q===r.UNSIGNED_SHORT&&(ct=r.R16UI),q===r.UNSIGNED_INT&&(ct=r.R32UI),q===r.BYTE&&(ct=r.R8I),q===r.SHORT&&(ct=r.R16I),q===r.INT&&(ct=r.R32I)),M===r.RG&&(q===r.FLOAT&&(ct=r.RG32F),q===r.HALF_FLOAT&&(ct=r.RG16F),q===r.UNSIGNED_BYTE&&(ct=r.RG8)),M===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ct=r.RG8UI),q===r.UNSIGNED_SHORT&&(ct=r.RG16UI),q===r.UNSIGNED_INT&&(ct=r.RG32UI),q===r.BYTE&&(ct=r.RG8I),q===r.SHORT&&(ct=r.RG16I),q===r.INT&&(ct=r.RG32I)),M===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),q===r.UNSIGNED_INT&&(ct=r.RGB32UI),q===r.BYTE&&(ct=r.RGB8I),q===r.SHORT&&(ct=r.RGB16I),q===r.INT&&(ct=r.RGB32I)),M===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),q===r.UNSIGNED_INT&&(ct=r.RGBA32UI),q===r.BYTE&&(ct=r.RGBA8I),q===r.SHORT&&(ct=r.RGBA16I),q===r.INT&&(ct=r.RGBA32I)),M===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ct=r.R11F_G11F_B10F)),M===r.RGBA){const Zt=yt?$u:Ae.getTransfer(_t);q===r.FLOAT&&(ct=r.RGBA32F),q===r.HALF_FLOAT&&(ct=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ct=Zt===Be?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function N(U,M){let q;return U?M===null||M===qi||M===sl?q=r.DEPTH24_STENCIL8:M===Vi?q=r.DEPTH32F_STENCIL8:M===al&&(q=r.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===qi||M===sl?q=r.DEPTH_COMPONENT24:M===Vi?q=r.DEPTH_COMPONENT32F:M===al&&(q=r.DEPTH_COMPONENT16),q}function I(U,M){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Un&&U.minFilter!==zn?Math.log2(Math.max(M.width,M.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?M.mipmaps.length:1}function B(U){const M=U.target;M.removeEventListener("dispose",B),$(M),M.isVideoTexture&&v.delete(M)}function z(U){const M=U.target;M.removeEventListener("dispose",z),D(M)}function $(U){const M=s.get(U);if(M.__webglInit===void 0)return;const q=U.source,_t=S.get(q);if(_t){const yt=_t[M.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&R(U),Object.keys(_t).length===0&&S.delete(q)}s.remove(U)}function R(U){const M=s.get(U);r.deleteTexture(M.__webglTexture);const q=U.source,_t=S.get(q);delete _t[M.__cacheKey],h.memory.textures--}function D(U){const M=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(M.__webglFramebuffer[_t]))for(let yt=0;yt<M.__webglFramebuffer[_t].length;yt++)r.deleteFramebuffer(M.__webglFramebuffer[_t][yt]);else r.deleteFramebuffer(M.__webglFramebuffer[_t]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[_t])}else{if(Array.isArray(M.__webglFramebuffer))for(let _t=0;_t<M.__webglFramebuffer.length;_t++)r.deleteFramebuffer(M.__webglFramebuffer[_t]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let _t=0;_t<M.__webglColorRenderbuffer.length;_t++)M.__webglColorRenderbuffer[_t]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[_t]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=U.textures;for(let _t=0,yt=q.length;_t<yt;_t++){const ct=s.get(q[_t]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),h.memory.textures--),s.remove(q[_t])}s.remove(U)}let k=0;function it(){k=0}function at(){const U=k;return U>=l.maxTextures&&re("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),k+=1,U}function dt(U){const M=[];return M.push(U.wrapS),M.push(U.wrapT),M.push(U.wrapR||0),M.push(U.magFilter),M.push(U.minFilter),M.push(U.anisotropy),M.push(U.internalFormat),M.push(U.format),M.push(U.type),M.push(U.generateMipmaps),M.push(U.premultiplyAlpha),M.push(U.flipY),M.push(U.unpackAlignment),M.push(U.colorSpace),M.join()}function ot(U,M){const q=s.get(U);if(U.isVideoTexture&&Ee(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&q.__version!==U.version){const _t=U.image;if(_t===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{et(q,U,M);return}}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+M)}function O(U,M){const q=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){et(q,U,M);return}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+M)}function H(U,M){const q=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){et(q,U,M);return}i.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+M)}function K(U,M){const q=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&q.__version!==U.version){W(q,U,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+M)}const ft={[ud]:r.REPEAT,[Sa]:r.CLAMP_TO_EDGE,[cd]:r.MIRRORED_REPEAT},ht={[Un]:r.NEAREST,[Ay]:r.NEAREST_MIPMAP_NEAREST,[Mu]:r.NEAREST_MIPMAP_LINEAR,[zn]:r.LINEAR,[vh]:r.LINEAR_MIPMAP_NEAREST,[Ps]:r.LINEAR_MIPMAP_LINEAR},w={[Dy]:r.NEVER,[Py]:r.ALWAYS,[Uy]:r.LESS,[ap]:r.LEQUAL,[Ny]:r.EQUAL,[sp]:r.GEQUAL,[Ly]:r.GREATER,[Oy]:r.NOTEQUAL};function Z(U,M){if(M.type===Vi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===zn||M.magFilter===vh||M.magFilter===Mu||M.magFilter===Ps||M.minFilter===zn||M.minFilter===vh||M.minFilter===Mu||M.minFilter===Ps)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,ft[M.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,ft[M.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,ft[M.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,ht[M.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,ht[M.minFilter]),M.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,w[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==Mu&&M.minFilter!==Ps||M.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function mt(U,M){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,M.addEventListener("dispose",B));const _t=M.source;let yt=S.get(_t);yt===void 0&&(yt={},S.set(_t,yt));const ct=dt(M);if(ct!==U.__cacheKey){yt[ct]===void 0&&(yt[ct]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,q=!0),yt[ct].usedTimes++;const Zt=yt[U.__cacheKey];Zt!==void 0&&(yt[U.__cacheKey].usedTimes--,Zt.usedTimes===0&&R(M)),U.__cacheKey=ct,U.__webglTexture=yt[ct].texture}return q}function bt(U,M,q){return Math.floor(Math.floor(U/q)/M)}function Lt(U,M,q,_t){const ct=U.updateRanges;if(ct.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,q,_t,M.data);else{ct.sort((Et,Tt)=>Et.start-Tt.start);let Zt=0;for(let Et=1;Et<ct.length;Et++){const Tt=ct[Zt],Ht=ct[Et],Ft=Tt.start+Tt.count,Ut=bt(Ht.start,M.width,4),fe=bt(Tt.start,M.width,4);Ht.start<=Ft+1&&Ut===fe&&bt(Ht.start+Ht.count-1,M.width,4)===Ut?Tt.count=Math.max(Tt.count,Ht.start+Ht.count-Tt.start):(++Zt,ct[Zt]=Ht)}ct.length=Zt+1;const Dt=r.getParameter(r.UNPACK_ROW_LENGTH),Xt=r.getParameter(r.UNPACK_SKIP_PIXELS),ne=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Et=0,Tt=ct.length;Et<Tt;Et++){const Ht=ct[Et],Ft=Math.floor(Ht.start/4),Ut=Math.ceil(Ht.count/4),fe=Ft%M.width,X=Math.floor(Ft/M.width),Pt=Ut,At=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,fe),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,fe,X,Pt,At,q,_t,M.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Dt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ne)}}function et(U,M,q){let _t=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(_t=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(_t=r.TEXTURE_3D);const yt=mt(U,M),ct=M.source;i.bindTexture(_t,U.__webglTexture,r.TEXTURE0+q);const Zt=s.get(ct);if(ct.version!==Zt.__version||yt===!0){i.activeTexture(r.TEXTURE0+q);const Dt=Ae.getPrimaries(Ae.workingColorSpace),Xt=M.colorSpace===ss?null:Ae.getPrimaries(M.colorSpace),ne=M.colorSpace===ss||Dt===Xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Et=C(M.image,!1,l.maxTextureSize);Et=Le(M,Et);const Tt=u.convert(M.format,M.colorSpace),Ht=u.convert(M.type);let Ft=P(M.internalFormat,Tt,Ht,M.colorSpace,M.isVideoTexture);Z(_t,M);let Ut;const fe=M.mipmaps,X=M.isVideoTexture!==!0,Pt=Zt.__version===void 0||yt===!0,At=ct.dataReady,Bt=I(M,Et);if(M.isDepthTexture)Ft=N(M.format===zs,M.type),Pt&&(X?i.texStorage2D(r.TEXTURE_2D,1,Ft,Et.width,Et.height):i.texImage2D(r.TEXTURE_2D,0,Ft,Et.width,Et.height,0,Tt,Ht,null));else if(M.isDataTexture)if(fe.length>0){X&&Pt&&i.texStorage2D(r.TEXTURE_2D,Bt,Ft,fe[0].width,fe[0].height);for(let Mt=0,St=fe.length;Mt<St;Mt++)Ut=fe[Mt],X?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,Tt,Ht,Ut.data):i.texImage2D(r.TEXTURE_2D,Mt,Ft,Ut.width,Ut.height,0,Tt,Ht,Ut.data);M.generateMipmaps=!1}else X?(Pt&&i.texStorage2D(r.TEXTURE_2D,Bt,Ft,Et.width,Et.height),At&&Lt(M,Et,Tt,Ht)):i.texImage2D(r.TEXTURE_2D,0,Ft,Et.width,Et.height,0,Tt,Ht,Et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){X&&Pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Ft,fe[0].width,fe[0].height,Et.depth);for(let Mt=0,St=fe.length;Mt<St;Mt++)if(Ut=fe[Mt],M.format!==Di)if(Tt!==null)if(X){if(At)if(M.layerUpdates.size>0){const Rt=Cg(Ut.width,Ut.height,M.format,M.type);for(const ae of M.layerUpdates){const Pe=Ut.data.subarray(ae*Rt/Ut.data.BYTES_PER_ELEMENT,(ae+1)*Rt/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,ae,Ut.width,Ut.height,1,Tt,Pe)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,Et.depth,Tt,Ut.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,Ft,Ut.width,Ut.height,Et.depth,0,Ut.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?At&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,Et.depth,Tt,Ht,Ut.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Mt,Ft,Ut.width,Ut.height,Et.depth,0,Tt,Ht,Ut.data)}else{X&&Pt&&i.texStorage2D(r.TEXTURE_2D,Bt,Ft,fe[0].width,fe[0].height);for(let Mt=0,St=fe.length;Mt<St;Mt++)Ut=fe[Mt],M.format!==Di?Tt!==null?X?At&&i.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,Tt,Ut.data):i.compressedTexImage2D(r.TEXTURE_2D,Mt,Ft,Ut.width,Ut.height,0,Ut.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,Tt,Ht,Ut.data):i.texImage2D(r.TEXTURE_2D,Mt,Ft,Ut.width,Ut.height,0,Tt,Ht,Ut.data)}else if(M.isDataArrayTexture)if(X){if(Pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Ft,Et.width,Et.height,Et.depth),At)if(M.layerUpdates.size>0){const Mt=Cg(Et.width,Et.height,M.format,M.type);for(const St of M.layerUpdates){const Rt=Et.data.subarray(St*Mt/Et.data.BYTES_PER_ELEMENT,(St+1)*Mt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,St,Et.width,Et.height,1,Tt,Ht,Rt)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Tt,Ht,Et.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ft,Et.width,Et.height,Et.depth,0,Tt,Ht,Et.data);else if(M.isData3DTexture)X?(Pt&&i.texStorage3D(r.TEXTURE_3D,Bt,Ft,Et.width,Et.height,Et.depth),At&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Tt,Ht,Et.data)):i.texImage3D(r.TEXTURE_3D,0,Ft,Et.width,Et.height,Et.depth,0,Tt,Ht,Et.data);else if(M.isFramebufferTexture){if(Pt)if(X)i.texStorage2D(r.TEXTURE_2D,Bt,Ft,Et.width,Et.height);else{let Mt=Et.width,St=Et.height;for(let Rt=0;Rt<Bt;Rt++)i.texImage2D(r.TEXTURE_2D,Rt,Ft,Mt,St,0,Tt,Ht,null),Mt>>=1,St>>=1}}else if(fe.length>0){if(X&&Pt){const Mt=Yt(fe[0]);i.texStorage2D(r.TEXTURE_2D,Bt,Ft,Mt.width,Mt.height)}for(let Mt=0,St=fe.length;Mt<St;Mt++)Ut=fe[Mt],X?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Tt,Ht,Ut):i.texImage2D(r.TEXTURE_2D,Mt,Ft,Tt,Ht,Ut);M.generateMipmaps=!1}else if(X){if(Pt){const Mt=Yt(Et);i.texStorage2D(r.TEXTURE_2D,Bt,Ft,Mt.width,Mt.height)}At&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt,Ht,Et)}else i.texImage2D(r.TEXTURE_2D,0,Ft,Tt,Ht,Et);y(M)&&x(_t),Zt.__version=ct.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function W(U,M,q){if(M.image.length!==6)return;const _t=mt(U,M),yt=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+q);const ct=s.get(yt);if(yt.version!==ct.__version||_t===!0){i.activeTexture(r.TEXTURE0+q);const Zt=Ae.getPrimaries(Ae.workingColorSpace),Dt=M.colorSpace===ss?null:Ae.getPrimaries(M.colorSpace),Xt=M.colorSpace===ss||Zt===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ne=M.isCompressedTexture||M.image[0].isCompressedTexture,Et=M.image[0]&&M.image[0].isDataTexture,Tt=[];for(let St=0;St<6;St++)!ne&&!Et?Tt[St]=C(M.image[St],!0,l.maxCubemapSize):Tt[St]=Et?M.image[St].image:M.image[St],Tt[St]=Le(M,Tt[St]);const Ht=Tt[0],Ft=u.convert(M.format,M.colorSpace),Ut=u.convert(M.type),fe=P(M.internalFormat,Ft,Ut,M.colorSpace),X=M.isVideoTexture!==!0,Pt=ct.__version===void 0||_t===!0,At=yt.dataReady;let Bt=I(M,Ht);Z(r.TEXTURE_CUBE_MAP,M);let Mt;if(ne){X&&Pt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,fe,Ht.width,Ht.height);for(let St=0;St<6;St++){Mt=Tt[St].mipmaps;for(let Rt=0;Rt<Mt.length;Rt++){const ae=Mt[Rt];M.format!==Di?Ft!==null?X?At&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt,0,0,ae.width,ae.height,Ft,ae.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt,fe,ae.width,ae.height,0,ae.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt,0,0,ae.width,ae.height,Ft,Ut,ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt,fe,ae.width,ae.height,0,Ft,Ut,ae.data)}}}else{if(Mt=M.mipmaps,X&&Pt){Mt.length>0&&Bt++;const St=Yt(Tt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,fe,St.width,St.height)}for(let St=0;St<6;St++)if(Et){X?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Tt[St].width,Tt[St].height,Ft,Ut,Tt[St].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,Tt[St].width,Tt[St].height,0,Ft,Ut,Tt[St].data);for(let Rt=0;Rt<Mt.length;Rt++){const Pe=Mt[Rt].image[St].image;X?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt+1,0,0,Pe.width,Pe.height,Ft,Ut,Pe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt+1,fe,Pe.width,Pe.height,0,Ft,Ut,Pe.data)}}else{X?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Ft,Ut,Tt[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,Ft,Ut,Tt[St]);for(let Rt=0;Rt<Mt.length;Rt++){const ae=Mt[Rt];X?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt+1,0,0,Ft,Ut,ae.image[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt+1,fe,Ft,Ut,ae.image[St])}}}y(M)&&x(r.TEXTURE_CUBE_MAP),ct.__version=yt.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function xt(U,M,q,_t,yt,ct){const Zt=u.convert(q.format,q.colorSpace),Dt=u.convert(q.type),Xt=P(q.internalFormat,Zt,Dt,q.colorSpace),ne=s.get(M),Et=s.get(q);if(Et.__renderTarget=M,!ne.__hasExternalTextures){const Tt=Math.max(1,M.width>>ct),Ht=Math.max(1,M.height>>ct);yt===r.TEXTURE_3D||yt===r.TEXTURE_2D_ARRAY?i.texImage3D(yt,ct,Xt,Tt,Ht,M.depth,0,Zt,Dt,null):i.texImage2D(yt,ct,Xt,Tt,Ht,0,Zt,Dt,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),Ke(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_t,yt,Et.__webglTexture,0,G(M)):(yt===r.TEXTURE_2D||yt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_t,yt,Et.__webglTexture,ct),i.bindFramebuffer(r.FRAMEBUFFER,null)}function wt(U,M,q){if(r.bindRenderbuffer(r.RENDERBUFFER,U),M.depthBuffer){const _t=M.depthTexture,yt=_t&&_t.isDepthTexture?_t.type:null,ct=N(M.stencilBuffer,yt),Zt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ke(M)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(M),ct,M.width,M.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(M),ct,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ct,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Zt,r.RENDERBUFFER,U)}else{const _t=M.textures;for(let yt=0;yt<_t.length;yt++){const ct=_t[yt],Zt=u.convert(ct.format,ct.colorSpace),Dt=u.convert(ct.type),Xt=P(ct.internalFormat,Zt,Dt,ct.colorSpace);Ke(M)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(M),Xt,M.width,M.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(M),Xt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Xt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Nt(U,M,q){const _t=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=s.get(M.depthTexture);if(yt.__renderTarget=M,(!yt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),_t){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,M.depthTexture.addEventListener("dispose",B)),yt.__webglTexture===void 0){yt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),Z(r.TEXTURE_CUBE_MAP,M.depthTexture);const ne=u.convert(M.depthTexture.format),Et=u.convert(M.depthTexture.type);let Tt;M.depthTexture.format===ba?Tt=r.DEPTH_COMPONENT24:M.depthTexture.format===zs&&(Tt=r.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Tt,M.width,M.height,0,ne,Et,null)}}else ot(M.depthTexture,0);const ct=yt.__webglTexture,Zt=G(M),Dt=_t?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,Xt=M.depthTexture.format===zs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===ba)Ke(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xt,Dt,ct,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,Xt,Dt,ct,0);else if(M.depthTexture.format===zs)Ke(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xt,Dt,ct,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,Xt,Dt,ct,0);else throw new Error("Unknown depthTexture format")}function ce(U){const M=s.get(U),q=U.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==U.depthTexture){const _t=U.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),_t){const yt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,_t.removeEventListener("dispose",yt)};_t.addEventListener("dispose",yt),M.__depthDisposeCallback=yt}M.__boundDepthTexture=_t}if(U.depthTexture&&!M.__autoAllocateDepthBuffer)if(q)for(let _t=0;_t<6;_t++)Nt(M.__webglFramebuffer[_t],U,_t);else{const _t=U.texture.mipmaps;_t&&_t.length>0?Nt(M.__webglFramebuffer[0],U,0):Nt(M.__webglFramebuffer,U,0)}else if(q){M.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[_t]),M.__webglDepthbuffer[_t]===void 0)M.__webglDepthbuffer[_t]=r.createRenderbuffer(),wt(M.__webglDepthbuffer[_t],U,!1);else{const yt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer[_t];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,ct)}}else{const _t=U.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),wt(M.__webglDepthbuffer,U,!1);else{const yt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,ct)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(U,M,q){const _t=s.get(U);M!==void 0&&xt(_t.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&ce(U)}function xe(U){const M=U.texture,q=s.get(U),_t=s.get(M);U.addEventListener("dispose",z);const yt=U.textures,ct=U.isWebGLCubeRenderTarget===!0,Zt=yt.length>1;if(Zt||(_t.__webglTexture===void 0&&(_t.__webglTexture=r.createTexture()),_t.__version=M.version,h.memory.textures++),ct){q.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[Dt]=[];for(let Xt=0;Xt<M.mipmaps.length;Xt++)q.__webglFramebuffer[Dt][Xt]=r.createFramebuffer()}else q.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let Dt=0;Dt<M.mipmaps.length;Dt++)q.__webglFramebuffer[Dt]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Zt)for(let Dt=0,Xt=yt.length;Dt<Xt;Dt++){const ne=s.get(yt[Dt]);ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture(),h.memory.textures++)}if(U.samples>0&&Ke(U)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Dt=0;Dt<yt.length;Dt++){const Xt=yt[Dt];q.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[Dt]);const ne=u.convert(Xt.format,Xt.colorSpace),Et=u.convert(Xt.type),Tt=P(Xt.internalFormat,ne,Et,Xt.colorSpace,U.isXRRenderTarget===!0),Ht=G(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,Tt,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,q.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),wt(q.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){i.bindTexture(r.TEXTURE_CUBE_MAP,_t.__webglTexture),Z(r.TEXTURE_CUBE_MAP,M);for(let Dt=0;Dt<6;Dt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Xt=0;Xt<M.mipmaps.length;Xt++)xt(q.__webglFramebuffer[Dt][Xt],U,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Xt);else xt(q.__webglFramebuffer[Dt],U,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(M)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Dt=0,Xt=yt.length;Dt<Xt;Dt++){const ne=yt[Dt],Et=s.get(ne);let Tt=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Tt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Tt,Et.__webglTexture),Z(Tt,ne),xt(q.__webglFramebuffer,U,ne,r.COLOR_ATTACHMENT0+Dt,Tt,0),y(ne)&&x(Tt)}i.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Dt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,_t.__webglTexture),Z(Dt,M),M.mipmaps&&M.mipmaps.length>0)for(let Xt=0;Xt<M.mipmaps.length;Xt++)xt(q.__webglFramebuffer[Xt],U,M,r.COLOR_ATTACHMENT0,Dt,Xt);else xt(q.__webglFramebuffer,U,M,r.COLOR_ATTACHMENT0,Dt,0);y(M)&&x(Dt),i.unbindTexture()}U.depthBuffer&&ce(U)}function me(U){const M=U.textures;for(let q=0,_t=M.length;q<_t;q++){const yt=M[q];if(y(yt)){const ct=L(U),Zt=s.get(yt).__webglTexture;i.bindTexture(ct,Zt),x(ct),i.unbindTexture()}}}const we=[],le=[];function tn(U){if(U.samples>0){if(Ke(U)===!1){const M=U.textures,q=U.width,_t=U.height;let yt=r.COLOR_BUFFER_BIT;const ct=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Zt=s.get(U),Dt=M.length>1;if(Dt)for(let ne=0;ne<M.length;ne++)i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Xt=U.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ne=0;ne<M.length;ne++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[ne]);const Et=s.get(M[ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,q,_t,0,0,q,_t,yt,r.NEAREST),m===!0&&(we.length=0,le.length=0,we.push(r.COLOR_ATTACHMENT0+ne),U.depthBuffer&&U.resolveDepthBuffer===!1&&(we.push(ct),le.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,le)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let ne=0;ne<M.length;ne++){i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[ne]);const Et=s.get(M[ne]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,Et,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const M=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function G(U){return Math.min(l.maxSamples,U.samples)}function Ke(U){const M=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ee(U){const M=h.render.frame;v.get(U)!==M&&(v.set(U,M),U.update())}function Le(U,M){const q=U.colorSpace,_t=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==jr&&q!==ss&&(Ae.getTransfer(q)===Be?(_t!==Di||yt!==vi)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",q)),M}function Yt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=it,this.setTexture2D=ot,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=K,this.rebindTextures=$e,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function uA(r,t){function i(s,l=ss){let u;const h=Ae.getTransfer(l);if(s===vi)return r.UNSIGNED_BYTE;if(s===$d)return r.UNSIGNED_SHORT_4_4_4_4;if(s===tp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===pv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===mv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===hv)return r.BYTE;if(s===dv)return r.SHORT;if(s===al)return r.UNSIGNED_SHORT;if(s===Jd)return r.INT;if(s===qi)return r.UNSIGNED_INT;if(s===Vi)return r.FLOAT;if(s===Ea)return r.HALF_FLOAT;if(s===_v)return r.ALPHA;if(s===gv)return r.RGB;if(s===Di)return r.RGBA;if(s===ba)return r.DEPTH_COMPONENT;if(s===zs)return r.DEPTH_STENCIL;if(s===vv)return r.RED;if(s===ep)return r.RED_INTEGER;if(s===Yr)return r.RG;if(s===np)return r.RG_INTEGER;if(s===ip)return r.RGBA_INTEGER;if(s===Yu||s===ju||s===Zu||s===Ku)if(h===Be)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Yu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ju)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Yu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ju)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ku)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===fd||s===hd||s===dd||s===pd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===fd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===hd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===dd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===pd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===md||s===_d||s===gd||s===vd||s===xd||s===Sd||s===yd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===md||s===_d)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===gd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===vd)return u.COMPRESSED_R11_EAC;if(s===xd)return u.COMPRESSED_SIGNED_R11_EAC;if(s===Sd)return u.COMPRESSED_RG11_EAC;if(s===yd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Md||s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Nd||s===Ld||s===Od||s===Pd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Md)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ed)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Td)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ad)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Dd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ud)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ld)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Od)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Pd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zd||s===Id||s===Fd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===zd)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Id)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Bd||s===Hd||s===Gd||s===Vd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Bd)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Hd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===sl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const cA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fA=`
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

}`;class hA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Uv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ji({vertexShader:cA,fragmentShader:fA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Yi(new sc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dA extends Hs{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,v=null,_=null,S=null,E=null,A=null;const C=typeof XRWebGLBinding<"u",y=new hA,x={},L=i.getContextAttributes();let P=null,N=null;const I=[],B=[],z=new ie;let $=null;const R=new gi;R.viewport=new on;const D=new gi;D.viewport=new on;const k=[R,D],it=new yM;let at=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let W=I[et];return W===void 0&&(W=new Hh,I[et]=W),W.getTargetRaySpace()},this.getControllerGrip=function(et){let W=I[et];return W===void 0&&(W=new Hh,I[et]=W),W.getGripSpace()},this.getHand=function(et){let W=I[et];return W===void 0&&(W=new Hh,I[et]=W),W.getHandSpace()};function ot(et){const W=B.indexOf(et.inputSource);if(W===-1)return;const xt=I[W];xt!==void 0&&(xt.update(et.inputSource,et.frame,p||h),xt.dispatchEvent({type:et.type,data:et.inputSource}))}function O(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",H);for(let et=0;et<I.length;et++){const W=B[et];W!==null&&(B[et]=null,I[et].disconnect(W))}at=null,dt=null,y.reset();for(const et in x)delete x[et];t.setRenderTarget(P),E=null,S=null,_=null,l=null,N=null,Lt.stop(),s.isPresenting=!1,t.setPixelRatio($),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,s.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,s.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",O),l.addEventListener("inputsourceschange",H),L.xrCompatible!==!0&&await i.makeXRCompatible(),$=t.getPixelRatio(),t.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,wt=null,Nt=null;L.depth&&(Nt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=L.stencil?zs:ba,wt=L.stencil?sl:qi);const ce={colorFormat:i.RGBA8,depthFormat:Nt,scaleFactor:u};_=this.getBinding(),S=_.createProjectionLayer(ce),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),N=new Wi(S.textureWidth,S.textureHeight,{format:Di,type:vi,depthTexture:new ol(S.textureWidth,S.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const xt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new Wi(E.framebufferWidth,E.framebufferHeight,{format:Di,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Lt.setContext(l),Lt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(et){for(let W=0;W<et.removed.length;W++){const xt=et.removed[W],wt=B.indexOf(xt);wt>=0&&(B[wt]=null,I[wt].disconnect(xt))}for(let W=0;W<et.added.length;W++){const xt=et.added[W];let wt=B.indexOf(xt);if(wt===-1){for(let ce=0;ce<I.length;ce++)if(ce>=B.length){B.push(xt),wt=ce;break}else if(B[ce]===null){B[ce]=xt,wt=ce;break}if(wt===-1)break}const Nt=I[wt];Nt&&Nt.connect(xt)}}const K=new J,ft=new J;function ht(et,W,xt){K.setFromMatrixPosition(W.matrixWorld),ft.setFromMatrixPosition(xt.matrixWorld);const wt=K.distanceTo(ft),Nt=W.projectionMatrix.elements,ce=xt.projectionMatrix.elements,$e=Nt[14]/(Nt[10]-1),xe=Nt[14]/(Nt[10]+1),me=(Nt[9]+1)/Nt[5],we=(Nt[9]-1)/Nt[5],le=(Nt[8]-1)/Nt[0],tn=(ce[8]+1)/ce[0],G=$e*le,Ke=$e*tn,Ee=wt/(-le+tn),Le=Ee*-le;if(W.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Le),et.translateZ(Ee),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Nt[10]===-1)et.projectionMatrix.copy(W.projectionMatrix),et.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const Yt=$e+Ee,U=xe+Ee,M=G-Le,q=Ke+(wt-Le),_t=me*xe/U*Yt,yt=we*xe/U*Yt;et.projectionMatrix.makePerspective(M,q,_t,yt,Yt,U),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function w(et,W){W===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(W.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let W=et.near,xt=et.far;y.texture!==null&&(y.depthNear>0&&(W=y.depthNear),y.depthFar>0&&(xt=y.depthFar)),it.near=D.near=R.near=W,it.far=D.far=R.far=xt,(at!==it.near||dt!==it.far)&&(l.updateRenderState({depthNear:it.near,depthFar:it.far}),at=it.near,dt=it.far),it.layers.mask=et.layers.mask|6,R.layers.mask=it.layers.mask&3,D.layers.mask=it.layers.mask&5;const wt=et.parent,Nt=it.cameras;w(it,wt);for(let ce=0;ce<Nt.length;ce++)w(Nt[ce],wt);Nt.length===2?ht(it,R,D):it.projectionMatrix.copy(R.projectionMatrix),Z(et,it,wt)};function Z(et,W,xt){xt===null?et.matrix.copy(W.matrixWorld):(et.matrix.copy(xt.matrixWorld),et.matrix.invert(),et.matrix.multiply(W.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(W.projectionMatrix),et.projectionMatrixInverse.copy(W.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Xd*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(et){m=et,S!==null&&(S.fixedFoveation=et),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=et)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(it)},this.getCameraTexture=function(et){return x[et]};let mt=null;function bt(et,W){if(v=W.getViewerPose(p||h),A=W,v!==null){const xt=v.views;E!==null&&(t.setRenderTargetFramebuffer(N,E.framebuffer),t.setRenderTarget(N));let wt=!1;xt.length!==it.cameras.length&&(it.cameras.length=0,wt=!0);for(let xe=0;xe<xt.length;xe++){const me=xt[xe];let we=null;if(E!==null)we=E.getViewport(me);else{const tn=_.getViewSubImage(S,me);we=tn.viewport,xe===0&&(t.setRenderTargetTextures(N,tn.colorTexture,tn.depthStencilTexture),t.setRenderTarget(N))}let le=k[xe];le===void 0&&(le=new gi,le.layers.enable(xe),le.viewport=new on,k[xe]=le),le.matrix.fromArray(me.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(me.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(we.x,we.y,we.width,we.height),xe===0&&(it.matrix.copy(le.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),wt===!0&&it.cameras.push(le)}const Nt=l.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=s.getBinding();const xe=_.getDepthInformation(xt[0]);xe&&xe.isValid&&xe.texture&&y.init(xe,l.renderState)}if(Nt&&Nt.includes("camera-access")&&C){t.state.unbindTexture(),_=s.getBinding();for(let xe=0;xe<xt.length;xe++){const me=xt[xe].camera;if(me){let we=x[me];we||(we=new Uv,x[me]=we);const le=_.getCameraImage(me);we.sourceTexture=le}}}}for(let xt=0;xt<I.length;xt++){const wt=B[xt],Nt=I[xt];wt!==null&&Nt!==void 0&&Nt.update(wt,W,p||h)}mt&&mt(et,W),W.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:W}),A=null}const Lt=new Lv;Lt.setAnimationLoop(bt),this.setAnimationLoop=function(et){mt=et},this.dispose=function(){}}}const Ns=new Ta,pA=new an;function mA(r,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,bv(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,L,P,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),_(y,x)):x.isMeshPhongMaterial?(u(y,x),v(y,x)):x.isMeshStandardMaterial?(u(y,x),S(y,x),x.isMeshPhysicalMaterial&&E(y,x,N)):x.isMeshMatcapMaterial?(u(y,x),A(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),C(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,L,P):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===jn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===jn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const L=t.get(x),P=L.envMap,N=L.envMapRotation;P&&(y.envMap.value=P,Ns.copy(N),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),y.envMapRotation.value.setFromMatrix4(pA.makeRotationFromEuler(Ns)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,L,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*L,y.scale.value=P*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function E(y,x,L){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const L=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function _A(r,t,i,s){let l={},u={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,P){const N=P.program;s.uniformBlockBinding(L,N)}function p(L,P){let N=l[L.id];N===void 0&&(A(L),N=v(L),l[L.id]=N,L.addEventListener("dispose",y));const I=P.program;s.updateUBOMapping(L,I);const B=t.render.frame;u[L.id]!==B&&(S(L),u[L.id]=B)}function v(L){const P=_();L.__bindingPointIndex=P;const N=r.createBuffer(),I=L.__size,B=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,I,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,N),N}function _(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const P=l[L.id],N=L.uniforms,I=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let B=0,z=N.length;B<z;B++){const $=Array.isArray(N[B])?N[B]:[N[B]];for(let R=0,D=$.length;R<D;R++){const k=$[R];if(E(k,B,R,I)===!0){const it=k.__offset,at=Array.isArray(k.value)?k.value:[k.value];let dt=0;for(let ot=0;ot<at.length;ot++){const O=at[ot],H=C(O);typeof O=="number"||typeof O=="boolean"?(k.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,it+dt,k.__data)):O.isMatrix3?(k.__data[0]=O.elements[0],k.__data[1]=O.elements[1],k.__data[2]=O.elements[2],k.__data[3]=0,k.__data[4]=O.elements[3],k.__data[5]=O.elements[4],k.__data[6]=O.elements[5],k.__data[7]=0,k.__data[8]=O.elements[6],k.__data[9]=O.elements[7],k.__data[10]=O.elements[8],k.__data[11]=0):(O.toArray(k.__data,dt),dt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,it,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(L,P,N,I){const B=L.value,z=P+"_"+N;if(I[z]===void 0)return typeof B=="number"||typeof B=="boolean"?I[z]=B:I[z]=B.clone(),!0;{const $=I[z];if(typeof B=="number"||typeof B=="boolean"){if($!==B)return I[z]=B,!0}else if($.equals(B)===!1)return $.copy(B),!0}return!1}function A(L){const P=L.uniforms;let N=0;const I=16;for(let z=0,$=P.length;z<$;z++){const R=Array.isArray(P[z])?P[z]:[P[z]];for(let D=0,k=R.length;D<k;D++){const it=R[D],at=Array.isArray(it.value)?it.value:[it.value];for(let dt=0,ot=at.length;dt<ot;dt++){const O=at[dt],H=C(O),K=N%I,ft=K%H.boundary,ht=K+ft;N+=ft,ht!==0&&I-ht<H.storage&&(N+=I-ht),it.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=N,N+=H.storage}}}const B=N%I;return B>0&&(N+=I-B),L.__size=N,L.__cache={},this}function C(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",L),P}function y(L){const P=L.target;P.removeEventListener("dispose",y);const N=h.indexOf(P.__bindingPointIndex);h.splice(N,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function x(){for(const L in l)r.deleteBuffer(l[L]);h=[],l={},u={}}return{bind:m,update:p,dispose:x}}const gA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function vA(){return Fi===null&&(Fi=new hM(gA,16,16,Yr,Ea),Fi.name="DFG_LUT",Fi.minFilter=zn,Fi.magFilter=zn,Fi.wrapS=Sa,Fi.wrapT=Sa,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class xA{constructor(t={}){const{canvas:i=zy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:E=vi}=t;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=h;const C=E,y=new Set([ip,np,ep]),x=new Set([vi,qi,al,sl,$d,tp]),L=new Uint32Array(4),P=new Int32Array(4);let N=null,I=null;const B=[],z=[];let $=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1;this._outputColorSpace=_i;let k=0,it=0,at=null,dt=-1,ot=null;const O=new on,H=new on;let K=null;const ft=new He(0);let ht=0,w=i.width,Z=i.height,mt=1,bt=null,Lt=null;const et=new on(0,0,w,Z),W=new on(0,0,w,Z);let xt=!1;const wt=new Dv;let Nt=!1,ce=!1;const $e=new an,xe=new J,me=new on,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function tn(){return at===null?mt:1}let G=s;function Ke(T,Y){return i.getContext(T,Y)}try{const T={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Qd}`),i.addEventListener("webglcontextlost",ae,!1),i.addEventListener("webglcontextrestored",Pe,!1),i.addEventListener("webglcontextcreationerror",Te,!1),G===null){const Y="webgl2";if(G=Ke(Y,T),G===null)throw Ke(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw be("WebGLRenderer: "+T.message),T}let Ee,Le,Yt,U,M,q,_t,yt,ct,Zt,Dt,Xt,ne,Et,Tt,Ht,Ft,Ut,fe,X,Pt,At,Bt,Mt;function St(){Ee=new vT(G),Ee.init(),At=new uA(G,Ee),Le=new uT(G,Ee,t,At),Yt=new oA(G,Ee),Le.reversedDepthBuffer&&S&&Yt.buffers.depth.setReversed(!0),U=new yT(G),M=new q1,q=new lA(G,Ee,Yt,M,Le,At,U),_t=new fT(R),yt=new gT(R),ct=new TM(G),Bt=new oT(G,ct),Zt=new xT(G,ct,U,Bt),Dt=new ET(G,Zt,ct,U),fe=new MT(G,Le,q),Ht=new cT(M),Xt=new W1(R,_t,yt,Ee,Le,Bt,Ht),ne=new mA(R,M),Et=new j1,Tt=new tA(Ee),Ut=new rT(R,_t,yt,Yt,Dt,A,m),Ft=new sA(R,Dt,Le),Mt=new _A(G,U,Le,Yt),X=new lT(G,Ee,U),Pt=new ST(G,Ee,U),U.programs=Xt.programs,R.capabilities=Le,R.extensions=Ee,R.properties=M,R.renderLists=Et,R.shadowMap=Ft,R.state=Yt,R.info=U}St(),C!==vi&&($=new TT(C,i.width,i.height,l,u));const Rt=new dA(R,G);this.xr=Rt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(T){T!==void 0&&(mt=T,this.setSize(w,Z,!1))},this.getSize=function(T){return T.set(w,Z)},this.setSize=function(T,Y,lt=!0){if(Rt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,Z=Y,i.width=Math.floor(T*mt),i.height=Math.floor(Y*mt),lt===!0&&(i.style.width=T+"px",i.style.height=Y+"px"),$!==null&&$.setSize(i.width,i.height),this.setViewport(0,0,T,Y)},this.getDrawingBufferSize=function(T){return T.set(w*mt,Z*mt).floor()},this.setDrawingBufferSize=function(T,Y,lt){w=T,Z=Y,mt=lt,i.width=Math.floor(T*lt),i.height=Math.floor(Y*lt),this.setViewport(0,0,T,Y)},this.setEffects=function(T){if(C===vi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let Y=0;Y<T.length;Y++)if(T[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}$.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(O)},this.getViewport=function(T){return T.copy(et)},this.setViewport=function(T,Y,lt,st){T.isVector4?et.set(T.x,T.y,T.z,T.w):et.set(T,Y,lt,st),Yt.viewport(O.copy(et).multiplyScalar(mt).round())},this.getScissor=function(T){return T.copy(W)},this.setScissor=function(T,Y,lt,st){T.isVector4?W.set(T.x,T.y,T.z,T.w):W.set(T,Y,lt,st),Yt.scissor(H.copy(W).multiplyScalar(mt).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(T){Yt.setScissorTest(xt=T)},this.setOpaqueSort=function(T){bt=T},this.setTransparentSort=function(T){Lt=T},this.getClearColor=function(T){return T.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(T=!0,Y=!0,lt=!0){let st=0;if(T){let Q=!1;if(at!==null){const Ot=at.texture.format;Q=y.has(Ot)}if(Q){const Ot=at.texture.type,Gt=x.has(Ot),zt=Ut.getClearColor(),Vt=Ut.getClearAlpha(),Wt=zt.r,Jt=zt.g,qt=zt.b;Gt?(L[0]=Wt,L[1]=Jt,L[2]=qt,L[3]=Vt,G.clearBufferuiv(G.COLOR,0,L)):(P[0]=Wt,P[1]=Jt,P[2]=qt,P[3]=Vt,G.clearBufferiv(G.COLOR,0,P))}else st|=G.COLOR_BUFFER_BIT}Y&&(st|=G.DEPTH_BUFFER_BIT),lt&&(st|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ae,!1),i.removeEventListener("webglcontextrestored",Pe,!1),i.removeEventListener("webglcontextcreationerror",Te,!1),Ut.dispose(),Et.dispose(),Tt.dispose(),M.dispose(),_t.dispose(),yt.dispose(),Dt.dispose(),Bt.dispose(),Mt.dispose(),Xt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Vs),Rt.removeEventListener("sessionend",$r),Li.stop()};function ae(T){T.preventDefault(),nc("WebGLRenderer: Context Lost."),D=!0}function Pe(){nc("WebGLRenderer: Context Restored."),D=!1;const T=U.autoReset,Y=Ft.enabled,lt=Ft.autoUpdate,st=Ft.needsUpdate,Q=Ft.type;St(),U.autoReset=T,Ft.enabled=Y,Ft.autoUpdate=lt,Ft.needsUpdate=st,Ft.type=Q}function Te(T){be("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Nn(T){const Y=T.target;Y.removeEventListener("dispose",Nn),yi(Y)}function yi(T){fl(T),M.remove(T)}function fl(T){const Y=M.get(T).programs;Y!==void 0&&(Y.forEach(function(lt){Xt.releaseProgram(lt)}),T.isShaderMaterial&&Xt.releaseShaderCache(T))}this.renderBufferDirect=function(T,Y,lt,st,Q,Ot){Y===null&&(Y=we);const Gt=Q.isMesh&&Q.matrixWorld.determinant()<0,zt=us(T,Y,lt,st,Q);Yt.setMaterial(st,Gt);let Vt=lt.index,Wt=1;if(st.wireframe===!0){if(Vt=Zt.getWireframeAttribute(lt),Vt===void 0)return;Wt=2}const Jt=lt.drawRange,qt=lt.attributes.position;let $t=Jt.start*Wt,De=(Jt.start+Jt.count)*Wt;Ot!==null&&($t=Math.max($t,Ot.start*Wt),De=Math.min(De,(Ot.start+Ot.count)*Wt)),Vt!==null?($t=Math.max($t,0),De=Math.min(De,Vt.count)):qt!=null&&($t=Math.max($t,0),De=Math.min(De,qt.count));const Qe=De-$t;if(Qe<0||Qe===1/0)return;Bt.setup(Q,st,zt,lt,Vt);let Ye,Oe=X;if(Vt!==null&&(Ye=ct.get(Vt),Oe=Pt,Oe.setIndex(Ye)),Q.isMesh)st.wireframe===!0?(Yt.setLineWidth(st.wireframeLinewidth*tn()),Oe.setMode(G.LINES)):Oe.setMode(G.TRIANGLES);else if(Q.isLine){let Kt=st.linewidth;Kt===void 0&&(Kt=1),Yt.setLineWidth(Kt*tn()),Q.isLineSegments?Oe.setMode(G.LINES):Q.isLineLoop?Oe.setMode(G.LINE_LOOP):Oe.setMode(G.LINE_STRIP)}else Q.isPoints?Oe.setMode(G.POINTS):Q.isSprite&&Oe.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)rl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Oe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Kt=Q._multiDrawStarts,Ue=Q._multiDrawCounts,se=Q._multiDrawCount,Mn=Vt?ct.get(Vt).bytesPerElement:1,Ki=M.get(st).currentProgram.getUniforms();for(let En=0;En<se;En++)Ki.setValue(G,"_gl_DrawID",En),Oe.render(Kt[En]/Mn,Ue[En])}else if(Q.isInstancedMesh)Oe.renderInstances($t,Qe,Q.count);else if(lt.isInstancedBufferGeometry){const Kt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ue=Math.min(lt.instanceCount,Kt);Oe.renderInstances($t,Qe,Ue)}else Oe.render($t,Qe)};function Qr(T,Y,lt){T.transparent===!0&&T.side===xa&&T.forceSinglePass===!1?(T.side=jn,T.needsUpdate=!0,Xs(T,Y,lt),T.side=ls,T.needsUpdate=!0,Xs(T,Y,lt),T.side=xa):Xs(T,Y,lt)}this.compile=function(T,Y,lt=null){lt===null&&(lt=T),I=Tt.get(lt),I.init(Y),z.push(I),lt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),T!==lt&&T.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),I.setupLights();const st=new Set;return T.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ot=Q.material;if(Ot)if(Array.isArray(Ot))for(let Gt=0;Gt<Ot.length;Gt++){const zt=Ot[Gt];Qr(zt,lt,Q),st.add(zt)}else Qr(Ot,lt,Q),st.add(Ot)}),I=z.pop(),st},this.compileAsync=function(T,Y,lt=null){const st=this.compile(T,Y,lt);return new Promise(Q=>{function Ot(){if(st.forEach(function(Gt){M.get(Gt).currentProgram.isReady()&&st.delete(Gt)}),st.size===0){Q(T);return}setTimeout(Ot,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Gs=null;function Jr(T){Gs&&Gs(T)}function Vs(){Li.stop()}function $r(){Li.start()}const Li=new Lv;Li.setAnimationLoop(Jr),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(T){Gs=T,Rt.setAnimationLoop(T),T===null?Li.stop():Li.start()},Rt.addEventListener("sessionstart",Vs),Rt.addEventListener("sessionend",$r),this.render=function(T,Y){if(Y!==void 0&&Y.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const lt=Rt.enabled===!0&&Rt.isPresenting===!0,st=$!==null&&(at===null||lt)&&$.begin(R,at);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&($===null||$.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(Y),Y=Rt.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,Y,at),I=Tt.get(T,z.length),I.init(Y),z.push(I),$e.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),wt.setFromProjectionMatrix($e,ki,Y.reversedDepth),ce=this.localClippingEnabled,Nt=Ht.init(this.clippingPlanes,ce),N=Et.get(T,B.length),N.init(),B.push(N),Rt.enabled===!0&&Rt.isPresenting===!0){const Gt=R.xr.getDepthSensingMesh();Gt!==null&&si(Gt,Y,-1/0,R.sortObjects)}si(T,Y,0,R.sortObjects),N.finish(),R.sortObjects===!0&&N.sort(bt,Lt),le=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,le&&Ut.addToRenderList(N,T),this.info.render.frame++,Nt===!0&&Ht.beginShadows();const Q=I.state.shadowsArray;if(Ft.render(Q,T,Y),Nt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&$.hasRenderPass())===!1){const Gt=N.opaque,zt=N.transmissive;if(I.setupLights(),Y.isArrayCamera){const Vt=Y.cameras;if(zt.length>0)for(let Wt=0,Jt=Vt.length;Wt<Jt;Wt++){const qt=Vt[Wt];yn(Gt,zt,T,qt)}le&&Ut.render(T);for(let Wt=0,Jt=Vt.length;Wt<Jt;Wt++){const qt=Vt[Wt];ln(N,T,qt,qt.viewport)}}else zt.length>0&&yn(Gt,zt,T,Y),le&&Ut.render(T),ln(N,T,Y)}at!==null&&it===0&&(q.updateMultisampleRenderTarget(at),q.updateRenderTargetMipmap(at)),st&&$.end(R),T.isScene===!0&&T.onAfterRender(R,T,Y),Bt.resetDefaultState(),dt=-1,ot=null,z.pop(),z.length>0?(I=z[z.length-1],Nt===!0&&Ht.setGlobalState(R.clippingPlanes,I.state.camera)):I=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function si(T,Y,lt,st){if(T.visible===!1)return;if(T.layers.test(Y.layers)){if(T.isGroup)lt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Y);else if(T.isLight)I.pushLight(T),T.castShadow&&I.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||wt.intersectsSprite(T)){st&&me.setFromMatrixPosition(T.matrixWorld).applyMatrix4($e);const Gt=Dt.update(T),zt=T.material;zt.visible&&N.push(T,Gt,zt,lt,me.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||wt.intersectsObject(T))){const Gt=Dt.update(T),zt=T.material;if(st&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),me.copy(T.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),me.copy(Gt.boundingSphere.center)),me.applyMatrix4(T.matrixWorld).applyMatrix4($e)),Array.isArray(zt)){const Vt=Gt.groups;for(let Wt=0,Jt=Vt.length;Wt<Jt;Wt++){const qt=Vt[Wt],$t=zt[qt.materialIndex];$t&&$t.visible&&N.push(T,Gt,$t,lt,me.z,qt)}}else zt.visible&&N.push(T,Gt,zt,lt,me.z,null)}}const Ot=T.children;for(let Gt=0,zt=Ot.length;Gt<zt;Gt++)si(Ot[Gt],Y,lt,st)}function ln(T,Y,lt,st){const{opaque:Q,transmissive:Ot,transparent:Gt}=T;I.setupLightsView(lt),Nt===!0&&Ht.setGlobalState(R.clippingPlanes,lt),st&&Yt.viewport(O.copy(st)),Q.length>0&&Mi(Q,Y,lt),Ot.length>0&&Mi(Ot,Y,lt),Gt.length>0&&Mi(Gt,Y,lt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function yn(T,Y,lt,st){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[st.id]===void 0){const $t=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[st.id]=new Wi(1,1,{generateMipmaps:!0,type:$t?Ea:vi,minFilter:Ps,samples:Le.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}const Ot=I.state.transmissionRenderTarget[st.id],Gt=st.viewport||O;Ot.setSize(Gt.z*R.transmissionResolutionScale,Gt.w*R.transmissionResolutionScale);const zt=R.getRenderTarget(),Vt=R.getActiveCubeFace(),Wt=R.getActiveMipmapLevel();R.setRenderTarget(Ot),R.getClearColor(ft),ht=R.getClearAlpha(),ht<1&&R.setClearColor(16777215,.5),R.clear(),le&&Ut.render(lt);const Jt=R.toneMapping;R.toneMapping=Xi;const qt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),I.setupLightsView(st),Nt===!0&&Ht.setGlobalState(R.clippingPlanes,st),Mi(T,lt,st),q.updateMultisampleRenderTarget(Ot),q.updateRenderTargetMipmap(Ot),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let De=0,Qe=Y.length;De<Qe;De++){const Ye=Y[De],{object:Oe,geometry:Kt,material:Ue,group:se}=Ye;if(Ue.side===xa&&Oe.layers.test(st.layers)){const Mn=Ue.side;Ue.side=jn,Ue.needsUpdate=!0,ks(Oe,lt,st,Kt,Ue,se),Ue.side=Mn,Ue.needsUpdate=!0,$t=!0}}$t===!0&&(q.updateMultisampleRenderTarget(Ot),q.updateRenderTargetMipmap(Ot))}R.setRenderTarget(zt,Vt,Wt),R.setClearColor(ft,ht),qt!==void 0&&(st.viewport=qt),R.toneMapping=Jt}function Mi(T,Y,lt){const st=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Ot=T.length;Q<Ot;Q++){const Gt=T[Q],{object:zt,geometry:Vt,group:Wt}=Gt;let Jt=Gt.material;Jt.allowOverride===!0&&st!==null&&(Jt=st),zt.layers.test(lt.layers)&&ks(zt,Y,lt,Vt,Jt,Wt)}}function ks(T,Y,lt,st,Q,Ot){T.onBeforeRender(R,Y,lt,st,Q,Ot),T.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(R,Y,lt,st,T,Ot),Q.transparent===!0&&Q.side===xa&&Q.forceSinglePass===!1?(Q.side=jn,Q.needsUpdate=!0,R.renderBufferDirect(lt,Y,st,Q,T,Ot),Q.side=ls,Q.needsUpdate=!0,R.renderBufferDirect(lt,Y,st,Q,T,Ot),Q.side=xa):R.renderBufferDirect(lt,Y,st,Q,T,Ot),T.onAfterRender(R,Y,lt,st,Q,Ot)}function Xs(T,Y,lt){Y.isScene!==!0&&(Y=we);const st=M.get(T),Q=I.state.lights,Ot=I.state.shadowsArray,Gt=Q.state.version,zt=Xt.getParameters(T,Q.state,Ot,Y,lt),Vt=Xt.getProgramCacheKey(zt);let Wt=st.programs;st.environment=T.isMeshStandardMaterial?Y.environment:null,st.fog=Y.fog,st.envMap=(T.isMeshStandardMaterial?yt:_t).get(T.envMap||st.environment),st.envMapRotation=st.environment!==null&&T.envMap===null?Y.environmentRotation:T.envMapRotation,Wt===void 0&&(T.addEventListener("dispose",Nn),Wt=new Map,st.programs=Wt);let Jt=Wt.get(Vt);if(Jt!==void 0){if(st.currentProgram===Jt&&st.lightsStateVersion===Gt)return to(T,zt),Jt}else zt.uniforms=Xt.getUniforms(T),T.onBeforeCompile(zt,R),Jt=Xt.acquireProgram(zt,Vt),Wt.set(Vt,Jt),st.uniforms=zt.uniforms;const qt=st.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qt.clippingPlanes=Ht.uniform),to(T,zt),st.needsLights=Aa(T),st.lightsStateVersion=Gt,st.needsLights&&(qt.ambientLightColor.value=Q.state.ambient,qt.lightProbe.value=Q.state.probe,qt.directionalLights.value=Q.state.directional,qt.directionalLightShadows.value=Q.state.directionalShadow,qt.spotLights.value=Q.state.spot,qt.spotLightShadows.value=Q.state.spotShadow,qt.rectAreaLights.value=Q.state.rectArea,qt.ltc_1.value=Q.state.rectAreaLTC1,qt.ltc_2.value=Q.state.rectAreaLTC2,qt.pointLights.value=Q.state.point,qt.pointLightShadows.value=Q.state.pointShadow,qt.hemisphereLights.value=Q.state.hemi,qt.directionalShadowMap.value=Q.state.directionalShadowMap,qt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qt.spotShadowMap.value=Q.state.spotShadowMap,qt.spotLightMatrix.value=Q.state.spotLightMatrix,qt.spotLightMap.value=Q.state.spotLightMap,qt.pointShadowMap.value=Q.state.pointShadowMap,qt.pointShadowMatrix.value=Q.state.pointShadowMatrix),st.currentProgram=Jt,st.uniformsList=null,Jt}function hl(T){if(T.uniformsList===null){const Y=T.currentProgram.getUniforms();T.uniformsList=Ju.seqWithValue(Y.seq,T.uniforms)}return T.uniformsList}function to(T,Y){const lt=M.get(T);lt.outputColorSpace=Y.outputColorSpace,lt.batching=Y.batching,lt.batchingColor=Y.batchingColor,lt.instancing=Y.instancing,lt.instancingColor=Y.instancingColor,lt.instancingMorph=Y.instancingMorph,lt.skinning=Y.skinning,lt.morphTargets=Y.morphTargets,lt.morphNormals=Y.morphNormals,lt.morphColors=Y.morphColors,lt.morphTargetsCount=Y.morphTargetsCount,lt.numClippingPlanes=Y.numClippingPlanes,lt.numIntersection=Y.numClipIntersection,lt.vertexAlphas=Y.vertexAlphas,lt.vertexTangents=Y.vertexTangents,lt.toneMapping=Y.toneMapping}function us(T,Y,lt,st,Q){Y.isScene!==!0&&(Y=we),q.resetTextureUnits();const Ot=Y.fog,Gt=st.isMeshStandardMaterial?Y.environment:null,zt=at===null?R.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:jr,Vt=(st.isMeshStandardMaterial?yt:_t).get(st.envMap||Gt),Wt=st.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Jt=!!lt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),qt=!!lt.morphAttributes.position,$t=!!lt.morphAttributes.normal,De=!!lt.morphAttributes.color;let Qe=Xi;st.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Qe=R.toneMapping);const Ye=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Oe=Ye!==void 0?Ye.length:0,Kt=M.get(st),Ue=I.state.lights;if(Nt===!0&&(ce===!0||T!==ot)){const Tn=T===ot&&st.id===dt;Ht.setState(st,T,Tn)}let se=!1;st.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ue.state.version||Kt.outputColorSpace!==zt||Q.isBatchedMesh&&Kt.batching===!1||!Q.isBatchedMesh&&Kt.batching===!0||Q.isBatchedMesh&&Kt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Kt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Kt.instancing===!1||!Q.isInstancedMesh&&Kt.instancing===!0||Q.isSkinnedMesh&&Kt.skinning===!1||!Q.isSkinnedMesh&&Kt.skinning===!0||Q.isInstancedMesh&&Kt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Kt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Kt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Kt.instancingMorph===!1&&Q.morphTexture!==null||Kt.envMap!==Vt||st.fog===!0&&Kt.fog!==Ot||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Ht.numPlanes||Kt.numIntersection!==Ht.numIntersection)||Kt.vertexAlphas!==Wt||Kt.vertexTangents!==Jt||Kt.morphTargets!==qt||Kt.morphNormals!==$t||Kt.morphColors!==De||Kt.toneMapping!==Qe||Kt.morphTargetsCount!==Oe)&&(se=!0):(se=!0,Kt.__version=st.version);let Mn=Kt.currentProgram;se===!0&&(Mn=Xs(st,Y,Q));let Ki=!1,En=!1,ri=!1;const ze=Mn.getUniforms(),bn=Kt.uniforms;if(Yt.useProgram(Mn.program)&&(Ki=!0,En=!0,ri=!0),st.id!==dt&&(dt=st.id,En=!0),Ki||ot!==T){Yt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ze.setValue(G,"projectionMatrix",T.projectionMatrix),ze.setValue(G,"viewMatrix",T.matrixWorldInverse);const An=ze.map.cameraPosition;An!==void 0&&An.setValue(G,xe.setFromMatrixPosition(T.matrixWorld)),Le.logarithmicDepthBuffer&&ze.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ze.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),ot!==T&&(ot=T,En=!0,ri=!0)}if(Kt.needsLights&&(Ue.state.directionalShadowMap.length>0&&ze.setValue(G,"directionalShadowMap",Ue.state.directionalShadowMap,q),Ue.state.spotShadowMap.length>0&&ze.setValue(G,"spotShadowMap",Ue.state.spotShadowMap,q),Ue.state.pointShadowMap.length>0&&ze.setValue(G,"pointShadowMap",Ue.state.pointShadowMap,q)),Q.isSkinnedMesh){ze.setOptional(G,Q,"bindMatrix"),ze.setOptional(G,Q,"bindMatrixInverse");const Tn=Q.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),ze.setValue(G,"boneTexture",Tn.boneTexture,q))}Q.isBatchedMesh&&(ze.setOptional(G,Q,"batchingTexture"),ze.setValue(G,"batchingTexture",Q._matricesTexture,q),ze.setOptional(G,Q,"batchingIdTexture"),ze.setValue(G,"batchingIdTexture",Q._indirectTexture,q),ze.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ze.setValue(G,"batchingColorTexture",Q._colorsTexture,q));const pn=lt.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&fe.update(Q,lt,Mn),(En||Kt.receiveShadow!==Q.receiveShadow)&&(Kt.receiveShadow=Q.receiveShadow,ze.setValue(G,"receiveShadow",Q.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(bn.envMap.value=Vt,bn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Y.environment!==null&&(bn.envMapIntensity.value=Y.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=vA()),En&&(ze.setValue(G,"toneMappingExposure",R.toneMappingExposure),Kt.needsLights&&eo(bn,ri),Ot&&st.fog===!0&&ne.refreshFogUniforms(bn,Ot),ne.refreshMaterialUniforms(bn,st,mt,Z,I.state.transmissionRenderTarget[T.id]),Ju.upload(G,hl(Kt),bn,q)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Ju.upload(G,hl(Kt),bn,q),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ze.setValue(G,"center",Q.center),ze.setValue(G,"modelViewMatrix",Q.modelViewMatrix),ze.setValue(G,"normalMatrix",Q.normalMatrix),ze.setValue(G,"modelMatrix",Q.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Tn=st.uniformsGroups;for(let An=0,Ws=Tn.length;An<Ws;An++){const Ei=Tn[An];Mt.update(Ei,Mn),Mt.bind(Ei,Mn)}}return Mn}function eo(T,Y){T.ambientLightColor.needsUpdate=Y,T.lightProbe.needsUpdate=Y,T.directionalLights.needsUpdate=Y,T.directionalLightShadows.needsUpdate=Y,T.pointLights.needsUpdate=Y,T.pointLightShadows.needsUpdate=Y,T.spotLights.needsUpdate=Y,T.spotLightShadows.needsUpdate=Y,T.rectAreaLights.needsUpdate=Y,T.hemisphereLights.needsUpdate=Y}function Aa(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return it},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(T,Y,lt){const st=M.get(T);st.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),M.get(T.texture).__webglTexture=Y,M.get(T.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:lt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,Y){const lt=M.get(T);lt.__webglFramebuffer=Y,lt.__useDefaultFramebuffer=Y===void 0};const Ra=G.createFramebuffer();this.setRenderTarget=function(T,Y=0,lt=0){at=T,k=Y,it=lt;let st=null,Q=!1,Ot=!1;if(T){const zt=M.get(T);if(zt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(G.FRAMEBUFFER,zt.__webglFramebuffer),O.copy(T.viewport),H.copy(T.scissor),K=T.scissorTest,Yt.viewport(O),Yt.scissor(H),Yt.setScissorTest(K),dt=-1;return}else if(zt.__webglFramebuffer===void 0)q.setupRenderTarget(T);else if(zt.__hasExternalTextures)q.rebindTextures(T,M.get(T.texture).__webglTexture,M.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Jt=T.depthTexture;if(zt.__boundDepthTexture!==Jt){if(Jt!==null&&M.has(Jt)&&(T.width!==Jt.image.width||T.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(T)}}const Vt=T.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Ot=!0);const Wt=M.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[Y])?st=Wt[Y][lt]:st=Wt[Y],Q=!0):T.samples>0&&q.useMultisampledRTT(T)===!1?st=M.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?st=Wt[lt]:st=Wt,O.copy(T.viewport),H.copy(T.scissor),K=T.scissorTest}else O.copy(et).multiplyScalar(mt).floor(),H.copy(W).multiplyScalar(mt).floor(),K=xt;if(lt!==0&&(st=Ra),Yt.bindFramebuffer(G.FRAMEBUFFER,st)&&Yt.drawBuffers(T,st),Yt.viewport(O),Yt.scissor(H),Yt.setScissorTest(K),Q){const zt=M.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,zt.__webglTexture,lt)}else if(Ot){const zt=Y;for(let Vt=0;Vt<T.textures.length;Vt++){const Wt=M.get(T.textures[Vt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,lt,zt)}}else if(T!==null&&lt!==0){const zt=M.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,zt.__webglTexture,lt)}dt=-1},this.readRenderTargetPixels=function(T,Y,lt,st,Q,Ot,Gt,zt=0){if(!(T&&T.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Gt!==void 0&&(Vt=Vt[Gt]),Vt){Yt.bindFramebuffer(G.FRAMEBUFFER,Vt);try{const Wt=T.textures[zt],Jt=Wt.format,qt=Wt.type;if(!Le.textureFormatReadable(Jt)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(qt)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=T.width-st&&lt>=0&&lt<=T.height-Q&&(T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+zt),G.readPixels(Y,lt,st,Q,At.convert(Jt),At.convert(qt),Ot))}finally{const Wt=at!==null?M.get(at).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(T,Y,lt,st,Q,Ot,Gt,zt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Gt!==void 0&&(Vt=Vt[Gt]),Vt)if(Y>=0&&Y<=T.width-st&&lt>=0&&lt<=T.height-Q){Yt.bindFramebuffer(G.FRAMEBUFFER,Vt);const Wt=T.textures[zt],Jt=Wt.format,qt=Wt.type;if(!Le.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.bufferData(G.PIXEL_PACK_BUFFER,Ot.byteLength,G.STREAM_READ),T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+zt),G.readPixels(Y,lt,st,Q,At.convert(Jt),At.convert(qt),0);const De=at!==null?M.get(at).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,De);const Qe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Iy(G,Qe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ot),G.deleteBuffer($t),G.deleteSync(Qe),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,Y=null,lt=0){const st=Math.pow(2,-lt),Q=Math.floor(T.image.width*st),Ot=Math.floor(T.image.height*st),Gt=Y!==null?Y.x:0,zt=Y!==null?Y.y:0;q.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,lt,0,0,Gt,zt,Q,Ot),Yt.unbindTexture()};const cs=G.createFramebuffer(),Ca=G.createFramebuffer();this.copyTextureToTexture=function(T,Y,lt=null,st=null,Q=0,Ot=null){Ot===null&&(Q!==0?(rl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ot=Q,Q=0):Ot=0);let Gt,zt,Vt,Wt,Jt,qt,$t,De,Qe;const Ye=T.isCompressedTexture?T.mipmaps[Ot]:T.image;if(lt!==null)Gt=lt.max.x-lt.min.x,zt=lt.max.y-lt.min.y,Vt=lt.isBox3?lt.max.z-lt.min.z:1,Wt=lt.min.x,Jt=lt.min.y,qt=lt.isBox3?lt.min.z:0;else{const pn=Math.pow(2,-Q);Gt=Math.floor(Ye.width*pn),zt=Math.floor(Ye.height*pn),T.isDataArrayTexture?Vt=Ye.depth:T.isData3DTexture?Vt=Math.floor(Ye.depth*pn):Vt=1,Wt=0,Jt=0,qt=0}st!==null?($t=st.x,De=st.y,Qe=st.z):($t=0,De=0,Qe=0);const Oe=At.convert(Y.format),Kt=At.convert(Y.type);let Ue;Y.isData3DTexture?(q.setTexture3D(Y,0),Ue=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),Ue=G.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),Ue=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const se=G.getParameter(G.UNPACK_ROW_LENGTH),Mn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ki=G.getParameter(G.UNPACK_SKIP_PIXELS),En=G.getParameter(G.UNPACK_SKIP_ROWS),ri=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ye.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ye.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Wt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qt);const ze=T.isDataArrayTexture||T.isData3DTexture,bn=Y.isDataArrayTexture||Y.isData3DTexture;if(T.isDepthTexture){const pn=M.get(T),Tn=M.get(Y),An=M.get(pn.__renderTarget),Ws=M.get(Tn.__renderTarget);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,An.__webglFramebuffer),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ws.__webglFramebuffer);for(let Ei=0;Ei<Vt;Ei++)ze&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(T).__webglTexture,Q,qt+Ei),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(Y).__webglTexture,Ot,Qe+Ei)),G.blitFramebuffer(Wt,Jt,Gt,zt,$t,De,Gt,zt,G.DEPTH_BUFFER_BIT,G.NEAREST);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||T.isRenderTargetTexture||M.has(T)){const pn=M.get(T),Tn=M.get(Y);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,cs),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ca);for(let An=0;An<Vt;An++)ze?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,Q,qt+An):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,Q),bn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Tn.__webglTexture,Ot,Qe+An):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Tn.__webglTexture,Ot),Q!==0?G.blitFramebuffer(Wt,Jt,Gt,zt,$t,De,Gt,zt,G.COLOR_BUFFER_BIT,G.NEAREST):bn?G.copyTexSubImage3D(Ue,Ot,$t,De,Qe+An,Wt,Jt,Gt,zt):G.copyTexSubImage2D(Ue,Ot,$t,De,Wt,Jt,Gt,zt);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else bn?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Ue,Ot,$t,De,Qe,Gt,zt,Vt,Oe,Kt,Ye.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Ue,Ot,$t,De,Qe,Gt,zt,Vt,Oe,Ye.data):G.texSubImage3D(Ue,Ot,$t,De,Qe,Gt,zt,Vt,Oe,Kt,Ye):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ot,$t,De,Gt,zt,Oe,Kt,Ye.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ot,$t,De,Ye.width,Ye.height,Oe,Ye.data):G.texSubImage2D(G.TEXTURE_2D,Ot,$t,De,Gt,zt,Oe,Kt,Ye);G.pixelStorei(G.UNPACK_ROW_LENGTH,se),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Mn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ki),G.pixelStorei(G.UNPACK_SKIP_ROWS,En),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ri),Ot===0&&Y.generateMipmaps&&G.generateMipmap(Ue),Yt.unbindTexture()},this.initRenderTarget=function(T){M.get(T).__webglFramebuffer===void 0&&q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?q.setTextureCube(T,0):T.isData3DTexture?q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?q.setTexture2DArray(T,0):q.setTexture2D(T,0),Yt.unbindTexture()},this.resetState=function(){k=0,it=0,at=null,Yt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const Jg={type:"change"},hp={type:"start"},Fv={type:"end"},Wu=new lp,$g=new as,SA=Math.cos(70*By.DEG2RAD),_n=new J,Yn=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zh=1e-6;class yA extends EM{constructor(t,i=null){super(t,i),this.state=We.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vr.ROTATE,MIDDLE:Vr.DOLLY,RIGHT:Vr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new Bs,this._lastTargetPosition=new J,this._quat=new Bs().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rg,this._sphericalDelta=new Rg,this._scale=1,this._panOffset=new J,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new J,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=EA.bind(this),this._onPointerDown=MA.bind(this),this._onPointerUp=bA.bind(this),this._onContextMenu=UA.bind(this),this._onMouseWheel=RA.bind(this),this._onKeyDown=CA.bind(this),this._onTouchStart=wA.bind(this),this._onTouchMove=DA.bind(this),this._onMouseDown=TA.bind(this),this._onMouseMove=AA.bind(this),this._interceptControlDown=NA.bind(this),this._interceptControlUp=LA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jg),this.update(),this.state=We.NONE}update(t=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Yn:s>Math.PI&&(s-=Yn),l<-Math.PI?l+=Yn:l>Math.PI&&(l-=Yn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=_n.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Wu.origin.copy(this.object.position),Wu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wu.direction))<SA?this.object.lookAt(this.target):($g.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wu.intersectPlane($g,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Zh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zh||this._lastTargetPosition.distanceToSquared(this.target)>Zh?(this.dispatchEvent(Jg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Yn/60*this.autoRotateSpeed*t:Yn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-t),this._panOffset.add(_n)}_panUp(t,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(t),this._panOffset.add(_n)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let u=_n.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ie,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function MA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function EA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function bA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fv),this.state=We.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function TA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=We.DOLLY;break;case Vr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=We.ROTATE}break;case Vr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(hp)}function AA(r){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function RA(r){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(r.preventDefault(),this.dispatchEvent(hp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Fv))}function CA(r){this.enabled!==!1&&this._handleKeyDown(r)}function wA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=We.TOUCH_ROTATE;break;case Gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case Gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=We.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(hp)}function DA(r){switch(this._trackPointer(r),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=We.NONE}}function UA(r){this.enabled!==!1&&r.preventDefault()}function NA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function LA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Is=Object.freeze({Linear:Object.freeze({None:function(r){return r},In:function(r){return this.None(r)},Out:function(r){return this.None(r)},InOut:function(r){return this.None(r)}}),Quadratic:Object.freeze({In:function(r){return r*r},Out:function(r){return r*(2-r)},InOut:function(r){return(r*=2)<1?.5*r*r:-.5*(--r*(r-2)-1)}}),Cubic:Object.freeze({In:function(r){return r*r*r},Out:function(r){return--r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r:.5*((r-=2)*r*r+2)}}),Quartic:Object.freeze({In:function(r){return r*r*r*r},Out:function(r){return 1- --r*r*r*r},InOut:function(r){return(r*=2)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2)}}),Quintic:Object.freeze({In:function(r){return r*r*r*r*r},Out:function(r){return--r*r*r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2)}}),Sinusoidal:Object.freeze({In:function(r){return 1-Math.sin((1-r)*Math.PI/2)},Out:function(r){return Math.sin(r*Math.PI/2)},InOut:function(r){return .5*(1-Math.sin(Math.PI*(.5-r)))}}),Exponential:Object.freeze({In:function(r){return r===0?0:Math.pow(1024,r-1)},Out:function(r){return r===1?1:1-Math.pow(2,-10*r)},InOut:function(r){return r===0?0:r===1?1:(r*=2)<1?.5*Math.pow(1024,r-1):.5*(-Math.pow(2,-10*(r-1))+2)}}),Circular:Object.freeze({In:function(r){return 1-Math.sqrt(1-r*r)},Out:function(r){return Math.sqrt(1- --r*r)},InOut:function(r){return(r*=2)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1)}}),Elastic:Object.freeze({In:function(r){return r===0?0:r===1?1:-Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI)},Out:function(r){return r===0?0:r===1?1:Math.pow(2,-10*r)*Math.sin((r-.1)*5*Math.PI)+1},InOut:function(r){return r===0?0:r===1?1:(r*=2,r<1?-.5*Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI):.5*Math.pow(2,-10*(r-1))*Math.sin((r-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(r){var t=1.70158;return r===1?1:r*r*((t+1)*r-t)},Out:function(r){var t=1.70158;return r===0?0:--r*r*((t+1)*r+t)+1},InOut:function(r){var t=2.5949095;return(r*=2)<1?.5*(r*r*((t+1)*r-t)):.5*((r-=2)*r*((t+1)*r+t)+2)}}),Bounce:Object.freeze({In:function(r){return 1-Is.Bounce.Out(1-r)},Out:function(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},InOut:function(r){return r<.5?Is.Bounce.In(r*2)*.5:Is.Bounce.Out(r*2-1)*.5+.5}}),generatePow:function(r){return r===void 0&&(r=4),r=r<Number.EPSILON?Number.EPSILON:r,r=r>1e4?1e4:r,{In:function(t){return Math.pow(t,r)},Out:function(t){return 1-Math.pow(1-t,r)},InOut:function(t){return t<.5?Math.pow(t*2,r)/2:(1-Math.pow(2-t*2,r))/2+.5}}}}),il=function(){return performance.now()},OA=(function(){function r(){this._tweens={},this._tweensAddedDuringUpdate={}}return r.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(i){return t._tweens[i]})},r.prototype.removeAll=function(){this._tweens={}},r.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},r.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},r.prototype.update=function(t,i){t===void 0&&(t=il()),i===void 0&&(i=!1);var s=Object.keys(this._tweens);if(s.length===0)return!1;for(;s.length>0;){this._tweensAddedDuringUpdate={};for(var l=0;l<s.length;l++){var u=this._tweens[s[l]],h=!i;u&&u.update(t,h)===!1&&!i&&delete this._tweens[s[l]]}s=Object.keys(this._tweensAddedDuringUpdate)}return!0},r})(),jd={Linear:function(r,t){var i=r.length-1,s=i*t,l=Math.floor(s),u=jd.Utils.Linear;return t<0?u(r[0],r[1],s):t>1?u(r[i],r[i-1],i-s):u(r[l],r[l+1>i?i:l+1],s-l)},Utils:{Linear:function(r,t,i){return(t-r)*i+r}}},Bv=(function(){function r(){}return r.nextId=function(){return r._nextId++},r._nextId=0,r})(),Zd=new OA,tv=(function(){function r(t,i){i===void 0&&(i=Zd),this._object=t,this._group=i,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Is.Linear.None,this._interpolationFunction=jd.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Bv.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return r.prototype.getId=function(){return this._id},r.prototype.isPlaying=function(){return this._isPlaying},r.prototype.isPaused=function(){return this._isPaused},r.prototype.getDuration=function(){return this._duration},r.prototype.to=function(t,i){if(i===void 0&&(i=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=i<0?0:i,this},r.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t<0?0:t,this},r.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},r.prototype.start=function(t,i){if(t===void 0&&(t=il()),i===void 0&&(i=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var s in this._valuesStartRepeat)this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||i){if(this._propertiesAreSetUp=!0,!this._isDynamic){var l={};for(var u in this._valuesEnd)l[u]=this._valuesEnd[u];this._valuesEnd=l}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,i)}return this},r.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},r.prototype._setupProperties=function(t,i,s,l,u){for(var h in s){var d=t[h],m=Array.isArray(d),p=m?"array":typeof d,v=!m&&Array.isArray(s[h]);if(!(p==="undefined"||p==="function")){if(v){var _=s[h];if(_.length===0)continue;for(var S=[d],E=0,A=_.length;E<A;E+=1){var C=this._handleRelativeValue(d,_[E]);if(isNaN(C)){v=!1,console.warn("Found invalid interpolation list. Skipping.");break}S.push(C)}v&&(s[h]=S)}if((p==="object"||m)&&d&&!v){i[h]=m?[]:{};var y=d;for(var x in y)i[h][x]=y[x];l[h]=m?[]:{};var _=s[h];if(!this._isDynamic){var L={};for(var x in _)L[x]=_[x];s[h]=_=L}this._setupProperties(y,i[h],_,l[h],u)}else(typeof i[h]>"u"||u)&&(i[h]=d),m||(i[h]*=1),v?l[h]=s[h].slice().reverse():l[h]=i[h]||0}}},r.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},r.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},r.prototype.pause=function(t){return t===void 0&&(t=il()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},r.prototype.resume=function(t){return t===void 0&&(t=il()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},r.prototype.stopChainedTweens=function(){for(var t=0,i=this._chainedTweens.length;t<i;t++)this._chainedTweens[t].stop();return this},r.prototype.group=function(t){return t===void 0&&(t=Zd),this._group=t,this},r.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},r.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},r.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},r.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},r.prototype.easing=function(t){return t===void 0&&(t=Is.Linear.None),this._easingFunction=t,this},r.prototype.interpolation=function(t){return t===void 0&&(t=jd.Linear),this._interpolationFunction=t,this},r.prototype.chain=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return this._chainedTweens=t,this},r.prototype.onStart=function(t){return this._onStartCallback=t,this},r.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},r.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},r.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},r.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},r.prototype.onStop=function(t){return this._onStopCallback=t,this},r.prototype.update=function(t,i){var s=this,l;if(t===void 0&&(t=il()),i===void 0&&(i=!0),this._isPaused)return!0;var u,h=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>h)return!1;i&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var d=t-this._startTime,m=this._duration+((l=this._repeatDelayTime)!==null&&l!==void 0?l:this._delayTime),p=this._duration+this._repeat*m,v=function(){if(s._duration===0||d>p)return 1;var y=Math.trunc(d/m),x=d-y*m,L=Math.min(x/s._duration,1);return L===0&&d===s._duration?1:L},_=v(),S=this._easingFunction(_);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,S),this._onUpdateCallback&&this._onUpdateCallback(this._object,_),this._duration===0||d>=this._duration)if(this._repeat>0){var E=Math.min(Math.trunc((d-this._duration)/m)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=E);for(u in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[u]=="string"&&(this._valuesStartRepeat[u]=this._valuesStartRepeat[u]+parseFloat(this._valuesEnd[u])),this._yoyo&&this._swapEndStartRepeatValues(u),this._valuesStart[u]=this._valuesStartRepeat[u];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=m*E,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var A=0,C=this._chainedTweens.length;A<C;A++)this._chainedTweens[A].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},r.prototype._updateProperties=function(t,i,s,l){for(var u in s)if(i[u]!==void 0){var h=i[u]||0,d=s[u],m=Array.isArray(t[u]),p=Array.isArray(d),v=!m&&p;v?t[u]=this._interpolationFunction(d,l):typeof d=="object"&&d?this._updateProperties(t[u],h,d,l):(d=this._handleRelativeValue(h,d),typeof d=="number"&&(t[u]=h+(d-h)*l))}},r.prototype._handleRelativeValue=function(t,i){return typeof i!="string"?i:i.charAt(0)==="+"||i.charAt(0)==="-"?t+parseFloat(i):parseFloat(i)},r.prototype._swapEndStartRepeatValues=function(t){var i=this._valuesStartRepeat[t],s=this._valuesEnd[t];typeof s=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(s):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=i},r})();Bv.nextId;var Zi=Zd;Zi.getAll.bind(Zi);Zi.removeAll.bind(Zi);Zi.add.bind(Zi);Zi.remove.bind(Zi);var PA=Zi.update.bind(Zi);const zA=({entries:r,activeEntryId:t,currentTime:i,searchTerm:s="",onStarClick:l,onEmptySpaceClick:u,onSwipe:h,resetTrigger:d=0})=>{const m=ee.useRef(null),p=ee.useRef(null),v=ee.useRef(new uM),_=ee.useRef(null),S=ee.useRef(null),E=ee.useRef(null),A=ee.useRef(new Bi),C=ee.useRef(new Bi),y=ee.useRef(new Bi),x=ee.useRef(new Bi),L=ee.useRef(new Bi),P=ee.useRef(new MM),N=ee.useRef(new ie),I=ee.useRef(0),[B,z]=ee.useState(!1),[$,R]=ee.useState(!1),D=ee.useRef([]),k=ee.useRef(0),it=ee.useRef(0),at=ee.useRef(0),dt=ee.useRef(h);ee.useEffect(()=>{dt.current=h},[h]);const ot=ee.useRef({}),O=K=>{if(ot.current[K])return ot.current[K];const ft=document.createElement("canvas");ft.width=128,ft.height=128;const ht=ft.getContext("2d"),w=ht.createRadialGradient(64,64,0,64,64,64);w.addColorStop(0,"white"),w.addColorStop(.2,K),w.addColorStop(1,"rgba(0,0,0,0)"),ht.fillStyle=w,ht.fillRect(0,0,128,128);const Z=new _M(ft);return ot.current[K]=Z,Z};ee.useEffect(()=>{if(!m.current)return;const K=window.innerWidth,ft=window.innerHeight,ht=new gi(55,K/ft,1,15e3);ht.position.set(0,200,1800),_.current=ht;const w=new xA({antialias:!0,alpha:!0});w.setSize(K,ft),w.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.current.appendChild(w.domElement),S.current=w;const Z=new yA(ht,w.domElement);Z.enableDamping=!0,E.current=Z,v.current.add(A.current),A.current.add(C.current),C.current.add(y.current,x.current,L.current);const mt=bt=>{I.current=requestAnimationFrame(mt),PA(bt),Z.update(),it.current+=(at.current-it.current)*.1;const Lt=it.current<0?Math.max(.1,1+it.current*.8):1+it.current*2.5;C.current.scale.setScalar(Lt),A.current.rotation.y+=2e-4,w.render(v.current,ht)};return mt(0),()=>{cancelAnimationFrame(I.current),w.dispose()}},[]),ee.useEffect(()=>{if(!y.current)return;y.current.clear(),r.filter(ft=>{const ht=ft.timestamp<=i,w=!s||ft.text.toLowerCase().includes(s.toLowerCase());return ht&&w}).forEach(ft=>{const ht=new Bi;ht.name=ft.id,ht.position.set(ft.x,ft.y,ft.z);const w=t===ft.id,Z=new fM(new Cv({map:O(ft.moodColor),transparent:!0,opacity:w?1:.7,blending:Qh}));Z.scale.setScalar(w?140:50),ht.add(Z);const mt=new Yi(new fp(70,8,8),new cp({visible:!1}));ht.add(mt),y.current.add(ht)})},[r,i,t,s]),ee.useEffect(()=>{if(!p.current)return;let K=!0;const ft=window;if(!ft.Hands||!ft.Camera)return;const ht=new ft.Hands({locateFile:Z=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915/${Z}`});ht.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.6,minTrackingConfidence:.6}),ht.onResults(Z=>{if(!K)return;let mt=!1,bt=!1;Z.multiHandLandmarks&&Z.multiHandLandmarks.forEach((Lt,et)=>{const W=Z.multiHandedness[et].label,xt=Date.now();if(W==="Left"){bt=!0;const wt=Lt[8].x;if(D.current.push({x:wt,t:xt}),D.current.length>3&&xt>k.current){const Nt=D.current[D.current.length-1].x-D.current[0].x;Math.abs(Nt)>.12&&(dt.current(Nt<0?"right":"left"),k.current=xt+500,D.current=[])}}else{mt=!0;const wt=Math.sqrt(Math.pow(Lt[4].x-Lt[8].x,2)+Math.pow(Lt[4].y-Lt[8].y,2));at.current=(wt-.15)*8}}),z(mt),R(bt)});const w=new ft.Camera(p.current,{onFrame:async()=>{K&&p.current&&await ht.send({image:p.current})},width:640,height:480});return w.start(),()=>{K=!1,w.stop(),ht.close()}},[]),ee.useEffect(()=>{d>0&&_.current&&E.current&&(new tv(_.current.position).to({x:0,y:500,z:2500},1500).easing(Is.Quadratic.Out).start(),new tv(E.current.target).to({x:0,y:0,z:0},1500).easing(Is.Quadratic.Out).start())},[d]);const H=K=>{if(!S.current||!_.current)return;const ft=m.current.getBoundingClientRect();N.current.x=(K.clientX-ft.left)/ft.width*2-1,N.current.y=-((K.clientY-ft.top)/ft.height)*2+1,P.current.setFromCamera(N.current,_.current);const ht=P.current.intersectObjects(y.current.children,!0);if(ht.length>0){let w=ht[0].object;for(;w.parent&&w.parent!==y.current;)w=w.parent;l(w.name)}else{const w=new J(N.current.x,N.current.y,.5).unproject(_.current),Z=_.current.position.clone().add(w.sub(_.current.position).normalize().multiplyScalar(2e3));u(Z.x,Z.y,Z.z,K.clientX,K.clientY)}};return Ct.jsxs(Ct.Fragment,{children:[Ct.jsx("video",{ref:p,className:"hidden",autoPlay:!0,playsInline:!0,muted:!0}),Ct.jsx("div",{className:"fixed inset-0 pointer-events-none z-[999]",children:$&&Ct.jsx("div",{className:"absolute top-8 right-8 text-white/60 animate-pulse text-xs",children:"翻动模式"})}),Ct.jsx("div",{ref:m,className:"w-full h-full",onClick:H})]})},ev="my_galaxy_diary_v2",IA="0921",Kh=[{hex:"#FFD700",label:"快乐"},{hex:"#4B0082",label:"忧郁"},{hex:"#00FA9A",label:"平静"},{hex:"#FF4500",label:"热情"},{hex:"#9370DB",label:"迷茫"},{hex:"#F8F8FF",label:"观察"}],FA=()=>{const[r,t]=ee.useState(!1),[i,s]=ee.useState(""),[l,u]=ee.useState(!1),[h,d]=ee.useState(()=>{try{const W=localStorage.getItem(ev);return W?JSON.parse(W):[]}catch{return[]}}),[m,p]=ee.useState(null),[v,_]=ee.useState(!1),[S,E]=ee.useState(!1),[A,C]=ee.useState(null),[y,x]=ee.useState(""),[L,P]=ee.useState([]),[N,I]=ee.useState(Kh[0].hex),[B,z]=ee.useState(""),[$,R]=ee.useState(!1),[D,k]=ee.useState(0),it=ee.useRef(null),[at,dt]=ee.useState(!1),ot=ee.useMemo(()=>[...h].sort((W,xt)=>W.timestamp-xt.timestamp),[h]),O=ee.useMemo(()=>{if(ot.length===0)return{min:Date.now()-864e5,max:Date.now()};const W=ot[0].timestamp-36e5,xt=ot[ot.length-1].timestamp+1e3;return{min:W,max:xt}},[ot]),[H,K]=ee.useState(O.max);ee.useEffect(()=>{K(O.max)},[h.length,O.max]);const ft=W=>{i===IA?t(!0):(u(!0),setTimeout(()=>u(!1),500),s(""))},ht=ee.useCallback(W=>{if(!r)return;const xt=h.find(wt=>wt.id===W);xt&&(p(xt),_(!1))},[h,r]),w=ee.useCallback((W,xt,wt,Nt,ce)=>{!r||m||(C({wx:W,wy:xt,wz:wt,sx:Nt,sy:ce}),_(!0),x(""),P([]),I(Kh[0].hex))},[m,r]),Z=ee.useCallback(W=>{if(!r||ot.length===0)return;let xt=-1;if(!m)xt=W==="right"?0:ot.length-1;else{const wt=ot.findIndex(Nt=>Nt.id===m.id);W==="right"?xt=Math.min(ot.length-1,wt+1):xt=Math.max(0,wt-1)}if(xt!==-1){const wt=ot[xt];p(wt),K(wt.timestamp)}},[m,ot,r]),mt=W=>{const xt=W.target.files;xt&&Array.from(xt).forEach(wt=>{const Nt=new FileReader;Nt.onloadend=()=>{P(ce=>[...ce,Nt.result].slice(-3))},Nt.readAsDataURL(wt)})},bt=W=>{P(xt=>xt.filter((wt,Nt)=>Nt!==W))},Lt=async()=>{if(!y.trim()||!A)return;E(!0);const W={id:`mem-${Date.now()}`,x:A.wx,y:A.wy,z:A.wz,text:y,images:L,moodColor:N,timestamp:Date.now()};await new Promise(wt=>setTimeout(wt,800));const xt=[...h,W];localStorage.setItem(ev,JSON.stringify(xt)),d(xt),E(!1),_(!1)},et=W=>new Intl.DateTimeFormat("zh-CN",{month:"long",year:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(W));return Ct.jsxs("div",{className:"relative w-full h-screen overflow-hidden select-none bg-[#020205]",children:[Ct.jsx("div",{className:`absolute inset-0 z-0 transition-all duration-1000 ${m||v||!r?"opacity-30 blur-[20px] scale-105":"opacity-100 blur-0 scale-100"}`,children:Ct.jsx(zA,{entries:h,activeEntryId:(m==null?void 0:m.id)||null,currentTime:H,searchTerm:B,onStarClick:ht,onEmptySpaceClick:w,onSwipe:Z,resetTrigger:D})}),Ct.jsxs("div",{className:`absolute top-12 right-12 z-[100] flex items-center gap-6 transition-all duration-700 ${!r||m||v?"opacity-0 -translate-y-5 pointer-events-none":"opacity-100 pointer-events-auto"}`,children:[Ct.jsx("button",{onClick:W=>{W.stopPropagation(),k(xt=>xt+1)},className:"w-10 h-10 glass-card rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all pointer-events-auto",children:Ct.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Ct.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),Ct.jsxs("div",{className:`flex items-center glass-card rounded-full overflow-hidden transition-all duration-500 pointer-events-auto ${$?"w-64 px-4":"w-10 px-0"}`,children:[Ct.jsx("button",{onClick:W=>{W.stopPropagation(),R(!$)},className:"w-10 h-10 flex-shrink-0 flex items-center justify-center text-white/40 hover:text-white",children:Ct.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Ct.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),Ct.jsx("input",{type:"text",placeholder:"搜索记忆...",value:B,onKeyDown:W=>W.stopPropagation(),onChange:W=>z(W.target.value),className:"bg-transparent border-none outline-none text-[10px] text-white/80 tracking-widest uppercase w-full ml-2 placeholder:text-white/20"})]})]}),Ct.jsx("div",{className:`absolute bottom-12 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-12 transition-all duration-1000 ${!r||m||v?"opacity-0 translate-y-12 pointer-events-none":"opacity-100"}`,children:Ct.jsxs("div",{className:`glass-card p-8 rounded-[2.5rem] flex flex-col gap-3 relative overflow-hidden transition-all duration-500 ${at?"timeline-dragging scale-105":""}`,children:[at&&Ct.jsxs(Ct.Fragment,{children:[Ct.jsx("div",{className:"streak top-1/4 left-10",style:{animationDelay:"0s"}}),Ct.jsx("div",{className:"streak top-2/4 right-20",style:{animationDelay:"0.5s"}}),Ct.jsx("div",{className:"streak bottom-1/4 left-40",style:{animationDelay:"1s"}})]}),Ct.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[Ct.jsx("span",{className:"text-[9px] tracking-[0.5em] text-white/20 uppercase font-light",children:"Memory Chrono"}),Ct.jsx("div",{className:`text-center transition-all duration-300 ${at?"scale-125 text-indigo-300 drop-shadow-[0_0_10px_rgba(165,180,252,0.8)]":"text-white/60"}`,children:Ct.jsx("span",{className:"text-[10px] tracking-[0.3em] uppercase font-mono",children:et(H)})}),Ct.jsx("span",{className:"text-[9px] tracking-[0.5em] text-white/20 uppercase font-light",children:"Origin Axis"})]}),Ct.jsxs("div",{className:"relative flex items-center h-4",children:[Ct.jsx("div",{className:"absolute inset-0 rounded-full timeline-track opacity-50"}),Ct.jsx("input",{type:"range",min:O.min,max:O.max,value:H,onMouseDown:()=>dt(!0),onMouseUp:()=>dt(!1),onTouchStart:()=>dt(!0),onTouchEnd:()=>dt(!1),onChange:W=>K(Number(W.target.value)),className:"relative w-full h-1 bg-transparent appearance-none cursor-pointer z-10"})]}),Ct.jsxs("div",{className:"flex justify-between text-[7px] tracking-[0.2em] text-white/10 uppercase px-2 mt-1",children:[Ct.jsx("span",{children:et(O.min).split(" ")[0]}),Ct.jsx("span",{children:"Current Space-Time"}),Ct.jsx("span",{children:et(O.max).split(" ")[0]})]})]})}),m&&Ct.jsx("div",{className:"absolute inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-entrance",onClick:()=>p(null),children:Ct.jsxs("div",{className:"max-w-4xl w-full p-12 md:p-20 rounded-[3rem] glass-card relative pointer-events-auto",onClick:W=>W.stopPropagation(),children:[Ct.jsx("div",{className:"absolute top-0 left-0 w-full h-1",style:{background:m.moodColor}}),Ct.jsx("button",{onClick:()=>p(null),className:"absolute top-8 right-8 text-white/20 hover:text-white text-4xl font-thin transition-colors",children:"×"}),Ct.jsxs("div",{className:"text-center mb-10",children:[Ct.jsx("div",{className:"inline-block px-4 py-1 rounded-full border border-white/10 text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4",children:"Memory Resonated"}),Ct.jsx("h3",{className:"text-xs font-mono text-white/40 tracking-widest uppercase",children:et(m.timestamp)})]}),Ct.jsxs("div",{className:"max-h-[60vh] overflow-y-auto pr-4 scrollbar-hide text-center",children:[Ct.jsx("p",{className:"text-2xl md:text-3xl font-extralight text-white/90 leading-relaxed tracking-wide mb-8",children:m.text}),m.images&&m.images.length>0&&Ct.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:m.images.map((W,xt)=>Ct.jsx("img",{src:W,alt:"Memory",className:"w-full max-w-md rounded-2xl object-cover shadow-2xl border border-white/10"},xt))})]}),Ct.jsxs("div",{className:"mt-12 flex flex-col items-center",children:[Ct.jsx("div",{className:"w-12 h-[1px] bg-white/10 mb-8"}),Ct.jsx("button",{onClick:()=>p(null),className:"px-10 py-4 rounded-full border border-white/10 text-[10px] tracking-[0.5em] text-white/40 uppercase hover:bg-white/5 transition-all",children:"收回思绪"})]})]})}),v&&A&&Ct.jsx("div",{className:"absolute inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-entrance",onClick:()=>_(!1),children:Ct.jsxs("div",{className:"w-[520px] p-10 rounded-[3rem] glass-card pointer-events-auto border-white/5 shadow-2xl",onClick:W=>W.stopPropagation(),children:[Ct.jsxs("div",{className:"flex justify-between items-center mb-8",children:[Ct.jsx("h2",{className:"text-[10px] tracking-[0.5em] text-white/30 uppercase font-light",children:"正在将记忆刻入星系"}),Ct.jsx("button",{onClick:()=>_(!1),className:"text-white/20 hover:text-white/60 transition-colors",children:"×"})]}),Ct.jsx("div",{className:"flex gap-4 mb-10 justify-start",children:Kh.map(W=>Ct.jsx("button",{onClick:()=>I(W.hex),className:`w-10 h-10 rounded-full transition-all duration-300 relative ${N===W.hex?"scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]":"opacity-40 grayscale-[40%]"}`,style:{backgroundColor:W.hex},children:N===W.hex&&Ct.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-white animate-ping opacity-20"})},W.hex))}),Ct.jsxs("div",{className:"relative mb-6",children:[Ct.jsx("textarea",{autoFocus:!0,className:"w-full bg-transparent border-none outline-none text-white/90 text-xl font-light h-48 resize-none mb-2 placeholder:text-white/10 leading-relaxed",placeholder:"此时此刻的想法...",value:y,onChange:W=>x(W.target.value)}),Ct.jsxs("div",{className:"flex gap-3 mt-4 flex-wrap",children:[L.map((W,xt)=>Ct.jsxs("div",{className:"relative group w-20 h-20 rounded-xl overflow-hidden border border-white/10",children:[Ct.jsx("img",{src:W,className:"w-full h-full object-cover"}),Ct.jsx("button",{onClick:()=>bt(xt),className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs transition-opacity",children:"移除"})]},xt)),L.length<3&&Ct.jsxs("button",{onClick:()=>{var W;return(W=it.current)==null?void 0:W.click()},className:"w-20 h-20 rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-white/20 hover:text-white/40 hover:border-white/20 transition-all gap-1",children:[Ct.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Ct.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 4v16m8-8H4"})}),Ct.jsx("span",{className:"text-[8px] uppercase tracking-tighter",children:"添加图片"})]}),Ct.jsx("input",{ref:it,type:"file",accept:"image/*",multiple:!0,className:"hidden",onChange:mt})]})]}),Ct.jsx("div",{className:"flex justify-between items-center mb-8 px-1",children:Ct.jsx("button",{className:"px-4 py-1.5 rounded-lg bg-white/5 text-[9px] text-white/30 uppercase tracking-[0.2em] border border-white/5 hover:bg-white/10 transition-all",children:"Preview"})}),Ct.jsx("button",{onClick:Lt,disabled:S||!y.trim(),className:`w-full py-5 rounded-3xl transition-all duration-500 text-[10px] text-white tracking-[0.5em] uppercase border ${S||!y.trim()?"bg-transparent border-white/5 text-white/10 cursor-not-allowed":"bg-white/5 hover:bg-white/10 border-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"}`,children:S?"正在镌刻星纹...":"点亮这颗星"})]})}),!r&&Ct.jsx("div",{className:"absolute inset-0 z-[200] flex items-center justify-center bg-[#020205] p-6 animate-entrance",children:Ct.jsxs("div",{className:`glass-card p-12 rounded-[4rem] w-full max-w-sm flex flex-col items-center ${l?"shake":""}`,children:[Ct.jsx("h2",{className:"text-xl font-extralight tracking-[0.5em] text-white/80 mb-12 uppercase",children:"星系权限验证"}),Ct.jsx("input",{autoFocus:!0,type:"password",maxLength:4,placeholder:"密码",value:i,onChange:W=>s(W.target.value),onKeyDown:W=>W.key==="Enter"&&ft(),className:"w-full bg-white/5 border border-white/10 rounded-3xl py-6 text-center text-2xl text-white tracking-[1em] outline-none mb-8"}),Ct.jsx("button",{onClick:()=>ft(),className:"w-full py-4 rounded-full border border-white/10 text-[10px] text-white/40 tracking-[0.5em] uppercase hover:bg-white/5",children:"开启接入"})]})}),Ct.jsxs("div",{className:`absolute top-12 left-12 z-10 pointer-events-none transition-all duration-1000 ${!r||m||v?"opacity-20 blur-sm":"opacity-100"}`,children:[Ct.jsx("h1",{className:"text-5xl font-extralight tracking-[0.6em] text-white/90 drop-shadow-2xl",children:"星系日记"}),Ct.jsxs("p",{className:"text-[10px] tracking-[0.5em] text-indigo-400/60 mt-4 uppercase",children:["Galaxy Diary • ",h.length," 颗记忆星辰"]})]})]})},Hv=document.getElementById("root");if(!Hv)throw new Error("Could not find root element to mount to");const BA=ny.createRoot(Hv);BA.render(Ct.jsx(jS.StrictMode,{children:Ct.jsx(FA,{})}));
