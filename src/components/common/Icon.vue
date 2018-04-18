<template>
<div :class="`icon ${name}`" :style="{ width, height}">
    <img :src="iconsUrl(name)"/>
</div>
</template>

<script>
export default {
  name: 'Icon',
  props: ['width', 'height', 'name'],
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    iconsUrl(iconName) {
      return require(`@/assets/images/icons/${iconName}.svg`);
    },
  },
}
</script>

<style lang="scss" scoped>
.icon img {
  width: 100%;
}
</style>
