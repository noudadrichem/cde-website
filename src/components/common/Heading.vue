<template>
  <span :class="className" :is="tag">{{ text }}</span>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    tag: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true,
    },
    className: {
      type: [String, Array],
      required: false
    }
  }
}
</script>

<style lang="scss">
@import '~$styles/base/variables';
@import '~$styles/base/mixins';

h1 {
  font-family: $template-font-family-h1;
  font-weight: $template-font-weight-h1;
  line-height: $template-line-height-h1;
  font-size: $template-font-size-h1;
  color: $template-font-color-h1;
  margin-bottom: 8px;

  @include breakpoint(m) {
    font-size: $template-font-size-h1-m;
  }

  @include breakpoint(s) {
    font-size: $template-font-size-h1-s;
    line-height: $template-line-height-h1-s;
  }
}

h2 {
  font-family: $template-font-family-h2;
  font-weight: $template-font-weight-h2;
  line-height: $template-line-height-h2;
  font-size: $template-font-size-h2;
  color: $template-color-black-lighter;
  margin-bottom: 16px;

  @include breakpoint(m) {
    font-size: $template-font-size-h2-m;
  }

  @include breakpoint(s) {
    font-size: $template-font-size-h2-s;
    line-height: $template-line-height-h2-s;
  }
}

h3 {
  font-family: $template-font-family;
  font-weight: $template-font-weight-h3;
  line-height: $template-line-height-h3;
  font-size: $template-font-size-h3;
  text-transform: uppercase;
  color: rgba($template-color-black-lighter, 0.8);
  letter-spacing: $template-font-letter-spacing-h3;

  @include breakpoint(m) {
    font-size: $template-font-size-h3-m;
  }

  @include breakpoint(s) {
    font-size: $template-font-size-h3-s;
  }
}
</style>
