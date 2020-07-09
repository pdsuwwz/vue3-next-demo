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

<script>
import {
  defineComponent,
  ref,
  reactive
} from 'vue'

export default defineComponent({
  setup () {
    const state = reactive({
      count: 100
    })
    const color = ref('red')

    return {
      color,
      state,
      title: 'Vue.js 3.0',
      handleClick () {
        color.value = color.value === 'red' ? 'green' : 'red'
        state.count++
      }
    }
  }
})
</script>
<style scoped>
.home {
  font-size: 30px;
  font-weight: bolder;
}
</style>
