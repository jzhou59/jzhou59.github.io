"use strict";(self.webpackChunkjunjiezhou=self.webpackChunkjunjiezhou||[]).push([[6926],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,y=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(y,c(c({ref:t},u),{},{components:n})):r.createElement(y,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9649:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(7462),o=n(3366),a=n(7294),c=n(6010),l=n(5999),i=n(164),s="anchorWithStickyNavbar_mojV",u="anchorWithHideOnScrollNavbar_R0VQ",p=["as","id"],m=["as"];function d(e){var t=e.as,n=e.id,m=(0,o.Z)(e,p),d=(0,i.LU)().navbar.hideOnScroll;return n?a.createElement(t,(0,r.Z)({},m,{className:(0,c.Z)("anchor",d?u:s),id:n}),m.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,m)}function y(e){var t=e.as,n=(0,o.Z)(e,m);return"h1"===t?a.createElement("h1",(0,r.Z)({},n,{id:void 0}),n.children):a.createElement(d,(0,r.Z)({as:t},n))}},6926:function(e,t,n){n.d(t,{Z:function(){return F}});var r=n(7294),o=n(3905),a=n(7462),c=n(3366),l=n(5742),i=["mdxType","originalType"];var s=n(6010),u={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},p={Prism:n(1205).default,theme:u};function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var y=/\r\n|\r|\n/,f=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},g=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=d({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=d({},n,{backgroundColor:null}),o};function v(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var b=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?g(e.theme,e.language):void 0;return t.themeDict=n})),m(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=d({},v(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?d({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),m(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var c=r?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(l))}})),m(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,c=d({},v(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?d({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),m(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,c=0,l=[],i=[l];c>-1;){for(;(a=r[c]++)<o[c];){var s=void 0,u=t[c],p=n[c][a];if("string"==typeof p?(u=c>0?u:["plain"],s=p):(u=h(u,p.type),p.alias&&(u=h(u,p.alias)),s=p.content),"string"==typeof s){var m=s.split(y),d=m.length;l.push({types:u,content:m[0]});for(var g=1;g<d;g++)f(l),i.push(l=[]),l.push({types:u,content:m[g]})}else c++,t.push(u),n.push(s),r.push(0),o.push(s.length)}c--,t.pop(),n.pop(),r.pop(),o.pop()}return f(l),i}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),k=b,E=n(164);var O=n(5999),N="copyButton_eDfN",T="copyButtonCopied_ljy5",Z="copyButtonIcons_W9eQ",j="copyButtonIcon_XEyF",w="copyButtonSuccessIcon_i9w9";function x(e){var t=e.code,n=(0,r.useState)(!1),o=n[0],a=n[1],c=(0,r.useRef)(void 0),l=(0,r.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var c=document.getSelection(),l=!1;c.rangeCount>0&&(l=c.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}o.remove(),l&&(c.removeAllRanges(),c.addRange(l)),a&&a.focus()}(t),a(!0),c.current=window.setTimeout((function(){a(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(c.current)}}),[]),r.createElement("button",{type:"button","aria-label":o?(0,O.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,O.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,O.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)(N,"clean-btn",o&&T),onClick:l},r.createElement("span",{className:Z,"aria-hidden":"true"},r.createElement("svg",{className:j,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:w,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var P="codeBlockContainer_I0IT",C="codeBlockContent_wNvx",B="codeBlockTitle_BvAR",L="codeBlock_jd64",_="codeBlockStandalone_csWH",A="codeBlockLines_mRuA";function S(e){var t,n=e.children,o=e.className,c=void 0===o?"":o,l=e.metastring,i=e.title,u=e.language,m=(0,E.LU)().prism,d=(0,r.useState)(!1),y=d[0],f=d[1];(0,r.useEffect)((function(){f(!0)}),[]);var h=(0,E.bc)(l)||i,g=(0,E.pJ)();if(r.Children.toArray(n).some((function(e){return(0,r.isValidElement)(e)})))return r.createElement(k,(0,a.Z)({},p,{key:String(y),theme:g,code:"",language:"text"}),(function(e){var t=e.className,o=e.style;return r.createElement("pre",{tabIndex:0,className:(0,s.Z)(t,_,"thin-scrollbar",P,c,E.kM.common.codeBlock),style:o},r.createElement("code",{className:A},n))}));var v=Array.isArray(n)?n.join(""):n,b=null!=(t=null!=u?u:(0,E.Vo)(c))?t:m.defaultLanguage,O=(0,E.nZ)(v,l,b),N=O.highlightLines,T=O.code;return r.createElement(k,(0,a.Z)({},p,{key:String(y),theme:g,code:T,language:null!=b?b:"text"}),(function(e){var t,n=e.className,o=e.style,l=e.tokens,i=e.getLineProps,u=e.getTokenProps;return r.createElement("div",{className:(0,s.Z)(P,c,(t={},t["language-"+b]=b&&!c.includes("language-"+b),t),E.kM.common.codeBlock)},h&&r.createElement("div",{style:o,className:B},h),r.createElement("div",{className:C,style:o},r.createElement("pre",{tabIndex:0,className:(0,s.Z)(n,L,"thin-scrollbar")},r.createElement("code",{className:A},l.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=i({line:e,key:t});return N.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,a.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,a.Z)({key:t},u({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement(x,{code:T})))}))}var D=n(9960);var I="details_BAp3";function V(e){var t=Object.assign({},e);return r.createElement(E.PO,(0,a.Z)({},t,{className:(0,s.Z)("alert alert--info",I,t.className)}))}var z=n(9649);function H(e){return r.createElement(z.Z,e)}var R="img_E7b_";var M={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var o=e.props,a=(o.mdxType,o.originalType,(0,c.Z)(o,i));return r.createElement(e.props.originalType,a)}return e}(e)}));return r.createElement(l.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(S,e)},a:function(e){return r.createElement(D.Z,e)},pre:function(e){var t;return r.createElement(S,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(V,(0,a.Z)({},e,{summary:n}),o)},ul:function(e){return r.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,s.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_tsSF"))}));var t},img:function(e){return r.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,R))}));var t},h1:function(e){return r.createElement(H,(0,a.Z)({as:"h1"},e))},h2:function(e){return r.createElement(H,(0,a.Z)({as:"h2"},e))},h3:function(e){return r.createElement(H,(0,a.Z)({as:"h3"},e))},h4:function(e){return r.createElement(H,(0,a.Z)({as:"h4"},e))},h5:function(e){return r.createElement(H,(0,a.Z)({as:"h5"},e))},h6:function(e){return r.createElement(H,(0,a.Z)({as:"h6"},e))}};function F(e){var t=e.children;return r.createElement(o.Zo,{components:M},t)}}}]);