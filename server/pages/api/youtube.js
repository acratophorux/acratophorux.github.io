"use strict";
(() => {
var exports = {};
exports.id = 56;
exports.ids = [56];
exports.modules = {

/***/ 688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "googleapis"
const external_googleapis_namespaceObject = require("googleapis");
;// CONCATENATED MODULE: ./lib/google.ts

const googleAuth = new external_googleapis_namespaceObject.google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY
    },
    scopes: [
        "https://www.googleapis.com/auth/youtube.readonly"
    ]
});
/* harmony default export */ const google = (googleAuth);

;// CONCATENATED MODULE: ./pages/api/youtube.ts


async function handler(req, res) {
    const auth = await google.getClient();
    const youtube = external_googleapis_namespaceObject.google.youtube({
        auth,
        version: "v3"
    });
    const response = await youtube.channels.list({
        id: "UCZMli3czZnd1uoc1ShTouQw",
        part: "statistics"
    });
    const channel = response.data.items[0];
    const { subscriberCount , viewCount  } = channel.statistics;
    res.setHeader("Cache-Control", "public, s-maxage=1200, stale-while-revalidate=600");
    return res.status(200).json({
        subscriberCount,
        viewCount
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(688));
module.exports = __webpack_exports__;

})();