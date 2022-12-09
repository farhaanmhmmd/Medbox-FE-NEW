"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 4510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./src/config/api.js

const API_URL = "http://localhost:8000" || 0;
const axiosInstance = external_axios_default().create({
    baseURL: API_URL
});
/* harmony default export */ const api = (axiosInstance);

;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js



const credentialInstance = credentials_default()({
    async authorize (credentials) {
        try {
            const { email , password  } = credentials;
            const res = await api.post("/users/login", {
                email,
                password
            });
            // console.log({ res: res.data.data });
            const user = res.data.data.result;
            // console.log({ user });
            return user;
        } catch (error) {
            console.log(`yang ini boy ${error.response.data.message}`);
            throw error.response.data;
        }
    }
});
/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    session: {
        jwt: true
    },
    providers: [
        credentialInstance
    ],
    callbacks: {
        async jwt ({ token , user  }) {
            if (user) {
                token.user = user;
            // console.log(user);
            }
            return token;
        },
        async session ({ session , token  }) {
            session.user = token.user;
            return session;
        }
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4510));
module.exports = __webpack_exports__;

})();