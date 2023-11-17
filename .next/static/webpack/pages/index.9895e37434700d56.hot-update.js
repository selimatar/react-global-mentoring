"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Genre/genreSelect.jsx":
/*!**********************************************!*\
  !*** ./src/components/Genre/genreSelect.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _genre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genre */ \"./src/components/Genre/genre.jsx\");\n/* harmony import */ var _genre_list_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./genre-list.module.css */ \"./src/components/Genre/genre-list.module.css\");\n/* harmony import */ var _genre_list_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_genre_list_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _genre_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./genre.module.css */ \"./src/components/Genre/genre.module.css\");\n/* harmony import */ var _genre_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_genre_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar GenreSelect = function(param) {\n    var genreList = param.genreList, activeGenre = param.activeGenre, setActiveGenre = param.setActiveGenre;\n    _s();\n    var checkActive = function(index, className) {\n        return activeGenre.id === index ? className : \"\";\n    };\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var handleGenreClick = function(genre) {\n        setActiveGenre(genre);\n        // Push the updated active genre to the URL\n        router.push({\n            pathname: \"/\",\n            query: (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__._)({}, router.query), {\n                activeGenre: genre.name\n            })\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"50%\",\n            margin: 40\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_genre_list_module_css__WEBPACK_IMPORTED_MODULE_5___default().tabs),\n                children: genreList && genreList.map(function(genre) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_genre__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        genre: genre,\n                        checkActive: checkActive,\n                        handleChangeGenre: function() {\n                            return handleGenreClick(genre);\n                        }\n                    }, genre.id, false, {\n                        fileName: \"/Users/selim_atar/developments/react/react-global-mentoring/src/components/Genre/genreSelect.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 28\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/selim_atar/developments/react/react-global-mentoring/src/components/Genre/genreSelect.jsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"panels\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_genre_module_css__WEBPACK_IMPORTED_MODULE_6___default().panel), \" \").concat(checkActive(activeGenre.id, (_genre_module_css__WEBPACK_IMPORTED_MODULE_6___default().panelActive))),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        title: activeGenre.name,\n                        children: activeGenre.name\n                    }, void 0, false, {\n                        fileName: \"/Users/selim_atar/developments/react/react-global-mentoring/src/components/Genre/genreSelect.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/selim_atar/developments/react/react-global-mentoring/src/components/Genre/genreSelect.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/selim_atar/developments/react/react-global-mentoring/src/components/Genre/genreSelect.jsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/selim_atar/developments/react/react-global-mentoring/src/components/Genre/genreSelect.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, _this);\n};\n_s(GenreSelect, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = GenreSelect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GenreSelect);\nvar _c;\n$RefreshReg$(_c, \"GenreSelect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HZW5yZS9nZW5yZVNlbGVjdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDNEI7QUFDWDtBQUNMO0FBRXhDLElBQU1JLGNBQWM7UUFBR0Msa0JBQUFBLFdBQVdDLG9CQUFBQSxhQUFhQyx1QkFBQUE7O0lBQzNDLElBQU1DLGNBQWMsU0FBQ0MsT0FBT0M7ZUFBY0osWUFBWUssRUFBRSxLQUFLRixRQUFRQyxZQUFZOztJQUNqRixJQUFNRSxTQUFTVCxzREFBU0E7SUFFeEIsSUFBTVUsbUJBQW1CLFNBQUNDO1FBQ3RCUCxlQUFlTztRQUNmLDJDQUEyQztRQUMzQ0YsT0FBT0csSUFBSSxDQUFDO1lBQ1ZDLFVBQVU7WUFDVkMsT0FBTyxzSUFBS0wsT0FBT0ssS0FBSztnQkFBRVgsYUFBYVEsTUFBTUksSUFBSTs7UUFDbkQ7SUFDSjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxPQUFPO1lBQUVDLE9BQU87WUFBT0MsUUFBUTtRQUFHOzswQkFDbkMsOERBQUNIO2dCQUFJVCxXQUFXVCxvRUFBc0I7MEJBQ2pDSSxhQUFhQSxVQUFVbUIsR0FBRyxDQUFDLFNBQUNWO29CQUN6QixxQkFBTyw4REFBQ2QsOENBQUtBO3dCQUFnQmMsT0FBT0E7d0JBQU9OLGFBQWFBO3dCQUFhaUIsbUJBQW1CO21DQUFNWixpQkFBaUJDOzt1QkFBNUZBLE1BQU1ILEVBQUU7Ozs7O2dCQUMvQjs7Ozs7OzBCQUVKLDhEQUFDUTtnQkFBSVQsV0FBVTswQkFDWCw0RUFBQ1M7b0JBQUlULFdBQVcsR0FBd0JGLE9BQXJCTixnRUFBaUIsRUFBQyxLQUF3RCxPQUFyRE0sWUFBWUYsWUFBWUssRUFBRSxFQUFFVCxzRUFBdUI7OEJBQ3ZGLDRFQUFDMEI7d0JBQUVDLE9BQU92QixZQUFZWSxJQUFJO2tDQUFHWixZQUFZWSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pFO0dBM0JNZDs7UUFFYUQsa0RBQVNBOzs7S0FGdEJDO0FBNkJOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0dlbnJlL2dlbnJlU2VsZWN0LmpzeD8xNjMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHZW5yZSBmcm9tICcuL2dlbnJlJztcbmltcG9ydCBnZW5yZVNlbGVjdFN0eWxlcyBmcm9tICcuL2dlbnJlLWxpc3QubW9kdWxlLmNzcyc7XG5pbXBvcnQgZ2VucmVTdHlsZXMgZnJvbSAnLi9nZW5yZS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgR2VucmVTZWxlY3QgPSAoeyBnZW5yZUxpc3QsIGFjdGl2ZUdlbnJlLCBzZXRBY3RpdmVHZW5yZSB9KSA9PiB7XG4gICAgY29uc3QgY2hlY2tBY3RpdmUgPSAoaW5kZXgsIGNsYXNzTmFtZSkgPT4gYWN0aXZlR2VucmUuaWQgPT09IGluZGV4ID8gY2xhc3NOYW1lIDogXCJcIjtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGhhbmRsZUdlbnJlQ2xpY2sgPSAoZ2VucmUpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlR2VucmUoZ2VucmUpO1xuICAgICAgICAvLyBQdXNoIHRoZSB1cGRhdGVkIGFjdGl2ZSBnZW5yZSB0byB0aGUgVVJMXG4gICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICBwYXRobmFtZTogJy8nLFxuICAgICAgICAgIHF1ZXJ5OiB7IC4uLnJvdXRlci5xdWVyeSwgYWN0aXZlR2VucmU6IGdlbnJlLm5hbWUgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIsIG1hcmdpbjogNDAgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2VucmVTZWxlY3RTdHlsZXMudGFic30+XG4gICAgICAgICAgICAgICAge2dlbnJlTGlzdCAmJiBnZW5yZUxpc3QubWFwKChnZW5yZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEdlbnJlIGtleT17Z2VucmUuaWR9IGdlbnJlPXtnZW5yZX0gY2hlY2tBY3RpdmU9e2NoZWNrQWN0aXZlfSBoYW5kbGVDaGFuZ2VHZW5yZT17KCkgPT4gaGFuZGxlR2VucmVDbGljayhnZW5yZSl9IC8+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2dlbnJlU3R5bGVzLnBhbmVsfSAke2NoZWNrQWN0aXZlKGFjdGl2ZUdlbnJlLmlkLCBnZW5yZVN0eWxlcy5wYW5lbEFjdGl2ZSl9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxwIHRpdGxlPXthY3RpdmVHZW5yZS5uYW1lfT57YWN0aXZlR2VucmUubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VucmVTZWxlY3Q7Il0sIm5hbWVzIjpbIkdlbnJlIiwiZ2VucmVTZWxlY3RTdHlsZXMiLCJnZW5yZVN0eWxlcyIsInVzZVJvdXRlciIsIkdlbnJlU2VsZWN0IiwiZ2VucmVMaXN0IiwiYWN0aXZlR2VucmUiLCJzZXRBY3RpdmVHZW5yZSIsImNoZWNrQWN0aXZlIiwiaW5kZXgiLCJjbGFzc05hbWUiLCJpZCIsInJvdXRlciIsImhhbmRsZUdlbnJlQ2xpY2siLCJnZW5yZSIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwibmFtZSIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJtYXJnaW4iLCJ0YWJzIiwibWFwIiwiaGFuZGxlQ2hhbmdlR2VucmUiLCJwYW5lbCIsInBhbmVsQWN0aXZlIiwicCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Genre/genreSelect.jsx\n"));

/***/ })

});