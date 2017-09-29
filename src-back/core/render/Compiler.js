import marked from 'marked'
import { cached } from '../util/core'

export class Compiler {
  constructor(config, router) {
    this.config = config
    this.router = router

    const renderer = this._initRenderer()

    marked.setOptions({
      renderer: renderer
    })

    this.compile = cached(text => {
      let html = ''
      if (!text) return text
      html = marked(text)
      return html
    })
  }

  _initRenderer() {
    const renderer = new marked.Renderer()
    // ...

    return renderer
  }

  /**
   * Compile sidebar md to html
   */
  sidebar(text, level) {
    // const currentPath = this.router.getCurrentPath()
    // let html = ''
    //
    // if (text) {
    //   html = this.compile(text)
    //   html = html && html.match(/<ul[^>]*>([\s\S]+)<\/ul>/g)[0]
    // } else {
    //   const tree = this.cacheTree[currentPath] || genTree(this.toc, level)
    //   html = treeTpl(tree, '<ul>')
    //   this.cacheTree[currentPath] = tree
    // }

    return ''
  }
}
