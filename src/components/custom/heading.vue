<template >
<div>
  <div class="nav-target" ref="nav">
    <nav class="nav-container container-sm">
      <div class="logo">
        <router-link to="/"><img src="@/assets/images/logo.png" alt="Crazy Dutch Experience"></router-link>
      </div>

      <div class="nav-bar right hide-mobile">
        <ul>
          <li v-for="(item, idx) in data.navbarItems" :key="idx">
            <a :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>

  <header class="container-sm">

    <div class="content-container">
      <div class="grid">
        <div class="col-8">

          <Heading tag="h1" :text="data.title" className="heading-title" style="font-size: 48px; line-height: 56px;"/>
          <Heading tag="h2" :text="data.subTitle" className="heading-sub-title"/>
          <BodyText :text="data.bodyText"/>

          <Button type="button" styling="primary" @click.native="scrollToVideo" :text="data.buttonText" className="heading-cta-button" style="display: inline-flex;"/>

          <!-- <span class="tagline"><Icon :height="16" :width="16" className="inline down animateArrow" name="arrow" :active="true"/></span> -->
        </div>

        <div class="col-4 hide-mobile" v-if="campaign">
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
  },
  methods: {
    scrollToVideo() {
      const video = document.querySelector('.video')
      const dividedWindow = (window.innerHeight / 4)
      const videoY = video.getBoundingClientRect().y

      video.querySelector('video').play()

      window.scroll({
        top: (videoY - dividedWindow),
        left: 0,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    // snel en lelijk 👍👍
    window.onscroll = e => {
      const navbar = this.$refs.nav;
      const sticky = navbar.offsetTop + 109;

      if (window.pageYOffset >= sticky) {
        navbar.classList.add('stickey')
        document.body.style.paddingTop = '157px'

        if(pageYOffset >= sticky + 300) {
          navbar.style.top = 0
        }
      } else {
        navbar.classList.remove('stickey')
        document.body.style.paddingTop = 0
      }

    }
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

.nav-target {
  transition: 300ms ease;
  background: rgba(white, 0.7);;

  &.stickey {
    position: fixed;
    z-index: 100;
    width: 100%;
    margin-top: 0;
    padding: 32px 0 16px;
    top: -125px;
    left: 0;
    background: white;

    .nav-container {
      margin-top: 0;
    }
  }
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
