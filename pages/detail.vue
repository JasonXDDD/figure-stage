
<template>
  <div>
    <section ref="stage">
      <div
        v-for="(image, imageid) in images"
        :key="`image-${imageid}`"
        class="h-[80vh] w-auto bg-cover bg-no-repeat bg-center"
        :style="{
          'background-image': `url(${image})`,
        }"
      >
        <img class="object-contain w-full h-full mx-auto backdrop-blur-xl backdrop-saturate-200" :src="image" alt="" rel="preload" />
      </div>
    </section>

    <section class="p-4">
      <h2 class="font-bold leading-none text-white text-2xl">Hello World Hello World Hello World Hello World</h2>
      <div class="w-full mt-2 flex items-center space-x-2">
        <div class="rounded-full h-8 w-8 bg-slate-800 p-1">
          <img src="https://bottleneko.app/icon.png" />
        </div>
        <small class="text-white">XDD</small>
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello
        World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World
        Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello
        World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World
        Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello
        World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World
        Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello
        World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World
        Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello
        World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World
        Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello
        World Hello World Hello World Hello World Hello World Hello World
      </div>
    </section>
  </div>
</template>

<script>
import circlr from 'circlr'
export default {
  name: 'DetailPage',
  data() {
    return {
      now: '',
      images: [],
    }
  },
  mounted() {
    this.images = new Array(20).fill(0).map((e, i) => `${this.router.base}/test1/IMG_${6669 + i}.JPG`)
    setTimeout(this.init, 500)
  },
  methods: {
    init() {
      const self = this
      circlr(this.$refs.stage)
        .scroll(true)
        // .interval(300)
        .play()
        .on('show', (n) => {
          self.now = self.images[n]
        })
    },
  },
}
</script>

<style>
</style>
