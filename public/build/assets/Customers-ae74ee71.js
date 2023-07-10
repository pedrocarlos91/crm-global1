import{r as u,l as te,o as t,f as s,b as c,a,d as n,t as e,g as i,F as W,m as ae,u as se,w as V,Z as ue,p as oe,O as X}from"./app-b709ebbc.js";import{_ as ne}from"./AuthenticatedLayout-aa2d0776.js";import ie from"./Table-b7f74252.js";import{_ as re}from"./genericModal-adae083d.js";import{_ as x,a as ve}from"./TextAreaInput-92da0d43.js";import{P as ee}from"./PrimaryButton-09ef35df.js";import{_ as r}from"./InputLabel-679afb37.js";import{_ as de}from"./SecondaryButton-6da6f8d3.js";import"./SwitchLanguage-37a6c79d.js";import"./_plugin-vue_export-helper-c27b6911.js";const ce={class:"grid md:grid-cols-3 md:gap-3"},me={class:"mb-3 flex flex-col"},fe={key:0,class:"mb-3"},_e={key:1,class:"mb-3"},he={key:2,class:"mb-3"},be={key:3,class:"mb-3"},ye={key:4,class:"mb-5"},ge={key:5,class:"mb-5"},$e={key:6,class:"mb-5"},ke={key:7,class:"mb-5"},we={key:8,class:"mb-5"},pe={key:9,class:"mb-5"},Se={key:10,class:"mb-5"},Ce={key:11,class:"mb-5"},De={key:12,class:"mb-5"},Ve={key:13,class:"mb-5"},Oe={key:14,class:"mb-5"},Pe={key:15,class:"mb-5"},Le={key:16,class:"mb-5"},Me={key:17,class:"mb-5"},Ae={key:18,class:"mb-5"},Be={key:19,class:"mb-5"},je={key:20,class:"mb-5"},Ee={key:21,class:"mb-5"},qe={key:0},He={key:22,class:"mb-5"},Ne={key:23,class:"mb-5"},Ie={key:24,class:"mb-5"},Re={key:25,class:"mb-5"},Te={key:26,class:"mb-5"},ze={key:27,class:"mb-5"},Fe={key:28,class:"mb-5"},Ue={key:29,class:"mb-5"},Ye={key:30,class:"mb-5"},Ze={key:31,class:"mb-5"},Je={key:32,class:"mb-5"},Ge={key:33,class:"mb-5"},Ke={key:34,class:"mb-5"},Qe={key:35,class:"mb-5"},We={key:36,class:"mb-5"},Xe={__name:"CustomerDetail",props:{detail:{type:Object,required:!0}},setup(o){const _=o,f=u(!1),b=u(!1),k=u(!1),p=u(!1),S=u(!1),g=u(!1),h=u(!1),y=u(!1),C=u(!1),D=u(!1),$=u(!1),O=u(!1),P=u(!1),L=u(!1),M=u(!1),A=u(!1),v=u(!1),d=u(!1),m=u(!1),w=u(!1),E=u(!1),q=u(!1),H=u(!1),N=u(!1),I=u(!1),R=u(!1),T=u(!1),B=u(!1),z=u(!1),F=u(!1),U=u(!1),Y=u(!1),j=u(!1),Z=u(!1),J=u(!1),G=u(!1),K=u(!1),le=[{label:"general.accouting",value:"accouting"},{label:"general.business_credit",value:"business_credit"},{label:"general.business_life_insurance",value:"business_life_insurance"},{label:"general.business_loans",value:"business_loans"},{label:"general.marketing",value:"marketing"},{label:"general.taxes",value:"taxes"},{label:"general.other",value:"other"}];return te(()=>{switch(f.value=!1,b.value=!1,k.value=!1,p.value=!1,S.value=!1,g.value=!1,h.value=!1,y.value=!1,C.value=!1,D.value=!1,$.value=!1,O.value=!1,P.value=!1,L.value=!1,M.value=!1,A.value=!1,v.value=!1,d.value=!1,m.value=!1,w.value=!1,E.value=!1,q.value=!1,H.value=!1,N.value=!1,I.value=!1,R.value=!1,T.value=!1,B.value=!1,z.value=!1,F.value=!1,U.value=!1,Y.value=!1,j.value=!1,Z.value=!1,J.value=!1,G.value=!1,K.value=!1,_.detail.service){case"health_insurance":f.value=!0,k.value=!0,g.value=!0,h.value=!0,y.value=!0,D.value=!0,$.value=!0,O.value=!0,P.value=!0,L.value=!0,M.value=!0,A.value=!0;break;case"credit_solutions":f.value=!0,k.value=!0,y.value=!0,v.value=!0,d.value=!0,m.value=!0,$.value=!0;break;case"life_insurance":f.value=!0,k.value=!0,g.value=!0,h.value=!0,y.value=!0,$.value=!1,w.value=!0,E.value=!0,q.value=!0,$.value=!0;break;case"business_consulting":b.value=!0,p.value=!0,g.value=!0,S.value=!0,h.value=!0,y.value=!0,H.value=!0,$.value=!0,_.detail.type_of_services=JSON.parse(_.detail.type_of_services);break;case"auto_commercial_insurance":f.value=!0,k.value=!0,C.value=!0,N.value=!0,I.value=!0,R.value=!0,T.value=!1,B.value=!0,z.value=!0,F.value=!0,U.value=!0,$.value=!0;break;case"business_credit":b.value=!0,p.value=!0,S.value=!0,g.value=!0,h.value=!0,y.value=!0,Y.value=!0,j.value=!0,$.value=!0;break;case"personal_loan_low_mortgage":f.value=!0,k.value=!0,g.value=!0,h.value=!0,y.value=!0,$.value=!0,v.value=!0,Z.value=!0,j.value=!0;break;case"taxes":f.value=!0,k.value=!0,g.value=!0,h.value=!0,y.value=!0,$.value=!0,J.value=!0;break;case"home_insurance":f.value=!0,k.value=!0,g.value=!0,h.value=!0,y.value=!0,$.value=!0,G.value=!0,K.value=!0,B.value=!0,D.value=!0,C.value=!0;break}}),(l,ga)=>(t(),s("div",ce,[c("div",me,[a(r,{for:"phone",value:l.$t("form.name")},null,8,["value"]),n(" "+e(o.detail.name)+" "+e(o.detail.lastname),1)]),f.value?(t(),s("div",fe,[a(r,{for:"phone",value:l.$t("form.phone")},null,8,["value"]),n(" "+e(o.detail.phone),1)])):i("",!0),b.value?(t(),s("div",_e,[a(r,{for:"phone",value:l.$t("form.business_phone")},null,8,["value"]),n(" "+e(o.detail.businessPhone),1)])):i("",!0),k.value?(t(),s("div",he,[a(r,{for:"email",value:l.$t("form.email")},null,8,["value"]),n(" "+e(o.detail.email),1)])):i("",!0),p.value?(t(),s("div",be,[a(r,{for:"email",value:l.$t("form.business_email")},null,8,["value"]),n(" "+e(o.detail.businessEmail),1)])):i("",!0),S.value?(t(),s("div",ye,[a(r,{for:"company_name",value:l.$t("form.company_name")},null,8,["value"]),n(" "+e(o.detail.company_name),1)])):i("",!0),g.value?(t(),s("div",ge,[a(r,{for:"city",value:l.$t("form.city")},null,8,["value"]),n(" "+e(o.detail.city),1)])):i("",!0),h.value?(t(),s("div",$e,[a(r,{for:"regions_state_province",value:l.$t("form.regions_state_province")},null,8,["value"]),n(" "+e(o.detail.regions_state_province),1)])):i("",!0),y.value?(t(),s("div",ke,[a(r,{for:"like_be_contacted",value:l.$t("form.like_be_contacted")},null,8,["value"]),n(" "+e(o.detail.like_be_contacted),1)])):i("",!0),C.value?(t(),s("div",we,[a(r,{for:"address",value:l.$t("form.address")},null,8,["value"]),n(" "+e(o.detail.address),1)])):i("",!0),D.value?(t(),s("div",pe,[a(r,{for:"zip_code",value:l.$t("form.zip_code")},null,8,["value"]),n(" "+e(o.detail.zip_code),1)])):i("",!0),O.value?(t(),s("div",Se,[a(r,{for:"house_hold_income",value:l.$t("form.house_hold_income")},null,8,["value"]),n(" "+e(o.detail.house_hold_income),1)])):i("",!0),P.value?(t(),s("div",Ce,[a(r,{for:"how_many_dependents",value:l.$t("form.how_many_dependents")},null,8,["value"]),n(" "+e(o.detail.how_many_dependents),1)])):i("",!0),L.value?(t(),s("div",De,[a(r,{for:"ages_dependents",value:l.$t("form.ages_dependents")},null,8,["value"]),n(" "+e(o.detail.ages_dependents),1)])):i("",!0),M.value?(t(),s("div",Ve,[a(r,{for:"have_medicaid",value:l.$t("form.have_medicaid")},null,8,["value"]),n(" "+e(l.$t("general."+o.detail.have_medicaid)),1)])):i("",!0),A.value?(t(),s("div",Oe,[a(r,{for:"ages_dependents",value:l.$t("form.immigration_status")},null,8,["value"]),n(" "+e(o.detail.immigration_status),1)])):i("",!0),v.value?(t(),s("div",Pe,[a(r,{for:"approximate_credit_score",value:l.$t("form.approximate_credit_score")},null,8,["value"]),n(" "+e(o.detail.approximate_credit_score),1)])):i("",!0),d.value?(t(),s("div",Le,[a(r,{for:"personal_or_business_credit",value:l.$t("form.personal_or_business_credit")},null,8,["value"]),n(" "+e(l.$t("general."+o.detail.personal_or_business_credit)),1)])):i("",!0),m.value?(t(),s("div",Me,[a(r,{for:"purpose_of_credit",value:l.$t("form.purpose_of_credit")},null,8,["value"]),n(" "+e(o.detail.purpose_of_credit),1)])):i("",!0),w.value?(t(),s("div",Ae,[a(r,{for:"date_of_birth",value:l.$t("form.date_of_birth")},null,8,["value"]),n(" "+e(new Date(o.detail.date_of_birth).toLocaleDateString()),1)])):i("",!0),E.value?(t(),s("div",Be,[a(r,{for:"do_you_smoke",value:l.$t("form.do_you_smoke")},null,8,["value"]),n(" "+e(l.$t("general."+o.detail.do_you_smoke)),1)])):i("",!0),q.value?(t(),s("div",je,[a(r,{for:"purpose",value:l.$t("form.purpose")},null,8,["value"]),n(" "+e(o.detail.purpose),1)])):i("",!0),H.value?(t(),s("div",Ee,[a(r,{for:"purpose",value:l.$t("form.type_of_services")},null,8,["value"]),c("ul",null,[(t(),s(W,null,ae(le,Q=>c("li",{key:Q.value},[o.detail.type_of_services[Q.value]?(t(),s("span",qe,e(l.$t(Q.label)),1)):i("",!0)])),64))])])):i("",!0),N.value?(t(),s("div",He,[a(r,{for:"vin",value:l.$t("form.vin")},null,8,["value"]),n(" "+e(o.detail.vin),1)])):i("",!0),I.value?(t(),s("div",Ne,[a(r,{for:"driver_licence",value:l.$t("form.driver_licence")},null,8,["value"]),n(" "+e(o.detail.driver_licence),1)])):i("",!0),R.value?(t(),s("div",Ie,[a(r,{for:"interested_in",value:l.$t("form.interested_in")},null,8,["value"]),n(" "+e(l.$t("general."+o.detail.interested_in)),1)])):i("",!0),T.value?(t(),s("div",Re,[a(r,{for:"year_of_vehicle",value:l.$t("form.year_of_vehicle")},null,8,["value"]),n(" "+e(o.detail.year_of_vehicle),1)])):i("",!0),B.value?(t(),s("div",Te,[a(r,{for:"monthly_premium",value:l.$t("form.monthly_premium")},null,8,["value"]),n(" "+e(o.detail.monthly_premium),1)])):i("",!0),z.value?(t(),s("div",ze,[a(r,{for:"insurance_for_six_months",value:l.$t("form.insurance_for_six_months")},null,8,["value"]),n(" "+e(o.detail.insurance_for_six_months),1)])):i("",!0),F.value?(t(),s("div",Fe,[a(r,{for:"moving_violations",value:l.$t("form.moving_violations")},null,8,["value"]),n(" "+e(o.detail.moving_violations),1)])):i("",!0),U.value?(t(),s("div",Ue,[a(r,{for:"accidents_five_years",value:l.$t("form.accidents_five_years")},null,8,["value"]),n(" "+e(o.detail.accidents_five_years),1)])):i("",!0),Y.value?(t(),s("div",Ye,[a(r,{for:"loan_amount_requesting",value:l.$t("form.loan_amount_requesting")},null,8,["value"]),n(" "+e(o.detail.loan_amount_requesting),1)])):i("",!0),Z.value?(t(),s("div",Ze,[a(r,{for:"type_of_loan",value:l.$t("form.type_of_loan")},null,8,["value"]),n(" "+e(l.$t("general."+o.detail.type_of_loan)),1)])):i("",!0),j.value?(t(),s("div",Je,[a(r,{for:"verification",value:l.$t("form.verification")},null,8,["value"]),n(" "+e(l.$t("general."+o.detail.verification)),1)])):i("",!0),J.value?(t(),s("div",Ge,[a(r,{for:"type_of_taxes_service",value:l.$t("form.type_of_taxes_service")},null,8,["value"]),n(" "+e(l.$t("general."+o.detail.type_of_taxes_service)),1)])):i("",!0),G.value?(t(),s("div",Ke,[a(r,{for:"roof_age",value:l.$t("form.roof_age")},null,8,["value"]),n(" "+e(o.detail.roof_age),1)])):i("",!0),K.value?(t(),s("div",Qe,[a(r,{for:"residence_home_status",value:l.$t("form.residence_home_status")},null,8,["value"]),n(" "+e(l.$t("general."+o.detail.residence_home_status)),1)])):i("",!0),$.value?(t(),s("div",We,[a(r,{for:"zip_code",value:l.$t("form.comments")},null,8,["value"]),n(" "+e(o.detail.comments),1)])):i("",!0)]))}},xe={class:"relative overflow-x-auto"},ea={class:"font-semibold"},aa={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md mt-4"},la={class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},ta={__name:"CustomerHistory",props:{movements:{required:!0,type:Object}},setup(o){return(_,f)=>(t(),s("div",xe,[c("h4",ea,e(_.$t("general.customer_history")),1),c("table",aa,[c("thead",la,[c("tr",null,[c("th",null,e(_.$t("tables.titles.status")),1),c("th",null,e(_.$t("tables.titles.comments")),1),c("th",null,e(_.$t("tables.titles.date")),1)])]),c("tbody",null,[(t(!0),s(W,null,ae(o.movements,b=>(t(),s("tr",{key:b.id},[c("td",null,e(_.$t("statuses."+b.status.name)),1),c("td",null,e(b.comments),1),c("td",null,e(new Date(b.created_at).toLocaleDateString()),1)]))),128))])])]))}},sa=c("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Clientes registrados",-1),ua={class:"py-12"},oa={key:0,id:"badge-dismiss-red",class:"absolute mt-3 ml-14 py-1 px-2 text-sm font-medium text-red-800 bg-red-100 rounded dark:bg-red-900 dark:text-red-300"},na={class:"flex py-4 justify-between flex-wrap border-b border-b-gray-300"},ia={class:"flex flex-col mb-4"},ra=c("span",{class:"text-lg font-semibold"},"Status del cliente: ",-1),va={class:"flex flex-col mb-4"},da={class:"text-lg font-semibold"},ca={class:"flex flex-col mb-4"},ma={class:"text-lg font-semibold"},fa={key:0,class:"d-inline-block mb-4"},_a={key:1,class:"d-inline-block mb-4"},ha={class:"my-2"},ba={class:"my-4 border-b border-b-gray-300"},ya={class:"my-3"},La={__name:"Customers",props:{data:{type:Object},customer:{type:Object},auth:{type:Object},errors:{type:Object}},setup(o){const _=o,f=u({}),b=u([]),k=u([]),p=u(""),S=u(""),g=u(""),h=u(!1),y=u(""),C=u(!1),D=u(!1);_.errors&&(y.value=_.errors.message),_.data.data.map(v=>{var d,m;v.agency_name=(d=v.agency)==null?void 0:d.name,v.seller_name=(m=v.seller)==null?void 0:m.name,v.phone=v.phone??v.businessPhone,v.email=v.email??v.businessEmail,v.created_at=new Date(v.created_at).toLocaleDateString(),v.customer_status=v.status.label_es});const $=[{title:"tables.titles.name",data:"name"},{title:"tables.titles.lastname",data:"lastname"},{title:"tables.titles.email",data:"email"},{title:"tables.titles.phone",data:"phone"},{title:"tables.titles.agency",data:"agency_name"},{title:"tables.titles.seller",data:"seller_name"},{title:"Status",data:"customer_status"},{title:"tables.titles.registration_date",data:"created_at"},{title:"tables.titles.actions",actions:[{type:"details",icon:"fa-solid fa-info"}]}],O=v=>{_.data.value=v,_.data.data.map(d=>{var m,w;d.agency_name=(m=d.agency)==null?void 0:m.name,d.seller_name=(w=d.seller)==null?void 0:w.name,d.phone=d.phone??d.businessPhone,d.email=d.email??d.businessEmail,d.created_at=new Date(d.created_at).toLocaleDateString()})},P=v=>{y.value="",p.value="",C.value=!1,D.value=!1,oe.get("/customers/"+ +v.id).then(d=>{f.value=d.data.customer,b.value=d.data.statuses,k.value=d.data.agencies,b.value.map(m=>{m.value=m.id,m.label="form."+m.name}),k.value.map(m=>{m.value=m.id,m.label=m.name}),b.value=b.value.filter(m=>m.id>d.data.customer.customer_status_id),_.auth.user.user_type==="admin"&&f.value.customer_status_id===1&&(C.value=!0),(_.auth.user.user_type==="admin"||_.auth.user.user_type==="insurance_carrier")&&f.value.customer_status_id>1&&(D.value=!0),h.value=!0})},L=()=>{h.value=!1},M=()=>{X.visit("/customers/changeStatus",{method:"post",data:{status:p.value,customer:f.value.id,comments:g.value},onSuccess:v=>{h.value=!1,location.reload()}})},A=()=>{X.visit("/customers/assign",{method:"post",data:{agency:S.value,customer:f.value.id},onFinish:v=>{h.value=!1,location.reload()}})};return(v,d)=>(t(),s(W,null,[a(se(ue),{title:"Clientes"}),a(ne,null,{header:V(()=>[sa]),default:V(()=>[c("div",ua,[y.value?(t(),s("span",oa,e(y.value),1)):i("",!0),a(ie,{data:o.data,columns:$,onDetailsRow:P,"show-new-element":!1,onSearchedData:O},null,8,["data"])])]),_:1}),a(re,{show:h.value,onCloseModal:L},{title:V(()=>[n("Detalle del cliente")]),content:V(()=>{var m;return[c("div",na,[c("h4",ia,[ra,n(" "+e(f.value.status.label_es),1)]),c("div",va,[c("span",da,e(v.$t("services.service")),1),n(" "+e(v.$t("services."+f.value.service)),1)]),c("div",ca,[c("span",ma,e(v.$t("tables.titles.agency")),1),n(" "+e((m=f.value.agency)==null?void 0:m.name),1)]),c("div",null,[C.value?(t(),s("div",fa,[a(r,{for:"assign_agency",value:v.$t("form.assign_to_agency")},null,8,["value"]),a(x,{options:k.value,modelValue:S.value,"onUpdate:modelValue":d[0]||(d[0]=w=>S.value=w),class:"mb-5"},null,8,["options","modelValue"]),a(ee,{class:"ml-3 disabled:opacity-25",disabled:!S.value,onClick:A},{default:V(()=>[n(e(v.$t("form.update_button")),1)]),_:1},8,["disabled"])])):i("",!0),D.value?(t(),s("div",_a,[a(r,{for:"currentStatus",value:v.$t("form.new_status")},null,8,["value"]),a(x,{options:b.value,modelValue:p.value,"onUpdate:modelValue":d[1]||(d[1]=w=>p.value=w),class:"mb-5"},null,8,["options","modelValue"]),c("div",ha,[a(r,{for:"currentStatus",value:v.$t("form.comments")+" *"},null,8,["value"]),a(ve,{modelValue:g.value,"onUpdate:modelValue":d[2]||(d[2]=w=>g.value=w),class:"w-full"},null,8,["modelValue"])]),a(ee,{class:"disabled:opacity-25",disabled:!p.value||!g.value.length,onClick:M},{default:V(()=>[n(e(v.$t("form.update_button")),1)]),_:1},8,["disabled"])])):i("",!0)])]),c("div",ba,[a(Xe,{detail:f.value},null,8,["detail"])]),c("div",ya,[a(ta,{movements:f.value.history},null,8,["movements"])])]}),footer:V(()=>[a(de,{onClick:d[3]||(d[3]=m=>h.value=!1)},{default:V(()=>[n(e(v.$t("form.close_button")),1)]),_:1})]),_:1},8,["show"])],64))}};export{La as default};
