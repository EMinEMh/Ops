$(function () {
    // initEhcharts();
    initData();
});

function initData() {
    var Main = {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    };
    var Ctor = Vue.extend(Main)
    new Ctor().$mount('#app')
}

function initEhcharts() {
    //初始化ehcharts实例
    var myChart = echarts.init(document.getElementById("#box"));
    //指定图表的配置项和数据
    var option = {
        legend: {
            orient: 'horizontal',
            data: ['销量'],
            x: 'right'
        },
        grid: {
            top: '16%',   // 等价于 y: '16%'
            left: '3%',
            right: '8%',
            bottom: '3%',
            containLabel: true
        },
        //x轴
        xAxis: {
            type: 'time',
            data: ["苹果", "橘子", "橙子", "香蕉", "菠萝", "榴莲"],
            boundaryGap: false,
        },
        //y轴没有显式设置，根据值自动生成y轴
        yAxis: {},
        //数据-data是最终要显示的数据
        series: [{
            name: '销量',
            type: 'line',
            data: [40, 20, 35, 60, 55, 10]
        }]
    };
    //使用刚刚指定的配置项和数据项显示图表
    myChart.setOption(option);
}

