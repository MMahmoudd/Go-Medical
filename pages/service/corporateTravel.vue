<template>
  <div class="wrapper">
    <section class="mainHeader-section" id="mainHeader">
      <mainHeaderComponent :mainHeaderData='mainHeaderData'/>
    </section>
    <section class="corporateTravel-section" id="corporateTravel">
      <corporateTravelComponent />
    </section>
    <section class="mainServices-section" id="mainServices">
      <mainServicesComponent />
    </section>
    <section class="ourMainServiceComponent-section" id="ourMainService">
      <ourMainServiceComponent />
    </section>
  </div>
</template>

<script>
import mainHeaderComponent from '../../components/mainHeader-component.vue'
import corporateTravelComponent from '../../components/services/corporateTravel/corporateTravel-component.vue'
import mainServicesComponent from '../../components/services/corporateTravel/mainServices.vue'
import ourMainServiceComponent from '../../components/services/ourMainServices.vue'

export default {
  components: {
    mainHeaderComponent,
    corporateTravelComponent,
    mainServicesComponent,
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
