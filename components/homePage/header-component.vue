<template>
    <div class="header-component">
        <!-- Swiper -->
        <div class="vertical-2"></div>
        <div class="swiper-container">
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">

                <div class="swiper-slide">
                    <img src="../../assets/images/Slider/slider.png" alt="screen-1" />
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/Slider/slider-1.png" alt="screen-2" />
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/Slider/slider-2.png" alt="screen-4" />
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/Slider/slider-3.png" alt="screen-4" />
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/Slider/slider-4.jpg" alt="screen-4" />
                </div>


            </div>
            <div class="swiper-pagination"></div>
        </div>
        </div>
        <div class="vertical"></div>
        <div class="content">
        <div class="overlay">
          <img src="../../assets/images/white logo.svg" alt="logo">
          <p>Helps you create your own wings</p>
          <b-button to="/contact-us" class="btn">Contact US</b-button>
          <div class="mouse" v-scroll-to="'#about'">
            <img src="../../assets/images/mouse.svg" alt="mouse">
          </div>
          </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
              loop: true,
              direction: "vertical",
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              autoplay: {
                delay: 5000,
              },
            }
        };
    }
}
</script>
