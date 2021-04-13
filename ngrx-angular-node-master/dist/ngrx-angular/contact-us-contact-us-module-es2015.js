(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-us-contact-us-module"],{

/***/ "7Dfe":
/*!***********************************************************************************************!*\
  !*** ./node_modules/ngx-toast-notifications/__ivy_ngcc__/fesm2015/ngx-toast-notifications.js ***!
  \***********************************************************************************************/
/*! exports provided: TOAST_NOTIFICATIONS_CONFIG, Toast, ToastNotificationClientModule, ToastNotificationCoreModule, ToastNotifications, ToastNotificationsModule, Toaster, ɵa, ɵb, ɵc, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOAST_NOTIFICATIONS_CONFIG", function() { return TOAST_NOTIFICATIONS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastNotificationClientModule", function() { return ToastNotificationClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastNotificationCoreModule", function() { return ToastNotificationCoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastNotifications", function() { return ToastNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastNotificationsModule", function() { return ToastNotificationsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toaster", function() { return Toaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ToastContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return BasicToastContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ToastContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ToastContainerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");





/**
 * @fileoverview added by tsickle
 * Generated from: toast.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



function ToastContainerComponent_ng_template_0_div_0_ng_template_2_Template(rf, ctx) { }
const _c0 = function (a0) { return { duration: a0 }; };
const _c1 = function (a1) { return { value: "*", params: a1 }; };
function ToastContainerComponent_ng_template_0_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} if (rf & 2) {
    const toast_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@progress", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, toast_r10.duration + "ms")));
} }
function ToastContainerComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToastContainerComponent_ng_template_0_div_0_ng_template_2_Template, 0, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToastContainerComponent_ng_template_0_div_0_div_3_Template, 1, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toast_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@nested", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", toast_r10.type || "light")("@shrink", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toast", toast_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", toast_r10.autoClose);
} }
function ToastContainerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastContainerComponent_ng_template_0_div_0_Template, 4, 5, "div", 9);
} if (rf & 2) {
    const toasts_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", toasts_r8);
} }
function ToastContainerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function ToastContainerComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function ToastContainerComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function ToastContainerComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function ToastContainerComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function ToastContainerComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c2 = function (a0) { return { $implicit: a0 }; };
function BasicToastContentComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.toast.caption);
} }
class Toast {
    /**
     * @param {?} config
     * @param {?} closeFunction
     */
    constructor(config, closeFunction) {
        this._onClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.autoClose = config.autoClose;
        this.duration = config.duration > 0 ? config.duration : 0;
        this.text = config.text;
        this.caption = config.caption;
        this.type = config.type;
        this.component = config.component;
        this._closeFunction = closeFunction;
        this._setTimeout();
    }
    /**
     * @return {?}
     */
    get onClose() {
        return this._onClose.asObservable();
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        if (!this._onClose.closed) {
            this._onClose.next(result);
            this._onClose.complete();
        }
        this._closeFunction(this);
        this._clearTimeout();
    }
    /**
     * @private
     * @return {?}
     */
    _setTimeout() {
        if (this.autoClose && this.duration > 0) {
            this._timeoutId = setTimeout((/**
             * @return {?}
             */
            () => this.close()), this.duration);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _clearTimeout() {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: toast-container/toast-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const nestedTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])(), { optional: true })
]);
/** @type {?} */
const shrinkInTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: 0, opacity: 0, 'margin-top': 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*', opacity: 1, 'margin-top': '1rem' }))
]);
/** @type {?} */
const shrinkOutTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '!', opacity: 1, 'margin-top': '1rem' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: 0, opacity: 0, 'margin-top': 0 }))
]);
/** @type {?} */
const progressTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ width: 0, opacity: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{duration}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ width: '100%', opacity: 1 }))
]);
class ToastContainerComponent {
    /**
     * @param {?} _changeDetector
     */
    constructor(_changeDetector) {
        this._changeDetector = _changeDetector;
        this.tl = [];
        this.tc = [];
        this.tr = [];
        this.bl = [];
        this.bc = [];
        this.br = [];
    }
    /**
     * @param {?} config
     * @return {?}
     */
    add(config) {
        /** @type {?} */
        const collection = this._getCollection(config.position);
        if (config.preventDuplicates && this._isDuplicate(collection, config)) {
            return null;
        }
        /** @type {?} */
        const toast = new Toast(config, (/**
         * @param {?} t
         * @return {?}
         */
        (t) => this._delete(collection, t)));
        collection.push(toast);
        this._changeDetector.detectChanges();
        return toast;
    }
    /**
     * @private
     * @param {?} collection
     * @param {?} toast
     * @return {?}
     */
    _delete(collection, toast) {
        collection.splice(collection.indexOf(toast), 1);
        this._changeDetector.detectChanges();
    }
    /**
     * @private
     * @param {?} collection
     * @param {?} config
     * @return {?}
     */
    _isDuplicate(collection, config) {
        return collection.some((/**
         * @param {?} t
         * @return {?}
         */
        t => {
            return t.type === config.type
                && t.component === config.component
                && t.caption === config.caption
                && t.text === config.text;
        }));
    }
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    _getCollection(position) {
        switch (position) {
            case 'top-left':
                return this.tl;
            case 'top-center':
                return this.tc;
            case 'top-right':
                return this.tr;
            case 'bottom-left':
                return this.bl;
            case 'bottom-center':
                return this.bc;
            default:
                return this.br;
        }
    }
}
ToastContainerComponent.ɵfac = function ToastContainerComponent_Factory(t) { return new (t || ToastContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ToastContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastContainerComponent, selectors: [["ng-component"]], decls: 15, vars: 24, consts: [["toastPanel", ""], [1, "toast-overlay"], [1, "toast-panel", "top-center"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "toast-panel", "top-left"], [1, "toast-panel", "top-right"], [1, "toast-panel", "bottom-center"], [1, "toast-panel", "bottom-left"], [1, "toast-panel", "bottom-right"], [4, "ngFor", "ngForOf"], [1, "toast-card", 3, "ngClass"], ["toastContent", "", 3, "toast"], ["class", "lifetime-progress", "role", "progressbar", 4, "ngIf"], ["role", "progressbar", 1, "lifetime-progress"]], template: function ToastContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastContainerComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToastContainerComponent_ng_container_4_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ToastContainerComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ToastContainerComponent_ng_container_8_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ToastContainerComponent_ng_container_10_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ToastContainerComponent_ng_container_12_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ToastContainerComponent_ng_container_14_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, ctx.tc));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx.tl));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, ctx.tr));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c2, ctx.bc));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c2, ctx.bl));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c2, ctx.br));
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], ToastContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]]; }, styles: [".toast-overlay[_ngcontent-%COMP%]{pointer-events:none;position:fixed;z-index:9000;left:0;top:0;width:100%;height:100%}@media (max-width:575px){.toast-overlay[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;flex-direction:column}}.toast-panel[_ngcontent-%COMP%]{width:100%;font-size:1rem;line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif}.toast-card[_ngcontent-%COMP%]{pointer-events:auto;overflow:hidden;background-clip:border-box;min-width:0;background-color:#f8f9fa;color:#212529;margin-top:1rem;box-shadow:rgba(0,0,0,.15) 0 .2rem 1.5rem .3rem}@media (min-width:576px){.toast-panel[_ngcontent-%COMP%]{position:absolute;max-width:20rem}.toast-panel.top-left[_ngcontent-%COMP%]{top:0;left:1rem}.toast-panel.top-center[_ngcontent-%COMP%]{top:0;left:50%;margin-left:-10rem}.toast-panel.top-right[_ngcontent-%COMP%]{top:0;right:1rem}.toast-panel.bottom-left[_ngcontent-%COMP%]{bottom:1rem;left:1rem}.toast-panel.bottom-center[_ngcontent-%COMP%]{bottom:1rem;left:50%;margin-left:-10rem}.toast-panel.bottom-right[_ngcontent-%COMP%]{bottom:1rem;right:1rem}.toast-card[_ngcontent-%COMP%]{border-radius:.15rem;box-shadow:rgba(0,0,0,.2) 0 .3rem .4rem -.2rem,rgba(0,0,0,.15) 0 .2rem 1.5rem .3rem}}.toast-card.danger[_ngcontent-%COMP%], .toast-card.dark[_ngcontent-%COMP%], .toast-card.info[_ngcontent-%COMP%], .toast-card.primary[_ngcontent-%COMP%], .toast-card.secondary[_ngcontent-%COMP%], .toast-card.success[_ngcontent-%COMP%]{color:#f8f9fa}.toast-card.danger[_ngcontent-%COMP%]   .lifetime-progress[_ngcontent-%COMP%], .toast-card.dark[_ngcontent-%COMP%]   .lifetime-progress[_ngcontent-%COMP%], .toast-card.info[_ngcontent-%COMP%]   .lifetime-progress[_ngcontent-%COMP%], .toast-card.primary[_ngcontent-%COMP%]   .lifetime-progress[_ngcontent-%COMP%], .toast-card.secondary[_ngcontent-%COMP%]   .lifetime-progress[_ngcontent-%COMP%], .toast-card.success[_ngcontent-%COMP%]   .lifetime-progress[_ngcontent-%COMP%]{background-color:#f8f9fa}.toast-card.light[_ngcontent-%COMP%]   .lifetime-progress[_ngcontent-%COMP%], .toast-card.primary[_ngcontent-%COMP%], .toast-card.warning[_ngcontent-%COMP%]   .lifetime-progress[_ngcontent-%COMP%]{background-color:#007bff}.toast-card.secondary[_ngcontent-%COMP%]{background-color:#868e96}.toast-card.success[_ngcontent-%COMP%]{background-color:#28a745}.toast-card.danger[_ngcontent-%COMP%]{background-color:#dc3545}.toast-card.warning[_ngcontent-%COMP%]{background-color:#ffc107}.toast-card.info[_ngcontent-%COMP%]{background-color:#17a2b8}.toast-card.light[_ngcontent-%COMP%]{background-color:#f8f9fa}.toast-card.dark[_ngcontent-%COMP%]{background-color:#343a40}.toast-card[_ngcontent-%COMP%]   .lifetime-progress[_ngcontent-%COMP%]{display:flex;height:2px;width:0;border-radius:1px}"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('nested', [nestedTransition]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('shrink', [shrinkInTransition, shrinkOutTransition]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('progress', [progressTransition]),
        ] }, changeDetection: 0 });
