(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"374l":function(n,a,s){"use strict";s.r(a);var t=s("CcnG"),p=s("gIcY"),o=function(){function n(){this.form=new p.FormGroup({}),this.model={},this.options={},this.fields=[{key:"firstName",type:"input",templateOptions:{required:!0,type:"text",label:"First Name"}},{key:"address",wrappers:["panel"],templateOptions:{label:"Address"},fieldGroup:[{key:"town",type:"input",templateOptions:{required:!0,type:"text",label:"Town"}}]}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Nested Forms (fieldGroup wrapper)",description:"\n              This example demonstrates how to nest formly-form's using custom templates\n            ",component:o,files:[{file:"app.component.html",content:s("IMTU"),filecontent:s("XwEL")},{file:"app.component.ts",content:s("SrBt"),filecontent:s("WzTa")},{file:"panel-wrapper.component.ts",content:s("7SMc"),filecontent:s("oNAL")},{file:"app.module.ts",content:s("HtxT"),filecontent:s("rjqg")}]}]},l=function(){},c=s("NcP4"),u=s("goW2"),i=s("MT1c"),r=s("1Q/V"),k=s("9+aI"),m=s("haId"),d=s("LJsP"),f=s("yR2A"),g=s("grA4"),y=s("UFMs"),b=s("mrSG"),w=function(n){function a(){return null!==n&&n.apply(this,arguments)||this}return Object(b.__extends)(a,n),a}(s("HkYz").c),C=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function v(n){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{fieldComponent:0}),(n()(),t["\u0275eld"](1,0,null,null,4,"div",[["class","card"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,1,"h3",[["class","card-header"]],null,null,null,null,null)),(n()(),t["\u0275ted"](3,null,["",""])),(n()(),t["\u0275eld"](4,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,16777216,[[1,3],["fieldComponent",1]],null,0,null,null,null,null,null,null,null))],null,function(n,a){n(a,3,0,a.component.to.label)})}var F=t["\u0275ccf"]("formly-wrapper-panel",w,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-wrapper-panel",[],null,null,null,v,C)),t["\u0275did"](1,49152,null,0,w,[],null,null)],null,null)},{form:"form",field:"field",options:"options",model:"model"},{},[]),h=s("pMnS"),x=s("4o01"),M=s("Dl9q"),O=s("9Glx"),N=s("UcnZ"),_=s("DAbo"),R=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,a,s){var p=!0,o=n.component;return"submit"===a&&(p=!1!==t["\u0275nov"](n,2).onSubmit(s)&&p),"reset"===a&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===a&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),t["\u0275eld"](5,0,null,null,3,"formly-form",[],null,null,null,M.b,M.a)),t["\u0275did"](6,966656,null,0,O.a,[N.a,_.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,O.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](7,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,a){var s=a.component;n(a,2,0,s.form),n(a,6,0,s.model,s.form,s.fields,s.options)},function(n,a){n(a,0,0,t["\u0275nov"](a,4).ngClassUntouched,t["\u0275nov"](a,4).ngClassTouched,t["\u0275nov"](a,4).ngClassPristine,t["\u0275nov"](a,4).ngClassDirty,t["\u0275nov"](a,4).ngClassValid,t["\u0275nov"](a,4).ngClassInvalid,t["\u0275nov"](a,4).ngClassPending)})}var A=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,S,R)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),G=s("Ip0R"),W=s("M2Lx"),L=s("eDkP"),P=s("Fzqc"),T=s("v9Dh"),q=s("6LlJ"),V=s("F6kA"),I=s("dWZg"),D=s("lLAP"),U=s("4c35"),B=s("qAlS"),z=s("Wf4p"),J=s("La40"),j=s("SMsm"),E=s("UodH"),Q=s("5QwG"),Y=s("XR12"),H=s("me7w"),Z=s("N3PW"),X=s("l4pn"),K=s("Fv2i"),$=s("wBYW"),nn=s("IE48"),an=s("zn1Q"),sn=s("Q4Tx"),tn=s("zdmU"),pn=s("Nsh5"),on=s("8mMr"),en=s("LC5p"),ln=s("0/Q6"),cn=s("mqvi"),un=s("lYui"),rn=s("1ey0"),kn=function(){},mn=s("ZYCi"),dn=s("cIcG");s.d(a,"ConfigModuleNgFactory",function(){return fn});var fn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,u.a,i.a,r.a,k.a,m.a,d.a,f.a,g.a,y.a,F,h.a,x.a,A]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,G.NgLocalization,G.NgLocaleLocalization,[t.LOCALE_ID,[2,G["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,W.c,W.c,[]),t["\u0275mpd"](4608,L.c,L.c,[L.i,L.e,t.ComponentFactoryResolver,L.h,L.f,t.Injector,t.NgZone,G.DOCUMENT,P.b]),t["\u0275mpd"](5120,L.j,L.k,[L.c]),t["\u0275mpd"](5120,T.b,T.c,[L.c]),t["\u0275mpd"](4608,q.a,q.a,[]),t["\u0275mpd"](4608,V.a,V.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_i"],p["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,N.a,N.a,[_.b]),t["\u0275mpd"](1073742336,G.CommonModule,G.CommonModule,[]),t["\u0275mpd"](1073742336,I.b,I.b,[]),t["\u0275mpd"](1073742336,W.d,W.d,[]),t["\u0275mpd"](1073742336,D.a,D.a,[]),t["\u0275mpd"](1073742336,P.a,P.a,[]),t["\u0275mpd"](1073742336,U.g,U.g,[]),t["\u0275mpd"](1073742336,B.b,B.b,[]),t["\u0275mpd"](1073742336,L.g,L.g,[]),t["\u0275mpd"](1073742336,z.l,z.l,[[2,z.d]]),t["\u0275mpd"](1073742336,T.e,T.e,[]),t["\u0275mpd"](1073742336,z.w,z.w,[]),t["\u0275mpd"](1073742336,J.i,J.i,[]),t["\u0275mpd"](1073742336,j.b,j.b,[]),t["\u0275mpd"](1073742336,E.c,E.c,[]),t["\u0275mpd"](1073742336,Q.b,Q.b,[]),t["\u0275mpd"](512,_.b,_.b,[]),t["\u0275mpd"](1024,_.a,function(){return[Y.b(),{types:[{name:"input",component:H.a,wrappers:["form-field"]},{name:"checkbox",component:Z.a,wrappers:["form-field"],defaultOptions:{templateOptions:{indeterminate:!0,hideLabel:!0}}},{name:"radio",component:X.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:K.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:$.a,wrappers:["form-field"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:nn.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"addons",component:an.a},{name:"form-field",component:sn.a}],manipulators:[{class:tn.a,method:"run"}]},Y.b(),{wrappers:[{name:"panel",component:w}]}]},[]),t["\u0275mpd"](1073742336,Y.a,Y.a,[_.b,t.ComponentFactoryResolver,[2,_.a]]),t["\u0275mpd"](1073742336,pn.h,pn.h,[]),t["\u0275mpd"](1073742336,on.b,on.b,[]),t["\u0275mpd"](1073742336,z.m,z.m,[]),t["\u0275mpd"](1073742336,z.u,z.u,[]),t["\u0275mpd"](1073742336,en.b,en.b,[]),t["\u0275mpd"](1073742336,ln.c,ln.c,[]),t["\u0275mpd"](1073742336,cn.a,cn.a,[]),t["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bb"],p["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,un.a,un.a,[]),t["\u0275mpd"](1073742336,rn.a,rn.a,[]),t["\u0275mpd"](1073742336,kn,kn,[]),t["\u0275mpd"](1073742336,mn.s,mn.s,[[2,mn.y],[2,mn.p]]),t["\u0275mpd"](1073742336,l,l,[]),t["\u0275mpd"](1024,mn.n,function(){return[[{path:"",component:dn.a,data:e}]]},[])])})},"7SMc":function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component<span class="token punctuation" >,</span> ViewChild<span class="token punctuation" >,</span> ViewContainerRef <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FieldWrapper <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-wrapper-panel\'</span><span class="token punctuation" >,</span>\n  template<span class="token punctuation" >:</span> `\n    <span class="token operator" >&lt;</span>div <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"card"</span><span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>h3 <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"card-header"</span><span class="token operator" >></span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> to<span class="token punctuation" >.</span>label <span class="token punctuation" >}</span><span class="token punctuation" >}</span><span class="token operator" >&lt;</span><span class="token operator" >/</span>h3<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>div <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"card-body"</span><span class="token operator" >></span>\n        <span class="token operator" >&lt;</span>ng<span class="token operator" >-</span>container #fieldComponent<span class="token operator" >></span><span class="token operator" >&lt;</span><span class="token operator" >/</span>ng<span class="token operator" >-</span>container<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n  `<span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >PanelWrapperComponent</span> <span class="token keyword" >extends</span> <span class="token class-name" >FieldWrapper</span> <span class="token punctuation" >{</span>\n  @<span class="token function" >ViewChild</span><span class="token punctuation" >(</span><span class="token string" >\'fieldComponent\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>read<span class="token punctuation" >:</span> ViewContainerRef<span class="token punctuation" >}</span><span class="token punctuation" >)</span> fieldComponent<span class="token punctuation" >:</span> ViewContainerRef<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'},HtxT:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> PanelWrapperComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./panel-wrapper.component\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      wrappers<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'panel\'</span><span class="token punctuation" >,</span> component<span class="token punctuation" >:</span> PanelWrapperComponent <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n    PanelWrapperComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},IMTU:function(n,a){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},SrBt:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'firstName\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n        type<span class="token punctuation" >:</span> <span class="token string" >\'text\'</span><span class="token punctuation" >,</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'First Name\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span>\n      wrappers<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'panel\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span> label<span class="token punctuation" >:</span> <span class="token string" >\'Address\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      fieldGroup<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n        key<span class="token punctuation" >:</span> <span class="token string" >\'town\'</span><span class="token punctuation" >,</span>\n        type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n        templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n          type<span class="token punctuation" >:</span> <span class="token string" >\'text\'</span><span class="token punctuation" >,</span>\n          label<span class="token punctuation" >:</span> <span class="token string" >\'Town\'</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span>valid<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},WzTa:function(n,a){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'firstName',\n      type: 'input',\n      templateOptions: {\n        required: true,\n        type: 'text',\n        label: 'First Name',\n      },\n    },\n    {\n      key: 'address',\n      wrappers: ['panel'],\n      templateOptions: { label: 'Address' },\n      fieldGroup: [{\n        key: 'town',\n        type: 'input',\n        templateOptions: {\n          required: true,\n          type: 'text',\n          label: 'Town',\n        },\n      }],\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},XwEL:function(n,a){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  </formly-form>\n</form>\n'},oNAL:function(n,a){n.exports="import { Component, ViewChild, ViewContainerRef } from '@angular/core';\nimport { FieldWrapper } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-wrapper-panel',\n  template: `\n    <div class=\"card\">\n      <h3 class=\"card-header\">{{ to.label }}</h3>\n      <div class=\"card-body\">\n        <ng-container #fieldComponent></ng-container>\n      </div>\n    </div>\n  `,\n})\nexport class PanelWrapperComponent extends FieldWrapper {\n  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;\n}"},rjqg:function(n,a){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { PanelWrapperComponent } from './panel-wrapper.component';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      wrappers: [\n        { name: 'panel', component: PanelWrapperComponent },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    PanelWrapperComponent,\n  ],\n})\nexport class AppModule { }\n"}}]);