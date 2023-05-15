(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const ht=(e,t)=>e===t,se=Symbol("solid-proxy"),gt=Symbol("solid-dev-component"),oe={equals:ht};let Fe=Ge;const k=1,ie=2,Me={owned:null,cleanups:null,context:null,owner:null};var m=null;let ge=null,p=null,C=null,T=null,ue=0;function qe(e,t){const n=p,r=m,s=e.length===0,o=s?Me:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},l=s?e:()=>e(()=>O(()=>de(o)));m=o,p=null;try{return M(l,!0)}finally{p=n,m=r}}function _(e,t){t=t?Object.assign({},oe,t):oe;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),Ve(n,s));return[He.bind(n),r]}function yt(e,t,n){const r=fe(e,t,!0,k);V(r)}function L(e,t,n){const r=fe(e,t,!1,k);V(r)}function pt(e,t,n){Fe=Pt;const r=fe(e,t,!1,k);(!n||!n.render)&&(r.user=!0),T?T.push(r):V(r)}function w(e,t,n){n=n?Object.assign({},oe,n):oe;const r=fe(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,V(r),He.bind(r)}function O(e){if(p===null)return e();const t=p;p=null;try{return e()}finally{p=t}}function Pe(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let u=0;u<e.length;u++)i[u]=e[u]()}else i=e();if(o){o=!1;return}const c=O(()=>t(i,s,l));return s=i,c}}function Ue(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function mt(){return m}function bt(e,t){const n=m,r=p;m=e,p=null;try{return M(t,!0)}catch(s){Se(s)}finally{m=n,p=r}}function wt(e){const t=p,n=m;return Promise.resolve().then(()=>{p=t,m=n;let r;return M(e,!1),p=m=null,r?r.done:void 0})}function D(e,t){const n=Symbol("context");return{id:n,Provider:xt(n),defaultValue:e}}function N(e){let t;return(t=We(m,e.id))!==void 0?t:e.defaultValue}function xe(e){const t=w(e),n=w(()=>me(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function He(){if(this.sources&&this.state)if(this.state===k)V(this);else{const e=C;C=null,M(()=>ce(this),!1),C=e}if(p){const e=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(e)):(p.sources=[this],p.sourceSlots=[e]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function Ve(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&M(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],l=ge&&ge.running;l&&ge.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?C.push(o):T.push(o),o.observers&&Xe(o)),l||(o.state=k)}if(C.length>1e6)throw C=[],new Error},!1)),t}function V(e){if(!e.fn)return;de(e);const t=m,n=p,r=ue;p=m=e,vt(e,e.value,r),p=n,m=t}function vt(e,t,n){let r;try{r=e.fn(t)}catch(s){return e.pure&&(e.state=k,e.owned&&e.owned.forEach(de),e.owned=null),e.updatedAt=n+1,Se(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ve(e,r):e.value=r,e.updatedAt=n)}function fe(e,t,n,r=k,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:null,pure:n};return m===null||m!==Me&&(m.owned?m.owned.push(o):m.owned=[o]),o}function le(e){if(e.state===0)return;if(e.state===ie)return ce(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ue);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===k)V(e);else if(e.state===ie){const r=C;C=null,M(()=>ce(e,t[0]),!1),C=r}}function M(e,t){if(C)return e();let n=!1;t||(C=[]),T?n=!0:T=[],ue++;try{const r=e();return At(n),r}catch(r){n||(T=null),C=null,Se(r)}}function At(e){if(C&&(Ge(C),C=null),e)return;const t=T;T=null,t.length&&M(()=>Fe(t),!1)}function Ge(e){for(let t=0;t<e.length;t++)le(e[t])}function Pt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:le(r)}for(t=0;t<n;t++)le(e[t])}function ce(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===k?r!==t&&(!r.updatedAt||r.updatedAt<ue)&&le(r):s===ie&&ce(r,t)}}}function Xe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ie,n.pure?C.push(n):T.push(n),n.observers&&Xe(n))}}function de(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();r<s.length&&(o.sourceSlots[l]=r,s[r]=o,n.observerSlots[r]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)de(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Se(e){throw e}function We(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:We(e.owner,t):void 0}function me(e){if(typeof e=="function"&&!e.length)return me(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=me(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function xt(e,t){return function(r){let s;return L(()=>s=O(()=>(m.context={[e]:r.value},xe(()=>r.children))),void 0),s}}function g(e,t){return O(()=>e(t||{}))}function te(){return!0}const be={get(e,t,n){return t===se?n:e.get(t)},has(e,t){return t===se?!0:e.has(t)},set:te,deleteProperty:te,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:te,deleteProperty:te}},ownKeys(e){return e.keys()}};function ye(e){return(e=typeof e=="function"?e():e)?e:{}}function x(...e){let t=!1;for(let r=0;r<e.length;r++){const s=e[r];t=t||!!s&&se in s,e[r]=typeof s=="function"?(t=!0,w(s)):s}if(t)return new Proxy({get(r){for(let s=e.length-1;s>=0;s--){const o=ye(e[s])[r];if(o!==void 0)return o}},has(r){for(let s=e.length-1;s>=0;s--)if(r in ye(e[s]))return!0;return!1},keys(){const r=[];for(let s=0;s<e.length;s++)r.push(...Object.keys(ye(e[s])));return[...new Set(r)]}},be);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const s=Object.getOwnPropertyDescriptors(e[r]);for(const o in s)o in n||Object.defineProperty(n,o,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const i=(e[l]||{})[o];if(i!==void 0)return i}}})}return n}function j(e,...t){const n=new Set(t.length>1?t.flat():t[0]);if(se in e){const s=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},be));return s.push(new Proxy({get(o){return n.has(o)?void 0:e[o]},has(o){return n.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!n.has(o))}},be)),s}const r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter(s=>!n.has(s))),t.map(s=>{const o={};for(let l=0;l<s.length;l++){const i=s[l];i in e&&Object.defineProperty(o,i,r[i]?r[i]:{get(){return e[i]},set(){return!0},enumerable:!0})}return o})}const St=e=>`Stale read from <${e}>.`;function Ye(e){const t=e.keyed,n=w(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return w(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?O(()=>s(t?r:()=>{if(!O(n))throw St("Show");return e.when})):s}return e.fallback},void 0,void 0)}const Ct=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],$t=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ct]),Et=new Set(["innerHTML","textContent","innerText","children"]),Nt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ot=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Lt(e,t){const n=Ot[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Tt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),kt=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Rt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function It(e,t,n){let r=n.length,s=t.length,o=r,l=0,i=0,c=t[s-1].nextSibling,u=null;for(;l<s||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const a=o<r?i?n[i-1].nextSibling:n[o-i]:c;for(;i<o;)e.insertBefore(n[i++],a)}else if(o===i)for(;l<s;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],a),t[s]=n[o]}else{if(!u){u=new Map;let f=i;for(;f<o;)u.set(n[f],f++)}const a=u.get(t[l]);if(a!=null)if(i<a&&a<o){let f=l,d=1,v;for(;++f<s&&f<o&&!((v=u.get(t[f]))==null||v!==a+d);)d++;if(d>a-i){const A=t[l];for(;i<a;)e.insertBefore(n[i++],A)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const ke="_$DX_DELEGATE";function Kt(e,t,n,r={}){let s;return qe(o=>{s=o,t===document?e():ze(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function Ce(e,t,n){let r;const s=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},o=t?()=>(r||(r=s())).cloneNode(!0):()=>O(()=>document.importNode(r||(r=s()),!0));return o.cloneNode=o,o}function Je(e,t=window.document){const n=t[ke]||(t[ke]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,qt))}}function ae(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function _t(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function W(e,t){t==null?e.removeAttribute("class"):e.className=t}function Dt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n)}function jt(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let o,l;for(o=0,l=s.length;o<l;o++){const i=s[o];!i||i==="undefined"||t[i]||(Re(e,i,!1),delete n[i])}for(o=0,l=r.length;o<l;o++){const i=r[o],c=!!t[i];!i||i==="undefined"||n[i]===c||!c||(Re(e,i,!0),n[i]=c)}return n}function Bt(e,t,n){if(!t)return n?ae(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,o;for(o in n)t[o]==null&&r.removeProperty(o),delete n[o];for(o in t)s=t[o],s!==n[o]&&(r.setProperty(o,s),n[o]=s);return n}function we(e,t={},n,r){const s={};return r||L(()=>s.children=H(e,t.children,s.children)),L(()=>t.ref&&t.ref(e)),L(()=>Ft(e,t,n,!0,s,!0)),s}function ze(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return H(e,t,r,n);L(s=>H(e,t(),s,n),r)}function Ft(e,t,n,r,s={},o=!1){t||(t={});for(const l in s)if(!(l in t)){if(l==="children")continue;s[l]=Ie(e,l,null,s[l],n,o)}for(const l in t){if(l==="children"){r||H(e,t.children);continue}const i=t[l];s[l]=Ie(e,l,i,s[l],n,o)}}function Mt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Re(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,o=r.length;s<o;s++)e.classList.toggle(r[s],n)}function Ie(e,t,n,r,s,o){let l,i,c,u,a;if(t==="style")return Bt(e,n,r);if(t==="classList")return jt(e,n,r);if(n===r)return r;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);r&&e.removeEventListener(f,r),n&&e.addEventListener(f,n)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);r&&e.removeEventListener(f,r,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),d=Tt.has(f);if(!d&&r){const v=Array.isArray(r)?r[0]:r;e.removeEventListener(f,v)}(d||n)&&(Dt(e,f,n,d),d&&Je([f]))}else if(t.slice(0,5)==="attr:")ae(e,t.slice(5),n);else if((a=t.slice(0,5)==="prop:")||(c=Et.has(t))||!s&&((u=Lt(t,e.tagName))||(i=$t.has(t)))||(l=e.nodeName.includes("-")))a&&(t=t.slice(5),i=!0),t==="class"||t==="className"?W(e,n):l&&!i&&!c?e[Mt(t)]=n:e[u||t]=n;else{const f=s&&t.indexOf(":")>-1&&Rt[t.split(":")[0]];f?_t(e,f,t,n):ae(e,Nt[t]||t,n)}return n}function qt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function H(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number")if(o==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=U(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||o==="boolean")n=U(e,n,r);else{if(o==="function")return L(()=>{let i=t();for(;typeof i=="function";)i=i();n=H(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],c=n&&Array.isArray(n);if(ve(i,t,n,s))return L(()=>n=H(e,i,n,r,!0)),()=>n;if(i.length===0){if(n=U(e,n,r),l)return n}else c?n.length===0?Ke(e,i,r):It(e,n,i):(n&&U(e),Ke(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=U(e,n,r,t);U(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function ve(e,t,n,r){let s=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],c=n&&n[o],u;if(!(i==null||i===!0||i===!1))if((u=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))s=ve(e,i,c)||s;else if(u==="function")if(r){for(;typeof i=="function";)i=i();s=ve(e,Array.isArray(i)?i:[i],Array.isArray(c)?c:[c])||s}else e.push(i),s=!0;else{const a=String(i);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return s}function Ke(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function U(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(s!==i){const c=i.parentNode===e;!o&&!l?c?e.replaceChild(s,i):e.insertBefore(s,n):c&&i.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const Ut=!1,Ht="http://www.w3.org/2000/svg";function Vt(e,t=!1){return t?document.createElementNS(Ht,e):document.createElement(e)}function Q(e){const[t,n]=j(e,["component"]),r=w(()=>t.component);return w(()=>{const s=r();switch(typeof s){case"function":return Object.assign(s,{[gt]:!0}),O(()=>s(n));case"string":const o=kt.has(s),l=Vt(s,o);return we(l,n,o),l}})}function Gt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Xt([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function Wt(e){try{return document.querySelector(e)}catch{return null}}function Yt(e,t){const n=Wt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Jt(e,t,n,r){let s=!1;const o=i=>typeof i=="string"?{value:i}:i,l=Xt(_(o(e()),{equals:(i,c)=>i.value===c.value}),void 0,i=>(!s&&t(i),i));return n&&Ue(n((i=e())=>{s=!0,l[1](o(i)),s=!1})),{signal:l,utils:r}}function zt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:_({value:""})};return e}function Qt(){return Jt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Yt(window.location.hash.slice(1),n)},e=>Gt(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Zt(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const l={to:s,options:o,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:c=>{c&&(n=!0),i.navigate(s,o)}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}const en=/^(?:[a-z0-9]+:)?\/\//i,tn=/^\/+|(\/)\/+$/g;function Y(e,t=!1){const n=e.replace(tn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ne(e,t,n){if(en.test(t))return;const r=Y(e),s=n&&Y(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+Y(t,!o)}function nn(e,t){if(e==null)throw new Error(t);return e}function Qe(e,t){return Y(e).replace(/\/*(\*.*)?$/g,"")+Y(t)}function rn(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function sn(e,t,n){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),l=o.length;return i=>{const c=i.split("/").filter(Boolean),u=c.length-l;if(u<0||u>0&&s===void 0&&!t)return null;const a={path:l?"":"/",params:{}},f=d=>n===void 0?void 0:n[d];for(let d=0;d<l;d++){const v=o[d],A=c[d],h=v[0]===":",P=h?v.slice(1):v;if(h&&pe(A,f(P)))a.params[P]=A;else if(h||!pe(A,v))return null;a.path+=`/${A}`}if(s){const d=u?c.slice(-u).join("/"):"";if(pe(d,f(s)))a.params[s]=d;else return null}return a}}function pe(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function on(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Ze(e){const t=new Map,n=mt();return new Proxy({},{get(r,s){return t.has(s)||bt(n,()=>t.set(s,w(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function et(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return et(r).reduce((o,l)=>[...o,...s.map(i=>i+l)],[])}const ln=100,tt=D(),he=D(),nt=()=>nn(N(tt),"Make sure your app is wrapped in a <Router />");let J;const rt=()=>J||N(he)||nt().base;function cn(e,t="",n){const{component:r,data:s,children:o}=e,l=!o||Array.isArray(o)&&!o.length,i={key:e,element:r?()=>g(r,{}):()=>{const{element:c}=e;return c===void 0&&n?g(n,{}):c},preload:e.component?r.preload:e.preload,data:s};return st(e.path).reduce((c,u)=>{for(const a of et(u)){const f=Qe(t,a),d=l?f:f.split("/*",1)[0];c.push({...i,originalPath:a,pattern:d,matcher:sn(d,!l,e.matchFilters)})}return c},[])}function an(e,t=0){return{routes:e,score:on(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],l=o.matcher(n);if(!l)return null;r.unshift({...l,route:o})}return r}}}function st(e){return Array.isArray(e)?e:[e]}function ot(e,t="",n,r=[],s=[]){const o=st(e);for(let l=0,i=o.length;l<i;l++){const c=o[l];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const u=cn(c,t,n);for(const a of u){r.push(a);const f=Array.isArray(c.children)&&c.children.length===0;if(c.children&&!f)ot(c.children,a.pattern,n,r,s);else{const d=an([...r],s.length);s.push(d)}r.pop()}}}return r.length?s:s.sort((l,i)=>i.score-l.score)}function un(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function fn(e,t){const n=new URL("http://sar"),r=w(c=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),c}},n,{equals:(c,u)=>c.href===u.href}),s=w(()=>r().pathname),o=w(()=>r().search,!0),l=w(()=>r().hash),i=w(()=>"");return{get pathname(){return s()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return i()},query:Ze(Pe(o,()=>rn(r())))}}function dn(e,t="",n,r){const{signal:[s,o],utils:l={}}=zt(e),i=l.parsePath||(b=>b),c=l.renderPath||(b=>b),u=l.beforeLeave||Zt(),a=ne("",t),f=void 0;if(a===void 0)throw new Error(`${a} is not a valid base path`);a&&!s().value&&o({value:a,replace:!0,scroll:!1});const[d,v]=_(!1),A=async b=>{v(!0);try{await wt(b)}finally{v(!1)}},[h,P]=_(s().value),[$,R]=_(s().state),B=fn(h,$),E=[],q={pattern:a,params:{},path:()=>a,outlet:()=>null,resolvePath(b){return ne(a,b)}};if(n)try{J=q,q.data=n({data:void 0,params:{},location:B,navigate:Te(q)})}finally{J=void 0}function Le(b,y,S){O(()=>{if(typeof y=="number"){y&&(l.go?u.confirm(y,S)&&l.go(y):console.warn("Router integration does not support relative routing"));return}const{replace:Z,resolve:ee,scroll:I,state:G}={replace:!1,resolve:!0,scroll:!0,...S},K=ee?b.resolvePath(y):ne("",y);if(K===void 0)throw new Error(`Path '${y}' is not a routable path`);if(E.length>=ln)throw new Error("Too many redirects");const X=h();if((K!==X||G!==$())&&!Ut){if(u.confirm(K,S)){const dt=E.push({value:X,replace:Z,scroll:I,state:$()});A(()=>{P(K),R(G)}).then(()=>{E.length===dt&&ft({value:K,state:G})})}}})}function Te(b){return b=b||N(he)||q,(y,S)=>Le(b,y,S)}function ft(b){const y=E[0];y&&((b.value!==y.value||b.state!==y.state)&&o({...b,replace:y.replace,scroll:y.scroll}),E.length=0)}L(()=>{const{value:b,state:y}=s();O(()=>{b!==h()&&A(()=>{P(b),R(y)})})});{let b=function(y){if(y.defaultPrevented||y.button!==0||y.metaKey||y.altKey||y.ctrlKey||y.shiftKey)return;const S=y.composedPath().find(X=>X instanceof Node&&X.nodeName.toUpperCase()==="A");if(!S||!S.hasAttribute("link"))return;const Z=S.href;if(S.target||!Z&&!S.hasAttribute("state"))return;const ee=(S.getAttribute("rel")||"").split(/\s+/);if(S.hasAttribute("download")||ee&&ee.includes("external"))return;const I=new URL(Z);if(I.origin!==window.location.origin||a&&I.pathname&&!I.pathname.toLowerCase().startsWith(a.toLowerCase()))return;const G=i(I.pathname+I.search+I.hash),K=S.getAttribute("state");y.preventDefault(),Le(q,G,{resolve:!1,replace:S.hasAttribute("replace"),scroll:!S.hasAttribute("noscroll"),state:K&&JSON.parse(K)})};var ur=b;Je(["click"]),document.addEventListener("click",b),Ue(()=>document.removeEventListener("click",b))}return{base:q,out:f,location:B,isRouting:d,renderPath:c,parsePath:i,navigatorFactory:Te,beforeLeave:u}}function hn(e,t,n,r,s){const{base:o,location:l,navigatorFactory:i}=e,{pattern:c,element:u,preload:a,data:f}=r().route,d=w(()=>r().path);a&&a();const v={parent:t,pattern:c,get child(){return n()},path:d,params:s,data:t.data,outlet:u,resolvePath(A){return ne(o.path(),A,d())}};if(f)try{J=v,v.data=f({data:t.data,params:s,location:l,navigate:i(v)})}finally{J=void 0}return v}const gn=e=>{const{source:t,url:n,base:r,data:s,out:o}=e,l=t||Qt(),i=dn(l,r,s);return g(tt.Provider,{value:i,get children(){return e.children}})},yn=e=>{const t=nt(),n=rt(),r=xe(()=>e.children),s=w(()=>ot(r(),Qe(n.pattern,e.base||""),pn)),o=w(()=>un(s(),t.location.pathname)),l=Ze(()=>{const a=o(),f={};for(let d=0;d<a.length;d++)Object.assign(f,a[d].params);return f});t.out&&t.out.matches.push(o().map(({route:a,path:f,params:d})=>({originalPath:a.originalPath,pattern:a.pattern,path:f,params:d})));const i=[];let c;const u=w(Pe(o,(a,f,d)=>{let v=f&&a.length===f.length;const A=[];for(let h=0,P=a.length;h<P;h++){const $=f&&f[h],R=a[h];d&&$&&R.route.key===$.route.key?A[h]=d[h]:(v=!1,i[h]&&i[h](),qe(B=>{i[h]=B,A[h]=hn(t,A[h-1]||n,()=>u()[h+1],()=>o()[h],l)}))}return i.splice(a.length).forEach(h=>h()),d&&v?d:(c=A[0],A)}));return g(Ye,{get when(){return u()&&c},keyed:!0,children:a=>g(he.Provider,{value:a,get children(){return a.outlet()}})})},_e=e=>{const t=xe(()=>e.children);return x(e,{get children(){return t()}})},pn=()=>{const e=rt();return g(Ye,{get when(){return e.child},keyed:!0,children:t=>g(he.Provider,{value:t,get children(){return t.outlet()}})})};const mn="/assets/NFlogo-e609f202.png",bn="_App_7oq44_1",wn="_logo_7oq44_5",vn="_pulse_7oq44_1",An="_header_7oq44_11",Pn="_link_7oq44_22",xn="_spin_7oq44_1",re={App:bn,logo:wn,pulse:vn,header:An,link:Pn,spin:xn};function it(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=it(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function $e(...e){for(var t=0,n,r,s="";t<e.length;)(n=e[t++])&&(r=it(n))&&(s&&(s+=" "),s+=r);return s}function z(e,t){let n=!1;const r=t.stopPropagation;return t.stopPropagation=()=>{n=!0,r()},typeof e=="function"?e(t):Array.isArray(e)&&e[0](e[1],t),t.stopPropagation=r,{isPropagationStopped:n}}function Sn(e){return!e||e.trim()==="#"}const Cn={tabIndex:0};function lt(e){const t=x(Cn,e),n=w(()=>t.tagName?t.tagName:t.href!=null||t.target!=null||t.rel!=null?"a":"button"),r={get tagName(){return n()}};if(n()==="button")return[{get type(){return t.type||"button"},get disabled(){return t.disabled}},r];const s=w(()=>i=>{if((t.disabled||n()==="a"&&Sn(t.href))&&i.preventDefault(),t.disabled){i.stopPropagation();return}z(t.onClick,i)}),o=w(()=>i=>{i.key===" "&&(i.preventDefault(),s()(i))}),l=()=>n()==="a"?t.disabled?void 0:t.href||"#":t.href;return[{role:"button",disabled:void 0,get tabIndex(){return t.disabled?void 0:t.tabIndex},get href(){return l()},get target(){return n()==="a"?t.target:void 0},get"aria-disabled"(){return t.disabled?t.disabled:void 0},get rel(){return n()==="a"?t.rel:void 0},get onClick(){return s()},get onKeyDown(){return o()}},r]}const $n=e=>{const[t,n]=j(e,["as"]);e.tabIndex;const[r,{tagName:s}]=lt({tagName:t.as,...n});return g(Q,x(n,r,{component:s}))},En=$n,De=Ce("<a>");function Nn(e){return!e||e.trim()==="#"}const On=e=>{const[t,n]=j(e,["onKeyDown"]),[r]=lt(x({tagName:"a"},n)),s=o=>{z(r.onKeyDown,o),z(t.onKeyDown,o)};return Nn(e.href)&&!e.role||e.role==="button"?(()=>{const o=De();return we(o,x(n,r,{onKeyDown:s}),!1,!1),o})():(()=>{const o=De();return we(o,x(n,{get onKeyDown(){return t.onKeyDown}}),!1,!1),o})()},Ln=On;var Tn=Function.prototype.bind.call(Function.prototype.call,[].slice);function kn(e,t){return Tn(e.querySelectorAll(t))}const Ae=D(null),Ee=(e,t=null)=>e!=null?String(e):t||null,Rn=D(null),ct=Rn,In="data-rr-ui-",Kn="rrUi";function Ne(e){return`${In}${e}`}function _n(e){return`${Kn}${e}`}function Dn(e,t,n){const[r,s]=_(t()),o=w(()=>e()!==void 0);return yt(Pe(o,(c,u)=>{!c&&u&&r()!==t()&&s(()=>t())})),[()=>o()?e():r(),(c,...u)=>{n&&n(c,...u),s(()=>c)}]}const jn=D(null),at=jn;function ut(e){const t=N(Ae),n=N(ct),r=N(at),s=w(()=>e.active==null&&e.key!=null?n?.activeKey===e.key:e.active),o=w(()=>n&&!e.role&&n.role==="tablist"?"tab":e.role),l=w(()=>u=>{if(e.disabled)return;let a=z(e.onClick,u);e.key!=null&&t&&!a.isPropagationStopped&&t(e.key,u)});return[{get role(){return o()},get[Ne("event-key")](){return n?e.key:void 0},get id(){return n?n.getControllerId(e.key):void 0},get tabIndex(){return o()==="tab"&&(e.disabled||!s())?-1:void 0},get["aria-controls"](){return(s()||!r?.unmountOnExit&&!r?.mountOnEnter)&&n?n.getControlledId(e.key):void 0},get["aria-disabled"](){return o()==="tab"&&e.disabled?!0:void 0},get["aria-selected"](){return o()==="tab"&&s()?!0:void 0},get onClick(){return l()}},{get isActive(){return s()}}]}const Bn={as:En},Fn=e=>{const[t,n]=j(x(Bn,e),["as","active","eventKey"]),[r,s]=ut(x({get active(){return e.active},get key(){return Ee(e.eventKey,e.href)}},n));return r[Ne("active")]=s.isActive,g(Q,x({get component(){return t.as}},n,r))},Mn=Fn,je=e=>"",Be=Ne("event-key"),qn={as:"div"},Un=e=>{const[t,n]=j(x(qn,e),["as","onSelect","activeKey","role","onKeyDown"]),[r,s]=_(!1),[o,l]=_(null),i=N(Ae),c=N(at),u=h=>{const P=o();if(!P)return null;const $=kn(P,`[${Be}]:not([aria-disabled=true])`),R=P.querySelector("[aria-selected=true]");if(!R||R!==document.activeElement)return null;const B=$.indexOf(R);if(B===-1)return null;let E=B+h;return E>=$.length&&(E=0),E<0&&(E=$.length-1),$[E]},a=(h,P)=>{h!=null&&(t.onSelect?.(h,P),i?.(h,P))},f=h=>{if(z(t.onKeyDown,h),!c)return;let P;switch(h.key){case"ArrowLeft":case"ArrowUp":P=u(-1);break;case"ArrowRight":case"ArrowDown":P=u(1);break;default:return}P&&(h.preventDefault(),a(P.dataset[_n("EventKey")]||null,h),s(!0))};pt(()=>{o()&&r()&&o().querySelector(`[${Be}][aria-selected=true]`)?.focus(),s(!1)});const d=h=>{l(h),typeof n.ref=="function"&&n.ref(h)},v=()=>Ee(c?.activeKey??t.activeKey),A=()=>t.role||(c?"tablist":void 0);return g(Ae.Provider,{value:a,get children(){return g(ct.Provider,{value:{get role(){return A()},get activeKey(){return v()},get getControlledId(){return c?.getControlledId||je},get getControllerId(){return c?.getControllerId||je}},get children(){return g(Q,x({get component(){return t.as},get["data-active-key"](){return v()}},n,{onKeyDown:f,ref:d,get role(){return A()}}))}})}})},Hn=Object.assign(Un,{Item:Mn}),Vn=["xxl","xl","lg","md","sm","xs"],Gn=D({prefixes:{},breakpoints:Vn});function Oe(e,t){const n=N(Gn);return e||n.prefixes[t]||t}function Xn(e,{Component:t,defaultProps:n={}}={}){return s=>{const[o,l]=j(x({as:t},n,s),["class","bsPrefix","as"]),i=Oe(o.bsPrefix,e);return g(Q,x({get component(){return o.as||"div"},get class(){return $e(o.class,i)}},l))}}const Wn=D(null),Yn=Wn,Jn=D(null),zn=Jn,Qn=Xn("nav-item"),Zn={as:Ln,disabled:!1},er=e=>{const[t,n]=j(x(Zn,e),["as","bsPrefix","class","active","eventKey"]),r=Oe(t.bsPrefix,"nav-link"),[s,o]=ut(x({get key(){return Ee(t.eventKey,n.href)},get active(){return t.active}},n));return g(Q,x({get component(){return t.as}},n,s,{get class(){return $e(t.class,r,n.disabled&&"disabled",o.isActive&&"active")}}))},tr=er,nr={as:"div",justify:!1,fill:!1},rr=e=>{const[t,n]=j(x(nr,e),["as","activeKey","defaultActiveKey","bsPrefix","variant","fill","justify","navbar","navbarScroll","class","onSelect"]),[r,s]=Dn(()=>t.activeKey,()=>t.defaultActiveKey,t.onSelect),o=Oe(t.bsPrefix,"nav");let l,i,c=!1;const u=N(zn),a=N(Yn);return u?(l=u.bsPrefix,c=t.navbar==null?!0:t.navbar):a&&({cardHeaderBsPrefix:i}=a),g(Hn,x({get as(){return t.as},get activeKey(){return r()},onSelect:s,get class(){return $e(t.class,{[o]:!c,[`${l}-nav`]:c,[`${l}-nav-scroll`]:c&&t.navbarScroll,[`${i}-${t.variant}`]:!!i,[`${o}-${t.variant}`]:!!t.variant,[`${o}-fill`]:t.fill,[`${o}-justified`]:t.justify})}},n))},F=Object.assign(rr,{Item:Qn,Link:tr});function sr(){return g(F,{defaultActiveKey:"#",as:"ul",get children(){return[g(F.Item,{as:"li",get children(){return g(F.Link,{href:"#",children:"Discord"})}}),g(F.Item,{as:"li",get children(){return g(F.Link,{eventKey:"link-1",children:"Jogar"})}}),g(F.Item,{as:"li",get children(){return g(F.Link,{eventKey:"link-2",children:"Instagram"})}})]}})}const or=Ce('<div><header><img alt="logo"><p>Faça sua história, acesse nosso Discord!'),ir=()=>(()=>{const e=or(),t=e.firstChild,n=t.firstChild;return ze(e,g(sr,{}),t),ae(n,"src",mn),L(r=>{const s=re.App,o=re.header,l=re.logo;return s!==r._v$&&W(e,r._v$=s),o!==r._v$2&&W(t,r._v$2=o),l!==r._v$3&&W(n,r._v$3=l),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})(),lr=Ce("<div><h1>ABOUT"),cr=()=>(()=>{const e=lr();return L(()=>W(e,re.App)),e})(),ar=document.getElementById("root");Kt(()=>g(gn,{get children(){return g(yn,{get children(){return[g(_e,{path:"/",component:ir})," ",g(_e,{path:"/about",component:cr})]}})}}),ar);
