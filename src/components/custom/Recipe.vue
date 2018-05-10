<template>
  <div class="recipe">
    <Heading tag="h1" text="Apple juice with pears" />
    <Heading tag="h2" text="Deze cocktail is gemaakt door John Doe." />
    <div class="ingredients">
      <span class="title">De ingrediënten:</span>
      <div class="counter-container">
        <span class="counter">{{ counter }}ml</span>
        <span class="max-total">/ 700ml</span>
        <div class="info-container">
          <Icon :width="16" :height="16" name="info"/>
          <div class="info-modal">
            Aantal mililiters die in het cocktail glas gaan.
          </div>
        </div>
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

      .info-container {
        position: relative;

        .info-modal {
          width: 96px;
          position: absolute;
          padding: 8px 12px;
          font-size: 10px;
          line-height: 14px;
          background: $template-color-white-default;
          box-shadow: 0 1px 8px 0 rgba(#CCD1DB, 0.7);
          left: -52px;
          top: -68px;
          opacity: 0;
          visibility: hidden;
          transition: all .2s ease-in-out;

          &::after, &::before {
            content: '';
            width: 12px;
            height: 12px;
            transform: rotate(50deg) skewX(12deg);
            background: $template-color-white-default;
            border-radius: 4px;
            display: block;
            margin: 0 auto;
            position: absolute;
            bottom: -4px;
            left: calc(50% - 6px);
            z-index: -1;
          }

          &::after {
            z-index: -1;
            box-shadow: 0 1px 8px 0 rgba(#CCD1DB, 0.7);
          }

          &::before {
            z-index: 1;
            top: 50px;
          }
        }

        .icon:hover + .info-modal {
          visibility: visible;
          opacity: 1;
          top: -72px;
        }
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
