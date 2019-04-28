<template>
  <div id="radar" class="container"> </div>
</template>

<script>
  // 引入基本模板
  import echarts from 'echarts/lib/echarts';
  // 引入雷达图组件
  import 'echarts/lib/chart/radar';
  // 引入提示框和图例组件
  import 'echarts/lib/component/tooltip';
  import 'echarts/lib/component/legend';

  export default {
    name: 'radarChart',
    props: {
      chartData: {
        type: Object,
        default () {
          return {
            value: [5, 5, 5, 5, 5, 5]
          }
        }
      }
    },
    mounted () {
      const option = {
        tooltip: {},
        radar: {
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [1, 2]
            }
          },
          indicator: [
            {
              name: '创造力',
              max: 10
            },
            {
              name: '执行力',
              max: 10
            },
            {
              name: '编程',
              max: 10
            },
            {
              name: '逻辑',
              max: 10
            },
            {
              name: '社交',
              max: 10
            },
            {
              name: '想象力',
              max: 10
            }
          ]
        },
        series: [{
          name: '详细数值',
          type: 'radar',
          data: [
            this.chartData
          ]
        }]
      };
      // 初始化图表
      const chartObj = echarts.init(document.getElementById('radar'));
      chartObj.setOption(option);
    }
  };
</script>

<style>
  .container{
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
</style>
