(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1871:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(4047);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(5834);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createMuiTheme.js + 19 modules
var createMuiTheme = __webpack_require__(5592);
;// CONCATENATED MODULE: ./utils/theme.js

const theme = (0,createMuiTheme/* default */.Z)({
  overrides: {
    formStyle: {
      formContainer: {
        padding: "40px 26px"
      },
      // input and label
      inputContainer: {
        marginBottom: "30px",
        top: 0,
        left: 0,
        position: "relative",
        "& input, & textarea": {
          height: "50px",
          borderRadius: "6px",
          backgroundColor: "#fff",
          border: "1px solid #C7CBD9",
          padding: "0 15px",
          // lineHeight: "50px",
          fontSize: "16px",
          fontWeight: "500",
          width: "100%",
          color: "black",
          fontFamily: ['"Nunito Sans"', "sans-serif"].join(","),
          "&:active": {
            border: "1.5px solid #7533E2",
            outline: "none"
          },
          "&:focus": {
            border: "1.5px solid #7533E2",
            outline: "none"
          },
          "&:disabled": {
            pointerEvents: "none",
            userSelect: "none",
            backgroundColor: "transparent",
            position: "relative",
            "&~label": {
              color: "gray"
            }
          }
        },
        "& textarea": {
          padding: "15px"
        },
        "& label": {
          fontSize: "14px",
          fontWeight: "700",
          color: "#7533E2",
          marginLeft: "3px",
          marginBottom: "4px",
          display: "block;",
          "& span": {
            color: "#515C72",
            fontSize: "14px",
            fontWeight: "normal"
          }
        }
      },
      label: {
        fontSize: "14px",
        fontWeight: "700",
        color: "#7533E2",
        marginLeft: "3px",
        marginBottom: "4px",
        marginTop: 0,
        display: "block;"
      },
      // nft type checkbox
      nftType: {
        display: "flex",
        padding: "5px",
        backgroundColor: "white",
        border: "1px solid #C7CBD9",
        borderRadius: "6px",
        height: "50px",
        position: "relative",
        cursor: "pointer",
        marginBottom: "30px",
        "& div": {
          width: "calc(50% - 2.5px)",
          // backgroundColor: "red",
          borderRadius: "5px",
          textAlign: "center",
          lineHeight: "40px",
          fontWeight: "600",
          fontSize: "14px",
          position: "relative",
          zIndex: "2",
          color: "#6E798F",
          transition: "0.3s ease",
          "&:first-child": {
            marginRight: "5px"
          }
        },
        // slider
        "&::after": {
          content: "' '",
          height: "40px",
          width: "calc(50% - 7.5px)",
          position: "absolute",
          top: "4px",
          left: "5px",
          zIndex: 1,
          backgroundColor: "#3E3B51",
          borderRadius: "5px",
          transition: "0.3s ease"
        }
      },
      hiddenCheckbox: {
        // checking whether checkbox is checked
        "&:checked + label": {
          // if checked, text colour for erc1155 will be white
          "& div": {
            "&:nth-child(2)": {
              color: "#fff",
              transition: "0.3s ease"
            }
          },
          // moving slider
          "&::after": {
            left: "calc(50% + 2.5px)",
            transition: "0.3s ease"
          }
        },
        // if not checked, text colour for erc721 will be white
        "&:not(:checked) + label": {
          "& div": {
            "&:first-child": {
              color: "#fff",
              transition: "0.3s ease"
            }
          }
        }
      },
      // button
      btnContainer: {
        display: "flex",
        marginTop: "15px"
      },
      btn: {
        height: "44px",
        lineHeight: "44px",
        padding: "0 20px",
        border: "1px solid #8247E5",
        borderRadius: "4px",
        display: "inline-flex",
        textTransform: "capitalize",
        fontWeight: "600",
        fontSize: "16px",
        position: "relative",
        transition: "all 0.3s ease",
        "&:first-child": {
          marginRight: "14px"
        },
        "&:hover": {
          backgroundColor: "#7533e2",
          color: "white",
          borderColor: "#7533e2"
        },
        "&:disabled": {
          backgroundColor: "#bdc3c7",
          borderColor: "#bdc3c7",
          // opacity: 0.65,
          color: "white"
        }
      },
      btnWithLoader: {
        paddingLeft: "44px",
        transition: "all 0.3s ease"
      },
      filled: {
        backgroundColor: "#8247E5",
        color: "white"
      },
      loading: {
        position: "absolute",
        display: "block",
        margin: "auto",
        left: "10px",
        color: "#7533e2"
      }
    },
    modalStyle: {
      btn: {
        height: "44px",
        lineHeight: "44px",
        padding: "0 20px",
        border: "1px solid #8247E5",
        borderRadius: "4px",
        display: "inline-flex",
        textTransform: "capitalize",
        fontWeight: "500",
        fontSize: "16px",
        position: "relative",
        cursor: "pointer",
        "&:first-child": {
          marginRight: "14px"
        },
        "&:hover": {
          backgroundColor: "#7533e2",
          color: "white",
          borderColor: "#7533e2"
        }
      },
      filled: {
        backgroundColor: "#8247E5",
        color: "white"
      },
      modalContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: "0 20px"
      },
      modal: {
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "16px",
        width: "500px",
        color: "#000",
        outline: "none",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: 'hidden',
        "@media (max-width:599px)": {
          width: "100%"
        }
      },
      graphicSection: {
        position: "relative",
        height: "94px",
        backgroundColor: "#E3DEFF",
        borderRadius: "8px",
        marginTop: "40px",
        "& .iconContainer": {
          height: "150px",
          width: "150px",
          position: "absolute",
          top: "-40px",
          left: 0,
          right: 0,
          margin: "auto"
        },
        "& svg": {
          display: "block",
          margin: "auto",
          width: "150px"
        },
        "& img": {
          position: "absolute",
          margin: "44px auto",
          left: 0,
          right: 0,
          display: "block",
          width: "62px"
        }
      },
      textSection: {
        marginTop: "26px",
        "& p": {
          textAlign: "center",
          color: "#6E798F",
          fontWeight: "600",
          "& span": {
            fontWeight: "600",
            display: "block",
            wordBreak: "break-all",
            "& a": {
              color: "inherit"
            }
          }
        },
        "& .credit": {
          display: "flex",
          flexDirection: "column",
          fontSize: "12px",
          marginTop: "40px",
          padding: "0 20px",
          "& span": {
            fontWeight: "normal",
            "&:first-child": {
              marginBottom: "10px",
              fontSize: "14px"
            }
          }
        }
      },
      closeModal: {
        height: "30px",
        width: "30px",
        backgroundColor: "#FFDEDE",
        borderRadius: "15px",
        position: "absolute",
        top: "17px",
        right: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#ffc1c1"
        }
      }
    },
    msgStyle: {
      msgContainer: {
        padding: "0 26px",
        marginTop: "30px"
      },
      msg: {
        // backgroundColor: "#FFE8C3",
        backgroundColor: "rgb(255 232 195 / 56%)",
        borderRadius: "6px",
        padding: "20px",
        border: "1px solid #FFE8C3"
      },
      title: {
        fontWeight: "bold",
        color: "#434240",
        margin: 0
      },
      text: {
        fontSize: "14px",
        marginBottom: "0"
      },
      btn: {
        fontSize: "14px",
        backgroundColor: "#3e3b51",
        color: "white",
        textTransform: "Capitalize",
        padding: "5px 15px",
        "&:hover": {
          backgroundColor: "#000"
        }
      },
      metamaskLogo: {
        width: 30,
        marginRight: 5
      }
    },
    mui: {
      container: {
        maxWidth: "1080px",
        margin: "auto",
        padding: "0",
        ["@media (max-width:1120px)"]: {
          padding: "0 20px"
        },
        ["@media (max-width:599px)"]: {
          padding: "0 15px"
        }
      }
    }
  },
  typography: {
    fontFamily: ['"Nunito Sans"', "sans-serif"].join(","),
    h1: {
      fontWeight: 400,
      fontSize: "2.5rem",
      lineHeight: "normal",
      letterSpacing: "normal"
    }
  },
  palette: {
    primary: {
      main: "#7167D9"
    }
  }
});
/* harmony default export */ var utils_theme = (theme);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
;// CONCATENATED MODULE: external "@material-ui/icons/Menu"
var Menu_namespaceObject = require("@material-ui/icons/Menu");;
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/AccountCircle"
var AccountCircle_namespaceObject = require("@material-ui/icons/AccountCircle");;
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_namespaceObject);
;// CONCATENATED MODULE: ./components/UI/Icons.jsx



