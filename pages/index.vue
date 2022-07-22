<template>
  <div class="text-white/50">
    <button @click="add">Test</button>
    <input type="file" accept="image/*" multiple @change="hello" />
    <button @click="addFile">Test File</button>

    <div class="grid grid-cols-2 pad:grid-cols-6 gap-0">
      <card-item v-for="(e, i) in $store.state.work.works" :key="i" :card="e" />
    </div>
  </div>
</template>

<script>
import CardItem from '~/components/common/card'
import { WorkItem } from '~/interface/work'

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
  methods: {
    counter(n) {
      return new Array(n).fill(0)
    },

    async add() {
      const w = new WorkItem()
      w.title = 'XDDD'
      w.cover = 'https://jasonxddd.me:9000/figure-stage/no-game-no-life-zero/cover.png'

      await this.$store.dispatch('work/addWork', w)
    },

    hello(e) {
      console.log(e.target.files)
      this.files = Array.from(e.target.files)
    },

    async addFile() {
      console.log(this.files)
      const res = await this.$store.dispatch('image/upload', this.files)
      console.log(res, 'final')
    },
  },
}
</script>
