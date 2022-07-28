"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6280],{744:(S,m,a)=>{a.d(m,{M:()=>e});let e=(()=>{class s{}return s.COURSES="courses",s.ORDERS="orders",s.STUDENTS="students",s.TESTS="tests",s.MEDIA="media",s.SCHEDULES="schedules",s.QUESTION_PAPERS="question_papers",s.VALUED_ANSWER_SHEET="valued_answer_sheets",s.ANSWER_SHEET="answer_sheets",s.STUDENT_ACTIVITY="student_activity",s.NOTIFICATIONS="notifications",s})()},6280:(S,m,a)=>{a.r(m),a.d(m,{ForgotPasswordPageModule:()=>b});var e=a(6895),s=a(433),c=a(2346),g=a(1619),l=a(5861),t=a(8274),r=a(1228),o=a(9244),i=a(9763);function _(d,h){1&d&&(t.TgZ(0,"ion-note",22),t._uU(1," Email is invalid "),t.qZA())}function E(d,h){1&d&&(t.TgZ(0,"ion-note",22),t._uU(1," Password needs to be 6 characters "),t.qZA())}function T(d,h){1&d&&(t.TgZ(0,"ion-note",22),t._uU(1," Password needs to be 6 characters "),t.qZA())}const R=[{path:"",component:(()=>{class d{constructor(u,n,f,w,P,p,I){this.fb=u,this.authService=n,this.loadingController=f,this.alertController=w,this.router=P,this.dataService=p,this.commonService=I,this.isPasswordVisible=!1,this.createForm()}ngOnInit(){}createForm(){this.forgotPasswd=this.fb.group({email:[null,[s.kI.required,s.kI.email]],password:[null,[s.kI.required,s.kI.minLength(6)]],confirm_password:[null,[s.kI.required,s.kI.minLength(6)]]})}submit(){var u=this;return(0,l.Z)(function*(){const n=yield u.loadingController.create({message:"Please wait..."});yield n.present();const f={...u.forgotPasswd.value};if(f.password!==f.confirm_password)return yield n.dismiss(),void u.showAlert("Invalid password","Confirm Password doesn't match with the password");const w=u.dataService.checkStudent(f.email).subscribe(function(){var P=(0,l.Z)(function*(p){w.unsubscribe(),p.length>0?(delete f.confirm_password,delete f.email,u.dataService.updateStudent({...f,id:p[0].id}).then(function(){var y=(0,l.Z)(function*(v){yield n.dismiss(),u.commonService.presentToast("Password updated successfully.","light"),u.forgotPasswd.reset()});return function(v){return y.apply(this,arguments)}}(),function(){var y=(0,l.Z)(function*(v){yield n.dismiss(),console.error("Error while updating password:::::::::::\n",v),u.showAlert("","Unable to update password.")});return function(v){return y.apply(this,arguments)}}())):(yield n.dismiss(),u.showAlert("Invalid user","Unable to update password."))});return function(p){return P.apply(this,arguments)}}(),function(){var P=(0,l.Z)(function*(p){w.unsubscribe(),yield n.dismiss(),console.error("Error while checking the student::::::::::\n",p)});return function(p){return P.apply(this,arguments)}}())})()}cancel(){this.router.navigateByUrl("login",{replaceUrl:!0})}showPassword(){this.isPasswordVisible=!this.isPasswordVisible}showAlert(u,n){var f=this;return(0,l.Z)(function*(){yield(yield f.alertController.create({header:u,message:n,buttons:["OK"]})).present()})()}get email(){return this.forgotPasswd.get("email")}get password(){return this.forgotPasswd.get("password")}get confirmPassword(){return this.forgotPasswd.get("confirm_password")}}return d.\u0275fac=function(u){return new(u||d)(t.Y36(s.qu),t.Y36(r.e),t.Y36(c.HT),t.Y36(c.Br),t.Y36(g.F0),t.Y36(o.D),t.Y36(i.v))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-forgot-password"]],decls:32,vars:8,consts:[["color","white"],["color","white",1,"ion-no-border"],["color","white",1,"ion-text-center"],["src","../../../assets/icon.png",1,"logo"],[1,"main","p-4","pt-5"],[1,"size-18","fw-medium","m-0"],[1,"size-48","fw-bold","m-0","mb-5",2,"line-height","1.1"],[3,"formGroup","submit"],["color","white","input","","lines","none",1,"ion-margin-bottom"],["name","mail-outline","slot","start","color","dark"],["color","dark","type","email","placeholder","Email","formControlName","email"],["slot","error",4,"ngIf"],["color","dark","name","lock-closed-outline","slot","start"],["color","dark","type","password","placeholder","Password","formControlName","password"],["color","white","input","","lines","none",1,"mb-5"],["color","dark","placeholder","Confirm Password","formControlName","confirm_password",3,"type"],["slot","end"],[3,"hidden","click"],["color","dark","name","eye-outline","slot","icon-only"],["color","dark","name","eye-off-outline","slot","icon-only"],["type","submit","expand","block","color","dark",1,"shadow","mb-3","size-14",3,"disabled"],["expand","block","fill","clear","color","dark",1,"shadow-none","size-14",3,"click"],["slot","error"]],template:function(u,n){1&u&&(t.TgZ(0,"ion-content",0)(1,"ion-header",1)(2,"ion-toolbar",2),t._UZ(3,"ion-img",3),t.qZA()(),t.TgZ(4,"main",4)(5,"ion-text",0)(6,"p",5),t._uU(7,"Welcome to"),t.qZA(),t.TgZ(8,"p",6),t._uU(9,"Gurukul"),t.qZA()(),t.TgZ(10,"form",7),t.NdJ("submit",function(){return n.submit()}),t.TgZ(11,"ion-item",8),t._UZ(12,"ion-icon",9)(13,"ion-input",10),t.YNc(14,_,2,0,"ion-note",11),t.qZA(),t.TgZ(15,"ion-item",8),t._UZ(16,"ion-icon",12)(17,"ion-input",13),t.YNc(18,E,2,0,"ion-note",11),t.qZA(),t.TgZ(19,"ion-item",14),t._UZ(20,"ion-icon",12)(21,"ion-input",15),t.TgZ(22,"ion-buttons",16)(23,"ion-button",17),t.NdJ("click",function(){return n.showPassword()}),t._UZ(24,"ion-icon",18),t.qZA(),t.TgZ(25,"ion-button",17),t.NdJ("click",function(){return n.showPassword()}),t._UZ(26,"ion-icon",19),t.qZA()(),t.YNc(27,T,2,0,"ion-note",11),t.qZA(),t.TgZ(28,"ion-button",20),t._uU(29," Change Password "),t.qZA(),t.TgZ(30,"ion-button",21),t.NdJ("click",function(){return n.cancel()}),t._uU(31," Cancel and SignIn "),t.qZA()()()()),2&u&&(t.xp6(10),t.Q6J("formGroup",n.forgotPasswd),t.xp6(4),t.Q6J("ngIf",(n.email.dirty||n.email.touched)&&n.email.errors),t.xp6(4),t.Q6J("ngIf",(n.password.dirty||n.password.touched)&&n.password.errors),t.xp6(3),t.Q6J("type",n.isPasswordVisible?"text":"password"),t.xp6(2),t.Q6J("hidden",!n.isPasswordVisible),t.xp6(2),t.Q6J("hidden",n.isPasswordVisible),t.xp6(2),t.Q6J("ngIf",(n.confirmPassword.dirty||n.confirmPassword.touched)&&n.confirmPassword.errors),t.xp6(1),t.Q6J("disabled",!n.forgotPasswd.valid))},dependencies:[e.O5,s._Y,s.JJ,s.JL,c.YG,c.Sm,c.W2,c.Gu,c.gu,c.Xz,c.pK,c.Ie,c.uN,c.yW,c.sr,c.j9,s.sg,s.u],styles:["ion-header[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{height:150px}.main[_ngcontent-%COMP%]{--border-value: 50px;border-top-left-radius:var(--border-value);border-top-right-radius:var(--border-value);height:calc(100% - 150px);background:var(--ion-color-primary)}ion-item[input][_ngcontent-%COMP%]{--background: rgba(var(--ion-color-light-rgb), .5) !important}.sc-ion-input-md-h[_ngcontent-%COMP%]{--placeholder-color: var(--ion-color-dark) !important}.logo[_ngcontent-%COMP%]{height:130px}"]}),d})()}];let F=(()=>{class d{}return d.\u0275fac=function(u){return new(u||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[g.Bz.forChild(R),g.Bz]}),d})(),b=(()=>{class d{}return d.\u0275fac=function(u){return new(u||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[e.ez,s.u5,c.Pc,s.UX,F]}),d})()},9763:(S,m,a)=>{a.d(m,{v:()=>c});var e=a(8274),s=a(2346);let c=(()=>{class g{constructor(t,r){this.toastCtrl=t,this.navCtrl=r}presentToast(t="Please wait...",r="primary",o=3e3){this.toastCtrl.create({cssClass:"",color:r,duration:o,message:t}).then(i=>{i.present()},i=>{console.error("Error while toasting message",i)})}isValidData(t){return null!=t&&""!==t&&t!==[]&&0!==Object.keys(t).length}getExtension(t){let r=t.split(/[#?]/)[0].split(".").pop().trim();return["jpg","jpeg","png","gif","tiff","svg"].includes(r.toLowerCase())?r="image":["mp3","m4a","acc","ogg","wma","flac","alac"].includes(r.toLowerCase())?r="audio":["3gp","mp4","mov","wmv","flv","avi","avchd","webm","mkv"].includes(r.toLowerCase())?r="video":["zip","rar"].includes(r.toLowerCase())&&(r="archive"),r.toLowerCase()}navigateForward(t,r={}){this.navCtrl.navigateForward(t,{state:{...r}})}navigateBack(t,r={}){this.navCtrl.navigateBack(t,{state:{...r}})}navigateRoot(t,r={}){this.navCtrl.setDirection("root"),this.navCtrl.navigateRoot(t,{state:{...r}})}}return g.\u0275fac=function(t){return new(t||g)(e.LFG(s.yF),e.LFG(s.SH))},g.\u0275prov=e.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},9244:(S,m,a)=>{a.d(m,{D:()=>g});var e=a(3725),s=a(744),c=a(8274);let g=(()=>{class l{constructor(r){this.firestore=r}get(r){const o=(0,e.hJ)(this.firestore,r),i=(0,e.IO)(o,(0,e.Xo)("created_at","asc"));return(0,e.BS)(i,{idField:"id"})}getById(r,o){const i=(0,e.JU)(this.firestore,r+`/${o}`);return(0,e._1)(i,{idField:"id"})}getByUID(r,o){console.log(r,o);const i=(0,e.hJ)(this.firestore,r),_=(0,e.IO)(i,(0,e.ar)("uid","==",o),(0,e.Xo)("created_at","asc"));return(0,e.BS)(_,{idField:"id"})}add(r,o){const i=(0,e.hJ)(this.firestore,r);return(0,e.ET)(i,{...o,created_at:(0,e.Bt)()})}delete(r,o){const i=(0,e.JU)(this.firestore,r+`/${o.id}`);return r===s.M.MEDIA||r===s.M.MEDIA?(0,e.r7)(i,{media:(0,e.Ab)(o?.media),updated_at:(0,e.Bt)()}):(0,e.oe)(i)}update(r,o){const i=(0,e.JU)(this.firestore,r+`/${o.id}`);return(0,e.r7)(i,r===s.M.MEDIA||r===s.M.MEDIA?{media:(0,e.vr)(...o?.media),updated_at:(0,e.Bt)()}:{...o,updated_at:(0,e.Bt)()})}getCourses(){const r=(0,e.hJ)(this.firestore,"courses");return(0,e.BS)(r,{idField:"id"})}getCourseById(r){const o=(0,e.JU)(this.firestore,`courses/${r}`);return(0,e._1)(o,{idField:"id"})}getTests(r){const o=(0,e.hJ)(this.firestore,"tests"),i=(0,e.IO)(o,(0,e.ar)("course_id","==",r||""));return(0,e.BS)(i,{idField:"id"})}getTestById(r){const o=(0,e.JU)(this.firestore,`tests/${r}`);return(0,e._1)(o,{idField:"id"})}getValuedAnswerSheetByTestId(r,o){const i=(0,e.hJ)(this.firestore,s.M.VALUED_ANSWER_SHEET),_=(0,e.IO)(i,(0,e.ar)("test_id","==",r||""),(0,e.ar)("student_id","==",o||""));return(0,e.BS)(_,{idField:"id"})}getRemarksByTestId(r,o){const i=(0,e.hJ)(this.firestore,s.M.STUDENT_ACTIVITY),_=(0,e.IO)(i,(0,e.ar)("test_id","==",r||""),(0,e.ar)("student_id","==",o||""));return(0,e.BS)(_,{idField:"id"})}getAnswerSheetByTestId(r){const o=(0,e.hJ)(this.firestore,s.M.ANSWER_SHEET),i=(0,e.IO)(o,(0,e.ar)("test_id","==",r||""));return(0,e.BS)(i,{idField:"id"})}getScheduleByCourseId(r){const o=(0,e.hJ)(this.firestore,s.M.SCHEDULES),i=(0,e.IO)(o,(0,e.ar)("course_id","==",r));return(0,e.BS)(i,{idField:"id"})}getScheduleByTestId(r){const o=(0,e.hJ)(this.firestore,s.M.SCHEDULES),i=(0,e.IO)(o,(0,e.ar)("test_id","==",r||""));return(0,e.BS)(i,{idField:"id"})}getQuestionPaperByTestId(r){const o=(0,e.hJ)(this.firestore,s.M.QUESTION_PAPERS),i=(0,e.IO)(o,(0,e.ar)("test_id","==",r||""));return(0,e.BS)(i,{idField:"id"})}updateTest(r){const o=(0,e.JU)(this.firestore,`tests/${r.id}`);return(0,e.r7)(o,{...r,updated_at:(0,e.Bt)()})}getOrdersList(){const r=(0,e.hJ)(this.firestore,"orders"),o=(0,e.IO)(r,(0,e.ar)("student_id","==",localStorage.getItem("uid")||""));return(0,e.BS)(o,{idField:"id"})}getPurchasedOrders(){const r=(0,e.hJ)(this.firestore,"orders"),o=(0,e.IO)(r,(0,e.ar)("student_id","==",localStorage.getItem("student_id")||""),(0,e.ar)("status","==",!0));return(0,e.BS)(o,{idField:"id"})}getOrders(r){const o=(0,e.hJ)(this.firestore,"orders"),i=(0,e.IO)(o,(0,e.ar)("course_id","==",r.course_id||""),(0,e.ar)("student_id","==",r.student_id||""));return(0,e.PL)(i)}addOrder(r){const o=(0,e.hJ)(this.firestore,"orders");return(0,e.ET)(o,{...r,created_at:(0,e.Bt)()})}updateOrder(r){const o=(0,e.JU)(this.firestore,`orders/${r.id}`);return(0,e.r7)(o,{...r,updated_at:(0,e.Bt)()})}getStudentById(r){const o=(0,e.JU)(this.firestore,`students/${r}`);return(0,e._1)(o,{idField:"id"})}getStudent(r){const o=(0,e.hJ)(this.firestore,"students"),i=(0,e.IO)(o,(0,e.ar)("email","==",r.email||""),(0,e.ar)("password","==",r.password||""));return(0,e.BS)(i,{idField:"id"})}checkStudent(r){const o=(0,e.hJ)(this.firestore,s.M.STUDENTS),i=(0,e.IO)(o,(0,e.ar)("email","==",r));return(0,e.BS)(i,{idField:"id"})}addStudent(r){const o=(0,e.hJ)(this.firestore,"students");return(0,e.ET)(o,{...r,created_at:(0,e.Bt)()})}deleteStudent(r){const o=(0,e.JU)(this.firestore,`students/${r.id}`);return(0,e.oe)(o)}updateStudent(r){const o=(0,e.JU)(this.firestore,`students/${r.id}`);return(0,e.r7)(o,{...r,updated_at:(0,e.Bt)()})}}return l.\u0275fac=function(r){return new(r||l)(c.LFG(e.gg))},l.\u0275prov=c.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);