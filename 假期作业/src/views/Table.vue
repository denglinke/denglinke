<template>
    <div class="tab">
        <div>
            <div id="main" :style="{ width: '500px', height: '500px' }"></div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    name: "",
    data() {
        return {}
    },
    methods: {},
    created() { },
    mounted() {
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            title: {
                text: 'Referer of a Website',
                subtext: 'Fake Data',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: '上海' },
                        { value: 735, name: '北京' },
                        { value: 580, name: '郑州' },
                        { value: 484, name: '深圳' },
                        { value: 300, name: '云南' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        option && myChart.setOption(option);

    }
}
</script>

<style lang="scss" scoped>

</style>