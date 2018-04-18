<template>
  <div class="checkbox-container">
    <input v-model="checked" :id="id" type="checkbox">
    <label :class="{checked}" class="checkbox" :for="id"></label>
    <label v-show="labelText" :for="id" class="label">{{ labelText }}</label>
  </div>
</template>

<script>
export default {
  props: {
    labelText: {
      type: String,
      required: false,
    },
    id: {
      type: Number,
      required: true,
    }
  },
  data: () => ({
    checked: false,
  }),
};
</script>

<style lang="scss" scoped>
@import '~$styles/app';

.checkbox-container {
  display: inline-flex;

  input {
    display: none;
  }

  .checkbox {
    width: 20px;
    height: 20px;
    display: inline-block;
    border: 1px solid $template-color-black-lighter;
    border-radius: $template-border-radius;

    &.checked {
      background-image: url('/static/images/icons/check.svg');
      background-size: 12px;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  .label {
    display: inline-block;
    margin: 0 0 0 8px;
  }
}
</style>
