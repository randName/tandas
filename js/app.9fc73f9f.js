(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,v=[];d<s.length;d++)i=s[d],r[i]&&v.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:t.dark}},[a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline"},[a("span",[t._v("Tandas")])]),a("v-spacer"),a("v-chip",[a("v-avatar",[a("v-icon",{attrs:{color:t.status.color},domProps:{textContent:t._s(t.status.icon)}})],1),t._v("\n      "+t._s(t.status.text)+"\n    ")],1)],1),a("v-content",[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Quick Actions")]),a("v-card-actions",[a("v-btn",{attrs:{fab:"",small:""},on:{click:function(e){t.dark=!t.dark}}},[a("v-icon",[t._v("brightness_4")])],1),a("v-spacer"),a("v-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{attrs:{slot:"activator",fab:"",small:"",color:"primary"},slot:"activator"},[a("v-icon",[t._v("directions_run")])],1),a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Queue for toilet")]),a("v-card-text",[a("v-btn",{attrs:{block:"",large:"",color:"primary",disabled:""}},[t._v("\n                      "+t._s(t.request.text)+"\n                    ")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")])],1)],1)],1)],1)],1)],1),a("v-flex",{attrs:{xs12:""}},[a("v-expansion-panel",[a("v-expansion-panel-content",[a("div",{staticClass:"headline",attrs:{slot:"header"},slot:"header"},[t._v("Recent")]),a("v-list",[t._l(t.recent,function(e,n){return[a("v-list-tile",{key:e.ts},[a("v-chip",[a("v-avatar",[a("v-icon",[t._v("schedule")])],1),t._v("\n                    "+t._s(t.showTime(e.start))+"\n                  ")],1),e.end?a("v-chip",[a("v-avatar",[a("v-icon",[t._v("timer")])],1),t._v("\n                    "+t._s(e.duration)+" min\n                  ")],1):t._e(),a("v-list-tile-content"),a("v-list-tile-action",[e.end?a("v-btn",{attrs:{icon:"",disabled:""}},[a("v-icon",[t._v("done")])],1):a("v-progress-circular",{attrs:{indeterminate:"",size:"24"}})],1)],1),n<t.recent.length-1?a("v-divider",{key:n}):t._e()]})],2)],1)],1)],1)],1)],1)],1)],1)},i=[],s=a("59ca"),c=a.n(s);a("e71f");const l="lpa-sg",u={projectId:l,storageBucket:`${l}.appspot.com`,authDomain:`${l}.firebaseapp.com`,apiKey:"AIzaSyCIGQm_zITYXFm6BFHQuxikndRmHoewQNo",databaseURL:`https://${l}.firebaseio.com`,messagingSenderId:"224727383490"},d=new Date;d.setHours(d.getHours()-6),d.setMinutes(0),d.setSeconds(0),c.a.initializeApp(u);const v=c.a.firestore();v.settings({timestampsInSnapshots:!0});const p=v.collection("door"),f=v.collection("status"),h=f.doc("maintenance"),b=p.where("ts",">",d).orderBy("ts");var m=function(){return{door:p,activity:b,maintenance:h}},g={data(){return{dark:!0,activity:[],dialog:!1,maintenance:null,request:{wait:!1,text:"Coming Soon"}}},firestore:m,computed:{recent(){const t=null;return this.activity.map(t=>({...t,ts:t.ts.seconds})).reduce((e,a)=>{return e[0].start?a.oc||(e[0].end=a.ts,e[0].duration=Math.round((a.ts-e[0].start)/6,1)/10,e.unshift({duration:t})):a.oc&&(e[0].start=a.ts),e},[{duration:t}]).filter(t=>t.start).slice(0,5)},status(){const t=this.recent[0],e=this.maintenance?this.maintenance.v:null,a=t?!t.end:null,n=e?"warning":a?"error":"success",r=e?"offline_bolt":t?(a?"remove":"check")+"_circle":"sync",o=e?"Maintenance":t?"Since "+this.showTime(t.end||t.start):"Getting status ...";return{used:a,text:o,icon:r,color:n}}},methods:{use(){const t=this.status.used;this.request.wait=!0,this.request.text=t?"Start":"End",this.$firestoreRefs.door.add({ts:new Date,oc:!t}).then(()=>{this.request.wait=!1,t&&(this.dialog=!1)})},showTime(t){const e=new Date(1e3*t),a=["Hours","Minutes"].map(t=>e["get"+t]());return a.map(t=>(t>9?"":"0")+t).join(":")}}},_=g,y=a("2877"),x=a("6544"),V=a.n(x),w=a("7496"),k=a("8212"),C=a("8336"),T=a("b0af"),S=a("99d9"),j=a("12b2"),O=a("cc20"),P=a("a523"),A=a("549c"),M=a("169a"),I=a("ce7e"),D=a("cd55"),L=a("49e2"),$=a("0e8f"),q=a("132d"),H=a("a722"),Q=a("8860"),z=a("ba95"),B=a("40fe"),E=a("5d23"),R=a("490a"),F=a("9910"),G=a("71d9"),J=a("2a7f"),K=Object(y["a"])(_,o,i,!1,null,null,null);K.options.__file="App.vue";var N=K.exports;V()(K,{VApp:w["a"],VAvatar:k["a"],VBtn:C["a"],VCard:T["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:j["a"],VChip:O["a"],VContainer:P["a"],VContent:A["a"],VDialog:M["a"],VDivider:I["a"],VExpansionPanel:D["a"],VExpansionPanelContent:L["a"],VFlex:$["a"],VIcon:q["a"],VLayout:H["a"],VList:Q["a"],VListTile:z["a"],VListTileAction:B["a"],VListTileContent:E["a"],VProgressCircular:R["a"],VSpacer:F["a"],VToolbar:G["a"],VToolbarTitle:J["a"]});var U=a("0ff2");n["a"].config.productionTip=!1,n["a"].use(U["a"]),new n["a"]({render:t=>t(N)}).$mount("#app")}});