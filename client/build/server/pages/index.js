(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7447:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
;// CONCATENATED MODULE: ./components/UI/ErrorBox.jsx





const ErrorBox = ({
  message
}) => {
  const classes = useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      className: classes.formError,
      children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
        children: "Error"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), message]
    })
  });
};

const useStyles = (0,makeStyles/* default */.Z)(theme => ({
  formError: {
    fontSize: "17px",
    color: "#ce1212",
    backgroundColor: "#FFDEDE",
    padding: "20px",
    marginTop: "26px",
    borderRadius: "6px"
  }
}));
/* harmony default export */ var UI_ErrorBox = (ErrorBox);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
;// CONCATENATED MODULE: external "@material-ui/icons/Check"
var Check_namespaceObject = require("@material-ui/icons/Check");;
;// CONCATENATED MODULE: ./utils/biconomy-vars.js
const domainType = [{
  name: "name",
  type: "string"
}, {
  name: "version",
  type: "string"
}, {
  name: "salt",
  type: "uint256"
}, {
  name: "verifyingContract",
  type: "address"
}];
const metaTransactionType = [{
  name: "nonce",
  type: "uint256"
}, {
  name: "from",
  type: "address"
}, {
  name: "functionSignature",
  type: "bytes"
}];
const domainData721 = {
  name: "POLYGON ERC721 NFT MINTER",
  version: "1",
  salt: 137,
  verifyingContract: "0x72B6Dc1003E154ac71c76D3795A3829CfD5e33b9"
};
const domainData1155 = {
  name: "POLYGON ERC1155 NFT MINTER",
  version: "1",
  salt: 137,
  verifyingContract: "0xfd1dBD4114550A867cA46049C346B6cD452ec919"
};
// EXTERNAL MODULE: ./components/ConnectWallet.jsx
var ConnectWallet = __webpack_require__(1584);
;// CONCATENATED MODULE: ./utils/ipfs.js
const axios = __webpack_require__(2376);

const FormData = __webpack_require__(4353);

const pinJSONToIPFS = async JSONBody => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  const res = await axios.post(url, JSONBody, {
    headers: {
      pinata_api_key: "345afdb6208614d7c9b1",
      pinata_secret_api_key: "fd4b7f422d0ebd1b6f81f4c476a68b5bbd4f8dfcca23dc95844f2e8eaab87a79"
    }
  });
  return res.data.IpfsHash;
};
const pinFileToIPFS = async file => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  let data = new FormData();
  data.append('file', file);
  const res = await axios.post(url, data, {
    maxContentLength: 'Infinity',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      pinata_api_key: "345afdb6208614d7c9b1",
      pinata_secret_api_key: "fd4b7f422d0ebd1b6f81f4c476a68b5bbd4f8dfcca23dc95844f2e8eaab87a79"
    }
  });
  return res.data.IpfsHash;
};
const encodedParams = "0x485f0f700000000000000000000000000000000000000000000000000000000000ad253b000000000000000000000000000000000000000000000000000000000013081b00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000008676976656e55524c000000000000000000000000000000000000000000000000";
;// CONCATENATED MODULE: external "react-toastify"
var external_react_toastify_namespaceObject = require("react-toastify");;
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: ./components/Form.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // components

 // material ui









external_react_toastify_namespaceObject.toast.configure();

