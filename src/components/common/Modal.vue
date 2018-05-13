<template>
  <transition name="modal">
    <div class="modal">
      <div class="modal-container">
        <Heading tag="h2" text="Cocktail toevoegen aan de ranglijst." />
        <div class="close-wrapper" @click="$emit('close')">
          Sluiten
          <Icon name="close" :width="12" :height="12" />
        </div>
        <BodyText text="Voordat jouw cocktail aan de ranglijst wordt toegevoegd, hebben wij wat meer informatie van jou nodig." />
        <form class="ranking-signup">
          <InputText placeholder="jouw@emailhier.nl"/>
          <InputText placeholder="Je volledige naam"/>
          <Button type="button" styling="primary" text="Voeg cocktail toe"/>
        </form>
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
  components: {
    Heading,
    BodyText,
    Icon,
    InputText,
    Button
  }
}
</script>

<style lang="scss" scoped>
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
    max-width: 496px;
    max-height: 389px;
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

    h2 {
      display: inline-block;
    }

    .close-wrapper {
      display: inline-flex;
      align-items: center;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 12px;
      color: $template-color-black-lighter;
      margin: 0 0 16px 0;
      cursor: pointer;

      .icon {
        margin-left: 4px;
      }
    }

    p {
      max-width: 360px;
      width: 100%;
    }

    .ranking-signup {
      margin: 36px 0 0 0;

      .form-control {
        margin-bottom: 24px;
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
