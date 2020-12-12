/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apple.js":
/*!**********************!*\
  !*** ./src/apple.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass Apple {\n    constructor({size, color, pos}){\n        this.size = size;\n        this.color = color;\n        this.x = pos.x\n        this.y = pos.y\n    }\n\n    draw(ctx) {\n        const { size, color, x, y } = this\n        ctx.fillStyle = color;\n        console.log({x})\n        console.log({y})\n        ctx.fillRect(x, y, size, size);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Apple);\n\n//# sourceURL=webpack://snake/./src/apple.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BLOCK_SIZE\": () => /* binding */ BLOCK_SIZE,\n/* harmony export */   \"APPLE_COLOR\": () => /* binding */ APPLE_COLOR,\n/* harmony export */   \"CANVAS_SIDE_LENGTH\": () => /* binding */ CANVAS_SIDE_LENGTH\n/* harmony export */ });\nconst BLOCK_SIZE = 25\nconst APPLE_COLOR = \"red\"\nconst CANVAS_SIDE_LENGTH = 400;\n\n//# sourceURL=webpack://snake/./src/constants.js?");

/***/ }),

/***/ "./src/game_canvas.js":
/*!****************************!*\
  !*** ./src/game_canvas.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _apple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apple */ \"./src/apple.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\nconst randPos = () => {\n    const factor = _constants__WEBPACK_IMPORTED_MODULE_1__.CANVAS_SIDE_LENGTH / _constants__WEBPACK_IMPORTED_MODULE_1__.BLOCK_SIZE\n    return Math.floor(Math.random() * factor) * _constants__WEBPACK_IMPORTED_MODULE_1__.BLOCK_SIZE + 100\n}\n\nclass GameCanvas {\n    constructor({ctx, numFruit}){\n        this.ctx = ctx;\n        this.fruit = this.placeFruit(numFruit)\n    }\n\n    placeFruit(numFruit){\n        let fruit = [];\n        for (let i = 0; i < numFruit; i++){\n            let pos = {x: randPos(), y: randPos()}\n            let apple = new _apple__WEBPACK_IMPORTED_MODULE_0__.default({ \n                size: _constants__WEBPACK_IMPORTED_MODULE_1__.BLOCK_SIZE, \n                color: _constants__WEBPACK_IMPORTED_MODULE_1__.APPLE_COLOR,\n                pos\n            })\n            fruit.push(apple)\n        }\n        return fruit;\n    }\n\n    drawFruit(){\n        const {fruit, ctx} = this;\n        fruit.forEach(apple => apple.draw(ctx))\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameCanvas);\n\n//# sourceURL=webpack://snake/./src/game_canvas.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_canvas */ \"./src/game_canvas.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"game-canvas\")\n    const ctx = canvasEl.getContext(\"2d\");\n    const gameCanvas = new _game_canvas__WEBPACK_IMPORTED_MODULE_0__.default({ctx, numFruit: 4})\n\n    // const game = new Game();\n\n    // const gameView = new GameView(game, ctx)\n\n\n    //Starts game when 'm' is pressed-----------\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(\n        100, \n        100, \n        _constants__WEBPACK_IMPORTED_MODULE_1__.CANVAS_SIDE_LENGTH, \n        _constants__WEBPACK_IMPORTED_MODULE_1__.CANVAS_SIDE_LENGTH\n    );\n    ctx.fillStyle = \"black\";\n    ctx.font = \"30px Arial\";\n    gameCanvas.drawFruit()\n\n    // const startGame = () => {\n    //     gameView.start();\n    //     document.removeEventListener('keydown', gameFunc)\n    //     setInterval(game.increaseVelocity, 10000);\n    // }\n\n    // const gameFunc = (e) => {\n    //     if (e.key === 'm') {\n    //         startGame()\n    //     }\n    // }\n\n    // document.addEventListener('keydown', gameFunc) //Start game if 'm' is pressed\n});\n\n\n\n//# sourceURL=webpack://snake/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;