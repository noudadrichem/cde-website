<template>
  <div class="radio-button-container">
    <input :id="id" type="radio" :name="name" @change="$eventBus.$emit('giveQuantityValue', amount)">
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
      type: [String, Number],
      required: false
    },
    name: {
      type: String,
      required: false
    },
    amount: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" >
@import '~$styles/app';

.radio-button-container {
  display: inline-flex;

  input[type="radio"] {
    display: none;

    &:checked + label{
      background-image: url('/static/images/icons/oval-default.svg');
      background-size: 12px;
      background-repeat: no-repeat;
      background-position: center;

      + .label {
        color: $template-color-black-default;
      }
    }
  }

  .radio-button {
    width: 20px;
    height: 20px;
    display: inline-block;
    border: 1px solid rgba($template-color-black-lighter, 0.3);
    border-radius: 100%;
    background-image: url('/static/images/icons/oval-unselected.svg');
    background-size: 12px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }

  .label {
    display: inline-block;
    margin: 0 0 0 8px;
    color: $template-color-black-lighter;
    cursor: pointer;
  }
}
</style>
