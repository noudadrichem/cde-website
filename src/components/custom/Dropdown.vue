<template>
  <div class="dropdown">
    <ul class="category-list">
      <DropdownItem v-for="category in data" :item="category" :key="category.id" />
    </ul>
  </div>
</template>

<script>
import DropdownItem from '@/components/custom/DropdownItem'

export default {
  name: 'Dropdown',
  components: {
    DropdownItem
  },
  props: {
    data: {
      type: Array,
      required: false
    }
  }
}
</script>

<style lang="scss" >
@import '~$styles/app';

  .dropdown {
    width: 280px;
    text-align: left;
    margin: 0 auto;
    max-height: 327px;
    overflow-y: scroll;
    background: white;
    border-radius: $template-border-radius;

    ul.category-list {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      padding: 0;
    }
  }
</style>
