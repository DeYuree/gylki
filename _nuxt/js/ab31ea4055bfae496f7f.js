(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{456:function(t,e,o){var content=o(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("4178f6b2",content,!0,{sourceMap:!1})},500:function(t,e,o){"use strict";o(456)},501:function(t,e,o){var r=o(21),n=o(26),c=o(27),f=o(28),l=o(29),d=o(30),v=o(31),y=o(32),m=o(33),E=o(34),_=o(35),w=o(36),h=r(!1),T=n(c),O=n(f),P=n(l),G=n(d),k=n(v),j=n(y),R=n(m),A=n(E),x=n(_),S=n(w);h.push([t.i,'@font-face{font-family:"OwnHand";src:url('+T+') format("woff");src:url('+O+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"Adigiana";src:url('+P+') format("woff");src:url('+G+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"Phantom";src:url('+k+') format("woff");src:url('+j+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"MooMoo";src:url('+R+') format("woff");src:url('+A+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"AngryBirds";src:url('+x+') format("woff");src:url('+S+') format("truetype");font-weight:400;font-style:normal}a[data-v-1b845e7c]{text-decoration:none!important}.page-enter-active[data-v-1b845e7c],.page-leave-active[data-v-1b845e7c]{-webkit-transition:opacity .4s;-o-transition:opacity .4s;-moz-transition:opacity .4s;transition:opacity .4s}.page-enter[data-v-1b845e7c],.page-leave-active[data-v-1b845e7c]{opacity:0}[data-v-1b845e7c]::-webkit-scrollbar{width:5px}[data-v-1b845e7c]::-webkit-scrollbar-track{background:#f6e2c1}[data-v-1b845e7c]::-webkit-scrollbar-thumb{background:#634326}[data-v-1b845e7c]::-webkit-scrollbar-thumb:hover{background:rgba(99,67,38,.7)}.from-to[data-v-1b845e7c]{color:#634326;font:26px MooMoo;font-weight:700}.from-to[data-v-1b845e7c]  .from-to__disp{color:#ea2d0f}.fade-leave-active[data-v-1b845e7c]{position:absolute}.fade-enter-active[data-v-1b845e7c],.fade-leave[data-v-1b845e7c],.fade-leave-to[data-v-1b845e7c]{-webkit-transition:all .5s;-o-transition:all .5s;-moz-transition:all .5s;transition:all .5s}.fade-enter[data-v-1b845e7c],.fade-leave-to[data-v-1b845e7c]{opacity:0}',""]),t.exports=h},535:function(t,e,o){"use strict";o.r(e);var r=o(1),n=o(68);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:["total"],data:function(){return{keyForTransition:0}},computed:f(f(f({},Object(n.c)("products",["GETTER_PAGE_SIZE","GETTER_CURRENT_PAGE"])),Object(n.e)("products",{visibleProducts:"visibleProducts"})),{},{fromToDisplay:function(){var t=this.GETTER_CURRENT_PAGE*this.GETTER_PAGE_SIZE+1-this.GETTER_PAGE_SIZE,e=this.GETTER_CURRENT_PAGE*this.GETTER_PAGE_SIZE-this.GETTER_PAGE_SIZE+this.GETTER_PAGE_SIZE;return this.keyForTransition=e,t+"-"+(e<=this.visibleProducts.length?e:this.visibleProducts.length)}})},d=(o(500),o(109)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"from-to"},[o("span",[t._v("Товары:")]),t._v(" "),o("transition-group",{attrs:{name:"fade"}},[o("div",{key:t.keyForTransition,staticClass:"d-flex d-inline-flex"},[o("span",{staticClass:"from-to__disp"},[t._v(t._s(t.fromToDisplay))]),t._v("\n\t\t\t из "+t._s(t.total)+"\n\t\t")])])],1)}),[],!1,null,"1b845e7c",null);e.default=component.exports}}]);