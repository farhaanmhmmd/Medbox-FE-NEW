"use strict";
(() => {
var exports = {};
exports.id = 125;
exports.ids = [125];
exports.modules = {

/***/ 1314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_config_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7220);
/* harmony import */ var _components_textfield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1264);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2703);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);












function ChangePassword(props) {
    const validate = yup__WEBPACK_IMPORTED_MODULE_6__.object({
        oldPassword: yup__WEBPACK_IMPORTED_MODULE_6__.string().required("Please fill this field"),
        password: yup__WEBPACK_IMPORTED_MODULE_6__.string().required("Please fill this field"),
        confirmPassword: yup__WEBPACK_IMPORTED_MODULE_6__.string().oneOf([
            yup__WEBPACK_IMPORTED_MODULE_6__.ref("password"),
            null
        ], "Password must match").required("Please fill this field")
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const onHandleSubmit = async ({ oldPassword , password  })=>{
        try {
            const body = {
                oldPassword,
                password
            };
            const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_9__.getSession)();
            const { user_token  } = session.user;
            const config = {
                headers: {
                    Authorization: `Bearer ${user_token}`
                }
            };
            const resUpdatePassword = await _src_config_api__WEBPACK_IMPORTED_MODULE_4__["default"].patch("/users/changepassword", body, config);
            // console.log({ resUpdatePassword });
            alert("Password Updated");
            router.replace("/");
        } catch (error) {
            alert("Incorrect Password");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
        theme: _components_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                alignItems: "center",
                justifyContent: "center",
                direction: "column",
                background: "white",
                className: "shadow-[0px_6px_20px_0px_rgba(0,28,47,0.1)]",
                p: 12,
                rounded: 6,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                        className: "w-[80%] h-[9vh]",
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                            alt: "Register Image",
                            objectFit: "cover",
                            marginBottom: "20vh",
                            width: "100%",
                            src: "forgotPassword/Medbox-logo.svg"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Formik, {
                        initialValues: {
                            oldPassword: "",
                            password: "",
                            confirmPassword: ""
                        },
                        validationSchema: validate,
                        onSubmit: async (values)=>{
                            onHandleSubmit({
                                oldPassword: values.oldPassword,
                                password: values.password
                            });
                        },
                        children: ({ handleSubmit , errors , touched , values , setFieldValue  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-[500] text-[1.8rem] w-[100%] flex justify-center",
                                        children: "Change Password"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
                                        name: "oldPassword",
                                        children: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_textfield__WEBPACK_IMPORTED_MODULE_5__/* .TextField */ .n, {
                                                ...field,
                                                label: "Old Password",
                                                name: "oldPassword",
                                                type: "password"
                                            })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
                                        name: "password",
                                        children: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_textfield__WEBPACK_IMPORTED_MODULE_5__/* .TextField */ .n, {
                                                ...field,
                                                label: "New Password",
                                                name: "password",
                                                type: "password"
                                            })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
                                        name: "confirmPassword",
                                        children: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_textfield__WEBPACK_IMPORTED_MODULE_5__/* .TextField */ .n, {
                                                ...field,
                                                label: "Confirm Password",
                                                name: "confirmPassword",
                                                type: "password"
                                            })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-[100%] justify-evenly flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                                onClick: handleSubmit,
                                                colorScheme: "linkedin",
                                                mx: "5",
                                                my: "1vh",
                                                size: "lg",
                                                width: "100px",
                                                type: "submit",
                                                children: "Submit"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                                colorScheme: "linkedin",
                                                mx: "5",
                                                my: "1vh",
                                                size: "lg",
                                                width: "100px",
                                                type: "reset",
                                                children: "Reset"
                                            })
                                        ]
                                    })
                                ]
                            })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        mt: 5,
                        children: [
                            "Back to",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                color: "linkedin.500",
                                href: "/",
                                children: "Home!"
                            })
                        ]
                    })
                ]
            })
        })
    });
}
async function getServerSideProps(context) {
    try {
        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_9__.getSession)({
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
        const res = await _src_config_api__WEBPACK_IMPORTED_MODULE_4__["default"].get(`/users/${user_id}`, config);
        return {
            props: {
                user: res.data.data,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePassword);


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

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

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

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [146], () => (__webpack_exec__(1314)));
module.exports = __webpack_exports__;

})();