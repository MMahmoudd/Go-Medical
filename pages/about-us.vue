<template>
  <div class="wrapper">
    <section class="mainHeader-section" id="mainHeader">
      <mainHeaderComponent :mainHeaderData='mainHeaderData'/>
    </section>
    <section class="aboutDesc-section" id="aboutDesc">
      <aboutDescComponent/>
    </section>
    <section class="misionAndVision-section" id="misionAndVision">
      <misionAndVisionComponent/>
    </section>
    <section class="goals-section" id="goals">
      <goalsComponent/>
    </section>
  </div>
</template>

<script>
import mainHeaderComponent from '../components/mainHeader-component.vue'
import aboutDescComponent from '../components/aboutUsPage/aboutDesc-component.vue'
import misionAndVisionComponent from '../components/aboutUsPage/misionAndVision-component.vue'
import goalsComponent from '../components/aboutUsPage/goals-component.vue'


export default {
  components: {
    mainHeaderComponent,
    aboutDescComponent,
    misionAndVisionComponent,
    goalsComponent
    },
    data() {
        return {
          mainHeaderData: {
            nameOfPage: 'About Us',
            descreption: 'Learn More About',
            descreption2: 'We Fly'
          }
        };
    }
}
</script>
