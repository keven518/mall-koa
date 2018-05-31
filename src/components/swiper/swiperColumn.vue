<!--  -->
<template>
  <div>
      <swiper class="swiperColumn" :options="swiperOption">
          <swiper-slide class="swiper-slider" v-for="(item, i) in slide" :key="i">
              Slide {{item}}
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: [],

  data () {
    return {
        slide: [1, 2, 3, 4, 5, 6],
        swiperOption: {
            direction: 'vertical',      // 竖屏设置
            pagination: {
                el: '.swiper-pagination'
            }
        }
    };
  },

  created(){},

  mounted(){},

  watch: {},

  computed: {},

  methods: {},

  components: {swiper, swiperSlide}
}

</script>
<style lang='scss' scoped>
.swiper-slide{
    height: 4rem;
    text-align: center;
    line-height: 4rem;
}
.swiperColumn{
    height: 7rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
</style>