const Form = ({
  signerAddress,
  contract_1155,
  contract_721,
  setTrsHash,
  setTriggerModal,
  setArkaneUrl,
  providerMetamask
}) => {
  const classes = Form_useStyles(); // hooks

  const {
    0: file,
    1: setFile
  } = (0,external_react_.useState)(null);
  const {
    0: imgLoading,
    1: setImgLoading
  } = (0,external_react_.useState)(false);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);
  const {
    0: err,
    1: setErr
  } = (0,external_react_.useState)("");
  const {
    0: errors,
    1: setErrors
  } = (0,external_react_.useState)({
    name: "",
    desc: "",
    file: ""
  });
  const {
    0: adult,
    1: setAdult
  } = (0,external_react_.useState)(false);
  const initialState = {
    name: "",
    desc: "",
    surl: "",
    imgSrc: "",
    imgHash: false,
    nftType: "ERC721",
    ercTwoNum: 1
  };
  const {
    0: {
      name,
      desc,
      surl,
      imgSrc,
      imgHash,
      nftType,
      ercTwoNum
    },
    1: setState
  } = (0,external_react_.useState)(initialState); // reset form

  const resetForm = () => {
    setState(_objectSpread({}, initialState));
  }; // validate form


  const validateName = () => {
    if (name === "") {
      setErrors(pS => _objectSpread(_objectSpread({}, pS), {}, {
        name: "Name cannot be empty"
      }));
    } else {
      setErrors(pS => _objectSpread(_objectSpread({}, pS), {}, {
        name: ""
      }));
    }
  };

  const validateDesc = () => {
    if (desc === "") {
      setErrors(pS => _objectSpread(_objectSpread({}, pS), {}, {
        desc: "Add description for your token"
      }));
    } else {
      setErrors(pS => _objectSpread(_objectSpread({}, pS), {}, {
        desc: ""
      }));
    }
  }; // handle file upload


  const handleFile = async e => {
    var _e$target$files$;

    setImgLoading(true); // console.log("object")

    if (((_e$target$files$ = e.target.files[0]) === null || _e$target$files$ === void 0 ? void 0 : _e$target$files$.size) < 1e7) {
      try {
        setFile(e.target.files[0]);
        const cid = await pinFileToIPFS(e.target.files[0]);
        (0,external_react_toastify_namespaceObject.toast)("File uploaded to IPFS", {
          type: "success"
        }); // console.log("IPFS imgHash", cid);

        setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
          imgHash: cid
        }));
        setErrors(pS => _objectSpread(_objectSpread({}, pS), {}, {
          file: ""
        })); // console.log(e.target.files[0]?.size < 1e7)

        if (e.target.files.length !== 0) {
          const reader = new FileReader();

          reader.onload = e => {
            setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
              imgSrc: e.target.result
            }));
            setImgLoading(false);
          };

          reader.readAsDataURL(e.target.files[0]);
        }
      } catch (e) {
        console.error(e);
        setErrors(pS => _objectSpread(_objectSpread({}, pS), {}, {
          file: e
        }));
        setImgLoading(false);
      }
    } else {
      setErrors(pS => _objectSpread(_objectSpread({}, pS), {}, {
        file: "File should be less than 10MB"
      }));
      setImgLoading(false);
    }
  };

  const onSubmit = async e => {
    e.preventDefault(); // if all req fields are avaialable

    if (name && desc && file && signerAddress && imgHash) {
      console.log("Submitting...");
      setIsLoading(true);
      setErr("");
      setTrsHash(""); // Upload files on IPFS

      let ipfsHash = "";

      try {
        ipfsHash = await pinJSONToIPFS({
          name: name,
          description: desc,
          image: "https://gateway.pinata.cloud/ipfs/" + imgHash,
          external_url: surl
        });
        (0,external_react_toastify_namespaceObject.toast)("JSON data uploaded to IPFS", {
          type: "success"
        }); // console.log(ipfsHash);
      } catch (err) {
        console.log("Error Uploading files on IPFS", err);
        setErr("Uploading files on IPFS failed");
      } // If Metamask mint directly


      if (providerMetamask) {
        if (nftType === "ERC721") {
          let nonce = await contract_721.methods.getNonce(signerAddress).call();
          let functionSignature = contract_721.methods.mintToCaller(signerAddress, "https://gateway.pinata.cloud/ipfs/" + ipfsHash).encodeABI();
          let message = {};
          message.nonce = parseInt(nonce);
          message.from = signerAddress;
          message.functionSignature = functionSignature;
          const dataToSign = JSON.stringify({
            types: {
              EIP712Domain: domainType,
              MetaTransaction: metaTransactionType
            },
            domain: domainData721,
            primaryType: "MetaTransaction",
            message: message
          });
          const rpc = {
            jsonrpc: "2.0",
            id: 999999999999,
            method: "eth_signTypedData_v4",
            params: [signerAddress, dataToSign]
          };
          const txnhash = await ConnectWallet.web3.currentProvider.sendAsync(rpc, async function (error, response) {
            //console.log(response)
            let {
              r,
              s,
              v
            } = (0,ConnectWallet.getSignatureParameters)(response.result);
            const tx = await contract_721.methods.executeMetaTransaction(signerAddress, functionSignature, r, s, v).send({
              from: signerAddress
            }).once("confirmation", (confirmationNumber, receipt) => {
              //console.log(confirmationNumber)
              //console.log(receipt)
              console.log("0x72B6Dc1003E154ac71c76D3795A3829CfD5e33b9/" + parseInt(receipt.events.Transfer.raw.topics[3])); // setArkaneUrl(
              //   "0x72B6Dc1003E154ac71c76D3795A3829CfD5e33b9/" +
              //     parseInt(receipt.events.Transfer.raw.topics[3])
              // );

              setTrsHash(receipt.transactionHash);
              setTriggerModal(true);
              resetForm();
            }).on("error", error => {
              console.log(error);
              setErr("Transaction failed");
            }); //console.log(tx)

            setIsLoading(false);
            (0,external_react_toastify_namespaceObject.toast)("NFT Minted", {
              type: "success"
            });
          });
        } else if (nftType === "ERC1155") {
          contract_1155.handleRevert = true; // https://web3js.readthedocs.io/en/v1.3.4/web3-eth.html#handlerevert

          let nonce = await contract_1155.methods.getNonce(signerAddress).call();
          let functionSignature = contract_1155.methods.mintTocaller(signerAddress, ercTwoNum, encodedParams, ipfsHash).encodeABI();
          let message = {};
          message.nonce = parseInt(nonce);
          message.from = signerAddress;
          message.functionSignature = functionSignature;
          const dataToSign = JSON.stringify({
            types: {
              EIP712Domain: domainType,
              MetaTransaction: metaTransactionType
            },
            domain: domainData1155,
            primaryType: "MetaTransaction",
            message: message
          });
          const rpc = {
            jsonrpc: "2.0",
            id: 999999999999,
            method: "eth_signTypedData_v4",
            params: [signerAddress, dataToSign]
          };
          const txnhash = ConnectWallet.web3.currentProvider.sendAsync(rpc, async function (error, response) {
            console.log(response);
            let {
              r,
              s,
              v
            } = (0,ConnectWallet.getSignatureParameters)(response.result);
            const tx = contract_1155.methods.executeMetaTransaction(signerAddress, functionSignature, r, s, v).send({
              from: signerAddress
            }).once("confirmation", (confirmationNumber, receipt) => {
              //console.log(confirmationNumber)
              //console.log(receipt)
              console.log("0xfd1dBD4114550A867cA46049C346B6cD452ec919/" + parseInt(receipt.events.TransferSingle.returnValues[3]));
              setArkaneUrl("0xfd1dBD4114550A867cA46049C346B6cD452ec919/" + parseInt(receipt.events.TransferSingle.returnValues[3]));
              setTrsHash(receipt.transactionHash);
              setTriggerModal(true);
              resetForm();
            }).on("error", error => {
              console.log(error);
              setErr("Transaction failed");
            }); // console.log(tx)

            setIsLoading(false);
            (0,external_react_toastify_namespaceObject.toast)("NFT Minted", {
              type: "success"
            });
          });
        } else {
          validateName();
          validateDesc();
          setIsLoading(false);

          if (!signerAddress) {
            setErr("Connect to wallet first");
          } else {
            setErr("Enter all mandatory fields");
          }
        }
      } // If Arkane mint directly
      else {
          if (nftType === "ERC721") {
            let nonce = await contract_721.methods.getNonce(signerAddress).call();
            let functionSignature = contract_721.methods.mintToCaller(signerAddress, "https://gateway.pinata.cloud/ipfs/" + ipfsHash).encodeABI();
            let message = {};
            message.nonce = parseInt(nonce);
            message.from = signerAddress;
            message.functionSignature = functionSignature;
            const dataToSign = JSON.stringify({
              types: {
                EIP712Domain: domainType,
                MetaTransaction: metaTransactionType
              },
              domain: domainData721,
              primaryType: "MetaTransaction",
              message: message
            });
            const rpc = {
              jsonrpc: "2.0",
              id: 999999999999,
              method: "eth_signTypedData_v4",
              params: [signerAddress, dataToSign]
            };
            const txnhash = await ConnectWallet.web3.currentProvider.sendAsync(rpc, async function (error, response) {
              //console.log(response)
              let {
                r,
                s,
                v
              } = (0,ConnectWallet.getSignatureParameters)(response.result);
              const tx = await contract_721.methods.executeMetaTransaction(signerAddress, functionSignature, r, s, v).send({
                from: signerAddress
              }).once("confirmation", (confirmationNumber, receipt) => {
                //console.log(confirmationNumber)
                //console.log(receipt)
                console.log("0x72B6Dc1003E154ac71c76D3795A3829CfD5e33b9/" + parseInt(receipt.events.Transfer.raw.topics[3]));
                setArkaneUrl("0x72B6Dc1003E154ac71c76D3795A3829CfD5e33b9/" + parseInt(receipt.events.Transfer.raw.topics[3]));
                setTrsHash(receipt.transactionHash);
                setTriggerModal(true);
                resetForm();
              }).on("error", error => {
                console.log(error);
                setErr("Transaction failed");
              }); //console.log(tx)

              setIsLoading(false);
              (0,external_react_toastify_namespaceObject.toast)("NFT Minted", {
                type: "success"
              });
            });
          } else if (nftType === "ERC1155") {
            contract_1155.handleRevert = true; // https://web3js.readthedocs.io/en/v1.3.4/web3-eth.html#handlerevert

            let nonce = await contract_1155.methods.getNonce(signerAddress).call();
            let functionSignature = contract_1155.methods.mintTocaller(signerAddress, ercTwoNum, encodedParams, ipfsHash).encodeABI();
            let message = {};
            message.nonce = parseInt(nonce);
            message.from = signerAddress;
            message.functionSignature = functionSignature;
            const dataToSign = JSON.stringify({
              types: {
                EIP712Domain: domainType,
                MetaTransaction: metaTransactionType
              },
              domain: domainData1155,
              primaryType: "MetaTransaction",
              message: message
            });
            const rpc = {
              jsonrpc: "2.0",
              id: 999999999999,
              method: "eth_signTypedData_v4",
              params: [signerAddress, dataToSign]
            };
            const txnhash = ConnectWallet.web3.currentProvider.sendAsync(rpc, async function (error, response) {
              console.log(response);
              let {
                r,
                s,
                v
              } = (0,ConnectWallet.getSignatureParameters)(response.result);
              const tx = contract_1155.methods.executeMetaTransaction(signerAddress, functionSignature, r, s, v).send({
                from: signerAddress
              }).once("confirmation", (confirmationNumber, receipt) => {
                //console.log(confirmationNumber)
                //console.log(receipt)
                console.log("0xfd1dBD4114550A867cA46049C346B6cD452ec919/" + parseInt(receipt.events.TransferSingle.returnValues[3]));
                setArkaneUrl("0xfd1dBD4114550A867cA46049C346B6cD452ec919/" + parseInt(receipt.events.TransferSingle.returnValues[3]));
                setTrsHash(receipt.transactionHash);
                setTriggerModal(true);
                resetForm();
              }).on("error", error => {
                console.log(error);
                setErr("Transaction failed");
              }); // console.log(tx)

              setIsLoading(false);
              (0,external_react_toastify_namespaceObject.toast)("NFT Minted", {
                type: "success"
              });
            });
          } else {
            validateName();
            validateDesc();
            setIsLoading(false);

            if (!signerAddress) {
              setErr("Connect to wallet first");
            } else {
              setErr("Enter all mandatory fields");
            }
          }
        }
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.formSection,
    children: /*#__PURE__*/jsx_runtime_.jsx(core_.Container, {
      className: classes.container,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.formContainer,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "form-title",
          children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: "Mint your NFT"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          noValidate: true,
          autoComplete: "off",
          onSubmit: onSubmit,
          className: classes.form,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
            container: true,
            spacing: 3,
            children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
              item: true,
              xs: 12,
              md: 6,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.uploadSection,
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  className: classes.label,
                  htmlFor: "upload-file",
                  children: "Upload"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: classes.drag,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                    accept: "audio/*, video/*, image/*, .html, .pdf",
                    id: "upload-file",
                    onChange: handleFile,
                    type: "file",
                    hidden: true
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "upload-file",
                      children: "Browse file"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "Supports JPG, PNG and MP4 videos. Max file size : 10MB."
                  }), errors.file && /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "imgErr",
                    children: errors.file
                  })]
                }), imgLoading && /*#__PURE__*/jsx_runtime_.jsx(core_.CircularProgress, {
                  className: classes.imgProgress
                }), imgSrc && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: classes.imgPreviewContainer,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: imgSrc,
                    alt: "preview-img"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: file.name
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: file.size > 100000 ? `${file.size / 100000} MB` : file.size > 1000 ? `${file.size / 1000} KB` : `${file.size} MB`
                    })]
                  })]
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
              item: true,
              xs: 12,
              md: 6,
              children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: classes.inputContainer,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "name",
                    children: "Title"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "text",
                    className: `${errors.name ? "inputErr" : ""}`,
                    value: name,
                    onChange: e => {
                      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
                        name: e.target.value
                      }));
                      setErr("");
                      setErrors(pS => _objectSpread(_objectSpread({}, pS), {}, {
                        name: ""
                      }));
                    },
                    onBlur: validateName,
                    required: true,
                    id: "name"
                  }), errors.name && /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: classes.inputErrMsg,
                    children: errors.name
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: classes.inputContainer,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "description",
                    children: "Description"
                  }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                    type: "text",
                    value: desc,
                    className: `${errors.desc ? "inputErr" : ""}`,
                    style: {
                      minHeight: "100px"
                    },
                    onChange: e => {
                      setErrors(pS => _objectSpread(_objectSpread({}, pS), {}, {
                        desc: ""
                      }));
                      setErr("");
                      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
                        desc: e.target.value
                      }));
                    },
                    onBlur: validateDesc,
                    required: true,
                    id: "description"
                  }), errors.desc && /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: classes.inputErrMsg,
                    children: errors.desc
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
                container: true,
                spacing: 2,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
                  item: true,
                  xs: 12,
                  sm: 6,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: classes.label,
                    children: "NFT Type"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: classes.nftBtnContainer,
                    children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
                      className: classes.nftBtn,
                      disabled: nftType === "ERC721" ? true : false,
                      onClick: () => {
                        setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
                          ercTwoNum: 1
                        }));
                        setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
                          nftType: "ERC721"
                        }));
                      },
                      children: "ERC721"
                    }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
                      className: classes.nftBtn,
                      disabled: nftType === "ERC1155" ? true : false,
                      onClick: () => setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
                        nftType: "ERC1155"
                      })),
                      children: "ERC1155"
                    })]
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
                  item: true,
                  xs: 12,
                  sm: 6,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: classes.inputContainer,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "quantity",
                      children: "Quantity"
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                      type: "number",
                      placeholder: "1",
                      disabled: nftType === "ERC1155" ? false : true,
                      value: ercTwoNum,
                      onChange: e => setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
                        ercTwoNum: e.target.value
                      })),
                      id: "quantity"
                    })]
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: classes.inputContainer,
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                    htmlFor: "sm-url",
                    children: ["Social Media URL ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: "(optional)"
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "url",
                    placeholder: "https://twitter.com/example",
                    value: surl,
                    pattern: "https?://.+",
                    onChange: e => setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
                      surl: e.target.value
                    })),
                    id: "sm-url"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: classes.note,
                children: ["Once your NFT is minted on the Polygon blockchain, you will not be able to edit or update any of its information.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "You agree that any information uploaded to the Polygon's NFT Minter will not contain material subject to copyright or other proprietary rights, unless you have necessary permission or are otherwise legally entitled to post the material."]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Button, {
                type: "submit",
                disabled: signerAddress && imgHash && !isLoading ? false : true,
                className: `${classes.btn} ${classes.filled} ${isLoading && classes.btnWithLoader}`,
                style: {
                  marginBottom: "30px"
                },
                children: [signerAddress ? isLoading ? "minting..." : "Mint NFT" : "Wallet not connected", isLoading && /*#__PURE__*/jsx_runtime_.jsx(core_.CircularProgress, {
                  className: `${classes.loading}`,
                  size: 24
                })]
              })]
            })]
          }), err && /*#__PURE__*/jsx_runtime_.jsx(UI_ErrorBox, {
            message: err
          })]
        })]
      })
    })
  });
};

