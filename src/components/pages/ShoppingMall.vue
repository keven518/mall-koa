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
            <div>￥{{item.price | moneyFilter}}(￥{{item.mallPrice | moneyFilter}})</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>

  <floor-component :floorData="floor1" :floorTitle="floorName.floor1"></floor-component>
  <floor-component :floorData="floor2" :floorTitle="floorName.floor2"></floor-component>
  <floor-component :floorData="floor3" :floorTitle="floorName.floor3"></floor-component>
 
  <!--Hot Area-->
  <div class="hot-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <!--这里需要一个list组件-->
        <van-list>
          <van-row getter="20">
            <van-col span="12" v-for="(item, i) in hotGoods" :key="i">
              <goods-info
                :goodsImage="item.image"
                :goodsName="item.name"
                :goodsPrice="item.price"
              ></goods-info>
            </van-col>
          </van-row>
        </van-list>
      </div>
  </div>
  

</div>
  
</template>

<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import floorComponent from "@/components/component/floorComponent";
import { toMoney } from '@/components/filter/moneyFilter.js'
import goodsInfo from "@/components/component/goodsInfoComponent";
import url from '@/serviceAPI.config.js'
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
      floorName: {},
      hotGoods: [], // 热卖商品
    };
  },
  filters: {
    moneyFilter(money) {
      return toMoney(money)
    }
  },
  created() {
    axios({
      url: url.getShopingMallInfo,
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
          this.hotGoods = res.data.data.hotGoods;
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
    floorComponent,
    goodsInfo
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
.hot-area{
  text-align: center;
  font-size:14px;
  height: 1.8rem;
  line-height:1.8rem;
}
</style>