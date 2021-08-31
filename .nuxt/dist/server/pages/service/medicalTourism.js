exports.ids = [31,10,16,17,18,19,20];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Medical Tourism.a5739f8.png";

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/process.e036bb2.svg";

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/services/medicalTourism/medicalTourism-component.vue?vue&type=template&id=fa318812&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"medicalTourism-component"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<h2 class=\"prymary-header p-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(63)))+" alt=\"medical Tourism\">\n          Medical Tourism</h2> <p>\n          Historically Pharos 5000 B.C. was the first nation to practice medicine and apply many novel techniques in\n          medicine, now it is the year 2020 and still delivering the best medicine practice, giving a role model in\n          diagnosing, interventional and treating scenarios of health care problems carried out by so professional\n          staff and high end technologies.<br><br>\n\n          Egypt is the perfect place to get such a service, regarding the overall atmosphere, special location,\n          culture, languages, religions, accommodation and even food, all combined in a secured stable rapidly\n          developing country.\n        </p> "),_c('b-button',{staticClass:"prymary-btn",on:{"click":function($event){return _vm.showModal()}}},[_vm._v("Apply Now")])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_c('mainSliderComponent',{attrs:{"sliderImages":_vm.sliderImages}})],1)],2)]),_vm._ssrNode(" "),_c('b-modal',{ref:"my-dialog",attrs:{"header-bg-variant":"004497","centered":"","size":"lg","hide-footer":"","title":"Your Requirements"}},[_c('div',{staticClass:"contactForm text-center"},[(_vm.show)?_c('b-form',{on:{"submit":_vm.onSubmit}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('b-form-group',{attrs:{"id":"input-group-1","label-for":"input-1"}},[_c('b-form-input',{attrs:{"id":"input-1","type":"text","placeholder":"Name","required":""},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('b-form-group',{attrs:{"id":"input-group-2","label-for":"input-3"}},[_c('b-form-input',{attrs:{"id":"input-3","type":"tel","placeholder":"phone","required":""},model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v)},expression:"form.phone"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('b-form-group',{attrs:{"id":"input-group-2","label-for":"input-4"}},[_c('b-form-input',{attrs:{"id":"input-4","type":"email","placeholder":"Email","required":""},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"col-md-12"},[_c('b-form-group',{attrs:{"id":"input-group-2","label-for":"input-5"}},[_c('b-form-textarea',{attrs:{"id":"input-5","placeholder":"Other Details","rows":"3","max-rows":"6"},model:{value:(_vm.form.message),callback:function ($$v) {_vm.$set(_vm.form, "message", $$v)},expression:"form.message"}})],1)],1)]),_vm._v(" "),_c('b-button',{staticClass:"btn",attrs:{"type":"submit"}},[_vm._v("Send")])],1):_vm._e()],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/services/medicalTourism/medicalTourism-component.vue?vue&type=template&id=fa318812&

// EXTERNAL MODULE: ./components/services/mainSlider-component.vue + 4 modules
var mainSlider_component = __webpack_require__(40);

// EXTERNAL MODULE: ./assets/images/Medical Tourism/1.jpg
var _1 = __webpack_require__(60);
var _1_default = /*#__PURE__*/__webpack_require__.n(_1);

// EXTERNAL MODULE: ./assets/images/Medical Tourism/2.jpg
var _2 = __webpack_require__(66);
var _2_default = /*#__PURE__*/__webpack_require__.n(_2);

// EXTERNAL MODULE: ./assets/images/Medical Tourism/3.jpg
var _3 = __webpack_require__(67);
var _3_default = /*#__PURE__*/__webpack_require__.n(_3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/services/medicalTourism/medicalTourism-component.vue?vue&type=script&lang=js&
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
//
//
//





/* harmony default export */ var medicalTourism_componentvue_type_script_lang_js_ = ({
  components: {
    mainSliderComponent: mainSlider_component["default"]
  },

  data() {
    return {
      sliderImages: {
        sliderImages1: _1_default.a,
        sliderImages2: _2_default.a,
        sliderImages3: _1_default.a,
        sliderImages4: _3_default.a
      },
      form: {
        email: '',
        name: '',
        country: '',
        phone: '',
        message: ''
      },
      show: true
    };
  },

  methods: {
    showModal() {
      this.$refs['my-dialog'].show();
    },

    hideModal() {
      this.$refs['my-dialog'].hide();
    },

    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      this.onReset();
    },

    onReset(event) {
      event.preventDefault(); // Reset our form values

      this.form.email = '';
      this.form.name = '';
      this.form.message = '';
      this.form.phone = ''; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }

  }
});
// CONCATENATED MODULE: ./components/services/medicalTourism/medicalTourism-component.vue?vue&type=script&lang=js&
 /* harmony default export */ var medicalTourism_medicalTourism_componentvue_type_script_lang_js_ = (medicalTourism_componentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/services/medicalTourism/medicalTourism-component.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  medicalTourism_medicalTourism_componentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "17cfd8b2"
  
)

/* harmony default export */ var medicalTourism_component = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/services/medicalTourism/healthTourism-component.vue?vue&type=template&id=45efe89c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"medicalTourism-component"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_c('mainSliderComponent',{attrs:{"sliderImages":_vm.sliderImages}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<h2 class=\"prymary-header p-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(99)))+" alt=\"HEALTH TOURISM \"> HEALTH TOURISM</h2> <p>\n          We have close ties with reputable hospitals &amp; medical centers in Egypt. <br><br>\n\n        There is a process where we receive relevant information from your side for each case &amp; then the best alternative(s) are recommended.<br>\n        We plan the best suitable medical program tailored for each case, including the investigations, interventions and medications.<br><br>\n\n        All touristic services are well organized regarding accommodation, transportation, sightseeing, from the airport and back again to the airport.\n        </p> "),_c('b-button',{staticClass:"prymary-btn",on:{"click":function($event){return _vm.showModal()}}},[_vm._v("Apply Now")])],2)],2)]),_vm._ssrNode(" "),_c('b-modal',{ref:"my-dialog",attrs:{"header-bg-variant":"004497","centered":"","size":"lg","hide-footer":"","title":"Your Requirements"}},[_c('div',{staticClass:"contactForm text-center"},[(_vm.show)?_c('b-form',{on:{"submit":_vm.onSubmit}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('b-form-group',{attrs:{"id":"input-group-1","label-for":"input-1"}},[_c('b-form-input',{attrs:{"id":"input-1","type":"text","placeholder":"Name","required":""},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('b-form-group',{attrs:{"id":"input-group-2","label-for":"input-3"}},[_c('b-form-input',{attrs:{"id":"input-3","type":"tel","placeholder":"phone","required":""},model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v)},expression:"form.phone"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('b-form-group',{attrs:{"id":"input-group-2","label-for":"input-4"}},[_c('b-form-input',{attrs:{"id":"input-4","type":"email","placeholder":"Email","required":""},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"col-md-12"},[_c('b-form-group',{attrs:{"id":"input-group-2","label-for":"input-5"}},[_c('b-form-textarea',{attrs:{"id":"input-5","placeholder":"Other Details","rows":"3","max-rows":"6"},model:{value:(_vm.form.message),callback:function ($$v) {_vm.$set(_vm.form, "message", $$v)},expression:"form.message"}})],1)],1)]),_vm._v(" "),_c('b-button',{staticClass:"btn",attrs:{"type":"submit"}},[_vm._v("Send")])],1):_vm._e()],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/services/medicalTourism/healthTourism-component.vue?vue&type=template&id=45efe89c&

// EXTERNAL MODULE: ./components/services/mainSlider-component.vue + 4 modules
var mainSlider_component = __webpack_require__(40);

// EXTERNAL MODULE: ./assets/images/Medical Tourism/1.jpg
var _1 = __webpack_require__(60);
var _1_default = /*#__PURE__*/__webpack_require__.n(_1);

// EXTERNAL MODULE: ./assets/images/Medical Tourism/2.jpg
var _2 = __webpack_require__(66);
var _2_default = /*#__PURE__*/__webpack_require__.n(_2);

// EXTERNAL MODULE: ./assets/images/Medical Tourism/3.jpg
var _3 = __webpack_require__(67);
var _3_default = /*#__PURE__*/__webpack_require__.n(_3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/services/medicalTourism/healthTourism-component.vue?vue&type=script&lang=js&
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





/* harmony default export */ var healthTourism_componentvue_type_script_lang_js_ = ({
  components: {
    mainSliderComponent: mainSlider_component["default"]
  },

  data() {
    return {
      sliderImages: {
        sliderImages1: _1_default.a,
        sliderImages2: _2_default.a,
        sliderImages3: _1_default.a,
        sliderImages4: _3_default.a
      },
      form: {
        email: '',
        name: '',
        country: '',
        phone: '',
        message: ''
      },
      show: true
    };
  },

  methods: {
    showModal() {
      this.$refs['my-dialog'].show();
    },

    hideModal() {
      this.$refs['my-dialog'].hide();
    },

    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      this.onReset();
    },

    onReset(event) {
      event.preventDefault(); // Reset our form values

      this.form.email = '';
      this.form.name = '';
      this.form.message = '';
      this.form.phone = ''; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }

  }
});
// CONCATENATED MODULE: ./components/services/medicalTourism/healthTourism-component.vue?vue&type=script&lang=js&
 /* harmony default export */ var medicalTourism_healthTourism_componentvue_type_script_lang_js_ = (healthTourism_componentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/services/medicalTourism/healthTourism-component.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  medicalTourism_healthTourism_componentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "09331a27"
  
)

/* harmony default export */ var healthTourism_component = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/services/medicalTourism/process-component.vue?vue&type=template&id=384a2d10&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"misionAndVision-component process-component"},[_vm._ssrNode("<div class=\"img-background\"><img"+(_vm._ssrAttr("src",__webpack_require__(100)))+" alt=\"background\"></div> <div class=\"overlay\"><div class=\"container \"><h2>OUR PROCESS IS EASY</h2> <div class=\"process-content\"><div class=\"wave\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt=\"wave\"></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/services/medicalTourism/process-component.vue?vue&type=template&id=384a2d10&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/services/medicalTourism/process-component.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f1157132"
  
)

/* harmony default export */ var process_component = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/service/medicalTourism.vue?vue&type=template&id=9888cbac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_vm._ssrNode("<section id=\"mainHeader\" class=\"mainHeader-section\">","</section>",[_c('mainHeaderComponent',{attrs:{"mainHeaderData":_vm.mainHeaderData}})],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"medicalTourism\" class=\"medicalTourismComponent-section\">","</section>",[_c('medicalTourismComponent')],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"healthTourism\" class=\"healthTourismComponent-section\">","</section>",[_c('healthTourismComponent')],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"process\" class=\"processComponent-section\">","</section>",[_c('processComponent')],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"ourMainService\" class=\"ourMainServiceComponent-section\">","</section>",[_c('ourMainServiceComponent')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/service/medicalTourism.vue?vue&type=template&id=9888cbac&

// EXTERNAL MODULE: ./components/mainHeader-component.vue + 4 modules
var mainHeader_component = __webpack_require__(41);

// EXTERNAL MODULE: ./components/services/medicalTourism/medicalTourism-component.vue + 4 modules
var medicalTourism_component = __webpack_require__(125);

// EXTERNAL MODULE: ./components/services/medicalTourism/healthTourism-component.vue + 4 modules
var healthTourism_component = __webpack_require__(126);

// EXTERNAL MODULE: ./components/services/medicalTourism/process-component.vue + 2 modules
var process_component = __webpack_require__(138);

// EXTERNAL MODULE: ./components/services/ourMainServices.vue + 4 modules
var ourMainServices = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/service/medicalTourism.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
//





/* harmony default export */ var medicalTourismvue_type_script_lang_js_ = ({
  components: {
    mainHeaderComponent: mainHeader_component["default"],
    medicalTourismComponent: medicalTourism_component["default"],
    healthTourismComponent: healthTourism_component["default"],
    processComponent: process_component["default"],
    ourMainServiceComponent: ourMainServices["default"]
  },

  data() {
    return {
      mainHeaderData: {
        nameOfPage: 'solutions',
        descreption: 'Services',
        descreption2: 'We Provide'
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/service/medicalTourism.vue?vue&type=script&lang=js&
 /* harmony default export */ var service_medicalTourismvue_type_script_lang_js_ = (medicalTourismvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/service/medicalTourism.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  service_medicalTourismvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9be4df6a"
  
)

/* harmony default export */ var medicalTourism = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/services/mainSlider-component.vue?vue&type=template&id=7d025392&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slider-component"},[_vm._ssrNode("<div class=\"border\"></div> "),_vm._ssrNode("<div class=\"swiper\">","</div>",[_vm._ssrNode("<div class=\"swiper-container\">","</div>",[_c('div',{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:(_vm.swiperOption),expression:"swiperOption",arg:"mySwiper"}]},[_vm._ssrNode("<div class=\"swiper-wrapper\"><div class=\"swiper-slide\"><img"+(_vm._ssrAttr("src",_vm.sliderImages.sliderImages1 || _vm.sliderImages.sliderImages5))+" alt=\"screen-1\"></div> <div class=\"swiper-slide\"><img"+(_vm._ssrAttr("src",_vm.sliderImages.sliderImages2 || _vm.sliderImages.sliderImages6))+" alt=\"screen-2\"></div> <div class=\"swiper-slide\"><img"+(_vm._ssrAttr("src",_vm.sliderImages.sliderImages3 || _vm.sliderImages.sliderImages7))+" alt=\"screen-4\"></div> <div class=\"swiper-slide\"><img"+(_vm._ssrAttr("src",_vm.sliderImages.sliderImages4 || _vm.sliderImages.sliderImages8))+" alt=\"screen-4\"></div></div>")])]),_vm._ssrNode(" <div class=\"swiper-button-next\"></div> <div class=\"swiper-button-prev\"></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/services/mainSlider-component.vue?vue&type=template&id=7d025392&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/services/mainSlider-component.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
/* harmony default export */ var mainSlider_componentvue_type_script_lang_js_ = ({
  props: ['sliderImages'],

  data() {
    return {
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: {
          delay: 5000
        }
      }
    };
  }

});
// CONCATENATED MODULE: ./components/services/mainSlider-component.vue?vue&type=script&lang=js&
 /* harmony default export */ var services_mainSlider_componentvue_type_script_lang_js_ = (mainSlider_componentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/services/mainSlider-component.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  services_mainSlider_componentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "288787b4"
  
)

/* harmony default export */ var mainSlider_component = __webpack_exports__["default"] = (component.exports);

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

/***/ 42:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NC45MjIiIGhlaWdodD0iMzIuOTc4IiB2aWV3Qm94PSIwIDAgNDQuOTIyIDMyLjk3OCI+PHBhdGggZD0iTS04NTkuODc3LDgwNi4wNTJoLTQxLjIzM2ExLjg0NywxLjg0NywwLDAsMC0xLjg0NCwxLjg0NXYxNy4yNjFhMS44NjYsMS44NjYsMCwwLDAsLjAyNC4yODUsMS4zMTYsMS4zMTYsMCwwLDAsLjg2NywxLjQ5bDM1LjIzOSwxMi4wMTFhMS42MzYsMS42MzYsMCwwLDAsLjUyNy4wODcsMS42NDYsMS42NDYsMCwwLDAsLjc2Ny0uMTksMS42NDMsMS42NDMsMCwwLDAsLjgxMi0xLjAxNEwtODYxLjc0OSw4MjdoMS44NzJhMS44NDcsMS44NDcsMCwwLDAsMS44NDQtMS44NDVWODA3LjlBMS44NDcsMS44NDcsMCwwLDAtODU5Ljg3Nyw4MDYuMDUyWm0tNy4xLDMwLjA1OUwtODkzLjcsODI3aDI5LjIyM1ptNi4zMTItMTEuNzRoLTM5LjY1OVY4MDguNjg0aDM5LjY1OXYxNS42ODdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MDIuOTU0IC04MDYuMDUyKSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/our service 2.49952e1.svg";

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/our service 3.30bc38c.svg";

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOC4yODkiIGhlaWdodD0iNDAuODQ4IiB2aWV3Qm94PSIwIDAgMzguMjg5IDQwLjg0OCI+PHBhdGggZD0iTS00NzkuNDEyLDkzMS4yMzhsLTE4LjU0Ni04Ljk1M2EuNi42LDAsMCwwLS41MjEsMGwtMTguNTQ2LDguOTUzYS42LjYsMCwwLDAtLjMzOC41MzlWOTUzLjUyYS42LjYsMCwwLDAsLjMzOC41MzlsMTguNTQ2LDguOTU0YS42LjYsMCwwLDAsLjI2LjA1OS42MDYuNjA2LDAsMCwwLC4yNjEtLjA1OWwxOC41NDYtOC45NTRhLjYuNiwwLDAsMCwuMzM3LS41MzlWOTMxLjc3NkEuNi42LDAsMCwwLTQ3OS40MTIsOTMxLjIzOFptLTE4LjgwNy03Ljc1LDE3LjE3MSw4LjI4OS00Ljk3NywyLjRhLjYxMS42MTEsMCwwLDAtLjEtLjA2M2wtMTcuMDU0LTguMjMzWm0tNi4zMTMsMy4wNzIsMTcuMTQ1LDguMjc3LTMuNTExLDEuNy0xNy4xMzgtOC4yNzRabTE3LjU0Niw5LjQxMnY2LjI2NmwtMy4yOCwxLjU4NHYtNi4yNjdabTYuNzE1LDE3LjE3NC0xNy4zNSw4LjM3NVY5NDEuMTA2bDQuMTM5LTJhLjYuNiwwLDAsMCwuMjc5LS44LjYuNiwwLDAsMC0uOC0uMjc5bC00LjIxNiwyLjAzNi0xLjY1OS0uOGEuNi42LDAsMCwwLS44LjI3OS42LjYsMCwwLDAsLjI3OC44bDEuNTgxLjc2NFY5NjEuNTJsLTE3LjM0OS04LjM3NVY5MzIuNzNsMTMuMjExLDYuMzc4YS41ODguNTg4LDAsMCwwLC4yNi4wNi42LjYsMCwwLDAsLjUzOS0uMzM4LjYuNiwwLDAsMC0uMjc4LS44bC0xMi45NTQtNi4yNTQsNS45NDQtMi44NywxNy45NzQsOC42NzguMDA4LjAxdjcuMThhLjYuNiwwLDAsMCwuMjgxLjUwNy42LjYsMCwwLDAsLjMxOC4wOTEuNjA2LjYwNiwwLDAsMCwuMjYtLjA1OWw0LjQ3Ny0yLjE2MWEuNi42LDAsMCwwLC4zMzgtLjUzOXYtNy4yMmw1LjUxOC0yLjY2NHYyMC40MTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MTcuMzY0IC05MjIuMjI1KSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMC40MDEiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCAzMC40MDEgNDgiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcyMi43MjYgLTkxMC4xOTYpIj48cGF0aCBkPSJNLTcxNC43MjYsOTU4LjJoMi40di0xLjZoLTEuMjkxbC41MzItMS41OTRhNS44NTksNS44NTksMCwwLDEsNy40MTEtMy43MDhBNS44NTYsNS44NTYsMCwwLDEtNzAxLjk2NSw5NTVsLjUzLDEuNTk0aC0xLjI5MXYxLjZoMTAuNHYtMS42aC0xLjEyMWwtNS41NDYtMTAuNGgxLjA2N3YtMS42aC0xLjg0bC0yLjYxOS03LjJoMS4yNTl2LTEuNmgtMS43bC0yLjE5MS0xNi44aDEuNDg4di0xLjZoLTEuNlY5MTVhLjguOCwwLDAsMC0uOC0uOGgtLjh2LTRoLTEuNnY0aC0uOGEuOC44LDAsMCwwLS44Ljh2Mi40aC0xLjZWOTE5aDEuNDg5bC0yLjE5MSwxNi44aC0xLjd2MS42aDEuMjU4bC0yLjYxOCw3LjJoLTEuODM5djEuNmgxLjA2NmwtNS41NDcsMTAuNGgtMS4xMnYxLjZabTYuNC00Mi40aDEuNnYxLjZoLTEuNlptLS4xLDMuMmgxLjhsMi4xOTEsMTYuOGgtNi4xNzhabS0yLjU0MiwxOC40aDYuODhsMi42MTcsNy4yaC0yLjI1NGwtMS40MzUtNS4wMmEuOC44LDAsMCwwLS43NjktLjU4aC0zLjJhLjguOCwwLDAsMC0uNzY5LjU4bC0xLjQzNSw1LjAyaC0yLjI1NVptNS41NzksNy4yaC00LjI3OGwxLjE0Mi00aDEuOTk0Wm0tOC44NTksMS42aDEzLjQ0bDUuNTQ3LDEwLjRoLTQuNDlsLS43LTIuMWE3LjQ2MSw3LjQ2MSwwLDAsMC05LjQzNy00LjcxOEE3LjQ2LDcuNDYsMCwwLDAtNzE0LjYsOTU0LjVsLS43LDIuMWgtNC40OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+"

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/our service 6.dbcfab9.svg";

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/our service 7.fdc5bd6.svg";

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/our service 8.eb8d74b.svg";

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/our service O 1.d6bacc4.svg";

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/our service O 2.33fc5ec.svg";

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/our service O 3.6ed8b64.svg";

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/our service O 4.8c47186.svg";

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/our service O 5.67837c1.svg";

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/our service O 6.77e95cb.svg";

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/our service O 7.70c6b97.svg";

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/services/ourMainServices.vue?vue&type=template&id=9c9b05a8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ourService-component"},[_vm._ssrNode("<div class=\"container \"><h2 class=\"prymary-header p-0\">Our Services</h2> <div class=\"row\"><div class=\"col-md-3 col-sm-6\"><div class=\"icon\"><img"+(_vm._ssrAttr("src",__webpack_require__(42)))+" alt=\"service 1\"></div> <div class=\"content\"><h2>Ticketing</h2></div></div> <div class=\"col-md-3 col-sm-6\"><div class=\"icon\"><img"+(_vm._ssrAttr("src",__webpack_require__(43)))+" alt=\"service 2\"></div> <div class=\"content\"><h2>Worldwide Hotel Bookings</h2></div></div> <div class=\"col-md-3 col-sm-6\"><div class=\"icon\"><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt=\"service 3\"></div> <div class=\"content\"><h2>Visas</h2></div></div> <div class=\"col-md-3 col-sm-6\"><div class=\"icon\"><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt=\"service 4\"></div> <div class=\"content\"><h2>Packages</h2></div></div> <div class=\"col-md-3 col-sm-6\"><div class=\"icon\"><img"+(_vm._ssrAttr("src",__webpack_require__(46)))+" alt=\"service 5\"></div> <div class=\"content\"><h2>Activities &amp; Sightseeing</h2></div></div> <div class=\"col-md-3 col-sm-6\"><div class=\"icon\"><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt=\"service 6\"></div> <div class=\"content\"><h2>Meet &amp; Assist</h2></div></div> <div class=\"col-md-3 col-sm-6\"><div class=\"icon\"><img"+(_vm._ssrAttr("src",__webpack_require__(48)))+" alt=\"service 7\"></div> <div class=\"content\"><h2>Transfers</h2></div></div> "+((this.$route.path === '/service/corporateTravel')?("<div class=\"col-md-3 col-sm-6\"><div class=\"icon\"><img"+(_vm._ssrAttr("src",__webpack_require__(49)))+" alt=\"service 8\"></div> <div class=\"content\"><h2>M.I.C.E.</h2></div></div>"):"<!---->")+"</div></div> "),_c('b-modal',{ref:"my-modal",attrs:{"centered":"","size":"lg","hide-footer":""}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3 d-flex"},[_c('div',{staticClass:"icon text-center"},[_c('img',{attrs:{"src":_vm.modalData.icon,"alt":"icon"}}),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.modalData.title))])])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[(_vm.modalData.title === 'Packages')?_c('div',{staticClass:"content pre-formatted"},[_c('div',{staticClass:"category"},[_c('h5',[_vm._v(_vm._s(_vm.modalData.package1.head))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.modalData.package1.content))])]),_vm._v(" "),_c('div',{staticClass:"category"},[_c('h5',[_vm._v(_vm._s(_vm.modalData.package2.head))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.modalData.package2.content))])]),_vm._v(" "),_c('div',{staticClass:"category"},[_c('h5',[_vm._v(_vm._s(_vm.modalData.package3.head))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.modalData.package3.content))])])]):_c('div',{staticClass:"content pre-formatted"},[_vm._v("\n      "+_vm._s(_vm.modalData.content)+"\n    ")])])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/services/ourMainServices.vue?vue&type=template&id=9c9b05a8&

// EXTERNAL MODULE: ./assets/images/our service O 1.svg
var our_service_O_1 = __webpack_require__(50);
var our_service_O_1_default = /*#__PURE__*/__webpack_require__.n(our_service_O_1);

// EXTERNAL MODULE: ./assets/images/our service O 2.svg
var our_service_O_2 = __webpack_require__(51);
var our_service_O_2_default = /*#__PURE__*/__webpack_require__.n(our_service_O_2);

// EXTERNAL MODULE: ./assets/images/our service O 3.svg
var our_service_O_3 = __webpack_require__(52);
var our_service_O_3_default = /*#__PURE__*/__webpack_require__.n(our_service_O_3);

// EXTERNAL MODULE: ./assets/images/our service O 4.svg
var our_service_O_4 = __webpack_require__(53);
var our_service_O_4_default = /*#__PURE__*/__webpack_require__.n(our_service_O_4);

// EXTERNAL MODULE: ./assets/images/our service O 5.svg
var our_service_O_5 = __webpack_require__(54);
var our_service_O_5_default = /*#__PURE__*/__webpack_require__.n(our_service_O_5);

// EXTERNAL MODULE: ./assets/images/our service O 6.svg
var our_service_O_6 = __webpack_require__(55);
var our_service_O_6_default = /*#__PURE__*/__webpack_require__.n(our_service_O_6);

// EXTERNAL MODULE: ./assets/images/our service O 7.svg
var our_service_O_7 = __webpack_require__(56);
var our_service_O_7_default = /*#__PURE__*/__webpack_require__.n(our_service_O_7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/services/ourMainServices.vue?vue&type=script&lang=js&
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
//
//
//
//






 // import icon8 from '../../assets/images/our service O 8.svg'

/* harmony default export */ var ourMainServicesvue_type_script_lang_js_ = ({
  data() {
    return {
      Ticketing: {
        title: 'Ticketing',
        content: 'Being an IATA agency We Fly Plus Travel & Tourism represents most of the major international airline carriers. \n \n We maintain excellent relations and contacts with their respective staff members, in order to jointly be able to secure reservations and choose the most convenient and economic routes for the client’s ultimate comfort.\n \n We Fly Plus Travel & Tourism enthusiastic and professional ticketing team offers you extreme flexibility with both local and international ticket bookings. \n Our established relationship with all airlines enables us to provide a wide range of air ticketing services at the best available rates whenever and wherever you want.',
        icon: our_service_O_1_default.a
      },
      WorldwideHotelBookings: {
        title: 'Worldwide Hotel Bookings',
        content: 'Find and book hotels anytime, anywhere! We Fly Plus Travel & Tourism has got the best accommodation deals.\n \n Featuring a powerful and easy-to-use hotel reservation tool with real-time rates, instant availability and special promotions, we offer unrivalled options to access our vast inventory of directly contracted hotels across hundreds of destinations worldwide.\n \n For further details on our hotel services and pricing, give us a call or inquire online.',
        icon: our_service_O_2_default.a
      },
      visas: {
        title: 'visas',
        content: 'The team at We Fly Plus Travel & Tourism is well-informed about the latest Dubai / UAE visas & immigration policies ; we can handle visa applications of both individuals & corporate clients for all the destinations.\n \n With clear & flexible options, accompanied by minimal documentation, we make the entire visa application process as easy & fast as possible. We also provide international visa services to more than 40 countries',
        icon: our_service_O_3_default.a
      },
      Packages: {
        title: 'Packages',
        package1: {
          head: 'A. HONEYMOON',
          content: 'We manage to recommend, plan and book some of the most fascinating honeymoon destinations in the World.'
        },
        package2: {
          head: 'B. FAMILY VACATIONS',
          content: 'We can help you arrange and book the family vacation that fits your preferences and budget, helping you create priceless memories.'
        },
        package3: {
          head: 'C. OTHER PACKAGES',
          content: 'You name it and we arrange it, our team are fully prepared to listen to your needs and create the package that most fits them.'
        },
        icon: our_service_O_4_default.a
      },
      ActivitiesSightseeing: {
        title: 'Activities & Sightseeing',
        content: 'A major element in any trip is where to go and what we do. We offer a fully customized experience according to your preferences and needs; outdoor activities, museums, dinning, historical places, whatever it is that you enjoy doing it we are ready to offer it. \n \n Even if you are not sure what is it that you want to see, our team is ready to advise you and help you plan the perfect trip.',
        icon: our_service_O_5_default.a
      },
      MeetAssist: {
        title: 'Meet & Assist',
        content: 'Wherever you arrive, we’ll be there to help you through the customs and luggage affairs. Our local and international suppliers can surely secure quick and professional airport dealings…It’s a matter of experience.',
        icon: our_service_O_7_default.a
      },
      TRANSFARS: {
        title: 'TRANSFARS',
        content: 'Wherever you arrive, we’ll be there to help you through the customs, transfers and luggage affairs. Our local and international suppliers can surely secure quick and professional airport dealings…its a matter of experience.',
        icon: our_service_O_6_default.a
      },
      modalData: {}
    };
  },

  methods: {
    showModal(data) {
      console.log(data);
      this.modalData = data;
      this.$refs['my-modal'].show();
    },

    hideModal() {
      this.$refs['my-modal'].hide();
    }

  }
});
// CONCATENATED MODULE: ./components/services/ourMainServices.vue?vue&type=script&lang=js&
 /* harmony default export */ var services_ourMainServicesvue_type_script_lang_js_ = (ourMainServicesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/services/ourMainServices.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  services_ourMainServicesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "37c2f56e"
  
)

/* harmony default export */ var ourMainServices = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.af73ad6.jpg";

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/travel icon 5.9e83399.svg";

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2.b8fa185.jpg";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/3.e367404.jpg";

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/travel icon 7.8bde4db.svg";

/***/ })

};;
//# sourceMappingURL=medicalTourism.js.map