(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{339:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(70),r(7),r(5),r(9);var n=r(2);function o(t){return n.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var n=r.props,data=r.data,o=r.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),e(n.tag,data,o)}})}},340:function(t,e,r){"use strict";r(70),r(7),r(5),r(9),r(196),r(151);var n=r(339),o=r(38);e.a=Object(n.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),c)}})},342:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(44),o=r(0),c=Object(o.h)("v-toolbar__title"),l=Object(o.h)("v-toolbar__items");n.a},347:function(t,e,r){"use strict";r.r(e);var n=r(348),o=r.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(c);e.default=o.a},348:function(t,e){},349:function(t,e,r){var content=r(350);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("dd2325f0",content,!0,{sourceMap:!1})},350:function(t,e,r){(e=r(11)(!1)).push([t.i,".theme--light.v-system-bar{background-color:#e0e0e0;color:rgba(0,0,0,.6)}.theme--light.v-system-bar .v-icon{color:rgba(0,0,0,.6)}.theme--light.v-system-bar--lights-out{background-color:hsla(0,0%,100%,.7)!important}.theme--dark.v-system-bar{background-color:#000;color:hsla(0,0%,100%,.7)}.theme--dark.v-system-bar .v-icon{color:hsla(0,0%,100%,.7)}.theme--dark.v-system-bar--lights-out{background-color:rgba(0,0,0,.2)!important}.v-system-bar{align-items:center;display:flex;font-size:.875rem;font-weight:400;padding:0 8px}.v-system-bar .v-icon{font-size:1rem;margin-right:4px}.v-system-bar--absolute,.v-system-bar--fixed{left:0;top:0;width:100%;z-index:3}.v-system-bar--fixed{position:fixed}.v-system-bar--absolute{position:absolute}.v-system-bar--window .v-icon{font-size:1.25rem;margin-right:8px}",""]),t.exports=e},366:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{items:[{color:"#F7BC00",src:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Foster_the_People_Pumped_Up_Kicks_logo.png",title:"Pumped Up Kids",artist:"Foster the People"},{color:"#952175",src:"https://cdn.vuetifyjs.com/images/cards/halcyon.png",title:"Halcyon Days",artist:"Ellie Goulding"},{color:"#6F00FF",src:"https://fanart.tv/fanart/music/0741b30d-e15b-4a8c-b2e5-8834a03d6116/albumcover/hold-my-home-565639ea7c2db.jpg",title:"First",artist:"Cold War Kids"}]}}},o=r(25),c=r(32),l=r.n(c),d=r(332),v=r(333),m=r(147),f=r(159),h=r(143),_=r(34),y=r(328),w=r(340),x=r(144),j=r(195),O=r(329),V=r(331),C=r(371),k=r(342),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"620"}},[r("v-system-bar",{attrs:{color:"green darken-2",dark:""}},[r("v-spacer"),t._v(" "),r("v-icon",[t._v("mdi-window-minimize")]),t._v(" "),r("v-icon",[t._v("mdi-window-maximize")]),t._v(" "),r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-app-bar",{attrs:{dark:"",color:"green"}},[r("v-app-bar-nav-icon"),t._v(" "),r("v-toolbar-title",[t._v("My Music")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-magnify")])],1)],1),t._v(" "),r("v-container",[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{color:"#385F73",dark:""}},[r("v-card-title",{staticClass:"headline"},[t._v("Unlimited music now")]),t._v(" "),r("v-card-subtitle",[t._v("Listen to your favorite artists and albums whenever and wherever, online and offline.")]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:""}},[t._v("Listen Now")])],1)],1)],1),t._v(" "),t._l(t.items,(function(e,i){return r("v-col",{key:i,attrs:{cols:"6"}},[r("v-card",{attrs:{color:e.color,dark:""}},[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("div",[r("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(e.title)}}),t._v(" "),r("v-card-subtitle",{domProps:{textContent:t._s(e.artist)}})],1),t._v(" "),r("v-avatar",{staticClass:"ma-3",attrs:{size:"60",tile:""}},[r("v-img",{attrs:{src:e.src}})],1)],1)])],1)}))],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAppBar:d.a,VAppBarNavIcon:v.a,VAvatar:m.a,VBtn:f.a,VCard:h.a,VCardActions:_.a,VCardSubtitle:_.b,VCardTitle:_.d,VCol:y.a,VContainer:w.a,VIcon:x.a,VImg:j.a,VRow:O.a,VSpacer:V.a,VSystemBar:C.a,VToolbarTitle:k.a})},371:function(t,e,r){"use strict";r(10),r(8),r(7),r(5),r(9),r(82);var n=r(1),o=(r(14),r(349),r(75)),c=r(16),l=r(13),d=r(4),v=r(0);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(d.a)(Object(o.a)("bar",["height","window"]),c.a,l.a).extend({name:"v-system-bar",props:{height:[Number,String],lightsOut:Boolean,window:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-system-bar--lights-out":this.lightsOut,"v-system-bar--absolute":this.absolute,"v-system-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-system-bar--window":this.window},this.themeClasses)},computedHeight:function(){return this.height?isNaN(parseInt(this.height))?this.height:parseInt(this.height):this.window?32:24},styles:function(){return{height:Object(v.f)(this.computedHeight)}}},methods:{updateApplication:function(){return this.$el?this.$el.clientHeight:this.computedHeight}},render:function(t){var data={staticClass:"v-system-bar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,data),Object(v.o)(this))}})},398:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{cards:[{title:"Pre-fab homes",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:12},{title:"Favorite road trips",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:6},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:6},{title:"second Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:16}]}}},o=r(25),c=r(32),l=r.n(c),d=r(333),v=r(159),m=r(143),f=r(34),h=r(328),_=r(340),y=r(144),w=r(195),x=r(329),j=r(331),O=r(371),V=r(44),C=r(342),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[r("v-system-bar",{attrs:{color:"indigo darken-2",dark:""}},[r("v-spacer"),t._v(" "),r("v-icon",[t._v("mdi-window-minimize")]),t._v(" "),r("v-icon",[t._v("mdi-window-maximize")]),t._v(" "),r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-toolbar",{attrs:{color:"indigo",dark:""}},[r("v-app-bar-nav-icon"),t._v(" "),r("v-toolbar-title",[t._v("Discover")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-magnify")])],1)],1),t._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:""}},t._l(t.cards,(function(e){return r("v-col",{key:e.title,attrs:{cols:e.flex}},[r("v-card",[r("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}},[r("v-card-title",{domProps:{textContent:t._s(e.title)}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-heart")])],1),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-bookmark")])],1),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAppBarNavIcon:d.a,VBtn:v.a,VCard:m.a,VCardActions:f.a,VCardTitle:f.d,VCol:h.a,VContainer:_.a,VIcon:y.a,VImg:w.a,VRow:x.a,VSpacer:j.a,VSystemBar:O.a,VToolbar:V.a,VToolbarTitle:C.a})},403:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-content",[this._v("\n    It Worked! Yes It did Great\n    "),e("v-container",[e("v-row",{attrs:{justify:"center"}},[e("h1",[this._v("How to stir fry chicken")])]),this._v(" "),e("Grids"),this._v(" "),e("Horizontalcards")],1)],1)],1)},o=[]},412:function(t,e,r){"use strict";r.r(e);var n=r(403),o=r(347);for(var c in o)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(c);var l=r(25),d=r(32),v=r.n(d),m=r(340),f=r(338),h=r(329),component=Object(l.a)(o.default,n.a,n.b,!1,null,null,null);e.default=component.exports,v()(component,{Grids:r(398).default,Horizontalcards:r(366).default}),v()(component,{VContainer:m.a,VContent:f.a,VRow:h.a})}}]);