(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9222:function(e,t,r){"use strict";var n=r(2132);Object.defineProperty(t,"__esModule",{value:!0}),t.BroadcastChannel=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nextauth.message";return{receive:function(t){var r=function(r){if(r.key===e){var n,o=JSON.parse(null!==(n=r.newValue)&&void 0!==n?n:"{}");(null==o?void 0:o.event)==="session"&&null!=o&&o.data&&t(o)}};return window.addEventListener("storage",r),function(){return window.removeEventListener("storage",r)}},post:function(t){if("undefined"!=typeof window)try{localStorage.setItem(e,JSON.stringify(c(c({},t),{},{timestamp:f()})))}catch(r){}}}},t.apiBaseUrl=l,t.fetchData=function(e,t,r){return s.apply(this,arguments)},t.now=f;var o=n(r(3363)),a=n(r(2125)),u=n(r(328));function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){(0,a.default)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function s(){return(s=(0,u.default)(o.default.mark(function e(t,r,n){var a,u,i,c,s,f,d,p,h=arguments;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u=(a=h.length>3&&void 0!==h[3]?h[3]:{}).ctx,c=void 0===(i=a.req)?null==u?void 0:u.req:i,s="".concat(l(r),"/").concat(t),e.prev=2,f=null!=c&&c.headers.cookie?{headers:{cookie:c.headers.cookie}}:{},e.next=6,fetch(s,f);case 6:return d=e.sent,e.next=9,d.json();case 9:if(p=e.sent,d.ok){e.next=12;break}throw p;case 12:return e.abrupt("return",Object.keys(p).length>0?p:null);case 15:return e.prev=15,e.t0=e.catch(2),n.error("CLIENT_FETCH_ERROR",{error:e.t0,url:s}),e.abrupt("return",null);case 19:case"end":return e.stop()}},e,null,[[2,15]])}))).apply(this,arguments)}function l(e){return"undefined"==typeof window?"".concat(e.baseUrlServer).concat(e.basePathServer):e.basePath}function f(){return Math.floor(Date.now()/1e3)}},8253:function(e,t,r){"use strict";var n=r(2132);Object.defineProperty(t,"__esModule",{value:!0}),t.UnsupportedStrategy=t.UnknownError=t.OAuthCallbackError=t.MissingSecret=t.MissingAuthorize=t.MissingAdapterMethods=t.MissingAdapter=t.MissingAPIRoute=t.InvalidCallbackUrl=t.AccountNotLinkedError=void 0,t.adapterErrorHandler=function(e,t){if(e)return Object.keys(e).reduce(function(r,n){return r[n]=(0,a.default)(o.default.mark(function r(){var a,u,i,c,s,l=arguments;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:for(r.prev=0,u=Array(a=l.length),i=0;i<a;i++)u[i]=l[i];return t.debug("adapter_".concat(n),{args:u}),c=e[n],r.next=6,c.apply(void 0,u);case 6:return r.abrupt("return",r.sent);case 9:throw r.prev=9,r.t0=r.catch(0),t.error("adapter_error_".concat(n),r.t0),(s=new h(r.t0)).name="".concat(S(n),"Error"),s;case 15:case"end":return r.stop()}},r,null,[[0,9]])})),r},{})},t.capitalize=S,t.eventsErrorHandler=function(e,t){return Object.keys(e).reduce(function(r,n){return r[n]=(0,a.default)(o.default.mark(function r(){var a,u=arguments;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a=e[n],r.next=4,a.apply(void 0,u);case 4:return r.abrupt("return",r.sent);case 7:r.prev=7,r.t0=r.catch(0),t.error("".concat(E(n),"_EVENT_ERROR"),r.t0);case 10:case"end":return r.stop()}},r,null,[[0,7]])})),r},{})},t.upperSnake=E;var o=n(r(3363)),a=n(r(328)),u=n(r(5315)),i=n(r(2125)),c=n(r(9852)),s=n(r(4500)),l=n(r(2160)),f=n(r(7320)),d=n(r(6910));function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,f.default)(this,r)}}var h=function(e){(0,l.default)(r,e);var t=p(r);function r(e){var n,o;return(0,c.default)(this,r),(o=t.call(this,null!==(n=null==e?void 0:e.message)&&void 0!==n?n:e)).name="UnknownError",o.code=e.code,e instanceof Error&&(o.stack=e.stack),o}return(0,s.default)(r,[{key:"toJSON",value:function(){return{name:this.name,message:this.message,stack:this.stack}}}]),r}((0,n(r(8726)).default)(Error));t.UnknownError=h;var v=function(e){(0,l.default)(r,e);var t=p(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,i.default)((0,u.default)(e),"name","OAuthCallbackError"),e}return(0,s.default)(r)}(h);t.OAuthCallbackError=v;var y=function(e){(0,l.default)(r,e);var t=p(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,i.default)((0,u.default)(e),"name","AccountNotLinkedError"),e}return(0,s.default)(r)}(h);t.AccountNotLinkedError=y;var m=function(e){(0,l.default)(r,e);var t=p(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,i.default)((0,u.default)(e),"name","MissingAPIRouteError"),(0,i.default)((0,u.default)(e),"code","MISSING_NEXTAUTH_API_ROUTE_ERROR"),e}return(0,s.default)(r)}(h);t.MissingAPIRoute=m;var g=function(e){(0,l.default)(r,e);var t=p(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,i.default)((0,u.default)(e),"name","MissingSecretError"),(0,i.default)((0,u.default)(e),"code","NO_SECRET"),e}return(0,s.default)(r)}(h);t.MissingSecret=g;var b=function(e){(0,l.default)(r,e);var t=p(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,i.default)((0,u.default)(e),"name","MissingAuthorizeError"),(0,i.default)((0,u.default)(e),"code","CALLBACK_CREDENTIALS_HANDLER_ERROR"),e}return(0,s.default)(r)}(h);t.MissingAuthorize=b;var w=function(e){(0,l.default)(r,e);var t=p(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,i.default)((0,u.default)(e),"name","MissingAdapterError"),(0,i.default)((0,u.default)(e),"code","EMAIL_REQUIRES_ADAPTER_ERROR"),e}return(0,s.default)(r)}(h);t.MissingAdapter=w;var x=function(e){(0,l.default)(r,e);var t=p(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,i.default)((0,u.default)(e),"name","MissingAdapterMethodsError"),(0,i.default)((0,u.default)(e),"code","MISSING_ADAPTER_METHODS_ERROR"),e}return(0,s.default)(r)}(h);t.MissingAdapterMethods=x;var _=function(e){(0,l.default)(r,e);var t=p(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,i.default)((0,u.default)(e),"name","UnsupportedStrategyError"),(0,i.default)((0,u.default)(e),"code","CALLBACK_CREDENTIALS_JWT_ERROR"),e}return(0,s.default)(r)}(h);t.UnsupportedStrategy=_;var O=function(e){(0,l.default)(r,e);var t=p(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,i.default)((0,u.default)(e),"name","InvalidCallbackUrl"),(0,i.default)((0,u.default)(e),"code","INVALID_CALLBACK_URL_ERROR"),e}return(0,s.default)(r)}(h);function E(e){return e.replace(/([A-Z])/g,"_$1").toUpperCase()}function S(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1))}t.InvalidCallbackUrl=O},2086:function(e,t,r){"use strict";var n,o,a,u,i=r(4224),c=r(2132),s=r(9903);Object.defineProperty(t,"__esModule",{value:!0});var l={SessionContext:!0,useSession:!0,getSession:!0,getCsrfToken:!0,getProviders:!0,signIn:!0,signOut:!0,SessionProvider:!0};t.SessionContext=void 0,t.SessionProvider=function(e){var t,r,n,o,a,u,i=e.children,c=e.basePath,s=e.refetchInterval,l=e.refetchWhenOffline;c&&(S.basePath=c);var d=void 0!==e.session;S._lastSync=d?(0,g.now)():0;var y=v.useState(function(){return d&&(S._session=e.session),e.session}),m=(0,h.default)(y,2),w=m[0],x=m[1],_=v.useState(!d),O=(0,h.default)(_,2),E=O[0],T=O[1];v.useEffect(function(){return S._getSession=(0,p.default)(f.default.mark(function e(){var t,r,n=arguments;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=(n.length>0&&void 0!==n[0]?n[0]:{}).event,e.prev=1,!((r="storage"===t)||void 0===S._session)){e.next=10;break}return S._lastSync=(0,g.now)(),e.next=7,P({broadcast:!r});case 7:return S._session=e.sent,x(S._session),e.abrupt("return");case 10:if(!(!t||null===S._session||(0,g.now)()<S._lastSync)){e.next=12;break}return e.abrupt("return");case 12:return S._lastSync=(0,g.now)(),e.next=15,P();case 15:S._session=e.sent,x(S._session),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),k.error("CLIENT_SESSION_ERROR",e.t0);case 22:return e.prev=22,T(!1),e.finish(22);case 25:case"end":return e.stop()}},e,null,[[1,19,22,25]])})),S._getSession(),function(){S._lastSync=0,S._session=void 0,S._getSession=function(){}}},[]),v.useEffect(function(){var e=j.receive(function(){return S._getSession({event:"storage"})});return function(){return e()}},[]),v.useEffect(function(){var t=e.refetchOnWindowFocus,r=void 0===t||t,n=function(){r&&"visible"===document.visibilityState&&S._getSession({event:"visibilitychange"})};return document.addEventListener("visibilitychange",n,!1),function(){return document.removeEventListener("visibilitychange",n,!1)}},[e.refetchOnWindowFocus]);var R=(t=v.useState("undefined"!=typeof navigator&&navigator.onLine),n=(r=(0,h.default)(t,2))[0],o=r[1],a=function(){return o(!0)},u=function(){return o(!1)},v.useEffect(function(){return window.addEventListener("online",a),window.addEventListener("offline",u),function(){window.removeEventListener("online",a),window.removeEventListener("offline",u)}},[]),n),M=!1!==l||R;v.useEffect(function(){if(s&&M){var e=setInterval(function(){S._session&&S._getSession({event:"poll"})},1e3*s);return function(){return clearInterval(e)}}},[s,M]);var A=v.useMemo(function(){return{data:w,status:E?"loading":w?"authenticated":"unauthenticated"}},[w,E]);return(0,b.jsx)(L.Provider,{value:A,children:i})},t.getCsrfToken=R,t.getProviders=A,t.getSession=P,t.signIn=function(e,t,r){return U.apply(this,arguments)},t.signOut=function(e){return N.apply(this,arguments)},t.useSession=function(e){var t=v.useContext(L),r=null!=e?e:{},n=r.required,o=r.onUnauthenticated,a=n&&"unauthenticated"===t.status;return(v.useEffect(function(){if(a){var e="/api/auth/signin?".concat(new URLSearchParams({error:"SessionRequired",callbackUrl:window.location.href}));o?o():window.location.href=e}},[a,o]),a)?{data:t.data,status:"loading"}:t};var f=c(r(3363)),d=c(r(2125)),p=c(r(328)),h=c(r(7343)),v=_(r(959)),y=_(r(1577)),m=c(r(8143)),g=r(9222),b=r(1527),w=r(1348);function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(x=function(e){return e?r:t})(e)}function _(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=x(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(t){(0,d.default)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.keys(w).forEach(function(e){!("default"===e||"__esModule"===e||Object.prototype.hasOwnProperty.call(l,e))&&(e in t&&t[e]===w[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return w[e]}}))});var S={baseUrl:(0,m.default)(null!==(n=i.env.NEXTAUTH_URL)&&void 0!==n?n:i.env.VERCEL_URL).origin,basePath:(0,m.default)(i.env.NEXTAUTH_URL).path,baseUrlServer:(0,m.default)(null!==(o=null!==(a=i.env.NEXTAUTH_URL_INTERNAL)&&void 0!==a?a:i.env.NEXTAUTH_URL)&&void 0!==o?o:i.env.VERCEL_URL).origin,basePathServer:(0,m.default)(null!==(u=i.env.NEXTAUTH_URL_INTERNAL)&&void 0!==u?u:i.env.NEXTAUTH_URL).path,_lastSync:0,_session:void 0,_getSession:function(){}},j=(0,g.BroadcastChannel)(),k=(0,y.proxyLogger)(y.default,S.basePath),L=v.createContext(void 0);function P(e){return T.apply(this,arguments)}function T(){return(T=(0,p.default)(f.default.mark(function e(t){var r,n;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.fetchData)("session",S,k,t);case 2:return n=e.sent,(null===(r=null==t?void 0:t.broadcast)||void 0===r||r)&&j.post({event:"session",data:{trigger:"getSession"}}),e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function R(e){return M.apply(this,arguments)}function M(){return(M=(0,p.default)(f.default.mark(function e(t){var r;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.fetchData)("csrf",S,k,t);case 2:return r=e.sent,e.abrupt("return",null==r?void 0:r.csrfToken);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function A(){return C.apply(this,arguments)}function C(){return(C=(0,p.default)(f.default.mark(function e(){return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.fetchData)("providers",S,k);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function U(){return(U=(0,p.default)(f.default.mark(function e(t,r,n){var o,a,u,i,c,s,l,d,p,h,v,y,m,b,w,x,_;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u=void 0===(a=(o=null!=r?r:{}).callbackUrl)?window.location.href:a,c=void 0===(i=o.redirect)||i,s=(0,g.apiBaseUrl)(S),e.next=4,A();case 4:if(l=e.sent){e.next=8;break}return window.location.href="".concat(s,"/error"),e.abrupt("return");case 8:if(!(!t||!(t in l))){e.next=11;break}return window.location.href="".concat(s,"/signin?").concat(new URLSearchParams({callbackUrl:u})),e.abrupt("return");case 11:return d="credentials"===l[t].type,p="email"===l[t].type,h=d||p,v="".concat(s,"/").concat(d?"callback":"signin","/").concat(t),y="".concat(v,"?").concat(new URLSearchParams(n)),e.t0=fetch,e.t1=y,e.t2={"Content-Type":"application/x-www-form-urlencoded"},e.t3=URLSearchParams,e.t4=E,e.t5=E({},r),e.t6={},e.next=25,R();case 25:return e.t7=e.sent,e.t8=u,e.t9={csrfToken:e.t7,callbackUrl:e.t8,json:!0},e.t10=(0,e.t4)(e.t5,e.t6,e.t9),e.t11=new e.t3(e.t10),e.t12={method:"post",headers:e.t2,body:e.t11},e.next=33,(0,e.t0)(e.t1,e.t12);case 33:return m=e.sent,e.next=36,m.json();case 36:if(b=e.sent,!(c||!h)){e.next=42;break}return x=null!==(w=b.url)&&void 0!==w?w:u,window.location.href=x,x.includes("#")&&window.location.reload(),e.abrupt("return");case 42:if(_=new URL(b.url).searchParams.get("error"),!m.ok){e.next=46;break}return e.next=46,S._getSession({event:"storage"});case 46:return e.abrupt("return",{error:_,status:m.status,ok:m.ok,url:_?null:b.url});case 47:case"end":return e.stop()}},e)}))).apply(this,arguments)}function N(){return(N=(0,p.default)(f.default.mark(function e(t){var r,n,o,a,u,i,c,s,l;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=void 0===(n=(null!=t?t:{}).callbackUrl)?window.location.href:n,a=(0,g.apiBaseUrl)(S),e.t0={"Content-Type":"application/x-www-form-urlencoded"},e.t1=URLSearchParams,e.next=6,R();case 6:return e.t2=e.sent,e.t3=o,e.t4={csrfToken:e.t2,callbackUrl:e.t3,json:!0},e.t5=new e.t1(e.t4),u={method:"post",headers:e.t0,body:e.t5},e.next=13,fetch("".concat(a,"/signout"),u);case 13:return i=e.sent,e.next=16,i.json();case 16:if(c=e.sent,j.post({event:"session",data:{trigger:"signout"}}),!(null===(r=null==t?void 0:t.redirect)||void 0===r||r)){e.next=23;break}return l=null!==(s=c.url)&&void 0!==s?s:o,window.location.href=l,l.includes("#")&&window.location.reload(),e.abrupt("return");case 23:return e.next=25,S._getSession({event:"storage"});case 25:return e.abrupt("return",c);case 26:case"end":return e.stop()}},e)}))).apply(this,arguments)}t.SessionContext=L},1348:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},1577:function(e,t,r){"use strict";var n=r(2132);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.proxyLogger=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;try{if("undefined"==typeof window)return e;var r={},n=function(e){r[e]=function(r,n){c[e](r,n),"error"===e&&(n=i(n)),n.client=!0;var a="".concat(t,"/_log"),s=new URLSearchParams(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){(0,o.default)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({level:e,code:r},n));return navigator.sendBeacon?navigator.sendBeacon(a,s):fetch(a,{method:"POST",body:s,keepalive:!0})}};for(var a in e)n(a);return r}catch(s){return c}},t.setLogger=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;t||(c.debug=function(){}),e.error&&(c.error=e.error),e.warn&&(c.warn=e.warn),e.debug&&(c.debug=e.debug)};var o=n(r(2125)),a=r(8253);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){var t;return e instanceof Error&&!(e instanceof a.UnknownError)?{message:e.message,stack:e.stack,name:e.name}:(null!=e&&e.error&&(e.error=i(e.error),e.message=null!==(t=e.message)&&void 0!==t?t:e.error.message),e)}var c={error:function(e,t){t=i(t),console.error("[next-auth][error][".concat(e,"]"),"\nhttps://next-auth.js.org/errors#".concat(e.toLowerCase()),t.message,t)},warn:function(e){console.warn("[next-auth][warn][".concat(e,"]"),"\nhttps://next-auth.js.org/warnings#".concat(e.toLowerCase()))},debug:function(e,t){console.log("[next-auth][debug][".concat(e,"]"),t)}};t.default=c},8143:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t;let r=new URL("http://localhost:3000/api/auth");e&&!e.startsWith("http")&&(e=`https://${e}`);let n=new URL(null!==(t=e)&&void 0!==t?t:r),o=("/"===n.pathname?r.pathname:n.pathname).replace(/\/$/,""),a=`${n.origin}${o}`;return{origin:n.origin,host:n.host,path:o,base:a,toString:()=>a}}},3105:function(e,t,r){"use strict";r.d(t,{F:function(){return s},f:function(){return l}});var n=r(959);let o=["light","dark"],a="(prefers-color-scheme: dark)",u="undefined"==typeof window,i=(0,n.createContext)(void 0),c={setTheme(e){},themes:[]},s=()=>{var e;return null!==(e=(0,n.useContext)(i))&&void 0!==e?e:c},l=e=>(0,n.useContext)(i)?n.createElement(n.Fragment,null,e.children):n.createElement(d,e),f=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:u=!0,storageKey:c="theme",themes:s=f,defaultTheme:l=r?"system":"light",attribute:d="data-theme",value:m,children:g,nonce:b})=>{let[w,x]=(0,n.useState)(()=>h(c,l)),[_,O]=(0,n.useState)(()=>h(c)),E=m?Object.values(m):s,S=(0,n.useCallback)(e=>{let n=e;if(!n)return;"system"===e&&r&&(n=y());let a=m?m[n]:n,i=t?v():null,c=document.documentElement;if("class"===d?(c.classList.remove(...E),a&&c.classList.add(a)):a?c.setAttribute(d,a):c.removeAttribute(d),u){let s=o.includes(l)?l:null,f=o.includes(n)?n:s;c.style.colorScheme=f}null==i||i()},[]),j=(0,n.useCallback)(e=>{x(e);try{localStorage.setItem(c,e)}catch(t){}},[e]),k=(0,n.useCallback)(t=>{let n=y(t);O(n),"system"===w&&r&&!e&&S("system")},[w,e]);(0,n.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(k),k(e),()=>e.removeListener(k)},[k]),(0,n.useEffect)(()=>{let e=e=>{e.key===c&&j(e.newValue||l)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[j]),(0,n.useEffect)(()=>{S(null!=e?e:w)},[e,w]);let L=(0,n.useMemo)(()=>({theme:w,setTheme:j,forcedTheme:e,resolvedTheme:"system"===w?_:w,themes:r?[...s,"system"]:s,systemTheme:r?_:void 0}),[w,j,e,_,r,s]);return n.createElement(i.Provider,{value:L},n.createElement(p,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:u,storageKey:c,themes:s,defaultTheme:l,attribute:d,value:m,children:g,attrs:E,nonce:b}),g)},p=(0,n.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:u,enableColorScheme:i,defaultTheme:c,value:s,attrs:l,nonce:f})=>{let d="system"===c,p="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${l.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,h=i?o.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,n=!0)=>{let a=s?s[e]:e,u=t?e+"|| ''":`'${a}'`,c="";return i&&n&&!t&&o.includes(e)&&(c+=`d.style.colorScheme = '${e}';`),"class"===r?c+=t||a?`c.add(${u})`:"null":a&&(c+=`d[s](n,${u})`),c},y=e?`!function(){${p}${v(e)}}()`:u?`!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${v(s?"x[e]":"e",!0)}}${d?"":"else{"+v(c,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${v(s?"x[e]":"e",!0)}}else{${v(c,!1,!1)};}${h}}catch(t){}}();`;return n.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:y}})},()=>!0),h=(e,t)=>{let r;if(!u){try{r=localStorage.getItem(e)||void 0}catch(n){}return r||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},5921:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(6860)}])},6860:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(1527),o=r(9330),a=r.n(o);r(1267);var u=r(3105),i=r(2086),c=r(959),s=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})},l="undefined"!=typeof window,f=({beforeSend:e}={})=>{var t;if(!l||(s(),e&&(null==(t=window.va)||t.call(window,"beforeSend",e)),document.head.querySelector('script[src="/va/script.js"]')))return;let r=document.createElement("script");r.src="/va/script.js",r.defer=!0,document.head.appendChild(r)};function d(e){return c.createElement(p,{...e})}function p({beforeSend:e}){return(0,c.useEffect)(()=>{f({beforeSend:e})},[e]),null}function h(e){let{Component:t,pageProps:{session:r,...o}}=e;return(0,n.jsx)(i.SessionProvider,{session:r,children:(0,n.jsx)(u.f,{attribute:"class",children:(0,n.jsxs)("main",{className:a().className,children:[(0,n.jsx)(t,{...o}),(0,n.jsx)(d,{})]})})})}},1267:function(){},9330:function(e){e.exports={style:{fontFamily:"'__Inter_9c9965', '__Inter_Fallback_9c9965'",fontStyle:"normal"},className:"__className_9c9965"}},4224:function(e){var t,r,n,o=e.exports={};function a(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(n){r=u}}();var c=[],s=!1,l=-1;function f(){s&&n&&(s=!1,n.length?c=n.concat(c):l=-1,c.length&&d())}function d(){if(!s){var e=i(f);s=!0;for(var t=c.length;t;){for(n=c,c=[];++l<t;)n&&n[l].run();l=-1,t=c.length}n=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||s||i(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}},3458:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},5423:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},5315:function(e){e.exports=function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},328:function(e){function t(e,t,r,n,o,a,u){try{var i=e[a](u),c=i.value}catch(s){r(s);return}i.done?t(c):Promise.resolve(c).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise(function(o,a){var u=e.apply(r,n);function i(e){t(u,o,a,i,c,"next",e)}function c(e){t(u,o,a,i,c,"throw",e)}i(void 0)})}},e.exports.__esModule=!0,e.exports.default=e.exports},9852:function(e){e.exports=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},5974:function(e,t,r){var n=r(9134),o=r(2552);function a(t,r,u){return o()?(e.exports=a=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},4500:function(e){function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},2125:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},6910:function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},2160:function(e,t,r){var n=r(9134);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},2132:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},7611:function(e){e.exports=function(e){return -1!==Function.toString.call(e).indexOf("[native code]")},e.exports.__esModule=!0,e.exports.default=e.exports},2552:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},7621:function(e){e.exports=function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],u=!0,i=!1;try{for(o=o.call(e);!(u=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(c){i=!0,n=c}finally{try{u||null==o.return||o.return()}finally{if(i)throw n}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},3051:function(e){e.exports=function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7320:function(e,t,r){var n=r(9903).default,o=r(5315);e.exports=function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3305:function(e,t,r){var n=r(9903).default;function o(){"use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,a=r.hasOwnProperty,u=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(d){f=function(e,t,r){return e[t]=r}}function p(e,t,r,n){var o,a,i=Object.create((t&&t.prototype instanceof y?t:y).prototype);return u(i,"_invoke",{value:(o=new k(n||[]),a="suspendedStart",function(t,n){if("executing"===a)throw Error("Generator is already running");if("completed"===a){if("throw"===t)throw n;return P()}for(o.method=t,o.arg=n;;){var u=o.delegate;if(u){var i=function e(t,r){var n=t.iterator[r.method];if(void 0===n){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,e(t,r),"throw"===r.method))return v;r.method="throw",r.arg=TypeError("The iterator does not provide a 'throw' method")}return v}var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,v):a:(r.method="throw",r.arg=TypeError("iterator result is not an object"),r.delegate=null,v)}(u,o);if(i){if(i===v)continue;return i}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===a)throw a="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);a="executing";var c=h(e,r,o);if("normal"===c.type){if(a=o.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(a="completed",o.method="throw",o.arg=c.arg)}})}),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=p;var v={};function y(){}function m(){}function g(){}var b={};f(b,c,function(){return this});var w=Object.getPrototypeOf,x=w&&w(w(L([])));x&&x!==r&&a.call(x,c)&&(b=x);var _=g.prototype=y.prototype=Object.create(b);function O(e){["next","throw","return"].forEach(function(t){f(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;u(this,"_invoke",{value:function(o,u){function i(){return new t(function(r,i){!function r(o,u,i,c){var s=h(e[o],e,u);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(f).then(function(e){l.value=e,i(l)},function(e){return r("throw",e,i,c)})}c(s.arg)}(o,u,r,i)})}return r=r?r.then(i,i):i()}})}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function L(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return m.prototype=g,u(_,"constructor",{value:g,configurable:!0}),u(g,"constructor",{value:m,configurable:!0}),m.displayName=f(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,f(e,l,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},O(E.prototype),f(E.prototype,s,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var u=new E(p(e,r,n,o),a);return t.isGeneratorFunction(r)?u:u.next().then(function(e){return e.done?e.value:u.next()})},O(_),f(_,l,"Generator"),f(_,c,function(){return this}),f(_,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return u.type="throw",u.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],u=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=e,u.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),v}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},9134:function(e){function t(r,n){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7343:function(e,t,r){var n=r(5423),o=r(7621),a=r(5129),u=r(3051);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||u()},e.exports.__esModule=!0,e.exports.default=e.exports},9903:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},5129:function(e,t,r){var n=r(3458);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}},e.exports.__esModule=!0,e.exports.default=e.exports},8726:function(e,t,r){var n=r(6910),o=r(9134),a=r(7611),u=r(5974);function i(t){var r="function"==typeof Map?new Map:void 0;return e.exports=i=function(e){if(null===e||!a(e))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return u(e,arguments,n(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},e.exports.__esModule=!0,e.exports.default=e.exports,i(t)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},3363:function(e,t,r){var n=r(3305)();e.exports=n;try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(5921),t(6139)}),_N_E=e.O()}]);