<template>
    <div class="corprateHeader-component">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="prymary-header p-0"> <img src="../../../static/images/travel icon 1.svg" alt="corprate"> Corporate Travel</h2>
            <p>
              We Fly Plus Travel offers a highly experienced team of corporate travel consultants, handling all business travel needs from scheduled and private air travel and hotel reservations through to car and chauffeur hire and rail reservations.<br /><br />

              We are currently handling travel requirements for top companies and organizations in Egypt, UAE, and abroad.<br /><br />

              These range from small to large sized companies covering all industries. Without exception, we are providing an efficient, cost saving, cost effective, knowledgeable, confidential and personal service.<br />
              The Corporate Travel Team all thoroughly, enjoys looking after our clients’ diverse requirements, and they understand what a personal service really means.
            </p>
          </div>
          <div class="col-md-6">
            <mainSliderComponent :sliderImages='sliderImages'/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import mainSliderComponent from '../mainSlider-component.vue'
import sliderImages1 from '../../../static/images/Corperate/1.jpg'
import sliderImages2 from '../../../static/images/Corperate/2.jpg'
import sliderImages3 from '../../../static/images/Corperate/3.jpg'
import sliderImages4 from '../../../static/images/Corperate/5.png'

export default {
  components: {
    mainSliderComponent,
    },
    data() {
        return {
          mainHeaderData: {
            nameOfPage: 'solutions',
            descreption: 'Services',
            descreption2: 'We Provide'
          },
          sliderImages: {sliderImages1, sliderImages2, sliderImages3, sliderImages4}
        };
    }
}
</script>


