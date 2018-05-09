<template>
  <div class="recipe">
    <Heading tag="h1" text="Apple juice with pears" />
    <Heading tag="h2" text="Deze cocktail is gemaakt door John Doe." />
    <div class="ingredients">
      <span class="title">De ingrediënten:</span>
      <div class="counter-container">
        <span class="counter">{{ counter }}ml</span>
        <span class="max-total">/ 700ml</span>
        <Icon :width="16" :height="16" name="info"/>
      </div>
      <ul class="ingredients-list">
        <li>35ml Crazy Dutch Dry Gin</li>
        <li>50ml Appelsap</li>
      </ul>
    </div>
    <!-- todo: Add updated button component -->
  </div>
</template>

<script>
import Heading from '@/components/common/Heading'
import Icon from '@/components/common/Icon'
import Button from '@/components/common/Button'

export default {
  props: {
    counter: {
      type: String,
      required: true
    }
  },
  components: {
    Heading,
    Icon,
    Button
  }
}
</script>

<style lang="scss" scoped>
@import '~$styles/app';

.recipe {
  padding: 24px;
  box-shadow: 0 14px 44px 10px rgba(#44515E, 0.16);
  max-width: 480px;
  text-align: left;

  .ingredients {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .title {
      font-size: 15px;
      font-weight: 600;
      color: $template-color-black-lighter;
    }

    .counter-container {
      font-size: 11px;
      display: flex;
      align-items: center;

      span {
        font-size: inherit;
        color: inherit;
      }

      .counter {
        color: $template-color-black-lighter;
        font-weight: 600;
      }

      .max-total {
        color: $template-color-black-lighter;
        margin: 0 8px 0 3px;
      }
    }

    .ingredients-list {
      width: 100%;
      padding-left: 16px;
      margin-top: 16px;
    }
  }
}
</style>
