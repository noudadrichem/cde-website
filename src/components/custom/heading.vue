<template >
  <header class="container-sm">

      <nav class="nav-container">
        <div class="logo">
          <img src="@/assets/images/logo.png" alt="Crazy Dutch Experience">
        </div>

        <div class="nav-bar right hide-mobile">
          <ul>
            <li v-for="(item, idx) in data.navbarItems" :key="idx">
              <a :href="item.link">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </nav>


    <div class="content-container">
      <div class="grid">
        <div class="col-8">

          <Heading tag="h1" :text="data.title" className="heading-title" style="font-size: 48px; line-height: 56px;"/>
          <Heading tag="h2" :text="data.subTitle" className="heading-sub-title"/>
          <BodyText :text="data.bodyText"/>

          <Button type="button" styling="primary" @click="console.log('click cta')" :text="data.buttonText" className="heading-cta-button" style="display: inline-flex;"/>

          <span class="tagline"><Icon :height="16" :width="16" className="inline down animateArrow" name="arrow" :active="true"/></span>
        </div>

        <div class="col-4 hide-mobile" v-if="campaign">
          <div class="">
            <img src="@/assets/images/glas-fles@2x.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="molen" v-if="campaign">
      <img src="@/assets/images/molen.svg" alt="molen visual" draggable="false">
    </div>
  </header>
</template>

<script>
import Heading from '@/components/common/Heading'
import BodyText from '@/components/common/BodyText'
import Button from '@/components/common/Button'
import Icon from '@/components/common/Icon'

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    campaign: {
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
  }
}
</script>

<style lang="scss" >

img {
  object-fit: contain;
  width: 100%;
}


.molen {
  position: absolute;
  right: 0;
  top: 0;
}
.container-sm {
  margin-left: auto;
  margin-right: auto;
}

.nav-container {
  margin: 32px auto 0;
  display: flex;
  align-items: center;

  .logo {
    height: 77px;
    width: 81px;
  }

  .nav-bar {
    margin-left: auto;
    ul {
      list-style: none;

      li {
        color: #9c9ba1;
        display: inline-block;
        font-size: 15px;
        margin-left: 48px;

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
}

.content-container {
  margin: 104px auto 0;

  @media screen and (max-width: 414px) {
    margin-top: 32px;
  }

  .heading-title {
    margin-bottom: 16px;
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


</style>
