"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_purchased-test_purchased-test_module_ts"],{

/***/ 4553:
/*!***********************************************************************!*\
  !*** ./src/app/pages/purchased-test/purchased-test-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasedTestPageRoutingModule": () => (/* binding */ PurchasedTestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _purchased_test_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchased-test.page */ 5110);




const routes = [
    {
        path: '',
        component: _purchased_test_page__WEBPACK_IMPORTED_MODULE_0__.PurchasedTestPage
    }
];
let PurchasedTestPageRoutingModule = class PurchasedTestPageRoutingModule {
};
PurchasedTestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PurchasedTestPageRoutingModule);



/***/ }),

/***/ 1082:
/*!***************************************************************!*\
  !*** ./src/app/pages/purchased-test/purchased-test.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasedTestPageModule": () => (/* binding */ PurchasedTestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _purchased_test_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchased-test-routing.module */ 4553);
/* harmony import */ var _purchased_test_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchased-test.page */ 5110);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-pdf-viewer */ 3940);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-quill */ 3115);
/* harmony import */ var src_app_video_player_video_player_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/video-player/video-player.module */ 6504);
/* harmony import */ var _awesome_cordova_plugins_video_player_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/video-player/ngx */ 8819);











let PurchasedTestPageModule = class PurchasedTestPageModule {
};
PurchasedTestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _purchased_test_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchasedTestPageRoutingModule,
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__.PdfViewerModule,
            src_app_video_player_video_player_module__WEBPACK_IMPORTED_MODULE_2__.VideoPlayerPageModule,
            ngx_quill__WEBPACK_IMPORTED_MODULE_10__.QuillModule.forRoot({
                modules: {
                    syntax: true
                },
                format: 'html',
                readOnly: true,
                theme: 'snow',
                placeholder: 'EVALUATOR’S REMARKS',
            }),
        ],
        declarations: [_purchased_test_page__WEBPACK_IMPORTED_MODULE_1__.PurchasedTestPage],
        providers: [_awesome_cordova_plugins_video_player_ngx__WEBPACK_IMPORTED_MODULE_3__.VideoPlayer]
    })
], PurchasedTestPageModule);



/***/ }),

/***/ 5110:
/*!*************************************************************!*\
  !*** ./src/app/pages/purchased-test/purchased-test.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasedTestPage": () => (/* binding */ PurchasedTestPage)
/* harmony export */ });
/* harmony import */ var _Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _purchased_test_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchased-test.page.html?ngResource */ 2507);
/* harmony import */ var _purchased_test_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchased-test.page.scss?ngResource */ 1248);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/state/state.service */ 6857);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 6578);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/filesystem */ 1662);
/* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ 397);
/* harmony import */ var _awesome_cordova_plugins_video_player_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/video-player/ngx */ 8819);
/* harmony import */ var src_app_video_player_video_player_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/video-player/video-player.page */ 3297);
/* harmony import */ var src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/constants/fb-collections */ 744);













 // import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
// import { File } from '@awesome-cordova-plugins/file/ngx';




