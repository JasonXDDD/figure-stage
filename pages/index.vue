<template>
  <div class="text-white/50">
    <button @click="add">Test</button>
    <input type="file" accept="image/*" multiple @change="hello" />
    <button @click="addFile">Test File</button>
    <div ref="test" />

    <div class="grid grid-cols-2 pad:grid-cols-6 gap-0">
      <card-item v-for="(e, i) in $store.state.work.works" :key="i" :card="e" />
    </div>
  </div>
</template>

<script>
import CardItem from '~/components/common/card'
import { WorkItem } from '~/interface/work'
import { ImageItem } from '~/interface/image'

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
    this.loadImage()
  },
  methods: {
    counter(n) {
      return new Array(n).fill(0)
    },

    async add() {
      const w = new WorkItem()
      w.title = 'XDDD'
      w.cover = 'https://jasonxddd.me:9000/figure-stage/no-game-no-life-zero/cover.png'

      const work = await this.$store.dispatch('work/addWork', w)
      // const images = await this.addFile(work.id)
      w.images = []
      await this.$store.dispatch('work/updateWork', { id: work.id, work: w })
    },

    hello(e) {
      console.log(e.target.files)
      this.files = Array.from(e.target.files)
    },

    async addFile(docid) {
      console.log(this.files)
      const res = await this.$store.dispatch('image/upload', { docid, files: this.files })
      console.log(res, 'final')
      return res
    },

    async loadImage() {
      const url = await this.$store.dispatch('image/download', '/iamge/303B9B61-3B1D-4C7B-B52D-DB5D0B051DD9_1_105_c.jpeg')
      const image = new ImageItem({ url })
      this.$refs.test.append(await image.image())
    },
  },
}
</script>
