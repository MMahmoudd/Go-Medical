<template>
  <div class="wrapper">
    <section class="header-section" id="header">
      <headerComponent :globalHeaderData="globalHeaderData" />
    </section>
    <section class="product-section" id="product">
      <productComponent/>
    </section>
  </div>
</template>

<script>
import headerComponent from '../../components/globalComponents/global-header.vue'
import productComponent from '../../components/products/hemostasis.vue'

export default {
  components: {
    headerComponent,
    productComponent
    },
    data() {
        return {
          globalHeaderData:{
            header: 'Hemostasis systems',
            pageName: 'Products categories'
          },
        };
    }
}
</script>
