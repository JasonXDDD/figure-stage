
<template>
  <div class="p-4 pad:px-0 pad:py-8 w-full pad:w-[60rem] mx-auto leading-relaxed font-mono">
    <h2 class="title text-white/80">編輯作品</h2>

    <div class="space-y-6 mt-8 text-white">
      <div class="">
        <label for="title"> 標題： </label>
        <input id="title" v-model="work.title" type="text" class="input" placeholder="請輸入標題" />
      </div>
      <div class="">
        <label for="author"> 作者： </label>
        <input id="author" v-model="work.author" type="text" class="input" placeholder="請輸入姓名" />
      </div>
      <div class="">
        <label for="description"> 描述： </label>
        <textarea id="description" v-model="work.description" rows="5" type="text" class="input" placeholder="加入一些說明吧" />
      </div>
      <div class="">
        <label for="categories"> 標籤(請用 "<code>,</code>" 隔開)： </label>
        <input id="categories" v-model="work.cats" type="text" class="input" placeholder="請用小寫逗點隔開不加入空格" />
      </div>
      <div class="">
        <label for="cover"> 封面： </label>
        <input id="cover" type="file" accept="image/*" class="input-file" @change="coverChange" />
        <!-- empty -->
        <div v-if="!cover.src" class="mt-2 rounded-md h-[10rem] w-[10rem] bg-white/10 grid place-items-center">
          <div class="flex items-center">
            <outline-emoji-sad-icon class="w-6 h-6 mr-1" />
            <span>沒東西</span>
          </div>
        </div>

        <img v-else :src="cover.src" class="mt-2 object-cover bg-slate-700 w-[10rem] h-[10rem] rounded block" />
      </div>
      <div class="">
        <label for="images"> 作品： </label>
        <input id="images" type="file" accept="image/*" class="input-file" multiple @change="fileChange" />
        <!-- empty -->
        <div v-if="files.length === 0" class="mt-2 rounded-md min-h-[10rem] bg-white/10 grid place-items-center">
          <div class="flex items-center">
            <outline-emoji-sad-icon class="w-6 h-6 mr-1" />
            <span>沒東西</span>
          </div>
        </div>
        <draggable v-model="files" v-bind="dragOptions" @start="drag = true" @end="drag = false">
          <transition-group type="transition" tag="div" :name="!drag ? 'flip-list' : null" class="mt-2 flex flex-wrap gap-4 items-center">
            <div v-for="(file, fileid) in files" :key="file.id" class="relative">
              <button class="absolute -top-2 -right-2 p-1 bg-red-500 rounded-full" @click="files.splice(fileid, 1)">
                <outline-x-icon class="h-4 w-4" />
              </button>
              <img class="object-contain bg-slate-700 w-[10rem] h-[10rem] rounded block" :src="file.image" />
              <p class="text-center">排序 {{ fileid + 1 }}</p>
            </div>
          </transition-group>
        </draggable>
      </div>

      <div class="flex justify-end">
        <button class="rounded-md bg-white hover:bg-cyan-500 font-bold text-slate-700 hover:text-white flex items-center p-2" @click="doSubmit">
          {{ process ? '處理中' : '提交作品' }}
          <outline-cog-icon v-if="process" class="animate-spin ml-20 h-6 w-6" />
          <outline-arrow-right-icon v-else class="ml-20 h-6 w-6" />
        </button>
      </div>
    </div>

    <div class="fixed top-0 left-0 w-screen h-screen z-10 bg-white/10 text-white grid place-items-center" v-if="process">
      <div class="flex items-center">
        <outline-cog-icon class="h-8 w8 animate-spin mr-1" />
        <span class="font-bold">{{ process }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { WorkItem } from '~/interface/work'
import { ImageItem } from '~/interface/image'

export default {
  name: 'EditPage',
  components: {
    draggable,
  },
  data() {
    return {
      files: [],
      drag: false,
      work: new WorkItem(),
      cover: new ImageItem(),

      process: '',
    }
  },

  computed: {
    dragOptions() {
      return {
        animation: 100,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      }
    },
  },

  mounted() {
    console.log(process.env.IMAGE_SERVER)
  },

  methods: {
    coverChange(e) {
      this.cover = new ImageItem({ blob: e.target.files[0] })
    },
    fileChange(e) {
      this.files = Array.from(e.target.files).map((e, i) => ({
        id: i,
        data: new ImageItem({ blob: e }),
        image: URL.createObjectURL(e),
      }))
    },

    /// ///////////////////////////
    // submit flow
    /// //////////////////////////

    async doSubmit() {
      try {
        this.process = '上傳作品'
        // const { cover, files } = this.outputFiles({ cover: this.cover, files: this.files })
        const target = await this.$store.dispatch('work/addWork', this.work)

        this.process = '上傳圖片'
        const res = await this.$store.dispatch('image/uploads', {
          id: target.id,
          files: [this.files.map((e) => e.data), this.cover].flat(),
        })
        this.work.cover = res.pop()
        this.work.images = res

        this.process = '更新作品內容'
        await this.$store.dispatch('work/updateWork', { id: target.id, work: this.work })

        this.process = '完成！'
        setTimeout(() => {
          this.process = ''
          this.$router.push('/')
        }, 1000)
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>

<style>
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.3;
}
</style>
