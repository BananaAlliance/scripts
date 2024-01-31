"use strict";(self.webpackChunk_rise_wallet_solflare_extension=self.webpackChunk_rise_wallet_solflare_extension||[]).push([["ActivityPage"],{"./src/pages/Activity/index.js":function(e,t,s){s.r(t),s.d(t,{default:function(){return E}});var n=s("../../../node_modules/react/jsx-runtime.js"),a=s("../../../node_modules/@mui/styles/makeStyles/makeStyles.js"),i=s("../../../node_modules/@mui/material/styles/useTheme.js"),r=s("../../../node_modules/@mui/material/Box/Box.js"),o=s("../../../node_modules/@mui/material/Typography/Typography.js"),l=s("../../libs/foundation-ui/dist/index.js");function c(e){return(0,n.jsx)(l.mzM,{loading:e.loading,title:e.title,subtitle:e.subtitle,avatar:e.avatar,children:e.balances})}var d=s("../../libs/shared/dist/utils/humanDate.js"),u=s("../../../node_modules/react/index.js"),m=s("../../../node_modules/lodash/lodash.js"),p=s("../../../node_modules/react-redux/es/index.js"),h=s("../../libs/solflare-shared/dist/features/activity/store/actions/index.js"),x=s("../../libs/solflare-shared/dist/features/activity/store/selectors/index.js"),f=s("../../libs/solflare-shared/dist/store/selectors/config.js"),g=s("../../libs/shared/dist/utils/displayPrice.js"),j=s("../../libs/solflare-shared/dist/utils/getResizedImageUrl.js"),y=s("../../libs/solflare-shared/dist/utils/truncateMiddle.js"),v=s("../../../node_modules/@mui/material/Tooltip/Tooltip.js"),b=s("../../libs/solflare-shared/dist/store/actions/common.js"),_=s("../../../node_modules/react-i18next/dist/es/useTranslation.js"),k=s("../../libs/solflare-shared/dist/features/pfp/index.js");const w=(0,a.Z)((e=>({avatarWrapper:{marginRight:8},address:{whieSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",cursor:"pointer"},addressTooltip:{"&:hover":{opacity:.7}}})));var T=s("../../../node_modules/@fortawesome/pro-light-svg-icons/index.mjs");function M(e){switch(e){case"faWavePulse":return T.tc2;case"faArrowRight":return T.eFW;case"faPiggyBank":return T.Quw;default:return T.Psp}}const N={Avatar:function(e){return(0,n.jsx)(l.qXA,{src:e.src?(0,j.N)(e.src,{width:100,height:100}):null,icon:M(e.icon),shape:e.shape})},AvatarDouble:function(e){return(0,n.jsx)(l.xgo,{src1:e.src1?(0,j.N)(e.src1,{width:100,height:100}):null,icon1:M(e.icon1),shape1:e.shape1,src2:e.src2?(0,j.N)(e.src2,{width:100,height:100}):null,icon2:M(e.icon2),shape2:e.shape2})},Text:function(e){return(0,n.jsx)("span",{children:e.content})},Icon:function(e){return(0,n.jsx)(l.JO$,{icon:M(e.name)})},Address:function(e){const t=(0,p.v9)(x.yy),s=w(),a=(0,p.I0)(),{t:i}=(0,_.$)();return(0,n.jsxs)(r.Z,{style:{display:"flex",alignItems:"center",maxWidth:170},children:[e.withAvatar&&(0,n.jsx)("div",{className:s.avatarWrapper,children:(0,n.jsx)(k.yq,{size:"s",publicKey:e.content})}),t.hasOwnProperty(e.content)?(0,n.jsx)(v.Z,{placement:"top",title:i("action_view_in_explorer"),className:s.addressTooltip,onClick:t=>{t.stopPropagation(t),a((0,b.Wi)({account:e.content}))},children:(0,n.jsx)("span",{className:s.address,children:t[e.content]})}):(0,n.jsx)(v.Z,{placement:"top",title:i("action_view_in_explorer"),className:s.addressTooltip,onClick:t=>{t.stopPropagation(t),a((0,b.Wi)({account:e.content}))},children:(0,n.jsx)("span",{className:s.address,children:(0,y.r)(e.content)})})]})},ExtLineItem:c,Balances:function(e){const t=e.positives?.map((t=>({...t,image:t.image?(0,j.N)(t.image,{width:100,height:100}):void 0,amount:e.format?`+${(0,g.ED)({amount:t.amount,pricePerCoin:t.price,displayType:"amount"})}`:`+${t.amount}`})))??[],s=e.negatives?.map((t=>({...t,image:t.image?(0,j.N)(t.image,{width:100,height:100}):void 0,amount:e.format?(0,g.ED)({amount:t.amount,pricePerCoin:t.price,displayType:"amount"}):t.amount})))??[];return(0,n.jsx)(l.xei,{shorterNames:e.shorterNames,failedText:e.failedText,withImage:e.withImage,positives:t,negatives:s})},WebLineItem:function(e){const t=e?.blockTime?1e3*e.blockTime:null,s=(0,d.rN)(t,!1,!1);return e.loading?(0,n.jsx)(l.IC6,{blockTime:e?.blockTime?s:null}):(0,n.jsx)(l.pA4,{blockTime:s,event:e.event,details:e.details,children:e.balances})}};function C(e){if("object"!=typeof e||!e)return e;if(Array.isArray(e))return e.map((e=>C(e)));if(void 0===e.type){const t={},s=Object.keys(e);for(const n of s)t[n]=C(e[n]);return t}if(Object.keys(N).includes(e.type)){const t=N[e.type],s=e.props,a={};for(const e of s)e.value&&"object"==typeof e.value?Array.isArray(e.value)?a[e.name]=e.value.map((e=>C(e))):a[e.name]=C(e.value):a[e.name]=e.value;return(0,n.jsx)(t,{...a})}}var D=s("../../../node_modules/redux/es/redux.js"),P=s("../../../node_modules/react-router/esm/react-router.js"),Y=s("../../../node_modules/dayjs/dayjs.min.js"),$=s.n(Y),I=s("./node_modules/react-virtuoso/dist/index.m.js"),Z=s("../../libs/solflare-shared/dist/components/withWallet/index.js"),A=s("../../libs/shared/dist/assets/no-activity.svg"),H=s("../../libs/shared/dist/assets/no-apps-light.svg");const W=(0,a.Z)((e=>({list:{marginLeft:0,marginRight:0},item:{color:e.palette.common.white},pointer:{cursor:"pointer"},price:{opacity:.5}})));var B=(0,D.qC)((0,Z.a)({protectedPage:!0,Fallback:()=>(0,n.jsx)(P.l_,{to:"/"})}),(0,p.$j)(null,{openExplorerTransaction:b.zG}))((({transaction:e,onBack:t,openExplorerTransaction:s})=>{const{t:a}=(0,_.$)(),i=W(),r=[{id:"timestamp",data:(0,n.jsx)(l.cki,{title:a("form_date"),children:(0,n.jsx)("span",{children:`${$()(1e3*e.blockTime).format("YYYY MMMM D")} ${a("at_time")} ${$()(1e3*e.blockTime).format("HH:mm:ss")}`})})},{id:"details",data:(0,n.jsx)(l.cki,{title:a("form_details"),children:C(e.components.expandedData.details)})}];return e.components.expandedData.balances&&r.push({id:"balances",data:(0,n.jsx)(l.cki,{title:a("form_transaction_result"),children:C(e.components.expandedData.balances)})}),e.fee&&r.push({id:"fee",data:(0,n.jsxs)(l.cki,{title:a("form_transaction_fee"),children:[(0,n.jsxs)("span",{children:[e.fee.amount," ",e.fee.symbol]}),(0,n.jsx)(l.ZT$,{variant:"textXS",color:"secondary",children:(0,g.ED)({amount:e.fee.amount*e.fee.price,displayType:"value",prefix:"$"})})]})}),r.push({id:5,data:(0,n.jsxs)(l.cki,{title:a("transaction_id"),childrenClassName:i.pointer,children:[(0,n.jsx)("span",{onClick:()=>{s({signature:e.hash})},children:(0,y.r)(e.hash)}),(0,n.jsx)(l.JO$,{onClick:()=>{s({signature:e.hash})},size:"s",color:"linkPrimary",icon:T.gJF})]})}),(0,n.jsxs)(l.m04,{children:[(0,n.jsx)(l.V1P,{left:(0,n.jsx)(l.KsU,{icon:T.acZ,size:"l",onClick:t}),center:e.components.expandedData.title}),(0,n.jsx)(l.JHu,{children:(0,n.jsx)(l.JOM,{className:i.list,extractKey:e=>e.id,data:r,renderItem:e=>e.data})})]})})),O=e=>{return(0,n.jsx)(n.Fragment,{children:(t=e?.item,t?.components?C(t.components.lineItem):(0,n.jsx)(c,{loading:!0}))});var t};const S=(0,a.Z)((e=>({list:{width:"calc(100% + 32px)",left:-16,position:"relative"},groupHeader:{backgroundColor:e.palette.background.modal,color:"rgba(255, 255, 255, 0.4)",paddingBottom:8,paddingLeft:16,paddingTop:8,fontSize:"12px",lineHeight:"14px",fontWeight:400,position:"relative",top:-1},headerRow:{backgroundColor:"inherit",display:"grid",position:"relative",padding:4,gridTemplateColumns:"200px 200px auto 300px 24px",minHeight:"72px",minWidth:"min-content",alignItems:"center"},row:{borderBottom:`1px solid ${e.palette.common.white05}`,"&:hover":{cursor:"pointer"}},rowLast:{borderBottom:"none"}})));var E=(0,D.qC)((0,Z.a)({protectedPage:!0,Fallback:()=>(0,n.jsx)(P.l_,{to:"/"})}),(0,p.$j)(x.U_))((({wallet:e,signatures:t,loading:s,data:a})=>{const c=(0,i.Z)(),{t:g,i18n:j}=(0,_.$)(),y=S(),{loadTransactions:v,loadSignatures:b}=function({layout:e}){const{signatures:t,publicKey:s,parsed:n,network:a}=(0,p.v9)(x.U_),i=(0,p.v9)(f.eN),r=(0,p.v9)(f.Rx),o=(0,p.I0)(),[l,c]=(0,u.useState)([]),d=(0,m.debounce)(((s,a)=>{if(!s.length)return;const d=s[0].index,u=s[s.length-1].index,p=t.slice(d,u+10);let x=(0,m.difference)(p,n);x=(0,m.difference)(x,l),x.length&&(c((e=>[...e,...x])),setTimeout((()=>{c((e=>(0,m.difference)(e,x)))}),1e3),o((0,h.mC)(r.instance?.publicKey,i.cluster,a,x,e)))}),300);return{loadTransactions:(e,t)=>{d(e,t)},loadSignatures:(e=!1)=>{e||i.cluster===a&&t.length&&s===r.instance?.publicKey?o((0,h.N5)(r.instance?.publicKey,i.cluster)):o((0,h.Qd)(r.instance?.publicKey,i.cluster))}}}({layout:"ext"}),[k,w]=(0,u.useState)(null);(0,u.useEffect)((()=>{const e=setInterval((()=>{b(!0)}),15e3);return()=>clearInterval(e)}),[]),(0,u.useEffect)((()=>{b()}),[e.instance.publicKey]);const[T,M,N]=u.useMemo((()=>{const e={},s=[];t.forEach((t=>{const n=a[t];if(n){const t=$().unix(n.blockTime),a=(0,d.rN)(t.valueOf(),!0,!1,!0);void 0===e[a]?(e[a]=1,s.push(a)):e[a]+=1}}));const n=Object.values(e);let i=0;return[n,s,n.map((e=>(i+=e)-1))]}),[t,a]);return(0,n.jsxs)(n.Fragment,{children:[null!==k&&(0,n.jsx)(B,{transaction:k,onBack:()=>{w(null)}}),(0,n.jsx)(l.V1P,{center:g("header_activity"),textAlign:"left"}),(0,n.jsxs)(l.JHu,{noBottomPadding:!0,children:[0===t.length&&!s&&(0,n.jsxs)(r.Z,{display:"flex",flexDirection:"column",alignItems:"center",my:10,children:[(0,n.jsx)("img",{alt:"No nft",src:c.dark?A:H}),(0,n.jsx)(o.Z,{variant:"bodyS",color:"text.tertiary",children:g("no_recent_activity")})]}),0===t.length&&s&&(0,n.jsxs)(r.Z,{className:y.list,pt:1,children:[(0,n.jsx)(r.Z,{ml:2,mb:1,children:(0,n.jsx)(l.OdW,{variant:"text",__height:16,__width:"20%"})}),[...Array(8)].map(((e,t)=>(0,n.jsx)(r.Z,{class:y.row,children:(0,n.jsx)(O,{item:null})},t)))]}),0!==t.length&&!s&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(I.Px,{className:y.list,groupCounts:T,groupContent:e=>(0,n.jsx)("div",{className:y.groupHeader,children:M[e]}),totalCount:t.length,itemsRendered:e=>v(e,j.language),overscan:10,itemContent:e=>{const s=t[e],i=a[s];return(0,n.jsx)(r.Z,{className:`${y.row} ${N.includes(e)?y.rowLast:""}`,onClick:()=>{i.components&&w(i)},children:(0,n.jsx)(O,{item:i})},e)}})})]})]})}))},"../../libs/shared/dist/utils/humanDate.js":function(e,t,s){s.d(t,{ZR:function(){return o},pz:function(){return r},rN:function(){return i}});var n=s("../../../node_modules/dayjs/dayjs.min.js"),a=s.n(n);const i=(e,t=!0,s=!0,n=!1)=>{if(!e)return"Pending";const i=a()(s?e/1e3:e),r=a()();return i.isToday()?t?"Today":i.format("HH:mm"):i.isYesterday()?t?"Yesterday":i.format("HH:mm"):i.year()===r.year()?i.format(n?"D MMMM":"D MMM"):i.format(n?"D MMMM YYYY":"D MMM YYYY")},r=e=>{if(!e)return"Pending";const t=a()(e),s=a()();return t.isToday()?"Today":t.isYesterday()?"Yesterday":t.year()===s.year()?t.format("MMMM DD"):t.format("MMMM DD, YYYY")},o=e=>{if(!e)return"Pending";const t=a()(e);return`${r(e)} at ${t.format("HH:mm")}`}},"../../libs/shared/dist/assets/no-activity.svg":function(e,t,s){e.exports=s.p+"assets/no-activity.7bed8688..svg"},"../../libs/shared/dist/assets/no-apps-light.svg":function(e,t,s){e.exports=s.p+"assets/no-apps-light.9b6ced7e..svg"}}]);