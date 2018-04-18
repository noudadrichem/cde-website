<template>
  <div class="home">
    <Logo/>
    <h1>{{ msg }}</h1>
    <Icon width="8px" height="8px" name="delete"/>
  </div>
</template>

<script>
import Logo from '@/components/Logo';
import Icon from '@/components/common/Icon';

export default {
  name: 'Home',
  data: () => ({
    msg: 'Crazy Dutch Experience!',
  }),
  components: {
    Logo,
    Icon,
  },
};
</script>

<style lang="scss">
@import '~$styles/app';

.home {
  min-height: 100vh;
  width: 100%;
  text-align: center;
}
</style>
