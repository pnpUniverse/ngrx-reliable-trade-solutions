!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"ct+p":function(n,i,r){"use strict";r.r(i),r.d(i,"HomeModule",function(){return P});var o=r("ofXK"),c=r("1kSV"),a=r("tyNb"),s=r("AytR"),b=r("fXoL"),d=r("IYfF");function h(e,t){if(1&e&&(b.Lb(0,"img",16),b.Qb(1,"div",17),b.Qb(2,"h1",18),b.wc(3),b.Pb(),b.Qb(4,"h2",19),b.wc(5),b.Pb(),b.Pb()),2&e){var n=b.cc().$implicit,i=b.cc(3);b.hc("src",i.image_path_server+n,b.rc),b.yb(3),b.xc(i.homeObj.name),b.yb(2),b.xc(i.homeObj.our_vision)}}function m(e,t){1&e&&b.uc(0,h,6,3,"ng-template",15)}function p(e,t){if(1&e&&(b.Qb(0,"ngb-carousel"),b.uc(1,m,1,0,void 0,14),b.Pb()),2&e){var n=b.cc(2);b.yb(1),b.hc("ngForOf",n.homeObj.banner_image_path)}}function f(e,t){if(1&e&&(b.Qb(0,"section",12),b.uc(1,p,2,1,"ngb-carousel",13),b.Pb()),2&e){var n=b.cc();b.yb(1),b.hc("ngIf",n.homeObj.banner_image_path)}}function u(e,t){if(1&e&&(b.Qb(0,"div",20),b.Qb(1,"h5"),b.wc(2),b.Pb(),b.Pb()),2&e){var n=b.cc();b.yb(2),b.xc(n.homeObj.banner_message)}}var l,g,v,w=s.a.image_path,_=[{path:"",component:(l=function(){function n(t,i){e(this,n),this.authService=t,this.image_path_server=w,this.images=[1,2,3].map(function(){return"https://picsum.photos/900/500?random&t=".concat(Math.random())}),i.interval=5e3,i.wrap=!1,i.keyboard=!1,i.pauseOnHover=!1,i.wrap=!0}var i,r,o;return i=n,(r=[{key:"ngOnInit",value:function(){var e=this;this.authService.retrieveBySlug("home","home").subscribe(function(t){t&&t.data&&t.data._id&&(e.homeObj=t.data)}),this.authService.retrieve("services").subscribe(function(t){t&&t.data&&t.data&&(e.services=t.data)})}}])&&t(i.prototype,r),o&&t(i,o),n}(),l.\u0275fac=function(e){return new(e||l)(b.Kb(d.a),b.Kb(c.c))},l.\u0275cmp=b.Eb({type:l,selectors:[["app-home"]],decls:17,vars:2,consts:[["id","hero","class","d-flex align-items-center justify-content-center",4,"ngIf"],[1,"container"],["class","row mt-5 justify-content-center","class","padding_disp",4,"ngIf"],[1,"row"],[1,"col-md-6"],["src","../../assets/img/Forex_charts.jpg","height","230","width","100%"],[1,"card",2,"width","500px"],[1,"card-body"],[1,"card-title"],["scrolling","No","name","lcFrame","id","lcFrame","src","https://sslfxrates.forexprostools.com/index.php?param&force_lang=1&change=hide"],["src","https://sgx.i3investor.com/jsp/module/mod_side_chart.jsp","width","100%","height","450","scrolling","no","frameborder","0"],["src","https://klse.i3investor.com/jsp/module/mod_side_chart.jsp","width","100%","height","450","scrolling","no","frameborder","0"],["id","hero",1,"d-flex","align-items-center","justify-content-center"],[4,"ngIf"],[4,"ngFor","ngForOf"],["ngbSlide",""],["alt","Random first slide","width","100%",1,"image_customization",3,"src"],[1,"carousel-caption"],[1,"animated","slideInLeft"],[1,"animated","slideInRight"],[1,"padding_disp"]],template:function(e,t){1&e&&(b.uc(0,f,2,1,"section",0),b.Qb(1,"section",1),b.uc(2,u,3,1,"div",2),b.Qb(3,"div",3),b.Qb(4,"div",4),b.Lb(5,"img",5),b.Pb(),b.Qb(6,"div",4),b.Qb(7,"div",6),b.Qb(8,"div",7),b.Qb(9,"p",8),b.wc(10,"Live Currency"),b.Pb(),b.Pb(),b.Lb(11,"iframe",9),b.Pb(),b.Pb(),b.Pb(),b.Qb(12,"div",3),b.Qb(13,"div",4),b.Lb(14,"iframe",10),b.Pb(),b.Qb(15,"div",4),b.Lb(16,"iframe",11),b.Pb(),b.Pb(),b.Pb()),2&e&&(b.hc("ngIf",t.homeObj),b.yb(2),b.hc("ngIf",t.homeObj))},directives:[o.k,c.b,o.j,c.f],styles:[".padding_disp[_ngcontent-%COMP%]{padding:2em;text-align:-webkit-center;white-space:pre-wrap}.carousel-control-next[_ngcontent-%COMP%]:hover, .carousel-control-prev[_ngcontent-%COMP%]:hover{background:rgba(0,0,0,.7)}ngb-carousel[_ngcontent-%COMP%]{width:100%!important;height:100vh!important}.carousel-caption[_ngcontent-%COMP%]{top:50%;transform:translateY(-50%);bottom:auto!important;-webkit-backdrop-filter:brightness(.5);backdrop-filter:brightness(.5)}.item[_ngcontent-%COMP%]{transform-style:preserve-3d}"]}),l)}],y=((v=function t(){e(this,t)}).\u0275fac=function(e){return new(e||v)},v.\u0275mod=b.Ib({type:v}),v.\u0275inj=b.Hb({imports:[[a.d.forChild(_)],a.d]}),v),P=((g=function t(){e(this,t)}).\u0275fac=function(e){return new(e||g)},g.\u0275mod=b.Ib({type:g}),g.\u0275inj=b.Hb({imports:[[o.b,y,c.e]]}),g)}}])}();