
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

  base64() {
    const self = this
    if (!this.blob) return null

    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        resolve(e.target.result)
      }
      reader.readAsDataURL(self.blob)
    })
  }

  get toAJAX() {
    return (async () => ({
      file: await this.base64(),
      fileType: this.blob.type,
      fileName: this.blob.name,
    }))()
  }

  get src() {
    return this.url || this.blob ? URL.createObjectURL(this.blob) : ''
  }

}
