(window.webpackJsonp=window.webpackJsonp||[]).push([[49,15,27],{281:function(t,e,n){"use strict";n.r(e);var o={props:["globalHeaderData"],data:function(){return{}}},r=n(43),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"globalHeader-component"},[n("div",{staticClass:"content"},[n("h1",[t._v(t._s(t.globalHeaderData.header))]),t._v(" "),n("p",{staticClass:"links"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home ")]),t._v("\n      >\n      "),n("span",[t._v(" "+t._s(t.globalHeaderData.pageName))])],1),t._v(" "),n("hr")])])}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,n){t.exports=n.p+"img/product-37.9dfc1f8.png"},343:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"product-img"},[e("img",{attrs:{src:n(292),alt:""}})])}],r=n(292),l=n.n(r),c={data:function(){return{product1:{title:"ESD-Knife",icon:l.a,header:"ESD-Knife",content2:"ENDO-FLEX ESD-Knife - characterized by a wide range of applications for endoscopic submucosal dissection in the esophagus or gastrointestinal tract. The ESD-Knife combines two types of cutting knives (O-knife / I-knife) in one instrument, thus enabling marking and dissection of lesions in one single operation without changing instruments. The design of the ESD-Knife enables fast and precise dissection of the target tissue. The instrument is available in various combinations of O- and I-knives to enable use in different ways and within different tissue types.",points:["I-Knife \n - Available in different lengths from 1-4 mm \n - T-shaped tip enables precise marking of the target tissue and prevents knife from slipping during cutting process","O-Knife \n - With a fixed length of 4 mm and an insulated radial electrode \n - For safe dissection and prevention of perforations in the surrounding tissue"]},modalData:{}}},methods:{showModal:function(data){console.log(data),this.modalData=data,this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()}}},d=n(43),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mainProducts-component"},[o("div",{staticClass:"container"},[o("h2",[t._v("Early Cancer Treatment by ESD")]),t._v(" "),o("p",{staticClass:"pragraph"},[t._v("\n      Endoscopic submucosal dissection is the extensive endoscopic removal of malignant tissue > 20mm in the gastrointestinal tract using electro-surgery. The procedure is used for the ablation of early stages of tumor development. The ESD-Knife by ENDO-FLEX combines many work steps in one instrument.\n    ")]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-4"},[o("div",{staticClass:"product-item ",on:{click:function(e){return t.showModal(t.product1)}}},[t._m(0),t._v(" "),o("p",[t._v("ESD-Knife")])])])])]),t._v(" "),o("b-modal",{ref:"my-modal",attrs:{"header-bg-variant":"009DDF",title:t.modalData.title,centered:"",size:"xl","hide-footer":"",scrollable:""}},[o("div",{staticClass:"icon"},[o("img",{staticClass:"py-5",attrs:{src:t.modalData.icon,alt:"icon"}})]),t._v(" "),o("h2",{staticClass:"title-header"},[t._v(t._s(t.modalData.header))]),t._v(" "),o("p",[o("strong",[t._v("Description")])]),t._v(" "),t.modalData.content2?o("div",{staticClass:"content pb-3"},[t._v("\n          "+t._s(t.modalData.content2)+"\n        ")]):t._e(),t._v(" "),o("div",{staticClass:"points"},t._l(t.modalData.points,(function(e){return o("p",{key:e,staticClass:"mb-2"},[o("img",{attrs:{src:n(203),alt:"point"}}),t._v(" "),o("span",{staticClass:"pre-formatted"},[t._v(t._s(e))])])})),0)])],1)}),o,!1,null,null,null);e.default=component.exports},384:function(t,e,n){"use strict";n.r(e);var o=n(281),r=n(343),l={components:{headerComponent:o.default,productComponent:r.default},data:function(){return{globalHeaderData:{header:"Early cancer treatment by ESD",pageName:"Products categories"}}}},c=n(43),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("section",{staticClass:"header-section",attrs:{id:"header"}},[n("headerComponent",{attrs:{globalHeaderData:t.globalHeaderData}})],1),t._v(" "),n("section",{staticClass:"product-section",attrs:{id:"product"}},[n("productComponent")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);