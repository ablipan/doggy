# Big

## Second title

Here is normal text, inline code: `var a = 1`, **bold text**，~~deprecate text~~.

> Quotes
> 夫唯不争，故无尤

List

* list 1
* list 2
* list 3

List 2

1. list 4
2. list 5
3. list 6

Code

```js
import vue form 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render(h) {
    h(App)
  }
})
```

Demo

:::demo This is description `cool`

```html
<el-badge is-dot class="item">Badge</el-badge>
<el-badge is-dot class="item">
  <el-button class="share-button" icon="share" type="primary"></el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>

<script>
  console.log('This is awesome')
</script>
```
:::

### Attributes
| Attribute          | Description            | Type            | Accepted Values                 | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value{{test}}          | display value      | string, number          |          —             |    —     |
| max          |  maximum value, shows '{max}+' when exceeded. Only works if `value` is a `Number`   | number  |         —              |     —    |
| is-dot       | if a little dot is displayed   | boolean  |  —  |  false |
| hidden | hidden badge | boolean | — | false |
