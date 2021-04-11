(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/administrator/ngrx-reliable-trade-solutions/ngrx-angular-node-master/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // apiUrl: 'http://localhost:3000/api/',
    // image_path: 'http://localhost:3000/'
    apiUrl: 'http://147.139.39.19:3000/api/',
    image_path: 'http://147.139.39.19:3000/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const { apiUrl } = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"];
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    isAuthenticated() {
        try {
            const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
            return (!helper.isTokenExpired(localStorage.getItem('token')));
        }
        catch (error) {
            return false;
        }
    }
    login(loginData) {
        return this.http.post(`${apiUrl}login`, loginData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res['token']) {
                localStorage.setItem('token', res['token']);
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            throw new Error(err.message);
        }));
    }
    create(createData, action) {
        return this.http.post(`${apiUrl}c/${action}/create`, createData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res['token']) {
                localStorage.setItem('token', res['token']);
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            throw new Error(err.message);
        }));
    }
    retrieve(action) {
        return this.http.get(`${apiUrl}c/${action}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res['token']) {
                localStorage.setItem('token', res['token']);
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            throw new Error(err.message);
        }));
    }
    retrieveById(action, id) {
        return this.http.get(`${apiUrl}c/${action}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res['token']) {
                localStorage.setItem('token', res['token']);
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            throw new Error(err.message);
        }));
    }
    retrieveBySlug(collection, slug) {
        return this.http.get(`${apiUrl}c/${collection}/slug/${slug}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res['token']) {
                localStorage.setItem('token', res['token']);
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            throw new Error(err.message);
        }));
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/auth.service */ "IYfF");






let AppComponent = class AppComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.title = 'reliable-trade-solutions';
        this.collapse = true;
        this.selectedIndex = null;
        this.myRoutes = [
            {
                name: 'Home',
                url: '/'
            },
            {
                name: 'About US',
                url: '/about-us'
            },
            {
                name: 'Services',
                url: '/services'
            },
            {
                name: 'Service',
                url: '/service'
            },
            {
                name: 'Membersip',
                url: '/membersip'
            },
            {
                name: 'Track Record',
                url: '/track-record'
            },
            {
                name: 'Contact US',
                url: '/contact-us'
            }
        ];
    }
    ngOnInit() {
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                const result = this.myRoutes.findIndex(function (object) {
                    return object.url == val.url;
                });
                if (result > -1) {
                    this.selectedIndex = result;
                }
            }
        });
        this.authService.retrieve('services').subscribe((res) => {
            if (res && res['data'] && res['data']) {
                this.services = res['data'];
            }
        });
        this.authService.retrieveBySlug('contact_us_content', 'contact_us_content').subscribe((res) => {
            if (res && res['data'] && res['data']['_id']) {
                this.contact_us_content = res['data'];
            }
        });
    }
    setIndex(index) {
        this.selectedIndex = index;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"toolbar\" role=\"banner\">\n  <!-- ======= Header ======= -->\n  <header id=\"header\" class=\"fixed-top \">\n    <div class=\"container d-flex align-items-center justify-content-between\">\n      <h1 class=\"logo\"><a routerLink=\"\">Gp<span>.</span></a></h1>\n      <nav class=\"navbar navbar-expand-sm navbar-light\">\n        <!-- <a class=\"navbar-brand\" href=\"#\">Brand/Logo</a> -->\n        <button class=\"navbar-toggler display_hamburger\" (click)=\"collapse=!collapse\" type=\"button\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon display_hamburger\"></span>\n        </button>\n      \n        <div class=\"navbar-collapse\" (click)=\"collapse=true\" [hidden]=\"collapse\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" *ngFor=\"let myRoute of myRoutes; let i = index\" [class.active]=\"selectedIndex === i\" (click)=\"setIndex(i)\">\n              <a class=\"nav-link display_link\" routerLink=\"{{ myRoute.url }}\">{{ myRoute.name }}</a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </header>\n  <!-- End Header -->\n</div>\n<router-outlet></router-outlet>\n<!-- ======= Footer ======= -->\n<footer id=\"footer\">\n  <div class=\"footer-top\">\n    <div class=\"container\">\n      <div class=\"row\">\n\n        <div class=\"col-lg-3 col-md-6\" *ngIf=\"contact_us_content\">\n          <div class=\"footer-info\">\n            <h3>Gp<span>.</span></h3>\n            <p>\n              {{contact_us_content.location}} <br>\n              <strong>Phone:</strong> {{contact_us_content.contact_no}}<br>\n              <strong>Email:</strong> {{contact_us_content.email}}<br>\n            </p>\n            <div class=\"social-links mt-3\">\n              <a href=\"#\" class=\"twitter\"><i class=\"bx bxl-twitter\"></i></a>\n              <a href=\"#\" class=\"facebook\"><i class=\"bx bxl-facebook\"></i></a>\n              <a href=\"#\" class=\"instagram\"><i class=\"bx bxl-instagram\"></i></a>\n              <a href=\"#\" class=\"google-plus\"><i class=\"bx bxl-skype\"></i></a>\n              <a href=\"#\" class=\"linkedin\"><i class=\"bx bxl-linkedin\"></i></a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-2 col-md-6 footer-links\">\n          <h4>Useful Links</h4>\n          <ul>\n            <li *ngFor=\"let myRoute of myRoutes\">\n              <i class=\"bx bx-chevron-right\"></i><a [routerLink]=\"myRoute.url\">{{myRoute.name}}</a>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6 footer-links\">\n          <h4>Our Services</h4>\n          <ul>\n            <li *ngFor=\"let service of services\">\n              <i class=\"bx bx-chevron-right\"></i> <a routerLink=\"/service\">{{service.serviceName}}</a>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 footer-newsletter\">\n          <h4>Our Newsletter</h4>\n          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>\n          <form action=\"\" method=\"post\">\n            <input type=\"email\" name=\"email\"><input type=\"submit\" value=\"Subscribe\">\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!-- End Footer -->");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    { path: '', loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~contact-us-contact-us-module~home-home-module~service-service-module"), __webpack_require__.e("default~home-home-module~service-service-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomeModule) },
    { path: 'about-us', loadChildren: () => __webpack_require__.e(/*! import() | about-us-about-us-module */ "about-us-about-us-module").then(__webpack_require__.bind(null, /*! ./about-us/about-us.module */ "00wH")).then(m => m.AboutUsModule) },
    { path: 'contact-us', loadChildren: () => Promise.all(/*! import() | contact-us-contact-us-module */[__webpack_require__.e("default~contact-us-contact-us-module~home-home-module~service-service-module"), __webpack_require__.e("contact-us-contact-us-module")]).then(__webpack_require__.bind(null, /*! ./contact-us/contact-us.module */ "lhKH")).then(m => m.ContactUsModule) },
    { path: 'track-record', loadChildren: () => __webpack_require__.e(/*! import() | track-record-track-record-module */ "track-record-track-record-module").then(__webpack_require__.bind(null, /*! ./track-record/track-record.module */ "dYgn")).then(m => m.TrackRecordModule) },
    { path: 'services', loadChildren: () => __webpack_require__.e(/*! import() | services-services-module */ "services-services-module").then(__webpack_require__.bind(null, /*! ./services/services.module */ "334H")).then(m => m.ServicesModule) },
    { path: 'membership', loadChildren: () => __webpack_require__.e(/*! import() | membership-membership-module */ "membership-membership-module").then(__webpack_require__.bind(null, /*! ./membership/membership.module */ "wujY")).then(m => m.MembershipModule) },
    { path: 'service', loadChildren: () => Promise.all(/*! import() | service-service-module */[__webpack_require__.e("default~contact-us-contact-us-module~home-home-module~service-service-module"), __webpack_require__.e("default~home-home-module~service-service-module"), __webpack_require__.e("service-service-module")]).then(__webpack_require__.bind(null, /*! ./service/service.module */ "mhyn")).then(m => m.ServiceModule) }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".display_link {\n  color: white !important;\n}\n\n.display_hamburger {\n  background-color: white !important;\n}\n\n.active {\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheV9saW5rIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmRpc3BsYXlfaGFtYnVyZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlIHtcbiAgICBmb250LXdlaWdodDogODAwO1xufSJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map