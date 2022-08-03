"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_schedule_schedule_module_ts"],{

/***/ 7198:
/*!***********************************************************!*\
  !*** ./src/app/pages/schedule/schedule-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePageRoutingModule": () => (/* binding */ SchedulePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.page */ 1645);




const routes = [
    {
        path: '',
        component: _schedule_page__WEBPACK_IMPORTED_MODULE_0__.SchedulePage
    }
];
let SchedulePageRoutingModule = class SchedulePageRoutingModule {
};
SchedulePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SchedulePageRoutingModule);



/***/ }),

/***/ 1839:
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePageModule": () => (/* binding */ SchedulePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule-routing.module */ 7198);
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.page */ 1645);







let SchedulePageModule = class SchedulePageModule {
};
SchedulePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchedulePageRoutingModule
        ],
        declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_1__.SchedulePage]
    })
], SchedulePageModule);



/***/ }),

/***/ 1645:
/*!*************************************************!*\
  !*** ./src/app/pages/schedule/schedule.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePage": () => (/* binding */ SchedulePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _schedule_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.page.html?ngResource */ 8601);
/* harmony import */ var _schedule_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.page.scss?ngResource */ 786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let SchedulePage = class SchedulePage {
    constructor() { }
    ngOnInit() {
    }
};
SchedulePage.ctorParameters = () => [];
SchedulePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-schedule',
        template: _schedule_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_schedule_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SchedulePage);



/***/ }),

/***/ 786:
/*!**************************************************************!*\
  !*** ./src/app/pages/schedule/schedule.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2hlZHVsZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 8601:
/*!**************************************************************!*\
  !*** ./src/app/pages/schedule/schedule.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>schedule</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"white\">\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_schedule_schedule_module_ts.js.map