"use strict";(self.webpackChunk_rise_wallet_solflare_extension=self.webpackChunk_rise_wallet_solflare_extension||[]).push([["libs_shared_dist_features_currencies_constants_index_js-libs_solflare-shared_dist_components_-7c1d80"],{"../../libs/shared/dist/features/currencies/constants/index.js":function(e,s,n){n.d(s,{a7:function(){return i.a7},Ow:function(){return i.Ow},qY:function(){return i.qY},MB:function(){return i.MB}});var t=n("../../libs/shared/dist/assets/flags/index.ts");t.Z.us,t.Z.ae,t.Z.ar,t.Z.au,t.Z.bd,t.Z.bh,t.Z.bm,t.Z.br,t.Z.ca,t.Z.ch,t.Z.cl,t.Z.cn,t.Z.cz,t.Z.dk,t.Z.eu,t.Z.gb,t.Z.hk,t.Z.hu,t.Z.id,t.Z.il,t.Z.ind,t.Z.jp,t.Z.kr,t.Z.kw,t.Z.lk,t.Z.mm,t.Z.mx,t.Z.my,t.Z.ng,t.Z.no,t.Z.nz,t.Z.ph,t.Z.pk,t.Z.pl,t.Z.ru,t.Z.sa,t.Z.se,t.Z.sg,t.Z.th,t.Z.tr,t.Z.tw,t.Z.ua,t.Z.ve,t.Z.vn,t.Z.za;var i=n("../../libs/shared/dist/features/currencies/constants/currencies.js")},"../../libs/solflare-shared/dist/components/BlockedOriginConnectWarning/index.js":function(e,s,n){var t=n("../../../node_modules/react/jsx-runtime.js"),i=n("../../../node_modules/react/index.js"),a=n("../../../node_modules/prop-types/index.js"),o=n.n(a),r=n("../../../node_modules/@mui/material/Container/Container.js"),l=n("../../../node_modules/@mui/material/Box/Box.js"),c=n("../../../node_modules/@mui/material/Typography/Typography.js"),d=n("../../../node_modules/@mui/material/Button/Button.js"),u=n("../../../node_modules/@mui/styles/withStyles/withStyles.js"),m=n("../../libs/solflare-shared/dist/assets/connect-blocked-icon.png");let h=class extends i.Component{render(){const{classes:e,origin:s,onReject:n,onApprove:i}=this.props;return(0,t.jsxs)(r.Z,{maxWidth:"sm",children:[(0,t.jsxs)(l.Z,{mb:4,textAlign:"center",children:[(0,t.jsx)("img",{className:e.image,src:m,alt:""}),(0,t.jsx)(c.Z,{variant:"body1",color:"error",children:s})]}),(0,t.jsxs)(l.Z,{mb:6,textAlign:"center",children:[(0,t.jsx)(c.Z,{variant:"body2",gutterBottom:!0,children:"This website is blocked because it’s been reported as a malicious website."}),(0,t.jsx)(l.Z,{my:2}),(0,t.jsxs)(c.Z,{variant:"body2",children:["If you believe the website has been blocked in error, please",(0,t.jsx)(c.Z,{component:"a",href:"https://academy.solflare.com/guides/?get_help=true",target:"_blank",variant:"body1",className:e.link,children:"contact our support."})]})]}),(0,t.jsxs)(l.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",mb:2,children:[(0,t.jsx)(d.Z,{variant:"contained",className:e.whiteButton,onClick:n,children:"Back to safety"}),(0,t.jsx)(d.Z,{className:e.redTextButton,variant:"text",color:"error",onClick:i,children:"Ignore warning"})]})]})}};h.propTypes={classes:o().object,onApprove:o().func,onReject:o().func,origin:o().string},h=function(e,s,n,t){var i,a=arguments.length,o=a<3?s:null===t?t=Object.getOwnPropertyDescriptor(s,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,s,n,t);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(o=(a<3?i(o):a>3?i(s,n,o):i(s,n))||o);return a>3&&o&&Object.defineProperty(s,n,o),o}([(0,u.Z)((e=>({redTextButton:{marginTop:e.spacing(2),color:e.palette.error.main},whiteButton:{color:e.palette.common.black,background:e.palette.common.white},image:{width:64,height:64,marginBottom:e.spacing(2),marginTop:e.spacing(2)},link:{textDecoration:"underline",marginLeft:4,color:e.palette.common.white}})))],h),s.Z=h},"../../libs/solflare-shared/dist/components/ConfirmPopup/Connect/index.js":function(e,s,n){var t=n("../../../node_modules/react/jsx-runtime.js"),i=n("../../../node_modules/react/index.js"),a=n("../../../node_modules/react-i18next/dist/es/useTranslation.js"),o=n("../../libs/solflare-shared/dist/utils/extension.js"),r=n("../../libs/solflare-shared/dist/wallet/index.js"),l=n("../../libs/foundation-ui/dist/index.js"),c=n("../../libs/solflare-shared/dist/features/settings/index.js"),d=n("../../libs/solflare-shared/dist/features/featureFlags/index.js");const u=({origin:e,originParam:s,originTitle:n,onConnect:u,onReject:m})=>{const{t:h}=(0,a.$)(),[g,p]=(0,i.useState)(!1),[x,j]=(0,i.useState)(!1),{wallet:f}=(0,r.we)(),{appsByOrigin:b,canChangeAutoApprove:_}=(0,c.Ql)(),k=_(e);return(0,i.useEffect)((()=>j(!!b[s]?.autoApprove)),[b,s]),(0,t.jsx)(l.m04,{size:"fullPage",children:(0,t.jsxs)(l.zM,{children:[(0,t.jsx)(l.V1P,{center:h("connect_page_title")}),(0,t.jsxs)(l.JHu,{gap:"l",children:[(0,t.jsx)(l.SgL,{title:n||e,subtitle:n?e:void 0,avatarSrc:`https://www.google.com/s2/favicons?domain=${e}&sz=128`}),(0,t.jsxs)(l.cWG,{title:h("connect_page_allow_to"),children:[(0,t.jsx)(l.$BJ,{defaultChecked:!0,disabled:!0,children:(0,t.jsx)(l.keQ,{children:h("connect_page_allow_view_address")})}),(0,t.jsx)(l.$BJ,{defaultChecked:!0,disabled:!0,children:(0,t.jsx)(l.keQ,{children:h("connect_page_allow_suggest_transactions")})}),o.p1&&(0,t.jsx)(l.$BJ,{checked:g,onClick:e=>{e?.stopPropagation(),p((e=>!e))},id:"trusted-check",children:(0,t.jsx)(l.keQ,{htmlFor:"trusted-check",children:h("connect_page_auto_connect")})}),o.p1&&k&&(0,t.jsx)(l.$BJ,{checked:x,onClick:e=>{e?.stopPropagation(),j((e=>!e))},id:"auto-approve-check",children:(0,t.jsx)(l.keQ,{htmlFor:"auto-approve-check",infoTooltip:h("connect_page_auto_approve_subtitle"),children:h("connect_page_auto_approve")})})]})]}),(0,t.jsxs)(l.p4T,{variant:"fixed",children:[(0,t.jsx)(l.R$6,{text:h("connect_page_connect_only_trusted")}),(0,t.jsxs)(l.hE2,{children:[(0,t.jsx)(l.zxk,{variant:"secondary",onClick:m,children:h("action_cancel")}),(0,t.jsx)(l.zxk,{onClick:async()=>{await u(f.publicKey,!o.p1,g,x),(0,d.dB)({dappUrl:s||"",autoapprove:!!b[s]?.autoApprove,autoconnect:!1}),o.p1&&window.close()},children:h("action_connect")})]})]})]})})};s.Z=e=>(0,t.jsx)(c.rQ,{children:(0,t.jsx)(u,{...e})})},"../../libs/solflare-shared/dist/components/ConfirmPopup/Sign/index.js":function(e,s,n){n.d(s,{Z:function(){return H}});var t=n("../../../node_modules/react/jsx-runtime.js"),i=n("../../../node_modules/react/index.js"),a=n("../../../node_modules/react-redux/es/index.js"),o=n("../../../node_modules/@mui/material/Container/Container.js"),r=n("../../../node_modules/react-i18next/dist/es/useTranslation.js"),l=n("../../../node_modules/bs58/index.js"),c=n.n(l),d=n("../../libs/solflare-shared/dist/utils/signMessageTransaction.js"),u=n("../../libs/foundation-ui/dist/index.js"),m=n("../../libs/solflare-shared/dist/utils/urlParams.js"),h=n("../../../node_modules/lodash/lodash.js"),g=n("../../libs/solflare-shared/dist/components/withWallet/index.js"),p=n("../../libs/solflare-shared/dist/utils/truncateMiddle.js"),x=n("../../libs/solflare-shared/dist/constants/mints.js"),j=n("../../../node_modules/@fortawesome/pro-light-svg-icons/index.mjs"),f=n("../../../node_modules/@fortawesome/pro-solid-svg-icons/index.mjs"),b=n("../../libs/shared/dist/utils/displayPrice.js"),_=({encodedMessage:e,isLoading:s,isError:n,balanceChanges:i,tokenDelegationChanges:a,stakeAuthorityChanges:o,isDetectingSimulation:l,simulatedMints:c,showAdvanced:d,toggleShowAdvanced:m,confirmCheckboxChecked:h,showConfirmCheckbox:g,toggleConfirmCheckbox:_,onReload:k})=>{const{t:y}=(0,r.$)(),w=e=>{const s=e.mint?.toString();return c[s]?.name?c[s].name||"":(0,p.r)(s)},C=e=>{const s=e.mint?.toString();return c[s]?.symbol&&c[s].symbol||""},v=e=>{const s=e.mint?.toString();return c[s]&&(c[s].name||c[s].symbol)||(0,p.r)(s)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.xP0,{children:(0,t.jsx)(u.rso,{title:(0,t.jsxs)(t.Fragment,{children:[y("transaction_estimated_balance_change")," ",(0,t.jsx)(u.bEE,{tooltip:y("transaction_estimated_balance_change_description")})]}),rightItem:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.KsU,{icon:d?j.hQ:j.wR8,onClick:m,disabled:s}),(0,t.jsx)(u.KsU,{icon:j.paY,onClick:k,disabled:s})]}),simulationItems:s?(0,t.jsx)(u.Ddw,{}):(0,t.jsxs)(t.Fragment,{children:[n&&(0,t.jsx)(u.Q2Q,{title:(0,t.jsx)(u.osW,{variant:"warning",strong:!0,children:y("transaction_unknown_balance_changes")}),children:(0,t.jsx)(u.Ce,{icon:f.xHz,size:"m",background:"warning"})}),!i.length&&!n&&(0,t.jsx)(u.Q2Q,{title:(0,t.jsx)(u.osW,{strong:!0,children:y("transaction_no_balance_changes")}),children:(0,t.jsx)(u.Ce,{icon:f.DBf,size:"m",background:"info"})}),a.length>0&&a.map(((e,s)=>{const n=e.mint,i=c[n];return(0,t.jsx)(u.bwf,{title:v(e),avatar:(0,t.jsx)(u.svR,{bottomRight:{asset:f.WV2,variant:"warning"},children:(0,t.jsx)(u.qEK,{src:i?.logoUrl||void 0})}),amount:`${e.afterDelegatedUiAmount} ${v(e)}`},s)})),o.length>0&&o.map(((e,s)=>(0,t.jsx)(u.bwf,{title:y("transaction_staking_account"),subtitle:(0,p.r)(e.publicKey),avatar:(0,t.jsx)(u.qEK,{src:x.vx.logoURI}),amount:`${e.uiAmount} SOL`},s))),i.map(((e,s)=>{const n=e.mint?.toString(),i=c[n||""],a="+"===e.uiDifference.charAt(0)?e.uiDifference.substring(1):e.uiDifference;return(0,t.jsx)(u.bwf,{title:w(e),avatar:(0,t.jsx)(u.qEK,{src:i?.logoUrl??void 0}),amount:`${+a>0?"+":""}${(0,b.ED)({amount:a,suffix:` ${C(e)||""}`,displayType:"long"})}`},s)}))]})})}),d&&(0,t.jsx)(u.xP0,{children:(0,t.jsx)(u.S$B,{title:(0,t.jsx)(u.NZf,{title:y("transaction_payload")}),children:(0,t.jsx)(u.wXW,{children:e})})}),!n&&(0,t.jsxs)(u.M_y,{children:[l&&(0,t.jsx)(u.bZj,{title:y("transaction_fake_title"),message:y("transaction_fake_description"),variant:"warning"}),a.length>0&&(0,t.jsx)(u.bZj,{title:y("transaction_delegation_title"),message:y("transaction_delegation_description"),variant:"warning"}),o.length>0&&(0,t.jsx)(u.bZj,{title:y("transaction_stake_authority_title"),message:y("transaction_stake_authority_description"),variant:"warning"}),g&&(0,t.jsx)(u.$BJ,{checked:h,onClick:_,id:"warning-check",children:(0,t.jsx)(u.keQ,{htmlFor:"warning-check",children:y("transaction_trust_checkbox")})})]})]})},k=n("../../libs/solflare-shared/dist/store/api/account.js"),y=n("../../libs/solflare-shared/dist/features/settings/index.js"),w=(0,g.a)()((({origin:e,message:s,network:n,wallet:a,rawMessage:o,onReload:r,showCheckbox:l,setShowCheckbox:d,checked:u,setChecked:m,updatePosthogParams:g})=>{const[p,j]=(0,i.useState)(!0),[f,b]=(0,i.useState)([]),[w,C]=(0,i.useState)([]),[v,Z]=(0,i.useState)([]),[S,T]=(0,i.useState)(!1),[z,P]=(0,i.useState)({}),[D,E]=(0,i.useState)(!1),[A,$]=(0,i.useState)(!1),{cluster:R}=(0,y.uJ)();return(0,i.useEffect)((()=>{S||v.length>0||w.length>0?d(!0):d(!1)}),[S,d,w.length,v.length]),(0,i.useEffect)((()=>{(async()=>{try{const n=await(0,k.ts)({message:c().encode(s),pubkey:a.getPublicKey(),origin:e,network:R});b(n.balanceChanges),C(n.stakeAuthorityChanges),Z(n.tokenDelegationChanges),T(n.isDetectingSimulation),P(n.mints),n.simulationErrors.length&&E(!0),j(!1)}catch(e){j(!1),E(!0)}})()}),[]),(0,i.useEffect)((()=>{const e={};S&&(e.isFakeSimulation=!0),w.length&&(e.isStakeDelegationDetected=!0),v.length&&(e.isTokenDelegationDetected=!0),(f.length>1||f[0]?.mint===x.BH&&Math.abs(+f[0]?.uiDifference)>.001)&&(e.isFinancialTransaction=!0),D&&(e.isSimulationSuccessful=!1),!(0,h.isEmpty)(e)&&g(e)}),[S,w,v,f,D,g]),(0,t.jsx)(_,{encodedMessage:o,isLoading:p,isError:D,balanceChanges:f,tokenDelegationChanges:v,stakeAuthorityChanges:w,isDetectingSimulation:S,simulatedMints:z,showAdvanced:A,toggleShowAdvanced:()=>$((e=>!e)),confirmCheckboxChecked:u,showConfirmCheckbox:l,toggleConfirmCheckbox:()=>m((e=>!e)),onReload:r})})),C=({index:e,origin:s,message:n,network:a,rawMessage:o,showCheckbox:r,setShowCheckbox:l,checked:c,setChecked:d,updatePosthogParams:u})=>{const[m,h]=(0,i.useState)(0);return(0,t.jsx)(w,{index:e,origin:s,network:a,message:n,onReload:()=>h((e=>e+1)),rawMessage:o,showCheckbox:r,setShowCheckbox:l,checked:c,setChecked:d,updatePosthogParams:u},m)},v=({messages:e,origin:s,network:n,onReject:a,onApprove:o})=>{const[l,h]=(0,i.useState)(!1),[g,p]=(0,i.useState)(!1),[x,j]=(0,i.useState)({isFakeSimulation:!1,isStakeDelegationDetected:!1,isTokenDelegationDetected:!1,isFinancialTransaction:!1,isSimulationSuccessful:!0}),{t:f}=(0,r.$)(),{title:b}=(0,m.A)(),_=(0,i.useCallback)((e=>{j((s=>({...s,...e})))}),[]),k=(0,i.useMemo)((()=>e?.map((e=>(0,d.M)(e)))),[e]),y=(0,i.useMemo)((()=>e?.map((e=>c().encode(e)))),[e]);return(0,t.jsx)(u.m04,{size:"fullPage",children:(0,t.jsxs)(u.zM,{children:[(0,t.jsx)(u.V1P,{center:e&&e.length>1?f("approve_transaction_few"):f("approve_transaction_one")}),(0,t.jsxs)(u.JHu,{gap:"l",children:[(0,t.jsx)(u.SgL,{title:b||s,subtitle:b?s:void 0,avatarSrc:`https://www.google.com/s2/favicons?domain=${s}&sz=128`}),e?.map(((i,a)=>k?.[a]?(0,t.jsx)(u.S$B,{title:(0,t.jsx)(u.NZf,{title:f("transaction_message"),tooltip:(0,t.jsx)(u.bEE,{tooltip:f("transaction_sign_message_explanation")})}),children:(0,t.jsx)(u.wXW,{children:k[a]})}):(0,t.jsx)(C,{origin:s,network:n,message:e?.[a],index:a,rawMessage:y?.[a]||"",showCheckbox:l,setShowCheckbox:h,checked:g,setChecked:p,updatePosthogParams:_})))]}),(0,t.jsx)(u.p4T,{variant:"fixed",children:(0,t.jsxs)(u.hE2,{children:[(0,t.jsx)(u.zxk,{variant:"secondary",onClick:a,children:f("action_reject_case")}),(0,t.jsx)(u.zxk,{disabled:l&&!g,onClick:()=>o(x),children:f("action_approve_case")})]})})]})})},Z=n("../../../node_modules/prop-types/index.js"),S=n.n(Z),T=n("../../../node_modules/react-i18next/dist/es/withTranslation.js");let z=class extends i.Component{constructor(e){super(e),this.getMessage=({message:e,display:s})=>{const{t:n}=this.props;return"utf8"===s?(new TextDecoder).decode(e):"hex"===s?`0x${i=e,Array.prototype.map.call(i,(e=>`00${e.toString(16)}`.slice(-2))).join("")}`:(0,t.jsx)("i",{children:n("error_unable_to_decode_message")});var i},this.message=this.getMessage(e)}render(){const{origin:e,t:s,onReject:n,onApprove:i}=this.props,{title:a}=(0,m.A)();return(0,t.jsx)(u.m04,{size:"fullPage",children:(0,t.jsxs)(u.zM,{children:[(0,t.jsx)(u.V1P,{center:s("transaction_sign_message")}),(0,t.jsxs)(u.JHu,{gap:"l",children:[(0,t.jsx)(u.SgL,{title:a||e,subtitle:a?e:void 0,avatarSrc:`https://www.google.com/s2/favicons?domain=${e}&sz=128`}),(0,t.jsx)(u.S$B,{title:(0,t.jsx)(u.NZf,{title:s("transaction_message"),tooltip:(0,t.jsx)(u.bEE,{tooltip:s("transaction_sign_message_explanation")})}),children:(0,t.jsx)(u.wXW,{children:this.message})})]}),(0,t.jsx)(u.p4T,{children:(0,t.jsxs)(u.hE2,{children:[(0,t.jsx)(u.zxk,{variant:"secondary",onClick:n,children:s("action_reject_case")}),(0,t.jsx)(u.zxk,{onClick:i,children:s("action_approve_case")})]})})]})})}};z.propTypes={t:S().func,origin:S().string,message:S().any,display:S().any,onReject:S().func,onApprove:S().func},z=function(e,s,n,t){var i,a=arguments.length,o=a<3?s:null===t?t=Object.getOwnPropertyDescriptor(s,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,s,n,t);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(o=(a<3?i(o):a>3?i(s,n,o):i(s,n))||o);return a>3&&o&&Object.defineProperty(s,n,o),o}([(0,T.Z)()],z);var P=z,D=n("../../libs/solflare-shared/dist/storage/solflareService.js"),E=n("../../../node_modules/uuid/dist/esm-browser/v4.js");function A(e){if(e.length)return Uint8Array.from(e);{const s=(0,h.max)((0,h.keys)(e).map((e=>parseInt(e,10))));return Uint8Array.from({...e,length:s+1})}}n("../../../node_modules/buffer/index.js").Buffer;var $=n("../../../node_modules/@solana/web3.js/lib/index.browser.esm.js"),R=n("../../../node_modules/console-browserify/index.js"),B=n("../../libs/solflare-shared/dist/wallet/index.js"),M=n("../../libs/solflare-shared/dist/store/api/utils.js");(0,M.fb)((async function({connection:e}){return e}));const N=(0,M.fb)((async function({sendConnection:e}){return e}));var q=n("../../libs/solflare-shared/dist/wallet/components/KeystoneQRConfirm/index.js"),I=n("../../libs/solflare-shared/dist/wallet/context/index.js"),O=n("../../libs/solflare-shared/dist/assets/ledger-confirm.svg");const Q=n("../../../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js").Z.img`
  width: 150px;
  margin: 24px auto 0 auto;
`;var V=()=>{const{t:e}=(0,r.$)(),{transactionTitle:s}=(0,I.w)();return(0,t.jsxs)(u.JHu,{children:[(0,t.jsx)(u.V1P,{center:s||e("confirm_transaction_title")}),(0,t.jsx)(u.ZT$,{variant:"textM",alignCenter:!0,children:e("confirm_ledger_transaction")}),(0,t.jsx)(Q,{src:O,alt:"Ledger"})]})},K=n("../../libs/rise-ui/dist/index.js"),F=n("../../libs/wallet-core/dist/solana/burner.js"),L=n("../../libs/solflare-shared/dist/hooks/useScreenSize.js"),U=n("../../libs/wallet-core/dist/solana/mnemonic.js"),J=n("../../libs/wallet-core/dist/solana/privateKey.js"),W=n("../../../node_modules/console-browserify/index.js"),H=({network:e,onCancelSign:s,onSign:n,origin:l,originParam:d,originTitle:m,request:h})=>{const{t:g}=(0,r.$)(),p=(0,a.I0)(),{signTransaction:x,signAllTransactions:j,wallet:f,isKeystonePending:b,isLedgerPending:_}=(0,B.we)(),{width:k}=(0,L.e)(),y=(0,i.useMemo)((()=>function({method:e,params:s}){if("signTransaction"===e)return[c().decode(s?.message)];if("signAllTransactions"===e)return s?.messages?.map((e=>c().decode(e)));if("signAllTransactionsV2"===e)return s?.transactions?.map((e=>{const s=c().decode(e);return $.VersionedTransaction.deserialize(s)?.message?.serialize()}));if("sign"===e)return[A(s?.data)];if("signMessage"===e)return[A(s?.message)];if("signAndSendTransaction"===e||"signTransactionV2"===e){const e=c().decode(s?.transaction);return[$.VersionedTransaction.deserialize(e)?.message?.serialize()]}return null}(h)),[h]),w=(0,i.useMemo)((()=>function(e,s){if("signTransaction"===e.method||"signTransactionV2"===e.method||"signAllTransactions"===e.method||"signAllTransactionsV2"===e.method||"signAndSendTransaction"===e.method)return"transaction";try{const e=$.VersionedMessage.deserialize(s[0]);if(e&&e?.header?.numRequiredSignatures<=64&&e.recentBlockhash)return"transaction"}catch(e){R.info("No message instance",e)}return"message"}(h,y)),[y,h]),C=(0,i.useCallback)((async t=>{const i={...t,dappUrl:d,autoapprove:!1};try{if("signAllTransactions"===h.method){const e=(await j(y))?.map((e=>c().encode(e)));if(!e)return void s(g("transaction_canceled"));n({signatures:e},i)}else if("signAllTransactionsV2"===h.method){const e=h.params?.transactions?.map((e=>$.VersionedTransaction.deserialize(c().decode(e)))),t=await j(y);if(!t)return void s(g("transaction_canceled"));const a=e.map(((e,s)=>(e.addSignature(new $.PublicKey(f.publicKey),t[s]),e)));n({transactions:a.map((e=>c().encode(e.serialize())))},i)}else if("signTransactionV2"===h.method||"signAndSendTransaction"===h.method){const t=$.VersionedTransaction.deserialize(c().decode(h.params?.transaction)),a=await x(y?.[0]);if(!a)return void s(g("transaction_canceled"));if(t.addSignature(new $.PublicKey(f.publicKey),a),"signAndSendTransaction"===h.method){const s=await p(N({},e)),a=await s.sendRawTransaction(t.serialize(),h.params?.options);n({signature:a},i)}else n({transaction:c().encode(t.serialize())},i)}else{const e=await x(y?.[0]),t=c().encode(e);if(!t)return void s(g("transaction_canceled"));"message"===w&&(async({message:e,origin:s,title:n})=>{const t=await D.Z.solflaresigneddata.get()||[],i=(0,E.Z)();t.length>100&&t.shift(),t.push({id:i,message:e,origin:s,title:n,timestamp:Math.floor(new Date/1e3)}),D.Z.solflaresigneddata.set(t)})({message:(new TextDecoder).decode(y?.[0]),origin:l,title:m}),n({signature:t},i)}}catch(e){W.log("catch err",e),s(e?.message||g("error_signing_failed"))}}),[y,p,w,e,s,n,l,d,m,h.method,h.params?.options,h.params?.transaction,h.params?.transactions,j,x,g,f.publicKey]),Z=(0,i.useCallback)((async()=>{const e=(await D.Z.solflaretrustedappsperwallet.get())[f.publicKey]?.[d];e?.autoApprove&&await C()}),[C,d,f.publicKey]);return(0,i.useEffect)((()=>{(f?.instance instanceof F.eV||f?.instance instanceof U.Bn||f?.instance instanceof J.aV)&&Z()}),[Z,f?.instance]),(0,t.jsxs)(o.Z,{maxWidth:"sm",sx:{marginTop:"16px"},children:["transaction"===w&&(0,t.jsx)(v,{messages:y,origin:l,network:e,onReject:()=>s(g("transaction_canceled")),onApprove:C}),"message"===w&&(0,t.jsx)(P,{message:y?.[0],display:h?.params?.display,origin:l,onReject:()=>s(g("transaction_canceled")),onApprove:C}),b&&(k<=375?(0,t.jsx)(u.m04,{size:"fullPage",children:(0,t.jsx)(q.Z,{isExtension:!0})}):(0,t.jsx)(K.u_,{open:!0,scroll:"body",disableScrollLock:!1,children:(0,t.jsx)(q.Z,{})})),_&&(k<=375?(0,t.jsx)(u.m04,{size:"fullPage",children:(0,t.jsx)(V,{})}):(0,t.jsx)(K.u_,{open:!0,scroll:"body",disableScrollLock:!1,children:(0,t.jsx)(V,{})}))]})}},"../../libs/solflare-shared/dist/components/FcmNotifications/index.js":function(e,s,n){var t=n("../../../node_modules/react/jsx-runtime.js"),i=n("../../../node_modules/react/index.js"),a=n("../../../node_modules/react-i18next/dist/es/useTranslation.js"),o=n("../../../node_modules/react-redux/es/index.js"),r=n("../../../node_modules/@mui/material/Box/Box.js"),l=n("../../../node_modules/@mui/material/Container/Container.js"),c=n("../../../node_modules/@mui/material/Button/Button.js"),d=n("../../../node_modules/@mui/material/IconButton/IconButton.js"),u=n("../../../node_modules/@mui/styles/makeStyles/makeStyles.js"),m=n("../../../node_modules/@mui/icons-material/esm/Close.js"),h=n("../../libs/solflare-shared/dist/features/notifications/index.js"),g=n("../../libs/solflare-shared/dist/storage/solflareService.js"),p=n("../../libs/solflare-shared/dist/utils/notifications.js"),x=n("../../libs/solflare-shared/dist/constants/networks.js"),j=n("../../libs/solflare-shared/dist/store/selectors/config.js"),f=n("../../libs/solflare-shared/dist/store/selectors/data.js"),b=n("../../../node_modules/react-router/esm/react-router.js"),_=n("../../libs/solflare-shared/dist/features/settings/index.js"),k=n("../../libs/solflare-shared/dist/utils/extension.js"),y=n("../../libs/solflare-shared/dist/hooks/useMetamask/index.js");const w=(0,u.Z)((e=>({strip:{position:"relative",backgroundColor:e.palette.primary.light},valign:{position:"absolute",top:"50%",right:10,transform:"translateY(-50%)"},content:{display:"flex",alignItems:"center",justifyContent:"space-between",[e.breakpoints.down("md")]:{flexDirection:"column"},paddingTop:10,paddingBottom:10,color:e.palette.text.primary},text:{opacity:.5}})));s.default=()=>{const e=w(),{t:s}=(0,a.$)(),n=(0,b.k6)();(0,h.U)();const u=(0,o.v9)(j.eN),C=(0,o.v9)(f.yu),[v,Z]=(0,i.useState)(!1),{isMetamask:S}=(0,y.U)(),{setNotificationsEnabled:T}=(0,h.c)({onDenied:()=>n.push(_.ln.NOTIFICATIONS.HOME)}),z=(0,i.useCallback)((async()=>{let e=await g.Z.solflareEnableNotificationsModal.get();null!==e?(e="true"===e?0:parseInt(e,10),(0===e||Date.now()>e+(0,p.vM)())&&Z(!0)):Z(!0)}),[]),P=!!C.enabled;(0,i.useEffect)((()=>{!(0,p.Yz)()||u.cluster!==x.EE.mainnet||P||!k.p1&&location.pathname.includes("/provider")||!k.Cy&&k.p1||z()}),[z,u.cluster,C.loading,P]);const D=()=>{const e=Date.now();g.Z.solflareEnableNotificationsModal.set(e).then((()=>Z(!1)))};return P||!v||S?null:(0,t.jsxs)(r.Z,{className:e.strip,children:[(0,t.jsxs)(l.Z,{className:e.content,children:[(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(r.Z,{display:"inline",children:s("notifications_prompt_title")}),(0,t.jsx)(r.Z,{display:"inline",ml:2,className:e.text,children:s("notifications_prompt_text")})]}),(0,t.jsx)(c.Z,{type:"button",size:"small",color:"primary",onClick:()=>{T(!0),D()},children:s("notifications_prompt_enable")})]}),(0,t.jsx)(r.Z,{className:e.valign,children:(0,t.jsx)(d.Z,{onClick:D,size:"large",children:(0,t.jsx)(m.Z,{color:"primary"})})})]})}},"../../libs/solflare-shared/dist/components/Notifier/index.js":function(e,s,n){n.d(s,{Z:function(){return h}});var t=n("../../../node_modules/react/index.js"),i=n("../../../node_modules/notistack/dist/notistack.esm.js"),a=n("../../../node_modules/react-redux/es/index.js"),o=n("../../../node_modules/reselect/es/index.js"),r=n("../../libs/solflare-shared/dist/store/selectors/list.js"),l=(0,o.zB)({snackbars:r.xo}),c=n("../../libs/solflare-shared/dist/store/actions/snackbar.js"),d=n("../../../node_modules/prop-types/index.js"),u=n.n(d);let m=class extends t.Component{constructor(){super(...arguments),this.state={displayed:[]},this.storeDisplayed=e=>{this.setState((s=>({displayed:[...s.displayed,e]})))},this.removeDisplayed=e=>{this.setState((s=>({displayed:[...s.displayed.filter((s=>e!==s))]})))},this.processSnackbars=()=>{this.props.snackbars.notifications.forEach((({key:e,message:s,options:n={},dismissed:t=!1})=>{t?this.props.closeSnackbar(e):this.state.displayed.includes(e)||(this.props.enqueueSnackbar(s,{key:e,...n,onClose:(e,s,t)=>{n.onClose&&n.onClose(e,s,t)},onExited:(e,s)=>{this.props.removeSnackbar(s),this.removeDisplayed(s)}}),this.storeDisplayed(e))}))}}componentDidUpdate(e,s){e.snackbars!==this.props.snackbars&&this.processSnackbars()}render(){return null}};m.propTypes={enqueueSnackbar:u().func,closeSnackbar:u().func,removeSnackbar:u().func,snackbars:u().object},m=function(e,s,n,t){var i,a=arguments.length,o=a<3?s:null===t?t=Object.getOwnPropertyDescriptor(s,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,s,n,t);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(o=(a<3?i(o):a>3?i(s,n,o):i(s,n))||o);return a>3&&o&&Object.defineProperty(s,n,o),o}([(0,a.$j)(l,{removeSnackbar:c.PN}),i.RM],m);var h=m},"../../libs/solflare-shared/dist/wallet/components/ConfirmDialog/index.js":function(e,s,n){n.d(s,{Z:function(){return x}});var t=n("../../../node_modules/react/jsx-runtime.js"),i=n("../../libs/solflare-shared/dist/wallet/context/index.js"),a=n("../../../node_modules/react/index.js"),o=n("../../../node_modules/react-i18next/dist/es/useTranslation.js"),r=n("../../libs/solflare-shared/dist/utils/extension.js"),l=n("../../libs/foundation-ui/dist/index.js"),c=n("../../libs/rise-ui/dist/index.js"),d=n("../../../node_modules/@fortawesome/pro-light-svg-icons/index.mjs"),u=n("../../libs/wallet-core/dist/solana/shared.js"),m=n("../../libs/solflare-shared/dist/wallet/components/KeystoneQRConfirm/index.js");const h=(0,n("../../../node_modules/@mui/styles/makeStyles/makeStyles.js").Z)((()=>({dialogPaperClassName:{maxWidth:"400px",padding:"0px"},contentClassName:{padding:"16px !important"}}))),g=({onClose:e})=>{const{t:s}=(0,o.$)(),[n,r]=(0,a.useState)(!1),{wallet:c,confirmDialogContent:h,isBuilderLoading:g,transactionTitle:p,useSignAndSendHook:x}=(0,i.w)(),j=c.instance?.type||"",[f,b]=(0,a.useState)(!1),{signAndSend:_}=x(),k=(0,a.useCallback)((async()=>{r(!0),j===u.x4&&b(!0),await _()}),[j,_]);return(0,a.useEffect)((()=>{j!==u.pe||g||k()}),[k,j,g]),f?(0,t.jsx)(m.Z,{onCancel:e}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.JHu,{children:[(0,t.jsx)(l.V1P,{center:p||s("confirm_transaction_title")}),h||(0,t.jsx)(l.GGf,{avatar:(0,t.jsx)(l.Ce,{size:"xl",icon:d.XCy})})]}),(0,t.jsx)(l.p4T,{children:j===u.pe?(0,t.jsx)(l.ZT$,{variant:"textM",alignCenter:!0,children:s("confirm_ledger_transaction")}):(0,t.jsxs)(l.hE2,{children:[(0,t.jsx)(l.zxk,{onClick:e,variant:"secondary",disabled:n,children:s("action_back")}),(0,t.jsx)(l.zxk,{disabled:g||n,right:n?(0,t.jsx)(l.$jN,{countBase:100,size:"s",value:50,variant:"indeterminate"}):void 0,onClick:()=>{k()},children:g?(0,t.jsx)(l.$jN,{}):s("action_confirm")})]})})]})};var p=()=>{const e=h(),{setOpenConfirmDialog:s,callbacks:n}=(0,i.w)(),o=(0,a.useCallback)((()=>{s(!1),n.onSign({status:"rejected"}),n.onEnd()}),[n,s]);return r.p1&&!r.Cy?(0,t.jsx)(l.m04,{children:(0,t.jsx)(g,{onClose:o})}):(0,t.jsx)(c.u_,{open:!0,onClose:o,scroll:"body",dialogPaperClassName:e.dialogPaperClassName,contentClassName:e.contentClassName,children:(0,t.jsx)(g,{onClose:o})})},x=()=>{const{openConfirmDialog:e}=(0,i.w)();return e?(0,t.jsx)(p,{}):null}},"../../libs/solflare-shared/dist/wallet/components/KeystoneQRConfirm/index.js":function(e,s,n){var t=n("../../../node_modules/react/jsx-runtime.js"),i=n("../../../node_modules/react/index.js"),a=n("../../../node_modules/react-i18next/dist/es/useTranslation.js"),o=n("../../libs/foundation-ui/dist/index.js"),r=n("../../../node_modules/@keystonehq/animated-qr/dist/index.js"),l=n("../../libs/solflare-shared/dist/wallet/context/index.js"),c=n("../../../node_modules/@keystonehq/bc-ur-registry-sol/dist/index.js"),d=n("../../../node_modules/uuid/dist/esm-browser/stringify.js"),u=n("../../../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),m=n("../../../node_modules/buffer/index.js").Buffer;const h=u.Z.div`
  min-width: ${e=>`${e.size}px`};
  min-height: ${e=>`${e.size}px`};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;s.Z=({onCancel:e,isExtension:s})=>{const{t:n}=(0,a.$)(),{keystoneSignRequest:u,transactionTitle:g,wallet:p}=(0,l.w)(),[x,j]=(0,i.useState)("show_request"),[f,b]=(0,i.useState)("ready"),[_,k]=(0,i.useState)(null),y=(0,i.useCallback)((e=>{b(e?"ready":"permission_needed")}),[]),w=(0,i.useCallback)((({cbor:e})=>{const s=c.SolSignature.fromCBOR(m.from(e,"hex")),n=(0,d.Z)(s.getRequestId());n===u?.requestId&&p.instance?.submitSignature(n,e)}),[u?.requestId,p.instance]),C=(0,i.useCallback)((e=>{e!==r.QRCodeError.UNEXPECTED_QRCODE&&e!==r.QRCodeError.INVALID_QR_CODE||k("Please check your QR code")}),[]),v=(0,i.useCallback)((()=>{p.instance?.cancelSignRequest(u?.requestId),e?.()}),[u?.requestId,e,p.instance]);return(0,i.useEffect)((()=>{j("show_request")}),[u?.cbor]),"show_request"===x?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.JHu,{children:[(0,t.jsx)(o.V1P,{center:g||n("confirm_transaction_title")}),(0,t.jsx)(o.ZT$,{variant:"textM",alignCenter:!0,children:n("confirm_transaction_follow_keystone_steps")}),(0,t.jsx)(h,{size:s?290:320,children:!!u?.cbor&&(0,t.jsx)(r.AnimatedQRCode,{cbor:u.cbor,type:"sol-sign-request",options:{size:s?290:320}})})]},u?.requestId),(0,t.jsx)(o.p4T,{children:(0,t.jsxs)(o.hE2,{children:[(0,t.jsx)(o.zxk,{onClick:v,variant:"secondary",children:n("action_cancel")}),(0,t.jsx)(o.zxk,{onClick:()=>j("scan_signature"),children:n("action_next_step")})]})})]}):"scan_signature"===x?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.JHu,{children:[(0,t.jsx)(o.V1P,{center:g||n("confirm_transaction_title")}),(0,t.jsx)(o.ZT$,{variant:"headingS",children:n("confirm_transaction_scan_qr_code")}),"permission_needed"===f&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.ZT$,{variant:"headingS",alignCenter:!0,children:n("onboard_keystone_title_1")}),(0,t.jsx)(o.ZT$,{variant:"textM",alignCenter:!0,children:n("onboard_keystone_description_1")}),(0,t.jsxs)(o.ZT$,{ariant:"textM",alignCenter:!0,children:[n("onboard_keystone_description_2")," ",(0,t.jsx)(o.ZT$,{component:"a",target:"_blank",variant:"textM",href:"https://keyst.one/solflare",children:n("onboard_full_tutorial")})]})]}),(0,t.jsx)(h,{size:s?290:320,children:(0,t.jsx)(r.AnimatedQRScanner,{purpose:r.Purpose.SOL_SIGN,handleScan:w,handleError:C,videoLoaded:y,options:{width:s?290:320}})}),_&&(0,t.jsx)(o.ZT$,{variant:"textM",alignCenter:!0,children:_})]},u?.requestId),(0,t.jsx)(o.p4T,{children:(0,t.jsx)(o.hE2,{children:(0,t.jsx)(o.zxk,{onClick:()=>j("show_request"),variant:"secondary",children:n("action_back")})})})]}):null}},"../../libs/solflare-shared/dist/assets/connect-blocked-icon.png":function(e,s,n){e.exports=n.p+"assets/connect-blocked-icon.179b7492..png"},"../../libs/solflare-shared/dist/assets/ledger-confirm.svg":function(e,s,n){e.exports=n.p+"assets/ledger-confirm.3f00ff7f..svg"}}]);
//# sourceMappingURL=libs_shared_dist_features_currencies_constants_index_js-libs_solflare-shared_dist_components_-7c1d80.js.map