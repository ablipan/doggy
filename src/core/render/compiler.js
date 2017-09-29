const marked = require('marked')
const Prism = require('prismjs')
const { cached } = require('../util/core')

export default class Compiler {
  constructor(config, router) {
    this.config = config
    this.router = router

    // const renderer = new marked.Renderer()
    const renderer = this._initRenderer()

    marked.setOptions({
      renderer: renderer
    })

    this.compile = cached(text => {
      if (!text) return text
      return marked(text)
    })
  }

  _initRenderer() {
    const renderer = new marked.Renderer()

    renderer.heading = function (text, level) {
      return `<h${level}><a class="d-markdown__anchor" href="#"><span>${text}</span></a></h${level}>`
    }

    renderer.paragraph = function (text) {
      return `<p>${text}</p>`
    }

    // highlight code
    renderer.code = function (code, lang = '') {
      const hl = Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)
      return `<pre v-pre data-lang="${lang}"><code class="lang-${lang}">${hl}</code></pre>`
    }

    return renderer
  }

  /**
   * Compile sidebar md to html
   */
  sidebar(text, level) {
    // const currentPath = this.router.getCurrentPath()
    let html = ''
    if (text) {
      html = this.compile(text)
      html = html && html.match(/<ul[^>]*>([\s\S]+)<\/ul>/g)[0]
    } else {
      // const tree = this.cacheTree[currentPath] || genTree(this.toc, level)
      // html = treeTpl(tree, '<ul>')
      // this.cacheTree[currentPath] = tree
    }

    return html
  }
}
