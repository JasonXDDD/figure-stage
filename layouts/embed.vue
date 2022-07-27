<template>
  <Nuxt />
</template>

<script>
export default {
  name: 'EmbedLayout',
  mounted() {
    console.log(process.env.SERVER_URL)
    this.$store.dispatch('work/getWorks')
  },
}
</script>

<style>
</style>
