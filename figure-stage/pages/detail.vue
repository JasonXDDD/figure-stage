
<template>
  <div>
    <section
      ref="stage"
      class="h-[80vh] w-auto bg-cover bg-no-repeat bg-center"
      :style="{
        'background-image': `url(${now})`,
      }"
    >
      <img
        v-for="(image, imageid) in images"
        :key="`image-${imageid}`"
        class="object-contain h-full backdrop-blur-xl backdrop-saturate-200"
        :src="image"
        alt=""
      />
    </section>

    <section class="p-4">
      <h2 class="font-bold leading-none text-white text-2xl">Hello World Hello World Hello World Hello World</h2>
      <div class="w-full mt-2 flex items-center space-x-2">
        <div class="rounded-full h-8 w-8 bg-slate-800 p-1">
          <img src="/icon.png" />
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
      images: [
        'https://u0654dj0.github.io/FigureRoom/images/20160619/001.jpg',
        'https://u0654dj0.github.io/FigureRoom/images/20160619/002.jpg',
        'https://u0654dj0.github.io/FigureRoom/images/20160619/003.jpg',
        'https://u0654dj0.github.io/FigureRoom/images/20160619/004.jpg',
        'https://u0654dj0.github.io/FigureRoom/images/20160619/005.jpg',
        'https://u0654dj0.github.io/FigureRoom/images/20160619/006.jpg',
        'https://u0654dj0.github.io/FigureRoom/images/20160619/007.jpg',
        'https://u0654dj0.github.io/FigureRoom/images/20160619/008.jpg',
        'https://u0654dj0.github.io/FigureRoom/images/20160619/009.jpg',
      ],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const self = this
      circlr(this.$refs.stage)
        .scroll(true)
        .interval(500)
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
