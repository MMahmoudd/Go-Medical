<template>
    <div class="slider-component category-component">
        <!-- Swiper -->
        <div class="container">
        <p>The Best Medical And General Practice Care!</p>
        <h2 class="headTitle">Products categories</h2>
        <div class="swiper-container">
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">

                <div class="swiper-slide">
                    <b-card
                      title="Gastroscopy, Colonoscopy and Enteroscopy accessories"
                      img-src="../../assets/images/category icon.svg"
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mb-2"
                    >
                      <!--<b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>-->

                      <b-button to="/product/gastroscopy">Read More <i class="fas fa-arrow-right ml-2"></i></b-button>
                    </b-card>
                </div>
                <div class="swiper-slide">
                    <b-card
                      title="ERCP Accessories"
                      img-src="../../assets/images/category icon.svg"
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mb-2"
                    >
                      <!--<b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>-->

                      <b-button to="/product/gastroscopy">Read More <i class="fas fa-arrow-right ml-2"></i></b-button>
                    </b-card>
                </div>
                <div class="swiper-slide">
                    <b-card
                      title="EUS Accessories"
                      img-src="../../assets/images/category icon.svg"
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mb-2"
                    >

                      <b-button to="/product/gastroscopy">Read More <i class="fas fa-arrow-right ml-2"></i></b-button>
                    </b-card>
                </div>
                <div class="swiper-slide">
                    <b-card
                      title="Gastroscopy, Colonoscopy and Enteroscopy accessories"
                      img-src="../../assets/images/category icon.svg"
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mb-2"
                    >

                      <b-button to="/product/gastroscopy">Read More <i class="fas fa-arrow-right ml-2"></i></b-button>
                    </b-card>
                </div>
                <div class="swiper-slide">
                    <b-card
                      title="ERCP Accessories"
                      img-src="../../assets/images/category icon.svg"
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mb-2"
                    >

                      <b-button to="/product/gastroscopy">Read More <i class="fas fa-arrow-right ml-2"></i></b-button>
                    </b-card>
                </div>
                <div class="swiper-slide">
                    <b-card
                      title="EUS Accessories"
                      img-src="../../assets/images/category icon.svg"
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mb-2"
                    >

                      <b-button to="/product/gastroscopy">Read More <i class="fas fa-arrow-right ml-2"></i></b-button>
                    </b-card>
                </div>
            </div>
            <b-button to="/product/gastroscopy" class="mb-5 main-btn">Read More <i class="fas fa-arrow-right ml-2"></i></b-button>
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
              loop: false,
              slidesPerView: 3,
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
