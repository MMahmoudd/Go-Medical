<template>
<div class="navbar-component">
  <b-navbar toggleable="lg" type="dark">
  <div class="container">
    <b-navbar-brand to="/" class="brand">
      <img src="../../../assets/images/logo.svg" alt="logo">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about-us">About US</b-nav-item>
        <b-nav-item to="/services">Our Services</b-nav-item>
        <b-nav-item to="/contact-us">Contact US</b-nav-item>
        <b-button @click="showModal()" size="sm" class="my-sm-0 btn">Get Started</b-button>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
  <b-modal
    ref="my-dialog"
    header-bg-variant="004497"
    centered
    size="lg"
    hide-footer
    title="Your Requirements"
  >
          <div class="contactForm text-center">
              <b-form @submit="onSubmit" v-if="show">
                <div class="row">
                  <div class="col-md-12">
                      <b-form-group
                      id="input-group-1"
                      label-for="input-1"
                      >
                      <b-form-input
                        id="input-1"
                        v-model="form.name"
                        type="text"
                        placeholder="Name"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </div>
                <div class="col-md-6">
                  <b-form-group id="input-group-2" label-for="input-3">
                    <b-form-input
                      id="input-3"
                      type="tel"
                      v-model="form.phone"
                      placeholder="phone"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group id="input-group-2" label-for="input-4">
                    <b-form-input
                      id="input-4"
                      type="email"
                      v-model="form.email"
                      placeholder="Email"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-12">
                  <b-form-group id="input-group-2" label-for="input-5">
                    <b-form-textarea
                      id="input-5"
                      v-model="form.message"
                      placeholder="Other Details"
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
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
