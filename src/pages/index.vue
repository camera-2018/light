<script setup lang="ts">
function result() {
  window.scrollTo({
    top: 10000,
    behavior: 'smooth',
  })
}
function toGithub() {
  window.open('https://github.com/camera-2018/light')
}
const start_time = ref('2015-04-05')
const end_time = ref('2023-04-02')
const benchmark = ref(false)
</script>

<template>
  <TheHeader class="p-5" />
  <br>
  <div class="flex flex-row items-center justify-evenly gap-10 py-25">
    <div class="flex flex-col items-start">
      <h1 class="main_logo self-start justify-self-start bg-clip-text text-[3.6rem] font-bold text-dark-600 dark:text-light-600">
        🐍🈵🈲⛰️队
      </h1>
      <h1 class="self-start justify-self-start bg-clip-text text-[3rem] font-bold dark:text-light-600">
        恒生 “LIGHT” 金融科技杯
      </h1>
      <h1 class="self-start justify-self-start bg-clip-text text-[3rem] font-bold dark:text-light-600">
        杭电第五届 Python 程序设计挑战赛
      </h1>
      <h1 class="from-pink-500 to-violet-500 bg-gradient-to-r bg-clip-text py-3 text-[5rem] font-bold text-transparent">
        重剑无锋，大巧不工
      </h1>
      <div class="flex flex-row gap-5 py-3">
        <button class="h-13 w-50 rounded-3xl bg-pink-600 text-lg text-light-100 transition duration-300 delay-150 ease-in-out hover:scale-110 hover:bg-indigo-500 hover:-translate-y-1" @click="result">
          查看我们的结果
        </button>
        <button class="h-13 w-50 rounded-3xl bg-orange-600 text-lg text-light-100 transition duration-300 delay-150 ease-in-out hover:scale-110 hover:bg-indigo-500 hover:-translate-y-1" @click="toGithub">
          查看项目的 Github
        </button>
      </div>
    </div>
    <!-- <Card /> -->
    <svg class="h-100 w-100 rounded-1 from-pink-500 to-violet-500 bg-gradient-to-r p-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="7.33" height="7.33" x="1" y="1" fill="#FFFFFF"><animate id="svgSpinnersBlocksWave0" attributeName="x" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1" /><animate attributeName="y" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1" /><animate attributeName="width" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="8.33" y="1" fill="#FFFFFF"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="1" y="8.33" fill="#FFFFFF"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="15.66" y="1" fill="#FFFFFF"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="8.33" y="8.33" fill="#FFFFFF"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="1" y="15.66" fill="#FFFFFF"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="15.66" y="8.33" fill="#FFFFFF"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="8.33" y="15.66" fill="#FFFFFF"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="15.66" y="15.66" fill="#FFFFFF"><animate id="svgSpinnersBlocksWave1" attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33" /></rect></svg>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <h1 class="from-pink-500 to-violet-500 bg-gradient-to-r bg-clip-text py-3 text-[5rem] font-bold text-transparent">
    累计收益率概览
  </h1>
  <br>
  <div class="flex flex-col items-center justify-center gap-5">
    <div class="flex flex-row items-center gap-100">
      <div class="justfy-center flex flex-row items-center gap-1">
        <input id="show_benchmark" v-model="benchmark" name="show_benchmark" type="checkbox" class="h-4 w-4 rounded focus:border-4 focus:border-indigo-500/100">
        <label for="show_benchmark">显示 BenchMark</label>
      </div>
      <label class="block flex flex-row items-center gap-2">
        <span class="block w-10 text-sm font-medium text-slate-700 after:ml-0.5 dark:text-[#e5e7eb]">
          起始日期
        </span>
        <input v-model="start_time" type="date" name="date_start" class="mt-1 block w-full border border-slate-300 rounded-md bg-white px-3 py-2 shadow-sm focus:border-sky-500 dark:bg-[#121212] sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 placeholder-slate-400" placeholder="2015/04/05">
      </label>
      <label class="block flex flex-row items-center gap-2">
        <span class="block w-10 text-sm font-medium text-slate-700 after:ml-0.5 dark:text-[#e5e7eb]">
          截止日期
        </span>
        <input v-model="end_time" type="date" name="date_end" class="mt-1 block w-full border border-slate-300 rounded-md bg-white px-3 py-2 shadow-sm focus:border-sky-500 dark:bg-[#121212] sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 placeholder-slate-400" placeholder="2023/04/02">
      </label>
    </div>
    <div class="flex flex-row gap-35 p-5">
      <div>
        <div>策略收益</div>
        <div class="number">
          ¥1921518
        </div>
      </div>
      <div>
        <div>策略最大收益率</div>
        <div class="number">
          24.08%
        </div>
      </div>
      <div>
        <div>策略最大回撤</div>
        <div class="number">
          47.37%
        </div>
      </div>
      <div>
        <div>策略夏普比率</div>
        <div class="number">
          7.55%
        </div>
      </div>
    </div>
    <div class="flex flex-row gap-10 p-1">
      <div>
        <div>Annual Return</div>
        <div class="number_small">
          5.1788
        </div>
      </div>
      <div>
        <div>Cumulative Returns</div>
        <div class="number_small">
          18.2152
        </div>
      </div>
      <div>
        <div>Annual Volatility</div>
        <div class="number_small">
          0.7732
        </div>
      </div>
      <div>
        <div>Calmar Ratio</div>
        <div class="number_small">
          11.4334
        </div>
      </div>
      <div>
        <div>Stability</div>
        <div class="number_small">
          0.9091
        </div>
      </div>
      <div>
        <div>Max Drawdown</div>
        <div class="number_small">
          -0.4529
        </div>
      </div>
      <div>
        <div>Omega Ratio</div>
        <div class="number_small">
          1.5862
        </div>
      </div>
      <div>
        <div>Sortino Ratio</div>
        <div class="number_small">
          4.4631
        </div>
      </div>
      <div>
        <div>Skew</div>
        <div class="number_small">
          -0.0747
        </div>
      </div>
      <div>
        <div>Kurtosis</div>
        <div class="number_small">
          1.1738
        </div>
      </div>
      <div>
        <div>Tail Ratio</div>
        <div class="number_small">
          1.4138
        </div>
      </div>
      <div>
        <div>Daily Value At Risk</div>
        <div class="number_small">
          -0.089
        </div>
      </div>
    </div>
    <Chart :is_benchmark="benchmark" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style scoped>
.number {
  @apply from-pink-500 to-violet-500 bg-gradient-to-r bg-clip-text py-3 text-[3rem] font-bold text-transparent
}
.number_small {
  @apply from-pink-500 to-violet-500 bg-gradient-to-r bg-clip-text py-3 text-lg font-bold text-transparent
}
</style>
