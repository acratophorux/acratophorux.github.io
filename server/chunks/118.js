"use strict";
exports.id = 118;
exports.ids = [118];
exports.modules = {

/***/ 7118:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Subscribe)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var lib_fetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5712);
/* harmony import */ var lib_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5757);
/* harmony import */ var components_SuccessMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4013);
/* harmony import */ var components_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(401);
/* harmony import */ var components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9560);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);
swr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Subscribe() {
    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        state: lib_types__WEBPACK_IMPORTED_MODULE_3__/* .Form.Initial */ .l.Initial
    });
    const inputEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])("/api/subscribers", lib_fetcher__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    const subscriberCount = new Number(data?.count);
    const subscribe = async (e)=>{
        e.preventDefault();
        setForm({
            state: lib_types__WEBPACK_IMPORTED_MODULE_3__/* .Form.Loading */ .l.Loading
        });
        const email = inputEl.current.value;
        const res = await fetch(`/api/subscribe?email=${email}`, {
            method: "POST"
        });
        const { error  } = await res.json();
        if (error) {
            setForm({
                state: lib_types__WEBPACK_IMPORTED_MODULE_3__/* .Form.Error */ .l.Error,
                message: error
            });
            return;
        }
        inputEl.current.value = "";
        setForm({
            state: lib_types__WEBPACK_IMPORTED_MODULE_3__/* .Form.Success */ .l.Success,
            message: `Hooray! You're now on the list.`
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100",
                children: "Subscribe to the newsletter"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "my-1 text-gray-800 dark:text-gray-200",
                children: "Get emails from me about web development, tech, and early access to new articles."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "relative my-4",
                onSubmit: subscribe,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        ref: inputEl,
                        "aria-label": "Email for newsletter",
                        placeholder: "tim@apple.com",
                        type: "email",
                        autoComplete: "email",
                        required: true,
                        className: "px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 pr-32"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28",
                        type: "submit",
                        children: form.state === lib_types__WEBPACK_IMPORTED_MODULE_3__/* .Form.Loading */ .l.Loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}) : "Subscribe"
                    })
                ]
            }),
            form.state === lib_types__WEBPACK_IMPORTED_MODULE_3__/* .Form.Error */ .l.Error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: form.message
            }) : form.state === lib_types__WEBPACK_IMPORTED_MODULE_3__/* .Form.Success */ .l.Success ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SuccessMessage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: form.message
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-sm text-gray-800 dark:text-gray-200",
                children: [
                    `${subscriberCount > 0 ? subscriberCount.toLocaleString() : "-"} subscribers – `,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://www.getrevue.co/profile/leerob",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "View all issues"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;