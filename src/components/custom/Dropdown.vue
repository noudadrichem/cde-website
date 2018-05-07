<template>
  <div class="dropdown">
    <ul class="category-list">
      <DropdownItem v-for="category in data" :item="category" :key="category.id" />
    </ul>
  </div>
</template>

<script>
import Checkbox from '@/components/custom/DropdownItem'
import DropdownItem from '@/components/custom/DropdownItem'

export default {
  name: 'Dropdown',
  components: {
    DropdownItem,
  },
  props: {
    data: {
      type: Array,
      required: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~$styles/app';

  .dropdown {
    width: 280px;
    text-align: left;

    ul.category-list {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      padding: 0;
      border: 1px solid $template-color-white-light;
      border-radius: $template-border-radius;
    }
  }
</style>
