"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_purchased-tests_purchased-tests_module_ts"],{

/***/ 3778:
/*!*************************************************************************!*\
  !*** ./src/app/pages/purchased-tests/purchased-tests-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasedTestsPageRoutingModule": () => (/* binding */ PurchasedTestsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _purchased_tests_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchased-tests.page */ 2771);




const routes = [
    {
        path: '',
        component: _purchased_tests_page__WEBPACK_IMPORTED_MODULE_0__.PurchasedTestsPage
    }
];
let PurchasedTestsPageRoutingModule = class PurchasedTestsPageRoutingModule {
};
PurchasedTestsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PurchasedTestsPageRoutingModule);



/***/ }),

/***/ 4843:
/*!*****************************************************************!*\
  !*** ./src/app/pages/purchased-tests/purchased-tests.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasedTestsPageModule": () => (/* binding */ PurchasedTestsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _purchased_tests_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchased-tests-routing.module */ 3778);
/* harmony import */ var _purchased_tests_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchased-tests.page */ 2771);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-pdf-viewer */ 3940);








let PurchasedTestsPageModule = class PurchasedTestsPageModule {
};
PurchasedTestsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__.PdfViewerModule,
            _purchased_tests_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchasedTestsPageRoutingModule
        ],
        declarations: [_purchased_tests_page__WEBPACK_IMPORTED_MODULE_1__.PurchasedTestsPage]
    })
], PurchasedTestsPageModule);



/***/ }),

/***/ 2771:
/*!***************************************************************!*\
  !*** ./src/app/pages/purchased-tests/purchased-tests.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasedTestsPage": () => (/* binding */ PurchasedTestsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _purchased_tests_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchased-tests.page.html?ngResource */ 6477);
/* harmony import */ var _purchased_tests_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchased-tests.page.scss?ngResource */ 8185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/state/state.service */ 6857);



/* eslint-disable @typescript-eslint/naming-convention */




let PurchasedTestsPage = class PurchasedTestsPage {
    constructor(dataService, cd, commonService, stateService) {
        this.dataService = dataService;
        this.cd = cd;
        this.commonService = commonService;
        this.stateService = stateService;
        this.tests = [];
        this.course = null;
        this.schedule = null;
        this.segment = 'schedule';
        this.zoom = 1;
        this.course = this.stateService.getData('course');
        this.dataService.getTests(this.course.id).subscribe(res => {
            this.tests = res;
            this.cd.detectChanges();
        });
        this.dataService.getScheduleByCourseId(this.course?.id).subscribe((resp) => {
            this.schedule = resp[0];
            this.zoom = this.segment === 'schedule' ? 1 : this.zoom;
            this.cd.detectChanges();
        });
    }
    ngOnInit() { }
    pageRendered(event) {
        // console.log('event::::::::::::::::::::\n', event);
    }
    zoomIn() {
        this.zoom = this.zoom === 0 ? 1 : this.zoom + 1;
    }
    zoomOut() {
        this.zoom = this.zoom - 1;
        if (this.zoom === 0) {
            this.zoom = 1;
        }
    }
    openTest(test) {
        this.stateService.setData('test', test);
        this.commonService.navigateForward('purchased-test');
    }
};
PurchasedTestsPage.ctorParameters = () => [
    { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef },
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_4__.StateService }
];
PurchasedTestsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-purchased-tests',
        template: _purchased_tests_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_purchased_tests_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PurchasedTestsPage);



/***/ }),

/***/ 8185:
/*!****************************************************************************!*\
  !*** ./src/app/pages/purchased-tests/purchased-tests.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".zoom-btns {\n  bottom: 20px;\n  right: 20px;\n  z-index: 99;\n  background: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlZC10ZXN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtBQUNKIiwiZmlsZSI6InB1cmNoYXNlZC10ZXN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuem9vbS1idG5zIHtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgei1pbmRleDogOTk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn0iXX0= */";

/***/ }),

/***/ 6477:
/*!****************************************************************************!*\
  !*** ./src/app/pages/purchased-tests/purchased-tests.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"purchased-courses\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Tests\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-segment value=\"all\" color=\"medium\" scrollable=\"true\" mode=\"md\" [(ngModel)]=\"segment\">\n      <ion-segment-button value=\"schedule\">\n        <ion-label>Schedule</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"tests\">\n        <ion-label>Tests</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"white\">\n\n  <div *ngIf=\"segment === 'schedule'\" class=\"w-100 h-100 position-relative\">\n    <ion-header collapse=\"condense\">\n      <ion-toolbar>\n        <ion-title size=\"large\">Schedule</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <p class=\"size-14 fw-bold m-0 p-3 ion-border\" style=\"background: var(--ion-color-light);\">\n      {{schedule?.name || 'Schedule Name'}}\n    </p>\n    <pdf-viewer [src]=\"schedule?.file_url || '../../../assets/no_schedule.pdf'\" (page)=\"0\" [zoom]=\"zoom\"\n      (page-rendered)=\"pageRendered($event)\" class=\"d-block w-100\" [render-text]=\"true\" [original-size]=\"false\"\n      style=\"height: calc(100% - 53px); background: var(--ion-color-medium);\">\n    </pdf-viewer>\n\n    <ion-buttons class=\"position-absolute zoom-btns rounded-pill shadow\">\n      <ion-button (click)=\"zoomIn()\">\n        <ion-icon slot=\"icon-only\" color=\"dark\" class=\"size-48\" name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"zoomOut()\">\n        <ion-icon slot=\"icon-only\" color=\"dark\" class=\"size-48\" name=\"remove-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n\n  <div *ngIf=\"segment === 'tests'\" class=\"w-100 h-100 position-relative\">\n    <ion-header collapse=\"condense\">\n      <ion-toolbar>\n        <ion-title size=\"large\">Tests</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-list lines=\"none\" color=\"white\">\n      <ion-item color=\"white\" detail class=\"border-bottom ion-no-padding p-2 pl-3\" (click)=\"openTest(test)\"\n        *ngFor=\"let test of tests\">\n        <ion-label class=\"ion-text-wrap\">\n          <h2 class=\"fw-semi-bold\">\n            {{ test.title }}\n          </h2>\n          <p class=\"mt-2\">\n            {{test.description}}\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_purchased-tests_purchased-tests_module_ts.js.map