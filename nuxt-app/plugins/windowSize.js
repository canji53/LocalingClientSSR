import Vue from "vue"

Vue.use({
  install(Vue) {
    const $window = Vue.observable({
      width: 0,
      height: 0,
    })
    let queue = null
    const wait = 100

    const getWindowSize = () => {
      clearTimeout(queue)

      queue = setTimeout(function () {
        if (process.client) {
          $window.width = document.documentElement.clientWidth
          $window.height = document.documentElement.clientHeight
        }
      }, wait)
    }

    if (process.client) {
      global.addEventListener("resize", getWindowSize)
    }
    getWindowSize()

    Vue.prototype.$window = $window
  },
})
