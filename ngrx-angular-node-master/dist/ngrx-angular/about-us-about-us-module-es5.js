(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-us-about-us-module"], {
    /***/
    "/xKP":
    /*!**************************************************!*\
      !*** ./src/app/about-us/about-us.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function xKP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC11cy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "00wH":
    /*!*********************************************!*\
      !*** ./src/app/about-us/about-us.module.ts ***!
      \*********************************************/

    /*! exports provided: AboutUsModule */

    /***/
    function wH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsModule", function () {
        return AboutUsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about-us-routing.module */
      "MiEk");
      /* harmony import */


      var _about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./about-us.component */
      "BsnK");

      var AboutUsModule = function AboutUsModule() {
        _classCallCheck(this, AboutUsModule);
      };

      AboutUsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _about_us_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutUsRoutingModule"]]
      })], AboutUsModule);
      /***/
    },

    /***/
    "BsnK":
    /*!************************************************!*\
      !*** ./src/app/about-us/about-us.component.ts ***!
      \************************************************/

    /*! exports provided: AboutUsComponent */

    /***/
    function BsnK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
        return AboutUsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_about_us_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./about-us.component.html */
      "MImQ");
      /* harmony import */


      var _about_us_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about-us.component.scss */
      "/xKP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/services/auth.service */
      "IYfF");

      var AboutUsComponent = /*#__PURE__*/function () {
        function AboutUsComponent(authService) {
          _classCallCheck(this, AboutUsComponent);

          this.authService = authService;
        }

        _createClass(AboutUsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.retrieveBySlug('about_us', 'about_us').subscribe(function (res) {
              if (res && res['data'] && res['data']['_id']) {
                _this.about_us = res['data'];
              }
            });
          }
        }]);

        return AboutUsComponent;
      }();

      AboutUsComponent.ctorParameters = function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      };

      AboutUsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about-us',
        template: _raw_loader_about_us_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_us_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AboutUsComponent);
      /***/
    },

    /***/
    "MImQ":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function MImQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section id=\"about\" class=\"about\" *ngIf=\"about_us\">\n    <div class=\"container\" data-aos=\"fade-up\">\n        <div class=\"section-title\">\n            <h2>About US</h2>\n            <p>About US</p>\n        </div>\n        <div class=\"row\">\n            <h5 [innerHTML]=\"about_us.content\"></h5>\n            <table class=\"table table-hover\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">Mission</th>\n                        <th scope=\"col\">Vision</th>\n                        <th scope=\"col\">Purpose</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>{{about_us.mission}}</td>\n                        <td>{{about_us.purpose}}</td>\n                        <td>{{about_us.vision}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</section>";
      /***/
    },

    /***/
    "MiEk":
    /*!*****************************************************!*\
      !*** ./src/app/about-us/about-us-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AboutUsRoutingModule */

    /***/
    function MiEk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsRoutingModule", function () {
        return AboutUsRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about-us.component */
      "BsnK");

      var routes = [{
        path: '',
        component: _about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"]
      }];

      var AboutUsRoutingModule = function AboutUsRoutingModule() {
        _classCallCheck(this, AboutUsRoutingModule);
      };

      AboutUsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AboutUsRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=about-us-about-us-module-es5.js.map