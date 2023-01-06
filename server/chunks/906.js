"use strict";
exports.id = 906;
exports.ids = [906];
exports.modules = {

/***/ 5351:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AnalyticsCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
/* harmony import */ var lib_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5712);
/* harmony import */ var components_metrics_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function AnalyticsCard() {
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/views", lib_fetcher__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const pageViews = new Number(data?.total);
    const link = "https://leerob.io";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_Card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        header: "All-Time Views",
        link: link,
        metric: pageViews,
        isCurrency: false
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MetricCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function MetricCard({ header , link , metric , isCurrency  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "metric-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                "aria-label": header,
                target: "_blank",
                rel: "noopener noreferrer",
                href: link,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center text-gray-900 dark:text-gray-100",
                    children: [
                        header,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            className: "h-4 w-4 ml-1",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "mt-2 text-3xl font-bold spacing-sm text-black dark:text-white",
                children: [
                    metric > 0 && isCurrency && "$",
                    metric > 0 ? metric.toLocaleString() : "-"
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2563:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UnsplashCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
/* harmony import */ var lib_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5712);
/* harmony import */ var components_metrics_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function UnsplashCard() {
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/unsplash", lib_fetcher__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const downloads = new Number(data?.downloads);
    const views = new Number(data?.views);
    const link = "https://unsplash.com/@leerob";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_Card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                header: "Unsplash Downloads",
                link: link,
                metric: downloads,
                isCurrency: false
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_Card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                header: "Unsplash Views",
                link: link,
                metric: views,
                isCurrency: false
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ YouTubeCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
/* harmony import */ var lib_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5712);
/* harmony import */ var components_metrics_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function YouTubeCard() {
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/youtube", lib_fetcher__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const subscriberCount = new Number(data?.subscriberCount);
    const viewCount = new Number(data?.viewCount);
    const link = "https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_Card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                header: "YouTube Subscribers",
                link: link,
                metric: subscriberCount,
                isCurrency: false
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_Card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                header: "YouTube Views",
                link: link,
                metric: viewCount,
                isCurrency: false
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;