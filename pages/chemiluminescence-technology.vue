<template>
  <div class="wrapper">
    <section class="header-section" id="header">
      <headerComponent :globalHeaderData="globalHeaderData" />
    </section>
    <section class="technologyArtical-section" id="technologyArtical">
      <technologyArticalComponent/>
    </section>
    <section class="technologyArtical-section" id="technologyArtical">
      <productComponent/>
    </section>
  </div>
</template>

<script>
import headerComponent from '../components/globalComponents/global-header.vue'
import technologyArticalComponent from '../components/chemiluminescence-technology/technology-artical.vue'
import productComponent from '../components/chemiluminescence-technology/product.vue'

export default {
  components: {
    headerComponent,
    technologyArticalComponent,
    productComponent
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
