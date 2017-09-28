/**
 * Render main content
 */
export function main(config) {
  const aside =
    '<button class="sidebar-toggle">' +
    '<div class="sidebar-toggle-button">' +
    '<span></span><span></span><span></span>' +
    '</div>' +
    '</button>' +
    '<aside class="sidebar">' +
    (config.name
      ? `<h1><a class="app-name-link" data-nosearch>${config.name}</a></h1>`
      : '') +
    '<div class="sidebar-nav"><!--sidebar--></div>' +
    '</aside>'

  return (
    `<main>${aside}` +
    '<section class="content">' +
    '<article class="markdown-section" id="main"><!--main--></article>' +
    '</section>' +
    '</main>'
  )
}
