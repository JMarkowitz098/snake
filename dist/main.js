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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass Apple {\n    constructor({size, color, pos}){\n        this.size = size;\n        this.color = color;\n        this.x = pos.x\n        this.y = pos.y\n    }\n\n    draw(ctx) {\n        const { size, color, x, y } = this\n        ctx.fillStyle = color;\n        ctx.fillRect(x, y, size, size);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Apple);\n\n//# sourceURL=webpack://snake/./src/apple.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APPLE_COLOR\": () => /* binding */ APPLE_COLOR,\n/* harmony export */   \"BLOCK_SIZE\": () => /* binding */ BLOCK_SIZE,\n/* harmony export */   \"CANVAS_SIDE_LENGTH\": () => /* binding */ CANVAS_SIDE_LENGTH,\n/* harmony export */   \"DIR_DOWN\": () => /* binding */ DIR_DOWN,\n/* harmony export */   \"DIR_LEFT\": () => /* binding */ DIR_LEFT,\n/* harmony export */   \"DIR_RIGHT\": () => /* binding */ DIR_RIGHT,\n/* harmony export */   \"DIR_UP\": () => /* binding */ DIR_UP,\n/* harmony export */   \"DIR_OPTIONS\": () => /* binding */ DIR_OPTIONS,\n/* harmony export */   \"FPS\": () => /* binding */ FPS,\n/* harmony export */   \"NUM_FRUIT\": () => /* binding */ NUM_FRUIT,\n/* harmony export */   \"SNAKE_COLOR\": () => /* binding */ SNAKE_COLOR,\n/* harmony export */   \"SNAKE_START_POS\": () => /* binding */ SNAKE_START_POS,\n/* harmony export */   \"SNAKE_VELOCITY\": () => /* binding */ SNAKE_VELOCITY\n/* harmony export */ });\nconst APPLE_COLOR = \"red\"\n\nconst BLOCK_SIZE = 25\n\nconst CANVAS_SIDE_LENGTH = 600;\n\nconst DIR_DOWN = 'down'\nconst DIR_LEFT = 'left'\nconst DIR_RIGHT = 'right'\nconst DIR_UP = 'up'\nconst DIR_OPTIONS = {\n    w: DIR_UP,\n    a: DIR_LEFT,\n    s: DIR_DOWN,\n    d: DIR_RIGHT,\n}\n\nconst FPS = 1\n\nconst NUM_FRUIT = 1\n\nconst SNAKE_COLOR = \"green\"\nconst SNAKE_START_POS = 100\nconst SNAKE_VELOCITY = 25\n\n\n//# sourceURL=webpack://snake/./src/constants.js?");

/***/ }),

/***/ "./src/game_canvas.js":
/*!****************************!*\
  !*** ./src/game_canvas.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _apple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apple */ \"./src/apple.js\");\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake */ \"./src/snake.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\n\nconst randPos = () => {\n    const factor = _constants__WEBPACK_IMPORTED_MODULE_2__.CANVAS_SIDE_LENGTH / _constants__WEBPACK_IMPORTED_MODULE_2__.BLOCK_SIZE\n    return Math.floor(Math.random() * factor) * _constants__WEBPACK_IMPORTED_MODULE_2__.BLOCK_SIZE + 100\n}\n\nclass GameCanvas {\n    constructor({ctx}){\n        this.ctx = ctx;\n        this.fruit = this.placeFruit(_constants__WEBPACK_IMPORTED_MODULE_2__.NUM_FRUIT)\n        this.snake = this.placeSnake()\n    }\n\n    placeFruit(numFruit){\n        let fruit = [];\n        for (let i = 0; i < numFruit; i++){\n            let pos = {x: randPos(), y: randPos()}\n            let apple = new _apple__WEBPACK_IMPORTED_MODULE_0__.default({ \n                size: _constants__WEBPACK_IMPORTED_MODULE_2__.BLOCK_SIZE, \n                color: _constants__WEBPACK_IMPORTED_MODULE_2__.APPLE_COLOR,\n                pos\n            })\n            fruit.push(apple)\n        }\n        return fruit;\n    }\n\n    drawFruit(){\n        const {fruit, ctx} = this;\n        fruit.forEach(apple => apple.draw(ctx))\n    }\n\n    placeSnake(){\n        return new _snake__WEBPACK_IMPORTED_MODULE_1__.default({\n            size: _constants__WEBPACK_IMPORTED_MODULE_2__.BLOCK_SIZE,\n            color: _constants__WEBPACK_IMPORTED_MODULE_2__.SNAKE_COLOR,\n            pos: { x: _constants__WEBPACK_IMPORTED_MODULE_2__.SNAKE_START_POS, y: _constants__WEBPACK_IMPORTED_MODULE_2__.SNAKE_START_POS }\n        })\n    }\n\n    drawSnake(){\n        const {snake, ctx} = this;\n        snake.draw(ctx)\n    }\n\n    moveSnake(){\n        this.snake.move();\n    }\n\n    clearCanvas(){\n        const { ctx } = this;\n        ctx.clearRect(\n            _constants__WEBPACK_IMPORTED_MODULE_2__.CANVAS_SIDE_LENGTH, \n            _constants__WEBPACK_IMPORTED_MODULE_2__.CANVAS_SIDE_LENGTH, \n            _constants__WEBPACK_IMPORTED_MODULE_2__.CANVAS_SIDE_LENGTH, \n            _constants__WEBPACK_IMPORTED_MODULE_2__.CANVAS_SIDE_LENGTH\n        );\n        ctx.fillStyle = \"black\";\n        ctx.fillRect(\n            _constants__WEBPACK_IMPORTED_MODULE_2__.SNAKE_START_POS,\n            _constants__WEBPACK_IMPORTED_MODULE_2__.SNAKE_START_POS,\n            _constants__WEBPACK_IMPORTED_MODULE_2__.CANVAS_SIDE_LENGTH,\n            _constants__WEBPACK_IMPORTED_MODULE_2__.CANVAS_SIDE_LENGTH\n        );\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameCanvas);\n\n//# sourceURL=webpack://snake/./src/game_canvas.js?");

