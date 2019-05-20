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

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    promise_default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new promise_default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
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
// CONCATENATED MODULE: ./components/room1.js









function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\twidth: 150px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay:inline-block;\n\tflex-basis:calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 2rem 2rem 2rem;\n\tpadding: 2rem;\n\tborder: 2px solid black;\n\tbackground: #e2e2e2;\n\tbox-shadow: 0 0 0 5px rgba(0,0,0,0.03);\n\tposition: relative;\n\tmax-width:200px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Grid = external_styled_components_default.a.div(_templateObject());
var Box = external_styled_components_default.a.div(_templateObject2());

var room1_Room1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Room1, _React$Component);

  function Room1() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Room1);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf_getPrototypeOf(Room1)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      room: 1,
      adults: '1',
      children: '0',
      check: false
    });

    return _this;
  }

  _createClass(Room1, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var select = '';
      select = external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "Adults 18+"), external_react_default.a.createElement("select", {
        onChange: function onChange(e) {
          return _this2.setState({
            adults: e.target.value
          });
        }
      }, external_react_default.a.createElement("option", null, "1"), external_react_default.a.createElement("option", null, "2")), external_react_default.a.createElement("p", null, "Children 0-17"), external_react_default.a.createElement("select", {
        onChange: function onChange(e) {
          return _this2.setState({
            room: _this2.props.room.room,
            children: e.target.value
          });
        }
      }, external_react_default.a.createElement("option", null, "0"), external_react_default.a.createElement("option", null, "1"), external_react_default.a.createElement("option", null, "2")));
      return external_react_default.a.createElement(Grid, null, external_react_default.a.createElement(Box, null, this.state.room, select));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getStuff();
    }
  }, {
    key: "getStuff",
    value: function getStuff() {
      this.setState({
        check: !this.state.check
      }, function () {
        this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
      });
    }
  }]);

  return Room1;
}(external_react_default.a.Component);

/* harmony default export */ var room1 = (room1_Room1);
// CONCATENATED MODULE: ./components/room2.js









function room2_templateObject2() {
  var data = _taggedTemplateLiteral(["\n\twidth: 150px;\n"]);

  room2_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function room2_templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay:inline-block;\n\tflex-basis:calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 2rem 2rem 2rem;\n\tpadding: 2rem;\n\tborder: 2px solid black;\n\tbackground: #e2e2e2;\n\tbox-shadow: 0 0 0 5px rgba(0,0,0,0.03);\n\tposition: relative;\n\tmax-width:200px;\n"]);

  room2_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var room2_Grid = external_styled_components_default.a.div(room2_templateObject());
var room2_Box = external_styled_components_default.a.div(room2_templateObject2());

var room2_Room2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Room2, _React$Component);

  function Room2(props) {
    var _this;

    _classCallCheck(this, Room2);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Room2).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      room: 2,
      adults: '0',
      children: '0'
    });

    _this.state = {
      check: _this.props.check
    };
    return _this;
  }

  _createClass(Room2, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var select = '';

      if (this.state.check === true) {
        select = external_react_default.a.createElement("div", null, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          }
        })), external_react_default.a.createElement("p", null, "Adults 18+"), external_react_default.a.createElement("select", {
          onChange: function onChange(e) {
            return _this2.setState({
              adults: e.target.value
            });
          }
        }, external_react_default.a.createElement("option", null, "1"), external_react_default.a.createElement("option", null, "2")), external_react_default.a.createElement("p", null, "Children 0-17"), external_react_default.a.createElement("select", {
          onChange: function onChange(e) {
            return _this2.setState({
              room: _this2.props.room.room,
              children: e.target.value
            });
          }
        }, external_react_default.a.createElement("option", null, "0"), external_react_default.a.createElement("option", null, "1"), external_react_default.a.createElement("option", null, "2")));
      } else {
        select = external_react_default.a.createElement("div", null, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          }
        })), external_react_default.a.createElement("p", null, "Adults 18+"), external_react_default.a.createElement("select", {
          disabled: true,
          onChange: function onChange(e) {
            return _this2.setState({
              adults: e.target.value
            });
          }
        }, external_react_default.a.createElement("option", null, "1"), external_react_default.a.createElement("option", null, "2")), external_react_default.a.createElement("p", null, "Children 0-17"), external_react_default.a.createElement("select", {
          disabled: true,
          onChange: function onChange(e) {
            return _this2.setState({
              room: _this2.props.room.room,
              children: e.target.value
            });
          }
        }, external_react_default.a.createElement("option", null, "0"), external_react_default.a.createElement("option", null, "1"), external_react_default.a.createElement("option", null, "2")));
      }

      return external_react_default.a.createElement(room2_Grid, null, external_react_default.a.createElement(room2_Box, null, this.state.room, select));
    }
  }, {
    key: "getStuff",
    value: function getStuff() {
      this.setState({
        check: !this.state.check
      }, function () {
        this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
      });
    }
  }]);

  return Room2;
}(external_react_default.a.Component);

/* harmony default export */ var room2 = (room2_Room2);
// CONCATENATED MODULE: ./components/room3.js









