<template>
<div class="drieluik" ref="drieluik">
  <div class=" container-md">
    <div class="grid" :style="{ transform: `translateX(-${slideToRight}px)`}">

      <div class="col-4 luik to-animate" ref="luik" v-for="(luik, idx) in luiken" :key="idx">
        <img :src="luikUrl(luik.imageName)" alt="luik image" draggable="false">

        <div :class="['content', { active: luikShown[idx] }]">
          <Heading tag="h1" :text="luik.heading"/>
          <BodyText :text="luik.bodyText"/>

          <transition name="fade-height">
            <div v-show="luikShown[idx]">
              <br/>
              <BodyText :text="luik.bodyText"/>
            </div>
          </transition/>
          <a @click.prevent="setLuikActive(idx)" class="read-more">{{ btnText[idx] }}</a>
        </div>
      </div>
    </div>
  </div>

  <div class="dots">
    <ul>
      <li v-for="(luik, idx) in luiken" :key="idx">
        <span :class="['dot', activeSlide === idx ? 'active' : '']" @click="setSlideActive(idx)"></span>
      </li>
    </ul>
  </div>

  <div class="skewed-backdrop hide-mobile"></div>
</div>
</template>

<script>
import Heading from '@/components/common/Heading'
import BodyText from '@/components/common/BodyText'

export default {
  data: () => ({
    luikShown: [false, false, false],
    btnText: ['Lees meer', 'Lees meer', 'Lees meer'],
    activeSlide: 0,
    slideToRight: 0,
    luiken: [{
      imageName: 'food',
      heading: 'Food',
      bodyText: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Nean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.',
      readMoreLink: '#food'
    }, {
      imageName: 'drinks',
      heading: 'Drinks',
      bodyText: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Nean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.',
      readMoreLink: '#drinks'
    }, {
      imageName: 'other-stuff',
      heading: 'Other stuff',
      bodyText: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Nean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.',
      readMoreLink: '#other-stuff'
    }]
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
          this.$set(this.btnText, luikIndex, 'Lees minder')
        } else {
          this.$set(this.luikShown, idx, false)
          this.$set(this.btnText, idx, 'Lees meer')
        }
      })
    },
    showLuikWhenInFold() {
      const drieluikIsInScreen = this.$refs.drieluik.getBoundingClientRect().y - (window.innerHeight - 100)

      if(drieluikIsInScreen < 0) {
        this.$refs.luik.forEach((luikNode, idx) => {
          setTimeout(() => {
            luikNode.classList.add('fade-in-up')
          },idx * 220)
        })
      }
    },
    setSlideActive(slideIndex) {
      const windowScreen = window.innerWidth

      this.$set(this, 'activeSlide', slideIndex)
      this.$set(this, 'slideToRight', (slideIndex * windowScreen))
    }
  },
  mounted() {
    window.addEventListener('scroll', this.showLuikWhenInFold)
  },
  components: {
    Heading,
    BodyText
  }
}
</script>

<style lang="scss" scoped>
@import '~$styles/app';

$animationTime: 420ms ease;

.drieluik {
  margin-top: 180px;
  position: relative;
  max-width: 100vw;

  @media screen and (max-width: $bp-mobile-lg) {
    overflow: hidden;

    .container-md {
      padding: 0 !important;
    }

    .grid {
      width: 3 * 100vw !important;
      display: block !important;
      transition: $animationTime !important;
    }
  }

  .luik {
    height: 500px;
    padding: 0;
    box-sizing: border-box;

    @media screen and (max-width: $bp-mobile-lg) {
      width: 100vw;
      display: inline-block;
    }

    img {
      width: 100%;
      object-fit: cover;
      z-index: 1;
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

      &.active {
        margin: 0;
        padding: 32px 56px;
        transform: translateY(-50%);

        @media screen and (max-width: $bp-mobile-lg) {
          transform: translateY(-50%);
        }
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
      }
    }
  }

  .dots {
    text-align: center;
    display: none;

    @media screen and (max-width: $bp-mobile-lg) {
      display: block;
    }

    ul {
      display: inline-block;
      list-style-type: none;
      padding: 0;

      li {
        display: inline;

        .dot {
          margin-right: 5px;
          height: 12px;
          width: 12px;
          background-color: #D0D0D0;
          border-radius: 50%;
          display: inline-block;
          opacity: 0.5;

          &.active {
            opacity: 1;
          }
        }
      }
    }
  }

  .skewed-backdrop {
    background-image: linear-gradient(-180deg, rgba(235,235,235,0.80) 0%, rgba(248,248,248,0.01) 86%, rgba(248,248,248,0.00) 87%);
    height: 816px;
    width: 100%;
    transform: skewY(14deg);
    position: absolute;
    top: 500px;
    z-index: -1;
  }

  .fade-height-enter-active,
  .fade-height-leave {
    transition: $animationTime;
    opacity: 1;
    max-height: 220px;
  }
  .fade-height-enter,
  .fade-height-leave-to {
    transition: $animationTime;
    opacity: 0;
    max-height: 0;
  }
}
</style>
