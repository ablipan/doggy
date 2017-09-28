import page from 'page'

let lastRoutePath = ''

function getFileName(path) {
  return /\.(md|html)$/g.test(path)
    ? path
    : /\/$/g.test(path) ? `${path}README.md` : `${path}.md`
}

export function routerMixin(proto) {
  proto.route = {}

  proto.getFilePath = function (path) {
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

