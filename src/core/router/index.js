import page from 'page'

const { isAbsolutePath, getPath } = require('./util')

let lastRoutePath = ''

function getFileName(path) {
  return /\.(md|html)$/g.test(path)
    ? path
    : /\/$/g.test(path) ? `${path}README.md` : `${path}.md`
}

export function routerMixin(proto) {
  proto.route = {}

  proto.getBasePath = function () {
    return this.config.basePath
  }

  proto.getFilePath = function (path) {
    const base = this.getBasePath()
    path = isAbsolutePath(path) ? path : getPath(base, path)
    return getFileName(path)
  }
}

function updateRender(vm) {
  const { path } = vm.route

  if (lastRoutePath === path) {
    return
  }
  vm.$fetch()
  lastRoutePath = path
}

export function initRouter(vm) {
  const config = vm.config
  page((route) => {
    vm.route = {
      path: route.params[0]
    }
    console.log(route)
    updateRender(vm)
  })
  page.base(config.basePath || '/')
  page({
    hashbang: true
  })
}

