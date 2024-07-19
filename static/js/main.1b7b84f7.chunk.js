(this["webpackJsonpreact-my-app"]=this["webpackJsonpreact-my-app"]||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(6),c=t.n(r),o=(t(15),t(16),t(3));function s(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode,"  bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(o.b,{className:"navbar-brand",to:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{className:"nav-link active",to:"/about"},e.aboutText))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," mx-2")},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"DarkMode")),n.a.createElement("form",{className:"d-flex",role:"search"},n.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Search")))))}function m(e){const[a,t]=Object(l.useState)("");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#070F2B"}},n.a.createElement("h1",{className:"mb-4"},e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",value:a,onChange:e=>{t(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#070F2B"},id:"myBox",rows:"8"})),n.a.createElement("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{let l=a.toUpperCase();t(l),e.showAlert("Converted to uppercase!","success")}},"Convert to UpperCase"),n.a.createElement("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{let l=a.toLowerCase();t(l),e.showAlert("Converted to lowercase!","success")}},"Convert to LowerCase"),n.a.createElement("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{t(""),e.showAlert("Text has been cleared successfully!","success")}},"Clear text"),n.a.createElement("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{var a=document.getElementById("myBox");a.select(),navigator.clipboard.writeText(a.value),e.showAlert("Text copied to Clipboard!","success")}},"Copy text"),n.a.createElement("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{let l=a.split(/[ ]+/);t(l.join(" ")),e.showAlert("Extra Space has been removed!","success")}},"Remove Extra Spaces")),n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#070F2B"}},n.a.createElement("h2",null,"Your text summary"),n.a.createElement("p",null," ",n.a.createElement("b",null,a.split(" ").filter(e=>0!==e.length).length," words and ",a.length," characters")),n.a.createElement("p",null,.008*a.split(" ").filter(e=>0!==e.length).length," Minutes read"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,a.length>0?a:"Nothing to preview!")))}function i(e){let a={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"rgb(36 74 104)":"white"};return n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},n.a.createElement("h1",{className:"my-3"},"About Us"),n.a.createElement("div",{className:"accordion",id:"accordionExample",style:a},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header"},n.a.createElement("button",{className:"accordion-button",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},n.a.createElement("strong",null," What is Text Textutils?"))),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"TextUtils is a tool that helps you clean up and organize your text. Whether you need to remove extra spaces, correct capitalization, or adjust line breaks, this tool simplifies your text editing tasks."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header"},n.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},n.a.createElement("strong",null," What is Word Counter?"))),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"The Word Counter tool is completely free and lets you quickly count words, characters, and sentences in your text. Perfect for writers, students, and anyone needing to track text length."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header"},n.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},n.a.createElement("strong",null,"What is Text Encryption and Decryption?"))),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"Encrypt and decrypt your text for free to keep sensitive information secure. Protect your data with our easy-to-use encryption and decryption tools.")))))}var d=function(e){return n.a.createElement("div",{style:{height:"50px"}},e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,(e=>{const a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)})(e.alert.type))," : ",e.alert.msg))},u=t(2);var p=function(){const[e,a]=Object(l.useState)("light"),[t,r]=Object(l.useState)(null),c=(e,a)=>{r({msg:e,type:a}),setTimeout(()=>{r(null)},2e3)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{basename:"/react-my-app"},n.a.createElement(s,{title:"TextUtils",aboutText:"About Us",mode:e,toggleMode:()=>{"light"===e?(a("dark"),document.body.style.backgroundColor="#020334",c("Dark mode has been enabled","success")):(a("light"),document.body.style.backgroundColor="white",c("Light mode has been enabled","success"))}}),n.a.createElement(d,{alert:t}),n.a.createElement("div",{className:"container my-3",mode:e},n.a.createElement(u.c,null,n.a.createElement(u.a,{exact:!0,path:"/about",element:n.a.createElement(i,{mode:e})}),n.a.createElement(u.a,{exact:!0,path:"/",element:n.a.createElement(m,{showAlert:c,heading:"Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces",mode:e})})))))};var b=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=a;t(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null))),b()},7:function(e,a,t){e.exports=t(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.1b7b84f7.chunk.js.map