let PurchasedTestPage = class PurchasedTestPage {
  constructor(cd, http, dataService, stateService, storageService, loadingCtrl, commonService, // private transfer: FileTransfer,
  // private file: File,
  videoPlayer, platform, modalController, downloader) {
    this.cd = cd;
    this.http = http;
    this.dataService = dataService;
    this.stateService = stateService;
    this.storageService = storageService;
    this.loadingCtrl = loadingCtrl;
    this.commonService = commonService;
    this.videoPlayer = videoPlayer;
    this.platform = platform;
    this.modalController = modalController;
    this.downloader = downloader;
    this.test = null;
    this.remarks = null;
    this.segment = 'question-papers';
    this.schedule = null;
    this.answerSheet = null;
    this.valuedAnswerSheet = null;
    this.questionPaper = null;
    this.isAudioPlaying = true;
    this.zoom = 1;
    this.downloadProgress = 0;

    this.converBlobToBase64 = blob => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.readAsDataURL(blob);
    });

    this.courseId = this.stateService.getData('course')?.id;
    this.testId = this.stateService.getData('test')?.id;
    this.dataService.getTestById(this.testId).subscribe(resp => {
      this.test = resp;
      this.cd.detectChanges();
    }); // this.dataService.getScheduleByTestId(this.testId).subscribe((resp: any) => {
    //   this.schedule = resp[0];
    //   this.cd.detectChanges();
    // });

    this.dataService.getAnswerSheetByTestId(this.testId).subscribe(resp => {
      this.answerSheet = resp[0];
      this.cd.detectChanges();
    });
    this.dataService.getQuestionPaperByTestId(this.testId).subscribe(resp => {
      this.questionPaper = resp[0];
      this.zoom = this.segment === 'question-papers' ? 1 : this.zoom;
      this.cd.detectChanges();
    });
    this.dataService.getStudentById(localStorage.getItem('student_id') || '').subscribe(resp => {
      this.student = resp;
      localStorage.setItem('student', JSON.stringify(this.student));
      this.cd.detectChanges();
    });
    this.dataService.getRemarksByTestId(this.testId, localStorage.getItem('student_id')).subscribe(response => {
      this.remarks = response[0];
      console.log(this.remarks);
      this.cd.detectChanges();
    });
    this.dataService.getValuedAnswerSheetByTestId(this.testId, localStorage.getItem('student_id')).subscribe(response => {
      this.valuedAnswerSheet = response[0];
      this.cd.detectChanges();
    });
  }

  ngOnInit() {}

  segmentChanged(event) {
    console.log(event); // this.segment = event?.detail?.value;
  }

  playAudio(url) {
    console.log(this.audio.canPlayType);
    this.audio = new Audio(url); // if(this.audio.canPlayType)
  }

  playVideo(file) {
    var _this = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('video file:::::::::', file);
      const modal = yield _this.modalController.create({
        component: src_app_video_player_video_player_page__WEBPACK_IMPORTED_MODULE_11__.VideoPlayerPage,
        componentProps: {
          file
        },
        cssClass: 'video-modal',
        backdropDismiss: false
      });
      modal.present();
    })();
  }

  download(file) {
    file_saver__WEBPACK_IMPORTED_MODULE_3__(file.file_url, file.name);
  }

  uploadAnswerSheet(event) {
    var _this2 = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedFile = event.target.files[0];
      const loading = yield _this2.loadingCtrl.create({
        message: 'Uploading Answer Sheet'
      });
      loading.present();

      try {
        const file = {
          file: selectedFile,
          name: _this2.courseId + '_G_' + _this2.testId + '_G_' + selectedFile.name,
          test_id: _this2.testId
        };
        const upload = yield _this2.storageService.uploadAnswer(file, `uploads/answer_sheets/${file.name}`);

        if (upload && upload.file_url) {
          const answerSheet = {
            file_url: upload.file_url,
            type: _this2.commonService.getExtension(selectedFile.name),
            name: selectedFile.name,
            test_id: _this2.testId,
            student_id: _this2.student.id,
            student_name: _this2.student.first_name + ' ' + _this2.student.last_name
          };

          if (_this2.commonService.isValidData(_this2.answerSheet?.id)) {
            answerSheet.id = _this2.answerSheet.id;
          }

          _this2.dataService.update(src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_12__.FirebaseCollections.ANSWER_SHEET, answerSheet).then(resp => {
            // console.log('resp::::::::::::\n', resp);
            const notification = {
              title: 'Answer sheet updated',
              description: _this2.student.first_name + ' ' + _this2.student.last_name + ' updated the answer sheet.',
              test_id: _this2.testId,
              studen_id: _this2.student.id,
              student_name: _this2.student.first_name + ' ' + _this2.student.last_name,
              status: 'unread'
            };

            _this2.dataService.add(src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_12__.FirebaseCollections.NOTIFICATIONS, notification).then(resp => {//
            }, err => {
              console.error('Error while adding notification:::::::::::\n', upload);
            });

            loading.dismiss();
          }, err => {
            loading.dismiss();
            console.error('Error while uploading answer sheet:::::::::::\n', { ...err
            });

            if (err.code === 'not-found' || err.code === 'invalid-argument') {
              _this2.dataService.add(src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_12__.FirebaseCollections.ANSWER_SHEET, answerSheet).then(resp => {
                // console.log(resp);
                const notification = {
                  title: 'Answer sheet uploaded',
                  description: _this2.student.first_name + ' ' + _this2.student.last_name + ' submitted the answer sheet.',
                  test_id: _this2.testId,
                  studen_id: _this2.student.id,
                  student_name: _this2.student.first_name + ' ' + _this2.student.last_name,
                  status: 'unread'
                };

                _this2.dataService.add(src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_12__.FirebaseCollections.NOTIFICATIONS, notification).then(resp => {//
                }, err => {
                  console.error('Error while adding notification:::::::::::\n', upload);
                });

                _this2.dataService.getAnswerSheetByTestId(_this2.testId).subscribe(response => {
                  _this2.answerSheet = response[0];
                });
              }, error => {
                console.error('Error while adding answer sheet:::::::::::\n', error);
              });
            }
          });
        } else {
          console.error('Error while uploading answer sheet:::::::::::\n', upload);
          loading.dismiss();
        }
      } catch (exception) {
        console.error('Exception while uploading answer sheet:::::::::::\n', exception, { ...exception
        });
        loading.dismiss();
      }
    })();
  }

  uploadReview(s, r) {// 
  }

  fileSelected(event) {
    var _this3 = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedFile = event.target.files[0];
      const loading = yield _this3.loadingCtrl.create({
        message: 'Uploading document'
      });
      loading.present();
      const file = {
        file: selectedFile,
        name: _this3.courseId + '_G_' + _this3.testId + '_G_' + selectedFile.name,
        test_id: _this3.testId
      };
      const upload = yield _this3.storageService.pushFileToStorage(file);

      if (upload && upload.file_url) {
        if (_this3.test.file_urls && _this3.test.file_urls.length > 0) {
          _this3.test.file_urls.push({
            file_url: upload.file_url,
            type: _this3.commonService.getExtension(selectedFile.name),
            name: selectedFile.name
          });
        } else {
          _this3.test.file_urls = [{
            file_url: upload.file_url,
            type: _this3.commonService.getExtension(selectedFile.name),
            name: selectedFile.name
          }];
        }

        yield _this3.dataService.updateTest(_this3.test);
        loading.dismiss();
      } else {
        console.error('Error while uploading file:::::::::::\n', upload);
        loading.dismiss();
      }
    })();
  }

  downloadQuestionPaper() {
    var _this4 = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this4.loadingCtrl.create({
        message: 'Downloading question paper'
      });
      loading.present();

      if (!_this4.platform.is('android') || !_this4.platform.is('ios') || !_this4.platform.is('iphone') || !_this4.platform.is('cordova')) {
        try {
          _this4.download(_this4.questionPaper);

          loading.dismiss();
        } catch (e) {
          console.error('Error while downloading the question paper:::::::::::::\n', e);
          loading.dismiss();
        } // this.http.get(this.questionPaper.file_url, { responseType: 'blob' }).subscribe((res: any) => {
        //   console.log('res:::::::::::\n', res);
        //   const a = document.createElement('a');
        //   a.href = URL.createObjectURL(res.blob());
        //   a.download = this.questionPaper.name;
        //   // start download
        //   a.click();
        //   loading.dismiss();
        // }, err => {
        //   console.error('Error while downloading the question paper:::::::::::::\n', err);
        //   loading.dismiss();
        // });

      } else {
        const request = {
          uri: _this4.questionPaper.file_url,
          title: _this4.questionPaper.name,
          description: '',
          mimeType: '',
          visibleInDownloadsUi: true,
          notificationVisibility: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_9__.NotificationVisibility.VisibleNotifyCompleted,
          destinationInExternalFilesDir: {
            dirType: 'Download',
            subPath: _this4.questionPaper.name
          }
        };

        _this4.downloader.download(request).then(location => {
          console.log('File downloaded at::::::::\n' + location);
          loading.dismiss();
        }, error => {
          loading.dismiss();
          console.error('Error while downloading pdf:::::::', error);
        });
      }
    })();
  }

  downloadValuesAnswerSheet() {
    var _this5 = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this5.loadingCtrl.create({
        message: 'Downloading question paper'
      });
      loading.present();

      if (!_this5.platform.is('android') || !_this5.platform.is('ios') || !_this5.platform.is('iphone') || !_this5.platform.is('cordova')) {
        try {
          _this5.download(_this5.valuedAnswerSheet);

          loading.dismiss();
        } catch (e) {
          console.error('Error while downloading the question paper:::::::::::::\n', e);
          loading.dismiss();
        }
      } else {
        const request = {
          uri: _this5.valuedAnswerSheet.file_url,
          title: _this5.valuedAnswerSheet.name,
          description: '',
          mimeType: '',
          visibleInDownloadsUi: true,
          notificationVisibility: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_9__.NotificationVisibility.VisibleNotifyCompleted,
          destinationInExternalFilesDir: {
            dirType: 'Download',
            subPath: _this5.valuedAnswerSheet.name
          }
        };

        _this5.downloader.download(request).then(location => {
          console.log('File downloaded at:' + location);
          loading.dismiss();
        }, error => {
          console.error('Error while downloading pdf:::::::', error);
          loading.dismiss();
        });
      }
    })();
  }

  saveFile(base64) {
    _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_8__.Filesystem.writeFile({
      path: 'name',
      data: base64,
      directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_8__.Directory.Documents
    }).then(resp => {
      this.commonService.presentToast('' + ' downloaded.');
    }, err => {
      console.error('Error while saving the file:::::::\n', err);
    });
  }

  pageRendered(event) {// console.log('event::::::::::::::::::::\n', event);
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

  downloadPdf() {
    const request = {
      uri: this.schedule.file_url,
      title: this.schedule.name,
      description: '',
      mimeType: '',
      visibleInDownloadsUi: true,
      notificationVisibility: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_9__.NotificationVisibility.VisibleNotifyCompleted,
      destinationInExternalFilesDir: {
        dirType: 'Download',
        subPath: this.schedule.name
      }
    };
    this.downloader.download(request).then(location => {
      console.log('File downloaded at:' + location);
    }, error => {
      console.error('Error while downloading pdf:::::::', error);
    }); // this.platform.ready().then(() => {
    //   const fileTransfer: FileTransferObject = this.transfer.create();
    //   fileTransfer.download(this.schedule.file_url, this.file.dataDirectory + this.schedule.name).then((entry) => {
    //     console.log('download complete: ' + entry.toURL());
    //   }, (error) => {
    //     console.log("error:::::::", error)
    //   });
    // });
  }

};

PurchasedTestPage.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient
}, {
  type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService
}, {
  type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_6__.StateService
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.LoadingController
}, {
  type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService
}, {
  type: _awesome_cordova_plugins_video_player_ngx__WEBPACK_IMPORTED_MODULE_10__.VideoPlayer
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController
}, {
  type: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_9__.Downloader
}];

PurchasedTestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-purchased-test',
  template: _purchased_test_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_purchased_test_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PurchasedTestPage);


/***/ }),

/***/ 4307:
/*!*************************************************************!*\
  !*** ./src/app/video-player/video-player-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPlayerPageRoutingModule": () => (/* binding */ VideoPlayerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _video_player_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-player.page */ 3297);




const routes = [
    {
        path: '',
        component: _video_player_page__WEBPACK_IMPORTED_MODULE_0__.VideoPlayerPage
    }
];
let VideoPlayerPageRoutingModule = class VideoPlayerPageRoutingModule {
};
VideoPlayerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VideoPlayerPageRoutingModule);



/***/ }),

/***/ 6504:
/*!*****************************************************!*\
  !*** ./src/app/video-player/video-player.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPlayerPageModule": () => (/* binding */ VideoPlayerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _video_player_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-player-routing.module */ 4307);
/* harmony import */ var _video_player_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-player.page */ 3297);







let VideoPlayerPageModule = class VideoPlayerPageModule {
};
VideoPlayerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _video_player_routing_module__WEBPACK_IMPORTED_MODULE_0__.VideoPlayerPageRoutingModule
        ],
        declarations: [_video_player_page__WEBPACK_IMPORTED_MODULE_1__.VideoPlayerPage],
        providers: []
    })
], VideoPlayerPageModule);



/***/ }),

/***/ 3297:
/*!***************************************************!*\
  !*** ./src/app/video-player/video-player.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPlayerPage": () => (/* binding */ VideoPlayerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _video_player_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-player.page.html?ngResource */ 5821);
/* harmony import */ var _video_player_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-player.page.scss?ngResource */ 9485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 1898);






let VideoPlayerPage = class VideoPlayerPage {
    constructor(viewCtrl, navParams, screenOrientation) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.screenOrientation = screenOrientation;
        this.file = null;
        this.file = this.navParams.get('file');
        console.log("file::::::::", this.file);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    dismiss() {
        this.viewCtrl.dismiss();
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
};
VideoPlayerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams },
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__.ScreenOrientation }
];
VideoPlayerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-video-player',
        template: _video_player_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_video_player_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VideoPlayerPage);



/***/ }),

/***/ 8819:
/*!**************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/video-player/__ivy_ngcc__/ngx/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPlayer": () => (/* binding */ VideoPlayer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 4624);





