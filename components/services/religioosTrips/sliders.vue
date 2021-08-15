<template>
    <div class="inboundSliders-component">
      <div class="container">
        <div class="row">
            <div class="col-md-6">
              <h2 class="prymary-header p-0">HAJ & UMRAH</h2>
              <mainSliderComponent :sliderImages="sliderImages.HAJImages"/>
            </div>
            <div class="col-md-6">
              <h2 class="prymary-header p-0">CHRISTIAN HAJ</h2>
              <mainSliderComponent :sliderImages="sliderImages.CHRISTIANImages"/>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import mainSliderComponent from '../mainSlider-component.vue'

import sliderImages1 from '../../../static/images/RELIGIOUS/1.jpg'
import sliderImages2 from '../../../static/images/RELIGIOUS/2.jpg'
import sliderImages3 from '../../../static/images/RELIGIOUS/1.jpg'
import sliderImages4 from '../../../static/images/RELIGIOUS/3.jpg'

import sliderImages5 from '../../../static/images/RELIGIOUS/1.png'
import sliderImages6 from '../../../static/images/RELIGIOUS/4.jpg'
import sliderImages7 from '../../../static/images/RELIGIOUS/5.jpg'
import sliderImages8 from '../../../static/images/RELIGIOUS/6.jpg'

export default {
  components: {
    mainSliderComponent,
    },
    data() {
        return {
          sliderImages: {
            HAJImages: {sliderImages1, sliderImages2, sliderImages3, sliderImages4},
            CHRISTIANImages: {sliderImages5, sliderImages6, sliderImages7, sliderImages8}
          },
        };
    }
}
</script>


