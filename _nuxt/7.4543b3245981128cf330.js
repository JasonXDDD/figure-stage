/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{766:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return A})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return N})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return B})),n.d(t,"h",(function(){return T})),n.d(t,"i",(function(){return h})),n.d(t,"j",(function(){return M})),n.d(t,"k",(function(){return f})),n.d(t,"l",(function(){return v})),n.d(t,"m",(function(){return _})),n.d(t,"n",(function(){return y})),n.d(t,"o",(function(){return w})),n.d(t,"p",(function(){return O})),n.d(t,"q",(function(){return m})),n.d(t,"r",(function(){return E})),n.d(t,"s",(function(){return C})),n.d(t,"t",(function(){return I})),n.d(t,"u",(function(){return D}));const r=function(e){const t=[];let p=0;for(let i=0;i<e.length;i++){let n=e.charCodeAt(i);n<128?t[p++]=n:n<2048?(t[p++]=n>>6|192,t[p++]=63&n|128):55296==(64512&n)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++i)),t[p++]=n>>18|240,t[p++]=n>>12&63|128,t[p++]=n>>6&63|128,t[p++]=63&n|128):(t[p++]=n>>12|224,t[p++]=n>>6&63|128,t[p++]=63&n|128)}return t},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(input,e){if(!Array.isArray(input))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,output=[];for(let i=0;i<input.length;i+=3){const e=input[i],n=i+1<input.length,r=n?input[i+1]:0,o=i+2<input.length,c=o?input[i+2]:0,h=e>>2,l=(3&e)<<4|r>>4;let d=(15&r)<<2|c>>6,f=63&c;o||(f=64,n||(d=64)),output.push(t[h],t[l],t[d],t[f])}return output.join("")},encodeString(input,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(input):this.encodeByteArray(r(input),e)},decodeString(input,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(input):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&c)}else if(o>239&&o<365){const u=((7&o)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(1023&u))}else{const c=e[n++],h=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&c)<<6|63&h)}}return t.join("")}(this.decodeStringToByteArray(input,e))},decodeStringToByteArray(input,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,output=[];for(let i=0;i<input.length;){const e=t[input.charAt(i++)],n=i<input.length?t[input.charAt(i)]:0;++i;const r=i<input.length?t[input.charAt(i)]:64;++i;const o=i<input.length?t[input.charAt(i)]:64;if(++i,null==e||null==n||null==r||null==o)throw Error();const c=e<<2|n>>4;if(output.push(c),64!==r){const e=n<<4&240|r>>2;if(output.push(e),64!==o){const e=r<<6&192|o;output.push(e)}}}return output},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}},c=function(e){return function(e){const t=r(e);return o.encodeByteArray(t,!0)}(e).replace(/\./g,"")};function h(e,source){if(!(source instanceof Object))return source;switch(source.constructor){case Date:return new Date(source.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return source}for(const t in source)source.hasOwnProperty(t)&&"__proto__"!==t&&(e[t]=h(e[t],source[t]));return e}class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,sub=e.sub||e.user_id;if(!sub)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:sub,user_id:sub,firebase:{sign_in_provider:"custom",identities:{}}},e);return[c(JSON.stringify({alg:"none",type:"JWT"})),c(JSON.stringify(o)),""].join(".")}function f(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function m(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function v(){return"object"==typeof self&&self.self===self}function _(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function E(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function y(){return f().indexOf("Electron/")>=0}function w(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function I(){return f().indexOf("MSAppHost/")>=0}function C(){return!function(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function O(){return"object"==typeof indexedDB}function D(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class S extends Error{constructor(code,e,t){super(e),this.code=code,this.customData=t,this.name="FirebaseError",Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(code,...data){const e=data[0]||{},t=`${this.service}/${code}`,template=this.errors[code],n=template?function(template,data){return template.replace(L,((e,t)=>{const n=data[t];return null!=n?String(n):`<${t}?>`}))}(template,e):"Error",r=`${this.serviceName}: ${n} (${t}).`;return new S(t,r,e)}}const L=/\{\$([^}]+)}/g;function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function T(a,b){if(a===b)return!0;const e=Object.keys(a),t=Object.keys(b);for(const n of e){if(!t.includes(n))return!1;const e=a[n],r=b[n];if(j(e)&&j(r)){if(!T(e,r))return!1}else if(e!==r)return!1}for(const n of t)if(!e.includes(n))return!1;return!0}function j(e){return null!==e&&"object"==typeof e}function B(e,t){const n=new P(e,t);return n.subscribe.bind(n)}class P{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=k),void 0===r.error&&(r.error=k),void 0===r.complete&&(r.complete=k);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}unsubscribeOne(i){void 0!==this.observers&&void 0!==this.observers[i]&&(delete this.observers[i],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(i,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[i])try{e(this.observers[i])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function k(){}function M(e){return e&&e._delegate?e._delegate:e}}).call(this,n(51))},767:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var r=n(766);class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const c="[DEFAULT]";class h{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(component){if(component.name!==this.name)throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=component,this.shouldAutoInitialize()){if(function(component){return"EAGER"===component.instantiationMode}(component))try{this.getOrInitializeService({instanceIdentifier:c})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const c=this.instances.get(r);return c&&e(c,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===c?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:c:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class l{constructor(e){this.name=e,this.providers=new Map}addComponent(component){const e=this.getProvider(component.name);if(e.isComponentSet())throw new Error(`Component ${component.name} has already been registered with ${this.name}`);e.setComponent(component)}addOrOverwriteComponent(component){this.getProvider(component.name).isComponentSet()&&this.providers.delete(component.name),this.addComponent(component)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new h(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},769:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var r=n(766),o=n(767),c=n(770),h=n(771);class l{constructor(e,t){this._delegate=e,this.firebase=t,Object(c._addComponent)(e,new o.a("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),Object(c.deleteApp)(this._delegate))))}_getService(e,t=c._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=c._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(component){Object(c._addComponent)(this._delegate,component)}_addOrOverwriteComponent(component){Object(c._addOrOverwriteComponent)(this._delegate,component)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}const d={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},f=new r.b("app-compat","Firebase",d);const m=function e(){const t=function(e){const t={},n={__esModule:!0,initializeApp:function(o,h={}){const l=c.initializeApp(o,h);if(Object(r.e)(t,l.name))return t[l.name];const d=new e(l,n);return t[l.name]=d,d},app:o,registerVersion:c.registerVersion,setLogLevel:c.setLogLevel,onLog:c.onLog,apps:null,SDK_VERSION:c.SDK_VERSION,INTERNAL:{registerComponent:function(component){const t=component.name,h=t.replace("-compat","");if(c._registerComponent(component)&&"PUBLIC"===component.type){const c=(e=o())=>{if("function"!=typeof e[h])throw f.create("invalid-app-argument",{appName:t});return e[h]()};void 0!==component.serviceProps&&Object(r.i)(c,component.serviceProps),n[h]=c,e.prototype[h]=function(...e){return this._getService.bind(this,t).apply(this,component.multipleInstances?e:[])}}return"PUBLIC"===component.type?n[h]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:c}};function o(e){if(e=e||c._DEFAULT_ENTRY_NAME,!Object(r.e)(t,e))throw f.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),o.App=e,n}(l);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Object(r.i)(t,e)},createSubscribe:r.g,ErrorFactory:r.b,deepExtend:r.i}),t}(),v=new h.b("@firebase/app-compat");if(Object(r.l)()&&void 0!==self.firebase){v.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&v.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const _=m;var E;Object(c.registerVersion)("@firebase/app-compat","0.1.29",E)},770:function(e,t,n){"use strict";n.r(t),n.d(t,"FirebaseError",(function(){return c.c})),n.d(t,"SDK_VERSION",(function(){return J})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return B})),n.d(t,"_addComponent",(function(){return R})),n.d(t,"_addOrOverwriteComponent",(function(){return F})),n.d(t,"_apps",(function(){return k})),n.d(t,"_clearComponents",(function(){return V})),n.d(t,"_components",(function(){return M})),n.d(t,"_getProvider",(function(){return H})),n.d(t,"_registerComponent",(function(){return $})),n.d(t,"_removeServiceInstance",(function(){return z})),n.d(t,"deleteApp",(function(){return X})),n.d(t,"getApp",(function(){return K})),n.d(t,"getApps",(function(){return Y})),n.d(t,"initializeApp",(function(){return G})),n.d(t,"onLog",(function(){return Q})),n.d(t,"registerVersion",(function(){return Z})),n.d(t,"setLogLevel",(function(){return ee}));var r=n(767),o=n(771),c=n(766);let h,l;const d=new WeakMap,f=new WeakMap,m=new WeakMap,v=new WeakMap,_=new WeakMap;let E={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||m.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function y(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(C(this),t),I(d.get(this))}:function(...t){return I(e.apply(C(this),t))}:function(t,...n){const r=e.call(C(this),t,...n);return m.set(r,t.sort?t.sort():[t]),I(r)}}function w(e){return"function"==typeof e?y(e):(e instanceof IDBTransaction&&function(e){if(f.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",c),e.removeEventListener("abort",c)},o=()=>{t(),r()},c=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",c),e.addEventListener("abort",c)}));f.set(e,t)}(e),object=e,(h||(h=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>object instanceof e))?new Proxy(e,E):e);var object}function I(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",c)},o=()=>{t(I(e.result)),r()},c=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",c)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),_.set(t,e),t}(e);if(v.has(e))return v.get(e);const t=w(e);return t!==e&&(v.set(e,t),_.set(t,e)),t}const C=e=>_.get(e);const O=["get","getKey","getAll","getAllKeys","count"],D=["put","add","delete","clear"],S=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(S.get(t))return S.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=D.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!O.includes(n))return;const c=async function(e,...t){const c=this.transaction(e,o?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(t.shift())),(await Promise.all([h[n](...t),o&&c.done]))[0]};return S.set(t,c),c}E=(e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)}))(E);class L{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const component=e.getComponent();return"VERSION"===(null==component?void 0:component.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const N="@firebase/app",T="0.7.28",j=new o.b("@firebase/app"),B="[DEFAULT]",P={[N]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},k=new Map,M=new Map;function R(e,component){try{e.container.addComponent(component)}catch(t){j.debug(`Component ${component.name} failed to register with FirebaseApp ${e.name}`,t)}}function F(e,component){e.container.addOrOverwriteComponent(component)}function $(component){const e=component.name;if(M.has(e))return j.debug(`There were multiple attempts to register component ${e}.`),!1;M.set(e,component);for(const e of k.values())R(e,component);return!0}function H(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function z(e,t,n=B){H(e,t).clearInstance(n)}function V(){M.clear()}const x={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},U=new c.b("app","Firebase",x);class W{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw U.create("app-deleted",{appName:this._name})}}const J="9.9.0";function G(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:B,automaticDataCollectionEnabled:!1},t),o=n.name;if("string"!=typeof o||!o)throw U.create("bad-app-name",{appName:String(o)});const h=k.get(o);if(h){if(Object(c.h)(e,h.options)&&Object(c.h)(n,h.config))return h;throw U.create("duplicate-app",{appName:o})}const l=new r.b(o);for(const component of M.values())l.addComponent(component);const d=new W(e,n,l);return k.set(o,d),d}function K(e=B){const t=k.get(e);if(!t)throw U.create("no-app",{appName:e});return t}function Y(){return Array.from(k.values())}async function X(e){const t=e.name;k.has(t)&&(k.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Z(e,t,n){var o;let c=null!==(o=P[e])&&void 0!==o?o:e;n&&(c+=`-${n}`);const h=c.match(/\s|\//),l=t.match(/\s|\//);if(h||l){const e=[`Unable to register library "${c}" with version "${t}":`];return h&&e.push(`library name "${c}" contains illegal characters (whitespace or "/")`),h&&l&&e.push("and"),l&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void j.warn(e.join(" "))}$(new r.a(`${c}-version`,(()=>({library:c,version:t})),"VERSION"))}function Q(e,t){if(null!==e&&"function"!=typeof e)throw U.create("invalid-log-argument");Object(o.d)(e,t)}function ee(e){Object(o.c)(e)}const te="firebase-heartbeat-store";let ne=null;function re(){return ne||(ne=function(e,t,{blocked:n,upgrade:r,blocking:o,terminated:c}={}){const h=indexedDB.open(e,t),l=I(h);return r&&h.addEventListener("upgradeneeded",(e=>{r(I(h.result),e.oldVersion,e.newVersion,I(h.transaction))})),n&&h.addEventListener("blocked",(()=>n())),l.then((e=>{c&&e.addEventListener("close",(()=>c())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),l}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(te)}}).catch((e=>{throw U.create("storage-open",{originalErrorMessage:e.message})}))),ne}async function ie(e,t){var n;try{const n=(await re()).transaction(te,"readwrite"),r=n.objectStore(te);return await r.put(t,oe(e)),n.done}catch(e){throw U.create("storage-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message})}}function oe(e){return`${e.name}!${e.options.appId}`}class se{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ce(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ae();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ae(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),he(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),he(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Object(c.d)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ae(){return(new Date).toISOString().substring(0,10)}class ce{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(c.p)()&&Object(c.u)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await re()).transaction(te).objectStore(te).get(oe(e))}catch(e){throw U.create("storage-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function he(e){return Object(c.d)(JSON.stringify({version:2,heartbeats:e})).length}var le;le="",$(new r.a("platform-logger",(e=>new L(e)),"PRIVATE")),$(new r.a("heartbeat",(e=>new se(e)),"PRIVATE")),Z(N,T,le),Z(N,T,"esm2017"),Z("fire-js","")},771:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return v}));const r=[];var o;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(o||(o={}));const c={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},h=o.INFO,l={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},d=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=l[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class f{constructor(e){this.name=e,this._logLevel=h,this._logHandler=d,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?c[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}function m(e){r.forEach((t=>{t.setLogLevel(e)}))}function v(e,t){for(const n of r){let r=null;t&&t.level&&(r=c[t.level]),n.userLogHandler=null===e?null:(t,n,...c)=>{const h=c.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:o[n].toLowerCase(),message:h,args:c,type:t.name})}}}}}]);