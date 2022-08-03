"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_payment_payment_module_ts"],{

/***/ 4018:
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/payment-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageRoutingModule": () => (/* binding */ PaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page */ 8622);




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_0__.PaymentPage
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ 4923:
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageModule": () => (/* binding */ PaymentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-routing.module */ 4018);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page */ 8622);







let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_1__.PaymentPage]
    })
], PaymentPageModule);



/***/ }),

/***/ 8622:
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPage": () => (/* binding */ PaymentPage)
/* harmony export */ });
/* harmony import */ var _Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page.html?ngResource */ 9380);
/* harmony import */ var _payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment.page.scss?ngResource */ 2576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/state/state.service */ 6857);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 6578);




/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable max-len */







let PaymentPage = class PaymentPage {
  constructor(dataService, stateService, storageService, loadingCtrl, commonService) {
    this.dataService = dataService;
    this.stateService = stateService;
    this.storageService = storageService;
    this.loadingCtrl = loadingCtrl;
    this.commonService = commonService;
  }

  ngOnInit() {}

  copyURL() {
    navigator.clipboard.writeText(this.uploadedURL);
  }

  fileSelected(event) {
    var _this = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedFile = event.target.files[0];
      const loading = yield _this.loadingCtrl.create({
        message: 'Uploading payment info'
      });
      loading.present();
      const upload = yield _this.storageService.pushFileToStorage({
        file: selectedFile,
        name: selectedFile.name
      });

      if (upload && upload.file_url) {
        _this.uploadedURL = upload.file_url;
        yield _this.dataService.updateOrder({
          payment_id: upload.file_url,
          id: localStorage.getItem('order_id') || ''
        }).then(resp => {
          _this.commonService.presentToast('Updated the payment status.', 'primary');
        }, err => {
          console.error('Error while adding the test:::::\n', err);

          _this.commonService.presentToast('Unable to update order', 'danger');
        });
        loading.dismiss();
      } else {
        console.error('Error while uploading file:::::::::::\n', upload);
        loading.dismiss();
      }
    })();
  }

};

PaymentPage.ctorParameters = () => [{
  type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
}, {
  type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__.StateService
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
}];

PaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-payment',
  template: _payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PaymentPage);


/***/ }),

/***/ 2576:
/*!************************************************************!*\
  !*** ./src/app/pages/payment/payment.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".url {\n  padding: 12px;\n  --border-radius: 5px;\n}\n\ninput[type=file] {\n  position: absolute;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJwYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cmwge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbn0iXX0= */";

/***/ }),

/***/ 9380:
/*!************************************************************!*\
  !*** ./src/app/pages/payment/payment.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"tests\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Payment\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"white\">\n\n  <ion-item>\n    <ion-label>UPI</ion-label>\n    <ion-note slot=\"end\" color=\"danger\">XXXXXX</ion-note>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      <h2>Net Banking</h2>\n      <ion-note color=\"danger\">\n        XXXXXXXXXXXX<br />\n        XXXXXX<br />\n        XXXXXXXX\n      </ion-note>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Contact US</ion-label>\n    <ion-note slot=\"end\" color=\"danger\">+91-9988776655</ion-note>\n  </ion-item>\n\n  <ion-item color=\"white\" lines=\"none\" color=\"light\" class=\"url\" *ngIf=\"uploadedURL\">\n    <ion-label>\n      <ion-text>\n        {{uploadedURL || 1234}}\n      </ion-text>\n    </ion-label>\n    <ion-buttons slot=\"end\" (click)=\"copyURL()\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" color=\"dark\" name=\"copy-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-item>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar color=\"white\">\n    <input type=\"file\" #f id=\"fileInput\" (change)=\"fileSelected($event)\" />\n    <ion-button for=\"fileInput\" expand=\"full\" class=\"ion-no-margin\" size=\"large\" (click)=\"f.click()\">\n      <span style=\"font-size: 14px\">Upload payment acknowledgement</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_payment_payment_module_ts.js.map