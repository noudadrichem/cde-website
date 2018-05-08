<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: 'BodyText',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~$styles/base/variables';
@import '~$styles/base/mixins';

p {
  font-family: $template-font-family;
  font-weight: $template-font-weight;
  line-height: $template-line-height;
  font-size: $template-font-size;

  @include breakpoint(m) {
    font-size: $template-font-size-m;
  }

  @include breakpoint(s) {
    font-size: $template-font-size-s;
  }
}
</style>
