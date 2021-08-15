<template>
    <div class="inboundSliders-component">
      <div class="container">
        <div class="row">
            <div class="col-md-6">
              <h2 class="prymary-header p-0">Egypt</h2>
              <mainSliderComponent :sliderImages="sliderImages.egyptImages"/>
            </div>
            <div class="col-md-6">
              <h2 class="prymary-header p-0">Dubai</h2>
              <mainSliderComponent :sliderImages="sliderImages.dubaiImages"/>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import mainSliderComponent from '../mainSlider-component.vue'

import sliderImages1 from '../../../assets/images/Inbound/1.jpg'
import sliderImages2 from '../../../assets/images/Inbound/2.jpg'
import sliderImages3 from '../../../assets/images/Inbound/3.jpg'
import sliderImages4 from '../../../assets/images/Inbound/4.jpg'

import sliderImages5 from '../../../assets/images/Inbound/8.png'
import sliderImages6 from '../../../assets/images/Inbound/9.png'
import sliderImages7 from '../../../assets/images/Inbound/10.png'
import sliderImages8 from '../../../assets/images/Inbound/11.png'

export default {
  components: {
    mainSliderComponent,
    },
    data() {
        return {
          sliderImages: {
            egyptImages: {sliderImages1, sliderImages2, sliderImages3, sliderImages4},
            dubaiImages: {sliderImages5, sliderImages6, sliderImages7, sliderImages8}
            },
        };
    }
}
</script>


