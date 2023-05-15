<template>
  <div class="w-full flex flex-row items-center justify-evenly gap-5 text-lg">
    <div class="logo main_logo">
      🐍🈵🈲⛰️
    </div>
    <div class="group">
      <button class="header_button">
        关于
      </button>
      <div class="group-hover:opacity-100 opacity-0 fixed translate-x-[-1.7rem] transition-opacity ease-in-out delay-100 duration-300">
        <div class="group-hover:opacity-100 p-2 absolute flex flex-col gap-2 bg-white dark:bg-[#121212] rounded-md shadow-md w-35">
          <button class="header_button">
            项目介绍
          </button>
          <button class="header_button">
            项目成员
          </button>
          <button class="header_button">
            联系我们
          </button>
        </div>
      </div>
    </div>
    <button class="header_button">
      策略
    </button>
    <button class="header_button">
      相关研究
    </button>
    <button class="header_button">
      测试结果
    </button>
    <div class="flex gap-3">
      <a icon-btn rel="noreferrer" href="https://github.com/camera-2018/light" target="_blank" title="GitHub">
        <div i-carbon-logo-github />
      </a>
      <button icon-btn @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.header_button{
  @apply hover:opacity-50 bg-white dark:bg-[#121212] rounded-md shadow-md py-2 px-6
}

.logo {
  text-shadow: 0 -6px 4px #da2424,
  /*上*/ 4px -4px 4px #54c42b,
  /*右上*/ 6px 0 4px #5d046e,
  /*右*/ 4px 4px 4px #f3e6e6,
  /*右下*/ 0 6px 4px #dab70d,
  /*下*/ -4px 4px 4px #d917e7,
  /*左下*/ -6px 0 4px #213be9,
  /*左*/ -4px -4px 4px #131212;
  @apply text-3xl
}
</style>
