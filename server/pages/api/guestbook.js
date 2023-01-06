"use strict";
(() => {
var exports = {};
exports.id = 241;
exports.ids = [241];
exports.modules = {

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

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

/***/ 6623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2965);


async function handler(req, res) {
    if (req.method === "GET") {
        const entries = await lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].guestbook.findMany */ .Z.guestbook.findMany({
            orderBy: {
                updated_at: "desc"
            }
        });
        return res.json(entries.map((entry)=>({
                id: entry.id.toString(),
                body: entry.body,
                created_by: entry.created_by,
                updated_at: entry.updated_at
            })));
    }
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({
        req
    });
    const { email , name  } = session.user;
    if (!session) {
        return res.status(403).send("Unauthorized");
    }
    if (req.method === "POST") {
        const newEntry = await lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].guestbook.create */ .Z.guestbook.create({
            data: {
                email,
                body: (req.body.body || "").slice(0, 500),
                created_by: name
            }
        });
        return res.status(200).json({
            id: newEntry.id.toString(),
            body: newEntry.body,
            created_by: newEntry.created_by,
            updated_at: newEntry.updated_at
        });
    }
    return res.send("Method not allowed.");
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6623));
module.exports = __webpack_exports__;

})();