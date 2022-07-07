<template>
  <div>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
// import AppHeader from '~/components/common/header'
// import AppNavbar from '~/components/common/navbar'
// import AppTabbar from '~/components/common/tabbar'
// import AppTabhead from '~/components/common/tabhead'

export default {
  name: 'DefaultLayout',
  // components: { AppHeader, AppNavbar, AppTabbar, AppTabhead },
  data() {
    return {
      bigLayouts: ['/series', '/social', '/deck'],
    }
  },
  mounted() {
    console.log(process.env.SERVER_URL)
  },

  methods: {},
}
</script>
