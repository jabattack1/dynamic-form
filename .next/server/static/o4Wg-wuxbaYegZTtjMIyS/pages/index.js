module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+EWW":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "0T/a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2jw7");
var core = __webpack_require__("p9MR");
var ctx = __webpack_require__("vCXk");
var hide = __webpack_require__("jOCL");
var has = __webpack_require__("Q8jq");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "14Ie":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "2jw7":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5foh":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VKpo");

/***/ }),

/***/ "8v5W":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "D4ny":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b4pn");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Ev2A":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b4pn");
var document = __webpack_require__("2jw7").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "Fuct":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("0T/a");
var $parseInt = __webpack_require__("dwSY");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LqFA":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("b4pn");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "OtwA":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("D4ny");
var IE8_DOM_DEFINE = __webpack_require__("pH/F");
var toPrimitive = __webpack_require__("LqFA");
var dP = Object.defineProperty;

exports.f = __webpack_require__("fZVS") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "Q8jq":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__("Bhuq");
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js


function getPrototypeOf_getPrototypeOf(o) {
  getPrototypeOf_getPrototypeOf = set_prototype_of_default.a ? get_prototype_of_default.a : function _getPrototypeOf(o) {
    return o.__proto__ || get_prototype_of_default()(o);
  };
  return getPrototypeOf_getPrototypeOf(o);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("6BQ9");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js
var freeze = __webpack_require__("FbiP");
var freeze_default = /*#__PURE__*/__webpack_require__.n(freeze);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return freeze_default()(define_properties_default()(strings, {
    raw: {
      value: freeze_default()(raw)
    }
  }));
}
// CONCATENATED MODULE: ./components/room1.js










function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 1px 0;\n\tfont-size: 12px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tmargin-left: 5px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 7px\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: inline-block;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #EAEAEA;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: white;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: inline-block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var GridItem = external_styled_components_default.a.div(_templateObject());
var Item = external_styled_components_default.a.div(_templateObject2());
var ItemWrap = external_styled_components_default.a.div(_templateObject3());
var Box = external_styled_components_default.a.div(_templateObject4());
var Slot = external_styled_components_default.a.div(_templateObject5());
var Heading = external_styled_components_default.a.span(_templateObject6());
var P = external_styled_components_default.a.p(_templateObject7());

var room1_Room1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Room1, _React$Component);

  function Room1(props) {
    var _this;

    _classCallCheck(this, Room1);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Room1).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "twoCallsAdult", function (e) {
      e.persist();

      _this.functionOneAdult(e);

      _this.functionTwoAdult(e);
    });

    _defineProperty(_assertThisInitialized(_this), "twoCallsChildren", function (e) {
      e.persist();

      _this.functionOneChildren(e);

      _this.functionTwoChildren(e);
    });

    if (_this.props.data !== undefined) {
      _this.state = {
        room: 1,
        adults: _this.props.data.adults1,
        children: _this.props.data.children1
      };
    } else {
      _this.state = {
        room: 1,
        adults: 1,
        children: 0
      };
    }

    return _this;
  }

  _createClass(Room1, [{
    key: "render",
    value: function render() {
      console.log('room1' + this.props.data);
      var select = '';
      var optionsAdults = '';
      var optionsChildren = '';

      if (this.props.data !== undefined) {
        select = external_react_default.a.createElement(ItemWrap, null, external_react_default.a.createElement(Heading, null, "Room ", this.state.room), external_react_default.a.createElement(Item, null, external_react_default.a.createElement(Slot, null, external_react_default.a.createElement(P, null, "Adults"), external_react_default.a.createElement(P, null, "(18+)"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("select", {
          id: "selectionAdults",
          value: this.props.data.adults1,
          onChange: this.twoCallsAdult
        }, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))), external_react_default.a.createElement(Slot, null, external_react_default.a.createElement(P, null, "Children"), external_react_default.a.createElement(P, null, "(0-17)"), external_react_default.a.createElement("select", {
          id: "selectionChildren",
          value: this.props.data.children1,
          onChange: this.twoCallsChildren
        }, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))));
      } else {
        select = external_react_default.a.createElement(ItemWrap, null, console.log('nothing'), external_react_default.a.createElement(Heading, null, "Room ", this.state.room), external_react_default.a.createElement(Item, null, external_react_default.a.createElement(Slot, null, external_react_default.a.createElement(P, null, "Adults"), external_react_default.a.createElement(P, null, "(18+)"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("select", {
          id: "selectionAdults",
          onChange: this.twoCallsAdult
        }, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))), external_react_default.a.createElement(Slot, null, external_react_default.a.createElement(P, null, "Children"), external_react_default.a.createElement(P, null, "(0-17)"), external_react_default.a.createElement("select", {
          id: "selectionChildren",
          onChange: this.twoCallsChildren
        }, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))));
      }

      return external_react_default.a.createElement(GridItem, null, external_react_default.a.createElement(Box, null, select));
    }
  }, {
    key: "functionOneAdult",
    value: function functionOneAdult(e) {
      e.persist();
      this.setState({
        adults: parse_int_default()(e.target.value)
      }, function () {
        this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
      });
    }
  }, {
    key: "functionTwoAdult",
    value: function functionTwoAdult(e) {
      e.persist();
      document.getElementById('selectionAdults').value = parse_int_default()(e.target.value);

      if (this.props.data !== undefined) {
        this.props.data.adults1 = parse_int_default()(e.target.value);
      }
    }
  }, {
    key: "functionOneChildren",
    value: function functionOneChildren(e) {
      e.persist();
      this.setState({
        children: parse_int_default()(e.target.value)
      }, function () {
        this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
      });
    }
  }, {
    key: "functionTwoChildren",
    value: function functionTwoChildren(e) {
      e.persist();

      if (false) {}
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getStuff();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props != nextProps) {
        if (this.props.data !== undefined) {
          this.setState({
            check: nextProps.check,
            adults: this.props.data.adults1,
            children: this.props.data.children1
          });
        } else {
          this.setState({
            check: nextProps.check,
            adults: this.state.adults,
            children: this.state.children
          });
        }
      }
    }
  }, {
    key: "getStuff",
    value: function getStuff() {
      this.setState({
        check: !this.state.check,
        adults: this.state.adults || 1,
        children: this.state.children
      }, function () {
        if (this.props.data !== undefined) {
          console.log('titan');
          this.props.fromChildToParentCallback([this.state.check, this.state.room, this.props.data.adults1, this.props.data.children1]);
        } else {
          console.log('eh');
          this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
        }
      });
    }
  }]);

  return Room1;
}(external_react_default.a.Component);

