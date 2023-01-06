"use strict";
(() => {
var exports = {};
exports.id = 252;
exports.ids = [252];
exports.modules = {

/***/ 7876:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Guestbook)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5941);
/* harmony import */ var lib_fetcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5712);
/* harmony import */ var lib_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5757);
/* harmony import */ var components_SuccessMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4013);
/* harmony import */ var components_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(401);
/* harmony import */ var components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9560);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_4__]);
swr__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function GuestbookEntry({ entry , user  }) {
    const { mutate  } = useSWRConfig();
    const deleteEntry = async (e)=>{
        e.preventDefault();
        await fetch(`/api/guestbook/${entry.id}`, {
            method: "DELETE"
        });
        mutate("/api/guestbook");
    };
    return /*#__PURE__*/ _jsxs("div", {
        className: "flex flex-col space-y-2",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "prose dark:prose-dark w-full break-words",
                children: entry.body
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "flex items-center space-x-3",
                children: [
                    /*#__PURE__*/ _jsx("p", {
                        className: "text-sm text-gray-500",
                        children: entry.created_by
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        className: " text-gray-200 dark:text-gray-800",
                        children: "/"
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "text-sm text-gray-400 dark:text-gray-600",
                        children: format(new Date(entry.updated_at), "d MMM yyyy 'at' h:mm bb")
                    }),
                    user && entry.created_by === user.name && /*#__PURE__*/ _jsxs(_Fragment, {
                        children: [
                            /*#__PURE__*/ _jsx("span", {
                                className: "text-gray-200 dark:text-gray-800",
                                children: "/"
                            }),
                            /*#__PURE__*/ _jsx("button", {
                                className: "text-sm text-red-600 dark:text-red-400",
                                onClick: deleteEntry,
                                children: "Delete"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function Guestbook({ fallbackData  }) {
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();
    const { mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__.useSWRConfig)();
    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        state: lib_types__WEBPACK_IMPORTED_MODULE_5__/* .Form.Initial */ .l.Initial
    });
    const inputEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { data: entries  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__["default"])("/api/guestbook", lib_fetcher__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        fallbackData
    });
    const leaveEntry = async (e)=>{
        e.preventDefault();
        setForm({
            state: lib_types__WEBPACK_IMPORTED_MODULE_5__/* .Form.Loading */ .l.Loading
        });
        const res = await fetch("/api/guestbook", {
            body: JSON.stringify({
                body: inputEl.current.value
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });
        const { error  } = await res.json();
        if (error) {
            setForm({
                state: lib_types__WEBPACK_IMPORTED_MODULE_5__/* .Form.Error */ .l.Error,
                message: error
            });
            return;
        }
        inputEl.current.value = "";
        mutate("/api/guestbook");
        setForm({
            state: lib_types__WEBPACK_IMPORTED_MODULE_5__/* .Form.Success */ .l.Success,
            message: `Hooray! Thanks for signing my Guestbook.`
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100",
                        children: "Sign the Guestbook"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "my-1 text-gray-800 dark:text-gray-200",
                        children: "Share a message for a future visitor of my site."
                    }),
                    !session && // eslint-disable-next-line @next/next/no-html-link-for-pages
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/api/auth/signin/github",
                        className: "flex items-center justify-center my-4 font-bold h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28",
                        onClick: (e)=>{
                            e.preventDefault();
                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)("github");
                        },
                        children: "Login"
                    }),
                    session?.user && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: "relative my-4",
                        onSubmit: leaveEntry,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ref: inputEl,
                                "aria-label": "Your message",
                                placeholder: "Your message...",
                                required: true,
                                className: "pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28",
                                type: "submit",
                                children: form.state === lib_types__WEBPACK_IMPORTED_MODULE_5__/* .Form.Loading */ .l.Loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}) : "Sign"
                            })
                        ]
                    }),
                    form.state === lib_types__WEBPACK_IMPORTED_MODULE_5__/* .Form.Error */ .l.Error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        children: form.message
                    }) : form.state === lib_types__WEBPACK_IMPORTED_MODULE_5__/* .Form.Success */ .l.Success ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SuccessMessage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        children: form.message
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm text-gray-800 dark:text-gray-200",
                        children: "Your information is only used to display your name and reply by email."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-4 space-y-8"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1130:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GuestbookPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3721);
/* harmony import */ var components_Guestbook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7876);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Container__WEBPACK_IMPORTED_MODULE_1__, components_Guestbook__WEBPACK_IMPORTED_MODULE_2__]);
([components_Container__WEBPACK_IMPORTED_MODULE_1__, components_Guestbook__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function GuestbookPage({ fallbackData  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "Guestbook – Lee Robinson",
        description: "Sign my digital guestbook and share some wisdom.",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col justify-center items-start max-w-2xl mx-auto mb-16",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white",
                    children: "Guestbook"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-gray-600 dark:text-gray-400 mb-4",
                    children: "Leave a comment below. It could be anything – appreciation, information, wisdom, or even humor. Surprise me!"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Guestbook__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    fallbackData: fallbackData
                })
            ]
        })
    });
}
async function getStaticProps() {
    // const entries = await prisma.guestbook.findMany({
    //   orderBy: {
    //     updated_at: 'desc'
    //   }
    // });
    // const fallbackData = entries.map((entry) => ({
    //   id: entry.id.toString(),
    //   body: entry.body,
    //   created_by: entry.created_by.toString(),
    //   updated_at: entry.updated_at.toString()
    // }));
    const fallbackData = {
        id: "sdfh2394bu5",
        body: "I am sexy and I know it.",
        created_by: "acratophorux",
        updated_at: ""
    };
    return {
        props: {
            fallbackData
        },
        revalidate: 60
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 3086:
/***/ ((module) => {

module.exports = require("motion");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7285:
/***/ ((module) => {

module.exports = require("use-delayed-render");

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [397,66,721,841], () => (__webpack_exec__(1130)));
module.exports = __webpack_exports__;

})();