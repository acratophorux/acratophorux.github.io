"use strict";
(() => {
var exports = {};
exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 6964:
/***/ ((module) => {

module.exports = require("@sanity/webhook");

/***/ }),

/***/ 5091:
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ 8744:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _sanity_webhook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6964);
/* harmony import */ var _sanity_webhook__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_webhook__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_sanity_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(288);
/* harmony import */ var lib_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(636);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_sanity_server__WEBPACK_IMPORTED_MODULE_1__]);
lib_sanity_server__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function handler(req, res) {
    const signature = req.headers[_sanity_webhook__WEBPACK_IMPORTED_MODULE_0__.SIGNATURE_HEADER_NAME];
    const body = await readBody(req) // Read the body into a string
    ;
    if (!(0,_sanity_webhook__WEBPACK_IMPORTED_MODULE_0__.isValidSignature)(body, signature, process.env.SANITY_STUDIO_REVALIDATE_SECRET)) {
        res.status(401).json({
            message: "Invalid signature"
        });
        return;
    }
    const { _id: id  } = JSON.parse(body);
    if (typeof id !== "string" || !id) {
        return res.status(400).json({
            message: "Invalid _id"
        });
    }
    try {
        const slug = await lib_sanity_server__WEBPACK_IMPORTED_MODULE_1__/* .sanityClient.fetch */ .i3.fetch(lib_queries__WEBPACK_IMPORTED_MODULE_2__/* .postUpdatedQuery */ .H3, {
            id
        });
        await Promise.all([
            res.revalidate("/blog"),
            res.revalidate(`/blog/${slug}`)
        ]);
        return res.status(200).json({
            message: `Updated ${slug}`
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
}
const config = {
    api: {
        bodyParser: false
    }
};
async function readBody(readable) {
    const chunks = [];
    for await (const chunk of readable){
        chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks).toString("utf8");
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [799], () => (__webpack_exec__(8744)));
module.exports = __webpack_exports__;

})();