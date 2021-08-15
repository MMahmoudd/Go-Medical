<template>
  <div class="contactForm-component">
    <div class="container">
      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.804931800028!2d31.3671735148235!3d30.09977252291223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458161249e63a21%3A0xe64eae8a320c7875!2sEl-Mosheer%20Ahmed%20Ismail%20St%2C%20Sheraton%20Al%20Matar%2C%20El%20Nozha%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1627752451453!5m2!1sen!2seg" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <div class="row p-7">
        <div class="col-md-8">
          <h2>Get in Touch</h2>
            <div class="contactForm">
              <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <div class="row">
                  <div class="col-md-6">
                    <b-form-group
                    id="input-group-1"
                    label-for="input-1"
                    >
                    <b-form-input
                      id="input-1"
                      v-model="form.name"
                      type="text"
                      placeholder="Full Name*"
                      required
                    ></b-form-input>
                  </b-form-group>
                  </div>
                <div class="col-md-6">
                  <b-form-group id="input-group-2" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form.country"
                      type="text"
                      placeholder="Country*"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group id="input-group-2" label-for="input-3">
                    <b-form-input
                      id="input-3"
                      type="email"
                      v-model="form.email"
                      placeholder="Email*"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group id="input-group-2" label-for="input-4">
                    <b-form-input
                      id="input-4"
                      type="tel"
                      v-model="form.phone"
                      placeholder="Phone*"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-12">
                  <b-form-group id="input-group-2" label-for="input-5">
                    <b-form-textarea
                      id="input-5"
                      v-model="form.message"
                      placeholder="message*"
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                  </b-form-group>
                </div>
                </div>
                <b-button class="btn" type="submit">Send</b-button>
              </b-form>
            </div>
        </div>
        <div class="col-md-4">
          <h2 class="contactColor">Contact Us</h2>
          <div class="location-section">
              <b>
                Egypt
              </b>
              <div class="address d-flex">
                <i class="fas fa-map-marker-alt"></i>
                <p>
                  El-Mosheer Ahmed Ismail St.,<br />
                  Square 1159, Building 2 Fifth Floor Office 503,<br />
                  Sheraton, Heliopoli , Cairo - Egypt
                </p>
              </div>
              <div class="phone d-flex">
                <i class="fas fa-phone-alt"></i>
                <p>+2 (02)226 86 182</p>
              </div>
              <div class="mail d-flex">
                <i class="far fa-envelope"></i>
                <p>booking@weflyplus.com</p>
              </div>
            </div>
            <div class="location-section">
              <b>
                UNITED ARAB OF EMIRATES
              </b>
              <div class="address d-flex">
                <i class="fas fa-map-marker-alt"></i>
                <p>
                    Sobha Ivory 1, Office 1104; Business Bay<br />
                    Dubai – United Arab of Emirates<br />
                    P.O Box: 413530
                  </p>
              </div>
              <div class="phone d-flex">
                <i class="fas fa-phone-alt"></i>
                <p>+971 (04) 878 6604</p>
              </div>
              <div class="mail d-flex">
                <i class="far fa-envelope"></i>
                <p>info@weflyplus.com</p>
              </div>
            </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          country: '',
          phone: '',
          message: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
