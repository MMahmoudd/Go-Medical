<template>
  <div class="wrapper">
    <section class="slider-section" id="header">
      <slider-component />
    </section>
    <section class="artical-section" id="artical">
      <artical-component :globalArticleData="globalArticleData"/>
    </section>
    <section class="category-section" id="category">
      <categories-component/>
    </section>
    <section class="service-section" id="service">
      <service-component/>
    </section>
    <section class="manufacturing-section" id="manufacturing">
      <manufacturingComponent/>
    </section>
  </div>
</template>

<script>
import sliderComponent from '../components/homePage/slider.vue'
import articalComponent from '../components/globalComponents/global-Article.vue'
import categoriesComponent from '../components/homePage/categories.vue'
import serviceComponent from '../components/homePage/ServiceComponent.vue'
import manufacturingComponent from '../components/homePage/manufacturing.vue'
import articalImage from '../assets/images/artical-image.png'

export default {
  components: {
    sliderComponent,
    articalComponent,
    categoriesComponent,
    serviceComponent,
    manufacturingComponent
    },
    data() {
        return {
          globalArticleData: {
            header: 'Who We Are?',
            description: 'Founded in 2020 but carrying more than 12 years of experience and gathering powerful KOLs who are specialized in the different medical fields, under the umbrella of the large GS group.',
            description2: 'Go medical is constantly expanding our portfolio in many fields as importing, distributing & marketing, manufacturing and health care providers.',
            description3: 'With a well known to most of the important medical institutes and hospitals allover Egypt and have great connections with the key opinion leaders in different fields of medicine.',
            description4: 'Having a strong bonds with so many countries in the MENA region and Africa, giving us the opportunities to expand widely.',
            btn: 'More About Us',
            btnURL: '/aboutUs',
            img: articalImage,
          }
        };
    }
}
</script>
