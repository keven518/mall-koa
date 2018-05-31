<!--  -->
<template>
  <div>
      <swiper>
          <swiper-slide class="swiper-slider" v-for="(item, i) in slide" :key="i">
              Slide {{item}}
          </swiper-slide>
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
        slide: [1, 2, 3, 4, 5, 6]
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
    padding-top: 3rem;
    border-bottom: 1px solid #ccc;
}
</style>