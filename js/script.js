/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/modules/header-observers.js
const { documentElement } = document;
const { classList: htmlClassList, style: htmlStyle } = documentElement;

class HeaderObservers {
  #$header = document.querySelector("[data-header=\"header\"]");
  /** @type {HTMLDivElement} */
  #$headerWrapper = document.querySelector("[data-header=\"wrapper\"]");
  #addingClass = "scrolled";
  #cssProperty = "--header-height";
  #intersection;
  #resize;

  /** @param {HeaderObserversOptions} options */
  constructor(options = {}) {
    this.#intersection = options.intersection ?? true;
    this.#resize = options.resize ?? true;

    this.#init();
  }

  #init() {
    if (this.#intersection && this.#$header) {
      const intersectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          htmlClassList.toggle(this.#addingClass, !entry.isIntersecting);
        });
      });

      intersectionObserver.observe(this.#$header);
    }

    if (this.#resize && this.#$headerWrapper) {
      const resizeObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
          const { borderBoxSize: [{ blockSize }] } = entry;

          htmlStyle.setProperty(this.#cssProperty, `${blockSize}px`);
        });
      });

      resizeObserver.observe(this.#$headerWrapper);
    }
  }
}



;// CONCATENATED MODULE: ./src/js/scripts/scripts/header-observers.js


const headerObservers = new HeaderObservers();

;// CONCATENATED MODULE: ./src/js/scripts/scripts/find-filter.js
/** @type {HTMLButtonElement} */
const findFilterButton = document.querySelector(".filter-button");
/** @type {HTMLFormElement} */
const findFilter = document.querySelector(".find-form")

if (findFilterButton && findFilter) {
  findFilterButton.addEventListener("click", () => {
    findFilter.classList.add("find-form--show");
  });
}

;// CONCATENATED MODULE: ./src/js/scripts/scripts.js


// import "./scripts/burger.js";
// import "./scripts/range.js";

;// CONCATENATED MODULE: ./src/js/script.js

// import "./window/window.js";
// import "./libraries/libraries.js";

/******/ })()
;