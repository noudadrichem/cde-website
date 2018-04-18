<template>
<div :class="`icon ${name}`" :style="{
    width: `${width}px`,
    height: `${height}px`,
    }">
  <img :src="iconsUrl(name)" />
</div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    width: {
      type: Number,
      required: false
    },
    height: {
      type: Number,
      required: false
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
