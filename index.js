!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.indicatoring=t():e.indicatoring=t()}(self,(()=>(()=>{"use strict";var e={947:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(601),r=n.n(o),i=n(314),a=n.n(i)()(r());a.push([e.id,"#Ot5CSepGNKliznKu5L3u {\n  width: 100vw;\n  height: 100vh;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  animation: KvDbGDN5ihM4asrL2bUt 0.4s ease-in-out forwards;\n  opacity: 0;\n  z-index: 1000000;\n}\n\n#Ot5CSepGNKliznKu5L3u > svg {\n  animation: GIQ2_MZuft56c5EVlfPg 1s linear infinite;\n}\n\n#Ot5CSepGNKliznKu5L3u > svg > circle {\n  fill: none;\n  stroke-linecap: round;\n  animation: JQDZmnZ70cOng1dNjp5x 3s ease-in-out infinite;\n  opacity: 0.8;\n}\n\n#Ot5CSepGNKliznKu5L3u > div {\n  margin: 20px 0 0 0;\n  white-space: pre-wrap;\n}\n\n@keyframes GIQ2_MZuft56c5EVlfPg {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes KvDbGDN5ihM4asrL2bUt {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  75% {\n    opacity: 0;\n  }\n  100% {\n    pointer-events: none;\n    overflow: hidden;\n    opacity: 1;\n  }\n}\n\n@keyframes JQDZmnZ70cOng1dNjp5x {\n  0% {\n    stroke-dasharray: 20, 282.6;\n  }\n  50% {\n    stroke-dasharray: 200, 282.6;\n  }\n  100% {\n    stroke-dasharray: 20, 282.6;\n  }\n}\n",""]),a.locals={indicatoring:"Ot5CSepGNKliznKu5L3u",indicatoring_wait:"KvDbGDN5ihM4asrL2bUt",indicatoring_rotation:"GIQ2_MZuft56c5EVlfPg",indicatoring_draw:"JQDZmnZ70cOng1dNjp5x"};const c=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],u=o.base?s[0]+o.base:s[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function r(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=o(e,r),u=0;u<i.length;u++){var l=n(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var o={};n.r(o),n.d(o,{default:()=>w});var r=n(72),i=n.n(r),a=n(825),c=n.n(a),s=n(659),u=n.n(s),l=n(56),d=n.n(l),p=n(540),f=n.n(p),m=n(113),v=n.n(m),g=n(947),y={};y.styleTagTransform=v(),y.setAttributes=d(),y.insert=u().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=f();i()(g.A,y);const b=g.A&&g.A.locals?g.A.locals:void 0,h=()=>{const e=b.indicatoring;let t=document.getElementById(e);t&&(document.documentElement.style.removeProperty("pointer-events"),document.documentElement.style.removeProperty("overflow"),document.body.removeChild(t))},x={open:(e,t)=>{"number"!=typeof e&&(t=e);(e=>{const{limit:t,config:n}=e,o=b.indicatoring;let r=document.getElementById(o);r||(r=document.createElement("div"),r.id=o,document.body.appendChild(r));const i=document.createElementNS("http://www.w3.org/2000/svg","svg"),a=document.createElementNS("http://www.w3.org/2000/svg","circle"),c=document.createElement("div");i.setAttribute("viewBox","0 0 100 100"),a.setAttribute("cx","50"),a.setAttribute("cy","50"),a.setAttribute("r","45"),r.style.backgroundColor=n.background.color,r.style.backdropFilter=n.background.blur?"blur(4px)":"none",a.setAttribute("stroke-width",n.icon.size),a.setAttribute("stroke",n.icon.color),i.setAttribute("width",24*Number(n.icon.size)+"px"),i.setAttribute("height",24*Number(n.icon.size)+"px"),i.appendChild(a),r.appendChild(i),n.message.text&&(c.style.fontSize=n.message.size,c.style.color=n.message.color,c.textContent=n.message.text,r.appendChild(c)),setTimeout((()=>{document.documentElement.style.pointerEvents="none",document.documentElement.style.overflow="hidden"}),300),t>0&&setTimeout((()=>{h()}),t)})({limit:e&&"number"==typeof e?e:0,config:{background:{color:t?.background?.color?t.background.color:"rgba(0, 0, 0, 0.6)",blur:!0===t?.background?.blur},message:{size:t?.message?.size?"large"===t.message.size?"3em":"1em":"2em",color:t?.message?.color?t?.message?.color:"#FFFFFF",text:t?.message?.text?t.message.text:null},icon:{size:t?.icon?.size?"large"===t.icon.size?"10":"5":"6",color:t?.icon?.color?t.icon.color:"#FFFFFF"}}})},close:h},w=x;return window.Indicatoring=x,o})()));