import * as $ from 'jquery'

const connectAnalytics = () => {
  let counter = 0
  let isDestroy = false

  const clickHandler = () => counter++

  $(document).on('click', clickHandler)

  return {
    getClicks() {
      if (isDestroy) return `Analytics is destroyed. Total clicks: ${counter}`
      return counter
    },
    destroy() {
      $(document).off('click', clickHandler)
      isDestroy = true
    },
  }
}

window.analytics = connectAnalytics()
