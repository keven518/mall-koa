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
            <img v-lazy="banner.image" width="100%" />
        </van-swipe-item>
    </van-swipe>
  </div>
  <!--type bar-->
  <div class="type-bar">
    <div v-for="(item, i) in category" :key="i">
      <img v-lazy="item.image" width="90%" src="" alt="">
      <span>{{item.mallCategoryName}}</span>
    </div>
  </div>
  <!--adbanner area-->
  <div>
    <img v-lazy="adBanner" width="100%">
  </div>
  <!--Recommend goods area-->
  <div class="recommend-area">
    <div class="recommend-title">
      商品推荐
    </div>
    <div class="recommend-body">
      <swiper :options='swiperOption'>
        <swiper-slide v-for="(item, i) in recommendGoods" :key='i'>
          <div class="recommend-item">
            <img :src="item.image" width="80%" alt="">
            <div>{{item.goodsName}}</div>
            <div>￥{{item.price}}(￥{{item.mallPrice}})</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>

  <floor-component :floorData="floor1" :floorTitle="floorName.floor1"></floor-component>
  <floor-component :floorData="floor2" :floorTitle="floorName.floor2"></floor-component>
  <floor-component :floorData="floor3" :floorTitle="floorName.floor3"></floor-component>

  

</div>
  
</template>

<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import floorComponent from "@/components/component/floorComponent";
export default {
  props: [],

  data() {
    return {
      swiperOption: {
        slidesPerView: 3 // swiper有几项
      },
      msg: "Hello",
      locationIcon: require("../../assets/images/location.png"),
      bannerPicArray: [],
      swiperAutoplay: 2000,
      category: [],
      adBanner: "",
      recommendGoods: [],
      floor1: [],
      floor2: [],
      floor3: [],
      floorName: {}
    };
  },

  created() {
    axios({
      url:
        "https://www.easy-mock.com/mock/5ae3e0e35d7eee05a132b94e/MallKoa/index",
      method: "get"
    })
      .then(res => {
        console.log("res: ", res);
        if (res.status == 200) {
          this.category = res.data.data.category;
          this.adBanner = res.data.data.advertesPicture.PICTURE_ADDRESS;
          this.bannerPicArray = res.data.data.slides;
          this.recommendGoods = res.data.data.recommend;
          this.floor1 = res.data.data.floor1;
          this.floor2 = res.data.data.floor2;
          this.floor3 = res.data.data.floor3;
          this.floorName = res.data.data.floorName;
        }
      })
      .catch(err => {
        console.log("err: ", err);
      });
  },

  mounted() {},

  watch: {},

  computed: {},

  methods: {},

  components: {
    swiper,
    swiperSlide,
    floorComponent
  }
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
.swiper-area {
  clear: both;
  max-height: 15rem;
  overflow: hidden;
}
.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  div {
    padding: 0.3rem;
    font-size: 12px;
    text-align: center;
  }
}
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
  .recommend-title {
    border-bottom: 1px solid #eee;
    font-size: 14px;
    padding: 0.2rem;
    color: #e5017d;
  }
  .recommend-body {
    border-bottom: 1px solid #eee;
    .recommend-item {
      width: 99%;
      border-right: 1px solid #eee;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>