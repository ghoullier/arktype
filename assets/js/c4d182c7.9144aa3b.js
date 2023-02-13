"use strict";(self.webpackChunkarktype_io=self.webpackChunkarktype_io||[]).push([[5816],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=l(t),m=a,d=y["".concat(s,".").concat(m)]||y[m]||c[m]||o;return t?r.createElement(d,p(p({ref:n},u),{},{components:t})):r.createElement(d,p({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},3790:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(4250),a=t(7075),o=(t(9496),t(9613)),p=["components"],i={},s="Usage",l={unversionedId:"examples/type",id:"examples/type",title:"Usage",description:"You already know how to write TS types, why not write save time and write validators and types together",source:"@site/docs/examples/type.mdx",sourceDirName:"examples",slug:"/examples/type",permalink:"/docs/next/examples/type",draft:!1,tags:[],version:"current",frontMatter:{}},u={},c=[{value:"Creating an object",id:"creating-an-object",level:2},{value:"Optional keys",id:"optional-keys",level:2},{value:"Bounds",id:"bounds",level:2},{value:"Tuples",id:"Tuples",level:2},{value:"Intersections and Unions",id:"intersections-and-unions",level:2},{value:"Cyclic Data",id:"cyclic-data",level:2}],y={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("p",null,"You already know how to write TS types, why not write save time and write validators and types together"),(0,o.kt)("h2",{id:"creating-an-object"},"Creating an object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { type } from "arktype"\n\nconst user = type({\n    name: "string",\n    users: "number"\n})\n\n// extracting the type is as easy as inferring your Arktype definition\ntype User = typeof user.infer\n\nuser({\n    name: "Arktype",\n    users: 2\n})\n// {data: { name: \'Arktype\', users: 2 }}\n')),(0,o.kt)("h2",{id:"optional-keys"},"Optional keys"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { type } from "arktype"\nconst user = type({ name: "string", "yearsOfExperience?": "number" })\n\ntype User = typeof user.infer\n//  {\n//      name: string;\n//      yearsOfExperience?: number;\n//  }\n\nuser({ name: "David" })\n// {data: { name: \'David\'}}\n')),(0,o.kt)("h2",{id:"bounds"},"Bounds"),(0,o.kt)("p",null,"Looking to constrain your data?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { type } from "arktype"\n\n// single bound\ntype("number<5")\ntype("number<=5")\ntype("number>5")\ntype("number>=5")\n\n//double bound\ntype("2<number<5")\ntype("2<=number<=5")\n')),(0,o.kt)("p",null,"Bounds can be applied to: ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," ",(0,o.kt)("inlineCode",{parentName:"p"},"(string | number)[ ]")," ",(0,o.kt)("a",{parentName:"p",href:"#Tuples"},"Tuples")),(0,o.kt)("h2",{id:"Tuples"},"Tuples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { type } from "arktype"\n\nconst tuple = type(["string", "number", "string"])\ntuple.check(["EZ", 0, "MOOCHI"])\n// { data: [ \'EZ\', 0, \'MOOCHI\' ] }\n')),(0,o.kt)("h2",{id:"intersections-and-unions"},"Intersections and Unions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const union = type("string|number")\ntypeof union // string|number\n\nconst intersection = type("string&number")\ntypeof intersection // never\n')),(0,o.kt)("h2",{id:"cyclic-data"},"Cyclic Data"),(0,o.kt)("p",null,"We handle those cycles with ease! Cycle away!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'scope({\n    three: "3",\n    sixty: "60",\n    no: "\'no\'"\n})\n')))}m.isMDXComponent=!0}}]);