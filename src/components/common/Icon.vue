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
    },
    active: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    iconsUrl(iconName) {
      return require(`@/assets/images/icons/${iconName}-${this.active ? 'active' : 'default'}.svg`);
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  display: flex;
  align-items: center;
  background: inherit;

  img {
    max-width: 100%;
    object-fit: contain;
    background: inherit;
  }
}
</style>
