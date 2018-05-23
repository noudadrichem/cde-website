<template>
<div class="campaign" v-if="!loading">
  <Heading :data="heading" :campaign="true" />
  <StepsSection :data="drieluik" />
</div>
</template>

<script>
import Heading from '@/components/custom/Heading'
import StepsSection from '@/components/custom/StepsSection'
import conf from '@/config'

export default {
  name: 'Campaign',
  data: () => ({
    pageId: '5afc46024a04c38c80d4fca0',
    loading: true,
    "heading": {
      "title": "Maak je eigen smaaksensatie met de Crazy Dutch Dry Gin!",
      "subTitle": "De meest unieke smaakbeleving wint zelf een unieke beleving",
      "buttonText": "Begin meteen met maken",
      "bodyText": "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. ",
      "infoText": "Meer over Crazy Dutch?",
      "imageUrl": "glas-logo.png",
      "navbarItems": [{
          "text": "Campagne",
          "link": "#campagne"
        },
        {
          "text": "Producten",
          "link": "#producten"
        },
        {
          "text": "Contact",
          "link": "#contact"
        }
      ]
    },
    "steps": {
      "steps": [{
          "imageName": "food",
          "heading": "Food",
          "bodyText": "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Nean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.",
          "readMoreLink": "#food"
        },
        {
          "imageName": "drinks",
          "heading": "Drinks",
          "bodyText": "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Nean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.",
          "readMoreLink": "#drinks"
        },
        {
          "imageName": "other-stuff",
          "heading": "Other stuff",
          "bodyText": "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Nean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.",
          "readMoreLink": "#other-stuff"
        }
      ]
    }
  }),
  components: {
    Heading,
    StepsSection
  },
  mounted() {
    this.$http.get(`${conf.apiUrl}content/${this.pageId}/sections`)
      .then(data => {
        console.log(data.body);
        const findSectionData = (sectionName) => data.body.sections.find(obj => obj.title === sectionName).contents

        // this.$set(this, 'heading', findSectionData('heading'))
        // this.$set(this, 'drieluik', findSectionData('drieluik'))
        this.$set(this, 'loading', false)
      })
  }
}
</script>

<style lang="scss">
@import '~$styles/app';

.campaign {
    width: 100%;
}
</style>
