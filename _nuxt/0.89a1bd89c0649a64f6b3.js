(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(t,e,r){"use strict";(function(t){var n=r(213);e.a={name:"DefaultLayout",components:{AppHeader:n.default},data:function(){return{bigLayouts:["/series","/social","/deck"]}},mounted:function(){console.log(t.env.SERVER_URL)},methods:{}}}).call(this,r(147))},121:function(t,e,r){"use strict";r(25),r(21),r(22),r(9),r(38),r(18),r(39);var n=r(10),o=(r(205),r(118)),c=r(41);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"NuxtImg",mixins:[o.a],props:{placeholder:{type:[Boolean,String,Number,Array],default:void 0}},head:function(){return!0===this.preload?{link:[{rel:"preload",as:"image",href:this.nSrc}]}:{}},computed:{nAttrs:function(){var t=this.nImgAttrs;if(this.sizes){var e=this.nSizes,r=e.sizes,n=e.srcset;t.sizes=r,t.srcset=n}return t},nMainSrc:function(){return this.sizes?this.nSizes.src:this.$img(this.src,this.nModifiers,this.nOptions)},nSizes:function(){return this.$img.getSizes(this.src,h(h({},this.nOptions),{},{sizes:this.sizes,modifiers:h(h({},this.nModifiers),{},{width:Object(c.c)(this.width),height:Object(c.c)(this.height)})}))},nSrc:function(){return this.nPlaceholder?this.nPlaceholder:this.nMainSrc},nPlaceholder:function(){var t=this.placeholder;if(""===t&&(t=!0),!t||this.placeholderLoaded)return!1;if("string"==typeof t)return t;var e=Array.isArray(t)?t:"number"==typeof t?[t,t]:[10,10];return this.$img(this.src,h(h({},this.nModifiers),{},{width:e[0],height:e[1],quality:e[2]||50}),this.nOptions)}},mounted:function(){var t=this;if(this.nPlaceholder){var img=new Image;img.src=this.nMainSrc,img.onload=function(){t.$refs.img.src=t.nMainSrc,t.placeholderLoaded=!0}}}},d=r(17),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",t._g(t._b({key:t.nSrc,ref:"img",attrs:{src:t.nSrc}},"img",t.nAttrs,!1),t.$listeners))}),[],!1,null,null,null);e.a=component.exports},122:function(t,e,r){"use strict";var n=r(10),o=(r(69),r(37),r(25),r(21),r(22),r(9),r(38),r(18),r(39),r(118)),c=r(41);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"NuxtPicture",mixins:[o.a],props:{legacyFormat:{type:String,default:null},imgAttrs:{type:Object,default:null}},head:function(){if(!0===this.preload){var t=void 0!==this.nSources[1]?1:0,link={rel:"preload",as:"image",imagesrcset:this.nSources[t].srcset};return void 0!==this.nSources[t].sizes&&(link.imagesizes=this.nSources[t].sizes),{link:[link]}}return{}},computed:{isTransparent:function(){return["png","webp","gif"].includes(this.originalFormat)},originalFormat:function(){return Object(c.b)(this.src)},nFormat:function(){return this.format?this.format:"svg"===this.originalFormat?"svg":"webp"},nLegacyFormat:function(){return this.legacyFormat?this.legacyFormat:{webp:this.isTransparent?"png":"jpeg",svg:"png"}[this.nFormat]||this.originalFormat},nSources:function(){var t=this;return"svg"===this.nFormat?[{srcset:this.src}]:(this.nLegacyFormat!==this.nFormat?[this.nLegacyFormat,this.nFormat]:[this.nFormat]).map((function(e){var r=t.$img.getSizes(t.src,h(h({},t.nOptions),{},{sizes:t.sizes||t.$img.options.screens,modifiers:h(h({},t.nModifiers),{},{format:e})})),n=r.srcset,o=r.sizes;return{src:r.src,type:"image/".concat(e),sizes:o,srcset:n}}))}},created:function(){0}},d=r(17),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",{key:t.nSources[0].src},[t.nSources[1]?r("source",{attrs:{type:t.nSources[1].type,srcset:t.nSources[1].srcset,sizes:t.nSources[1].sizes}}):t._e(),t._v(" "),r("img",t._g(t._b({attrs:{src:t.nSources[0].src,srcset:t.nSources[0].srcset,sizes:t.nSources[0].sizes}},"img",Object.assign({},t.nImgAttrs,t.imgAttrs),!1),t.$listeners))])}),[],!1,null,null,null);e.a=component.exports},194:function(t,e,r){t.exports={}},195:function(t,e,r){t.exports={}},213:function(t,e,r){"use strict";r.r(e);var n={name:"AppHeader"},o=r(17),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"sticky pad:fixed top-0 z-10 w-full pad:w-60 h-auto pad:h-screen bg-[#20252c] p-4 text-white font-mono"},[r("h1",{staticClass:"font-bold hover:text-cyan-300"},[r("nuxt-link",{attrs:{to:"/"}},[t._v(" Hello World ")])],1),t._v(" "),r("nav",{staticClass:"hidden pad:flex flex-col mt-4"},[r("nuxt-link",{staticClass:"hover:bg-white hover:text-black -mx-4 px-4 py-2",attrs:{to:"/"}},[t._v(" 作品集 ")]),t._v(" "),r("nuxt-link",{staticClass:"hover:bg-white hover:text-black -mx-4 px-4 py-2",attrs:{to:"/"}},[t._v(" 關於 ")]),t._v(" "),r("nuxt-link",{staticClass:"hover:bg-white hover:text-black -mx-4 px-4 py-2",attrs:{to:"/"}},[t._v(" GitHub ")])],1)])}),[],!1,null,null,null);e.default=component.exports},214:function(t,e,r){"use strict";r.r(e);var n={name:"CardItem",props:["cover","title","author","link"]},o=r(17),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"relative",attrs:{to:t.link}},[r("img",{attrs:{src:t.cover}}),t._v(" "),r("div",{staticClass:"\n      absolute\n      w-full\n      h-full\n      px-2\n      pb-2\n      bottom-0\n      bg-gradient-to-t\n      from-gray-700\n      hover:opacity-100\n      opacity-0\n      transition-opacity\n      grid\n      place-items-end\n    "},[r("div",{staticClass:"w-full mt-auto flex items-center space-x-2"},[r("div",{staticClass:"rounded-full h-8 w-8 bg-slate-800"},[r("img",{staticClass:"rounded-full",attrs:{src:"https://bottleneko.app/icon.png"}})]),t._v(" "),r("div",[r("h2",{staticClass:"font-bold leading-none text-white"},[t._v(t._s(t.title))]),t._v(" "),r("small",{staticClass:"text-white/50 font-mono"},[t._v(t._s(t.author))])])])])])}),[],!1,null,null,null);e.default=component.exports},215:function(t,e,r){"use strict";var n=r(113).a,o=r(17),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("app-header"),t._v(" "),r("main",{staticClass:"pad:ml-60"},[r("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports},216:function(t,e,r){"use strict";r(87);var n={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout((function(){return t.startTimer()}),this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout((function(){t.show=!1,t.$nextTick((function(){t.percent=0,t.reversed=!1}))}),500),this},fail:function(t){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval((function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100||t.percent<=0)&&(t.skipTimerCount=1,t.reversed=!t.reversed))}),100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},o=(r(269),r(17)),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.a=component.exports},268:function(t,e,r){"use strict";r(194)},269:function(t,e,r){"use strict";r(195)},270:function(t,e,r){t.exports={}},305:function(t,e,r){"use strict";r.r(e);r(217);var n={name:"IndexPage",components:{CardItem:r(214).default},data:function(){return{}},mounted:function(){console.log("<<<<<","production")},methods:{counter:function(t){return new Array(t).fill(0)}}},o=r(17),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid grid-cols-2 pad:grid-cols-6 gap-0"},t._l(t.$store.state.works,(function(t,i){return r("card-item",{key:i,attrs:{cover:t.cover,title:t.title,link:t.link,author:t.author}})})),1)}),[],!1,null,null,null);e.default=component.exports},306:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(40),r(22),r(9),r(301),r(37),r(217),r(48),r(26),r(27),r(18),r(87),r(299)),c=r.n(o),l=r(300),h={name:"DetailPage",data:function(){return{loading:!0,done:0,work:l.a,images:[],env:""}},mounted:function(){var t=this;this.env="production",this.work=this.$store.state.works.filter((function(e){return e.link===t.$route.params.id}))[0],this.work?this.init():this.$router.go(-1)},methods:{init:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.initProgress(),t.loading=!0,t.done=0,$(t.$refs.progress).ElasticProgress("open"),t.images=new Array(20).fill(0).map((function(e,i){return"https://jasonxddd.me:9000/figure-stage/".concat(t.work.link,"/").concat(i+1,".JPG")})),e.next=7,Promise.all(t.images.map((function(e){return t.initImage(e)})));case 7:e.sent.forEach((function(e){return t.buildItem(e)})),setTimeout((function(){t.initCirclr(),$(t.$refs.progress).ElasticProgress("close"),t.done=0,t.loading=!1}),1e3);case 10:case"end":return e.stop()}}),e)})))()},initProgress:function(){$(this.$refs.progress).ElasticProgress({buttonSize:60,fontFamily:"Montserrat",colorBg:"#adeca8",colorFg:"#7cc576"})},buildItem:function(img){img.className="object-contain w-full h-full mx-auto backdrop-blur-xl";var t=document.createElement("div");t.className="h-[75vh] pad:h-[80vh] w-auto bg-cover bg-no-repeat bg-center",t.style["background-image"]="url(".concat(img.src,")"),t.appendChild(img),this.$refs.stage.appendChild(t)},initImage:function(t){var e=this;return new Promise((function(r){var image=new Image;image.onload=function(){e.done+=1,$(e.$refs.progress).ElasticProgress("setValue",e.done/e.images.length),r(image)},image.src=t}))},initCirclr:function(){c()(this.$refs.stage).scroll(!0).play()}}},f=r(17),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"h-[75vh] pad:h-[80vh] w-auto grid place-items-center overflow-hidden"},[r("div",{staticClass:"w-screen pad:w-80 px-12 pad:px-0"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],ref:"progress",attrs:{role:"button","aria-label":"Upload file"}})]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],ref:"stage"})]),t._v(" "),r("section",{staticClass:"p-4"},[r("h2",{staticClass:"font-bold leading-none text-white text-2xl"},[t._v(t._s(t.work.title))]),t._v(" "),r("div",{staticClass:"w-full mt-2 flex items-center space-x-2"},[t._m(0),t._v(" "),r("small",{staticClass:"text-gray-500 font-mono"},[t._v(t._s(t.work.author))])]),t._v(" "),r("div")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rounded-full h-6 w-6 bg-slate-800"},[e("img",{staticClass:"rounded-full",attrs:{src:"https://bottleneko.app/icon.png"}})])}],!1,null,null,null);e.default=component.exports},57:function(t,e,r){"use strict";var n={name:"NuxtError",props:{error:{type:Object,default:null}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0"}]}}},o=(r(268),r(17)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"__nuxt-error-page"},[r("div",{staticClass:"error"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[r("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),r("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?r("p",{staticClass:"description"},[void 0===t.$route?r("a",{staticClass:"error-link",attrs:{href:"/"}}):r("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo"},[r("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[t._v("Nuxt")])])}],!1,null,null,null);e.a=component.exports}}]);