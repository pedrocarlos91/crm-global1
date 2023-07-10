import{r as m,l as de,o as u,f as n,F as re,m as _e,b as c,t as U,T as ke,c as Ve,w as ie,a as e,u as s,Z as we,d as me,g as i,e as $e,n as Ue,O as xe}from"./app-b709ebbc.js";import{_ as r}from"./InputLabel-679afb37.js";import{a as d,_}from"./TextInput-46e4f7a3.js";import{P as qe}from"./PrimaryButton-09ef35df.js";import{_ as Se}from"./GuestLayout-7d524535.js";import{_ as V,a as Ce}from"./TextAreaInput-92da0d43.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SwitchLanguage-37a6c79d.js";const Pe={class:"flex flex-row"},Re=["name","id","value","checked"],ze=["for"],ne={__name:"RadioGroupInput",props:{modelValue:{type:String,required:!0},groupName:{type:String,required:!0},options:{type:Array,required:!0},optionchecked:{type:String}},emits:["updateRadio"],setup(w,{expose:x,emit:q}){const S=m(null);de(()=>{}),x({focus:()=>S.value.focus()});const $=f=>{console.log(f.target.value),q("updateRadio",f.target.value)};return(f,C)=>(u(),n("div",Pe,[(u(!0),n(re,null,_e(w.options,v=>(u(),n("div",{key:v.value,class:"mr-4"},[c("input",{type:"radio",name:w.groupName,id:v.value,value:v.value,class:"mr-2",onChange:$,checked:w.optionchecked===v.value},null,40,Re),c("label",{for:v.value},U(f.$t(v.label)),9,ze)]))),128))]))}},Be={class:"flex flex-col"},Le=["id"],Oe=["for"],Ee={__name:"CheckboxGroupInput",props:{options:{type:Array,required:!0}},emits:["updateCheck"],setup(w,{expose:x,emit:q}){const S=m(null);de(()=>{});const $=f=>{const C={key:f.target.id,value:f.target.checked};q("updateCheck",C)};return x({focus:()=>S.value.focus()}),(f,C)=>(u(),n("div",Be,[(u(!0),n(re,null,_e(w.options,v=>(u(),n("div",{key:v.value,class:"mb-2"},[c("input",{onChange:$,type:"checkbox",id:v.value,class:"mr-2"},null,40,Le),c("label",{for:v.value},U(f.$t(v.label)),9,Oe)]))),128))]))}},Ie={class:""},Ae={class:"max-w-7xl mx-auto"},Me={class:"bg-white overflow-hidden"},Ne={key:0,class:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert"},Te=c("span",{class:"font-medium"},"Error!",-1),De={class:"my-6"},He={class:"font-semibold text-xl text-gray-800 leading-tight"},je={class:"mt-5 text-sm"},Fe={class:"py-4"},Ge=["onSubmit"],Ye={class:""},Ze={class:"mb-5"},We={class:"mb-5"},Je={class:"mb-5"},Ke={key:0,class:"mb-5"},Qe={key:1,class:"mb-5"},Xe={key:2,class:"mb-5"},el={key:3,class:"mb-5"},ll={key:4,class:"mb-5"},sl={key:5,class:"mb-5"},al={key:6,class:"mb-5"},ol={key:7,class:"mb-5"},tl={key:8,class:"mb-5"},ul={key:9,class:"mb-5"},nl={key:10,class:"mb-5"},rl={key:11,class:"mb-5"},il={key:12,class:"mb-5"},ml={key:13,class:"mb-5"},dl={key:14,class:"mb-5"},_l={key:15,class:"mb-5"},cl={key:16,class:"mb-5"},vl={key:17,class:"mb-5"},pl={key:18,class:"mb-5"},fl={key:19,class:"mb-5"},gl={key:20,class:"mb-5"},bl={key:21,class:"mb-5"},yl={key:22,class:"mb-5"},hl={key:23,class:"mb-5"},kl={key:24,class:"mb-5"},Vl={key:25,class:"mb-5"},wl={key:26,class:"mb-5"},$l={key:27,class:"mb-5"},Ul={key:28,class:"mb-5"},xl={key:29,class:"mb-5"},ql={key:30,class:"mb-5"},Sl={key:31,class:"mb-5"},Cl={key:32,class:"mb-5"},Pl={key:33,class:"mb-5"},Rl={key:34,class:"mb-5"},zl={key:35,class:"mb-5"},Bl={key:36,class:"mb-5"},Ll={class:"flex items-center justify-start mt-4"},Hl={__name:"Welcome",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0},seller:{type:Object}},setup(w){const x=w,q=[{label:"services.health_insurance",value:"health_insurance"},{label:"services.credit_solutions",value:"credit_solutions"},{label:"services.life_insurance",value:"life_insurance"},{label:"services.business_consulting",value:"business_consulting"},{label:"services.auto_commercial_insurance",value:"auto_commercial_insurance"},{label:"services.business_credit",value:"business_credit"},{label:"services.personal_loan_low_mortgage",value:"personal_loan_low_mortgage"},{label:"services.taxes",value:"taxes"},{label:"services.home_insurance",value:"home_insurance"}],S=[{label:"0",value:"0"},{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5",value:"5"},{label:"6",value:"6"},{label:"7",value:"7"},{label:"8",value:"8"},{label:"9",value:"9"},{label:"10",value:"10"},{label:"10+",value:"10+"}],$=[{label:"general.yes",value:"yes"},{label:"general.no",value:"no"}],f=[{label:"general.personal",value:"personal"},{label:"general.business",value:"business"}],C=[{label:"general.new_policy",value:"new_policy"},{label:"general.policy_review",value:"policy_review"}],v=[{label:"general.accouting",value:"accouting"},{label:"general.business_credit",value:"business_credit"},{label:"general.business_life_insurance",value:"business_life_insurance"},{label:"general.business_loans",value:"business_loans"},{label:"general.marketing",value:"marketing"},{label:"general.taxes",value:"taxes"},{label:"general.other",value:"other"}],ce=[{label:"general.auto",value:"auto"},{label:"general.workers_compensation",value:"workers_compensation"},{label:"general.liability_insurance",value:"liability_insurance"}],ve=[{label:"general.income_verification",value:"income_verification"},{label:"general.no_income_verification",value:"no_income_verification"}],pe=[{label:"general.primary_home",value:"primary_home"},{label:"general.invested_home",value:"invested_home"},{label:"general.foreign_national_home",value:"foreign_national_home"},{label:"general.line_of_credit",value:"line_of_credit"},{label:"general.personal_home",value:"personal_home"}],fe=[{label:"general.business_tax_preparation",value:"business_tax_preparation"},{label:"general.personal_tax_preparation",value:"personal_tax_preparation"}],ge=[{label:"general.primary_home",value:"primary_home"},{label:"general.invested_home",value:"invested_home"},{label:"general.second_vacation_home",value:"second_vacation_home"}],l=ke({service:"",name:"",lastname:"",phone:"",businessPhone:"",email:"",businessEmail:"",company_name:"",city:"",regions_state_province:"",like_be_contacted:"",address:"",zip_code:"",house_hold_income:"",how_many_dependents:"",ages_dependents:"",have_medicaid:"",immigration_status:"",approximate_credit_score:"",personal_or_business_credit:"",purpose_of_credit:"",date_of_birth:"",do_you_smoke:"",purpose:"",type_of_services:{accouting:!1,business_credit:!1,business_life_insurance:!1,business_loans:!1,marketing:!1,taxes:!1,other:!1},vin:"",driver_licence:"",interested_in:"",year_of_vehicle:"",monthly_premium:"",insurance_for_six_months:"",moving_violations:"",accidents_five_years:"",loan_amount_requesting:"",type_of_loan:"",type_of_taxes_service:"",roof_age:"",residence_home_status:"",seller_id:x.seller.id,verification:"",comments:"",locale:localStorage.getItem("locale")}),be=t=>{l.type_of_services[t.key]=t.value},b=m(!1),P=m(!1),y=m(!1),R=m(!1),z=m(!1),h=m(!1),k=m(!1),g=m(!1),B=m(!1),L=m(!1),p=m(!1),A=m(!1),M=m(!1),N=m(!1),T=m(!1),D=m(!1),O=m(!1),H=m(!1),j=m(!1),F=m(!1),G=m(!1),Y=m(!1),Z=m(!1),W=m(!1),J=m(!1),K=m(!1),Q=m(!1),E=m(!1),X=m(!1),ee=m(!1),le=m(!1),se=m(!1),I=m(!1),ae=m(!1),oe=m(!1),te=m(!1),ue=m(!1),ye=t=>{switch(b.value=!1,P.value=!1,y.value=!1,R.value=!1,z.value=!1,h.value=!1,k.value=!1,g.value=!1,B.value=!1,L.value=!1,p.value=!1,A.value=!1,M.value=!1,N.value=!1,T.value=!1,D.value=!1,O.value=!1,H.value=!1,j.value=!1,F.value=!1,G.value=!1,Y.value=!1,Z.value=!1,W.value=!1,J.value=!1,K.value=!1,Q.value=!1,E.value=!1,X.value=!1,ee.value=!1,le.value=!1,se.value=!1,I.value=!1,ae.value=!1,oe.value=!1,te.value=!1,ue.value=!1,t.target.value){case"health_insurance":b.value=!0,y.value=!0,h.value=!0,k.value=!0,g.value=!0,L.value=!0,p.value=!0,A.value=!0,M.value=!0,N.value=!0,T.value=!0,D.value=!0;break;case"credit_solutions":b.value=!0,y.value=!0,g.value=!0,O.value=!0,H.value=!0,j.value=!0,p.value=!0;break;case"life_insurance":b.value=!0,y.value=!0,h.value=!0,k.value=!0,g.value=!0,p.value=!1,F.value=!0,G.value=!0,Y.value=!0,p.value=!0;break;case"business_consulting":P.value=!0,R.value=!0,h.value=!0,z.value=!0,k.value=!0,g.value=!0,Z.value=!0,p.value=!0;break;case"auto_commercial_insurance":b.value=!0,y.value=!0,B.value=!0,W.value=!0,J.value=!0,K.value=!0,Q.value=!0,E.value=!0,X.value=!0,ee.value=!0,le.value=!0,p.value=!0;break;case"business_credit":P.value=!0,R.value=!0,z.value=!0,h.value=!0,k.value=!0,g.value=!0,se.value=!0,I.value=!0,p.value=!0;break;case"personal_loan_low_mortgage":b.value=!0,y.value=!0,h.value=!0,k.value=!0,g.value=!0,p.value=!0,O.value=!0,ae.value=!0,I.value=!0;break;case"taxes":b.value=!0,y.value=!0,h.value=!0,k.value=!0,g.value=!0,p.value=!0,oe.value=!0;break;case"home_insurance":b.value=!0,y.value=!0,h.value=!0,k.value=!0,g.value=!0,p.value=!0,te.value=!0,ue.value=!0,E.value=!0,L.value=!0,B.value=!0;break}},he=()=>{l.locale=localStorage.getItem("locale"),xe.post("/customers",l)};return(t,a)=>(u(),Ve(Se,null,{default:ie(()=>[e(s(we),{title:"Registro"}),c("div",Ie,[c("div",Ae,[c("div",Me,[Object.keys(t.$page.props.errors).length?(u(),n("div",Ne,[Te,me(" "+U(t.$page.props.errors.error_customer_create),1)])):i("",!0),c("div",De,[c("h2",He,U(t.$t("form_page.title")),1),c("p",je,U(t.$t("form_page.paragraph")),1)]),c("div",Fe,[c("form",{onSubmit:$e(he,["prevent"])},[c("div",Ye,[c("div",Ze,[e(r,{for:"service",value:t.$t("form.select_service")},null,8,["value"]),e(V,{id:"service",class:"mt-1 block w-full",modelValue:s(l).service,"onUpdate:modelValue":a[0]||(a[0]=o=>s(l).service=o),options:q,onChange:ye,required:""},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.service},null,8,["message"])]),s(l).service?(u(),n(re,{key:0},[c("div",We,[e(r,{for:"name",value:t.$t("form.first_name")+" *"},null,8,["value"]),e(_,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(l).name,"onUpdate:modelValue":a[1]||(a[1]=o=>s(l).name=o),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.name},null,8,["message"])]),c("div",Je,[e(r,{for:"lastnamename",value:t.$t("form.last_name")+" *"},null,8,["value"]),e(_,{id:"lastname",type:"text",class:"mt-1 block w-full",modelValue:s(l).lastname,"onUpdate:modelValue":a[2]||(a[2]=o=>s(l).lastname=o),required:"",autocomplete:"lastname"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.lastname},null,8,["message"])]),b.value?(u(),n("div",Ke,[e(r,{for:"phone",value:t.$t("form.phone")+" *"},null,8,["value"]),e(_,{id:"phone",type:"text",class:"mt-1 block w-full",modelValue:s(l).phone,"onUpdate:modelValue":a[3]||(a[3]=o=>s(l).phone=o),placeholder:"10 "+t.$t("form.digits"),pattern:"[0-9]{10}",minLength:"10",maxLength:"10",required:"",autocomplete:"phone"},null,8,["modelValue","placeholder"]),e(d,{class:"mt-2",message:s(l).errors.phone},null,8,["message"])])):i("",!0),P.value?(u(),n("div",Qe,[e(r,{for:"phone",value:t.$t("form.business_phone")+" *"},null,8,["value"]),e(_,{id:"businessPhone",type:"text",class:"mt-1 block w-full",modelValue:s(l).businessPhone,"onUpdate:modelValue":a[4]||(a[4]=o=>s(l).businessPhone=o),placeholder:"10 "+t.$t("form.digits"),pattern:"[0-9]{10}",minLength:"10",maxLength:"10",required:"",autocomplete:"phone"},null,8,["modelValue","placeholder"]),e(d,{class:"mt-2",message:s(l).errors.businessPhone},null,8,["message"])])):i("",!0),y.value?(u(),n("div",Xe,[e(r,{for:"email",value:t.$t("form.email")+" *"},null,8,["value"]),e(_,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(l).email,"onUpdate:modelValue":a[5]||(a[5]=o=>s(l).email=o),required:"",autocomplete:"email"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.email},null,8,["message"])])):i("",!0),R.value?(u(),n("div",el,[e(r,{for:"email",value:t.$t("form.business_email")+" *"},null,8,["value"]),e(_,{id:"businessEmail",type:"email",class:"mt-1 block w-full",modelValue:s(l).businessEmail,"onUpdate:modelValue":a[6]||(a[6]=o=>s(l).businessEmail=o),required:"",autocomplete:"email"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.businessEmail},null,8,["message"])])):i("",!0),z.value?(u(),n("div",ll,[e(r,{for:"company_name",value:t.$t("form.company_name")},null,8,["value"]),e(_,{id:"company_name",type:"text",class:"mt-1 block w-full",modelValue:s(l).company_name,"onUpdate:modelValue":a[7]||(a[7]=o=>s(l).company_name=o),autocomplete:"company_name"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.company_name},null,8,["message"])])):i("",!0),h.value?(u(),n("div",sl,[e(r,{for:"city",value:t.$t("form.city")},null,8,["value"]),e(_,{id:"city",type:"text",class:"mt-1 block w-full",modelValue:s(l).city,"onUpdate:modelValue":a[8]||(a[8]=o=>s(l).city=o),autocomplete:"city"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.city},null,8,["message"])])):i("",!0),k.value?(u(),n("div",al,[e(r,{for:"regions_state_province",value:t.$t("form.regions_state_province")},null,8,["value"]),e(_,{id:"regions_state_province",type:"text",class:"mt-1 block w-full",modelValue:s(l).regions_state_province,"onUpdate:modelValue":a[9]||(a[9]=o=>s(l).regions_state_province=o),autocomplete:"regions_state_province"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.regions_state_province},null,8,["message"])])):i("",!0),g.value?(u(),n("div",ol,[e(r,{for:"like_be_contacted",value:t.$t("form.like_be_contacted")},null,8,["value"]),e(_,{id:"like_be_contacted",type:"text",class:"mt-1 block w-full",modelValue:s(l).like_be_contacted,"onUpdate:modelValue":a[10]||(a[10]=o=>s(l).like_be_contacted=o),autocomplete:"like_be_contacted"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.like_be_contacted},null,8,["message"])])):i("",!0),B.value?(u(),n("div",tl,[e(r,{for:"address",value:t.$t("form.address")},null,8,["value"]),e(_,{id:"address",type:"text",class:"mt-1 block w-full",modelValue:s(l).address,"onUpdate:modelValue":a[11]||(a[11]=o=>s(l).address=o),autocomplete:"address"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.address},null,8,["message"])])):i("",!0),L.value?(u(),n("div",ul,[e(r,{for:"zip_code",value:t.$t("form.zip_code")},null,8,["value"]),e(_,{id:"zip_code",type:"text",class:"mt-1 block w-full",modelValue:s(l).zip_code,"onUpdate:modelValue":a[12]||(a[12]=o=>s(l).zip_code=o),autocomplete:"zip_code"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.zip_code},null,8,["message"])])):i("",!0),A.value?(u(),n("div",nl,[e(r,{for:"house_hold_income",value:t.$t("form.house_hold_income")},null,8,["value"]),e(_,{id:"house_hold_income",type:"text",class:"mt-1 block w-full",modelValue:s(l).house_hold_income,"onUpdate:modelValue":a[13]||(a[13]=o=>s(l).house_hold_income=o),autocomplete:"house_hold_income"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.house_hold_income},null,8,["message"])])):i("",!0),M.value?(u(),n("div",rl,[e(r,{for:"how_many_dependents",value:t.$t("form.how_many_dependents")},null,8,["value"]),e(V,{id:"how_many_dependents",class:"mt-1 block w-full",modelValue:s(l).how_many_dependents,"onUpdate:modelValue":a[14]||(a[14]=o=>s(l).how_many_dependents=o),options:S},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.how_many_dependents},null,8,["message"])])):i("",!0),N.value?(u(),n("div",il,[e(r,{for:"ages_dependents",value:t.$t("form.ages_dependents")},null,8,["value"]),e(_,{id:"ages_dependents",type:"text",class:"mt-1 block w-full",modelValue:s(l).ages_dependents,"onUpdate:modelValue":a[15]||(a[15]=o=>s(l).ages_dependents=o),autocomplete:"ages_dependents"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.ages_dependents},null,8,["message"])])):i("",!0),T.value?(u(),n("div",ml,[e(r,{for:"have_medicaid",value:t.$t("form.have_medicaid")},null,8,["value"]),e(V,{id:"have_medicaid",class:"mt-1 block w-full",modelValue:s(l).have_medicaid,"onUpdate:modelValue":a[16]||(a[16]=o=>s(l).have_medicaid=o),options:$},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.have_medicaid},null,8,["message"])])):i("",!0),D.value?(u(),n("div",dl,[e(r,{for:"ages_dependents",value:t.$t("form.immigration_status")},null,8,["value"]),e(_,{id:"ages_dependents",type:"text",class:"mt-1 block w-full",modelValue:s(l).immigration_status,"onUpdate:modelValue":a[17]||(a[17]=o=>s(l).immigration_status=o),autocomplete:"immigration_status"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.immigration_status},null,8,["message"])])):i("",!0),O.value?(u(),n("div",_l,[e(r,{for:"approximate_credit_score",value:t.$t("form.approximate_credit_score")},null,8,["value"]),e(_,{id:"approximate_credit_score",type:"text",class:"mt-1 block w-full",modelValue:s(l).approximate_credit_score,"onUpdate:modelValue":a[18]||(a[18]=o=>s(l).approximate_credit_score=o),autocomplete:"approximate_credit_score"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.approximate_credit_score},null,8,["message"])])):i("",!0),H.value?(u(),n("div",cl,[e(r,{for:"personal_or_business_credit",value:t.$t("form.personal_or_business_credit")},null,8,["value"]),e(V,{id:"personal_or_business_credit",class:"mt-1 block w-full",modelValue:s(l).personal_or_business_credit,"onUpdate:modelValue":a[19]||(a[19]=o=>s(l).personal_or_business_credit=o),options:f},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.personal_or_business_credit},null,8,["message"])])):i("",!0),j.value?(u(),n("div",vl,[e(r,{for:"purpose_of_credit",value:t.$t("form.purpose_of_credit")},null,8,["value"]),e(_,{id:"purpose_of_credit",type:"text",class:"mt-1 block w-full",modelValue:s(l).purpose_of_credit,"onUpdate:modelValue":a[20]||(a[20]=o=>s(l).purpose_of_credit=o),autocomplete:"purpose_of_credit"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.purpose_of_credit},null,8,["message"])])):i("",!0),F.value?(u(),n("div",pl,[e(r,{for:"date_of_birth",value:t.$t("form.date_of_birth")},null,8,["value"]),e(_,{id:"date_of_birth",type:"date",class:"mt-1 block w-full",modelValue:s(l).date_of_birth,"onUpdate:modelValue":a[21]||(a[21]=o=>s(l).date_of_birth=o),autocomplete:"date_of_birth"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.date_of_birth},null,8,["message"])])):i("",!0),G.value?(u(),n("div",fl,[e(r,{for:"do_you_smoke",value:t.$t("form.do_you_smoke")},null,8,["value"]),e(V,{id:"do_you_smoke",class:"mt-1 block w-full",modelValue:s(l).do_you_smoke,"onUpdate:modelValue":a[22]||(a[22]=o=>s(l).do_you_smoke=o),options:$},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.have_medicaid},null,8,["message"])])):i("",!0),Y.value?(u(),n("div",gl,[e(r,{for:"purpose",value:t.$t("form.purpose")},null,8,["value"]),e(ne,{options:C,"group-name":"life_insurance_purpose",onUpdateRadio:a[23]||(a[23]=o=>s(l).purpose=o)})])):i("",!0),Z.value?(u(),n("div",bl,[e(r,{for:"purpose",value:t.$t("form.type_of_services")},null,8,["value"]),e(Ee,{options:v,onUpdateCheck:be})])):i("",!0),W.value?(u(),n("div",yl,[e(r,{for:"vin",value:t.$t("form.vin")},null,8,["value"]),e(_,{id:"vin",type:"text",class:"mt-1 block w-full",modelValue:s(l).vin,"onUpdate:modelValue":a[24]||(a[24]=o=>s(l).vin=o),autocomplete:"vin"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.vin},null,8,["message"])])):i("",!0),J.value?(u(),n("div",hl,[e(r,{for:"driver_licence",value:t.$t("form.driver_licence")},null,8,["value"]),e(_,{id:"driver_licence",type:"text",class:"mt-1 block w-full",modelValue:s(l).driver_licence,"onUpdate:modelValue":a[25]||(a[25]=o=>s(l).driver_licence=o),autocomplete:"driver_licence"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.driver_licence},null,8,["message"])])):i("",!0),K.value?(u(),n("div",kl,[e(r,{for:"interested_in",value:t.$t("form.interested_in")},null,8,["value"]),e(V,{id:"interested_in",class:"mt-1 block w-full",modelValue:s(l).interested_in,"onUpdate:modelValue":a[26]||(a[26]=o=>s(l).interested_in=o),options:ce},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.interested_in},null,8,["message"])])):i("",!0),Q.value?(u(),n("div",Vl,[e(r,{for:"year_of_vehicle",value:t.$t("form.year_of_vehicle")},null,8,["value"]),e(_,{id:"year_of_vehicle",type:"date",class:"mt-1 block w-full",modelValue:s(l).year_of_vehicle,"onUpdate:modelValue":a[27]||(a[27]=o=>s(l).year_of_vehicle=o),autocomplete:"year_of_vehicle"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.year_of_vehicle},null,8,["message"])])):i("",!0),E.value?(u(),n("div",wl,[e(r,{for:"monthly_premium",value:t.$t("form.monthly_premium")},null,8,["value"]),e(_,{id:"monthly_premium",type:"text",class:"mt-1 block w-full",modelValue:s(l).monthly_premium,"onUpdate:modelValue":a[28]||(a[28]=o=>s(l).monthly_premium=o),autocomplete:"monthly_premium"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.monthly_premium},null,8,["message"])])):i("",!0),X.value?(u(),n("div",$l,[e(r,{for:"insurance_for_six_months",value:t.$t("form.insurance_for_six_months")},null,8,["value"]),e(_,{id:"insurance_for_six_months",type:"text",class:"mt-1 block w-full",modelValue:s(l).insurance_for_six_months,"onUpdate:modelValue":a[29]||(a[29]=o=>s(l).insurance_for_six_months=o),autocomplete:"minsurance_for_six_months"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.insurance_for_six_months},null,8,["message"])])):i("",!0),ee.value?(u(),n("div",Ul,[e(r,{for:"moving_violations",value:t.$t("form.moving_violations")},null,8,["value"]),e(_,{id:"moving_violations",type:"text",class:"mt-1 block w-full",modelValue:s(l).moving_violations,"onUpdate:modelValue":a[30]||(a[30]=o=>s(l).moving_violations=o),autocomplete:"moving_violations"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.moving_violations},null,8,["message"])])):i("",!0),le.value?(u(),n("div",xl,[e(r,{for:"accidents_five_years",value:t.$t("form.accidents_five_years")},null,8,["value"]),e(_,{id:"accidents_five_years",type:"text",class:"mt-1 block w-full",modelValue:s(l).accidents_five_years,"onUpdate:modelValue":a[31]||(a[31]=o=>s(l).accidents_five_years=o),autocomplete:"accidents_five_years"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.accidents_five_years},null,8,["message"])])):i("",!0),se.value?(u(),n("div",ql,[e(r,{for:"loan_amount_requesting",value:t.$t("form.loan_amount_requesting")},null,8,["value"]),e(_,{id:"loan_amount_requesting",type:"text",class:"mt-1 block w-full",modelValue:s(l).loan_amount_requesting,"onUpdate:modelValue":a[32]||(a[32]=o=>s(l).loan_amount_requesting=o),autocomplete:"loan_amount_requesting"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.loan_amount_requesting},null,8,["message"])])):i("",!0),ae.value?(u(),n("div",Sl,[e(r,{for:"type_of_loan",value:t.$t("form.type_of_loan")},null,8,["value"]),e(V,{id:"type_of_loan",class:"mt-1 block w-full",modelValue:s(l).type_of_loan,"onUpdate:modelValue":a[33]||(a[33]=o=>s(l).type_of_loan=o),options:pe},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.type_of_loan},null,8,["message"])])):i("",!0),I.value?(u(),n("div",Cl,[e(r,{for:"purpose",value:t.$t("form.verification")},null,8,["value"]),e(ne,{options:ve,"group-name":"life_insurance_purpose",onUpdateRadio:a[34]||(a[34]=o=>s(l).verification=o),optionchecked:"no_income_verification"})])):i("",!0),oe.value?(u(),n("div",Pl,[e(r,{for:"type_of_taxes_service",value:t.$t("form.type_of_taxes_service")},null,8,["value"]),e(ne,{options:fe,"group-name":"taxes_types_services",onUpdateRadio:a[35]||(a[35]=o=>s(l).type_of_taxes_service=o)})])):i("",!0),te.value?(u(),n("div",Rl,[e(r,{for:"roof_age",value:t.$t("form.roof_age")},null,8,["value"]),e(_,{id:"roof_age",type:"text",class:"mt-1 block w-full",modelValue:s(l).roof_age,"onUpdate:modelValue":a[36]||(a[36]=o=>s(l).roof_age=o),autocomplete:"roof_age"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.roof_age},null,8,["message"])])):i("",!0),ue.value?(u(),n("div",zl,[e(r,{for:"residence_home_status",value:t.$t("form.residence_home_status")},null,8,["value"]),e(V,{id:"resident_home_status",class:"mt-1 block w-full",modelValue:s(l).residence_home_status,"onUpdate:modelValue":a[37]||(a[37]=o=>s(l).residence_home_status=o),options:ge},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.residence_home_status},null,8,["message"])])):i("",!0),p.value?(u(),n("div",Bl,[e(r,{for:"zip_code",value:t.$t("form.comments")},null,8,["value"]),e(Ce,{id:"comments",type:"text",class:"mt-1 block w-full",modelValue:s(l).comments,"onUpdate:modelValue":a[38]||(a[38]=o=>s(l).comments=o),autocomplete:"zip_code"},null,8,["modelValue"]),e(d,{class:"mt-2",message:s(l).errors.comments},null,8,["message"])])):i("",!0),c("div",Ll,[e(qe,{class:Ue(["",{"opacity-25":s(l).processing}]),disabled:s(l).processing},{default:ie(()=>[me(U(t.$t("form.save_button")),1)]),_:1},8,["class","disabled"])])],64)):i("",!0)])],40,Ge)])])])])]),_:1}))}};export{Hl as default};