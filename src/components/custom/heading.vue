<template >
<div>
  <div class="nav-target" ref="nav">
    <nav class="nav-container container-md">
      <div class="logo">
        <router-link to="/"><img src="@/assets/images/logo.png" alt="Crazy Dutch Experience"></router-link>
      </div>

      <div class="nav-bar">
        <ul>
          <!-- <li v-for="(item, idx) in data.navbarItems" :key="idx">
            <a :href="item.link">{{ item.text }}</a>
          </li> -->
          <router-link tag="li" to="/" exact>
            <a>De experience</a>
          </router-link>
          <router-link tag="li" to="/campaign" exact>
            <a>Creëer je eigen cocktail</a>
          </router-link>
          <li> <a href="#contact">Contact</a> </li>
        </ul>
      </div>

      <div class="nav-bar-toggler" @click="toggleMobileNav()">
        <div :class="['nav-icon', { active: mobileNavShow }]"></div>
      </div>

      <transition name="menu">
        <div class="nav-bar-mobile" v-show="mobileNavShow">
          <ul>
            <router-link tag="li" to="/" exact>
              <a>De experience</a>
            </router-link>
            <router-link tag="li" to="/campaign" exact>
              <a>Creëer je eigen cocktail</a>
            </router-link>
            <li> <a href="/#contact">Contact</a> </li>
          </ul>

          <div class="social">
            <div class="info-container">
              <span class="info-title">{{navigationData.title}}</span>
              <p>{{navigationData.text}}</p>
            </div>
            <div class="icons-container">
              <span v-for="(value, key) in navigationData.socialIcons">
                <a :href="value"><img :src="iconsUrl(key)"/></a>
              </span>
            </div>
          </div>
        </div>
      </transition>

    </nav>
  </div>

  <header class="header container-md" v-if="!isSubPage">

    <div class="content-container">
      <div class="grid">
        <div :class="['col-8', {full: !campaign}]">

          <Heading tag="h1" :text="data.title" :className="['heading-title',]"/>
          <Heading tag="h2" :text="data.subTitle" :className="['heading-sub-title', !campaign ? 'to-animate' : ''] "/>
          <BodyText :text="data.bodyText" :className="[!campaign ? 'to-animate' : '']"/>

          <Button v-if="campaign" type="button" styling="primary" @click.native="scrollTo('app')" :text="data.buttonText" className="heading-cta-button" style="display: inline-flex;"/>
          <Button v-else type="button" styling="primary" @click.native="scrollTo('video')" :text="data.buttonText" className="heading-cta-button" style="display: inline-flex;"/>

          <!-- <span class="tagline"><Icon :height="16" :width="16" className="inline down animateArrow" name="arrow" :active="true"/></span> -->
        </div>

        <div class="col-4 bottle-with-glass" v-if="campaign">
          <div class="">
            <img src="@/assets/images/glas-fles-nice.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="molen" v-if="campaign">
      <img src="@/assets/images/molen.svg" alt="molen visual" draggable="false">
    </div>
  </header>
</div>
</template>

<script>
import Heading from '@/components/common/Heading'
import BodyText from '@/components/common/BodyText'
import Button from '@/components/common/Button'
import Icon from '@/components/common/Icon'

