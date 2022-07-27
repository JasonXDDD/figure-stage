<template>
  <modal-layout :is-show="isShow" @close="$emit('close')">
    <div class="h-full w-full flex flex-col justify-start">
      <div class="flex items-center text-white/80 mr-10">
        <outline-share-icon class="flex-none h-6 w-6 mr-2" />
        <h2 class="font-bold text-xl truncate mr-2">分享</h2>
      </div>
      <hr class="my-2 border-white/10" />
      <div class="flex flex-col gap-4">
        <section class="space-y-2">
          <h3 class="font-bold">分享網址</h3>
          <code class="relative text-xs block bg-slate-900 p-2 text-white/50 break-all" @click="doCopy(url, 'urlCopy')">
            {{ url }}
            <span ref="urlCopy" class="absolute bottom-0 right-0 bg-slate-700 px-1 pt-1">複製</span>
          </code>
        </section>

        <section class="space-y-2">
          <h3 class="font-bold">內嵌</h3>
          <code class="relative text-xs block bg-slate-900 p-2 text-white/50 break-all whitespace-pre-wrap" @click="doCopy(iframe, 'iframeCopy')"
            >{{ iframe }}<span ref="iframeCopy" class="absolute bottom-0 right-0 bg-slate-700 px-1 pt-1">複製</span>
          </code>
          <button
            class="ml-auto rounded-md bg-white hover:bg-cyan-500 font-bold text-xs text-slate-700 hover:text-white flex items-center p-1"
            @click="$router.push(`/embed/${$route.params.id}`)"
          >
            前往預覽
            <outline-arrow-right-icon class="ml-8 h-4 w-4" />
          </button>
        </section>
      </div>
    </div>
  </modal-layout>
</template>

<script>
import ModalLayout from '~/components/common/modal-layout'
export default {
  name: 'ShareModal',
  components: { ModalLayout },
  props: ['isShow'],

  data() {
    return {
      url: '',
      iframe: '',
    }
  },

  mounted() {
    this.url = window.location.href
    this.iframe = `<iframe
  width="540"
  height="360"
  src="${this.url.replace('figure-stage', 'figure-stage/embed')}"
  title="Figure Stage"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
/>`
  },

  methods: {
    doCopy(text, tg) {
      navigator.clipboard.writeText(text)
      $(this.$refs[tg]).addClass('text-green-500')
      $(this.$refs[tg]).parent('code').addClass('text-green-500')
      this.$refs[tg].innerHTML = '成功'

      setTimeout(() => {
        $(this.$refs[tg]).removeClass('text-green-500')
        $(this.$refs[tg]).parent('code').removeClass('text-green-500')
        this.$refs[tg].innerHTML = '複製'
      }, 3000)
    },
  },
}
</script>

<style>
</style>
