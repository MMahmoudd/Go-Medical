<template>
  <div class="wrapper">
    <section class="header-section" id="header">
      <headerComponent :globalHeaderData="globalHeaderData" />
    </section>
    <section class="artical-section" id="artical">
      <artical-component :globalArticleData="globalArticleData"/>
    </section>
    <section class="artical2-section" id="artical2">
      <artical-component :globalArticleData="globalArticleData2"/>
    </section>
    <section class="ourVision-section" id="ourVision">
      <ourVision-component />
    </section>
  </div>
</template>

<script>
import headerComponent from '../components/globalComponents/global-header.vue'
import articalComponent from '../components/globalComponents/global-Article.vue'
import ourVisionComponent from '../components/aboutUs/ourVision.vue'
import articalImage from '../assets/images/artical-image.png'
import articalImage2 from '../assets/images/artical-image2.png'

export default {
  components: {
    headerComponent,
    articalComponent,
    ourVisionComponent
    },
    data() {
        return {
          globalHeaderData:{
            header: 'ABOUT US',
            pageName: 'About'
          },
          globalArticleData: {
            header: 'Who We Are?',
            description: 'Founded in 2020 but carrying more than 12 years of experience and gathering powerful KOLs who are specialized in the different medical fields, under the umbrella of the large GS group.',
            description2: 'Go medical is constantly expanding our portfolio in many fields as importing, distributing & marketing, manufacturing and health care providers.',
            description3: 'With a well known to most of the important medical institutes and hospitals allover Egypt and have great connections with the key opinion leaders in different fields of medicine.',
            description4: 'Having a strong bonds with so many countries in the MENA region and Africa, giving us the opportunities to expand widely.',
            btn: 'More About Us',
            img: articalImage,
          },
          globalArticleData2: {
            header2: 'What We do?',
            description5: 'Go medical  believes in diversity, so we established this company based on strong different modules:',
            description6: '1.   Manufacturing of medical and laboratory equipment and consumables.',
            description7: '2.  Importation and distribution of accredited and high quality medical devices and accessories.',
            description8: '3.  Provide excellent quality medical services, as the Health Tourism (LIFE program).',
            description9: 'Business Segments :B2G, B2B and B2C.',
            img2: articalImage2,
          }
        };
    }
}
</script>
