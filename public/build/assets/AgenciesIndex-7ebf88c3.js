import{z as r,K as d,f as m,a as t,u as _,w as s,F as p,o as u,Z as g,b as n}from"./app-bcec68b9.js";import f from"./Table-9873ae89.js";import{_ as h}from"./AuthenticatedLayout-7296ab0b.js";import"./SwitchLanguage-e4be1663.js";import"./_plugin-vue_export-helper-c27b6911.js";const b=n("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Agencias Registradas",-1),x={class:"py-12"},k={__name:"AgenciesIndex",setup(y){const a=r(d().props.data),o=[{title:"tables.titles.name",data:"name"},{title:"tables.titles.email",data:"email"},{title:"tables.titles.phone",data:"phone"},{title:"tables.titles.address",data:"address"},{title:"tables.titles.agency_contact",data:"insurance_contact_name"},{title:"tables.titles.actions",actions:[{type:"delete",icon:"fa-solid fa-trash"}]}],l=e=>{console.log(e)},c=e=>{console.log(e)},i=e=>{a.value=e};return(e,w)=>(u(),m(p,null,[t(_(g),{title:"Agencias"}),t(h,null,{header:s(()=>[b]),default:s(()=>[n("div",x,[t(f,{data:a.value,"route-new-element":"agencies.create",columns:o,onEditRow:l,onDeleteRow:c,onSearchedData:i},null,8,["data"])])]),_:1})],64))}};export{k as default};