const BridgeIcon = ({
  className
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: "22",
    height: "20",
    viewBox: "0 0 22 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M0 12.5263V11.4737C0.0615789 11.4479 5.9279 9.13104 9.47368 3.05262L10.5263 3.57894C6.79526 9.97526 0.264737 12.4179 0 12.5263Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M11.5789 3.05263C11.5789 3.05263 11.5789 2 10.5263 2C9.47363 2 9.47363 3.05263 9.47363 3.05263V17.7895H11.5789V3.05263Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M20.0001 14.6316H1.05273V12.5263H20.0001V14.6316Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M21.0527 12.5263V11.4737C20.9911 11.4479 15.1243 9.13104 11.579 3.05262L10.5264 3.57894C14.2579 9.97526 20.7879 12.4179 21.0527 12.5263Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M6.31561 13.0526H7.36824V7.26316H6.31561V13.0526ZM14.7367 13.0526H13.684V7.26316H14.7367V13.0526ZM3.15771 13.0526H4.21035V9.89473H3.15771V13.0526ZM17.8946 13.5789H16.8419V9.89473H17.8946V13.5789Z"
    })]
  });
};
const MintIcon = ({
  className
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    width: "21",
    height: "21",
    viewBox: "0 0 21 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M19.1748 3.737C14.8188 6.293 15.1308 11.543 12.0788 13.912C9.78183 15.695 6.54083 14.792 4.66683 14.025C4.66683 14.025 3.39683 15.628 2.48583 17.765C2.18083 18.482 0.841831 17.692 1.07683 17.085C4.05483 9.4 14.1868 5.566 14.1868 5.566C14.1868 5.566 7.03783 5.263 2.25983 11.506C2.13183 10.08 1.91983 6.222 5.61983 3.856C10.6358 0.644999 20.1918 3.141 19.1748 3.737Z"
    })
  });
};
;// CONCATENATED MODULE: external "next/dynamic"
var dynamic_namespaceObject = require("next/dynamic");;
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_namespaceObject);
;// CONCATENATED MODULE: ./components/Navbar.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const ConnectWallet = dynamic_default()(() => __webpack_require__.e(/* import() */ 584).then(__webpack_require__.bind(__webpack_require__, 1584)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1584)],
    modules: ["../components/Navbar.jsx -> " + "./ConnectWallet"]
  }
});

