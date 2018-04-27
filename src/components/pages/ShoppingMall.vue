<!--  -->
<template>
  <div class="search-bar">
      <van-row>
          <van-col span="3">
              <img :src="locationIcon" width="80%" class="location-icon" />
          </van-col>
          <van-col span="16">
              <input type="text" class="search-input">
          </van-col>
          <van-col span="5">
              <van-button size="mini">查找</van-button>
          </van-col>
      </van-row>
  </div>
</template>

<script>
export default {
  props: [],

  data () {
    return {
        msg: 'Hello',
        locationIcon: require('../../assets/logo.png')
    };
  },

  created(){},

  mounted(){},

  watch: {},

  computed: {},

  methods: {},

  components: {}
}

</script>
<style scoped>
    .search-bar{
        height: 2.2rem;
        background-color: #e5017d;
        line-height: 2.2rem;
    }
    .search-input{
        width: 100%;
        height: 1.3rem;
        border: 0 0 1px 0;
        border-bottom: 1px solid #fff;
        background-color: #e5017d;
        color: #fff;
    }
    .location-icon{
        padding: .2rem 0 0 .3rem;
    }
</style>