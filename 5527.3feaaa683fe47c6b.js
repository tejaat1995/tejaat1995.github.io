"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5527],{744:(S,h,d)=>{d.d(h,{M:()=>e});let e=(()=>{class i{}return i.COURSES="courses",i.ORDERS="orders",i.STUDENTS="students",i.TESTS="tests",i.MEDIA="media",i.SCHEDULES="schedules",i.QUESTION_PAPERS="question_papers",i.VALUED_ANSWER_SHEET="valued_answer_sheets",i.ANSWER_SHEET="answer_sheets",i.STUDENT_ACTIVITY="student_activity",i.NOTIFICATIONS="notifications",i})()},5527:(S,h,d)=>{d.r(h),d.d(h,{PurchasedCoursesPageModule:()=>C});var e=d(6895),i=d(433),n=d(2346),l=d(1619),s=d(8274),a=d(9244),t=d(9763),r=d(6857),o=d(1228);function g(c,f){if(1&c){const u=s.EpF();s.TgZ(0,"ion-item",9),s.NdJ("click",function(){const p=s.CHM(u).$implicit,v=s.oxw();return s.KtG(v.openCourse(p))}),s.TgZ(1,"ion-label",10)(2,"h2",11),s._uU(3),s.qZA(),s.TgZ(4,"p",12),s._uU(5),s.qZA()()()}if(2&c){const u=f.$implicit;s.xp6(3),s.hij(" ",u.course_name," "),s.xp6(2),s.hij(" ",u.course_desc," ")}}const E=[{path:"",component:(()=>{class c{constructor(u,_,m,p,v,I){this.dataService=u,this.cd=_,this.alertCtrl=m,this.commonService=p,this.stateService=v,this.authService=I,this.orders=[],this.dataService.getPurchasedOrders().subscribe(P=>{this.orders=P,this.cd.detectChanges()})}ngOnInit(){}openCourse(u){this.stateService.setData("course",{id:u?.course_id,title:u?.course_name,description:u?.course_desc}),this.commonService.navigateForward("purchased-tests")}}return c.\u0275fac=function(u){return new(u||c)(s.Y36(a.D),s.Y36(s.sBO),s.Y36(n.Br),s.Y36(t.v),s.Y36(r.b),s.Y36(o.e))},c.\u0275cmp=s.Xpm({type:c,selectors:[["app-purchased-courses"]],decls:13,vars:3,consts:[[1,"ion-no-border",3,"translucent"],["color","white"],["slot","start"],["icon","chevron-back-outline","defaultHref","dashboard"],["color","white",3,"fullscreen"],["collapse","condense"],["size","large"],["lines","none","color","white"],["color","white","detail","","class","border-bottom ion-no-padding p-2 pl-3",3,"click",4,"ngFor","ngForOf"],["color","white","detail","",1,"border-bottom","ion-no-padding","p-2","pl-3",3,"click"],[1,"ion-text-wrap"],[1,"fw-semi-bold"],[1,"mt-2"]],template:function(u,_){1&u&&(s.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),s._UZ(3,"ion-back-button",3),s.qZA(),s.TgZ(4,"ion-title"),s._uU(5," Courses Subscribed "),s.qZA()()(),s.TgZ(6,"ion-content",4)(7,"ion-header",5)(8,"ion-toolbar",1)(9,"ion-title",6),s._uU(10,"Courses"),s.qZA()()(),s.TgZ(11,"ion-list",7),s.YNc(12,g,6,2,"ion-item",8),s.qZA()()),2&u&&(s.Q6J("translucent",!0),s.xp6(6),s.Q6J("fullscreen",!0),s.xp6(6),s.Q6J("ngForOf",_.orders))},dependencies:[e.sg,n.oU,n.Sm,n.W2,n.Gu,n.Ie,n.Q$,n.q_,n.sr,n.wd,n.cs]}),c})()}];let R=(()=>{class c{}return c.\u0275fac=function(u){return new(u||c)},c.\u0275mod=s.oAB({type:c}),c.\u0275inj=s.cJS({imports:[l.Bz.forChild(E),l.Bz]}),c})(),C=(()=>{class c{}return c.\u0275fac=function(u){return new(u||c)},c.\u0275mod=s.oAB({type:c}),c.\u0275inj=s.cJS({imports:[e.ez,i.u5,n.Pc,R]}),c})()},9763:(S,h,d)=>{d.d(h,{v:()=>n});var e=d(8274),i=d(2346);let n=(()=>{class l{constructor(a,t){this.toastCtrl=a,this.navCtrl=t}presentToast(a="Please wait...",t="primary",r=3e3){this.toastCtrl.create({cssClass:"",color:t,duration:r,message:a}).then(o=>{o.present()},o=>{console.error("Error while toasting message",o)})}isValidData(a){return null!=a&&""!==a&&a!==[]&&0!==Object.keys(a).length}getExtension(a){let t=a.split(/[#?]/)[0].split(".").pop().trim();return["jpg","jpeg","png","gif","tiff","svg"].includes(t.toLowerCase())?t="image":["mp3","m4a","acc","ogg","wma","flac","alac"].includes(t.toLowerCase())?t="audio":["3gp","mp4","mov","wmv","flv","avi","avchd","webm","mkv"].includes(t.toLowerCase())?t="video":["zip","rar"].includes(t.toLowerCase())&&(t="archive"),t.toLowerCase()}navigateForward(a,t={}){this.navCtrl.navigateForward(a,{state:{...t}})}navigateBack(a,t={}){this.navCtrl.navigateBack(a,{state:{...t}})}navigateRoot(a,t={}){this.navCtrl.setDirection("root"),this.navCtrl.navigateRoot(a,{state:{...t}})}}return l.\u0275fac=function(a){return new(a||l)(e.LFG(i.yF),e.LFG(i.SH))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},9244:(S,h,d)=>{d.d(h,{D:()=>l});var e=d(3725),i=d(744),n=d(8274);let l=(()=>{class s{constructor(t){this.firestore=t}get(t){const r=(0,e.hJ)(this.firestore,t),o=(0,e.IO)(r,(0,e.Xo)("created_at","asc"));return(0,e.BS)(o,{idField:"id"})}getById(t,r){const o=(0,e.JU)(this.firestore,t+`/${r}`);return(0,e._1)(o,{idField:"id"})}getByUID(t,r){console.log(t,r);const o=(0,e.hJ)(this.firestore,t),g=(0,e.IO)(o,(0,e.ar)("uid","==",r),(0,e.Xo)("created_at","asc"));return(0,e.BS)(g,{idField:"id"})}add(t,r){const o=(0,e.hJ)(this.firestore,t);return(0,e.ET)(o,{...r,created_at:(0,e.Bt)()})}delete(t,r){const o=(0,e.JU)(this.firestore,t+`/${r.id}`);return t===i.M.MEDIA||t===i.M.MEDIA?(0,e.r7)(o,{media:(0,e.Ab)(r?.media),updated_at:(0,e.Bt)()}):(0,e.oe)(o)}update(t,r){const o=(0,e.JU)(this.firestore,t+`/${r.id}`);return(0,e.r7)(o,t===i.M.MEDIA||t===i.M.MEDIA?{media:(0,e.vr)(...r?.media),updated_at:(0,e.Bt)()}:{...r,updated_at:(0,e.Bt)()})}getCourses(){const t=(0,e.hJ)(this.firestore,"courses");return(0,e.BS)(t,{idField:"id"})}getCourseById(t){const r=(0,e.JU)(this.firestore,`courses/${t}`);return(0,e._1)(r,{idField:"id"})}getTests(t){const r=(0,e.hJ)(this.firestore,"tests"),o=(0,e.IO)(r,(0,e.ar)("course_id","==",t||""));return(0,e.BS)(o,{idField:"id"})}getTestById(t){const r=(0,e.JU)(this.firestore,`tests/${t}`);return(0,e._1)(r,{idField:"id"})}getValuedAnswerSheetByTestId(t,r){const o=(0,e.hJ)(this.firestore,i.M.VALUED_ANSWER_SHEET),g=(0,e.IO)(o,(0,e.ar)("test_id","==",t||""),(0,e.ar)("student_id","==",r||""));return(0,e.BS)(g,{idField:"id"})}getRemarksByTestId(t,r){const o=(0,e.hJ)(this.firestore,i.M.STUDENT_ACTIVITY),g=(0,e.IO)(o,(0,e.ar)("test_id","==",t||""),(0,e.ar)("student_id","==",r||""));return(0,e.BS)(g,{idField:"id"})}getAnswerSheetByTestId(t){const r=(0,e.hJ)(this.firestore,i.M.ANSWER_SHEET),o=(0,e.IO)(r,(0,e.ar)("test_id","==",t||""));return(0,e.BS)(o,{idField:"id"})}getScheduleByCourseId(t){const r=(0,e.hJ)(this.firestore,i.M.SCHEDULES),o=(0,e.IO)(r,(0,e.ar)("course_id","==",t));return(0,e.BS)(o,{idField:"id"})}getScheduleByTestId(t){const r=(0,e.hJ)(this.firestore,i.M.SCHEDULES),o=(0,e.IO)(r,(0,e.ar)("test_id","==",t||""));return(0,e.BS)(o,{idField:"id"})}getQuestionPaperByTestId(t){const r=(0,e.hJ)(this.firestore,i.M.QUESTION_PAPERS),o=(0,e.IO)(r,(0,e.ar)("test_id","==",t||""));return(0,e.BS)(o,{idField:"id"})}updateTest(t){const r=(0,e.JU)(this.firestore,`tests/${t.id}`);return(0,e.r7)(r,{...t,updated_at:(0,e.Bt)()})}getOrdersList(){const t=(0,e.hJ)(this.firestore,"orders"),r=(0,e.IO)(t,(0,e.ar)("student_id","==",localStorage.getItem("uid")||""));return(0,e.BS)(r,{idField:"id"})}getPurchasedOrders(){const t=(0,e.hJ)(this.firestore,"orders"),r=(0,e.IO)(t,(0,e.ar)("student_id","==",localStorage.getItem("student_id")||""),(0,e.ar)("status","==",!0));return(0,e.BS)(r,{idField:"id"})}getOrders(t){const r=(0,e.hJ)(this.firestore,"orders"),o=(0,e.IO)(r,(0,e.ar)("course_id","==",t.course_id||""),(0,e.ar)("student_id","==",t.student_id||""));return(0,e.PL)(o)}addOrder(t){const r=(0,e.hJ)(this.firestore,"orders");return(0,e.ET)(r,{...t,created_at:(0,e.Bt)()})}updateOrder(t){const r=(0,e.JU)(this.firestore,`orders/${t.id}`);return(0,e.r7)(r,{...t,updated_at:(0,e.Bt)()})}getStudentById(t){const r=(0,e.JU)(this.firestore,`students/${t}`);return(0,e._1)(r,{idField:"id"})}getStudent(t){const r=(0,e.hJ)(this.firestore,"students"),o=(0,e.IO)(r,(0,e.ar)("email","==",t.email||""),(0,e.ar)("password","==",t.password||""));return(0,e.BS)(o,{idField:"id"})}checkStudent(t){const r=(0,e.hJ)(this.firestore,i.M.STUDENTS),o=(0,e.IO)(r,(0,e.ar)("email","==",t));return(0,e.BS)(o,{idField:"id"})}addStudent(t){const r=(0,e.hJ)(this.firestore,"students");return(0,e.ET)(r,{...t,created_at:(0,e.Bt)()})}deleteStudent(t){const r=(0,e.JU)(this.firestore,`students/${t.id}`);return(0,e.oe)(r)}updateStudent(t){const r=(0,e.JU)(this.firestore,`students/${t.id}`);return(0,e.r7)(r,{...t,updated_at:(0,e.Bt)()})}}return s.\u0275fac=function(t){return new(t||s)(n.LFG(e.gg))},s.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},6857:(S,h,d)=>{d.d(h,{b:()=>i});var e=d(8274);let i=(()=>{class n{constructor(){this._data={}}getData(s){return this._data[s]}setData(s,a){this._data[s]=a}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);