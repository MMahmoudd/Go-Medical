<template>
    <div class="globalHeader-component">
      <div class="content">
        <h1>{{globalHeaderData.header}}</h1>
        <p class="links">
          <nuxt-link to="/">Home </nuxt-link>
          >
          <span> {{globalHeaderData.pageName}}</span>
        </p>
        <hr>
      </div>
    </div>
</template>

<script>
export default {
  props:['globalHeaderData'],
    data() {
        return {
        };
    }
}
</script>
