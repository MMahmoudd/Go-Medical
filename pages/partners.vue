<template>
  <div class="wrapper">
    <section class="header-section" id="header">
      <headerComponent :globalHeaderData="globalHeaderData" />
    </section>
    <section class="partners-section" id="partners">
      <partnersComponent/>
    </section>
  </div>
</template>

<script>
import headerComponent from '../components/globalComponents/global-header.vue'
import partnersComponent from '../components/partners/partners.vue'

export default {
  components: {
    headerComponent,
    partnersComponent,
    },
    data() {
        return {
          globalHeaderData:{
            header: 'OUR Partners',
            pageName: 'OUR Partners'
          },
        };
    }
}
</script>
