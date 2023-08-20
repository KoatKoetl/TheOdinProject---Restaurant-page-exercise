/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(17), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(25), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(26), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(27), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(20), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(29), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(21), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(24), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(28), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(33), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(30), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(31), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(34), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(36), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(38), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(35), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
}
/* Header styling start */
#header {
  display: flex;
  font-size: 2rem;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
#header ul {
  display: flex;
  list-style-type: none;
  gap: 2rem;
  font-size: 1.5rem;
  align-items: center;
}
#header a {
  color: black;
  text-decoration: none;
}
#header a:hover {
  color: rgba(0, 0, 0, 0.5);
  text-decoration: underline rgba(0, 0, 0, 0.5);
  text-underline-offset: 0.5rem;
}
#header a:active {
  color: rgba(0, 0, 0, 0.7);
  text-decoration: underline rgba(0, 0, 0, 0.7);
}
/* Header styling end */

/* Home page main div styling start */
.homePage {
  display: flex;
  margin: 1rem 10%;
}
.homePage .restaurantOutside {
  width: 900px;
}
.homePage h1 {
  padding-bottom: 1rem;
}
.homePage .info {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.3rem;
}
.homePage p {
  text-indent: 2rem;
  margin-bottom: 1rem;
}
/* Home page main div styling end */
/* Footer styling start */
#footer {
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: flex-end;
}
/* Footer styling end */

