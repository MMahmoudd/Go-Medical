exports.ids = [18,16];
exports.modules = {

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

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.af73ad6.jpg";

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
//# sourceMappingURL=services-medical-tourism-health-tourism-component.js.map