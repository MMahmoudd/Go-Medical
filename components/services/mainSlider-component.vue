<template>
  <div class="slider-component">
    <div class="border"></div>
    <div class="swiper">
      <div class="swiper-container">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <img :src="sliderImages.sliderImages1 || sliderImages.sliderImages5" alt="screen-1" />
            </div>
            <div class="swiper-slide">
              <img :src="sliderImages.sliderImages2 || sliderImages.sliderImages6" alt="screen-2" />
            </div>
            <div class="swiper-slide">
              <img :src="sliderImages.sliderImages3 || sliderImages.sliderImages7" alt="screen-4" />
            </div>
            <div class="swiper-slide">
              <img :src="sliderImages.sliderImages4 || sliderImages.sliderImages8" alt="screen-4" />
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['sliderImages'],
    data() {
      return {
        swiperOption: {
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          autoplay: {
            delay: 5000,
          },
        }
      };
    }
  }

</script>
