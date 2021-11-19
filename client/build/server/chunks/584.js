exports.id = 584;
exports.ids = [584];
exports.modules = {

/***/ 1739:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"type":"constructor","stateMutability":"nonpayable","inputs":[]},{"type":"event","name":"ApprovalForAll","inputs":[{"type":"address","name":"account","internalType":"address","indexed":true},{"type":"address","name":"operator","internalType":"address","indexed":true},{"type":"bool","name":"approved","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"MetaTransactionExecuted","inputs":[{"type":"address","name":"userAddress","internalType":"address","indexed":false},{"type":"address","name":"relayerAddress","internalType":"address payable","indexed":false},{"type":"bytes","name":"functionSignature","internalType":"bytes","indexed":false}],"anonymous":false},{"type":"event","name":"TransferBatch","inputs":[{"type":"address","name":"operator","internalType":"address","indexed":true},{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256[]","name":"ids","internalType":"uint256[]","indexed":false},{"type":"uint256[]","name":"values","internalType":"uint256[]","indexed":false}],"anonymous":false},{"type":"event","name":"TransferSingle","inputs":[{"type":"address","name":"operator","internalType":"address","indexed":true},{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"id","internalType":"uint256","indexed":false},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"URI","inputs":[{"type":"string","name":"value","internalType":"string","indexed":false},{"type":"uint256","name":"id","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"account","internalType":"address"},{"type":"uint256","name":"id","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[]","name":"","internalType":"uint256[]"}],"name":"balanceOfBatch","inputs":[{"type":"address[]","name":"accounts","internalType":"address[]"},{"type":"uint256[]","name":"ids","internalType":"uint256[]"}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"bytes","name":"","internalType":"bytes"}],"name":"executeMetaTransaction","inputs":[{"type":"address","name":"userAddress","internalType":"address"},{"type":"bytes","name":"functionSignature","internalType":"bytes"},{"type":"bytes32","name":"sigR","internalType":"bytes32"},{"type":"bytes32","name":"sigS","internalType":"bytes32"},{"type":"uint8","name":"sigV","internalType":"uint8"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"nonce","internalType":"uint256"}],"name":"getNonce","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isApprovedForAll","inputs":[{"type":"address","name":"account","internalType":"address"},{"type":"address","name":"operator","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"locator","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"mintTocaller","inputs":[{"type":"address","name":"account","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"bytes","name":"data","internalType":"bytes"},{"type":"string","name":"givenURL","internalType":"string"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeBatchTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256[]","name":"ids","internalType":"uint256[]"},{"type":"uint256[]","name":"amounts","internalType":"uint256[]"},{"type":"bytes","name":"data","internalType":"bytes"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"id","internalType":"uint256"},{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"bytes","name":"data","internalType":"bytes"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setApprovalForAll","inputs":[{"type":"address","name":"operator","internalType":"address"},{"type":"bool","name":"approved","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"supportsInterface","inputs":[{"type":"bytes4","name":"interfaceId","internalType":"bytes4"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"uri","inputs":[{"type":"uint256","name":"_id","internalType":"uint256"}]}]');

/***/ }),

/***/ 7854:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"type":"constructor","stateMutability":"nonpayable","inputs":[]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"approved","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"event","name":"ApprovalForAll","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"operator","internalType":"address","indexed":true},{"type":"bool","name":"approved","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"MetaTransactionExecuted","inputs":[{"type":"address","name":"userAddress","internalType":"address","indexed":false},{"type":"address","name":"relayerAddress","internalType":"address payable","indexed":false},{"type":"bytes","name":"functionSignature","internalType":"bytes","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"approve","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"owner","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"baseURI","inputs":[]},{"type":"function","stateMutability":"payable","outputs":[{"type":"bytes","name":"","internalType":"bytes"}],"name":"executeMetaTransaction","inputs":[{"type":"address","name":"userAddress","internalType":"address"},{"type":"bytes","name":"functionSignature","internalType":"bytes"},{"type":"bytes32","name":"sigR","internalType":"bytes32"},{"type":"bytes32","name":"sigS","internalType":"bytes32"},{"type":"uint8","name":"sigV","internalType":"uint8"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"getApproved","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"nonce","internalType":"uint256"}],"name":"getNonce","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isApprovedForAll","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"operator","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"mintToCaller","inputs":[{"type":"address","name":"caller","internalType":"address"},{"type":"string","name":"tokenURI","internalType":"string"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"ownerOf","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"bytes","name":"_data","internalType":"bytes"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setApprovalForAll","inputs":[{"type":"address","name":"operator","internalType":"address"},{"type":"bool","name":"approved","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"supportsInterface","inputs":[{"type":"bytes4","name":"interfaceId","internalType":"bytes4"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenByIndex","inputs":[{"type":"uint256","name":"index","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenOfOwnerByIndex","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"uint256","name":"index","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"tokenURI","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]}]');

/***/ }),

/***/ 1584:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSignatureParameters": function() { return /* binding */ getSignatureParameters; },
/* harmony export */   "web3": function() { return /* binding */ web3; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_blockies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7129);
/* harmony import */ var react_blockies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_blockies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4409);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4519);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4515);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _arkane_network_web3_arkane_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3081);
/* harmony import */ var _arkane_network_web3_arkane_provider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_arkane_network_web3_arkane_provider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _biconomy_mexa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6669);
/* harmony import */ var _biconomy_mexa__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_biconomy_mexa__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1120);









 // const abi = require('../config/abi.json');
