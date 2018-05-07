<template>
  <li :class="['category-item', { active: isActive }]">
    <div class="category-item-title" @click="isActive = !isActive">
      <Icon :name="item.name.replace(/\s+/g,'-').toLowerCase()" :width="16" :height="16" :active="true"/>
      {{item.name}}
      <Icon name="chevron" :width="16" :height="16" :active="true"/>
    </div>
    <transition name="fade">
      <ul v-if="isActive" class="category-item-list">
        <li v-for="(item, index) in item.categoryItems" :key="index">
          <Checkbox :labelText="item" :id="item.toLowerCase()"/>
        </li>
      </ul>
    </transition>
  </li>
</template>

<script>
import Checkbox from '@/components/common/Checkbox';
import Icon from '@/components/common/Icon';

export default {
  name: 'DropdownItem',
  data: () => ({
    isActive: false
  }),
  components: {
    Checkbox,
    Icon
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~$styles/app';

li.category-item {
  list-style-type: none;
  overflow: hidden;
  position: relative;

  &.active {
    .category-item-title {
      opacity: 1;

      .icon:last-child {
        transform: rotate(90deg);
      }
    }

    ul.category-item-list {
      height: auto;
    }
  }

  .category-item-title {
    padding: 16px;
    background-color: $template-color-white-light;
    opacity: 0.4;
    user-select: none;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .icon:first-child {
      margin-right: 16px;
    }

    .icon:last-child {
      margin-left: auto;
      transform: rotate(-90deg);
    }
  }

  ul.category-item-list {
    padding: 0;
    width: 100%;
    position: relative;

    li {
      display: flex;
      justify-content: flex-start;
      padding: 16px;
      border-bottom: 1px solid $template-color-white-light;
      user-select: none;

      &:last-child {
        border: none;
      }
    }
  }
}

.fade-enter-active {
  transition: all .25s;
  top: 0px;
}

.fade-leave-active {
  transition: all 0s;
}

.fade-leave-to {
  top: 0px;
}

.fade-enter{
  opacity: 0;
  top: 8px;
}
</style>