function room3_templateObject2() {
  var data = _taggedTemplateLiteral(["\n\twidth: 150px;\n"]);

  room3_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function room3_templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay:inline-block;\n\tflex-basis:calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 2rem 2rem 2rem;\n\tpadding: 2rem;\n\tborder: 2px solid black;\n\tbackground: #e2e2e2;\n\tbox-shadow: 0 0 0 5px rgba(0,0,0,0.03);\n\tposition: relative;\n\tmax-width:200px;\n"]);

  room3_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var room3_Grid = external_styled_components_default.a.div(room3_templateObject());
var room3_Box = external_styled_components_default.a.div(room3_templateObject2());

var room3_Room3 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Room3, _React$Component);

  function Room3(props) {
    var _this;

    _classCallCheck(this, Room3);

    // console.log('bunny');
    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Room3).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      room: 3,
      adults: '0',
      children: '0'
    });

    _this.state = {
      check: _this.props.check
    };
    return _this;
  }

  _createClass(Room3, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.props);
      var select = ''; // console.log(this.state);

      if (this.state.check === true) {
        select = external_react_default.a.createElement("div", null, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          },
          checked: true
        })), external_react_default.a.createElement("p", null, "Adults 18+"), external_react_default.a.createElement("select", {
          onChange: function onChange(e) {
            return _this2.setState({
              adults: e.target.value
            });
          }
        }, external_react_default.a.createElement("option", null, "1"), external_react_default.a.createElement("option", null, "2")), external_react_default.a.createElement("p", null, "Children 0-17"), external_react_default.a.createElement("select", {
          onChange: function onChange(e) {
            return _this2.setState({
              room: _this2.props.room.room,
              children: e.target.value
            });
          }
        }, external_react_default.a.createElement("option", null, "0"), external_react_default.a.createElement("option", null, "1"), external_react_default.a.createElement("option", null, "2")));
      } else {
        select = external_react_default.a.createElement("div", null, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          }
        })), external_react_default.a.createElement("p", null, "Adults 18+"), external_react_default.a.createElement("select", {
          disabled: true,
          onChange: function onChange(e) {
            return _this2.setState({
              adults: e.target.value
            });
          }
        }, external_react_default.a.createElement("option", null, "1"), external_react_default.a.createElement("option", null, "2")), external_react_default.a.createElement("p", null, "Children 0-17"), external_react_default.a.createElement("select", {
          disabled: true,
          onChange: function onChange(e) {
            return _this2.setState({
              room: _this2.props.room.room,
              children: e.target.value
            });
          }
        }, external_react_default.a.createElement("option", null, "0"), external_react_default.a.createElement("option", null, "1"), external_react_default.a.createElement("option", null, "2")));
      }

      return external_react_default.a.createElement(room3_Grid, null, external_react_default.a.createElement(room3_Box, null, this.state.room, select));
    }
  }, {
    key: "getStuff",
    value: function getStuff() {
      this.setState({
        check: !this.state.check
      }, function () {
        this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
      });
    }
  }]);

  return Room3;
}(external_react_default.a.Component);

/* harmony default export */ var room3 = (room3_Room3);
// CONCATENATED MODULE: ./components/room4.js









function room4_templateObject2() {
  var data = _taggedTemplateLiteral(["\n\twidth: 150px;\n"]);

  room4_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function room4_templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay:inline-block;\n\tflex-basis:calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 2rem 2rem 2rem;\n\tpadding: 2rem;\n\tborder: 2px solid black;\n\tbackground: #e2e2e2;\n\tbox-shadow: 0 0 0 5px rgba(0,0,0,0.03);\n\tposition: relative;\n\tmax-width:200px;\n"]);

  room4_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var room4_Grid = external_styled_components_default.a.div(room4_templateObject());
var room4_Box = external_styled_components_default.a.div(room4_templateObject2());

var room4_Room4 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Room4, _React$Component);

  function Room4(props) {
    var _this;

    _classCallCheck(this, Room4);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Room4).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      room: 4,
      adults: '0',
      children: '0'
    });

    _this.state = {
      check: _this.props.check
    };
    return _this;
  }

  _createClass(Room4, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var select = '';

      if (this.state.check === true) {
        select = external_react_default.a.createElement("div", null, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          },
          checked: true
        })), external_react_default.a.createElement("p", null, "Adults 18+"), external_react_default.a.createElement("select", {
          onChange: function onChange(e) {
            return _this2.setState({
              adults: e.target.value
            });
          }
        }, external_react_default.a.createElement("option", null, "1"), external_react_default.a.createElement("option", null, "2")), external_react_default.a.createElement("p", null, "Children 0-17"), external_react_default.a.createElement("select", {
          onChange: function onChange(e) {
            return _this2.setState({
              room: _this2.props.room.room,
              children: e.target.value
            });
          }
        }, external_react_default.a.createElement("option", null, "0"), external_react_default.a.createElement("option", null, "1"), external_react_default.a.createElement("option", null, "2")));
      } else {
        select = external_react_default.a.createElement("div", null, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          }
        })), external_react_default.a.createElement("p", null, "Adults 18+"), external_react_default.a.createElement("select", {
          disabled: true,
          onChange: function onChange(e) {
            return _this2.setState({
              adults: e.target.value
            });
          }
        }, external_react_default.a.createElement("option", null, "1"), external_react_default.a.createElement("option", null, "2")), external_react_default.a.createElement("p", null, "Children 0-17"), external_react_default.a.createElement("select", {
          disabled: true,
          onChange: function onChange(e) {
            return _this2.setState({
              room: _this2.props.room.room,
              children: e.target.value
            });
          }
        }, external_react_default.a.createElement("option", null, "0"), external_react_default.a.createElement("option", null, "1"), external_react_default.a.createElement("option", null, "2")));
      }

      return external_react_default.a.createElement(room4_Grid, null, external_react_default.a.createElement(room4_Box, null, this.state.room, select));
    }
  }, {
    key: "getStuff",
    value: function getStuff() {
      this.setState({
        check: !this.state.check
      }, function () {
        this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]); // this.props.fromChildToParentCallback(this.state.room);
        // this.props.fromChildToParentCallback(this.state.adults);
        // this.props.fromChildToParentCallback(this.state.children);
      });
    }
  }]);

  return Room4;
}(external_react_default.a.Component);