var VideoPlayer =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(VideoPlayer, _super);

  function VideoPlayer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  VideoPlayer.prototype.play = function (fileUrl, options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "play", {}, arguments);
  };

  VideoPlayer.prototype.close = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "close", {
      "sync": true
    }, arguments);
  };

  VideoPlayer.pluginName = "VideoPlayer";
  VideoPlayer.plugin = "https://github.com/moust/cordova-plugin-videoplayer.git";
  VideoPlayer.pluginRef = "VideoPlayer";
  VideoPlayer.repo = "https://github.com/moust/cordova-plugin-videoplayer";
  VideoPlayer.platforms = ["Android"];

  VideoPlayer.ɵfac = /*@__PURE__*/function () {
    var ɵVideoPlayer_BaseFactory;
    return function VideoPlayer_Factory(t) {
      return (ɵVideoPlayer_BaseFactory || (ɵVideoPlayer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](VideoPlayer)))(t || VideoPlayer);
    };
  }();

  VideoPlayer.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: VideoPlayer,
    factory: function (t) {
      return VideoPlayer.ɵfac(t);
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](VideoPlayer, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null);
  })();

  return VideoPlayer;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);



/***/ }),

/***/ 3568:
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* binding */ Directory),
/* harmony export */   "Encoding": () => (/* binding */ Encoding),
/* harmony export */   "FilesystemDirectory": () => (/* binding */ FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* binding */ FilesystemEncoding)
/* harmony export */ });
var Directory;

(function (Directory) {
  /**
   * The Documents directory
   * On iOS it's the app's documents directory.
   * Use this directory to store user-generated content.
   * On Android it's the Public Documents folder, so it's accessible from other apps.
   * It's not accesible on Android 10 unless the app enables legacy External Storage
   * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
   * in the `AndroidManifest.xml`.
   * It's not accesible on Android 11 or newer.
   *
   * @since 1.0.0
   */
  Directory["Documents"] = "DOCUMENTS";
  /**
   * The Data directory
   * On iOS it will use the Documents directory.
   * On Android it's the directory holding application files.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.0.0
   */

  Directory["Data"] = "DATA";
  /**
   * The Library directory
   * On iOS it will use the Library directory.
   * On Android it's the directory holding application files.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.1.0
   */

  Directory["Library"] = "LIBRARY";
  /**
   * The Cache directory
   * Can be deleted in cases of low memory, so use this directory to write app-specific files
   * that your app can re-create easily.
   *
   * @since 1.0.0
   */

  Directory["Cache"] = "CACHE";
  /**
   * The external directory
   * On iOS it will use the Documents directory
   * On Android it's the directory on the primary shared/external
   * storage device where the application can place persistent files it owns.
   * These files are internal to the applications, and not typically visible
   * to the user as media.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.0.0
   */

  Directory["External"] = "EXTERNAL";
  /**
   * The external storage directory
   * On iOS it will use the Documents directory
   * On Android it's the primary shared/external storage directory.
   * It's not accesible on Android 10 unless the app enables legacy External Storage
   * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
   * in the `AndroidManifest.xml`.
   * It's not accesible on Android 11 or newer.
   *
   * @since 1.0.0
   */

  Directory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(Directory || (Directory = {}));

var Encoding;

(function (Encoding) {
  /**
   * Eight-bit UCS Transformation Format
   *
   * @since 1.0.0
   */
  Encoding["UTF8"] = "utf8";
  /**
   * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
   * Unicode character set
   * This encoding is only supported on Android.
   *
   * @since 1.0.0
   */

  Encoding["ASCII"] = "ascii";
  /**
   * Sixteen-bit UCS Transformation Format, byte order identified by an
   * optional byte-order mark
   * This encoding is only supported on Android.
   *
   * @since 1.0.0
   */

  Encoding["UTF16"] = "utf16";
})(Encoding || (Encoding = {}));
/**
 * @deprecated Use `Directory`.
 * @since 1.0.0
 */


const FilesystemDirectory = Directory;
/**
 * @deprecated Use `Encoding`.
 * @since 1.0.0
 */

const FilesystemEncoding = Encoding;

/***/ }),

/***/ 1662:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory),
/* harmony export */   "Encoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding),
/* harmony export */   "Filesystem": () => (/* binding */ Filesystem),
/* harmony export */   "FilesystemDirectory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 3568);

const Filesystem = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4046)).then(m => new m.FilesystemWeb())
});



/***/ }),

/***/ 4363:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firstValueFrom": () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 4423);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 9904);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ }),

/***/ 4437:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isObservable.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isObservable": () => (/* binding */ isObservable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 833);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction */ 2971);


function isObservable(obj) {
  return !!obj && (obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable || (0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(obj.lift) && (0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(obj.subscribe));
}

/***/ }),

