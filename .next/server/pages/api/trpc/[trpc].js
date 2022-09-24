"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/trpc/[trpc]";
exports.ids = ["pages/api/trpc/[trpc]"];
exports.modules = {

/***/ "@trpc/server":
/*!*******************************!*\
  !*** external "@trpc/server" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("@trpc/server");;

/***/ }),

/***/ "@trpc/server/adapters/next":
/*!*********************************************!*\
  !*** external "@trpc/server/adapters/next" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@trpc/server/adapters/next");;

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "(api)/./src/pages/api/trpc/[trpc].ts":
/*!**************************************!*\
  !*** ./src/pages/api/trpc/[trpc].ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appRouter\": () => (/* binding */ appRouter),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"t\": () => (/* binding */ t)\n/* harmony export */ });\n/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/server */ \"@trpc/server\");\n/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trpc/server/adapters/next */ \"@trpc/server/adapters/next\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zod */ \"zod\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server__WEBPACK_IMPORTED_MODULE_0__, _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_1__, zod__WEBPACK_IMPORTED_MODULE_2__]);\n([_trpc_server__WEBPACK_IMPORTED_MODULE_0__, _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_1__, zod__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst t = _trpc_server__WEBPACK_IMPORTED_MODULE_0__.initTRPC.create();\nconst appRouter = t.router({\n    hello: t.procedure.input(zod__WEBPACK_IMPORTED_MODULE_2__.z.object({\n        text: zod__WEBPACK_IMPORTED_MODULE_2__.z.string().nullish()\n    }).nullish()).query(({ input  })=>{\n        return {\n            greeting: `hello ${input?.text ?? \"world\"}`\n        };\n    })\n});\n// export API handler\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_1__.createNextApiHandler({\n    router: appRouter,\n    createContext: ()=>({})\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RycGMvW3RycGNdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNlO0FBQy9CO0FBRWpCLE1BQU1HLENBQUMsR0FBR0gseURBQWUsRUFBRSxDQUFDO0FBRTVCLE1BQU1LLFNBQVMsR0FBR0YsQ0FBQyxDQUFDRyxNQUFNLENBQUM7SUFDaENDLEtBQUssRUFBRUosQ0FBQyxDQUFDSyxTQUFTLENBQ2ZDLEtBQUssQ0FDSlAseUNBQ1MsQ0FBQztRQUNOUyxJQUFJLEVBQUVULHlDQUFRLEVBQUUsQ0FBQ1csT0FBTyxFQUFFO0tBQzNCLENBQUMsQ0FDREEsT0FBTyxFQUFFLENBQ2IsQ0FDQUMsS0FBSyxDQUFDLENBQUMsRUFBRUwsS0FBSyxHQUFFLEdBQUs7UUFDcEIsT0FBTztZQUNMTSxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUVOLEtBQUssRUFBRUUsSUFBSSxJQUFJLE9BQU8sQ0FBQyxDQUFDO1NBQzVDLENBQUM7SUFDSixDQUFDLENBQUM7Q0FDTCxDQUFDLENBQUM7QUFLSCxxQkFBcUI7QUFDckIsaUVBQWVWLDRFQUE2QixDQUFDO0lBQzNDSyxNQUFNLEVBQUVELFNBQVM7SUFDakJZLGFBQWEsRUFBRSxJQUFPLEdBQUU7Q0FDekIsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29kZS5pdC8uL3NyYy9wYWdlcy9hcGkvdHJwYy9bdHJwY10udHM/Y2U1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0VFJQQyB9IGZyb20gJ0B0cnBjL3NlcnZlcic7XG5pbXBvcnQgKiBhcyB0cnBjTmV4dCBmcm9tICdAdHJwYy9zZXJ2ZXIvYWRhcHRlcnMvbmV4dCc7XG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcblxuZXhwb3J0IGNvbnN0IHQgPSBpbml0VFJQQy5jcmVhdGUoKTtcblxuZXhwb3J0IGNvbnN0IGFwcFJvdXRlciA9IHQucm91dGVyKHtcbiAgaGVsbG86IHQucHJvY2VkdXJlXG4gICAgLmlucHV0KFxuICAgICAgelxuICAgICAgICAub2JqZWN0KHtcbiAgICAgICAgICB0ZXh0OiB6LnN0cmluZygpLm51bGxpc2goKSxcbiAgICAgICAgfSlcbiAgICAgICAgLm51bGxpc2goKSxcbiAgICApXG4gICAgLnF1ZXJ5KCh7IGlucHV0IH0pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGdyZWV0aW5nOiBgaGVsbG8gJHtpbnB1dD8udGV4dCA/PyAnd29ybGQnfWAsXG4gICAgICB9O1xuICAgIH0pLFxufSk7XG5cbi8vIGV4cG9ydCB0eXBlIGRlZmluaXRpb24gb2YgQVBJXG5leHBvcnQgdHlwZSBBcHBSb3V0ZXIgPSB0eXBlb2YgYXBwUm91dGVyO1xuXG4vLyBleHBvcnQgQVBJIGhhbmRsZXJcbmV4cG9ydCBkZWZhdWx0IHRycGNOZXh0LmNyZWF0ZU5leHRBcGlIYW5kbGVyKHtcbiAgcm91dGVyOiBhcHBSb3V0ZXIsXG4gIGNyZWF0ZUNvbnRleHQ6ICgpID0+ICh7fSksXG59KTsiXSwibmFtZXMiOlsiaW5pdFRSUEMiLCJ0cnBjTmV4dCIsInoiLCJ0IiwiY3JlYXRlIiwiYXBwUm91dGVyIiwicm91dGVyIiwiaGVsbG8iLCJwcm9jZWR1cmUiLCJpbnB1dCIsIm9iamVjdCIsInRleHQiLCJzdHJpbmciLCJudWxsaXNoIiwicXVlcnkiLCJncmVldGluZyIsImNyZWF0ZU5leHRBcGlIYW5kbGVyIiwiY3JlYXRlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/trpc/[trpc].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/trpc/[trpc].ts"));
module.exports = __webpack_exports__;

})();