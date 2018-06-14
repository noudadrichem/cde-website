<template>
  <p :class="className">{{ text }}</p>
</template>

<script>
export default {
  name: 'BodyText',
  props: {
    text: {
      type: [String, Function],
      required: true
    },
    className: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" >
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
