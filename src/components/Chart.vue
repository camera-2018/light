<script setup>
import { graphic, use } from 'echarts/core'
import { SVGRenderer } from 'echarts/renderers'
import { LineChart, PieChart } from 'echarts/charts'
import {
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from 'echarts/components'

import VChart from 'vue-echarts'
import { ref } from 'vue'

use([
  SVGRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
  DataZoomComponent,
  LineChart,
])

let base = +new Date(1968, 9, 3)
const oneDay = 24 * 3600 * 1000
const date = []
const data = [Math.random() * 300]
for (let i = 1; i < 20000; i++) {
  const now = new Date((base += oneDay))
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
  data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]))
}

const option = ref({
  tooltip: {
    trigger: 'axis',
    position(pt) {
      return [pt[0], '10%']
    },
  },
  title: {
    left: 'center',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: date,
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 10,
    },
    {
      start: 0,
      end: 10,
    },
  ],
  series: [
    {
      name: 'Fake Data',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: '#eb489a',
      },
      areaStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#8c5cf4',
          },
          {
            offset: 1,
            color: '#eb489a',
          },
        ]),
      },
      data,
    },
  ],
})

</script>

<template>
  <VChart class="chart" :option="option" :theme="isDark ? '#121212' : 'light'" />
</template>

<style scoped>
.chart {
  height: 400px;
}
</style>
