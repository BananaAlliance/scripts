"use strict";(self.webpackChunk_rise_wallet_solflare_extension=self.webpackChunk_rise_wallet_solflare_extension||[]).push([["libs_shared_dist_constants_autolock_js-libs_shared_dist_features_currencies_components_Curren-ee8360"],{"../../libs/sdk/cache/dist/index.js":function(e,s,t){t("../../../node_modules/js-sha256/src/sha256.js"),t("../../../node_modules/@react-native-async-storage/async-storage/lib/module/index.js"),t("../../../node_modules/console-browserify/index.js")},"../../libs/shared/dist/constants/autolock.js":function(e,s,t){t("../../libs/shared/dist/utils/localStorage/index.js").q$},"../../libs/shared/dist/features/currencies/components/CurrenciesSyncTask/index.js":function(e,s,t){t("../../../node_modules/react/index.js"),t("../../libs/shared/dist/features/currencies/hooks/index.js"),t("../../../node_modules/console-browserify/index.js")},"../../libs/shared/dist/features/currencies/components/DisplayPercentageChange/index.js":function(e,s,t){t("../../../node_modules/react/jsx-runtime.js"),t("../../libs/shared/dist/utils/displayPrice.js")},"../../libs/shared/dist/features/currencies/components/DisplayTokenAmount/index.js":function(e,s,t){t("../../../node_modules/react/jsx-runtime.js"),t("../../../node_modules/react-redux/es/index.js"),t("../../libs/shared/dist/utils/displayPrice.js"),t("../../libs/shared/dist/features/currencies/store/index.js")},"../../libs/shared/dist/features/currencies/hooks/useCurrencyDisplay.js":function(e,s,t){t("../../../node_modules/react-redux/es/index.js"),t("../../libs/shared/dist/features/currencies/store/index.js")},"../../libs/shared/dist/features/currencies/hooks/useTokenFiatValue.js":function(e,s,t){t("../../libs/shared/dist/features/currencies/utils/index.js"),t("../../libs/shared/dist/features/currencies/hooks/useCurrentCurrency.js"),t("../../libs/shared/dist/features/currencies/hooks/useTokenPrice.js")},"../../libs/shared/dist/features/currencies/hooks/useTokenPrice.js":function(e,s,t){t("../../../node_modules/react-redux/es/index.js"),t("../../libs/shared/dist/features/currencies/store/index.js")},"../../libs/shared/dist/features/currencies/store/api/index.js":function(e,s,t){t("../../../node_modules/lodash/lodash.js")},"../../libs/solflare-shared/dist/constants/networks.js":function(e,s,t){t.d(s,{EE:function(){return n},g5:function(){return l},vo:function(){return r}});const n={mainnet:"mainnet",devnet:"devnet",testnet:"testnet"},r={mainnet:101,testnet:102,devnet:103},i={mainnet:"https://rpc-mainnet-failover.solflare.com",devnet:"https://rpc-devnet-failover.solflare.com",testnet:"https://rpc-testnet-failover.solflare.com"},a={mainnet:"https://wallet-api.solflare.com/v2/tx/rpc/mainnet",devnet:"https://wallet-api.solflare.com/v2/tx/rpc/devnet",testnet:"https://wallet-api.solflare.com/v2/tx/rpc/testnet"},o={mainnet:"https://wallet-api.solflare.com/v2/tx/jito/send-bundle",devnet:"https://wallet-api.solflare.com/v2/tx/jito/send-bundle",testnet:"https://wallet-api.solflare.com/v2/tx/jito/send-bundle"},l=(n.mainnet,n.devnet,n.testnet,{mainnet:{cluster:n.mainnet,name:"Mainnet",url:"https://mainnet-beta.solflare.network",failoverUrl:i[n.mainnet],sendUrl:a[n.mainnet],bundledSendUrl:o[n.mainnet]},testnet:{cluster:n.testnet,name:"Testnet",url:"https://api.testnet.solana.com",failoverUrl:i[n.testnet],sendUrl:a[n.testnet],bundledSendUrl:o[n.testnet]},devnet:{cluster:n.devnet,name:"Devnet",url:"https://api.devnet.solana.com",failoverUrl:i[n.devnet],sendUrl:a[n.devnet],bundledSendUrl:o[n.devnet]}})},"../../libs/solflare-shared/dist/features/activity/store/actions/index.js":function(e,s,t){t.d(s,{KO:function(){return i},M9:function(){return a},Se:function(){return r},_1:function(){return n},fU:function(){return l},kz:function(){return d},nb:function(){return c},om:function(){return o}}),t("../../libs/solflare-shared/dist/features/activity/store/selectors/index.js"),t("../../../node_modules/console-browserify/index.js");const n="SIGNATURES_FETCH_START",r="SIGNATURES_FETCH_START_NEWER",i="SIGNATURES_FETCH_CHUNK",a="SIGNATURES_FETCH_SUCCESS",o="SIGNATURES_FETCH_ERROR",l="TRANSACTIONS_CLEAR",c="TRANSACTIONS_CHUNK_SIGNATURE_DATA",d="TRANSACTIONS_CHUNK_DATA"},"../../libs/solflare-shared/dist/features/activity/store/selectors/index.js":function(e,s,t){var n=t("../../../node_modules/reselect/es/index.js"),r=t("../../libs/solflare-shared/dist/store/selectors/config.js"),i=t("../../libs/solflare-shared/dist/store/selectors/data.js");(0,n.P1)([r.ut,i.Hj],((e,s)=>{const t={};for(const s of e.accounts)t[s.publicKey]=s.name;for(const e of s)t[e.pubkey]=e.name;return t})),(0,n.P1)((e=>e.list.transactionsList),(e=>e.data.transactionsData),((e,s)=>({network:e.network,publicKey:e.publicKey,loading:e.loading,preLoading:e.preLoading,signatures:e.data,data:s.data,parsed:s.parsed})))},"../../libs/solflare-shared/dist/features/shared/account/api/index.js":function(e,s,t){t("../../libs/solflare-shared/dist/api/index.js")},"../../libs/solflare-shared/dist/features/shared/account/index.js":function(e,s,t){t("../../libs/solflare-shared/dist/features/shared/account/api/index.js"),t("../../libs/solflare-shared/dist/features/shared/account/utils.js")},"../../libs/solflare-shared/dist/features/shared/account/utils.js":function(e,s,t){t("../../../node_modules/@solana/web3.js/lib/index.browser.esm.js")},"../../libs/solflare-shared/dist/store/actions/account.js":function(e,s,t){t.d(s,{A6:function(){return o},LW:function(){return u},M:function(){return _},M2:function(){return m},T6:function(){return a},b9:function(){return h},c0:function(){return f},kr:function(){return c},ms:function(){return b},oX:function(){return d},q1:function(){return l}});var n=t("../../libs/solflare-shared/dist/store/api/utils.js"),r=t("../../libs/solflare-shared/dist/store/api/account.js"),i=t("../../libs/solflare-shared/dist/store/actions/transaction.js");t("../../libs/solflare-shared/dist/store/actions/snackbar.js");const a="GET_ACCOUNT_BALANCE_SUCCESS",o="GET_ACCOUNT_TOKENS_START",l="GET_ACCOUNT_TOKENS_SUCCESS",c="GET_ACCOUNT_TOKENS_ERROR",d="GET_ACCOUNTS_BALANCES_SUCCESS",u="SET_ASSOCIATED_ACCOUNTS",f="SET_NFT_ACCOUNTS",h="SET_NFT_ACCOUNT",m="REMOVE_TOKEN_ACCOUNT",_="UPDATE_TOKEN_ACCOUNT",b="INVALIDATE_DATA";(0,n.fb)(r.Et,"GET_ACCOUNT_BALANCE_START",a,"GET_ACCOUNT_BALANCE_ERROR"),(0,n.fb)(r.ni,o,l,c),(0,n.fb)(r.TD),(0,n.fb)(r.$b),(0,n.fb)(r.kC),(0,n.fb)(r.SU),(0,n.fb)(r.OH,null,null,null,i.Ck),(0,n.fb)(r.Nv,null,null,null,i.Ck),(0,n.fb)(r.ih,null,null,null,i.Ck),(0,n.fb)(r.Q7)},"../../libs/solflare-shared/dist/store/actions/addressBook.js":function(e,s,t){t.d(s,{Mi:function(){return n},qj:function(){return r}}),t("../../libs/solflare-shared/dist/storage/solflareService.js"),t("../../../node_modules/lodash/lodash.js"),t("../../../node_modules/dayjs/dayjs.min.js"),t("../../libs/solflare-shared/dist/store/selectors/config.js"),t("../../libs/solflare-shared/dist/features/shared/account/index.js");const n="LOAD_ADDRESS_BOOK",r="LOAD_RECENT_ADDRESSES"},"../../libs/solflare-shared/dist/store/actions/exchange.js":function(e,s,t){t.d(s,{$r:function(){return f},Ae:function(){return a},Fe:function(){return l},Hw:function(){return b},WL:function(){return o},av:function(){return u},dq:function(){return c},f:function(){return d},pl:function(){return m}});var n=t("../../libs/solflare-shared/dist/store/api/utils.js"),r=t("../../libs/solflare-shared/dist/store/api/exchange.js"),i=t("../../libs/solflare-shared/dist/store/actions/transaction.js");const a="GET_EXCHANGE_ACCOUNT_SUCCESS",o="GET_EXCHANGE_SOL",l="GET_EXCHANGE_TOKENS",c="GET_EXCHANGE_COINS",d="GET_WITHDRAWAL_HISTORY_START",u="GET_WITHDRAWAL_HISTORY_SUCCESS",f="GET_WITHDRAWAL_HISTORY_ERROR",h="GET_EXCHANGE_HISTORY_START",m="GET_EXCHANGE_HISTORY_SUCCESS",_="GET_EXCHANGE_HISTORY_ERROR",b="GET_FTX_CONVERT_QUOTE_SUCCESS";(0,n.l2)(r.OX),(0,n.l2)(r._E),(0,n.l2)(r.Zt),(0,n.l2)(r.D0,null,a),(0,n.l2)(r.K5),(0,n.l2)(r.kS,null,c),(0,n.l2)(r.lz),(0,n.l2)(r.J8),(0,n.l2)(r.ld),(0,n.l2)(r.Eg),(0,n.l2)(r.wE,null,null,null,i.Du),(0,n.l2)(r.Tn,h,m,_),(0,n.l2)(r.Ox,h,m,_),(0,n.l2)(r.zD,h,m,_),(0,n.l2)(r.CY,h,m,_),(0,n.l2)(r.GQ,h,m,_),(0,n.l2)(r.Pk),(0,n.l2)(r.Vk),(0,n.l2)(r.wK,"GET_FTX_CONVERT_QUOTE_START",b,"GET_FTX_CONVERT_QUOTE_ERROR")},"../../libs/solflare-shared/dist/store/actions/ftxReconnect.js":function(e,s,t){t.d(s,{jq:function(){return r},qB:function(){return n}});const n="SHOW_FTX_RECONNECT",r="HIDE_FTX_RECONNECT"},"../../libs/solflare-shared/dist/store/actions/mints.js":function(e,s,t){t.d(s,{I6:function(){return a},NQ:function(){return i},zi:function(){return o}});var n=t("../../libs/solflare-shared/dist/store/api/mints.js"),r=t("../../libs/solflare-shared/dist/store/api/utils.js");t("../../../node_modules/@solana/web3.js/lib/index.browser.esm.js"),t("../../libs/shared/dist/features/currencies/index.js"),t("../../libs/shared/dist/features/currencies/store/index.js"),t("../../../node_modules/lodash/lodash.js"),t("../../libs/sdk/cache/dist/index.js"),t("../../../node_modules/console-browserify/index.js");const i="LOAD_MINTS_START",a="LOAD_MINTS_SUCCESS",o="LOAD_MINTS_ERROR";(0,r.fb)(n.zc,i,a,o),(0,r.fb)(n.n,i,a,o),(0,r.fb)(n.sq,i,a,o),(0,r.fb)(n.$l,i,a,o)},"../../libs/solflare-shared/dist/store/actions/transaction.js":function(e,s,t){t.d(s,{Ck:function(){return T},Du:function(){return E}});var n=t("../../../node_modules/react/jsx-runtime.js"),r=t("../../../node_modules/@solana/web3.js/lib/index.browser.esm.js"),i=t("../../libs/solflare-shared/dist/store/api/utils.js"),a=t("../../libs/solflare-shared/dist/store/api/transaction.js"),o=t("../../libs/solflare-shared/dist/store/actions/snackbar.js"),l=t("../../libs/solflare-shared/dist/utils/rpc-errors.js"),c=t("../../../node_modules/react-i18next/dist/es/Trans.js"),d=t("../../libs/solflare-shared/dist/store/selectors/config.js"),u=t("../../libs/wallet-core/dist/solana/shared.js"),f=t("../../../node_modules/console-browserify/index.js");const h=(0,i.fb)(a.vk),m=(0,i.fb)(a.FI),_=((0,i.fb)(a.BL),(0,i.fb)(a.gG)),b=((0,i.fb)(a.iO),async e=>{try{const s=Math.min(14e5,2e5*e.instructions.length);if(!s)return;const{body:t}=await(0,i.U2)("https://priority-fee-api.solflare.com");if(!t?.compute_unit_price)return;e.instructions.unshift(r.ComputeBudgetProgram.setComputeUnitLimit({units:s})),e.instructions.unshift(r.ComputeBudgetProgram.setComputeUnitPrice({microLamports:Math.min(t.compute_unit_price,Math.floor(1e13/s))}))}catch(e){f.log(e)}}),T=({request:e,transaction:s,signers:t=[],...n})=>async(r,i)=>{const a=i(),c=(0,d.eN)(a).cluster,f=(0,d.Rx)(a);e.skipComputeBudget||f?.instance?.type===u.pe||await b(s),s.recentBlockhash=await r(h({commitment:e.commitment}));const T=await e.sign(s,t,e.confirmData||null);if(e.onError&&!T&&e.onError("Failed to sign the transaction"),T){const s=new o.lw({dispatch:r,network:c});let t;s.nextNotification();try{t=await r(m({transaction:T,preflightCommitment:e.commitment})),s.setTransaction(t),s.nextNotification()}catch(t){const n=(0,l.t)(t);return s.errorNotification(n.message||t.message),void(e.onError&&e.onError(t))}try{const i=await r(_({tx:t,commitment:e.commitment}));s.nextNotification(),e.onConfirm&&e.onConfirm({...i,...n})}catch(t){s.errorNotification(t.toString()),e.onError&&e.onError(t)}}},E=({request:e,transaction:s,url:t,ftxSubaccountKey:r,_call:i})=>async(a,l)=>{const d=await e.sign(s,[],e.confirmData||null);if(d)try{const s=await i({url:t,ftxSubaccountKey:r},{...e,...d});return a((0,o.GV)({message:(0,n.jsx)(c.c,{i18nKey:"transaction_confirmed"})})),e.onConfirm?.({request:e,...s}),s}catch(t){a((0,o.GV)({message:t.response.data.error,variant:"error"})),e.onError?.(t.toString(),{transaction:s,request:e})}}},"../../libs/solflare-shared/dist/utils/requestId.js":function(e,s,t){t.d(s,{A:function(){return a}});var n=t("../../../node_modules/uuid/dist/esm-browser/stringify.js"),r=t("../../../node_modules/uuid/dist/esm-browser/parse.js"),i=t("../../libs/solflare-shared/dist/utils/extension.js");const a=e=>n.Z(r.Z(e).map(((e,s)=>1===s?((0,i.Af)()<<5)+Math.floor(31*Math.random()):s%2==0?e:Math.ceil(255*Math.random()))))},"../../libs/wallet-core/dist/solana/metamask.js":function(e,s,t){t.d(s,{c:function(){return l}});var n=t("../../libs/wallet-core/dist/solana/shared.js"),r=t("../../../node_modules/bs58/index.js"),i=t.n(r),a=t("../../libs/wallet-core/dist/solana/metamaskCore.js");function o(e,s,t=n.PT.bip44Change){if(t===n.PT.bip44)return[`${e}'`];if(t===n.PT.bip44Change)return[`${e}'`,`${s}'`];throw new Error("Invalid derivation path")}class l extends n.SE{constructor(){super(...arguments),this.type=n.Yg,this.publicKey=null,this.accountIndex=0,this.init=({publicKey:e,derivationPath:s,accountIndex:t=0})=>{this.publicKey=e,this.derivationPath=s,this.accountIndex=t},this.signTransaction=async e=>{await(0,a.qN)();const{signature:s}=await(0,a.u$)({method:"signTransaction",params:{derivationPath:this.getDerivationPath(),message:i().encode(e)}});return Uint8Array.from(i().decode(s))},this.signMessage=async e=>{await(0,a.qN)();const{signature:s}=await(0,a.u$)({method:"signMessage",params:{derivationPath:this.getDerivationPath(),message:i().encode(e)}});return Uint8Array.from(i().decode(s))},this.signAllTransactions=async e=>{await(0,a.qN)();const{signatures:s}=await(0,a.u$)({method:"signAllTransactions",params:{derivationPath:this.getDerivationPath(),messages:e.map((e=>i().encode(e)))}});return s.map((e=>Uint8Array.from(i().decode(e))))},this.getDerivationPath=()=>o(this.accountIndex,0,this.derivationPath),this.toObject=()=>({type:n.Yg,publicKey:this.publicKey,derivationPath:this.derivationPath,accountIndex:this.accountIndex}),this.toJSON=()=>JSON.stringify(this.toObject())}static async connect(){await(0,a.qN)()}static async getPublicKey(e,s=0){return await(0,a.u$)({method:"getPublicKey",params:{derivationPath:o(s,0,e)}})}static fromObject(e){const s=new l;return s.init(e),s}}},"../../libs/wallet-core/dist/solana/metamaskCore.js":function(e,s,t){t.d(s,{qN:function(){return d},u$:function(){return u}});var n=t("../../../node_modules/@metamask/providers/dist/index.js"),r=t("../../libs/wallet-core/dist/solana/metamask/WindowPostMessageStream.js"),i=t("../../../node_modules/console-browserify/index.js");const a="npm:@solflare-wallet/solana-snap";let o=null,l=!1;async function c(e){const s=await async function(){if(l||(o=await async function(){try{const e=new r.u({name:"metamask-inpage",target:"metamask-contentscript"}),s=new n.us(e,{shouldSendMetadata:!1});return await Promise.race([s.request({method:"wallet_getSnaps"}),new Promise(((e,s)=>setTimeout((()=>s("MetaMask provider not found")),1e3)))]),s}catch(e){return i.error(e),null}}(),l=!0),!o)throw new Error("MetaMask extension not detected");return o}();return await s.request(e)}async function d(){return await c({method:"wallet_requestSnaps",params:{[a]:{version:"*"}}})}async function u(e){return await c({method:"wallet_invokeSnap",params:{snapId:a,request:e}})}}}]);