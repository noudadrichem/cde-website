<template>
<div>
  <div class="info-section container-sm">
    <div class="grid center">
      <div class="col-5">
        <Heading tag="h1" :text="data.mainTitle" className="heading-title"/>
        <Heading tag="h2" :text="data.subTitle" className="heading-sub-title"/>
        <BodyText :text="data.text"/>
      </div>

      <div class="col-5 align-right align-middle">
        <div class="quote-container">
          <div class="quote-text">"{{ data.quoteText }}"</div>
          <div class="quote-name">- {{ data.quoteAuthor }}</div>
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
  props: ['data'],
  components: {
    Heading,
    BodyText,
    Button,
    Icon
  }
}
</script>

<style lang="scss" >
@import '~$styles/app';

.info-section {
  margin: 180px auto 0;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 414px) {
    margin: 40px auto 0;
  }

  .quote-container {
    text-align: center;

    @media screen and (max-width: 414px) {
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

        @media screen and (max-width: 414px) {
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
