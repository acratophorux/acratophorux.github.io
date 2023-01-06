"use strict";
(() => {
var exports = {};
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 5091:
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ 5441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var lib_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(636);
/* harmony import */ var lib_sanity_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(288);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_sanity_server__WEBPACK_IMPORTED_MODULE_1__]);
lib_sanity_server__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET || !req.query.slug) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
    const post = await lib_sanity_server__WEBPACK_IMPORTED_MODULE_1__/* .previewClient.fetch */ .S9.fetch(lib_queries__WEBPACK_IMPORTED_MODULE_0__/* .postBySlugQuery */ .p8, {
        slug: req.query.slug
    });
    if (!post) {
        return res.status(401).json({
            message: "Invalid slug"
        });
    }
    res.setPreviewData({});
    res.writeHead(307, {
        Location: `/blog/${post.slug}`
    });
    res.end();
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
var __webpack_exports__ = __webpack_require__.X(0, [799], () => (__webpack_exec__(5441)));
module.exports = __webpack_exports__;

})();