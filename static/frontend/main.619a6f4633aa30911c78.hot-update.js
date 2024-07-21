"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateweb_player_frontend"]("main",{

/***/ "./src/components/InputContainer.js":
/*!******************************************!*\
  !*** ./src/components/InputContainer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _GlobalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GlobalContext */ \"./src/GlobalContext.js\");\n\n\nvar InputContainer = function InputContainer() {\n  var _useGlobal = (0,_GlobalContext__WEBPACK_IMPORTED_MODULE_1__.useGlobal)(),\n    setSharedData = _useGlobal.setSharedData;\n  var handleChange = function handleChange(event) {\n    setText(event.target.value);\n  };\n  var handleKeyDown = function handleKeyDown(event) {\n    if (event.key === 'Enter') {\n      setSharedData('Enter is pressed!');\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"textarea\", {\n    value: text,\n    onChange: handleChange,\n    onKeyDown: handleKeyDown,\n    placeholder: \"Type the name of the song and the artist, and hit `Enter`.\",\n    rows: \"4\",\n    cols: \"50\"\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputContainer);\n\n//# sourceURL=webpack://web_player_frontend/./src/components/InputContainer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _components_ChatBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ChatBox */ \"./src/components/ChatBox.js\");\n/* harmony import */ var _components_ChatBox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_ChatBox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_InputContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/InputContainer */ \"./src/components/InputContainer.js\");\n/* harmony import */ var _GlobalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GlobalContext */ \"./src/GlobalContext.js\");\n/* harmony import */ var _static_css_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/css/index.css */ \"./static/css/index.css\");\n\n\n\n\n\n\nvar container = document.getElementById('root');\nvar root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);\nroot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GlobalContext__WEBPACK_IMPORTED_MODULE_4__.GlobalProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  id: \"chat-box\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_components_ChatBox__WEBPACK_IMPORTED_MODULE_2___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  id: \"input-container\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_InputContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))));\n\n//# sourceURL=webpack://web_player_frontend/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d942431091fcdf72b181")
/******/ })();
/******/ 
/******/ }
);