/***/ 1248:
/*!**************************************************************************!*\
  !*** ./src/app/pages/purchased-test/purchased-test.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "#fileInput,\n#uploadReview {\n  position: absolute;\n  opacity: 0;\n}\n\nion-avatar {\n  background: var(--ion-color-light);\n}\n\n.zoom-btns {\n  bottom: 20px;\n  right: 20px;\n  z-index: 99;\n  background: var(--ion-color-light);\n}\n\n.file .file-type {\n  height: 120px;\n  background-color: var(--ion-color-light);\n}\n\n.file .file-type img {\n  width: 100%;\n  height: 120px;\n}\n\n.file .file-type ion-icon {\n  font-size: 42px;\n}\n\n.file .file-name {\n  padding: 8px;\n  background-color: var(--ion-color-white);\n  position: relative;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlZC10ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGtDQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUdJO0VBQ0ksYUFBQTtFQUNBLHdDQUFBO0FBQVI7O0FBRVE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUFaOztBQUdRO0VBQ0ksZUFBQTtBQURaOztBQUtJO0VBQ0ksWUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBSFIiLCJmaWxlIjoicHVyY2hhc2VkLXRlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZpbGVJbnB1dCxcbiN1cGxvYWRSZXZpZXcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4uem9vbS1idG5zIHtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgei1pbmRleDogOTk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLmZpbGUge1xuICAgIC5maWxlLXR5cGUge1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZmlsZS1uYW1lIHtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDk7XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 9485:
/*!****************************************************************!*\
  !*** ./src/app/video-player/video-player.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlby1wbGF5ZXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2507:
/*!**************************************************************************!*\
  !*** ./src/app/pages/purchased-test/purchased-test.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"purchased-tests\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{test?.title || 'Test'}}</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"white\">\n    <ion-segment color=\"medium\" mode=\"md\" [(ngModel)]=\"segment\" scrollable>\n\n      <!-- <ion-segment-button value=\"schedule\">\n        <ion-label>Schedule</ion-label>\n      </ion-segment-button> -->\n\n      <ion-segment-button value=\"question-papers\">\n        <ion-label>Question Papers</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"summary-of-concepts\">\n        <ion-label>Summary of Concepts</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"test-results\">\n        <ion-label>Test Results</ion-label>\n      </ion-segment-button>\n\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"white\">\n  <div *ngIf=\"segment === 'schedule'\" class=\"w-100 h-100 position-relative\">\n    <ion-toolbar color=\"light\">\n      <ion-title class=\"size-14 fw-bold m-0 p-3 ion-border\">\n        {{schedule?.name || 'Schedule Name'}}\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"downloadPdf()\">\n          <ion-icon name=\"download-outline\" slot=\"icon-only\" color=\"dark\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n\n    <pdf-viewer [src]=\"schedule?.file_url\" (page)=\"0\" [zoom]=\"zoom\" (page-rendered)=\"pageRendered($event)\"\n      class=\"d-block w-100\" [render-text]=\"true\" [original-size]=\"false\"\n      style=\"height: calc(100% - 53px); background: var(--ion-color-medium);\">\n    </pdf-viewer>\n\n    <ion-buttons class=\"position-absolute zoom-btns rounded-pill shadow\"\n      *ngIf=\"schedule !== undefined && schedule !== null\">\n      <ion-button (click)=\"zoomIn()\">\n        <ion-icon slot=\"icon-only\" color=\"dark\" class=\"size-48\" name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"zoomOut()\">\n        <ion-icon slot=\"icon-only\" color=\"dark\" class=\"size-48\" name=\"remove-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n  <div *ngIf=\"segment === 'question-papers'\" class=\"w-100 h-100 p-3\">\n    <ion-row>\n      <ion-col size=\"6\" size-lg=\"4\" size-xl=\"3\">\n        <ion-card class=\"p-3 m-0 h-100 ion-activatable\" mode=\"ios\" (click)=\"downloadQuestionPaper()\">\n          <ion-ripple-effect></ion-ripple-effect>\n          <ion-icon class=\"size-32\" color=\"tertiary\" name=\"cloud-download-outline\"></ion-icon>\n          <p class=\"size-16 fw-medium m-0 mt-3\">Download Question Paper</p>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\" size-lg=\"4\" size-xl=\"3\">\n        <ion-card class=\"p-3 m-0 h-100 ion-activatable\" mode=\"ios\" for=\"fileInput\" (click)=\"f.click()\">\n          <ion-ripple-effect></ion-ripple-effect>\n          <ion-icon class=\"size-32\" color=\"tertiary\" name=\"cloud-upload-outline\"></ion-icon>\n          <p class=\"size-16 fw-medium m-0 mt-3\">Upload Answer sheet</p>\n        </ion-card>\n        <input type=\"file\" #f id=\"fileInput\" (change)=\"uploadAnswerSheet($event)\" />\n      </ion-col>\n      <ion-col size=\"6\" size-lg=\"4\" size-xl=\"3\">\n        <ion-card class=\"p-3 m-0 h-100 ion-activatable\" mode=\"ios\" (click)=\"downloadValuesAnswerSheet()\">\n          <ion-ripple-effect></ion-ripple-effect>\n          <ion-icon class=\"size-32\" color=\"tertiary\" name=\"cloud-download-outline\"></ion-icon>\n          <p class=\"size-16 fw-medium m-0 mt-3\">Download Valued Answer sheet</p>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-card mode=\"ios\" class=\"m-0 mt-3 p-3\">\n          <ion-card-header class=\"size-16 fw-bold\">\n            Marks\n          </ion-card-header>\n          <ion-grid class=\"ion-no-padding\">\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\">\n                <ion-text color=\"dark\">\n                  <p class=\"m-0 fw-bold size-14\">Objectivce Part</p>\n                </ion-text>\n                <p>{{remarks?.objectivce_part || 'Not Available'}}</p>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-text color=\"dark\">\n                  <p class=\"m-0 fw-bold size-14\">Descriptive Part</p>\n                </ion-text>\n                <p>{{remarks?.description_part || 'Not Available'}}</p>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-text color=\"dark\">\n                  <p class=\"m-0 fw-bold size-14\">Weightage Marks</p>\n                </ion-text>\n                <p>{{remarks?.weightage_marks || 'Not Available'}}</p>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-text color=\"dark\">\n                  <p class=\"m-0 fw-bold size-14\">Predicted Marks</p>\n                </ion-text>\n                <p>{{remarks?.predicted_marks || 'Not Available'}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-card mode=\"ios\" class=\"m-0 mt-3\">\n          <ion-card-header class=\"size-16 fw-bold\">\n            Evaluator's Remarks\n          </ion-card-header>\n          <ion-card-content>\n            <div [innerHTML]=\"remarks?.remarks\"></div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <!-- <p class=\"size-14 fw-bold m-0 p-3 ion-border\" style=\"background: var(--ion-color-light);\">\n      {{questionPaper?.name || 'Question Paper'}}\n    </p>\n    <pdf-viewer [src]=\"questionPaper?.file_url\" (page)=\"0\" [zoom]=\"zoom\" (page-rendered)=\"pageRendered($event)\"\n      class=\"d-block w-100\" [render-text]=\"true\" [original-size]=\"false\"\n      style=\"height: calc(100% - 53px); background: var(--ion-color-medium);\">\n    </pdf-viewer>\n\n    <ion-buttons class=\"position-absolute zoom-btns rounded-pill shadow\"\n      *ngIf=\"questionPaper !== undefined && questionPaper !== null\">\n      <ion-button (click)=\"zoomIn()\">\n        <ion-icon slot=\"icon-only\" color=\"dark\" class=\"size-48\" name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"zoomOut()\">\n        <ion-icon slot=\"icon-only\" color=\"dark\" class=\"size-48\" name=\"remove-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </div>\n\n\n  <div *ngIf=\"segment === 'summary-of-concepts'\">\n    <ion-list lines=\"none\" color=\"white\">\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"6\" size-lg=\"4\" size-xl=\"3\" *ngFor=\"let file of test?.file_urls\" class=\"ion-margin-bottom\">\n          <ion-card class=\"h-100 ion-no-margin file\" color=\"white\" (click)=\"playVideo(file)\">\n            <div class=\"file-type d-grid-center\">\n              <ion-icon color=\"medium\" name=\"film-outline\"></ion-icon>\n            </div>\n            <div class=\"file-name\">\n              <ion-text>\n                {{file.name}}\n              </ion-text>\n            </div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </div>\n\n\n  <div *ngIf=\"segment === 'answers'\">\n    <ion-list>\n      <ion-item-sliding>\n        <ion-item color=\"white\" *ngFor=\"let file of test?.answers; let i = index\">\n          <ion-avatar slot=\"start\" color=\"medium\" class=\"d-grid-center\">\n            <img *ngIf=\"file.type === 'image'\" [src]=\"file.file_url\" load=\"lazy\" />\n            <ion-icon *ngIf=\"file.type === 'audio'\" color=\"medium\" name=\"play-circle-outline\"></ion-icon>\n            <ion-icon *ngIf=\"file.type === 'video'\" color=\"medium\" name=\"film-outline\"></ion-icon>\n            <ion-icon *ngIf=\"file.type === 'pdf'\" color=\"medium\" name=\"document-text-outline\"></ion-icon>\n            <ion-icon *ngIf=\"file.type === 'txt'\" color=\"medium\" name=\"document-text-outline\"></ion-icon>\n            <ion-icon *ngIf=\"file.type === 'docx'\" color=\"medium\" name=\"document-text-outline\"></ion-icon>\n            <ion-icon *ngIf=\"file.type === 'xd'\" color=\"medium\" name=\"document-text-outline\"></ion-icon>\n            <ion-icon *ngIf=\"file.type === 'xlsx'\" color=\"medium\" name=\"document-text-outline\"></ion-icon>\n            <ion-icon *ngIf=\"file.type === 'ppt'\" color=\"medium\" name=\"document-text-outline\"></ion-icon>\n            <ion-icon *ngIf=\"file.type === 'archive'\" color=\"medium\" name=\"document-text-outline\"></ion-icon>\n          </ion-avatar>\n          <ion-label class=\"ion-text-wrap\">\n            <h2>\n              {{file.student_name}}\n            </h2>\n            <p>{{file.name}}</p>\n            <!-- <input type=\"file\" id=\"uploadReview\" (change)=\"uploadReview($event, file)\" /> -->\n\n\n            <input type=\"file\" #f id=\"uploadReview\" (change)=\"uploadReview($event, file)\" />\n            <ion-button for=\"uploadReview\" class=\"ion-no-margin\" (click)=\"download(file)\">\n              Download Answer\n            </ion-button>\n            <ion-button for=\"uploadReview\" class=\"ion-no-margin\" (click)=\"f.click()\">\n              Upload Review\n            </ion-button>\n          </ion-label>\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option>\n            <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n      <!-- <ion-row class=\"ion-margin-top\">\n          <ion-col size=\"6\" size-lg=\"4\" size-xl=\"3\" *ngFor=\"let file of test?.answers\" class=\"ion-margin-bottom\">\n            <ion-card class=\"h-100 ion-no-margin file\" color=\"white\" (click)=\"download(file)\">\n              <div class=\"file-type d-grid-center\">\n                <img *ngIf=\"file.type === 'image'\" [src]=\"file.file_url\" load=\"lazy\" />\n                <div *ngIf=\"file.type === 'audio'\">\n                  <ion-icon color=\"medium\" name=\"play-circle-outline\"></ion-icon>\n                  <ion-icon color=\"medium\" name=\"pause-circle-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'video'\">\n                  <ion-icon color=\"medium\" name=\"film-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'pdf'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'txt'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'docx'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'xd'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'xlsx'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'ppt'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n                <div *ngIf=\"file.type === 'archive'\">\n                  <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n                </div>\n              </div>\n              <div class=\"file-name\">\n                <ion-text>\n                  {{file.name}}\n                </ion-text>\n              </div>\n            </ion-card>\n          </ion-col>\n        </ion-row> -->\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"segment === 'test-results'\">\n    <ion-list lines=\"none\" color=\"white\">\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"6\" size-lg=\"4\" size-xl=\"3\" *ngFor=\"let file of test?.reviews\" class=\"ion-margin-bottom\">\n          <ion-card class=\"h-100 ion-no-margin file\" color=\"white\" (click)=\"download(file)\">\n            <div class=\"file-type d-grid-center\">\n              <img *ngIf=\"file.type === 'image'\" [src]=\"file.file_url\" load=\"lazy\" />\n              <div *ngIf=\"file.type === 'audio'\">\n                <ion-icon color=\"medium\" name=\"play-circle-outline\"></ion-icon>\n                <ion-icon color=\"medium\" name=\"pause-circle-outline\"></ion-icon>\n              </div>\n              <div *ngIf=\"file.type === 'video'\">\n                <ion-icon color=\"medium\" name=\"film-outline\"></ion-icon>\n              </div>\n              <div *ngIf=\"file.type === 'pdf'\">\n                <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n              </div>\n              <div *ngIf=\"file.type === 'txt'\">\n                <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n              </div>\n              <div *ngIf=\"file.type === 'docx'\">\n                <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n              </div>\n              <div *ngIf=\"file.type === 'xd'\">\n                <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n              </div>\n              <div *ngIf=\"file.type === 'xlsx'\">\n                <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n              </div>\n              <div *ngIf=\"file.type === 'ppt'\">\n                <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n              </div>\n              <div *ngIf=\"file.type === 'archive'\">\n                <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n              </div>\n            </div>\n            <div class=\"file-name\">\n              <ion-text>\n                {{file.name}}\n              </ion-text>\n            </div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer *ngIf=\"segment === 'review-comments'\">\n  <ion-toolbar color=\"white\">\n    <input type=\"file\" #f id=\"fileInput\" (change)=\"fileSelected($event)\" />\n    <ion-button for=\"fileInput\" expand=\"full\" class=\"ion-no-margin\" size=\"large\" (click)=\"f.click()\">\n      <span style=\"font-size: 14px\">Upload Review</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";

/***/ }),