/** @nocollapse */
ToastContainerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "<ng-template #toastPanel let-toasts>\r\n  <div *ngFor=\"let toast of toasts\" [@nested]>\r\n    <div class=\"toast-card\" [ngClass]=\"toast.type || 'light'\" [@shrink]>\r\n      <ng-template toastContent [toast]=\"toast\"></ng-template>\r\n      <div *ngIf=\"toast.autoClose\"\r\n           class=\"lifetime-progress\"\r\n           role=\"progressbar\"\r\n           [@progress]=\"{value: '*', params: {duration: toast.duration + 'ms'}}\"></div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<div class=\"toast-overlay\">\r\n  <div class=\"toast-panel top-center\">\r\n    <ng-container *ngTemplateOutlet=\"toastPanel; context: {$implicit: tc}\"></ng-container>\r\n  </div>\r\n  <div class=\"toast-panel top-left\">\r\n    <ng-container *ngTemplateOutlet=\"toastPanel; context: {$implicit: tl}\"></ng-container>\r\n  </div>\r\n  <div class=\"toast-panel top-right\">\r\n    <ng-container *ngTemplateOutlet=\"toastPanel; context: {$implicit: tr}\"></ng-container>\r\n  </div>\r\n  <div class=\"toast-panel bottom-center\">\r\n    <ng-container *ngTemplateOutlet=\"toastPanel; context: {$implicit: bc}\"></ng-container>\r\n  </div>\r\n  <div class=\"toast-panel bottom-left\">\r\n    <ng-container *ngTemplateOutlet=\"toastPanel; context: {$implicit: bl}\"></ng-container>\r\n  </div>\r\n  <div class=\"toast-panel bottom-right\">\r\n    <ng-container *ngTemplateOutlet=\"toastPanel; context: {$implicit: br}\"></ng-container>\r\n  </div>\r\n</div>\r\n",
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('nested', [nestedTransition]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('shrink', [shrinkInTransition, shrinkOutTransition]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('progress', [progressTransition]),
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".toast-overlay{pointer-events:none;position:fixed;z-index:9000;left:0;top:0;width:100%;height:100%}@media (max-width:575px){.toast-overlay{display:flex;justify-content:flex-end;flex-direction:column}}.toast-panel{width:100%;font-size:1rem;line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif}.toast-card{pointer-events:auto;overflow:hidden;background-clip:border-box;min-width:0;background-color:#f8f9fa;color:#212529;margin-top:1rem;box-shadow:rgba(0,0,0,.15) 0 .2rem 1.5rem .3rem}@media (min-width:576px){.toast-panel{position:absolute;max-width:20rem}.toast-panel.top-left{top:0;left:1rem}.toast-panel.top-center{top:0;left:50%;margin-left:-10rem}.toast-panel.top-right{top:0;right:1rem}.toast-panel.bottom-left{bottom:1rem;left:1rem}.toast-panel.bottom-center{bottom:1rem;left:50%;margin-left:-10rem}.toast-panel.bottom-right{bottom:1rem;right:1rem}.toast-card{border-radius:.15rem;box-shadow:rgba(0,0,0,.2) 0 .3rem .4rem -.2rem,rgba(0,0,0,.15) 0 .2rem 1.5rem .3rem}}.toast-card.danger,.toast-card.dark,.toast-card.info,.toast-card.primary,.toast-card.secondary,.toast-card.success{color:#f8f9fa}.toast-card.danger .lifetime-progress,.toast-card.dark .lifetime-progress,.toast-card.info .lifetime-progress,.toast-card.primary .lifetime-progress,.toast-card.secondary .lifetime-progress,.toast-card.success .lifetime-progress{background-color:#f8f9fa}.toast-card.light .lifetime-progress,.toast-card.primary,.toast-card.warning .lifetime-progress{background-color:#007bff}.toast-card.secondary{background-color:#868e96}.toast-card.success{background-color:#28a745}.toast-card.danger{background-color:#dc3545}.toast-card.warning{background-color:#ffc107}.toast-card.info{background-color:#17a2b8}.toast-card.light{background-color:#f8f9fa}.toast-card.dark{background-color:#343a40}.toast-card .lifetime-progress{display:flex;height:2px;width:0;border-radius:1px}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: toast-container.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TOAST_CONTAINER_CLASS_NAME = 'toast-container';
class ToastContainerService {
    /**
     * @param {?} rendererFactory
     * @param {?} _document
     * @param {?} _factoryResolver
     * @param {?} _appRef
     * @param {?} _injector
     */
    constructor(rendererFactory, _document, _factoryResolver, _appRef, _injector) {
        this._document = _document;
        this._factoryResolver = _factoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    get ref() {
        if (!this._componentRef) {
            this._attach();
        }
        return this._componentRef;
    }
    /**
     * @private
     * @return {?}
     */
    get containerElement() {
        if (!this._containerElement) {
            this._containerElement = this._renderer.createElement('div');
            this._renderer.addClass(this._containerElement, TOAST_CONTAINER_CLASS_NAME);
            this._renderer.appendChild(this._document.body, this._containerElement);
        }
        return this._containerElement;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._detach();
        this._destroyContainer();
    }
    /**
     * @private
     * @return {?}
     */
    _attach() {
        this._detach();
        /** @type {?} */
        const componentFactory = this._factoryResolver.resolveComponentFactory(ToastContainerComponent);
        this._componentRef = componentFactory.create(this._injector);
        /** @type {?} */
        const hostView = (/** @type {?} */ (this._componentRef.hostView));
        this._appRef.attachView(hostView);
        /** @type {?} */
        const rootNode = (/** @type {?} */ (hostView.rootNodes[0]));
        this._renderer.appendChild(this.containerElement, rootNode);
    }
    /**
     * @private
     * @return {?}
     */
    _detach() {
        if (this._componentRef) {
            this._appRef.detachView(this._componentRef.hostView);
            this._componentRef.destroy();
            this._componentRef = null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _destroyContainer() {
        if (this._containerElement && this._containerElement.parentNode) {
            this._renderer.removeChild(this._containerElement.parentNode, this._containerElement);
            this._containerElement = null;
        }
    }
}
ToastContainerService.ɵfac = function ToastContainerService_Factory(t) { return new (t || ToastContainerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
ToastContainerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastContainerService, factory: ToastContainerService.ɵfac });
/** @nocollapse */
ToastContainerService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastContainerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: toast-notifications.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TOAST_NOTIFICATIONS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ToastNotificationsConfig');
/**
 * @record
 */
function ToastNotificationsConfig() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: toast-content/basic-toast-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BasicToastContentComponent {
}
BasicToastContentComponent.ɵfac = function BasicToastContentComponent_Factory(t) { return new (t || BasicToastContentComponent)(); };
BasicToastContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicToastContentComponent, selectors: [["ng-component"]], inputs: { toast: "toast" }, decls: 6, vars: 2, consts: [[1, "close-button", 3, "click"], [1, "content-body"], ["class", "title", 4, "ngIf"], [1, "title"]], template: function BasicToastContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicToastContentComponent_Template_div_click_0_listener() { return ctx.toast.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BasicToastContentComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toast.caption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toast.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%]{display:block;position:relative}.close-button[_ngcontent-%COMP%]{border:0;background:0 0;position:absolute;font-size:1.6rem;top:.5rem;right:.8rem;line-height:.6;font-weight:700;opacity:.3;color:inherit;cursor:pointer}@media (min-width:576px){.close-button[_ngcontent-%COMP%]{font-size:1rem;top:.3rem;right:.4rem}}.close-button[_ngcontent-%COMP%]:hover{opacity:1}.content-body[_ngcontent-%COMP%]{padding:.5rem 2.2rem .5rem .5rem;font-size:.85rem;min-height:1rem}@media (min-width:576px){.content-body[_ngcontent-%COMP%]{padding-right:1rem}}.content-body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700}"] });
BasicToastContentComponent.propDecorators = {
    toast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicToastContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "<div class=\"close-button\" (click)=\"toast.close()\">&times;</div>\r\n<div class=\"content-body\">\r\n  <div *ngIf=\"toast.caption\" class=\"title\">{{toast.caption}}</div>\r\n  <div>{{toast.text}}</div>\r\n</div>\r\n",
                styles: [":host{display:block;position:relative}.close-button{border:0;background:0 0;position:absolute;font-size:1.6rem;top:.5rem;right:.8rem;line-height:.6;font-weight:700;opacity:.3;color:inherit;cursor:pointer}@media (min-width:576px){.close-button{font-size:1rem;top:.3rem;right:.4rem}}.close-button:hover{opacity:1}.content-body{padding:.5rem 2.2rem .5rem .5rem;font-size:.85rem;min-height:1rem}@media (min-width:576px){.content-body{padding-right:1rem}}.content-body .title{font-weight:700}"]
            }]
    }], null, { toast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: toaster.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_CONFIG = {
    autoClose: true,
    duration: 8000,
    type: 'light',
    position: 'bottom-right',
    component: BasicToastContentComponent,
};
class Toaster {
    /**
     * @param {?} _config
     * @param {?} _containerService
     */
    constructor(_config, _containerService) {
        this._config = _config;
        this._containerService = _containerService;
    }
    /**
     * @param {?} config
     * @param {?=} componentConfig
     * @return {?}
     */
    open(config, componentConfig) {
        if (typeof config === 'string') {
            config = Object.assign({ text: (/** @type {?} */ (config)) }, componentConfig);
        }
        if (config instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["Type"]) {
            config = Object.assign({}, componentConfig, { component: (/** @type {?} */ (config)) });
        }
        config = Object.assign({}, DEFAULT_CONFIG, this._config, config);
        return this._containerService.ref.instance.add(config);
    }
}
Toaster.ɵfac = function Toaster_Factory(t) { return new (t || Toaster)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TOAST_NOTIFICATIONS_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ToastContainerService)); };
Toaster.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Toaster, factory: Toaster.ɵfac });
/** @nocollapse */
Toaster.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [TOAST_NOTIFICATIONS_CONFIG,] }] },
    { type: ToastContainerService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Toaster, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [TOAST_NOTIFICATIONS_CONFIG]
            }] }, { type: ToastContainerService }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: core/toast-natifications.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated since version 1.0.0 use Toaster
 */