/***/ }),

/***/ "./src/game_renderer.js":
/*!******************************!*\
  !*** ./src/game_renderer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nclass GameRenderer{\n    constructor({ctx, gameCanvas}){\n        this.dirOptions = _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_OPTIONS\n        this.ctx = ctx\n        this.gameCanvas = gameCanvas\n\n        this.step = this.step.bind(this)\n        this.onKeyDown = this.onKeyDown.bind(this)\n        this.animate = this.animate.bind(this)\n    }\n\n    animate(step) {\n        setTimeout(() => requestAnimationFrame(step), 1000 / _constants__WEBPACK_IMPORTED_MODULE_0__.FPS);\n    }\n\n    gameOver(gameCanvas){\n        return gameCanvas.snake.collidedWithWall();\n    }\n    \n    start(){\n        this.bindKeyHandlers()\n        this.animate(this.step)\n    }\n    \n    step(){\n        const { gameCanvas, gameOver } = this;\n        gameCanvas.clearCanvas()\n\n        gameCanvas.moveSnake();\n\n        gameCanvas.drawFruit();\n        gameCanvas.drawSnake();\n\n        if (!gameOver(gameCanvas)) this.animate(this.step)\n        // this.animate(this.step)\n    }\n\n    onKeyDown(e) {\n        const { gameCanvas, dirOptions } = this\n        const newDir = dirOptions[e.key];\n\n        if (Object.keys(dirOptions).includes(e.key))\n            gameCanvas.snake.changeDir(newDir)\n    }\n\n    bindKeyHandlers() {\n        document.addEventListener(\"keydown\", this.onKeyDown)\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameRenderer);\n\n//# sourceURL=webpack://snake/./src/game_renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_canvas */ \"./src/game_canvas.js\");\n/* harmony import */ var _game_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_renderer */ \"./src/game_renderer.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"game-canvas\")\n    const ctx = canvasEl.getContext(\"2d\");\n    const gameCanvas = new _game_canvas__WEBPACK_IMPORTED_MODULE_0__.default({ctx})\n    const gameRenderer = new _game_renderer__WEBPACK_IMPORTED_MODULE_1__.default({gameCanvas, ctx})\n\n    gameRenderer.start()\n});\n\n\n\n//# sourceURL=webpack://snake/./src/index.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nclass Snake {\n    constructor({size, color, pos}) {\n        this.size = size;\n        this.color = color;\n        this.x = pos.x\n        this.y = pos.y\n        this.dir = 'down'; //Starting Direction\n        this.bodyPositions = [{\n            x: _constants__WEBPACK_IMPORTED_MODULE_0__.SNAKE_START_POS,\n            y: _constants__WEBPACK_IMPORTED_MODULE_0__.SNAKE_START_POS\n        }]\n        this.length = 4; //Starting Snake Size\n    }\n\n    draw(ctx) {\n        const { size, color, bodyPositions } = this\n        ctx.fillStyle = color;\n        bodyPositions.forEach(({x, y}) => ctx.fillRect(x, y, size, size))\n    }\n\n    collidedWithWall(){\n        const { x, y } = this;\n        return (\n            x < _constants__WEBPACK_IMPORTED_MODULE_0__.SNAKE_START_POS\n                || x > _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH + 75\n                || y < _constants__WEBPACK_IMPORTED_MODULE_0__.SNAKE_START_POS\n                || y > _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH + 75\n        )\n    }\n\n    cutBodyPositionsByLength(){\n        const { bodyPositions, length } = this;\n        this.bodyPositions = \n            bodyPositions.slice(bodyPositions.length - 3)\n            // bodyPositions.slice(bodyPositions.length - length * 2)\n\n        console.log(this.bodyPositions)\n    }\n\n    move(){\n        const { x, y, dir } = this\n        switch (dir) {\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_UP:\n                this.y = y - _constants__WEBPACK_IMPORTED_MODULE_0__.SNAKE_VELOCITY\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN:\n                this.y = y + _constants__WEBPACK_IMPORTED_MODULE_0__.SNAKE_VELOCITY\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_LEFT:\n                this.x = x - _constants__WEBPACK_IMPORTED_MODULE_0__.SNAKE_VELOCITY\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_RIGHT:\n                this.x = x + _constants__WEBPACK_IMPORTED_MODULE_0__.SNAKE_VELOCITY\n                break;\n        }\n        this.bodyPositions.push({x: this.x, y: this.y})\n        this.cutBodyPositionsByLength()\n    }\n\n    changeDir(newDir){\n        this.dir = newDir\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snake);\n\n//# sourceURL=webpack://snake/./src/snake.js?");

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