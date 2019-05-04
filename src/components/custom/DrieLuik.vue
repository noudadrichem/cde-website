<template>
<div class="drieluik" ref="drieluik" id="producten">
  <div class="container-md">
      <Slick ref="slick" :options="slickOptions" class="grid slick">
        <div class="col-4 luik to-animate" ref="luik" v-for="(luik, idx) in data.luiken" :key="idx">
          <div class="img-overlay-container">
            <img :src="luik.imageName" alt="luik image" draggable="false">
            <div class="img-overlay" v-if="idx !== 1"></div>
          </div>

          <div :class="['content', { active: luikShown[idx] }, [ idx === 1 ? 'middle' : '' ]]">
            <Heading tag="h1" :text="luik.heading"/>


            <transition name="height">
              <BodyText v-if="luikShown[idx]" :text="luik.bodyText"/>
              <BodyText v-else-if="notMobile" :text="luik.bodyText"/>
              <BodyText v-else-if="!notMobile" :text="truncate(luik.bodyText, 22)"/>
            </transition>

            <div v-if="idx === 1">
              <a v-if="!notMobile" @click.prevent="setLuikActive(idx)" class="read-more">{{ btnText[idx] }}</a>
              <Button type="button" styling="primary" @click.native="$router.push('/campaign')" text="Begin meteen met maken" style="margin-top: 16px;"/>
            </div>
            <div v-else>
              <a v-if="!notMobile" @click.prevent="setLuikActive(idx)" class="read-more">{{ btnText[idx] }}</a>
            </div>
          </div>
        </div>
      </Slick>
  </div>

  <div class="skewed-backdrop"></div>
</div>
</template>

<script>
import Heading from '../common/Heading'
import BodyText from '../common/BodyText'
import Button from '../common/Button'
import Slick from 'vue-slick';

//mixin
import {truncate} from '@/mixins/truncate'

export default {
  mixins: [truncate],
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    luikShown: [false, false, false],
    btnText: ['Lees meer', 'Lees meer', 'Lees meer'],
    activeSlide: 0,
    slideToRight: 0,
    slickOptions: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      dots: true,
      arrows: false
    },
    notMobile: true
  }),
  methods: {
    luikUrl(imageName) {
      return require(`@/assets/images/${imageName}.png`)
    },
    setLuikActive(luikIndex) {
      const toShowOrNotToShow = !this.luikShown[luikIndex]

      this.luikShown.forEach((isShown, idx) => {
        if (idx === luikIndex) {
          this.$set(this.luikShown, luikIndex, toShowOrNotToShow)
        } else {
          this.$set(this.luikShown, idx, false)
        }

        if(isShown == true) {
          this.$set(this.btnText, idx, 'Lees meer')
        } else {
          this.$set(this.btnText, luikIndex, 'Lees minder')
        }
      })
    },
    showLuikWhenInFold() {
      if (this.$refs.drieluik !== undefined) {
        const drieluikIsInScreen = this.$refs.drieluik.getBoundingClientRect().y - (window.innerHeight - 100)

        if(drieluikIsInScreen < 0) {
          this.$refs.luik.forEach((luikNode, idx) => {
            setTimeout(() => {
              luikNode.classList.add('fade-in-up')
              luikNode.classList.remove('to-animate')
            },idx * 220)
          })
        }
      }
    },
    setSlideActive(slideIndex) {
      this.$set(this, 'activeSlide', slideIndex)
      this.$set(this, 'slideToRight', (slideIndex * window.innerWidth))
    },
    checkIfNotMobile() {

      if(window.innerWidth > 767) {
        this.$set(this, 'notMobile', true)
      }else {
        this.$set(this, 'notMobile', false)
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.showLuikWhenInFold)
    window.addEventListener('resize', this.checkIfNotMobile)

    if(window.innerWidth > 767) {
      this.$refs.slick.destroy()
    }

    this.showLuikWhenInFold()
    this.checkIfNotMobile()
  },
  components: {
    Heading,
    BodyText,
    Slick,
    Button
  }
}
</script>

