exports.ids = [26,4,10];
exports.modules = {

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/clientPage/clients-component.vue?vue&type=template&id=1a824fa1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"client-component py-5"},[_vm._ssrNode("<div class=\"container\"><div class=\"row\">"+(_vm._ssrList((28),function(item){return ("<div class=\"col-md-3 d-flex mt-3\"><img"+(_vm._ssrAttr("src",__webpack_require__(81)))+" alt=\"logomark1\"> <h2>Foxit</h2></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/clientPage/clients-component.vue?vue&type=template&id=1a824fa1&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/clientPage/clients-component.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6675e68c"
  
)

/* harmony default export */ var clients_component = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client.vue?vue&type=template&id=7887450e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_vm._ssrNode("<section id=\"mainHeader\" class=\"mainHeader-section\">","</section>",[_c('mainHeaderComponent',{attrs:{"mainHeaderData":_vm.mainHeaderData}})],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"client\" class=\"client-section\">","</section>",[_c('clientsComponent')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/client.vue?vue&type=template&id=7887450e&

// EXTERNAL MODULE: ./components/mainHeader-component.vue + 4 modules
var mainHeader_component = __webpack_require__(41);

// EXTERNAL MODULE: ./components/clientPage/clients-component.vue + 2 modules
var clients_component = __webpack_require__(134);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var clientvue_type_script_lang_js_ = ({
  components: {
    mainHeaderComponent: mainHeader_component["default"],
    clientsComponent: clients_component["default"]
  },

  data() {
    return {
      mainHeaderData: {
        nameOfPage: 'Partners',
        descreption: 'Our',
        descreption2: 'Clients'
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/client.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_clientvue_type_script_lang_js_ = (clientvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/client.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_clientvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6b1303b5"
  
)

/* harmony default export */ var client = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/mainHeader-component.vue?vue&type=template&id=ff5d3c5a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mainHeader-component"},[_vm._ssrNode("<div class=\"container\"><p>"+_vm._ssrEscape(_vm._s(_vm.mainHeaderData.nameOfPage))+"</p> <h2>"+_vm._ssrEscape(_vm._s(_vm.mainHeaderData.descreption)+" ")+"<span>"+_vm._ssrEscape(_vm._s(_vm.mainHeaderData.descreption2))+"</span></h2></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/mainHeader-component.vue?vue&type=template&id=ff5d3c5a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/mainHeader-component.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var mainHeader_componentvue_type_script_lang_js_ = ({
  props: ['mainHeaderData'],

  data() {
    return {};
  }

});
// CONCATENATED MODULE: ./components/mainHeader-component.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_mainHeader_componentvue_type_script_lang_js_ = (mainHeader_componentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/mainHeader-component.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_mainHeader_componentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1dd9e53a"
  
)

/* harmony default export */ var mainHeader_component = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0ibG9nb21hcmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjYxLjY5MiIgaGVpZ2h0PSI2NC4yNjIiIHZpZXdCb3g9IjAgMCA2MS42OTIgNjQuMjYyIj4NCiAgPHBhdGggaWQ9IkZpbGwtMSIgZD0iTTAsNS4xNDIsMzAuODQ2LDQxLjEyOCw2MS42OTIsNS4xNDJBOTUuMSw5NS4xLDAsMCwwLDAsNS4xNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMjMuMTM0KSIgZmlsbD0iIzBhMTAzNiIgb3BhY2l0eT0iMC41Ii8+DQogIDxwYXRoIGlkPSJGaWxsLTMiIGQ9Ik02MS42OTIsNS4xNDEsMzAuODQ2LDIzLjEzNCwwLDUuMTQxYTk1LjEwOCw5NS4xMDgsMCwwLDEsNjEuNjkyLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMjMuMTM0KSIgZmlsbD0iIzBhMTAzNiIgb3BhY2l0eT0iMC41Ii8+DQogIDxwYXRoIGlkPSJGaWxsLTUiIGQ9Ik0zMC44NDYsMjMuMTA5di4wMjZBOTQuNiw5NC42LDAsMCwwLDAsMjguMjc1VjBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMDAxKSIgZmlsbD0iIzBhMTAzNiIgb3BhY2l0eT0iMC41Ii8+DQogIDxwYXRoIGlkPSJGaWxsLTciIGQ9Ik0zMC44NDYsMFYyOC4yNzVBOTQuNiw5NC42LDAsMCwwLDAsMjMuMTM0di0uMDI2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAuODQ2KSIgZmlsbD0iIzBhMTAzNiIgb3BhY2l0eT0iMC41Ii8+DQo8L3N2Zz4NCg=="

/***/ })

};;
//# sourceMappingURL=client.js.map