"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_test_test_module_ts"],{

/***/ 4385:
/*!***************************************************!*\
  !*** ./src/app/pages/test/test-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPageRoutingModule": () => (/* binding */ TestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.page */ 2941);




const routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_0__.TestPage
    }
];
let TestPageRoutingModule = class TestPageRoutingModule {
};
TestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TestPageRoutingModule);



/***/ }),

/***/ 5011:
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPageModule": () => (/* binding */ TestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-routing.module */ 4385);
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.page */ 2941);







let TestPageModule = class TestPageModule {
};
TestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _test_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestPageRoutingModule
        ],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_1__.TestPage]
    })
], TestPageModule);



/***/ }),

/***/ 2941:
/*!*****************************************!*\
  !*** ./src/app/pages/test/test.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPage": () => (/* binding */ TestPage)
/* harmony export */ });
/* harmony import */ var _Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _test_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.page.html?ngResource */ 5310);
/* harmony import */ var _test_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.page.scss?ngResource */ 1001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/state/state.service */ 6857);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 6578);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);




/* eslint-disable @typescript-eslint/member-ordering */

/* eslint-disable @typescript-eslint/naming-convention */









let TestPage = class TestPage {
  constructor(cd, dataService, stateService, storageService, loadingCtrl, commonService, http) {
    this.cd = cd;
    this.dataService = dataService;
    this.stateService = stateService;
    this.storageService = storageService;
    this.loadingCtrl = loadingCtrl;
    this.commonService = commonService;
    this.http = http;
    this.test = null;
    this.segment = 'content';
    this.courseId = this.stateService.getData('course')?.id || '';
    this.testId = this.stateService.getData('test')?.id || '';
    this.dataService.getTestById(this.testId).subscribe(resp => {
      this.test = resp;
      this.cd.detectChanges();
    });
    this.dataService.getStudentById(localStorage.getItem('student_id') || '').subscribe(resp => {
      this.student = resp[0];
      localStorage.setItem('student', JSON.stringify(this.student));
      this.cd.detectChanges();
    });
  }

  ngOnInit() {}

  segmentChanged(event) {
    console.log(event);
  }

  fileSelected(event) {
    var _this = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedFile = event.target.files[0];
      const loading = yield _this.loadingCtrl.create({
        message: 'Uploading answer'
      });
      loading.present();
      const file = {
        file: selectedFile,
        name: selectedFile.name
      };
      const upload = yield _this.storageService.uploadAnswer(file);

      if (upload && upload.file_url) {
        if (_this.test.answers && _this.test.answers.length > 0) {
          _this.test.answers.push({
            file_url: upload.file_url,
            type: _this.commonService.getExtension(selectedFile.name),
            name: selectedFile.name,
            student_id: _this.student.id,
            student_name: _this.student.first_name + ' ' + _this.student.last_name
          });
        } else {
          _this.test.answers = [{
            file_url: upload.file_url,
            type: _this.commonService.getExtension(selectedFile.name),
            name: selectedFile.name,
            student_id: _this.student.id,
            student_name: _this.student.first_name + ' ' + _this.student.last_name
          }];
        }

        yield _this.dataService.updateTest(_this.test);
        loading.dismiss();
      } else {
        console.error('Error while uploading file:::::::::::\n', upload);
        loading.dismiss();
      }
    })();
  }

  download(file) {
    (0,file_saver__WEBPACK_IMPORTED_MODULE_7__.saveAs)(file.file_url, file.name); // const headers = new HttpHeaders()
    //   .set('content-type', '*/*')
    //   .set('Access-Control-Allow-Origin', '*')
    //   .append('content-type', 'application/json');
    // this.http.get(file.file_url, { headers }).subscribe((response) => {
    //   console.log(response);
    // });
    // const xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = (event) => {
    //   /* Create a new Blob object using the response
    //   *  data of the onload object.
    //   */
    //   const blob = new Blob([xhr.response], {});
    //   const a: any = document.createElement('a');
    //   a.style = 'display: none';
    //   document.body.appendChild(a);
    //   const url = window.URL.createObjectURL(blob);
    //   a.href = url;
    //   a.download = file.name;
    //   a.click();
    //   window.URL.revokeObjectURL(url);
    // };
    // xhr.open('GET', file.file_url);
    // xhr.send();
    // const a = document.createElement('a');
    // a.style.display = 'none';
    // a.setAttribute('download', file.name);
    // a.href = file.file_url;
    // // the filename you want
    // a.download = file.name;
    // document.body.appendChild(a);
    // a.click();
    // a.remove();
    // This can be downloaded directly:
    // const xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = (event) => {
    //   const blob = xhr.response;
    // };
    // xhr.open('GET', file.file_url);
    // xhr.send();
  }

};

TestPage.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
}, {
  type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
}, {
  type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__.StateService
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}, {
  type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
}];

TestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-test',
  template: _test_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_test_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TestPage);


/***/ }),

