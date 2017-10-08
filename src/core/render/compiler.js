// const marked = require('marked')
const MarkdownIt = require('markdown-it')
const Prism = require('prismjs')
const $ = require('jquery')

const { strip, fetch } = require('../util/strip-tags')
const { cached } = require('../util/core')

let demoId = 1

// function convert(str) {
//   str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
//     return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16))
//   })
//   return str
// }

export default class Compiler {
  constructor(config, router) {
    this.config = config
    this.router = router

    const md = this._initRenderer()

    this.compile = cached(text => {
      if (!text) return text
      return md.render(text)
    })
  }

  _initRenderer() {
    const md = new MarkdownIt({
      highlight(str, lang) {
        const hl = Prism.highlight(str, Prism.languages[lang] || Prism.languages.markup)
        return `<pre v-pre data-lang="${lang}"><code class="lang-${lang}">${hl}</code></pre>`
      },
      table(str) {
        return `<table></table>`
      }
    })

    md.use(require('markdown-it-container'), 'demo', {
      validate(params) {
        return params.trim().match(/^demo\s*(.*)$/)
      },
      render: function (tokens, idx) {
        const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
        if (tokens[idx].nesting === 1) {
          const description = (m && m.length > 1) ? m[1] : ''
          const descriptionHTML = description
            ? md.render(description)
            : ''
          const content = tokens[idx + 1].content
          const html = strip(content, ['script', 'style'])
          let style = fetch(content, 'style')
          let script = fetch(content, 'script')
          style = style ? `<style>${style}</style>` : ''
          script = script ? `<script>${script}</script>` : ''

          return `<div class="d-demo d-demo__${demoId++}">
                    <div class="d-demo__source__style">${style}</div>
                    <div class="d-demo__source__html">${html}</div>
                    <div class="d-demo__source__script">${script}</div>
                    <div class="d-demo__description">${descriptionHTML}<a d-code-toggle class="d-demo__toggle">&lt; &gt;</a></div>
                    <div class="d-demo__code">`
        }
        return '</div></div>'
      }
    })

    return md
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
