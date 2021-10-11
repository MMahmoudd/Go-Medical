<template>
  <div class="wrapper">
    <section class="header-section" id="header">
      <headerComponent :globalHeaderData="globalHeaderData" />
    </section>
    <section class="contactInfo-section" id="contactInfo">
      <contactInfoComponent/>
    </section>
  </div>
</template>

<script>
import headerComponent from '../components/globalComponents/global-header.vue'
import contactInfoComponent from '../components/contact/contactInfo.vue'

export default {
  components: {
    headerComponent,
    contactInfoComponent,
    },
    data() {
        return {
          globalHeaderData:{
            header: 'CONTACT US',
            pageName: 'Contact'
          },
        };
    }
}
</script>
