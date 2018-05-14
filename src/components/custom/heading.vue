<template >
  <header class="container-sm">

    <div class="grid">
      <nav class="nav-container">
        <div class="logo">
          <img src="@/assets/images/logo.png" alt="Crazy Dutch Experience">
        </div>

        <div class="nav-bar hide-mobile">
          <ul>
            <li v-for="(item, idx) in navbarItems" :key="idx">
              <a :href="item.link">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>


    <div class="content-container">
      <div class="grid center">
        <div class="col-5">

          <Heading tag="h1" :text="title" className="heading-title"/>
          <Heading tag="h2" :text="subTitle" className="heading-sub-title"/>
          <BodyText :text="bodyText"/>

          <Button type="button" styling="primary" @click="console.log('click cta')" :text="buttonText" className="heading-cta-button"/>

          <span class="tagline">{{ infoText }} <Icon :height="16" :width="16" className="inline down animateArrow" name="arrow" :active="true"/></span>
        </div>

        <div class="col-5 heading-image hide-mobile">
          <div>
            <img :src="require(`@/assets/images/${imageUrl}`)" alt="glas crazy dutch experience" class="animateGlass"/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Heading from '@/components/common/Heading'
import BodyText from '@/components/common/BodyText'
import Button from '@/components/common/Button'
import Icon from '@/components/common/Icon'

export default {
  data: () => ({
    title: 'Crazy Dutch Dry Gin',
    subTitle: 'De cocktail campagne',
    buttonText: 'Maak je eigen cocktail!',
    bodyText: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.',
    infoText: 'Kom meer te weten over ons',
    imageUrl: 'glas-logo.png',
    navbarItems: [{
      text: 'Campagne',
      link: '#campagne'
    }, {
      text: 'Producten',
      link: '#producten'
    }, {
      text: 'Contact',
      link: '#contact'
    }]
  }),
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

    img {
      object-fit: contain;
      width: 100%;
    }
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

  @media screen and (max-width: $bp-mobile-lg) {
    margin-top: 32px;
  }

  .heading-title {
    margin-bottom: 16px;
  }

  .heading-cta-button {
    margin-top: 24px;
  }

  .tagline {
    display: flex;
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
