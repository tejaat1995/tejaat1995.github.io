"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_orders_orders_module_ts"],{

/***/ 6977:
/*!*******************************************************!*\
  !*** ./src/app/pages/orders/orders-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPageRoutingModule": () => (/* binding */ OrdersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.page */ 7130);




const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_0__.OrdersPage
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrdersPageRoutingModule);



/***/ }),

/***/ 7066:
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPageModule": () => (/* binding */ OrdersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders-routing.module */ 6977);
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.page */ 7130);







let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrdersPageRoutingModule
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_1__.OrdersPage]
    })
], OrdersPageModule);



/***/ }),

/***/ 7130:
/*!*********************************************!*\
  !*** ./src/app/pages/orders/orders.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPage": () => (/* binding */ OrdersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _orders_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.page.html?ngResource */ 1401);
/* harmony import */ var _orders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.page.scss?ngResource */ 5030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1228);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/state/state.service */ 6857);
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data/data.service */ 9244);









let OrdersPage = class OrdersPage {
    constructor(dataService, cd, alertCtrl, commonService, stateService, authService) {
        this.dataService = dataService;
        this.cd = cd;
        this.alertCtrl = alertCtrl;
        this.commonService = commonService;
        this.stateService = stateService;
        this.authService = authService;
        this.orders = [];
        this.dataService.getOrdersList().subscribe(res => {
            this.orders = res;
            this.cd.detectChanges();
        });
    }
    ngOnInit() {
    }
};
OrdersPage.ctorParameters = () => [
    { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_4__.StateService },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
OrdersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-orders',
        template: _orders_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_orders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OrdersPage);



/***/ }),

/***/ 5030:
/*!**********************************************************!*\
  !*** ./src/app/pages/orders/orders.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1401:
/*!**********************************************************!*\
  !*** ./src/app/pages/orders/orders.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Orders\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar color=\"white\">\n      <ion-title size=\"large\">Courses</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid class=\"\">\n    <ion-row class=\"\">\n      <ion-col size=\"6\" size-lg=\"4\" size-xl=\"3\" *ngFor=\"let order of orders\">\n        <ion-card mode=\"ios\" class=\"ion-no-margin h-100\">\n          <ion-card-content>\n            <ion-text color=\"dark\">\n              <p>{{ order.course_name }}</p>\n              <p>{{ order.student_name }}</p>\n              <ion-text [color]=\"order.status ? 'success' : 'danger'\">\n                <p>{{ order.status ? 'Purchased' : 'Pending' }}</p>\n              </ion-text>\n            </ion-text>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_orders_orders_module_ts.js.map