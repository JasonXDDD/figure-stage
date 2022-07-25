<template>
  <div class="text-white/50">
    <div class="grid grid-cols-2 pad:grid-cols-6 gap-0">
      <card-item v-for="(e, i) in $store.state.work.works" :key="i" :card="e" />
    </div>
  </div>
</template>

<script>
import CardItem from '~/components/common/card'
export default {
  name: 'IndexPage',
  components: { CardItem },
  data() {
    return {
      files: [],
    }
  },
  mounted() {
    console.log('<<<<<', process.env.NODE_ENV)
    this.$store.dispatch('work/getWorks')
  },
}
</script>
