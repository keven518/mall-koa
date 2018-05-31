<!--  -->
<template>
  <div>
    <div class="floor">
      <div class="floor-title">{{floorTitle}}</div>
      <div class="floor-anomaly">
        <div class="floor-one">
          <img :src="floorData0.image" alt="" width="100%" />
        </div>
        <div>
          <div class="floor-two">
          <img :src="floorData1.image" alt="" width="100%">
          </div>
          <div>
          <img :src="floorData2.image" alt="" width="100%">
          </div>
        </div>
      </div>
      <div class="floor-rule">
        <div v-for="(item, i) in floorData.slice(3)" :key="i">
          <img :src="item.image" width="100%" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["floorData", "floorTitle"],

  data() {
    return {
      floorData0: {},
      floorData1: {},
      floorData2: {}
    };
  },

  created() {},

  mounted() {},

  watch: {
    floorData(val) {
      console.log("this.floorData: ", this.floorData);
      this.floorData0 = this.floorData[0];
      console.log("this.floorData0: ", this.floorData0);
      this.floorData1 = this.floorData[1];
      console.log("this.floorData1: ", this.floorData1);
      this.floorData2 = this.floorData[2];
      console.log("this.floorData2: ", this.floorData2);
    }
  },

  computed: {},

  methods: {},

  components: {}
};
</script>
<style lang='scss' scoped>
.floor {
  .floor-title{
    text-align: center;
    font-size: 14px;
    height: 1.8rem;
    line-height: 1.8rem;
  }
  .floor-anomaly {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    div {
      flex: 1;
      box-sizing: border-box;
    }
    .floor-one {
      border-right: 1px solid #ddd;
    }
    .floor-two {
      border-bottom: 1px solid #ddd;
    }
  }
  .floor-rule {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fff;
    div {
      box-sizing: border-box;
      width: 10rem;
      border-bottom: 1px solid #ddd;
    }
    div:nth-child(odd) {
      border-right: 1px solid #ddd;
    }
  }
}
</style>