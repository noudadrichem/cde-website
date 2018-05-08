<template>
  <footer>
    <div class="container-m">
      <div class="row top">
        <div class="col-4">
          <Heading tag="h3" :text="volgOns.title" className="footer-heading"/>

          <BodyText :text="volgOns.text" className="footer-body"/>

          <div class="icons">
            <ul>
              <li v-for="(value, key) in volgOns.socialIcons">
                <a :href="value"><img :src="iconsUrl(key)"/></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="ruler"></div>

      <div class="row bottom">
        <div class="col-3" v-for="(menu, key) in footerNavigations">
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
  </footer>
</template>

<script>
import Heading from '@/components/common/Heading'
import BodyText from '@/components/common/BodyText'

export default {
  data: () => ({
    volgOns: {
      title: 'Volg ons!',
      text: 'Blijf op de hoogte van de laatste nieuwsberichten en nieuwe producten.',
      socialIcons: {
        facebook: '#facebook',
        instagram: '#instagram'
      }
    },
    footerNavigations: {
      campagne: [{
        title: 'Maak je eigen cocktail',
        link: '#Maak+je+eigen+cocktail'
      }, {
        title: 'Bekijk de top 10',
        link: '#Bekijk+de+top+10'
      },{
        title: 'Zie de gehele ranglijst',
        link: '#Zie+de+gehele+ranglijst'
      }],
      contact: [{
        title: 'info@crazydutchexperience.nl',
        link: 'mailto:info@crazydutchexperience.nl'
      }, {
        title: '+31 6 293 297 12',
        link: '#'
      }]
    }
  }),
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

<style lang="scss" scoped>
footer {
  padding-top: 300px;

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

  .right {
    margin-left: auto;
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

  .logo img {
    width: 100%;
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
