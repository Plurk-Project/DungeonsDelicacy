(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/DungeonsDelicacy/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"16a3":function(t,e,n){"use strict";var a=n("cd8c"),r=n.n(a);r.a},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="4678"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("Rank"),n("Footer")],1)},o=[],s=(n("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{"mobile-burger":!1}},[a("template",{slot:"brand"},[a("b-navbar-item",{staticStyle:{"vertical-align":"bottom"},attrs:{tag:"div"}},[a("img",{attrs:{src:n("cf05"),alt:"Logo"}})]),a("b-navbar-item",{attrs:{tag:"div"}},[a("h4",{staticClass:"title is-4"},[t._v("地下城與美食 非官方 排行榜")])]),a("b-navbar-item",[a("div",{staticClass:"buttons"},[a("b-button",{attrs:{type:"is-primary",size:"is-small","icon-left":"account-remove"},on:{click:function(e){return t.showBrokenChars()}}}),a("Party"),a("Cook",{attrs:{foods:t.foods}}),a("Battle")],1)]),a("b-navbar-item",[a("b-dropdown",{attrs:{hoverable:"","aria-role":"list"}},[a("button",{staticClass:"button is-primary tag",attrs:{slot:"trigger"},slot:"trigger"},[a("span",[t._v("統計")]),a("b-icon",{attrs:{icon:"menu-down"}})],1),t._l(t.statistics,(function(t,e){return a("b-dropdown-item",{key:e,attrs:{paddingless:"","aria-role":"listitem"}},[a("Statistic",{attrs:{category:t}})],1)}))],2)],1),a("b-navbar-item",[a("b-dropdown",{attrs:{hoverable:"","aria-role":"list"}},[a("button",{staticClass:"button is-primary tag",attrs:{slot:"trigger"},slot:"trigger"},[a("span",[t._v("連結")]),a("b-icon",{attrs:{icon:"menu-down"}})],1),t._l(t.links,(function(e,n){return a("b-dropdown-item",{key:n,attrs:{"aria-role":"listitem",href:e.link,target:"_blank"}},[t._v(" "+t._s(e.name)+" ")])}))],2)],1),a("b-navbar-item",{attrs:{href:"https://github.com/sheiun/DungeonsDelicacy",target:"_blank"}},[a("b-taglist",{attrs:{attached:""}},[a("b-tag",{attrs:{type:"is-light"}},[t._v("版本")]),a("b-tag",{attrs:{type:"is-primary"}},[t._v(t._s(t.$store.getters.appVersion))])],1)],1)],1)],2)}),i=[],c=(n("99af"),n("a15b"),n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-button",{attrs:{type:"is-primary",size:"is-small","icon-left":"pot-mix"},on:{click:function(e){return t.show()}}})}),l=[],u=(n("4795"),n("4de4"),n("4160"),n("a630"),n("a9e3"),n("e25e"),n("ac1f"),n("3ca3"),n("1276"),n("159b"),n("ddb0"),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"50/80",a=Number(n.split("/")[0]),r=f(b(t),e),o=p(t)*Number(n.split("/")[1]),s=r*o,i=[];return i.push("料理等級: "+t),i.push("料理難度: "+e),i.push("生吃/料理: "+n),i.push("料理期望值: "+s),i.push("料理經驗值: "+o),i.push("料理成功率: "+parseInt(100*r)+"%"),a>s?i.push("建議: 生吃"):a<s?i.push("建議: 熟食"):i.push("建議: 都行"),i.join("<br />")}),d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from(Array(t).keys()).map((function(t){return t+e+1}))},f=function(t,e){if("number"==typeof t&&"number"==typeof e)return Number(t>=e);if("number"==typeof t)return e.filter((function(e){return t>=e})).length/e.length;if("number"==typeof e)return t.filter((function(t){return t>=e})).length/t.length;var n=0;return t.forEach((function(t){e.forEach((function(e){t>=e&&n++}))})),n/(t.length*e.length)},b=function(t){var e;if(t<1)throw new Error("你不能料理",t);return e=t<=2?4:6,d(Number(e),Number(t))},p=function(t){var e;if(t<1)throw new Error("你不能料理",t);return 4>=t?e=1:7>=t?e=1.2:8>=t?e=1.5:11>=t?e=1.7:15>=t&&(e=2),e},h={props:["foods"],data:function(){return{foodIndex:0,level:1}},template:'\n  <div class="modal-card" style="width: auto">\n    <header class="modal-card-head">\n      <p class="modal-card-title">料理占卜</p>\n    </header>\n    <section class="modal-card-body">\n      <b-field label="料理技能等級">\n        <b-numberinput icon="pot-mix" min="1" v-model="level"></b-numberinput>\n      </b-field>\n\n      <b-field label="食材">\n        <b-select\n          placeholder="選擇一個食材"\n          icon="food-apple"\n          v-model="foodIndex"\n          expanded\n          required\n        >\n          <option v-for="(food, index) in foods" :value="index" :key="index">\n            {{ food.name }}｜{{ food.hard }}｜ {{ food.exp }}\n          </option>\n        </b-select>\n      </b-field>\n    </section>\n    <footer class="modal-card-foot">\n      <button\n        @click="$emit(\'show-cook\', {level, food: foods[foodIndex]})"\n        class="button is-primary"\n      >\n        占卜\n      </button>\n    </footer>\n  </div>'},m={data:function(){return{foods:[]}},methods:{open:function(){var t=this.$buefy.loading.open();return t},show:function(){var t=this;if(0==this.foods.length){var e=this.open();this.fetchAllFoods().then((function(){setTimeout((function(){return e.close()}),100),t.showCookMenu()}))}else this.showCookMenu()},showCookMenu:function(){var t=this;this.$buefy.modal.open({parent:this,component:h,hasModalCard:!0,trapFocus:!0,props:{foods:this.foods},events:{"show-cook":function(e){t.showCook(e.level,e.food)}}})},fetchAllFoods:function(){var t=this;return fetch("https://script.google.com/macros/s/AKfycby46PNdUSQNTidw0bktB9xd0II-MG4rK03kPHvnFlkUFTx_ek8/exec").then((function(t){return t.json()})).then((function(e){t.foods=e.data}))},showCook:function(t,e){this.$buefy.dialog.alert({title:"占卜結果",message:u(t,e.hard,e.exp),confirmText:"讚"})}}},v=m,g=n("2877"),j=Object(g["a"])(v,c,l,!1,null,null,null),y=j.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-button",{attrs:{type:"is-primary",size:"is-small","icon-left":"sword-cross"},on:{click:function(e){return t.show()}}})},w=[],x=(n("13d5"),n("fb6a"),n("ade3")),_=n("2c4e"),C=(n("9129"),n("2909")),O=n("80b5").Normal,$=Math.E;Number.prototype.betweenEq=function(t,e){var n=Math.min.apply(Math,[t,e]),a=Math.max.apply(Math,[t,e]);return this>=n&&this<=a};var D=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Object(C["a"])(Array(t).keys()).map((function(t){return t+e}))},M=function(t,e){return e.map((function(n){return t.map((function(t){var a=t.attack-n.defense;if(a<=0)return 0;var r=D(6,t.hit),o=r.filter((function(t){return t>=n.dodge})).length/r.length;return a*=o,a/e.length})).reduce((function(t,e){return t+e}),0)})).reduce((function(t,e){return t+e}),0)},N=function(t){return t.map((function(t){var e=t.hp;return e})).reduce((function(t,e){return t+e}),0)},z=function(t,e){if(t.variance()==e.variance())return(t.mean()+e.mean())/2;if(t.mean()>e.mean()){var n=t;t=e,e=n}return(e.mean()*Math.pow(t.variance(),2)-e.variance()*(t.mean()*e.variance()+t.variance()*Math.sqrt(Math.pow(t.mean()-e.mean(),2)+2*(Math.pow(t.variance(),2)-Math.pow(e.variance(),2))*Math.log(t.variance()/e.variance()))))/(Math.pow(t.variance(),2)-Math.pow(e.variance(),2))},E=function(t,e,n){var a,r;return a=t.mean()==e.mean()?1:t.mean()>e.mean()?1-e.cdf(n)+t.cdf(n):1-t.cdf(n)+e.cdf(n),r=t.mean()>e.mean()?1-a/2:a/2,r};function T(t,e){var n=N(t),a=N(e),r=M(e,t),o=M(t,e),s=n/r,i=a/o;if(Number.isNaN(s)||Number.isNaN(i))throw new Error("血量不能為 0");if(s==1/0&&i==1/0)throw new Error("無勝負！");if(s==1/0)return 1;if(i==1/0)return 0;var c=new O(s,$/e.length),l=new O(i,$/t.length),u=z(c,l),d=E(c,l,u);if(!u.betweenEq(c.mean(),l.mean()))throw new Error("cPoint ".concat(u," is not between ").concat(c.mean()," ").concat(l.mean()));return d}var P,S,A,F,I=[{name:"血量",variable:"hp"},{name:"攻擊",variable:"attack"},{name:"防禦",variable:"defense"},{name:"命中",variable:"hit"},{name:"閃避",variable:"dodge"}],B=I.map((function(t){return Object(x["a"])({},t.variable,0)})).reduce((function(t,e){return Object.assign(t,e)}),{}),q=[{},{},{},{},{},{}].map((function(t){return Object.assign({},B)})),R=JSON.parse(JSON.stringify(q)),G={data:function(){return{monsterCount:1,playerCount:2,attrs:I,chars:q,monsters:R}},mounted:function(){_["a"].open({duration:5e3,message:"攻擊的部分尚未針對各職業的基礎骰做處理 目前直接把骰面除 2 加入攻擊中即可",position:"is-top",type:"is-info"})},methods:{showResult:function(){var t,e="is-primary";try{var n=T(this.chars.slice(0,this.charCount),this.monsters.slice(0,this.monsterCount));t="勝率: ".concat(Math.round(100*n,2)+"%")}catch(a){e="is-danger",t="發生了一些錯誤 這個程式還在 Beta 版<br />是通過數學統計模型建出來的<br />至少要有一個人的攻擊大於敵方防禦<br />且血量不能為 0<br /><code>".concat(a,"</code>")}this.$buefy.dialog.alert({title:"占卜結果",message:t,type:e,confirmText:"讚"})}},template:'\n  <div class="modal-card" style="width: auto">\n    <header class="modal-card-head">\n      <p class="modal-card-title">戰鬥占卜</p>\n    </header>\n    <section class="modal-card-body">\n      <b-field label="玩家人數">\n        <b-numberinput v-model="playerCount" min="1" max="6"></b-numberinput>\n      </b-field>\n      <b-field grouped v-for="(n, index) in playerCount" :key="\'p\' + index">\n        <b-field\n          :label="attr.name"\n          v-for="attr in attrs"\n          :key="attr.variable"\n          expanded\n        >\n          <b-input type="number" value="0" v-model.number="chars[index][attr.variable]" required></b-input>\n        </b-field>\n      </b-field>\n      <b-field label="怪物數量">\n        <b-numberinput v-model="monsterCount" min="1" max="6"></b-numberinput>\n      </b-field>\n      <b-field grouped v-for="(n, index) in monsterCount" :key="\'m\' + index">\n        <b-field\n          :label="attr.name"\n          v-for="attr in attrs"\n          :key="attr.variable"\n          expanded\n        >\n          <b-input type="number" value="0" v-model.number="monsters[index][attr.variable]" required></b-input>\n        </b-field>\n      </b-field>\n    </section>\n    <footer class="modal-card-foot">\n      <button class="button is-primary" @click="showResult()">\n        占卜\n      </button>\n    </footer>\n  </div>'},U={methods:{show:function(){this.$buefy.modal.open({parent:this,component:G,hasModalCard:!0,trapFocus:!0})}}},W=U,L=Object(g["a"])(W,k,w,!1,null,null,null),H=L.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"is-padding",on:{click:function(e){return t.show()}}},[t._v(" "+t._s(t.$props.category)+" ")])},J=[],K=(n("4fad"),n("b64b"),n("1fca")),Q={extends:K["a"],props:["labels","chartData"],mounted:function(){this.renderChart({labels:this.$props.labels,datasets:[{backgroundColor:["rgba(34, 61, 144, .8)","rgba(39, 81, 135, .8)","rgba(124, 203, 238, .8)","rgba(90, 187, 222, .8)","rgba(31, 183, 183, .8)","rgba(243, 190, 61, .8)","rgba(184, 65, 20, .8)","rgba(138, 53, 38, .8)","rgba(227, 65, 80, .8)","rgba(154, 37, 53, .8)","rgba(34, 61, 144, .8)","rgba(39, 81, 135, .8)","rgba(124, 203, 238, .8)","rgba(90, 187, 222, .8)","rgba(31, 183, 183, .8)"],borderWidth:0,data:this.$props.chartData}]},{responsive:!0,maintainAspectRatio:!1})}},X=Q,Y=Object(g["a"])(X,P,S,!1,null,null,null),Z=Y.exports,tt={props:["category"],data:function(){return{labels:[],chartData:[]}},methods:{show:function(){if(0==this.labels.length||0==this.chartData.length||this.labels.length!=this.chartData.length){var t=this.groupBy(this.$store.state.chars,this.$props.category);this.labels=Object.keys(t),this.chartData=Object.entries(t).map((function(t){return t[1].length}))}this.$buefy.modal.open({parent:this,props:{labels:this.labels,chartData:this.chartData,cssClasses:"has-background-light section"},component:Z})},groupBy:function(t,e){return t.reduce((function(t,n){return(t[n[e]]=t[n[e]]||[]).push(n),t}),{})}}},et=tt,nt=Object(g["a"])(et,V,J,!1,null,null,null),at=nt.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-button",{attrs:{type:"is-primary",size:"is-small","icon-left":"account-group"},on:{click:function(e){return t.show()}}})},ot=[],st=(n("a623"),n("c975"),n("5319"),n("498a"),{extends:K["b"],props:["labels","chars"],methods:{charWrapper:function(t){var e=this.$props.labels.map((function(e){return t[e]})),n=240,a=Math.floor(Math.random()*n),r=Math.floor(Math.random()*n),o=Math.floor(Math.random()*n);return{label:t.名稱,backgroundColor:"rgba(".concat(a,", ").concat(r,", ").concat(o,", .3)"),borderColor:"rgba(".concat(a,", ").concat(r,", ").concat(o,", .8)"),borderWidth:1,pointBackgroundColor:"#fff",pointBorderColor:"#555",pointHoverBackgroundColor:"#654236",data:e}}},mounted:function(){this.renderChart({labels:this.$props.labels,datasets:this.$props.chars.map(this.charWrapper)},{responsive:!0,maintainAspectRatio:!1})}}),it=st,ct=Object(g["a"])(it,A,F,!1,null,null,null),lt=ct.exports,ut=["經驗","身高","體重","體力","金錢"],dt=["命中","傷害","防禦","迴避","法傷","治療"],ft=["料理","採集","體能","偵查","鑑定","鍛造","開鎖","扒竊"],bt=ut.concat(dt).concat(ft),pt={"劍盾":"D8","雙刀":"2D6","杖盾":"D4","法杖":"D6","盾錘":"D6","雙手鈍器":"D8","弓箭":"D10","雙手槍":"D10"},ht={props:["chars"],data:function(){return{texts:[]}},mounted:function(){this.texts=this.$props.chars.map(this.getFormatedText)},methods:{getFormatedText:function(t){return"".concat(t.名稱.trim().replace(/\n/," "),"（").concat(t.武器,"｜").concat(t.種族,"）HP ").concat(t.血量,"\n物攻：").concat(pt[t.武器],"+").concat(t.傷害," 命中：D6+").concat(t.命中,"\n迴避：").concat(t.迴避," 防禦：").concat(t.防禦," 法傷：").concat(t.法傷," 治療：").concat(t.治療,"\n－\n料理：").concat(t.料理," 採集：").concat(t.採集," 體能：").concat(t.體能," 偵查：").concat(t.偵查,"\n鑑定：").concat(t.鑑定," 鍛造：").concat(t.鍛造," 開鎖：").concat(t.開鎖," 扒竊：").concat(t.扒竊)},onCopy:function(t){this.$buefy.snackbar.open({duration:3e3,message:"複製 ".concat(t.text.split("（")[0]," 的資訊成功！"),position:"is-bottom",type:"is-success"})},onError:function(t){this.$buefy.snackbar.open({duration:3e3,message:"複製失敗！",position:"is-bottom",type:"is-danger"})}},template:'\n  <div class="modal-card" style="width: auto;">\n    <section class="modal-card-body">\n      <div class="level" v-for="(text, index) in texts">\n        <div>\n          <pre>{{ text }}</pre>\n        </div>\n        <div class="level-right">\n          <b-button\n            icon-left="clipboard-text"\n            class="button is-primary"\n            v-clipboard:copy="texts[index]"\n            v-clipboard:success="onCopy"\n            v-clipboard:error="onError"\n            >\n            複製\n          </b-button>\n        </div>\n      </div>\n    </section>\n  </div>'},mt={props:["chars"],data:function(){return{names:Array.from({length:6},(function(){return""})),selecteds:Array.from({length:6},(function(){return null})),playerCount:2,focusIndex:0}},computed:{filteredChars:function(){var t=this;return this.chars.filter((function(e){return e.名稱.indexOf(t.names[t.focusIndex])>=0}))}},methods:{getSelectedChars:function(){var t=this.selecteds.slice(0,this.playerCount);return t.every(Boolean)?t:(this.$buefy.snackbar.open({duration:3e3,message:"尚有空位還沒選擇成員",position:"is-bottom",type:"is-warning"}),null)},showChart:function(){var t=this.getSelectedChars();t&&this.$buefy.modal.open({parent:this,props:{labels:dt.concat(ft),chars:t,cssClasses:"has-background-light section"},component:lt})},showText:function(){var t=this.getSelectedChars();t&&this.$buefy.modal.open({parent:this,props:{chars:t},component:ht,hasModalCard:!0,trapFocus:!0})}},template:'\n  <div class="modal-card" style="width: auto;">\n    <header class="modal-card-head">\n      <p class="modal-card-title">戰力分析</p>\n    </header>\n    <section class="modal-card-body">\n      <b-field label="玩家人數">\n        <b-numberinput v-model="playerCount" min="1" max="6"></b-numberinput>\n      </b-field>\n      <b-field :label="\'隊員 \' + n" v-for="(n, index) in playerCount" :key="index">\n        <b-autocomplete\n          v-model="names[index]"\n          :data="filteredChars"\n          icon="account"\n          field="名稱"\n          @focus="focusIndex = index"\n          open-on-focus\n          @select="(option) => (selecteds[index] = option)"\n        >\n          <template slot="empty">找不到角色</template>\n        </b-autocomplete>\n      </b-field>\n    </section>\n    <footer class="modal-card-foot">\n      <b-button icon-left="chart-line" class="button is-primary" @click="showChart()">\n        圖\n      </b-button>\n      <b-button icon-left="clipboard-text" class="button is-primary" @click="showText()">\n        文\n      </b-button>\n    </footer>\n  </div>\n  '},vt={methods:{show:function(){this.$buefy.modal.open({parent:this,props:{chars:this.$store.state.chars},component:mt,hasModalCard:!0,trapFocus:!0})}}},gt=vt,jt=Object(g["a"])(gt,rt,ot,!1,null,null,null),yt=jt.exports,kt='<span class="icon is-small is-primary">\n                <i class="mdi mdi-link-variant"></i>\n              </span>',wt={components:{Cook:y,Battle:H,Statistic:at,Party:yt},data:function(){return{foods:[],statistics:["性別","武器","種族","信仰","陣營"],links:[{name:"官方網站",link:"https://www.dungeonsdelicacy.com/"},{name:"官方噗浪",link:"https://www.plurk.com/DungeonsDelicacy"},{name:"鍛造噗",link:"https://www.plurk.com/p/noqcmc"},{name:"地下城二三事",link:"https://www.plurk.com/p/nojfla"},{name:"報名名單",link:"https://docs.google.com/spreadsheets/d/1F1lY69prHMCPtEYIuH2TZP7EP41_f-uyNpGW0NP5AAg/edit#gid=0"},{name:"常見問題",link:"https://www.plurk.com/p/noo6aw"},{name:"Q&A 提問",link:"https://docs.google.com/forms/d/1k83C8vs3mAuXvafc8Fr9lDNubi9hqwIzeIVn859DSRU/viewform?edit_requested=true"},{name:"Q&A 回應",link:"https://docs.google.com/spreadsheets/d/1xjGjAFDLLsjFapYId4AOWm95vqdB2lflTEfPabkcXQA/edit#gid=720573555"},{name:"玩家資源",link:"https://www.plurk.com/p/nomukf"}]}},methods:{showBrokenChars:function(){var t=this.$store.getters.brokenChars,e="<span>第一頁一定要是 <strong>基本資料</strong><br />任何破壞格式的行為都視為格式不符</span>";e+="<br />",e+='<div class="list">'.concat(t.map(this.charListWrapper).join(""),"</div>"),this.$buefy.dialog.alert({title:"角卡不符或不全或沒權限",message:e})},charListWrapper:function(t){return'<a class="list-item" href="'.concat(t.角卡,'" target="_blank">').concat(t.報名).concat(kt,"</a>")}}},xt=wt,_t=(n("16a3"),Object(g["a"])(xt,s,i,!1,null,null,null)),Ct=_t.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",[n("b-tabs",{attrs:{position:"is-centered"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.tabs,(function(t){return n("b-tab-item",{key:t,attrs:{label:t}})})),1)],1),n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-half"},[n("Table",{attrs:{tab:t.getActiveTabName()}})],1)])])])},$t=[],Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-table",{attrs:{data:t.currentChars,columns:t.columns,paginated:!0,"per-page":50,"current-page":t.currentPage},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})},Mt=[],Nt=(n("4e82"),function(t){return{field:t,label:t,numeric:!0,visible:!1}}),zt={props:["tab"],data:function(){return{tabs:bt,currentChars:[],columns:[{field:"rank",label:"排名",width:"60",numeric:!0},{field:"角色名稱",label:"角色名稱",renderHtml:!0}].concat(Object(C["a"])(bt.map(Nt))),currentPage:1}},watch:{tab:{immediate:!0,handler:function(t,e){var n=this,a=1e3;void 0===e&&(a=3e3);var r=this.open();setTimeout((function(){if(void 0!=e){var o=n.tabs.indexOf(e)+2;n.columns[o].visible=!1}var s=n.getFilteredChars(t);0!=s.length&&(a=100);var i=n.tabs.indexOf(t)+2;n.columns[i].visible=!0,n.currentPage=1,setTimeout((function(){0==s.length&&(s=n.getFilteredChars(t)),n.currentChars=s,r.close()}),a)}),a)}}},computed:{chars:function(){return this.$store.state.chars}},methods:{getFilteredChars:function(t){var e=this.chars;e=e.filter((function(e){return!isNaN(parseInt(e[t]))})),e=e.sort((function(e,n){return n[t]-e[t]}));for(var n=0;n<e.length;n++)e[n].rank=n+1;return e},open:function(){var t=this.$buefy.loading.open();return t}}},Et=zt,Tt=Object(g["a"])(Et,Dt,Mt,!1,null,null,null),Pt=Tt.exports,St={name:"rank",components:{Table:Pt},data:function(){return{activeTab:0,tabs:bt}},methods:{getActiveTabName:function(){return this.tabs[this.activeTab]}}},At=St,Ft=Object(g["a"])(At,Ot,$t,!1,null,null,null),It=Ft.exports,Bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},qt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"content has-text-centered"},[n("p",[n("span",[n("strong",[t._v("地下城與美食")]),t._v(" 由 "),n("a",{attrs:{href:"https://www.plurk.com/DungeonsDelicacy",target:"_blank"}},[t._v(" DDY地下城與美食協會 ")]),t._v(" 舉辦 ")]),n("br"),n("span",[n("strong",[t._v("排行榜")]),t._v(" 由 "),n("a",{attrs:{href:"https://github.com/sheiun",target:"_blank"}},[t._v("SheiUn")]),t._v(" 開發 ")]),n("br"),n("span",[n("a",{attrs:{href:"https://github.com/sheiun/DungeonsDelicacy",target:"_blank"}},[n("strong",[t._v("原始碼")])]),t._v(" 採用 "),n("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php",target:"_blank"}},[t._v(" MIT ")]),t._v(" 授權 ")]),n("br"),n("span",[n("strong",[t._v("Logo")]),t._v(" 遵照 "),n("a",{attrs:{href:"https://www.plurk.com/p/no6yis",target:"_blank"}},[t._v(" 此噗 ")]),t._v(" 的使用範圍 ")]),n("br"),n("span",[n("span",[t._v("有任何問題歡迎使用 ")]),n("a",{attrs:{href:"https://forms.gle/3CZuj7CZ7vNC9zUc8",target:"_blank"}},[t._v(" 問題回報 ")])])])])])}],Rt={},Gt=Object(g["a"])(Rt,Bt,qt,!1,null,null,null),Ut=Gt.exports,Wt={name:"app",components:{Navbar:Ct,Rank:It,Footer:Ut},beforeMount:function(){var t=this,e=this.open();fetch("https://script.google.com/macros/s/AKfycbzbmSK_x_cGD7QonZ-yj5USYb-XrP8RR4RVwGXdOK8G1yX_52E/exec",{method:"POST",body:JSON.stringify({token:"gogoddy"})}).then((function(t){return t.json()})).then((function(n){var a="每 2 小時自動更新一次",r="is-info";"ok"==n.msg?t.$store.commit("setChars",{data:n.data}):(a="讀取失敗請稍後再試！",r="is-danger"),e.close(),_["a"].open({duration:3e3,message:a,position:"is-top",type:r})}))},methods:{open:function(){var t=this.$buefy.loading.open();return t}}},Lt=Wt,Ht=(n("5c0b"),Object(g["a"])(Lt,r,o,!1,null,null,null)),Vt=Ht.exports,Jt=n("9483");Object(Jt["a"])("".concat("/DungeonsDelicacy/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),setTimeout((function(){window.location.reload(!0)}),1e3)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Kt=n("289d"),Qt=n("2f62"),Xt=n("4eb5"),Yt=n.n(Xt);a["a"].use(Kt["a"]),a["a"].use(Qt["a"]),Yt.a.config.autoSetContainer=!0,a["a"].use(Yt.a);var Zt=new Qt["a"].Store({state:{packageVersion:"1.6.0",chars:[],brokenChars:[]},getters:{appVersion:function(t){return t.packageVersion},brokenChars:function(t){return t.brokenChars}},mutations:{setChars:function(t,e){var n=e.data,a=n.shift(),r=n.filter((function(t){return t.every((function(t){return(!isNaN(parseInt(t))||Boolean(t))&&"undefined"!=t}))})),o=n.filter((function(t){return"異常"==t[0]})),s=o.map((function(t){for(var e={},n=0;n<a.length;n++)e[a[n]]=t[n];return e}));this.state.brokenChars=s;var i=r.map((function(t){for(var e={},n=0;n<a.length;n++)e[a[n]]=t[n];return e}));i.map((function(t){var e=t.名稱,n=t.角卡,a=t.噗浪;return t.角色名稱='<div class="level is-paddingless">\n          <div class="level-left">\n            <a href="'.concat(n,'" target="_blank">').concat(e,'</a>\n          </div>\n          <div class="level-right">\n            <a href="').concat(a,'" target="_blank"><span class="icon is-small is-primary"><i class="mdi mdi-account-box"></i></span></a>\n          </div>\n        </div>'),t})),this.state.chars=i}},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({store:Zt,render:function(t){return t(Vt)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(t,e,n){},cd8c:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.e245273b.png"}});
//# sourceMappingURL=app.cbbf07a9.js.map