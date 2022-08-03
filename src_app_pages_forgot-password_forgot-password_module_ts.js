"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_forgot-password_forgot-password_module_ts"],{

/***/ 744:
/*!*********************************************!*\
  !*** ./src/app/constants/fb-collections.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseCollections": () => (/* binding */ FirebaseCollections)
/* harmony export */ });
class FirebaseCollections {
}
FirebaseCollections.COURSES = 'courses';
FirebaseCollections.ORDERS = 'orders';
FirebaseCollections.STUDENTS = 'students';
FirebaseCollections.TESTS = 'tests';
FirebaseCollections.MEDIA = 'media';
FirebaseCollections.SCHEDULES = 'schedules';
FirebaseCollections.QUESTION_PAPERS = 'question_papers';
FirebaseCollections.VALUED_ANSWER_SHEET = 'valued_answer_sheets';
FirebaseCollections.ANSWER_SHEET = 'answer_sheets';
FirebaseCollections.STUDENT_ACTIVITY = 'student_activity';
FirebaseCollections.NOTIFICATIONS = 'notifications';
FirebaseCollections.CHAT_ROOM = 'chat_room';
FirebaseCollections.MESSAGES = 'messages';
;


/***/ }),

/***/ 6177:
/*!*************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageRoutingModule": () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 2032);




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ 5638:
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageModule": () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 6177);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 2032);







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ 2032:
/*!***************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var _Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.html?ngResource */ 6688);
/* harmony import */ var _forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.page.scss?ngResource */ 2653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1228);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);











let ForgotPasswordPage = class ForgotPasswordPage {
  constructor(fb, authService, loadingController, alertController, router, dataService, commonService) {
    this.fb = fb;
    this.authService = authService;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.router = router;
    this.dataService = dataService;
    this.commonService = commonService;
    this.isPasswordVisible = false;
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.forgotPasswd = this.fb.group({
      email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
      password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
      confirm_password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]]
    });
  }

  submit() {
    var _this = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create({
        message: 'Please wait...'
      });
      yield loading.present();
      const body = { ..._this.forgotPasswd.value
      };

      if (body.password !== body.confirm_password) {
        yield loading.dismiss();

        _this.showAlert('Invalid password', 'Confirm Password doesn\'t match with the password');

        return;
      }

      const checkStudentSubscription = _this.dataService.checkStudent(body.email).subscribe( /*#__PURE__*/function () {
        var _ref = (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
          checkStudentSubscription.unsubscribe();

          if (resp.length > 0) {
            delete body.confirm_password;
            delete body.email;

            const updateStudentSubscription = _this.dataService.updateStudent({ ...body,
              id: resp[0].id
            }).then( /*#__PURE__*/function () {
              var _ref2 = (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                yield loading.dismiss();

                _this.commonService.presentToast('Password updated successfully.', 'light');

                _this.forgotPasswd.reset();
              });

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }(), /*#__PURE__*/function () {
              var _ref3 = (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
                yield loading.dismiss();
                console.error('Error while updating password:::::::::::\n', err);

                _this.showAlert('', 'Unable to update password.');
              });

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }());
          } else {
            yield loading.dismiss();

            _this.showAlert('Invalid user', 'Unable to update password.');
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref4 = (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          checkStudentSubscription.unsubscribe();
          yield loading.dismiss();
          console.error('Error while checking the student::::::::::\n', err);
        });

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
    })();
  }

  cancel() {
    this.router.navigateByUrl('login', {
      replaceUrl: true
    });
  }

  showPassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  showAlert(header, message) {
    var _this2 = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  } // Easy access for form fields


  get email() {
    return this.forgotPasswd.get('email');
  }

  get password() {
    return this.forgotPasswd.get('password');
  }

  get confirmPassword() {
    return this.forgotPasswd.get('confirm_password');
  }

};

ForgotPasswordPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService
}, {
  type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService
}];

ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-forgot-password',
  template: _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ForgotPasswordPage);


/***/ }),

