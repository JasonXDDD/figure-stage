
export const WORK_ITEM = Object.freeze({
  cover: '',
  title: '',
  author: '',
  link: '',
})


export class WorkItem {
  constructor(data = {}) {
    this.author = data.author || ''
    this.cover = data.cover || ''
    this.title = data.title || ''
    this.description = data.description || ''
    this.categories = data.categories || []
    this.images = data.images || []
    this.id = data.id || ''
  }

  get total() {
    return this.images.length
  }


  get toAJAX() {
    return {
      author: this.author,
      cover: this.cover,
      categories: this.categories,
      title: this.title,
      description: this.description,
      images: this.images,
      createAt: new Date()
    }
  }

  get cats() {
    return this.categoriesString
  }

  set cats(c) {
    this.categoriesString = c
    this.categories = c.split(',').filter(e => e).filter((e, i, a) => a.indexOf(e) === i)
  }
}


export const defaultWorks = [
  {
    cover: 'https://jasonxddd.me:9000/figure-stage/azur-lane-unicorn/cover.jpg',
    title: '碧藍航線: 獨角獸',
    author: 'JasonXDDD',
    link: 'azur-lane-unicorn',
    total: 20
  },
  {
    cover: 'https://jasonxddd.me:9000/figure-stage/no-game-no-life-zero/cover.png',
    title: '遊戲人生: 休比',
    author: 'JasonXDDD',
    link: 'no-game-no-life-zero',
    total: 20
  },
  {
    cover: 'https://jasonxddd.me:9000/figure-stage/eva-01/cover.JPG',
    title: 'EVA: 初號機獸化',
    author: 'JasonXDDD',
    link: 'eva-01',
    total: 40
  },
  {
    cover: 'https://jasonxddd.me:9000/figure-stage/monster-hunter-rathalos/cover.JPG',
    title: '魔物獵人: 雄火龍',
    author: 'JasonXDDD',
    link: 'monster-hunter-rathalos',
    total: 41
  },
  {
    cover: 'https://jasonxddd.me:9000/figure-stage/milk-rabit-robot/cover.JPG',
    title: '5D2 無敵兔',
    author: 'JasonXDDD',
    link: 'milk-rabit-robot',
    total: 35
  },
  {
    cover: 'https://jasonxddd.me:9000/figure-stage/dark-souls-artorias/cover.jpg',
    title: '黑暗靈魂：亞爾特留斯',
    author: 'JasonXDDD',
    link: 'dark-souls-artorias',
    total: 41
  },
  {
    cover: 'https://jasonxddd.me:9000/figure-stage/halo/cover.jpg',
    title: 'HALO：士官長',
    author: 'JasonXDDD',
    link: 'halo',
    total: 41
  },
  {
    cover: 'https://jasonxddd.me:9000/figure-stage/hololive-minato-aqua/cover.jpg',
    title: 'Hololive：湊阿庫婭',
    author: 'JasonXDDD',
    link: 'hololive-minato-aqua',
    total: 40
  },
  {
    cover: 'https://jasonxddd.me:9000/figure-stage/monogatari-oshino-shinobu/cover.jpg',
    title: '物語系列：忍野忍',
    author: 'JasonXDDD',
    link: 'monogatari-oshino-shinobu',
    total: 41
  },
  {
    cover: 'https://jasonxddd.me:9000/figure-stage/monogatari-yeah/cover.jpg',
    title: '物語系列：斧乃木余接',
    author: 'JasonXDDD',
    link: 'monogatari-yeah',
    total: 41
  },
  {
    cover: 'https://jasonxddd.me:9000/figure-stage/monster-hunter-hunter/cover.jpg',
    title: '魔物獵人：海龍銃槍',
    author: 'JasonXDDD',
    link: 'monster-hunter-hunter',
    total: 41
  },
  {
    cover: 'https://jasonxddd.me:9000/figure-stage/monster-hunter-iceborne/cover.jpg',
    title: '魔物獵人：冰咒龍',
    author: 'JasonXDDD',
    link: 'monster-hunter-iceborne',
    total: 44
  },
  {
    cover: 'https://jasonxddd.me:9000/figure-stage/nier-2b-9s/cover.jpg',
    title: '尼爾：自動人形',
    author: 'JasonXDDD',
    link: 'nier-2b-9s',
    total: 41
  },
  {
    cover: 'https://jasonxddd.me:9000/figure-stage/princess-connect-redive-kiruya/cover.jpg',
    title: '公主連結：凱留',
    author: 'JasonXDDD',
    link: 'princess-connect-redive-kiruya',
    total: 44
  },
  {
    cover: 'https://jasonxddd.me:9000/figure-stage/sekiro/cover.jpg',
    title: 'Sekiro 隻狼',
    author: 'JasonXDDD',
    link: 'sekiro',
    total: 42
  },
  {
    cover: 'https://jasonxddd.me:9000/figure-stage/the-legend-of-zelda-amibo/cover.jpg',
    title: '薩俺達傳說：阿咪寶',
    author: 'JasonXDDD',
    link: 'the-legend-of-zelda-amibo',
    total: 41
  },
]
