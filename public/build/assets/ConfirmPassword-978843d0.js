import{T as n,c as l,w as t,o as d,a,u as o,Z as c,b as e,d as p,n as u,e as f}from"./app-b709ebbc.js";import{_}from"./GuestLayout-7d524535.js";import{_ as w,a as b}from"./TextInput-46e4f7a3.js";import{_ as h}from"./InputLabel-679afb37.js";import{P as x}from"./PrimaryButton-09ef35df.js";import"./SwitchLanguage-37a6c79d.js";import"./_plugin-vue_export-helper-c27b6911.js";const g=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),y=["onSubmit"],P={class:"flex justify-end mt-4"},j={__name:"ConfirmPassword",setup(V){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(v,r)=>(d(),l(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),g,e("form",{onSubmit:f(i,["prevent"])},[e("div",null,[a(h,{for:"password",value:"Password"}),a(w,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=m=>o(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(b,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",P,[a(x,{class:u(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],40,y)]),_:1}))}};export{j as default};