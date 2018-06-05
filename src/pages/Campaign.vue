<template>
<div class="campaign" v-if="!loading">
  <Heading :data="heading" :campaign="true" />
  <StepsSection :data="howTo" />
  <AppSection :data="app" :categories="categories" :getTotalMililiters="getTotalMililiters" />
  <RankingList :ranking="recipes"/>
  <Footing :data="footer"/>
  <RecipeModal v-show="showUrlRecipeModal" :choosenRecipe="currentlySelectRankingRecipe" :getTotalMililiters="getTotalMililiters" @close="closeRecipeModal"/>
</div>
</template>

<script>
import Heading from '@/components/custom/Heading'
import StepsSection from '@/components/custom/StepsSection'
import AppSection from '@/components/custom/AppSection'
import RankingList from '@/components/custom/RankingList'
import Footing from '@/components/custom/Footing'
import conf from '@/config'
import RecipeModal from '@/components/custom/RecipeModal'

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
    footer: {},
    recipes: [],
    currentlySelectRankingRecipe: {},
    showUrlRecipeModal: false
  }),
  components: {
    Heading,
    StepsSection,
    AppSection,
    Footing,
    RankingList,
    RecipeModal
  },
  created() {
    this.$eventBus.$on('showRanking', this.selectRanking)
  },
  methods: {
    selectRanking(id) {
      this.$router.push({ path: `/campaign/${id}` })
    },
    setSelectedRecipeToModal(urlRecipeId) {
      this.$http.get(`${conf.apiUrl}campaign/recipes/${urlRecipeId}`)
        .then(({ body: recipeFromUrl }) => {
          this.$set(this, 'currentlySelectRankingRecipe', recipeFromUrl)
          this.$set(this, 'showUrlRecipeModal', true)
        })
    },
    closeRecipeModal() {
      this.$set(this, 'showUrlRecipeModal', false)
      this.$set(this, 'currentlySelectRankingRecipe', {})
      this.$router.push({ path: '/campaign' })
    },
    getTotalMililiters({ ingredients }) {
      const total = ingredients.reduce((acuu, ing) => {
        const splittedIng = ing.split(' ')
        if(splittedIng[1] == 'ml') {
          acuu = acuu + parseInt(splittedIng[0])
        }

        return acuu
      }, 0)

      return total
    }
  },
  watch: {
    $route({ params: { recipeName }}, from ) {
      console.log('ROUTE CHANGED', recipeName);
      if(recipeName !== undefined) {
        this.setSelectedRecipeToModal(recipeName)
      }
    }
  },
  mounted() {
    this.$http.get(`${conf.apiUrl}content/${this.pageId}/sections`)
      .then(data => {
        const findSectionData = (sectionName, data) => data.body.sections.find(obj => obj.title === sectionName).contents

        this.$set(this, 'heading', findSectionData('heading', data))
        this.$set(this, 'howTo', findSectionData('howTo', data))

        this.$http.get(`${conf.apiUrl}content/5afc46024a04c38c80d4fca0/sections`)
          .then(res => {
            this.$set(this, 'footer', findSectionData('footer', res))
            this.$set(this, 'loading', false)
          })

        this.$http.get(`${conf.apiUrl}campaign/recipes`)
          .then(({ body: recipes }) => {
            this.$set(this, 'recipes', recipes)
          })
      })

    this.$http.get(`${conf.apiUrl}campaign/categories`)
      .then(data => {
        this.$set(this, 'categories', data.body)

        this.$set(this, 'loading', false)
      })

    const { recipeName: urlRecipeId } = this.$route.params
    if(urlRecipeId) {
      this.setSelectedRecipeToModal(urlRecipeId)
    }
  }
}
</script>

<style lang="scss">
@import '~$styles/app';

.campaign {
    width: 100%;
}
</style>
