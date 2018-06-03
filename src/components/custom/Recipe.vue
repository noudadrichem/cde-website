<template>
  <div class="recipe">
    <textarea @keyup="autoHeightTextArea" maxlength="80" class="recipe-heading" type="text" placeholder="Type hier jouw cocktail naam" min="1" max="40"/>
    <!-- <Heading tag="h2" text="Deze cocktail is gemaakt door John Doe." /> -->
    <div class="ingredients">
      <span class="title">De ingrediënten:</span>
      <div class="counter-container">
        <span class="counter">{{ counter }}ml</span>
        <span class="max-total">/ 700ml</span>
        <div class="info-container" @mouseover="infoHover = true" @mouseleave="infoHover = false">
          <Icon :width="16" :height="16" name="info" :active="infoHover"/>
          <div class="info-modal">
            Aantal mililiters die in het cocktail glas gaan.
          </div>
        </div>
      </div>
      <ul class="ingredients-list">
        <li v-for="({ quantity, name}) in choosenIngredients">
          {{ quantity }} {{ name }}
          <Icon :width="16" :height="16" name="trash"/>
        </li>
      </ul>
      <Button @click.native="$eventBus.$emit('openAddToModal', true)" type="button" text="Voeg deze cocktail toe aan de ranglijst" styling="primary" :disabled="(choosenIngredients.length === 0)"/>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/common/Heading'
import Icon from '@/components/common/Icon'
import Button from '@/components/common/Button'

export default {
  data: () => ({
    infoHover: false
  }),
  props: {
    counter: {
      type: String,
      required: true
    },
    choosenIngredients: {
      type: Array,
      required: false
    }
  },
  components: {
    Heading,
    Icon,
    Button
  },
  methods: {
    autoHeightTextArea() {
      event.target.style.height = 0
      event.target.style.height = (event.target.scrollHeight) + 'px'

      this.$eventBus.$emit('cocktailNameInput', event.target.value)
    }
  }
}
</script>

<style lang="scss" >
@import '~$styles/app';
@import '~$styles/base/variables';
@import '~$styles/base/mixins';

.recipe {
  padding: 24px;
  box-shadow: 0 14px 44px 10px rgba(#44515E, 0.16);
  max-width: 480px;
  text-align: left;
  margin: 0 auto;

  .recipe-heading {
    font-family: $template-font-family-h1;
    font-weight: $template-font-weight-h1;
    line-height: $template-line-height-h1;
    font-size: $template-font-size-h1-s;
    color: $template-font-color-h1;
    width: 100%;
    margin-bottom: 8px;
    outline: none;
    border: 0;
    resize: none;
    height: $template-line-height-h1;
  }

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
          width: 112px;
          position: absolute;
          padding: 8px 12px;
          font-size: 10px;
          line-height: 14px;
          background: $template-color-white-default;
          box-shadow: 0 1px 8px 0 rgba(#CCD1DB, 0.7);
          left: -48px;
          top: -68px;
          opacity: 0;
          visibility: hidden;
          transition: opacity .2s ease-in-out, top .2s ease-in-out;

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

        .icon {
          &:hover + .info-modal {
            visibility: visible;
            opacity: 1;
            top: -72px;
          }
        }
      }
    }

    .ingredients-list {
      width: 100%;
      min-height: 228px;
      padding-left: 16px;
      margin: 16px 0;

      @include breakpoint(s) {
        padding-left: 20px;
      }

      li {
        position: relative;
        user-select: none;

        &:hover .icon {
          visibility: visible;
          opacity: 1;
        }

        .icon {
          position: absolute;
          top: 3px;
          right: 0;
          visibility: hidden;
          opacity: 0;
          transition: all .05s linear;
          cursor: pointer;

          &:first-child {
            display: none;
          }

          @include breakpoint(s) {
            visibility: visible;
            opacity: 1;
          }
        }
      }
    }
  }
}

</style>
