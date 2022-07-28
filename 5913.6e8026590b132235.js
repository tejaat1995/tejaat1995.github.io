"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5913],{5913:(M,d,o)=>{o.r(d),o.d(d,{CoursesPageModule:()=>x});var u=o(6895),h=o(433),n=o(2346),g=o(9461),C=o(5861),t=o(8274),m=o(9244),p=o(9763),f=o(6857),v=o(1228);function P(e,i){if(1&e){const s=t.EpF();t.TgZ(0,"ion-col",11)(1,"ion-card",12),t.NdJ("click",function(){const l=t.CHM(s).$implicit,c=t.oxw();return t.KtG(c.openCourse(l))}),t.TgZ(2,"ion-card-content")(3,"ion-text",13)(4,"p"),t._uU(5),t.qZA()()()()()}if(2&e){const s=i.$implicit;t.xp6(5),t.Oqu(s.title)}}const Z=[{path:"",component:(()=>{class e{constructor(s,a,r,l,c,y){this.dataService=s,this.cd=a,this.alertCtrl=r,this.commonService=l,this.stateService=c,this.authService=y,this.courses=[],this.dataService.getCourses().subscribe(A=>{this.courses=A,this.cd.detectChanges()})}ngOnInit(){}addCourse(){var s=this;return(0,C.Z)(function*(){yield(yield s.alertCtrl.create({header:"Add Course",inputs:[{name:"title",placeholder:"Enter course title",type:"text"},{name:"applicable",placeholder:"Applicable for",type:"text"},{name:"description",placeholder:"Enter course description",type:"textarea"}],buttons:[{text:"Cancel",role:"cancel"},{text:"Add",handler:r=>{s.dataService.addCourse({description:r.description,title:r.title,applicable:r.applicable})}}]})).present()})()}openCourse(s){this.stateService.setData("course",s),this.commonService.navigateForward("tests")}logout(){this.authService.logout()}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(m.D),t.Y36(t.sBO),t.Y36(n.Br),t.Y36(p.v),t.Y36(f.b),t.Y36(v.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-courses"]],decls:17,vars:3,consts:[[3,"translucent"],["slot","start"],["defaultHref","gurukul"],[1,"ion-padding",3,"fullscreen"],["collapse","condense"],["size","large"],[1,""],["size","6","size-lg","4","size-xl","3",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["name","add"],["size","6","size-lg","4","size-xl","3"],["mode","ios",1,"ion-no-margin","h-100",3,"click"],["color","dark"]],template:function(s,a){1&s&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5," Courses "),t.qZA()()(),t.TgZ(6,"ion-content",3)(7,"ion-header",4)(8,"ion-toolbar")(9,"ion-title",5),t._uU(10,"Courses"),t.qZA()()(),t.TgZ(11,"ion-grid",6)(12,"ion-row",6),t.YNc(13,P,6,1,"ion-col",7),t.qZA()(),t.TgZ(14,"ion-fab",8)(15,"ion-fab-button",9),t.NdJ("click",function(){return a.addCourse()}),t._UZ(16,"ion-icon",10),t.qZA()()()),2&s&&(t.Q6J("translucent",!0),t.xp6(6),t.Q6J("fullscreen",!0),t.xp6(7),t.Q6J("ngForOf",a.courses))},dependencies:[u.sg,n.oU,n.Sm,n.PM,n.FN,n.wI,n.W2,n.IJ,n.W4,n.jY,n.Gu,n.gu,n.Nd,n.yW,n.sr,n.wd,n.cs]}),e})()},{path:"tests",loadChildren:()=>Promise.all([o.e(2396),o.e(8592)]).then(o.bind(o,620)).then(e=>e.TestsPageModule)},{path:"test",loadChildren:()=>Promise.all([o.e(2396),o.e(6665),o.e(9084)]).then(o.bind(o,9084)).then(e=>e.TestPageModule)},{path:"add-test",loadChildren:()=>o.e(8592).then(o.bind(o,7800)).then(e=>e.AddTestPageModule)}];let T=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(Z),g.Bz]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,h.u5,n.Pc,T]}),e})()}}]);