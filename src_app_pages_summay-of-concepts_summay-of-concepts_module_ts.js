"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_summay-of-concepts_summay-of-concepts_module_ts"],{

/***/ 4950:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/summay-of-concepts/summay-of-concepts-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummayOfConceptsPageRoutingModule": () => (/* binding */ SummayOfConceptsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _summay_of_concepts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summay-of-concepts.page */ 993);




const routes = [
    {
        path: '',
        component: _summay_of_concepts_page__WEBPACK_IMPORTED_MODULE_0__.SummayOfConceptsPage
    }
];
let SummayOfConceptsPageRoutingModule = class SummayOfConceptsPageRoutingModule {
};
SummayOfConceptsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SummayOfConceptsPageRoutingModule);



/***/ }),

/***/ 9933:
/*!***********************************************************************!*\
  !*** ./src/app/pages/summay-of-concepts/summay-of-concepts.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummayOfConceptsPageModule": () => (/* binding */ SummayOfConceptsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _summay_of_concepts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summay-of-concepts-routing.module */ 4950);
/* harmony import */ var _summay_of_concepts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summay-of-concepts.page */ 993);







let SummayOfConceptsPageModule = class SummayOfConceptsPageModule {
};
SummayOfConceptsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _summay_of_concepts_routing_module__WEBPACK_IMPORTED_MODULE_0__.SummayOfConceptsPageRoutingModule
        ],
        declarations: [_summay_of_concepts_page__WEBPACK_IMPORTED_MODULE_1__.SummayOfConceptsPage]
    })
], SummayOfConceptsPageModule);



/***/ }),

/***/ 993:
/*!*********************************************************************!*\
  !*** ./src/app/pages/summay-of-concepts/summay-of-concepts.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummayOfConceptsPage": () => (/* binding */ SummayOfConceptsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _summay_of_concepts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summay-of-concepts.page.html?ngResource */ 7682);
/* harmony import */ var _summay_of_concepts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summay-of-concepts.page.scss?ngResource */ 9500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let SummayOfConceptsPage = class SummayOfConceptsPage {
    constructor() { }
    ngOnInit() {
    }
};
SummayOfConceptsPage.ctorParameters = () => [];
SummayOfConceptsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-summay-of-concepts',
        template: _summay_of_concepts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_summay_of_concepts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SummayOfConceptsPage);



/***/ }),

/***/ 9500:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/summay-of-concepts/summay-of-concepts.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdW1tYXktb2YtY29uY2VwdHMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7682:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/summay-of-concepts/summay-of-concepts.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>summay-of-concepts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"white\">\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_summay-of-concepts_summay-of-concepts_module_ts.js.map