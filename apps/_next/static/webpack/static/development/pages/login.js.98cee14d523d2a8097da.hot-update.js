webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./components/Auth/Login.js":
/*!**********************************!*\
  !*** ./components/Auth/Login.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\Alex\\Projects\\yonsei\\radiant-frontend\\components\\Auth\\Login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Login = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Login, _Component);

  var _super = _createSuper(Login);

  function Login(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    _this = _super.call(this, props);
    _this.state = {
      username: '',
      password: '',
      message: ''
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "onChange",
    value: function onChange(e) {
      var state = {};
      state[e.target.name] = e.target.value;
      this.setState(state);
    }
  }, {
    key: "onLogin",
    value: function onLogin(e) {
      var _this2 = this;

      e.preventDefault();
      var _this$state = this.state,
          username = _this$state.username,
          password = _this$state.password;
      var data = new URLSearchParams();
      data.append('username', username);
      data.append('password', password);
      fetch('http://localhost:3838/auth/login', {
        method: 'POST',
        mode: 'no-cors',
        body: data.toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        console.log(res);

        if (res.status === 'OK') {
          router.push('/');
        } else {
          if (typeof res.msg !== 'undefined') {
            alert(res.msg);
          } else {
            alert("Sorry, something went wrong.");
          }

          _this2.setState({
            password: ''
          });
        }
      });
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "row justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "col-xl-10 col-lg-6 col-md-9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "card o-hidden border-0 shadow-lg my-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "card-body p-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "p-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }
      }, __jsx("h1", {
        className: "h4 text-gray-900 mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 23
        }
      }, "Login")), __jsx("div", {
        className: "form-row text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }
      }, this.state.message !== "" ? __jsx("div", {
        className: "alert alert-danger col-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 25
        }
      }, this.state.message) : ""), __jsx("form", {
        className: "user",
        onSubmit: function onSubmit(e) {
          _this3.onLogin(e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 23
        }
      }, __jsx("input", {
        type: "email",
        className: "form-control form-control-user",
        id: "email",
        "aria-describedby": "emailHelp",
        name: "username",
        placeholder: "Email",
        onChange: function onChange(e) {
          _this3.onChange(e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 23
        }
      }, __jsx("input", {
        type: "password",
        className: "form-control form-control-user",
        id: "password",
        name: "password",
        placeholder: "Password",
        onChange: function onChange(e) {
          _this3.onChange(e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 25
        }
      })), __jsx("button", {
        type: "submit",
        className: "btn btn-primary btn-user btn-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 23
        }
      }, "Login"))))))))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (_c = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Login));

var _c;

$RefreshReg$(_c, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dGgvTG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsInN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm1lc3NhZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJib2R5IiwidG9TdHJpbmciLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwicm91dGVyIiwicHVzaCIsIm1zZyIsImFsZXJ0Iiwib25Mb2dpbiIsIm9uQ2hhbmdlIiwiQ29tcG9uZW50Iiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxLOzs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFBRSxFQURDO0FBRVhDLGNBQVEsRUFBRSxFQUZDO0FBR1hDLGFBQU8sRUFBRTtBQUhFLEtBQWI7QUFGaUI7QUFPbEI7Ozs7NkJBRVFDLEMsRUFBRztBQUNWLFVBQUlKLEtBQUssR0FBRyxFQUFaO0FBQ0FBLFdBQUssQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBQVYsQ0FBTCxHQUF1QkYsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLEtBQWhDO0FBQ0EsV0FBS0MsUUFBTCxDQUFjUixLQUFkO0FBQ0Q7Ozs0QkFFT0ksQyxFQUFHO0FBQUE7O0FBQ1RBLE9BQUMsQ0FBQ0ssY0FBRjtBQURTLHdCQUVvQixLQUFLVCxLQUZ6QjtBQUFBLFVBRUZDLFFBRkUsZUFFRkEsUUFGRTtBQUFBLFVBRVFDLFFBRlIsZUFFUUEsUUFGUjtBQUdU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QUFBLFNBQ0U7QUFDRSxZQUFJLEVBQUMsT0FEUDtBQUVFLGlCQUFTLEVBQUMsZ0NBRlo7QUFHRSxVQUFFLEVBQUMsT0FITDtBQUlFLDRCQUFpQixXQUpuQjtBQUtFLFlBQUksRUFBQyxVQUxQO0FBTUUsbUJBQVcsRUFBQyxPQU5kO0FBT0UsZ0JBQVEsRUFBRSxrQkFBQ0EsQ0FBRCxFQUFPO0FBQ2YsZ0JBQUksQ0FBQzBCLFFBQUwsQ0FBYzFCLENBQWQ7QUFDRCxTQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQUhGLEVBZ0JFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsaUJBQVMsRUFBQyxnQ0FGWjtBQUdFLFVBQUUsRUFBQyxVQUhMO0FBSUUsWUFBSSxFQUFDLFVBSlA7QUFLRSxtQkFBVyxFQUFDLFVBTGQ7QUFNRSxnQkFBUSxFQUFFLGtCQUFDQSxDQUFELEVBQU87QUFDZixnQkFBSSxDQUFDMEIsUUFBTCxDQUFjMUIsQ0FBZDtBQUNELFNBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBaEJGLEVBNEJFO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxpQkFBUyxFQUFDLG9DQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUJGLENBYkYsQ0FERixDQURGLENBREYsQ0FERixDQURGLENBREYsQ0FETSxDQUFSO0FBK0REOzs7O0VBOUdpQjJCLCtDOztBQWlITCxvRUFBQUMsOERBQVUsQ0FBQ2xDLEtBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxvZ2luLmpzLjk4Y2VlMTRkNTIzZDJhODA5N2RhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoZSkge1xyXG4gICAgbGV0IHN0YXRlID0ge307XHJcbiAgICBzdGF0ZVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBvbkxvZ2luKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHt1c2VybmFtZSwgcGFzc3dvcmR9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBkYXRhID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgZGF0YS5hcHBlbmQoJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xyXG4gICAgZGF0YS5hcHBlbmQoJ3Bhc3N3b3JkJywgcGFzc3dvcmQpO1xyXG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzgzOC9hdXRoL2xvZ2luJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgbW9kZTogJ25vLWNvcnMnLFxyXG4gICAgICBib2R5OiBkYXRhLnRvU3RyaW5nKCksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gJ09LJykge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiByZXMubXNnICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBhbGVydChyZXMubXNnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiU29ycnksIHNvbWV0aGluZyB3ZW50IHdyb25nLlwiKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6ICcnfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIHJldHVybiAgZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0xMCBjb2wtbGctNiBjb2wtbWQtOVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG8taGlkZGVuIGJvcmRlci0wIHNoYWRvdy1sZyBteS01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHAtMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoNCB0ZXh0LWdyYXktOTAwIG1iLTRcIj5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvdyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZSAhPT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXIgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInVzZXJcIiBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Mb2dpbihlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtdXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSGVscFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC11c2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXVzZXIgYnRuLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKExvZ2luKTsiXSwic291cmNlUm9vdCI6IiJ9