/* harmony default export */ var room1 = (room1_Room1);
// CONCATENATED MODULE: ./components/room2.js










function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 1px 0;\n\tfont-size: 12px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tpadding-left: 20px;\n\tbackground: #DADDE8;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tborder-radius-left: 5px;\n\tborder-radius-right: 5px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tmargin-left: 20px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 7px\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function room2_templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: inline-block;\n"]);

  room2_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function room2_templateObject6() {
  var data = _taggedTemplateLiteral(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #C3CAE2;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  room2_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function room2_templateObject5() {
  var data = _taggedTemplateLiteral(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: #DADDE8;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  room2_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function room2_templateObject4() {
  var data = _taggedTemplateLiteral(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #EAEAEA;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  room2_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function room2_templateObject3() {
  var data = _taggedTemplateLiteral(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: white;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  room2_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function room2_templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: inline-block;\n  \t}\n"]);

  room2_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function room2_templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: -18px;\n\tleft: 0;\n"]);

  room2_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Checkbox = external_styled_components_default.a.input(room2_templateObject());
var room2_GridItem = external_styled_components_default.a.div(room2_templateObject2());
var room2_Item = external_styled_components_default.a.div(room2_templateObject3());
var room2_ItemWrap = external_styled_components_default.a.div(room2_templateObject4());
var ItemNay = external_styled_components_default.a.div(room2_templateObject5());
var ItemWrapNay = external_styled_components_default.a.div(room2_templateObject6());
var room2_Box = external_styled_components_default.a.div(room2_templateObject7());
var room2_Slot = external_styled_components_default.a.div(_templateObject8());
var Heading2 = external_styled_components_default.a.span(_templateObject9());
var Heading2Nay = external_styled_components_default.a.span(_templateObject10());
var room2_P = external_styled_components_default.a.p(_templateObject11());

var room2_Room2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Room2, _React$Component);

  function Room2(props) {
    var _this;

    _classCallCheck(this, Room2);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Room2).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "twoCallsAdult2", function (e) {
      e.persist();

      _this.functionOneAdult2(e);

      _this.functionTwoAdult2(e);
    });

    _defineProperty(_assertThisInitialized(_this), "twoCallsChildren2", function (e) {
      e.persist();

      _this.functionOneChildren2(e);

      _this.functionTwoChildren2(e);
    });

    if (_this.props.data !== undefined) {
      _this.state = {
        room: 2,
        adults: _this.props.data.adults2,
        children: _this.props.data.children2
      };
    } else {
      console.log('tot2');
      _this.state = {
        room: 2,
        adults: 1,
        children: 0
      };
    }

    return _this;
  }

  _createClass(Room2, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var select = '';
      var optionsAdults = '';
      var optionsChildren = '';

      if (this.state.check === true) {
        console.log('true');

        if (this.props.data !== undefined) {
          select = external_react_default.a.createElement(room2_ItemWrap, null, external_react_default.a.createElement(Heading2, null, "Room ", this.state.room), external_react_default.a.createElement(room2_Item, null, external_react_default.a.createElement(Checkbox, {
            type: "checkbox",
            onClick: function onClick() {
              return _this2.getStuff();
            },
            checked: true
          }), external_react_default.a.createElement(room2_Slot, null, external_react_default.a.createElement(room2_P, null, "Adults"), external_react_default.a.createElement(room2_P, null, "(18+)"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("select", {
            id: "selectionAdults2",
            value: this.props.data.adults2,
            onChange: this.twoCallsAdult2
          }, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))), external_react_default.a.createElement(room2_Slot, null, external_react_default.a.createElement(room2_P, null, "Children"), external_react_default.a.createElement(room2_P, null, "(0-17)"), external_react_default.a.createElement("select", {
            id: "selectionChildren2",
            value: this.props.data.children2,
            onChange: this.twoCallsChildren2
          }, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))));
        } else {
          select = external_react_default.a.createElement(room2_ItemWrap, null, external_react_default.a.createElement(Heading2, null, "Room ", this.state.room), external_react_default.a.createElement(room2_Item, null, external_react_default.a.createElement(Checkbox, {
            type: "checkbox",
            onClick: function onClick() {
              return _this2.getStuff();
            },
            checked: true
          }), external_react_default.a.createElement(room2_Slot, null, external_react_default.a.createElement(room2_P, null, "Adults"), external_react_default.a.createElement(room2_P, null, "(18+)"), external_react_default.a.createElement("select", {
            id: "selectionAdults2",
            onChange: this.twoCallsAdult2
          }, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2))), external_react_default.a.createElement(room2_Slot, null, external_react_default.a.createElement(room2_P, null, "Children"), external_react_default.a.createElement(room2_P, null, "(0-17)"), external_react_default.a.createElement("select", {
            id: "selectionChildren2",
            onChange: this.twoCallsChildren2
          }, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))));
        }
      } else {
        select = external_react_default.a.createElement(ItemWrapNay, null, external_react_default.a.createElement(Heading2Nay, null, "Room ", this.state.room), external_react_default.a.createElement(ItemNay, null, external_react_default.a.createElement(Checkbox, {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          }
        }), external_react_default.a.createElement(room2_Slot, null, external_react_default.a.createElement(room2_P, null, "Adults"), external_react_default.a.createElement(room2_P, null, "(18+)"), external_react_default.a.createElement("select", {
          disabled: true
        }, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2))), external_react_default.a.createElement(room2_Slot, null, external_react_default.a.createElement(room2_P, null, "Children"), external_react_default.a.createElement(room2_P, null, "(0-17)"), external_react_default.a.createElement("select", {
          disabled: true
        }, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))));
      }

      return external_react_default.a.createElement(room2_GridItem, null, external_react_default.a.createElement(room2_Box, null, select));
    }
  }, {
    key: "functionOneAdult2",
    value: function functionOneAdult2(e) {
      e.persist();
      this.setState({
        adults: parse_int_default()(e.target.value)
      }, function () {
        this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
      });
    }
  }, {
    key: "functionTwoAdult2",
    value: function functionTwoAdult2(e) {
      e.persist();
      document.getElementById('selectionAdults2').value = parse_int_default()(e.target.value);

      if (this.props.data !== undefined) {
        this.props.data.adults2 = parse_int_default()(e.target.value);
      }
    }
  }, {
    key: "functionOneChildren2",
    value: function functionOneChildren2(e) {
      e.persist();
      this.setState({
        children: parse_int_default()(e.target.value)
      }, function () {
        this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
      });
    }
  }, {
    key: "functionTwoChildren2",
    value: function functionTwoChildren2(e) {
      e.persist();

      if (false) {}
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props != nextProps) {
        if (this.props.data !== undefined) {
          this.setState({
            check: nextProps.check,
            adults: this.props.data.adults2,
            children: this.props.data.children2
          });
        } else {
          this.setState({
            check: nextProps.check,
            adults: this.state.adults,
            children: this.state.children
          });
        }
      }
    }
  }, {
    key: "getStuff",
    value: function getStuff() {
      this.setState({
        check: !this.state.check,
        adults: this.state.adults || 1,
        children: this.state.children
      }, function () {
        if (this.props.data !== undefined) {
          this.props.fromChildToParentCallback([this.state.check, this.state.room, this.props.data.adults2, this.props.data.children2]);
        } else {
          this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
        }
      });
    }
  }]);

  return Room2;
}(external_react_default.a.Component);

