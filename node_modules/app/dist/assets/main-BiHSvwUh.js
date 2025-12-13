(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=globalThis,ce=kt.ShadowRoot&&(kt.ShadyCSS===void 0||kt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,he=Symbol(),Oe=new WeakMap;let is=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==he)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ce&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Oe.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Oe.set(e,t))}return t}toString(){return this.cssText}};const Qs=i=>new is(typeof i=="string"?i:i+"",void 0,he),ot=(i,...t)=>{const e=i.length===1?i[0]:t.reduce(((s,r,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1]),i[0]);return new is(e,i,he)},Xs=(i,t)=>{if(ce)i.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),r=kt.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},ke=ce?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Qs(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:tr,defineProperty:er,getOwnPropertyDescriptor:sr,getOwnPropertyNames:rr,getOwnPropertySymbols:ir,getPrototypeOf:nr}=Object,k=globalThis,Te=k.trustedTypes,or=Te?Te.emptyScript:"",Kt=k.reactiveElementPolyfillSupport,pt=(i,t)=>i,Rt={toAttribute(i,t){switch(t){case Boolean:i=i?or:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},ue=(i,t)=>!tr(i,t),Re={attribute:!0,type:String,converter:Rt,reflect:!1,useDefault:!1,hasChanged:ue};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),k.litPropertyMetadata??(k.litPropertyMetadata=new WeakMap);let K=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Re){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&er(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:n}=sr(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:r,set(o){const l=r==null?void 0:r.call(this);n==null||n.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Re}static _$Ei(){if(this.hasOwnProperty(pt("elementProperties")))return;const t=nr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(pt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(pt("properties"))){const e=this.properties,s=[...rr(e),...ir(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(ke(r))}else t!==void 0&&e.push(ke(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach((e=>e(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xs(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach((e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)}))}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach((e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var n;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:Rt).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var n,o;const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const l=s.getPropertyOptions(r),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((n=l.converter)==null?void 0:n.fromAttribute)!==void 0?l.converter:Rt;this._$Em=r;const d=a.fromAttribute(e,l.type);this[r]=d??((o=this._$Ej)==null?void 0:o.get(r))??d,this._$Em=null}}requestUpdate(t,e,s){var r;if(t!==void 0){const n=this.constructor,o=this[t];if(s??(s=n.getPropertyOptions(t)),!((s.hasChanged??ue)(o,e)||s.useDefault&&s.reflect&&o===((r=this._$Ej)==null?void 0:r.get(t))&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:n},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r){const{wrapped:l}=o,a=this[n];l!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach((r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)})),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach((s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach((e=>this._$ET(e,this[e])))),this._$EM()}updated(t){}firstUpdated(t){}};K.elementStyles=[],K.shadowRootOptions={mode:"open"},K[pt("elementProperties")]=new Map,K[pt("finalized")]=new Map,Kt==null||Kt({ReactiveElement:K}),(k.reactiveElementVersions??(k.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=globalThis,Ut=ft.trustedTypes,Ue=Ut?Ut.createPolicy("lit-html",{createHTML:i=>i}):void 0,ns="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,os="?"+C,ar=`<${os}>`,H=document,gt=()=>H.createComment(""),_t=i=>i===null||typeof i!="object"&&typeof i!="function",de=Array.isArray,lr=i=>de(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Zt=`[ 	
\f\r]`,lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,Me=/>/g,N=RegExp(`>|${Zt}(?:([^\\s"'>=/]+)(${Zt}*=${Zt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Le=/'/g,De=/"/g,as=/^(?:script|style|textarea|title)$/i,cr=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),y=cr(1),Q=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),je=new WeakMap,L=H.createTreeWalker(H,129);function ls(i,t){if(!de(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ue!==void 0?Ue.createHTML(t):t}const hr=(i,t)=>{const e=i.length-1,s=[];let r,n=t===2?"<svg>":t===3?"<math>":"",o=lt;for(let l=0;l<e;l++){const a=i[l];let d,f,u=-1,c=0;for(;c<a.length&&(o.lastIndex=c,f=o.exec(a),f!==null);)c=o.lastIndex,o===lt?f[1]==="!--"?o=Ne:f[1]!==void 0?o=Me:f[2]!==void 0?(as.test(f[2])&&(r=RegExp("</"+f[2],"g")),o=N):f[3]!==void 0&&(o=N):o===N?f[0]===">"?(o=r??lt,u=-1):f[1]===void 0?u=-2:(u=o.lastIndex-f[2].length,d=f[1],o=f[3]===void 0?N:f[3]==='"'?De:Le):o===De||o===Le?o=N:o===Ne||o===Me?o=lt:(o=N,r=void 0);const h=o===N&&i[l+1].startsWith("/>")?" ":"";n+=o===lt?a+ar:u>=0?(s.push(d),a.slice(0,u)+ns+a.slice(u)+C+h):a+C+(u===-2?l:h)}return[ls(i,n+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};let ee=class cs{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let n=0,o=0;const l=t.length-1,a=this.parts,[d,f]=hr(t,e);if(this.el=cs.createElement(d,s),L.currentNode=this.el.content,e===2||e===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=L.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(ns)){const c=f[o++],h=r.getAttribute(u).split(C),p=/([.?@])?(.*)/.exec(c);a.push({type:1,index:n,name:p[2],strings:h,ctor:p[1]==="."?dr:p[1]==="?"?pr:p[1]==="@"?fr:Ht}),r.removeAttribute(u)}else u.startsWith(C)&&(a.push({type:6,index:n}),r.removeAttribute(u));if(as.test(r.tagName)){const u=r.textContent.split(C),c=u.length-1;if(c>0){r.textContent=Ut?Ut.emptyScript:"";for(let h=0;h<c;h++)r.append(u[h],gt()),L.nextNode(),a.push({type:2,index:++n});r.append(u[c],gt())}}}else if(r.nodeType===8)if(r.data===os)a.push({type:2,index:n});else{let u=-1;for(;(u=r.data.indexOf(C,u+1))!==-1;)a.push({type:7,index:n}),u+=C.length-1}n++}}static createElement(t,e){const s=H.createElement("template");return s.innerHTML=t,s}};function X(i,t,e=i,s){var o,l;if(t===Q)return t;let r=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const n=_t(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),n===void 0?r=void 0:(r=new n(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=r:e._$Cl=r),r!==void 0&&(t=X(i,r._$AS(i,t.values),r,s)),t}let ur=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??H).importNode(e,!0);L.currentNode=r;let n=L.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new pe(n,n.nextSibling,this,t):a.type===1?d=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(d=new mr(n,this,t)),this._$AV.push(d),a=s[++l]}o!==(a==null?void 0:a.index)&&(n=L.nextNode(),o++)}return L.currentNode=H,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},pe=class hs{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),_t(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==Q&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):lr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$&&_t(this._$AH)?this._$AA.nextSibling.data=t:this.T(H.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=ee.createElement(ls(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(e);else{const o=new ur(r,this),l=o.u(this.options);o.p(e),this.T(l),this._$AH=o}}_$AC(t){let e=je.get(t.strings);return e===void 0&&je.set(t.strings,e=new ee(t)),e}k(t){de(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const n of t)r===e.length?e.push(s=new hs(this.O(gt()),this.O(gt()),this,this.options)):s=e[r],s._$AI(n),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},Ht=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,n){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=$}_$AI(t,e=this,s,r){const n=this.strings;let o=!1;if(n===void 0)t=X(this,t,e,0),o=!_t(t)||t!==this._$AH&&t!==Q,o&&(this._$AH=t);else{const l=t;let a,d;for(t=n[0],a=0;a<n.length-1;a++)d=X(this,l[s+a],e,a),d===Q&&(d=this._$AH[a]),o||(o=!_t(d)||d!==this._$AH[a]),d===$?t=$:t!==$&&(t+=(d??"")+n[a+1]),this._$AH[a]=d}o&&!r&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},dr=class extends Ht{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}},pr=class extends Ht{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}},fr=class extends Ht{constructor(t,e,s,r,n){super(t,e,s,r,n),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??$)===Q)return;const s=this._$AH,r=t===$&&s!==$||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==$&&(s===$||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},mr=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}};const Gt=ft.litHtmlPolyfillSupport;Gt==null||Gt(ee,pe),(ft.litHtmlVersions??(ft.litHtmlVersions=[])).push("3.3.1");const gr=(i,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let r=s._$litPart$;if(r===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=r=new pe(t.insertBefore(gt(),n),n,void 0,e??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis;let S=class extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=gr(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Q}};var rs;S._$litElement$=!0,S.finalized=!0,(rs=j.litElementHydrateSupport)==null||rs.call(j,{LitElement:S});const Qt=j.litElementPolyfillSupport;Qt==null||Qt({LitElement:S});(j.litElementVersions??(j.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=i=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(i,t)})):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _r={attribute:!0,type:String,converter:Rt,reflect:!1,hasChanged:ue},yr=(i=_r,t,e)=>{const{kind:s,metadata:r}=e;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),n.set(e.name,i),s==="accessor"){const{name:o}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,a,i)},init(l){return l!==void 0&&this.C(o,void 0,i,l),l}}}if(s==="setter"){const{name:o}=e;return function(l){const a=this[o];t.call(this,l),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+s)};function T(i){return(t,e)=>typeof e=="object"?yr(i,t,e):((s,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,s),o?Object.getOwnPropertyDescriptor(r,n):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(i){return T({...i,state:!0,attribute:!1})}var Y,Ie;class dt extends Error{}dt.prototype.name="InvalidTokenError";function vr(i){return decodeURIComponent(atob(i).replace(/(.)/g,(t,e)=>{let s=e.charCodeAt(0).toString(16).toUpperCase();return s.length<2&&(s="0"+s),"%"+s}))}function $r(i){let t=i.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return vr(t)}catch{return atob(t)}}function us(i,t){if(typeof i!="string")throw new dt("Invalid token specified: must be a string");t||(t={});const e=t.header===!0?0:1,s=i.split(".")[e];if(typeof s!="string")throw new dt(`Invalid token specified: missing part #${e+1}`);let r;try{r=$r(s)}catch(n){throw new dt(`Invalid token specified: invalid base64 for part #${e+1} (${n.message})`)}try{return JSON.parse(r)}catch(n){throw new dt(`Invalid token specified: invalid json for part #${e+1} (${n.message})`)}}const br="mu:context",se=`${br}:change`;class wr{constructor(t,e){this._proxy=Er(t,e)}get value(){return this._proxy}set value(t){Object.assign(this._proxy,t)}apply(t){this.value=t(this.value)}}class fe extends HTMLElement{constructor(t){super(),console.log("Constructing context provider",this),this.context=new wr(t,this),this.style.display="contents"}attach(t){return this.addEventListener(se,t),t}detach(t){this.removeEventListener(se,t)}}function Er(i,t){return new Proxy(i,{get:(s,r,n)=>r==="then"?void 0:Reflect.get(s,r,n),set:(s,r,n,o)=>{const l=i[r];console.log(`Context['${r.toString()}'] <= `,n);const a=Reflect.set(s,r,n,o);if(a){let d=new CustomEvent(se,{bubbles:!0,cancelable:!0,composed:!0});Object.assign(d,{property:r,oldValue:l,value:n}),t.dispatchEvent(d)}else console.log(`Context['${r}] was not set to ${n}`);return a}})}function Ar(i,t){const e=ds(t,i);return new Promise((s,r)=>{if(e){const n=e.localName;customElements.whenDefined(n).then(()=>s(e))}else r({context:t,reason:`No provider for this context "${t}:`})})}function ds(i,t){const e=`[provides="${i}"]`;if(!t||t===document.getRootNode())return;const s=t.closest(e);if(s)return s;const r=t.getRootNode();if(r instanceof ShadowRoot)return ds(i,r.host)}class Sr extends CustomEvent{constructor(t,e="mu:message"){super(e,{bubbles:!0,composed:!0,detail:t})}}function ps(i="mu:message"){return(t,...e)=>t.dispatchEvent(new Sr(e,i))}class me{constructor(t,e,s="service:message",r=!0){this._pending=[],this._context=e,this._update=t,this._eventType=s,this._running=r}attach(t){t.addEventListener(this._eventType,e=>{e.stopPropagation();const s=e.detail;this.consume(s)})}start(){this._running||(console.log(`Starting ${this._eventType} service`),this._running=!0,this._pending.forEach(t=>this.process(t)))}consume(t){this._running?this.process(t):(console.log(`Queueing ${this._eventType} message`,t),this._pending.push(t))}process(t){console.log(`Processing ${t[0]} message`,t);const e=this._update(t,this._context.value);if(console.log(`Next[${t[0]}] => `,e),!Array.isArray(e))this._context.value=e;else{const[s,...r]=e;this._context.value=s,r.forEach(n=>n.then(o=>{o.length&&this.consume(o)}))}}}const re="mu:auth:jwt",fs=class ms extends me{constructor(t,e){super((s,r)=>this.update(s,r),t,ms.EVENT_TYPE),this._redirectForLogin=e}update(t,e){switch(t[0]){case"auth/signin":{const{token:r,redirect:n}=t[1];return[Pr(r),Xt(n)]}case"auth/signout":return[Cr(e.user),Xt(this._redirectForLogin)];case"auth/redirect":return[e,Xt(this._redirectForLogin,{next:window.location.href})];default:const s=t[0];throw new Error(`Unhandled Auth message "${s}"`)}}};fs.EVENT_TYPE="auth:message";let gs=fs;const _s=ps(gs.EVENT_TYPE);function Xt(i,t){return new Promise((e,s)=>{if(i){const r=window.location.href,n=new URL(i,r);t&&Object.entries(t).forEach(([o,l])=>n.searchParams.set(o,l)),console.log("Redirecting to ",i),window.location.assign(n)}e([])})}class xr extends fe{get redirect(){return this.getAttribute("redirect")||void 0}constructor(){const t=et.authenticateFromLocalStorage();super({user:t,token:t.authenticated?t.token:void 0})}connectedCallback(){new gs(this.context,this.redirect).attach(this)}}class tt{constructor(){this.authenticated=!1,this.username="anonymous"}static deauthenticate(t){return t.authenticated=!1,t.username="anonymous",localStorage.removeItem(re),t}}class et extends tt{constructor(t){super();const e=us(t);console.log("Token payload",e),this.token=t,this.authenticated=!0,this.username=e.username}static authenticate(t){const e=new et(t);return localStorage.setItem(re,t),e}static authenticateFromLocalStorage(){const t=localStorage.getItem(re);return t?et.authenticate(t):new tt}}function Pr(i){return{user:et.authenticate(i),token:i}}function Cr(i){return{user:i&&i.authenticated?tt.deauthenticate(i):i,token:""}}function Or(i){return i&&i.authenticated?{Authorization:`Bearer ${i.token||"NO_TOKEN"}`}:{}}function kr(i){return i.authenticated?us(i.token||""):{}}const ys=Object.freeze(Object.defineProperty({__proto__:null,AuthenticatedUser:et,Provider:xr,User:tt,dispatch:_s,headers:Or,payload:kr},Symbol.toStringTag,{value:"Module"}));function vs(i,t,e){const s=new CustomEvent(t,{bubbles:!0,composed:!0,detail:e});i.dispatchEvent(s)}function Nt(i,t,e){const s=i.target;vs(s,t,e)}function ie(i,t="*"){return i.composedPath().find(r=>{const n=r;return n.tagName&&n.matches(t)})||void 0}const Tr=Object.freeze(Object.defineProperty({__proto__:null,dispatchCustom:vs,originalTarget:ie,relay:Nt},Symbol.toStringTag,{value:"Module"}));function ge(i,...t){const e=i.map((r,n)=>n?[t[n-1],r]:[r]).flat().join("");let s=new CSSStyleSheet;return s.replaceSync(e),s}const Rr=new DOMParser;function I(i,...t){const e=t.map(l),s=i.map((a,d)=>{if(d===0)return[a];const f=e[d-1];return f instanceof Node?[`<ins id="mu-html-${d-1}"></ins>`,a]:[f,a]}).flat().join(""),r=Rr.parseFromString(s,"text/html"),n=r.head.childElementCount?r.head.children:r.body.children,o=new DocumentFragment;return o.replaceChildren(...n),e.forEach((a,d)=>{if(a instanceof Node){const f=o.querySelector(`ins#mu-html-${d}`);if(f){const u=f.parentNode;u==null||u.replaceChild(a,f)}else console.log("Missing insertion point:",`ins#mu-html-${d}`)}}),o;function l(a,d){if(a===null)return"";switch(typeof a){case"string":return He(a);case"bigint":case"boolean":case"number":case"symbol":return He(a.toString());case"object":if(Array.isArray(a)){const f=new DocumentFragment,u=a.map(l);return f.replaceChildren(...u),f}return a instanceof Node?a:new Text(a.toString());default:return new Comment(`[invalid parameter of type "${typeof a}"]`)}}}function He(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function zt(i,t={mode:"open"}){const e=i.attachShadow(t),s={template:r,styles:n};return s;function r(o){const l=o.firstElementChild,a=l&&l.tagName==="TEMPLATE"?l:void 0;return a&&e.appendChild(a.content.cloneNode(!0)),s}function n(...o){e.adoptedStyleSheets=o}}Y=class extends HTMLElement{constructor(){super(),this._state={},zt(this).template(Y.template).styles(Y.styles),this.addEventListener("change",i=>{const t=i.target;if(t){const e=t.name,s=t.value;e&&(this._state[e]=s)}}),this.form&&this.form.addEventListener("submit",i=>{i.preventDefault(),Nt(i,"mu-form:submit",this._state)}),this.submitSlot&&this.submitSlot.addEventListener("slotchange",()=>{var i,t;for(const e of((i=this.submitSlot)==null?void 0:i.assignedNodes())||[])(t=this.form)==null||t.insertBefore(e,this.submitSlot)})}set init(i){this._state=i||{},Ur(this._state,this)}get form(){var i;return(i=this.shadowRoot)==null?void 0:i.querySelector("form")}get submitSlot(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector('slot[name="submit"]');return t||null}},Y.template=I`
    <template>
      <form autocomplete="off">
        <slot></slot>
        <slot name="submit">
          <button type="submit">Submit</button>
        </slot>
      </form>
      <slot name="delete"></slot>
      <style></style>
    </template>
  `,Y.styles=ge`
    form {
      display: grid;
      gap: var(--size-spacing-medium);
      grid-column: 1/-1;
      grid-template-columns:
        subgrid
        [start] [label] [input] [col2] [col3] [end];
    }
    ::slotted(label) {
      display: grid;
      grid-column: label / end;
      grid-template-columns: subgrid;
      gap: var(--size-spacing-medium);
    }
    ::slotted(fieldset) {
      display: contents;
    }
    button[type="submit"] {
      grid-column: input;
      justify-self: start;
    }
  `;function Ur(i,t){const e=Object.entries(i);for(const[s,r]of e){const n=t.querySelector(`[name="${s}"]`);if(n){const o=n;switch(o.type){case"checkbox":const l=o;l.checked=!!r;break;case"date":r instanceof Date?o.value=r.toISOString().substr(0,10):o.value=r;break;default:o.value=r;break}}}return i}const $s=class bs extends me{constructor(t){super((e,s)=>this.update(e,s),t,bs.EVENT_TYPE)}update(t,e){switch(t[0]){case"history/navigate":{const{href:s,state:r}=t[1];return Mr(s,r)}case"history/redirect":{const{href:s,state:r}=t[1];return Lr(s,r)}}}};$s.EVENT_TYPE="history:message";let _e=$s;class ze extends fe{constructor(){super({location:document.location,state:{}}),this.addEventListener("click",t=>{const e=Nr(t);if(e){const s=new URL(e.href);s.origin===this.context.value.location.origin&&(!this._root||s.pathname.startsWith(this._root))&&(console.log("Preventing Click Event on <A>",t),t.preventDefault(),ye(e,"history/navigate",{href:s.pathname+s.search}))}}),window.addEventListener("popstate",t=>{console.log("Popstate",t.state),this.context.value={location:document.location,state:t.state}})}connectedCallback(){new _e(this.context).attach(this),this._root=this.getAttribute("root")||void 0}}function Nr(i){const t=i.currentTarget,e=s=>s.tagName=="A"&&s.href;if(i.button===0)if(i.composed){const r=i.composedPath().find(e);return r||void 0}else{for(let s=i.target;s;s===t?null:s.parentElement)if(e(s))return s;return}}function Mr(i,t={}){return history.pushState(t,"",i),{location:document.location,state:history.state}}function Lr(i,t={}){return history.replaceState(t,"",i),{location:document.location,state:history.state}}const ye=ps(_e.EVENT_TYPE),Dr=Object.freeze(Object.defineProperty({__proto__:null,HistoryProvider:ze,Provider:ze,Service:_e,dispatch:ye},Symbol.toStringTag,{value:"Module"}));class st{constructor(t,e){this._effects=[],this._target=t,this._contextLabel=e}observe(t=void 0){return new Promise((e,s)=>{if(this._provider){const r=new Ve(this._provider,t);this._effects.push(r),e(r)}else Ar(this._target,this._contextLabel).then(r=>{const n=new Ve(r,t);this._provider=r,this._effects.push(n),r.attach(o=>this._handleChange(o)),e(n)}).catch(r=>console.log(`Observer ${this._contextLabel} failed to locate a provider`,r))})}_handleChange(t){console.log("Received change event for observers",t,this._effects),t.stopPropagation(),this._effects.forEach(e=>e.runEffect())}}class Ve{constructor(t,e){this._provider=t,e&&this.setEffect(e)}get context(){return this._provider.context}get value(){return this.context.value}setEffect(t){this._effectFn=t,this.runEffect()}runEffect(){this._effectFn&&this._effectFn(this.context.value)}}const ws=class Es extends HTMLElement{constructor(){super(),this._state={},this._user=new tt,this._authObserver=new st(this,"blazing:auth"),zt(this).template(Es.template),this.form&&this.form.addEventListener("submit",t=>{if(t.preventDefault(),this.src||this.action){if(console.log("Submitting form",this._state),this.action)this.action(this._state);else if(this.src){const e=this.isNew?"POST":"PUT",s=this.isNew?"created":"updated",r=this.isNew?this.src.replace(/[/][$]new$/,""):this.src;jr(r,this._state,e,this.authorization).then(n=>ct(n,this)).then(n=>{const o=`mu-rest-form:${s}`,l=new CustomEvent(o,{bubbles:!0,composed:!0,detail:{method:e,[s]:n,url:r}});this.dispatchEvent(l)}).catch(n=>{const o="mu-rest-form:error",l=new CustomEvent(o,{bubbles:!0,composed:!0,detail:{method:e,error:n,url:r,request:this._state}});this.dispatchEvent(l)})}}}),this.addEventListener("change",t=>{const e=t.target;if(e){const s=e.name,r=e.value;s&&(this._state[s]=r)}})}get src(){return this.getAttribute("src")}get isNew(){return this.hasAttribute("new")}set init(t){this._state=t||{},ct(this._state,this)}get form(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("form")}get authorization(){var t;return(t=this._user)!=null&&t.authenticated?{Authorization:`Bearer ${this._user.token}`}:{}}connectedCallback(){this._authObserver.observe(({user:t})=>{t&&(this._user=t,this.src&&!this.isNew&&qe(this.src,this.authorization).then(e=>{this._state=e,ct(e,this)}))})}attributeChangedCallback(t,e,s){switch(t){case"src":this.src&&s&&s!==e&&!this.isNew&&qe(this.src,this.authorization).then(r=>{this._state=r,ct(r,this)});break;case"new":s&&(this._state={},ct({},this));break}}};ws.observedAttributes=["src","new","action"];ws.template=I`
    <template>
      <form autocomplete="off">
        <slot></slot>
        <slot name="submit">
          <button type="submit">Submit</button>
        </slot>
      </form>
      <slot name="delete"></slot>
      <style>
        form {
          display: grid;
          gap: var(--size-spacing-medium);
          grid-template-columns: [start] 1fr [label] 1fr [input] 3fr 1fr [end];
        }
        ::slotted(label) {
          display: grid;
          grid-column: label / end;
          grid-template-columns: subgrid;
          gap: var(--size-spacing-medium);
        }
        button[type="submit"] {
          grid-column: input;
          justify-self: start;
        }
      </style>
    </template>
  `;function qe(i,t){return fetch(i,{headers:t}).then(e=>{if(e.status!==200)throw`Status: ${e.status}`;return e.json()}).catch(e=>console.log(`Failed to load form from ${i}:`,e))}function ct(i,t){const e=Object.entries(i);for(const[s,r]of e){const n=t.querySelector(`[name="${s}"]`);if(n){const o=n;switch(o.type){case"checkbox":const l=o;l.checked=!!r;break;default:o.value=r;break}}}return i}function jr(i,t,e="PUT",s={}){return fetch(i,{method:e,headers:{"Content-Type":"application/json",...s},body:JSON.stringify(t)}).then(r=>{if(r.status!=200&&r.status!=201)throw`Form submission failed: Status ${r.status}`;return r.json()})}const As=class Ss extends me{constructor(t,e){super(e,t,Ss.EVENT_TYPE,!1)}};As.EVENT_TYPE="mu:message";let xs=As;class Ir extends fe{constructor(t,e,s){super(e),this._user=new tt,this._updateFn=t,this._authObserver=new st(this,s)}connectedCallback(){const t=new xs(this.context,(e,s)=>this._updateFn(e,s,this._user));t.attach(this),this._authObserver.observe(({user:e})=>{console.log("Store got auth",e),e&&(this._user=e),t.start()})}}const Hr=Object.freeze(Object.defineProperty({__proto__:null,Provider:Ir,Service:xs},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=globalThis,ve=Tt.ShadowRoot&&(Tt.ShadyCSS===void 0||Tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$e=Symbol(),Fe=new WeakMap;let Ps=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==$e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ve&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Fe.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Fe.set(e,t))}return t}toString(){return this.cssText}};const zr=i=>new Ps(typeof i=="string"?i:i+"",void 0,$e),Vr=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,r,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new Ps(e,i,$e)},qr=(i,t)=>{if(ve)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),r=Tt.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},Be=ve?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return zr(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Fr,defineProperty:Br,getOwnPropertyDescriptor:Wr,getOwnPropertyNames:Yr,getOwnPropertySymbols:Jr,getPrototypeOf:Kr}=Object,rt=globalThis,We=rt.trustedTypes,Zr=We?We.emptyScript:"",Ye=rt.reactiveElementPolyfillSupport,mt=(i,t)=>i,Mt={toAttribute(i,t){switch(t){case Boolean:i=i?Zr:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},be=(i,t)=>!Fr(i,t),Je={attribute:!0,type:String,converter:Mt,reflect:!1,useDefault:!1,hasChanged:be};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),rt.litPropertyMetadata??(rt.litPropertyMetadata=new WeakMap);let Z=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Je){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Br(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:n}=Wr(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:r,set(o){const l=r==null?void 0:r.call(this);n==null||n.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Je}static _$Ei(){if(this.hasOwnProperty(mt("elementProperties")))return;const t=Kr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(mt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mt("properties"))){const e=this.properties,s=[...Yr(e),...Jr(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(Be(r))}else t!==void 0&&e.push(Be(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qr(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var s;const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(n!==void 0&&r.reflect===!0){const o=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:Mt).toAttribute(e,r.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){var s,r;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const l=n.getPropertyOptions(o),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((s=l.converter)==null?void 0:s.fromAttribute)!==void 0?l.converter:Mt;this._$Em=o,this[o]=a.fromAttribute(e,l.type)??((r=this._$Ej)==null?void 0:r.get(o))??null,this._$Em=null}}requestUpdate(t,e,s){var r;if(t!==void 0){const n=this.constructor,o=this[t];if(s??(s=n.getPropertyOptions(t)),!((s.hasChanged??be)(o,e)||s.useDefault&&s.reflect&&o===((r=this._$Ej)==null?void 0:r.get(t))&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:n},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r){const{wrapped:l}=o,a=this[n];l!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(s)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};Z.elementStyles=[],Z.shadowRootOptions={mode:"open"},Z[mt("elementProperties")]=new Map,Z[mt("finalized")]=new Map,Ye==null||Ye({ReactiveElement:Z}),(rt.reactiveElementVersions??(rt.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=globalThis,Dt=Lt.trustedTypes,Ke=Dt?Dt.createPolicy("lit-html",{createHTML:i=>i}):void 0,Cs="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,Os="?"+O,Gr=`<${Os}>`,z=document,yt=()=>z.createComment(""),vt=i=>i===null||typeof i!="object"&&typeof i!="function",we=Array.isArray,Qr=i=>we(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",te=`[ 	
\f\r]`,ht=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ze=/-->/g,Ge=/>/g,M=RegExp(`>|${te}(?:([^\\s"'>=/]+)(${te}*=${te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qe=/'/g,Xe=/"/g,ks=/^(?:script|style|textarea|title)$/i,Xr=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),ut=Xr(1),it=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),ts=new WeakMap,D=z.createTreeWalker(z,129);function Ts(i,t){if(!we(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ke!==void 0?Ke.createHTML(t):t}const ti=(i,t)=>{const e=i.length-1,s=[];let r,n=t===2?"<svg>":t===3?"<math>":"",o=ht;for(let l=0;l<e;l++){const a=i[l];let d,f,u=-1,c=0;for(;c<a.length&&(o.lastIndex=c,f=o.exec(a),f!==null);)c=o.lastIndex,o===ht?f[1]==="!--"?o=Ze:f[1]!==void 0?o=Ge:f[2]!==void 0?(ks.test(f[2])&&(r=RegExp("</"+f[2],"g")),o=M):f[3]!==void 0&&(o=M):o===M?f[0]===">"?(o=r??ht,u=-1):f[1]===void 0?u=-2:(u=o.lastIndex-f[2].length,d=f[1],o=f[3]===void 0?M:f[3]==='"'?Xe:Qe):o===Xe||o===Qe?o=M:o===Ze||o===Ge?o=ht:(o=M,r=void 0);const h=o===M&&i[l+1].startsWith("/>")?" ":"";n+=o===ht?a+Gr:u>=0?(s.push(d),a.slice(0,u)+Cs+a.slice(u)+O+h):a+O+(u===-2?l:h)}return[Ts(i,n+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class $t{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let n=0,o=0;const l=t.length-1,a=this.parts,[d,f]=ti(t,e);if(this.el=$t.createElement(d,s),D.currentNode=this.el.content,e===2||e===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=D.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(Cs)){const c=f[o++],h=r.getAttribute(u).split(O),p=/([.?@])?(.*)/.exec(c);a.push({type:1,index:n,name:p[2],strings:h,ctor:p[1]==="."?si:p[1]==="?"?ri:p[1]==="@"?ii:Vt}),r.removeAttribute(u)}else u.startsWith(O)&&(a.push({type:6,index:n}),r.removeAttribute(u));if(ks.test(r.tagName)){const u=r.textContent.split(O),c=u.length-1;if(c>0){r.textContent=Dt?Dt.emptyScript:"";for(let h=0;h<c;h++)r.append(u[h],yt()),D.nextNode(),a.push({type:2,index:++n});r.append(u[c],yt())}}}else if(r.nodeType===8)if(r.data===Os)a.push({type:2,index:n});else{let u=-1;for(;(u=r.data.indexOf(O,u+1))!==-1;)a.push({type:7,index:n}),u+=O.length-1}n++}}static createElement(t,e){const s=z.createElement("template");return s.innerHTML=t,s}}function nt(i,t,e=i,s){var r,n;if(t===it)return t;let o=s!==void 0?(r=e._$Co)==null?void 0:r[s]:e._$Cl;const l=vt(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==l&&((n=o==null?void 0:o._$AO)==null||n.call(o,!1),l===void 0?o=void 0:(o=new l(i),o._$AT(i,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=o:e._$Cl=o),o!==void 0&&(t=nt(i,o._$AS(i,t.values),o,s)),t}class ei{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??z).importNode(e,!0);D.currentNode=r;let n=D.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new At(n,n.nextSibling,this,t):a.type===1?d=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(d=new ni(n,this,t)),this._$AV.push(d),a=s[++l]}o!==(a==null?void 0:a.index)&&(n=D.nextNode(),o++)}return D.currentNode=z,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class At{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=nt(this,t,e),vt(t)?t===b||t==null||t===""?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==it&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Qr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==b&&vt(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=$t.createElement(Ts(r.h,r.h[0]),this.options)),r);if(((e=this._$AH)==null?void 0:e._$AD)===n)this._$AH.p(s);else{const o=new ei(n,this),l=o.u(this.options);o.p(s),this.T(l),this._$AH=o}}_$AC(t){let e=ts.get(t.strings);return e===void 0&&ts.set(t.strings,e=new $t(t)),e}k(t){we(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const n of t)r===e.length?e.push(s=new At(this.O(yt()),this.O(yt()),this,this.options)):s=e[r],s._$AI(n),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Vt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,n){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}_$AI(t,e=this,s,r){const n=this.strings;let o=!1;if(n===void 0)t=nt(this,t,e,0),o=!vt(t)||t!==this._$AH&&t!==it,o&&(this._$AH=t);else{const l=t;let a,d;for(t=n[0],a=0;a<n.length-1;a++)d=nt(this,l[s+a],e,a),d===it&&(d=this._$AH[a]),o||(o=!vt(d)||d!==this._$AH[a]),d===b?t=b:t!==b&&(t+=(d??"")+n[a+1]),this._$AH[a]=d}o&&!r&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class si extends Vt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}}class ri extends Vt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==b)}}class ii extends Vt{constructor(t,e,s,r,n){super(t,e,s,r,n),this.type=5}_$AI(t,e=this){if((t=nt(this,t,e,0)??b)===it)return;const s=this._$AH,r=t===b&&s!==b||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==b&&(s===b||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ni{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){nt(this,t)}}const es=Lt.litHtmlPolyfillSupport;es==null||es($t,At),(Lt.litHtmlVersions??(Lt.litHtmlVersions=[])).push("3.3.0");const oi=(i,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let r=s._$litPart$;if(r===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=r=new At(t.insertBefore(yt(),n),n,void 0,e??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=globalThis;class G extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=oi(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return it}}G._$litElement$=!0,G.finalized=!0,(Ie=bt.litElementHydrateSupport)==null||Ie.call(bt,{LitElement:G});const ss=bt.litElementPolyfillSupport;ss==null||ss({LitElement:G});(bt.litElementVersions??(bt.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ai={attribute:!0,type:String,converter:Mt,reflect:!1,hasChanged:be},li=(i=ai,t,e)=>{const{kind:s,metadata:r}=e;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),n.set(e.name,i),s==="accessor"){const{name:o}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,a,i)},init(l){return l!==void 0&&this.C(o,void 0,i,l),l}}}if(s==="setter"){const{name:o}=e;return function(l){const a=this[o];t.call(this,l),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+s)};function Rs(i){return(t,e)=>typeof e=="object"?li(i,t,e):((s,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,s),o?Object.getOwnPropertyDescriptor(r,n):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Us(i){return Rs({...i,state:!0,attribute:!1})}function ci(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function hi(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ns={};(function(i){var t=(function(){var e=function(u,c,h,p){for(h=h||{},p=u.length;p--;h[u[p]]=c);return h},s=[1,9],r=[1,10],n=[1,11],o=[1,12],l=[5,11,12,13,14,15],a={trace:function(){},yy:{},symbols_:{error:2,root:3,expressions:4,EOF:5,expression:6,optional:7,literal:8,splat:9,param:10,"(":11,")":12,LITERAL:13,SPLAT:14,PARAM:15,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",11:"(",12:")",13:"LITERAL",14:"SPLAT",15:"PARAM"},productions_:[0,[3,2],[3,1],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[7,3],[8,1],[9,1],[10,1]],performAction:function(c,h,p,g,m,_,Ft){var E=_.length-1;switch(m){case 1:return new g.Root({},[_[E-1]]);case 2:return new g.Root({},[new g.Literal({value:""})]);case 3:this.$=new g.Concat({},[_[E-1],_[E]]);break;case 4:case 5:this.$=_[E];break;case 6:this.$=new g.Literal({value:_[E]});break;case 7:this.$=new g.Splat({name:_[E]});break;case 8:this.$=new g.Param({name:_[E]});break;case 9:this.$=new g.Optional({},[_[E-1]]);break;case 10:this.$=c;break;case 11:case 12:this.$=c.slice(1);break}},table:[{3:1,4:2,5:[1,3],6:4,7:5,8:6,9:7,10:8,11:s,13:r,14:n,15:o},{1:[3]},{5:[1,13],6:14,7:5,8:6,9:7,10:8,11:s,13:r,14:n,15:o},{1:[2,2]},e(l,[2,4]),e(l,[2,5]),e(l,[2,6]),e(l,[2,7]),e(l,[2,8]),{4:15,6:4,7:5,8:6,9:7,10:8,11:s,13:r,14:n,15:o},e(l,[2,10]),e(l,[2,11]),e(l,[2,12]),{1:[2,1]},e(l,[2,3]),{6:14,7:5,8:6,9:7,10:8,11:s,12:[1,16],13:r,14:n,15:o},e(l,[2,9])],defaultActions:{3:[2,2],13:[2,1]},parseError:function(c,h){if(h.recoverable)this.trace(c);else{let p=function(g,m){this.message=g,this.hash=m};throw p.prototype=Error,new p(c,h)}},parse:function(c){var h=this,p=[0],g=[null],m=[],_=this.table,Ft="",E=0,xe=0,Js=2,Pe=1,Ks=m.slice.call(arguments,1),v=Object.create(this.lexer),R={yy:{}};for(var Bt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Bt)&&(R.yy[Bt]=this.yy[Bt]);v.setInput(c,R.yy),R.yy.lexer=v,R.yy.parser=this,typeof v.yylloc>"u"&&(v.yylloc={});var Wt=v.yylloc;m.push(Wt);var Zs=v.options&&v.options.ranges;typeof R.yy.parseError=="function"?this.parseError=R.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var Gs=function(){var W;return W=v.lex()||Pe,typeof W!="number"&&(W=h.symbols_[W]||W),W},w,U,A,Yt,B={},Ct,P,Ce,Ot;;){if(U=p[p.length-1],this.defaultActions[U]?A=this.defaultActions[U]:((w===null||typeof w>"u")&&(w=Gs()),A=_[U]&&_[U][w]),typeof A>"u"||!A.length||!A[0]){var Jt="";Ot=[];for(Ct in _[U])this.terminals_[Ct]&&Ct>Js&&Ot.push("'"+this.terminals_[Ct]+"'");v.showPosition?Jt="Parse error on line "+(E+1)+`:
`+v.showPosition()+`
Expecting `+Ot.join(", ")+", got '"+(this.terminals_[w]||w)+"'":Jt="Parse error on line "+(E+1)+": Unexpected "+(w==Pe?"end of input":"'"+(this.terminals_[w]||w)+"'"),this.parseError(Jt,{text:v.match,token:this.terminals_[w]||w,line:v.yylineno,loc:Wt,expected:Ot})}if(A[0]instanceof Array&&A.length>1)throw new Error("Parse Error: multiple actions possible at state: "+U+", token: "+w);switch(A[0]){case 1:p.push(w),g.push(v.yytext),m.push(v.yylloc),p.push(A[1]),w=null,xe=v.yyleng,Ft=v.yytext,E=v.yylineno,Wt=v.yylloc;break;case 2:if(P=this.productions_[A[1]][1],B.$=g[g.length-P],B._$={first_line:m[m.length-(P||1)].first_line,last_line:m[m.length-1].last_line,first_column:m[m.length-(P||1)].first_column,last_column:m[m.length-1].last_column},Zs&&(B._$.range=[m[m.length-(P||1)].range[0],m[m.length-1].range[1]]),Yt=this.performAction.apply(B,[Ft,xe,E,R.yy,A[1],g,m].concat(Ks)),typeof Yt<"u")return Yt;P&&(p=p.slice(0,-1*P*2),g=g.slice(0,-1*P),m=m.slice(0,-1*P)),p.push(this.productions_[A[1]][0]),g.push(B.$),m.push(B._$),Ce=_[p[p.length-2]][p[p.length-1]],p.push(Ce);break;case 3:return!0}}return!0}},d=(function(){var u={EOF:1,parseError:function(h,p){if(this.yy.parser)this.yy.parser.parseError(h,p);else throw new Error(h)},setInput:function(c,h){return this.yy=h||this.yy||{},this._input=c,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var c=this._input[0];this.yytext+=c,this.yyleng++,this.offset++,this.match+=c,this.matched+=c;var h=c.match(/(?:\r\n?|\n).*/g);return h?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),c},unput:function(c){var h=c.length,p=c.split(/(?:\r\n?|\n)/g);this._input=c+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-h),this.offset-=h;var g=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),p.length-1&&(this.yylineno-=p.length-1);var m=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:p?(p.length===g.length?this.yylloc.first_column:0)+g[g.length-p.length].length-p[0].length:this.yylloc.first_column-h},this.options.ranges&&(this.yylloc.range=[m[0],m[0]+this.yyleng-h]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(c){this.unput(this.match.slice(c))},pastInput:function(){var c=this.matched.substr(0,this.matched.length-this.match.length);return(c.length>20?"...":"")+c.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var c=this.match;return c.length<20&&(c+=this._input.substr(0,20-c.length)),(c.substr(0,20)+(c.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var c=this.pastInput(),h=new Array(c.length+1).join("-");return c+this.upcomingInput()+`
`+h+"^"},test_match:function(c,h){var p,g,m;if(this.options.backtrack_lexer&&(m={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(m.yylloc.range=this.yylloc.range.slice(0))),g=c[0].match(/(?:\r\n?|\n).*/g),g&&(this.yylineno+=g.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:g?g[g.length-1].length-g[g.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+c[0].length},this.yytext+=c[0],this.match+=c[0],this.matches=c,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(c[0].length),this.matched+=c[0],p=this.performAction.call(this,this.yy,this,h,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),p)return p;if(this._backtrack){for(var _ in m)this[_]=m[_];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var c,h,p,g;this._more||(this.yytext="",this.match="");for(var m=this._currentRules(),_=0;_<m.length;_++)if(p=this._input.match(this.rules[m[_]]),p&&(!h||p[0].length>h[0].length)){if(h=p,g=_,this.options.backtrack_lexer){if(c=this.test_match(p,m[_]),c!==!1)return c;if(this._backtrack){h=!1;continue}else return!1}else if(!this.options.flex)break}return h?(c=this.test_match(h,m[g]),c!==!1?c:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var h=this.next();return h||this.lex()},begin:function(h){this.conditionStack.push(h)},popState:function(){var h=this.conditionStack.length-1;return h>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(h){return h=this.conditionStack.length-1-Math.abs(h||0),h>=0?this.conditionStack[h]:"INITIAL"},pushState:function(h){this.begin(h)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(h,p,g,m){switch(g){case 0:return"(";case 1:return")";case 2:return"SPLAT";case 3:return"PARAM";case 4:return"LITERAL";case 5:return"LITERAL";case 6:return"EOF"}},rules:[/^(?:\()/,/^(?:\))/,/^(?:\*+\w+)/,/^(?::+\w+)/,/^(?:[\w%\-~\n]+)/,/^(?:.)/,/^(?:$)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6],inclusive:!0}}};return u})();a.lexer=d;function f(){this.yy={}}return f.prototype=a,a.Parser=f,new f})();typeof hi<"u"&&(i.parser=t,i.Parser=t.Parser,i.parse=function(){return t.parse.apply(t,arguments)})})(Ns);function J(i){return function(t,e){return{displayName:i,props:t,children:e||[]}}}var Ms={Root:J("Root"),Concat:J("Concat"),Literal:J("Literal"),Splat:J("Splat"),Param:J("Param"),Optional:J("Optional")},Ls=Ns.parser;Ls.yy=Ms;var ui=Ls,di=Object.keys(Ms);function pi(i){return di.forEach(function(t){if(typeof i[t]>"u")throw new Error("No handler defined for "+t.displayName)}),{visit:function(t,e){return this.handlers[t.displayName].call(this,t,e)},handlers:i}}var Ds=pi,fi=Ds,mi=/[\-{}\[\]+?.,\\\^$|#\s]/g;function js(i){this.captures=i.captures,this.re=i.re}js.prototype.match=function(i){var t=this.re.exec(i),e={};if(t)return this.captures.forEach(function(s,r){typeof t[r+1]>"u"?e[s]=void 0:e[s]=decodeURIComponent(t[r+1])}),e};var gi=fi({Concat:function(i){return i.children.reduce((function(t,e){var s=this.visit(e);return{re:t.re+s.re,captures:t.captures.concat(s.captures)}}).bind(this),{re:"",captures:[]})},Literal:function(i){return{re:i.props.value.replace(mi,"\\$&"),captures:[]}},Splat:function(i){return{re:"([^?]*?)",captures:[i.props.name]}},Param:function(i){return{re:"([^\\/\\?]+)",captures:[i.props.name]}},Optional:function(i){var t=this.visit(i.children[0]);return{re:"(?:"+t.re+")?",captures:t.captures}},Root:function(i){var t=this.visit(i.children[0]);return new js({re:new RegExp("^"+t.re+"(?=\\?|$)"),captures:t.captures})}}),_i=gi,yi=Ds,vi=yi({Concat:function(i,t){var e=i.children.map((function(s){return this.visit(s,t)}).bind(this));return e.some(function(s){return s===!1})?!1:e.join("")},Literal:function(i){return decodeURI(i.props.value)},Splat:function(i,t){return t[i.props.name]?t[i.props.name]:!1},Param:function(i,t){return t[i.props.name]?t[i.props.name]:!1},Optional:function(i,t){var e=this.visit(i.children[0],t);return e||""},Root:function(i,t){t=t||{};var e=this.visit(i.children[0],t);return e?encodeURI(e):!1}}),$i=vi,bi=ui,wi=_i,Ei=$i;St.prototype=Object.create(null);St.prototype.match=function(i){var t=wi.visit(this.ast),e=t.match(i);return e||!1};St.prototype.reverse=function(i){return Ei.visit(this.ast,i)};function St(i){var t;if(this?t=this:t=Object.create(St.prototype),typeof i>"u")throw new Error("A route spec is required");return t.spec=i,t.ast=bi.parse(i),t}var Ai=St,Si=Ai,xi=Si;const Pi=ci(xi);var Ci=Object.defineProperty,Is=(i,t,e,s)=>{for(var r=void 0,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=o(t,e,r)||r);return r&&Ci(t,e,r),r};const Hs=class extends G{constructor(t,e,s=""){super(),this._cases=[],this._fallback=()=>ut` <h1>Not Found</h1> `,this._cases=t.map(r=>({...r,route:new Pi(r.path)})),this._historyObserver=new st(this,e),this._authObserver=new st(this,s)}connectedCallback(){this._historyObserver.observe(({location:t})=>{console.log("New location",t),t&&(this._match=this.matchRoute(t))}),this._authObserver.observe(({user:t})=>{this._user=t}),super.connectedCallback()}render(){return console.log("Rendering for match",this._match,this._user),ut` <main>${(()=>{const e=this._match;if(e){if("view"in e)return this._user?e.auth&&e.auth!=="public"&&this._user&&!this._user.authenticated?(_s(this,"auth/redirect"),ut` <h1>Redirecting for Login</h1> `):(console.log("Loading view, ",e.params,e.query),e.view(e.params||{},e.query)):ut` <h1>Authenticating</h1> `;if("redirect"in e){const s=e.redirect;if(typeof s=="string")return this.redirect(s),ut` <h1>Redirecting to ${s}…</h1> `}}return this._fallback({})})()}</main> `}updated(t){t.has("_match")&&this.requestUpdate()}matchRoute(t){const{search:e,pathname:s}=t,r=new URLSearchParams(e),n=s+e;for(const o of this._cases){const l=o.route.match(n);if(l)return{...o,path:s,params:l,query:r}}}redirect(t){ye(this,"history/redirect",{href:t})}};Hs.styles=Vr`
    :host,
    main {
      display: contents;
    }
  `;let jt=Hs;Is([Us()],jt.prototype,"_user");Is([Us()],jt.prototype,"_match");const Oi=Object.freeze(Object.defineProperty({__proto__:null,Element:jt,Switch:jt},Symbol.toStringTag,{value:"Module"})),zs=class ne extends HTMLElement{constructor(){if(super(),zt(this).template(ne.template).styles(ne.styles),this.shadowRoot){const t=this.shadowRoot.querySelector("slot[name='actuator']");t&&t.addEventListener("click",()=>this.toggle())}}toggle(){this.hasAttribute("open")?this.removeAttribute("open"):this.setAttribute("open","open")}};zs.template=I` <template>
    <slot name="actuator"><button>Menu</button></slot>
    <div id="panel">
      <slot></slot>
    </div>
  </template>`;zs.styles=ge`
    :host {
      position: relative;
    }
    #is-shown {
      display: none;
    }
    #panel {
      display: none;

      position: absolute;
      right: 0;
      margin-top: var(--size-spacing-small);
      width: max-content;
      padding: var(--size-spacing-small);
      border-radius: var(--size-radius-small);
      background: var(--color-background-card);
      color: var(--color-text);
      box-shadow: var(--shadow-popover);
    }
    :host([open]) #panel {
      display: block;
    }
  `;const Vs=class oe extends HTMLElement{constructor(){super(),this._array=[],zt(this).template(oe.template).styles(oe.styles),this.addEventListener("input-array:add",t=>{t.stopPropagation(),this.append(qs("",this._array.length))}),this.addEventListener("input-array:remove",t=>{t.stopPropagation(),this.removeClosestItem(t.target)}),this.addEventListener("change",t=>{t.stopPropagation();const e=t.target;if(e&&e!==this){const s=new Event("change",{bubbles:!0}),r=e.value,n=e.closest("label");if(n){const o=Array.from(this.children).indexOf(n);this._array[o]=r,this.dispatchEvent(s)}}}),this.addEventListener("click",t=>{ie(t,"button.add")?Nt(t,"input-array:add"):ie(t,"button.remove")&&Nt(t,"input-array:remove")})}get name(){return this.getAttribute("name")}get value(){return this._array}set value(t){this._array=Array.isArray(t)?t:[t],ki(this._array,this)}removeClosestItem(t){const e=t.closest("label");if(console.log("Removing closest item:",e,t),e){const s=Array.from(this.children).indexOf(e);this._array.splice(s,1),e.remove()}}};Vs.template=I`
    <template>
      <ul>
        <slot></slot>
      </ul>
      <button class="add">
        <slot name="label-add">Add one</slot>
        <style></style>
      </button>
    </template>
  `;Vs.styles=ge`
    :host {
      display: grid;
      grid-template-columns: subgrid;
      grid-column: input / end;
    }
    ul {
      display: contents;
    }
    button.add {
      grid-column: input / input-end;
    }
    ::slotted(label) {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: subgrid;
    }
  `;function ki(i,t){t.replaceChildren(),i.forEach((e,s)=>t.append(qs(e)))}function qs(i,t){const e=i===void 0?I`<input />`:I`<input value="${i}" />`;return I`
    <label>
      ${e}
      <button class="remove" type="button">Remove</button>
    </label>
  `}function Ti(i){return Object.entries(i).map(([t,e])=>{customElements.get(t)||customElements.define(t,e)}),customElements}var Ri=Object.defineProperty,Ui=Object.getOwnPropertyDescriptor,Ni=(i,t,e,s)=>{for(var r=Ui(t,e),n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=o(t,e,r)||r);return r&&Ri(t,e,r),r};class Ee extends G{constructor(t){super(),this._pending=[],this._observer=new st(this,t)}get model(){return this._lastModel=this._context?this._context.value:{},this._lastModel}connectedCallback(){var t;super.connectedCallback(),(t=this._observer)==null||t.observe().then(e=>{console.log("View effect (initial)",this,e),this._context=e.context,this._pending.length&&this._pending.forEach(([s,r])=>{console.log("Dispatching queued event",r,s),s.dispatchEvent(r)}),e.setEffect(()=>{var s;if(console.log("View effect",this,e,(s=this._context)==null?void 0:s.value),this._context)console.log("requesting update"),this.requestUpdate(),this._lastModel=this._context.value;else throw"View context not ready for effect"})})}dispatchMessage(t,e=this){const s=new CustomEvent("mu:message",{bubbles:!0,composed:!0,detail:t});this._context?(console.log("Dispatching message event",s),e.dispatchEvent(s)):(console.log("Queueing message event",s),this._pending.push([e,s]))}ref(t){return this.model?this.model[t]:void 0}}Ni([Rs()],Ee.prototype,"model");var Mi=Object.defineProperty,Fs=(i,t,e,s)=>{for(var r=void 0,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=o(t,e,r)||r);return r&&Mi(t,e,r),r};const Ae=class Ae extends S{constructor(){super(...arguments),this._authObserver=new st(this,"uefa:auth"),this.loggedIn=!1}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:e}=t;e&&e.authenticated?(this.loggedIn=!0,this.userid=e.username):(this.loggedIn=!1,this.userid=void 0)})}renderSignOutButton(){return y`
      <button
        class="signout-btn"
        @click=${t=>{Tr.relay(t,"auth:message",["auth/signout"])}}
      >
        Sign Out
      </button>
    `}renderSignInButton(){return y`
      <a href="/app/login" class="signin-btn">Sign In</a>
    `}render(){return y`
      <header>
        <h1>UEFA Teams</h1>
        <div class="user-controls">
          <span class="greeting">
            Hello, ${this.userid||"fan"}!
          </span>
          ${this.loggedIn?this.renderSignOutButton():this.renderSignInButton()}
        </div>
      </header>
    `}};Ae.styles=ot`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: #f5f5f5;
      border-bottom: 2px solid #ddd;
      font-family: sans-serif;
    }
    .user-controls {
      display: flex;
      gap: 15px;
      align-items: center;
    }
    .signout-btn {
      background: #e74c3c;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 4px;
    }
    .signin-btn {
      color: #3498db;
      text-decoration: none;
      font-weight: bold;
    }
  `;let wt=Ae;Fs([x()],wt.prototype,"loggedIn");Fs([x()],wt.prototype,"userid");var Li=Object.defineProperty,Di=Object.getOwnPropertyDescriptor,Bs=(i,t,e,s)=>{for(var r=s>1?void 0:s?Di(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&Li(t,e,r),r};let Et=class extends Ee{constructor(){super("uefa:model")}get teams(){return this.model.teams??[]}connectedCallback(){super.connectedCallback(),this.dispatchMessage(["teams/request",{}])}render(){return y`
      <section class="teams-page">
        <h2>All Teams</h2>

        ${this.teams.length?y`
              <ul>
                ${this.teams.map(i=>y`<li>${i.name}</li>`)}
              </ul>
            `:y`<p>Loading…</p>`}
      </section>
    `}};Et.styles=ot`
    :host {
      display: block;
    }
    h2 {
      text-align: center;
      margin: 2rem 0;
    }
    .teams-page {
      padding: 1rem;
    }
  `;Bs([x()],Et.prototype,"teams",1);Et=Bs([at("teams-view")],Et);var ji=Object.defineProperty,Ii=(i,t,e,s)=>{for(var r=void 0,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=o(t,e,r)||r);return r&&ji(t,e,r),r};class Ws extends Ee{constructor(){super("uefa:model"),this.darkMode=!1}render(){return y`
      <header>
        <img src="/images/Champions.png" class="center">
      </header>
      <section class="center">
        <label id="darkmode-label">
          <input 
            type="checkbox" 
            autocomplete="off"
            @change=${this.toggleDarkMode}
          />
          Dark Mode
        </label>
        <a href="/app/teams">
          <h2>Teams</h2>
        </a>
        <img src="/images/UEFAMAP.jpeg" width="400" height="400">
      </section>
    `}toggleDarkMode(t){const e=t.target;this.darkMode=e.checked;const s=new CustomEvent("darkmode:toggle",{bubbles:!0,composed:!0,detail:{checked:e.checked}});this.dispatchEvent(s),this.darkMode?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")}createRenderRoot(){return this}}Ii([x()],Ws.prototype,"darkMode");var Hi=Object.defineProperty,Ys=(i,t,e,s)=>{for(var r=void 0,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=o(t,e,r)||r);return r&&Hi(t,e,r),r};const Se=class Se extends S{constructor(){super(...arguments),this.isOwner=!1}handleDelete(t){var e;t.preventDefault(),console.log(`Deleting team: ${(e=this.team)==null?void 0:e.name}`)}render(){if(!this.team)return y``;const{name:t,imgSrc:e,href:s,country:r}=this.team;return y`
      <a href=${s??"#"} class="team-link">
        <header>
        <img class="team-logo" src=${`/images/${e}`} alt=${t} />
        </header>
        <div class="team-info">
         <span class="team-name">${t}</span>
          <span class="team-country">${r}</span>
        </div>
      </a>
      
      ${this.isOwner?y`
            <div class="team-actions">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn" @click=${this.handleDelete}>Delete</button>
            </div>
          `:y``}
    `}};Se.styles=ot`
    /* ... existing styles ... */
    .team-actions {
      display: flex;
      justify-content: space-evenly;
      padding: 0.5rem;
    }
    .delete-btn {
      color: red;
    }
  `;let It=Se;Ys([T({attribute:!1})],It.prototype,"team");Ys([T({type:Boolean})],It.prototype,"isOwner");var zi=Object.defineProperty,Vi=Object.getOwnPropertyDescriptor,qt=(i,t,e,s)=>{for(var r=s>1?void 0:s?Vi(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&zi(t,e,r),r};let V=class extends S{constructor(){super(...arguments),this.src="/api/teams",this.teams=[],this.currentUsername="anonymous"}async fetchData(){const i={},t=localStorage.getItem("token");if(console.log("Token from localStorage:",t),t){const e=t.replace(/^"|"$/g,"");i.Authorization=`Bearer ${e}`,console.log("✅ Authorization header set")}else console.warn("⚠️ No token found");try{const e=await fetch(this.src,{headers:i});console.log("fetch status:",e.status),e.ok?(this.teams=await e.json(),console.log("✅ Teams loaded:",this.teams.length)):(console.error("Failed to fetch teams, status:",e.status),this.teams=[])}catch(e){console.error("Failed to fetch teams:",e),this.teams=[]}}connectedCallback(){super.connectedCallback(),this.extractUsername(),this.fetchData()}extractUsername(){const i=localStorage.getItem("token");if(!i){this.currentUsername="anonymous";return}try{const t=i.replace(/^"|"$/g,""),e=JSON.parse(atob(t.split(".")[1]));this.currentUsername=e.username??"anonymous",console.log("✅ Extracted username:",this.currentUsername)}catch(t){console.error("❌ JWT decode failed",t),this.currentUsername="anonymous"}}render(){return y`
      <ul class="teams_body-body">
        ${this.teams.map(i=>{const t=i.owner===this.currentUsername;return y`
            <li>
              <uefa-team
                .team=${i}
                .isOwner=${t}
                @team:delete=${()=>console.log("Team delete event fired")}
              ></uefa-team>
            </li>
          `})}
      </ul>
    `}};V.styles=ot`
    /* keep your existing styles */
  `;qt([T()],V.prototype,"src",2);qt([x()],V.prototype,"teams",2);qt([x()],V.prototype,"currentUsername",2);V=qt([at("uefa-team-list")],V);var qi=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,xt=(i,t,e,s)=>{for(var r=s>1?void 0:s?Fi(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&qi(t,e,r),r};let q=class extends S{constructor(){super(...arguments),this.formData={},this.api="/auth/register",this.redirect="/"}get canSubmit(){return!!(this.formData.username&&this.formData.password&&this.formData.confirmPassword&&this.formData.password===this.formData.confirmPassword)}handleChange(i){const t=i.target,{name:e,value:s}=t;this.formData={...this.formData,[e]:s},this.error==="Passwords do not match"&&(this.error=void 0)}handleSubmit(i){if(i.preventDefault(),this.formData.password!==this.formData.confirmPassword){this.error="Passwords do not match";return}this.canSubmit&&fetch(this.api,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status===201)return t.json();throw t.status===409?new Error("Username already exists"):new Error("Registration failed")}).then(t=>{const{token:e}=t;this.dispatchEvent(new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:e,redirect:this.redirect}]}))}).catch(t=>{this.error=t.toString()})}render(){return y`
            <form @change=${this.handleChange} @submit=${this.handleSubmit}>
                
                <label>
                    <span>Username:</span>
                    <input name="username" autocomplete="off" .value=${this.formData.username??""} />
                </label>
                <label>
                    <span>Password:</span>
                    <input type="password" name="password" .value=${this.formData.password??""} />
                </label>
                <label>
                    <span>Confirm Password:</span>
                    <input type="password" name="confirmPassword" .value=${this.formData.confirmPassword??""} />
                </label>
                
                <p class="error">${this.error??""}</p>
                <button ?disabled=${!this.canSubmit} type="submit">Sign Up</button>
            </form>
        `}};q.styles=ot`
        :host {
            display: block;
        }
        
        /* Form Container Layout */
        form {
            display: grid;
            gap: 1rem;
            padding: 1.5rem;
            border: 1px solid var(--color-border, #ccc);
            border-radius: 8px;
            background-color: var(--color-background-card, white);
        }

        /* Label and Input Alignment */
        label {
            display: grid;
            grid-template-columns: 1fr 2fr;
            align-items: center;
            gap: 10px;
            font-weight: bold;
            color: var(--color-text-primary, #333);
        }
        
        /* Input Styling */
        input {
            padding: 8px;
            border: 1px solid var(--color-border-input, #ccc);
            border-radius: 4px;
            font-size: 1rem;
            width: 100%;
        }

        /* Button Styling */
        button {
            padding: 10px 15px;
            margin-top: 1rem;
            background-color: var(--color-action-primary, #007bff);
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        
        button:hover:not([disabled]) {
            background-color: var(--color-action-hover, #0056b3);
        }
        
        /* Disabled Button State */
        button[disabled] {
            background-color: var(--color-action-disabled, #a0a0a0);
            cursor: not-allowed;
        }

        /* Error Message Styling */
        .error:not(:empty) {
            color: var(--color-error-text, white);
            background-color: var(--color-error-background, #d9534f);
            border-radius: 4px;
            padding: 10px;
            margin-top: 0.5rem;
            text-align: center;
            font-weight: bold;
        }
    `;xt([x()],q.prototype,"formData",2);xt([T()],q.prototype,"api",2);xt([T()],q.prototype,"redirect",2);xt([x()],q.prototype,"error",2);q=xt([at("signup-form")],q);var Bi=Object.getOwnPropertyDescriptor,Wi=(i,t,e,s)=>{for(var r=s>1?void 0:s?Bi(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=o(r)||r);return r};let ae=class extends S{render(){return y`
      <h2>Create Account</h2>
      <main class="card">
        <signup-form></signup-form>
      </main>
      <p>Already have an account?
        <a href="/app/login">Log in here</a>.
      </p>
    `}};ae=Wi([at("sign-up-view")],ae);var Yi=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,Pt=(i,t,e,s)=>{for(var r=s>1?void 0:s?Ji(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&Yi(t,e,r),r};let F=class extends S{constructor(){super(...arguments),this.formData={},this.api="/auth/login",this.redirect="/app"}get canSubmit(){return!!(this.formData.username&&this.formData.password)}handleChange(i){const t=i.target,{name:e,value:s}=t;this.formData={...this.formData,[e]:s}}handleSubmit(i){if(i.preventDefault(),console.log("🔵 Form submitted"),!this.canSubmit){console.log("🔴 Form cannot submit - validation failed");return}console.log("🔵 Can submit - fetching..."),fetch(this.api,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(console.log("🔵 Response received:",t.status),t.status===200)return t.json();throw new Error("Login failed")}).then(t=>{console.log("🔵 JSON parsed:",t),console.log("🔵 Token:",t.token),this.dispatchEvent(new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:t.token,redirect:this.redirect}]})),console.log("🔵 Auth message dispatched")}).catch(t=>{console.error("❌ Login error:",t),this.error=t.toString()})}render(){return y`
      <form @input=${this.handleChange} @submit=${this.handleSubmit}>
        <slot></slot>
        <button ?disabled=${!this.canSubmit} type="submit">Login</button>
        <p class="error">${this.error??""}</p>
      </form>
    `}};F.styles=ot`
    .error:not(:empty) {
      color: red;
      border: 1px solid red;
      padding: 10px;
    }
  `;Pt([x()],F.prototype,"formData",2);Pt([T()],F.prototype,"api",2);Pt([T()],F.prototype,"redirect",2);Pt([x()],F.prototype,"error",2);F=Pt([at("login-form")],F);var Ki=Object.getOwnPropertyDescriptor,Zi=(i,t,e,s)=>{for(var r=s>1?void 0:s?Ki(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=o(r)||r);return r};let le=class extends S{render(){return y`
      <h2>Log In</h2>
      <main class="card">
        <login-form redirect="/app/teams">
          <label>
            <span>Username:</span>
            <input name="username" autocomplete="off" />
          </label>
          <label>
            <span>Password:</span>
            <input type="password" name="password" />
          </label>
        </login-form>
      </main>
      <p>No account? <a href="/app/signup">Sign up</a>.</p>
    `}};le=Zi([at("login-view")],le);const Gi={};function Qi(i,t,e){switch(i[0]){case"teams/request":return t.teams?t:[t,Xi(e).then(s=>["teams/load",{teams:s}]).catch(s=>["teams/error",{error:String(s)}])];case"teams/load":{const{teams:s}=i[1];return{...t,teams:s}}case"teams/error":return t;default:return t}}function Xi(i){return fetch("/api/teams",{headers:ys.headers(i)}).then(t=>{if(t.status===200)return t.json();throw t.status===401?new Error("401 Unauthorized"):new Error(`Failed to load teams (${t.status})`)})}const tn=[{path:"/app/signup",view:()=>y`<sign-up-view></sign-up-view>`},{path:"/app/teams",view:()=>y`<teams-view></teams-view>`},{path:"/app",view:()=>y`<landing-view></landing-view>`},{path:"/",redirect:"/app"},{path:"/app/login",view:()=>y`<login-view></login-view>`}];Ti({"mu-auth":ys.Provider,"mu-history":Dr.Provider,"mu-store":class extends Hr.Provider{constructor(){super(Qi,Gi,"uefa:auth")}},"mu-switch":class extends Oi.Element{constructor(){super(tn,"uefa:history","uefa:auth")}},"uefa-header":wt,"teams-view":Et,"landing-view":Ws,"sign-up-view":ae,"uefa-team-list":V,"login-view":le});
