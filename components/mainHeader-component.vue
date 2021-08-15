<template>
    <div class="mainHeader-component">
      <div class="container">
        <p>{{mainHeaderData.nameOfPage}}</p>
        <h2>{{mainHeaderData.descreption}} <span>{{mainHeaderData.descreption2}}</span></h2>
      </div>
    </div>
</template>

<script>
export default {
  props:['mainHeaderData'],
    data() {
        return {
        };
    }
}
</script>
