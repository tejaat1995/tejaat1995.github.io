"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_courses_courses_module_ts"],{

/***/ 9733:
/*!*********************************************************!*\
  !*** ./src/app/pages/courses/courses-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesPageRoutingModule": () => (/* binding */ CoursesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _courses_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses.page */ 6536);




const routes = [
    {
        path: '',
        component: _courses_page__WEBPACK_IMPORTED_MODULE_0__.CoursesPage
    }
];
let CoursesPageRoutingModule = class CoursesPageRoutingModule {
};
CoursesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoursesPageRoutingModule);



/***/ }),

/***/ 9084:
/*!*************************************************!*\
  !*** ./src/app/pages/courses/courses.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesPageModule": () => (/* binding */ CoursesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _courses_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses-routing.module */ 9733);
/* harmony import */ var _courses_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses.page */ 6536);







let CoursesPageModule = class CoursesPageModule {
};
CoursesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _courses_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoursesPageRoutingModule
        ],
        declarations: [_courses_page__WEBPACK_IMPORTED_MODULE_1__.CoursesPage]
    })
], CoursesPageModule);



/***/ }),

/***/ 6536:
/*!***********************************************!*\
  !*** ./src/app/pages/courses/courses.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesPage": () => (/* binding */ CoursesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _courses_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses.page.html?ngResource */ 4267);
/* harmony import */ var _courses_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses.page.scss?ngResource */ 2808);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1228);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/state/state.service */ 6857);
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data/data.service */ 9244);



/* eslint-disable @typescript-eslint/naming-convention */






let CoursesPage = class CoursesPage {
    constructor(dataService, cd, alertCtrl, commonService, stateService, authService) {
        this.dataService = dataService;
        this.cd = cd;
        this.alertCtrl = alertCtrl;
        this.commonService = commonService;
        this.stateService = stateService;
        this.authService = authService;
        this.courses = [];
        this.dataService.getCourses().subscribe(res => {
            this.courses = res;
            this.cd.detectChanges();
        });
        this.dataService.getStudentById(localStorage.getItem('student_id') || '').subscribe((resp) => {
            this.student = resp;
            localStorage.setItem('student', JSON.stringify(this.student));
            this.cd.detectChanges();
        });
    }
    ngOnInit() { }
    openCourse(course) {
        this.stateService.setData('course', course);
        this.commonService.navigateForward('tests');
    }
    buyCourse(course) {
        const payload = {
            course_id: course?.id,
            course_name: course?.title,
            course_desc: course?.description,
            student_id: localStorage.getItem('student_id') || this.student.id,
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
                        localStorage.setItem('order_id', resp.id);
                        this.commonService.navigateForward('payment');
                    }
                }, (err) => {
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
CoursesPage.ctorParameters = () => [
    { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_4__.StateService },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
CoursesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-courses',
        template: _courses_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_courses_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoursesPage);



/***/ }),

/***/ 2808:
/*!************************************************************!*\
  !*** ./src/app/pages/courses/courses.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2VzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4267:
/*!************************************************************!*\
  !*** ./src/app/pages/courses/courses.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Courses\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"white\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar color=\"white\">\n      <ion-title size=\"large\">Courses</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid class=\"ion-no-padding border-top\">\n    <ion-row>\n      <ion-col size=\"6\" size-lg=\"4\" size-xl=\"3\" *ngFor=\"let course of courses\">\n        <ion-item color=\"white\" detail class=\"border-bottom border-right ion-no-padding p-2 pl-3 h-100\"\n          (click)=\"buyCourse(course)\" lines=\"none\">\n          <ion-label class=\"ion-text-wrap\">\n            <h2 class=\"fw-semi-bold\">\n              {{ course.title }}\n            </h2>\n            <ion-text color=\"medium\">\n              <p class=\"mt-2\">\n                {{course.description || 'Description not available'}}\n              </p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_courses_courses_module_ts.js.map