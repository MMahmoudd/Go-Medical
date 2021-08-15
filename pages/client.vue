<template>
  <div class="wrapper">
    <section class="mainHeader-section" id="mainHeader">
      <mainHeaderComponent :mainHeaderData='mainHeaderData'/>
    </section>
    <section class="client-section" id="client">
      <clientsComponent />
    </section>
  </div>
</template>

<script>
import mainHeaderComponent from '../components/mainHeader-component.vue'
import clientsComponent from '../components/clientPage/clients-component.vue'

export default {
  components: {
    mainHeaderComponent,
    clientsComponent
    },
    data() {
        return {
          mainHeaderData: {
            nameOfPage: 'Partners',
            descreption: 'Our',
            descreption2: 'Clients',
          }
        };
    }
}
</script>
