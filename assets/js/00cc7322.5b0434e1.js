"use strict";(self.webpackChunkeffective_shell=self.webpackChunkeffective_shell||[]).push([[8055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,h=m["".concat(o,".").concat(u)]||m[u]||c[u]||l;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={},i=void 0,p={unversionedId:"xx-appendices/shell-parameter-expansion",id:"xx-appendices/shell-parameter-expansion",title:"shell-parameter-expansion",description:"| Variable           | Description                                                                                   |",source:"@site/docs/xx-appendices/shell-parameter-expansion.md",sourceDirName:"xx-appendices",slug:"/xx-appendices/shell-parameter-expansion",permalink:"/xx-appendices/shell-parameter-expansion",draft:!1,editUrl:"https://github.com/dwmkerr/effective-shell/edit/main/docs/xx-appendices/shell-parameter-expansion.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Recommended Reading",permalink:"/xx-appendices/recommended-reading/"},next:{title:"Thanks",permalink:"/appendices/thanks/"}},o={},d=[{value:"TODO",id:"todo",level:2}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$$")),(0,a.kt)("td",{parentName:"tr",align:null},"This is the process ID of the script itself.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$0")),(0,a.kt)("td",{parentName:"tr",align:null},"The first parameter to the shell, which is typically the path of the shell itself. If this parameter starts with ",(0,a.kt)("inlineCode",{parentName:"td"},"-")," then the shell is assumed to be a Login Shell.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$-")),(0,a.kt)("td",{parentName:"tr",align:null},"The flags that were set for the shell, such as ",(0,a.kt)("inlineCode",{parentName:"td"},"i")," for 'interactive'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$0")),(0,a.kt)("td",{parentName:"tr",align:null},"The first parameter to the shell, which is typically the path of the shell itself.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$1")),(0,a.kt)("td",{parentName:"tr",align:null},"The first parameter")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$2")),(0,a.kt)("td",{parentName:"tr",align:null},"The second parameter")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"${11}")),(0,a.kt)("td",{parentName:"tr",align:null},"The 11th parameter - if the parameter is more than one digit you must surround it with braces")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$#")),(0,a.kt)("td",{parentName:"tr",align:null},"The number of parameters")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$@")),(0,a.kt)("td",{parentName:"tr",align:null},"The full set of parameters as an array")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$*")),(0,a.kt)("td",{parentName:"tr",align:null},"The full set of parameters as a string separated by the first value in the ",(0,a.kt)("inlineCode",{parentName:"td"},"$IFS")," variable")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"${@:start:count}")),(0,a.kt)("td",{parentName:"tr",align:null},"A subset of 'count' parameters starting at parameter number 'start'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$?")),(0,a.kt)("td",{parentName:"tr",align:null},"The status code of the most recently called command.")))),(0,a.kt)("h2",{id:"todo"},"TODO"),(0,a.kt)("p",null,"Need to update Chapter 19 to link to this."))}m.isMDXComponent=!0}}]);