<template >
  <div class="button">
      <button :disabled="disabled" :type="type" :class="styling" name="button">
        {{ text }}
      </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    },
    type: {
      type: String,
      required: true
    },
    styling: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~$styles/app';

.button {
  button {
    border: none;
    outline: none;
    padding: 8px 12px;
    font-family: $template-font-family;
    font-weight: 700;
    text-align: center;
    font-size: $template-font-size;
    border-radius: $template-border-radius;
    box-shadow: 0 2px 6px rgba($template-color-black-lighter, 0.4);
    cursor: pointer;
    display: inline-block;
    transition: all .25s ease-in-out;

    &.primary {
      background-color: $template-color-orange-default;
      color: $template-color-white-default;
    }

    &.secondary {
      background-color: $template-color-white-default;
      color: $template-color-black-default;
    }

    &:hover {
      box-shadow: 0 4px 8px rgba($template-color-black-lighter, 0.4);
      color: $template-color-white-default;
      transform: translateY(-1px);

      &.secondary {
        background-color: $template-color-white-default;
        color: $template-color-black-default;
      }
    }

    &:active {
      box-shadow: 0 0 2px 0 rgba(156,155,161,0.46);
      transform: translateY(1px);
      background: $template-color-orange-default;

      &.secondary {
        background-color: $template-color-white-default;
      }
    }

    &:disabled {
      box-shadow: none;
      background: $template-color-orange-lighter;

      &.secondary {
        color: $template-color-white-default;
        background: $template-color-white-light;
      }

      &:hover {
        box-shadow: none;
        color: $template-color-white-default;
        cursor: default;
        transform: translateY(0px);
      }
    }
  }
}
</style>