<style lang="scss">
@import '~$styles/app';

$animationTime: 420ms ease;

.drieluik {
  margin-top: 160px;
  position: relative;
  max-width: 100vw;

  @include breakpoint(s) {
    margin-top: 80px;

    .container-md {
      padding: 0 !important;
    }

    .grid {
      width: 100vw !important;
      display: block !important;
      transition: $animationTime !important;

      .slick-slide {
        display: inline-block !important;
        vertical-align: middle;
        float:none;
      }
    }
  }

  @include breakpoint(xs) {
    margin-top: 40px;
  }

  .slick-slider {
    overflow: hidden;
  }

  .container-md {
    margin-left: auto;
    margin-right: auto;
  }

  .luik {
    height: 500px;
    padding: 0 !important;
    box-sizing: border-box;
    position: relative;
    flex-basis: 33.33333333% !important;
    width: 33.33333333%!important;
    max-width: 33.33333333%!important;

    @include breakpoint(m) {
      flex-basis: 33.33333333% !important;
      width: 33.33333333%!important;
      max-width: 33.33333333%!important;
    }

    @include breakpoint(s) {
      flex-basis: 100% !important;
      width: 100%!important;
      max-width: 100%!important;
    }

    .img-overlay-container {
      position: relative;
      object-fit: cover;
      line-height: 0;
      height: 430px;

      @include breakpoint(s) {
        width: 90%;
        margin: 0 auto;
        height: 200px
      }

      @include breakpoint(xs) {
        width: 90%;
        margin: 0 auto;
        height: 200px;
      }

      .img-overlay {
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }

    img {
      width: 70%;
      margin: auto;
      display: block;
      object-fit: cover;
      z-index: 1;

      @include breakpoint(s) {
        margin: 0 auto;
        width: auto;
        height: 100%;
      }

      @include breakpoint(xs) {
        margin: 0 auto;
        width: auto;
        height: 100%;
      }
    }

    .content {
      background: #fff;
      box-shadow: 0 6px 34px 0 rgba(0,0,0,0.10);
      border-radius: 2px;
      position: relative;
      z-index: 3;
      transform: translateY(-80px);
      margin: 0 24px;
      padding: 32px;
      transition: $animationTime;

      @include breakpoint(s) {
        transform: none;
      }

      &.middle {
        margin: 0;

        @include breakpoint(s) {
          margin: 0 24px;
        }
      }

      &.active {
        margin: 0;
      }

      .read-more {
        margin-top: 8px;
        font-size: 15px;
        color: #9c9ba1;
        font-weight: 700;
        line-height: 22px;
        border-bottom: 1px solid #9c9ba1;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        outline: none;
      }
    }
  }

  ul.slick-dots {
    display: inline-block;
    list-style-type: none;
    padding: 0;
    width: 100%;
    text-align: center;

    @include breakpoint(s) {
      margin-top: 32px;
    }

    @include breakpoint(xs) {
      margin-top: 24px;
    }

    li {
      display: inline;
      opacity: 0.5;

      &.slick-active {
        opacity: 1;
      }

      button {
        margin-right: 5px;
        height: 12px;
        width: 12px;
        background-color: #D0D0D0;
        border-radius: 50%;
        display: inline-block;
        opacity: 0.5;
        font-size: 0;
        outline: none;

        &.active {
          opacity: 1;
        }
      }
    }
  }

  .skewed-backdrop {
    background-image: linear-gradient(-180deg, rgba(235,235,235,0.80) 0%, rgba(248,248,248,0.01) 86%, rgba(248,248,248,0.00) 87%);
    height: 400px;
    width: 100%;
    transform: skewY(14deg);
    position: absolute;
    top: 600px;
    z-index: -1;

    @include breakpoint(s) {
      top: 248px;
      height: 400px;
    }
  }
}
</style>
