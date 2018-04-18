<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <Icon :width="8" :height="8" name="delete"/>
    <br/>
    <Heading tag="h1" text="moet je heading 1?"/>
    <Heading tag="h2" text="moet je heading 2?"/>
    <Heading tag="h3" text="moet je heading 3?"/>
    <br>
    <BodyText text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
  </div>
</template>

<script>
import Logo from '@/components/Logo';
import Icon from '@/components/common/Icon';
import Heading from '@/components/common/Heading';
import BodyText from '@/components/common/BodyText';

export default {
  name: 'Home',
  data: () => ({
    msg: 'Crazy Dutch Experience!',
  }),
  components: {
    Logo,
    Icon,
    Heading,
    BodyText,
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