/* harmony default export */ var room2 = (room2_Room2);
// CONCATENATED MODULE: ./components/room3.js










function room3_templateObject11() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 1px 0;\n\tfont-size: 12px;\n"]);

  room3_templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function room3_templateObject10() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tpadding-left: 20px;\n\tbackground: #DADDE8;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tborder-radius-left: 5px;\n\tborder-radius-right: 5px;\n"]);

  room3_templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function room3_templateObject9() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tmargin-left: 20px;\n"]);

  room3_templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function room3_templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 7px\n"]);

  room3_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function room3_templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: inline-block;\n"]);

  room3_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function room3_templateObject6() {
  var data = _taggedTemplateLiteral(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #C3CAE2;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  room3_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function room3_templateObject5() {
  var data = _taggedTemplateLiteral(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: #DADDE8;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  room3_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function room3_templateObject4() {
  var data = _taggedTemplateLiteral(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #EAEAEA;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  room3_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function room3_templateObject3() {
  var data = _taggedTemplateLiteral(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: white;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  room3_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function room3_templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: inline-block;\n  \t}\n"]);

  room3_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function room3_templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: -18px;\n\tleft: 0;\n"]);

  room3_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var room3_Checkbox = external_styled_components_default.a.input(room3_templateObject());
var room3_GridItem = external_styled_components_default.a.div(room3_templateObject2());
var room3_Item = external_styled_components_default.a.div(room3_templateObject3());
var room3_ItemWrap = external_styled_components_default.a.div(room3_templateObject4());
var room3_ItemNay = external_styled_components_default.a.div(room3_templateObject5());
var room3_ItemWrapNay = external_styled_components_default.a.div(room3_templateObject6());
var room3_Box = external_styled_components_default.a.div(room3_templateObject7());
var room3_Slot = external_styled_components_default.a.div(room3_templateObject8());
var room3_Heading2 = external_styled_components_default.a.span(room3_templateObject9());
var room3_Heading2Nay = external_styled_components_default.a.span(room3_templateObject10());
var room3_P = external_styled_components_default.a.p(room3_templateObject11());

var room3_Room3 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Room3, _React$Component);

  function Room3(props) {
    var _this;

    _classCallCheck(this, Room3);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Room3).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "twoCallsAdult3", function (e) {
      e.persist();

      _this.functionOneAdult3(e);

      _this.functionTwoAdult3(e);
    });

    _defineProperty(_assertThisInitialized(_this), "twoCallsChildren3", function (e) {
      e.persist();

      _this.functionOneChildren3(e);

      _this.functionTwoChildren3(e);
    });

    if (_this.props.data !== undefined) {
      _this.state = {
        room: 3,
        adults: _this.props.data.adults3,
        children: _this.props.data.children3
      };
    } else {
      console.log('tot3');
      _this.state = {
        room: 3,
        adults: 1,
        children: 0
      };
    }

    return _this;
  }

  _createClass(Room3, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var select = '';
      var optionsAdults = '';
      var optionsChildren = '';

      if (this.state.check === true) {
        if (this.props.data !== undefined) {
          select = external_react_default.a.createElement(room3_ItemWrap, null, external_react_default.a.createElement(room3_Heading2, null, "Room ", this.state.room), external_react_default.a.createElement(room3_Item, null, external_react_default.a.createElement(room3_Checkbox, {
            type: "checkbox",
            onClick: function onClick() {
              return _this2.getStuff();
            },
            checked: true
          }), external_react_default.a.createElement(room3_Slot, null, external_react_default.a.createElement(room3_P, null, "Adults"), external_react_default.a.createElement(room3_P, null, "(18+)"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("select", {
            id: "selectionAdults3",
            value: this.props.data.adults3,
            onChange: this.twoCallsAdult3
          }, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))), external_react_default.a.createElement(room3_Slot, null, external_react_default.a.createElement(room3_P, null, "Children"), external_react_default.a.createElement(room3_P, null, "(0-17)"), external_react_default.a.createElement("select", {
            id: "selectionChildren3",
            value: this.props.data.children3,
            onChange: this.twoCallsChildren3
          }, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))));
        } else {
          select = external_react_default.a.createElement(room3_ItemWrap, null, external_react_default.a.createElement(room3_Heading2, null, "Room ", this.state.room), external_react_default.a.createElement(room3_Item, null, external_react_default.a.createElement(room3_Checkbox, {
            type: "checkbox",
            onClick: function onClick() {
              return _this2.getStuff();
            },
            checked: true
          }), external_react_default.a.createElement(room3_Slot, null, external_react_default.a.createElement(room3_P, null, "Adults"), external_react_default.a.createElement(room3_P, null, "(18+)"), external_react_default.a.createElement("select", {
            id: "selectionAdults3",
            onChange: this.twoCallsAdult3
          }, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2))), external_react_default.a.createElement(room3_Slot, null, external_react_default.a.createElement(room3_P, null, "Children"), external_react_default.a.createElement(room3_P, null, "(0-17)"), external_react_default.a.createElement("select", {
            id: "selectionChildren3",
            onChange: this.twoCallsChildren3
          }, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))));
        }
      } else {
        select = external_react_default.a.createElement(room3_ItemWrapNay, null, external_react_default.a.createElement(room3_Heading2Nay, null, "Room ", this.state.room), external_react_default.a.createElement(room3_ItemNay, null, external_react_default.a.createElement(room3_Checkbox, {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          }
        }), external_react_default.a.createElement(room3_Slot, null, external_react_default.a.createElement(room3_P, null, "Adults"), external_react_default.a.createElement(room3_P, null, "(18+)"), external_react_default.a.createElement("select", {
          disabled: true
        }, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2))), external_react_default.a.createElement(room3_Slot, null, external_react_default.a.createElement(room3_P, null, "Children"), external_react_default.a.createElement(room3_P, null, "(0-17)"), external_react_default.a.createElement("select", {
          disabled: true
        }, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))));
      }

      return external_react_default.a.createElement(room3_GridItem, null, external_react_default.a.createElement(room3_Box, null, select));
    }
  }, {
    key: "functionOneAdult3",
    value: function functionOneAdult3(e) {
      e.persist();
      this.setState({
        adults: parse_int_default()(e.target.value)
      }, function () {
        this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
      });
    }
  }, {
    key: "functionTwoAdult3",
    value: function functionTwoAdult3(e) {
      e.persist();
      document.getElementById('selectionAdults3').value = parse_int_default()(e.target.value);

      if (this.props.data !== undefined) {
        this.props.data.adults3 = parse_int_default()(e.target.value);
      }
    }
  }, {
    key: "functionOneChildren3",
    value: function functionOneChildren3(e) {
      e.persist();
      this.setState({
        children: parse_int_default()(e.target.value)
      }, function () {
        this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
      });
    }
  }, {
    key: "functionTwoChildren3",
    value: function functionTwoChildren3(e) {
      e.persist();

      if (false) {}
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props != nextProps) {
        if (this.props.data !== undefined) {
          this.setState({
            check: nextProps.check,
            adults: this.props.data.adults3,
            children: this.props.data.children3
          });
        } else {
          this.setState({
            check: nextProps.check,
            adults: this.state.adults,
            children: this.state.children
          });
        }
      }
    }
  }, {
    key: "getStuff",
    value: function getStuff() {
      this.setState({
        check: !this.state.check,
        adults: this.state.adults || 1,
        children: this.state.children
      }, function () {
        if (this.props.data !== undefined) {
          this.props.fromChildToParentCallback([this.state.check, this.state.room, this.props.data.adults3, this.props.data.children3]);
        } else {
          this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
        }
      });
    }
  }]);

  return Room3;
}(external_react_default.a.Component);

