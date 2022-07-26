import { WorkItem } from "~/interface/work"


export const state = () => {
  return {
    works: [],
    status: ""
  }
}

export const mutations = {
  updateWorks(state, works) {
    state.works = works || []
  },

  updateStatus(state, status) {
    state.status = status || ''
  }
}


export const actions = {

  async getWorks({ commit }) {
    commit('updateStatus', 'loading')
    const collection = this.$fire.firestore.collection('works')
    const snapshot = await collection.get()
    const works = snapshot.docs.map((doc) => {
      const item = doc.data()
      item.id = doc.id
      return new WorkItem(item)
    })

    commit('updateWorks', works)
    commit('updateStatus', 'done')
  },

  async addWork({ dispatch, commit }, work = new WorkItem()) {
    const collection = this.$fire.firestore.collection('works')
    const res = await collection.add(work.toAJAX)
    await dispatch('getWorks')
    console.log(res, res.id)
    return res
  },

  async updateWork({ dispatch, commit }, { id = '', work = new WorkItem() }) {
    const collection = this.$fire.firestore.collection('works')
    const res = await collection.doc(id).set(work.toAJAX)
    await dispatch('getWorks')
    console.log(res)
    return res
  }
}
