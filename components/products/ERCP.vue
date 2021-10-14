<template>
  <div class="mainProducts-component">
    <div class="container">
      <h2>ERCP Accessories</h2>
      <p>We are providing the full range of excellent innovative ERCP accessories that would make the ERCP procedure effective, rapid and easy</p>
      <div class="row">
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product1)">
          <div class="product-img">
              <img src="../../assets/images/product-18.png" alt="">
          </div>
            <p>Hydrophilic Guide Wire</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product2)">
          <div class="product-img">
              <img src="../../assets/images/product-19.png" alt="">
          </div>
            <p>ERCP – Catheters</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product3)">
          <div class="product-img">
            <img src="../../assets/images/product-20.png" alt="">
          </div>
            <p>Biliary Dilatation Catheter</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product4)">
          <div class="product-img">
            <img src="../../assets/images/product-21.png" alt="">
          </div>
            <p>Sphincterotomes</p>
          </div>
        </div>
        <div class="col-md-4">
            <div class="product-item" @click="showModal(product5)">
            <div class="product-img">
              <img src="../../assets/images/product-22.png" alt="">
            </div>
              <p>Stone Extraction Balloon</p>
            </div>
        </div>
        <div class="col-md-4">
          <nuxt-link to="/product/stone-basket">
            <div class="product-item">
            <div class="product-img">
              <img src="../../assets/images/product-23.png" alt="">
            </div>
              <p>Stone Extraction Basket</p>
            </div>
          </nuxt-link>
        </div>
        <div class="col-md-4">
          <nuxt-link to="/product/biliary-drainage-stents">
            <div class="product-item">
            <div class="product-img">
              <img src="../../assets/images/product-24.png" alt="">
            </div>
              <p>Biliary Drainage Stents</p>
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
          <p v-if="modalData.points2" class="m-0">
            <img src="../../assets/images/Ellipse active.svg" alt="point">
            <strong>The 3-stage balloon catheter:</strong>
          </p>
          <div v-if="modalData.points2" class="points">
            <p class="m-0" v-for="point in modalData.points2" :key="point">
              <img src="../../assets/images/Ellipse active.svg" alt="point">
                {{ point }}
            </p>
          </div>
    </b-modal>
  </div>
</template>
<script>
import icon1 from '../../assets/images/product-18.png'
import icon2 from '../../assets/images/product-25.png'
import icon3 from '../../assets/images/product-20.png'
import icon4 from '../../assets/images/product-21.png'
import icon5 from '../../assets/images/product-22.png'

export default {
    data() {
        return {
          product1: {
            title: 'Hydrophilic Guide Wire',
            icon: icon1,
            header: 'Hydrophilic Guide Wire',
            content1: 'ENDO-FLEX Guide Wires to introduce stabilize and position instruments for flexible endoscopy. Variants made of Nitinol, coated versions with straight or curved tips are available, and are flexible to adapt to different anatomical structures.',
            points: [
              'ENDO-FLEX guide wires are made of Nitinol and are equipped with a flexible to highly flexible plastic tip (straight or curved) and a colored plastic coating (violet-white and violet-yellow).',
              'Convenient sliding properties',
              'Hydrophilic coating',
              'Diameter .025" and .035"',
              'Available lengths: between 300 cm and 600 cm.',
            ],
          },
          product2: {
            title: 'ERCP – Catheters',
            icon: icon2,
            header: 'ERCP – Catheters',
            content1: 'With the help of X-ray contrast media, an ERCP enables the biliary and pancreatic derivations to be displayed and examined - without the need for open surgery. To optimally support this procedure, the portfolio includes numerous catheter lengths and variants.',
            points: [
              'The ENDO-FLEX portfolio includes numerous ERCP catheter lengths and variants.',
              'Colored ring markings',
              'Different tip shapes',
              'Can be used with guide wire (partly with equipped stylet)',
            ],
          },
          product3: {
            title: 'Biliary Dilatation Catheter',
            icon: icon3,
            header: 'Biliary Dilatation Catheter',
            content1: 'For dilation, the physiological or therapeutic expansion of constrictions within the entire digestive tract, ENDO-FLEX offers solution concepts (e.g. bougie catheters) that can be used in Biliary tract.',
            points: [
              'Biliary dilation catheters for ERCP, with continuous distal tapering over a length of 30 mm, up to the atraumatic catheter tip. For better orientation during fluoroscopy, all versions consist of a metal ring at the beginning of the distal taper and are equipped with X-ray contrasting Teflon along the entire length. The dilation catheter can be guided to the stenosis via a guide wire and gives the option of contrast medium injection at the proximal Luer-Lock connector.',
              'Tip diameter: varies between 3.0 Fr. and 7.0 Fr.',
              'Catheter diameter: between 5.0 Fr. and 12.0 Fr.',
              'X-ray contrast tube',
              'Working length 200 cm',
              'Ascending tube and tip diameter fDistal metal ring (X-ray marking)',
              'Suitable for guide wire',
              'Proximal Luer lock connector for contrast medium injectionfor a frontal papillary cut',
              'Application B-II sphincterotomes'
            ],
          },
          product4: {
            title: 'Sphincterotomes',
            icon: icon4,
            header: 'Sphincterotomes',
            content1: 'An endoscopic sphincterotomy means splitting the papilla and the sphincter apparatus. The main area of application is the treatment of choledocholithiasis in the context of an ERCP as well as the treatment of biliary stenosis. ENDO-FLEX Sphincterotomes are available in numerous designs and variants (especially the rotatable version) - in order to be able to proceed quickly and easily even in anatomically difficult conditions.',
            points: [
              'ENDO-FLEX sphincterotomes are equipped with different tip shapes and ring markings on the tube for precise positioning. In addition to 1-lumen, also 2- and 3-lumen versions are available. Depending on the type of sphincterotome, it can be placed with a guide wire and/or contrast agent can be injected through a side opening. The ENDO-FLEX portfolio includes several variants for different forms of application, which are designed for use with high-frequency electricity.',
              'Different tip shapes and ring markings',
              'Single and multiple lumen variants',
              'Suitable for guide wire (most versions)',
              'Special sphincterotomes ( e.g. B-II and needle types)',
              'Variants with side cutting wire for precise cutting',
              'Types with semi-insulated cutting wire for safe and controlled papillary roof incision',
              'Needle and knife sphincterotomes'
            ],
          },
          product5: {
            title: 'Stone Extraction Balloon',
            icon: icon5,
            header: 'Stone Extraction Balloon',
            content1: 'To support stone extraction, the endoscopic removal of gallstones and concretions, ENDO-FLEX offers a comprehensive portfolio of Stone Extraction Balloons.',
            points: [
              'ENDO-FLEX stone extraction balloons have a distal plastic balloon framed with X-ray markings, a double or triple-lumen plastic tube and three proximal Luer-Lock connectors as access for contrast media, guide wire or 2-way stopcock for inflation',
            ],
            points2: [
              'Tube with a diameter of Fr. 7',
              'Total length from 200 to 250 cm',
              'Balloon diameters between 9 and 16 mm.',
              'Contains 3 syringes corresponding to the max filling volume'
            ]
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
