"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[85],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||s;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(9443);var s=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_1uMI",i="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,r=e.block,c=e.defaultValue,u=e.values,d=e.groupId,p=e.className,h=a.Children.toArray(e.children),m=null!=u?u:h.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=c?c:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value,f=s(),g=f.tabGroupChoices,k=f.setTabGroupChoices,y=(0,a.useState)(b),v=y[0],x=y[1],N=[];if(null!=d){var _=g[d];null!=_&&_!==v&&m.some((function(e){return e.value===_}))&&x(_)}var w=function(e){var t=e.currentTarget,n=N.indexOf(t),a=m[n].value;x(a),null!=d&&(k(d,a),setTimeout((function(){var e,n,a,r,s,o,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,s=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&s<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},p)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:w,onClick:w},null!=n?n:t)}))),n?(0,a.cloneElement)(h.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},6047:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=n(5064),l=n(8215),i=["components"],c={title:"RPC endpoint"},u=void 0,d={unversionedId:"flashbots-auction/searchers/advanced/rpc-endpoint",id:"flashbots-auction/searchers/advanced/rpc-endpoint",isDocsHomePage:!1,title:"RPC endpoint",description:"How to interact directly with the Flashbots RPC endpoint",source:"@site/docs/flashbots-auction/searchers/advanced/rpc-endpoint.mdx",sourceDirName:"flashbots-auction/searchers/advanced",slug:"/flashbots-auction/searchers/advanced/rpc-endpoint",permalink:"/flashbots-auction/searchers/advanced/rpc-endpoint",tags:[],version:"current",frontMatter:{title:"RPC endpoint"},sidebar:"docs",previous:{title:"bundle pricing",permalink:"/flashbots-auction/searchers/advanced/bundle-pricing"},next:{title:"searcher reputation",permalink:"/flashbots-auction/searchers/advanced/reputation"}},p=[{value:"How to interact directly with the Flashbots RPC endpoint",id:"how-to-interact-directly-with-the-flashbots-rpc-endpoint",children:[{value:"eth_sendBundle",id:"eth_sendbundle",children:[]},{value:"eth_callBundle",id:"eth_callbundle",children:[]},{value:"eth_sendPrivateTransaction",id:"eth_sendprivatetransaction",children:[]},{value:"eth_cancelPrivateTransaction",id:"eth_cancelprivatetransaction",children:[]},{value:"flashbots_getUserStats",id:"flashbots_getuserstats",children:[]},{value:"flashbots_getBundleStats",id:"flashbots_getbundlestats",children:[]},{value:"Authentication",id:"authentication",children:[]}]}],h={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"how-to-interact-directly-with-the-flashbots-rpc-endpoint"},"How to interact directly with the Flashbots RPC endpoint"),(0,s.kt)("p",null,"For advanced users, you can interact with the relay's RPC endpoint at ",(0,s.kt)("inlineCode",{parentName:"p"},"relay.flashbots.net"),". The relay provides new JSON-RPC methods for interfacing with Flashbots which are documented below:"),(0,s.kt)("h3",{id:"eth_sendbundle"},"eth_sendBundle"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"eth_sendBundle")," can be used to send your bundles to the relay. The ",(0,s.kt)("inlineCode",{parentName:"p"},"eth_sendBundle")," RPC has the following payload format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "eth_sendBundle",\n  "params": [\n    {\n      txs,               // Array[String], A list of signed transactions to execute in an atomic bundle\n      blockNumber,       // String, a hex encoded block number for which this bundle is valid on\n      minTimestamp,      // (Optional) Number, the minimum timestamp for which this bundle is valid, in seconds since the unix epoch\n      maxTimestamp,      // (Optional) Number, the maximum timestamp for which this bundle is valid, in seconds since the unix epoch\n      revertingTxHashes, // (Optional) Array[String], A list of tx hashes that are allowed to revert\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "eth_sendBundle",\n  "params": [\n    {\n      "txs": ["0x123abc...", "0x456def..."],\n      "blockNumber": "0xb63dcd",\n      "minTimestamp": 0,\n      "maxTimestamp": 1615920932\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"example response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "123",\n  "result": {\n    "bundleHash": "0x2228f5d8954ce31dc1601a8ba264dbd401bf1428388ce88238932815c5d6f23f"\n  }\n}\n')),(0,s.kt)("h3",{id:"eth_callbundle"},"eth_callBundle"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"eth_callBundle")," can be used to simulate a bundle against a specific block number, including simulating a bundle at the top of the next block. The ",(0,s.kt)("inlineCode",{parentName:"p"},"eth_callBundle")," RPC has the following payload format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "eth_callBundle",\n  "params": [\n    {\n      txs,               // Array[String], A list of signed transactions to execute in an atomic bundle\n      blockNumber,       // String, a hex encoded block number for which this bundle is valid on\n      stateBlockNumber,  // String, either a hex encoded number or a block tag for which state to base this simulation on. Can use "latest"\n      timestamp,         // (Optional) Number, the timestamp to use for this bundle simulation, in seconds since the unix epoch\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "eth_callBundle",\n  "params": [\n    {\n      "txs": ["0x123abc...", "0x456def..."],\n      "blockNumber": "0xb63dcd",\n      "stateBlockNumber": "latest",\n      "timestamp": 1615920932\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"example response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "123",\n  "result": {\n    "bundleGasPrice": "476190476193",\n    "bundleHash": "0x73b1e258c7a42fd0230b2fd05529c5d4b6fcb66c227783f8bece8aeacdd1db2e",\n    "coinbaseDiff": "20000000000126000",\n    "ethSentToCoinbase": "20000000000000000",\n    "gasFees": "126000",\n    "results": [\n      {\n        "coinbaseDiff": "10000000000063000",\n        "ethSentToCoinbase": "10000000000000000",\n        "fromAddress": "0x02A727155aeF8609c9f7F2179b2a1f560B39F5A0",\n        "gasFees": "63000",\n        "gasPrice": "476190476193",\n        "gasUsed": 21000,\n        "toAddress": "0x73625f59CAdc5009Cb458B751b3E7b6b48C06f2C",\n        "txHash": "0x669b4704a7d993a946cdd6e2f95233f308ce0c4649d2e04944e8299efcaa098a",\n        "value": "0x"\n      },\n      {\n        "coinbaseDiff": "10000000000063000",\n        "ethSentToCoinbase": "10000000000000000",\n        "fromAddress": "0x02A727155aeF8609c9f7F2179b2a1f560B39F5A0",\n        "gasFees": "63000",\n        "gasPrice": "476190476193",\n        "gasUsed": 21000,\n        "toAddress": "0x73625f59CAdc5009Cb458B751b3E7b6b48C06f2C",\n        "txHash": "0xa839ee83465657cac01adc1d50d96c1b586ed498120a84a64749c0034b4f19fa",\n        "value": "0x"\n      }\n    ],\n    "stateBlockNumber": 5221585,\n    "totalGasUsed": 42000\n  }\n}\n')),(0,s.kt)("h3",{id:"eth_sendprivatetransaction"},"eth_sendPrivateTransaction"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"eth_sendPrivateTransaction")," is used to send a single transaction to Flashbots. Flashbots will attempt to send the transaction to miners for the next 25 blocks. See ",(0,s.kt)("a",{parentName:"p",href:"/flashbots-auction/searchers/advanced/private-transaction"},"Private Transactions")," for more info."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.alchemy.com/alchemy/apis/ethereum/eth-sendPrivateTransaction/?a=fb"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_sendPrivateTransaction"))," is also supported for free on ",(0,s.kt)("a",{parentName:"p",href:"https://alchemy.com/?a=fb"},"Alchemy"),"."),(0,s.kt)("p",null,"This method has the following JSON-RPC format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "eth_sendPrivateTransaction",\n  "params": [{\n    tx,               // String, raw signed transaction\n    maxBlockNumber,   // Hex-encoded number string, optional. Highest block number in which the transaction should be included.\n    preferences: { fast: boolean } // optional, see https://docs.flashbots.net/flashbots-protect/rpc/fast-mode\n  }]\n}\n')),(0,s.kt)("p",null,"example request:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "eth_sendPrivateTransaction",\n  "params": [\n    {\n      "tx": "0x123abc...",\n      "maxBlockNumber": "0xcd23a0",\n      "preferences": { "fast": true } // optional, see https://docs.flashbots.net/flashbots-protect/rpc/fast-mode\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"example response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x45df1bc3de765927b053ec029fc9d15d6321945b23cac0614eb0b5e61f3a2f2a" // tx hash\n}\n')),(0,s.kt)("h3",{id:"eth_cancelprivatetransaction"},"eth_cancelPrivateTransaction"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"eth_cancelPrivateTransaction")," method stops private transactions from being submitted for future blocks. A transaction can only be cancelled if the request is signed by the same key as the ",(0,s.kt)("inlineCode",{parentName:"p"},"eth_sendPrivateTransaction")," call submitting the transaction in first place."),(0,s.kt)("p",null,"This method has the following JSON-RPC format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "eth_cancelPrivateTransaction",\n  "params": [{\n    txHash,   // String, transaction hash of private tx to be cancelled\n  }]\n}\n')),(0,s.kt)("p",null,"example request:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "eth_cancelPrivateTransaction",\n  "params": [\n    {\n      "txHash": "0x45df1bc3de765927b053ec029fc9d15d6321945b23cac0614eb0b5e61f3a2f2a"\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"example response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": true // true if tx successfully cancelled, false if not\n}\n')),(0,s.kt)("h3",{id:"flashbots_getuserstats"},"flashbots_getUserStats"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"flashbots_getUserStats")," JSON-RPC method returns a quick summary of how a searcher is performing in the relay, including their ",(0,s.kt)("a",{parentName:"p",href:"/flashbots-auction/searchers/advanced/reputation"},"reputation-based priority"),". It is currently updated once every hour and has the following payload format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "flashbots_getUserStats",\n  "params": [\n      blockNumber,       // String, a hex encoded recent block number, in order to prevent replay attacks. Must be within 20 blocks of the current chain tip.\n  ]\n}\n')),(0,s.kt)("p",null,"example response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "is_high_priority": true,\n  "all_time_miner_payments": "1280749594841588639",\n  "all_time_gas_simulated": "30049470846",\n  "last_7d_miner_payments": "1280749594841588639",\n  "last_7d_gas_simulated": "30049470846",\n  "last_1d_miner_payments": "142305510537954293",\n  "last_1d_gas_simulated": "2731770076"\n}\n')),(0,s.kt)("p",null,"where"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"is_high_priority"),": boolean representing if this searcher has a high enough reputation to be in the high priority queue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"all_time_miner_payments"),": the total amount paid to miners over all time"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"all_time_gas_simulated"),": the total amount of gas simulated across all bundles submitted to the relay. This is the actual gas used in simulations, not gas limit")),(0,s.kt)("h3",{id:"flashbots_getbundlestats"},"flashbots_getBundleStats"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"flashbots_getBundleStats")," JSON-RPC method returns stats for a single bundle. You must provide a blockNumber and the bundleHash, and the signing address must be the same as the one who submitted the bundle."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "flashbots_getBundleStats",\n  "params": [\n    {\n      bundleHash,       // String, returned by the flashbots api when calling eth_sendBundle\n      blockNumber,       // String, the block number the bundle was targeting (hex encoded)\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"example response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "isSimulated": true,\n  "isSentToMiners": true,\n  "isHighPriority": true,\n  "simulatedAt": "2021-08-06T21:36:06.317Z",\n  "submittedAt": "2021-08-06T21:36:06.250Z",\n  "sentToMinersAt": "2021-08-06T21:36:06.343Z"\n}\n')),(0,s.kt)("h3",{id:"authentication"},"Authentication"),(0,s.kt)("p",null,"To authenticate your request, the relay requires you sign the payload and include the signed payload in the ",(0,s.kt)("inlineCode",{parentName:"p"},"X-Flashbots-Signature")," header of your request."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-curl"},'curl -X POST -H "Content-Type: application/json" -H "X-Flashbots-Signature: 0x1234:0xabcd" --data \'{"jsonrpc":"2.0","method":"eth_sendBundle","params":[{see above}],"id":1}\' https://relay.flashbots.net\n')),(0,s.kt)("p",null,"Any valid Ethereum key can be used to sign the payload. The Ethereum address associated with this key will be used by the relay to keep track of your requests over time and provide user statistics. You can change the key you use at any time."),(0,s.kt)("p",null,"The signature is calculated by taking the ",(0,s.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-191"},"EIP-191")," hash of the json body encoded as UTF-8 bytes. Here's an example using ethers.js:"),(0,s.kt)(o.Z,{defaultValue:"ethers.js",values:[{label:"ethers.js",value:"ethers.js"},{label:"web3.py",value:"web3.py"},{label:"go",value:"go"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ethers.js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { Wallet, utils } from "ethers";\n\nconst privateKey = "0x1234";\nconst wallet = new Wallet(privateKey);\nconst body =\n  \'{"jsonrpc":"2.0","method":"eth_sendBundle","params":[{see above}],"id":1}\';\nconst signature = wallet.address + ":" + wallet.signMessage(utils.id(body));\n'))),(0,s.kt)(l.Z,{value:"web3.py",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'from web3 import Web3\nfrom eth_account import Account, messages\n\nbody = \'{"jsonrpc":"2.0","method":"eth_sendBundle","params":[{see above}],"id":1}\'\nmessage = messages.encode_defunct(text=Web3.keccak(text=body).hex())\nsignature = Account.from_key(private_key).address + \':\' + Account.sign_message(message, private_key).signature.hex()\n'))),(0,s.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'body := `{"jsonrpc":"2.0","method":"eth_sendBundle","params":[{see above}],"id":1}`\nhashedBody := crypto.Keccak256Hash([]byte(body)).Hex()\nsig, err := crypto.Sign(accounts.TextHash([]byte(hashedBody)), privKey)\nsignature := crypto.PubkeyToAddress(privKey.PublicKey).Hex() + ":" + hexutil.Encode(sig)\n')))))}m.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);