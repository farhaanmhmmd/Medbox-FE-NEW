"use strict";
(() => {
var exports = {};
exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ 7975:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6556);
/* harmony import */ var _src_config_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7220);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4563);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constraint_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9499);
/* harmony import */ var _constraint_index__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_constraint_index__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function ProductCatalog(props) {
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: showCategories , 1: setShowCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showSort , 1: setShowSort  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: productList , 1: setProductList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.products);
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: searchKeyword , 1: setSearchKeyword  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: verified , 1: setVerified  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { session  } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const { params  } = router.query;
        setSelected(params);
        setProductList(props.products);
        if (!params.includes("sort") && !params.includes("semuaObat")) {
            const splitParams = params.split("=");
            setSearchKeyword(splitParams[0]);
        }
    });
    function showCategoriesSwitch() {
        setShowCategories(!showCategories);
    }
    function showSortSwitch() {
        setShowSort(!showSort);
    }
    function productMap() {
        return productList?.map((product)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-[13%] mx-[2vw] mb-[-2vh] h-[35vh] flex-none flex flex-col items-center shadow-[0px_6px_20px_0px_rgba(0,28,47,0.05)]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[100%] my-[3vh] hover:cursor-pointer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                            unoptimized: true,
                            alt: "resep-logo",
                            layout: "responsive",
                            width: 100,
                            height: 70,
                            src: _constraint_index__WEBPACK_IMPORTED_MODULE_10__.api_origin + product.productImage,
                            loader: ()=>{
                                return _constraint_index__WEBPACK_IMPORTED_MODULE_10__.api_origin + product.productImage;
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-[12px] w-[100%]",
                        children: product.productName.length <= 25 ? product.productName : `${product.productName.slice(0, 20)}...`
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex bg-white w-[100%] items-center text-[#6E6E6E]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-[10px] font-[400]",
                                children: product.packageType
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-[10px] font-[400] mx-[1vw]",
                                children: "-"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-[10px] font-[400]",
                                children: [
                                    "Stok ",
                                    product.productStock
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "font-[500] text-[12px] w-[100%]",
                        children: [
                            "Rp.",
                            product.productPrice.toLocaleString("id")
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[100%]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            variant: "outline",
                            onClick: ()=>{
                                if (props.session?.user.user.isVerified) {
                                    router.replace(`/detailPage/${product.product_id}`);
                                } else {
                                    router.replace("/login");
                                }
                            },
                            colorScheme: "linkedin",
                            sx: {
                                width: "100%",
                                height: "5vh"
                            },
                            disabled: !props.session?.user.user.isVerified,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-[12px]",
                                children: "Tambah"
                            })
                        })
                    })
                ]
            }, product.product_id);
        });
    }
    function categoriesMap() {
        return props.categoriesLists.categories.map((category)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>{
                    router.replace(`/productCatalog/${category.category}=1`);
                    setCurrentPage(1);
                    setSearchKeyword("");
                },
                className: selected.includes(category.category) ? "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-[#008DEB] cursor-pointer bg-cyan-100" : "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",
                children: category.category.length <= 15 ? category.category : `${category.category.slice(0, 15)}...`
            }, category.category_id);
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-[100vw] h-[100vh] flex flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex w-[100%] h-[92%] items-end justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex w-[92%] h-[96%]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-cya-500 bg-white w-[14%] h-[100%] flex flex-col pr-[.5vw]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "border-b-[.1px] border-black p-[1vh]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: ()=>{
                                            router.replace(`/productCatalog/semuaObat=1`);
                                            setCurrentPage(1);
                                            setSearchKeyword("");
                                        },
                                        className: selected.includes("semuaObat") ? "text-[1.2rem] font-[500] py-[1vh] px-[2vh] rounded-[2vw] border-solid border-[1px] rounded-[2vw] border-[#008DEB] cursor-pointer bg-cyan-100" : "text-[1.2rem] font-[500] py-[1vh] px-[2vh] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",
                                        children: "Semua Obat"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    id: "categories",
                                    className: "border-b-[.1px] border-black p-[1vh]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            onClick: showCategoriesSwitch,
                                            className: "text-[1.2rem] font-[500] flex hover:cursor-pointer justify-between",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Kategori"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: showCategories ? "w-[5%] flex items-center justify-center rotate-90 transition duration-100" : "w-[5%] flex items-center justify-center transition duration-100",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCaretRight
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: showCategories ? "overflow-auto scrollbar h-[35vh]" : "",
                                            children: showCategories ? categoriesMap() : ""
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    id: "sort",
                                    className: "border-b-[.1px] border-black p-[1vh]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            onClick: showSortSwitch,
                                            className: "text-[1.2rem] font-[500] flex hover:cursor-pointer justify-between",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-[1.2rem] font-[500]",
                                                    children: "Sort By"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: showSort ? "w-[5%] flex items-center justify-center rotate-90 transition duration-100" : "w-[5%] flex items-center justify-center transition duration-100",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCaretRight
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: showSort ? "flex flex-col mt-[2vh]" : "hidden",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    onClick: ()=>{
                                                        router.replace(`/productCatalog/sort=productPrice=ASC=1`);
                                                        setCurrentPage(1);
                                                        setSearchKeyword("");
                                                    },
                                                    className: selected.includes("sort=productPrice=ASC") ? "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-[#008DEB] cursor-pointer bg-cyan-100" : "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",
                                                    children: "Price Asc"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    onClick: ()=>{
                                                        router.replace(`/productCatalog/sort=productPrice=DESC=1`);
                                                        setCurrentPage(1);
                                                        setSearchKeyword("");
                                                    },
                                                    className: selected.includes("sort=productPrice=DESC") ? "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-[#008DEB] cursor-pointer bg-cyan-100" : "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",
                                                    children: "Price Desc"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    onClick: ()=>{
                                                        router.replace(`/productCatalog/sort=productName=ASC=1`);
                                                        setCurrentPage(1);
                                                        setSearchKeyword("");
                                                    },
                                                    className: selected.includes("sort=productName=ASC") ? "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-[#008DEB] cursor-pointer bg-cyan-100" : "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",
                                                    children: "Name Asc"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    onClick: ()=>{
                                                        router.replace(`/productCatalog/sort=productName=DESC=1`);
                                                        setCurrentPage(1);
                                                        setSearchKeyword("");
                                                    },
                                                    className: selected.includes("sort=productName=DESC") ? "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-[#008DEB] cursor-pointer bg-cyan-100" : "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",
                                                    children: "Name Desc"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-[86%] h-[100%] flex flex-col",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex w-[80%] justify-between",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        id: "searchbar desktop",
                                        className: "bg-[#F5F6F6] flex w-[35vw] h-[7vh] z-[2] left-[15vw] bottom-[88px] justify-end ml-[5vw]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                onChange: (event)=>{
                                                    setSearchKeyword(event.target.value);
                                                },
                                                value: searchKeyword,
                                                variant: "unstyled",
                                                placeholder: "Cari Obat",
                                                sx: {
                                                    paddingLeft: "5%"
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>{
                                                    router.replace(`/productCatalog/${searchKeyword}=1`);
                                                    setCurrentPage(1);
                                                },
                                                className: "bg-[#008DEB] flex items-center justify-center w-[20%] hover:cursor-pointer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    src: "/landingpage/Search-desktop.png",
                                                    alt: "arrow-logo",
                                                    layout: "fixed",
                                                    width: 24,
                                                    height: 24
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "h-[85%] flex flex-wrap overflow-auto scrollbar",
                                    children: productMap()
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[100%] flex justify-end",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-[10%] flex justify-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                                size: "lg",
                                                disabled: currentPage <= 1,
                                                colorScheme: "linkedin",
                                                onClick: ()=>{
                                                    setCurrentPage(currentPage - 1);
                                                    const splitParams = router.query.params.split("=");
                                                    splitParams[splitParams.length - 1] = parseInt(splitParams[splitParams.length - 1]) - 1;
                                                    const joinParams = splitParams.join("=");
                                                    router.replace(`/productCatalog/${joinParams}`);
                                                },
                                                children: "<"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-[100%] w-[7vw] flex items-center justify-center",
                                                children: currentPage
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                                onClick: ()=>{
                                                    setCurrentPage(currentPage + 1);
                                                    const splitParams = router.query.params.split("=");
                                                    splitParams[splitParams.length - 1] = parseInt(splitParams[splitParams.length - 1]) + 1;
                                                    const joinParams = splitParams.join("=");
                                                    router.replace(`/productCatalog/${joinParams}`);
                                                },
                                                disabled: !props.hasMore,
                                                size: "lg",
                                                colorScheme: "linkedin",
                                                children: ">"
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
        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_9__.getSession)({
            req: context.req
        });
        const resGetCategoriesLists = await _src_config_api__WEBPACK_IMPORTED_MODULE_4__["default"].get("categories/getAll");
        // console.log({session});
        let resGetProducts = "";
        if (context.params.params.includes("semuaObat")) {
            const splitParams = context.params.params.split("=");
            const page = splitParams[1];
            resGetProducts = await _src_config_api__WEBPACK_IMPORTED_MODULE_4__["default"].get("products/", {
                params: {
                    page,
                    limit: 10
                }
            });
        } else if (context.params.params.includes("sort")) {
            const splitParams1 = context.params.params.split("=");
            const page1 = splitParams1[splitParams1.length - 1];
            resGetProducts = await _src_config_api__WEBPACK_IMPORTED_MODULE_4__["default"].get(`products/sort/${context.params.params}`, {
                params: {
                    page: page1,
                    limit: 10
                }
            });
        } else {
            const splitParams2 = context.params.params.split("=");
            const page2 = splitParams2[splitParams2.length - 1];
            resGetProducts = await _src_config_api__WEBPACK_IMPORTED_MODULE_4__["default"].get(`products/specifics/${splitParams2[0]}`, {
                params: {
                    page: page2,
                    limit: 10
                }
            });
        }
        const { user_id  } = context.params;
        const res = await _src_config_api__WEBPACK_IMPORTED_MODULE_4__["default"].get(`/users/${user_id}`);
        // console.log(context.params);
        // console.log({ resGetProducts });
        return {
            props: {
                params: context.params,
                categoriesLists: resGetCategoriesLists.data,
                products: resGetProducts.data.products,
                hasMore: resGetProducts.data.hasMore,
                users: res.data,
                session
            }
        };
    } catch (error) {
        return {
            props: {}
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCatalog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

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

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [907,675,952,664,220,346], () => (__webpack_exec__(7975)));
module.exports = __webpack_exports__;

})();