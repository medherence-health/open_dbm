"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[8610],{2073:function(e,t,a){a.d(t,{Z:function(){return O}});var r=a(7378),l=a(8944),n=a(8730),o=a(9453),i=a(3067),s=a(6381),c="sidebar_brwN",m="sidebarHeader_yTb0",u="sidebarItemTitle_r4Q1",p="sidebarItemList_QwSx",g="sidebarItem_lnhn",d="sidebarItemLink_yNGZ",b="sidebarItemLinkActive_oSRm";function f({sidebar:e}){let t=null;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},e.title),r.createElement("ul",{className:(0,l.Z)(p,"clean-list")},e.items.map((e=>{const a=e.permalink.split("/")[2],l=t!==a&&r.createElement("h5",{className:u},a);return t=a,r.createElement(r.Fragment,null,l,r.createElement("li",{key:e.permalink,className:g},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:b},e.title)))})))))}var h=a(8561),E="sidebarItemTitle_z3uL";function v({sidebar:e}){let t=null;return r.createElement("ul",{className:"menu__list blog-menu__list"},e.items.map((e=>{const a=e.permalink.split("/")[2],l=t!==a&&r.createElement("h5",{className:E},a);return t=a,r.createElement(r.Fragment,null,l,r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))})))}function _(e){return r.createElement(h.Zo,{component:v,props:e})}function N({sidebar:e}){const t=(0,o.i)();return(null==e?void 0:e.items.length)?"mobile"===t?r.createElement(_,{sidebar:e}):r.createElement(f,{sidebar:e}):null}var y=Object.defineProperty,P=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,w=(e,t,a)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function O(e){const t=e,{sidebar:a,toc:o,children:i}=t,s=((e,t)=>{var a={};for(var r in e)Z.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&P)for(var r of P(e))t.indexOf(r)<0&&k.call(e,r)&&(a[r]=e[r]);return a})(t,["sidebar","toc","children"]),c=a&&a.items.length>0;return r.createElement(n.Z,((e,t)=>{for(var a in t||(t={}))Z.call(t,a)&&w(e,a,t[a]);if(P)for(var a of P(t))k.call(t,a)&&w(e,a,t[a]);return e})({},s),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(N,{sidebar:a}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},i),o&&r.createElement("div",{className:"col col--2"},o))))}},4284:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7378),l=a(6381),n=a(7007);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(n.Z,{permalink:a,title:r.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&r.createElement(n.Z,{permalink:o,title:r.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},6111:function(e,t,a){a.d(t,{Z:function(){return R}});var r=a(7378),l=a(8944),n=a(6381),o=a(3067),i=a(1448),s=a(3523),c=a(120),m=a(572),u=a(6924),p=a(7226),g=Object.defineProperty,d=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function E(e){return e.href?r.createElement(o.Z,((e,t)=>{for(var a in t||(t={}))b.call(t,a)&&h(e,a,t[a]);if(d)for(var a of d(t))f.call(t,a)&&h(e,a,t[a]);return e})({},e)):r.createElement(r.Fragment,null,e.children)}function v({author:e}){const{name:t,title:a,url:l,imageURL:n,email:o}=e,i=l||o&&`mailto:${o}`||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},n&&r.createElement(E,{href:i,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:n,alt:t})),t&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(E,{href:i,itemProp:"url"},r.createElement("span",{itemProp:"name"},t))),a&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))}var _="authorCol_Ff98",N="imageOnlyAuthorRow_Jo24",y="imageOnlyAuthorCol_NfQC",P=Object.defineProperty,Z=Object.defineProperties,k=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,I=(e,t,a)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,x=(e,t)=>{for(var a in t||(t={}))O.call(t,a)&&I(e,a,t[a]);if(w)for(var a of w(t))T.call(t,a)&&I(e,a,t[a]);return e};function j({authors:e,assets:t}){if(0===e.length)return null;const a=e.every((({name:e})=>!e));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",a?N:"row")},e.map(((e,n)=>{var o,i,s;return r.createElement("div",{className:(0,l.Z)(!a&&"col col--6",a?y:_),key:n},r.createElement(v,{author:(i=x({},e),s={imageURL:null!=(o=t.authorsImageUrls[n])?o:e.imageURL},Z(i,k(s)))}))})))}var L="blogPostTitle_VoM3",F="blogPostData_Y38s",M="blogPostDetailsFull_GLs6";function R(e){var t;const a=function(){const{selectMessage:e}=(0,s.c)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:g}=(0,i.C)(),{children:d,frontMatter:b,assets:f,metadata:h,truncated:E,isBlogPostPage:v=!1}=e,{date:_,formattedDate:N,permalink:y,tags:P,readingTime:Z,title:k,editUrl:w,authors:O}=h,T=null!=(t=f.image)?t:b.image,I=!v&&E,x=P.length>0,R=v?"h1":"h2";return r.createElement("article",{className:v?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(R,{className:L,itemProp:"headline"},v?k:r.createElement(o.Z,{itemProp:"url",to:y},k)),r.createElement("div",{className:(0,l.Z)(F,"margin-vert--md")},r.createElement("time",{dateTime:_,itemProp:"datePublished"},N),void 0!==Z&&r.createElement(r.Fragment,null," \xb7 ",a(Z))),r.createElement(j,{authors:O,assets:f})),T&&r.createElement("meta",{itemProp:"image",content:g(T,{absolute:!0})}),r.createElement("div",{id:v?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(m.Z,null,d)),(x||E)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",v&&M)},x&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":I})},r.createElement(p.Z,{tags:P})),v&&w&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:w})),I&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":x})},r.createElement(o.Z,{to:h.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:k})},r.createElement("b",null,r.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},5874:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(7378),l=a(8944),n=a(6381),o=a(3523),i=a(8120),s=a(1149),c=a(3067),m=a(2073),u=a(6111),p=a(4284),g=a(512);function d({tag:e,items:t,sidebar:a,listMetadata:d}){const b=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,n.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),f=(0,n.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:b(e.count),tagName:e.label});return r.createElement(i.FG,{className:(0,l.Z)(s.k.wrapper.blogPages,s.k.page.blogTagPostListPage)},r.createElement(i.d,{title:f}),r.createElement(g.Z,{tag:"blog_tags_posts"}),r.createElement(m.Z,{sidebar:a},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,f),r.createElement(c.Z,{href:e.allTagsPath},r.createElement(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),t.map((({content:e})=>r.createElement(u.Z,{key:e.metadata.permalink,frontMatter:e.frontMatter,assets:e.assets,metadata:e.metadata,truncated:!0},r.createElement(e,null)))),r.createElement(p.Z,{metadata:d})))}},6924:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7378),l=a(6381),n=a(1149),o=a(8944),i="iconEdit_VEMf",s=Object.defineProperty,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function g(e){var t=e,{className:a}=t,l=((e,t)=>{var a={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a})(t,["className"]);return r.createElement("svg",((e,t)=>{for(var a in t||(t={}))m.call(t,a)&&p(e,a,t[a]);if(c)for(var a of c(t))u.call(t,a)&&p(e,a,t[a]);return e})({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(i,a),"aria-hidden":"true"},l),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d({editUrl:e}){return r.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:n.k.common.editThisPage},r.createElement(g,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7007:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7378),l=a(8944),n=a(3067);function o(e){const{permalink:t,title:a,subLabel:o,isNext:i}=e;return r.createElement(n.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&r.createElement("div",{className:"pagination-nav__sublabel"},o),r.createElement("div",{className:"pagination-nav__label"},a))}},3127:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7378),l=a(8944),n=a(3067),o="tag_otG2",i="tagRegular_s0E1",s="tagWithCount_PGyn";function c({permalink:e,label:t,count:a}){return r.createElement(n.Z,{href:e,className:(0,l.Z)(o,a?s:i)},t,a&&r.createElement("span",null,a))}},7226:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7378),l=a(8944),n=a(6381),o=a(3127),i="tags_Ow0B",s="tag_DFxh";function c({tags:e}){return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(i,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>r.createElement("li",{key:t,className:s},r.createElement(o.Z,{label:e,permalink:t}))))))}},3523:function(e,t,a){a.d(t,{c:function(){return c}});var r=a(7378),l=a(2676);const n=["zero","one","two","few","many","other"];function o(e){return n.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}}]);