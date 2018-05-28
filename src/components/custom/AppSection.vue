<template>
  <div class="app">
    <Dropdown :data="categories" />

  </div>
</template>

<script>
import Dropdown from '@/components/custom/Dropdown'

export default {
  data: () => ({
    catgories: []
  }),
  components: {
    Dropdown
  }
}
</script>

<style lang="scss">
</style>
