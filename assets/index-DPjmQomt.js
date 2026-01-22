(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function dv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var xh={exports:{}},Yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function ny(){if(Q_)return Yo;Q_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Yo.Fragment=t,Yo.jsx=i,Yo.jsxs=i,Yo}var J_;function iy(){return J_||(J_=1,xh.exports=ny()),xh.exports}var Ct=iy(),Sh={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function ay(){if($_)return re;$_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(U,at,mt){this.props=U,this.context=at,this.refs=y,this.updater=mt||b}x.prototype.isReactComponent={},x.prototype.setState=function(U,at){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,at,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function P(){}P.prototype=x.prototype;function O(U,at,mt){this.props=U,this.context=at,this.refs=y,this.updater=mt||b}var z=O.prototype=new P;z.constructor=O,C(z,x.prototype),z.isPureReactComponent=!0;var I=Array.isArray;function B(){}var N={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function T(U,at,mt){var At=mt.ref;return{$$typeof:r,type:U,key:at,ref:At!==void 0?At:null,props:mt}}function w(U,at){return T(U.type,at,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function Q(U){var at={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(mt){return at[mt]})}var $=/\/+/g;function ft(U,at){return typeof U=="object"&&U!==null&&U.key!=null?Q(""+U.key):at.toString(36)}function ot(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(B,B):(U.status="pending",U.then(function(at){U.status==="pending"&&(U.status="fulfilled",U.value=at)},function(at){U.status==="pending"&&(U.status="rejected",U.reason=at)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function L(U,at,mt,At,Ht){var it=typeof U;(it==="undefined"||it==="boolean")&&(U=null);var Y=!1;if(U===null)Y=!0;else switch(it){case"bigint":case"string":case"number":Y=!0;break;case"object":switch(U.$$typeof){case r:case t:Y=!0;break;case g:return Y=U._init,L(Y(U._payload),at,mt,At,Ht)}}if(Y)return Ht=Ht(U),Y=At===""?"."+ft(U,0):At,I(Ht)?(mt="",Y!=null&&(mt=Y.replace($,"$&/")+"/"),L(Ht,at,mt,"",function(Ot){return Ot})):Ht!=null&&(G(Ht)&&(Ht=w(Ht,mt+(Ht.key==null||U&&U.key===Ht.key?"":(""+Ht.key).replace($,"$&/")+"/")+Y)),at.push(Ht)),1;Y=0;var vt=At===""?".":At+":";if(I(U))for(var Ut=0;Ut<U.length;Ut++)At=U[Ut],it=vt+ft(At,Ut),Y+=L(At,at,mt,it,Ht);else if(Ut=M(U),typeof Ut=="function")for(U=Ut.call(U),Ut=0;!(At=U.next()).done;)At=At.value,it=vt+ft(At,Ut++),Y+=L(At,at,mt,it,Ht);else if(it==="object"){if(typeof U.then=="function")return L(ot(U),at,mt,At,Ht);throw at=String(U),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return Y}function F(U,at,mt){if(U==null)return U;var At=[],Ht=0;return L(U,At,"","",function(it){return at.call(mt,it,Ht++)}),At}function nt(U){if(U._status===-1){var at=U._result;at=at(),at.then(function(mt){(U._status===0||U._status===-1)&&(U._status=1,U._result=mt)},function(mt){(U._status===0||U._status===-1)&&(U._status=2,U._result=mt)}),U._status===-1&&(U._status=0,U._result=at)}if(U._status===1)return U._result.default;throw U._result}var yt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},xt={map:F,forEach:function(U,at,mt){F(U,function(){at.apply(this,arguments)},mt)},count:function(U){var at=0;return F(U,function(){at++}),at},toArray:function(U){return F(U,function(at){return at})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return re.Activity=_,re.Children=xt,re.Component=x,re.Fragment=i,re.Profiler=l,re.PureComponent=O,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,re.__COMPILER_RUNTIME={__proto__:null,c:function(U){return N.H.useMemoCache(U)}},re.cache=function(U){return function(){return U.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(U,at,mt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var At=C({},U.props),Ht=U.key;if(at!=null)for(it in at.key!==void 0&&(Ht=""+at.key),at)!X.call(at,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&at.ref===void 0||(At[it]=at[it]);var it=arguments.length-2;if(it===1)At.children=mt;else if(1<it){for(var Y=Array(it),vt=0;vt<it;vt++)Y[vt]=arguments[vt+2];At.children=Y}return T(U.type,Ht,At)},re.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},re.createElement=function(U,at,mt){var At,Ht={},it=null;if(at!=null)for(At in at.key!==void 0&&(it=""+at.key),at)X.call(at,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Ht[At]=at[At]);var Y=arguments.length-2;if(Y===1)Ht.children=mt;else if(1<Y){for(var vt=Array(Y),Ut=0;Ut<Y;Ut++)vt[Ut]=arguments[Ut+2];Ht.children=vt}if(U&&U.defaultProps)for(At in Y=U.defaultProps,Y)Ht[At]===void 0&&(Ht[At]=Y[At]);return T(U,it,Ht)},re.createRef=function(){return{current:null}},re.forwardRef=function(U){return{$$typeof:d,render:U}},re.isValidElement=G,re.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:nt}},re.memo=function(U,at){return{$$typeof:p,type:U,compare:at===void 0?null:at}},re.startTransition=function(U){var at=N.T,mt={};N.T=mt;try{var At=U(),Ht=N.S;Ht!==null&&Ht(mt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(B,yt)}catch(it){yt(it)}finally{at!==null&&mt.types!==null&&(at.types=mt.types),N.T=at}},re.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},re.use=function(U){return N.H.use(U)},re.useActionState=function(U,at,mt){return N.H.useActionState(U,at,mt)},re.useCallback=function(U,at){return N.H.useCallback(U,at)},re.useContext=function(U){return N.H.useContext(U)},re.useDebugValue=function(){},re.useDeferredValue=function(U,at){return N.H.useDeferredValue(U,at)},re.useEffect=function(U,at){return N.H.useEffect(U,at)},re.useEffectEvent=function(U){return N.H.useEffectEvent(U)},re.useId=function(){return N.H.useId()},re.useImperativeHandle=function(U,at,mt){return N.H.useImperativeHandle(U,at,mt)},re.useInsertionEffect=function(U,at){return N.H.useInsertionEffect(U,at)},re.useLayoutEffect=function(U,at){return N.H.useLayoutEffect(U,at)},re.useMemo=function(U,at){return N.H.useMemo(U,at)},re.useOptimistic=function(U,at){return N.H.useOptimistic(U,at)},re.useReducer=function(U,at,mt){return N.H.useReducer(U,at,mt)},re.useRef=function(U){return N.H.useRef(U)},re.useState=function(U){return N.H.useState(U)},re.useSyncExternalStore=function(U,at,mt){return N.H.useSyncExternalStore(U,at,mt)},re.useTransition=function(){return N.H.useTransition()},re.version="19.2.3",re}var tg;function ip(){return tg||(tg=1,Sh.exports=ay()),Sh.exports}var ue=ip();const sy=dv(ue);var yh={exports:{}},qo={},Mh={exports:{}},Eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function ry(){return eg||(eg=1,(function(r){function t(L,F){var nt=L.length;L.push(F);t:for(;0<nt;){var yt=nt-1>>>1,xt=L[yt];if(0<l(xt,F))L[yt]=F,L[nt]=xt,nt=yt;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var F=L[0],nt=L.pop();if(nt!==F){L[0]=nt;t:for(var yt=0,xt=L.length,U=xt>>>1;yt<U;){var at=2*(yt+1)-1,mt=L[at],At=at+1,Ht=L[At];if(0>l(mt,nt))At<xt&&0>l(Ht,mt)?(L[yt]=Ht,L[At]=nt,yt=At):(L[yt]=mt,L[at]=nt,yt=at);else if(At<xt&&0>l(Ht,nt))L[yt]=Ht,L[At]=nt,yt=At;else break t}}return F}function l(L,F){var nt=L.sortIndex-F.sortIndex;return nt!==0?nt:L.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,S=3,M=!1,b=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function z(L){for(var F=i(p);F!==null;){if(F.callback===null)s(p);else if(F.startTime<=L)s(p),F.sortIndex=F.expirationTime,t(m,F);else break;F=i(p)}}function I(L){if(C=!1,z(L),!b)if(i(m)!==null)b=!0,B||(B=!0,Q());else{var F=i(p);F!==null&&ot(I,F.startTime-L)}}var B=!1,N=-1,X=5,T=-1;function w(){return y?!0:!(r.unstable_now()-T<X)}function G(){if(y=!1,B){var L=r.unstable_now();T=L;var F=!0;try{t:{b=!1,C&&(C=!1,P(N),N=-1),M=!0;var nt=S;try{e:{for(z(L),_=i(m);_!==null&&!(_.expirationTime>L&&w());){var yt=_.callback;if(typeof yt=="function"){_.callback=null,S=_.priorityLevel;var xt=yt(_.expirationTime<=L);if(L=r.unstable_now(),typeof xt=="function"){_.callback=xt,z(L),F=!0;break e}_===i(m)&&s(m),z(L)}else s(m);_=i(m)}if(_!==null)F=!0;else{var U=i(p);U!==null&&ot(I,U.startTime-L),F=!1}}break t}finally{_=null,S=nt,M=!1}F=void 0}}finally{F?Q():B=!1}}}var Q;if(typeof O=="function")Q=function(){O(G)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ft=$.port2;$.port1.onmessage=G,Q=function(){ft.postMessage(null)}}else Q=function(){x(G,0)};function ot(L,F){N=x(function(){L(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(L){switch(S){case 1:case 2:case 3:var F=3;break;default:F=S}var nt=S;S=F;try{return L()}finally{S=nt}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var nt=S;S=L;try{return F()}finally{S=nt}},r.unstable_scheduleCallback=function(L,F,nt){var yt=r.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?yt+nt:yt):nt=yt,L){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=nt+xt,L={id:g++,callback:F,priorityLevel:L,startTime:nt,expirationTime:xt,sortIndex:-1},nt>yt?(L.sortIndex=nt,t(p,L),i(m)===null&&L===i(p)&&(C?(P(N),N=-1):C=!0,ot(I,nt-yt))):(L.sortIndex=xt,t(m,L),b||M||(b=!0,B||(B=!0,Q()))),L},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(L){var F=S;return function(){var nt=S;S=F;try{return L.apply(this,arguments)}finally{S=nt}}}})(Eh)),Eh}var ng;function oy(){return ng||(ng=1,Mh.exports=ry()),Mh.exports}var bh={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function ly(){if(ig)return Ln;ig=1;var r=ip();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Ln.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ln.version="19.2.3",Ln}var ag;function uy(){if(ag)return bh.exports;ag=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),bh.exports=ly(),bh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function cy(){if(sg)return qo;sg=1;var r=oy(),t=ip(),i=uy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===o)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=f;else{for(var v=!1,A=c.child;A;){if(A===a){v=!0,a=c,o=f;break}if(A===o){v=!0,o=c,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,o=c;break}if(A===o){v=!0,o=f,a=c;break}A=A.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),O=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case I:return"Suspense";case B:return"SuspenseList";case T:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case O:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var ot=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt={pending:!1,data:null,method:null,action:null},yt=[],xt=-1;function U(e){return{current:e}}function at(e){0>xt||(e.current=yt[xt],yt[xt]=null,xt--)}function mt(e,n){xt++,yt[xt]=e.current,e.current=n}var At=U(null),Ht=U(null),it=U(null),Y=U(null);function vt(e,n){switch(mt(it,n),mt(Ht,e),mt(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?S_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=S_(n),e=y_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(At),mt(At,e)}function Ut(){at(At),at(Ht),at(it)}function Ot(e){e.memoizedState!==null&&mt(Y,e);var n=At.current,a=y_(n,e.type);n!==a&&(mt(Ht,e),mt(At,a))}function ce(e){Ht.current===e&&(at(At),at(Ht)),Y.current===e&&(at(Y),Vo._currentValue=nt)}var tn,xe;function _e(e){if(tn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);tn=n&&n[1]||"",xe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tn+e+xe}var we=!1;function oe(e,n){if(!e||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ut){var rt=ut}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ut){rt=ut}e.call(_t.prototype)}}else{try{throw Error()}catch(ut){rt=ut}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ut){if(ut&&rt&&typeof ut.stack=="string")return[ut.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],A=f[1];if(v&&A){var H=v.split(`
`),et=A.split(`
`);for(c=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;c<et.length&&!et[c].includes("DetermineComponentFrameRoot");)c++;if(o===H.length||c===et.length)for(o=H.length-1,c=et.length-1;1<=o&&0<=c&&H[o]!==et[c];)c--;for(;1<=o&&0<=c;o--,c--)if(H[o]!==et[c]){if(o!==1||c!==1)do if(o--,c--,0>c||H[o]!==et[c]){var ht=`
`+H[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=c);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_e(a):""}function en(e,n){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e("Lazy");case 13:return e.child!==n&&n!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return oe(e.type,!1);case 11:return oe(e.type.render,!1);case 1:return oe(e.type,!0);case 31:return _e("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=en(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ke=Object.prototype.hasOwnProperty,Ee=r.unstable_scheduleCallback,Le=r.unstable_cancelCallback,qt=r.unstable_shouldYield,D=r.unstable_requestPaint,E=r.unstable_now,q=r.unstable_getCurrentPriorityLevel,dt=r.unstable_ImmediatePriority,St=r.unstable_UserBlockingPriority,ct=r.unstable_NormalPriority,Zt=r.unstable_LowPriority,wt=r.unstable_IdlePriority,Xt=r.log,ee=r.unstable_setDisableYieldValue,Et=null,bt=null;function Bt(e){if(typeof Xt=="function"&&ee(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Et,e)}catch{}}var It=Math.clz32?Math.clz32:W,Dt=Math.log,fe=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Dt(e)/fe|0)|0}var Lt=256,Tt=262144,Ft=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?c=Mt(o):(v&=A,v!==0?c=Mt(v):a||(a=A&~e,a!==0&&(c=Mt(a))))):(A=o&~f,A!==0?c=Mt(A):v!==0?c=Mt(v):a||(a=o&~e,a!==0&&(c=Mt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Rt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ei(e,n,a,o,c,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,et=e.hiddenUpdates;for(a=v&~a;0<a;){var ht=31-It(a),_t=1<<ht;A[ht]=0,H[ht]=-1;var rt=et[ht];if(rt!==null)for(et[ht]=null,ht=0;ht<rt.length;ht++){var ut=rt[ht];ut!==null&&(ut.lane&=-536870913)}a&=~_t}o!==0&&ml(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function ml(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function $r(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Gs(e,n){var a=n&-n;return a=(a&42)!==0?1:to(a),(a&(e.suspendedLanes|n))!==0?0:a}function to(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function eo(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:X_(e.type))}function Oi(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var oi=Math.random().toString(36).slice(2),ln="__reactFiber$"+oi,yn="__reactProps$"+oi,bi="__reactContainer$"+oi,ks="__reactEvents$"+oi,Xs="__reactListeners$"+oi,_l="__reactHandles$"+oi,no="__reactResources$"+oi,ls="__reactMarker$"+oi;function io(e){delete e[ln],delete e[yn],delete e[ks],delete e[Xs],delete e[_l]}function Aa(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[bi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=C_(e);e!==null;){if(a=e[ln])return a;e=C_(e)}return n}e=a,a=e.parentNode}return null}function Ra(e){if(e=e[ln]||e[bi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function us(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ca(e){var n=e[no];return n||(n=e[no]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(e){e[ls]=!0}var j=new Set,lt={};function st(e,n){K(e,n),K(e+"Capture",n)}function K(e,n){for(lt[e]=n,e=0;e<n.length;e++)j.add(n[e])}var Nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gt={},Pt={};function Vt(e){return Ke.call(Pt,e)?!0:Ke.call(Gt,e)?!1:Nt.test(e)?Pt[e]=!0:(Gt[e]=!0,!1)}function Wt(e,n,a){if(Vt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Jt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Yt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qe(e){if(!e._valueTracker){var n=De(e)?"checked":"value";e._valueTracker=Qe(e,n,""+e[n])}}function Oe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=De(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ue=/[\n"\\]/g;function se(e){return e.replace(Ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mn(e,n,a,o,c,f,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$t(n)):e.value!==""+$t(n)&&(e.value=""+$t(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?En(e,v,$t(n)):a!=null?En(e,v,$t(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+$t(A):e.removeAttribute("name")}function Zi(e,n,a,o,c,f,v,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qe(e);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),qe(e)}function En(e,n,a){n==="number"&&Kt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function li(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Ie(e,n,a){if(n!=null&&(n=""+$t(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$t(a):""}function bn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ot(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$t(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),qe(e)}function pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function An(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Tn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ws(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&An(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&An(e,f,n[f])}function Ti(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$v=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(e){return $v.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ki(){}var mc=null;function _c(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,qs=null;function xp(e){var n=Ra(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Mn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[yn]||null;if(!c)throw Error(s(90));Mn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Oe(o)}break t;case"textarea":Ie(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&li(e,!!a.multiple,n,!1)}}}var gc=!1;function Sp(e,n,a){if(gc)return e(n,a);gc=!0;try{var o=e(n);return o}finally{if(gc=!1,(Ys!==null||qs!==null)&&(au(),Ys&&(n=Ys,e=qs,qs=Ys=null,xp(n),e)))for(n=0;n<e.length;n++)xp(e[n])}}function ao(e,n){var a=e.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vc=!1;if(Qi)try{var so={};Object.defineProperty(so,"passive",{get:function(){vc=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{vc=!1}var wa=null,xc=null,vl=null;function yp(){if(vl)return vl;var e,n=xc,a=n.length,o,c="value"in wa?wa.value:wa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===c[f-o];o++);return vl=c.slice(e,1<o?1-o:void 0)}function xl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Sl(){return!0}function Mp(){return!1}function Vn(e){function n(a,o,c,f,v){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Sl:Mp,this.isPropagationStopped=Mp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),n}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Vn(cs),ro=_({},cs,{view:0,detail:0}),tx=Vn(ro),Sc,yc,oo,Ml=_({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(Sc=e.screenX-oo.screenX,yc=e.screenY-oo.screenY):yc=Sc=0,oo=e),Sc)},movementY:function(e){return"movementY"in e?e.movementY:yc}}),Ep=Vn(Ml),ex=_({},Ml,{dataTransfer:0}),nx=Vn(ex),ix=_({},ro,{relatedTarget:0}),Mc=Vn(ix),ax=_({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),sx=Vn(ax),rx=_({},cs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ox=Vn(rx),lx=_({},cs,{data:0}),bp=Vn(lx),ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=fx[e])?!!n[e]:!1}function Ec(){return hx}var dx=_({},ro,{key:function(e){if(e.key){var n=ux[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(e){return e.type==="keypress"?xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),px=Vn(dx),mx=_({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=Vn(mx),_x=_({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),gx=Vn(_x),vx=_({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),xx=Vn(vx),Sx=_({},Ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yx=Vn(Sx),Mx=_({},cs,{newState:0,oldState:0}),Ex=Vn(Mx),bx=[9,13,27,32],bc=Qi&&"CompositionEvent"in window,lo=null;Qi&&"documentMode"in document&&(lo=document.documentMode);var Tx=Qi&&"TextEvent"in window&&!lo,Ap=Qi&&(!bc||lo&&8<lo&&11>=lo),Rp=" ",Cp=!1;function wp(e,n){switch(e){case"keyup":return bx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var js=!1;function Ax(e,n){switch(e){case"compositionend":return Dp(n);case"keypress":return n.which!==32?null:(Cp=!0,Rp);case"textInput":return e=n.data,e===Rp&&Cp?null:e;default:return null}}function Rx(e,n){if(js)return e==="compositionend"||!bc&&wp(e,n)?(e=yp(),vl=xc=wa=null,js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ap&&n.locale!=="ko"?null:n.data;default:return null}}var Cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Up(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Cx[e.type]:n==="textarea"}function Np(e,n,a,o){Ys?qs?qs.push(o):qs=[o]:Ys=o,n=fu(n,"onChange"),0<n.length&&(a=new yl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var uo=null,co=null;function wx(e){p_(e,0)}function El(e){var n=us(e);if(Oe(n))return e}function Lp(e,n){if(e==="change")return n}var Op=!1;if(Qi){var Tc;if(Qi){var Ac="oninput"in document;if(!Ac){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),Ac=typeof Pp.oninput=="function"}Tc=Ac}else Tc=!1;Op=Tc&&(!document.documentMode||9<document.documentMode)}function zp(){uo&&(uo.detachEvent("onpropertychange",Ip),co=uo=null)}function Ip(e){if(e.propertyName==="value"&&El(co)){var n=[];Np(n,co,e,_c(e)),Sp(wx,n)}}function Dx(e,n,a){e==="focusin"?(zp(),uo=n,co=a,uo.attachEvent("onpropertychange",Ip)):e==="focusout"&&zp()}function Ux(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(co)}function Nx(e,n){if(e==="click")return El(n)}function Lx(e,n){if(e==="input"||e==="change")return El(n)}function Ox(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qn=typeof Object.is=="function"?Object.is:Ox;function fo(e,n){if(Qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ke.call(n,c)||!Qn(e[c],n[c]))return!1}return!0}function Fp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bp(e,n){var a=Fp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Fp(a)}}function Hp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Kt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Kt(e.document)}return n}function Rc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Px=Qi&&"documentMode"in document&&11>=document.documentMode,Zs=null,Cc=null,ho=null,wc=!1;function Vp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wc||Zs==null||Zs!==Kt(o)||(o=Zs,"selectionStart"in o&&Rc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ho&&fo(ho,o)||(ho=o,o=fu(Cc,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Zs)))}function fs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ks={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},Dc={},kp={};Qi&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function hs(e){if(Dc[e])return Dc[e];if(!Ks[e])return e;var n=Ks[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in kp)return Dc[e]=n[a];return e}var Xp=hs("animationend"),Wp=hs("animationiteration"),Yp=hs("animationstart"),zx=hs("transitionrun"),Ix=hs("transitionstart"),Fx=hs("transitioncancel"),qp=hs("transitionend"),jp=new Map,Uc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uc.push("scrollEnd");function Ai(e,n){jp.set(e,n),st(n,[e])}var bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],Qs=0,Nc=0;function Tl(){for(var e=Qs,n=Nc=Qs=0;n<e;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var c=ui[n];ui[n++]=null;var f=ui[n];if(ui[n++]=null,o!==null&&c!==null){var v=o.pending;v===null?c.next=c:(c.next=v.next,v.next=c),o.pending=c}f!==0&&Zp(a,c,f)}}function Al(e,n,a,o){ui[Qs++]=e,ui[Qs++]=n,ui[Qs++]=a,ui[Qs++]=o,Nc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Lc(e,n,a,o){return Al(e,n,a,o),Rl(e)}function ds(e,n){return Al(e,null,null,n),Rl(e)}function Zp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-It(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function Rl(e){if(50<Po)throw Po=0,kf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Js={};function Bx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,a,o){return new Bx(e,n,a,o)}function Oc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ji(e,n){var a=e.alternate;return a===null?(a=Jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Kp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Cl(e,n,a,o,c,f){var v=0;if(o=e,typeof e=="function")Oc(e)&&(v=1);else if(typeof e=="string")v=XS(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case T:return e=Jn(31,a,n,c),e.elementType=T,e.lanes=f,e;case C:return ps(a.children,c,f,n);case y:v=8,c|=24;break;case x:return e=Jn(12,a,n,c|2),e.elementType=x,e.lanes=f,e;case I:return e=Jn(13,a,n,c),e.elementType=I,e.lanes=f,e;case B:return e=Jn(19,a,n,c),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:v=10;break t;case P:v=9;break t;case z:v=11;break t;case N:v=14;break t;case X:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Jn(v,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function ps(e,n,a,o){return e=Jn(7,e,o,n),e.lanes=a,e}function Pc(e,n,a){return e=Jn(6,e,null,n),e.lanes=a,e}function Qp(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function zc(e,n,a){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Jp=new WeakMap;function ci(e,n){if(typeof e=="object"&&e!==null){var a=Jp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},Jp.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var $s=[],tr=0,wl=null,po=0,fi=[],hi=0,Da=null,Pi=1,zi="";function $i(e,n){$s[tr++]=po,$s[tr++]=wl,wl=e,po=n}function $p(e,n,a){fi[hi++]=Pi,fi[hi++]=zi,fi[hi++]=Da,Da=e;var o=Pi;e=zi;var c=32-It(o)-1;o&=~(1<<c),a+=1;var f=32-It(n)+c;if(30<f){var v=c-c%5;f=(o&(1<<v)-1).toString(32),o>>=v,c-=v,Pi=1<<32-It(n)+c|a<<c|o,zi=f+e}else Pi=1<<f|a<<c|o,zi=e}function Ic(e){e.return!==null&&($i(e,1),$p(e,1,0))}function Fc(e){for(;e===wl;)wl=$s[--tr],$s[tr]=null,po=$s[--tr],$s[tr]=null;for(;e===Da;)Da=fi[--hi],fi[hi]=null,zi=fi[--hi],fi[hi]=null,Pi=fi[--hi],fi[hi]=null}function tm(e,n){fi[hi++]=Pi,fi[hi++]=zi,fi[hi++]=Da,Pi=n.id,zi=n.overflow,Da=e}var Rn=null,je=null,Me=!1,Ua=null,di=!1,Bc=Error(s(519));function Na(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(ci(n,e)),Bc}function em(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[yn]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)ve(Io[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Zi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),bn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||v_(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||Na(e,!0)}function nm(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Rn=Rn.return}}function er(e){if(e!==Rn)return!1;if(!Me)return nm(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ah(e.type,e.memoizedProps)),a=!a),a&&je&&Na(e),nm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=R_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=R_(e)}else n===27?(n=je,Ya(e.type)?(e=uh,uh=null,je=e):je=n):je=Rn?mi(e.stateNode.nextSibling):null;return!0}function ms(){je=Rn=null,Me=!1}function Hc(){var e=Ua;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Ua=null),e}function mo(e){Ua===null?Ua=[e]:Ua.push(e)}var Gc=U(null),_s=null,ta=null;function La(e,n,a){mt(Gc,n._currentValue),n._currentValue=a}function ea(e){e._currentValue=Gc.current,at(Gc)}function Vc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function kc(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Vc(f.return,a,e),o||(v=null);break t}f=A.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Vc(v,a,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function nr(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var A=c.type;Qn(c.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(c===Y.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Vo):e=[Vo])}c=c.return}e!==null&&kc(n,e,a,o),n.flags|=262144}function Dl(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gs(e){_s=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return im(_s,e)}function Ul(e,n){return _s===null&&gs(e),im(e,n)}function im(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ta===null){if(e===null)throw Error(s(308));ta=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ta=ta.next=n;return a}var Hx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Gx=r.unstable_scheduleCallback,Vx=r.unstable_NormalPriority,un={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xc(){return{controller:new Hx,data:new Map,refCount:0}}function _o(e){e.refCount--,e.refCount===0&&Gx(Vx,function(){e.controller.abort()})}var go=null,Wc=0,ir=0,ar=null;function kx(e,n){if(go===null){var a=go=[];Wc=0,ir=Zf(),ar={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Wc++,n.then(am,am),n}function am(){if(--Wc===0&&go!==null){ar!==null&&(ar.status="fulfilled");var e=go;go=null,ir=0,ar=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Xx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var sm=L.S;L.S=function(e,n){V0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&kx(e,n),sm!==null&&sm(e,n)};var vs=U(null);function Yc(){var e=vs.current;return e!==null?e:Ye.pooledCache}function Nl(e,n){n===null?mt(vs,vs.current):mt(vs,n.pool)}function rm(){var e=Yc();return e===null?null:{parent:un._currentValue,pool:e}}var sr=Error(s(460)),qc=Error(s(474)),Ll=Error(s(542)),Ol={then:function(){}};function om(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,cm(e),e;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,cm(e),e}throw Ss=n,sr}}function xs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ss=a,sr):a}}var Ss=null;function um(){if(Ss===null)throw Error(s(459));var e=Ss;return Ss=null,e}function cm(e){if(e===sr||e===Ll)throw Error(s(483))}var rr=null,vo=0;function Pl(e){var n=vo;return vo+=1,rr===null&&(rr=[]),lm(rr,e,n)}function xo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function zl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function fm(e){function n(Z,k){if(e){var tt=Z.deletions;tt===null?(Z.deletions=[k],Z.flags|=16):tt.push(k)}}function a(Z,k){if(!e)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function o(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function c(Z,k){return Z=Ji(Z,k),Z.index=0,Z.sibling=null,Z}function f(Z,k,tt){return Z.index=tt,e?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<k?(Z.flags|=67108866,k):tt):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function v(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,k,tt,pt){return k===null||k.tag!==6?(k=Pc(tt,Z.mode,pt),k.return=Z,k):(k=c(k,tt),k.return=Z,k)}function H(Z,k,tt,pt){var Qt=tt.type;return Qt===C?ht(Z,k,tt.props.children,pt,tt.key):k!==null&&(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===X&&xs(Qt)===k.type)?(k=c(k,tt.props),xo(k,tt),k.return=Z,k):(k=Cl(tt.type,tt.key,tt.props,null,Z.mode,pt),xo(k,tt),k.return=Z,k)}function et(Z,k,tt,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=zc(tt,Z.mode,pt),k.return=Z,k):(k=c(k,tt.children||[]),k.return=Z,k)}function ht(Z,k,tt,pt,Qt){return k===null||k.tag!==7?(k=ps(tt,Z.mode,pt,Qt),k.return=Z,k):(k=c(k,tt),k.return=Z,k)}function _t(Z,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Pc(""+k,Z.mode,tt),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return tt=Cl(k.type,k.key,k.props,null,Z.mode,tt),xo(tt,k),tt.return=Z,tt;case b:return k=zc(k,Z.mode,tt),k.return=Z,k;case X:return k=xs(k),_t(Z,k,tt)}if(ot(k)||Q(k))return k=ps(k,Z.mode,tt,null),k.return=Z,k;if(typeof k.then=="function")return _t(Z,Pl(k),tt);if(k.$$typeof===O)return _t(Z,Ul(Z,k),tt);zl(Z,k)}return null}function rt(Z,k,tt,pt){var Qt=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Qt!==null?null:A(Z,k,""+tt,pt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:return tt.key===Qt?H(Z,k,tt,pt):null;case b:return tt.key===Qt?et(Z,k,tt,pt):null;case X:return tt=xs(tt),rt(Z,k,tt,pt)}if(ot(tt)||Q(tt))return Qt!==null?null:ht(Z,k,tt,pt,null);if(typeof tt.then=="function")return rt(Z,k,Pl(tt),pt);if(tt.$$typeof===O)return rt(Z,k,Ul(Z,tt),pt);zl(Z,tt)}return null}function ut(Z,k,tt,pt,Qt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Z=Z.get(tt)||null,A(k,Z,""+pt,Qt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return Z=Z.get(pt.key===null?tt:pt.key)||null,H(k,Z,pt,Qt);case b:return Z=Z.get(pt.key===null?tt:pt.key)||null,et(k,Z,pt,Qt);case X:return pt=xs(pt),ut(Z,k,tt,pt,Qt)}if(ot(pt)||Q(pt))return Z=Z.get(tt)||null,ht(k,Z,pt,Qt,null);if(typeof pt.then=="function")return ut(Z,k,tt,Pl(pt),Qt);if(pt.$$typeof===O)return ut(Z,k,tt,Ul(k,pt),Qt);zl(k,pt)}return null}function kt(Z,k,tt,pt){for(var Qt=null,Re=null,jt=k,he=k=0,ye=null;jt!==null&&he<tt.length;he++){jt.index>he?(ye=jt,jt=null):ye=jt.sibling;var Ce=rt(Z,jt,tt[he],pt);if(Ce===null){jt===null&&(jt=ye);break}e&&jt&&Ce.alternate===null&&n(Z,jt),k=f(Ce,k,he),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce,jt=ye}if(he===tt.length)return a(Z,jt),Me&&$i(Z,he),Qt;if(jt===null){for(;he<tt.length;he++)jt=_t(Z,tt[he],pt),jt!==null&&(k=f(jt,k,he),Re===null?Qt=jt:Re.sibling=jt,Re=jt);return Me&&$i(Z,he),Qt}for(jt=o(jt);he<tt.length;he++)ye=ut(jt,Z,he,tt[he],pt),ye!==null&&(e&&ye.alternate!==null&&jt.delete(ye.key===null?he:ye.key),k=f(ye,k,he),Re===null?Qt=ye:Re.sibling=ye,Re=ye);return e&&jt.forEach(function(Qa){return n(Z,Qa)}),Me&&$i(Z,he),Qt}function te(Z,k,tt,pt){if(tt==null)throw Error(s(151));for(var Qt=null,Re=null,jt=k,he=k=0,ye=null,Ce=tt.next();jt!==null&&!Ce.done;he++,Ce=tt.next()){jt.index>he?(ye=jt,jt=null):ye=jt.sibling;var Qa=rt(Z,jt,Ce.value,pt);if(Qa===null){jt===null&&(jt=ye);break}e&&jt&&Qa.alternate===null&&n(Z,jt),k=f(Qa,k,he),Re===null?Qt=Qa:Re.sibling=Qa,Re=Qa,jt=ye}if(Ce.done)return a(Z,jt),Me&&$i(Z,he),Qt;if(jt===null){for(;!Ce.done;he++,Ce=tt.next())Ce=_t(Z,Ce.value,pt),Ce!==null&&(k=f(Ce,k,he),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce);return Me&&$i(Z,he),Qt}for(jt=o(jt);!Ce.done;he++,Ce=tt.next())Ce=ut(jt,Z,he,Ce.value,pt),Ce!==null&&(e&&Ce.alternate!==null&&jt.delete(Ce.key===null?he:Ce.key),k=f(Ce,k,he),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce);return e&&jt.forEach(function(ey){return n(Z,ey)}),Me&&$i(Z,he),Qt}function Xe(Z,k,tt,pt){if(typeof tt=="object"&&tt!==null&&tt.type===C&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:t:{for(var Qt=tt.key;k!==null;){if(k.key===Qt){if(Qt=tt.type,Qt===C){if(k.tag===7){a(Z,k.sibling),pt=c(k,tt.props.children),pt.return=Z,Z=pt;break t}}else if(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===X&&xs(Qt)===k.type){a(Z,k.sibling),pt=c(k,tt.props),xo(pt,tt),pt.return=Z,Z=pt;break t}a(Z,k);break}else n(Z,k);k=k.sibling}tt.type===C?(pt=ps(tt.props.children,Z.mode,pt,tt.key),pt.return=Z,Z=pt):(pt=Cl(tt.type,tt.key,tt.props,null,Z.mode,pt),xo(pt,tt),pt.return=Z,Z=pt)}return v(Z);case b:t:{for(Qt=tt.key;k!==null;){if(k.key===Qt)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){a(Z,k.sibling),pt=c(k,tt.children||[]),pt.return=Z,Z=pt;break t}else{a(Z,k);break}else n(Z,k);k=k.sibling}pt=zc(tt,Z.mode,pt),pt.return=Z,Z=pt}return v(Z);case X:return tt=xs(tt),Xe(Z,k,tt,pt)}if(ot(tt))return kt(Z,k,tt,pt);if(Q(tt)){if(Qt=Q(tt),typeof Qt!="function")throw Error(s(150));return tt=Qt.call(tt),te(Z,k,tt,pt)}if(typeof tt.then=="function")return Xe(Z,k,Pl(tt),pt);if(tt.$$typeof===O)return Xe(Z,k,Ul(Z,tt),pt);zl(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(a(Z,k.sibling),pt=c(k,tt),pt.return=Z,Z=pt):(a(Z,k),pt=Pc(tt,Z.mode,pt),pt.return=Z,Z=pt),v(Z)):a(Z,k)}return function(Z,k,tt,pt){try{vo=0;var Qt=Xe(Z,k,tt,pt);return rr=null,Qt}catch(jt){if(jt===sr||jt===Ll)throw jt;var Re=Jn(29,jt,null,Z.mode);return Re.lanes=pt,Re.return=Z,Re}finally{}}}var ys=fm(!0),hm=fm(!1),Oa=!1;function jc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Rl(e),Zp(e,null,a),n}return Al(e,o,n,a),Rl(e)}function So(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,$r(e,a)}}function Kc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Qc=!1;function yo(){if(Qc){var e=ar;if(e!==null)throw e}}function Mo(e,n,a,o){Qc=!1;var c=e.updateQueue;Oa=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var H=A,et=H.next;H.next=null,v===null?f=et:v.next=et,v=H;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==v&&(A===null?ht.firstBaseUpdate=et:A.next=et,ht.lastBaseUpdate=H))}if(f!==null){var _t=c.baseState;v=0,ht=et=H=null,A=f;do{var rt=A.lane&-536870913,ut=rt!==A.lane;if(ut?(Se&rt)===rt:(o&rt)===rt){rt!==0&&rt===ir&&(Qc=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var kt=e,te=A;rt=n;var Xe=a;switch(te.tag){case 1:if(kt=te.payload,typeof kt=="function"){_t=kt.call(Xe,_t,rt);break t}_t=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=te.payload,rt=typeof kt=="function"?kt.call(Xe,_t,rt):kt,rt==null)break t;_t=_({},_t,rt);break t;case 2:Oa=!0}}rt=A.callback,rt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[rt]:ut.push(rt))}else ut={lane:rt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?(et=ht=ut,H=_t):ht=ht.next=ut,v|=rt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);ht===null&&(H=_t),c.baseState=H,c.firstBaseUpdate=et,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),Ga|=v,e.lanes=v,e.memoizedState=_t}}function dm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function pm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)dm(a[e],n)}var or=U(null),Il=U(0);function mm(e,n){e=ca,mt(Il,e),mt(or,n),ca=e|n.baseLanes}function Jc(){mt(Il,ca),mt(or,or.current)}function $c(){ca=Il.current,at(or),at(Il)}var $n=U(null),pi=null;function Ia(e){var n=e.alternate;mt(sn,sn.current&1),mt($n,e),pi===null&&(n===null||or.current!==null||n.memoizedState!==null)&&(pi=e)}function tf(e){mt(sn,sn.current),mt($n,e),pi===null&&(pi=e)}function _m(e){e.tag===22?(mt(sn,sn.current),mt($n,e),pi===null&&(pi=e)):Fa()}function Fa(){mt(sn,sn.current),mt($n,$n.current)}function ti(e){at($n),pi===e&&(pi=null),at(sn)}var sn=U(0);function Fl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||oh(a)||lh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var na=0,le=null,Ve=null,cn=null,Bl=!1,lr=!1,Ms=!1,Hl=0,Eo=0,ur=null,Wx=0;function nn(){throw Error(s(321))}function ef(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Qn(e[a],n[a]))return!1;return!0}function nf(e,n,a,o,c,f){return na=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?$m:vf,Ms=!1,f=a(o,c),Ms=!1,lr&&(f=vm(n,a,o,c)),gm(e),f}function gm(e){L.H=Ao;var n=Ve!==null&&Ve.next!==null;if(na=0,cn=Ve=le=null,Bl=!1,Eo=0,ur=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&Dl(e)&&(fn=!0))}function vm(e,n,a,o){le=e;var c=0;do{if(lr&&(ur=null),Eo=0,lr=!1,25<=c)throw Error(s(301));if(c+=1,cn=Ve=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=t0,f=n(a,o)}while(lr);return f}function Yx(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?bo(n):n,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(le.flags|=1024),n}function af(){var e=Hl!==0;return Hl=0,e}function sf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function rf(e){if(Bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Bl=!1}na=0,cn=Ve=le=null,lr=!1,Eo=Hl=0,ur=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?le.memoizedState=cn=e:cn=cn.next=e,cn}function rn(){if(Ve===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var n=cn===null?le.memoizedState:cn.next;if(n!==null)cn=n,Ve=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},cn===null?le.memoizedState=cn=e:cn=cn.next=e}return cn}function Gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bo(e){var n=Eo;return Eo+=1,ur===null&&(ur=[]),e=lm(ur,e,n),n=le,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?$m:vf),e}function Vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bo(e);if(e.$$typeof===O)return Cn(e)}throw Error(s(438,String(e)))}function of(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Gl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function ia(e,n){return typeof n=="function"?n(e):n}function kl(e){var n=rn();return lf(n,Ve,e)}function lf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var A=v=null,H=null,et=n,ht=!1;do{var _t=et.lane&-536870913;if(_t!==et.lane?(Se&_t)===_t:(na&_t)===_t){var rt=et.revertLane;if(rt===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),_t===ir&&(ht=!0);else if((na&rt)===rt){et=et.next,rt===ir&&(ht=!0);continue}else _t={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(A=H=_t,v=f):H=H.next=_t,le.lanes|=rt,Ga|=rt;_t=et.action,Ms&&a(f,_t),f=et.hasEagerState?et.eagerState:a(f,_t)}else rt={lane:_t,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(A=H=rt,v=f):H=H.next=rt,le.lanes|=_t,Ga|=_t;et=et.next}while(et!==null&&et!==n);if(H===null?v=f:H.next=A,!Qn(f,e.memoizedState)&&(fn=!0,ht&&(a=ar,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=H,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function uf(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=e(f,v.action),v=v.next;while(v!==c);Qn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function xm(e,n,a){var o=le,c=rn(),f=Me;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Qn((Ve||c).memoizedState,a);if(v&&(c.memoizedState=a,fn=!0),c=c.queue,hf(Mm.bind(null,o,c,e),[e]),c.getSnapshot!==n||v||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,cr(9,{destroy:void 0},ym.bind(null,o,c,a,n),null),Ye===null)throw Error(s(349));f||(na&127)!==0||Sm(o,n,a)}return a}function Sm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Gl(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function ym(e,n,a,o){n.value=a,n.getSnapshot=o,Em(n)&&bm(e)}function Mm(e,n,a){return a(function(){Em(n)&&bm(e)})}function Em(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Qn(e,a)}catch{return!0}}function bm(e){var n=ds(e,2);n!==null&&qn(n,e,2)}function cf(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),Ms){Bt(!0);try{a()}finally{Bt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},n}function Tm(e,n,a,o){return e.baseState=a,lf(e,Ve,typeof o=="function"?o:ia)}function qx(e,n,a,o,c){if(Yl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};L.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Am(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Am(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=L.T,v={};L.T=v;try{var A=a(c,o),H=L.S;H!==null&&H(v,A),Rm(e,n,A)}catch(et){ff(e,n,et)}finally{f!==null&&v.types!==null&&(f.types=v.types),L.T=f}}else try{f=a(c,o),Rm(e,n,f)}catch(et){ff(e,n,et)}}function Rm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Cm(e,n,o)},function(o){return ff(e,n,o)}):Cm(e,n,a)}function Cm(e,n,a){n.status="fulfilled",n.value=a,wm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Am(e,a)))}function ff(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,wm(n),n=n.next;while(n!==o)}e.action=null}function wm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Dm(e,n){return n}function Um(e,n){if(Me){var a=Ye.formState;if(a!==null){t:{var o=le;if(Me){if(je){e:{for(var c=je,f=di;c.nodeType!==8;){if(!f){c=null;break e}if(c=mi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=mi(c.nextSibling),o=c.data==="F!";break t}}Na(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dm,lastRenderedState:n},a.queue=o,a=Km.bind(null,le,o),o.dispatch=a,o=cf(!1),f=gf.bind(null,le,!1,o.queue),o=Fn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=qx.bind(null,le,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Nm(e){var n=rn();return Lm(n,Ve,e)}function Lm(e,n,a){if(n=lf(e,n,Dm)[0],e=kl(ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=bo(n)}catch(v){throw v===sr?Ll:v}else o=n;n=rn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,cr(9,{destroy:void 0},jx.bind(null,c,a),null)),[o,f,e]}function jx(e,n){e.action=n}function Om(e){var n=rn(),a=Ve;if(a!==null)return Lm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function cr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=Gl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Pm(){return rn().memoizedState}function Xl(e,n,a,o){var c=Fn();le.flags|=e,c.memoizedState=cr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Wl(e,n,a,o){var c=rn();o=o===void 0?null:o;var f=c.memoizedState.inst;Ve!==null&&o!==null&&ef(o,Ve.memoizedState.deps)?c.memoizedState=cr(n,f,a,o):(le.flags|=e,c.memoizedState=cr(1|n,f,a,o))}function zm(e,n){Xl(8390656,8,e,n)}function hf(e,n){Wl(2048,8,e,n)}function Zx(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=Gl(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Im(e){var n=rn().memoizedState;return Zx({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Fm(e,n){return Wl(4,2,e,n)}function Bm(e,n){return Wl(4,4,e,n)}function Hm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Gm(e,n,a){a=a!=null?a.concat([e]):null,Wl(4,4,Hm.bind(null,n,e),a)}function df(){}function Vm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ef(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function km(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ef(n,o[1]))return o[0];if(o=e(),Ms){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[o,n],o}function pf(e,n,a){return a===void 0||(na&1073741824)!==0&&(Se&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=X0(),le.lanes|=e,Ga|=e,a)}function Xm(e,n,a,o){return Qn(a,n)?a:or.current!==null?(e=pf(e,a,o),Qn(e,n)||(fn=!0),e):(na&42)===0||(na&1073741824)!==0&&(Se&261930)===0?(fn=!0,e.memoizedState=a):(e=X0(),le.lanes|=e,Ga|=e,n)}function Wm(e,n,a,o,c){var f=F.p;F.p=f!==0&&8>f?f:8;var v=L.T,A={};L.T=A,gf(e,!1,n,a);try{var H=c(),et=L.S;if(et!==null&&et(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ht=Xx(H,o);To(e,n,ht,ii(e))}else To(e,n,o,ii(e))}catch(_t){To(e,n,{then:function(){},status:"rejected",reason:_t},ii())}finally{F.p=f,v!==null&&A.types!==null&&(v.types=A.types),L.T=v}}function Kx(){}function mf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var c=Ym(e).queue;Wm(e,c,n,nt,a===null?Kx:function(){return qm(e),a(o)})}function Ym(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:nt,baseState:nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:nt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function qm(e){var n=Ym(e);n.next===null&&(n=e.alternate.memoizedState),To(e,n.next.queue,{},ii())}function _f(){return Cn(Vo)}function jm(){return rn().memoizedState}function Zm(){return rn().memoizedState}function Qx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();e=Pa(a);var o=za(n,e,a);o!==null&&(qn(o,n,a),So(o,n,a)),n={cache:Xc()},e.payload=n;return}n=n.return}}function Jx(e,n,a){var o=ii();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Yl(e)?Qm(n,a):(a=Lc(e,n,a,o),a!==null&&(qn(a,e,o),Jm(a,n,o)))}function Km(e,n,a){var o=ii();To(e,n,a,o)}function To(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yl(e))Qm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,A=f(v,a);if(c.hasEagerState=!0,c.eagerState=A,Qn(A,v))return Al(e,n,c,0),Ye===null&&Tl(),!1}catch{}finally{}if(a=Lc(e,n,c,o),a!==null)return qn(a,e,o),Jm(a,n,o),!0}return!1}function gf(e,n,a,o){if(o={lane:2,revertLane:Zf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Yl(e)){if(n)throw Error(s(479))}else n=Lc(e,a,o,2),n!==null&&qn(n,e,2)}function Yl(e){var n=e.alternate;return e===le||n!==null&&n===le}function Qm(e,n){lr=Bl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Jm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,$r(e,a)}}var Ao={readContext:Cn,use:Vl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};Ao.useEffectEvent=nn;var $m={readContext:Cn,use:Vl,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:zm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Xl(4194308,4,Hm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Xl(4194308,4,e,n)},useInsertionEffect:function(e,n){Xl(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var o=e();if(Ms){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Fn();if(a!==void 0){var c=a(n);if(Ms){Bt(!0);try{a(n)}finally{Bt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Jx.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=cf(e);var n=e.queue,a=Km.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:df,useDeferredValue:function(e,n){var a=Fn();return pf(a,e,n)},useTransition:function(){var e=cf(!1);return e=Wm.bind(null,le,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=le,c=Fn();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Se&127)!==0||Sm(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,zm(Mm.bind(null,o,f,e),[e]),o.flags|=2048,cr(9,{destroy:void 0},ym.bind(null,o,f,a,n),null),a},useId:function(){var e=Fn(),n=Ye.identifierPrefix;if(Me){var a=zi,o=Pi;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Wx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:_f,useFormState:Um,useActionState:Um,useOptimistic:function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gf.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:of,useCacheRefresh:function(){return Fn().memoizedState=Qx.bind(null,le)},useEffectEvent:function(e){var n=Fn(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},vf={readContext:Cn,use:Vl,useCallback:Vm,useContext:Cn,useEffect:hf,useImperativeHandle:Gm,useInsertionEffect:Fm,useLayoutEffect:Bm,useMemo:km,useReducer:kl,useRef:Pm,useState:function(){return kl(ia)},useDebugValue:df,useDeferredValue:function(e,n){var a=rn();return Xm(a,Ve.memoizedState,e,n)},useTransition:function(){var e=kl(ia)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:bo(e),n]},useSyncExternalStore:xm,useId:jm,useHostTransitionStatus:_f,useFormState:Nm,useActionState:Nm,useOptimistic:function(e,n){var a=rn();return Tm(a,Ve,e,n)},useMemoCache:of,useCacheRefresh:Zm};vf.useEffectEvent=Im;var t0={readContext:Cn,use:Vl,useCallback:Vm,useContext:Cn,useEffect:hf,useImperativeHandle:Gm,useInsertionEffect:Fm,useLayoutEffect:Bm,useMemo:km,useReducer:uf,useRef:Pm,useState:function(){return uf(ia)},useDebugValue:df,useDeferredValue:function(e,n){var a=rn();return Ve===null?pf(a,e,n):Xm(a,Ve.memoizedState,e,n)},useTransition:function(){var e=uf(ia)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:bo(e),n]},useSyncExternalStore:xm,useId:jm,useHostTransitionStatus:_f,useFormState:Om,useActionState:Om,useOptimistic:function(e,n){var a=rn();return Ve!==null?Tm(a,Ve,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:of,useCacheRefresh:Zm};t0.useEffectEvent=Im;function xf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Sf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ii(),c=Pa(o);c.payload=n,a!=null&&(c.callback=a),n=za(e,c,o),n!==null&&(qn(n,e,o),So(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ii(),c=Pa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=za(e,c,o),n!==null&&(qn(n,e,o),So(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ii(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=za(e,o,a),n!==null&&(qn(n,e,a),So(n,e,a))}};function e0(e,n,a,o,c,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!fo(a,o)||!fo(c,f):!0}function n0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Sf.enqueueReplaceState(n,n.state,null)}function Es(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function i0(e){bl(e)}function a0(e){console.error(e)}function s0(e){bl(e)}function ql(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function r0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function yf(e,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){ql(e,n)},a}function o0(e){return e=Pa(e),e.tag=3,e}function l0(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){r0(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){r0(n,a,o),typeof c!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function $x(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&nr(n,a,c,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?su():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Yf(e,o,c)),!1;case 22:return a.flags|=65536,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Yf(e,o,c)),!1}throw Error(s(435,a.tag))}return Yf(e,o,c),su(),!1}if(Me)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Bc&&(e=Error(s(422),{cause:o}),mo(ci(e,a)))):(o!==Bc&&(n=Error(s(423),{cause:o}),mo(ci(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ci(o,a),c=yf(e.stateNode,o,c),Kc(e,c),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:o});if(f=ci(f,a),Oo===null?Oo=[f]:Oo.push(f),an!==4&&(an=2),n===null)return!0;o=ci(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=yf(a.stateNode,o,e),Kc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=o0(c),l0(c,e,a,o),Kc(a,c),!1}a=a.return}while(a!==null);return!1}var Mf=Error(s(461)),fn=!1;function wn(e,n,a,o){n.child=e===null?hm(n,null,a,o):ys(n,e.child,a,o)}function u0(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var A in o)A!=="ref"&&(v[A]=o[A])}else v=o;return gs(n),o=nf(e,n,a,v,f,c),A=af(),e!==null&&!fn?(sf(e,n,c),aa(e,n,c)):(Me&&A&&Ic(n),n.flags|=1,wn(e,n,o,c),n.child)}function c0(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!Oc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,f0(e,n,f,o,c)):(e=Cl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Df(e,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:fo,a(v,o)&&e.ref===n.ref)return aa(e,n,c)}return n.flags|=1,e=Ji(f,o),e.ref=n.ref,e.return=n,n.child=e}function f0(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(fo(f,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=f,Df(e,c))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,aa(e,n,c)}return Ef(e,n,a,o,c)}function h0(e,n,a,o){var c=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return d0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Nl(n,f!==null?f.cachePool:null),f!==null?mm(n,f):Jc(),_m(n);else return o=n.lanes=536870912,d0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Nl(n,f.cachePool),mm(n,f),Fa(),n.memoizedState=null):(e!==null&&Nl(n,null),Jc(),Fa());return wn(e,n,c,a),n.child}function Ro(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function d0(e,n,a,o,c){var f=Yc();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Nl(n,null),Jc(),_m(n),e!==null&&nr(e,n,o,!0),n.childLanes=c,null}function jl(e,n){return n=Kl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function p0(e,n,a){return ys(n,e.child,null,a),e=jl(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function tS(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(o.mode==="hidden")return e=jl(n,o),n.lanes=536870912,Ro(null,e);if(tf(n),(e=je)?(e=A_(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Qp(e),a.return=n,n.child=a,Rn=n,je=null)):e=null,e===null)throw Na(n);return n.lanes=536870912,null}return jl(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(tf(n),c)if(n.flags&256)n.flags&=-257,n=p0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||nr(e,n,a,!1),c=(a&e.childLanes)!==0,fn||c){if(o=Ye,o!==null&&(v=Gs(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,ds(e,v),qn(o,e,v),Mf;su(),n=p0(e,n,a)}else e=f.treeContext,je=mi(v.nextSibling),Rn=n,Me=!0,Ua=null,di=!1,e!==null&&tm(n,e),n=jl(n,o),n.flags|=4096;return n}return e=Ji(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Zl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ef(e,n,a,o,c){return gs(n),a=nf(e,n,a,o,void 0,c),o=af(),e!==null&&!fn?(sf(e,n,c),aa(e,n,c)):(Me&&o&&Ic(n),n.flags|=1,wn(e,n,a,c),n.child)}function m0(e,n,a,o,c,f){return gs(n),n.updateQueue=null,a=vm(n,o,a,c),gm(e),o=af(),e!==null&&!fn?(sf(e,n,f),aa(e,n,f)):(Me&&o&&Ic(n),n.flags|=1,wn(e,n,a,f),n.child)}function _0(e,n,a,o,c){if(gs(n),n.stateNode===null){var f=Js,v=a.contextType;typeof v=="object"&&v!==null&&(f=Cn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Sf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},jc(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Cn(v):Js,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(xf(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Sf.enqueueReplaceState(f,f.state,null),Mo(n,o,f,c),yo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,H=Es(a,A);f.props=H;var et=f.context,ht=a.contextType;v=Js,typeof ht=="object"&&ht!==null&&(v=Cn(ht));var _t=a.getDerivedStateFromProps;ht=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||et!==v)&&n0(n,f,o,v),Oa=!1;var rt=n.memoizedState;f.state=rt,Mo(n,o,f,c),yo(),et=n.memoizedState,A||rt!==et||Oa?(typeof _t=="function"&&(xf(n,a,_t,o),et=n.memoizedState),(H=Oa||e0(n,a,H,o,rt,et,v))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),f.props=o,f.state=et,f.context=v,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Zc(e,n),v=n.memoizedProps,ht=Es(a,v),f.props=ht,_t=n.pendingProps,rt=f.context,et=a.contextType,H=Js,typeof et=="object"&&et!==null&&(H=Cn(et)),A=a.getDerivedStateFromProps,(et=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==_t||rt!==H)&&n0(n,f,o,H),Oa=!1,rt=n.memoizedState,f.state=rt,Mo(n,o,f,c),yo();var ut=n.memoizedState;v!==_t||rt!==ut||Oa||e!==null&&e.dependencies!==null&&Dl(e.dependencies)?(typeof A=="function"&&(xf(n,a,A,o),ut=n.memoizedState),(ht=Oa||e0(n,a,ht,o,rt,ut,H)||e!==null&&e.dependencies!==null&&Dl(e.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ut,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ut,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=H,o=ht):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Zl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=ys(n,e.child,null,c),n.child=ys(n,null,a,c)):wn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=aa(e,n,c),e}function g0(e,n,a,o){return ms(),n.flags|=256,wn(e,n,a,o),n.child}var bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tf(e){return{baseLanes:e,cachePool:rm()}}function Af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ni),e}function v0(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(c?Ia(n):Fa(),(e=je)?(e=A_(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Qp(e),a.return=n,n.child=a,Rn=n,je=null)):e=null,e===null)throw Na(n);return lh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,c?(Fa(),c=n.mode,A=Kl({mode:"hidden",children:A},c),o=ps(o,c,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Tf(a),o.childLanes=Af(e,v,a),n.memoizedState=bf,Ro(null,o)):(Ia(n),Rf(n,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=Cf(e,n,a)):n.memoizedState!==null?(Fa(),n.child=e.child,n.flags|=128,n=null):(Fa(),A=o.fallback,c=n.mode,o=Kl({mode:"visible",children:o.children},c),A=ps(A,c,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,ys(n,e.child,null,a),o=n.child,o.memoizedState=Tf(a),o.childLanes=Af(e,v,a),n.memoizedState=bf,n=Ro(null,o));else if(Ia(n),lh(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var et=v.dgst;v=et,o=Error(s(419)),o.stack="",o.digest=v,mo({value:o,source:null,stack:null}),n=Cf(e,n,a)}else if(fn||nr(e,n,a,!1),v=(a&e.childLanes)!==0,fn||v){if(v=Ye,v!==null&&(o=Gs(v,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,ds(e,o),qn(v,e,o),Mf;oh(A)||su(),n=Cf(e,n,a)}else oh(A)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,je=mi(A.nextSibling),Rn=n,Me=!0,Ua=null,di=!1,e!==null&&tm(n,e),n=Rf(n,o.children),n.flags|=4096);return n}return c?(Fa(),A=o.fallback,c=n.mode,H=e.child,et=H.sibling,o=Ji(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,et!==null?A=Ji(et,A):(A=ps(A,c,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Ro(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Tf(a):(c=A.cachePool,c!==null?(H=un._currentValue,c=c.parent!==H?{parent:H,pool:H}:c):c=rm(),A={baseLanes:A.baseLanes|a,cachePool:c}),o.memoizedState=A,o.childLanes=Af(e,v,a),n.memoizedState=bf,Ro(e.child,o)):(Ia(n),a=e.child,e=a.sibling,a=Ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Rf(e,n){return n=Kl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Kl(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function Cf(e,n,a){return ys(n,e.child,null,a),e=Rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function x0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Vc(e.return,n,a)}function wf(e,n,a,o,c,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function S0(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var v=sn.current,A=(v&2)!==0;if(A?(v=v&1|2,n.flags|=128):v&=1,mt(sn,v),wn(e,n,o,a),o=Me?po:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&x0(e,a,n);else if(e.tag===19)x0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Fl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),wf(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Fl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}wf(n,!0,a,null,f,o);break;case"together":wf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function aa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(nr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ji(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ji(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Df(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Dl(e)))}function eS(e,n,a){switch(n.tag){case 3:vt(n,n.stateNode.containerInfo),La(n,un,e.memoizedState.cache),ms();break;case 27:case 5:Ot(n);break;case 4:vt(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,tf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?v0(e,n,a):(Ia(n),e=aa(e,n,a),e!==null?e.sibling:null);Ia(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(nr(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return S0(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),mt(sn,sn.current),o)break;return null;case 22:return n.lanes=0,h0(e,n,a,n.pendingProps);case 24:La(n,un,e.memoizedState.cache)}return aa(e,n,a)}function y0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Df(e,a)&&(n.flags&128)===0)return fn=!1,eS(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Me&&(n.flags&1048576)!==0&&$p(n,po,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=xs(n.elementType),n.type=e,typeof e=="function")Oc(e)?(o=Es(e,o),n.tag=1,n=_0(null,n,e,o,a)):(n.tag=0,n=Ef(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===z){n.tag=11,n=u0(null,n,e,o,a);break t}else if(c===N){n.tag=14,n=c0(null,n,e,o,a);break t}}throw n=ft(e)||e,Error(s(306,n,""))}}return n;case 0:return Ef(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Es(o,n.pendingProps),_0(e,n,o,c,a);case 3:t:{if(vt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Zc(e,n),Mo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,La(n,un,o),o!==f.cache&&kc(n,[un],a,!0),yo(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=g0(e,n,o,a);break t}else if(o!==c){c=ci(Error(s(424)),n),mo(c),n=g0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=mi(e.firstChild),Rn=n,Me=!0,Ua=null,di=!0,a=hm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ms(),o===c){n=aa(e,n,a);break t}wn(e,n,o,a)}n=n.child}return n;case 26:return Zl(e,n),e===null?(a=N_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,o=hu(it.current).createElement(a),o[ln]=n,o[yn]=e,Dn(o,a,e),R(o),n.stateNode=o):n.memoizedState=N_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ot(n),e===null&&Me&&(o=n.stateNode=w_(n.type,n.pendingProps,it.current),Rn=n,di=!0,c=je,Ya(n.type)?(uh=c,je=mi(o.firstChild)):je=c),wn(e,n,n.pendingProps.children,a),Zl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((c=o=je)&&(o=US(o,n.type,n.pendingProps,di),o!==null?(n.stateNode=o,Rn=n,je=mi(o.firstChild),di=!1,c=!0):c=!1),c||Na(n)),Ot(n),c=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,ah(c,f)?o=null:v!==null&&ah(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=nf(e,n,Yx,null,null,a),Vo._currentValue=c),Zl(e,n),wn(e,n,o,a),n.child;case 6:return e===null&&Me&&((e=a=je)&&(a=NS(a,n.pendingProps,di),a!==null?(n.stateNode=a,Rn=n,je=null,e=!0):e=!1),e||Na(n)),null;case 13:return v0(e,n,a);case 4:return vt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ys(n,null,o,a):wn(e,n,o,a),n.child;case 11:return u0(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),wn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,gs(n),c=Cn(c),o=o(c),n.flags|=1,wn(e,n,o,a),n.child;case 14:return c0(e,n,n.type,n.pendingProps,a);case 15:return f0(e,n,n.type,n.pendingProps,a);case 19:return S0(e,n,a);case 31:return tS(e,n,a);case 22:return h0(e,n,a,n.pendingProps);case 24:return gs(n),o=Cn(un),e===null?(c=Yc(),c===null&&(c=Ye,f=Xc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},jc(n),La(n,un,c)):((e.lanes&a)!==0&&(Zc(e,n),Mo(n,null,null,a),yo()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),La(n,un,o)):(o=f.cache,La(n,un,o),o!==c.cache&&kc(n,[un],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function sa(e){e.flags|=4}function Uf(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(j0())e.flags|=8192;else throw Ss=Ol,qc}else e.flags&=-16777217}function M0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!I_(n))if(j0())e.flags|=8192;else throw Ss=Ol,qc}function Ql(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ze():536870912,e.lanes|=n,pr|=n)}function Co(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function nS(e,n,a){var o=n.pendingProps;switch(Fc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ea(un),Ut(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(er(n)?sa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hc())),Ze(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(sa(n),f!==null?(Ze(n),M0(n,f)):(Ze(n),Uf(n,c,null,o,a))):f?f!==e.memoizedState?(sa(n),Ze(n),M0(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&sa(n),Ze(n),Uf(n,c,e,o,a)),null;case 27:if(ce(n),a=it.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=At.current,er(n)?em(n):(e=w_(c,o,a),n.stateNode=e,sa(n))}return Ze(n),null;case 5:if(ce(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=At.current,er(n))em(n);else{var v=hu(it.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(c,{is:o.is}):v.createElement(c)}}f[ln]=n,f[yn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Dn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&sa(n)}}return Ze(n),Uf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&sa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,er(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Rn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||v_(e.nodeValue,a)),e||Na(n,!0)}else e=hu(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=er(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=Hc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=er(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[ln]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=Hc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ql(n,n.updateQueue),Ze(n),null);case 4:return Ut(),e===null&&$f(n.stateNode.containerInfo),Ze(n),null;case 10:return ea(n.type),Ze(n),null;case 19:if(at(sn),o=n.memoizedState,o===null)return Ze(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)Co(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Fl(e),f!==null){for(n.flags|=128,Co(o,!1),e=f.updateQueue,n.updateQueue=e,Ql(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Kp(a,e),a=a.sibling;return mt(sn,sn.current&1|2),Me&&$i(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>nu&&(n.flags|=128,c=!0,Co(o,!1),n.lanes=4194304)}else{if(!c)if(e=Fl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Ql(n,e),Co(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Me)return Ze(n),null}else 2*E()-o.renderingStartTime>nu&&a!==536870912&&(n.flags|=128,c=!0,Co(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=sn.current,mt(sn,c?a&1|2:a&1),Me&&$i(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return ti(n),$c(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Ql(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&at(vs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(un),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function iS(e,n){switch(Fc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ea(un),Ut(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));ms()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ms()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return at(sn),null;case 4:return Ut(),null;case 10:return ea(n.type),null;case 22:case 23:return ti(n),$c(),e!==null&&at(vs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ea(un),null;case 25:return null;default:return null}}function E0(e,n){switch(Fc(n),n.tag){case 3:ea(un),Ut();break;case 26:case 27:case 5:ce(n);break;case 4:Ut();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:at(sn);break;case 10:ea(n.type);break;case 22:case 23:ti(n),$c(),e!==null&&at(vs);break;case 24:ea(un)}}function wo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==c)}}catch(A){Be(n,n.return,A)}}function Ba(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var v=o.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,c=n;var H=a,et=A;try{et()}catch(ht){Be(c,H,ht)}}}o=o.next}while(o!==f)}}catch(ht){Be(n,n.return,ht)}}function b0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{pm(n,a)}catch(o){Be(e,e.return,o)}}}function T0(e,n,a){a.props=Es(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function Do(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Be(e,n,c)}}function Ii(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Be(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(e,n,c)}else a.current=null}function A0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Be(e,e.return,c)}}function Nf(e,n,a){try{var o=e.stateNode;TS(o,e.type,a,n),o[yn]=n}catch(c){Be(e,e.return,c)}}function R0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function Lf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||R0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Of(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki));else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Of(e,n,a),e=e.sibling;e!==null;)Of(e,n,a),e=e.sibling}function Jl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Jl(e,n,a),e=e.sibling;e!==null;)Jl(e,n,a),e=e.sibling}function C0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Dn(n,o,a),n[ln]=e,n[yn]=a}catch(f){Be(e,e.return,f)}}var ra=!1,hn=!1,Pf=!1,w0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function aS(e,n){if(e=e.containerInfo,nh=xu,e=Gp(e),Rc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,A=-1,H=-1,et=0,ht=0,_t=e,rt=null;e:for(;;){for(var ut;_t!==a||c!==0&&_t.nodeType!==3||(A=v+c),_t!==f||o!==0&&_t.nodeType!==3||(H=v+o),_t.nodeType===3&&(v+=_t.nodeValue.length),(ut=_t.firstChild)!==null;)rt=_t,_t=ut;for(;;){if(_t===e)break e;if(rt===a&&++et===c&&(A=v),rt===f&&++ht===o&&(H=v),(ut=_t.nextSibling)!==null)break;_t=rt,rt=_t.parentNode}_t=ut}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(ih={focusedElem:e,selectionRange:a},xu=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var kt=Es(a.type,c);e=o.getSnapshotBeforeUpdate(kt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Be(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)rh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function D0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:la(e,a),o&4&&wo(5,a);break;case 1:if(la(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Be(a,a.return,v)}else{var c=Es(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Be(a,a.return,v)}}o&64&&b0(a),o&512&&Do(a,a.return);break;case 3:if(la(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{pm(e,n)}catch(v){Be(a,a.return,v)}}break;case 27:n===null&&o&4&&C0(a);case 26:case 5:la(e,a),n===null&&o&4&&A0(a),o&512&&Do(a,a.return);break;case 12:la(e,a);break;case 31:la(e,a),o&4&&L0(e,a);break;case 13:la(e,a),o&4&&O0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=dS.bind(null,a),LS(e,a))));break;case 22:if(o=a.memoizedState!==null||ra,!o){n=n!==null&&n.memoizedState!==null||hn,c=ra;var f=hn;ra=o,(hn=n)&&!f?ua(e,a,(a.subtreeFlags&8772)!==0):la(e,a),ra=c,hn=f}break;case 30:break;default:la(e,a)}}function U0(e){var n=e.alternate;n!==null&&(e.alternate=null,U0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&io(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,kn=!1;function oa(e,n,a){for(a=a.child;a!==null;)N0(e,n,a),a=a.sibling}function N0(e,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:hn||Ii(a,n),oa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Ii(a,n);var o=Je,c=kn;Ya(a.type)&&(Je=a.stateNode,kn=!1),oa(e,n,a),Bo(a.stateNode),Je=o,kn=c;break;case 5:hn||Ii(a,n);case 6:if(o=Je,c=kn,Je=null,oa(e,n,a),Je=o,kn=c,Je!==null)if(kn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Je!==null&&(kn?(e=Je,b_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Mr(e)):b_(Je,a.stateNode));break;case 4:o=Je,c=kn,Je=a.stateNode.containerInfo,kn=!0,oa(e,n,a),Je=o,kn=c;break;case 0:case 11:case 14:case 15:Ba(2,a,n),hn||Ba(4,a,n),oa(e,n,a);break;case 1:hn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&T0(a,n,o)),oa(e,n,a);break;case 21:oa(e,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,oa(e,n,a),hn=o;break;default:oa(e,n,a)}}function L0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mr(e)}catch(a){Be(n,n.return,a)}}}function O0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mr(e)}catch(a){Be(n,n.return,a)}}function sS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new w0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new w0),n;default:throw Error(s(435,e.tag))}}function $l(e,n){var a=sS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=pS.bind(null,e,o);o.then(c,c)}})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,v=n,A=v;t:for(;A!==null;){switch(A.tag){case 27:if(Ya(A.type)){Je=A.stateNode,kn=!1;break t}break;case 5:Je=A.stateNode,kn=!1;break t;case 3:case 4:Je=A.stateNode.containerInfo,kn=!0;break t}A=A.return}if(Je===null)throw Error(s(160));N0(f,v,c),Je=null,kn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)P0(n,e),n=n.sibling}var Ri=null;function P0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),Wn(e),o&4&&(Ba(3,e,e.return),wo(3,e),Ba(5,e,e.return));break;case 1:Xn(n,e),Wn(e),o&512&&(hn||a===null||Ii(a,a.return)),o&64&&ra&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Ri;if(Xn(n,e),Wn(e),o&512&&(hn||a===null||Ii(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ls]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Dn(f,o,a),f[ln]=e,R(f),o=f;break t;case"link":var v=P_("link","href",c).get(o+(a.href||""));if(v){for(var A=0;A<v.length;A++)if(f=v[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(A,1);break e}}f=c.createElement(o),Dn(f,o,a),c.head.appendChild(f);break;case"meta":if(v=P_("meta","content",c).get(o+(a.content||""))){for(A=0;A<v.length;A++)if(f=v[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(A,1);break e}}f=c.createElement(o),Dn(f,o,a),c.head.appendChild(f);break;default:throw Error(s(468,o))}f[ln]=e,R(f),o=f}e.stateNode=o}else z_(c,e.type,e.stateNode);else e.stateNode=O_(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?z_(c,e.type,e.stateNode):O_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Nf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),Wn(e),o&512&&(hn||a===null||Ii(a,a.return)),a!==null&&o&4&&Nf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),Wn(e),o&512&&(hn||a===null||Ii(a,a.return)),e.flags&32){c=e.stateNode;try{pn(c,"")}catch(kt){Be(e,e.return,kt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Nf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Pf=!0);break;case 6:if(Xn(n,e),Wn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(kt){Be(e,e.return,kt)}}break;case 3:if(mu=null,c=Ri,Ri=du(n.containerInfo),Xn(n,e),Ri=c,Wn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Mr(n.containerInfo)}catch(kt){Be(e,e.return,kt)}Pf&&(Pf=!1,z0(e));break;case 4:o=Ri,Ri=du(e.stateNode.containerInfo),Xn(n,e),Wn(e),Ri=o;break;case 12:Xn(n,e),Wn(e);break;case 31:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,$l(e,o)));break;case 13:Xn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(eu=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,$l(e,o)));break;case 22:c=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,et=ra,ht=hn;if(ra=et||c,hn=ht||H,Xn(n,e),hn=ht,ra=et,Wn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||H||ra||hn||bs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=H.stateNode;var _t=H.memoizedProps.style,rt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;A.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(kt){Be(H,H.return,kt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=c?"":H.memoizedProps}catch(kt){Be(H,H.return,kt)}}}else if(n.tag===18){if(a===null){H=n;try{var ut=H.stateNode;c?T_(ut,!0):T_(H.stateNode,!1)}catch(kt){Be(H,H.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,$l(e,a))));break;case 19:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,$l(e,o)));break;case 30:break;case 21:break;default:Xn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(R0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=Lf(e);Jl(e,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(pn(v,""),a.flags&=-33);var A=Lf(e);Jl(e,A,v);break;case 3:case 4:var H=a.stateNode.containerInfo,et=Lf(e);Of(e,et,H);break;default:throw Error(s(161))}}catch(ht){Be(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function z0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;z0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function la(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)D0(e,n.alternate,n),n=n.sibling}function bs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),bs(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&T0(n,n.return,a),bs(n);break;case 27:Bo(n.stateNode);case 26:case 5:Ii(n,n.return),bs(n);break;case 22:n.memoizedState===null&&bs(n);break;case 30:bs(n);break;default:bs(n)}e=e.sibling}}function ua(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ua(c,f,a),wo(4,f);break;case 1:if(ua(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(et){Be(o,o.return,et)}if(o=f,c=o.updateQueue,c!==null){var A=o.stateNode;try{var H=c.shared.hiddenCallbacks;if(H!==null)for(c.shared.hiddenCallbacks=null,c=0;c<H.length;c++)dm(H[c],A)}catch(et){Be(o,o.return,et)}}a&&v&64&&b0(f),Do(f,f.return);break;case 27:C0(f);case 26:case 5:ua(c,f,a),a&&o===null&&v&4&&A0(f),Do(f,f.return);break;case 12:ua(c,f,a);break;case 31:ua(c,f,a),a&&v&4&&L0(c,f);break;case 13:ua(c,f,a),a&&v&4&&O0(c,f);break;case 22:f.memoizedState===null&&ua(c,f,a),Do(f,f.return);break;case 30:break;default:ua(c,f,a)}n=n.sibling}}function zf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&_o(a))}function If(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&_o(e))}function Ci(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)I0(e,n,a,o),n=n.sibling}function I0(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,o),c&2048&&wo(9,n);break;case 1:Ci(e,n,a,o);break;case 3:Ci(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&_o(e)));break;case 12:if(c&2048){Ci(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,A=f.onPostCommit;typeof A=="function"&&A(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Be(n,n.return,H)}}else Ci(e,n,a,o);break;case 31:Ci(e,n,a,o);break;case 13:Ci(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(e,n,a,o):Uo(e,n):f._visibility&2?Ci(e,n,a,o):(f._visibility|=2,fr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&zf(v,n);break;case 24:Ci(e,n,a,o),c&2048&&If(n.alternate,n);break;default:Ci(e,n,a,o)}}function fr(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,A=a,H=o,et=v.flags;switch(v.tag){case 0:case 11:case 15:fr(f,v,A,H,c),wo(8,v);break;case 23:break;case 22:var ht=v.stateNode;v.memoizedState!==null?ht._visibility&2?fr(f,v,A,H,c):Uo(f,v):(ht._visibility|=2,fr(f,v,A,H,c)),c&&et&2048&&zf(v.alternate,v);break;case 24:fr(f,v,A,H,c),c&&et&2048&&If(v.alternate,v);break;default:fr(f,v,A,H,c)}n=n.sibling}}function Uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:Uo(a,o),c&2048&&zf(o.alternate,o);break;case 24:Uo(a,o),c&2048&&If(o.alternate,o);break;default:Uo(a,o)}n=n.sibling}}var No=8192;function hr(e,n,a){if(e.subtreeFlags&No)for(e=e.child;e!==null;)F0(e,n,a),e=e.sibling}function F0(e,n,a){switch(e.tag){case 26:hr(e,n,a),e.flags&No&&e.memoizedState!==null&&WS(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:hr(e,n,a);break;case 3:case 4:var o=Ri;Ri=du(e.stateNode.containerInfo),hr(e,n,a),Ri=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=No,No=16777216,hr(e,n,a),No=o):hr(e,n,a));break;default:hr(e,n,a)}}function B0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,G0(o,e)}B0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)H0(e),e=e.sibling}function H0(e){switch(e.tag){case 0:case 11:case 15:Lo(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:Lo(e);break;case 12:Lo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,tu(e)):Lo(e);break;default:Lo(e)}}function tu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,G0(o,e)}B0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),tu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,tu(n));break;default:tu(n)}e=e.sibling}}function G0(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:_o(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var c=o.sibling,f=o.return;if(U0(o),o===a){xn=null;break t}if(c!==null){c.return=f,xn=c;break t}xn=f}}}var rS={getCacheForType:function(e){var n=Cn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(un).controller.signal}},oS=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Ye=null,ge=null,Se=0,Fe=0,ei=null,Ha=!1,dr=!1,Ff=!1,ca=0,an=0,Ga=0,Ts=0,Bf=0,ni=0,pr=0,Oo=null,Yn=null,Hf=!1,eu=0,V0=0,nu=1/0,iu=null,Va=null,mn=0,ka=null,mr=null,fa=0,Gf=0,Vf=null,k0=null,Po=0,kf=null;function ii(){return(Ne&2)!==0&&Se!==0?Se&-Se:L.T!==null?Zf():eo()}function X0(){if(ni===0)if((Se&536870912)===0||Me){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function qn(e,n,a){(e===Ye&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(_r(e,0),Xa(e,Se,ni,!1)),Nn(e,a),((Ne&2)===0||e!==Ye)&&(e===Ye&&((Ne&2)===0&&(Ts|=a),an===4&&Xa(e,Se,ni,!1)),Fi(e))}function W0(e,n,a){if((Ne&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Rt(e,n),c=o?cS(e,n):Wf(e,n,!0),f=o;do{if(c===0){dr&&!o&&Xa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!lS(a)){c=Wf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var A=e;c=Oo;var H=A.current.memoizedState.isDehydrated;if(H&&(_r(A,v).flags|=256),v=Wf(A,v,!1),v!==2){if(Ff&&!H){A.errorRecoveryDisabledLanes|=f,Ts|=f,c=4;break t}f=Yn,Yn=c,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){_r(e,0),Xa(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ni,!Ha);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=eu+300-E(),10<c)){if(Xa(o,n,ni,!Ha),gt(o,0,!0)!==0)break t;fa=n,o.timeoutHandle=M_(Y0.bind(null,o,a,Yn,iu,Hf,n,ni,Ts,pr,Ha,f,"Throttled",-0,0),c);break t}Y0(o,a,Yn,iu,Hf,n,ni,Ts,pr,Ha,f,null,-0,0)}}break}while(!0);Fi(e)}function Y0(e,n,a,o,c,f,v,A,H,et,ht,_t,rt,ut){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},F0(n,f,_t);var kt=(f&62914560)===f?eu-E():(f&4194048)===f?V0-E():0;if(kt=YS(_t,kt),kt!==null){fa=f,e.cancelPendingCommit=kt(t_.bind(null,e,n,f,a,o,c,v,A,H,ht,_t,null,rt,ut)),Xa(e,f,v,!et);return}}t_(e,n,f,a,o,c,v,A,H)}function lS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(e,n,a,o){n&=~Bf,n&=~Ts,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-It(c),v=1<<f;o[f]=-1,c&=~v}a!==0&&ml(e,a,n)}function au(){return(Ne&6)===0?(zo(0),!1):!0}function Xf(){if(ge!==null){if(Fe===0)var e=ge.return;else e=ge,ta=_s=null,rf(e),rr=null,vo=0,e=ge;for(;e!==null;)E0(e.alternate,e),e=e.return;ge=null}}function _r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,CS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,Xf(),Ye=e,ge=a=Ji(e.current,null),Se=n,Fe=0,ei=null,Ha=!1,dr=Rt(e,n),Ff=!1,pr=ni=Bf=Ts=Ga=an=0,Yn=Oo=null,Hf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-It(o),f=1<<c;n|=e[c],o&=~f}return ca=n,Tl(),a}function q0(e,n){le=null,L.H=Ao,n===sr||n===Ll?(n=um(),Fe=3):n===qc?(n=um(),Fe=4):Fe=n===Mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,ge===null&&(an=1,ql(e,ci(n,e.current)))}function j0(){var e=$n.current;return e===null?!0:(Se&4194048)===Se?pi===null:(Se&62914560)===Se||(Se&536870912)!==0?e===pi:!1}function Z0(){var e=L.H;return L.H=Ao,e===null?Ao:e}function K0(){var e=L.A;return L.A=rS,e}function su(){an=4,Ha||(Se&4194048)!==Se&&$n.current!==null||(dr=!0),(Ga&134217727)===0&&(Ts&134217727)===0||Ye===null||Xa(Ye,Se,ni,!1)}function Wf(e,n,a){var o=Ne;Ne|=2;var c=Z0(),f=K0();(Ye!==e||Se!==n)&&(iu=null,_r(e,n)),n=!1;var v=an;t:do try{if(Fe!==0&&ge!==null){var A=ge,H=ei;switch(Fe){case 8:Xf(),v=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var et=Fe;if(Fe=0,ei=null,gr(e,A,H,et),a&&dr){v=0;break t}break;default:et=Fe,Fe=0,ei=null,gr(e,A,H,et)}}uS(),v=an;break}catch(ht){q0(e,ht)}while(!0);return n&&e.shellSuspendCounter++,ta=_s=null,Ne=o,L.H=c,L.A=f,ge===null&&(Ye=null,Se=0,Tl()),v}function uS(){for(;ge!==null;)Q0(ge)}function cS(e,n){var a=Ne;Ne|=2;var o=Z0(),c=K0();Ye!==e||Se!==n?(iu=null,nu=E()+500,_r(e,n)):dr=Rt(e,n);t:do try{if(Fe!==0&&ge!==null){n=ge;var f=ei;e:switch(Fe){case 1:Fe=0,ei=null,gr(e,n,f,1);break;case 2:case 9:if(om(f)){Fe=0,ei=null,J0(n);break}n=function(){Fe!==2&&Fe!==9||Ye!==e||(Fe=7),Fi(e)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:om(f)?(Fe=0,ei=null,J0(n)):(Fe=0,ei=null,gr(e,n,f,7));break;case 5:var v=null;switch(ge.tag){case 26:v=ge.memoizedState;case 5:case 27:var A=ge;if(v?I_(v):A.stateNode.complete){Fe=0,ei=null;var H=A.sibling;if(H!==null)ge=H;else{var et=A.return;et!==null?(ge=et,ru(et)):ge=null}break e}}Fe=0,ei=null,gr(e,n,f,5);break;case 6:Fe=0,ei=null,gr(e,n,f,6);break;case 8:Xf(),an=6;break t;default:throw Error(s(462))}}fS();break}catch(ht){q0(e,ht)}while(!0);return ta=_s=null,L.H=o,L.A=c,Ne=a,ge!==null?0:(Ye=null,Se=0,Tl(),an)}function fS(){for(;ge!==null&&!qt();)Q0(ge)}function Q0(e){var n=y0(e.alternate,e,ca);e.memoizedProps=e.pendingProps,n===null?ru(e):ge=n}function J0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=m0(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=m0(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:rf(n);default:E0(a,n),n=ge=Kp(n,ca),n=y0(a,n,ca)}e.memoizedProps=e.pendingProps,n===null?ru(e):ge=n}function gr(e,n,a,o){ta=_s=null,rf(n),rr=null,vo=0;var c=n.return;try{if($x(e,c,n,a,Se)){an=1,ql(e,ci(a,e.current)),ge=null;return}}catch(f){if(c!==null)throw ge=c,f;an=1,ql(e,ci(a,e.current)),ge=null;return}n.flags&32768?(Me||o===1?e=!0:dr||(Se&536870912)!==0?e=!1:(Ha=e=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),$0(n,e)):ru(n)}function ru(e){var n=e;do{if((n.flags&32768)!==0){$0(n,Ha);return}e=n.return;var a=nS(n.alternate,n,ca);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);an===0&&(an=5)}function $0(e,n){do{var a=iS(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);an=6,ge=null}function t_(e,n,a,o,c,f,v,A,H){e.cancelPendingCommit=null;do ou();while(mn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Nc,Ei(e,a,f,v,A,H),e===Ye&&(ge=Ye=null,Se=0),mr=n,ka=e,fa=a,Gf=f,Vf=c,k0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,mS(ct,function(){return s_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,c=F.p,F.p=2,v=Ne,Ne|=4;try{aS(e,n,a)}finally{Ne=v,F.p=c,L.T=o}}mn=1,e_(),n_(),i_()}}function e_(){if(mn===1){mn=0;var e=ka,n=mr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=F.p;F.p=2;var c=Ne;Ne|=4;try{P0(n,e);var f=ih,v=Gp(e.containerInfo),A=f.focusedElem,H=f.selectionRange;if(v!==A&&A&&A.ownerDocument&&Hp(A.ownerDocument.documentElement,A)){if(H!==null&&Rc(A)){var et=H.start,ht=H.end;if(ht===void 0&&(ht=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(ht,A.value.length);else{var _t=A.ownerDocument||document,rt=_t&&_t.defaultView||window;if(rt.getSelection){var ut=rt.getSelection(),kt=A.textContent.length,te=Math.min(H.start,kt),Xe=H.end===void 0?te:Math.min(H.end,kt);!ut.extend&&te>Xe&&(v=Xe,Xe=te,te=v);var Z=Bp(A,te),k=Bp(A,Xe);if(Z&&k&&(ut.rangeCount!==1||ut.anchorNode!==Z.node||ut.anchorOffset!==Z.offset||ut.focusNode!==k.node||ut.focusOffset!==k.offset)){var tt=_t.createRange();tt.setStart(Z.node,Z.offset),ut.removeAllRanges(),te>Xe?(ut.addRange(tt),ut.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),ut.addRange(tt))}}}}for(_t=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&_t.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var pt=_t[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}xu=!!nh,ih=nh=null}finally{Ne=c,F.p=o,L.T=a}}e.current=n,mn=2}}function n_(){if(mn===2){mn=0;var e=ka,n=mr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=F.p;F.p=2;var c=Ne;Ne|=4;try{D0(e,n.alternate,n)}finally{Ne=c,F.p=o,L.T=a}}mn=3}}function i_(){if(mn===4||mn===3){mn=0,D();var e=ka,n=mr,a=fa,o=k0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,mr=ka=null,a_(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Va=null),Vs(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,c=F.p,F.p=2,L.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var A=o[v];f(A.value,{componentStack:A.stack})}}finally{L.T=n,F.p=c}}(fa&3)!==0&&ou(),Fi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===kf?Po++:(Po=0,kf=e):Po=0,zo(0)}}function a_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,_o(n)))}function ou(){return e_(),n_(),i_(),s_()}function s_(){if(mn!==5)return!1;var e=ka,n=Gf;Gf=0;var a=Vs(fa),o=L.T,c=F.p;try{F.p=32>a?32:a,L.T=null,a=Vf,Vf=null;var f=ka,v=fa;if(mn=0,mr=ka=null,fa=0,(Ne&6)!==0)throw Error(s(331));var A=Ne;if(Ne|=4,H0(f.current),I0(f,f.current,v,a),Ne=A,zo(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Et,f)}catch{}return!0}finally{F.p=c,L.T=o,a_(e,n)}}function r_(e,n,a){n=ci(a,n),n=yf(e.stateNode,n,2),e=za(e,n,2),e!==null&&(Nn(e,2),Fi(e))}function Be(e,n,a){if(e.tag===3)r_(e,e,a);else for(;n!==null;){if(n.tag===3){r_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){e=ci(a,e),a=o0(2),o=za(n,a,2),o!==null&&(l0(a,o,n,e),Nn(o,2),Fi(o));break}}n=n.return}}function Yf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new oS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Ff=!0,c.add(a),e=hS.bind(null,e,n,a),n.then(e,e))}function hS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Se&a)===a&&(an===4||an===3&&(Se&62914560)===Se&&300>E()-eu?(Ne&2)===0&&_r(e,0):Bf|=a,pr===Se&&(pr=0)),Fi(e)}function o_(e,n){n===0&&(n=ze()),e=ds(e,n),e!==null&&(Nn(e,n),Fi(e))}function dS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),o_(e,a)}function pS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),o_(e,a)}function mS(e,n){return Ee(e,n)}var lu=null,vr=null,qf=!1,uu=!1,jf=!1,Wa=0;function Fi(e){e!==vr&&e.next===null&&(vr===null?lu=vr=e:vr=vr.next=e),uu=!0,qf||(qf=!0,gS())}function zo(e,n){if(!jf&&uu){jf=!0;do for(var a=!1,o=lu;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var v=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-It(42|e)+1)-1,f&=c&~(v&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,f_(o,f))}else f=Se,f=gt(o,o===Ye?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Rt(o,f)||(a=!0,f_(o,f));o=o.next}while(a);jf=!1}}function _S(){l_()}function l_(){uu=qf=!1;var e=0;Wa!==0&&RS()&&(e=Wa);for(var n=E(),a=null,o=lu;o!==null;){var c=o.next,f=u_(o,n);f===0?(o.next=null,a===null?lu=c:a.next=c,c===null&&(vr=a)):(a=o,(e!==0||(f&3)!==0)&&(uu=!0)),o=c}mn!==0&&mn!==5||zo(e),Wa!==0&&(Wa=0)}function u_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-It(f),A=1<<v,H=c[v];H===-1?((A&a)===0||(A&o)!==0)&&(c[v]=ie(A,n)):H<=n&&(e.expiredLanes|=A),f&=~A}if(n=Ye,a=Se,a=gt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Le(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Le(o),Vs(a)){case 2:case 8:a=St;break;case 32:a=ct;break;case 268435456:a=wt;break;default:a=ct}return o=c_.bind(null,e),a=Ee(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Le(o),e.callbackPriority=2,e.callbackNode=null,2}function c_(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ou()&&e.callbackNode!==a)return null;var o=Se;return o=gt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(W0(e,o,n),u_(e,E()),e.callbackNode!=null&&e.callbackNode===a?c_.bind(null,e):null)}function f_(e,n){if(ou())return null;W0(e,n,!0)}function gS(){wS(function(){(Ne&6)!==0?Ee(dt,_S):l_()})}function Zf(){if(Wa===0){var e=ir;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),Wa=e}return Wa}function h_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gl(""+e)}function d_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function vS(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=h_((c[yn]||null).action),v=o.submitter;v&&(n=(n=v[yn]||null)?h_(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var A=new yl("action","action",null,o,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var H=v?d_(c,v):new FormData(c);mf(a,{pending:!0,data:H,method:c.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=v?d_(c,v):new FormData(c),mf(a,{pending:!0,data:H,method:c.method,action:f},f,H))},currentTarget:c}]})}}for(var Kf=0;Kf<Uc.length;Kf++){var Qf=Uc[Kf],xS=Qf.toLowerCase(),SS=Qf[0].toUpperCase()+Qf.slice(1);Ai(xS,"on"+SS)}Ai(Xp,"onAnimationEnd"),Ai(Wp,"onAnimationIteration"),Ai(Yp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(zx,"onTransitionRun"),Ai(Ix,"onTransitionStart"),Ai(Fx,"onTransitionCancel"),Ai(qp,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function p_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var A=o[v],H=A.instance,et=A.currentTarget;if(A=A.listener,H!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=et;try{f(c)}catch(ht){bl(ht)}c.currentTarget=null,f=H}else for(v=0;v<o.length;v++){if(A=o[v],H=A.instance,et=A.currentTarget,A=A.listener,H!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=et;try{f(c)}catch(ht){bl(ht)}c.currentTarget=null,f=H}}}}function ve(e,n){var a=n[ks];a===void 0&&(a=n[ks]=new Set);var o=e+"__bubble";a.has(o)||(m_(n,e,2,!1),a.add(o))}function Jf(e,n,a){var o=0;n&&(o|=4),m_(a,e,o,n)}var cu="_reactListening"+Math.random().toString(36).slice(2);function $f(e){if(!e[cu]){e[cu]=!0,j.forEach(function(a){a!=="selectionchange"&&(yS.has(a)||Jf(a,!1,e),Jf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cu]||(n[cu]=!0,Jf("selectionchange",!1,n))}}function m_(e,n,a,o){switch(X_(n)){case 2:var c=ZS;break;case 8:c=KS;break;default:c=ph}a=c.bind(null,n,a,e),c=void 0,!vc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function th(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var A=o.stateNode.containerInfo;if(A===c)break;if(v===4)for(v=o.return;v!==null;){var H=v.tag;if((H===3||H===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;A!==null;){if(v=Aa(A),v===null)return;if(H=v.tag,H===5||H===6||H===26||H===27){o=f=v;continue t}A=A.parentNode}}o=o.return}Sp(function(){var et=f,ht=_c(a),_t=[];t:{var rt=jp.get(e);if(rt!==void 0){var ut=yl,kt=e;switch(e){case"keypress":if(xl(a)===0)break t;case"keydown":case"keyup":ut=px;break;case"focusin":kt="focus",ut=Mc;break;case"focusout":kt="blur",ut=Mc;break;case"beforeblur":case"afterblur":ut=Mc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=gx;break;case Xp:case Wp:case Yp:ut=sx;break;case qp:ut=xx;break;case"scroll":case"scrollend":ut=tx;break;case"wheel":ut=yx;break;case"copy":case"cut":case"paste":ut=ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Tp;break;case"toggle":case"beforetoggle":ut=Ex}var te=(n&4)!==0,Xe=!te&&(e==="scroll"||e==="scrollend"),Z=te?rt!==null?rt+"Capture":null:rt;te=[];for(var k=et,tt;k!==null;){var pt=k;if(tt=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||tt===null||Z===null||(pt=ao(k,Z),pt!=null&&te.push(Fo(k,pt,tt))),Xe)break;k=k.return}0<te.length&&(rt=new ut(rt,kt,null,a,ht),_t.push({event:rt,listeners:te}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",rt&&a!==mc&&(kt=a.relatedTarget||a.fromElement)&&(Aa(kt)||kt[bi]))break t;if((ut||rt)&&(rt=ht.window===ht?ht:(rt=ht.ownerDocument)?rt.defaultView||rt.parentWindow:window,ut?(kt=a.relatedTarget||a.toElement,ut=et,kt=kt?Aa(kt):null,kt!==null&&(Xe=u(kt),te=kt.tag,kt!==Xe||te!==5&&te!==27&&te!==6)&&(kt=null)):(ut=null,kt=et),ut!==kt)){if(te=Ep,pt="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=Tp,pt="onPointerLeave",Z="onPointerEnter",k="pointer"),Xe=ut==null?rt:us(ut),tt=kt==null?rt:us(kt),rt=new te(pt,k+"leave",ut,a,ht),rt.target=Xe,rt.relatedTarget=tt,pt=null,Aa(ht)===et&&(te=new te(Z,k+"enter",kt,a,ht),te.target=tt,te.relatedTarget=Xe,pt=te),Xe=pt,ut&&kt)e:{for(te=MS,Z=ut,k=kt,tt=0,pt=Z;pt;pt=te(pt))tt++;pt=0;for(var Qt=k;Qt;Qt=te(Qt))pt++;for(;0<tt-pt;)Z=te(Z),tt--;for(;0<pt-tt;)k=te(k),pt--;for(;tt--;){if(Z===k||k!==null&&Z===k.alternate){te=Z;break e}Z=te(Z),k=te(k)}te=null}else te=null;ut!==null&&__(_t,rt,ut,te,!1),kt!==null&&Xe!==null&&__(_t,Xe,kt,te,!0)}}t:{if(rt=et?us(et):window,ut=rt.nodeName&&rt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&rt.type==="file")var Re=Lp;else if(Up(rt))if(Op)Re=Lx;else{Re=Ux;var jt=Dx}else ut=rt.nodeName,!ut||ut.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?et&&Ti(et.elementType)&&(Re=Lp):Re=Nx;if(Re&&(Re=Re(e,et))){Np(_t,Re,a,ht);break t}jt&&jt(e,rt,et),e==="focusout"&&et&&rt.type==="number"&&et.memoizedProps.value!=null&&En(rt,"number",rt.value)}switch(jt=et?us(et):window,e){case"focusin":(Up(jt)||jt.contentEditable==="true")&&(Zs=jt,Cc=et,ho=null);break;case"focusout":ho=Cc=Zs=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,Vp(_t,a,ht);break;case"selectionchange":if(Px)break;case"keydown":case"keyup":Vp(_t,a,ht)}var he;if(bc)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else js?wp(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Ap&&a.locale!=="ko"&&(js||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&js&&(he=yp()):(wa=ht,xc="value"in wa?wa.value:wa.textContent,js=!0)),jt=fu(et,ye),0<jt.length&&(ye=new bp(ye,e,null,a,ht),_t.push({event:ye,listeners:jt}),he?ye.data=he:(he=Dp(a),he!==null&&(ye.data=he)))),(he=Tx?Ax(e,a):Rx(e,a))&&(ye=fu(et,"onBeforeInput"),0<ye.length&&(jt=new bp("onBeforeInput","beforeinput",null,a,ht),_t.push({event:jt,listeners:ye}),jt.data=he)),vS(_t,e,et,a,ht)}p_(_t,n)})}function Fo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function fu(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=ao(e,a),c!=null&&o.unshift(Fo(e,c,f)),c=ao(e,n),c!=null&&o.push(Fo(e,c,f))),e.tag===3)return o;e=e.return}return[]}function MS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function __(e,n,a,o,c){for(var f=n._reactName,v=[];a!==null&&a!==o;){var A=a,H=A.alternate,et=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||et===null||(H=et,c?(et=ao(a,f),et!=null&&v.unshift(Fo(a,et,H))):c||(et=ao(a,f),et!=null&&v.push(Fo(a,et,H)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var ES=/\r\n?/g,bS=/\u0000|\uFFFD/g;function g_(e){return(typeof e=="string"?e:""+e).replace(ES,`
`).replace(bS,"")}function v_(e,n){return n=g_(n),g_(e)===n}function ke(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pn(e,""+o);break;case"className":Jt(e,"class",o);break;case"tabIndex":Jt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(e,a,o);break;case"style":Ws(e,o,f);break;case"data":if(n!=="object"){Jt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ke(e,n,"name",c.name,c,null),ke(e,n,"formEncType",c.formEncType,c,null),ke(e,n,"formMethod",c.formMethod,c,null),ke(e,n,"formTarget",c.formTarget,c,null)):(ke(e,n,"encType",c.encType,c,null),ke(e,n,"method",c.method,c,null),ke(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ki);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=gl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Wt(e,"popover",o);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Wt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Jv.get(a)||a,Wt(e,a,o))}}function eh(e,n,a,o,c,f){switch(a){case"style":Ws(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?pn(e,o):(typeof o=="number"||typeof o=="bigint")&&pn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Wt(e,a,o)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ke(e,n,f,v,a,null)}}c&&ke(e,n,"srcSet",a.srcSet,a,null),o&&ke(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var A=f=v=c=null,H=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":c=ht;break;case"type":v=ht;break;case"checked":H=ht;break;case"defaultChecked":et=ht;break;case"value":f=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:ke(e,n,o,ht,a,null)}}Zi(e,f,A,H,et,v,c,!1);return;case"select":ve("invalid",e),o=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":v=A;break;case"multiple":o=A;default:ke(e,n,c,A,a,null)}n=f,a=v,e.multiple=!!o,n!=null?li(e,!!o,n,!1):a!=null&&li(e,!!o,a,!0);return;case"textarea":ve("invalid",e),f=c=o=null;for(v in a)if(a.hasOwnProperty(v)&&(A=a[v],A!=null))switch(v){case"value":o=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:ke(e,n,v,A,a,null)}bn(e,o,c,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ke(e,n,H,o,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Io.length;o++)ve(Io[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ke(e,n,et,o,a,null)}return;default:if(Ti(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&eh(e,n,ht,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&ke(e,n,A,o,a,null))}function TS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,A=null,H=null,et=null,ht=null;for(ut in a){var _t=a[ut];if(a.hasOwnProperty(ut)&&_t!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":H=_t;default:o.hasOwnProperty(ut)||ke(e,n,ut,null,o,_t)}}for(var rt in o){var ut=o[rt];if(_t=a[rt],o.hasOwnProperty(rt)&&(ut!=null||_t!=null))switch(rt){case"type":f=ut;break;case"name":c=ut;break;case"checked":et=ut;break;case"defaultChecked":ht=ut;break;case"value":v=ut;break;case"defaultValue":A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==_t&&ke(e,n,rt,ut,o,_t)}}Mn(e,v,A,H,et,ht,f,c);return;case"select":ut=v=A=rt=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ut=H;default:o.hasOwnProperty(f)||ke(e,n,f,null,o,H)}for(c in o)if(f=o[c],H=a[c],o.hasOwnProperty(c)&&(f!=null||H!=null))switch(c){case"value":rt=f;break;case"defaultValue":A=f;break;case"multiple":v=f;default:f!==H&&ke(e,n,c,f,o,H)}n=A,a=v,o=ut,rt!=null?li(e,!!a,rt,!1):!!o!=!!a&&(n!=null?li(e,!!a,n,!0):li(e,!!a,a?[]:"",!1));return;case"textarea":ut=rt=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ke(e,n,A,null,o,c)}for(v in o)if(c=o[v],f=a[v],o.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":rt=c;break;case"defaultValue":ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&ke(e,n,v,c,o,f)}Ie(e,rt,ut);return;case"option":for(var kt in a)if(rt=a[kt],a.hasOwnProperty(kt)&&rt!=null&&!o.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:ke(e,n,kt,null,o,rt)}for(H in o)if(rt=o[H],ut=a[H],o.hasOwnProperty(H)&&rt!==ut&&(rt!=null||ut!=null))switch(H){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:ke(e,n,H,rt,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)rt=a[te],a.hasOwnProperty(te)&&rt!=null&&!o.hasOwnProperty(te)&&ke(e,n,te,null,o,rt);for(et in o)if(rt=o[et],ut=a[et],o.hasOwnProperty(et)&&rt!==ut&&(rt!=null||ut!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:ke(e,n,et,rt,o,ut)}return;default:if(Ti(n)){for(var Xe in a)rt=a[Xe],a.hasOwnProperty(Xe)&&rt!==void 0&&!o.hasOwnProperty(Xe)&&eh(e,n,Xe,void 0,o,rt);for(ht in o)rt=o[ht],ut=a[ht],!o.hasOwnProperty(ht)||rt===ut||rt===void 0&&ut===void 0||eh(e,n,ht,rt,o,ut);return}}for(var Z in a)rt=a[Z],a.hasOwnProperty(Z)&&rt!=null&&!o.hasOwnProperty(Z)&&ke(e,n,Z,null,o,rt);for(_t in o)rt=o[_t],ut=a[_t],!o.hasOwnProperty(_t)||rt===ut||rt==null&&ut==null||ke(e,n,_t,rt,o,ut)}function x_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function AS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,v=c.initiatorType,A=c.duration;if(f&&A&&x_(v)){for(v=0,A=c.responseEnd,o+=1;o<a.length;o++){var H=a[o],et=H.startTime;if(et>A)break;var ht=H.transferSize,_t=H.initiatorType;ht&&x_(_t)&&(H=H.responseEnd,v+=ht*(H<A?1:(A-et)/(H-et)))}if(--o,n+=8*(f+v)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var nh=null,ih=null;function hu(e){return e.nodeType===9?e:e.ownerDocument}function S_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function y_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ah(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sh=null;function RS(){var e=window.event;return e&&e.type==="popstate"?e===sh?!1:(sh=e,!0):(sh=null,!1)}var M_=typeof setTimeout=="function"?setTimeout:void 0,CS=typeof clearTimeout=="function"?clearTimeout:void 0,E_=typeof Promise=="function"?Promise:void 0,wS=typeof queueMicrotask=="function"?queueMicrotask:typeof E_<"u"?function(e){return E_.resolve(null).then(e).catch(DS)}:M_;function DS(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function b_(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),Mr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Bo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,A=f.nodeName;f[ls]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Bo(e.ownerDocument.body);a=c}while(a);Mr(n)}function T_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function rh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rh(a),io(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function US(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ls])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function NS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function A_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function oh(e){return e.data==="$?"||e.data==="$~"}function lh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function LS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var uh=null;function R_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function C_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function w_(e,n,a){switch(n=hu(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);io(e)}var _i=new Map,D_=new Set;function du(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=F.d;F.d={f:OS,r:PS,D:zS,C:IS,L:FS,m:BS,X:GS,S:HS,M:VS};function OS(){var e=ha.f(),n=au();return e||n}function PS(e){var n=Ra(e);n!==null&&n.tag===5&&n.type==="form"?qm(n):ha.r(e)}var xr=typeof document>"u"?null:document;function U_(e,n,a){var o=xr;if(o&&typeof n=="string"&&n){var c=se(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),D_.has(c)||(D_.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Dn(n,"link",e),R(n),o.head.appendChild(n)))}}function zS(e){ha.D(e),U_("dns-prefetch",e,null)}function IS(e,n){ha.C(e,n),U_("preconnect",e,n)}function FS(e,n,a){ha.L(e,n,a);var o=xr;if(o&&e&&n){var c='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+se(a.imageSizes)+'"]')):c+='[href="'+se(e)+'"]';var f=c;switch(n){case"style":f=Sr(e);break;case"script":f=yr(e)}_i.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),_i.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Ho(f))||n==="script"&&o.querySelector(Go(f))||(n=o.createElement("link"),Dn(n,"link",e),R(n),o.head.appendChild(n)))}}function BS(e,n){ha.m(e,n);var a=xr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+se(o)+'"][href="'+se(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=yr(e)}if(!_i.has(f)&&(e=_({rel:"modulepreload",href:e},n),_i.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(f)))return}o=a.createElement("link"),Dn(o,"link",e),R(o),a.head.appendChild(o)}}}function HS(e,n,a){ha.S(e,n,a);var o=xr;if(o&&e){var c=Ca(o).hoistableStyles,f=Sr(e);n=n||"default";var v=c.get(f);if(!v){var A={loading:0,preload:null};if(v=o.querySelector(Ho(f)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=_i.get(f))&&ch(e,a);var H=v=o.createElement("link");R(H),Dn(H,"link",e),H._p=new Promise(function(et,ht){H.onload=et,H.onerror=ht}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,pu(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:A},c.set(f,v)}}}function GS(e,n){ha.X(e,n);var a=xr;if(a&&e){var o=Ca(a).hoistableScripts,c=yr(e),f=o.get(c);f||(f=a.querySelector(Go(c)),f||(e=_({src:e,async:!0},n),(n=_i.get(c))&&fh(e,n),f=a.createElement("script"),R(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function VS(e,n){ha.M(e,n);var a=xr;if(a&&e){var o=Ca(a).hoistableScripts,c=yr(e),f=o.get(c);f||(f=a.querySelector(Go(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=_i.get(c))&&fh(e,n),f=a.createElement("script"),R(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function N_(e,n,a,o){var c=(c=it.current)?du(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Sr(a.href),a=Ca(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Sr(a.href);var f=Ca(c).hoistableStyles,v=f.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=c.querySelector(Ho(e)))&&!f._p&&(v.instance=f,v.state.loading=5),_i.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(e,a),f||kS(c,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=yr(a),a=Ca(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Sr(e){return'href="'+se(e)+'"'}function Ho(e){return'link[rel="stylesheet"]['+e+"]"}function L_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function kS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),R(n),e.head.appendChild(n))}function yr(e){return'[src="'+se(e)+'"]'}function Go(e){return"script[async]"+e}function O_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+se(a.href)+'"]');if(o)return n.instance=o,R(o),o;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),R(o),Dn(o,"style",c),pu(o,a.precedence,e),n.instance=o;case"stylesheet":c=Sr(a.href);var f=e.querySelector(Ho(c));if(f)return n.state.loading|=4,n.instance=f,R(f),f;o=L_(a),(c=_i.get(c))&&ch(o,c),f=(e.ownerDocument||e).createElement("link"),R(f);var v=f;return v._p=new Promise(function(A,H){v.onload=A,v.onerror=H}),Dn(f,"link",o),n.state.loading|=4,pu(f,a.precedence,e),n.instance=f;case"script":return f=yr(a.src),(c=e.querySelector(Go(f)))?(n.instance=c,R(c),c):(o=a,(c=_i.get(f))&&(o=_({},a),fh(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),R(c),Dn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,pu(o,a.precedence,e));return n.instance}function pu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,v=0;v<o.length;v++){var A=o[v];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ch(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function fh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var mu=null;function P_(e,n,a){if(mu===null){var o=new Map,c=mu=new Map;c.set(a,o)}else c=mu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ls]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var A=o.get(v);A?A.push(f):o.set(v,[f])}}return o}function z_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function XS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function I_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function WS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Sr(o.href),f=n.querySelector(Ho(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=_u.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,R(f);return}f=n.ownerDocument||n,o=L_(o),(c=_i.get(c))&&ch(o,c),f=f.createElement("link"),R(f);var v=f;v._p=new Promise(function(A,H){v.onload=A,v.onerror=H}),Dn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=_u.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var hh=0;function YS(e,n){return e.stylesheets&&e.count===0&&vu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&vu(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&hh===0&&(hh=62500*AS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vu(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>hh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function _u(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gu=null;function vu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gu=new Map,n.forEach(qS,e),gu=null,_u.call(e))}function qS(e,n){if(!(n.state.loading&4)){var a=gu.get(e);if(a)var o=a.get(null);else{a=new Map,gu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,c),a.set(v,c),this.count++,o=_u.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Vo={$$typeof:O,Provider:null,Consumer:null,_currentValue:nt,_currentValue2:nt,_threadCount:0};function jS(e,n,a,o,c,f,v,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function F_(e,n,a,o,c,f,v,A,H,et,ht,_t){return e=new jS(e,n,a,v,H,et,ht,_t,A),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),e.current=f,f.stateNode=e,n=Xc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},jc(f),e}function B_(e){return e?(e=Js,e):Js}function H_(e,n,a,o,c,f){c=B_(c),o.context===null?o.context=c:o.pendingContext=c,o=Pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(e,o,n),a!==null&&(qn(a,e,n),So(a,e,n))}function G_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function dh(e,n){G_(e,n),(e=e.alternate)&&G_(e,n)}function V_(e){if(e.tag===13||e.tag===31){var n=ds(e,67108864);n!==null&&qn(n,e,67108864),dh(e,67108864)}}function k_(e){if(e.tag===13||e.tag===31){var n=ii();n=to(n);var a=ds(e,n);a!==null&&qn(a,e,n),dh(e,n)}}var xu=!0;function ZS(e,n,a,o){var c=L.T;L.T=null;var f=F.p;try{F.p=2,ph(e,n,a,o)}finally{F.p=f,L.T=c}}function KS(e,n,a,o){var c=L.T;L.T=null;var f=F.p;try{F.p=8,ph(e,n,a,o)}finally{F.p=f,L.T=c}}function ph(e,n,a,o){if(xu){var c=mh(o);if(c===null)th(e,n,o,Su,a),W_(e,o);else if(JS(c,e,n,a,o))o.stopPropagation();else if(W_(e,o),n&4&&-1<QS.indexOf(e)){for(;c!==null;){var f=Ra(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Mt(f.pendingLanes);if(v!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var H=1<<31-It(v);A.entanglements[1]|=H,v&=~H}Fi(f),(Ne&6)===0&&(nu=E()+500,zo(0))}}break;case 31:case 13:A=ds(f,2),A!==null&&qn(A,f,2),au(),dh(f,2)}if(f=mh(o),f===null&&th(e,n,o,Su,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else th(e,n,o,null,a)}}function mh(e){return e=_c(e),_h(e)}var Su=null;function _h(e){if(Su=null,e=Aa(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Su=e,null}function X_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case dt:return 2;case St:return 8;case ct:case Zt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var gh=!1,qa=null,ja=null,Za=null,ko=new Map,Xo=new Map,Ka=[],QS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function W_(e,n){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(n.pointerId)}}function Wo(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ra(n),n!==null&&V_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function JS(e,n,a,o,c){switch(n){case"focusin":return qa=Wo(qa,e,n,a,o,c),!0;case"dragenter":return ja=Wo(ja,e,n,a,o,c),!0;case"mouseover":return Za=Wo(Za,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return ko.set(f,Wo(ko.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Xo.set(f,Wo(Xo.get(f)||null,e,n,a,o,c)),!0}return!1}function Y_(e){var n=Aa(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Oi(e.priority,function(){k_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Oi(e.priority,function(){k_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=mh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);mc=o,a.target.dispatchEvent(o),mc=null}else return n=Ra(a),n!==null&&V_(n),e.blockedOn=a,!1;n.shift()}return!0}function q_(e,n,a){yu(e)&&a.delete(n)}function $S(){gh=!1,qa!==null&&yu(qa)&&(qa=null),ja!==null&&yu(ja)&&(ja=null),Za!==null&&yu(Za)&&(Za=null),ko.forEach(q_),Xo.forEach(q_)}function Mu(e,n){e.blockedOn===n&&(e.blockedOn=null,gh||(gh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,$S)))}var Eu=null;function j_(e){Eu!==e&&(Eu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Eu===e&&(Eu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(_h(o||a)===null)continue;break}var f=Ra(a);f!==null&&(e.splice(n,3),n-=3,mf(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Mr(e){function n(H){return Mu(H,e)}qa!==null&&Mu(qa,e),ja!==null&&Mu(ja,e),Za!==null&&Mu(Za,e),ko.forEach(n),Xo.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)Y_(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],v=c[yn]||null;if(typeof f=="function")v||j_(a);else if(v){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[yn]||null)A=v.formAction;else if(_h(c)!==null)continue}else A=v.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),j_(a)}}}function Z_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function vh(e){this._internalRoot=e}bu.prototype.render=vh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ii();H_(a,o,e,n,null,null)},bu.prototype.unmount=vh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;H_(e.current,2,null,e,null,null),au(),n[bi]=null}};function bu(e){this._internalRoot=e}bu.prototype.unstable_scheduleHydration=function(e){if(e){var n=eo();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&Y_(e)}};var K_=t.version;if(K_!=="19.2.3")throw Error(s(527,K_,"19.2.3"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var ty={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tu.isDisabled&&Tu.supportsFiber)try{Et=Tu.inject(ty),bt=Tu}catch{}}return qo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",c=i0,f=a0,v=s0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=F_(e,1,!1,null,null,a,o,null,c,f,v,Z_),e[bi]=n.current,$f(e),new vh(n)},qo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,c="",f=i0,v=a0,A=s0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=F_(e,1,!0,n,a??null,o,c,H,f,v,A,Z_),n.context=B_(null),a=n.current,o=ii(),o=to(o),c=Pa(o),c.callback=null,za(a,c,o),a=o,n.current.lanes=a,Nn(n,a),Fi(n),e[bi]=n.current,$f(e),new bu(n)},qo.version="19.2.3",qo}var rg;function fy(){if(rg)return yh.exports;rg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),yh.exports=cy(),yh.exports}var hy=fy();const dy=dv(hy);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ap="182",kr={ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},py=0,og=1,my=2,Ju=1,_y=2,il=3,os=0,Zn=1,va=2,Sa=0,Xr=1,Vr=2,lg=3,ug=4,gy=5,Ns=100,vy=101,xy=102,Sy=103,yy=104,My=200,Ey=201,by=202,Ty=203,id=204,ad=205,Ay=206,Ry=207,Cy=208,wy=209,Dy=210,Uy=211,Ny=212,Ly=213,Oy=214,sd=0,rd=1,od=2,Yr=3,ld=4,ud=5,cd=6,fd=7,pv=0,Py=1,zy=2,ki=0,mv=1,_v=2,gv=3,vv=4,xv=5,Sv=6,yv=7,Mv=300,Fs=301,qr=302,hd=303,dd=304,uc=306,pd=1e3,xa=1001,md=1002,Un=1003,Iy=1004,Au=1005,zn=1006,Th=1007,Os=1008,Si=1009,Ev=1010,bv=1011,ll=1012,sp=1013,Wi=1014,Gi=1015,Ea=1016,rp=1017,op=1018,ul=1020,Tv=35902,Av=35899,Rv=1021,Cv=1022,Li=1023,ba=1026,Ps=1027,wv=1028,lp=1029,jr=1030,up=1031,cp=1033,$u=33776,tc=33777,ec=33778,nc=33779,_d=35840,gd=35841,vd=35842,xd=35843,Sd=36196,yd=37492,Md=37496,Ed=37488,bd=37489,Td=37490,Ad=37491,Rd=37808,Cd=37809,wd=37810,Dd=37811,Ud=37812,Nd=37813,Ld=37814,Od=37815,Pd=37816,zd=37817,Id=37818,Fd=37819,Bd=37820,Hd=37821,Gd=36492,Vd=36494,kd=36495,Xd=36283,Wd=36284,Yd=36285,qd=36286,Fy=3200,By=0,Hy=1,ss="",vi="srgb",Zr="srgb-linear",ac="linear",He="srgb",Er=7680,cg=519,Gy=512,Vy=513,ky=514,fp=515,Xy=516,Wy=517,hp=518,Yy=519,jd=35044,fg="300 es",Vi=2e3,sc=2001;function Dv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function rc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qy(){const r=rc("canvas");return r.style.display="block",r}const hg={};function oc(...r){const t="THREE."+r.shift();console.log(t,...r)}function ae(...r){const t="THREE."+r.shift();console.warn(t,...r)}function be(...r){const t="THREE."+r.shift();console.error(t,...r)}function cl(...r){const t=r.join(" ");t in hg||(hg[t]=!0,ae(...r))}function jy(r,t,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class Hs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dg=1234567;const rl=Math.PI/180,fl=180/Math.PI;function ya(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function me(r,t,i){return Math.max(t,Math.min(i,r))}function dp(r,t){return(r%t+t)%t}function Zy(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function Ky(r,t,i){return r!==t?(i-r)/(t-r):0}function ol(r,t,i){return(1-i)*r+i*t}function Qy(r,t,i,s){return ol(r,t,1-Math.exp(-i*s))}function Jy(r,t=1){return t-Math.abs(dp(r,t*2)-t)}function $y(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function tM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function eM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function nM(r,t){return r+Math.random()*(t-r)}function iM(r){return r*(.5-Math.random())}function aM(r){r!==void 0&&(dg=r);let t=dg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sM(r){return r*rl}function rM(r){return r*fl}function oM(r){return(r&r-1)===0&&r!==0}function lM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function uM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function cM(r,t,i,s,l){const u=Math.cos,h=Math.sin,d=u(i/2),m=h(i/2),p=u((t+s)/2),g=h((t+s)/2),_=u((t-s)/2),S=h((t-s)/2),M=u((s-t)/2),b=h((s-t)/2);switch(l){case"XYX":r.set(d*g,m*_,m*S,d*p);break;case"YZY":r.set(m*S,d*g,m*_,d*p);break;case"ZXZ":r.set(m*_,m*S,d*g,d*p);break;case"XZX":r.set(d*g,m*b,m*M,d*p);break;case"YXY":r.set(m*M,d*g,m*b,d*p);break;case"ZYZ":r.set(m*b,m*M,d*g,d*p);break;default:ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ni(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ge(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Uv={DEG2RAD:rl,RAD2DEG:fl,generateUUID:ya,clamp:me,euclideanModulo:dp,mapLinear:Zy,inverseLerp:Ky,lerp:ol,damp:Qy,pingpong:Jy,smoothstep:$y,smootherstep:tM,randInt:eM,randFloat:nM,randFloatSpread:iM,seededRandom:aM,degToRad:sM,radToDeg:rM,isPowerOfTwo:oM,ceilPowerOfTwo:lM,floorPowerOfTwo:uM,setQuaternionFromProperEuler:cM,normalize:Ge,denormalize:Ni};class ne{constructor(t=0,i=0){ne.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],S=u[h+0],M=u[h+1],b=u[h+2],C=u[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d>=1){t[i+0]=S,t[i+1]=M,t[i+2]=b,t[i+3]=C;return}if(_!==C||m!==S||p!==M||g!==b){let y=m*S+p*M+g*b+_*C;y<0&&(S=-S,M=-M,b=-b,C=-C,y=-y);let x=1-d;if(y<.9995){const P=Math.acos(y),O=Math.sin(P);x=Math.sin(x*P)/O,d=Math.sin(d*P)/O,m=m*x+S*d,p=p*x+M*d,g=g*x+b*d,_=_*x+C*d}else{m=m*x+S*d,p=p*x+M*d,g=g*x+b*d,_=_*x+C*d;const P=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=P,p*=P,g*=P,_*=P}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=u[h],S=u[h+1],M=u[h+2],b=u[h+3];return t[i]=d*b+g*_+m*M-p*S,t[i+1]=m*b+g*S+p*_-d*M,t[i+2]=p*b+g*M+d*S-m*_,t[i+3]=g*b-d*_-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(u/2),S=m(s/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=S*g*_+p*M*b,this._y=p*M*_-S*g*b,this._z=p*g*b+S*M*_,this._w=p*g*_-S*M*b;break;case"YXZ":this._x=S*g*_+p*M*b,this._y=p*M*_-S*g*b,this._z=p*g*b-S*M*_,this._w=p*g*_+S*M*b;break;case"ZXY":this._x=S*g*_-p*M*b,this._y=p*M*_+S*g*b,this._z=p*g*b+S*M*_,this._w=p*g*_-S*M*b;break;case"ZYX":this._x=S*g*_-p*M*b,this._y=p*M*_+S*g*b,this._z=p*g*b-S*M*_,this._w=p*g*_+S*M*b;break;case"YZX":this._x=S*g*_+p*M*b,this._y=p*M*_+S*g*b,this._z=p*g*b-S*M*_,this._w=p*g*_-S*M*b;break;case"XZY":this._x=S*g*_-p*M*b,this._y=p*M*_-S*g*b,this._z=p*g*b+S*M*_,this._w=p*g*_+S*M*b;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],S=s+d+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>_){const M=2*Math.sqrt(1+s-d-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-s-_);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-s*p,this._z=u*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,u=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(pg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(pg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-u*l),_=2*(u*s-h*i);return this.x=i+m*p+h*_-d*g,this.y=s+m*g+d*p-u*_,this.z=l+m*_+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ah.copy(this).projectOnVector(t),this.sub(Ah)}reflect(t){return this.sub(Ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ah=new J,pg=new Bs;class de{constructor(t,i,s,l,u,h,d,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],S=s[2],M=s[5],b=s[8],C=l[0],y=l[3],x=l[6],P=l[1],O=l[4],z=l[7],I=l[2],B=l[5],N=l[8];return u[0]=h*C+d*P+m*I,u[3]=h*y+d*O+m*B,u[6]=h*x+d*z+m*N,u[1]=p*C+g*P+_*I,u[4]=p*y+g*O+_*B,u[7]=p*x+g*z+_*N,u[2]=S*C+M*P+b*I,u[5]=S*y+M*O+b*B,u[8]=S*x+M*z+b*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*u*g+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,S=d*m-g*u,M=p*u-h*m,b=i*_+s*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=_*C,t[1]=(l*p-g*s)*C,t[2]=(d*s-l*h)*C,t[3]=S*C,t[4]=(g*i-l*m)*C,t[5]=(l*u-d*i)*C,t[6]=M*C,t[7]=(s*m-p*i)*C,t[8]=(h*i-s*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Rh.makeScale(t,i)),this}rotate(t){return this.premultiply(Rh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Rh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rh=new de,mg=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_g=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fM(){const r={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===He&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===He&&(l.r=Wr(l.r),l.g=Wr(l.g),l.b=Wr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ss?ac:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return cl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return cl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Zr]:{primaries:t,whitePoint:s,transfer:ac,toXYZ:mg,fromXYZ:_g,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:t,whitePoint:s,transfer:He,toXYZ:mg,fromXYZ:_g,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),r}const Ae=fM();function Ma(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let br;class hM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{br===void 0&&(br=rc("canvas")),br.width=t.width,br.height=t.height;const l=br.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=br}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=rc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ma(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ma(i[s]/255)*255):i[s]=Ma(i[s]);return{data:i,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dM=0;class pp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=ya(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Ch(l[h].image)):u.push(Ch(l[h]))}else u=Ch(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Ch(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let pM=0;const wh=new J;class In extends Hs{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=xa,l=xa,u=zn,h=Os,d=Li,m=Si,p=In.DEFAULT_ANISOTROPY,g=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=ya(),this.name="",this.source=new pp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pd:t.x=t.x-Math.floor(t.x);break;case xa:t.x=t.x<0?0:1;break;case md:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pd:t.y=t.y-Math.floor(t.y);break;case xa:t.y=t.y<0?0:1;break;case md:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Mv;In.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,i=0,s=0,l=1){on.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],g=m[4],_=m[8],S=m[1],M=m[5],b=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(g-S)<.01&&Math.abs(_-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+C)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,z=(M+1)/2,I=(x+1)/2,B=(g+S)/4,N=(_+C)/4,X=(b+y)/4;return O>z&&O>I?O<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(O),l=B/s,u=N/s):z>I?z<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(z),s=B/l,u=X/l):I<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),s=N/u,l=X/u),this.set(s,l,u,i),this}let P=Math.sqrt((y-b)*(y-b)+(_-C)*(_-C)+(S-g)*(S-g));return Math.abs(P)<.001&&(P=1),this.x=(y-b)/P,this.y=(_-C)/P,this.z=(S-g)/P,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mM extends Hs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,t,i),this.scissorTest=!1,this.viewport=new on(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new In(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new pp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends mM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Nv extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _M extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(wi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(wi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=wi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,wi):wi.fromBufferAttribute(u,h),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ru.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ru.copy(s.boundingBox)),Ru.applyMatrix4(t.matrixWorld),this.union(Ru)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jo),Cu.subVectors(this.max,jo),Tr.subVectors(t.a,jo),Ar.subVectors(t.b,jo),Rr.subVectors(t.c,jo),Ja.subVectors(Ar,Tr),$a.subVectors(Rr,Ar),As.subVectors(Tr,Rr);let i=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-As.z,As.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,As.z,0,-As.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-As.y,As.x,0];return!Dh(i,Tr,Ar,Rr,Cu)||(i=[1,0,0,0,1,0,0,0,1],!Dh(i,Tr,Ar,Rr,Cu))?!1:(wu.crossVectors(Ja,$a),i=[wu.x,wu.y,wu.z],Dh(i,Tr,Ar,Rr,Cu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const da=[new J,new J,new J,new J,new J,new J,new J,new J],wi=new J,Ru=new dl,Tr=new J,Ar=new J,Rr=new J,Ja=new J,$a=new J,As=new J,jo=new J,Cu=new J,wu=new J,Rs=new J;function Dh(r,t,i,s,l){for(let u=0,h=r.length-3;u<=h;u+=3){Rs.fromArray(r,u);const d=l.x*Math.abs(Rs.x)+l.y*Math.abs(Rs.y)+l.z*Math.abs(Rs.z),m=t.dot(Rs),p=i.dot(Rs),g=s.dot(Rs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const gM=new dl,Zo=new J,Uh=new J;class cc{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):gM.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zo.subVectors(t,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zo.copy(t.center).add(Uh)),this.expandByPoint(Zo.copy(t.center).sub(Uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const pa=new J,Nh=new J,Du=new J,ts=new J,Lh=new J,Uu=new J,Oh=new J;class fc{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=pa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(pa.copy(this.origin).addScaledVector(this.direction,i),pa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Nh.copy(t).add(i).multiplyScalar(.5),Du.copy(i).sub(t).normalize(),ts.copy(this.origin).sub(Nh);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Du),d=ts.dot(this.direction),m=-ts.dot(Du),p=ts.lengthSq(),g=Math.abs(1-h*h);let _,S,M,b;if(g>0)if(_=h*m-d,S=h*d-m,b=u*g,_>=0)if(S>=-b)if(S<=b){const C=1/g;_*=C,S*=C,M=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=u,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;else S<=-b?(_=Math.max(0,-(-h*u+d)),S=_>0?-u:Math.min(Math.max(-u,-m),u),M=-_*_+S*(S+2*m)+p):S<=b?(_=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(_=Math.max(0,-(h*u+d)),S=_>0?u:Math.min(Math.max(-u,-m),u),M=-_*_+S*(S+2*m)+p);else S=h>0?-u:u,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Nh).addScaledVector(Du,S),M}intersectSphere(t,i){pa.subVectors(t.center,this.origin);const s=pa.dot(this.direction),l=pa.dot(pa)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(u=(t.min.y-S.y)*g,h=(t.max.y-S.y)*g):(u=(t.max.y-S.y)*g,h=(t.min.y-S.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,pa)!==null}intersectTriangle(t,i,s,l,u){Lh.subVectors(i,t),Uu.subVectors(s,t),Oh.crossVectors(Lh,Uu);let h=this.direction.dot(Oh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ts.subVectors(this.origin,t);const m=d*this.direction.dot(Uu.crossVectors(ts,Uu));if(m<0)return null;const p=d*this.direction.dot(Lh.cross(ts));if(p<0||m+p>h)return null;const g=-d*ts.dot(Oh);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,i,s,l,u,h,d,m,p,g,_,S,M,b,C,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,g,_,S,M,b,C,y)}set(t,i,s,l,u,h,d,m,p,g,_,S,M,b,C,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=S,x[3]=M,x[7]=b,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Cr.setFromMatrixColumn(t,0).length(),u=1/Cr.setFromMatrixColumn(t,1).length(),h=1/Cr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const S=h*g,M=h*_,b=d*g,C=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+b*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*g,M=m*_,b=p*g,C=p*_;i[0]=S+C*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=C+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*g,M=m*_,b=p*g,C=p*_;i[0]=S-C*d,i[4]=-h*_,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*g,M=h*_,b=d*g,C=d*_;i[0]=m*g,i[4]=b*p-M,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,M=h*p,b=d*m,C=d*p;i[0]=m*g,i[4]=C-S*_,i[8]=b*_+M,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*_+b,i[10]=S-C*_}else if(t.order==="XZY"){const S=h*m,M=h*p,b=d*m,C=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=S*_+C,i[5]=h*g,i[9]=M*_-b,i[2]=b*_-M,i[6]=d*g,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vM,t,xM)}lookAt(t,i,s){const l=this.elements;return ai.subVectors(t,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),es.crossVectors(s,ai),es.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),es.crossVectors(s,ai)),es.normalize(),Nu.crossVectors(ai,es),l[0]=es.x,l[4]=Nu.x,l[8]=ai.x,l[1]=es.y,l[5]=Nu.y,l[9]=ai.y,l[2]=es.z,l[6]=Nu.z,l[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],S=s[9],M=s[13],b=s[2],C=s[6],y=s[10],x=s[14],P=s[3],O=s[7],z=s[11],I=s[15],B=l[0],N=l[4],X=l[8],T=l[12],w=l[1],G=l[5],Q=l[9],$=l[13],ft=l[2],ot=l[6],L=l[10],F=l[14],nt=l[3],yt=l[7],xt=l[11],U=l[15];return u[0]=h*B+d*w+m*ft+p*nt,u[4]=h*N+d*G+m*ot+p*yt,u[8]=h*X+d*Q+m*L+p*xt,u[12]=h*T+d*$+m*F+p*U,u[1]=g*B+_*w+S*ft+M*nt,u[5]=g*N+_*G+S*ot+M*yt,u[9]=g*X+_*Q+S*L+M*xt,u[13]=g*T+_*$+S*F+M*U,u[2]=b*B+C*w+y*ft+x*nt,u[6]=b*N+C*G+y*ot+x*yt,u[10]=b*X+C*Q+y*L+x*xt,u[14]=b*T+C*$+y*F+x*U,u[3]=P*B+O*w+z*ft+I*nt,u[7]=P*N+O*G+z*ot+I*yt,u[11]=P*X+O*Q+z*L+I*xt,u[15]=P*T+O*$+z*F+I*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],S=t[10],M=t[14],b=t[3],C=t[7],y=t[11],x=t[15],P=m*M-p*S,O=d*M-p*_,z=d*S-m*_,I=h*M-p*g,B=h*S-m*g,N=h*_-d*g;return i*(C*P-y*O+x*z)-s*(b*P-y*I+x*B)+l*(b*O-C*I+x*N)-u*(b*z-C*B+y*N)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],S=t[10],M=t[11],b=t[12],C=t[13],y=t[14],x=t[15],P=_*y*p-C*S*p+C*m*M-d*y*M-_*m*x+d*S*x,O=b*S*p-g*y*p-b*m*M+h*y*M+g*m*x-h*S*x,z=g*C*p-b*_*p+b*d*M-h*C*M-g*d*x+h*_*x,I=b*_*m-g*C*m-b*d*S+h*C*S+g*d*y-h*_*y,B=i*P+s*O+l*z+u*I;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/B;return t[0]=P*N,t[1]=(C*S*u-_*y*u-C*l*M+s*y*M+_*l*x-s*S*x)*N,t[2]=(d*y*u-C*m*u+C*l*p-s*y*p-d*l*x+s*m*x)*N,t[3]=(_*m*u-d*S*u-_*l*p+s*S*p+d*l*M-s*m*M)*N,t[4]=O*N,t[5]=(g*y*u-b*S*u+b*l*M-i*y*M-g*l*x+i*S*x)*N,t[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*x-i*m*x)*N,t[7]=(h*S*u-g*m*u+g*l*p-i*S*p-h*l*M+i*m*M)*N,t[8]=z*N,t[9]=(b*_*u-g*C*u-b*s*M+i*C*M+g*s*x-i*_*x)*N,t[10]=(h*C*u-b*d*u+b*s*p-i*C*p-h*s*x+i*d*x)*N,t[11]=(g*d*u-h*_*u-g*s*p+i*_*p+h*s*M-i*d*M)*N,t[12]=I*N,t[13]=(g*C*l-b*_*l+b*s*S-i*C*S-g*s*y+i*_*y)*N,t[14]=(b*d*l-h*C*l-b*s*m+i*C*m+h*s*y-i*d*y)*N,t[15]=(h*_*l-g*d*l+g*s*m-i*_*m-h*s*S+i*d*S)*N,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,_=d+d,S=u*p,M=u*g,b=u*_,C=h*g,y=h*_,x=d*_,P=m*p,O=m*g,z=m*_,I=s.x,B=s.y,N=s.z;return l[0]=(1-(C+x))*I,l[1]=(M+z)*I,l[2]=(b-O)*I,l[3]=0,l[4]=(M-z)*B,l[5]=(1-(S+x))*B,l[6]=(y+P)*B,l[7]=0,l[8]=(b+O)*N,l[9]=(y-P)*N,l[10]=(1-(S+C))*N,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let u=Cr.set(l[0],l[1],l[2]).length();const h=Cr.set(l[4],l[5],l[6]).length(),d=Cr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Di.copy(this);const p=1/u,g=1/h,_=1/d;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=g,Di.elements[5]*=g,Di.elements[6]*=g,Di.elements[8]*=_,Di.elements[9]*=_,Di.elements[10]*=_,i.setFromRotationMatrix(Di),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=Vi,m=!1){const p=this.elements,g=2*u/(i-t),_=2*u/(s-l),S=(i+t)/(i-t),M=(s+l)/(s-l);let b,C;if(m)b=u/(h-u),C=h*u/(h-u);else if(d===Vi)b=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(d===sc)b=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=Vi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),S=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,C;if(m)b=1/(h-u),C=h/(h-u);else if(d===Vi)b=-2/(h-u),C=-(h+u)/(h-u);else if(d===sc)b=-1/(h-u),C=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Cr=new J,Di=new $e,vM=new J(0,0,0),xM=new J(1,1,1),es=new J,Nu=new J,ai=new J,gg=new $e,vg=new Bs;class Ta{constructor(t=0,i=0,s=0,l=Ta.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(me(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return gg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return vg.setFromEuler(this),this.setFromQuaternion(vg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ta.DEFAULT_ORDER="XYZ";class mp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let SM=0;const xg=new J,wr=new Bs,ma=new $e,Lu=new J,Ko=new J,yM=new J,MM=new Bs,Sg=new J(1,0,0),yg=new J(0,1,0),Mg=new J(0,0,1),Eg={type:"added"},EM={type:"removed"},Dr={type:"childadded",child:null},Ph={type:"childremoved",child:null};class Gn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const t=new J,i=new Ta,s=new Bs,l=new J(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new de}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(Sg,t)}rotateY(t){return this.rotateOnAxis(yg,t)}rotateZ(t){return this.rotateOnAxis(Mg,t)}translateOnAxis(t,i){return xg.copy(t).applyQuaternion(this.quaternion),this.position.add(xg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Sg,t)}translateY(t){return this.translateOnAxis(yg,t)}translateZ(t){return this.translateOnAxis(Mg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Lu.copy(t):Lu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(Ko,Lu,this.up):ma.lookAt(Lu,Ko,this.up),this.quaternion.setFromRotationMatrix(ma),l&&(ma.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(ma),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Eg),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(EM),Ph.child=t,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Eg),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,t,yM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,MM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),S=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Gn.DEFAULT_UP=new J(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new J,_a=new J,zh=new J,ga=new J,Ur=new J,Nr=new J,bg=new J,Ih=new J,Fh=new J,Bh=new J,Hh=new on,Gh=new on,Vh=new on;class yi{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ui.subVectors(t,i),l.cross(Ui);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Ui.subVectors(l,i),_a.subVectors(s,i),zh.subVectors(t,i);const h=Ui.dot(Ui),d=Ui.dot(_a),m=Ui.dot(zh),p=_a.dot(_a),g=_a.dot(zh),_=h*p-d*d;if(_===0)return u.set(0,0,0),null;const S=1/_,M=(p*m-d*g)*S,b=(h*g-d*m)*S;return u.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ga.x),m.addScaledVector(h,ga.y),m.addScaledVector(d,ga.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return Hh.setScalar(0),Gh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(t,i),Gh.fromBufferAttribute(t,s),Vh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Hh,u.x),h.addScaledVector(Gh,u.y),h.addScaledVector(Vh,u.z),h}static isFrontFacing(t,i,s,l){return Ui.subVectors(s,i),_a.subVectors(t,i),Ui.cross(_a).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Ui.cross(_a).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;Ur.subVectors(l,s),Nr.subVectors(u,s),Ih.subVectors(t,s);const m=Ur.dot(Ih),p=Nr.dot(Ih);if(m<=0&&p<=0)return i.copy(s);Fh.subVectors(t,l);const g=Ur.dot(Fh),_=Nr.dot(Fh);if(g>=0&&_<=g)return i.copy(l);const S=m*_-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(Ur,h);Bh.subVectors(t,u);const M=Ur.dot(Bh),b=Nr.dot(Bh);if(b>=0&&M<=b)return i.copy(u);const C=M*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Nr,d);const y=g*b-M*_;if(y<=0&&_-g>=0&&M-b>=0)return bg.subVectors(u,l),d=(_-g)/(_-g+(M-b)),i.copy(l).addScaledVector(bg,d);const x=1/(y+C+S);return h=C*x,d=S*x,i.copy(s).addScaledVector(Ur,h).addScaledVector(Nr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Ou={h:0,s:0,l:0};function kh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Pe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ae.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ae.workingColorSpace){if(t=dp(t,1),i=me(i,0,1),s=me(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=kh(h,u,t+1/3),this.g=kh(h,u,t),this.b=kh(h,u,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,i=vi){function s(u){u!==void 0&&parseFloat(u)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ae("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=vi){const s=Lv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vi){return Ae.workingToColorSpace(Pn.copy(this),t),Math.round(me(Pn.r*255,0,255))*65536+Math.round(me(Pn.g*255,0,255))*256+Math.round(me(Pn.b*255,0,255))}getHexString(t=vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,u=Pn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-s)/_+2;break;case u:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=vi){Ae.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==vi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+i,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ns),t.getHSL(Ou);const s=ol(ns.h,Ou.h,i),l=ol(ns.s,Ou.s,i),u=ol(ns.l,Ou.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Pe;Pe.NAMES=Lv;let bM=0;class Qr extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=ya(),this.name="",this.type="Material",this.blending=Xr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=id,this.blendDst=ad,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ae(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(s.blending=this.blending),this.side!==os&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==id&&(s.blendSrc=this.blendSrc),this.blendDst!==ad&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class _p extends Qr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.combine=pv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new J,Pu=new ne;let TM=0;class ri{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=jd,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Pu.fromBufferAttribute(this,i),Pu.applyMatrix3(t),this.setXY(i,Pu.x,Pu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ni(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Ge(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ni(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ni(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ni(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ni(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Ge(i,this.array),s=Ge(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Ge(i,this.array),s=Ge(s,this.array),l=Ge(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Ge(i,this.array),s=Ge(s,this.array),l=Ge(l,this.array),u=Ge(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jd&&(t.usage=this.usage),t}}class Ov extends ri{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Pv extends ri{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Mi extends ri{constructor(t,i,s){super(new Float32Array(t),i,s)}}let AM=0;const gi=new $e,Xh=new Gn,Lr=new J,si=new dl,Qo=new dl,Sn=new J;class Kn extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dv(t)?Pv:Ov)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new de().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,s){return gi.makeTranslation(t,i,s),this.applyMatrix4(gi),this}scale(t,i,s){return gi.makeScale(t,i,s),this.applyMatrix4(gi),this}lookAt(t){return Xh.lookAt(t),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Mi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];si.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Qo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(si.min,Qo.min),si.expandByPoint(Sn),Sn.addVectors(si.max,Qo.max),si.expandByPoint(Sn)):(si.expandByPoint(Qo.min),si.expandByPoint(Qo.max))}si.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)Sn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Sn.fromBufferAttribute(d,p),m&&(Lr.fromBufferAttribute(t,p),Sn.add(Lr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<s.count;X++)d[X]=new J,m[X]=new J;const p=new J,g=new J,_=new J,S=new ne,M=new ne,b=new ne,C=new J,y=new J;function x(X,T,w){p.fromBufferAttribute(s,X),g.fromBufferAttribute(s,T),_.fromBufferAttribute(s,w),S.fromBufferAttribute(u,X),M.fromBufferAttribute(u,T),b.fromBufferAttribute(u,w),g.sub(p),_.sub(p),M.sub(S),b.sub(S);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(C.copy(g).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(G),y.copy(_).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(G),d[X].add(C),d[T].add(C),d[w].add(C),m[X].add(y),m[T].add(y),m[w].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let X=0,T=P.length;X<T;++X){const w=P[X],G=w.start,Q=w.count;for(let $=G,ft=G+Q;$<ft;$+=3)x(t.getX($+0),t.getX($+1),t.getX($+2))}const O=new J,z=new J,I=new J,B=new J;function N(X){I.fromBufferAttribute(l,X),B.copy(I);const T=d[X];O.copy(T),O.sub(I.multiplyScalar(I.dot(T))).normalize(),z.crossVectors(B,T);const G=z.dot(m[X])<0?-1:1;h.setXYZW(X,O.x,O.y,O.z,G)}for(let X=0,T=P.length;X<T;++X){const w=P[X],G=w.start,Q=w.count;for(let $=G,ft=G+Q;$<ft;$+=3)N(t.getX($+0)),N(t.getX($+1)),N(t.getX($+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ri(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new J,u=new J,h=new J,d=new J,m=new J,p=new J,g=new J,_=new J;if(t)for(let S=0,M=t.count;S<M;S+=3){const b=t.getX(S+0),C=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),g.subVectors(h,u),_.subVectors(l,u),g.cross(_),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),_.subVectors(l,u),g.cross(_),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,S=new p.constructor(m.length*g);let M=0,b=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*g;for(let x=0;x<g;x++)S[b++]=p[M++]}return new ri(S,g,_)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Kn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,_=p.length;g<_;g++){const S=p[g],M=t(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,S=p.length;_<S;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],_=u[p];for(let S=0,M=_.length;S<M;S++)g.push(_[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tg=new $e,Cs=new fc,zu=new cc,Ag=new J,Iu=new J,Fu=new J,Bu=new J,Wh=new J,Hu=new J,Rg=new J,Gu=new J;class Yi extends Gn{constructor(t=new Kn,i=new _p){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Hu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],_=u[m];g!==0&&(Wh.fromBufferAttribute(_,t),h?Hu.addScaledVector(Wh,g):Hu.addScaledVector(Wh.sub(i),g))}i.add(Hu)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),zu.copy(s.boundingSphere),zu.applyMatrix4(u),Cs.copy(t.ray).recast(t.near),!(zu.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(zu,Ag)===null||Cs.origin.distanceToSquared(Ag)>(t.far-t.near)**2))&&(Tg.copy(u).invert(),Cs.copy(t.ray).applyMatrix4(Tg),!(s.boundingBox!==null&&Cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Cs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const y=S[b],x=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let z=P,I=O;z<I;z+=3){const B=d.getX(z),N=d.getX(z+1),X=d.getX(z+2);l=Vu(this,x,t,s,p,g,_,B,N,X),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=b,x=C;y<x;y+=3){const P=d.getX(y),O=d.getX(y+1),z=d.getX(y+2);l=Vu(this,h,t,s,p,g,_,P,O,z),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const y=S[b],x=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let z=P,I=O;z<I;z+=3){const B=z,N=z+1,X=z+2;l=Vu(this,x,t,s,p,g,_,B,N,X),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=b,x=C;y<x;y+=3){const P=y,O=y+1,z=y+2;l=Vu(this,h,t,s,p,g,_,P,O,z),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function RM(r,t,i,s,l,u,h,d){let m;if(t.side===Zn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===os,d),m===null)return null;Gu.copy(d),Gu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Gu);return p<i.near||p>i.far?null:{distance:p,point:Gu.clone(),object:r}}function Vu(r,t,i,s,l,u,h,d,m,p){r.getVertexPosition(d,Iu),r.getVertexPosition(m,Fu),r.getVertexPosition(p,Bu);const g=RM(r,t,i,s,Iu,Fu,Bu,Rg);if(g){const _=new J;yi.getBarycoord(Rg,Iu,Fu,Bu,_),l&&(g.uv=yi.getInterpolatedAttribute(l,d,m,p,_,new ne)),u&&(g.uv1=yi.getInterpolatedAttribute(u,d,m,p,_,new ne)),h&&(g.normal=yi.getInterpolatedAttribute(h,d,m,p,_,new J),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new J,materialIndex:0};yi.getNormal(Iu,Fu,Bu,S.normal),g.face=S,g.barycoord=_}return g}class pl extends Kn{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],_=[];let S=0,M=0;b("z","y","x",-1,-1,s,i,t,h,u,0),b("z","y","x",1,-1,s,i,-t,h,u,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,u,4),b("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Mi(p,3)),this.setAttribute("normal",new Mi(g,3)),this.setAttribute("uv",new Mi(_,2));function b(C,y,x,P,O,z,I,B,N,X,T){const w=z/N,G=I/X,Q=z/2,$=I/2,ft=B/2,ot=N+1,L=X+1;let F=0,nt=0;const yt=new J;for(let xt=0;xt<L;xt++){const U=xt*G-$;for(let at=0;at<ot;at++){const mt=at*w-Q;yt[C]=mt*P,yt[y]=U*O,yt[x]=ft,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[y]=0,yt[x]=B>0?1:-1,g.push(yt.x,yt.y,yt.z),_.push(at/N),_.push(1-xt/X),F+=1}}for(let xt=0;xt<X;xt++)for(let U=0;U<N;U++){const at=S+U+ot*xt,mt=S+U+ot*(xt+1),At=S+(U+1)+ot*(xt+1),Ht=S+(U+1)+ot*xt;m.push(at,mt,Ht),m.push(mt,At,Ht),nt+=6}d.addGroup(M,nt,T),M+=nt,S+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Kr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(r){const t={};for(let i=0;i<r.length;i++){const s=Kr(r[i]);for(const l in s)t[l]=s[l]}return t}function CM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function zv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const wM={clone:Kr,merge:Hn};var DM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Qr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DM,this.fragmentShader=UM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kr(t.uniforms),this.uniformsGroups=CM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Iv extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new J,Cg=new ne,wg=new ne;class xi extends Iv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=fl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fl*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,i){return this.getViewBounds(t,Cg,wg),i.subVectors(wg,Cg)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(rl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Or=-90,Pr=1;class NM extends Gn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new xi(Or,Pr,t,i);l.layers=this.layers,this.add(l);const u=new xi(Or,Pr,t,i);u.layers=this.layers,this.add(u);const h=new xi(Or,Pr,t,i);h.layers=this.layers,this.add(h);const d=new xi(Or,Pr,t,i);d.layers=this.layers,this.add(d);const m=new xi(Or,Pr,t,i);m.layers=this.layers,this.add(m);const p=new xi(Or,Pr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===sc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,S,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Fv extends In{constructor(t=[],i=Fs,s,l,u,h,d,m,p,g){super(t,i,s,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bv extends Xi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Fv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new pl(5,5,5),u=new qi({name:"CubemapFromEquirect",uniforms:Kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:Sa});u.uniforms.tEquirect.value=i;const h=new Yi(l,u),d=i.minFilter;return i.minFilter===Os&&(i.minFilter=zn),new NM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}let zs=class extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}};const LM={type:"move"};class Yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,s),x=this._getHandJoint(p,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=g.position.distanceTo(_.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(LM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new zs;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class OM extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ta,this.environmentIntensity=1,this.environmentRotation=new Ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class PM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=jd,this.updateRanges=[],this.version=0,this.uuid=ya()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ya()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ya()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new J;class lc{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Ni(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Ge(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=Ge(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ni(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ni(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ni(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ni(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ge(i,this.array),s=Ge(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ge(i,this.array),s=Ge(s,this.array),l=Ge(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ge(i,this.array),s=Ge(s,this.array),l=Ge(l,this.array),u=Ge(u,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=u,this}clone(t){if(t===void 0){oc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new ri(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){oc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Zd extends Qr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zr;const Jo=new J,Ir=new J,Fr=new J,Br=new ne,$o=new ne,Hv=new $e,ku=new J,tl=new J,Xu=new J,Dg=new ne,qh=new ne,Ug=new ne;class Ng extends Gn{constructor(t=new Zd){if(super(),this.isSprite=!0,this.type="Sprite",zr===void 0){zr=new Kn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new PM(i,5);zr.setIndex([0,1,2,0,2,3]),zr.setAttribute("position",new lc(s,3,0,!1)),zr.setAttribute("uv",new lc(s,2,3,!1))}this.geometry=zr,this.material=t,this.center=new ne(.5,.5),this.count=1}raycast(t,i){t.camera===null&&be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ir.setFromMatrixScale(this.matrixWorld),Hv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ir.multiplyScalar(-Fr.z);const s=this.material.rotation;let l,u;s!==0&&(u=Math.cos(s),l=Math.sin(s));const h=this.center;Wu(ku.set(-.5,-.5,0),Fr,h,Ir,l,u),Wu(tl.set(.5,-.5,0),Fr,h,Ir,l,u),Wu(Xu.set(.5,.5,0),Fr,h,Ir,l,u),Dg.set(0,0),qh.set(1,0),Ug.set(1,1);let d=t.ray.intersectTriangle(ku,tl,Xu,!1,Jo);if(d===null&&(Wu(tl.set(-.5,.5,0),Fr,h,Ir,l,u),qh.set(0,1),d=t.ray.intersectTriangle(ku,Xu,tl,!1,Jo),d===null))return;const m=t.ray.origin.distanceTo(Jo);m<t.near||m>t.far||i.push({distance:m,point:Jo.clone(),uv:yi.getInterpolation(Jo,ku,tl,Xu,Dg,qh,Ug,new ne),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Wu(r,t,i,s,l,u){Br.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?($o.x=u*Br.x-l*Br.y,$o.y=l*Br.x+u*Br.y):$o.copy(Br),r.copy(t),r.x+=$o.x,r.y+=$o.y,r.applyMatrix4(Hv)}class zM extends In{constructor(t=null,i=1,s=1,l,u,h,d,m,p=Un,g=Un,_,S){super(null,h,d,m,p,g,l,u,_,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jh=new J,IM=new J,FM=new de;class as{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=jh.subVectors(s,i).cross(IM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(jh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||FM.getNormalMatrix(t),l=this.coplanarPoint(jh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new cc,BM=new ne(.5,.5),Yu=new J;class Gv{constructor(t=new as,i=new as,s=new as,l=new as,u=new as,h=new as){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Vi,s=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],g=u[4],_=u[5],S=u[6],M=u[7],b=u[8],C=u[9],y=u[10],x=u[11],P=u[12],O=u[13],z=u[14],I=u[15];if(l[0].setComponents(p-h,M-g,x-b,I-P).normalize(),l[1].setComponents(p+h,M+g,x+b,I+P).normalize(),l[2].setComponents(p+d,M+_,x+C,I+O).normalize(),l[3].setComponents(p-d,M-_,x-C,I-O).normalize(),s)l[4].setComponents(m,S,y,z).normalize(),l[5].setComponents(p-m,M-S,x-y,I-z).normalize();else if(l[4].setComponents(p-m,M-S,x-y,I-z).normalize(),i===Vi)l[5].setComponents(p+m,M+S,x+y,I+z).normalize();else if(i===sc)l[5].setComponents(m,S,y,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){ws.center.set(0,0,0);const i=BM.distanceTo(t.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Yu.x=l.normal.x>0?t.max.x:t.min.x,Yu.y=l.normal.y>0?t.max.y:t.min.y,Yu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Yu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kd extends Qr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lg=new $e,Qd=new fc,qu=new cc,ju=new J;class Og extends Gn{constructor(t=new Kn,i=new Kd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),qu.copy(s.boundingSphere),qu.applyMatrix4(l),qu.radius+=u,t.ray.intersectsSphere(qu)===!1)return;Lg.copy(l).invert(),Qd.copy(t.ray).applyMatrix4(Lg);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,_=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=S,C=M;b<C;b++){const y=p.getX(b);ju.fromBufferAttribute(_,y),Pg(ju,y,m,l,t,i,this)}}else{const S=Math.max(0,h.start),M=Math.min(_.count,h.start+h.count);for(let b=S,C=M;b<C;b++)ju.fromBufferAttribute(_,b),Pg(ju,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Pg(r,t,i,s,l,u,h){const d=Qd.distanceSqToPoint(r);if(d<i){const m=new J;Qd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class HM extends In{constructor(t,i,s,l,u,h,d,m,p){super(t,i,s,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hl extends In{constructor(t,i,s=Wi,l,u,h,d=Un,m=Un,p,g=ba,_=1){if(g!==ba&&g!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,u,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class GM extends hl{constructor(t,i=Wi,s=Fs,l,u,h=Un,d=Un,m,p=ba){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,u,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Vv extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class hc extends Kn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,S=i/m,M=[],b=[],C=[],y=[];for(let x=0;x<g;x++){const P=x*S-h;for(let O=0;O<p;O++){const z=O*_-u;b.push(z,-P,0),C.push(0,0,1),y.push(O/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<d;P++){const O=P+p*x,z=P+p*(x+1),I=P+1+p*(x+1),B=P+1+p*x;M.push(O,z,B),M.push(z,I,B)}this.setIndex(M),this.setAttribute("position",new Mi(b,3)),this.setAttribute("normal",new Mi(C,3)),this.setAttribute("uv",new Mi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hc(t.width,t.height,t.widthSegments,t.heightSegments)}}class gp extends Kn{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],_=new J,S=new J,M=[],b=[],C=[],y=[];for(let x=0;x<=s;x++){const P=[],O=x/s;let z=0;x===0&&h===0?z=.5/i:x===s&&m===Math.PI&&(z=-.5/i);for(let I=0;I<=i;I++){const B=I/i;_.x=-t*Math.cos(l+B*u)*Math.sin(h+O*d),_.y=t*Math.cos(h+O*d),_.z=t*Math.sin(l+B*u)*Math.sin(h+O*d),b.push(_.x,_.y,_.z),S.copy(_).normalize(),C.push(S.x,S.y,S.z),y.push(B+z,1-O),P.push(p++)}g.push(P)}for(let x=0;x<s;x++)for(let P=0;P<i;P++){const O=g[x][P+1],z=g[x][P],I=g[x+1][P],B=g[x+1][P+1];(x!==0||h>0)&&M.push(O,z,B),(x!==s-1||m<Math.PI)&&M.push(z,I,B)}this.setIndex(M),this.setAttribute("position",new Mi(b,3)),this.setAttribute("normal",new Mi(C,3)),this.setAttribute("uv",new Mi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class VM extends qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kM extends Qr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class XM extends Qr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class kv extends Iv{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class WM extends xi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const zg=new $e;class YM{constructor(t,i,s=0,l=1/0){this.ray=new fc(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new mp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):be("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return zg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zg),this}intersectObject(t,i=!0,s=[]){return Jd(t,this,s,i),s.sort(Ig),s}intersectObjects(t,i=!0,s=[]){for(let l=0,u=t.length;l<u;l++)Jd(t[l],this,s,i);return s.sort(Ig),s}}function Ig(r,t){return r.distance-t.distance}function Jd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const u=r.children;for(let h=0,d=u.length;h<d;h++)Jd(u[h],t,i,!0)}}class Fg{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class qM extends Hs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ae("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Bg(r,t,i,s){const l=jM(s);switch(i){case Rv:return r*t;case wv:return r*t/l.components*l.byteLength;case lp:return r*t/l.components*l.byteLength;case jr:return r*t*2/l.components*l.byteLength;case up:return r*t*2/l.components*l.byteLength;case Cv:return r*t*3/l.components*l.byteLength;case Li:return r*t*4/l.components*l.byteLength;case cp:return r*t*4/l.components*l.byteLength;case $u:case tc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ec:case nc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gd:case xd:return Math.max(r,16)*Math.max(t,8)/4;case _d:case vd:return Math.max(r,8)*Math.max(t,8)/2;case Sd:case yd:case Ed:case bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Md:case Td:case Ad:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case wd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Od:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Pd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Bd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Gd:case Vd:case kd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Xd:case Wd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Yd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function jM(r){switch(r){case Si:case Ev:return{byteLength:1,components:1};case ll:case bv:case Ea:return{byteLength:2,components:1};case rp:case op:return{byteLength:2,components:4};case Wi:case sp:case Gi:return{byteLength:4,components:1};case Tv:case Av:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xv(){let r=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function ZM(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,S=r.createBuffer();r.bindBuffer(m,S),r.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<_.length;M++){const b=_[S],C=_[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++S,_[S]=C)}_.length=S+1;for(let M=0,b=_.length;M<b;M++){const C=_[M];r.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var KM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QM=`#ifdef USE_ALPHAHASH
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
#endif`,JM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nE=`#ifdef USE_AOMAP
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
#endif`,iE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aE=`#ifdef USE_BATCHING
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
#endif`,sE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uE=`#ifdef USE_IRIDESCENCE
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
#endif`,cE=`#ifdef USE_BUMPMAP
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
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xE=`#define PI 3.141592653589793
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
} // validated`,SE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yE=`vec3 transformedNormal = objectNormal;
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
#endif`,ME=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AE="gl_FragColor = linearToOutputTexel( gl_FragColor );",RE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CE=`#ifdef USE_ENVMAP
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
#endif`,wE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
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
#endif`,UE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
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
#endif`,LE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IE=`#ifdef USE_GRADIENTMAP
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
}`,FE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GE=`uniform bool receiveShadow;
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
#endif`,VE=`#ifdef USE_ENVMAP
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
#endif`,kE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qE=`PhysicalMaterial material;
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
#endif`,jE=`uniform sampler2D dfgLUT;
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
}`,ZE=`
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
#endif`,KE=`#if defined( RE_IndirectDiffuse )
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
#endif`,QE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sb=`#if defined( USE_POINTS_UV )
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
#endif`,rb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ub=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fb=`#ifdef USE_MORPHTARGETS
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
#endif`,hb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vb=`#ifdef USE_NORMALMAP
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
#endif`,xb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Db=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ob=`float getShadowMask() {
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
}`,Pb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zb=`#ifdef USE_SKINNING
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
#endif`,Ib=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fb=`#ifdef USE_SKINNING
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
#endif`,Bb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kb=`#ifdef USE_TRANSMISSION
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
#endif`,Xb=`#ifdef USE_TRANSMISSION
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
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kb=`uniform sampler2D t2D;
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
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`#include <common>
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
}`,nT=`#if DEPTH_PACKING == 3200
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
}`,iT=`#define DISTANCE
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
}`,aT=`#define DISTANCE
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
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`uniform float scale;
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
}`,lT=`uniform vec3 diffuse;
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
}`,uT=`#include <common>
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
}`,cT=`uniform vec3 diffuse;
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
}`,fT=`#define LAMBERT
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
}`,hT=`#define LAMBERT
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
}`,dT=`#define MATCAP
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
}`,pT=`#define MATCAP
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
}`,mT=`#define NORMAL
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
}`,_T=`#define NORMAL
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
}`,gT=`#define PHONG
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
}`,vT=`#define PHONG
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
}`,xT=`#define STANDARD
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
}`,ST=`#define STANDARD
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
}`,yT=`#define TOON
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
}`,MT=`#define TOON
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
}`,ET=`uniform float size;
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
}`,bT=`uniform vec3 diffuse;
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
}`,TT=`#include <common>
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
}`,AT=`uniform vec3 color;
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
}`,RT=`uniform float rotation;
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
}`,CT=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:KM,alphahash_pars_fragment:QM,alphamap_fragment:JM,alphamap_pars_fragment:$M,alphatest_fragment:tE,alphatest_pars_fragment:eE,aomap_fragment:nE,aomap_pars_fragment:iE,batching_pars_vertex:aE,batching_vertex:sE,begin_vertex:rE,beginnormal_vertex:oE,bsdfs:lE,iridescence_fragment:uE,bumpmap_pars_fragment:cE,clipping_planes_fragment:fE,clipping_planes_pars_fragment:hE,clipping_planes_pars_vertex:dE,clipping_planes_vertex:pE,color_fragment:mE,color_pars_fragment:_E,color_pars_vertex:gE,color_vertex:vE,common:xE,cube_uv_reflection_fragment:SE,defaultnormal_vertex:yE,displacementmap_pars_vertex:ME,displacementmap_vertex:EE,emissivemap_fragment:bE,emissivemap_pars_fragment:TE,colorspace_fragment:AE,colorspace_pars_fragment:RE,envmap_fragment:CE,envmap_common_pars_fragment:wE,envmap_pars_fragment:DE,envmap_pars_vertex:UE,envmap_physical_pars_fragment:VE,envmap_vertex:NE,fog_vertex:LE,fog_pars_vertex:OE,fog_fragment:PE,fog_pars_fragment:zE,gradientmap_pars_fragment:IE,lightmap_pars_fragment:FE,lights_lambert_fragment:BE,lights_lambert_pars_fragment:HE,lights_pars_begin:GE,lights_toon_fragment:kE,lights_toon_pars_fragment:XE,lights_phong_fragment:WE,lights_phong_pars_fragment:YE,lights_physical_fragment:qE,lights_physical_pars_fragment:jE,lights_fragment_begin:ZE,lights_fragment_maps:KE,lights_fragment_end:QE,logdepthbuf_fragment:JE,logdepthbuf_pars_fragment:$E,logdepthbuf_pars_vertex:tb,logdepthbuf_vertex:eb,map_fragment:nb,map_pars_fragment:ib,map_particle_fragment:ab,map_particle_pars_fragment:sb,metalnessmap_fragment:rb,metalnessmap_pars_fragment:ob,morphinstance_vertex:lb,morphcolor_vertex:ub,morphnormal_vertex:cb,morphtarget_pars_vertex:fb,morphtarget_vertex:hb,normal_fragment_begin:db,normal_fragment_maps:pb,normal_pars_fragment:mb,normal_pars_vertex:_b,normal_vertex:gb,normalmap_pars_fragment:vb,clearcoat_normal_fragment_begin:xb,clearcoat_normal_fragment_maps:Sb,clearcoat_pars_fragment:yb,iridescence_pars_fragment:Mb,opaque_fragment:Eb,packing:bb,premultiplied_alpha_fragment:Tb,project_vertex:Ab,dithering_fragment:Rb,dithering_pars_fragment:Cb,roughnessmap_fragment:wb,roughnessmap_pars_fragment:Db,shadowmap_pars_fragment:Ub,shadowmap_pars_vertex:Nb,shadowmap_vertex:Lb,shadowmask_pars_fragment:Ob,skinbase_vertex:Pb,skinning_pars_vertex:zb,skinning_vertex:Ib,skinnormal_vertex:Fb,specularmap_fragment:Bb,specularmap_pars_fragment:Hb,tonemapping_fragment:Gb,tonemapping_pars_fragment:Vb,transmission_fragment:kb,transmission_pars_fragment:Xb,uv_pars_fragment:Wb,uv_pars_vertex:Yb,uv_vertex:qb,worldpos_vertex:jb,background_vert:Zb,background_frag:Kb,backgroundCube_vert:Qb,backgroundCube_frag:Jb,cube_vert:$b,cube_frag:tT,depth_vert:eT,depth_frag:nT,distance_vert:iT,distance_frag:aT,equirect_vert:sT,equirect_frag:rT,linedashed_vert:oT,linedashed_frag:lT,meshbasic_vert:uT,meshbasic_frag:cT,meshlambert_vert:fT,meshlambert_frag:hT,meshmatcap_vert:dT,meshmatcap_frag:pT,meshnormal_vert:mT,meshnormal_frag:_T,meshphong_vert:gT,meshphong_frag:vT,meshphysical_vert:xT,meshphysical_frag:ST,meshtoon_vert:yT,meshtoon_frag:MT,points_vert:ET,points_frag:bT,shadow_vert:TT,shadow_frag:AT,sprite_vert:RT,sprite_frag:CT},zt={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Hi={basic:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Hn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Hn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Hn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Hn([zt.points,zt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Hn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Hn([zt.common,zt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Hn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Hn([zt.sprite,zt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:Hn([zt.common,zt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:Hn([zt.lights,zt.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Hi.physical={uniforms:Hn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Zu={r:0,b:0,g:0},Ds=new Ta,wT=new $e;function DT(r,t,i,s,l,u,h){const d=new Pe(0);let m=u===!0?0:1,p,g,_=null,S=0,M=null;function b(O){let z=O.isScene===!0?O.background:null;return z&&z.isTexture&&(z=(O.backgroundBlurriness>0?i:t).get(z)),z}function C(O){let z=!1;const I=b(O);I===null?x(d,m):I&&I.isColor&&(x(I,1),z=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||z)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(O,z){const I=b(z);I&&(I.isCubeTexture||I.mapping===uc)?(g===void 0&&(g=new Yi(new pl(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Kr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,N,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ds.copy(z.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(wT.makeRotationFromEuler(Ds)),g.material.toneMapped=Ae.getTransfer(I.colorSpace)!==He,(_!==I||S!==I.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,_=I,S=I.version,M=r.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Yi(new hc(2,2),new qi({name:"BackgroundMaterial",uniforms:Kr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(I.colorSpace)!==He,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||S!==I.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,_=I,S=I.version,M=r.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function x(O,z){O.getRGB(Zu,zv(r)),s.buffers.color.setClear(Zu.r,Zu.g,Zu.b,z,h)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,z=1){d.set(O),m=z,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,x(d,m)},render:C,addToRenderList:y,dispose:P}}function UT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(w,G,Q,$,ft){let ot=!1;const L=_($,Q,G);u!==L&&(u=L,p(u.object)),ot=M(w,$,Q,ft),ot&&b(w,$,Q,ft),ft!==null&&t.update(ft,r.ELEMENT_ARRAY_BUFFER),(ot||h)&&(h=!1,z(w,G,Q,$),ft!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,G,Q){const $=Q.wireframe===!0;let ft=s[w.id];ft===void 0&&(ft={},s[w.id]=ft);let ot=ft[G.id];ot===void 0&&(ot={},ft[G.id]=ot);let L=ot[$];return L===void 0&&(L=S(m()),ot[$]=L),L}function S(w){const G=[],Q=[],$=[];for(let ft=0;ft<i;ft++)G[ft]=0,Q[ft]=0,$[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Q,attributeDivisors:$,object:w,attributes:{},index:null}}function M(w,G,Q,$){const ft=u.attributes,ot=G.attributes;let L=0;const F=Q.getAttributes();for(const nt in F)if(F[nt].location>=0){const xt=ft[nt];let U=ot[nt];if(U===void 0&&(nt==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),nt==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),xt===void 0||xt.attribute!==U||U&&xt.data!==U.data)return!0;L++}return u.attributesNum!==L||u.index!==$}function b(w,G,Q,$){const ft={},ot=G.attributes;let L=0;const F=Q.getAttributes();for(const nt in F)if(F[nt].location>=0){let xt=ot[nt];xt===void 0&&(nt==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),nt==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor));const U={};U.attribute=xt,xt&&xt.data&&(U.data=xt.data),ft[nt]=U,L++}u.attributes=ft,u.attributesNum=L,u.index=$}function C(){const w=u.newAttributes;for(let G=0,Q=w.length;G<Q;G++)w[G]=0}function y(w){x(w,0)}function x(w,G){const Q=u.newAttributes,$=u.enabledAttributes,ft=u.attributeDivisors;Q[w]=1,$[w]===0&&(r.enableVertexAttribArray(w),$[w]=1),ft[w]!==G&&(r.vertexAttribDivisor(w,G),ft[w]=G)}function P(){const w=u.newAttributes,G=u.enabledAttributes;for(let Q=0,$=G.length;Q<$;Q++)G[Q]!==w[Q]&&(r.disableVertexAttribArray(Q),G[Q]=0)}function O(w,G,Q,$,ft,ot,L){L===!0?r.vertexAttribIPointer(w,G,Q,ft,ot):r.vertexAttribPointer(w,G,Q,$,ft,ot)}function z(w,G,Q,$){C();const ft=$.attributes,ot=Q.getAttributes(),L=G.defaultAttributeValues;for(const F in ot){const nt=ot[F];if(nt.location>=0){let yt=ft[F];if(yt===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const xt=yt.normalized,U=yt.itemSize,at=t.get(yt);if(at===void 0)continue;const mt=at.buffer,At=at.type,Ht=at.bytesPerElement,it=At===r.INT||At===r.UNSIGNED_INT||yt.gpuType===sp;if(yt.isInterleavedBufferAttribute){const Y=yt.data,vt=Y.stride,Ut=yt.offset;if(Y.isInstancedInterleavedBuffer){for(let Ot=0;Ot<nt.locationSize;Ot++)x(nt.location+Ot,Y.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ot=0;Ot<nt.locationSize;Ot++)y(nt.location+Ot);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let Ot=0;Ot<nt.locationSize;Ot++)O(nt.location+Ot,U/nt.locationSize,At,xt,vt*Ht,(Ut+U/nt.locationSize*Ot)*Ht,it)}else{if(yt.isInstancedBufferAttribute){for(let Y=0;Y<nt.locationSize;Y++)x(nt.location+Y,yt.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Y=0;Y<nt.locationSize;Y++)y(nt.location+Y);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let Y=0;Y<nt.locationSize;Y++)O(nt.location+Y,U/nt.locationSize,At,xt,U*Ht,U/nt.locationSize*Y*Ht,it)}}else if(L!==void 0){const xt=L[F];if(xt!==void 0)switch(xt.length){case 2:r.vertexAttrib2fv(nt.location,xt);break;case 3:r.vertexAttrib3fv(nt.location,xt);break;case 4:r.vertexAttrib4fv(nt.location,xt);break;default:r.vertexAttrib1fv(nt.location,xt)}}}}P()}function I(){X();for(const w in s){const G=s[w];for(const Q in G){const $=G[Q];for(const ft in $)g($[ft].object),delete $[ft];delete G[Q]}delete s[w]}}function B(w){if(s[w.id]===void 0)return;const G=s[w.id];for(const Q in G){const $=G[Q];for(const ft in $)g($[ft].object),delete $[ft];delete G[Q]}delete s[w.id]}function N(w){for(const G in s){const Q=s[G];if(Q[w.id]===void 0)continue;const $=Q[w.id];for(const ft in $)g($[ft].object),delete $[ft];delete Q[w.id]}}function X(){T(),h=!0,u!==l&&(u=l,p(u.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:B,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:y,disableUnusedAttributes:P}}function NT(r,t,i){let s;function l(p){s=p}function u(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let M=0;for(let b=0;b<_;b++)M+=g[b];i.update(M,s,1)}function m(p,g,_,S){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],g[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,S,0,_);let b=0;for(let C=0;C<_;C++)b+=g[C]*S[C];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function LT(r,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(N){return!(N!==Li&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const X=N===Ea&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Si&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Gi&&!X)}function m(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(ae("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),z=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:z,maxSamples:I,samples:B}}function OT(r){const t=this;let i=null,s=0,l=!1,u=!1;const h=new as,d=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||s!==0||l;return l=S,s=_.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=g(_,S,0)},this.setState=function(_,S,M){const b=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,x=r.get(_);if(!l||b===null||b.length===0||u&&!y)u?g(null):p();else{const P=u?0:s,O=P*4;let z=x.clippingState||null;m.value=z,z=g(b,S,O,M);for(let I=0;I!==O;++I)z[I]=i[I];x.clippingState=z,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,S,M,b){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,b!==!0||y===null){const x=M+C*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<x)&&(y=new Float32Array(x));for(let O=0,z=M;O!==C;++O,z+=4)h.copy(_[O]).applyMatrix4(P,d),h.normal.toArray(y,z),y[z+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}function PT(r){let t=new WeakMap;function i(h,d){return d===hd?h.mapping=Fs:d===dd&&(h.mapping=qr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===hd||d===dd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Bv(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const rs=4,Hg=[.125,.215,.35,.446,.526,.582],Ls=20,zT=256,el=new kv,Gg=new Pe;let Zh=null,Kh=0,Qh=0,Jh=!1;const IT=new J;class Vg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=IT}=u;Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zh,Kh,Qh),this._renderer.xr.enabled=Jh,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Fs||t.mapping===qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ea,format:Li,colorSpace:Zr,depthBuffer:!1},l=kg(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kg(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FT(u)),this._blurMaterial=HT(u,t,i),this._ggxMaterial=BT(u,t,i)}return l}_compileMaterial(t){const i=new Yi(new Kn,t);this._renderer.compile(i,el)}_sceneToCubeUV(t,i,s,l,u){const m=new xi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(Gg),_.toneMapping=ki,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yi(new pl,new _p({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const P=t.background;P?P.isColor&&(y.color.copy(P),t.background=null,x=!0):(y.color.copy(Gg),x=!0);for(let O=0;O<6;O++){const z=O%3;z===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[O],u.y,u.z)):z===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[O]));const I=this._cubeSize;Hr(l,z*I,O>2?I:0,I,I),_.setRenderTarget(l),x&&_.render(C,m),_.render(t,m)}_.toneMapping=M,_.autoClear=S,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Fs||t.mapping===qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Hr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,el)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),S=0+p*1.25,M=_*S,{_lodMax:b}=this,C=this._sizeLods[s],y=3*C*(s>b-rs?s-b+rs:0),x=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Hr(u,y,x,3*C,2*C),l.setRenderTarget(u),l.render(d,el),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-s,Hr(t,y,x,3*C,2*C),l.setRenderTarget(t),l.render(d,el)}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&be("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Ls-1),C=u/b,y=isFinite(u)?1+Math.floor(g*C):Ls;y>Ls&&ae(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ls}`);const x=[];let P=0;for(let N=0;N<Ls;++N){const X=N/C,T=Math.exp(-X*X/2);x.push(T),N===0?P+=T:N<y&&(P+=2*T)}for(let N=0;N<x.length;N++)x[N]=x[N]/P;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=b,S.mipInt.value=O-s;const z=this._sizeLods[l],I=3*z*(l>O-rs?l-O+rs:0),B=4*(this._cubeSize-z);Hr(i,I,B,3*z,2*z),m.setRenderTarget(i),m.render(_,el)}}function FT(r){const t=[],i=[],s=[];let l=r;const u=r-rs+1+Hg.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-rs?m=Hg[h-r+rs-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,S=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,b=6,C=3,y=2,x=1,P=new Float32Array(C*b*M),O=new Float32Array(y*b*M),z=new Float32Array(x*b*M);for(let B=0;B<M;B++){const N=B%3*2/3-1,X=B>2?0:-1,T=[N,X,0,N+2/3,X,0,N+2/3,X+1,0,N,X,0,N+2/3,X+1,0,N,X+1,0];P.set(T,C*b*B),O.set(S,y*b*B);const w=[B,B,B,B,B,B];z.set(w,x*b*B)}const I=new Kn;I.setAttribute("position",new ri(P,C)),I.setAttribute("uv",new ri(O,y)),I.setAttribute("faceIndex",new ri(z,x)),s.push(new Yi(I,null)),l>rs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function kg(r,t,i){const s=new Xi(r,t,i);return s.texture.mapping=uc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Hr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function BT(r,t,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function HT(r,t,i){const s=new Float32Array(Ls),l=new J(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:dc(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Xg(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Wg(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function dc(){return`

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
	`}function GT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===hd||m===dd,g=m===Fs||m===qr;if(p||g){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Vg(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Vg(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function VT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&cl("WebGLRenderer: "+s+" extension not supported."),l}}}function kT(r,t,i,s){const l={},u=new WeakMap;function h(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(t.remove(M),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const M in S)t.update(S[M],r.ARRAY_BUFFER)}function p(_){const S=[],M=_.index,b=_.attributes.position;let C=0;if(M!==null){const P=M.array;C=M.version;for(let O=0,z=P.length;O<z;O+=3){const I=P[O+0],B=P[O+1],N=P[O+2];S.push(I,B,B,N,N,I)}}else if(b!==void 0){const P=b.array;C=b.version;for(let O=0,z=P.length/3-1;O<z;O+=3){const I=O+0,B=O+1,N=O+2;S.push(I,B,B,N,N,I)}}else return;const y=new(Dv(S)?Pv:Ov)(S,1);y.version=C;const x=u.get(_);x&&t.remove(x),u.set(_,y)}function g(_){const S=u.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&p(_)}else p(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function XT(r,t,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){r.drawElements(s,M,u,S*h),i.update(M,s,1)}function p(S,M,b){b!==0&&(r.drawElementsInstanced(s,M,u,S*h,b),i.update(M,s,b))}function g(S,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,S,0,b);let y=0;for(let x=0;x<b;x++)y+=M[x];i.update(y,s,1)}function _(S,M,b,C){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/h,M[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,S,0,C,0,b);let x=0;for(let P=0;P<b;P++)x+=M[P]*C[P];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function WT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(u/3);break;case r.LINES:i.lines+=d*(u/2);break;case r.LINE_STRIP:i.lines+=d*(u-1);break;case r.LINE_LOOP:i.lines+=d*u;break;case r.POINTS:i.points+=d*u;break;default:be("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function YT(r,t,i){const s=new WeakMap,l=new on;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let S=s.get(d);if(S===void 0||S.count!==_){let w=function(){X.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var M=w;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let z=0;b===!0&&(z=1),C===!0&&(z=2),y===!0&&(z=3);let I=d.attributes.position.count*z,B=1;I>t.maxTextureSize&&(B=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const N=new Float32Array(I*B*4*_),X=new Nv(N,I,B,_);X.type=Gi,X.needsUpdate=!0;const T=z*4;for(let G=0;G<_;G++){const Q=x[G],$=P[G],ft=O[G],ot=I*B*4*G;for(let L=0;L<Q.count;L++){const F=L*T;b===!0&&(l.fromBufferAttribute(Q,L),N[ot+F+0]=l.x,N[ot+F+1]=l.y,N[ot+F+2]=l.z,N[ot+F+3]=0),C===!0&&(l.fromBufferAttribute($,L),N[ot+F+4]=l.x,N[ot+F+5]=l.y,N[ot+F+6]=l.z,N[ot+F+7]=0),y===!0&&(l.fromBufferAttribute(ft,L),N[ot+F+8]=l.x,N[ot+F+9]=l.y,N[ot+F+10]=l.z,N[ot+F+11]=ft.itemSize===4?l.w:1)}}S={count:_,texture:X,size:new ne(I,B)},s.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:u}}function qT(r,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const jT={[mv]:"LINEAR_TONE_MAPPING",[_v]:"REINHARD_TONE_MAPPING",[gv]:"CINEON_TONE_MAPPING",[vv]:"ACES_FILMIC_TONE_MAPPING",[Sv]:"AGX_TONE_MAPPING",[yv]:"NEUTRAL_TONE_MAPPING",[xv]:"CUSTOM_TONE_MAPPING"};function ZT(r,t,i,s,l){const u=new Xi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new Xi(t,i,{type:Ea,depthBuffer:!1,stencilBuffer:!1}),d=new Kn;d.setAttribute("position",new Mi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Mi([0,2,0,0,2,0],2));const m=new VM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Yi(d,m),g=new kv(-1,1,1,-1,0,1);let _=null,S=null,M=!1,b,C=null,y=[],x=!1;this.setSize=function(P,O){u.setSize(P,O),h.setSize(P,O);for(let z=0;z<y.length;z++){const I=y[z];I.setSize&&I.setSize(P,O)}},this.setEffects=function(P){y=P,x=y.length>0&&y[0].isRenderPass===!0;const O=u.width,z=u.height;for(let I=0;I<y.length;I++){const B=y[I];B.setSize&&B.setSize(O,z)}},this.begin=function(P,O){if(M||P.toneMapping===ki&&y.length===0)return!1;if(C=O,O!==null){const z=O.width,I=O.height;(u.width!==z||u.height!==I)&&this.setSize(z,I)}return x===!1&&P.setRenderTarget(u),b=P.toneMapping,P.toneMapping=ki,!0},this.hasRenderPass=function(){return x},this.end=function(P,O){P.toneMapping=b,M=!0;let z=u,I=h;for(let B=0;B<y.length;B++){const N=y[B];if(N.enabled!==!1&&(N.render(P,I,z,O),N.needsSwap!==!1)){const X=z;z=I,I=X}}if(_!==P.outputColorSpace||S!==P.toneMapping){_=P.outputColorSpace,S=P.toneMapping,m.defines={},Ae.getTransfer(_)===He&&(m.defines.SRGB_TRANSFER="");const B=jT[S];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=z.texture,P.setRenderTarget(C),P.render(p,g),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Wv=new In,$d=new hl(1,1),Yv=new Nv,qv=new _M,jv=new Fv,Yg=[],qg=[],jg=new Float32Array(16),Zg=new Float32Array(9),Kg=new Float32Array(4);function Jr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let u=Yg[l];if(u===void 0&&(u=new Float32Array(l),Yg[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(u,d)}return u}function gn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function pc(r,t){let i=qg[t];i===void 0&&(i=new Int32Array(t),qg[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function KT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function QT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2fv(this.addr,t),vn(i,t)}}function JT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;r.uniform3fv(this.addr,t),vn(i,t)}}function $T(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4fv(this.addr,t),vn(i,t)}}function t1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,s))return;Kg.set(s),r.uniformMatrix2fv(this.addr,!1,Kg),vn(i,s)}}function e1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,s))return;Zg.set(s),r.uniformMatrix3fv(this.addr,!1,Zg),vn(i,s)}}function n1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,s))return;jg.set(s),r.uniformMatrix4fv(this.addr,!1,jg),vn(i,s)}}function i1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function a1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2iv(this.addr,t),vn(i,t)}}function s1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;r.uniform3iv(this.addr,t),vn(i,t)}}function r1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4iv(this.addr,t),vn(i,t)}}function o1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function l1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2uiv(this.addr,t),vn(i,t)}}function u1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;r.uniform3uiv(this.addr,t),vn(i,t)}}function c1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4uiv(this.addr,t),vn(i,t)}}function f1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?($d.compareFunction=i.isReversedDepthBuffer()?hp:fp,u=$d):u=Wv,i.setTexture2D(t||u,l)}function h1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||qv,l)}function d1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||jv,l)}function p1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Yv,l)}function m1(r){switch(r){case 5126:return KT;case 35664:return QT;case 35665:return JT;case 35666:return $T;case 35674:return t1;case 35675:return e1;case 35676:return n1;case 5124:case 35670:return i1;case 35667:case 35671:return a1;case 35668:case 35672:return s1;case 35669:case 35673:return r1;case 5125:return o1;case 36294:return l1;case 36295:return u1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return d1;case 36289:case 36303:case 36311:case 36292:return p1}}function _1(r,t){r.uniform1fv(this.addr,t)}function g1(r,t){const i=Jr(t,this.size,2);r.uniform2fv(this.addr,i)}function v1(r,t){const i=Jr(t,this.size,3);r.uniform3fv(this.addr,i)}function x1(r,t){const i=Jr(t,this.size,4);r.uniform4fv(this.addr,i)}function S1(r,t){const i=Jr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function y1(r,t){const i=Jr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function M1(r,t){const i=Jr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function E1(r,t){r.uniform1iv(this.addr,t)}function b1(r,t){r.uniform2iv(this.addr,t)}function T1(r,t){r.uniform3iv(this.addr,t)}function A1(r,t){r.uniform4iv(this.addr,t)}function R1(r,t){r.uniform1uiv(this.addr,t)}function C1(r,t){r.uniform2uiv(this.addr,t)}function w1(r,t){r.uniform3uiv(this.addr,t)}function D1(r,t){r.uniform4uiv(this.addr,t)}function U1(r,t,i){const s=this.cache,l=t.length,u=pc(i,l);gn(s,u)||(r.uniform1iv(this.addr,u),vn(s,u));let h;this.type===r.SAMPLER_2D_SHADOW?h=$d:h=Wv;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,u[d])}function N1(r,t,i){const s=this.cache,l=t.length,u=pc(i,l);gn(s,u)||(r.uniform1iv(this.addr,u),vn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||qv,u[h])}function L1(r,t,i){const s=this.cache,l=t.length,u=pc(i,l);gn(s,u)||(r.uniform1iv(this.addr,u),vn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||jv,u[h])}function O1(r,t,i){const s=this.cache,l=t.length,u=pc(i,l);gn(s,u)||(r.uniform1iv(this.addr,u),vn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Yv,u[h])}function P1(r){switch(r){case 5126:return _1;case 35664:return g1;case 35665:return v1;case 35666:return x1;case 35674:return S1;case 35675:return y1;case 35676:return M1;case 5124:case 35670:return E1;case 35667:case 35671:return b1;case 35668:case 35672:return T1;case 35669:case 35673:return A1;case 5125:return R1;case 36294:return C1;case 36295:return w1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return N1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return O1}}class z1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=m1(i.type)}}class I1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=P1(i.type)}}class F1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const $h=/(\w+)(\])?(\[|\.)?/g;function Qg(r,t){r.seq.push(t),r.map[t.id]=t}function B1(r,t,i){const s=r.name,l=s.length;for($h.lastIndex=0;;){const u=$h.exec(s),h=$h.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Qg(i,p===void 0?new z1(d,r,t):new I1(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new F1(d),Qg(i,_)),i=_}}}class ic{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);B1(d,m,this)}const l=[],u=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Jg(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const H1=37297;let G1=0;function V1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const $g=new de;function k1(r){Ae._getMatrix($g,Ae.workingColorSpace,r);const t=`mat3( ${$g.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(r)){case ac:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function tv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),u=(r.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+V1(r.getShaderSource(t),d)}else return u}function X1(r,t){const i=k1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const W1={[mv]:"Linear",[_v]:"Reinhard",[gv]:"Cineon",[vv]:"ACESFilmic",[Sv]:"AgX",[yv]:"Neutral",[xv]:"Custom"};function Y1(r,t){const i=W1[t];return i===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ku=new J;function q1(){Ae.getLuminanceCoefficients(Ku);const r=Ku.x.toFixed(4),t=Ku.y.toFixed(4),i=Ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function Z1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function K1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(t,l),h=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function al(r){return r!==""}function ev(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(r){return r.replace(Q1,$1)}const J1=new Map;function $1(r,t){let i=pe[t];if(i===void 0){const s=J1.get(t);if(s!==void 0)i=pe[s],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return tp(i)}const tA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iv(r){return r.replace(tA,eA)}function eA(r,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function av(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const nA={[Ju]:"SHADOWMAP_TYPE_PCF",[il]:"SHADOWMAP_TYPE_VSM"};function iA(r){return nA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aA={[Fs]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE",[uc]:"ENVMAP_TYPE_CUBE_UV"};function sA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":aA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const rA={[qr]:"ENVMAP_MODE_REFRACTION"};function oA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":rA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lA={[pv]:"ENVMAP_BLENDING_MULTIPLY",[Py]:"ENVMAP_BLENDING_MIX",[zy]:"ENVMAP_BLENDING_ADD"};function uA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":lA[r.combine]||"ENVMAP_BLENDING_NONE"}function cA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function fA(r,t,i,s){const l=r.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=iA(i),p=sA(i),g=oA(i),_=uA(i),S=cA(i),M=j1(i),b=Z1(u),C=l.createProgram();let y,x,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(al).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(al).join(`
`),x.length>0&&(x+=`
`)):(y=[av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),x=[av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?pe.tonemapping_pars_fragment:"",i.toneMapping!==ki?Y1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,X1("linearToOutputTexel",i.outputColorSpace),q1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(al).join(`
`)),h=tp(h),h=ev(h,i),h=nv(h,i),d=tp(d),d=ev(d,i),d=nv(d,i),h=iv(h),d=iv(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const O=P+y+h,z=P+x+d,I=Jg(l,l.VERTEX_SHADER,O),B=Jg(l,l.FRAGMENT_SHADER,z);l.attachShader(C,I),l.attachShader(C,B),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function N(G){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(C)||"",$=l.getShaderInfoLog(I)||"",ft=l.getShaderInfoLog(B)||"",ot=Q.trim(),L=$.trim(),F=ft.trim();let nt=!0,yt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(nt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,I,B);else{const xt=tv(l,I,"vertex"),U=tv(l,B,"fragment");be("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ot+`
`+xt+`
`+U)}else ot!==""?ae("WebGLProgram: Program Info Log:",ot):(L===""||F==="")&&(yt=!1);yt&&(G.diagnostics={runnable:nt,programLog:ot,vertexShader:{log:L,prefix:y},fragmentShader:{log:F,prefix:x}})}l.deleteShader(I),l.deleteShader(B),X=new ic(l,C),T=K1(l,C)}let X;this.getUniforms=function(){return X===void 0&&N(this),X};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,H1)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=G1++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=B,this}let hA=0;class dA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new pA(t),i.set(t,s)),s}}class pA{constructor(t){this.id=hA++,this.code=t,this.usedTimes=0}}function mA(r,t,i,s,l,u,h){const d=new mp,m=new dA,p=new Set,g=[],_=new Map,S=l.logarithmicDepthBuffer;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(T){return p.add(T),T===0?"uv":`uv${T}`}function y(T,w,G,Q,$){const ft=Q.fog,ot=$.geometry,L=T.isMeshStandardMaterial?Q.environment:null,F=(T.isMeshStandardMaterial?i:t).get(T.envMap||L),nt=F&&F.mapping===uc?F.image.height:null,yt=b[T.type];T.precision!==null&&(M=l.getMaxPrecision(T.precision),M!==T.precision&&ae("WebGLProgram.getParameters:",T.precision,"not supported, using",M,"instead."));const xt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,U=xt!==void 0?xt.length:0;let at=0;ot.morphAttributes.position!==void 0&&(at=1),ot.morphAttributes.normal!==void 0&&(at=2),ot.morphAttributes.color!==void 0&&(at=3);let mt,At,Ht,it;if(yt){const Te=Hi[yt];mt=Te.vertexShader,At=Te.fragmentShader}else mt=T.vertexShader,At=T.fragmentShader,m.update(T),Ht=m.getVertexShaderID(T),it=m.getFragmentShaderID(T);const Y=r.getRenderTarget(),vt=r.state.buffers.depth.getReversed(),Ut=$.isInstancedMesh===!0,Ot=$.isBatchedMesh===!0,ce=!!T.map,tn=!!T.matcap,xe=!!F,_e=!!T.aoMap,we=!!T.lightMap,oe=!!T.bumpMap,en=!!T.normalMap,V=!!T.displacementMap,Ke=!!T.emissiveMap,Ee=!!T.metalnessMap,Le=!!T.roughnessMap,qt=T.anisotropy>0,D=T.clearcoat>0,E=T.dispersion>0,q=T.iridescence>0,dt=T.sheen>0,St=T.transmission>0,ct=qt&&!!T.anisotropyMap,Zt=D&&!!T.clearcoatMap,wt=D&&!!T.clearcoatNormalMap,Xt=D&&!!T.clearcoatRoughnessMap,ee=q&&!!T.iridescenceMap,Et=q&&!!T.iridescenceThicknessMap,bt=dt&&!!T.sheenColorMap,Bt=dt&&!!T.sheenRoughnessMap,It=!!T.specularMap,Dt=!!T.specularColorMap,fe=!!T.specularIntensityMap,W=St&&!!T.transmissionMap,Lt=St&&!!T.thicknessMap,Tt=!!T.gradientMap,Ft=!!T.alphaMap,Mt=T.alphaTest>0,gt=!!T.alphaHash,Rt=!!T.extensions;let ie=ki;T.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ie=r.toneMapping);const ze={shaderID:yt,shaderType:T.type,shaderName:T.name,vertexShader:mt,fragmentShader:At,defines:T.defines,customVertexShaderID:Ht,customFragmentShaderID:it,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:M,batching:Ot,batchingColor:Ot&&$._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&$.instanceColor!==null,instancingMorph:Ut&&$.morphTexture!==null,outputColorSpace:Y===null?r.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Zr,alphaToCoverage:!!T.alphaToCoverage,map:ce,matcap:tn,envMap:xe,envMapMode:xe&&F.mapping,envMapCubeUVHeight:nt,aoMap:_e,lightMap:we,bumpMap:oe,normalMap:en,displacementMap:V,emissiveMap:Ke,normalMapObjectSpace:en&&T.normalMapType===Hy,normalMapTangentSpace:en&&T.normalMapType===By,metalnessMap:Ee,roughnessMap:Le,anisotropy:qt,anisotropyMap:ct,clearcoat:D,clearcoatMap:Zt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:q,iridescenceMap:ee,iridescenceThicknessMap:Et,sheen:dt,sheenColorMap:bt,sheenRoughnessMap:Bt,specularMap:It,specularColorMap:Dt,specularIntensityMap:fe,transmission:St,transmissionMap:W,thicknessMap:Lt,gradientMap:Tt,opaque:T.transparent===!1&&T.blending===Xr&&T.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Mt,alphaHash:gt,combine:T.combine,mapUv:ce&&C(T.map.channel),aoMapUv:_e&&C(T.aoMap.channel),lightMapUv:we&&C(T.lightMap.channel),bumpMapUv:oe&&C(T.bumpMap.channel),normalMapUv:en&&C(T.normalMap.channel),displacementMapUv:V&&C(T.displacementMap.channel),emissiveMapUv:Ke&&C(T.emissiveMap.channel),metalnessMapUv:Ee&&C(T.metalnessMap.channel),roughnessMapUv:Le&&C(T.roughnessMap.channel),anisotropyMapUv:ct&&C(T.anisotropyMap.channel),clearcoatMapUv:Zt&&C(T.clearcoatMap.channel),clearcoatNormalMapUv:wt&&C(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&C(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&C(T.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&C(T.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&C(T.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&C(T.sheenRoughnessMap.channel),specularMapUv:It&&C(T.specularMap.channel),specularColorMapUv:Dt&&C(T.specularColorMap.channel),specularIntensityMapUv:fe&&C(T.specularIntensityMap.channel),transmissionMapUv:W&&C(T.transmissionMap.channel),thicknessMapUv:Lt&&C(T.thicknessMap.channel),alphaMapUv:Ft&&C(T.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(en||qt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ot.attributes.uv&&(ce||Ft),fog:!!ft,useFog:T.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:vt,skinning:$.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:at,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:ce&&T.map.isVideoTexture===!0&&Ae.getTransfer(T.map.colorSpace)===He,decodeVideoTextureEmissive:Ke&&T.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(T.emissiveMap.colorSpace)===He,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===va,flipSided:T.side===Zn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Rt&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&T.extensions.multiDraw===!0||Ot)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ze.vertexUv1s=p.has(1),ze.vertexUv2s=p.has(2),ze.vertexUv3s=p.has(3),p.clear(),ze}function x(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)w.push(G),w.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(P(w,T),O(w,T),w.push(r.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function P(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function O(T,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),T.push(d.mask)}function z(T){const w=b[T.type];let G;if(w){const Q=Hi[w];G=wM.clone(Q.uniforms)}else G=T.uniforms;return G}function I(T,w){let G=_.get(w);return G!==void 0?++G.usedTimes:(G=new fA(r,w,T,u),g.push(G),_.set(w,G)),G}function B(T){if(--T.usedTimes===0){const w=g.indexOf(T);g[w]=g[g.length-1],g.pop(),_.delete(T.cacheKey),T.destroy()}}function N(T){m.remove(T)}function X(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:z,acquireProgram:I,releaseProgram:B,releaseShaderCache:N,programs:g,dispose:X}}function _A(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function u(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function gA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function sv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function rv(){const r=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(_,S,M,b,C,y){let x=r[t];return x===void 0?(x={id:_.id,object:_,geometry:S,material:M,groupOrder:b,renderOrder:_.renderOrder,z:C,group:y},r[t]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=M,x.groupOrder=b,x.renderOrder=_.renderOrder,x.z=C,x.group=y),t++,x}function d(_,S,M,b,C,y){const x=h(_,S,M,b,C,y);M.transmission>0?s.push(x):M.transparent===!0?l.push(x):i.push(x)}function m(_,S,M,b,C,y){const x=h(_,S,M,b,C,y);M.transmission>0?s.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||gA),s.length>1&&s.sort(S||sv),l.length>1&&l.sort(S||sv)}function g(){for(let _=t,S=r.length;_<S;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function vA(){let r=new WeakMap;function t(s,l){const u=r.get(s);let h;return u===void 0?(h=new rv,r.set(s,[h])):l>=u.length?(h=new rv,u.push(h)):h=u[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function xA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new Pe};break;case"SpotLight":i={position:new J,direction:new J,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":i={color:new Pe,position:new J,halfWidth:new J,halfHeight:new J};break}return r[t.id]=i,i}}}function SA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let yA=0;function MA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function EA(r){const t=new xA,i=SA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,u=new $e,h=new $e;function d(p){let g=0,_=0,S=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let M=0,b=0,C=0,y=0,x=0,P=0,O=0,z=0,I=0,B=0,N=0;p.sort(MA);for(let T=0,w=p.length;T<w;T++){const G=p[T],Q=G.color,$=G.intensity,ft=G.distance;let ot=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===jr?ot=G.shadow.map.texture:ot=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=Q.r*$,_+=Q.g*$,S+=Q.b*$;else if(G.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(G.sh.coefficients[L],$);N++}else if(G.isDirectionalLight){const L=t.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const F=G.shadow,nt=i.get(G);nt.shadowIntensity=F.intensity,nt.shadowBias=F.bias,nt.shadowNormalBias=F.normalBias,nt.shadowRadius=F.radius,nt.shadowMapSize=F.mapSize,s.directionalShadow[M]=nt,s.directionalShadowMap[M]=ot,s.directionalShadowMatrix[M]=G.shadow.matrix,P++}s.directional[M]=L,M++}else if(G.isSpotLight){const L=t.get(G);L.position.setFromMatrixPosition(G.matrixWorld),L.color.copy(Q).multiplyScalar($),L.distance=ft,L.coneCos=Math.cos(G.angle),L.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),L.decay=G.decay,s.spot[C]=L;const F=G.shadow;if(G.map&&(s.spotLightMap[I]=G.map,I++,F.updateMatrices(G),G.castShadow&&B++),s.spotLightMatrix[C]=F.matrix,G.castShadow){const nt=i.get(G);nt.shadowIntensity=F.intensity,nt.shadowBias=F.bias,nt.shadowNormalBias=F.normalBias,nt.shadowRadius=F.radius,nt.shadowMapSize=F.mapSize,s.spotShadow[C]=nt,s.spotShadowMap[C]=ot,z++}C++}else if(G.isRectAreaLight){const L=t.get(G);L.color.copy(Q).multiplyScalar($),L.halfWidth.set(G.width*.5,0,0),L.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=L,y++}else if(G.isPointLight){const L=t.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),L.distance=G.distance,L.decay=G.decay,G.castShadow){const F=G.shadow,nt=i.get(G);nt.shadowIntensity=F.intensity,nt.shadowBias=F.bias,nt.shadowNormalBias=F.normalBias,nt.shadowRadius=F.radius,nt.shadowMapSize=F.mapSize,nt.shadowCameraNear=F.camera.near,nt.shadowCameraFar=F.camera.far,s.pointShadow[b]=nt,s.pointShadowMap[b]=ot,s.pointShadowMatrix[b]=G.shadow.matrix,O++}s.point[b]=L,b++}else if(G.isHemisphereLight){const L=t.get(G);L.skyColor.copy(G.color).multiplyScalar($),L.groundColor.copy(G.groundColor).multiplyScalar($),s.hemi[x]=L,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=zt.LTC_FLOAT_1,s.rectAreaLTC2=zt.LTC_FLOAT_2):(s.rectAreaLTC1=zt.LTC_HALF_1,s.rectAreaLTC2=zt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=S;const X=s.hash;(X.directionalLength!==M||X.pointLength!==b||X.spotLength!==C||X.rectAreaLength!==y||X.hemiLength!==x||X.numDirectionalShadows!==P||X.numPointShadows!==O||X.numSpotShadows!==z||X.numSpotMaps!==I||X.numLightProbes!==N)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=z,s.spotShadowMap.length=z,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=z+I-B,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=N,X.directionalLength=M,X.pointLength=b,X.spotLength=C,X.rectAreaLength=y,X.hemiLength=x,X.numDirectionalShadows=P,X.numPointShadows=O,X.numSpotShadows=z,X.numSpotMaps=I,X.numLightProbes=N,s.version=yA++)}function m(p,g){let _=0,S=0,M=0,b=0,C=0;const y=g.matrixWorldInverse;for(let x=0,P=p.length;x<P;x++){const O=p[x];if(O.isDirectionalLight){const z=s.directional[_];z.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(y),_++}else if(O.isSpotLight){const z=s.spot[M];z.position.setFromMatrixPosition(O.matrixWorld),z.position.applyMatrix4(y),z.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const z=s.rectArea[b];z.position.setFromMatrixPosition(O.matrixWorld),z.position.applyMatrix4(y),h.identity(),u.copy(O.matrixWorld),u.premultiply(y),h.extractRotation(u),z.halfWidth.set(O.width*.5,0,0),z.halfHeight.set(0,O.height*.5,0),z.halfWidth.applyMatrix4(h),z.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const z=s.point[S];z.position.setFromMatrixPosition(O.matrixWorld),z.position.applyMatrix4(y),S++}else if(O.isHemisphereLight){const z=s.hemi[C];z.direction.setFromMatrixPosition(O.matrixWorld),z.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:s}}function ov(r){const t=new EA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function bA(r){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new ov(r),t.set(l,[d])):u>=h.length?(d=new ov(r),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const TA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AA=`uniform sampler2D shadow_pass;
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
}`,RA=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],CA=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],lv=new $e,nl=new J,td=new J;function wA(r,t,i){let s=new Gv;const l=new ne,u=new ne,h=new on,d=new kM,m=new XM,p={},g=i.maxTextureSize,_={[os]:Zn,[Zn]:os,[va]:va},S=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:TA,fragmentShader:AA}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Kn;b.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Yi(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let x=this.type;this.render=function(B,N,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;B.type===_y&&(ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Ju);const T=r.getRenderTarget(),w=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(Sa),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const $=x!==this.type;$&&N.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(ot=>ot.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,ot=B.length;ft<ot;ft++){const L=B[ft],F=L.shadow;if(F===void 0){ae("WebGLShadowMap:",L,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const nt=F.getFrameExtents();if(l.multiply(nt),u.copy(F.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/nt.x),l.x=u.x*nt.x,F.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/nt.y),l.y=u.y*nt.y,F.mapSize.y=u.y)),F.map===null||$===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===il){if(L.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Xi(l.x,l.y,{format:jr,type:Ea,minFilter:zn,magFilter:zn,generateMipmaps:!1}),F.map.texture.name=L.name+".shadowMap",F.map.depthTexture=new hl(l.x,l.y,Gi),F.map.depthTexture.name=L.name+".shadowMapDepth",F.map.depthTexture.format=ba,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Un,F.map.depthTexture.magFilter=Un}else{L.isPointLight?(F.map=new Bv(l.x),F.map.depthTexture=new GM(l.x,Wi)):(F.map=new Xi(l.x,l.y),F.map.depthTexture=new hl(l.x,l.y,Wi)),F.map.depthTexture.name=L.name+".shadowMap",F.map.depthTexture.format=ba;const xt=r.state.buffers.depth.getReversed();this.type===Ju?(F.map.depthTexture.compareFunction=xt?hp:fp,F.map.depthTexture.minFilter=zn,F.map.depthTexture.magFilter=zn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Un,F.map.depthTexture.magFilter=Un)}F.camera.updateProjectionMatrix()}const yt=F.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<yt;xt++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,xt),r.clear();else{xt===0&&(r.setRenderTarget(F.map),r.clear());const U=F.getViewport(xt);h.set(u.x*U.x,u.y*U.y,u.x*U.z,u.y*U.w),Q.viewport(h)}if(L.isPointLight){const U=F.camera,at=F.matrix,mt=L.distance||U.far;mt!==U.far&&(U.far=mt,U.updateProjectionMatrix()),nl.setFromMatrixPosition(L.matrixWorld),U.position.copy(nl),td.copy(U.position),td.add(RA[xt]),U.up.copy(CA[xt]),U.lookAt(td),U.updateMatrixWorld(),at.makeTranslation(-nl.x,-nl.y,-nl.z),lv.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),F._frustum.setFromProjectionMatrix(lv,U.coordinateSystem,U.reversedDepth)}else F.updateMatrices(L);s=F.getFrustum(),z(N,X,F.camera,L,this.type)}F.isPointLightShadow!==!0&&this.type===il&&P(F,X),F.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(T,w,G)};function P(B,N){const X=t.update(C);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Xi(l.x,l.y,{format:jr,type:Ea})),S.uniforms.shadow_pass.value=B.map.depthTexture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(N,null,X,S,C,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(N,null,X,M,C,null)}function O(B,N,X,T){let w=null;const G=X.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)w=G;else if(w=X.isPointLight===!0?m:d,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const Q=w.uuid,$=N.uuid;let ft=p[Q];ft===void 0&&(ft={},p[Q]=ft);let ot=ft[$];ot===void 0&&(ot=w.clone(),ft[$]=ot,N.addEventListener("dispose",I)),w=ot}if(w.visible=N.visible,w.wireframe=N.wireframe,T===il?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:_[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Q=r.properties.get(w);Q.light=X}return w}function z(B,N,X,T,w){if(B.visible===!1)return;if(B.layers.test(N.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===il)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,B.matrixWorld);const $=t.update(B),ft=B.material;if(Array.isArray(ft)){const ot=$.groups;for(let L=0,F=ot.length;L<F;L++){const nt=ot[L],yt=ft[nt.materialIndex];if(yt&&yt.visible){const xt=O(B,yt,T,w);B.onBeforeShadow(r,B,N,X,$,xt,nt),r.renderBufferDirect(X,null,$,xt,B,nt),B.onAfterShadow(r,B,N,X,$,xt,nt)}}}else if(ft.visible){const ot=O(B,ft,T,w);B.onBeforeShadow(r,B,N,X,$,ot,null),r.renderBufferDirect(X,null,$,ot,B,null),B.onAfterShadow(r,B,N,X,$,ot,null)}}const Q=B.children;for(let $=0,ft=Q.length;$<ft;$++)z(Q[$],N,X,T,w)}function I(B){B.target.removeEventListener("dispose",I);for(const X in p){const T=p[X],w=B.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}const DA={[sd]:rd,[od]:cd,[ld]:fd,[Yr]:ud,[rd]:sd,[cd]:od,[fd]:ld,[ud]:Yr};function UA(r,t){function i(){let W=!1;const Lt=new on;let Tt=null;const Ft=new on(0,0,0,0);return{setMask:function(Mt){Tt!==Mt&&!W&&(r.colorMask(Mt,Mt,Mt,Mt),Tt=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,gt,Rt,ie,ze){ze===!0&&(Mt*=ie,gt*=ie,Rt*=ie),Lt.set(Mt,gt,Rt,ie),Ft.equals(Lt)===!1&&(r.clearColor(Mt,gt,Rt,ie),Ft.copy(Lt))},reset:function(){W=!1,Tt=null,Ft.set(-1,0,0,0)}}}function s(){let W=!1,Lt=!1,Tt=null,Ft=null,Mt=null;return{setReversed:function(gt){if(Lt!==gt){const Rt=t.get("EXT_clip_control");gt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Lt=gt;const ie=Mt;Mt=null,this.setClear(ie)}},getReversed:function(){return Lt},setTest:function(gt){gt?Y(r.DEPTH_TEST):vt(r.DEPTH_TEST)},setMask:function(gt){Tt!==gt&&!W&&(r.depthMask(gt),Tt=gt)},setFunc:function(gt){if(Lt&&(gt=DA[gt]),Ft!==gt){switch(gt){case sd:r.depthFunc(r.NEVER);break;case rd:r.depthFunc(r.ALWAYS);break;case od:r.depthFunc(r.LESS);break;case Yr:r.depthFunc(r.LEQUAL);break;case ld:r.depthFunc(r.EQUAL);break;case ud:r.depthFunc(r.GEQUAL);break;case cd:r.depthFunc(r.GREATER);break;case fd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ft=gt}},setLocked:function(gt){W=gt},setClear:function(gt){Mt!==gt&&(Lt&&(gt=1-gt),r.clearDepth(gt),Mt=gt)},reset:function(){W=!1,Tt=null,Ft=null,Mt=null,Lt=!1}}}function l(){let W=!1,Lt=null,Tt=null,Ft=null,Mt=null,gt=null,Rt=null,ie=null,ze=null;return{setTest:function(Te){W||(Te?Y(r.STENCIL_TEST):vt(r.STENCIL_TEST))},setMask:function(Te){Lt!==Te&&!W&&(r.stencilMask(Te),Lt=Te)},setFunc:function(Te,Nn,Ei){(Tt!==Te||Ft!==Nn||Mt!==Ei)&&(r.stencilFunc(Te,Nn,Ei),Tt=Te,Ft=Nn,Mt=Ei)},setOp:function(Te,Nn,Ei){(gt!==Te||Rt!==Nn||ie!==Ei)&&(r.stencilOp(Te,Nn,Ei),gt=Te,Rt=Nn,ie=Ei)},setLocked:function(Te){W=Te},setClear:function(Te){ze!==Te&&(r.clearStencil(Te),ze=Te)},reset:function(){W=!1,Lt=null,Tt=null,Ft=null,Mt=null,gt=null,Rt=null,ie=null,ze=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},S=new WeakMap,M=[],b=null,C=!1,y=null,x=null,P=null,O=null,z=null,I=null,B=null,N=new Pe(0,0,0),X=0,T=!1,w=null,G=null,Q=null,$=null,ft=null;const ot=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,F=0;const nt=r.getParameter(r.VERSION);nt.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(nt)[1]),L=F>=1):nt.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),L=F>=2);let yt=null,xt={};const U=r.getParameter(r.SCISSOR_BOX),at=r.getParameter(r.VIEWPORT),mt=new on().fromArray(U),At=new on().fromArray(at);function Ht(W,Lt,Tt,Ft){const Mt=new Uint8Array(4),gt=r.createTexture();r.bindTexture(W,gt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Rt=0;Rt<Tt;Rt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Lt,0,r.RGBA,1,1,Ft,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(Lt+Rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return gt}const it={};it[r.TEXTURE_2D]=Ht(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Y(r.DEPTH_TEST),h.setFunc(Yr),oe(!1),en(og),Y(r.CULL_FACE),_e(Sa);function Y(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function vt(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Ut(W,Lt){return _[W]!==Lt?(r.bindFramebuffer(W,Lt),_[W]=Lt,W===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Lt),W===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Ot(W,Lt){let Tt=M,Ft=!1;if(W){Tt=S.get(Lt),Tt===void 0&&(Tt=[],S.set(Lt,Tt));const Mt=W.textures;if(Tt.length!==Mt.length||Tt[0]!==r.COLOR_ATTACHMENT0){for(let gt=0,Rt=Mt.length;gt<Rt;gt++)Tt[gt]=r.COLOR_ATTACHMENT0+gt;Tt.length=Mt.length,Ft=!0}}else Tt[0]!==r.BACK&&(Tt[0]=r.BACK,Ft=!0);Ft&&r.drawBuffers(Tt)}function ce(W){return b!==W?(r.useProgram(W),b=W,!0):!1}const tn={[Ns]:r.FUNC_ADD,[vy]:r.FUNC_SUBTRACT,[xy]:r.FUNC_REVERSE_SUBTRACT};tn[Sy]=r.MIN,tn[yy]=r.MAX;const xe={[My]:r.ZERO,[Ey]:r.ONE,[by]:r.SRC_COLOR,[id]:r.SRC_ALPHA,[Dy]:r.SRC_ALPHA_SATURATE,[Cy]:r.DST_COLOR,[Ay]:r.DST_ALPHA,[Ty]:r.ONE_MINUS_SRC_COLOR,[ad]:r.ONE_MINUS_SRC_ALPHA,[wy]:r.ONE_MINUS_DST_COLOR,[Ry]:r.ONE_MINUS_DST_ALPHA,[Uy]:r.CONSTANT_COLOR,[Ny]:r.ONE_MINUS_CONSTANT_COLOR,[Ly]:r.CONSTANT_ALPHA,[Oy]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(W,Lt,Tt,Ft,Mt,gt,Rt,ie,ze,Te){if(W===Sa){C===!0&&(vt(r.BLEND),C=!1);return}if(C===!1&&(Y(r.BLEND),C=!0),W!==gy){if(W!==y||Te!==T){if((x!==Ns||z!==Ns)&&(r.blendEquation(r.FUNC_ADD),x=Ns,z=Ns),Te)switch(W){case Xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vr:r.blendFunc(r.ONE,r.ONE);break;case lg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ug:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:be("WebGLState: Invalid blending: ",W);break}else switch(W){case Xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case lg:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ug:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",W);break}P=null,O=null,I=null,B=null,N.set(0,0,0),X=0,y=W,T=Te}return}Mt=Mt||Lt,gt=gt||Tt,Rt=Rt||Ft,(Lt!==x||Mt!==z)&&(r.blendEquationSeparate(tn[Lt],tn[Mt]),x=Lt,z=Mt),(Tt!==P||Ft!==O||gt!==I||Rt!==B)&&(r.blendFuncSeparate(xe[Tt],xe[Ft],xe[gt],xe[Rt]),P=Tt,O=Ft,I=gt,B=Rt),(ie.equals(N)===!1||ze!==X)&&(r.blendColor(ie.r,ie.g,ie.b,ze),N.copy(ie),X=ze),y=W,T=!1}function we(W,Lt){W.side===va?vt(r.CULL_FACE):Y(r.CULL_FACE);let Tt=W.side===Zn;Lt&&(Tt=!Tt),oe(Tt),W.blending===Xr&&W.transparent===!1?_e(Sa):_e(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),u.setMask(W.colorWrite);const Ft=W.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ke(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Y(r.SAMPLE_ALPHA_TO_COVERAGE):vt(r.SAMPLE_ALPHA_TO_COVERAGE)}function oe(W){w!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),w=W)}function en(W){W!==py?(Y(r.CULL_FACE),W!==G&&(W===og?r.cullFace(r.BACK):W===my?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):vt(r.CULL_FACE),G=W}function V(W){W!==Q&&(L&&r.lineWidth(W),Q=W)}function Ke(W,Lt,Tt){W?(Y(r.POLYGON_OFFSET_FILL),($!==Lt||ft!==Tt)&&(r.polygonOffset(Lt,Tt),$=Lt,ft=Tt)):vt(r.POLYGON_OFFSET_FILL)}function Ee(W){W?Y(r.SCISSOR_TEST):vt(r.SCISSOR_TEST)}function Le(W){W===void 0&&(W=r.TEXTURE0+ot-1),yt!==W&&(r.activeTexture(W),yt=W)}function qt(W,Lt,Tt){Tt===void 0&&(yt===null?Tt=r.TEXTURE0+ot-1:Tt=yt);let Ft=xt[Tt];Ft===void 0&&(Ft={type:void 0,texture:void 0},xt[Tt]=Ft),(Ft.type!==W||Ft.texture!==Lt)&&(yt!==Tt&&(r.activeTexture(Tt),yt=Tt),r.bindTexture(W,Lt||it[W]),Ft.type=W,Ft.texture=Lt)}function D(){const W=xt[yt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(W){be("WebGLState:",W)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(W){be("WebGLState:",W)}}function dt(){try{r.texSubImage2D(...arguments)}catch(W){be("WebGLState:",W)}}function St(){try{r.texSubImage3D(...arguments)}catch(W){be("WebGLState:",W)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(W){be("WebGLState:",W)}}function Zt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){be("WebGLState:",W)}}function wt(){try{r.texStorage2D(...arguments)}catch(W){be("WebGLState:",W)}}function Xt(){try{r.texStorage3D(...arguments)}catch(W){be("WebGLState:",W)}}function ee(){try{r.texImage2D(...arguments)}catch(W){be("WebGLState:",W)}}function Et(){try{r.texImage3D(...arguments)}catch(W){be("WebGLState:",W)}}function bt(W){mt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),mt.copy(W))}function Bt(W){At.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function It(W,Lt){let Tt=p.get(Lt);Tt===void 0&&(Tt=new WeakMap,p.set(Lt,Tt));let Ft=Tt.get(W);Ft===void 0&&(Ft=r.getUniformBlockIndex(Lt,W.name),Tt.set(W,Ft))}function Dt(W,Lt){const Ft=p.get(Lt).get(W);m.get(Lt)!==Ft&&(r.uniformBlockBinding(Lt,Ft,W.__bindingPointIndex),m.set(Lt,Ft))}function fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},yt=null,xt={},_={},S=new WeakMap,M=[],b=null,C=!1,y=null,x=null,P=null,O=null,z=null,I=null,B=null,N=new Pe(0,0,0),X=0,T=!1,w=null,G=null,Q=null,$=null,ft=null,mt.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Y,disable:vt,bindFramebuffer:Ut,drawBuffers:Ot,useProgram:ce,setBlending:_e,setMaterial:we,setFlipSided:oe,setCullFace:en,setLineWidth:V,setPolygonOffset:Ke,setScissorTest:Ee,activeTexture:Le,bindTexture:qt,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:ee,texImage3D:Et,updateUBOMapping:It,uniformBlockBinding:Dt,texStorage2D:wt,texStorage3D:Xt,texSubImage2D:dt,texSubImage3D:St,compressedTexSubImage2D:ct,compressedTexSubImage3D:Zt,scissor:bt,viewport:Bt,reset:fe}}function NA(r,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ne,g=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(D,E){return M?new OffscreenCanvas(D,E):rc("canvas")}function C(D,E,q){let dt=1;const St=qt(D);if((St.width>q||St.height>q)&&(dt=q/Math.max(St.width,St.height)),dt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ct=Math.floor(dt*St.width),Zt=Math.floor(dt*St.height);_===void 0&&(_=b(ct,Zt));const wt=E?b(ct,Zt):_;return wt.width=ct,wt.height=Zt,wt.getContext("2d").drawImage(D,0,0,ct,Zt),ae("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ct+"x"+Zt+")."),wt}else return"data"in D&&ae("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),D;return D}function y(D){return D.generateMipmaps}function x(D){r.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(D,E,q,dt,St=!1){if(D!==null){if(r[D]!==void 0)return r[D];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ct=E;if(E===r.RED&&(q===r.FLOAT&&(ct=r.R32F),q===r.HALF_FLOAT&&(ct=r.R16F),q===r.UNSIGNED_BYTE&&(ct=r.R8)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ct=r.R8UI),q===r.UNSIGNED_SHORT&&(ct=r.R16UI),q===r.UNSIGNED_INT&&(ct=r.R32UI),q===r.BYTE&&(ct=r.R8I),q===r.SHORT&&(ct=r.R16I),q===r.INT&&(ct=r.R32I)),E===r.RG&&(q===r.FLOAT&&(ct=r.RG32F),q===r.HALF_FLOAT&&(ct=r.RG16F),q===r.UNSIGNED_BYTE&&(ct=r.RG8)),E===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ct=r.RG8UI),q===r.UNSIGNED_SHORT&&(ct=r.RG16UI),q===r.UNSIGNED_INT&&(ct=r.RG32UI),q===r.BYTE&&(ct=r.RG8I),q===r.SHORT&&(ct=r.RG16I),q===r.INT&&(ct=r.RG32I)),E===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),q===r.UNSIGNED_INT&&(ct=r.RGB32UI),q===r.BYTE&&(ct=r.RGB8I),q===r.SHORT&&(ct=r.RGB16I),q===r.INT&&(ct=r.RGB32I)),E===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),q===r.UNSIGNED_INT&&(ct=r.RGBA32UI),q===r.BYTE&&(ct=r.RGBA8I),q===r.SHORT&&(ct=r.RGBA16I),q===r.INT&&(ct=r.RGBA32I)),E===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ct=r.R11F_G11F_B10F)),E===r.RGBA){const Zt=St?ac:Ae.getTransfer(dt);q===r.FLOAT&&(ct=r.RGBA32F),q===r.HALF_FLOAT&&(ct=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ct=Zt===He?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function z(D,E){let q;return D?E===null||E===Wi||E===ul?q=r.DEPTH24_STENCIL8:E===Gi?q=r.DEPTH32F_STENCIL8:E===ll&&(q=r.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wi||E===ul?q=r.DEPTH_COMPONENT24:E===Gi?q=r.DEPTH_COMPONENT32F:E===ll&&(q=r.DEPTH_COMPONENT16),q}function I(D,E){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==Un&&D.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function B(D){const E=D.target;E.removeEventListener("dispose",B),X(E),E.isVideoTexture&&g.delete(E)}function N(D){const E=D.target;E.removeEventListener("dispose",N),w(E)}function X(D){const E=s.get(D);if(E.__webglInit===void 0)return;const q=D.source,dt=S.get(q);if(dt){const St=dt[E.__cacheKey];St.usedTimes--,St.usedTimes===0&&T(D),Object.keys(dt).length===0&&S.delete(q)}s.remove(D)}function T(D){const E=s.get(D);r.deleteTexture(E.__webglTexture);const q=D.source,dt=S.get(q);delete dt[E.__cacheKey],h.memory.textures--}function w(D){const E=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let St=0;St<E.__webglFramebuffer[dt].length;St++)r.deleteFramebuffer(E.__webglFramebuffer[dt][St]);else r.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)r.deleteFramebuffer(E.__webglFramebuffer[dt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=D.textures;for(let dt=0,St=q.length;dt<St;dt++){const ct=s.get(q[dt]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),h.memory.textures--),s.remove(q[dt])}s.remove(D)}let G=0;function Q(){G=0}function $(){const D=G;return D>=l.maxTextures&&ae("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),G+=1,D}function ft(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ot(D,E){const q=s.get(D);if(D.isVideoTexture&&Ee(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const dt=D.image;if(dt===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{it(q,D,E);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function L(D,E){const q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){it(q,D,E);return}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function F(D,E){const q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){it(q,D,E);return}i.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function nt(D,E){const q=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&q.__version!==D.version){Y(q,D,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const yt={[pd]:r.REPEAT,[xa]:r.CLAMP_TO_EDGE,[md]:r.MIRRORED_REPEAT},xt={[Un]:r.NEAREST,[Iy]:r.NEAREST_MIPMAP_NEAREST,[Au]:r.NEAREST_MIPMAP_LINEAR,[zn]:r.LINEAR,[Th]:r.LINEAR_MIPMAP_NEAREST,[Os]:r.LINEAR_MIPMAP_LINEAR},U={[Gy]:r.NEVER,[Yy]:r.ALWAYS,[Vy]:r.LESS,[fp]:r.LEQUAL,[ky]:r.EQUAL,[hp]:r.GEQUAL,[Xy]:r.GREATER,[Wy]:r.NOTEQUAL};function at(D,E){if(E.type===Gi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===Th||E.magFilter===Au||E.magFilter===Os||E.minFilter===zn||E.minFilter===Th||E.minFilter===Au||E.minFilter===Os)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,yt[E.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,yt[E.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,yt[E.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,xt[E.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==Au&&E.minFilter!==Os||E.type===Gi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function mt(D,E){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",B));const dt=E.source;let St=S.get(dt);St===void 0&&(St={},S.set(dt,St));const ct=ft(E);if(ct!==D.__cacheKey){St[ct]===void 0&&(St[ct]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,q=!0),St[ct].usedTimes++;const Zt=St[D.__cacheKey];Zt!==void 0&&(St[D.__cacheKey].usedTimes--,Zt.usedTimes===0&&T(E)),D.__cacheKey=ct,D.__webglTexture=St[ct].texture}return q}function At(D,E,q){return Math.floor(Math.floor(D/q)/E)}function Ht(D,E,q,dt){const ct=D.updateRanges;if(ct.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,q,dt,E.data);else{ct.sort((Et,bt)=>Et.start-bt.start);let Zt=0;for(let Et=1;Et<ct.length;Et++){const bt=ct[Zt],Bt=ct[Et],It=bt.start+bt.count,Dt=At(Bt.start,E.width,4),fe=At(bt.start,E.width,4);Bt.start<=It+1&&Dt===fe&&At(Bt.start+Bt.count-1,E.width,4)===Dt?bt.count=Math.max(bt.count,Bt.start+Bt.count-bt.start):(++Zt,ct[Zt]=Bt)}ct.length=Zt+1;const wt=r.getParameter(r.UNPACK_ROW_LENGTH),Xt=r.getParameter(r.UNPACK_SKIP_PIXELS),ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Et=0,bt=ct.length;Et<bt;Et++){const Bt=ct[Et],It=Math.floor(Bt.start/4),Dt=Math.ceil(Bt.count/4),fe=It%E.width,W=Math.floor(It/E.width),Lt=Dt,Tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,fe),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,fe,W,Lt,Tt,q,dt,E.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,wt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ee)}}function it(D,E,q){let dt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=r.TEXTURE_3D);const St=mt(D,E),ct=E.source;i.bindTexture(dt,D.__webglTexture,r.TEXTURE0+q);const Zt=s.get(ct);if(ct.version!==Zt.__version||St===!0){i.activeTexture(r.TEXTURE0+q);const wt=Ae.getPrimaries(Ae.workingColorSpace),Xt=E.colorSpace===ss?null:Ae.getPrimaries(E.colorSpace),ee=E.colorSpace===ss||wt===Xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Et=C(E.image,!1,l.maxTextureSize);Et=Le(E,Et);const bt=u.convert(E.format,E.colorSpace),Bt=u.convert(E.type);let It=O(E.internalFormat,bt,Bt,E.colorSpace,E.isVideoTexture);at(dt,E);let Dt;const fe=E.mipmaps,W=E.isVideoTexture!==!0,Lt=Zt.__version===void 0||St===!0,Tt=ct.dataReady,Ft=I(E,Et);if(E.isDepthTexture)It=z(E.format===Ps,E.type),Lt&&(W?i.texStorage2D(r.TEXTURE_2D,1,It,Et.width,Et.height):i.texImage2D(r.TEXTURE_2D,0,It,Et.width,Et.height,0,bt,Bt,null));else if(E.isDataTexture)if(fe.length>0){W&&Lt&&i.texStorage2D(r.TEXTURE_2D,Ft,It,fe[0].width,fe[0].height);for(let Mt=0,gt=fe.length;Mt<gt;Mt++)Dt=fe[Mt],W?Tt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,bt,Bt,Dt.data):i.texImage2D(r.TEXTURE_2D,Mt,It,Dt.width,Dt.height,0,bt,Bt,Dt.data);E.generateMipmaps=!1}else W?(Lt&&i.texStorage2D(r.TEXTURE_2D,Ft,It,Et.width,Et.height),Tt&&Ht(E,Et,bt,Bt)):i.texImage2D(r.TEXTURE_2D,0,It,Et.width,Et.height,0,bt,Bt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,It,fe[0].width,fe[0].height,Et.depth);for(let Mt=0,gt=fe.length;Mt<gt;Mt++)if(Dt=fe[Mt],E.format!==Li)if(bt!==null)if(W){if(Tt)if(E.layerUpdates.size>0){const Rt=Bg(Dt.width,Dt.height,E.format,E.type);for(const ie of E.layerUpdates){const ze=Dt.data.subarray(ie*Rt/Dt.data.BYTES_PER_ELEMENT,(ie+1)*Rt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,ie,Dt.width,Dt.height,1,bt,ze)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,Et.depth,bt,Dt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,It,Dt.width,Dt.height,Et.depth,0,Dt.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Tt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,Et.depth,bt,Bt,Dt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Mt,It,Dt.width,Dt.height,Et.depth,0,bt,Bt,Dt.data)}else{W&&Lt&&i.texStorage2D(r.TEXTURE_2D,Ft,It,fe[0].width,fe[0].height);for(let Mt=0,gt=fe.length;Mt<gt;Mt++)Dt=fe[Mt],E.format!==Li?bt!==null?W?Tt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,bt,Dt.data):i.compressedTexImage2D(r.TEXTURE_2D,Mt,It,Dt.width,Dt.height,0,Dt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Tt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,bt,Bt,Dt.data):i.texImage2D(r.TEXTURE_2D,Mt,It,Dt.width,Dt.height,0,bt,Bt,Dt.data)}else if(E.isDataArrayTexture)if(W){if(Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,It,Et.width,Et.height,Et.depth),Tt)if(E.layerUpdates.size>0){const Mt=Bg(Et.width,Et.height,E.format,E.type);for(const gt of E.layerUpdates){const Rt=Et.data.subarray(gt*Mt/Et.data.BYTES_PER_ELEMENT,(gt+1)*Mt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,gt,Et.width,Et.height,1,bt,Bt,Rt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,bt,Bt,Et.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,It,Et.width,Et.height,Et.depth,0,bt,Bt,Et.data);else if(E.isData3DTexture)W?(Lt&&i.texStorage3D(r.TEXTURE_3D,Ft,It,Et.width,Et.height,Et.depth),Tt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,bt,Bt,Et.data)):i.texImage3D(r.TEXTURE_3D,0,It,Et.width,Et.height,Et.depth,0,bt,Bt,Et.data);else if(E.isFramebufferTexture){if(Lt)if(W)i.texStorage2D(r.TEXTURE_2D,Ft,It,Et.width,Et.height);else{let Mt=Et.width,gt=Et.height;for(let Rt=0;Rt<Ft;Rt++)i.texImage2D(r.TEXTURE_2D,Rt,It,Mt,gt,0,bt,Bt,null),Mt>>=1,gt>>=1}}else if(fe.length>0){if(W&&Lt){const Mt=qt(fe[0]);i.texStorage2D(r.TEXTURE_2D,Ft,It,Mt.width,Mt.height)}for(let Mt=0,gt=fe.length;Mt<gt;Mt++)Dt=fe[Mt],W?Tt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,bt,Bt,Dt):i.texImage2D(r.TEXTURE_2D,Mt,It,bt,Bt,Dt);E.generateMipmaps=!1}else if(W){if(Lt){const Mt=qt(Et);i.texStorage2D(r.TEXTURE_2D,Ft,It,Mt.width,Mt.height)}Tt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,Bt,Et)}else i.texImage2D(r.TEXTURE_2D,0,It,bt,Bt,Et);y(E)&&x(dt),Zt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Y(D,E,q){if(E.image.length!==6)return;const dt=mt(D,E),St=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+q);const ct=s.get(St);if(St.version!==ct.__version||dt===!0){i.activeTexture(r.TEXTURE0+q);const Zt=Ae.getPrimaries(Ae.workingColorSpace),wt=E.colorSpace===ss?null:Ae.getPrimaries(E.colorSpace),Xt=E.colorSpace===ss||Zt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ee=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let gt=0;gt<6;gt++)!ee&&!Et?bt[gt]=C(E.image[gt],!0,l.maxCubemapSize):bt[gt]=Et?E.image[gt].image:E.image[gt],bt[gt]=Le(E,bt[gt]);const Bt=bt[0],It=u.convert(E.format,E.colorSpace),Dt=u.convert(E.type),fe=O(E.internalFormat,It,Dt,E.colorSpace),W=E.isVideoTexture!==!0,Lt=ct.__version===void 0||dt===!0,Tt=St.dataReady;let Ft=I(E,Bt);at(r.TEXTURE_CUBE_MAP,E);let Mt;if(ee){W&&Lt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,fe,Bt.width,Bt.height);for(let gt=0;gt<6;gt++){Mt=bt[gt].mipmaps;for(let Rt=0;Rt<Mt.length;Rt++){const ie=Mt[Rt];E.format!==Li?It!==null?W?Tt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,0,0,ie.width,ie.height,It,ie.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,fe,ie.width,ie.height,0,ie.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,0,0,ie.width,ie.height,It,Dt,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,fe,ie.width,ie.height,0,It,Dt,ie.data)}}}else{if(Mt=E.mipmaps,W&&Lt){Mt.length>0&&Ft++;const gt=qt(bt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,fe,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Et){W?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,bt[gt].width,bt[gt].height,It,Dt,bt[gt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,fe,bt[gt].width,bt[gt].height,0,It,Dt,bt[gt].data);for(let Rt=0;Rt<Mt.length;Rt++){const ze=Mt[Rt].image[gt].image;W?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,0,0,ze.width,ze.height,It,Dt,ze.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,fe,ze.width,ze.height,0,It,Dt,ze.data)}}else{W?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,It,Dt,bt[gt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,fe,It,Dt,bt[gt]);for(let Rt=0;Rt<Mt.length;Rt++){const ie=Mt[Rt];W?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,0,0,It,Dt,ie.image[gt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,fe,It,Dt,ie.image[gt])}}}y(E)&&x(r.TEXTURE_CUBE_MAP),ct.__version=St.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function vt(D,E,q,dt,St,ct){const Zt=u.convert(q.format,q.colorSpace),wt=u.convert(q.type),Xt=O(q.internalFormat,Zt,wt,q.colorSpace),ee=s.get(E),Et=s.get(q);if(Et.__renderTarget=E,!ee.__hasExternalTextures){const bt=Math.max(1,E.width>>ct),Bt=Math.max(1,E.height>>ct);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?i.texImage3D(St,ct,Xt,bt,Bt,E.depth,0,Zt,wt,null):i.texImage2D(St,ct,Xt,bt,Bt,0,Zt,wt,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),Ke(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,St,Et.__webglTexture,0,V(E)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,St,Et.__webglTexture,ct),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(D,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,D),E.depthBuffer){const dt=E.depthTexture,St=dt&&dt.isDepthTexture?dt.type:null,ct=z(E.stencilBuffer,St),Zt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ke(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),ct,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),ct,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ct,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Zt,r.RENDERBUFFER,D)}else{const dt=E.textures;for(let St=0;St<dt.length;St++){const ct=dt[St],Zt=u.convert(ct.format,ct.colorSpace),wt=u.convert(ct.type),Xt=O(ct.internalFormat,Zt,wt,ct.colorSpace);Ke(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),Xt,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),Xt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Xt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ot(D,E,q){const dt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=s.get(E.depthTexture);if(St.__renderTarget=E,(!St.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt){if(St.__webglInit===void 0&&(St.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),St.__webglTexture===void 0){St.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),at(r.TEXTURE_CUBE_MAP,E.depthTexture);const ee=u.convert(E.depthTexture.format),Et=u.convert(E.depthTexture.type);let bt;E.depthTexture.format===ba?bt=r.DEPTH_COMPONENT24:E.depthTexture.format===Ps&&(bt=r.DEPTH24_STENCIL8);for(let Bt=0;Bt<6;Bt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,bt,E.width,E.height,0,ee,Et,null)}}else ot(E.depthTexture,0);const ct=St.__webglTexture,Zt=V(E),wt=dt?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,Xt=E.depthTexture.format===Ps?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===ba)Ke(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xt,wt,ct,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,Xt,wt,ct,0);else if(E.depthTexture.format===Ps)Ke(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xt,wt,ct,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,Xt,wt,ct,0);else throw new Error("Unknown depthTexture format")}function ce(D){const E=s.get(D),q=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const dt=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const St=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",St)};dt.addEventListener("dispose",St),E.__depthDisposeCallback=St}E.__boundDepthTexture=dt}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let dt=0;dt<6;dt++)Ot(E.__webglFramebuffer[dt],D,dt);else{const dt=D.texture.mipmaps;dt&&dt.length>0?Ot(E.__webglFramebuffer[0],D,0):Ot(E.__webglFramebuffer,D,0)}else if(q){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=r.createRenderbuffer(),Ut(E.__webglDepthbuffer[dt],D,!1);else{const St=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ct)}}else{const dt=D.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ut(E.__webglDepthbuffer,D,!1);else{const St=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ct)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function tn(D,E,q){const dt=s.get(D);E!==void 0&&vt(dt.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&ce(D)}function xe(D){const E=D.texture,q=s.get(D),dt=s.get(E);D.addEventListener("dispose",N);const St=D.textures,ct=D.isWebGLCubeRenderTarget===!0,Zt=St.length>1;if(Zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=E.version,h.memory.textures++),ct){q.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[wt]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)q.__webglFramebuffer[wt][Xt]=r.createFramebuffer()}else q.__webglFramebuffer[wt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)q.__webglFramebuffer[wt]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Zt)for(let wt=0,Xt=St.length;wt<Xt;wt++){const ee=s.get(St[wt]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),h.memory.textures++)}if(D.samples>0&&Ke(D)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let wt=0;wt<St.length;wt++){const Xt=St[wt];q.__webglColorRenderbuffer[wt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[wt]);const ee=u.convert(Xt.format,Xt.colorSpace),Et=u.convert(Xt.type),bt=O(Xt.internalFormat,ee,Et,Xt.colorSpace,D.isXRRenderTarget===!0),Bt=V(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,bt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,q.__webglColorRenderbuffer[wt])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Ut(q.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){i.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),at(r.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)vt(q.__webglFramebuffer[wt][Xt],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Xt);else vt(q.__webglFramebuffer[wt],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(E)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let wt=0,Xt=St.length;wt<Xt;wt++){const ee=St[wt],Et=s.get(ee);let bt=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(bt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(bt,Et.__webglTexture),at(bt,ee),vt(q.__webglFramebuffer,D,ee,r.COLOR_ATTACHMENT0+wt,bt,0),y(ee)&&x(bt)}i.unbindTexture()}else{let wt=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(wt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,dt.__webglTexture),at(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)vt(q.__webglFramebuffer[Xt],D,E,r.COLOR_ATTACHMENT0,wt,Xt);else vt(q.__webglFramebuffer,D,E,r.COLOR_ATTACHMENT0,wt,0);y(E)&&x(wt),i.unbindTexture()}D.depthBuffer&&ce(D)}function _e(D){const E=D.textures;for(let q=0,dt=E.length;q<dt;q++){const St=E[q];if(y(St)){const ct=P(D),Zt=s.get(St).__webglTexture;i.bindTexture(ct,Zt),x(ct),i.unbindTexture()}}}const we=[],oe=[];function en(D){if(D.samples>0){if(Ke(D)===!1){const E=D.textures,q=D.width,dt=D.height;let St=r.COLOR_BUFFER_BIT;const ct=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Zt=s.get(D),wt=E.length>1;if(wt)for(let ee=0;ee<E.length;ee++)i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Xt=D.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ee=0;ee<E.length;ee++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),wt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Et=s.get(E[ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,q,dt,0,0,q,dt,St,r.NEAREST),m===!0&&(we.length=0,oe.length=0,we.push(r.COLOR_ATTACHMENT0+ee),D.depthBuffer&&D.resolveDepthBuffer===!1&&(we.push(ct),oe.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),wt)for(let ee=0;ee<E.length;ee++){i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Et=s.get(E[ee]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,Et,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function V(D){return Math.min(l.maxSamples,D.samples)}function Ke(D){const E=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ee(D){const E=h.render.frame;g.get(D)!==E&&(g.set(D,E),D.update())}function Le(D,E){const q=D.colorSpace,dt=D.format,St=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Zr&&q!==ss&&(Ae.getTransfer(q)===He?(dt!==Li||St!==Si)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",q)),E}function qt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=Q,this.setTexture2D=ot,this.setTexture2DArray=L,this.setTexture3D=F,this.setTextureCube=nt,this.rebindTextures=tn,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function LA(r,t){function i(s,l=ss){let u;const h=Ae.getTransfer(l);if(s===Si)return r.UNSIGNED_BYTE;if(s===rp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===op)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Tv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Av)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ev)return r.BYTE;if(s===bv)return r.SHORT;if(s===ll)return r.UNSIGNED_SHORT;if(s===sp)return r.INT;if(s===Wi)return r.UNSIGNED_INT;if(s===Gi)return r.FLOAT;if(s===Ea)return r.HALF_FLOAT;if(s===Rv)return r.ALPHA;if(s===Cv)return r.RGB;if(s===Li)return r.RGBA;if(s===ba)return r.DEPTH_COMPONENT;if(s===Ps)return r.DEPTH_STENCIL;if(s===wv)return r.RED;if(s===lp)return r.RED_INTEGER;if(s===jr)return r.RG;if(s===up)return r.RG_INTEGER;if(s===cp)return r.RGBA_INTEGER;if(s===$u||s===tc||s===ec||s===nc)if(h===He)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===$u)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===$u)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ec)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_d||s===gd||s===vd||s===xd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===_d)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sd||s===yd||s===Md||s===Ed||s===bd||s===Td||s===Ad)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Sd||s===yd)return h===He?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Md)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ed)return u.COMPRESSED_R11_EAC;if(s===bd)return u.COMPRESSED_SIGNED_R11_EAC;if(s===Td)return u.COMPRESSED_RG11_EAC;if(s===Ad)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Nd||s===Ld||s===Od||s===Pd||s===zd||s===Id||s===Fd||s===Bd||s===Hd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Rd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ud)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ld)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Od)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Pd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Id)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gd||s===Vd||s===kd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Gd)return h===He?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Vd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xd||s===Wd||s===Yd||s===qd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Xd)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Wd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ul?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const OA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PA=`
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

}`;class zA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Vv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new qi({vertexShader:OA,fragmentShader:PA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Yi(new hc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IA extends Hs{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,S=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",y=new zA,x={},P=i.getContextAttributes();let O=null,z=null;const I=[],B=[],N=new ne;let X=null;const T=new xi;T.viewport=new on;const w=new xi;w.viewport=new on;const G=[T,w],Q=new WM;let $=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let Y=I[it];return Y===void 0&&(Y=new Yh,I[it]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(it){let Y=I[it];return Y===void 0&&(Y=new Yh,I[it]=Y),Y.getGripSpace()},this.getHand=function(it){let Y=I[it];return Y===void 0&&(Y=new Yh,I[it]=Y),Y.getHandSpace()};function ot(it){const Y=B.indexOf(it.inputSource);if(Y===-1)return;const vt=I[Y];vt!==void 0&&(vt.update(it.inputSource,it.frame,p||h),vt.dispatchEvent({type:it.type,data:it.inputSource}))}function L(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",F);for(let it=0;it<I.length;it++){const Y=B[it];Y!==null&&(B[it]=null,I[it].disconnect(Y))}$=null,ft=null,y.reset();for(const it in x)delete x[it];t.setRenderTarget(O),M=null,S=null,_=null,l=null,z=null,Ht.stop(),s.isPresenting=!1,t.setPixelRatio(X),t.setSize(N.width,N.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){u=it,s.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",L),l.addEventListener("inputsourceschange",F),P.xrCompatible!==!0&&await i.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(N),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ut=null,Ot=null;P.depth&&(Ot=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,vt=P.stencil?Ps:ba,Ut=P.stencil?ul:Wi);const ce={colorFormat:i.RGBA8,depthFormat:Ot,scaleFactor:u};_=this.getBinding(),S=_.createProjectionLayer(ce),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),z=new Xi(S.textureWidth,S.textureHeight,{format:Li,type:Si,depthTexture:new hl(S.textureWidth,S.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const vt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,vt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new Xi(M.framebufferWidth,M.framebufferHeight,{format:Li,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ht.setContext(l),Ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function F(it){for(let Y=0;Y<it.removed.length;Y++){const vt=it.removed[Y],Ut=B.indexOf(vt);Ut>=0&&(B[Ut]=null,I[Ut].disconnect(vt))}for(let Y=0;Y<it.added.length;Y++){const vt=it.added[Y];let Ut=B.indexOf(vt);if(Ut===-1){for(let ce=0;ce<I.length;ce++)if(ce>=B.length){B.push(vt),Ut=ce;break}else if(B[ce]===null){B[ce]=vt,Ut=ce;break}if(Ut===-1)break}const Ot=I[Ut];Ot&&Ot.connect(vt)}}const nt=new J,yt=new J;function xt(it,Y,vt){nt.setFromMatrixPosition(Y.matrixWorld),yt.setFromMatrixPosition(vt.matrixWorld);const Ut=nt.distanceTo(yt),Ot=Y.projectionMatrix.elements,ce=vt.projectionMatrix.elements,tn=Ot[14]/(Ot[10]-1),xe=Ot[14]/(Ot[10]+1),_e=(Ot[9]+1)/Ot[5],we=(Ot[9]-1)/Ot[5],oe=(Ot[8]-1)/Ot[0],en=(ce[8]+1)/ce[0],V=tn*oe,Ke=tn*en,Ee=Ut/(-oe+en),Le=Ee*-oe;if(Y.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Le),it.translateZ(Ee),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Ot[10]===-1)it.projectionMatrix.copy(Y.projectionMatrix),it.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const qt=tn+Ee,D=xe+Ee,E=V-Le,q=Ke+(Ut-Le),dt=_e*xe/D*qt,St=we*xe/D*qt;it.projectionMatrix.makePerspective(E,q,dt,St,qt,D),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function U(it,Y){Y===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(Y.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let Y=it.near,vt=it.far;y.texture!==null&&(y.depthNear>0&&(Y=y.depthNear),y.depthFar>0&&(vt=y.depthFar)),Q.near=w.near=T.near=Y,Q.far=w.far=T.far=vt,($!==Q.near||ft!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),$=Q.near,ft=Q.far),Q.layers.mask=it.layers.mask|6,T.layers.mask=Q.layers.mask&3,w.layers.mask=Q.layers.mask&5;const Ut=it.parent,Ot=Q.cameras;U(Q,Ut);for(let ce=0;ce<Ot.length;ce++)U(Ot[ce],Ut);Ot.length===2?xt(Q,T,w):Q.projectionMatrix.copy(T.projectionMatrix),at(it,Q,Ut)};function at(it,Y,vt){vt===null?it.matrix.copy(Y.matrixWorld):(it.matrix.copy(vt.matrixWorld),it.matrix.invert(),it.matrix.multiply(Y.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(Y.projectionMatrix),it.projectionMatrixInverse.copy(Y.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=fl*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(it){m=it,S!==null&&(S.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(it){return x[it]};let mt=null;function At(it,Y){if(g=Y.getViewerPose(p||h),b=Y,g!==null){const vt=g.views;M!==null&&(t.setRenderTargetFramebuffer(z,M.framebuffer),t.setRenderTarget(z));let Ut=!1;vt.length!==Q.cameras.length&&(Q.cameras.length=0,Ut=!0);for(let xe=0;xe<vt.length;xe++){const _e=vt[xe];let we=null;if(M!==null)we=M.getViewport(_e);else{const en=_.getViewSubImage(S,_e);we=en.viewport,xe===0&&(t.setRenderTargetTextures(z,en.colorTexture,en.depthStencilTexture),t.setRenderTarget(z))}let oe=G[xe];oe===void 0&&(oe=new xi,oe.layers.enable(xe),oe.viewport=new on,G[xe]=oe),oe.matrix.fromArray(_e.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(_e.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(we.x,we.y,we.width,we.height),xe===0&&(Q.matrix.copy(oe.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ut===!0&&Q.cameras.push(oe)}const Ot=l.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=s.getBinding();const xe=_.getDepthInformation(vt[0]);xe&&xe.isValid&&xe.texture&&y.init(xe,l.renderState)}if(Ot&&Ot.includes("camera-access")&&C){t.state.unbindTexture(),_=s.getBinding();for(let xe=0;xe<vt.length;xe++){const _e=vt[xe].camera;if(_e){let we=x[_e];we||(we=new Vv,x[_e]=we);const oe=_.getCameraImage(_e);we.sourceTexture=oe}}}}for(let vt=0;vt<I.length;vt++){const Ut=B[vt],Ot=I[vt];Ut!==null&&Ot!==void 0&&Ot.update(Ut,Y,p||h)}mt&&mt(it,Y),Y.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Y}),b=null}const Ht=new Xv;Ht.setAnimationLoop(At),this.setAnimationLoop=function(it){mt=it},this.dispose=function(){}}}const Us=new Ta,FA=new $e;function BA(r,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,zv(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,P,O,z){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),_(y,x)):x.isMeshPhongMaterial?(u(y,x),g(y,x)):x.isMeshStandardMaterial?(u(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,z)):x.isMeshMatcapMaterial?(u(y,x),b(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),C(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,P,O):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Zn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Zn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const P=t.get(x),O=P.envMap,z=P.envMapRotation;O&&(y.envMap.value=O,Us.copy(z),Us.x*=-1,Us.y*=-1,Us.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),y.envMapRotation.value.setFromMatrix4(FA.makeRotationFromEuler(Us)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,P,O){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*P,y.scale.value=O*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,P){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const P=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function HA(r,t,i,s){let l={},u={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,O){const z=O.program;s.uniformBlockBinding(P,z)}function p(P,O){let z=l[P.id];z===void 0&&(b(P),z=g(P),l[P.id]=z,P.addEventListener("dispose",y));const I=O.program;s.updateUBOMapping(P,I);const B=t.render.frame;u[P.id]!==B&&(S(P),u[P.id]=B)}function g(P){const O=_();P.__bindingPointIndex=O;const z=r.createBuffer(),I=P.__size,B=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,z),r.bufferData(r.UNIFORM_BUFFER,I,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,z),z}function _(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const O=l[P.id],z=P.uniforms,I=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let B=0,N=z.length;B<N;B++){const X=Array.isArray(z[B])?z[B]:[z[B]];for(let T=0,w=X.length;T<w;T++){const G=X[T];if(M(G,B,T,I)===!0){const Q=G.__offset,$=Array.isArray(G.value)?G.value:[G.value];let ft=0;for(let ot=0;ot<$.length;ot++){const L=$[ot],F=C(L);typeof L=="number"||typeof L=="boolean"?(G.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,Q+ft,G.__data)):L.isMatrix3?(G.__data[0]=L.elements[0],G.__data[1]=L.elements[1],G.__data[2]=L.elements[2],G.__data[3]=0,G.__data[4]=L.elements[3],G.__data[5]=L.elements[4],G.__data[6]=L.elements[5],G.__data[7]=0,G.__data[8]=L.elements[6],G.__data[9]=L.elements[7],G.__data[10]=L.elements[8],G.__data[11]=0):(L.toArray(G.__data,ft),ft+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(P,O,z,I){const B=P.value,N=O+"_"+z;if(I[N]===void 0)return typeof B=="number"||typeof B=="boolean"?I[N]=B:I[N]=B.clone(),!0;{const X=I[N];if(typeof B=="number"||typeof B=="boolean"){if(X!==B)return I[N]=B,!0}else if(X.equals(B)===!1)return X.copy(B),!0}return!1}function b(P){const O=P.uniforms;let z=0;const I=16;for(let N=0,X=O.length;N<X;N++){const T=Array.isArray(O[N])?O[N]:[O[N]];for(let w=0,G=T.length;w<G;w++){const Q=T[w],$=Array.isArray(Q.value)?Q.value:[Q.value];for(let ft=0,ot=$.length;ft<ot;ft++){const L=$[ft],F=C(L),nt=z%I,yt=nt%F.boundary,xt=nt+yt;z+=yt,xt!==0&&I-xt<F.storage&&(z+=I-xt),Q.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=z,z+=F.storage}}}const B=z%I;return B>0&&(z+=I-B),P.__size=z,P.__cache={},this}function C(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ae("WebGLRenderer: Unsupported uniform value type.",P),O}function y(P){const O=P.target;O.removeEventListener("dispose",y);const z=h.indexOf(O.__bindingPointIndex);h.splice(z,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function x(){for(const P in l)r.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:m,update:p,dispose:x}}const GA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function VA(){return Bi===null&&(Bi=new zM(GA,16,16,jr,Ea),Bi.name="DFG_LUT",Bi.minFilter=zn,Bi.magFilter=zn,Bi.wrapS=xa,Bi.wrapT=xa,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class kA{constructor(t={}){const{canvas:i=qy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:M=Si}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const C=M,y=new Set([cp,up,lp]),x=new Set([Si,Wi,ll,ul,rp,op]),P=new Uint32Array(4),O=new Int32Array(4);let z=null,I=null;const B=[],N=[];let X=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let w=!1;this._outputColorSpace=vi;let G=0,Q=0,$=null,ft=-1,ot=null;const L=new on,F=new on;let nt=null;const yt=new Pe(0);let xt=0,U=i.width,at=i.height,mt=1,At=null,Ht=null;const it=new on(0,0,U,at),Y=new on(0,0,U,at);let vt=!1;const Ut=new Gv;let Ot=!1,ce=!1;const tn=new $e,xe=new J,_e=new on,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function en(){return $===null?mt:1}let V=s;function Ke(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ap}`),i.addEventListener("webglcontextlost",ie,!1),i.addEventListener("webglcontextrestored",ze,!1),i.addEventListener("webglcontextcreationerror",Te,!1),V===null){const j="webgl2";if(V=Ke(j,R),V===null)throw Ke(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw be("WebGLRenderer: "+R.message),R}let Ee,Le,qt,D,E,q,dt,St,ct,Zt,wt,Xt,ee,Et,bt,Bt,It,Dt,fe,W,Lt,Tt,Ft,Mt;function gt(){Ee=new VT(V),Ee.init(),Tt=new LA(V,Ee),Le=new LT(V,Ee,t,Tt),qt=new UA(V,Ee),Le.reversedDepthBuffer&&S&&qt.buffers.depth.setReversed(!0),D=new WT(V),E=new _A,q=new NA(V,Ee,qt,E,Le,Tt,D),dt=new PT(T),St=new GT(T),ct=new ZM(V),Ft=new UT(V,ct),Zt=new kT(V,ct,D,Ft),wt=new qT(V,Zt,ct,D),fe=new YT(V,Le,q),Bt=new OT(E),Xt=new mA(T,dt,St,Ee,Le,Ft,Bt),ee=new BA(T,E),Et=new vA,bt=new bA(Ee),Dt=new DT(T,dt,St,qt,wt,b,m),It=new wA(T,wt,Le),Mt=new HA(V,D,Le,qt),W=new NT(V,Ee,D),Lt=new XT(V,Ee,D),D.programs=Xt.programs,T.capabilities=Le,T.extensions=Ee,T.properties=E,T.renderLists=Et,T.shadowMap=It,T.state=qt,T.info=D}gt(),C!==Si&&(X=new ZT(C,i.width,i.height,l,u));const Rt=new IA(T,V);this.xr=Rt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(R){R!==void 0&&(mt=R,this.setSize(U,at,!1))},this.getSize=function(R){return R.set(U,at)},this.setSize=function(R,j,lt=!0){if(Rt.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,at=j,i.width=Math.floor(R*mt),i.height=Math.floor(j*mt),lt===!0&&(i.style.width=R+"px",i.style.height=j+"px"),X!==null&&X.setSize(i.width,i.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(U*mt,at*mt).floor()},this.setDrawingBufferSize=function(R,j,lt){U=R,at=j,mt=lt,i.width=Math.floor(R*lt),i.height=Math.floor(j*lt),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(C===Si){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}X.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(it)},this.setViewport=function(R,j,lt,st){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,j,lt,st),qt.viewport(L.copy(it).multiplyScalar(mt).round())},this.getScissor=function(R){return R.copy(Y)},this.setScissor=function(R,j,lt,st){R.isVector4?Y.set(R.x,R.y,R.z,R.w):Y.set(R,j,lt,st),qt.scissor(F.copy(Y).multiplyScalar(mt).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(R){qt.setScissorTest(vt=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){Ht=R},this.getClearColor=function(R){return R.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,lt=!0){let st=0;if(R){let K=!1;if($!==null){const Nt=$.texture.format;K=y.has(Nt)}if(K){const Nt=$.texture.type,Gt=x.has(Nt),Pt=Dt.getClearColor(),Vt=Dt.getClearAlpha(),Wt=Pt.r,Jt=Pt.g,Yt=Pt.b;Gt?(P[0]=Wt,P[1]=Jt,P[2]=Yt,P[3]=Vt,V.clearBufferuiv(V.COLOR,0,P)):(O[0]=Wt,O[1]=Jt,O[2]=Yt,O[3]=Vt,V.clearBufferiv(V.COLOR,0,O))}else st|=V.COLOR_BUFFER_BIT}j&&(st|=V.DEPTH_BUFFER_BIT),lt&&(st|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ie,!1),i.removeEventListener("webglcontextrestored",ze,!1),i.removeEventListener("webglcontextcreationerror",Te,!1),Dt.dispose(),Et.dispose(),bt.dispose(),E.dispose(),dt.dispose(),St.dispose(),wt.dispose(),Ft.dispose(),Mt.dispose(),Xt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Vs),Rt.removeEventListener("sessionend",eo),Oi.stop()};function ie(R){R.preventDefault(),oc("WebGLRenderer: Context Lost."),w=!0}function ze(){oc("WebGLRenderer: Context Restored."),w=!1;const R=D.autoReset,j=It.enabled,lt=It.autoUpdate,st=It.needsUpdate,K=It.type;gt(),D.autoReset=R,It.enabled=j,It.autoUpdate=lt,It.needsUpdate=st,It.type=K}function Te(R){be("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Nn(R){const j=R.target;j.removeEventListener("dispose",Nn),Ei(j)}function Ei(R){ml(R),E.remove(R)}function ml(R){const j=E.get(R).programs;j!==void 0&&(j.forEach(function(lt){Xt.releaseProgram(lt)}),R.isShaderMaterial&&Xt.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,lt,st,K,Nt){j===null&&(j=we);const Gt=K.isMesh&&K.matrixWorld.determinant()<0,Pt=ls(R,j,lt,st,K);qt.setMaterial(st,Gt);let Vt=lt.index,Wt=1;if(st.wireframe===!0){if(Vt=Zt.getWireframeAttribute(lt),Vt===void 0)return;Wt=2}const Jt=lt.drawRange,Yt=lt.attributes.position;let $t=Jt.start*Wt,De=(Jt.start+Jt.count)*Wt;Nt!==null&&($t=Math.max($t,Nt.start*Wt),De=Math.min(De,(Nt.start+Nt.count)*Wt)),Vt!==null?($t=Math.max($t,0),De=Math.min(De,Vt.count)):Yt!=null&&($t=Math.max($t,0),De=Math.min(De,Yt.count));const Qe=De-$t;if(Qe<0||Qe===1/0)return;Ft.setup(K,st,Pt,lt,Vt);let qe,Oe=W;if(Vt!==null&&(qe=ct.get(Vt),Oe=Lt,Oe.setIndex(qe)),K.isMesh)st.wireframe===!0?(qt.setLineWidth(st.wireframeLinewidth*en()),Oe.setMode(V.LINES)):Oe.setMode(V.TRIANGLES);else if(K.isLine){let Kt=st.linewidth;Kt===void 0&&(Kt=1),qt.setLineWidth(Kt*en()),K.isLineSegments?Oe.setMode(V.LINES):K.isLineLoop?Oe.setMode(V.LINE_LOOP):Oe.setMode(V.LINE_STRIP)}else K.isPoints?Oe.setMode(V.POINTS):K.isSprite&&Oe.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)cl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Oe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Kt=K._multiDrawStarts,Ue=K._multiDrawCounts,se=K._multiDrawCount,Mn=Vt?ct.get(Vt).bytesPerElement:1,Zi=E.get(st).currentProgram.getUniforms();for(let En=0;En<se;En++)Zi.setValue(V,"_gl_DrawID",En),Oe.render(Kt[En]/Mn,Ue[En])}else if(K.isInstancedMesh)Oe.renderInstances($t,Qe,K.count);else if(lt.isInstancedBufferGeometry){const Kt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ue=Math.min(lt.instanceCount,Kt);Oe.renderInstances($t,Qe,Ue)}else Oe.render($t,Qe)};function $r(R,j,lt){R.transparent===!0&&R.side===va&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,Xs(R,j,lt),R.side=os,R.needsUpdate=!0,Xs(R,j,lt),R.side=va):Xs(R,j,lt)}this.compile=function(R,j,lt=null){lt===null&&(lt=R),I=bt.get(lt),I.init(j),N.push(I),lt.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(I.pushLight(K),K.castShadow&&I.pushShadow(K))}),R!==lt&&R.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(I.pushLight(K),K.castShadow&&I.pushShadow(K))}),I.setupLights();const st=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Nt=K.material;if(Nt)if(Array.isArray(Nt))for(let Gt=0;Gt<Nt.length;Gt++){const Pt=Nt[Gt];$r(Pt,lt,K),st.add(Pt)}else $r(Nt,lt,K),st.add(Nt)}),I=N.pop(),st},this.compileAsync=function(R,j,lt=null){const st=this.compile(R,j,lt);return new Promise(K=>{function Nt(){if(st.forEach(function(Gt){E.get(Gt).currentProgram.isReady()&&st.delete(Gt)}),st.size===0){K(R);return}setTimeout(Nt,10)}Ee.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Gs=null;function to(R){Gs&&Gs(R)}function Vs(){Oi.stop()}function eo(){Oi.start()}const Oi=new Xv;Oi.setAnimationLoop(to),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(R){Gs=R,Rt.setAnimationLoop(R),R===null?Oi.stop():Oi.start()},Rt.addEventListener("sessionstart",Vs),Rt.addEventListener("sessionend",eo),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const lt=Rt.enabled===!0&&Rt.isPresenting===!0,st=X!==null&&($===null||lt)&&X.begin(T,$);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(X===null||X.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(j),j=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,j,$),I=bt.get(R,N.length),I.init(j),N.push(I),tn.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ut.setFromProjectionMatrix(tn,Vi,j.reversedDepth),ce=this.localClippingEnabled,Ot=Bt.init(this.clippingPlanes,ce),z=Et.get(R,B.length),z.init(),B.push(z),Rt.enabled===!0&&Rt.isPresenting===!0){const Gt=T.xr.getDepthSensingMesh();Gt!==null&&oi(Gt,j,-1/0,T.sortObjects)}oi(R,j,0,T.sortObjects),z.finish(),T.sortObjects===!0&&z.sort(At,Ht),oe=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,oe&&Dt.addToRenderList(z,R),this.info.render.frame++,Ot===!0&&Bt.beginShadows();const K=I.state.shadowsArray;if(It.render(K,R,j),Ot===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&X.hasRenderPass())===!1){const Gt=z.opaque,Pt=z.transmissive;if(I.setupLights(),j.isArrayCamera){const Vt=j.cameras;if(Pt.length>0)for(let Wt=0,Jt=Vt.length;Wt<Jt;Wt++){const Yt=Vt[Wt];yn(Gt,Pt,R,Yt)}oe&&Dt.render(R);for(let Wt=0,Jt=Vt.length;Wt<Jt;Wt++){const Yt=Vt[Wt];ln(z,R,Yt,Yt.viewport)}}else Pt.length>0&&yn(Gt,Pt,R,j),oe&&Dt.render(R),ln(z,R,j)}$!==null&&Q===0&&(q.updateMultisampleRenderTarget($),q.updateRenderTargetMipmap($)),st&&X.end(T),R.isScene===!0&&R.onAfterRender(T,R,j),Ft.resetDefaultState(),ft=-1,ot=null,N.pop(),N.length>0?(I=N[N.length-1],Ot===!0&&Bt.setGlobalState(T.clippingPlanes,I.state.camera)):I=null,B.pop(),B.length>0?z=B[B.length-1]:z=null};function oi(R,j,lt,st){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ut.intersectsSprite(R)){st&&_e.setFromMatrixPosition(R.matrixWorld).applyMatrix4(tn);const Gt=wt.update(R),Pt=R.material;Pt.visible&&z.push(R,Gt,Pt,lt,_e.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ut.intersectsObject(R))){const Gt=wt.update(R),Pt=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_e.copy(R.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),_e.copy(Gt.boundingSphere.center)),_e.applyMatrix4(R.matrixWorld).applyMatrix4(tn)),Array.isArray(Pt)){const Vt=Gt.groups;for(let Wt=0,Jt=Vt.length;Wt<Jt;Wt++){const Yt=Vt[Wt],$t=Pt[Yt.materialIndex];$t&&$t.visible&&z.push(R,Gt,$t,lt,_e.z,Yt)}}else Pt.visible&&z.push(R,Gt,Pt,lt,_e.z,null)}}const Nt=R.children;for(let Gt=0,Pt=Nt.length;Gt<Pt;Gt++)oi(Nt[Gt],j,lt,st)}function ln(R,j,lt,st){const{opaque:K,transmissive:Nt,transparent:Gt}=R;I.setupLightsView(lt),Ot===!0&&Bt.setGlobalState(T.clippingPlanes,lt),st&&qt.viewport(L.copy(st)),K.length>0&&bi(K,j,lt),Nt.length>0&&bi(Nt,j,lt),Gt.length>0&&bi(Gt,j,lt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function yn(R,j,lt,st){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[st.id]===void 0){const $t=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[st.id]=new Xi(1,1,{generateMipmaps:!0,type:$t?Ea:Si,minFilter:Os,samples:Le.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}const Nt=I.state.transmissionRenderTarget[st.id],Gt=st.viewport||L;Nt.setSize(Gt.z*T.transmissionResolutionScale,Gt.w*T.transmissionResolutionScale);const Pt=T.getRenderTarget(),Vt=T.getActiveCubeFace(),Wt=T.getActiveMipmapLevel();T.setRenderTarget(Nt),T.getClearColor(yt),xt=T.getClearAlpha(),xt<1&&T.setClearColor(16777215,.5),T.clear(),oe&&Dt.render(lt);const Jt=T.toneMapping;T.toneMapping=ki;const Yt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),I.setupLightsView(st),Ot===!0&&Bt.setGlobalState(T.clippingPlanes,st),bi(R,lt,st),q.updateMultisampleRenderTarget(Nt),q.updateRenderTargetMipmap(Nt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let De=0,Qe=j.length;De<Qe;De++){const qe=j[De],{object:Oe,geometry:Kt,material:Ue,group:se}=qe;if(Ue.side===va&&Oe.layers.test(st.layers)){const Mn=Ue.side;Ue.side=Zn,Ue.needsUpdate=!0,ks(Oe,lt,st,Kt,Ue,se),Ue.side=Mn,Ue.needsUpdate=!0,$t=!0}}$t===!0&&(q.updateMultisampleRenderTarget(Nt),q.updateRenderTargetMipmap(Nt))}T.setRenderTarget(Pt,Vt,Wt),T.setClearColor(yt,xt),Yt!==void 0&&(st.viewport=Yt),T.toneMapping=Jt}function bi(R,j,lt){const st=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Nt=R.length;K<Nt;K++){const Gt=R[K],{object:Pt,geometry:Vt,group:Wt}=Gt;let Jt=Gt.material;Jt.allowOverride===!0&&st!==null&&(Jt=st),Pt.layers.test(lt.layers)&&ks(Pt,j,lt,Vt,Jt,Wt)}}function ks(R,j,lt,st,K,Nt){R.onBeforeRender(T,j,lt,st,K,Nt),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(T,j,lt,st,R,Nt),K.transparent===!0&&K.side===va&&K.forceSinglePass===!1?(K.side=Zn,K.needsUpdate=!0,T.renderBufferDirect(lt,j,st,K,R,Nt),K.side=os,K.needsUpdate=!0,T.renderBufferDirect(lt,j,st,K,R,Nt),K.side=va):T.renderBufferDirect(lt,j,st,K,R,Nt),R.onAfterRender(T,j,lt,st,K,Nt)}function Xs(R,j,lt){j.isScene!==!0&&(j=we);const st=E.get(R),K=I.state.lights,Nt=I.state.shadowsArray,Gt=K.state.version,Pt=Xt.getParameters(R,K.state,Nt,j,lt),Vt=Xt.getProgramCacheKey(Pt);let Wt=st.programs;st.environment=R.isMeshStandardMaterial?j.environment:null,st.fog=j.fog,st.envMap=(R.isMeshStandardMaterial?St:dt).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Wt===void 0&&(R.addEventListener("dispose",Nn),Wt=new Map,st.programs=Wt);let Jt=Wt.get(Vt);if(Jt!==void 0){if(st.currentProgram===Jt&&st.lightsStateVersion===Gt)return no(R,Pt),Jt}else Pt.uniforms=Xt.getUniforms(R),R.onBeforeCompile(Pt,T),Jt=Xt.acquireProgram(Pt,Vt),Wt.set(Vt,Jt),st.uniforms=Pt.uniforms;const Yt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Yt.clippingPlanes=Bt.uniform),no(R,Pt),st.needsLights=Aa(R),st.lightsStateVersion=Gt,st.needsLights&&(Yt.ambientLightColor.value=K.state.ambient,Yt.lightProbe.value=K.state.probe,Yt.directionalLights.value=K.state.directional,Yt.directionalLightShadows.value=K.state.directionalShadow,Yt.spotLights.value=K.state.spot,Yt.spotLightShadows.value=K.state.spotShadow,Yt.rectAreaLights.value=K.state.rectArea,Yt.ltc_1.value=K.state.rectAreaLTC1,Yt.ltc_2.value=K.state.rectAreaLTC2,Yt.pointLights.value=K.state.point,Yt.pointLightShadows.value=K.state.pointShadow,Yt.hemisphereLights.value=K.state.hemi,Yt.directionalShadowMap.value=K.state.directionalShadowMap,Yt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Yt.spotShadowMap.value=K.state.spotShadowMap,Yt.spotLightMatrix.value=K.state.spotLightMatrix,Yt.spotLightMap.value=K.state.spotLightMap,Yt.pointShadowMap.value=K.state.pointShadowMap,Yt.pointShadowMatrix.value=K.state.pointShadowMatrix),st.currentProgram=Jt,st.uniformsList=null,Jt}function _l(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=ic.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function no(R,j){const lt=E.get(R);lt.outputColorSpace=j.outputColorSpace,lt.batching=j.batching,lt.batchingColor=j.batchingColor,lt.instancing=j.instancing,lt.instancingColor=j.instancingColor,lt.instancingMorph=j.instancingMorph,lt.skinning=j.skinning,lt.morphTargets=j.morphTargets,lt.morphNormals=j.morphNormals,lt.morphColors=j.morphColors,lt.morphTargetsCount=j.morphTargetsCount,lt.numClippingPlanes=j.numClippingPlanes,lt.numIntersection=j.numClipIntersection,lt.vertexAlphas=j.vertexAlphas,lt.vertexTangents=j.vertexTangents,lt.toneMapping=j.toneMapping}function ls(R,j,lt,st,K){j.isScene!==!0&&(j=we),q.resetTextureUnits();const Nt=j.fog,Gt=st.isMeshStandardMaterial?j.environment:null,Pt=$===null?T.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Zr,Vt=(st.isMeshStandardMaterial?St:dt).get(st.envMap||Gt),Wt=st.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Jt=!!lt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Yt=!!lt.morphAttributes.position,$t=!!lt.morphAttributes.normal,De=!!lt.morphAttributes.color;let Qe=ki;st.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Qe=T.toneMapping);const qe=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Oe=qe!==void 0?qe.length:0,Kt=E.get(st),Ue=I.state.lights;if(Ot===!0&&(ce===!0||R!==ot)){const Tn=R===ot&&st.id===ft;Bt.setState(st,R,Tn)}let se=!1;st.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ue.state.version||Kt.outputColorSpace!==Pt||K.isBatchedMesh&&Kt.batching===!1||!K.isBatchedMesh&&Kt.batching===!0||K.isBatchedMesh&&Kt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Kt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Kt.instancing===!1||!K.isInstancedMesh&&Kt.instancing===!0||K.isSkinnedMesh&&Kt.skinning===!1||!K.isSkinnedMesh&&Kt.skinning===!0||K.isInstancedMesh&&Kt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Kt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Kt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Kt.instancingMorph===!1&&K.morphTexture!==null||Kt.envMap!==Vt||st.fog===!0&&Kt.fog!==Nt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Bt.numPlanes||Kt.numIntersection!==Bt.numIntersection)||Kt.vertexAlphas!==Wt||Kt.vertexTangents!==Jt||Kt.morphTargets!==Yt||Kt.morphNormals!==$t||Kt.morphColors!==De||Kt.toneMapping!==Qe||Kt.morphTargetsCount!==Oe)&&(se=!0):(se=!0,Kt.__version=st.version);let Mn=Kt.currentProgram;se===!0&&(Mn=Xs(st,j,K));let Zi=!1,En=!1,li=!1;const Ie=Mn.getUniforms(),bn=Kt.uniforms;if(qt.useProgram(Mn.program)&&(Zi=!0,En=!0,li=!0),st.id!==ft&&(ft=st.id,En=!0),Zi||ot!==R){qt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ie.setValue(V,"projectionMatrix",R.projectionMatrix),Ie.setValue(V,"viewMatrix",R.matrixWorldInverse);const An=Ie.map.cameraPosition;An!==void 0&&An.setValue(V,xe.setFromMatrixPosition(R.matrixWorld)),Le.logarithmicDepthBuffer&&Ie.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Ie.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),ot!==R&&(ot=R,En=!0,li=!0)}if(Kt.needsLights&&(Ue.state.directionalShadowMap.length>0&&Ie.setValue(V,"directionalShadowMap",Ue.state.directionalShadowMap,q),Ue.state.spotShadowMap.length>0&&Ie.setValue(V,"spotShadowMap",Ue.state.spotShadowMap,q),Ue.state.pointShadowMap.length>0&&Ie.setValue(V,"pointShadowMap",Ue.state.pointShadowMap,q)),K.isSkinnedMesh){Ie.setOptional(V,K,"bindMatrix"),Ie.setOptional(V,K,"bindMatrixInverse");const Tn=K.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ie.setValue(V,"boneTexture",Tn.boneTexture,q))}K.isBatchedMesh&&(Ie.setOptional(V,K,"batchingTexture"),Ie.setValue(V,"batchingTexture",K._matricesTexture,q),Ie.setOptional(V,K,"batchingIdTexture"),Ie.setValue(V,"batchingIdTexture",K._indirectTexture,q),Ie.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Ie.setValue(V,"batchingColorTexture",K._colorsTexture,q));const pn=lt.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&fe.update(K,lt,Mn),(En||Kt.receiveShadow!==K.receiveShadow)&&(Kt.receiveShadow=K.receiveShadow,Ie.setValue(V,"receiveShadow",K.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(bn.envMap.value=Vt,bn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&j.environment!==null&&(bn.envMapIntensity.value=j.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=VA()),En&&(Ie.setValue(V,"toneMappingExposure",T.toneMappingExposure),Kt.needsLights&&io(bn,li),Nt&&st.fog===!0&&ee.refreshFogUniforms(bn,Nt),ee.refreshMaterialUniforms(bn,st,mt,at,I.state.transmissionRenderTarget[R.id]),ic.upload(V,_l(Kt),bn,q)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(ic.upload(V,_l(Kt),bn,q),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Ie.setValue(V,"center",K.center),Ie.setValue(V,"modelViewMatrix",K.modelViewMatrix),Ie.setValue(V,"normalMatrix",K.normalMatrix),Ie.setValue(V,"modelMatrix",K.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Tn=st.uniformsGroups;for(let An=0,Ws=Tn.length;An<Ws;An++){const Ti=Tn[An];Mt.update(Ti,Mn),Mt.bind(Ti,Mn)}}return Mn}function io(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Aa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(R,j,lt){const st=E.get(R);st.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=j,E.get(R.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:lt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const lt=E.get(R);lt.__webglFramebuffer=j,lt.__useDefaultFramebuffer=j===void 0};const Ra=V.createFramebuffer();this.setRenderTarget=function(R,j=0,lt=0){$=R,G=j,Q=lt;let st=null,K=!1,Nt=!1;if(R){const Pt=E.get(R);if(Pt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(V.FRAMEBUFFER,Pt.__webglFramebuffer),L.copy(R.viewport),F.copy(R.scissor),nt=R.scissorTest,qt.viewport(L),qt.scissor(F),qt.setScissorTest(nt),ft=-1;return}else if(Pt.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Pt.__hasExternalTextures)q.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Jt=R.depthTexture;if(Pt.__boundDepthTexture!==Jt){if(Jt!==null&&E.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const Vt=R.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Nt=!0);const Wt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Wt[j])?st=Wt[j][lt]:st=Wt[j],K=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?st=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Wt)?st=Wt[lt]:st=Wt,L.copy(R.viewport),F.copy(R.scissor),nt=R.scissorTest}else L.copy(it).multiplyScalar(mt).floor(),F.copy(Y).multiplyScalar(mt).floor(),nt=vt;if(lt!==0&&(st=Ra),qt.bindFramebuffer(V.FRAMEBUFFER,st)&&qt.drawBuffers(R,st),qt.viewport(L),qt.scissor(F),qt.setScissorTest(nt),K){const Pt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Pt.__webglTexture,lt)}else if(Nt){const Pt=j;for(let Vt=0;Vt<R.textures.length;Vt++){const Wt=E.get(R.textures[Vt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,lt,Pt)}}else if(R!==null&&lt!==0){const Pt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Pt.__webglTexture,lt)}ft=-1},this.readRenderTargetPixels=function(R,j,lt,st,K,Nt,Gt,Pt=0){if(!(R&&R.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Gt!==void 0&&(Vt=Vt[Gt]),Vt){qt.bindFramebuffer(V.FRAMEBUFFER,Vt);try{const Wt=R.textures[Pt],Jt=Wt.format,Yt=Wt.type;if(!Le.textureFormatReadable(Jt)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Yt)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-st&&lt>=0&&lt<=R.height-K&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Pt),V.readPixels(j,lt,st,K,Tt.convert(Jt),Tt.convert(Yt),Nt))}finally{const Wt=$!==null?E.get($).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(R,j,lt,st,K,Nt,Gt,Pt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Gt!==void 0&&(Vt=Vt[Gt]),Vt)if(j>=0&&j<=R.width-st&&lt>=0&&lt<=R.height-K){qt.bindFramebuffer(V.FRAMEBUFFER,Vt);const Wt=R.textures[Pt],Jt=Wt.format,Yt=Wt.type;if(!Le.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.bufferData(V.PIXEL_PACK_BUFFER,Nt.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Pt),V.readPixels(j,lt,st,K,Tt.convert(Jt),Tt.convert(Yt),0);const De=$!==null?E.get($).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,De);const Qe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await jy(V,Qe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Nt),V.deleteBuffer($t),V.deleteSync(Qe),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,lt=0){const st=Math.pow(2,-lt),K=Math.floor(R.image.width*st),Nt=Math.floor(R.image.height*st),Gt=j!==null?j.x:0,Pt=j!==null?j.y:0;q.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,lt,0,0,Gt,Pt,K,Nt),qt.unbindTexture()};const us=V.createFramebuffer(),Ca=V.createFramebuffer();this.copyTextureToTexture=function(R,j,lt=null,st=null,K=0,Nt=null){Nt===null&&(K!==0?(cl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Nt=K,K=0):Nt=0);let Gt,Pt,Vt,Wt,Jt,Yt,$t,De,Qe;const qe=R.isCompressedTexture?R.mipmaps[Nt]:R.image;if(lt!==null)Gt=lt.max.x-lt.min.x,Pt=lt.max.y-lt.min.y,Vt=lt.isBox3?lt.max.z-lt.min.z:1,Wt=lt.min.x,Jt=lt.min.y,Yt=lt.isBox3?lt.min.z:0;else{const pn=Math.pow(2,-K);Gt=Math.floor(qe.width*pn),Pt=Math.floor(qe.height*pn),R.isDataArrayTexture?Vt=qe.depth:R.isData3DTexture?Vt=Math.floor(qe.depth*pn):Vt=1,Wt=0,Jt=0,Yt=0}st!==null?($t=st.x,De=st.y,Qe=st.z):($t=0,De=0,Qe=0);const Oe=Tt.convert(j.format),Kt=Tt.convert(j.type);let Ue;j.isData3DTexture?(q.setTexture3D(j,0),Ue=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(q.setTexture2DArray(j,0),Ue=V.TEXTURE_2D_ARRAY):(q.setTexture2D(j,0),Ue=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const se=V.getParameter(V.UNPACK_ROW_LENGTH),Mn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Zi=V.getParameter(V.UNPACK_SKIP_PIXELS),En=V.getParameter(V.UNPACK_SKIP_ROWS),li=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,qe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Wt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Jt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Yt);const Ie=R.isDataArrayTexture||R.isData3DTexture,bn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const pn=E.get(R),Tn=E.get(j),An=E.get(pn.__renderTarget),Ws=E.get(Tn.__renderTarget);qt.bindFramebuffer(V.READ_FRAMEBUFFER,An.__webglFramebuffer),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ws.__webglFramebuffer);for(let Ti=0;Ti<Vt;Ti++)Ie&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,K,Yt+Ti),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(j).__webglTexture,Nt,Qe+Ti)),V.blitFramebuffer(Wt,Jt,Gt,Pt,$t,De,Gt,Pt,V.DEPTH_BUFFER_BIT,V.NEAREST);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||E.has(R)){const pn=E.get(R),Tn=E.get(j);qt.bindFramebuffer(V.READ_FRAMEBUFFER,us),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ca);for(let An=0;An<Vt;An++)Ie?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pn.__webglTexture,K,Yt+An):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pn.__webglTexture,K),bn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Tn.__webglTexture,Nt,Qe+An):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Tn.__webglTexture,Nt),K!==0?V.blitFramebuffer(Wt,Jt,Gt,Pt,$t,De,Gt,Pt,V.COLOR_BUFFER_BIT,V.NEAREST):bn?V.copyTexSubImage3D(Ue,Nt,$t,De,Qe+An,Wt,Jt,Gt,Pt):V.copyTexSubImage2D(Ue,Nt,$t,De,Wt,Jt,Gt,Pt);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else bn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Ue,Nt,$t,De,Qe,Gt,Pt,Vt,Oe,Kt,qe.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Ue,Nt,$t,De,Qe,Gt,Pt,Vt,Oe,qe.data):V.texSubImage3D(Ue,Nt,$t,De,Qe,Gt,Pt,Vt,Oe,Kt,qe):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Nt,$t,De,Gt,Pt,Oe,Kt,qe.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Nt,$t,De,qe.width,qe.height,Oe,qe.data):V.texSubImage2D(V.TEXTURE_2D,Nt,$t,De,Gt,Pt,Oe,Kt,qe);V.pixelStorei(V.UNPACK_ROW_LENGTH,se),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Zi),V.pixelStorei(V.UNPACK_SKIP_ROWS,En),V.pixelStorei(V.UNPACK_SKIP_IMAGES,li),Nt===0&&j.generateMipmaps&&V.generateMipmap(Ue),qt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){G=0,Q=0,$=null,qt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const uv={type:"change"},vp={type:"start"},Zv={type:"end"},Qu=new fc,cv=new as,XA=Math.cos(70*Uv.DEG2RAD),_n=new J,jn=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ed=1e-6;class WA extends qM{constructor(t,i=null){super(t,i),this.state=We.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new Bs,this._lastTargetPosition=new J,this._quat=new Bs().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fg,this._sphericalDelta=new Fg,this._scale=1,this._panOffset=new J,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new J,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qA.bind(this),this._onPointerDown=YA.bind(this),this._onPointerUp=jA.bind(this),this._onContextMenu=eR.bind(this),this._onMouseWheel=QA.bind(this),this._onKeyDown=JA.bind(this),this._onTouchStart=$A.bind(this),this._onTouchMove=tR.bind(this),this._onMouseDown=ZA.bind(this),this._onMouseMove=KA.bind(this),this._interceptControlDown=nR.bind(this),this._interceptControlUp=iR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uv),this.update(),this.state=We.NONE}update(t=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=jn:s>Math.PI&&(s-=jn),l<-Math.PI?l+=jn:l>Math.PI&&(l-=jn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=_n.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Qu.origin.copy(this.object.position),Qu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qu.direction))<XA?this.object.lookAt(this.target):(cv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qu.intersectPlane(cv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>ed||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ed||this._lastTargetPosition.distanceToSquared(this.target)>ed?(this.dispatchEvent(uv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?jn/60*this.autoRotateSpeed*t:jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-t),this._panOffset.add(_n)}_panUp(t,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(t),this._panOffset.add(_n)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let u=_n.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ne,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function YA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function qA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function jA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zv),this.state=We.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function ZA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=We.DOLLY;break;case kr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=We.ROTATE}break;case kr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(vp)}function KA(r){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function QA(r){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(r.preventDefault(),this.dispatchEvent(vp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Zv))}function JA(r){this.enabled!==!1&&this._handleKeyDown(r)}function $A(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=We.TOUCH_ROTATE;break;case Gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case Gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=We.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(vp)}function tR(r){switch(this._trackPointer(r),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=We.NONE}}function eR(r){this.enabled!==!1&&r.preventDefault()}function nR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Is=Object.freeze({Linear:Object.freeze({None:function(r){return r},In:function(r){return this.None(r)},Out:function(r){return this.None(r)},InOut:function(r){return this.None(r)}}),Quadratic:Object.freeze({In:function(r){return r*r},Out:function(r){return r*(2-r)},InOut:function(r){return(r*=2)<1?.5*r*r:-.5*(--r*(r-2)-1)}}),Cubic:Object.freeze({In:function(r){return r*r*r},Out:function(r){return--r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r:.5*((r-=2)*r*r+2)}}),Quartic:Object.freeze({In:function(r){return r*r*r*r},Out:function(r){return 1- --r*r*r*r},InOut:function(r){return(r*=2)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2)}}),Quintic:Object.freeze({In:function(r){return r*r*r*r*r},Out:function(r){return--r*r*r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2)}}),Sinusoidal:Object.freeze({In:function(r){return 1-Math.sin((1-r)*Math.PI/2)},Out:function(r){return Math.sin(r*Math.PI/2)},InOut:function(r){return .5*(1-Math.sin(Math.PI*(.5-r)))}}),Exponential:Object.freeze({In:function(r){return r===0?0:Math.pow(1024,r-1)},Out:function(r){return r===1?1:1-Math.pow(2,-10*r)},InOut:function(r){return r===0?0:r===1?1:(r*=2)<1?.5*Math.pow(1024,r-1):.5*(-Math.pow(2,-10*(r-1))+2)}}),Circular:Object.freeze({In:function(r){return 1-Math.sqrt(1-r*r)},Out:function(r){return Math.sqrt(1- --r*r)},InOut:function(r){return(r*=2)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1)}}),Elastic:Object.freeze({In:function(r){return r===0?0:r===1?1:-Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI)},Out:function(r){return r===0?0:r===1?1:Math.pow(2,-10*r)*Math.sin((r-.1)*5*Math.PI)+1},InOut:function(r){return r===0?0:r===1?1:(r*=2,r<1?-.5*Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI):.5*Math.pow(2,-10*(r-1))*Math.sin((r-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(r){var t=1.70158;return r===1?1:r*r*((t+1)*r-t)},Out:function(r){var t=1.70158;return r===0?0:--r*r*((t+1)*r+t)+1},InOut:function(r){var t=2.5949095;return(r*=2)<1?.5*(r*r*((t+1)*r-t)):.5*((r-=2)*r*((t+1)*r+t)+2)}}),Bounce:Object.freeze({In:function(r){return 1-Is.Bounce.Out(1-r)},Out:function(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},InOut:function(r){return r<.5?Is.Bounce.In(r*2)*.5:Is.Bounce.Out(r*2-1)*.5+.5}}),generatePow:function(r){return r===void 0&&(r=4),r=r<Number.EPSILON?Number.EPSILON:r,r=r>1e4?1e4:r,{In:function(t){return Math.pow(t,r)},Out:function(t){return 1-Math.pow(1-t,r)},InOut:function(t){return t<.5?Math.pow(t*2,r)/2:(1-Math.pow(2-t*2,r))/2+.5}}}}),sl=function(){return performance.now()},aR=(function(){function r(){this._tweens={},this._tweensAddedDuringUpdate={}}return r.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(i){return t._tweens[i]})},r.prototype.removeAll=function(){this._tweens={}},r.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},r.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},r.prototype.update=function(t,i){t===void 0&&(t=sl()),i===void 0&&(i=!1);var s=Object.keys(this._tweens);if(s.length===0)return!1;for(;s.length>0;){this._tweensAddedDuringUpdate={};for(var l=0;l<s.length;l++){var u=this._tweens[s[l]],h=!i;u&&u.update(t,h)===!1&&!i&&delete this._tweens[s[l]]}s=Object.keys(this._tweensAddedDuringUpdate)}return!0},r})(),ep={Linear:function(r,t){var i=r.length-1,s=i*t,l=Math.floor(s),u=ep.Utils.Linear;return t<0?u(r[0],r[1],s):t>1?u(r[i],r[i-1],i-s):u(r[l],r[l+1>i?i:l+1],s-l)},Utils:{Linear:function(r,t,i){return(t-r)*i+r}}},Kv=(function(){function r(){}return r.nextId=function(){return r._nextId++},r._nextId=0,r})(),np=new aR,fv=(function(){function r(t,i){i===void 0&&(i=np),this._object=t,this._group=i,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Is.Linear.None,this._interpolationFunction=ep.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Kv.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return r.prototype.getId=function(){return this._id},r.prototype.isPlaying=function(){return this._isPlaying},r.prototype.isPaused=function(){return this._isPaused},r.prototype.getDuration=function(){return this._duration},r.prototype.to=function(t,i){if(i===void 0&&(i=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=i<0?0:i,this},r.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t<0?0:t,this},r.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},r.prototype.start=function(t,i){if(t===void 0&&(t=sl()),i===void 0&&(i=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var s in this._valuesStartRepeat)this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||i){if(this._propertiesAreSetUp=!0,!this._isDynamic){var l={};for(var u in this._valuesEnd)l[u]=this._valuesEnd[u];this._valuesEnd=l}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,i)}return this},r.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},r.prototype._setupProperties=function(t,i,s,l,u){for(var h in s){var d=t[h],m=Array.isArray(d),p=m?"array":typeof d,g=!m&&Array.isArray(s[h]);if(!(p==="undefined"||p==="function")){if(g){var _=s[h];if(_.length===0)continue;for(var S=[d],M=0,b=_.length;M<b;M+=1){var C=this._handleRelativeValue(d,_[M]);if(isNaN(C)){g=!1,console.warn("Found invalid interpolation list. Skipping.");break}S.push(C)}g&&(s[h]=S)}if((p==="object"||m)&&d&&!g){i[h]=m?[]:{};var y=d;for(var x in y)i[h][x]=y[x];l[h]=m?[]:{};var _=s[h];if(!this._isDynamic){var P={};for(var x in _)P[x]=_[x];s[h]=_=P}this._setupProperties(y,i[h],_,l[h],u)}else(typeof i[h]>"u"||u)&&(i[h]=d),m||(i[h]*=1),g?l[h]=s[h].slice().reverse():l[h]=i[h]||0}}},r.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},r.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},r.prototype.pause=function(t){return t===void 0&&(t=sl()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},r.prototype.resume=function(t){return t===void 0&&(t=sl()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},r.prototype.stopChainedTweens=function(){for(var t=0,i=this._chainedTweens.length;t<i;t++)this._chainedTweens[t].stop();return this},r.prototype.group=function(t){return t===void 0&&(t=np),this._group=t,this},r.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},r.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},r.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},r.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},r.prototype.easing=function(t){return t===void 0&&(t=Is.Linear.None),this._easingFunction=t,this},r.prototype.interpolation=function(t){return t===void 0&&(t=ep.Linear),this._interpolationFunction=t,this},r.prototype.chain=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return this._chainedTweens=t,this},r.prototype.onStart=function(t){return this._onStartCallback=t,this},r.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},r.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},r.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},r.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},r.prototype.onStop=function(t){return this._onStopCallback=t,this},r.prototype.update=function(t,i){var s=this,l;if(t===void 0&&(t=sl()),i===void 0&&(i=!0),this._isPaused)return!0;var u,h=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>h)return!1;i&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var d=t-this._startTime,m=this._duration+((l=this._repeatDelayTime)!==null&&l!==void 0?l:this._delayTime),p=this._duration+this._repeat*m,g=function(){if(s._duration===0||d>p)return 1;var y=Math.trunc(d/m),x=d-y*m,P=Math.min(x/s._duration,1);return P===0&&d===s._duration?1:P},_=g(),S=this._easingFunction(_);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,S),this._onUpdateCallback&&this._onUpdateCallback(this._object,_),this._duration===0||d>=this._duration)if(this._repeat>0){var M=Math.min(Math.trunc((d-this._duration)/m)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=M);for(u in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[u]=="string"&&(this._valuesStartRepeat[u]=this._valuesStartRepeat[u]+parseFloat(this._valuesEnd[u])),this._yoyo&&this._swapEndStartRepeatValues(u),this._valuesStart[u]=this._valuesStartRepeat[u];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=m*M,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var b=0,C=this._chainedTweens.length;b<C;b++)this._chainedTweens[b].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},r.prototype._updateProperties=function(t,i,s,l){for(var u in s)if(i[u]!==void 0){var h=i[u]||0,d=s[u],m=Array.isArray(t[u]),p=Array.isArray(d),g=!m&&p;g?t[u]=this._interpolationFunction(d,l):typeof d=="object"&&d?this._updateProperties(t[u],h,d,l):(d=this._handleRelativeValue(h,d),typeof d=="number"&&(t[u]=h+(d-h)*l))}},r.prototype._handleRelativeValue=function(t,i){return typeof i!="string"?i:i.charAt(0)==="+"||i.charAt(0)==="-"?t+parseFloat(i):parseFloat(i)},r.prototype._swapEndStartRepeatValues=function(t){var i=this._valuesStartRepeat[t],s=this._valuesEnd[t];typeof s=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(s):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=i},r})();Kv.nextId;var ji=np;ji.getAll.bind(ji);ji.removeAll.bind(ji);ji.add.bind(ji);ji.remove.bind(ji);var sR=ji.update.bind(ji);const rR=({entries:r,activeEntryId:t,currentTime:i,searchTerm:s="",onStarClick:l,onEmptySpaceClick:u,onSwipe:h,resetTrigger:d=0})=>{const m=ue.useRef(null),p=ue.useRef(null),g=ue.useRef(new OM),_=ue.useRef(null);ue.useRef(null);const S=ue.useRef(null),M=ue.useRef(new zs),b=ue.useRef(new zs),C=ue.useRef(1),y=ue.useRef(1),[x,P]=ue.useState(!1),O=ue.useRef([]),z=ue.useRef(0),I=ue.useRef({}),B=N=>{if(I.current[N])return I.current[N];const X=document.createElement("canvas");X.width=128,X.height=128;const T=X.getContext("2d"),w=T.createRadialGradient(64,64,0,64,64,64);w.addColorStop(0,"#ffffff"),w.addColorStop(.2,N),w.addColorStop(.5,N+"33"),w.addColorStop(1,"rgba(0,0,0,0)"),T.fillStyle=w,T.fillRect(0,0,128,128);const G=new HM(X);return I.current[N]=G,G};return ue.useEffect(()=>{if(!m.current)return;const N=new xi(55,window.innerWidth/window.innerHeight,1,6e4);N.position.set(0,1500,4e3),_.current=N;const X=new kA({antialias:!0,alpha:!0});X.setSize(window.innerWidth,window.innerHeight),X.setPixelRatio(window.devicePixelRatio),m.current.appendChild(X.domElement);const T=new WA(N,X.domElement);T.enableDamping=!0,T.dampingFactor=.05,S.current=T,g.current.add(M.current),M.current.add(b.current);const w=new Kn,G=new Float32Array(2e4*3);for(let F=0;F<2e4*3;F++)G[F]=(Math.random()-.5)*2e4;w.setAttribute("position",new ri(G,3));const Q=new Og(w,new Kd({size:4,color:5596927,transparent:!0,opacity:.3,blending:Vr}));M.current.add(Q);const $=new Kn,ft=new Float32Array(15e3*3);for(let F=0;F<15e3;F++){const nt=F*3,yt=2e3+Math.random()*5e3,xt=Math.random()*Math.PI*2;ft[nt]=Math.cos(xt)*yt,ft[nt+1]=(Math.random()-.5)*600,ft[nt+2]=Math.sin(xt)*yt}$.setAttribute("position",new ri(ft,3));const ot=new Og($,new Kd({size:6,color:8965375,transparent:!0,opacity:.5,blending:Vr}));M.current.add(ot);const L=F=>{sR(F),T.update(),C.current+=(y.current-C.current)*.1,b.current.scale.setScalar(C.current),M.current.rotation.y+=1e-4,X.render(g.current,N),requestAnimationFrame(L)};return L(0),()=>{X.dispose()}},[]),ue.useEffect(()=>{if(!b.current)return;b.current.clear(),r.filter(X=>X.timestamp<=i&&(!s||X.text.toLowerCase().includes(s.toLowerCase()))).forEach(X=>{const T=new zs;T.name=X.id,T.position.set(X.x,X.y,X.z);const w=t===X.id,G=new Ng(new Zd({map:B(X.moodColor),transparent:!0,opacity:w?1:.85,blending:Vr}));if(G.scale.setScalar(w?280:120),T.add(G),w){const $=new Ng(new Zd({map:B(X.moodColor),transparent:!0,opacity:.4,blending:Vr}));$.scale.setScalar(500),T.add($)}const Q=new Yi(new gp(150,8,8),new _p({visible:!1}));T.add(Q),b.current.add(T)})},[r,i,t,s]),ue.useEffect(()=>{if(!p.current)return;const N=window;if(!N.Hands||!N.Camera)return;const X=new N.Hands({locateFile:w=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915/${w}`});X.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.5}),X.onResults(w=>{let G=!1;w.multiHandLandmarks&&w.multiHandLandmarks.forEach((Q,$)=>{if(w.multiHandedness[$].label==="Left"){G=!0;const ot=Date.now(),L=Q[8].x;if(O.current.push({x:L,t:ot}),O.current.length>5&&ot>z.current){const F=O.current[O.current.length-1].x-O.current[0].x;Math.abs(F)>.15&&(h(F<0?"right":"left"),z.current=ot+800,O.current=[])}}else{const ot=Math.sqrt(Math.pow(Q[4].x-Q[8].x,2)+Math.pow(Q[4].y-Q[8].y,2));y.current=Uv.mapLinear(ot,.05,.4,.3,5)}}),P(G)});const T=new N.Camera(p.current,{onFrame:async()=>{p.current&&await X.send({image:p.current})},width:640,height:480});return T.start(),()=>{T.stop(),X.close()}},[h]),ue.useEffect(()=>{d>0&&_.current&&S.current&&(new fv(_.current.position).to({x:0,y:1500,z:4e3},1500).easing(Is.Quadratic.Out).start(),new fv(S.current.target).to({x:0,y:0,z:0},1500).easing(Is.Quadratic.Out).start())},[d]),Ct.jsxs(Ct.Fragment,{children:[Ct.jsx("video",{ref:p,className:"hidden",autoPlay:!0,playsInline:!0,muted:!0}),Ct.jsx("div",{className:"fixed inset-0 pointer-events-none z-[999]",children:x&&Ct.jsx("div",{className:"absolute top-12 right-12 text-blue-400 text-[10px] tracking-widest animate-pulse uppercase",children:"NAV_READY"})}),Ct.jsx("div",{ref:m,className:"w-full h-full cursor-crosshair",onClick:N=>{const X=m.current.getBoundingClientRect(),T=new ne((N.clientX-X.left)/X.width*2-1,-((N.clientY-X.top)/X.height)*2+1),w=new YM;w.setFromCamera(T,_.current);const G=w.intersectObjects(b.current.children,!0);if(G.length>0){let Q=G[0].object;for(;Q.parent&&Q.parent!==b.current;)Q=Q.parent;l(Q.name)}else{const Q=new J(T.x,T.y,.5).unproject(_.current),$=_.current.position.clone().add(Q.sub(_.current.position).normalize().multiplyScalar(3e3));u($.x,$.y,$.z,N.clientX,N.clientY)}}})]})},hv="my_galaxy_diary_v2",oR="0921",nd=[{hex:"#FFD700",label:"快乐"},{hex:"#4B0082",label:"忧郁"},{hex:"#00FA9A",label:"平静"},{hex:"#FF4500",label:"热情"},{hex:"#9370DB",label:"迷茫"},{hex:"#F8F8FF",label:"观察"}],lR=()=>{const[r,t]=ue.useState(!1),[i,s]=ue.useState(""),[l,u]=ue.useState(!1),[h,d]=ue.useState(()=>{try{const Y=localStorage.getItem(hv);return Y?JSON.parse(Y):[]}catch{return[]}}),[m,p]=ue.useState(null),[g,_]=ue.useState(!1),[S,M]=ue.useState(!1),[b,C]=ue.useState(null),[y,x]=ue.useState(""),[P,O]=ue.useState([]),[z,I]=ue.useState(nd[0].hex),[B,N]=ue.useState(""),[X,T]=ue.useState(!1),[w,G]=ue.useState(0),Q=ue.useRef(null),[$,ft]=ue.useState(!1),ot=ue.useMemo(()=>[...h].sort((Y,vt)=>Y.timestamp-vt.timestamp),[h]),L=ue.useMemo(()=>{if(ot.length===0)return{min:Date.now()-864e5,max:Date.now()};const Y=ot[0].timestamp-36e5,vt=ot[ot.length-1].timestamp+1e3;return{min:Y,max:vt}},[ot]),[F,nt]=ue.useState(L.max);ue.useEffect(()=>{nt(L.max)},[h.length,L.max]);const yt=Y=>{i===oR?t(!0):(u(!0),setTimeout(()=>u(!1),500),s(""))},xt=ue.useCallback(Y=>{if(!r)return;const vt=h.find(Ut=>Ut.id===Y);vt&&(p(vt),_(!1))},[h,r]),U=ue.useCallback((Y,vt,Ut,Ot,ce)=>{!r||m||(C({wx:Y,wy:vt,wz:Ut,sx:Ot,sy:ce}),_(!0),x(""),O([]),I(nd[0].hex))},[m,r]),at=ue.useCallback(Y=>{if(!r||ot.length===0)return;let vt=-1;if(!m)vt=Y==="right"?0:ot.length-1;else{const Ut=ot.findIndex(Ot=>Ot.id===m.id);Y==="right"?vt=Math.min(ot.length-1,Ut+1):vt=Math.max(0,Ut-1)}if(vt!==-1){const Ut=ot[vt];p(Ut),nt(Ut.timestamp)}},[m,ot,r]),mt=Y=>{const vt=Y.target.files;vt&&Array.from(vt).forEach(Ut=>{const Ot=new FileReader;Ot.onloadend=()=>{O(ce=>[...ce,Ot.result].slice(-3))},Ot.readAsDataURL(Ut)})},At=Y=>{O(vt=>vt.filter((Ut,Ot)=>Ot!==Y))},Ht=async()=>{if(!y.trim()||!b)return;M(!0);const Y={id:`mem-${Date.now()}`,x:b.wx,y:b.wy,z:b.wz,text:y,images:P,moodColor:z,timestamp:Date.now()};await new Promise(Ut=>setTimeout(Ut,800));const vt=[...h,Y];localStorage.setItem(hv,JSON.stringify(vt)),d(vt),M(!1),_(!1)},it=Y=>new Intl.DateTimeFormat("zh-CN",{month:"long",year:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(Y));return Ct.jsxs("div",{className:"relative w-full h-screen overflow-hidden select-none bg-[#020205]",children:[Ct.jsx("div",{className:`absolute inset-0 z-0 transition-all duration-1000 ${m||g||!r?"opacity-30 blur-[20px] scale-105":"opacity-100 blur-0 scale-100"}`,children:Ct.jsx(rR,{entries:h,activeEntryId:(m==null?void 0:m.id)||null,currentTime:F,searchTerm:B,onStarClick:xt,onEmptySpaceClick:U,onSwipe:at,resetTrigger:w})}),Ct.jsxs("div",{className:`absolute top-12 right-12 z-[100] flex items-center gap-6 transition-all duration-700 ${!r||m||g?"opacity-0 -translate-y-5 pointer-events-none":"opacity-100 pointer-events-auto"}`,children:[Ct.jsx("button",{onClick:Y=>{Y.stopPropagation(),G(vt=>vt+1)},className:"w-10 h-10 glass-card rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all pointer-events-auto",children:Ct.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Ct.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),Ct.jsxs("div",{className:`flex items-center glass-card rounded-full overflow-hidden transition-all duration-500 pointer-events-auto ${X?"w-64 px-4":"w-10 px-0"}`,children:[Ct.jsx("button",{onClick:Y=>{Y.stopPropagation(),T(!X)},className:"w-10 h-10 flex-shrink-0 flex items-center justify-center text-white/40 hover:text-white",children:Ct.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Ct.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),Ct.jsx("input",{type:"text",placeholder:"搜索记忆...",value:B,onKeyDown:Y=>Y.stopPropagation(),onChange:Y=>N(Y.target.value),className:"bg-transparent border-none outline-none text-[10px] text-white/80 tracking-widest uppercase w-full ml-2 placeholder:text-white/20"})]})]}),Ct.jsx("div",{className:`absolute bottom-12 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-12 transition-all duration-1000 ${!r||m||g?"opacity-0 translate-y-12 pointer-events-none":"opacity-100"}`,children:Ct.jsxs("div",{className:`glass-card p-8 rounded-[2.5rem] flex flex-col gap-3 relative overflow-hidden transition-all duration-500 ${$?"timeline-dragging scale-105":""}`,children:[$&&Ct.jsxs(Ct.Fragment,{children:[Ct.jsx("div",{className:"streak top-1/4 left-10",style:{animationDelay:"0s"}}),Ct.jsx("div",{className:"streak top-2/4 right-20",style:{animationDelay:"0.5s"}}),Ct.jsx("div",{className:"streak bottom-1/4 left-40",style:{animationDelay:"1s"}})]}),Ct.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[Ct.jsx("span",{className:"text-[9px] tracking-[0.5em] text-white/20 uppercase font-light",children:"Memory Chrono"}),Ct.jsx("div",{className:`text-center transition-all duration-300 ${$?"scale-125 text-indigo-300 drop-shadow-[0_0_10px_rgba(165,180,252,0.8)]":"text-white/60"}`,children:Ct.jsx("span",{className:"text-[10px] tracking-[0.3em] uppercase font-mono",children:it(F)})}),Ct.jsx("span",{className:"text-[9px] tracking-[0.5em] text-white/20 uppercase font-light",children:"Origin Axis"})]}),Ct.jsxs("div",{className:"relative flex items-center h-4",children:[Ct.jsx("div",{className:"absolute inset-0 rounded-full timeline-track opacity-50"}),Ct.jsx("input",{type:"range",min:L.min,max:L.max,value:F,onMouseDown:()=>ft(!0),onMouseUp:()=>ft(!1),onTouchStart:()=>ft(!0),onTouchEnd:()=>ft(!1),onChange:Y=>nt(Number(Y.target.value)),className:"relative w-full h-1 bg-transparent appearance-none cursor-pointer z-10"})]}),Ct.jsxs("div",{className:"flex justify-between text-[7px] tracking-[0.2em] text-white/10 uppercase px-2 mt-1",children:[Ct.jsx("span",{children:it(L.min).split(" ")[0]}),Ct.jsx("span",{children:"Current Space-Time"}),Ct.jsx("span",{children:it(L.max).split(" ")[0]})]})]})}),m&&Ct.jsx("div",{className:"absolute inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-entrance",onClick:()=>p(null),children:Ct.jsxs("div",{className:"max-w-4xl w-full p-12 md:p-20 rounded-[3rem] glass-card relative pointer-events-auto",onClick:Y=>Y.stopPropagation(),children:[Ct.jsx("div",{className:"absolute top-0 left-0 w-full h-1",style:{background:m.moodColor}}),Ct.jsx("button",{onClick:()=>p(null),className:"absolute top-8 right-8 text-white/20 hover:text-white text-4xl font-thin transition-colors",children:"×"}),Ct.jsxs("div",{className:"text-center mb-10",children:[Ct.jsx("div",{className:"inline-block px-4 py-1 rounded-full border border-white/10 text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4",children:"Memory Resonated"}),Ct.jsx("h3",{className:"text-xs font-mono text-white/40 tracking-widest uppercase",children:it(m.timestamp)})]}),Ct.jsxs("div",{className:"max-h-[60vh] overflow-y-auto pr-4 scrollbar-hide text-center",children:[Ct.jsx("p",{className:"text-2xl md:text-3xl font-extralight text-white/90 leading-relaxed tracking-wide mb-8",children:m.text}),m.images&&m.images.length>0&&Ct.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:m.images.map((Y,vt)=>Ct.jsx("img",{src:Y,alt:"Memory",className:"w-full max-w-md rounded-2xl object-cover shadow-2xl border border-white/10"},vt))})]}),Ct.jsxs("div",{className:"mt-12 flex flex-col items-center",children:[Ct.jsx("div",{className:"w-12 h-[1px] bg-white/10 mb-8"}),Ct.jsx("button",{onClick:()=>p(null),className:"px-10 py-4 rounded-full border border-white/10 text-[10px] tracking-[0.5em] text-white/40 uppercase hover:bg-white/5 transition-all",children:"收回思绪"})]})]})}),g&&b&&Ct.jsx("div",{className:"absolute inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-entrance",onClick:()=>_(!1),children:Ct.jsxs("div",{className:"w-[520px] p-10 rounded-[3rem] glass-card pointer-events-auto border-white/5 shadow-2xl",onClick:Y=>Y.stopPropagation(),children:[Ct.jsxs("div",{className:"flex justify-between items-center mb-8",children:[Ct.jsx("h2",{className:"text-[10px] tracking-[0.5em] text-white/30 uppercase font-light",children:"正在将记忆刻入星系"}),Ct.jsx("button",{onClick:()=>_(!1),className:"text-white/20 hover:text-white/60 transition-colors",children:"×"})]}),Ct.jsx("div",{className:"flex gap-4 mb-10 justify-start",children:nd.map(Y=>Ct.jsx("button",{onClick:()=>I(Y.hex),className:`w-10 h-10 rounded-full transition-all duration-300 relative ${z===Y.hex?"scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]":"opacity-40 grayscale-[40%]"}`,style:{backgroundColor:Y.hex},children:z===Y.hex&&Ct.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-white animate-ping opacity-20"})},Y.hex))}),Ct.jsxs("div",{className:"relative mb-6",children:[Ct.jsx("textarea",{autoFocus:!0,className:"w-full bg-transparent border-none outline-none text-white/90 text-xl font-light h-48 resize-none mb-2 placeholder:text-white/10 leading-relaxed",placeholder:"此时此刻的想法...",value:y,onChange:Y=>x(Y.target.value)}),Ct.jsxs("div",{className:"flex gap-3 mt-4 flex-wrap",children:[P.map((Y,vt)=>Ct.jsxs("div",{className:"relative group w-20 h-20 rounded-xl overflow-hidden border border-white/10",children:[Ct.jsx("img",{src:Y,className:"w-full h-full object-cover"}),Ct.jsx("button",{onClick:()=>At(vt),className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs transition-opacity",children:"移除"})]},vt)),P.length<3&&Ct.jsxs("button",{onClick:()=>{var Y;return(Y=Q.current)==null?void 0:Y.click()},className:"w-20 h-20 rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-white/20 hover:text-white/40 hover:border-white/20 transition-all gap-1",children:[Ct.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Ct.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 4v16m8-8H4"})}),Ct.jsx("span",{className:"text-[8px] uppercase tracking-tighter",children:"添加图片"})]}),Ct.jsx("input",{ref:Q,type:"file",accept:"image/*",multiple:!0,className:"hidden",onChange:mt})]})]}),Ct.jsx("div",{className:"flex justify-between items-center mb-8 px-1",children:Ct.jsx("button",{className:"px-4 py-1.5 rounded-lg bg-white/5 text-[9px] text-white/30 uppercase tracking-[0.2em] border border-white/5 hover:bg-white/10 transition-all",children:"Preview"})}),Ct.jsx("button",{onClick:Ht,disabled:S||!y.trim(),className:`w-full py-5 rounded-3xl transition-all duration-500 text-[10px] text-white tracking-[0.5em] uppercase border ${S||!y.trim()?"bg-transparent border-white/5 text-white/10 cursor-not-allowed":"bg-white/5 hover:bg-white/10 border-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"}`,children:S?"正在镌刻星纹...":"点亮这颗星"})]})}),!r&&Ct.jsx("div",{className:"absolute inset-0 z-[200] flex items-center justify-center bg-[#020205] p-6 animate-entrance",children:Ct.jsxs("div",{className:`glass-card p-12 rounded-[4rem] w-full max-w-sm flex flex-col items-center ${l?"shake":""}`,children:[Ct.jsx("h2",{className:"text-xl font-extralight tracking-[0.5em] text-white/80 mb-12 uppercase",children:"星系权限验证"}),Ct.jsx("input",{autoFocus:!0,type:"password",maxLength:4,placeholder:"密码",value:i,onChange:Y=>s(Y.target.value),onKeyDown:Y=>Y.key==="Enter"&&yt(),className:"w-full bg-white/5 border border-white/10 rounded-3xl py-6 text-center text-2xl text-white tracking-[1em] outline-none mb-8"}),Ct.jsx("button",{onClick:()=>yt(),className:"w-full py-4 rounded-full border border-white/10 text-[10px] text-white/40 tracking-[0.5em] uppercase hover:bg-white/5",children:"开启接入"})]})}),Ct.jsxs("div",{className:`absolute top-12 left-12 z-10 pointer-events-none transition-all duration-1000 ${!r||m||g?"opacity-20 blur-sm":"opacity-100"}`,children:[Ct.jsx("h1",{className:"text-5xl font-extralight tracking-[0.6em] text-white/90 drop-shadow-2xl",children:"星系日记"}),Ct.jsxs("p",{className:"text-[10px] tracking-[0.5em] text-indigo-400/60 mt-4 uppercase",children:["Galaxy Diary • ",h.length," 颗记忆星辰"]})]})]})},Qv=document.getElementById("root");if(!Qv)throw new Error("Could not find root element to mount to");const uR=dy.createRoot(Qv);uR.render(Ct.jsx(sy.StrictMode,{children:Ct.jsx(lR,{})}));
