import $ from 'jquery'
import 'es6-promise/auto'

import { initMixin } from './init'
import { routerMixin } from './router'
import { renderMixin } from './render'
import { fetchMixin } from './fetch'

$(function () {
  new Doggy()
})

function Doggy() {
  this._init()
}

const proto = Doggy.prototype

initMixin(proto)
routerMixin(proto)
renderMixin(proto)
fetchMixin(proto)
