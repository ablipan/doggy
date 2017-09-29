import $ from 'jquery'

const cache = {}

export function fetchMixin(proto) {
  proto._fetch = function (url, callback) {
    const cached = cache[url]

    if (cached) {
      return {
        then: cb => cb(cached)
      }
    }

    return new Promise((resolve, reject) => {
      $.get(url).done(function (text) {
        resolve(text)
        cache[url] = text
      }).fail(function () {
        resolve(null)
      })
    })
  }

  proto.$fetch = function () {
    const { path } = this.route
    const { loadNavbar, loadSidebar } = this.config

    // Current page is html
    this.isHTML = /\.html$/g.test(path)

    this._fetch(this.getFilePath(path)).then((text) => {
      this._renderMain(text)
    })

    if (loadSidebar) {
      this._fetch(this.getFilePath(loadSidebar)).then((text) => {
        this._renderSidebar(text)
      })
    }
  }
}