class ToastNotifications {
    /**
     * @param {?} _toaster
     */
    constructor(_toaster) {
        this._toaster = _toaster;
    }
    /**
     * @deprecated since version 1.0.0
     * @param {?} toast
     * @return {?}
     */
    next(toast) {
        /** @type {?} */
        const config = {
            text: toast.text,
            caption: toast.caption,
            type: toast.type,
            duration: toast.duration || toast.lifetime,
            component: null,
        };
        this._toaster.open(config);
    }
}
ToastNotifications.ɵfac = function ToastNotifications_Factory(t) { return new (t || ToastNotifications)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Toaster)); };
ToastNotifications.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastNotifications, factory: ToastNotifications.ɵfac });
/** @nocollapse */
ToastNotifications.ctorParameters = () => [
    { type: Toaster }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastNotifications, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: Toaster }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: toast-content/toast-content.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastContentDirective {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _componentFactoryResolver
     */
    constructor(_viewContainerRef, _componentFactoryResolver) {
        this._viewContainerRef = _viewContainerRef;
        this._componentFactoryResolver = _componentFactoryResolver;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.toast.component);
        this._componentRef = this._viewContainerRef.createComponent(componentFactory);
        this._componentRef.instance.toast = this.toast;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._componentRef) {
            this._componentRef.destroy();
            this._componentRef = null;
        }
    }
}
ToastContentDirective.ɵfac = function ToastContentDirective_Factory(t) { return new (t || ToastContentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
ToastContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ToastContentDirective, selectors: [["", "toastContent", ""]], inputs: { toast: "toast" } });
/** @nocollapse */
ToastContentDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }
];
ToastContentDirective.propDecorators = {
    toast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastContentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[toastContent]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { toast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: toast-notifications.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = {};
class ToastNotificationsModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('ToastNotificationsModule is already loaded. Import it in the root module only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: ToastNotificationsModule,
            providers: [
                { provide: TOAST_NOTIFICATIONS_CONFIG, useValue: config },
            ]
        };
    }
}
ToastNotificationsModule.ɵfac = function ToastNotificationsModule_Factory(t) { return new (t || ToastNotificationsModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ToastNotificationsModule, 12)); };
ToastNotificationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ToastNotificationsModule });
ToastNotificationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        Toaster,
        ToastContainerService,
        { provide: TOAST_NOTIFICATIONS_CONFIG, useValue: ɵ0 },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
