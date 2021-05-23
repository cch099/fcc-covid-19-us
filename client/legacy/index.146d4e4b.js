import{_ as t,a as n,b as e,c as r,i as a,s,d as o,S as c,e as i,f as u,g as f,h as l,j as v,k as h,l as p,m as d,n as m,o as $,p as y,q as g,r as R,t as _,u as x,v as B,w as S,x as C,y as w,z as D,A as N,B as j,C as b,D as k,E as T,F as O,G as L,H as P,I as U,J as H}from"./client.ac2327ac.js";import{_ as M,r as F,C as q,a as z}from"./CovidChart.b937389b.js";function A(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=n(t);if(r){var o=n(this).constructor;a=Reflect.construct(s,arguments,o)}else a=s.apply(this,arguments);return e(this,a)}}function E(t){var n,e,r,a,s,o,c,_,x,B,S,C,w,D,N;return{c:function(){n=i("div"),e=i("div"),r=i("div"),a=i("div"),s=i("input"),o=u(),c=i("div"),_=i("div"),x=i("select"),(B=i("option")).textContent="By State Name",(S=i("option")).textContent="Cases",(C=i("option")).textContent="Death",(w=i("option")).textContent="Tested",f(s,"type","text"),f(s,"class","input svelte-10mkjoi"),f(s,"placeholder","Filter States"),f(a,"class","column is-6 svelte-10mkjoi"),B.__value="name",B.value=B.__value,S.__value="cases",S.value=S.__value,C.__value="deaths",C.value=C.__value,w.__value="tested",w.value=w.__value,f(x,"class","svelte-10mkjoi"),void 0===t[1]&&l((function(){return t[3].call(x)})),f(_,"class","select svelte-10mkjoi"),f(c,"class","column is-6 svelte-10mkjoi"),f(r,"class","columns"),f(e,"class","container"),f(n,"class","section")},m:function(i,u){v(i,n,u),h(n,e),h(e,r),h(r,a),h(a,s),p(s,t[0]),h(r,o),h(r,c),h(c,_),h(_,x),h(x,B),h(x,S),h(x,C),h(x,w),d(x,t[1]),D||(N=[m(s,"input",t[2]),m(x,"change",t[3])],D=!0)},p:function(t,n){var e=$(n,1)[0];1&e&&s.value!==t[0]&&p(s,t[0]),2&e&&d(x,t[1])},i:y,o:y,d:function(t){t&&g(n),D=!1,R(N)}}}function G(t,n,e){var r=n.stateName,a=void 0===r?"":r,s=n.sortBy,o=void 0===s?"name":s;return t.$$set=function(t){"stateName"in t&&e(0,a=t.stateName),"sortBy"in t&&e(1,o=t.sortBy)},[a,o,function(){a=this.value,e(0,a)},function(){o=_(this),e(1,o)}]}var I=function(n){t(i,c);var e=A(i);function i(t){var n;return r(this,i),n=e.call(this),a(o(n),t,G,E,s,{stateName:0,sortBy:1}),n}return i}();function J(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=n(t);if(r){var o=n(this).constructor;a=Reflect.construct(s,arguments,o)}else a=s.apply(this,arguments);return e(this,a)}}function K(t,n,e){var r=t.slice();return r[1]=n[e],r}function Q(t,n){var e,r,a,s,o,c,l,p,d,m,$,y,R,_,S,C=n[1].fullStateName+"",w=n[1].cases+"",D=n[1].deaths+"",N=n[1].tested+"";return{key:t,first:null,c:function(){e=i("tr"),r=i("td"),a=i("a"),s=x(C),c=u(),l=i("td"),p=x(w),d=u(),m=i("td"),$=x(D),y=u(),R=i("td"),_=x(N),S=u(),f(a,"rel","prefetch"),f(a,"href",o=n[1].state),this.first=e},m:function(t,n){v(t,e,n),h(e,r),h(r,a),h(a,s),h(e,c),h(e,l),h(l,p),h(e,d),h(e,m),h(m,$),h(e,y),h(e,R),h(R,_),h(e,S)},p:function(t,e){n=t,1&e&&C!==(C=n[1].fullStateName+"")&&B(s,C),1&e&&o!==(o=n[1].state)&&f(a,"href",o),1&e&&w!==(w=n[1].cases+"")&&B(p,w),1&e&&D!==(D=n[1].deaths+"")&&B($,D),1&e&&N!==(N=n[1].tested+"")&&B(_,N)},d:function(t){t&&g(e)}}}function V(t){for(var n,e,r,a,s,o,c=[],l=new Map,p=t[0],d=function(t){return t[1].state},m=0;m<p.length;m+=1){var R=K(t,p,m),_=d(R);l.set(_,c[m]=Q(_,R))}return{c:function(){n=i("div"),e=i("div"),r=i("table"),(a=i("thead")).innerHTML="<tr><th>State</th> \n          <th>Cases</th> \n          <th>Deaths</th> \n          <th>Total Tested</th></tr>",s=u(),o=i("tbody");for(var t=0;t<c.length;t+=1)c[t].c();f(r,"class","table is-bordered is-striped svelte-18jy5hy"),f(e,"class","container"),f(n,"class","section svelte-18jy5hy")},m:function(t,i){v(t,n,i),h(n,e),h(e,r),h(r,a),h(r,s),h(r,o);for(var u=0;u<c.length;u+=1)c[u].m(o,null)},p:function(t,n){var e=$(n,1)[0];1&e&&(p=t[0],c=S(c,e,d,1,t,p,l,o,C,Q,null,K))},i:y,o:y,d:function(t){t&&g(n);for(var e=0;e<c.length;e+=1)c[e].d()}}}function W(t,n,e){var r=n.states;return t.$$set=function(t){"states"in t&&e(0,r=t.states)},[r]}var X=function(n){t(i,c);var e=J(i);function i(t){var n;return r(this,i),n=e.call(this),a(o(n),t,W,V,s,{states:0}),n}return i}();function Y(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=n(t);if(r){var o=n(this).constructor;a=Reflect.construct(s,arguments,o)}else a=s.apply(this,arguments);return e(this,a)}}function Z(t){var n,e,r,a,s,o;function c(n){t[4](n)}function i(n){t[5](n)}var f={};return void 0!==t[1]&&(f.stateName=t[1]),void 0!==t[0]&&(f.sortBy=t[0]),n=new I({props:f}),w.push((function(){return D(n,"stateName",c)})),w.push((function(){return D(n,"sortBy",i)})),s=new X({props:{states:t[2]}}),{c:function(){N(n.$$.fragment),a=u(),N(s.$$.fragment)},m:function(t,e){j(n,t,e),v(t,a,e),j(s,t,e),o=!0},p:function(t,a){var o=$(a,1)[0],c={};!e&&2&o&&(e=!0,c.stateName=t[1],b((function(){return e=!1}))),!r&&1&o&&(r=!0,c.sortBy=t[0],b((function(){return r=!1}))),n.$set(c);var i={};4&o&&(i.states=t[2]),s.$set(i)},i:function(t){o||(k(n.$$.fragment,t),k(s.$$.fragment,t),o=!0)},o:function(t){T(n.$$.fragment,t),T(s.$$.fragment,t),o=!1},d:function(t){O(n,t),t&&g(a),O(s,t)}}}function tt(t,n,e){var r,a=n.data,s="name",o="";return t.$$set=function(t){"data"in t&&e(3,a=t.data)},t.$$.update=function(){11&t.$$.dirty&&e(2,r=function(t,n,e){var r=t.filter((function(t){return""===n||t.fullStateName.toLowerCase().indexOf(n.toLowerCase())>-1}));return"name"!==e?r.sort((function(t,n){return+n[e].replace(",","")-+t[e].replace(",","")})):r}(a,o,s))},[s,o,r,a,function(t){e(1,o=t)},function(t){e(0,s=t)}]}var nt=function(n){t(i,c);var e=Y(i);function i(t){var n;return r(this,i),n=e.call(this),a(o(n),t,tt,Z,s,{data:3}),n}return i}();function et(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=n(t);if(r){var o=n(this).constructor;a=Reflect.construct(s,arguments,o)}else a=s.apply(this,arguments);return e(this,a)}}function rt(t){for(var n,e,r,a,s,o,c,l,h,p=[t[0]],d={},m=0;m<p.length;m+=1)d=P(d,p[m]);return a=new q({props:d}),o=new z({props:{historicData:t[1],title:"US Covid-19"}}),l=new nt({props:{data:t[2]}}),{c:function(){n=u(),(e=i("div")).innerHTML='<div class="container"><h1>Covid 19 - US</h1></div>',r=u(),N(a.$$.fragment),s=u(),N(o.$$.fragment),c=u(),N(l.$$.fragment),document.title="Covid 19 US Tracker",f(e,"class","section header")},m:function(t,i){v(t,n,i),v(t,e,i),v(t,r,i),j(a,t,i),v(t,s,i),j(o,t,i),v(t,c,i),j(l,t,i),h=!0},p:function(t,n){var e=$(n,1)[0],r=1&e?U(p,[H(t[0])]):{};a.$set(r);var s={};2&e&&(s.historicData=t[1]),o.$set(s);var c={};4&e&&(c.data=t[2]),l.$set(c)},i:function(t){h||(k(a.$$.fragment,t),k(o.$$.fragment,t),k(l.$$.fragment,t),h=!0)},o:function(t){T(a.$$.fragment,t),T(o.$$.fragment,t),T(l.$$.fragment,t),h=!1},d:function(t){t&&g(n),t&&g(e),t&&g(r),O(a,t),t&&g(s),O(o,t),t&&g(c),O(l,t)}}}function at(){return st.apply(this,arguments)}function st(){return(st=M(L.mark((function t(){var n,e,r;return L.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F.usStats();case 3:return n=t.sent,t.next=6,F.historicUS();case 6:return e=t.sent,t.next=9,F.statesData();case 9:return r=t.sent,t.abrupt("return",{usStats:n,historic:e,statesData:r});case 13:return t.prev=13,t.t0=t.catch(0),this.error(500,"There was an error in calling the api, please try again in 5 minutes."),t.abrupt("return");case 17:case"end":return t.stop()}}),t,this,[[0,13]])})))).apply(this,arguments)}function ot(t,n,e){var r=n.usStats,a=n.historic,s=n.statesData;return t.$$set=function(t){"usStats"in t&&e(0,r=t.usStats),"historic"in t&&e(1,a=t.historic),"statesData"in t&&e(2,s=t.statesData)},[r,a,s]}var ct=function(n){t(i,c);var e=et(i);function i(t){var n;return r(this,i),n=e.call(this),a(o(n),t,ot,rt,s,{usStats:0,historic:1,statesData:2}),n}return i}();export default ct;export{at as preload};
