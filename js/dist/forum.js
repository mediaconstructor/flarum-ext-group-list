(()=>{var t={n:o=>{var n=o&&o.__esModule?()=>o.default:()=>o;return t.d(n,{a:n}),n},d:(o,n)=>{for(var r in n)t.o(n,r)&&!t.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:n[r]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o);const n=flarum.core.compat["common/extend"],r=flarum.core.compat["forum/components/IndexPage"];var e=t.n(r);const a=flarum.core.compat["common/components/LinkButton"];var s=t.n(a);function u(t,o){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},u(t,o)}function i(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,u(t,o)}const p=flarum.core.compat["common/components/Page"];var c=t.n(p);const l=flarum.core.compat["common/components/LoadingIndicator"];var f=t.n(l);const d=flarum.core.compat["common/components/GroupBadge"];var g=t.n(d);const v=flarum.core.compat["common/helpers/listItems"];var h=t.n(v);const y=flarum.core.compat["common/components/Link"];var b=t.n(y);const k=flarum.core.compat["common/helpers/avatar"];var w=t.n(k);const L=flarum.core.compat["common/helpers/username"];var O=t.n(L);const P=flarum.core.compat["common/helpers/userOnline"];var G=t.n(P),I=function(){function t(){}var o=t.prototype;return o.view=function(t){var o=this;return m("ul.GroupList-UserList",t.attrs.users.map((function(n){return m("li.GroupList-UserList-item",m(b(),{href:app.route.user(n)},[m(".GroupList-UserList-avatar",[w()(n),o.badges(n,t.attrs.hideBadgeId)]),m(".GroupList-UserList-user",[app.forum.attribute("clarkwinkelmann-group-list.showOnlineStatus")?G()(n):null,O()(n)])]))})))},o.badges=function(t,o){if(!app.forum.attribute("clarkwinkelmann-group-list.showAvatarBadges"))return null;var n=t.badges();return n.has(o)&&n.remove(o),m("ul.badges",h()(n.toArray()))},t}(),_=function(t){function o(){return t.apply(this,arguments)||this}i(o,t);var n=o.prototype;return n.oninit=function(o){var n=this;t.prototype.oninit.call(this,o),this.items=null,app.request({method:"GET",url:app.forum.attribute("apiUrl")+"/clarkwinkelmann-group-list"}).then((function(t){n.items=app.store.pushPayload(t),m.redraw()})),this.bodyClass="GroupList-page"},n.view=function(){return m(".IndexPage",[e().prototype.hero(),m(".container",m(".sideNavContainer",[m("nav.IndexPage-nav.sideNav",m("ul",h()(e().prototype.sidebarItems().toArray()))),m(".IndexPage-results.sideNavOffset.GroupList-content",this.content())]))])},n.content=function(){return null===this.items?f().component():this.items.map((function(t){return m("div",[m("h3.GroupList-title",[g().component({group:t.group()})," ",t.group().namePlural()]),t.contentHtml()?m(".GroupList-description",m.trust(t.contentHtml())):null,m(I,{users:t.members(),hideBadgeId:"group"+t.group().id()})])}))},o}(c());const j=flarum.core.compat["common/Model"];var x=t.n(j),S=function(t){function o(){for(var o,n=arguments.length,r=new Array(n),e=0;e<n;e++)r[e]=arguments[e];return(o=t.call.apply(t,[this].concat(r))||this).content=x().attribute("content"),o.contentHtml=x().attribute("contentHtml"),o.group=x().hasOne("group"),o.members=x().hasMany("members"),o}return i(o,t),o}(x());app.initializers.add("clarkwinkelmann-group-list",(function(){app.routes["clarkwinkelmann-group-list"]={path:"/groups",component:_},app.store.models["clarkwinkelmann-group-list-items"]=S,(0,n.extend)(e().prototype,"navItems",(function(t){app.forum.attribute("clarkwinkelmann-group-list.showSideNavLink")&&t.add("clarkwinkelmann-group-list-item",s().component({href:app.route("clarkwinkelmann-group-list"),icon:"fas fa-users"},app.translator.trans("clarkwinkelmann-group-list.forum.nav")),85)}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map