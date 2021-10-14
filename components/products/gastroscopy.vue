<template>
  <div class="mainProducts-component">
    <div class="container">
      <h2>Gastroscopy, Colonoscopy and Enteroscopy Accessories</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product1)">
            <div class="product-img">
              <img src="../../assets/images/product-6.png" alt="">
            </div>
              <p>Biopsy Forceps</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product2)">
          <div class="product-img">
            <img src="../../assets/images/product-7.png" alt="">
          </div>
            <p>Multi-Stage Dilation Balloons</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product3)">
          <div class="product-img">
            <img src="../../assets/images/product-8.png" alt="">
          </div>
            <p>Cysto-Gastro-Sets & Pseudocyst Stents</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product4)">
          <div class="product-img">
            <img src="../../assets/images/product-9.png" alt="">
          </div>
            <p>Cytology Brushes</p>

          </div>
        </div>
        <div class="col-md-4">
          <nuxt-link to="/product/Polyp">
            <div class="product-item">
            <div class="product-img">
              <img class="p-0" src="../../assets/images/product-10.png" alt="">
            </div>
              <p>Polyp & Foreign Body Retrieval</p>
            </div>
          </nuxt-link>
        </div>
        <div class="col-md-4">
          <nuxt-link to="/product/polypectomy-snares">
            <div class="product-item">
            <div class="product-img">
              <img src="../../assets/images/product-11.png" alt="">
            </div>
              <p>Polypectomy Snares</p>
            </div>
          </nuxt-link>
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
          <div class="content pb-3">
            {{modalData.content2}}
          </div>
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
import icon1 from '../../assets/images/product-6.png'
import icon2 from '../../assets/images/product-7.png'
import icon3 from '../../assets/images/product-8b.png'
import icon4 from '../../assets/images/product-9.png'
import icon5 from '../../assets/images/product-12.png'
import icon6 from '../../assets/images/product-11.png'
import icon7 from '../../assets/images/product-7b.png'

export default {
    data() {
        return {
          product1: {
            title: 'Biopsy Forceps',
            icon: icon1,
            header: 'Biopsy Forceps',
            content1: 'Biopsy forceps in a variety of designs & specifications for the targeted and safe removal of tissue samples. Areas of application: endoscopic examinations of the human digestive tract and in bronchoscopy.',
            points: [
              'Uncoated or Teflon-coated stainless steel spiral',
              'Diameter from 1.8 to 3.0 mm',
              'With and without thorn',
              'Oval branches with window',
              'Alligator types',
              'Total lengths 120cm, 160cm, 230cm and 280cm',
              'Handle with finger slider including HF connection',
              'Also available in Single-use and Reusable modules',
            ],
          },
          product2: {
            title: 'Multi-Stage Dilation Balloons',
            icon: icon2,
            header: 'Multi-Stage Dilation Balloons',
            content1: 'For dilation, the physiological or therapeutic expansion of constrictions within the entire digestive tract, ENDO-FLEX offers solution concepts (e.g. balloon probes) that can be used in gastroscopy, enteroscopy or colonoscopy.',
            points: [
              'The multi-stage dilation balloons have a clear, transparent plastic balloon, which offers a uniform diameter with maximum radial force.',
              'Each balloon can gradually reach three different diameters.',
              'Both variants can be easily positioned through the endoscope using a guide wire. X-ray markings supported the exact placement.',
              'Easy placement Through The Scope (TTS) and Over The Wire (OTW)',
              'Compatible with .035" guide wires',
              'Balloon diameters from 6 mm to 15 mm (biliary) and 6 mm to 20 mm for esophageal, duodenal and colonic variants'
            ],
          },
          product3: {
            title: 'Cysto-Gastro-Sets',
            icon: icon3,
            header: 'Cysto-Gastro-Sets',
            content1: 'For US (ultrasound)-assisted trans-gastric and trans-duodenal punctures and other endoscopic procedures, ENDO-FLEX offers Cysto-Gastro-Sets that have been specially developed for narrow working channels.',
            points: [
              'Available in 8.5 Fr. and 10 Fr.',
              'Outer tube with distally conical metal head (diathermy head)',
              'Inner catheter with puncture needle',
              'Working length 210 cm',
              '2 separate proximal HF connections',
              'Working channels starting from 3.2 / 3.7 mm Ø'
            ],
          },
          product4: {
            title: 'Cytology Brushes',
            icon: icon4,
            header: 'Cytology Brushes',
            content2: 'ENDO-FLEX - cytology brushes for endoscopic removal of cell smears. The metal head at the end of the brush locks the sample when withdrawn and prevents sample loss or contamination.',
            points: [
              '1 and 2 lumen designs:',
              '2-lumen version for use with guide wire for working channels from 3.2 mm Ø',
              '1-lumen version with a metal head acting as a closure for working channels from 2.0 mm Ø',
              'Lengths: between 120 cm and 230 cm',
              'Brush with a conical, atraumatic tip',
            ],
          },
          product5: {
            title: 'Cystotome',
            icon: icon3,
            header: 'Cystotome',
            points: [
              'Tube diameter 6 Fr.',
              'Distally conical metal head (diathermy head)',
              'Working length 180 cm',
              'Proximal HF connector',
              'Working channels from 2.8 mm diameter',
            ],
          },
          product6: {
            title: 'Pseudocyst Stents',
            icon: icon5,
            header: 'Pseudocyst Stents',
            points: [
              'PE version',
              'Double pigtail',
              'Stents in various diameters and lengths',
            ],
          },
          product7: {
            title: '(HOT) Biopsy Forceps',
            icon: icon7,
            header: '(HOT) Biopsy Forceps',
            points: [
              'Tube diameter 2.3 mm',
              'Length 230 cm',
              'Oval branches with window',
              'Handle with finger slider including HF connection',
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