const Form_useStyles = (0,makeStyles/* default */.Z)(theme => _objectSpread(_objectSpread(_objectSpread({}, theme.overrides.mui), theme.overrides.formStyle), {}, {
  formSection: {
    backgroundColor: "#F4F7F9",
    paddingBottom: "70px",
    ["@media (max-width:959px)"]: {
      paddingBottom: 0
    }
  },
  formContainer: {
    borderRadius: "16px",
    top: "-70px",
    filter: "drop-shadow(0px 2px 24px rgba(0, 0, 0, 0.1))",
    position: "relative",
    overflow: "hidden",
    "& .form-title": {
      padding: "0 26px",
      lineHeight: "70px",
      height: "70px",
      borderBottom: "1px solid #E8E8E8",
      backgroundColor: "#F9F9FE",
      fontSize: "18px",
      fontWeight: "600",
      "& h3": {
        margin: 0
      }
    }
  },
  form: {
    backgroundColor: "#ffffff",
    padding: "26px",
    width: "100%"
  },
  // file upload section
  uploadSection: {
    "& p": {
      fontSize: "12px",
      fontWeight: "600",
      color: "#61677e",
      textAlign: "left",
      margin: "0 0 20px 0"
    }
  },
  drag: {
    // height: 140px;
    borderRadius: "6px",
    border: "1px dashed #C7CBD9",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignTtems: "center",
    padding: "60px 10px",
    marginTop: "5px",
    "& p": {
      textAlign: "center",
      color: "#939bba",
      fontSize: "14px",
      fontWeight: "600",
      margin: "0",
      "& label": {
        color: "#8247e5",
        textDecoration: "underline",
        cursor: "pointer",
        "&:hover": {
          color: "#7533e2"
        }
      },
      "&.imgErr": {
        textAlign: "center",
        color: "#ff0000",
        fontSize: "12px",
        marginTop: "10px"
      }
    }
  },
  imgPreviewContainer: {
    width: "100%",
    display: "flex",
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "6px",
    border: "1px solid #c7cbd9",
    "& img": {
      height: "60px",
      width: "60px",
      objectFit: "cover",
      marginRight: "20px",
      borderRadius: "5px",
      border: "1px solid #c7cbd9"
    },
    "& p": {
      display: "flex",
      flexDirection: "column",
      margin: "0",
      wordBreak: "break-all",
      lineHeight: "normal",
      "& span": {
        "&:first-child": {
          fontWeight: "bold",
          marginBottom: "3px",
          fontSize: "15px"
        }
      }
    }
  },
  nftBtnContainer: {
    backgroundColor: "white",
    border: "1px solid #C7CBD9",
    display: "flex",
    padding: "5px",
    borderRadius: "5px",
    position: "relative",
    height: "50px",
    marginTop: "5px"
  },
  nftBtn: {
    height: "50px",
    width: "50%",
    height: "calc(50px - 12px)",
    borderRadius: "5px",
    border: "0",
    outline: "0",
    cursor: "pointer",
    fontWeight: "600",
    "&:first-child ": {
      marginRight: "5px"
    },
    "&:disabled": {
      backgroundColor: "#3E3B51",
      color: "white"
    },
    "&:enabled": {
      backgroundColor: "#F6F6FF"
    }
  },
  inputErrMsg: {
    position: "absolute",
    margin: 0,
    zIndex: 2,
    top: "40px",
    right: "15px",
    color: "red",
    fontWeight: "600"
  },
  label: {
    color: "#7533e2",
    fontSize: "14px",
    fontWeight: "bold",
    margin: 0
  },
  flex: {
    display: "flex",
    alignItems: "center",
    marginRight: "4px"
  },
  checkbox: {
    width: "22px",
    height: "22px",
    borderColor: "#C7CBD9",
    marginRight: "11px",
    "&:checked + label": {
      backgroundColor: "#3E3B51",
      color: "white",
      borderColor: "#3E3B51",
      "& .indicator": {
        borderColor: "#3E3B51",
        "& .icon": {
          color: "#1fb141"
        }
      }
    }
  },
  labelSmall: {
    fontSize: "14px",
    color: "#61677E",
    lineHeight: "21px",
    fontWeight: "600"
  },
  note: {
    fontSize: "12px",
    color: "#61677e",
    marginTop: "40px"
  },
  customLabel: {
    height: "42px",
    // borderRadius: '25px',
    borderRadius: "5px",
    backgroundColor: "white",
    border: "1px solid #C7CBD9",
    display: "flex",
    alignItems: "center",
    padding: "0 14px 0 10px",
    fontSize: "14px",
    cursor: "pointer",
    color: "#000",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#F6F6FF"
    },
    "& .indicator": {
      width: "26px",
      height: "26px",
      borderRadius: "13px",
      border: "1px solid #C7CBD9",
      marginRight: "10px",
      backgroundColor: "#fff",
      display: "flex",
      "& .icon": {
        color: "transparent"
      }
    }
  },
  imgProgress: {
    marginTop: "20px",
    margin: "auto",
    fontSize: "20px"
  }
}));
/* harmony default export */ var components_Form = (Form);
;// CONCATENATED MODULE: ./components/Hero.jsx



