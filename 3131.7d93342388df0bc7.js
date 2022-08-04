"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3131],{744:(y,h,a)=>{a.d(h,{M:()=>e});let e=(()=>{class n{}return n.COURSES="courses",n.ORDERS="orders",n.STUDENTS="students",n.TESTS="tests",n.MEDIA="media",n.SCHEDULES="schedules",n.QUESTION_PAPERS="question_papers",n.VALUED_ANSWER_SHEET="valued_answer_sheets",n.ANSWER_SHEET="answer_sheets",n.STUDENT_ACTIVITY="student_activity",n.NOTIFICATIONS="notifications",n.CHAT_ROOM="chat_room",n.MESSAGES="messages",n})()},3131:(y,h,a)=>{a.r(h),a.d(h,{PaymentPageModule:()=>I});var e=a(6895),n=a(433),i=a(2346),l=a(1619),c=a(5861),r=a(8274),t=a(9244),s=a(6857),o=a(6578),p=a(9763);function v(d,m){if(1&d){const u=r.EpF();r.TgZ(0,"ion-item",12)(1,"ion-label")(2,"ion-text"),r._uU(3),r.qZA()(),r.TgZ(4,"ion-buttons",13),r.NdJ("click",function(){r.CHM(u);const _=r.oxw();return r.KtG(_.copyURL())}),r.TgZ(5,"ion-button"),r._UZ(6,"ion-icon",14),r.qZA()()()}if(2&d){const u=r.oxw();r.xp6(3),r.hij(" ",u.uploadedURL||1234," ")}}const E=[{path:"",component:(()=>{class d{constructor(u,f,_,S,g){this.dataService=u,this.stateService=f,this.storageService=_,this.loadingCtrl=S,this.commonService=g}ngOnInit(){}copyURL(){navigator.clipboard.writeText(this.uploadedURL)}fileSelected(u){var f=this;return(0,c.Z)(function*(){const _=u.target.files[0],S=yield f.loadingCtrl.create({message:"Uploading payment info"});S.present();const g=yield f.storageService.pushFileToStorage({file:_,name:_.name});g&&g.file_url?(f.uploadedURL=g.file_url,yield f.dataService.updateOrder({payment_id:g.file_url,id:localStorage.getItem("order_id")||""}).then(R=>{f.commonService.presentToast("Updated the payment status.","primary")},R=>{console.error("Error while adding the test:::::\n",R),f.commonService.presentToast("Unable to update order","danger")}),S.dismiss()):(console.error("Error while uploading file:::::::::::\n",g),S.dismiss())})()}}return d.\u0275fac=function(u){return new(u||d)(r.Y36(t.D),r.Y36(s.b),r.Y36(o.V),r.Y36(i.HT),r.Y36(p.v))},d.\u0275cmp=r.Xpm({type:d,selectors:[["app-payment"]],decls:35,vars:2,consts:[[1,"ion-no-border",3,"translucent"],["color","white"],["slot","start"],["icon","chevron-back-outline","defaultHref","tests"],["color","white",1,"ion-padding"],["slot","end","color","danger"],["color","danger"],["color","white","lines","none","color","light","class","url",4,"ngIf"],["type","file","id","fileInput",3,"change"],["f",""],["for","fileInput","expand","full","size","large",1,"ion-no-margin",3,"click"],[2,"font-size","14px"],["color","white","lines","none","color","light",1,"url"],["slot","end",3,"click"],["slot","icon-only","color","dark","name","copy-outline"]],template:function(u,f){if(1&u){const _=r.EpF();r.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),r._UZ(3,"ion-back-button",3),r.qZA(),r.TgZ(4,"ion-title"),r._uU(5," Payment "),r.qZA()()(),r.TgZ(6,"ion-content",4)(7,"ion-item")(8,"ion-label"),r._uU(9,"UPI"),r.qZA(),r.TgZ(10,"ion-note",5),r._uU(11,"XXXXXX"),r.qZA()(),r.TgZ(12,"ion-item")(13,"ion-label")(14,"h2"),r._uU(15,"Net Banking"),r.qZA(),r.TgZ(16,"ion-note",6),r._uU(17," XXXXXXXXXXXX"),r._UZ(18,"br"),r._uU(19," XXXXXX"),r._UZ(20,"br"),r._uU(21," XXXXXXXX "),r.qZA()()(),r.TgZ(22,"ion-item")(23,"ion-label"),r._uU(24,"Contact US"),r.qZA(),r.TgZ(25,"ion-note",5),r._uU(26,"+91-9988776655"),r.qZA()(),r.YNc(27,v,7,1,"ion-item",7),r.qZA(),r.TgZ(28,"ion-footer")(29,"ion-toolbar",1)(30,"input",8,9),r.NdJ("change",function(g){return f.fileSelected(g)}),r.qZA(),r.TgZ(32,"ion-button",10),r.NdJ("click",function(){r.CHM(_);const g=r.MAs(31);return r.KtG(g.click())}),r.TgZ(33,"span",11),r._uU(34,"Upload payment acknowledgement"),r.qZA()()()()}2&u&&(r.Q6J("translucent",!0),r.xp6(27),r.Q6J("ngIf",f.uploadedURL))},dependencies:[e.O5,i.oU,i.YG,i.Sm,i.W2,i.fr,i.Gu,i.gu,i.Ie,i.Q$,i.uN,i.yW,i.sr,i.wd,i.cs],styles:[".url[_ngcontent-%COMP%]{padding:12px;--border-radius: 5px}input[type=file][_ngcontent-%COMP%]{position:absolute;opacity:0}"]}),d})()}];let T=(()=>{class d{}return d.\u0275fac=function(u){return new(u||d)},d.\u0275mod=r.oAB({type:d}),d.\u0275inj=r.cJS({imports:[l.Bz.forChild(E),l.Bz]}),d})(),I=(()=>{class d{}return d.\u0275fac=function(u){return new(u||d)},d.\u0275mod=r.oAB({type:d}),d.\u0275inj=r.cJS({imports:[e.ez,n.u5,i.Pc,T]}),d})()},9763:(y,h,a)=>{a.d(h,{v:()=>i});var e=a(8274),n=a(2346);let i=(()=>{class l{constructor(r,t){this.toastCtrl=r,this.navCtrl=t}presentToast(r="Please wait...",t="primary",s=3e3){this.toastCtrl.create({cssClass:"",color:t,duration:s,message:r}).then(o=>{o.present()},o=>{console.error("Error while toasting message",o)})}isValidData(r){return null!=r&&""!==r&&r!==[]&&0!==Object.keys(r).length}getExtension(r){let t=r.split(/[#?]/)[0].split(".").pop().trim();return["jpg","jpeg","png","gif","tiff","svg"].includes(t.toLowerCase())?t="image":["mp3","m4a","acc","ogg","wma","flac","alac"].includes(t.toLowerCase())?t="audio":["3gp","mp4","mov","wmv","flv","avi","avchd","webm","mkv"].includes(t.toLowerCase())?t="video":["zip","rar"].includes(t.toLowerCase())&&(t="archive"),t.toLowerCase()}navigateForward(r,t={}){this.navCtrl.navigateForward(r,{state:{...t}})}navigateBack(r,t={}){this.navCtrl.navigateBack(r,{state:{...t}})}navigateRoot(r,t={}){this.navCtrl.setDirection("root"),this.navCtrl.navigateRoot(r,{state:{...t}})}}return l.\u0275fac=function(r){return new(r||l)(e.LFG(n.yF),e.LFG(n.SH))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},9244:(y,h,a)=>{a.d(h,{D:()=>l});var e=a(3725),n=a(744),i=a(8274);let l=(()=>{class c{constructor(t){this.firestore=t}get(t){const s=(0,e.hJ)(this.firestore,t),o=(0,e.IO)(s,(0,e.Xo)("created_at","asc"));return(0,e.BS)(o,{idField:"id"})}getById(t,s){const o=(0,e.JU)(this.firestore,t+`/${s}`);return(0,e._1)(o,{idField:"id"})}getByUID(t,s){console.log(t,s);const o=(0,e.hJ)(this.firestore,t),p=(0,e.IO)(o,(0,e.ar)("uid","==",s),(0,e.Xo)("created_at","asc"));return(0,e.BS)(p,{idField:"id"})}add(t,s){const o=(0,e.hJ)(this.firestore,t);return(0,e.ET)(o,{...s,created_at:(0,e.Bt)()})}delete(t,s){const o=(0,e.JU)(this.firestore,t+`/${s.id}`);return t===n.M.MEDIA||t===n.M.MEDIA?(0,e.r7)(o,{media:(0,e.Ab)(s?.media),updated_at:(0,e.Bt)()}):(0,e.oe)(o)}update(t,s){const o=(0,e.JU)(this.firestore,t+`/${s.id}`);return(0,e.r7)(o,t===n.M.MEDIA||t===n.M.MEDIA?{media:(0,e.vr)(...s?.media),updated_at:(0,e.Bt)()}:{...s,updated_at:(0,e.Bt)()})}getCourses(){const t=(0,e.hJ)(this.firestore,n.M.COURSES),s=(0,e.IO)(t,(0,e.ar)("status","==","ACTIVE"));return(0,e.BS)(s,{idField:"id"})}getCourseById(t){const s=(0,e.JU)(this.firestore,`courses/${t}`);return(0,e._1)(s,{idField:"id"})}getTests(t){const s=(0,e.hJ)(this.firestore,"tests"),o=(0,e.IO)(s,(0,e.ar)("course_id","==",t||""));return(0,e.BS)(o,{idField:"id"})}getTestById(t){const s=(0,e.JU)(this.firestore,`tests/${t}`);return(0,e._1)(s,{idField:"id"})}getValuedAnswerSheetByTestId(t,s){const o=(0,e.hJ)(this.firestore,n.M.VALUED_ANSWER_SHEET),p=(0,e.IO)(o,(0,e.ar)("test_id","==",t||""),(0,e.ar)("student_id","==",s||""));return(0,e.BS)(p,{idField:"id"})}getRemarksByTestId(t,s){const o=(0,e.hJ)(this.firestore,n.M.STUDENT_ACTIVITY),p=(0,e.IO)(o,(0,e.ar)("test_id","==",t||""),(0,e.ar)("student_id","==",s||""));return(0,e.BS)(p,{idField:"id"})}getAnswerSheetByTestId(t){const s=(0,e.hJ)(this.firestore,n.M.ANSWER_SHEET),o=(0,e.IO)(s,(0,e.ar)("test_id","==",t||""));return(0,e.BS)(o,{idField:"id"})}getScheduleByCourseId(t){const s=(0,e.hJ)(this.firestore,n.M.SCHEDULES),o=(0,e.IO)(s,(0,e.ar)("course_id","==",t));return(0,e.BS)(o,{idField:"id"})}getScheduleByTestId(t){const s=(0,e.hJ)(this.firestore,n.M.SCHEDULES),o=(0,e.IO)(s,(0,e.ar)("test_id","==",t||""));return(0,e.BS)(o,{idField:"id"})}getQuestionPaperByTestId(t){const s=(0,e.hJ)(this.firestore,n.M.QUESTION_PAPERS),o=(0,e.IO)(s,(0,e.ar)("test_id","==",t||""));return(0,e.BS)(o,{idField:"id"})}updateTest(t){const s=(0,e.JU)(this.firestore,`tests/${t.id}`);return(0,e.r7)(s,{...t,updated_at:(0,e.Bt)()})}getOrdersList(){const t=(0,e.hJ)(this.firestore,"orders"),s=(0,e.IO)(t,(0,e.ar)("student_id","==",localStorage.getItem("uid")||""));return(0,e.BS)(s,{idField:"id"})}getPurchasedOrders(){const t=(0,e.hJ)(this.firestore,"orders"),s=(0,e.IO)(t,(0,e.ar)("student_id","==",localStorage.getItem("student_id")||""),(0,e.ar)("status","==",!0));return(0,e.BS)(s,{idField:"id"})}getOrders(t){const s=(0,e.hJ)(this.firestore,"orders"),o=(0,e.IO)(s,(0,e.ar)("course_id","==",t.course_id||""),(0,e.ar)("student_id","==",t.student_id||""));return(0,e.PL)(o)}addOrder(t){const s=(0,e.hJ)(this.firestore,"orders");return(0,e.ET)(s,{...t,created_at:(0,e.Bt)()})}updateOrder(t){const s=(0,e.JU)(this.firestore,`orders/${t.id}`);return(0,e.r7)(s,{...t,updated_at:(0,e.Bt)()})}getStudentById(t){const s=(0,e.JU)(this.firestore,`students/${t}`);return(0,e._1)(s,{idField:"id"})}getStudent(t){const s=(0,e.hJ)(this.firestore,"students"),o=(0,e.IO)(s,(0,e.ar)("email","==",t.email||""),(0,e.ar)("password","==",t.password||""));return(0,e.BS)(o,{idField:"id"})}checkStudent(t){const s=(0,e.hJ)(this.firestore,n.M.STUDENTS),o=(0,e.IO)(s,(0,e.ar)("email","==",t));return(0,e.BS)(o,{idField:"id"})}addStudent(t){const s=(0,e.hJ)(this.firestore,"students");return(0,e.ET)(s,{...t,created_at:(0,e.Bt)()})}deleteStudent(t){const s=(0,e.JU)(this.firestore,`students/${t.id}`);return(0,e.oe)(s)}updateStudent(t){const s=(0,e.JU)(this.firestore,`students/${t.id}`);return(0,e.r7)(s,{...t,updated_at:(0,e.Bt)()})}getChat(t){const s=(0,e.hJ)(this.firestore,n.M.CHAT_ROOM),o=(0,e.IO)(s,(0,e.ar)("chat_id","==",t));return(0,e.BS)(o,{idField:"id"})}getMessages(t){const s=(0,e.hJ)(this.firestore,n.M.MESSAGES),o=(0,e.IO)(s,(0,e.ar)("chat_id","==",t),(0,e.Xo)("created_at","asc"));return(0,e.BS)(o,{idField:"id"})}}return c.\u0275fac=function(t){return new(t||c)(i.LFG(e.gg))},c.\u0275prov=i.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},6857:(y,h,a)=>{a.d(h,{b:()=>n});var e=a(8274);let n=(()=>{class i{constructor(){this._data={}}getData(c){return this._data[c]}setData(c,r){this._data[c]=r}}return i.\u0275fac=function(c){return new(c||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}]);