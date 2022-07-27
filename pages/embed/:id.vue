
<template>
  <div>
    <section class="h-screen w-screen grid place-items-center overflow-hidden bg-slate-800/50">
      <div class="w-screen pad:w-80 px-12 pad:px-0">
        <div v-show="loading" ref="previewProgress" role="button" aria-label="Upload file" />
      </div>
      <div v-show="!loading" ref="previewStage" />
    </section>

    <div class="fixed bottom-0 w-full p-4 bg-gradient-to-t from-black/80 flex items-end">
      <div>
        <h2 class="mt-2 font-bold leading-none text-white text-2xl hover:text-cyan-500 cursor-pointer" @click="$router.push(`/${$route.params.id}`)">
          {{ work.title }}
        </h2>
        <div class="w-full mt-2 flex items-center space-x-2">
          <div class="rounded-full h-6 w-6 bg-slate-800">
            <img src="icon.png" class="rounded-full" />
          </div>
          <small class="text-gray-500 font-mono"> {{ work.author }} 於 {{ formatTime(work.createAt) }} 發佈 </small>
        </div>
      </div>

      <button class="ml-auto opacity-20 hover:opacity-80" @click="$router.push('/')">
        <img src="icon-white.svg" class="h-12 w-12" />
      </button>
    </div>
  </div>
</template>

<script>
import circlr from 'circlr'
import moment from 'moment'
import { WorkItem } from '~/interface/work'
import { ImageItem } from '~/interface/image'

export default {
  name: 'DetailPage',
  layout: 'embed',
  data() {
    return {
      loading: true,
      done: 0,
      work: new WorkItem(),
      abortController: new AbortController(),
    }
  },
  head() {
    return this.genMeta(`${this.work.title} | FigureStage`, this.work.description, this.work.cover)
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
    if (this.$refs.previewProgress) this.$refs.previewProgress.remove()
  },
  methods: {
    async init() {
      // init progress
      this.initProgress()

      // start loading data
      this.loading = true
      this.done = 0
      $(this.$refs.previewProgress).ElasticProgress('open')

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
        $(this.$refs.previewProgress).ElasticProgress('close')
        this.done = 0
        this.loading = false
      }, 1000)
    },

    initProgress() {
      $(this.$refs.previewProgress).ElasticProgress({
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
      item.className = 'h-screen w-screen bg-cover bg-no-repeat bg-center'
      item.style['background-image'] = `url(${img.src})`
      item.appendChild(img)
      this.$refs.previewStage.appendChild(item)
    },

    async initImage(url) {
      const self = this
      const target = new ImageItem({
        url,
        load() {
          self.done += 1
          $(self.$refs.previewProgress).ElasticProgress('setValue', self.done / self.work.images.length)
        },
      })

      return await target.image()
    },

    initCirclr() {
      circlr(this.$refs.previewStage)
        .scroll(true)
        // .interval(300)
        .play()
    },

    formatTime(t = null, ff = '', tf = 'YYYY-MM-DD') {
      return moment(t ? t.toMillis() : new Date(), ff).format(tf)
    },
  },
}
</script>

<style>
</style>
