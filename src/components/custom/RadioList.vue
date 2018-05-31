<template>
  <div class="radio-list">
    <RadioButton
      v-for="(amount, index) in data.messurement.amount"
      name="radiolist"
      :labelText="amount + ' ' + data.messurement.unit"
      :amount="`${amount} ${data.messurement.unit}`"
      :id="index"
      :key="index" />
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
      type: Object,
      required: false,
    }
  }
}
</script>

<style lang="scss" >
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
