(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[347],{34858:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/share",function(){return e(97194)}])},97194:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return P}});var r=e(85893),o=e(1199),a=e(10682),i=e(579),s=e(9008),c=e(34051),l=e.n(c),u=e(67294),d=e(31555),f=e(24685);var h=function(n){var t=n.tokenIds;return(0,r.jsx)(r.Fragment,{children:t.map((function(n){return(0,r.jsx)(d.Z,{xs:12,md:6,lg:4,className:"Gallery-item",children:(0,r.jsx)(f.W,{tokenId:n})},n)}))})},v=e(86464),p=e(21608),y=e(94184),m=e.n(y),x=e(70861),b=e(76792);const j=u.forwardRef((({as:n,bsPrefix:t,variant:e,size:o,active:a,className:i,...s},c)=>{const l=(0,b.vE)(t,"btn"),[u,{tagName:d}]=(0,x.FT)({tagName:n,...s}),f=d;return(0,r.jsx)(f,{...u,...s,ref:c,className:m()(i,l,a&&"active",e&&`${l}-${e}`,o&&`${l}-${o}`,s.href&&s.disabled&&"disabled")})}));j.displayName="Button",j.defaultProps={variant:"primary",active:!1,disabled:!1};var w=j,g=e(53672);function A(n){navigator.clipboard?navigator.clipboard.writeText(n).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(n){console.error("Async: Could not copy text: ",n)})):function(n){var t=document.createElement("textarea");t.value=n,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var e=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+e)}catch(r){console.error("Fallback: Oops, unable to copy",r)}document.body.removeChild(t)}(n)}var k=function(n){var t=n.classes,e=n.width,o=void 0===e?16:e;return(0,r.jsxs)("span",{className:t,children:["Copied URL!",(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,fill:"green",className:"bi bi-clipboard-check-fill",viewBox:"0 0 16 16",children:[(0,r.jsx)("path",{d:"M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"}),(0,r.jsx)("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"})]})]})},N=e(86135),C=e(53117);function S(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function T(n,t,e,r,o,a,i){try{var s=n[a](i),c=s.value}catch(l){return void e(l)}s.done?t(c):Promise.resolve(c).then(r,o)}function _(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function i(n){T(a,r,o,i,s,"next",n)}function s(n){T(a,r,o,i,s,"throw",n)}i(void 0)}))}}function E(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,a=[],i=!0,s=!1;try{for(e=e.call(n);!(i=(r=e.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==e.return||e.return()}finally{if(s)throw o}}return a}}(n,t)||function(n,t){if(!n)return;if("string"===typeof n)return S(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return S(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Z=function(n){var t=n.account,e=(0,v.A)().queryClient,o=(0,u.useState)([]),i=o[0],s=o[1],c=(0,u.useState)(!0),f=c[0],y=c[1],m=((0,N.o)().numTokens,(0,u.useState)("hidden")),x=m[0],b=m[1],j=E((0,g.W)("account"),2),S=j[0];j[1];"..."===S&&(S=void 0);var T=function(){var n=_(l().mark((function n(){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:A(window.location.href),b("visible"),setTimeout((function(){b("hidden")}),2e3);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,u.useEffect)((function(){e&&_(l().mark((function n(){var r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),n.next=3,e.getAllOwnedTokens(t);case 3:r=n.sent,s(r),y(!1);case 6:case"end":return n.stop()}}),n)})))()}),[e,t]),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(p.Z,{children:(0,r.jsxs)(d.Z,{xs:6,xxl:1,children:[f&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Loading..."}),(0,r.jsx)(C.a,{})]}),!f&&(S?(0,r.jsx)(w,{variant:"primary",onClick:T,children:"Share Gallery"}):null),(0,r.jsx)(k,{width:32,classes:x})]})}),(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(h,{tokenIds:i}),!f&&0===i.length&&(0,r.jsx)("p",{children:"This account doesn't own any Hyperion tokens."})]})]})},F=e(15295);function I(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function O(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,a=[],i=!0,s=!1;try{for(e=e.call(n);!(i=(r=e.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==e.return||e.return()}finally{if(s)throw o}}return a}}(n,t)||function(n,t){if(!n)return;if("string"===typeof n)return I(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return I(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(){var n=O((0,g.W)("account"),2),t=n[0];n[1];"..."===t&&(t=void 0);var e,c=!(e=t)||e.length<=15?"stars...":e.slice(0,13)+"..."+e.slice(-6);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.default,{children:(0,r.jsx)("title",{children:"Check out my Hyperion NFTs"})}),(0,r.jsx)(o.h,{}),(0,r.jsx)("main",{style:{padding:"1rem 0"},children:(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(i.V,{children:["NFTs owned by ",c]}),void 0!==t&&(0,r.jsx)(Z,{account:t}),void 0===t&&(0,r.jsx)("p",{children:"Oops something went wrong."})]})}),(0,r.jsx)(F.$,{})]})}var P=function(){return(0,r.jsx)($,{})}},15295:function(n,t,e){"use strict";e.d(t,{$:function(){return o}});var r=e(85893),o=(e(67294),function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("hr",{})]})})}},function(n){n.O(0,[78,714,631,506,35,400,951,183,774,888,179],(function(){return t=34858,n(n.s=t);var t}));var t=n.O();_N_E=t}]);