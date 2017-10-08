import config from '../config'
import { initLifecycle, callHook } from './lifecycle'
import { initRouter } from '../router'
import { initRender } from '../render'
import { initEvent } from '../event'
import { isFn } from '../util/core'

export function initMixin(proto) {
  proto._init = function () {
    const vm = this
    vm.config = config || {}

    initLifecycle(vm)
    initPlugin(vm) // Install plugins
    callHook(vm, 'init')
    // init main frame
    initRender(vm)
    // init markdown content by router
    initRouter(vm)
    // init event
    initEvent(vm)
    callHook(vm, 'mounted')
  }
}

function initPlugin(vm) {
  [].concat(vm.config.plugins).forEach(fn => isFn(fn) && fn(vm._lifecycle, vm))
}