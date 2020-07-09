<template>
  <div class="home">
    <h1>Hello {{ title }}</h1>
  </div>
</template>

<script>
export default {
  setup () {
    return {
      title: 'Vue.js 3.0'
    }
  }
}
</script>
<style scoped>
.home {
  color: red;
}
</style>
