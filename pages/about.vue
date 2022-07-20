<template>
  <article class="p-4 pad:px-0 pad:py-8 w-full pad:w-[60rem] mx-auto text-white/80 leading-relaxed font-mono">
    <div class="flex">
      <div class="mr-auto">
        <h2 class="title">關於 FigureStage</h2>
        <p class="subtitle">透過 FigureStage 來展示你的收藏吧！</p>
      </div>
      <img src="icon-black.png" class="h-20" alt="" />
    </div>
    <p class="mt-8 text-white p-8 bg-slate-500/20 rounded-xl">
      FigureStage 是一個
      <span class="point">360度環繞</span>
      展示模型作品的網站，您只需要拍攝各個角度的照片，透過網站上傳您的作品，就能夠完美展示環繞效果，並且您可以嵌入至任何網站或文章。
    </p>
    <br />

    <h3 class="mt-8 topic font-bold">我要如何拍攝作品呢？</h3>
    <p>FigureStage 能夠逐一連續循環播放您的照片集，任何 <span class="point">具有連續、循環的照片集</span> 都能夠展現出效果。</p>
    <p>因此，拍攝方法有非常多種，細膩程度與展現效果也有所不同，以下是一個非常簡單便捷的做法提供給您：</p>

    <p class="mt-4">首先，您必須準備以下設備：</p>
    <ul class="list-outside pad:list-inside list-disc">
      <li><span class="text-sky-300">手機</span>，或是您有其他的拍攝設備也可以</li>
      <li><span class="text-sky-300">支架</span>，用來固定手機用的</li>
      <li><span class="text-sky-300">模型</span>，您的展示作品</li>
      <li><span class="text-sky-300">旋轉展示台</span>，您也可以自行拿光碟及瓶蓋 DIY，只要能夠穩定旋轉 360 度即可</li>
      <li><span class="text-sky-300">良好的環境背景及燈光充足</span></li>
    </ul>

    <p class="mt-4 font-bold">操作步驟：</p>
    <ul class="list-outside pad:list-inside list-decimal">
      <li>將環境與展示台整理好，並將模型放在展示台正中央</li>
      <li>調整手機將畫面對準模型，嘗試旋轉展示台，確保模型始終保持在中間</li>
      <li>一切準備就緒後，即可開始選轉拍攝</li>
      <li>完成後，將照片及上傳至 FigureStage 並發布</li>
      <li>完成撒花</li>
    </ul>

    <p class="mt-4 text-pink-500 font-bold">請注意：</p>
    <ul class="list-outside pad:list-inside list-disc">
      <li>建議可以每隔15度拍攝一次，照片張數會落在20多張左右，會有較好的效果呈現</li>
      <li>若照片張數越多、照片解析度越高，呈現效果會更流暢、更完美，缺點就是載入照片時間會較長</li>
      <li>拍攝時請留意不要震動到手機，展示時就會有突然震動一下的狀況發生</li>
      <li>請關閉自動對焦、自動調整亮度、自動變換環境顏色的功能，避免每張照片有不同的聚焦及環境顏色不同的問題</li>
    </ul>

    <h3 class="mt-8 topic">FigureStage 是如何做到的？</h3>
    <p>
      FigureStage 是受到
      <a class="text-pink-300 cursor-pointer after:content-['↗']" href="https://home.gamer.com.tw/artwork.php?sn=5177559" target="_blank"
        >巴哈姆特這篇文章</a
      >
      得到靈感，並透過
      <a class="text-pink-300 cursor-pointer after:content-['↗']" href="https://www.npmjs.com/package/circlr" target="_blank">circlr.js</a>
      做為基礎、透過 Nuxt 進行開發完成的，原始碼都會開源至
      <a class="text-pink-300 cursor-pointer after:content-['↗']" href="https://github.com/JasonXDDD/figure-stage" target="_blank">GitHub</a> 上。
    </p>

    <h3 class="mt-8 topic">關於作者</h3>
    <p>
      如果有任何問題歡迎與我聯絡：
      <a class="text-pink-300 cursor-pointer" href="mailto:jason1022liu@gmail.com" target="_blank"> jason1022liu@gmail.com </a>
    </p>
    <p>
      FigureStage：
      <a class="text-pink-300 cursor-pointer" href="https://jasonxddd.github.io/figure-stage" target="_blank">
        https://jasonxddd.github.io/figure-stage
      </a>
    </p>
    <p>
      作者 GitHub：
      <a class="text-pink-300 cursor-pointer" href="https://github.com/jasonxddd" target="_blank"> https://github.com/jasonxddd </a>
    </p>
  </article>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {}
  },
  mounted() {
    console.log('<<<<<', process.env.NODE_ENV)
  },
  methods: {
    counter(n) {
      return new Array(n).fill(0)
    },
  },
}
</script>