/* harmony default export */ var room4 = (room4_Room4);
// CONCATENATED MODULE: ./components/parent.js













var parent_Parent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Parent, _React$Component);

  function Parent() {
    _classCallCheck(this, Parent);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Parent).apply(this, arguments));
  }

  _createClass(Parent, [{
    key: "render",
    value: function render() {
      var _this = this;

      var room1Value = function room1Value(value) {};

      var room2Value = function room2Value(value) {};

      var room3Value = function room3Value(value) {};

      var room4Value = function room4Value(value) {
        if (value[0] === true) {
          reRender();
        }
      };

      var reRender = function reRender() {
        console.log('highFive');
        console.log('truth4');
        return external_react_default.a.createElement("div", null, external_react_default.a.createElement(room1, _extends({}, _this.props, {
          fromChildToParentCallback: room1Value
        })), external_react_default.a.createElement(room2, _extends({}, _this.props, {
          fromChildToParentCallback: room2Value,
          check: true
        })), external_react_default.a.createElement(room3, _extends({}, _this.props, {
          fromChildToParentCallback: room3Value,
          check: true
        })), external_react_default.a.createElement(room4, _extends({}, _this.props, {
          fromChildToParentCallback: room4Value,
          check: true
        })));
      };

      return external_react_default.a.createElement("div", null, console.log('mother'), external_react_default.a.createElement(room1, _extends({}, this.props, {
        fromChildToParentCallback: room1Value
      })), external_react_default.a.createElement(room2, _extends({}, this.props, {
        fromChildToParentCallback: room2Value,
        check: false
      })), external_react_default.a.createElement(room3, _extends({}, this.props, {
        fromChildToParentCallback: room3Value,
        check: false
      })), external_react_default.a.createElement(room4, _extends({}, this.props, {
        fromChildToParentCallback: room4Value,
        check: false
      })));
    }
  }]);

  return Parent;
}(external_react_default.a.Component);

/* harmony default export */ var components_parent = (parent_Parent); // <FieldEditor ref={this.FieldEditor1} />;
// const Child = ({fromChildToParentCallback}) => (
//   <div onClick={() => fromChildToParentCallback(42)}>
//     Click me
//   </div>
// );
// class Parent extends React.Component {
//   receiveChildValue = (value) => {
//     console.log("Parent received value from child: " + value); // value is 42
//   };
//   render() {
//     return (
//       <Child fromChildToParentCallback={this.receiveChildValue}/>
//     )
//   }
// }
// CONCATENATED MODULE: ./data/rooms.js
var rooms = [{
  "code": "BAhvZrRwcfu",
  "room": 1,
  "adults": 0,
  "children": 0,
  "check": true
}, {
  "code": "BAcyDyQwcXX",
  "room": 2,
  "adults": 0,
  "children": 0,
  "check": false
}, {
  "code": "BAPIPRjQce9",
  "room": 3,
  "adults": 0,
  "children": 0,
  "check": false
}, {
  "code": "BAF_KY4wcRY",
  "room": 4,
  "adults": 0,
  "children": 0,
  "check": false
}];
/* harmony default export */ var data_rooms = (rooms);
// CONCATENATED MODULE: ./pages/index.js




function pages_templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n  \tflex-wrap: wrap;\n  \tmax-width: 1200px;\n  \tmargin: 0 auto;\n"]);

  pages_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Wrap = external_styled_components_default.a.div(pages_templateObject());

var pages_Index = function Index(props) {
  return external_react_default.a.createElement(Wrap, null, external_react_default.a.createElement(components_parent, props));
};

pages_Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regenerator_default.a.mark(function _callee() {
  var data;
  return regenerator_default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = {
            rooms: data_rooms
          };
          return _context.abrupt("return", data);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
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

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ })

/******/ });