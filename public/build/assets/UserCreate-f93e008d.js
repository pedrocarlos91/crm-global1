import{T as p,f as m,a as o,u as e,w as i,F as _,o as u,Z as f,b as a,e as g,i as v,C as b,g as c,n as V,d as w}from"./app-bcec68b9.js";import{_ as h}from"./AuthenticatedLayout-7296ab0b.js";import{P as y}from"./PrimaryButton-9b578972.js";import{_ as t,b as d,a as n}from"./TextInput-5f4de28f.js";import"./SwitchLanguage-e4be1663.js";import"./_plugin-vue_export-helper-c27b6911.js";const x=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Nuevo Usuario",-1),k={class:"py-12"},U={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},N={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},q={class:"p-6"},C={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},$={class:"mb-5"},B=a("option",{value:"seller"},"Vendedor",-1),T=a("option",{value:"admin"},"Administrador",-1),A=a("option",{value:"insurance_carrier"},"Aseguradora",-1),P=[B,T,A],D={key:0,class:"mb-5"},E={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},F={class:"mb-5"},L={class:"mb-5"},M={key:0,class:"mb-5"},S={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},j={class:"mb-5 md:col-span-2"},z={class:"mb-5 md:col-span-1"},G={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},R={class:"mb-5"},Z={class:"flex items-center justify-end mt-4"},Y={__name:"UserCreate",setup(H){const s=p({name:"",email:"",phone:"",address:"",insurance_contact_name:"",seller_reference:"",user_type:"seller",password:""});return(I,l)=>(u(),m(_,null,[o(e(f),{title:"Usuarios"}),o(h,null,{header:i(()=>[x]),default:i(()=>[a("div",k,[a("div",U,[a("div",N,[a("div",q,[a("form",{onSubmit:l[8]||(l[8]=g(r=>e(s).post("/user"),["prevent"]))},[a("div",C,[a("div",$,[o(t,{for:"email",value:"Tipo de Usuario *"}),v(a("select",{id:"user_type",class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block w-full mt-1","onUpdate:modelValue":l[0]||(l[0]=r=>e(s).user_type=r)},P,512),[[b,e(s).user_type]]),o(d,{class:"mt-2",message:e(s).errors.user_type},null,8,["message"])]),e(s).user_type==="seller"?(u(),m("div",D,[o(t,{for:"email",value:"Rreferencia del vendedor *"}),o(n,{id:"seller_reference",type:"text",class:"mt-1 block w-full",modelValue:e(s).seller_reference,"onUpdate:modelValue":l[1]||(l[1]=r=>e(s).seller_reference=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(d,{class:"mt-2",message:e(s).errors.seller_reference},null,8,["message"])])):c("",!0)]),a("div",E,[a("div",F,[o(t,{for:"name",value:"Nombre"}),o(n,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(s).name,"onUpdate:modelValue":l[2]||(l[2]=r=>e(s).name=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(d,{class:"mt-2",message:e(s).errors.name},null,8,["message"])]),a("div",L,[o(t,{for:"email",value:"Email"}),o(n,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":l[3]||(l[3]=r=>e(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(d,{class:"mt-2",message:e(s).errors.email},null,8,["message"])])]),e(s).user_type==="insurance_carrier"?(u(),m("div",M,[o(t,{for:"insurance_carrier",value:"Nombre del Contacto Aseguradora"}),o(n,{id:"insurance_carrier",type:"text",class:"mt-1 block w-full",modelValue:e(s).insurance_contact_name,"onUpdate:modelValue":l[4]||(l[4]=r=>e(s).insurance_contact_name=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(d,{class:"mt-2",message:e(s).errors.insurance_contact_name},null,8,["message"])])):c("",!0),a("div",S,[a("div",j,[o(t,{for:"address",value:"Dirección"}),o(n,{id:"address",type:"text",class:"mt-1 block w-full",modelValue:e(s).address,"onUpdate:modelValue":l[5]||(l[5]=r=>e(s).address=r),autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(d,{class:"mt-2",message:e(s).errors.address},null,8,["message"])]),a("div",z,[o(t,{for:"phone",value:"Teléfono"}),o(n,{id:"phone",type:"text",class:"mt-1 block w-full",modelValue:e(s).phone,"onUpdate:modelValue":l[6]||(l[6]=r=>e(s).phone=r),placeholder:"10 dígitos",pattern:"[0-9]{10}",minLength:"10",maxLength:"10",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(d,{class:"mt-2",message:e(s).errors.phone},null,8,["message"])])]),a("div",G,[a("div",R,[o(t,{for:"password",value:"Password"}),o(n,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":l[7]||(l[7]=r=>e(s).password=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(d,{class:"mt-2",message:e(s).errors.password},null,8,["message"])])]),a("div",Z,[o(y,{class:V(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:i(()=>[w(" Guardar ")]),_:1},8,["class","disabled"])])],32)])])])])]),_:1})],64))}};export{Y as default};