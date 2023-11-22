/*! For license information please see 35b0740ccdec25a21cf73f196c9db4170241d10c-c34654ecd23767211e5f.js.LICENSE.txt */
"use strict";(self.webpackChunkhelx_marketing_site=self.webpackChunkhelx_marketing_site||[]).push([[422],{6968:function(e,o,t){t.d(o,{Z:function(){return k}});var a=t(3366),n=t(7462),r=t(7294),i=t(5505),c=t(6193),l=t(9236),s=t(7663),d=t(3656),p=t(184),u=t(6655),v=t(9240),m=t(9508),h=t(1351);function b(e){return(0,h.Z)("MuiButton",e)}var f=(0,m.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var x=r.createContext({}),g=t(5893);const S=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),z=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],o["".concat(t.variant).concat((0,v.Z)(t.color))],o["size".concat((0,v.Z)(t.size))],o["".concat(t.variant,"Size").concat((0,v.Z)(t.size))],"inherit"===t.color&&o.colorInherit,t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth]}})((e=>{let{theme:o,ownerState:t}=e;var a,r;return(0,n.Z)({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:o.vars?"rgba(".concat(o.vars.palette.text.primaryChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:o.vars?"rgba(".concat(o.vars.palette[t.color].mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(o.palette[t.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:"1px solid ".concat((o.vars||o).palette[t.color].main),backgroundColor:o.vars?"rgba(".concat(o.vars.palette[t.color].mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(o.palette[t.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(o.vars||o).palette.grey.A100,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(o.vars||o).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[t.color].main}}),"&:active":(0,n.Z)({},"contained"===t.variant&&{boxShadow:(o.vars||o).shadows[8]}),["&.".concat(f.focusVisible)]:(0,n.Z)({},"contained"===t.variant&&{boxShadow:(o.vars||o).shadows[6]}),["&.".concat(f.disabled)]:(0,n.Z)({color:(o.vars||o).palette.action.disabled},"outlined"===t.variant&&{border:"1px solid ".concat((o.vars||o).palette.action.disabledBackground)},"outlined"===t.variant&&"secondary"===t.color&&{border:"1px solid ".concat((o.vars||o).palette.action.disabled)},"contained"===t.variant&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(o.vars||o).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(o.vars||o).palette[t.color].main,border:o.vars?"1px solid rgba(".concat(o.vars.palette[t.color].mainChannel," / 0.5)"):"1px solid ".concat((0,s.Fq)(o.palette[t.color].main,.5))},"contained"===t.variant&&{color:o.vars?o.vars.palette.text.primary:null==(a=(r=o.palette).getContrastText)?void 0:a.call(r,o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],boxShadow:(o.vars||o).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(o.vars||o).palette[t.color].contrastText,backgroundColor:(o.vars||o).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(e=>{let{ownerState:o}=e;return o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},["&.".concat(f.focusVisible)]:{boxShadow:"none"},"&:active":{boxShadow:"none"},["&.".concat(f.disabled)]:{boxShadow:"none"}}})),Z=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.startIcon,o["iconSize".concat((0,v.Z)(t.size))]]}})((e=>{let{ownerState:o}=e;return(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===o.size&&{marginLeft:-2},y(o))})),w=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.endIcon,o["iconSize".concat((0,v.Z)(t.size))]]}})((e=>{let{ownerState:o}=e;return(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===o.size&&{marginRight:-2},y(o))}));var k=r.forwardRef((function(e,o){const t=r.useContext(x),s=(0,c.Z)(t,e),d=(0,p.Z)({props:s,name:"MuiButton"}),{children:u,color:m="primary",component:h="button",className:f,disabled:y=!1,disableElevation:k=!1,disableFocusRipple:C=!1,endIcon:I,focusVisibleClassName:R,fullWidth:E=!1,size:W="medium",startIcon:M,type:B,variant:P="text"}=d,j=(0,a.Z)(d,S),N=(0,n.Z)({},d,{color:m,component:h,disabled:y,disableElevation:k,disableFocusRipple:C,fullWidth:E,size:W,type:B,variant:P}),F=(e=>{const{color:o,disableElevation:t,fullWidth:a,size:r,variant:i,classes:c}=e,s={root:["root",i,"".concat(i).concat((0,v.Z)(o)),"size".concat((0,v.Z)(r)),"".concat(i,"Size").concat((0,v.Z)(r)),"inherit"===o&&"colorInherit",t&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,v.Z)(r))],endIcon:["endIcon","iconSize".concat((0,v.Z)(r))]},d=(0,l.Z)(s,b,c);return(0,n.Z)({},c,d)})(N),L=M&&(0,g.jsx)(Z,{className:F.startIcon,ownerState:N,children:M}),O=I&&(0,g.jsx)(w,{className:F.endIcon,ownerState:N,children:I});return(0,g.jsxs)(z,(0,n.Z)({ownerState:N,className:(0,i.Z)(t.className,F.root,f),component:h,disabled:y,focusRipple:!C,focusVisibleClassName:(0,i.Z)(F.focusVisible,R),ref:o,type:B},j,{classes:F,children:[L,u,O]}))}))},4382:function(e,o,t){var a=t(3366),n=t(7462),r=t(7294),i=t(2692),c=t(5332),l=t(8297),s=t(6486),d=t(3656),p=t(184),u=t(5893);const v=["component","direction","spacing","divider","children"];function m(e,o){const t=r.Children.toArray(e).filter(Boolean);return t.reduce(((e,a,n)=>(e.push(a),n<t.length-1&&e.push(r.cloneElement(o,{key:"separator-".concat(n)})),e)),[])}const h=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>[o.root]})((e=>{let{ownerState:o,theme:t}=e,a=(0,n.Z)({display:"flex",flexDirection:"column"},(0,i.k9)({theme:t},(0,i.P$)({values:o.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(o.spacing){const e=(0,c.hB)(t),n=Object.keys(t.breakpoints.values).reduce(((e,t)=>(("object"==typeof o.spacing&&null!=o.spacing[t]||"object"==typeof o.direction&&null!=o.direction[t])&&(e[t]=!0),e)),{}),r=(0,i.P$)({values:o.direction,base:n}),l=(0,i.P$)({values:o.spacing,base:n});"object"==typeof r&&Object.keys(r).forEach(((e,o,t)=>{if(!r[e]){const a=o>0?r[t[o-1]]:"column";r[e]=a}}));const d=(t,a)=>{return{"& > :not(style) + :not(style)":{margin:0,["margin".concat((n=a?r[a]:o.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n]))]:(0,c.NA)(e,t)}};var n};a=(0,s.Z)(a,(0,i.k9)({theme:t},l,d))}return a=(0,i.dt)(t.breakpoints,a),a})),b=r.forwardRef((function(e,o){const t=(0,p.Z)({props:e,name:"MuiStack"}),r=(0,l.Z)(t),{component:i="div",direction:c="column",spacing:s=0,divider:d,children:b}=r,f=(0,a.Z)(r,v),x={direction:c,spacing:s};return(0,u.jsx)(h,(0,n.Z)({as:i,ownerState:x,ref:o},f,{children:d?m(b,d):b}))}));o.Z=b},4817:function(e,o){var t,a=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),d=Symbol.for("react.server_context"),p=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen");function f(e){if("object"==typeof e&&null!==e){var o=e.$$typeof;switch(o){case a:switch(e=e.type){case r:case c:case i:case u:case v:return e;default:switch(e=e&&e.$$typeof){case d:case s:case p:case h:case m:case l:return e;default:return o}}case n:return o}}}t=Symbol.for("react.module.reference")},9665:function(e,o,t){t(4817)},6127:function(e,o,t){t.d(o,{Z:function(){return n}});var a=t(7294);var n=function(e){let{controlled:o,default:t,name:n,state:r="value"}=e;const{current:i}=a.useRef(void 0!==o),[c,l]=a.useState(t);return[i?o:c,a.useCallback((e=>{i||l(e)}),[])]}},70:function(e,o,t){t.d(o,{x:function(){return i}});var a=t(7294),n=t(9211),r=t(9243);const i=e=>{let{maxWidth:o="lg",backgroundColor:t="transparent",children:i,sx:c}=e;return a.createElement(n.Z,{sx:{backgroundColor:t,width:"100%",display:"flow-root"}}," ",a.createElement(r.Z,{maxWidth:o,sx:{marginY:"4rem",...c}},i))}}}]);
//# sourceMappingURL=35b0740ccdec25a21cf73f196c9db4170241d10c-c34654ecd23767211e5f.js.map