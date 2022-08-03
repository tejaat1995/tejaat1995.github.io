"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_help_help_module_ts"],{

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

/***/ 8560:
/*!***************************************************!*\
  !*** ./src/app/pages/help/help-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPageRoutingModule": () => (/* binding */ HelpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help.page */ 9509);




const routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_0__.HelpPage
    }
];
let HelpPageRoutingModule = class HelpPageRoutingModule {
};
HelpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HelpPageRoutingModule);



/***/ }),

/***/ 998:
/*!*******************************************!*\
  !*** ./src/app/pages/help/help.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPageModule": () => (/* binding */ HelpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _help_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-routing.module */ 8560);
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.page */ 9509);







let HelpPageModule = class HelpPageModule {
};
HelpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _help_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpPageRoutingModule
        ],
        declarations: [_help_page__WEBPACK_IMPORTED_MODULE_1__.HelpPage]
    })
], HelpPageModule);



/***/ }),

/***/ 9509:
/*!*****************************************!*\
  !*** ./src/app/pages/help/help.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPage": () => (/* binding */ HelpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _help_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help.page.html?ngResource */ 5372);
/* harmony import */ var _help_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.page.scss?ngResource */ 6907);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/fb-collections */ 744);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);








let HelpPage = class HelpPage {
    constructor(dataService) {
        this.dataService = dataService;
        this.message = null;
        this.fakeChat = [];
        this.messages = [];
        this.student = null;
        this.chat = null;
        this.messagesSubscriber = null;
        this.chatRoomSubscriber = null;
    }
    ngOnInit() {
        this.student = JSON.parse(localStorage.getItem('student'));
        this.chatRoomSubscriber = this.dataService.getById(src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_2__.FirebaseCollections.CHAT_ROOM, this.student.chat_id || '1234').subscribe(resp => {
            this.chat = resp;
        }, err => {
            console.error('Error while getting chat::::::::::::\n', err);
        });
        this.messagesSubscriber = this.dataService.getMessages(this.student.chat_id || '1234').subscribe(resp => {
            this.messages = resp;
            this.updateScroll();
        }, err => {
            console.error('Error while getting messages::::::::::::\n', err);
        });
        this.fakeChat = this.getFakeChat();
    }
    sendMessage() {
        if (this.message.trim().length <= 0) {
            this.message = '';
            return;
        }
        else {
            const chatRoom = {
                last_msg: this.message,
                unread_messages: this.chat?.is_opened ? 0 : this.chat.unread_messages + 1,
                id: this.student.chat_id || 'jjjjjj'
            };
            this.dataService.update(src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_2__.FirebaseCollections.CHAT_ROOM, chatRoom).then((res) => {
                const message = {
                    message: this.message,
                    student_id: this.student.id,
                    student_name: this.student.first_name + ' ' + this.student.last_name,
                    chat_id: this.student.chat_id,
                    is_student: true
                };
                this.dataService.add(src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_2__.FirebaseCollections.MESSAGES, message).then((resp) => {
                    this.message = '';
                    this.updateScroll();
                }, err => {
                    console.error('Error while adding message:::::::::::\n', err);
                });
            }, err => {
                console.error('Error while updating chat room:::::::::::\n', { ...err });
                if (err.code === 'not-found' || err.code === 'invalid-argument') {
                    const chatRoom = {
                        student_id: this.student.id,
                        student_name: this.student.first_name + ' ' + this.student.last_name,
                        last_msg: this.message,
                        unread_messages: this.chat?.is_opened ? 0 : this.chat.unread_messages + 1,
                        updated_at: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)()
                    };
                    this.dataService.add(src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_2__.FirebaseCollections.CHAT_ROOM, chatRoom).then((resp) => {
                        // console.log(resp);
                        this.student.chat_id = resp.id;
                        this.dataService.update(src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_2__.FirebaseCollections.STUDENTS, { chat_id: resp.id, id: this.student.id }).then((response) => {
                            localStorage.setItem('student', JSON.stringify({ ...this.student }));
                        }, (error) => {
                            console.log('Error while updating student:::::::::\n', error);
                        });
                        const message = {
                            message: this.message,
                            student_id: this.student.id,
                            student_name: this.student.first_name + ' ' + this.student.last_name,
                            chat_id: this.student.chat_id,
                            is_student: true
                        };
                        this.dataService.add(src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_2__.FirebaseCollections.MESSAGES, message).then((res) => {
                            this.message = '';
                            setTimeout(() => {
                                this.updateScroll();
                            }, 500);
                        }, error => {
                            console.error('Error while adding notification:::::::::::\n', error);
                        });
                    }, (error) => {
                        console.error('Error while adding message:::::::::::\n', error);
                    });
                }
            });
        }
    }
    updateScroll() {
        setTimeout(() => {
            this.content.scrollToBottom(1000);
        }, 500);
    }
    ngOnDestroy() {
        this.chatRoomSubscriber.unsubscribe();
        this.messagesSubscriber.unsubscribe();
    }
    getFakeChat() {
        return [
            {
                message: 'Hello, Sir!',
                from: 'Teja',
                is_student: true,
                created_at: '2345'
            }, {
                message: 'Hello, Teja. How are you?',
                from: 'Admin',
                is_student: false,
                created_at: '2345'
            },
            {
                message: 'Hello, Sir!',
                from: 'Teja',
                is_student: true,
                created_at: '2345'
            },
            {
                message: 'Hello, Teja. How are you?',
                from: 'Admin',
                is_student: false,
                created_at: '2345'
            },
            {
                message: 'Hello, Sir!',
                from: 'Teja',
                is_student: true,
                created_at: '2345'
            },
            {
                message: 'Hello, Teja. How are you?',
                from: 'Admin',
                is_student: false,
                created_at: '2345'
            },
            {
                message: 'Hello, Sir!',
                from: 'Teja',
                is_student: true,
                created_at: '2345'
            },
            {
                message: 'Hello, Teja. How are you?',
                from: 'Admin',
                is_student: false,
                created_at: '2345'
            },
            {
                message: 'Hello, Sir!',
                from: 'Teja',
                is_student: true,
                created_at: '2345'
            }, {
                message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                from: 'Admin',
                is_student: false,
                created_at: '2345'
            },
            {
                message: 'Hello, Sir!',
                from: 'Teja',
                is_student: true,
                created_at: '2345'
            },
            {
                message: 'Hello, Teja. How are you?',
                from: 'Admin',
                is_student: false,
                created_at: '2345'
            },
            {
                message: 'Hello, Sir!',
                from: 'Teja',
                is_student: true,
                created_at: '2345'
            },
            {
                message: 'Hello, Teja. How are you?',
                from: 'Admin',
                is_student: false,
                created_at: '2345'
            },
            {
                message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                from: 'Teja',
                is_student: true,
                created_at: '2345'
            },
            {
                message: 'Hello, Teja. How are you?',
                from: 'Admin',
                is_student: false,
                created_at: '2345'
            },
            {
                message: 'Hello, Sir!',
                from: 'Teja',
                is_student: true,
                created_at: '2345'
            }, {
                message: 'Hello, Teja. How are you?',
                from: 'Admin',
                is_student: false,
                created_at: '2345'
            },
            {
                message: 'Hello, Sir!',
                from: 'Teja',
                is_student: true,
                created_at: '2345'
            },
            {
                message: 'Hello, Teja. How are you?',
                from: 'Admin',
                is_student: false,
                created_at: '2345'
            },
            {
                message: 'Hello, Sir!',
                from: 'Teja',
                is_student: true,
                created_at: '2345'
            },
            {
                message: 'Hello, Teja. How are you?',
                from: 'Admin',
                is_student: false,
                created_at: '2345'
            },
            {
                message: 'Hello, Sir!',
                from: 'Teja',
                is_student: true,
                created_at: '2345'
            },
            {
                message: 'Hello, Teja. How are you?',
                from: 'Admin',
                is_student: false,
                created_at: '2345'
            },
            {
                message: 'Hello, Sir!',
                from: 'Teja',
                is_student: true,
                created_at: '2345'
            }, {
                message: 'Hello, Teja. How are you?',
                from: 'Admin',
                is_student: false,
                created_at: '2345'
            },
            {
                message: 'Hello, Sir!',
                from: 'Teja',
                is_student: true,
                created_at: '2345'
            },
            {
                message: 'Hello, Teja. How are you?',
                from: 'Admin',
                is_student: false,
                created_at: '2345'
            },
            {
                message: 'Hello, Sir!',
                from: 'Teja',
                is_student: true,
                created_at: '2345'
            },
            {
                message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                from: 'Admin',
                is_student: false,
                created_at: '2345'
            },
            {
                message: 'Hello, Sir!',
                from: 'Teja',
                is_student: true,
                created_at: '2345'
            },
            {
                message: 'Hello, Teja. How are you?',
                from: 'Admin',
                is_student: false,
                created_at: '2345'
            }
        ];
    }
};
HelpPage.ctorParameters = () => [
    { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService }
];
HelpPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent,] }]
};
HelpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-help',
        template: _help_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_help_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HelpPage);



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

/***/ 6907:
/*!******************************************************!*\
  !*** ./src/app/pages/help/help.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5372:
/*!******************************************************!*\
  !*** ./src/app/pages/help/help.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Help\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"white\" class=\"ion-padding\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar color=\"white\">\n      <ion-title size=\"large\">Help</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <!-- Fake Chat Start's Here -->\n  <!-- <ion-row>\n    <ion-col size=\"9\" size-md=\"6\" size-lg=\"5\" size-xl=\"4\" [offset]=\"chat.is_student ? 3 : 0\"\n      [offsetMd]=\"chat.is_student ? 6 : 0\" [offsetLg]=\"chat.is_student ? 7 : 0\" [offsetXl]=\"chat.is_student ? 8 : 0\"\n      *ngFor=\"let chat of messages\">\n      <ion-item class=\"rounded mb-1\" [color]=\"chat.is_student ? 'light' : 'medium'\" lines=\"none\">\n        <ion-label class=\"ion-text-wrap\">\n          <p>{{chat.message}}</p>\n          <p class=\"m-0 size-12\" [ngClass]=\"{'ion-text-end': chat.is_student}\">{{chat.created_at}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row> -->\n  <!-- Fake Chat End's Here -->\n\n  <ion-row>\n    <ion-col size=\"9\" size-md=\"6\" size-lg=\"5\" size-xl=\"4\" [offset]=\"message.is_student ? 3 : 0\"\n      [offsetMd]=\"message.is_student ? 6 : 0\" [offsetLg]=\"message.is_student ? 7 : 0\"\n      [offsetXl]=\"message.is_student ? 8 : 0\" *ngFor=\"let message of messages\">\n      <ion-item class=\"rounded mb-1\" [color]=\"message.is_student ? 'light' : 'medium'\" lines=\"none\">\n        <ion-label class=\"ion-text-wrap\">\n          <p>{{message.message}}</p>\n          <p class=\"m-0 size-12\" [ngClass]=\"{'ion-text-end': message.is_student}\">\n            {{message.created_at?.toDate() | date: 'dd MMM YYY hh:mm'}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"light\">\n    <ion-item style=\"--inner-padding-end: 0;\" lines=\"none\" color=\"light\">\n      <ion-textarea rows=\"1\" autoGrow=\"true\" [(ngModel)]=\"message\" placeholder=\"Enter message....\" maxlength=\"500\"\n        style=\"max-height: 100px;\"></ion-textarea>\n      <ion-buttons slot=\"end\" class=\"m-0\">\n        <ion-button (click)=\"sendMessage()\" color=\"medium\" [disabled]=\"!(message?.length > 0)\">\n          <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_help_help_module_ts.js.map