import{_ as v}from"./AuthenticatedLayout-aa2d0776.js";import _ from"./Table-b7f74252.js";import{r as a,K as h,f as w,a as o,u as x,w as r,F as y,o as b,Z as A,b as c}from"./app-b709ebbc.js";import{_ as g}from"./ConfirmDeleteActivate-f8ff989b.js";import"./SwitchLanguage-37a6c79d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./genericModal-adae083d.js";import"./PrimaryButton-09ef35df.js";import"./SecondaryButton-6da6f8d3.js";const C=c("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Usuarios Registrados",-1),D={class:"py-12"},S={__name:"Index",setup(R){const l=a(h().props.data),t=a(!1),s=a(""),n=a({}),m=[{title:"tables.titles.name",data:"name"},{title:"tables.titles.email",data:"email"},{title:"tables.titles.phone",data:"phone"},{title:"tables.titles.actions",actions:[{type:"activate",icon:"fa-solid fa-power-off"},{type:"delete",icon:"fa-solid fa-trash"}]}],d=e=>{router.pro},u=e=>{t.value=!0,s.value="delete",n.value=e},f=e=>{t.value=!0,s.value="activate",n.value=e},p=e=>{l.value=e};return(e,i)=>(b(),w(y,null,[o(x(A),{title:"Admin"}),o(v,null,{header:r(()=>[C]),default:r(()=>[c("div",D,[o(_,{data:l.value,"route-new-element":"users.create",columns:m,onEditRow:d,onActivateRow:f,onDeleteRow:u,onSearchedData:p},null,8,["data"])])]),_:1}),o(g,{"show-modal":t.value,"action-type":s.value,"user-to-confirm":n.value,onClose:i[0]||(i[0]=$=>t.value=!1)},null,8,["show-modal","action-type","user-to-confirm"])],64))}};export{S as default};
