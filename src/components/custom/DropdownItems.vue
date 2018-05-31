<template>
    <div class="dropdown-items">
        <ul class="category-items">
          <transition-group name="fade">
            <li v-for="(item, index) in items" :key="index">
              <Checkbox :labelText="firstCharUppercase(item.name)" disabled="true" :id="item.name.toLowerCase()"/>
            </li>
          </transition-group>
        </ul>
    </div>
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

      &:last-child {
        border: none;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .25s;
}
.fade-enter {
  transition: none;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
