<template>
<div class="campaign" v-if="!loading">
  <Heading :data="heading" :campaign="true" :navigationData="footer.volgOns"/>
  <StepsSection :data="howTo" />
  <AppSection :data="app" :categories="categories" :getTotalMililiters="getTotalMililiters" />
  <RankingList :ranking="recipes" :all="false"/>
  <Footing :data="footer"/>
  <RecipeModal v-if="showUrlRecipeModal" :choosenRecipe="currentlySelectRankingRecipe" :getTotalMililiters="getTotalMililiters" @close="closeRecipeModal"/>

  <div class="already-voted-tooltip" v-show="hasVoted">
    {{ infoMessage }}
  </div>
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
      "title": "Maak nu je eigen Crazy Dutch Cocktail",
      "subTitle": "Wij geven jou de mogelijkheid om een Crazy Dutch Experience te krijgen!",
      "bodyText": "Bitter, zoet, umami, of tropisch fruitig? Heb je al een keuze kunnen maken? Crazy Dutch Dry Gin is je basisdrank. Daarna komt jouw creatieve brein met de zelfbedachte mix",
    },
    categories: {},
    footer: {},
    recipes: [],
    currentlySelectRankingRecipe: {},
    showUrlRecipeModal: false,
    hasVoted: false,
    infoMessage: ''
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
    this.$eventBus.$on('voted', (id) => {
      this.$set(this, 'infoMessage', 'Je hebt helaas al een keer eerder gestemd.')
      this.$set(this, 'hasVoted', true)

      setTimeout(() => {
        this.$set(this, 'hasVoted', false)
      }, 5000)
    })
    this.$eventBus.$on('infoMessage', mess => {
      this.$set(this, 'infoMessage', mess)
      this.$set(this, 'hasVoted', true)

      setTimeout(() => {
        this.$set(this, 'hasVoted', false)
      }, 5000)
    })
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
    getTotalMililiters({ ingredients }, isRecipe) {
      const total = ingredients.reduce((acuu, ing) => {
        const splittedIng = ing.split(' ')
        if(splittedIng[1] == 'ml') {
          acuu = acuu + parseInt(splittedIng[0])
        }

        if(acuu > 700 && isRecipe) {
          this.$eventBus.$emit('infoMessage', 'Je kan niet meer dan 700ml')
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

.already-voted-tooltip {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  height: 40px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  justify-content: center;
  background: #9FC7E3;
  border: 1px solid #1072B8;
  border-radius: 2px;
  font-size: 16px;
  color: #1072B8;
  letter-spacing: 0;
  text-align: center;
  z-index: 999;
}
</style>
