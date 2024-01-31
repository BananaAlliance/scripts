"use strict";(self.webpackChunk_rise_wallet_solflare_extension=self.webpackChunk_rise_wallet_solflare_extension||[]).push([["libs_solflare-shared_dist_components_ConfirmationHelpers_ConfirmationCloseStake_js-libs_solfl-dca067"],{"../../libs/shared/dist/utils/timeRemaining.js":function(e,s,t){t.d(s,{X:function(){return a}});var n=t("../../../node_modules/dayjs/dayjs.min.js"),i=t.n(n);const a=(e,s=3)=>{const t=i().duration(e>=0?e:0,"seconds"),n=[];return t.years()>0&&n.push(`${t.years()}yr`),t.months()>0&&n.push(`${t.months()}mo`),t.days()>0&&n.push(`${t.days()}d`),t.hours()>0&&n.push(`${t.hours()}h`),t.minutes()>0&&n.push(`${t.minutes()}m`),t.seconds()>0&&n.push(`${t.seconds()}s`),0===n.length&&n.push("0s"),n.slice(0,s).join(" ")}},"../../libs/solflare-shared/dist/components/ConfirmationHelpers/ConfirmationCloseStake.js":function(e,s,t){var n=t("../../../node_modules/react/jsx-runtime.js"),i=t("../../../node_modules/@fortawesome/pro-light-svg-icons/index.mjs"),a=t("../../libs/foundation-ui/dist/index.js");s.Z=({validatorName:e,validatorImage:s,stakeStatus:t})=>(0,n.jsx)(a.GGf,{avatar:(0,n.jsx)(a.Ce,{size:"xl",icon:i.I7k}),transactionFromItem:(0,n.jsx)(a.nrP,{title:e,subtitle:t,avatar:s?(0,n.jsx)(a.qEK,{src:s}):(0,n.jsx)(a.Ce,{listItem:!0,icon:i.hGM})})})},"../../libs/solflare-shared/dist/components/ConfirmationHelpers/ConfirmationUnstaking.js":function(e,s,t){var n=t("../../../node_modules/react/jsx-runtime.js"),i=t("../../../node_modules/@fortawesome/pro-light-svg-icons/index.mjs"),a=t("../../libs/foundation-ui/dist/index.js"),o=t("../../libs/solflare-shared/dist/constants/mints.js"),r=t("../../libs/shared/dist/features/currencies/hooks/useTokenFiatValue.js"),l=t("../../libs/shared/dist/utils/displayPrice.js");s.Z=({amount:e})=>{const{value:s,suffix:t,prefix:u,price:d}=(0,r.Z)("SOL",e);return(0,n.jsx)(a.GGf,{avatar:(0,n.jsx)(a.Ce,{size:"xl",icon:i.Quw}),transactionFromItem:(0,n.jsx)(a.nrP,{title:(0,l.ED)({amount:e,displayType:"solana",suffix:" SOL"}),subtitle:d?(0,l.ED)({amount:s,displayType:"value",suffix:t,prefix:u}):void 0,avatar:(0,n.jsx)(a.qEK,{src:o.vx.logoURI})})})}},"../../libs/solflare-shared/dist/features/staking/shared/InstantUnstakeSpeedupBanner.js":function(e,s,t){t.d(s,{v:function(){return x}});var n=t("../../../node_modules/react/jsx-runtime.js"),i=t("../../../node_modules/react/index.js"),a=t("../../libs/foundation-ui/dist/index.js"),o=t("../../../node_modules/react-i18next/dist/es/useTranslation.js"),r=t("../../libs/solflare-shared/dist/features/stakingCore/hooks/useInstantUnstakeQuote.js"),l=t("../../libs/shared/dist/features/currencies/index.js"),u=t("../../libs/solflare-shared/dist/features/settings/index.js"),d=t("../../libs/solflare-shared/dist/utils/lamportToSol.js"),c=t("../../libs/solflare-shared/dist/features/stakingCore/api/transactions.js"),m=t("../../libs/solflare-shared/dist/components/ConfirmationHelpers/ConfirmationUnstaking.js"),f=t("../../libs/solflare-shared/dist/wallet/index.js"),k=t("../../../node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs"),b=t("../../../node_modules/bignumber.js/bignumber.js"),j=t.n(b),g=t("../../libs/solflare-shared/dist/hooks/useSolanaBalance/index.js"),h=t("../../libs/solflare-shared/dist/features/portfolio/hooks/useComputeUnitPrice.js"),_=t("../../libs/solflare-shared/dist/features/featureFlags/index.js");const x=({stakeAccount:e,onConfirm:s})=>{const{t:t}=(0,o.$)(),[b,x]=(0,i.useState)(!1),p=(0,k.NL)(),{transactionInit:v}=(0,f.we)(),{lamports:y}=(0,g.h)(),{computeUnitPrice:S}=(0,h.h)(),w=new(j())(2e5).times(S).div(Math.pow(10,6)).plus(5e3).toNumber(),C=(0,l.Af)(),P=(0,u.uJ)(),{data:A,isFetching:I,isSuccess:E}=(0,r.J)({stakeAccountPubkey:e.publicKey,network:P.cluster,currency:C.ticker,enabled:!b});return(0,n.jsx)(a.J9f,{title:t("staking_instant_unstake_banner_title"),subtitle:t("staking_instant_unstake_banner_subtitle",{fee:new(j())(A?.fee?.percentage??0).times(100).toString()}),buttonTitle:t("staking_instant_unstake_banner_cta"),isLoading:b||I||!E||y<w,onClick:async()=>{if(!A)return;const i=(0,d.s)(A.outAmount??0),a=(0,d.s)(A.inAmount??0);x(!0),await v({title:t("staking_instant_unstake_title"),commitment:"confirmed",txBuilder:c.l,builderParams:{stakeAccount:e.publicKey,outAmount:A.outAmount,route:A.routeName,network:P.cluster},confirmDialog:(0,n.jsx)(m.Z,{amount:i.toString()}),onBroadcast:({signature:s,stringifiedError:t})=>{(0,_.Ic)({validatorName:e.validator?.name??"",validatorNodePubKey:e.validator?.nodePublicKey??"",validatorVotePubKey:e.validator?.votePublicKey??"",error:t,transaction:s??"",source:"stakeAccountDeactivating",market:A.routeName,amountInSol:a.toString(),amountInUsd:a.times(A.solPrice.usd).toString(),feeTotalPercentage:A.fee.percentage,solflareFeeAmountInSol:(0,d.s)(A.ourFee?.amount??0).toString(),solflareFeeAmountInUsd:(0,d.s)(A.ourFee?.amount??0).times(A.solPrice.usd).toString()})},onConfirm:({status:e})=>{"success"===e&&(s?.(),p.invalidateQueries(["staking-accounts"]))},onEnd:()=>{x(!1)}})}})}},"../../libs/solflare-shared/dist/features/staking/web/ExplorerDropDownItem.js":function(e,s,t){t.d(s,{x:function(){return l}});var n=t("../../../node_modules/react/jsx-runtime.js"),i=t("../../../node_modules/react-i18next/dist/es/useTranslation.js"),a=t("../../../node_modules/react-redux/es/index.js"),o=t("../../libs/solflare-shared/dist/store/actions/common.js"),r=t("../../libs/rise-ui/dist/index.js");const l=({publicKey:e,onClose:s})=>{const{t:t}=(0,i.$)(),l=(0,a.I0)();return(0,n.jsx)(r.bK,{onClick:()=>{l((0,o.Wi)({account:e})),s()},children:t("action_view_in_explorer")})}},"../../libs/solflare-shared/dist/features/stakingCore/api/transactions.js":function(e,s,t){t.d(s,{B:function(){return l},l:function(){return u}});var n=t("../../libs/solflare-shared/dist/api/index.js"),i=t("../../../node_modules/@solana/web3.js/lib/index.browser.esm.js"),a=t("../../../node_modules/base64-js/index.js"),o=t("../../../node_modules/console-browserify/index.js");const r="https://wallet-api.solflare.com",l=async(e,s,t)=>{const{body:i}=await(0,n.v)(`${r}/v2/unstake/quote`,{stakeAccount:e,network:s,currency:t});return i},u=async e=>{try{const{body:s}=await(0,n.v)(`${r}/v2/unstake/tx`,e);if(s?.error)throw new Error(s.error);if(!s?.txs?.length)throw new Error("Failed to generate transaction");return{transaction:i.VersionedTransaction.deserialize(a.toByteArray(s.txs[0]))}}catch(e){throw o.dir(e),new Error(e?.response?.data?.error||e?.message)}}},"../../libs/solflare-shared/dist/features/stakingCore/hooks/useInstantUnstakeQuote.js":function(e,s,t){t.d(s,{J:function(){return a}});var n=t("../../../node_modules/@tanstack/react-query/build/lib/useQuery.mjs"),i=t("../../libs/solflare-shared/dist/features/stakingCore/api/transactions.js");const a=({stakeAccountPubkey:e,network:s,currency:t,enabled:a=!0})=>(0,n.a)({queryKey:["unstakeTx",e],queryFn:()=>(0,i.B)(e,s,t),enabled:a,refetchInterval:2e4,cacheTime:0,retry:!1})},"../../libs/solflare-shared/dist/features/stakingModal/hooks/useUnstakeForm.js":function(e,s,t){t.d(s,{K:function(){return x}});var n=t("../../../node_modules/react/jsx-runtime.js"),i=t("../../../node_modules/react/index.js"),a=t("../../libs/solflare-shared/dist/features/stakingCore/hooks/useInstantUnstakeQuote.js"),o=t("../../libs/shared/dist/features/currencies/index.js"),r=t("../../libs/solflare-shared/dist/features/settings/index.js"),l=t("../../libs/solflare-shared/dist/wallet/index.js"),u=t("../../../node_modules/react-i18next/dist/es/useTranslation.js"),d=t("../../libs/solflare-shared/dist/features/stakingCore/api/transactions.js"),c=t("../../libs/solflare-shared/dist/features/staking/api/staking.js"),m=t("../../../node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs"),f=t("../../libs/solflare-shared/dist/components/ConfirmationHelpers/ConfirmationUnstaking.js"),k=t("../../libs/solflare-shared/dist/utils/lamportToSol.js"),b=t("../../libs/solflare-shared/dist/utils/extension.js"),j=t("../../../node_modules/react-router/esm/react-router.js"),g=t("../../libs/solflare-shared/dist/features/featureFlags/index.js"),h=t("../../libs/solflare-shared/dist/hooks/useSolanaBalance/index.js"),_=t("../../libs/wallet-core/dist/solana/ledger.js");const x=({stakeAccount:e,close:s})=>{const{t:t}=(0,u.$)(),x=(0,j.k6)(),{usdPrice:p}=(0,h.h)(),[v,y]=(0,i.useState)(!1),[S,w]=(0,i.useState)(!1),{wallet:C,transactionInit:P}=(0,l.we)(),A=(0,m.NL)(),I=(0,o.Af)(),E=(0,r.uJ)(),K=C.instance instanceof _.uN,{data:T,isFetching:F,isSuccess:U,isError:L}=(0,a.J)({stakeAccountPubkey:e.publicKey,network:E.cluster,currency:I.ticker,enabled:v&&!S});(0,i.useEffect)((()=>{v&&!F&&L&&y(!1)}),[v,L,F]);const $=async()=>{const i=(0,k.s)(e.amount??0);w(!0),await P({title:t("unstaking"),commitment:"confirmed",txBuilder:c.vg,builderParams:{address:C.publicKey,stakeAccount:e.publicKey,setComputeBudget:!K,network:E.cluster},confirmDialog:(0,n.jsx)(f.Z,{amount:i.toString()}),skipComputeBudget:!0,onBroadcast:({status:t,signature:n,stringifiedError:a})=>{(0,g.Iz)({validatorName:e.validator?.name??"",validatorNodePubKey:e.validator?.nodePublicKey??"",validatorVotePubKey:e.validator?.votePublicKey??"",error:a,transaction:n??"",amountInSol:i.toString(),amountInUsd:i.times(p).toString()}),"success"===t&&s?.()},onConfirm:({status:e})=>{"success"===e&&A.invalidateQueries(["staking-accounts"])},onEnd:()=>{w(!1)}})};return{instantChecked:v,setInstantChecked:y,unstake:async()=>v?(async()=>{if(!T)return;const i=(0,k.s)(T.outAmount??0),a=(0,k.s)(T.inAmount??0);w(!0),await P({title:t("staking_instant_unstake_title"),commitment:"confirmed",txBuilder:d.l,builderParams:{stakeAccount:e.publicKey,outAmount:T.outAmount,route:T.routeName,network:E.cluster},confirmDialog:(0,n.jsx)(f.Z,{amount:i.toString()}),onBroadcast:({signature:t,stringifiedError:n,status:i})=>{(0,g.Ic)({validatorName:e.validator?.name??"",validatorNodePubKey:e.validator?.nodePublicKey??"",validatorVotePubKey:e.validator?.votePublicKey??"",error:n,transaction:t??"",source:"stakeAccountActive",market:T.routeName,amountInSol:a.toString(),amountInUsd:a.times(T.solPrice.usd).toString(),feeTotalPercentage:T.fee.percentage,solflareFeeAmountInSol:(0,k.s)(T.ourFee?.amount??0).toString(),solflareFeeAmountInUsd:(0,k.s)(T.ourFee?.amount??0).times(T.solPrice.usd).toString()}),"success"===i&&(s?.(),b.UJ&&x.replace("/staking"))},onConfirm:({status:e})=>{"success"===e&&A.invalidateQueries(["staking-accounts"])},onEnd:()=>{w(!1)}})})():$(),standardUnstake:$,unstakeTx:T,isFetching:F,isSuccess:U,isLoading:S}}},"../../libs/solflare-shared/dist/features/stakingModal/shared/UnstakeModal.js":function(e,s,t){t.d(s,{K:function(){return x}});var n=t("../../../node_modules/react/jsx-runtime.js"),i=t("../../libs/solflare-shared/dist/features/stakingCore/index.js"),a=t("../../libs/solflare-shared/dist/components/UniversalModal/index.js"),o=t("../../libs/foundation-ui/dist/index.js"),r=t("../../libs/shared/dist/features/currencies/index.js"),l=t("../../libs/shared/dist/utils/displayPrice.js"),u=t("../../libs/solflare-shared/dist/utils/lamportToSol.js"),d=t("../../libs/shared/dist/utils/timeRemaining.js"),c=t("../../../node_modules/react-i18next/dist/es/useTranslation.js"),m=t("../../libs/solflare-shared/dist/features/stakingModal/hooks/useUnstakeForm.js"),f=t("../../../node_modules/bignumber.js/bignumber.js"),k=t.n(f),b=t("../../libs/solflare-shared/dist/hooks/useSolanaBalance/index.js"),j=t("../../libs/solflare-shared/dist/features/portfolio/hooks/useComputeUnitPrice.js"),g=t("../../../node_modules/@solana/web3.js/lib/index.browser.esm.js"),h=t("../../../node_modules/react/index.js"),_=t("../../libs/solflare-shared/dist/features/portfolio/hooks/useSolanaToken.js");const x=({stakeAccount:e,close:s})=>{const{t:t}=(0,c.$)(),{data:f}=(0,_.D)(),{data:x}=(0,i.ku)(),{instantChecked:p,setInstantChecked:v,unstake:y,unstakeTx:S,isFetching:w,isSuccess:C,isLoading:P}=(0,m.K)({stakeAccount:e,close:s}),{isLoading:A,alertProps:I}=(()=>{const{t:e}=(0,c.$)(),{isLoading:s,lamports:t}=(0,b.h)(),{computeUnitPrice:n}=(0,j.h)(),i=(0,h.useMemo)((()=>{if(s)return;const i=new(k())(2e5).times(n).div(Math.pow(10,6)).plus(5e3);return t<i.toNumber()?{variant:"error",title:e("insufficient_ticker",{ticker:"SOL"}),message:e("swap_alert_ensure_minimum",{amountWithSuffix:`${i.div(g.LAMPORTS_PER_SOL)} SOL`})}:void 0}),[n,s,t,e]);return{isLoading:s,alertProps:i}})(),E=(0,u.s)(e.amount??0),K=(0,d.X)(x?.header.epochEndSeconds??0);return x?(0,n.jsx)(a.V,{onClose:s,title:t("staking_unstake_title"),textAlign:"left",footer:(0,n.jsxs)(n.Fragment,{children:[I&&(0,n.jsx)(o.bZj,{...I}),(0,n.jsx)(o.zxk,{disabled:p&&(w||!C)||P||A||!!I,onClick:()=>{y()},children:t("action_review")})]}),children:(0,n.jsxs)(o.e5Q,{children:[(0,n.jsx)(o.SWB,{title:t("staking_native_validator"),name:e.validator?.name??"",image:e.validator?.image??void 0,amount:(0,l.ED)({amount:E.toString(),displayType:"amount",pricePerCoin:f?.solPrice?.price,suffix:" SOL"}),value:(0,n.jsx)(r.sp,{value:E.multipliedBy(f?.solPrice?.price??0).toNumber()})}),(0,n.jsx)(o.oMW,{title:t("staking_instant_unstake_toggle_title"),subtitle:t("staking_instant_unstake_toggle_subtitle"),toggle:(0,n.jsx)(o.rsf,{checked:p,onCheckedChange:v}),children:(0,n.jsxs)(o.aVo,{gapSize:"gapS",children:[(0,n.jsx)(o.q$7,{left:(0,n.jsxs)(o.fGk,{children:[t("staking_unstake_time_label"),(0,n.jsx)(o.bEE,{tooltip:t("staking_instant_unstake_time_tooltip")})]}),right:(0,n.jsx)(o.MuV,{children:p?t("staking_instant_unstake_time_instant"):K})}),p&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.q$7,{left:(0,n.jsxs)(o.fGk,{children:[t("staking_instant_unstake_fee"),(0,n.jsx)(o.bEE,{tooltip:t("staking_instant_unstake_fee_tooltip")})]}),right:(0,n.jsxs)(o.MuV,{isLoading:w||!C,children:[new(k())(S?.fee?.percentage??0).times(100).toString(),"%"]})}),(0,n.jsx)(o.q$7,{left:(0,n.jsxs)(o.fGk,{children:[t("staking_unstake_total_received"),(0,n.jsx)(o.bEE,{tooltip:t("staking_unstake_tike_tooltip")})]}),right:(0,n.jsx)(o.MuV,{isLoading:w||!C,children:(0,l.ED)({amount:(0,u.s)(S?.outAmount??0),displayType:"solana",suffix:" SOL"})})})]})]})})]})}):null}},"../../libs/solflare-shared/dist/features/stakingModal/utils/splitStakeErrors.js":function(e,s,t){t.d(s,{M:function(){return i}});var n=t("../../libs/solflare-shared/dist/features/stakingCore/constants.js");const i=(e,s,t,i)=>{if(void 0!==e)return e.isLessThan(s)?{title:i("staking_validation_amount_below_minimum_title"),message:i("staking_validation_split_amount_below_minimum_description",{amount:`${n.T} SOL`})}:e.isGreaterThan(t)?{title:i("action_insufficient_balance"),message:i("staking_validation_insufficient_balance_description")}:void 0}}}]);