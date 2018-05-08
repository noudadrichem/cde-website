<template>
<div class="drieluik" ref="drieluik">
  <div class=" container-l">
    <div class="row">

      <div class="col-4 luik to-animate" ref="luik" v-for="(luik, idx) in luiken" :key="idx">
        <img :src="luikUrl(luik.imageName)" alt="luik image" draggable="false">

        <div :class="['content', {active: luikShown[idx]}]">
          <Heading tag="h1" :text="luik.heading"/>
          <BodyText :text="luik.bodyText"/>

          <transition name="fade-height">
            <div v-show="luikShown[idx]">
              <br/>
              <BodyText :text="luik.bodyText"/>
            </div>
          </transition/>
          <a @click.prevent="setLuikActive(idx)" class="read-more">Lees meer</a>
        </div>
      </div>

    </div>
  </div>
  <div class="skewed-backdrop"></div>
</div>
</template>

<script>
import Heading from '@/components/common/Heading'
import BodyText from '@/components/common/BodyText'

export default {
  data: () => ({
    luikShown: [false, false, false],
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
        } else {
          this.$set(this.luikShown, idx, false)
        }
      })
    },
    showLuikWhenInFold() {
      const drieluikIsInScreen = this.$refs.drieluik.getBoundingClientRect().y - (window.innerHeight - 100)
      console.log({
        message: 'showLuikWhenInFold',
        drieluikIsInScreen,
      });
      if(drieluikIsInScreen < 0) {
        this.$refs.luik.forEach((luikNode, idx) => {
          setTimeout(() => {
            luikNode.classList.add('fade-in-up')
          },idx * 220)
        })
      }
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
$animationTime: 420ms ease;

.drieluik {
  margin-top: 180px;
  position: relative;

  .luik {
    background: #C6D1E0;
    height: 500px;
    padding: 0;
    box-sizing: border-box;

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
