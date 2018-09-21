<template>
  <div>
    <h1>登录页</h1>
    <div @click="handleClickLogin">登录</div>
  </div>
</template>
<script>
export default {
  methods: {
    handleClickLogin () {
      window.localStorage.token = 'token'
      const queryUrl = this.$router.query && this.$router.query.url
      this.$router.push({
        path: queryUrl || '/index'
      })
    }
  }
}
</script>