/* Food page styling start */
.foodPage {
  margin: 1rem 20%;
}
#itemGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
}
#itemCard {
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
#itemCard:hover {
  transform: scale(1.2);
}
#itemCard:active {
  transform: scale(1.1);
}
.itemImage {
  height: 200px;
  margin: 10px;
  border-radius: 1rem;
}
.Hamburger {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.Pizza {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.Salad {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.Soup {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.Crabs {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.Chicken {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.Borsch {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.HotDog {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.itemTitle {
  font-size: 1.5rem;
  padding: 0.5rem 0.8rem;
}
.itemPrice {
  text-align: right;
  font-size: 1.5rem;
  padding: 0.5rem 0.8rem;
}
/* Food page styling end */

/* Diserts page styling start */
.disertsPage {
  margin: 1rem 20%;
}
.Ice-Cream {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.Sweets {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.Jelly {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_10___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.Cake {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
/* Diserts page styling end */

/* Drinks page styling start */
.drinksPage {
  margin: 1rem 20%;
}
.Juice {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.Coffee {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.Tea {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_14___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.Smoothie {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_15___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
/* Drinks page styling end */

/* Page title styling start*/
.pageTitle {
  text-align: center;
  padding-bottom: 1rem;
}
/* Page title styling end*/
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadDisertsPage: () => (/* binding */ loadDisertsPage),
/* harmony export */   loadDrinksPage: () => (/* binding */ loadDrinksPage),
/* harmony export */   loadFoodPage: () => (/* binding */ loadFoodPage),
/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage),
/* harmony export */   loadHomePageInfo: () => (/* binding */ loadHomePageInfo)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _food_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _diserts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _drinks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);







function loadHomePage() {
  (0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_footer_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
}
function loadHomePageInfo() {
  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_footer_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
}
function loadFoodPage() {
  (0,_food_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}
function loadDisertsPage() {
  (0,_diserts_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
}
function loadDrinksPage() {
  (0,_drinks_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
}




/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addHeader)
/* harmony export */ });
// Get and create all Parent elements
const content = document.getElementById("content");
const header = document.createElement("header");
header.setAttribute("id", "header");

// Add 2 parts of header parent
const logo = document.createElement("div");
logo.classList.add("logo");
logo.textContent = "Foody";
const menu = document.createElement("ul");
menu.classList.add("menu");

// Add to menu all links to pages
const homePage = document.createElement("li");
const homePageLink = document.createElement("a");
homePageLink.setAttribute("href", "#");
homePageLink.setAttribute("id", "homePageBtn");
homePageLink.textContent = "Home";
const food = document.createElement("li");
const foodLink = document.createElement("a");
foodLink.setAttribute("href", "#");
foodLink.setAttribute("id", "foodPageBtn");
foodLink.textContent = "Food";
const diserts = document.createElement("li");
const disertsLink = document.createElement("a");
disertsLink.setAttribute("href", "#");
disertsLink.setAttribute("id", "disertsPageBtn");
disertsLink.textContent = "Diserts";
const drinks = document.createElement("li");
const drinksLink = document.createElement("a");
drinksLink.setAttribute("href", "#");
drinksLink.setAttribute("id", "drinksPageBtn");
drinksLink.textContent = "Drinks";

function addHeader() {
  // Append all needed elements to DOM
  homePage.appendChild(homePageLink);
  food.appendChild(foodLink);
  diserts.appendChild(disertsLink);
  drinks.appendChild(drinksLink);

  menu.append(homePage, food, diserts, drinks);

  header.append(logo, menu);

  content.appendChild(header);
}


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addHomePage)
/* harmony export */ });
/* harmony import */ var _photo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);

// Get main container
const content = document.getElementById("content");

// Add new container to store home page
const homePage = document.createElement("div");
homePage.setAttribute("id", "main");

// Add image element to store photo of restaurant
const myPhoto = new Image();
myPhoto.classList.add("restaurantOutside");
myPhoto.setAttribute("width", "900");
myPhoto.src = _photo_jpg__WEBPACK_IMPORTED_MODULE_0__;

// Add info container with info about restaurant
const infoContainer = document.createElement("div");
infoContainer.classList.add("info");
const firstParagraph = document.createElement("p");
firstParagraph.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus iaculis enim vitae blandit. Vestibulum at malesuada ligula, a posuere odio. Aliquam rutrum at nisi ut blandit. Nullam fermentum, enim vel sagittis feugiat, lacus elit tincidunt turpis, sed vestibulum felis magna vel sem. Vestibulum faucibus justo massa, quis dictum massa cursus nec. Nam aliquet orci vel elementum cursus.";
const secondParagraph = document.createElement("p");
secondParagraph.textContent =
  "Proin sed egestas nisl, et pulvinar eros. Mauris diam neque, porta a fermentum ultrices, suscipit sed justo. Mauris bibendum dui purus. Proin vel pulvinar tellus. Vestibulum ac dolor in nibh accumsan mattis eget id sapien. Sed non porta mauris, nec elementum nisl. Proin dignissim eu tortor id pellentesque.";
const aboutUs = document.createElement("h1");
aboutUs.textContent = "About us";

function addHomePage() {
  homePage.className = "homePage";
  homePage.replaceChildren();

  homePage.appendChild(myPhoto);

  // Append all needed to main page
  infoContainer.appendChild(aboutUs);
  infoContainer.appendChild(firstParagraph);
  infoContainer.appendChild(secondParagraph);

  homePage.appendChild(infoContainer);

  content.appendChild(homePage);
}


/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./borsch.jpg": 21,
	"./cake.jpg": 31,
	"./chicken.jpg": 29,
	"./coffee.jpg": 36,
	"./crabs.jpg": 20,
	"./hamburger.jpg": 17,
	"./hotdog.jpg": 24,
	"./ice-cream.jpg": 28,
	"./jelly.jpg": 30,
	"./juice.jpg": 34,
	"./photo.jpg": 22,
	"./pizza.jpg": 25,
	"./salad.jpg": 26,
	"./smoothie.jpg": 35,
	"./soup.jpg": 27,
	"./sweets.jpg": 33,
	"./tea.jpg": 38
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 14;

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addFooter)
/* harmony export */ });
const content = document.getElementById("content");

const footer = document.createElement("footer");
footer.setAttribute("id", "footer");
footer.textContent = "Created by https://github.com/KoatKoetl";
function addFooter() {
  content.appendChild(footer);
}


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadFoodPage)
/* harmony export */ });
/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);


// Import all images at once
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(__webpack_require__(14));

const itemGrid = document.createElement("div");
itemGrid.setAttribute("id", "itemGrid");

// Array with all food and prices
const items = [
  (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Hamburger", "20$"),
  (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Pizza", "15$"),
  (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Salad", "5$"),
  (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Soup", "10$"),
  (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Crabs", "30$"),
  (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Chicken", "40$"),
  (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Borsch", "15$"),
  (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__["default"])("HotDog", "5$"),
];

const pageTitle = document.createElement("h1");
pageTitle.classList.add("pageTitle");
pageTitle.textContent = "Food Menu";

// Cycle to create a card for every type of food
items.forEach((type) => {
  const itemCard = document.createElement("div");
  itemCard.setAttribute("id", "itemCard");

  const itemImage = document.createElement("div");
  itemImage.classList.add("itemImage");
  itemImage.classList.add(`${type.title}`);

  const itemTitle = document.createElement("h2");
  itemTitle.classList.add("itemTitle");

  const itemPrice = document.createElement("div");
  itemPrice.classList.add("itemPrice");

  itemTitle.textContent = type.title;
  itemPrice.textContent = "Price: " + type.price;

  itemCard.appendChild(itemImage);
  itemCard.appendChild(itemTitle);
  itemCard.appendChild(itemPrice);

  itemGrid.appendChild(itemCard);
});

function loadFoodPage() {
  const main = document.getElementById("main");
  main.className = "foodPage";
  main.replaceChildren();

  main.appendChild(pageTitle);
  main.appendChild(itemGrid);
}


/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d4822ef8e2db750dee29.jpg";

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCard)
/* harmony export */ });
function createCard(title, price) {
  return { title, price };
}


/***/ }),
/* 19 */
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f1ee77c609afbbaefc06.jpg";

/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7e5c6c602954cd9f1d2d.jpg";

/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dfc932629a9e16d35065.jpg";

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadFoodPage)
/* harmony export */ });
/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);


// Import all images at once
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(__webpack_require__(14));

const itemGrid = document.createElement("div");
itemGrid.setAttribute("id", "itemGrid");

// Array with all food and prices
const items = [(0,_cards_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Ice-Cream", "20$"), (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Sweets", "15$"), (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Jelly", "5$"), (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Cake", "10$")];

const pageTitle = document.createElement("h1");
pageTitle.classList.add("pageTitle");
pageTitle.textContent = "Diserts Menu";

// Cycle to create a card for every type of food
items.forEach((type) => {
  const itemCard = document.createElement("div");
  itemCard.setAttribute("id", "itemCard");

  const itemImage = document.createElement("div");
  itemImage.classList.add("itemImage");
  itemImage.classList.add(`${type.title}`);

  const itemTitle = document.createElement("h2");
  itemTitle.classList.add("itemTitle");

  const foodPrice = document.createElement("div");
  foodPrice.classList.add("itemPrice");

  itemTitle.textContent = type.title;
  foodPrice.textContent = "Price: " + type.price;

  itemCard.appendChild(itemImage);
  itemCard.appendChild(itemTitle);
  itemCard.appendChild(foodPrice);

  itemGrid.appendChild(itemCard);
});

function loadFoodPage() {
  const main = document.getElementById("main");
  main.className = "disertsPage";
  main.replaceChildren();

  main.appendChild(pageTitle);
  main.appendChild(itemGrid);
}


/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5e4625070bf1fa96d674.jpg";

/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d2f6c550111be4910005.jpg";

/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "69f96fd6f0eb639bdc8d.jpg";

/***/ }),
/* 27 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a3b18c6867fe68753015.jpg";

/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dcbe3a281462a019c81a.jpg";

/***/ }),
/* 29 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c099f843ec42f924d767.jpg";

/***/ }),
/* 30 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6d16273905f2a53dfe0a.jpg";

/***/ }),
/* 31 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d0e771d176c5f0fc56b9.jpg";

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadFoodPage)
/* harmony export */ });
/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);


