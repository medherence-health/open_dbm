"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[4316],{5318:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(7378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,l(l({ref:e},c),{},{components:n})):a.createElement(f,l({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9665:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return b}});var a=n(5318),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&c(t,n,e[n]);if(o)for(var n of o(e))s.call(e,n)&&c(t,n,e[n]);return t};const u={id:"action-units",title:"Action units"},m=void 0,f={unversionedId:"action-units",id:"version-2.0/action-units",title:"Action units",description:"Action units (AUs) are individual facial musculature arrangements specified in the Facial Action Coding System (FACS), combinations of which can account for all possible facial expressions. OpenDBM outputs framewise values for AU presence and intensity for the following AUs:",source:"@site/versioned_docs/version-2.0/action-units.md",sourceDirName:".",slug:"/action-units",permalink:"/open_dbm/docs/2.0/action-units",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/action-units.md",tags:[],version:"2.0",lastUpdatedAt:1664889437,formattedLastUpdatedAt:"10/4/2022",frontMatter:{id:"action-units",title:"Action units"},sidebar:"variable",previous:{title:"Facial Landmark",permalink:"/open_dbm/docs/2.0/facial-landmark"},next:{title:"Emotional Expressivity",permalink:"/open_dbm/docs/2.0/emotional-expressivity"}},k={},b=[{value:"Raw Variables",id:"raw-variables",level:2},{value:"Derived Variables",id:"derived-variables",level:2}],N={toc:b};function g(t){var e,n=t,{components:r}=n,c=((t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&o)for(var a of o(t))e.indexOf(a)<0&&s.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=d(d({},N),c),i(e,l({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Action units (AUs) are individual facial musculature arrangements specified in the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Facial_Action_Coding_System"}),"Facial Action Coding System (FACS)"),", combinations of which can account for all possible facial expressions",(0,a.kt)("sup",d({parentName:"p"},{id:"fnref-1"}),(0,a.kt)("a",d({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),". OpenDBM outputs framewise values for AU presence and intensity for the following AUs: "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Action unit number"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AU1"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Inner brow raiser")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AU2"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Outer brow raiser")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AU4"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Brow lowerer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AU5"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Upper lid raiser")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AU6"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Cheek raiser")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AU7"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Lid tightener")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AU9"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Nose wrinkler")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AU12"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Lip corner puller")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AU15"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Lip corner depressor")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AU16"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Lower lip depressor")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AU20"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Lip stretcher")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AU23"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Lip tightener")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AU26"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Jaw drop")))),(0,a.kt)("p",null,"For each of the AUs in the table above, the following raw variables are calculated:"),(0,a.kt)("h2",d({},{id:"raw-variables"}),"Raw Variables"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Variable"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"fac_auXXpres")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Action Unit presence,")," where XX refers to the action unit. This is a binary (1/0) variable, where 1 signifies presence of the action unit and 0 signifies its absence as determined by OpenFace.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"fac_auXXint")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Action Unit intensity,")," where XX refers to the action unit. This is a continuous (0-5) variable, where 0 signifies no presence and 5 signifies maximum presence, as determined by OpenFace.")))),(0,a.kt)("h2",d({},{id:"derived-variables"}),"Derived Variables"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Variable"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"fac_auXXpres_pct")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Action Unit presence percentage.")," Using the binary vector fac_auXXpres, the percentage of video frames where an AU was present is calculated into this variable.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"fac_auXXint_mean")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Action Unit intensity mean.")," Mean value of fac_auXXint over the course of the video.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"fac_auXXint_std")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Action Unit intensity standard deviation.")," Standard deviation of fac_auXXint over the course of the video.")))),(0,a.kt)("div",d({},{className:"footnotes"}),(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",d({parentName:"ol"},{id:"fn-1"}),"Ekman, R. (1997). What the face reveals: Basic and applied studies of spontaneous expression using the Facial Action Coding System (FACS). Oxford University Press, USA.",(0,a.kt)("a",d({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}g.isMDXComponent=!0}}]);