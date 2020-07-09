# vue3-next-demo
Vue 3.0 demo

# 使用版本

Vue 3.0.0-beta.20

# 特性

记录一些比较新的特性，但 Vue 3.0 一直在变，所以以下特性仅供参考

1. data 和 method 都由 setup 方法返回生成

```js
export default {
  setup () {
    return {
      title: 'Vue.js 3.0',
      handleClick () {}
    }
  }
}
```

2. setup 中没有了 this

```js
export default {
  setup () {
    console.log(this) // undefined

    return {
      title: 'Vue.js 3.0',
      handleClick () {}
    }
  }
}
```

3. 如何更新基础/引用数据类型的变量

分别引入 ref 和 reactive，将所需变量包起来即可

* 引用类型直接修改即可

* 而基本类型则需要通过 `变量.value` 的形式来获取/更新

```js
import { ref, reactive } from 'vue'
export default {
  setup () {
    // 引用类型
    const state = reactive({
      count: 100
    })
    // 基本类型
    const color = ref('red')
    return {
      title: 'Vue.js 3.0',
      handleClick () {
         // 引用类型
        state.count++
         // 基本类型
        color.value
      }
    }
  }
}

```

同样的 template 中引用变量的方式与 2.0 一样

注意：基本类型的直接写变量名就行，而不需要写成 `变量.value`

```html
<template>
  <div class="home">
    <p
      :style="{
        color
      }"
    >Hello {{ title }}</p>
    <div>{{ state.count }}</div>
    <button @click="handleClick()">点我试试</button>
  </div>
</template>

```


