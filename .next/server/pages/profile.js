"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 3778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ profile),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./src/config/api.js
var api = __webpack_require__(7220);
// EXTERNAL MODULE: ./components/Navbar/index.js
var Navbar = __webpack_require__(6556);
// EXTERNAL MODULE: external "@chakra-ui/react"
var external_chakra_ui_react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./constraint/index.js
var constraint = __webpack_require__(9499);
// EXTERNAL MODULE: ./components/theme/index.js
var theme = __webpack_require__(2703);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: ./components/AddAddress/index.js
var AddAddress = __webpack_require__(5301);
// EXTERNAL MODULE: ./components/EditAddress/index.js
var EditAddress = __webpack_require__(5573);
;// CONCATENATED MODULE: ./components/deleteAddress/index.js



function DeleteAddress(props) {
    const { isOpen , onClose , address_id , RenderUserAddresses  } = props;
    const toast = (0,external_chakra_ui_react_.useToast)();
    async function onDeleteClick() {
        try {
            const resDeleteAddress = await api["default"]["delete"](`/addresses/${address_id}`);
            toast({
                description: resDeleteAddress.data.message,
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true
            });
            RenderUserAddresses();
        } catch (error) {
            console.log({
                error
            });
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Modal, {
        isOpen: isOpen,
        onClose: onClose,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.ModalOverlay, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.ModalContent, {
                backgroundColor: "white",
                paddingTop: 4,
                paddingBottom: 9,
                paddingRight: 5,
                maxWidth: 350,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.ModalHeader, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                            fontWeight: 600,
                            fontSize: 16,
                            paddingLeft: 9,
                            children: "Hapus Alamat?"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.ModalCloseButton, {
                        margin: 5
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.ModalBody, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.HStack, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                                    paddingLeft: 5,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                                            colorScheme: "red",
                                            variant: "outline",
                                            fontSize: 16,
                                            fontWeight: 500,
                                            width: 105,
                                            marginRight: 2,
                                            onClick: ()=>{
                                                onClose();
                                            },
                                            children: "Tidak"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                                            colorScheme: "green",
                                            variant: "outline",
                                            fontSize: 16,
                                            fontWeight: 500,
                                            width: 105,
                                            onClick: ()=>{
                                                onDeleteClick(), onClose();
                                            },
                                            children: "Ya"
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const deleteAddress = (DeleteAddress);

;// CONCATENATED MODULE: ./pages/profile/index.js















function Profile(props) {
    const { 0: user , 1: setUser  } = (0,external_react_.useState)(props.user);
    const { 0: addresses , 1: setAddresses  } = (0,external_react_.useState)(props.addresses);
    const { 0: imgSource , 1: setImgSource  } = (0,external_react_.useState)(constraint.api_origin + props.user.avatar);
    const { isOpen , onOpen , onClose  } = (0,external_chakra_ui_react_.useDisclosure)();
    const { 0: modalEdit , 1: setModalEdit  } = (0,external_react_.useState)(false);
    const { 0: modalDelete , 1: setModalDelete  } = (0,external_react_.useState)(false);
    const { 0: selectedAddressId , 1: setSelectedAddressId  } = (0,external_react_.useState)("");
    const { 0: selectedAddressDetail , 1: setSelectedAddressDetail  } = (0,external_react_.useState)("");
    const { 0: selectedRecipient , 1: setSelectedRecipient  } = (0,external_react_.useState)("");
    const { 0: selectedPostalCode , 1: setSelectedPostalCode  } = (0,external_react_.useState)("");
    const toast = (0,external_chakra_ui_react_.useToast)();
    const { user_id , name , email , gender , birthDate , phoneNumber  } = user;
    (0,external_react_.useEffect)(()=>{
        RenderUserAddresses();
    }, []);
    (0,external_react_.useEffect)(()=>{}, [
        selectedAddressId,
        selectedAddressDetail,
        selectedRecipient,
        selectedPostalCode, 
    ]);
    const RenderUserAddresses = async ()=>{
        try {
            const session = await (0,react_.getSession)();
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
            const addressRes = await api["default"].get(`/addresses/useraddresslists`, config);
            setAddresses(addressRes.data.data);
        } catch (error) {
            console.log({
                error
            });
        }
    };
    async function onSetDefaultAddress(address_id) {
        try {
            const resSetDefaultAddress = await api["default"].patch(`/addresses/setdefault/${address_id}`);
            toast({
                description: resSetDefaultAddress.data.message,
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true
            });
            RenderUserAddresses();
        } catch (error) {
            console.log({
                error
            });
        }
    }
    const renderAddresses = ()=>{
        return addresses.map((address)=>/*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Box, {
                paddingY: 2,
                paddingLeft: 2,
                border: "2px",
                borderColor: "gray.300",
                borderRadius: "md",
                width: 320,
                children: address.isDefault ? /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.HStack, {
                    justifyContent: "space-between",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.VStack, {
                        align: "start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                fontWeight: 500,
                                fontSize: {
                                    base: "11",
                                    md: "12"
                                },
                                color: "red",
                                children: "Alamat Utama"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Text, {
                                fontWeight: 500,
                                fontSize: {
                                    base: "12",
                                    md: "13"
                                },
                                color: "gray.600",
                                children: [
                                    "Penerima: ",
                                    address.recipient
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                fontWeight: 500,
                                fontSize: {
                                    base: "12",
                                    md: "13"
                                },
                                color: "gray.600",
                                children: address.addressDetail
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Text, {
                                fontWeight: 500,
                                fontSize: {
                                    base: "12",
                                    md: "13"
                                },
                                color: "gray.600",
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
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.VStack, {
                            align: "start",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Text, {
                                    fontWeight: 500,
                                    fontSize: 13,
                                    color: "gray.600",
                                    children: [
                                        "Penerima: ",
                                        address.recipient
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                    fontWeight: 500,
                                    fontSize: 13,
                                    color: "gray.600",
                                    children: address.addressDetail
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Text, {
                                    fontWeight: 500,
                                    fontSize: 13,
                                    color: "gray.600",
                                    children: [
                                        address.city_name,
                                        ", ",
                                        address.province,
                                        ", ",
                                        address.postalCode
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.VStack, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                    paddingRight: "4",
                                    paddingBottom: "1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                                        height: 4,
                                        width: 4,
                                        colorScheme: "white",
                                        variant: "solid",
                                        size: "xxs",
                                        onClick: ()=>onSetDefaultAddress(address.address_id),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                fontSize: 11,
                                                fontWeight: "500",
                                                color: "red",
                                                children: "Set Default"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                                    paddingRight: 4,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Button, {
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
                                                /*#__PURE__*/ jsx_runtime_.jsx(icons_.EditIcon, {
                                                    w: 3.5,
                                                    h: 3.5,
                                                    color: "#004776"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(EditAddress/* default */.Z, {
                                                    isOpen: modalEdit,
                                                    onClose: ()=>setModalEdit(false),
                                                    address_id: selectedAddressId,
                                                    editAddressDetail: selectedAddressDetail,
                                                    editRecipient: selectedRecipient,
                                                    editPostalCode: selectedPostalCode,
                                                    RenderUserAddresses: RenderUserAddresses
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Button, {
                                            height: 4,
                                            width: 4,
                                            colorScheme: "white",
                                            variant: "solid",
                                            size: "xxs",
                                            onClick: ()=>{
                                                setSelectedAddressId(address.address_id);
                                                setModalDelete(true);
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(icons_.DeleteIcon, {
                                                    w: 3.5,
                                                    h: 3.5,
                                                    color: "#004776"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(deleteAddress, {
                                                    isOpen: modalDelete,
                                                    onClose: ()=>setModalDelete(false),
                                                    address_id: selectedAddressId,
                                                    RenderUserAddresses: RenderUserAddresses
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }, address.address_id));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.ChakraProvider, {
        theme: theme/* default */.Z,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Show, {
                above: "md",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Container, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Box, {
                    marginTop: {
                        md: "3"
                    },
                    marginBottom: {
                        md: "8"
                    },
                    boxShadow: {
                        md: "xl"
                    },
                    p: {
                        md: "12"
                    },
                    rounded: {
                        md: "md"
                    },
                    bg: "white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Show, {
                            below: "md",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                                marginTop: 9,
                                marginLeft: 4,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Link, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "/profile/close.png",
                                                width: 16,
                                                height: 16
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                        paddingBottom: 1,
                                        paddingLeft: 2,
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color: "#49454F",
                                        children: "Menu Utama"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                            marginTop: 4,
                            marginLeft: {
                                base: "2",
                                md: "77"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    unoptimized: true,
                                    className: "rounded-full",
                                    src: imgSource,
                                    loader: ()=>{
                                        return imgSource;
                                    },
                                    layout: "fixed",
                                    width: 70,
                                    height: 70
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.VStack, {
                                    align: "left",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                            fontSize: {
                                                base: "16",
                                                md: "17"
                                            },
                                            paddingLeft: 3,
                                            fontWeight: 600,
                                            color: "#262626",
                                            children: name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                            paddingLeft: 3,
                                            fontWeight: 500,
                                            color: "#878686",
                                            fontSize: {
                                                base: "12",
                                                md: "14"
                                            },
                                            children: phoneNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.VStack, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.HStack, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/profile/edit",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Link, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                                                colorScheme: "messenger",
                                                width: 327,
                                                marginTop: 4,
                                                color: "white",
                                                fontWeight: {
                                                    base: "500",
                                                    md: "600"
                                                },
                                                fontSize: 15,
                                                variant: {
                                                    base: "solid",
                                                    md: "outline"
                                                },
                                                children: "Ubah Profil"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Show, {
                                    above: "md",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.VStack, {
                                            paddingTop: 4,
                                            align: "start",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: "/profile/line.png",
                                                        width: 327,
                                                        height: 2
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.VStack, {
                                                    align: "start",
                                                    fontWeight: 700,
                                                    fontSize: 15,
                                                    paddingBlock: 3,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                                children: "Email"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                            paddingBottom: 2,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                                fontWeight: 500,
                                                                fontSize: 15,
                                                                color: "gray.600",
                                                                children: email
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                                children: "Gender"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                            paddingBottom: 2,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                                fontWeight: 500,
                                                                fontSize: 15,
                                                                color: "gray.600",
                                                                children: gender ? gender : "Belum dipilih"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                                children: "Tanggal Lahir"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                                fontWeight: 500,
                                                                fontSize: 15,
                                                                color: "gray.600",
                                                                children: birthDate ? birthDate.slice(0, 10) : "Belum dipilih"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: "/profile/line.png",
                                                        width: 327,
                                                        height: 2
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                    fontSize: 14,
                                                    fontWeight: 600,
                                                    paddingBlock: 3,
                                                    width: "full",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Box, {
                                                        width: 320,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.VStack, {
                                                            align: "start",
                                                            fontWeight: 700,
                                                            fontSize: 15,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.HStack, {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                                                children: "Alamat"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.HStack, {
                                                                            paddingBottom: 0.5,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Button, {
                                                                                height: 4,
                                                                                width: 1,
                                                                                colorScheme: "white",
                                                                                variant: "solid",
                                                                                size: "xs",
                                                                                onClick: onOpen,
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(icons_.AddIcon, {
                                                                                        w: 3,
                                                                                        h: 3,
                                                                                        color: "#004776"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(AddAddress/* default */.Z, {
                                                                                        isOpen: isOpen,
                                                                                        onClose: onClose,
                                                                                        RenderUserAddresses: RenderUserAddresses
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                addresses.length ? /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                                    children: renderAddresses()
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                                        fontWeight: 500,
                                                                        fontSize: 14.5,
                                                                        color: "gray.600",
                                                                        children: "Belum ada alamat"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: "/profile/line.png",
                                                        width: 327,
                                                        height: 2
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                    fontSize: 14,
                                                    fontWeight: 600,
                                                    paddingBlock: 3,
                                                    width: "full",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Box, {
                                                        width: "full",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/transaction/" + user_id,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Link, {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                                                                    width: "full",
                                                                    justifyContent: "space-between",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                                            children: "Riwayat Transaksi"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                            src: "/profile/go.png",
                                                                            width: 10,
                                                                            height: 10
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.VStack, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: "/profile/line.png",
                                                        width: 327,
                                                        height: 1.5
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/change-password",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Link, {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                                                                marginTop: 4,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(icons_.LockIcon, {
                                                                        w: 4,
                                                                        h: 4,
                                                                        color: "#004776"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                                        fontWeight: 600,
                                                                        fontSize: 14,
                                                                        paddingLeft: 2,
                                                                        children: "Ubah Password"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Show, {
                                    below: "md",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.VStack, {
                                        paddingTop: 3,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "/profile/line.png",
                                                width: 327,
                                                height: 2
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                                                alignSelf: "start",
                                                paddingTop: 1,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                        fontWeight: 600,
                                                        fontSize: 14,
                                                        children: "Alamat"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.HStack, {
                                                        paddingBottom: 0.5,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Button, {
                                                            height: 4,
                                                            width: 1,
                                                            colorScheme: "white",
                                                            variant: "solid",
                                                            size: "xs",
                                                            onClick: onOpen,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(icons_.AddIcon, {
                                                                    w: 3,
                                                                    h: 3,
                                                                    color: "#004776"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(AddAddress/* default */.Z, {
                                                                    isOpen: isOpen,
                                                                    onClose: onClose
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                paddingTop: 1,
                                                alignSelf: "start",
                                                paddingBottom: 5,
                                                children: addresses.length ? /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                    children: renderAddresses()
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                        fontWeight: 500,
                                                        fontSize: 13,
                                                        color: "#B7B7B7",
                                                        children: "Belum ada alamat"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "/profile/line.png",
                                                width: 327,
                                                height: 1.5
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                alignSelf: "start",
                                                paddingTop: 1,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    children: "Aktivitas Saya"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                alignSelf: "start",
                                                paddingTop: 1.5,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                    fontWeight: 500,
                                                    fontSize: 13,
                                                    color: "#B7B7B7",
                                                    children: "Belum ada transaksi"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                paddingTop: 3,
                                                paddingBottom: 5,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/profile/line.png",
                                                    width: 327,
                                                    height: 2
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                alignSelf: "start",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Link, {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                                                            marginBottom: 6,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                    src: "/profile/home.png",
                                                                    width: 16,
                                                                    height: 16
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                                    fontWeight: 600,
                                                                    fontSize: 14,
                                                                    paddingLeft: 2,
                                                                    children: "Beranda"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                alignSelf: "start",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/productCatalog/semuaObat=1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Link, {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                    src: "/profile/store.png",
                                                                    width: 14,
                                                                    height: 16
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                                    fontWeight: 600,
                                                                    fontSize: 14,
                                                                    paddingLeft: 2.5,
                                                                    children: "Toko Obat"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                alignSelf: "start",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/transaction/" + user_id,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Link, {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                                                            paddingTop: 6,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                    src: "/profile/history.png",
                                                                    width: 14,
                                                                    height: 16
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                                    fontWeight: 600,
                                                                    fontSize: 14,
                                                                    paddingLeft: 2.5,
                                                                    children: "Riwayat"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.VStack, {
                                                alignSelf: "start",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/change-password",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Link, {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                                                            paddingTop: 5,
                                                            marginBottom: 10,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(icons_.LockIcon, {
                                                                    w: 3.5,
                                                                    h: 3.5,
                                                                    color: "#004776"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                                    fontWeight: 600,
                                                                    fontSize: 14,
                                                                    paddingLeft: 2.5,
                                                                    paddingTop: 1,
                                                                    children: "Ubah Password"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
async function getServerSideProps(context) {
    try {
        const session = await (0,react_.getSession)({
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
        const userRes = await api["default"].get(`/users/profile/${user_id}`, config);
        const addressRes = await api["default"].get(`/addresses/useraddresslists`, config);
        return {
            props: {
                user: userRes.data.data.result,
                addresses: addressRes.data.data,
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
/* harmony default export */ const profile = (Profile);


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
var __webpack_exports__ = __webpack_require__.X(0, [907,675,952,664,220,346,479], () => (__webpack_exec__(3778)));
module.exports = __webpack_exports__;

})();