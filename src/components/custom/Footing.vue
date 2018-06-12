<template>
    <div class="container-md footer" id="contact">
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

      <div class="grid container">
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
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    iconsUrl(iconName) {
      return require(`@/assets/images/icons/${iconName}.svg`);
    },
  },
  components: {
    Heading,
    BodyText
  },
  mounted() {
    // remove errors LOLOLOL
    setTimeout(() => console.clear(), 1000)
  }
}
</script>

<style lang="scss">
@import '~$styles/app';

.footer {
  padding-bottom: 64px;
  box-sizing: border-box;
  margin-top: 80px;

  @include breakpoint(s) {
    margin-top: 40px;
    padding-bottom: 32px;
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

  .container {
    position: relative;
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

        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }

  .logo {
    position: absolute;
    right: 0;

    img {
      width: 100%;
      max-width: 80px;
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

      a {
        text-decoration: none;
        position: relative;
        transition: all .15s ease-in-out;

        &:hover {
          color: $template-color-orange-default;

          &:after {
            background: $template-color-orange-default;
          }
        }

        &:after {
          content: '';
          width: 100%;
          height: 1px;
          display: block;
          margin-top: 1px;
          background: $template-font-color;
          transition: all .15s ease-in-out;
        }
      }
    }
  }
}
</style>
