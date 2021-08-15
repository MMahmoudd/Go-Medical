<template>
  <div class="wrapper">
    <section class="mainHeader-section" id="mainHeader">
      <mainHeaderComponent :mainHeaderData='mainHeaderData'/>
    </section>
    <section class="contactForm-section" id="contactForm">
      <contactFormComponent />
    </section>
  </div>
</template>

<script>
import mainHeaderComponent from '../components/mainHeader-component.vue'
import contactFormComponent from '../components/contactUsPage/contactForm-component.vue'



export default {
  components: {
    mainHeaderComponent,
    contactFormComponent
    },
    data() {
        return {
          mainHeaderData: {
            nameOfPage: 'Contact',
            descreption: 'Get',
            descreption2: 'in Touch'
          }
        };
    }
}
</script>
