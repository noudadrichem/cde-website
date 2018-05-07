<template>
  <div class="checkbox-container">
    <input :id="id" type="checkbox">
    <label class="checkbox" :for="id"></label>
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
      type: String,
      required: true,
    }
  },
};
</script>

<style lang="scss" scoped>
@import '~$styles/app';

.checkbox-container {
  display: inline-flex;

  input[type="checkbox"] {
    display: none;

    &:checked + label {
      background-image: url('/static/images/icons/check-default.svg');
      background-size: 12px;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  .checkbox {
    width: 20px;
    height: 20px;
    display: inline-block;
    border: 1px solid $template-color-black-lighter;
    border-radius: $template-border-radius;
  }

  .label {
    display: inline-block;
    margin: 0 0 0 8px;
  }
}
</style>
