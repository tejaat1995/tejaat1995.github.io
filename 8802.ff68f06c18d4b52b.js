"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8802],{744:(v,m,l)=>{l.d(m,{M:()=>e});let e=(()=>{class s{}return s.COURSES="courses",s.ORDERS="orders",s.STUDENTS="students",s.TESTS="tests",s.MEDIA="media",s.SCHEDULES="schedules",s.QUESTION_PAPERS="question_papers",s.VALUED_ANSWER_SHEET="valued_answer_sheets",s.ANSWER_SHEET="answer_sheets",s.STUDENT_ACTIVITY="student_activity",s.NOTIFICATIONS="notifications",s.CHAT_ROOM="chat_room",s.MESSAGES="messages",s})()},8802:(v,m,l)=>{l.r(m),l.d(m,{LoginPageModule:()=>R});var e=l(6895),s=l(433),u=l(2346),h=l(1619),g=l(5861),t=l(8274),r=l(1228),o=l(9244),i=l(9763);function S(d,p){1&d&&(t.TgZ(0,"ion-note",24),t._uU(1," Email is invalid "),t.qZA())}function y(d,p){1&d&&(t.TgZ(0,"ion-note",24),t._uU(1," Password needs to be 6 characters "),t.qZA())}const E=[{path:"",component:(()=>{class d{constructor(n,a,c,_,f,T,I){this.fb=n,this.authService=a,this.loadingController=c,this.alertController=_,this.router=f,this.dataService=T,this.commonService=I,this.isPasswordVisible=!1,this.isFormLoaded=!1}ngOnInit(){this.createForm()}ionViewWillEnter(){!1===this.isFormLoaded&&this.createForm(),this.isFormLoaded=!1}createForm(){this.loginForm=this.fb.group({email:[null,[s.kI.required,s.kI.email]],password:[null,[s.kI.required,s.kI.minLength(6)]]}),this.isFormLoaded=!0}register(){this.router.navigateByUrl("/register")}login(){var n=this;return(0,g.Z)(function*(){const a=yield n.loadingController.create({message:"signing"});yield a.present();const c=yield n.authService.login(n.loginForm.value);if(console.log("user::::::::::\n",c),"auth/user-not-found"===c.code)return n.commonService.presentToast("Email doesn't exists with us","danger"),void(yield a.dismiss());if("auth/wrong-password"===c.code)return n.commonService.presentToast("Invalid Password","danger"),void(yield a.dismiss());if(c)try{n.dataService.checkStudent(n.loginForm.value.email).subscribe(function(){var _=(0,g.Z)(function*(f){yield a.dismiss(),f.length<=0||"{}"===JSON.stringify(f)?n.showAlert("Login failed","Please try again!"):(localStorage.setItem("uid",c.user.uid),localStorage.setItem("student",JSON.stringify(f[0])),localStorage.setItem("student_id",f[0].id),n.router.navigateByUrl("dashboard",{replaceUrl:!0}))});return function(f){return _.apply(this,arguments)}}(),function(){var _=(0,g.Z)(function*(f){console.error("Error while logging::::::::\n",f),yield a.dismiss(),n.showAlert("Login failed","Please try again!"),n.logout()});return function(f){return _.apply(this,arguments)}}())}catch(_){console.error("Exception while logging::::::::\n",_),n.logout()}else yield a.dismiss(),n.showAlert("Login failed","Please try again!"),n.logout()})()}showPassword(){this.isPasswordVisible=!this.isPasswordVisible}forgotPasswd(){this.router.navigateByUrl("forgot-password")}logout(){this.authService.logout().then(n=>{localStorage.clear(),this.router.navigateByUrl("login",{replaceUrl:!0})},n=>{console.error("Error while logout:::::::::\n",n),this.commonService.presentToast("Unable to logout","danger")})}showAlert(n,a){var c=this;return(0,g.Z)(function*(){yield(yield c.alertController.create({header:n,message:a,buttons:["OK"]})).present()})()}get email(){return this.loginForm.get("email")}get password(){return this.loginForm.get("password")}ionViewWillLeave(){this.loginForm.reset(),this.isPasswordVisible=!1,this.createForm()}}return d.\u0275fac=function(n){return new(n||d)(t.Y36(s.qu),t.Y36(r.e),t.Y36(u.HT),t.Y36(u.Br),t.Y36(h.F0),t.Y36(o.D),t.Y36(i.v))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-login"]],decls:35,vars:7,consts:[["color","white"],["color","white",1,"ion-no-border"],["color","white",1,"ion-text-center"],["src","../../../assets/logo text.jpg",1,"logo"],[1,"main","p-4","pt-5"],[1,"size-18","fw-medium","m-0"],[1,"size-48","fw-bold","m-0","mb-5",2,"line-height","1.1"],[3,"formGroup","submit"],["color","white","input","","lines","none",1,"ion-margin-bottom"],["name","mail-outline","slot","start","color","dark"],["color","dark","type","email","placeholder","Email","formControlName","email"],["slot","error",4,"ngIf"],["color","dark","name","lock-closed-outline","slot","start"],["color","dark","placeholder","Password","formControlName","password",3,"type"],["slot","end"],[3,"hidden","click"],["color","dark","name","eye-outline","slot","icon-only"],["color","dark","name","eye-off-outline","slot","icon-only"],[1,"ion-text-end","mb-3"],[3,"click"],["type","submit","expand","block","color","dark",1,"shadow",3,"disabled"],[1,"ion-text-center","mt-6"],["color","dark"],[2,"color","var(--ion-color-white) !important",3,"click"],["slot","error"]],template:function(n,a){1&n&&(t.TgZ(0,"ion-content",0)(1,"ion-header",1)(2,"ion-toolbar",2),t._UZ(3,"ion-img",3),t.qZA()(),t.TgZ(4,"main",4)(5,"ion-text",0)(6,"p",5),t._uU(7,"Welcome to"),t.qZA(),t.TgZ(8,"p",6),t._uU(9,"Gurukul For CA & CMA"),t.qZA()(),t.TgZ(10,"form",7),t.NdJ("submit",function(){return a.login()}),t.TgZ(11,"ion-item",8),t._UZ(12,"ion-icon",9)(13,"ion-input",10),t.YNc(14,S,2,0,"ion-note",11),t.qZA(),t.TgZ(15,"ion-item",8),t._UZ(16,"ion-icon",12)(17,"ion-input",13),t.TgZ(18,"ion-buttons",14)(19,"ion-button",15),t.NdJ("click",function(){return a.showPassword()}),t._UZ(20,"ion-icon",16),t.qZA(),t.TgZ(21,"ion-button",15),t.NdJ("click",function(){return a.showPassword()}),t._UZ(22,"ion-icon",17),t.qZA()(),t.YNc(23,y,2,0,"ion-note",11),t.qZA(),t.TgZ(24,"div",18)(25,"a",19),t.NdJ("click",function(){return a.forgotPasswd()}),t.TgZ(26,"ion-text",0),t._uU(27,"Forgot Password?"),t.qZA()()(),t.TgZ(28,"ion-button",20),t._uU(29," Log in "),t.qZA(),t.TgZ(30,"p",21)(31,"ion-text",22),t._uU(32," Don't have an account? "),t.TgZ(33,"a",23),t.NdJ("click",function(){return a.register()}),t._uU(34,"Create one"),t.qZA()()()()()()),2&n&&(t.xp6(10),t.Q6J("formGroup",a.loginForm),t.xp6(4),t.Q6J("ngIf",(a.email.dirty||a.email.touched)&&a.email.errors),t.xp6(3),t.Q6J("type",a.isPasswordVisible?"text":"password"),t.xp6(2),t.Q6J("hidden",!a.isPasswordVisible),t.xp6(2),t.Q6J("hidden",a.isPasswordVisible),t.xp6(2),t.Q6J("ngIf",(a.password.dirty||a.password.touched)&&a.password.errors),t.xp6(5),t.Q6J("disabled",!a.loginForm.valid))},dependencies:[e.O5,s._Y,s.JJ,s.JL,s.sg,s.u,u.YG,u.Sm,u.W2,u.Gu,u.gu,u.Xz,u.pK,u.Ie,u.uN,u.yW,u.sr,u.j9],styles:["ion-header[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{height:150px}.main[_ngcontent-%COMP%]{--border-value: 50px;border-top-left-radius:var(--border-value);border-top-right-radius:var(--border-value);height:calc(100% - 150px);background:var(--ion-color-primary)}ion-item[input][_ngcontent-%COMP%]{--background: rgba(var(--ion-color-light-rgb), .5) !important}.sc-ion-input-md-h[_ngcontent-%COMP%]{--placeholder-color: var(--ion-color-dark) !important}.logo[_ngcontent-%COMP%]{height:130px}"]}),d})()}];let P=(()=>{class d{}return d.\u0275fac=function(n){return new(n||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[h.Bz.forChild(E),h.Bz]}),d})(),R=(()=>{class d{}return d.\u0275fac=function(n){return new(n||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[e.ez,s.u5,s.UX,u.Pc,P]}),d})()},9763:(v,m,l)=>{l.d(m,{v:()=>u});var e=l(8274),s=l(2346);let u=(()=>{class h{constructor(t,r){this.toastCtrl=t,this.navCtrl=r}presentToast(t="Please wait...",r="primary",o=3e3){this.toastCtrl.create({cssClass:"",color:r,duration:o,message:t}).then(i=>{i.present()},i=>{console.error("Error while toasting message",i)})}isValidData(t){return null!=t&&""!==t&&t!==[]&&0!==Object.keys(t).length}getExtension(t){let r=t.split(/[#?]/)[0].split(".").pop().trim();return["jpg","jpeg","png","gif","tiff","svg"].includes(r.toLowerCase())?r="image":["mp3","m4a","acc","ogg","wma","flac","alac"].includes(r.toLowerCase())?r="audio":["3gp","mp4","mov","wmv","flv","avi","avchd","webm","mkv"].includes(r.toLowerCase())?r="video":["zip","rar"].includes(r.toLowerCase())&&(r="archive"),r.toLowerCase()}navigateForward(t,r={}){this.navCtrl.navigateForward(t,{state:{...r}})}navigateBack(t,r={}){this.navCtrl.navigateBack(t,{state:{...r}})}navigateRoot(t,r={}){this.navCtrl.setDirection("root"),this.navCtrl.navigateRoot(t,{state:{...r}})}}return h.\u0275fac=function(t){return new(t||h)(e.LFG(s.yF),e.LFG(s.SH))},h.\u0275prov=e.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},9244:(v,m,l)=>{l.d(m,{D:()=>h});var e=l(3725),s=l(744),u=l(8274);let h=(()=>{class g{constructor(r){this.firestore=r}get(r){const o=(0,e.hJ)(this.firestore,r),i=(0,e.IO)(o,(0,e.Xo)("created_at","asc"));return(0,e.BS)(i,{idField:"id"})}getById(r,o){const i=(0,e.JU)(this.firestore,r+`/${o}`);return(0,e._1)(i,{idField:"id"})}getByUID(r,o){console.log(r,o);const i=(0,e.hJ)(this.firestore,r),S=(0,e.IO)(i,(0,e.ar)("uid","==",o),(0,e.Xo)("created_at","asc"));return(0,e.BS)(S,{idField:"id"})}add(r,o){const i=(0,e.hJ)(this.firestore,r);return(0,e.ET)(i,{...o,created_at:(0,e.Bt)()})}delete(r,o){const i=(0,e.JU)(this.firestore,r+`/${o.id}`);return r===s.M.MEDIA||r===s.M.MEDIA?(0,e.r7)(i,{media:(0,e.Ab)(o?.media),updated_at:(0,e.Bt)()}):(0,e.oe)(i)}update(r,o){const i=(0,e.JU)(this.firestore,r+`/${o.id}`);return(0,e.r7)(i,r===s.M.MEDIA||r===s.M.MEDIA?{media:(0,e.vr)(...o?.media),updated_at:(0,e.Bt)()}:{...o,updated_at:(0,e.Bt)()})}getCourses(){const r=(0,e.hJ)(this.firestore,"courses");return(0,e.BS)(r,{idField:"id"})}getCourseById(r){const o=(0,e.JU)(this.firestore,`courses/${r}`);return(0,e._1)(o,{idField:"id"})}getTests(r){const o=(0,e.hJ)(this.firestore,"tests"),i=(0,e.IO)(o,(0,e.ar)("course_id","==",r||""));return(0,e.BS)(i,{idField:"id"})}getTestById(r){const o=(0,e.JU)(this.firestore,`tests/${r}`);return(0,e._1)(o,{idField:"id"})}getValuedAnswerSheetByTestId(r,o){const i=(0,e.hJ)(this.firestore,s.M.VALUED_ANSWER_SHEET),S=(0,e.IO)(i,(0,e.ar)("test_id","==",r||""),(0,e.ar)("student_id","==",o||""));return(0,e.BS)(S,{idField:"id"})}getRemarksByTestId(r,o){const i=(0,e.hJ)(this.firestore,s.M.STUDENT_ACTIVITY),S=(0,e.IO)(i,(0,e.ar)("test_id","==",r||""),(0,e.ar)("student_id","==",o||""));return(0,e.BS)(S,{idField:"id"})}getAnswerSheetByTestId(r){const o=(0,e.hJ)(this.firestore,s.M.ANSWER_SHEET),i=(0,e.IO)(o,(0,e.ar)("test_id","==",r||""));return(0,e.BS)(i,{idField:"id"})}getScheduleByCourseId(r){const o=(0,e.hJ)(this.firestore,s.M.SCHEDULES),i=(0,e.IO)(o,(0,e.ar)("course_id","==",r));return(0,e.BS)(i,{idField:"id"})}getScheduleByTestId(r){const o=(0,e.hJ)(this.firestore,s.M.SCHEDULES),i=(0,e.IO)(o,(0,e.ar)("test_id","==",r||""));return(0,e.BS)(i,{idField:"id"})}getQuestionPaperByTestId(r){const o=(0,e.hJ)(this.firestore,s.M.QUESTION_PAPERS),i=(0,e.IO)(o,(0,e.ar)("test_id","==",r||""));return(0,e.BS)(i,{idField:"id"})}updateTest(r){const o=(0,e.JU)(this.firestore,`tests/${r.id}`);return(0,e.r7)(o,{...r,updated_at:(0,e.Bt)()})}getOrdersList(){const r=(0,e.hJ)(this.firestore,"orders"),o=(0,e.IO)(r,(0,e.ar)("student_id","==",localStorage.getItem("uid")||""));return(0,e.BS)(o,{idField:"id"})}getPurchasedOrders(){const r=(0,e.hJ)(this.firestore,"orders"),o=(0,e.IO)(r,(0,e.ar)("student_id","==",localStorage.getItem("student_id")||""),(0,e.ar)("status","==",!0));return(0,e.BS)(o,{idField:"id"})}getOrders(r){const o=(0,e.hJ)(this.firestore,"orders"),i=(0,e.IO)(o,(0,e.ar)("course_id","==",r.course_id||""),(0,e.ar)("student_id","==",r.student_id||""));return(0,e.PL)(i)}addOrder(r){const o=(0,e.hJ)(this.firestore,"orders");return(0,e.ET)(o,{...r,created_at:(0,e.Bt)()})}updateOrder(r){const o=(0,e.JU)(this.firestore,`orders/${r.id}`);return(0,e.r7)(o,{...r,updated_at:(0,e.Bt)()})}getStudentById(r){const o=(0,e.JU)(this.firestore,`students/${r}`);return(0,e._1)(o,{idField:"id"})}getStudent(r){const o=(0,e.hJ)(this.firestore,"students"),i=(0,e.IO)(o,(0,e.ar)("email","==",r.email||""),(0,e.ar)("password","==",r.password||""));return(0,e.BS)(i,{idField:"id"})}checkStudent(r){const o=(0,e.hJ)(this.firestore,s.M.STUDENTS),i=(0,e.IO)(o,(0,e.ar)("email","==",r));return(0,e.BS)(i,{idField:"id"})}addStudent(r){const o=(0,e.hJ)(this.firestore,"students");return(0,e.ET)(o,{...r,created_at:(0,e.Bt)()})}deleteStudent(r){const o=(0,e.JU)(this.firestore,`students/${r.id}`);return(0,e.oe)(o)}updateStudent(r){const o=(0,e.JU)(this.firestore,`students/${r.id}`);return(0,e.r7)(o,{...r,updated_at:(0,e.Bt)()})}getChat(r){const o=(0,e.hJ)(this.firestore,s.M.CHAT_ROOM),i=(0,e.IO)(o,(0,e.ar)("chat_id","==",r));return(0,e.BS)(i,{idField:"id"})}getMessages(r){const o=(0,e.hJ)(this.firestore,s.M.MESSAGES),i=(0,e.IO)(o,(0,e.ar)("chat_id","==",r),(0,e.Xo)("created_at","asc"));return(0,e.BS)(i,{idField:"id"})}}return g.\u0275fac=function(r){return new(r||g)(u.LFG(e.gg))},g.\u0275prov=u.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);