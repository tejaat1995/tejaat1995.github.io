"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_purchased-courses_purchased-courses_module_ts"],{

/***/ 630:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/purchased-courses/purchased-courses-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasedCoursesPageRoutingModule": () => (/* binding */ PurchasedCoursesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _purchased_courses_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchased-courses.page */ 9151);




const routes = [
    {
        path: '',
        component: _purchased_courses_page__WEBPACK_IMPORTED_MODULE_0__.PurchasedCoursesPage
    }
];
let PurchasedCoursesPageRoutingModule = class PurchasedCoursesPageRoutingModule {
};
PurchasedCoursesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PurchasedCoursesPageRoutingModule);



/***/ }),

/***/ 4779:
/*!*********************************************************************!*\
  !*** ./src/app/pages/purchased-courses/purchased-courses.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasedCoursesPageModule": () => (/* binding */ PurchasedCoursesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _purchased_courses_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchased-courses-routing.module */ 630);
/* harmony import */ var _purchased_courses_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchased-courses.page */ 9151);







let PurchasedCoursesPageModule = class PurchasedCoursesPageModule {
};
PurchasedCoursesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _purchased_courses_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchasedCoursesPageRoutingModule
        ],
        declarations: [_purchased_courses_page__WEBPACK_IMPORTED_MODULE_1__.PurchasedCoursesPage]
    })
], PurchasedCoursesPageModule);



/***/ }),

/***/ 9151:
/*!*******************************************************************!*\
  !*** ./src/app/pages/purchased-courses/purchased-courses.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasedCoursesPage": () => (/* binding */ PurchasedCoursesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _purchased_courses_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchased-courses.page.html?ngResource */ 7166);
/* harmony import */ var _purchased_courses_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchased-courses.page.scss?ngResource */ 757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1228);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/state/state.service */ 6857);
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data/data.service */ 9244);









let PurchasedCoursesPage = class PurchasedCoursesPage {
    constructor(dataService, cd, alertCtrl, commonService, stateService, authService) {
        this.dataService = dataService;
        this.cd = cd;
        this.alertCtrl = alertCtrl;
        this.commonService = commonService;
        this.stateService = stateService;
        this.authService = authService;
        this.orders = [];
        this.dataService.getPurchasedOrders().subscribe(res => {
            this.orders = res;
            this.cd.detectChanges();
        });
    }
    ngOnInit() {
    }
    openCourse(course) {
        const courseData = {
            id: course?.course_id,
            title: course?.course_name,
            description: course?.course_desc
        };
        this.stateService.setData('course', courseData);
        this.commonService.navigateForward('purchased-tests');
    }
};
PurchasedCoursesPage.ctorParameters = () => [
    { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_4__.StateService },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
PurchasedCoursesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-purchased-courses',
        template: _purchased_courses_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_purchased_courses_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PurchasedCoursesPage);



/***/ }),

/***/ 757:
/*!********************************************************************************!*\
  !*** ./src/app/pages/purchased-courses/purchased-courses.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXJjaGFzZWQtY291cnNlcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 7166:
/*!********************************************************************************!*\
  !*** ./src/app/pages/purchased-courses/purchased-courses.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Courses Subscribed\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"white\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar color=\"white\">\n      <ion-title size=\"large\">Courses</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list lines=\"none\" color=\"white\">\n    <ion-item color=\"white\" detail class=\"border-bottom ion-no-padding p-2 pl-3\" (click)=\"openCourse(order)\"\n      *ngFor=\"let order of orders\">\n      <ion-label class=\"ion-text-wrap\">\n        <h2 class=\"fw-semi-bold\">\n          {{ order.course_name }}\n        </h2>\n        <p class=\"mt-2\">\n          {{order.course_desc}}\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_purchased-courses_purchased-courses_module_ts.js.map