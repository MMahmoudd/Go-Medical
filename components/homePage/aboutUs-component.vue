<template>
    <div class="about-component">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="section-num">
              01
            </div>
            <div class="prymary-vertical"></div>
            <h2 class="prymary-header">About <span> We Fly </span></h2>
            <p>
              We Fly Plus Travel & Tourism is a renowned travel management company. We have been serving people & spread roots through outlets across UAE & Egypt as IATA accredited agent since 2007.
              <br /><br />
              We embraced the name & fame with the entrusted support of our customers enhanced by the excellent efforts & enthusiastic energy executed by the staff.
              <br /><br />
              We Fly is part of GS Holding Group that has been established since 2007.
            </p>
            <b-button to="/about-us" class="prymary-btn">Read More</b-button>
          </div>
          <div class="col-md-6">
          <mainSliderComponent :sliderImages="sliderImages"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import mainSliderComponent from '../services/mainSlider-component.vue'
import sliderImages1 from '../../static/images/Images for all/1.jpg'
import sliderImages2 from '../../static/images/Images for all/2.jpg'
import sliderImages3 from '../../static/images/Images for all/3.jpg'
import sliderImages4 from '../../static/images/Images for all/4.jpg'
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
