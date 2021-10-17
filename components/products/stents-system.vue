<template>
  <div class="mainProducts-component">
    <div class="container">
      <h2>Stents System (SEMS)</h2>
      <p class="pragraph">
        The self-expanding ENDO-FLEX Nitinol stents ensure precise and reliable stent placement under endoscopic visual and X-ray control. The special material Nitinol (biocompatible nickel-titanium alloy with memory effect) and the single-wire design can reduce the risk of undesired stent migration. ENDO-FLEX optionally offers Nitinol stents with a silicone coating. In order to achieve a precise placement, both the stents and the application sets are equipped with radio-opaque markers, made of Tantalum. This is highly biocompatible, which is characterized by a high density for a high visibility during fluoroscopy.
      </p>
      <div class="row">
        <div class="col-md-4">
          <div class="product-item " @click="showModal(product1)">
          <div class="product-img">
            <img src="../../assets/images/product-33.png" alt="">
          </div>
            <p>Biliary SEMS</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product2)">
          <div class="product-img">
            <img src="../../assets/images/product-34.png" alt="">
          </div>
            <p>Colon SEMS</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product3)">
          <div class="product-img">
            <img src="../../assets/images/product-35.png" alt="">
          </div>
            <p>Esophagus SEMS</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product4)">
          <div class="product-img">
            <img src="../../assets/images/product-36.png" alt="">
          </div>
            <p>Duodenum SEMS</p>
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
          <div v-if="modalData.content1" class="content pb-3 pre-formatted">
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
import icon1 from '../../assets/images/product-33.png'
import icon2 from '../../assets/images/product-34.png'
import icon3 from '../../assets/images/product-35.png'
import icon4 from '../../assets/images/product-36.png'

export default {
    data() {
        return {
          product1: {
            title: 'Biliary SEMS',
            icon: icon1,
            header: 'Biliary SEMS',
            content1: '- Nitinol stents for drainage / treatment of strictures in the Bile Duct \n - Pre-loaded application set; length 210 cm; stent repositionable; Through The Scope (TTS) placement; compatible with guide wire .035“',
            points: [
              'High biological compatibility, corrosion resistance and shape memory',
              'Very elastic',
              'Slow expansion below body temperature',
              'Creates gentle radial force',
              'Decrease in foreign body sensation after placement',
              'Atraumatic stent ending',
              'Non-covered and the silicone-coated versions',
              'Diameter varieties: 8-10 mm',
              'Length varieties: 40-120 mm'
            ],
          },
          product2: {
            title: 'Colon SEMS',
            icon: icon2,
            header: 'Colon SEMS',
            content1: '- Nitinol stents for drainage / treatment of strictures in the Colon \n - Pre-loaded application set; length 230 cm; radio-opaque markers at distal end; stent repositionable; Through The Scope (TTS) placement; compatible with guide wire .035”',
            points: [
              'High biological compatibility, corrosion resistance and shape memory',
              'Very elastic',
              'Slow expansion below body temperature',
              'Creates gentle radial force',
              'Decrease in foreign body sensation after placement',
              'Atraumatic stent ending',
              'Silicone-coated covering varieties',
              'Diameter varieties: 20-24 mm',
              'Length varieties: 60-120 mm'
            ],
          },
          product3: {
            title: 'Esophagus SEMS',
            icon: icon3,
            header: 'Esophagus SEMS',
            content1: '- Nitinol stents for drainage / treatment of strictures in the Esophagus \n - Pre-loaded application set; length 70 cm; radio-opaque markers at distal end; stent repositionable; Over The Wire (OTW) placement; compatible with guide wire .035“',
            points: [
              'High biological compatibility, corrosion resistance and shape memory',
              'Very elastic',
              'Slow expansion below body temperature',
              'Creates gentle radial force',
              'Atraumatic stent ending',
              'Silicone-coated versions',
              'Anti-reflux finishing available',
              'Silicone-coated covering varieties',
              'Diameter varieties: 18-26 mm',
              'Length varieties: 80-180 mm'
            ],
          },
          product4: {
            title: 'Duodenum SEMS',
            icon: icon4,
            header: 'Duodenum SEMS',
            content1: '-  Nitinol stents for drainage / treatment of strictures in the Duodenum \n - Pre-loaded application set; length 210 cm; radio-opaque markers at distal end; stent repositionable; Through The Scope (TTS) placement; compatible with guide wire .035“',
            points: [
              'High biological compatibility, corrosion resistance and shape memory',
              'Very elastic',
              'Slow expansion below body temperature',
              'Creates gentle radial force',
              'Decrease in foreign body sensation after placement',
              'Atraumatic stent ending',
              'Non-covered stents',
              'Diameter varieties: 18-22 mm',
              'Length varieties: 60-120 mm'
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
