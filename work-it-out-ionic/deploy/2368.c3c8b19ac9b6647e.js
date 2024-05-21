"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2368],{2368:(b,a,r)=>{r.r(a),r.d(a,{RoutinesListPageModule:()=>p});var c=r(177),d=r(4341),u=r(9364),l=r(6766),t=r(4438),g=r(5844),f=r(479);function m(e,s){if(1&e){const o=t.RV6();t.j41(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"div")(5,"h5",7),t.EFF(6),t.k0s(),t.j41(7,"p",8),t.EFF(8),t.nrm(9,"i",9),t.k0s(),t.j41(10,"p",8),t.EFF(11),t.nrm(12,"i",10),t.k0s(),t.j41(13,"p",8),t.EFF(14,"Required material: Dumbbell "),t.nrm(15,"i",11),t.k0s()(),t.nrm(16,"img",12),t.k0s(),t.j41(17,"div",13)(18,"a",14),t.EFF(19,"View Details"),t.k0s(),t.j41(20,"button",15),t.bIt("click",function(){const i=t.eBV(o).$implicit,v=t.XpG();return t.Njj(v.deleteRoutine(i.id))}),t.EFF(21,"Delete Routine"),t.k0s()()()()()}if(2&e){const o=s.$implicit;t.R7$(6),t.JRh(o.name),t.R7$(2),t.SpI("Type: ",o.types," "),t.R7$(3),t.SpI("Total kcal: ",o.total_kcal," "),t.R7$(7),t.Mz_("routerLink","/routine-maker/",o.id,"")}}const h=[{path:"",component:(()=>{var e;class s{constructor(n,i){this.authService=n,this.routineService=i,this.routines=[]}ngOnInit(){this.getUserId()}ionViewWillEnter(){this.loadRoutines()}getUserId(){const n=this.authService.getToken();console.log("Token obtenido:",n),n?this.authService.getUserIdFromToken().subscribe(i=>{null!==i?(this.userId=i,console.log("User ID obtenido:",this.userId),this.loadRoutines()):console.error("Error: User ID is null.")},i=>{console.error("Error fetching user ID from token:",i)}):console.error("Token not available.")}loadRoutines(){this.userId?this.routineService.getRoutines(this.userId).subscribe(n=>{this.routines=n,console.log("Rutinas cargadas:",this.routines)},n=>{console.error("Error fetching routines:",n)}):console.error("User ID not available.")}deleteRoutine(n){this.routineService.deleteRoutine(n).subscribe(i=>{console.log("Routine deleted successfully:",i),this.loadRoutines()},i=>{console.error("Error deleting routine:",i)})}}return(e=s).\u0275fac=function(n){return new(n||e)(t.rXU(g.u),t.rXU(f.u))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-routines-list"]],decls:4,vars:1,consts:[[1,"container-fluid","bg-white","rounded","p-3"],[1,"row","justify-content-center"],["class","col-12 col-md-4 mb-3",4,"ngFor","ngForOf"],[1,"col-12","col-md-4","mb-3"],[1,"card","text-white","h-100","card-custom-width"],[1,"card-body"],[1,"d-flex","justify-content-between"],[1,"card-title"],[1,"card-text"],[1,"fas","fa-male"],[1,"fas","fa-fire"],[1,"fas","fa-dumbbell"],["src","../../../assets/img/img_routine_default.png","alt","Routine Image",1,"img-fluid",2,"max-width","90px"],[1,"d-flex","justify-content-center","mt-3"],["role","button",1,"btn","btn-light","me-2",3,"routerLink"],[1,"btn","btn-danger",3,"click"]],template:function(n,i){1&n&&(t.j41(0,"ion-content")(1,"div",0)(2,"div",1),t.DNE(3,m,22,5,"div",2),t.k0s()()()),2&n&&(t.R7$(3),t.Y8G("ngForOf",i.routines))},dependencies:[c.Sq,u.W9,u.oY,l.Wk],styles:[".container-fluid[_ngcontent-%COMP%]{padding:20px;border-radius:8px}.card[_ngcontent-%COMP%]{margin:10px;border-radius:8px}.card-custom-width[_ngcontent-%COMP%]{width:450px;background-color:#3d3c3d}.card-body[_ngcontent-%COMP%]{display:flex;flex-direction:column}.card-title[_ngcontent-%COMP%], .card-text[_ngcontent-%COMP%]{text-align:left;padding-left:40px;padding-right:25px}.card-body[_ngcontent-%COMP%]   .d-flex.justify-content-between[_ngcontent-%COMP%]{align-items:center}.img-fluid[_ngcontent-%COMP%]{border-radius:8px;margin-right:50px}.btn[_ngcontent-%COMP%]{width:auto}"]}),s})()}];let R=(()=>{var e;class s{}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[l.iI.forChild(h),l.iI]}),s})(),p=(()=>{var e;class s{}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[c.MD,d.YN,u.bv,R]}),s})()}}]);