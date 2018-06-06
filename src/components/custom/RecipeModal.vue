<template>
  <transition name="modal">
    <div class="modal">

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
              <span class="max-total">{{ getTotalMililiters(choosenRecipe) }}/ 700ml</span>

              <div class="info-container" @mouseover="infoHover = true" @mouseleave="infoHover = false">
                <Icon :width="16" :height="16" name="info" :active="infoHover"/>
                <div class="info-modal">
                  Aantal mililiters die in het cocktail glas gaan.
                </div>
              </div>
            </div>
            <ul class="ingredients-list">
              <li v-for="(ingredient, idx) in choosenRecipe.ingredients" :key="idx">
                {{ ingredient }}
                <Icon :width="16" :height="16" name="trash"/>
              </li>
            </ul>

            <VoteButton type="vote" :id="choosenRecipe._id"/>
          </div>
        </div>

        <div class="recipe body" v-if="choosenRecipe.body">
          {{ choosenRecipe.body }}
        </div>

      </div>
    </div>
  </transition>
</template>

<script>
  import Icon from '@/components/common/Icon'
  import Heading from '@/components/common/Heading'
  import BodyText from '@/components/common/BodyText'
  import VoteButton from '@/components/custom/VoteButton'

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
      VoteButton
    }
  }
</script>

<style lang="scss" scoped>
  .modal-container {
    width: 550px;
    padding-top: 40px;
    position: relative !important;
    background: transparent;
    box-shadow: none;

    .close-wrapper {
      position: absolute;
      top: 56px;
      right: 56px;
    }

    .recipe{
      &.maked {
        width: 100%;
        margin: 0 !important;
        box-shadow: none;
        padding-top: 56px;
      }

      &.body {
        margin-top: 32px;
        width: 100%;
      }
    }
  }
</style>
