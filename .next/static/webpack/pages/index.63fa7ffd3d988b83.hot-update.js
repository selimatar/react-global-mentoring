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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_MovieListPage_movieListPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/MovieListPage/movieListPage */ \"./src/components/MovieListPage/movieListPage.jsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nfunction buildQuery(query, sortBy, genre) {\n    var queryParts = [];\n    if (query && query !== \"\") {\n        queryParts.push(\"search=\".concat(query, \"&searchBy=title\"));\n    }\n    if (sortBy) {\n        queryParts.push(\"sortBy=\".concat(sortBy, \"&sortOrder=desc\"));\n    }\n    if (genre.name !== \"All\") {\n        queryParts.push(\"filter=\".concat(genre.name));\n    }\n    return queryParts.join(\"&\");\n}\nvar Home = function(param) {\n    var sortBy = param.sortBy, query = param.query, genre = param.genre, initialMovies = param.initialMovies;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var query = buildQuery(query, sortBy, genre);\n        router.replace({\n            pathname: \"/\",\n            query: query ? (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, query) : {}\n        });\n    }, [\n        sortBy,\n        query,\n        genre\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MovieListPage_movieListPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        sortBy: sortBy,\n        query: query,\n        genre: genre,\n        initialMovies: initialMovies\n    }, void 0, false, {\n        fileName: \"/Users/selim_atar/developments/react/react-global-mentoring/pages/index.jsx\",\n        lineNumber: 58,\n        columnNumber: 10\n    }, _this);\n};\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDaUM7QUFnQzFFLFNBQVNHLFdBQVdDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxLQUFLO0lBQ3RDLElBQU1DLGFBQWEsRUFBRTtJQUNyQixJQUFJSCxTQUFTQSxVQUFVLElBQUk7UUFDekJHLFdBQVdDLElBQUksQ0FBQyxVQUFnQixPQUFOSixPQUFNO0lBQ2xDO0lBQ0EsSUFBSUMsUUFBUTtRQUNWRSxXQUFXQyxJQUFJLENBQUMsVUFBaUIsT0FBUEgsUUFBTztJQUNuQztJQUNBLElBQUlDLE1BQU1HLElBQUksS0FBSyxPQUFPO1FBQ3hCRixXQUFXQyxJQUFJLENBQUMsVUFBcUIsT0FBWEYsTUFBTUcsSUFBSTtJQUN0QztJQUNBLE9BQU9GLFdBQVdHLElBQUksQ0FBQztBQUN6QjtBQUVBLElBQU1DLE9BQU87UUFBRU4sZUFBQUEsUUFBUUQsY0FBQUEsT0FBT0UsY0FBQUEsT0FBT00sc0JBQUFBOztJQUVuQ1gsZ0RBQVNBLENBQUM7UUFDUixJQUFNRyxRQUFRRCxXQUFXQyxPQUFPQyxRQUFRQztRQUN4Q08sT0FBT0MsT0FBTyxDQUFDO1lBQ2JDLFVBQVU7WUFDVlgsT0FBT0EsUUFBUSxrRUFBS0EsU0FBVSxDQUFDO1FBQ2pDO0lBQ0osR0FBRztRQUFDQztRQUFRRDtRQUFPRTtLQUFNO0lBRXZCLHFCQUFPLDhEQUFDSixtRkFBYUE7UUFBQ0csUUFBUUE7UUFBUUQsT0FBT0E7UUFBT0UsT0FBT0E7UUFBT00sZUFBZUE7Ozs7OztBQUNuRjtHQVhNRDtLQUFBQTs7QUFhTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vdmllTGlzdFBhZ2UgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTW92aWVMaXN0UGFnZS9tb3ZpZUxpc3RQYWdlJztcblxuY29uc3QgZ2VucmVMaXN0ID0gW1xuICB7IG5hbWU6IFwiQWxsXCIsIGlkOiAxIH0sIFxuICB7IG5hbWU6IFwiRG9jdW1lbnRhcnlcIiwgaWQ6IDIgfSwgXG4gIHsgbmFtZTogXCJDb21lZHlcIiwgaWQ6IDMgfSwgXG4gIHsgbmFtZTogXCJIb3Jyb3JcIiwgaWQ6IDQgfVxuXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRleHRRdWVyeSAgPSBjb250ZXh0LnF1ZXJ5O1xuICBjb25zdCBzb3J0Q3JpdGVyaW9uID0gY29udGV4dFF1ZXJ5LnNvcnRDcml0ZXJpb24gfHwgJ3JlbGVhc2VfZGF0ZSc7XG4gIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gY29udGV4dFF1ZXJ5LnNlYXJjaCB8fCAnJztcbiAgY29uc3QgYWN0aXZlR2VucmUgPSBjb250ZXh0UXVlcnkuZmlsdGVyIHx8IGdlbnJlTGlzdFswXTtcblxuICBjb25zdCBxdWVyeSA9IHNlYXJjaFF1ZXJ5O1xuICBjb25zdCBzb3J0QnkgPSBzb3J0Q3JpdGVyaW9uO1xuICBjb25zdCBnZW5yZSA9IGFjdGl2ZUdlbnJlO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvbW92aWVzPyR7YnVpbGRRdWVyeShxdWVyeSwgc29ydEJ5LCBnZW5yZSl9YCk7XG4gIGNvbnN0IG1vdmllc0RhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNvcnRCeTogc29ydENyaXRlcmlvbixcbiAgICAgIHF1ZXJ5OiBzZWFyY2hRdWVyeSxcbiAgICAgIGdlbnJlOiBhY3RpdmVHZW5yZSxcbiAgICAgIGluaXRpYWxNb3ZpZXM6IG1vdmllc0RhdGEuZGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBidWlsZFF1ZXJ5KHF1ZXJ5LCBzb3J0QnksIGdlbnJlKSB7XG4gIGNvbnN0IHF1ZXJ5UGFydHMgPSBbXTtcbiAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5ICE9PSAnJykge1xuICAgIHF1ZXJ5UGFydHMucHVzaChgc2VhcmNoPSR7cXVlcnl9JnNlYXJjaEJ5PXRpdGxlYCk7XG4gIH1cbiAgaWYgKHNvcnRCeSkge1xuICAgIHF1ZXJ5UGFydHMucHVzaChgc29ydEJ5PSR7c29ydEJ5fSZzb3J0T3JkZXI9ZGVzY2ApO1xuICB9XG4gIGlmIChnZW5yZS5uYW1lICE9PSAnQWxsJykge1xuICAgIHF1ZXJ5UGFydHMucHVzaChgZmlsdGVyPSR7Z2VucmUubmFtZX1gKTtcbiAgfVxuICByZXR1cm4gcXVlcnlQYXJ0cy5qb2luKCcmJyk7XG59XG5cbmNvbnN0IEhvbWUgPSAoe3NvcnRCeSwgcXVlcnksIGdlbnJlLCBpbml0aWFsTW92aWVzfSkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBidWlsZFF1ZXJ5KHF1ZXJ5LCBzb3J0QnksIGdlbnJlKTtcbiAgICByb3V0ZXIucmVwbGFjZSh7XG4gICAgICBwYXRobmFtZTogJy8nLFxuICAgICAgcXVlcnk6IHF1ZXJ5ID8geyAuLi5xdWVyeSB9IDoge30sXG4gICAgfSk7XG59LCBbc29ydEJ5LCBxdWVyeSwgZ2VucmVdKTtcblxuICByZXR1cm4gPE1vdmllTGlzdFBhZ2Ugc29ydEJ5PXtzb3J0Qnl9IHF1ZXJ5PXtxdWVyeX0gZ2VucmU9e2dlbnJlfSBpbml0aWFsTW92aWVzPXtpbml0aWFsTW92aWVzfS8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJNb3ZpZUxpc3RQYWdlIiwiYnVpbGRRdWVyeSIsInF1ZXJ5Iiwic29ydEJ5IiwiZ2VucmUiLCJxdWVyeVBhcnRzIiwicHVzaCIsIm5hbWUiLCJqb2luIiwiSG9tZSIsImluaXRpYWxNb3ZpZXMiLCJyb3V0ZXIiLCJyZXBsYWNlIiwicGF0aG5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});