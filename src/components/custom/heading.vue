<template >
  <header class="container-l">
    <nav class="nav-container">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="Crazy Dutch Experience">
      </div>

      <div class="nav-bar">
        <ul>
          <li><a>Campagne</a></li>
          <li><a>Producten</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </nav>


    <div class="content-container">
      <div class="row align-center">
        <div class="col-5">
          <Heading tag="h1" text="Crazy Dutch Dry Gin" className="heading-title"/>
          <Heading tag="h2" text="De cocktail campagne" className="heading-sub-title"/>
          <BodyText text="Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui."/>
          <Button type="button" styling="primary" text="Maak je eigen cocktail!" className="heading-cta-button"/>
          <span class="tagline">Kom meer te weten over ons <Icon :height="16" :width="16" className="inline down" name="arrow" :active="true"/></span>
        </div>

        <div class="col-5 align-right">
          <img src="https://via.placeholder.com/420x320" alt="heading-image"/>
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
  components: {
    Heading,
    BodyText,
    Button,
    Icon
  }
}
</script>

<style lang="scss" scoped>
.nav-container {
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 80px;
  padding-right: 80px;

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
  margin-top: 104px;

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
}
</style>
