webpackJsonp([10],{NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("fZjL"),a=t.n(o),i=t("4bK6"),c=t.n(i),r={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var u=t("VU/8")({name:"App"},r,!1,function(e){t("ymcE")},null,null).exports,s=t("/ocq"),l=t("NYxO");c.a.use(l.a);var m=new l.a.Store({state:{userInfo:{}},getters:{getUserInfo:function(e){return e.userInfo}},mutations:{setUserInfo:function(e,n){e.userInfo=n}},actions:{setUserInfo:function(e,n){(0,e.commit)("setUserInfo",n)}}});c.a.use(s.a);var f=function(e){t.e(3).then(function(){e(t("8hXn"))}.bind(null,t)).catch(t.oe)},p=new s.a({routes:[{path:"/",name:"home",component:f},{path:"/cnodevue",name:"cnodevue",component:f},{path:"/list",name:"list",component:function(e){Promise.all([t.e(0),t.e(1)]).then(function(){e(t("80bi"))}.bind(null,t)).catch(t.oe)}},{path:"/topic/:id",name:"topic",component:function(e){Promise.all([t.e(0),t.e(2)]).then(function(){e(t("cOqS"))}.bind(null,t)).catch(t.oe)}},{path:"/add",name:"add",component:function(e){Promise.all([t.e(0),t.e(6)]).then(function(){e(t("Y6A4"))}.bind(null,t)).catch(t.oe)},meta:{requiresAuth:!0}},{path:"/message",name:"message",component:function(e){Promise.all([t.e(0),t.e(8)]).then(function(){e(t("J4Wv"))}.bind(null,t)).catch(t.oe)},meta:{requiresAuth:!0}},{path:"/user/:loginname",name:"user",component:function(e){Promise.all([t.e(0),t.e(7)]).then(function(){e(t("nXOw"))}.bind(null,t)).catch(t.oe)}},{path:"/about",name:"about",component:function(e){Promise.all([t.e(0),t.e(5)]).then(function(){e(t("FBzZ"))}.bind(null,t)).catch(t.oe)}},{path:"/login",name:"login",component:function(e){Promise.all([t.e(0),t.e(4)]).then(function(){e(t("Quw4"))}.bind(null,t)).catch(t.oe)}},{path:"*",component:f}]});p.beforeEach(function(e,n,t){document.getElementById("overflow-control").style.overflow="auto",e.matched.some(function(e){return e.meta.requiresAuth})?m.state.userInfo.userId?t():t({path:"/login",query:{redirect:e.fullPath}}):t()});var h=p,d=t("mowP"),v=t.n(d),w=t("7t+N"),b=t.n(w),g={install:function(){var e=null;c.a.prototype.$alert=function(n){b()("#alertWeek").remove();var t=b()('<div class="week-alert" id="alertWeek"></div>');b()("body").append(t),t.html(n),t.addClass("alert-show"),clearTimeout(e),e=setTimeout(function(){t.remove()},2e3)}}};c.a.config.productionTip=!1,c.a.use(g),window.sessionStorage.user&&m.dispatch("setUserInfo",JSON.parse(window.sessionStorage.user)),a()(v.a).forEach(function(e){return c.a.filter(e,v.a[e])}),new c.a({el:"#app",router:h,store:m,components:{App:u},template:"<App/>"})},mowP:function(e,n){},ymcE:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.34039351149af2134005.js.map