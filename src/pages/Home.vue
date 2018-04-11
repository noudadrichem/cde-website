<template>
  <div class="home">
    <Logo/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Logo from '@/components/Logo';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Crazy Dutch Experience!',
    };
  },
  components: {
    Logo,
  },
};
</script>

<style lang="scss">
@import '~$styles/app';

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}
</style>
