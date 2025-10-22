(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function lv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Xf={exports:{}},Ua={},jf={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function _y(){if(k_)return pt;k_=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator;function g(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(k,ee,Te){this.props=k,this.context=ee,this.refs=M,this.updater=Te||S}y.prototype.isReactComponent={},y.prototype.setState=function(k,ee){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ee,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function x(){}x.prototype=y.prototype;function D(k,ee,Te){this.props=k,this.context=ee,this.refs=M,this.updater=Te||S}var P=D.prototype=new x;P.constructor=D,E(P,y.prototype),P.isPureReactComponent=!0;var w=Array.isArray,L=Object.prototype.hasOwnProperty,I={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function O(k,ee,Te){var Re,Ie={},re=null,de=null;if(ee!=null)for(Re in ee.ref!==void 0&&(de=ee.ref),ee.key!==void 0&&(re=""+ee.key),ee)L.call(ee,Re)&&!N.hasOwnProperty(Re)&&(Ie[Re]=ee[Re]);var Me=arguments.length-2;if(Me===1)Ie.children=Te;else if(1<Me){for(var Ne=Array(Me),ke=0;ke<Me;ke++)Ne[ke]=arguments[ke+2];Ie.children=Ne}if(k&&k.defaultProps)for(Re in Me=k.defaultProps,Me)Ie[Re]===void 0&&(Ie[Re]=Me[Re]);return{$$typeof:o,type:k,key:re,ref:de,props:Ie,_owner:I.current}}function A(k,ee){return{$$typeof:o,type:k.type,key:ee,ref:k.ref,props:k.props,_owner:k._owner}}function R(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function z(k){var ee={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Te){return ee[Te]})}var j=/\/+/g;function K(k,ee){return typeof k=="object"&&k!==null&&k.key!=null?z(""+k.key):ee.toString(36)}function ue(k,ee,Te,Re,Ie){var re=typeof k;(re==="undefined"||re==="boolean")&&(k=null);var de=!1;if(k===null)de=!0;else switch(re){case"string":case"number":de=!0;break;case"object":switch(k.$$typeof){case o:case e:de=!0}}if(de)return de=k,Ie=Ie(de),k=Re===""?"."+K(de,0):Re,w(Ie)?(Te="",k!=null&&(Te=k.replace(j,"$&/")+"/"),ue(Ie,ee,Te,"",function(ke){return ke})):Ie!=null&&(R(Ie)&&(Ie=A(Ie,Te+(!Ie.key||de&&de.key===Ie.key?"":(""+Ie.key).replace(j,"$&/")+"/")+k)),ee.push(Ie)),1;if(de=0,Re=Re===""?".":Re+":",w(k))for(var Me=0;Me<k.length;Me++){re=k[Me];var Ne=Re+K(re,Me);de+=ue(re,ee,Te,Ne,Ie)}else if(Ne=g(k),typeof Ne=="function")for(k=Ne.call(k),Me=0;!(re=k.next()).done;)re=re.value,Ne=Re+K(re,Me++),de+=ue(re,ee,Te,Ne,Ie);else if(re==="object")throw ee=String(k),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return de}function ne(k,ee,Te){if(k==null)return k;var Re=[],Ie=0;return ue(k,Re,"","",function(re){return ee.call(Te,re,Ie++)}),Re}function J(k){if(k._status===-1){var ee=k._result;ee=ee(),ee.then(function(Te){(k._status===0||k._status===-1)&&(k._status=1,k._result=Te)},function(Te){(k._status===0||k._status===-1)&&(k._status=2,k._result=Te)}),k._status===-1&&(k._status=0,k._result=ee)}if(k._status===1)return k._result.default;throw k._result}var ie={current:null},V={transition:null},ce={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:V,ReactCurrentOwner:I};function oe(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:ne,forEach:function(k,ee,Te){ne(k,function(){ee.apply(this,arguments)},Te)},count:function(k){var ee=0;return ne(k,function(){ee++}),ee},toArray:function(k){return ne(k,function(ee){return ee})||[]},only:function(k){if(!R(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},pt.Component=y,pt.Fragment=t,pt.Profiler=s,pt.PureComponent=D,pt.StrictMode=i,pt.Suspense=d,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,pt.act=oe,pt.cloneElement=function(k,ee,Te){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Re=E({},k.props),Ie=k.key,re=k.ref,de=k._owner;if(ee!=null){if(ee.ref!==void 0&&(re=ee.ref,de=I.current),ee.key!==void 0&&(Ie=""+ee.key),k.type&&k.type.defaultProps)var Me=k.type.defaultProps;for(Ne in ee)L.call(ee,Ne)&&!N.hasOwnProperty(Ne)&&(Re[Ne]=ee[Ne]===void 0&&Me!==void 0?Me[Ne]:ee[Ne])}var Ne=arguments.length-2;if(Ne===1)Re.children=Te;else if(1<Ne){Me=Array(Ne);for(var ke=0;ke<Ne;ke++)Me[ke]=arguments[ke+2];Re.children=Me}return{$$typeof:o,type:k.type,key:Ie,ref:re,props:Re,_owner:de}},pt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:a,_context:k},k.Consumer=k},pt.createElement=O,pt.createFactory=function(k){var ee=O.bind(null,k);return ee.type=k,ee},pt.createRef=function(){return{current:null}},pt.forwardRef=function(k){return{$$typeof:c,render:k}},pt.isValidElement=R,pt.lazy=function(k){return{$$typeof:p,_payload:{_status:-1,_result:k},_init:J}},pt.memo=function(k,ee){return{$$typeof:h,type:k,compare:ee===void 0?null:ee}},pt.startTransition=function(k){var ee=V.transition;V.transition={};try{k()}finally{V.transition=ee}},pt.unstable_act=oe,pt.useCallback=function(k,ee){return ie.current.useCallback(k,ee)},pt.useContext=function(k){return ie.current.useContext(k)},pt.useDebugValue=function(){},pt.useDeferredValue=function(k){return ie.current.useDeferredValue(k)},pt.useEffect=function(k,ee){return ie.current.useEffect(k,ee)},pt.useId=function(){return ie.current.useId()},pt.useImperativeHandle=function(k,ee,Te){return ie.current.useImperativeHandle(k,ee,Te)},pt.useInsertionEffect=function(k,ee){return ie.current.useInsertionEffect(k,ee)},pt.useLayoutEffect=function(k,ee){return ie.current.useLayoutEffect(k,ee)},pt.useMemo=function(k,ee){return ie.current.useMemo(k,ee)},pt.useReducer=function(k,ee,Te){return ie.current.useReducer(k,ee,Te)},pt.useRef=function(k){return ie.current.useRef(k)},pt.useState=function(k){return ie.current.useState(k)},pt.useSyncExternalStore=function(k,ee,Te){return ie.current.useSyncExternalStore(k,ee,Te)},pt.useTransition=function(){return ie.current.useTransition()},pt.version="18.3.1",pt}var z_;function Vh(){return z_||(z_=1,jf.exports=_y()),jf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function gy(){if(B_)return Ua;B_=1;var o=Vh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,_={},g=null,S=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(S=d.ref);for(p in d)i.call(d,p)&&!a.hasOwnProperty(p)&&(_[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)_[p]===void 0&&(_[p]=d[p]);return{$$typeof:e,type:c,key:g,ref:S,props:_,_owner:s.current}}return Ua.Fragment=t,Ua.jsx=u,Ua.jsxs=u,Ua}var V_;function vy(){return V_||(V_=1,Xf.exports=gy()),Xf.exports}var Y=vy(),gt=Vh();const xy=lv(gt);var xu={},Yf={exports:{}},Wn={},qf={exports:{}},$f={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function yy(){return H_||(H_=1,(function(o){function e(V,ce){var oe=V.length;V.push(ce);e:for(;0<oe;){var k=oe-1>>>1,ee=V[k];if(0<s(ee,ce))V[k]=ce,V[oe]=ee,oe=k;else break e}}function t(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var ce=V[0],oe=V.pop();if(oe!==ce){V[0]=oe;e:for(var k=0,ee=V.length,Te=ee>>>1;k<Te;){var Re=2*(k+1)-1,Ie=V[Re],re=Re+1,de=V[re];if(0>s(Ie,oe))re<ee&&0>s(de,Ie)?(V[k]=de,V[re]=oe,k=re):(V[k]=Ie,V[Re]=oe,k=Re);else if(re<ee&&0>s(de,oe))V[k]=de,V[re]=oe,k=re;else break e}}return ce}function s(V,ce){var oe=V.sortIndex-ce.sortIndex;return oe!==0?oe:V.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();o.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,_=null,g=3,S=!1,E=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(V){for(var ce=t(h);ce!==null;){if(ce.callback===null)i(h);else if(ce.startTime<=V)i(h),ce.sortIndex=ce.expirationTime,e(d,ce);else break;ce=t(h)}}function w(V){if(M=!1,P(V),!E)if(t(d)!==null)E=!0,J(L);else{var ce=t(h);ce!==null&&ie(w,ce.startTime-V)}}function L(V,ce){E=!1,M&&(M=!1,x(O),O=-1),S=!0;var oe=g;try{for(P(ce),_=t(d);_!==null&&(!(_.expirationTime>ce)||V&&!z());){var k=_.callback;if(typeof k=="function"){_.callback=null,g=_.priorityLevel;var ee=k(_.expirationTime<=ce);ce=o.unstable_now(),typeof ee=="function"?_.callback=ee:_===t(d)&&i(d),P(ce)}else i(d);_=t(d)}if(_!==null)var Te=!0;else{var Re=t(h);Re!==null&&ie(w,Re.startTime-ce),Te=!1}return Te}finally{_=null,g=oe,S=!1}}var I=!1,N=null,O=-1,A=5,R=-1;function z(){return!(o.unstable_now()-R<A)}function j(){if(N!==null){var V=o.unstable_now();R=V;var ce=!0;try{ce=N(!0,V)}finally{ce?K():(I=!1,N=null)}}else I=!1}var K;if(typeof D=="function")K=function(){D(j)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,ne=ue.port2;ue.port1.onmessage=j,K=function(){ne.postMessage(null)}}else K=function(){y(j,0)};function J(V){N=V,I||(I=!0,K())}function ie(V,ce){O=y(function(){V(o.unstable_now())},ce)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_continueExecution=function(){E||S||(E=!0,J(L))},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(V){switch(g){case 1:case 2:case 3:var ce=3;break;default:ce=g}var oe=g;g=ce;try{return V()}finally{g=oe}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(V,ce){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var oe=g;g=V;try{return ce()}finally{g=oe}},o.unstable_scheduleCallback=function(V,ce,oe){var k=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?k+oe:k):oe=k,V){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=oe+ee,V={id:p++,callback:ce,priorityLevel:V,startTime:oe,expirationTime:ee,sortIndex:-1},oe>k?(V.sortIndex=oe,e(h,V),t(d)===null&&V===t(h)&&(M?(x(O),O=-1):M=!0,ie(w,oe-k))):(V.sortIndex=ee,e(d,V),E||S||(E=!0,J(L))),V},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(V){var ce=g;return function(){var oe=g;g=ce;try{return V.apply(this,arguments)}finally{g=oe}}}})($f)),$f}var G_;function Sy(){return G_||(G_=1,qf.exports=yy()),qf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function My(){if(W_)return Wn;W_=1;var o=Vh(),e=Sy();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},_={};function g(n){return d.call(_,n)?!0:d.call(p,n)?!1:h.test(n)?_[n]=!0:(p[n]=!0,!1)}function S(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,l,f){if(r===null||typeof r>"u"||S(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,l,f,m,v,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,D);y[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,D);y[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,D);y[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,l,f){var m=y.hasOwnProperty(r)?y[r]:null;(m!==null?m.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,l,m,f)&&(l=null),f||m===null?g(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,f=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var w=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),I=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),V=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,k;function ee(n){if(k===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);k=r&&r[1]||""}return`
`+k+n}var Te=!1;function Re(n,r){if(!n||Te)return"";Te=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(te){var f=te}Reflect.construct(n,[],r)}else{try{r.call()}catch(te){f=te}n.call(r.prototype)}else{try{throw Error()}catch(te){f=te}n()}}catch(te){if(te&&f&&typeof te.stack=="string"){for(var m=te.stack.split(`
`),v=f.stack.split(`
`),T=m.length-1,F=v.length-1;1<=T&&0<=F&&m[T]!==v[F];)F--;for(;1<=T&&0<=F;T--,F--)if(m[T]!==v[F]){if(T!==1||F!==1)do if(T--,F--,0>F||m[T]!==v[F]){var H=`
`+m[T].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=T&&0<=F);break}}}finally{Te=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ee(n):""}function Ie(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case I:return"Portal";case A:return"Profiler";case O:return"StrictMode";case K:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case j:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ne:return r=n.displayName||null,r!==null?r:re(n.type)||"Memo";case J:r=n._payload,n=n._init;try{return re(n(r))}catch{}}return null}function de(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(r);case 8:return r===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ke(n){var r=Ne(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(T){f=""+T,v.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ht(n){n._valueTracker||(n._valueTracker=ke(n))}function on(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=Ne(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function B(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Rt(n,r){var l=r.checked;return oe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function ut(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=Me(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function nt(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function Ge(n,r){nt(n,r);var l=Me(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?We(n,r.type,l):r.hasOwnProperty("defaultValue")&&We(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function It(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function We(n,r,l){(r!=="number"||B(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var at=Array.isArray;function zt(n,r,l,f){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&f&&(n[l].defaultSelected=!0)}else{for(l=""+Me(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,f&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function Bt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function U(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(at(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Me(l)}}function C(n,r){var l=Me(r.value),f=Me(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function Z(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _e(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?he(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fe,$e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,m)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=fe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ae(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ke=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(n){Ke.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Be[r]=Be[n]})});function Ee(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Be.hasOwnProperty(n)&&Be[n]?(""+r).trim():r+"px"}function Le(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=Ee(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,m):n[l]=m}}var it=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(n,r){if(r){if(it[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function be(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ct=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ye=null,Ce=null,Ue=null;function xe(n){if(n=ya(n)){if(typeof ye!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Nl(r),ye(n.stateNode,n.type,r))}}function pe(n){Ce?Ue?Ue.push(n):Ue=[n]:Ce=n}function Xe(){if(Ce){var n=Ce,r=Ue;if(Ue=Ce=null,xe(n),r)for(n=0;n<r.length;n++)xe(r[n])}}function lt(n,r){return n(r)}function At(){}var yt=!1;function di(n,r,l){if(yt)return n(r,l);yt=!0;try{return lt(n,r,l)}finally{yt=!1,(Ce!==null||Ue!==null)&&(At(),Xe())}}function Sn(n,r){var l=n.stateNode;if(l===null)return null;var f=Nl(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var $s=!1;if(c)try{var Qn={};Object.defineProperty(Qn,"passive",{get:function(){$s=!0}}),window.addEventListener("test",Qn,Qn),window.removeEventListener("test",Qn,Qn)}catch{$s=!1}function ia(n,r,l,f,m,v,T,F,H){var te=Array.prototype.slice.call(arguments,3);try{r.apply(l,te)}catch(ge){this.onError(ge)}}var Tr=!1,ls=null,Qi=!1,Ks=null,Zs={onError:function(n){Tr=!0,ls=n}};function hl(n,r,l,f,m,v,T,F,H){Tr=!1,ls=null,ia.apply(Zs,arguments)}function pl(n,r,l,f,m,v,T,F,H){if(hl.apply(this,arguments),Tr){if(Tr){var te=ls;Tr=!1,ls=null}else throw Error(t(198));Qi||(Qi=!0,Ks=te)}}function Ji(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function ml(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function _l(n){if(Ji(n)!==n)throw Error(t(188))}function hc(n){var r=n.alternate;if(!r){if(r=Ji(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var m=l.return;if(m===null)break;var v=m.alternate;if(v===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===v.child){for(v=m.child;v;){if(v===l)return _l(m),n;if(v===f)return _l(m),r;v=v.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=v;else{for(var T=!1,F=m.child;F;){if(F===l){T=!0,l=m,f=v;break}if(F===f){T=!0,f=m,l=v;break}F=F.sibling}if(!T){for(F=v.child;F;){if(F===l){T=!0,l=v,f=m;break}if(F===f){T=!0,f=v,l=m;break}F=F.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function gl(n){return n=hc(n),n!==null?vl(n):null}function vl(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=vl(n);if(r!==null)return r;n=n.sibling}return null}var b=e.unstable_scheduleCallback,q=e.unstable_cancelCallback,se=e.unstable_shouldYield,ae=e.unstable_requestPaint,X=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,Ve=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,tt=e.unstable_LowPriority,rt=e.unstable_IdlePriority,Ze=null,st=null;function wt(n){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Ze,n,void 0,(n.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:Qe,Nt=Math.log,Ct=Math.LN2;function Qe(n){return n>>>=0,n===0?32:31-(Nt(n)/Ct|0)|0}var bt=64,mt=4194304;function an(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ci(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,v=n.pingedLanes,T=l&268435455;if(T!==0){var F=T&~m;F!==0?f=an(F):(v&=T,v!==0&&(f=an(v)))}else T=l&~m,T!==0?f=an(T):v!==0&&(f=an(v));if(f===0)return 0;if(r!==0&&r!==f&&(r&m)===0&&(m=f&-f,v=r&-r,m>=v||m===16&&(v&4194240)!==0))return r;if((f&4)!==0&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-St(r),m=1<<l,f|=n[l],r&=~m;return f}function Ln(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function us(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,m=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-St(v),F=1<<T,H=m[T];H===-1?((F&l)===0||(F&f)!==0)&&(m[T]=Ln(F,r)):H<=r&&(n.expiredLanes|=F),v&=~F}}function Ut(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function In(){var n=bt;return bt<<=1,(bt&4194240)===0&&(bt=64),n}function Mn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Zt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-St(r),n[r]=l}function En(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-St(l),v=1<<m;r[m]=0,f[m]=-1,n[m]=-1,l&=~v}}function cs(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-St(l),m=1<<f;m&r|n[f]&r&&(n[f]|=r),l&=~m}}var _t=0;function _p(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var gp,pc,vp,xp,yp,mc=!1,xl=[],wr=null,Ar=null,Cr=null,ra=new Map,sa=new Map,Rr=[],k0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sp(n,r){switch(n){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":ra.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(r.pointerId)}}function oa(n,r,l,f,m,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:v,targetContainers:[m]},r!==null&&(r=ya(r),r!==null&&pc(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function z0(n,r,l,f,m){switch(r){case"focusin":return wr=oa(wr,n,r,l,f,m),!0;case"dragenter":return Ar=oa(Ar,n,r,l,f,m),!0;case"mouseover":return Cr=oa(Cr,n,r,l,f,m),!0;case"pointerover":var v=m.pointerId;return ra.set(v,oa(ra.get(v)||null,n,r,l,f,m)),!0;case"gotpointercapture":return v=m.pointerId,sa.set(v,oa(sa.get(v)||null,n,r,l,f,m)),!0}return!1}function Mp(n){var r=fs(n.target);if(r!==null){var l=Ji(r);if(l!==null){if(r=l.tag,r===13){if(r=ml(l),r!==null){n.blockedOn=r,yp(n.priority,function(){vp(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function yl(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=gc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);ct=f,l.target.dispatchEvent(f),ct=null}else return r=ya(l),r!==null&&pc(r),n.blockedOn=l,!1;r.shift()}return!0}function Ep(n,r,l){yl(n)&&l.delete(r)}function B0(){mc=!1,wr!==null&&yl(wr)&&(wr=null),Ar!==null&&yl(Ar)&&(Ar=null),Cr!==null&&yl(Cr)&&(Cr=null),ra.forEach(Ep),sa.forEach(Ep)}function aa(n,r){n.blockedOn===r&&(n.blockedOn=null,mc||(mc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,B0)))}function la(n){function r(m){return aa(m,n)}if(0<xl.length){aa(xl[0],n);for(var l=1;l<xl.length;l++){var f=xl[l];f.blockedOn===n&&(f.blockedOn=null)}}for(wr!==null&&aa(wr,n),Ar!==null&&aa(Ar,n),Cr!==null&&aa(Cr,n),ra.forEach(r),sa.forEach(r),l=0;l<Rr.length;l++)f=Rr[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<Rr.length&&(l=Rr[0],l.blockedOn===null);)Mp(l),l.blockedOn===null&&Rr.shift()}var Qs=w.ReactCurrentBatchConfig,Sl=!0;function V0(n,r,l,f){var m=_t,v=Qs.transition;Qs.transition=null;try{_t=1,_c(n,r,l,f)}finally{_t=m,Qs.transition=v}}function H0(n,r,l,f){var m=_t,v=Qs.transition;Qs.transition=null;try{_t=4,_c(n,r,l,f)}finally{_t=m,Qs.transition=v}}function _c(n,r,l,f){if(Sl){var m=gc(n,r,l,f);if(m===null)Nc(n,r,f,Ml,l),Sp(n,f);else if(z0(m,n,r,l,f))f.stopPropagation();else if(Sp(n,f),r&4&&-1<k0.indexOf(n)){for(;m!==null;){var v=ya(m);if(v!==null&&gp(v),v=gc(n,r,l,f),v===null&&Nc(n,r,f,Ml,l),v===m)break;m=v}m!==null&&f.stopPropagation()}else Nc(n,r,f,null,l)}}var Ml=null;function gc(n,r,l,f){if(Ml=null,n=G(f),n=fs(n),n!==null)if(r=Ji(n),r===null)n=null;else if(l=r.tag,l===13){if(n=ml(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ml=n,null}function Tp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Pe:return 1;case Ve:return 4;case Fe:case tt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var br=null,vc=null,El=null;function wp(){if(El)return El;var n,r=vc,l=r.length,f,m="value"in br?br.value:br.textContent,v=m.length;for(n=0;n<l&&r[n]===m[n];n++);var T=l-n;for(f=1;f<=T&&r[l-f]===m[v-f];f++);return El=m.slice(n,1<f?1-f:void 0)}function Tl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function wl(){return!0}function Ap(){return!1}function Jn(n){function r(l,f,m,v,T){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(l=n[F],this[F]=l?l(v):v[F]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?wl:Ap,this.isPropagationStopped=Ap,this}return oe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),r}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xc=Jn(Js),ua=oe({},Js,{view:0,detail:0}),G0=Jn(ua),yc,Sc,ca,Al=oe({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ca&&(ca&&n.type==="mousemove"?(yc=n.screenX-ca.screenX,Sc=n.screenY-ca.screenY):Sc=yc=0,ca=n),yc)},movementY:function(n){return"movementY"in n?n.movementY:Sc}}),Cp=Jn(Al),W0=oe({},Al,{dataTransfer:0}),X0=Jn(W0),j0=oe({},ua,{relatedTarget:0}),Mc=Jn(j0),Y0=oe({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),q0=Jn(Y0),$0=oe({},Js,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),K0=Jn($0),Z0=oe({},Js,{data:0}),Rp=Jn(Z0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=ex[n])?!!r[n]:!1}function Ec(){return tx}var nx=oe({},ua,{key:function(n){if(n.key){var r=Q0[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Tl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?J0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(n){return n.type==="keypress"?Tl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Tl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ix=Jn(nx),rx=oe({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=Jn(rx),sx=oe({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),ox=Jn(sx),ax=oe({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Jn(ax),ux=oe({},Al,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),cx=Jn(ux),fx=[9,13,27,32],Tc=c&&"CompositionEvent"in window,fa=null;c&&"documentMode"in document&&(fa=document.documentMode);var dx=c&&"TextEvent"in window&&!fa,Pp=c&&(!Tc||fa&&8<fa&&11>=fa),Dp=" ",Lp=!1;function Ip(n,r){switch(n){case"keyup":return fx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Np(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var eo=!1;function hx(n,r){switch(n){case"compositionend":return Np(r);case"keypress":return r.which!==32?null:(Lp=!0,Dp);case"textInput":return n=r.data,n===Dp&&Lp?null:n;default:return null}}function px(n,r){if(eo)return n==="compositionend"||!Tc&&Ip(n,r)?(n=wp(),El=vc=br=null,eo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Pp&&r.locale!=="ko"?null:r.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Up(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!mx[n.type]:r==="textarea"}function Fp(n,r,l,f){pe(f),r=Dl(r,"onChange"),0<r.length&&(l=new xc("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var da=null,ha=null;function _x(n){em(n,0)}function Cl(n){var r=so(n);if(on(r))return n}function gx(n,r){if(n==="change")return r}var Op=!1;if(c){var wc;if(c){var Ac="oninput"in document;if(!Ac){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Ac=typeof kp.oninput=="function"}wc=Ac}else wc=!1;Op=wc&&(!document.documentMode||9<document.documentMode)}function zp(){da&&(da.detachEvent("onpropertychange",Bp),ha=da=null)}function Bp(n){if(n.propertyName==="value"&&Cl(ha)){var r=[];Fp(r,ha,n,G(n)),di(_x,r)}}function vx(n,r,l){n==="focusin"?(zp(),da=r,ha=l,da.attachEvent("onpropertychange",Bp)):n==="focusout"&&zp()}function xx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Cl(ha)}function yx(n,r){if(n==="click")return Cl(r)}function Sx(n,r){if(n==="input"||n==="change")return Cl(r)}function Mx(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Ri=typeof Object.is=="function"?Object.is:Mx;function pa(n,r){if(Ri(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(r,m)||!Ri(n[m],r[m]))return!1}return!0}function Vp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Hp(n,r){var l=Vp(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Vp(l)}}function Gp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Gp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Wp(){for(var n=window,r=B();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=B(n.document)}return r}function Cc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Ex(n){var r=Wp(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Gp(l.ownerDocument.documentElement,l)){if(f!==null&&Cc(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,v=Math.min(f.start,m);f=f.end===void 0?v:Math.min(f.end,m),!n.extend&&v>f&&(m=f,f=v,v=m),m=Hp(l,v);var T=Hp(l,f);m&&T&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),v>f?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Tx=c&&"documentMode"in document&&11>=document.documentMode,to=null,Rc=null,ma=null,bc=!1;function Xp(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;bc||to==null||to!==B(f)||(f=to,"selectionStart"in f&&Cc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ma&&pa(ma,f)||(ma=f,f=Dl(Rc,"onSelect"),0<f.length&&(r=new xc("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=to)))}function Rl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var no={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},Pc={},jp={};c&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function bl(n){if(Pc[n])return Pc[n];if(!no[n])return n;var r=no[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in jp)return Pc[n]=r[l];return n}var Yp=bl("animationend"),qp=bl("animationiteration"),$p=bl("animationstart"),Kp=bl("transitionend"),Zp=new Map,Qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(n,r){Zp.set(n,r),a(r,[n])}for(var Dc=0;Dc<Qp.length;Dc++){var Lc=Qp[Dc],wx=Lc.toLowerCase(),Ax=Lc[0].toUpperCase()+Lc.slice(1);Pr(wx,"on"+Ax)}Pr(Yp,"onAnimationEnd"),Pr(qp,"onAnimationIteration"),Pr($p,"onAnimationStart"),Pr("dblclick","onDoubleClick"),Pr("focusin","onFocus"),Pr("focusout","onBlur"),Pr(Kp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cx=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function Jp(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,pl(f,r,void 0,n),n.currentTarget=null}function em(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],m=f.event;f=f.listeners;e:{var v=void 0;if(r)for(var T=f.length-1;0<=T;T--){var F=f[T],H=F.instance,te=F.currentTarget;if(F=F.listener,H!==v&&m.isPropagationStopped())break e;Jp(m,F,te),v=H}else for(T=0;T<f.length;T++){if(F=f[T],H=F.instance,te=F.currentTarget,F=F.listener,H!==v&&m.isPropagationStopped())break e;Jp(m,F,te),v=H}}}if(Qi)throw n=Ks,Qi=!1,Ks=null,n}function Vt(n,r){var l=r[Bc];l===void 0&&(l=r[Bc]=new Set);var f=n+"__bubble";l.has(f)||(tm(r,n,2,!1),l.add(f))}function Ic(n,r,l){var f=0;r&&(f|=4),tm(l,n,f,r)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function ga(n){if(!n[Pl]){n[Pl]=!0,i.forEach(function(l){l!=="selectionchange"&&(Cx.has(l)||Ic(l,!1,n),Ic(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Pl]||(r[Pl]=!0,Ic("selectionchange",!1,r))}}function tm(n,r,l,f){switch(Tp(r)){case 1:var m=V0;break;case 4:m=H0;break;default:m=_c}l=m.bind(null,r,l,n),m=void 0,!$s||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),f?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function Nc(n,r,l,f,m){var v=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var F=f.stateNode.containerInfo;if(F===m||F.nodeType===8&&F.parentNode===m)break;if(T===4)for(T=f.return;T!==null;){var H=T.tag;if((H===3||H===4)&&(H=T.stateNode.containerInfo,H===m||H.nodeType===8&&H.parentNode===m))return;T=T.return}for(;F!==null;){if(T=fs(F),T===null)return;if(H=T.tag,H===5||H===6){f=v=T;continue e}F=F.parentNode}}f=f.return}di(function(){var te=v,ge=G(l),ve=[];e:{var me=Zp.get(n);if(me!==void 0){var Oe=xc,He=n;switch(n){case"keypress":if(Tl(l)===0)break e;case"keydown":case"keyup":Oe=ix;break;case"focusin":He="focus",Oe=Mc;break;case"focusout":He="blur",Oe=Mc;break;case"beforeblur":case"afterblur":Oe=Mc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=X0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=ox;break;case Yp:case qp:case $p:Oe=q0;break;case Kp:Oe=lx;break;case"scroll":Oe=G0;break;case"wheel":Oe=cx;break;case"copy":case"cut":case"paste":Oe=K0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=bp}var je=(r&4)!==0,Qt=!je&&n==="scroll",$=je?me!==null?me+"Capture":null:me;je=[];for(var W=te,Q;W!==null;){Q=W;var we=Q.stateNode;if(Q.tag===5&&we!==null&&(Q=we,$!==null&&(we=Sn(W,$),we!=null&&je.push(va(W,we,Q)))),Qt)break;W=W.return}0<je.length&&(me=new Oe(me,He,null,l,ge),ve.push({event:me,listeners:je}))}}if((r&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",Oe=n==="mouseout"||n==="pointerout",me&&l!==ct&&(He=l.relatedTarget||l.fromElement)&&(fs(He)||He[er]))break e;if((Oe||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Oe?(He=l.relatedTarget||l.toElement,Oe=te,He=He?fs(He):null,He!==null&&(Qt=Ji(He),He!==Qt||He.tag!==5&&He.tag!==6)&&(He=null)):(Oe=null,He=te),Oe!==He)){if(je=Cp,we="onMouseLeave",$="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(je=bp,we="onPointerLeave",$="onPointerEnter",W="pointer"),Qt=Oe==null?me:so(Oe),Q=He==null?me:so(He),me=new je(we,W+"leave",Oe,l,ge),me.target=Qt,me.relatedTarget=Q,we=null,fs(ge)===te&&(je=new je($,W+"enter",He,l,ge),je.target=Q,je.relatedTarget=Qt,we=je),Qt=we,Oe&&He)t:{for(je=Oe,$=He,W=0,Q=je;Q;Q=io(Q))W++;for(Q=0,we=$;we;we=io(we))Q++;for(;0<W-Q;)je=io(je),W--;for(;0<Q-W;)$=io($),Q--;for(;W--;){if(je===$||$!==null&&je===$.alternate)break t;je=io(je),$=io($)}je=null}else je=null;Oe!==null&&nm(ve,me,Oe,je,!1),He!==null&&Qt!==null&&nm(ve,Qt,He,je,!0)}}e:{if(me=te?so(te):window,Oe=me.nodeName&&me.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&me.type==="file")var qe=gx;else if(Up(me))if(Op)qe=Sx;else{qe=xx;var Je=vx}else(Oe=me.nodeName)&&Oe.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(qe=yx);if(qe&&(qe=qe(n,te))){Fp(ve,qe,l,ge);break e}Je&&Je(n,me,te),n==="focusout"&&(Je=me._wrapperState)&&Je.controlled&&me.type==="number"&&We(me,"number",me.value)}switch(Je=te?so(te):window,n){case"focusin":(Up(Je)||Je.contentEditable==="true")&&(to=Je,Rc=te,ma=null);break;case"focusout":ma=Rc=to=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,Xp(ve,l,ge);break;case"selectionchange":if(Tx)break;case"keydown":case"keyup":Xp(ve,l,ge)}var et;if(Tc)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else eo?Ip(n,l)&&(ot="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ot="onCompositionStart");ot&&(Pp&&l.locale!=="ko"&&(eo||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&eo&&(et=wp()):(br=ge,vc="value"in br?br.value:br.textContent,eo=!0)),Je=Dl(te,ot),0<Je.length&&(ot=new Rp(ot,n,null,l,ge),ve.push({event:ot,listeners:Je}),et?ot.data=et:(et=Np(l),et!==null&&(ot.data=et)))),(et=dx?hx(n,l):px(n,l))&&(te=Dl(te,"onBeforeInput"),0<te.length&&(ge=new Rp("onBeforeInput","beforeinput",null,l,ge),ve.push({event:ge,listeners:te}),ge.data=et))}em(ve,r)})}function va(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Dl(n,r){for(var l=r+"Capture",f=[];n!==null;){var m=n,v=m.stateNode;m.tag===5&&v!==null&&(m=v,v=Sn(n,l),v!=null&&f.unshift(va(n,v,m)),v=Sn(n,r),v!=null&&f.push(va(n,v,m))),n=n.return}return f}function io(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function nm(n,r,l,f,m){for(var v=r._reactName,T=[];l!==null&&l!==f;){var F=l,H=F.alternate,te=F.stateNode;if(H!==null&&H===f)break;F.tag===5&&te!==null&&(F=te,m?(H=Sn(l,v),H!=null&&T.unshift(va(l,H,F))):m||(H=Sn(l,v),H!=null&&T.push(va(l,H,F)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var Rx=/\r\n?/g,bx=/\u0000|\uFFFD/g;function im(n){return(typeof n=="string"?n:""+n).replace(Rx,`
`).replace(bx,"")}function Ll(n,r,l){if(r=im(r),im(n)!==r&&l)throw Error(t(425))}function Il(){}var Uc=null,Fc=null;function Oc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var kc=typeof setTimeout=="function"?setTimeout:void 0,Px=typeof clearTimeout=="function"?clearTimeout:void 0,rm=typeof Promise=="function"?Promise:void 0,Dx=typeof queueMicrotask=="function"?queueMicrotask:typeof rm<"u"?function(n){return rm.resolve(null).then(n).catch(Lx)}:kc;function Lx(n){setTimeout(function(){throw n})}function zc(n,r){var l=r,f=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){n.removeChild(m),la(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);la(r)}function Dr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function sm(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var ro=Math.random().toString(36).slice(2),zi="__reactFiber$"+ro,xa="__reactProps$"+ro,er="__reactContainer$"+ro,Bc="__reactEvents$"+ro,Ix="__reactListeners$"+ro,Nx="__reactHandles$"+ro;function fs(n){var r=n[zi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[er]||l[zi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=sm(n);n!==null;){if(l=n[zi])return l;n=sm(n)}return r}n=l,l=n.parentNode}return null}function ya(n){return n=n[zi]||n[er],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function so(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Nl(n){return n[xa]||null}var Vc=[],oo=-1;function Lr(n){return{current:n}}function Ht(n){0>oo||(n.current=Vc[oo],Vc[oo]=null,oo--)}function kt(n,r){oo++,Vc[oo]=n.current,n.current=r}var Ir={},Tn=Lr(Ir),zn=Lr(!1),ds=Ir;function ao(n,r){var l=n.type.contextTypes;if(!l)return Ir;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var m={},v;for(v in l)m[v]=r[v];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function Bn(n){return n=n.childContextTypes,n!=null}function Ul(){Ht(zn),Ht(Tn)}function om(n,r,l){if(Tn.current!==Ir)throw Error(t(168));kt(Tn,r),kt(zn,l)}function am(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in r))throw Error(t(108,de(n)||"Unknown",m));return oe({},l,f)}function Fl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ir,ds=Tn.current,kt(Tn,n),kt(zn,zn.current),!0}function lm(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=am(n,r,ds),f.__reactInternalMemoizedMergedChildContext=n,Ht(zn),Ht(Tn),kt(Tn,n)):Ht(zn),kt(zn,l)}var tr=null,Ol=!1,Hc=!1;function um(n){tr===null?tr=[n]:tr.push(n)}function Ux(n){Ol=!0,um(n)}function Nr(){if(!Hc&&tr!==null){Hc=!0;var n=0,r=_t;try{var l=tr;for(_t=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}tr=null,Ol=!1}catch(m){throw tr!==null&&(tr=tr.slice(n+1)),b(Pe,Nr),m}finally{_t=r,Hc=!1}}return null}var lo=[],uo=0,kl=null,zl=0,hi=[],pi=0,hs=null,nr=1,ir="";function ps(n,r){lo[uo++]=zl,lo[uo++]=kl,kl=n,zl=r}function cm(n,r,l){hi[pi++]=nr,hi[pi++]=ir,hi[pi++]=hs,hs=n;var f=nr;n=ir;var m=32-St(f)-1;f&=~(1<<m),l+=1;var v=32-St(r)+m;if(30<v){var T=m-m%5;v=(f&(1<<T)-1).toString(32),f>>=T,m-=T,nr=1<<32-St(r)+m|l<<m|f,ir=v+n}else nr=1<<v|l<<m|f,ir=n}function Gc(n){n.return!==null&&(ps(n,1),cm(n,1,0))}function Wc(n){for(;n===kl;)kl=lo[--uo],lo[uo]=null,zl=lo[--uo],lo[uo]=null;for(;n===hs;)hs=hi[--pi],hi[pi]=null,ir=hi[--pi],hi[pi]=null,nr=hi[--pi],hi[pi]=null}var ei=null,ti=null,Gt=!1,bi=null;function fm(n,r){var l=vi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function dm(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ei=n,ti=Dr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ei=n,ti=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=hs!==null?{id:nr,overflow:ir}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=vi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,ei=n,ti=null,!0):!1;default:return!1}}function Xc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function jc(n){if(Gt){var r=ti;if(r){var l=r;if(!dm(n,r)){if(Xc(n))throw Error(t(418));r=Dr(l.nextSibling);var f=ei;r&&dm(n,r)?fm(f,l):(n.flags=n.flags&-4097|2,Gt=!1,ei=n)}}else{if(Xc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Gt=!1,ei=n}}}function hm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ei=n}function Bl(n){if(n!==ei)return!1;if(!Gt)return hm(n),Gt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Oc(n.type,n.memoizedProps)),r&&(r=ti)){if(Xc(n))throw pm(),Error(t(418));for(;r;)fm(n,r),r=Dr(r.nextSibling)}if(hm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){ti=Dr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}ti=null}}else ti=ei?Dr(n.stateNode.nextSibling):null;return!0}function pm(){for(var n=ti;n;)n=Dr(n.nextSibling)}function co(){ti=ei=null,Gt=!1}function Yc(n){bi===null?bi=[n]:bi.push(n)}var Fx=w.ReactCurrentBatchConfig;function Sa(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var m=f,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(T){var F=m.refs;T===null?delete F[v]:F[v]=T},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Vl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function mm(n){var r=n._init;return r(n._payload)}function _m(n){function r($,W){if(n){var Q=$.deletions;Q===null?($.deletions=[W],$.flags|=16):Q.push(W)}}function l($,W){if(!n)return null;for(;W!==null;)r($,W),W=W.sibling;return null}function f($,W){for($=new Map;W!==null;)W.key!==null?$.set(W.key,W):$.set(W.index,W),W=W.sibling;return $}function m($,W){return $=Hr($,W),$.index=0,$.sibling=null,$}function v($,W,Q){return $.index=Q,n?(Q=$.alternate,Q!==null?(Q=Q.index,Q<W?($.flags|=2,W):Q):($.flags|=2,W)):($.flags|=1048576,W)}function T($){return n&&$.alternate===null&&($.flags|=2),$}function F($,W,Q,we){return W===null||W.tag!==6?(W=zf(Q,$.mode,we),W.return=$,W):(W=m(W,Q),W.return=$,W)}function H($,W,Q,we){var qe=Q.type;return qe===N?ge($,W,Q.props.children,we,Q.key):W!==null&&(W.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===J&&mm(qe)===W.type)?(we=m(W,Q.props),we.ref=Sa($,W,Q),we.return=$,we):(we=fu(Q.type,Q.key,Q.props,null,$.mode,we),we.ref=Sa($,W,Q),we.return=$,we)}function te($,W,Q,we){return W===null||W.tag!==4||W.stateNode.containerInfo!==Q.containerInfo||W.stateNode.implementation!==Q.implementation?(W=Bf(Q,$.mode,we),W.return=$,W):(W=m(W,Q.children||[]),W.return=$,W)}function ge($,W,Q,we,qe){return W===null||W.tag!==7?(W=Ms(Q,$.mode,we,qe),W.return=$,W):(W=m(W,Q),W.return=$,W)}function ve($,W,Q){if(typeof W=="string"&&W!==""||typeof W=="number")return W=zf(""+W,$.mode,Q),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case L:return Q=fu(W.type,W.key,W.props,null,$.mode,Q),Q.ref=Sa($,null,W),Q.return=$,Q;case I:return W=Bf(W,$.mode,Q),W.return=$,W;case J:var we=W._init;return ve($,we(W._payload),Q)}if(at(W)||ce(W))return W=Ms(W,$.mode,Q,null),W.return=$,W;Vl($,W)}return null}function me($,W,Q,we){var qe=W!==null?W.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return qe!==null?null:F($,W,""+Q,we);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case L:return Q.key===qe?H($,W,Q,we):null;case I:return Q.key===qe?te($,W,Q,we):null;case J:return qe=Q._init,me($,W,qe(Q._payload),we)}if(at(Q)||ce(Q))return qe!==null?null:ge($,W,Q,we,null);Vl($,Q)}return null}function Oe($,W,Q,we,qe){if(typeof we=="string"&&we!==""||typeof we=="number")return $=$.get(Q)||null,F(W,$,""+we,qe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case L:return $=$.get(we.key===null?Q:we.key)||null,H(W,$,we,qe);case I:return $=$.get(we.key===null?Q:we.key)||null,te(W,$,we,qe);case J:var Je=we._init;return Oe($,W,Q,Je(we._payload),qe)}if(at(we)||ce(we))return $=$.get(Q)||null,ge(W,$,we,qe,null);Vl(W,we)}return null}function He($,W,Q,we){for(var qe=null,Je=null,et=W,ot=W=0,mn=null;et!==null&&ot<Q.length;ot++){et.index>ot?(mn=et,et=null):mn=et.sibling;var Et=me($,et,Q[ot],we);if(Et===null){et===null&&(et=mn);break}n&&et&&Et.alternate===null&&r($,et),W=v(Et,W,ot),Je===null?qe=Et:Je.sibling=Et,Je=Et,et=mn}if(ot===Q.length)return l($,et),Gt&&ps($,ot),qe;if(et===null){for(;ot<Q.length;ot++)et=ve($,Q[ot],we),et!==null&&(W=v(et,W,ot),Je===null?qe=et:Je.sibling=et,Je=et);return Gt&&ps($,ot),qe}for(et=f($,et);ot<Q.length;ot++)mn=Oe(et,$,ot,Q[ot],we),mn!==null&&(n&&mn.alternate!==null&&et.delete(mn.key===null?ot:mn.key),W=v(mn,W,ot),Je===null?qe=mn:Je.sibling=mn,Je=mn);return n&&et.forEach(function(Gr){return r($,Gr)}),Gt&&ps($,ot),qe}function je($,W,Q,we){var qe=ce(Q);if(typeof qe!="function")throw Error(t(150));if(Q=qe.call(Q),Q==null)throw Error(t(151));for(var Je=qe=null,et=W,ot=W=0,mn=null,Et=Q.next();et!==null&&!Et.done;ot++,Et=Q.next()){et.index>ot?(mn=et,et=null):mn=et.sibling;var Gr=me($,et,Et.value,we);if(Gr===null){et===null&&(et=mn);break}n&&et&&Gr.alternate===null&&r($,et),W=v(Gr,W,ot),Je===null?qe=Gr:Je.sibling=Gr,Je=Gr,et=mn}if(Et.done)return l($,et),Gt&&ps($,ot),qe;if(et===null){for(;!Et.done;ot++,Et=Q.next())Et=ve($,Et.value,we),Et!==null&&(W=v(Et,W,ot),Je===null?qe=Et:Je.sibling=Et,Je=Et);return Gt&&ps($,ot),qe}for(et=f($,et);!Et.done;ot++,Et=Q.next())Et=Oe(et,$,ot,Et.value,we),Et!==null&&(n&&Et.alternate!==null&&et.delete(Et.key===null?ot:Et.key),W=v(Et,W,ot),Je===null?qe=Et:Je.sibling=Et,Je=Et);return n&&et.forEach(function(my){return r($,my)}),Gt&&ps($,ot),qe}function Qt($,W,Q,we){if(typeof Q=="object"&&Q!==null&&Q.type===N&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case L:e:{for(var qe=Q.key,Je=W;Je!==null;){if(Je.key===qe){if(qe=Q.type,qe===N){if(Je.tag===7){l($,Je.sibling),W=m(Je,Q.props.children),W.return=$,$=W;break e}}else if(Je.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===J&&mm(qe)===Je.type){l($,Je.sibling),W=m(Je,Q.props),W.ref=Sa($,Je,Q),W.return=$,$=W;break e}l($,Je);break}else r($,Je);Je=Je.sibling}Q.type===N?(W=Ms(Q.props.children,$.mode,we,Q.key),W.return=$,$=W):(we=fu(Q.type,Q.key,Q.props,null,$.mode,we),we.ref=Sa($,W,Q),we.return=$,$=we)}return T($);case I:e:{for(Je=Q.key;W!==null;){if(W.key===Je)if(W.tag===4&&W.stateNode.containerInfo===Q.containerInfo&&W.stateNode.implementation===Q.implementation){l($,W.sibling),W=m(W,Q.children||[]),W.return=$,$=W;break e}else{l($,W);break}else r($,W);W=W.sibling}W=Bf(Q,$.mode,we),W.return=$,$=W}return T($);case J:return Je=Q._init,Qt($,W,Je(Q._payload),we)}if(at(Q))return He($,W,Q,we);if(ce(Q))return je($,W,Q,we);Vl($,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,W!==null&&W.tag===6?(l($,W.sibling),W=m(W,Q),W.return=$,$=W):(l($,W),W=zf(Q,$.mode,we),W.return=$,$=W),T($)):l($,W)}return Qt}var fo=_m(!0),gm=_m(!1),Hl=Lr(null),Gl=null,ho=null,qc=null;function $c(){qc=ho=Gl=null}function Kc(n){var r=Hl.current;Ht(Hl),n._currentValue=r}function Zc(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function po(n,r){Gl=n,qc=ho=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Vn=!0),n.firstContext=null)}function mi(n){var r=n._currentValue;if(qc!==n)if(n={context:n,memoizedValue:r,next:null},ho===null){if(Gl===null)throw Error(t(308));ho=n,Gl.dependencies={lanes:0,firstContext:n}}else ho=ho.next=n;return r}var ms=null;function Qc(n){ms===null?ms=[n]:ms.push(n)}function vm(n,r,l,f){var m=r.interleaved;return m===null?(l.next=l,Qc(r)):(l.next=m.next,m.next=l),r.interleaved=l,rr(n,f)}function rr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Ur=!1;function Jc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xm(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function sr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Fr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(Mt&2)!==0){var m=f.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),f.pending=r,rr(n,l)}return m=f.interleaved,m===null?(r.next=r,Qc(f)):(r.next=m.next,m.next=r),f.interleaved=r,rr(n,l)}function Wl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,cs(n,l)}}function ym(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?m=v=T:v=v.next=T,l=l.next}while(l!==null);v===null?m=v=r:v=v.next=r}else m=v=r;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:v,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function Xl(n,r,l,f){var m=n.updateQueue;Ur=!1;var v=m.firstBaseUpdate,T=m.lastBaseUpdate,F=m.shared.pending;if(F!==null){m.shared.pending=null;var H=F,te=H.next;H.next=null,T===null?v=te:T.next=te,T=H;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,F=ge.lastBaseUpdate,F!==T&&(F===null?ge.firstBaseUpdate=te:F.next=te,ge.lastBaseUpdate=H))}if(v!==null){var ve=m.baseState;T=0,ge=te=H=null,F=v;do{var me=F.lane,Oe=F.eventTime;if((f&me)===me){ge!==null&&(ge=ge.next={eventTime:Oe,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var He=n,je=F;switch(me=r,Oe=l,je.tag){case 1:if(He=je.payload,typeof He=="function"){ve=He.call(Oe,ve,me);break e}ve=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=je.payload,me=typeof He=="function"?He.call(Oe,ve,me):He,me==null)break e;ve=oe({},ve,me);break e;case 2:Ur=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,me=m.effects,me===null?m.effects=[F]:me.push(F))}else Oe={eventTime:Oe,lane:me,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ge===null?(te=ge=Oe,H=ve):ge=ge.next=Oe,T|=me;if(F=F.next,F===null){if(F=m.shared.pending,F===null)break;me=F,F=me.next,me.next=null,m.lastBaseUpdate=me,m.shared.pending=null}}while(!0);if(ge===null&&(H=ve),m.baseState=H,m.firstBaseUpdate=te,m.lastBaseUpdate=ge,r=m.shared.interleaved,r!==null){m=r;do T|=m.lane,m=m.next;while(m!==r)}else v===null&&(m.shared.lanes=0);vs|=T,n.lanes=T,n.memoizedState=ve}}function Sm(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var Ma={},Bi=Lr(Ma),Ea=Lr(Ma),Ta=Lr(Ma);function _s(n){if(n===Ma)throw Error(t(174));return n}function ef(n,r){switch(kt(Ta,r),kt(Ea,n),kt(Bi,Ma),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:_e(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=_e(r,n)}Ht(Bi),kt(Bi,r)}function mo(){Ht(Bi),Ht(Ea),Ht(Ta)}function Mm(n){_s(Ta.current);var r=_s(Bi.current),l=_e(r,n.type);r!==l&&(kt(Ea,n),kt(Bi,l))}function tf(n){Ea.current===n&&(Ht(Bi),Ht(Ea))}var Xt=Lr(0);function jl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var nf=[];function rf(){for(var n=0;n<nf.length;n++)nf[n]._workInProgressVersionPrimary=null;nf.length=0}var Yl=w.ReactCurrentDispatcher,sf=w.ReactCurrentBatchConfig,gs=0,jt=null,ln=null,hn=null,ql=!1,wa=!1,Aa=0,Ox=0;function wn(){throw Error(t(321))}function of(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Ri(n[l],r[l]))return!1;return!0}function af(n,r,l,f,m,v){if(gs=v,jt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Yl.current=n===null||n.memoizedState===null?Vx:Hx,n=l(f,m),wa){v=0;do{if(wa=!1,Aa=0,25<=v)throw Error(t(301));v+=1,hn=ln=null,r.updateQueue=null,Yl.current=Gx,n=l(f,m)}while(wa)}if(Yl.current=Zl,r=ln!==null&&ln.next!==null,gs=0,hn=ln=jt=null,ql=!1,r)throw Error(t(300));return n}function lf(){var n=Aa!==0;return Aa=0,n}function Vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?jt.memoizedState=hn=n:hn=hn.next=n,hn}function _i(){if(ln===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=ln.next;var r=hn===null?jt.memoizedState:hn.next;if(r!==null)hn=r,ln=n;else{if(n===null)throw Error(t(310));ln=n,n={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},hn===null?jt.memoizedState=hn=n:hn=hn.next=n}return hn}function Ca(n,r){return typeof r=="function"?r(n):r}function uf(n){var r=_i(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=ln,m=f.baseQueue,v=l.pending;if(v!==null){if(m!==null){var T=m.next;m.next=v.next,v.next=T}f.baseQueue=m=v,l.pending=null}if(m!==null){v=m.next,f=f.baseState;var F=T=null,H=null,te=v;do{var ge=te.lane;if((gs&ge)===ge)H!==null&&(H=H.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),f=te.hasEagerState?te.eagerState:n(f,te.action);else{var ve={lane:ge,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};H===null?(F=H=ve,T=f):H=H.next=ve,jt.lanes|=ge,vs|=ge}te=te.next}while(te!==null&&te!==v);H===null?T=f:H.next=F,Ri(f,r.memoizedState)||(Vn=!0),r.memoizedState=f,r.baseState=T,r.baseQueue=H,l.lastRenderedState=f}if(n=l.interleaved,n!==null){m=n;do v=m.lane,jt.lanes|=v,vs|=v,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function cf(n){var r=_i(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,m=l.pending,v=r.memoizedState;if(m!==null){l.pending=null;var T=m=m.next;do v=n(v,T.action),T=T.next;while(T!==m);Ri(v,r.memoizedState)||(Vn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,f]}function Em(){}function Tm(n,r){var l=jt,f=_i(),m=r(),v=!Ri(f.memoizedState,m);if(v&&(f.memoizedState=m,Vn=!0),f=f.queue,ff(Cm.bind(null,l,f,n),[n]),f.getSnapshot!==r||v||hn!==null&&hn.memoizedState.tag&1){if(l.flags|=2048,Ra(9,Am.bind(null,l,f,m,r),void 0,null),pn===null)throw Error(t(349));(gs&30)!==0||wm(l,r,m)}return m}function wm(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=jt.updateQueue,r===null?(r={lastEffect:null,stores:null},jt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Am(n,r,l,f){r.value=l,r.getSnapshot=f,Rm(r)&&bm(n)}function Cm(n,r,l){return l(function(){Rm(r)&&bm(n)})}function Rm(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Ri(n,l)}catch{return!0}}function bm(n){var r=rr(n,1);r!==null&&Ii(r,n,1,-1)}function Pm(n){var r=Vi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:n},r.queue=n,n=n.dispatch=Bx.bind(null,jt,n),[r.memoizedState,n]}function Ra(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=jt.updateQueue,r===null?(r={lastEffect:null,stores:null},jt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function Dm(){return _i().memoizedState}function $l(n,r,l,f){var m=Vi();jt.flags|=n,m.memoizedState=Ra(1|r,l,void 0,f===void 0?null:f)}function Kl(n,r,l,f){var m=_i();f=f===void 0?null:f;var v=void 0;if(ln!==null){var T=ln.memoizedState;if(v=T.destroy,f!==null&&of(f,T.deps)){m.memoizedState=Ra(r,l,v,f);return}}jt.flags|=n,m.memoizedState=Ra(1|r,l,v,f)}function Lm(n,r){return $l(8390656,8,n,r)}function ff(n,r){return Kl(2048,8,n,r)}function Im(n,r){return Kl(4,2,n,r)}function Nm(n,r){return Kl(4,4,n,r)}function Um(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Fm(n,r,l){return l=l!=null?l.concat([n]):null,Kl(4,4,Um.bind(null,r,n),l)}function df(){}function Om(n,r){var l=_i();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&of(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function km(n,r){var l=_i();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&of(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function zm(n,r,l){return(gs&21)===0?(n.baseState&&(n.baseState=!1,Vn=!0),n.memoizedState=l):(Ri(l,r)||(l=In(),jt.lanes|=l,vs|=l,n.baseState=!0),r)}function kx(n,r){var l=_t;_t=l!==0&&4>l?l:4,n(!0);var f=sf.transition;sf.transition={};try{n(!1),r()}finally{_t=l,sf.transition=f}}function Bm(){return _i().memoizedState}function zx(n,r,l){var f=Br(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},Vm(n))Hm(r,l);else if(l=vm(n,r,l,f),l!==null){var m=Un();Ii(l,n,f,m),Gm(l,r,f)}}function Bx(n,r,l){var f=Br(n),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(Vm(n))Hm(r,m);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var T=r.lastRenderedState,F=v(T,l);if(m.hasEagerState=!0,m.eagerState=F,Ri(F,T)){var H=r.interleaved;H===null?(m.next=m,Qc(r)):(m.next=H.next,H.next=m),r.interleaved=m;return}}catch{}finally{}l=vm(n,r,m,f),l!==null&&(m=Un(),Ii(l,n,f,m),Gm(l,r,f))}}function Vm(n){var r=n.alternate;return n===jt||r!==null&&r===jt}function Hm(n,r){wa=ql=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Gm(n,r,l){if((l&4194240)!==0){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,cs(n,l)}}var Zl={readContext:mi,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},Vx={readContext:mi,useCallback:function(n,r){return Vi().memoizedState=[n,r===void 0?null:r],n},useContext:mi,useEffect:Lm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,$l(4194308,4,Um.bind(null,r,n),l)},useLayoutEffect:function(n,r){return $l(4194308,4,n,r)},useInsertionEffect:function(n,r){return $l(4,2,n,r)},useMemo:function(n,r){var l=Vi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=Vi();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=zx.bind(null,jt,n),[f.memoizedState,n]},useRef:function(n){var r=Vi();return n={current:n},r.memoizedState=n},useState:Pm,useDebugValue:df,useDeferredValue:function(n){return Vi().memoizedState=n},useTransition:function(){var n=Pm(!1),r=n[0];return n=kx.bind(null,n[1]),Vi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=jt,m=Vi();if(Gt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),pn===null)throw Error(t(349));(gs&30)!==0||wm(f,r,l)}m.memoizedState=l;var v={value:l,getSnapshot:r};return m.queue=v,Lm(Cm.bind(null,f,v,n),[n]),f.flags|=2048,Ra(9,Am.bind(null,f,v,l,r),void 0,null),l},useId:function(){var n=Vi(),r=pn.identifierPrefix;if(Gt){var l=ir,f=nr;l=(f&~(1<<32-St(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=Aa++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Ox++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Hx={readContext:mi,useCallback:Om,useContext:mi,useEffect:ff,useImperativeHandle:Fm,useInsertionEffect:Im,useLayoutEffect:Nm,useMemo:km,useReducer:uf,useRef:Dm,useState:function(){return uf(Ca)},useDebugValue:df,useDeferredValue:function(n){var r=_i();return zm(r,ln.memoizedState,n)},useTransition:function(){var n=uf(Ca)[0],r=_i().memoizedState;return[n,r]},useMutableSource:Em,useSyncExternalStore:Tm,useId:Bm,unstable_isNewReconciler:!1},Gx={readContext:mi,useCallback:Om,useContext:mi,useEffect:ff,useImperativeHandle:Fm,useInsertionEffect:Im,useLayoutEffect:Nm,useMemo:km,useReducer:cf,useRef:Dm,useState:function(){return cf(Ca)},useDebugValue:df,useDeferredValue:function(n){var r=_i();return ln===null?r.memoizedState=n:zm(r,ln.memoizedState,n)},useTransition:function(){var n=cf(Ca)[0],r=_i().memoizedState;return[n,r]},useMutableSource:Em,useSyncExternalStore:Tm,useId:Bm,unstable_isNewReconciler:!1};function Pi(n,r){if(n&&n.defaultProps){r=oe({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function hf(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:oe({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Ql={isMounted:function(n){return(n=n._reactInternals)?Ji(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=Un(),m=Br(n),v=sr(f,m);v.payload=r,l!=null&&(v.callback=l),r=Fr(n,v,m),r!==null&&(Ii(r,n,m,f),Wl(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=Un(),m=Br(n),v=sr(f,m);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Fr(n,v,m),r!==null&&(Ii(r,n,m,f),Wl(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Un(),f=Br(n),m=sr(l,f);m.tag=2,r!=null&&(m.callback=r),r=Fr(n,m,f),r!==null&&(Ii(r,n,f,l),Wl(r,n,f))}};function Wm(n,r,l,f,m,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,v,T):r.prototype&&r.prototype.isPureReactComponent?!pa(l,f)||!pa(m,v):!0}function Xm(n,r,l){var f=!1,m=Ir,v=r.contextType;return typeof v=="object"&&v!==null?v=mi(v):(m=Bn(r)?ds:Tn.current,f=r.contextTypes,v=(f=f!=null)?ao(n,m):Ir),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ql,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=v),r}function jm(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&Ql.enqueueReplaceState(r,r.state,null)}function pf(n,r,l,f){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},Jc(n);var v=r.contextType;typeof v=="object"&&v!==null?m.context=mi(v):(v=Bn(r)?ds:Tn.current,m.context=ao(n,v)),m.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(hf(n,r,v,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&Ql.enqueueReplaceState(m,m.state,null),Xl(n,l,m,f),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function _o(n,r){try{var l="",f=r;do l+=Ie(f),f=f.return;while(f);var m=l}catch(v){m=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:m,digest:null}}function mf(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function _f(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Wx=typeof WeakMap=="function"?WeakMap:Map;function Ym(n,r,l){l=sr(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){su||(su=!0,Df=f),_f(n,r)},l}function qm(n,r,l){l=sr(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;l.payload=function(){return f(m)},l.callback=function(){_f(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){_f(n,r),typeof f!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function $m(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new Wx;var m=new Set;f.set(r,m)}else m=f.get(r),m===void 0&&(m=new Set,f.set(r,m));m.has(l)||(m.add(l),n=ry.bind(null,n,r,l),r.then(n,n))}function Km(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Zm(n,r,l,f,m){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=sr(-1,1),r.tag=2,Fr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var Xx=w.ReactCurrentOwner,Vn=!1;function Nn(n,r,l,f){r.child=n===null?gm(r,null,l,f):fo(r,n.child,l,f)}function Qm(n,r,l,f,m){l=l.render;var v=r.ref;return po(r,m),f=af(n,r,l,f,v,m),l=lf(),n!==null&&!Vn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,or(n,r,m)):(Gt&&l&&Gc(r),r.flags|=1,Nn(n,r,f,m),r.child)}function Jm(n,r,l,f,m){if(n===null){var v=l.type;return typeof v=="function"&&!kf(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,e_(n,r,v,f,m)):(n=fu(l.type,null,f,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&m)===0){var T=v.memoizedProps;if(l=l.compare,l=l!==null?l:pa,l(T,f)&&n.ref===r.ref)return or(n,r,m)}return r.flags|=1,n=Hr(v,f),n.ref=r.ref,n.return=r,r.child=n}function e_(n,r,l,f,m){if(n!==null){var v=n.memoizedProps;if(pa(v,f)&&n.ref===r.ref)if(Vn=!1,r.pendingProps=f=v,(n.lanes&m)!==0)(n.flags&131072)!==0&&(Vn=!0);else return r.lanes=n.lanes,or(n,r,m)}return gf(n,r,l,f,m)}function t_(n,r,l){var f=r.pendingProps,m=f.children,v=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(vo,ni),ni|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,kt(vo,ni),ni|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=v!==null?v.baseLanes:l,kt(vo,ni),ni|=f}else v!==null?(f=v.baseLanes|l,r.memoizedState=null):f=l,kt(vo,ni),ni|=f;return Nn(n,r,m,l),r.child}function n_(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function gf(n,r,l,f,m){var v=Bn(l)?ds:Tn.current;return v=ao(r,v),po(r,m),l=af(n,r,l,f,v,m),f=lf(),n!==null&&!Vn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,or(n,r,m)):(Gt&&f&&Gc(r),r.flags|=1,Nn(n,r,l,m),r.child)}function i_(n,r,l,f,m){if(Bn(l)){var v=!0;Fl(r)}else v=!1;if(po(r,m),r.stateNode===null)eu(n,r),Xm(r,l,f),pf(r,l,f,m),f=!0;else if(n===null){var T=r.stateNode,F=r.memoizedProps;T.props=F;var H=T.context,te=l.contextType;typeof te=="object"&&te!==null?te=mi(te):(te=Bn(l)?ds:Tn.current,te=ao(r,te));var ge=l.getDerivedStateFromProps,ve=typeof ge=="function"||typeof T.getSnapshotBeforeUpdate=="function";ve||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==f||H!==te)&&jm(r,T,f,te),Ur=!1;var me=r.memoizedState;T.state=me,Xl(r,f,T,m),H=r.memoizedState,F!==f||me!==H||zn.current||Ur?(typeof ge=="function"&&(hf(r,l,ge,f),H=r.memoizedState),(F=Ur||Wm(r,l,F,f,me,H,te))?(ve||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=H),T.props=f,T.state=H,T.context=te,f=F):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{T=r.stateNode,xm(n,r),F=r.memoizedProps,te=r.type===r.elementType?F:Pi(r.type,F),T.props=te,ve=r.pendingProps,me=T.context,H=l.contextType,typeof H=="object"&&H!==null?H=mi(H):(H=Bn(l)?ds:Tn.current,H=ao(r,H));var Oe=l.getDerivedStateFromProps;(ge=typeof Oe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==ve||me!==H)&&jm(r,T,f,H),Ur=!1,me=r.memoizedState,T.state=me,Xl(r,f,T,m);var He=r.memoizedState;F!==ve||me!==He||zn.current||Ur?(typeof Oe=="function"&&(hf(r,l,Oe,f),He=r.memoizedState),(te=Ur||Wm(r,l,te,f,me,He,H)||!1)?(ge||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,He,H),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,He,H)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=He),T.props=f,T.state=He,T.context=H,f=te):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),f=!1)}return vf(n,r,l,f,v,m)}function vf(n,r,l,f,m,v){n_(n,r);var T=(r.flags&128)!==0;if(!f&&!T)return m&&lm(r,l,!1),or(n,r,v);f=r.stateNode,Xx.current=r;var F=T&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&T?(r.child=fo(r,n.child,null,v),r.child=fo(r,null,F,v)):Nn(n,r,F,v),r.memoizedState=f.state,m&&lm(r,l,!0),r.child}function r_(n){var r=n.stateNode;r.pendingContext?om(n,r.pendingContext,r.pendingContext!==r.context):r.context&&om(n,r.context,!1),ef(n,r.containerInfo)}function s_(n,r,l,f,m){return co(),Yc(m),r.flags|=256,Nn(n,r,l,f),r.child}var xf={dehydrated:null,treeContext:null,retryLane:0};function yf(n){return{baseLanes:n,cachePool:null,transitions:null}}function o_(n,r,l){var f=r.pendingProps,m=Xt.current,v=!1,T=(r.flags&128)!==0,F;if((F=T)||(F=n!==null&&n.memoizedState===null?!1:(m&2)!==0),F?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),kt(Xt,m&1),n===null)return jc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=f.children,n=f.fallback,v?(f=r.mode,v=r.child,T={mode:"hidden",children:T},(f&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=du(T,f,0,null),n=Ms(n,f,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=yf(l),r.memoizedState=xf,n):Sf(r,T));if(m=n.memoizedState,m!==null&&(F=m.dehydrated,F!==null))return jx(n,r,T,f,F,m,l);if(v){v=f.fallback,T=r.mode,m=n.child,F=m.sibling;var H={mode:"hidden",children:f.children};return(T&1)===0&&r.child!==m?(f=r.child,f.childLanes=0,f.pendingProps=H,r.deletions=null):(f=Hr(m,H),f.subtreeFlags=m.subtreeFlags&14680064),F!==null?v=Hr(F,v):(v=Ms(v,T,l,null),v.flags|=2),v.return=r,f.return=r,f.sibling=v,r.child=f,f=v,v=r.child,T=n.child.memoizedState,T=T===null?yf(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~l,r.memoizedState=xf,f}return v=n.child,n=v.sibling,f=Hr(v,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function Sf(n,r){return r=du({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Jl(n,r,l,f){return f!==null&&Yc(f),fo(r,n.child,null,l),n=Sf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function jx(n,r,l,f,m,v,T){if(l)return r.flags&256?(r.flags&=-257,f=mf(Error(t(422))),Jl(n,r,T,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=f.fallback,m=r.mode,f=du({mode:"visible",children:f.children},m,0,null),v=Ms(v,m,T,null),v.flags|=2,f.return=r,v.return=r,f.sibling=v,r.child=f,(r.mode&1)!==0&&fo(r,n.child,null,T),r.child.memoizedState=yf(T),r.memoizedState=xf,v);if((r.mode&1)===0)return Jl(n,r,T,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var F=f.dgst;return f=F,v=Error(t(419)),f=mf(v,f,void 0),Jl(n,r,T,f)}if(F=(T&n.childLanes)!==0,Vn||F){if(f=pn,f!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|T))!==0?0:m,m!==0&&m!==v.retryLane&&(v.retryLane=m,rr(n,m),Ii(f,n,m,-1))}return Of(),f=mf(Error(t(421))),Jl(n,r,T,f)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=sy.bind(null,n),m._reactRetry=r,null):(n=v.treeContext,ti=Dr(m.nextSibling),ei=r,Gt=!0,bi=null,n!==null&&(hi[pi++]=nr,hi[pi++]=ir,hi[pi++]=hs,nr=n.id,ir=n.overflow,hs=r),r=Sf(r,f.children),r.flags|=4096,r)}function a_(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),Zc(n.return,r,l)}function Mf(n,r,l,f,m){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=f,v.tail=l,v.tailMode=m)}function l_(n,r,l){var f=r.pendingProps,m=f.revealOrder,v=f.tail;if(Nn(n,r,f.children,l),f=Xt.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&a_(n,l,r);else if(n.tag===19)a_(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(kt(Xt,f),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&jl(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),Mf(r,!1,m,l,v);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&jl(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}Mf(r,!0,l,null,v);break;case"together":Mf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function eu(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function or(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),vs|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Hr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Hr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Yx(n,r,l){switch(r.tag){case 3:r_(r),co();break;case 5:Mm(r);break;case 1:Bn(r.type)&&Fl(r);break;case 4:ef(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,m=r.memoizedProps.value;kt(Hl,f._currentValue),f._currentValue=m;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(kt(Xt,Xt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?o_(n,r,l):(kt(Xt,Xt.current&1),n=or(n,r,l),n!==null?n.sibling:null);kt(Xt,Xt.current&1);break;case 19:if(f=(l&r.childLanes)!==0,(n.flags&128)!==0){if(f)return l_(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),kt(Xt,Xt.current),f)break;return null;case 22:case 23:return r.lanes=0,t_(n,r,l)}return or(n,r,l)}var u_,Ef,c_,f_;u_=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ef=function(){},c_=function(n,r,l,f){var m=n.memoizedProps;if(m!==f){n=r.stateNode,_s(Bi.current);var v=null;switch(l){case"input":m=Rt(n,m),f=Rt(n,f),v=[];break;case"select":m=oe({},m,{value:void 0}),f=oe({},f,{value:void 0}),v=[];break;case"textarea":m=Bt(n,m),f=Bt(n,f),v=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=Il)}Ye(l,f);var T;l=null;for(te in m)if(!f.hasOwnProperty(te)&&m.hasOwnProperty(te)&&m[te]!=null)if(te==="style"){var F=m[te];for(T in F)F.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(s.hasOwnProperty(te)?v||(v=[]):(v=v||[]).push(te,null));for(te in f){var H=f[te];if(F=m!=null?m[te]:void 0,f.hasOwnProperty(te)&&H!==F&&(H!=null||F!=null))if(te==="style")if(F){for(T in F)!F.hasOwnProperty(T)||H&&H.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in H)H.hasOwnProperty(T)&&F[T]!==H[T]&&(l||(l={}),l[T]=H[T])}else l||(v||(v=[]),v.push(te,l)),l=H;else te==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,F=F?F.__html:void 0,H!=null&&F!==H&&(v=v||[]).push(te,H)):te==="children"?typeof H!="string"&&typeof H!="number"||(v=v||[]).push(te,""+H):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(s.hasOwnProperty(te)?(H!=null&&te==="onScroll"&&Vt("scroll",n),v||F===H||(v=[])):(v=v||[]).push(te,H))}l&&(v=v||[]).push("style",l);var te=v;(r.updateQueue=te)&&(r.flags|=4)}},f_=function(n,r,l,f){l!==f&&(r.flags|=4)};function ba(n,r){if(!Gt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function An(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function qx(n,r,l){var f=r.pendingProps;switch(Wc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(r),null;case 1:return Bn(r.type)&&Ul(),An(r),null;case 3:return f=r.stateNode,mo(),Ht(zn),Ht(Tn),rf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(Bl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,bi!==null&&(Nf(bi),bi=null))),Ef(n,r),An(r),null;case 5:tf(r);var m=_s(Ta.current);if(l=r.type,n!==null&&r.stateNode!=null)c_(n,r,l,f,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return An(r),null}if(n=_s(Bi.current),Bl(r)){f=r.stateNode,l=r.type;var v=r.memoizedProps;switch(f[zi]=r,f[xa]=v,n=(r.mode&1)!==0,l){case"dialog":Vt("cancel",f),Vt("close",f);break;case"iframe":case"object":case"embed":Vt("load",f);break;case"video":case"audio":for(m=0;m<_a.length;m++)Vt(_a[m],f);break;case"source":Vt("error",f);break;case"img":case"image":case"link":Vt("error",f),Vt("load",f);break;case"details":Vt("toggle",f);break;case"input":ut(f,v),Vt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!v.multiple},Vt("invalid",f);break;case"textarea":U(f,v),Vt("invalid",f)}Ye(l,v),m=null;for(var T in v)if(v.hasOwnProperty(T)){var F=v[T];T==="children"?typeof F=="string"?f.textContent!==F&&(v.suppressHydrationWarning!==!0&&Ll(f.textContent,F,n),m=["children",F]):typeof F=="number"&&f.textContent!==""+F&&(v.suppressHydrationWarning!==!0&&Ll(f.textContent,F,n),m=["children",""+F]):s.hasOwnProperty(T)&&F!=null&&T==="onScroll"&&Vt("scroll",f)}switch(l){case"input":ht(f),It(f,v,!0);break;case"textarea":ht(f),Z(f);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(f.onclick=Il)}f=m,r.updateQueue=f,f!==null&&(r.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=T.createElement(l,{is:f.is}):(n=T.createElement(l),l==="select"&&(T=n,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):n=T.createElementNS(n,l),n[zi]=r,n[xa]=f,u_(n,r,!1,!1),r.stateNode=n;e:{switch(T=be(l,f),l){case"dialog":Vt("cancel",n),Vt("close",n),m=f;break;case"iframe":case"object":case"embed":Vt("load",n),m=f;break;case"video":case"audio":for(m=0;m<_a.length;m++)Vt(_a[m],n);m=f;break;case"source":Vt("error",n),m=f;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),m=f;break;case"details":Vt("toggle",n),m=f;break;case"input":ut(n,f),m=Rt(n,f),Vt("invalid",n);break;case"option":m=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},m=oe({},f,{value:void 0}),Vt("invalid",n);break;case"textarea":U(n,f),m=Bt(n,f),Vt("invalid",n);break;default:m=f}Ye(l,m),F=m;for(v in F)if(F.hasOwnProperty(v)){var H=F[v];v==="style"?Le(n,H):v==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&$e(n,H)):v==="children"?typeof H=="string"?(l!=="textarea"||H!=="")&&Ae(n,H):typeof H=="number"&&Ae(n,""+H):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?H!=null&&v==="onScroll"&&Vt("scroll",n):H!=null&&P(n,v,H,T))}switch(l){case"input":ht(n),It(n,f,!1);break;case"textarea":ht(n),Z(n);break;case"option":f.value!=null&&n.setAttribute("value",""+Me(f.value));break;case"select":n.multiple=!!f.multiple,v=f.value,v!=null?zt(n,!!f.multiple,v,!1):f.defaultValue!=null&&zt(n,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=Il)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return An(r),null;case 6:if(n&&r.stateNode!=null)f_(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=_s(Ta.current),_s(Bi.current),Bl(r)){if(f=r.stateNode,l=r.memoizedProps,f[zi]=r,(v=f.nodeValue!==l)&&(n=ei,n!==null))switch(n.tag){case 3:Ll(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ll(f.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[zi]=r,r.stateNode=f}return An(r),null;case 13:if(Ht(Xt),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Gt&&ti!==null&&(r.mode&1)!==0&&(r.flags&128)===0)pm(),co(),r.flags|=98560,v=!1;else if(v=Bl(r),f!==null&&f.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[zi]=r}else co(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;An(r),v=!1}else bi!==null&&(Nf(bi),bi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Xt.current&1)!==0?un===0&&(un=3):Of())),r.updateQueue!==null&&(r.flags|=4),An(r),null);case 4:return mo(),Ef(n,r),n===null&&ga(r.stateNode.containerInfo),An(r),null;case 10:return Kc(r.type._context),An(r),null;case 17:return Bn(r.type)&&Ul(),An(r),null;case 19:if(Ht(Xt),v=r.memoizedState,v===null)return An(r),null;if(f=(r.flags&128)!==0,T=v.rendering,T===null)if(f)ba(v,!1);else{if(un!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=jl(n),T!==null){for(r.flags|=128,ba(v,!1),f=T.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)v=l,n=f,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return kt(Xt,Xt.current&1|2),r.child}n=n.sibling}v.tail!==null&&X()>xo&&(r.flags|=128,f=!0,ba(v,!1),r.lanes=4194304)}else{if(!f)if(n=jl(T),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ba(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Gt)return An(r),null}else 2*X()-v.renderingStartTime>xo&&l!==1073741824&&(r.flags|=128,f=!0,ba(v,!1),r.lanes=4194304);v.isBackwards?(T.sibling=r.child,r.child=T):(l=v.last,l!==null?l.sibling=T:r.child=T,v.last=T)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=X(),r.sibling=null,l=Xt.current,kt(Xt,f?l&1|2:l&1),r):(An(r),null);case 22:case 23:return Ff(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(ni&1073741824)!==0&&(An(r),r.subtreeFlags&6&&(r.flags|=8192)):An(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function $x(n,r){switch(Wc(r),r.tag){case 1:return Bn(r.type)&&Ul(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return mo(),Ht(zn),Ht(Tn),rf(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return tf(r),null;case 13:if(Ht(Xt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));co()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ht(Xt),null;case 4:return mo(),null;case 10:return Kc(r.type._context),null;case 22:case 23:return Ff(),null;case 24:return null;default:return null}}var tu=!1,Cn=!1,Kx=typeof WeakSet=="function"?WeakSet:Set,ze=null;function go(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){$t(n,r,f)}else l.current=null}function Tf(n,r,l){try{l()}catch(f){$t(n,r,f)}}var d_=!1;function Zx(n,r){if(Uc=Sl,n=Wp(),Cc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,v=f.focusNode;f=f.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var T=0,F=-1,H=-1,te=0,ge=0,ve=n,me=null;t:for(;;){for(var Oe;ve!==l||m!==0&&ve.nodeType!==3||(F=T+m),ve!==v||f!==0&&ve.nodeType!==3||(H=T+f),ve.nodeType===3&&(T+=ve.nodeValue.length),(Oe=ve.firstChild)!==null;)me=ve,ve=Oe;for(;;){if(ve===n)break t;if(me===l&&++te===m&&(F=T),me===v&&++ge===f&&(H=T),(Oe=ve.nextSibling)!==null)break;ve=me,me=ve.parentNode}ve=Oe}l=F===-1||H===-1?null:{start:F,end:H}}else l=null}l=l||{start:0,end:0}}else l=null;for(Fc={focusedElem:n,selectionRange:l},Sl=!1,ze=r;ze!==null;)if(r=ze,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ze=n;else for(;ze!==null;){r=ze;try{var He=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var je=He.memoizedProps,Qt=He.memoizedState,$=r.stateNode,W=$.getSnapshotBeforeUpdate(r.elementType===r.type?je:Pi(r.type,je),Qt);$.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var Q=r.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){$t(r,r.return,we)}if(n=r.sibling,n!==null){n.return=r.return,ze=n;break}ze=r.return}return He=d_,d_=!1,He}function Pa(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&n)===n){var v=m.destroy;m.destroy=void 0,v!==void 0&&Tf(r,l,v)}m=m.next}while(m!==f)}}function nu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function wf(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function h_(n){var r=n.alternate;r!==null&&(n.alternate=null,h_(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[zi],delete r[xa],delete r[Bc],delete r[Ix],delete r[Nx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function p_(n){return n.tag===5||n.tag===3||n.tag===4}function m_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||p_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Af(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Il));else if(f!==4&&(n=n.child,n!==null))for(Af(n,r,l),n=n.sibling;n!==null;)Af(n,r,l),n=n.sibling}function Cf(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(Cf(n,r,l),n=n.sibling;n!==null;)Cf(n,r,l),n=n.sibling}var vn=null,Di=!1;function Or(n,r,l){for(l=l.child;l!==null;)__(n,r,l),l=l.sibling}function __(n,r,l){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Ze,l)}catch{}switch(l.tag){case 5:Cn||go(l,r);case 6:var f=vn,m=Di;vn=null,Or(n,r,l),vn=f,Di=m,vn!==null&&(Di?(n=vn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):vn.removeChild(l.stateNode));break;case 18:vn!==null&&(Di?(n=vn,l=l.stateNode,n.nodeType===8?zc(n.parentNode,l):n.nodeType===1&&zc(n,l),la(n)):zc(vn,l.stateNode));break;case 4:f=vn,m=Di,vn=l.stateNode.containerInfo,Di=!0,Or(n,r,l),vn=f,Di=m;break;case 0:case 11:case 14:case 15:if(!Cn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var v=m,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&Tf(l,r,T),m=m.next}while(m!==f)}Or(n,r,l);break;case 1:if(!Cn&&(go(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(F){$t(l,r,F)}Or(n,r,l);break;case 21:Or(n,r,l);break;case 22:l.mode&1?(Cn=(f=Cn)||l.memoizedState!==null,Or(n,r,l),Cn=f):Or(n,r,l);break;default:Or(n,r,l)}}function g_(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Kx),r.forEach(function(f){var m=oy.bind(null,n,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Li(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var v=n,T=r,F=T;e:for(;F!==null;){switch(F.tag){case 5:vn=F.stateNode,Di=!1;break e;case 3:vn=F.stateNode.containerInfo,Di=!0;break e;case 4:vn=F.stateNode.containerInfo,Di=!0;break e}F=F.return}if(vn===null)throw Error(t(160));__(v,T,m),vn=null,Di=!1;var H=m.alternate;H!==null&&(H.return=null),m.return=null}catch(te){$t(m,r,te)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)v_(r,n),r=r.sibling}function v_(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Li(r,n),Hi(n),f&4){try{Pa(3,n,n.return),nu(3,n)}catch(je){$t(n,n.return,je)}try{Pa(5,n,n.return)}catch(je){$t(n,n.return,je)}}break;case 1:Li(r,n),Hi(n),f&512&&l!==null&&go(l,l.return);break;case 5:if(Li(r,n),Hi(n),f&512&&l!==null&&go(l,l.return),n.flags&32){var m=n.stateNode;try{Ae(m,"")}catch(je){$t(n,n.return,je)}}if(f&4&&(m=n.stateNode,m!=null)){var v=n.memoizedProps,T=l!==null?l.memoizedProps:v,F=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{F==="input"&&v.type==="radio"&&v.name!=null&&nt(m,v),be(F,T);var te=be(F,v);for(T=0;T<H.length;T+=2){var ge=H[T],ve=H[T+1];ge==="style"?Le(m,ve):ge==="dangerouslySetInnerHTML"?$e(m,ve):ge==="children"?Ae(m,ve):P(m,ge,ve,te)}switch(F){case"input":Ge(m,v);break;case"textarea":C(m,v);break;case"select":var me=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!v.multiple;var Oe=v.value;Oe!=null?zt(m,!!v.multiple,Oe,!1):me!==!!v.multiple&&(v.defaultValue!=null?zt(m,!!v.multiple,v.defaultValue,!0):zt(m,!!v.multiple,v.multiple?[]:"",!1))}m[xa]=v}catch(je){$t(n,n.return,je)}}break;case 6:if(Li(r,n),Hi(n),f&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,v=n.memoizedProps;try{m.nodeValue=v}catch(je){$t(n,n.return,je)}}break;case 3:if(Li(r,n),Hi(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{la(r.containerInfo)}catch(je){$t(n,n.return,je)}break;case 4:Li(r,n),Hi(n);break;case 13:Li(r,n),Hi(n),m=n.child,m.flags&8192&&(v=m.memoizedState!==null,m.stateNode.isHidden=v,!v||m.alternate!==null&&m.alternate.memoizedState!==null||(Pf=X())),f&4&&g_(n);break;case 22:if(ge=l!==null&&l.memoizedState!==null,n.mode&1?(Cn=(te=Cn)||ge,Li(r,n),Cn=te):Li(r,n),Hi(n),f&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!ge&&(n.mode&1)!==0)for(ze=n,ge=n.child;ge!==null;){for(ve=ze=ge;ze!==null;){switch(me=ze,Oe=me.child,me.tag){case 0:case 11:case 14:case 15:Pa(4,me,me.return);break;case 1:go(me,me.return);var He=me.stateNode;if(typeof He.componentWillUnmount=="function"){f=me,l=me.return;try{r=f,He.props=r.memoizedProps,He.state=r.memoizedState,He.componentWillUnmount()}catch(je){$t(f,l,je)}}break;case 5:go(me,me.return);break;case 22:if(me.memoizedState!==null){S_(ve);continue}}Oe!==null?(Oe.return=me,ze=Oe):S_(ve)}ge=ge.sibling}e:for(ge=null,ve=n;;){if(ve.tag===5){if(ge===null){ge=ve;try{m=ve.stateNode,te?(v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(F=ve.stateNode,H=ve.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null,F.style.display=Ee("display",T))}catch(je){$t(n,n.return,je)}}}else if(ve.tag===6){if(ge===null)try{ve.stateNode.nodeValue=te?"":ve.memoizedProps}catch(je){$t(n,n.return,je)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===n)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===n)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===n)break e;ge===ve&&(ge=null),ve=ve.return}ge===ve&&(ge=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:Li(r,n),Hi(n),f&4&&g_(n);break;case 21:break;default:Li(r,n),Hi(n)}}function Hi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(p_(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(Ae(m,""),f.flags&=-33);var v=m_(n);Cf(n,v,m);break;case 3:case 4:var T=f.stateNode.containerInfo,F=m_(n);Af(n,F,T);break;default:throw Error(t(161))}}catch(H){$t(n,n.return,H)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Qx(n,r,l){ze=n,x_(n)}function x_(n,r,l){for(var f=(n.mode&1)!==0;ze!==null;){var m=ze,v=m.child;if(m.tag===22&&f){var T=m.memoizedState!==null||tu;if(!T){var F=m.alternate,H=F!==null&&F.memoizedState!==null||Cn;F=tu;var te=Cn;if(tu=T,(Cn=H)&&!te)for(ze=m;ze!==null;)T=ze,H=T.child,T.tag===22&&T.memoizedState!==null?M_(m):H!==null?(H.return=T,ze=H):M_(m);for(;v!==null;)ze=v,x_(v),v=v.sibling;ze=m,tu=F,Cn=te}y_(n)}else(m.subtreeFlags&8772)!==0&&v!==null?(v.return=m,ze=v):y_(n)}}function y_(n){for(;ze!==null;){var r=ze;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Cn||nu(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!Cn)if(l===null)f.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:Pi(r.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Sm(r,v,f);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Sm(r,T,l)}break;case 5:var F=r.stateNode;if(l===null&&r.flags&4){l=F;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&l.focus();break;case"img":H.src&&(l.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var te=r.alternate;if(te!==null){var ge=te.memoizedState;if(ge!==null){var ve=ge.dehydrated;ve!==null&&la(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||r.flags&512&&wf(r)}catch(me){$t(r,r.return,me)}}if(r===n){ze=null;break}if(l=r.sibling,l!==null){l.return=r.return,ze=l;break}ze=r.return}}function S_(n){for(;ze!==null;){var r=ze;if(r===n){ze=null;break}var l=r.sibling;if(l!==null){l.return=r.return,ze=l;break}ze=r.return}}function M_(n){for(;ze!==null;){var r=ze;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{nu(4,r)}catch(H){$t(r,l,H)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var m=r.return;try{f.componentDidMount()}catch(H){$t(r,m,H)}}var v=r.return;try{wf(r)}catch(H){$t(r,v,H)}break;case 5:var T=r.return;try{wf(r)}catch(H){$t(r,T,H)}}}catch(H){$t(r,r.return,H)}if(r===n){ze=null;break}var F=r.sibling;if(F!==null){F.return=r.return,ze=F;break}ze=r.return}}var Jx=Math.ceil,iu=w.ReactCurrentDispatcher,Rf=w.ReactCurrentOwner,gi=w.ReactCurrentBatchConfig,Mt=0,pn=null,tn=null,xn=0,ni=0,vo=Lr(0),un=0,Da=null,vs=0,ru=0,bf=0,La=null,Hn=null,Pf=0,xo=1/0,ar=null,su=!1,Df=null,kr=null,ou=!1,zr=null,au=0,Ia=0,Lf=null,lu=-1,uu=0;function Un(){return(Mt&6)!==0?X():lu!==-1?lu:lu=X()}function Br(n){return(n.mode&1)===0?1:(Mt&2)!==0&&xn!==0?xn&-xn:Fx.transition!==null?(uu===0&&(uu=In()),uu):(n=_t,n!==0||(n=window.event,n=n===void 0?16:Tp(n.type)),n)}function Ii(n,r,l,f){if(50<Ia)throw Ia=0,Lf=null,Error(t(185));Zt(n,l,f),((Mt&2)===0||n!==pn)&&(n===pn&&((Mt&2)===0&&(ru|=l),un===4&&Vr(n,xn)),Gn(n,f),l===1&&Mt===0&&(r.mode&1)===0&&(xo=X()+500,Ol&&Nr()))}function Gn(n,r){var l=n.callbackNode;us(n,r);var f=Ci(n,n===pn?xn:0);if(f===0)l!==null&&q(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&q(l),r===1)n.tag===0?Ux(T_.bind(null,n)):um(T_.bind(null,n)),Dx(function(){(Mt&6)===0&&Nr()}),l=null;else{switch(_p(f)){case 1:l=Pe;break;case 4:l=Ve;break;case 16:l=Fe;break;case 536870912:l=rt;break;default:l=Fe}l=L_(l,E_.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function E_(n,r){if(lu=-1,uu=0,(Mt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(yo()&&n.callbackNode!==l)return null;var f=Ci(n,n===pn?xn:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||r)r=cu(n,f);else{r=f;var m=Mt;Mt|=2;var v=A_();(pn!==n||xn!==r)&&(ar=null,xo=X()+500,ys(n,r));do try{ny();break}catch(F){w_(n,F)}while(!0);$c(),iu.current=v,Mt=m,tn!==null?r=0:(pn=null,xn=0,r=un)}if(r!==0){if(r===2&&(m=Ut(n),m!==0&&(f=m,r=If(n,m))),r===1)throw l=Da,ys(n,0),Vr(n,f),Gn(n,X()),l;if(r===6)Vr(n,f);else{if(m=n.current.alternate,(f&30)===0&&!ey(m)&&(r=cu(n,f),r===2&&(v=Ut(n),v!==0&&(f=v,r=If(n,v))),r===1))throw l=Da,ys(n,0),Vr(n,f),Gn(n,X()),l;switch(n.finishedWork=m,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:Ss(n,Hn,ar);break;case 3:if(Vr(n,f),(f&130023424)===f&&(r=Pf+500-X(),10<r)){if(Ci(n,0)!==0)break;if(m=n.suspendedLanes,(m&f)!==f){Un(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=kc(Ss.bind(null,n,Hn,ar),r);break}Ss(n,Hn,ar);break;case 4:if(Vr(n,f),(f&4194240)===f)break;for(r=n.eventTimes,m=-1;0<f;){var T=31-St(f);v=1<<T,T=r[T],T>m&&(m=T),f&=~v}if(f=m,f=X()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*Jx(f/1960))-f,10<f){n.timeoutHandle=kc(Ss.bind(null,n,Hn,ar),f);break}Ss(n,Hn,ar);break;case 5:Ss(n,Hn,ar);break;default:throw Error(t(329))}}}return Gn(n,X()),n.callbackNode===l?E_.bind(null,n):null}function If(n,r){var l=La;return n.current.memoizedState.isDehydrated&&(ys(n,r).flags|=256),n=cu(n,r),n!==2&&(r=Hn,Hn=l,r!==null&&Nf(r)),n}function Nf(n){Hn===null?Hn=n:Hn.push.apply(Hn,n)}function ey(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],v=m.getSnapshot;m=m.value;try{if(!Ri(v(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Vr(n,r){for(r&=~bf,r&=~ru,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-St(r),f=1<<l;n[l]=-1,r&=~f}}function T_(n){if((Mt&6)!==0)throw Error(t(327));yo();var r=Ci(n,0);if((r&1)===0)return Gn(n,X()),null;var l=cu(n,r);if(n.tag!==0&&l===2){var f=Ut(n);f!==0&&(r=f,l=If(n,f))}if(l===1)throw l=Da,ys(n,0),Vr(n,r),Gn(n,X()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ss(n,Hn,ar),Gn(n,X()),null}function Uf(n,r){var l=Mt;Mt|=1;try{return n(r)}finally{Mt=l,Mt===0&&(xo=X()+500,Ol&&Nr())}}function xs(n){zr!==null&&zr.tag===0&&(Mt&6)===0&&yo();var r=Mt;Mt|=1;var l=gi.transition,f=_t;try{if(gi.transition=null,_t=1,n)return n()}finally{_t=f,gi.transition=l,Mt=r,(Mt&6)===0&&Nr()}}function Ff(){ni=vo.current,Ht(vo)}function ys(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Px(l)),tn!==null)for(l=tn.return;l!==null;){var f=l;switch(Wc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Ul();break;case 3:mo(),Ht(zn),Ht(Tn),rf();break;case 5:tf(f);break;case 4:mo();break;case 13:Ht(Xt);break;case 19:Ht(Xt);break;case 10:Kc(f.type._context);break;case 22:case 23:Ff()}l=l.return}if(pn=n,tn=n=Hr(n.current,null),xn=ni=r,un=0,Da=null,bf=ru=vs=0,Hn=La=null,ms!==null){for(r=0;r<ms.length;r++)if(l=ms[r],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,v=l.pending;if(v!==null){var T=v.next;v.next=m,f.next=T}l.pending=f}ms=null}return n}function w_(n,r){do{var l=tn;try{if($c(),Yl.current=Zl,ql){for(var f=jt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}ql=!1}if(gs=0,hn=ln=jt=null,wa=!1,Aa=0,Rf.current=null,l===null||l.return===null){un=1,Da=r,tn=null;break}e:{var v=n,T=l.return,F=l,H=r;if(r=xn,F.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var te=H,ge=F,ve=ge.tag;if((ge.mode&1)===0&&(ve===0||ve===11||ve===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Oe=Km(T);if(Oe!==null){Oe.flags&=-257,Zm(Oe,T,F,v,r),Oe.mode&1&&$m(v,te,r),r=Oe,H=te;var He=r.updateQueue;if(He===null){var je=new Set;je.add(H),r.updateQueue=je}else He.add(H);break e}else{if((r&1)===0){$m(v,te,r),Of();break e}H=Error(t(426))}}else if(Gt&&F.mode&1){var Qt=Km(T);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),Zm(Qt,T,F,v,r),Yc(_o(H,F));break e}}v=H=_o(H,F),un!==4&&(un=2),La===null?La=[v]:La.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var $=Ym(v,H,r);ym(v,$);break e;case 1:F=H;var W=v.type,Q=v.stateNode;if((v.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(kr===null||!kr.has(Q)))){v.flags|=65536,r&=-r,v.lanes|=r;var we=qm(v,F,r);ym(v,we);break e}}v=v.return}while(v!==null)}R_(l)}catch(qe){r=qe,tn===l&&l!==null&&(tn=l=l.return);continue}break}while(!0)}function A_(){var n=iu.current;return iu.current=Zl,n===null?Zl:n}function Of(){(un===0||un===3||un===2)&&(un=4),pn===null||(vs&268435455)===0&&(ru&268435455)===0||Vr(pn,xn)}function cu(n,r){var l=Mt;Mt|=2;var f=A_();(pn!==n||xn!==r)&&(ar=null,ys(n,r));do try{ty();break}catch(m){w_(n,m)}while(!0);if($c(),Mt=l,iu.current=f,tn!==null)throw Error(t(261));return pn=null,xn=0,un}function ty(){for(;tn!==null;)C_(tn)}function ny(){for(;tn!==null&&!se();)C_(tn)}function C_(n){var r=D_(n.alternate,n,ni);n.memoizedProps=n.pendingProps,r===null?R_(n):tn=r,Rf.current=null}function R_(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=qx(l,r,ni),l!==null){tn=l;return}}else{if(l=$x(l,r),l!==null){l.flags&=32767,tn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{un=6,tn=null;return}}if(r=r.sibling,r!==null){tn=r;return}tn=r=n}while(r!==null);un===0&&(un=5)}function Ss(n,r,l){var f=_t,m=gi.transition;try{gi.transition=null,_t=1,iy(n,r,l,f)}finally{gi.transition=m,_t=f}return null}function iy(n,r,l,f){do yo();while(zr!==null);if((Mt&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(En(n,v),n===pn&&(tn=pn=null,xn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||ou||(ou=!0,L_(Fe,function(){return yo(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=gi.transition,gi.transition=null;var T=_t;_t=1;var F=Mt;Mt|=4,Rf.current=null,Zx(n,l),v_(l,n),Ex(Fc),Sl=!!Uc,Fc=Uc=null,n.current=l,Qx(l),ae(),Mt=F,_t=T,gi.transition=v}else n.current=l;if(ou&&(ou=!1,zr=n,au=m),v=n.pendingLanes,v===0&&(kr=null),wt(l.stateNode),Gn(n,X()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(su)throw su=!1,n=Df,Df=null,n;return(au&1)!==0&&n.tag!==0&&yo(),v=n.pendingLanes,(v&1)!==0?n===Lf?Ia++:(Ia=0,Lf=n):Ia=0,Nr(),null}function yo(){if(zr!==null){var n=_p(au),r=gi.transition,l=_t;try{if(gi.transition=null,_t=16>n?16:n,zr===null)var f=!1;else{if(n=zr,zr=null,au=0,(Mt&6)!==0)throw Error(t(331));var m=Mt;for(Mt|=4,ze=n.current;ze!==null;){var v=ze,T=v.child;if((ze.flags&16)!==0){var F=v.deletions;if(F!==null){for(var H=0;H<F.length;H++){var te=F[H];for(ze=te;ze!==null;){var ge=ze;switch(ge.tag){case 0:case 11:case 15:Pa(8,ge,v)}var ve=ge.child;if(ve!==null)ve.return=ge,ze=ve;else for(;ze!==null;){ge=ze;var me=ge.sibling,Oe=ge.return;if(h_(ge),ge===te){ze=null;break}if(me!==null){me.return=Oe,ze=me;break}ze=Oe}}}var He=v.alternate;if(He!==null){var je=He.child;if(je!==null){He.child=null;do{var Qt=je.sibling;je.sibling=null,je=Qt}while(je!==null)}}ze=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,ze=T;else e:for(;ze!==null;){if(v=ze,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Pa(9,v,v.return)}var $=v.sibling;if($!==null){$.return=v.return,ze=$;break e}ze=v.return}}var W=n.current;for(ze=W;ze!==null;){T=ze;var Q=T.child;if((T.subtreeFlags&2064)!==0&&Q!==null)Q.return=T,ze=Q;else e:for(T=W;ze!==null;){if(F=ze,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:nu(9,F)}}catch(qe){$t(F,F.return,qe)}if(F===T){ze=null;break e}var we=F.sibling;if(we!==null){we.return=F.return,ze=we;break e}ze=F.return}}if(Mt=m,Nr(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Ze,n)}catch{}f=!0}return f}finally{_t=l,gi.transition=r}}return!1}function b_(n,r,l){r=_o(l,r),r=Ym(n,r,1),n=Fr(n,r,1),r=Un(),n!==null&&(Zt(n,1,r),Gn(n,r))}function $t(n,r,l){if(n.tag===3)b_(n,n,l);else for(;r!==null;){if(r.tag===3){b_(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(kr===null||!kr.has(f))){n=_o(l,n),n=qm(r,n,1),r=Fr(r,n,1),n=Un(),r!==null&&(Zt(r,1,n),Gn(r,n));break}}r=r.return}}function ry(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=Un(),n.pingedLanes|=n.suspendedLanes&l,pn===n&&(xn&l)===l&&(un===4||un===3&&(xn&130023424)===xn&&500>X()-Pf?ys(n,0):bf|=l),Gn(n,r)}function P_(n,r){r===0&&((n.mode&1)===0?r=1:(r=mt,mt<<=1,(mt&130023424)===0&&(mt=4194304)));var l=Un();n=rr(n,r),n!==null&&(Zt(n,r,l),Gn(n,l))}function sy(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),P_(n,l)}function oy(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),P_(n,l)}var D_;D_=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||zn.current)Vn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Vn=!1,Yx(n,r,l);Vn=(n.flags&131072)!==0}else Vn=!1,Gt&&(r.flags&1048576)!==0&&cm(r,zl,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;eu(n,r),n=r.pendingProps;var m=ao(r,Tn.current);po(r,l),m=af(null,r,f,n,m,l);var v=lf();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Bn(f)?(v=!0,Fl(r)):v=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Jc(r),m.updater=Ql,r.stateNode=m,m._reactInternals=r,pf(r,f,n,l),r=vf(null,r,f,!0,v,l)):(r.tag=0,Gt&&v&&Gc(r),Nn(null,r,m,l),r=r.child),r;case 16:f=r.elementType;e:{switch(eu(n,r),n=r.pendingProps,m=f._init,f=m(f._payload),r.type=f,m=r.tag=ly(f),n=Pi(f,n),m){case 0:r=gf(null,r,f,n,l);break e;case 1:r=i_(null,r,f,n,l);break e;case 11:r=Qm(null,r,f,n,l);break e;case 14:r=Jm(null,r,f,Pi(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Pi(f,m),gf(n,r,f,m,l);case 1:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Pi(f,m),i_(n,r,f,m,l);case 3:e:{if(r_(r),n===null)throw Error(t(387));f=r.pendingProps,v=r.memoizedState,m=v.element,xm(n,r),Xl(r,f,null,l);var T=r.memoizedState;if(f=T.element,v.isDehydrated)if(v={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){m=_o(Error(t(423)),r),r=s_(n,r,f,l,m);break e}else if(f!==m){m=_o(Error(t(424)),r),r=s_(n,r,f,l,m);break e}else for(ti=Dr(r.stateNode.containerInfo.firstChild),ei=r,Gt=!0,bi=null,l=gm(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(co(),f===m){r=or(n,r,l);break e}Nn(n,r,f,l)}r=r.child}return r;case 5:return Mm(r),n===null&&jc(r),f=r.type,m=r.pendingProps,v=n!==null?n.memoizedProps:null,T=m.children,Oc(f,m)?T=null:v!==null&&Oc(f,v)&&(r.flags|=32),n_(n,r),Nn(n,r,T,l),r.child;case 6:return n===null&&jc(r),null;case 13:return o_(n,r,l);case 4:return ef(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=fo(r,null,f,l):Nn(n,r,f,l),r.child;case 11:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Pi(f,m),Qm(n,r,f,m,l);case 7:return Nn(n,r,r.pendingProps,l),r.child;case 8:return Nn(n,r,r.pendingProps.children,l),r.child;case 12:return Nn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,m=r.pendingProps,v=r.memoizedProps,T=m.value,kt(Hl,f._currentValue),f._currentValue=T,v!==null)if(Ri(v.value,T)){if(v.children===m.children&&!zn.current){r=or(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var F=v.dependencies;if(F!==null){T=v.child;for(var H=F.firstContext;H!==null;){if(H.context===f){if(v.tag===1){H=sr(-1,l&-l),H.tag=2;var te=v.updateQueue;if(te!==null){te=te.shared;var ge=te.pending;ge===null?H.next=H:(H.next=ge.next,ge.next=H),te.pending=H}}v.lanes|=l,H=v.alternate,H!==null&&(H.lanes|=l),Zc(v.return,l,r),F.lanes|=l;break}H=H.next}}else if(v.tag===10)T=v.type===r.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=l,F=T.alternate,F!==null&&(F.lanes|=l),Zc(T,l,r),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===r){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}Nn(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,f=r.pendingProps.children,po(r,l),m=mi(m),f=f(m),r.flags|=1,Nn(n,r,f,l),r.child;case 14:return f=r.type,m=Pi(f,r.pendingProps),m=Pi(f.type,m),Jm(n,r,f,m,l);case 15:return e_(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Pi(f,m),eu(n,r),r.tag=1,Bn(f)?(n=!0,Fl(r)):n=!1,po(r,l),Xm(r,f,m),pf(r,f,m,l),vf(null,r,f,!0,n,l);case 19:return l_(n,r,l);case 22:return t_(n,r,l)}throw Error(t(156,r.tag))};function L_(n,r){return b(n,r)}function ay(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(n,r,l,f){return new ay(n,r,l,f)}function kf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ly(n){if(typeof n=="function")return kf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===j)return 11;if(n===ne)return 14}return 2}function Hr(n,r){var l=n.alternate;return l===null?(l=vi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function fu(n,r,l,f,m,v){var T=2;if(f=n,typeof n=="function")kf(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case N:return Ms(l.children,m,v,r);case O:T=8,m|=8;break;case A:return n=vi(12,l,r,m|2),n.elementType=A,n.lanes=v,n;case K:return n=vi(13,l,r,m),n.elementType=K,n.lanes=v,n;case ue:return n=vi(19,l,r,m),n.elementType=ue,n.lanes=v,n;case ie:return du(l,m,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:T=10;break e;case z:T=9;break e;case j:T=11;break e;case ne:T=14;break e;case J:T=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=vi(T,l,r,m),r.elementType=n,r.type=f,r.lanes=v,r}function Ms(n,r,l,f){return n=vi(7,n,f,r),n.lanes=l,n}function du(n,r,l,f){return n=vi(22,n,f,r),n.elementType=ie,n.lanes=l,n.stateNode={isHidden:!1},n}function zf(n,r,l){return n=vi(6,n,null,r),n.lanes=l,n}function Bf(n,r,l){return r=vi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function uy(n,r,l,f,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mn(0),this.expirationTimes=Mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mn(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Vf(n,r,l,f,m,v,T,F,H){return n=new uy(n,r,l,F,H),r===1?(r=1,v===!0&&(r|=8)):r=0,v=vi(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jc(v),n}function cy(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function I_(n){if(!n)return Ir;n=n._reactInternals;e:{if(Ji(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Bn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Bn(l))return am(n,l,r)}return r}function N_(n,r,l,f,m,v,T,F,H){return n=Vf(l,f,!0,n,m,v,T,F,H),n.context=I_(null),l=n.current,f=Un(),m=Br(l),v=sr(f,m),v.callback=r??null,Fr(l,v,m),n.current.lanes=m,Zt(n,m,f),Gn(n,f),n}function hu(n,r,l,f){var m=r.current,v=Un(),T=Br(m);return l=I_(l),r.context===null?r.context=l:r.pendingContext=l,r=sr(v,T),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=Fr(m,r,T),n!==null&&(Ii(n,m,T,v),Wl(n,m,T)),T}function pu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function U_(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Hf(n,r){U_(n,r),(n=n.alternate)&&U_(n,r)}function fy(){return null}var F_=typeof reportError=="function"?reportError:function(n){console.error(n)};function Gf(n){this._internalRoot=n}mu.prototype.render=Gf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));hu(n,r,null,null)},mu.prototype.unmount=Gf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;xs(function(){hu(null,n,null,null)}),r[er]=null}};function mu(n){this._internalRoot=n}mu.prototype.unstable_scheduleHydration=function(n){if(n){var r=xp();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Rr.length&&r!==0&&r<Rr[l].priority;l++);Rr.splice(l,0,n),l===0&&Mp(n)}};function Wf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _u(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function O_(){}function dy(n,r,l,f,m){if(m){if(typeof f=="function"){var v=f;f=function(){var te=pu(T);v.call(te)}}var T=N_(r,f,n,0,null,!1,!1,"",O_);return n._reactRootContainer=T,n[er]=T.current,ga(n.nodeType===8?n.parentNode:n),xs(),T}for(;m=n.lastChild;)n.removeChild(m);if(typeof f=="function"){var F=f;f=function(){var te=pu(H);F.call(te)}}var H=Vf(n,0,!1,null,null,!1,!1,"",O_);return n._reactRootContainer=H,n[er]=H.current,ga(n.nodeType===8?n.parentNode:n),xs(function(){hu(r,H,l,f)}),H}function gu(n,r,l,f,m){var v=l._reactRootContainer;if(v){var T=v;if(typeof m=="function"){var F=m;m=function(){var H=pu(T);F.call(H)}}hu(r,T,n,m)}else T=dy(l,r,n,m,f);return pu(T)}gp=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=an(r.pendingLanes);l!==0&&(cs(r,l|1),Gn(r,X()),(Mt&6)===0&&(xo=X()+500,Nr()))}break;case 13:xs(function(){var f=rr(n,1);if(f!==null){var m=Un();Ii(f,n,1,m)}}),Hf(n,1)}},pc=function(n){if(n.tag===13){var r=rr(n,134217728);if(r!==null){var l=Un();Ii(r,n,134217728,l)}Hf(n,134217728)}},vp=function(n){if(n.tag===13){var r=Br(n),l=rr(n,r);if(l!==null){var f=Un();Ii(l,n,r,f)}Hf(n,r)}},xp=function(){return _t},yp=function(n,r){var l=_t;try{return _t=n,r()}finally{_t=l}},ye=function(n,r,l){switch(r){case"input":if(Ge(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var m=Nl(f);if(!m)throw Error(t(90));on(f),Ge(f,m)}}}break;case"textarea":C(n,l);break;case"select":r=l.value,r!=null&&zt(n,!!l.multiple,r,!1)}},lt=Uf,At=xs;var hy={usingClientEntryPoint:!1,Events:[ya,so,Nl,pe,Xe,Uf]},Na={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},py={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=gl(n),n===null?null:n.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||fy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{Ze=vu.inject(py),st=vu}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hy,Wn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(r))throw Error(t(200));return cy(n,r,null,l)},Wn.createRoot=function(n,r){if(!Wf(n))throw Error(t(299));var l=!1,f="",m=F_;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=Vf(n,1,!1,null,null,l,!1,f,m),n[er]=r.current,ga(n.nodeType===8?n.parentNode:n),new Gf(r)},Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=gl(r),n=n===null?null:n.stateNode,n},Wn.flushSync=function(n){return xs(n)},Wn.hydrate=function(n,r,l){if(!_u(r))throw Error(t(200));return gu(null,n,r,!0,l)},Wn.hydrateRoot=function(n,r,l){if(!Wf(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,v="",T=F_;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=N_(r,null,n,1,l??null,m,!1,v,T),n[er]=r.current,ga(n),f)for(n=0;n<f.length;n++)l=f[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new mu(r)},Wn.render=function(n,r,l){if(!_u(r))throw Error(t(200));return gu(null,n,r,!1,l)},Wn.unmountComponentAtNode=function(n){if(!_u(n))throw Error(t(40));return n._reactRootContainer?(xs(function(){gu(null,null,n,!1,function(){n._reactRootContainer=null,n[er]=null})}),!0):!1},Wn.unstable_batchedUpdates=Uf,Wn.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!_u(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gu(n,r,l,!1,f)},Wn.version="18.3.1-next-f1338f8080-20240426",Wn}var X_;function Ey(){if(X_)return Yf.exports;X_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Yf.exports=My(),Yf.exports}var j_;function Ty(){if(j_)return xu;j_=1;var o=Ey();return xu.createRoot=o.createRoot,xu.hydrateRoot=o.hydrateRoot,xu}var wy=Ty();const Ay=lv(wy);function pr(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function uv(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var li={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wo={duration:.5,overwrite:!1,delay:0},Hh,yn,Wt,Ei=1e8,Ot=1/Ei,Fd=Math.PI*2,Cy=Fd/4,Ry=0,cv=Math.sqrt,by=Math.cos,Py=Math.sin,gn=function(e){return typeof e=="string"},Kt=function(e){return typeof e=="function"},xr=function(e){return typeof e=="number"},Gh=function(e){return typeof e>"u"},Zi=function(e){return typeof e=="object"},jn=function(e){return e!==!1},Wh=function(){return typeof window<"u"},yu=function(e){return Kt(e)||gn(e)},fv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,Od=/(?:-?\.?\d|\.)+/gi,dv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Kf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hv=/[+-]=-?[.\d]+/,pv=/[^,'"\[\]\s]+/gi,Dy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Yt,Gi,kd,Xh,ci={},Zu={},mv,_v=function(e){return(Zu=Xo(e,ci))&&Zn},jh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},qa=function(e,t){return!t&&console.warn(e)},gv=function(e,t){return e&&(ci[e]=t)&&Zu&&(Zu[e]=t)||ci},$a=function(){return 0},Ly={suppressEvents:!0,isStart:!0,kill:!1},Gu={suppressEvents:!0,kill:!1},Iy={suppressEvents:!0},Yh={},es=[],zd={},vv,si={},Zf={},Y_=30,Wu=[],qh="",$h=function(e){var t=e[0],i,s;if(Zi(t)||Kt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(s=Wu.length;s--&&!Wu[s].targetTest(t););i=Wu[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new Hv(e[s],i)))||e.splice(s,1);return e},zs=function(e){return e._gsap||$h(Ti(e))[0]._gsap},xv=function(e,t,i){return(i=e[t])&&Kt(i)?e[t]():Gh(i)&&e.getAttribute&&e.getAttribute(t)||i},Yn=function(e,t){return(e=e.split(",")).forEach(t)||e},Jt=function(e){return Math.round(e*1e5)/1e5||0},sn=function(e){return Math.round(e*1e7)/1e7||0},zo=function(e,t){var i=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+s:i==="-"?e-s:i==="*"?e*s:e/s},Ny=function(e,t){for(var i=t.length,s=0;e.indexOf(t[s])<0&&++s<i;);return s<i},Qu=function(){var e=es.length,t=es.slice(0),i,s;for(zd={},es.length=0,i=0;i<e;i++)s=t[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Kh=function(e){return!!(e._initted||e._startAt||e.add)},yv=function(e,t,i,s){es.length&&!yn&&Qu(),e.render(t,i,!!(yn&&t<0&&Kh(e))),es.length&&!yn&&Qu()},Sv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(pv).length<2?t:gn(e)?e.trim():e},Mv=function(e){return e},fi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Uy=function(e){return function(t,i){for(var s in i)s in t||s==="duration"&&e||s==="ease"||(t[s]=i[s])}},Xo=function(e,t){for(var i in t)e[i]=t[i];return e},q_=function o(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Zi(t[i])?o(e[i]||(e[i]={}),t[i]):t[i]);return e},Ju=function(e,t){var i={},s;for(s in e)s in t||(i[s]=e[s]);return i},Xa=function(e){var t=e.parent||Yt,i=e.keyframes?Uy(Dn(e.keyframes)):fi;if(jn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Fy=function(e,t){for(var i=e.length,s=i===t.length;s&&i--&&e[i]===t[i];);return i<0},Ev=function(e,t,i,s,a){var u=e[s],c;if(a)for(c=t[a];u&&u[a]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[s]=t,t._prev=u,t.parent=t._dp=e,t},ac=function(e,t,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var a=t._prev,u=t._next;a?a._next=u:e[i]===t&&(e[i]=u),u?u._prev=a:e[s]===t&&(e[s]=a),t._next=t._prev=t.parent=null},rs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Bs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Oy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Bd=function(e,t,i,s){return e._startAt&&(yn?e._startAt.revert(Gu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},ky=function o(e){return!e||e._ts&&o(e.parent)},$_=function(e){return e._repeat?jo(e._tTime,e=e.duration()+e._rDelay)*e:0},jo=function(e,t){var i=Math.floor(e=sn(e/t));return e&&i===e?i-1:i},ec=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},lc=function(e){return e._end=sn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ot)||0))},uc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=sn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),lc(e),i._dirty||Bs(i,e)),e},Tv=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ec(e.rawTime(),t),(!t._dur||ol(0,t.totalDuration(),i)-t._tTime>Ot)&&t.render(i,!0)),Bs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ot}},Xi=function(e,t,i,s){return t.parent&&rs(t),t._start=sn((xr(i)?i:i||e!==Yt?yi(e,i,t):e._time)+t._delay),t._end=sn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ev(e,t,"_first","_last",e._sort?"_start":0),Vd(t)||(e._recent=t),s||Tv(e,t),e._ts<0&&uc(e,e._tTime),e},wv=function(e,t){return(ci.ScrollTrigger||jh("scrollTrigger",t))&&ci.ScrollTrigger.create(t,e)},Av=function(e,t,i,s,a){if(Qh(e,t,a),!e._initted)return 1;if(!i&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&vv!==oi.frame)return es.push(e),e._lazy=[a,s],1},zy=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Vd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},By=function(e,t,i,s){var a=e.ratio,u=t<0||!t&&(!e._start&&zy(e)&&!(!e._initted&&Vd(e))||(e._ts<0||e._dp._ts<0)&&!Vd(e))?0:1,c=e._rDelay,d=0,h,p,_;if(c&&e._repeat&&(d=ol(0,e._tDur,t),p=jo(d,c),e._yoyo&&p&1&&(u=1-u),p!==jo(e._tTime,c)&&(a=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==a||yn||s||e._zTime===Ot||!t&&e._zTime){if(!e._initted&&Av(e,t,s,i,d))return;for(_=e._zTime,e._zTime=t||(i?Ot:0),i||(i=t&&!_),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=d,h=e._pt;h;)h.r(u,h.d),h=h._next;t<0&&Bd(e,t,i,!0),e._onUpdate&&!i&&ai(e,"onUpdate"),d&&e._repeat&&!i&&e.parent&&ai(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&rs(e,1),!i&&!yn&&(ai(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Vy=function(e,t,i){var s;if(i>t)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},Yo=function(e,t,i,s){var a=e._repeat,u=sn(t)||0,c=e._tTime/e._tDur;return c&&!s&&(e._time*=u/e._dur),e._dur=u,e._tDur=a?a<0?1e10:sn(u*(a+1)+e._rDelay*a):u,c>0&&!s&&uc(e,e._tTime=e._tDur*c),e.parent&&lc(e),i||Bs(e.parent,e),e},K_=function(e){return e instanceof On?Bs(e):Yo(e,e._dur)},Hy={_start:0,endTime:$a,totalDuration:$a},yi=function o(e,t,i){var s=e.labels,a=e._recent||Hy,u=e.duration()>=Ei?a.endTime(!1):e._dur,c,d,h;return gn(t)&&(isNaN(t)||t in s)?(d=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),d==="<"||d===">"?(c>=0&&(t=t.replace(/=/,"")),(d==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?a:i).totalDuration()/100:1)):c<0?(t in s||(s[t]=u),s[t]):(d=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&i&&(d=d/100*(Dn(i)?i[0]:i).totalDuration()),c>1?o(e,t.substr(0,c-1),i)+d:u+d)):t==null?u:+t},ja=function(e,t,i){var s=xr(t[1]),a=(s?2:1)+(e<2?0:1),u=t[a],c,d;if(s&&(u.duration=t[1]),u.parent=i,e){for(c=u,d=i;d&&!("immediateRender"in c);)c=d.vars.defaults||{},d=jn(d.vars.inherit)&&d.parent;u.immediateRender=jn(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[a-1]}return new rn(t[0],u,t[a+1])},as=function(e,t){return e||e===0?t(e):t},ol=function(e,t,i){return i<e?e:i>t?t:i},Pn=function(e,t){return!gn(e)||!(t=Dy.exec(e))?"":t[1]},Gy=function(e,t,i){return as(i,function(s){return ol(e,t,s)})},Hd=[].slice,Cv=function(e,t){return e&&Zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zi(e[0]))&&!e.nodeType&&e!==Gi},Wy=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(s){var a;return gn(s)&&!t||Cv(s,1)?(a=i).push.apply(a,Ti(s)):i.push(s)})||i},Ti=function(e,t,i){return Wt&&!t&&Wt.selector?Wt.selector(e):gn(e)&&!i&&(kd||!qo())?Hd.call((t||Xh).querySelectorAll(e),0):Dn(e)?Wy(e,i):Cv(e)?Hd.call(e,0):e?[e]:[]},Gd=function(e){return e=Ti(e)[0]||qa("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Ti(t,i.querySelectorAll?i:i===e?qa("Invalid scope")||Xh.createElement("div"):e)}},Rv=function(e){return e.sort(function(){return .5-Math.random()})},bv=function(e){if(Kt(e))return e;var t=Zi(e)?e:{each:e},i=Vs(t.ease),s=t.from||0,a=parseFloat(t.base)||0,u={},c=s>0&&s<1,d=isNaN(s)||c,h=t.axis,p=s,_=s;return gn(s)?p=_={center:.5,edges:.5,end:1}[s]||0:!c&&d&&(p=s[0],_=s[1]),function(g,S,E){var M=(E||t).length,y=u[M],x,D,P,w,L,I,N,O,A;if(!y){if(A=t.grid==="auto"?0:(t.grid||[1,Ei])[1],!A){for(N=-Ei;N<(N=E[A++].getBoundingClientRect().left)&&A<M;);A<M&&A--}for(y=u[M]=[],x=d?Math.min(A,M)*p-.5:s%A,D=A===Ei?0:d?M*_/A-.5:s/A|0,N=0,O=Ei,I=0;I<M;I++)P=I%A-x,w=D-(I/A|0),y[I]=L=h?Math.abs(h==="y"?w:P):cv(P*P+w*w),L>N&&(N=L),L<O&&(O=L);s==="random"&&Rv(y),y.max=N-O,y.min=O,y.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(A>M?M-1:h?h==="y"?M/A:A:Math.max(A,M/A))||0)*(s==="edges"?-1:1),y.b=M<0?a-M:a,y.u=Pn(t.amount||t.each)||0,i=i&&M<0?zv(i):i}return M=(y[g]-y.min)/y.max||0,sn(y.b+(i?i(M):M)*y.v)+y.u}},Wd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=sn(Math.round(parseFloat(i)/e)*e*t);return(s-s%1)/t+(xr(i)?0:Pn(i))}},Pv=function(e,t){var i=Dn(e),s,a;return!i&&Zi(e)&&(s=i=e.radius||Ei,e.values?(e=Ti(e.values),(a=!xr(e[0]))&&(s*=s)):e=Wd(e.increment)),as(t,i?Kt(e)?function(u){return a=e(u),Math.abs(a-u)<=s?a:u}:function(u){for(var c=parseFloat(a?u.x:u),d=parseFloat(a?u.y:0),h=Ei,p=0,_=e.length,g,S;_--;)a?(g=e[_].x-c,S=e[_].y-d,g=g*g+S*S):g=Math.abs(e[_]-c),g<h&&(h=g,p=_);return p=!s||h<=s?e[p]:u,a||p===u||xr(u)?p:p+Pn(u)}:Wd(e))},Dv=function(e,t,i,s){return as(Dn(e)?!t:i===!0?!!(i=0):!s,function(){return Dn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*s)/s})},Xy=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(s){return t.reduce(function(a,u){return u(a)},s)}},jy=function(e,t){return function(i){return e(parseFloat(i))+(t||Pn(i))}},Yy=function(e,t,i){return Iv(e,t,0,1,i)},Lv=function(e,t,i){return as(i,function(s){return e[~~t(s)]})},qy=function o(e,t,i){var s=t-e;return Dn(e)?Lv(e,o(0,e.length),t):as(i,function(a){return(s+(a-e)%s)%s+e})},$y=function o(e,t,i){var s=t-e,a=s*2;return Dn(e)?Lv(e,o(0,e.length-1),t):as(i,function(u){return u=(a+(u-e)%a)%a||0,e+(u>s?a-u:u)})},Ka=function(e){for(var t=0,i="",s,a,u,c;~(s=e.indexOf("random(",t));)u=e.indexOf(")",s),c=e.charAt(s+7)==="[",a=e.substr(s+7,u-s-7).match(c?pv:Od),i+=e.substr(t,s-t)+Dv(c?a:+a[0],c?0:+a[1],+a[2]||1e-5),t=u+1;return i+e.substr(t,e.length-t)},Iv=function(e,t,i,s,a){var u=t-e,c=s-i;return as(a,function(d){return i+((d-e)/u*c||0)})},Ky=function o(e,t,i,s){var a=isNaN(e+t)?0:function(S){return(1-S)*e+S*t};if(!a){var u=gn(e),c={},d,h,p,_,g;if(i===!0&&(s=1)&&(i=null),u)e={p:e},t={p:t};else if(Dn(e)&&!Dn(t)){for(p=[],_=e.length,g=_-2,h=1;h<_;h++)p.push(o(e[h-1],e[h]));_--,a=function(E){E*=_;var M=Math.min(g,~~E);return p[M](E-M)},i=t}else s||(e=Xo(Dn(e)?[]:{},e));if(!p){for(d in t)Zh.call(c,e,d,"get",t[d]);a=function(E){return tp(E,c)||(u?e.p:e)}}}return as(i,a)},Z_=function(e,t,i){var s=e.labels,a=Ei,u,c,d;for(u in s)c=s[u]-t,c<0==!!i&&c&&a>(c=Math.abs(c))&&(d=u,a=c);return d},ai=function(e,t,i){var s=e.vars,a=s[t],u=Wt,c=e._ctx,d,h,p;if(a)return d=s[t+"Params"],h=s.callbackScope||e,i&&es.length&&Qu(),c&&(Wt=c),p=d?a.apply(h,d):a.call(h),Wt=u,p},Ha=function(e){return rs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&ai(e,"onInterrupt"),e},Oo,Nv=[],Uv=function(e){if(e)if(e=!e.name&&e.default||e,Wh()||e.headless){var t=e.name,i=Kt(e),s=t&&!i&&e.init?function(){this._props=[]}:e,a={init:$a,render:tp,add:Zh,kill:dS,modifier:fS,rawVars:0},u={targetTest:0,get:0,getSetter:ep,aliases:{},register:0};if(qo(),e!==s){if(si[t])return;fi(s,fi(Ju(e,a),u)),Xo(s.prototype,Xo(a,Ju(e,u))),si[s.prop=t]=s,e.targetTest&&(Wu.push(s),Yh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}gv(t,s),e.register&&e.register(Zn,s,qn)}else Nv.push(e)},Ft=255,Ga={aqua:[0,Ft,Ft],lime:[0,Ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ft],navy:[0,0,128],white:[Ft,Ft,Ft],olive:[128,128,0],yellow:[Ft,Ft,0],orange:[Ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ft,0,0],pink:[Ft,192,203],cyan:[0,Ft,Ft],transparent:[Ft,Ft,Ft,0]},Qf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ft+.5|0},Fv=function(e,t,i){var s=e?xr(e)?[e>>16,e>>8&Ft,e&Ft]:0:Ga.black,a,u,c,d,h,p,_,g,S,E;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ga[e])s=Ga[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+a+a+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Ft,s&Ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Ft,e&Ft]}else if(e.substr(0,3)==="hsl"){if(s=E=e.match(Od),!t)d=+s[0]%360/360,h=+s[1]/100,p=+s[2]/100,u=p<=.5?p*(h+1):p+h-p*h,a=p*2-u,s.length>3&&(s[3]*=1),s[0]=Qf(d+1/3,a,u),s[1]=Qf(d,a,u),s[2]=Qf(d-1/3,a,u);else if(~e.indexOf("="))return s=e.match(dv),i&&s.length<4&&(s[3]=1),s}else s=e.match(Od)||Ga.transparent;s=s.map(Number)}return t&&!E&&(a=s[0]/Ft,u=s[1]/Ft,c=s[2]/Ft,_=Math.max(a,u,c),g=Math.min(a,u,c),p=(_+g)/2,_===g?d=h=0:(S=_-g,h=p>.5?S/(2-_-g):S/(_+g),d=_===a?(u-c)/S+(u<c?6:0):_===u?(c-a)/S+2:(a-u)/S+4,d*=60),s[0]=~~(d+.5),s[1]=~~(h*100+.5),s[2]=~~(p*100+.5)),i&&s.length<4&&(s[3]=1),s},Ov=function(e){var t=[],i=[],s=-1;return e.split(ts).forEach(function(a){var u=a.match(Fo)||[];t.push.apply(t,u),i.push(s+=u.length+1)}),t.c=i,t},Q_=function(e,t,i){var s="",a=(e+s).match(ts),u=t?"hsla(":"rgba(",c=0,d,h,p,_;if(!a)return e;if(a=a.map(function(g){return(g=Fv(g,t,1))&&u+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),i&&(p=Ov(e),d=i.c,d.join(s)!==p.c.join(s)))for(h=e.replace(ts,"1").split(Fo),_=h.length-1;c<_;c++)s+=h[c]+(~d.indexOf(c)?a.shift()||u+"0,0,0,0)":(p.length?p:a.length?a:i).shift());if(!h)for(h=e.split(ts),_=h.length-1;c<_;c++)s+=h[c]+a[c];return s+h[_]},ts=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ga)o+="|"+e+"\\b";return new RegExp(o+")","gi")})(),Zy=/hsl[a]?\(/,kv=function(e){var t=e.join(" "),i;if(ts.lastIndex=0,ts.test(t))return i=Zy.test(t),e[1]=Q_(e[1],i),e[0]=Q_(e[0],i,Ov(e[1])),!0},Za,oi=(function(){var o=Date.now,e=500,t=33,i=o(),s=i,a=1e3/240,u=a,c=[],d,h,p,_,g,S,E=function M(y){var x=o()-s,D=y===!0,P,w,L,I;if((x>e||x<0)&&(i+=x-t),s+=x,L=s-i,P=L-u,(P>0||D)&&(I=++_.frame,g=L-_.time*1e3,_.time=L=L/1e3,u+=P+(P>=a?4:a-P),w=1),D||(d=h(M)),w)for(S=0;S<c.length;S++)c[S](L,g,I,y)};return _={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(y){return g/(1e3/(y||60))},wake:function(){mv&&(!kd&&Wh()&&(Gi=kd=window,Xh=Gi.document||{},ci.gsap=Zn,(Gi.gsapVersions||(Gi.gsapVersions=[])).push(Zn.version),_v(Zu||Gi.GreenSockGlobals||!Gi.gsap&&Gi||{}),Nv.forEach(Uv)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&_.sleep(),h=p||function(y){return setTimeout(y,u-_.time*1e3+1|0)},Za=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(d),Za=0,h=$a},lagSmoothing:function(y,x){e=y||1/0,t=Math.min(x||33,e)},fps:function(y){a=1e3/(y||240),u=_.time*1e3+a},add:function(y,x,D){var P=x?function(w,L,I,N){y(w,L,I,N),_.remove(P)}:y;return _.remove(y),c[D?"unshift":"push"](P),qo(),P},remove:function(y,x){~(x=c.indexOf(y))&&c.splice(x,1)&&S>=x&&S--},_listeners:c},_})(),qo=function(){return!Za&&oi.wake()},xt={},Qy=/^[\d.\-M][\d.\-,\s]/,Jy=/["']/g,eS=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),s=i[0],a=1,u=i.length,c,d,h;a<u;a++)d=i[a],c=a!==u-1?d.lastIndexOf(","):d.length,h=d.substr(0,c),t[s]=isNaN(h)?h.replace(Jy,"").trim():+h,s=d.substr(c+1).trim();return t},tS=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<i?e.indexOf(")",i+1):i)},nS=function(e){var t=(e+"").split("("),i=xt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[eS(t[1])]:tS(e).split(",").map(Sv)):xt._CE&&Qy.test(e)?xt._CE("",e):i},zv=function(e){return function(t){return 1-e(1-t)}},Bv=function o(e,t){for(var i=e._first,s;i;)i instanceof On?o(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?o(i.timeline,t):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=t)),i=i._next},Vs=function(e,t){return e&&(Kt(e)?e:xt[e]||nS(e))||t},Ys=function(e,t,i,s){i===void 0&&(i=function(d){return 1-t(1-d)}),s===void 0&&(s=function(d){return d<.5?t(d*2)/2:1-t((1-d)*2)/2});var a={easeIn:t,easeOut:i,easeInOut:s},u;return Yn(e,function(c){xt[c]=ci[c]=a,xt[u=c.toLowerCase()]=i;for(var d in a)xt[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=xt[c+"."+d]=a[d]}),a},Vv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Jf=function o(e,t,i){var s=t>=1?t:1,a=(i||(e?.3:.45))/(t<1?t:1),u=a/Fd*(Math.asin(1/s)||0),c=function(p){return p===1?1:s*Math.pow(2,-10*p)*Py((p-u)*a)+1},d=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:Vv(c);return a=Fd/a,d.config=function(h,p){return o(e,h,p)},d},ed=function o(e,t){t===void 0&&(t=1.70158);var i=function(u){return u?--u*u*((t+1)*u+t)+1:0},s=e==="out"?i:e==="in"?function(a){return 1-i(1-a)}:Vv(i);return s.config=function(a){return o(e,a)},s};Yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Ys(o+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});xt.Linear.easeNone=xt.none=xt.Linear.easeIn;Ys("Elastic",Jf("in"),Jf("out"),Jf());(function(o,e){var t=1/e,i=2*t,s=2.5*t,a=function(c){return c<t?o*c*c:c<i?o*Math.pow(c-1.5/e,2)+.75:c<s?o*(c-=2.25/e)*c+.9375:o*Math.pow(c-2.625/e,2)+.984375};Ys("Bounce",function(u){return 1-a(1-u)},a)})(7.5625,2.75);Ys("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Ys("Circ",function(o){return-(cv(1-o*o)-1)});Ys("Sine",function(o){return o===1?1:-by(o*Cy)+1});Ys("Back",ed("in"),ed("out"),ed());xt.SteppedEase=xt.steps=ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,s=e+(t?0:1),a=t?1:0,u=1-Ot;return function(c){return((s*ol(0,u,c)|0)+a)*i}}};Wo.ease=xt["quad.out"];Yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return qh+=o+","+o+"Params,"});var Hv=function(e,t){this.id=Ry++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:xv,this.set=t?t.getSetter:ep},Qa=(function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Yo(this,+t.duration,1,1),this.data=t.data,Wt&&(this._ctx=Wt,Wt.data.push(this)),Za||oi.wake()}var e=o.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Yo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(qo(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(uc(this,i),!a._dp||a.parent||Tv(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Xi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Ot||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),yv(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+$_(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+$_(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,s){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,s):this._repeat?jo(this._tTime,a)+1:1},e.timeScale=function(i,s){if(!arguments.length)return this._rts===-Ot?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?ec(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ot?0:this._rts,this.totalTime(ol(-Math.abs(this._delay),this.totalDuration(),a),s!==!1),lc(this),Oy(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ot&&(this._tTime-=Ot)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Xi(s,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(jn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ec(s.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Iy);var s=yn;return yn=i,Kh(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),yn=s,this},e.globalTime=function(i){for(var s=this,a=arguments.length?i:s.rawTime();s;)a=s._start+a/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,K_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,K_(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime(yi(this,i),jn(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,jn(s)),this._dur||(this._zTime=-Ot),this},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ot,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=s&&a<this.endTime(!0)-Ot)},e.eventCallback=function(i,s,a){var u=this.vars;return arguments.length>1?(s?(u[i]=s,a&&(u[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=s)):delete u[i],this):u[i]},e.then=function(i){var s=this;return new Promise(function(a){var u=Kt(i)?i:Mv,c=function(){var h=s.then;s.then=null,Kt(u)&&(u=u(s))&&(u.then||u===s)&&(s.then=h),a(u),s.then=h};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?c():s._prom=c})},e.kill=function(){Ha(this)},o})();fi(Qa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ot,_prom:0,_ps:!1,_rts:1});var On=(function(o){uv(e,o);function e(i,s){var a;return i===void 0&&(i={}),a=o.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=jn(i.sortChildren),Yt&&Xi(i.parent||Yt,pr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&wv(pr(a),i.scrollTrigger),a}var t=e.prototype;return t.to=function(s,a,u){return ja(0,arguments,this),this},t.from=function(s,a,u){return ja(1,arguments,this),this},t.fromTo=function(s,a,u,c){return ja(2,arguments,this),this},t.set=function(s,a,u){return a.duration=0,a.parent=this,Xa(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new rn(s,a,yi(this,u),1),this},t.call=function(s,a,u){return Xi(this,rn.delayedCall(0,s,a),u)},t.staggerTo=function(s,a,u,c,d,h,p){return u.duration=a,u.stagger=u.stagger||c,u.onComplete=h,u.onCompleteParams=p,u.parent=this,new rn(s,u,yi(this,d)),this},t.staggerFrom=function(s,a,u,c,d,h,p){return u.runBackwards=1,Xa(u).immediateRender=jn(u.immediateRender),this.staggerTo(s,a,u,c,d,h,p)},t.staggerFromTo=function(s,a,u,c,d,h,p,_){return c.startAt=u,Xa(c).immediateRender=jn(c.immediateRender),this.staggerTo(s,a,c,d,h,p,_)},t.render=function(s,a,u){var c=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=s<=0?0:sn(s),_=this._zTime<0!=s<0&&(this._initted||!h),g,S,E,M,y,x,D,P,w,L,I,N;if(this!==Yt&&p>d&&s>=0&&(p=d),p!==this._tTime||u||_){if(c!==this._time&&h&&(p+=this._time-c,s+=this._time-c),g=p,w=this._start,P=this._ts,x=!P,_&&(h||(c=this._zTime),(s||!a)&&(this._zTime=s)),this._repeat){if(I=this._yoyo,y=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(y*100+s,a,u);if(g=sn(p%y),p===d?(M=this._repeat,g=h):(L=sn(p/y),M=~~L,M&&M===L&&(g=h,M--),g>h&&(g=h)),L=jo(this._tTime,y),!c&&this._tTime&&L!==M&&this._tTime-L*y-this._dur<=0&&(L=M),I&&M&1&&(g=h-g,N=1),M!==L&&!this._lock){var O=I&&L&1,A=O===(I&&M&1);if(M<L&&(O=!O),c=O?0:p%h?h:p,this._lock=1,this.render(c||(N?0:sn(M*y)),a,!h)._lock=0,this._tTime=p,!a&&this.parent&&ai(this,"onRepeat"),this.vars.repeatRefresh&&!N&&(this.invalidate()._lock=1),c&&c!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,A&&(this._lock=2,c=O?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!N&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;Bv(this,N)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(D=Vy(this,sn(c),sn(g)),D&&(p-=g-(g=D._start))),this._tTime=p,this._time=g,this._act=!P,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,c=0),!c&&p&&!a&&!L&&(ai(this,"onStart"),this._tTime!==p))return this;if(g>=c&&s>=0)for(S=this._first;S;){if(E=S._next,(S._act||g>=S._start)&&S._ts&&D!==S){if(S.parent!==this)return this.render(s,a,u);if(S.render(S._ts>0?(g-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(g-S._start)*S._ts,a,u),g!==this._time||!this._ts&&!x){D=0,E&&(p+=this._zTime=-Ot);break}}S=E}else{S=this._last;for(var R=s<0?s:g;S;){if(E=S._prev,(S._act||R<=S._end)&&S._ts&&D!==S){if(S.parent!==this)return this.render(s,a,u);if(S.render(S._ts>0?(R-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(R-S._start)*S._ts,a,u||yn&&Kh(S)),g!==this._time||!this._ts&&!x){D=0,E&&(p+=this._zTime=R?-Ot:Ot);break}}S=E}}if(D&&!a&&(this.pause(),D.render(g>=c?0:-Ot)._zTime=g>=c?1:-1,this._ts))return this._start=w,lc(this),this.render(s,a,u);this._onUpdate&&!a&&ai(this,"onUpdate",!0),(p===d&&this._tTime>=this.totalDuration()||!p&&c)&&(w===this._start||Math.abs(P)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(p===d&&this._ts>0||!p&&this._ts<0)&&rs(this,1),!a&&!(s<0&&!c)&&(p||c||!d)&&(ai(this,p===d&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<d&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,a){var u=this;if(xr(a)||(a=yi(this,a,s)),!(s instanceof Qa)){if(Dn(s))return s.forEach(function(c){return u.add(c,a)}),this;if(gn(s))return this.addLabel(s,a);if(Kt(s))s=rn.delayedCall(0,s);else return this}return this!==s?Xi(this,s,a):this},t.getChildren=function(s,a,u,c){s===void 0&&(s=!0),a===void 0&&(a=!0),u===void 0&&(u=!0),c===void 0&&(c=-Ei);for(var d=[],h=this._first;h;)h._start>=c&&(h instanceof rn?a&&d.push(h):(u&&d.push(h),s&&d.push.apply(d,h.getChildren(!0,a,u)))),h=h._next;return d},t.getById=function(s){for(var a=this.getChildren(1,1,1),u=a.length;u--;)if(a[u].vars.id===s)return a[u]},t.remove=function(s){return gn(s)?this.removeLabel(s):Kt(s)?this.killTweensOf(s):(s.parent===this&&ac(this,s),s===this._recent&&(this._recent=this._last),Bs(this))},t.totalTime=function(s,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=sn(oi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,a),this._forcing=0,this):this._tTime},t.addLabel=function(s,a){return this.labels[s]=yi(this,a),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,a,u){var c=rn.delayedCall(0,a||$a,u);return c.data="isPause",this._hasPause=1,Xi(this,c,yi(this,s))},t.removePause=function(s){var a=this._first;for(s=yi(this,s);a;)a._start===s&&a.data==="isPause"&&rs(a),a=a._next},t.killTweensOf=function(s,a,u){for(var c=this.getTweensOf(s,u),d=c.length;d--;)Zr!==c[d]&&c[d].kill(s,a);return this},t.getTweensOf=function(s,a){for(var u=[],c=Ti(s),d=this._first,h=xr(a),p;d;)d instanceof rn?Ny(d._targets,c)&&(h?(!Zr||d._initted&&d._ts)&&d.globalTime(0)<=a&&d.globalTime(d.totalDuration())>a:!a||d.isActive())&&u.push(d):(p=d.getTweensOf(c,a)).length&&u.push.apply(u,p),d=d._next;return u},t.tweenTo=function(s,a){a=a||{};var u=this,c=yi(u,s),d=a,h=d.startAt,p=d.onStart,_=d.onStartParams,g=d.immediateRender,S,E=rn.to(u,fi({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale())||Ot,onStart:function(){if(u.pause(),!S){var y=a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale());E._dur!==y&&Yo(E,y,0,1).render(E._time,!0,!0),S=1}p&&p.apply(E,_||[])}},a));return g?E.render(0):E},t.tweenFromTo=function(s,a,u){return this.tweenTo(a,fi({startAt:{time:yi(this,s)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),Z_(this,yi(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),Z_(this,yi(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Ot)},t.shiftChildren=function(s,a,u){u===void 0&&(u=0);for(var c=this._first,d=this.labels,h;c;)c._start>=u&&(c._start+=s,c._end+=s),c=c._next;if(a)for(h in d)d[h]>=u&&(d[h]+=s);return Bs(this)},t.invalidate=function(s){var a=this._first;for(this._lock=0;a;)a.invalidate(s),a=a._next;return o.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var a=this._first,u;a;)u=a._next,this.remove(a),a=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Bs(this)},t.totalDuration=function(s){var a=0,u=this,c=u._last,d=Ei,h,p,_;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(_=u.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>d&&u._sort&&c._ts&&!u._lock?(u._lock=1,Xi(u,c,p-c._delay,1)._lock=0):d=p,p<0&&c._ts&&(a-=p,(!_&&!u._dp||_&&_.smoothChildTiming)&&(u._start+=p/u._ts,u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),d=0),c._end>a&&c._ts&&(a=c._end),c=h;Yo(u,u===Yt&&u._time>a?u._time:a,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(s){if(Yt._ts&&(yv(Yt,ec(s,Yt)),vv=oi.frame),oi.frame>=Y_){Y_+=li.autoSleep||120;var a=Yt._first;if((!a||!a._ts)&&li.autoSleep&&oi._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||oi.sleep()}}},e})(Qa);fi(On.prototype,{_lock:0,_hasPause:0,_forcing:0});var iS=function(e,t,i,s,a,u,c){var d=new qn(this._pt,e,t,0,1,qv,null,a),h=0,p=0,_,g,S,E,M,y,x,D;for(d.b=i,d.e=s,i+="",s+="",(x=~s.indexOf("random("))&&(s=Ka(s)),u&&(D=[i,s],u(D,e,t),i=D[0],s=D[1]),g=i.match(Kf)||[];_=Kf.exec(s);)E=_[0],M=s.substring(h,_.index),S?S=(S+1)%5:M.substr(-5)==="rgba("&&(S=1),E!==g[p++]&&(y=parseFloat(g[p-1])||0,d._pt={_next:d._pt,p:M||p===1?M:",",s:y,c:E.charAt(1)==="="?zo(y,E)-y:parseFloat(E)-y,m:S&&S<4?Math.round:0},h=Kf.lastIndex);return d.c=h<s.length?s.substring(h,s.length):"",d.fp=c,(hv.test(s)||x)&&(d.e=0),this._pt=d,d},Zh=function(e,t,i,s,a,u,c,d,h,p){Kt(s)&&(s=s(a||0,e,u));var _=e[t],g=i!=="get"?i:Kt(_)?h?e[t.indexOf("set")||!Kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():_,S=Kt(_)?h?lS:jv:Jh,E;if(gn(s)&&(~s.indexOf("random(")&&(s=Ka(s)),s.charAt(1)==="="&&(E=zo(g,s)+(Pn(g)||0),(E||E===0)&&(s=E))),!p||g!==s||Xd)return!isNaN(g*s)&&s!==""?(E=new qn(this._pt,e,t,+g||0,s-(g||0),typeof _=="boolean"?cS:Yv,0,S),h&&(E.fp=h),c&&E.modifier(c,this,e),this._pt=E):(!_&&!(t in e)&&jh(t,s),iS.call(this,e,t,g,s,S,d||li.stringFilter,h))},rS=function(e,t,i,s,a){if(Kt(e)&&(e=Ya(e,a,t,i,s)),!Zi(e)||e.style&&e.nodeType||Dn(e)||fv(e))return gn(e)?Ya(e,a,t,i,s):e;var u={},c;for(c in e)u[c]=Ya(e[c],a,t,i,s);return u},Gv=function(e,t,i,s,a,u){var c,d,h,p;if(si[e]&&(c=new si[e]).init(a,c.rawVars?t[e]:rS(t[e],s,a,u,i),i,s,u)!==!1&&(i._pt=d=new qn(i._pt,a,e,0,1,c.render,c,0,c.priority),i!==Oo))for(h=i._ptLookup[i._targets.indexOf(a)],p=c._props.length;p--;)h[c._props[p]]=d;return c},Zr,Xd,Qh=function o(e,t,i){var s=e.vars,a=s.ease,u=s.startAt,c=s.immediateRender,d=s.lazy,h=s.onUpdate,p=s.runBackwards,_=s.yoyoEase,g=s.keyframes,S=s.autoRevert,E=e._dur,M=e._startAt,y=e._targets,x=e.parent,D=x&&x.data==="nested"?x.vars.targets:y,P=e._overwrite==="auto"&&!Hh,w=e.timeline,L,I,N,O,A,R,z,j,K,ue,ne,J,ie;if(w&&(!g||!a)&&(a="none"),e._ease=Vs(a,Wo.ease),e._yEase=_?zv(Vs(_===!0?a:_,Wo.ease)):0,_&&e._yoyo&&!e._repeat&&(_=e._yEase,e._yEase=e._ease,e._ease=_),e._from=!w&&!!s.runBackwards,!w||g&&!s.stagger){if(j=y[0]?zs(y[0]).harness:0,J=j&&s[j.prop],L=Ju(s,Yh),M&&(M._zTime<0&&M.progress(1),t<0&&p&&c&&!S?M.render(-1,!0):M.revert(p&&E?Gu:Ly),M._lazy=0),u){if(rs(e._startAt=rn.set(y,fi({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&jn(d),startAt:null,delay:0,onUpdate:h&&function(){return ai(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!c&&!S)&&e._startAt.revert(Gu),c&&E&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(p&&E&&!M){if(t&&(c=!1),N=fi({overwrite:!1,data:"isFromStart",lazy:c&&!M&&jn(d),immediateRender:c,stagger:0,parent:x},L),J&&(N[j.prop]=J),rs(e._startAt=rn.set(y,N)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(Gu):e._startAt.render(-1,!0)),e._zTime=t,!c)o(e._startAt,Ot,Ot);else if(!t)return}for(e._pt=e._ptCache=0,d=E&&jn(d)||d&&!E,I=0;I<y.length;I++){if(A=y[I],z=A._gsap||$h(y)[I]._gsap,e._ptLookup[I]=ue={},zd[z.id]&&es.length&&Qu(),ne=D===y?I:D.indexOf(A),j&&(K=new j).init(A,J||L,e,ne,D)!==!1&&(e._pt=O=new qn(e._pt,A,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(V){ue[V]=O}),K.priority&&(R=1)),!j||J)for(N in L)si[N]&&(K=Gv(N,L,e,ne,A,D))?K.priority&&(R=1):ue[N]=O=Zh.call(e,A,N,"get",L[N],ne,D,0,s.stringFilter);e._op&&e._op[I]&&e.kill(A,e._op[I]),P&&e._pt&&(Zr=e,Yt.killTweensOf(A,ue,e.globalTime(t)),ie=!e.parent,Zr=0),e._pt&&d&&(zd[z.id]=1)}R&&$v(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!ie,g&&t<=0&&w.render(Ei,!0,!0)},sS=function(e,t,i,s,a,u,c,d){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,_,g,S;if(!h)for(h=e._ptCache[t]=[],g=e._ptLookup,S=e._targets.length;S--;){if(p=g[S][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return Xd=1,e.vars[t]="+=0",Qh(e,c),Xd=0,d?qa(t+" not eligible for reset"):1;h.push(p)}for(S=h.length;S--;)_=h[S],p=_._pt||_,p.s=(s||s===0)&&!a?s:p.s+(s||0)+u*p.c,p.c=i-p.s,_.e&&(_.e=Jt(i)+Pn(_.e)),_.b&&(_.b=p.s+Pn(_.b))},oS=function(e,t){var i=e[0]?zs(e[0]).harness:0,s=i&&i.aliases,a,u,c,d;if(!s)return t;a=Xo({},t);for(u in s)if(u in a)for(d=s[u].split(","),c=d.length;c--;)a[d[c]]=a[u];return a},aS=function(e,t,i,s){var a=t.ease||s||"power1.inOut",u,c;if(Dn(t))c=i[e]||(i[e]=[]),t.forEach(function(d,h){return c.push({t:h/(t.length-1)*100,v:d,e:a})});else for(u in t)c=i[u]||(i[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:a})},Ya=function(e,t,i,s,a){return Kt(e)?e.call(t,i,s,a):gn(e)&&~e.indexOf("random(")?Ka(e):e},Wv=qh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Xv={};Yn(Wv+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Xv[o]=1});var rn=(function(o){uv(e,o);function e(i,s,a,u){var c;typeof s=="number"&&(a.duration=s,s=a,a=null),c=o.call(this,u?s:Xa(s))||this;var d=c.vars,h=d.duration,p=d.delay,_=d.immediateRender,g=d.stagger,S=d.overwrite,E=d.keyframes,M=d.defaults,y=d.scrollTrigger,x=d.yoyoEase,D=s.parent||Yt,P=(Dn(i)||fv(i)?xr(i[0]):"length"in s)?[i]:Ti(i),w,L,I,N,O,A,R,z;if(c._targets=P.length?$h(P):qa("GSAP target "+i+" not found. https://gsap.com",!li.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=S,E||g||yu(h)||yu(p)){if(s=c.vars,w=c.timeline=new On({data:"nested",defaults:M||{},targets:D&&D.data==="nested"?D.vars.targets:P}),w.kill(),w.parent=w._dp=pr(c),w._start=0,g||yu(h)||yu(p)){if(N=P.length,R=g&&bv(g),Zi(g))for(O in g)~Wv.indexOf(O)&&(z||(z={}),z[O]=g[O]);for(L=0;L<N;L++)I=Ju(s,Xv),I.stagger=0,x&&(I.yoyoEase=x),z&&Xo(I,z),A=P[L],I.duration=+Ya(h,pr(c),L,A,P),I.delay=(+Ya(p,pr(c),L,A,P)||0)-c._delay,!g&&N===1&&I.delay&&(c._delay=p=I.delay,c._start+=p,I.delay=0),w.to(A,I,R?R(L,A,P):0),w._ease=xt.none;w.duration()?h=p=0:c.timeline=0}else if(E){Xa(fi(w.vars.defaults,{ease:"none"})),w._ease=Vs(E.ease||s.ease||"none");var j=0,K,ue,ne;if(Dn(E))E.forEach(function(J){return w.to(P,J,">")}),w.duration();else{I={};for(O in E)O==="ease"||O==="easeEach"||aS(O,E[O],I,E.easeEach);for(O in I)for(K=I[O].sort(function(J,ie){return J.t-ie.t}),j=0,L=0;L<K.length;L++)ue=K[L],ne={ease:ue.e,duration:(ue.t-(L?K[L-1].t:0))/100*h},ne[O]=ue.v,w.to(P,ne,j),j+=ne.duration;w.duration()<h&&w.to({},{duration:h-w.duration()})}}h||c.duration(h=w.duration())}else c.timeline=0;return S===!0&&!Hh&&(Zr=pr(c),Yt.killTweensOf(P),Zr=0),Xi(D,pr(c),a),s.reversed&&c.reverse(),s.paused&&c.paused(!0),(_||!h&&!E&&c._start===sn(D._time)&&jn(_)&&ky(pr(c))&&D.data!=="nested")&&(c._tTime=-Ot,c.render(Math.max(0,-p)||0)),y&&wv(pr(c),y),c}var t=e.prototype;return t.render=function(s,a,u){var c=this._time,d=this._tDur,h=this._dur,p=s<0,_=s>d-Ot&&!p?d:s<Ot?0:s,g,S,E,M,y,x,D,P,w;if(!h)By(this,s,a,u);else if(_!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(g=_,P=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+s,a,u);if(g=sn(_%M),_===d?(E=this._repeat,g=h):(y=sn(_/M),E=~~y,E&&E===y?(g=h,E--):g>h&&(g=h)),x=this._yoyo&&E&1,x&&(w=this._yEase,g=h-g),y=jo(this._tTime,M),g===c&&!u&&this._initted&&E===y)return this._tTime=_,this;E!==y&&(P&&this._yEase&&Bv(P,x),this.vars.repeatRefresh&&!x&&!this._lock&&g!==M&&this._initted&&(this._lock=u=1,this.render(sn(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(Av(this,p?s:g,u,a,_))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&E!==y))return this;if(h!==this._dur)return this.render(s,a,u)}if(this._tTime=_,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=D=(w||this._ease)(g/h),this._from&&(this.ratio=D=1-D),!c&&_&&!a&&!y&&(ai(this,"onStart"),this._tTime!==_))return this;for(S=this._pt;S;)S.r(D,S.d),S=S._next;P&&P.render(s<0?s:P._dur*P._ease(g/this._dur),a,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!a&&(p&&Bd(this,s,a,u),ai(this,"onUpdate")),this._repeat&&E!==y&&this.vars.onRepeat&&!a&&this.parent&&ai(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(p&&!this._onUpdate&&Bd(this,s,!0,!0),(s||!h)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&rs(this,1),!a&&!(p&&!c)&&(_||c||x)&&(ai(this,_===d?"onComplete":"onReverseComplete",!0),this._prom&&!(_<d&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},t.resetTo=function(s,a,u,c,d){Za||oi.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Qh(this,h),p=this._ease(h/this._dur),sS(this,s,a,u,c,p,h,d)?this.resetTo(s,a,u,c,1):(uc(this,0),this.parent||Ev(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,a){if(a===void 0&&(a="all"),!s&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Ha(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,a,Zr&&Zr.vars.overwrite!==!0)._first||Ha(this),this.parent&&u!==this.timeline.totalDuration()&&Yo(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,d=s?Ti(s):c,h=this._ptLookup,p=this._pt,_,g,S,E,M,y,x;if((!a||a==="all")&&Fy(c,d))return a==="all"&&(this._pt=0),Ha(this);for(_=this._op=this._op||[],a!=="all"&&(gn(a)&&(M={},Yn(a,function(D){return M[D]=1}),a=M),a=oS(c,a)),x=c.length;x--;)if(~d.indexOf(c[x])){g=h[x],a==="all"?(_[x]=a,E=g,S={}):(S=_[x]=_[x]||{},E=a);for(M in E)y=g&&g[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&ac(this,y,"_pt"),delete g[M]),S!=="all"&&(S[M]=1)}return this._initted&&!this._pt&&p&&Ha(this),this},e.to=function(s,a){return new e(s,a,arguments[2])},e.from=function(s,a){return ja(1,arguments)},e.delayedCall=function(s,a,u,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:a,onReverseComplete:a,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(s,a,u){return ja(2,arguments)},e.set=function(s,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(s,a)},e.killTweensOf=function(s,a,u){return Yt.killTweensOf(s,a,u)},e})(Qa);fi(rn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yn("staggerTo,staggerFrom,staggerFromTo",function(o){rn[o]=function(){var e=new On,t=Hd.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Jh=function(e,t,i){return e[t]=i},jv=function(e,t,i){return e[t](i)},lS=function(e,t,i,s){return e[t](s.fp,i)},uS=function(e,t,i){return e.setAttribute(t,i)},ep=function(e,t){return Kt(e[t])?jv:Gh(e[t])&&e.setAttribute?uS:Jh},Yv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},cS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qv=function(e,t){var i=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=t.c}t.set(t.t,t.p,s,t)},tp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},fS=function(e,t,i,s){for(var a=this._pt,u;a;)u=a._next,a.p===s&&a.modifier(e,t,i),a=u},dS=function(e){for(var t=this._pt,i,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?ac(this,t,"_pt"):t.dep||(i=1),t=s;return!i},hS=function(e,t,i,s){s.mSet(e,t,s.m.call(s.tween,i,s.mt),s)},$v=function(e){for(var t=e._pt,i,s,a,u;t;){for(i=t._next,s=a;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:u)?t._prev._next=t:a=t,(t._next=s)?s._prev=t:u=t,t=i}e._pt=a},qn=(function(){function o(t,i,s,a,u,c,d,h,p){this.t=i,this.s=a,this.c=u,this.p=s,this.r=c||Yv,this.d=d||this,this.set=h||Jh,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(i,s,a){this.mSet=this.mSet||this.set,this.set=hS,this.m=i,this.mt=a,this.tween=s},o})();Yn(qh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Yh[o]=1});ci.TweenMax=ci.TweenLite=rn;ci.TimelineLite=ci.TimelineMax=On;Yt=new On({sortChildren:!1,defaults:Wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});li.stringFilter=kv;var Hs=[],Xu={},pS=[],J_=0,mS=0,td=function(e){return(Xu[e]||pS).map(function(t){return t()})},jd=function(){var e=Date.now(),t=[];e-J_>2&&(td("matchMediaInit"),Hs.forEach(function(i){var s=i.queries,a=i.conditions,u,c,d,h;for(c in s)u=Gi.matchMedia(s[c]).matches,u&&(d=1),u!==a[c]&&(a[c]=u,h=1);h&&(i.revert(),d&&t.push(i))}),td("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),J_=e,td("matchMedia"))},Kv=(function(){function o(t,i){this.selector=i&&Gd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=mS++,t&&this.add(t)}var e=o.prototype;return e.add=function(i,s,a){Kt(i)&&(a=s,s=i,i=Kt);var u=this,c=function(){var h=Wt,p=u.selector,_;return h&&h!==u&&h.data.push(u),a&&(u.selector=Gd(a)),Wt=u,_=s.apply(u,arguments),Kt(_)&&u._r.push(_),Wt=h,u.selector=p,u.isReverted=!1,_};return u.last=c,i===Kt?c(u,function(d){return u.add(null,d)}):i?u[i]=c:c},e.ignore=function(i){var s=Wt;Wt=null,i(this),Wt=s},e.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof o?i.push.apply(i,s.getTweens()):s instanceof rn&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,s){var a=this;if(i?(function(){for(var c=a.getTweens(),d=a.data.length,h;d--;)h=a.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,_){return _.g-p.g||-1/0}).forEach(function(p){return p.t.revert(i)}),d=a.data.length;d--;)h=a.data[d],h instanceof On?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof rn)&&h.revert&&h.revert(i);a._r.forEach(function(p){return p(i,a)}),a.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),s)for(var u=Hs.length;u--;)Hs[u].id===this.id&&Hs.splice(u,1)},e.revert=function(i){this.kill(i||{})},o})(),_S=(function(){function o(t){this.contexts=[],this.scope=t,Wt&&Wt.data.push(this)}var e=o.prototype;return e.add=function(i,s,a){Zi(i)||(i={matches:i});var u=new Kv(0,a||this.scope),c=u.conditions={},d,h,p;Wt&&!u.selector&&(u.selector=Wt.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=i;for(h in i)h==="all"?p=1:(d=Gi.matchMedia(i[h]),d&&(Hs.indexOf(u)<0&&Hs.push(u),(c[h]=d.matches)&&(p=1),d.addListener?d.addListener(jd):d.addEventListener("change",jd)));return p&&s(u,function(_){return u.add(null,_)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},o})(),tc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(s){return Uv(s)})},timeline:function(e){return new On(e)},getTweensOf:function(e,t){return Yt.getTweensOf(e,t)},getProperty:function(e,t,i,s){gn(e)&&(e=Ti(e)[0]);var a=zs(e||{}).get,u=i?Mv:Sv;return i==="native"&&(i=""),e&&(t?u((si[t]&&si[t].get||a)(e,t,i,s)):function(c,d,h){return u((si[c]&&si[c].get||a)(e,c,d,h))})},quickSetter:function(e,t,i){if(e=Ti(e),e.length>1){var s=e.map(function(p){return Zn.quickSetter(p,t,i)}),a=s.length;return function(p){for(var _=a;_--;)s[_](p)}}e=e[0]||{};var u=si[t],c=zs(e),d=c.harness&&(c.harness.aliases||{})[t]||t,h=u?function(p){var _=new u;Oo._pt=0,_.init(e,i?p+i:p,Oo,0,[e]),_.render(1,_),Oo._pt&&tp(1,Oo)}:c.set(e,d);return u?h:function(p){return h(e,d,i?p+i:p,c,1)}},quickTo:function(e,t,i){var s,a=Zn.to(e,fi((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),u=function(d,h,p){return a.resetTo(t,d,h,p)};return u.tween=a,u},isTweening:function(e){return Yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Vs(e.ease,Wo.ease)),q_(Wo,e||{})},config:function(e){return q_(li,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,s=e.plugins,a=e.defaults,u=e.extendTimeline;(s||"").split(",").forEach(function(c){return c&&!si[c]&&!ci[c]&&qa(t+" effect requires "+c+" plugin.")}),Zf[t]=function(c,d,h){return i(Ti(c),fi(d||{},a),h)},u&&(On.prototype[t]=function(c,d,h){return this.add(Zf[t](c,Zi(d)?d:(h=d)&&{},this),h)})},registerEase:function(e,t){xt[e]=Vs(t)},parseEase:function(e,t){return arguments.length?Vs(e,t):xt},getById:function(e){return Yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new On(e),s,a;for(i.smoothChildTiming=jn(e.smoothChildTiming),Yt.remove(i),i._dp=0,i._time=i._tTime=Yt._time,s=Yt._first;s;)a=s._next,(t||!(!s._dur&&s instanceof rn&&s.vars.onComplete===s._targets[0]))&&Xi(i,s,s._start-s._delay),s=a;return Xi(Yt,i,0),i},context:function(e,t){return e?new Kv(e,t):Wt},matchMedia:function(e){return new _S(e)},matchMediaRefresh:function(){return Hs.forEach(function(e){var t=e.conditions,i,s;for(s in t)t[s]&&(t[s]=!1,i=1);i&&e.revert()})||jd()},addEventListener:function(e,t){var i=Xu[e]||(Xu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Xu[e],s=i&&i.indexOf(t);s>=0&&i.splice(s,1)},utils:{wrap:qy,wrapYoyo:$y,distribute:bv,random:Dv,snap:Pv,normalize:Yy,getUnit:Pn,clamp:Gy,splitColor:Fv,toArray:Ti,selector:Gd,mapRange:Iv,pipe:Xy,unitize:jy,interpolate:Ky,shuffle:Rv},install:_v,effects:Zf,ticker:oi,updateRoot:On.updateRoot,plugins:si,globalTimeline:Yt,core:{PropTween:qn,globals:gv,Tween:rn,Timeline:On,Animation:Qa,getCache:zs,_removeLinkedListItem:ac,reverting:function(){return yn},context:function(e){return e&&Wt&&(Wt.data.push(e),e._ctx=Wt),Wt},suppressOverwrites:function(e){return Hh=e}}};Yn("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return tc[o]=rn[o]});oi.add(On.updateRoot);Oo=tc.to({},{duration:0});var gS=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},vS=function(e,t){var i=e._targets,s,a,u;for(s in t)for(a=i.length;a--;)u=e._ptLookup[a][s],u&&(u=u.d)&&(u._pt&&(u=gS(u,s)),u&&u.modifier&&u.modifier(t[s],e,i[a],s))},nd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,a,u){u._onInit=function(c){var d,h;if(gn(a)&&(d={},Yn(a,function(p){return d[p]=1}),a=d),t){d={};for(h in a)d[h]=t(a[h]);a=d}vS(c,a)}}}},Zn=tc.registerPlugin({name:"attr",init:function(e,t,i,s,a){var u,c,d;this.tween=i;for(u in t)d=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(d||0)+"",t[u],s,a,0,0,u),c.op=u,c.b=d,this._props.push(u)},render:function(e,t){for(var i=t._pt;i;)yn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},nd("roundProps",Wd),nd("modifiers"),nd("snap",Pv))||tc;rn.version=On.version=Zn.version="3.13.0";mv=1;Wh()&&qo();xt.Power0;xt.Power1;xt.Power2;xt.Power3;xt.Power4;xt.Linear;xt.Quad;xt.Cubic;xt.Quart;xt.Quint;xt.Strong;xt.Elastic;xt.Back;xt.SteppedEase;xt.Bounce;xt.Sine;xt.Expo;xt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var eg,Qr,Bo,np,Fs,tg,ip,xS=function(){return typeof window<"u"},yr={},Ds=180/Math.PI,Vo=Math.PI/180,So=Math.atan2,ng=1e8,rp=/([A-Z])/g,yS=/(left|right|width|margin|padding|x)/i,SS=/[\s,\(]\S/,ji={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},MS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ES=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},TS=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Zv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Qv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},wS=function(e,t,i){return e.style[t]=i},AS=function(e,t,i){return e.style.setProperty(t,i)},CS=function(e,t,i){return e._gsap[t]=i},RS=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},bS=function(e,t,i,s,a){var u=e._gsap;u.scaleX=u.scaleY=i,u.renderTransform(a,u)},PS=function(e,t,i,s,a){var u=e._gsap;u[t]=i,u.renderTransform(a,u)},qt="transform",$n=qt+"Origin",DS=function o(e,t){var i=this,s=this.target,a=s.style,u=s._gsap;if(e in yr&&a){if(this.tfm=this.tfm||{},e!=="transform")e=ji[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return i.tfm[c]=mr(s,c)}):this.tfm[e]=u.x?u[e]:mr(s,e),e===$n&&(this.tfm.zOrigin=u.zOrigin);else return ji.transform.split(",").forEach(function(c){return o.call(i,c,t)});if(this.props.indexOf(qt)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push($n,t,"")),e=qt}(a||t)&&this.props.push(e,t,a[e])},Jv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},LS=function(){var e=this.props,t=this.target,i=t.style,s=t._gsap,a,u;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?i[e[a]]=e[a+2]:i.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(rp,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=ip(),(!a||!a.isStart)&&!i[qt]&&(Jv(i),s.zOrigin&&i[$n]&&(i[$n]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},e0=function(e,t){var i={target:e,props:[],revert:LS,save:DS};return e._gsap||Zn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return i.save(s)}),i},t0,qd=function(e,t){var i=Qr.createElementNS?Qr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qr.createElement(e);return i&&i.style?i:Qr.createElement(e)},wi=function o(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(rp,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&o(e,$o(t)||t,1)||""},ig="O,Moz,ms,Ms,Webkit".split(","),$o=function(e,t,i){var s=t||Fs,a=s.style,u=5;if(e in a&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(ig[u]+e in a););return u<0?null:(u===3?"ms":u>=0?ig[u]:"")+e},$d=function(){xS()&&window.document&&(eg=window,Qr=eg.document,Bo=Qr.documentElement,Fs=qd("div")||{style:{}},qd("div"),qt=$o(qt),$n=qt+"Origin",Fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",t0=!!$o("perspective"),ip=Zn.core.reverting,np=1)},rg=function(e){var t=e.ownerSVGElement,i=qd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),a;s.style.display="block",i.appendChild(s),Bo.appendChild(i);try{a=s.getBBox()}catch{}return i.removeChild(s),Bo.removeChild(i),a},sg=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},n0=function(e){var t,i;try{t=e.getBBox()}catch{t=rg(e),i=1}return t&&(t.width||t.height)||i||(t=rg(e)),t&&!t.width&&!t.x&&!t.y?{x:+sg(e,["x","cx","x1"])||0,y:+sg(e,["y","cy","y1"])||0,width:0,height:0}:t},i0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&n0(e))},Ws=function(e,t){if(t){var i=e.style,s;t in yr&&t!==$n&&(t=qt),i.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(s==="--"?t:t.replace(rp,"-$1").toLowerCase())):i.removeAttribute(t)}},Jr=function(e,t,i,s,a,u){var c=new qn(e._pt,t,i,0,1,u?Qv:Zv);return e._pt=c,c.b=s,c.e=a,e._props.push(i),c},og={deg:1,rad:1,turn:1},IS={grid:1,flex:1},ss=function o(e,t,i,s){var a=parseFloat(i)||0,u=(i+"").trim().substr((a+"").length)||"px",c=Fs.style,d=yS.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(d?"Width":"Height"),_=100,g=s==="px",S=s==="%",E,M,y,x;if(s===u||!a||og[s]||og[u])return a;if(u!=="px"&&!g&&(a=o(e,t,i,"px")),x=e.getCTM&&i0(e),(S||u==="%")&&(yr[t]||~t.indexOf("adius")))return E=x?e.getBBox()[d?"width":"height"]:e[p],Jt(S?a/E*_:a/100*E);if(c[d?"width":"height"]=_+(g?u:s),M=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!h?e:e.parentNode,x&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===Qr||!M.appendChild)&&(M=Qr.body),y=M._gsap,y&&S&&y.width&&d&&y.time===oi.time&&!y.uncache)return Jt(a/y.width*_);if(S&&(t==="height"||t==="width")){var D=e.style[t];e.style[t]=_+s,E=e[p],D?e.style[t]=D:Ws(e,t)}else(S||u==="%")&&!IS[wi(M,"display")]&&(c.position=wi(e,"position")),M===e&&(c.position="static"),M.appendChild(Fs),E=Fs[p],M.removeChild(Fs),c.position="absolute";return d&&S&&(y=zs(M),y.time=oi.time,y.width=M[p]),Jt(g?E*a/_:E&&a?_/E*a:0)},mr=function(e,t,i,s){var a;return np||$d(),t in ji&&t!=="transform"&&(t=ji[t],~t.indexOf(",")&&(t=t.split(",")[0])),yr[t]&&t!=="transform"?(a=el(e,s),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:ic(wi(e,$n))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||s||~(a+"").indexOf("calc("))&&(a=nc[t]&&nc[t](e,t,i)||wi(e,t)||xv(e,t)||(t==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?ss(e,t,a,i)+i:a},NS=function(e,t,i,s){if(!i||i==="none"){var a=$o(t,e,1),u=a&&wi(e,a,1);u&&u!==i?(t=a,i=u):t==="borderColor"&&(i=wi(e,"borderTopColor"))}var c=new qn(this._pt,e.style,t,0,1,qv),d=0,h=0,p,_,g,S,E,M,y,x,D,P,w,L;if(c.b=i,c.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=wi(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=e.style[t],e.style[t]=s,s=wi(e,t)||s,M?e.style[t]=M:Ws(e,t)),p=[i,s],kv(p),i=p[0],s=p[1],g=i.match(Fo)||[],L=s.match(Fo)||[],L.length){for(;_=Fo.exec(s);)y=_[0],D=s.substring(d,_.index),E?E=(E+1)%5:(D.substr(-5)==="rgba("||D.substr(-5)==="hsla(")&&(E=1),y!==(M=g[h++]||"")&&(S=parseFloat(M)||0,w=M.substr((S+"").length),y.charAt(1)==="="&&(y=zo(S,y)+w),x=parseFloat(y),P=y.substr((x+"").length),d=Fo.lastIndex-P.length,P||(P=P||li.units[t]||w,d===s.length&&(s+=P,c.e+=P)),w!==P&&(S=ss(e,t,M,P)||0),c._pt={_next:c._pt,p:D||h===1?D:",",s:S,c:x-S,m:E&&E<4||t==="zIndex"?Math.round:0});c.c=d<s.length?s.substring(d,s.length):""}else c.r=t==="display"&&s==="none"?Qv:Zv;return hv.test(s)&&(c.e=0),this._pt=c,c},ag={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},US=function(e){var t=e.split(" "),i=t[0],s=t[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),t[0]=ag[i]||i,t[1]=ag[s]||s,t.join(" ")},FS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,s=i.style,a=t.u,u=i._gsap,c,d,h;if(a==="all"||a===!0)s.cssText="",d=1;else for(a=a.split(","),h=a.length;--h>-1;)c=a[h],yr[c]&&(d=1,c=c==="transformOrigin"?$n:qt),Ws(i,c);d&&(Ws(i,qt),u&&(u.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",el(i,1),u.uncache=1,Jv(s)))}},nc={clearProps:function(e,t,i,s,a){if(a.data!=="isFromStart"){var u=e._pt=new qn(e._pt,t,i,0,0,FS);return u.u=s,u.pr=-10,u.tween=a,e._props.push(i),1}}},Ja=[1,0,0,1,0,0],r0={},s0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},lg=function(e){var t=wi(e,qt);return s0(t)?Ja:t.substr(7).match(dv).map(Jt)},sp=function(e,t){var i=e._gsap||zs(e),s=e.style,a=lg(e),u,c,d,h;return i.svg&&e.getAttribute("transform")?(d=e.transform.baseVal.consolidate().matrix,a=[d.a,d.b,d.c,d.d,d.e,d.f],a.join(",")==="1,0,0,1,0,0"?Ja:a):(a===Ja&&!e.offsetParent&&e!==Bo&&!i.svg&&(d=s.display,s.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,Bo.appendChild(e)),a=lg(e),d?s.display=d:Ws(e,"display"),h&&(c?u.insertBefore(e,c):u?u.appendChild(e):Bo.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Kd=function(e,t,i,s,a,u){var c=e._gsap,d=a||sp(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,_=c.xOffset||0,g=c.yOffset||0,S=d[0],E=d[1],M=d[2],y=d[3],x=d[4],D=d[5],P=t.split(" "),w=parseFloat(P[0])||0,L=parseFloat(P[1])||0,I,N,O,A;i?d!==Ja&&(N=S*y-E*M)&&(O=w*(y/N)+L*(-M/N)+(M*D-y*x)/N,A=w*(-E/N)+L*(S/N)-(S*D-E*x)/N,w=O,L=A):(I=n0(e),w=I.x+(~P[0].indexOf("%")?w/100*I.width:w),L=I.y+(~(P[1]||P[0]).indexOf("%")?L/100*I.height:L)),s||s!==!1&&c.smooth?(x=w-h,D=L-p,c.xOffset=_+(x*S+D*M)-x,c.yOffset=g+(x*E+D*y)-D):c.xOffset=c.yOffset=0,c.xOrigin=w,c.yOrigin=L,c.smooth=!!s,c.origin=t,c.originIsAbsolute=!!i,e.style[$n]="0px 0px",u&&(Jr(u,c,"xOrigin",h,w),Jr(u,c,"yOrigin",p,L),Jr(u,c,"xOffset",_,c.xOffset),Jr(u,c,"yOffset",g,c.yOffset)),e.setAttribute("data-svg-origin",w+" "+L)},el=function(e,t){var i=e._gsap||new Hv(e);if("x"in i&&!t&&!i.uncache)return i;var s=e.style,a=i.scaleX<0,u="px",c="deg",d=getComputedStyle(e),h=wi(e,$n)||"0",p,_,g,S,E,M,y,x,D,P,w,L,I,N,O,A,R,z,j,K,ue,ne,J,ie,V,ce,oe,k,ee,Te,Re,Ie;return p=_=g=M=y=x=D=P=w=0,S=E=1,i.svg=!!(e.getCTM&&i0(e)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(s[qt]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[qt]!=="none"?d[qt]:"")),s.scale=s.rotate=s.translate="none"),N=sp(e,i.svg),i.svg&&(i.uncache?(V=e.getBBox(),h=i.xOrigin-V.x+"px "+(i.yOrigin-V.y)+"px",ie=""):ie=!t&&e.getAttribute("data-svg-origin"),Kd(e,ie||h,!!ie||i.originIsAbsolute,i.smooth!==!1,N)),L=i.xOrigin||0,I=i.yOrigin||0,N!==Ja&&(z=N[0],j=N[1],K=N[2],ue=N[3],p=ne=N[4],_=J=N[5],N.length===6?(S=Math.sqrt(z*z+j*j),E=Math.sqrt(ue*ue+K*K),M=z||j?So(j,z)*Ds:0,D=K||ue?So(K,ue)*Ds+M:0,D&&(E*=Math.abs(Math.cos(D*Vo))),i.svg&&(p-=L-(L*z+I*K),_-=I-(L*j+I*ue))):(Ie=N[6],Te=N[7],oe=N[8],k=N[9],ee=N[10],Re=N[11],p=N[12],_=N[13],g=N[14],O=So(Ie,ee),y=O*Ds,O&&(A=Math.cos(-O),R=Math.sin(-O),ie=ne*A+oe*R,V=J*A+k*R,ce=Ie*A+ee*R,oe=ne*-R+oe*A,k=J*-R+k*A,ee=Ie*-R+ee*A,Re=Te*-R+Re*A,ne=ie,J=V,Ie=ce),O=So(-K,ee),x=O*Ds,O&&(A=Math.cos(-O),R=Math.sin(-O),ie=z*A-oe*R,V=j*A-k*R,ce=K*A-ee*R,Re=ue*R+Re*A,z=ie,j=V,K=ce),O=So(j,z),M=O*Ds,O&&(A=Math.cos(O),R=Math.sin(O),ie=z*A+j*R,V=ne*A+J*R,j=j*A-z*R,J=J*A-ne*R,z=ie,ne=V),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,x=180-x),S=Jt(Math.sqrt(z*z+j*j+K*K)),E=Jt(Math.sqrt(J*J+Ie*Ie)),O=So(ne,J),D=Math.abs(O)>2e-4?O*Ds:0,w=Re?1/(Re<0?-Re:Re):0),i.svg&&(ie=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!s0(wi(e,qt)),ie&&e.setAttribute("transform",ie))),Math.abs(D)>90&&Math.abs(D)<270&&(a?(S*=-1,D+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,D+=D<=0?180:-180)),t=t||i.uncache,i.x=p-((i.xPercent=p&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+u,i.y=_-((i.yPercent=_&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-_)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+u,i.z=g+u,i.scaleX=Jt(S),i.scaleY=Jt(E),i.rotation=Jt(M)+c,i.rotationX=Jt(y)+c,i.rotationY=Jt(x)+c,i.skewX=D+c,i.skewY=P+c,i.transformPerspective=w+u,(i.zOrigin=parseFloat(h.split(" ")[2])||!t&&i.zOrigin||0)&&(s[$n]=ic(h)),i.xOffset=i.yOffset=0,i.force3D=li.force3D,i.renderTransform=i.svg?kS:t0?o0:OS,i.uncache=0,i},ic=function(e){return(e=e.split(" "))[0]+" "+e[1]},id=function(e,t,i){var s=Pn(t);return Jt(parseFloat(t)+parseFloat(ss(e,"x",i+"px",s)))+s},OS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,o0(e,t)},Es="0deg",Fa="0px",Ts=") ",o0=function(e,t){var i=t||this,s=i.xPercent,a=i.yPercent,u=i.x,c=i.y,d=i.z,h=i.rotation,p=i.rotationY,_=i.rotationX,g=i.skewX,S=i.skewY,E=i.scaleX,M=i.scaleY,y=i.transformPerspective,x=i.force3D,D=i.target,P=i.zOrigin,w="",L=x==="auto"&&e&&e!==1||x===!0;if(P&&(_!==Es||p!==Es)){var I=parseFloat(p)*Vo,N=Math.sin(I),O=Math.cos(I),A;I=parseFloat(_)*Vo,A=Math.cos(I),u=id(D,u,N*A*-P),c=id(D,c,-Math.sin(I)*-P),d=id(D,d,O*A*-P+P)}y!==Fa&&(w+="perspective("+y+Ts),(s||a)&&(w+="translate("+s+"%, "+a+"%) "),(L||u!==Fa||c!==Fa||d!==Fa)&&(w+=d!==Fa||L?"translate3d("+u+", "+c+", "+d+") ":"translate("+u+", "+c+Ts),h!==Es&&(w+="rotate("+h+Ts),p!==Es&&(w+="rotateY("+p+Ts),_!==Es&&(w+="rotateX("+_+Ts),(g!==Es||S!==Es)&&(w+="skew("+g+", "+S+Ts),(E!==1||M!==1)&&(w+="scale("+E+", "+M+Ts),D.style[qt]=w||"translate(0, 0)"},kS=function(e,t){var i=t||this,s=i.xPercent,a=i.yPercent,u=i.x,c=i.y,d=i.rotation,h=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,S=i.target,E=i.xOrigin,M=i.yOrigin,y=i.xOffset,x=i.yOffset,D=i.forceCSS,P=parseFloat(u),w=parseFloat(c),L,I,N,O,A;d=parseFloat(d),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,d+=p),d||h?(d*=Vo,h*=Vo,L=Math.cos(d)*_,I=Math.sin(d)*_,N=Math.sin(d-h)*-g,O=Math.cos(d-h)*g,h&&(p*=Vo,A=Math.tan(h-p),A=Math.sqrt(1+A*A),N*=A,O*=A,p&&(A=Math.tan(p),A=Math.sqrt(1+A*A),L*=A,I*=A)),L=Jt(L),I=Jt(I),N=Jt(N),O=Jt(O)):(L=_,O=g,I=N=0),(P&&!~(u+"").indexOf("px")||w&&!~(c+"").indexOf("px"))&&(P=ss(S,"x",u,"px"),w=ss(S,"y",c,"px")),(E||M||y||x)&&(P=Jt(P+E-(E*L+M*N)+y),w=Jt(w+M-(E*I+M*O)+x)),(s||a)&&(A=S.getBBox(),P=Jt(P+s/100*A.width),w=Jt(w+a/100*A.height)),A="matrix("+L+","+I+","+N+","+O+","+P+","+w+")",S.setAttribute("transform",A),D&&(S.style[qt]=A)},zS=function(e,t,i,s,a){var u=360,c=gn(a),d=parseFloat(a)*(c&&~a.indexOf("rad")?Ds:1),h=d-s,p=s+h+"deg",_,g;return c&&(_=a.split("_")[1],_==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-u)),_==="cw"&&h<0?h=(h+u*ng)%u-~~(h/u)*u:_==="ccw"&&h>0&&(h=(h-u*ng)%u-~~(h/u)*u)),e._pt=g=new qn(e._pt,t,i,s,h,MS),g.e=p,g.u="deg",e._props.push(i),g},ug=function(e,t){for(var i in t)e[i]=t[i];return e},BS=function(e,t,i){var s=ug({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",u=i.style,c,d,h,p,_,g,S,E;s.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),u[qt]=t,c=el(i,1),Ws(i,qt),i.setAttribute("transform",h)):(h=getComputedStyle(i)[qt],u[qt]=t,c=el(i,1),u[qt]=h);for(d in yr)h=s[d],p=c[d],h!==p&&a.indexOf(d)<0&&(S=Pn(h),E=Pn(p),_=S!==E?ss(i,d,h,E):parseFloat(h),g=parseFloat(p),e._pt=new qn(e._pt,c,d,_,g-_,Yd),e._pt.u=E||0,e._props.push(d));ug(c,s)};Yn("padding,margin,Width,Radius",function(o,e){var t="Top",i="Right",s="Bottom",a="Left",u=(e<3?[t,i,s,a]:[t+a,t+i,s+i,s+a]).map(function(c){return e<2?o+c:"border"+c+o});nc[e>1?"border"+o:o]=function(c,d,h,p,_){var g,S;if(arguments.length<4)return g=u.map(function(E){return mr(c,E,h)}),S=g.join(" "),S.split(g[0]).length===5?g[0]:S;g=(p+"").split(" "),S={},u.forEach(function(E,M){return S[E]=g[M]=g[M]||g[(M-1)/2|0]}),c.init(d,S,_)}});var a0={name:"css",register:$d,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,s,a){var u=this._props,c=e.style,d=i.vars.startAt,h,p,_,g,S,E,M,y,x,D,P,w,L,I,N,O;np||$d(),this.styles=this.styles||e0(e),O=this.styles.props,this.tween=i;for(M in t)if(M!=="autoRound"&&(p=t[M],!(si[M]&&Gv(M,t,i,s,e,a)))){if(S=typeof p,E=nc[M],S==="function"&&(p=p.call(i,s,e,a),S=typeof p),S==="string"&&~p.indexOf("random(")&&(p=Ka(p)),E)E(this,e,M,p,i)&&(N=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",ts.lastIndex=0,ts.test(h)||(y=Pn(h),x=Pn(p)),x?y!==x&&(h=ss(e,M,h,x)+x):y&&(p+=y),this.add(c,"setProperty",h,p,s,a,0,0,M),u.push(M),O.push(M,0,c[M]);else if(S!=="undefined"){if(d&&M in d?(h=typeof d[M]=="function"?d[M].call(i,s,e,a):d[M],gn(h)&&~h.indexOf("random(")&&(h=Ka(h)),Pn(h+"")||h==="auto"||(h+=li.units[M]||Pn(mr(e,M))||""),(h+"").charAt(1)==="="&&(h=mr(e,M))):h=mr(e,M),g=parseFloat(h),D=S==="string"&&p.charAt(1)==="="&&p.substr(0,2),D&&(p=p.substr(2)),_=parseFloat(p),M in ji&&(M==="autoAlpha"&&(g===1&&mr(e,"visibility")==="hidden"&&_&&(g=0),O.push("visibility",0,c.visibility),Jr(this,c,"visibility",g?"inherit":"hidden",_?"inherit":"hidden",!_)),M!=="scale"&&M!=="transform"&&(M=ji[M],~M.indexOf(",")&&(M=M.split(",")[0]))),P=M in yr,P){if(this.styles.save(M),S==="string"&&p.substring(0,6)==="var(--"&&(p=wi(e,p.substring(4,p.indexOf(")"))),_=parseFloat(p)),w||(L=e._gsap,L.renderTransform&&!t.parseTransform||el(e,t.parseTransform),I=t.smoothOrigin!==!1&&L.smooth,w=this._pt=new qn(this._pt,c,qt,0,1,L.renderTransform,L,0,-1),w.dep=1),M==="scale")this._pt=new qn(this._pt,L,"scaleY",L.scaleY,(D?zo(L.scaleY,D+_):_)-L.scaleY||0,Yd),this._pt.u=0,u.push("scaleY",M),M+="X";else if(M==="transformOrigin"){O.push($n,0,c[$n]),p=US(p),L.svg?Kd(e,p,0,I,0,this):(x=parseFloat(p.split(" ")[2])||0,x!==L.zOrigin&&Jr(this,L,"zOrigin",L.zOrigin,x),Jr(this,c,M,ic(h),ic(p)));continue}else if(M==="svgOrigin"){Kd(e,p,1,I,0,this);continue}else if(M in r0){zS(this,L,M,g,D?zo(g,D+p):p);continue}else if(M==="smoothOrigin"){Jr(this,L,"smooth",L.smooth,p);continue}else if(M==="force3D"){L[M]=p;continue}else if(M==="transform"){BS(this,p,e);continue}}else M in c||(M=$o(M)||M);if(P||(_||_===0)&&(g||g===0)&&!SS.test(p)&&M in c)y=(h+"").substr((g+"").length),_||(_=0),x=Pn(p)||(M in li.units?li.units[M]:y),y!==x&&(g=ss(e,M,h,x)),this._pt=new qn(this._pt,P?L:c,M,g,(D?zo(g,D+_):_)-g,!P&&(x==="px"||M==="zIndex")&&t.autoRound!==!1?TS:Yd),this._pt.u=x||0,y!==x&&x!=="%"&&(this._pt.b=h,this._pt.r=ES);else if(M in c)NS.call(this,e,M,h,D?D+p:p);else if(M in e)this.add(e,M,h||e[M],D?D+p:p,s,a);else if(M!=="parseTransform"){jh(M,p);continue}P||(M in c?O.push(M,0,c[M]):typeof e[M]=="function"?O.push(M,2,e[M]()):O.push(M,1,h||e[M])),u.push(M)}}N&&$v(this)},render:function(e,t){if(t.tween._time||!ip())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:mr,aliases:ji,getSetter:function(e,t,i){var s=ji[t];return s&&s.indexOf(",")<0&&(t=s),t in yr&&t!==$n&&(e._gsap.x||mr(e,"x"))?i&&tg===i?t==="scale"?RS:CS:(tg=i||{})&&(t==="scale"?bS:PS):e.style&&!Gh(e.style[t])?wS:~t.indexOf("-")?AS:ep(e,t)},core:{_removeProperty:Ws,_getMatrix:sp}};Zn.utils.checkPrefix=$o;Zn.core.getStyleSaver=e0;(function(o,e,t,i){var s=Yn(o+","+e+","+t,function(a){yr[a]=1});Yn(e,function(a){li.units[a]="deg",r0[a]=1}),ji[s[13]]=o+","+e,Yn(i,function(a){var u=a.split(":");ji[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){li.units[o]="px"});Zn.registerPlugin(a0);var Zd=Zn.registerPlugin(a0)||Zn;Zd.core.Tween;const VS=()=>{},HS=({text:o,as:e="div",typingSpeed:t=55,deletingSpeed:i=30,initialDelay:s=0,pauseDuration:a=1800,loop:u=!0,className:c="",showCursor:d=!0,hideCursorWhileTyping:h=!1,cursorCharacter:p="|",cursorClassName:_="",cursorBlinkDuration:g=.5,textColors:S=[],variableSpeed:E,onSentenceComplete:M=VS,startOnVisible:y=!1,reverseMode:x=!1,...D})=>{const P=gt.useRef(null),w=gt.useRef(null),L=gt.useRef(null),[I,N]=gt.useState(!y),[O,A]=gt.useState(0),[R,z]=gt.useState(0),[j,K]=gt.useState(!1),[ue,ne]=gt.useState(""),J=gt.useMemo(()=>(Array.isArray(o)?o:[o]).filter(Boolean),[o]),ie=J[O]??"",V=x?ie.split("").reverse().join(""):ie,ce=gt.useCallback(()=>{if(S.length)return S[O%S.length]},[O,S]),oe=gt.useCallback(()=>{if(!E)return t;const{min:Te=t,max:Re=t}=E;return Math.max(10,Math.random()*(Re-Te)+Te)},[t,E]);gt.useEffect(()=>{if(!y||!P.current)return;const Te=new IntersectionObserver(Re=>{Re.forEach(Ie=>{Ie.isIntersecting&&N(!0)})},{threshold:.2});return Te.observe(P.current),()=>Te.disconnect()},[y]),gt.useEffect(()=>{if(!d||!w.current)return;Zd.set(w.current,{opacity:1});const Te=Zd.to(w.current,{opacity:0,duration:g,repeat:-1,yoyo:!0,ease:"power2.inOut"});return()=>{Te.kill()}},[g,d]);const k=gt.useCallback((Te,Re)=>{L.current&&clearTimeout(L.current),L.current=window.setTimeout(Re,Te)},[]);gt.useEffect(()=>{if(!(!I||!J.length)){if(j){if(R===0){if(K(!1),M(ie,O),!u&&O===J.length-1)return;const Te=(O+1)%J.length;k(a,()=>{A(Te)});return}return k(i,()=>{ne(Te=>Te.slice(0,-1)),z(Te=>Math.max(0,Te-1))}),()=>clearTimeout(L.current??void 0)}return R===0&&ue===""?(k(s,()=>{ne(V.slice(0,1)),z(1)}),()=>clearTimeout(L.current??void 0)):R<V.length?(k(oe(),()=>{ne(Te=>Te+V[R]),z(Te=>Te+1)}),()=>clearTimeout(L.current??void 0)):(J.length>1&&k(a,()=>{K(!0)}),()=>clearTimeout(L.current??void 0))}},[R,O,ie,ue,oe,j,I,u,M,a,V,k,s,i,J,x]),gt.useEffect(()=>()=>{L.current&&clearTimeout(L.current)},[]);const ee=h&&!j&&R<V.length&&V.length>0;return gt.createElement(e,{ref:P,className:`text-type ${c}`.trim(),...D},Y.jsx("span",{className:"text-type__content",style:{color:ce()},children:ue}),d&&Y.jsx("span",{ref:w,className:`text-type__cursor ${_} ${ee?"text-type__cursor--hidden":""}`.trim(),children:p}))},GS=()=>Y.jsxs(Y.Fragment,{children:[Y.jsxs("div",{className:"site-mobile-menu site-navbar-target",children:[Y.jsx("div",{className:"site-mobile-menu-header",children:Y.jsx("div",{className:"site-mobile-menu-close mt-3",children:Y.jsx("span",{className:"icon-close2 js-menu-toggle"})})}),Y.jsx("div",{className:"site-mobile-menu-body"})]}),Y.jsx("header",{className:"site-navbar py-4 js-sticky-header site-navbar-target",role:"banner",children:Y.jsx("div",{className:"container",children:Y.jsxs("div",{className:"row align-items-center",children:[Y.jsx("div",{className:"col-6 col-xl-2",children:Y.jsx(HS,{text:["Sebastian Mojica"],typingSpeed:75,showCursor:!0,cursorCharacter:"|"})}),Y.jsx("div",{className:"col-12 col-md-10 d-none d-xl-block",children:Y.jsx("nav",{className:"site-navigation position-relative text-right",role:"navigation",children:Y.jsxs("ul",{className:"site-menu main-menu js-clone-nav mr-auto d-none d-lg-block",children:[Y.jsx("li",{children:Y.jsx("a",{href:"#about-section",className:"nav-link",children:"About"})}),Y.jsx("li",{children:Y.jsx("a",{href:"#projects-section",className:"nav-link",children:"Projects"})}),Y.jsx("li",{children:Y.jsx("a",{href:"#contact-section",className:"nav-link",children:"Contact"})})]})})}),Y.jsx("div",{className:"col-6 d-inline-block d-xl-none ml-md-0 py-3",style:{position:"relative",top:"3px"},children:Y.jsx("a",{href:"#",className:"site-menu-toggle js-menu-toggle float-right",children:Y.jsx("span",{className:"icon-menu h3"})})})]})})})]});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const op="180",WS=0,cg=1,XS=2,l0=1,jS=2,hr=3,os=0,Kn=1,_r=2,ns=0,Ho=1,fg=2,dg=3,hg=4,YS=5,Ns=100,qS=101,$S=102,KS=103,ZS=104,QS=200,JS=201,eM=202,tM=203,Qd=204,Jd=205,nM=206,iM=207,rM=208,sM=209,oM=210,aM=211,lM=212,uM=213,cM=214,eh=0,th=1,nh=2,Ko=3,ih=4,rh=5,sh=6,oh=7,u0=0,fM=1,dM=2,is=0,hM=1,pM=2,mM=3,_M=4,gM=5,vM=6,xM=7,c0=300,Zo=301,Qo=302,ah=303,lh=304,cc=306,uh=1e3,Os=1001,ch=1002,Ai=1003,yM=1004,Su=1005,Yi=1006,rd=1007,ks=1008,Sr=1009,f0=1010,d0=1011,tl=1012,ap=1013,Xs=1014,gr=1015,al=1016,lp=1017,up=1018,nl=1020,h0=35902,p0=35899,m0=1021,_0=1022,ki=1023,il=1026,rl=1027,g0=1028,cp=1029,v0=1030,fp=1031,dp=1033,ju=33776,Yu=33777,qu=33778,$u=33779,fh=35840,dh=35841,hh=35842,ph=35843,mh=36196,_h=37492,gh=37496,vh=37808,xh=37809,yh=37810,Sh=37811,Mh=37812,Eh=37813,Th=37814,wh=37815,Ah=37816,Ch=37817,Rh=37818,bh=37819,Ph=37820,Dh=37821,Lh=36492,Ih=36494,Nh=36495,Uh=36283,Fh=36284,Oh=36285,kh=36286,SM=3200,MM=3201,EM=0,TM=1,Kr="",Si="srgb",Jo="srgb-linear",rc="linear",Pt="srgb",Mo=7680,pg=519,wM=512,AM=513,CM=514,x0=515,RM=516,bM=517,PM=518,DM=519,mg=35044,_g="300 es",qi=2e3,sc=2001;class ta{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,u=s.length;a<u;a++)s[a].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sd=Math.PI/180,zh=180/Math.PI;function ll(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function vt(o,e,t){return Math.max(e,Math.min(t,o))}function LM(o,e){return(o%e+e)%e}function od(o,e,t){return(1-t)*o+t*e}function Oa(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(e=0,t=0){Lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*s+e.x,this.y=a*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ul{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,u,c){let d=i[s+0],h=i[s+1],p=i[s+2],_=i[s+3];const g=a[u+0],S=a[u+1],E=a[u+2],M=a[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=_;return}if(c===1){e[t+0]=g,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(_!==M||d!==g||h!==S||p!==E){let y=1-c;const x=d*g+h*S+p*E+_*M,D=x>=0?1:-1,P=1-x*x;if(P>Number.EPSILON){const L=Math.sqrt(P),I=Math.atan2(L,x*D);y=Math.sin(y*I)/L,c=Math.sin(c*I)/L}const w=c*D;if(d=d*y+g*w,h=h*y+S*w,p=p*y+E*w,_=_*y+M*w,y===1-c){const L=1/Math.sqrt(d*d+h*h+p*p+_*_);d*=L,h*=L,p*=L,_*=L}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,s,a,u){const c=i[s],d=i[s+1],h=i[s+2],p=i[s+3],_=a[u],g=a[u+1],S=a[u+2],E=a[u+3];return e[t]=c*E+p*_+d*S-h*g,e[t+1]=d*E+p*g+h*_-c*S,e[t+2]=h*E+p*S+c*g-d*_,e[t+3]=p*E-c*_-d*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(i/2),p=c(s/2),_=c(a/2),g=d(i/2),S=d(s/2),E=d(a/2);switch(u){case"XYZ":this._x=g*p*_+h*S*E,this._y=h*S*_-g*p*E,this._z=h*p*E+g*S*_,this._w=h*p*_-g*S*E;break;case"YXZ":this._x=g*p*_+h*S*E,this._y=h*S*_-g*p*E,this._z=h*p*E-g*S*_,this._w=h*p*_+g*S*E;break;case"ZXY":this._x=g*p*_-h*S*E,this._y=h*S*_+g*p*E,this._z=h*p*E+g*S*_,this._w=h*p*_-g*S*E;break;case"ZYX":this._x=g*p*_-h*S*E,this._y=h*S*_+g*p*E,this._z=h*p*E-g*S*_,this._w=h*p*_+g*S*E;break;case"YZX":this._x=g*p*_+h*S*E,this._y=h*S*_+g*p*E,this._z=h*p*E-g*S*_,this._w=h*p*_-g*S*E;break;case"XZY":this._x=g*p*_-h*S*E,this._y=h*S*_-g*p*E,this._z=h*p*E+g*S*_,this._w=h*p*_+g*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],_=t[10],g=i+c+_;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(p-d)*S,this._y=(a-h)*S,this._z=(u-s)*S}else if(i>c&&i>_){const S=2*Math.sqrt(1+i-c-_);this._w=(p-d)/S,this._x=.25*S,this._y=(s+u)/S,this._z=(a+h)/S}else if(c>_){const S=2*Math.sqrt(1+c-i-_);this._w=(a-h)/S,this._x=(s+u)/S,this._y=.25*S,this._z=(d+p)/S}else{const S=2*Math.sqrt(1+_-i-c);this._w=(u-s)/S,this._x=(a+h)/S,this._y=(d+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+u*c+s*h-a*d,this._y=s*p+u*d+a*c-i*h,this._z=a*p+u*h+i*d-s*c,this._w=u*p-i*c-s*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=s,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*i+t*this._x,this._y=S*s+t*this._y,this._z=S*a+t*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,c),_=Math.sin((1-t)*p)/h,g=Math.sin(t*p)/h;return this._w=u*_+this._w*g,this._x=i*_+this._x*g,this._y=s*_+this._y*g,this._z=a*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,t=0,i=0){le.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*s-c*i),p=2*(c*t-a*s),_=2*(a*i-u*t);return this.x=t+d*h+u*_-c*p,this.y=i+d*p+c*h-a*_,this.z=s+d*_+a*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,u=t.x,c=t.y,d=t.z;return this.x=s*d-a*c,this.y=a*u-i*d,this.z=i*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ad.copy(this).projectOnVector(e),this.sub(ad)}reflect(e){return this.sub(ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new le,gg=new ul;class ft{constructor(e,t,i,s,a,u,c,d,h){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,u,c,d,h)}set(e,t,i,s,a,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=a,p[5]=d,p[6]=i,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,u=i[0],c=i[3],d=i[6],h=i[1],p=i[4],_=i[7],g=i[2],S=i[5],E=i[8],M=s[0],y=s[3],x=s[6],D=s[1],P=s[4],w=s[7],L=s[2],I=s[5],N=s[8];return a[0]=u*M+c*D+d*L,a[3]=u*y+c*P+d*I,a[6]=u*x+c*w+d*N,a[1]=h*M+p*D+_*L,a[4]=h*y+p*P+_*I,a[7]=h*x+p*w+_*N,a[2]=g*M+S*D+E*L,a[5]=g*y+S*P+E*I,a[8]=g*x+S*w+E*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-i*a*p+i*c*d+s*a*h-s*u*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],_=p*u-c*h,g=c*d-p*a,S=h*a-u*d,E=t*_+i*g+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=_*M,e[1]=(s*h-p*i)*M,e[2]=(c*i-s*u)*M,e[3]=g*M,e[4]=(p*t-s*d)*M,e[5]=(s*a-c*t)*M,e[6]=S*M,e[7]=(i*d-h*t)*M,e[8]=(u*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,u,c){const d=Math.cos(a),h=Math.sin(a);return this.set(i*d,i*h,-i*(d*u+h*c)+u+e,-s*h,s*d,-s*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ld.makeScale(e,t)),this}rotate(e){return this.premultiply(ld.makeRotation(-e)),this}translate(e,t){return this.premultiply(ld.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ld=new ft;function y0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function oc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function IM(){const o=oc("canvas");return o.style.display="block",o}const vg={};function sl(o){o in vg||(vg[o]=!0,console.warn(o))}function NM(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const xg=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yg=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UM(){const o={enabled:!0,workingColorSpace:Jo,spaces:{},convert:function(s,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===Pt&&(s.r=vr(s.r),s.g=vr(s.g),s.b=vr(s.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Pt&&(s.r=Go(s.r),s.g=Go(s.g),s.b=Go(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kr?rc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,u){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return sl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return sl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Jo]:{primaries:e,whitePoint:i,transfer:rc,toXYZ:xg,fromXYZ:yg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:i,transfer:Pt,toXYZ:xg,fromXYZ:yg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),o}const Tt=UM();function vr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Go(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Eo;class FM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Eo===void 0&&(Eo=oc("canvas")),Eo.width=e.width,Eo.height=e.height;const s=Eo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Eo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let u=0;u<a.length;u++)a[u]=vr(a[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vr(t[i]/255)*255):t[i]=vr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OM=0;class hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?a.push(ud(s[u].image)):a.push(ud(s[u]))}else a=ud(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function ud(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?FM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kM=0;const cd=new le;class kn extends ta{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,i=Os,s=Os,a=Yi,u=ks,c=ki,d=Sr,h=kn.DEFAULT_ANISOTROPY,p=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=ll(),this.name="",this.source=new hp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cd).x}get height(){return this.source.getSize(cd).y}get depth(){return this.source.getSize(cd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uh:e.x=e.x-Math.floor(e.x);break;case Os:e.x=e.x<0?0:1;break;case ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uh:e.y=e.y-Math.floor(e.y);break;case Os:e.y=e.y<0?0:1;break;case ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=c0;kn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,t=0,i=0,s=1){en.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const d=e.elements,h=d[0],p=d[4],_=d[8],g=d[1],S=d[5],E=d[9],M=d[2],y=d[6],x=d[10];if(Math.abs(p-g)<.01&&Math.abs(_-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+M)<.1&&Math.abs(E+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,w=(S+1)/2,L=(x+1)/2,I=(p+g)/4,N=(_+M)/4,O=(E+y)/4;return P>w&&P>L?P<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(P),s=I/i,a=N/i):w>L?w<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(w),i=I/s,a=O/s):L<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(L),i=N/a,s=O/a),this.set(i,s,a,t),this}let D=Math.sqrt((y-E)*(y-E)+(_-M)*(_-M)+(g-p)*(g-p));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(_-M)/D,this.z=(g-p)/D,this.w=Math.acos((h+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zM extends ta{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t);const s={width:e,height:t,depth:i.depth},a=new kn(s);this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Yi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new hp(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class js extends zM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class S0 extends kn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BM extends kn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Ni):Ni.fromBufferAttribute(a,u),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mu.copy(i.boundingBox)),Mu.applyMatrix4(e.matrixWorld),this.union(Mu)}const s=e.children;for(let a=0,u=s.length;a<u;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),Eu.subVectors(this.max,ka),To.subVectors(e.a,ka),wo.subVectors(e.b,ka),Ao.subVectors(e.c,ka),Wr.subVectors(wo,To),Xr.subVectors(Ao,wo),ws.subVectors(To,Ao);let t=[0,-Wr.z,Wr.y,0,-Xr.z,Xr.y,0,-ws.z,ws.y,Wr.z,0,-Wr.x,Xr.z,0,-Xr.x,ws.z,0,-ws.x,-Wr.y,Wr.x,0,-Xr.y,Xr.x,0,-ws.y,ws.x,0];return!fd(t,To,wo,Ao,Eu)||(t=[1,0,0,0,1,0,0,0,1],!fd(t,To,wo,Ao,Eu))?!1:(Tu.crossVectors(Wr,Xr),t=[Tu.x,Tu.y,Tu.z],fd(t,To,wo,Ao,Eu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const lr=[new le,new le,new le,new le,new le,new le,new le,new le],Ni=new le,Mu=new cl,To=new le,wo=new le,Ao=new le,Wr=new le,Xr=new le,ws=new le,ka=new le,Eu=new le,Tu=new le,As=new le;function fd(o,e,t,i,s){for(let a=0,u=o.length-3;a<=u;a+=3){As.fromArray(o,a);const c=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),d=e.dot(As),h=t.dot(As),p=i.dot(As);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const VM=new cl,za=new le,dd=new le;class pp{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):VM.setFromPoints(e).getCenter(i);let s=0;for(let a=0,u=e.length;a<u;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;za.subVectors(e,this.center);const t=za.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(za,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(za.copy(e.center).add(dd)),this.expandByPoint(za.copy(e.center).sub(dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ur=new le,hd=new le,wu=new le,jr=new le,pd=new le,Au=new le,md=new le;class HM{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){hd.copy(e).add(t).multiplyScalar(.5),wu.copy(t).sub(e).normalize(),jr.copy(this.origin).sub(hd);const a=e.distanceTo(t)*.5,u=-this.direction.dot(wu),c=jr.dot(this.direction),d=-jr.dot(wu),h=jr.lengthSq(),p=Math.abs(1-u*u);let _,g,S,E;if(p>0)if(_=u*d-c,g=u*c-d,E=a*p,_>=0)if(g>=-E)if(g<=E){const M=1/p;_*=M,g*=M,S=_*(_+u*g+2*c)+g*(u*_+g+2*d)+h}else g=a,_=Math.max(0,-(u*g+c)),S=-_*_+g*(g+2*d)+h;else g=-a,_=Math.max(0,-(u*g+c)),S=-_*_+g*(g+2*d)+h;else g<=-E?(_=Math.max(0,-(-u*a+c)),g=_>0?-a:Math.min(Math.max(-a,-d),a),S=-_*_+g*(g+2*d)+h):g<=E?(_=0,g=Math.min(Math.max(-a,-d),a),S=g*(g+2*d)+h):(_=Math.max(0,-(u*a+c)),g=_>0?a:Math.min(Math.max(-a,-d),a),S=-_*_+g*(g+2*d)+h);else g=u>0?-a:a,_=Math.max(0,-(u*g+c)),S=-_*_+g*(g+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(hd).addScaledVector(wu,g),S}intersectSphere(e,t){ur.subVectors(e.center,this.origin);const i=ur.dot(this.direction),s=ur.dot(ur)-i*i,a=e.radius*e.radius;if(s>a)return null;const u=Math.sqrt(a-s),c=i-u,d=i+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,s=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,s=(e.min.x-g.x)*h),p>=0?(a=(e.min.y-g.y)*p,u=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,u=(e.min.y-g.y)*p),i>u||a>s||((a>i||isNaN(i))&&(i=a),(u<s||isNaN(s))&&(s=u),_>=0?(c=(e.min.z-g.z)*_,d=(e.max.z-g.z)*_):(c=(e.max.z-g.z)*_,d=(e.min.z-g.z)*_),i>d||c>s)||((c>i||i!==i)&&(i=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,i,s,a){pd.subVectors(t,e),Au.subVectors(i,e),md.crossVectors(pd,Au);let u=this.direction.dot(md),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;jr.subVectors(this.origin,e);const d=c*this.direction.dot(Au.crossVectors(jr,Au));if(d<0)return null;const h=c*this.direction.dot(pd.cross(jr));if(h<0||d+h>u)return null;const p=-c*jr.dot(md);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(e,t,i,s,a,u,c,d,h,p,_,g,S,E,M,y){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,u,c,d,h,p,_,g,S,E,M,y)}set(e,t,i,s,a,u,c,d,h,p,_,g,S,E,M,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=a,x[5]=u,x[9]=c,x[13]=d,x[2]=h,x[6]=p,x[10]=_,x[14]=g,x[3]=S,x[7]=E,x[11]=M,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Co.setFromMatrixColumn(e,0).length(),a=1/Co.setFromMatrixColumn(e,1).length(),u=1/Co.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s),p=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const g=u*p,S=u*_,E=c*p,M=c*_;t[0]=d*p,t[4]=-d*_,t[8]=h,t[1]=S+E*h,t[5]=g-M*h,t[9]=-c*d,t[2]=M-g*h,t[6]=E+S*h,t[10]=u*d}else if(e.order==="YXZ"){const g=d*p,S=d*_,E=h*p,M=h*_;t[0]=g+M*c,t[4]=E*c-S,t[8]=u*h,t[1]=u*_,t[5]=u*p,t[9]=-c,t[2]=S*c-E,t[6]=M+g*c,t[10]=u*d}else if(e.order==="ZXY"){const g=d*p,S=d*_,E=h*p,M=h*_;t[0]=g-M*c,t[4]=-u*_,t[8]=E+S*c,t[1]=S+E*c,t[5]=u*p,t[9]=M-g*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const g=u*p,S=u*_,E=c*p,M=c*_;t[0]=d*p,t[4]=E*h-S,t[8]=g*h+M,t[1]=d*_,t[5]=M*h+g,t[9]=S*h-E,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const g=u*d,S=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=M-g*_,t[8]=E*_+S,t[1]=_,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=S*_+E,t[10]=g-M*_}else if(e.order==="XZY"){const g=u*d,S=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=-_,t[8]=h*p,t[1]=g*_+M,t[5]=u*p,t[9]=S*_-E,t[2]=E*_-S,t[6]=c*p,t[10]=M*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GM,e,WM)}lookAt(e,t,i){const s=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Yr.crossVectors(i,ii),Yr.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Yr.crossVectors(i,ii)),Yr.normalize(),Cu.crossVectors(ii,Yr),s[0]=Yr.x,s[4]=Cu.x,s[8]=ii.x,s[1]=Yr.y,s[5]=Cu.y,s[9]=ii.y,s[2]=Yr.z,s[6]=Cu.z,s[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,u=i[0],c=i[4],d=i[8],h=i[12],p=i[1],_=i[5],g=i[9],S=i[13],E=i[2],M=i[6],y=i[10],x=i[14],D=i[3],P=i[7],w=i[11],L=i[15],I=s[0],N=s[4],O=s[8],A=s[12],R=s[1],z=s[5],j=s[9],K=s[13],ue=s[2],ne=s[6],J=s[10],ie=s[14],V=s[3],ce=s[7],oe=s[11],k=s[15];return a[0]=u*I+c*R+d*ue+h*V,a[4]=u*N+c*z+d*ne+h*ce,a[8]=u*O+c*j+d*J+h*oe,a[12]=u*A+c*K+d*ie+h*k,a[1]=p*I+_*R+g*ue+S*V,a[5]=p*N+_*z+g*ne+S*ce,a[9]=p*O+_*j+g*J+S*oe,a[13]=p*A+_*K+g*ie+S*k,a[2]=E*I+M*R+y*ue+x*V,a[6]=E*N+M*z+y*ne+x*ce,a[10]=E*O+M*j+y*J+x*oe,a[14]=E*A+M*K+y*ie+x*k,a[3]=D*I+P*R+w*ue+L*V,a[7]=D*N+P*z+w*ne+L*ce,a[11]=D*O+P*j+w*J+L*oe,a[15]=D*A+P*K+w*ie+L*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],_=e[6],g=e[10],S=e[14],E=e[3],M=e[7],y=e[11],x=e[15];return E*(+a*d*_-s*h*_-a*c*g+i*h*g+s*c*S-i*d*S)+M*(+t*d*S-t*h*g+a*u*g-s*u*S+s*h*p-a*d*p)+y*(+t*h*_-t*c*S-a*u*_+i*u*S+a*c*p-i*h*p)+x*(-s*c*p-t*d*_+t*c*g+s*u*_-i*u*g+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],_=e[9],g=e[10],S=e[11],E=e[12],M=e[13],y=e[14],x=e[15],D=_*y*h-M*g*h+M*d*S-c*y*S-_*d*x+c*g*x,P=E*g*h-p*y*h-E*d*S+u*y*S+p*d*x-u*g*x,w=p*M*h-E*_*h+E*c*S-u*M*S-p*c*x+u*_*x,L=E*_*d-p*M*d-E*c*g+u*M*g+p*c*y-u*_*y,I=t*D+i*P+s*w+a*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/I;return e[0]=D*N,e[1]=(M*g*a-_*y*a-M*s*S+i*y*S+_*s*x-i*g*x)*N,e[2]=(c*y*a-M*d*a+M*s*h-i*y*h-c*s*x+i*d*x)*N,e[3]=(_*d*a-c*g*a-_*s*h+i*g*h+c*s*S-i*d*S)*N,e[4]=P*N,e[5]=(p*y*a-E*g*a+E*s*S-t*y*S-p*s*x+t*g*x)*N,e[6]=(E*d*a-u*y*a-E*s*h+t*y*h+u*s*x-t*d*x)*N,e[7]=(u*g*a-p*d*a+p*s*h-t*g*h-u*s*S+t*d*S)*N,e[8]=w*N,e[9]=(E*_*a-p*M*a-E*i*S+t*M*S+p*i*x-t*_*x)*N,e[10]=(u*M*a-E*c*a+E*i*h-t*M*h-u*i*x+t*c*x)*N,e[11]=(p*c*a-u*_*a-p*i*h+t*_*h+u*i*S-t*c*S)*N,e[12]=L*N,e[13]=(p*M*s-E*_*s+E*i*g-t*M*g-p*i*y+t*_*y)*N,e[14]=(E*c*s-u*M*s-E*i*d+t*M*d+u*i*y-t*c*y)*N,e[15]=(u*_*s-p*c*s+p*i*d-t*_*d-u*i*g+t*c*g)*N,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,u=e.x,c=e.y,d=e.z,h=a*u,p=a*c;return this.set(h*u+i,h*c-s*d,h*d+s*c,0,h*c+s*d,p*c+i,p*d-s*u,0,h*d-s*c,p*d+s*u,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,u){return this.set(1,i,a,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,u=t._y,c=t._z,d=t._w,h=a+a,p=u+u,_=c+c,g=a*h,S=a*p,E=a*_,M=u*p,y=u*_,x=c*_,D=d*h,P=d*p,w=d*_,L=i.x,I=i.y,N=i.z;return s[0]=(1-(M+x))*L,s[1]=(S+w)*L,s[2]=(E-P)*L,s[3]=0,s[4]=(S-w)*I,s[5]=(1-(g+x))*I,s[6]=(y+D)*I,s[7]=0,s[8]=(E+P)*N,s[9]=(y-D)*N,s[10]=(1-(g+M))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=Co.set(s[0],s[1],s[2]).length();const u=Co.set(s[4],s[5],s[6]).length(),c=Co.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Ui.copy(this);const h=1/a,p=1/u,_=1/c;return Ui.elements[0]*=h,Ui.elements[1]*=h,Ui.elements[2]*=h,Ui.elements[4]*=p,Ui.elements[5]*=p,Ui.elements[6]*=p,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,t.setFromRotationMatrix(Ui),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,s,a,u,c=qi,d=!1){const h=this.elements,p=2*a/(t-e),_=2*a/(i-s),g=(t+e)/(t-e),S=(i+s)/(i-s);let E,M;if(d)E=a/(u-a),M=u*a/(u-a);else if(c===qi)E=-(u+a)/(u-a),M=-2*u*a/(u-a);else if(c===sc)E=-u/(u-a),M=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,a,u,c=qi,d=!1){const h=this.elements,p=2/(t-e),_=2/(i-s),g=-(t+e)/(t-e),S=-(i+s)/(i-s);let E,M;if(d)E=1/(u-a),M=u/(u-a);else if(c===qi)E=-2/(u-a),M=-(u+a)/(u-a);else if(c===sc)E=-1/(u-a),M=-a/(u-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Co=new le,Ui=new cn,GM=new le(0,0,0),WM=new le(1,1,1),Yr=new le,Cu=new le,ii=new le,Sg=new cn,Mg=new ul;class Mr{constructor(e=0,t=0,i=0,s=Mr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],u=s[4],c=s[8],d=s[1],h=s[5],p=s[9],_=s[2],g=s[6],S=s[10];switch(t){case"XYZ":this._y=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mg.setFromEuler(this),this.setFromQuaternion(Mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mr.DEFAULT_ORDER="XYZ";class M0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XM=0;const Eg=new le,Ro=new ul,cr=new cn,Ru=new le,Ba=new le,jM=new le,YM=new ul,Tg=new le(1,0,0),wg=new le(0,1,0),Ag=new le(0,0,1),Cg={type:"added"},qM={type:"removed"},bo={type:"childadded",child:null},_d={type:"childremoved",child:null};class ui extends ta{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const e=new le,t=new Mr,i=new ul,s=new le(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new cn},normalMatrix:{value:new ft}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new M0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ro.setFromAxisAngle(e,t),this.quaternion.multiply(Ro),this}rotateOnWorldAxis(e,t){return Ro.setFromAxisAngle(e,t),this.quaternion.premultiply(Ro),this}rotateX(e){return this.rotateOnAxis(Tg,e)}rotateY(e){return this.rotateOnAxis(wg,e)}rotateZ(e){return this.rotateOnAxis(Ag,e)}translateOnAxis(e,t){return Eg.copy(e).applyQuaternion(this.quaternion),this.position.add(Eg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tg,e)}translateY(e){return this.translateOnAxis(wg,e)}translateZ(e){return this.translateOnAxis(Ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ru.copy(e):Ru.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(Ba,Ru,this.up):cr.lookAt(Ru,Ba,this.up),this.quaternion.setFromRotationMatrix(cr),s&&(cr.extractRotation(s.matrixWorld),Ro.setFromRotationMatrix(cr),this.quaternion.premultiply(Ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cg),bo.child=e,this.dispatchEvent(bo),bo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qM),_d.child=e,this.dispatchEvent(_d),_d.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cg),bo.child=e,this.dispatchEvent(bo),bo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,jM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,YM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const _=d[h];a(e.shapes,_)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(a(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),_=u(e.shapes),g=u(e.skeletons),S=u(e.animations),E=u(e.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),S.length>0&&(i.animations=S),E.length>0&&(i.nodes=E)}return i.object=s,i;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}ui.DEFAULT_UP=new le(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new le,fr=new le,gd=new le,dr=new le,Po=new le,Do=new le,Rg=new le,vd=new le,xd=new le,yd=new le,Sd=new en,Md=new en,Ed=new en;class Oi{constructor(e=new le,t=new le,i=new le){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Fi.subVectors(e,t),s.cross(Fi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Fi.subVectors(s,t),fr.subVectors(i,t),gd.subVectors(e,t);const u=Fi.dot(Fi),c=Fi.dot(fr),d=Fi.dot(gd),h=fr.dot(fr),p=fr.dot(gd),_=u*h-c*c;if(_===0)return a.set(0,0,0),null;const g=1/_,S=(h*d-c*p)*g,E=(u*p-c*d)*g;return a.set(1-S-E,E,S)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,t,i,s,a,u,c,d){return this.getBarycoord(e,t,i,s,dr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,dr.x),d.addScaledVector(u,dr.y),d.addScaledVector(c,dr.z),d)}static getInterpolatedAttribute(e,t,i,s,a,u){return Sd.setScalar(0),Md.setScalar(0),Ed.setScalar(0),Sd.fromBufferAttribute(e,t),Md.fromBufferAttribute(e,i),Ed.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Sd,a.x),u.addScaledVector(Md,a.y),u.addScaledVector(Ed,a.z),u}static isFrontFacing(e,t,i,s){return Fi.subVectors(i,t),fr.subVectors(e,t),Fi.cross(fr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Fi.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return Oi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let u,c;Po.subVectors(s,i),Do.subVectors(a,i),vd.subVectors(e,i);const d=Po.dot(vd),h=Do.dot(vd);if(d<=0&&h<=0)return t.copy(i);xd.subVectors(e,s);const p=Po.dot(xd),_=Do.dot(xd);if(p>=0&&_<=p)return t.copy(s);const g=d*_-p*h;if(g<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(i).addScaledVector(Po,u);yd.subVectors(e,a);const S=Po.dot(yd),E=Do.dot(yd);if(E>=0&&S<=E)return t.copy(a);const M=S*h-d*E;if(M<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(i).addScaledVector(Do,c);const y=p*E-S*_;if(y<=0&&_-p>=0&&S-E>=0)return Rg.subVectors(a,s),c=(_-p)/(_-p+(S-E)),t.copy(s).addScaledVector(Rg,c);const x=1/(y+M+g);return u=M*x,c=g*x,t.copy(i).addScaledVector(Po,u).addScaledVector(Do,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const E0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},bu={h:0,s:0,l:0};function Td(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Tt.workingColorSpace){if(e=LM(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=Td(u,a,e+1/3),this.g=Td(u,a,e),this.b=Td(u,a,e-1/3)}return Tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Si){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Si){const i=E0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=Go(e.r),this.g=Go(e.g),this.b=Go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Tt.workingToColorSpace(bn.copy(this),e),Math.round(vt(bn.r*255,0,255))*65536+Math.round(vt(bn.g*255,0,255))*256+Math.round(vt(bn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(bn.copy(this),t);const i=bn.r,s=bn.g,a=bn.b,u=Math.max(i,s,a),c=Math.min(i,s,a);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const _=u-c;switch(h=p<=.5?_/(u+c):_/(2-u-c),u){case i:d=(s-a)/_+(s<a?6:0);break;case s:d=(a-i)/_+2;break;case a:d=(i-s)/_+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Si){Tt.workingToColorSpace(bn.copy(this),e);const t=bn.r,i=bn.g,s=bn.b;return e!==Si?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(qr),this.setHSL(qr.h+e,qr.s+t,qr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qr),e.getHSL(bu);const i=od(qr.h,bu.h,t),s=od(qr.s,bu.s,t),a=od(qr.l,bu.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Dt;Dt.NAMES=E0;let $M=0;class fc extends ta{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=ll(),this.name="",this.type="Material",this.blending=Ho,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=Jd,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ho&&(i.blending=this.blending),this.side!==os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qd&&(i.blendSrc=this.blendSrc),this.blendDst!==Jd&&(i.blendDst=this.blendDst),this.blendEquation!==Ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ko&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}if(t){const a=s(e.textures),u=s(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class T0 extends fc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mr,this.combine=u0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new le,Pu=new Lt;let KM=0;class Ki{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=mg,this.updateRanges=[],this.gpuType=gr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pu.fromBufferAttribute(this,t),Pu.applyMatrix3(e),this.setXY(t,Pu.x,Pu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Oa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),s=Xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),s=Xn(s,this.array),a=Xn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mg&&(e.usage=this.usage),e}}class w0 extends Ki{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class A0 extends Ki{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gs extends Ki{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ZM=0;const xi=new cn,wd=new ui,Lo=new le,ri=new cl,Va=new cl,_n=new le;class qs extends ta{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y0(e)?A0:w0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ft().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,i){return xi.makeTranslation(e,t,i),this.applyMatrix4(xi),this}scale(e,t,i){return xi.makeScale(e,t,i),this.applyMatrix4(xi),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lo).negate(),this.translate(Lo.x,Lo.y,Lo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Gs(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];ri.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];Va.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(ri.min,Va.min),ri.expandByPoint(_n),_n.addVectors(ri.max,Va.max),ri.expandByPoint(_n)):(ri.expandByPoint(Va.min),ri.expandByPoint(Va.max))}ri.getCenter(i);let s=0;for(let a=0,u=e.count;a<u;a++)_n.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(_n));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)_n.fromBufferAttribute(c,h),d&&(Lo.fromBufferAttribute(e,h),_n.add(Lo)),s=Math.max(s,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ki(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let O=0;O<i.count;O++)c[O]=new le,d[O]=new le;const h=new le,p=new le,_=new le,g=new Lt,S=new Lt,E=new Lt,M=new le,y=new le;function x(O,A,R){h.fromBufferAttribute(i,O),p.fromBufferAttribute(i,A),_.fromBufferAttribute(i,R),g.fromBufferAttribute(a,O),S.fromBufferAttribute(a,A),E.fromBufferAttribute(a,R),p.sub(h),_.sub(h),S.sub(g),E.sub(g);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(z),y.copy(_).multiplyScalar(S.x).addScaledVector(p,-E.x).multiplyScalar(z),c[O].add(M),c[A].add(M),c[R].add(M),d[O].add(y),d[A].add(y),d[R].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let O=0,A=D.length;O<A;++O){const R=D[O],z=R.start,j=R.count;for(let K=z,ue=z+j;K<ue;K+=3)x(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const P=new le,w=new le,L=new le,I=new le;function N(O){L.fromBufferAttribute(s,O),I.copy(L);const A=c[O];P.copy(A),P.sub(L.multiplyScalar(L.dot(A))).normalize(),w.crossVectors(I,A);const z=w.dot(d[O])<0?-1:1;u.setXYZW(O,P.x,P.y,P.z,z)}for(let O=0,A=D.length;O<A;++O){const R=D[O],z=R.start,j=R.count;for(let K=z,ue=z+j;K<ue;K+=3)N(e.getX(K+0)),N(e.getX(K+1)),N(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ki(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,S=i.count;g<S;g++)i.setXYZ(g,0,0,0);const s=new le,a=new le,u=new le,c=new le,d=new le,h=new le,p=new le,_=new le;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),M=e.getX(g+1),y=e.getX(g+2);s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),u.fromBufferAttribute(t,y),p.subVectors(u,a),_.subVectors(s,a),p.cross(_),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,y),c.add(p),d.add(p),h.add(p),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,S=t.count;g<S;g+=3)s.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),p.subVectors(u,a),_.subVectors(s,a),p.cross(_),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,_=c.normalized,g=new h.constructor(d.length*p);let S=0,E=0;for(let M=0,y=d.length;M<y;M++){c.isInterleavedBufferAttribute?S=d[M]*c.data.stride+c.offset:S=d[M]*p;for(let x=0;x<p;x++)g[E++]=h[S++]}return new Ki(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qs,i=this.index.array,s=this.attributes;for(const c in s){const d=s[c],h=e(d,i);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let p=0,_=h.length;p<_;p++){const g=h[p],S=e(g,i);d.push(S)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let _=0,g=h.length;_<g;_++){const S=h[_];p.push(S.toJSON(e.data))}p.length>0&&(s[d]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],_=a[h];for(let g=0,S=_.length;g<S;g++)p.push(_[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bg=new cn,Cs=new HM,Du=new pp,Pg=new le,Lu=new le,Iu=new le,Nu=new le,Ad=new le,Uu=new le,Dg=new le,Fu=new le;class $i extends ui{constructor(e=new qs,t=new T0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){Uu.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=c[d],_=a[d];p!==0&&(Ad.fromBufferAttribute(_,e),u?Uu.addScaledVector(Ad,p):Uu.addScaledVector(Ad.sub(t),p))}t.add(Uu)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Du.copy(i.boundingSphere),Du.applyMatrix4(a),Cs.copy(e.ray).recast(e.near),!(Du.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Du,Pg)===null||Cs.origin.distanceToSquared(Pg)>(e.far-e.near)**2))&&(bg.copy(a).invert(),Cs.copy(e.ray).applyMatrix4(bg),!(i.boundingBox!==null&&Cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,i){let s;const a=this.geometry,u=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,g=a.groups,S=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const y=g[E],x=u[y.materialIndex],D=Math.max(y.start,S.start),P=Math.min(c.count,Math.min(y.start+y.count,S.start+S.count));for(let w=D,L=P;w<L;w+=3){const I=c.getX(w),N=c.getX(w+1),O=c.getX(w+2);s=Ou(this,x,e,i,h,p,_,I,N,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(c.count,S.start+S.count);for(let y=E,x=M;y<x;y+=3){const D=c.getX(y),P=c.getX(y+1),w=c.getX(y+2);s=Ou(this,u,e,i,h,p,_,D,P,w),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const y=g[E],x=u[y.materialIndex],D=Math.max(y.start,S.start),P=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let w=D,L=P;w<L;w+=3){const I=w,N=w+1,O=w+2;s=Ou(this,x,e,i,h,p,_,I,N,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let y=E,x=M;y<x;y+=3){const D=y,P=y+1,w=y+2;s=Ou(this,u,e,i,h,p,_,D,P,w),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function QM(o,e,t,i,s,a,u,c){let d;if(e.side===Kn?d=i.intersectTriangle(u,a,s,!0,c):d=i.intersectTriangle(s,a,u,e.side===os,c),d===null)return null;Fu.copy(c),Fu.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(Fu);return h<t.near||h>t.far?null:{distance:h,point:Fu.clone(),object:o}}function Ou(o,e,t,i,s,a,u,c,d,h){o.getVertexPosition(c,Lu),o.getVertexPosition(d,Iu),o.getVertexPosition(h,Nu);const p=QM(o,e,t,i,Lu,Iu,Nu,Dg);if(p){const _=new le;Oi.getBarycoord(Dg,Lu,Iu,Nu,_),s&&(p.uv=Oi.getInterpolatedAttribute(s,c,d,h,_,new Lt)),a&&(p.uv1=Oi.getInterpolatedAttribute(a,c,d,h,_,new Lt)),u&&(p.normal=Oi.getInterpolatedAttribute(u,c,d,h,_,new le),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:d,c:h,normal:new le,materialIndex:0};Oi.getNormal(Lu,Iu,Nu,g.normal),p.face=g,p.barycoord=_}return p}class fl extends qs{constructor(e=1,t=1,i=1,s=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:u};const c=this;s=Math.floor(s),a=Math.floor(a),u=Math.floor(u);const d=[],h=[],p=[],_=[];let g=0,S=0;E("z","y","x",-1,-1,i,t,e,u,a,0),E("z","y","x",1,-1,i,t,-e,u,a,1),E("x","z","y",1,1,e,i,t,s,u,2),E("x","z","y",1,-1,e,i,-t,s,u,3),E("x","y","z",1,-1,e,t,i,s,a,4),E("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(d),this.setAttribute("position",new Gs(h,3)),this.setAttribute("normal",new Gs(p,3)),this.setAttribute("uv",new Gs(_,2));function E(M,y,x,D,P,w,L,I,N,O,A){const R=w/N,z=L/O,j=w/2,K=L/2,ue=I/2,ne=N+1,J=O+1;let ie=0,V=0;const ce=new le;for(let oe=0;oe<J;oe++){const k=oe*z-K;for(let ee=0;ee<ne;ee++){const Te=ee*R-j;ce[M]=Te*D,ce[y]=k*P,ce[x]=ue,h.push(ce.x,ce.y,ce.z),ce[M]=0,ce[y]=0,ce[x]=I>0?1:-1,p.push(ce.x,ce.y,ce.z),_.push(ee/N),_.push(1-oe/O),ie+=1}}for(let oe=0;oe<O;oe++)for(let k=0;k<N;k++){const ee=g+k+ne*oe,Te=g+k+ne*(oe+1),Re=g+(k+1)+ne*(oe+1),Ie=g+(k+1)+ne*oe;d.push(ee,Te,Ie),d.push(Te,Re,Ie),V+=6}c.addGroup(S,V,A),S+=V,g+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ea(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Fn(o){const e={};for(let t=0;t<o.length;t++){const i=ea(o[t]);for(const s in i)e[s]=i[s]}return e}function JM(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function C0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const eE={clone:ea,merge:Fn};var tE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends fc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tE,this.fragmentShader=nE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=JM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class R0 extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $r=new le,Lg=new Lt,Ig=new Lt;class Mi extends R0{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zh*2*Math.atan(Math.tan(sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($r.x,$r.y).multiplyScalar(-e/$r.z),$r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($r.x,$r.y).multiplyScalar(-e/$r.z)}getViewSize(e,t){return this.getViewBounds(e,Lg,Ig),t.subVectors(Ig,Lg)}setViewOffset(e,t,i,s,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sd*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;a+=u.offsetX*s/d,t-=u.offsetY*i/h,s*=u.width/d,i*=u.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Io=-90,No=1;class iE extends ui{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mi(Io,No,e,t);s.layers=this.layers,this.add(s);const a=new Mi(Io,No,e,t);a.layers=this.layers,this.add(a);const u=new Mi(Io,No,e,t);u.layers=this.layers,this.add(u);const c=new Mi(Io,No,e,t);c.layers=this.layers,this.add(c);const d=new Mi(Io,No,e,t);d.layers=this.layers,this.add(d);const h=new Mi(Io,No,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,u,c,d]=t;for(const h of t)this.remove(h);if(e===qi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,d,h,p]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,u),e.setRenderTarget(i,2,s),e.render(t,c),e.setRenderTarget(i,3,s),e.render(t,d),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,p),e.setRenderTarget(_,g,S),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class b0 extends kn{constructor(e=[],t=Zo,i,s,a,u,c,d,h,p){super(e,t,i,s,a,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rE extends js{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new b0(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fl(5,5,5),a=new Er({name:"CubemapFromEquirect",uniforms:ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kn,blending:ns});a.uniforms.tEquirect.value=t;const u=new $i(s,a),c=t.minFilter;return t.minFilter===ks&&(t.minFilter=Yi),new iE(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(a)}}class ku extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sE={type:"move"};class Cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ku,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ku,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ku,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,i),x=this._getHandJoint(h,M);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const p=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=p.position.distanceTo(_.position),S=.02,E=.005;h.inputState.pinching&&g>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(sE)))}return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ku;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class oE extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mr,this.environmentIntensity=1,this.environmentRotation=new Mr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Rd=new le,aE=new le,lE=new ft;class Ls{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Rd.subVectors(i,t).cross(aE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Rd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lE.getNormalMatrix(e),s=this.coplanarPoint(Rd).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new pp,uE=new Lt(.5,.5),zu=new le;class P0{constructor(e=new Ls,t=new Ls,i=new Ls,s=new Ls,a=new Ls,u=new Ls){this.planes=[e,t,i,s,a,u]}set(e,t,i,s,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qi,i=!1){const s=this.planes,a=e.elements,u=a[0],c=a[1],d=a[2],h=a[3],p=a[4],_=a[5],g=a[6],S=a[7],E=a[8],M=a[9],y=a[10],x=a[11],D=a[12],P=a[13],w=a[14],L=a[15];if(s[0].setComponents(h-u,S-p,x-E,L-D).normalize(),s[1].setComponents(h+u,S+p,x+E,L+D).normalize(),s[2].setComponents(h+c,S+_,x+M,L+P).normalize(),s[3].setComponents(h-c,S-_,x-M,L-P).normalize(),i)s[4].setComponents(d,g,y,w).normalize(),s[5].setComponents(h-d,S-g,x-y,L-w).normalize();else if(s[4].setComponents(h-d,S-g,x-y,L-w).normalize(),t===qi)s[5].setComponents(h+d,S+g,x+y,L+w).normalize();else if(t===sc)s[5].setComponents(d,g,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);const t=uE.distanceTo(e.center);return Rs.radius=.7071067811865476+t,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(zu.x=s.normal.x>0?e.max.x:e.min.x,zu.y=s.normal.y>0?e.max.y:e.min.y,zu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cE extends kn{constructor(e,t,i,s,a,u,c,d,h){super(e,t,i,s,a,u,c,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class D0 extends kn{constructor(e,t,i=Xs,s,a,u,c=Ai,d=Ai,h,p=il,_=1){if(p!==il&&p!==rl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,s,a,u,c,d,p,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class L0 extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dl extends qs{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,u=t/2,c=Math.floor(i),d=Math.floor(s),h=c+1,p=d+1,_=e/c,g=t/d,S=[],E=[],M=[],y=[];for(let x=0;x<p;x++){const D=x*g-u;for(let P=0;P<h;P++){const w=P*_-a;E.push(w,-D,0),M.push(0,0,1),y.push(P/c),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let D=0;D<c;D++){const P=D+h*x,w=D+h*(x+1),L=D+1+h*(x+1),I=D+1+h*x;S.push(P,w,I),S.push(w,L,I)}this.setIndex(S),this.setAttribute("position",new Gs(E,3)),this.setAttribute("normal",new Gs(M,3)),this.setAttribute("uv",new Gs(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.widthSegments,e.heightSegments)}}class fE extends fc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dE extends fc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hE extends R0{constructor(e=-1,t=1,i=1,s=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pE extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ng(o,e,t,i){const s=mE(i);switch(t){case m0:return o*e;case g0:return o*e/s.components*s.byteLength;case cp:return o*e/s.components*s.byteLength;case v0:return o*e*2/s.components*s.byteLength;case fp:return o*e*2/s.components*s.byteLength;case _0:return o*e*3/s.components*s.byteLength;case ki:return o*e*4/s.components*s.byteLength;case dp:return o*e*4/s.components*s.byteLength;case ju:case Yu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case qu:case $u:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dh:case ph:return Math.max(o,16)*Math.max(e,8)/4;case fh:case hh:return Math.max(o,8)*Math.max(e,8)/2;case mh:case _h:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case gh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case yh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Th:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case wh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case bh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Lh:case Ih:case Nh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Uh:case Fh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Oh:case kh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mE(o){switch(o){case Sr:case f0:return{byteLength:1,components:1};case tl:case d0:case al:return{byteLength:2,components:1};case lp:case up:return{byteLength:2,components:4};case Xs:case ap:case gr:return{byteLength:4,components:1};case h0:case p0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function I0(){let o=null,e=!1,t=null,i=null;function s(a,u){t(a,u),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function _E(o){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,_=h.byteLength,g=o.createBuffer();o.bindBuffer(d,g),o.bufferData(d,h,p),c.onUploadCallback();let S;if(h instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=o.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=o.SHORT;else if(h instanceof Uint32Array)S=o.UNSIGNED_INT;else if(h instanceof Int32Array)S=o.INT;else if(h instanceof Int8Array)S=o.BYTE;else if(h instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:_}}function i(c,d,h){const p=d.array,_=d.updateRanges;if(o.bindBuffer(h,c),_.length===0)o.bufferSubData(h,0,p);else{_.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<_.length;S++){const E=_[g],M=_[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++g,_[g]=M)}_.length=g+1;for(let S=0,E=_.length;S<E;S++){const M=_[S];o.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(o.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,c,d),h.version=c.version}}return{get:s,remove:a,update:u}}var gE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vE=`#ifdef USE_ALPHAHASH
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
#endif`,xE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ME=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EE=`#ifdef USE_AOMAP
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
#endif`,TE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wE=`#ifdef USE_BATCHING
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
#endif`,AE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PE=`#ifdef USE_IRIDESCENCE
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
#endif`,DE=`#ifdef USE_BUMPMAP
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
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,BE=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,VE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,HE=`vec3 transformedNormal = objectNormal;
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
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YE="gl_FragColor = linearToOutputTexel( gl_FragColor );",qE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$E=`#ifdef USE_ENVMAP
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
#endif`,KE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZE=`#ifdef USE_ENVMAP
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
#endif`,QE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JE=`#ifdef USE_ENVMAP
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
#endif`,eT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rT=`#ifdef USE_GRADIENTMAP
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
}`,sT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lT=`uniform bool receiveShadow;
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
#endif`,uT=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,cT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,mT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_T=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,gT=`#if defined( RE_IndirectDiffuse )
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
#endif`,vT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ST=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ET=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AT=`#if defined( USE_POINTS_UV )
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
#endif`,CT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LT=`#ifdef USE_MORPHTARGETS
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
#endif`,IT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zT=`#ifdef USE_NORMALMAP
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
#endif`,BT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$T=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,JT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t1=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,n1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i1=`#ifdef USE_SKINNING
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
#endif`,r1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s1=`#ifdef USE_SKINNING
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
#endif`,o1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c1=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f1=`#ifdef USE_TRANSMISSION
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
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g1=`uniform sampler2D t2D;
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
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`#include <common>
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
}`,E1=`#if DEPTH_PACKING == 3200
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
}`,T1=`#define DISTANCE
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
}`,w1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`uniform float scale;
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
}`,b1=`uniform vec3 diffuse;
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
}`,P1=`#include <common>
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
}`,D1=`uniform vec3 diffuse;
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
}`,L1=`#define LAMBERT
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
}`,I1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,N1=`#define MATCAP
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
}`,U1=`#define MATCAP
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
}`,F1=`#define NORMAL
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
}`,O1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k1=`#define PHONG
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
}`,z1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,B1=`#define STANDARD
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
}`,V1=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,H1=`#define TOON
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
}`,G1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,W1=`uniform float size;
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
}`,X1=`uniform vec3 diffuse;
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
}`,j1=`#include <common>
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
}`,Y1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,q1=`uniform float rotation;
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
}`,$1=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:gE,alphahash_pars_fragment:vE,alphamap_fragment:xE,alphamap_pars_fragment:yE,alphatest_fragment:SE,alphatest_pars_fragment:ME,aomap_fragment:EE,aomap_pars_fragment:TE,batching_pars_vertex:wE,batching_vertex:AE,begin_vertex:CE,beginnormal_vertex:RE,bsdfs:bE,iridescence_fragment:PE,bumpmap_pars_fragment:DE,clipping_planes_fragment:LE,clipping_planes_pars_fragment:IE,clipping_planes_pars_vertex:NE,clipping_planes_vertex:UE,color_fragment:FE,color_pars_fragment:OE,color_pars_vertex:kE,color_vertex:zE,common:BE,cube_uv_reflection_fragment:VE,defaultnormal_vertex:HE,displacementmap_pars_vertex:GE,displacementmap_vertex:WE,emissivemap_fragment:XE,emissivemap_pars_fragment:jE,colorspace_fragment:YE,colorspace_pars_fragment:qE,envmap_fragment:$E,envmap_common_pars_fragment:KE,envmap_pars_fragment:ZE,envmap_pars_vertex:QE,envmap_physical_pars_fragment:uT,envmap_vertex:JE,fog_vertex:eT,fog_pars_vertex:tT,fog_fragment:nT,fog_pars_fragment:iT,gradientmap_pars_fragment:rT,lightmap_pars_fragment:sT,lights_lambert_fragment:oT,lights_lambert_pars_fragment:aT,lights_pars_begin:lT,lights_toon_fragment:cT,lights_toon_pars_fragment:fT,lights_phong_fragment:dT,lights_phong_pars_fragment:hT,lights_physical_fragment:pT,lights_physical_pars_fragment:mT,lights_fragment_begin:_T,lights_fragment_maps:gT,lights_fragment_end:vT,logdepthbuf_fragment:xT,logdepthbuf_pars_fragment:yT,logdepthbuf_pars_vertex:ST,logdepthbuf_vertex:MT,map_fragment:ET,map_pars_fragment:TT,map_particle_fragment:wT,map_particle_pars_fragment:AT,metalnessmap_fragment:CT,metalnessmap_pars_fragment:RT,morphinstance_vertex:bT,morphcolor_vertex:PT,morphnormal_vertex:DT,morphtarget_pars_vertex:LT,morphtarget_vertex:IT,normal_fragment_begin:NT,normal_fragment_maps:UT,normal_pars_fragment:FT,normal_pars_vertex:OT,normal_vertex:kT,normalmap_pars_fragment:zT,clearcoat_normal_fragment_begin:BT,clearcoat_normal_fragment_maps:VT,clearcoat_pars_fragment:HT,iridescence_pars_fragment:GT,opaque_fragment:WT,packing:XT,premultiplied_alpha_fragment:jT,project_vertex:YT,dithering_fragment:qT,dithering_pars_fragment:$T,roughnessmap_fragment:KT,roughnessmap_pars_fragment:ZT,shadowmap_pars_fragment:QT,shadowmap_pars_vertex:JT,shadowmap_vertex:e1,shadowmask_pars_fragment:t1,skinbase_vertex:n1,skinning_pars_vertex:i1,skinning_vertex:r1,skinnormal_vertex:s1,specularmap_fragment:o1,specularmap_pars_fragment:a1,tonemapping_fragment:l1,tonemapping_pars_fragment:u1,transmission_fragment:c1,transmission_pars_fragment:f1,uv_pars_fragment:d1,uv_pars_vertex:h1,uv_vertex:p1,worldpos_vertex:m1,background_vert:_1,background_frag:g1,backgroundCube_vert:v1,backgroundCube_frag:x1,cube_vert:y1,cube_frag:S1,depth_vert:M1,depth_frag:E1,distanceRGBA_vert:T1,distanceRGBA_frag:w1,equirect_vert:A1,equirect_frag:C1,linedashed_vert:R1,linedashed_frag:b1,meshbasic_vert:P1,meshbasic_frag:D1,meshlambert_vert:L1,meshlambert_frag:I1,meshmatcap_vert:N1,meshmatcap_frag:U1,meshnormal_vert:F1,meshnormal_frag:O1,meshphong_vert:k1,meshphong_frag:z1,meshphysical_vert:B1,meshphysical_frag:V1,meshtoon_vert:H1,meshtoon_frag:G1,points_vert:W1,points_frag:X1,shadow_vert:j1,shadow_frag:Y1,sprite_vert:q1,sprite_frag:$1},De={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Wi={basic:{uniforms:Fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Dt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Fn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Fn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Dt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Fn([De.points,De.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Fn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Fn([De.common,De.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Fn([De.sprite,De.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Fn([De.common,De.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Fn([De.lights,De.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Wi.physical={uniforms:Fn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Bu={r:0,b:0,g:0},bs=new Mr,K1=new cn;function Z1(o,e,t,i,s,a,u){const c=new Dt(0);let d=a===!0?0:1,h,p,_=null,g=0,S=null;function E(P){let w=P.isScene===!0?P.background:null;return w&&w.isTexture&&(w=(P.backgroundBlurriness>0?t:e).get(w)),w}function M(P){let w=!1;const L=E(P);L===null?x(c,d):L&&L.isColor&&(x(L,1),w=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(P,w){const L=E(w);L&&(L.isCubeTexture||L.mapping===cc)?(p===void 0&&(p=new $i(new fl(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:ea(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),bs.copy(w.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),p.material.uniforms.envMap.value=L,p.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(K1.makeRotationFromEuler(bs)),p.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Pt,(_!==L||g!==L.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,_=L,g=L.version,S=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new $i(new dl(2,2),new Er({name:"BackgroundMaterial",uniforms:ea(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Pt,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||g!==L.version||S!==o.toneMapping)&&(h.material.needsUpdate=!0,_=L,g=L.version,S=o.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function x(P,w){P.getRGB(Bu,C0(o)),i.buffers.color.setClear(Bu.r,Bu.g,Bu.b,w,u)}function D(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,w=1){c.set(P),d=w,x(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,x(c,d)},render:M,addToRenderList:y,dispose:D}}function Q1(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=g(null);let a=s,u=!1;function c(R,z,j,K,ue){let ne=!1;const J=_(K,j,z);a!==J&&(a=J,h(a.object)),ne=S(R,K,j,ue),ne&&E(R,K,j,ue),ue!==null&&e.update(ue,o.ELEMENT_ARRAY_BUFFER),(ne||u)&&(u=!1,w(R,z,j,K),ue!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function d(){return o.createVertexArray()}function h(R){return o.bindVertexArray(R)}function p(R){return o.deleteVertexArray(R)}function _(R,z,j){const K=j.wireframe===!0;let ue=i[R.id];ue===void 0&&(ue={},i[R.id]=ue);let ne=ue[z.id];ne===void 0&&(ne={},ue[z.id]=ne);let J=ne[K];return J===void 0&&(J=g(d()),ne[K]=J),J}function g(R){const z=[],j=[],K=[];for(let ue=0;ue<t;ue++)z[ue]=0,j[ue]=0,K[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:j,attributeDivisors:K,object:R,attributes:{},index:null}}function S(R,z,j,K){const ue=a.attributes,ne=z.attributes;let J=0;const ie=j.getAttributes();for(const V in ie)if(ie[V].location>=0){const oe=ue[V];let k=ne[V];if(k===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(k=R.instanceColor)),oe===void 0||oe.attribute!==k||k&&oe.data!==k.data)return!0;J++}return a.attributesNum!==J||a.index!==K}function E(R,z,j,K){const ue={},ne=z.attributes;let J=0;const ie=j.getAttributes();for(const V in ie)if(ie[V].location>=0){let oe=ne[V];oe===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const k={};k.attribute=oe,oe&&oe.data&&(k.data=oe.data),ue[V]=k,J++}a.attributes=ue,a.attributesNum=J,a.index=K}function M(){const R=a.newAttributes;for(let z=0,j=R.length;z<j;z++)R[z]=0}function y(R){x(R,0)}function x(R,z){const j=a.newAttributes,K=a.enabledAttributes,ue=a.attributeDivisors;j[R]=1,K[R]===0&&(o.enableVertexAttribArray(R),K[R]=1),ue[R]!==z&&(o.vertexAttribDivisor(R,z),ue[R]=z)}function D(){const R=a.newAttributes,z=a.enabledAttributes;for(let j=0,K=z.length;j<K;j++)z[j]!==R[j]&&(o.disableVertexAttribArray(j),z[j]=0)}function P(R,z,j,K,ue,ne,J){J===!0?o.vertexAttribIPointer(R,z,j,ue,ne):o.vertexAttribPointer(R,z,j,K,ue,ne)}function w(R,z,j,K){M();const ue=K.attributes,ne=j.getAttributes(),J=z.defaultAttributeValues;for(const ie in ne){const V=ne[ie];if(V.location>=0){let ce=ue[ie];if(ce===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ce!==void 0){const oe=ce.normalized,k=ce.itemSize,ee=e.get(ce);if(ee===void 0)continue;const Te=ee.buffer,Re=ee.type,Ie=ee.bytesPerElement,re=Re===o.INT||Re===o.UNSIGNED_INT||ce.gpuType===ap;if(ce.isInterleavedBufferAttribute){const de=ce.data,Me=de.stride,Ne=ce.offset;if(de.isInstancedInterleavedBuffer){for(let ke=0;ke<V.locationSize;ke++)x(V.location+ke,de.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ke=0;ke<V.locationSize;ke++)y(V.location+ke);o.bindBuffer(o.ARRAY_BUFFER,Te);for(let ke=0;ke<V.locationSize;ke++)P(V.location+ke,k/V.locationSize,Re,oe,Me*Ie,(Ne+k/V.locationSize*ke)*Ie,re)}else{if(ce.isInstancedBufferAttribute){for(let de=0;de<V.locationSize;de++)x(V.location+de,ce.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let de=0;de<V.locationSize;de++)y(V.location+de);o.bindBuffer(o.ARRAY_BUFFER,Te);for(let de=0;de<V.locationSize;de++)P(V.location+de,k/V.locationSize,Re,oe,k*Ie,k/V.locationSize*de*Ie,re)}}else if(J!==void 0){const oe=J[ie];if(oe!==void 0)switch(oe.length){case 2:o.vertexAttrib2fv(V.location,oe);break;case 3:o.vertexAttrib3fv(V.location,oe);break;case 4:o.vertexAttrib4fv(V.location,oe);break;default:o.vertexAttrib1fv(V.location,oe)}}}}D()}function L(){O();for(const R in i){const z=i[R];for(const j in z){const K=z[j];for(const ue in K)p(K[ue].object),delete K[ue];delete z[j]}delete i[R]}}function I(R){if(i[R.id]===void 0)return;const z=i[R.id];for(const j in z){const K=z[j];for(const ue in K)p(K[ue].object),delete K[ue];delete z[j]}delete i[R.id]}function N(R){for(const z in i){const j=i[z];if(j[R.id]===void 0)continue;const K=j[R.id];for(const ue in K)p(K[ue].object),delete K[ue];delete j[R.id]}}function O(){A(),u=!0,a!==s&&(a=s,h(a.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:O,resetDefaultState:A,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:y,disableUnusedAttributes:D}}function J1(o,e,t){let i;function s(h){i=h}function a(h,p){o.drawArrays(i,h,p),t.update(p,i,1)}function u(h,p,_){_!==0&&(o.drawArraysInstanced(i,h,p,_),t.update(p,i,_))}function c(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,_);let S=0;for(let E=0;E<_;E++)S+=p[E];t.update(S,i,1)}function d(h,p,_,g){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<h.length;E++)u(h[E],p[E],g[E]);else{S.multiDrawArraysInstancedWEBGL(i,h,0,p,0,g,0,_);let E=0;for(let M=0;M<_;M++)E+=p[M]*g[M];t.update(E,i,1)}}this.setMode=s,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function ew(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(N){return!(N!==ki&&i.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){const O=N===al&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Sr&&i.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==gr&&!O)}function d(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=E>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:w,vertexTextures:L,maxSamples:I}}function tw(o){const e=this;let t=null,i=0,s=!1,a=!1;const u=new Ls,c=new ft,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const S=_.length!==0||g||i!==0||s;return s=g,i=_.length,S},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,g){t=p(_,g,0)},this.setState=function(_,g,S){const E=_.clippingPlanes,M=_.clipIntersection,y=_.clipShadows,x=o.get(_);if(!s||E===null||E.length===0||a&&!y)a?p(null):h();else{const D=a?0:i,P=D*4;let w=x.clippingState||null;d.value=w,w=p(E,g,P,S);for(let L=0;L!==P;++L)w[L]=t[L];x.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=D}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,g,S,E){const M=_!==null?_.length:0;let y=null;if(M!==0){if(y=d.value,E!==!0||y===null){const x=S+M*4,D=g.matrixWorldInverse;c.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,w=S;P!==M;++P,w+=4)u.copy(_[P]).applyMatrix4(D,c),u.normal.toArray(y,w),y[w+3]=u.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function nw(o){let e=new WeakMap;function t(u,c){return c===ah?u.mapping=Zo:c===lh&&(u.mapping=Qo),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===ah||c===lh)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new rE(d.height);return h.fromEquirectangularTexture(o,u),e.set(u,h),u.addEventListener("dispose",s),t(h.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const ko=4,Ug=[.125,.215,.35,.446,.526,.582],Us=20,bd=new hE,Fg=new Dt;let Pd=null,Dd=0,Ld=0,Id=!1;const Is=(1+Math.sqrt(5))/2,Uo=1/Is,Og=[new le(-Is,Uo,0),new le(Is,Uo,0),new le(-Uo,0,Is),new le(Uo,0,Is),new le(0,Is,-Uo),new le(0,Is,Uo),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)],iw=new le;class kg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,a={}){const{size:u=256,position:c=iw}=a;Pd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,s,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pd,Dd,Ld),this._renderer.xr.enabled=Id,e.scissorTest=!1,Vu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zo||e.mapping===Qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yi,minFilter:Yi,generateMipmaps:!1,type:al,format:ki,colorSpace:Jo,depthBuffer:!1},s=zg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rw(a)),this._blurMaterial=sw(a,e,t)}return s}_compileMaterial(e){const t=new $i(this._lodPlanes[0],e);this._renderer.compile(t,bd)}_sceneToCubeUV(e,t,i,s,a){const d=new Mi(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,S=_.toneMapping;_.getClearColor(Fg),_.toneMapping=is,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null));const M=new T0({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),y=new $i(new fl,M);let x=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,x=!0):(M.color.copy(Fg),x=!0);for(let P=0;P<6;P++){const w=P%3;w===0?(d.up.set(0,h[P],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[P],a.y,a.z)):w===1?(d.up.set(0,0,h[P]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[P],a.z)):(d.up.set(0,h[P],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[P]));const L=this._cubeSize;Vu(s,w*L,P>2?L:0,L,L),_.setRenderTarget(s),x&&_.render(y,d),_.render(e,d)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=S,_.autoClear=g,e.background=D}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Zo||e.mapping===Qo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bg());const a=s?this._cubemapMaterial:this._equirectMaterial,u=new $i(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;Vu(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,bd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Og[(s-a-1)%Og.length];this._blur(e,a-1,a,u,c)}t.autoClear=i}_blur(e,t,i,s,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",a),this._halfBlur(u,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new $i(this._lodPlanes[s],h),g=h.uniforms,S=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Us-1),M=a/E,y=isFinite(a)?1+Math.floor(p*M):Us;y>Us&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Us}`);const x=[];let D=0;for(let N=0;N<Us;++N){const O=N/M,A=Math.exp(-O*O/2);x.push(A),N===0?D+=A:N<y&&(D+=2*A)}for(let N=0;N<x.length;N++)x[N]=x[N]/D;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=u==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:P}=this;g.dTheta.value=E,g.mipInt.value=P-i;const w=this._sizeLods[s],L=3*w*(s>P-ko?s-P+ko:0),I=4*(this._cubeSize-w);Vu(t,L,I,3*w,2*w),d.setRenderTarget(t),d.render(_,bd)}}function rw(o){const e=[],t=[],i=[];let s=o;const a=o-ko+1+Ug.length;for(let u=0;u<a;u++){const c=Math.pow(2,s);t.push(c);let d=1/c;u>o-ko?d=Ug[u-o+ko-1]:u===0&&(d=0),i.push(d);const h=1/(c-2),p=-h,_=1+h,g=[p,p,_,p,_,_,p,p,_,_,p,_],S=6,E=6,M=3,y=2,x=1,D=new Float32Array(M*E*S),P=new Float32Array(y*E*S),w=new Float32Array(x*E*S);for(let I=0;I<S;I++){const N=I%3*2/3-1,O=I>2?0:-1,A=[N,O,0,N+2/3,O,0,N+2/3,O+1,0,N,O,0,N+2/3,O+1,0,N,O+1,0];D.set(A,M*E*I),P.set(g,y*E*I);const R=[I,I,I,I,I,I];w.set(R,x*E*I)}const L=new qs;L.setAttribute("position",new Ki(D,M)),L.setAttribute("uv",new Ki(P,y)),L.setAttribute("faceIndex",new Ki(w,x)),e.push(L),s>ko&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zg(o,e,t){const i=new js(o,e,t);return i.texture.mapping=cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vu(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function sw(o,e,t){const i=new Float32Array(Us),s=new le(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mp(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Bg(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mp(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Vg(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function mp(){return`

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
	`}function ow(o){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const d=c.mapping,h=d===ah||d===lh,p=d===Zo||d===Qo;if(h||p){let _=e.get(c);const g=_!==void 0?_.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return t===null&&(t=new kg(o)),_=h?t.fromEquirectangular(c,_):t.fromCubemap(c,_),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),_.texture;if(_!==void 0)return _.texture;{const S=c.image;return h&&S&&S.height>0||p&&S&&s(S)?(t===null&&(t=new kg(o)),_=h?t.fromEquirectangular(c):t.fromCubemap(c),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),c.addEventListener("dispose",a),_.texture):null}}}return c}function s(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function aw(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&sl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function lw(o,e,t,i){const s={},a=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete s[g.id];const S=a.get(g);S&&(e.remove(S),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(_,g){return s[g.id]===!0||(g.addEventListener("dispose",u),s[g.id]=!0,t.memory.geometries++),g}function d(_){const g=_.attributes;for(const S in g)e.update(g[S],o.ARRAY_BUFFER)}function h(_){const g=[],S=_.index,E=_.attributes.position;let M=0;if(S!==null){const D=S.array;M=S.version;for(let P=0,w=D.length;P<w;P+=3){const L=D[P+0],I=D[P+1],N=D[P+2];g.push(L,I,I,N,N,L)}}else if(E!==void 0){const D=E.array;M=E.version;for(let P=0,w=D.length/3-1;P<w;P+=3){const L=P+0,I=P+1,N=P+2;g.push(L,I,I,N,N,L)}}else return;const y=new(y0(g)?A0:w0)(g,1);y.version=M;const x=a.get(_);x&&e.remove(x),a.set(_,y)}function p(_){const g=a.get(_);if(g){const S=_.index;S!==null&&g.version<S.version&&h(_)}else h(_);return a.get(_)}return{get:c,update:d,getWireframeAttribute:p}}function uw(o,e,t){let i;function s(g){i=g}let a,u;function c(g){a=g.type,u=g.bytesPerElement}function d(g,S){o.drawElements(i,S,a,g*u),t.update(S,i,1)}function h(g,S,E){E!==0&&(o.drawElementsInstanced(i,S,a,g*u,E),t.update(S,i,E))}function p(g,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,S,0,a,g,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];t.update(y,i,1)}function _(g,S,E,M){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<g.length;x++)h(g[x]/u,S[x],M[x]);else{y.multiDrawElementsInstancedWEBGL(i,S,0,a,g,0,M,0,E);let x=0;for(let D=0;D<E;D++)x+=S[D]*M[D];t.update(x,i,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function cw(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=c*(a/3);break;case o.LINES:t.lines+=c*(a/2);break;case o.LINE_STRIP:t.lines+=c*(a-1);break;case o.LINE_LOOP:t.lines+=c*a;break;case o.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function fw(o,e,t){const i=new WeakMap,s=new en;function a(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=p!==void 0?p.length:0;let g=i.get(c);if(g===void 0||g.count!==_){let R=function(){O.dispose(),i.delete(c),c.removeEventListener("dispose",R)};var S=R;g!==void 0&&g.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],D=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let w=0;E===!0&&(w=1),M===!0&&(w=2),y===!0&&(w=3);let L=c.attributes.position.count*w,I=1;L>e.maxTextureSize&&(I=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const N=new Float32Array(L*I*4*_),O=new S0(N,L,I,_);O.type=gr,O.needsUpdate=!0;const A=w*4;for(let z=0;z<_;z++){const j=x[z],K=D[z],ue=P[z],ne=L*I*4*z;for(let J=0;J<j.count;J++){const ie=J*A;E===!0&&(s.fromBufferAttribute(j,J),N[ne+ie+0]=s.x,N[ne+ie+1]=s.y,N[ne+ie+2]=s.z,N[ne+ie+3]=0),M===!0&&(s.fromBufferAttribute(K,J),N[ne+ie+4]=s.x,N[ne+ie+5]=s.y,N[ne+ie+6]=s.z,N[ne+ie+7]=0),y===!0&&(s.fromBufferAttribute(ue,J),N[ne+ie+8]=s.x,N[ne+ie+9]=s.y,N[ne+ie+10]=s.z,N[ne+ie+11]=ue.itemSize===4?s.w:1)}}g={count:_,texture:O,size:new Lt(L,I)},i.set(c,g),c.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const M=c.morphTargetsRelative?1:1-E;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:a}}function dw(o,e,t,i){let s=new WeakMap;function a(d){const h=i.render.frame,p=d.geometry,_=e.get(d,p);if(s.get(_)!==h&&(e.update(_),s.set(_,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),s.get(d)!==h&&(t.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;s.get(g)!==h&&(g.update(),s.set(g,h))}return _}function u(){s=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:u}}const N0=new kn,Hg=new D0(1,1),U0=new S0,F0=new BM,O0=new b0,Gg=[],Wg=[],Xg=new Float32Array(16),jg=new Float32Array(9),Yg=new Float32Array(4);function na(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=Gg[s];if(a===void 0&&(a=new Float32Array(s),Gg[s]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,o[u].toArray(a,c)}return a}function fn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function dn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function dc(o,e){let t=Wg[e];t===void 0&&(t=new Int32Array(e),Wg[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function hw(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function pw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;o.uniform2fv(this.addr,e),dn(t,e)}}function mw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;o.uniform3fv(this.addr,e),dn(t,e)}}function _w(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;o.uniform4fv(this.addr,e),dn(t,e)}}function gw(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;Yg.set(i),o.uniformMatrix2fv(this.addr,!1,Yg),dn(t,i)}}function vw(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;jg.set(i),o.uniformMatrix3fv(this.addr,!1,jg),dn(t,i)}}function xw(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;Xg.set(i),o.uniformMatrix4fv(this.addr,!1,Xg),dn(t,i)}}function yw(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Sw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;o.uniform2iv(this.addr,e),dn(t,e)}}function Mw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;o.uniform3iv(this.addr,e),dn(t,e)}}function Ew(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;o.uniform4iv(this.addr,e),dn(t,e)}}function Tw(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function ww(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;o.uniform2uiv(this.addr,e),dn(t,e)}}function Aw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;o.uniform3uiv(this.addr,e),dn(t,e)}}function Cw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;o.uniform4uiv(this.addr,e),dn(t,e)}}function Rw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(Hg.compareFunction=x0,a=Hg):a=N0,t.setTexture2D(e||a,s)}function bw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||F0,s)}function Pw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||O0,s)}function Dw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||U0,s)}function Lw(o){switch(o){case 5126:return hw;case 35664:return pw;case 35665:return mw;case 35666:return _w;case 35674:return gw;case 35675:return vw;case 35676:return xw;case 5124:case 35670:return yw;case 35667:case 35671:return Sw;case 35668:case 35672:return Mw;case 35669:case 35673:return Ew;case 5125:return Tw;case 36294:return ww;case 36295:return Aw;case 36296:return Cw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return bw;case 35680:case 36300:case 36308:case 36293:return Pw;case 36289:case 36303:case 36311:case 36292:return Dw}}function Iw(o,e){o.uniform1fv(this.addr,e)}function Nw(o,e){const t=na(e,this.size,2);o.uniform2fv(this.addr,t)}function Uw(o,e){const t=na(e,this.size,3);o.uniform3fv(this.addr,t)}function Fw(o,e){const t=na(e,this.size,4);o.uniform4fv(this.addr,t)}function Ow(o,e){const t=na(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function kw(o,e){const t=na(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function zw(o,e){const t=na(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Bw(o,e){o.uniform1iv(this.addr,e)}function Vw(o,e){o.uniform2iv(this.addr,e)}function Hw(o,e){o.uniform3iv(this.addr,e)}function Gw(o,e){o.uniform4iv(this.addr,e)}function Ww(o,e){o.uniform1uiv(this.addr,e)}function Xw(o,e){o.uniform2uiv(this.addr,e)}function jw(o,e){o.uniform3uiv(this.addr,e)}function Yw(o,e){o.uniform4uiv(this.addr,e)}function qw(o,e,t){const i=this.cache,s=e.length,a=dc(t,s);fn(i,a)||(o.uniform1iv(this.addr,a),dn(i,a));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||N0,a[u])}function $w(o,e,t){const i=this.cache,s=e.length,a=dc(t,s);fn(i,a)||(o.uniform1iv(this.addr,a),dn(i,a));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||F0,a[u])}function Kw(o,e,t){const i=this.cache,s=e.length,a=dc(t,s);fn(i,a)||(o.uniform1iv(this.addr,a),dn(i,a));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||O0,a[u])}function Zw(o,e,t){const i=this.cache,s=e.length,a=dc(t,s);fn(i,a)||(o.uniform1iv(this.addr,a),dn(i,a));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||U0,a[u])}function Qw(o){switch(o){case 5126:return Iw;case 35664:return Nw;case 35665:return Uw;case 35666:return Fw;case 35674:return Ow;case 35675:return kw;case 35676:return zw;case 5124:case 35670:return Bw;case 35667:case 35671:return Vw;case 35668:case 35672:return Hw;case 35669:case 35673:return Gw;case 5125:return Ww;case 36294:return Xw;case 36295:return jw;case 36296:return Yw;case 35678:case 36198:case 36298:case 36306:case 35682:return qw;case 35679:case 36299:case 36307:return $w;case 35680:case 36300:case 36308:case 36293:return Kw;case 36289:case 36303:case 36311:case 36292:return Zw}}class Jw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lw(t.type)}}class eA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qw(t.type)}}class tA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,u=s.length;a!==u;++a){const c=s[a];c.setValue(e,t[c.id],i)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function qg(o,e){o.seq.push(e),o.map[e.id]=e}function nA(o,e,t){const i=o.name,s=i.length;for(Nd.lastIndex=0;;){const a=Nd.exec(i),u=Nd.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===s){qg(t,h===void 0?new Jw(c,o,e):new eA(c,o,e));break}else{let _=t.map[c];_===void 0&&(_=new tA(c),qg(t,_)),t=_}}}class Ku{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),u=e.getUniformLocation(t,a.name);nA(a,u,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,u=t.length;a!==u;++a){const c=t[a],d=i[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function $g(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const iA=37297;let rA=0;function sA(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=s;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}const Kg=new ft;function oA(o){Tt._getMatrix(Kg,Tt.workingColorSpace,o);const e=`mat3( ${Kg.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(o)){case rc:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Zg(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),a=(o.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+a+`

`+sA(o.getShaderSource(e),c)}else return a}function aA(o,e){const t=oA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lA(o,e){let t;switch(e){case hM:t="Linear";break;case pM:t="Reinhard";break;case mM:t="Cineon";break;case _M:t="ACESFilmic";break;case vM:t="AgX";break;case xM:t="Neutral";break;case gM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hu=new le;function uA(){Tt.getLuminanceCoefficients(Hu);const o=Hu.x.toFixed(4),e=Hu.y.toFixed(4),t=Hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function fA(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dA(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),u=a.name;let c=1;a.type===o.FLOAT_MAT2&&(c=2),a.type===o.FLOAT_MAT3&&(c=3),a.type===o.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:o.getAttribLocation(e,u),locationSize:c}}return t}function Wa(o){return o!==""}function Qg(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(o){return o.replace(hA,mA)}const pA=new Map;function mA(o,e){let t=dt[e];if(t===void 0){const i=pA.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bh(t)}const _A=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ev(o){return o.replace(_A,gA)}function gA(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function tv(o){let e=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===l0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===jS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===hr&&(e="SHADOWMAP_TYPE_VSM"),e}function xA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Zo:case Qo:e="ENVMAP_TYPE_CUBE";break;case cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Qo:e="ENVMAP_MODE_REFRACTION";break}return e}function SA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case u0:e="ENVMAP_BLENDING_MULTIPLY";break;case fM:e="ENVMAP_BLENDING_MIX";break;case dM:e="ENVMAP_BLENDING_ADD";break}return e}function MA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function EA(o,e,t,i){const s=o.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=vA(t),h=xA(t),p=yA(t),_=SA(t),g=MA(t),S=cA(t),E=fA(a),M=s.createProgram();let y,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Wa).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Wa).join(`
`),x.length>0&&(x+=`
`)):(y=[tv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),x=[tv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==is?"#define TONE_MAPPING":"",t.toneMapping!==is?dt.tonemapping_pars_fragment:"",t.toneMapping!==is?lA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,aA("linearToOutputTexel",t.outputColorSpace),uA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),u=Bh(u),u=Qg(u,t),u=Jg(u,t),c=Bh(c),c=Qg(c,t),c=Jg(c,t),u=ev(u),c=ev(c),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===_g?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=D+y+u,w=D+x+c,L=$g(s,s.VERTEX_SHADER,P),I=$g(s,s.FRAGMENT_SHADER,w);s.attachShader(M,L),s.attachShader(M,I),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function N(z){if(o.debug.checkShaderErrors){const j=s.getProgramInfoLog(M)||"",K=s.getShaderInfoLog(L)||"",ue=s.getShaderInfoLog(I)||"",ne=j.trim(),J=K.trim(),ie=ue.trim();let V=!0,ce=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(V=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,M,L,I);else{const oe=Zg(s,L,"vertex"),k=Zg(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ne+`
`+oe+`
`+k)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(J===""||ie==="")&&(ce=!1);ce&&(z.diagnostics={runnable:V,programLog:ne,vertexShader:{log:J,prefix:y},fragmentShader:{log:ie,prefix:x}})}s.deleteShader(L),s.deleteShader(I),O=new Ku(s,M),A=dA(s,M)}let O;this.getUniforms=function(){return O===void 0&&N(this),O};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,iA)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rA++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=I,this}let TA=0;class wA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new AA(e),t.set(e,i)),i}}class AA{constructor(e){this.id=TA++,this.code=e,this.usedTimes=0}}function CA(o,e,t,i,s,a,u){const c=new M0,d=new wA,h=new Set,p=[],_=s.logarithmicDepthBuffer,g=s.vertexTextures;let S=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return h.add(A),A===0?"uv":`uv${A}`}function y(A,R,z,j,K){const ue=j.fog,ne=K.geometry,J=A.isMeshStandardMaterial?j.environment:null,ie=(A.isMeshStandardMaterial?t:e).get(A.envMap||J),V=ie&&ie.mapping===cc?ie.image.height:null,ce=E[A.type];A.precision!==null&&(S=s.getMaxPrecision(A.precision),S!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",S,"instead."));const oe=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,k=oe!==void 0?oe.length:0;let ee=0;ne.morphAttributes.position!==void 0&&(ee=1),ne.morphAttributes.normal!==void 0&&(ee=2),ne.morphAttributes.color!==void 0&&(ee=3);let Te,Re,Ie,re;if(ce){const yt=Wi[ce];Te=yt.vertexShader,Re=yt.fragmentShader}else Te=A.vertexShader,Re=A.fragmentShader,d.update(A),Ie=d.getVertexShaderID(A),re=d.getFragmentShaderID(A);const de=o.getRenderTarget(),Me=o.state.buffers.depth.getReversed(),Ne=K.isInstancedMesh===!0,ke=K.isBatchedMesh===!0,ht=!!A.map,on=!!A.matcap,B=!!ie,Rt=!!A.aoMap,ut=!!A.lightMap,nt=!!A.bumpMap,Ge=!!A.normalMap,It=!!A.displacementMap,We=!!A.emissiveMap,at=!!A.metalnessMap,zt=!!A.roughnessMap,Bt=A.anisotropy>0,U=A.clearcoat>0,C=A.dispersion>0,Z=A.iridescence>0,he=A.sheen>0,_e=A.transmission>0,fe=Bt&&!!A.anisotropyMap,$e=U&&!!A.clearcoatMap,Ae=U&&!!A.clearcoatNormalMap,Be=U&&!!A.clearcoatRoughnessMap,Ke=Z&&!!A.iridescenceMap,Ee=Z&&!!A.iridescenceThicknessMap,Le=he&&!!A.sheenColorMap,it=he&&!!A.sheenRoughnessMap,Ye=!!A.specularMap,be=!!A.specularColorMap,ct=!!A.specularIntensityMap,G=_e&&!!A.transmissionMap,ye=_e&&!!A.thicknessMap,Ce=!!A.gradientMap,Ue=!!A.alphaMap,xe=A.alphaTest>0,pe=!!A.alphaHash,Xe=!!A.extensions;let lt=is;A.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(lt=o.toneMapping);const At={shaderID:ce,shaderType:A.type,shaderName:A.name,vertexShader:Te,fragmentShader:Re,defines:A.defines,customVertexShaderID:Ie,customFragmentShaderID:re,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:S,batching:ke,batchingColor:ke&&K._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&K.instanceColor!==null,instancingMorph:Ne&&K.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:de===null?o.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Jo,alphaToCoverage:!!A.alphaToCoverage,map:ht,matcap:on,envMap:B,envMapMode:B&&ie.mapping,envMapCubeUVHeight:V,aoMap:Rt,lightMap:ut,bumpMap:nt,normalMap:Ge,displacementMap:g&&It,emissiveMap:We,normalMapObjectSpace:Ge&&A.normalMapType===TM,normalMapTangentSpace:Ge&&A.normalMapType===EM,metalnessMap:at,roughnessMap:zt,anisotropy:Bt,anisotropyMap:fe,clearcoat:U,clearcoatMap:$e,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Be,dispersion:C,iridescence:Z,iridescenceMap:Ke,iridescenceThicknessMap:Ee,sheen:he,sheenColorMap:Le,sheenRoughnessMap:it,specularMap:Ye,specularColorMap:be,specularIntensityMap:ct,transmission:_e,transmissionMap:G,thicknessMap:ye,gradientMap:Ce,opaque:A.transparent===!1&&A.blending===Ho&&A.alphaToCoverage===!1,alphaMap:Ue,alphaTest:xe,alphaHash:pe,combine:A.combine,mapUv:ht&&M(A.map.channel),aoMapUv:Rt&&M(A.aoMap.channel),lightMapUv:ut&&M(A.lightMap.channel),bumpMapUv:nt&&M(A.bumpMap.channel),normalMapUv:Ge&&M(A.normalMap.channel),displacementMapUv:It&&M(A.displacementMap.channel),emissiveMapUv:We&&M(A.emissiveMap.channel),metalnessMapUv:at&&M(A.metalnessMap.channel),roughnessMapUv:zt&&M(A.roughnessMap.channel),anisotropyMapUv:fe&&M(A.anisotropyMap.channel),clearcoatMapUv:$e&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:it&&M(A.sheenRoughnessMap.channel),specularMapUv:Ye&&M(A.specularMap.channel),specularColorMapUv:be&&M(A.specularColorMap.channel),specularIntensityMapUv:ct&&M(A.specularIntensityMap.channel),transmissionMapUv:G&&M(A.transmissionMap.channel),thicknessMapUv:ye&&M(A.thicknessMap.channel),alphaMapUv:Ue&&M(A.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Ge||Bt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ne.attributes.uv&&(ht||Ue),fog:!!ue,useFog:A.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Me,skinning:K.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ee,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:lt,decodeVideoTexture:ht&&A.map.isVideoTexture===!0&&Tt.getTransfer(A.map.colorSpace)===Pt,decodeVideoTextureEmissive:We&&A.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(A.emissiveMap.colorSpace)===Pt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===_r,flipSided:A.side===Kn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Xe&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&A.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return At.vertexUv1s=h.has(1),At.vertexUv2s=h.has(2),At.vertexUv3s=h.has(3),h.clear(),At}function x(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const z in A.defines)R.push(z),R.push(A.defines[z]);return A.isRawShaderMaterial===!1&&(D(R,A),P(R,A),R.push(o.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function D(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function P(A,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),R.gradientMap&&c.enable(22),A.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reversedDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),A.push(c.mask)}function w(A){const R=E[A.type];let z;if(R){const j=Wi[R];z=eE.clone(j.uniforms)}else z=A.uniforms;return z}function L(A,R){let z;for(let j=0,K=p.length;j<K;j++){const ue=p[j];if(ue.cacheKey===R){z=ue,++z.usedTimes;break}}return z===void 0&&(z=new EA(o,R,A,a),p.push(z)),z}function I(A){if(--A.usedTimes===0){const R=p.indexOf(A);p[R]=p[p.length-1],p.pop(),A.destroy()}}function N(A){d.remove(A)}function O(){d.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:w,acquireProgram:L,releaseProgram:I,releaseShaderCache:N,programs:p,dispose:O}}function RA(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let c=o.get(u);return c===void 0&&(c={},o.set(u,c)),c}function i(u){o.delete(u)}function s(u,c,d){o.get(u)[c]=d}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function bA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function nv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function iv(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function u(_,g,S,E,M,y){let x=o[e];return x===void 0?(x={id:_.id,object:_,geometry:g,material:S,groupOrder:E,renderOrder:_.renderOrder,z:M,group:y},o[e]=x):(x.id=_.id,x.object=_,x.geometry=g,x.material=S,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=M,x.group=y),e++,x}function c(_,g,S,E,M,y){const x=u(_,g,S,E,M,y);S.transmission>0?i.push(x):S.transparent===!0?s.push(x):t.push(x)}function d(_,g,S,E,M,y){const x=u(_,g,S,E,M,y);S.transmission>0?i.unshift(x):S.transparent===!0?s.unshift(x):t.unshift(x)}function h(_,g){t.length>1&&t.sort(_||bA),i.length>1&&i.sort(g||nv),s.length>1&&s.sort(g||nv)}function p(){for(let _=e,g=o.length;_<g;_++){const S=o[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:c,unshift:d,finish:p,sort:h}}function PA(){let o=new WeakMap;function e(i,s){const a=o.get(i);let u;return a===void 0?(u=new iv,o.set(i,[u])):s>=a.length?(u=new iv,a.push(u)):u=a[s],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function DA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new Dt};break;case"SpotLight":t={position:new le,direction:new le,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":t={color:new Dt,position:new le,halfWidth:new le,halfHeight:new le};break}return o[e.id]=t,t}}}function LA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let IA=0;function NA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function UA(o){const e=new DA,t=LA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new le);const s=new le,a=new cn,u=new cn;function c(h){let p=0,_=0,g=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let S=0,E=0,M=0,y=0,x=0,D=0,P=0,w=0,L=0,I=0,N=0;h.sort(NA);for(let A=0,R=h.length;A<R;A++){const z=h[A],j=z.color,K=z.intensity,ue=z.distance,ne=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=j.r*K,_+=j.g*K,g+=j.b*K;else if(z.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(z.sh.coefficients[J],K);N++}else if(z.isDirectionalLight){const J=e.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ie=z.shadow,V=t.get(z);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,i.directionalShadow[S]=V,i.directionalShadowMap[S]=ne,i.directionalShadowMatrix[S]=z.shadow.matrix,D++}i.directional[S]=J,S++}else if(z.isSpotLight){const J=e.get(z);J.position.setFromMatrixPosition(z.matrixWorld),J.color.copy(j).multiplyScalar(K),J.distance=ue,J.coneCos=Math.cos(z.angle),J.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),J.decay=z.decay,i.spot[M]=J;const ie=z.shadow;if(z.map&&(i.spotLightMap[L]=z.map,L++,ie.updateMatrices(z),z.castShadow&&I++),i.spotLightMatrix[M]=ie.matrix,z.castShadow){const V=t.get(z);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,i.spotShadow[M]=V,i.spotShadowMap[M]=ne,w++}M++}else if(z.isRectAreaLight){const J=e.get(z);J.color.copy(j).multiplyScalar(K),J.halfWidth.set(z.width*.5,0,0),J.halfHeight.set(0,z.height*.5,0),i.rectArea[y]=J,y++}else if(z.isPointLight){const J=e.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity),J.distance=z.distance,J.decay=z.decay,z.castShadow){const ie=z.shadow,V=t.get(z);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,V.shadowCameraNear=ie.camera.near,V.shadowCameraFar=ie.camera.far,i.pointShadow[E]=V,i.pointShadowMap[E]=ne,i.pointShadowMatrix[E]=z.shadow.matrix,P++}i.point[E]=J,E++}else if(z.isHemisphereLight){const J=e.get(z);J.skyColor.copy(z.color).multiplyScalar(K),J.groundColor.copy(z.groundColor).multiplyScalar(K),i.hemi[x]=J,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=_,i.ambient[2]=g;const O=i.hash;(O.directionalLength!==S||O.pointLength!==E||O.spotLength!==M||O.rectAreaLength!==y||O.hemiLength!==x||O.numDirectionalShadows!==D||O.numPointShadows!==P||O.numSpotShadows!==w||O.numSpotMaps!==L||O.numLightProbes!==N)&&(i.directional.length=S,i.spot.length=M,i.rectArea.length=y,i.point.length=E,i.hemi.length=x,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=w+L-I,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=N,O.directionalLength=S,O.pointLength=E,O.spotLength=M,O.rectAreaLength=y,O.hemiLength=x,O.numDirectionalShadows=D,O.numPointShadows=P,O.numSpotShadows=w,O.numSpotMaps=L,O.numLightProbes=N,i.version=IA++)}function d(h,p){let _=0,g=0,S=0,E=0,M=0;const y=p.matrixWorldInverse;for(let x=0,D=h.length;x<D;x++){const P=h[x];if(P.isDirectionalLight){const w=i.directional[_];w.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(y),_++}else if(P.isSpotLight){const w=i.spot[S];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const w=i.rectArea[E];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(y),u.identity(),a.copy(P.matrixWorld),a.premultiply(y),u.extractRotation(a),w.halfWidth.set(P.width*.5,0,0),w.halfHeight.set(0,P.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(P.isPointLight){const w=i.point[g];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(y),g++}else if(P.isHemisphereLight){const w=i.hemi[M];w.direction.setFromMatrixPosition(P.matrixWorld),w.direction.transformDirection(y),M++}}}return{setup:c,setupView:d,state:i}}function rv(o){const e=new UA(o),t=[],i=[];function s(p){h.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function u(p){i.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:u}}function FA(o){let e=new WeakMap;function t(s,a=0){const u=e.get(s);let c;return u===void 0?(c=new rv(o),e.set(s,[c])):a>=u.length?(c=new rv(o),u.push(c)):c=u[a],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const OA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zA(o,e,t){let i=new P0;const s=new Lt,a=new Lt,u=new en,c=new fE({depthPacking:MM}),d=new dE,h={},p=t.maxTextureSize,_={[os]:Kn,[Kn]:os,[_r]:_r},g=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:OA,fragmentShader:kA}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new qs;E.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new $i(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l0;let x=this.type;this.render=function(I,N,O){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const A=o.getRenderTarget(),R=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),j=o.state;j.setBlending(ns),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const K=x!==hr&&this.type===hr,ue=x===hr&&this.type!==hr;for(let ne=0,J=I.length;ne<J;ne++){const ie=I[ne],V=ie.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ce=V.getFrameExtents();if(s.multiply(ce),a.copy(V.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/ce.x),s.x=a.x*ce.x,V.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/ce.y),s.y=a.y*ce.y,V.mapSize.y=a.y)),V.map===null||K===!0||ue===!0){const k=this.type!==hr?{minFilter:Ai,magFilter:Ai}:{};V.map!==null&&V.map.dispose(),V.map=new js(s.x,s.y,k),V.map.texture.name=ie.name+".shadowMap",V.camera.updateProjectionMatrix()}o.setRenderTarget(V.map),o.clear();const oe=V.getViewportCount();for(let k=0;k<oe;k++){const ee=V.getViewport(k);u.set(a.x*ee.x,a.y*ee.y,a.x*ee.z,a.y*ee.w),j.viewport(u),V.updateMatrices(ie,k),i=V.getFrustum(),w(N,O,V.camera,ie,this.type)}V.isPointLightShadow!==!0&&this.type===hr&&D(V,O),V.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(A,R,z)};function D(I,N){const O=e.update(M);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new js(s.x,s.y)),g.uniforms.shadow_pass.value=I.map.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(N,null,O,g,M,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(N,null,O,S,M,null)}function P(I,N,O,A){let R=null;const z=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(z!==void 0)R=z;else if(R=O.isPointLight===!0?d:c,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const j=R.uuid,K=N.uuid;let ue=h[j];ue===void 0&&(ue={},h[j]=ue);let ne=ue[K];ne===void 0&&(ne=R.clone(),ue[K]=ne,N.addEventListener("dispose",L)),R=ne}if(R.visible=N.visible,R.wireframe=N.wireframe,A===hr?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:_[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,O.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const j=o.properties.get(R);j.light=O}return R}function w(I,N,O,A,R){if(I.visible===!1)return;if(I.layers.test(N.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===hr)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);const K=e.update(I),ue=I.material;if(Array.isArray(ue)){const ne=K.groups;for(let J=0,ie=ne.length;J<ie;J++){const V=ne[J],ce=ue[V.materialIndex];if(ce&&ce.visible){const oe=P(I,ce,A,R);I.onBeforeShadow(o,I,N,O,K,oe,V),o.renderBufferDirect(O,null,K,oe,I,V),I.onAfterShadow(o,I,N,O,K,oe,V)}}}else if(ue.visible){const ne=P(I,ue,A,R);I.onBeforeShadow(o,I,N,O,K,ne,null),o.renderBufferDirect(O,null,K,ne,I,null),I.onAfterShadow(o,I,N,O,K,ne,null)}}const j=I.children;for(let K=0,ue=j.length;K<ue;K++)w(j[K],N,O,A,R)}function L(I){I.target.removeEventListener("dispose",L);for(const O in h){const A=h[O],R=I.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const BA={[eh]:th,[nh]:sh,[ih]:oh,[Ko]:rh,[th]:eh,[sh]:nh,[oh]:ih,[rh]:Ko};function VA(o,e){function t(){let G=!1;const ye=new en;let Ce=null;const Ue=new en(0,0,0,0);return{setMask:function(xe){Ce!==xe&&!G&&(o.colorMask(xe,xe,xe,xe),Ce=xe)},setLocked:function(xe){G=xe},setClear:function(xe,pe,Xe,lt,At){At===!0&&(xe*=lt,pe*=lt,Xe*=lt),ye.set(xe,pe,Xe,lt),Ue.equals(ye)===!1&&(o.clearColor(xe,pe,Xe,lt),Ue.copy(ye))},reset:function(){G=!1,Ce=null,Ue.set(-1,0,0,0)}}}function i(){let G=!1,ye=!1,Ce=null,Ue=null,xe=null;return{setReversed:function(pe){if(ye!==pe){const Xe=e.get("EXT_clip_control");pe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),ye=pe;const lt=xe;xe=null,this.setClear(lt)}},getReversed:function(){return ye},setTest:function(pe){pe?de(o.DEPTH_TEST):Me(o.DEPTH_TEST)},setMask:function(pe){Ce!==pe&&!G&&(o.depthMask(pe),Ce=pe)},setFunc:function(pe){if(ye&&(pe=BA[pe]),Ue!==pe){switch(pe){case eh:o.depthFunc(o.NEVER);break;case th:o.depthFunc(o.ALWAYS);break;case nh:o.depthFunc(o.LESS);break;case Ko:o.depthFunc(o.LEQUAL);break;case ih:o.depthFunc(o.EQUAL);break;case rh:o.depthFunc(o.GEQUAL);break;case sh:o.depthFunc(o.GREATER);break;case oh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ue=pe}},setLocked:function(pe){G=pe},setClear:function(pe){xe!==pe&&(ye&&(pe=1-pe),o.clearDepth(pe),xe=pe)},reset:function(){G=!1,Ce=null,Ue=null,xe=null,ye=!1}}}function s(){let G=!1,ye=null,Ce=null,Ue=null,xe=null,pe=null,Xe=null,lt=null,At=null;return{setTest:function(yt){G||(yt?de(o.STENCIL_TEST):Me(o.STENCIL_TEST))},setMask:function(yt){ye!==yt&&!G&&(o.stencilMask(yt),ye=yt)},setFunc:function(yt,di,Sn){(Ce!==yt||Ue!==di||xe!==Sn)&&(o.stencilFunc(yt,di,Sn),Ce=yt,Ue=di,xe=Sn)},setOp:function(yt,di,Sn){(pe!==yt||Xe!==di||lt!==Sn)&&(o.stencilOp(yt,di,Sn),pe=yt,Xe=di,lt=Sn)},setLocked:function(yt){G=yt},setClear:function(yt){At!==yt&&(o.clearStencil(yt),At=yt)},reset:function(){G=!1,ye=null,Ce=null,Ue=null,xe=null,pe=null,Xe=null,lt=null,At=null}}}const a=new t,u=new i,c=new s,d=new WeakMap,h=new WeakMap;let p={},_={},g=new WeakMap,S=[],E=null,M=!1,y=null,x=null,D=null,P=null,w=null,L=null,I=null,N=new Dt(0,0,0),O=0,A=!1,R=null,z=null,j=null,K=null,ue=null;const ne=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ie=0;const V=o.getParameter(o.VERSION);V.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(V)[1]),J=ie>=1):V.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),J=ie>=2);let ce=null,oe={};const k=o.getParameter(o.SCISSOR_BOX),ee=o.getParameter(o.VIEWPORT),Te=new en().fromArray(k),Re=new en().fromArray(ee);function Ie(G,ye,Ce,Ue){const xe=new Uint8Array(4),pe=o.createTexture();o.bindTexture(G,pe),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Xe=0;Xe<Ce;Xe++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(ye,0,o.RGBA,1,1,Ue,0,o.RGBA,o.UNSIGNED_BYTE,xe):o.texImage2D(ye+Xe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,xe);return pe}const re={};re[o.TEXTURE_2D]=Ie(o.TEXTURE_2D,o.TEXTURE_2D,1),re[o.TEXTURE_CUBE_MAP]=Ie(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[o.TEXTURE_2D_ARRAY]=Ie(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),re[o.TEXTURE_3D]=Ie(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),de(o.DEPTH_TEST),u.setFunc(Ko),nt(!1),Ge(cg),de(o.CULL_FACE),Rt(ns);function de(G){p[G]!==!0&&(o.enable(G),p[G]=!0)}function Me(G){p[G]!==!1&&(o.disable(G),p[G]=!1)}function Ne(G,ye){return _[G]!==ye?(o.bindFramebuffer(G,ye),_[G]=ye,G===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=ye),G===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=ye),!0):!1}function ke(G,ye){let Ce=S,Ue=!1;if(G){Ce=g.get(ye),Ce===void 0&&(Ce=[],g.set(ye,Ce));const xe=G.textures;if(Ce.length!==xe.length||Ce[0]!==o.COLOR_ATTACHMENT0){for(let pe=0,Xe=xe.length;pe<Xe;pe++)Ce[pe]=o.COLOR_ATTACHMENT0+pe;Ce.length=xe.length,Ue=!0}}else Ce[0]!==o.BACK&&(Ce[0]=o.BACK,Ue=!0);Ue&&o.drawBuffers(Ce)}function ht(G){return E!==G?(o.useProgram(G),E=G,!0):!1}const on={[Ns]:o.FUNC_ADD,[qS]:o.FUNC_SUBTRACT,[$S]:o.FUNC_REVERSE_SUBTRACT};on[KS]=o.MIN,on[ZS]=o.MAX;const B={[QS]:o.ZERO,[JS]:o.ONE,[eM]:o.SRC_COLOR,[Qd]:o.SRC_ALPHA,[oM]:o.SRC_ALPHA_SATURATE,[rM]:o.DST_COLOR,[nM]:o.DST_ALPHA,[tM]:o.ONE_MINUS_SRC_COLOR,[Jd]:o.ONE_MINUS_SRC_ALPHA,[sM]:o.ONE_MINUS_DST_COLOR,[iM]:o.ONE_MINUS_DST_ALPHA,[aM]:o.CONSTANT_COLOR,[lM]:o.ONE_MINUS_CONSTANT_COLOR,[uM]:o.CONSTANT_ALPHA,[cM]:o.ONE_MINUS_CONSTANT_ALPHA};function Rt(G,ye,Ce,Ue,xe,pe,Xe,lt,At,yt){if(G===ns){M===!0&&(Me(o.BLEND),M=!1);return}if(M===!1&&(de(o.BLEND),M=!0),G!==YS){if(G!==y||yt!==A){if((x!==Ns||w!==Ns)&&(o.blendEquation(o.FUNC_ADD),x=Ns,w=Ns),yt)switch(G){case Ho:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fg:o.blendFunc(o.ONE,o.ONE);break;case dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ho:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case dg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,P=null,L=null,I=null,N.set(0,0,0),O=0,y=G,A=yt}return}xe=xe||ye,pe=pe||Ce,Xe=Xe||Ue,(ye!==x||xe!==w)&&(o.blendEquationSeparate(on[ye],on[xe]),x=ye,w=xe),(Ce!==D||Ue!==P||pe!==L||Xe!==I)&&(o.blendFuncSeparate(B[Ce],B[Ue],B[pe],B[Xe]),D=Ce,P=Ue,L=pe,I=Xe),(lt.equals(N)===!1||At!==O)&&(o.blendColor(lt.r,lt.g,lt.b,At),N.copy(lt),O=At),y=G,A=!1}function ut(G,ye){G.side===_r?Me(o.CULL_FACE):de(o.CULL_FACE);let Ce=G.side===Kn;ye&&(Ce=!Ce),nt(Ce),G.blending===Ho&&G.transparent===!1?Rt(ns):Rt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),a.setMask(G.colorWrite);const Ue=G.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),We(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?de(o.SAMPLE_ALPHA_TO_COVERAGE):Me(o.SAMPLE_ALPHA_TO_COVERAGE)}function nt(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function Ge(G){G!==WS?(de(o.CULL_FACE),G!==z&&(G===cg?o.cullFace(o.BACK):G===XS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Me(o.CULL_FACE),z=G}function It(G){G!==j&&(J&&o.lineWidth(G),j=G)}function We(G,ye,Ce){G?(de(o.POLYGON_OFFSET_FILL),(K!==ye||ue!==Ce)&&(o.polygonOffset(ye,Ce),K=ye,ue=Ce)):Me(o.POLYGON_OFFSET_FILL)}function at(G){G?de(o.SCISSOR_TEST):Me(o.SCISSOR_TEST)}function zt(G){G===void 0&&(G=o.TEXTURE0+ne-1),ce!==G&&(o.activeTexture(G),ce=G)}function Bt(G,ye,Ce){Ce===void 0&&(ce===null?Ce=o.TEXTURE0+ne-1:Ce=ce);let Ue=oe[Ce];Ue===void 0&&(Ue={type:void 0,texture:void 0},oe[Ce]=Ue),(Ue.type!==G||Ue.texture!==ye)&&(ce!==Ce&&(o.activeTexture(Ce),ce=Ce),o.bindTexture(G,ye||re[G]),Ue.type=G,Ue.texture=ye)}function U(){const G=oe[ce];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function C(){try{o.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Z(){try{o.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{o.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{o.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{o.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{o.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{o.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{o.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{o.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{o.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(G){Te.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),Te.copy(G))}function it(G){Re.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Re.copy(G))}function Ye(G,ye){let Ce=h.get(ye);Ce===void 0&&(Ce=new WeakMap,h.set(ye,Ce));let Ue=Ce.get(G);Ue===void 0&&(Ue=o.getUniformBlockIndex(ye,G.name),Ce.set(G,Ue))}function be(G,ye){const Ue=h.get(ye).get(G);d.get(ye)!==Ue&&(o.uniformBlockBinding(ye,Ue,G.__bindingPointIndex),d.set(ye,Ue))}function ct(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},ce=null,oe={},_={},g=new WeakMap,S=[],E=null,M=!1,y=null,x=null,D=null,P=null,w=null,L=null,I=null,N=new Dt(0,0,0),O=0,A=!1,R=null,z=null,j=null,K=null,ue=null,Te.set(0,0,o.canvas.width,o.canvas.height),Re.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:de,disable:Me,bindFramebuffer:Ne,drawBuffers:ke,useProgram:ht,setBlending:Rt,setMaterial:ut,setFlipSided:nt,setCullFace:Ge,setLineWidth:It,setPolygonOffset:We,setScissorTest:at,activeTexture:zt,bindTexture:Bt,unbindTexture:U,compressedTexImage2D:C,compressedTexImage3D:Z,texImage2D:Ke,texImage3D:Ee,updateUBOMapping:Ye,uniformBlockBinding:be,texStorage2D:Ae,texStorage3D:Be,texSubImage2D:he,texSubImage3D:_e,compressedTexSubImage2D:fe,compressedTexSubImage3D:$e,scissor:Le,viewport:it,reset:ct}}function HA(o,e,t,i,s,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Lt,p=new WeakMap;let _;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,C){return S?new OffscreenCanvas(U,C):oc("canvas")}function M(U,C,Z){let he=1;const _e=Bt(U);if((_e.width>Z||_e.height>Z)&&(he=Z/Math.max(_e.width,_e.height)),he<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const fe=Math.floor(he*_e.width),$e=Math.floor(he*_e.height);_===void 0&&(_=E(fe,$e));const Ae=C?E(fe,$e):_;return Ae.width=fe,Ae.height=$e,Ae.getContext("2d").drawImage(U,0,0,fe,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+$e+")."),Ae}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),U;return U}function y(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(U,C,Z,he,_e=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let fe=C;if(C===o.RED&&(Z===o.FLOAT&&(fe=o.R32F),Z===o.HALF_FLOAT&&(fe=o.R16F),Z===o.UNSIGNED_BYTE&&(fe=o.R8)),C===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(fe=o.R8UI),Z===o.UNSIGNED_SHORT&&(fe=o.R16UI),Z===o.UNSIGNED_INT&&(fe=o.R32UI),Z===o.BYTE&&(fe=o.R8I),Z===o.SHORT&&(fe=o.R16I),Z===o.INT&&(fe=o.R32I)),C===o.RG&&(Z===o.FLOAT&&(fe=o.RG32F),Z===o.HALF_FLOAT&&(fe=o.RG16F),Z===o.UNSIGNED_BYTE&&(fe=o.RG8)),C===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(fe=o.RG8UI),Z===o.UNSIGNED_SHORT&&(fe=o.RG16UI),Z===o.UNSIGNED_INT&&(fe=o.RG32UI),Z===o.BYTE&&(fe=o.RG8I),Z===o.SHORT&&(fe=o.RG16I),Z===o.INT&&(fe=o.RG32I)),C===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(fe=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(fe=o.RGB16UI),Z===o.UNSIGNED_INT&&(fe=o.RGB32UI),Z===o.BYTE&&(fe=o.RGB8I),Z===o.SHORT&&(fe=o.RGB16I),Z===o.INT&&(fe=o.RGB32I)),C===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(fe=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(fe=o.RGBA16UI),Z===o.UNSIGNED_INT&&(fe=o.RGBA32UI),Z===o.BYTE&&(fe=o.RGBA8I),Z===o.SHORT&&(fe=o.RGBA16I),Z===o.INT&&(fe=o.RGBA32I)),C===o.RGB&&(Z===o.UNSIGNED_INT_5_9_9_9_REV&&(fe=o.RGB9_E5),Z===o.UNSIGNED_INT_10F_11F_11F_REV&&(fe=o.R11F_G11F_B10F)),C===o.RGBA){const $e=_e?rc:Tt.getTransfer(he);Z===o.FLOAT&&(fe=o.RGBA32F),Z===o.HALF_FLOAT&&(fe=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(fe=$e===Pt?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(fe=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(fe=o.RGB5_A1)}return(fe===o.R16F||fe===o.R32F||fe===o.RG16F||fe===o.RG32F||fe===o.RGBA16F||fe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function w(U,C){let Z;return U?C===null||C===Xs||C===nl?Z=o.DEPTH24_STENCIL8:C===gr?Z=o.DEPTH32F_STENCIL8:C===tl&&(Z=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Xs||C===nl?Z=o.DEPTH_COMPONENT24:C===gr?Z=o.DEPTH_COMPONENT32F:C===tl&&(Z=o.DEPTH_COMPONENT16),Z}function L(U,C){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ai&&U.minFilter!==Yi?Math.log2(Math.max(C.width,C.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?C.mipmaps.length:1}function I(U){const C=U.target;C.removeEventListener("dispose",I),O(C),C.isVideoTexture&&p.delete(C)}function N(U){const C=U.target;C.removeEventListener("dispose",N),R(C)}function O(U){const C=i.get(U);if(C.__webglInit===void 0)return;const Z=U.source,he=g.get(Z);if(he){const _e=he[C.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&A(U),Object.keys(he).length===0&&g.delete(Z)}i.remove(U)}function A(U){const C=i.get(U);o.deleteTexture(C.__webglTexture);const Z=U.source,he=g.get(Z);delete he[C.__cacheKey],u.memory.textures--}function R(U){const C=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(C.__webglFramebuffer[he]))for(let _e=0;_e<C.__webglFramebuffer[he].length;_e++)o.deleteFramebuffer(C.__webglFramebuffer[he][_e]);else o.deleteFramebuffer(C.__webglFramebuffer[he]);C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer[he])}else{if(Array.isArray(C.__webglFramebuffer))for(let he=0;he<C.__webglFramebuffer.length;he++)o.deleteFramebuffer(C.__webglFramebuffer[he]);else o.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&o.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let he=0;he<C.__webglColorRenderbuffer.length;he++)C.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(C.__webglColorRenderbuffer[he]);C.__webglDepthRenderbuffer&&o.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const Z=U.textures;for(let he=0,_e=Z.length;he<_e;he++){const fe=i.get(Z[he]);fe.__webglTexture&&(o.deleteTexture(fe.__webglTexture),u.memory.textures--),i.remove(Z[he])}i.remove(U)}let z=0;function j(){z=0}function K(){const U=z;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),z+=1,U}function ue(U){const C=[];return C.push(U.wrapS),C.push(U.wrapT),C.push(U.wrapR||0),C.push(U.magFilter),C.push(U.minFilter),C.push(U.anisotropy),C.push(U.internalFormat),C.push(U.format),C.push(U.type),C.push(U.generateMipmaps),C.push(U.premultiplyAlpha),C.push(U.flipY),C.push(U.unpackAlignment),C.push(U.colorSpace),C.join()}function ne(U,C){const Z=i.get(U);if(U.isVideoTexture&&at(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Z.__version!==U.version){const he=U.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(Z,U,C);return}}else U.isExternalTexture&&(Z.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+C)}function J(U,C){const Z=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){re(Z,U,C);return}t.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+C)}function ie(U,C){const Z=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){re(Z,U,C);return}t.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+C)}function V(U,C){const Z=i.get(U);if(U.version>0&&Z.__version!==U.version){de(Z,U,C);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+C)}const ce={[uh]:o.REPEAT,[Os]:o.CLAMP_TO_EDGE,[ch]:o.MIRRORED_REPEAT},oe={[Ai]:o.NEAREST,[yM]:o.NEAREST_MIPMAP_NEAREST,[Su]:o.NEAREST_MIPMAP_LINEAR,[Yi]:o.LINEAR,[rd]:o.LINEAR_MIPMAP_NEAREST,[ks]:o.LINEAR_MIPMAP_LINEAR},k={[wM]:o.NEVER,[DM]:o.ALWAYS,[AM]:o.LESS,[x0]:o.LEQUAL,[CM]:o.EQUAL,[PM]:o.GEQUAL,[RM]:o.GREATER,[bM]:o.NOTEQUAL};function ee(U,C){if(C.type===gr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Yi||C.magFilter===rd||C.magFilter===Su||C.magFilter===ks||C.minFilter===Yi||C.minFilter===rd||C.minFilter===Su||C.minFilter===ks)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,ce[C.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,ce[C.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,ce[C.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,oe[C.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,oe[C.minFilter]),C.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,k[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Ai||C.minFilter!==Su&&C.minFilter!==ks||C.type===gr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Te(U,C){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,C.addEventListener("dispose",I));const he=C.source;let _e=g.get(he);_e===void 0&&(_e={},g.set(he,_e));const fe=ue(C);if(fe!==U.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),_e[fe].usedTimes++;const $e=_e[U.__cacheKey];$e!==void 0&&(_e[U.__cacheKey].usedTimes--,$e.usedTimes===0&&A(C)),U.__cacheKey=fe,U.__webglTexture=_e[fe].texture}return Z}function Re(U,C,Z){return Math.floor(Math.floor(U/Z)/C)}function Ie(U,C,Z,he){const fe=U.updateRanges;if(fe.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,C.width,C.height,Z,he,C.data);else{fe.sort((Ee,Le)=>Ee.start-Le.start);let $e=0;for(let Ee=1;Ee<fe.length;Ee++){const Le=fe[$e],it=fe[Ee],Ye=Le.start+Le.count,be=Re(it.start,C.width,4),ct=Re(Le.start,C.width,4);it.start<=Ye+1&&be===ct&&Re(it.start+it.count-1,C.width,4)===be?Le.count=Math.max(Le.count,it.start+it.count-Le.start):(++$e,fe[$e]=it)}fe.length=$e+1;const Ae=o.getParameter(o.UNPACK_ROW_LENGTH),Be=o.getParameter(o.UNPACK_SKIP_PIXELS),Ke=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,C.width);for(let Ee=0,Le=fe.length;Ee<Le;Ee++){const it=fe[Ee],Ye=Math.floor(it.start/4),be=Math.ceil(it.count/4),ct=Ye%C.width,G=Math.floor(Ye/C.width),ye=be,Ce=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ct),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),t.texSubImage2D(o.TEXTURE_2D,0,ct,G,ye,Ce,Z,he,C.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ae),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Be),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ke)}}function re(U,C,Z){let he=o.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),C.isData3DTexture&&(he=o.TEXTURE_3D);const _e=Te(U,C),fe=C.source;t.bindTexture(he,U.__webglTexture,o.TEXTURE0+Z);const $e=i.get(fe);if(fe.version!==$e.__version||_e===!0){t.activeTexture(o.TEXTURE0+Z);const Ae=Tt.getPrimaries(Tt.workingColorSpace),Be=C.colorSpace===Kr?null:Tt.getPrimaries(C.colorSpace),Ke=C.colorSpace===Kr||Ae===Be?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let Ee=M(C.image,!1,s.maxTextureSize);Ee=zt(C,Ee);const Le=a.convert(C.format,C.colorSpace),it=a.convert(C.type);let Ye=P(C.internalFormat,Le,it,C.colorSpace,C.isVideoTexture);ee(he,C);let be;const ct=C.mipmaps,G=C.isVideoTexture!==!0,ye=$e.__version===void 0||_e===!0,Ce=fe.dataReady,Ue=L(C,Ee);if(C.isDepthTexture)Ye=w(C.format===rl,C.type),ye&&(G?t.texStorage2D(o.TEXTURE_2D,1,Ye,Ee.width,Ee.height):t.texImage2D(o.TEXTURE_2D,0,Ye,Ee.width,Ee.height,0,Le,it,null));else if(C.isDataTexture)if(ct.length>0){G&&ye&&t.texStorage2D(o.TEXTURE_2D,Ue,Ye,ct[0].width,ct[0].height);for(let xe=0,pe=ct.length;xe<pe;xe++)be=ct[xe],G?Ce&&t.texSubImage2D(o.TEXTURE_2D,xe,0,0,be.width,be.height,Le,it,be.data):t.texImage2D(o.TEXTURE_2D,xe,Ye,be.width,be.height,0,Le,it,be.data);C.generateMipmaps=!1}else G?(ye&&t.texStorage2D(o.TEXTURE_2D,Ue,Ye,Ee.width,Ee.height),Ce&&Ie(C,Ee,Le,it)):t.texImage2D(o.TEXTURE_2D,0,Ye,Ee.width,Ee.height,0,Le,it,Ee.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){G&&ye&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ue,Ye,ct[0].width,ct[0].height,Ee.depth);for(let xe=0,pe=ct.length;xe<pe;xe++)if(be=ct[xe],C.format!==ki)if(Le!==null)if(G){if(Ce)if(C.layerUpdates.size>0){const Xe=Ng(be.width,be.height,C.format,C.type);for(const lt of C.layerUpdates){const At=be.data.subarray(lt*Xe/be.data.BYTES_PER_ELEMENT,(lt+1)*Xe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,lt,be.width,be.height,1,Le,At)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,0,be.width,be.height,Ee.depth,Le,be.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xe,Ye,be.width,be.height,Ee.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ce&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,0,be.width,be.height,Ee.depth,Le,it,be.data):t.texImage3D(o.TEXTURE_2D_ARRAY,xe,Ye,be.width,be.height,Ee.depth,0,Le,it,be.data)}else{G&&ye&&t.texStorage2D(o.TEXTURE_2D,Ue,Ye,ct[0].width,ct[0].height);for(let xe=0,pe=ct.length;xe<pe;xe++)be=ct[xe],C.format!==ki?Le!==null?G?Ce&&t.compressedTexSubImage2D(o.TEXTURE_2D,xe,0,0,be.width,be.height,Le,be.data):t.compressedTexImage2D(o.TEXTURE_2D,xe,Ye,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ce&&t.texSubImage2D(o.TEXTURE_2D,xe,0,0,be.width,be.height,Le,it,be.data):t.texImage2D(o.TEXTURE_2D,xe,Ye,be.width,be.height,0,Le,it,be.data)}else if(C.isDataArrayTexture)if(G){if(ye&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ue,Ye,Ee.width,Ee.height,Ee.depth),Ce)if(C.layerUpdates.size>0){const xe=Ng(Ee.width,Ee.height,C.format,C.type);for(const pe of C.layerUpdates){const Xe=Ee.data.subarray(pe*xe/Ee.data.BYTES_PER_ELEMENT,(pe+1)*xe/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,Le,it,Xe)}C.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Le,it,Ee.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Ye,Ee.width,Ee.height,Ee.depth,0,Le,it,Ee.data);else if(C.isData3DTexture)G?(ye&&t.texStorage3D(o.TEXTURE_3D,Ue,Ye,Ee.width,Ee.height,Ee.depth),Ce&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Le,it,Ee.data)):t.texImage3D(o.TEXTURE_3D,0,Ye,Ee.width,Ee.height,Ee.depth,0,Le,it,Ee.data);else if(C.isFramebufferTexture){if(ye)if(G)t.texStorage2D(o.TEXTURE_2D,Ue,Ye,Ee.width,Ee.height);else{let xe=Ee.width,pe=Ee.height;for(let Xe=0;Xe<Ue;Xe++)t.texImage2D(o.TEXTURE_2D,Xe,Ye,xe,pe,0,Le,it,null),xe>>=1,pe>>=1}}else if(ct.length>0){if(G&&ye){const xe=Bt(ct[0]);t.texStorage2D(o.TEXTURE_2D,Ue,Ye,xe.width,xe.height)}for(let xe=0,pe=ct.length;xe<pe;xe++)be=ct[xe],G?Ce&&t.texSubImage2D(o.TEXTURE_2D,xe,0,0,Le,it,be):t.texImage2D(o.TEXTURE_2D,xe,Ye,Le,it,be);C.generateMipmaps=!1}else if(G){if(ye){const xe=Bt(Ee);t.texStorage2D(o.TEXTURE_2D,Ue,Ye,xe.width,xe.height)}Ce&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Le,it,Ee)}else t.texImage2D(o.TEXTURE_2D,0,Ye,Le,it,Ee);y(C)&&x(he),$e.__version=fe.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function de(U,C,Z){if(C.image.length!==6)return;const he=Te(U,C),_e=C.source;t.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+Z);const fe=i.get(_e);if(_e.version!==fe.__version||he===!0){t.activeTexture(o.TEXTURE0+Z);const $e=Tt.getPrimaries(Tt.workingColorSpace),Ae=C.colorSpace===Kr?null:Tt.getPrimaries(C.colorSpace),Be=C.colorSpace===Kr||$e===Ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const Ke=C.isCompressedTexture||C.image[0].isCompressedTexture,Ee=C.image[0]&&C.image[0].isDataTexture,Le=[];for(let pe=0;pe<6;pe++)!Ke&&!Ee?Le[pe]=M(C.image[pe],!0,s.maxCubemapSize):Le[pe]=Ee?C.image[pe].image:C.image[pe],Le[pe]=zt(C,Le[pe]);const it=Le[0],Ye=a.convert(C.format,C.colorSpace),be=a.convert(C.type),ct=P(C.internalFormat,Ye,be,C.colorSpace),G=C.isVideoTexture!==!0,ye=fe.__version===void 0||he===!0,Ce=_e.dataReady;let Ue=L(C,it);ee(o.TEXTURE_CUBE_MAP,C);let xe;if(Ke){G&&ye&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Ue,ct,it.width,it.height);for(let pe=0;pe<6;pe++){xe=Le[pe].mipmaps;for(let Xe=0;Xe<xe.length;Xe++){const lt=xe[Xe];C.format!==ki?Ye!==null?G?Ce&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,0,0,lt.width,lt.height,Ye,lt.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,ct,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ce&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,0,0,lt.width,lt.height,Ye,be,lt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,ct,lt.width,lt.height,0,Ye,be,lt.data)}}}else{if(xe=C.mipmaps,G&&ye){xe.length>0&&Ue++;const pe=Bt(Le[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Ue,ct,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){G?Ce&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Le[pe].width,Le[pe].height,Ye,be,Le[pe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ct,Le[pe].width,Le[pe].height,0,Ye,be,Le[pe].data);for(let Xe=0;Xe<xe.length;Xe++){const At=xe[Xe].image[pe].image;G?Ce&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,0,0,At.width,At.height,Ye,be,At.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,ct,At.width,At.height,0,Ye,be,At.data)}}else{G?Ce&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ye,be,Le[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ct,Ye,be,Le[pe]);for(let Xe=0;Xe<xe.length;Xe++){const lt=xe[Xe];G?Ce&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,0,0,Ye,be,lt.image[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,ct,Ye,be,lt.image[pe])}}}y(C)&&x(o.TEXTURE_CUBE_MAP),fe.__version=_e.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function Me(U,C,Z,he,_e,fe){const $e=a.convert(Z.format,Z.colorSpace),Ae=a.convert(Z.type),Be=P(Z.internalFormat,$e,Ae,Z.colorSpace),Ke=i.get(C),Ee=i.get(Z);if(Ee.__renderTarget=C,!Ke.__hasExternalTextures){const Le=Math.max(1,C.width>>fe),it=Math.max(1,C.height>>fe);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?t.texImage3D(_e,fe,Be,Le,it,C.depth,0,$e,Ae,null):t.texImage2D(_e,fe,Be,Le,it,0,$e,Ae,null)}t.bindFramebuffer(o.FRAMEBUFFER,U),We(C)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,_e,Ee.__webglTexture,0,It(C)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,_e,Ee.__webglTexture,fe),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ne(U,C,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,U),C.depthBuffer){const he=C.depthTexture,_e=he&&he.isDepthTexture?he.type:null,fe=w(C.stencilBuffer,_e),$e=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=It(C);We(C)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ae,fe,C.width,C.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae,fe,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,fe,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,$e,o.RENDERBUFFER,U)}else{const he=C.textures;for(let _e=0;_e<he.length;_e++){const fe=he[_e],$e=a.convert(fe.format,fe.colorSpace),Ae=a.convert(fe.type),Be=P(fe.internalFormat,$e,Ae,fe.colorSpace),Ke=It(C);Z&&We(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ke,Be,C.width,C.height):We(C)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ke,Be,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,Be,C.width,C.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ke(U,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,U),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=i.get(C.depthTexture);he.__renderTarget=C,(!he.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ne(C.depthTexture,0);const _e=he.__webglTexture,fe=It(C);if(C.depthTexture.format===il)We(C)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0,fe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0);else if(C.depthTexture.format===rl)We(C)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0,fe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function ht(U){const C=i.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==U.depthTexture){const he=U.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),he){const _e=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,he.removeEventListener("dispose",_e)};he.addEventListener("dispose",_e),C.__depthDisposeCallback=_e}C.__boundDepthTexture=he}if(U.depthTexture&&!C.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const he=U.texture.mipmaps;he&&he.length>0?ke(C.__webglFramebuffer[0],U):ke(C.__webglFramebuffer,U)}else if(Z){C.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[he]),C.__webglDepthbuffer[he]===void 0)C.__webglDepthbuffer[he]=o.createRenderbuffer(),Ne(C.__webglDepthbuffer[he],U,!1);else{const _e=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=C.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,fe)}}else{const he=U.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=o.createRenderbuffer(),Ne(C.__webglDepthbuffer,U,!1);else{const _e=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=C.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,fe)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function on(U,C,Z){const he=i.get(U);C!==void 0&&Me(he.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&ht(U)}function B(U){const C=U.texture,Z=i.get(U),he=i.get(C);U.addEventListener("dispose",N);const _e=U.textures,fe=U.isWebGLCubeRenderTarget===!0,$e=_e.length>1;if($e||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=C.version,u.memory.textures++),fe){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let Be=0;Be<C.mipmaps.length;Be++)Z.__webglFramebuffer[Ae][Be]=o.createFramebuffer()}else Z.__webglFramebuffer[Ae]=o.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<C.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if($e)for(let Ae=0,Be=_e.length;Ae<Be;Ae++){const Ke=i.get(_e[Ae]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=o.createTexture(),u.memory.textures++)}if(U.samples>0&&We(U)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Be=_e[Ae];Z.__webglColorRenderbuffer[Ae]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae]);const Ke=a.convert(Be.format,Be.colorSpace),Ee=a.convert(Be.type),Le=P(Be.internalFormat,Ke,Ee,Be.colorSpace,U.isXRRenderTarget===!0),it=It(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,it,Le,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),Ne(Z.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(fe){t.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),ee(o.TEXTURE_CUBE_MAP,C);for(let Ae=0;Ae<6;Ae++)if(C.mipmaps&&C.mipmaps.length>0)for(let Be=0;Be<C.mipmaps.length;Be++)Me(Z.__webglFramebuffer[Ae][Be],U,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Be);else Me(Z.__webglFramebuffer[Ae],U,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(C)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Ae=0,Be=_e.length;Ae<Be;Ae++){const Ke=_e[Ae],Ee=i.get(Ke);let Le=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Le=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Le,Ee.__webglTexture),ee(Le,Ke),Me(Z.__webglFramebuffer,U,Ke,o.COLOR_ATTACHMENT0+Ae,Le,0),y(Ke)&&x(Le)}t.unbindTexture()}else{let Ae=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ae=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ae,he.__webglTexture),ee(Ae,C),C.mipmaps&&C.mipmaps.length>0)for(let Be=0;Be<C.mipmaps.length;Be++)Me(Z.__webglFramebuffer[Be],U,C,o.COLOR_ATTACHMENT0,Ae,Be);else Me(Z.__webglFramebuffer,U,C,o.COLOR_ATTACHMENT0,Ae,0);y(C)&&x(Ae),t.unbindTexture()}U.depthBuffer&&ht(U)}function Rt(U){const C=U.textures;for(let Z=0,he=C.length;Z<he;Z++){const _e=C[Z];if(y(_e)){const fe=D(U),$e=i.get(_e).__webglTexture;t.bindTexture(fe,$e),x(fe),t.unbindTexture()}}}const ut=[],nt=[];function Ge(U){if(U.samples>0){if(We(U)===!1){const C=U.textures,Z=U.width,he=U.height;let _e=o.COLOR_BUFFER_BIT;const fe=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,$e=i.get(U),Ae=C.length>1;if(Ae)for(let Ke=0;Ke<C.length;Ke++)t.bindFramebuffer(o.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,$e.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Be=U.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Ke=0;Ke<C.length;Ke++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),Ae){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,$e.__webglColorRenderbuffer[Ke]);const Ee=i.get(C[Ke]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ee,0)}o.blitFramebuffer(0,0,Z,he,0,0,Z,he,_e,o.NEAREST),d===!0&&(ut.length=0,nt.length=0,ut.push(o.COLOR_ATTACHMENT0+Ke),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ut.push(fe),nt.push(fe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,nt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ae)for(let Ke=0;Ke<C.length;Ke++){t.bindFramebuffer(o.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.RENDERBUFFER,$e.__webglColorRenderbuffer[Ke]);const Ee=i.get(C[Ke]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,$e.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.TEXTURE_2D,Ee,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&d){const C=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[C])}}}function It(U){return Math.min(s.maxSamples,U.samples)}function We(U){const C=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function at(U){const C=u.render.frame;p.get(U)!==C&&(p.set(U,C),U.update())}function zt(U,C){const Z=U.colorSpace,he=U.format,_e=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Z!==Jo&&Z!==Kr&&(Tt.getTransfer(Z)===Pt?(he!==ki||_e!==Sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),C}function Bt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=K,this.resetTextureUnits=j,this.setTexture2D=ne,this.setTexture2DArray=J,this.setTexture3D=ie,this.setTextureCube=V,this.rebindTextures=on,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=We}function GA(o,e){function t(i,s=Kr){let a;const u=Tt.getTransfer(s);if(i===Sr)return o.UNSIGNED_BYTE;if(i===lp)return o.UNSIGNED_SHORT_4_4_4_4;if(i===up)return o.UNSIGNED_SHORT_5_5_5_1;if(i===h0)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===p0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(i===f0)return o.BYTE;if(i===d0)return o.SHORT;if(i===tl)return o.UNSIGNED_SHORT;if(i===ap)return o.INT;if(i===Xs)return o.UNSIGNED_INT;if(i===gr)return o.FLOAT;if(i===al)return o.HALF_FLOAT;if(i===m0)return o.ALPHA;if(i===_0)return o.RGB;if(i===ki)return o.RGBA;if(i===il)return o.DEPTH_COMPONENT;if(i===rl)return o.DEPTH_STENCIL;if(i===g0)return o.RED;if(i===cp)return o.RED_INTEGER;if(i===v0)return o.RG;if(i===fp)return o.RG_INTEGER;if(i===dp)return o.RGBA_INTEGER;if(i===ju||i===Yu||i===qu||i===$u)if(u===Pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ju)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$u)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ju)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$u)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fh||i===dh||i===hh||i===ph)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===fh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ph)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mh||i===_h||i===gh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===mh||i===_h)return u===Pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===gh)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vh||i===xh||i===yh||i===Sh||i===Mh||i===Eh||i===Th||i===wh||i===Ah||i===Ch||i===Rh||i===bh||i===Ph||i===Dh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===vh)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xh)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yh)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sh)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mh)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Eh)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Th)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wh)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ah)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ch)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rh)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bh)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ph)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dh)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lh||i===Ih||i===Nh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Lh)return u===Pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ih)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uh||i===Fh||i===Oh||i===kh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Uh)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Fh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nl?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const WA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XA=`
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

}`;class jA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new L0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Er({vertexShader:WA,fragmentShader:XA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $i(new dl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YA extends ta{constructor(e,t){super();const i=this;let s=null,a=1,u=null,c="local-floor",d=1,h=null,p=null,_=null,g=null,S=null,E=null;const M=typeof XRWebGLBinding<"u",y=new jA,x={},D=t.getContextAttributes();let P=null,w=null;const L=[],I=[],N=new Lt;let O=null;const A=new Mi;A.viewport=new en;const R=new Mi;R.viewport=new en;const z=[A,R],j=new pE;let K=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let de=L[re];return de===void 0&&(de=new Cd,L[re]=de),de.getTargetRaySpace()},this.getControllerGrip=function(re){let de=L[re];return de===void 0&&(de=new Cd,L[re]=de),de.getGripSpace()},this.getHand=function(re){let de=L[re];return de===void 0&&(de=new Cd,L[re]=de),de.getHandSpace()};function ne(re){const de=I.indexOf(re.inputSource);if(de===-1)return;const Me=L[de];Me!==void 0&&(Me.update(re.inputSource,re.frame,h||u),Me.dispatchEvent({type:re.type,data:re.inputSource}))}function J(){s.removeEventListener("select",ne),s.removeEventListener("selectstart",ne),s.removeEventListener("selectend",ne),s.removeEventListener("squeeze",ne),s.removeEventListener("squeezestart",ne),s.removeEventListener("squeezeend",ne),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ie);for(let re=0;re<L.length;re++){const de=I[re];de!==null&&(I[re]=null,L[re].disconnect(de))}K=null,ue=null,y.reset();for(const re in x)delete x[re];e.setRenderTarget(P),S=null,g=null,_=null,s=null,w=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){c=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return _===null&&M&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",ne),s.addEventListener("selectstart",ne),s.addEventListener("selectend",ne),s.addEventListener("squeeze",ne),s.addEventListener("squeezestart",ne),s.addEventListener("squeezeend",ne),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ie),D.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(N),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ne=null,ke=null;D.depth&&(ke=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=D.stencil?rl:il,Ne=D.stencil?nl:Xs);const ht={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:a};_=this.getBinding(),g=_.createProjectionLayer(ht),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new js(g.textureWidth,g.textureHeight,{format:ki,type:Sr,depthTexture:new D0(g.textureWidth,g.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),w=new js(S.framebufferWidth,S.framebufferHeight,{format:ki,type:Sr,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await s.requestReferenceSpace(c),Ie.setContext(s),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ie(re){for(let de=0;de<re.removed.length;de++){const Me=re.removed[de],Ne=I.indexOf(Me);Ne>=0&&(I[Ne]=null,L[Ne].disconnect(Me))}for(let de=0;de<re.added.length;de++){const Me=re.added[de];let Ne=I.indexOf(Me);if(Ne===-1){for(let ht=0;ht<L.length;ht++)if(ht>=I.length){I.push(Me),Ne=ht;break}else if(I[ht]===null){I[ht]=Me,Ne=ht;break}if(Ne===-1)break}const ke=L[Ne];ke&&ke.connect(Me)}}const V=new le,ce=new le;function oe(re,de,Me){V.setFromMatrixPosition(de.matrixWorld),ce.setFromMatrixPosition(Me.matrixWorld);const Ne=V.distanceTo(ce),ke=de.projectionMatrix.elements,ht=Me.projectionMatrix.elements,on=ke[14]/(ke[10]-1),B=ke[14]/(ke[10]+1),Rt=(ke[9]+1)/ke[5],ut=(ke[9]-1)/ke[5],nt=(ke[8]-1)/ke[0],Ge=(ht[8]+1)/ht[0],It=on*nt,We=on*Ge,at=Ne/(-nt+Ge),zt=at*-nt;if(de.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(zt),re.translateZ(at),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),ke[10]===-1)re.projectionMatrix.copy(de.projectionMatrix),re.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Bt=on+at,U=B+at,C=It-zt,Z=We+(Ne-zt),he=Rt*B/U*Bt,_e=ut*B/U*Bt;re.projectionMatrix.makePerspective(C,Z,he,_e,Bt,U),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function k(re,de){de===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(de.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let de=re.near,Me=re.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),j.near=R.near=A.near=de,j.far=R.far=A.far=Me,(K!==j.near||ue!==j.far)&&(s.updateRenderState({depthNear:j.near,depthFar:j.far}),K=j.near,ue=j.far),j.layers.mask=re.layers.mask|6,A.layers.mask=j.layers.mask&3,R.layers.mask=j.layers.mask&5;const Ne=re.parent,ke=j.cameras;k(j,Ne);for(let ht=0;ht<ke.length;ht++)k(ke[ht],Ne);ke.length===2?oe(j,A,R):j.projectionMatrix.copy(A.projectionMatrix),ee(re,j,Ne)};function ee(re,de,Me){Me===null?re.matrix.copy(de.matrixWorld):(re.matrix.copy(Me.matrixWorld),re.matrix.invert(),re.matrix.multiply(de.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(de.projectionMatrix),re.projectionMatrixInverse.copy(de.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=zh*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&S===null))return d},this.setFoveation=function(re){d=re,g!==null&&(g.fixedFoveation=re),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=re)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(re){return x[re]};let Te=null;function Re(re,de){if(p=de.getViewerPose(h||u),E=de,p!==null){const Me=p.views;S!==null&&(e.setRenderTargetFramebuffer(w,S.framebuffer),e.setRenderTarget(w));let Ne=!1;Me.length!==j.cameras.length&&(j.cameras.length=0,Ne=!0);for(let B=0;B<Me.length;B++){const Rt=Me[B];let ut=null;if(S!==null)ut=S.getViewport(Rt);else{const Ge=_.getViewSubImage(g,Rt);ut=Ge.viewport,B===0&&(e.setRenderTargetTextures(w,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(w))}let nt=z[B];nt===void 0&&(nt=new Mi,nt.layers.enable(B),nt.viewport=new en,z[B]=nt),nt.matrix.fromArray(Rt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Rt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(ut.x,ut.y,ut.width,ut.height),B===0&&(j.matrix.copy(nt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ne===!0&&j.cameras.push(nt)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){_=i.getBinding();const B=_.getDepthInformation(Me[0]);B&&B.isValid&&B.texture&&y.init(B,s.renderState)}if(ke&&ke.includes("camera-access")&&M){e.state.unbindTexture(),_=i.getBinding();for(let B=0;B<Me.length;B++){const Rt=Me[B].camera;if(Rt){let ut=x[Rt];ut||(ut=new L0,x[Rt]=ut);const nt=_.getCameraImage(Rt);ut.sourceTexture=nt}}}}for(let Me=0;Me<L.length;Me++){const Ne=I[Me],ke=L[Me];Ne!==null&&ke!==void 0&&ke.update(Ne,de,h||u)}Te&&Te(re,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),E=null}const Ie=new I0;Ie.setAnimationLoop(Re),this.setAnimationLoop=function(re){Te=re},this.dispose=function(){}}}const Ps=new Mr,qA=new cn;function $A(o,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function i(y,x){x.color.getRGB(y.fogColor.value,C0(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function s(y,x,D,P,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(y,x):x.isMeshToonMaterial?(a(y,x),_(y,x)):x.isMeshPhongMaterial?(a(y,x),p(y,x)):x.isMeshStandardMaterial?(a(y,x),g(y,x),x.isMeshPhysicalMaterial&&S(y,x,w)):x.isMeshMatcapMaterial?(a(y,x),E(y,x)):x.isMeshDepthMaterial?a(y,x):x.isMeshDistanceMaterial?(a(y,x),M(y,x)):x.isMeshNormalMaterial?a(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&c(y,x)):x.isPointsMaterial?d(y,x,D,P):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Kn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Kn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x),P=D.envMap,w=D.envMapRotation;P&&(y.envMap.value=P,Ps.copy(w),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),y.envMapRotation.value.setFromMatrix4(qA.makeRotationFromEuler(Ps)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function c(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,D,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=P*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,D){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Kn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function M(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function KA(o,e,t,i){let s={},a={},u=[];const c=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,P){const w=P.program;i.uniformBlockBinding(D,w)}function h(D,P){let w=s[D.id];w===void 0&&(E(D),w=p(D),s[D.id]=w,D.addEventListener("dispose",y));const L=P.program;i.updateUBOMapping(D,L);const I=e.render.frame;a[D.id]!==I&&(g(D),a[D.id]=I)}function p(D){const P=_();D.__bindingPointIndex=P;const w=o.createBuffer(),L=D.__size,I=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,L,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,w),w}function _(){for(let D=0;D<c;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const P=s[D.id],w=D.uniforms,L=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let I=0,N=w.length;I<N;I++){const O=Array.isArray(w[I])?w[I]:[w[I]];for(let A=0,R=O.length;A<R;A++){const z=O[A];if(S(z,I,A,L)===!0){const j=z.__offset,K=Array.isArray(z.value)?z.value:[z.value];let ue=0;for(let ne=0;ne<K.length;ne++){const J=K[ne],ie=M(J);typeof J=="number"||typeof J=="boolean"?(z.__data[0]=J,o.bufferSubData(o.UNIFORM_BUFFER,j+ue,z.__data)):J.isMatrix3?(z.__data[0]=J.elements[0],z.__data[1]=J.elements[1],z.__data[2]=J.elements[2],z.__data[3]=0,z.__data[4]=J.elements[3],z.__data[5]=J.elements[4],z.__data[6]=J.elements[5],z.__data[7]=0,z.__data[8]=J.elements[6],z.__data[9]=J.elements[7],z.__data[10]=J.elements[8],z.__data[11]=0):(J.toArray(z.__data,ue),ue+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,j,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(D,P,w,L){const I=D.value,N=P+"_"+w;if(L[N]===void 0)return typeof I=="number"||typeof I=="boolean"?L[N]=I:L[N]=I.clone(),!0;{const O=L[N];if(typeof I=="number"||typeof I=="boolean"){if(O!==I)return L[N]=I,!0}else if(O.equals(I)===!1)return O.copy(I),!0}return!1}function E(D){const P=D.uniforms;let w=0;const L=16;for(let N=0,O=P.length;N<O;N++){const A=Array.isArray(P[N])?P[N]:[P[N]];for(let R=0,z=A.length;R<z;R++){const j=A[R],K=Array.isArray(j.value)?j.value:[j.value];for(let ue=0,ne=K.length;ue<ne;ue++){const J=K[ue],ie=M(J),V=w%L,ce=V%ie.boundary,oe=V+ce;w+=ce,oe!==0&&L-oe<ie.storage&&(w+=L-oe),j.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=w,w+=ie.storage}}}const I=w%L;return I>0&&(w+=L-I),D.__size=w,D.__cache={},this}function M(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function y(D){const P=D.target;P.removeEventListener("dispose",y);const w=u.indexOf(P.__bindingPointIndex);u.splice(w,1),o.deleteBuffer(s[P.id]),delete s[P.id],delete a[P.id]}function x(){for(const D in s)o.deleteBuffer(s[D]);u=[],s={},a={}}return{bind:d,update:h,dispose:x}}class ZA{constructor(e={}){const{canvas:t=IM(),context:i=null,depth:s=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=u;const E=new Uint32Array(4),M=new Int32Array(4);let y=null,x=null;const D=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=is,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let L=!1;this._outputColorSpace=Si;let I=0,N=0,O=null,A=-1,R=null;const z=new en,j=new en;let K=null;const ue=new Dt(0);let ne=0,J=t.width,ie=t.height,V=1,ce=null,oe=null;const k=new en(0,0,J,ie),ee=new en(0,0,J,ie);let Te=!1;const Re=new P0;let Ie=!1,re=!1;const de=new cn,Me=new le,Ne=new en,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function on(){return O===null?V:1}let B=i;function Rt(b,q){return t.getContext(b,q)}try{const b={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${op}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",xe,!1),B===null){const q="webgl2";if(B=Rt(q,b),B===null)throw Rt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ut,nt,Ge,It,We,at,zt,Bt,U,C,Z,he,_e,fe,$e,Ae,Be,Ke,Ee,Le,it,Ye,be,ct;function G(){ut=new aw(B),ut.init(),Ye=new GA(B,ut),nt=new ew(B,ut,e,Ye),Ge=new VA(B,ut),nt.reversedDepthBuffer&&g&&Ge.buffers.depth.setReversed(!0),It=new cw(B),We=new RA,at=new HA(B,ut,Ge,We,nt,Ye,It),zt=new nw(w),Bt=new ow(w),U=new _E(B),be=new Q1(B,U),C=new lw(B,U,It,be),Z=new dw(B,C,U,It),Ee=new fw(B,nt,at),Ae=new tw(We),he=new CA(w,zt,Bt,ut,nt,be,Ae),_e=new $A(w,We),fe=new PA,$e=new FA(ut),Ke=new Z1(w,zt,Bt,Ge,Z,S,d),Be=new zA(w,Z,nt),ct=new KA(B,It,nt,Ge),Le=new J1(B,ut,It),it=new uw(B,ut,It),It.programs=he.programs,w.capabilities=nt,w.extensions=ut,w.properties=We,w.renderLists=fe,w.shadowMap=Be,w.state=Ge,w.info=It}G();const ye=new YA(w,B);this.xr=ye,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=ut.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ut.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(J,ie,!1))},this.getSize=function(b){return b.set(J,ie)},this.setSize=function(b,q,se=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,ie=q,t.width=Math.floor(b*V),t.height=Math.floor(q*V),se===!0&&(t.style.width=b+"px",t.style.height=q+"px"),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(J*V,ie*V).floor()},this.setDrawingBufferSize=function(b,q,se){J=b,ie=q,V=se,t.width=Math.floor(b*se),t.height=Math.floor(q*se),this.setViewport(0,0,b,q)},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(k)},this.setViewport=function(b,q,se,ae){b.isVector4?k.set(b.x,b.y,b.z,b.w):k.set(b,q,se,ae),Ge.viewport(z.copy(k).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,q,se,ae){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,q,se,ae),Ge.scissor(j.copy(ee).multiplyScalar(V).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(b){Ge.setScissorTest(Te=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){oe=b},this.getClearColor=function(b){return b.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,se=!0){let ae=0;if(b){let X=!1;if(O!==null){const Se=O.texture.format;X=Se===dp||Se===fp||Se===cp}if(X){const Se=O.texture.type,Pe=Se===Sr||Se===Xs||Se===tl||Se===nl||Se===lp||Se===up,Ve=Ke.getClearColor(),Fe=Ke.getClearAlpha(),tt=Ve.r,rt=Ve.g,Ze=Ve.b;Pe?(E[0]=tt,E[1]=rt,E[2]=Ze,E[3]=Fe,B.clearBufferuiv(B.COLOR,0,E)):(M[0]=tt,M[1]=rt,M[2]=Ze,M[3]=Fe,B.clearBufferiv(B.COLOR,0,M))}else ae|=B.COLOR_BUFFER_BIT}q&&(ae|=B.DEPTH_BUFFER_BIT),se&&(ae|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ke.dispose(),fe.dispose(),$e.dispose(),We.dispose(),zt.dispose(),Bt.dispose(),Z.dispose(),be.dispose(),ct.dispose(),he.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Sn),ye.removeEventListener("sessionend",$s),Qn.stop()};function Ce(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=It.autoReset,q=Be.enabled,se=Be.autoUpdate,ae=Be.needsUpdate,X=Be.type;G(),It.autoReset=b,Be.enabled=q,Be.autoUpdate=se,Be.needsUpdate=ae,Be.type=X}function xe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function pe(b){const q=b.target;q.removeEventListener("dispose",pe),Xe(q)}function Xe(b){lt(b),We.remove(b)}function lt(b){const q=We.get(b).programs;q!==void 0&&(q.forEach(function(se){he.releaseProgram(se)}),b.isShaderMaterial&&he.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,se,ae,X,Se){q===null&&(q=ke);const Pe=X.isMesh&&X.matrixWorld.determinant()<0,Ve=Ji(b,q,se,ae,X);Ge.setMaterial(ae,Pe);let Fe=se.index,tt=1;if(ae.wireframe===!0){if(Fe=C.getWireframeAttribute(se),Fe===void 0)return;tt=2}const rt=se.drawRange,Ze=se.attributes.position;let st=rt.start*tt,wt=(rt.start+rt.count)*tt;Se!==null&&(st=Math.max(st,Se.start*tt),wt=Math.min(wt,(Se.start+Se.count)*tt)),Fe!==null?(st=Math.max(st,0),wt=Math.min(wt,Fe.count)):Ze!=null&&(st=Math.max(st,0),wt=Math.min(wt,Ze.count));const St=wt-st;if(St<0||St===1/0)return;be.setup(X,ae,Ve,se,Fe);let Nt,Ct=Le;if(Fe!==null&&(Nt=U.get(Fe),Ct=it,Ct.setIndex(Nt)),X.isMesh)ae.wireframe===!0?(Ge.setLineWidth(ae.wireframeLinewidth*on()),Ct.setMode(B.LINES)):Ct.setMode(B.TRIANGLES);else if(X.isLine){let Qe=ae.linewidth;Qe===void 0&&(Qe=1),Ge.setLineWidth(Qe*on()),X.isLineSegments?Ct.setMode(B.LINES):X.isLineLoop?Ct.setMode(B.LINE_LOOP):Ct.setMode(B.LINE_STRIP)}else X.isPoints?Ct.setMode(B.POINTS):X.isSprite&&Ct.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)sl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))Ct.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Qe=X._multiDrawStarts,bt=X._multiDrawCounts,mt=X._multiDrawCount,an=Fe?U.get(Fe).bytesPerElement:1,Ci=We.get(ae).currentProgram.getUniforms();for(let Ln=0;Ln<mt;Ln++)Ci.setValue(B,"_gl_DrawID",Ln),Ct.render(Qe[Ln]/an,bt[Ln])}else if(X.isInstancedMesh)Ct.renderInstances(st,St,X.count);else if(se.isInstancedBufferGeometry){const Qe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,bt=Math.min(se.instanceCount,Qe);Ct.renderInstances(st,St,bt)}else Ct.render(st,St)};function At(b,q,se){b.transparent===!0&&b.side===_r&&b.forceSinglePass===!1?(b.side=Kn,b.needsUpdate=!0,Zs(b,q,se),b.side=os,b.needsUpdate=!0,Zs(b,q,se),b.side=_r):Zs(b,q,se)}this.compile=function(b,q,se=null){se===null&&(se=b),x=$e.get(se),x.init(q),P.push(x),se.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),b!==se&&b.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),x.setupLights();const ae=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Se=X.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const Ve=Se[Pe];At(Ve,se,X),ae.add(Ve)}else At(Se,se,X),ae.add(Se)}),x=P.pop(),ae},this.compileAsync=function(b,q,se=null){const ae=this.compile(b,q,se);return new Promise(X=>{function Se(){if(ae.forEach(function(Pe){We.get(Pe).currentProgram.isReady()&&ae.delete(Pe)}),ae.size===0){X(b);return}setTimeout(Se,10)}ut.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let yt=null;function di(b){yt&&yt(b)}function Sn(){Qn.stop()}function $s(){Qn.start()}const Qn=new I0;Qn.setAnimationLoop(di),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(b){yt=b,ye.setAnimationLoop(b),b===null?Qn.stop():Qn.start()},ye.addEventListener("sessionstart",Sn),ye.addEventListener("sessionend",$s),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(q),q=ye.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,q,O),x=$e.get(b,P.length),x.init(q),P.push(x),de.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Re.setFromProjectionMatrix(de,qi,q.reversedDepth),re=this.localClippingEnabled,Ie=Ae.init(this.clippingPlanes,re),y=fe.get(b,D.length),y.init(),D.push(y),ye.enabled===!0&&ye.isPresenting===!0){const Se=w.xr.getDepthSensingMesh();Se!==null&&ia(Se,q,-1/0,w.sortObjects)}ia(b,q,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(ce,oe),ht=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ht&&Ke.addToRenderList(y,b),this.info.render.frame++,Ie===!0&&Ae.beginShadows();const se=x.state.shadowsArray;Be.render(se,b,q),Ie===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=y.opaque,X=y.transmissive;if(x.setupLights(),q.isArrayCamera){const Se=q.cameras;if(X.length>0)for(let Pe=0,Ve=Se.length;Pe<Ve;Pe++){const Fe=Se[Pe];ls(ae,X,b,Fe)}ht&&Ke.render(b);for(let Pe=0,Ve=Se.length;Pe<Ve;Pe++){const Fe=Se[Pe];Tr(y,b,Fe,Fe.viewport)}}else X.length>0&&ls(ae,X,b,q),ht&&Ke.render(b),Tr(y,b,q);O!==null&&N===0&&(at.updateMultisampleRenderTarget(O),at.updateRenderTargetMipmap(O)),b.isScene===!0&&b.onAfterRender(w,b,q),be.resetDefaultState(),A=-1,R=null,P.pop(),P.length>0?(x=P[P.length-1],Ie===!0&&Ae.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function ia(b,q,se,ae){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)se=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Re.intersectsSprite(b)){ae&&Ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(de);const Pe=Z.update(b),Ve=b.material;Ve.visible&&y.push(b,Pe,Ve,se,Ne.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Re.intersectsObject(b))){const Pe=Z.update(b),Ve=b.material;if(ae&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ne.copy(b.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ne.copy(Pe.boundingSphere.center)),Ne.applyMatrix4(b.matrixWorld).applyMatrix4(de)),Array.isArray(Ve)){const Fe=Pe.groups;for(let tt=0,rt=Fe.length;tt<rt;tt++){const Ze=Fe[tt],st=Ve[Ze.materialIndex];st&&st.visible&&y.push(b,Pe,st,se,Ne.z,Ze)}}else Ve.visible&&y.push(b,Pe,Ve,se,Ne.z,null)}}const Se=b.children;for(let Pe=0,Ve=Se.length;Pe<Ve;Pe++)ia(Se[Pe],q,se,ae)}function Tr(b,q,se,ae){const X=b.opaque,Se=b.transmissive,Pe=b.transparent;x.setupLightsView(se),Ie===!0&&Ae.setGlobalState(w.clippingPlanes,se),ae&&Ge.viewport(z.copy(ae)),X.length>0&&Qi(X,q,se),Se.length>0&&Qi(Se,q,se),Pe.length>0&&Qi(Pe,q,se),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function ls(b,q,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ae.id]===void 0&&(x.state.transmissionRenderTarget[ae.id]=new js(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?al:Sr,minFilter:ks,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Se=x.state.transmissionRenderTarget[ae.id],Pe=ae.viewport||z;Se.setSize(Pe.z*w.transmissionResolutionScale,Pe.w*w.transmissionResolutionScale);const Ve=w.getRenderTarget(),Fe=w.getActiveCubeFace(),tt=w.getActiveMipmapLevel();w.setRenderTarget(Se),w.getClearColor(ue),ne=w.getClearAlpha(),ne<1&&w.setClearColor(16777215,.5),w.clear(),ht&&Ke.render(se);const rt=w.toneMapping;w.toneMapping=is;const Ze=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),x.setupLightsView(ae),Ie===!0&&Ae.setGlobalState(w.clippingPlanes,ae),Qi(b,se,ae),at.updateMultisampleRenderTarget(Se),at.updateRenderTargetMipmap(Se),ut.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let wt=0,St=q.length;wt<St;wt++){const Nt=q[wt],Ct=Nt.object,Qe=Nt.geometry,bt=Nt.material,mt=Nt.group;if(bt.side===_r&&Ct.layers.test(ae.layers)){const an=bt.side;bt.side=Kn,bt.needsUpdate=!0,Ks(Ct,se,ae,Qe,bt,mt),bt.side=an,bt.needsUpdate=!0,st=!0}}st===!0&&(at.updateMultisampleRenderTarget(Se),at.updateRenderTargetMipmap(Se))}w.setRenderTarget(Ve,Fe,tt),w.setClearColor(ue,ne),Ze!==void 0&&(ae.viewport=Ze),w.toneMapping=rt}function Qi(b,q,se){const ae=q.isScene===!0?q.overrideMaterial:null;for(let X=0,Se=b.length;X<Se;X++){const Pe=b[X],Ve=Pe.object,Fe=Pe.geometry,tt=Pe.group;let rt=Pe.material;rt.allowOverride===!0&&ae!==null&&(rt=ae),Ve.layers.test(se.layers)&&Ks(Ve,q,se,Fe,rt,tt)}}function Ks(b,q,se,ae,X,Se){b.onBeforeRender(w,q,se,ae,X,Se),b.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(w,q,se,ae,b,Se),X.transparent===!0&&X.side===_r&&X.forceSinglePass===!1?(X.side=Kn,X.needsUpdate=!0,w.renderBufferDirect(se,q,ae,X,b,Se),X.side=os,X.needsUpdate=!0,w.renderBufferDirect(se,q,ae,X,b,Se),X.side=_r):w.renderBufferDirect(se,q,ae,X,b,Se),b.onAfterRender(w,q,se,ae,X,Se)}function Zs(b,q,se){q.isScene!==!0&&(q=ke);const ae=We.get(b),X=x.state.lights,Se=x.state.shadowsArray,Pe=X.state.version,Ve=he.getParameters(b,X.state,Se,q,se),Fe=he.getProgramCacheKey(Ve);let tt=ae.programs;ae.environment=b.isMeshStandardMaterial?q.environment:null,ae.fog=q.fog,ae.envMap=(b.isMeshStandardMaterial?Bt:zt).get(b.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,tt===void 0&&(b.addEventListener("dispose",pe),tt=new Map,ae.programs=tt);let rt=tt.get(Fe);if(rt!==void 0){if(ae.currentProgram===rt&&ae.lightsStateVersion===Pe)return pl(b,Ve),rt}else Ve.uniforms=he.getUniforms(b),b.onBeforeCompile(Ve,w),rt=he.acquireProgram(Ve,Fe),tt.set(Fe,rt),ae.uniforms=Ve.uniforms;const Ze=ae.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ze.clippingPlanes=Ae.uniform),pl(b,Ve),ae.needsLights=_l(b),ae.lightsStateVersion=Pe,ae.needsLights&&(Ze.ambientLightColor.value=X.state.ambient,Ze.lightProbe.value=X.state.probe,Ze.directionalLights.value=X.state.directional,Ze.directionalLightShadows.value=X.state.directionalShadow,Ze.spotLights.value=X.state.spot,Ze.spotLightShadows.value=X.state.spotShadow,Ze.rectAreaLights.value=X.state.rectArea,Ze.ltc_1.value=X.state.rectAreaLTC1,Ze.ltc_2.value=X.state.rectAreaLTC2,Ze.pointLights.value=X.state.point,Ze.pointLightShadows.value=X.state.pointShadow,Ze.hemisphereLights.value=X.state.hemi,Ze.directionalShadowMap.value=X.state.directionalShadowMap,Ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ze.spotShadowMap.value=X.state.spotShadowMap,Ze.spotLightMatrix.value=X.state.spotLightMatrix,Ze.spotLightMap.value=X.state.spotLightMap,Ze.pointShadowMap.value=X.state.pointShadowMap,Ze.pointShadowMatrix.value=X.state.pointShadowMatrix),ae.currentProgram=rt,ae.uniformsList=null,rt}function hl(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Ku.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function pl(b,q){const se=We.get(b);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function Ji(b,q,se,ae,X){q.isScene!==!0&&(q=ke),at.resetTextureUnits();const Se=q.fog,Pe=ae.isMeshStandardMaterial?q.environment:null,Ve=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Jo,Fe=(ae.isMeshStandardMaterial?Bt:zt).get(ae.envMap||Pe),tt=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,rt=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ze=!!se.morphAttributes.position,st=!!se.morphAttributes.normal,wt=!!se.morphAttributes.color;let St=is;ae.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(St=w.toneMapping);const Nt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ct=Nt!==void 0?Nt.length:0,Qe=We.get(ae),bt=x.state.lights;if(Ie===!0&&(re===!0||b!==R)){const Zt=b===R&&ae.id===A;Ae.setState(ae,b,Zt)}let mt=!1;ae.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==bt.state.version||Qe.outputColorSpace!==Ve||X.isBatchedMesh&&Qe.batching===!1||!X.isBatchedMesh&&Qe.batching===!0||X.isBatchedMesh&&Qe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Qe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Qe.instancing===!1||!X.isInstancedMesh&&Qe.instancing===!0||X.isSkinnedMesh&&Qe.skinning===!1||!X.isSkinnedMesh&&Qe.skinning===!0||X.isInstancedMesh&&Qe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Qe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Qe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Qe.instancingMorph===!1&&X.morphTexture!==null||Qe.envMap!==Fe||ae.fog===!0&&Qe.fog!==Se||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ae.numPlanes||Qe.numIntersection!==Ae.numIntersection)||Qe.vertexAlphas!==tt||Qe.vertexTangents!==rt||Qe.morphTargets!==Ze||Qe.morphNormals!==st||Qe.morphColors!==wt||Qe.toneMapping!==St||Qe.morphTargetsCount!==Ct)&&(mt=!0):(mt=!0,Qe.__version=ae.version);let an=Qe.currentProgram;mt===!0&&(an=Zs(ae,q,X));let Ci=!1,Ln=!1,us=!1;const Ut=an.getUniforms(),In=Qe.uniforms;if(Ge.useProgram(an.program)&&(Ci=!0,Ln=!0,us=!0),ae.id!==A&&(A=ae.id,Ln=!0),Ci||R!==b){Ge.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ut.setValue(B,"projectionMatrix",b.projectionMatrix),Ut.setValue(B,"viewMatrix",b.matrixWorldInverse);const En=Ut.map.cameraPosition;En!==void 0&&En.setValue(B,Me.setFromMatrixPosition(b.matrixWorld)),nt.logarithmicDepthBuffer&&Ut.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ut.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Ln=!0,us=!0)}if(X.isSkinnedMesh){Ut.setOptional(B,X,"bindMatrix"),Ut.setOptional(B,X,"bindMatrixInverse");const Zt=X.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Ut.setValue(B,"boneTexture",Zt.boneTexture,at))}X.isBatchedMesh&&(Ut.setOptional(B,X,"batchingTexture"),Ut.setValue(B,"batchingTexture",X._matricesTexture,at),Ut.setOptional(B,X,"batchingIdTexture"),Ut.setValue(B,"batchingIdTexture",X._indirectTexture,at),Ut.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&Ut.setValue(B,"batchingColorTexture",X._colorsTexture,at));const Mn=se.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Ee.update(X,se,an),(Ln||Qe.receiveShadow!==X.receiveShadow)&&(Qe.receiveShadow=X.receiveShadow,Ut.setValue(B,"receiveShadow",X.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(In.envMap.value=Fe,In.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&q.environment!==null&&(In.envMapIntensity.value=q.environmentIntensity),Ln&&(Ut.setValue(B,"toneMappingExposure",w.toneMappingExposure),Qe.needsLights&&ml(In,us),Se&&ae.fog===!0&&_e.refreshFogUniforms(In,Se),_e.refreshMaterialUniforms(In,ae,V,ie,x.state.transmissionRenderTarget[b.id]),Ku.upload(B,hl(Qe),In,at)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Ku.upload(B,hl(Qe),In,at),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ut.setValue(B,"center",X.center),Ut.setValue(B,"modelViewMatrix",X.modelViewMatrix),Ut.setValue(B,"normalMatrix",X.normalMatrix),Ut.setValue(B,"modelMatrix",X.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Zt=ae.uniformsGroups;for(let En=0,cs=Zt.length;En<cs;En++){const _t=Zt[En];ct.update(_t,an),ct.bind(_t,an)}}return an}function ml(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function _l(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(b,q,se){const ae=We.get(b);ae.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),We.get(b.texture).__webglTexture=q,We.get(b.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:se,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const se=We.get(b);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0};const hc=B.createFramebuffer();this.setRenderTarget=function(b,q=0,se=0){O=b,I=q,N=se;let ae=!0,X=null,Se=!1,Pe=!1;if(b){const Fe=We.get(b);if(Fe.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(B.FRAMEBUFFER,null),ae=!1;else if(Fe.__webglFramebuffer===void 0)at.setupRenderTarget(b);else if(Fe.__hasExternalTextures)at.rebindTextures(b,We.get(b.texture).__webglTexture,We.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ze=b.depthTexture;if(Fe.__boundDepthTexture!==Ze){if(Ze!==null&&We.has(Ze)&&(b.width!==Ze.image.width||b.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(b)}}const tt=b.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Pe=!0);const rt=We.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(rt[q])?X=rt[q][se]:X=rt[q],Se=!0):b.samples>0&&at.useMultisampledRTT(b)===!1?X=We.get(b).__webglMultisampledFramebuffer:Array.isArray(rt)?X=rt[se]:X=rt,z.copy(b.viewport),j.copy(b.scissor),K=b.scissorTest}else z.copy(k).multiplyScalar(V).floor(),j.copy(ee).multiplyScalar(V).floor(),K=Te;if(se!==0&&(X=hc),Ge.bindFramebuffer(B.FRAMEBUFFER,X)&&ae&&Ge.drawBuffers(b,X),Ge.viewport(z),Ge.scissor(j),Ge.setScissorTest(K),Se){const Fe=We.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+q,Fe.__webglTexture,se)}else if(Pe){const Fe=q;for(let tt=0;tt<b.textures.length;tt++){const rt=We.get(b.textures[tt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+tt,rt.__webglTexture,se,Fe)}}else if(b!==null&&se!==0){const Fe=We.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Fe.__webglTexture,se)}A=-1},this.readRenderTargetPixels=function(b,q,se,ae,X,Se,Pe,Ve=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=We.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){Ge.bindFramebuffer(B.FRAMEBUFFER,Fe);try{const tt=b.textures[Ve],rt=tt.format,Ze=tt.type;if(!nt.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-ae&&se>=0&&se<=b.height-X&&(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ve),B.readPixels(q,se,ae,X,Ye.convert(rt),Ye.convert(Ze),Se))}finally{const tt=O!==null?We.get(O).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(b,q,se,ae,X,Se,Pe,Ve=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=We.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe)if(q>=0&&q<=b.width-ae&&se>=0&&se<=b.height-X){Ge.bindFramebuffer(B.FRAMEBUFFER,Fe);const tt=b.textures[Ve],rt=tt.format,Ze=tt.type;if(!nt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,st),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ve),B.readPixels(q,se,ae,X,Ye.convert(rt),Ye.convert(Ze),0);const wt=O!==null?We.get(O).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,wt);const St=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await NM(B,St,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,st),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.deleteBuffer(st),B.deleteSync(St),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,se=0){const ae=Math.pow(2,-se),X=Math.floor(b.image.width*ae),Se=Math.floor(b.image.height*ae),Pe=q!==null?q.x:0,Ve=q!==null?q.y:0;at.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,se,0,0,Pe,Ve,X,Se),Ge.unbindTexture()};const gl=B.createFramebuffer(),vl=B.createFramebuffer();this.copyTextureToTexture=function(b,q,se=null,ae=null,X=0,Se=null){Se===null&&(X!==0?(sl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=X,X=0):Se=0);let Pe,Ve,Fe,tt,rt,Ze,st,wt,St;const Nt=b.isCompressedTexture?b.mipmaps[Se]:b.image;if(se!==null)Pe=se.max.x-se.min.x,Ve=se.max.y-se.min.y,Fe=se.isBox3?se.max.z-se.min.z:1,tt=se.min.x,rt=se.min.y,Ze=se.isBox3?se.min.z:0;else{const Mn=Math.pow(2,-X);Pe=Math.floor(Nt.width*Mn),Ve=Math.floor(Nt.height*Mn),b.isDataArrayTexture?Fe=Nt.depth:b.isData3DTexture?Fe=Math.floor(Nt.depth*Mn):Fe=1,tt=0,rt=0,Ze=0}ae!==null?(st=ae.x,wt=ae.y,St=ae.z):(st=0,wt=0,St=0);const Ct=Ye.convert(q.format),Qe=Ye.convert(q.type);let bt;q.isData3DTexture?(at.setTexture3D(q,0),bt=B.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(at.setTexture2DArray(q,0),bt=B.TEXTURE_2D_ARRAY):(at.setTexture2D(q,0),bt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);const mt=B.getParameter(B.UNPACK_ROW_LENGTH),an=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ci=B.getParameter(B.UNPACK_SKIP_PIXELS),Ln=B.getParameter(B.UNPACK_SKIP_ROWS),us=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,tt),B.pixelStorei(B.UNPACK_SKIP_ROWS,rt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze);const Ut=b.isDataArrayTexture||b.isData3DTexture,In=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const Mn=We.get(b),Zt=We.get(q),En=We.get(Mn.__renderTarget),cs=We.get(Zt.__renderTarget);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,En.__webglFramebuffer),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let _t=0;_t<Fe;_t++)Ut&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get(b).__webglTexture,X,Ze+_t),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get(q).__webglTexture,Se,St+_t)),B.blitFramebuffer(tt,rt,Pe,Ve,st,wt,Pe,Ve,B.DEPTH_BUFFER_BIT,B.NEAREST);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||We.has(b)){const Mn=We.get(b),Zt=We.get(q);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,gl),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,vl);for(let En=0;En<Fe;En++)Ut?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Mn.__webglTexture,X,Ze+En):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Mn.__webglTexture,X),In?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Zt.__webglTexture,Se,St+En):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Zt.__webglTexture,Se),X!==0?B.blitFramebuffer(tt,rt,Pe,Ve,st,wt,Pe,Ve,B.COLOR_BUFFER_BIT,B.NEAREST):In?B.copyTexSubImage3D(bt,Se,st,wt,St+En,tt,rt,Pe,Ve):B.copyTexSubImage2D(bt,Se,st,wt,tt,rt,Pe,Ve);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else In?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(bt,Se,st,wt,St,Pe,Ve,Fe,Ct,Qe,Nt.data):q.isCompressedArrayTexture?B.compressedTexSubImage3D(bt,Se,st,wt,St,Pe,Ve,Fe,Ct,Nt.data):B.texSubImage3D(bt,Se,st,wt,St,Pe,Ve,Fe,Ct,Qe,Nt):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Se,st,wt,Pe,Ve,Ct,Qe,Nt.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Se,st,wt,Nt.width,Nt.height,Ct,Nt.data):B.texSubImage2D(B.TEXTURE_2D,Se,st,wt,Pe,Ve,Ct,Qe,Nt);B.pixelStorei(B.UNPACK_ROW_LENGTH,mt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,an),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ci),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ln),B.pixelStorei(B.UNPACK_SKIP_IMAGES,us),Se===0&&q.generateMipmaps&&B.generateMipmap(bt),Ge.unbindTexture()},this.initRenderTarget=function(b){We.get(b).__webglFramebuffer===void 0&&at.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?at.setTextureCube(b,0):b.isData3DTexture?at.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?at.setTexture2DArray(b,0):at.setTexture2D(b,0),Ge.unbindTexture()},this.resetState=function(){I=0,N=0,O=null,Ge.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const QA=`
varying vec2 vUv;
uniform float uTime;
uniform float mouse;
uniform float uEnableWaves;

void main() {
    vUv = uv;
    float time = uTime * 5.;

    float waveFactor = uEnableWaves;

    vec3 transformed = position;

    transformed.x += sin(time + position.y) * 0.5 * waveFactor;
    transformed.y += cos(time + position.z) * 0.15 * waveFactor;
    transformed.z += sin(time + position.x) * waveFactor;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}
`,JA=`
varying vec2 vUv;
uniform float mouse;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
    float time = uTime;
    vec2 pos = vUv;
    
    float move = sin(time + mouse) * 0.01;
    float r = texture2D(uTexture, pos + cos(time * 2. - time + pos.x) * .01).r;
    float g = texture2D(uTexture, pos + tan(time * .5 + pos.x - time) * .01).g;
    float b = texture2D(uTexture, pos - cos(time * 2. + time + pos.y) * .01).b;
    float a = texture2D(uTexture, pos).a;
    gl_FragColor = vec4(r, g, b, a);
}
`;Math.map=function(o,e,t,i,s){return(o-e)/(t-e)*(s-i)+i};const sv=typeof window<"u"?window.devicePixelRatio:1;class eC{constructor(e,{fontSize:t,fontFamily:i,charset:s,invert:a}={}){this.renderer=e,this.domElement=document.createElement("div"),this.domElement.style.position="absolute",this.domElement.style.top="0",this.domElement.style.left="0",this.domElement.style.width="100%",this.domElement.style.height="100%",this.pre=document.createElement("pre"),this.domElement.appendChild(this.pre),this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.domElement.appendChild(this.canvas),this.deg=0,this.invert=a??!0,this.fontSize=t??12,this.fontFamily=i??"'Courier New', monospace",this.charset=s??" .'`^\",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",this.context.webkitImageSmoothingEnabled=!1,this.context.mozImageSmoothingEnabled=!1,this.context.msImageSmoothingEnabled=!1,this.context.imageSmoothingEnabled=!1,this.onMouseMove=this.onMouseMove.bind(this),document.addEventListener("mousemove",this.onMouseMove)}setSize(e,t){this.width=e,this.height=t,this.renderer.setSize(e,t),this.reset(),this.center={x:e/2,y:t/2},this.mouse={x:this.center.x,y:this.center.y}}reset(){this.context.font=`${this.fontSize}px ${this.fontFamily}`;const e=this.context.measureText("A").width;this.cols=Math.floor(this.width/(this.fontSize*(e/this.fontSize))),this.rows=Math.floor(this.height/this.fontSize),this.canvas.width=this.cols,this.canvas.height=this.rows,this.pre.style.fontFamily=this.fontFamily,this.pre.style.fontSize=`${this.fontSize}px`,this.pre.style.margin="0",this.pre.style.padding="0",this.pre.style.lineHeight="1em",this.pre.style.position="absolute",this.pre.style.left="50%",this.pre.style.top="50%",this.pre.style.transform="translate(-50%, -50%)",this.pre.style.zIndex="9",this.pre.style.backgroundAttachment="fixed",this.pre.style.mixBlendMode="difference"}render(e,t){this.renderer.render(e,t);const i=this.canvas.width,s=this.canvas.height;this.context.clearRect(0,0,i,s),this.context&&i&&s&&this.context.drawImage(this.renderer.domElement,0,0,i,s),this.asciify(this.context,i,s),this.hue()}onMouseMove(e){this.mouse={x:e.clientX*sv,y:e.clientY*sv}}get dx(){return this.mouse.x-this.center.x}get dy(){return this.mouse.y-this.center.y}hue(){const e=Math.atan2(this.dy,this.dx)*180/Math.PI;this.deg+=(e-this.deg)*.075,this.domElement.style.filter=`hue-rotate(${this.deg.toFixed(1)}deg)`}asciify(e,t,i){if(t&&i){const s=e.getImageData(0,0,t,i).data;let a="";for(let u=0;u<i;u++){for(let c=0;c<t;c++){const d=c*4+u*4*t,[h,p,_,g]=[s[d],s[d+1],s[d+2],s[d+3]];if(g===0){a+=" ";continue}let S=(.3*h+.6*p+.1*_)/255,E=Math.floor((1-S)*(this.charset.length-1));this.invert&&(E=this.charset.length-E-1),a+=this.charset[E]}a+=`
`}this.pre.innerHTML=a}}dispose(){document.removeEventListener("mousemove",this.onMouseMove)}}class tC{constructor(e,{fontSize:t=200,fontFamily:i="Arial",color:s="#fdf9f3"}={}){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.txt=e,this.fontSize=t,this.fontFamily=i,this.color=s,this.font=`600 ${this.fontSize}px ${this.fontFamily}`}resize(){this.context.font=this.font;const e=this.context.measureText(this.txt),t=Math.ceil(e.width)+20,i=Math.ceil(e.actualBoundingBoxAscent+e.actualBoundingBoxDescent)+20;this.canvas.width=t,this.canvas.height=i}render(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color,this.context.font=this.font;const t=10+this.context.measureText(this.txt).actualBoundingBoxAscent;this.context.fillText(this.txt,10,t)}get width(){return this.canvas.width}get height(){return this.canvas.height}get texture(){return this.canvas}}class ov{constructor({text:e,asciiFontSize:t,textFontSize:i,textColor:s,planeBaseHeight:a,enableWaves:u},c,d,h){this.textString=e,this.asciiFontSize=t,this.textFontSize=i,this.textColor=s,this.planeBaseHeight=a,this.container=c,this.width=d,this.height=h,this.enableWaves=u,this.camera=new Mi(45,this.width/this.height,1,1e3),this.camera.position.z=30,this.scene=new oE,this.mouse={x:0,y:0},this.onMouseMove=this.onMouseMove.bind(this),this.setMesh(),this.setRenderer()}setMesh(){this.textCanvas=new tC(this.textString,{fontSize:this.textFontSize,fontFamily:"IBM Plex Mono",color:this.textColor}),this.textCanvas.resize(),this.textCanvas.render(),this.texture=new cE(this.textCanvas.texture),this.texture.minFilter=Ai;const e=this.textCanvas.width/this.textCanvas.height,t=this.planeBaseHeight,i=t*e,s=t;this.geometry=new dl(i,s,36,36),this.material=new Er({vertexShader:QA,fragmentShader:JA,transparent:!0,uniforms:{uTime:{value:0},mouse:{value:1},uTexture:{value:this.texture},uEnableWaves:{value:this.enableWaves?1:0}}}),this.mesh=new $i(this.geometry,this.material),this.scene.add(this.mesh)}setRenderer(){this.renderer=new ZA({antialias:!1,alpha:!0}),this.renderer.setPixelRatio(1),this.renderer.setClearColor(0,0),this.filter=new eC(this.renderer,{fontFamily:"IBM Plex Mono",fontSize:this.asciiFontSize,invert:!0}),this.container.appendChild(this.filter.domElement),this.setSize(this.width,this.height),this.container.addEventListener("mousemove",this.onMouseMove),this.container.addEventListener("touchmove",this.onMouseMove)}setSize(e,t){this.width=e,this.height=t,this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.filter.setSize(e,t),this.center={x:e/2,y:t/2}}load(){this.animate()}onMouseMove(e){const t=e.touches?e.touches[0]:e,i=this.container.getBoundingClientRect(),s=t.clientX-i.left,a=t.clientY-i.top;this.mouse={x:s,y:a}}animate(){const e=()=>{this.animationFrameId=requestAnimationFrame(e),this.render()};e()}render(){const e=new Date().getTime()*.001;this.textCanvas.render(),this.texture.needsUpdate=!0,this.mesh.material.uniforms.uTime.value=Math.sin(e),this.updateRotation(),this.filter.render(this.scene,this.camera)}updateRotation(){const e=Math.map(this.mouse.y,0,this.height,.5,-.5),t=Math.map(this.mouse.x,0,this.width,-.5,.5);this.mesh.rotation.x+=(e-this.mesh.rotation.x)*.05,this.mesh.rotation.y+=(t-this.mesh.rotation.y)*.05}clear(){this.scene.traverse(e=>{e.isMesh&&typeof e.material=="object"&&e.material!==null&&(Object.keys(e.material).forEach(t=>{const i=e.material[t];i!==null&&typeof i=="object"&&typeof i.dispose=="function"&&i.dispose()}),e.material.dispose(),e.geometry.dispose())}),this.scene.clear()}dispose(){cancelAnimationFrame(this.animationFrameId),this.filter.dispose(),this.container.removeChild(this.filter.domElement),this.container.removeEventListener("mousemove",this.onMouseMove),this.container.removeEventListener("touchmove",this.onMouseMove),this.clear(),this.renderer.dispose()}}function nC({text:o="David!",asciiFontSize:e=8,textFontSize:t=200,textColor:i="#fdf9f3",planeBaseHeight:s=8,enableWaves:a=!0}){const u=gt.useRef(null),c=gt.useRef(null);return gt.useEffect(()=>{if(!u.current)return;const{width:d,height:h}=u.current.getBoundingClientRect();if(d===0||h===0){const _=new IntersectionObserver(([g])=>{if(g.isIntersecting&&g.boundingClientRect.width>0&&g.boundingClientRect.height>0){const{width:S,height:E}=g.boundingClientRect;c.current=new ov({text:o,asciiFontSize:e,textFontSize:t,textColor:i,planeBaseHeight:s,enableWaves:a},u.current,S,E),c.current.load(),_.disconnect()}},{threshold:.1});return _.observe(u.current),()=>{_.disconnect(),c.current&&c.current.dispose()}}c.current=new ov({text:o,asciiFontSize:e,textFontSize:t,textColor:i,planeBaseHeight:s,enableWaves:a},u.current,d,h),c.current.load();const p=new ResizeObserver(_=>{if(!_[0]||!c.current)return;const{width:g,height:S}=_[0].contentRect;g>0&&S>0&&c.current.setSize(g,S)});return p.observe(u.current),()=>{p.disconnect(),c.current&&c.current.dispose()}},[o,e,t,i,s,a]),Y.jsx("div",{ref:u,className:"ascii-text-container",style:{position:"absolute",width:"100%",height:"100%"},children:Y.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap');

        .ascii-text-container canvas {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          image-rendering: optimizeSpeed;
          image-rendering: -moz-crisp-edges;
          image-rendering: -o-crisp-edges;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: optimize-contrast;
          image-rendering: crisp-edges;
          image-rendering: pixelated;
        }

        .ascii-text-container pre {
          margin: 0;
          user-select: none;
          padding: 0;
          line-height: 1em;
          text-align: left;
          position: absolute;
          left: 0;
          top: 0;
          background-image: radial-gradient(circle, #ff6188 0%, #fc9867 50%, #ffd866 100%);
          background-attachment: fixed;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          z-index: 9;
          mix-blend-mode: difference;
        }
      `})})}const iC=()=>Y.jsx("div",{className:"site-section cta-big-image border-bottom",id:"about-section",children:Y.jsx("div",{className:"container",style:{paddingTop:"30px"},children:Y.jsxs("div",{className:"row",children:[Y.jsx("div",{className:"col-lg-6 mb-5","data-aos":"fade-up","data-aos-delay":"",children:Y.jsx("img",{src:"images/sebas-taking-a-pic.webp",alt:"Image of you of something fun",className:"img-fluid"})}),Y.jsx("div",{className:"col-lg-5 ml-auto","data-aos":"fade-up","data-aos-delay":"100",children:Y.jsxs("div",{className:"mb-4",children:[Y.jsx(nC,{text:"Queso?",className:"mb-3 text-uppercase"}),Y.jsx("h2",{className:"sr-only",children:"Who Is Sebastian Mojica?"}),Y.jsx("p",{children:"I'm a first-generation college student and the proud son of two immigrant parents. As the eldest of four siblings, I've grown into leadership roles both at home and in my academic life."}),Y.jsx("h2",{children:"Professional Background"}),Y.jsx("p",{children:"I'm currently pursuing a degree in Computer Science with a strong interest in cybersecurity and networking. I'm driven by curiosity and motivated by hands-on learning, problem-solving, and collaboration."}),Y.jsx("h2",{children:"Hobbies & Personal Motto"}),Y.jsx("p",{children:`My motto? "If it's not a little dangerous, it's probably not that fun." I enjoy physically and mentally challenging activities like wrestling, boxing, rock climbing, hiking, and night walks that push me outside my comfort zone.`}),Y.jsx("p",{children:"I believe growth happens when you're uncomfortable — so I'm always seeking new challenges that test my limits and expand my perspective."})]})})]})})}),av="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()[]{}<>?/\\|~",rC={position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},sC={display:"inline-block",whiteSpace:"pre-wrap"},oC=(o,e)=>o.split("").map((t,i)=>t===" "?" ":i<=e?t:av[Math.floor(Math.random()*av.length)]).join(""),aC=o=>o==="view"||o==="both",lC=o=>o==="hover"||o==="both",Ud=({text:o,speed:e=60,step:t=2,delay:i=0,animateOn:s="view",className:a="decrypted-text",encryptedClassName:u="decrypted-text--scrambling",parentClassName:c="decrypted-text",...d})=>{const h=gt.useRef(null),p=gt.useRef(null),_=gt.useMemo(()=>Array.isArray(o)?o.filter(Boolean).join(" "):o??"",[o]),[g,S]=gt.useState(_),[E,M]=gt.useState(-1),[y,x]=gt.useState(s==="mount"),[D,P]=gt.useState(!1),w=gt.useCallback(()=>{p.current&&(clearTimeout(p.current),p.current=null)},[]),L=gt.useCallback(()=>{w(),p.current=setTimeout(()=>{M(R=>R+t)},e)},[w,e,t]),I=gt.useCallback(()=>{_.length&&(M(-1),x(!0),w(),p.current=setTimeout(()=>M(0),i))},[w,i,_.length]),N=gt.useCallback(()=>{w(),S(_),M(_.length),x(!1)},[w,_,_.length]);gt.useEffect(()=>{if(y){if(E>=_.length){S(_),x(!1),P(!0),w();return}return S(oC(_,E)),L(),w}},[w,y,E,L,_]),gt.useEffect(()=>(S(_),M(-1),s==="mount"?I():N(),w),[_,s,I,N,w]),gt.useEffect(()=>{if(!aC(s)||!h.current)return;const R=new IntersectionObserver(z=>{z.forEach(j=>{j.isIntersecting&&!D&&I()})},{threshold:.35});return R.observe(h.current),()=>R.disconnect()},[s,D,I]);const O=()=>{lC(s)&&I()},A=()=>{s==="hover"&&N()};return Y.jsxs("span",{ref:h,className:c,style:sC,onMouseEnter:O,onMouseLeave:A,...d,children:[Y.jsx("span",{style:rC,children:_}),Y.jsx("span",{"aria-hidden":"true",children:g.split("").map((R,z)=>{const j=R===_[z];return Y.jsx("span",{className:j?a:u,children:R},`${R}-${z}`)})})]})},uC=()=>Y.jsx("section",{className:"site-section border-bottom",id:"projects-section",children:Y.jsxs("div",{className:"container",children:[Y.jsx("div",{className:"row mb-5 justify-content-center",children:Y.jsx("div",{className:"col-md-8 text-center",children:Y.jsx("h2",{className:"section-title mb-3","data-aos":"fade-up",children:"Projects"})})}),Y.jsxs("div",{className:"row mb-5",children:[Y.jsxs("div",{className:"col-lg-6","data-aos":"fade-up",children:[Y.jsx("img",{src:"images/birthdayParadoxGraph.png",alt:"Birthday Paradox Graph",className:"img-fluid mb-3"}),Y.jsx("img",{src:"images/BirthdayParadoxOutput.png",alt:"Birthday Paradox Output",className:"img-fluid"})]}),Y.jsxs("div",{className:"col-lg-5 ml-auto","data-aos":"fade-up","data-aos-delay":"100",children:[Y.jsx(Ud,{text:"Birthday Paradox Simulator",animateOn:"view",speed:15}),Y.jsx("h4",{children:"Overview"}),Y.jsx("p",{children:"This simulator demonstrates the famous probability puzzle known as the Birthday Paradox. Surprisingly, in a group of just 23 people, there's over a 50% chance that two individuals share the same birthday."}),Y.jsx("h4",{children:"Functionality"}),Y.jsx("p",{children:"The program generates lists of random birthdays and runs multiple simulations to check for duplicates. Each batch size increases incrementally from 5 to 100, with 20 experiments per group size. It outputs the percentage of simulations in which duplicate birthdays were found."}),Y.jsx("h4",{children:"My Role"}),Y.jsxs("p",{children:["I was responsible for developing the ",Y.jsx("strong",{children:"Trial"}),", ",Y.jsx("strong",{children:"Experiment"}),", and",Y.jsx("strong",{children:"Simulator"})," classes. I also wrote unit tests to validate each component and collaborated with a partner who implemented the birthday generator."]}),Y.jsx("h4",{children:"Key Takeaways"}),Y.jsxs("ul",{children:[Y.jsx("li",{children:"Introduced to SOLID principles in object-oriented programming"}),Y.jsx("li",{children:"First experience with test-driven development (TDD)"}),Y.jsx("li",{children:"Learned collaborative version control with GitHub, including pull requests, branching, and code reviews"})]})]})]}),Y.jsx("hr",{className:"my-5",style:{border:"0",height:"1px",background:"linear-gradient(to right, rgba(90, 141, 255, 0.2), transparent, rgba(90, 141, 255, 0.2))"}}),Y.jsxs("div",{className:"row",children:[Y.jsxs("div",{className:"col-lg-6","data-aos":"fade-up",children:[Y.jsx("img",{src:"images/ElevatorRound01.png",alt:"Elevator Simulation Round 1",className:"img-fluid mb-3"}),Y.jsx("img",{src:"images/ElevatorRound05.png",alt:"Elevator Simulation Round 5",className:"img-fluid mb-3"}),Y.jsx("img",{src:"images/ElevatorRound10.png",alt:"Elevator Simulation Round 10",className:"img-fluid"})]}),Y.jsxs("div",{className:"col-lg-5 ml-auto","data-aos":"fade-up","data-aos-delay":"100",children:[Y.jsx(Ud,{text:"Elevator Simulator",animateOn:"view",speed:15}),Y.jsx("h4",{children:"Overview"}),Y.jsx("p",{children:"This project simulates elevator systems in a multi-floor building using four types of elevators and two different scheduler algorithms. It showcases object-oriented design, abstraction, and real-world logic handling."}),Y.jsx("h4",{children:"Features"}),Y.jsxs("ul",{children:[Y.jsxs("li",{children:[Y.jsx("strong",{children:"Elevator Types:"})," Standard, Express, Freight, and Penthouse — each with specific constraints and behaviors."]}),Y.jsxs("li",{children:[Y.jsx("strong",{children:"Schedulers:"})," Simple (first available) and Complex (most efficient based on location and availability)."]}),Y.jsx("li",{children:"Elevators respond to pickup/drop-off calls and execute movement round-by-round until all requests are fulfilled."})]}),Y.jsx("h4",{children:"Design Approach"}),Y.jsx("p",{children:"Elevators extend from an abstract base class that defines shared properties and behaviors. Each scheduler implements a shared interface but executes call assignment differently. Calls are encapsulated in their own class, making the logic modular and maintainable."}),Y.jsx("h4",{children:"My Role"}),Y.jsx("p",{children:"I implemented all elevator logic, developed and tested the Complex Scheduler, and led the refactoring effort for the Call class structure. I also helped resolve merge conflicts and conducted code reviews during collaboration."}),Y.jsx("p",{children:"If youre interested in checking this project out, heres the repo!"}),Y.jsx("p",{children:Y.jsxs("a",{href:"https://github.com/usd-comp-305/project-03-taylor-erickson-sebastian-mojica",target:"_blank",className:"btn btn-dark",rel:"noopener noreferrer",children:[Y.jsx("i",{className:"icon-github"})," View Project on GitHub"]})}),Y.jsx("h4",{children:"Key Takeaways"}),Y.jsxs("ul",{children:[Y.jsx("li",{children:"Applied SOLID principles and abstraction effectively"}),Y.jsx("li",{children:"Practiced test-driven development at scale"}),Y.jsx("li",{children:"Improved proficiency in Git workflows and team collaboration"})]})]})]}),Y.jsx("hr",{className:"my-5",style:{border:"0",height:"1px",background:"linear-gradient(to right, rgba(90, 141, 255, 0.2), transparent, rgba(90, 141, 255, 0.2))"}}),Y.jsxs("div",{className:"row",children:[Y.jsxs("div",{className:"col-lg-6","data-aos":"fade-up",children:[Y.jsx("img",{src:"images/GoFish_demo.png",alt:"Go Fish card game Demo",className:"img-fluid mb-3"}),Y.jsx("img",{src:"images/Rummy_demo.png",alt:"Rummy card game Demo",className:"img-fluid mb-3"}),Y.jsx("img",{src:"images/CardGame_UML.png",alt:"UML overview of Card Game Simulator",className:"img-fluid mb-3"})]}),Y.jsxs("div",{className:"col-lg-5 ml-auto","data-aos":"fade-up","data-aos-delay":"100",children:[Y.jsx(Ud,{text:"Card Game Simulator",animateOn:"view",speed:15}),Y.jsx("h4",{children:"Overview"}),Y.jsx("p",{children:"In this project, me and 3 other students aimed to create a card game simulator that can be used to play any kind of card game by simply extending and creating behaviors for the desired game they would like to create."}),Y.jsx("p",{children:"We already have two games that one can play, a simple Go-Fish card game, and a Rummy card game. But with this program, any card game can be created using the Object-oriented design philosophy of our project"}),Y.jsx("h4",{children:"Functional Requirements"}),Y.jsx("p",{children:"Our project is broken up in a way that allows the developer to implement any kind of card game they'd Like!"}),Y.jsx("p",{children:"We accomplished this by having each card game be made up of game behaviors, (like the rules and whatnot), and player behaviors."}),Y.jsx("p",{children:"At the core of our project is the CardGame class, which serves as the main game controller card game behavior injected into it. It manages the Deck of cards, Players and their behaviors, and delegates the logic according to the game behaviors"}),Y.jsx("p",{children:"This design allows developers to simply create their own game and player behavior for any kind of card game theyd like!"}),Y.jsx("h4",{children:"Design Approach"}),Y.jsx("p",{children:"We decided on a card game simulator in order to demonstrate the core concepts of Object-Oriented Programming."}),Y.jsx("p",{children:"We developed our code according to Test driven development using Mockito as well as JUnit, and applied our SOLID principles"}),Y.jsx("p",{children:"But the way we designed our project was very cool. We wanted to make this project as open ended as possible, so that later down the line, anyone could improve on it and make new card games we haven't implemented yet"}),Y.jsx("p",{children:"In order to do this, we implemented several design patterns into our program. We used the Factory Pattern to create a deck of cards. and the simulator uses a Strategy Pattern to plug in different game logic."}),Y.jsx("p",{children:"Each game defines its own `GameBehavior` and `PlayerBehavior` strategies. We use Dependency Injection to apply the logic into CardGame"}),Y.jsx("p",{children:"The engine `CardGame` remains unaware of which game is being played - making it completely modular and extendable!"}),Y.jsx("h4",{children:"My Role"}),Y.jsx("p",{children:"I was responsible for creating the class stubs and starting the TDD for each part of the project. I mostly focused on implementing the logic for the Deck Of Cards, and the logic behind the participants in the game. I had to make sure that each participant could reliably take in the behaviors of whatever a developer might want in it using Dependency Injection. I was also in charge for a lot of the testing and debugging. This was my first time using Mockito, and working with design patterns. So this was a fun project to work on!"}),Y.jsx("p",{children:"If youre interested in checking this project out, heres the repo!"}),Y.jsx("p",{children:Y.jsxs("a",{href:"https://github.com/usd-comp-305/project-04-taylor-iby-sebastian",target:"_blank",className:"btn btn-dark",rel:"noopener noreferrer",children:[Y.jsx("i",{className:"icon-github"})," View Project on GitHub"]})}),Y.jsx("h4",{children:"Key Takeaways"}),Y.jsxs("ul",{children:[Y.jsx("li",{children:"Applied SOLID principles and abstraction effectively"}),Y.jsx("li",{children:"Practiced test-driven development at scale using Mockito"}),Y.jsx("li",{children:"Improved proficiency in Git workflows and team collaboration"}),Y.jsx("li",{children:"Applied Design Patterns such as Factory pattern and Strategy Pattern"}),Y.jsx("li",{children:"Used Dependency Injection for game and player behaviors"}),Y.jsx("li",{children:"Creating and planning out a design using UML and PlantUML"}),Y.jsx("li",{children:"Using proper documentation such as a README and Javadocs"})]})]})]}),Y.jsxs("div",{className:"container",children:[Y.jsx("h2",{className:"text-center",children:"Slide Deck: Card Game Overview"}),Y.jsx("div",{className:"d-flex justify-content-center",children:Y.jsx("iframe",{src:"https://docs.google.com/presentation/d/e/2PACX-1vRFLTP-leg9ET0Izu0b3Jq3sFtKxQehMg9ckumcgtur88i6RcYmN5MfhUmtGYKofQ/pubembed?start=false&loop=true&delayms=5000",frameBorder:"0",width:"960",height:"569",allowFullScreen:!0,className:"shadow",style:{maxWidth:"100%",border:"1px solid #ccc",borderRadius:"8px"},title:"Card Game Overview Presentation"})})]}),Y.jsx("hr",{className:"my-5",style:{border:"0",height:"1px",background:"linear-gradient(to right, rgba(90, 141, 255, 0.2), transparent, rgba(90, 141, 255, 0.2))"}})]})}),cC=()=>Y.jsx("section",{className:"site-section",id:"contact-section","data-aos":"fade",children:Y.jsxs("div",{className:"container",children:[Y.jsx("div",{className:"row mb-5",children:Y.jsx("div",{className:"col-12 text-center",children:Y.jsx("h2",{className:"section-title mb-3",children:"Contact Me"})})}),Y.jsxs("div",{className:"row mb-5 text-center",children:[Y.jsx("div",{className:"col-md-12 text-center",children:Y.jsxs("p",{className:"mb-0",children:[Y.jsx("span",{className:"icon-mail_outline d-block h4 text-primary"}),Y.jsx("span",{children:"sebmojica@gmail.com | smojica@sandiego.edu"})]})}),Y.jsx("div",{className:"col-md-12 text-center",children:Y.jsxs("p",{className:"mb-0",children:[Y.jsx("span",{className:"icon-graduation-cap d-block h4 text-primary"}),Y.jsx("a",{href:"Resume.html",children:"Resume"})]})})]})]})}),fC=()=>Y.jsx("footer",{className:"site-footer",children:Y.jsx("div",{className:"container",children:Y.jsx("div",{className:"col-md-12 text-center",children:Y.jsxs("p",{children:["Copyright ©",Y.jsx("script",{children:"document.write(new Date().getFullYear());"})," All rights reserved | This website builds on a template by ",Y.jsx("a",{href:"https://colorlib.com",target:"_blank",rel:"noopener noreferrer",children:"Colorlib"})]})})})}),dC=()=>Y.jsx("div",{className:"loader",children:Y.jsx("div",{className:"spinner-border text-primary",role:"status",children:Y.jsx("span",{className:"sr-only",children:"Loading..."})})});function hC(){return gt.useEffect(()=>{(()=>{["css/bootstrap.min.css","css/jquery-ui.css","css/owl.carousel.min.css","css/owl.theme.default.min.css","css/jquery.fancybox.min.css","css/bootstrap-datepicker.css","fonts/flaticon/font/flaticon.css","css/aos.css","fonts/icomoon/style.css"].forEach(s=>{const a=document.createElement("link");a.rel="stylesheet",a.href=s,document.head.appendChild(a)})})(),window.AOS&&window.AOS.init({duration:800,easing:"slide",once:!1});const e=()=>{window.$&&(window.$(".loader").delay(1e3).fadeOut("slow"),window.$("#overlayer").delay(1e3).fadeOut("slow"),window.$(".js-clone-nav").each(function(){window.$(this).clone().attr("class","site-nav-wrap").appendTo(".site-mobile-menu-body")}),setTimeout(()=>{let d=0;window.$(".site-mobile-menu .has-children").each(function(){const h=window.$(this);h.prepend('<span class="arrow-collapse collapsed">'),h.find(".arrow-collapse").attr({"data-toggle":"collapse","data-target":"#collapseItem"+d}),h.find("> ul").attr({class:"collapse",id:"collapseItem"+d}),d++})},1e3),window.$("body").on("click",".arrow-collapse",function(d){const h=window.$(this);h.closest("li").find(".collapse").hasClass("show")?h.removeClass("active"):h.addClass("active"),d.preventDefault()}),window.$("body").on("click",".js-menu-toggle",function(d){const h=window.$(this);d.preventDefault(),window.$("body").hasClass("offcanvas-menu")?(window.$("body").removeClass("offcanvas-menu"),h.removeClass("active")):(window.$("body").addClass("offcanvas-menu"),h.addClass("active"))}),window.$(document).mouseup(function(d){const h=window.$(".site-mobile-menu");!h.is(d.target)&&h.has(d.target).length===0&&window.$("body").hasClass("offcanvas-menu")&&window.$("body").removeClass("offcanvas-menu")}),window.$(".js-sticky-header").sticky({topSpacing:0}),window.$("body").on("click",".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a",function(d){d.preventDefault();const h=this.hash;window.$("html, body").animate({scrollTop:window.$(h).offset().top},600,"easeInOutExpo",function(){window.location.hash=h})}),window.$(window).scroll(function(){window.$(this).scrollTop()>100?window.$(".js-sticky-header").addClass("shrink"):window.$(".js-sticky-header").removeClass("shrink")}),window.$(".slide-one-item").length>0&&window.$(".slide-one-item").owlCarousel({center:!1,items:1,loop:!0,stagePadding:0,margin:0,autoplay:!0,pauseOnHover:!1,nav:!1,navText:['<span class="icon-keyboard_arrow_left">','<span class="icon-keyboard_arrow_right">']}),window.$(".fancybox").on("click",function(){const d=window.$(".fancybox");return window.$.fancybox.open(d,{},d.index(this)),!1}))};(()=>{const i=["js/jquery-3.3.1.min.js","js/jquery-ui.js","js/popper.min.js","js/bootstrap.min.js","js/owl.carousel.min.js","js/jquery.countdown.min.js","js/jquery.easing.1.3.js","js/aos.js","js/jquery.fancybox.min.js","js/jquery.sticky.js","js/isotope.pkgd.min.js","js/main.js"];let s=0;i.forEach((a,u)=>{const c=document.createElement("script");c.src=a,c.onload=()=>{s++,s===i.length&&e()},c.onerror=()=>{console.warn(`Failed to load script: ${a}`),s++,s===i.length&&e()},document.head.appendChild(c)})})()},[]),Y.jsxs("div",{className:"App",children:[Y.jsx("div",{id:"overlayer"}),Y.jsx(dC,{}),Y.jsxs("div",{className:"site-wrap",children:[Y.jsx(GS,{}),Y.jsx(iC,{}),Y.jsx(uC,{}),Y.jsx(cC,{}),Y.jsx(fC,{})]})]})}const pC=Ay.createRoot(document.getElementById("root"));pC.render(Y.jsx(xy.StrictMode,{children:Y.jsx(hC,{})}));
