import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";import{o as a,f as c,H as _,r as d,i as u,D as g,b as s}from"./app-b709ebbc.js";const m="/build/assets/logo-560d708e.png",p={},f={src:m,alt:"Logo"};function h(n,o){return a(),c("img",f)}const E=i(p,[["render",h]]),v={class:"fixed right-6 bottom-6"},b=s("option",{value:"es"},"Español",-1),x=s("option",{value:"en"},"English",-1),L=[b,x],I={__name:"SwitchLanguage",setup(n){const o=_(),e=d(localStorage.getItem("locale")??"es");o.locale.value=e.value;const l=()=>{localStorage.setItem("locale",e.value),o.locale.value=e.value};return(S,t)=>(a(),c("div",v,[u(s("select",{onChange:l,class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm","onUpdate:modelValue":t[0]||(t[0]=r=>e.value=r)},L,544),[[g,e.value]])]))}};export{E as A,I as _};