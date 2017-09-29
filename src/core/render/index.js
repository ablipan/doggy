import $ from 'jquery'
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
    const html = this.isHTML ? text : this.compiler.compile(text)
    this._renderTo('.d-markdown', html)
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
