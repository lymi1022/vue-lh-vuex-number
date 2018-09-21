<template>
  <div>
    <h1>页面</h1>
    <div @click="handleClickPage(1)">a</div>
    <div @click="handleClickPage(2)">b</div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    handleClickPage (v) {
      if (v === 1) {
        this.$router.push({
          path: '/index/a'
        })
      } else {
        this.$router.push({
          path: '/index/b'
        })
      }
    }
  }
}
</script>
