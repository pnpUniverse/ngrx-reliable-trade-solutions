(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"ct+p":function(e,t,n){"use strict";n.r(t),n.d(t,"HomeModule",function(){return u});var i=n("ofXK"),r=n("1kSV"),o=n("tyNb"),a=n("AytR"),s=n("fXoL"),b=n("IYfF");function c(e,t){if(1&e&&(s.Lb(0,"img",47),s.Qb(1,"div",48),s.Qb(2,"h1",49),s.wc(3),s.Pb(),s.Qb(4,"h2",49),s.wc(5),s.Pb(),s.Qb(6,"h2",50),s.wc(7),s.Pb(),s.Pb()),2&e){const e=s.cc(),t=e.$implicit,n=e.index,i=s.cc(3);s.hc("src",i.image_path_server+t,s.rc),s.yb(3),s.xc(i.homeObj.name),s.yb(2),s.xc(i.homeObj.our_vision),s.yb(2),s.xc(i.homeObj.banner_messages[n])}}function d(e,t){1&e&&s.uc(0,c,8,4,"ng-template",46)}function g(e,t){if(1&e&&(s.Qb(0,"ngb-carousel"),s.uc(1,d,1,0,void 0,45),s.Pb()),2&e){const e=s.cc(2);s.yb(1),s.hc("ngForOf",e.homeObj.banner_image_path)}}function m(e,t){if(1&e&&(s.Qb(0,"section",43),s.uc(1,g,2,1,"ngb-carousel",44),s.Pb()),2&e){const e=s.cc();s.yb(1),s.hc("ngIf",e.homeObj.banner_image_path)}}function l(e,t){if(1&e&&(s.Qb(0,"div",51),s.Qb(1,"h3"),s.Qb(2,"b"),s.wc(3),s.Pb(),s.Pb(),s.Pb()),2&e){const e=s.cc();s.yb(3),s.xc(e.homeObj.banner_message)}}const{image_path:p}=a.a,h=[{path:"",component:(()=>{class e{constructor(e,t){this.authService=e,this.image_path_server=p,this.images=[1,2,3].map(()=>`https://picsum.photos/900/500?random&t=${Math.random()}`),t.interval=5e3,t.wrap=!1,t.keyboard=!1,t.pauseOnHover=!1,t.wrap=!0}ngOnInit(){this.authService.retrieveBySlug("home","home").subscribe(e=>{e&&e.data&&e.data._id&&(this.homeObj=e.data,this.homeObj.banner_messages=["We take care your investment Reliably","Start your profitable trading journey with us"])}),this.authService.retrieve("services").subscribe(e=>{e&&e.data&&e.data&&(this.services=e.data)})}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(b.a),s.Kb(r.c))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-home"]],decls:84,vars:2,consts:[["id","hero","class","d-flex align-items-center justify-content-center",4,"ngIf"],[1,"experience-area","yellow-bg","pt-50","pb-30"],[1,"container"],[1,"row"],[1,"col-xl-8","col-lg-9","col-md-8"],[1,"experience-text","mb-20"],[1,"col-xl-4","col-lg-3","col-md-4"],[1,"experience-button","text-md-right","mb-20"],["href","free-trial.php",1,"btn"],[1,"fas","fa-long-arrow-alt-right"],["class","row mt-5 justify-content-center","class","padding_disp",4,"ngIf"],[1,"row","my-5"],[1,"col-md-6"],["src","../../assets/img/Forex_charts.jpg","height","230","width","100%"],[1,"card",2,"width","500px","height","206px"],[1,"card-body"],[1,"card-title"],["scrolling","No","name","lcFrame","id","lcFrame","src","https://sslfxrates.forexprostools.com/index.php?param&force_lang=1&change=hide"],["src","https://sgx.i3investor.com/jsp/module/mod_side_chart.jsp","width","100%","height","450","scrolling","no","frameborder","0"],["src","https://klse.i3investor.com/jsp/module/mod_side_chart.jsp","width","100%","height","450","scrolling","no","frameborder","0"],[1,"container","my-1"],[1,"card"],[1,"card-header"],[2,"font-weight","bolder"],["src","../../assets/img/who_we_are.jpg","height","75%"],[1,"business-area","pt-105","pb-110",2,"background-image","url(../../assets/img/bg2.jpg)"],[1,"col-xl-12"],[1,"business-wrapper"],[1,"business-text","text-center"],["id","testi",1,"testi","py-5"],[1,"container","py-md-5","py-3"],[1,"center"],[1,"heading","py-3","my-sm-5","my-3","testimonial_content"],[1,"col-lg-6","mb-4"],[1,"row","testi-cgrid","border-right-grid"],[1,"col-sm-4","testi-icon","mb-sm-0","mb-3"],["src","../../assets/img/testimonials/testimonials-1.jpg","alt","",1,"img-fluid"],[1,"col-sm-8"],[1,"mx-auto"],[1,"fa","fa-quote-left"],[1,"b-w3ltxt","mt-3"],[1,"row","testi-cgrid","border-left-grid"],["src","../../assets/img/testimonials/testimonials-2.jpg","alt","",1,"img-fluid"],["id","hero",1,"d-flex","align-items-center","justify-content-center"],[4,"ngIf"],[4,"ngFor","ngForOf"],["ngbSlide",""],["alt","Random first slide","width","100%",1,"image_customization",3,"src"],[1,"carousel-caption"],[1,"animated","slideInLeft"],[1,"animated","slideInRight"],[1,"padding_disp"]],template:function(e,t){1&e&&(s.uc(0,m,2,1,"section",0),s.Qb(1,"div",1),s.Qb(2,"div",2),s.Qb(3,"div",3),s.Qb(4,"div",4),s.Qb(5,"div",5),s.Qb(6,"h2"),s.wc(7,"Needs experience Trading consultant?"),s.Pb(),s.Pb(),s.Pb(),s.Qb(8,"div",6),s.Qb(9,"div",7),s.Qb(10,"a",8),s.wc(11,"Contact US "),s.Lb(12,"i",9),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(13,"section",2),s.uc(14,l,4,1,"div",10),s.Qb(15,"div",11),s.Qb(16,"div",12),s.Lb(17,"img",13),s.Pb(),s.Qb(18,"div",12),s.Qb(19,"div",14),s.Qb(20,"div",15),s.Qb(21,"p",16),s.wc(22,"Live Currency"),s.Pb(),s.Pb(),s.Lb(23,"iframe",17),s.Pb(),s.Pb(),s.Pb(),s.Lb(24,"hr"),s.Qb(25,"div",11),s.Qb(26,"div",12),s.Lb(27,"iframe",18),s.Pb(),s.Qb(28,"div",12),s.Lb(29,"iframe",19),s.Pb(),s.Pb(),s.Pb(),s.Qb(30,"section",20),s.Qb(31,"div",3),s.Qb(32,"div",12),s.Qb(33,"div",21),s.Qb(34,"div",22),s.Qb(35,"h2",23),s.wc(36,"Who We Are"),s.Pb(),s.Pb(),s.Qb(37,"div",15),s.Qb(38,"h4"),s.wc(39,"Reliable Trade Solution is trading consultant company which incorporated with aim to give professional assistance to traders & give them handsome return on their investment"),s.Pb(),s.Qb(40,"p"),s.wc(41,"Reliable Trade Solution has experience team of Researcher & Analyst who support traders to grow financially. Our ideal team serves traders professionally to gain good return in different market. We work flawlessly in the market to rescue traders stuck into the market & will help them throughout providing accurate trading signals. We serve in Singapore and Malaysia Stock Market as well as Forex Currency and Comex Commodity Market with minimal charges and ensure the excellent assistance throughout their trading"),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(42,"div",12),s.Lb(43,"img",24),s.Pb(),s.Pb(),s.Pb(),s.Qb(44,"div",25),s.Qb(45,"div",2),s.Qb(46,"div",3),s.Qb(47,"div",26),s.Qb(48,"div",27),s.Qb(49,"div",28),s.Qb(50,"p"),s.wc(51,"The goal of a successful trader is to make the best trades. Money is secondary"),s.Pb(),s.Qb(52,"span"),s.wc(53,"Alexander Elder"),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(54,"section",29),s.Qb(55,"div",30),s.Qb(56,"div",31),s.Qb(57,"h3",32),s.wc(58,"What Our Client Say"),s.Pb(),s.Pb(),s.Qb(59,"div",3),s.Qb(60,"div",33),s.Qb(61,"div",34),s.Qb(62,"div",35),s.Lb(63,"img",36),s.Pb(),s.Qb(64,"div",37),s.Qb(65,"p",38),s.Lb(66,"span",39),s.wc(67," The Best Trading Tips to earn the daily profit from market with minimum investment."),s.Pb(),s.Qb(68,"h6",40),s.wc(69,"Lee - "),s.Qb(70,"span"),s.wc(71,"customer"),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(72,"div",33),s.Qb(73,"div",41),s.Qb(74,"div",35),s.Lb(75,"img",42),s.Pb(),s.Qb(76,"div",37),s.Qb(77,"p",38),s.Lb(78,"span",39),s.wc(79,"I am trading with this company from last 1 year and got the desired profit and higher returns over investment"),s.Pb(),s.Qb(80,"h6",40),s.wc(81,"Ng Ooi - "),s.Qb(82,"span"),s.wc(83,"customer"),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb()),2&e&&(s.hc("ngIf",t.homeObj),s.yb(14),s.hc("ngIf",t.homeObj))},directives:[i.k,r.b,i.j,r.f],styles:[".padding_disp[_ngcontent-%COMP%]{padding:2em;text-align:-webkit-center;white-space:pre-wrap}.carousel-control-next[_ngcontent-%COMP%]:hover, .carousel-control-prev[_ngcontent-%COMP%]:hover{background:rgba(0,0,0,.7)}ngb-carousel[_ngcontent-%COMP%]{width:100%!important;height:100vh!important}.carousel-caption[_ngcontent-%COMP%]{top:50%;transform:translateY(-50%);bottom:auto!important;-webkit-backdrop-filter:brightness(.5);backdrop-filter:brightness(.5)}.item[_ngcontent-%COMP%]{transform-style:preserve-3d}.center[_ngcontent-%COMP%]{text-align:center;-webkit-backdrop-filter:brightness(.5);backdrop-filter:brightness(.5);color:#fff}.business-area[_ngcontent-%COMP%]{background-size:cover;background-position:50%}.pb-110[_ngcontent-%COMP%]{padding-bottom:110px}.pt-105[_ngcontent-%COMP%]{padding-top:105px}.business-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:36px;color:#fff;font-weight:800;line-height:50px;margin-bottom:0;padding:0 77px}.business-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d6d6d6;font-size:16px;display:inline-block;position:relative;margin-top:14px}.experience-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#002e5b;font-size:36px;font-weight:700;margin-bottom:0;margin-top:0}.experience-button[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{color:#fff;background:#002e5b;transition:.3s}.yellow-bg[_ngcontent-%COMP%]{background:#faebd7}.pb-30[_ngcontent-%COMP%]{padding-bottom:30px}.pt-50[_ngcontent-%COMP%]{padding-top:50px}.card-header[_ngcontent-%COMP%]{padding:.75rem 1.25rem;margin-bottom:0;border-bottom:1px solid rgba(0,0,0,.125);-webkit-backdrop-filter:brightness(.5)!important;backdrop-filter:brightness(.5)!important;color:#fff8dc!important;font-weight:bolder!important;text-align:center}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({imports:[[o.d.forChild(h)],o.d]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({imports:[[i.b,f,r.e]]}),e})()}}]);