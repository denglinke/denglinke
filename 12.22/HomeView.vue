<template>
  <div class="home">
    <div class="header">
      <h1>大数据可视化系统数据</h1>
      <div class="TextRight">{{ times.timeText }}</div>
    </div>
    <div class="EchartsList">
      <div class="left">
        <div id="LeftTop"></div>
        <div id="LeftBottom"></div>
      </div>
      <div class="center">
        <div class="CenterTop">
          <div class="CenterTopLeft">
            <p class="title">业绩总览</p>
            <span class="h1money">30500</span>
            <span class="money">万</span>
          </div>
          <div class="CenterTopRight"></div>
        </div>
        <div class="CenterCenter">
          <div id="CenterCenters"></div>
        </div>
        <div class="CenterBottom">
          <div id="CenterBottoms"></div>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../untils/times";
import * as echarts from "echarts";
export default {
  data() {
    return {
      times: "",
    };
  },
  methods: {
    // 获取当前时间
    getTimes() {
      this.times = setInterval(() => {
        this.times = formatDate(new Date());
      }, 1000);
    },
    // 左上角图表
    LeftTop() {
      var chartDom = document.getElementById("LeftTop");
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        title: {
          text: "标题名称",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
          // borderLeft: "10px solid #45b5f0"
          top: "20",
          left: "20",
        },
        grid: {
          left: "50px",
          top: "50px",
          bottom: "5%",
          // containLabel: true
        },
        xAxis: {
          show: false,
          // type: 'value',
          // boundaryGap: [0, 0.01]
        },
        yAxis: [
          {
            type: "category",
            data: [
              "字段1",
              "字段2",
              "字段3",
              "字段4",
              "字段5",
              "字段6",
              "字段7",
              "字段8",
              "字段9",
            ],
            axisLine: {
              //不显示y轴线条
              show: false,
            },
            axisTick: {
              //不显示刻度
              show: false,
            },
            axisLabel: {
              //修改刻度标签里面的文字颜色设置为白色
              color: "#fff",
            },
          },
          {
            data: [
              "1514",
              "1619",
              "1623",
              "1968",
              "2158",
              "2456",
              "3506",
              "4664",
              "8390",
            ],
            axisLine: {
              //不显示y轴线条
              show: false,
            },
            axisTick: {
              //不显示刻度
              show: false,
            },
            axisLabel: {
              //修改刻度标签里面的文字颜色设置为白色
              color: "#fff",
            },
          },
        ],
        series: [
          {
            name: "条",
            type: "bar",
            data: [25, 30, 34, 40, 43, 48, 52, 56, 70],
            yAxisIndex: 0,
            itemStyle: {
              //修改第一组柱子的圆角
              barBorderRadius: 20,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: "#03C794",
                },
                {
                  offset: 1,
                  color: "#0094F9",
                },
              ]),
            },
            //柱子之间的距离
            barCategoryGap: 50,
            //柱子的宽度
            barWidth: 10,
            //显示柱子内的文字
            label: {
              show: true,
              //图形内显示百分比
              position: "right",
              //{c}会自动的解析为数据 data里面的数据
              formatter: "{c}%",
            },
          },
          {
            name: "框",
            type: "bar",
            barCategoryGap: 50,
            barWidth: 15,
            yAxisIndex: 1,
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100],
            itemStyle: {
              //修改第一组柱子的圆角
              color: "none",
              borderColor: "#00c1de",
              borderWidth: 3,
              barBorderRadius: 15,
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
    // 左下角图表
    LeftBottom() {
      var chartDom = document.getElementById("LeftBottom");
      var myChart = echarts.init(chartDom);
      var option = {
        // tooltip: {
        //   trigger: "axis",
        //   axisPointer: {
        //     // Use axis to trigger tooltip
        //     type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
        //   },
        // },
        title: {
          text: "标题名称",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
          // borderLeft: "10px solid #45b5f0"
          top: "20",
          left: "20",
        },
        legend: {
          data: ["字段1", "字段2", "字段3"],
          textStyle: {
            color: "#fff",
          },
          top: "50",
          right: "100",
        },
        grid: {
          left: "50px",
          top: "80px",
          bottom: "7%",
          // containLabel: true
        },
        xAxis: {
          type: "category",
          data: [
            "字段1",
            "字段2",
            "字段3",
            "字段4",
            "字段5",
            "字段6",
            "字段7",
            "字段8",
            "字段9",
          ],
        },
        yAxis: {
          type: "value",
          data: ["-500", "0", "500", "1000", "1500", "2000", "2500", "3000"],
        },
        series: [
          {
            name: "字段1",
            type: "bar",
            stack: "total",
            label: {
              show: false,
            },
            data: [470, 500, 400, 20, 300, 20, 100, 70, 2000],
            itemStyle: {
              color: "#8bd46e",
            },
          },
          {
            name: "字段2",
            type: "bar",
            stack: "total",
            label: {
              show: false,
            },
            data: [10, -40, 20, 10, 10, 30, 40, 5, 200],
            itemStyle: {
              color: "#f5804d",
            },
          },
          {
            name: "字段3",
            type: "bar",
            stack: "total",
            label: {
              show: false,
            },
            data: [0, 5, 20, -20, 0, 10, 0, 0, -20],
            itemStyle: {
              color: "#248ff7",
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
    //中间中间图表
    CenterCenters() {
      var chartDom = document.getElementById("CenterCenters");
      var myChart = echarts.init(chartDom);
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#fff",
            },
          },
        },
        grid: {
          left: "50px",
          top: "80px",
          bottom: "7%",
          // containLabel: true
        },
        title: {
          text: "标题名称",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
          // borderLeft: "10px solid #45b5f0"
          top: "20",
          left: "20",
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["字段1", "字段2", "字段3", "字段4", "字段5", "字段6"],
          textStyle: {
            color: "#fff",
          },
          top: "40",
          right: "240",
        },
        xAxis: [
          {
            type: "category",
            data: ["2016", "2017", "2018", "2019"],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            // min: 0,
            // max: 50,
            // interval: 50,
            data: ["0", "10", "20", "30", "40", "50"],
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "",
            min: -12,
            max: 9,
            interval: 5,
            // data: ["-12", "-9", "-6", "-3", "0", "3", "6", "9"],
            axisLabel: {
              formatter: "{value} %",
            },
          },
        ],
        series: [
          {
            name: "字段1",
            type: "bar",
            data: ["35", "38", "40", "40"],
            itemStyle: {
              color: "#8bd46e",
              barBorderRadius: 20,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: "#7fd173",
                },
                {
                  offset: 1,
                  color: "#16beae",
                },
              ]),
            },
          },
          {
            name: "字段2",
            type: "bar",
            data: ["15", "15", "15", "15"],
            itemStyle: {
              color: "#4272f4",
              barBorderRadius: 20,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: "#03C794",
                },
                {
                  offset: 1,
                  color: "#0094F9",
                },
              ]),
            },
          },
          {
            name: "字段3",
            type: "bar",
            data: ["5", "5", "5", "5"],
            itemStyle: {
              color: "#f5804d",
              barBorderRadius: 20,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: "#fabb13",
                },
                {
                  offset: 1,
                  color: "#f68a42",
                },
              ]),
            },
          },
          {
            name: "字段4",
            type: "line",
            data: ["30", "40", "38", "34"],
            itemStyle: {
              color: "#a1c8ae",
            },
          },
          {
            name: "字段5",
            type: "line",
            // yAxisIndex: 1,
            data: ["30", "15", "40", "50"],
            itemStyle: {
              color: "#2b63b7",
            },
          },
          {
            name: "字段6",
            type: "line",
            data: ["30", "24", "45", "5"],
            itemStyle: {
              color: "#b8a558",
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
    //中间下边图表
    CenterBottoms() {
      var chartDom = document.getElementById("CenterBottoms");
      var myChart = echarts.init(chartDom);
    },
  },
  created() {
    this.times = formatDate(new Date());
    this.getTimes();
  },
  mounted() {
    this.LeftTop();
    this.LeftBottom();
    this.CenterCenters();
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#CenterCenters {
  width: 100%;
  height: 360px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), #032463);
  ::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 10px;
    height: 40px;
    background-color: #49bcf7;
  }
}
.center {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .CenterTop {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    // background-color: #03236d;
    background-color: rgba(3, 32, 101, 0.5);
    .CenterTopLeft {
      padding-bottom: 40px;
      .title {
        color: white;
        margin-top: 20px;
        padding-left: 10px;
      }
      .h1money {
        color: #fef000;
        font-size: 50px;
        font-weight: 700;
        padding-left: 30px;
      }
      .money {
        color: #fef000;
        font-size: 35px;
        font-weight: 700;
      }
    }
  }
}
#CenterBottoms {
  width: 100%;
  height: 300px;
  background-color: #032463;
  ::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 10px;
    height: 40px;
    background-color: #49bcf7;
  }
}
.left {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.right {
  width: 25%;
  height: 100%;
}
#LeftTop {
  width: 400px;
  height: 480px;
  // 透明色加渐变色从左到右
  background: linear-gradient(to right, rgba(0, 0, 0, 0), #032463);
  ::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 10px;
    height: 40px;
    background-color: #49bcf7;
  }
}
#LeftBottom {
  width: 400px;
  height: 300px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), #032463);
  ::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 10px;
    height: 40px;
    background-color: #49bcf7;
  }
}
.EchartsList {
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: space-between;
}
.home {
  width: 100%;
  height: 100%;
  background: url(../assets/bg.jpg) no-repeat;
  .header {
    width: 100%;
    height: 100px;
    background: url(../assets/head_bg.png) no-repeat;
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 30px;
      color: #fff;
      text-align: center;
      line-height: 100px;
      flex: 1;
    }
    .TextRight {
      font-size: 20px;
      color: #fff;
      line-height: 100px;
      padding-right: 20px;
    }
  }
}
</style>
