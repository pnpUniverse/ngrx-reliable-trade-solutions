(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["track-record-track-record-module"],{

/***/ "OCP1":
/*!********************************************************!*\
  !*** ./src/app/track-record/track-record.component.ts ***!
  \********************************************************/
/*! exports provided: TrackRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackRecordComponent", function() { return TrackRecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_track_record_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./track-record.component.html */ "r7Lh");
/* harmony import */ var _track_record_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track-record.component.scss */ "ovOV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TrackRecordComponent = class TrackRecordComponent {
    constructor() { }
    ngOnInit() {
    }
};
TrackRecordComponent.ctorParameters = () => [];
TrackRecordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-track-record',
        template: _raw_loader_track_record_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_track_record_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TrackRecordComponent);



/***/ }),

/***/ "akOz":
/*!*************************************************************!*\
  !*** ./src/app/track-record/track-record-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TrackRecordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackRecordRoutingModule", function() { return TrackRecordRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _track_record_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./track-record.component */ "OCP1");




const routes = [{ path: '', component: _track_record_component__WEBPACK_IMPORTED_MODULE_3__["TrackRecordComponent"] }];
let TrackRecordRoutingModule = class TrackRecordRoutingModule {
};
TrackRecordRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TrackRecordRoutingModule);



/***/ }),

/***/ "dYgn":
/*!*****************************************************!*\
  !*** ./src/app/track-record/track-record.module.ts ***!
  \*****************************************************/
/*! exports provided: TrackRecordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackRecordModule", function() { return TrackRecordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _track_record_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./track-record-routing.module */ "akOz");
/* harmony import */ var _track_record_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./track-record.component */ "OCP1");





let TrackRecordModule = class TrackRecordModule {
};
TrackRecordModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_track_record_component__WEBPACK_IMPORTED_MODULE_4__["TrackRecordComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _track_record_routing_module__WEBPACK_IMPORTED_MODULE_3__["TrackRecordRoutingModule"]
        ]
    })
], TrackRecordModule);



/***/ }),

/***/ "ovOV":
/*!**********************************************************!*\
  !*** ./src/app/track-record/track-record.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFjay1yZWNvcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "r7Lh":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/track-record/track-record.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>track-record works!</p>\n");

/***/ })

}]);
//# sourceMappingURL=track-record-track-record-module-es2015.js.map