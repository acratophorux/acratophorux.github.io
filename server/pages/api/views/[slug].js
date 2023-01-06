"use strict";
(() => {
var exports = {};
exports.id = 117;
exports.ids = [117];
exports.modules = {

/***/ 2965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lib_prisma)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prisma.ts

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices
let prisma;
if (true) {
    prisma = new client_namespaceObject.PrismaClient();
} else {}
/* harmony default export */ const lib_prisma = (prisma);


/***/ }),

/***/ 1353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2965);

async function handler(req, res) {
    try {
        const slug = req.query.slug.toString();
        if (req.method === "POST") {
            const newOrUpdatedViews = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].views.upsert */ .Z.views.upsert({
                where: {
                    slug
                },
                create: {
                    slug
                },
                update: {
                    count: {
                        increment: 1
                    }
                }
            });
            return res.status(200).json({
                total: newOrUpdatedViews.count.toString()
            });
        }
        if (req.method === "GET") {
            const views = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].views.findUnique */ .Z.views.findUnique({
                where: {
                    slug
                }
            });
            return res.status(200).json({
                total: views.count.toString()
            });
        }
    } catch (e) {
        return res.status(500).json({
            message: e.message
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1353));
module.exports = __webpack_exports__;

})();