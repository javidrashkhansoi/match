/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// import "./window/window.js";
// import "./scripts/scripts.js";
// import "./libraries/libraries.js";

/** @type {HTMLButtonElement} */
const findFilterButton = document.querySelector(".filter-button");
/** @type {HTMLFormElement} */
const findFilter = document.querySelector(".find-form")

if (findFilterButton && findFilter) {
  findFilterButton.addEventListener("click", () => {
    findFilter.classList.add("find-form--show");
  });
}

/******/ })()
;