
<template>
  <div class="p-4 pad:px-0 pad:py-8 w-full pad:w-[60rem] mx-auto leading-relaxed font-mono">
    <h2 class="title text-white/80">編輯作品</h2>

    <div class="space-y-6 mt-8 text-white">
      <div class="">
        <label for="title"> 標題： </label>
        <input id="title" type="text" class="input" placeholder="請輸入標題" />
      </div>
      <div class="">
        <label for="author"> 作者： </label>
        <input id="author" type="text" class="input" placeholder="請輸入姓名" />
      </div>
      <div class="">
        <label for="description"> 描述： </label>
        <textarea id="description" rows="5" type="text" class="input" placeholder="加入一些說明吧" />
      </div>
      <div class="">
        <label for="categories"> 標籤(請用 "<code>,</code>" 隔開)： </label>
        <input id="categories" type="text" class="input" placeholder="請用小寫逗點隔開不加入空格" />
      </div>
      <div class="">
        <label for="images"> 作品： </label>
        <input id="images" type="file" accept="image/*" class="input-file" multiple @change="fileChange" />
        <div class="mt-2 flex flex-wrap items-center" ref="preview" />
      </div>
    </div>
  </div>
</template>

<script>
import { ImageItem } from '~/interface/image'

export default {
  name: 'EditPage',
  data() {
    return {
      files: [],
    }
  },

  methods: {
    async fileChange(e) {
      this.files = Array.from(e.target.files)
      await this.updatePreview()
    },

    async updatePreview() {
      const images = this.files.map((e) => new ImageItem({ blob: e }))
      const nodes = await Promise.all(images.map((e) => e.image()))
      nodes.forEach((n) => {
        n.className = 'object-contain bg-slate-700 w-[10rem] h-[10rem] rounded block m-2'
        this.$refs.preview.append(n)
      })
    },
  },
}
</script>

<style>
</style>
