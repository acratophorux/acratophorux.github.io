"use strict";
exports.id = 279;
exports.ids = [279];
exports.modules = {

/***/ 2893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ConsCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ConsCard({ title , cons  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900 rounded-xl p-6 my-6 w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: `You might not use ${title} if...`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-4",
                children: cons.map((con)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex font-medium items-baseline mb-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-4 w-4 mr-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    className: "h-4 w-4 text-red-500",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M22 11.08V12a10 10 0 11-5.93-9.14"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M22 4L12 14.01l-3-3"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: con
                            })
                        ]
                    }, con))
            })
        ]
    });
}


/***/ }),

/***/ 7532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ImageWithTheme)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4040);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);



function ImageWithTheme(props) {
    const { theme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: props.alt,
        src: theme === "light" ? props.light : props.dark,
        ...props
    });
}


/***/ }),

/***/ 8249:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9066);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4040);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_ProsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(388);
/* harmony import */ var components_ConsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2893);
/* harmony import */ var components_metrics_Unsplash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2563);
/* harmony import */ var components_metrics_Analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5351);
/* harmony import */ var components_metrics_Youtube__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3316);
/* harmony import */ var components_Step__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3824);
/* harmony import */ var components_ImageWithTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7532);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_metrics_Unsplash__WEBPACK_IMPORTED_MODULE_5__, components_metrics_Analytics__WEBPACK_IMPORTED_MODULE_6__, components_metrics_Youtube__WEBPACK_IMPORTED_MODULE_7__]);
([components_metrics_Unsplash__WEBPACK_IMPORTED_MODULE_5__, components_metrics_Analytics__WEBPACK_IMPORTED_MODULE_6__, components_metrics_Youtube__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const CustomLink = (props)=>{
    const href = props.href;
    const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));
    if (isInternalLink) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: href,
            ...props,
            children: props.children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        ...props
    });
};
function RoundedImage(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        alt: props.alt,
        className: "rounded-lg",
        ...props
    });
}
function Callout(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex bg-gray-200 dark:bg-gray-800 rounded-lg p-4 my-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center w-4 mr-4",
                children: props.emoji
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full callout",
                children: props.children
            })
        ]
    });
}
const MDXComponents = {
    Image: RoundedImage,
    ImageWithTheme: components_ImageWithTheme__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
    a: CustomLink,
    Callout,
    Analytics: components_metrics_Analytics__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    ConsCard: components_ConsCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    ProsCard: components_ProsCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    Step: components_Step__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
    Unsplash: components_metrics_Unsplash__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    YouTube: components_metrics_Youtube__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXComponents);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProsCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ProsCard({ title , pros  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-900 rounded-xl p-6 my-4 w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: `You might use ${title} if...`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-4",
                children: pros.map((pro)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex font-medium items-baseline mb-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-4 w-4 mr-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    className: "h-4 w-4 text-green-500",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M22 11.08V12a10 10 0 11-5.93-9.14"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M22 4L12 14.01l-3-3"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: pro
                            })
                        ]
                    }, pro))
            })
        ]
    });
}


/***/ }),

/***/ 3824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Step)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Step({ number , title  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "step flex items-center py-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center justify-center border border-gray-200 pt-1 font-bold dark:border-gray-800 rounded-full h-8 w-8 text-blue-500",
                children: number
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "ml-3 tracking-tight font-bold",
                children: title
            })
        ]
    });
}


/***/ }),

/***/ 131:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ mdxToHtml)
/* harmony export */ });
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4818);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4956);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6809);
/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7752);
/* harmony import */ var rehype_code_titles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8076);
/* harmony import */ var rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9847);
/* harmony import */ var rehype_prism_plus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(483);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__, rehype_slug__WEBPACK_IMPORTED_MODULE_3__, rehype_code_titles__WEBPACK_IMPORTED_MODULE_4__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_5__, rehype_prism_plus__WEBPACK_IMPORTED_MODULE_6__]);
([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__, rehype_slug__WEBPACK_IMPORTED_MODULE_3__, rehype_code_titles__WEBPACK_IMPORTED_MODULE_4__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_5__, rehype_prism_plus__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







async function mdxToHtml(source) {
    const mdxSource = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__.serialize)(source, {
        mdxOptions: {
            remarkPlugins: [
                remark_gfm__WEBPACK_IMPORTED_MODULE_2__["default"]
            ],
            rehypePlugins: [
                rehype_slug__WEBPACK_IMPORTED_MODULE_3__["default"],
                rehype_code_titles__WEBPACK_IMPORTED_MODULE_4__["default"],
                rehype_prism_plus__WEBPACK_IMPORTED_MODULE_6__["default"],
                [
                    rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_5__["default"],
                    {
                        properties: {
                            className: [
                                "anchor"
                            ]
                        }
                    }
                ]
            ],
            format: "mdx"
        }
    });
    const tweetMatches = source.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
    const tweetIDs = tweetMatches?.map((tweet)=>tweet.match(/[0-9]+/g)[0]);
    return {
        html: mdxSource,
        tweetIDs: tweetIDs || [],
        wordCount: source.split(/\s+/gu).length,
        readingTime: reading_time__WEBPACK_IMPORTED_MODULE_1___default()(source).text
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ urlForImage)
/* harmony export */ });
/* unused harmony export imageBuilder */
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3962);


const imageBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_0___default()(_sanity_config__WEBPACK_IMPORTED_MODULE_1__/* .sanityConfig */ .h);
const urlForImage = (source)=>imageBuilder.image(source).auto("format").fit("max");


/***/ })

};
;