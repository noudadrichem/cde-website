<template>
<div>
  <div class="info-section container-sm">
    <div class="grid center">
      <div class="col-5">
        <Heading tag="h1" text="Crazy Dutch Dry Gin" className="heading-title"/>
        <Heading tag="h2" text="De cocktail campagne" className="heading-sub-title"/>
        <BodyText text="Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui."/>
      </div>

      <div class="col-5 align-right align-self-middle">
        <div class="quote-container">
          <div class="quote-text">"Met smaak valt te twisten"</div>
          <div class="quote-name">- Kees Koelewijn</div>
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
import Button from '@/components/common/Button'
import Icon from '@/components/common/Icon'

export default {
  components: {
    Heading,
    BodyText,
    Button,
    Icon
  }
}
</script>

<style lang="scss" scoped>
@import '~$styles/app';

.info-section {
  margin: 180px auto 0;
  position: relative;
  z-index: 2;

  @media screen and (max-width: $bp-mobile-lg) {
    margin: 40px auto 0;
  }

  .quote-container {
    text-align: center;

    @media screen and (max-width: $bp-mobile-lg) {
      margin-top: 32px;
      text-align: left;
    }

    .quote {
      &-text {
        font-family: Georgia-Italic;
        font-size: 28px;
        color: #FD8E26;
        display: block;
        flex-flow: row wrap;
        margin-bottom: 8px;

        @media screen and (max-width: $bp-mobile-lg) {
          font-size: 24px;
        }
      }

      &-name {
        font-size: 15px;
        color: rgba(156,155,161,0.46);
        line-height: 22px;
      }
    }
  }
}

.skewed-backdrop {
  background-image: linear-gradient(-180deg, rgba(235,235,235,0.80) 0%, rgba(248,248,248,0.00) 99%);
  height: 516px;
  width: 100%;
  transform: skewY(-16deg);
  position: absolute;
  top: 800px;
  z-index: -1;
}
</style>
