function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a={exports:{}};!function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r=p;return function(o,a){if(r===v)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",h="suspendedYield",v="executing",d="completed",m={};function y(){}function g(){}function b(){}var $={};$[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(j([])));x&&x!==r&&o.call(x,i)&&($=x);var _=b.prototype=y.prototype=Object.create($);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(a,i,c,u){var s=l(e[a],e,i);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"===t(p)&&o.call(p,"__await")?n.resolve(p.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(p).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var a;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,k(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:n,done:!0}}return g.prototype=_.constructor=b,b.constructor=g,g.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[c]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new S(f(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(_),s(_,u,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}(a);var i,c=a.exports;function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?l(e):n}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(){}function m(t,e){for(var n in e)t[n]=e[n];return t}function y(t){return t()}function g(){return Object.create(null)}function b(t){t.forEach(y)}function $(t){return"function"==typeof t}function w(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function x(t,e,n,r){return t[1]&&r?m(n.ctx.slice(),t[1](r(e))):n.ctx}function _(e,n,r,o,a,i,c){var u=function(e,n,r,o){if(e[2]&&o){var a=e[2](o(r));if(void 0===n.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(n.dirty.length,a.length),u=0;u<c;u+=1)i[u]=n.dirty[u]|a[u];return i}return n.dirty|a}return n.dirty}(n,o,a,i);if(u){var s=x(n,r,o,c);e.p(s,u)}}function E(t,e){t.appendChild(e)}function S(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function L(t){return document.createElement(t)}function R(t){return document.createTextNode(t)}function O(){return R(" ")}function j(){return R("")}function P(t,e,n,r){return t.addEventListener(e,n,r),function(){return t.removeEventListener(e,n,r)}}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t){return Array.from(t.childNodes)}function T(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e){t.value=null==e?"":e}function I(t,e){for(var n=0;n<t.options.length;n+=1){var r=t.options[n];if(r.__value===e)return void(r.selected=!0)}}function U(t){var e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function B(t,e,n){t.classList[n?"add":"remove"](e)}function q(t){i=t}function M(){if(!i)throw new Error("Function called outside component initialization");return i}function G(t){M().$$.on_mount.push(t)}function F(t){M().$$.on_destroy.push(t)}var J=[],H=[],K=[],Y=[],D=Promise.resolve(),V=!1;function z(t){K.push(t)}function W(t){Y.push(t)}var X=!1,Q=new Set;function Z(){if(!X){X=!0;do{for(var t=0;t<J.length;t+=1){var e=J[t];q(e),tt(e.$$)}for(q(null),J.length=0;H.length;)H.pop()();for(var n=0;n<K.length;n+=1){var r=K[n];Q.has(r)||(Q.add(r),r())}K.length=0}while(J.length);for(;Y.length;)Y.pop()();V=!1,X=!1,Q.clear()}}function tt(t){if(null!==t.fragment){t.update(),b(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}var et,nt=new Set;function rt(){et={r:0,c:[],p:et}}function ot(){et.r||b(et.c),et=et.p}function at(t,e){t&&t.i&&(nt.delete(t),t.i(e))}function it(t,e,n,r){if(t&&t.o){if(nt.has(t))return;nt.add(t),et.c.push((function(){nt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function ct(t,e){t.d(1),e.delete(t.key)}function ut(t,e,n,r,o,a,i,c,u,s,f,l){for(var p=t.length,h=a.length,v=p,d={};v--;)d[t[v].key]=v;var m=[],y=new Map,g=new Map;for(v=h;v--;){var b=l(o,a,v),$=n(b),w=i.get($);w?r&&w.p(b,e):(w=s($,b)).c(),y.set($,m[v]=w),$ in d&&g.set($,Math.abs(v-d[$]))}var x=new Set,_=new Set;function E(t){at(t,1),t.m(c,f),i.set(t.key,t),f=t.first,h--}for(;p&&h;){var S=m[h-1],k=t[p-1],L=S.key,R=k.key;S===k?(f=S.first,p--,h--):y.has(R)?!i.has(L)||x.has(L)?E(S):_.has(R)?p--:g.get(L)>g.get(R)?(_.add(L),E(S)):(x.add(R),p--):(u(k,i),p--)}for(;p--;){var O=t[p];y.has(O.key)||u(O,i)}for(;h;)E(m[h-1]);return m}function st(t,e){for(var n={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(r[u]=1);for(var s in c)o[s]||(n[s]=c[s],o[s]=1);t[a]=c}else for(var f in i)o[f]=1}for(var l in r)l in n||(n[l]=void 0);return n}function ft(e){return"object"===t(e)&&null!==e?e:{}}function lt(t,e,n){var r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function pt(t){t&&t.c()}function ht(t,e,n,r){var a=t.$$,i=a.fragment,c=a.on_mount,u=a.on_destroy,s=a.after_update;i&&i.m(e,n),r||z((function(){var e=c.map(y).filter($);u?u.push.apply(u,o(e)):b(e),t.$$.on_mount=[]})),s.forEach(z)}function vt(t,e){var n=t.$$;null!==n.fragment&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e){-1===t.$$.dirty[0]&&(J.push(t),V||(V=!0,D.then(Z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function mt(t,e,n,r,o,a){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=i;q(t);var s=t.$$={fragment:null,ctx:null,props:a,update:d,not_equal:o,bound:g(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:e.context||[]),callbacks:g(),dirty:c,skip_bound:!1},f=!1;if(s.ctx=n?n(t,e.props||{},(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return s.ctx&&o(s.ctx[e],s.ctx[e]=r)&&(!s.skip_bound&&s.bound[e]&&s.bound[e](r),f&&dt(t,e)),n})):[],s.update(),f=!0,b(s.before_update),s.fragment=!!r&&r(s.ctx),e.target){if(e.hydrate){var l=A(e.target);s.fragment&&s.fragment.l(l),l.forEach(k)}else s.fragment&&s.fragment.c();e.intro&&at(t.$$.fragment),ht(t,e.target,e.anchor,e.customElement),Z()}q(u)}var yt=function(){function t(){h(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){vt(this,1),this.$destroy=d}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&v(e.prototype,n),r&&v(e,r),t}(),gt=[];function bt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,r=[];function o(n){if(w(t,n)&&(t=n,e)){for(var o=!gt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),gt.push(i,t)}if(o){for(var c=0;c<gt.length;c+=2)gt[c][0](gt[c+1]);gt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,c=[a,i];return r.push(c),1===r.length&&(e=n(o)||d),a(t),function(){var t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var $t={};function wt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function xt(t){var e,n,o,a,i,c,u,s,f,l,p,h,v;return{c:function(){e=L("nav"),n=L("div"),(o=L("a")).innerHTML='<img src="logo.jpg" alt="virus"/>',a=O(),(i=L("span")).innerHTML='<span aria-hidden="true"></span> \n      <span aria-hidden="true"></span> \n      <span aria-hidden="true"></span>',c=O(),u=L("div"),s=L("div"),(f=L("a")).textContent="Home",l=O(),(p=L("a")).textContent="About",N(o,"rel","prefetch"),N(o,"href","/"),N(o,"class","navbar-item"),N(i,"class","navbar-burger"),N(i,"aria-label","menu"),N(i,"aria-expanded","false"),B(i,"is-active",t[1]),N(n,"class","navbar-brand"),N(f,"rel","prefetch"),N(f,"href","/"),N(f,"class","navbar-item"),B(f,"is-active",void 0===t[0]),N(p,"rel","prefetch"),N(p,"href","/about"),N(p,"class","navbar-item"),B(p,"is-active","about"===t[0]),N(s,"class","navbar-start"),N(u,"class","navbar-menu"),B(u,"is-active",t[1]),N(e,"class","navbar svelte-1uu19y6"),N(e,"role","navigation"),N(e,"aria-label","main navigation")},m:function(r,d){S(r,e,d),E(e,n),E(n,o),E(n,a),E(n,i),E(e,c),E(e,u),E(u,s),E(s,f),E(s,l),E(s,p),h||(v=P(i,"click",t[2]),h=!0)},p:function(t,e){var n=r(e,1)[0];2&n&&B(i,"is-active",t[1]),1&n&&B(f,"is-active",void 0===t[0]),1&n&&B(p,"is-active","about"===t[0]),2&n&&B(u,"is-active",t[1])},i:d,o:d,d:function(t){t&&k(e),h=!1,v()}}}function _t(t,e,n){var r=!1,o=e.segment;return t.$$set=function(t){"segment"in t&&n(0,o=t.segment)},[o,r,function(){n(1,r=!r)}]}var Et=function(t){f(n,yt);var e=wt(n);function n(t){var r;return h(this,n),mt(l(r=e.call(this)),t,_t,xt,w,{segment:0}),r}return n}();function St(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function kt(t){var e,n,o;e=new Et({props:{segment:t[0]}});var a=t[2].default,i=function(t,e,n,r){if(t){var o=x(t,e,n,r);return t[0](o)}}(a,t,t[1],null);return{c:function(){pt(e.$$.fragment),n=O(),i&&i.c()},m:function(t,r){ht(e,t,r),S(t,n,r),i&&i.m(t,r),o=!0},p:function(t,n){var c=r(n,1)[0],u={};1&c&&(u.segment=t[0]),e.$set(u),i&&i.p&&(!o||2&c)&&_(i,a,t,t[1],c,null,null)},i:function(t){o||(at(e.$$.fragment,t),at(i,t),o=!0)},o:function(t){it(e.$$.fragment,t),it(i,t),o=!1},d:function(t){vt(e,t),t&&k(n),i&&i.d(t)}}}function Lt(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,a=e.$$scope,i=e.segment;return t.$$set=function(t){"segment"in t&&n(0,i=t.segment),"$$scope"in t&&n(1,a=t.$$scope)},[i,a,o]}var Rt=function(t){f(n,yt);var e=St(n);function n(t){var r;return h(this,n),mt(l(r=e.call(this)),t,Lt,kt,w,{segment:0}),r}return n}();function Ot(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function jt(t){var e,n,r,o,a,i,c=t[1].message+"";return{c:function(){e=L("div"),n=L("article"),(r=L("div")).innerHTML="<p>Error</p>",o=O(),a=L("div"),i=R(c),N(r,"class","message-header"),N(a,"class","message-body"),N(n,"class","message is-danger"),N(e,"class","container svelte-1m9a4uf")},m:function(t,c){S(t,e,c),E(e,n),E(n,r),E(n,o),E(n,a),E(a,i)},p:function(t,e){2&e&&c!==(c=t[1].message+"")&&T(i,c)},d:function(t){t&&k(e)}}}function Pt(t){var e;return{c:function(){(e=L("div")).innerHTML='<article class="message is-warning"><div class="message-header"><p>Page Not Found</p></div> \n      <div class="message-body"><a href="/">Click here</a>\n        to go back home.</div></article>',N(e,"class","container svelte-1m9a4uf")},m:function(t,n){S(t,e,n)},d:function(t){t&&k(e)}}}function Nt(t){var e,n,o,a;document.title=e="Error - "+t[0];var i=404!==t[0]&&jt(t),c=404===t[0]&&Pt();return{c:function(){n=O(),i&&i.c(),o=O(),c&&c.c(),a=j()},m:function(t,e){S(t,n,e),i&&i.m(t,e),S(t,o,e),c&&c.m(t,e),S(t,a,e)},p:function(t,n){var u=r(n,1)[0];1&u&&e!==(e="Error - "+t[0])&&(document.title=e),404!==t[0]?i?i.p(t,u):((i=jt(t)).c(),i.m(o.parentNode,o)):i&&(i.d(1),i=null),404===t[0]?c||((c=Pt()).c(),c.m(a.parentNode,a)):c&&(c.d(1),c=null)},i:d,o:d,d:function(t){t&&k(n),i&&i.d(t),t&&k(o),c&&c.d(t),t&&k(a)}}}function At(t,e,n){var r=e.status,o=e.error;return t.$$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o]}var Tt=function(t){f(n,yt);var e=Ot(n);function n(t){var r;return h(this,n),mt(l(r=e.call(this)),t,At,Nt,w,{status:0,error:1}),r}return n}();function Ct(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function It(t){var e,n,r,o=[t[4].props],a=t[4].component;function i(t){for(var e={},n=0;n<o.length;n+=1)e=m(e,o[n]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&pt(e.$$.fragment),n=j()},m:function(t,o){e&&ht(e,t,o),S(t,n,o),r=!0},p:function(t,r){var c=16&r?st(o,[ft(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){rt();var u=e;it(u.$$.fragment,1,0,(function(){vt(u,1)})),ot()}a?(pt((e=new a(i())).$$.fragment),at(e.$$.fragment,1),ht(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i:function(t){r||(e&&at(e.$$.fragment,t),r=!0)},o:function(t){e&&it(e.$$.fragment,t),r=!1},d:function(t){t&&k(n),e&&vt(e,t)}}}function Ut(t){var e,n;return e=new Tt({props:{error:t[0],status:t[1]}}),{c:function(){pt(e.$$.fragment)},m:function(t,r){ht(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(at(e.$$.fragment,t),n=!0)},o:function(t){it(e.$$.fragment,t),n=!1},d:function(t){vt(e,t)}}}function Bt(t){var e,n,r,o,a=[Ut,It],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=a[e](t),{c:function(){n.c(),r=j()},m:function(t,n){i[e].m(t,n),S(t,r,n),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(rt(),it(i[u],1,1,(function(){i[u]=null})),ot(),(n=i[e])?n.p(t,o):(n=i[e]=a[e](t)).c(),at(n,1),n.m(r.parentNode,r))},i:function(t){o||(at(n),o=!0)},o:function(t){it(n),o=!1},d:function(t){i[e].d(t),t&&k(r)}}}function qt(t){for(var e,n,o=[{segment:t[2][0]},t[3].props],a={$$slots:{default:[Bt]},$$scope:{ctx:t}},i=0;i<o.length;i+=1)a=m(a,o[i]);return e=new Rt({props:a}),{c:function(){pt(e.$$.fragment)},m:function(t,r){ht(e,t,r),n=!0},p:function(t,n){var a=r(n,1)[0],i=12&a?st(o,[4&a&&{segment:t[2][0]},8&a&&ft(t[3].props)]):{};147&a&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i:function(t){n||(at(e.$$.fragment,t),n=!0)},o:function(t){it(e.$$.fragment,t),n=!1},d:function(t){vt(e,t)}}}function Mt(t,e,n){var r,o,a,i=e.stores,c=e.error,u=e.status,s=e.segments,f=e.level0,l=e.level1,p=void 0===l?null:l,h=e.notify;return r=h,M().$$.after_update.push(r),o=$t,a=i,M().$$.context.set(o,a),t.$$set=function(t){"stores"in t&&n(5,i=t.stores),"error"in t&&n(0,c=t.error),"status"in t&&n(1,u=t.status),"segments"in t&&n(2,s=t.segments),"level0"in t&&n(3,f=t.level0),"level1"in t&&n(4,p=t.level1),"notify"in t&&n(6,h=t.notify)},[c,u,s,f,p,i,h]}var Gt,Ft=function(t){f(n,yt);var e=Ct(n);function n(t){var r;return h(this,n),mt(l(r=e.call(this)),t,Mt,qt,w,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),Jt=[],Ht=[{js:function(){return Promise.all([import("./index.146d4e4b.js"),__inject_styles(["client-ec2f6238.css","CovidChart-06494acf.css","index-316a7a0d.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./about.2648ae80.js"),__inject_styles(["client-ec2f6238.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./[state].51903ea6.js"),__inject_styles(["client-ec2f6238.css","CovidChart-06494acf.css"])]).then((function(t){return t[0]}))}}],Kt=(Gt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/([^/]+?)\/?$/,parts:[{i:2,params:function(t){return{state:Gt(t[1])}}}]}]);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Yt(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{u(r.next(t))}catch(t){a(t)}}function c(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}u((r=r.apply(t,e||[])).next())}))}function Dt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var Vt,zt=1;var Wt,Xt,Qt="undefined"!=typeof history?history:{pushState:function(){},replaceState:function(){},scrollRestoration:"auto"},Zt={};function te(e){var n=Object.create(null);return e.length?function(t){return"undefined"!=typeof URLSearchParams?o(new URLSearchParams(t).entries()):t.slice(1).split("&").map((function(t){var e=r(/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," "))),3),n=e[1],o=e[2];return[n,void 0===o?"":o]}))}(e).reduce((function(e,n){var o=r(n,2),a=o[0],i=o[1];return"string"==typeof e[a]&&(e[a]=[e[a]]),"object"===t(e[a])?e[a].push(i):e[a]=i,e}),n):n}function ee(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Wt))return null;var e=t.pathname.slice(Wt.length);if(""===e&&(e="/"),!Jt.some((function(t){return t.test(e)})))for(var n=0;n<Kt.length;n+=1){var r=Kt[n],o=r.pattern.exec(e);if(o){var a=te(t.search),i=r.parts[r.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:r,match:o,page:u}}}}function ne(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var n=Dt(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=ee(a);if(i)ae(i,null,n.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),Qt.pushState({id:Vt},"",a.href)}}}else location.hash||e.preventDefault()}}}function re(){return{x:pageXOffset,y:pageYOffset}}function oe(t){if(Zt[Vt]=re(),t.state){var e=ee(new URL(location.href));e?ae(e,t.state.id):location.href=location.href}else(function(t){Vt=t})(zt=zt+1),Qt.replaceState({id:Vt},"",location.href)}function ae(t,e,n,r){return Yt(this,void 0,void 0,c.mark((function o(){var a,i,u,s;return c.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(a=!!e)?Vt=e:(i=re(),Zt[Vt]=i,Vt=e=++zt,Zt[Vt]=n?i:{x:0,y:0}),o.next=4,Xt(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),n||(u=Zt[e],r&&(s=document.getElementById(r.slice(1)))&&(u={x:0,y:s.getBoundingClientRect().top+scrollY}),Zt[Vt]=u,u&&(a||s)?scrollTo(u.x,u.y):scrollTo(0,0));case 6:case"end":return o.stop()}}),o)})))}function ie(t){var e=t.baseURI;if(!e){var n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}var ce,ue=null;function se(t){return ue&&ue.href===t.href?ue.promise:Pe(t)}function fe(t){var e=Dt(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){var e=ee(new URL(t,ie(document)));if(e)ue&&t===ue.href||(ue={href:t,promise:Pe(e)}),ue.promise}(e.href)}function le(t){clearTimeout(ce),ce=setTimeout((function(){fe(t)}),20)}function pe(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},n=ee(new URL(t,ie(document)));if(n){var r=ae(n,null,e.noscroll);return Qt[e.replaceState?"replaceState":"pushState"]({id:Vt},"",t),r}return location.href=t,new Promise((function(){}))}var he,ve,de,me,ye,ge,be,$e,we,xe="undefined"!=typeof __SAPPER__&&__SAPPER__,_e=!1,Ee=[],Se="{}",ke={page:function(t){var e=bt(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:bt(null),session:bt(xe&&xe.session)};function Le(t,e){var n=t.error;return Object.assign({error:n},e)}function Re(t){return Yt(this,void 0,void 0,c.mark((function e(){var n,r,o,a,i,u;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return he&&ke.preloading.set(!0),n=se(t),r=ve={},e.next=5,n;case 5:if(o=e.sent,a=o.redirect,r===ve){e.next=9;break}return e.abrupt("return");case 9:if(!a){e.next=14;break}return e.next=12,pe(a.location,{replaceState:!0});case 12:e.next=17;break;case 14:return i=o.props,u=o.branch,e.next=17,Oe(u,i,Le(i,t.page));case 17:case"end":return e.stop()}}),e)})))}function Oe(t,e,n){return Yt(this,void 0,void 0,c.mark((function r(){return c.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(ke.page.set(n),ke.preloading.set(!1),!he){r.next=6;break}he.$set(e),r.next=13;break;case 6:return e.stores={page:{subscribe:ke.page.subscribe},preloading:{subscribe:ke.preloading.subscribe},session:ke.session},r.next=9,de;case 9:r.t0=r.sent,e.level0={props:r.t0},e.notify=ke.page.notify,he=new Ft({target:ge,props:e,hydrate:!0});case 13:Ee=t,Se=JSON.stringify(n.query),_e=!0,ye=!1;case 17:case"end":return r.stop()}}),r)})))}function je(t,e,n,r){if(r!==Se)return!0;var o=Ee[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function Pe(t){return Yt(this,void 0,void 0,c.mark((function e(){var n,r,o,a,i,u,s,f,l,p,h,v,d=this;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,o=r.path.split("/").filter(Boolean),a=null,i={error:null,status:200,segments:[o[0]]},u={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){i.error="string"==typeof e?new Error(e):e,i.status=t}},de||(s=function(){return{}},de=xe.preloaded[0]||s.call(u,{host:r.host,path:r.path,query:r.query,params:{}},me)),l=1,e.prev=7,p=JSON.stringify(r.query),h=n.pattern.exec(r.path),v=!1,e.next=13,Promise.all(n.parts.map((function(e,n){return Yt(d,void 0,void 0,c.mark((function a(){var s,f,d,m,y,g,b;return c.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s=o[n],je(n,s,h,p)&&(v=!0),i.segments[l]=o[n+1],e){a.next=5;break}return a.abrupt("return",{segment:s});case 5:if(f=l++,ye||v||!Ee[n]||Ee[n].part!==e.i){a.next=10;break}d=Ee[n],a.next=29;break;case 10:return v=!1,a.next=13,Ht[e.i].js();case 13:if(m=a.sent,y=m.default,g=m.preload,!_e&&xe.preloaded[n+1]){a.next=27;break}if(!g){a.next=23;break}return a.next=20,g.call(u,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(t.match):{}},me);case 20:a.t0=a.sent,a.next=24;break;case 23:a.t0={};case 24:b=a.t0,a.next=28;break;case 27:b=xe.preloaded[n+1];case 28:d={component:y,props:b,segment:s,match:h,part:e.i};case 29:return a.abrupt("return",i["level".concat(f)]=d);case 30:case"end":return a.stop()}}),a)})))})));case 13:f=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),i.error=e.t0,i.status=500,f=[];case 21:return e.abrupt("return",{redirect:a,props:i,branch:f});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}ke.session.subscribe((function(t){return Yt(void 0,void 0,void 0,c.mark((function e(){var n,r,o,a,i,u;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(me=t,_e){e.next=3;break}return e.abrupt("return");case 3:return ye=!0,n=ee(new URL(location.href)),r=ve={},e.next=8,Pe(n);case 8:if(o=e.sent,a=o.redirect,i=o.props,u=o.branch,r===ve){e.next=14;break}return e.abrupt("return");case 14:if(!a){e.next=19;break}return e.next=17,pe(a.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,Oe(u,i,Le(i,n.page));case 21:case"end":return e.stop()}}),e)})))})),be={target:document.querySelector("#sapper")},$e=be.target,ge=$e,we=xe.baseUrl,Wt=we,Xt=Re,"scrollRestoration"in Qt&&(Qt.scrollRestoration="manual"),addEventListener("beforeunload",(function(){Qt.scrollRestoration="auto"})),addEventListener("load",(function(){Qt.scrollRestoration="manual"})),addEventListener("click",ne),addEventListener("popstate",oe),addEventListener("touchstart",fe),addEventListener("mousemove",le),xe.error?Promise.resolve().then((function(){return function(){var t=location,e=t.host,n=t.pathname,r=t.search,o=xe.session,a=xe.preloaded,i=xe.status,c=xe.error;de||(de=a&&a[0]);var u={error:c,status:i,session:o,level0:{props:de},level1:{props:{status:i,error:c},component:Tt},segments:a},s=te(r);Oe([],u,{host:e,path:n,query:s,params:{},error:c})}()})):Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;Qt.replaceState({id:zt},"",n);var r=ee(new URL(location.href));if(r)return ae(r,zt,!0,e)}));export{pt as A,ht as B,W as C,at as D,it as E,vt as F,c as G,m as H,st as I,ft as J,t as K,j as L,G as M,F as N,yt as S,f as _,u as a,p as b,h as c,l as d,L as e,O as f,N as g,z as h,mt as i,S as j,E as k,C as l,I as m,P as n,r as o,d as p,k as q,b as r,w as s,U as t,R as u,T as v,ut as w,ct as x,H as y,lt as z};

import __inject_styles from './inject_styles.fe622066.js';