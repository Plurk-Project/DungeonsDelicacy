(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],f=0,d=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/DungeonsDelicacy/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"16a3":function(t,e,n){"use strict";var r=n("cd8c"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("Rank"),n("Footer")],1)},a=[],s=(n("d3b7"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{attrs:{"mobile-burger":!1}},[r("template",{slot:"brand"},[r("b-navbar-item",{staticStyle:{"vertical-align":"bottom"},attrs:{tag:"div"}},[r("img",{attrs:{src:n("cf05"),alt:"Logo"}})]),r("b-navbar-item",{attrs:{tag:"div"}},[r("h4",{staticClass:"title is-4"},[t._v("地下城與美食 非官方 排行榜")])]),r("b-navbar-item",[r("div",{staticClass:"buttons"},[r("b-button",{attrs:{type:"is-primary",size:"is-small","icon-left":"account-remove"},on:{click:function(e){return t.showBrokenChars()}}}),r("Cook",{attrs:{foods:t.foods}})],1)]),r("b-navbar-item",[r("b-dropdown",{attrs:{hoverable:"","aria-role":"list"}},[r("button",{staticClass:"button is-primary tag",attrs:{slot:"trigger"},slot:"trigger"},[r("span",[t._v("連結")]),r("b-icon",{attrs:{icon:"menu-down"}})],1),t._l(t.links,(function(e,n){return r("b-dropdown-item",{key:n,attrs:{"aria-role":"listitem",href:e.link,target:"_blank"}},[t._v(" "+t._s(e.name)+" ")])}))],2)],1),r("b-navbar-item",{attrs:{href:"https://github.com/sheiun/DungeonsDelicacy",target:"_blank"}},[r("b-taglist",{attrs:{attached:""}},[r("b-tag",{attrs:{type:"is-light"}},[t._v("版本")]),r("b-tag",{attrs:{type:"is-primary"}},[t._v(t._s(t.$store.getters.appVersion))])],1)],1)],1)],2)}),i=[],c=(n("99af"),n("a15b"),n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-button",{attrs:{type:"is-primary",size:"is-small","icon-left":"pot-mix"},on:{click:function(e){return t.cardModal()}}})}),l=[],u=(n("4de4"),n("4160"),n("a630"),n("a9e3"),n("e25e"),n("ac1f"),n("3ca3"),n("1276"),n("159b"),n("ddb0"),n("4795"),{props:["foods"],data:function(){return{foodIndex:0,level:1}},template:'<form v-on:submit.prevent>\n              <div class="modal-card" style="width: auto">\n                <header class="modal-card-head">\n                  <p class="modal-card-title">料理占卜</p>\n                </header>\n                <section class="modal-card-body">\n                  <b-field label="料理技能等級">\n                    <b-input\n                      icon="pot-mix"\n                      v-model="level"\n                      type="number"\n                      :value="level"\n                      placeholder="你的料理等級"\n                      min="1"\n                      required\n                    >\n                    </b-input>\n                  </b-field>\n\n                  <b-field label="食材">\n                    <b-select\n                      placeholder="選擇一個食材"\n                      icon="food-apple"\n                      v-model="foodIndex"\n                      expanded\n                      required\n                    >\n                      <option v-for="(food, index) in foods" :value="index" :key="index">\n                        {{ food.name }}｜{{ food.hard }}｜ {{ food.exp }}\n                      </option>\n                    </b-select>\n                  </b-field>\n                </section>\n                <footer class="modal-card-foot">\n                  <button\n                    @click="$emit(\'show-cook\', {level, food: foods[foodIndex]})"\n                    class="button is-primary"\n                  >\n                    占卜\n                  </button>\n                </footer>\n              </div>\n            </form>'}),f={data:function(){return{foods:[]}},methods:{open:function(){var t=this.$buefy.loading.open();return t},cardModal:function(){var t=this;if(0==this.$data.foods.length){var e=this.open();this.fetchAllFoods().then((function(){setTimeout((function(){return e.close()}),100),t.showCookMenu()}))}else this.showCookMenu()},showCookMenu:function(){var t=this;this.$buefy.modal.open({parent:this,component:u,hasModalCard:!0,trapFocus:!0,props:{foods:this.$data.foods},events:{"show-cook":function(e){t.showCook(e.level,e.food)}}})},fetchAllFoods:function(){var t=this;return fetch("https://script.google.com/macros/s/AKfycby46PNdUSQNTidw0bktB9xd0II-MG4rK03kPHvnFlkUFTx_ek8/exec").then((function(t){return t.json()})).then((function(e){t.$data.foods=e.data}))},showCook:function(t,e){this.$buefy.dialog.alert({title:"占卜結果",message:this.cook(t,e.hard,e.exp),confirmText:"讚"})},cook:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"50/80",r=Number(n.split("/")[0]),o=this.prob(this.cook2dice(t),e),a=this.getCookBonus(t)*Number(n.split("/")[1]),s=o*a,i=[];return i.push("料理等級: "+t),i.push("料理難度: "+e),i.push("生吃/料理: "+n),i.push("料理期望值: "+s),i.push("料理經驗值:"+a),i.push("料理成功率: "+parseInt(100*o)+"%"),r>s?i.push("建議: 生吃"):r<s?i.push("建議: 熟食"):i.push("建議: 都行"),i.join("<br />")},getDice:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from(Array(t).keys()).map((function(t){return t+e+1}))},prob:function(t,e){if("number"==typeof t&&"number"==typeof e)return Number(t>=e);if("number"==typeof t)return e.filter((function(e){return t>=e})).length/e.length;if("number"==typeof e)return t.filter((function(t){return t>=e})).length/t.length;var n=0;return t.forEach((function(t){e.forEach((function(e){t>=e&&n++}))})),n/(t.length*e.length)},cook2dice:function(t){var e;if(t<1)throw new Error("你不能料理",t);return e=t<=2?4:6,this.getDice(Number(e),Number(t))},getCookBonus:function(t){var e;if(t<1)throw new Error("你不能料理",t);return 4>=t?e=1:7>=t?e=1.2:8>=t?e=1.5:11>=t?e=1.7:15>=t&&(e=2),e}}},d=f,p=n("2877"),h=Object(p["a"])(d,c,l,!1,null,null,null),b=h.exports,v={components:{Cook:b},data:function(){return{foods:[],links:[{name:"官方網站",link:"https://www.dungeonsdelicacy.com/"},{name:"官方噗浪",link:"https://www.plurk.com/DungeonsDelicacy"},{name:"常見問題",link:"https://www.plurk.com/p/noo6aw"},{name:"Q&A 提問",link:"https://docs.google.com/forms/d/1k83C8vs3mAuXvafc8Fr9lDNubi9hqwIzeIVn859DSRU/viewform?edit_requested=true"},{name:"Q&A 回應",link:"https://docs.google.com/spreadsheets/d/1xjGjAFDLLsjFapYId4AOWm95vqdB2lflTEfPabkcXQA/edit#gid=720573555"},{name:"玩家資源",link:"https://www.plurk.com/p/nomukf"}]}},methods:{showBrokenChars:function(){var t=this.$store.getters.brokenChars,e="<span>第一頁一定要是 <strong>基本資料</strong><br />任何破壞格式的行為都視為格式不符</span>";e+="<br />",e+='<div class="list">'.concat(t.map(this.charListWrapper).join(""),"</div>"),this.$buefy.dialog.alert({title:"角卡不符或不全或沒權限",message:e})},charListWrapper:function(t){return'<a class="list-item" href="'.concat(t.角卡,'" target="_blank">').concat(t.報名,"</a>")}}},m=v,g=(n("16a3"),Object(p["a"])(m,s,i,!1,null,null,null)),k=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",[n("b-tabs",{model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.tabs,(function(t){return n("b-tab-item",{key:t,attrs:{label:t}})})),1)],1),n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-half"},[n("Table",{attrs:{tab:t.getActiveTabName()}})],1)])])])},w=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-table",{attrs:{data:t.data,columns:t.columns,paginated:!0,"per-page":50,"current-page":t.currentPage},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})},x=[],C=(n("c975"),n("4e82"),n("2909")),$=["經驗","身高","體重","體力","金錢","命中","傷害","防禦","迴避","法傷","治療","料理","採集","體能","偵查","鑑定","鍛造","開鎖","扒竊"],j=function(t){return{field:t,label:t,numeric:!0,visible:!1}},O={props:["tab"],data:function(){return{tabs:$,data:[],columns:[{field:"rank",label:"排名",width:"60",numeric:!0},{field:"角色名稱",label:"角色名稱",renderHtml:!0}].concat(Object(C["a"])($.map(j))),currentPage:1}},watch:{tab:{immediate:!0,handler:function(t,e){var n=this,r=1e3;void 0===e&&(r=3e3);var o=this.open();setTimeout((function(){if(void 0!=e){var a=n.$data.tabs.indexOf(e)+2;n.$data.columns[a].visible=!1}var s=n.getFilteredChars(t);0!=s.length&&(r=100);var i=n.$data.tabs.indexOf(t)+2;n.$data.columns[i].visible=!0,n.$data.currentPage=1,setTimeout((function(){0==s.length&&(s=n.getFilteredChars(t)),n.$data.data=s,o.close()}),r)}),r)}}},computed:{chars:function(){return this.$store.state.chars}},methods:{getFilteredChars:function(t){var e=this.chars;e=e.filter((function(e){return!isNaN(parseInt(e[t]))})),e=e.sort((function(e,n){return n[t]-e[t]}));for(var n=0;n<e.length;n++)e[n].rank=n+1;return e},open:function(){var t=this.$buefy.loading.open();return t}}},T=O,D=Object(p["a"])(T,_,x,!1,null,null,null),N=D.exports,P={name:"rank",components:{Table:N},data:function(){return{activeTab:0,tabs:["經驗","身高","體重","體力","金錢","命中","傷害","防禦","迴避","法傷","治療","料理","採集","體能","偵查","鑑定","鍛造","開鎖","扒竊"]}},methods:{getActiveTabName:function(){return this.$data.tabs[this.$data.activeTab]}}},A=P,F=Object(p["a"])(A,y,w,!1,null,null,null),S=F.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"content has-text-centered"},[n("p",[n("span",[n("strong",[t._v("地下城與美食")]),t._v(" 由 "),n("a",{attrs:{href:"https://www.plurk.com/DungeonsDelicacy",target:"_blank"}},[t._v(" DDY地下城與美食協會 ")]),t._v(" 舉辦 ")]),n("br"),n("span",[n("strong",[t._v("排行榜")]),t._v(" 由 "),n("a",{attrs:{href:"https://github.com/sheiun",target:"_blank"}},[t._v("SheiUn")]),t._v(" 開發 ")]),n("br"),n("span",[n("a",{attrs:{href:"https://github.com/sheiun/DungeonsDelicacy",target:"_blank"}},[n("strong",[t._v("原始碼")])]),t._v(" 採用 "),n("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php",target:"_blank"}},[t._v(" MIT ")]),t._v(" 授權 ")]),n("br"),n("span",[n("strong",[t._v("Logo")]),t._v(" 遵照 "),n("a",{attrs:{href:"https://www.plurk.com/p/no6yis",target:"_blank"}},[t._v(" 此噗 ")]),t._v(" 的使用範圍 ")])])])])}],I={},B=Object(p["a"])(I,E,M,!1,null,null,null),q=B.exports,L=n("2c4e"),R={name:"app",components:{Navbar:k,Rank:S,Footer:q},beforeMount:function(){var t=this,e=this.open();fetch("https://script.google.com/macros/s/AKfycbzbmSK_x_cGD7QonZ-yj5USYb-XrP8RR4RVwGXdOK8G1yX_52E/exec",{method:"POST",body:JSON.stringify({token:"gogoddy"})}).then((function(t){return t.json()})).then((function(n){var r="每 8 小時自動更新一次",o="is-info";"ok"==n.msg?t.$store.commit("setChars",{data:n.data}):(r="讀取失敗請稍後再試！",o="is-danger"),e.close(),L["a"].open({duration:3e3,message:r,position:"is-top",type:o})}))},methods:{open:function(){var t=this.$buefy.loading.open();return t}}},V=R,G=(n("5c0b"),Object(p["a"])(V,o,a,!1,null,null,null)),K=G.exports,Q=n("9483");Object(Q["a"])("".concat("/DungeonsDelicacy/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("a623");var U=n("289d"),X=n("2f62");r["a"].use(U["a"]),r["a"].use(X["a"]);var z=new X["a"].Store({state:{packageVersion:"1.3.0",chars:[],brokenChars:[]},getters:{appVersion:function(t){return t.packageVersion},brokenChars:function(t){return t.brokenChars}},mutations:{setChars:function(t,e){var n=e.data,r=n.shift(),o=n.filter((function(t){return t.every((function(t){return(!isNaN(parseInt(t))||Boolean(t))&&"undefined"!=t}))})),a=n.filter((function(t){return"異常"==t[0]})),s=a.map((function(t){for(var e={},n=0;n<r.length;n++)e[r[n]]=t[n];return e}));this.state.brokenChars=s;var i=o.map((function(t){for(var e={},n=0;n<r.length;n++)e[r[n]]=t[n];return e}));i.map((function(t){var e=t.名稱,n=t.角卡,r=t.噗浪;return t.角色名稱='<div class="level is-paddingless">\n          <div class="level-left">\n            <a href="'.concat(n,'" target="_blank">').concat(e,'</a>\n          </div>\n          <div class="level-right">\n            <a href="').concat(r,'" target="_blank"><span class="icon is-small is-primary"><i class="mdi mdi-account-box"></i></span></a>\n          </div>\n        </div>'),t})),this.state.chars=i}},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({store:z,render:function(t){return t(K)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(t,e,n){},cd8c:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.e245273b.png"}});
//# sourceMappingURL=app.28e18382.js.map