/** @nocollapse */
ToastNotificationsModule.ctorParameters = () => [
    { type: ToastNotificationsModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] }
];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToastNotificationsModule, { declarations: function () { return [ToastContainerComponent, BasicToastContentComponent, ToastContentDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastNotificationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                declarations: [
                    ToastContainerComponent,
                    BasicToastContentComponent,
                    ToastContentDirective,
                ],
                entryComponents: [
                    ToastContainerComponent,
                    BasicToastContentComponent,
                ],
                providers: [
                    Toaster,
                    ToastContainerService,
                    { provide: TOAST_NOTIFICATIONS_CONFIG, useValue: ɵ0 },
                ]
            }]
    }], function () { return [{ type: ToastNotificationsModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: core/toast-notification-core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultConfig = { lifetime: 8000 };
/**
 * @deprecated since version 1.0.0 use ToastNotificationsModule
 */
class ToastNotificationCoreModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('ToastNotificationCoreModule is already loaded. Import it in the root module only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = defaultConfig) {
        return {
            ngModule: ToastNotificationCoreModule,
            providers: [
                { provide: TOAST_NOTIFICATIONS_CONFIG, useValue: { duration: config.duration || config.lifetime } }
            ]
        };
    }
}
ToastNotificationCoreModule.ɵfac = function ToastNotificationCoreModule_Factory(t) { return new (t || ToastNotificationCoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ToastNotificationCoreModule, 12)); };
ToastNotificationCoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ToastNotificationCoreModule });
ToastNotificationCoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        ToastNotifications,
    ], imports: [[
            ToastNotificationsModule,
        ]] });
