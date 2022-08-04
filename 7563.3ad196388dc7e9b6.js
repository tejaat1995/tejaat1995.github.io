"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7563],{744:(I,f,u)=>{u.d(f,{M:()=>t});let t=(()=>{class i{}return i.COURSES="courses",i.ORDERS="orders",i.STUDENTS="students",i.TESTS="tests",i.MEDIA="media",i.SCHEDULES="schedules",i.QUESTION_PAPERS="question_papers",i.VALUED_ANSWER_SHEET="valued_answer_sheets",i.ANSWER_SHEET="answer_sheets",i.STUDENT_ACTIVITY="student_activity",i.NOTIFICATIONS="notifications",i.CHAT_ROOM="chat_room",i.MESSAGES="messages",i})()},7563:(I,f,u)=>{u.r(f),u.d(f,{RegisterPageModule:()=>D});var t=u(6895),i=u(433),d=u(2346),m=u(1619),g=u(5861),e=u(8274),r=u(1228),o=u(9244),a=u(9763);function h(s,c){1&s&&(e.TgZ(0,"ion-note",38),e._uU(1," Email is invalid "),e.qZA())}function A(s,c){1&s&&(e.TgZ(0,"ion-note",38),e._uU(1," First Name needs to be 4 characters "),e.qZA())}function S(s,c){1&s&&(e.TgZ(0,"ion-note",38),e._uU(1," Last Name needs to be 1 characters "),e.qZA())}function v(s,c){1&s&&(e.TgZ(0,"ion-note",38),e._uU(1," Password needs to be 6 characters "),e.qZA())}function C(s,c){1&s&&(e.TgZ(0,"ion-note",38),e._uU(1," Phone Number needs to be 10 digits. "),e.qZA())}function U(s,c){1&s&&(e.TgZ(0,"ion-datetime",39,40)(2,"div",41),e._uU(3,"Select Date of Birth"),e.qZA()())}function P(s,c){1&s&&(e.TgZ(0,"ion-note",38),e._uU(1," please enter date of birth "),e.qZA())}function E(s,c){1&s&&(e.TgZ(0,"ion-note",38),e._uU(1," Please select course type. "),e.qZA())}function F(s,c){1&s&&(e.TgZ(0,"ion-note",38),e._uU(1," Address is required "),e.qZA())}function O(s,c){1&s&&(e.TgZ(0,"ion-note",38),e._uU(1," Please enter Pincode. "),e.qZA())}function M(s,c){1&s&&(e.TgZ(0,"ion-note",38),e._uU(1," Please enter City. "),e.qZA())}function B(s,c){1&s&&(e.TgZ(0,"ion-note",38),e._uU(1," Please enter State. "),e.qZA())}function J(s,c){1&s&&(e.TgZ(0,"ion-note",38),e._uU(1," Please enter Country. "),e.qZA())}const b=[{path:"",component:(()=>{class s{constructor(l,n,p,T,_,R,y){this.fb=l,this.authService=n,this.loadingController=p,this.alertController=T,this.router=_,this.dataService=R,this.commonService=y,this.customActionSheetOptions={header:"Select course type"}}ngOnInit(){this.createForm()}createForm(){this.registerForm=this.fb.group({email:[null,[i.kI.required,i.kI.email]],password:[null,[i.kI.required,i.kI.minLength(6)]],first_name:[null,[i.kI.required,i.kI.minLength(4),i.kI.maxLength(25)]],last_name:[null,[i.kI.required,i.kI.minLength(1),i.kI.maxLength(25)]],mobile:[null,[i.kI.required,i.kI.minLength(10),i.kI.maxLength(10)]],course_type:[null,i.kI.required],dob:[null,i.kI.required],location:this.fb.group({address:[null,i.kI.required],pincode:[null,i.kI.required],city:[null,i.kI.required],state:[null,i.kI.required],country:["India",i.kI.required]})})}register(){var l=this;return(0,g.Z)(function*(){const n=yield l.loadingController.create({message:"Please wait..."});yield n.present();const{email:p,password:T}=l.registerForm.value,_=yield l.authService.register({email:p,password:T});_&&_?.user?.uid?l.dataService.addStudent({...l.registerForm.value,uid:_?.user?.uid}).then(function(){var R=(0,g.Z)(function*(y){yield n.dismiss(),y.id&&(l.registerForm.reset(),l.commonService.presentToast("Registered Successfully","light"),l.authService.logout().then(Z=>{localStorage.clear(),l.router.navigateByUrl("login",{replaceUrl:!0})},Z=>{console.error("Error while logout:::::::::\n",Z)}))});return function(y){return R.apply(this,arguments)}}(),function(){var R=(0,g.Z)(function*(y){yield n.dismiss(),console.error("Error while adding the student:::::\n",y)});return function(y){return R.apply(this,arguments)}}()):(yield n.dismiss(),console.error("Registration failed:::::::::::::\n",_),"{}"===JSON.stringify(_)?l.showAlert("Email ID already exists","Please try again with another email"):l.showAlert("Registration failed","Please try again!"))})()}login(){this.router.navigateByUrl("/login",{replaceUrl:!0})}showAlert(l,n){var p=this;return(0,g.Z)(function*(){yield(yield p.alertController.create({header:l,message:n,buttons:["OK"]})).present()})()}get email(){return this.registerForm.get("email")}get password(){return this.registerForm.get("password")}get first_name(){return this.registerForm.get("first_name")}get last_name(){return this.registerForm.get("last_name")}get mobile(){return this.registerForm.get("mobile")}get dob(){return this.registerForm.get("dob")}get course_type(){return this.registerForm.get("course_type")}get address(){return this.registerForm.get("location.address")}get pincode(){return this.registerForm.get("location.pincode")}get city(){return this.registerForm.get("location.city")}get state(){return this.registerForm.get("location.state")}get country(){return this.registerForm.get("location.country")}}return s.\u0275fac=function(l){return new(l||s)(e.Y36(i.qu),e.Y36(r.e),e.Y36(d.HT),e.Y36(d.Br),e.Y36(m.F0),e.Y36(o.D),e.Y36(a.v))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-register"]],decls:90,vars:19,consts:[["color","white"],["color","white",1,"ion-no-border"],["color","white",1,"ion-text-center"],["src","../../../assets/logo text.jpg",1,"logo"],[1,"main","p-4","pt-5"],[1,"size-18","fw-medium","m-0"],[1,"size-48","fw-bold","m-0","mb-5",2,"line-height","1.1"],[3,"formGroup","submit"],["size","12"],["color","white","input","","lines","none",1,"ion-margin-bottom"],["color","dark","type","email","placeholder","Email","formControlName","email"],["slot","error",4,"ngIf"],["size","6"],["color","dark","type","text","placeholder","FirstName","formControlName","first_name"],["color","dark","type","text","placeholder","Last Name","formControlName","last_name"],["color","dark","type","password","placeholder","Password","formControlName","password"],["color","dark","type","tel","placeholder","Phone Number","formControlName","mobile"],["color","white","input","","id","start-date",1,"ion-margin-bottom"],["color","dark"],["slot","end"],["trigger","start-date","show-backdrop","false"],["placeholder","Select course type","interface","action-sheet","formControlName","course_type",3,"interfaceOptions"],["value","CA foundation"],["value","CA Inter"],["value","CA Final"],["value","CMA Foundation"],["value","CMA Final"],["value","CMA Inter"],["slot","end","color","dark","name","chevron-down-outline"],["formGroupName","location"],["color","dark","placeholder","Address","formControlName","address"],["color","dark","type","tel","placeholder","Pincode","formControlName","pincode"],["color","dark","type","text","placeholder","City","formControlName","city"],["color","dark","type","text","placeholder","State","formControlName","state"],["color","dark","type","text","readonly","","placeholder","Country","formControlName","country"],[1,"ion-text-center","mt-4"],[2,"color","var(--ion-color-white) !important",3,"click"],["type","submit","expand","block","color","dark",3,"disabled"],["slot","error"],["presentation","date","formControlName","dob","placeholder","select Date of Birth"],["startDateTime",""],["slot","title"]],template:function(l,n){1&l&&(e.TgZ(0,"ion-content",0)(1,"ion-header",1)(2,"ion-toolbar",2),e._UZ(3,"ion-img",3),e.qZA()(),e.TgZ(4,"main",4)(5,"ion-text",0)(6,"p",5),e._uU(7,"Welcome to"),e.qZA(),e.TgZ(8,"p",6),e._uU(9,"Gurukul For CA & CMA"),e.qZA()(),e.TgZ(10,"form",7),e.NdJ("submit",function(){return n.register()}),e.TgZ(11,"ion-row")(12,"ion-col",8)(13,"ion-item",9),e._UZ(14,"ion-input",10),e.YNc(15,h,2,0,"ion-note",11),e.qZA()(),e.TgZ(16,"ion-col",12)(17,"ion-item",9),e._UZ(18,"ion-input",13),e.YNc(19,A,2,0,"ion-note",11),e.qZA()(),e.TgZ(20,"ion-col",12)(21,"ion-item",9),e._UZ(22,"ion-input",14),e.YNc(23,S,2,0,"ion-note",11),e.qZA()(),e.TgZ(24,"ion-col",8)(25,"ion-item",9),e._UZ(26,"ion-input",15),e.YNc(27,v,2,0,"ion-note",11),e.qZA()(),e.TgZ(28,"ion-col",8)(29,"ion-item",9),e._UZ(30,"ion-input",16),e.YNc(31,C,2,0,"ion-note",11),e.qZA()(),e.TgZ(32,"ion-col",8)(33,"ion-item",17)(34,"ion-label",18),e._uU(35,"Date of Birth"),e.qZA(),e.TgZ(36,"ion-text",19),e._uU(37),e.ALo(38,"date"),e.qZA(),e.TgZ(39,"ion-popover",20),e.YNc(40,U,4,0,"ng-template"),e.qZA(),e.YNc(41,P,2,0,"ion-note",11),e.qZA(),e._uU(42,"` "),e.qZA(),e.TgZ(43,"ion-col",8)(44,"ion-item",9)(45,"ion-select",21)(46,"ion-select-option",22),e._uU(47,"CA Foundation"),e.qZA(),e.TgZ(48,"ion-select-option",23),e._uU(49,"CA Inter"),e.qZA(),e.TgZ(50,"ion-select-option",24),e._uU(51,"CA Final"),e.qZA(),e.TgZ(52,"ion-select-option",25),e._uU(53,"CMA Foundation"),e.qZA(),e.TgZ(54,"ion-select-option",26),e._uU(55,"CMA Final"),e.qZA(),e.TgZ(56,"ion-select-option",27),e._uU(57,"CMA Inter"),e.qZA()(),e._UZ(58,"ion-icon",28),e.YNc(59,E,2,0,"ion-note",11),e.qZA()()(),e.TgZ(60,"ion-row",29)(61,"ion-col",12)(62,"ion-item",9),e._UZ(63,"ion-input",30),e.YNc(64,F,2,0,"ion-note",11),e.qZA()(),e.TgZ(65,"ion-col",12)(66,"ion-item",9),e._UZ(67,"ion-input",31),e.YNc(68,O,2,0,"ion-note",11),e.qZA()(),e.TgZ(69,"ion-col",12)(70,"ion-item",9),e._UZ(71,"ion-input",32),e.YNc(72,M,2,0,"ion-note",11),e.qZA()(),e.TgZ(73,"ion-col",12)(74,"ion-item",9),e._UZ(75,"ion-input",33),e.YNc(76,B,2,0,"ion-note",11),e.qZA()(),e.TgZ(77,"ion-col",12)(78,"ion-item",9),e._UZ(79,"ion-input",34),e.YNc(80,J,2,0,"ion-note",11),e.qZA()(),e.TgZ(81,"ion-col",8)(82,"p",35)(83,"ion-text",18),e._uU(84," Already have an account? "),e.TgZ(85,"a",36),e.NdJ("click",function(){return n.login()}),e._uU(86,"Login here"),e.qZA()()()(),e.TgZ(87,"ion-col",8)(88,"ion-button",37),e._uU(89,"Register"),e.qZA()()()()()()),2&l&&(e.xp6(10),e.Q6J("formGroup",n.registerForm),e.xp6(5),e.Q6J("ngIf",(n.email.dirty||n.email.touched)&&n.email.errors),e.xp6(4),e.Q6J("ngIf",(n.first_name.dirty||n.first_name.touched)&&n.first_name.errors),e.xp6(4),e.Q6J("ngIf",(n.last_name.dirty||n.last_name.touched)&&n.last_name.errors),e.xp6(4),e.Q6J("ngIf",(n.password.dirty||n.password.touched)&&n.password.errors),e.xp6(4),e.Q6J("ngIf",(n.mobile.dirty||n.mobile.touched)&&n.mobile.errors),e.xp6(6),e.Oqu(e.xi3(38,16,n.registerForm.value.dob,"dd MMM YYYY")),e.xp6(4),e.Q6J("ngIf",(n.dob.dirty||n.dob.touched)&&n.dob.errors),e.xp6(4),e.Q6J("interfaceOptions",n.customActionSheetOptions),e.xp6(14),e.Q6J("ngIf",(n.course_type.dirty||n.course_type.touched)&&n.course_type.errors),e.xp6(5),e.Q6J("ngIf",(n.address.dirty||n.address.touched)&&n.address.errors),e.xp6(4),e.Q6J("ngIf",(n.pincode.dirty||n.pincode.touched)&&n.pincode.errors),e.xp6(4),e.Q6J("ngIf",(n.city.dirty||n.city.touched)&&n.city.errors),e.xp6(4),e.Q6J("ngIf",(n.state.dirty||n.state.touched)&&n.state.errors),e.xp6(4),e.Q6J("ngIf",(n.country.dirty||n.country.touched)&&n.country.errors),e.xp6(8),e.Q6J("disabled",!n.registerForm.valid))},dependencies:[t.O5,i._Y,i.JJ,i.JL,i.sg,i.u,i.x0,d.YG,d.wI,d.W2,d.x4,d.Gu,d.gu,d.Xz,d.pK,d.Ie,d.Q$,d.uN,d.d8,d.Nd,d.t9,d.n0,d.yW,d.sr,d.QI,d.j9,t.uU],styles:["ion-header[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{height:150px}.main[_ngcontent-%COMP%]{--border-value: 50px;border-top-left-radius:var(--border-value);border-top-right-radius:var(--border-value);min-height:calc(100% - 150px);height:-moz-fit-content;height:fit-content;background:var(--ion-color-primary)}ion-item[input][_ngcontent-%COMP%]{--background: rgba(var(--ion-color-light-rgb), .5) !important}.sc-ion-input-md-h[_ngcontent-%COMP%]{--placeholder-color: var(--ion-color-dark) !important}.logo[_ngcontent-%COMP%]{height:100px}"]}),s})()}];let q=(()=>{class s{}return s.\u0275fac=function(l){return new(l||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[m.Bz.forChild(b),m.Bz]}),s})(),D=(()=>{class s{}return s.\u0275fac=function(l){return new(l||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[t.ez,i.u5,i.UX,d.Pc,q]}),s})()},9763:(I,f,u)=>{u.d(f,{v:()=>d});var t=u(8274),i=u(2346);let d=(()=>{class m{constructor(e,r){this.toastCtrl=e,this.navCtrl=r}presentToast(e="Please wait...",r="primary",o=3e3){this.toastCtrl.create({cssClass:"",color:r,duration:o,message:e}).then(a=>{a.present()},a=>{console.error("Error while toasting message",a)})}isValidData(e){return null!=e&&""!==e&&e!==[]&&0!==Object.keys(e).length}getExtension(e){let r=e.split(/[#?]/)[0].split(".").pop().trim();return["jpg","jpeg","png","gif","tiff","svg"].includes(r.toLowerCase())?r="image":["mp3","m4a","acc","ogg","wma","flac","alac"].includes(r.toLowerCase())?r="audio":["3gp","mp4","mov","wmv","flv","avi","avchd","webm","mkv"].includes(r.toLowerCase())?r="video":["zip","rar"].includes(r.toLowerCase())&&(r="archive"),r.toLowerCase()}navigateForward(e,r={}){this.navCtrl.navigateForward(e,{state:{...r}})}navigateBack(e,r={}){this.navCtrl.navigateBack(e,{state:{...r}})}navigateRoot(e,r={}){this.navCtrl.setDirection("root"),this.navCtrl.navigateRoot(e,{state:{...r}})}}return m.\u0275fac=function(e){return new(e||m)(t.LFG(i.yF),t.LFG(i.SH))},m.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},9244:(I,f,u)=>{u.d(f,{D:()=>m});var t=u(3725),i=u(744),d=u(8274);let m=(()=>{class g{constructor(r){this.firestore=r}get(r){const o=(0,t.hJ)(this.firestore,r),a=(0,t.IO)(o,(0,t.Xo)("created_at","asc"));return(0,t.BS)(a,{idField:"id"})}getById(r,o){const a=(0,t.JU)(this.firestore,r+`/${o}`);return(0,t._1)(a,{idField:"id"})}getByUID(r,o){console.log(r,o);const a=(0,t.hJ)(this.firestore,r),h=(0,t.IO)(a,(0,t.ar)("uid","==",o),(0,t.Xo)("created_at","asc"));return(0,t.BS)(h,{idField:"id"})}add(r,o){const a=(0,t.hJ)(this.firestore,r);return(0,t.ET)(a,{...o,created_at:(0,t.Bt)()})}delete(r,o){const a=(0,t.JU)(this.firestore,r+`/${o.id}`);return r===i.M.MEDIA||r===i.M.MEDIA?(0,t.r7)(a,{media:(0,t.Ab)(o?.media),updated_at:(0,t.Bt)()}):(0,t.oe)(a)}update(r,o){const a=(0,t.JU)(this.firestore,r+`/${o.id}`);return(0,t.r7)(a,r===i.M.MEDIA||r===i.M.MEDIA?{media:(0,t.vr)(...o?.media),updated_at:(0,t.Bt)()}:{...o,updated_at:(0,t.Bt)()})}getCourses(){const r=(0,t.hJ)(this.firestore,i.M.COURSES),o=(0,t.IO)(r,(0,t.ar)("status","==","ACTIVE"));return(0,t.BS)(o,{idField:"id"})}getCourseById(r){const o=(0,t.JU)(this.firestore,`courses/${r}`);return(0,t._1)(o,{idField:"id"})}getTests(r){const o=(0,t.hJ)(this.firestore,"tests"),a=(0,t.IO)(o,(0,t.ar)("course_id","==",r||""));return(0,t.BS)(a,{idField:"id"})}getTestById(r){const o=(0,t.JU)(this.firestore,`tests/${r}`);return(0,t._1)(o,{idField:"id"})}getValuedAnswerSheetByTestId(r,o){const a=(0,t.hJ)(this.firestore,i.M.VALUED_ANSWER_SHEET),h=(0,t.IO)(a,(0,t.ar)("test_id","==",r||""),(0,t.ar)("student_id","==",o||""));return(0,t.BS)(h,{idField:"id"})}getRemarksByTestId(r,o){const a=(0,t.hJ)(this.firestore,i.M.STUDENT_ACTIVITY),h=(0,t.IO)(a,(0,t.ar)("test_id","==",r||""),(0,t.ar)("student_id","==",o||""));return(0,t.BS)(h,{idField:"id"})}getAnswerSheetByTestId(r){const o=(0,t.hJ)(this.firestore,i.M.ANSWER_SHEET),a=(0,t.IO)(o,(0,t.ar)("test_id","==",r||""));return(0,t.BS)(a,{idField:"id"})}getScheduleByCourseId(r){const o=(0,t.hJ)(this.firestore,i.M.SCHEDULES),a=(0,t.IO)(o,(0,t.ar)("course_id","==",r));return(0,t.BS)(a,{idField:"id"})}getScheduleByTestId(r){const o=(0,t.hJ)(this.firestore,i.M.SCHEDULES),a=(0,t.IO)(o,(0,t.ar)("test_id","==",r||""));return(0,t.BS)(a,{idField:"id"})}getQuestionPaperByTestId(r){const o=(0,t.hJ)(this.firestore,i.M.QUESTION_PAPERS),a=(0,t.IO)(o,(0,t.ar)("test_id","==",r||""));return(0,t.BS)(a,{idField:"id"})}updateTest(r){const o=(0,t.JU)(this.firestore,`tests/${r.id}`);return(0,t.r7)(o,{...r,updated_at:(0,t.Bt)()})}getOrdersList(){const r=(0,t.hJ)(this.firestore,"orders"),o=(0,t.IO)(r,(0,t.ar)("student_id","==",localStorage.getItem("uid")||""));return(0,t.BS)(o,{idField:"id"})}getPurchasedOrders(){const r=(0,t.hJ)(this.firestore,"orders"),o=(0,t.IO)(r,(0,t.ar)("student_id","==",localStorage.getItem("student_id")||""),(0,t.ar)("status","==",!0));return(0,t.BS)(o,{idField:"id"})}getOrders(r){const o=(0,t.hJ)(this.firestore,"orders"),a=(0,t.IO)(o,(0,t.ar)("course_id","==",r.course_id||""),(0,t.ar)("student_id","==",r.student_id||""));return(0,t.PL)(a)}addOrder(r){const o=(0,t.hJ)(this.firestore,"orders");return(0,t.ET)(o,{...r,created_at:(0,t.Bt)()})}updateOrder(r){const o=(0,t.JU)(this.firestore,`orders/${r.id}`);return(0,t.r7)(o,{...r,updated_at:(0,t.Bt)()})}getStudentById(r){const o=(0,t.JU)(this.firestore,`students/${r}`);return(0,t._1)(o,{idField:"id"})}getStudent(r){const o=(0,t.hJ)(this.firestore,"students"),a=(0,t.IO)(o,(0,t.ar)("email","==",r.email||""),(0,t.ar)("password","==",r.password||""));return(0,t.BS)(a,{idField:"id"})}checkStudent(r){const o=(0,t.hJ)(this.firestore,i.M.STUDENTS),a=(0,t.IO)(o,(0,t.ar)("email","==",r));return(0,t.BS)(a,{idField:"id"})}addStudent(r){const o=(0,t.hJ)(this.firestore,"students");return(0,t.ET)(o,{...r,created_at:(0,t.Bt)()})}deleteStudent(r){const o=(0,t.JU)(this.firestore,`students/${r.id}`);return(0,t.oe)(o)}updateStudent(r){const o=(0,t.JU)(this.firestore,`students/${r.id}`);return(0,t.r7)(o,{...r,updated_at:(0,t.Bt)()})}getChat(r){const o=(0,t.hJ)(this.firestore,i.M.CHAT_ROOM),a=(0,t.IO)(o,(0,t.ar)("chat_id","==",r));return(0,t.BS)(a,{idField:"id"})}getMessages(r){const o=(0,t.hJ)(this.firestore,i.M.MESSAGES),a=(0,t.IO)(o,(0,t.ar)("chat_id","==",r),(0,t.Xo)("created_at","asc"));return(0,t.BS)(a,{idField:"id"})}}return g.\u0275fac=function(r){return new(r||g)(d.LFG(t.gg))},g.\u0275prov=d.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);