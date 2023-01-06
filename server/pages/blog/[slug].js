"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 4214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Tweet)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4040);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Supports plain text, images, quote tweets.
 *
 * Needs support for images, GIFs, and replies maybe?
 * Styles use !important to override Tailwind .prose inside MDX.
 */ function Tweet({ text , id , author , media , created_at , public_metrics , referenced_tweets  }) {
    const authorUrl = `https://twitter.com/${author.username}`;
    const likeUrl = `https://twitter.com/intent/like?tweet_id=${id}`;
    const retweetUrl = `https://twitter.com/intent/retweet?tweet_id=${id}`;
    const replyUrl = `https://twitter.com/intent/tweet?in_reply_to=${id}`;
    const tweetUrl = `https://twitter.com/${author.username}/status/${id}`;
    const createdAt = new Date(created_at);
    const formattedText = text.replace(/https:\/\/[\n\S]+/g, "").replace("&amp;", "&");
    const quoteTweet = referenced_tweets && referenced_tweets.find((t)=>t.type === "quoted");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "tweet rounded-lg border border-gray-200 dark:border-gray-800 px-6 py-4 my-4 w-full bg-white dark:bg-gray-900",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "flex h-12 w-12",
                        href: authorUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            alt: author.username,
                            height: 48,
                            width: 48,
                            src: author.profile_image_url,
                            className: "rounded-full"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: authorUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "author flex flex-col ml-4 !no-underline",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "flex items-center font-bold !text-gray-900 dark:!text-gray-100 leading-5",
                                title: author.name,
                                children: [
                                    author.name,
                                    author.verified ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        "aria-label": "Verified Account",
                                        className: "ml-1 text-blue-500 dark:text-white inline h-4 w-4",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"
                                            })
                                        })
                                    }) : null
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "!text-gray-500",
                                title: `@${author.username}`,
                                children: [
                                    "@",
                                    author.username
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "ml-auto",
                        href: authorUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            viewBox: "328 355 335 276",
                            height: "24",
                            width: "24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A 70, 70 0 0 1 370, 523 A 70, 70 0 0 0 401, 521 A 70, 70 0 0 1 344, 455 A 70, 70 0 0 0 372, 460 A 70, 70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A 67, 67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A 65, 65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A 65, 65 0 0 1 630, 425 Z",
                                style: {
                                    fill: "#3BA9EE"
                                }
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-4 mb-1 leading-normal whitespace-pre-wrap !text-gray-700 dark:!text-gray-200",
                children: formattedText
            }),
            media && media.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: media.length === 1 ? "inline-grid grid-cols-1 gap-x-2 gap-y-2 my-2" : "inline-grid grid-cols-2 gap-x-2 gap-y-2 my-2",
                children: media.map((m)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        alt: text,
                        height: m.height,
                        width: m.width,
                        src: m.url,
                        className: "rounded"
                    }, m.media_key))
            }) : null,
            quoteTweet ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tweet, {
                ...quoteTweet
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "!text-gray-500 text-sm hover:!underline",
                href: tweetUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                    title: `Time Posted: ${createdAt.toUTCString()}`,
                    dateTime: createdAt.toISOString(),
                    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(createdAt, "h:mm a - MMM d, y")
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex text-sm !text-gray-700 dark:!text-gray-300 mt-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "flex items-center mr-4 !text-gray-500 hover:!text-blue-600 transition hover:!underline",
                        href: replyUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "mr-2",
                                width: "18",
                                height: "18",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    className: "fill-current",
                                    d: "M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: new Number(public_metrics.reply_count).toLocaleString("en", {
                                    notation: "compact"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "flex items-center mr-4 !text-gray-500 hover:!text-green-600 transition hover:!underline",
                        href: retweetUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "mr-2",
                                width: "18",
                                height: "18",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    className: "fill-current",
                                    d: "M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: new Number(public_metrics.retweet_count).toLocaleString("en", {
                                    notation: "compact"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "flex items-center !text-gray-500 hover:!text-red-600 transition hover:!underline",
                        href: likeUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "mr-2",
                                width: "18",
                                height: "18",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    className: "fill-current",
                                    d: "M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: new Number(public_metrics.like_count).toLocaleString("en", {
                                    notation: "compact"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 8847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ViewCounter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var lib_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5712);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);
