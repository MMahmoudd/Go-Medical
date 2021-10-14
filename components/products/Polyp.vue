<template>
  <div class="mainProducts-component mainCardProduct-component">
    <div class="container">
      <h2>Polyp & Foreign Body Retrieval</h2>
      <p class="pragraph">For the removal of foreign bodies as part of a minimally invasive endoscopic procedure, ENDO-FLEX offers numerous product solutions in various designs: from classic Foreign Body Retrievers to special solutions that are able to convince with their easy handling. Even small polyps can be collected safely and easily with Polyp Traps. ENDO-FLEX offers disposable Polyp Traps for clean and hygienic removal - without time-consuming reprocessing and without high costs.</p>
      <div class="row">
        <div class="col-md-4">
          <div class="product-item " @click="showModal(product1)">
          <div class="product-img">
            <img src="../../assets/images/product-13.png" alt="">
          </div>
            <p>Foreign Body Protection Cap</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product2)">
          <div class="product-img">
            <img src="../../assets/images/product-14.png" alt="">
          </div>
            <p>Foreign Body Retrieval Net</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item" @click="showModal(product3)">
          <div class="product-img">
            <img src="../../assets/images/product-15.png" alt="">
          </div>
            <p>Foreign Body Retriever forceps variants</p>
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
import icon1 from '../../assets/images/product-13.png'
import icon2 from '../../assets/images/product-14.png'
import icon3 from '../../assets/images/product-15.png'

export default {
    data() {
        return {
          product1: {
            title: 'Foreign Body Protection Cap',
            icon: icon1,
            header: 'Foreign Body Protection Cap',
            points: [
              'Foreign Body Protection Caps to protect the surrounding tissue during the recovery of swallowed foreign bodies from the digestive tract of the human body.',
              'highly flexible material',
              'for mounting on all flexible gastroscopes',
            ],
          },
          product2: {
            title: 'Foreign Body Retrieval Net',
            icon: icon2,
            header: 'Foreign Body Retrieval Net',
            content2: 'The ENDO-FLEX retrieval net for endoscopic removal of foreign bodies, stones, food boluses and severed tissues such as polyps.',
            points: [
              'Different lengths and diameters',
              'Nylon net to increase tear resistance',
              'Rotatable',
            ],
          },
          product3: {
            title: 'Foreign Body Retriever Forceps Variants',
            icon: icon3,
            header: 'Foreign Body Retriever Forceps Variants',
            content2: 'The foreign body forceps and retrievers were specifically developed for the removal of small foreign bodies, severed polyps and tissues of various kinds, for use in gastroenterology and bronchoscopy. A large selection of different types of instruments with a variety of retriever shapes enables the user to find the right tool for removing foreign objects of different structures and consistencies.',
            points: [
              'Strong and wide-opening retrievers',
              'Great variety of applications',
              'Foreign body forceps with coated metal spiral',
            ],
            points2: [
              'Rat-tooth',
              'Alligator jaw',
              'Crocodile jaw',
              '3 & 4 Prong-Grasper, Sharp Hooks',
              '3 & 4 Prong-Grasper, Blunt Eyelets',
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
