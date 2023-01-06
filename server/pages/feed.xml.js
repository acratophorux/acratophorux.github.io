"use strict";
(() => {
var exports = {};
exports.id = 804;
exports.ids = [804];
exports.modules = {

/***/ 747:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RSSFeed),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var rss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3572);
/* harmony import */ var rss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_sanity_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6097);
/* harmony import */ var lib_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_sanity_server__WEBPACK_IMPORTED_MODULE_1__]);
lib_sanity_server__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function getServerSideProps({ res  }) {
    const feed = new (rss__WEBPACK_IMPORTED_MODULE_0___default())({
        title: "Lee Robinson",
        site_url: "https://leerob.io",
        feed_url: "https://leerob.io/feed.xml"
    });
    const allPosts = await lib_sanity_server__WEBPACK_IMPORTED_MODULE_1__/* .sanityClient.fetch */ .i3.fetch(lib_queries__WEBPACK_IMPORTED_MODULE_2__/* .indexQuery */ .zl);
    allPosts.map((post)=>{
        feed.item({
            title: post.title,
            url: `https://leerob.io/blog/${post.slug}`,
            date: post.date,
            description: post.excerpt
        });
    });
    res.setHeader("Content-Type", "text/xml");
    res.setHeader("Cache-Control", "public, s-maxage=1200, stale-while-revalidate=600");
    res.write(feed.xml({
        indent: true
    }));
    res.end();
    return {
        props: {}
    };
}
function RSSFeed() {
    return null;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3572:
/***/ ((module) => {

module.exports = require("rss");

/***/ }),

/***/ 5091:
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [997], () => (__webpack_exec__(747)));
module.exports = __webpack_exports__;

})();