/* harmony default export */ var room3 = (room3_Room3);
// CONCATENATED MODULE: ./components/room4.js










function room4_templateObject11() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 1px 0;\n\tfont-size: 12px;\n"]);

  room4_templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function room4_templateObject10() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tpadding-left: 20px;\n\tbackground: #DADDE8;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tborder-radius-left: 5px;\n\tborder-radius-right: 5px;\n"]);

  room4_templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function room4_templateObject9() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tmargin-left: 20px;\n"]);

  room4_templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function room4_templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 7px\n"]);

  room4_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function room4_templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: inline-block;\n"]);

  room4_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function room4_templateObject6() {
  var data = _taggedTemplateLiteral(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #C3CAE2;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  room4_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function room4_templateObject5() {
  var data = _taggedTemplateLiteral(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: #DADDE8;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  room4_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function room4_templateObject4() {
  var data = _taggedTemplateLiteral(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #EAEAEA;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  room4_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function room4_templateObject3() {
  var data = _taggedTemplateLiteral(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: white;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  room4_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function room4_templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: inline-block;\n  \t}\n"]);

  room4_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function room4_templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: -18px;\n\tleft: 0;\n"]);

  room4_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var room4_Checkbox = external_styled_components_default.a.input(room4_templateObject());
var room4_GridItem = external_styled_components_default.a.div(room4_templateObject2());
var room4_Item = external_styled_components_default.a.div(room4_templateObject3());
var room4_ItemWrap = external_styled_components_default.a.div(room4_templateObject4());
var room4_ItemNay = external_styled_components_default.a.div(room4_templateObject5());
var room4_ItemWrapNay = external_styled_components_default.a.div(room4_templateObject6());
var room4_Box = external_styled_components_default.a.div(room4_templateObject7());
var room4_Slot = external_styled_components_default.a.div(room4_templateObject8());
var room4_Heading2 = external_styled_components_default.a.span(room4_templateObject9());
var room4_Heading2Nay = external_styled_components_default.a.span(room4_templateObject10());
var room4_P = external_styled_components_default.a.p(room4_templateObject11());

var room4_Room4 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Room4, _React$Component);

  function Room4(props) {
    var _this;

    _classCallCheck(this, Room4);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Room4).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "twoCallsAdult4", function (e) {
      e.persist();

      _this.functionOneAdult4(e);

      _this.functionTwoAdult4(e);
    });

    _defineProperty(_assertThisInitialized(_this), "twoCallsChildren4", function (e) {
      e.persist();

      _this.functionOneChildren4(e);

      _this.functionTwoChildren4(e);
    });

    if (_this.props.data !== undefined) {
      _this.state = {
        room: 4,
        adults: _this.props.data.adults4,
        children: _this.props.data.children4
      };
    } else {
      console.log('tot4');
      _this.state = {
        room: 4,
        adults: 1,
        children: 0
      };
    }

    return _this;
  }

  _createClass(Room4, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var select = '';
      var optionsAdults = '';
      var optionsChildren = '';

      if (this.state.check === true) {
        if (this.props.data !== undefined) {
          select = external_react_default.a.createElement(room4_ItemWrap, null, external_react_default.a.createElement(room4_Heading2, null, "Room ", this.state.room), external_react_default.a.createElement(room4_Item, null, external_react_default.a.createElement(room4_Checkbox, {
            type: "checkbox",
            onClick: function onClick() {
              return _this2.getStuff();
            },
            checked: true
          }), external_react_default.a.createElement(room4_Slot, null, external_react_default.a.createElement(room4_P, null, "Adults"), external_react_default.a.createElement(room4_P, null, "(18+)"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("select", {
            id: "selectionAdults4",
            value: this.props.data.adults4,
            onChange: this.twoCallsAdult4
          }, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))), external_react_default.a.createElement(room4_Slot, null, external_react_default.a.createElement(room4_P, null, "Children"), external_react_default.a.createElement(room4_P, null, "(0-17)"), external_react_default.a.createElement("select", {
            id: "selectionChildren4",
            value: this.props.data.children4,
            onChange: this.twoCallsChildren4
          }, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))));
        } else {
          select = external_react_default.a.createElement(room4_ItemWrap, null, external_react_default.a.createElement(room4_Heading2, null, "Room ", this.state.room), external_react_default.a.createElement(room4_Item, null, external_react_default.a.createElement(room4_Checkbox, {
            type: "checkbox",
            onClick: function onClick() {
              return _this2.getStuff();
            },
            checked: true
          }), external_react_default.a.createElement(room4_Slot, null, external_react_default.a.createElement(room4_P, null, "Adults"), external_react_default.a.createElement(room4_P, null, "(18+)"), external_react_default.a.createElement("select", {
            id: "selectionAdults4",
            onChange: this.twoCallsAdult4
          }, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2))), external_react_default.a.createElement(room4_Slot, null, external_react_default.a.createElement(room4_P, null, "Children"), external_react_default.a.createElement(room4_P, null, "(0-17)"), external_react_default.a.createElement("select", {
            id: "selectionChildren4",
            onChange: this.twoCallsChildren4
          }, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))));
        }
      } else {
        select = external_react_default.a.createElement(room4_ItemWrapNay, null, external_react_default.a.createElement(room4_Heading2Nay, null, "Room ", this.state.room), external_react_default.a.createElement(room4_ItemNay, null, external_react_default.a.createElement(room4_Checkbox, {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          }
        }), external_react_default.a.createElement(room4_Slot, null, external_react_default.a.createElement(room4_P, null, "Adults"), external_react_default.a.createElement(room4_P, null, "(18+)"), external_react_default.a.createElement("select", {
          disabled: true
        }, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2))), external_react_default.a.createElement(room4_Slot, null, external_react_default.a.createElement(room4_P, null, "Children"), external_react_default.a.createElement(room4_P, null, "(0-17)"), external_react_default.a.createElement("select", {
          disabled: true
        }, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))));
      }

      return external_react_default.a.createElement(room4_GridItem, null, external_react_default.a.createElement(room4_Box, null, select));
    }
  }, {
    key: "functionOneAdult4",
    value: function functionOneAdult4(e) {
      e.persist();
      this.setState({
        adults: parse_int_default()(e.target.value)
      }, function () {
        this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
      });
    }
  }, {
    key: "functionTwoAdult4",
    value: function functionTwoAdult4(e) {
      e.persist();
      document.getElementById('selectionAdults4').value = parse_int_default()(e.target.value);

      if (this.props.data !== undefined) {
        this.props.data.adults4 = parse_int_default()(e.target.value);
      }
    }
  }, {
    key: "functionOneChildren4",
    value: function functionOneChildren4(e) {
      e.persist();
      this.setState({
        children: parse_int_default()(e.target.value)
      }, function () {
        this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
      });
    }
  }, {
    key: "functionTwoChildren4",
    value: function functionTwoChildren4(e) {
      e.persist();

      if (false) {}
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props != nextProps) {
        if (this.props.data !== undefined) {
          this.setState({
            check: nextProps.check,
            adults: this.props.data.adults4,
            children: this.props.data.children4
          });
        } else {
          this.setState({
            check: nextProps.check,
            adults: this.state.adults,
            children: this.state.children
          });
        }
      }
    }
  }, {
    key: "getStuff",
    value: function getStuff() {
      this.setState({
        check: !this.state.check,
        adults: this.state.adults || 1,
        children: this.state.children
      }, function () {
        if (this.props.data !== undefined) {
          this.props.fromChildToParentCallback([this.state.check, this.state.room, this.props.data.adults4, this.props.data.children4]);
        } else {
          this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
        }
      });
    }
  }]);

  return Room4;
}(external_react_default.a.Component);

