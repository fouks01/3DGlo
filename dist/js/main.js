/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validate */ \"./modules/validate.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('23 April 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_validate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n  const square = document.querySelector('.calc-square');\r\n  const count = document.querySelector('.calc-count');\r\n  const day = document.querySelector('.calc-day');\r\n  const type = document.querySelector('.calc-type');\r\n\r\n  square.addEventListener('input', (e) => {\r\n    e.target.value = e.target.value.replace(/\\D+/, '');\r\n  });\r\n\r\n  count.addEventListener('input', (e) => {\r\n    e.target.value = e.target.value.replace(/\\D+/, '');\r\n  });\r\n\r\n  day.addEventListener('input', (e) => {\r\n    e.target.value = e.target.value.replace(/\\D+/, '');\r\n  });\r\n\r\n\r\n  type.addEventListener('change', () => {\r\n    console.log(type.value);\r\n  });\r\n\r\n  console.log(type[0]);\r\n\r\n\r\n  console.log(square);\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const closeBtn = menu.querySelector('.close-btn');\r\n    const menuItems = menu.querySelectorAll('ul>li>a');\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu');\r\n    };\r\n\r\n    closeBtn.onclick = () => {\r\n        closeBtn.setAttribute('href', '#close');\r\n        return false;\r\n    };\r\n\r\n    menuBtn.addEventListener('click', handleMenu);\r\n    // closeBtn.addEventListener('click', handleMenu);\r\n\r\n    // menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));\r\n\r\n    menu.addEventListener('click', (e) => {\r\n        if (e.target.closest('.close-btn')) {\r\n            handleMenu();\r\n        } else if (e.target.closest('a')) {\r\n            handleMenu();\r\n        }\r\n    });\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const modalBlock = modal.querySelector('.popup-content');\r\n\r\n\r\n    let count = 0;\r\n    let modalMove;\r\n\r\n    const modalAnimation = () => {\r\n        count++;\r\n        modalMove = requestAnimationFrame(modalAnimation);\r\n\r\n        if (count < 43) {\r\n            modalBlock.style.left = count + '%';\r\n        } else {\r\n            cancelAnimationFrame(modalMove);\r\n        }\r\n    };\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            if (screen.width > 767) {\r\n                modalAnimation();\r\n                modal.style.display = 'block';\r\n            } else {\r\n                modal.style.display = 'block';\r\n            }\r\n        });\r\n    });\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            count = 0;\r\n            modal.style.display = 'none';\r\n        };\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n\r\n    console.log(tabContent);\r\n\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active');\r\n                    tabContent[index].classList.remove('d-none');\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    tabContent[index].classList.add('d-none');\r\n\r\n                }\r\n            });\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n    let interval;\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let hours = Math.floor(timeRemaining / 60 / 60);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return {\r\n            timeRemaining,\r\n            hours,\r\n            minutes,\r\n            seconds\r\n        };\r\n    };\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n\r\n        if (getTime.timeRemaining > 0) {\r\n            timerHours.textContent = getTime.hours;\r\n            timerMinutes.textContent = getTime.minutes;\r\n            timerSeconds.textContent = getTime.seconds;\r\n\r\n\r\n\r\n        } else {\r\n            getTime.hours = 0;\r\n            getTime.minutes = 0;\r\n            getTime.seconds = 0;\r\n            return clearInterval(interval);\r\n\r\n        }\r\n        if (getTime.hours < 10) {\r\n            timerHours.textContent = '0' + getTime.hours;\r\n        }\r\n        if (getTime.minutes < 10) {\r\n            timerMinutes.textContent = '0' + getTime.minutes;\r\n        }\r\n        if (getTime.seconds < 10) {\r\n            timerSeconds.textContent = '0' + getTime.seconds;\r\n        }\r\n    };\r\n\r\n    interval = setInterval(updateClock, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validate.js":
/*!*****************************!*\
  !*** ./modules/validate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validate = () => {\r\n\r\n    const text = document.querySelectorAll('[type=\"text\"]');\r\n    const placeholder = document.querySelectorAll('[placeholder=\"Ваше сообщение\"]');\r\n    const email = document.querySelectorAll('[type=\"email\"]');\r\n    const tel = document.querySelectorAll('[type=\"tel\"]');\r\n\r\n    text[0].addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^а-яА-Я\\s-]/gi, '');\r\n    });\r\n\r\n    text[4].addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^а-яА-Я\\s-]/gi, '');\r\n    });\r\n\r\n    text[5].addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^а-яА-Я\\s-]/gi, '');\r\n    });\r\n\r\n    placeholder[0].addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^а-яА-Я\\s-]/gi, '');\r\n    });\r\n\r\n\r\n    email.forEach((event) => {\r\n        event.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^\\w0-9\\-\\.\\_\\!\\~\\*\\'@]/gi, '');\r\n        });\r\n    });\r\n\r\n\r\n    tel.forEach((event) => {\r\n        event.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^0-9\\()\\-]/gi, '');\r\n        });\r\n    });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack:///./modules/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;