<template>
  <div>

      <mainNavbar />

    <div class="pages">
      <nuxt />
    </div>

    <div class="main-footer">
      <mainFooter />
    </div>
  </div>
</template>
<script>
import mainNavbar from '~/components/layout/navbar/navbar';
import mainFooter from '~/components/layout/footer/footer';
export default {
    components: {
      mainNavbar,
      mainFooter
    },
      methods: {

  },
}
</script>
<style lang="scss">
.pages{
  background-color: #fff !important;
  width: 100%;
}
</style>
