<template>
  <div class="wrapper">
    <section class="header-section" id="header">
      <headerComponent :globalHeaderData="globalHeaderData" />
    </section>
    <section class="bVedalab-section" id="bVedalab">
      <bVedalabComponent/>
    </section>
    <section class="product-section" id="product">
      <productComponent/>
    </section>
  </div>
</template>

<script>
import headerComponent from '../../components/globalComponents/global-header.vue'
import bVedalabComponent from '../../components/companies/vedalab/b-vedalab.vue'
import productComponent from '../../components/companies/vedalab/product.vue'

export default {
  components: {
    headerComponent,
    bVedalabComponent,
    productComponent
    },
    data() {
        return {
          globalHeaderData:{
            header: 'B-VEDALAB',
            pageName: 'Importation and Distribution'
          },
        };
    }
}
</script>
