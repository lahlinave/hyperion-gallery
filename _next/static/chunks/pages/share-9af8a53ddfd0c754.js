(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[347],{34858:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/share",function(){return t(39821)}])},39821:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return U}});var r=t(85893),a=t(1199),i=t(10682),o=t(579),c=t(9008),s=t(34051),l=t.n(s),u=t(67294),d=t(56390),f=t(86464),h=t(21608),m=t(31555),v=t(35005),x=t(53672);function p(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var n=document.createElement("textarea");n.value=e,n.style.top="0",n.style.left="0",n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{var t=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+t)}catch(r){console.error("Fallback: Oops, unable to copy",r)}document.body.removeChild(n)}(e)}var y=function(e){var n=e.classes,t=e.width,a=void 0===t?16:t;return(0,r.jsxs)("span",{className:n,children:["Copied URL!",(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,fill:"green",className:"bi bi-clipboard-check-fill",viewBox:"0 0 16 16",children:[(0,r.jsx)("path",{d:"M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"}),(0,r.jsx)("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"})]})]})},g=t(86135),j=t(53117);function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function w(e,n,t,r,a,i,o){try{var c=e[i](o),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,a)}function Z(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){w(i,r,a,o,c,"next",e)}function c(e){w(i,r,a,o,c,"throw",e)}o(void 0)}))}}function k(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(s){c=!0,a=s}finally{try{o||null==t.return||t.return()}finally{if(c)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N=function(e){var n=e.account,t=(0,f.A)().queryClient,a=(0,u.useState)([]),o=a[0],c=a[1],s=(0,u.useState)(!0),b=s[0],w=s[1],N=((0,g.o)().numTokens,(0,u.useState)("hidden")),C=N[0],T=N[1],A=k((0,x.W)("account"),2),I=A[0];A[1];"..."===I&&(I=void 0);var U=function(){var e=Z(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(window.location.href),T("visible"),setTimeout((function(){T("hidden")}),2e3);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){t&&Z(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.next=3,t.getAllOwnedTokens(n);case 3:r=e.sent,c(r),w(!1);case 6:case"end":return e.stop()}}),e)})))()}),[t,n]),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(h.Z,{children:(0,r.jsxs)(m.Z,{xs:6,xxl:1,children:[b&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Loading..."}),(0,r.jsx)(j.a,{})]}),!b&&(I?(0,r.jsx)(v.Z,{variant:"primary",onClick:U,children:"Share Gallery"}):null),(0,r.jsx)(y,{width:32,classes:C})]})}),(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(d.r,{tokenIds:o}),!b&&0===o.length&&(0,r.jsx)("p",{children:"This account doesn't own any Hyperion tokens."})]})]})},C=t(15295);function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(s){c=!0,a=s}finally{try{o||null==t.return||t.return()}finally{if(c)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return T(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(){var e=A((0,x.W)("account"),2),n=e[0];e[1];"..."===n&&(n=void 0);var t,s=!(t=n)||t.length<=15?"stars...":t.slice(0,13)+"..."+t.slice(-6);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.default,{children:(0,r.jsx)("title",{children:"Check out my Hyperion NFTs"})}),(0,r.jsx)(a.h,{}),(0,r.jsx)("main",{style:{padding:"1rem 0"},children:(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(o.V,{children:["NFTs owned by ",s]}),void 0!==n&&(0,r.jsx)(N,{account:n}),void 0===n&&(0,r.jsx)("p",{children:"Oops something went wrong."})]})}),(0,r.jsx)(C.$,{})]})}var U=function(){return(0,r.jsx)(I,{})}},15295:function(e,n,t){"use strict";t.d(n,{$:function(){return o}});var r=t(85893),a=t(21608),i=t(31555),o=(t(67294),function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)("hr",{}),(0,r.jsx)("footer",{children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(i.Z,{className:"text-center",children:(0,r.jsx)("p",{className:"footer-text",children:" Created with \ud83d\udc99 by skymagic.eth"})})})})]})})},56390:function(e,n,t){"use strict";t.d(n,{r:function(){return o}});var r=t(85893),a=t(31555),i=t(24685);var o=function(e){var n=e.tokenIds;return(0,r.jsx)(r.Fragment,{children:n.map((function(e){return(0,r.jsx)(a.Z,{xs:12,md:6,lg:4,className:"Gallery-item",children:(0,r.jsx)(i.W,{tokenId:e})},e)}))})}},53117:function(e,n,t){"use strict";t.d(n,{a:function(){return a}});var r=t(85893),a=function(){return(0,r.jsx)("div",{className:"loader loader--style2",title:"1",children:(0,r.jsx)("svg",{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50",children:(0,r.jsx)("path",{fill:"#000",d:"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z",children:(0,r.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})})})})}},579:function(e,n,t){"use strict";t.d(n,{V:function(){return a}});var r=t(85893),a=function(e){var n=e.children;return(0,r.jsx)("div",{className:"PageTitle-title",children:n})}},24685:function(e,n,t){"use strict";t.d(n,{z:function(){return c},W:function(){return s}});var r=t(85893),a=t(41664),i=t(78182),o=t(86704),c=function(e){return{live:"".concat(o.Z.liveViewUrl,"/").concat(e),imageUrl:"".concat(o.Z.fileUrlImage,"/").concat(e).concat(o.Z.fileUrlImage),imageUrl4k:"".concat(o.Z.fileUrlHighResImage,"/").concat(e).concat(o.Z.fileUrlHighResImageExtension),thumbnail:"".concat(o.Z.fileUrlThumbnails,"/").concat(e).concat(o.Z.fileUrlThumbnailsExtension),metadata:"".concat(o.Z.fileUrlMetadata,"/").concat(e).concat(o.Z.fileUrlMetadataExtension)}},s=function(e){var n=e.tokenId,t=c(n);return(0,r.jsxs)(i.Z,{className:"text-center",border:"light",children:[(0,r.jsx)("a",{href:"/token/?id=".concat(encodeURIComponent(n)),children:(0,r.jsx)(i.Z.Img,{variant:"top",src:t.thumbnail})}),(0,r.jsxs)(i.Z.Body,{children:[(0,r.jsxs)(i.Z.Title,{children:["#",n]}),(0,r.jsxs)(i.Z.Text,{children:[(0,r.jsx)(a.default,{href:"/token/",as:"/token/?id=".concat(encodeURIComponent(n)),children:(0,r.jsx)("a",{className:"Token-link",children:"Details"})})," |"," ",(0,r.jsx)("a",{href:t.imageUrl4k,className:"Token-link",download:"true",children:"Image"})," |"," ",(0,r.jsx)("a",{href:t.live,className:"Token-link",children:"Live"})]})]})]})}},53672:function(e,n,t){"use strict";t.d(n,{W:function(){return i}});var r=t(67294),a=t(11163);function i(e){var n,t=(0,a.useRouter)(),i=t.query[e];n=void 0===i||"string"===typeof i?i:i.join("");var o=(0,r.useMemo)((function(){return n}),[n]),c=(0,r.useCallback)((function(n){t.isReady&&(t.query[e]=n,t.push(t))}),[e,t]);return t.isReady?[o,c]:[void 0,function(){}]}},9008:function(e,n,t){e.exports=t(5443)},11163:function(e,n,t){e.exports=t(90387)},35005:function(e,n,t){"use strict";var r=t(94184),a=t.n(r),i=t(67294),o=t(70861),c=t(76792),s=t(85893);const l=i.forwardRef((({as:e,bsPrefix:n,variant:t,size:r,active:i,className:l,...u},d)=>{const f=(0,c.vE)(n,"btn"),[h,{tagName:m}]=(0,o.FT)({tagName:e,...u}),v=m;return(0,s.jsx)(v,{...h,...u,ref:d,className:a()(l,f,i&&"active",t&&`${f}-${t}`,r&&`${f}-${r}`,u.href&&u.disabled&&"disabled")})}));l.displayName="Button",l.defaultProps={variant:"primary",active:!1,disabled:!1},n.Z=l},78182:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var r=t(94184),a=t.n(r),i=t(67294),o=t(76792),c=t(66611),s=t(41822),l=t(85893);const u=i.forwardRef((({bsPrefix:e,className:n,variant:t,as:r="img",...i},c)=>{const s=(0,o.vE)(e,"card-img");return(0,l.jsx)(r,{ref:c,className:a()(t?`${s}-${t}`:s,n),...i})}));u.displayName="CardImg";var d=u,f=t(49059);const h=i.forwardRef((({bsPrefix:e,className:n,as:t="div",...r},c)=>{const s=(0,o.vE)(e,"card-header"),u=(0,i.useMemo)((()=>({cardHeaderBsPrefix:s})),[s]);return(0,l.jsx)(f.Z.Provider,{value:u,children:(0,l.jsx)(t,{ref:c,...r,className:a()(n,s)})})}));h.displayName="CardHeader";var m=h;const v=(0,s.Z)("h5"),x=(0,s.Z)("h6"),p=(0,c.Z)("card-body"),y=(0,c.Z)("card-title",{Component:v}),g=(0,c.Z)("card-subtitle",{Component:x}),j=(0,c.Z)("card-link",{Component:"a"}),b=(0,c.Z)("card-text",{Component:"p"}),w=(0,c.Z)("card-footer"),Z=(0,c.Z)("card-img-overlay"),k=i.forwardRef((({bsPrefix:e,className:n,bg:t,text:r,border:i,body:c,children:s,as:u="div",...d},f)=>{const h=(0,o.vE)(e,"card");return(0,l.jsx)(u,{ref:f,...d,className:a()(n,h,t&&`bg-${t}`,r&&`text-${r}`,i&&`border-${i}`),children:c?(0,l.jsx)(p,{children:s}):s})}));k.displayName="Card",k.defaultProps={body:!1};var N=Object.assign(k,{Img:d,Title:y,Subtitle:g,Body:p,Link:j,Text:b,Header:m,Footer:w,ImgOverlay:Z})}},function(e){e.O(0,[78,714,631,506,35,280,9,522,774,888,179],(function(){return n=34858,e(e.s=n);var n}));var n=e.O();_N_E=n}]);