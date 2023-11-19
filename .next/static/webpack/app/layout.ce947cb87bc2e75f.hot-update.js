"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./lib/data.ts":
/*!*********************!*\
  !*** ./lib/data.ts ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/cg */ \"(app-client)/./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ \"(app-client)/./node_modules/react-icons/lu/index.esm.js\");\n\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    },\n    {\n        name: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"B.S Degree in Computer Science\",\n        location: \"Columbia, SC\",\n        description: \"I graduated after 4 years of studying. I immediately applied to Grad school at UNL.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuGraduationCap),\n        date: \"2016 - 2020\"\n    },\n    {\n        title: \"Master's Degree in Computer Science\",\n        location: \"Lincoln, NE\",\n        description: \"My thesis while pursuing my masters was on the impact of accents on the Operation of Voice User Interfaces(VUIs).\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_2__.CgWorkAlt),\n        date: \"2020 - 2022\"\n    },\n    {\n        title: \"CBTC Integration Engineer\",\n        location: \"New York, NY\",\n        description: \"I worked at Thales, NY on improving and updating train software. Ensured trains met safety protocols for smooth revenue service in NYC.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaReact),\n        date: \"2023 - present\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"Impact of Accents on the Operation of Voice User Interfaces \",\n        description: \"Developed an interactive voice recognition software that translates spoken and recorded audio to text. \",\n        tags: [\n            \"NLP\",\n            \"Machine Learning\",\n            \"Python\",\n            \"Librosa\",\n            \"Fast API\"\n        ]\n    },\n    {\n        title: \"A Comparative Study of Six Scripts based on Extend Feature List\",\n        description: \"Conducted a comparative analysis on six scripts (Persian, Kurdish, Hebrew, Georgian, Swahili, and Egyptian Arabic) to identify shared patterns across at least 19 out of 27 alphabets by region.\",\n        tags: [\n            \"Python\",\n            \"Computational Linguistics\",\n            \"Data Mining and Analysis\",\n            \"Data Visualization\"\n        ]\n    }\n];\nconst skillsData = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"PHP\",\n    \"Python\",\n    \"C++\",\n    \"SQL\",\n    \"Node.js\",\n    \"Git\",\n    \"Matplotlib\",\n    \"NumPy\",\n    \"Librosa\",\n    \"TensorFlow\",\n    \"Data Warehouse/ETL\",\n    \"PLSQL/T-SQL\",\n    \"Power BI\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbGliL2RhdGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2lCO0FBQ0Y7QUFDUTtBQUcxQyxNQUFNSSxRQUFRO0lBQ25CO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtDQUNELENBQVU7QUFFSixNQUFNQyxrQkFBa0I7SUFDN0I7UUFDRUMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTVgsMERBQW1CLENBQUNHLDJEQUFlQTtRQUN6Q1UsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTVgsMERBQW1CLENBQUNDLHFEQUFTQTtRQUNuQ1ksTUFBTTtJQUNSO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTVgsMERBQW1CLENBQUNFLG1EQUFPQTtRQUNqQ1csTUFBTTtJQUNSO0NBQ0QsQ0FBVTtBQUVKLE1BQU1DLGVBQWU7SUFDMUI7UUFDRU4sT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFPO1lBQW9CO1lBQVU7WUFBVztTQUFXO0lBRXBFO0lBQ0E7UUFDRVAsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFVO1lBQTZCO1lBQTRCO1NBQXFCO0lBRWpHO0NBRUQsQ0FBVTtBQUVKLE1BQU1DLGFBQWE7SUFDeEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRCxDQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9kYXRhLnRzPzE2ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2dXb3JrQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL2NnXCI7XG5pbXBvcnQgeyBGYVJlYWN0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBMdUdyYWR1YXRpb25DYXAgfSBmcm9tIFwicmVhY3QtaWNvbnMvbHVcIjtcblxuXG5leHBvcnQgY29uc3QgbGlua3MgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkhvbWVcIixcbiAgICBoYXNoOiBcIiNob21lXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFib3V0XCIsXG4gICAgaGFzaDogXCIjYWJvdXRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUHJvamVjdHNcIixcbiAgICBoYXNoOiBcIiNwcm9qZWN0c1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTa2lsbHNcIixcbiAgICBoYXNoOiBcIiNza2lsbHNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRXhwZXJpZW5jZVwiLFxuICAgIGhhc2g6IFwiI2V4cGVyaWVuY2VcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ29udGFjdFwiLFxuICAgIGhhc2g6IFwiI2NvbnRhY3RcIixcbiAgfSxcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBleHBlcmllbmNlc0RhdGEgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJCLlMgRGVncmVlIGluIENvbXB1dGVyIFNjaWVuY2VcIixcbiAgICBsb2NhdGlvbjogXCJDb2x1bWJpYSwgU0NcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSSBncmFkdWF0ZWQgYWZ0ZXIgNCB5ZWFycyBvZiBzdHVkeWluZy4gSSBpbW1lZGlhdGVseSBhcHBsaWVkIHRvIEdyYWQgc2Nob29sIGF0IFVOTC5cIixcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KEx1R3JhZHVhdGlvbkNhcCksXG4gICAgZGF0ZTogXCIyMDE2IC0gMjAyMFwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTWFzdGVyJ3MgRGVncmVlIGluIENvbXB1dGVyIFNjaWVuY2VcIixcbiAgICBsb2NhdGlvbjogXCJMaW5jb2xuLCBORVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJNeSB0aGVzaXMgd2hpbGUgcHVyc3VpbmcgbXkgbWFzdGVycyB3YXMgb24gdGhlIGltcGFjdCBvZiBhY2NlbnRzIG9uIHRoZSBPcGVyYXRpb24gb2YgVm9pY2UgVXNlciBJbnRlcmZhY2VzKFZVSXMpLlwiLFxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2dXb3JrQWx0KSxcbiAgICBkYXRlOiBcIjIwMjAgLSAyMDIyXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDQlRDIEludGVncmF0aW9uIEVuZ2luZWVyXCIsXG4gICAgbG9jYXRpb246IFwiTmV3IFlvcmssIE5ZXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkkgd29ya2VkIGF0IFRoYWxlcywgTlkgb24gaW1wcm92aW5nIGFuZCB1cGRhdGluZyB0cmFpbiBzb2Z0d2FyZS4gRW5zdXJlZCB0cmFpbnMgbWV0IHNhZmV0eSBwcm90b2NvbHMgZm9yIHNtb290aCByZXZlbnVlIHNlcnZpY2UgaW4gTllDLlwiLFxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmFSZWFjdCksXG4gICAgZGF0ZTogXCIyMDIzIC0gcHJlc2VudFwiLFxuICB9LFxuXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzRGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkltcGFjdCBvZiBBY2NlbnRzIG9uIHRoZSBPcGVyYXRpb24gb2YgVm9pY2UgVXNlciBJbnRlcmZhY2VzIFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJEZXZlbG9wZWQgYW4gaW50ZXJhY3RpdmUgdm9pY2UgcmVjb2duaXRpb24gc29mdHdhcmUgdGhhdCB0cmFuc2xhdGVzIHNwb2tlbiBhbmQgcmVjb3JkZWQgYXVkaW8gdG8gdGV4dC4gXCIsXG4gICAgdGFnczogW1wiTkxQXCIsIFwiTWFjaGluZSBMZWFybmluZ1wiLCBcIlB5dGhvblwiLCBcIkxpYnJvc2FcIiwgXCJGYXN0IEFQSVwiXSxcbiAgICBcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkEgQ29tcGFyYXRpdmUgU3R1ZHkgb2YgU2l4IFNjcmlwdHMgYmFzZWQgb24gRXh0ZW5kIEZlYXR1cmUgTGlzdFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJDb25kdWN0ZWQgYSBjb21wYXJhdGl2ZSBhbmFseXNpcyBvbiBzaXggc2NyaXB0cyAoUGVyc2lhbiwgS3VyZGlzaCwgSGVicmV3LCBHZW9yZ2lhbiwgU3dhaGlsaSwgYW5kIEVneXB0aWFuIEFyYWJpYykgdG8gaWRlbnRpZnkgc2hhcmVkIHBhdHRlcm5zIGFjcm9zcyBhdCBsZWFzdCAxOSBvdXQgb2YgMjcgYWxwaGFiZXRzIGJ5IHJlZ2lvbi5cIixcbiAgICB0YWdzOiBbXCJQeXRob25cIiwgXCJDb21wdXRhdGlvbmFsIExpbmd1aXN0aWNzXCIsIFwiRGF0YSBNaW5pbmcgYW5kIEFuYWx5c2lzXCIsIFwiRGF0YSBWaXN1YWxpemF0aW9uXCJdLFxuICBcbiAgfSxcblxuXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IHNraWxsc0RhdGEgPSBbXG4gIFwiSFRNTFwiLFxuICBcIkNTU1wiLFxuICBcIkphdmFTY3JpcHRcIixcbiAgXCJQSFBcIixcbiAgXCJQeXRob25cIixcbiAgXCJDKytcIixcbiAgXCJTUUxcIixcbiAgXCJOb2RlLmpzXCIsXG4gIFwiR2l0XCIsXG4gIFwiTWF0cGxvdGxpYlwiLFxuICBcIk51bVB5XCIsXG4gIFwiTGlicm9zYVwiLFxuICBcIlRlbnNvckZsb3dcIixcbiAgXCJEYXRhIFdhcmVob3VzZS9FVExcIixcbiAgXCJQTFNRTC9ULVNRTFwiLFxuICBcIlBvd2VyIEJJXCIsXG5dIGFzIGNvbnN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2dXb3JrQWx0IiwiRmFSZWFjdCIsIkx1R3JhZHVhdGlvbkNhcCIsImxpbmtzIiwibmFtZSIsImhhc2giLCJleHBlcmllbmNlc0RhdGEiLCJ0aXRsZSIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY3JlYXRlRWxlbWVudCIsImRhdGUiLCJwcm9qZWN0c0RhdGEiLCJ0YWdzIiwic2tpbGxzRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./lib/data.ts\n"));

/***/ })

});