<template>
  <div class="wrapper">
    <section class="mainHeader-section" id="mainHeader">
      <mainHeaderComponent :mainHeaderData='mainHeaderData'/>
    </section>
    <section class="services-section" id="services">
      <servicesComponent />
    </section>
  </div>
</template>

<script>
import mainHeaderComponent from '../components/mainHeader-component.vue'
import servicesComponent from '../components/servicesPage/services-component.vue'

export default {
  components: {
    mainHeaderComponent,
    servicesComponent,
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
}
</script>