/***/ 5821:
/*!****************************************************************!*\
  !*** ./src/app/video-player/video-player.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content color=\"dark\">\n  <ion-header class=\"dark\">\n    <ion-toolbar class=\"dark\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismiss()\">\n          <ion-icon name=\"close\" slot=\"icon-only\" color=\"white\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title class=\"size-12\">{{file.name || 'Video'}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"h-100 w-100\">\n    <video controls autoplay class=\"h-100 w-100\">\n      <source [src]=\"file.file_url\" type=\"video/mp4\">\n    </video>\n  </div>\n</ion-content>";

/***/ }),

/***/ 3115:
/*!*******************************************************!*\
  !*** ./node_modules/ngx-quill/fesm2020/ngx-quill.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QUILL_CONFIG_TOKEN": () => (/* reexport safe */ ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.QUILL_CONFIG_TOKEN),
/* harmony export */   "QuillConfigModule": () => (/* reexport safe */ ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.QuillConfigModule),
/* harmony export */   "QuillEditorBase": () => (/* binding */ QuillEditorBase),
/* harmony export */   "QuillEditorComponent": () => (/* binding */ QuillEditorComponent),
/* harmony export */   "QuillModule": () => (/* binding */ QuillModule),
/* harmony export */   "QuillService": () => (/* binding */ QuillService),
/* harmony export */   "QuillViewComponent": () => (/* binding */ QuillViewComponent),
/* harmony export */   "QuillViewHTMLComponent": () => (/* binding */ QuillViewHTMLComponent),
/* harmony export */   "defaultModules": () => (/* reexport safe */ ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.defaultModules)
/* harmony export */ });
/* harmony import */ var _Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-quill/config */ 4419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1954);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4437);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9196);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);













function QuillEditorComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 2);
  }
}

function QuillEditorComponent_ng_container_0_pre_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pre", 2);
  }
}

function QuillEditorComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QuillEditorComponent_ng_container_0_div_1_Template, 1, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QuillEditorComponent_ng_container_0_pre_2_Template, 1, 0, "pre", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.preserve);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.preserve);
  }
}

function QuillEditorComponent_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 2);
  }
}

function QuillEditorComponent_ng_container_2_pre_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pre", 2);
  }
}

function QuillEditorComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QuillEditorComponent_ng_container_2_div_1_Template, 1, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QuillEditorComponent_ng_container_2_pre_2_Template, 1, 0, "pre", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.preserve);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.preserve);
  }
}

const _c0 = [[["", "quill-editor-toolbar", ""]]];
const _c1 = ["[quill-editor-toolbar]"];

function QuillViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 1);
  }
}

function QuillViewComponent_pre_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pre", 1);
  }
}

const getFormat = (format, configFormat) => {
  const passedFormat = format || configFormat;
  return passedFormat || 'html';
};

class QuillService {
  constructor(injector, config) {
    var _this = this;

    this.config = config;
    this.quill$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.defer)( /*#__PURE__*/(0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.Quill) {
        // Quill adds events listeners on import https://github.com/quilljs/quill/blob/develop/core/emitter.js#L8
        // We'd want to use the unpatched `addEventListener` method to have all event callbacks to be run outside of zone.
        // We don't know yet if the `zone.js` is used or not, just save the value to restore it back further.
        const maybePatchedAddEventListener = _this.document.addEventListener; // There're 2 types of Angular applications:
        // 1) zone-full (by default)
        // 2) zone-less
        // The developer can avoid importing the `zone.js` package and tells Angular that he/she is responsible for running
        // the change detection by himself. This is done by "nooping" the zone through `CompilerOptions` when bootstrapping
        // the root module. We fallback to `document.addEventListener` if `__zone_symbol__addEventListener` is not defined,
        // this means the `zone.js` is not imported.
        // The `__zone_symbol__addEventListener` is basically a native DOM API, which is not patched by zone.js, thus not even going
        // through the `zone.js` task lifecycle. You can also access the native DOM API as follows `target[Zone.__symbol__('methodName')]`.
        // eslint-disable-next-line @typescript-eslint/dot-notation

        _this.document.addEventListener = _this.document['__zone_symbol__addEventListener'] || _this.document.addEventListener;
        const quillImport = yield __webpack_require__.e(/*! import() */ "node_modules_quill_dist_quill_js").then(__webpack_require__.t.bind(__webpack_require__, /*! quill */ 3786, 19));
        _this.document.addEventListener = maybePatchedAddEventListener;
        _this.Quill = quillImport.default ? quillImport.default : quillImport;
      } // Only register custom options and modules once


      _this.config.customOptions?.forEach(customOption => {
        const newCustomOption = _this.Quill.import(customOption.import);

        newCustomOption.whitelist = customOption.whitelist;

        _this.Quill.register(newCustomOption, true, _this.config.suppressGlobalRegisterWarning);
      });
      return yield _this.registerCustomModules(_this.Quill, _this.config.customModules, _this.config.suppressGlobalRegisterWarning);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    this.document = injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT);

    if (!this.config) {
      this.config = {
        modules: ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.defaultModules
      };
    }
  }

  getQuill() {
    return this.quill$;
  }
  /**
   * Marked as internal so it won't be available for `ngx-quill` consumers, this is only
   * internal method to be used within the library.
   *
   * @internal
   */


  registerCustomModules(Quill, customModules, suppressGlobalRegisterWarning) {
    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (Array.isArray(customModules)) {
        // eslint-disable-next-line prefer-const
        for (let {
          implementation,
          path
        } of customModules) {
          // The `implementation` might be an observable that resolves the actual implementation,
          // e.g. if it should be lazy loaded.
          if ((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.isObservable)(implementation)) {
            implementation = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(implementation);
          }

          Quill.register(path, implementation, suppressGlobalRegisterWarning);
        }
      } // Return `Quill` constructor so we'll be able to re-use its return value except of using
      // `map` operators, etc.


      return Quill;
    })();
  }

}

QuillService.ɵfac = function QuillService_Factory(t) {
  return new (t || QuillService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.QUILL_CONFIG_TOKEN, 8));
};

QuillService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: QuillService,
  factory: QuillService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.QUILL_CONFIG_TOKEN]
      }]
    }];
  }, null);
})(); // eslint-disable-next-line @angular-eslint/directive-class-suffix


class QuillEditorBase {
  constructor(injector, elementRef, cd, domSanitizer, platformId, renderer, zone, service) {
    this.elementRef = elementRef;
    this.cd = cd;
    this.domSanitizer = domSanitizer;
    this.platformId = platformId;
    this.renderer = renderer;
    this.zone = zone;
    this.service = service;
    this.required = false;
    this.customToolbarPosition = 'top';
    this.styles = null;
    this.strict = true;
    this.customOptions = [];
    this.customModules = [];
    this.preserveWhitespace = false;
    this.trimOnValidation = false;
    this.compareValues = false;
    this.filterNull = false;
    /*
    https://github.com/KillerCodeMonkey/ngx-quill/issues/1257 - fix null value set
           provide default empty value
    by default null
           e.g. defaultEmptyValue="" - empty string
           <quill-editor
      defaultEmptyValue=""
      formControlName="message"
    ></quill-editor>
    */

    this.defaultEmptyValue = null;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onEditorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onContentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.disabled = false; // used to store initial value before ViewInit

    this.preserve = false;
    this.toolbarPosition = 'top';
    this.subscription = null;
    this.quillSubscription = null;

    this.valueGetter = (quillEditor, editorElement) => {
      let html = editorElement.querySelector('.ql-editor').innerHTML;

      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = this.defaultEmptyValue;
      }

      let modelValue = html;
      const format = getFormat(this.format, this.service.config.format);

      if (format === 'text') {
        modelValue = quillEditor.getText();
      } else if (format === 'object') {
        modelValue = quillEditor.getContents();
      } else if (format === 'json') {
        try {
          modelValue = JSON.stringify(quillEditor.getContents());
        } catch (e) {
          modelValue = quillEditor.getText();
        }
      }

      return modelValue;
    };

