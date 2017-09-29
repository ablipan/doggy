import config from '../config'
import { initRouter } from '../router'
import { initRender } from '../render'

export function initMixin(proto) {
  proto._init = function () {
    const vm = this
    vm.config = config || {}

    // init main frame
    initRender(vm)
    // init markdown content by router
    initRouter(vm)
  }
}