/* harmony default export */ var room4 = (room4_Room4);
// CONCATENATED MODULE: ./components/parent.js











function parent_templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: flex;\n\tmargin-top: -20px;\n\tmargin-left: 525px;\n"]);

  parent_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function parent_templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: flex;\n\tmargin-top: 10px;\n\tmargin-left: 10px;\n"]);

  parent_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function parent_templateObject() {
  var data = _taggedTemplateLiteral(["\n\tmargin:0 auto;\n"]);

  parent_templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var GridWrap = external_styled_components_default.a.div(parent_templateObject());
var Submit = external_styled_components_default.a.button(parent_templateObject2());
var Clear = external_styled_components_default.a.button(parent_templateObject3());

var parent_Parent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Parent, _React$Component);

  function Parent(props) {
    var _this;

    _classCallCheck(this, Parent);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Parent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    if (_this.props.peter !== null) {
      ;
      var initial = _this.props.peter;
      _this.state = {
        checked: initial.checked,
        adults1: initial.adults1,
        children1: initial.children1,
        adults2: initial.adults2,
        children2: initial.children2,
        adults3: initial.adults3,
        children3: initial.children3,
        adults4: initial.adults4,
        children4: initial.children4
      };
    } else {
      _this.state = {
        checked: '',
        adults1: 1,
        children1: 0,
        adults2: 1,
        children2: 0,
        adults3: 1,
        children3: 0,
        adults4: 1,
        children4: 0
      };
    }

    return _this;
  }

  _createClass(Parent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var room1Value = function room1Value(value) {
        if (value[0] === true && _this2.state.checked === '') {
          _this2.setState({
            checked: ''
          });
        } else if (value[0] === false) {
          _this2.setState({
            checked: ''
          });
        } else {
          _this2.setState({
            adults1: value[2],
            children1: value[3]
          }, function () {});
        }
      };

      var room2Value = function room2Value(value) {
        if (value[0] === true && _this2.state.checked === '' || _this2.state.checked < value[1]) {
          _this2.setState({
            checked: parse_int_default()(2)
          });
        } else if (value[0] === false) {
          _this2.setState({
            checked: ''
          });
        } else {
          _this2.setState({
            adults2: value[2],
            children2: value[3]
          }, function () {});
        }
      };

      var room3Value = function room3Value(value) {
        if (value[0] === true && _this2.state.checked === '' || _this2.state.checked < value[1]) {
          _this2.setState({
            checked: parse_int_default()(3)
          });
        } else if (value[0] === false && _this2.state.checked === value[1]) {
          _this2.setState({
            checked: parse_int_default()(2)
          });
        } else if (value[0] === false && _this2.state.checked > value[1]) {
          _this2.setState({
            checked: parse_int_default()(2)
          });
        } else if (value[0] === false) {
          _this2.setState({
            checked: ''
          });
        } else {
          _this2.setState({
            adults3: value[2],
            children3: value[3]
          }, function () {});
        }
      };

      var room4Value = function room4Value(value) {
        if (value[0] === true && _this2.state.checked === '' || _this2.state.checked < value[1]) {
          _this2.setState({
            checked: parse_int_default()(4)
          });
        } else if (value[0] === false && _this2.state.checked === value[1]) {
          _this2.setState({
            checked: parse_int_default()(3)
          });
        } else if (value[0] === false) {
          _this2.setState({
            checked: ''
          });
        } else {
          _this2.setState({
            adults4: value[2],
            children4: value[3]
          }, function () {});
        }
      };

      var children = '';

      if (this.props.peter !== null) {
        var chips = this.props.peter;
        console.log(this.state.checked);

        if (this.state.checked === 2) {
          children = external_react_default.a.createElement(GridWrap, null, external_react_default.a.createElement(room1, {
            fromChildToParentCallback: room1Value,
            data: chips
          }), external_react_default.a.createElement(room2, {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: true
          }), external_react_default.a.createElement(room3, {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: false
          }), external_react_default.a.createElement(room4, {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: false
          }));
        } else if (this.state.checked === 3) {
          children = external_react_default.a.createElement(GridWrap, null, external_react_default.a.createElement(room1, {
            fromChildToParentCallback: room1Value,
            data: chips
          }), external_react_default.a.createElement(room2, {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: true
          }), external_react_default.a.createElement(room3, {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: true
          }), external_react_default.a.createElement(room4, {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: false
          }));
        } else if (this.state.checked === 4) {
          children = external_react_default.a.createElement(GridWrap, null, external_react_default.a.createElement(room1, {
            fromChildToParentCallback: room1Value,
            data: chips
          }), external_react_default.a.createElement(room2, {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: true
          }), external_react_default.a.createElement(room3, {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: true
          }), external_react_default.a.createElement(room4, {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: true
          }));
        } else {
          children = external_react_default.a.createElement(GridWrap, null, external_react_default.a.createElement(room1, {
            fromChildToParentCallback: room1Value,
            data: chips
          }), external_react_default.a.createElement(room2, {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: false
          }), external_react_default.a.createElement(room3, {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: false
          }), external_react_default.a.createElement(room4, {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: false
          }));
        }
      } else {
        if (this.state.checked === 2) {
          children = external_react_default.a.createElement(GridWrap, null, external_react_default.a.createElement(room1, {
            fromChildToParentCallback: room1Value
          }), external_react_default.a.createElement(room2, {
            fromChildToParentCallback: room2Value,
            check: true
          }), external_react_default.a.createElement(room3, {
            fromChildToParentCallback: room3Value,
            check: false
          }), external_react_default.a.createElement(room4, {
            fromChildToParentCallback: room4Value,
            check: false
          }));
        } else if (this.state.checked === 3) {
          children = external_react_default.a.createElement(GridWrap, null, external_react_default.a.createElement(room1, {
            fromChildToParentCallback: room1Value
          }), external_react_default.a.createElement(room2, {
            fromChildToParentCallback: room2Value,
            check: true
          }), external_react_default.a.createElement(room3, {
            fromChildToParentCallback: room3Value,
            check: true
          }), external_react_default.a.createElement(room4, {
            fromChildToParentCallback: room4Value,
            check: false
          }));
        } else if (this.state.checked === 4) {
          children = external_react_default.a.createElement(GridWrap, null, external_react_default.a.createElement(room1, {
            fromChildToParentCallback: room1Value
          }), external_react_default.a.createElement(room2, {
            fromChildToParentCallback: room2Value,
            check: true
          }), external_react_default.a.createElement(room3, {
            fromChildToParentCallback: room3Value,
            check: true
          }), external_react_default.a.createElement(room4, {
            fromChildToParentCallback: room4Value,
            check: true
          }));
        } else {
          console.log('empty');
          children = external_react_default.a.createElement(GridWrap, null, external_react_default.a.createElement(room1, {
            fromChildToParentCallback: room1Value
          }), external_react_default.a.createElement(room2, {
            fromChildToParentCallback: room2Value,
            check: false
          }), external_react_default.a.createElement(room3, {
            fromChildToParentCallback: room3Value,
            check: false
          }), external_react_default.a.createElement(room4, {
            fromChildToParentCallback: room4Value,
            check: false
          }));
        }
      }

      return external_react_default.a.createElement(GridWrap, null, children, external_react_default.a.createElement(Submit, {
        type: "button",
        onClick: function onClick() {
          return _this2.storeStuff();
        }
      }, "Submit"), external_react_default.a.createElement(Clear, {
        type: "button",
        onClick: function onClick() {
          return _this2.eraseStuff();
        }
      }, "Clear"));
    }
  }, {
    key: "storeStuff",
    value: function storeStuff() {
      var status = this.state;
      localStorage.setItem('submittedData', stringify_default()(status));
    }
  }, {
    key: "eraseStuff",
    value: function eraseStuff() {
      localStorage.clear();
    }
  }]);

  return Parent;
}(external_react_default.a.Component);

