const config = $.extend({
  el: '#doggy',
  loadSidebar: '_sidebar.md',
  loadNavbar: null,
  homepage: 'README.md'
}, window.$doggy || {})

window.$doggy = config

export default config
