<template>
  <div class="wrapper">
    <section class="mainHeader-section" id="mainHeader">
      <mainHeaderComponent :mainHeaderData='mainHeaderData'/>
    </section>
    <section class="medicalTourismComponent-section" id="medicalTourism">
      <medicalTourismComponent />
    </section>
    <section class="healthTourismComponent-section" id="healthTourism">
      <healthTourismComponent />
    </section>
    <section class="processComponent-section" id="process">
      <processComponent />
    </section>
    <section class="ourMainServiceComponent-section" id="ourMainService">
      <ourMainServiceComponent />
    </section>
  </div>
</template>

<script>
import mainHeaderComponent from '../../components/mainHeader-component.vue'
import medicalTourismComponent from '../../components/services/medicalTourism/medicalTourism-component.vue'
import healthTourismComponent from '../../components/services/medicalTourism/healthTourism-component.vue'
import processComponent from '../../components/services/medicalTourism/process-component.vue'
import ourMainServiceComponent from '../../components/services/ourMainServices.vue'

export default {
  components: {
    mainHeaderComponent,
    medicalTourismComponent,
    healthTourismComponent,
    processComponent,
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