function Hero_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Hero_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Hero_ownKeys(Object(source), true).forEach(function (key) { Hero_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Hero_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Hero_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Hero = () => {
  const classes = Hero_useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.hero,
    children: /*#__PURE__*/jsx_runtime_.jsx(core_.Container, {
      className: classes.container,
      children: /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        container: true,
        spacing: 3,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
          item: true,
          xs: 12,
          sm: 8,
          style: {
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Typography, {
            variant: "h1",
            className: classes.title,
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "NFT"
            }), " Minter"]
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
            variant: "subtitle1",
            className: classes.text,
            children: "Mint NFT on polygon at speed of light!"
          })]
        })
      })
    })
  });
};

const Hero_useStyles = (0,makeStyles/* default */.Z)(theme => Hero_objectSpread(Hero_objectSpread({}, theme.overrides.mui), {}, {
  hero: {
    backgroundColor: "#7533E2",
    padding: "70px 0",
    position: "relative",
    overflow: "hidden",
    "&::after": {
      content: "' '",
      top: "-20px",
      left: 0,
      position: "absolute",
      height: "calc(100% + 50px)",
      width: "100%",
      backgroundImage: `url("/images/bg-art.png")`,
      backgroundSize: "78%",
      opacity: "0.15"
    } // ["@media (max-width:959px)"]: {
    //   paddingBottom: "120px",
    // },

  },
  title: {
    color: "white",
    marginBottom: "10px",
    "& span": {
      fontWeight: "700"
    }
  },
  text: {
    fontSize: "15px",
    fontWeight: "500",
    color: "#D8C4F7",
    lineHeight: "23px",
    marginBottom: '40px',
    ["@media (max-width:959px)"]: {
      marginBottom: "50px"
    }
  },
  graphicContainer: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  graphic: {
    width: "300px",
    ["@media (max-width:959px)"]: {
      width: "100%",
      float: "none"
    },
    ["@media (max-width:599px)"]: {
      display: "block",
      margin: "auto",
      width: "300px"
    },
    ["@media (max-width:340px)"]: {
      display: "block",
      margin: "auto",
      width: "100%"
    }
  }
}));
/* harmony default export */ var components_Hero = (Hero);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(7985);
;// CONCATENATED MODULE: ./components/UI/HexagonGraphic.jsx




