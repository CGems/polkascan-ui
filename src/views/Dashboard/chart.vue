<template>
  <div class="chart-wrapper subscan-card" ref="chart"></div>
</template>

<script>
let myChart;
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      dailyChart: state => state.polka.dailyChart,
      sourceSelected: state => state.global.sourceSelected
    })
  },
  beforeDestroy() {
    myChart = null;
  },
  watch: {
    dailyChart(nevV, oldV) {
      if (oldV.length === 0 || !myChart) {
        this.initChart();
      } else {
        const xAxisData = [];
        const data = [];
        this.dailyChart.forEach(item => {
          xAxisData.push(item.time);
          data.push(item.transfer_count);
        });
        myChart.setOption({
          xAxis: {
            data: xAxisData
          },
          series: {
            data
          }
        });
      }
    }
  },
  methods: {
    initChart() {
      const xAxisData = [];
      const data = [];
      this.dailyChart.forEach(item => {
        xAxisData.push(item.time);
        data.push(item.transfer_count);
      });
      myChart = window.echarts.init(this.$refs.chart);
      myChart.setOption({
        grid: {
          top: "5%",
          left: "0%",
          right: "0%",
          bottom: "0%",
          containLabel: false
        },
        tooltip: {
          trigger: "axis",
          formatter: "{b}<br />Transfer Count：{c}"
        },
        xAxis: [
          {
            type: "category",
            show: false,
            boundaryGap: false,
            splitLine: {
              show: false
            },
            data: xAxisData
          }
        ],
        yAxis: [
          {
            type: "value",
            show: false,
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            type: "line",
            showSymbol: false,
            hoverAnimation: false,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(138, 193, 243, 1)"
                  },
                  {
                    offset: 0.6,
                    color: "rgba(138, 193, 243, 0.9)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(231, 243, 254, 1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(255, 255, 255, 1)"
                  }
                ]
              }
            },
            lineStyle: {
              width: 1,
              color: "rgba(138, 193, 243, 1)"
            },
            // itemStyle: {
            //   normal: {
            //     color: "rgba(88,160,253,1)"
            //   }
            // },
            data
          }
        ]
      });
    }
  }
};
</script>

<style>
</style>
