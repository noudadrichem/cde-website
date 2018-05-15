<template>
  <div class="radio-list">
    <RadioButton v-for="(quantity, index) in data[0].items[0].quantities" name="radiolist" :labelText="quantity" :id="index" :key="index" />
  </div>
</template>

<script>
import RadioButton from '@/components/common/RadioButton'

export default {
  name: 'RadioList',
  components: {
    RadioButton,
  },
  props: {
    data: {
      type: Array,
      required: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~$styles/app';

  .radio-list {
    width: 180px;
    height: auto;
    text-align: left;
    border: 1px solid $template-color-white-light;
    border-radius: $template-border-radius;
    padding: 16px;
    background-color: rgba($template-color-white-light, 0.4);
    display: flex;
    flex-direction: column;

    div {
      background: transparent;
      margin: 8px 0;
    }
  }
</style>
