export default class {
  /**
   * 交差オブザーバーAPIを使用して指定した要素の交差状態を監視するクラス
   * @param {Object} params パラメータ
   * @param {String} params.targetSelector 対象セレクタ
   * @param {Object} params.option IntersectionObserverのオプション
   * @param {String} params.inviewClass 交差した要素に付加
   * するクラス
   */
  constructor({ targetSelector = '.js-intersection', option = {}, inviewClass = 'is-inview' } = {}) {
    const targets = document.querySelectorAll(targetSelector)
    if (targets.length === 0) {
      return
    }

    // @ts-ignore
    this.intersections = targets
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
