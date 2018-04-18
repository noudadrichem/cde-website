<template>
  <span :is="tag">{{ text }}</span>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    tag: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~$styles/base/variables';
@import '~$styles/base/mixins';

h1 {
  font-family: $template-font-family-h1;
  font-weight: $template-font-weight-h1;
  line-height: $template-line-height;
  font-size: $template-font-size-h1;
  color: $template-font-color-h1;

  @include breakpoint(m) {
    font-size: $template-font-size-h1-m;
  }

  @include breakpoint(s) {
    font-size: $template-font-size-h1-s;
  }
}

h2 {
  font-family: $template-font-family-h2;
  font-weight: $template-font-weight-h2;
  line-height: $template-line-height;
  font-size: $template-font-size-h2;

  @include breakpoint(m) {
    font-size: $template-font-size-h2-m;
  }

  @include breakpoint(s) {
    font-size: $template-font-size-h2-s;
  }
}

h3 {
  font-family: $template-font-family-h3;
  font-weight: $template-font-weight-h3;
  line-height: $template-line-height;
  font-size: $template-font-size-h3;

  @include breakpoint(m) {
    font-size: $template-font-size-h3-m;
  }

  @include breakpoint(s) {
    font-size: $template-font-size-h3-s;
  }
}



</style>
