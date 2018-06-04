<template>
  <transition name="modal">
    <div class="modal">

      <div class="modal-container">
        <div class="close-wrapper" @click="$emit('close')">
          Sluiten
          <Icon name="close" :width="12" :height="12" />
        </div>

        <div class="maked recipe">
          <Heading tag="h1" text="Cocktail titel die wat langer is dan normaal" />
          <Heading tag="h2" :text="`Deze cocktail is gemaakt door Noudo `" />

          <div class="ingredients">
            <span class="title">De ingrediënten:</span>
            <div class="counter-container">
              <span class="counter">150ml</span>
              <span class="max-total">/ 700ml</span>

              <div class="info-container" @mouseover="infoHover = true" @mouseleave="infoHover = false">
                <Icon :width="16" :height="16" name="info" :active="infoHover"/>
                <div class="info-modal">
                  Aantal mililiters die in het cocktail glas gaan.
                </div>
              </div>
            </div>
            <ul class="ingredients-list">
              <li v-for="(ingredient) in choosenRecipe.ingredients">
                {{ ingredient }}
                <Icon :width="16" :height="16" name="trash"/>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </transition>
</template>

<script>
  import Icon from '@/components/common/Icon'
  import Heading from '@/components/common/Heading'
  import BodyText from '@/components/common/BodyText'

  export default {
    name: 'recipeModal',
    props: {
      choosenRecipe: {
        type: Object,
        required: true
      }
    },
    data: () => ({
      infoHover: false
    }),
    components: {
      Icon,
      Heading,
      BodyText
    }
  }
</script>

<style lang="scss" scoped>
  .modal-container {
    width: 480px;
    padding-top: 40px;
    position: relative !important;

    .close-wrapper {
      position: absolute;
      top: 16px;
      right: 16px;
    }

    .recipe.maked {
      margin: 0 !important;
      box-shadow: none;
      padding: 0 !important;
    }
  }
</style>
