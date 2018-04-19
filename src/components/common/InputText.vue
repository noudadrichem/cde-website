<template>
  <div class="form-control">
    <Icon :width="16" :height="16" :name="`mail-${focused ? 'default' : 'active'}`"/>
    <input v-model="inputValue" type="text" :placeholder="placeholder" @focus="toggleFocus" @blur="toggleFocus">
    <Icon :width="16" :height="16" :name="`arrow-${focused ? 'default' : 'active'}`"/>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  name: 'InputText',
  data: () => ({
    inputValue: null,
    focused: true
  }),
  methods: {
    toggleFocus() {
      this.$set(this, 'focused', !this.focused)
    }
  },
  props: {
    placeholder: {
      required: true,
      type: String,
    }
  },
  components: {
    Icon,
  }
}
</script>

<style lang="scss" scoped>
.form-control {
  position: relative;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 4px 14px 0 rgba(156,155,161,0.24);
  border-radius: 2px;
  width: 250px;
  height: 52px;
  margin: auto;
  padding: 0px 0 0px 16px;
  box-sizing: border-box;

  input[type='text'] {
    border: 0;
    padding: 0 16px 0 16px;
    margin-right: 16px;
    outline: none;
    font-size: 15px;
    height: 100%;
    width: 138px;
    background: inherit;
    border-right: 1px dashed #ebebeb;
    color: #363542;

    &::placeholder {
      color: #9c9ba1;
    }
  }
}
</style>
