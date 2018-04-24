<template>
  <div class="home">
    <Logo/>
    <Heading tag="h1" :text="msg"/>
  </div>
</template>

<script>
import Logo from '@/components/Logo';
import Heading from '@/components/common/Heading';

export default {
  name: 'Home',
  data: () => ({
    msg: 'Crazy Dutch Experience!',
  }),
  components: {
    Logo,
    Heading
  }
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
