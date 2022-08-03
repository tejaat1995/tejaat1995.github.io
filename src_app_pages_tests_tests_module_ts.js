"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tests_tests_module_ts"],{

/***/ 5112:
/*!*****************************************************!*\
  !*** ./src/app/pages/tests/tests-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestsPageRoutingModule": () => (/* binding */ TestsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tests_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tests.page */ 7369);




const routes = [
    {
        path: '',
        component: _tests_page__WEBPACK_IMPORTED_MODULE_0__.TestsPage
    }
];
let TestsPageRoutingModule = class TestsPageRoutingModule {
};
TestsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TestsPageRoutingModule);



/***/ }),

/***/ 3238:
/*!*********************************************!*\
  !*** ./src/app/pages/tests/tests.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestsPageModule": () => (/* binding */ TestsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tests_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tests-routing.module */ 5112);
/* harmony import */ var _tests_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tests.page */ 7369);







let TestsPageModule = class TestsPageModule {
};
TestsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tests_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestsPageRoutingModule
        ],
        declarations: [_tests_page__WEBPACK_IMPORTED_MODULE_1__.TestsPage]
    })
], TestsPageModule);



/***/ }),

/***/ 7369:
/*!*******************************************!*\
  !*** ./src/app/pages/tests/tests.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestsPage": () => (/* binding */ TestsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tests_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tests.page.html?ngResource */ 7452);
/* harmony import */ var _tests_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tests.page.scss?ngResource */ 7998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/state/state.service */ 6857);



/* eslint-disable @typescript-eslint/naming-convention */




let TestsPage = class TestsPage {
    constructor(dataService, cd, commonService, stateService) {
        this.dataService = dataService;
        this.cd = cd;
        this.commonService = commonService;
        this.stateService = stateService;
        this.tests = [];
        this.dataService.getTests(this.stateService.getData('course')?.id || '').subscribe(res => {
            this.tests = res;
            this.cd.detectChanges();
        });
        this.dataService.getStudentById(localStorage.getItem('uid') || '').subscribe((resp) => {
            this.student = resp[0];
            localStorage.setItem('student', JSON.stringify(this.student));
            this.cd.detectChanges();
        });
    }
    ngOnInit() { }
    buyCourse() {
        const course = this.stateService.getData('course') || {};
        const payload = {
            course_id: course?.id,
            course_name: course?.title,
            course_desc: course?.description,
            student_id: localStorage.getItem('uid'),
            student_name: this.student.first_name + ' ' + this.student.last_name,
            status: false
        };
        this.dataService.getOrders(payload).then((res) => {
            if (res?.size > 0) {
                this.commonService.navigateForward('payment');
            }
            else {
                this.dataService.addOrder(payload).then((resp) => {
                    if (resp.id) {
                        this.stateService.setData('order_id', resp.id);
                        this.commonService.navigateForward('payment');
                    }
                }, err => {
                    console.error('Error while adding the order:::::\n', err);
                    this.commonService.presentToast('Unable to create order', 'danger');
                });
            }
        }, err => {
            console.error('Error while checking the order:::::\n', err);
            this.commonService.presentToast('Unable to check order', 'danger');
        });
    }
};
TestsPage.ctorParameters = () => [
    { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef },
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_4__.StateService }
];
TestsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tests',
        template: _tests_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tests_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TestsPage);



/***/ }),

/***/ 7998:
/*!********************************************************!*\
  !*** ./src/app/pages/tests/tests.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0cy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 7452:
/*!********************************************************!*\
  !*** ./src/app/pages/tests/tests.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"courses\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Tests\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar color=\"white\">\n      <ion-title size=\"large\">Tests</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid class=\"\">\n    <ion-row class=\"\">\n      <ion-col size=\"6\" size-lg=\"4\" size-xl=\"3\" *ngFor=\"let test of tests\">\n        <ion-card mode=\"ios\" class=\"ion-no-margin h-100\">\n          <ion-card-content>\n            <ion-text color=\"dark\">\n              <p>{{ test.title }}</p>\n            </ion-text>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"buyCourse()\">\n      <ion-icon name=\"card-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tests_tests_module_ts.js.map