import { ImageItem } from "~/interface/image"

const prefix = '/image'



export const actions = {
  async uploadFirebase({ commit }, { docid = "", files = [] }) {
    const storage = this.$fire.storage.ref()
    const genTask = async (file) => {
      const targetSrc = `${docid || prefix}/${file.name}`
      const res = await storage.child(targetSrc).put(file)
      console.log(res, file.name)
      return targetSrc
    }
    return await Promise.all(files.map(f => genTask(f)))
  },

  async downloadFirebase({ commit }, src = '') {
    const storage = this.$fire.storage.ref()
    return await storage.child(src).getDownloadURL()
  },

  async upload({ commit }, { id = "", file = new ImageItem() }) {
    try {
      const res = await this.$axios({
        url: `${process.env.IMAGE_SERVER}/figure-stage`,
        data: {
          id: `${prefix}/${id}`,
          ...await file.toAJAX
        },
        method: 'POST',
      })
      return res.data
    } catch (e) {
      console.error(e)
      return false
    }
  },

  async uploads({ dispatch }, { id = "", files = [] }) {
    console.log(process.env.IMAGE_SERVER)
    const res = await Promise.all(files.map(file => dispatch('upload', { id, file })))
    return res.filter(e => e).map(e => e.url)
  }
}
