<template>
  <div class="mainProducts-component mainCardProduct-component">
    <div class="container">
      <h2>Polypectomy Snares</h2>
      <p class="pragraph">In polypectomy, polyps are removed from the gastrointestinal tract as part of an endoscopic examination, and then examined histologically. ENDO-FLEX offers a comprehensive portfolio of Polypectomy and Mucosectomy Snares as well as special shapes to support these procedures</p>
      <div class="row">
        <div class="col-md-4">
          <div class="product-item " @click="showModal(product1)">
          <div class="product-img">
            <img src="../../assets/images/product-16.png" alt="">
          </div>
            <p>Mucosectomy Snares</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product2)">
          <div class="product-img">
            <img src="../../assets/images/product-17.png" alt="">
          </div>
            <p>Polypectomy Snares (different shapes)</p>
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
          <div class="content pb-3">
            {{modalData.content2}}
          </div>
          <div class="points">
            <p class="m-0" v-for="point in modalData.points" :key="point">
              <img src="../../assets/images/Ellipse active.svg" alt="point">
                {{ point }}
            </p>
          </div>
          <p v-if="modalData.points2"><strong>Different types of instruments, includes:</strong></p>
          <div v-if="modalData.points2" class="points points2">
            <p class="m-0" v-for="point in modalData.points2" :key="point">
              <img src="../../assets/images/Ellipse active.svg" alt="point">
                {{ point }}
            </p>
          </div>
    </b-modal>
  </div>
</template>
<script>
import icon1 from '../../assets/images/product-16.png'
import icon2 from '../../assets/images/product-17.png'

export default {
    data() {
        return {
          product1: {
            title: 'Mucosectomy Snares',
            icon: icon1,
            header: 'Mucosectomy Snares',
            content2: 'Polypectomy snare - especially developed for mucosectomy for removing large areas of mucosa, completely rotatable. The snare wire enables tissue to be cut and coagulated with HF current.',
            points: [
              'Multifil',
              'Oval shape',
              'Soft and elastic snare',
            ],
          },
          product2: {
            title: 'Polypectomy Snares (Different Shapes)',
            icon: icon2,
            header: 'Polypectomy Snares (Different Shapes)',
            content2: 'Oval, hexagonal and asymmetrical snare shapes in different snare widths with monofilament or multifilament wires characterize the polypectomy snare portfolio of ENDO-FLEX. They enable the removal of smaller and larger lesions even in difficult positions. ENDO-FLEX polypectomy snares can be rotated through 360 °. The scaling on the handle makes it easier for exact positioning. The working lengths and tube diameters are designed for all common duodeno and gastroenteroscopes. The instruments are intended for single use.',
            points: [
              'Tube diameter from 1.8 to 2.35 mm',
              'Stainless steel loop in oval, asymmetrical and hexagonal shape',
              'Multi-filament and monofilament wires',
              'Opening widths: (15, 20, 25 and 35 mm)',
              'Finger slide on the handle with HF connection',
              'Working lengths between 180 and 280 cm'
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
