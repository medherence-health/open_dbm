"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[3085],{3410:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(7378),a=t(8944),l=t(8120),i=t(1149),o=t(8730),c=t(572),s=t(8159),m="mdxPageWrapper_sagS";function u(e){const{content:n}=e,{metadata:{title:t,description:u,frontMatter:f}}=n,{wrapperClassName:d,hide_table_of_contents:v}=f;return r.createElement(l.FG,{className:(0,a.Z)(null!=d?d:i.k.wrapper.mdxPages,i.k.page.mdxPage)},r.createElement(l.d,{title:t,description:u}),r.createElement(o.Z,null,r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",m)},r.createElement("div",{className:(0,a.Z)("col",!v&&"col--8")},r.createElement(c.Z,null,r.createElement(n,null))),!v&&n.toc&&r.createElement("div",{className:"col col--2"},r.createElement(s.Z,{toc:n.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level}))))))}},8159:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(7378),a=t(8944),l=t(8251),i="tableOfContents_XG6w",o=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function v(e){var n,t=e,{className:o}=t,v=((e,n)=>{var t={};for(var r in e)u.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&m)for(var r of m(e))n.indexOf(r)<0&&f.call(e,r)&&(t[r]=e[r]);return t})(t,["className"]);return r.createElement("div",{className:(0,a.Z)(i,"thin-scrollbar",o)},r.createElement(l.Z,(n=((e,n)=>{for(var t in n||(n={}))u.call(n,t)&&d(e,t,n[t]);if(m)for(var t of m(n))f.call(n,t)&&d(e,t,n[t]);return e})({},v),c(n,s({linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))))}},8251:function(e,n,t){t.d(n,{Z:function(){return C}});var r=t(7378),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&m(e,t,n[t]);if(o)for(var t of o(n))s.call(n,t)&&m(e,t,n[t]);return e},f=(e,n)=>l(e,i(n));function d(e){const n=e.map((e=>f(u({},e),{parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const t=e,{parentIndex:a}=t,l=((e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t})(t,["parentIndex"]);a>=0?n[a].children.push(l):r.push(l)})),r}function v({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return e.flatMap((e=>{const r=v({toc:e.children,minHeadingLevel:n,maxHeadingLevel:t});return function(e){return e.level>=n&&e.level<=t}(e)?[f(u({},e),{children:r})]:r}))}var p=t(7371);function g(e){const n=e.getBoundingClientRect();return n.top===n.bottom?g(e.parentNode):n}function b(e,{anchorTopOffset:n}){var t,r;const a=e.find((e=>g(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(g(a))?a:null!=(t=e[e.indexOf(a)-1])?t:null}return null!=(r=e[e.length-1])?r:null}function h(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,p.L)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function O(e){const n=(0,r.useRef)(void 0),t=h();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),o=function({minHeadingLevel:e,maxHeadingLevel:n}){const t=[];for(let r=e;r<=n;r+=1)t.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=b(o,{anchorTopOffset:t.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var L=r.memo((function e({toc:n,className:t,linkClassName:a,isChild:l}){return n.length?r.createElement("ul",{className:l?void 0:t},n.map((n=>r.createElement("li",{key:n.id},r.createElement("a",{href:`#${n.id}`,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:n.value}}),r.createElement(e,{isChild:!0,toc:n.children,className:t,linkClassName:a}))))):null})),y=Object.defineProperty,N=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,H=(e,n,t)=>n in e?y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function C(e){var n=e,{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:o,maxHeadingLevel:c}=n,s=((e,n)=>{var t={};for(var r in e)x.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&N)for(var r of N(e))n.indexOf(r)<0&&E.call(e,r)&&(t[r]=e[r]);return t})(n,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const m=(0,p.L)(),u=null!=o?o:m.tableOfContents.minHeadingLevel,f=null!=c?c:m.tableOfContents.maxHeadingLevel,g=function({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return(0,r.useMemo)((()=>v({toc:d(e),minHeadingLevel:n,maxHeadingLevel:t})),[e,n,t])}({toc:t,minHeadingLevel:u,maxHeadingLevel:f});return O((0,r.useMemo)((()=>{if(l&&i)return{linkClassName:l,linkActiveClassName:i,minHeadingLevel:u,maxHeadingLevel:f}}),[l,i,u,f])),r.createElement(L,((e,n)=>{for(var t in n||(n={}))x.call(n,t)&&H(e,t,n[t]);if(N)for(var t of N(n))E.call(n,t)&&H(e,t,n[t]);return e})({toc:g,className:a,linkClassName:l},s))}}}]);