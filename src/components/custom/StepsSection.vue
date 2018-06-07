<template>
<div class="steps-container">
  <div class="container-md">
    <div class="grid">
      <div class="col-12">
        <Heading tag="h1" :text="data.title" className="heading-title" />
        <Heading tag="h2" :text="data.subTitle" className="heading-sub-title" />
      </div>
    </div>
  </div>

  <div class="container-md">
    <div class="steps grid between" ref="steps">
      <div class="step col-4 to-animate" v-for="(step, idx) in data.steps" ref="step">
        <span :class="['number', { active: luikShown[idx] }]">{{ idx + 1 }}</span>

        <div :class="['content', { active: luikShown[idx] }]">
          <h3>{{ step.title }}</h3>

          <BodyText v-if="luikShown[idx]" :text="step.text" />
          <BodyText v-else :text="truncate(step.text, 22)" />

          <a @click.prevent="setLuikActive(idx)" class="read-more">{{ btnText[idx] }}</a>
        </div>
      </div>
    </div>
  </div>
  <div class="skewed-backdrop hide-mobile"></div>
</div>
</template>

<script>
import Heading from '@/components/common/Heading'
import BodyText from '@/components/common/BodyText'

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
  components: {
    Heading,
    BodyText
  },
  data: () => ({
    luikShown: [false, false, false],
    btnText: ['Lees meer', 'Lees meer', 'Lees meer']
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
      const drieluikIsInScreen = this.$refs.steps.getBoundingClientRect().y - (window.innerHeight - 100)

      if (drieluikIsInScreen < 0) {
        this.$refs.step.forEach((luikNode, idx) => {
          setTimeout(() => {
            luikNode.classList.add('fade-in-up')
            luikNode.classList.remove('to-animate')
          }, idx * 220)
        })
      }
    },
    setSlideActive(slideIndex) {
      const windowScreen = window.innerWidth

      this.$set(this, 'activeSlide', slideIndex)
      this.$set(this, 'slideToRight', (slideIndex * windowScreen))
    },
  },
  mounted() {
    window.addEventListener('scroll', this.showLuikWhenInFold)

    this.showLuikWhenInFold()
  },
}
</script>

<style lang="scss">
@import '~$styles/app';
$animationTime: 420ms ease;

.steps-container {
  padding-bottom: 80px;
  margin-top: 128px;

  @include breakpoint(s) {
    margin-top: 96px;
    padding-bottom: 32px;
  }

  .col-12 {
    max-width: 100%!important;
    flex-basis: 100%!important;
  }

  .container-md {
      margin: auto;
  }

  .steps {
    margin-top: 80px;

    @include breakpoint(s) {
      margin-top: 40px;
    }
  }

  .step {
    position: relative;
    display: flex;
    justify-content: flex-end;

    @include breakpoint(s) {
      flex-basis: 100%!important;
      max-width: 100%!important;
    }

    .number {
      position: absolute;
      top: 40px;
      left: 0;
      opacity: 0.4;
      font-weight: 700;
      font-family: 'Open Sans', sans-serif;
      font-size: 128px;
      color: rgba(156,155,161,0.24);
      letter-spacing: 0;

      @include breakpoint(s) {
        font-size: 80px;
      }
    }

    .content {
      border-radius: 4px;
      position: relative;
      z-index: 3;
      max-width: 400px;
      height: auto;
      padding: 24px;
      transition: $animationTime;
      margin: 0 auto 0 0;

      @include breakpoint(m) {
        max-width: 95%;
      }

      @include breakpoint(s) {
        max-width: 80%;
      }

      @include breakpoint(xs) {
        max-width: 100%;
      }

      &.active {
          background: #fff;
          box-shadow: 0 6px 34px 0 rgba(0,0,0,0.10);
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

.skewed-backdrop {
  background-image: linear-gradient(-180deg, rgba(235,235,235,0.80) 0%, rgba(248,248,248,0.01) 86%, rgba(248,248,248,0.00) 87%);
  height: 816px;
  width: 100%;
  transform: skewY(-22deg);
  position: absolute;
  top: 1100px;
  z-index: -1;
  opacity: 0.4;
}
</style>
