const prefix = '/image'

export const actions = {
  async upload({ commit }, { docid = "", files = [] }) {
    const storage = this.$fire.storage.ref()
    const genTask = async (file) => {
      const targetSrc = `${docid || prefix}/${file.name}`
      const res = await storage.child(targetSrc).put(file)
      console.log(res, file.name)
      return targetSrc
    }
    return await Promise.all(files.map(f => genTask(f)))
  },

  async download({ commit }, src = '') {
    const storage = this.$fire.storage.ref()
    return await storage.child(src).getDownloadURL()
  }
}
