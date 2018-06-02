<template>
<div class="campaign" v-if="!loading">
  <!-- <Heading :data="heading" :campaign="true" />
  <StepsSection :data="howTo" /> -->
  <AppSection :data="app" :categories="categories" />
  <!-- <RankingList/> -->
  <!-- <Footing :data="footer"/> -->
</div>
</template>

<script>
import Heading from '@/components/custom/Heading'
import StepsSection from '@/components/custom/StepsSection'
import AppSection from '@/components/custom/AppSection'
import RankingList from '@/components/custom/RankingList'
import Footing from '@/components/custom/Footing'
import conf from '@/config'

export default {
  name: 'Campaign',
  data: () => ({
    pageId: '5b0ac474bfb053002643a5a4',
    loading: true,
    heading: {},
    howTo: {},
    app: {
      "title": "Maak je eigen cocktail!",
      "subTitle": "Wij geven jou de mogelijkheid om je eigen cocktail te maken.",
      "bodyText": "Mauris rutrum metus mi, ac condimentum lacus ultricies eget. In auctor felis ac dignissim scelerisque. Duis non malesuada lorem. Interdum et malesuada fames ac ante ipsum",
    },
    categories: {},
    footer: {}
  }),
  components: {
    Heading,
    StepsSection,
    AppSection,
    Footing,
    RankingList
  },
  mounted() {
    this.$http.get(`${conf.apiUrl}content/${this.pageId}/sections`)
      .then(data => {
        console.log(`${conf.apiUrl}content/${this.pageId}/sections`);
        console.log(data.body)
        const findSectionData = (sectionName, data) => data.body.sections.find(obj => obj.title === sectionName).contents

        this.$set(this, 'heading', findSectionData('heading', data))
        this.$set(this, 'howTo', findSectionData('howTo', data))


        this.$http.get(`${conf.apiUrl}content/5afc46024a04c38c80d4fca0/sections`)
          .then(res => {
            this.$set(this, 'footer', findSectionData('footer', res))

            this.$set(this, 'loading', false)
          })
      })

    this.$http.get(`${conf.apiUrl}campaign/categories`)
      .then(data => {
        console.log(data.body)
        this.$set(this, 'categories', data.body)

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
