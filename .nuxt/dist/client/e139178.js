(window.webpackJsonp=window.webpackJsonp||[]).push([[28,6,11],{265:function(t,e,o){"use strict";o.r(e);var n={props:["mainHeaderData"],data:function(){return{}}},r=o(42),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mainHeader-component"},[o("div",{staticClass:"container"},[o("p",[t._v(t._s(t.mainHeaderData.nameOfPage))]),t._v(" "),o("h2",[t._v(t._s(t.mainHeaderData.descreption)+" "),o("span",[t._v(t._s(t.mainHeaderData.descreption2))])])])])}),[],!1,null,null,null);e.default=component.exports},346:function(t,e,o){"use strict";o.r(e);o(20);var n={data:function(){return{form:{email:"",name:"",country:"",phone:"",message:""},show:!0}},methods:{onSubmit:function(t){t.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(t){var e=this;t.preventDefault(),this.form.email="",this.form.name="",this.form.food=null,this.form.checked=[],this.show=!1,this.$nextTick((function(){e.show=!0}))}}},r=o(42),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contactForm-component"},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"row p-7"},[o("div",{staticClass:"col-md-8"},[o("h2",[t._v("Get in Touch")]),t._v(" "),o("div",{staticClass:"contactForm"},[t.show?o("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("b-form-group",{attrs:{id:"input-group-1","label-for":"input-1"}},[o("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Full Name*",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),t._v(" "),o("div",{staticClass:"col-md-6"},[o("b-form-group",{attrs:{id:"input-group-2","label-for":"input-2"}},[o("b-form-input",{attrs:{id:"input-2",type:"text",placeholder:"Country*",required:""},model:{value:t.form.country,callback:function(e){t.$set(t.form,"country",e)},expression:"form.country"}})],1)],1),t._v(" "),o("div",{staticClass:"col-md-6"},[o("b-form-group",{attrs:{id:"input-group-2","label-for":"input-3"}},[o("b-form-input",{attrs:{id:"input-3",type:"email",placeholder:"Email*",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)],1),t._v(" "),o("div",{staticClass:"col-md-6"},[o("b-form-group",{attrs:{id:"input-group-2","label-for":"input-4"}},[o("b-form-input",{attrs:{id:"input-4",type:"tel",placeholder:"Phone*",required:""},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1)],1),t._v(" "),o("div",{staticClass:"col-md-12"},[o("b-form-group",{attrs:{id:"input-group-2","label-for":"input-5"}},[o("b-form-textarea",{attrs:{id:"input-5",placeholder:"message*",rows:"3","max-rows":"6"},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1)],1)]),t._v(" "),o("b-button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Send")])],1):t._e()],1)]),t._v(" "),t._m(1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map"},[e("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.804931800028!2d31.3671735148235!3d30.09977252291223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458161249e63a21%3A0xe64eae8a320c7875!2sEl-Mosheer%20Ahmed%20Ismail%20St%2C%20Sheraton%20Al%20Matar%2C%20El%20Nozha%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1627752451453!5m2!1sen!2seg",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-md-4"},[o("h2",{staticClass:"contactColor"},[t._v("Contact Us")]),t._v(" "),o("div",{staticClass:"location-section"},[o("b",[t._v("\n              Egypt\n            ")]),t._v(" "),o("div",{staticClass:"address d-flex"},[o("i",{staticClass:"fas fa-map-marker-alt"}),t._v(" "),o("p",[t._v("\n                El-Mosheer Ahmed Ismail St.,"),o("br"),t._v("\n                Square 1159, Building 2 Fifth Floor Office 503,"),o("br"),t._v("\n                Sheraton, Heliopoli , Cairo - Egypt\n              ")])]),t._v(" "),o("div",{staticClass:"phone d-flex"},[o("i",{staticClass:"fas fa-phone-alt"}),t._v(" "),o("p",[t._v("+2 (02)226 86 182")])]),t._v(" "),o("div",{staticClass:"mail d-flex"},[o("i",{staticClass:"far fa-envelope"}),t._v(" "),o("p",[t._v("booking@weflyplus.com")])])]),t._v(" "),o("div",{staticClass:"location-section"},[o("b",[t._v("\n              UNITED ARAB OF EMIRATES\n            ")]),t._v(" "),o("div",{staticClass:"address d-flex"},[o("i",{staticClass:"fas fa-map-marker-alt"}),t._v(" "),o("p",[t._v("\n                  Sobha Ivory 1, Office 1104; Business Bay"),o("br"),t._v("\n                  Dubai – United Arab of Emirates"),o("br"),t._v("\n                  P.O Box: 413530\n                ")])]),t._v(" "),o("div",{staticClass:"phone d-flex"},[o("i",{staticClass:"fas fa-phone-alt"}),t._v(" "),o("p",[t._v("+971 (04) 878 6604")])]),t._v(" "),o("div",{staticClass:"mail d-flex"},[o("i",{staticClass:"far fa-envelope"}),t._v(" "),o("p",[t._v("info@weflyplus.com")])])])])}],!1,null,null,null);e.default=component.exports},368:function(t,e,o){"use strict";o.r(e);var n=o(265),r=o(346),l={components:{mainHeaderComponent:n.default,contactFormComponent:r.default},data:function(){return{mainHeaderData:{nameOfPage:"Contact",descreption:"Get",descreption2:"in Touch"}}}},c=o(42),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("section",{staticClass:"mainHeader-section",attrs:{id:"mainHeader"}},[o("mainHeaderComponent",{attrs:{mainHeaderData:t.mainHeaderData}})],1),t._v(" "),o("section",{staticClass:"contactForm-section",attrs:{id:"contactForm"}},[o("contactFormComponent")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);