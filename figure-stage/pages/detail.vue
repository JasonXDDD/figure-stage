
<template>
  <div class="h-100vh w-100vw grid place-items-center">
    <div class="w-80">
      <div ref="stage">
        <img src="https://andrepolischuk.com/circlr/images/00.jpg" alt="" />
        <img src="https://andrepolischuk.com/circlr/images/01.jpg" alt="" />
        <img src="https://andrepolischuk.com/circlr/images/02.jpg" alt="" />
        <img src="https://andrepolischuk.com/circlr/images/03.jpg" alt="" />
        <img src="https://andrepolischuk.com/circlr/images/04.jpg" alt="" />
        <img src="https://andrepolischuk.com/circlr/images/05.jpg" alt="" />
        <img src="https://andrepolischuk.com/circlr/images/06.jpg" alt="" />
        <img src="https://andrepolischuk.com/circlr/images/07.jpg" alt="" />
        <img src="https://andrepolischuk.com/circlr/images/08.jpg" alt="" />
        <img src="https://andrepolischuk.com/circlr/images/09.jpg" alt="" />
        <img src="https://andrepolischuk.com/circlr/images/10.jpg" alt="" />
        <img src="https://andrepolischuk.com/circlr/images/11.jpg" alt="" />
        <img src="https://andrepolischuk.com/circlr/images/12.jpg" alt="" />
        <img src="https://andrepolischuk.com/circlr/images/13.jpg" alt="" />
        <img src="https://andrepolischuk.com/circlr/images/14.jpg" alt="" />
        <img src="https://andrepolischuk.com/circlr/images/15.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import circlr from 'circlr'
export default {
  name: 'DetailPage',
  mounted() {
    this.init()
  },
  methods: {
    init() {
      circlr(this.$refs.stage)
        .scroll(true)
        .play()
        .on('show', (n) => {
          // console.log(n)
        })
    },
  },
}
</script>

<style>
</style>
