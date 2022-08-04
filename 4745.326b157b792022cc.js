"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4745],{744:(m,f,a)=>{a.d(f,{M:()=>e});let e=(()=>{class i{}return i.COURSES="courses",i.ORDERS="orders",i.STUDENTS="students",i.TESTS="tests",i.MEDIA="media",i.SCHEDULES="schedules",i.QUESTION_PAPERS="question_papers",i.VALUED_ANSWER_SHEET="valued_answer_sheets",i.ANSWER_SHEET="answer_sheets",i.STUDENT_ACTIVITY="student_activity",i.NOTIFICATIONS="notifications",i.CHAT_ROOM="chat_room",i.MESSAGES="messages",i})()},4745:(m,f,a)=>{a.r(f),a.d(f,{TestsPageModule:()=>p});var e=a(6895),i=a(433),n=a(2346),l=a(1619),r=a(8274),d=a(9244),t=a(9763),s=a(6857);function o(c,h){if(1&c&&(r.TgZ(0,"ion-col",12)(1,"ion-card",13)(2,"ion-card-content")(3,"ion-text",14)(4,"p"),r._uU(5),r.qZA()()()()()),2&c){const u=h.$implicit;r.xp6(5),r.Oqu(u.title)}}const E=[{path:"",component:(()=>{class c{constructor(u,g,_,v){this.dataService=u,this.cd=g,this.commonService=_,this.stateService=v,this.tests=[],this.dataService.getTests(this.stateService.getData("course")?.id||"").subscribe(R=>{this.tests=R,this.cd.detectChanges()}),this.dataService.getStudentById(localStorage.getItem("uid")||"").subscribe(R=>{this.student=R[0],localStorage.setItem("student",JSON.stringify(this.student)),this.cd.detectChanges()})}ngOnInit(){}buyCourse(){const u=this.stateService.getData("course")||{},g={course_id:u?.id,course_name:u?.title,course_desc:u?.description,student_id:localStorage.getItem("uid"),student_name:this.student.first_name+" "+this.student.last_name,status:!1};this.dataService.getOrders(g).then(_=>{_?.size>0?this.commonService.navigateForward("payment"):this.dataService.addOrder(g).then(v=>{v.id&&(this.stateService.setData("order_id",v.id),this.commonService.navigateForward("payment"))},v=>{console.error("Error while adding the order:::::\n",v),this.commonService.presentToast("Unable to create order","danger")})},_=>{console.error("Error while checking the order:::::\n",_),this.commonService.presentToast("Unable to check order","danger")})}}return c.\u0275fac=function(u){return new(u||c)(r.Y36(d.D),r.Y36(r.sBO),r.Y36(t.v),r.Y36(s.b))},c.\u0275cmp=r.Xpm({type:c,selectors:[["app-tests"]],decls:17,vars:3,consts:[[1,"ion-no-border",3,"translucent"],["color","white"],["slot","start"],["icon","chevron-back-outline","defaultHref","courses"],[1,"ion-padding",3,"fullscreen"],["collapse","condense"],["size","large"],[1,""],["size","6","size-lg","4","size-xl","3",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["name","card-outline"],["size","6","size-lg","4","size-xl","3"],["mode","ios",1,"ion-no-margin","h-100"],["color","dark"]],template:function(u,g){1&u&&(r.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),r._UZ(3,"ion-back-button",3),r.qZA(),r.TgZ(4,"ion-title"),r._uU(5," Tests "),r.qZA()()(),r.TgZ(6,"ion-content",4)(7,"ion-header",5)(8,"ion-toolbar",1)(9,"ion-title",6),r._uU(10,"Tests"),r.qZA()()(),r.TgZ(11,"ion-grid",7)(12,"ion-row",7),r.YNc(13,o,6,1,"ion-col",8),r.qZA()(),r.TgZ(14,"ion-fab",9)(15,"ion-fab-button",10),r.NdJ("click",function(){return g.buyCourse()}),r._UZ(16,"ion-icon",11),r.qZA()()()),2&u&&(r.Q6J("translucent",!0),r.xp6(6),r.Q6J("fullscreen",!0),r.xp6(7),r.Q6J("ngForOf",g.tests))},dependencies:[e.sg,n.oU,n.Sm,n.PM,n.FN,n.wI,n.W2,n.IJ,n.W4,n.jY,n.Gu,n.gu,n.Nd,n.yW,n.sr,n.wd,n.cs]}),c})()}];let T=(()=>{class c{}return c.\u0275fac=function(u){return new(u||c)},c.\u0275mod=r.oAB({type:c}),c.\u0275inj=r.cJS({imports:[l.Bz.forChild(E),l.Bz]}),c})(),p=(()=>{class c{}return c.\u0275fac=function(u){return new(u||c)},c.\u0275mod=r.oAB({type:c}),c.\u0275inj=r.cJS({imports:[e.ez,i.u5,n.Pc,T]}),c})()},9763:(m,f,a)=>{a.d(f,{v:()=>n});var e=a(8274),i=a(2346);let n=(()=>{class l{constructor(d,t){this.toastCtrl=d,this.navCtrl=t}presentToast(d="Please wait...",t="primary",s=3e3){this.toastCtrl.create({cssClass:"",color:t,duration:s,message:d}).then(o=>{o.present()},o=>{console.error("Error while toasting message",o)})}isValidData(d){return null!=d&&""!==d&&d!==[]&&0!==Object.keys(d).length}getExtension(d){let t=d.split(/[#?]/)[0].split(".").pop().trim();return["jpg","jpeg","png","gif","tiff","svg"].includes(t.toLowerCase())?t="image":["mp3","m4a","acc","ogg","wma","flac","alac"].includes(t.toLowerCase())?t="audio":["3gp","mp4","mov","wmv","flv","avi","avchd","webm","mkv"].includes(t.toLowerCase())?t="video":["zip","rar"].includes(t.toLowerCase())&&(t="archive"),t.toLowerCase()}navigateForward(d,t={}){this.navCtrl.navigateForward(d,{state:{...t}})}navigateBack(d,t={}){this.navCtrl.navigateBack(d,{state:{...t}})}navigateRoot(d,t={}){this.navCtrl.setDirection("root"),this.navCtrl.navigateRoot(d,{state:{...t}})}}return l.\u0275fac=function(d){return new(d||l)(e.LFG(i.yF),e.LFG(i.SH))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},9244:(m,f,a)=>{a.d(f,{D:()=>l});var e=a(3725),i=a(744),n=a(8274);let l=(()=>{class r{constructor(t){this.firestore=t}get(t){const s=(0,e.hJ)(this.firestore,t),o=(0,e.IO)(s,(0,e.Xo)("created_at","asc"));return(0,e.BS)(o,{idField:"id"})}getById(t,s){const o=(0,e.JU)(this.firestore,t+`/${s}`);return(0,e._1)(o,{idField:"id"})}getByUID(t,s){console.log(t,s);const o=(0,e.hJ)(this.firestore,t),S=(0,e.IO)(o,(0,e.ar)("uid","==",s),(0,e.Xo)("created_at","asc"));return(0,e.BS)(S,{idField:"id"})}add(t,s){const o=(0,e.hJ)(this.firestore,t);return(0,e.ET)(o,{...s,created_at:(0,e.Bt)()})}delete(t,s){const o=(0,e.JU)(this.firestore,t+`/${s.id}`);return t===i.M.MEDIA||t===i.M.MEDIA?(0,e.r7)(o,{media:(0,e.Ab)(s?.media),updated_at:(0,e.Bt)()}):(0,e.oe)(o)}update(t,s){const o=(0,e.JU)(this.firestore,t+`/${s.id}`);return(0,e.r7)(o,t===i.M.MEDIA||t===i.M.MEDIA?{media:(0,e.vr)(...s?.media),updated_at:(0,e.Bt)()}:{...s,updated_at:(0,e.Bt)()})}getCourses(){const t=(0,e.hJ)(this.firestore,i.M.COURSES),s=(0,e.IO)(t,(0,e.ar)("status","==","ACTIVE"));return(0,e.BS)(s,{idField:"id"})}getCourseById(t){const s=(0,e.JU)(this.firestore,`courses/${t}`);return(0,e._1)(s,{idField:"id"})}getTests(t){const s=(0,e.hJ)(this.firestore,"tests"),o=(0,e.IO)(s,(0,e.ar)("course_id","==",t||""));return(0,e.BS)(o,{idField:"id"})}getTestById(t){const s=(0,e.JU)(this.firestore,`tests/${t}`);return(0,e._1)(s,{idField:"id"})}getValuedAnswerSheetByTestId(t,s){const o=(0,e.hJ)(this.firestore,i.M.VALUED_ANSWER_SHEET),S=(0,e.IO)(o,(0,e.ar)("test_id","==",t||""),(0,e.ar)("student_id","==",s||""));return(0,e.BS)(S,{idField:"id"})}getRemarksByTestId(t,s){const o=(0,e.hJ)(this.firestore,i.M.STUDENT_ACTIVITY),S=(0,e.IO)(o,(0,e.ar)("test_id","==",t||""),(0,e.ar)("student_id","==",s||""));return(0,e.BS)(S,{idField:"id"})}getAnswerSheetByTestId(t){const s=(0,e.hJ)(this.firestore,i.M.ANSWER_SHEET),o=(0,e.IO)(s,(0,e.ar)("test_id","==",t||""));return(0,e.BS)(o,{idField:"id"})}getScheduleByCourseId(t){const s=(0,e.hJ)(this.firestore,i.M.SCHEDULES),o=(0,e.IO)(s,(0,e.ar)("course_id","==",t));return(0,e.BS)(o,{idField:"id"})}getScheduleByTestId(t){const s=(0,e.hJ)(this.firestore,i.M.SCHEDULES),o=(0,e.IO)(s,(0,e.ar)("test_id","==",t||""));return(0,e.BS)(o,{idField:"id"})}getQuestionPaperByTestId(t){const s=(0,e.hJ)(this.firestore,i.M.QUESTION_PAPERS),o=(0,e.IO)(s,(0,e.ar)("test_id","==",t||""));return(0,e.BS)(o,{idField:"id"})}updateTest(t){const s=(0,e.JU)(this.firestore,`tests/${t.id}`);return(0,e.r7)(s,{...t,updated_at:(0,e.Bt)()})}getOrdersList(){const t=(0,e.hJ)(this.firestore,"orders"),s=(0,e.IO)(t,(0,e.ar)("student_id","==",localStorage.getItem("uid")||""));return(0,e.BS)(s,{idField:"id"})}getPurchasedOrders(){const t=(0,e.hJ)(this.firestore,"orders"),s=(0,e.IO)(t,(0,e.ar)("student_id","==",localStorage.getItem("student_id")||""),(0,e.ar)("status","==",!0));return(0,e.BS)(s,{idField:"id"})}getOrders(t){const s=(0,e.hJ)(this.firestore,"orders"),o=(0,e.IO)(s,(0,e.ar)("course_id","==",t.course_id||""),(0,e.ar)("student_id","==",t.student_id||""));return(0,e.PL)(o)}addOrder(t){const s=(0,e.hJ)(this.firestore,"orders");return(0,e.ET)(s,{...t,created_at:(0,e.Bt)()})}updateOrder(t){const s=(0,e.JU)(this.firestore,`orders/${t.id}`);return(0,e.r7)(s,{...t,updated_at:(0,e.Bt)()})}getStudentById(t){const s=(0,e.JU)(this.firestore,`students/${t}`);return(0,e._1)(s,{idField:"id"})}getStudent(t){const s=(0,e.hJ)(this.firestore,"students"),o=(0,e.IO)(s,(0,e.ar)("email","==",t.email||""),(0,e.ar)("password","==",t.password||""));return(0,e.BS)(o,{idField:"id"})}checkStudent(t){const s=(0,e.hJ)(this.firestore,i.M.STUDENTS),o=(0,e.IO)(s,(0,e.ar)("email","==",t));return(0,e.BS)(o,{idField:"id"})}addStudent(t){const s=(0,e.hJ)(this.firestore,"students");return(0,e.ET)(s,{...t,created_at:(0,e.Bt)()})}deleteStudent(t){const s=(0,e.JU)(this.firestore,`students/${t.id}`);return(0,e.oe)(s)}updateStudent(t){const s=(0,e.JU)(this.firestore,`students/${t.id}`);return(0,e.r7)(s,{...t,updated_at:(0,e.Bt)()})}getChat(t){const s=(0,e.hJ)(this.firestore,i.M.CHAT_ROOM),o=(0,e.IO)(s,(0,e.ar)("chat_id","==",t));return(0,e.BS)(o,{idField:"id"})}getMessages(t){const s=(0,e.hJ)(this.firestore,i.M.MESSAGES),o=(0,e.IO)(s,(0,e.ar)("chat_id","==",t),(0,e.Xo)("created_at","asc"));return(0,e.BS)(o,{idField:"id"})}}return r.\u0275fac=function(t){return new(t||r)(n.LFG(e.gg))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},6857:(m,f,a)=>{a.d(f,{b:()=>i});var e=a(8274);let i=(()=>{class n{constructor(){this._data={}}getData(r){return this._data[r]}setData(r,d){this._data[r]=d}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);