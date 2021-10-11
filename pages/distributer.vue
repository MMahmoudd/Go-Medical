<template>
  <div class="wrapper">
    <section class="header-section" id="header">
      <headerComponent :globalHeaderData="globalHeaderData" />
    </section>
    <section class="artical-section" id="artical">
      <artical-component/>
    </section>
    <section class="accessories-section" id="accessories">
      <accessories-component/>
    </section>
  </div>
</template>

<script>
import headerComponent from '../components/globalComponents/global-header.vue'
import articalComponent from '../components/distributer/artical.vue'
import accessoriesComponent from '../components/distributer/accessories.vue'

export default {
  components: {
    headerComponent,
    articalComponent,
    accessoriesComponent
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
