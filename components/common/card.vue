<template>
  <nuxt-link :to="card.id" class="relative">
    <img :src="cover" />
    <div
      class="
        absolute
        w-full
        h-full
        px-2
        pb-2
        bottom-0
        bg-gradient-to-t
        from-gray-700
        hover:opacity-100
        opacity-0
        transition-opacity
        grid
        place-items-end
      "
    >
      <div class="w-full mt-auto flex items-center space-x-2">
        <div class="rounded-full h-8 w-8 bg-slate-800">
          <img src="https://bottleneko.app/icon.png" class="rounded-full" />
        </div>
        <div>
          <h2 class="font-bold leading-none text-white">{{ card.title }}</h2>
          <small class="text-white/50 font-mono">{{ card.author }}</small>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CardItem',
  props: ['card'],
  data() {
    return {
      cover: '',
    }
  },
  watch: {
    card: {
      deep: true,
      async handler(val) {
        await this.getCover(val.cover)
      },
    },
  },

  async mounted() {
    await this.getCover(this.card.cover)
  },
  methods: {
    async getCover() {
      this.cover = await this.$store.dispatch('image/download', this.card.cover)
    },
  },
}
</script>

<style>
</style>
