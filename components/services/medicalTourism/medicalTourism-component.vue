<template>
  <div class="medicalTourism-component">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="prymary-header p-0"> <img src="../../../static/images/travel icon 5.svg" alt="medical Tourism">
            Medical Tourism</h2>
          <p>
            Historically Pharos 5000 B.C. was the first nation to practice medicine and apply many novel techniques in
            medicine, now it is the year 2020 and still delivering the best medicine practice, giving a role model in
            diagnosing, interventional and treating scenarios of health care problems carried out by so professional
            staff and high end technologies.<br /><br />

            Egypt is the perfect place to get such a service, regarding the overall atmosphere, special location,
            culture, languages, religions, accommodation and even food, all combined in a secured stable rapidly
            developing country.
          </p>
          <b-button @click="showModal()" class="prymary-btn">Apply Now</b-button>
        </div>
        <div class="col-md-6">
          <mainSliderComponent :sliderImages='sliderImages' />
        </div>
      </div>
    </div>
    <b-modal ref="my-dialog" header-bg-variant="004497" centered size="lg" hide-footer title="Your Requirements">
      <div class="contactForm text-center">
        <b-form @submit="onSubmit" v-if="show">
          <div class="row">
            <div class="col-md-12">
              <b-form-group id="input-group-1" label-for="input-1">
                <b-form-input id="input-1" v-model="form.name" type="text" placeholder="Name" required></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-6">
              <b-form-group id="input-group-2" label-for="input-3">
                <b-form-input id="input-3" type="tel" v-model="form.phone" placeholder="phone" required></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-6">
              <b-form-group id="input-group-2" label-for="input-4">
                <b-form-input id="input-4" type="email" v-model="form.email" placeholder="Email" required>
                </b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-12">
              <b-form-group id="input-group-2" label-for="input-5">
                <b-form-textarea id="input-5" v-model="form.message" placeholder="Other Details" rows="3" max-rows="6">
                </b-form-textarea>
              </b-form-group>
            </div>
          </div>
          <b-button class="btn" type="submit">Send</b-button>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import mainSliderComponent from '../mainSlider-component.vue'
  import sliderImages1 from '../../../static/images/Medical Tourism/1.jpg'
  import sliderImages2 from '../../../static/images/Medical Tourism/2.jpg'
  import sliderImages3 from '../../../static/images/Medical Tourism/1.jpg'
  import sliderImages4 from '../../../static/images/Medical Tourism/3.jpg'

  export default {
    components: {
      mainSliderComponent,
    },
    data() {
      return {
        sliderImages: {sliderImages1, sliderImages2, sliderImages3, sliderImages4},
           form: {
          email: '',
          name: '',
          country: '',
          phone: '',
          message: '',
        },
        show: true
      };
    },
    methods: {
      showModal() {
        this.$refs['my-dialog'].show()
      },
      hideModal() {
        this.$refs['my-dialog'].hide()
      },
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
        this.onReset()
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.message = ''
        this.form.phone = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }

</script>
