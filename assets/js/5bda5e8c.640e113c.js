"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[8829],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=m(n),s=r,d=f["".concat(p,".").concat(s)]||f[s]||u[s]||l;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4082:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return g}});var a=n(5318),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))m.call(t,n)&&c(e,n,t[n]);return e};const f={},s="Table of Contents",d={unversionedId:"movement-api",id:"movement-api",title:"Table of Contents",description:"* api",source:"@site/api/movement-api.md",sourceDirName:".",slug:"/movement-api",permalink:"/open_dbm/api/movement-api",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/api/movement-api.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Table of Contents",permalink:"/open_dbm/api/facial-activity-api"},next:{title:"Table of Contents",permalink:"/open_dbm/api/verbal-acoustics-api"}},k={},g=[{value:"Movement Objects",id:"movement-objects",level:2},{value:"fit",id:"fit",level:4},{value:"Parameters",id:"parameters",level:2},{value:"get_eye_blink",id:"get_eye_blink",level:4},{value:"get_eye_gaze",id:"get_eye_gaze",level:4},{value:"get_facial_tremor",id:"get_facial_tremor",level:4},{value:"get_head_movement",id:"get_head_movement",level:4},{value:"get_vocal_tremor",id:"get_vocal_tremor",level:4}],v={toc:g};function b(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},v),c),l(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"table-of-contents"}),"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#api"}),"api"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#api.Movement"}),"Movement"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#api.Movement.fit"}),"fit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#api.Movement.get_eye_blink"}),"get","_","eye","_","blink")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#api.Movement.get_eye_gaze"}),"get","_","eye","_","gaze")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#api.Movement.get_facial_tremor"}),"get","_","facial","_","tremor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#api.Movement.get_head_movement"}),"get","_","head","_","movement")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#api.Movement.get_vocal_tremor"}),"get","_","vocal","_","tremor"))))))),(0,a.kt)("a",{id:"api"}),(0,a.kt)("h1",u({},{id:"api"}),"api"),(0,a.kt)("a",{id:"api.Movement"}),(0,a.kt)("h2",u({},{id:"movement-objects"}),"Movement Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-python"}),"class Movement(VideoModel)\n")),(0,a.kt)("a",{id:"api.Movement.fit"}),(0,a.kt)("h4",u({},{id:"fit"}),"fit"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-python"}),"def fit(path)\n")),(0,a.kt)("p",null,"Fit a file in filepath to OpenFace Model. Make sure to set the Docker to be active first.\nFor installation, see ",(0,a.kt)("a",u({parentName:"p"},{href:"https://aicure.github.io/open_dbm/docs/openface-docker-installation"}),"https://aicure.github.io/open_dbm/docs/openface-docker-installation")),(0,a.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,a.kt)("p",null,"path : string,\nFile Path of MP4/MOV file."),(0,a.kt)("a",{id:"api.Movement.get_eye_blink"}),(0,a.kt)("h4",u({},{id:"get_eye_blink"}),"get","_","eye","_","blink"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-python"}),"def get_eye_blink()\n")),(0,a.kt)("p",null,"Get the model object of Eye Blink"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"self")," - object")),(0,a.kt)("a",{id:"api.Movement.get_eye_gaze"}),(0,a.kt)("h4",u({},{id:"get_eye_gaze"}),"get","_","eye","_","gaze"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-python"}),"def get_eye_gaze()\n")),(0,a.kt)("p",null,"Get the model object of Eye Gaze"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"self")," - object\nModel Object")),(0,a.kt)("a",{id:"api.Movement.get_facial_tremor"}),(0,a.kt)("h4",u({},{id:"get_facial_tremor"}),"get","_","facial","_","tremor"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-python"}),"def get_facial_tremor()\n")),(0,a.kt)("p",null,"Get the model object of Facial Tremor"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"self")," - object\nModel Object")),(0,a.kt)("a",{id:"api.Movement.get_head_movement"}),(0,a.kt)("h4",u({},{id:"get_head_movement"}),"get","_","head","_","movement"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-python"}),"def get_head_movement()\n")),(0,a.kt)("p",null,"Get the model object of Head Movement"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"self")," - object\nModel Object")),(0,a.kt)("a",{id:"api.Movement.get_vocal_tremor"}),(0,a.kt)("h4",u({},{id:"get_vocal_tremor"}),"get","_","vocal","_","tremor"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-python"}),"def get_vocal_tremor()\n")),(0,a.kt)("p",null,"Get the model object of Vocal Tremor"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"self")," - object\nModel Object")))}b.isMDXComponent=!0}}]);