<template>
<div class="campaign" v-if="!loading">
  <Heading :data="heading" :campaign="true" />
  <StepsSection :data="steps" />

  <Footing :data="footer"/>
</div>
</template>

<script>
import Heading from '@/components/custom/Heading'
import StepsSection from '@/components/custom/StepsSection'
import Footing from '@/components/custom/Footing'
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
      "title": "Hoe maak jij zelf een cocktail?",
      "subTitle": "Zo moeilijk is het echt niet!",
      "steps": [{
          "heading": "Kies je smaken",
          "bodyText": "Integer tincidunt. Cras dapibus. Vivamus elementum. Cras dapibus. Vivamus elementum. Cras. Nean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.",
          "readMoreLink": "#1"
        },
        {
          "heading": "Mix je smaken",
          "bodyText": "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Nean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.",
          "readMoreLink": "#2"
        },
        {
          "heading": "Uploaden maar!",
          "bodyText": "Mauris rutrum metus mi, ac condimentum lacus ultricies eget. In auctor felis ac dignissim scelerisque. Duis non malesuada lorem. Interdum et malesuada fames ac ante ipsum ",
          "readMoreLink": "#3"
        }
      ]
    },
    footer: {}
  }),
  components: {
    Heading,
    StepsSection,
    Footing
  },
  mounted() {
    this.$http.get(`${conf.apiUrl}content/${this.pageId}/sections`)
      .then(data => {
        console.log(data.body);
        const findSectionData = (sectionName) => data.body.sections.find(obj => obj.title === sectionName).contents

        // this.$set(this, 'heading', findSectionData('heading'))
        // this.$set(this, 'drieluik', findSectionData('drieluik'))
        this.$set(this, 'footer', findSectionData('footer'))
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