/***/ 1001:
/*!******************************************************!*\
  !*** ./src/app/pages/test/test.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "input[type=file] {\n  position: absolute;\n  opacity: 0;\n}\n\n.file .file-type {\n  height: 120px;\n  background-color: var(--ion-color-light);\n}\n\n.file .file-type img {\n  width: 100%;\n  height: 120px;\n}\n\n.file .file-type ion-icon {\n  font-size: 42px;\n}\n\n.file .file-name {\n  padding: 8px;\n  background-color: var(--ion-color-white);\n  position: relative;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBR0k7RUFDSSxhQUFBO0VBQ0Esd0NBQUE7QUFBUjs7QUFFUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQVo7O0FBR1E7RUFDSSxlQUFBO0FBRFo7O0FBS0k7RUFDSSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFIUiIsImZpbGUiOiJ0ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmZpbGUge1xuICAgIC5maWxlLXR5cGUge1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZmlsZS1uYW1lIHtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDk7XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 5310:
/*!******************************************************!*\
  !*** ./src/app/pages/test/test.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"purchased-tests\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{test?.title || 'Test'}}\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"white\">\n    <ion-segment value=\"all\" color=\"medium\" scrollable=\"true\" mode=\"md\" [(ngModel)]=\"segment\"\n      (ionChange)=\"segmentChanged($event)\">\n\n      <ion-segment-button value=\"content\">\n        <ion-label>Content</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"answers\">\n        <ion-label>Answers</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"review-comments\">\n        <ion-label>Review Comments</ion-label>\n      </ion-segment-button>\n\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"white\">\n  <div [ngSwitch]=\"segment\">\n\n    <div *ngSwitchCase=\"'content'\">\n      <ion-list lines=\"none\" color=\"white\">\n        <ion-row class=\"ion-margin-top\">\n          <ion-col size=\"6\" size-lg=\"4\" size-xl=\"3\" *ngFor=\"let file of test?.file_urls\" class=\"ion-margin-bottom\">\n            <ion-card class=\"h-100 ion-no-margin file\" color=\"white\" (click)=\"download(file)\">\n              <div class=\"file-type d-grid-center\">\n                <img *ngIf=\"file.type === 'image'\" [src]=\"file.file_url\" load=\"lazy\" />\n                <div *ngIf=\"file.type === 'audio'\">\n                  <ion-icon color=\"medium\" name=\"play-circle-outline\"></ion-icon>\n                  <ion-icon color=\"medium\" name=\"pause-circle-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'video'\">\n                  <ion-icon color=\"medium\" name=\"film-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'pdf'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'txt'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'docx'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'xlsx'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'ppt'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'archive'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n              </div>\n              <div class=\"file-name\">\n                <ion-text>\n                  {{file.name}}\n                </ion-text>\n              </div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase=\"'answers'\">\n      <ion-list lines=\"none\" color=\"white\">\n        <ion-row class=\"ion-margin-top\">\n          <ion-col size=\"6\" size-lg=\"4\" size-xl=\"3\" *ngFor=\"let file of test?.answers\" class=\"ion-margin-bottom\">\n            <ion-card class=\"h-100 ion-no-margin file\" color=\"white\" (click)=\"download(file)\">\n              <div class=\"file-type d-grid-center\">\n                <img *ngIf=\"file.type === 'image'\" [src]=\"file.file_url\" load=\"lazy\" />\n                <div *ngIf=\"file.type === 'audio'\">\n                  <ion-icon color=\"medium\" name=\"play-circle-outline\"></ion-icon>\n                  <ion-icon color=\"medium\" name=\"pause-circle-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'video'\">\n                  <ion-icon color=\"medium\" name=\"film-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'pdf'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'txt'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'docx'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'xd'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'xlsx'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'ppt'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'archive'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n              </div>\n              <div class=\"file-name\">\n                <ion-text>\n                  {{file.name}}\n                </ion-text>\n              </div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase=\"'review-comments'\">\n      <ion-list lines=\"none\" color=\"white\">\n        <ion-row class=\"ion-margin-top\">\n          <ion-col size=\"6\" size-lg=\"4\" size-xl=\"3\" *ngFor=\"let file of test?.reviews\" class=\"ion-margin-bottom\">\n            <ion-card class=\"h-100 ion-no-margin file\" color=\"white\" (click)=\"download(file)\">\n              <div class=\"file-type d-grid-center\">\n                <img *ngIf=\"file.type === 'image'\" [src]=\"file.file_url\" load=\"lazy\" />\n                <div *ngIf=\"file.type === 'audio'\">\n                  <ion-icon color=\"medium\" name=\"play-circle-outline\"></ion-icon>\n                  <ion-icon color=\"medium\" name=\"pause-circle-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'video'\">\n                  <ion-icon color=\"medium\" name=\"film-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'pdf'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'txt'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'docx'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'xd'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'xlsx'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'ppt'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'archive'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n              </div>\n              <div class=\"file-name\">\n                <ion-text>\n                  {{file.name}}\n                </ion-text>\n              </div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer *ngIf=\"segment === 'answers'\">\n  <ion-toolbar color=\"white\">\n    <input type=\"file\" #f id=\"fileInput\" (change)=\"fileSelected($event)\" />\n    <ion-button for=\"fileInput\" expand=\"full\" class=\"ion-no-margin\" size=\"large\" (click)=\"f.click()\">\n      <span style=\"font-size: 14px\">Upload Answer</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_test_test_module_ts.js.map