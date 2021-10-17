<template>
  <div class="mainProducts-component">
    <div class="container">
      <h2>Hemostasis Systems</h2>
      <p class="pragraph">
        ENDO-FLEX offers various approaches to local hemostasis and to the tying-up of proliferations in the context of gastroenterological examinations and procedures: from Fibrin and Injection Needles to Clip Systems and Multiband-Ligators.
      </p>
      <div class="row">
        <div class="col-md-4">
          <div class="product-item " @click="showModal(product1)">
          <div class="product-img">
            <img src="../../assets/images/product-38.png" alt="">
          </div>
            <p>Injection Needles</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="product-item " @click="showModal(product2)">
          <div class="product-img">
            <img src="../../assets/images/product-39.png" alt="">
          </div>
            <p>Clip System</p>
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
          <div v-if="modalData.content1" class="content pb-3">
            {{modalData.content1}}
          </div>
          <p><strong>Description</strong></p>
          <div class="points">
            <p class="mb-2" v-for="point in modalData.points" :key="point">
              <img src="../../assets/images/Ellipse active.svg" alt="point">
                {{ point }}
            </p>
          </div>
    </b-modal>
  </div>
</template>
<script>
import icon1 from '../../assets/images/product-38.png'
import icon2 from '../../assets/images/product-39.png'

export default {
    data() {
        return {
          product1: {
            title: 'Injection Needles (PRO Series)',
            icon: icon1,
            header: 'Injection Needles (PRO Series)',
            content1: 'ENDO-FLEX injection needles provide a safety clip to enable safe placement even in angled positions. Transparent needle tubes enable control of the fluids introduced, while a special locking mechanism ensures a controlled puncture in the target tissue.',
            points: [
              'Distal stainless steel needle, plastic tube',
              'Conical distal metal head',
              'Different needle lengths, diameters and working lengths',
              'Various tube diameters for working channels from 2.0 mm',
              'Handle with locking mechanism to secure the needle',
              'Needle Diameter: 19-25 Gauge',
              'Needle Length: 4-6 mm',
              'Working Length: 160-230 mm'
            ],
          },
          product2: {
            title: 'Clip System',
            icon: icon2,
            header: 'Clip System',
            content1: 'ENDO-FLEX clip system enables safe application of hemostasis clips, for marking and closing of tissue and vascular lesions of the mucosa and submucosa and for hemostasis. The clips are pre-loaded and can be opened and closed several times for repositioning. A simple firing mechanism facilitates the precise placement of the clip. The optimized shaft and clip length enables safe application for a firm tissue seal. Several clip lengths are available for use in a variety of clinical situations. The rotation function ensures a precise positioning of the clip, even in complicated positions.',
            points: [
              'Clip device can be opened and closed more than ten times for correct placement',
              'Instant readiness in the event of emergency bleeding',
              'Rotatable - for easy orientation and positioning',
              'Clip opening from 9 to 16 mm, opening width 135°',
              'One-hand operation facilitates effective and efficient repositioning of clips',
              'Clip opening: 9-16 mm',
              'Clip length: 12.7-13.7 mm',
              'Working Length: 165-230 mm'
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
