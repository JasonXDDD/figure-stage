
<template>
  <div>
    <section class="h-[75vh] pad:h-[80vh] w-auto grid place-items-center overflow-hidden bg-slate-800/50">
      <div class="w-screen pad:w-80 px-12 pad:px-0">
        <div v-show="loading" ref="progress" role="button" aria-label="Upload file" />
      </div>
      <div v-show="!loading" ref="stage" />
    </section>

    <section class="p-4">
      <div class="flex items-center gap-1">
        <div v-for="(cat, catid) in work.categories" :key="`cat-${catid}`" class="px-1 rounded-md bg-cyan-600 text-white text-xs font-bold">
          {{ cat }}
        </div>
      </div>
      <h2 class="mt-2 font-bold leading-none text-white text-2xl">{{ work.title }}</h2>
      <div class="w-full mt-2 flex items-center space-x-2">
        <div class="rounded-full h-6 w-6 bg-slate-800">
          <img src="https://bottleneko.app/icon.png" class="rounded-full" />
        </div>
        <small class="text-gray-500 font-mono">{{ work.author }}</small>
      </div>
      <hr class="border-white/20 my-4" />
      <p class="text-white whitespace-pre-line">{{ work.description }}</p>
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

      abortController: new AbortController(),
    }
  },
  watch: {
    '$store.state.work.status'(val) {
      if (val === 'done') {
        this.work = this.$store.state.work.works.filter((e) => e.id === this.$route.params.id)[0]
        if (!this.work) this.$router.push('/')
        else this.init()
      }
    },
  },
  mounted() {
    if (this.$store.state.work.status === 'done') {
      this.work = this.$store.state.work.works.filter((e) => e.id === this.$route.params.id)[0]
      if (!this.work) this.$router.push('/')
      else this.init()
    }
  },
  beforeDestroy() {
    this.abortController.abort()
  },
  methods: {
    async init() {
      // init progress
      this.initProgress()

      // start loading data
      this.loading = true
      this.done = 0
      $(this.$refs.progress).ElasticProgress('open')

      const tasks = this.work.images.map((e) => {
        return new Promise((resolve, reject) => {
          this.abortController.signal.addEventListener('abort', () => {
            reject(new Error('abort'))
          })
          this.initImage(e).then((r) => resolve(r))
        })
      })

      const items = await Promise.all(tasks)
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

    async initImage(url) {
      const self = this
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
