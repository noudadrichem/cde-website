<template>
  <transition name="modal">
    <div class="modal">
      <div v-if="!addedToRanking" class="modal-container">
        <div class="close-wrapper" @click="$emit('close')">
          Sluiten
          <Icon name="close" :width="12" :height="12" />
        </div>
        <Heading tag="h2" text="Cocktail toevoegen aan de ranglijst." />
        <BodyText text="Voordat jouw cocktail aan de ranglijst wordt toegevoegd, hebben wij wat meer informatie van jou nodig." />
        <form class="ranking-signup">
          <InputText placeholder="jouw@emailhier.nl" type="email" iconType="mail"/>
          <InputText placeholder="Je volledige naam" type="text" iconType="name"/>
          <Button type="button" styling="primary" text="Voeg cocktail toe" @click.native="addedToRanking = !addedToRanking"/>
        </form>
        <div class="background"></div>
      </div>

      <div v-if="addedToRanking" class="modal-container">
        <div class="close-wrapper" @click="$emit('close')">
          Sluiten
          <Icon name="close" :width="12" :height="12" />
        </div>
        <Heading tag="h2" text="Cocktail toevoegen aan de ranglijst." />
        <BodyText text="Je cocktail is toegevoegd aan de ranglijst! Deel jouw unieke link met je vrienden om voor veel stemmen te zorgen!" />
        <div class="background"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import Heading from '@/components/common/Heading'
import BodyText from '@/components/common/BodyText'
import Icon from '@/components/common/Icon'
import InputText from '@/components/common/InputText'
import Button from '@/components/common/Button'

export default {
  data: () => ({
    addedToRanking: false
  }),
  components: {
    Heading,
    BodyText,
    Icon,
    InputText,
    Button
  }
}
</script>

<style lang="scss">
@import '~$styles/app';

.modal {
  width: 100vw;
  height: 100vh;
  background: rgba(#44515E, .6);
  z-index: 998;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all .2s ease-in-out;
  display: flex;

  .modal-container {
    max-width: 576px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    position: relative;
    align-self: center;
    background: $template-color-white-default;
    border-radius: $template-border-radius;
    box-shadow: 0 6px 24px 0 rgba(#4E4D59, .45);
    text-align: left;
    padding: 40px 40px 107px 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    transition: all .2s ease-in-out;
    overflow: hidden;

    @media screen and (max-width: $bp-tablet-sm) {
      padding: 20px;
      margin: 8px;
    }

    h2 {
      display: inline-block;
      position: relative;
      z-index: 1;
      width: 100%;
    }

    .close-wrapper {
      display: inline-flex;
      align-items: center;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 12px;
      color: $template-color-black-lighter;
      margin: 4px 0 0 0;
      cursor: pointer;
      position: absolute;
      z-index: 2;
      right: 40px;

      @media screen and (max-width: $bp-tablet-sm) {
        position: relative;
        right: auto;
        margin: 0 0 16px auto;
      }

      .icon {
        margin-left: 4px;
      }
    }

    p {
      max-width: 360px;
      width: 100%;
      position: relative;
      z-index: 1;
    }

    .ranking-signup {
      margin: 36px 0 0 0;
      z-index: 1;

      @media screen and (max-width: $bp-tablet-sm) {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .input-text {
        margin-bottom: 24px;
      }

      .button button{
        width: 250px;
        padding: 16px 0;

        @media screen and (max-width: $bp-tablet-sm) {
          width: 100%;
        }
      }
    }
  }

  .background {
    width: 306px;
    height: 342px;
    position: absolute;
    right: 0;
    bottom: 0;
    background-image: url('/static/images/ranking-background.svg');

    @media screen and (max-width: $bp-tablet-sm) {
      display: none;
    }
  }
}

/* Transition classes */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
