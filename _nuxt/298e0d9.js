(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{298:function(t,n,e){var r=e(3),o=e(299),l=e(119);r({target:"Array",proto:!0},{fill:o}),l("fill")},299:function(t,n,e){"use strict";var r=e(35),o=e(88),l=e(40);t.exports=function(t){for(var n=r(this),e=l(n),c=arguments.length,d=o(c>1?arguments[1]:void 0,e),f=c>2?arguments[2]:void 0,v=void 0===f?e:o(f,e);v>d;)n[d++]=t;return n}},301:function(t,n,e){"use strict";e.r(n);var r={name:"CardItem",props:["cover"]},o=e(33),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nuxt-link",{staticClass:"relative",attrs:{to:"/detail"}},[e("img",{attrs:{src:t.cover}}),t._v(" "),e("div",{staticClass:"\n      absolute\n      w-full\n      h-full\n      px-2\n      pb-2\n      bottom-0\n      bg-gradient-to-t\n      from-gray-700\n      hover:opacity-100\n      opacity-0\n      transition-opacity\n      grid\n      place-items-end\n    "},[e("div",{staticClass:"w-full mt-auto flex items-center space-x-2"},[e("div",{staticClass:"rounded-full h-8 w-8 bg-slate-800 p-1"},[e("img",{staticClass:"rounded-full",attrs:{src:"https://bottleneko.app/icon.png"}})]),t._v(" "),e("div",[e("h2",{staticClass:"font-bold leading-none text-white"},[t._v("Hello World")]),t._v(" "),e("small",{staticClass:"text-white/75 font-thin"},[t._v("XDD")])])])])])}),[],!1,null,null,null);n.default=component.exports},311:function(t,n,e){"use strict";e.r(n);e(49),e(298);var r={name:"IndexPage",components:{CardItem:e(301).default},data:function(){return{cards:[]}},mounted:function(){this.cards=this.cards.concat(new Array(30).fill("https://bottleneko.app/icon.png")),this.cards[0]="".concat(this.$router.options.base,"/cover/test1.JPG")},methods:{counter:function(t){return new Array(t).fill(0)}}},o=e(33),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"grid grid-cols-2 pad:grid-cols-6 gap-0"},t._l(t.cards,(function(t,i){return e("card-item",{key:i,attrs:{cover:t}})})),1)}),[],!1,null,null,null);n.default=component.exports}}]);