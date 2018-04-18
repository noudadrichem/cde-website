<template>
  <div class="home">
    <Logo/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Logo from '@/components/Logo';
import Checkbox from '@/components/common/Checkbox';

export default {
  name: 'Home',
  data: () => ({
    msg: 'Crazy Dutch Experience!',
    labelText: 'Some label text here',
  }),
  components: {
    Logo,
    Checkbox,
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
