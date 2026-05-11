function sT(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function oT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Q_={exports:{}},rc={},J_={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ka=Symbol.for("react.element"),aT=Symbol.for("react.portal"),lT=Symbol.for("react.fragment"),uT=Symbol.for("react.strict_mode"),cT=Symbol.for("react.profiler"),fT=Symbol.for("react.provider"),dT=Symbol.for("react.context"),hT=Symbol.for("react.forward_ref"),pT=Symbol.for("react.suspense"),mT=Symbol.for("react.memo"),gT=Symbol.for("react.lazy"),pg=Symbol.iterator;function vT(t){return t===null||typeof t!="object"?null:(t=pg&&t[pg]||t["@@iterator"],typeof t=="function"?t:null)}var ex={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tx=Object.assign,nx={};function wo(t,e,n){this.props=t,this.context=e,this.refs=nx,this.updater=n||ex}wo.prototype.isReactComponent={};wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ix(){}ix.prototype=wo.prototype;function _p(t,e,n){this.props=t,this.context=e,this.refs=nx,this.updater=n||ex}var xp=_p.prototype=new ix;xp.constructor=_p;tx(xp,wo.prototype);xp.isPureReactComponent=!0;var mg=Array.isArray,rx=Object.prototype.hasOwnProperty,yp={current:null},sx={key:!0,ref:!0,__self:!0,__source:!0};function ox(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)rx.call(e,i)&&!sx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ka,type:t,key:s,ref:o,props:r,_owner:yp.current}}function _T(t,e){return{$$typeof:ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ka}function xT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gg=/\/+/g;function Oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xT(""+t.key):e.toString(36)}function jl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ka:case aT:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Oc(o,0):i,mg(r)?(n="",t!=null&&(n=t.replace(gg,"$&/")+"/"),jl(r,e,n,"",function(u){return u})):r!=null&&(Sp(r)&&(r=_T(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(gg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",mg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Oc(s,a);o+=jl(s,e,n,l,r)}else if(l=vT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Oc(s,a++),o+=jl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function el(t,e,n){if(t==null)return t;var i=[],r=0;return jl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function yT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},Xl={transition:null},ST={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:Xl,ReactCurrentOwner:yp};function ax(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:el,forEach:function(t,e,n){el(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return el(t,function(){e++}),e},toArray:function(t){return el(t,function(e){return e})||[]},only:function(t){if(!Sp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=wo;We.Fragment=lT;We.Profiler=cT;We.PureComponent=_p;We.StrictMode=uT;We.Suspense=pT;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ST;We.act=ax;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=tx({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)rx.call(e,l)&&!sx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ka,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:dT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fT,_context:t},t.Consumer=t};We.createElement=ox;We.createFactory=function(t){var e=ox.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:hT,render:t}};We.isValidElement=Sp;We.lazy=function(t){return{$$typeof:gT,_payload:{_status:-1,_result:t},_init:yT}};We.memo=function(t,e){return{$$typeof:mT,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Xl.transition;Xl.transition={};try{t()}finally{Xl.transition=e}};We.unstable_act=ax;We.useCallback=function(t,e){return dn.current.useCallback(t,e)};We.useContext=function(t){return dn.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};We.useEffect=function(t,e){return dn.current.useEffect(t,e)};We.useId=function(){return dn.current.useId()};We.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return dn.current.useMemo(t,e)};We.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};We.useRef=function(t){return dn.current.useRef(t)};We.useState=function(t){return dn.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return dn.current.useTransition()};We.version="18.3.1";J_.exports=We;var z=J_.exports;const lx=oT(z),MT=sT({__proto__:null,default:lx},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ET=z,TT=Symbol.for("react.element"),wT=Symbol.for("react.fragment"),AT=Object.prototype.hasOwnProperty,CT=ET.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RT={key:!0,ref:!0,__self:!0,__source:!0};function ux(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)AT.call(e,i)&&!RT.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:TT,type:t,key:s,ref:o,props:r,_owner:CT.current}}rc.Fragment=wT;rc.jsx=ux;rc.jsxs=ux;Q_.exports=rc;var D=Q_.exports,ad={},cx={exports:{}},Ln={},fx={exports:{}},dx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,j){var q=U.length;U.push(j);e:for(;0<q;){var re=q-1>>>1,ce=U[re];if(0<r(ce,j))U[re]=j,U[q]=ce,q=re;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var j=U[0],q=U.pop();if(q!==j){U[0]=q;e:for(var re=0,ce=U.length,Ie=ce>>>1;re<Ie;){var Oe=2*(re+1)-1,Pe=U[Oe],Z=Oe+1,oe=U[Z];if(0>r(Pe,q))Z<ce&&0>r(oe,Pe)?(U[re]=oe,U[Z]=q,re=Z):(U[re]=Pe,U[Oe]=q,re=Oe);else if(Z<ce&&0>r(oe,q))U[re]=oe,U[Z]=q,re=Z;else break e}}return j}function r(U,j){var q=U.sortIndex-j.sortIndex;return q!==0?q:U.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(U){for(var j=n(u);j!==null;){if(j.callback===null)i(u);else if(j.startTime<=U)i(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function S(U){if(y=!1,_(U),!v)if(n(l)!==null)v=!0,B(w);else{var j=n(u);j!==null&&k(S,j.startTime-U)}}function w(U,j){v=!1,y&&(y=!1,h(x),x=-1),p=!0;var q=f;try{for(_(j),d=n(l);d!==null&&(!(d.expirationTime>j)||U&&!P());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var ce=re(d.expirationTime<=j);j=t.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(l)&&i(l),_(j)}else i(l);d=n(l)}if(d!==null)var Ie=!0;else{var Oe=n(u);Oe!==null&&k(S,Oe.startTime-j),Ie=!1}return Ie}finally{d=null,f=q,p=!1}}var T=!1,R=null,x=-1,A=5,b=-1;function P(){return!(t.unstable_now()-b<A)}function I(){if(R!==null){var U=t.unstable_now();b=U;var j=!0;try{j=R(!0,U)}finally{j?W():(T=!1,R=null)}}else T=!1}var W;if(typeof g=="function")W=function(){g(I)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,N=Y.port2;Y.port1.onmessage=I,W=function(){N.postMessage(null)}}else W=function(){m(I,0)};function B(U){R=U,T||(T=!0,W())}function k(U,j){x=m(function(){U(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,B(w))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var q=f;f=j;try{return U()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,j){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var q=f;f=U;try{return j()}finally{f=q}},t.unstable_scheduleCallback=function(U,j,q){var re=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?re+q:re):q=re,U){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=q+ce,U={id:c++,callback:j,priorityLevel:U,startTime:q,expirationTime:ce,sortIndex:-1},q>re?(U.sortIndex=q,e(u,U),n(l)===null&&U===n(u)&&(y?(h(x),x=-1):y=!0,k(S,q-re))):(U.sortIndex=ce,e(l,U),v||p||(v=!0,B(w))),U},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(U){var j=f;return function(){var q=f;f=j;try{return U.apply(this,arguments)}finally{f=q}}}})(dx);fx.exports=dx;var bT=fx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PT=z,Dn=bT;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hx=new Set,ma={};function _s(t,e){co(t,e),co(t+"Capture",e)}function co(t,e){for(ma[t]=e,t=0;t<e.length;t++)hx.add(e[t])}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ld=Object.prototype.hasOwnProperty,DT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vg={},_g={};function LT(t){return ld.call(_g,t)?!0:ld.call(vg,t)?!1:DT.test(t)?_g[t]=!0:(vg[t]=!0,!1)}function IT(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function NT(t,e,n,i){if(e===null||typeof e>"u"||IT(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mp=/[\-:]([a-z])/g;function Ep(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mp,Ep);Kt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mp,Ep);Kt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mp,Ep);Kt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tp(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(NT(e,n,r,i)&&(n=null),i||r===null?LT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Qi=PT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tl=Symbol.for("react.element"),Vs=Symbol.for("react.portal"),zs=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),ud=Symbol.for("react.profiler"),px=Symbol.for("react.provider"),mx=Symbol.for("react.context"),Ap=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),fd=Symbol.for("react.suspense_list"),Cp=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),gx=Symbol.for("react.offscreen"),xg=Symbol.iterator;function Io(t){return t===null||typeof t!="object"?null:(t=xg&&t[xg]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,Bc;function qo(t){if(Bc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bc=e&&e[1]||""}return`
`+Bc+t}var kc=!1;function Vc(t,e){if(!t||kc)return"";kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qo(t):""}function UT(t){switch(t.tag){case 5:return qo(t.type);case 16:return qo("Lazy");case 13:return qo("Suspense");case 19:return qo("SuspenseList");case 0:case 2:case 15:return t=Vc(t.type,!1),t;case 11:return t=Vc(t.type.render,!1),t;case 1:return t=Vc(t.type,!0),t;default:return""}}function dd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zs:return"Fragment";case Vs:return"Portal";case ud:return"Profiler";case wp:return"StrictMode";case cd:return"Suspense";case fd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mx:return(t.displayName||"Context")+".Consumer";case px:return(t._context.displayName||"Context")+".Provider";case Ap:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cp:return e=t.displayName||null,e!==null?e:dd(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return dd(t(e))}catch{}}return null}function FT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dd(e);case 8:return e===wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function OT(t){var e=vx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nl(t){t._valueTracker||(t._valueTracker=OT(t))}function _x(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=vx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hd(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xx(t,e){e=e.checked,e!=null&&Tp(t,"checked",e,!1)}function pd(t,e){xx(t,e);var n=Dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?md(t,e.type,n):e.hasOwnProperty("defaultValue")&&md(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function md(t,e,n){(e!=="number"||vu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ko=Array.isArray;function to(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function gd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Ko(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function yx(t,e){var n=Dr(e.value),i=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Eg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var il,Mx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(il=il||document.createElement("div"),il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=il.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},BT=["Webkit","ms","Moz","O"];Object.keys(na).forEach(function(t){BT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),na[e]=na[t]})});function Ex(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||na.hasOwnProperty(t)&&na[t]?(""+e).trim():e+"px"}function Tx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ex(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var kT=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _d(t,e){if(e){if(kT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yd=null;function Rp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sd=null,no=null,io=null;function Tg(t){if(t=Ha(t)){if(typeof Sd!="function")throw Error(se(280));var e=t.stateNode;e&&(e=uc(e),Sd(t.stateNode,t.type,e))}}function wx(t){no?io?io.push(t):io=[t]:no=t}function Ax(){if(no){var t=no,e=io;if(io=no=null,Tg(t),e)for(t=0;t<e.length;t++)Tg(e[t])}}function Cx(t,e){return t(e)}function Rx(){}var zc=!1;function bx(t,e,n){if(zc)return t(e,n);zc=!0;try{return Cx(t,e,n)}finally{zc=!1,(no!==null||io!==null)&&(Rx(),Ax())}}function va(t,e){var n=t.stateNode;if(n===null)return null;var i=uc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Md=!1;if(Xi)try{var No={};Object.defineProperty(No,"passive",{get:function(){Md=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{Md=!1}function VT(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ia=!1,_u=null,xu=!1,Ed=null,zT={onError:function(t){ia=!0,_u=t}};function HT(t,e,n,i,r,s,o,a,l){ia=!1,_u=null,VT.apply(zT,arguments)}function GT(t,e,n,i,r,s,o,a,l){if(HT.apply(this,arguments),ia){if(ia){var u=_u;ia=!1,_u=null}else throw Error(se(198));xu||(xu=!0,Ed=u)}}function xs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Px(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wg(t){if(xs(t)!==t)throw Error(se(188))}function WT(t){var e=t.alternate;if(!e){if(e=xs(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return wg(r),t;if(s===i)return wg(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Dx(t){return t=WT(t),t!==null?Lx(t):null}function Lx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lx(t);if(e!==null)return e;t=t.sibling}return null}var Ix=Dn.unstable_scheduleCallback,Ag=Dn.unstable_cancelCallback,jT=Dn.unstable_shouldYield,XT=Dn.unstable_requestPaint,bt=Dn.unstable_now,$T=Dn.unstable_getCurrentPriorityLevel,bp=Dn.unstable_ImmediatePriority,Nx=Dn.unstable_UserBlockingPriority,yu=Dn.unstable_NormalPriority,YT=Dn.unstable_LowPriority,Ux=Dn.unstable_IdlePriority,sc=null,Si=null;function qT(t){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(sc,t,void 0,(t.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:QT,KT=Math.log,ZT=Math.LN2;function QT(t){return t>>>=0,t===0?32:31-(KT(t)/ZT|0)|0}var rl=64,sl=4194304;function Zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Su(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Zo(a):(s&=o,s!==0&&(i=Zo(s)))}else o=n&~r,o!==0?i=Zo(o):s!==0&&(i=Zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ri(e),r=1<<n,i|=t[n],e&=~r;return i}function JT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ew(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ri(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=JT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Td(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fx(){var t=rl;return rl<<=1,!(rl&4194240)&&(rl=64),t}function Hc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ri(e),t[e]=n}function tw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ri(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Pp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ri(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function Ox(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bx,Dp,kx,Vx,zx,wd=!1,ol=[],Er=null,Tr=null,wr=null,_a=new Map,xa=new Map,mr=[],nw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cg(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":_a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(e.pointerId)}}function Uo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ha(e),e!==null&&Dp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function iw(t,e,n,i,r){switch(e){case"focusin":return Er=Uo(Er,t,e,n,i,r),!0;case"dragenter":return Tr=Uo(Tr,t,e,n,i,r),!0;case"mouseover":return wr=Uo(wr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return _a.set(s,Uo(_a.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,xa.set(s,Uo(xa.get(s)||null,t,e,n,i,r)),!0}return!1}function Hx(t){var e=Jr(t.target);if(e!==null){var n=xs(e);if(n!==null){if(e=n.tag,e===13){if(e=Px(n),e!==null){t.blockedOn=e,zx(t.priority,function(){kx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ad(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);yd=i,n.target.dispatchEvent(i),yd=null}else return e=Ha(n),e!==null&&Dp(e),t.blockedOn=n,!1;e.shift()}return!0}function Rg(t,e,n){$l(t)&&n.delete(e)}function rw(){wd=!1,Er!==null&&$l(Er)&&(Er=null),Tr!==null&&$l(Tr)&&(Tr=null),wr!==null&&$l(wr)&&(wr=null),_a.forEach(Rg),xa.forEach(Rg)}function Fo(t,e){t.blockedOn===e&&(t.blockedOn=null,wd||(wd=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,rw)))}function ya(t){function e(r){return Fo(r,t)}if(0<ol.length){Fo(ol[0],t);for(var n=1;n<ol.length;n++){var i=ol[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Er!==null&&Fo(Er,t),Tr!==null&&Fo(Tr,t),wr!==null&&Fo(wr,t),_a.forEach(e),xa.forEach(e),n=0;n<mr.length;n++)i=mr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<mr.length&&(n=mr[0],n.blockedOn===null);)Hx(n),n.blockedOn===null&&mr.shift()}var ro=Qi.ReactCurrentBatchConfig,Mu=!0;function sw(t,e,n,i){var r=nt,s=ro.transition;ro.transition=null;try{nt=1,Lp(t,e,n,i)}finally{nt=r,ro.transition=s}}function ow(t,e,n,i){var r=nt,s=ro.transition;ro.transition=null;try{nt=4,Lp(t,e,n,i)}finally{nt=r,ro.transition=s}}function Lp(t,e,n,i){if(Mu){var r=Ad(t,e,n,i);if(r===null)Qc(t,e,i,Eu,n),Cg(t,i);else if(iw(r,t,e,n,i))i.stopPropagation();else if(Cg(t,i),e&4&&-1<nw.indexOf(t)){for(;r!==null;){var s=Ha(r);if(s!==null&&Bx(s),s=Ad(t,e,n,i),s===null&&Qc(t,e,i,Eu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Qc(t,e,i,null,n)}}var Eu=null;function Ad(t,e,n,i){if(Eu=null,t=Rp(i),t=Jr(t),t!==null)if(e=xs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Px(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Eu=t,null}function Gx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($T()){case bp:return 1;case Nx:return 4;case yu:case YT:return 16;case Ux:return 536870912;default:return 16}default:return 16}}var _r=null,Ip=null,Yl=null;function Wx(){if(Yl)return Yl;var t,e=Ip,n=e.length,i,r="value"in _r?_r.value:_r.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Yl=r.slice(t,1<i?1-i:void 0)}function ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function bg(){return!1}function In(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?al:bg,this.isPropagationStopped=bg,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),e}var Ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Np=In(Ao),za=St({},Ao,{view:0,detail:0}),aw=In(za),Gc,Wc,Oo,oc=St({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Up,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oo&&(Oo&&t.type==="mousemove"?(Gc=t.screenX-Oo.screenX,Wc=t.screenY-Oo.screenY):Wc=Gc=0,Oo=t),Gc)},movementY:function(t){return"movementY"in t?t.movementY:Wc}}),Pg=In(oc),lw=St({},oc,{dataTransfer:0}),uw=In(lw),cw=St({},za,{relatedTarget:0}),jc=In(cw),fw=St({},Ao,{animationName:0,elapsedTime:0,pseudoElement:0}),dw=In(fw),hw=St({},Ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pw=In(hw),mw=St({},Ao,{data:0}),Dg=In(mw),gw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_w={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_w[t])?!!e[t]:!1}function Up(){return xw}var yw=St({},za,{key:function(t){if(t.key){var e=gw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Up,charCode:function(t){return t.type==="keypress"?ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sw=In(yw),Mw=St({},oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lg=In(Mw),Ew=St({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Up}),Tw=In(Ew),ww=St({},Ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),Aw=In(ww),Cw=St({},oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rw=In(Cw),bw=[9,13,27,32],Fp=Xi&&"CompositionEvent"in window,ra=null;Xi&&"documentMode"in document&&(ra=document.documentMode);var Pw=Xi&&"TextEvent"in window&&!ra,jx=Xi&&(!Fp||ra&&8<ra&&11>=ra),Ig=" ",Ng=!1;function Xx(t,e){switch(t){case"keyup":return bw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $x(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hs=!1;function Dw(t,e){switch(t){case"compositionend":return $x(e);case"keypress":return e.which!==32?null:(Ng=!0,Ig);case"textInput":return t=e.data,t===Ig&&Ng?null:t;default:return null}}function Lw(t,e){if(Hs)return t==="compositionend"||!Fp&&Xx(t,e)?(t=Wx(),Yl=Ip=_r=null,Hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jx&&e.locale!=="ko"?null:e.data;default:return null}}var Iw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ug(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Iw[t.type]:e==="textarea"}function Yx(t,e,n,i){wx(i),e=Tu(e,"onChange"),0<e.length&&(n=new Np("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var sa=null,Sa=null;function Nw(t){sy(t,0)}function ac(t){var e=js(t);if(_x(e))return t}function Uw(t,e){if(t==="change")return e}var qx=!1;if(Xi){var Xc;if(Xi){var $c="oninput"in document;if(!$c){var Fg=document.createElement("div");Fg.setAttribute("oninput","return;"),$c=typeof Fg.oninput=="function"}Xc=$c}else Xc=!1;qx=Xc&&(!document.documentMode||9<document.documentMode)}function Og(){sa&&(sa.detachEvent("onpropertychange",Kx),Sa=sa=null)}function Kx(t){if(t.propertyName==="value"&&ac(Sa)){var e=[];Yx(e,Sa,t,Rp(t)),bx(Nw,e)}}function Fw(t,e,n){t==="focusin"?(Og(),sa=e,Sa=n,sa.attachEvent("onpropertychange",Kx)):t==="focusout"&&Og()}function Ow(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ac(Sa)}function Bw(t,e){if(t==="click")return ac(e)}function kw(t,e){if(t==="input"||t==="change")return ac(e)}function Vw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:Vw;function Ma(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ld.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function Bg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kg(t,e){var n=Bg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bg(n)}}function Zx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qx(){for(var t=window,e=vu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vu(t.document)}return e}function Op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zw(t){var e=Qx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zx(n.ownerDocument.documentElement,n)){if(i!==null&&Op(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=kg(n,s);var o=kg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Hw=Xi&&"documentMode"in document&&11>=document.documentMode,Gs=null,Cd=null,oa=null,Rd=!1;function Vg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rd||Gs==null||Gs!==vu(i)||(i=Gs,"selectionStart"in i&&Op(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),oa&&Ma(oa,i)||(oa=i,i=Tu(Cd,"onSelect"),0<i.length&&(e=new Np("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Gs)))}function ll(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ws={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},Yc={},Jx={};Xi&&(Jx=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function lc(t){if(Yc[t])return Yc[t];if(!Ws[t])return t;var e=Ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jx)return Yc[t]=e[n];return t}var ey=lc("animationend"),ty=lc("animationiteration"),ny=lc("animationstart"),iy=lc("transitionend"),ry=new Map,zg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){ry.set(t,e),_s(e,[t])}for(var qc=0;qc<zg.length;qc++){var Kc=zg[qc],Gw=Kc.toLowerCase(),Ww=Kc[0].toUpperCase()+Kc.slice(1);Or(Gw,"on"+Ww)}Or(ey,"onAnimationEnd");Or(ty,"onAnimationIteration");Or(ny,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(iy,"onTransitionEnd");co("onMouseEnter",["mouseout","mouseover"]);co("onMouseLeave",["mouseout","mouseover"]);co("onPointerEnter",["pointerout","pointerover"]);co("onPointerLeave",["pointerout","pointerover"]);_s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_s("onBeforeInput",["compositionend","keypress","textInput","paste"]);_s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function Hg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,GT(i,e,void 0,t),t.currentTarget=null}function sy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Hg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Hg(r,a,u),s=l}}}if(xu)throw t=Ed,xu=!1,Ed=null,t}function pt(t,e){var n=e[Id];n===void 0&&(n=e[Id]=new Set);var i=t+"__bubble";n.has(i)||(oy(e,t,2,!1),n.add(i))}function Zc(t,e,n){var i=0;e&&(i|=4),oy(n,t,i,e)}var ul="_reactListening"+Math.random().toString(36).slice(2);function Ea(t){if(!t[ul]){t[ul]=!0,hx.forEach(function(n){n!=="selectionchange"&&(jw.has(n)||Zc(n,!1,t),Zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ul]||(e[ul]=!0,Zc("selectionchange",!1,e))}}function oy(t,e,n,i){switch(Gx(e)){case 1:var r=sw;break;case 4:r=ow;break;default:r=Lp}n=r.bind(null,e,n,t),r=void 0,!Md||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Jr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}bx(function(){var u=s,c=Rp(n),d=[];e:{var f=ry.get(t);if(f!==void 0){var p=Np,v=t;switch(t){case"keypress":if(ql(n)===0)break e;case"keydown":case"keyup":p=Sw;break;case"focusin":v="focus",p=jc;break;case"focusout":v="blur",p=jc;break;case"beforeblur":case"afterblur":p=jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Pg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=uw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Tw;break;case ey:case ty:case ny:p=dw;break;case iy:p=Aw;break;case"scroll":p=aw;break;case"wheel":p=Rw;break;case"copy":case"cut":case"paste":p=pw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Lg}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var g=u,_;g!==null;){_=g;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,h!==null&&(S=va(g,h),S!=null&&y.push(Ta(g,S,_)))),m)break;g=g.return}0<y.length&&(f=new p(f,v,null,n,c),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==yd&&(v=n.relatedTarget||n.fromElement)&&(Jr(v)||v[$i]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Jr(v):null,v!==null&&(m=xs(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(y=Pg,S="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Lg,S="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?f:js(p),_=v==null?f:js(v),f=new y(S,g+"leave",p,n,c),f.target=m,f.relatedTarget=_,S=null,Jr(c)===u&&(y=new y(h,g+"enter",v,n,c),y.target=_,y.relatedTarget=m,S=y),m=S,p&&v)t:{for(y=p,h=v,g=0,_=y;_;_=Es(_))g++;for(_=0,S=h;S;S=Es(S))_++;for(;0<g-_;)y=Es(y),g--;for(;0<_-g;)h=Es(h),_--;for(;g--;){if(y===h||h!==null&&y===h.alternate)break t;y=Es(y),h=Es(h)}y=null}else y=null;p!==null&&Gg(d,f,p,y,!1),v!==null&&m!==null&&Gg(d,m,v,y,!0)}}e:{if(f=u?js(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var w=Uw;else if(Ug(f))if(qx)w=kw;else{w=Ow;var T=Fw}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=Bw);if(w&&(w=w(t,u))){Yx(d,w,n,c);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&md(f,"number",f.value)}switch(T=u?js(u):window,t){case"focusin":(Ug(T)||T.contentEditable==="true")&&(Gs=T,Cd=u,oa=null);break;case"focusout":oa=Cd=Gs=null;break;case"mousedown":Rd=!0;break;case"contextmenu":case"mouseup":case"dragend":Rd=!1,Vg(d,n,c);break;case"selectionchange":if(Hw)break;case"keydown":case"keyup":Vg(d,n,c)}var R;if(Fp)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Hs?Xx(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(jx&&n.locale!=="ko"&&(Hs||x!=="onCompositionStart"?x==="onCompositionEnd"&&Hs&&(R=Wx()):(_r=c,Ip="value"in _r?_r.value:_r.textContent,Hs=!0)),T=Tu(u,x),0<T.length&&(x=new Dg(x,t,null,n,c),d.push({event:x,listeners:T}),R?x.data=R:(R=$x(n),R!==null&&(x.data=R)))),(R=Pw?Dw(t,n):Lw(t,n))&&(u=Tu(u,"onBeforeInput"),0<u.length&&(c=new Dg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=R))}sy(d,e)})}function Ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=va(t,n),s!=null&&i.unshift(Ta(t,s,r)),s=va(t,e),s!=null&&i.push(Ta(t,s,r))),t=t.return}return i}function Es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=va(n,s),l!=null&&o.unshift(Ta(n,l,a))):r||(l=va(n,s),l!=null&&o.push(Ta(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Xw=/\r\n?/g,$w=/\u0000|\uFFFD/g;function Wg(t){return(typeof t=="string"?t:""+t).replace(Xw,`
`).replace($w,"")}function cl(t,e,n){if(e=Wg(e),Wg(t)!==e&&n)throw Error(se(425))}function wu(){}var bd=null,Pd=null;function Dd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ld=typeof setTimeout=="function"?setTimeout:void 0,Yw=typeof clearTimeout=="function"?clearTimeout:void 0,jg=typeof Promise=="function"?Promise:void 0,qw=typeof queueMicrotask=="function"?queueMicrotask:typeof jg<"u"?function(t){return jg.resolve(null).then(t).catch(Kw)}:Ld;function Kw(t){setTimeout(function(){throw t})}function Jc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ya(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ya(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Co=Math.random().toString(36).slice(2),_i="__reactFiber$"+Co,wa="__reactProps$"+Co,$i="__reactContainer$"+Co,Id="__reactEvents$"+Co,Zw="__reactListeners$"+Co,Qw="__reactHandles$"+Co;function Jr(t){var e=t[_i];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$i]||n[_i]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xg(t);t!==null;){if(n=t[_i])return n;t=Xg(t)}return e}t=n,n=t.parentNode}return null}function Ha(t){return t=t[_i]||t[$i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function uc(t){return t[wa]||null}var Nd=[],Xs=-1;function Br(t){return{current:t}}function mt(t){0>Xs||(t.current=Nd[Xs],Nd[Xs]=null,Xs--)}function ft(t,e){Xs++,Nd[Xs]=t.current,t.current=e}var Lr={},sn=Br(Lr),vn=Br(!1),cs=Lr;function fo(t,e){var n=t.type.contextTypes;if(!n)return Lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function Au(){mt(vn),mt(sn)}function $g(t,e,n){if(sn.current!==Lr)throw Error(se(168));ft(sn,e),ft(vn,n)}function ay(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,FT(t)||"Unknown",r));return St({},n,i)}function Cu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,cs=sn.current,ft(sn,t),ft(vn,vn.current),!0}function Yg(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=ay(t,e,cs),i.__reactInternalMemoizedMergedChildContext=t,mt(vn),mt(sn),ft(sn,t)):mt(vn),ft(vn,n)}var Oi=null,cc=!1,ef=!1;function ly(t){Oi===null?Oi=[t]:Oi.push(t)}function Jw(t){cc=!0,ly(t)}function kr(){if(!ef&&Oi!==null){ef=!0;var t=0,e=nt;try{var n=Oi;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Oi=null,cc=!1}catch(r){throw Oi!==null&&(Oi=Oi.slice(t+1)),Ix(bp,kr),r}finally{nt=e,ef=!1}}return null}var $s=[],Ys=0,Ru=null,bu=0,On=[],Bn=0,fs=null,ki=1,Vi="";function $r(t,e){$s[Ys++]=bu,$s[Ys++]=Ru,Ru=t,bu=e}function uy(t,e,n){On[Bn++]=ki,On[Bn++]=Vi,On[Bn++]=fs,fs=t;var i=ki;t=Vi;var r=32-ri(i)-1;i&=~(1<<r),n+=1;var s=32-ri(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ki=1<<32-ri(e)+r|n<<r|i,Vi=s+t}else ki=1<<s|n<<r|i,Vi=t}function Bp(t){t.return!==null&&($r(t,1),uy(t,1,0))}function kp(t){for(;t===Ru;)Ru=$s[--Ys],$s[Ys]=null,bu=$s[--Ys],$s[Ys]=null;for(;t===fs;)fs=On[--Bn],On[Bn]=null,Vi=On[--Bn],On[Bn]=null,ki=On[--Bn],On[Bn]=null}var bn=null,Rn=null,gt=!1,ei=null;function cy(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,Rn=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fs!==null?{id:ki,overflow:Vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,Rn=null,!0):!1;default:return!1}}function Ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fd(t){if(gt){var e=Rn;if(e){var n=e;if(!qg(t,e)){if(Ud(t))throw Error(se(418));e=Ar(n.nextSibling);var i=bn;e&&qg(t,e)?cy(i,n):(t.flags=t.flags&-4097|2,gt=!1,bn=t)}}else{if(Ud(t))throw Error(se(418));t.flags=t.flags&-4097|2,gt=!1,bn=t}}}function Kg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function fl(t){if(t!==bn)return!1;if(!gt)return Kg(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Dd(t.type,t.memoizedProps)),e&&(e=Rn)){if(Ud(t))throw fy(),Error(se(418));for(;e;)cy(t,e),e=Ar(e.nextSibling)}if(Kg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=bn?Ar(t.stateNode.nextSibling):null;return!0}function fy(){for(var t=Rn;t;)t=Ar(t.nextSibling)}function ho(){Rn=bn=null,gt=!1}function Vp(t){ei===null?ei=[t]:ei.push(t)}var e1=Qi.ReactCurrentBatchConfig;function Bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function dl(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zg(t){var e=t._init;return e(t._payload)}function dy(t){function e(h,g){if(t){var _=h.deletions;_===null?(h.deletions=[g],h.flags|=16):_.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=Pr(h,g),h.index=0,h.sibling=null,h}function s(h,g,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<g?(h.flags|=2,g):_):(h.flags|=2,g)):(h.flags|=1048576,g)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,g,_,S){return g===null||g.tag!==6?(g=lf(_,h.mode,S),g.return=h,g):(g=r(g,_),g.return=h,g)}function l(h,g,_,S){var w=_.type;return w===zs?c(h,g,_.props.children,S,_.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===hr&&Zg(w)===g.type)?(S=r(g,_.props),S.ref=Bo(h,g,_),S.return=h,S):(S=nu(_.type,_.key,_.props,null,h.mode,S),S.ref=Bo(h,g,_),S.return=h,S)}function u(h,g,_,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=uf(_,h.mode,S),g.return=h,g):(g=r(g,_.children||[]),g.return=h,g)}function c(h,g,_,S,w){return g===null||g.tag!==7?(g=as(_,h.mode,S,w),g.return=h,g):(g=r(g,_),g.return=h,g)}function d(h,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=lf(""+g,h.mode,_),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case tl:return _=nu(g.type,g.key,g.props,null,h.mode,_),_.ref=Bo(h,null,g),_.return=h,_;case Vs:return g=uf(g,h.mode,_),g.return=h,g;case hr:var S=g._init;return d(h,S(g._payload),_)}if(Ko(g)||Io(g))return g=as(g,h.mode,_,null),g.return=h,g;dl(h,g)}return null}function f(h,g,_,S){var w=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:a(h,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case tl:return _.key===w?l(h,g,_,S):null;case Vs:return _.key===w?u(h,g,_,S):null;case hr:return w=_._init,f(h,g,w(_._payload),S)}if(Ko(_)||Io(_))return w!==null?null:c(h,g,_,S,null);dl(h,_)}return null}function p(h,g,_,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(_)||null,a(g,h,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case tl:return h=h.get(S.key===null?_:S.key)||null,l(g,h,S,w);case Vs:return h=h.get(S.key===null?_:S.key)||null,u(g,h,S,w);case hr:var T=S._init;return p(h,g,_,T(S._payload),w)}if(Ko(S)||Io(S))return h=h.get(_)||null,c(g,h,S,w,null);dl(g,S)}return null}function v(h,g,_,S){for(var w=null,T=null,R=g,x=g=0,A=null;R!==null&&x<_.length;x++){R.index>x?(A=R,R=null):A=R.sibling;var b=f(h,R,_[x],S);if(b===null){R===null&&(R=A);break}t&&R&&b.alternate===null&&e(h,R),g=s(b,g,x),T===null?w=b:T.sibling=b,T=b,R=A}if(x===_.length)return n(h,R),gt&&$r(h,x),w;if(R===null){for(;x<_.length;x++)R=d(h,_[x],S),R!==null&&(g=s(R,g,x),T===null?w=R:T.sibling=R,T=R);return gt&&$r(h,x),w}for(R=i(h,R);x<_.length;x++)A=p(R,h,x,_[x],S),A!==null&&(t&&A.alternate!==null&&R.delete(A.key===null?x:A.key),g=s(A,g,x),T===null?w=A:T.sibling=A,T=A);return t&&R.forEach(function(P){return e(h,P)}),gt&&$r(h,x),w}function y(h,g,_,S){var w=Io(_);if(typeof w!="function")throw Error(se(150));if(_=w.call(_),_==null)throw Error(se(151));for(var T=w=null,R=g,x=g=0,A=null,b=_.next();R!==null&&!b.done;x++,b=_.next()){R.index>x?(A=R,R=null):A=R.sibling;var P=f(h,R,b.value,S);if(P===null){R===null&&(R=A);break}t&&R&&P.alternate===null&&e(h,R),g=s(P,g,x),T===null?w=P:T.sibling=P,T=P,R=A}if(b.done)return n(h,R),gt&&$r(h,x),w;if(R===null){for(;!b.done;x++,b=_.next())b=d(h,b.value,S),b!==null&&(g=s(b,g,x),T===null?w=b:T.sibling=b,T=b);return gt&&$r(h,x),w}for(R=i(h,R);!b.done;x++,b=_.next())b=p(R,h,x,b.value,S),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?x:b.key),g=s(b,g,x),T===null?w=b:T.sibling=b,T=b);return t&&R.forEach(function(I){return e(h,I)}),gt&&$r(h,x),w}function m(h,g,_,S){if(typeof _=="object"&&_!==null&&_.type===zs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case tl:e:{for(var w=_.key,T=g;T!==null;){if(T.key===w){if(w=_.type,w===zs){if(T.tag===7){n(h,T.sibling),g=r(T,_.props.children),g.return=h,h=g;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===hr&&Zg(w)===T.type){n(h,T.sibling),g=r(T,_.props),g.ref=Bo(h,T,_),g.return=h,h=g;break e}n(h,T);break}else e(h,T);T=T.sibling}_.type===zs?(g=as(_.props.children,h.mode,S,_.key),g.return=h,h=g):(S=nu(_.type,_.key,_.props,null,h.mode,S),S.ref=Bo(h,g,_),S.return=h,h=S)}return o(h);case Vs:e:{for(T=_.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(h,g.sibling),g=r(g,_.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=uf(_,h.mode,S),g.return=h,h=g}return o(h);case hr:return T=_._init,m(h,g,T(_._payload),S)}if(Ko(_))return v(h,g,_,S);if(Io(_))return y(h,g,_,S);dl(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,_),g.return=h,h=g):(n(h,g),g=lf(_,h.mode,S),g.return=h,h=g),o(h)):n(h,g)}return m}var po=dy(!0),hy=dy(!1),Pu=Br(null),Du=null,qs=null,zp=null;function Hp(){zp=qs=Du=null}function Gp(t){var e=Pu.current;mt(Pu),t._currentValue=e}function Od(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function so(t,e){Du=t,zp=qs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(zp!==t)if(t={context:t,memoizedValue:e,next:null},qs===null){if(Du===null)throw Error(se(308));qs=t,Du.dependencies={lanes:0,firstContext:t}}else qs=qs.next=t;return e}var es=null;function Wp(t){es===null?es=[t]:es.push(t)}function py(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Wp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Yi(t,i)}function Yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pr=!1;function jp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function my(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Yi(t,n)}return r=i.interleaved,r===null?(e.next=e,Wp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Yi(t,n)}function Kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pp(t,n)}}function Qg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Lu(t,e,n,i){var r=t.updateQueue;pr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(f=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=St({},d,f);break e;case 2:pr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);hs|=o,t.lanes=o,t.memoizedState=d}}function Jg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Ga={},Mi=Br(Ga),Aa=Br(Ga),Ca=Br(Ga);function ts(t){if(t===Ga)throw Error(se(174));return t}function Xp(t,e){switch(ft(Ca,e),ft(Aa,t),ft(Mi,Ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vd(e,t)}mt(Mi),ft(Mi,e)}function mo(){mt(Mi),mt(Aa),mt(Ca)}function gy(t){ts(Ca.current);var e=ts(Mi.current),n=vd(e,t.type);e!==n&&(ft(Aa,t),ft(Mi,n))}function $p(t){Aa.current===t&&(mt(Mi),mt(Aa))}var xt=Br(0);function Iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tf=[];function Yp(){for(var t=0;t<tf.length;t++)tf[t]._workInProgressVersionPrimary=null;tf.length=0}var Zl=Qi.ReactCurrentDispatcher,nf=Qi.ReactCurrentBatchConfig,ds=0,yt=null,Ot=null,Wt=null,Nu=!1,aa=!1,Ra=0,t1=0;function Qt(){throw Error(se(321))}function qp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function Kp(t,e,n,i,r,s){if(ds=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zl.current=t===null||t.memoizedState===null?s1:o1,t=n(i,r),aa){s=0;do{if(aa=!1,Ra=0,25<=s)throw Error(se(301));s+=1,Wt=Ot=null,e.updateQueue=null,Zl.current=a1,t=n(i,r)}while(aa)}if(Zl.current=Uu,e=Ot!==null&&Ot.next!==null,ds=0,Wt=Ot=yt=null,Nu=!1,e)throw Error(se(300));return t}function Zp(){var t=Ra!==0;return Ra=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?yt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function jn(){if(Ot===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Wt===null?yt.memoizedState:Wt.next;if(e!==null)Wt=e,Ot=t;else{if(t===null)throw Error(se(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Wt===null?yt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function ba(t,e){return typeof e=="function"?e(t):e}function rf(t){var e=jn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ds&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,yt.lanes|=c,hs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ai(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,hs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sf(t){var e=jn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ai(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function vy(){}function _y(t,e){var n=yt,i=jn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,Qp(Sy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,Pa(9,yy.bind(null,n,i,r,e),void 0,null),jt===null)throw Error(se(349));ds&30||xy(n,e,r)}return r}function xy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yy(t,e,n,i){e.value=n,e.getSnapshot=i,My(e)&&Ey(t)}function Sy(t,e,n){return n(function(){My(e)&&Ey(t)})}function My(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function Ey(t){var e=Yi(t,1);e!==null&&si(e,t,1,-1)}function e0(t){var e=pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},e.queue=t,t=t.dispatch=r1.bind(null,yt,t),[e.memoizedState,t]}function Pa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ty(){return jn().memoizedState}function Ql(t,e,n,i){var r=pi();yt.flags|=t,r.memoizedState=Pa(1|e,n,void 0,i===void 0?null:i)}function fc(t,e,n,i){var r=jn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&qp(i,o.deps)){r.memoizedState=Pa(e,n,s,i);return}}yt.flags|=t,r.memoizedState=Pa(1|e,n,s,i)}function t0(t,e){return Ql(8390656,8,t,e)}function Qp(t,e){return fc(2048,8,t,e)}function wy(t,e){return fc(4,2,t,e)}function Ay(t,e){return fc(4,4,t,e)}function Cy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ry(t,e,n){return n=n!=null?n.concat([t]):null,fc(4,4,Cy.bind(null,e,t),n)}function Jp(){}function by(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&qp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Py(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&qp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Dy(t,e,n){return ds&21?(ai(n,e)||(n=Fx(),yt.lanes|=n,hs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function n1(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=nf.transition;nf.transition={};try{t(!1),e()}finally{nt=n,nf.transition=i}}function Ly(){return jn().memoizedState}function i1(t,e,n){var i=br(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Iy(t))Ny(e,n);else if(n=py(t,e,n,i),n!==null){var r=cn();si(n,t,i,r),Uy(n,e,i)}}function r1(t,e,n){var i=br(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iy(t))Ny(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ai(a,o)){var l=e.interleaved;l===null?(r.next=r,Wp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=py(t,e,r,i),n!==null&&(r=cn(),si(n,t,i,r),Uy(n,e,i))}}function Iy(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function Ny(t,e){aa=Nu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Uy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pp(t,n)}}var Uu={readContext:Wn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},s1={readContext:Wn,useCallback:function(t,e){return pi().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:t0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4194308,4,Cy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ql(4,2,t,e)},useMemo:function(t,e){var n=pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=i1.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=pi();return t={current:t},e.memoizedState=t},useState:e0,useDebugValue:Jp,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=e0(!1),e=t[0];return t=n1.bind(null,t[1]),pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=pi();if(gt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),jt===null)throw Error(se(349));ds&30||xy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,t0(Sy.bind(null,i,s,t),[t]),i.flags|=2048,Pa(9,yy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pi(),e=jt.identifierPrefix;if(gt){var n=Vi,i=ki;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=t1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},o1={readContext:Wn,useCallback:by,useContext:Wn,useEffect:Qp,useImperativeHandle:Ry,useInsertionEffect:wy,useLayoutEffect:Ay,useMemo:Py,useReducer:rf,useRef:Ty,useState:function(){return rf(ba)},useDebugValue:Jp,useDeferredValue:function(t){var e=jn();return Dy(e,Ot.memoizedState,t)},useTransition:function(){var t=rf(ba)[0],e=jn().memoizedState;return[t,e]},useMutableSource:vy,useSyncExternalStore:_y,useId:Ly,unstable_isNewReconciler:!1},a1={readContext:Wn,useCallback:by,useContext:Wn,useEffect:Qp,useImperativeHandle:Ry,useInsertionEffect:wy,useLayoutEffect:Ay,useMemo:Py,useReducer:sf,useRef:Ty,useState:function(){return sf(ba)},useDebugValue:Jp,useDeferredValue:function(t){var e=jn();return Ot===null?e.memoizedState=t:Dy(e,Ot.memoizedState,t)},useTransition:function(){var t=sf(ba)[0],e=jn().memoizedState;return[t,e]},useMutableSource:vy,useSyncExternalStore:_y,useId:Ly,unstable_isNewReconciler:!1};function Qn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dc={isMounted:function(t){return(t=t._reactInternals)?xs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=br(t),s=Hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,r),e!==null&&(si(e,t,r,i),Kl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=br(t),s=Hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,r),e!==null&&(si(e,t,r,i),Kl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=br(t),r=Hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Cr(t,r,i),e!==null&&(si(e,t,i,n),Kl(e,t,i))}};function n0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ma(n,i)||!Ma(r,s):!0}function Fy(t,e,n){var i=!1,r=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Wn(s):(r=_n(e)?cs:sn.current,i=e.contextTypes,s=(i=i!=null)?fo(t,r):Lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function i0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&dc.enqueueReplaceState(e,e.state,null)}function kd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},jp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wn(s):(s=_n(e)?cs:sn.current,r.context=fo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&dc.enqueueReplaceState(r,r.state,null),Lu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function go(t,e){try{var n="",i=e;do n+=UT(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function of(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var l1=typeof WeakMap=="function"?WeakMap:Map;function Oy(t,e,n){n=Hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ou||(Ou=!0,Kd=i),Vd(t,e)},n}function By(t,e,n){n=Hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Vd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vd(t,e),typeof i!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function r0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new l1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=M1.bind(null,t,e,n),e.then(t,t))}function s0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function o0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hi(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var u1=Qi.ReactCurrentOwner,gn=!1;function an(t,e,n,i){e.child=t===null?hy(e,null,n,i):po(e,t.child,n,i)}function a0(t,e,n,i,r){n=n.render;var s=e.ref;return so(e,r),i=Kp(t,e,n,i,s,r),n=Zp(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(gt&&n&&Bp(e),e.flags|=1,an(t,e,i,r),e.child)}function l0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!am(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ky(t,e,s,i,r)):(t=nu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ma,n(o,i)&&t.ref===e.ref)return qi(t,e,r)}return e.flags|=1,t=Pr(s,i),t.ref=e.ref,t.return=e,e.child=t}function ky(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ma(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,qi(t,e,r)}return zd(t,e,n,i,r)}function Vy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Zs,Cn),Cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Zs,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(Zs,Cn),Cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(Zs,Cn),Cn|=i;return an(t,e,r,n),e.child}function zy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zd(t,e,n,i,r){var s=_n(n)?cs:sn.current;return s=fo(e,s),so(e,r),n=Kp(t,e,n,i,s,r),i=Zp(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(gt&&i&&Bp(e),e.flags|=1,an(t,e,n,r),e.child)}function u0(t,e,n,i,r){if(_n(n)){var s=!0;Cu(e)}else s=!1;if(so(e,r),e.stateNode===null)Jl(t,e),Fy(e,n,i),kd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wn(u):(u=_n(n)?cs:sn.current,u=fo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&i0(e,o,i,u),pr=!1;var f=e.memoizedState;o.state=f,Lu(e,i,o,r),l=e.memoizedState,a!==i||f!==l||vn.current||pr?(typeof c=="function"&&(Bd(e,n,c,i),l=e.memoizedState),(a=pr||n0(e,n,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,my(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Qn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=_n(n)?cs:sn.current,l=fo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&i0(e,o,i,l),pr=!1,f=e.memoizedState,o.state=f,Lu(e,i,o,r);var v=e.memoizedState;a!==d||f!==v||vn.current||pr?(typeof p=="function"&&(Bd(e,n,p,i),v=e.memoizedState),(u=pr||n0(e,n,u,i,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Hd(t,e,n,i,s,r)}function Hd(t,e,n,i,r,s){zy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Yg(e,n,!1),qi(t,e,s);i=e.stateNode,u1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=po(e,t.child,null,s),e.child=po(e,null,a,s)):an(t,e,a,s),e.memoizedState=i.state,r&&Yg(e,n,!0),e.child}function Hy(t){var e=t.stateNode;e.pendingContext?$g(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$g(t,e.context,!1),Xp(t,e.containerInfo)}function c0(t,e,n,i,r){return ho(),Vp(r),e.flags|=256,an(t,e,n,i),e.child}var Gd={dehydrated:null,treeContext:null,retryLane:0};function Wd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gy(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(xt,r&1),t===null)return Fd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mc(o,i,0,null),t=as(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wd(n),e.memoizedState=Gd,t):em(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return c1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Pr(a,s):(s=as(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Wd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gd,i}return s=t.child,t=s.sibling,i=Pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function em(t,e){return e=mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hl(t,e,n,i){return i!==null&&Vp(i),po(e,t.child,null,n),t=em(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function c1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=of(Error(se(422))),hl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=mc({mode:"visible",children:i.children},r,0,null),s=as(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&po(e,t.child,null,o),e.child.memoizedState=Wd(o),e.memoizedState=Gd,s);if(!(e.mode&1))return hl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=of(s,i,void 0),hl(t,e,o,i)}if(a=(o&t.childLanes)!==0,gn||a){if(i=jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Yi(t,r),si(i,t,r,-1))}return om(),i=of(Error(se(421))),hl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=E1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=Ar(r.nextSibling),bn=e,gt=!0,ei=null,t!==null&&(On[Bn++]=ki,On[Bn++]=Vi,On[Bn++]=fs,ki=t.id,Vi=t.overflow,fs=e),e=em(e,i.children),e.flags|=4096,e)}function f0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Od(t.return,e,n)}function af(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Wy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(an(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&f0(t,n,e);else if(t.tag===19)f0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Iu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),af(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Iu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}af(e,!0,n,null,s);break;case"together":af(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function f1(t,e,n){switch(e.tag){case 3:Hy(e),ho();break;case 5:gy(e);break;case 1:_n(e.type)&&Cu(e);break;case 4:Xp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(Pu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?Gy(t,e,n):(ft(xt,xt.current&1),t=qi(t,e,n),t!==null?t.sibling:null);ft(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Wy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,Vy(t,e,n)}return qi(t,e,n)}var jy,jd,Xy,$y;jy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jd=function(){};Xy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ts(Mi.current);var s=null;switch(n){case"input":r=hd(t,r),i=hd(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=gd(t,r),i=gd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=wu)}_d(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ma.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ma.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$y=function(t,e,n,i){n!==i&&(e.flags|=4)};function ko(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function d1(t,e,n){var i=e.pendingProps;switch(kp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return _n(e.type)&&Au(),Jt(e),null;case 3:return i=e.stateNode,mo(),mt(vn),mt(sn),Yp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(Jd(ei),ei=null))),jd(t,e),Jt(e),null;case 5:$p(e);var r=ts(Ca.current);if(n=e.type,t!==null&&e.stateNode!=null)Xy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Jt(e),null}if(t=ts(Mi.current),fl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[_i]=e,i[wa]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<Qo.length;r++)pt(Qo[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":yg(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":Mg(i,s),pt("invalid",i)}_d(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&cl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&cl(i.textContent,a,t),r=["children",""+a]):ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":nl(i),Sg(i,s,!0);break;case"textarea":nl(i),Eg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[_i]=e,t[wa]=i,jy(t,e,!1,!1),e.stateNode=t;e:{switch(o=xd(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Qo.length;r++)pt(Qo[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":yg(t,i),r=hd(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),pt("invalid",t);break;case"textarea":Mg(t,i),r=gd(t,i),pt("invalid",t);break;default:r=i}_d(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Tx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ga(t,l):typeof l=="number"&&ga(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&Tp(t,s,l,o))}switch(n){case"input":nl(t),Sg(t,i,!1);break;case"textarea":nl(t),Eg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?to(t,!!i.multiple,s,!1):i.defaultValue!=null&&to(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=wu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)$y(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=ts(Ca.current),ts(Mi.current),fl(e)){if(i=e.stateNode,n=e.memoizedProps,i[_i]=e,(s=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:cl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&cl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_i]=e,e.stateNode=i}return Jt(e),null;case 13:if(mt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&Rn!==null&&e.mode&1&&!(e.flags&128))fy(),ho(),e.flags|=98560,s=!1;else if(s=fl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[_i]=e}else ho(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else ei!==null&&(Jd(ei),ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Bt===0&&(Bt=3):om())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return mo(),jd(t,e),t===null&&Ea(e.stateNode.containerInfo),Jt(e),null;case 10:return Gp(e.type._context),Jt(e),null;case 17:return _n(e.type)&&Au(),Jt(e),null;case 19:if(mt(xt),s=e.memoizedState,s===null)return Jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ko(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Iu(t),o!==null){for(e.flags|=128,ko(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>vo&&(e.flags|=128,i=!0,ko(s,!1),e.lanes=4194304)}else{if(!i)if(t=Iu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ko(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!gt)return Jt(e),null}else 2*bt()-s.renderingStartTime>vo&&n!==1073741824&&(e.flags|=128,i=!0,ko(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=xt.current,ft(xt,i?n&1|2:n&1),e):(Jt(e),null);case 22:case 23:return sm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function h1(t,e){switch(kp(e),e.tag){case 1:return _n(e.type)&&Au(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mo(),mt(vn),mt(sn),Yp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $p(e),null;case 13:if(mt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));ho()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(xt),null;case 4:return mo(),null;case 10:return Gp(e.type._context),null;case 22:case 23:return sm(),null;case 24:return null;default:return null}}var pl=!1,nn=!1,p1=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function Xd(t,e,n){try{n()}catch(i){wt(t,e,i)}}var d0=!1;function m1(t,e){if(bd=Mu,t=Qx(),Op(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pd={focusedElem:t,selectionRange:n},Mu=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:Qn(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){wt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return v=d0,d0=!1,v}function la(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Xd(e,n,s)}r=r.next}while(r!==i)}}function hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function $d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Yy(t){var e=t.alternate;e!==null&&(t.alternate=null,Yy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_i],delete e[wa],delete e[Id],delete e[Zw],delete e[Qw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qy(t){return t.tag===5||t.tag===3||t.tag===4}function h0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wu));else if(i!==4&&(t=t.child,t!==null))for(Yd(t,e,n),t=t.sibling;t!==null;)Yd(t,e,n),t=t.sibling}function qd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qd(t,e,n),t=t.sibling;t!==null;)qd(t,e,n),t=t.sibling}var Xt=null,Jn=!1;function ir(t,e,n){for(n=n.child;n!==null;)Ky(t,e,n),n=n.sibling}function Ky(t,e,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(sc,n)}catch{}switch(n.tag){case 5:nn||Ks(n,e);case 6:var i=Xt,r=Jn;Xt=null,ir(t,e,n),Xt=i,Jn=r,Xt!==null&&(Jn?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(Jn?(t=Xt,n=n.stateNode,t.nodeType===8?Jc(t.parentNode,n):t.nodeType===1&&Jc(t,n),ya(t)):Jc(Xt,n.stateNode));break;case 4:i=Xt,r=Jn,Xt=n.stateNode.containerInfo,Jn=!0,ir(t,e,n),Xt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xd(n,e,o),r=r.next}while(r!==i)}ir(t,e,n);break;case 1:if(!nn&&(Ks(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,ir(t,e,n),nn=i):ir(t,e,n);break;default:ir(t,e,n)}}function p0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new p1),e.forEach(function(i){var r=T1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Xn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xt=a.stateNode,Jn=!1;break e;case 3:Xt=a.stateNode.containerInfo,Jn=!0;break e;case 4:Xt=a.stateNode.containerInfo,Jn=!0;break e}a=a.return}if(Xt===null)throw Error(se(160));Ky(s,o,r),Xt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){wt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zy(e,t),e=e.sibling}function Zy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xn(e,t),fi(t),i&4){try{la(3,t,t.return),hc(3,t)}catch(y){wt(t,t.return,y)}try{la(5,t,t.return)}catch(y){wt(t,t.return,y)}}break;case 1:Xn(e,t),fi(t),i&512&&n!==null&&Ks(n,n.return);break;case 5:if(Xn(e,t),fi(t),i&512&&n!==null&&Ks(n,n.return),t.flags&32){var r=t.stateNode;try{ga(r,"")}catch(y){wt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&xx(r,s),xd(a,o);var u=xd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Tx(r,d):c==="dangerouslySetInnerHTML"?Mx(r,d):c==="children"?ga(r,d):Tp(r,c,d,u)}switch(a){case"input":pd(r,s);break;case"textarea":yx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?to(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?to(r,!!s.multiple,s.defaultValue,!0):to(r,!!s.multiple,s.multiple?[]:"",!1))}r[wa]=s}catch(y){wt(t,t.return,y)}}break;case 6:if(Xn(e,t),fi(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){wt(t,t.return,y)}}break;case 3:if(Xn(e,t),fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(e.containerInfo)}catch(y){wt(t,t.return,y)}break;case 4:Xn(e,t),fi(t);break;case 13:Xn(e,t),fi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(im=bt())),i&4&&p0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(u=nn)||c,Xn(e,t),nn=u):Xn(e,t),fi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(Ee=t,c=t.child;c!==null;){for(d=Ee=c;Ee!==null;){switch(f=Ee,p=f.child,f.tag){case 0:case 11:case 14:case 15:la(4,f,f.return);break;case 1:Ks(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){wt(i,n,y)}}break;case 5:Ks(f,f.return);break;case 22:if(f.memoizedState!==null){g0(d);continue}}p!==null?(p.return=f,Ee=p):g0(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ex("display",o))}catch(y){wt(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){wt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Xn(e,t),fi(t),i&4&&p0(t);break;case 21:break;default:Xn(e,t),fi(t)}}function fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qy(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ga(r,""),i.flags&=-33);var s=h0(t);qd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=h0(t);Yd(t,a,o);break;default:throw Error(se(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function g1(t,e,n){Ee=t,Qy(t)}function Qy(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||pl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||nn;a=pl;var u=nn;if(pl=o,(nn=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?v0(r):l!==null?(l.return=o,Ee=l):v0(r);for(;s!==null;)Ee=s,Qy(s),s=s.sibling;Ee=r,pl=a,nn=u}m0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):m0(t)}}function m0(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||hc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ya(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}nn||e.flags&512&&$d(e)}catch(f){wt(e,e.return,f)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function g0(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function v0(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hc(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{$d(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{$d(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var v1=Math.ceil,Fu=Qi.ReactCurrentDispatcher,tm=Qi.ReactCurrentOwner,Hn=Qi.ReactCurrentBatchConfig,Ze=0,jt=null,Nt=null,qt=0,Cn=0,Zs=Br(0),Bt=0,Da=null,hs=0,pc=0,nm=0,ua=null,mn=null,im=0,vo=1/0,Fi=null,Ou=!1,Kd=null,Rr=null,ml=!1,xr=null,Bu=0,ca=0,Zd=null,eu=-1,tu=0;function cn(){return Ze&6?bt():eu!==-1?eu:eu=bt()}function br(t){return t.mode&1?Ze&2&&qt!==0?qt&-qt:e1.transition!==null?(tu===0&&(tu=Fx()),tu):(t=nt,t!==0||(t=window.event,t=t===void 0?16:Gx(t.type)),t):1}function si(t,e,n,i){if(50<ca)throw ca=0,Zd=null,Error(se(185));Va(t,n,i),(!(Ze&2)||t!==jt)&&(t===jt&&(!(Ze&2)&&(pc|=n),Bt===4&&gr(t,qt)),xn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(vo=bt()+500,cc&&kr()))}function xn(t,e){var n=t.callbackNode;ew(t,e);var i=Su(t,t===jt?qt:0);if(i===0)n!==null&&Ag(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ag(n),e===1)t.tag===0?Jw(_0.bind(null,t)):ly(_0.bind(null,t)),qw(function(){!(Ze&6)&&kr()}),n=null;else{switch(Ox(i)){case 1:n=bp;break;case 4:n=Nx;break;case 16:n=yu;break;case 536870912:n=Ux;break;default:n=yu}n=oS(n,Jy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jy(t,e){if(eu=-1,tu=0,Ze&6)throw Error(se(327));var n=t.callbackNode;if(oo()&&t.callbackNode!==n)return null;var i=Su(t,t===jt?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ku(t,i);else{e=i;var r=Ze;Ze|=2;var s=tS();(jt!==t||qt!==e)&&(Fi=null,vo=bt()+500,os(t,e));do try{y1();break}catch(a){eS(t,a)}while(!0);Hp(),Fu.current=s,Ze=r,Nt!==null?e=0:(jt=null,qt=0,e=Bt)}if(e!==0){if(e===2&&(r=Td(t),r!==0&&(i=r,e=Qd(t,r))),e===1)throw n=Da,os(t,0),gr(t,i),xn(t,bt()),n;if(e===6)gr(t,i);else{if(r=t.current.alternate,!(i&30)&&!_1(r)&&(e=ku(t,i),e===2&&(s=Td(t),s!==0&&(i=s,e=Qd(t,s))),e===1))throw n=Da,os(t,0),gr(t,i),xn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Yr(t,mn,Fi);break;case 3:if(gr(t,i),(i&130023424)===i&&(e=im+500-bt(),10<e)){if(Su(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ld(Yr.bind(null,t,mn,Fi),e);break}Yr(t,mn,Fi);break;case 4:if(gr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ri(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*v1(i/1960))-i,10<i){t.timeoutHandle=Ld(Yr.bind(null,t,mn,Fi),i);break}Yr(t,mn,Fi);break;case 5:Yr(t,mn,Fi);break;default:throw Error(se(329))}}}return xn(t,bt()),t.callbackNode===n?Jy.bind(null,t):null}function Qd(t,e){var n=ua;return t.current.memoizedState.isDehydrated&&(os(t,e).flags|=256),t=ku(t,e),t!==2&&(e=mn,mn=n,e!==null&&Jd(e)),t}function Jd(t){mn===null?mn=t:mn.push.apply(mn,t)}function _1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(t,e){for(e&=~nm,e&=~pc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ri(e),i=1<<n;t[n]=-1,e&=~i}}function _0(t){if(Ze&6)throw Error(se(327));oo();var e=Su(t,0);if(!(e&1))return xn(t,bt()),null;var n=ku(t,e);if(t.tag!==0&&n===2){var i=Td(t);i!==0&&(e=i,n=Qd(t,i))}if(n===1)throw n=Da,os(t,0),gr(t,e),xn(t,bt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,mn,Fi),xn(t,bt()),null}function rm(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(vo=bt()+500,cc&&kr())}}function ps(t){xr!==null&&xr.tag===0&&!(Ze&6)&&oo();var e=Ze;Ze|=1;var n=Hn.transition,i=nt;try{if(Hn.transition=null,nt=1,t)return t()}finally{nt=i,Hn.transition=n,Ze=e,!(Ze&6)&&kr()}}function sm(){Cn=Zs.current,mt(Zs)}function os(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Yw(n)),Nt!==null)for(n=Nt.return;n!==null;){var i=n;switch(kp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Au();break;case 3:mo(),mt(vn),mt(sn),Yp();break;case 5:$p(i);break;case 4:mo();break;case 13:mt(xt);break;case 19:mt(xt);break;case 10:Gp(i.type._context);break;case 22:case 23:sm()}n=n.return}if(jt=t,Nt=t=Pr(t.current,null),qt=Cn=e,Bt=0,Da=null,nm=pc=hs=0,mn=ua=null,es!==null){for(e=0;e<es.length;e++)if(n=es[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}es=null}return t}function eS(t,e){do{var n=Nt;try{if(Hp(),Zl.current=Uu,Nu){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Nu=!1}if(ds=0,Wt=Ot=yt=null,aa=!1,Ra=0,tm.current=null,n===null||n.return===null){Bt=1,Da=e,Nt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=s0(o);if(p!==null){p.flags&=-257,o0(p,o,a,s,e),p.mode&1&&r0(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){r0(s,u,e),om();break e}l=Error(se(426))}}else if(gt&&a.mode&1){var m=s0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),o0(m,o,a,s,e),Vp(go(l,a));break e}}s=l=go(l,a),Bt!==4&&(Bt=2),ua===null?ua=[s]:ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Oy(s,l,e);Qg(s,h);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Rr===null||!Rr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=By(s,a,e);Qg(s,S);break e}}s=s.return}while(s!==null)}iS(n)}catch(w){e=w,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(!0)}function tS(){var t=Fu.current;return Fu.current=Uu,t===null?Uu:t}function om(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),jt===null||!(hs&268435455)&&!(pc&268435455)||gr(jt,qt)}function ku(t,e){var n=Ze;Ze|=2;var i=tS();(jt!==t||qt!==e)&&(Fi=null,os(t,e));do try{x1();break}catch(r){eS(t,r)}while(!0);if(Hp(),Ze=n,Fu.current=i,Nt!==null)throw Error(se(261));return jt=null,qt=0,Bt}function x1(){for(;Nt!==null;)nS(Nt)}function y1(){for(;Nt!==null&&!jT();)nS(Nt)}function nS(t){var e=sS(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?iS(t):Nt=e,tm.current=null}function iS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=h1(n,e),n!==null){n.flags&=32767,Nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Nt=null;return}}else if(n=d1(n,e,Cn),n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);Bt===0&&(Bt=5)}function Yr(t,e,n){var i=nt,r=Hn.transition;try{Hn.transition=null,nt=1,S1(t,e,n,i)}finally{Hn.transition=r,nt=i}return null}function S1(t,e,n,i){do oo();while(xr!==null);if(Ze&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(tw(t,s),t===jt&&(Nt=jt=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ml||(ml=!0,oS(yu,function(){return oo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var o=nt;nt=1;var a=Ze;Ze|=4,tm.current=null,m1(t,n),Zy(n,t),zw(Pd),Mu=!!bd,Pd=bd=null,t.current=n,g1(n),XT(),Ze=a,nt=o,Hn.transition=s}else t.current=n;if(ml&&(ml=!1,xr=t,Bu=r),s=t.pendingLanes,s===0&&(Rr=null),qT(n.stateNode),xn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ou)throw Ou=!1,t=Kd,Kd=null,t;return Bu&1&&t.tag!==0&&oo(),s=t.pendingLanes,s&1?t===Zd?ca++:(ca=0,Zd=t):ca=0,kr(),null}function oo(){if(xr!==null){var t=Ox(Bu),e=Hn.transition,n=nt;try{if(Hn.transition=null,nt=16>t?16:t,xr===null)var i=!1;else{if(t=xr,xr=null,Bu=0,Ze&6)throw Error(se(331));var r=Ze;for(Ze|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var c=Ee;switch(c.tag){case 0:case 11:case 15:la(8,c,s)}var d=c.child;if(d!==null)d.return=c,Ee=d;else for(;Ee!==null;){c=Ee;var f=c.sibling,p=c.return;if(Yy(c),c===u){Ee=null;break}if(f!==null){f.return=p,Ee=f;break}Ee=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:la(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ee=h;break e}Ee=s.return}}var g=t.current;for(Ee=g;Ee!==null;){o=Ee;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ee=_;else e:for(o=g;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hc(9,a)}}catch(w){wt(a,a.return,w)}if(a===o){Ee=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ee=S;break e}Ee=a.return}}if(Ze=r,kr(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(sc,t)}catch{}i=!0}return i}finally{nt=n,Hn.transition=e}}return!1}function x0(t,e,n){e=go(n,e),e=Oy(t,e,1),t=Cr(t,e,1),e=cn(),t!==null&&(Va(t,1,e),xn(t,e))}function wt(t,e,n){if(t.tag===3)x0(t,t,n);else for(;e!==null;){if(e.tag===3){x0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Rr===null||!Rr.has(i))){t=go(n,t),t=By(e,t,1),e=Cr(e,t,1),t=cn(),e!==null&&(Va(e,1,t),xn(e,t));break}}e=e.return}}function M1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&(qt&n)===n&&(Bt===4||Bt===3&&(qt&130023424)===qt&&500>bt()-im?os(t,0):nm|=n),xn(t,e)}function rS(t,e){e===0&&(t.mode&1?(e=sl,sl<<=1,!(sl&130023424)&&(sl=4194304)):e=1);var n=cn();t=Yi(t,e),t!==null&&(Va(t,e,n),xn(t,n))}function E1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rS(t,n)}function T1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),rS(t,n)}var sS;sS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,f1(t,e,n);gn=!!(t.flags&131072)}else gn=!1,gt&&e.flags&1048576&&uy(e,bu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Jl(t,e),t=e.pendingProps;var r=fo(e,sn.current);so(e,n),r=Kp(null,e,i,t,r,n);var s=Zp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,Cu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jp(e),r.updater=dc,e.stateNode=r,r._reactInternals=e,kd(e,i,t,n),e=Hd(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&Bp(e),an(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Jl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=A1(i),t=Qn(i,t),r){case 0:e=zd(null,e,i,t,n);break e;case 1:e=u0(null,e,i,t,n);break e;case 11:e=a0(null,e,i,t,n);break e;case 14:e=l0(null,e,i,Qn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),zd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),u0(t,e,i,r,n);case 3:e:{if(Hy(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,my(t,e),Lu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=go(Error(se(423)),e),e=c0(t,e,i,n,r);break e}else if(i!==r){r=go(Error(se(424)),e),e=c0(t,e,i,n,r);break e}else for(Rn=Ar(e.stateNode.containerInfo.firstChild),bn=e,gt=!0,ei=null,n=hy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ho(),i===r){e=qi(t,e,n);break e}an(t,e,i,n)}e=e.child}return e;case 5:return gy(e),t===null&&Fd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Dd(i,r)?o=null:s!==null&&Dd(i,s)&&(e.flags|=32),zy(t,e),an(t,e,o,n),e.child;case 6:return t===null&&Fd(e),null;case 13:return Gy(t,e,n);case 4:return Xp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=po(e,null,i,n):an(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),a0(t,e,i,r,n);case 7:return an(t,e,e.pendingProps,n),e.child;case 8:return an(t,e,e.pendingProps.children,n),e.child;case 12:return an(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(Pu,i._currentValue),i._currentValue=o,s!==null)if(ai(s.value,o)){if(s.children===r.children&&!vn.current){e=qi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Od(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Od(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}an(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,so(e,n),r=Wn(r),i=i(r),e.flags|=1,an(t,e,i,n),e.child;case 14:return i=e.type,r=Qn(i,e.pendingProps),r=Qn(i.type,r),l0(t,e,i,r,n);case 15:return ky(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Jl(t,e),e.tag=1,_n(i)?(t=!0,Cu(e)):t=!1,so(e,n),Fy(e,i,r),kd(e,i,r,n),Hd(null,e,i,!0,t,n);case 19:return Wy(t,e,n);case 22:return Vy(t,e,n)}throw Error(se(156,e.tag))};function oS(t,e){return Ix(t,e)}function w1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new w1(t,e,n,i)}function am(t){return t=t.prototype,!(!t||!t.isReactComponent)}function A1(t){if(typeof t=="function")return am(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ap)return 11;if(t===Cp)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nu(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")am(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zs:return as(n.children,r,s,e);case wp:o=8,r|=8;break;case ud:return t=Vn(12,n,e,r|2),t.elementType=ud,t.lanes=s,t;case cd:return t=Vn(13,n,e,r),t.elementType=cd,t.lanes=s,t;case fd:return t=Vn(19,n,e,r),t.elementType=fd,t.lanes=s,t;case gx:return mc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case px:o=10;break e;case mx:o=9;break e;case Ap:o=11;break e;case Cp:o=14;break e;case hr:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Vn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function as(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function mc(t,e,n,i){return t=Vn(22,t,i,e),t.elementType=gx,t.lanes=n,t.stateNode={isHidden:!1},t}function lf(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function uf(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function C1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hc(0),this.expirationTimes=Hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function lm(t,e,n,i,r,s,o,a,l){return t=new C1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jp(s),t}function R1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function aS(t){if(!t)return Lr;t=t._reactInternals;e:{if(xs(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(_n(n))return ay(t,n,e)}return e}function lS(t,e,n,i,r,s,o,a,l){return t=lm(n,i,!0,t,r,s,o,a,l),t.context=aS(null),n=t.current,i=cn(),r=br(n),s=Hi(i,r),s.callback=e??null,Cr(n,s,r),t.current.lanes=r,Va(t,r,i),xn(t,i),t}function gc(t,e,n,i){var r=e.current,s=cn(),o=br(r);return n=aS(n),e.context===null?e.context=n:e.pendingContext=n,e=Hi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Cr(r,e,o),t!==null&&(si(t,r,o,s),Kl(t,r,o)),o}function Vu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function y0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function um(t,e){y0(t,e),(t=t.alternate)&&y0(t,e)}function b1(){return null}var uS=typeof reportError=="function"?reportError:function(t){console.error(t)};function cm(t){this._internalRoot=t}vc.prototype.render=cm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));gc(t,e,null,null)};vc.prototype.unmount=cm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ps(function(){gc(null,t,null,null)}),e[$i]=null}};function vc(t){this._internalRoot=t}vc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mr.length&&e!==0&&e<mr[n].priority;n++);mr.splice(n,0,t),n===0&&Hx(t)}};function fm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function S0(){}function P1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Vu(o);s.call(u)}}var o=lS(e,i,t,0,null,!1,!1,"",S0);return t._reactRootContainer=o,t[$i]=o.current,Ea(t.nodeType===8?t.parentNode:t),ps(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Vu(l);a.call(u)}}var l=lm(t,0,!1,null,null,!1,!1,"",S0);return t._reactRootContainer=l,t[$i]=l.current,Ea(t.nodeType===8?t.parentNode:t),ps(function(){gc(e,l,n,i)}),l}function xc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Vu(o);a.call(l)}}gc(e,o,t,r)}else o=P1(n,e,t,r,i);return Vu(o)}Bx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zo(e.pendingLanes);n!==0&&(Pp(e,n|1),xn(e,bt()),!(Ze&6)&&(vo=bt()+500,kr()))}break;case 13:ps(function(){var i=Yi(t,1);if(i!==null){var r=cn();si(i,t,1,r)}}),um(t,1)}};Dp=function(t){if(t.tag===13){var e=Yi(t,134217728);if(e!==null){var n=cn();si(e,t,134217728,n)}um(t,134217728)}};kx=function(t){if(t.tag===13){var e=br(t),n=Yi(t,e);if(n!==null){var i=cn();si(n,t,e,i)}um(t,e)}};Vx=function(){return nt};zx=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Sd=function(t,e,n){switch(e){case"input":if(pd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=uc(i);if(!r)throw Error(se(90));_x(i),pd(i,r)}}}break;case"textarea":yx(t,n);break;case"select":e=n.value,e!=null&&to(t,!!n.multiple,e,!1)}};Cx=rm;Rx=ps;var D1={usingClientEntryPoint:!1,Events:[Ha,js,uc,wx,Ax,rm]},Vo={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L1={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dx(t),t===null?null:t.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||b1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{sc=gl.inject(L1),Si=gl}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fm(e))throw Error(se(200));return R1(t,e,null,n)};Ln.createRoot=function(t,e){if(!fm(t))throw Error(se(299));var n=!1,i="",r=uS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=lm(t,1,!1,null,null,n,!1,i,r),t[$i]=e.current,Ea(t.nodeType===8?t.parentNode:t),new cm(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Dx(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return ps(t)};Ln.hydrate=function(t,e,n){if(!_c(e))throw Error(se(200));return xc(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!fm(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=uS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lS(e,null,t,1,n??null,r,!1,s,o),t[$i]=e.current,Ea(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new vc(e)};Ln.render=function(t,e,n){if(!_c(e))throw Error(se(200));return xc(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!_c(t))throw Error(se(40));return t._reactRootContainer?(ps(function(){xc(null,null,t,!1,function(){t._reactRootContainer=null,t[$i]=null})}),!0):!1};Ln.unstable_batchedUpdates=rm;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!_c(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return xc(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function cS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cS)}catch(t){console.error(t)}}cS(),cx.exports=Ln;var I1=cx.exports,M0=I1;ad.createRoot=M0.createRoot,ad.hydrateRoot=M0.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zu(){return zu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},zu.apply(this,arguments)}var yr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yr||(yr={}));const E0="popstate";function N1(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return eh("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:dS(r)}return F1(e,n,null,t)}function Mn(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function fS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function U1(){return Math.random().toString(36).substr(2,8)}function T0(t,e){return{usr:t.state,key:t.key,idx:e}}function eh(t,e,n,i){return n===void 0&&(n=null),zu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?yc(e):e,{state:n,key:e&&e.key||i||U1()})}function dS(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function yc(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function F1(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=yr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(zu({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=yr.Pop;let m=c(),h=m==null?null:m-u;u=m,l&&l({action:a,location:y.location,delta:h})}function f(m,h){a=yr.Push;let g=eh(y.location,m,h);u=c()+1;let _=T0(g,u),S=y.createHref(g);try{o.pushState(_,"",S)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;r.location.assign(S)}s&&l&&l({action:a,location:y.location,delta:1})}function p(m,h){a=yr.Replace;let g=eh(y.location,m,h);u=c();let _=T0(g,u),S=y.createHref(g);o.replaceState(_,"",S),s&&l&&l({action:a,location:y.location,delta:0})}function v(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof m=="string"?m:dS(m);return g=g.replace(/ $/,"%20"),Mn(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let y={get action(){return a},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(E0,d),l=m,()=>{r.removeEventListener(E0,d),l=null}},createHref(m){return e(r,m)},createURL:v,encodeLocation(m){let h=v(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:p,go(m){return o.go(m)}};return y}var w0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(w0||(w0={}));function O1(t,e,n){return n===void 0&&(n="/"),B1(t,e,n)}function B1(t,e,n,i){let r=typeof e=="string"?yc(e):e,s=mS(r.pathname||"/",n);if(s==null)return null;let o=hS(t);k1(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=Z1(s);a=Y1(o[l],u)}return a}function hS(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Mn(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=ao([i,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Mn(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),hS(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:X1(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of pS(s.path))r(s,o,l)}),e}function pS(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=pS(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function k1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:$1(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const V1=/^:[\w-]+$/,z1=3,H1=2,G1=1,W1=10,j1=-2,A0=t=>t==="*";function X1(t,e){let n=t.split("/"),i=n.length;return n.some(A0)&&(i+=j1),e&&(i+=H1),n.filter(r=>!A0(r)).reduce((r,s)=>r+(V1.test(s)?z1:s===""?G1:W1),i)}function $1(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Y1(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",d=q1({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),f=l.route;if(!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:ao([s,d.pathname]),pathnameBase:Q1(ao([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=ao([s,d.pathnameBase]))}return o}function q1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=K1(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,d)=>{let{paramName:f,isOptional:p}=c;if(f==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[d];return p&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function K1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),fS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Z1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function mS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const ao=t=>t.join("/").replace(/\/\/+/g,"/"),Q1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function J1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const gS=["post","put","patch","delete"];new Set(gS);const eA=["get",...gS];new Set(eA);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hu(){return Hu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Hu.apply(this,arguments)}const tA=z.createContext(null),nA=z.createContext(null),vS=z.createContext(null),Sc=z.createContext(null),Mc=z.createContext({outlet:null,matches:[],isDataRoute:!1}),_S=z.createContext(null);function dm(){return z.useContext(Sc)!=null}function iA(){return dm()||Mn(!1),z.useContext(Sc).location}function rA(t,e){return sA(t,e)}function sA(t,e,n,i){dm()||Mn(!1);let{navigator:r}=z.useContext(vS),{matches:s}=z.useContext(Mc),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=iA(),c;if(e){var d;let m=typeof e=="string"?yc(e):e;l==="/"||(d=m.pathname)!=null&&d.startsWith(l)||Mn(!1),c=m}else c=u;let f=c.pathname||"/",p=f;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(m.length).join("/")}let v=O1(t,{pathname:p}),y=cA(v&&v.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:ao([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:ao([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&y?z.createElement(Sc.Provider,{value:{location:Hu({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:yr.Pop}},y):y}function oA(){let t=pA(),e=J1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:r},n):null,null)}const aA=z.createElement(oA,null);class lA extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?z.createElement(Mc.Provider,{value:this.props.routeContext},z.createElement(_S.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uA(t){let{routeContext:e,match:n,children:i}=t,r=z.useContext(tA);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(Mc.Provider,{value:e},i)}function cA(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||Mn(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:p}=n,v=d.route.loader&&f[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,f)=>{let p,v=!1,y=null,m=null;n&&(p=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||aA,l&&(u<0&&f===0?(mA("route-fallback"),v=!0,m=null):u===f&&(v=!0,m=d.route.hydrateFallbackElement||null)));let h=e.concat(o.slice(0,f+1)),g=()=>{let _;return p?_=y:v?_=m:d.route.Component?_=z.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=c,z.createElement(uA,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?z.createElement(lA,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var xS=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(xS||{});function fA(t){let e=z.useContext(nA);return e||Mn(!1),e}function dA(t){let e=z.useContext(Mc);return e||Mn(!1),e}function hA(t){let e=dA(),n=e.matches[e.matches.length-1];return n.route.id||Mn(!1),n.route.id}function pA(){var t;let e=z.useContext(_S),n=fA(xS.UseRouteError),i=hA();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}const C0={};function mA(t,e,n){C0[t]||(C0[t]=!0)}function gA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function th(t){Mn(!1)}function vA(t){let{basename:e="/",children:n=null,location:i,navigationType:r=yr.Pop,navigator:s,static:o=!1,future:a}=t;dm()&&Mn(!1);let l=e.replace(/^\/*/,"/"),u=z.useMemo(()=>({basename:l,navigator:s,static:o,future:Hu({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=yc(i));let{pathname:c="/",search:d="",hash:f="",state:p=null,key:v="default"}=i,y=z.useMemo(()=>{let m=mS(c,l);return m==null?null:{location:{pathname:m,search:d,hash:f,state:p,key:v},navigationType:r}},[l,c,d,f,p,v,r]);return y==null?null:z.createElement(vS.Provider,{value:u},z.createElement(Sc.Provider,{children:n,value:y}))}function _A(t){let{children:e,location:n}=t;return rA(nh(e),n)}new Promise(()=>{});function nh(t,e){e===void 0&&(e=[]);let n=[];return z.Children.forEach(t,(i,r)=>{if(!z.isValidElement(i))return;let s=[...e,r];if(i.type===z.Fragment){n.push.apply(n,nh(i.props.children,s));return}i.type!==th&&Mn(!1),!i.props.index||!i.props.children||Mn(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=nh(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const xA="6";try{window.__reactRouterVersion=xA}catch{}const yA="startTransition",R0=MT[yA];function SA(t){let{basename:e,children:n,future:i,window:r}=t,s=z.useRef();s.current==null&&(s.current=N1({window:r,v5Compat:!0}));let o=s.current,[a,l]=z.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},c=z.useCallback(d=>{u&&R0?R0(()=>l(d)):l(d)},[l,u]);return z.useLayoutEffect(()=>o.listen(c),[o,c]),z.useEffect(()=>gA(i),[i]),z.createElement(vA,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var b0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(b0||(b0={}));var P0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(P0||(P0={}));function MA(){const[t,e]=z.useState(!1),[n,i]=z.useState(!1);z.useEffect(()=>{const o=()=>e(window.scrollY>60);return window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[]),z.useEffect(()=>{document.body.style.overflow=n?"hidden":""},[n]);const r=["Home","About","Services","Skills","Projects","Contact"],s=()=>i(!1);return D.jsxs(D.Fragment,{children:[D.jsx("div",{className:`mobile-menu${n?" open":""}`,role:"dialog","aria-modal":"true",children:r.map(o=>D.jsx("a",{href:`#${o.toLowerCase()}`,className:"mob-link",onClick:s,children:o},o))}),D.jsxs("header",{className:`nav${t?" scrolled":""}`,id:"navbar",role:"banner",children:[D.jsxs("a",{href:"#home",className:"nav-logo","aria-label":"Portfolio Prince Koucheme",children:["Prince",D.jsx("span",{children:"."})]}),D.jsx("ul",{className:"nav-links",role:"list",children:r.map((o,a)=>D.jsx("li",{children:D.jsx("a",{href:`#${o.toLowerCase()}`,style:a===0?{color:"#00abf0"}:void 0,children:a===0?`| ${o}`:o})},o))}),D.jsxs("button",{className:`hamburger${n?" open":""}`,onClick:()=>i(o=>!o),"aria-label":n?"Fermer le menu":"Ouvrir le menu","aria-expanded":n,children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}function EA(){return D.jsxs("div",{className:"scroll-nav","aria-hidden":"true",children:[D.jsx("button",{className:"scroll-nav-btn",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),title:"Haut de page",children:D.jsx("i",{className:"fa fa-angle-up"})}),D.jsx("button",{className:"scroll-nav-btn",onClick:()=>{var t;return(t=document.getElementById("footer"))==null?void 0:t.scrollIntoView({behavior:"smooth"})},title:"Bas de page",children:D.jsx("i",{className:"fa fa-angle-down"})})]})}const hm=z.createContext({});function Ec(t){const e=z.useRef(null);return e.current===null&&(e.current=t()),e.current}const TA=typeof window<"u",yS=TA?z.useLayoutEffect:z.useEffect,Tc=z.createContext(null);function pm(t,e){t.indexOf(e)===-1&&t.push(e)}function _o(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Ci=(t,e,n)=>n>e?e:n<t?t:n;let mm=()=>{};const Ir={},SS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function MS(t){return typeof t=="object"&&t!==null}const ES=t=>/^0[^.\s]+$/u.test(t);function TS(t){let e;return()=>(e===void 0&&(e=t()),e)}const Gn=t=>t,wA=(t,e)=>n=>e(t(n)),Wa=(...t)=>t.reduce(wA),xo=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class gm{constructor(){this.subscriptions=[]}add(e){return pm(this.subscriptions,e),()=>_o(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const yn=t=>t*1e3,zn=t=>t/1e3;function wS(t,e){return e?t*(1e3/e):0}const AA=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t},AS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,CA=1e-7,RA=12;function bA(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=AS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>CA&&++a<RA);return o}function ja(t,e,n,i){if(t===e&&n===i)return Gn;const r=s=>bA(s,0,1,t,n);return s=>s===0||s===1?s:AS(r(s),e,i)}const CS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,RS=t=>e=>1-t(1-e),bS=ja(.33,1.53,.69,.99),vm=RS(bS),PS=CS(vm),DS=t=>t>=1?1:(t*=2)<1?.5*vm(t):.5*(2-Math.pow(2,-10*(t-1))),_m=t=>1-Math.sin(Math.acos(t)),LS=RS(_m),IS=CS(_m),PA=ja(.42,0,1,1),DA=ja(0,0,.58,1),NS=ja(.42,0,.58,1),US=t=>Array.isArray(t)&&typeof t[0]!="number";function FS(t,e){return US(t)?t[AA(0,t.length,e)]:t}const OS=t=>Array.isArray(t)&&typeof t[0]=="number",LA={linear:Gn,easeIn:PA,easeInOut:NS,easeOut:DA,circIn:_m,circInOut:IS,circOut:LS,backIn:vm,backInOut:PS,backOut:bS,anticipate:DS},IA=t=>typeof t=="string",D0=t=>{if(OS(t)){mm(t.length===4);const[e,n,i,r]=t;return ja(e,n,i,r)}else if(IA(t))return LA[t];return t},vl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function NA(t,e){let n=new Set,i=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(c){o.has(c)&&(u.schedule(c),t()),c(a)}const u={schedule:(c,d=!1,f=!1)=>{const v=f&&r?n:i;return d&&o.add(c),v.add(c),c},cancel:c=>{i.delete(c),o.delete(c)},process:c=>{if(a=c,r){s=!0;return}r=!0;const d=n;n=i,i=d,n.forEach(l),n.clear(),r=!1,s&&(s=!1,u.process(c))}};return u}const UA=40;function BS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=vl.reduce((_,S)=>(_[S]=NA(s),_),{}),{setup:a,read:l,resolveKeyframes:u,preUpdate:c,update:d,preRender:f,render:p,postRender:v}=o,y=()=>{const _=Ir.useManualTiming,S=_?r.timestamp:performance.now();n=!1,_||(r.delta=i?1e3/60:Math.max(Math.min(S-r.timestamp,UA),1)),r.timestamp=S,r.isProcessing=!0,a.process(r),l.process(r),u.process(r),c.process(r),d.process(r),f.process(r),p.process(r),v.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(y))},m=()=>{n=!0,i=!0,r.isProcessing||t(y)};return{schedule:vl.reduce((_,S)=>{const w=o[S];return _[S]=(T,R=!1,x=!1)=>(n||m(),w.schedule(T,R,x)),_},{}),cancel:_=>{for(let S=0;S<vl.length;S++)o[vl[S]].cancel(_)},state:r,steps:o}}const{schedule:lt,cancel:Nr,state:$t,steps:cf}=BS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Gn,!0);let iu;function FA(){iu=void 0}const ln={now:()=>(iu===void 0&&ln.set($t.isProcessing||Ir.useManualTiming?$t.timestamp:performance.now()),iu),set:t=>{iu=t,queueMicrotask(FA)}},kS=t=>e=>typeof e=="string"&&e.startsWith(t),VS=kS("--"),OA=kS("var(--"),xm=t=>OA(t)?BA.test(t.split("/*")[0].trim()):!1,BA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function L0(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Ro={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},La={...Ro,transform:t=>Ci(0,1,t)},_l={...Ro,default:1},fa=t=>Math.round(t*1e5)/1e5,ym=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function kA(t){return t==null}const VA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Sm=(t,e)=>n=>!!(typeof n=="string"&&VA.test(n)&&n.startsWith(t)||e&&!kA(n)&&Object.prototype.hasOwnProperty.call(n,e)),zS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(ym);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},zA=t=>Ci(0,255,t),ff={...Ro,transform:t=>Math.round(zA(t))},ns={test:Sm("rgb","red"),parse:zS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+ff.transform(t)+", "+ff.transform(e)+", "+ff.transform(n)+", "+fa(La.transform(i))+")"};function HA(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const ih={test:Sm("#"),parse:HA,transform:ns.transform},Xa=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),fr=Xa("deg"),Ei=Xa("%"),Te=Xa("px"),GA=Xa("vh"),WA=Xa("vw"),I0={...Ei,parse:t=>Ei.parse(t)/100,transform:t=>Ei.transform(t*100)},Qs={test:Sm("hsl","hue"),parse:zS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ei.transform(fa(e))+", "+Ei.transform(fa(n))+", "+fa(La.transform(i))+")"},It={test:t=>ns.test(t)||ih.test(t)||Qs.test(t),parse:t=>ns.test(t)?ns.parse(t):Qs.test(t)?Qs.parse(t):ih.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ns.transform(t):Qs.transform(t),getAnimatableNone:t=>{const e=It.parse(t);return e.alpha=0,It.transform(e)}},jA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function XA(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(ym))==null?void 0:e.length)||0)+(((n=t.match(jA))==null?void 0:n.length)||0)>0}const HS="number",GS="color",$A="var",YA="var(",N0="${}",qA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function yo(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(qA,l=>(It.test(l)?(i.color.push(s),r.push(GS),n.push(It.parse(l))):l.startsWith(YA)?(i.var.push(s),r.push($A),n.push(l)):(i.number.push(s),r.push(HS),n.push(parseFloat(l))),++s,N0)).split(N0);return{values:n,split:a,indexes:i,types:r}}function KA(t){return yo(t).values}function WS({split:t,types:e}){const n=t.length;return i=>{let r="";for(let s=0;s<n;s++)if(r+=t[s],i[s]!==void 0){const o=e[s];o===HS?r+=fa(i[s]):o===GS?r+=It.transform(i[s]):r+=i[s]}return r}}function ZA(t){return WS(yo(t))}const QA=t=>typeof t=="number"?0:It.test(t)?It.getAnimatableNone(t):t,JA=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:QA(t);function eC(t){const e=yo(t);return WS(e)(e.values.map((i,r)=>JA(i,e.split[r])))}const oi={test:XA,parse:KA,createTransformer:ZA,getAnimatableNone:eC};function df(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function tC({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=df(l,a,t+1/3),s=df(l,a,t),o=df(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Gu(t,e){return n=>n>0?e:t}const dt=(t,e,n)=>t+(e-t)*n,hf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},nC=[ih,ns,Qs],iC=t=>nC.find(e=>e.test(t));function U0(t){const e=iC(t);if(!e)return!1;let n=e.parse(t);return e===Qs&&(n=tC(n)),n}const F0=(t,e)=>{const n=U0(t),i=U0(e);if(!n||!i)return Gu(t,e);const r={...n};return s=>(r.red=hf(n.red,i.red,s),r.green=hf(n.green,i.green,s),r.blue=hf(n.blue,i.blue,s),r.alpha=dt(n.alpha,i.alpha,s),ns.transform(r))},rh=new Set(["none","hidden"]);function rC(t,e){return rh.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function sC(t,e){return n=>dt(t,e,n)}function Mm(t){return typeof t=="number"?sC:typeof t=="string"?xm(t)?Gu:It.test(t)?F0:lC:Array.isArray(t)?jS:typeof t=="object"?It.test(t)?F0:oC:Gu}function jS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Mm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function oC(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Mm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function aC(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const lC=(t,e)=>{const n=oi.createTransformer(e),i=yo(t),r=yo(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?rh.has(t)&&!r.values.length||rh.has(e)&&!i.values.length?rC(t,e):Wa(jS(aC(i,r),r.values),n):Gu(t,e)};function XS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?dt(t,e,n):Mm(t)(t,e)}const uC=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>lt.update(e,n),stop:()=>Nr(e),now:()=>$t.isProcessing?$t.timestamp:ln.now()}},$S=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Wu=2e4;function Em(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Wu;)e+=n,i=t.next(e);return e>=Wu?1/0:e}function YS(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(Em(i),Wu);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:zn(r)}}const Tt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function sh(t,e){return t*Math.sqrt(1-e*e)}const cC=12;function fC(t,e,n){let i=n;for(let r=1;r<cC;r++)i=i-t(i)/e(i);return i}const pf=.001;function dC({duration:t=Tt.duration,bounce:e=Tt.bounce,velocity:n=Tt.velocity,mass:i=Tt.mass}){let r,s,o=1-e;o=Ci(Tt.minDamping,Tt.maxDamping,o),t=Ci(Tt.minDuration,Tt.maxDuration,zn(t)),o<1?(r=u=>{const c=u*o,d=c*t,f=c-n,p=sh(u,o),v=Math.exp(-d);return pf-f/p*v},s=u=>{const d=u*o*t,f=d*n+n,p=Math.pow(o,2)*Math.pow(u,2)*t,v=Math.exp(-d),y=sh(Math.pow(u,2),o);return(-r(u)+pf>0?-1:1)*((f-p)*v)/y}):(r=u=>{const c=Math.exp(-u*t),d=(u-n)*t+1;return-pf+c*d},s=u=>{const c=Math.exp(-u*t),d=(n-u)*(t*t);return c*d});const a=5/t,l=fC(r,s,a);if(t=yn(t),isNaN(l))return{stiffness:Tt.stiffness,damping:Tt.damping,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const hC=["duration","bounce"],pC=["stiffness","damping","mass"];function O0(t,e){return e.some(n=>t[n]!==void 0)}function mC(t){let e={velocity:Tt.velocity,stiffness:Tt.stiffness,damping:Tt.damping,mass:Tt.mass,isResolvedFromDuration:!1,...t};if(!O0(t,pC)&&O0(t,hC))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Ci(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Tt.mass,stiffness:r,damping:s}}else{const n=dC({...t,velocity:0});e={...e,...n,mass:Tt.mass},e.isResolvedFromDuration=!0}return e}function Ia(t=Tt.visualDuration,e=Tt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:d,velocity:f,isResolvedFromDuration:p}=mC({...n,velocity:-zn(n.velocity||0)}),v=f||0,y=u/(2*Math.sqrt(l*c)),m=o-s,h=zn(Math.sqrt(l/c)),g=Math.abs(m)<5;i||(i=g?Tt.restSpeed.granular:Tt.restSpeed.default),r||(r=g?Tt.restDelta.granular:Tt.restDelta.default);let _,S,w,T,R,x;if(y<1)w=sh(h,y),T=(v+y*h*m)/w,_=b=>{const P=Math.exp(-y*h*b);return o-P*(T*Math.sin(w*b)+m*Math.cos(w*b))},R=y*h*T+m*w,x=y*h*m-T*w,S=b=>Math.exp(-y*h*b)*(R*Math.sin(w*b)+x*Math.cos(w*b));else if(y===1){_=P=>o-Math.exp(-h*P)*(m+(v+h*m)*P);const b=v+h*m;S=P=>Math.exp(-h*P)*(h*b*P-v)}else{const b=h*Math.sqrt(y*y-1);_=Y=>{const N=Math.exp(-y*h*Y),B=Math.min(b*Y,300);return o-N*((v+y*h*m)*Math.sinh(B)+b*m*Math.cosh(B))/b};const P=(v+y*h*m)/b,I=y*h*P-m*b,W=y*h*m-P*b;S=Y=>{const N=Math.exp(-y*h*Y),B=Math.min(b*Y,300);return N*(I*Math.sinh(B)+W*Math.cosh(B))}}const A={calculatedDuration:p&&d||null,velocity:b=>yn(S(b)),next:b=>{if(!p&&y<1){const I=Math.exp(-y*h*b),W=Math.sin(w*b),Y=Math.cos(w*b),N=o-I*(T*W+m*Y),B=yn(I*(R*W+x*Y));return a.done=Math.abs(B)<=i&&Math.abs(o-N)<=r,a.value=a.done?o:N,a}const P=_(b);if(p)a.done=b>=d;else{const I=yn(S(b));a.done=Math.abs(I)<=i&&Math.abs(o-P)<=r}return a.value=a.done?o:P,a},toString:()=>{const b=Math.min(Em(A),Wu),P=$S(I=>A.next(b*I).value,b,30);return b+"ms "+P},toTransition:()=>{}};return A}Ia.applyToOptions=t=>{const e=YS(t,100,Ia);return t.ease=e.ease,t.duration=yn(e.duration),t.type="keyframes",t};const gC=5;function qS(t,e,n){const i=Math.max(e-gC,0);return wS(n-t(i),e-i)}function oh({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=t[0],f={done:!1,value:d},p=x=>a!==void 0&&x<a||l!==void 0&&x>l,v=x=>a===void 0?l:l===void 0||Math.abs(a-x)<Math.abs(l-x)?a:l;let y=n*e;const m=d+y,h=o===void 0?m:o(m);h!==m&&(y=h-d);const g=x=>-y*Math.exp(-x/i),_=x=>h+g(x),S=x=>{const A=g(x),b=_(x);f.done=Math.abs(A)<=u,f.value=f.done?h:b};let w,T;const R=x=>{p(f.value)&&(w=x,T=Ia({keyframes:[f.value,v(f.value)],velocity:qS(_,x,f.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return R(0),{calculatedDuration:null,next:x=>{let A=!1;return!T&&w===void 0&&(A=!0,S(x),R(x)),w!==void 0&&x>=w?T.next(x-w):(!A&&S(x),f)}}}function vC(t,e,n){const i=[],r=n||Ir.mix||XS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Gn:e;a=Wa(l,a)}i.push(a)}return i}function _C(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(mm(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=vC(e,i,r),l=a.length,u=c=>{if(o&&c<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(c<t[d+1]);d++);const f=xo(t[d],t[d+1],c);return a[d](f)};return n?c=>u(Ci(t[0],t[s-1],c)):u}function KS(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=xo(0,e,i);t.push(dt(n,1,r))}}function ZS(t){const e=[0];return KS(e,t.length-1),e}function xC(t,e){return t.map(n=>n*e)}function yC(t,e){return t.map(()=>e||NS).splice(0,t.length-1)}function da({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=US(i)?i.map(D0):D0(i),s={done:!1,value:e[0]},o=xC(n&&n.length===e.length?n:ZS(e),t),a=_C(o,e,{ease:Array.isArray(r)?r:yC(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const SC=t=>t!==null;function wc(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(SC),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const MC={decay:oh,inertia:oh,tween:da,keyframes:da,spring:Ia};function QS(t){typeof t.type=="string"&&(t.type=MC[t.type])}class Tm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const EC=t=>t/100;class ju extends Tm{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==ln.now()&&this.tick(ln.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;QS(e);const{type:n=da,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||da;l!==da&&typeof a[0]!="number"&&(this.mixKeyframes=Wa(EC,XS(a[0],a[1])),a=[0,100]);const u=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=Em(u));const{calculatedDuration:c}=u;this.calculatedDuration=c,this.resolvedDuration=c+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=u}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:u=0,keyframes:c,repeat:d,repeatType:f,repeatDelay:p,type:v,onUpdate:y,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const h=this.currentTime-u*(this.playbackSpeed>=0?1:-1),g=this.playbackSpeed>=0?h<0:h>r;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let _=this.currentTime,S=i;if(d){const x=Math.min(this.currentTime,r)/a;let A=Math.floor(x),b=x%1;!b&&x>=1&&(b=1),b===1&&A--,A=Math.min(A,d+1),!!(A%2)&&(f==="reverse"?(b=1-b,p&&(b-=p/a)):f==="mirror"&&(S=o)),_=Ci(0,1,b)*a}let w;g?(this.delayState.value=c[0],w=this.delayState):w=S.next(_),s&&!g&&(w.value=s(w.value));let{done:T}=w;!g&&l!==null&&(T=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const R=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return R&&v!==oh&&(w.value=wc(c,this.options,m,this.speed)),y&&y(w.value),R&&this.finish(),w}then(e,n){return this.finished.then(e,n)}get duration(){return zn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+zn(e)}get time(){return zn(this.currentTime)}set time(e){e=yn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return qS(i=>this.generator.next(i).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(ln.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=zn(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=uC,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ln.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function TC(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const is=t=>t*180/Math.PI,ah=t=>{const e=is(Math.atan2(t[1],t[0]));return lh(e)},wC={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:ah,rotateZ:ah,skewX:t=>is(Math.atan(t[1])),skewY:t=>is(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},lh=t=>(t=t%360,t<0&&(t+=360),t),B0=ah,k0=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),V0=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),AC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:k0,scaleY:V0,scale:t=>(k0(t)+V0(t))/2,rotateX:t=>lh(is(Math.atan2(t[6],t[5]))),rotateY:t=>lh(is(Math.atan2(-t[2],t[0]))),rotateZ:B0,rotate:B0,skewX:t=>is(Math.atan(t[4])),skewY:t=>is(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function uh(t){return t.includes("scale")?1:0}function ch(t,e){if(!t||t==="none")return uh(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=AC,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=wC,r=a}if(!r)return uh(e);const s=i[e],o=r[1].split(",").map(RC);return typeof s=="function"?s(o):o[s]}const CC=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return ch(n,e)};function RC(t){return parseFloat(t.trim())}const bo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Po=new Set(bo),z0=t=>t===Ro||t===Te,bC=new Set(["x","y","z"]),PC=bo.filter(t=>!bC.has(t));function DC(t){const e=[];return PC.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Sr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>ch(e,"x"),y:(t,{transform:e})=>ch(e,"y")};Sr.translateX=Sr.x;Sr.translateY=Sr.y;const ls=new Set;let fh=!1,dh=!1,hh=!1;function JS(){if(dh){const t=Array.from(ls).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=DC(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))==null||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}dh=!1,fh=!1,ls.forEach(t=>t.complete(hh)),ls.clear()}function eM(){ls.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(dh=!0)})}function LC(){hh=!0,eM(),JS(),hh=!1}class wm{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(ls.add(this),fh||(fh=!0,lt.read(eM),lt.resolveKeyframes(JS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}TC(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ls.delete(this)}cancel(){this.state==="scheduled"&&(ls.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const IC=t=>t.startsWith("--");function tM(t,e,n){IC(e)?t.style.setProperty(e,n):t.style[e]=n}const NC={};function nM(t,e){const n=TS(t);return()=>NC[e]??n()}const UC=nM(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),iM=nM(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Jo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,H0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Jo([0,.65,.55,1]),circOut:Jo([.55,0,1,.45]),backIn:Jo([.31,.01,.66,-.59]),backOut:Jo([.33,1.53,.69,.99])};function rM(t,e){if(t)return typeof t=="function"?iM()?$S(t,e):"ease-out":OS(t)?Jo(t):Array.isArray(t)?t.map(n=>rM(n,e)||H0.easeOut):H0[t]}function FC(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},u=void 0){const c={[e]:n};l&&(c.offset=l);const d=rM(a,r);Array.isArray(d)&&(c.easing=d);const f={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return u&&(f.pseudoElement=u),t.animate(c,f)}function Am(t){return typeof t=="function"&&"applyToOptions"in t}function OC({type:t,...e}){return Am(t)&&iM()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class sM extends Tm{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,mm(typeof e.type!="string");const u=OC(e);this.animation=FC(n,i,r,u,s),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const c=wc(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(c),tM(n,i,c),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i,r;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((r=(i=this.animation).commitStyles)==null||r.call(i))}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return zn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+zn(e)}get time(){return zn(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=yn(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&UC()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),i&&(this.animation.rangeEnd=i),Gn):r(this)}}const oM={anticipate:DS,backInOut:PS,circInOut:IS};function BC(t){return t in oM}function kC(t){typeof t.ease=="string"&&BC(t.ease)&&(t.ease=oM[t.ease])}const mf=10;class VC extends sM{constructor(e){kC(e),QS(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new ju({...o,autoplay:!1}),l=Math.max(mf,ln.now()-this.startTime),u=Ci(0,mf,l-mf),c=a.sample(l).value,{name:d}=this.options;s&&d&&tM(s,d,c),n.setWithVelocity(a.sample(Math.max(0,l-u)).value,c,u),a.stop()}}const G0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(oi.test(t)||t==="0")&&!t.startsWith("url("));function zC(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function HC(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=G0(r,e),a=G0(s,e);return!o||!a?!1:zC(t)||(n==="spring"||Am(n))&&i}function ph(t){t.duration=0,t.type="keyframes"}const aM=new Set(["opacity","clipPath","filter","transform"]),GC=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function WC(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&GC.test(t[e]))return!0;return!1}const jC=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),XC=TS(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function $C(t){var d;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o,keyframes:a}=t;if(!(((d=e==null?void 0:e.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:c}=e.owner.getProps();return XC()&&n&&(aM.has(n)||jC.has(n)&&WC(a))&&(n!=="transform"||!c)&&!u&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const YC=40;class qC extends Tm{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:u,element:c,...d}){var v;super(),this.stop=()=>{var y,m;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(m=this.keyframeResolver)==null||m.cancel()},this.createdAt=ln.now();const f={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:u,element:c,...d},p=(c==null?void 0:c.KeyframeResolver)||wm;this.keyframeResolver=new p(a,(y,m,h)=>this.onKeyframesResolved(y,m,f,!h),l,u,c),(v=this.keyframeResolver)==null||v.scheduleResolve()}onKeyframesResolved(e,n,i,r){var h,g;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:u,onUpdate:c}=i;this.resolvedAt=ln.now();let d=!0;HC(e,s,o,a)||(d=!1,(Ir.instantAnimations||!l)&&(c==null||c(wc(e,i,n))),e[0]=e[e.length-1],ph(i),i.repeat=0);const p={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>YC?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},v=d&&!u&&$C(p),y=(g=(h=p.motionValue)==null?void 0:h.owner)==null?void 0:g.current;let m;if(v)try{m=new VC({...p,element:y})}catch{m=new ju(p)}else m=new ju(p);m.finished.then(()=>{this.notifyFinished()}).catch(Gn),this.pendingTimeline&&(this.stopTimeline=m.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),LC()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}class KC{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>e.finished))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e){const n=this.animations.map(i=>i.attachTimeline(e));return()=>{n.forEach((i,r)=>{i&&i(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return W0(this.animations,"duration")}get iterationDuration(){return W0(this.animations,"iterationDuration")}runAll(e){this.animations.forEach(n=>n[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function W0(t,e){let n=0;for(let i=0;i<t.length;i++){const r=t[i][e];r!==null&&r>n&&(n=r)}return n}class ZC extends KC{then(e,n){return this.finished.finally(e).then(()=>{})}}function lM(t,e,n,i=0,r=1){const s=Array.from(t).sort((u,c)=>u.sortNodePosition(c)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}const QC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function JC(t){const e=QC.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function uM(t,e,n=1){const[i,r]=JC(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return SS(o)?parseFloat(o):o}return xm(r)?uM(r,e,n+1):r}const eR={type:"spring",stiffness:500,damping:25,restSpeed:10},tR=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),nR={type:"keyframes",duration:.8},iR={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},rR=(t,{keyframes:e})=>e.length>2?nR:Po.has(t)?t.startsWith("scale")?tR(e[1]):eR:iR;function cM(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function Cm(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?cM(n,t):n}const sR=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function oR(t){for(const e in t)if(!sR.has(e))return!0;return!1}const Rm=(t,e,n,i={},r,s)=>o=>{const a=Cm(i,t)||{},l=a.delay||i.delay||0;let{elapsed:u=0}=i;u=u-yn(l);const c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};oR(a)||Object.assign(c,rR(t,c)),c.duration&&(c.duration=yn(c.duration)),c.repeatDelay&&(c.repeatDelay=yn(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(ph(c),c.delay===0&&(d=!0)),(Ir.instantAnimations||Ir.skipAnimations||r!=null&&r.shouldSkipAnimations)&&(d=!0,ph(c),c.delay=0),c.allowFlatten=!a.type&&!a.ease,d&&!s&&e.get()!==void 0){const f=wc(c.keyframes,a);if(f!==void 0){lt.update(()=>{c.onUpdate(f),c.onComplete()});return}}return a.isSync?new ju(c):new qC(c)};function j0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function bm(t,e,n,i){if(typeof e=="function"){const[r,s]=j0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=j0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function us(t,e,n){const i=t.getProps();return bm(i,e,n!==void 0?n:i.custom,t)}const fM=new Set(["width","height","top","left","right","bottom",...bo]),X0=30,aR=t=>!isNaN(parseFloat(t));class lR{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=ln.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=ln.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=aR(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new gm);const i=this.events[e].add(n);return e==="change"?()=>{i(),lt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ln.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>X0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,X0);return wS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ur(t,e){return new lR(t,e)}const mh=t=>Array.isArray(t);function uR(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ur(n))}function cR(t){return mh(t)?t[t.length-1]||0:t}function fR(t,e){const n=us(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=cR(s[o]);uR(t,o,a)}}const kt=t=>!!(t&&t.getVelocity);function dR(t){return!!(kt(t)&&t.add)}function gh(t,e){const n=t.getValue("willChange");if(dR(n))return n.add(e);if(!n&&Ir.WillChange){const i=new Ir.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function Pm(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const hR="framerAppearId",dM="data-"+Pm(hR);function hM(t){return t.props[dM]}function pR({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function Dm(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();s=s?cM(s,l):l;const u=s==null?void 0:s.reduceMotion;i&&(s=i);const c=[],d=r&&t.animationState&&t.animationState.getState()[r];for(const f in a){const p=t.getValue(f,t.latestValues[f]??null),v=a[f];if(v===void 0||d&&pR(d,f))continue;const y={delay:n,...Cm(s||{},f)},m=p.get();if(m!==void 0&&!p.isAnimating()&&!Array.isArray(v)&&v===m&&!y.velocity){lt.update(()=>p.set(v));continue}let h=!1;if(window.MotionHandoffAnimation){const S=hM(t);if(S){const w=window.MotionHandoffAnimation(S,f,lt);w!==null&&(y.startTime=w,h=!0)}}gh(t,f);const g=u??t.shouldReduceMotion;p.start(Rm(f,p,v,g&&fM.has(f)?{type:!1}:y,t,h));const _=p.animation;_&&c.push(_)}if(o){const f=()=>lt.update(()=>{o&&fR(t,o)});c.length?Promise.all(c).then(f):f()}return c}function vh(t,e,n={}){var l;const i=us(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(Dm(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=r;return mR(t,e,u,c,d,f,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[u,c]=a==="beforeChildren"?[s,o]:[o,s];return u().then(()=>c())}else return Promise.all([s(),o(n.delay)])}function mR(t,e,n=0,i=0,r=0,s=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(vh(l,e,{...o,delay:n+(typeof i=="function"?0:i)+lM(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function gR(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>vh(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=vh(t,e,n);else{const r=typeof e=="function"?us(t,e,n.custom):e;i=Promise.all(Dm(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const vR={test:t=>t==="auto",parse:t=>t},pM=t=>e=>e.test(t),mM=[Ro,Te,Ei,fr,WA,GA,vR],$0=t=>mM.find(pM(t));function _R(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||ES(t):!0}const xR=new Set(["brightness","contrast","saturate","opacity"]);function yR(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(ym)||[];if(!i)return t;const r=n.replace(i,"");let s=xR.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const SR=/\b([a-z-]*)\(.*?\)/gu,_h={...oi,getAnimatableNone:t=>{const e=t.match(SR);return e?e.map(yR).join(" "):t}},xh={...oi,getAnimatableNone:t=>{const e=oi.parse(t);return oi.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},Y0={...Ro,transform:Math.round},MR={rotate:fr,rotateX:fr,rotateY:fr,rotateZ:fr,scale:_l,scaleX:_l,scaleY:_l,scaleZ:_l,skew:fr,skewX:fr,skewY:fr,distance:Te,translateX:Te,translateY:Te,translateZ:Te,x:Te,y:Te,z:Te,perspective:Te,transformPerspective:Te,opacity:La,originX:I0,originY:I0,originZ:Te},Lm={borderWidth:Te,borderTopWidth:Te,borderRightWidth:Te,borderBottomWidth:Te,borderLeftWidth:Te,borderRadius:Te,borderTopLeftRadius:Te,borderTopRightRadius:Te,borderBottomRightRadius:Te,borderBottomLeftRadius:Te,width:Te,maxWidth:Te,height:Te,maxHeight:Te,top:Te,right:Te,bottom:Te,left:Te,inset:Te,insetBlock:Te,insetBlockStart:Te,insetBlockEnd:Te,insetInline:Te,insetInlineStart:Te,insetInlineEnd:Te,padding:Te,paddingTop:Te,paddingRight:Te,paddingBottom:Te,paddingLeft:Te,paddingBlock:Te,paddingBlockStart:Te,paddingBlockEnd:Te,paddingInline:Te,paddingInlineStart:Te,paddingInlineEnd:Te,margin:Te,marginTop:Te,marginRight:Te,marginBottom:Te,marginLeft:Te,marginBlock:Te,marginBlockStart:Te,marginBlockEnd:Te,marginInline:Te,marginInlineStart:Te,marginInlineEnd:Te,fontSize:Te,backgroundPositionX:Te,backgroundPositionY:Te,...MR,zIndex:Y0,fillOpacity:La,strokeOpacity:La,numOctaves:Y0},ER={...Lm,color:It,backgroundColor:It,outlineColor:It,fill:It,stroke:It,borderColor:It,borderTopColor:It,borderRightColor:It,borderBottomColor:It,borderLeftColor:It,filter:_h,WebkitFilter:_h,mask:xh,WebkitMask:xh},gM=t=>ER[t],TR=new Set([_h,xh]);function vM(t,e){let n=gM(t);return TR.has(n)||(n=oi),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const wR=new Set(["auto","none","0"]);function AR(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!wR.has(s)&&yo(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=vM(n,r)}class CR extends wm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<e.length;c++){let d=e[c];if(typeof d=="string"&&(d=d.trim(),xm(d))){const f=uM(d,n.current);f!==void 0&&(e[c]=f),c===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!fM.has(i)||e.length!==2)return;const[r,s]=e,o=$0(r),a=$0(s),l=L0(r),u=L0(s);if(l!==u&&Sr[i]){this.needsMeasurement=!0;return}if(o!==a)if(z0(o)&&z0(a))for(let c=0;c<e.length;c++){const d=e[c];typeof d=="string"&&(e[c]=parseFloat(d))}else Sr[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||_R(e[r]))&&i.push(r);i.length&&AR(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Sr[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=Sr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,u])=>{e.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function Im(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let i=document;e&&(i=e.current);const r=(n==null?void 0:n[t])??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}const _M=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function ru(t){return MS(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Nm}=BS(queueMicrotask,!1),Zn={x:!1,y:!1};function xM(){return Zn.x||Zn.y}function RR(t){return t==="x"||t==="y"?Zn[t]?null:(Zn[t]=!0,()=>{Zn[t]=!1}):Zn.x||Zn.y?null:(Zn.x=Zn.y=!0,()=>{Zn.x=Zn.y=!1})}function yM(t,e){const n=Im(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function bR(t){return!(t.pointerType==="touch"||xM())}function PR(t,e,n={}){const[i,r,s]=yM(t,n);return i.forEach(o=>{let a=!1,l=!1,u;const c=()=>{o.removeEventListener("pointerleave",v)},d=m=>{u&&(u(m),u=void 0),c()},f=m=>{a=!1,window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),l&&(l=!1,d(m))},p=()=>{a=!0,window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",f,r)},v=m=>{if(m.pointerType!=="touch"){if(a){l=!0;return}d(m)}},y=m=>{if(!bR(m))return;l=!1;const h=e(o,m);typeof h=="function"&&(u=h,o.addEventListener("pointerleave",v,r))};o.addEventListener("pointerenter",y,r),o.addEventListener("pointerdown",p,r)}),s}const SM=(t,e)=>e?t===e?!0:SM(t,e.parentElement):!1,Um=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,DR=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function LR(t){return DR.has(t.tagName)||t.isContentEditable===!0}const IR=new Set(["INPUT","SELECT","TEXTAREA"]);function NR(t){return IR.has(t.tagName)||t.isContentEditable===!0}const su=new WeakSet;function q0(t){return e=>{e.key==="Enter"&&t(e)}}function gf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const UR=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=q0(()=>{if(su.has(n))return;gf(n,"down");const r=q0(()=>{gf(n,"up")}),s=()=>gf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function K0(t){return Um(t)&&!xM()}const Z0=new WeakSet;function FR(t,e,n={}){const[i,r,s]=yM(t,n),o=a=>{const l=a.currentTarget;if(!K0(a)||Z0.has(a))return;su.add(l),n.stopPropagation&&Z0.add(a);const u=e(l,a),c=(p,v)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),su.has(l)&&su.delete(l),K0(p)&&typeof u=="function"&&u(p,{success:v})},d=p=>{c(p,l===window||l===document||n.useGlobalTarget||SM(l,p.target))},f=p=>{c(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",f,r)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),ru(a)&&(a.addEventListener("focus",u=>UR(u,r)),!LR(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function Ac(t){return MS(t)&&"ownerSVGElement"in t}const ou=new WeakMap;let dr;const MM=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:Ac(i)&&"getBBox"in i?i.getBBox()[e]:i[n],OR=MM("inline","width","offsetWidth"),BR=MM("block","height","offsetHeight");function kR({target:t,borderBoxSize:e}){var n;(n=ou.get(t))==null||n.forEach(i=>{i(t,{get width(){return OR(t,e)},get height(){return BR(t,e)}})})}function VR(t){t.forEach(kR)}function zR(){typeof ResizeObserver>"u"||(dr=new ResizeObserver(VR))}function HR(t,e){dr||zR();const n=Im(t);return n.forEach(i=>{let r=ou.get(i);r||(r=new Set,ou.set(i,r)),r.add(e),dr==null||dr.observe(i)}),()=>{n.forEach(i=>{const r=ou.get(i);r==null||r.delete(e),r!=null&&r.size||dr==null||dr.unobserve(i)})}}const au=new Set;let Js;function GR(){Js=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};au.forEach(e=>e(t))},window.addEventListener("resize",Js)}function WR(t){return au.add(t),Js||GR(),()=>{au.delete(t),!au.size&&typeof Js=="function"&&(window.removeEventListener("resize",Js),Js=void 0)}}function Q0(t,e){return typeof t=="function"?WR(t):HR(t,e)}function EM(t){return Ac(t)&&t.tagName==="svg"}const jR=[...mM,It,oi],XR=t=>jR.find(pM(t)),J0=()=>({translate:0,scale:1,origin:0,originPoint:0}),eo=()=>({x:J0(),y:J0()}),ev=()=>({min:0,max:0}),Lt=()=>({x:ev(),y:ev()}),Na=new WeakMap;function Cc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Ua(t){return typeof t=="string"||Array.isArray(t)}const Fm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Om=["initial",...Fm];function Rc(t){return Cc(t.animate)||Om.some(e=>Ua(t[e]))}function TM(t){return!!(Rc(t)||t.variants)}function $R(t,e,n){for(const i in e){const r=e[i],s=n[i];if(kt(r))t.addValue(i,r);else if(kt(s))t.addValue(i,Ur(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,Ur(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const yh={current:null},wM={current:!1},YR=typeof window<"u";function qR(){if(wM.current=!0,!!YR)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>yh.current=t.matches;t.addEventListener("change",e),e()}else yh.current=!1}const tv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Xu={};function AM(t){Xu=t}function KR(){return Xu}class CM{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=wm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=ln.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,lt.render(this.render,!1,!0))};const{latestValues:u,renderState:c}=a;this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Rc(n),this.isVariantNode=TM(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const v=f[p];u[p]!==void 0&&kt(v)&&v.set(u[p])}}mount(e){var n,i;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=e,Na.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(wM.current||qR(),this.shouldReduceMotion=yh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Nr(this.notifyUpdate),Nr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&aM.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:u,duration:c}=n.accelerate,d=new sM({element:this.current,name:e,keyframes:a,times:l,ease:u,duration:yn(c)}),f=o(d);this.valueSubscriptions.set(e,()=>{f(),d.cancel()});return}const i=Po.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&lt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Xu){const n=Xu[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Lt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<tv.length;i++){const r=tv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=$R(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Ur(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(SS(i)||ES(i))?i=parseFloat(i):!XR(i)&&oi.test(n)&&(i=vM(e,n)),this.setBaseTarget(e,kt(i)?i.get():i)),kt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=bm(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!kt(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new gm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Nm.render(this.render)}}class RM extends CM{constructor(){super(...arguments),this.KeyframeResolver=CR}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;kt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Vr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function bM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function ZR({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function QR(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function vf(t){return t===void 0||t===1}function Sh({scale:t,scaleX:e,scaleY:n}){return!vf(t)||!vf(e)||!vf(n)}function qr(t){return Sh(t)||PM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function PM(t){return nv(t.x)||nv(t.y)}function nv(t){return t&&t!=="0%"}function $u(t,e,n){const i=t-n,r=e*i;return n+r}function iv(t,e,n,i,r){return r!==void 0&&(t=$u(t,r,i)),$u(t,n,i)+e}function Mh(t,e=0,n=1,i,r){t.min=iv(t.min,e,n,i,r),t.max=iv(t.max,e,n,i,r)}function DM(t,{x:e,y:n}){Mh(t.x,e.translate,e.scale,e.originPoint),Mh(t.y,n.translate,n.scale,n.originPoint)}const rv=.999999999999,sv=1.0000000000001;function JR(t,e,n,i=!1){var a;const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let l=0;l<r;l++){s=n[l],o=s.projectionDelta;const{visualElement:u}=s.options;u&&u.props.style&&u.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(gi(t.x,-s.scroll.offset.x),gi(t.y,-s.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,DM(t,o)),i&&qr(s.latestValues)&&lu(t,s.latestValues,(a=s.layout)==null?void 0:a.layoutBox))}e.x<sv&&e.x>rv&&(e.x=1),e.y<sv&&e.y>rv&&(e.y=1)}function gi(t,e){t.min+=e,t.max+=e}function ov(t,e,n,i,r=.5){const s=dt(t.min,t.max,r);Mh(t,e,n,s,i)}function av(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function lu(t,e,n){const i=n??t;ov(t.x,av(e.x,i.x),e.scaleX,e.scale,e.originX),ov(t.y,av(e.y,i.y),e.scaleY,e.scale,e.originY)}function LM(t,e){return bM(QR(t.getBoundingClientRect(),e))}function eb(t,e,n){const i=LM(t,n),{scroll:r}=e;return r&&(gi(i.x,r.offset.x),gi(i.y,r.offset.y)),i}const tb={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},nb=bo.length;function ib(t,e,n){let i="",r=!0;for(let s=0;s<nb;s++){const o=bo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number")l=a===(o.startsWith("scale")?1:0);else{const u=parseFloat(a);l=o.startsWith("scale")?u===1:u===0}if(!l||n){const u=_M(a,Lm[o]);if(!l){r=!1;const c=tb[o]||o;i+=`${c}(${u}) `}n&&(e[o]=u)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Bm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const u=e[l];if(Po.has(l)){o=!0;continue}else if(VS(l)){r[l]=u;continue}else{const c=_M(u,Lm[l]);l.startsWith("origin")?(a=!0,s[l]=c):i[l]=c}}if(e.transform||(o||n?i.transform=ib(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;i.transformOrigin=`${l} ${u} ${c}`}}function IM(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function lv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const zo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Te.test(t))t=parseFloat(t);else return t;const n=lv(t,e.target.x),i=lv(t,e.target.y);return`${n}% ${i}%`}},rb={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=oi.parse(t);if(r.length>5)return i;const s=oi.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const u=dt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}},Eh={borderRadius:{...zo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:zo,borderTopRightRadius:zo,borderBottomLeftRadius:zo,borderBottomRightRadius:zo,boxShadow:rb};function NM(t,{layout:e,layoutId:n}){return Po.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Eh[t]||t==="opacity")}function km(t,e,n){var o;const i=t.style,r=e==null?void 0:e.style,s={};if(!i)return s;for(const a in i)(kt(i[a])||r&&kt(r[a])||NM(a,t)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function sb(t){return window.getComputedStyle(t)}class UM extends RM{constructor(){super(...arguments),this.type="html",this.renderInstance=IM}readValueFromInstance(e,n){var i;if(Po.has(n))return(i=this.projection)!=null&&i.isProjecting?uh(n):CC(e,n);{const r=sb(e),s=(VS(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return LM(e,n)}build(e,n,i){Bm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return km(e,n,i)}}function ob(t,e){return t in e}class ab extends CM{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,n){if(ob(n,e)){const i=e[n];if(typeof i=="string"||typeof i=="number")return i}}getBaseTargetFromProps(){}removeValueFromRenderState(e,n){delete n.output[e]}measureInstanceViewportBox(){return Lt()}build(e,n){Object.assign(e.output,n)}renderInstance(e,{output:n}){Object.assign(e,n)}sortInstanceNodePosition(){return 0}}const lb={offset:"stroke-dashoffset",array:"stroke-dasharray"},ub={offset:"strokeDashoffset",array:"strokeDasharray"};function cb(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?lb:ub;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const fb=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function FM(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,u,c){if(Bm(t,a,u),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:f}=t;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),f.transform&&(f.transformBox=(c==null?void 0:c.transformBox)??"fill-box",delete d.transformBox);for(const p of fb)d[p]!==void 0&&(f[p]=d[p],delete d[p]);e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),r!==void 0&&cb(d,r,s,o,!1)}const OM=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),BM=t=>typeof t=="string"&&t.toLowerCase()==="svg";function db(t,e,n,i){IM(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(OM.has(r)?r:Pm(r),e.attrs[r])}function kM(t,e,n){const i=km(t,e,n);for(const r in t)if(kt(t[r])||kt(e[r])){const s=bo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}class VM extends RM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Lt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Po.has(n)){const i=gM(n);return i&&i.default||0}return n=OM.has(n)?n:Pm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return kM(e,n,i)}build(e,n,i){FM(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){db(e,n,i,r)}mount(e){this.isSVGTag=BM(e.tagName),super.mount(e)}}const hb=Om.length;function zM(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?zM(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<hb;n++){const i=Om[n],r=t.props[i];(Ua(r)||r===!1)&&(e[i]=r)}return e}function HM(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const pb=[...Fm].reverse(),mb=Fm.length;function gb(t){return e=>Promise.all(e.map(({animation:n,options:i})=>gR(t,n,i)))}function vb(t){let e=gb(t),n=uv(),i=!0,r=!1;const s=u=>(c,d)=>{var p;const f=us(t,d,u==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);if(f){const{transition:v,transitionEnd:y,...m}=f;c={...c,...m,...y}}return c};function o(u){e=u(t)}function a(u){const{props:c}=t,d=zM(t.parent)||{},f=[],p=new Set;let v={},y=1/0;for(let h=0;h<mb;h++){const g=pb[h],_=n[g],S=c[g]!==void 0?c[g]:d[g],w=Ua(S),T=g===u?_.isActive:null;T===!1&&(y=h);let R=S===d[g]&&S!==c[g]&&w;if(R&&(i||r)&&t.manuallyAnimateOnMount&&(R=!1),_.protectedKeys={...v},!_.isActive&&T===null||!S&&!_.prevProp||Cc(S)||typeof S=="boolean")continue;if(g==="exit"&&_.isActive&&T!==!0){_.prevResolvedValues&&(v={...v,..._.prevResolvedValues});continue}const x=_b(_.prevProp,S);let A=x||g===u&&_.isActive&&!R&&w||h>y&&w,b=!1;const P=Array.isArray(S)?S:[S];let I=P.reduce(s(g),{});T===!1&&(I={});const{prevResolvedValues:W={}}=_,Y={...W,...I},N=U=>{A=!0,p.has(U)&&(b=!0,p.delete(U)),_.needsAnimating[U]=!0;const j=t.getValue(U);j&&(j.liveStyle=!1)};for(const U in Y){const j=I[U],q=W[U];if(v.hasOwnProperty(U))continue;let re=!1;mh(j)&&mh(q)?re=!HM(j,q):re=j!==q,re?j!=null?N(U):p.add(U):j!==void 0&&p.has(U)?N(U):_.protectedKeys[U]=!0}_.prevProp=S,_.prevResolvedValues=I,_.isActive&&(v={...v,...I}),(i||r)&&t.blockInitialAnimation&&(A=!1);const B=R&&x;A&&(!B||b)&&f.push(...P.map(U=>{const j={type:g};if(typeof U=="string"&&(i||r)&&!B&&t.manuallyAnimateOnMount&&t.parent){const{parent:q}=t,re=us(q,U);if(q.enteringChildren&&re){const{delayChildren:ce}=re.transition||{};j.delay=lM(q.enteringChildren,t,ce)}}return{animation:U,options:j}}))}if(p.size){const h={};if(typeof c.initial!="boolean"){const g=us(t,Array.isArray(c.initial)?c.initial[0]:c.initial);g&&g.transition&&(h.transition=g.transition)}p.forEach(g=>{const _=t.getBaseTarget(g),S=t.getValue(g);S&&(S.liveStyle=!0),h[g]=_??null}),f.push({animation:h})}let m=!!f.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(m=!1),i=!1,r=!1,m?e(f):Promise.resolve()}function l(u,c){var f;if(n[u].isActive===c)return Promise.resolve();(f=t.variantChildren)==null||f.forEach(p=>{var v;return(v=p.animationState)==null?void 0:v.setActive(u,c)}),n[u].isActive=c;const d=a(u);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=uv(),r=!0}}}function _b(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!HM(e,t):!1}function Hr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function uv(){return{animate:Hr(!0),whileInView:Hr(),whileHover:Hr(),whileTap:Hr(),whileDrag:Hr(),whileFocus:Hr(),exit:Hr()}}function Th(t,e){t.min=e.min,t.max=e.max}function $n(t,e){Th(t.x,e.x),Th(t.y,e.y)}function cv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const GM=1e-4,xb=1-GM,yb=1+GM,WM=.01,Sb=0-WM,Mb=0+WM;function un(t){return t.max-t.min}function Eb(t,e,n){return Math.abs(t-e)<=n}function fv(t,e,n,i=.5){t.origin=i,t.originPoint=dt(e.min,e.max,t.origin),t.scale=un(n)/un(e),t.translate=dt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=xb&&t.scale<=yb||isNaN(t.scale))&&(t.scale=1),(t.translate>=Sb&&t.translate<=Mb||isNaN(t.translate))&&(t.translate=0)}function ha(t,e,n,i){fv(t.x,e.x,n.x,i?i.originX:void 0),fv(t.y,e.y,n.y,i?i.originY:void 0)}function dv(t,e,n,i=0){const r=i?dt(n.min,n.max,i):n.min;t.min=r+e.min,t.max=t.min+un(e)}function Tb(t,e,n,i){dv(t.x,e.x,n.x,i==null?void 0:i.x),dv(t.y,e.y,n.y,i==null?void 0:i.y)}function hv(t,e,n,i=0){const r=i?dt(n.min,n.max,i):n.min;t.min=e.min-r,t.max=t.min+un(e)}function Yu(t,e,n,i){hv(t.x,e.x,n.x,i==null?void 0:i.x),hv(t.y,e.y,n.y,i==null?void 0:i.y)}function pv(t,e,n,i,r){return t-=e,t=$u(t,1/n,i),r!==void 0&&(t=$u(t,1/r,i)),t}function wb(t,e=0,n=1,i=.5,r,s=t,o=t){if(Ei.test(e)&&(e=parseFloat(e),e=dt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=dt(s.min,s.max,i);t===s&&(a-=e),t.min=pv(t.min,e,n,a,r),t.max=pv(t.max,e,n,a,r)}function mv(t,e,[n,i,r],s,o){wb(t,e[n],e[i],e[r],e.scale,s,o)}const Ab=["x","scaleX","originX"],Cb=["y","scaleY","originY"];function gv(t,e,n,i){mv(t.x,e,Ab,n?n.x:void 0,i?i.x:void 0),mv(t.y,e,Cb,n?n.y:void 0,i?i.y:void 0)}function vv(t){return t.translate===0&&t.scale===1}function jM(t){return vv(t.x)&&vv(t.y)}function _v(t,e){return t.min===e.min&&t.max===e.max}function Rb(t,e){return _v(t.x,e.x)&&_v(t.y,e.y)}function xv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function XM(t,e){return xv(t.x,e.x)&&xv(t.y,e.y)}function yv(t){return un(t.x)/un(t.y)}function Sv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function mi(t){return[t("x"),t("y")]}function bb(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:d,rotateY:f,skewX:p,skewY:v}=n;u&&(i=`perspective(${u}px) ${i}`),c&&(i+=`rotate(${c}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),p&&(i+=`skewX(${p}deg) `),v&&(i+=`skewY(${v}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const $M=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Pb=$M.length,Mv=t=>typeof t=="string"?parseFloat(t):t,Ev=t=>typeof t=="number"||Te.test(t);function Db(t,e,n,i,r,s){r?(t.opacity=dt(0,n.opacity??1,Lb(i)),t.opacityExit=dt(e.opacity??1,0,Ib(i))):s&&(t.opacity=dt(e.opacity??1,n.opacity??1,i));for(let o=0;o<Pb;o++){const a=$M[o];let l=Tv(e,a),u=Tv(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Ev(l)===Ev(u)?(t[a]=Math.max(dt(Mv(l),Mv(u),i),0),(Ei.test(u)||Ei.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=dt(e.rotate||0,n.rotate||0,i))}function Tv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Lb=YM(0,.5,LS),Ib=YM(.5,.95,Gn);function YM(t,e,n){return i=>i<t?0:i>e?1:n(xo(t,e,i))}function qM(t,e,n){const i=kt(t)?t:Ur(t);return i.start(Rm("",i,e,n)),i.animation}function Fa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const Nb=(t,e)=>t.depth-e.depth;class Ub{constructor(){this.children=[],this.isDirty=!1}add(e){pm(this.children,e),this.isDirty=!0}remove(e){_o(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Nb),this.isDirty=!1,this.children.forEach(e)}}function Fb(t,e){const n=ln.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Nr(i),t(s-e))};return lt.setup(i,!0),()=>Nr(i)}function uu(t){return kt(t)?t.get():t}class Ob{constructor(){this.members=[]}add(e){pm(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;(!r||r.isConnected===!1)&&!i.snapshot&&(_o(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(_o(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let i=this.members.indexOf(e)-1;i>=0;i--){const r=this.members[i];if(r.isPresent!==!1&&((n=r.instance)==null?void 0:n.isConnected)!==!1)return this.promote(r),!0}return!1}promote(e,n){var r;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:s}=i.options,{layoutDependency:o}=e.options;(s===void 0||s!==o)&&(e.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(r=e.root)!=null&&r.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,i,r,s,o;(i=(n=e.options).onExitComplete)==null||i.call(n),(o=(r=e.resumingFrom)==null?void 0:(s=r.options).onExitComplete)==null||o.call(s)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const cu={hasAnimatedSinceResize:!0,hasEverUpdated:!1},_f=["","X","Y","Z"],Bb=1e3;let kb=0;function xf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function KM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=hM(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",lt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&KM(i)}function ZM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=kb++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Hb),this.nodes.forEach(Yb),this.nodes.forEach(qb),this.nodes.forEach(Gb)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Ub)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new gm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Ac(o)&&!EM(o),this.instance=o;const{layoutId:a,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let c,d=0;const f=()=>this.root.updateBlockedByResize=!1;lt.read(()=>{d=window.innerWidth}),t(o,()=>{const p=window.innerWidth;p!==d&&(d=p,this.root.updateBlockedByResize=!0,c&&c(),c=Fb(f,250),cu.hasAnimatedSinceResize&&(cu.hasAnimatedSinceResize=!1,this.nodes.forEach(Cv)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&u&&(a||l)&&this.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d,hasRelativeLayoutChanged:f,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||u.getDefaultTransition()||eP,{onLayoutAnimationStart:y,onLayoutAnimationComplete:m}=u.getProps(),h=!this.targetLayout||!XM(this.targetLayout,p),g=!d&&f;if(this.options.layoutRoot||this.resumeFrom||g||d&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const _={...Cm(v,"layout"),onPlay:y,onComplete:m};(u.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_),this.setAnimationOrigin(c,g)}else d||Cv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Nr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Kb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&KM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,(typeof d.latestValues.x=="string"||typeof d.latestValues.y=="string")&&(d.isLayoutDirty=!0),d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(jb),this.nodes.forEach(wv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Av);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Xb),this.nodes.forEach($b),this.nodes.forEach(Vb),this.nodes.forEach(zb)):this.nodes.forEach(Av),this.clearAllSnapshots();const a=ln.now();$t.delta=Ci(0,1e3/60,a-$t.timestamp),$t.timestamp=a,$t.isProcessing=!0,cf.update.process($t),cf.preRender.process($t),cf.render.process($t),$t.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Nm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Wb),this.sharedNodes.forEach(Zb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,lt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){lt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!un(this.snapshot.measuredBox.x)&&!un(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Lt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!jM(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&this.instance&&(a||qr(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),tP(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:o}=this.options;if(!o)return Lt();const a=o.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(nP))){const{scroll:c}=this.root;c&&(gi(a.x,c.offset.x),gi(a.y,c.offset.y))}return a}removeElementScroll(o){var l;const a=Lt();if($n(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:d,options:f}=c;c!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&$n(a,o),gi(a.x,d.offset.x),gi(a.y,d.offset.y))}return a}applyTransform(o,a=!1,l){var c,d;const u=l||Lt();$n(u,o);for(let f=0;f<this.path.length;f++){const p=this.path[f];!a&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(gi(u.x,-p.scroll.offset.x),gi(u.y,-p.scroll.offset.y)),qr(p.latestValues)&&lu(u,p.latestValues,(c=p.layout)==null?void 0:c.layoutBox)}return qr(this.latestValues)&&lu(u,this.latestValues,(d=this.layout)==null?void 0:d.layoutBox),u}removeTransform(o){var l;const a=Lt();$n(a,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!qr(c.latestValues))continue;let d;c.instance&&(Sh(c.latestValues)&&c.updateSnapshot(),d=Lt(),$n(d,c.measurePageBox())),gv(a,c.latestValues,(l=c.snapshot)==null?void 0:l.layoutBox,d)}return qr(this.latestValues)&&gv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==$t.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:c,layoutId:d}=this.options;if(!this.layout||!(c||d))return;this.resolvedRelativeTargetAt=$t.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Lt(),this.targetWithTransforms=Lt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Tb(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):$n(this.target,this.layout.layoutBox),DM(this.target,this.targetDelta)):$n(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Sh(this.parent.latestValues)||PM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Lt(),this.relativeTargetOrigin=Lt(),Yu(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),$n(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var v;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===$t.timestamp&&(l=!1),l)return;const{layout:u,layoutId:c}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||c))return;$n(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,f=this.treeScale.y;JR(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Lt());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(cv(this.prevProjectionDelta.x,this.projectionDelta.x),cv(this.prevProjectionDelta.y,this.projectionDelta.y)),ha(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==f||!Sv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Sv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=eo(),this.projectionDelta=eo(),this.projectionDeltaWithTransform=eo()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=eo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=Lt(),p=l?l.source:void 0,v=this.layout?this.layout.source:void 0,y=p!==v,m=this.getStack(),h=!m||m.members.length<=1,g=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(Jb));this.animationProgress=0;let _;this.mixTargetDelta=S=>{const w=S/1e3;Rv(d.x,o.x,w),Rv(d.y,o.y,w),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Yu(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Qb(this.relativeTarget,this.relativeTargetOrigin,f,w),_&&Rb(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=Lt()),$n(_,this.relativeTarget)),y&&(this.animationValues=c,Db(c,u,this.latestValues,w,g,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,u;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(u=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||u.stop(),this.pendingAnimation&&(Nr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=lt.update(()=>{cu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ur(0)),this.motionValue.jump(0,!1),this.currentAnimation=qM(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:c=>{this.mixTargetDelta(c),o.onUpdate&&o.onUpdate(c)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Bb),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&QM(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Lt();const d=un(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=un(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}$n(a,l),lu(a,c),ha(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Ob),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&xf("z",o,u,this.animationValues);for(let c=0;c<_f.length;c++)xf(`rotate${_f[c]}`,o,u,this.animationValues),xf(`skew${_f[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=uu(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=uu(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!qr(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const c=u.animationValues||u.latestValues;this.applyTransformsToTarget();let d=bb(this.projectionDeltaWithTransform,this.treeScale,c);l&&(d=l(c,d)),o.transform=d;const{x:f,y:p}=this.projectionDelta;o.transformOrigin=`${f.origin*100}% ${p.origin*100}% 0`,u.animationValues?o.opacity=u===this?c.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:c.opacityExit:o.opacity=u===this?c.opacity!==void 0?c.opacity:"":c.opacityExit!==void 0?c.opacityExit:0;for(const v in Eh){if(c[v]===void 0)continue;const{correct:y,applyTo:m,isCSSVariable:h}=Eh[v],g=d==="none"?c[v]:y(c[v],u);if(m){const _=m.length;for(let S=0;S<_;S++)o[m[S]]=g}else h?this.options.visualElement.renderState.vars[v]=g:o[v]=g}this.options.layoutId&&(o.pointerEvents=u===this?uu(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(wv),this.root.sharedNodes.clear()}}}function Vb(t){t.updateLayout()}function zb(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;if(s==="size")mi(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],p=un(f);f.min=i[d].min,f.max=f.min+p});else if(s==="x"||s==="y"){const d=s==="x"?"y":"x";Th(o?e.measuredBox[d]:e.layoutBox[d],i[d])}else QM(s,e.layoutBox,i)&&mi(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],p=un(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=eo();ha(a,i,e.layoutBox);const l=eo();o?ha(l,t.applyTransform(r,!0),e.measuredBox):ha(l,i,e.layoutBox);const u=!jM(a);let c=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const v=t.options.layoutAnchor||void 0,y=Lt();Yu(y,e.layoutBox,f.layoutBox,v);const m=Lt();Yu(m,i,p.layoutBox,v),XM(y,m)||(c=!0),d.options.layoutRoot&&(t.relativeTarget=m,t.relativeTargetOrigin=y,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeLayoutChanged:c})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function Hb(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function Gb(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Wb(t){t.clearSnapshot()}function wv(t){t.clearMeasurements()}function jb(t){t.isLayoutDirty=!0,t.updateLayout()}function Av(t){t.isLayoutDirty=!1}function Xb(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function $b(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Cv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Yb(t){t.resolveTargetDelta()}function qb(t){t.calcProjection()}function Kb(t){t.resetSkewAndRotation()}function Zb(t){t.removeLeadSnapshot()}function Rv(t,e,n){t.translate=dt(e.translate,0,n),t.scale=dt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function bv(t,e,n,i){t.min=dt(e.min,n.min,i),t.max=dt(e.max,n.max,i)}function Qb(t,e,n,i){bv(t.x,e.x,n.x,i),bv(t.y,e.y,n.y,i)}function Jb(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const eP={duration:.45,ease:[.4,0,.1,1]},Pv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Dv=Pv("applewebkit/")&&!Pv("chrome/")?Math.round:Gn;function Lv(t){t.min=Dv(t.min),t.max=Dv(t.max)}function tP(t){Lv(t.x),Lv(t.y)}function QM(t,e,n){return t==="position"||t==="preserve-aspect"&&!Eb(yv(e),yv(n),.2)}function nP(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const iP=ZM({attachResizeListener:(t,e)=>Fa(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),yf={current:void 0},JM=ZM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!yf.current){const t=new iP({});t.mount(window),t.setOptions({layoutScroll:!0}),yf.current=t}return yf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),bc=z.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Iv(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function rP(...t){return e=>{let n=!1;const i=t.map(r=>{const s=Iv(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():Iv(t[r],null)}}}}function sP(...t){return z.useCallback(rP(...t),t)}class oP extends z.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(ru(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=n.offsetParent,r=ru(i)&&i.offsetWidth||0,s=ru(i)&&i.offsetHeight||0,o=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=r-a.width-a.left,a.bottom=s-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}}function aP({children:t,isPresent:e,anchorX:n,anchorY:i,root:r,pop:s}){var f;const o=z.useId(),a=z.useRef(null),l=z.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:u}=z.useContext(bc),c=((f=t.props)==null?void 0:f.ref)??(t==null?void 0:t.ref),d=sP(a,c);return z.useInsertionEffect(()=>{const{width:p,height:v,top:y,left:m,right:h,bottom:g}=l.current;if(e||s===!1||!a.current||!p||!v)return;const _=n==="left"?`left: ${m}`:`right: ${h}`,S=i==="bottom"?`bottom: ${g}`:`top: ${y}`;a.current.dataset.motionPopId=o;const w=document.createElement("style");u&&(w.nonce=u);const T=r??document.head;return T.appendChild(w),w.sheet&&w.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${v}px !important;
            ${_}px !important;
            ${S}px !important;
          }
        `),()=>{var R;(R=a.current)==null||R.removeAttribute("data-motion-pop-id"),T.contains(w)&&T.removeChild(w)}},[e]),D.jsx(oP,{isPresent:e,childRef:a,sizeRef:l,pop:s,children:s===!1?t:z.cloneElement(t,{ref:d})})}const lP=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o,anchorX:a,anchorY:l,root:u})=>{const c=Ec(uP),d=z.useId();let f=!0,p=z.useMemo(()=>(f=!1,{id:d,initial:e,isPresent:n,custom:r,onExitComplete:v=>{c.set(v,!0);for(const y of c.values())if(!y)return;i&&i()},register:v=>(c.set(v,!1),()=>c.delete(v))}),[n,c,i]);return s&&f&&(p={...p}),z.useMemo(()=>{c.forEach((v,y)=>c.set(y,!1))},[n]),z.useEffect(()=>{!n&&!c.size&&i&&i()},[n]),t=D.jsx(aP,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:l,root:u,children:t}),D.jsx(Tc.Provider,{value:p,children:t})};function uP(){return new Map}function eE(t=!0){const e=z.useContext(Tc);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=z.useId();z.useEffect(()=>{if(t)return r(s)},[t]);const o=z.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const xl=t=>t.key||"";function Nv(t){const e=[];return z.Children.forEach(t,n=>{z.isValidElement(n)&&e.push(n)}),e}const cP=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:u})=>{const[c,d]=eE(o),f=z.useMemo(()=>Nv(t),[t]),p=o&&!c?[]:f.map(xl),v=z.useRef(!0),y=z.useRef(f),m=Ec(()=>new Map),h=z.useRef(new Set),[g,_]=z.useState(f),[S,w]=z.useState(f);yS(()=>{v.current=!1,y.current=f;for(let x=0;x<S.length;x++){const A=xl(S[x]);p.includes(A)?(m.delete(A),h.current.delete(A)):m.get(A)!==!0&&m.set(A,!1)}},[S,p.length,p.join("-")]);const T=[];if(f!==g){let x=[...f];for(let A=0;A<S.length;A++){const b=S[A],P=xl(b);p.includes(P)||(x.splice(A,0,b),T.push(b))}return s==="wait"&&T.length&&(x=T),w(Nv(x)),_(f),null}const{forceRender:R}=z.useContext(hm);return D.jsx(D.Fragment,{children:S.map(x=>{const A=xl(x),b=o&&!c?!1:f===S||p.includes(A),P=()=>{if(h.current.has(A))return;if(m.has(A))h.current.add(A),m.set(A,!0);else return;let I=!0;m.forEach(W=>{W||(I=!1)}),I&&(R==null||R(),w(y.current),o&&(d==null||d()),i&&i())};return D.jsx(lP,{isPresent:b,initial:!v.current||n?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:u,onExitComplete:b?void 0:P,anchorX:a,anchorY:l,children:x},A)})})},tE=z.createContext({strict:!1}),Uv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Fv=!1;function fP(){if(Fv)return;const t={};for(const e in Uv)t[e]={isEnabled:n=>Uv[e].some(i=>!!n[i])};AM(t),Fv=!0}function nE(){return fP(),KR()}function dP(t){const e=nE();for(const n in t)e[n]={...e[n],...t[n]};AM(e)}const hP=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function qu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||hP.has(t)}let iE=t=>!qu(t);function pP(t){typeof t=="function"&&(iE=e=>e.startsWith("on")?!qu(e):t(e))}try{pP(require("@emotion/is-prop-valid").default)}catch{}function mP(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||kt(t[r])||(iE(r)||n===!0&&qu(r)||!e&&!qu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const Pc=z.createContext({});function gP(t,e){if(Rc(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Ua(n)?n:void 0,animate:Ua(i)?i:void 0}}return t.inherit!==!1?e:{}}function vP(t){const{initial:e,animate:n}=gP(t,z.useContext(Pc));return z.useMemo(()=>({initial:e,animate:n}),[Ov(e),Ov(n)])}function Ov(t){return Array.isArray(t)?t.join(" "):t}const Vm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function rE(t,e,n){for(const i in e)!kt(e[i])&&!NM(i,n)&&(t[i]=e[i])}function _P({transformTemplate:t},e){return z.useMemo(()=>{const n=Vm();return Bm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function xP(t,e){const n=t.style||{},i={};return rE(i,n,t),Object.assign(i,_P(t,e)),i}function yP(t,e){const n={},i=xP(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const sE=()=>({...Vm(),attrs:{}});function SP(t,e,n,i){const r=z.useMemo(()=>{const s=sE();return FM(s,e,BM(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};rE(s,t.style,t),r.style={...s,...r.style}}return r}const MP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function zm(t){return typeof t!="string"||t.includes("-")?!1:!!(MP.indexOf(t)>-1||/[A-Z]/u.test(t))}function EP(t,e,n,{latestValues:i},r,s=!1,o){const l=(o??zm(t)?SP:yP)(e,i,r,t),u=mP(e,typeof t=="string",s),c=t!==z.Fragment?{...u,...l,ref:n}:{},{children:d}=e,f=z.useMemo(()=>kt(d)?d.get():d,[d]);return z.createElement(t,{...c,children:f})}function TP({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:wP(n,i,r,t),renderState:e()}}function wP(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=uu(s[f]);let{initial:o,animate:a}=t;const l=Rc(t),u=TM(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const d=c?a:o;if(d&&typeof d!="boolean"&&!Cc(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const v=bm(t,f[p]);if(v){const{transitionEnd:y,transition:m,...h}=v;for(const g in h){let _=h[g];if(Array.isArray(_)){const S=c?_.length-1:0;_=_[S]}_!==null&&(r[g]=_)}for(const g in y)r[g]=y[g]}}}return r}const oE=t=>(e,n)=>{const i=z.useContext(Pc),r=z.useContext(Tc),s=()=>TP(t,e,i,r);return n?s():Ec(s)},AP=oE({scrapeMotionValuesFromProps:km,createRenderState:Vm}),CP=oE({scrapeMotionValuesFromProps:kM,createRenderState:sE}),RP=Symbol.for("motionComponentSymbol");function bP(t,e,n){const i=z.useRef(n);z.useInsertionEffect(()=>{i.current=n});const r=z.useRef(null);return z.useCallback(s=>{var a;s&&((a=t.onMount)==null||a.call(t,s));const o=i.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s);e&&(s?e.mount(s):e.unmount())},[e])}const aE=z.createContext({});function ks(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function PP(t,e,n,i,r,s){var _,S;const{visualElement:o}=z.useContext(Pc),a=z.useContext(tE),l=z.useContext(Tc),u=z.useContext(bc),c=u.reducedMotion,d=u.skipAnimations,f=z.useRef(null),p=z.useRef(!1);i=i||a.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:c,skipAnimations:d,isSVG:s}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));const v=f.current,y=z.useContext(aE);v&&!v.projection&&r&&(v.type==="html"||v.type==="svg")&&DP(f.current,n,r,y);const m=z.useRef(!1);z.useInsertionEffect(()=>{v&&m.current&&v.update(n,l)});const h=n[dM],g=z.useRef(!!h&&typeof window<"u"&&!((_=window.MotionHandoffIsComplete)!=null&&_.call(window,h))&&((S=window.MotionHasOptimisedAnimation)==null?void 0:S.call(window,h)));return yS(()=>{p.current=!0,v&&(m.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),v.scheduleRenderMicrotask(),g.current&&v.animationState&&v.animationState.animateChanges())}),z.useEffect(()=>{v&&(!g.current&&v.animationState&&v.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var w;(w=window.MotionHandoffMarkAsComplete)==null||w.call(window,h)}),g.current=!1),v.enteringChildren=void 0)}),v}function DP(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u,layoutAnchor:c,layoutCrossfade:d}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:lE(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&ks(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:d,layoutScroll:l,layoutRoot:u,layoutAnchor:c})}function lE(t){if(t)return t.options.allowProjection!==!1?t.projection:lE(t.parent)}function Sf(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&dP(i);const s=n?n==="svg":zm(t),o=s?CP:AP;function a(u,c){let d;const f={...z.useContext(bc),...u,layoutId:LP(u)},{isStatic:p}=f,v=vP(u),y=o(u,p);if(!p&&typeof window<"u"){IP();const m=NP(f);d=m.MeasureLayout,v.visualElement=PP(t,y,f,r,m.ProjectionNode,s)}return D.jsxs(Pc.Provider,{value:v,children:[d&&v.visualElement?D.jsx(d,{visualElement:v.visualElement,...f}):null,EP(t,u,bP(y,v.visualElement,c),y,p,e,s)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=z.forwardRef(a);return l[RP]=t,l}function LP({layoutId:t}){const e=z.useContext(hm).id;return e&&t!==void 0?e+"-"+t:t}function IP(t,e){z.useContext(tE).strict}function NP(t){const e=nE(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function UP(t,e){if(typeof Proxy>"u")return Sf;const n=new Map,i=(s,o)=>Sf(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,Sf(o,void 0,t,e)),n.get(o))})}const FP=(t,e)=>e.isSVG??zm(t)?new VM(e):new UM(e,{allowProjection:t!==z.Fragment});class OP extends Vr{constructor(e){super(e),e.animationState||(e.animationState=vb(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Cc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let BP=0;class kP extends Vr{constructor(){super(...arguments),this.id=BP++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:o,custom:a}=this.node.getProps();if(typeof o=="string"){const l=us(this.node,o,a);if(l){const{transition:u,transitionEnd:c,...d}=l;for(const f in d)(s=this.node.getValue(f))==null||s.jump(d[f])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const VP={animation:{Feature:OP},exit:{Feature:kP}};function $a(t){return{point:{x:t.pageX,y:t.pageY}}}const zP=t=>e=>Um(e)&&t(e,$a(e));function pa(t,e,n,i){return Fa(t,e,zP(n),i)}const uE=({current:t})=>t?t.ownerDocument.defaultView:null,Bv=(t,e)=>Math.abs(t-e);function HP(t,e){const n=Bv(t.x,e.x),i=Bv(t.y,e.y);return Math.sqrt(n**2+i**2)}const kv=new Set(["auto","scroll"]);class cE{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=p=>{this.handleScroll(p.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=yl(this.lastRawMoveEventInfo,this.transformPagePoint));const p=Mf(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,y=HP(p.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!y)return;const{point:m}=p,{timestamp:h}=$t;this.history.push({...m,timestamp:h});const{onStart:g,onMove:_}=this.handlers;v||(g&&g(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,p)},this.handlePointerMove=(p,v)=>{this.lastMoveEvent=p,this.lastRawMoveEventInfo=v,this.lastMoveEventInfo=yl(v,this.transformPagePoint),lt.update(this.updatePoint,!0)},this.handlePointerUp=(p,v)=>{this.end();const{onEnd:y,onSessionEnd:m,resumeAnimation:h}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&h&&h(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Mf(p.type==="pointercancel"?this.lastMoveEventInfo:yl(v,this.transformPagePoint),this.history);this.startEvent&&y&&y(p,g),m&&m(p,g)},!Um(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const l=$a(e),u=yl(l,this.transformPagePoint),{point:c}=u,{timestamp:d}=$t;this.history=[{...c,timestamp:d}];const{onSessionStart:f}=n;f&&f(e,Mf(u,this.history)),this.removeListeners=Wa(pa(this.contextWindow,"pointermove",this.handlePointerMove),pa(this.contextWindow,"pointerup",this.handlePointerUp),pa(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(kv.has(i.overflowX)||kv.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),lt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Nr(this.updatePoint)}}function yl(t,e){return e?{point:e(t.point)}:t}function Vv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Mf({point:t},e){return{point:t,delta:Vv(t,fE(e)),offset:Vv(t,GP(e)),velocity:WP(e,.1)}}function GP(t){return t[0]}function fE(t){return t[t.length-1]}function WP(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=fE(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>yn(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>yn(e)*2&&(i=t[1]);const s=zn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function jP(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?dt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?dt(n,t,i.max):Math.min(t,n)),t}function zv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function XP(t,{top:e,left:n,bottom:i,right:r}){return{x:zv(t.x,n,r),y:zv(t.y,e,i)}}function Hv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function $P(t,e){return{x:Hv(t.x,e.x),y:Hv(t.y,e.y)}}function YP(t,e){let n=.5;const i=un(t),r=un(e);return r>i?n=xo(e.min,e.max-i,t.min):i>r&&(n=xo(t.min,t.max-r,e.min)),Ci(0,1,n)}function qP(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const wh=.35;function KP(t=wh){return t===!1?t=0:t===!0&&(t=wh),{x:Gv(t,"left","right"),y:Gv(t,"top","bottom")}}function Gv(t,e,n){return{min:Wv(t,e),max:Wv(t,n)}}function Wv(t,e){return typeof t=="number"?t:t[e]||0}const ZP=new WeakMap;class QP{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Lt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=d=>{n&&this.snapToCursor($a(d).point),this.stopAnimation()},o=(d,f)=>{const{drag:p,dragPropagation:v,onDragStart:y}=this.getProps();if(p&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=RR(p),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),mi(h=>{let g=this.getAxisMotionValue(h).get()||0;if(Ei.test(g)){const{projection:_}=this.visualElement;if(_&&_.layout){const S=_.layout.layoutBox[h];S&&(g=un(S)*(parseFloat(g)/100))}}this.originPoint[h]=g}),y&&lt.update(()=>y(d,f),!1,!0),gh(this.visualElement,"transform");const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},a=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f;const{dragPropagation:p,dragDirectionLock:v,onDirectionLock:y,onDrag:m}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:h}=f;if(v&&this.currentDirection===null){this.currentDirection=e3(h),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,h),this.updateAxis("y",f.point,h),this.visualElement.render(),m&&lt.update(()=>m(d,f),!1,!0)},l=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f,this.stop(d,f),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:c}=this.getProps();this.panSession=new cE(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,distanceThreshold:i,contextWindow:uE(this.visualElement),element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&lt.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Sl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=jP(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&ks(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=XP(i.layoutBox,e):this.constraints=!1,this.elastic=KP(n),r!==this.constraints&&!ks(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&mi(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=qP(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!ks(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=eb(i,r.root,this.visualElement.getTransformPagePoint());let o=$P(r.layout.layoutBox,s);if(n){const a=n(ZR(o));this.hasMutatedConstraints=!!a,a&&(o=bM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=mi(c=>{if(!Sl(c,n,this.currentDirection))return;let d=l&&l[c]||{};(o===!0||o===c)&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,v={type:"inertia",velocity:i?e[c]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return gh(this.visualElement,e),i.start(Rm(e,i,0,n,this.visualElement,!1))}stopAnimation(){mi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){mi(n=>{const{drag:i}=this.getProps();if(!Sl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n],l=s.get()||0;s.set(e[n]-dt(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!ks(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};mi(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=YP({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),mi(o=>{if(!Sl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(dt(l,u,r[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;ZP.set(this.visualElement,this);const e=this.visualElement.current,n=pa(e,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps(),f=u.target,p=f!==e&&NR(f);c&&d&&!p&&this.start(u)});let i;const r=()=>{const{dragConstraints:u}=this.getProps();ks(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),i||(i=JP(e,u.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),lt.read(r);const a=Fa(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(mi(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=u[d].translate,f.set(f.get()+u[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=wh,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function jv(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function JP(t,e,n){const i=Q0(t,jv(n)),r=Q0(e,jv(n));return()=>{i(),r()}}function Sl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function e3(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class t3 extends Vr{constructor(e){super(e),this.removeGroupControls=Gn,this.removeListeners=Gn,this.controls=new QP(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Gn}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Ef=t=>(e,n)=>{t&&lt.update(()=>t(e,n),!1,!0)};class n3 extends Vr{constructor(){super(...arguments),this.removePointerDownListener=Gn}onPointerDown(e){this.session=new cE(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:uE(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Ef(e),onStart:Ef(n),onMove:Ef(i),onEnd:(s,o)=>{delete this.session,r&&lt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=pa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Tf=!1;class i3 extends z.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),Tf&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),cu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),Tf=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||lt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=n,i.root.didUpdate(),Nm.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;Tf=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function dE(t){const[e,n]=eE(),i=z.useContext(hm);return D.jsx(i3,{...t,layoutGroup:i,switchLayoutGroup:z.useContext(aE),isPresent:e,safeToRemove:n})}const r3={pan:{Feature:n3},drag:{Feature:t3,ProjectionNode:JM,MeasureLayout:dE}};function Xv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&lt.postRender(()=>s(e,$a(e)))}class s3 extends Vr{mount(){const{current:e}=this.node;e&&(this.unmount=PR(e,(n,i)=>(Xv(this.node,i,"Start"),r=>Xv(this.node,r,"End"))))}unmount(){}}class o3 extends Vr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Wa(Fa(this.node.current,"focus",()=>this.onFocus()),Fa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function $v(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&lt.postRender(()=>s(e,$a(e)))}class a3 extends Vr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=FR(e,(r,s)=>($v(this.node,s,"Start"),(o,{success:a})=>$v(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const Ah=new WeakMap,wf=new WeakMap,l3=t=>{const e=Ah.get(t.target);e&&e(t)},u3=t=>{t.forEach(l3)};function c3({root:t,...e}){const n=t||document;wf.has(n)||wf.set(n,{});const i=wf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(u3,{root:t,...e})),i[r]}function f3(t,e,n){const i=c3(e);return Ah.set(t,n),i.observe(t),()=>{Ah.delete(t),i.unobserve(t)}}const d3={some:0,all:1};class h3 extends Vr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:d3[r]},a=u=>{const{isIntersecting:c}=u;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=c?d:f;p&&p(u)};this.stopObserver=f3(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(p3(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function p3({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const m3={inView:{Feature:h3},tap:{Feature:a3},focus:{Feature:o3},hover:{Feature:s3}},g3={layout:{ProjectionNode:JM,MeasureLayout:dE}},v3={...VP,...m3,...r3,...g3},Ts=UP(v3,FP);function Yv(t){const e=Ec(()=>Ur(t)),{isStatic:n}=z.useContext(bc);if(n){const[,i]=z.useState(t);z.useEffect(()=>e.on("change",i),[])}return e}function Hm(t){return typeof t=="object"&&!Array.isArray(t)}function hE(t,e,n,i){return t==null?[]:typeof t=="string"&&Hm(e)?Im(t,n,i):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(r=>r!=null):[t]}function _3(t,e,n){return t*(e+1)}function qv(t,e,n,i){return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?n:e.startsWith("<")?Math.max(0,n+parseFloat(e.slice(1))):i.get(e)??t}function x3(t,e,n){for(let i=0;i<t.length;i++){const r=t[i];r.at>e&&r.at<n&&(_o(t,r),i--)}}function y3(t,e,n,i,r,s){x3(t,r,s);for(let o=0;o<e.length;o++)t.push({value:e[o],at:dt(r,s,i[o]),easing:FS(n,o)})}function S3(t,e){for(let n=0;n<t.length;n++)t[n]=t[n]/(e+1)}function M3(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}const E3="easeInOut";function T3(t,{defaultTransition:e={},...n}={},i,r){const s=e.duration||.3,o=new Map,a=new Map,l={},u=new Map;let c=0,d=0,f=0;for(let p=0;p<t.length;p++){const v=t[p];if(typeof v=="string"){u.set(v,d);continue}else if(!Array.isArray(v)){u.set(v.name,qv(d,v.at,c,u));continue}let[y,m,h={}]=v;h.at!==void 0&&(d=qv(d,h.at,c,u));let g=0;const _=(S,w,T,R=0,x=0)=>{const A=w3(S),{delay:b=0,times:P=ZS(A),type:I=e.type||"keyframes",repeat:W,repeatType:Y,repeatDelay:N=0,...B}=w;let{ease:k=e.ease||"easeOut",duration:U}=w;const j=typeof b=="function"?b(R,x):b,q=A.length,re=Am(I)?I:r==null?void 0:r[I||"keyframes"];if(q<=2&&re){let Pe=100;if(q===2&&R3(A)){const J=A[1]-A[0];Pe=Math.abs(J)}const Z={...e,...B};U!==void 0&&(Z.duration=yn(U));const oe=YS(Z,Pe,re);k=oe.ease,U=oe.duration}U??(U=s);const ce=d+j;P.length===1&&P[0]===0&&(P[1]=1);const Ie=P.length-A.length;if(Ie>0&&KS(P,Ie),A.length===1&&A.unshift(null),W){U=_3(U,W);const Pe=[...A],Z=[...P];k=Array.isArray(k)?[...k]:[k];const oe=[...k];for(let J=0;J<W;J++){A.push(...Pe);for(let Ae=0;Ae<Pe.length;Ae++)P.push(Z[Ae]+(J+1)),k.push(Ae===0?"linear":FS(oe,Ae-1))}S3(P,W)}const Oe=ce+U;y3(T,A,k,P,ce,Oe),g=Math.max(j+U,g),f=Math.max(Oe,f)};if(kt(y)){const S=Kv(y,a);_(m,h,Zv("default",S))}else{const S=hE(y,m,i,l),w=S.length;for(let T=0;T<w;T++){m=m,h=h;const R=S[T],x=Kv(R,a);for(const A in m)_(m[A],A3(h,A),Zv(A,x),T,w)}}c=d,d+=g}return a.forEach((p,v)=>{for(const y in p){const m=p[y];m.sort(M3);const h=[],g=[],_=[];for(let R=0;R<m.length;R++){const{at:x,value:A,easing:b}=m[R];h.push(A),g.push(xo(0,f,x)),_.push(b||"easeOut")}g[0]!==0&&(g.unshift(0),h.unshift(h[0]),_.unshift(E3)),g[g.length-1]!==1&&(g.push(1),h.push(null)),o.has(v)||o.set(v,{keyframes:{},transition:{}});const S=o.get(v);S.keyframes[y]=h;const{type:w,...T}=e;S.transition[y]={...T,duration:f,ease:_,times:g,...n}}}),o}function Kv(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function Zv(t,e){return e[t]||(e[t]=[]),e[t]}function w3(t){return Array.isArray(t)?t:[t]}function A3(t,e){return t&&t[e]?{...t,...t[e]}:{...t}}const C3=t=>typeof t=="number",R3=t=>t.every(C3);function b3(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=Ac(t)&&!EM(t)?new VM(e):new UM(e);n.mount(t),Na.set(t,n)}function P3(t){const e={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},n=new ab(e);n.mount(t),Na.set(t,n)}function D3(t,e){return kt(t)||typeof t=="number"||typeof t=="string"&&!Hm(e)}function pE(t,e,n,i){const r=[];if(D3(t,e))r.push(qM(t,Hm(e)&&e.default||e,n&&(n.default||n)));else{if(t==null)return r;const s=hE(t,e,i),o=s.length;for(let a=0;a<o;a++){const l=s[a],u=l instanceof Element?b3:P3;Na.has(l)||u(l);const c=Na.get(l),d={...n};"delay"in d&&typeof d.delay=="function"&&(d.delay=d.delay(a,o)),r.push(...Dm(c,{...e,transition:d},{}))}}return r}function L3(t,e,n){const i=[],r=t.map(o=>{if(Array.isArray(o)&&typeof o[0]=="function"){const a=o[0],l=Ur(0);return l.on("change",a),o.length===1?[l,[0,1]]:o.length===2?[l,[0,1],o[1]]:[l,o[1],o[2]]}return o});return T3(r,e,n,{spring:Ia}).forEach(({keyframes:o,transition:a},l)=>{i.push(...pE(l,o,a))}),i}function I3(t){return Array.isArray(t)&&t.some(Array.isArray)}function N3(t={}){const{scope:e,reduceMotion:n}=t;function i(r,s,o){let a=[],l;if(I3(r)){const{onComplete:c,...d}=s||{};typeof c=="function"&&(l=c),a=L3(r,n!==void 0?{reduceMotion:n,...d}:d,e)}else{const{onComplete:c,...d}=o||{};typeof c=="function"&&(l=c),a=pE(r,s,n!==void 0?{reduceMotion:n,...d}:d,e)}const u=new ZC(a);return l&&u.finished.then(l),e&&(e.animations.push(u),u.finished.then(()=>{_o(e.animations,u)})),u}return i}const Af=N3();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gm="184",U3=0,Qv=1,F3=2,fu=1,O3=2,ea=3,Fr=0,Sn=1,Bi=2,Gi=0,lo=1,Jv=2,e_=3,t_=4,B3=5,Zr=100,k3=101,V3=102,z3=103,H3=104,G3=200,W3=201,j3=202,X3=203,Ch=204,Rh=205,$3=206,Y3=207,q3=208,K3=209,Z3=210,Q3=211,J3=212,eD=213,tD=214,bh=0,Ph=1,Dh=2,So=3,Lh=4,Ih=5,Nh=6,Uh=7,mE=0,nD=1,iD=2,Ti=0,gE=1,vE=2,_E=3,xE=4,yE=5,SE=6,ME=7,EE=300,ms=301,Mo=302,Cf=303,Rf=304,Dc=306,Fh=1e3,zi=1001,Oh=1002,Yt=1003,rD=1004,Ml=1005,rn=1006,bf=1007,rs=1008,kn=1009,TE=1010,wE=1011,Oa=1012,Wm=1013,Ri=1014,xi=1015,Ki=1016,jm=1017,Xm=1018,Ba=1020,AE=35902,CE=35899,RE=1021,bE=1022,ii=1023,Zi=1026,ss=1027,PE=1028,$m=1029,gs=1030,Ym=1031,qm=1033,du=33776,hu=33777,pu=33778,mu=33779,Bh=35840,kh=35841,Vh=35842,zh=35843,Hh=36196,Gh=37492,Wh=37496,jh=37488,Xh=37489,Ku=37490,$h=37491,Yh=37808,qh=37809,Kh=37810,Zh=37811,Qh=37812,Jh=37813,ep=37814,tp=37815,np=37816,ip=37817,rp=37818,sp=37819,op=37820,ap=37821,lp=36492,up=36494,cp=36495,fp=36283,dp=36284,Zu=36285,hp=36286,sD=3200,n_=0,oD=1,vr="",Fn="srgb",Qu="srgb-linear",Ju="linear",tt="srgb",ws=7680,i_=519,aD=512,lD=513,uD=514,Km=515,cD=516,fD=517,Zm=518,dD=519,r_=35044,s_="300 es",yi=2e3,ec=2001;function hD(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function tc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function pD(){const t=tc("canvas");return t.style.display="block",t}const o_={};function a_(...t){const e="THREE."+t.shift();console.log(e,...t)}function DE(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Le(...t){t=DE(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ke(...t){t=DE(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function pp(...t){const e=t.join(" ");e in o_||(o_[e]=!0,Le(...t))}function mD(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const gD={[bh]:Ph,[Dh]:Nh,[Lh]:Uh,[So]:Ih,[Ph]:bh,[Nh]:Dh,[Uh]:Lh,[Ih]:So};class ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pf=Math.PI/180,mp=180/Math.PI;function Ya(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function Ye(t,e,n){return Math.max(e,Math.min(n,t))}function vD(t,e){return(t%e+e)%e}function Df(t,e,n){return(1-n)*t+n*e}function Ho(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const tg=class tg{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tg.prototype.isVector2=!0;let et=tg;class Do{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(d!==y||l!==f||u!==p||c!==v){let m=l*f+u*p+c*v+d*y;m<0&&(f=-f,p=-p,v=-v,y=-y,m=-m);let h=1-a;if(m<.9995){const g=Math.acos(m),_=Math.sin(g);h=Math.sin(h*g)/_,a=Math.sin(a*g)/_,l=l*h+f*a,u=u*h+p*a,c=c*h+v*a,d=d*h+y*a}else{l=l*h+f*a,u=u*h+p*a,c=c*h+v*a,d=d*h+y*a;const g=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=g,u*=g,c*=g,d*=g}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+c*d+l*p-u*f,e[n+1]=l*v+c*f+u*d-a*p,e[n+2]=u*v+c*p+a*f-l*d,e[n+3]=c*v-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*v,this._y=u*p*d-f*c*v,this._z=u*c*v+f*p*d,this._w=u*c*d-f*p*v;break;case"YXZ":this._x=f*c*d+u*p*v,this._y=u*p*d-f*c*v,this._z=u*c*v-f*p*d,this._w=u*c*d+f*p*v;break;case"ZXY":this._x=f*c*d-u*p*v,this._y=u*p*d+f*c*v,this._z=u*c*v+f*p*d,this._w=u*c*d-f*p*v;break;case"ZYX":this._x=f*c*d-u*p*v,this._y=u*p*d+f*c*v,this._z=u*c*v-f*p*d,this._w=u*c*d+f*p*v;break;case"YZX":this._x=f*c*d+u*p*v,this._y=u*p*d+f*c*v,this._z=u*c*v-f*p*d,this._w=u*c*d-f*p*v;break;case"XZY":this._x=f*c*d-u*p*v,this._y=u*p*d-f*c*v,this._z=u*c*v+f*p*d,this._w=u*c*d+f*p*v;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ng=class ng{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(l_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(l_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lf.copy(this).projectOnVector(e),this.sub(Lf)}reflect(e){return this.sub(Lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ng.prototype.isVector3=!0;let X=ng;const Lf=new X,l_=new Do,ig=class ig{constructor(e,n,i,r,s,o,a,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],v=i[8],y=r[0],m=r[3],h=r[6],g=r[1],_=r[4],S=r[7],w=r[2],T=r[5],R=r[8];return s[0]=o*y+a*g+l*w,s[3]=o*m+a*_+l*T,s[6]=o*h+a*S+l*R,s[1]=u*y+c*g+d*w,s[4]=u*m+c*_+d*T,s[7]=u*h+c*S+d*R,s[2]=f*y+p*g+v*w,s[5]=f*m+p*_+v*T,s[8]=f*h+p*S+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,v=n*d+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(c*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(If.makeScale(e,n)),this}rotate(e){return this.premultiply(If.makeRotation(-e)),this}translate(e,n){return this.premultiply(If.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ig.prototype.isMatrix3=!0;let Fe=ig;const If=new Fe,u_=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),c_=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _D(){const t={enabled:!0,workingColorSpace:Qu,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===tt&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(r.r=uo(r.r),r.g=uo(r.g),r.b=uo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vr?Ju:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return pp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return pp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Qu]:{primaries:e,whitePoint:i,transfer:Ju,toXYZ:u_,fromXYZ:c_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:u_,fromXYZ:c_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),t}const $e=_D();function Wi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function uo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let As;class xD{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{As===void 0&&(As=tc("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=As}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=tc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Wi(n[i]/255)*255):n[i]=Wi(n[i]);return{data:n,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yD=0;class Qm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yD++}),this.uuid=Ya(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Nf(r[o].image)):s.push(Nf(r[o]))}else s=Nf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Nf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?xD.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let SD=0;const Uf=new X;class fn extends ys{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=zi,r=zi,s=rn,o=rs,a=ii,l=kn,u=fn.DEFAULT_ANISOTROPY,c=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SD++}),this.uuid=Ya(),this.name="",this.source=new Qm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uf).x}get height(){return this.source.getSize(Uf).y}get depth(){return this.source.getSize(Uf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Le(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Le(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==EE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fh:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Oh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fh:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Oh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=EE;fn.DEFAULT_ANISOTROPY=1;const rg=class rg{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],v=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+y)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,S=(p+1)/2,w=(h+1)/2,T=(c+f)/4,R=(d+y)/4,x=(v+m)/4;return _>S&&_>w?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=R/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=x/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=R/s,r=x/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-y)*(d-y)+(f-c)*(f-c));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-y)/g,this.z=(f-c)/g,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this.w=Ye(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this.w=Ye(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rg.prototype.isVector4=!0;let Pt=rg;class MD extends ys{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new fn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Qm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends MD{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class LE extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ED extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ic=class ic{constructor(e,n,i,r,s,o,a,l,u,c,d,f,p,v,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,d,f,p,v,y,m)}set(e,n,i,r,s,o,a,l,u,c,d,f,p,v,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ic().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Cs.setFromMatrixColumn(e,0).length(),s=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,v=a*c,y=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+v*u,n[5]=f-y*u,n[9]=-a*l,n[2]=y-f*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,v=u*c,y=u*d;n[0]=f+y*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=p*a-v,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,v=u*c,y=u*d;n[0]=f-y*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*c,n[9]=y-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,v=a*c,y=a*d;n[0]=l*c,n[4]=v*u-p,n[8]=f*u+y,n[1]=l*d,n[5]=y*u+f,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,v=a*l,y=a*u;n[0]=l*c,n[4]=y-f*d,n[8]=v*d+p,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*d+v,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*u,v=a*l,y=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+y,n[5]=o*c,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*c,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TD,e,wD)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),rr.crossVectors(i,wn),rr.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),rr.crossVectors(i,wn)),rr.normalize(),El.crossVectors(wn,rr),r[0]=rr.x,r[4]=El.x,r[8]=wn.x,r[1]=rr.y,r[5]=El.y,r[9]=wn.y,r[2]=rr.z,r[6]=El.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],v=i[2],y=i[6],m=i[10],h=i[14],g=i[3],_=i[7],S=i[11],w=i[15],T=r[0],R=r[4],x=r[8],A=r[12],b=r[1],P=r[5],I=r[9],W=r[13],Y=r[2],N=r[6],B=r[10],k=r[14],U=r[3],j=r[7],q=r[11],re=r[15];return s[0]=o*T+a*b+l*Y+u*U,s[4]=o*R+a*P+l*N+u*j,s[8]=o*x+a*I+l*B+u*q,s[12]=o*A+a*W+l*k+u*re,s[1]=c*T+d*b+f*Y+p*U,s[5]=c*R+d*P+f*N+p*j,s[9]=c*x+d*I+f*B+p*q,s[13]=c*A+d*W+f*k+p*re,s[2]=v*T+y*b+m*Y+h*U,s[6]=v*R+y*P+m*N+h*j,s[10]=v*x+y*I+m*B+h*q,s[14]=v*A+y*W+m*k+h*re,s[3]=g*T+_*b+S*Y+w*U,s[7]=g*R+_*P+S*N+w*j,s[11]=g*x+_*I+S*B+w*q,s[15]=g*A+_*W+S*k+w*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],v=e[3],y=e[7],m=e[11],h=e[15],g=l*p-u*f,_=a*p-u*d,S=a*f-l*d,w=o*p-u*c,T=o*f-l*c,R=o*d-a*c;return n*(y*g-m*_+h*S)-i*(v*g-m*w+h*T)+r*(v*_-y*w+h*R)-s*(v*S-y*T+m*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],v=e[12],y=e[13],m=e[14],h=e[15],g=n*a-i*o,_=n*l-r*o,S=n*u-s*o,w=i*l-r*a,T=i*u-s*a,R=r*u-s*l,x=c*y-d*v,A=c*m-f*v,b=c*h-p*v,P=d*m-f*y,I=d*h-p*y,W=f*h-p*m,Y=g*W-_*I+S*P+w*b-T*A+R*x;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/Y;return e[0]=(a*W-l*I+u*P)*N,e[1]=(r*I-i*W-s*P)*N,e[2]=(y*R-m*T+h*w)*N,e[3]=(f*T-d*R-p*w)*N,e[4]=(l*b-o*W-u*A)*N,e[5]=(n*W-r*b+s*A)*N,e[6]=(m*S-v*R-h*_)*N,e[7]=(c*R-f*S+p*_)*N,e[8]=(o*I-a*b+u*x)*N,e[9]=(i*b-n*I-s*x)*N,e[10]=(v*T-y*S+h*g)*N,e[11]=(d*S-c*T-p*g)*N,e[12]=(a*A-o*P-l*x)*N,e[13]=(n*P-i*A+r*x)*N,e[14]=(y*_-v*w-m*g)*N,e[15]=(c*w-d*_+f*g)*N,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,v=s*d,y=o*c,m=o*d,h=a*d,g=l*u,_=l*c,S=l*d,w=i.x,T=i.y,R=i.z;return r[0]=(1-(y+h))*w,r[1]=(p+S)*w,r[2]=(v-_)*w,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(f+h))*T,r[6]=(m+g)*T,r[7]=0,r[8]=(v+_)*R,r[9]=(m-g)*R,r[10]=(1-(f+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Cs.set(r[0],r[1],r[2]).length();const a=Cs.set(r[4],r[5],r[6]).length(),l=Cs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Yn.copy(this);const u=1/o,c=1/a,d=1/l;return Yn.elements[0]*=u,Yn.elements[1]*=u,Yn.elements[2]*=u,Yn.elements[4]*=c,Yn.elements[5]*=c,Yn.elements[6]*=c,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,n.setFromRotationMatrix(Yn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=yi,l=!1){const u=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let v,y;if(l)v=s/(o-s),y=o*s/(o-s);else if(a===yi)v=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===ec)v=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=yi,l=!1){const u=this.elements,c=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,y;if(l)v=1/(o-s),y=o/(o-s);else if(a===yi)v=-2/(o-s),y=-(o+s)/(o-s);else if(a===ec)v=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=v,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};ic.prototype.isMatrix4=!0;let Vt=ic;const Cs=new X,Yn=new Vt,TD=new X(0,0,0),wD=new X(1,1,1),rr=new X,El=new X,wn=new X,f_=new Vt,d_=new Do;class vs{constructor(e=0,n=0,i=0,r=vs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return f_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(f_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return d_.setFromEuler(this),this.setFromQuaternion(d_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vs.DEFAULT_ORDER="XYZ";class IE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AD=0;const h_=new X,Rs=new Do,Di=new Vt,Tl=new X,Go=new X,CD=new X,RD=new Do,p_=new X(1,0,0),m_=new X(0,1,0),g_=new X(0,0,1),v_={type:"added"},bD={type:"removed"},bs={type:"childadded",child:null},Ff={type:"childremoved",child:null};class Pn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AD++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new X,n=new vs,i=new Do,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Fe}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new IE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(p_,e)}rotateY(e){return this.rotateOnAxis(m_,e)}rotateZ(e){return this.rotateOnAxis(g_,e)}translateOnAxis(e,n){return h_.copy(e).applyQuaternion(this.quaternion),this.position.add(h_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(p_,e)}translateY(e){return this.translateOnAxis(m_,e)}translateZ(e){return this.translateOnAxis(g_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Tl.copy(e):Tl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Go,Tl,this.up):Di.lookAt(Tl,Go,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),Rs.setFromRotationMatrix(Di),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(v_),bs.child=e,this.dispatchEvent(bs),bs.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bD),Ff.child=e,this.dispatchEvent(Ff),Ff.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(v_),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,CD),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,RD,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pn.DEFAULT_UP=new X(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wl extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PD={type:"move"};class Of{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(u,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,v=.005;u.inputState.pinching&&f>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new wl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const NE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Al={h:0,s:0,l:0};function Bf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=vD(e,1),n=Ye(n,0,1),i=Ye(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Bf(o,s,e+1/3),this.g=Bf(o,s,e),this.b=Bf(o,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,n=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const i=NE[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return $e.workingToColorSpace(tn.copy(this),e),Math.round(Ye(tn.r*255,0,255))*65536+Math.round(Ye(tn.g*255,0,255))*256+Math.round(Ye(tn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.workingToColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,s=tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=$e.workingColorSpace){return $e.workingToColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Fn){$e.workingToColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+n,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(sr),e.getHSL(Al);const i=Df(sr.h,Al.h,n),r=Df(sr.s,Al.s,n),s=Df(sr.l,Al.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Je;Je.NAMES=NE;class DD extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vs,this.environmentIntensity=1,this.environmentRotation=new vs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const qn=new X,Li=new X,kf=new X,Ii=new X,Ps=new X,Ds=new X,__=new X,Vf=new X,zf=new X,Hf=new X,Gf=new Pt,Wf=new Pt,jf=new Pt;class ni{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){qn.subVectors(r,n),Li.subVectors(i,n),kf.subVectors(e,n);const o=qn.dot(qn),a=qn.dot(Li),l=qn.dot(kf),u=Li.dot(Li),c=Li.dot(kf),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,v=(o*c-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Gf.setScalar(0),Wf.setScalar(0),jf.setScalar(0),Gf.fromBufferAttribute(e,n),Wf.fromBufferAttribute(e,i),jf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Gf,s.x),o.addScaledVector(Wf,s.y),o.addScaledVector(jf,s.z),o}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),Li.subVectors(e,n),qn.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),qn.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ps.subVectors(r,i),Ds.subVectors(s,i),Vf.subVectors(e,i);const l=Ps.dot(Vf),u=Ds.dot(Vf);if(l<=0&&u<=0)return n.copy(i);zf.subVectors(e,r);const c=Ps.dot(zf),d=Ds.dot(zf);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Ps,o);Hf.subVectors(e,s);const p=Ps.dot(Hf),v=Ds.dot(Hf);if(v>=0&&p<=v)return n.copy(s);const y=p*u-l*v;if(y<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Ds,a);const m=c*v-p*d;if(m<=0&&d-c>=0&&p-v>=0)return __.subVectors(s,r),a=(d-c)/(d-c+(p-v)),n.copy(r).addScaledVector(__,a);const h=1/(m+y+f);return o=y*h,a=f*h,n.copy(i).addScaledVector(Ps,o).addScaledVector(Ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qa{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cl.copy(i.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),Rl.subVectors(this.max,Wo),Ls.subVectors(e.a,Wo),Is.subVectors(e.b,Wo),Ns.subVectors(e.c,Wo),or.subVectors(Is,Ls),ar.subVectors(Ns,Is),Gr.subVectors(Ls,Ns);let n=[0,-or.z,or.y,0,-ar.z,ar.y,0,-Gr.z,Gr.y,or.z,0,-or.x,ar.z,0,-ar.x,Gr.z,0,-Gr.x,-or.y,or.x,0,-ar.y,ar.x,0,-Gr.y,Gr.x,0];return!Xf(n,Ls,Is,Ns,Rl)||(n=[1,0,0,0,1,0,0,0,1],!Xf(n,Ls,Is,Ns,Rl))?!1:(bl.crossVectors(or,ar),n=[bl.x,bl.y,bl.z],Xf(n,Ls,Is,Ns,Rl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new X,new X,new X,new X,new X,new X,new X,new X],Kn=new X,Cl=new qa,Ls=new X,Is=new X,Ns=new X,or=new X,ar=new X,Gr=new X,Wo=new X,Rl=new X,bl=new X,Wr=new X;function Xf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Wr.fromArray(t,s);const a=r.x*Math.abs(Wr.x)+r.y*Math.abs(Wr.y)+r.z*Math.abs(Wr.z),l=e.dot(Wr),u=n.dot(Wr),c=i.dot(Wr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Dt=new X,Pl=new et;let LD=0;class Ai extends ys{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LD++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=r_,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Pl.fromBufferAttribute(this,n),Pl.applyMatrix3(e),this.setXY(n,Pl.x,Pl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ho(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ho(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ho(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ho(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ho(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==r_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class UE extends Ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class FE extends Ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ji extends Ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}const ID=new qa,jo=new X,$f=new X;class Jm{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ID.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const n=jo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(jo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add($f)),this.expandByPoint(jo.copy(e.center).sub($f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ND=0;const Un=new Vt,Yf=new Pn,Us=new X,An=new qa,Xo=new qa,Gt=new X;class Ji extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ND++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hD(e)?FE:UE)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Yf.lookAt(e),Yf.updateMatrix(),this.applyMatrix4(Yf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ji(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(An.min,Xo.min),An.expandByPoint(Gt),Gt.addVectors(An.max,Xo.max),An.expandByPoint(Gt)):(An.expandByPoint(Xo.min),An.expandByPoint(Xo.max))}An.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Gt.fromBufferAttribute(a,u),l&&(Us.fromBufferAttribute(e,u),Gt.add(Us)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new X,l[x]=new X;const u=new X,c=new X,d=new X,f=new et,p=new et,v=new et,y=new X,m=new X;function h(x,A,b){u.fromBufferAttribute(i,x),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,b),f.fromBufferAttribute(s,x),p.fromBufferAttribute(s,A),v.fromBufferAttribute(s,b),c.sub(u),d.sub(u),p.sub(f),v.sub(f);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(y.copy(c).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(P),a[x].add(y),a[A].add(y),a[b].add(y),l[x].add(m),l[A].add(m),l[b].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let x=0,A=g.length;x<A;++x){const b=g[x],P=b.start,I=b.count;for(let W=P,Y=P+I;W<Y;W+=3)h(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const _=new X,S=new X,w=new X,T=new X;function R(x){w.fromBufferAttribute(r,x),T.copy(w);const A=a[x];_.copy(A),_.sub(w.multiplyScalar(w.dot(A))).normalize(),S.crossVectors(T,A);const P=S.dot(l[x])<0?-1:1;o.setXYZW(x,_.x,_.y,_.z,P)}for(let x=0,A=g.length;x<A;++x){const b=g[x],P=b.start,I=b.count;for(let W=P,Y=P+I;W<Y;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,u=new X,c=new X,d=new X;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let h=0;h<c;h++)f[v++]=u[p++]}return new Ai(f,c,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ji,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let UD=0;class Lc extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UD++}),this.uuid=Ya(),this.name="",this.type="Material",this.blending=lo,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Rh,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Le(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Le(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(i.blending=this.blending),this.side!==Fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ch&&(i.blendSrc=this.blendSrc),this.blendDst!==Rh&&(i.blendDst=this.blendDst),this.blendEquation!==Zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ui=new X,qf=new X,Dl=new X,lr=new X,Kf=new X,Ll=new X,Zf=new X;class FD{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qf.copy(e).add(n).multiplyScalar(.5),Dl.copy(n).sub(e).normalize(),lr.copy(this.origin).sub(qf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Dl),a=lr.dot(this.direction),l=-lr.dot(Dl),u=lr.lengthSq(),c=Math.abs(1-o*o);let d,f,p,v;if(c>0)if(d=o*l-a,f=o*a-l,v=s*c,d>=0)if(f>=-v)if(f<=v){const y=1/c;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(qf).addScaledVector(Dl,f),p}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const i=Ui.dot(this.direction),r=Ui.dot(Ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,i,r,s){Kf.subVectors(n,e),Ll.subVectors(i,e),Zf.crossVectors(Kf,Ll);let o=this.direction.dot(Zf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;lr.subVectors(this.origin,e);const l=a*this.direction.dot(Ll.crossVectors(lr,Ll));if(l<0)return null;const u=a*this.direction.dot(Kf.cross(lr));if(u<0||l+u>o)return null;const c=-a*lr.dot(Zf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class OE extends Lc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vs,this.combine=mE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const x_=new Vt,jr=new FD,Il=new Jm,y_=new X,Nl=new X,Ul=new X,Fl=new X,Qf=new X,Ol=new X,S_=new X,Bl=new X;class bi extends Pn{constructor(e=new Ji,n=new OE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ol.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Qf.fromBufferAttribute(d,e),o?Ol.addScaledVector(Qf,c):Ol.addScaledVector(Qf.sub(n),c))}n.add(Ol)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(s),jr.copy(e.ray).recast(e.near),!(Il.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Il,y_)===null||jr.origin.distanceToSquared(y_)>(e.far-e.near)**2))&&(x_.copy(s).invert(),jr.copy(e.ray).applyMatrix4(x_),!(i.boundingBox!==null&&jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],h=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,w=_;S<w;S+=3){const T=a.getX(S),R=a.getX(S+1),x=a.getX(S+2);r=kl(this,h,e,i,u,c,d,T,R,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,h=y;m<h;m+=3){const g=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=kl(this,o,e,i,u,c,d,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],h=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,w=_;S<w;S+=3){const T=S,R=S+1,x=S+2;r=kl(this,h,e,i,u,c,d,T,R,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,h=y;m<h;m+=3){const g=m,_=m+1,S=m+2;r=kl(this,o,e,i,u,c,d,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function OD(t,e,n,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Fr,a),l===null)return null;Bl.copy(a),Bl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Bl);return u<n.near||u>n.far?null:{distance:u,point:Bl.clone(),object:t}}function kl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Nl),t.getVertexPosition(l,Ul),t.getVertexPosition(u,Fl);const c=OD(t,e,n,i,Nl,Ul,Fl,S_);if(c){const d=new X;ni.getBarycoord(S_,Nl,Ul,Fl,d),r&&(c.uv=ni.getInterpolatedAttribute(r,a,l,u,d,new et)),s&&(c.uv1=ni.getInterpolatedAttribute(s,a,l,u,d,new et)),o&&(c.normal=ni.getInterpolatedAttribute(o,a,l,u,d,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new X,materialIndex:0};ni.getNormal(Nl,Ul,Fl,f.normal),c.face=f,c.barycoord=d}return c}class BD extends fn{constructor(e=null,n=1,i=1,r,s,o,a,l,u=Yt,c=Yt,d,f){super(null,o,a,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jf=new X,kD=new X,VD=new Fe;class Kr{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Jf.subVectors(i,n).cross(kD.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Jf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||VD.getNormalMatrix(e),r=this.coplanarPoint(Jf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new Jm,zD=new et(.5,.5),Vl=new X;class BE{constructor(e=new Kr,n=new Kr,i=new Kr,r=new Kr,s=new Kr,o=new Kr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],d=s[5],f=s[6],p=s[7],v=s[8],y=s[9],m=s[10],h=s[11],g=s[12],_=s[13],S=s[14],w=s[15];if(r[0].setComponents(u-o,p-c,h-v,w-g).normalize(),r[1].setComponents(u+o,p+c,h+v,w+g).normalize(),r[2].setComponents(u+a,p+d,h+y,w+_).normalize(),r[3].setComponents(u-a,p-d,h-y,w-_).normalize(),i)r[4].setComponents(l,f,m,S).normalize(),r[5].setComponents(u-l,p-f,h-m,w-S).normalize();else if(r[4].setComponents(u-l,p-f,h-m,w-S).normalize(),n===yi)r[5].setComponents(u+l,p+f,h+m,w+S).normalize();else if(n===ec)r[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){Xr.center.set(0,0,0);const n=zD.distanceTo(e.center);return Xr.radius=.7071067811865476+n,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Vl.x=r.normal.x>0?e.max.x:e.min.x,Vl.y=r.normal.y>0?e.max.y:e.min.y,Vl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kE extends fn{constructor(e=[],n=ms,i,r,s,o,a,l,u,c){super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Eo extends fn{constructor(e,n,i=Ri,r,s,o,a=Yt,l=Yt,u,c=Zi,d=1){if(c!==Zi&&c!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class HD extends Eo{constructor(e,n=Ri,i=ms,r,s,o=Yt,a=Yt,l,u=Zi){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,n,i,r,s,o,a,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class VE extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ka extends Ji{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ji(u,3)),this.setAttribute("normal",new ji(c,3)),this.setAttribute("uv",new ji(d,2));function v(y,m,h,g,_,S,w,T,R,x,A){const b=S/R,P=w/x,I=S/2,W=w/2,Y=T/2,N=R+1,B=x+1;let k=0,U=0;const j=new X;for(let q=0;q<B;q++){const re=q*P-W;for(let ce=0;ce<N;ce++){const Ie=ce*b-I;j[y]=Ie*g,j[m]=re*_,j[h]=Y,u.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[h]=T>0?1:-1,c.push(j.x,j.y,j.z),d.push(ce/R),d.push(1-q/x),k+=1}}for(let q=0;q<x;q++)for(let re=0;re<R;re++){const ce=f+re+N*q,Ie=f+re+N*(q+1),Oe=f+(re+1)+N*(q+1),Pe=f+(re+1)+N*q;l.push(ce,Ie,Pe),l.push(Ie,Oe,Pe),U+=6}a.addGroup(p,U,A),p+=U,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Za extends Ji{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,p=[],v=[],y=[],m=[];for(let h=0;h<c;h++){const g=h*f-o;for(let _=0;_<u;_++){const S=_*d-s;v.push(S,-g,0),y.push(0,0,1),m.push(_/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<a;g++){const _=g+u*h,S=g+u*(h+1),w=g+1+u*(h+1),T=g+1+u*h;p.push(_,S,T),p.push(S,w,T)}this.setIndex(p),this.setAttribute("position",new ji(v,3)),this.setAttribute("normal",new ji(y,3)),this.setAttribute("uv",new ji(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.widthSegments,e.heightSegments)}}function To(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(M_(r))r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(M_(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=To(t[n]);for(const r in i)e[r]=i[r]}return e}function M_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function GD(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function zE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const WD={clone:To,merge:on};var jD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Lc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jD,this.fragmentShader=XD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=GD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class $D extends li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class YD extends Lc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qD extends Lc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zl=new X,Hl=new Do,di=new X;class HE extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zl,Hl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Hl,di.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(zl,Hl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Hl,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ur=new X,E_=new et,T_=new et;class ti extends HE{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=mp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mp*2*Math.atan(Math.tan(Pf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,n){return this.getViewBounds(e,E_,T_),n.subVectors(T_,E_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class eg extends HE{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=-90,Os=1;class KD extends Pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ti(Fs,Os,e,n);r.layers=this.layers,this.add(r);const s=new ti(Fs,Os,e,n);s.layers=this.layers,this.add(s);const o=new ti(Fs,Os,e,n);o.layers=this.layers,this.add(o);const a=new ti(Fs,Os,e,n);a.layers=this.layers,this.add(a);const l=new ti(Fs,Os,e,n);l.layers=this.layers,this.add(l);const u=new ti(Fs,Os,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(d,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class ZD extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const sg=class sg{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};sg.prototype.isMatrix2=!0;let w_=sg;function A_(t,e,n,i){const r=QD(i);switch(n){case RE:return t*e;case PE:return t*e/r.components*r.byteLength;case $m:return t*e/r.components*r.byteLength;case gs:return t*e*2/r.components*r.byteLength;case Ym:return t*e*2/r.components*r.byteLength;case bE:return t*e*3/r.components*r.byteLength;case ii:return t*e*4/r.components*r.byteLength;case qm:return t*e*4/r.components*r.byteLength;case du:case hu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pu:case mu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kh:case zh:return Math.max(t,16)*Math.max(e,8)/4;case Bh:case Vh:return Math.max(t,8)*Math.max(e,8)/2;case Hh:case Gh:case jh:case Xh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wh:case Ku:case $h:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ep:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case tp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case np:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ip:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case rp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case sp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case op:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ap:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case lp:case up:case cp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case fp:case dp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zu:case hp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function QD(t){switch(t){case kn:case TE:return{byteLength:1,components:1};case Oa:case wE:case Ki:return{byteLength:2,components:1};case jm:case Xm:return{byteLength:2,components:4};case Ri:case Wm:case xi:return{byteLength:4,components:1};case AE:case CE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gm}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function GE(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function JD(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(t.bindBuffer(u,a),d.length===0)t.bufferSubData(u,0,c);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){const v=d[f],y=d[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){const y=d[p];t.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var eL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tL=`#ifdef USE_ALPHAHASH
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
#endif`,nL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oL=`#ifdef USE_AOMAP
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
#endif`,aL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lL=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,uL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dL=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hL=`#ifdef USE_IRIDESCENCE
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
#endif`,pL=`#ifdef USE_BUMPMAP
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
#endif`,mL=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_L=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,SL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ML=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,EL=`#define PI 3.141592653589793
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
} // validated`,TL=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wL=`vec3 transformedNormal = objectNormal;
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
#endif`,AL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PL="gl_FragColor = linearToOutputTexel( gl_FragColor );",DL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LL=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,IL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,NL=`#ifdef USE_ENVMAP
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
#endif`,UL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FL=`#ifdef USE_ENVMAP
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
#endif`,OL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zL=`#ifdef USE_GRADIENTMAP
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
}`,HL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jL=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,XL=`#ifdef USE_ENVMAP
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
#endif`,$L=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZL=`PhysicalMaterial material;
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
#endif`,QL=`uniform sampler2D dfgLUT;
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
		return 0.5 / max( gv + gl, EPSILON );
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
}`,JL=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,e2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,t2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,i2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c2=`#if defined( USE_POINTS_UV )
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
#endif`,f2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g2=`#ifdef USE_MORPHTARGETS
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
#endif`,v2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E2=`#ifdef USE_NORMALMAP
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
#endif`,T2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,P2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,O2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,k2=`float getShadowMask() {
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
}`,V2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z2=`#ifdef USE_SKINNING
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
#endif`,H2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G2=`#ifdef USE_SKINNING
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
#endif`,W2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y2=`#ifdef USE_TRANSMISSION
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
#endif`,q2=`#ifdef USE_TRANSMISSION
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
#endif`,K2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tI=`uniform sampler2D t2D;
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
}`,nI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iI=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sI=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oI=`#include <common>
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
}`,aI=`#if DEPTH_PACKING == 3200
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
}`,lI=`#define DISTANCE
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
}`,uI=`#define DISTANCE
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
}`,cI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dI=`uniform float scale;
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
}`,hI=`uniform vec3 diffuse;
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
}`,pI=`#include <common>
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
}`,mI=`uniform vec3 diffuse;
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
}`,gI=`#define LAMBERT
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
}`,vI=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,_I=`#define MATCAP
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
}`,xI=`#define MATCAP
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
}`,yI=`#define NORMAL
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
}`,SI=`#define NORMAL
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
}`,MI=`#define PHONG
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
}`,EI=`#define PHONG
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,TI=`#define STANDARD
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
}`,wI=`#define STANDARD
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
}`,AI=`#define TOON
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
}`,CI=`#define TOON
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
}`,RI=`uniform float size;
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
}`,bI=`uniform vec3 diffuse;
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
}`,PI=`#include <common>
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
}`,DI=`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,LI=`uniform float rotation;
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
}`,II=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:eL,alphahash_pars_fragment:tL,alphamap_fragment:nL,alphamap_pars_fragment:iL,alphatest_fragment:rL,alphatest_pars_fragment:sL,aomap_fragment:oL,aomap_pars_fragment:aL,batching_pars_vertex:lL,batching_vertex:uL,begin_vertex:cL,beginnormal_vertex:fL,bsdfs:dL,iridescence_fragment:hL,bumpmap_pars_fragment:pL,clipping_planes_fragment:mL,clipping_planes_pars_fragment:gL,clipping_planes_pars_vertex:vL,clipping_planes_vertex:_L,color_fragment:xL,color_pars_fragment:yL,color_pars_vertex:SL,color_vertex:ML,common:EL,cube_uv_reflection_fragment:TL,defaultnormal_vertex:wL,displacementmap_pars_vertex:AL,displacementmap_vertex:CL,emissivemap_fragment:RL,emissivemap_pars_fragment:bL,colorspace_fragment:PL,colorspace_pars_fragment:DL,envmap_fragment:LL,envmap_common_pars_fragment:IL,envmap_pars_fragment:NL,envmap_pars_vertex:UL,envmap_physical_pars_fragment:XL,envmap_vertex:FL,fog_vertex:OL,fog_pars_vertex:BL,fog_fragment:kL,fog_pars_fragment:VL,gradientmap_pars_fragment:zL,lightmap_pars_fragment:HL,lights_lambert_fragment:GL,lights_lambert_pars_fragment:WL,lights_pars_begin:jL,lights_toon_fragment:$L,lights_toon_pars_fragment:YL,lights_phong_fragment:qL,lights_phong_pars_fragment:KL,lights_physical_fragment:ZL,lights_physical_pars_fragment:QL,lights_fragment_begin:JL,lights_fragment_maps:e2,lights_fragment_end:t2,lightprobes_pars_fragment:n2,logdepthbuf_fragment:i2,logdepthbuf_pars_fragment:r2,logdepthbuf_pars_vertex:s2,logdepthbuf_vertex:o2,map_fragment:a2,map_pars_fragment:l2,map_particle_fragment:u2,map_particle_pars_fragment:c2,metalnessmap_fragment:f2,metalnessmap_pars_fragment:d2,morphinstance_vertex:h2,morphcolor_vertex:p2,morphnormal_vertex:m2,morphtarget_pars_vertex:g2,morphtarget_vertex:v2,normal_fragment_begin:_2,normal_fragment_maps:x2,normal_pars_fragment:y2,normal_pars_vertex:S2,normal_vertex:M2,normalmap_pars_fragment:E2,clearcoat_normal_fragment_begin:T2,clearcoat_normal_fragment_maps:w2,clearcoat_pars_fragment:A2,iridescence_pars_fragment:C2,opaque_fragment:R2,packing:b2,premultiplied_alpha_fragment:P2,project_vertex:D2,dithering_fragment:L2,dithering_pars_fragment:I2,roughnessmap_fragment:N2,roughnessmap_pars_fragment:U2,shadowmap_pars_fragment:F2,shadowmap_pars_vertex:O2,shadowmap_vertex:B2,shadowmask_pars_fragment:k2,skinbase_vertex:V2,skinning_pars_vertex:z2,skinning_vertex:H2,skinnormal_vertex:G2,specularmap_fragment:W2,specularmap_pars_fragment:j2,tonemapping_fragment:X2,tonemapping_pars_fragment:$2,transmission_fragment:Y2,transmission_pars_fragment:q2,uv_pars_fragment:K2,uv_pars_vertex:Z2,uv_vertex:Q2,worldpos_vertex:J2,background_vert:eI,background_frag:tI,backgroundCube_vert:nI,backgroundCube_frag:iI,cube_vert:rI,cube_frag:sI,depth_vert:oI,depth_frag:aI,distance_vert:lI,distance_frag:uI,equirect_vert:cI,equirect_frag:fI,linedashed_vert:dI,linedashed_frag:hI,meshbasic_vert:pI,meshbasic_frag:mI,meshlambert_vert:gI,meshlambert_frag:vI,meshmatcap_vert:_I,meshmatcap_frag:xI,meshnormal_vert:yI,meshnormal_frag:SI,meshphong_vert:MI,meshphong_frag:EI,meshphysical_vert:TI,meshphysical_frag:wI,meshtoon_vert:AI,meshtoon_frag:CI,points_vert:RI,points_frag:bI,shadow_vert:PI,shadow_frag:DI,sprite_vert:LI,sprite_frag:II},me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},vi={basic:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:on([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:on([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Je(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:on([me.points,me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:on([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:on([me.common,me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:on([me.sprite,me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:on([me.common,me.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:on([me.lights,me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};vi.physical={uniforms:on([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Gl={r:0,b:0,g:0},NI=new Vt,WE=new Fe;WE.set(-1,0,0,0,1,0,0,0,1);function UI(t,e,n,i,r,s){const o=new Je(0);let a=r===!0?0:1,l,u,c=null,d=0,f=null;function p(g){let _=g.isScene===!0?g.background:null;if(_&&_.isTexture){const S=g.backgroundBlurriness>0;_=e.get(_,S)}return _}function v(g){let _=!1;const S=p(g);S===null?m(o,a):S&&S.isColor&&(m(S,1),_=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(g,_){const S=p(_);S&&(S.isCubeTexture||S.mapping===Dc)?(u===void 0&&(u=new bi(new Ka(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:To(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(NI.makeRotationFromEuler(_.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(WE),u.material.toneMapped=$e.getTransfer(S.colorSpace)!==tt,(c!==S||d!==S.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,c=S,d=S.version,f=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new bi(new Za(2,2),new li({name:"BackgroundMaterial",uniforms:To(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=$e.getTransfer(S.colorSpace)!==tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(c!==S||d!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,c=S,d=S.version,f=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,_){g.getRGB(Gl,zE(t)),n.buffers.color.setClear(Gl.r,Gl.g,Gl.b,_,s)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,_=1){o.set(g),a=_,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,m(o,a)},render:v,addToRenderList:y,dispose:h}}function FI(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(P,I,W,Y,N){let B=!1;const k=d(P,Y,W,I);s!==k&&(s=k,u(s.object)),B=p(P,Y,W,N),B&&v(P,Y,W,N),N!==null&&e.update(N,t.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,S(P,I,W,Y),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function c(P){return t.deleteVertexArray(P)}function d(P,I,W,Y){const N=Y.wireframe===!0;let B=i[I.id];B===void 0&&(B={},i[I.id]=B);const k=P.isInstancedMesh===!0?P.id:0;let U=B[k];U===void 0&&(U={},B[k]=U);let j=U[W.id];j===void 0&&(j={},U[W.id]=j);let q=j[N];return q===void 0&&(q=f(l()),j[N]=q),q}function f(P){const I=[],W=[],Y=[];for(let N=0;N<n;N++)I[N]=0,W[N]=0,Y[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:Y,object:P,attributes:{},index:null}}function p(P,I,W,Y){const N=s.attributes,B=I.attributes;let k=0;const U=W.getAttributes();for(const j in U)if(U[j].location>=0){const re=N[j];let ce=B[j];if(ce===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),re===void 0||re.attribute!==ce||ce&&re.data!==ce.data)return!0;k++}return s.attributesNum!==k||s.index!==Y}function v(P,I,W,Y){const N={},B=I.attributes;let k=0;const U=W.getAttributes();for(const j in U)if(U[j].location>=0){let re=B[j];re===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(re=P.instanceColor));const ce={};ce.attribute=re,re&&re.data&&(ce.data=re.data),N[j]=ce,k++}s.attributes=N,s.attributesNum=k,s.index=Y}function y(){const P=s.newAttributes;for(let I=0,W=P.length;I<W;I++)P[I]=0}function m(P){h(P,0)}function h(P,I){const W=s.newAttributes,Y=s.enabledAttributes,N=s.attributeDivisors;W[P]=1,Y[P]===0&&(t.enableVertexAttribArray(P),Y[P]=1),N[P]!==I&&(t.vertexAttribDivisor(P,I),N[P]=I)}function g(){const P=s.newAttributes,I=s.enabledAttributes;for(let W=0,Y=I.length;W<Y;W++)I[W]!==P[W]&&(t.disableVertexAttribArray(W),I[W]=0)}function _(P,I,W,Y,N,B,k){k===!0?t.vertexAttribIPointer(P,I,W,N,B):t.vertexAttribPointer(P,I,W,Y,N,B)}function S(P,I,W,Y){y();const N=Y.attributes,B=W.getAttributes(),k=I.defaultAttributeValues;for(const U in B){const j=B[U];if(j.location>=0){let q=N[U];if(q===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(q=P.instanceColor)),q!==void 0){const re=q.normalized,ce=q.itemSize,Ie=e.get(q);if(Ie===void 0)continue;const Oe=Ie.buffer,Pe=Ie.type,Z=Ie.bytesPerElement,oe=Pe===t.INT||Pe===t.UNSIGNED_INT||q.gpuType===Wm;if(q.isInterleavedBufferAttribute){const J=q.data,Ae=J.stride,Ue=q.offset;if(J.isInstancedInterleavedBuffer){for(let De=0;De<j.locationSize;De++)h(j.location+De,J.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let De=0;De<j.locationSize;De++)m(j.location+De);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let De=0;De<j.locationSize;De++)_(j.location+De,ce/j.locationSize,Pe,re,Ae*Z,(Ue+ce/j.locationSize*De)*Z,oe)}else{if(q.isInstancedBufferAttribute){for(let J=0;J<j.locationSize;J++)h(j.location+J,q.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let J=0;J<j.locationSize;J++)m(j.location+J);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let J=0;J<j.locationSize;J++)_(j.location+J,ce/j.locationSize,Pe,re,ce*Z,ce/j.locationSize*J*Z,oe)}}else if(k!==void 0){const re=k[U];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(j.location,re);break;case 3:t.vertexAttrib3fv(j.location,re);break;case 4:t.vertexAttrib4fv(j.location,re);break;default:t.vertexAttrib1fv(j.location,re)}}}}g()}function w(){A();for(const P in i){const I=i[P];for(const W in I){const Y=I[W];for(const N in Y){const B=Y[N];for(const k in B)c(B[k].object),delete B[k];delete Y[N]}}delete i[P]}}function T(P){if(i[P.id]===void 0)return;const I=i[P.id];for(const W in I){const Y=I[W];for(const N in Y){const B=Y[N];for(const k in B)c(B[k].object),delete B[k];delete Y[N]}}delete i[P.id]}function R(P){for(const I in i){const W=i[I];for(const Y in W){const N=W[Y];if(N[P.id]===void 0)continue;const B=N[P.id];for(const k in B)c(B[k].object),delete B[k];delete N[P.id]}}}function x(P){for(const I in i){const W=i[I],Y=P.isInstancedMesh===!0?P.id:0,N=W[Y];if(N!==void 0){for(const B in N){const k=N[B];for(const U in k)c(k[U].object),delete k[U];delete N[B]}delete W[Y],Object.keys(W).length===0&&delete i[I]}}}function A(){b(),o=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function OI(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,c){c!==0&&(t.drawArraysInstanced(i,l,u,c),n.update(u,i,c))}function a(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function BI(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==ii&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const x=R===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==kn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==xi&&!x)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(Le("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:S,maxSamples:w,samples:T}}function kI(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Kr,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const g=s?0:i,_=g*4;let S=h.clippingState||null;l.value=S,S=c(v,f,_,p);for(let w=0;w!==_;++w)S[w]=n[w];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,v){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const h=p+y*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,S=p;_!==y;++_,S+=4)o.copy(d[_]).applyMatrix4(g,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const Mr=4,C_=[.125,.215,.35,.446,.526,.582],Qr=20,VI=256,$o=new eg,R_=new Je;let ed=null,td=0,nd=0,id=!1;const zI=new X;class b_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=zI}=s;ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=D_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ed,td,nd),this._renderer.xr.enabled=id,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Ki,format:ii,colorSpace:Qu,depthBuffer:!1},r=P_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P_(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=HI(s)),this._blurMaterial=WI(s,e,n),this._ggxMaterial=GI(s,e,n)}return r}_compileMaterial(e){const n=new bi(new Ji,e);this._renderer.compile(n,$o)}_sceneToCubeUV(e,n,i,r,s){const l=new ti(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(R_),d.toneMapping=Ti,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bi(new Ka,new OE({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let h=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,h=!0):(m.color.copy(R_),h=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(l.up.set(0,u[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[_],s.y,s.z)):S===1?(l.up.set(0,0,u[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[_],s.z)):(l.up.set(0,u[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[_]));const w=this._cubeSize;Bs(r,S*w,_>2?w:0,w,w),d.setRenderTarget(r),h&&d.render(y,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ms||e.mapping===Mo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=L_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=D_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,$o)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,p=d*f,{_lodMax:v}=this,y=this._sizeLods[i],m=3*y*(i>v-Mr?i-v+Mr:0),h=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,Bs(s,m,h,3*y,2*y),r.setRenderTarget(s),r.render(a,$o),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Bs(e,m,h,3*y,2*y),r.setRenderTarget(e),r.render(a,$o)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Qr-1),y=s/v,m=isFinite(s)?1+Math.floor(c*y):Qr;m>Qr&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qr}`);const h=[];let g=0;for(let R=0;R<Qr;++R){const x=R/y,A=Math.exp(-x*x/2);h.push(A),R===0?g+=A:R<m&&(g+=2*A)}for(let R=0;R<h.length;R++)h[R]=h[R]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;const S=this._sizeLods[r],w=3*S*(r>_-Mr?r-_+Mr:0),T=4*(this._cubeSize-S);Bs(n,w,T,3*S,2*S),l.setRenderTarget(n),l.render(d,$o)}}function HI(t){const e=[],n=[],i=[];let r=t;const s=t-Mr+1+C_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Mr?l=C_[o-t+Mr-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,v=6,y=3,m=2,h=1,g=new Float32Array(y*v*p),_=new Float32Array(m*v*p),S=new Float32Array(h*v*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,x=T>2?0:-1,A=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];g.set(A,y*v*T),_.set(f,m*v*T);const b=[T,T,T,T,T,T];S.set(b,h*v*T)}const w=new Ji;w.setAttribute("position",new Ai(g,y)),w.setAttribute("uv",new Ai(_,m)),w.setAttribute("faceIndex",new Ai(S,h)),i.push(new bi(w,null)),r>Mr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function P_(t,e,n){const i=new wi(t,e,n);return i.texture.mapping=Dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function GI(t,e,n){return new li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VI,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ic(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function WI(t,e,n){const i=new Float32Array(Qr),r=new X(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function D_(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function L_(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ic(){return`

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
	`}class jE extends wi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new kE(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ka(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Gi});s.uniforms.tEquirect.value=n;const o=new bi(r,s),a=n.minFilter;return n.minFilter===rs&&(n.minFilter=rn),new KD(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function jI(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?o(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===Cf||p===Rf)if(e.has(f)){const v=e.get(f).texture;return a(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const y=new jE(v.height);return y.fromEquirectangularTexture(t,f),e.set(f,y),f.addEventListener("dispose",u),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,v=p===Cf||p===Rf,y=p===ms||p===Mo;if(v||y){let m=n.get(f);const h=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new b_(t)),m=v?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const g=f.image;return v&&g&&g.height>0||y&&g&&l(g)?(i===null&&(i=new b_(t)),m=v?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",c),m.texture):null}}}return f}function a(f,p){return p===Cf?f.mapping=ms:p===Rf&&(f.mapping=Mo),f}function l(f){let p=0;const v=6;for(let y=0;y<v;y++)f[y]!==void 0&&p++;return p===v}function u(f){const p=f.target;p.removeEventListener("dispose",u);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function c(f){const p=f.target;p.removeEventListener("dispose",c);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function XI(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&pp("WebGLRenderer: "+i+" extension not supported."),r}}}function $I(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function u(d){const f=[],p=d.index,v=d.attributes.position;let y=0;if(v===void 0)return;if(p!==null){const g=p.array;y=p.version;for(let _=0,S=g.length;_<S;_+=3){const w=g[_+0],T=g[_+1],R=g[_+2];f.push(w,T,T,R,R,w)}}else{const g=v.array;y=v.version;for(let _=0,S=g.length/3-1;_<S;_+=3){const w=_+0,T=_+1,R=_+2;f.push(w,T,T,R,R,w)}}const m=new(v.count>=65535?FE:UE)(f,1);m.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function YI(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*o),n.update(f,i,1)}function u(d,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,d*o,p),n.update(f,i,p))}function c(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let y=0;for(let m=0;m<p;m++)y+=f[m];n.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function qI(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function KI(t,e,n){const i=new WeakMap,r=new Pt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let b=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let w=a.attributes.position.count*S,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*T*4*d),x=new LE(R,w,T,d);x.type=xi,x.needsUpdate=!0;const A=S*4;for(let P=0;P<d;P++){const I=h[P],W=g[P],Y=_[P],N=w*T*4*P;for(let B=0;B<I.count;B++){const k=B*A;v===!0&&(r.fromBufferAttribute(I,B),R[N+k+0]=r.x,R[N+k+1]=r.y,R[N+k+2]=r.z,R[N+k+3]=0),y===!0&&(r.fromBufferAttribute(W,B),R[N+k+4]=r.x,R[N+k+5]=r.y,R[N+k+6]=r.z,R[N+k+7]=0),m===!0&&(r.fromBufferAttribute(Y,B),R[N+k+8]=r.x,R[N+k+9]=r.y,R[N+k+10]=r.z,R[N+k+11]=Y.itemSize===4?r.w:1)}}f={count:d,texture:x,size:new et(w,T)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function ZI(t,e,n,i,r){let s=new WeakMap;function o(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function a(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:a}}const QI={[gE]:"LINEAR_TONE_MAPPING",[vE]:"REINHARD_TONE_MAPPING",[_E]:"CINEON_TONE_MAPPING",[xE]:"ACES_FILMIC_TONE_MAPPING",[SE]:"AGX_TONE_MAPPING",[ME]:"NEUTRAL_TONE_MAPPING",[yE]:"CUSTOM_TONE_MAPPING"};function JI(t,e,n,i,r){const s=new wi(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Eo(e,n):void 0}),o=new wi(e,n,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),a=new Ji;a.setAttribute("position",new ji([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ji([0,2,0,0,2,0],2));const l=new $D({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new bi(a,l),c=new eg(-1,1,1,-1,0,1);let d=null,f=null,p=!1,v,y=null,m=[],h=!1;this.setSize=function(g,_){s.setSize(g,_),o.setSize(g,_);for(let S=0;S<m.length;S++){const w=m[S];w.setSize&&w.setSize(g,_)}},this.setEffects=function(g){m=g,h=m.length>0&&m[0].isRenderPass===!0;const _=s.width,S=s.height;for(let w=0;w<m.length;w++){const T=m[w];T.setSize&&T.setSize(_,S)}},this.begin=function(g,_){if(p||g.toneMapping===Ti&&m.length===0)return!1;if(y=_,_!==null){const S=_.width,w=_.height;(s.width!==S||s.height!==w)&&this.setSize(S,w)}return h===!1&&g.setRenderTarget(s),v=g.toneMapping,g.toneMapping=Ti,!0},this.hasRenderPass=function(){return h},this.end=function(g,_){g.toneMapping=v,p=!0;let S=s,w=o;for(let T=0;T<m.length;T++){const R=m[T];if(R.enabled!==!1&&(R.render(g,w,S,_),R.needsSwap!==!1)){const x=S;S=w,w=x}}if(d!==g.outputColorSpace||f!==g.toneMapping){d=g.outputColorSpace,f=g.toneMapping,l.defines={},$e.getTransfer(d)===tt&&(l.defines.SRGB_TRANSFER="");const T=QI[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,g.setRenderTarget(y),g.render(u,c),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const XE=new fn,gp=new Eo(1,1),$E=new LE,YE=new ED,qE=new kE,I_=[],N_=[],U_=new Float32Array(16),F_=new Float32Array(9),O_=new Float32Array(4);function Lo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=I_[r];if(s===void 0&&(s=new Float32Array(r),I_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nc(t,e){let n=N_[e];n===void 0&&(n=new Int32Array(e),N_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function eN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function tN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function nN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function iN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function rN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;O_.set(i),t.uniformMatrix2fv(this.addr,!1,O_),Ht(n,i)}}function sN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;F_.set(i),t.uniformMatrix3fv(this.addr,!1,F_),Ht(n,i)}}function oN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;U_.set(i),t.uniformMatrix4fv(this.addr,!1,U_),Ht(n,i)}}function aN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function lN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function uN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function cN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function fN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function dN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function hN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function pN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function mN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(gp.compareFunction=n.isReversedDepthBuffer()?Zm:Km,s=gp):s=XE,n.setTexture2D(e||s,r)}function gN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||YE,r)}function vN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||qE,r)}function _N(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$E,r)}function xN(t){switch(t){case 5126:return eN;case 35664:return tN;case 35665:return nN;case 35666:return iN;case 35674:return rN;case 35675:return sN;case 35676:return oN;case 5124:case 35670:return aN;case 35667:case 35671:return lN;case 35668:case 35672:return uN;case 35669:case 35673:return cN;case 5125:return fN;case 36294:return dN;case 36295:return hN;case 36296:return pN;case 35678:case 36198:case 36298:case 36306:case 35682:return mN;case 35679:case 36299:case 36307:return gN;case 35680:case 36300:case 36308:case 36293:return vN;case 36289:case 36303:case 36311:case 36292:return _N}}function yN(t,e){t.uniform1fv(this.addr,e)}function SN(t,e){const n=Lo(e,this.size,2);t.uniform2fv(this.addr,n)}function MN(t,e){const n=Lo(e,this.size,3);t.uniform3fv(this.addr,n)}function EN(t,e){const n=Lo(e,this.size,4);t.uniform4fv(this.addr,n)}function TN(t,e){const n=Lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function wN(t,e){const n=Lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function AN(t,e){const n=Lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function CN(t,e){t.uniform1iv(this.addr,e)}function RN(t,e){t.uniform2iv(this.addr,e)}function bN(t,e){t.uniform3iv(this.addr,e)}function PN(t,e){t.uniform4iv(this.addr,e)}function DN(t,e){t.uniform1uiv(this.addr,e)}function LN(t,e){t.uniform2uiv(this.addr,e)}function IN(t,e){t.uniform3uiv(this.addr,e)}function NN(t,e){t.uniform4uiv(this.addr,e)}function UN(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=gp:o=XE;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function FN(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||YE,s[o])}function ON(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||qE,s[o])}function BN(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||$E,s[o])}function kN(t){switch(t){case 5126:return yN;case 35664:return SN;case 35665:return MN;case 35666:return EN;case 35674:return TN;case 35675:return wN;case 35676:return AN;case 5124:case 35670:return CN;case 35667:case 35671:return RN;case 35668:case 35672:return bN;case 35669:case 35673:return PN;case 5125:return DN;case 36294:return LN;case 36295:return IN;case 36296:return NN;case 35678:case 36198:case 36298:case 36306:case 35682:return UN;case 35679:case 36299:case 36307:return FN;case 35680:case 36300:case 36308:case 36293:return ON;case 36289:case 36303:case 36311:case 36292:return BN}}class VN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=xN(n.type)}}class zN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kN(n.type)}}class HN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function B_(t,e){t.seq.push(e),t.map[e.id]=e}function GN(t,e,n){const i=t.name,r=i.length;for(rd.lastIndex=0;;){const s=rd.exec(i),o=rd.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){B_(n,u===void 0?new VN(a,t,e):new zN(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new HN(a),B_(n,d)),n=d}}}class gu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);GN(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function k_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const WN=37297;let jN=0;function XN(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const V_=new Fe;function $N(t){$e._getMatrix(V_,$e.workingColorSpace,t);const e=`mat3( ${V_.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case Ju:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function z_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+XN(t.getShaderSource(e),a)}else return s}function YN(t,e){const n=$N(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const qN={[gE]:"Linear",[vE]:"Reinhard",[_E]:"Cineon",[xE]:"ACESFilmic",[SE]:"AgX",[ME]:"Neutral",[yE]:"Custom"};function KN(t,e){const n=qN[e];return n===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Wl=new X;function ZN(){$e.getLuminanceCoefficients(Wl);const t=Wl.x.toFixed(4),e=Wl.y.toFixed(4),n=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function JN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function eU(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ta(t){return t!==""}function H_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function G_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tU=/^[ \t]*#include +<([\w\d./]+)>/gm;function vp(t){return t.replace(tU,iU)}const nU=new Map;function iU(t,e){let n=ze[e];if(n===void 0){const i=nU.get(e);if(i!==void 0)n=ze[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vp(n)}const rU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W_(t){return t.replace(rU,sU)}function sU(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function j_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const oU={[fu]:"SHADOWMAP_TYPE_PCF",[ea]:"SHADOWMAP_TYPE_VSM"};function aU(t){return oU[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lU={[ms]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE",[Dc]:"ENVMAP_TYPE_CUBE_UV"};function uU(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":lU[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const cU={[Mo]:"ENVMAP_MODE_REFRACTION"};function fU(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":cU[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dU={[mE]:"ENVMAP_BLENDING_MULTIPLY",[nD]:"ENVMAP_BLENDING_MIX",[iD]:"ENVMAP_BLENDING_ADD"};function hU(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":dU[t.combine]||"ENVMAP_BLENDING_NONE"}function pU(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function mU(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=aU(n),u=uU(n),c=fU(n),d=hU(n),f=pU(n),p=QN(n),v=JN(s),y=r.createProgram();let m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ta).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ta).join(`
`),h.length>0&&(h+=`
`)):(m=[j_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),h=[j_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ti?"#define TONE_MAPPING":"",n.toneMapping!==Ti?ze.tonemapping_pars_fragment:"",n.toneMapping!==Ti?KN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,YN("linearToOutputTexel",n.outputColorSpace),ZN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ta).join(`
`)),o=vp(o),o=H_(o,n),o=G_(o,n),a=vp(a),a=H_(a,n),a=G_(a,n),o=W_(o),a=W_(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===s_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===s_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=g+m+o,S=g+h+a,w=k_(r,r.VERTEX_SHADER,_),T=k_(r,r.FRAGMENT_SHADER,S);r.attachShader(y,w),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(P){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(y)||"",W=r.getShaderInfoLog(w)||"",Y=r.getShaderInfoLog(T)||"",N=I.trim(),B=W.trim(),k=Y.trim();let U=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,w,T);else{const q=z_(r,w,"vertex"),re=z_(r,T,"fragment");Ke("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+q+`
`+re)}else N!==""?Le("WebGLProgram: Program Info Log:",N):(B===""||k==="")&&(j=!1);j&&(P.diagnostics={runnable:U,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:k,prefix:h}})}r.deleteShader(w),r.deleteShader(T),x=new gu(r,y),A=eU(r,y)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(y,WN)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jN++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=T,this}let gU=0;class vU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new _U(e),n.set(e,i)),i}}class _U{constructor(e){this.id=gU++,this.code=e,this.usedTimes=0}}function xU(t){return t===gs||t===Ku||t===Zu}function yU(t,e,n,i,r,s){const o=new IE,a=new vU,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,A,b,P,I,W){const Y=P.fog,N=I.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=e.get(x.envMap||B,k),j=U&&U.mapping===Dc?U.image.height:null,q=p[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Le("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const re=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ce=re!==void 0?re.length:0;let Ie=0;N.morphAttributes.position!==void 0&&(Ie=1),N.morphAttributes.normal!==void 0&&(Ie=2),N.morphAttributes.color!==void 0&&(Ie=3);let Oe,Pe,Z,oe;if(q){const Be=vi[q];Oe=Be.vertexShader,Pe=Be.fragmentShader}else Oe=x.vertexShader,Pe=x.fragmentShader,a.update(x),Z=a.getVertexShaderID(x),oe=a.getFragmentShaderID(x);const J=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),Ue=I.isInstancedMesh===!0,De=I.isBatchedMesh===!0,vt=!!x.map,je=!!x.matcap,it=!!U,ht=!!x.aoMap,Ge=!!x.lightMap,Ut=!!x.bumpMap,_t=!!x.normalMap,En=!!x.displacementMap,F=!!x.emissiveMap,Ft=!!x.metalnessMap,Xe=!!x.roughnessMap,ut=x.anisotropy>0,pe=x.clearcoat>0,Mt=x.dispersion>0,C=x.iridescence>0,M=x.sheen>0,V=x.transmission>0,ee=ut&&!!x.anisotropyMap,ie=pe&&!!x.clearcoatMap,ae=pe&&!!x.clearcoatNormalMap,he=pe&&!!x.clearcoatRoughnessMap,K=C&&!!x.iridescenceMap,te=C&&!!x.iridescenceThicknessMap,_e=M&&!!x.sheenColorMap,Se=M&&!!x.sheenRoughnessMap,fe=!!x.specularMap,le=!!x.specularColorMap,Ne=!!x.specularIntensityMap,Ve=V&&!!x.transmissionMap,Qe=V&&!!x.thicknessMap,L=!!x.gradientMap,ue=!!x.alphaMap,Q=x.alphaTest>0,xe=!!x.alphaHash,de=!!x.extensions;let ne=Ti;x.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ne=t.toneMapping);const Ce={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:Oe,fragmentShader:Pe,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:De,batchingColor:De&&I._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&I.instanceColor!==null,instancingMorph:Ue&&I.morphTexture!==null,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:vt,matcap:je,envMap:it,envMapMode:it&&U.mapping,envMapCubeUVHeight:j,aoMap:ht,lightMap:Ge,bumpMap:Ut,normalMap:_t,displacementMap:En,emissiveMap:F,normalMapObjectSpace:_t&&x.normalMapType===oD,normalMapTangentSpace:_t&&x.normalMapType===n_,packedNormalMap:_t&&x.normalMapType===n_&&xU(x.normalMap.format),metalnessMap:Ft,roughnessMap:Xe,anisotropy:ut,anisotropyMap:ee,clearcoat:pe,clearcoatMap:ie,clearcoatNormalMap:ae,clearcoatRoughnessMap:he,dispersion:Mt,iridescence:C,iridescenceMap:K,iridescenceThicknessMap:te,sheen:M,sheenColorMap:_e,sheenRoughnessMap:Se,specularMap:fe,specularColorMap:le,specularIntensityMap:Ne,transmission:V,transmissionMap:Ve,thicknessMap:Qe,gradientMap:L,opaque:x.transparent===!1&&x.blending===lo&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:Q,alphaHash:xe,combine:x.combine,mapUv:vt&&v(x.map.channel),aoMapUv:ht&&v(x.aoMap.channel),lightMapUv:Ge&&v(x.lightMap.channel),bumpMapUv:Ut&&v(x.bumpMap.channel),normalMapUv:_t&&v(x.normalMap.channel),displacementMapUv:En&&v(x.displacementMap.channel),emissiveMapUv:F&&v(x.emissiveMap.channel),metalnessMapUv:Ft&&v(x.metalnessMap.channel),roughnessMapUv:Xe&&v(x.roughnessMap.channel),anisotropyMapUv:ee&&v(x.anisotropyMap.channel),clearcoatMapUv:ie&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(x.sheenRoughnessMap.channel),specularMapUv:fe&&v(x.specularMap.channel),specularColorMapUv:le&&v(x.specularColorMap.channel),specularIntensityMapUv:Ne&&v(x.specularIntensityMap.channel),transmissionMapUv:Ve&&v(x.transmissionMap.channel),thicknessMapUv:Qe&&v(x.thicknessMap.channel),alphaMapUv:ue&&v(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(_t||ut),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(vt||ue),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ae,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,decodeVideoTexture:vt&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:F&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bi,flipSided:x.side===Sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:de&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&x.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const b in x.defines)A.push(b),A.push(x.defines[b]);return x.isRawShaderMaterial===!1&&(h(A,x),g(A,x),A.push(t.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function h(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function g(x,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function _(x){const A=p[x.type];let b;if(A){const P=vi[A];b=WD.clone(P.uniforms)}else b=x.uniforms;return b}function S(x,A){let b=c.get(A);return b!==void 0?++b.usedTimes:(b=new mU(t,A,x,r),u.push(b),c.set(A,b)),b}function w(x){if(--x.usedTimes===0){const A=u.indexOf(x);u[A]=u[u.length-1],u.pop(),c.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function R(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:_,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:R}}function SU(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function MU(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function X_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function $_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,v,y,m,h){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:p,material:v,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:h},t[e]=g):(g.id=f.id,g.object=f,g.geometry=p,g.material=v,g.materialVariant=o(f),g.groupOrder=y,g.renderOrder=f.renderOrder,g.z=m,g.group=h),e++,g}function l(f,p,v,y,m,h){const g=a(f,p,v,y,m,h);v.transmission>0?i.push(g):v.transparent===!0?r.push(g):n.push(g)}function u(f,p,v,y,m,h){const g=a(f,p,v,y,m,h);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):n.unshift(g)}function c(f,p){n.length>1&&n.sort(f||MU),i.length>1&&i.sort(p||X_),r.length>1&&r.sort(p||X_)}function d(){for(let f=e,p=t.length;f<p;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:d,sort:c}}function EU(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new $_,t.set(i,[o])):r>=s.length?(o=new $_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function TU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new Je};break;case"SpotLight":n={position:new X,direction:new X,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function wU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let AU=0;function CU(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RU(t){const e=new TU,n=wU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const r=new X,s=new Vt,o=new Vt;function a(u){let c=0,d=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,v=0,y=0,m=0,h=0,g=0,_=0,S=0,w=0,T=0,R=0;u.sort(CU);for(let A=0,b=u.length;A<b;A++){const P=u[A],I=P.color,W=P.intensity,Y=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===gs?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)c+=I.r*W,d+=I.g*W,f+=I.b*W;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],W);R++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,U=n.get(P);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=N,i.directionalShadowMatrix[p]=P.shadow.matrix,g++}i.directional[p]=B,p++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(I).multiplyScalar(W),B.distance=Y,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[y]=B;const k=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,k.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[y]=k.matrix,P.castShadow){const U=n.get(P);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,i.spotShadow[y]=U,i.spotShadowMap[y]=N,S++}y++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(I).multiplyScalar(W),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=B,m++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const k=P.shadow,U=n.get(P);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,U.shadowCameraNear=k.camera.near,U.shadowCameraFar=k.camera.far,i.pointShadow[v]=U,i.pointShadowMap[v]=N,i.pointShadowMatrix[v]=P.shadow.matrix,_++}i.point[v]=B,v++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(W),B.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[h]=B,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==p||x.pointLength!==v||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==h||x.numDirectionalShadows!==g||x.numPointShadows!==_||x.numSpotShadows!==S||x.numSpotMaps!==w||x.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,x.directionalLength=p,x.pointLength=v,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=h,x.numDirectionalShadows=g,x.numPointShadows=_,x.numSpotShadows=S,x.numSpotMaps=w,x.numLightProbes=R,i.version=AU++)}function l(u,c){let d=0,f=0,p=0,v=0,y=0;const m=c.matrixWorldInverse;for(let h=0,g=u.length;h<g;h++){const _=u[h];if(_.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Y_(t){const e=new RU(t),n=[],i=[],r=[];function s(f){d.camera=f,n.length=0,i.length=0,r.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(n)}function c(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function bU(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Y_(t),e.set(r,[a])):s>=o.length?(a=new Y_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const PU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DU=`uniform sampler2D shadow_pass;
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
}`,LU=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],IU=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],q_=new Vt,Yo=new X,sd=new X;function NU(t,e,n){let i=new BE;const r=new et,s=new et,o=new Pt,a=new YD,l=new qD,u={},c=n.maxTextureSize,d={[Fr]:Sn,[Sn]:Fr,[Bi]:Bi},f=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:PU,fragmentShader:DU}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ji;v.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new bi(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let h=this.type;this.render=function(T,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===O3&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fu);const A=t.getRenderTarget(),b=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Gi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const W=h!==this.type;W&&R.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(N=>N.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,N=T.length;Y<N;Y++){const B=T[Y],k=B.shadow;if(k===void 0){Le("WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const U=k.getFrameExtents();r.multiply(U),s.copy(k.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/U.x),r.x=s.x*U.x,k.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/U.y),r.y=s.y*U.y,k.mapSize.y=s.y));const j=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=j,k.map===null||W===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ea){if(B.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new wi(r.x,r.y,{format:gs,type:Ki,minFilter:rn,magFilter:rn,generateMipmaps:!1}),k.map.texture.name=B.name+".shadowMap",k.map.depthTexture=new Eo(r.x,r.y,xi),k.map.depthTexture.name=B.name+".shadowMapDepth",k.map.depthTexture.format=Zi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Yt,k.map.depthTexture.magFilter=Yt}else B.isPointLight?(k.map=new jE(r.x),k.map.depthTexture=new HD(r.x,Ri)):(k.map=new wi(r.x,r.y),k.map.depthTexture=new Eo(r.x,r.y,Ri)),k.map.depthTexture.name=B.name+".shadowMap",k.map.depthTexture.format=Zi,this.type===fu?(k.map.depthTexture.compareFunction=j?Zm:Km,k.map.depthTexture.minFilter=rn,k.map.depthTexture.magFilter=rn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Yt,k.map.depthTexture.magFilter=Yt);k.camera.updateProjectionMatrix()}const q=k.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<q;re++){if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,re),t.clear();else{re===0&&(t.setRenderTarget(k.map),t.clear());const ce=k.getViewport(re);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),I.viewport(o)}if(B.isPointLight){const ce=k.camera,Ie=k.matrix,Oe=B.distance||ce.far;Oe!==ce.far&&(ce.far=Oe,ce.updateProjectionMatrix()),Yo.setFromMatrixPosition(B.matrixWorld),ce.position.copy(Yo),sd.copy(ce.position),sd.add(LU[re]),ce.up.copy(IU[re]),ce.lookAt(sd),ce.updateMatrixWorld(),Ie.makeTranslation(-Yo.x,-Yo.y,-Yo.z),q_.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),k._frustum.setFromProjectionMatrix(q_,ce.coordinateSystem,ce.reversedDepth)}else k.updateMatrices(B);i=k.getFrustum(),S(R,x,k.camera,B,this.type)}k.isPointLightShadow!==!0&&this.type===ea&&g(k,x),k.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(A,b,P)};function g(T,R){const x=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new wi(r.x,r.y,{format:gs,type:Ki})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(R,null,x,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(R,null,x,p,y,null)}function _(T,R,x,A){let b=null;const P=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)b=P;else if(b=x.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=b.uuid,W=R.uuid;let Y=u[I];Y===void 0&&(Y={},u[I]=Y);let N=Y[W];N===void 0&&(N=b.clone(),Y[W]=N,R.addEventListener("dispose",w)),b=N}if(b.visible=R.visible,b.wireframe=R.wireframe,A===ea?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,x.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=t.properties.get(b);I.light=x}return b}function S(T,R,x,A,b){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===ea)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const W=e.update(T),Y=T.material;if(Array.isArray(Y)){const N=W.groups;for(let B=0,k=N.length;B<k;B++){const U=N[B],j=Y[U.materialIndex];if(j&&j.visible){const q=_(T,j,A,b);T.onBeforeShadow(t,T,R,x,W,q,U),t.renderBufferDirect(x,null,W,q,T,U),T.onAfterShadow(t,T,R,x,W,q,U)}}}else if(Y.visible){const N=_(T,Y,A,b);T.onBeforeShadow(t,T,R,x,W,N,null),t.renderBufferDirect(x,null,W,N,T,null),T.onAfterShadow(t,T,R,x,W,N,null)}}const I=T.children;for(let W=0,Y=I.length;W<Y;W++)S(I[W],R,x,A,b)}function w(T){T.target.removeEventListener("dispose",w);for(const x in u){const A=u[x],b=T.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}function UU(t,e){function n(){let L=!1;const ue=new Pt;let Q=null;const xe=new Pt(0,0,0,0);return{setMask:function(de){Q!==de&&!L&&(t.colorMask(de,de,de,de),Q=de)},setLocked:function(de){L=de},setClear:function(de,ne,Ce,Be,At){At===!0&&(de*=Be,ne*=Be,Ce*=Be),ue.set(de,ne,Ce,Be),xe.equals(ue)===!1&&(t.clearColor(de,ne,Ce,Be),xe.copy(ue))},reset:function(){L=!1,Q=null,xe.set(-1,0,0,0)}}}function i(){let L=!1,ue=!1,Q=null,xe=null,de=null;return{setReversed:function(ne){if(ue!==ne){const Ce=e.get("EXT_clip_control");ne?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ue=ne;const Be=de;de=null,this.setClear(Be)}},getReversed:function(){return ue},setTest:function(ne){ne?J(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(ne){Q!==ne&&!L&&(t.depthMask(ne),Q=ne)},setFunc:function(ne){if(ue&&(ne=gD[ne]),xe!==ne){switch(ne){case bh:t.depthFunc(t.NEVER);break;case Ph:t.depthFunc(t.ALWAYS);break;case Dh:t.depthFunc(t.LESS);break;case So:t.depthFunc(t.LEQUAL);break;case Lh:t.depthFunc(t.EQUAL);break;case Ih:t.depthFunc(t.GEQUAL);break;case Nh:t.depthFunc(t.GREATER);break;case Uh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=ne}},setLocked:function(ne){L=ne},setClear:function(ne){de!==ne&&(de=ne,ue&&(ne=1-ne),t.clearDepth(ne))},reset:function(){L=!1,Q=null,xe=null,de=null,ue=!1}}}function r(){let L=!1,ue=null,Q=null,xe=null,de=null,ne=null,Ce=null,Be=null,At=null;return{setTest:function(rt){L||(rt?J(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(rt){ue!==rt&&!L&&(t.stencilMask(rt),ue=rt)},setFunc:function(rt,Pi,ui){(Q!==rt||xe!==Pi||de!==ui)&&(t.stencilFunc(rt,Pi,ui),Q=rt,xe=Pi,de=ui)},setOp:function(rt,Pi,ui){(ne!==rt||Ce!==Pi||Be!==ui)&&(t.stencilOp(rt,Pi,ui),ne=rt,Ce=Pi,Be=ui)},setLocked:function(rt){L=rt},setClear:function(rt){At!==rt&&(t.clearStencil(rt),At=rt)},reset:function(){L=!1,ue=null,Q=null,xe=null,de=null,ne=null,Ce=null,Be=null,At=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f={},p=new WeakMap,v=[],y=null,m=!1,h=null,g=null,_=null,S=null,w=null,T=null,R=null,x=new Je(0,0,0),A=0,b=!1,P=null,I=null,W=null,Y=null,N=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,U=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=U>=1):j.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=U>=2);let q=null,re={};const ce=t.getParameter(t.SCISSOR_BOX),Ie=t.getParameter(t.VIEWPORT),Oe=new Pt().fromArray(ce),Pe=new Pt().fromArray(Ie);function Z(L,ue,Q,xe){const de=new Uint8Array(4),ne=t.createTexture();t.bindTexture(L,ne),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<Q;Ce++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(ue+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return ne}const oe={};oe[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(t.DEPTH_TEST),o.setFunc(So),Ut(!1),_t(Qv),J(t.CULL_FACE),ht(Gi);function J(L){c[L]!==!0&&(t.enable(L),c[L]=!0)}function Ae(L){c[L]!==!1&&(t.disable(L),c[L]=!1)}function Ue(L,ue){return f[L]!==ue?(t.bindFramebuffer(L,ue),f[L]=ue,L===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ue),L===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function De(L,ue){let Q=v,xe=!1;if(L){Q=p.get(ue),Q===void 0&&(Q=[],p.set(ue,Q));const de=L.textures;if(Q.length!==de.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,Ce=de.length;ne<Ce;ne++)Q[ne]=t.COLOR_ATTACHMENT0+ne;Q.length=de.length,xe=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,xe=!0);xe&&t.drawBuffers(Q)}function vt(L){return y!==L?(t.useProgram(L),y=L,!0):!1}const je={[Zr]:t.FUNC_ADD,[k3]:t.FUNC_SUBTRACT,[V3]:t.FUNC_REVERSE_SUBTRACT};je[z3]=t.MIN,je[H3]=t.MAX;const it={[G3]:t.ZERO,[W3]:t.ONE,[j3]:t.SRC_COLOR,[Ch]:t.SRC_ALPHA,[Z3]:t.SRC_ALPHA_SATURATE,[q3]:t.DST_COLOR,[$3]:t.DST_ALPHA,[X3]:t.ONE_MINUS_SRC_COLOR,[Rh]:t.ONE_MINUS_SRC_ALPHA,[K3]:t.ONE_MINUS_DST_COLOR,[Y3]:t.ONE_MINUS_DST_ALPHA,[Q3]:t.CONSTANT_COLOR,[J3]:t.ONE_MINUS_CONSTANT_COLOR,[eD]:t.CONSTANT_ALPHA,[tD]:t.ONE_MINUS_CONSTANT_ALPHA};function ht(L,ue,Q,xe,de,ne,Ce,Be,At,rt){if(L===Gi){m===!0&&(Ae(t.BLEND),m=!1);return}if(m===!1&&(J(t.BLEND),m=!0),L!==B3){if(L!==h||rt!==b){if((g!==Zr||w!==Zr)&&(t.blendEquation(t.FUNC_ADD),g=Zr,w=Zr),rt)switch(L){case lo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jv:t.blendFunc(t.ONE,t.ONE);break;case e_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case t_:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ke("WebGLState: Invalid blending: ",L);break}else switch(L){case lo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jv:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case e_:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case t_:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",L);break}_=null,S=null,T=null,R=null,x.set(0,0,0),A=0,h=L,b=rt}return}de=de||ue,ne=ne||Q,Ce=Ce||xe,(ue!==g||de!==w)&&(t.blendEquationSeparate(je[ue],je[de]),g=ue,w=de),(Q!==_||xe!==S||ne!==T||Ce!==R)&&(t.blendFuncSeparate(it[Q],it[xe],it[ne],it[Ce]),_=Q,S=xe,T=ne,R=Ce),(Be.equals(x)===!1||At!==A)&&(t.blendColor(Be.r,Be.g,Be.b,At),x.copy(Be),A=At),h=L,b=!1}function Ge(L,ue){L.side===Bi?Ae(t.CULL_FACE):J(t.CULL_FACE);let Q=L.side===Sn;ue&&(Q=!Q),Ut(Q),L.blending===lo&&L.transparent===!1?ht(Gi):ht(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const xe=L.stencilWrite;a.setTest(xe),xe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),F(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(L){P!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),P=L)}function _t(L){L!==U3?(J(t.CULL_FACE),L!==I&&(L===Qv?t.cullFace(t.BACK):L===F3?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),I=L}function En(L){L!==W&&(k&&t.lineWidth(L),W=L)}function F(L,ue,Q){L?(J(t.POLYGON_OFFSET_FILL),(Y!==ue||N!==Q)&&(Y=ue,N=Q,o.getReversed()&&(ue=-ue),t.polygonOffset(ue,Q))):Ae(t.POLYGON_OFFSET_FILL)}function Ft(L){L?J(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function Xe(L){L===void 0&&(L=t.TEXTURE0+B-1),q!==L&&(t.activeTexture(L),q=L)}function ut(L,ue,Q){Q===void 0&&(q===null?Q=t.TEXTURE0+B-1:Q=q);let xe=re[Q];xe===void 0&&(xe={type:void 0,texture:void 0},re[Q]=xe),(xe.type!==L||xe.texture!==ue)&&(q!==Q&&(t.activeTexture(Q),q=Q),t.bindTexture(L,ue||oe[L]),xe.type=L,xe.texture=ue)}function pe(){const L=re[q];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Mt(){try{t.compressedTexImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function M(){try{t.texSubImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function V(){try{t.texSubImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function ee(){try{t.compressedTexSubImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function ie(){try{t.compressedTexSubImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function ae(){try{t.texStorage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function he(){try{t.texStorage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function K(){try{t.texImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function te(){try{t.texImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function _e(L){return d[L]!==void 0?d[L]:t.getParameter(L)}function Se(L,ue){d[L]!==ue&&(t.pixelStorei(L,ue),d[L]=ue)}function fe(L){Oe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Oe.copy(L))}function le(L){Pe.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Pe.copy(L))}function Ne(L,ue){let Q=u.get(ue);Q===void 0&&(Q=new WeakMap,u.set(ue,Q));let xe=Q.get(L);xe===void 0&&(xe=t.getUniformBlockIndex(ue,L.name),Q.set(L,xe))}function Ve(L,ue){const xe=u.get(ue).get(L);l.get(ue)!==xe&&(t.uniformBlockBinding(ue,xe,L.__bindingPointIndex),l.set(ue,xe))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),c={},d={},q=null,re={},f={},p=new WeakMap,v=[],y=null,m=!1,h=null,g=null,_=null,S=null,w=null,T=null,R=null,x=new Je(0,0,0),A=0,b=!1,P=null,I=null,W=null,Y=null,N=null,Oe.set(0,0,t.canvas.width,t.canvas.height),Pe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:Ae,bindFramebuffer:Ue,drawBuffers:De,useProgram:vt,setBlending:ht,setMaterial:Ge,setFlipSided:Ut,setCullFace:_t,setLineWidth:En,setPolygonOffset:F,setScissorTest:Ft,activeTexture:Xe,bindTexture:ut,unbindTexture:pe,compressedTexImage2D:Mt,compressedTexImage3D:C,texImage2D:K,texImage3D:te,pixelStorei:Se,getParameter:_e,updateUBOMapping:Ne,uniformBlockBinding:Ve,texStorage2D:ae,texStorage3D:he,texSubImage2D:M,texSubImage3D:V,compressedTexSubImage2D:ee,compressedTexSubImage3D:ie,scissor:fe,viewport:le,reset:Qe}}function FU(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new et,c=new WeakMap,d=new Set;let f;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,M){return v?new OffscreenCanvas(C,M):tc("canvas")}function m(C,M,V){let ee=1;const ie=Mt(C);if((ie.width>V||ie.height>V)&&(ee=V/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ae=Math.floor(ee*ie.width),he=Math.floor(ee*ie.height);f===void 0&&(f=y(ae,he));const K=M?y(ae,he):f;return K.width=ae,K.height=he,K.getContext("2d").drawImage(C,0,0,ae,he),Le("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ae+"x"+he+")."),K}else return"data"in C&&Le("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function h(C){return C.generateMipmaps}function g(C){t.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(C,M,V,ee,ie,ae=!1){if(C!==null){if(t[C]!==void 0)return t[C];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let he;ee&&(he=e.get("EXT_texture_norm16"),he||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=M;if(M===t.RED&&(V===t.FLOAT&&(K=t.R32F),V===t.HALF_FLOAT&&(K=t.R16F),V===t.UNSIGNED_BYTE&&(K=t.R8),V===t.UNSIGNED_SHORT&&he&&(K=he.R16_EXT),V===t.SHORT&&he&&(K=he.R16_SNORM_EXT)),M===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.R8UI),V===t.UNSIGNED_SHORT&&(K=t.R16UI),V===t.UNSIGNED_INT&&(K=t.R32UI),V===t.BYTE&&(K=t.R8I),V===t.SHORT&&(K=t.R16I),V===t.INT&&(K=t.R32I)),M===t.RG&&(V===t.FLOAT&&(K=t.RG32F),V===t.HALF_FLOAT&&(K=t.RG16F),V===t.UNSIGNED_BYTE&&(K=t.RG8),V===t.UNSIGNED_SHORT&&he&&(K=he.RG16_EXT),V===t.SHORT&&he&&(K=he.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.RG8UI),V===t.UNSIGNED_SHORT&&(K=t.RG16UI),V===t.UNSIGNED_INT&&(K=t.RG32UI),V===t.BYTE&&(K=t.RG8I),V===t.SHORT&&(K=t.RG16I),V===t.INT&&(K=t.RG32I)),M===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.RGB8UI),V===t.UNSIGNED_SHORT&&(K=t.RGB16UI),V===t.UNSIGNED_INT&&(K=t.RGB32UI),V===t.BYTE&&(K=t.RGB8I),V===t.SHORT&&(K=t.RGB16I),V===t.INT&&(K=t.RGB32I)),M===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),V===t.UNSIGNED_INT&&(K=t.RGBA32UI),V===t.BYTE&&(K=t.RGBA8I),V===t.SHORT&&(K=t.RGBA16I),V===t.INT&&(K=t.RGBA32I)),M===t.RGB&&(V===t.UNSIGNED_SHORT&&he&&(K=he.RGB16_EXT),V===t.SHORT&&he&&(K=he.RGB16_SNORM_EXT),V===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),M===t.RGBA){const te=ae?Ju:$e.getTransfer(ie);V===t.FLOAT&&(K=t.RGBA32F),V===t.HALF_FLOAT&&(K=t.RGBA16F),V===t.UNSIGNED_BYTE&&(K=te===tt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT&&he&&(K=he.RGBA16_EXT),V===t.SHORT&&he&&(K=he.RGBA16_SNORM_EXT),V===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function w(C,M){let V;return C?M===null||M===Ri||M===Ba?V=t.DEPTH24_STENCIL8:M===xi?V=t.DEPTH32F_STENCIL8:M===Oa&&(V=t.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ri||M===Ba?V=t.DEPTH_COMPONENT24:M===xi?V=t.DEPTH_COMPONENT32F:M===Oa&&(V=t.DEPTH_COMPONENT16),V}function T(C,M){return h(C)===!0||C.isFramebufferTexture&&C.minFilter!==Yt&&C.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){const M=C.target;M.removeEventListener("dispose",R),A(M),M.isVideoTexture&&c.delete(M),M.isHTMLTexture&&d.delete(M)}function x(C){const M=C.target;M.removeEventListener("dispose",x),P(M)}function A(C){const M=i.get(C);if(M.__webglInit===void 0)return;const V=C.source,ee=p.get(V);if(ee){const ie=ee[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(C),Object.keys(ee).length===0&&p.delete(V)}i.remove(C)}function b(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const V=C.source,ee=p.get(V);delete ee[M.__cacheKey],o.memory.textures--}function P(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ie=0;ie<M.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(M.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=C.textures;for(let ee=0,ie=V.length;ee<ie;ee++){const ae=i.get(V[ee]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),o.memory.textures--),i.remove(V[ee])}i.remove(C)}let I=0;function W(){I=0}function Y(){return I}function N(C){I=C}function B(){const C=I;return C>=r.maxTextures&&Le("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),I+=1,C}function k(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function U(C,M){const V=i.get(C);if(C.isVideoTexture&&ut(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){const ee=C.image;if(ee===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(V,C,M);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+M)}function j(C,M){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Ae(V,C,M);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+M)}function q(C,M){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Ae(V,C,M);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+M)}function re(C,M){const V=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){Ue(V,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+M)}const ce={[Fh]:t.REPEAT,[zi]:t.CLAMP_TO_EDGE,[Oh]:t.MIRRORED_REPEAT},Ie={[Yt]:t.NEAREST,[rD]:t.NEAREST_MIPMAP_NEAREST,[Ml]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[bf]:t.LINEAR_MIPMAP_NEAREST,[rs]:t.LINEAR_MIPMAP_LINEAR},Oe={[aD]:t.NEVER,[dD]:t.ALWAYS,[lD]:t.LESS,[Km]:t.LEQUAL,[uD]:t.EQUAL,[Zm]:t.GEQUAL,[cD]:t.GREATER,[fD]:t.NOTEQUAL};function Pe(C,M){if(M.type===xi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===rn||M.magFilter===bf||M.magFilter===Ml||M.magFilter===rs||M.minFilter===rn||M.minFilter===bf||M.minFilter===Ml||M.minFilter===rs)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,ce[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,ce[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,ce[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Ie[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Ie[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Yt||M.minFilter!==Ml&&M.minFilter!==rs||M.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Z(C,M){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const ee=M.source;let ie=p.get(ee);ie===void 0&&(ie={},p.set(ee,ie));const ae=k(M);if(ae!==C.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[ae].usedTimes++;const he=ie[C.__cacheKey];he!==void 0&&(ie[C.__cacheKey].usedTimes--,he.usedTimes===0&&b(M)),C.__cacheKey=ae,C.__webglTexture=ie[ae].texture}return V}function oe(C,M,V){return Math.floor(Math.floor(C/V)/M)}function J(C,M,V,ee){const ae=C.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,V,ee,M.data);else{ae.sort((Se,fe)=>Se.start-fe.start);let he=0;for(let Se=1;Se<ae.length;Se++){const fe=ae[he],le=ae[Se],Ne=fe.start+fe.count,Ve=oe(le.start,M.width,4),Qe=oe(fe.start,M.width,4);le.start<=Ne+1&&Ve===Qe&&oe(le.start+le.count-1,M.width,4)===Ve?fe.count=Math.max(fe.count,le.start+le.count-fe.start):(++he,ae[he]=le)}ae.length=he+1;const K=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),_e=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Se=0,fe=ae.length;Se<fe;Se++){const le=ae[Se],Ne=Math.floor(le.start/4),Ve=Math.ceil(le.count/4),Qe=Ne%M.width,L=Math.floor(Ne/M.width),ue=Ve,Q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,Qe,L,ue,Q,V,ee,M.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,K),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,_e)}}function Ae(C,M,V){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const ie=Z(C,M),ae=M.source;n.bindTexture(ee,C.__webglTexture,t.TEXTURE0+V);const he=i.get(ae);if(ae.version!==he.__version||ie===!0){if(n.activeTexture(t.TEXTURE0+V),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Q=$e.getPrimaries($e.workingColorSpace),xe=M.colorSpace===vr?null:$e.getPrimaries(M.colorSpace),de=M.colorSpace===vr||Q===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let te=m(M.image,!1,r.maxTextureSize);te=pe(M,te);const _e=s.convert(M.format,M.colorSpace),Se=s.convert(M.type);let fe=S(M.internalFormat,_e,Se,M.normalized,M.colorSpace,M.isVideoTexture);Pe(ee,M);let le;const Ne=M.mipmaps,Ve=M.isVideoTexture!==!0,Qe=he.__version===void 0||ie===!0,L=ae.dataReady,ue=T(M,te);if(M.isDepthTexture)fe=w(M.format===ss,M.type),Qe&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,fe,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,fe,te.width,te.height,0,_e,Se,null));else if(M.isDataTexture)if(Ne.length>0){Ve&&Qe&&n.texStorage2D(t.TEXTURE_2D,ue,fe,Ne[0].width,Ne[0].height);for(let Q=0,xe=Ne.length;Q<xe;Q++)le=Ne[Q],Ve?L&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,le.width,le.height,_e,Se,le.data):n.texImage2D(t.TEXTURE_2D,Q,fe,le.width,le.height,0,_e,Se,le.data);M.generateMipmaps=!1}else Ve?(Qe&&n.texStorage2D(t.TEXTURE_2D,ue,fe,te.width,te.height),L&&J(M,te,_e,Se)):n.texImage2D(t.TEXTURE_2D,0,fe,te.width,te.height,0,_e,Se,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,fe,Ne[0].width,Ne[0].height,te.depth);for(let Q=0,xe=Ne.length;Q<xe;Q++)if(le=Ne[Q],M.format!==ii)if(_e!==null)if(Ve){if(L)if(M.layerUpdates.size>0){const de=A_(le.width,le.height,M.format,M.type);for(const ne of M.layerUpdates){const Ce=le.data.subarray(ne*de/le.data.BYTES_PER_ELEMENT,(ne+1)*de/le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,ne,le.width,le.height,1,_e,Ce)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,te.depth,_e,le.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,fe,le.width,le.height,te.depth,0,le.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,te.depth,_e,Se,le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,fe,le.width,le.height,te.depth,0,_e,Se,le.data)}else{Ve&&Qe&&n.texStorage2D(t.TEXTURE_2D,ue,fe,Ne[0].width,Ne[0].height);for(let Q=0,xe=Ne.length;Q<xe;Q++)le=Ne[Q],M.format!==ii?_e!==null?Ve?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,le.width,le.height,_e,le.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,fe,le.width,le.height,0,le.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?L&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,le.width,le.height,_e,Se,le.data):n.texImage2D(t.TEXTURE_2D,Q,fe,le.width,le.height,0,_e,Se,le.data)}else if(M.isDataArrayTexture)if(Ve){if(Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,fe,te.width,te.height,te.depth),L)if(M.layerUpdates.size>0){const Q=A_(te.width,te.height,M.format,M.type);for(const xe of M.layerUpdates){const de=te.data.subarray(xe*Q/te.data.BYTES_PER_ELEMENT,(xe+1)*Q/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,xe,te.width,te.height,1,_e,Se,de)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,_e,Se,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,fe,te.width,te.height,te.depth,0,_e,Se,te.data);else if(M.isData3DTexture)Ve?(Qe&&n.texStorage3D(t.TEXTURE_3D,ue,fe,te.width,te.height,te.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,_e,Se,te.data)):n.texImage3D(t.TEXTURE_3D,0,fe,te.width,te.height,te.depth,0,_e,Se,te.data);else if(M.isFramebufferTexture){if(Qe)if(Ve)n.texStorage2D(t.TEXTURE_2D,ue,fe,te.width,te.height);else{let Q=te.width,xe=te.height;for(let de=0;de<ue;de++)n.texImage2D(t.TEXTURE_2D,de,fe,Q,xe,0,_e,Se,null),Q>>=1,xe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const Q=t.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),te.parentNode!==Q){Q.appendChild(te),d.add(M),Q.onpaint=Be=>{const At=Be.changedElements;for(const rt of d)At.includes(rt.image)&&(rt.needsUpdate=!0)},Q.requestPaint();return}const xe=0,de=t.RGBA,ne=t.RGBA,Ce=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,xe,de,ne,Ce,te),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Ve&&Qe){const Q=Mt(Ne[0]);n.texStorage2D(t.TEXTURE_2D,ue,fe,Q.width,Q.height)}for(let Q=0,xe=Ne.length;Q<xe;Q++)le=Ne[Q],Ve?L&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,_e,Se,le):n.texImage2D(t.TEXTURE_2D,Q,fe,_e,Se,le);M.generateMipmaps=!1}else if(Ve){if(Qe){const Q=Mt(te);n.texStorage2D(t.TEXTURE_2D,ue,fe,Q.width,Q.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Se,te)}else n.texImage2D(t.TEXTURE_2D,0,fe,_e,Se,te);h(M)&&g(ee),he.__version=ae.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ue(C,M,V){if(M.image.length!==6)return;const ee=Z(C,M),ie=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+V);const ae=i.get(ie);if(ie.version!==ae.__version||ee===!0){n.activeTexture(t.TEXTURE0+V);const he=$e.getPrimaries($e.workingColorSpace),K=M.colorSpace===vr?null:$e.getPrimaries(M.colorSpace),te=M.colorSpace===vr||he===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const _e=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,fe=[];for(let ne=0;ne<6;ne++)!_e&&!Se?fe[ne]=m(M.image[ne],!0,r.maxCubemapSize):fe[ne]=Se?M.image[ne].image:M.image[ne],fe[ne]=pe(M,fe[ne]);const le=fe[0],Ne=s.convert(M.format,M.colorSpace),Ve=s.convert(M.type),Qe=S(M.internalFormat,Ne,Ve,M.normalized,M.colorSpace),L=M.isVideoTexture!==!0,ue=ae.__version===void 0||ee===!0,Q=ie.dataReady;let xe=T(M,le);Pe(t.TEXTURE_CUBE_MAP,M);let de;if(_e){L&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Qe,le.width,le.height);for(let ne=0;ne<6;ne++){de=fe[ne].mipmaps;for(let Ce=0;Ce<de.length;Ce++){const Be=de[Ce];M.format!==ii?Ne!==null?L?Q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,Be.width,Be.height,Ne,Be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,Qe,Be.width,Be.height,0,Be.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,Be.width,Be.height,Ne,Ve,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,Qe,Be.width,Be.height,0,Ne,Ve,Be.data)}}}else{if(de=M.mipmaps,L&&ue){de.length>0&&xe++;const ne=Mt(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Qe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Se){L?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,fe[ne].width,fe[ne].height,Ne,Ve,fe[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Qe,fe[ne].width,fe[ne].height,0,Ne,Ve,fe[ne].data);for(let Ce=0;Ce<de.length;Ce++){const At=de[Ce].image[ne].image;L?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,At.width,At.height,Ne,Ve,At.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,Qe,At.width,At.height,0,Ne,Ve,At.data)}}else{L?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ne,Ve,fe[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Qe,Ne,Ve,fe[ne]);for(let Ce=0;Ce<de.length;Ce++){const Be=de[Ce];L?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,Ne,Ve,Be.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,Qe,Ne,Ve,Be.image[ne])}}}h(M)&&g(t.TEXTURE_CUBE_MAP),ae.__version=ie.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function De(C,M,V,ee,ie,ae){const he=s.convert(V.format,V.colorSpace),K=s.convert(V.type),te=S(V.internalFormat,he,K,V.normalized,V.colorSpace),_e=i.get(M),Se=i.get(V);if(Se.__renderTarget=M,!_e.__hasExternalTextures){const fe=Math.max(1,M.width>>ae),le=Math.max(1,M.height>>ae);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,ae,te,fe,le,M.depth,0,he,K,null):n.texImage2D(ie,ae,te,fe,le,0,he,K,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ie,Se.__webglTexture,0,Ft(M)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ie,Se.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function vt(C,M,V){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const ee=M.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,ae=w(M.stencilBuffer,ie),he=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Xe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ft(M),ae,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ft(M),ae,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ae,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,C)}else{const ee=M.textures;for(let ie=0;ie<ee.length;ie++){const ae=ee[ie],he=s.convert(ae.format,ae.colorSpace),K=s.convert(ae.type),te=S(ae.internalFormat,he,K,ae.normalized,ae.colorSpace);Xe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ft(M),te,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ft(M),te,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,te,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function je(C,M,V){const ee=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(M.depthTexture);if(ie.__renderTarget=M,(!ie.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),ie.__webglTexture===void 0){ie.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),Pe(t.TEXTURE_CUBE_MAP,M.depthTexture);const _e=s.convert(M.depthTexture.format),Se=s.convert(M.depthTexture.type);let fe;M.depthTexture.format===Zi?fe=t.DEPTH_COMPONENT24:M.depthTexture.format===ss&&(fe=t.DEPTH24_STENCIL8);for(let le=0;le<6;le++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,fe,M.width,M.height,0,_e,Se,null)}}else U(M.depthTexture,0);const ae=ie.__webglTexture,he=Ft(M),K=ee?t.TEXTURE_CUBE_MAP_POSITIVE_X+V:t.TEXTURE_2D,te=M.depthTexture.format===ss?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===Zi)Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,K,ae,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,te,K,ae,0);else if(M.depthTexture.format===ss)Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,K,ae,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,te,K,ae,0);else throw new Error("Unknown depthTexture format")}function it(C){const M=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const ee=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=ee}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let ee=0;ee<6;ee++)je(M.__webglFramebuffer[ee],C,ee);else{const ee=C.texture.mipmaps;ee&&ee.length>0?je(M.__webglFramebuffer[0],C,0):je(M.__webglFramebuffer,C,0)}else if(V){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=t.createRenderbuffer(),vt(M.__webglDepthbuffer[ee],C,!1);else{const ie=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,ae)}}else{const ee=C.texture.mipmaps;if(ee&&ee.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),vt(M.__webglDepthbuffer,C,!1);else{const ie=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ht(C,M,V){const ee=i.get(C);M!==void 0&&De(ee.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&it(C)}function Ge(C){const M=C.texture,V=i.get(C),ee=i.get(M);C.addEventListener("dispose",x);const ie=C.textures,ae=C.isWebGLCubeRenderTarget===!0,he=ie.length>1;if(he||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,o.memory.textures++),ae){V.__webglFramebuffer=[];for(let K=0;K<6;K++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[K]=[];for(let te=0;te<M.mipmaps.length;te++)V.__webglFramebuffer[K][te]=t.createFramebuffer()}else V.__webglFramebuffer[K]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let K=0;K<M.mipmaps.length;K++)V.__webglFramebuffer[K]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(he)for(let K=0,te=ie.length;K<te;K++){const _e=i.get(ie[K]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Xe(C)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let K=0;K<ie.length;K++){const te=ie[K];V.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[K]);const _e=s.convert(te.format,te.colorSpace),Se=s.convert(te.type),fe=S(te.internalFormat,_e,Se,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),le=Ft(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,le,fe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,V.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),vt(V.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Pe(t.TEXTURE_CUBE_MAP,M);for(let K=0;K<6;K++)if(M.mipmaps&&M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)De(V.__webglFramebuffer[K][te],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,te);else De(V.__webglFramebuffer[K],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);h(M)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){for(let K=0,te=ie.length;K<te;K++){const _e=ie[K],Se=i.get(_e);let fe=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,Se.__webglTexture),Pe(fe,_e),De(V.__webglFramebuffer,C,_e,t.COLOR_ATTACHMENT0+K,fe,0),h(_e)&&g(fe)}n.unbindTexture()}else{let K=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(K,ee.__webglTexture),Pe(K,M),M.mipmaps&&M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)De(V.__webglFramebuffer[te],C,M,t.COLOR_ATTACHMENT0,K,te);else De(V.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,K,0);h(M)&&g(K),n.unbindTexture()}C.depthBuffer&&it(C)}function Ut(C){const M=C.textures;for(let V=0,ee=M.length;V<ee;V++){const ie=M[V];if(h(ie)){const ae=_(C),he=i.get(ie).__webglTexture;n.bindTexture(ae,he),g(ae),n.unbindTexture()}}}const _t=[],En=[];function F(C){if(C.samples>0){if(Xe(C)===!1){const M=C.textures,V=C.width,ee=C.height;let ie=t.COLOR_BUFFER_BIT;const ae=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(C),K=M.length>1;if(K)for(let _e=0;_e<M.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const te=C.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[_e]);const Se=i.get(M[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,V,ee,0,0,V,ee,ie,t.NEAREST),l===!0&&(_t.length=0,En.length=0,_t.push(t.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(_t.push(ae),En.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,En)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,_t))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let _e=0;_e<M.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,he.__webglColorRenderbuffer[_e]);const Se=i.get(M[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ft(C){return Math.min(r.maxSamples,C.samples)}function Xe(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ut(C){const M=o.render.frame;c.get(C)!==M&&(c.set(C,M),C.update())}function pe(C,M){const V=C.colorSpace,ee=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Qu&&V!==vr&&($e.getTransfer(V)===tt?(ee!==ii||ie!==kn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",V)),M}function Mt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.getTextureUnits=Y,this.setTextureUnits=N,this.setTexture2D=U,this.setTexture2DArray=j,this.setTexture3D=q,this.setTextureCube=re,this.rebindTextures=ht,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function OU(t,e){function n(i,r=vr){let s;const o=$e.getTransfer(r);if(i===kn)return t.UNSIGNED_BYTE;if(i===jm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Xm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===AE)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===CE)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===TE)return t.BYTE;if(i===wE)return t.SHORT;if(i===Oa)return t.UNSIGNED_SHORT;if(i===Wm)return t.INT;if(i===Ri)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===Ki)return t.HALF_FLOAT;if(i===RE)return t.ALPHA;if(i===bE)return t.RGB;if(i===ii)return t.RGBA;if(i===Zi)return t.DEPTH_COMPONENT;if(i===ss)return t.DEPTH_STENCIL;if(i===PE)return t.RED;if(i===$m)return t.RED_INTEGER;if(i===gs)return t.RG;if(i===Ym)return t.RG_INTEGER;if(i===qm)return t.RGBA_INTEGER;if(i===du||i===hu||i===pu||i===mu)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===du)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===du)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bh||i===kh||i===Vh||i===zh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hh||i===Gh||i===Wh||i===jh||i===Xh||i===Ku||i===$h)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hh||i===Gh)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===jh)return s.COMPRESSED_R11_EAC;if(i===Xh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ku)return s.COMPRESSED_RG11_EAC;if(i===$h)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yh||i===qh||i===Kh||i===Zh||i===Qh||i===Jh||i===ep||i===tp||i===np||i===ip||i===rp||i===sp||i===op||i===ap)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ep)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tp)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===np)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ip)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rp)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sp)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===op)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ap)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lp||i===up||i===cp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===lp)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===up)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fp||i===dp||i===Zu||i===hp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===fp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ba?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const BU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kU=`
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

}`;class VU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new VE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new li({vertexShader:BU,fragmentShader:kU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bi(new Za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zU extends ys{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,v=null;const y=typeof XRWebGLBinding<"u",m=new VU,h={},g=n.getContextAttributes();let _=null,S=null;const w=[],T=[],R=new et;let x=null;const A=new ti;A.viewport=new Pt;const b=new ti;b.viewport=new Pt;const P=[A,b],I=new ZD;let W=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=w[Z];return oe===void 0&&(oe=new Of,w[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=w[Z];return oe===void 0&&(oe=new Of,w[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=w[Z];return oe===void 0&&(oe=new Of,w[Z]=oe),oe.getHandSpace()};function N(Z){const oe=T.indexOf(Z.inputSource);if(oe===-1)return;const J=w[oe];J!==void 0&&(J.update(Z.inputSource,Z.frame,u||o),J.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",k);for(let Z=0;Z<w.length;Z++){const oe=T[Z];oe!==null&&(T[Z]=null,w[Z].disconnect(oe))}W=null,Y=null,m.reset();for(const Z in h)delete h[Z];e.setRenderTarget(_),p=null,f=null,d=null,r=null,S=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",B),r.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,Ae=null,Ue=null;g.depth&&(Ue=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=g.stencil?ss:Zi,Ae=g.stencil?Ba:Ri);const De={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new wi(f.textureWidth,f.textureHeight,{format:ii,type:kn,depthTexture:new Eo(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new wi(p.framebufferWidth,p.framebufferHeight,{format:ii,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(Z){for(let oe=0;oe<Z.removed.length;oe++){const J=Z.removed[oe],Ae=T.indexOf(J);Ae>=0&&(T[Ae]=null,w[Ae].disconnect(J))}for(let oe=0;oe<Z.added.length;oe++){const J=Z.added[oe];let Ae=T.indexOf(J);if(Ae===-1){for(let De=0;De<w.length;De++)if(De>=T.length){T.push(J),Ae=De;break}else if(T[De]===null){T[De]=J,Ae=De;break}if(Ae===-1)break}const Ue=w[Ae];Ue&&Ue.connect(J)}}const U=new X,j=new X;function q(Z,oe,J){U.setFromMatrixPosition(oe.matrixWorld),j.setFromMatrixPosition(J.matrixWorld);const Ae=U.distanceTo(j),Ue=oe.projectionMatrix.elements,De=J.projectionMatrix.elements,vt=Ue[14]/(Ue[10]-1),je=Ue[14]/(Ue[10]+1),it=(Ue[9]+1)/Ue[5],ht=(Ue[9]-1)/Ue[5],Ge=(Ue[8]-1)/Ue[0],Ut=(De[8]+1)/De[0],_t=vt*Ge,En=vt*Ut,F=Ae/(-Ge+Ut),Ft=F*-Ge;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ft),Z.translateZ(F),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ue[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Xe=vt+F,ut=je+F,pe=_t-Ft,Mt=En+(Ae-Ft),C=it*je/ut*Xe,M=ht*je/ut*Xe;Z.projectionMatrix.makePerspective(pe,Mt,C,M,Xe,ut),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function re(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let oe=Z.near,J=Z.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(J=m.depthFar)),I.near=b.near=A.near=oe,I.far=b.far=A.far=J,(W!==I.near||Y!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),W=I.near,Y=I.far),I.layers.mask=Z.layers.mask|6,A.layers.mask=I.layers.mask&-5,b.layers.mask=I.layers.mask&-3;const Ae=Z.parent,Ue=I.cameras;re(I,Ae);for(let De=0;De<Ue.length;De++)re(Ue[De],Ae);Ue.length===2?q(I,A,b):I.projectionMatrix.copy(A.projectionMatrix),ce(Z,I,Ae)};function ce(Z,oe,J){J===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(J.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=mp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Z){return h[Z]};let Ie=null;function Oe(Z,oe){if(c=oe.getViewerPose(u||o),v=oe,c!==null){const J=c.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ae=!1;J.length!==I.cameras.length&&(I.cameras.length=0,Ae=!0);for(let je=0;je<J.length;je++){const it=J[je];let ht=null;if(p!==null)ht=p.getViewport(it);else{const Ut=d.getViewSubImage(f,it);ht=Ut.viewport,je===0&&(e.setRenderTargetTextures(S,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(S))}let Ge=P[je];Ge===void 0&&(Ge=new ti,Ge.layers.enable(je),Ge.viewport=new Pt,P[je]=Ge),Ge.matrix.fromArray(it.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(it.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ht.x,ht.y,ht.width,ht.height),je===0&&(I.matrix.copy(Ge.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ae===!0&&I.cameras.push(Ge)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const je=d.getDepthInformation(J[0]);je&&je.isValid&&je.texture&&m.init(je,r.renderState)}if(Ue&&Ue.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let je=0;je<J.length;je++){const it=J[je].camera;if(it){let ht=h[it];ht||(ht=new VE,h[it]=ht);const Ge=d.getCameraImage(it);ht.sourceTexture=Ge}}}}for(let J=0;J<w.length;J++){const Ae=T[J],Ue=w[J];Ae!==null&&Ue!==void 0&&Ue.update(Ae,oe,u||o)}Ie&&Ie(Z,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),v=null}const Pe=new GE;Pe.setAnimationLoop(Oe),this.setAnimationLoop=function(Z){Ie=Z},this.dispose=function(){}}}const HU=new Vt,KE=new Fe;KE.set(-1,0,0,0,1,0,0,0,1);function GU(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,zE(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,_,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,g,_):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Sn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Sn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),_=g.envMap,S=g.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(HU.makeRotationFromEuler(S)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(KE),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=_*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WU(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const S=_.program;i.uniformBlockBinding(g,S)}function u(g,_){let S=r[g.id];S===void 0&&(v(g),S=c(g),r[g.id]=S,g.addEventListener("dispose",m));const w=_.program;i.updateUBOMapping(g,w);const T=e.render.frame;s[g.id]!==T&&(f(g),s[g.id]=T)}function c(g){const _=d();g.__bindingPointIndex=_;const S=t.createBuffer(),w=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,w,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=r[g.id],S=g.uniforms,w=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,R=S.length;T<R;T++){const x=Array.isArray(S[T])?S[T]:[S[T]];for(let A=0,b=x.length;A<b;A++){const P=x[A];if(p(P,T,A,w)===!0){const I=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let N=0;N<W.length;N++){const B=W[N],k=y(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,I+Y,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):ArrayBuffer.isView(B)?P.__data.set(new B.constructor(B.buffer,B.byteOffset,P.__data.length)):(B.toArray(P.__data,Y),Y+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,S,w){const T=g.value,R=_+"_"+S;if(w[R]===void 0)return typeof T=="number"||typeof T=="boolean"?w[R]=T:ArrayBuffer.isView(T)?w[R]=T.slice():w[R]=T.clone(),!0;{const x=w[R];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return w[R]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function v(g){const _=g.uniforms;let S=0;const w=16;for(let R=0,x=_.length;R<x;R++){const A=Array.isArray(_[R])?_[R]:[_[R]];for(let b=0,P=A.length;b<P;b++){const I=A[b],W=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,N=W.length;Y<N;Y++){const B=W[Y],k=y(B),U=S%w,j=U%k.boundary,q=U+j;S+=j,q!==0&&w-q<k.storage&&(S+=w-q),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=k.storage}}}const T=S%w;return T>0&&(S+=w-T),g.__size=S,g.__cache={},this}function y(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(_.boundary=16,_.storage=g.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}const jU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hi=null;function XU(){return hi===null&&(hi=new BD(jU,16,16,gs,Ki),hi.name="DFG_LUT",hi.minFilter=rn,hi.magFilter=rn,hi.wrapS=zi,hi.wrapT=zi,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class $U{constructor(e={}){const{canvas:n=pD(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=kn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const y=p,m=new Set([qm,Ym,$m]),h=new Set([kn,Ri,Oa,Ba,jm,Xm]),g=new Uint32Array(4),_=new Int32Array(4),S=new X;let w=null,T=null;const R=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1,I=null;this._outputColorSpace=Fn;let W=0,Y=0,N=null,B=-1,k=null;const U=new Pt,j=new Pt;let q=null;const re=new Je(0);let ce=0,Ie=n.width,Oe=n.height,Pe=1,Z=null,oe=null;const J=new Pt(0,0,Ie,Oe),Ae=new Pt(0,0,Ie,Oe);let Ue=!1;const De=new BE;let vt=!1,je=!1;const it=new Vt,ht=new X,Ge=new Pt,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function En(){return N===null?Pe:1}let F=i;function Ft(E,O){return n.getContext(E,O)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gm}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",Ce,!1),n.addEventListener("webglcontextcreationerror",Be,!1),F===null){const O="webgl2";if(F=Ft(O,E),F===null)throw Ft(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ke("WebGLRenderer: "+E.message),E}let Xe,ut,pe,Mt,C,M,V,ee,ie,ae,he,K,te,_e,Se,fe,le,Ne,Ve,Qe,L,ue,Q;function xe(){Xe=new XI(F),Xe.init(),L=new OU(F,Xe),ut=new BI(F,Xe,e,L),pe=new UU(F,Xe),ut.reversedDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),Mt=new qI(F),C=new SU,M=new FU(F,Xe,pe,C,ut,L,Mt),V=new jI(b),ee=new JD(F),ue=new FI(F,ee),ie=new $I(F,ee,Mt,ue),ae=new ZI(F,ie,ee,ue,Mt),Ne=new KI(F,ut,M),Se=new kI(C),he=new yU(b,V,Xe,ut,ue,Se),K=new GU(b,C),te=new EU,_e=new bU(Xe),le=new UI(b,V,pe,ae,v,l),fe=new NU(b,ae,ut),Q=new WU(F,Mt,ut,pe),Ve=new OI(F,Xe,Mt),Qe=new YI(F,Xe,Mt),Mt.programs=he.programs,b.capabilities=ut,b.extensions=Xe,b.properties=C,b.renderLists=te,b.shadowMap=fe,b.state=pe,b.info=Mt}xe(),y!==kn&&(A=new JI(y,n.width,n.height,r,s));const de=new zU(b,F);this.xr=de,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(E){E!==void 0&&(Pe=E,this.setSize(Ie,Oe,!1))},this.getSize=function(E){return E.set(Ie,Oe)},this.setSize=function(E,O,$=!0){if(de.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=E,Oe=O,n.width=Math.floor(E*Pe),n.height=Math.floor(O*Pe),$===!0&&(n.style.width=E+"px",n.style.height=O+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Ie*Pe,Oe*Pe).floor()},this.setDrawingBufferSize=function(E,O,$){Ie=E,Oe=O,Pe=$,n.width=Math.floor(E*$),n.height=Math.floor(O*$),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(y===kn){Ke("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Le("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(U)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,O,$,H){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,O,$,H),pe.viewport(U.copy(J).multiplyScalar(Pe).round())},this.getScissor=function(E){return E.copy(Ae)},this.setScissor=function(E,O,$,H){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,O,$,H),pe.scissor(j.copy(Ae).multiplyScalar(Pe).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(E){pe.setScissorTest(Ue=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,$=!0){let H=0;if(E){let G=!1;if(N!==null){const ve=N.texture.format;G=m.has(ve)}if(G){const ve=N.texture.type,Me=h.has(ve),ge=le.getClearColor(),we=le.getClearAlpha(),Re=ge.r,ke=ge.g,He=ge.b;Me?(g[0]=Re,g[1]=ke,g[2]=He,g[3]=we,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Re,_[1]=ke,_[2]=He,_[3]=we,F.clearBufferiv(F.COLOR,0,_))}else H|=F.COLOR_BUFFER_BIT}O&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",Ce,!1),n.removeEventListener("webglcontextcreationerror",Be,!1),le.dispose(),te.dispose(),_e.dispose(),C.dispose(),V.dispose(),ae.dispose(),ue.dispose(),Q.dispose(),he.dispose(),de.dispose(),de.removeEventListener("sessionstart",og),de.removeEventListener("sessionend",ag),zr.stop()};function ne(E){E.preventDefault(),a_("WebGLRenderer: Context Lost."),P=!0}function Ce(){a_("WebGLRenderer: Context Restored."),P=!1;const E=Mt.autoReset,O=fe.enabled,$=fe.autoUpdate,H=fe.needsUpdate,G=fe.type;xe(),Mt.autoReset=E,fe.enabled=O,fe.autoUpdate=$,fe.needsUpdate=H,fe.type=G}function Be(E){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function At(E){const O=E.target;O.removeEventListener("dispose",At),rt(O)}function rt(E){Pi(E),C.remove(E)}function Pi(E){const O=C.get(E).programs;O!==void 0&&(O.forEach(function($){he.releaseProgram($)}),E.isShaderMaterial&&he.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,$,H,G,ve){O===null&&(O=Ut);const Me=G.isMesh&&G.matrixWorld.determinant()<0,ge=JE(E,O,$,H,G);pe.setMaterial(H,Me);let we=$.index,Re=1;if(H.wireframe===!0){if(we=ie.getWireframeAttribute($),we===void 0)return;Re=2}const ke=$.drawRange,He=$.attributes.position;let be=ke.start*Re,st=(ke.start+ke.count)*Re;ve!==null&&(be=Math.max(be,ve.start*Re),st=Math.min(st,(ve.start+ve.count)*Re)),we!==null?(be=Math.max(be,0),st=Math.min(st,we.count)):He!=null&&(be=Math.max(be,0),st=Math.min(st,He.count));const Ct=st-be;if(Ct<0||Ct===1/0)return;ue.setup(G,H,ge,$,we);let Et,ot=Ve;if(we!==null&&(Et=ee.get(we),ot=Qe,ot.setIndex(Et)),G.isMesh)H.wireframe===!0?(pe.setLineWidth(H.wireframeLinewidth*En()),ot.setMode(F.LINES)):ot.setMode(F.TRIANGLES);else if(G.isLine){let Zt=H.linewidth;Zt===void 0&&(Zt=1),pe.setLineWidth(Zt*En()),G.isLineSegments?ot.setMode(F.LINES):G.isLineLoop?ot.setMode(F.LINE_LOOP):ot.setMode(F.LINE_STRIP)}else G.isPoints?ot.setMode(F.POINTS):G.isSprite&&ot.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Zt=G._multiDrawStarts,ye=G._multiDrawCounts,Tn=G._multiDrawCount,qe=we?ee.get(we).bytesPerElement:1,Nn=C.get(H).currentProgram.getUniforms();for(let ci=0;ci<Tn;ci++)Nn.setValue(F,"_gl_DrawID",ci),ot.render(Zt[ci]/qe,ye[ci])}else if(G.isInstancedMesh)ot.renderInstances(be,Ct,G.count);else if($.isInstancedBufferGeometry){const Zt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ye=Math.min($.instanceCount,Zt);ot.renderInstances(be,Ct,ye)}else ot.render(be,Ct)};function ui(E,O,$){E.transparent===!0&&E.side===Bi&&E.forceSinglePass===!1?(E.side=Sn,E.needsUpdate=!0,Ja(E,O,$),E.side=Fr,E.needsUpdate=!0,Ja(E,O,$),E.side=Bi):Ja(E,O,$)}this.compile=function(E,O,$=null){$===null&&($=E),T=_e.get($),T.init(O),x.push(T),$.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),E!==$&&E.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const H=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let Me=0;Me<ve.length;Me++){const ge=ve[Me];ui(ge,$,G),H.add(ge)}else ui(ve,$,G),H.add(ve)}),T=x.pop(),H},this.compileAsync=function(E,O,$=null){const H=this.compile(E,O,$);return new Promise(G=>{function ve(){if(H.forEach(function(Me){C.get(Me).currentProgram.isReady()&&H.delete(Me)}),H.size===0){G(E);return}setTimeout(ve,10)}Xe.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Uc=null;function ZE(E){Uc&&Uc(E)}function og(){zr.stop()}function ag(){zr.start()}const zr=new GE;zr.setAnimationLoop(ZE),typeof self<"u"&&zr.setContext(self),this.setAnimationLoop=function(E){Uc=E,de.setAnimationLoop(E),E===null?zr.stop():zr.start()},de.addEventListener("sessionstart",og),de.addEventListener("sessionend",ag),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(E,O);const $=de.enabled===!0&&de.isPresenting===!0,H=A!==null&&(N===null||$)&&A.begin(b,N);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(O),O=de.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,O,N),T=_e.get(E,x.length),T.init(O),T.state.textureUnits=M.getTextureUnits(),x.push(T),it.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),De.setFromProjectionMatrix(it,yi,O.reversedDepth),je=this.localClippingEnabled,vt=Se.init(this.clippingPlanes,je),w=te.get(E,R.length),w.init(),R.push(w),de.enabled===!0&&de.isPresenting===!0){const Me=b.xr.getDepthSensingMesh();Me!==null&&Fc(Me,O,-1/0,b.sortObjects)}Fc(E,O,0,b.sortObjects),w.finish(),b.sortObjects===!0&&w.sort(Z,oe),_t=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,_t&&le.addToRenderList(w,E),this.info.render.frame++,vt===!0&&Se.beginShadows();const G=T.state.shadowsArray;if(fe.render(G,E,O),vt===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&A.hasRenderPass())===!1){const Me=w.opaque,ge=w.transmissive;if(T.setupLights(),O.isArrayCamera){const we=O.cameras;if(ge.length>0)for(let Re=0,ke=we.length;Re<ke;Re++){const He=we[Re];ug(Me,ge,E,He)}_t&&le.render(E);for(let Re=0,ke=we.length;Re<ke;Re++){const He=we[Re];lg(w,E,He,He.viewport)}}else ge.length>0&&ug(Me,ge,E,O),_t&&le.render(E),lg(w,E,O)}N!==null&&Y===0&&(M.updateMultisampleRenderTarget(N),M.updateRenderTargetMipmap(N)),H&&A.end(b),E.isScene===!0&&E.onAfterRender(b,E,O),ue.resetDefaultState(),B=-1,k=null,x.pop(),x.length>0?(T=x[x.length-1],M.setTextureUnits(T.state.textureUnits),vt===!0&&Se.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,I!==null&&I.renderEnd()};function Fc(E,O,$,H){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||De.intersectsSprite(E)){H&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(it);const Me=ae.update(E),ge=E.material;ge.visible&&w.push(E,Me,ge,$,Ge.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||De.intersectsObject(E))){const Me=ae.update(E),ge=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ge.copy(Me.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(it)),Array.isArray(ge)){const we=Me.groups;for(let Re=0,ke=we.length;Re<ke;Re++){const He=we[Re],be=ge[He.materialIndex];be&&be.visible&&w.push(E,Me,be,$,Ge.z,He)}}else ge.visible&&w.push(E,Me,ge,$,Ge.z,null)}}const ve=E.children;for(let Me=0,ge=ve.length;Me<ge;Me++)Fc(ve[Me],O,$,H)}function lg(E,O,$,H){const{opaque:G,transmissive:ve,transparent:Me}=E;T.setupLightsView($),vt===!0&&Se.setGlobalState(b.clippingPlanes,$),H&&pe.viewport(U.copy(H)),G.length>0&&Qa(G,O,$),ve.length>0&&Qa(ve,O,$),Me.length>0&&Qa(Me,O,$),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function ug(E,O,$,H){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const be=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new wi(1,1,{generateMipmaps:!0,type:be?Ki:kn,minFilter:rs,samples:Math.max(4,ut.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const ve=T.state.transmissionRenderTarget[H.id],Me=H.viewport||U;ve.setSize(Me.z*b.transmissionResolutionScale,Me.w*b.transmissionResolutionScale);const ge=b.getRenderTarget(),we=b.getActiveCubeFace(),Re=b.getActiveMipmapLevel();b.setRenderTarget(ve),b.getClearColor(re),ce=b.getClearAlpha(),ce<1&&b.setClearColor(16777215,.5),b.clear(),_t&&le.render($);const ke=b.toneMapping;b.toneMapping=Ti;const He=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),vt===!0&&Se.setGlobalState(b.clippingPlanes,H),Qa(E,$,H),M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let st=0,Ct=O.length;st<Ct;st++){const Et=O[st],{object:ot,geometry:Zt,material:ye,group:Tn}=Et;if(ye.side===Bi&&ot.layers.test(H.layers)){const qe=ye.side;ye.side=Sn,ye.needsUpdate=!0,cg(ot,$,H,Zt,ye,Tn),ye.side=qe,ye.needsUpdate=!0,be=!0}}be===!0&&(M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve))}b.setRenderTarget(ge,we,Re),b.setClearColor(re,ce),He!==void 0&&(H.viewport=He),b.toneMapping=ke}function Qa(E,O,$){const H=O.isScene===!0?O.overrideMaterial:null;for(let G=0,ve=E.length;G<ve;G++){const Me=E[G],{object:ge,geometry:we,group:Re}=Me;let ke=Me.material;ke.allowOverride===!0&&H!==null&&(ke=H),ge.layers.test($.layers)&&cg(ge,O,$,we,ke,Re)}}function cg(E,O,$,H,G,ve){E.onBeforeRender(b,O,$,H,G,ve),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(b,O,$,H,E,ve),G.transparent===!0&&G.side===Bi&&G.forceSinglePass===!1?(G.side=Sn,G.needsUpdate=!0,b.renderBufferDirect($,O,H,G,E,ve),G.side=Fr,G.needsUpdate=!0,b.renderBufferDirect($,O,H,G,E,ve),G.side=Bi):b.renderBufferDirect($,O,H,G,E,ve),E.onAfterRender(b,O,$,H,G,ve)}function Ja(E,O,$){O.isScene!==!0&&(O=Ut);const H=C.get(E),G=T.state.lights,ve=T.state.shadowsArray,Me=G.state.version,ge=he.getParameters(E,G.state,ve,O,$,T.state.lightProbeGridArray),we=he.getProgramCacheKey(ge);let Re=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const ke=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=V.get(E.envMap||H.environment,ke),H.envMapRotation=H.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Re===void 0&&(E.addEventListener("dispose",At),Re=new Map,H.programs=Re);let He=Re.get(we);if(He!==void 0){if(H.currentProgram===He&&H.lightsStateVersion===Me)return dg(E,ge),He}else ge.uniforms=he.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,$,ge),E.onBeforeCompile(ge,b),He=he.acquireProgram(ge,we),Re.set(we,He),H.uniforms=ge.uniforms;const be=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(be.clippingPlanes=Se.uniform),dg(E,ge),H.needsLights=tT(E),H.lightsStateVersion=Me,H.needsLights&&(be.ambientLightColor.value=G.state.ambient,be.lightProbe.value=G.state.probe,be.directionalLights.value=G.state.directional,be.directionalLightShadows.value=G.state.directionalShadow,be.spotLights.value=G.state.spot,be.spotLightShadows.value=G.state.spotShadow,be.rectAreaLights.value=G.state.rectArea,be.ltc_1.value=G.state.rectAreaLTC1,be.ltc_2.value=G.state.rectAreaLTC2,be.pointLights.value=G.state.point,be.pointLightShadows.value=G.state.pointShadow,be.hemisphereLights.value=G.state.hemi,be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,be.spotLightMatrix.value=G.state.spotLightMatrix,be.spotLightMap.value=G.state.spotLightMap,be.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=He,H.uniformsList=null,He}function fg(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=gu.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function dg(E,O){const $=C.get(E);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function QE(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let $=0,H=E.length;$<H;$++){const G=E[$];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function JE(E,O,$,H,G){O.isScene!==!0&&(O=Ut),M.resetTextureUnits();const ve=O.fog,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,ge=N===null?b.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:$e.workingColorSpace,we=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Re=V.get(H.envMap||Me,we),ke=H.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,He=!!$.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),be=!!$.morphAttributes.position,st=!!$.morphAttributes.normal,Ct=!!$.morphAttributes.color;let Et=Ti;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Et=b.toneMapping);const ot=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Zt=ot!==void 0?ot.length:0,ye=C.get(H),Tn=T.state.lights;if(vt===!0&&(je===!0||E!==k)){const ct=E===k&&H.id===B;Se.setState(H,E,ct)}let qe=!1;H.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Tn.state.version||ye.outputColorSpace!==ge||G.isBatchedMesh&&ye.batching===!1||!G.isBatchedMesh&&ye.batching===!0||G.isBatchedMesh&&ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ye.instancing===!1||!G.isInstancedMesh&&ye.instancing===!0||G.isSkinnedMesh&&ye.skinning===!1||!G.isSkinnedMesh&&ye.skinning===!0||G.isInstancedMesh&&ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ye.instancingMorph===!1&&G.morphTexture!==null||ye.envMap!==Re||H.fog===!0&&ye.fog!==ve||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Se.numPlanes||ye.numIntersection!==Se.numIntersection)||ye.vertexAlphas!==ke||ye.vertexTangents!==He||ye.morphTargets!==be||ye.morphNormals!==st||ye.morphColors!==Ct||ye.toneMapping!==Et||ye.morphTargetsCount!==Zt||!!ye.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,ye.__version=H.version);let Nn=ye.currentProgram;qe===!0&&(Nn=Ja(H,O,G),I&&H.isNodeMaterial&&I.onUpdateProgram(H,Nn,ye));let ci=!1,er=!1,Ss=!1;const at=Nn.getUniforms(),Rt=ye.uniforms;if(pe.useProgram(Nn.program)&&(ci=!0,er=!0,Ss=!0),H.id!==B&&(B=H.id,er=!0),ye.needsLights){const ct=QE(T.state.lightProbeGridArray,G);ye.lightProbeGrid!==ct&&(ye.lightProbeGrid=ct,er=!0)}if(ci||k!==E){pe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),at.setValue(F,"projectionMatrix",E.projectionMatrix),at.setValue(F,"viewMatrix",E.matrixWorldInverse);const nr=at.map.cameraPosition;nr!==void 0&&nr.setValue(F,ht.setFromMatrixPosition(E.matrixWorld)),ut.logarithmicDepthBuffer&&at.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&at.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),k!==E&&(k=E,er=!0,Ss=!0)}if(ye.needsLights&&(Tn.state.directionalShadowMap.length>0&&at.setValue(F,"directionalShadowMap",Tn.state.directionalShadowMap,M),Tn.state.spotShadowMap.length>0&&at.setValue(F,"spotShadowMap",Tn.state.spotShadowMap,M),Tn.state.pointShadowMap.length>0&&at.setValue(F,"pointShadowMap",Tn.state.pointShadowMap,M)),G.isSkinnedMesh){at.setOptional(F,G,"bindMatrix"),at.setOptional(F,G,"bindMatrixInverse");const ct=G.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),at.setValue(F,"boneTexture",ct.boneTexture,M))}G.isBatchedMesh&&(at.setOptional(F,G,"batchingTexture"),at.setValue(F,"batchingTexture",G._matricesTexture,M),at.setOptional(F,G,"batchingIdTexture"),at.setValue(F,"batchingIdTexture",G._indirectTexture,M),at.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&at.setValue(F,"batchingColorTexture",G._colorsTexture,M));const tr=$.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0)&&Ne.update(G,$,Nn),(er||ye.receiveShadow!==G.receiveShadow)&&(ye.receiveShadow=G.receiveShadow,at.setValue(F,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(Rt.envMapIntensity.value=O.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=XU()),er){if(at.setValue(F,"toneMappingExposure",b.toneMappingExposure),ye.needsLights&&eT(Rt,Ss),ve&&H.fog===!0&&K.refreshFogUniforms(Rt,ve),K.refreshMaterialUniforms(Rt,H,Pe,Oe,T.state.transmissionRenderTarget[E.id]),ye.needsLights&&ye.lightProbeGrid){const ct=ye.lightProbeGrid;Rt.probesSH.value=ct.texture,Rt.probesMin.value.copy(ct.boundingBox.min),Rt.probesMax.value.copy(ct.boundingBox.max),Rt.probesResolution.value.copy(ct.resolution)}gu.upload(F,fg(ye),Rt,M)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(gu.upload(F,fg(ye),Rt,M),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&at.setValue(F,"center",G.center),at.setValue(F,"modelViewMatrix",G.modelViewMatrix),at.setValue(F,"normalMatrix",G.normalMatrix),at.setValue(F,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const ct=H.uniformsGroups;for(let nr=0,Ms=ct.length;nr<Ms;nr++){const hg=ct[nr];Q.update(hg,Nn),Q.bind(hg,Nn)}}return Nn}function eT(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function tT(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,O,$){const H=C.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),C.get(E.texture).__webglTexture=O,C.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:$,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const $=C.get(E);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0};const nT=F.createFramebuffer();this.setRenderTarget=function(E,O=0,$=0){N=E,W=O,Y=$;let H=null,G=!1,ve=!1;if(E){const ge=C.get(E);if(ge.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(F.FRAMEBUFFER,ge.__webglFramebuffer),U.copy(E.viewport),j.copy(E.scissor),q=E.scissorTest,pe.viewport(U),pe.scissor(j),pe.setScissorTest(q),B=-1;return}else if(ge.__webglFramebuffer===void 0)M.setupRenderTarget(E);else if(ge.__hasExternalTextures)M.rebindTextures(E,C.get(E.texture).__webglTexture,C.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ke=E.depthTexture;if(ge.__boundDepthTexture!==ke){if(ke!==null&&C.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(E)}}const we=E.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ve=!0);const Re=C.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Re[O])?H=Re[O][$]:H=Re[O],G=!0):E.samples>0&&M.useMultisampledRTT(E)===!1?H=C.get(E).__webglMultisampledFramebuffer:Array.isArray(Re)?H=Re[$]:H=Re,U.copy(E.viewport),j.copy(E.scissor),q=E.scissorTest}else U.copy(J).multiplyScalar(Pe).floor(),j.copy(Ae).multiplyScalar(Pe).floor(),q=Ue;if($!==0&&(H=nT),pe.bindFramebuffer(F.FRAMEBUFFER,H)&&pe.drawBuffers(E,H),pe.viewport(U),pe.scissor(j),pe.setScissorTest(q),G){const ge=C.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,$)}else if(ve){const ge=O;for(let we=0;we<E.textures.length;we++){const Re=C.get(E.textures[we]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+we,Re.__webglTexture,$,ge)}}else if(E!==null&&$!==0){const ge=C.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ge.__webglTexture,$)}B=-1},this.readRenderTargetPixels=function(E,O,$,H,G,ve,Me,ge=0){if(!(E&&E.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=C.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){pe.bindFramebuffer(F.FRAMEBUFFER,we);try{const Re=E.textures[ge],ke=Re.format,He=Re.type;if(E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ge),!ut.textureFormatReadable(ke)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(He)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-H&&$>=0&&$<=E.height-G&&F.readPixels(O,$,H,G,L.convert(ke),L.convert(He),ve)}finally{const Re=N!==null?C.get(N).__webglFramebuffer:null;pe.bindFramebuffer(F.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(E,O,$,H,G,ve,Me,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=C.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we)if(O>=0&&O<=E.width-H&&$>=0&&$<=E.height-G){pe.bindFramebuffer(F.FRAMEBUFFER,we);const Re=E.textures[ge],ke=Re.format,He=Re.type;if(E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ge),!ut.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,be),F.bufferData(F.PIXEL_PACK_BUFFER,ve.byteLength,F.STREAM_READ),F.readPixels(O,$,H,G,L.convert(ke),L.convert(He),0);const st=N!==null?C.get(N).__webglFramebuffer:null;pe.bindFramebuffer(F.FRAMEBUFFER,st);const Ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await mD(F,Ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,be),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ve),F.deleteBuffer(be),F.deleteSync(Ct),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,$=0){const H=Math.pow(2,-$),G=Math.floor(E.image.width*H),ve=Math.floor(E.image.height*H),Me=O!==null?O.x:0,ge=O!==null?O.y:0;M.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Me,ge,G,ve),pe.unbindTexture()};const iT=F.createFramebuffer(),rT=F.createFramebuffer();this.copyTextureToTexture=function(E,O,$=null,H=null,G=0,ve=0){let Me,ge,we,Re,ke,He,be,st,Ct;const Et=E.isCompressedTexture?E.mipmaps[ve]:E.image;if($!==null)Me=$.max.x-$.min.x,ge=$.max.y-$.min.y,we=$.isBox3?$.max.z-$.min.z:1,Re=$.min.x,ke=$.min.y,He=$.isBox3?$.min.z:0;else{const Rt=Math.pow(2,-G);Me=Math.floor(Et.width*Rt),ge=Math.floor(Et.height*Rt),E.isDataArrayTexture?we=Et.depth:E.isData3DTexture?we=Math.floor(Et.depth*Rt):we=1,Re=0,ke=0,He=0}H!==null?(be=H.x,st=H.y,Ct=H.z):(be=0,st=0,Ct=0);const ot=L.convert(O.format),Zt=L.convert(O.type);let ye;O.isData3DTexture?(M.setTexture3D(O,0),ye=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(M.setTexture2DArray(O,0),ye=F.TEXTURE_2D_ARRAY):(M.setTexture2D(O,0),ye=F.TEXTURE_2D),pe.activeTexture(F.TEXTURE0),pe.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),pe.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),pe.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const Tn=pe.getParameter(F.UNPACK_ROW_LENGTH),qe=pe.getParameter(F.UNPACK_IMAGE_HEIGHT),Nn=pe.getParameter(F.UNPACK_SKIP_PIXELS),ci=pe.getParameter(F.UNPACK_SKIP_ROWS),er=pe.getParameter(F.UNPACK_SKIP_IMAGES);pe.pixelStorei(F.UNPACK_ROW_LENGTH,Et.width),pe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et.height),pe.pixelStorei(F.UNPACK_SKIP_PIXELS,Re),pe.pixelStorei(F.UNPACK_SKIP_ROWS,ke),pe.pixelStorei(F.UNPACK_SKIP_IMAGES,He);const Ss=E.isDataArrayTexture||E.isData3DTexture,at=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Rt=C.get(E),tr=C.get(O),ct=C.get(Rt.__renderTarget),nr=C.get(tr.__renderTarget);pe.bindFramebuffer(F.READ_FRAMEBUFFER,ct.__webglFramebuffer),pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,nr.__webglFramebuffer);for(let Ms=0;Ms<we;Ms++)Ss&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,C.get(E).__webglTexture,G,He+Ms),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,C.get(O).__webglTexture,ve,Ct+Ms)),F.blitFramebuffer(Re,ke,Me,ge,be,st,Me,ge,F.DEPTH_BUFFER_BIT,F.NEAREST);pe.bindFramebuffer(F.READ_FRAMEBUFFER,null),pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||C.has(E)){const Rt=C.get(E),tr=C.get(O);pe.bindFramebuffer(F.READ_FRAMEBUFFER,iT),pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,rT);for(let ct=0;ct<we;ct++)Ss?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.__webglTexture,G,He+ct):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Rt.__webglTexture,G),at?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,tr.__webglTexture,ve,Ct+ct):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,tr.__webglTexture,ve),G!==0?F.blitFramebuffer(Re,ke,Me,ge,be,st,Me,ge,F.COLOR_BUFFER_BIT,F.NEAREST):at?F.copyTexSubImage3D(ye,ve,be,st,Ct+ct,Re,ke,Me,ge):F.copyTexSubImage2D(ye,ve,be,st,Re,ke,Me,ge);pe.bindFramebuffer(F.READ_FRAMEBUFFER,null),pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else at?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(ye,ve,be,st,Ct,Me,ge,we,ot,Zt,Et.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(ye,ve,be,st,Ct,Me,ge,we,ot,Et.data):F.texSubImage3D(ye,ve,be,st,Ct,Me,ge,we,ot,Zt,Et):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ve,be,st,Me,ge,ot,Zt,Et.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ve,be,st,Et.width,Et.height,ot,Et.data):F.texSubImage2D(F.TEXTURE_2D,ve,be,st,Me,ge,ot,Zt,Et);pe.pixelStorei(F.UNPACK_ROW_LENGTH,Tn),pe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qe),pe.pixelStorei(F.UNPACK_SKIP_PIXELS,Nn),pe.pixelStorei(F.UNPACK_SKIP_ROWS,ci),pe.pixelStorei(F.UNPACK_SKIP_IMAGES,er),ve===0&&O.generateMipmaps&&F.generateMipmap(ye),pe.unbindTexture()},this.initRenderTarget=function(E){C.get(E).__webglFramebuffer===void 0&&M.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?M.setTextureCube(E,0):E.isData3DTexture?M.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?M.setTexture2DArray(E,0):M.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){W=0,Y=0,N=null,pe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}const YU=`
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,qU=`
precision highp float;

uniform float uTime, uAttenuation, uLineThickness;
uniform float uBaseRadius, uRadiusStep, uScaleRate;
uniform float uOpacity, uNoiseAmount, uRotation, uRingGap;
uniform float uFadeIn, uFadeOut;
uniform float uMouseInfluence, uHoverAmount, uHoverScale, uParallax, uBurst;
uniform vec2 uResolution, uMouse;
uniform vec3 uColor, uColorTwo;
uniform int uRingCount;

const float HP = 1.5707963;
const float CYCLE = 3.45;

float fade(float t) {
  return t < uFadeIn ? smoothstep(0.0, uFadeIn, t) : 1.0 - smoothstep(uFadeOut, CYCLE - 0.2, t);
}

float ring(vec2 p, float ri, float cut, float t0, float px) {
  float t = mod(uTime + t0, CYCLE);
  float r = ri + t / CYCLE * uScaleRate;
  float d = abs(length(p) - r);
  float a = atan(abs(p.y), abs(p.x)) / HP;
  float th = max(1.0 - a, 0.5) * px * uLineThickness;
  float h = (1.0 - smoothstep(th, th * 1.5, d)) + 1.0;
  d += pow(cut * a, 3.0) * r;
  return h * exp(-uAttenuation * d) * fade(t);
}

void main() {
  float px = 1.0 / min(uResolution.x, uResolution.y);
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) * px;
  float cr = cos(uRotation), sr = sin(uRotation);
  p = mat2(cr, -sr, sr, cr) * p;
  p -= uMouse * uMouseInfluence;
  float sc = mix(1.0, uHoverScale, uHoverAmount) + uBurst * 0.3;
  p /= sc;
  vec3 c = vec3(0.0);
  float rcf = max(float(uRingCount) - 1.0, 1.0);
  for (int i = 0; i < 10; i++) {
    if (i >= uRingCount) break;
    float fi = float(i);
    vec2 pr = p - fi * uParallax * uMouse;
    vec3 rc = mix(uColor, uColorTwo, fi / rcf);
    c = mix(c, rc, vec3(ring(pr, uBaseRadius + fi * uRadiusStep, pow(uRingGap, fi), i == 0 ? 0.0 : 2.95 * fi, px)));
  }
  c *= 1.0 + uBurst * 2.0;
  float n = fract(sin(dot(gl_FragCoord.xy + uTime * 100.0, vec2(12.9898, 78.233))) * 43758.5453);
  c += (n - 0.5) * uNoiseAmount;
  gl_FragColor = vec4(c, max(c.r, max(c.g, c.b)) * uOpacity);
}
`;function KU({color:t="#00b4ff",colorTwo:e="#00ffb0",speed:n=1,ringCount:i=6,attenuation:r=10,lineThickness:s=2,baseRadius:o=.35,radiusStep:a=.1,scaleRate:l=.1,opacity:u=1,blur:c=0,noiseAmount:d=.1,rotation:f=0,ringGap:p=1.5,fadeIn:v=.7,fadeOut:y=.5,followMouse:m=!1,mouseInfluence:h=.2,hoverScale:g=1.2,parallax:_=.05,clickBurst:S=!1}){const w=z.useRef(null),T=z.useRef(null),R=z.useRef([0,0]),x=z.useRef([0,0]),A=z.useRef(0),b=z.useRef(!1),P=z.useRef(0);return T.current={color:t,colorTwo:e,speed:n,ringCount:i,attenuation:r,lineThickness:s,baseRadius:o,radiusStep:a,scaleRate:l,opacity:u,noiseAmount:d,rotation:f,ringGap:p,fadeIn:v,fadeOut:y,followMouse:m,mouseInfluence:h,hoverScale:g,parallax:_,clickBurst:S},z.useEffect(()=>{const I=w.current;if(!I)return;let W;try{W=new $U({alpha:!0})}catch{return}if(!W.capabilities.isWebGL2){W.dispose();return}W.setClearColor(0,0),I.appendChild(W.domElement);const Y=new DD,N=new eg(-.5,.5,.5,-.5,.1,10);N.position.z=1;const B={uTime:{value:0},uAttenuation:{value:0},uResolution:{value:new et},uColor:{value:new Je},uColorTwo:{value:new Je},uLineThickness:{value:0},uBaseRadius:{value:0},uRadiusStep:{value:0},uScaleRate:{value:0},uRingCount:{value:0},uOpacity:{value:1},uNoiseAmount:{value:0},uRotation:{value:0},uRingGap:{value:1.6},uFadeIn:{value:.5},uFadeOut:{value:.75},uMouse:{value:new et},uMouseInfluence:{value:0},uHoverAmount:{value:0},uHoverScale:{value:1},uParallax:{value:0},uBurst:{value:0}},k=new li({vertexShader:YU,fragmentShader:qU,uniforms:B,transparent:!0}),U=new bi(new Za(1,1),k);Y.add(U);const j=()=>{const oe=I.clientWidth,J=I.clientHeight,Ae=Math.min(window.devicePixelRatio,2);W.setSize(oe,J),W.setPixelRatio(Ae),B.uResolution.value.set(oe*Ae,J*Ae)};j(),window.addEventListener("resize",j);const q=new ResizeObserver(j);q.observe(I);const re=oe=>{const J=I.getBoundingClientRect();R.current[0]=(oe.clientX-J.left)/J.width-.5,R.current[1]=-((oe.clientY-J.top)/J.height-.5)},ce=()=>{b.current=!0},Ie=()=>{b.current=!1,R.current[0]=0,R.current[1]=0},Oe=()=>{P.current=1};I.addEventListener("mousemove",re),I.addEventListener("mouseenter",ce),I.addEventListener("mouseleave",Ie),I.addEventListener("click",Oe);let Pe;const Z=oe=>{Pe=requestAnimationFrame(Z);const J=T.current;x.current[0]+=(R.current[0]-x.current[0])*.08,x.current[1]+=(R.current[1]-x.current[1])*.08,A.current+=((b.current?1:0)-A.current)*.08,P.current*=.95,P.current<.001&&(P.current=0),B.uTime.value=oe*.001*J.speed,B.uAttenuation.value=J.attenuation,B.uColor.value.set(J.color),B.uColorTwo.value.set(J.colorTwo),B.uLineThickness.value=J.lineThickness,B.uBaseRadius.value=J.baseRadius,B.uRadiusStep.value=J.radiusStep,B.uScaleRate.value=J.scaleRate,B.uRingCount.value=J.ringCount,B.uOpacity.value=J.opacity,B.uNoiseAmount.value=J.noiseAmount,B.uRotation.value=J.rotation*Math.PI/180,B.uRingGap.value=J.ringGap,B.uFadeIn.value=J.fadeIn,B.uFadeOut.value=J.fadeOut,B.uMouse.value.set(x.current[0],x.current[1]),B.uMouseInfluence.value=J.followMouse?J.mouseInfluence:0,B.uHoverAmount.value=A.current,B.uHoverScale.value=J.hoverScale,B.uParallax.value=J.parallax,B.uBurst.value=J.clickBurst?P.current:0,W.render(Y,N)};return Pe=requestAnimationFrame(Z),()=>{cancelAnimationFrame(Pe),window.removeEventListener("resize",j),q.disconnect(),I.removeEventListener("mousemove",re),I.removeEventListener("mouseenter",ce),I.removeEventListener("mouseleave",Ie),I.removeEventListener("click",Oe),I.contains(W.domElement)&&I.removeChild(W.domElement),W.dispose(),k.dispose()}},[]),D.jsx("div",{ref:w,className:"magic-rings-container",style:c>0?{filter:`blur(${c}px)`}:void 0})}const ZU=["P","r","ı","n","c","e","."],cr=[2,3,4,5,6,5,4,3,2,1,0,1,2];function QU({isLoading:t}){const e=z.useRef([]),n=z.useRef(null),[i,r]=z.useState(null),s=Yv(0),o=Yv(0);return z.useEffect(()=>{const a=setTimeout(()=>{if(!n.current)return;const l=n.current.getBoundingClientRect(),u=e.current.map((c,d)=>{if(!c)return{x:0,yTop:-10,yDot:0};const f=c.getBoundingClientRect(),p=f.left-l.left+f.width/2,v=f.top-l.top+20,y=f.bottom-l.top-f.height*.15;return{x:p,yTop:v,yDot:y}});r(u)},350);return()=>clearTimeout(a)},[]),z.useEffect(()=>{if(!i)return;let a=0,l=!1;const u=i[cr[0]];s.set(u.x),o.set(u.yTop);const c=()=>{if(l)return;const f=(a+1)%cr.length,p=i[cr[a]],v=i[cr[f]],y=cr[a]===6?p.yDot:p.yTop,m=cr[f]===6?v.yDot:v.yTop,h=Math.min(y,m)-10,g=.3;Af(s,v.x,{duration:g,ease:"easeInOut"}),Af(o,h,{duration:g*.5,ease:"easeOut",onComplete:()=>{l||Af(o,m,{duration:g*.95,ease:"easeIn",onComplete:()=>{if(l)return;a=f;const _=cr[f]===6||cr[f]===0?400:60;setTimeout(c,_)}})}})},d=setTimeout(c,200);return()=>{l=!0,clearTimeout(d)}},[i]),D.jsx(cP,{children:t&&D.jsxs(Ts.div,{initial:{opacity:1},exit:{opacity:0,transition:{duration:.8,ease:[.23,1,.32,1]}},style:{position:"fixed",inset:0,zIndex:9999,background:"#060d14",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:[D.jsx("div",{style:{position:"absolute",inset:0},children:D.jsx(KU,{color:"#00b4ff",colorTwo:"#00ffb0",ringCount:6,speed:.9,attenuation:10,lineThickness:2,baseRadius:.3,radiusStep:.09,scaleRate:.12,opacity:1,noiseAmount:.08,ringGap:1.5,fadeIn:.7,fadeOut:.5,followMouse:!1,hoverScale:1,parallax:0,clickBurst:!1})}),D.jsxs(Ts.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},style:{position:"relative",zIndex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"2rem",pointerEvents:"none"},children:[D.jsxs("div",{ref:n,style:{position:"relative",display:"inline-block"},children:[i&&D.jsx(Ts.div,{style:{position:"absolute",top:-10,left:0,width:7,height:7,marginLeft:-3.5,background:"#00b4ff",borderRadius:"50%",boxShadow:"0 0 10px #00b4ff, 0 0 22px rgba(0,180,255,0.5)",x:s,y:o,zIndex:2}}),D.jsx("div",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"3rem",fontWeight:800,letterSpacing:"-0.02em",color:"#e8f0f8",display:"flex",alignItems:"baseline",userSelect:"none"},children:ZU.map((a,l)=>D.jsx("span",{ref:u=>e.current[l]=u,style:{display:"inline-block",opacity:a==="."?0:1},children:a},l))})]}),D.jsxs(Ts.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"0.7rem",color:"rgba(0,180,255,0.5)",letterSpacing:"0.2em",textTransform:"uppercase"},children:["$ chargement",D.jsx(Ts.span,{animate:{opacity:[1,0,1]},transition:{duration:.8,repeat:1/0},children:"_"})]}),D.jsx("div",{style:{width:"180px",height:"2px",background:"rgba(0,180,255,0.1)",borderRadius:"10px",overflow:"hidden"},children:D.jsx(Ts.div,{initial:{width:"0%"},animate:{width:"100%"},transition:{duration:2.4,ease:[.23,1,.32,1]},style:{height:"100%",background:"linear-gradient(90deg, #00b4ff, #00ffb0)",borderRadius:"10px",boxShadow:"0 0 8px rgba(0,180,255,0.6)"}})})]})]},"loader")})}const K_=["Frontend Developer","Web Developer","Computer Scientist","Network Administrator","Cybersecurity Expert"];function JU(){const[t,e]=z.useState(""),[n,i]=z.useState(!1),[r,s]=z.useState(0),o=z.useRef(null);return z.useEffect(()=>{const a=K_[r];return n?t.length>0?o.current=setTimeout(()=>{e(t.slice(0,-1))},60):(i(!1),s(l=>(l+1)%K_.length)):t.length<a.length?o.current=setTimeout(()=>{e(a.slice(0,t.length+1))},90):o.current=setTimeout(()=>i(!0),1200),()=>clearTimeout(o.current)},[t,n,r]),D.jsxs("section",{className:"hero",id:"home","aria-label":"Introduction",children:[D.jsxs("div",{className:"hero-content",children:[D.jsx("span",{className:"hero-greeting",children:"Hello, World!"}),D.jsxs("h1",{className:"hero-name",children:["Hi, It's",D.jsx("br",{}),D.jsx("em",{children:"Prince Koucheme"})]}),D.jsxs("div",{className:"hero-typed",children:["And I'm a"," ",D.jsxs("span",{className:"typed-accent",children:["<",t,D.jsx("span",{style:{opacity:1},children:"|"}),">"]})]}),D.jsx("p",{className:"hero-bio",children:"An aspiring systems & network specialist with solid experience in web development and a strong interest in cybersecurity — backed by hands-on projects building functional, impactful applications."}),D.jsxs("div",{className:"hero-ctas",children:[D.jsxs("a",{href:"mailto:kouchemep@gmail.com",className:"btn btn-primary",children:["Hire Me ",D.jsx("i",{className:"fa fa-arrow-right"})]}),D.jsx("a",{href:"#contact",className:"btn btn-ghost",children:"Let's Talk"})]}),D.jsxs("div",{className:"hero-socials","aria-label":"Réseaux sociaux",children:[D.jsx("a",{href:"https://wa.me/22954110930?text=Bonjour%20je%20suis%20intéressé%20par%20ton%20profil",target:"_blank",rel:"noreferrer",className:"social-link","aria-label":"WhatsApp",children:D.jsx("i",{className:"fab fa-whatsapp"})}),D.jsx("a",{href:"https://github.com/kouchemep-blip",target:"_blank",rel:"noreferrer",className:"social-link","aria-label":"GitHub",children:D.jsx("i",{className:"fab fa-github"})}),D.jsx("a",{href:"https://www.linkedin.com/in/prince-koucheme-64174136a",target:"_blank",rel:"noreferrer",className:"social-link","aria-label":"LinkedIn",children:D.jsx("i",{className:"fab fa-linkedin"})}),D.jsx("a",{href:"mailto:kouchemep@gmail.com?subject=Recrutement&body=Bonjour%20je%20suis%20intéressé%20par%20votre%20profil",target:"_blank",rel:"noreferrer",className:"social-link","aria-label":"Email",children:D.jsx("i",{className:"fa fa-envelope"})})]})]}),D.jsxs("div",{className:"hero-photo-wrap","aria-hidden":"true",children:[D.jsx("div",{className:"hero-glow"}),D.jsx("div",{className:"hero-photo-ring",children:D.jsx("div",{className:"hero-photo-placeholder",children:D.jsx("img",{src:"/photos/photo1.png",alt:"Prince Koucheme"})})})]})]})}const od=["HTML5","CSS3","JavaScript","React","Python","PHP","Bootstrap","Cybersecurity","Networks","UI/UX","Git","Node.js"];function eF(){const t=[...od,...od,...od];return D.jsx("div",{className:"marquee-bar","aria-hidden":"true",children:D.jsx("div",{className:"marquee-track",children:t.map((e,n)=>D.jsxs("div",{className:"marquee-item",children:[e,D.jsx("span",{className:"marquee-dot"})]},n))})})}function tF(t=.15){const e=z.useRef(null),[n,i]=z.useState(!1);return z.useEffect(()=>{const r=new IntersectionObserver(([s])=>{s.isIntersecting&&(i(!0),r.disconnect())},{threshold:t});return e.current&&r.observe(e.current),()=>r.disconnect()},[t]),[e,n]}function nF({target:t,inView:e}){const[n,i]=z.useState(0);return z.useEffect(()=>{if(!e)return;let r=0;const s=t/40,o=setInterval(()=>{r=Math.min(r+s,t),i(Math.round(r)),r>=t&&clearInterval(o)},30);return()=>clearInterval(o)},[e,t]),D.jsxs(D.Fragment,{children:[n,"+"]})}function iF(){const[t,e]=tF(),n=[{count:10,label:"Technologies"},{count:15,label:"Projets"},{count:2,label:"Ans d'XP"}];return D.jsxs("section",{className:"about",id:"about","aria-labelledby":"about-title",children:[D.jsx("div",{className:"tag",children:"Qui suis-je"}),D.jsxs("h2",{className:`section-title reveal${e?" up":""}`,id:"about-title",children:["About ",D.jsx("span",{children:"Me"})]}),D.jsxs("div",{className:"about-grid",ref:t,children:[D.jsx("div",{className:`about-img-wrap reveal d1${e?" up":""}`,children:D.jsx("div",{className:"about-img-frame",children:D.jsx("div",{className:"about-img-placeholder",children:D.jsx("img",{src:"/photos/photo2.png",alt:"Prince Koucheme"})})})}),D.jsxs("div",{className:`about-text reveal d2${e?" up":""}`,children:[D.jsx("h3",{children:"Passionate Developer & Tech Enthusiast"}),D.jsxs("p",{className:"about-body",children:["I am a passionate Full Stack Developer with a solid foundation in both frontend and backend technologies. I build functional web applications using JavaScript, React, PHP, and database systems. Through academic and personal projects, I've developed strong problem-solving skills, attention to detail, and the ability to work effectively in a team.",D.jsx("br",{}),D.jsx("br",{}),"I'm particularly interested in systems, networks, and cybersecurity, and I continuously strive to expand my knowledge by learning new technologies and working on practical, impactful projects."]}),D.jsx("div",{className:"about-stats",children:n.map(({count:i,label:r})=>D.jsxs("div",{className:"stat",children:[D.jsx("div",{className:"stat-n",children:D.jsx(nF,{target:i,inView:e})}),D.jsx("div",{className:"stat-l",children:r})]},r))}),D.jsxs("a",{href:"#contact",className:"btn btn-gold",children:["More About Me ",D.jsx("i",{className:"fa fa-arrow-right"})]})]})]})]})}function rF(t=.12){const e=z.useRef(null),[n,i]=z.useState(!1);return z.useEffect(()=>{const r=new IntersectionObserver(([s])=>{s.isIntersecting&&(i(!0),r.disconnect())},{threshold:t});return e.current&&r.observe(e.current),()=>r.disconnect()},[t]),[e,n]}const sF=[{icon:"fa fa-paint-brush",title:"UI/UX Design",desc:"Creating intuitive and visually engaging interfaces that enhance user experience. Focused on usability, simplicity, and consistency — each design is functional and user-centered."},{icon:"fa fa-globe",title:"Web Design",desc:"Modern, responsive websites with a strong focus on aesthetics and UX. Clean, engaging, and functional interfaces that deliver a seamless experience on all devices."},{icon:"fa fa-mobile-alt",title:"App Design",desc:"Intuitive mobile application interfaces with a focus on usability. Clean, functional, and visually consistent designs that make interaction simple and efficient."}];function oF(){const[t,e]=rF();return D.jsxs("section",{id:"services","aria-labelledby":"services-title",ref:t,children:[D.jsx("div",{className:"tag",children:"Ce que je fais"}),D.jsxs("h2",{className:`section-title reveal${e?" up":""}`,id:"services-title",children:["My ",D.jsx("span",{children:"Services"})]}),D.jsx("div",{className:"services-grid",children:sF.map(({icon:n,title:i,desc:r},s)=>D.jsxs("article",{className:`service-card reveal d${s+1}${e?" up":""}`,children:[D.jsx("div",{className:"service-icon",children:D.jsx("i",{className:n})}),D.jsx("h3",{className:"service-title",children:i}),D.jsx("p",{className:"service-desc",children:r}),D.jsx("a",{href:"#contact",className:"btn btn-ghost",children:"Learn More"})]},i))})]})}function aF(t=.1){const e=z.useRef(null),[n,i]=z.useState(!1);return z.useEffect(()=>{const r=new IntersectionObserver(([s])=>{s.isIntersecting&&(i(!0),r.disconnect())},{threshold:t});return e.current&&r.observe(e.current),()=>r.disconnect()},[t]),[e,n]}const lF=[{name:"HTML",pct:90,icon:"fab fa-html5",color:"#e65100"},{name:"CSS",pct:60,icon:"fab fa-css3-alt",color:"#7e57c2"},{name:"JavaScript",pct:37,icon:"fab fa-js",color:"#ffca28"},{name:"Python",pct:50,icon:"fab fa-python",color:"#498ba7"},{name:"Bootstrap",pct:45,icon:"fab fa-bootstrap",color:"#7d29fe"},{name:"React",pct:35,icon:"fab fa-react",color:"#00bcd4"},{name:"PHP",pct:50,icon:"fab fa-php",color:"#1e88e5"}],uF=[{label:"Creativity",pct:90},{label:"Communication",pct:65},{label:"Problem Solving",pct:95},{label:"Teamwork",pct:85},{label:"Adaptability",pct:92},{label:"Organisation",pct:83}],nc=2*Math.PI*40;function cF(t){return nc-t/100*nc}function fF(){const[t,e]=aF();return D.jsxs("section",{className:"skills-section",id:"skills","aria-labelledby":"skills-title",ref:t,children:[D.jsx("div",{className:"tag",children:"Expertises"}),D.jsxs("h2",{className:`section-title reveal${e?" up":""}`,id:"skills-title",children:["My ",D.jsx("span",{children:"Skills"})]}),D.jsxs("div",{className:"skills-wrapper",children:[D.jsxs("div",{className:`reveal d1${e?" up":""}`,children:[D.jsx("h3",{className:"skills-block-title",children:"Technical Skills"}),D.jsx("div",{className:"tech-bars",children:lF.map(({name:n,pct:i,icon:r,color:s})=>D.jsxs("div",{className:"tech-bar",children:[D.jsxs("div",{className:"tech-bar-header",children:[D.jsxs("span",{className:"tech-bar-name",children:[D.jsx("i",{className:r,style:{color:s}}),n]}),D.jsxs("span",{className:"tech-bar-pct",children:[i,"%"]})]}),D.jsx("div",{className:"tech-bar-track",children:D.jsx("div",{className:"tech-bar-fill",style:{width:e?`${i}%`:"0%"}})})]},n))})]}),D.jsxs("div",{className:`reveal d2${e?" up":""}`,children:[D.jsx("h3",{className:"skills-block-title",children:"Professional Skills"}),D.jsx("div",{className:"pro-grid",children:uF.map(({label:n,pct:i})=>D.jsxs("div",{className:"radial-card",children:[D.jsxs("div",{className:"radial-svg-wrap",children:[D.jsxs("svg",{viewBox:"0 0 100 100",children:[D.jsx("circle",{className:"radial-track",cx:"50",cy:"50",r:"40"}),D.jsx("circle",{className:"radial-fill",cx:"50",cy:"50",r:"40",style:{strokeDasharray:nc,strokeDashoffset:e?cF(i):nc}})]}),D.jsxs("div",{className:"radial-pct",children:[i,"%"]})]}),D.jsx("div",{className:"radial-label",children:n})]},n))})]})]})]})}function dF(t=.12){const e=z.useRef(null),[n,i]=z.useState(!1);return z.useEffect(()=>{const r=new IntersectionObserver(([s])=>{s.isIntersecting&&(i(!0),r.disconnect())},{threshold:t});return e.current&&r.observe(e.current),()=>r.disconnect()},[t]),[e,n]}const hF=[{thumb:"/photos/projet1.png",grad:"linear-gradient(135deg, #060d20, #0b1a40)",tags:["UI/UX","Design"],title:"UI/UX Design Project",desc:"Designing intuitive user interfaces with focus on usability, accessibility and visual hierarchy for modern digital products.",link:"#"},{thumb:"/photos/projet2.png",grad:"linear-gradient(135deg, #060d14, #0a2030)",tags:["Web","Frontend"],title:"Web Application",desc:"A responsive, full-featured web application with modern UI, real-time interactions, and clean code architecture.",link:"https://margueriteoke-don-genial.netlify.app/"},{thumb:"/photos/projet3.png",grad:"linear-gradient(135deg, #0a1005, #182a08)",tags:["App","Mobile"],title:"App Interface Design",desc:"Mobile-first application interface designed for intuitive navigation, clean aesthetics, and seamless user flow.",link:"#"}];function pF(){const[t,e]=dF();return D.jsxs("section",{id:"projects","aria-labelledby":"projects-title",ref:t,children:[D.jsx("div",{className:"tag",children:"Réalisations"}),D.jsxs("h2",{className:`section-title reveal${e?" up":""}`,id:"projects-title",children:["Latest ",D.jsx("span",{children:"Projects"})]}),D.jsx("div",{className:"projects-grid",children:hF.map(({thumb:n,grad:i,tags:r,title:s,desc:o,link:a},l)=>D.jsxs("article",{className:`project-card reveal d${l+1}${e?" up":""}`,style:{"--thumb-grad":i},children:[D.jsxs("div",{className:"project-thumb",children:[D.jsx("div",{className:"project-thumb-bg"}),D.jsx("div",{className:"project-thumb-grid"}),D.jsx("div",{className:"project-thumb-icon",children:D.jsx("img",{src:n,alt:s})})]}),D.jsxs("div",{className:"project-body",children:[D.jsx("div",{className:"project-meta",children:r.map(u=>D.jsx("span",{className:"project-tag",children:u},u))}),D.jsx("h3",{className:"project-title",children:s}),D.jsx("p",{className:"project-desc",children:o}),D.jsxs("a",{href:a,className:"project-link",target:a!=="#"?"_blank":void 0,rel:a!=="#"?"noreferrer":void 0,children:["View Project ",D.jsx("i",{className:"bx bx-link-external"})]})]})]},s))})]})}function mF(t=.1){const e=z.useRef(null),[n,i]=z.useState(!1);return z.useEffect(()=>{const r=new IntersectionObserver(([s])=>{s.isIntersecting&&(i(!0),r.disconnect())},{threshold:t});return e.current&&r.observe(e.current),()=>r.disconnect()},[t]),[e,n]}const Z_=["What about working together ?","You know what you should do ?","Let me know your appreciation...","Have a great day!"];function gF(){const[t,e]=z.useState(""),[n,i]=z.useState(0),[r,s]=z.useState(!1),o=z.useRef(null);return z.useEffect(()=>{const a=Z_[n];return r?t.length>0?o.current=setTimeout(()=>e(t.slice(0,-1)),60):(s(!1),i(l=>(l+1)%Z_.length)):t.length<a.length?o.current=setTimeout(()=>e(a.slice(0,t.length+1)),120):o.current=setTimeout(()=>s(!0),1200),()=>clearTimeout(o.current)},[t,r,n]),D.jsx("p",{className:"join-subtitle",children:t})}function vF(){const[t,e]=mF(),[n,i]=z.useState(!1);function r(s){s.preventDefault(),i(!0),setTimeout(()=>{i(!1),s.target.reset()},4e3)}return D.jsxs("section",{className:"join",id:"contact","aria-labelledby":"contact-title",ref:t,children:[D.jsx("div",{className:"tag",children:"Collaboration"}),D.jsxs("h2",{className:`section-title reveal${e?" up":""}`,id:"contact-title",children:["Join ",D.jsx("span",{children:"Me"})]}),D.jsxs("div",{className:"join-grid",children:[D.jsxs("div",{className:`reveal d1${e?" up":""}`,children:[D.jsx(gF,{}),D.jsxs("p",{className:"join-desc",children:["I'm currently open to freelance opportunities, collaborations, and innovative projects in web development, UI/UX, and app design. I'm always eager to learn, improve, and contribute to impactful projects.",D.jsx("br",{}),D.jsx("br",{}),"Feel free to reach out — let's discuss how I can help bring your ideas to life."]}),D.jsxs("div",{className:"join-contacts",children:[D.jsxs("div",{className:"join-contact-item",children:[D.jsx("i",{className:"bx bxl-gmail"}),D.jsx("span",{children:"kouchemep@gmail.com"})]}),D.jsxs("div",{className:"join-contact-item",children:[D.jsx("i",{className:"bx bxs-phone"}),D.jsx("span",{children:"01 54 11 09 30"})]})]}),D.jsx("div",{className:"prev-work reveal d2",style:{display:"none"},children:D.jsx("div",{className:"prev-work-title",children:"Previously built →"})})]}),D.jsxs("form",{className:`contact-form reveal d2${e?" up":""}`,onSubmit:r,noValidate:!0,"aria-label":"Formulaire de contact",children:[D.jsxs("div",{className:"form-row",children:[D.jsxs("div",{className:"form-group",children:[D.jsx("label",{className:"form-label",htmlFor:"c-nom",children:"Nom"}),D.jsx("input",{className:"form-input",type:"text",id:"c-nom",name:"nom",placeholder:"Mon Nom",autoComplete:"name",required:!0})]}),D.jsxs("div",{className:"form-group",children:[D.jsx("label",{className:"form-label",htmlFor:"c-email",children:"E-mail"}),D.jsx("input",{className:"form-input",type:"email",id:"c-email",name:"email",placeholder:"exemple@gmail.com",autoComplete:"email",required:!0})]})]}),D.jsxs("div",{className:"form-group",children:[D.jsx("label",{className:"form-label",htmlFor:"c-tel",children:"Contact"}),D.jsx("input",{className:"form-input",type:"tel",id:"c-tel",name:"number",placeholder:"00 00 00 00 00",autoComplete:"tel"})]}),D.jsxs("div",{className:"form-group",children:[D.jsx("label",{className:"form-label",htmlFor:"c-msg",children:"Message"}),D.jsx("textarea",{className:"form-textarea",id:"c-msg",name:"message",placeholder:"Je vous contacte pour...",required:!0})]}),D.jsx("button",{type:"submit",className:"btn btn-primary form-submit",children:n?"✓ Envoyé !":D.jsxs(D.Fragment,{children:["Envoyer ",D.jsx("i",{className:"fa fa-paper-plane"})]})}),n&&D.jsx("div",{className:"form-success",role:"alert",children:"✓ Message envoyé ! Je vous répondrai dans les 24h."})]})]})]})}function _F(){return D.jsxs("footer",{id:"footer",children:[D.jsxs("div",{className:"footer-logo",children:["Prince",D.jsx("span",{children:"."})]}),D.jsxs("p",{className:"footer-credit",children:["Développé avec ❤️ par ",D.jsx("strong",{children:"Mr. Souverain Koucheme"})," — © 2025 All rights reserved"]}),D.jsxs("nav",{className:"footer-links","aria-label":"Footer navigation",children:[D.jsx("a",{href:"#home",children:"Home"}),D.jsx("a",{href:"#about",children:"About"}),D.jsx("a",{href:"#contact",children:"Contact"})]})]})}function xF(){return D.jsxs("main",{children:[D.jsx(JU,{}),D.jsx(eF,{}),D.jsx(iF,{}),D.jsx(oF,{}),D.jsx(fF,{}),D.jsx(pF,{}),D.jsx(vF,{}),D.jsx(_F,{})]})}function yF(){return D.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#060d14",color:"#e8f0f8",fontFamily:"Outfit, sans-serif",gap:"1rem"},children:[D.jsx("h1",{style:{fontSize:"5rem",fontWeight:800,color:"#00abf0",lineHeight:1},children:"404"}),D.jsx("p",{style:{color:"#5a7080",fontFamily:"JetBrains Mono, monospace",fontSize:"0.85rem"},children:"$ page introuvable"}),D.jsx("a",{href:"/",style:{marginTop:"1.5rem",color:"#00abf0",fontFamily:"JetBrains Mono, monospace",fontSize:"0.8rem",textDecoration:"none",border:"1.5px solid rgba(0,180,255,0.4)",padding:"0.6rem 1.4rem",borderRadius:"50px",transition:"background 0.3s"},children:"← Retour à l'accueil"})]})}function SF(){const[t,e]=z.useState(!0);return z.useEffect(()=>{const n=()=>e(!1),i=setTimeout(n,3e3);return document.readyState==="complete"?setTimeout(n,2600):window.addEventListener("load",()=>setTimeout(n,2600),{once:!0}),()=>clearTimeout(i)},[]),D.jsxs(D.Fragment,{children:[D.jsx("div",{className:"noise-overlay","aria-hidden":"true"}),D.jsx(QU,{isLoading:t}),D.jsxs("div",{style:{visibility:t?"hidden":"visible"},children:[D.jsx(MA,{}),D.jsx(EA,{}),D.jsxs(_A,{children:[D.jsx(th,{path:"/",element:D.jsx(xF,{})}),D.jsx(th,{path:"*",element:D.jsx(yF,{})})]})]})]})}ad.createRoot(document.getElementById("root")).render(D.jsx(lx.StrictMode,{children:D.jsx(SA,{children:D.jsx(SF,{})})}));