const HexagonGraphic = ({
  color
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: "144",
    height: "160",
    viewBox: "0 0 144 160",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      filter: "url(#filter0_d)",
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M65 5.04145C69.3316 2.54059 74.6684 2.54059 79 5.04145L129.952 34.4586C134.284 36.9594 136.952 41.5812 136.952 46.5829V105.417C136.952 110.419 134.284 115.041 129.952 117.541L79 146.959C74.6684 149.459 69.3316 149.459 65 146.959L14.0481 117.541C9.71648 115.041 7.0481 110.419 7.0481 105.417V46.5829C7.0481 41.5812 9.71648 36.9594 14.0481 34.4585L65 5.04145Z",
        fill: "white"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M74 13.7017L124.952 43.1188C126.19 43.8333 126.952 45.1538 126.952 46.5829V105.417C126.952 106.846 126.19 108.167 124.952 108.881L74 138.298C72.7624 139.013 71.2376 139.013 70 138.298L19.0481 108.881C17.8105 108.167 17.0481 106.846 17.0481 105.417V46.5829C17.0481 45.1538 17.8105 43.8333 19.0481 43.1188L70 13.7017C71.2376 12.9872 72.7624 12.9872 74 13.7017Z",
        stroke: color,
        strokeWidth: "20"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("filter", {
        id: "filter0_d",
        x: "0.0480957",
        y: "0.165771",
        width: "143.904",
        height: "159.668",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [/*#__PURE__*/jsx_runtime_.jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), /*#__PURE__*/jsx_runtime_.jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        }), /*#__PURE__*/jsx_runtime_.jsx("feOffset", {
          dy: "4"
        }), /*#__PURE__*/jsx_runtime_.jsx("feGaussianBlur", {
          stdDeviation: "3.5"
        }), /*#__PURE__*/jsx_runtime_.jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        }), /*#__PURE__*/jsx_runtime_.jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow"
        }), /*#__PURE__*/jsx_runtime_.jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow",
          result: "shape"
        })]
      })
    })]
  });
};

