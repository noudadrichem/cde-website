<template>
<transition name="modal">
  <div class="modal">

    <Recipe v-show="false" />

    <div class="modal-container">
      <div class="close-wrapper" @click="$emit('close')">
        Sluiten
        <Icon name="close" :width="12" :height="12" />
      </div>

      <div class="maked recipe">
        <Heading tag="h1" :text="choosenRecipe.name" />
        <Heading tag="h2" :text="`Deze cocktail is gemaakt door ${choosenRecipe.particepent.fullName}`" />

        <div class="ingredients">
          <span class="title">De ingrediënten:</span>
          <div class="counter-container">
            <span class="counter"></span>
            <span class="max-total">{{ getTotalMililiters(choosenRecipe, false) }}/ 700ml</span>

            <div class="info-container" @mouseover="infoHover = true" @mouseleave="infoHover = false">
              <Icon :width="16" :height="16" name="info" :active="infoHover" />
              <div class="info-modal">
                Aantal mililiters die in het cocktail glas gaan.
              </div>
            </div>
          </div>
          <ul class="ingredients-list">
            <li v-for="(ingredient, idx) in choosenRecipe.ingredients" :key="idx">
              {{ ingredient }}
              <Icon :width="16" :height="16" name="trash" />
            </li>
          </ul>

          <VoteButton type="vote" :id="choosenRecipe._id" />
        </div>
      </div>
    </div>

    <div class="recipe-body" v-if="choosenRecipe.body">
      <Heading tag="h2" text="Over deze cocktail" />
      <p>{{ choosenRecipe.body }}</p>
    </div>
  </div>
</transition>
</template>

<script>
import Icon from '@/components/common/Icon'
import Heading from '@/components/common/Heading'
import BodyText from '@/components/common/BodyText'
import VoteButton from '@/components/custom/VoteButton'
import Recipe from '@/components/custom/Recipe'

export default {
  name: 'recipeModal',
  props: {
    choosenRecipe: {
      type: Object,
      required: true
    },
    getTotalMililiters: {
      type: Function,
      required: false
    }
  },
  data: () => ({
    infoHover: false
  }),
  components: {
    Icon,
    Heading,
    BodyText,
    VoteButton,
    Recipe
  }
}
</script>

<style lang="scss" scoped>
@import '~$styles/app';

h1 {
  font-family: $template-font-family-h1;
  font-weight: $template-font-weight-h1;
  line-height: $template-line-height-h1;
  font-size: $template-font-size-h1;
  color: $template-font-color-h1;
  margin-bottom: 8px;

  @include breakpoint(m) {
    font-size: $template-font-size-h1-m;
  }

  @include breakpoint(s) {
    font-size: $template-font-size-h1-s;
    line-height: $template-line-height-h1-s;
  }
}

h2 {
  display: inline-block;
  position: relative;
  z-index: 1;
  width: 100%;
  font-family: $template-font-family-h2;
  font-weight: $template-font-weight-h2;
  line-height: $template-line-height-h2;
  font-size: $template-font-size-h2;
  color: $template-color-black-lighter;
  margin-bottom: 16px;

  @include breakpoint(m) {
    font-size: $template-font-size-h2-m;
  }

  @include breakpoint(s) {
    font-size: $template-font-size-h2-s;
    line-height: $template-line-height-h2-s;
  }
}

p {
  width: 100%;
  position: relative;
  z-index: 1;
}

.modal {
    width: 100vw;
    height: 100vh;
    background: rgba(68, 81, 94, 0.6);
    z-index: 998;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;

  .modal-container {
    max-width: 480px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    position: relative;
    align-self: center;
    background: $template-color-white-default;
    border-radius: $template-border-radius;
    box-shadow: 0 6px 24px 0 rgba(#4E4D59, .45);
    text-align: left;
    padding: 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    transition: all .2s ease-in-out;

    @media screen and (max-width: $bp-tablet-sm) {
      padding: 20px;
    }

    .close-wrapper {
      display: inline-flex;
      align-items: center;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 12px;
      color: $template-color-black-lighter;
      cursor: pointer;
      z-index: 2;

      position: relative;
      right: auto;
      margin: 0 0 16px auto;

      @media screen and (max-width: $bp-tablet-md) {
        position: relative;
        right: auto;
        margin: 0 0 16px auto;
      }

      .icon {
        margin-left: 4px;
      }
    }

    .recipe {
      box-shadow: none;
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;

      .ingredients-list li {

        .icon {
          visibility: hidden!important;
        }

        &:hover {
          .icon {
            visibility: hidden!important;
          }
        }
      }
    }
  }

  .recipe-body {
    max-width: 480px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    background: $template-background;
    margin-top: 16px;
    border-radius: $template-border-radius;
    box-shadow: 0 6px 24px 0 rgba(#4E4D59, .45);
    padding: 24px;
    z-index: 1
  }
}
</style>