// const abi_1155 = require('../config/abi_1155.json');

const abi_erc721_biconomy = __webpack_require__(7854);

const abi_erc1155_biconomy = __webpack_require__(1739);

var web3;

const truncateAddress = address => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

const ConnectWallet = ({
  signerAddress,
  setContract_1155,
  setContract_721,
  setSignerAddress,
  setNetworkId,
  setProviderMetamask,
  setWeb3Instatce
}) => {
  const classes = useStyles(); // const [isWaiting, setWaiting] = useState(false)

  const {
    0: provider,
    1: setProvider
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  const {
    0: biconomyProvider,
    1: setBiconomyProvider
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  const {
    0: showLogout,
    1: setShowLogout
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const providerOptions = {
    walletconnect: {
      package: (_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_5___default()),
      options: {
        infuraId: "196440d5d02d41dfa2a8ee5bfd2e96bd"
      }
    },
    "custom-arkex": {
      display: {
        logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYwIiBoZWlnaHQ9IjUxOCIgdmlld0JveD0iMCAwIDU2MCA1MTgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01NTQuNTU1IDE2OS43OTZMNDg1Ljg2NyAxOTUuODg1QzQ4Mi45NzkgMTk2LjkzNiA0ODAuMTc5IDE5NC4xMzQgNDgxLjQwNCAxOTEuMjQ1TDU1Ny45NjggNS4zODEwOUM1NTkuMTA1IDIuNTc5NTYgNTU2LjM5MyAtMC4zMDk1MTQgNTUzLjU5MyAwLjc0MTA1OUw0MDguMDc4IDUxLjY5MzlDNDA1LjI3OCA1Mi42NTY5IDQwMy4wMDMgNTQuODQ1NiA0MDEuODY2IDU3LjY0NzFMMzAzLjI1MiAzMDYuNTQ1QzMwMi4wMjcgMzA5LjY5NyAzMDUuMDg5IDMxMi44NDkgMzA4LjIzOSAzMTEuNzExTDM2OS44NCAyODkuMTIzQzM3My4yNTMgMjg3Ljg5OCAzNzYuNDAzIDI5MS41NzUgMzc0LjU2NSAyOTQuODE0TDI4NC4wODkgNDQ4LjQ2QzI4Mi4xNjQgNDUxLjc4NyAyNzcuMjY0IDQ1MS43ODcgMjc1LjMzOSA0NDguNDZMMTg0Ljg2MyAyOTQuNzI2QzE4My4wMjUgMjkxLjU3NSAxODYuMDg4IDI4Ny44MSAxODkuNTg4IDI4OS4wMzZMMjUxLjE4OSAzMTEuNjIzQzI1NC4zMzkgMzEyLjc2MSAyNTcuNDAxIDMwOS42MSAyNTYuMTc2IDMwNi40NThMMTU3LjQ3NSA1Ny42NDcxQzE1Ni4zMzcgNTQuODQ1NiAxNTQuMTUgNTIuNzQ0NCAxNTEuMjYyIDUxLjY5MzlMNS45MjI2NyAwLjc0MTA1OUMzLjAzNTEzIC0wLjIyMTk2NyAwLjQxMDA5MiAyLjU3OTU2IDEuNTQ3NjEgNS4zODEwOUw3OC4wMjM3IDE5MS4yNDVDNzkuMTYxMiAxOTQuMDQ3IDc2LjM2MTIgMTk2LjkzNiA3My41NjExIDE5NS44ODVMNS4zMTAxNiAxNjkuNzk2QzEuODEwMTEgMTY4LjQ4MyAtMS4zMzk5MyAxNzIuMjQ3IDAuNTg1MDk1IDE3NS40ODZMMjAzLjc2MyA1MTIuMDJDMjA1Ljc3NSA1MTUuMzQ3IDIwOS4zNjMgNTE3LjM2IDIxMy4zMDEgNTE3LjM2SDM0Ni40NzdDMzUwLjMyOCA1MTcuMzYgMzU0LjAwMyA1MTUuMzQ3IDM1Ni4wMTUgNTEyLjAyTDU1OS41NDMgMTc1LjQ4NkM1NjEuMjA1IDE3Mi4yNDcgNTU4LjA1NSAxNjguNDgzIDU1NC41NTUgMTY5Ljc5NloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjIyNi4wMDkiIHkxPSIwLjUyMDI0OCIgeDI9IjU5MC43NTQiIHkyPSI5OS43NjQ0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM3NzM1RTgiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQzYyQ0YxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==",
        name: "Venly",
        description: "Connect to Venly Wallet"
      },
      package: _arkane_network_web3_arkane_provider__WEBPACK_IMPORTED_MODULE_6__.Arkane,
      options: {
        clientId: "Polygon",
        secretType: "MATIC"
      },
      connector: async (AK, options) => {
        const provider = await AK.createArkaneProviderEngine(options);
        return provider;
      }
    }
  };
  const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())({
    cacheProvider: false,
    disableInjectedProvider: false,
    providerOptions
  }); // Automatically connect if the provider is cashed but has not yet
  // been set (e.g. page refresh)

  if (web3Modal.cachedProvider && !provider) {
    connectWallet();
  }

  async function connectWallet() {
    try {
      const externalProvider = await web3Modal.connect();
      const biconomy = new _biconomy_mexa__WEBPACK_IMPORTED_MODULE_7__.Biconomy(new (web3__WEBPACK_IMPORTED_MODULE_3___default().providers.HttpProvider)("https://matic-mainnet-full-rpc.bwarelabs.com"), {
        apiKey: "cbP3aQZso.3bdc6bb6-74e2-42bf-8f87-9af3976e41f5",
        debug: true
      });
      setBiconomyProvider(new (web3__WEBPACK_IMPORTED_MODULE_3___default())(biconomy));
      let w3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(externalProvider);
      setProvider(w3);
      biconomy.onEvent(biconomy.READY, () => {
        console.log("initialized");
      }).onEvent(biconomy.ERROR, (error, message) => {
        console.log(error);
        console.log(message);
      });
    } catch (e) {
      console.log("NO_WALLET_CONNECTED", e);
    }
  }

  const getAddress = async () => {
    if (provider && biconomyProvider) {
      web3 = provider;
      setWeb3Instatce(provider);
      const accounts = await web3.eth.getAccounts();
      setSignerAddress(accounts[0]);
      setContract_721(new biconomyProvider.eth.Contract(abi_erc721_biconomy, "0x72B6Dc1003E154ac71c76D3795A3829CfD5e33b9"));
      setContract_1155(new biconomyProvider.eth.Contract(abi_erc1155_biconomy, "0xfd1dBD4114550A867cA46049C346B6cD452ec919"));
      const networkId = await web3.eth.net.getId(); // console.log(networkId)

      setNetworkId(networkId);
      const providerName = await web3.currentProvider.isMetaMask;
      setProviderMetamask(providerName); // console.log(providerName);
    } else {
      setSignerAddress("");
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getAddress();
  }, [provider]); // checkNetwork(getAddress, 1000);

  const handleClickConnect = async () => {
    await connectWallet();
  };

  const handleClickAddress = () => {
    web3Modal.clearCachedProvider();
    setProvider(undefined);
    setShowLogout(false);
  };

  const toggleLogoutButton = () => {
    showLogout ? setShowLogout(false) : setShowLogout(true);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: classes.walletBtnContainer,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
      className: classes.walletBtn,
      onClick: signerAddress ? toggleLogoutButton : handleClickConnect,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_blockies__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: `${classes.img} ${signerAddress ? 'green' : 'red'}`,
        seed: signerAddress ? signerAddress : ""
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: signerAddress ? truncateAddress(signerAddress) : "Connect Wallet"
      })]
    }), showLogout && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      onClick: handleClickAddress,
      className: classes.logout,
      children: "Logout"
    })]
  });
};

