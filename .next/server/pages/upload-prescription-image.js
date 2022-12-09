"use strict";
(() => {
var exports = {};
exports.id = 627;
exports.ids = [627];
exports.modules = {

/***/ 5388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7220);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6556);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constraint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9499);
/* harmony import */ var _constraint__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_constraint__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2703);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_AddAddress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5301);
/* harmony import */ var _components_GetDeliveryCost__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6045);
/* harmony import */ var _components_SelectAddress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3840);
















function UploadPrescriptionImage(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const { 0: prescriptionImage , 1: setPrescriptionImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: prescription , 1: setPrescription  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.prescription);
    const { 0: userAllAddress , 1: setUserAllAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.userAllAddress);
    const { 0: selectAddress , 1: setSelectAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.defaultAddress);
    const { 0: selectedCourier , 1: setSelectedCourier  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: selectedDeliveryCost , 1: setSelectedDeliveryCost  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: modalSelectAddress , 1: setModalSelectAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: modalSelectCourier , 1: setModalSelectCourier  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useDisclosure)();
    const { 0: prescriptionPost , 1: setPrescriptionPost  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        prescriptionImage: ""
    });
    const { 0: imageName , 1: setImageName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: imgSource , 1: setimgSource  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constraint__WEBPACK_IMPORTED_MODULE_8__.api_origin + `/public/prescriptionImage/default-prescription-image.png`);
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        RenderUserAddresses();
    }, []);
    const chooseAddress = (newAddress)=>{
        setSelectAddress(newAddress);
    };
    const RenderUserAddresses = async ()=>{
        try {
            const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)();
            if (!session) return {
                redirect: {
                    destination: "/login"
                }
            };
            const { user_token  } = session.user;
            const config = {
                headers: {
                    Authorization: `Bearer ${user_token}`
                }
            };
            const defaultAddress = await _src_config_api__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/addresses/userdefaultaddress`, config);
            setSelectAddress(defaultAddress.data.data);
        } catch (error) {
            console.log({
                error
            });
        }
    };
    const onFileChange = (event)=>{
        setPrescriptionImage(event.target.files[0]);
        setimgSource(URL.createObjectURL(event.target.files[0]));
        setImageName(event.target.files[0].name);
    };
    const renderCourier = ()=>{
        const getCourier = selectedDeliveryCost.split(",");
        const getSelectedCourier = `${selectedCourier.toUpperCase()}`;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
            children: getSelectedCourier
        });
    };
    const renderDeliveryCost = ()=>{
        const deliveryCost = selectedDeliveryCost.split(",");
        const getDeliveryCost = parseInt(deliveryCost[1]).toLocaleString("id");
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {
            fontWeight: 500,
            fontSize: 15,
            justify: "space-between",
            minWidth: 380,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {
                    color: "gray.600",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                            children: "Biaya Pengiriman :"
                        }),
                        ";",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                            children: selectedDeliveryCost && renderCourier()
                        }),
                        ";"
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {
                    fontWeight: 600,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                        children: [
                            "Rp ",
                            getDeliveryCost
                        ]
                    })
                })
            ]
        });
    };
    const createPrescripTransaction = async ()=>{
        try {
            const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)();
            const { user_token  } = session.user;
            const deliveryCost = selectedDeliveryCost.split(",");
            const getDeliveryCost = parseInt(deliveryCost[1]);
            const body = new FormData();
            const body2 = {
                address_id: selectAddress.address_id,
                courier: selectedCourier,
                deliveryCost: getDeliveryCost,
                imageName
            };
            body.append("prescriptionImage", prescriptionImage);
            const config = {
                headers: {
                    Authorization: `Bearer ${user_token}`
                }
            };
            const resCreateTransaction = await _src_config_api__WEBPACK_IMPORTED_MODULE_3__["default"].post("/transactions/uploadPrescriptionImage", body2, config);
            const imageNameInserted = resCreateTransaction.data.data.prescriptionImageName;
            const resPostPrescriptionImage = await _src_config_api__WEBPACK_IMPORTED_MODULE_3__["default"].post(`/transactions/createPrescriptionTransaction/${imageNameInserted}`, body, config);
            toast({
                description: resCreateTransaction.data.message,
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true
            });
            setTimeout(()=>{
                router.replace("/");
            }, 1000);
        } catch (error) {
            console.log({
                Error
            });
            toast({
                description: "Resep Dokter, Alamat, dan Kurir Tidak Boleh Kosong",
                position: "top",
                status: "error",
                duration: 3000,
                isClosable: true
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ChakraProvider, {
        theme: _components_theme__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            !prescription.resFetchTransactions[0] ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        width: "120vH",
                        boxShadow: "md",
                        marginTop: 4,
                        marginLeft: 101,
                        marginRight: 2,
                        rounded: "md",
                        padding: 6,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {
                                    marginBottom: 2,
                                    fontSize: "15",
                                    alignSelf: "start",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                                    color: "#B7B7B7",
                                                    paddingRight: 3,
                                                    children: "Beranda"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            src: "/uploadPrescriptionImage/next.png",
                                            width: 5,
                                            height: 9
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                            color: "#008DEB",
                                            paddingLeft: 0.5,
                                            children: "Unggah Resep"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                    alignSelf: "start",
                                    fontSize: "17",
                                    fontWeight: "600",
                                    children: "Unggah Resep Dokter"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            src: imgSource,
                                            width: 235,
                                            height: 235
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                            paddingLeft: "89",
                                            paddingTop: 1,
                                            fontSize: 12.5,
                                            pb: 1,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "file",
                                                onChange: onFileChange
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                                fontSize: "16",
                                                fontWeight: "500",
                                                marginTop: 3,
                                                children: "Cara Unggah Resep Dokter"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {
                                            paddingTop: 2,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                                    width: 220,
                                                    fontSize: 12,
                                                    textAlign: "center",
                                                    paddingRight: 10,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                            src: "/uploadPrescriptionImage/upload-prescription.png",
                                                            width: 60,
                                                            height: 60
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                                            paddingTop: 2,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                                                    fontWeight: 600,
                                                                    children: "1. Unggah Resep"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                                                    children: "Foto resep yang ditulis oleh dokter anda, kemudian unggah pada form di atas."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                                    width: 180,
                                                    fontSize: 12,
                                                    textAlign: "center",
                                                    paddingTop: 1.5,
                                                    paddingRight: 5,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                            src: "/uploadPrescriptionImage/waiting-for-validation.png",
                                                            width: 52,
                                                            height: 48
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                                            paddingTop: 3,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                                                fontWeight: 600,
                                                                children: "2. Menunggu Validasi"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                                            children: "Tim kami akan mengecek ketersediaan obat sesuai resep."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                                    width: 220,
                                                    fontSize: 12,
                                                    textAlign: "center",
                                                    paddingLeft: 5,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                            src: "/uploadPrescriptionImage/delivery.png",
                                                            width: 60,
                                                            height: 60
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                                            paddingTop: 2,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                                                    fontWeight: 600,
                                                                    children: "3. Lakukan Pembayaran"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                                                    children: "Segera lakukan pembayaran agar kami dapat memproses obat anda."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                                    width: 180,
                                                    fontSize: 12,
                                                    textAlign: "center",
                                                    paddingLeft: 8,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                            src: "/uploadPrescriptionImage/payment.png",
                                                            width: 64,
                                                            height: 64
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                                                    fontWeight: 600,
                                                                    children: "4. Obat Diantar"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                                                    children: "Kami akan segera mengirimkan obat yang anda pesan."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                        alignSelf: "start",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                width: "60vH",
                                boxShadow: "md",
                                marginTop: 4,
                                rounded: "md",
                                padding: 6,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                        fontWeight: 600,
                                        children: "Alamat Pengiriman"
                                    }),
                                    selectAddress ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                        align: "start",
                                        marginTop: 5,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                                fontWeight: 500,
                                                fontSize: 15,
                                                color: "gray.600",
                                                children: [
                                                    "Penerima: ",
                                                    selectAddress.recipient
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                                fontWeight: 500,
                                                fontSize: 15,
                                                color: "gray.600",
                                                children: selectAddress.addressDetail
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                                fontWeight: 500,
                                                fontSize: 15,
                                                color: "gray.600",
                                                children: [
                                                    selectAddress.city_name,
                                                    ", ",
                                                    selectAddress.province,
                                                    ",",
                                                    " ",
                                                    selectAddress.postalCode
                                                ]
                                            }),
                                            userAllAddress ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                                    marginTop: 3,
                                                    bgColor: "white",
                                                    _hover: "white",
                                                    size: "xxl",
                                                    variant: "solid",
                                                    color: "#1068A3",
                                                    fontSize: 13,
                                                    onClick: ()=>setModalSelectAddress(true),
                                                    children: [
                                                        "Pilih alamat lain",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SelectAddress__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                            isOpen: modalSelectAddress,
                                                            onClose: ()=>setModalSelectAddress(false),
                                                            userAllAddress: userAllAddress,
                                                            chooseAddress: chooseAddress,
                                                            RenderUserAddresses: RenderUserAddresses
                                                        })
                                                    ]
                                                })
                                            }) : null
                                        ]
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                        align: "start",
                                        marginTop: 5,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                                fontWeight: 500,
                                                fontSize: 15,
                                                color: "gray.600",
                                                children: "Belum ada alamat"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                                align: "start",
                                                paddingTop: 3,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                                    bgColor: "white",
                                                    _hover: "white",
                                                    size: "xxl",
                                                    variant: "solid",
                                                    color: "#1068A3",
                                                    fontSize: 13,
                                                    onClick: onOpen,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_11__.AddIcon, {
                                                            w: 2.5,
                                                            h: 2.5,
                                                            color: "#004776"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                                            paddingLeft: 1.5,
                                                            paddingTop: 0.3,
                                                            children: "Tambahkan Alamat Baru"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AddAddress__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                            isOpen: isOpen,
                                                            onClose: onClose,
                                                            RenderUserAddresses: RenderUserAddresses
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                width: "60vH",
                                boxShadow: "md",
                                rounded: "md",
                                padding: 6,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                        fontWeight: 600,
                                        children: "Metode Pengiriman"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {
                                        marginY: 6,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                            bgColor: "white",
                                            _hover: "white",
                                            size: "xxl",
                                            variant: "solid",
                                            color: "#1068A3",
                                            fontSize: 13,
                                            onClick: ()=>setModalSelectCourier(true),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                                    paddingTop: 0.3,
                                                    children: "Pilih Metode Pengiriman"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GetDeliveryCost__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    isOpen: modalSelectCourier,
                                                    onClose: ()=>setModalSelectCourier(false),
                                                    destination: selectAddress?.city_id,
                                                    setSelectedDeliveryCost: setSelectedDeliveryCost,
                                                    setSelectedCourier: setSelectedCourier
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                        fontWeight: 600,
                                        children: "Ringkasan Pembayaran"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {
                                        justifyContent: "space-between",
                                        marginTop: 4,
                                        marginBottom: 2,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                                children: selectedDeliveryCost && renderDeliveryCost()
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        src: "/profile/line.png",
                                        width: 400,
                                        height: 1.5
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                        align: "start",
                                        marginTop: "5",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                            fontWeight: 600,
                                            fontSize: 15,
                                            children: "Metode Pembayaran"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                        align: "start",
                                        marginTop: "2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
                                            fontWeight: 500,
                                            color: "gray.600",
                                            size: "sm",
                                            children: "Transfer Bank BCA"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                                        marginTop: 8,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                            fontSize: 13,
                                            color: "white",
                                            colorScheme: "messenger",
                                            fontWeight: 500,
                                            width: 250,
                                            onClick: createPrescripTransaction,
                                            children: "Lanjutkan Pembayaran"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                marginTop: "18vH",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                        src: "/uploadPrescriptionImage/validation.png",
                        width: 250,
                        height: 250
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                            marginTop: 2,
                            fontSize: 17,
                            fontWeight: 500,
                            children: "Resep sedang divalidasi"
                        })
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    try {
        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)({
            req: context.req
        });
        if (!session) return {
            redirect: {
                destination: "/login"
            }
        };
        const { user_token  } = session.user;
        const config = {
            headers: {
                Authorization: `Bearer ${user_token}`
            }
        };
        const user_id = session.user.user.user_id;
        const userAllAddress = await _src_config_api__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/addresses/useraddresslists`, config);
        const defaultAddress = await _src_config_api__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/addresses/userdefaultaddress`, config);
        const prescription = await _src_config_api__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/transactions/userPrescription`, config);
        return {
            props: {
                user_id,
                user_token,
                userAllAddress: userAllAddress.data.data,
                defaultAddress: defaultAddress.data.data,
                prescription: prescription.data.data,
                session
            }
        };
    } catch (error) {
        console.log({
            error
        });
        return {
            props: {}
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadPrescriptionImage);


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [907,675,952,664,220,346,479,815], () => (__webpack_exec__(5388)));
module.exports = __webpack_exports__;

})();