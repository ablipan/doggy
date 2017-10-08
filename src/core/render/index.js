import $ from 'jquery'
import { callHook } from '../init/lifecycle'
import Compiler from './compiler'
import { main } from './tpl'

export function renderMixin(proto) {
  proto._renderTo = function (el, content) {
    $(el).html(content)
  }

  proto._renderSidebar = function (text) {
    this._renderTo('.d-sidebar__nav', this.compiler.sidebar(text))
  }

  proto._renderMain = function (text) {
    if (!text) {
      text = 'not found'
    }
    // const html = this.isHTML ? text : this.compiler.compile(text)
    // this._renderTo('.d-markdown', html)

    callHook(this, 'beforeEach', text, result => {
      const html = this.isHTML ? result : this.compiler.compile(result)
      callHook(this, 'afterEach', html, text => {
        this._renderTo('.d-markdown', text)
        callHook(this, 'doneEach')
        callHook(this, 'ready')
      })
    })
  }
}

export function initRender(vm) {
  const config = vm.config
  const id = config.el || '#doggy'
  // Init markdown compiler
  vm.compiler = new Compiler(config, vm.router)

  if ($(id).length > 0) {
    const html = main(config)
    // Render main app
    vm._renderTo(id, html, true)
  }
}
