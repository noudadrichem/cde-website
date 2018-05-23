<template>
  <div :class="['input-text', { active: focused }]">
    <Icon :width="16" :height="16" :name="iconType" :active="focused"/>
    <input v-model="inputValue" :type="type" :placeholder="placeholder" @focus="toggleFocus" @blur="toggleFocus">
    <Icon v-if="iconType !== 'name'" :width="16" :height="16" :name="iconType == 'name' ? '' : 'arrow'" :active="focused"/>
  </div>
</template>

<script>
/* eslint-disable */
import Icon from './Icon'

export default {
  name: 'InputText',
  data: () => ({
    inputValue: null,
    focused: false
  }),
  methods: {
    toggleFocus() {
      this.$set(this, 'focused', !this.focused)
    }
  },
  props: {
    placeholder: {
      required: true,
      type: String
    },
    type: {
      required: true,
      type: String
    },
    iconType: {
      required: false,
      type: String
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
.input-text {
  position: relative;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 4px 14px 0 rgba(156,155,161,0.24);
  border-radius: 2px;
  height: 52px;
  margin: auto;
  padding: 0px 0 0px 16px;
  box-sizing: border-box;
  transition: 200ms;
  justify-content: space-between;
  max-width: 400px;
  width: 100%;

  &.active {
    box-shadow: 0 4px 14px 0 rgba(156,155,161,0.46);
  }

  input {
    border: 0;
    padding: 0 16px 0 16px;
    outline: none;
    font-size: 15px;
    height: 100%;
    background: inherit;
    color: #363542;
    width: 100%;

    &::placeholder {
      color: #9c9ba1;
    }
  }

  .icon {
    &:last-child {
      margin-right: 32px;

      &:before {
        content: '';
        width: 1px;
        height: 52px;
        display: block;
        margin-right: 14px;
        border-left: 1px dashed #ebebeb;
      }
    }
  }
}
</style>
