<template>
  <div class="login">
    <input type="text" v-model="email">
    <input type="password" v-model="password">

    <button @click="login">login</button>

    {{ $data }}
  </div>
</template>

<script>
import conf from '@/config'

export default {
  name: 'Login',
  data: () => ({
    email: 'info@noudadrichem.com',
    password: 'test1234'
  }),
  methods: {
    login() {
      this.$http.post(`${conf.apiUrl}users/login`, {
        email: this.email,
        password: this.password
      })
      .then(({ body: { token }}) => {
        localStorage.setItem('token', token)
        this.$router.push('/cmsHome')
      })
      .catch(error => console.error({ error }))
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  margin: auto;
  width: 200px;

  input {
    display: block;
    margin: 16px;
  }
}
</style>
