"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[2912],{5318:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9853:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return v}});var n=r(5318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e};const d={id:"rate-of-speech",title:"Rate of Speech"},m=void 0,f={unversionedId:"rate-of-speech",id:"version-2.0/rate-of-speech",title:"Rate of Speech",description:"Rate of speech is simply a measure of words spoken per given unit of time. We measure this in words spoken per minute. However, for convenience, we are also outputting as a variable simply the length of the file that was analyzed and hence multiplying nlpwordsPerMinmean by nlptotalTimemean will give the total number of words spoken.",source:"@site/versioned_docs/version-2.0/rate-of-speech.md",sourceDirName:".",slug:"/rate-of-speech",permalink:"/open_dbm/docs/2.0/rate-of-speech",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/rate-of-speech.md",tags:[],version:"2.0",lastUpdatedAt:1664889437,formattedLastUpdatedAt:"10/4/2022",frontMatter:{id:"rate-of-speech",title:"Rate of Speech"},sidebar:"variable",previous:{title:"Lexical Richness",permalink:"/open_dbm/docs/2.0/lexical-richness"},next:{title:"Head Movement",permalink:"/open_dbm/docs/2.0/head-movement"}},b={},v=[{value:"Derived Variables",id:"derived-variables",level:2}],h={toc:v};function y(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},h),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Rate of speech is simply a measure of words spoken per given unit of time. We measure this in words spoken per minute. However, for convenience, we are also outputting as a variable simply the length of the file that was analyzed and hence multiplying ",(0,n.kt)("inlineCode",{parentName:"p"},"nlp_wordsPerMin_mean")," by ",(0,n.kt)("inlineCode",{parentName:"p"},"nlp_totalTime_mean")," will give the total number of words spoken. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Please note that the latter measurement is in seconds, so one would have to divide it by 60 first :)")),(0,n.kt)("h2",u({},{id:"derived-variables"}),"Derived Variables"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Variable"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"nlp_wordsPerMin_mean")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Rate of speech"),", in average number of words spoken per minute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"nlp_totalTime_mean")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Total time in seconds"),", of the video or audio file from which the rate of speech measurement was acquired.")))))}y.isMDXComponent=!0}}]);