(function(e){function t(t){for(var a,o,l=t[0],s=t[1],c=t[2],f=0,b=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&b.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(b.length)b.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/DungeonsDelicacy/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"16a3":function(e,t,n){"use strict";var a=n("cd8c"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("Rank")],1)},r=[],o=(n("d3b7"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-navbar",{attrs:{"mobile-burger":!1}},[a("template",{slot:"brand"},[a("b-navbar-item",[a("img",{attrs:{src:n("cf05"),alt:"地下城與美食"}})]),a("b-navbar-item",[a("h1",[e._v("地下城與美食 排行榜")])])],1)],2)}),l=[],s=(n("16a3"),n("2877")),c={},u=Object(s["a"])(c,o,l,!1,null,null,null),f=u.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",[n("b-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},e._l(e.tabs,(function(e){return n("b-tab-item",{key:e,attrs:{label:e}})})),1)],1),n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-half"},[n("Table",{attrs:{tab:e.getActiveTabName()}})],1)])])])},d=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-table",{attrs:{data:e.data,columns:e.columns,paginated:!0,"per-page":50}})},p=[],h=(n("4de4"),n("c975"),n("4e82"),n("e25e"),n("4795"),{props:["tab"],data:function(){return{tabs:["經驗","身高","體重","體力","金錢","命中","傷害","防禦","迴避","法傷","治療","料理","採集","體能","偵查","鑑定","鍛造","開鎖","扒竊"],data:[],columns:[{field:"rank",label:"排名",width:"60",numeric:!0},{field:"名稱",label:"角色名稱"},{field:"經驗",label:"經驗",visible:!1},{field:"身高",label:"身高",visible:!1},{field:"體重",label:"體重",visible:!1},{field:"體力",label:"體力",visible:!1},{field:"金錢",label:"金錢",visible:!1},{field:"命中",label:"命中",visible:!1},{field:"傷害",label:"傷害",visible:!1},{field:"防禦",label:"防禦",visible:!1},{field:"迴避",label:"迴避",visible:!1},{field:"法傷",label:"法傷",visible:!1},{field:"治療",label:"治療",visible:!1},{field:"料理",label:"料理",visible:!1},{field:"採集",label:"採集",visible:!1},{field:"體能",label:"體能",visible:!1},{field:"偵查",label:"偵查",visible:!1},{field:"鑑定",label:"鑑定",visible:!1},{field:"鍛造",label:"鍛造",visible:!1},{field:"開鎖",label:"開鎖",visible:!1},{field:"扒竊",label:"扒竊",visible:!1}]}},watch:{tab:function(e,t){var n=this,a=this.open();setTimeout((function(){var i=n.$data.tabs.indexOf(t)+2,r=n.$data.tabs.indexOf(e)+2;n.$data.columns[i].visible=!1,n.$data.columns[r].visible=!0,n.$data.data=n.getFilteredChars(e),a.close()}),1e3)}},beforeMount:function(){var e=this,t=this.open();setTimeout((function(){var n=e.$props.tab,a=e.$data.tabs.indexOf(n)+2;e.$data.columns[a].visible=!0,e.$data.data=e.getFilteredChars(n),t.close()}),3e3)},computed:{chars:function(){return this.$store.state.chars}},methods:{getFilteredChars:function(e){var t=this.chars;t=t.filter((function(t){return!isNaN(parseInt(t[e]))})),t=t.sort((function(t,n){return t[e]<n[e]}));for(var n=0;n<t.length;n++)t[n].rank=n+1;return t},open:function(){var e=this.$buefy.loading.open();return e}}}),m=h,g=Object(s["a"])(m,v,p,!1,null,null,null),y=g.exports,O={name:"rank",components:{Table:y},data:function(){return{activeTab:0,tabs:["經驗","身高","體重","體力","金錢","命中","傷害","防禦","迴避","法傷","治療","料理","採集","體能","偵查","鑑定","鍛造","開鎖","扒竊"]}},methods:{getActiveTabName:function(){return this.$data.tabs[this.$data.activeTab]}}},w=O,$=Object(s["a"])(w,b,d,!1,null,null,null),_=$.exports,k={name:"app",components:{Navbar:f,Rank:_},created:function(){var e=this,t=this.open();fetch("https://script.google.com/macros/s/AKfycbz_cw2tsupOmx-f-288ajIx3_rfOGqH9_UEQYZ52LRgS551k1Q/exec",{method:"POST",body:JSON.stringify({token:"gogoddy"})}).then((function(e){return e.json()})).then((function(n){"ok"==n.msg&&e.$store.commit("setChars",{data:n.data}),t.close()}))},methods:{open:function(){var e=this.$buefy.loading.open();return e}}},x=k,j=(n("5c0b"),Object(s["a"])(x,i,r,!1,null,null,null)),T=j.exports,N=n("9483");Object(N["a"])("".concat("/DungeonsDelicacy/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("a623"),n("d81d");var S=n("289d"),C=(n("5abe"),n("2f62"));a["a"].use(S["a"]),a["a"].use(C["a"]);var P=new C["a"].Store({state:{chars:[]},mutations:{setChars:function(e,t){var n=t.data,a=n.shift();n=n.filter((function(e){return e.every((function(e){return(!isNaN(parseInt(e))||Boolean(e))&&"undefined"!=e}))}));var i=n.map((function(e){for(var t={},n=0;n<a.length;n++)t[a[n]]=e[n];return t}));this.state.chars=i}},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({store:P,render:function(e){return e(T)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"9c0c":function(e,t,n){},cd8c:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.e245273b.png"}});
//# sourceMappingURL=app.2f965d41.js.map