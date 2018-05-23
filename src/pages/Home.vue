<template>
<div class="home" v-if="!loading">
  <Heading :data="heading" />
  <Video :data="video" />
  <InfoSection :data="infoSection" />
  <Drieluik :data="drieluik" />
  <Footing :data="footer" />

  <div class="intro-animation" :style="introIsDone ? {
    zIndex: '-1',
    position: 'absolute'
    } : {}">


    <div :class="['curtain', 'left', curtainsOpen ? 'done' : '']" v-if="!introIsDone"></div>
    <div :class="['curtain', 'right', curtainsOpen ? 'done' : '']" v-if="!introIsDone"></div>

    <transition name="getIn">
      <div class="logo toGetIn" v-if="showLogo">
        <img src="@/assets/images/crazy-dutch-experience-logo-white.svg" alt="logo">
      </div>
    </transition>

    <div class="confetti-container" v-if="showConfetties">
      <div v-for="(confetti, idx) in confetties" class="confetti" :key="idx"  :style="{ left: `${confetti.left}px`, top: `${confetti.top}px`, opacity: confetti.opacity }">
        <img :src="`/static/${confetti.img}`" draggable="false">
      </div>
    </div>
  </div>

  <div :class="['campaign-popup', showPopup ? 'show' : '']">
    <h2>Crazy Dutch Dry Gin</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
    <Button type="button" styling="primary" @click.native="$router.push('/campaign')" text="Begin meteen met maken" />
    <Icon :width="16" :height="16" name="close" @click.native="showPopup = false" style="position: absolute; top: 16px; right: 16px;" />
  </div>
</div>
</template>

<script>
import Heading from '@/components/custom/Heading';
import Video from '@/components/custom/Video';
import InfoSection from '@/components/custom/InfoSection';
import Drieluik from '@/components/custom/Drieluik';
import Footing from '@/components/custom/Footing';
import Button from '@/components/common/Button'
import Icon from '@/components/common/Icon'
import conf from '@/config'

export default {
  name: 'Home',
  data: () => ({
    loading: true,
    showLogo: false,
    showConfetties: false,
    curtainsOpen: false,
    introIsDone: false,
    showPopup: false,
    pageId: '5afc46024a04c38c80d4fca0',
    heading: {},
    video: {},
    infoSection: {},
    drieluik: {},
    footer: {},
    totalConfetties: 5,
    confetties: [{
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      img: 'klomp-grijs.svg',
      opacity: 0,
    }, {
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      img: 'fles-rood.svg',
      opacity: 0,
    }, {
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      img: 'peper-blauw.svg',
      opacity: 0,
    }, {
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      img: 'paraplu-oranje.svg',
      opacity: 0,
    }, {
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      img: 'klomp-grijs.svg',
      opacity: 0,
    }, {
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      img: 'peper-blauw.svg',
      opacity: 0,
    }, {
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      img: 'fles-rood.svg',
      opacity: 0,
    }, {
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      img: 'paraplu-oranje.svg',
      opacity: 0,
    }, {
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      img: 'peper-blauw.svg',
      opacity: 0,
    }, {
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      img: 'paraplu-oranje.svg',
      opacity: 0,
    }, {
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      img: 'fles-rood.svg',
      opacity: 0,
    }, {
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      img: 'fles-rood.svg',
      opacity: 0,
    }, {
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      img: 'peper-blauw.svg',
      opacity: 0,
    }],
  }),
  components: {
    Heading,
    Video,
    InfoSection,
    Drieluik,
    Footing,
    Button,
    Icon
  },
  mounted() {
    document.body.scrollTop = 0

    this.$http.get(`${conf.apiUrl}content/${this.pageId}/sections`)
      .then(data => {
        console.log(data.body);
        const findSectionData = (sectionName) => data.body.sections.find(obj => obj.title === sectionName).contents

        this.$set(this, 'heading', findSectionData('heading'))
        this.$set(this, 'video', findSectionData('video'))
        this.$set(this, 'infoSection', findSectionData('infoSection'))
        this.$set(this, 'drieluik', findSectionData('drieluik'))
        this.$set(this, 'footer', findSectionData('footer'))
        this.$set(this, 'loading', false)

        document.body.style.overflow = 'hidden'

        setTimeout(() => {
          this.$set(this, 'showLogo', true)
          this.$set(this, 'showConfetties', true)
        }, 400)

        setTimeout(() => {
          this.confetties.forEach(partial => {
            partial.top = (Math.random() * window.innerHeight)
            partial.left = (Math.random() * window.innerWidth)
            partial.opacity = Math.random()
          })
        }, 1400)

        setTimeout(() => {
          this.$set(this, 'curtainsOpen', true)
          this.$set(this, 'showLogo', false)
        }, 3100)

        setTimeout(() => {
          this.$set(this, 'introIsDone', true)
          document.body.style.overflow = ''
        }, 4500)

        setTimeout(() => this.$set(this, 'showPopup', true), 9000)

      })

  }
}
</script>

<style lang="scss">
.intro-animation {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 15;
    width: 100vw;
    height: 100vh;

    .curtain {
        height: 100vh;
        width: 50vw;
        display: inline-block;
        position: absolute;
        top: 0;
        background: #fafafa;
        transition: 1400ms ease-out;
        box-shadow: 0 0 32px 0 rgba(196,196,196,0.50) !important;

        &.right {
            left: 50vw;

            &.done {
                left: 100vw;
            }
        }

        &.left {
            left: 0;

            &.done {
                left: -50vw;
            }
        }
    }

    .logo {
        z-index: 16;
        width: 300px;

        img {
            max-width: 100%;
        }
    }

    .confetti-container {
        z-index: 15;
        position: absolute;
        left: 0;
        right: 0;
        height: 100vh;

        .confetti {
            width: 32px;
            height: 32px;
            position: absolute;
            top: 50%;
            left: 50%;
            transition: 400ms cubic-bezier(0, 1.01, 0.44, 1.42);
            img {
              max-width: 100%;
            }
        }
    }
}

.campaign-popup {
    background: #1072b8;
    box-shadow: 0 0 24px 0 rgba(0,0,0,0.20);
    border-radius: 4px;
    position: fixed;
    bottom: 24px;
    right: 24px;
    max-width: 367px;
    padding: 16px;
    z-index: 22;
    transition: 400ms ease-out;
    transform: translateX(200%);

    &.show {
        transform: translateX(0) !important;
    }

    h2,
    p {
        color: white !important;
    }

    p {
        margin-bottom: 24px;
    }
}

.getIn-enter-active,
.getIn-leave-active {
    transition: 600ms cubic-bezier(0, 1.01, 0.44, 1.42);
}

.getIn-enter,
.getIn-leave-to {
    opacity: 0;
    transform: scale(0);
}
</style>
