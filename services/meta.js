

export default {
  name: 'MetaService',
  methods: {
    genMeta(inputTitle, inputDescription, inputCover) {
      const title = inputTitle || '展示舞台 FigureStage'
      const description = inputDescription || ' FigureStage 是一個 360度環繞 展示模型作品的網站，您只需要拍攝各個角度的照片，透過網站上傳您的作品，就能夠完美展示環繞效果，並且您可以嵌入至任何網站或文章。'
      const cover = inputCover || 'https://jasonxddd.github.io/figure-stage/cover.png'
      const color = '#272c35'

      return {
        title,
        meta: [
          { hid: 'theme-color', property: 'theme-color', content: color },
          { hid: 'description', property: 'description', content: description },
          { hid: 'og:type', property: 'og:type', content: 'article' },
          { hid: 'og:title', property: 'og:title', content: title },
          {
            hid: 'og:description',
            property: 'og:description',
            content: description,
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: 'https://jasonxddd.github.io/figure-stage',
          },
          {
            hid: 'og:site_name',
            property: 'og:site_name',
            content: '展示舞台 FigureStage',
          },
          { hid: 'og:image', property: 'og:image', content: cover },
          {
            hid: 'twitter:card',
            property: 'twitter:card',
            content: 'summary',
          },
          { hid: 'twitter:title', property: 'twitter:title', content: title },
          {
            hid: 'twitter:description',
            property: 'twitter:description',
            content: description,
          },
          { hid: 'twitter:image', property: 'twitter:image', content: cover },
        ],
      }
    },

  }
}
