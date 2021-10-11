<template>
  <div class="tables-component">
    <div class="container">
      <h4>{{tableData.tableName}}</h4>
      <p v-if="tableData.p1" class="d-flex">
        <img src="../../../assets/images/Ellipse active.svg" alt="point">
        <span>{{tableData.p1}}</span>
      </p>
      <p v-if="tableData.p2" class="d-flex">
        <img src="../../../assets/images/Ellipse active.svg" alt="point">
        <span>{{tableData.p2}}</span>
      </p>
      <p v-if="tableData.p3" class="d-flex">
        <img src="../../../assets/images/Ellipse active.svg" alt="point">
        <span>{{tableData.p3}}</span>
      </p>
      <div class="table">
        <table>
          <tr :class="tableData.backgroundColor">
            <th :class="tableData.color">Markers</th>
            <th :class="tableData.color">Indications</th>
            <th :class="tableData.color">Technology</th>
            <th :class="tableData.color">Assay time</th>
          </tr>
          <template>
            <tr v-for="(items, i) of tableData.tableData" :key="i">
              <td v-for="(Markers, i) of items" :key="i">
                <p v-for="(Marker, index) of Markers" :key="index">{{Marker}}</p>
              </td>
            </tr>
          </template>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['tableData'],
    data() {
        return {
        };
    }
}
</script>
