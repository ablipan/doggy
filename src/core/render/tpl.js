/**
 * Render main content
 */
export function main(config) {
  const aside =
    '<aside class="d-sidebar">' +
    (config.name
      ? `<h1><a class="d-sidebar__home" data-nosearch>${config.name}</a></h1>`
      : '') +
    '<div class="d-sidebar__nav"><!--sidebar--></div>' +
    '</aside>'

  return (
    `<main>${aside}` +
    '<section class="d-content">' +
    '<article class="d-markdown" id="main"><!--main--></article>' +
    '</section>' +
    '</main>'
  )
}