swr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ViewCounter({ slug  }) {
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(`/api/views/${slug}`, lib_fetcher__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const views = new Number(data?.total);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const registerView = ()=>fetch(`/api/views/${slug}`, {
                method: "POST"
            });
        registerView();
    }, [
        slug
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: `${views > 0 ? views.toLocaleString() : "–––"} views`
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7502:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BlogLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4040);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3721);
/* harmony import */ var components_Subscribe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7118);
/* harmony import */ var components_ViewCounter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8847);
/* harmony import */ var lib_sanity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Container__WEBPACK_IMPORTED_MODULE_4__, components_Subscribe__WEBPACK_IMPORTED_MODULE_5__, components_ViewCounter__WEBPACK_IMPORTED_MODULE_6__]);
([components_Container__WEBPACK_IMPORTED_MODULE_4__, components_Subscribe__WEBPACK_IMPORTED_MODULE_5__, components_ViewCounter__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function BlogLayout({ children , post  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: `${post.title} – Lee Robinson`,
        description: post.excerpt,
        image: (0,lib_sanity__WEBPACK_IMPORTED_MODULE_7__/* .urlForImage */ .i)(post.coverImage).url(),
        date: new Date(post.date).toISOString(),
        type: "article",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
            className: "flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white",
                    children: post.title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    alt: "Lee Robinson",
                                    height: 24,
                                    width: 24,
                                    sizes: "20vw",
                                    src: "/avatar.jpg",
                                    className: "rounded-full"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "ml-2 text-sm text-gray-700 dark:text-gray-300",
                                    children: [
                                        "Lee Robinson / ",
                                        (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(post.date), "MMMM dd, yyyy")
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0",
                            children: [
                                post.readingTime,
                                ` • `,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ViewCounter__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    slug: post.slug
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                    fallback: null,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full mt-4 prose dark:prose-dark max-w-none",
                            children: children
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-8",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Subscribe__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-sm text-gray-700 dark:text-gray-300",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://leerob.io/blog/${post.slug}`)}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "Discuss on Twitter"
                                }),
                                ` • `,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://github.com/leerob/leerob.io/issues",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "Suggest Change"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getTweets)
/* harmony export */ });
const getTweets = async (ids)=>{
    if (ids.length === 0) {
        return [];
    }
    const queryParams = new URLSearchParams({
        ids: ids.join(","),
        expansions: "author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id",
        "tweet.fields": "attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text",
        "user.fields": "id,name,profile_image_url,protected,url,username,verified",
        "media.fields": "duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics"
    });
    const response = await fetch(`https://api.twitter.com/2/tweets?${queryParams}`, {
        headers: {
            Authorization: `Bearer ${process.env.TWITTER_API_KEY}`
        }
    });
    const tweets = await response.json();
    const getAuthorInfo = (author_id)=>{
        return tweets.includes.users.find((user)=>user.id === author_id);
    };
    const getReferencedTweets = (mainTweet)=>{
        return mainTweet?.referenced_tweets?.map((referencedTweet)=>{
            const fullReferencedTweet = tweets.includes.tweets.find((tweet)=>tweet.id === referencedTweet.id);
            return {
                type: referencedTweet.type,
                author: getAuthorInfo(fullReferencedTweet.author_id),
                ...fullReferencedTweet
            };
        }) || [];
    };
    return tweets.data.reduce((allTweets, tweet)=>{
        const tweetWithAuthor = {
            ...tweet,
            media: tweet?.attachments?.media_keys.map((key)=>tweets.includes.media.find((media)=>media.media_key === key)) || [],
            referenced_tweets: getReferencedTweets(tweet),
            author: getAuthorInfo(tweet.author_id)
        };
        return [
            tweetWithAuthor,
            ...allTweets
        ];
    }, []) || [] // If the Twitter API key isn't set, don't break the build
    ;
};


/***/ }),

/***/ 8172:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostPage),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9961);
/* harmony import */ var layouts_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7502);
/* harmony import */ var components_Tweet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4214);
/* harmony import */ var components_MDXComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8249);
/* harmony import */ var lib_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4924);
/* harmony import */ var lib_twitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8121);
/* harmony import */ var lib_sanity_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6097);
/* harmony import */ var lib_mdx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(131);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote__WEBPACK_IMPORTED_MODULE_1__, layouts_blog__WEBPACK_IMPORTED_MODULE_2__, components_MDXComponents__WEBPACK_IMPORTED_MODULE_4__, lib_sanity_server__WEBPACK_IMPORTED_MODULE_6__, lib_mdx__WEBPACK_IMPORTED_MODULE_7__]);
([next_mdx_remote__WEBPACK_IMPORTED_MODULE_1__, layouts_blog__WEBPACK_IMPORTED_MODULE_2__, components_MDXComponents__WEBPACK_IMPORTED_MODULE_4__, lib_sanity_server__WEBPACK_IMPORTED_MODULE_6__, lib_mdx__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function PostPage({ post  }) {
    const StaticTweet = ({ id  })=>{
        const tweet = post.tweets.find((tweet)=>tweet.id === id);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Tweet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            ...tweet
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(layouts_blog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        post: post,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_1__.MDXRemote, {
            ...post.content,
            components: {
                ...components_MDXComponents__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                StaticTweet
            }
        })
    });
}
async function getStaticPaths() {
    const paths = await lib_sanity_server__WEBPACK_IMPORTED_MODULE_6__/* .sanityClient.fetch */ .i3.fetch(lib_queries__WEBPACK_IMPORTED_MODULE_5__/* .postSlugsQuery */ .Pk);
    return {
        paths: paths.map((slug)=>({
                params: {
                    slug
                }
            })),
        fallback: "blocking"
    };
}
async function getStaticProps({ params , preview =false  }) {
    const { post  } = await (0,lib_sanity_server__WEBPACK_IMPORTED_MODULE_6__/* .getClient */ .s3)(preview).fetch(lib_queries__WEBPACK_IMPORTED_MODULE_5__/* .postQuery */ .HF, {
        slug: params.slug
    });
    if (!post) {
        return {
            notFound: true
        };
    }
    const { html , tweetIDs , readingTime  } = await (0,lib_mdx__WEBPACK_IMPORTED_MODULE_7__/* .mdxToHtml */ .W)(post.content);
    const tweets = await (0,lib_twitter__WEBPACK_IMPORTED_MODULE_8__/* .getTweets */ .Z)(tweetIDs);
    return {
        props: {
            post: {
                ...post,
                content: html,
                tweets,
                readingTime
            }
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

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

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

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

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ 7285:
/***/ ((module) => {

module.exports = require("use-delayed-render");

/***/ }),

/***/ 9961:
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

/***/ }),

/***/ 4818:
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ 5091:
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = import("rehype-autolink-headings");;

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = import("rehype-code-titles");;

/***/ }),

/***/ 483:
/***/ ((module) => {

module.exports = import("rehype-prism-plus");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

module.exports = import("rehype-slug");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [397,66,40,721,997,841,906,118,279], () => (__webpack_exec__(8172)));
module.exports = __webpack_exports__;

})();