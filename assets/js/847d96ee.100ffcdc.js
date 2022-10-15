"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[6094],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6360:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return p},metadata:function(){return f},toc:function(){return y}});var r=n(5318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e};const p={id:"audio-intensity",title:"Audio Intensity"},m=void 0,f={unversionedId:"audio-intensity",id:"version-2.1/audio-intensity",title:"Audio Intensity",description:"Audio intensity is the loudness of a sound, measured in decibels (dB).",source:"@site/versioned_docs/version-2.1/audio-intensity.md",sourceDirName:".",slug:"/audio-intensity",permalink:"/open_dbm/docs/audio-intensity",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/audio-intensity.md",tags:[],version:"2.1",lastUpdatedAt:1664889437,formattedLastUpdatedAt:"10/4/2022",frontMatter:{id:"audio-intensity",title:"Audio Intensity"},sidebar:"variable",previous:{title:"Formant Frequencies",permalink:"/open_dbm/docs/formant-frequencies"},next:{title:"Harmonics-to-noise Ratio (HNR)",permalink:"/open_dbm/docs/harmonics-to-noise-ratio"}},b={},y=[{value:"Raw Variables",id:"raw-variables",level:2},{value:"Derived Variables",id:"derived-variables",level:2}],v={toc:y};function k(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},v),u),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Audio intensity is the loudness of a sound, measured in decibels (dB). "),(0,r.kt)("h2",c({},{id:"raw-variables"}),"Raw Variables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Variable"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"aco_int")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Audio intensity.")," Frame-wise intensity of the audio file, measured in dB.")))),(0,r.kt)("h2",c({},{id:"derived-variables"}),"Derived Variables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Variable"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"aco_int_mean")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Audio intensity mean.")," Mean of ",(0,r.kt)("inlineCode",{parentName:"td"},"aco_int")," across the audio file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"aco_int_std")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Audio intensity standard deviation.")," Standard deviation of ",(0,r.kt)("inlineCode",{parentName:"td"},"aco_int")," across the audio file.")))))}k.isMDXComponent=!0}}]);