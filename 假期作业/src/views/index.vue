<template>
    <div>
        <div class="title">数据统计</div>
        <div class="li">
            <ul>
                <li>当日数据:</li>
                <li class="text">
                    <p class="sz">5</p>新增用户
                </li>
                <li class="text">
                    <p class="sz">3</p>新增订单
                </li>
                <li class="text">
                    <p class="sz">25</p>新增管理员
                </li>
            </ul>
        </div>

        <div class="li">
            <ul>
                <li class="tex">总数据:</li>
                <li class="text">
                    <p class="sz">69859</p>注册用户
                </li>
                <li class="text">
                    <p class="sz">32685</p>订单
                </li>
                <li class="text">
                    <p class="sz">124682</p>管理员
                </li>
            </ul>
        </div>

        <div class="echartsCent">
            <div>
                <div id="main" :style="{ width: '1000px', height: '600px' }"></div>
            </div>
        </div>
    </div>
</template>
  
<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
        };
    }, mounted() {
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            title: {
                text: 'Temperature Change in the Coming Week'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {},
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: { readOnly: false },
                    magicType: { type: ['line', 'bar'] },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                }
            },
            series: [
                {
                    name: 'Highest',
                    type: 'line',
                    data: [10, 11, 13, 11, 12, 12, 9],
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        data: [{ type: 'average', name: 'Avg' }]
                    }
                },
                {
                    name: 'Lowest',
                    type: 'line',
                    data: [1, -2, 2, 5, 3, 2, 0],
                    markPoint: {
                        data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: 'Avg' },
                            [
                                {
                                    symbol: 'none',
                                    x: '90%',
                                    yAxis: 'max'
                                },
                                {
                                    symbol: 'circle',
                                    label: {
                                        position: 'start',
                                        formatter: 'Max'
                                    },
                                    type: 'max',
                                    name: '最高点'
                                }
                            ]
                        ]
                    }
                }
            ]
        };

        option && myChart.setOption(option);
    }

};
</script>
  
  
<style lang="scss" scoped>
.title {
    height: 50px;
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
}

ul {
    display: flex;
    margin-top: 20px;

    li {
        display: flex;
        justify-content: center;
        width: 200px;
        background-color: #ff9800;
        height: 40px;
        text-align: center;
        color: #fff;
        font-size: 15px;
        line-height: 40px;
        border-radius: 10px;
        margin-right: 15px;

    }

    .text {
        background-color: #e5e9f2;
        color: #67686b;

        p {
            font-style: 30px;
        }
    }

    .tex {
        background-color: #20a0ff;
    }
}

.echartsCent {
    width: 100%;
    display: flex;
    justify-content: center;
}

.echartsCent>div {
    width: 1000px;
    height: 1000px;
}

.sz {
    font-size: 30px;
    color: #000;
}
</style>