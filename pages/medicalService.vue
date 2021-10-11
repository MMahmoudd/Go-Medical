<template>
  <div class="wrapper">
    <section class="header-section" id="header">
      <headerComponent :globalHeaderData="globalHeaderData" />
    </section>
    <section class="artical-section" id="artical">
      <artical-component/>
    </section>
  </div>
</template>

<script>
import headerComponent from '../components/globalComponents/global-header.vue'
import articalComponent from '../components/medicalService/artical.vue'

export default {
  components: {
    headerComponent,
    articalComponent,
    },
    data() {
        return {
          globalHeaderData:{
            header: 'Medical Services',
            pageName: 'Medical Services'
          },
        };
    }
}
</script>