/* harmony default export */ var UI_HexagonGraphic = (HexagonGraphic);
;// CONCATENATED MODULE: ./components/UI/ResultModal.jsx




function ResultModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ResultModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ResultModal_ownKeys(Object(source), true).forEach(function (key) { ResultModal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ResultModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ResultModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// There are three different outputs of Result Modal for Mapping Form, ETM Form and MTE Form.
// mapping, ethToMatic and maticToEth are the props to be passed.
 // material ui



 // images



const ResultModal = ({
  minter,
  triggerModal,
  setTriggerModal,
  data
}) => {
  const classes = ResultModal_useStyles();
  const {
    0: timeLeft,
    1: setTimeLeft
  } = (0,external_react_.useState)(90);
  const url = "https://explorer-mainnet.maticvigil.com/tx/";

  const closeModal = () => {
    setTriggerModal(false);
  };

  (0,external_react_.useEffect)(() => {
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);
  return /*#__PURE__*/jsx_runtime_.jsx(core_.Modal, {
    open: triggerModal,
    "aria-labelledby": "simple-modal-title",
    "aria-describedby": "simple-modal-description",
    className: classes.modalContainer,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.modal,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.closeModal,
        onClick: closeModal,
        children: /*#__PURE__*/jsx_runtime_.jsx(icons_.Close, {
          style: {
            fontSize: "16px"
          }
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.graphicSection,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "iconContainer",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/thumbs-up.png",
            alt: "thumb icon"
          }), /*#__PURE__*/jsx_runtime_.jsx(UI_HexagonGraphic, {
            color: "#1DBA2D"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.textSection,
        children: [minter && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: data.address === 'ok' ? 'We will review your NFT and list shortly' : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: ["Transaction hash:", " "]
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: `${url}${data.address}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: data.address
                })
              })]
            })
          }), data.arkaneUrl && timeLeft === 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: ["Wait ", timeLeft, " seconds for listing on Arkane"]
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              href: `https://arkane.market/inventory/MATIC/${data.arkaneUrl}`,
              target: "_blank",
              className: `${classes.btn} ${classes.filled}`,
              style: {
                margin: 'auto',
                display: 'flex'
              },
              children: "View on Arkane"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "credit",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: data.msg
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            children: ["3d icon from", " ", /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://icons8.com/",
              target: "_blank",
              rel: "noreferrer",
              children: "Icons8"
            })]
          })]
        })]
      })]
    })
  });
};

