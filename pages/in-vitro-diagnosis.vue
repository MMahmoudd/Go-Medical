<template>
  <div class="wrapper">
    <section class="header-section" id="header">
      <headerComponent :globalHeaderData="globalHeaderData" />
    </section>
    <section class="cards-section" id="cards">
      <cards-component/>
    </section>
  </div>
</template>

<script>
import headerComponent from '../components/globalComponents/global-header.vue'
import cardsComponent from '../components/in-vitro-diagnosis/Cards.vue'

export default {
  components: {
    headerComponent,
    cardsComponent,
    },
    data() {
        return {
          globalHeaderData:{
            header: 'Importation and Distribution',
            pageName: 'Distributer'
          },
        };
    }
}
</script>
