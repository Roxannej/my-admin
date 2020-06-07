<template>
  <div class="page-403">
    <div>错误403，对不起，你没有权限</div>
    <a @click="backHome" >返回首页</a>
  </div>
</template>

<script>
export default {
  name: 'page403',
  methods: {
    backHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
