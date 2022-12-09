"use strict";
exports.id = 815;
exports.ids = [815];
exports.modules = {

/***/ 6045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_config_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7220);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);




function GetDeliveryCost(props) {
    const { isOpen , onClose , setSelectedDeliveryCost , setSelectedCourier  } = props;
    const { 0: choosedCourier , 1: setChoosedCourier  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: choosedService , 1: setChoosedService  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: deliveryCost , 1: setDeliveryCost  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useToast)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (choosedCourier) {
            getDeliveryCost();
        }
    }, [
        choosedCourier
    ]);
    const onHandleChangeCourier = (e)=>{
        setChoosedCourier(e.target.value);
    };
    const onHandleChangeService = (e)=>{
        setChoosedService(e.target.value);
    };
    const getDeliveryCost = async ()=>{
        try {
            const origin = "153";
            const destination = props.destination;
            const weight = 1000;
            const courier = choosedCourier;
            const resGetDeliveryCost = await _src_config_api__WEBPACK_IMPORTED_MODULE_2__["default"].get(`rajaongkir/ongkos/${origin}/${destination}/${weight}/${courier}`);
            setDeliveryCost(resGetDeliveryCost.data.rajaongkir.results[0].costs);
        } catch (error) {
            console.log(error.message);
        }
    };
    const renderDeliveryCost = ()=>{
        return deliveryCost.map((deliveryCost)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: `${deliveryCost.service},${deliveryCost.cost[0].value}`,
                children: `${deliveryCost.description} (${deliveryCost.service}), Biaya Pengiriman: ${deliveryCost.cost[0].value}`
            }, deliveryCost.service));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Modal, {
        isOpen: isOpen,
        onClose: onClose,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalContent, {
                backgroundColor: "white",
                padding: 5,
                maxWidth: 600,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalHeader, {
                        fontWeight: 600,
                        fontSize: 19,
                        children: "Pilih Jenis Pengiriman"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalCloseButton, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {
                            align: "start",
                            fontSize: 15,
                            fontWeight: 500,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {
                                                fontSize: "sm",
                                                children: "Kurir Pengiriman"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                                _focusVisible: true,
                                                name: "courier",
                                                fontSize: {
                                                    base: "13",
                                                    md: "14"
                                                },
                                                fontWeight: 400,
                                                placeholder: "Pilih Kurir",
                                                variant: "filled",
                                                width: 510,
                                                onChange: onHandleChangeCourier,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "jne",
                                                        children: "JNE"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "tiki",
                                                        children: "TIKI"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "pos",
                                                        children: "POS Indonesia"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {
                                    paddingTop: 3,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {
                                                fontSize: "sm",
                                                children: "Jenis Pengiriman"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                                _focusVisible: true,
                                                name: "deliveryCost",
                                                fontSize: 14,
                                                fontWeight: 400,
                                                placeholder: "Pilih Jenis Pengiriman",
                                                variant: "filled",
                                                width: 510,
                                                onChange: onHandleChangeService,
                                                children: renderDeliveryCost()
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalFooter, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                            height: 9,
                            fontSize: 15,
                            fontWeight: 500,
                            colorScheme: "messenger",
                            onClick: ()=>{
                                setSelectedCourier(choosedCourier);
                                setSelectedDeliveryCost(choosedService);
                                toast({
                                    description: "Select Delivery Method Success",
                                    position: "top",
                                    status: "success",
                                    duration: 3000,
                                    isClosable: true
                                });
                                onClose();
                            },
                            children: "Submit"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetDeliveryCost);


/***/ }),

/***/ 3840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7220);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _EditAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5573);







function SelectAddress(props) {
    const { isOpen , onClose , userAllAddress , chooseAddress  } = props;
    const { 0: addresses , 1: setAddresses  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(userAllAddress);
    const { 0: modalEdit , 1: setModalEdit  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: selectedAddressId , 1: setSelectedAddressId  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const { 0: selectedAddressDetail , 1: setSelectedAddressDetail  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const { 0: selectedRecipient , 1: setSelectedRecipient  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const { 0: selectedPostalCode , 1: setSelectedPostalCode  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        RenderUserAddresses();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{}, [
        selectedAddressId,
        selectedAddressDetail,
        selectedRecipient,
        selectedPostalCode, 
    ]);
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
            const addressRes = await _src_config_api__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/addresses/useraddresslists`, config);
            setAddresses(addressRes.data.data);
        } catch (error) {
            console.log({
                error
            });
        }
    };
    const renderAddresses = (onClose)=>{
        return addresses.map((address)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.HStack, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
                        height: "auto",
                        width: "45",
                        bgColor: "white",
                        _hover: "white",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                            paddingY: 2,
                            paddingLeft: 2,
                            border: "2px",
                            borderColor: "gray.300",
                            borderRadius: "md",
                            width: 390,
                            onClick: ()=>{
                                chooseAddress(address);
                                onClose();
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.HStack, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {
                                    align: "start",
                                    fontWeight: 500,
                                    fontSize: 13,
                                    color: "gray.600",
                                    width: 320,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                                            children: [
                                                "Penerima: ",
                                                address.recipient
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                                            children: address.addressDetail
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                                            children: [
                                                address.city_name,
                                                ", ",
                                                address.province,
                                                ", ",
                                                address.postalCode
                                            ]
                                        })
                                    ]
                                })
                            })
                        }, address.address_id)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
                        height: 4,
                        width: 4,
                        colorScheme: "white",
                        variant: "solid",
                        size: "xxs",
                        onClick: ()=>{
                            setSelectedAddressId(address.address_id);
                            setSelectedAddressDetail(address.addressDetail);
                            setSelectedRecipient(address.recipient);
                            setSelectedPostalCode(address.postalCode);
                            setModalEdit(true);
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.EditIcon, {
                                w: 4,
                                h: 4,
                                color: "#004776",
                                marginRight: 6
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EditAddress__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                isOpen: modalEdit,
                                onClose: ()=>setModalEdit(false),
                                address_id: selectedAddressId,
                                editAddressDetail: selectedAddressDetail,
                                editRecipient: selectedRecipient,
                                editPostalCode: selectedPostalCode,
                                RenderUserAddresses: RenderUserAddresses
                            })
                        ]
                    })
                ]
            }, address.address_id));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Modal, {
        isOpen: isOpen,
        onClose: onClose,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalContent, {
                backgroundColor: "white",
                paddingTop: {
                    md: "4"
                },
                paddingBottom: {
                    md: "9"
                },
                paddingX: {
                    md: "5"
                },
                maxWidth: 500,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalHeader, {
                        fontWeight: 600,
                        fontSize: {
                            base: "16",
                            md: "19"
                        },
                        children: "Pilih Alamat"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalCloseButton, {
                        margin: 5
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalBody, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {
                            children: renderAddresses(onClose)
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectAddress);


/***/ })

};
;