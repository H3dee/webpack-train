export class Post {
  constructor(title, img) {
    this.title = title
    this.image = img
    this.date = new Date()
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      image: this.image,
      date: this.date.toJSON(),
    })
  }

  ping() {
    console.log('ping')
  }
}
