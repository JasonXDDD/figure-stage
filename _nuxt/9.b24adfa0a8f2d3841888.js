(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{156:function(t,e,n){var r=n(284);function o(){return(o=r(regeneratorRuntime.mark((function t(){var e,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(!1 in navigator)){t.next=2;break}throw new Error("serviceWorker is not supported in current browser!");case 2:return t.next=4,n.e(30).then(n.bind(null,312));case 4:return e=t.sent,r=e.Workbox,o=new r("/figure-stage/sw.js",{scope:"/figure-stage/"}),t.next=9,o.register();case 9:return t.abrupt("return",o);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n(21),n(8),n(14),n(15),window.$workbox=function(){return o.apply(this,arguments)}().catch((function(t){}))},217:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));n(28),n(61),n(94),n(60),n(41),n(8),n(29),n(37),n(14),n(20),n(38),n(42),n(15);var r=n(2),o=n(95);function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}r.a.use(o.a);var l=["state","getters","actions","mutations"],d={};d.modules=d.modules||{},v(n(278),"image.js"),v(n(279),"work.js");var h=d instanceof Function?d:function(){return new o.a.Store(Object.assign({strict:!1},d))};function m(t,e){if(t.state&&"function"!=typeof t.state){console.warn("'state' should be a method that returns an object in ".concat(e));var n=Object.assign({},t.state);t=Object.assign({},t,{state:function(){return n}})}return t}function v(t,e){t=t.default||t;var n=e.replace(/\.(js|mjs)$/,"").split("/"),r=n[n.length-1],o="store/".concat(e);if(t="state"===r?function(t,e){if("function"!=typeof t){console.warn("".concat(e," should export a method that returns an object"));var n=Object.assign({},t);return function(){return n}}return m(t,e)}(t,o):m(t,o),l.includes(r)){var f=r;w(y(d,n,{isProperty:!0}),t,f)}else{"index"===r&&(n.pop(),r=n[n.length-1]);var h,v=y(d,n),x=c(l);try{for(x.s();!(h=x.n()).done;){var O=h.value;w(v,t[O],O)}}catch(t){x.e(t)}finally{x.f()}!1===t.namespaced&&delete v.namespaced}}function y(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.isProperty,o=void 0!==r&&r;if(!e.length||o&&1===e.length)return t;var c=e.shift();return t.modules[c]=t.modules[c]||{},t.modules[c].namespaced=!0,t.modules[c].modules=t.modules[c].modules||{},y(t.modules[c],e,{isProperty:o})}function w(t,e,n){e&&("state"===n?t.state=e||t.state:t[n]=Object.assign({},t[n],e))}},224:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n(11),o=(n(8),n(14),n(15),n(30),n(20),n(27),n(43),n(23),n(44),n(2)),c=n(155),f=n(49),l=n(3);"scrollRestoration"in window.history&&(Object(l.u)("manual"),window.addEventListener("beforeunload",(function(){Object(l.u)("auto")})),window.addEventListener("load",(function(){Object(l.u)("manual")})));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=function(){};o.a.use(c.a);var v={mode:"history",base:"/figure-stage/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,n){var r=!1,o=t!==e;n?r=n:o&&function(t){var e=Object(l.g)(t);if(1===e.length){var n=e[0].options;return!1!==(void 0===n?{}:n).scrollToTop}return e.some((function(t){var e=t.options;return e&&e.scrollToTop}))}(t)&&(r={x:0,y:0});var c=window.$nuxt;return(!o||t.path===e.path&&t.hash!==e.hash)&&c.$nextTick((function(){return c.$emit("triggerScroll")})),new Promise((function(e){c.$once("triggerScroll",(function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)}))}))},routes:[{path:"/about",component:function(){return Object(l.m)(Promise.all([n.e(6),n.e(5),n.e(4),n.e(2),n.e(1),n.e(3),n.e(0),n.e(21)]).then(n.bind(null,316)))},name:"about"},{path:"/",component:function(){return Object(l.m)(Promise.all([n.e(6),n.e(5),n.e(4),n.e(2),n.e(1),n.e(3),n.e(0),n.e(22)]).then(n.bind(null,317)))},name:"index"},{path:"/:id",component:function(){return Object(l.m)(Promise.all([n.e(6),n.e(5),n.e(4),n.e(2),n.e(1),n.e(3),n.e(0),n.e(24)]).then(n.bind(null,318)))},name:":id"}],fallback:!1};function y(t,e){var base=e._app&&e._app.basePath||v.base,n=new c.a(h(h({},v),{},{base:base})),r=n.push;n.push=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=arguments.length>2?arguments[2]:void 0;return r.call(this,t,e,n)};var o=n.resolve.bind(n);return n.resolve=function(t,e,n){return"string"==typeof t&&(t=Object(f.c)(t)),o(t,e,n)},n}},3:function(t,e,n){"use strict";n.d(e,"k",(function(){return w})),n.d(e,"m",(function(){return x})),n.d(e,"l",(function(){return O})),n.d(e,"e",(function(){return j})),n.d(e,"b",(function(){return S})),n.d(e,"s",(function(){return P})),n.d(e,"g",(function(){return C})),n.d(e,"h",(function(){return k})),n.d(e,"d",(function(){return _})),n.d(e,"r",(function(){return E})),n.d(e,"j",(function(){return R})),n.d(e,"t",(function(){return A})),n.d(e,"o",(function(){return I})),n.d(e,"q",(function(){return T})),n.d(e,"f",(function(){return N})),n.d(e,"c",(function(){return U})),n.d(e,"i",(function(){return J})),n.d(e,"p",(function(){return M})),n.d(e,"a",(function(){return z})),n.d(e,"v",(function(){return G})),n.d(e,"n",(function(){return K})),n.d(e,"u",(function(){return Q}));n(37),n(20),n(38),n(42),n(43),n(23),n(44);var r=n(24),o=n(4),c=n(11),f=n(12),l=(n(21),n(8),n(27),n(194),n(29),n(48),n(33),n(30),n(14),n(15),n(41),n(28),n(61),n(117),n(149),n(266),n(92),n(93),n(268),n(60),n(113),n(2)),d=n(49);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function v(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw o}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function w(t){l.a.config.errorHandler&&l.a.config.errorHandler(t)}function x(t){return t.then((function(t){return t.default||t}))}function O(t){return t.$options&&"function"==typeof t.$options.fetch&&!t.$options.fetch.length}function j(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=t.$children||[],o=v(r);try{for(o.s();!(e=o.n()).done;){var c=e.value;c.$fetch?n.push(c):c.$children&&j(c,n)}}catch(t){o.e(t)}finally{o.f()}return n}function S(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),m(m({},data),e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function P(t){return t.options&&t._Ctor===t||(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=l.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file)),t}function C(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"components";return Array.prototype.concat.apply([],t.matched.map((function(t,r){return Object.keys(t[n]).map((function(o){return e&&e.push(r),t[n][o]}))})))}function k(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return C(t,e,"instances")}function _(t,e){return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.components).reduce((function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r}),[])})))}function E(t,e){return Promise.all(_(t,function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(n,r,o,c){var f,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=11;break}return t.prev=1,t.next=4,n();case 4:n=t.sent,t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(1),t.t0&&"ChunkLoadError"===t.t0.name&&"undefined"!=typeof window&&window.sessionStorage&&(f=Date.now(),(!(l=parseInt(window.sessionStorage.getItem("nuxt-reload")))||l+6e4<f)&&(window.sessionStorage.setItem("nuxt-reload",f),window.location.reload(!0))),t.t0;case 11:return o.components[c]=n=P(n),t.abrupt("return","function"==typeof e?e(n,r,o,c):n);case 13:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function R(t){return $.apply(this,arguments)}function $(){return($=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,E(e);case 4:return t.abrupt("return",m(m({},e),{},{meta:C(e).map((function(t,n){return m(m({},t.options.meta),(e.matched[n]||{}).meta)}))}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(t,e){return D.apply(this,arguments)}function D(){return(D=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var o,c,l,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,store:e.store,payload:n.payload,error:n.error,base:e.router.options.base,env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),n.ssrContext&&(e.context.ssrContext=n.ssrContext),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var o=Object(r.a)(path);if("number"==typeof t||"undefined"!==o&&"object"!==o||(n=path||{},path=t,o=Object(r.a)(path),t=302),"object"===o&&(path=e.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=Object(d.d)(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),t.next=3,Promise.all([R(n.route),R(n.from)]);case 3:o=t.sent,c=Object(f.a)(o,2),l=c[0],h=c[1],n.route&&(e.context.route=l),n.from&&(e.context.from=h),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!1,e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{};case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():T(t[0],e).then((function(){return I(t.slice(1),e)}))}function T(t,e){var n;return(n=2===t.length?new Promise((function(n){t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))})):t(e))&&n instanceof Promise&&"function"==typeof n.then?n:Promise.resolve(n)}function N(base,t){if("hash"===t)return window.location.hash.replace(/^#\//,"");base=decodeURI(base).slice(0,-1);var path=decodeURI(window.location.pathname);base&&path.startsWith(base)&&(path=path.slice(base.length));var e=(path||"/")+window.location.search+window.location.hash;return Object(d.c)(e)}function U(t,e){return function(t,e){for(var n=new Array(t.length),i=0;i<t.length;i++)"object"===Object(r.a)(t[i])&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",X(e)));return function(e,r){for(var path="",data=e||{},o=(r||{}).pretty?H:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var l=data[f.name||"pathMatch"],d=void 0;if(null==l){if(f.optional){f.partial&&(path+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(d=o(l[h]),!n[c].test(d))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(d)+"`");path+=(0===h?f.prefix:f.delimiter)+d}}else{if(d=f.asterisk?L(l):o(l),!n[c].test(d))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+d+'"');path+=f.prefix+d}}else path+=f}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",f=e&&e.delimiter||"/";for(;null!=(n=F.exec(t));){var l=n[0],d=n[1],h=n.index;if(path+=t.slice(c,h),c=h+l.length,d)path+=d[1];else{var m=t[c],v=n[2],y=n[3],w=n[4],x=n[5],O=n[6],j=n[7];path&&(r.push(path),path="");var S=null!=v&&null!=m&&m!==v,P="+"===O||"*"===O,C="?"===O||"*"===O,k=n[2]||f,pattern=w||x;r.push({name:y||o++,prefix:v||"",delimiter:k,optional:C,repeat:P,partial:S,asterisk:Boolean(j),pattern:pattern?B(pattern):j?".*":"[^"+W(k)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e),e)}function J(t,e){var n={},r=m(m({},t),e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function M(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return m(m({},t),{},{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var F=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function H(t,e){var n=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(n,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function L(t){return H(t,!0)}function W(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function B(t){return t.replace(/([=!:$/()])/g,"\\$1")}function X(t){return t&&t.sensitive?"":"i"}function z(t,e,n){t.$options[e]||(t.$options[e]=[]),t.$options[e].includes(n)||t.$options[e].push(n)}var G=d.b,K=(d.e,d.a);function Q(t){try{window.history.scrollRestoration=t}catch(t){}}}}]);