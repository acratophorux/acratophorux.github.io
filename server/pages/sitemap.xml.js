"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 4974:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sitemap),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var lib_sanity_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6097);
/* harmony import */ var lib_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_sanity_server__WEBPACK_IMPORTED_MODULE_0__]);
lib_sanity_server__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const createSitemap = (slugs)=>`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs.map((slug)=>{
        return `
                <url>
                    <loc>${`https://leerob.io/${slug}`}</loc>
                </url>
            `;
    }).join("")}
    </urlset>
`;
async function getServerSideProps({ res  }) {
    const allPosts = await lib_sanity_server__WEBPACK_IMPORTED_MODULE_0__/* .sanityClient.fetch */ .i3.fetch(lib_queries__WEBPACK_IMPORTED_MODULE_1__/* .postSlugsQuery */ .Pk);
    const allPages = [
        ...allPosts.map((slug)=>`blog/${slug}`),
        ...[
            "",
            "about",
            "blog",
            "dashboard",
            "guestbook",
            "newsletter",
            "tweets",
            "uses"
        ]
    ];
    res.setHeader("Content-Type", "text/xml");
    res.setHeader("Cache-Control", "public, s-maxage=1200, stale-while-revalidate=600");
    res.write(createSitemap(allPages));
    res.end();
    return {
        props: {}
    };
}
function Sitemap() {
    return null;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_exports__ = __webpack_require__.X(0, [997], () => (__webpack_exec__(4974)));
module.exports = __webpack_exports__;

})();