const Navbar = ({
  signerAddress,
  setContract_1155,
  setContract_721,
  setSignerAddress,
  setNetworkId,
  setProviderMetamask,
  setWeb3Instatce
}) => {
  const classes = useStyles();
  const router = (0,router_namespaceObject.useRouter)();
  const {
    0: openMenu,
    1: setOpenMenu
  } = (0,external_react_.useState)(false);
  const menuItemContainerRef = (0,external_react_.useRef)(null);

  const toggleMenu = state => {
    state ? menuItemContainerRef.current.classList.add("open") : menuItemContainerRef.current.classList.remove("open");
    setOpenMenu(state);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(core_.AppBar, {
    position: "static",
    classes: {
      root: classes.nav
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(core_.Container, {
      className: classes.container,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.flexContainer,
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          style: {
            display: "flex"
          },
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            children: [" ", /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/logo.svg",
              alt: "logo",
              className: classes.logo
            }), " "]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.navigationSection,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.menuItemContainer,
            ref: menuItemContainerRef,
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: router.pathname == "/" ? "menuItem active" : "menuItem",
                children: [/*#__PURE__*/jsx_runtime_.jsx(MintIcon, {
                  className: "menuItemIcon"
                }), "Minter"]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "https://bridge.mintnft.today/",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: "menuItem",
                children: [/*#__PURE__*/jsx_runtime_.jsx(BridgeIcon, {
                  className: "menuItemIcon active"
                }), "Bridge"]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/account",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: router.pathname == "/account" ? "menuItem active" : "menuItem",
                children: [/*#__PURE__*/jsx_runtime_.jsx((AccountCircle_default()), {
                  className: "menuItemIcon"
                }), "Account"]
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(ConnectWallet, {
            signerAddress: signerAddress,
            setContract_1155: setContract_1155,
            setContract_721: setContract_721,
            setSignerAddress: setSignerAddress,
            setNetworkId: setNetworkId,
            setProviderMetamask: setProviderMetamask,
            setWeb3Instatce: setWeb3Instatce
          }), /*#__PURE__*/jsx_runtime_.jsx((Menu_default()), {
            className: classes.menuIcon,
            onClick: () => {
              openMenu ? toggleMenu(false) : toggleMenu(true);
            }
          })]
        })]
      })
    })
  });
};

