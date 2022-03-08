export default class {
  constructor(targetSelector: string, option: object, inviewClass: string = 'is-inview') {
    // @ts-ignore
    this.intersections = document.querySelectorAll(targetSelector)
    // @ts-ignore
    this.option = option
    // @ts-ignore
    this.inviewClass = inviewClass
    this.init()
  }

  init() {
    const observer = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          // @ts-ignore
          entry.target.classList.add(this.inviewClass)
        }
      })
    // @ts-ignore
    }, this.option)
    // @ts-ignore
    this.intersections.forEach((intersection) => {
      observer.observe(intersection)
    })
  }
}