const getSignatureParameters = signature => {
  // console.log(signature)
  if (!web3__WEBPACK_IMPORTED_MODULE_3___default().utils.isHexStrict(signature)) {
    throw new Error('Given value "'.concat(signature, '" is not a valid hex string.'));
  }

  var r = signature.slice(0, 66);
  var s = "0x".concat(signature.slice(66, 130));
  var v = "0x".concat(signature.slice(130, 132));
  v = web3__WEBPACK_IMPORTED_MODULE_3___default().utils.hexToNumber(v);
  if (![27, 28].includes(v)) v += 27;
  return {
    r: r,
    s: s,
    v: v
  };
};
const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(theme => ({
  walletBtnContainer: {
    display: 'flex',
    position: 'relative'
  },
  walletBtn: {
    background: "#e3e3e3",
    cursor: "pointer",
    border: 0,
    outline: "none",
    borderRadius: "18px",
    height: "36px",
    lineHeight: "36px",
    padding: "0 18px 0 8px",
    display: "flex",
    alignItems: "center",
    ["@media (max-width:599px)"]: {
      padding: 0
    },
    "&:hover": {
      backgroundColor: "#000",
      color: "white"
    },
    "& div": {
      ["@media (max-width:599px)"]: {
        margin: 0,
        display: "none"
      }
    }
  },
  img: {
    borderRadius: "12px",
    marginRight: 5,
    height: "24px !important",
    width: "24px !important",
    "&.green": {
      borderColor: 'green'
    },
    "&.red": {
      borderColor: 'red'
    },
    ["@media (max-width:599px)"]: {
      marginRight: 0,
      height: "36px !important",
      width: "36px !important",
      borderRadius: "20px",
      border: '2px solid'
    }
  },
  logout: {
    position: "absolute",
    backgroundColor: "#e3e3e3",
    color: 'black',
    width: "100%",
    height: "36px",
    lineHeight: "36px",
    padding: "0 18px",
    borderRadius: "18px",
    top: "40px",
    right: "0",
    cursor: "pointer",
    textAlign: "center",
    fontWeight: '600',
    "&:hover": {
      color: 'white',
      backgroundColor: "#000"
    },
    [theme.breakpoints.down("xs")]: {
      width: 'auto'
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (ConnectWallet);


/***/ })

};
;