    this.valueSetter = (quillEditor, value) => {
      const format = getFormat(this.format, this.service.config.format);

      if (format === 'html') {
        const sanitize = [true, false].includes(this.sanitize) ? this.sanitize : this.service.config.sanitize || false;

        if (sanitize) {
          value = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.HTML, value);
        }

        return quillEditor.clipboard.convert(value);
      } else if (format === 'json') {
        try {
          return JSON.parse(value);
        } catch (e) {
          return [{
            insert: value
          }];
        }
      }

      return value;
    };

    this.selectionChangeHandler = (range, oldRange, source) => {
      const shouldTriggerOnModelTouched = !range && !!this.onModelTouched; // only emit changes when there's any listener

      if (!this.onBlur.observed && !this.onFocus.observed && !this.onSelectionChanged.observed && !shouldTriggerOnModelTouched) {
        return;
      }

      this.zone.run(() => {
        if (range === null) {
          this.onBlur.emit({
            editor: this.quillEditor,
            source
          });
        } else if (oldRange === null) {
          this.onFocus.emit({
            editor: this.quillEditor,
            source
          });
        }

        this.onSelectionChanged.emit({
          editor: this.quillEditor,
          oldRange,
          range,
          source
        });

        if (shouldTriggerOnModelTouched) {
          this.onModelTouched();
        }

        this.cd.markForCheck();
      });
    };

    this.textChangeHandler = (delta, oldDelta, source) => {
      // only emit changes emitted by user interactions
      const text = this.quillEditor.getText();
      const content = this.quillEditor.getContents();
      let html = this.editorElem.querySelector('.ql-editor').innerHTML;

      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = this.defaultEmptyValue;
      }

      const trackChanges = this.trackChanges || this.service.config.trackChanges;
      const shouldTriggerOnModelChange = (source === 'user' || trackChanges && trackChanges === 'all') && !!this.onModelChange; // only emit changes when there's any listener

      if (!this.onContentChanged.observed && !shouldTriggerOnModelChange) {
        return;
      }

      this.zone.run(() => {
        if (shouldTriggerOnModelChange) {
          this.onModelChange(this.valueGetter(this.quillEditor, this.editorElem));
        }

        this.onContentChanged.emit({
          content,
          delta,
          editor: this.quillEditor,
          html,
          oldDelta,
          source,
          text
        });
        this.cd.markForCheck();
      });
    }; // eslint-disable-next-line max-len


    this.editorChangeHandler = (event, current, old, source) => {
      // only emit changes when there's any listener
      if (!this.onEditorChanged.observed) {
        return;
      } // only emit changes emitted by user interactions


      if (event === 'text-change') {
        const text = this.quillEditor.getText();
        const content = this.quillEditor.getContents();
        let html = this.editorElem.querySelector('.ql-editor').innerHTML;

        if (html === '<p><br></p>' || html === '<div><br></div>') {
          html = this.defaultEmptyValue;
        }

        this.zone.run(() => {
          this.onEditorChanged.emit({
            content,
            delta: current,
            editor: this.quillEditor,
            event,
            html,
            oldDelta: old,
            source,
            text
          });
          this.cd.markForCheck();
        });
      } else {
        this.zone.run(() => {
          this.onEditorChanged.emit({
            editor: this.quillEditor,
            event,
            oldRange: old,
            range: current,
            source
          });
          this.cd.markForCheck();
        });
      }
    };

    this.document = injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT);
  }

  static normalizeClassNames(classes) {
    const classList = classes.trim().split(' ');
    return classList.reduce((prev, cur) => {
      const trimmed = cur.trim();

      if (trimmed) {
        prev.push(trimmed);
      }

      return prev;
    }, []);
  }

  ngOnInit() {
    this.preserve = this.preserveWhitespace;
    this.toolbarPosition = this.customToolbarPosition;
  }

  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformServer)(this.platformId)) {
      return;
    } // The `quill-editor` component might be destroyed before the `quill` chunk is loaded and its code is executed
    // this will lead to runtime exceptions, since the code will be executed on DOM nodes that don't exist within the tree.


    this.quillSubscription = this.service.getQuill().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(Quill => {
      const promises = [this.service.registerCustomModules(Quill, this.customModules)];
      const beforeRender = this.beforeRender ?? this.service.config.beforeRender;

      if (beforeRender) {
        promises.push(beforeRender());
      }

      return Promise.all(promises).then(() => Quill);
    })).subscribe(Quill => {
      this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
      const toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
      const modules = Object.assign({}, this.modules || this.service.config.modules);

      if (toolbarElem) {
        modules.toolbar = toolbarElem;
      } else if (modules.toolbar === undefined) {
        modules.toolbar = ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.defaultModules.toolbar;
      }

      let placeholder = this.placeholder !== undefined ? this.placeholder : this.service.config.placeholder;

      if (placeholder === undefined) {
        placeholder = 'Insert text here ...';
      }

      if (this.styles) {
        Object.keys(this.styles).forEach(key => {
          this.renderer.setStyle(this.editorElem, key, this.styles[key]);
        });
      }

      if (this.classes) {
        this.addClasses(this.classes);
      }

      this.customOptions.forEach(customOption => {
        const newCustomOption = Quill.import(customOption.import);
        newCustomOption.whitelist = customOption.whitelist;
        Quill.register(newCustomOption, true);
      });
      let bounds = this.bounds && this.bounds === 'self' ? this.editorElem : this.bounds;

      if (!bounds) {
        bounds = this.service.config.bounds ? this.service.config.bounds : this.document.body;
      }

      let debug = this.debug;

      if (!debug && debug !== false && this.service.config.debug) {
        debug = this.service.config.debug;
      }

      let readOnly = this.readOnly;

      if (!readOnly && this.readOnly !== false) {
        readOnly = this.service.config.readOnly !== undefined ? this.service.config.readOnly : false;
      }

      let defaultEmptyValue = this.defaultEmptyValue;

      if (this.service.config.hasOwnProperty('defaultEmptyValue')) {
        defaultEmptyValue = this.service.config.defaultEmptyValue;
      }

      let scrollingContainer = this.scrollingContainer;

      if (!scrollingContainer && this.scrollingContainer !== null) {
        scrollingContainer = this.service.config.scrollingContainer === null || this.service.config.scrollingContainer ? this.service.config.scrollingContainer : null;
      }

      let formats = this.formats;

      if (!formats && formats === undefined) {
        formats = this.service.config.formats ? [...this.service.config.formats] : this.service.config.formats === null ? null : undefined;
      }

      this.zone.runOutsideAngular(() => {
        this.quillEditor = new Quill(this.editorElem, {
          bounds,
          debug: debug,
          formats: formats,
          modules,
          placeholder,
          readOnly,
          defaultEmptyValue,
          scrollingContainer: scrollingContainer,
          strict: this.strict,
          theme: this.theme || (this.service.config.theme ? this.service.config.theme : 'snow')
        }); // Set optional link placeholder, Quill has no native API for it so using workaround

        if (this.linkPlaceholder) {
          const tooltip = this.quillEditor?.theme?.tooltip;
          const input = tooltip?.root?.querySelector('input[data-link]');

          if (input?.dataset) {
            input.dataset.link = this.linkPlaceholder;
          }
        }
      });

      if (this.content) {
        const format = getFormat(this.format, this.service.config.format);

        if (format === 'text') {
          this.quillEditor.setText(this.content, 'silent');
        } else {
          const newValue = this.valueSetter(this.quillEditor, this.content);
          this.quillEditor.setContents(newValue, 'silent');
        }

        this.quillEditor.getModule('history').clear();
      } // initialize disabled status based on this.disabled as default value


      this.setDisabledState();
      this.addQuillEventListeners(); // The `requestAnimationFrame` triggers change detection. There's no sense to invoke the `requestAnimationFrame` if anyone is
      // listening to the `onEditorCreated` event inside the template, for instance `<quill-view (onEditorCreated)="...">`.

      if (!this.onEditorCreated.observed && !this.onValidatorChanged) {
        return;
      } // The `requestAnimationFrame` will trigger change detection and `onEditorCreated` will also call `markDirty()`
      // internally, since Angular wraps template event listeners into `listener` instruction. We're using the `requestAnimationFrame`
      // to prevent the frame drop and avoid `ExpressionChangedAfterItHasBeenCheckedError` error.


      requestAnimationFrame(() => {
        if (this.onValidatorChanged) {
          this.onValidatorChanged();
        }

        this.onEditorCreated.emit(this.quillEditor);
      });
    });
  }

  ngOnDestroy() {
    this.dispose();
    this.quillSubscription?.unsubscribe();
    this.quillSubscription = null;
  }

  ngOnChanges(changes) {
    if (!this.quillEditor) {
      return;
    }
    /* eslint-disable @typescript-eslint/dot-notation */


    if (changes.readOnly) {
      this.quillEditor.enable(!changes.readOnly.currentValue);
    }

    if (changes.placeholder) {
      this.quillEditor.root.dataset.placeholder = changes.placeholder.currentValue;
    }

    if (changes.defaultEmptyValue) {
      this.quillEditor.root.dataset.defaultEmptyValue = changes.defaultEmptyValue.currentValue;
    }

    if (changes.styles) {
      const currentStyling = changes.styles.currentValue;
      const previousStyling = changes.styles.previousValue;

      if (previousStyling) {
        Object.keys(previousStyling).forEach(key => {
          this.renderer.removeStyle(this.editorElem, key);
        });
      }

      if (currentStyling) {
        Object.keys(currentStyling).forEach(key => {
          this.renderer.setStyle(this.editorElem, key, this.styles[key]);
        });
      }
    }

    if (changes.classes) {
      const currentClasses = changes.classes.currentValue;
      const previousClasses = changes.classes.previousValue;

      if (previousClasses) {
        this.removeClasses(previousClasses);
      }

      if (currentClasses) {
        this.addClasses(currentClasses);
      }
    } // We'd want to re-apply event listeners if the `debounceTime` binding changes to apply the
    // `debounceTime` operator or vice-versa remove it.


    if (changes.debounceTime) {
      this.addQuillEventListeners();
    }
    /* eslint-enable @typescript-eslint/dot-notation */

  }

  addClasses(classList) {
    QuillEditorBase.normalizeClassNames(classList).forEach(c => {
      this.renderer.addClass(this.editorElem, c);
    });
  }

  removeClasses(classList) {
    QuillEditorBase.normalizeClassNames(classList).forEach(c => {
      this.renderer.removeClass(this.editorElem, c);
    });
  }

  writeValue(currentValue) {
    // optional fix for https://github.com/angular/angular/issues/14988
    if (this.filterNull && currentValue === null) {
      return;
    }

    this.content = currentValue;

    if (!this.quillEditor) {
      return;
    }

    const format = getFormat(this.format, this.service.config.format);
    const newValue = this.valueSetter(this.quillEditor, currentValue);

    if (this.compareValues) {
      const currentEditorValue = this.quillEditor.getContents();

      if (JSON.stringify(currentEditorValue) === JSON.stringify(newValue)) {
        return;
      }
    }

    if (currentValue) {
      if (format === 'text') {
        this.quillEditor.setText(currentValue);
      } else {
        this.quillEditor.setContents(newValue);
      }

      return;
    }

    this.quillEditor.setText('');
  }

  setDisabledState(isDisabled = this.disabled) {
    // store initial value to set appropriate disabled status after ViewInit
    this.disabled = isDisabled;

    if (this.quillEditor) {
      if (isDisabled) {
        this.quillEditor.disable();
        this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
      } else {
        if (!this.readOnly) {
          this.quillEditor.enable();
        }

        this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
      }
    }
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }

  registerOnValidatorChange(fn) {
    this.onValidatorChanged = fn;
  }

  validate() {
    if (!this.quillEditor) {
      return null;
    }

    const err = {};
    let valid = true;
    const text = this.quillEditor.getText(); // trim text if wanted + handle special case that an empty editor contains a new line

    const textLength = this.trimOnValidation ? text.trim().length : text.length === 1 && text.trim().length === 0 ? 0 : text.length - 1;
    const deltaOperations = this.quillEditor.getContents().ops;
    const onlyEmptyOperation = deltaOperations && deltaOperations.length === 1 && ['\n', ''].includes(deltaOperations[0].insert);

    if (this.minLength && textLength && textLength < this.minLength) {
      err.minLengthError = {
        given: textLength,
        minLength: this.minLength
      };
      valid = false;
    }

    if (this.maxLength && textLength > this.maxLength) {
      err.maxLengthError = {
        given: textLength,
        maxLength: this.maxLength
      };
      valid = false;
    }

    if (this.required && !textLength && onlyEmptyOperation) {
      err.requiredError = {
        empty: true
      };
      valid = false;
    }

    return valid ? null : err;
  }

  addQuillEventListeners() {
    this.dispose(); // We have to enter the `<root>` zone when adding event listeners, so `debounceTime` will spawn the
    // `AsyncAction` there w/o triggering change detections. We still re-enter the Angular's zone through
    // `zone.run` when we emit an event to the parent component.

    this.zone.runOutsideAngular(() => {
      this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
      this.subscription.add( // mark model as touched if editor lost focus
      (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.fromEvent)(this.quillEditor, 'selection-change').subscribe(([range, oldRange, source]) => {
        this.selectionChangeHandler(range, oldRange, source);
      })); // The `fromEvent` supports passing JQuery-style event targets, the editor has `on` and `off` methods which
      // will be invoked upon subscription and teardown.

      let textChange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.fromEvent)(this.quillEditor, 'text-change');
      let editorChange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.fromEvent)(this.quillEditor, 'editor-change');

      if (typeof this.debounceTime === 'number') {
        textChange$ = textChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(this.debounceTime));
        editorChange$ = editorChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(this.debounceTime));
      }

      this.subscription.add( // update model if text changes
      textChange$.subscribe(([delta, oldDelta, source]) => {
        this.textChangeHandler(delta, oldDelta, source);
      }));
      this.subscription.add( // triggered if selection or text changed
      editorChange$.subscribe(([event, current, old, source]) => {
        this.editorChangeHandler(event, current, old, source);
      }));
    });
  }

  dispose() {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

}

