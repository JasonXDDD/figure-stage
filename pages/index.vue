<template>
  <div class="grid grid-cols-2 pad:grid-cols-6 gap-0">
    <card-item v-for="(e, i) in cards" :key="i" :cover="e" />
  </div>
</template>

<script>
import CardItem from '~/components/common/card'

export default {
  name: 'IndexPage',
  components: { CardItem },
  data() {
    return {
      cards: [],
    }
  },
  mounted() {
    this.cards = this.cards.concat(new Array(30).fill('https://bottleneko.app/icon.png'))
    this.cards[0] = `${this.$router.options.base}/cover/test1.JPG`
  },
  methods: {
    counter(n) {
      return new Array(n).fill(0)
    },
  },
}
</script>