const ResultModal_useStyles = (0,makeStyles/* default */.Z)(theme => ResultModal_objectSpread(ResultModal_objectSpread({}, theme.overrides.modalStyle), {}, {
  purple: {
    color: "#7533E2"
  }
}));
/* harmony default export */ var UI_ResultModal = (ResultModal);
;// CONCATENATED MODULE: ./pages/index.js



 // components





const Index = ({
  signerAddress,
  contract_1155,
  contract_721,
  providerMetamask
}) => {
  const {
    0: trsHash,
    1: setTrsHash
  } = (0,external_react_.useState)("");
  const {
    0: arkaneUrl,
    1: setArkaneUrl
  } = (0,external_react_.useState)("");
  const {
    0: triggerModal,
    1: setTriggerModal
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Hero, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Form, {
      signerAddress: signerAddress,
      contract_1155: contract_1155,
      contract_721: contract_721,
      setTrsHash: setTrsHash,
      setTriggerModal: setTriggerModal,
      setArkaneUrl: setArkaneUrl,
      providerMetamask: providerMetamask
    }), /*#__PURE__*/jsx_runtime_.jsx(UI_ResultModal, {
      minter: true,
      triggerModal: triggerModal,
      setTriggerModal: setTriggerModal,
      data: {
        address: trsHash,
        arkaneUrl: arkaneUrl
      }
    })]
  });
};

/* harmony default export */ var pages = (Index);

/***/ }),

/***/ 8819:
/***/ (function() {



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

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 4353:
/***/ (function(module) {

"use strict";
module.exports = require("form-data");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [120,584], function() { return __webpack_exec__(7447); });
module.exports = __webpack_exports__;

})();