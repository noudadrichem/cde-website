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
          <Button :onClick="buttonClick" type="button" styling="primary"/>
      </div>

      <div class="component">
        <div class="component-name">Input Text</div>
        <InputText placeholder="mail@example.com"/>
      </div>

      <div class="component">
        <div class="component-name">Icon</div>
        <Icon :width="8" :height="8" name="delete"/>
      </div>

      <div class="component">
        <div class="component-name">Heading</div>
        <Heading tag="h1" text="moet je heading 1?"/>
        <Heading tag="h2" text="moet je heading 2?"/>
        <Heading tag="h3" text="moet je heading 3?"/>
      </div>

      <div class="component">
        <div class="component-name">BodyText</div>
        <BodyText text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      </div>

    <h2>Custom</h2>
  </div>
</template>

<script>
// Components
import Checkbox from '@/components/common/Checkbox';
import InputText from '@/components/common/InputText';
import RadioButton from '@/components/common/RadioButton';
import Button from '@/components/common/Button';
import Logo from '@/components/Logo';
import Icon from '@/components/common/Icon';
import Heading from '@/components/common/Heading';
import BodyText from '@/components/common/BodyText';

export default {
  name: 'Stylekit',
  components: {
    Checkbox,
    InputText,
    RadioButton,
    Button,
    Icon,
    Heading,
    BodyText
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
