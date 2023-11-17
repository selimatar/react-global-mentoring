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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_MovieListPage_movieListPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/MovieListPage/movieListPage */ \"./src/components/MovieListPage/movieListPage.jsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar genreList = [\n    {\n        name: \"All\",\n        id: 1\n    },\n    {\n        name: \"Documentary\",\n        id: 2\n    },\n    {\n        name: \"Comedy\",\n        id: 3\n    },\n    {\n        name: \"Horror\",\n        id: 4\n    }\n];\nvar Home = function(param) {\n    var sortBy = param.sortBy, query = param.query, genre = param.genre, initialMovies = param.initialMovies;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var query = buildQuery(query, sortBy, genre);\n        router.replace({\n            pathname: \"/\",\n            query: query ? (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__._)({}, query) : {}\n        });\n    }, [\n        sortBy,\n        query,\n        genre\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MovieListPage_movieListPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sortBy: sortBy,\n        query: query,\n        genre: genre,\n        initialMovies: initialMovies\n    }, void 0, false, {\n        fileName: \"/Users/selim_atar/developments/react/react-global-mentoring/pages/index.jsx\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, _this);\n};\n_s(Home, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nHome.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__._)(function(param) {\n        var query, sortCriterion, searchQuery, activeGenre, res, moviesData;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    query = param.query;\n                    sortCriterion = query.sortCriterion || \"release_date\";\n                    searchQuery = query.searchQuery || \"\";\n                    activeGenre = query.activeGenre || genreList[0];\n                    return [\n                        4,\n                        fetch(\"http://localhost:4000/movies?\".concat(buildQuery(searchQuery, sortCriterion, activeGenre)))\n                    ];\n                case 1:\n                    res = _state.sent();\n                    return [\n                        4,\n                        res.json()\n                    ];\n                case 2:\n                    moviesData = _state.sent();\n                    return [\n                        2,\n                        {\n                            sortBy: sortCriterion,\n                            query: searchQuery,\n                            genre: activeGenre,\n                            initialMovies: moviesData.data\n                        }\n                    ];\n            }\n        });\n    });\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\nfunction buildQuery(query, sortBy, genre) {\n    var queryParts = [];\n    if (query && query !== \"\") {\n        queryParts.push(\"search=\".concat(query, \"&searchBy=title\"));\n    }\n    if (sortBy) {\n        queryParts.push(\"sortBy=\".concat(sortBy, \"&sortOrder=desc\"));\n    }\n    if (genre && genre.name && genre.name !== \"All\") {\n        queryParts.push(\"filter=\".concat(genre.name));\n    }\n    return queryParts.join(\"&\");\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDRDtBQUNrQztBQUUxRSxJQUFNSSxZQUFZO0lBQ2hCO1FBQUVDLE1BQU07UUFBT0MsSUFBSTtJQUFFO0lBQ3JCO1FBQUVELE1BQU07UUFBZUMsSUFBSTtJQUFFO0lBQzdCO1FBQUVELE1BQU07UUFBVUMsSUFBSTtJQUFFO0lBQ3hCO1FBQUVELE1BQU07UUFBVUMsSUFBSTtJQUFFO0NBQ3pCO0FBRUQsSUFBTUMsT0FBTztRQUFHQyxlQUFBQSxRQUFRQyxjQUFBQSxPQUFPQyxjQUFBQSxPQUFPQyxzQkFBQUE7O0lBQ3BDLElBQU1DLFNBQVNWLHNEQUFTQTtJQUV4QkQsZ0RBQVNBLENBQUM7UUFDUixJQUFNUSxRQUFRSSxXQUFXSixPQUFPRCxRQUFRRTtRQUN4Q0UsT0FBT0UsT0FBTyxDQUFDO1lBQ2JDLFVBQVU7WUFDVk4sT0FBT0EsUUFBUSxrRUFBS0EsU0FBVSxDQUFDO1FBQ2pDO0lBQ0YsR0FBRztRQUFDRDtRQUFRQztRQUFPQztLQUFNO0lBRXpCLHFCQUFPLDhEQUFDUCxtRkFBYUE7UUFBQ0ssUUFBUUE7UUFBUUMsT0FBT0E7UUFBT0MsT0FBT0E7UUFBT0MsZUFBZUE7Ozs7OztBQUNuRjtHQVpNSjs7UUFDV0wsa0RBQVNBOzs7S0FEcEJLO0FBY05BLEtBQUtTLGVBQWU7ZUFBRztZQUFTUCxPQUN4QlEsZUFDQUMsYUFDQUMsYUFFQUMsS0FDQUM7Ozs7b0JBTndCWixjQUFBQTtvQkFDeEJRLGdCQUFnQlIsTUFBTVEsYUFBYSxJQUFJO29CQUN2Q0MsY0FBY1QsTUFBTVMsV0FBVyxJQUFJO29CQUNuQ0MsY0FBY1YsTUFBTVUsV0FBVyxJQUFJZixTQUFTLENBQUMsRUFBRTtvQkFFekM7O3dCQUFNa0IsTUFBTSxnQ0FBb0YsT0FBcERULFdBQVdLLGFBQWFELGVBQWVFOzs7b0JBQXpGQyxNQUFNO29CQUNPOzt3QkFBTUEsSUFBSUcsSUFBSTs7O29CQUEzQkYsYUFBYTtvQkFFbkI7O3dCQUFPOzRCQUNMYixRQUFRUzs0QkFDUlIsT0FBT1M7NEJBQ1BSLE9BQU9TOzRCQUNQUixlQUFlVSxXQUFXRyxJQUFJO3dCQUNoQzs7OztJQUNGOzs7OztBQUVBLFNBQVNYLFdBQVdKLEtBQUssRUFBRUQsTUFBTSxFQUFFRSxLQUFLO0lBQ3RDLElBQU1lLGFBQWEsRUFBRTtJQUNyQixJQUFJaEIsU0FBU0EsVUFBVSxJQUFJO1FBQ3pCZ0IsV0FBV0MsSUFBSSxDQUFDLFVBQWdCLE9BQU5qQixPQUFNO0lBQ2xDO0lBQ0EsSUFBSUQsUUFBUTtRQUNWaUIsV0FBV0MsSUFBSSxDQUFDLFVBQWlCLE9BQVBsQixRQUFPO0lBQ25DO0lBQ0EsSUFBSUUsU0FBU0EsTUFBTUwsSUFBSSxJQUFJSyxNQUFNTCxJQUFJLEtBQUssT0FBTztRQUMvQ29CLFdBQVdDLElBQUksQ0FBQyxVQUFxQixPQUFYaEIsTUFBTUwsSUFBSTtJQUN0QztJQUNBLE9BQU9vQixXQUFXRSxJQUFJLENBQUM7QUFDekI7QUFFQSwrREFBZXBCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBNb3ZpZUxpc3RQYWdlIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdFBhZ2UvbW92aWVMaXN0UGFnZSc7XG5cbmNvbnN0IGdlbnJlTGlzdCA9IFtcbiAgeyBuYW1lOiBcIkFsbFwiLCBpZDogMSB9LCBcbiAgeyBuYW1lOiBcIkRvY3VtZW50YXJ5XCIsIGlkOiAyIH0sIFxuICB7IG5hbWU6IFwiQ29tZWR5XCIsIGlkOiAzIH0sIFxuICB7IG5hbWU6IFwiSG9ycm9yXCIsIGlkOiA0IH1cbl07XG5cbmNvbnN0IEhvbWUgPSAoeyBzb3J0QnksIHF1ZXJ5LCBnZW5yZSwgaW5pdGlhbE1vdmllcyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBidWlsZFF1ZXJ5KHF1ZXJ5LCBzb3J0QnksIGdlbnJlKTtcbiAgICByb3V0ZXIucmVwbGFjZSh7XG4gICAgICBwYXRobmFtZTogJy8nLFxuICAgICAgcXVlcnk6IHF1ZXJ5ID8geyAuLi5xdWVyeSB9IDoge30sXG4gICAgfSk7XG4gIH0sIFtzb3J0QnksIHF1ZXJ5LCBnZW5yZV0pO1xuXG4gIHJldHVybiA8TW92aWVMaXN0UGFnZSBzb3J0Qnk9e3NvcnRCeX0gcXVlcnk9e3F1ZXJ5fSBnZW5yZT17Z2VucmV9IGluaXRpYWxNb3ZpZXM9e2luaXRpYWxNb3ZpZXN9IC8+O1xufTtcblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IHNvcnRDcml0ZXJpb24gPSBxdWVyeS5zb3J0Q3JpdGVyaW9uIHx8ICdyZWxlYXNlX2RhdGUnO1xuICBjb25zdCBzZWFyY2hRdWVyeSA9IHF1ZXJ5LnNlYXJjaFF1ZXJ5IHx8ICcnO1xuICBjb25zdCBhY3RpdmVHZW5yZSA9IHF1ZXJ5LmFjdGl2ZUdlbnJlIHx8IGdlbnJlTGlzdFswXTtcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL21vdmllcz8ke2J1aWxkUXVlcnkoc2VhcmNoUXVlcnksIHNvcnRDcml0ZXJpb24sIGFjdGl2ZUdlbnJlKX1gKTtcbiAgY29uc3QgbW92aWVzRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBzb3J0Qnk6IHNvcnRDcml0ZXJpb24sXG4gICAgcXVlcnk6IHNlYXJjaFF1ZXJ5LFxuICAgIGdlbnJlOiBhY3RpdmVHZW5yZSxcbiAgICBpbml0aWFsTW92aWVzOiBtb3ZpZXNEYXRhLmRhdGEsXG4gIH07XG59O1xuXG5mdW5jdGlvbiBidWlsZFF1ZXJ5KHF1ZXJ5LCBzb3J0QnksIGdlbnJlKSB7XG4gIGNvbnN0IHF1ZXJ5UGFydHMgPSBbXTtcbiAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5ICE9PSAnJykge1xuICAgIHF1ZXJ5UGFydHMucHVzaChgc2VhcmNoPSR7cXVlcnl9JnNlYXJjaEJ5PXRpdGxlYCk7XG4gIH1cbiAgaWYgKHNvcnRCeSkge1xuICAgIHF1ZXJ5UGFydHMucHVzaChgc29ydEJ5PSR7c29ydEJ5fSZzb3J0T3JkZXI9ZGVzY2ApO1xuICB9XG4gIGlmIChnZW5yZSAmJiBnZW5yZS5uYW1lICYmIGdlbnJlLm5hbWUgIT09ICdBbGwnKSB7XG4gICAgcXVlcnlQYXJ0cy5wdXNoKGBmaWx0ZXI9JHtnZW5yZS5uYW1lfWApO1xuICB9XG4gIHJldHVybiBxdWVyeVBhcnRzLmpvaW4oJyYnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJNb3ZpZUxpc3RQYWdlIiwiZ2VucmVMaXN0IiwibmFtZSIsImlkIiwiSG9tZSIsInNvcnRCeSIsInF1ZXJ5IiwiZ2VucmUiLCJpbml0aWFsTW92aWVzIiwicm91dGVyIiwiYnVpbGRRdWVyeSIsInJlcGxhY2UiLCJwYXRobmFtZSIsImdldEluaXRpYWxQcm9wcyIsInNvcnRDcml0ZXJpb24iLCJzZWFyY2hRdWVyeSIsImFjdGl2ZUdlbnJlIiwicmVzIiwibW92aWVzRGF0YSIsImZldGNoIiwianNvbiIsImRhdGEiLCJxdWVyeVBhcnRzIiwicHVzaCIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});