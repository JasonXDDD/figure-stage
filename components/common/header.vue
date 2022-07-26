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
        <a @click="routeTo('/')" class="hover:bg-white hover:text-black px-4 py-2"> 作品 </a>
        <a @click="routeTo('/about')" class="hover:bg-white hover:text-black px-4 py-2"> 介紹 </a>
        <a @click="routeTo('/')" class="hover:bg-white hover:text-black px-4 py-2"> GitHub </a>
        <a @click="routeTo('/edit')" class="hover:bg-white hover:text-black bg-cyan-700 px-4 py-2"> 新增作品 </a>
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

  watch: {
    '$route.path'() {
      this.isShow = false
    },
  },

  mounted() {
    this.isPad = window.innerWidth >= 640
  },

  methods: {
    routeTo(link) {
      this.isShow = false
      this.$router.push(link)
    },
  },
}
</script>

<style>
</style>
