
<template>
  <div>
    <section class="h-[80vh] w-auto grid place-items-center">
      <div class="w-80">
        <div v-show="loading" ref="progress" role="button" aria-label="Upload file" />
      </div>
      <div v-show="!loading" ref="stage" />
      <!-- <div
        v-for="(image, imageid) in images"
        :key="`image-${imageid}`"
        class=" bg-cover bg-no-repeat bg-center"
        :style="{
          'background-image': `url(${image})`,
        }"
      >
        <nuxt-img
          class="object-contain w-full h-full mx-auto backdrop-blur-xl backdrop-saturate-200"
          :src="`${env === 'development' ? '' : $router.options.base}${image}`"
          alt=""
          :format="image.split('.').pop().toLocaleLowerCase()"
          preload
          :modifiers="{ blur: 10, rotate: 90 }"
        />
      </div> -->
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
import { WORK_ITEM } from '~/interface/work'

export default {
  name: 'DetailPage',
  data() {
    return {
      loading: true,
      done: 0,

      work: WORK_ITEM,
      images: [],
      env: '',
    }
  },
  mounted() {
    this.env = process.env.NODE_ENV

    this.work = this.$store.state.works.filter((e) => e.link === this.$route.params.id)[0]
    if (!this.work) this.$router.go(-1)
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

      this.images = new Array(20).fill(0).map((e, i) => `https://jasonxddd.me:9000/figure-stage/${this.work.link}/${i + 1}.JPG`)
      const items = await Promise.all(this.images.map((e) => this.initImage(e)))
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

      const item = document.createElement('div')
      item.className = 'h-[80vh] w-auto bg-cover bg-no-repeat bg-center'
      item.style['background-image'] = `url(${img.src})`
      item.appendChild(img)
      this.$refs.stage.appendChild(item)
    },

    initImage(src) {
      const self = this
      return new Promise((resolve) => {
        const image = new Image()
        image.onload = () => {
          self.done += 1
          $(self.$refs.progress).ElasticProgress('setValue', self.done / self.images.length)
          resolve(image)
        }
        image.src = src
      })
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
