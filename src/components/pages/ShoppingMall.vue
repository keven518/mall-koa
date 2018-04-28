<!--  -->
<template>
<div>
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
  <!--swiper area-->
  <div class="swiper-area">
      <van-swipe :autoplay='swiperAutoplay'>
          <van-swipe-item v-for="(banner, i) in bannerPicArray" :key="i">
              <img :src="banner.imageUrl" width="100%" />
          </van-swipe-item>
      </van-swipe>
  </div>
</div>
  
</template>

<script>
import axios from 'axios'
export default {
  props: [],

  data() {
    return {
      msg: "Hello",
      locationIcon: require("../../assets/images/location.png"),
      bannerPicArray: [
        {
          imageUrl:
            "http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg"
        },
        {
          imageUrl:
            "http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg"
        },
        {
          imageUrl:
            "http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg"
        }
      ],
      swiperAutoplay: 2000,
    };
  },

  created() {
    axios({
      url: 'https://www.easy-mock.com/mock/5ae3e0e35d7eee05a132b94e/MallKoa/index',
      method: 'get'
    })
    .then(res => {
      console.log('res: ', res)
    })
    .catch(err => {
      console.log('err: ', err)
    })
  },

  mounted() {},

  watch: {},

  computed: {},

  methods: {},

  components: {}
};
</script>
<style lang="scss" scoped>
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
  overflow: hidden;
  .location-icon {
    padding: 0.2rem 0 0 0.3rem;
  }
  .search-input {
    width: 100%;
    height: 1.3rem;
    border: 0 0 1px 0;
    border-bottom: 1px solid #fff;
    background-color: #e5017d;
    color: #fff;
  }
}
.swiper-area{
    clear: both;
    max-height: 15rem;
    overflow: hidden;
}
</style>