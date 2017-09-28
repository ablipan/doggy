import $ from 'jquery'

const config = $.extend({
  el: '#app',
  loadSidebar: '_sidebar.md',
  loadNavbar: null,
  homepage: 'README.md'
}, window.$doggy || {})

export default config