const useStyles = (0,makeStyles/* default */.Z)(theme => _objectSpread(_objectSpread({}, theme.overrides.mui), {}, {
  nav: {
    height: "80px",
    backgroundColor: "#fff",
    boxShadow: "none",
    borderBottom: "2px solid #7533E2",
    position: "relative"
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    height: "40px",
    "@media (max-width:599px)": {
      height: "30px"
    }
  },
  // everything except the logo inside the navbar.
  navigationSection: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingLeft: '30px',
    "@media (max-width:859px)": {
      justifyContent: 'flex-end'
    }
  },
  menuItemContainer: {
    display: "flex",
    "@media (max-width:859px)": {
      justifyContent: 'space-evenly',
      position: "absolute",
      backgroundColor: "white",
      width: "100%",
      top: "80px",
      left: 0,
      padding: 0,
      height: 0,
      overflow: "hidden",
      transition: "all 0.5s ease"
    },
    // when the menu is opened in mobile view.
    "&.open": {
      padding: "20px 0",
      height: "auto",
      transition: "all 0.5s ease",
      borderBottom: "2px solid #7533E2"
    },
    // menu items
    "& .menuItem": {
      backgroundColor: "transparent",
      color: "#000",
      marginRight: "15px",
      fontSize: "12px",
      fontWeight: "700",
      textDecoration: "none",
      padding: "0 15px 0 12px",
      border: "1px solid #E8E8E8",
      borderRadius: "19px",
      display: "flex",
      alignItems: "center",
      height: "36px",
      lineHeight: "36px",
      "&.active": {
        backgroundColor: "#8247E5",
        color: "#fff",
        borderColor: "#8247E5",
        "& svg": {
          fill: "#EDF0F7"
        }
      },
      "&:hover": {
        backgroundColor: "#8247E5",
        color: "#fff",
        borderColor: "#8247E5",
        "& svg": {
          fill: "#EDF0F7"
        }
      },
      "@media (max-width:859px)": {
        textAlign: "center",
        lineHeight: "50px",
        marginRight: '0'
      }
    },
    // icons inside the menu Item
    "& .menuItemIcon": {
      width: "20px",
      height: "20px",
      fill: "#6E798F",
      marginRight: "4px",
      transition: 'none'
    }
  },
  menuIcon: {
    display: "none",
    "@media (max-width:859px)": {
      display: "block",
      color: "black",
      marginLeft: "20px",
      marginTop: "6px"
    }
  }
}));
/* harmony default export */ var components_Navbar = (Navbar);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(7985);
;// CONCATENATED MODULE: ./components/UI/Footer.jsx



function Footer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Footer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Footer_ownKeys(Object(source), true).forEach(function (key) { Footer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Footer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // mui


 // images
// import logo from "";
// import bgImg from ;
// icons



const Footer = () => {
  const classes = Footer_useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: classes.footer,
    children: /*#__PURE__*/jsx_runtime_.jsx(core_.Container, {
      className: classes.container,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
        container: true,
        style: {
          position: "relative",
          zIndex: "2"
        },
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
          item: true,
          xs: 12,
          sm: 6,
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/polygon-logowhite.svg",
            alt: "company logo",
            className: classes.logo
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: classes.text,
            children: "Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          xs: 12,
          sm: 6,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.smIconsContainer,
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://twitter.com/0xPolygon",
              target: "_blank",
              rel: "noreferrer",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.smIcon,
                children: /*#__PURE__*/jsx_runtime_.jsx(icons_.Twitter, {
                  style: {
                    fontSize: "26px"
                  }
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://discord.gg/polygon",
              target: "_blank",
              rel: "noreferrer",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.smIcon,
                children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                  fill: "#000000",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 50 50",
                  width: "100px",
                  height: "100px",
                  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"
                  })
                })
              })
            })]
          })
        })]
      })
    })
  });
};

