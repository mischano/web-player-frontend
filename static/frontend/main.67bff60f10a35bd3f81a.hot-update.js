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

/***/ "./src/components/AudioFetcher.js":
/*!****************************************!*\
  !*** ./src/components/AudioFetcher.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// import { useGlobal } from \"../GlobalContext\";\n\nvar AudioFetcher = function AudioFetcher(_ref) {\n  var setLoading = _ref.setLoading,\n    setError = _ref.setError,\n    userMessage = _ref.userMessage;\n  // const { sharedMessage } = useGlobal();\n\n  if (userMessage) {\n    console.log(userMessage);\n  }\n\n  // useEffect(() => {\n  //   const audioFetcher = async () => {\n  //     setLoading(true);\n  //     setError(null);\n\n  //     try {\n  //       const fetchResult = await fetchAudio(sharedMessage);\n  //       setSharedFetchResult(fetchResult);\n  //     } catch (err) {\n  //       setError(err.message);\n  //     } finally {\n  //       setLoading(false);\n  //     }\n  //   };\n\n  //   if (sharedMessage) {\n  //     audioFetcher();\n  //   }\n\n  // }, [sharedMessage, setSharedFetchResult, setLoading, setError]);\n\n  // return null;\n};\n\n// const fetchAudio = async (requestedAudio) => {\n//   if (!requestedAudio|| typeof requestedAudio !== 'string') {\n//     throw new Error('Invalid text parameter');\n//   }\n\n//   try {\n//     const response = await axios.get(`http://localhost:8000/api/search-audio-url/`, {\n//       params: { query: requestedAudio }\n//     });\n//     return response.data;\n//   } catch (err) {\n//     console.error('Error fetching data:', err);  // Log the error for debugging\n//     throw new Error('Error fetching data');  // Throw the error to be caught in the component\n//   }\n// }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AudioFetcher);\n\n//# sourceURL=webpack://web_player_frontend/./src/components/AudioFetcher.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("635fa3e1b132dd539931")
/******/ })();
/******/ 
/******/ }
);