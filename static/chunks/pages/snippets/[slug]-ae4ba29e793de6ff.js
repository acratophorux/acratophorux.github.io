(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[726],{5478:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/snippets/[slug]",function(){return n(9198)}])},3691:function(e,r,n){"use strict";n.d(r,{Z:function(){return x}});var t=n(1527),s=n(9066),i=n.n(s),l=n(4040),a=n.n(l),c=n(2563),d=n(5351),o=n(3316),u=n(3105);let h=e=>{let r=e.href,n=r&&(r.startsWith("/")||r.startsWith("#"));return n?(0,t.jsx)(i(),{href:r,...e,children:e.children}):(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",...e})},m={Image:function(e){return(0,t.jsx)(a(),{alt:e.alt,className:"rounded-lg",...e})},ImageWithTheme:function(e){let{theme:r}=(0,u.F)();return(0,t.jsx)(a(),{alt:e.alt,src:"light"===r?e.light:e.dark,...e})},a:h,Callout:function(e){return(0,t.jsxs)("div",{className:"flex bg-gray-200 dark:bg-gray-800 rounded-lg p-4 my-8",children:[(0,t.jsx)("div",{className:"flex items-center w-4 mr-4",children:e.emoji}),(0,t.jsx)("div",{className:"w-full callout",children:e.children})]})},Analytics:d.Z,ConsCard:function(e){let{title:r,cons:n}=e;return(0,t.jsxs)("div",{className:"border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900 rounded-xl p-6 my-6 w-full",children:[(0,t.jsx)("span",{children:"You might not use ".concat(r," if...")}),(0,t.jsx)("div",{className:"mt-4",children:n.map(e=>(0,t.jsxs)("div",{className:"flex font-medium items-baseline mb-2",children:[(0,t.jsx)("div",{className:"h-4 w-4 mr-2",children:(0,t.jsx)("svg",{className:"h-4 w-4 text-red-500",viewBox:"0 0 24 24",children:(0,t.jsxs)("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),(0,t.jsx)("path",{d:"M22 4L12 14.01l-3-3"})]})})}),(0,t.jsx)("span",{children:e})]},e))})]})},ProsCard:function(e){let{title:r,pros:n}=e;return(0,t.jsxs)("div",{className:"border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-900 rounded-xl p-6 my-4 w-full",children:[(0,t.jsx)("span",{children:"You might use ".concat(r," if...")}),(0,t.jsx)("div",{className:"mt-4",children:n.map(e=>(0,t.jsxs)("div",{className:"flex font-medium items-baseline mb-2",children:[(0,t.jsx)("div",{className:"h-4 w-4 mr-2",children:(0,t.jsx)("svg",{className:"h-4 w-4 text-green-500",viewBox:"0 0 24 24",children:(0,t.jsxs)("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),(0,t.jsx)("path",{d:"M22 4L12 14.01l-3-3"})]})})}),(0,t.jsx)("span",{children:e})]},e))})]})},Step:function(e){let{number:r,title:n}=e;return(0,t.jsxs)("div",{className:"step flex items-center py-4",children:[(0,t.jsx)("div",{className:"flex items-center justify-center border border-gray-200 pt-1 font-bold dark:border-gray-800 rounded-full h-8 w-8 text-blue-500",children:r}),(0,t.jsx)("h3",{className:"ml-3 tracking-tight font-bold",children:n})]})},Unsplash:c.Z,YouTube:o.Z};var x=m},5351:function(e,r,n){"use strict";n.d(r,{Z:function(){return a}});var t=n(1527),s=n(6747),i=n(5712),l=n(8134);function a(){let{data:e}=(0,s.ZP)("/api/views",i.Z),r=new Number(null==e?void 0:e.total);return(0,t.jsx)(l.Z,{header:"All-Time Views",link:"https://leerob.io",metric:r,isCurrency:!1})}},8134:function(e,r,n){"use strict";n.d(r,{Z:function(){return s}});var t=n(1527);function s(e){let{header:r,link:n,metric:s,isCurrency:i}=e;return(0,t.jsxs)("div",{className:"metric-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full",children:[(0,t.jsx)("a",{"aria-label":r,target:"_blank",rel:"noopener noreferrer",href:n,children:(0,t.jsxs)("div",{className:"flex items-center text-gray-900 dark:text-gray-100",children:[r,(0,t.jsx)("svg",{className:"h-4 w-4 ml-1",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})}),(0,t.jsxs)("p",{className:"mt-2 text-3xl font-bold spacing-sm text-black dark:text-white",children:[s>0&&i&&"$",s>0?s.toLocaleString():"-"]})]})}},2563:function(e,r,n){"use strict";n.d(r,{Z:function(){return a}});var t=n(1527),s=n(6747),i=n(5712),l=n(8134);function a(){let{data:e}=(0,s.ZP)("/api/unsplash",i.Z),r=new Number(null==e?void 0:e.downloads),n=new Number(null==e?void 0:e.views),a="https://unsplash.com/@leerob";return(0,t.jsxs)("div",{className:"grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full",children:[(0,t.jsx)(l.Z,{header:"Unsplash Downloads",link:a,metric:r,isCurrency:!1}),(0,t.jsx)(l.Z,{header:"Unsplash Views",link:a,metric:n,isCurrency:!1})]})}},3316:function(e,r,n){"use strict";n.d(r,{Z:function(){return a}});var t=n(1527),s=n(6747),i=n(5712),l=n(8134);function a(){let{data:e}=(0,s.ZP)("/api/youtube",i.Z),r=new Number(null==e?void 0:e.subscriberCount),n=new Number(null==e?void 0:e.viewCount),a="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw";return(0,t.jsxs)("div",{className:"grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full",children:[(0,t.jsx)(l.Z,{header:"YouTube Subscribers",link:a,metric:r,isCurrency:!1}),(0,t.jsx)(l.Z,{header:"YouTube Views",link:a,metric:n,isCurrency:!1})]})}},1043:function(e,r,n){"use strict";n.d(r,{i:function(){return l}});var t=n(8687),s=n.n(t);let i=s()({dataset:"production",projectId:"knr81n85",useCdn:!1,apiVersion:"2021-03-25"}),l=e=>i.image(e).auto("format").fit("max")},9198:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return u},default:function(){return h}});var t=n(1527),s=n(1799),i=n(4040),l=n.n(i),a=n(974),c=n(1043);function d(e){let{children:r,snippet:n}=e;return(0,t.jsx)(a.Z,{title:"".concat(n.title," - Code Snippet"),description:"A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks.",children:(0,t.jsxs)("article",{className:"flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full",children:[(0,t.jsxs)("div",{className:"flex justify-between w-full mb-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white",children:n.title}),(0,t.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:n.description})]}),(0,t.jsx)("div",{className:"mt-2 sm:mt-0",children:(0,t.jsx)(l(),{alt:n.title,height:48,width:48,src:(0,c.i)(n.logo).url(),className:"rounded-full"})})]}),(0,t.jsx)("div",{className:"prose dark:prose-dark w-full",children:r})]})})}var o=n(3691),u=!0;function h(e){let{snippet:r}=e;return(0,t.jsx)(d,{snippet:r,children:(0,t.jsx)(s.R,{...r.content,components:o.Z})})}}},function(e){e.O(0,[558,40,118,974,774,888,179],function(){return e(e.s=5478)}),_N_E=e.O()}]);