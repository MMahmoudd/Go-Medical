<template>
    <div class="corprateHeader-component">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="prymary-header p-0"> <img src="../../../assets/images/travel icon 6.svg" alt="corprate"> WELLNIES TOURISM</h2>
            <p>
               We expect the launch of several programs for the fall & winter of 2021-2020.  <br /><br />

              Some examples: physical fitness and sports, beauty treatments, healthy diet and weight management, relaxation and stress relief
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
  import sliderImages1 from '../../../assets/images/slider image 11.png'
  import sliderImages2 from '../../../assets/images/Images for all/2.jpg'
  import sliderImages3 from '../../../assets/images/slider image 11.png'
  import sliderImages4 from '../../../assets/images/Images for all/9.jpg'
export default {
  components: {
    mainSliderComponent,
    },
    data() {
        return {
          sliderImages: {sliderImages1, sliderImages2, sliderImages3, sliderImages4},
        };
    }
}
</script>


