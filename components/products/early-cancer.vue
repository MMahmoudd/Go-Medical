<template>
  <div class="mainProducts-component">
    <div class="container">
      <h2>Early Cancer Treatment by ESD</h2>
      <p class="pragraph">
        Endoscopic submucosal dissection is the extensive endoscopic removal of malignant tissue > 20mm in the gastrointestinal tract using electro-surgery. The procedure is used for the ablation of early stages of tumor development. The ESD-Knife by ENDO-FLEX combines many work steps in one instrument.
      </p>
      <div class="row">
        <div class="col-md-4">
          <div class="product-item " @click="showModal(product1)">
          <div class="product-img">
            <img src="../../assets/images/product-37.png" alt="">
          </div>
            <p>ESD-Knife</p>
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
          <div v-if="modalData.content2" class="content pb-3">
            {{modalData.content2}}
          </div>
          <div class="points">
            <p class="mb-2" v-for="point in modalData.points" :key="point">
              <img src="../../assets/images/Ellipse active.svg" alt="point">
                <span class="pre-formatted">{{ point }}</span>
            </p>
          </div>
    </b-modal>
  </div>
</template>
<script>
import icon1 from '../../assets/images/product-37.png'

export default {
    data() {
        return {
          product1: {
            title: 'ESD-Knife',
            icon: icon1,
            header: 'ESD-Knife',
            content2: 'ENDO-FLEX ESD-Knife - characterized by a wide range of applications for endoscopic submucosal dissection in the esophagus or gastrointestinal tract. The ESD-Knife combines two types of cutting knives (O-knife / I-knife) in one instrument, thus enabling marking and dissection of lesions in one single operation without changing instruments. The design of the ESD-Knife enables fast and precise dissection of the target tissue. The instrument is available in various combinations of O- and I-knives to enable use in different ways and within different tissue types.',
            points: [
              'I-Knife \n - Available in different lengths from 1-4 mm \n - T-shaped tip enables precise marking of the target tissue and prevents knife from slipping during cutting process',
              'O-Knife \n - With a fixed length of 4 mm and an insulated radial electrode \n - For safe dissection and prevention of perforations in the surrounding tissue',
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