export default {
  data: () => ({
    mobileNavShow: false,
  }),
  props: {
    data: {
      type: Object,
      required: false
    },
    campaign: {
      type: Boolean,
      required: false,
      default: false
    },
    navigationData: {
      type: Object,
      required: false
    },
    isSubPage: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    Heading,
    BodyText,
    Button,
    Icon
  },
  methods: {
    scrollTo(item) {
      const selector = document.querySelector('.' + item)
      const dividedWindow = (window.innerHeight / 4)
      const selectorY = selector.getBoundingClientRect().y

      if(item == 'video') {
        selector.querySelector('video').play()
      }

      window.scroll({
        top: (selectorY - dividedWindow),
        left: 0,
        behavior: 'smooth'
      })
    },
    toggleMobileNav() {
      this.mobileNavShow = !this.mobileNavShow

      this.toggleBodyFixed()
    },
    toggleBodyFixed() {
      const body = document.body

      if(this.mobileNavShow == true) {
        body.classList.add('fixed-scroll')
      } else {
        body.classList.remove('fixed-scroll')
      }
    },
    iconsUrl(iconName) {
      return require(`@/assets/images/icons/${iconName}.svg`);
    },
    toggleStickyNav() {
      const navbar = this.$refs.nav
      const page = document.body

      if (navbar !== undefined) {
        const sticky = navbar.offsetTop + 125

        if (window.pageYOffset >= sticky) {

          navbar.style.top = 0
          navbar.classList.add('stickey')
          page.style.paddingTop = '93px'

        } else if(window.pageYOffset <= sticky) {

          page.style.paddingTop = 0
          navbar.classList.remove('stickey')
          navbar.style.background =  ''

        }
      }
    }
  },
  mounted() {
    console.log('mounted');
  [...document.querySelectorAll('.to-animate')]
    .forEach((node, idx) => {
      setTimeout(() => {
        node.classList.add('fade-in-up')
        node.classList.remove('to-animate')
      }, (idx * 180) + 6000)
    })

    window.onscroll = e => {
      this.toggleStickyNav();
    }

    this.toggleBodyFixed()
  }
}
</script>

<style lang="scss">
@import '~$styles/app';

img {
  object-fit: contain;
  width: 100%;
}

