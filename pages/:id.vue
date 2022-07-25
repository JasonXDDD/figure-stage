
<template>
  <div>
    <section class="h-[75vh] pad:h-[80vh] w-auto grid place-items-center overflow-hidden bg-slate-800/50">
      <div class="w-screen pad:w-80 px-12 pad:px-0">
        <div v-show="loading" ref="progress" role="button" aria-label="Upload file" />
      </div>
      <div v-show="!loading" ref="stage" />
    </section>

    <section class="p-4">
      <h2 class="font-bold leading-none text-white text-2xl">{{ work.title }}</h2>
      <div class="w-full mt-2 flex items-center space-x-2">
        <div class="rounded-full h-6 w-6 bg-slate-800">
          <img src="https://bottleneko.app/icon.png" class="rounded-full" />
        </div>
        <small class="text-gray-500 font-mono">{{ work.author }}</small>
      </div>
      <div></div>
    </section>
  </div>
</template>

<script>
import circlr from 'circlr'
import { WorkItem } from '~/interface/work'
import { ImageItem } from '~/interface/image'

export default {
  name: 'DetailPage',
  data() {
    return {
      loading: true,
      done: 0,

      work: new WorkItem(),
      images: [],
      env: '',
    }
  },
  mounted() {
    this.env = process.env.NODE_ENV

    this.work = this.$store.state.work.works.filter((e) => e.id === this.$route.params.id)[0]
    if (!this.work) this.$router.push('/')
    else this.init()
  },
  methods: {
    async init() {
      // init progress
      this.initProgress()

      // start loading data
      this.loading = true
      this.done = 0
      $(this.$refs.progress).ElasticProgress('open')

      const items = await Promise.all(this.work.images.map((e) => this.initImage(e)))
      // append element to dom
      items.forEach((e) => this.buildItem(e))

      // render stage
      setTimeout(() => {
        this.initCirclr()

        // reest progress
        $(this.$refs.progress).ElasticProgress('close')
        this.done = 0
        this.loading = false
      }, 1000)
    },

    initProgress() {
      $(this.$refs.progress).ElasticProgress({
        buttonSize: 60,
        fontFamily: 'Montserrat',
        colorBg: '#adeca8',
        colorFg: '#7cc576',
      })
    },

    buildItem(img) {
      img.className = 'object-contain w-full h-full mx-auto backdrop-blur-xl'
      img.style['backdrop-filter'] = 'blur(24px)'
      img.style['-webkit-backdrop-filter'] = 'blur(24px)'

      const item = document.createElement('div')
      item.className = 'h-[75vh] pad:h-[80vh] w-auto bg-cover bg-no-repeat bg-center'
      item.style['background-image'] = `url(${img.src})`
      item.appendChild(img)
      this.$refs.stage.appendChild(item)
    },

    async initImage(src) {
      const self = this
      const url = await this.$store.dispatch('image/download', src)

      const target = new ImageItem({
        url,
        load() {
          self.done += 1
          $(self.$refs.progress).ElasticProgress('setValue', self.done / self.images.length)
        },
      })

      return await target.image()
    },

    initCirclr() {
      circlr(this.$refs.stage)
        .scroll(true)
        // .interval(300)
        .play()
    },
  },
}
</script>

<style>
</style>
