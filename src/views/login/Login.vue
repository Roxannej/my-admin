<template>
  <div class="login-page">
    <div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" plain  @click="login1">登录</el-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/permission.js'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    async login1 () {
      try {
        console.log('1111')
        const data = await login()
        const token = data.token
        this.$store.commit('LOGIN_IN', token)
        this.$router.replace('/')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  background: paleturquoise;
}
</style>
