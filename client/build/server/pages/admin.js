(function() {
var exports = {};
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 1126:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ admin; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "ethers"
var external_ethers_namespaceObject = require("ethers");;
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(1589);
;// CONCATENATED MODULE: ./components/Admin.jsx






const Admin = ({
  item,
  token,
  signerAddress,
  setIsAuth
}) => {
  const {
    0: approved,
    1: setApproved
  } = (0,external_react_.useState)(false);
  const {
    0: declined,
    1: setDeclined
  } = (0,external_react_.useState)(false);
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)('');
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);

  const approve = async (e, _id) => {
    try {
      setLoading(true); // console.log("Approving id", _id)

      const res = await external_axios_default().post(`/api/approve`, {
        id: _id,
        withCredentials: true,
        credentials: "include"
      }, {
        headers: {
          address: signerAddress,
          token: token
        }
      });
      console.log(res.data);
      setApproved(true);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.error(e);
      setIsAuth(false);
      localStorage.removeItem('token');
      setError('Something went wrong...');
    }
  };

  const decline = async (e, _id) => {
    try {
      setLoading(true);
      const res = await external_axios_default().post(`/api/decline`, {
        id: _id,
        withCredentials: true,
        credentials: "include"
      }, {
        headers: {
          address: signerAddress,
          token: token
        }
      }); // console.log(res.data)

      setDeclined(true);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.error(e);
      setIsAuth(false);
      localStorage.removeItem('token');
      setError('Something went wrong...');
    }
  };

  if (loading) {
    return /*#__PURE__*/jsx_runtime_.jsx(CircularProgress/* default */.Z, {
      color: "secondary"
    });
  }

  if (error) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        width: 'max-content',
        border: '2px dashed black',
        margin: '5px 0'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: error
      })
    });
  }

  if (approved) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        width: 'max-content',
        border: '2px dashed black',
        margin: '5px 0'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Approved Successfully!"
      })
    });
  }

  if (declined) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        width: 'max-content',
        border: '2px dashed black',
        margin: '5px 0'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Declined Successfully!"
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      width: 'max-content',
      border: '2px dashed black',
      margin: '5px 0'
    },
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["ObjectId: ", item._id]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["Name: ", item.name]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["Description: ", item.description]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["Image URL: $", item.image]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["External URL: $", item.externam_url]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["Timestamp: $", item.timestamp]
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      value: item._id,
      onClick: e => approve(e, item._id),
      children: "Approve"
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      value: item._id,
      onClick: e => decline(e, item._id),
      children: "Decline"
    })]
  });
};

/* harmony default export */ var components_Admin = (Admin);
;// CONCATENATED MODULE: ./pages/admin.js











const Index = ({
  signerAddress,
  web3Instance
}) => {
  const classes = useStyles();
  const {
    0: isAuth,
    1: setIsAuth
  } = (0,external_react_.useState)(false);
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)('');
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)([]);
  const {
    0: token,
    1: setToken
  } = (0,external_react_.useState)('');
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    try {
      const tk = JSON.parse(localStorage.getItem('token'));

      if (tk.address === signerAddress) {
        setToken(tk.token);
        setIsAuth(true);
      }
    } catch (e) {
      setIsAuth(false);
      localStorage.removeItem('token');
    }
  }, [signerAddress]);

  const signLogin = async () => {
    try {
      setLoading(true);
      const message = await external_axios_default().get(`/api/nonce?address=${signerAddress}`);
      const provider = new external_ethers_namespaceObject.ethers.providers.Web3Provider(web3Instance.currentProvider);
      const signer = provider.getSigner();
      const sign = await signer.signMessage(message.data);
      const res = await external_axios_default()(`/api/authenticate`, {
        method: "post",
        data: {
          address: signerAddress,
          signature: sign.toString()
        }
      });
      localStorage.setItem('token', JSON.stringify({
        address: signerAddress,
        token: res.data
      }));
      setToken(res.data);
      setIsAuth(true);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.error(e);
      setError('AUTH FAILED');
      console.log("AUTH FAILED OR ADMIN KEY NOT ADDED");
    }
  };

  const getData = async () => {
    try {
      setLoading(true);
      const {
        data
      } = await external_axios_default().get(`/api/all`, {
        headers: {
          address: signerAddress,
          token: token
        }
      }); // console.log(data);

      setData(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setIsAuth(false);
      localStorage.removeItem('token');
      console.error(e);
      setError('AUTH FAILED');
    }
  };

  if (loading) {
    return /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: classes.main,
      children: /*#__PURE__*/jsx_runtime_.jsx(CircularProgress/* default */.Z, {
        color: "secondary"
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "NFT Admin | Polygon"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: classes.main,
      children: [!isAuth ? /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
        className: classes.btn,
        onClick: signLogin,
        children: "Admin Auth"
      }) : 'Authenticated!', /*#__PURE__*/jsx_runtime_.jsx("br", {}), data.length === 0 && /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
        className: classes.btn,
        onClick: getData,
        children: "Get Data"
      }), isAuth && data.length > 0 && data.map((item, i) => /*#__PURE__*/jsx_runtime_.jsx(components_Admin, {
        item: item,
        token: token,
        setIsAuth: setIsAuth,
        signerAddress: signerAddress
      }, i))]
    })]
  });
};

const useStyles = (0,makeStyles/* default */.Z)(theme => ({
  main: {
    width: '100%',
    margin: '40px auto',
    minHeight: '50vh',
    maxWidth: 800,
    // textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: '20px',
      maxWidth: '90vw'
    }
  },
  btn: {
    maxWidth: 300,
    background: '#061024',
    padding: '10px 16px',
    fontSize: 16,
    color: '#FFFFFF',
    borderRadius: 5,
    marginTop: 10,
    marginRight: 10,
    '&:hover': {
      background: '#061024'
    }
  }
}));
/* harmony default export */ var admin = (Index);

/***/ }),

/***/ 1731:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

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

/***/ 3536:
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 4229:
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

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
var __webpack_exports__ = __webpack_require__.X(0, [120,589], function() { return __webpack_exec__(1126); });
module.exports = __webpack_exports__;

})();