<template>
<div class="steps">
  <div class="container-sm">
    <Heading tag="h1" :text="data.title" className="heading-title" />
    <Heading tag="h2" :text="data.subTitle" className="heading-sub-title" />
  </div>

  <div class="container-md">
    <div class="steps grid between" ref="steps">
      <div class="step col-4 to-animate" v-for="(step, idx) in data.steps" ref="step">
        <span class="number">{{ idx + 1 }}</span>

        <div>
          <h3>{{ step.heading }}</h3>

          <BodyText :text="step.bodyText.substring(0, 84)"/>

          <div v-show="luikShown[idx]">
            <BodyText :text="step.bodyText.substring(50, Infinity)"/>
          </div>

          <a @click.prevent="setLuikActive(idx)" class="read-more">{{ btnText[idx] }}</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Heading from '@/components/common/Heading'
import BodyText from '@/components/common/BodyText'

export default {
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
  },
}
</script>

<style lang="scss" scoped>
.steps {
    padding-bottom: 300px;
    margin-top: 128px;

    .container-md {
        margin: auto;
    }

    .step {
        position: relative;
        display: flex;
        justify-content: flex-end;

        .number {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0.4;
            font-weight: 1000;
            font-family: 'Open Sans', sans-serif;
            font-size: 128px;
            color: rgba(156,155,161,0.24);
            letter-spacing: 0;
        }

        p {
            font-size: 14px;
            color: #363542;
            letter-spacing: 0;
            line-height: 24px;
            max-width: 313px;
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
</style>
