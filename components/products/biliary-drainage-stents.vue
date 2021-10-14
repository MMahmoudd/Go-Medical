<template>
  <div class="mainProducts-component mainCardProduct-component">
    <div class="container">
      <h2>Biliary Drainage Stents</h2>
      <p class="pragraph">ENDO-FLEX biliary stents come with rounded corners for atraumatic placement. Shape and kink stability contribute to user-friendly application. Pre-loaded stent placement sets to manage time and cost efficiency.</p>
      <div class="row">
        <div class="col-md-4">
          <div class="product-item " @click="showModal(product1)">
          <div class="product-img">
            <img src="../../assets/images/product-28.png" alt="">
          </div>
            <p>Bile Duct Stents and Stent-Sets</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product2)">
          <div class="product-img">
            <img src="../../assets/images/product-29.png" alt="">
          </div>
            <p>Introducer Sets for Biliary Stents GPPS</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product3)">
          <div class="product-img">
            <img src="../../assets/images/product-30.png" alt="">
          </div>
            <p>Pusher</p>
          </div>
        </div>
      </div>
    </div>
      <b-modal
        ref="my-modal"
        header-bg-variant="009DDF"
        :title="modalData.title"
        centered
        size="xl"
        hide-footer
        scrollable
      >
          <div class="icon">
            <img class="py-5" :src="modalData.icon" alt="icon">
          </div>
          <h2 class="title-header">{{modalData.header}}</h2>
          <p><strong>Description</strong></p>
          <div class="points">
            <p class="m-0" v-for="point in modalData.points" :key="point">
              <img src="../../assets/images/Ellipse active.svg" alt="point">
                {{ point }}
            </p>
          </div>
    </b-modal>
  </div>
</template>
<script>
import icon1 from '../../assets/images/product-28.png'
import icon2 from '../../assets/images/product-29.png'
import icon3 from '../../assets/images/product-30.png'

export default {
    data() {
        return {
          product1: {
            title: 'Bile Duct Stents And Stent-Sets',
            icon: icon1,
            header: 'Bile Duct Stents And Stent-Sets',
            points: [
              'PE- and PTFE versions',
              'Different diameters and lengths',
              '2 wings',
              'Straight form',
              'Curved or angled shape',
              'Also available as individual components',
              'Size: 7-11.5 French',
              'Length: 3-15mm'
            ],
          },
          product2: {
            title: 'Introducer Sets For Biliary Stents GPPS',
            icon: icon2,
            header: 'Introducer Sets For Biliary Stents GPPS',
            points: [
              'For biliary stents with sizes 8.5 Fr., 10 Fr. and 11.5 Fr.',
              'Internal guiding catheter (equipped with a platinum ring distally and a Y-attachment proximally)',
              'Outer pusher (distal with stainless steel ring and proximal with Luer-Lock connector)',
            ],
          },
          product3: {
            title: 'Pusher',
            icon: icon3,
            header: 'Pusher',
            points: [
              'Different tube diameters',
              'Available lengths of 180 and 280 cm',
            ],
          },
          modalData: {}

        };
    },
    methods: {
      showModal(data) {
        console.log(data)
        this.modalData = data
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
    }
}
</script>
