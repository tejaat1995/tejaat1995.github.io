"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_account_account_module_ts"],{

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

/***/ 7173:
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageRoutingModule": () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 9610);




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_0__.AccountPage
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ 6868:
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageModule": () => (/* binding */ AccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 7173);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page */ 9610);







let AccountPageModule = class AccountPageModule {
};
AccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_1__.AccountPage]
    })
], AccountPageModule);



/***/ }),

/***/ 9610:
/*!***********************************************!*\
  !*** ./src/app/pages/account/account.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPage": () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page.html?ngResource */ 6216);
/* harmony import */ var _account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page.scss?ngResource */ 7110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/fb-collections */ 744);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);








let AccountPage = class AccountPage {
    constructor(cd, dataService, formBuilder, commonService) {
        this.cd = cd;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.studentId = "";
        this.customActionSheetOptions = {
            header: 'Select course type'
        };
        this.createForm();
        this.dataService.getStudentById(localStorage.getItem('student_id') || '').subscribe((resp) => {
            this.studentForm.patchValue(resp);
            this.studentId = resp.id;
            this.cd.detectChanges();
        });
    }
    ngOnInit() { }
    createForm() {
        this.studentForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]],
            first_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(25)]],
            last_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(25)]],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(10)]],
            course_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            dob: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            location: this.formBuilder.group({
                address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
                pincode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
                city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
                state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
                country: ['India', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            })
        });
    }
    update() {
        this.dataService.update(src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_2__.FirebaseCollections.STUDENTS, { ...this.studentForm.value, id: this.studentId }).then(resp => {
            this.commonService.presentToast('Account updated successfully.');
            this.dataService.getStudentById(localStorage.getItem('student_id') || '').subscribe((res) => {
                this.studentForm.patchValue(res);
                this.studentId = res.id;
            });
        }, err => {
            console.error('Error while updating profile::::::\n', err);
        });
    }
    // Easy access for form fields
    get email() {
        return this.studentForm.get('email');
    }
    get password() {
        return this.studentForm.get('password');
    }
    get first_name() {
        return this.studentForm.get('first_name');
    }
    get last_name() {
        return this.studentForm.get('last_name');
    }
    get mobile() {
        return this.studentForm.get('mobile');
    }
    get dob() {
        return this.studentForm.get('dob');
    }
    get course_type() {
        return this.studentForm.get('course_type');
    }
    get address() {
        return this.studentForm.get('location.address');
    }
    get pincode() {
        return this.studentForm.get('location.pincode');
    }
    get city() {
        return this.studentForm.get('location.city');
    }
    get state() {
        return this.studentForm.get('location.state');
    }
    get country() {
        return this.studentForm.get('location.country');
    }
};
AccountPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService }
];
AccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-account',
        template: _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountPage);



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

/***/ 7110:
/*!************************************************************!*\
  !*** ./src/app/pages/account/account.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  --background: rgba(var(--ion-color-light)) !important;\n  border-radius: 5px;\n}\n\n.sc-ion-input-md-h {\n  --placeholder-color: var(--ion-color-medium) !important;\n}\n\n.logo {\n  background: var(--ion-color-light);\n  width: 150px;\n  height: 150px;\n  border: 10px solid var(--ion-color-light);\n  background-image: url('student.png');\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscURBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksdURBQUE7QUFDSjs7QUFFQTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FBQ0oiLCJmaWxlIjoiYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodCkpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2MtaW9uLWlucHV0LW1kLWgge1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvc3R1ZGVudC5wbmcpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn0iXX0= */";

/***/ }),

/***/ 6216:
/*!************************************************************!*\
  !*** ./src/app/pages/account/account.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-content fullscreen color=\"white\">\n  <ion-header [translucent]=\"true\" class=\"ion-no-border\">\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"dashboard\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n        Account\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <form [formGroup]=\"studentForm\" (ngSubmit)=\"update()\" class=\"ion-padding\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"12\">\n        <div class=\"rounded-circle mx-auto logo\">\n          <!-- <ion-img class=\"w-100 h-100\" src=\"../../../assets/student.png\"></ion-img> -->\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item color=\"light\" class=\"ion-margin-bottom\" lines=\"none\" disabled>\n          <ion-label position=\"floating\" color=\"medium\">Email</ion-label>\n          <ion-input color=\"dark\" type=\"email\" placeholder=\"Email\" formControlName=\"email\" readonly>\n          </ion-input>\n          <ion-note slot=\"error\" *ngIf=\"(email.dirty || email.touched) && email.errors\">\n            Email is invalid\n          </ion-note>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-item color=\"light\" class=\"ion-margin-bottom\" lines=\"none\">\n          <ion-label position=\"floating\" color=\"medium\">First Name</ion-label>\n          <ion-input color=\"dark\" type=\"text\" placeholder=\"FirstName\" formControlName=\"first_name\"></ion-input>\n          <ion-note slot=\"error\" *ngIf=\"(first_name.dirty || first_name.touched) && first_name.errors\">\n            First Name needs to be 5 characters\n          </ion-note>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-item color=\"light\" class=\"ion-margin-bottom\" lines=\"none\">\n          <ion-label position=\"floating\" color=\"medium\">Last Name</ion-label>\n          <ion-input color=\"dark\" type=\"text\" placeholder=\"Last Name\" formControlName=\"last_name\"></ion-input>\n          <ion-note slot=\"error\" *ngIf=\"(last_name.dirty || last_name.touched) && last_name.errors\">\n            Last Name needs to be 5 characters\n          </ion-note>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\">\n\n        <ion-item color=\"light\" class=\"ion-margin-bottom\" lines=\"none\">\n          <ion-label position=\"floating\" color=\"medium\">Phone Number</ion-label>\n          <ion-input color=\"dark\" type=\"tel\" placeholder=\"Phone Number\" formControlName=\"mobile\"></ion-input>\n          <ion-note slot=\"error\" *ngIf=\"(mobile.dirty || mobile.touched) && mobile.errors\">\n            Phone Number needs to be 10 digits.\n          </ion-note>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-item color=\"light\" id=\"start-date\" class=\"ion-margin-bottom\" lines=\"none\">\n          <ion-label color=\"medium\">Date of Birth</ion-label>\n          <ion-text slot=\"end\">{{ studentForm.value.dob | date: 'dd MMM YYYY' }}</ion-text>\n          <ion-popover trigger=\"start-date\" show-backdrop=\"false\">\n            <ng-template>\n              <ion-datetime #startDateTime presentation=\"date\" formControlName=\"dob\" placeholder=\"select Date of Birth\">\n                <div slot=\"title\">Select Date of Birth</div>\n              </ion-datetime>\n            </ng-template>\n          </ion-popover>\n          <ion-note slot=\"error\" *ngIf=\"(dob.dirty || dob.touched) && dob.errors\">\n            please enter date of birth\n          </ion-note>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-item color=\"light\" class=\"ion-margin-bottom\" lines=\"none\">\n          <ion-label color=\"medium\">Course Type</ion-label>\n          <ion-select placeholder=\"Select course type\" color=\"medium\" interface=\"action-sheet\"\n            [interfaceOptions]=\"customActionSheetOptions\" formControlName=\"course_type\"\n            [value]=\"studentForm.value.course_type\">\n            <!-- ca-foundation, ca-inter, ca-final, cma-foundation, cma-final, cma-inter -->\n            <ion-select-option value=\"CA foundation\">CA Foundation</ion-select-option>\n            <ion-select-option value=\"CA Inter\">CA Inter</ion-select-option>\n            <ion-select-option value=\"CA Final\">CA Final</ion-select-option>\n            <ion-select-option value=\"CMA Foundation\">CMA Foundation</ion-select-option>\n            <ion-select-option value=\"CMA Final\">CMA Final</ion-select-option>\n            <ion-select-option value=\"CMA Inter\">CMA Inter</ion-select-option>\n          </ion-select>\n          <ion-icon slot=\"end\" color=\"dark\" name=\"chevron-down-outline\"></ion-icon>\n          <ion-note slot=\"error\" *ngIf=\"(course_type.dirty || course_type.touched) && course_type.errors\">\n            Please select course type.\n          </ion-note>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row formGroupName=\"location\">\n      <ion-col size=\"6\">\n        <ion-item color=\"light\" class=\"ion-margin-bottom\" lines=\"none\">\n          <ion-label position=\"floating\" color=\"medium\">Address</ion-label>\n          <ion-input color=\"dark\" placeholder=\"Address\" formControlName=\"address\"></ion-input>\n          <ion-note slot=\"error\" *ngIf=\"(address.dirty || address.touched) && address.errors\">\n            Address is required\n          </ion-note>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-item color=\"light\" class=\"ion-margin-bottom\" lines=\"none\">\n          <ion-label position=\"floating\" color=\"medium\">Pincode</ion-label>\n          <ion-input color=\"dark\" type=\"tel\" placeholder=\"Pincode\" formControlName=\"pincode\"></ion-input>\n          <ion-note slot=\"error\" *ngIf=\"(pincode.dirty || pincode.touched) && pincode.errors\">\n            Please enter Pincode.\n          </ion-note>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n\n        <ion-item color=\"light\" class=\"ion-margin-bottom\" lines=\"none\">\n          <ion-label position=\"floating\" color=\"medium\">City</ion-label>\n          <ion-input color=\"dark\" type=\"text\" placeholder=\"City\" formControlName=\"city\"></ion-input>\n          <ion-note slot=\"error\" *ngIf=\"(city.dirty || city.touched) && city.errors\">\n            Please enter City.\n          </ion-note>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item color=\"light\" class=\"ion-margin-bottom\" lines=\"none\">\n          <ion-label position=\"floating\" color=\"medium\">State</ion-label>\n          <ion-input color=\"dark\" type=\"text\" placeholder=\"State\" formControlName=\"state\"></ion-input>\n          <ion-note slot=\"error\" *ngIf=\"(state.dirty || state.touched) && state.errors\">\n            Please enter State.\n          </ion-note>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-item color=\"light\" class=\"ion-margin-bottom\" lines=\"none\">\n          <ion-label position=\"floating\" color=\"medium\">Country</ion-label>\n          <ion-input color=\"dark\" type=\"text\" readonly placeholder=\"Country\" formControlName=\"country\"></ion-input>\n          <ion-note slot=\"error\" *ngIf=\"(country.dirty || country.touched) && country.errors\">\n            Please enter Country.\n          </ion-note>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-button block color=\"primary\" type=\"submit\" expand=\"block\" class=\"shadow\" [disabled]=\"studentForm.invalid\">\n          Update\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_account_account_module_ts.js.map