const Footer_useStyles = (0,makeStyles/* default */.Z)(theme => Footer_objectSpread(Footer_objectSpread({}, theme.overrides.mui), {}, {
  footer: {
    borderTop: "10px solid #8247E5",
    backgroundColor: "#061024",
    padding: "70px 0",
    position: "relative",
    "&:after": {
      content: '" "',
      height: "100%",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      backgroundImage: `url("/images/footer-bg.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.2
    }
  },
  logo: {
    height: "40px"
  },
  text: {
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
    maxWidth: "360px",
    marginBottom: 0,
    marginTop: "20px"
  },
  smIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "6px",
    backgroundColor: "#271F58",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    transition: "0.1s ease",
    "&:first-child": {
      marginRight: "20px"
    },
    "&:hover": {
      backgroundColor: "white",
      color: "#8247E5",
      "& svg": {
        fill: "black"
      }
    },
    "& svg": {
      fill: "#fff",
      width: "30px"
    },
    ["@media (max-width:599px)"]: {
      marginTop: "30px"
    }
  },
  smIconsContainer: {
    display: "flex",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    ["@media (max-width:599px)"]: {
      justifyContent: "flex-start"
    }
  }
}));
/* harmony default export */ var UI_Footer = (Footer);
;// CONCATENATED MODULE: ./pages/_app.js




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const App = ({
  Component,
  pageProps
}) => {
  const {
    0: contract_1155,
    1: setContract_1155
  } = (0,external_react_.useState)(null);
  const {
    0: contract_721,
    1: setContract_721
  } = (0,external_react_.useState)(null);
  const {
    0: signerAddress,
    1: setSignerAddress
  } = (0,external_react_.useState)("");
  const {
    0: networkId,
    1: setNetworkId
  } = (0,external_react_.useState)("");
  const {
    0: web3Instance,
    1: setWeb3Instatce
  } = (0,external_react_.useState)("");
  const {
    0: providerMetamask,
    1: setProviderMetamask
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
      theme: utils_theme,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "Polygon | NFT Minter"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "viewport",
          content: "minimum-scale=1, initial-scale=1, width=device-width"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap",
          rel: "stylesheet"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(CssBaseline/* default */.ZP, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Navbar, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
        signerAddress: signerAddress,
        setContract_1155: setContract_1155,
        setContract_721: setContract_721,
        setSignerAddress: setSignerAddress,
        setNetworkId: setNetworkId,
        setProviderMetamask: setProviderMetamask,
        setWeb3Instatce: setWeb3Instatce
      })), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
        signerAddress: signerAddress,
        contract_1155: contract_1155,
        contract_721: contract_721,
        networkId: networkId,
        providerMetamask: providerMetamask,
        web3Instance: web3Instance
      })), /*#__PURE__*/jsx_runtime_.jsx(UI_Footer, {})]
    })
  });
};

/* harmony default export */ var _app = (App);

/***/ }),

/***/ 3081:
/***/ (function(module) {

"use strict";
module.exports = require("@arkane-network/web3-arkane-provider");;

/***/ }),

/***/ 6669:
/***/ (function(module) {

"use strict";
module.exports = require("@biconomy/mexa");;

/***/ }),

/***/ 1731:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

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

/***/ 4515:
/***/ (function(module) {

"use strict";
module.exports = require("@walletconnect/web3-provider");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ 7129:
/***/ (function(module) {

"use strict";
module.exports = require("react-blockies");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4409:
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ }),

/***/ 4519:
/***/ (function(module) {

"use strict";
module.exports = require("web3modal");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [120,768], function() { return __webpack_exec__(1871); });
module.exports = __webpack_exports__;

})();