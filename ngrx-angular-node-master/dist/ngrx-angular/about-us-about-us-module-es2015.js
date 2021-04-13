(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-us-about-us-module"],{

/***/ "/xKP":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#hero {\n  width: 100%;\n  height: 100vh;\n  background: url('about_us.jpg') top center !important;\n  background-size: cover;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxxREFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJhYm91dC11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZXJvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYWJvdXRfdXMuanBnXCIpIHRvcCBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */");

/***/ }),

/***/ "00wH":
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.module.ts ***!
  \*********************************************/
/*! exports provided: AboutUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsModule", function() { return AboutUsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us-routing.module */ "MiEk");
/* harmony import */ var _about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us.component */ "BsnK");





let AboutUsModule = class AboutUsModule {
};
AboutUsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _about_us_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutUsRoutingModule"]
        ]
    })
], AboutUsModule);



/***/ }),

/***/ "BsnK":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_us_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about-us.component.html */ "MImQ");
/* harmony import */ var _about_us_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us.component.scss */ "/xKP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/auth.service */ "IYfF");





let AboutUsComponent = class AboutUsComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.retrieveBySlug('about_us', 'about_us').subscribe((res) => {
            if (res && res['data'] && res['data']['_id']) {
                this.about_us = res['data'];
            }
        });
    }
};
AboutUsComponent.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AboutUsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about-us',
        template: _raw_loader_about_us_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_us_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AboutUsComponent);



/***/ }),

/***/ "MImQ":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"hero\" class=\"d-flex align-items-center justify-content-center\">\n  <div class=\"container\" data-aos=\"fade-up\">\n    <div class=\"row justify-content-center\" data-aos=\"fade-up\" data-aos-delay=\"150\">\n      <div class=\"col-xl-6 col-lg-8\">\n        <h1>About US</h1>\n      </div>\n    </div>\n  </div>\n</section>\n<section id=\"about\" class=\"services\" *ngIf=\"about_us\">\n    <div class=\"container\" data-aos=\"fade-up\">\n        <div class=\"section-title\">\n            <h2>About US</h2>\n            <p>About US</p>\n        </div>\n        <div class=\"row\">\n            <h5 [innerHTML]=\"about_us.content\"></h5>\n            <div class=\"col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0\" data-aos=\"zoom-in\" data-aos-delay=\"200\">\n                <div class=\"icon-box\">\n                    <div class=\"icon\"><i class=\"bx bx-bullseye\"></i></div>\n                    <h4><a href=\"\">Mission</a></h4>\n                    <p>{{about_us.mission}}</p>\n                </div>\n            </div>\n\n            <div class=\"col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0\" data-aos=\"zoom-in\" data-aos-delay=\"200\">\n                <div class=\"icon-box\">\n                    <div class=\"icon\"><i class=\"bx bx-message-rounded-check\"></i></div>\n                    <h4><a href=\"\">Vision</a></h4>\n                    <p>{{about_us.vision}}</p>\n                </div>\n            </div>\n\n            <div class=\"col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0\" data-aos=\"zoom-in\" data-aos-delay=\"200\">\n                <div class=\"icon-box\">\n                    <div class=\"icon\"><i class=\"bx bx-line-chart-down\"></i></div>\n                    <h4><a href=\"\">Purpose</a></h4>\n                    <p>{{about_us.purpose}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "MiEk":
/*!*****************************************************!*\
  !*** ./src/app/about-us/about-us-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutUsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsRoutingModule", function() { return AboutUsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us.component */ "BsnK");




const routes = [{ path: '', component: _about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"] }];
let AboutUsRoutingModule = class AboutUsRoutingModule {
};
AboutUsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AboutUsRoutingModule);



/***/ })

}]);
//# sourceMappingURL=about-us-about-us-module-es2015.js.map