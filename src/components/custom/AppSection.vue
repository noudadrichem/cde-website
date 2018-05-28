<template>
  <div class="app">
    <div class="container-md">
      <div class="grid">
        <div class="col-12-full">
          <div class="col-5">
            <Heading tag="h1" :text="data.title"/>
            <Heading tag="h2" :text="data.subTitle"/>
            <BodyText :text="data.bodyText"/>
          </div>
        </div>
        <div class="col-6">
          <div class="item-selection grid">
            <div class="dropdown-section">
              <Heading tag="h3" text="Welke ingrediënten?"/>
              <InputText placeholder="Zoek ingrediënten..." type="search" iconType="search" v-model="search"/>
              <Dropdown :data="categories"/>
            </div>
            <div class="radio-list-section">
              <Heading tag="h3" text="Hoeveel?"/>
              <RadioList :data="categories"/>
              <Button type="button" styling="secondary" disabled text="Button text"/>
            </div>
          </div>
        </div>
        <div class="col-6">
          <Recipe counter="35"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/common/Heading'
import BodyText from '@/components/common/BodyText'
import InputText from '@/components/common/InputText'
import Dropdown from '@/components/custom/Dropdown'
import RadioList from '@/components/custom/RadioList'
import Recipe from '@/components/custom/Recipe'
import Button from '@/components/common/Button'

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    categories: {
      type: Array,
      required: false
    }
  },
  data: () => ({
    search: '',
    catgories: []
  }),
  components: {
    Heading,
    BodyText,
    InputText,
    Dropdown,
    RadioList,
    Recipe,
    Button
  }
}
</script>

<style lang="scss">
.app {
  padding-bottom: 80px;

  .item-selection {
    margin-top: 48px;

    .dropdown-section {
      max-width: 280px;

      .input-text {
        z-index: 1;
      }
    }

    .radio-list-section {
      margin-left: 32px;

      .button {
        margin-top: 8px;

        button {
          width: 100%;
        }
      }
    }
  }

  .recipe {
    top: -136px;
    position: relative;
  }
}
</style>