/** @nocollapse */
ToastNotificationCoreModule.ctorParameters = () => [
    { type: ToastNotificationCoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] }
];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToastNotificationCoreModule, { imports: [ToastNotificationsModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastNotificationCoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    ToastNotificationsModule,
                ],
                providers: [
                    ToastNotifications,
                ]
            }]
    }], function () { return [{ type: ToastNotificationCoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: client/toast-notification-client.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated since version 1.0.0
 */
class ToastNotificationClientModule {
}
ToastNotificationClientModule.ɵfac = function ToastNotificationClientModule_Factory(t) { return new (t || ToastNotificationClientModule)(); };
ToastNotificationClientModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ToastNotificationClientModule });
ToastNotificationClientModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastNotificationClientModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-toast-notifications.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-toast-notifications.js.map

/***/ }),

/***/ "NqkC":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_us_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact-us.component.html */ "wibN");
/* harmony import */ var _contact_us_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-us.component.scss */ "xXEL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toast-notifications */ "7Dfe");







let ContactUsComponent = class ContactUsComponent {
    constructor(fb, authService, toaster) {
        this.fb = fb;
        this.authService = authService;
        this.toaster = toaster;
        this.profileForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    ngOnInit() {
        this.authService.retrieveBySlug('contact_us_content', 'contact_us_content').subscribe((res) => {
            if (res && res['data'] && res['data']['_id']) {
                this.contact_us_content = res['data'];
            }
        });
    }
    onSubmit() {
        // TODO: Use EventEmitter with form value
        this.authService.create(this.profileForm.value, 'contact_us_mail').subscribe((res) => {
            if (res) {
                this.toaster.open({
                    text: 'Our Representative will get back to you soon !!',
                    caption: 'Contact Us Notification',
                    type: 'success',
                });
                this.profileForm.reset();
            }
        });
    }
};
ContactUsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_6__["Toaster"] }
];
ContactUsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact-us',
        template: _raw_loader_contact_us_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_us_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactUsComponent);



