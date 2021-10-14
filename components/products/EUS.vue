<template>
  <div class="mainProducts-component">
    <div class="container">
      <h2>EUS Accessories</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product1)">
            <div class="product-img">
              <img src="../../assets/images/product-31.png" alt="">
            </div>
            <p>SonoFlex EUS</p>
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
            <img :src="modalData.icon" alt="icon">
          </div>
          <h2 class="title-header">{{modalData.header}}</h2>
          <div class="content pb-3">
            {{modalData.content1}}
          </div>
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
import icon1 from '../../assets/images/product-32.png'

export default {
    data() {
        return {
          product1: {
            title: 'Endoscopic Ultra Sound (EUS) Accessories',
            icon: icon1,
            header: 'Endoscopic Ultra Sound (EUS) Accessories',
            content1: 'The EUS-guided fine needle aspiration (FNA) systems are used to remove sample tissue in the upper digestive tract. The stainless steel needles are available in different sizes and with different stylet tips. Thanks to the variable working length, the EUS-FNA needles are compatible with all common EUS gastroscopes. The laser-treated surface provides visibility under X-ray control.',
            points: [
              'The flat needle bevel makes it easy to puncture lesions and take cytological tissue samples.',
              'needle diameters 19 / 22 / 25 gauge',
              'tube variant with stabilization aid for large working channels > 3.2 mm',
              'laser engraving on the needle tip for optimal visibility during sonography',
              'Nitinol stylet with a rounded or beveled tip',
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
