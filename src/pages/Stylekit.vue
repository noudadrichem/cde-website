<template>
  <div class="stylekit">

    <h1>Stylekit page</h1>

    <h2>Common</h2>

      <!-- Checkbox -->
      <div class="component">
        <div class="component-name">Checkbox</div>
        <Checkbox labelText="Some label text" id="checkbox"/>
      </div>

      <!-- Radio button -->
      <div class="component">
        <div class="component-name">Radio button</div>
        <form>
          <RadioButton name="styleKitForm" labelText="Radio button text 1" id="radio-button-1"/>
          <RadioButton name="styleKitForm" labelText="Radio button text 2" id="radio-button-2"/>
          <RadioButton name="styleKitForm" labelText="Radio button text 3" id="radio-button-3"/>
        </form>
      </div>

      <!-- Radio button -->
      <div class="component">
        <div class="component-name">Button</div>
          <Button :onClick="buttonClick" type="button" styling="secondary"/>
      </div>

    <h2>Custom</h2>
  </div>
</template>

<script>
// Components
import Checkbox from '@/components/common/Checkbox';
import RadioButton from '@/components/common/RadioButton';
import Button from '@/components/common/Button';

export default {
  name: 'Stylekit',
  components: {
    Checkbox,
    RadioButton,
    Button,
  },
  methods: {
    buttonClick() {
      console.log('Button clicked');
    },
  },
};
</script>

<style lang="scss">
@import '~$styles/app';

.stylekit {
  min-height: 100vh;
  width: 100%;
  text-align: center;

  h1 {
    margin: 16px 0;
    font-size: 26px;
    color: $template-color-blue-default;
    font-family: 'Bitter', sans-serif;
  }

  h2 {
    font-size: 24px;
    font-family: 'Bitter', sans-serif;
    color: $template-color-orange-default;
  }

  .component {
    margin: 32px;

    .component-name {
      font-weight: bold;
      margin: 32px 16px 16px 16px;
    }
  }
}
</style>
