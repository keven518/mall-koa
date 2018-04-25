<!--  -->
<template>
  <div>
      <van-row>
          <van-col span='8'>span:8</van-col>
          <van-col span='8'>span:8</van-col>
          <van-col span='8'>span:8</van-col>
      </van-row>
  </div>
</template>

<script>
export default {
  props: [],

  data () {
    return {
        msg: 'Hello'
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
    .test-row{
        text-align: center;
    }
</style>