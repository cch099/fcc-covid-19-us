import{S as t,i as a,s,G as e,a as i,e as r,t as o,z as n,H as c,d as h,f as l,c as d,b as f,g as $,A as m,h as u,k as v,l as p,B as g,u as C,I as b,J as w,D,E,F as S}from"./client.377fc3a7.js";import{s as x,r as y,C as I,a as j}from"./Table.8043e775.js";function k(t){let a,s,x,y,k,F,H,T,V,z,A,B;document.title=a="Covid 19 - "+t[0];const G=[t[1]];let J={};for(let t=0;t<G.length;t+=1)J=e(J,G[t]);return V=new I({props:J}),A=new j({props:{historicData:t[2],title:"Covid 19 - "+t[0]}}),{c(){s=i(),x=r("div"),y=r("div"),k=r("h1"),F=o("Covid 19 - "),H=o(t[0]),T=i(),n(V.$$.fragment),z=i(),n(A.$$.fragment),this.h()},l(a){c('[data-svelte="svelte-ululck"]',document.head).forEach(h),s=l(a),x=d(a,"DIV",{class:!0});var e=f(x);y=d(e,"DIV",{class:!0});var i=f(y);k=d(i,"H1",{});var r=f(k);F=$(r,"Covid 19 - "),H=$(r,t[0]),r.forEach(h),i.forEach(h),e.forEach(h),T=l(a),m(V.$$.fragment,a),z=l(a),m(A.$$.fragment,a),this.h()},h(){u(y,"class","container"),u(x,"class","section header")},m(t,a){v(t,s,a),v(t,x,a),p(x,y),p(y,k),p(k,F),p(k,H),v(t,T,a),g(V,t,a),v(t,z,a),g(A,t,a),B=!0},p(t,[s]){(!B||1&s)&&a!==(a="Covid 19 - "+t[0])&&(document.title=a),(!B||1&s)&&C(H,t[0]);const e=2&s?b(G,[w(t[1])]):{};V.$set(e);const i={};4&s&&(i.historicData=t[2]),1&s&&(i.title="Covid 19 - "+t[0]),A.$set(i)},i(t){B||(D(V.$$.fragment,t),D(A.$$.fragment,t),B=!0)},o(t){E(V.$$.fragment,t),E(A.$$.fragment,t),B=!1},d(t){t&&h(s),t&&h(x),t&&h(T),S(V,t),t&&h(z),S(A,t)}}}async function F(t){const a=t.params.state;if(void 0===x.find((t=>t.abbreviation===a)))return void this.error(404,"State Not Found");const s=x.find((t=>t.abbreviation===a)).name;try{const t=await y.stateStats(a);return{state:s,stats:t,historic:await y.historicState(a)}}catch(t){return void this.error(500,"There was an error in calling the api, please try again in 5 minutes.")}}function H(t,a,s){let{state:e}=a,{stats:i}=a,{historic:r}=a;return t.$$set=t=>{"state"in t&&s(0,e=t.state),"stats"in t&&s(1,i=t.stats),"historic"in t&&s(2,r=t.historic)},[e,i,r]}export default class extends t{constructor(t){super(),a(this,t,H,k,s,{state:0,stats:1,historic:2})}}export{F as preload};
