import{i,y as l,o,f as u,b as c,t as d,r as m,l as p}from"./app-b709ebbc.js";const f={class:"text-sm text-red-600"},v={__name:"InputError",props:{message:{type:String}},setup(t){return(s,e)=>i((o(),u("div",null,[c("p",f,d(t.message),1)],512)),[[l,t.message]])}},_=["value"],h={__name:"TextInput",props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(t,{expose:s}){const e=m(null);return p(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),s({focus:()=>e.value.focus()}),(r,a)=>(o(),u("input",{class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",value:t.modelValue,onInput:a[0]||(a[0]=n=>r.$emit("update:modelValue",n.target.value)),ref_key:"input",ref:e},null,40,_))}};export{h as _,v as a};
