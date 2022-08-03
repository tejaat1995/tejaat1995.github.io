"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_about-us_about-us_module_ts"],{

/***/ 5790:
/*!***********************************************************!*\
  !*** ./src/app/pages/about-us/about-us-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPageRoutingModule": () => (/* binding */ AboutUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.page */ 2794);




const routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_0__.AboutUsPage
    }
];
let AboutUsPageRoutingModule = class AboutUsPageRoutingModule {
};
AboutUsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutUsPageRoutingModule);



/***/ }),

/***/ 9902:
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPageModule": () => (/* binding */ AboutUsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us-routing.module */ 5790);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.page */ 2794);







let AboutUsPageModule = class AboutUsPageModule {
};
AboutUsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutUsPageRoutingModule
        ],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_1__.AboutUsPage]
    })
], AboutUsPageModule);



/***/ }),

/***/ 2794:
/*!*************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPage": () => (/* binding */ AboutUsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _about_us_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.page.html?ngResource */ 7383);
/* harmony import */ var _about_us_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.page.scss?ngResource */ 4892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AboutUsPage = class AboutUsPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsPage.ctorParameters = () => [];
AboutUsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about-us',
        template: _about_us_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_about_us_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutUsPage);



/***/ }),

/***/ 4892:
/*!**************************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "p {\n  color: var(--ion-color-medium);\n  text-align: justify;\n}\n\n.youtube-video {\n  height: 200px;\n}\n\n@media (min-width: 992px) {\n  .gurukul-img {\n    margin: 0 !important;\n  }\n  .gurukul-img ion-img {\n    height: 300px;\n    object-fit: fill;\n  }\n\n  .youtube-video {\n    height: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksb0JBQUE7RUFDTjtFQUNNO0lBQ0ksYUFBQTtJQUNBLGdCQUFBO0VBQ1Y7O0VBR0U7SUFDSSxhQUFBO0VBQU47QUFDRiIsImZpbGUiOiJhYm91dC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnlvdXR1YmUtdmlkZW8ge1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5ndXJ1a3VsLWltZyB7XG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXG4gICAgICAgIGlvbi1pbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGZpbGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAueW91dHViZS12aWRlbyB7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 7383:
/*!**************************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      About Gurukul\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n\n  <ion-row class=\"mb-4\">\n    <ion-col size=\"12\" size-lg=\"6\" class=\"mb-3 gurukul-img\">\n      <ion-img src=\"../../../assets/gurukul.jpg\"></ion-img>\n    </ion-col>\n    <ion-col size=\"12\" size-lg=\"6\">\n      <iframe class=\"w-100 youtube-video\"\n        src=\"https://www.youtube.com/embed/WNVtttyOhtA?enablejsapi=1&autoplay=0&cc_load_policy=0&iv_load_policy=1&loop=0&modestbranding=0&rel=1&showinfo=1&fs=1&playsinline=0&controls=2&autohide=2&theme=dark&color=red&\"\n        frameborder=\"0\"></iframe>\n    </ion-col>\n  </ion-row>\n  <p>\n    Coming from a background of CA, our team makes us one of a kind institute in the field. What began with a batch of\n    50 students, has today grown into a campus of 1200+ of CA aspirants from across the states like AP, Telangana,\n    Karnataka and Orissa. We recognize that out strength is our qualification, having built a reputation of best CA\n    institute in just a matter of a few years.\n  </p>\n\n  <h4>Courses:</h4>\n  <p>\n    The courses offered at the institute include the entire Chartered Accountancy Course under one roof. Along with\n    that, we have started intermediate college for students who are ambitious of becoming Chartered Accountants. We\n    Currently offer the groups of MEC, CA as well as CMA\n  </p>\n\n  <p>\n    Owing to the efforts made by our experienced and hardworking faculty, the students have secured All India ranks in\n    both CA and CMA Courses. We are also proud to inform that Gurukul had garnered All India top marks of 192 in CPT\n    results declared in January 2018, with a pass percentage of 45% at the CA-Inter level and 80% CA-foundation level.\n  </p>\n\n  <h4>Infrastructure:</h4>\n  <p>\n    Gurukul is known for its futuristic infrastructure and technologically-advanced learning environment. We use\n    projectors, Documentary Cameras, Audible sound systems where students can learn various subjects with a renewed\n    zeal. We also have the facility of girls and boys hostels, set up on popular demand.\n  </p>\n\n\n  <h4>Conclusion:</h4>\n\n  <p>\n    As they say “CA study Course in India is not the toughest study course. It’s for them who are the toughest, the\n    determined.” It is on this principle that our institute, Gurukul is run to aspire for the popular profession around\n    the globe and across industries, whether it is Taxation, Audit, Accounting, and Corporate Finance to name a few.\n    What makes us stand out is that we prepare our materials after thorough and extensive research to keep ourselves\n    updated with the latest syllabus. Not just that, we also conduct revision exams from time to time, considered to be\n    mandatory practice in the pursuit of CA.\n  </p>\n  <p>\n    Having undergone this rigorous course of CA ourselves, we understand the needs and deeds of the students a little\n    more. We are at a better place to guide and push them forward towards their dreams and and aspirations. All of it\n    put together, it enables our students to not only crack their CA examinations but also be the Confident and\n    Competitive professionals of tomorrow\n  </p>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_about-us_about-us_module_ts.js.map