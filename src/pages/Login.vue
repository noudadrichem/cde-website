<template>
  <div class="login-container">

    <div class="login">
      <div class="logo">
        <img src="@/assets/images/crazy-dutch-experience-logo.svg" alt="">
      </div>

      <p class="intro">U wordt zometeen doorverwezen naar het CMS van de Crazy Dutch Experience website,
        nadat u heeft ingelogd, kunt u hier de content van de website veranderen.</p>
      <p class="warning"><strong>Let op:</strong> u kunt alleen de content veranderen, de structuur en elementen staan vast.</p>
      <p class="label">Email</p>
      <input type="text" v-model="email">
      <p class="label">Wachtwoord</p>
      <input type="password" v-model="password">

      <Button styling="primary full" @click.native="login" text="Login"/>
    </div>

  </div>
</template>

<script>
import conf from '@/config'
import Button from '@/components/common/Button'

export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: ''
  }),
  components: { Button },
  methods: {
    login() {
      this.$http.post(`${conf.apiUrl}users/login`, {
        email: this.email,
        password: this.password
      })
      .then(({ body: { token }}) => {
        if(token) {
          localStorage.setItem('token', token)
          this.$router.push('/cmsHome')
        } else {
          console.log('hoi, mag lekker niet.');
        }
      })
      .catch(error => console.error({ error }))
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;

}

.logo {
  width: 120px;
  padding: 32px 0 0 0;
  margin: auto;
  img {
    width: 100%;
  }
}

.login {
  width: 574px;
  height: auto;
  background: #fff;
  border-color: #EBEBEB;
  border-radius: 2px;
  border-width: 1px;

  input {
    display: block;
    margin-left: 40px;
    margin-bottom: 16px;
    padding: 16px;
    width: 460px;
    height: auto;
    border-style: solid;
    border-color: #EBEBEB;
    border-radius: 2px;
    border-width: 1px;
    font-size: 15px;
    outline: none;
  }
}

.intro {
  padding-left: 40px;
  padding-top: 32px;
  padding-bottom: 16px;
  width: 494px;
  height: auto;
  line-height: 22px;
}

.warning {
  padding-left: 40px;
  padding-bottom: 16px;
  width: 494px;
  height: auto;
  line-height: 22px;
}

.label {
  font-weight: 800;
  padding-left: 40px;
}

button {
  width: 494px;
  height: auto;
  margin-top: 24px;
  margin-left: 40px;
  margin-bottom: 40px;
  display: block;
  text-align: center;
  padding: 16px;
}
</style>
