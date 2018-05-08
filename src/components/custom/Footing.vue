<template>
  <footer>
    <div class="container-m">
      <div class="row top">
        <div class="col-4">
          <Heading tag="h3" text="Volg ons!" className="footer-heading"/>

          <BodyText text="Blijf op de hoogte van de laatste nieuwsberichten en nieuwe producten." className="footer-body"/>

          <div class="icons">
            <ul>
              <li><img src="https://via.placeholder.com/32x32"/></li>
              <li><img src="https://via.placeholder.com/32x32"/></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="ruler"></div>

      <div class="row bottom">
        <div class="col-3">
          <Heading tag="h3" text="Campagne" className="footer-heading"/>

          <ul class="footer-nav">
            <li>Maak je eigen cocktail</li>
            <li>Bekijk de top 10</li>
            <li>Zie de gehele ranglijst</li>
          </ul>
        </div>

        <div class="col-3">
          <Heading tag="h3" text="Contact" className="footer-heading"/>

          <ul class="footer-nav">
            <li>info@crazydutchexperience.nl</li>
            <li>+31 6 293 297 12</li>
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
    }
  }
}
</style>
