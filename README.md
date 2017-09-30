# Doggy

!! WIP, DO NOT USE !!

Make your IE8 compatible lib's documentation working on IE8 🙄.

Totally inspired by [docsify](https://github.com/QingWei-Li/docsify), some codes are copied from it right now 🤒. If you do not need IE8 compatible, just use the powerful [docsify](https://github.com/QingWei-Li/docsify) instead.

# Quick start

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Doggy demo</title>
  <!--[if lt IE 9]>
  <script src="https://cdn.bootcss.com/es5-shim/4.5.9/es5-shim.min.js"></script>
  <script src="https://cdn.bootcss.com/es5-shim/4.5.9/es5-sham.min.js"></script>
  <![endif]-->
  <!--[if lt IE 8]>
  <script src="https://cdn.bootcss.com/json3/3.3.2/json3.min.js"></script>
  <![endif]-->
  <!--[if lt IE 9]>
  <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv-printshiv.min.js"></script>
  <![endif]-->
  <link rel="stylesheet" href="https://unpkg.com/doggy/dist/themes/vue.min.css">
</head>
<body>
<div id="doggy"></div>
<script>
  window.$doggy = {
    basePath: '/example'
  }
</script>
<script src="https://unpkg.com/doggy/dist/doggy.min.js"></script>
</body>
</html>

```

## Dev

1. `npm i`
2. `npm run dev`
3. open `http://127.0.0.1:8080/example` in browser


## Tools

* [docsify](https://github.com/QingWei-Li/docsify)
* BEM
* Webpack@v1
* jQuery
* Flow
* ESLint
* Babel
* Stylus
* marked
* page.js
  
## Polyfill

* [es5-shim](https://github.com/es-shims/es5-shim) extends ES3的一些方法做扩展，比如String.trim,Array.forEach,Array.map等。
es5-sham则是对ES3做Object的一些ES5的属性方法扩展，如‘Object.create,Object.getPrototypeOf,Object.freeze’等等。
* [json3](https://github.com/bestiejs/json3) 在 IE7及一下的浏览器中实现 JSON 的 stringify 方法和 parse 方法

## TODO

* [ ] Table css
* [ ] Router not working on ie8... Old browsers
  * [ ] Use params instead of hash on old browsers? like: xxx?page=demo.md&id=how-to-use-it

* [ ] Demo block half screen
* [ ] Multi level side menu
* [ ] nanocss
* [ ] Flow
* [ ] Speed up for modern browser
