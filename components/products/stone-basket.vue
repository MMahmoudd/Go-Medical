<template>
  <div class="mainProducts-component mainCardProduct-component">
    <div class="container">
      <h2>Stone Extraction Basket</h2>
      <p class="pragraph">ENDO-FLEX stone extraction baskets for easy and safe recovery of foreign bodies from the bile duct. Ergonomic instrument handle design with monofilament or braided wire. Cups made of stainless steel or Nitinol, each with an atraumatic tip. The 45 ° injection opening ensures a user-friendly and easy injection of contrast medium. Partly guide wire compatible (.035 ”).</p>
      <div class="row">
        <div class="col-md-4">
          <div class="product-item " @click="showModal(product1)">
          <div class="product-img">
            <img src="../../assets/images/product-23.png" alt="">
          </div>
            <p>Memory" Stone Extraction Basket</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product2)">
          <div class="product-img">
            <img src="../../assets/images/product-26.png" alt="">
          </div>
            <p>Stone Extraction Basket - Stainless Steel</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product3)">
          <div class="product-img">
            <img src="../../assets/images/product-27.png" alt="">
          </div>
            <p>Mechanical Lithotripsy</p>
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
    </b-modal>
  </div>
</template>
<script>
import icon1 from '../../assets/images/product-23.png'
import icon2 from '../../assets/images/product-26.png'
import icon3 from '../../assets/images/product-27.png'

export default {
    data() {
        return {
          product1: {
            title: '"Memory" Stone Extraction Basket - Nitinol',
            icon: icon1,
            header: '"Memory" Stone Extraction Basket - Nitinol',
            content1: 'ENDO-FLEX stone extraction baskets for easy and safe recovery of foreign bodies from the bile duct. Ergonomic instrument handle design with monofilament or braided wire. Cups made of stainless steel or Nitinol, each with an atraumatic tip. The 45 ° injection opening ensures a user-friendly and easy injection of contrast medium. Partly guide wire compatible (.035 ”).',
            points: [
              'Diamond-shaped (Basket-type)',
              'Different basket sizes',
              'Monofilament basket wire made of nitinol',
              '4-way basket construction'
            ],
          },
          product2: {
            title: 'Stone Extraction Basket - Stainless Steel',
            icon: icon2,
            header: 'Stone Extraction Basket - Stainless Steel',
            content1: 'ENDO-FLEX stone extraction baskets for easy and safe recovery of foreign bodies from the bile duct. Ergonomic instrument handle design with monofilament or braided wire. Cups made of stainless steel or Nitinol, each with an atraumatic tip. The 45 ° injection opening ensures a user-friendly and easy injection of contrast medium. Partly guide wire compatible (.035 ”).',
            points: [
              'Twisted (Dormia type) and diamond (Basket type) shapes',
              'Different basket sizes',
              'Versions suitable for guidewire',
              'Optional multifilament and monofilament basket wire',
              'Available basket constructions in 4 and 6 fold'
            ],
          },
          product3: {
            title: 'Mechanical Lithotripsy',
            icon: icon3,
            header: 'Mechanical Lithotripsy',
            content1: 'One system, many possible combinations. Choose the right lithotripsy basket for every situation and simply combine it with the ENDO-FLEX metal spiral and the lithotriptor handle.',
            points: [
              '4 wire baskets, lozenged and twisted',
              '6-wire basket lozenged and twisted',
              'Guide wire-compatible basket variants',
              'Stainless steel spirals for standard and emergency lithotripsy',
              'Pre-assembled set configurations'
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
