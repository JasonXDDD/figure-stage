<template>
  <div class="grid grid-cols-2 pad:grid-cols-6 gap-0">
    <card-item v-for="(e, i) in counter(10)" :key="i" />
  </div>
</template>

<script>
import CardItem from '~/components/common/card'

export default {
  name: 'IndexPage',
  components: { CardItem },
  methods: {
    counter(n) {
      return new Array(n).fill(0)
    },
  },
}
</script>
