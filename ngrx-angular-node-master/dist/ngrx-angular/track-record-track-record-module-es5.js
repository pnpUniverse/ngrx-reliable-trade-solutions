(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["track-record-track-record-module"], {
    /***/
    "OCP1":
    /*!********************************************************!*\
      !*** ./src/app/track-record/track-record.component.ts ***!
      \********************************************************/

    /*! exports provided: TrackRecordComponent */

    /***/
    function OCP1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrackRecordComponent", function () {
        return TrackRecordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_track_record_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./track-record.component.html */
      "r7Lh");
      /* harmony import */


      var _track_record_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./track-record.component.scss */
      "ovOV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TrackRecordComponent = /*#__PURE__*/function () {
        function TrackRecordComponent() {
          _classCallCheck(this, TrackRecordComponent);
        }

        _createClass(TrackRecordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TrackRecordComponent;
      }();

      TrackRecordComponent.ctorParameters = function () {
        return [];
      };

      TrackRecordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-track-record',
        template: _raw_loader_track_record_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_track_record_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TrackRecordComponent);
      /***/
    },

    /***/
    "akOz":
    /*!*************************************************************!*\
      !*** ./src/app/track-record/track-record-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: TrackRecordRoutingModule */

    /***/
    function akOz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrackRecordRoutingModule", function () {
        return TrackRecordRoutingModule;
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


      var _track_record_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./track-record.component */
      "OCP1");

      var routes = [{
        path: '',
        component: _track_record_component__WEBPACK_IMPORTED_MODULE_3__["TrackRecordComponent"]
      }];

      var TrackRecordRoutingModule = function TrackRecordRoutingModule() {
        _classCallCheck(this, TrackRecordRoutingModule);
      };

      TrackRecordRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TrackRecordRoutingModule);
      /***/
    },

    /***/
    "dYgn":
    /*!*****************************************************!*\
      !*** ./src/app/track-record/track-record.module.ts ***!
      \*****************************************************/

    /*! exports provided: TrackRecordModule */

    /***/
    function dYgn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrackRecordModule", function () {
        return TrackRecordModule;
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


      var _track_record_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./track-record-routing.module */
      "akOz");
      /* harmony import */


      var _track_record_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./track-record.component */
      "OCP1");

      var TrackRecordModule = function TrackRecordModule() {
        _classCallCheck(this, TrackRecordModule);
      };

      TrackRecordModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_track_record_component__WEBPACK_IMPORTED_MODULE_4__["TrackRecordComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _track_record_routing_module__WEBPACK_IMPORTED_MODULE_3__["TrackRecordRoutingModule"]]
      })], TrackRecordModule);
      /***/
    },

    /***/
    "ovOV":
    /*!**********************************************************!*\
      !*** ./src/app/track-record/track-record.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function ovOV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#hero {\n  width: 100%;\n  height: 100vh;\n  background: url('track_performance.jpg') top center !important;\n  background-size: cover;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RyYWNrLXJlY29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOERBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoidHJhY2stcmVjb3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlcm8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy90cmFja19wZXJmb3JtYW5jZS5qcGdcIikgdG9wIGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */";
      /***/
    },

    /***/
    "r7Lh":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/track-record/track-record.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function r7Lh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section id=\"hero\" class=\"d-flex align-items-center justify-content-center\">\n  <div class=\"container\" data-aos=\"fade-up\">\n    <div class=\"row justify-content-center\" data-aos=\"fade-up\" data-aos-delay=\"150\">\n      <div class=\"col-xl-6 col-lg-8\">\n        <h1>Track Performance</h1>\n      </div>\n    </div>\n  </div>\n</section>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=track-record-track-record-module-es5.js.map