"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_question-papers_question-papers_module_ts"],{

/***/ 1155:
/*!*************************************************************************!*\
  !*** ./src/app/pages/question-papers/question-papers-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionPapersPageRoutingModule": () => (/* binding */ QuestionPapersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _question_papers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-papers.page */ 6421);




const routes = [
    {
        path: '',
        component: _question_papers_page__WEBPACK_IMPORTED_MODULE_0__.QuestionPapersPage
    }
];
let QuestionPapersPageRoutingModule = class QuestionPapersPageRoutingModule {
};
QuestionPapersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QuestionPapersPageRoutingModule);



/***/ }),

/***/ 8465:
/*!*****************************************************************!*\
  !*** ./src/app/pages/question-papers/question-papers.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionPapersPageModule": () => (/* binding */ QuestionPapersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _question_papers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-papers-routing.module */ 1155);
/* harmony import */ var _question_papers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-papers.page */ 6421);







let QuestionPapersPageModule = class QuestionPapersPageModule {
};
QuestionPapersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _question_papers_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuestionPapersPageRoutingModule
        ],
        declarations: [_question_papers_page__WEBPACK_IMPORTED_MODULE_1__.QuestionPapersPage]
    })
], QuestionPapersPageModule);



/***/ }),

/***/ 6421:
/*!***************************************************************!*\
  !*** ./src/app/pages/question-papers/question-papers.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionPapersPage": () => (/* binding */ QuestionPapersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _question_papers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-papers.page.html?ngResource */ 246);
/* harmony import */ var _question_papers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-papers.page.scss?ngResource */ 6118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let QuestionPapersPage = class QuestionPapersPage {
    constructor() { }
    ngOnInit() {
    }
};
QuestionPapersPage.ctorParameters = () => [];
QuestionPapersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-question-papers',
        template: _question_papers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_question_papers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionPapersPage);



/***/ }),

/***/ 6118:
/*!****************************************************************************!*\
  !*** ./src/app/pages/question-papers/question-papers.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbi1wYXBlcnMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 246:
/*!****************************************************************************!*\
  !*** ./src/app/pages/question-papers/question-papers.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>question-papers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"white\">\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_question-papers_question-papers_module_ts.js.map