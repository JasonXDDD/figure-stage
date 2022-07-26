
export class ImageItem {

  constructor({ blob, url, load } = {}) {
    this.blob = blob || null;
    this.url = url || ''
    this.load = load || null
  }

  image() {
    const self = this
    return new Promise((resolve) => {
      const image = new Image()
      image.onload = () => {
        if (self.load) self.load()
        resolve(image)
      }
      image.src = self.url ? self.url : URL.createObjectURL(self.blob)
    })
  }

}
