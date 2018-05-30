<template>
  <transition name="fade">
    <div class="dropdown-items">
        <ul class="category-items">
            <li v-for="(item, index) in items" :key="index">
              <Checkbox :labelText="firstCharUppercase(item.name)" :id="item.name.toLowerCase()"/>
            </li>
        </ul>
    </div>
  </transition>
</template>

<script>
import Checkbox from '@/components/common/Checkbox'

export default {
  props: {
    items: {
      type: Array,
      required: false
    }
  },
  components: {
    Checkbox,
  },
  methods: {
    firstCharUppercase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~$styles/app';

.dropdown-items {
  width: 280px;
  text-align: left;
  margin: 0 auto;
  height: 327px;
  border: 1px solid $template-color-white-light;
  overflow-y: scroll;

  ul.category-items {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0;
    border-radius: $template-border-radius;

    li {
      display: flex;
      justify-content: flex-start;
      padding: 16px;
      border-bottom: 1px solid $template-color-white-light;
      user-select: none;
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