/***/ }),

/***/ "YIa3":
/*!*********************************************************!*\
  !*** ./src/app/contact-us/contact-us-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactUsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsRoutingModule", function() { return ContactUsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.component */ "NqkC");




const routes = [{ path: '', component: _contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"] }];
let ContactUsRoutingModule = class ContactUsRoutingModule {
};
ContactUsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ContactUsRoutingModule);



/***/ }),

/***/ "lhKH":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.module.ts ***!
  \*************************************************/
/*! exports provided: ContactUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toast-notifications */ "7Dfe");
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us-routing.module */ "YIa3");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us.component */ "NqkC");







let ContactUsModule = class ContactUsModule {
};
ContactUsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"]],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactUsRoutingModule"],
            ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastNotificationsModule"]
        ]
    })
], ContactUsModule);



/***/ }),

/***/ "wibN":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"hero\" class=\"d-flex align-items-center justify-content-center\">\n  <div class=\"container\" data-aos=\"fade-up\">\n    <div class=\"row justify-content-center\" data-aos=\"fade-up\" data-aos-delay=\"150\">\n      <div class=\"col-xl-6 col-lg-8\">\n        <h1>Contact Us</h1>\n      </div>\n    </div>\n  </div>\n</section>\n<section id=\"contact\" class=\"contact\" *ngIf=\"contact_us_content\">\n    <div class=\"container\" data-aos=\"fade-up\">\n      <!-- <div class=\"section-title\">\n        <h2>Contact</h2>\n        <p>Contact Us</p>\n      </div> -->\n      <div>\n        <iframe style=\"border:0; width: 100%; height: 270px;\" src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621\" frameborder=\"0\" allowfullscreen></iframe>\n      </div>\n      <div class=\"row mt-5\">\n        <div class=\"col-lg-4\">\n          <div class=\"info\">\n            <div class=\"address\">\n              <i class=\"icofont-google-map\"></i>\n              <h4>Location:</h4>\n              <p>{{contact_us_content.location}}</p>\n            </div>\n\n            <div class=\"email\">\n              <i class=\"icofont-envelope\"></i>\n              <h4>Email:</h4>\n              <p>{{contact_us_content.email}}</p>\n            </div>\n\n            <div class=\"phone\">\n              <i class=\"icofont-phone\"></i>\n              <h4>Call:</h4>\n              <p>{{contact_us_content.contact_no}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-8 mt-5 mt-lg-0\">\n          <form [formGroup]=\"profileForm\" class=\"php-email-form\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-row\">\n              <div class=\"col-md-6 form-group\">\n                <input type=\"text\" name=\"name\" class=\"form-control\" formControlName=\"name\" placeholder=\"Your Name\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 4 chars\" />\n                <div class=\"validate\"></div>\n              </div>\n              <div class=\"col-md-6 form-group\">\n                <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Your Email\" data-rule=\"email\" data-msg=\"Please enter a valid email\" />\n                <div class=\"validate\"></div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"subject\" placeholder=\"Subject\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 8 chars of subject\" />\n              <div class=\"validate\"></div>\n            </div>\n            <div class=\"form-group\">\n              <textarea class=\"form-control\" formControlName=\"message\" rows=\"5\" data-rule=\"required\" data-msg=\"Please write something for us\" placeholder=\"Message\"></textarea>\n              <div class=\"validate\"></div>\n            </div>\n            <div class=\"mb-3\">\n              <div class=\"loading\">Loading</div>\n              <div class=\"error-message\"></div>\n              <div class=\"sent-message\">Your message has been sent. Thank you!</div>\n            </div>\n            <div class=\"text-center\"><button type=\"submit\" [disabled]=\"!profileForm.valid\">Send Message</button></div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </section>");

/***/ }),

/***/ "xXEL":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#hero {\n  width: 100%;\n  height: 100vh;\n  background: url('contact_us.jpg') top center !important;\n  background-size: cover;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVEQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVybyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2NvbnRhY3RfdXMuanBnXCIpIHRvcCBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=contact-us-contact-us-module-es2015.js.map