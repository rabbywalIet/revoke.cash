(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[605],{28500:function(e,s,r){"use strict";r.d(s,{Z:function(){return i}});var n=r(20132),t=r(64817),o=/<(\w+) *>(.*?)<\/\1 *>|<(\w+) *\/>/,a=/(?:\r\n|\r|\n)/g;function i(e){var s=e.i18nKey,r=e.values,i=e.components,c=e.fallback,l=e.defaultTrans,p=e.ns,h=(0,t.Z)(p),x=h.t,d=h.lang;return(0,n.useMemo)(function(){var e=x(s,r,{fallback:c,default:l});return e&&i&&0!==i.length?function e(s,r){void 0===r&&(r=[]);var t=s.replace(a,"").split(o);if(1===t.length)return s;var i=[],c=t.shift();return c&&i.push(c),(function e(s){if(!s.length)return[];var r=s.slice(0,4),n=r[0],t=r[1],o=r[2];return[[n||o,t||"",r[3]]].concat(e(s.slice(4,s.length)))})(t).forEach(function(s,t){var o=s[0],a=s[1],c=s[2],l=r[o]||n.createElement(n.Fragment,null);i.push((0,n.cloneElement)(l,{key:t},a?e(a,r):l.props.children)),c&&i.push(c)}),i}(e,i):e},[s,r,i,d])}},49772:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/extension",function(){return r(27568)}])},29593:function(e,s,r){"use strict";var n=r(15311),t=r(92793);s.Z=e=>{let{children:s,className:r,...o}=e,a=(0,t.m6)("prose prose-zinc dark:prose-invert max-w-none","prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:font-bold prose-h1:tracking-tight prose-h1:m-0","prose-h2:text-3xl prose-h2:font-bold prose-h2:m-0 prose-h2:mb-2","prose-h3:text-2xl prose-h3:font-bold prose-h3:m-0 prose-h3:mb-1","prose-h4:text-xl prose-h4:font-bold prose-h4:m-0","prose-h5:text-lg prose-h5:font-bold prose-h5:m-0","prose-h6:text-base prose-h6:font-bold prose-h6:m-0","prose-p:text-zinc-700 dark:prose-p:text-zinc-300","prose-p:min-w-0 min-w-0 last:prose-p:mb-0","prose-li:text-zinc-700 dark:prose-li:text-zinc-300","prose-li:leading-normal prose-li:my-1","marker:prose-li:text-zinc-600 dark:marker:prose-li:text-zinc-400","prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-code:bg-zinc-200 dark:prose-code:bg-zinc-800 prose-code:font-normal","prose-code:before:content-none prose-code:after:content-none","prose-img:rounded-lg prose-img:border prose-img:border-black dark:prose-img:border-white prose-img:mx-auto prose-img:my-0",r);return(0,n.jsx)("div",{...o,className:a,children:s})}},32472:function(e,s,r){"use strict";var n=r(15311),t=r(29593),o=r(98370);s.Z=e=>{let{children:s,searchBar:r}=e;return(0,n.jsx)(o.Z,{searchBar:r,children:(0,n.jsx)(t.Z,{className:"max-w-3xl mx-auto",children:s})})}},98370:function(e,s,r){"use strict";var n=r(15311),t=r(54355),o=r(52543);s.Z=e=>{let{children:s,searchBar:r=!0}=e;return(0,n.jsxs)("div",{className:"flex flex-col mx-auto min-h-screen",children:[(0,n.jsx)(o.Z,{searchBar:r}),(0,n.jsx)("main",{className:"max-w-7xl w-full mx-auto px-4 lg:px-8 grow",children:s}),(0,n.jsx)("div",{className:"flex flex-col justify-end",children:(0,n.jsx)(t.Z,{})})]})}},50865:function(e,s,r){"use strict";r.d(s,{x:function(){return n}});let n={titleTemplate:"%s | Revoke.cash",openGraph:{url:"https://revoke.cash/",images:[{url:"https://revoke.cash/assets/images/revoke-og-image.jpg",width:1600,height:900}],site_name:"Revoke.cash",type:"website"},twitter:{handle:"@RoscoKalis",site:"@RevokeCash",cardType:"summary_large_image"},additionalLinkTags:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"apple-touch-icon",href:"/assets/images/apple-touch-icon.png"},{rel:"manifest",href:"/manifest.json"}],additionalMetaTags:[{name:"theme-color",content:"#000000"}]}},27568:function(e,s,r){"use strict";r.r(s),r.d(s,{__N_SSG:function(){return g},default:function(){return f}});var n=r(15311),t=r(80741),o=r(64817),a=r(3752),i=e=>{let{href:s,children:r}=e,{t}=(0,o.Z)();return(0,n.jsxs)(a.Z,{href:s,style:"secondary",size:"md",className:"flex justify-center items-center gap-2",external:!0,children:[(0,n.jsx)("div",{children:t("common:buttons.download")}),(0,n.jsx)("div",{className:"flex gap-1",children:r})]})},c=r(92164),l=r(32472),p=r(63077),h=r(50865),x=r(76473),d=r(28500),m=r(74034),u=r.n(m),g=!0,f=()=>{let{t:e}=(0,o.Z)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.PB,{...h.x,title:e("extension:meta.title"),description:e("extension:meta.description"),openGraph:{url:"https://revoke.cash/extension",images:[{url:"https://revoke.cash/assets/images/extension/card.png",width:1600,height:900}],site_name:"Revoke.cash",type:"website"}}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("h1",{children:e("extension:title")}),(0,n.jsx)(t.Z,{className:"my-4"}),(0,n.jsx)("p",{children:(0,n.jsx)(d.Z,{i18nKey:"extension:paragraph_1"})}),(0,n.jsx)("p",{children:(0,n.jsx)(d.Z,{i18nKey:"extension:paragraph_2"})}),(0,n.jsx)("p",{className:"mx-auto not-prose",children:(0,n.jsx)(u(),{src:"/assets/images/extension/screenshot-1.png",alt:"Extension: Unexpected Allowance",height:"500",width:"800",priority:!0,fetchPriority:"high"})}),(0,n.jsx)("p",{children:(0,n.jsx)(d.Z,{i18nKey:"extension:paragraph_3"})}),(0,n.jsx)("p",{children:(0,n.jsx)(d.Z,{i18nKey:"extension:paragraph_4"})}),(0,n.jsx)("p",{className:"mx-auto not-prose",children:(0,n.jsx)(u(),{src:"/assets/images/extension/screenshot-3.png",alt:"Extension: Unexpected Listing",height:"500",width:"800"})}),(0,n.jsx)("p",{children:(0,n.jsx)(d.Z,{i18nKey:"extension:paragraph_5"})}),(0,n.jsx)("p",{children:(0,n.jsx)(d.Z,{i18nKey:"extension:paragraph_6"})}),(0,n.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-3 not-prose",children:[(0,n.jsxs)(i,{href:p.wg,children:[(0,n.jsx)(c.Z,{src:"/assets/images/vendor/chrome.svg",alt:"Chrome Logo",className:"rounded-none bg-transparent"}),(0,n.jsx)(c.Z,{src:"/assets/images/vendor/brave.svg",alt:"Brave Logo",className:"rounded-none bg-transparent"}),(0,n.jsx)(c.Z,{src:"/assets/images/vendor/edge.svg",alt:"Edge Logo",className:"rounded-none bg-transparent"})]}),(0,n.jsx)(i,{href:p.JR,children:(0,n.jsx)(c.Z,{src:"/assets/images/vendor/firefox.svg",alt:"Firefox Logo",className:"rounded-none bg-transparent"})})]})]})]})}}},function(e){e.O(0,[5561,6473,194,9774,2888,179],function(){return e(e.s=49772)}),_N_E=e.O()}]);