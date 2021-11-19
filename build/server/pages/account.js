(function() {
var exports = {};
exports.id = 966;
exports.ids = [966];
exports.modules = {

/***/ 2740:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ account; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "@material-ui/core/"
var _namespaceObject = require("@material-ui/core/");;
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(7985);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
;// CONCATENATED MODULE: ./components/UI/NFTCard.jsx





const NFTCard = ({
  image,
  name,
  type,
  quantity,
  setModalState,
  setModalImgProps
}) => {
  const classes = useStyles();
  const imgElement = (0,external_react_.useRef)(null);
  const {
    0: portrait,
    1: setportrait
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    // Checking the image orientation
    const nWidth = imgElement.current.naturalWidth;
    const nHeight = imgElement.current.naturalHeight;

    if (nWidth / nHeight > 1) {
      setportrait(false);
    } else {
      setportrait(true);
    }
  }, [image]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.nftCard,
    onClick: () => {
      setModalState(true);
      setModalImgProps({
        img: image,
        portrait: portrait
      });
    },
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.imageContainer,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.imgPlaceholder
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: image || "images/placeholder.png",
        className: classes.nftImg,
        alt: "image",
        ref: imgElement
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.nftDetails,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: classes.nftTitle,
        children: name
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.nftSubTitle,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: type
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: quantity && type === "erc1155" && "Quantity: " + quantity
        })]
      })]
    })]
  });
};

const useStyles = (0,makeStyles/* default */.Z)(theme => ({
  nftCard: {
    backgroundColor: "white",
    borderRadius: "10px",
    width: "100%",
    overflow: "hidden",
    padding: "16px",
    border: "0.5px solid #E8E8E8",
    height: "100%",
    boxShadow: "0px 2px 10px rgb(0 0 0 / 10%)",
    cursor: "pointer",
    "&:hover img": {
      transform: 'scale(1.1)',
      transition: 'all 0.3s ease'
    }
  },
  imageContainer: {
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "12px"
  },
  imgPlaceholder: {
    width: "100%",
    paddingBottom: "100%"
  },
  nftImg: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    backgroundColor: "#EDF0F7",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    transform: 'scale(1)',
    transition: 'all 0.3s ease'
  },
  nftDetails: {
    padding: "0 2px"
  },
  nftTitle: {
    margin: "0 0 4px 0",
    textTransform: "capitalize",
    fontSize: "17px"
  },
  nftSubTitle: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    color: "#515C72",
    fontWeight: "600",
    "& span": {
      textTransform: "uppercase"
    }
  }
}));
/* harmony default export */ var UI_NFTCard = (NFTCard);
;// CONCATENATED MODULE: ./pages/account.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Account = ({
  signerAddress
}) => {
  const classes = account_useStyles();
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);
  const {
    0: nftData,
    1: setNftData
  } = (0,external_react_.useState)([]);
  const {
    0: modalState,
    1: setModalState
  } = (0,external_react_.useState)(false);
  const {
    0: modalImgProps,
    1: setModalImgProps
  } = (0,external_react_.useState)({});

  const closeModal = () => {
    setModalState(false);
  };

  (0,external_react_.useEffect)(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setNftData([]);
      let {
        data
      } = await external_axios_default()({
        method: 'get',
        url: `https://api.covalenthq.com/v1/137/address/${signerAddress}/balances_v2/?key=${"ckey_c4fa732d70f74c2791b623631e9"}&nft=true`
      });
      const items = data.data.items; // filter useful info from api

      const nft = [];

      if (items.length > 0) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].nft_data) {
            for (let j = 0; j < items[i].nft_data.length; ++j) {
              var _items$i$nft_data$j$e, _items$i$nft_data$j$e2, _items$i$nft_data$j;

              const obj = {};
              obj.name = (_items$i$nft_data$j$e = items[i].nft_data[j].external_data) === null || _items$i$nft_data$j$e === void 0 ? void 0 : _items$i$nft_data$j$e.name;
              obj.image = (_items$i$nft_data$j$e2 = items[i].nft_data[j].external_data) === null || _items$i$nft_data$j$e2 === void 0 ? void 0 : _items$i$nft_data$j$e2.image;
              obj.nftType = items[i].nft_data[j].supports_erc[1];
              obj.quantity = (_items$i$nft_data$j = items[i].nft_data[j]) === null || _items$i$nft_data$j === void 0 ? void 0 : _items$i$nft_data$j.token_balance;
              nft.push(obj);
            }
          } else {
            const obj = {};
            obj.name = items[i].contract_name;
            obj.image = items[i].logo_url;
            obj.nftType = items[i].contract_ticker_symbol;
            nft.push(obj);
          }
        }
      } // console.log(nft);


      setNftData(nft);
      setIsLoading(false);
    };

    if (signerAddress) fetchData();
  }, [signerAddress]);
  return /*#__PURE__*/jsx_runtime_.jsx("main", {
    className: classes.main,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(_namespaceObject.Container, {
      className: classes.container,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(_namespaceObject.Grid, {
        container: true,
        spacing: 3,
        children: [/*#__PURE__*/jsx_runtime_.jsx(_namespaceObject.Grid, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: classes.title,
            children: "My account"
          })
        }), nftData.map((nft, i) => /*#__PURE__*/jsx_runtime_.jsx(_namespaceObject.Grid, {
          item: true,
          xs: 12,
          sm: 4,
          md: 3,
          children: /*#__PURE__*/jsx_runtime_.jsx(UI_NFTCard, {
            image: nft.image,
            name: nft.name,
            type: nft.nftType,
            quantity: nft.quantity,
            setModalState: setModalState,
            setModalImgProps: setModalImgProps
          })
        }, i))]
      }), /*#__PURE__*/jsx_runtime_.jsx(_namespaceObject.Modal, {
        open: modalState,
        className: `${classes.modalContainer} ${modalImgProps.portrait ? classes.portrait : ''}`,
        onClose: closeModal,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `${classes.modal} modal`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.closeModal,
            onClick: closeModal,
            children: /*#__PURE__*/jsx_runtime_.jsx(icons_.Close, {
              style: {
                fontSize: "16px"
              }
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: modalImgProps.img,
            alt: "nft display",
            className: classes.img
          })]
        })
      }), isLoading && /*#__PURE__*/jsx_runtime_.jsx(_namespaceObject.CircularProgress, {
        color: "secondary"
      })]
    })
  });
};

const account_useStyles = (0,makeStyles/* default */.Z)(theme => _objectSpread(_objectSpread(_objectSpread({}, theme.overrides.mui), theme.overrides.modalStyle), {}, {
  main: {
    backgroundColor: "white",
    marginTop: "12px",
    paddingBottom: "70px",
    minHeight: "430px"
  },
  title: {
    fontWeight: "bold",
    margin: "30px 0 10px"
  },
  img: {
    borderRadius: "5px"
  },
  portrait: {
    "& .modal": {
      width: 'auto',
      height: '90%',
      "& img": {
        width: 'auto',
        height: '100%'
      }
    }
  }
}));
/* harmony default export */ var account = (Account);

/***/ }),

/***/ 7985:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons");;

/***/ }),

/***/ 4047:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ 9137:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ 2958:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [120], function() { return __webpack_exec__(2740); });
module.exports = __webpack_exports__;

})();