/***/ 9763:
/*!***************************************************!*\
  !*** ./src/app/services/common/common.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 3819);



let CommonService = class CommonService {
    constructor(toastCtrl, navCtrl) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
    }
    presentToast(message = 'Please wait...', color = 'primary', duration = 3000) {
        this.toastCtrl.create({
            cssClass: '',
            color,
            duration,
            message,
        }).then(toast => {
            toast.present();
        }, err => {
            console.error('Error while toasting message', err);
        });
    }
    isValidData(dataToCheck) {
        return dataToCheck !== undefined && dataToCheck !== null && dataToCheck !== '' && dataToCheck !== [] && Object.keys(dataToCheck).length !== 0;
    }
    getExtension(url) {
        let type = url.split(/[#?]/)[0].split('.').pop().trim();
        if (['jpg', 'jpeg', 'png', 'gif', 'tiff', 'svg'].includes(type.toLowerCase())) {
            type = 'image';
        }
        else if (['mp3', 'm4a', 'acc', 'ogg', 'wma', 'flac', 'alac'].includes(type.toLowerCase())) {
            type = 'audio';
        }
        else if (['3gp', 'mp4', 'mov', 'wmv', 'flv', 'avi', 'avchd', 'webm', 'mkv'].includes(type.toLowerCase())) {
            type = 'video';
        }
        else if (['zip', 'rar'].includes(type.toLowerCase())) {
            type = 'archive';
        }
        return type.toLowerCase();
    }
    navigateForward(url, state = {}) {
        this.navCtrl.navigateForward(url, { state: { ...state } });
    }
    navigateBack(url, state = {}) {
        this.navCtrl.navigateBack(url, { state: { ...state } });
    }
    navigateRoot(url, state = {}) {
        this.navCtrl.setDirection('root');
        this.navCtrl.navigateRoot(url, { state: { ...state } });
    }
};
CommonService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.NavController }
];
CommonService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ 9244:
/*!***********************************************!*\
  !*** ./src/app/services/data/data.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/fb-collections */ 744);

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */



let DataService = class DataService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    /**
     * @description Firebase Data
     */
    get(collectionName) {
        const ref = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, collectionName);
        const queryRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(ref, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)('created_at', 'asc'));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(queryRef, { idField: 'id' });
    }
    getById(collectionName, id) {
        const docRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, collectionName + `/${id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.docData)(docRef, { idField: 'id' });
    }
    getByUID(collectionName, uid) {
        console.log(collectionName, uid);
        const ref = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, collectionName);
        const queryRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(ref, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('uid', '==', uid), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)('created_at', 'asc'));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(queryRef, { idField: 'id' });
    }
    add(collectionName, data) {
        const ref = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, collectionName);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(ref, { ...data, created_at: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)() });
    }
    delete(collectionName, data) {
        const docRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, collectionName + `/${data.id}`);
        return collectionName === src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.MEDIA || collectionName === src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.MEDIA ?
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(docRef, { media: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.arrayRemove)(data?.media), updated_at: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)() }) :
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(docRef);
    }
    update(collectionName, data) {
        const docRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, collectionName + `/${data.id}`);
        return collectionName === src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.MEDIA || collectionName === src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.MEDIA ?
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(docRef, { media: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.arrayUnion)(...data?.media), updated_at: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)() }) :
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(docRef, { ...data, updated_at: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)() });
    }
    /**
     * @description Course Data
     */
    getCourses() {
        const coursesRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'courses');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(coursesRef, { idField: 'id' });
    }
    getCourseById(id) {
        const courseDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `courses/${id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.docData)(courseDocRef, { idField: 'id' });
    }
    /**
     * @description Test Data
     */
    getTests(courseId) {
        const testsRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'tests');
        const testQueryRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(testsRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('course_id', '==', courseId || ''));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(testQueryRef, { idField: 'id' });
    }
    getTestById(id) {
        const testDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `tests/${id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.docData)(testDocRef, { idField: 'id' });
    }
    getValuedAnswerSheetByTestId(testId, studentId) {
        const scheduleRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.VALUED_ANSWER_SHEET);
        const scheduleQueryRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(scheduleRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('test_id', '==', testId || ''), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('student_id', '==', studentId || ''));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(scheduleQueryRef, { idField: 'id' });
    }
    getRemarksByTestId(testId, studentId) {
        const scheduleRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.STUDENT_ACTIVITY);
        const scheduleQueryRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(scheduleRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('test_id', '==', testId || ''), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('student_id', '==', studentId || ''));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(scheduleQueryRef, { idField: 'id' });
    }
    getAnswerSheetByTestId(testId) {
        const scheduleRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.ANSWER_SHEET);
        const scheduleQueryRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(scheduleRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('test_id', '==', testId || ''));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(scheduleQueryRef, { idField: 'id' });
    }
    getScheduleByCourseId(courseId) {
        const scheduleRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.SCHEDULES);
        const scheduleQueryRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(scheduleRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('course_id', '==', courseId));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(scheduleQueryRef, { idField: 'id' });
    }
    getScheduleByTestId(testId) {
        const scheduleRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.SCHEDULES);
        const scheduleQueryRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(scheduleRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('test_id', '==', testId || ''));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(scheduleQueryRef, { idField: 'id' });
    }
    getQuestionPaperByTestId(testId) {
        const questionPapersRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.QUESTION_PAPERS);
        const questionPapersQueryRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(questionPapersRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('test_id', '==', testId || ''));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(questionPapersQueryRef, { idField: 'id' });
    }
    updateTest(test) {
        const testDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `tests/${test.id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(testDocRef, { ...test, updated_at: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)() });
    }
    /**
     * @description Order Data
     */
    getOrdersList() {
        const ordersRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'orders');
        const orderQueryRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(ordersRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('student_id', '==', localStorage.getItem('uid') || ''));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(orderQueryRef, { idField: 'id' });
    }
    getPurchasedOrders() {
        const ordersRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'orders');
        const orderQueryRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(ordersRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('student_id', '==', localStorage.getItem('student_id') || ''), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('status', '==', true));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(orderQueryRef, { idField: 'id' });
    }
    getOrders(data) {
        const ordersRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'orders');
        const orderQueryRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(ordersRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('course_id', '==', data.course_id || ''), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('student_id', '==', data.student_id || ''));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(orderQueryRef);
        // return collectionData(orderQueryRef, { idField: 'id' }) as Observable<Order[]>;
    }
    addOrder(order) {
        const orderRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'orders');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(orderRef, { ...order, created_at: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)() });
    }
    updateOrder(order) {
        const orderDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `orders/${order.id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(orderDocRef, { ...order, updated_at: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)() });
    }
    /**
     * @description Student Data
     */
    getStudentById(id) {
        // const studentDocRef = collection(this.firestore, 'students',);
        // const studentQueryRef = query(studentDocRef, where('id', '==', id || ''));
        // return collectionData(studentQueryRef, { idField: 'id' }) as Observable<Student[]>;
        const studentDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `students/${id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.docData)(studentDocRef, { idField: 'id' });
    }
    getStudent(data) {
        const ordersRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'students');
        const orderQueryRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(ordersRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('email', '==', data.email || ''), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('password', '==', data.password || ''));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(orderQueryRef, { idField: 'id' });
    }
    checkStudent(email) {
        const ordersRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.STUDENTS);
        const orderQueryRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(ordersRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('email', '==', email));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(orderQueryRef, { idField: 'id' });
    }
    addStudent(student) {
        const studentRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'students');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(studentRef, { ...student, created_at: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)() });
    }
    deleteStudent(student) {
        const studentDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `students/${student.id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(studentDocRef);
    }
    updateStudent(student) {
        const studentDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `students/${student.id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(studentDocRef, { ...student, updated_at: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)() });
    }
    /**
     * @description Chat Data
     */
    getChat(chatId) {
        const testsRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.CHAT_ROOM);
        const testQueryRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(testsRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('chat_id', '==', chatId));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(testQueryRef, { idField: 'id' });
    }
    getMessages(chatId) {
        const testsRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.MESSAGES);
        const testQueryRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(testsRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('chat_id', '==', chatId), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)('created_at', 'asc'));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(testQueryRef, { idField: 'id' });
    }
};
DataService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.Firestore }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 2653:
/*!****************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-header,\nion-toolbar {\n  height: 150px;\n}\n\n.main {\n  --border-value: 50px;\n  border-top-left-radius: var(--border-value);\n  border-top-right-radius: var(--border-value);\n  height: calc(100% - 150px);\n  background: var(--ion-color-primary);\n}\n\nion-item[input] {\n  --background: rgba(var(--ion-color-light-rgb), 0.5) !important;\n}\n\n.sc-ion-input-md-h {\n  --placeholder-color: var(--ion-color-dark) !important;\n}\n\n.logo {\n  height: 130px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksYUFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSwyQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksOERBQUE7QUFDSjs7QUFFQTtFQUNJLHFEQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIsXG5pb24tdG9vbGJhciB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLm1haW4ge1xuICAgIC0tYm9yZGVyLXZhbHVlOiA1MHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci12YWx1ZSk7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci12YWx1ZSk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNTBweCk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24taXRlbVtpbnB1dF0ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4uc2MtaW9uLWlucHV0LW1kLWgge1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xufVxuXG4ubG9nbyB7XG4gICAgaGVpZ2h0OiAxMzBweDtcbn0iXX0= */";

