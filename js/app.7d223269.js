(function(e){function t(t){for(var r,o,s=t[0],l=t[1],c=t[2],f=0,b=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(b.length)b.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/DungeonsDelicacy/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"16a3":function(e,t,n){"use strict";var r=n("cd8c"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("Rank"),n("Footer")],1)},i=[],o=(n("d3b7"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-navbar",{attrs:{"mobile-burger":!1}},[r("template",{slot:"brand"},[r("b-navbar-item",[r("img",{attrs:{src:n("cf05"),alt:"地下城與美食"}})]),r("b-navbar-item",[r("h1",[r("strong",[e._v("地下城與美食 非官方 排行榜")])])]),r("b-navbar-item",[r("b-button",{attrs:{type:"is-primary",size:"is-small","icon-left":"account-remove"},on:{click:function(t){return e.showBrokenChars()}}})],1)],1)],2)}),s=[],l=(n("a15b"),n("d81d"),{methods:{showBrokenChars:function(){var e=this.$store.getters.getBrokenChars;this.$buefy.dialog.alert({title:"角卡格式不符或沒有權限名單",message:'<div class="list">'.concat(e.map(this.itemWrapper).join(""),"</div>")})},itemWrapper:function(e){return'<a class="list-item">'.concat(e,"</a>")}}}),c=l,u=(n("16a3"),n("2877")),f=Object(u["a"])(c,o,s,!1,null,null,null),b=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",[n("b-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},e._l(e.tabs,(function(e){return n("b-tab-item",{key:e,attrs:{label:e}})})),1)],1),n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-half"},[n("Table",{attrs:{tab:e.getActiveTabName()}})],1)])])])},p=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-table",{attrs:{data:e.data,columns:e.columns,paginated:!0,"per-page":50,"current-page":e.currentPage},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})},h=[],m=(n("4de4"),n("c975"),n("4e82"),n("e25e"),n("4795"),{props:["tab"],data:function(){return{tabs:["經驗","身高","體重","體力","金錢","命中","傷害","防禦","迴避","法傷","治療","料理","採集","體能","偵查","鑑定","鍛造","開鎖","扒竊"],data:[],columns:[{field:"rank",label:"排名",width:"60",numeric:!0},{field:"名稱",label:"角色名稱"},{field:"經驗",label:"經驗",visible:!1},{field:"身高",label:"身高",visible:!1},{field:"體重",label:"體重",visible:!1},{field:"體力",label:"體力",visible:!1},{field:"金錢",label:"金錢",visible:!1},{field:"命中",label:"命中",visible:!1},{field:"傷害",label:"傷害",visible:!1},{field:"防禦",label:"防禦",visible:!1},{field:"迴避",label:"迴避",visible:!1},{field:"法傷",label:"法傷",visible:!1},{field:"治療",label:"治療",visible:!1},{field:"料理",label:"料理",visible:!1},{field:"採集",label:"採集",visible:!1},{field:"體能",label:"體能",visible:!1},{field:"偵查",label:"偵查",visible:!1},{field:"鑑定",label:"鑑定",visible:!1},{field:"鍛造",label:"鍛造",visible:!1},{field:"開鎖",label:"開鎖",visible:!1},{field:"扒竊",label:"扒竊",visible:!1}],currentPage:1}},watch:{tab:{immediate:!0,handler:function(e,t){var n=this,r=1e3;void 0===t&&(r=3e3);var a=this.open();setTimeout((function(){if(void 0!=t){var r=n.$data.tabs.indexOf(t)+2;n.$data.columns[r].visible=!1}var i=n.$data.tabs.indexOf(e)+2;n.$data.columns[i].visible=!0,n.$data.data=n.getFilteredChars(e),n.$data.currentPage=1,a.close()}),r)}}},computed:{chars:function(){return this.$store.state.chars}},methods:{getFilteredChars:function(e){var t=this.chars;t=t.filter((function(t){return!isNaN(parseInt(t[e]))})),t=t.sort((function(t,n){return n[e]-t[e]}));for(var n=0;n<t.length;n++)t[n].rank=n+1;return t},open:function(){var e=this.$buefy.loading.open();return e}}}),g=m,_=Object(u["a"])(g,v,h,!1,null,null,null),y=_.exports,w={name:"rank",components:{Table:y},data:function(){return{activeTab:0,tabs:["經驗","身高","體重","體力","金錢","命中","傷害","防禦","迴避","法傷","治療","料理","採集","體能","偵查","鑑定","鍛造","開鎖","扒竊"]}},methods:{getActiveTabName:function(){return this.$data.tabs[this.$data.activeTab]}}},k=w,O=Object(u["a"])(k,d,p,!1,null,null,null),$=O.exports,j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"content has-text-centered"},[n("p",[n("strong",[e._v("地下城與美食")]),e._v(" 由 "),n("a",{attrs:{href:"https://www.plurk.com/DungeonsDelicacy"}},[e._v("DDY地下城與美食協會")]),e._v(" 舉辦｜"),n("strong",[e._v("排行榜")]),e._v(" 由 "),n("a",{attrs:{href:"https://github.com/sheiun"}},[e._v("SheiUn")]),e._v(" 開發 "),n("a",{attrs:{href:"https://github.com/sheiun/DungeonsDelicacy"}},[e._v("原始碼")]),e._v(" 採用 "),n("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[e._v("MIT")]),e._v(" 授權｜ "),n("strong",[e._v("Logo")]),e._v(" 遵照 "),n("a",{attrs:{href:"https://www.plurk.com/p/no6yis"}},[e._v("此噗")]),e._v(" 的使用範圍 ")])])])}],C={},T=Object(u["a"])(C,j,x,!1,null,null,null),P=T.exports,N=n("2c4e"),S=n("dcd5"),D={name:"app",components:{Navbar:b,Rank:$,Footer:P},beforeMount:function(){var e=this,t=this.open();fetch("https://script.google.com/macros/s/AKfycbz_cw2tsupOmx-f-288ajIx3_rfOGqH9_UEQYZ52LRgS551k1Q/exec",{method:"POST",body:JSON.stringify({token:"gogoddy"})}).then((function(e){return e.json()})).then((function(n){"ok"==n.msg&&e.$store.commit("setChars",{data:n.data}),t.close(),N["a"].open({duration:3e3,message:"每 8 小時自動更新一次",position:"is-top",type:"is-info"}),S["a"].open({indefinite:!0,position:"is-bottom",type:"is-info",message:"如果你找不到你的 <em>角色名稱</em><br />那可能是你的 角卡格式 <em>不正確</em> 或沒有開啟權限<br />請按照官方規格角卡並請勿更動基本資料頁面的儲存格"})}))},methods:{open:function(){var e=this.$buefy.loading.open();return e}}},E=D,A=(n("5c0b"),Object(u["a"])(E,a,i,!1,null,null,null)),B=A.exports,F=n("9483");Object(F["a"])("".concat("/DungeonsDelicacy/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("a623");var M=n("289d"),I=n("2f62");r["a"].use(M["a"]),r["a"].use(I["a"]);var J=new I["a"].Store({state:{chars:[],brokenChars:[]},getters:{getBrokenChars:function(e){return e.brokenChars.map((function(e){return e.名稱}))}},mutations:{setChars:function(e,t){var n=t.data,r=n.shift(),a=n.filter((function(e){return e.every((function(e){return(!isNaN(parseInt(e))||Boolean(e))&&"undefined"!=e}))})),i=n.filter((function(e){return"壞"==e[0]})),o=i.map((function(e){for(var t={},n=0;n<r.length;n++)t[r[n]]=e[n];return t}));this.state.brokenChars=o;var s=a.map((function(e){for(var t={},n=0;n<r.length;n++)t[r[n]]=e[n];return t}));this.state.chars=s}},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({store:J,render:function(e){return e(B)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){},cd8c:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.e245273b.png"}});
//# sourceMappingURL=app.7d223269.js.map