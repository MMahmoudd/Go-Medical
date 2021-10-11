<template>
    <div class="manufacturing-component">
        <!-- Swiper -->
        <div class="container">
        <div class="swiper-container">
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">

                <div class="swiper-slide">
                <h1 class="number">01</h1>
                    <div class="content">
                      <div class="row">
                        <div class="col-md-5">
                          <h1>
                            <i class="fas fa-quote-left"></i>
                          </h1>
                          <p><strong>Go medical</strong> believes in diversity, so we established this company based on strong different modules:</p>
                        </div>
                        <div class="col-md-5">
                          <p class="h2">Manufacturing</p>
                          <p>of medical and laboratory equipment and consumables.</p>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="swiper-slide">
                <h1 class="number">02</h1>
                  <div class="content">
                      <div class="row">
                        <div class="col-md-5">
                          <h1>
                            <i class="fas fa-quote-left"></i>
                          </h1>
                          <p><strong>Go medical</strong> believes in diversity, so we established this company based on strong different modules:</p>
                        </div>
                        <div class="col-md-5">
                          <p class="h2">Manufacturing</p>
                          <p>of medical and laboratory equipment and consumables.</p>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <h1 class="number">03</h1>
                    <div class="content">
                      <div class="row">
                        <div class="col-md-5">
                          <h1>
                            <i class="fas fa-quote-left"></i>
                          </h1>
                          <p><strong>Go medical</strong> believes in diversity, so we established this company based on strong different modules:</p>
                        </div>
                        <div class="col-md-5">
                          <p class="h2">Manufacturing</p>
                          <p>of medical and laboratory equipment and consumables.</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
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
              spaceBetween: 20,
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