.molen {
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

.container-sm {
  margin-left: auto;
  margin-right: auto;
}

.nav-target {
  transition: 300ms ease;
  background: rgba(white, 0);
  position: relative;

  &.stickey {
    position: fixed;
    z-index: 100;
    width: 100%;
    margin-top: 0;
    left: 0;
    background: linear-gradient(rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%);

    .nav-container {
      margin-top: 0;
      margin: 16px auto;

      .logo {
        @include breakpoint(s) {
          height: 50px;
          width: 53px;
        }
      }
    }
  }
}

.nav-container {
  margin: 16px auto 0;
  display: flex;
  align-items: center;

  .logo {
    height: 77px;
    width: 81px;
    z-index: 15;
  }

  .nav-bar {
    margin-left: auto;

    @include breakpoint(s) {
      display: none;
    }

    ul {
      list-style: none;

      li {
        color: #9c9ba1;
        display: inline-block;
        font-size: 15px;
        margin-left: 48px;

        &.router-link-active {
          a {
            color: #fd8e26;
          }
        }

        &:first-child {
          margin-left: 0;
        }

        a {
          text-decoration: none;
          color: inherit;
          font-weight: 700;
          transition: 220ms ease-in-out;
          cursor: pointer;

          &:hover {
            color: #fd8e26;
          }
        }
      }
    }
  }

  .nav-bar-toggler {
    display: none;
    margin-left: auto;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    border: 2px solid $template-color-blue-default;
    position: relative;
    align-items: center;
    justify-content: center;
    z-index: 15;

    @include breakpoint(s) {
      display: flex;
    }

    .nav-icon {
      width: 24px;
      height: 2px;
      background: $template-color-blue-default;
      display: inline-block;
      border-radius: 1px;
      transition: all .15s ease-in-out;

      &::before {
        content: '';
        display: block;
        width: 24px;
        height: 2px;
        background: $template-color-blue-default;
        border-radius: 1px;
        position: relative;
        top: 5px;
        transform-origin: center;
        transition: all .15s ease-in-out;
      }

      &::after {
        content: '';
        display: block;
        width: 24px;
        height: 2px;
        background: $template-color-blue-default;
        border-radius: 1px;
        position: relative;
        bottom: 7px;
        transform-origin: center;
        transition: all .2s ease-in-out;
      }

      &.active {
        opacity: 1;
        background: transparent;

        &::after {
          transform: rotate(45deg);
          bottom: 1px;
        }

        &::before {
          transform: rotate(-45deg);
          top: 1px;
        }
      }
    }
  }

  .nav-bar-mobile {
    display: block;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #fff;
    z-index: 14;

    ul {
      list-style: none;
      margin-top: 144px;
      padding: 0 16px 16px 16px;

      @media screen and (max-height: 480px) {
        margin-top: 80px;
      }

      li {
        display: block;
        margin: 0 0 16px 0;


        &:last-child {
          padding-bottom: 24px;
          border-bottom: 2px solid rgba($template-color-black-lighter, 0.24);
        }

        &.router-link-exact-active a{
          color: $template-color-orange-default;
        }

        a {
          color: #9c9ba1;
          display: block;
          font-size: 28px;
          text-decoration: none;
          line-height: 38px;
        }
      }
    }

    .social {
      padding: 0 16px 16px 16px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .info-container {
        max-width: 248px;

        .info-title {
          color: #9c9ba1;
          font-size: 28px;
          line-height: 38px;
        }

        p {
          max-width: 243px;
          margin-top: 16px;
        }
      }

      .icons-container {
        display: flex;
        flex-direction: column;
        align-self: flex-start;

        span {
          cursor: pointer;

          &:last-child {
            margin-top: 16px;
          }
        }
        img {
          width: 48px;
          height: 48px;
        }
      }
    }
  }
}

.header {
  margin: 0 auto;
}

.content-container {
  margin: 104px auto 0;

  @include breakpoint(s) {
    margin-top: 32px;
  }

  .heading-title {
    margin-bottom: 16px;

    @media screen and (min-width: 1180px) {
      font-size: 56px;
      line-height: 1.1;
    }
  }

  .heading-cta-button {
    margin-top: 24px;
  }

  .tagline {
    display: inline-flex;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    color: #1072bb;
    margin-top: 16px;

    .icon.arrow.down {
        display: inline-block;
        transform: rotate(90deg);
        margin-left: 8px;
    }
  }

  .heading-image {
    img {
      opacity: 0;
      width: 50%;
      float: right;
      object-fit: contain
    }
  }

  .col-8 {

    @include breakpoint(m) {
      &.full {
        flex-basis: 80%!important;
        max-width: 80%!important;
      }
    }

    @include breakpoint(s) {
      flex-basis: 100%!important;
      max-width: 100%!important;

      &.full {
        flex-basis: 100%!important;
        max-width: 100%!important;
      }
    }
  }

  .bottle-with-glass {
    @include breakpoint(s) {
      display: none;
    }

    img {
      max-height: 490px;
    }
  }
}

.animateArrow {
  animation-duration: 2300ms;
  animation-name: moveArrow;
  animation-iteration-count: infinite;
}

@keyframes moveArrow {
  0% {
    transform: translateY(-4px) rotate(90deg);
  }

  50% {
    transform: translateY(4px) rotate(90deg);
  }

  100% {
    transform: translateY(-4px) rotate(90deg);
  }
}

.animateGlass {
  animation-duration: 600ms;
  animation-name: fadeInLeft;
  animation-fill-mode: forwards;
  animation-delay: 300ms;
  animation-timing-function: ease-out;
}

@keyframes fadeInLeft {
  to {
    opacity: 1;
    transform: translateX(0px)
  }

  from {
    opacity: 0;
    transform: translateX(80px)
  }
}

.menu-enter-active, .menu-leave-active {
  transition: all .25s;
  transform: scale(1.0);
}
.menu-enter, .menu-leave-to {
  opacity: 0;
  transform: scale(.9);
}

 .to-animate {
    opacity: 0;
    transform: translate3d(0, 64px, 0);
  }

  .fade-in-up {
    animation-duration: 600ms;
    animation-name: fadeInUp;
    animation-fill-mode: forwards;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 64px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

</style>
