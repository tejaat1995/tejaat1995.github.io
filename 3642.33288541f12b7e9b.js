"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3642],{3642:(C,l,n)=>{n.r(l),n.d(l,{DashboardPageModule:()=>T});var d=n(6895),u=n(433),a=n(2346),c=n(9461),h=n(5861),e=n(8274),g=n(9244),p=n(9763),m=n(6857),v=n(1228);const f=[{path:"",component:(()=>{class t{constructor(o,r,i,D,P,Z,y){this.dataService=o,this.cd=r,this.alertCtrl=i,this.commonService=D,this.stateService=P,this.authService=Z,this.router=y,this.unreadNotificationsLength=0,this.dataService.getUnreadNotifications().subscribe(S=>{this.unreadNotificationsLength=S.length,this.cd.detectChanges()})}ngOnInit(){}navTo(o){this.commonService.navigateForward(o)}logout(){this.authService.logout().then(o=>{localStorage.clear(),this.router.navigateByUrl("login",{replaceUrl:!0})},o=>{console.error("Error while logout:::::::::\n",o),this.commonService.presentToast("unable to login","danger")})}addCourse(){var o=this;return(0,h.Z)(function*(){yield(yield o.alertCtrl.create({header:"Add Course",inputs:[{name:"title",placeholder:"Enter course title",type:"text"},{name:"applicable",placeholder:"Applicable for",type:"text"},{name:"description",placeholder:"Enter course description",type:"textarea"}],buttons:[{text:"Cancel",role:"cancel"},{text:"Add",handler:i=>{o.dataService.addCourse({description:i.description,title:i.title,applicable:i.applicable})}}]})).present()})()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(g.D),e.Y36(e.sBO),e.Y36(a.Br),e.Y36(p.v),e.Y36(m.b),e.Y36(v.e),e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-dashboard"]],decls:27,vars:1,consts:[["slot","end"],[3,"click"],["slot","icon-only","name","log-out-outline"],[1,"ion-padding"],["size","12","size-lg","4","size-xl","3",1,"ion-margin-bottom"],["mode","ios",1,"ion-no-margin","d-grid-center","ion-padding","dashboard","ion-activatable","h-100",3,"click"],["color","dark"],[1,"ion-text-center","size-18","fw-bold"]],template:function(o,r){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Gurukul Dashboard"),e.qZA(),e.TgZ(4,"ion-buttons",0)(5,"ion-button",1),e.NdJ("click",function(){return r.logout()}),e._UZ(6,"ion-icon",2),e.qZA()()()(),e.TgZ(7,"ion-content",3)(8,"ion-row")(9,"ion-col",4)(10,"ion-card",5),e.NdJ("click",function(){return r.navTo("courses")}),e._UZ(11,"ion-ripple-effect"),e.TgZ(12,"ion-text",6)(13,"p",7),e._uU(14,"Course"),e.qZA()()()(),e.TgZ(15,"ion-col",4)(16,"ion-card",5),e.NdJ("click",function(){return r.navTo("students")}),e._UZ(17,"ion-ripple-effect"),e.TgZ(18,"ion-text",6)(19,"p",7),e._uU(20,"Students"),e.qZA()()()(),e.TgZ(21,"ion-col",4)(22,"ion-card",5),e.NdJ("click",function(){return r.navTo("notifications")}),e._UZ(23,"ion-ripple-effect"),e.TgZ(24,"ion-text",6)(25,"p",7),e._uU(26),e.qZA()()()()()()),2&o&&(e.xp6(26),e.hij("Notifications (",r.unreadNotificationsLength,")"))},dependencies:[a.YG,a.Sm,a.PM,a.wI,a.W2,a.Gu,a.gu,a.H$,a.Nd,a.yW,a.sr,a.wd]}),t})()}];let b=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(f),c.Bz]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,u.u5,a.Pc,b]}),t})()}}]);