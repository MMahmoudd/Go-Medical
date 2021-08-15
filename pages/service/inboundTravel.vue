<template>
  <div class="wrapper">
    <section class="mainHeader-section" id="mainHeader">
      <mainHeaderComponent :mainHeaderData='mainHeaderData'/>
    </section>
    <section class="headerComponent-section" id="headerComponent">
      <headerComponent />
    </section>
    <section class="slidersComponent-section" id="slidersComponent">
      <slidersComponent />
    </section>
    <section class="ourMainServiceComponent-section" id="ourMainService">
      <ourMainServiceComponent />
    </section>
  </div>
</template>

<script>
import mainHeaderComponent from '../../components/mainHeader-component.vue'
import headerComponent from '../../components/services/inboundTravel/header.vue'
import slidersComponent from '../../components/services/inboundTravel/sliders.vue'
import ourMainServiceComponent from '../../components/services/ourMainServices.vue'

export default {
  components: {
    mainHeaderComponent,
    headerComponent,
    slidersComponent,
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