QuillEditorBase.ɵfac = function QuillEditorBase_Factory(t) {
  return new (t || QuillEditorBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](QuillService));
};

QuillEditorBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: QuillEditorBase,
  inputs: {
    format: "format",
    theme: "theme",
    modules: "modules",
    debug: "debug",
    readOnly: "readOnly",
    placeholder: "placeholder",
    maxLength: "maxLength",
    minLength: "minLength",
    required: "required",
    formats: "formats",
    customToolbarPosition: "customToolbarPosition",
    sanitize: "sanitize",
    beforeRender: "beforeRender",
    styles: "styles",
    strict: "strict",
    scrollingContainer: "scrollingContainer",
    bounds: "bounds",
    customOptions: "customOptions",
    customModules: "customModules",
    trackChanges: "trackChanges",
    preserveWhitespace: "preserveWhitespace",
    classes: "classes",
    trimOnValidation: "trimOnValidation",
    linkPlaceholder: "linkPlaceholder",
    compareValues: "compareValues",
    filterNull: "filterNull",
    debounceTime: "debounceTime",
    defaultEmptyValue: "defaultEmptyValue",
    valueGetter: "valueGetter",
    valueSetter: "valueSetter"
  },
  outputs: {
    onEditorCreated: "onEditorCreated",
    onEditorChanged: "onEditorChanged",
    onContentChanged: "onContentChanged",
    onSelectionChanged: "onSelectionChanged",
    onFocus: "onFocus",
    onBlur: "onBlur"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillEditorBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: QuillService
    }];
  }, {
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    readOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    maxLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    minLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customToolbarPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    beforeRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    scrollingContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    trackChanges: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    classes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    trimOnValidation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    linkPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    compareValues: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    filterNull: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    debounceTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    defaultEmptyValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onEditorChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onContentChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onSelectionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    valueGetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    valueSetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

class QuillEditorComponent extends QuillEditorBase {
  constructor(injector, elementRef, cd, domSanitizer, platformId, renderer, zone, service) {
    super(injector, elementRef, cd, domSanitizer, platformId, renderer, zone, service);
  }

}

QuillEditorComponent.ɵfac = function QuillEditorComponent_Factory(t) {
  return new (t || QuillEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](QuillService));
};

QuillEditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: QuillEditorComponent,
  selectors: [["quill-editor"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => QuillEditorComponent)
  }, {
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALIDATORS,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => QuillEditorComponent)
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf"], ["quill-editor-element", "", 4, "ngIf"], ["quill-editor-element", ""]],
  template: function QuillEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QuillEditorComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QuillEditorComponent_ng_container_2_Template, 3, 2, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.toolbarPosition !== "top");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.toolbarPosition === "top");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  styles: [":host{display:inline-block}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      providers: [{
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => QuillEditorComponent)
      }, {
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALIDATORS,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => QuillEditorComponent)
      }],
      selector: 'quill-editor',
      template: `
  <ng-container *ngIf="toolbarPosition !== 'top'">
    <div quill-editor-element *ngIf="!preserve"></div>
    <pre quill-editor-element *ngIf="preserve"></pre>
  </ng-container>
  <ng-content select="[quill-editor-toolbar]"></ng-content>
  <ng-container *ngIf="toolbarPosition === 'top'">
    <div quill-editor-element *ngIf="!preserve"></div>
    <pre quill-editor-element *ngIf="preserve"></pre>
  </ng-container>
`,
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
      styles: [":host{display:inline-block}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef]
      }]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone]
      }]
    }, {
      type: QuillService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [QuillService]
      }]
    }];
  }, null);
})();

class QuillViewHTMLComponent {
  constructor(sanitizer, service) {
    this.sanitizer = sanitizer;
    this.service = service;
    this.content = '';
    this.innerHTML = '';
    this.themeClass = 'ql-snow';
  }

  ngOnChanges(changes) {
    if (changes.theme) {
      const theme = changes.theme.currentValue || (this.service.config.theme ? this.service.config.theme : 'snow');
      this.themeClass = `ql-${theme} ngx-quill-view-html`;
    } else if (!this.theme) {
      const theme = this.service.config.theme ? this.service.config.theme : 'snow';
      this.themeClass = `ql-${theme} ngx-quill-view-html`;
    }

    if (changes.content) {
      const content = changes.content.currentValue;
      const sanitize = [true, false].includes(this.sanitize) ? this.sanitize : this.service.config.sanitize || false;
      this.innerHTML = sanitize ? content : this.sanitizer.bypassSecurityTrustHtml(content);
    }
  }

}

QuillViewHTMLComponent.ɵfac = function QuillViewHTMLComponent_Factory(t) {
  return new (t || QuillViewHTMLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](QuillService));
};

QuillViewHTMLComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: QuillViewHTMLComponent,
  selectors: [["quill-view-html"]],
  inputs: {
    content: "content",
    theme: "theme",
    sanitize: "sanitize"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 2,
  consts: [[1, "ql-container", 3, "ngClass"], [1, "ql-editor", 3, "innerHTML"]],
  template: function QuillViewHTMLComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.themeClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.innerHTML, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass],
  styles: [".ql-container.ngx-quill-view-html{border:0}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillViewHTMLComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      selector: 'quill-view-html',
      template: `
  <div class="ql-container" [ngClass]="themeClass">
    <div class="ql-editor" [innerHTML]="innerHTML">
    </div>
  </div>
`,
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
      styles: [".ql-container.ngx-quill-view-html{border:0}\n"]
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer]
      }]
    }, {
      type: QuillService
    }];
  }, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

class QuillViewComponent {
  constructor(elementRef, renderer, zone, service, domSanitizer, platformId) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.zone = zone;
    this.service = service;
    this.domSanitizer = domSanitizer;
    this.platformId = platformId;
    this.strict = true;
    this.customModules = [];
    this.customOptions = [];
    this.preserveWhitespace = false;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.preserve = false;
    this.quillSubscription = null;

    this.valueSetter = (quillEditor, value) => {
      const format = getFormat(this.format, this.service.config.format);
      let content = value;

      if (format === 'text') {
        quillEditor.setText(content);
      } else {
        if (format === 'html') {
          const sanitize = [true, false].includes(this.sanitize) ? this.sanitize : this.service.config.sanitize || false;

          if (sanitize) {
            value = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.HTML, value);
          }

          content = quillEditor.clipboard.convert(value);
        } else if (format === 'json') {
          try {
            content = JSON.parse(value);
          } catch (e) {
            content = [{
              insert: value
            }];
          }
        }

        quillEditor.setContents(content);
      }
    };
  }

  ngOnInit() {
    this.preserve = this.preserveWhitespace;
  }

  ngOnChanges(changes) {
    if (!this.quillEditor) {
      return;
    }

    if (changes.content) {
      this.valueSetter(this.quillEditor, changes.content.currentValue);
    }
  }

  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformServer)(this.platformId)) {
      return;
    }

    this.quillSubscription = this.service.getQuill().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(Quill => {
      const promises = [this.service.registerCustomModules(Quill, this.customModules)];
      const beforeRender = this.beforeRender ?? this.service.config.beforeRender;

      if (beforeRender) {
        promises.push(beforeRender());
      }

      return Promise.all(promises).then(() => Quill);
    })).subscribe(Quill => {
      const modules = Object.assign({}, this.modules || this.service.config.modules);
      modules.toolbar = false;
      this.customOptions.forEach(customOption => {
        const newCustomOption = Quill.import(customOption.import);
        newCustomOption.whitelist = customOption.whitelist;
        Quill.register(newCustomOption, true);
      });
      let debug = this.debug;

      if (!debug && debug !== false && this.service.config.debug) {
        debug = this.service.config.debug;
      }

      let formats = this.formats;

      if (!formats && formats === undefined) {
        formats = this.service.config.formats ? Object.assign({}, this.service.config.formats) : this.service.config.formats === null ? null : undefined;
      }

      const theme = this.theme || (this.service.config.theme ? this.service.config.theme : 'snow');
      this.editorElem = this.elementRef.nativeElement.querySelector('[quill-view-element]');
      this.zone.runOutsideAngular(() => {
        this.quillEditor = new Quill(this.editorElem, {
          debug: debug,
          formats: formats,
          modules,
          readOnly: true,
          strict: this.strict,
          theme
        });
      });
      this.renderer.addClass(this.editorElem, 'ngx-quill-view');

      if (this.content) {
        this.valueSetter(this.quillEditor, this.content);
      } // The `requestAnimationFrame` triggers change detection. There's no sense to invoke the `requestAnimationFrame` if anyone is
      // listening to the `onEditorCreated` event inside the template, for instance `<quill-view (onEditorCreated)="...">`.


      if (!this.onEditorCreated.observers.length) {
        return;
      } // The `requestAnimationFrame` will trigger change detection and `onEditorCreated` will also call `markDirty()`
      // internally, since Angular wraps template event listeners into `listener` instruction. We're using the `requestAnimationFrame`
      // to prevent the frame drop and avoid `ExpressionChangedAfterItHasBeenCheckedError` error.


      requestAnimationFrame(() => {
        this.onEditorCreated.emit(this.quillEditor);
      });
    });
  }

  ngOnDestroy() {
    this.quillSubscription?.unsubscribe();
    this.quillSubscription = null;
  }

}

QuillViewComponent.ɵfac = function QuillViewComponent_Factory(t) {
  return new (t || QuillViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](QuillService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID));
};

QuillViewComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: QuillViewComponent,
  selectors: [["quill-view"]],
  inputs: {
    format: "format",
    theme: "theme",
    modules: "modules",
    debug: "debug",
    formats: "formats",
    sanitize: "sanitize",
    beforeRender: "beforeRender",
    strict: "strict",
    content: "content",
    customModules: "customModules",
    customOptions: "customOptions",
    preserveWhitespace: "preserveWhitespace"
  },
  outputs: {
    onEditorCreated: "onEditorCreated"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 2,
  consts: [["quill-view-element", "", 4, "ngIf"], ["quill-view-element", ""]],
  template: function QuillViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QuillViewComponent_div_0_Template, 1, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QuillViewComponent_pre_1_Template, 1, 0, "pre", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.preserve);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.preserve);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  styles: [".ql-container.ngx-quill-view{border:0}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      selector: 'quill-view',
      template: `
<div quill-view-element *ngIf="!preserve"></div>
<pre quill-view-element *ngIf="preserve"></pre>
`,
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
      styles: [".ql-container.ngx-quill-view{border:0}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: QuillService
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID]
      }]
    }];
  }, {
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    beforeRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();

class QuillModule {
  static forRoot(config) {
    return {
      ngModule: QuillModule,
      providers: [{
        provide: ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.QUILL_CONFIG_TOKEN,
        useValue: config
      }]
    };
  }

}

QuillModule.ɵfac = function QuillModule_Factory(t) {
  return new (t || QuillModule)();
};

QuillModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: QuillModule,
  imports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
  exports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent]
});
QuillModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      exports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent]
    }]
  }], null, null);
})();
/*
 * Public API Surface of ngx-quill
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_pages_purchased-test_purchased-test_module_ts.js.map