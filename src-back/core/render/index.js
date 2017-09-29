import $ from 'jquery'
import { Compiler } from './Compiler'
import { main } from './tpl'

export function renderMixin(proto) {
  proto._renderTo = function (el, content) {
    $(el).html(content)
  }

  proto._renderSidebar = function (text) {
    // const { maxLevel, subMaxLevel, loadSidebar } = this.config

    this._renderTo('.sidebar-nav', this.compiler.sidebar(text))
  }

  proto._renderMain = function (text) {
    if (!text) {
      text = 'not found'
    }
    const html = this.isHTML ? text : this.compiler.compile(text)
    this._renderTo('.markdown-section', html)
  }
}

export function initRender(vm) {
  const config = vm.config
  const id = config.el || '#app'
  // Init markdown compiler
  vm.compiler = new Compiler(config, vm.router)

  if ($(id).length > 0) {
    const html = main(config)
    // Render main app
    vm._renderTo(id, html, true)
  }
}
