<template>
  <div class="home">
    <div class="headers">
      <img src="../../img/头部.png">
    </div>
    <div class="left">
      <left></left>
    </div>
    <!-- <Usertotal></Usertotal> -->
  </div>
</template>

<script>
import Usertotal from '../components/Usertotal.vue'
import left from '../components/left.vue'
export default {
  data () {
    return {}
  },
  components: {
    // Usertotal,
    left
  },
  methods: {},
  created () { },
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;

  .left {
    width: 350px;
  }
}

.headers {
  height: 65px;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>