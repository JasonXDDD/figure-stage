
<template>
  <div class="h-100vh w-100vw grid place-items-center">
    <div class="w-40">
      <div ref="stage">
        <img src="http://www.shadowg-pvc.com/images/ginko3/1.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/2.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/3.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/4.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/5.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/6.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/7.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/8.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/9.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/10.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/11.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/12.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/13.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/14.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/15.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/16.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/17.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/18.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/19.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/20.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/21.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/22.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/23.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/24.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/25.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/26.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/27.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/28.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/29.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/30.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/31.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/32.jpg" alt="" />
        <img src="http://www.shadowg-pvc.com/images/ginko3/33.jpg" alt="" />
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
          console.log(n)
        })
    },
  },
}
</script>

<style>
</style>
