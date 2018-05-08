<template>
  <div class="radio-button-container">
    <input :id="id" type="radio" :name="name">
    <label class="radio-button" :for="id"></label>
    <label v-show="labelText" :for="id" class="label">{{ labelText }}</label>
  </div>
</template>

<script>
export default {
  props: {
    labelText: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~$styles/app';

.radio-button-container {
  display: inline-flex;

  input[type="radio"] {
    display: none;

    &:checked + label {
      background-image: url('/static/images/icons/oval-default.svg');
      background-size: 12px;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  .radio-button {
    width: 20px;
    height: 20px;
    display: inline-block;
    border: 1px solid $template-color-black-lighter;
    border-radius: 100%;
  }

  .label {
    display: inline-block;
    margin: 0 0 0 8px;
  }
}

</style>
