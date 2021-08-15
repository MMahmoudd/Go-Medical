<template>
    <div class="about-component aboutDesc-component">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="prymary-header header2">WHAT MAKES <span>US UNIQUE</span></h2>
            <p>
              We Fly Plus Travel & Tourism is a leading travel management organization, an acknowledged expert in the delivery of all travel arrangements for inbound, outbound, corporate travel solutions, events, transportation, medical tourism & religious tourism (Islamic Haj & Umrah and Christian Pilgrimage).
              <br /><br />

              Our specialist expertise have unrivalled knowledge in business travel service and client care. We are developing a reputation for building and implementing meaningful and relevant solutions to deliver successful events.<br /><br />

              By strategic thinking we are able to deliver solutions that focus on the both service and savings. We provide a consultancy service to help our valued customers organize their entire trip. Our consulting services involve a wide range of activities; starting from helping our clients chose the adequate destination, exploring the assigned budget in the best possible way, developing marketing ideas & delivering success.
            </p>
            <b>“By going the extra mile, we make it easier for travelers and decision makers alike”</b>
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
import sliderImages1 from '../../assets/images/Images for all/5.jpg'
import sliderImages2 from '../../assets/images/Images for all/6.jpg'
import sliderImages3 from '../../assets/images/Images for all/7.jpg'
import sliderImages4 from '../../assets/images/Images for all/8.jpg'
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
