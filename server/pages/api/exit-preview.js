"use strict";
(() => {
var exports = {};
exports.id = 211;
exports.ids = [211];
exports.modules = {

/***/ 6254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    res.clearPreviewData();
    res.writeHead(307, {
        Location: "/"
    });
    res.end();
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6254));
module.exports = __webpack_exports__;

})();