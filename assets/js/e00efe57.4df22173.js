"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[2707],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6386:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7378),l=n(8944),o="tabItem_wHwb",r=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function d({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,l.Z)(o,n)},{hidden:t}),e)}},7789:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(7378),l=n(8944),o=n(4185),r=n(7886),i=n(7184),s=n(2112),u="tabList_J5MA",c="tabItem_l0OV",d=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&k(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&k(e,n,t[n]);return e};function g(e){var t,n;const{lazy:o,block:d,defaultValue:f,values:b,groupId:v,className:k}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=b?b:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),w=(0,r.l)(y,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(n=null!=f?f:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==O&&!y.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:D}=(0,i.U)(),[T,x]=(0,a.useState)(O),j=[],{blockElementScrollPositionUntilNextRender:I}=(0,s.o5)();if(null!=v){const e=N[v];null!=e&&e!==T&&y.some((t=>t.value===e))&&x(e)}const S=e=>{const t=e.currentTarget,n=j.indexOf(t),a=y[n].value;a!==T&&(I(t),x(a),null!=v&&D(v,String(a)))},M=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;a=null!=(t=j[n])?t:j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;a=null!=(n=j[t])?n:j[j.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},y.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(o=h({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>j.push(e),onKeyDown:M,onFocus:S,onClick:S},n),r={className:(0,l.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":T===e})},p(o,m(r))),null!=t?t:e);var o,r}))),o?(0,a.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function y(e){const t=(0,o.Z)();return a.createElement(g,h({key:String(t)},e))}},1674:function(e,t,n){var a=n(3445);const l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),r=l?"ios":"android",i=l?"macos":o?"windows":"linux";t.Z={defaultGuide:"dep-install",defaultGuideDocker:"docker-install",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",defaultAndroidLanguage:"java",javaScriptSpecLanguages:[{label:"Flow",value:"flow"},{label:"TypeScript",value:"typescript"}],defaultJavaScriptSpecLanguages:"flow",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),getLibraryNotesTabs:(e=["researchers","data_scientist","engineer"])=>[e.includes("researchers")?{label:"Researchers",value:"researchers"}:void 0,e.includes("data_scientist")?{label:"Data Scientist",value:"data_scientist"}:void 0,e.includes("engineer")?{label:"Python Engineer",value:"engineer"}:void 0].filter(Boolean),guides:[{label:"Install Dependencies",value:"dep-install"}],guidesDocker:[{label:"Installing Docker Images",value:"docker-install"}],oses:[{label:"macOS",value:"macos"},{label:"Linux",value:"linux"},{label:"Windows",value:"windows"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},5519:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return v},default:function(){return w},frontMatter:function(){return b},metadata:function(){return k},toc:function(){return g}});var a=n(5318),l=n(7789),o=n(6386),r=n(1674),i=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&m(e,n,t[n]);return e};const b={id:"openface-docker-installation",title:"OpenFace Installation",description:"OpenDBM needs you to install OpenFace Model before running OpenDBM Facial and Movement components",hide_table_of_contents:!0},v=void 0,k={unversionedId:"openface-docker-installation",id:"version-2.1/openface-docker-installation",title:"OpenFace Installation",description:"OpenDBM needs you to install OpenFace Model before running OpenDBM Facial and Movement components",source:"@site/versioned_docs/version-2.1/openface-docker-installation.md",sourceDirName:".",slug:"/openface-docker-installation",permalink:"/open_dbm/docs/openface-docker-installation",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/openface-docker-installation.md",tags:[],version:"2.1",lastUpdatedAt:1664889437,formattedLastUpdatedAt:"10/4/2022",frontMatter:{id:"openface-docker-installation",title:"OpenFace Installation",description:"OpenDBM needs you to install OpenFace Model before running OpenDBM Facial and Movement components",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Dependencies Installation",permalink:"/open_dbm/docs/dependencies-installation"},next:{title:"Basic Usage",permalink:"/open_dbm/docs/basic-usage"}},h={},g=[{value:"If you have installed Docker",id:"if-you-have-installed-docker",level:2},{value:"If you haven&#39;t, here&#39;s the instruction on how to install Docker",id:"if-you-havent-heres-the-instruction-on-how-to-install-docker",level:2},{value:"Development OS",id:"development-os",level:4}],y={toc:g};function w(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},y),m),s(t,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"This page will help you install OpenFace model that is stored as Docker Image, starting from on how to install the docker."),(0,a.kt)(l.Z,{groupId:"guide",defaultValue:r.Z.defaultGuideDocker,values:r.Z.guidesDocker,mdxType:"Tabs"},(0,a.kt)(o.Z,{value:r.Z.defaultGuideDocker,mdxType:"TabItem"},(0,a.kt)("h2",f({},{id:"if-you-have-installed-docker"}),"If you have installed Docker"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": Make sure to sign in first so you can download the docker image"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"../docs/assets/docker-signin.png",width:"30%",alt:"OpenDBM Folder"})),(0,a.kt)("p",null,"And then execute this command to download OpenFace model"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-bash"}),"docker pull opendbmteam/dbm-openface\n")),(0,a.kt)("p",null,"Done!"),(0,a.kt)("h2",f({},{id:"if-you-havent-heres-the-instruction-on-how-to-install-docker"}),"If you haven't, here's the instruction on how to install Docker"),(0,a.kt)("p",null,"The instructions are a bit different depending on your development operating system."),(0,a.kt)("h4",f({},{id:"development-os"}),"Development OS"),(0,a.kt)(l.Z,{groupId:"os",defaultValue:r.Z.defaultOs,values:r.Z.oses,className:"pill-tabs",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"macos",mdxType:"TabItem"},(0,a.kt)("p",null,"Follow the instruction in the ",(0,a.kt)("a",f({parentName:"p"},{href:"https://docs.docker.com/desktop/install/mac-install/"}),"official website"))),(0,a.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,a.kt)("p",null,"Follow the instruction in the ",(0,a.kt)("a",f({parentName:"p"},{href:"https://docs.docker.com/desktop/install/linux-install/"}),"official website"))),(0,a.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the instruction in the ",(0,a.kt)("a",f({parentName:"p"},{href:"https://docs.docker.com/desktop/install/windows-install/"}),"official website")),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("strong",{parentName:"p"},"IMPORTANT NOTE"),": "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Please follow the instructions to install ",(0,a.kt)("strong",{parentName:"li"},"WSL-2")," as system requirements instead of Hyper-V. Because we relying on WSL command to execute OpenFace Model."),(0,a.kt)("li",{parentName:"ul"},"After you installed WSL in ",(0,a.kt)("a",f({parentName:"li"},{href:"https://docs.microsoft.com/en-us/windows/wsl/install"}),"Linux kernel update package"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Make sure to execute "wsl --set-default-version 2"'),(0,a.kt)("li",{parentName:"ul"},"Make sure to choose Ubuntu as Linux distribution of choice",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"wsl -l -o")," to list distribution"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"wsl --install -d Ubuntu-18.04")," to install Ubuntu Distribution")))))))),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"../docs/assets/ubuntu-wsl.png",width:"70%",alt:"OpenDBM Folder"}),(0,a.kt)("figcaption",null,"Example on how to List Distribution and Install Ubuntu")),(0,a.kt)("ol",f({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"After WSL and Docker is installed. check if Docker use WSL Integration by go to the Settings > Resources > WSL Integrations, and then enable Ubuntu as our Linux Distribution.",(0,a.kt)("figure",null,(0,a.kt)("img",{src:"../docs/assets/ubuntu-enable-docker.png",width:"100%",alt:"OpenDBM Folder"}),(0,a.kt)("figcaption",null,"WSL Integration in Docker Setting")))),(0,a.kt)("ol",f({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Make sure check and set wsl distributions to Linux distributions of your choice. In powershell/command prompt:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type ",(0,a.kt)("strong",{parentName:"li"},"wsl --list")," to check WSL distributions list"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"wsl --setdefault {Distribution Name}")," to set the default distribution ",(0,a.kt)("strong",{parentName:"li"},"(Use Ubuntu)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"wsl --list")," again to check if wsl default is set")))),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"../docs/assets/ubuntu-set-dist.png",width:"100%",alt:"OpenDBM Folder"}),(0,a.kt)("figcaption",null,"Set Default WSL")),(0,a.kt)("ol",f({},{start:4}),(0,a.kt)("li",{parentName:"ol"},"And it's done! Now you can go to the next step by pulling the docker image from the step ",(0,a.kt)("a",f({parentName:"li"},{href:"#top"}),"above"))))))))}w.isMDXComponent=!0}}]);