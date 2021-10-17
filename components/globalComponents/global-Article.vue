<template>
    <div class="globalArticle-component">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="headTitle" v-if="globalArticleData.header || globalArticleData.header2">{{globalArticleData.header || globalArticleData.header2}}</h2>
            <div class="prymary-vertical"></div>
            <div class="pargraph">
            <p v-if="globalArticleData.description || globalArticleData.description5">{{globalArticleData.description || globalArticleData.description5}}</p>
            <p v-if="globalArticleData.description2 || globalArticleData.description6">{{globalArticleData.description2 || globalArticleData.description6}}</p>
            <p v-if="globalArticleData.description3 || globalArticleData.description7">{{globalArticleData.description3 || globalArticleData.description7}}</p>
            <p v-if="globalArticleData.description4 || globalArticleData.description8">{{globalArticleData.description4 || globalArticleData.description8}}</p>
            <p v-if="globalArticleData.description9">{{globalArticleData.description9}}</p>
            <b-button :to="globalArticleData.btnURL" class="whiteBlue-btn" v-if="globalArticleData.btn">
              {{globalArticleData.btn}} <i class="fas fa-arrow-right ml-2"></i>
            </b-button>
            </div>
          </div>
          <div class="col-md-6">
            <img v-if="globalArticleData.img || globalArticleData.img2" :src="globalArticleData.img || globalArticleData.img2" alt="image content">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props:['globalArticleData'],
    data() {
        return {
        };
    }
}
</script>
