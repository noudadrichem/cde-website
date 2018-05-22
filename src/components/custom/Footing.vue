<template>
    <div class="container-sm footer">
      <div class="grid">
        <div class="col-4">
          <Heading tag="h3" :text="data.volgOns.title" className="footer-heading"/>

          <BodyText :text="data.volgOns.text" className="footer-body"/>

          <div class="icons">
            <ul>
              <li v-for="(value, key) in data.volgOns.socialIcons">
                <a :href="value"><img :src="iconsUrl(key)"/></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="ruler"></div>

      <div class="grid">
        <div class="col-3" v-for="(menu, key) in data.footerNavigations">
          <Heading tag="h3" :text="key" className="footer-heading"/>

          <ul class="footer-nav" v-for="item in menu">
            <li><a :href="item.link">{{ item.title }}</a></li>
          </ul>
        </div>

        <div class="col-1 logo right">
          <img src="@/assets/images/logo.png" alt="logo">
        </div>
      </div>
    </div>
</template>

<script>
import Heading from '@/components/common/Heading'
import BodyText from '@/components/common/BodyText'

export default {
  props: ['data'],
  methods: {
    iconsUrl(iconName) {
      return require(`@/assets/images/icons/${iconName}.svg`);
    },
  },
  components: {
    Heading,
    BodyText
  }
}
</script>

<style lang="scss" >

.footer {
  padding-top: 300px;
  box-sizing: border-box;

  @media screen and (max-width: 414px) {
    padding-top: 64px;
  }

  .footer-heading {
    margin-bottom: 16px;
  }

  .footer-body {
    font-size: 15px;
    color: #363542;
    line-height: 22px;
  }

  .ruler {
    background: rgba(156,155,161,0.24);
    border-radius: 4px;
    width: 100%;
    height: 2px;
    margin: 32px 0;
  }

  @media screen and (max-width: 414px) {
    .right {
      margin-left: 0 !important;
    }
  }

  .icons {
    ul {
      list-style: none;
      margin-top: 24px;

      li {
        display: inline-block;
        margin-right: 24px;
      }
    }
  }

  .logo {
    max-width: 100px;
    img {
      width: 100%;
    }
  }

  .footer-nav {
    list-style: none;
    font-size: 15px;
    color: #363542;
    line-height: 22px;

    li {
      display: inline-block;
      margin-bottom: 16px;
      border-bottom: 1px solid #363542;

      a {
        text-decoration: none;
      }
    }
  }
}
</style>
