(window.webpackJsonp=window.webpackJsonp||[]).push([[18,8],{385:function(t,e,n){"use strict";n(180),n(48),n(89),n(45),n(69),n(78),n(265);var o,r=n(1),c=(n(386),n(183)),l=n(82),f=n(182),d=n(67),h=n(3),v=n(0),m=n(37);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(o||(o={}));var k=Object(m.a)(c.a,l.a,f.a,d.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(h.B)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(h.y)(t).find((function(e){return t[e]}));return e&&o[e]||Object(h.g)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:x({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=x(x({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(data){data.class=x(x({},data.class),this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var n=[],data=this.getDefaultData(),o="material-icons",r=t.indexOf("-"),c=r<=-1;c?n.push(t):function(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}(o=t.slice(0,r))&&(o=""),data.class[o]=!0,data.class[t]=!c;var l=this.getSize();return l&&(data.style={fontSize:l}),this.applyColors(data),e(this.hasClickListener?"button":this.tag,data,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},o=this.getSize();return o&&(n.style={fontSize:o,height:o,width:o}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var data={class:{"v-icon__component":!0}},n=this.getSize();n&&(data.style={fontSize:n,height:n,width:n}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(component,data)])}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e.a=v.a.extend({name:"v-icon",$_wrapperFor:k,functional:!0,render:function(t,e){var data=e.data,n=e.children,o="";return data.domProps&&(o=data.domProps.textContent||data.domProps.innerHTML||o,delete data.domProps.textContent,delete data.domProps.innerHTML),t(k,data,o?[o]:n)}})},386:function(t,e,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("3e79e639",content,!0,{sourceMap:!1})},387:function(t,e,n){var o=n(21),r=n(26),c=n(27),l=n(28),f=n(29),d=n(30),h=n(31),v=n(32),m=n(33),y=n(34),x=n(35),k=n(36),w=o(!1),O=r(c),A=r(l),j=r(f),C=r(d),D=r(h),_=r(v),$=r(m),S=r(y),z=r(x),E=r(k);w.push([t.i,'@font-face{font-family:"OwnHand";src:url('+O+') format("woff");src:url('+A+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"Adigiana";src:url('+j+') format("woff");src:url('+C+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"Phantom";src:url('+D+') format("woff");src:url('+_+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"MooMoo";src:url('+$+') format("woff");src:url('+S+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"AngryBirds";src:url('+z+') format("woff");src:url('+E+') format("truetype");font-weight:400;font-style:normal}a{text-decoration:none!important}.page-enter-active,.page-leave-active{-webkit-transition:opacity .4s;-o-transition:opacity .4s;-moz-transition:opacity .4s;transition:opacity .4s}.page-enter,.page-leave-active{opacity:0}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:#f6e2c1}::-webkit-scrollbar-thumb{background:#634326}::-webkit-scrollbar-thumb:hover{background:rgba(99,67,38,.7)}.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-font-feature-settings:"liga";-moz-font-feature-settings:"liga";font-feature-settings:"liga";font-size:24px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;-o-transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;-moz-transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;-webkit-transform:scale(1.3);-moz-transform:scale(1.3);-ms-transform:scale(1.3);-o-transform:scale(1.3);transform:scale(1.3);width:100%;-webkit-transition:opacity .2s cubic-bezier(.4,0,.6,1);-o-transition:opacity .2s cubic-bezier(.4,0,.6,1);-moz-transition:opacity .2s cubic-bezier(.4,0,.6,1);transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense__component,.v-icon--dense__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',""]),t.exports=w},388:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(136);var r=n(201);function c(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},401:function(t,e,n){"use strict";var o=n(388),r=n(37);function c(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];r.isActive&&r.isDependent?e.push(r):e.push.apply(e,Object(o.a)(c(r.$children)))}return e}e.a=Object(r.a)().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?c(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),n=0;n<e.length;n++)t.push.apply(t,Object(o.a)(e[n].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,Object(o.a)(this.getOpenDependentElements())),t}}})},405:function(t,e,n){"use strict";n(58);var o=n(17);function r(){return!0}var c={inserted:function(t,e){var n=function(n){return function(t,e,n){var c="function"==typeof n.value?n.value:n.value.handler,l="object"===Object(o.a)(n.value)&&n.value.closeConditional||r;if(t&&!1!==l(t)){var f=("object"===Object(o.a)(n.value)&&n.value.include||function(){return[]})();f.push(e),!f.some((function(e){return e.contains(t.target)}))&&setTimeout((function(){l(t)&&c&&c(t)}),0)}}(n,t,e)};(document.querySelector("[data-app]")||document.body).addEventListener("click",n,!0),t._clickOutside=n},unbind:function(t){if(t._clickOutside){var e=document.querySelector("[data-app]")||document.body;e&&e.removeEventListener("click",t._clickOutside,!0),delete t._clickOutside}}};e.a=c},440:function(t,e,n){"use strict";var o=n(12),r=n(0);e.a=r.a.extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(o.e)("lazy",this)},methods:{showLazyContent:function(content){return this.hasContent&&content?content():[this.$createElement()]}}})},454:function(t,e,n){"use strict";n(48),n(46),n(49);var o=n(17),r=n(464),c=n(179),l=n(37),f=n(3),d=n(12),h=Object(l.a)(r.a,c.a);e.a=h.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(o.a)(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(f.s)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(d.b)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=0,e=Object.keys(this.listeners);t<e.length;t++){var n=e[t];this.getActivator().addEventListener(n,this.listeners[n])}}},genActivator:function(){var t=Object(f.r)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var n=t.getActivator(e);n&&n.focus(),e.stopPropagation(),t.isActive=!t.isActive},this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var n=this.internalActivator?this.$el:document;e="string"==typeof this.activator?n.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var o=this.activatorNode[0].componentInstance;e=o&&o.$options.mixins&&o.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?o.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot:function(){return Object(f.r)(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=0,e=Object.keys(this.listeners);t<e.length;t++){var n=e[t];this.activatorElement.removeEventListener(n,this.listeners[n])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},455:function(t,e,n){var content=n(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("06982811",content,!0,{sourceMap:!1})},464:function(t,e,n){"use strict";n(45),n(58);var o=n(0);e.a=o.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var o=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},o)}}})},465:function(t,e,n){"use strict";n(70);var o=n(1),r=n(17),c=n(440),l=n(3),f=n(37),d=n(12);e.a=Object(f.a)(c.a).extend({name:"detachable",props:{attach:{default:!1,validator:function(t){var e=Object(r.a)(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){t.activatorNode&&(Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode]).forEach((function(e){if(e.elm&&t.$el.parentNode){var n=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,n)}}))}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode)(Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode]).forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}catch(t){console.log(t)}},methods:{getScopeIdAttrs:function(){var t=Object(l.o)(this.$vnode,"context.$options._scopeId");return t&&Object(o.a)({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||((t=!1===this.attach?document.querySelector("[data-app]"):"string"==typeof this.attach?document.querySelector(this.attach):this.attach)?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(d.c)("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},466:function(t,e,n){"use strict";n(58);var o=n(0);e.a=o.a.extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},469:function(t,e,n){"use strict";n(266);var o=n(3);e.a=Object(o.h)("spacer","div","v-spacer")},481:function(t,e,n){"use strict";n(15),n(48),n(69);var o=n(388),r=n(0),c=n(3);e.a=r.a.extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"==typeof window)return 0;var content=this.stackElement||this.$refs.content,t=this.isActive?this.getMaxZIndex(this.stackExclude||[content])+2:Object(c.t)(content);return null==t?t:parseInt(t)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],base=this.$el,e=[this.stackMinZIndex,Object(c.t)(base)],n=[].concat(Object(o.a)(document.getElementsByClassName("v-menu__content--active")),Object(o.a)(document.getElementsByClassName("v-dialog__content--active"))),r=0;r<n.length;r++)t.includes(n[r])||e.push(Object(c.t)(n[r]));return Math.max.apply(Math,e)}}})},496:function(t,e,n){"use strict";n(455)},497:function(t,e,n){var o=n(21),r=n(26),c=n(27),l=n(28),f=n(29),d=n(30),h=n(31),v=n(32),m=n(33),y=n(34),x=n(35),k=n(36),w=o(!1),O=r(c),A=r(l),j=r(f),C=r(d),D=r(h),_=r(v),$=r(m),S=r(y),z=r(x),E=r(k);w.push([t.i,'@font-face{font-family:"OwnHand";src:url('+O+') format("woff");src:url('+A+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"Adigiana";src:url('+j+') format("woff");src:url('+C+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"Phantom";src:url('+D+') format("woff");src:url('+_+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"MooMoo";src:url('+$+') format("woff");src:url('+S+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"AngryBirds";src:url('+z+') format("woff");src:url('+E+') format("truetype");font-weight:400;font-style:normal}a[data-v-0324bd80]{text-decoration:none!important}.page-enter-active[data-v-0324bd80],.page-leave-active[data-v-0324bd80]{-webkit-transition:opacity .4s;-o-transition:opacity .4s;-moz-transition:opacity .4s;transition:opacity .4s}.page-enter[data-v-0324bd80],.page-leave-active[data-v-0324bd80]{opacity:0}[data-v-0324bd80]::-webkit-scrollbar{width:5px}[data-v-0324bd80]::-webkit-scrollbar-track{background:#f6e2c1}[data-v-0324bd80]::-webkit-scrollbar-thumb{background:#634326}[data-v-0324bd80]::-webkit-scrollbar-thumb:hover{background:rgba(99,67,38,.7)}.v-icon[data-v-0324bd80]{font-size:48px;color:#ea2d0f}.v-card__title[data-v-0324bd80]{word-break:keep-all;font:28px MooMoo!important;font-weight:700!important;line-height:20px;color:#634326}.slot-data[data-v-0324bd80]{font:20px Adigiana!important;line-height:18px!important;color:#0b0603}.v-btn[data-v-0324bd80]{font:18px MooMoo;color:#634326;font-weight:700}.v-btn.confirm[data-v-0324bd80]{background-color:#ea2d0f!important;-webkit-transition:all .4s;-o-transition:all .4s;-moz-transition:all .4s;transition:all .4s;outline:0;height:44px;color:#fff;font-weight:400}.v-btn.confirm[data-v-0324bd80]:active,.v-btn.confirm[data-v-0324bd80]:focus,.v-btn.confirm[data-v-0324bd80]:hover{background-color:#005cc1!important}.v-btn[data-v-0324bd80]:before{background:transparent}',""]),t.exports=w},526:function(t,e,n){"use strict";n.r(e);n(45);var o={props:{maxWidth:{type:Number,default:290},cancelButton:{type:String},confirmButton:{type:String},headerText:{type:String},isVisible:{type:Boolean}},methods:{choose:function(t){this.$emit("close",t)}}},r=(n(496),n(109)),c=n(110),l=n.n(c),f=n(374),d=n(168),h=n(77),v=n(633),m=n(385),y=n(469),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":t.maxWidth},model:{value:t.isVisible,callback:function(e){t.isVisible=e},expression:"isVisible"}},[n("v-card",{staticClass:"pb-2"},[n("div",{staticClass:"text-center pt-8 pb-5"},[n("v-icon",[t._v("fas fa-question-circle")])],1),t._v(" "),n("v-card-title",{staticClass:"justify-center px-0 py-0"},[t._v(t._s(t.headerText))]),t._v(" "),n("v-card-text",{staticClass:"slot-data pa-0"},[t._t("default")],2),t._v(" "),n("v-card-actions",{staticClass:"pt-0 px-4"},[n("v-btn",{staticClass:"cancel",attrs:{text:""},on:{click:function(e){return t.choose(!1)}}},[t._v("\n\t\t"+t._s(t.cancelButton)+"\n\t  ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"confirm px-4",attrs:{text:"",rounded:""},on:{click:function(e){return t.choose(!0)}}},[t._v("\n\t\t"+t._s(t.confirmButton)+"\n\t  ")])],1)],1)],1)}),[],!1,null,"0324bd80",null);e.default=component.exports;l()(component,{VBtn:f.a,VCard:d.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VDialog:v.a,VIcon:m.a,VSpacer:y.a})},628:function(t,e,n){"use strict";n(180);var o=n(67);e.a=o.a.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:o.a.options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})}}]);