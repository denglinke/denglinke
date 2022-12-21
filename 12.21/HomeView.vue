<template>
  <div class="home">
    <div id="box"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import ret from '../../地图/data/中华人民共和国.json'
export default {
  name: "",
  data () {
    return {
      ret
    }
  },
  methods: {},
  mounted () {
    var myEcharts = echarts.init(document.querySelector('#box'));
    echarts.registerMap('chinaMap', this.ret)
    var option = {
      geo: {
        type: 'map',
        map: "chinaMap",
        roma: true,
        label: {
          show: true
        },
        zoom: 1.2
      }
    }
    myEcharts.setOption(option)
  },
  created () { },
}
</script>

<style lang="scss" scoped>
#box {
  margin: 0 auto;
  width: 1000px;
  height: 700px;
  border: 1px solid #ccc;
}
</style>