"use strict";(self.webpackChunkjunjiezhou=self.webpackChunkjunjiezhou||[]).push([[7318],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,N=c["".concat(o,".").concat(d)]||c[d]||k[d]||l;return a?n.createElement(N,i(i({ref:t},m),{},{components:a})):n.createElement(N,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2459:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return k}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={sidebar_position:1},o="Object Oriented",u={unversionedId:"java-programming/oop/object-oriented",id:"java-programming/oop/object-oriented",title:"Object Oriented",description:"1. \u601d\u60f3 -> \u7c7b",source:"@site/docs/java-programming/oop/object-oriented.md",sourceDirName:"java-programming/oop",slug:"/java-programming/oop/object-oriented",permalink:"/docs/java-programming/oop/object-oriented",editUrl:"https://github.com/jzhou59/jzhou59.github.io/tree/source/docs/java-programming/oop/object-oriented.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/java-programming/introduction"},next:{title:"Nested Class",permalink:"/docs/java-programming/oop/nested-class"}},m={},k=[{value:"1. \u601d\u60f3 -&gt; \u7c7b",id:"1-\u601d\u60f3---\u7c7b",level:2},{value:"2. \u7c7b\u7684\u84dd\u56fe",id:"2-\u7c7b\u7684\u84dd\u56fe",level:2},{value:"2.1 \u58f0\u660e\u7c7b",id:"21-\u58f0\u660e\u7c7b",level:3},{value:"2.2 \u5b9a\u4e49\u7c7b\u7684\u5c5e\u6027--\u53d8\u91cf",id:"22-\u5b9a\u4e49\u7c7b\u7684\u5c5e\u6027--\u53d8\u91cf",level:3},{value:"2.3 \u5b9a\u4e49\u7c7b\u7684\u529f\u80fd--\u65b9\u6cd5/\u51fd\u6570",id:"23-\u5b9a\u4e49\u7c7b\u7684\u529f\u80fd--\u65b9\u6cd5\u51fd\u6570",level:3},{value:"2.4 \u7c7b\u7684\u4fee\u9970\u7b26",id:"24-\u7c7b\u7684\u4fee\u9970\u7b26",level:3},{value:"3 \u7c7b\u7684\u5b9e\u4f8b",id:"3-\u7c7b\u7684\u5b9e\u4f8b",level:2},{value:"3.1 \u521b\u5efa\u5b9e\u4f8b",id:"31-\u521b\u5efa\u5b9e\u4f8b",level:3},{value:"3.2 \u4f7f\u7528\u5b9e\u4f8b",id:"32-\u4f7f\u7528\u5b9e\u4f8b",level:3}],c={toc:k};function d(e){var t=e.components,p=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"object-oriented"},"Object Oriented"),(0,l.kt)("h2",{id:"1-\u601d\u60f3---\u7c7b"},"1. \u601d\u60f3 -> \u7c7b"),(0,l.kt)("p",null,"\u5728\u6211\u7684\u7406\u89e3\u4e2d\uff0c\u7f16\u7a0b\u8bed\u8a00\u7684\u53d1\u5c55\u7ecf\u5386\u4e86\u51e0\u4e2a\u7b80\u8981\u9636\u6bb5\u3002\u6700\u521d\u76840101\u7684\u51fa\u73b0\u662f\u4e3a\u4e86\u8ba9\u8ba1\u7b97\u673a\u80fd\u591f\u6839\u636e\u7535\u8def\u7279\u5f81\u5feb\u901f\u7684\u6267\u884c\u4e00\u4e2a\u8fd0\u7b97\u4efb\u52a1\uff1b\u4e3a\u4e86\u4e0d\u7528\u6bcf\u6b21\u90fd\u8fdb\u884c0101\u7684\u8bbe\u7f6e\uff0c\u8ba1\u7b97\u673a\u5de5\u4f5c\u8005\u6574\u5408\u4e0d\u540c\u7535\u8def\u7279\u5f81\u7684\u529f\u80fd\u4f5c\u4e3a\u6307\u4ee4\u51fa\u73b0\u4e86\u6c47\u7f16\u8bed\u8a00\uff0c\u4f7f\u5f97\u6bcf\u6b21\u7ed9\u8ba1\u7b97\u673a\u4e0b\u8fbe\u4efb\u52a1\u66f4\u5feb\uff1b\u7a0b\u5e8f\u8d8a\u6765\u8d8a\u5927\u4f7f\u5f97\u7528\u6307\u4ee4\u7f16\u5199\u4e5f\u53d8\u5f97\u7e41\u7410\uff0c\u9ad8\u7ea7\u7f16\u7a0b\u8bed\u8a00\u5e94\u8fd0\u800c\u751f\uff0c\u62e5\u6709\u7740\u66f4\u7b26\u5408\u4eba\u601d\u7ef4\u65b9\u5f0f\u7684\u8bed\u8a00\u7279\u5f81\uff0c\u51cf\u8f7b\u4e86\u5bf9\u5e95\u5c42\u786c\u4ef6\u6df1\u5165\u7406\u89e3\u7684\u8d1f\u62c5\u3002"),(0,l.kt)("p",null,"\u9762\u5411\u5bf9\u8c61\u7684\u8bed\u8a00\u5c31\u5c5e\u4e8e\u9ad8\u7ea7\u7f16\u7a0b\u8bed\u8a00\u7684\u4e00\u79cd\uff0c\u80cc\u540e\u7684\u601d\u7ef4\u65b9\u5f0f\u662f\u5bf9\u7269\u8d28\u672c\u8eab\u8fdb\u884c\u62bd\u8c61\u5b9a\u4e49\u3002\u81ea\u7136\u4e16\u754c\u662f\u7531\u7269\u4f53\u6784\u6210\u7684\uff0c\u4eba\u662f\u4e00\u4e2a\u7269\u4f53\uff0c\u7535\u8111\u662f\u4e00\u4e2a\u7269\u4f53\uff0c\u751a\u81f3\u7a7a\u6c14\u4e5f\u662f\u4ee5\u6c14\u4f53\u5f62\u5f0f\u5b58\u5728\u7684\u7269\u4f53\u3002\u9762\u5411\u5bf9\u8c61\u4e5f\u662f\u8fd9\u6837\uff0c\u7a0b\u5e8f\u662f\u7528\u4ee3\u7801\u62bd\u8c61\u8868\u793a\u7684\u7269\u4f53\uff0c\u4e5f\u7531\u5176\u4ed6\u62bd\u8c61\u7269\u4f53\u6240\u6784\u6210\u3002"),(0,l.kt)("p",null,"\u5728\u7f16\u5199\u9762\u5411\u5bf9\u8c61\u7a0b\u5e8f\u7684\u65f6\u5019\uff0c\u7a0b\u5e8f\u5458\u5145\u5f53\u7740\u81ea\u7136\u4e16\u754c\u201c\u4e0a\u5e1d\u201d\u7684\u89d2\u8272\uff0c\u53ef\u4ee5\u968f\u610f\u521b\u9020\u7269\u4f53\u3002\u4ece\u8fd9\u4e2a\u89d2\u5ea6\u51fa\u53d1\uff0c\u5f53\u6211\u4eec\u9700\u8981\u67d0\u6837\uff08\u62bd\u8c61\u7684\uff09\u7269\u4f53\u7684\u65f6\u5019\u521b\u9020\u4e00\u4e2a\u5c31\u884c\u4e86\uff0c\u9700\u8981\u4e00\u53f0\u7535\u8111\u9020\u4e00\u4e2a\uff0c\u9700\u8981\u684c\u5b50\u9020\u4e00\u4e2a\uff0c\u9700\u8981\u4e00\u4e2a\u5973\u670b\u53cb\u9020\u4e00\u4e2a... \u524d\u63d0\u662f\u6709\u8fd9\u4e2a\u7269\u4f53\u7684\u6a21\u677f\u6216\u8005\u662f\u84dd\u56fe\u3002"),(0,l.kt)("p",null,"\u521b\u9020\u7684\u524d\u63d0\u662f\u6709\u8fd9\u4e2a\u7269\u4f53\u7684\u6a21\u677f\u6216\u8005\u84dd\u56fe\uff0c\u6240\u4ee5\u5728\u521b\u9020\u4e4b\u524d\u8fd8\u9700\u8981\u8bbe\u8ba1\u7269\u4f53\u7684\u84dd\u56fe\u3002\u521b\u9020\u4e00\u4e2a\u7269\u4f53\u9700\u8981\u56de\u7b54\u4e09\u4e2a\u95ee\u9898\uff0c\u662f\u4ec0\u4e48\u4e3a\u4ec0\u4e48\u600e\u4e48\u505a\u3002\u65e2\u7136\u7a0b\u5e8f\u4ee3\u8868\u7684\u662f\u62bd\u8c61\u7684\u7269\u4f53\uff0c\u90a3\u4e5f\u9700\u8981\u56de\u7b54\u8fd9\u4e09\u4e2a\u95ee\u9898\u3002\u5173\u4e8e\u662f\u4ec0\u4e48\uff0c\u7269\u4f53\u53ef\u4ee5\u6982\u62ec\u4e3a\u7279\u5f81\u548c\u529f\u80fd\uff1b\u201c\u4e3a\u4ec0\u4e48\u8981\u8bbe\u8ba1\u201d\u662f\u7531\u5b9e\u9645\u751f\u4ea7\u4e2d\u7684\u9700\u6c42\u51b3\u5b9a\u7684\uff0c\u5728\u5b66\u4e60\u7684\u65f6\u5019\u5f80\u5f80\u4e0d\u9700\u8981\u7406\u7531\uff1b\u5173\u4e8e\u600e\u4e48\u505a\uff0c\u7a0b\u5e8f\u5458\u9700\u8981\u5229\u7528\u7f16\u7a0b\u8bed\u8a00\u63d0\u4f9b\u7684\u8bed\u6cd5\u5b8c\u6210\u201c\u662f\u4ec0\u4e48\u201d\u4e2d\u7ea6\u5b9a\u7684\u7279\u5f81\u548c\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u9488\u5bf9\u540c\u4e00\u7c7b\u7269\u79cd\uff0c\u4e00\u4e2a\u6a21\u677f\u6216\u8005\u84dd\u56fe\u5c31\u8db3\u591f\u4e86\u3002\u4f8b\u5982\uff0c\u666e\u901a\u4eba\u4e0e\u666e\u901a\u4eba\u4e4b\u95f4\uff0c\u533a\u522b\u5728\u4e8e\u8eab\u9ad8\uff0c\u6027\u522b\uff0c\u5e74\u9f84\u7b49\u7b49\uff0c\u4f46\u662f\u6bcf\u4e2a\u4eba\u90fd\u6709\u8eab\u9ad8\uff0c\u6027\u522b\uff0c\u5e74\u9f84\u7b49\u7279\u5f81\u3002"),(0,l.kt)("p",null,"\u5bf9\u5e94\u5230Java\u4e2d\uff0c\u8bbe\u8ba1\u84dd\u56fe\u5373\u4e3a\u7f16\u5199\u7c7b\uff0c\u521b\u9020\u7269\u4f53\u5373\u4e3a\u6839\u636e\u7c7b\u521b\u5efa\u5b9e\u4f8b\u3002"),(0,l.kt)("h2",{id:"2-\u7c7b\u7684\u84dd\u56fe"},"2. \u7c7b\u7684\u84dd\u56fe"),(0,l.kt)("p",null,"\u4ece\u521b\u9020\u62bd\u8c61\u7269\u4f53\u7684\u601d\u60f3\u4e2d\u5df2\u7ecf\u53ef\u4ee5\u770b\u51fa\uff0c\u7c7b\u5c31\u4ee3\u8868\u4e86\u62bd\u8c61\u7269\u4f53\u7684\u84dd\u56fe\u3002\u90a3\u4e48\u7c7b\u5177\u4f53\u8981\u600e\u4e48\u8bbe\u8ba1\uff1f\u4ece\u5bf9\u201c\u662f\u4ec0\u4e48\u201d\u7684\u56de\u7b54\u4e2d\u80fd\u770b\u51fa\u7c7b\u9700\u8981\u7279\u5f81\u548c\u529f\u80fd\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"Note:\u7279\u5f81\u3001\u5c5e\u6027\u3001\u53d8\u91cf\uff0c\u4ee3\u8868\u7684\u662f\u540c\u6837\u7684\u610f\u601d\uff0c\u529f\u80fd\u3001\u65b9\u6cd5\u3001\u51fd\u6570\u4e5f\u662f\u4e00\u4e2a\u610f\u601d\u3002")),(0,l.kt)("h3",{id:"21-\u58f0\u660e\u7c7b"},"2.1 \u58f0\u660e\u7c7b"),(0,l.kt)("p",null,"\u6253\u5f00\u8bb0\u4e8b\u672c\uff0c\u5199\u4e0b\u5982\u4e0b\u7684\u4ee3\u7801\uff0c\u5c31\u521b\u5efa\u4e86\u4e00\u4e2a\u540d\u79f0\u662fOneClass\u7684\u7c7b\uff0c\u8fd9\u662f\u7c7b\u6700\u7b80\u5355\u7684\u5f62\u5f0f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"class OneClass{\n\n}\n")),(0,l.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u7c7b\u8fd8\u6709",(0,l.kt)("strong",{parentName:"p"},"\u4fee\u9970\u7b26"),"\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u7ee7\u627f"),"\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5b9e\u73b0\u63a5\u53e3"),"\u3002"),(0,l.kt)("p",null,"\u4fee\u9970\u7b26\u7528\u4e8e\u6307\u5b9a\u7c7b\u7684\u53ef\u83b7\u53d6\u6027\uff0c\u5305\u62ecpublic\uff0cprivate\uff0c protected\uff0c",(0,l.kt)("em",{parentName:"p"},"package-private"),"\uff0cfinal\u3002"),(0,l.kt)("p",null,"A\u7c7b\u53ef\u4ee5\u7ee7\u627f\u4e5f\u53ef\u4ee5\u88ab\u7ee7\u627f\uff0c\u76f8\u5bf9\u4e8e\u88ab\u7ee7\u627f\u7684\u7c7b\uff0cA\u7c7b\u662f\u5b50\u7c7b\uff0c\u76f8\u5bf9\u4e8e\u7ee7\u627fA\u7c7b\u7684\u7c7b\uff0cA\u7c7b\u662f\u7236\u7c7b\u3002\u540c\u65f6\uff0c\u8c08\u5230\u7ee7\u627f\u5c31\u8981\u8c08\u5230\u5171\u6027\u548c\u7279\u6027\uff0c\u5982\u679c\u6b64\u65f6C\u7c7b\u4e5f\u7ee7\u627fA\u7c7b\uff0c\u90a3\u4e48A\u7c7b\u4e2d\u7684\u7279\u5f81\u548c\u529f\u80fd\u5c31\u662fB\u548cC\u6240\u5171\u6709\u7684\uff0c\u4f46B\u548cC\u53c8\u6709\u5404\u81ea\u7684\u7279\u6027\u3002\u4f8b\u5982\uff0c\u6c7d\u8f66\u7ee7\u627f\u8f66\uff0c\u81ea\u884c\u8f66\u4e5f\u7ee7\u627f\u8f66\uff0c\u6c7d\u8f66\u548c\u81ea\u884c\u8f66\u6240\u5171\u6709\u7684\u662f\u901f\u5ea6\u3001\u8f6e\u80ce\u7b49\u7b49\uff0c\u4f46\u662f\u6c7d\u8f66\u7279\u6709\u6cb9\u95e8\uff0c\u81ea\u884c\u8f66\u7279\u6709\u811a\u8e0f\u3002\u81f3\u4e8e\u5982\u4f55\u89c4\u5b9a\u7c7b\u4e0e\u7c7b\u4e4b\u95f4\u7684\u7ee7\u627f\u5173\u7cfb\uff0c\u90a3\u5c31\u8981\u770b\u4e1a\u52a1\u7684\u7c92\u5ea6\u9700\u6c42\u4e86\u3002\u5b9e\u4f8b\u4ee3\u7801\u5982\u4e0b\uff0c\u4e4b\u6240\u4ee5\u4e0d\u7528\u628a",(0,l.kt)("inlineCode",{parentName:"p"},"Vehicle"),"\u4e2d\u7684\u529f\u80fd\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Car"),"\u4e2d\u5199\u51fa\u6765\uff0c\u662f\u56e0\u4e3a\u5df2\u7ecf\u9690\u5f0f\u7684\u7ee7\u627f\u8fc7\u6765\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Java"},"class Vehicle{\n    void forward(){}\n    void back(){}\n}\n\nclass Car extends Vehicle{\n}\n")),(0,l.kt)("p",null,"\u5728\u5185\u5b58\u5f53\u4e2d\uff0c\u7ee7\u627f\u7684\u7f16\u6392\u5982\u4e0b\u56fe\n",(0,l.kt)("img",{alt:"static and extend",src:a(1057).Z,width:"2416",height:"3224"})),(0,l.kt)("p",null,"\u63a5\u53e3\u5c31\u662f\u529f\u80fd\uff0c\u6216\u8005\u8bf4\u89c4\u5b9a\u4e86\u7c7b\u9700\u8981\u5b9e\u73b0\u7684\u529f\u80fd\u3002\u518d\u62ff\u6c7d\u8f66\u6765\u4e3e\u4f8b\u5b50\uff0c\u6c7d\u8f66\u7ee7\u627f\u81ea\u8f66\uff0c\u90a3\u4e48\u8f66\u7684\u524d\u8fdb\u540e\u9000\u529f\u80fd\u80af\u5b9a\u4e5f\u662f\u7ee7\u627f\u8fc7\u6765\u4e86\u3002\u4f46\u662f\u73b0\u5728\u51fa\u73b0\u4e86\u4e00\u4e2a\u98de\u884c\u6c7d\u8f66\uff0c\u90a3\u8fd9\u5230\u5e95\u662f\u7ee7\u627f\u6c7d\u8f66\u8fd8\u662f\u7ee7\u627f\u98de\u673a\u5462\uff1f\u8fd9\u79cd\u60c5\u51b5\uff0c\u53ef\u4ee5\u89c4\u5b9a\u4e00\u4e2a\u98de\u884c\u529f\u80fd\u7684\u63a5\u53e3\uff0c\u4f7f\u7528\u6c7d\u8f66\u5b9e\u73b0\u8fd9\u4e2a\u63a5\u53e3\uff0c\u90a3\u4e48\u98de\u884c\u7684\u529f\u80fd\u6c7d\u8f66\u4e5f\u6709\u4e86\u3002\u95ee\u9898\u53c8\u6765\u4e86\uff0c\u73b0\u5728\u51fa\u73b0\u4e00\u4e2a\u6c34\u9646\u7a7a\u4e09\u6816\u7684\u8f66\u548b\u529e\uff1f\u518d\u5b9e\u73b0\u4e00\u4e2a\u6e38\u6cf3\u7684\u63a5\u53e3\u5c31\u53ef\u4ee5\u5566\u3002\u5b9e\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Java"},"interface AirPlane{\n    void fly();\n}\n\ninterface Boat{\n    void swim();\n}\n\nclass Vehicle{\n    void forward(){}\n    void back(){}\n}\n\nclass Car extends Vehicle implements AirPlane, Boat{\n    fly(){\n        //todo\n    }\n    swim(){\n        //todo\n    }\n}\n")),(0,l.kt)("h3",{id:"22-\u5b9a\u4e49\u7c7b\u7684\u5c5e\u6027--\u53d8\u91cf"},"2.2 \u5b9a\u4e49\u7c7b\u7684\u5c5e\u6027--\u53d8\u91cf"),(0,l.kt)("p",null,"\u7c7b\u58f0\u660e\u597d\u4e86\uff0c\u4e5f\u5c31\u662f\u84dd\u56fe\u7684\u6846\u67b6\u642d\u597d\u4e86\uff0c\u5c31\u8be5\u5f00\u59cb\u642d\u5efa\u201c\u662f\u4ec0\u4e48\u201d\u7684\u5185\u5bb9\u4e86\uff0c\u9996\u5148\u5c31\u662f\u7c7b\u7684\u53d8\u91cf\uff0c\u4e5f\u53eb\u7279\u5f81\u3001\u5c5e\u6027\u7b49\u3002\n\u7c7b\u7684\u53d8\u91cf\u4ece4\u4e2a\u65b9\u9762\u4ecb\u7ecd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u5b9a\u4e49"),(0,l.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u9970\u7b26\uff08\u4e0e\u7c7b\u7684\u529f\u80fd\u4e00\u81f4\uff0c\u5728",(0,l.kt)("a",{parentName:"li",href:"#%E7%B1%BB%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E5%8A%9F%E8%83%BD%E4%BF%AE%E9%A5%B0%E7%AC%A6"},"\u4fee\u9970\u7b26"),"\u8fdb\u884c\u4ecb\u7ecd\uff09")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7c7b\u4e2d\u53d8\u91cf\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Java"},"modifier1 modifier2... variableType variableName\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u7c7b\u4e2d\u7684\u53d8\u91cf\u5305\u62ec\u6210\u5458\u53d8\u91cf\u3001\u5c40\u57df\u53d8\u91cf\u3001\u53c2\u6570\u53d8\u91cf\uff0c\u6210\u5458\u53d8\u91cf\u53c8\u53ef\u4ee5\u7ec6\u5206\u4e3a\u7c7b\u53d8\u91cf\u548c\u5b9e\u4f8b\u53d8\u91cf\u3002\n\u7c7b\u53d8\u91cf\u662f\u4e0e\u7c7b\u540c\u5728\u7684\uff0c\u6240\u6709\u521b\u5efa\u7684\u5bf9\u8c61\u4e0d\u62e5\u6709\u7c7b\u53d8\u91cf\uff0c\u7136\u800c\u5728\u521b\u5efa\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u590d\u5236\u4e00\u4efd\u5355\u72ec\u7684\u5b9e\u4f8b\u53d8\u91cf\u3002\u7c7b\u53d8\u91cf\u4e0d\u4f1a\u7ee7\u627f\u7ed9\u5b50\u7c7b\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u5b50\u7c7b\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u7236\u7c7b\uff0c\u6240\u4ee5\u540c\u4e00\u4e2a\u5bb6\u65cf\u7c7b\u4e2d\u7684\u9759\u6001\u53d8\u91cf\uff08\u7c7b\u53d8\u91cf\uff09\u662f\u5171\u4eab\u7684\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Java"},"static int a; //\u7c7b\u53d8\u91cf\nint b; //\u5b9e\u4f8b\u53d8\u91cf\n")),(0,l.kt)("p",null,"\u5c40\u57df\u53d8\u91cf\u662f\u5728\u529f\u80fd\u4e2d\u65b0\u5efa\u7684\u6682\u65f6\u53d8\u91cf\uff0c\u7b49\u529f\u80fd\u6267\u884c\u5b8c\u6bd5\u5c31\u4e0d\u590d\u5b58\u5728\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Java"},"{\n    int c;\n}\n")),(0,l.kt)("p",null,"\u53c2\u6570\u53d8\u91cf\u662f\u529f\u80fd\u7684\u521d\u59cb\u72b6\u6001\uff0c\u4f5c\u4e3a\u529f\u80fd\u53c2\u6570\u6216\u8005\u79f0\u4e3a\u51fd\u6570\u53c2\u6570\u800c\u5b58\u5728\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Java"},"void print(String string){\n    //do something with string\n}\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u53d8\u91cf\u7684\u521d\u59cb\u5316\u9488\u5bf9\u7684\u662f\u7c7b\u4e2d\u6210\u5458\u53d8\u91cf\u7684\u521d\u59cb\u5316\uff0c\u6709\u4e09\u79cd\u65b9\u5f0f\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u79cd\uff0c\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"="),"\u7684\u5f62\u5f0f\uff0c\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"int a = 10"),";"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u79cd\uff0c\u901a\u8fc7\u9759\u6001\u4ee3\u7801\u5757",(0,l.kt)("strong",{parentName:"li"},"\u5bf9\u7c7b\u53d8\u91cf"),"\u8fdb\u884c\u521d\u59cb\u5316\uff0c\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"static{a = 10;}"),"\uff0c\u4e00\u4e2a\u7c7b\u4e2d\u53ef\u4ee5\u6709\u5f88\u591a\u4e2astatic\u4ee3\u7801\u5757\uff0c\u8fd0\u884c\u7684\u65f6\u5019\u6309\u987a\u5e8f\u6267\u884c\uff1b\u6216\u8005\u4f7f\u7528\u9759\u6001\u51fd\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u79cd\uff0c\u901a\u8fc7\u65e0\u540d\u79f0\u4ee3\u7801\u5757",(0,l.kt)("strong",{parentName:"li"},"\u5bf9\u5b9e\u4f8b\u53d8\u91cf"),"\u8fdb\u884c\u521d\u59cb\u5316\uff0c\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"{a = 10;}"),"\uff0c\u65e0\u540d\u79f0\u4ee3\u7801\u5757\u4f1a\u88ab\u63d2\u5165\u5230\u6784\u9020\u51fd\u6570\u4e2d\uff0c\u8fd9\u6837\u4e5f\u53ef\u4ee5\u5c06\u65e0\u540d\u79f0\u4ee3\u7801\u5757\u5f53\u505a\u6240\u6709\u6784\u9020\u51fd\u6570\u90fd\u5171\u4eab\u7684\u4ee3\u7801\u5757\u5b58\u5728\uff1b\u6216\u8005\u4f7f\u7528final\u51fd\u6570\uff0c\u4f7f\u7528final\u51fd\u6570\u7684\u597d\u5904\u662f\u4e0d\u53ef\u4ee5\u88ab\u5b50\u7c7b\u91cd\u5199\u3002")))),(0,l.kt)("h3",{id:"23-\u5b9a\u4e49\u7c7b\u7684\u529f\u80fd--\u65b9\u6cd5\u51fd\u6570"},"2.3 \u5b9a\u4e49\u7c7b\u7684\u529f\u80fd--\u65b9\u6cd5/\u51fd\u6570"),(0,l.kt)("p",null,"\u9664\u4e86\u7c7b\u7684\u5c5e\u6027\uff0c\u7c7b\u8fd8\u9700\u8981\u62e5\u6709\u529f\u80fd\uff0c\u5c31\u662f\u7c7b\u7684\u65b9\u6cd5\u3002\u7c7b\u7684\u65b9\u6cd5\u53c8\u79f0\u4e3a\u51fd\u6570\uff0c\u5305\u62ec\u6784\u9020\u51fd\u6570\u548c\u666e\u901a\u51fd\u6570\u3002\n\u7c7b\u7684\u51fd\u6570\u4ece\u4e94\u4e2a\u65b9\u9762\u8fdb\u884c\u4ecb\u7ecd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49"),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff08\u6784\u9020\u3001\u6210\u5458\u51fd\u6570\u3001\u5b9e\u4f8b\u51fd\u6570\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c"),(0,l.kt)("li",{parentName:"ul"},"this\u5f15\u7528")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u51fd\u6570\u5b9a\u4e49\u5305\u62ec\u4e94\u4e2a\u90e8\u5206\uff0c\u4fee\u9970\u7b26\uff0c\u8fd4\u56de\u503c\u7c7b\u578b\uff0c\u540d\u79f0\uff0c\u53c2\u6570\uff0c\u548c\u5f02\u5e38\u629b\u51fa\uff0c\u5982\u4e0b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Java"},"Modifier1 Modifier2... ReturnType MethodName(ParameterType Parameter1,...) throws Exception1{\n}\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u51fd\u6570\u7684\u7c7b\u578b\u5305\u62ec\u6784\u9020\u51fd\u6570\uff0c\u9759\u6001\u51fd\u6570\uff08\u6210\u5458\u51fd\u6570\uff09\uff0c\u5b9e\u4f8b\u51fd\u6570\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6784\u9020\u51fd\u6570\uff1a\u5728\u521b\u5efa\u62bd\u8c61\u7269\u4f53\uff08\u5bf9\u8c61\uff09\u7684\u65f6\u5019\uff0c\u9700\u8981\u7ed9\u5bf9\u8c61\u7684\u5c5e\u6027\u8fdb\u884c\u521d\u59cb\u7684\u8bbe\u7f6e\uff0c\u6b64\u65f6\u5c31\u901a\u8fc7\u6784\u9020\u51fd\u6570\u5728\u5185\u5b58\u533a\u57df\u8fdb\u884c\u8bbe\u7f6e\u3002\u6784\u9020\u51fd\u6570\u53ef\u4ee5\u91cd\u8f7d\uff0c\u4e5f\u5c31\u662f\u53ef\u4ee5\u6709\u597d\u591a\u4e2a\u6784\u9020\u51fd\u6570\uff0c\u901a\u8fc7\u4e0d\u540c\u7684\u53c2\u6570\u7c7b\u578b\u7684\u6392\u5217\u7ec4\u5408\u8fdb\u884c\u533a\u5206\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9759\u6001\u51fd\u6570\u662f\u901a\u8fc7\u51fd\u6570\u540d\u8c03\u7528\uff0c\u5e76\u4e14\u65e0\u6cd5\u7ee7\u627f\uff0c\u7531\u6240\u6709\u7684\u5b9e\u4f8b\u5171\u4eab\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b9e\u4f8b\u8c03\u7528\uff0c\u4f46\u662f\u9759\u6001\u51fd\u6570\u4e0d\u9700\u8981\u5b9e\u4f8b\u5c31\u53ef\u4ee5\u8c03\u7528\u3002\u901a\u5e38\u9759\u6001\u51fd\u6570\u4f5c\u4e3a\u8f85\u52a9\u51fd\u6570\uff0c\u6216\u8005\u4f5c\u4e3a\u9759\u6001\u53d8\u91cf\u7684getset\u51fd\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b\u51fd\u6570\u5b9e\u9645\u4e0a\u4e5f\u662f\u6240\u6709\u7684\u5b9e\u4f8b\u5171\u4eab\u7684\u4e00\u4e2a\u4ee3\u7801\u6bb5\uff0c\u4f46\u662f\u9700\u8981\u901a\u8fc7\u5b9e\u4f8b\u6765\u8fdb\u884c\u8c03\u7528\uff0c\u6240\u8c13\u901a\u8fc7\u5b9e\u4f8b\u8fdb\u884c\u8c03\u7528\uff0c\u4e5f\u5c31\u662f\u5b9e\u4f8b\u5728\u8fd0\u884c\u67d0\u4e2a\u65b9\u6cd5\u7684\u65f6\u5019\u4f1a\u5f00\u8f9f\u4e0d\u540c\u7684\u7a7a\u95f4\uff0c\u5404\u81ea\u6267\u884c\u3002"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u51fd\u6570\u7684\u53c2\u6570\u53ef\u4ee5\u662f\u5f15\u7528\u7c7b\u578b\uff0c\u4f8b\u5982\u6570\u7ec4\uff0cString\u7b49\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u662f\u57fa\u672c\u6570\u636e\u7c7b\u578b\u3002\u5982\u679c\u53c2\u6570\u672c\u8eab\u662f\u4e0d\u786e\u5b9a\u7684\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Type... name"),"\u4f5c\u4e3a\u53c2\u6570\uff0c\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"String... strings"),"\uff0c\u90a3\u4e48\u5728\u51fd\u6570\u8fdb\u884c\u89e3\u6790\u7684\u65f6\u5019\uff0c\u4ecd\u7136\u662f\u5c06\u53c2\u6570\u4f5c\u4e3a\u6570\u7ec4\u8fdb\u884c\u89e3\u6790\uff0c\u4e0d\u8fc7\u6b64\u65f6\u9700\u8981\u5728\u51fd\u6570\u4e2d\u6ce8\u610f\u6570\u7ec4\u7684\u957f\u5ea6\u3002\u5728\u4f7f\u7528\u5f15\u7528\u7c7b\u578b\u4f5c\u4e3a\u53c2\u6570\u7684\u65f6\u5019\uff0c\u5982\u679c\u8be5\u5f15\u7528\u7c7b\u578b\u7684\u53c2\u6570\u91cd\u65b0\u6307\u5411\u4e00\u4e2a\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\uff0c\u4f46\u662f\u6ca1\u6709\u5c06\u8be5\u53c2\u6570\u4f5c\u4e3a\u8fd4\u56de\u503c\u8fd4\u56de\uff0c\u90a3\u4e48\u5728\u7a0b\u5e8f\u6bb5\u5916\u90e8\uff0c\u8fd9\u4e2a\u91cd\u65b0\u6307\u5411\u662f\u4e0d\u6210\u529f\u7684\u3002\u5177\u4f53\u7684\u5f15\u7528\u7c7b\u578b\u5c06\u5728",(0,l.kt)("a",{parentName:"p",href:"#%E4%BD%BF%E7%94%A8%E5%AE%9E%E4%BE%8B"},"\u4f7f\u7528\u5b9e\u4f8b"),"\u90e8\u5206\u4ecb\u7ecd\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8fd4\u56de\u503c\u4ee3\u8868\u4e86\u51fd\u6570\u6700\u540e\u7684\u8f93\u51fa\u7ed3\u679c\u3002\u8fd4\u56de\u7c7b\u578b\u4e3a\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\u65f6\u5019\u662f\u503c\u8fd4\u56de\uff0c\u5982\u679c\u8fd4\u56de\u7684\u662f\u67d0\u4e2a\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u91c7\u7528\u7684\u662f\u5f15\u7528\u8fd4\u56de\u3002\n\u8fd4\u56de\u503c\u5728\u4e09\u79cd\u60c5\u51b5\u4e0b\u4f1a\u53d1\u751f"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u5b8c\u51fd\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u5230return\u8bed\u53e5"),(0,l.kt)("li",{parentName:"ul"},"\u629b\u51fa\u5f02\u5e38"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"this\u5f15\u7528\u662f\u5bf9\u5f53\u524d\u5b9e\u4f8b\u7684\u5f15\u7528\uff0c\u53ef\u4ee5\u4f7f\u7528\u5728\u4e24\u4e2a\u5730\u65b9\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u662f\u5728\u65b9\u6cd5\u5185\u90e8\uff0c\u5f53\u53c2\u6570\u4e2d\u7684\u53d8\u91cf\u548c\u5b9e\u4f8b\u53d8\u91cf\u540c\u540d\u7684\u65f6\u5019\uff0c\u4f7f\u7528this\u5f15\u7528\u5f53\u524d\u5b9e\u4f8b\u53ef\u4ee5\u6307\u5411\u5b9e\u4f8b\u53d8\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u662f\u5728\u4e00\u4e2a\u7c7b\u6709\u591a\u4e2a\u91cd\u8f7d\u6784\u9020\u51fd\u6570\u7684\u65f6\u5019\uff0cthis\u53ef\u4ee5\u7528\u4e8e\u8c03\u7528\u5176\u4ed6\u6784\u9020\u51fd\u6570\u3002",(0,l.kt)("inlineCode",{parentName:"li"},"Note:\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u4f7f\u7528this\uff0csuper\u8c03\u7528\u6784\u9020\u51fd\u6570\u7684\u65f6\u5019\uff0cthis\u3001super\u8bed\u53e5\u9700\u8981\u653e\u5728\u7b2c\u4e00\u53e5\u3002"),"\u8fd9\u662f\u4e3a\u4e86\u4fdd\u8bc1\uff0c\u5728\u5176\u4ed6\u6784\u9020\u51fd\u6570\u6709\u53ef\u80fd\u64cd\u4f5c\u5230\u7236\u7c7b\u6784\u9020\u51fd\u6570\u7684\u60c5\u51b5\u4e0b\uff0c\u4f18\u5148\u6267\u884c\u7236\u7c7b\u7684\u6784\u9020\u51fd\u6570\u3002")))),(0,l.kt)("h3",{id:"24-\u7c7b\u7684\u4fee\u9970\u7b26"},"2.4 \u7c7b\u7684\u4fee\u9970\u7b26"),(0,l.kt)("p",null,"\u7c7b\u7684\u4fee\u9970\u7b26\u5305\u62ec\u4e24\u79cd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u63a7\u5236\u7b26"),(0,l.kt)("li",{parentName:"ul"},"static \u548c final")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8bbf\u95ee\u63a7\u5236\u7b26\u5206\u4e3a\u4e24\u7ea7"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u7ea7\u4e3a\u6587\u4ef6\u5f00\u5934\u7684\u7c7b\u7684\u63a7\u5236\u7b26\uff0c\u5305\u62ecpublic\u548c\u9ed8\u8ba4\u7684",(0,l.kt)("em",{parentName:"p"},"package-private"),"\uff0cpublic\u5bf9\u6240\u6709\u7c7b\u90fd\u5f00\u653e\uff0c\u9ed8\u8ba4\u7684\u53ea\u662f\u5728\u5305\u5185\u5f00\u653e\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u7ea7\u4e3a\u7c7b\u5185\u90e8\u7684\u63a7\u5236\u7b26\uff0c\u5305\u62ecpublic\uff0cprivate\uff0cprotected\uff0c",(0,l.kt)("em",{parentName:"p"},"package-private"),"\u56db\u79cd\u3002\u4e0b\u56fe\u7684\u8868\u683c\u8868\u793a\u4e86\u4e0d\u540c\u4fee\u9970\u7b26\u6240\u4ee3\u8868\u7684\u7684\u6210\u5458\u53ef\u8bbf\u95ee\u8303\u56f4\u3002"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u4fee\u9970\u7b26"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u5185\u90e8"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5305\u5185\u90e8"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5b50\u7c7b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u516c\u5f00"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"public"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protected"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"package-private")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"private"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"N")))))))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"static\u8868\u793a\u9759\u6001\uff0c\u4e3b\u8981\u5f71\u54cd\u662f\u53ef\u4ee5\u4f7f\u7528\u7c7b\u540d\u76f4\u63a5\u8c03\u7528\uff0c\u4e0d\u53ef\u4ee5\u7528\u6765\u4fee\u9970\u6587\u4ef6\u5f00\u5934\u7684\u7c7b\u3002\u4f7f\u7528final\u8868\u793a\u6240\u4fee\u9970\u7684\u6210\u5458\u662f\u4e0d\u53ef\u4ee5\u6539\u53d8\u7684\uff0c\u7528\u6765\u4fee\u9970\u7c7b\u7684\u65f6\u5019\uff0c\u8868\u660e\u8be5\u7c7b\u662f",(0,l.kt)("strong",{parentName:"li"},"\u4e0d\u53ef\u4ee5\u88ab\u7ee7\u627f\u7684"),"\u3002")),(0,l.kt)("h2",{id:"3-\u7c7b\u7684\u5b9e\u4f8b"},"3 \u7c7b\u7684\u5b9e\u4f8b"),(0,l.kt)("h3",{id:"31-\u521b\u5efa\u5b9e\u4f8b"},"3.1 \u521b\u5efa\u5b9e\u4f8b"),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u5305\u62ec\u4e09\u4e2a\u90e8\u5206\uff1a\u58f0\u660e\uff0c\u5b9e\u4f8b\u5316\uff0c\u521d\u59cb\u5316\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u58f0\u660e\u662f\u901a\u8fc7 \u7c7b\u540d + \u5b9e\u4f8b\u5f15\u7528\u540d\u79f0\u5b9e\u73b0\uff0c\u6b64\u65f6\u4e0d\u4f1a\u7ed9\u8fd9\u4e2a\u5b9e\u4f8b\u5206\u914d\u5730\u5740\u7a7a\u95f4\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b\u5316\u662f\u901a\u8fc7new\u5b9e\u73b0\uff0c\u6b64\u65f6\u7ed9\u5b9e\u4f8b\u5206\u914d\u4e86\u5730\u5740\u7a7a\u95f4\uff0c\u5e76\u4e14\u4e5f\u5c06\u5730\u5740\u7ed9\u5230\u4e86\u5f15\u7528\u5bf9\u8c61\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u662f\u901a\u8fc7\u8c03\u7528\u6784\u9020\u51fd\u6570\u5b9e\u73b0\uff0c\u6b64\u65f6\u5bf9\u5b9e\u4f8b\u7684\u5730\u5740\u7a7a\u95f4\u4e2d\u7684\u53d8\u91cf\u5c31\u884c\u521d\u59cb\u5316\u8d4b\u503c\u548c\u8fd0\u7b97\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Java"},"TypeName instanceName = new TypeName(Parameters...)\n")),(0,l.kt)("p",null,"\u521b\u5efa\u7684\u5b9e\u4f8b\uff0c\u5728\u4ee3\u7801\u4e2d\u53ea\u662f\u4ee5\u5f15\u7528\u5f62\u5f0f\u5b58\u5728\uff0cinstanceName\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u5185\u5b58\u5355\u5143\u91cc\u9762\u5b58\u653e\u4e86\u5b9e\u4f8b\u7684\u9996\u5730\u5740\uff0c\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u5bf9\u5b9e\u4f8b\u8fdb\u884c\u5f15\u7528\u3002\u8fd9\u4e5f\u89e3\u91ca\u4e86",(0,l.kt)("a",{parentName:"p",href:"#23-%E5%AE%9A%E4%B9%89%E7%B1%BB%E7%9A%84%E5%8A%9F%E8%83%BD--%E6%96%B9%E6%B3%95%E5%87%BD%E6%95%B0"},"\u51fd\u6570\u53c2\u6570"),"\u90e8\u5206\u63d0\u5230\u7684\u4e00\u4e2a\u7ed3\u8bba\u3002"),(0,l.kt)("h3",{id:"32-\u4f7f\u7528\u5b9e\u4f8b"},"3.2 \u4f7f\u7528\u5b9e\u4f8b"),(0,l.kt)("p",null,"\u4f7f\u7528\u5b9e\u4f8b\u7684\u65f6\u5019\u901a\u8fc7\u5b9e\u4f8b\u5f15\u7528\u540d\u79f0\u53ef\u4ee5\u8c03\u7528\u5b9e\u4f8b\u7684\u65b9\u6cd5\u3002\u5b9e\u4f8b\u672c\u8eab\u662f\u4e0d\u5b58\u50a8\u65b9\u6cd5\u7684\uff0c\u5f53\u5b9e\u4f8b\u8981\u8c03\u7528\u7c7b\u4e2d\u5b9a\u4e49\u7684\u67d0\u4e2a\u65b9\u6cd5\u7684\u65f6\u5019\uff0c\u4f1a\u5f00\u8f9f\u4e00\u4e2a\u65b0\u7684\u5185\u5b58\u7a7a\u95f4\uff0c\u5c06\u8fd9\u4e2a\u65b9\u6cd5\u52a0\u8f7d\u8fdb\u53bb\u3002\u6240\u4ee5\u4e0d\u540c\u5b9e\u4f8b\u5728\u8fd0\u884c\u540c\u4e00\u4e2a\u51fd\u6570\u5176\u5b9e\u662f\u5728\u4e0d\u540c\u7684\u5185\u5b58\u7a7a\u95f4\u8fd0\u884c\uff0c\u4e0d\u4f1a\u4ea7\u751f\u51b2\u7a81\uff0c\u5c31\u76f8\u5f53\u4e8e\u7528\u52a0\u8f7d\u65f6\u95f4\u6362\u5b9e\u4f8b\u5b58\u50a8\u7684\u7a7a\u95f4\u3002"),(0,l.kt)("p",null,"\u6b63\u5982\u521b\u5efa\u5b9e\u4f8b\u4e2d\u63d0\u53ca\u5230\uff0c\u4ee3\u7801\u4e2d\u4e0d\u5b58\u5728\u5b9e\u4f8b\u672c\u8eab\u7684\u5730\u5740\uff0c\u5b58\u5728\u7684\u90fd\u662f\u5bf9\u5b9e\u4f8b\u7684\u5f15\u7528\u3002\u5f53\u67d0\u4e2a\u5b9e\u4f8b\u4e0d\u518d\u6709\u5f15\u7528\u5bf9\u8c61\u6307\u5411\u5b83\u65f6\uff0c\u5c31\u6709\u53ef\u80fd\u88abJava\u81ea\u5e26\u7684garbage collector\u6536\u96c6\u3002\u6240\u4ee5\u91ca\u653e\u4e00\u4e2a\u5b9e\u4f8b\u53ef\u4ee5\u901a\u8fc7\u624b\u52a8\u5c06\u5f15\u7528\u5bf9\u8c61\u6307\u5411null\u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"p"},"instanceName=null"),"\u3002\u90a3\u4e48\u7c7b\u4f3c",(0,l.kt)("a",{parentName:"p",href:"#23-%E5%AE%9A%E4%B9%89%E7%B1%BB%E7%9A%84%E5%8A%9F%E8%83%BD--%E6%96%B9%E6%B3%95%E5%87%BD%E6%95%B0"},"\u51fd\u6570\u53c2\u6570"),"\u4e2d\u6240\u8bf4\u7684\u51fd\u6570\u4e2d\u7684\u5f15\u7528\u5462\uff1f\u8c03\u7528\u51fd\u6570\u662f\u4e00\u4e2a\u538b\u6808\u8fc7\u7a0b\uff0c\u5728\u51fd\u6570\u8fd0\u884c\u7ed3\u675f\u65f6\uff0c\u51fd\u6570\u51fa\u6808\uff0c\u4e5f\u5c31\u662f\u8bf4\u6b64\u65f6\u51fd\u6570\u4e2d\u7684\u5f15\u7528\u5c31\u4e0d\u518d\u5b58\u5728\u4e86\u3002"))}d.isMDXComponent=!0},1057:function(e,t,a){t.Z=a.p+"assets/images/0_object_oriented_extend-1e18e44cd5505ebf1714de38e5b85256.jpg"}}]);