/* harmony default export */ var components_parent = (parent_Parent);
// CONCATENATED MODULE: ./components/layout.js



function layout_templateObject3() {
  var data = _taggedTemplateLiteral(["\n  \tmargin: 0 auto;\n  \ttext-align:center;\n  \tdisplay:block;\n  \tfont-family:'verdana';\n\tfont-size:90px;\n\tcolor: white;\n\tdisplay: table-cell;\n  \tvertical-align: middle;\n"]);

  layout_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function layout_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  \tmargin: 0 auto;\n\tdisplay: flex;\n  \tflex-wrap: wrap;\n  \twidth: 650px;\n  \tdisplay: table-cell;\n  \tvertical-align: middle;\n  \tmargin-left: auto;\n  \tmargin-right: auto;\n  \tbackground: white;\n"]);

  layout_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function layout_templateObject() {
  var data = _taggedTemplateLiteral(["\n\tbackground: black;\n\t  display: table;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n"]);

  layout_templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Sandwich = external_styled_components_default.a.div(layout_templateObject());
var Sand = external_styled_components_default.a.div(layout_templateObject2());
var Top = external_styled_components_default.a.div(layout_templateObject3());

var layout_Layout = function Layout(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Hotel App"), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "https://i.imgur.com/f0vIMQs.png"
  })), external_react_default.a.createElement(Sandwich, null, external_react_default.a.createElement(Top, null, "HOTEL APP"), external_react_default.a.createElement(Sand, null, props.children)));
};

