import { WorkItem } from "~/interface/work"


export const state = () => {
  return {
    works: [],
  }
}

export const mutations = {
  updateWorks(state, works) {
    state.works = works || []
  }

}


export const actions = {

  async getWorks({ commit }) {
    const collection = this.$fire.firestore.collection('works')
    const snapshot = await collection.get()
    const works = snapshot.docs.map((doc) => {
      const item = doc.data()
      item.id = doc.id
      return new WorkItem(item)
    })

    commit('updateWorks', works)
  },

  async addWork({ dispatch, commit }, work = new WorkItem()) {
    const collection = this.$fire.firestore.collection('works')
    await collection.add(work.toAJAX)
    await dispatch('getWorks')
  }
}
