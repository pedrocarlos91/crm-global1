import{_ as c}from"./AuthenticatedLayout-7296ab0b.js";import d from"./Table-9873ae89.js";import{z as m,K as u,f as _,a as t,u as p,w as s,F as f,o as h,Z as g,b as o}from"./app-bcec68b9.js";import"./SwitchLanguage-e4be1663.js";import"./_plugin-vue_export-helper-c27b6911.js";const x=o("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Usuarios Registrados",-1),b={class:"py-12"},A={__name:"Index",setup(w){const a=m(u().props.data),l=[{title:"tables.titles.name",data:"name"},{title:"tables.titles.email",data:"email"},{title:"tables.titles.phone",data:"phone"},{title:"tables.titles.actions",actions:[{type:"delete",icon:"fa-solid fa-trash"}]}],n=e=>{console.log(e)},i=e=>{console.log(e)},r=e=>{a.value=e};return(e,v)=>(h(),_(f,null,[t(p(g),{title:"Usuarios"}),t(c,null,{header:s(()=>[x]),default:s(()=>[o("div",b,[t(d,{data:a.value,"route-new-element":"users.create",columns:l,onEditRow:n,onDeleteRow:i,onSearchedData:r},null,8,["data"])])]),_:1})],64))}};export{A as default};