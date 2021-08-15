<template>
  <div class="wrapper">
    <section class="mainHeader-section" id="mainHeader">
      <mainHeaderComponent :mainHeaderData='mainHeaderData'/>
    </section>
    <section class="outboundTravel-section" id="outboundTravel">
      <outboundTravelComponent />
    </section>
    <section class="ourMainServiceComponent-section" id="ourMainService">
      <ourMainServiceComponent />
    </section>
  </div>
</template>

<script>
import mainHeaderComponent from '../../components/mainHeader-component.vue'
import outboundTravelComponent from '../../components/services/OutboundTravel/OutboundTravel-component.vue'
import ourMainServiceComponent from '../../components/services/ourMainServices.vue'

export default {
  components: {
    mainHeaderComponent,
    outboundTravelComponent,
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
