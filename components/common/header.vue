<template>
  <header class="sticky pad:fixed top-0 z-10 w-full pad:w-60 h-auto pad:h-screen bg-[#20252c] p-4 text-white font-mono">
    <div class="flex pad:block">
      <h1 class="font-bold hover:text-cyan-300">
        <nuxt-link to="/" class="flex space-x-2 items-center">
          <img src="icon.png" class="h-8" alt="" />
          <span class="text-xl"> FigureStage </span>
        </nuxt-link>
      </h1>

      <button class="pad:hidden ml-auto" @click="isShow = !isShow">
        <outline-chevron-double-down-icon class="w-6 h-6 transition-all ease-out" :class="{ 'rotate-180': isShow }" />
      </button>
    </div>

    <div
      class="transition-all ease-out overflow-hidden -mx-4"
      :style="{
        height: isShow || isPad ? navHeight + 'px' : 0,
      }"
    >
      <nav ref="nav" class="flex flex-col pt-8">
        <nuxt-link @click="isShow = false" class="hover:bg-white hover:text-black px-4 py-2" to="/"> 作品 </nuxt-link>
        <nuxt-link @click="isShow = false" class="hover:bg-white hover:text-black px-4 py-2" to="/about"> 介紹 </nuxt-link>
        <nuxt-link @click="isShow = false" class="hover:bg-white hover:text-black px-4 py-2" to="/"> GitHub </nuxt-link>
        <nuxt-link @click="isShow = false" class="hover:bg-white hover:text-black bg-cyan-700 px-4 py-2" to="/edit"> 新增作品 </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isShow: false,
      isPad: false,
    }
  },
  computed: {
    navHeight() {
      return this.$refs.nav.clientHeight
    },
  },

  mounted() {
    this.isPad = window.innerWidth >= 640
  },
}
</script>

<style>
</style>
