(this.webpackJsonpmy_app=this.webpackJsonpmy_app||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),l=a.n(s),r=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item"})]}),Object(o.jsxs)("form",{className:"d-flex",children:[Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{className:"btn-success btn-outline mx-2",type:"submit",children:"Search"})]}),Object(o.jsxs)("div",{className:" mx-5 form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(r.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container my-4",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsxs)("h2",{children:[e.heading," "]}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){s(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"#0b3366",color:"light"===e.mode?"black":"white"},id:"myBox",rows:"10",placeholder:"Enter your text here"})}),Object(o.jsx)("button",{className:"btn btn-warning",onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("Converted to Uppercase!","success")},children:"Convert to UpperCase"}),Object(o.jsx)("button",{className:"btn btn-warning mx-4",onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("Converted to Lowercase!","success")},children:"Convert to LowerCase"}),Object(o.jsx)("button",{className:"btn btn-warning",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra spaces"}),Object(o.jsx)("button",{className:"btn btn-warning mx-4",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to clipboard","success")},children:"Copy All"}),Object(o.jsx)("button",{className:"btn btn-danger",onClick:function(){s(""),e.showAlert("Cleared All Text!","success")},children:"Clear All"})]}),Object(o.jsxs)("div",{className:"container my-4",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h3",{children:"Your Text Summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words, ",n.length," characters"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," Minutes required to read."]}),Object(o.jsx)("h4",{children:"Preview:"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter something above to preview here"})]})]})}function d(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsxs)("strong",{children:[" ",function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," "]}),": ",e.alert.msg]})}i.defaultProps={title:"set title here",AboutText:"About"};var h=function(){var e=Object(c.useState)("light"),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),l=Object(r.a)(s,2),h=l[0],j=l[1],m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:a,toggleMode:function(){"dark"===a?(n("light"),document.body.style.backgroundColor="white",m("Light mode has been enabled!","success")):(n("dark"),document.body.style.backgroundColor="#011938",m("Dark mode has been enabled!","success"),document.title="TextUtils- Dark Mode")}}),Object(o.jsx)(d,{alert:h}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(b,{showAlert:m,heading:"Enter the text to analyze:",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.3ac556d6.chunk.js.map