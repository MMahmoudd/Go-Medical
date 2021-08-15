<template>
    <div class="corprateHeader-component">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="prymary-header p-0"> <img src="../../../static/images/travel icon 2.svg" alt="corprate"> OUTBOUND TRAVEL</h2>
            <p>
              Rely on us to plan a special surprise for your loved ones, seek out off the beaten track locations, find a tropical paradise, a rainforest retreat, or whisk you away for a romantic weekend.<br /><br />

              Experience the world with our international trips programs.<br />
              We offer a wide range of suggestions, choices and selections at all world destinations.<br /><br />

              Our long-standing relationship with hotels and airlines enable us to arrange international trips with the lowest possible rates, and special holiday offers.
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
import sliderImages1 from '../../../static/images/Outbound/1.jpg'
import sliderImages2 from '../../../static/images/Outbound/2.jpg'
import sliderImages3 from '../../../static/images/Outbound/1.jpg'
import sliderImages4 from '../../../static/images/Outbound/3.jpg'

export default {
  components: {
    mainSliderComponent,
    },
    data() {
        return {
          sliderImages: {sliderImages1, sliderImages2, sliderImages3, sliderImages4}
        };
    }
}
</script>


