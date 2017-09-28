import config from '../config'
import { initRouter } from '../router'
import { initRender } from '../render'

export function initMixin(proto) {
  proto._init = function () {
    const vm = this
    vm.config = config || {}

    initRouter(vm)
    initRender(vm)
  }
}