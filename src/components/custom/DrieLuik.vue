<template>
<div class="drieluik">
  <div class=" container-l">
    <div class="row">

      <div class="col-4 luik" v-for="luik in luiken">
        <img :src="luikUrl(luik.imageName)" alt="luik image" draggable="false">
        <div class="content">
          <Heading tag="h1" :text="luik.heading"/>
          <BodyText :text="luik.bodyText"/>
          <a class="read-more" :href="luik.readMoreLink">Lees meer</a>
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
      return require(`@/assets/images/${imageName}.png`);
    },
  },
  components: {
    Heading,
    BodyText
  }
}
</script>

<style lang="scss" scoped>
.drieluik {
  margin-top: 180px;
  position: relative;

  .luik {
    background: #C6D1E0;
    height: 500px;
    padding: 0;

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

      .read-more {
        margin-top: 8px;
        font-size: 15px;
        color: #9c9ba1;
        font-weight: 700;
        line-height: 22px;
        border-bottom: 1px solid #9c9ba1;
        text-decoration: none;
        display: inline-block;
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
}
</style>
