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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_MovieListPage_movieListPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/MovieListPage/movieListPage */ \"./src/components/MovieListPage/movieListPage.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nfunction buildQuery(query1, sortBy1, genre1) {\n    var queryParts = [];\n    if (query1 && query1 !== \"\") {\n        queryParts.push(\"search=\".concat(query1, \"&searchBy=title\"));\n    }\n    if (sortBy1) {\n        queryParts.push(\"sortBy=\".concat(sortBy1, \"&sortOrder=desc\"));\n    }\n    if (genre1.name !== \"All\") {\n        queryParts.push(\"filter=\".concat(genre1.name));\n    }\n    return queryParts.join(\"&\");\n}\nvar router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n    // Pushing a default query to the index page\n    router.push({\n        pathname: \"/\",\n        query: buildQuery(sortBy, query, genre)\n    });\n}, [\n    router\n]);\nvar Home = function(param) {\n    var sortBy1 = param.sortBy, query1 = param.query, genre1 = param.genre, initialMovies = param.initialMovies;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MovieListPage_movieListPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        sortBy: sortBy1,\n        query: query1,\n        genre: genre1,\n        initialMovies: initialMovies\n    }, void 0, false, {\n        fileName: \"/Users/selim_atar/developments/react/react-global-mentoring/pages/index.jsx\",\n        lineNumber: 62,\n        columnNumber: 10\n    }, _this);\n};\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNpQztBQUNsQztBQWdDeEMsU0FBU0ksV0FBV0MsTUFBSyxFQUFFQyxPQUFNLEVBQUVDLE1BQUs7SUFDdEMsSUFBTUMsYUFBYSxFQUFFO0lBQ3JCLElBQUlILFVBQVNBLFdBQVUsSUFBSTtRQUN6QkcsV0FBV0MsSUFBSSxDQUFDLFVBQWdCLE9BQU5KLFFBQU07SUFDbEM7SUFDQSxJQUFJQyxTQUFRO1FBQ1ZFLFdBQVdDLElBQUksQ0FBQyxVQUFpQixPQUFQSCxTQUFPO0lBQ25DO0lBQ0EsSUFBSUMsT0FBTUcsSUFBSSxLQUFLLE9BQU87UUFDeEJGLFdBQVdDLElBQUksQ0FBQyxVQUFxQixPQUFYRixPQUFNRyxJQUFJO0lBQ3RDO0lBQ0EsT0FBT0YsV0FBV0csSUFBSSxDQUFDO0FBQ3pCO0FBRUEsSUFBTUMsU0FBU1Qsc0RBQVNBO0FBRXhCRixnREFBU0EsQ0FBQztJQUNSLDRDQUE0QztJQUM1Q1csT0FBT0gsSUFBSSxDQUFDO1FBQ1ZJLFVBQVU7UUFDVlIsT0FBT0QsV0FBV0UsUUFBUUQsT0FBT0U7SUFDbkM7QUFFRixHQUFHO0lBQUNLO0NBQU87QUFFWCxJQUFNRSxPQUFPO1FBQUVSLGdCQUFBQSxRQUFRRCxlQUFBQSxPQUFPRSxlQUFBQSxPQUFPUSxzQkFBQUE7SUFFbkMscUJBQU8sOERBQUNiLG1GQUFhQTtRQUFDSSxRQUFRQTtRQUFRRCxPQUFPQTtRQUFPRSxPQUFPQTtRQUFPUSxlQUFlQTs7Ozs7O0FBQ25GO0tBSE1EOztBQUtOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW92aWVMaXN0UGFnZSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Nb3ZpZUxpc3RQYWdlL21vdmllTGlzdFBhZ2UnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBnZW5yZUxpc3QgPSBbXG4gIHsgbmFtZTogXCJBbGxcIiwgaWQ6IDEgfSwgXG4gIHsgbmFtZTogXCJEb2N1bWVudGFyeVwiLCBpZDogMiB9LCBcbiAgeyBuYW1lOiBcIkNvbWVkeVwiLCBpZDogMyB9LCBcbiAgeyBuYW1lOiBcIkhvcnJvclwiLCBpZDogNCB9XG5dO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgY29udGV4dFF1ZXJ5ICA9IGNvbnRleHQucXVlcnk7XG4gIGNvbnN0IHNvcnRDcml0ZXJpb24gPSBjb250ZXh0UXVlcnkuc29ydENyaXRlcmlvbiB8fCAncmVsZWFzZV9kYXRlJztcbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSBjb250ZXh0UXVlcnkuc2VhcmNoIHx8ICcnO1xuICBjb25zdCBhY3RpdmVHZW5yZSA9IGNvbnRleHRRdWVyeS5maWx0ZXIgfHwgZ2VucmVMaXN0WzBdO1xuXG4gIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUXVlcnk7XG4gIGNvbnN0IHNvcnRCeSA9IHNvcnRDcml0ZXJpb247XG4gIGNvbnN0IGdlbnJlID0gYWN0aXZlR2VucmU7XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9tb3ZpZXM/JHtidWlsZFF1ZXJ5KHF1ZXJ5LCBzb3J0QnksIGdlbnJlKX1gKTtcbiAgY29uc3QgbW92aWVzRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc29ydEJ5OiBzb3J0Q3JpdGVyaW9uLFxuICAgICAgcXVlcnk6IHNlYXJjaFF1ZXJ5LFxuICAgICAgZ2VucmU6IGFjdGl2ZUdlbnJlLFxuICAgICAgaW5pdGlhbE1vdmllczogbW92aWVzRGF0YS5kYXRhLFxuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUXVlcnkocXVlcnksIHNvcnRCeSwgZ2VucmUpIHtcbiAgY29uc3QgcXVlcnlQYXJ0cyA9IFtdO1xuICBpZiAocXVlcnkgJiYgcXVlcnkgIT09ICcnKSB7XG4gICAgcXVlcnlQYXJ0cy5wdXNoKGBzZWFyY2g9JHtxdWVyeX0mc2VhcmNoQnk9dGl0bGVgKTtcbiAgfVxuICBpZiAoc29ydEJ5KSB7XG4gICAgcXVlcnlQYXJ0cy5wdXNoKGBzb3J0Qnk9JHtzb3J0Qnl9JnNvcnRPcmRlcj1kZXNjYCk7XG4gIH1cbiAgaWYgKGdlbnJlLm5hbWUgIT09ICdBbGwnKSB7XG4gICAgcXVlcnlQYXJ0cy5wdXNoKGBmaWx0ZXI9JHtnZW5yZS5uYW1lfWApO1xuICB9XG4gIHJldHVybiBxdWVyeVBhcnRzLmpvaW4oJyYnKTtcbn1cblxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vIFB1c2hpbmcgYSBkZWZhdWx0IHF1ZXJ5IHRvIHRoZSBpbmRleCBwYWdlXG4gIHJvdXRlci5wdXNoKHtcbiAgICBwYXRobmFtZTogJy8nLFxuICAgIHF1ZXJ5OiBidWlsZFF1ZXJ5KHNvcnRCeSwgcXVlcnksIGdlbnJlKSwgLy8gU2V0IHlvdXIgZGVmYXVsdCBxdWVyeSBwYXJhbWV0ZXJzIGhlcmVcbiAgfSk7XG5cbn0sIFtyb3V0ZXJdKTtcblxuY29uc3QgSG9tZSA9ICh7c29ydEJ5LCBxdWVyeSwgZ2VucmUsIGluaXRpYWxNb3ZpZXN9KSA9PiB7XG5cbiAgcmV0dXJuIDxNb3ZpZUxpc3RQYWdlIHNvcnRCeT17c29ydEJ5fSBxdWVyeT17cXVlcnl9IGdlbnJlPXtnZW5yZX0gaW5pdGlhbE1vdmllcz17aW5pdGlhbE1vdmllc30vPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTW92aWVMaXN0UGFnZSIsInVzZVJvdXRlciIsImJ1aWxkUXVlcnkiLCJxdWVyeSIsInNvcnRCeSIsImdlbnJlIiwicXVlcnlQYXJ0cyIsInB1c2giLCJuYW1lIiwiam9pbiIsInJvdXRlciIsInBhdGhuYW1lIiwiSG9tZSIsImluaXRpYWxNb3ZpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});