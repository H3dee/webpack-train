export class Post {
  constructor(title, img) {
    this.title = title
    this.image = img
    this.date = new Date()
  }

  toString() {
    return JSON.stringify(
      {
        title: this.title,
        image: this.image,
        date: this.date.toJSON(),
      },
      null,
      3
    )
  }

  ping() {
    console.log('ping')
  }
}
