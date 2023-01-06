"use strict";
exports.id = 799;
exports.ids = [799];
exports.modules = {

/***/ 636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H3": () => (/* binding */ postUpdatedQuery),
/* harmony export */   "p8": () => (/* binding */ postBySlugQuery)
/* harmony export */ });
/* unused harmony exports indexQuery, postQuery, postSlugsQuery, allSnippetsQuery, snippetsQuery, snippetSlugsQuery, snippetBySlugQuery */
const postFields = `
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
`;
const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;
const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  }
}`;
const postSlugsQuery = (/* unused pure expression or super */ null && (`
*[_type == "post" && defined(slug.current)][].slug.current
`));
const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;
const postUpdatedQuery = `*[_type == "post" && _id == $id].slug.current`;
const snippetFields = `
  _id,
  title,
  description,
  logo,
  "slug": slug.current,
`;
const allSnippetsQuery = `
*[_type == "snippet"] | order(date desc, _updatedAt desc) {
  ${snippetFields}
}`;
const snippetsQuery = `
{
  "snippet": *[_type == "snippet" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${snippetFields}
  }
}`;
const snippetSlugsQuery = (/* unused pure expression or super */ null && (`
*[_type == "snippet" && defined(slug.current)][].slug.current
`));
const snippetBySlugQuery = `
*[_type == "snippet" && slug.current == $slug][0] {
  ${snippetFields}
}
`;


/***/ }),

/***/ 5512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ sanityConfig)
/* harmony export */ });
const sanityConfig = {
    dataset:  false || "production",
    projectId: "knr81n85",
    useCdn: "production" !== "production",
    apiVersion: "2021-03-25"
};


/***/ }),

/***/ 288:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S9": () => (/* binding */ previewClient),
/* harmony export */   "i3": () => (/* binding */ sanityClient)
/* harmony export */ });
/* unused harmony export getClient */
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5091);
/* harmony import */ var _sanity_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5512);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__]);
next_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */ 

const sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(_sanity_config__WEBPACK_IMPORTED_MODULE_1__/* .sanityConfig */ .h);
const previewClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)({
    ..._sanity_config__WEBPACK_IMPORTED_MODULE_1__/* .sanityConfig */ .h,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN
});
const getClient = (preview)=>preview ? previewClient : sanityClient;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;