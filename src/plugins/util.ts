// @ts-ignore
export default ({ app }, inject) => {
  /**
   * 縦画像かを判定する
   * @param {Number} width 幅
   * @param {Number} height 高さ
   * @return {Boolean} 縦画像か
   */
  const isVerticalImage = (width: number, height: number) => {
    return width / height < 1
  }

  inject('util', {
    isVerticalImage
  })
}
