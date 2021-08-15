<template>
  <div class="wrapper">
    <section class="header-section" id="header">
      <headerComponent />
    </section>
    <section class="about-section" id="about">
      <aboutUsComponent />
    </section>
    <section class="service-section" id="service">
      <ourServiceComponent />
    </section>
    <section class="contact-section" id="contact">
      <contactUsComponent />
    </section>
  </div>
</template>

<script>
import headerComponent from '../components/homePage/header-component.vue'
import aboutUsComponent from '../components/homePage/aboutUs-component.vue'
import ourServiceComponent from '../components/homePage/ourService-component.vue'
import contactUsComponent from '../components/homePage/contactUs-component.vue'
export default {
  components: {
    headerComponent,
    aboutUsComponent,
    ourServiceComponent,
    contactUsComponent,
    }
}
</script>
