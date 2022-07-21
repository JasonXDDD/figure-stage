<template>
  <div class="grid grid-cols-2 pad:grid-cols-6 gap-0">
    <card-item v-for="(e, i) in $store.state.works" :key="i" :cover="e.cover" :title="e.title" :link="e.link" :author="e.author" />
  </div>
</template>

<script>
import CardItem from '~/components/common/card'

export default {
  name: 'IndexPage',
  components: { CardItem },
  data() {
    return {}
  },
  async mounted() {
    console.log('<<<<<', process.env.NODE_ENV)
    const collection = this.$fire.firestore.collection('works')
    const snapshot = await collection.get()
    const items = snapshot.docs.map((doc) => {
      const item = doc.data()
      item.id = doc.id
      return item
    })

    console.log(items)
  },
  methods: {
    counter(n) {
      return new Array(n).fill(0)
    },
  },
}
</script>
