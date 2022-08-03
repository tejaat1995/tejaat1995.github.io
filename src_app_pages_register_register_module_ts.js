"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_register_register_module_ts"],{

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

/***/ 1557:
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 6690);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 207:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 1557);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 6690);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 6690:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var _Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.html?ngResource */ 6325);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 7863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1228);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);











let RegisterPage = class RegisterPage {
  constructor(fb, authService, loadingController, alertController, router, dataService, commonService) {
    this.fb = fb;
    this.authService = authService;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.router = router;
    this.dataService = dataService;
    this.commonService = commonService;
    this.customActionSheetOptions = {
      header: 'Select course type'
    };
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
      password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
      first_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(25)]],
      last_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(25)]],
      mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10)]],
      course_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      dob: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      location: this.fb.group({
        address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        pincode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        country: ['India', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      })
    });
  }

  register() {
    var _this = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create({
        message: 'Please wait...'
      });
      yield loading.present();
      const {
        email,
        password
      } = _this.registerForm.value;
      const user = yield _this.authService.register({
        email,
        password
      });

      if (user && user?.user?.uid) {
        _this.dataService.addStudent({ ..._this.registerForm.value,
          uid: user?.user?.uid
        }).then( /*#__PURE__*/function () {
          var _ref = (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
            yield loading.dismiss();

            if (resp.id) {
              _this.registerForm.reset();

              _this.commonService.presentToast('Registered Successfully', 'light');

              _this.authService.logout().then(res => {
                localStorage.clear();

                _this.router.navigateByUrl('login', {
                  replaceUrl: true
                });
              }, err => {
                console.error('Error while logout:::::::::\n', err);
              });
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }(), /*#__PURE__*/function () {
          var _ref2 = (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_student_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
            yield loading.dismiss();
            console.error('Error while adding the student:::::\n', err);
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      } else {
        yield loading.dismiss();
        console.error('Registration failed:::::::::::::\n', user);

        if (JSON.stringify(user) === '{}') {
          _this.showAlert('Email ID already exists', 'Please try again with another email');
        } else {
          _this.showAlert('Registration failed', 'Please try again!');
        }
      }
    })();
  }

  login() {
    this.router.navigateByUrl('/login', {
      replaceUrl: true
    });
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
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get first_name() {
    return this.registerForm.get('first_name');
  }

  get last_name() {
    return this.registerForm.get('last_name');
  }

  get mobile() {
    return this.registerForm.get('mobile');
  }

  get dob() {
    return this.registerForm.get('dob');
  }

  get course_type() {
    return this.registerForm.get('course_type');
  }

  get address() {
    return this.registerForm.get('location.address');
  }

  get pincode() {
    return this.registerForm.get('location.pincode');
  }

  get city() {
    return this.registerForm.get('location.city');
  }

  get state() {
    return this.registerForm.get('location.state');
  }

  get country() {
    return this.registerForm.get('location.country');
  }

};

RegisterPage.ctorParameters = () => [{
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

RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-register',
  template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegisterPage);


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

/***/ 7863:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-header,\nion-toolbar {\n  height: 150px;\n}\n\n.main {\n  --border-value: 50px;\n  border-top-left-radius: var(--border-value);\n  border-top-right-radius: var(--border-value);\n  min-height: calc(100% - 150px);\n  height: -moz-fit-content;\n  height: fit-content;\n  background: var(--ion-color-primary);\n}\n\nion-item[input] {\n  --background: rgba(var(--ion-color-light-rgb), 0.5) !important;\n}\n\n.sc-ion-input-md-h {\n  --placeholder-color: var(--ion-color-dark) !important;\n}\n\n.logo {\n  height: 130px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLDJDQUFBO0VBQ0EsNENBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksOERBQUE7QUFDSjs7QUFFQTtFQUNJLHFEQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcixcbmlvbi10b29sYmFyIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4ubWFpbiB7XG4gICAgLS1ib3JkZXItdmFsdWU6IDUwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXZhbHVlKTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tYm9yZGVyLXZhbHVlKTtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAxNTBweCk7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1pdGVtW2lucHV0XSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbi5zYy1pb24taW5wdXQtbWQtaCB7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvIHtcbiAgICBoZWlnaHQ6IDEzMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 6325:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-content color=\"white\">\n  <ion-header color=\"white\" class=\"ion-no-border\">\n    <ion-toolbar color=\"white\" class=\"ion-text-center\">\n      <!-- <ion-title>Gurukul Student Register</ion-title> -->\n      <ion-img src=\"../../../assets/logo text.jpg\" class=\"logo\"></ion-img>\n    </ion-toolbar>\n  </ion-header>\n  <main class=\"main p-4 pt-5\">\n    <ion-text color=\"white\">\n      <p class=\"size-18 fw-medium m-0\">Welcome to</p>\n      <p class=\"size-48 fw-bold m-0 mb-5\" style=\"line-height: 1.1;\">Gurukul For CA & CMA</p>\n    </ion-text>\n    <form (submit)=\"register()\" [formGroup]=\"registerForm\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item color=\"white\" input class=\"ion-margin-bottom\" lines=\"none\">\n            <ion-input color=\"dark\" type=\"email\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"(email.dirty || email.touched) && email.errors\">\n              Email is invalid\n            </ion-note>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-item color=\"white\" input class=\"ion-margin-bottom\" lines=\"none\">\n            <ion-input color=\"dark\" type=\"text\" placeholder=\"FirstName\" formControlName=\"first_name\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"(first_name.dirty || first_name.touched) && first_name.errors\">\n              First Name needs to be 4 characters\n            </ion-note>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-item color=\"white\" input class=\"ion-margin-bottom\" lines=\"none\">\n            <ion-input color=\"dark\" type=\"text\" placeholder=\"Last Name\" formControlName=\"last_name\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"(last_name.dirty || last_name.touched) && last_name.errors\">\n              Last Name needs to be 1 characters\n            </ion-note>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-item color=\"white\" input class=\"ion-margin-bottom\" lines=\"none\">\n            <ion-input color=\"dark\" type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"(password.dirty || password.touched) && password.errors\">\n              Password needs to be 6 characters\n            </ion-note>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"12\">\n\n          <ion-item color=\"white\" input class=\"ion-margin-bottom\" lines=\"none\">\n            <ion-input color=\"dark\" type=\"tel\" placeholder=\"Phone Number\" formControlName=\"mobile\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"(mobile.dirty || mobile.touched) && mobile.errors\">\n              Phone Number needs to be 10 digits.\n            </ion-note>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-item color=\"white\" input id=\"start-date\" class=\"ion-margin-bottom\">\n            <ion-label color=\"dark\">Date of Birth</ion-label>\n            <ion-text slot=\"end\">{{ registerForm.value.dob | date: 'dd MMM YYYY'}}</ion-text>\n            <ion-popover trigger=\"start-date\" show-backdrop=\"false\">\n              <ng-template>\n                <ion-datetime #startDateTime presentation=\"date\" formControlName=\"dob\"\n                  placeholder=\"select Date of Birth\">\n                  <div slot=\"title\">Select Date of Birth</div>\n                </ion-datetime>\n              </ng-template>\n            </ion-popover>\n            <ion-note slot=\"error\" *ngIf=\"(dob.dirty || dob.touched) && dob.errors\">\n              please enter date of birth\n            </ion-note>\n          </ion-item>`\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-item color=\"white\" input class=\"ion-margin-bottom\" lines=\"none\">\n            <ion-select placeholder=\"Select course type\" interface=\"action-sheet\"\n              [interfaceOptions]=\"customActionSheetOptions\" formControlName=\"course_type\">\n              <!-- ca-foundation, ca-inter, ca-final, cma-foundation, cma-final, cma-inter -->\n              <ion-select-option value=\"CA foundation\">CA Foundation</ion-select-option>\n              <ion-select-option value=\"CA Inter\">CA Inter</ion-select-option>\n              <ion-select-option value=\"CA Final\">CA Final</ion-select-option>\n              <ion-select-option value=\"CMA Foundation\">CMA Foundation</ion-select-option>\n              <ion-select-option value=\"CMA Final\">CMA Final</ion-select-option>\n              <ion-select-option value=\"CMA Inter\">CMA Inter</ion-select-option>\n            </ion-select>\n            <ion-icon slot=\"end\" color=\"dark\" name=\"chevron-down-outline\"></ion-icon>\n            <ion-note slot=\"error\" *ngIf=\"(course_type.dirty || course_type.touched) && course_type.errors\">\n              Please select course type.\n            </ion-note>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row formGroupName=\"location\">\n        <ion-col size=\"6\">\n          <ion-item color=\"white\" input class=\"ion-margin-bottom\" lines=\"none\">\n            <ion-input color=\"dark\" placeholder=\"Address\" formControlName=\"address\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"(address.dirty || address.touched) && address.errors\">\n              Address is required\n            </ion-note>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-item color=\"white\" input class=\"ion-margin-bottom\" lines=\"none\">\n            <ion-input color=\"dark\" type=\"tel\" placeholder=\"Pincode\" formControlName=\"pincode\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"(pincode.dirty || pincode.touched) && pincode.errors\">\n              Please enter Pincode.\n            </ion-note>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n\n          <ion-item color=\"white\" input class=\"ion-margin-bottom\" lines=\"none\">\n            <ion-input color=\"dark\" type=\"text\" placeholder=\"City\" formControlName=\"city\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"(city.dirty || city.touched) && city.errors\">\n              Please enter City.\n            </ion-note>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item color=\"white\" input class=\"ion-margin-bottom\" lines=\"none\">\n            <ion-input color=\"dark\" type=\"text\" placeholder=\"State\" formControlName=\"state\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"(state.dirty || state.touched) && state.errors\">\n              Please enter State.\n            </ion-note>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-item color=\"white\" input class=\"ion-margin-bottom\" lines=\"none\">\n            <ion-input color=\"dark\" type=\"text\" readonly placeholder=\"Country\" formControlName=\"country\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"(country.dirty || country.touched) && country.errors\">\n              Please enter Country.\n            </ion-note>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"12\">\n\n          <p class=\"ion-text-center mt-4\">\n            <ion-text color=\"dark\">\n              Already have an account? <a style=\"color: var(--ion-color-white) !important;\" (click)=\"login()\">Login\n                here</a>\n            </ion-text>\n          </p>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-button type=\"submit\" expand=\"block\" color=\"dark\" [disabled]=\"!registerForm.valid\">Register</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </main>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map