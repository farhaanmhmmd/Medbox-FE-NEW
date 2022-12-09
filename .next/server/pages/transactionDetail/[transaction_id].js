"use strict";
(() => {
var exports = {};
exports.id = 843;
exports.ids = [843];
exports.modules = {

/***/ 7897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _transaction_id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./components/Navbar/index.js
var Navbar = __webpack_require__(6556);
// EXTERNAL MODULE: ./src/config/api.js
var api = __webpack_require__(7220);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-auth/react"
var external_next_auth_react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./constraint/index.js
var constraint = __webpack_require__(9499);
;// CONCATENATED MODULE: ./components/TransDetailCard/index.js





function TransDetailCard(props) {
    // console.log(props)
    const { product , quantity , productPrice , fetchCarts , productName , productImage , status , city_name ,  } = props;
    // console.log(name)
    //   const [quantityCart, setQuantityCart] = useState(quantity);
    // const rawStatus = status.split("_")
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center h-[20vh] w-[100%] my-[3vh] rounded-[1vw] shadow-[0px_6px_20px_0px_rgba(0,28,47,0.05)]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-[11vh] w-[11vh] bg-black ml-[2vw]",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    unoptimized: true,
                    alt: "resep-logo",
                    width: 1,
                    height: 1,
                    layout: "responsive",
                    src: constraint.api_origin + productImage,
                    loader: ()=>{
                        return productImage;
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col w-[40%] ml-[2vw]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: productName
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            quantity,
                            " Buah"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "Rp. ",
                        productPrice.toLocaleString("id")
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/transactionDetail/[transaction_id].js










function TransactionDetails(props) {
    const router = (0,router_.useRouter)();
    const { transaction_details , transactions , user_id  } = props;
    const { 0: transac , 1: setTransac  } = (0,external_react_.useState)(transaction_details.resFetchTransactionDetails);
    const { 0: trans , 1: setTrans  } = (0,external_react_.useState)(transactions.resFetchTransactions);
    const { 0: transByAddress , 1: setTransByAddress  } = (0,external_react_.useState)(transactions.resFetchAddress);
    const { 0: payment , 1: setPayment  } = (0,external_react_.useState)({});
    const onFileChange = (event)=>{
        setPayment(event.target.files[0]);
    };
    const toast = (0,react_.useToast)();
    let penerima;
    let jalan;
    let kodePos;
    let provinsi;
    let kota;
    transByAddress.forEach(async (data)=>{
        penerima = data.recipient;
        jalan = data.addressDetail;
        kodePos = data.postalCode;
        provinsi = data.province;
        kota = data.city_name;
    });
    const onSavePayment = async ()=>{
        try {
            const session = await (0,external_next_auth_react_.getSession)();
            const { user_token  } = session.user;
            const body = new FormData();
            body.append("paymentProof", payment);
            const transaction_id = trans.transaction_id;
            const bods = {
                transStatus: "awaiting_payment_confirmation",
                trans
            };
            console.log(bods);
            const config = {
                headers: {
                    Authorization: `Bearer ${user_token}`
                }
            };
            const res = await api["default"].patch(`/transactions/paymentProof/${transaction_id}`, body, config);
            const res2 = await api["default"].patch("/transactions/patchTransaction", bods, config);
            setTrans({
                ...trans,
                status: "awaiting_payment_confirmation"
            });
            toast({
                description: res.data.message,
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true
            });
            setTimeout(()=>{
                router.replace(`/transaction/${user_id}`);
            }, 1000);
        } catch (error) {
            console.log({
                error
            });
            toast({
                description: "Bukti Pembayaran Belum Dipilih",
                position: "top",
                status: "error",
                duration: 3000,
                isClosable: true
            });
        }
    };
    const onCancelClick = async ()=>{
        try {
            const transaction_id = trans.transaction_id;
            const res = await api["default"].patch(`/transactions/cancelTransaction/${transaction_id}`);
            setTrans({
                ...trans,
                status: "order_cancelled"
            });
            alert(res.data.message);
        } catch (error) {
            console.log({
                Error
            });
            alert(error.response?.data.message);
        }
    };
    const onConfirmClick = async ()=>{
        try {
            const transaction_id = trans.transaction_id;
            const res = await api["default"].patch(`/transactions/confirmTransaction/${transaction_id}`);
            setTrans({
                ...trans,
                status: "order_confirmed"
            });
            alert(res.data.message);
        } catch (error) {
            console.log({
                Error
            });
            alert(error.response?.data.message);
        }
    };
    function mappedTransactionDetails() {
        return transac.map((transaction, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(TransDetailCard, {
                productName: transaction.product.productName,
                productImage: transaction.product.productImage,
                productPrice: transaction.product.productPrice,
                quantity: transaction.quantity,
                props: props
            }, transaction.transaction_details_id);
        });
    }
    const grandTotal = trans.totalPrice + trans.deliveryCost;
    const rawStatus = trans.status.split("_");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-[100vw] h-[100vh]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-[100%] h-[100%] flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-[50%]",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-[1rem] font-[500] ml-3",
                                    children: "Alamat Lengkap"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Nama Pembeli : ",
                                        penerima
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Alamat Pembeli : ",
                                        jalan
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Provinsi : ",
                                        provinsi
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Kota: ",
                                        kota
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Kode Pos : ",
                                        kodePos
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-[1rem] font-[500] ml-3",
                                    children: "Daftar Pesanan"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: mappedTransactionDetails()
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "border-l-[1px] mt-[2vh] border-solid border-gray h-[100%]"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-[50%] ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "w-[30%] ml-3 mt-3 text-[1rem] font-[500]",
                                children: "Ringkasan Pembayaran"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "mt-[5vh] ml-[10%] text-[1rem] font-[500]",
                                children: [
                                    "Metode Pengiriman: ",
                                    trans.courier
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "mt-[5vh] ml-[10%] text-[1rem] font-[500]",
                                children: [
                                    "Sub Total: Rp. ",
                                    trans.totalPrice.toLocaleString("id")
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "mt-[5vh] ml-[10%] text-[1rem] font-[500]",
                                children: [
                                    "Delivery Cost: Rp. ",
                                    trans.deliveryCost.toLocaleString("id")
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "mt-[5vh] ml-[10%] text-[1rem] font-[500]",
                                children: [
                                    "Total Harga: Rp. ",
                                    grandTotal.toLocaleString("id")
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mt-[5vh] ml-[10%] text-[1rem] font-[500]",
                                children: "Metode Pembayaran: Transfer Bank BCA"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                                align: "start",
                                marginTop: 6,
                                marginBottom: 6,
                                marginLeft: 16,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/profile/line.png",
                                    width: 430,
                                    height: 2
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: " ml-[10%] text-[1rem] font-[500]",
                                children: [
                                    "Status Pembayaran: ",
                                    rawStatus.join(" ")
                                ]
                            }),
                            trans.status == "awaiting_payment" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                align: "start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                                        marginBottom: 3,
                                        marginTop: 8,
                                        marginLeft: 32,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "file",
                                            onChange: onFileChange
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                                        paddingLeft: 28,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                            onClick: onSavePayment,
                                            colorScheme: "linkedin",
                                            children: "Unggah Bukti Pembayaran"
                                        })
                                    })
                                ]
                            }) : null,
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                                align: "start",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                    marginBottom: 3,
                                    marginTop: 8,
                                    marginLeft: 32,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                            variant: "outline",
                                            colorScheme: "green",
                                            onClick: onConfirmClick,
                                            children: "Konfirmasi Penerimaan"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                            variant: "outline",
                                            colorScheme: "red",
                                            onClick: onCancelClick,
                                            children: "Batalkan Pesanan"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    try {
        const session = await (0,external_next_auth_react_.getSession)({
            req: context.req
        });
        if (!session) return {
            redirect: {
                destination: "/login"
            }
        };
        const { user_token  } = session.user;
        const { user_id  } = session.user.user;
        const config = {
            headers: {
                Authorization: `Bearer ${user_token}`
            }
        };
        const { transaction_id  } = context.params;
        const resGetTransactionDetail = await api["default"].get(`/transactions/getDetails/${transaction_id}`, config);
        const resgetTransactionById = await api["default"].get(`/transactions/transById/${transaction_id}`, config);
        return {
            props: {
                user_id,
                transaction_details: resGetTransactionDetail.data.data,
                transactions: resgetTransactionById.data.data
            }
        };
    } catch (error) {
        const { message  } = error;
        return {
            props: {
                message
            }
        };
    }
}
/* harmony default export */ const _transaction_id_ = (TransactionDetails);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [907,675,952,664,220,346], () => (__webpack_exec__(7897)));
module.exports = __webpack_exports__;

})();