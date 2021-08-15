<template>
  <div class="wrapper">
    <section class="mainHeader-section" id="mainHeader">
      <mainHeaderComponent :mainHeaderData='mainHeaderData'/>
    </section>
    <section class="wllniessTourism-section" id="wllniessTourism">
      <wllniessTourismComponent />
    </section>
    <section class="ourMainServiceComponent-section" id="ourMainService">
      <ourMainServiceComponent />
    </section>
  </div>
</template>

<script>
import mainHeaderComponent from '../../components/mainHeader-component.vue'
import wllniessTourismComponent from '../../components/services/wllniessTourism/wllniessTourism-component.vue'
import ourMainServiceComponent from '../../components/services/ourMainServices.vue'

export default {
  components: {
    mainHeaderComponent,
    wllniessTourismComponent,
    ourMainServiceComponent
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