/***/ }),

/***/ 6688:
/*!****************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content color=\"white\">\n  <ion-header color=\"white\" class=\"ion-no-border\">\n    <ion-toolbar color=\"white\" class=\"ion-text-center\">\n      <!-- <ion-title>Forgot Password</ion-title> -->\n      <ion-img src=\"../../../assets/logo text.jpg\" class=\"logo\"></ion-img>\n    </ion-toolbar>\n  </ion-header>\n  <main class=\"main p-4 pt-5\">\n    <ion-text color=\"white\">\n      <p class=\"size-18 fw-medium m-0\">Welcome to</p>\n      <p class=\"size-48 fw-bold m-0 mb-5\" style=\"line-height: 1.1;\">Gurukul For CA & CMA</p>\n    </ion-text>\n    <form (submit)=\"submit()\" [formGroup]=\"forgotPasswd\">\n      <ion-item color=\"white\" input class=\"ion-margin-bottom\" lines=\"none\">\n        <ion-icon name=\"mail-outline\" slot=\"start\" color=\"dark\"></ion-icon>\n        <ion-input color=\"dark\" type=\"email\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\n        <ion-note slot=\"error\" *ngIf=\"(email.dirty || email.touched) && email.errors\">\n          Email is invalid\n        </ion-note>\n      </ion-item>\n      <ion-item color=\"white\" input class=\"ion-margin-bottom\" lines=\"none\">\n        <ion-icon color=\"dark\" name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\n        <ion-input color=\"dark\" type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n        <ion-note slot=\"error\" *ngIf=\"(password.dirty || password.touched) && password.errors\">\n          Password needs to be 6 characters\n        </ion-note>\n      </ion-item>\n      <ion-item color=\"white\" input class=\"mb-5\" lines=\"none\">\n        <ion-icon color=\"dark\" name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\n        <ion-input color=\"dark\" [type]=\"isPasswordVisible ? 'text' : 'password'\" placeholder=\"Confirm Password\"\n          formControlName=\"confirm_password\"></ion-input>\n        <ion-buttons slot=\"end\">\n          <ion-button [hidden]=\"!isPasswordVisible\" (click)=\"showPassword()\">\n            <ion-icon color=\"dark\" name=\"eye-outline\" slot=\"icon-only\"> </ion-icon>\n          </ion-button>\n          <ion-button [hidden]=\"isPasswordVisible\" (click)=\"showPassword()\">\n            <ion-icon color=\"dark\" name=\"eye-off-outline\" slot=\"icon-only\"> </ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <ion-note slot=\"error\" *ngIf=\"(confirmPassword.dirty || confirmPassword.touched) && confirmPassword.errors\">\n          Password needs to be 6 characters\n        </ion-note>\n      </ion-item>\n\n      <ion-button type=\"submit\" expand=\"block\" class=\"shadow mb-3 size-14\" color=\"dark\"\n        [disabled]=\"!forgotPasswd.valid\">\n        Change Password\n      </ion-button>\n\n      <ion-button expand=\"block\" class=\"shadow-none size-14\" fill=\"clear\" color=\"dark\" (click)=\"cancel()\">\n        Cancel and SignIn\n      </ion-button>\n    </form>\n  </main>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgot-password_forgot-password_module_ts.js.map