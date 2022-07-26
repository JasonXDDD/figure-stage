<template>
  <div>
    <app-header />
    <main class="pad:ml-60">
      <Nuxt />
    </main>
    <div class="fixed top-0 w-screen h-screen z-10 bg-white/10 text-white grid place-items-center" v-if="$store.state.work.status === 'loading'">
      <div class="flex items-center">
        <outline-cog-icon class="h-8 w8 animate-spin mr-1" />
        <span class="font-bold">載入資料</span>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/common/header'
// import AppNavbar from '~/components/common/navbar'
// import AppTabbar from '~/components/common/tabbar'
// import AppTabhead from '~/components/common/tabhead'

export default {
  name: 'DefaultLayout',
  components: { AppHeader },
  data() {
    return {
      bigLayouts: ['/series', '/social', '/deck'],
    }
  },
  mounted() {
    console.log(process.env.SERVER_URL)
    this.$store.dispatch('work/getWorks')
  },

  methods: {},
}
</script>
