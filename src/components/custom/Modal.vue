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
          <InputText placeholder="jouw@emailhier.nl" type="email" :iconType="mailIconType" v-model="email" />
          <InputText placeholder="Je volledige naam" type="text" iconType="name" v-model="name" />
          <Button type="button" styling="primary" text="Voeg cocktail toe" @click.native="emitParticipentValues"/>
        </form>
        <div class="background"></div>
      </div>

      <div v-if="addedToRanking" class="modal-container added">
        <div class="close-wrapper" @click="$emit('close')">
          Sluiten
          <Icon name="close" :width="12" :height="12" />
        </div>
        <Heading tag="h2" text="Cocktail toevoegen aan de ranglijst." />
        <BodyText text="Je cocktail is toegevoegd aan de ranglijst! Deel jouw unieke link met je vrienden om voor veel stemmen te zorgen!" />
        <div class="social-shares">
          <ShareButton text="Kopieer link" action="copy" :socialUrl="socialUrl"/>
          <span>of</span>
          <ShareButton text="Deel op" iconName="facebook" action="facebook" :socialUrl="socialUrl"/>
          <ShareButton text="Deel op" iconName="twitter" action="twitter" :socialUrl="socialUrl"/>
        </div>
        <div class="see-ranking">
            Zie de ranglijst hier
            <Icon name="arrow" :width="16" :height="16" :active="true"/>
        </div>
        <div class="visual"></div>
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
import ShareButton from '@/components/common/ShareButton'
import conf from '@/config'

export default {
  data: () => ({
    addedToRanking: false,
    email: '',
    name: '',
    mailIconType: 'mail'
  }),
  computed: {
    socialUrl() {
      return `${window.location.href}/${this.newRecipeId}`
    },
  },
  props: {
    newRecipeId: {
      type: String,
      required: false
    }
  },
  components: {
    Heading,
    BodyText,
    Icon,
    InputText,
    Button,
    ShareButton
  },
  methods: {
    emitParticipentValues() {
      const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      this.$set(this, 'mailIconType', 'error')

      if(emailReg.test(this.email)) {
        this.$set(this, 'mailIconType', 'mail')


        this.$eventBus.$emit('participentInfo', {
          email: this.email,
          name: this.name
        })

        this.$set(this, 'addedToRanking', !this.addedToRanking)
      }
    }
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
      margin: 16px;
    }

    &.added {
      padding: 40px;

      @media screen and (max-width: $bp-tablet-sm) {
        padding: 20px;
      }
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

  .social-shares {
    position: relative;
    z-index: 1;
    margin: 16px 0 24px 0;
    width: 100%;

    .share-button {
      &:nth-child(3) {
        margin-right: 16px;
      }
    }

    span {
      font-size: 12px;
      color: $template-color-black-lighter;
      margin: 0 8px;
    }
  }

  .see-ranking {
    display: flex;
    align-items: center;
    align-self: flex-start;
    width: auto;
    color: $template-color-blue-default;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 48px;

    &:hover {
      .icon {
        margin-left: 20px;
      }
    }

    @media screen and (max-width: $bp-tablet-sm) {
      margin-bottom: 16px;
    }

    .icon {
      margin-left: 16px;
      transition: margin .25s ease-in-out;
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

  .visual {
    width: 100%;
    height: 168px;
    position: relative;
    background-image: url('/static/images/ranking-visual.svg');
    background-position: left;
    background-repeat: no-repeat;

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