// Import all images at once
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(__webpack_require__(14));

const drinksGrid = document.createElement("div");
drinksGrid.setAttribute("id", "itemGrid");

// Array with all food and prices
const items = [(0,_cards_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Juice", "20$"), (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Coffee", "15$"), (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Tea", "5$"), (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Smoothie", "10$")];

const pageTitle = document.createElement("h1");
pageTitle.classList.add("pageTitle");
pageTitle.textContent = "Drinks Menu";

// Cycle to create a card for every type of food
items.forEach((type) => {
  const drinksCard = document.createElement("div");
  drinksCard.setAttribute("id", "itemCard");

  const drinksImage = document.createElement("div");
  drinksImage.classList.add("itemImage");
  drinksImage.classList.add(`${type.title}`);

  const drinksTitle = document.createElement("h2");
  drinksTitle.classList.add("itemTitle");

  const drinksPrice = document.createElement("div");
  drinksPrice.classList.add("itemPrice");

  drinksTitle.textContent = type.title;
  drinksPrice.textContent = "Price: " + type.price;

  drinksCard.appendChild(drinksImage);
  drinksCard.appendChild(drinksTitle);
  drinksCard.appendChild(drinksPrice);

  drinksGrid.appendChild(drinksCard);
});

function loadFoodPage() {
  const main = document.getElementById("main");
  main.className = "drinksPage";
  main.replaceChildren();

  main.appendChild(pageTitle);
  main.appendChild(drinksGrid);
}


/***/ }),
/* 33 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9856ae571096c8fc8351.jpg";

/***/ }),
/* 34 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f43bf5de797cc5331c30.jpg";

/***/ }),
/* 35 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2c5d795af9f3aa964d8a.jpg";

/***/ }),
/* 36 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "467694df5e0dbe94c9d2.jpg";

/***/ }),
/* 37 */,
/* 38 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "140c97deaa3254e905ae.jpg";

/***/ })
/******/ 	]);
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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _load_pages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);



(0,_load_pages_js__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();

const homeBtn = document.getElementById("homePageBtn");
const foodBtn = document.getElementById("foodPageBtn");
const disertsBtn = document.getElementById("disertsPageBtn");
const drinksBtn = document.getElementById("drinksPageBtn");

homeBtn.addEventListener("click", () => {
  (0,_load_pages_js__WEBPACK_IMPORTED_MODULE_1__.loadHomePageInfo)();
});

foodBtn.addEventListener("click", () => {
  (0,_load_pages_js__WEBPACK_IMPORTED_MODULE_1__.loadFoodPage)();
});

disertsBtn.addEventListener("click", () => {
  (0,_load_pages_js__WEBPACK_IMPORTED_MODULE_1__.loadDisertsPage)();
});

drinksBtn.addEventListener("click", () => {
  (0,_load_pages_js__WEBPACK_IMPORTED_MODULE_1__.loadDrinksPage)();
});

})();

/******/ })()
;