<template>
  <div class="stylekit">

    <h1 class="stylekit-heading-1">Stylekit page</h1>

    <h2 class="stylekit-heading-2">Common</h2>

      <!-- Checkbox -->
      <div class="component">
        <div class="component-name">Checkbox</div>
        <!-- <Checkbox labelText="Some label text" id="checkbox"/> -->
      </div>

      <!-- Radio button -->
      <div class="component">
        <div class="component-name">Radio button</div>
        <form>
          <!-- <RadioButton name="styleKitForm" labelText="Radio button text 1" id="radio-button-1"/> -->
          <!-- <RadioButton name="styleKitForm" labelText="Radio button text 2" id="radio-button-2"/> -->
          <!-- <RadioButton name="styleKitForm" labelText="Radio button text 3" id="radio-button-3"/> -->
        </form>
      </div>

      <!-- Radio button -->
      <div class="component">
        <div class="component-name">Button</div>
          <Button :onClick="buttonClick" type="button" styling="primary"/>
      </div>

      <!-- Input text -->
      <div class="component">
        <div class="component-name">Input Text</div>
        <InputText placeholder="mail@example.com"/>
      </div>

      <!-- Icon -->
      <div class="component">
        <div class="component-name">Icon</div>
        <!-- <Icon :width="32" :height="32" name="info"/> -->
      </div>

      <!-- Heading -->
      <div class="component">
        <div class="component-name">Heading</div>
        <Heading tag="h1" text="Moet je heading 1?"/>
        <Heading tag="h2" text="Moet je heading 2?"/>
        <Heading tag="h3" text="Moet je heading 3?"/>
      </div>

      <!-- Body text -->
      <div class="component">
        <div class="component-name">Body text</div>
        <BodyText text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
      </div>

      <div class="component">
        <div class="component-left">
          <Icon :width="16" :height="16" name="arrow" :active="false"/>
          <Icon :width="16" :height="16" name="frisdrank" :active="false"/>
          <Icon :width="16" :height="16" name="fruit" :active="false"/>
          <Icon :width="16" :height="16" name="groente" :active="false"/>
          <Icon :width="16" :height="16" name="mail" :active="false"/>
          <Icon :width="16" :height="16" name="search" :active="false"/>
          <Icon :width="16" :height="16" name="sterke-drank" :active="false"/>
        </div>

        <div class="component-mid">
          <Icon :width="16" :height="16" name="arrow" :active="true"/>
          <Icon :width="16" :height="16" name="frisdrank" :active="true"/>
          <Icon :width="16" :height="16" name="fruit" :active="true"/>
          <Icon :width="16" :height="16" name="groente" :active="true"/>
          <Icon :width="16" :height="16" name="mail" :active="true"/>
          <Icon :width="16" :height="16" name="search" :active="true"/>
          <Icon :width="16" :height="16" name="sterke-drank" :active="true"/>
        </div>

        <div class="component-right">
          <Icon :width="16" :height="16" name="oval"/>
          <Icon :width="16" :height="16" name="check" />
          <Icon :width="16" :height="16" name="loading" />
          <Icon :width="16" :height="16" name="error" />
        </div>
      </div>

    <h2 class="stylekit-heading-2">Custom</h2>

    <!-- Dropdown -->
    <div class="component dropdown">
      <div class="component-name">Dropdown</div>
      <Dropdown :data="categories"/>
    </div>
  </div>
</template>

<script>
// Components
import Checkbox from '@/components/common/Checkbox'
import InputText from '@/components/common/InputText'
import RadioButton from '@/components/common/RadioButton'
import Button from '@/components/common/Button'
import Icon from '@/components/common/Icon'
import Heading from '@/components/common/Heading'
import BodyText from '@/components/common/BodyText'

import Dropdown from '@/components/custom/Dropdown'

export default {
  name: 'Stylekit',
  components: {
    Checkbox,
    InputText,
    RadioButton,
    Button,
    Icon,
    Heading,
    BodyText,
    Dropdown
  },
  methods: {
    buttonClick() {
      console.log('Button clicked')
    }
  },
  data: () => ({
    categories: [
      {
        id: 1,
        name: 'Fruit',
        categoryItems: [
          'Aarbei',
          'Banaan',
          'Mandarijn',
          'Dingen'
        ]
      },
      {
        id: 2,
        name: 'Sterke drank',
        categoryItems: [
          'Bier',
          'Wijn',
          'Witte rum',
          'Rum',
          'Jenever'
        ]
      },
      {
        id: 3,
        name: 'Frisdrank',
        categoryItems: [
          'Cola',
          'Fanta',
          'Ginger beer',
          'Sprite',
          '7UP',
          'Ice Tea'
        ]
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
@import '~$styles/app';

.stylekit {
  min-height: 100vh;
  width: 100%;
  text-align: center;

  h1.stylekit-heading-1 {
    margin: 16px 0;
    font-size: 26px;
    color: $template-color-blue-default;
    font-family: 'Bitter', sans-serif;
  }

  h2.stylekit-heading-2 {
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

    &.dropdown {
      height: 50%;
    }

    .icon {
      margin: 8px;
    }

    // vies but works ⬇
    &-left {
      display: inline-block;
      width: 64px;
    }

    &-mid {
      display: inline-block;
      width: 64px;
    }

    &-right {
      display: inline-block;
      width: 64px;
    }
  }
}
</style>
