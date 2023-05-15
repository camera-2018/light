<script setup lang="ts">

</script>

<template>
  <TheHeader class="p-5" />
  <div class="flex flex-col items-center justify-center">
    <h1 class="from-pink-500 to-violet-500 bg-gradient-to-r bg-clip-text text-6xl font-bold text-transparent">
      重剑无锋，大巧不工
    </h1>
    <br>
    <div class="flex flex-row items-center gap-2">
      <div class="justfy-center flex flex-row items-center gap-1">
        <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded focus:border-4 focus:border-indigo-500/100">
        <div>超额收益率</div>
      </div>
      <label class="block flex flex-row items-center gap-2">
        <span class="block w-10 text-sm font-medium text-slate-700 after:ml-0.5 dark:text-[#e5e7eb]">
          起始日期
        </span>
        <input type="date" name="date_start" class="mt-1 block w-full border border-slate-300 rounded-md bg-white px-3 py-2 shadow-sm focus:border-sky-500 dark:bg-[#121212] sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 placeholder-slate-400" placeholder="2015-01-01">
      </label>
      <label class="block flex flex-row items-center gap-2">
        <span class="block w-10 text-sm font-medium text-slate-700 after:ml-0.5 dark:text-[#e5e7eb]">
          截止日期
        </span>
        <input type="date" name="date_end" class="mt-1 block w-full border border-slate-300 rounded-md bg-white px-3 py-2 shadow-sm focus:border-sky-500 dark:bg-[#121212] sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 placeholder-slate-400" placeholder="2023-01-01">
      </label>
    </div>
    <div class="flex flex-row gap-18 p-5">
      <div>
        <div>策略收益</div>
        <div>100</div>
      </div>
      <div>
        <div>基准收益</div>
        <div>100</div>
      </div>
      <div>
        <div>策略年化收益率</div>
        <div>100</div>
      </div>
      <div>
        <div>ALPHA</div>
        <div>100</div>
      </div>
      <div>
        <div>BETA</div>
        <div>100</div>
      </div>
      <div>
        <div>SHAPE</div>
        <div>100</div>
      </div>
      <div>
        <div>SORTINO</div>
        <div>100</div>
      </div>
      <div>
        <div>INFORMATION RATIO</div>
        <div>100</div>
      </div>
      <div>
        <div>VOLATILITY</div>
        <div>100</div>
      </div>
      <div>
        <div>最大回撤</div>
        <div>100</div>
      </div>
      <div>
        <div>胜率</div>
        <div>100</div>
      </div>
    </div>
    <Chart />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style scoped>
</style>
