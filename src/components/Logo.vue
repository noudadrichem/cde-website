<template>
  <div class="logo">
    <img src="@/assets/images/logo.png" alt="Crazy Dutch Experience">
  </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style lang="scss">
@import '~$styles/app';

img {
  max-width: 320px;
  height: auto;
  margin: 64px;

  @include breakpoint(s) {
    max-width: 192px;
  }
}
</style>
