import 'es6-promise/auto'

import { initMixin } from './init'
import { renderMixin } from './render'
import { routerMixin } from './router'
import { fetchMixin } from './fetch'
import './global'

function Doggy() {
  this._init()
}

const proto = Doggy.prototype

initMixin(proto)
renderMixin(proto)
routerMixin(proto)
fetchMixin(proto)

$(function () {
  new Doggy()
})
