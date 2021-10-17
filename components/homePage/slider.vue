<template>
    <div class="slider-component slider1-component">
        <!-- Swiper -->
        <div class="swiper-container">
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">

                <div class="swiper-slide">
                    <img src="../../assets/images/slider Image 1.png" alt="screen-1" />
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/slider Image 1.png" alt="screen-1" />
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/slider Image 1.png" alt="screen-1" />
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        </div>
        <div class="content">
        <div class="overlay">
          <p>Our first priority is customer satisfaction of our physicians, nursing staff and patients. We act customer-oriented and want to support our customers successfully and efficiently.</p>
          <b-button to="/aboutUs" class="whiteBlue-btn">More About Us<i class="fas fa-arrow-right ml-2"></i></b-button>
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
              loop: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
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
