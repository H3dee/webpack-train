const connectAnalytics = () => {
  let counter = 0
  let isDestroy = false

  const clickHandler = () => counter++

  document.addEventListener('click', clickHandler)

  return {
    getClicks() {
      if (isDestroy) return 'Analytics is destroyed'
      return counter
    },
    destroy() {
      document.removeEventListener('click', clickHandler)
      isDestroy = true
    },
  }
}

window.analytics = connectAnalytics()