/* harmony default export */ var layout = (layout_Layout);
// CONCATENATED MODULE: ./data/rooms.js
var parsedData = '';

if (typeof Storage !== "undefined") {
  parsedData = JSON.parse(localStorage.getItem('submittedData')); // console.log('clear');
  // localStorage.clear();
} else {
  parsedData = [];
}

/* harmony default export */ var rooms = (parsedData);
// CONCATENATED MODULE: ./pages/index.js

















var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.data = rooms;
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(layout, null, external_react_default.a.createElement(components_parent, {
        peter: rooms
      }));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "VKpo":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Fuct");
module.exports = __webpack_require__("p9MR").parseInt;


/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Yzr4":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("0T/a");
var defined = __webpack_require__("5foh");
var fails = __webpack_require__("14Ie");
var spaces = __webpack_require__("cCpf");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "b4pn":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cCpf":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "dwSY":
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__("2jw7").parseInt;
var $trim = __webpack_require__("Yzr4").trim;
var ws = __webpack_require__("cCpf");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "fZVS":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("14Ie")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "jOCL":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("OtwA");
var createDesc = __webpack_require__("+EWW");
module.exports = __webpack_require__("fZVS") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "p9MR":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "pH/F":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("fZVS") && !__webpack_require__("14Ie")(function () {
  return Object.defineProperty(__webpack_require__("Ev2A")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "vCXk":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("8v5W");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });