"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dasboard_dasboard_module_ts"],{

/***/ 3063:
/*!***********************************************************!*\
  !*** ./src/app/pages/dasboard/dasboard-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DasboardPageRoutingModule": () => (/* binding */ DasboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _dasboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dasboard.page */ 6885);




const routes = [
    {
        path: '',
        component: _dasboard_page__WEBPACK_IMPORTED_MODULE_0__.DasboardPage
    }
];
let DasboardPageRoutingModule = class DasboardPageRoutingModule {
};
DasboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DasboardPageRoutingModule);



/***/ }),

/***/ 3091:
/*!***************************************************!*\
  !*** ./src/app/pages/dasboard/dasboard.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DasboardPageModule": () => (/* binding */ DasboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _dasboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dasboard-routing.module */ 3063);
/* harmony import */ var _dasboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dasboard.page */ 6885);







let DasboardPageModule = class DasboardPageModule {
};
DasboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dasboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DasboardPageRoutingModule
        ],
        declarations: [_dasboard_page__WEBPACK_IMPORTED_MODULE_1__.DasboardPage]
    })
], DasboardPageModule);



/***/ }),

/***/ 6885:
/*!*************************************************!*\
  !*** ./src/app/pages/dasboard/dasboard.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DasboardPage": () => (/* binding */ DasboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dasboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dasboard.page.html?ngResource */ 6904);
/* harmony import */ var _dasboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dasboard.page.scss?ngResource */ 5684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1228);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 2407);








let DasboardPage = class DasboardPage {
    constructor(commonService, authService, router, iab) {
        this.commonService = commonService;
        this.authService = authService;
        this.router = router;
        this.iab = iab;
        this.student = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.student = JSON.parse(localStorage.getItem('student'));
    }
    openLink() {
        const browser = this.iab.create('http://www.gurukulforca.com', '_blank');
        browser.on('loadstop').subscribe(event => {
            //
        });
        browser.close();
    }
    navTo(path) {
        this.commonService.navigateForward(path);
    }
    logout() {
        this.authService.logout().then(resp => {
            localStorage.clear();
            this.router.navigateByUrl('login', { replaceUrl: true });
        }, err => {
            console.error('Error while logout:::::::::\n', err);
            this.commonService.presentToast('unable to login', 'danger');
        });
    }
};
DasboardPage.ctorParameters = () => [
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser }
];
DasboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dasboard',
        template: _dasboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dasboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DasboardPage);



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

/***/ 5684:
/*!**************************************************************!*\
  !*** ./src/app/pages/dasboard/dasboard.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".dashboard-header {\n  height: 150px;\n}\n.dashboard-header ion-avatar {\n  height: 48px;\n  width: 48px;\n}\n.action-btn {\n  --border-radius: 8px !important;\n  margin-right: 8px;\n}\n.notification-count {\n  top: -10px;\n  left: 10px;\n  z-index: 99;\n}\n.dashboard {\n  background: var(--ion-color-white);\n  background: rgba(var(--ion-color-white-rgb), 0.5);\n  min-height: 120px;\n}\n.main {\n  --border-value: 50px;\n  border-top-left-radius: var(--border-value);\n  border-top-right-radius: var(--border-value);\n  min-height: calc(100% - 150px);\n  height: -moz-fit-content;\n  height: fit-content;\n  background: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2JvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDUjtBQUdBO0VBQ0ksK0JBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR0E7RUFDSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFBSjtBQUdBO0VBQ0ksa0NBQUE7RUFDQSxpREFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHQTtFQUNJLG9CQUFBO0VBQ0EsMkNBQUE7RUFDQSw0Q0FBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG9DQUFBO0FBQUoiLCJmaWxlIjoiZGFzYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1oZWFkZXIge1xuICAgIGhlaWdodDogMTUwcHg7XG5cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICB9XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4ubm90aWZpY2F0aW9uLWNvdW50IHtcbiAgICB0b3A6IC0xMHB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgei1pbmRleDogOTk7XG59XG5cbi5kYXNoYm9hcmQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3Itd2hpdGUtcmdiKSwgMC41KTtcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcbn1cblxuLm1haW4ge1xuICAgIC0tYm9yZGVyLXZhbHVlOiA1MHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci12YWx1ZSk7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci12YWx1ZSk7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gMTUwcHgpO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */";

/***/ }),

/***/ 6904:
/*!**************************************************************!*\
  !*** ./src/app/pages/dasboard/dasboard.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-content color=\"white\">\n  <div class=\"dashboard-header pl-3 pt-5\">\n    <ion-item color=\"white\" class=\"bg-transparent\" lines=\"none\">\n      <ion-avatar slot=\"start\" class=\"shadow\">\n        <ion-img src=\"../../../assets/student.png\">\n        </ion-img>\n      </ion-avatar>\n      <ion-label color=\"dark\">\n        <h2 class=\"size-22 fw-bold\">{{student.first_name}} {{student.last_name}}</h2>\n        <p class=\"size-12\" style=\"color: var(--ion-color-medium);\">\n          Course: {{student.course_type || 'CA'}}\n        </p>\n      </ion-label>\n      <ion-buttons slot=\"end\">\n        <!-- <ion-button color=\"tertiary\" class=\"action-btn size-12 position-relative\">\n          <ion-badge class=\"position-absolute notification-count\">5</ion-badge>\n          <ion-icon slot=\"icon-only\" name=\"notifications-outline\"></ion-icon>\n        </ion-button> -->\n        <ion-button color=\"danger\" class=\"action-btn size-12\" (click)=\"logout()\">\n          <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </div>\n  <main class=\"main p-4 pt-5\">\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"4\" size-xl=\"3\" class=\"ion-margin-bottom\">\n        <ion-card mode=\"ios\" class=\"ion-no-margin d-grid-center ion-padding dashboard ion-activatable h-100 shadow-none\"\n          (click)=\"navTo('purchased-courses')\">\n          <ion-ripple-effect></ion-ripple-effect>\n          <ion-text color=\"dark\">\n            <p class=\"ion-text-center size-18 fw-bold\">Courses Subscribed</p>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"12\" size-lg=\"4\" size-xl=\"3\" class=\"ion-margin-bottom\">\n        <ion-card mode=\"ios\" class=\"ion-no-margin d-grid-center ion-padding dashboard ion-activatable h-100 shadow-none\"\n          (click)=\"navTo('courses')\">\n          <ion-ripple-effect></ion-ripple-effect>\n          <ion-text color=\"dark\">\n            <p class=\"ion-text-center size-18 fw-bold\">Courses</p>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"12\" size-lg=\"4\" size-xl=\"3\" class=\"ion-margin-bottom\">\n        <ion-card mode=\"ios\" class=\"ion-no-margin d-grid-center ion-padding dashboard ion-activatable h-100 shadow-none\"\n          (click)=\"navTo('about-us')\">\n          <ion-ripple-effect></ion-ripple-effect>\n          <ion-text color=\"dark\">\n            <p class=\"ion-text-center size-18 fw-bold\">About Gurukul</p>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"12\" size-lg=\"4\" size-xl=\"3\" class=\"ion-margin-bottom\">\n        <ion-card mode=\"ios\" class=\"ion-no-margin d-grid-center ion-padding dashboard ion-activatable h-100 shadow-none\"\n          (click)=\"navTo('help')\">\n          <ion-ripple-effect></ion-ripple-effect>\n          <ion-text color=\"dark\">\n            <p class=\"ion-text-center size-18 fw-bold\">Help</p>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n      <!-- <ion-col size=\"12\" size-lg=\"4\" size-xl=\"3\" class=\"ion-margin-bottom\">\n        <ion-card mode=\"ios\" class=\"ion-no-margin d-grid-center ion-padding dashboard ion-activatable h-100 shadow-none\"\n          (click)=\"navTo('progress')\">\n          <ion-ripple-effect></ion-ripple-effect>\n          <ion-text color=\"dark\">\n            <p class=\"ion-text-center size-18 fw-bold\">Gurukul Analysis</p>\n          </ion-text>\n        </ion-card>\n      </ion-col> -->\n      <!-- <ion-col size=\"12\" size-lg=\"4\" size-xl=\"3\" class=\"ion-margin-bottom\">\n        <ion-card mode=\"ios\" class=\"ion-no-margin d-grid-center ion-padding dashboard ion-activatable h-100 shadow-none\"\n          (click)=\"navTo('orders')\">\n          <ion-ripple-effect></ion-ripple-effect>\n          <ion-text color=\"dark\">\n            <p class=\"ion-text-center size-18 fw-bold\">Orders</p>\n          </ion-text>\n        </ion-card>\n      </ion-col> -->\n      <ion-col size=\"12\" size-lg=\"4\" size-xl=\"3\" class=\"ion-margin-bottom\" (click)=\"navTo('account')\">\n        <ion-card mode=\"ios\"\n          class=\"ion-no-margin d-grid-center ion-padding dashboard ion-activatable h-100 shadow-none\">\n          <ion-ripple-effect></ion-ripple-effect>\n          <ion-text color=\"dark\">\n            <p class=\"ion-text-center size-18 fw-bold\">Account</p>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-item class=\"bg-transparent\" lines=\"none\">\n      <ion-label class=\"ion-text-wrap\" color=\"white\">\n        <h1 class=\"fw-bold\">Gurukul</h1>\n        <ion-text color=\"dark\">\n          <p>M.G.Road. VIJAYAWADA - 520 010. Mobiles: +91 866 6626677. 8790006308. 8790006408.</p>\n          <p>Contact: <a href=\"mailto:gurukulforca@gmail.com\"\n              style=\"color: var(--ion-color-dark)\">gurukulforca@gmail.com</a></p>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n  </main>\n\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar color=\"medium\" (click)=\"openLink()\">\n    <p class=\"ion-text-center w-100 h-100\">\n      <ion-text color=\"white\">https://www.gurukulforca.com</ion-text>\n    </p>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dasboard_dasboard_module_ts.js.map