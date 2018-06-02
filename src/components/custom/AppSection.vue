<template>
  <div class="app" id="app-section">
    <div class="container-md">
      <div class="grid">
        <div class="col-12-full">
          <div class="col-5">
            <Heading tag="h1" :text="data.title"/>
            <Heading tag="h2" :text="data.subTitle"/>
            <BodyText :text="data.bodyText"/>
          </div>
        </div>
        <div class="col-6">
          <div class="item-selection grid">
            <div class="dropdown-section">
              <Heading tag="h3" text="Welke ingrediënten?"/>
              <InputText placeholder="Zoek ingrediënten..." type="search" iconType="search" v-model="searchQuery" @input="getCategoryItems"/>

                <Dropdown v-if="!searchQuery" :data="categories"/>
                <DropdownItems v-else :items="filteredItems"/>

            </div>
            <div class="radio-list-section">
              <Heading tag="h3" text="Hoeveel?"/>
              <RadioList :data="selectedIngredient"/>
              <Button @click.native="setQuantityValue(currentSelectedQuantity)" type="button" styling="secondary" :disabled="quantityIsDisabled" text="Voeg toe"/>
            </div>
          </div>
        </div>
        <div class="col-6 recipe-column">
          <Recipe :choosenIngredients="completeRecipe.ingredients" counter="35"/>
          <div class="about-the-cocktail">
            <Heading tag="h3" text="vertel iets over deze cocktail"/>
            <textarea v-model="completeRecipe.body" placeholder="Klik hier om wat te vertellen over jou zelf gemaakte cocktail."></textarea>
          </div>
        </div>
      </div>
    </div>
    <Modal v-show="isAddingToRanking" @close="$eventBus.$emit('openAddToModal', false)" />
  </div>
</template>

<script>
import Heading from '@/components/common/Heading'
import BodyText from '@/components/common/BodyText'
import InputText from '@/components/common/InputText'
import Dropdown from '@/components/custom/Dropdown'
import RadioList from '@/components/custom/RadioList'
import Recipe from '@/components/custom/Recipe'
import Button from '@/components/common/Button'
import DropdownItems from '@/components/custom/DropdownItems'
import Modal from '@/components/custom/Modal'
import conf from '@/config'

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    categories: {
      type: Array,
      required: false
    }
  },
  data: () => ({
    searchQuery: '',
    categoryItems: [],
    filteredItems: [],
    selectedIngredient: {},
    quantityIsDisabled: true,
    currentSelectedQuantity: '',
    currentReceipt: {},
    choosenIngredients: [],
    isAddingToRanking: false,
    completeRecipe: {
      name: 'Recipe name',
      body: '',
      upvotes: 0,
      ingredients: [],
      userName: '',
      email: ''
    }
  }),
  components: {
    Heading,
    BodyText,
    InputText,
    Dropdown,
    RadioList,
    Recipe,
    Button,
    DropdownItems,
    Modal
  },
  mounted() {
    this.$set(this, 'categoryItems', this.categories)
  },
  created() {
    this.$eventBus.$on('getSelectedValue', this.selectIngredient)
    this.$eventBus.$on('giveQuantityValue', this.getQuantityValue)
    this.$eventBus.$on('openAddToModal', this.showAddToRankingModal)
    this.$eventBus.$on('participentInfo', this.addRecipeToRanglist)
    this.$eventBus.$on('cocktailNameInput', this.setCocktailNameValue)
  },
  methods: {
    getCategoryItems() {
      const allItemsInArray = this.categories.reduce((accu, item) => {
         accu.push(...item.items)
         return accu
      }, [])

      const filteredCategoryItems = allItemsInArray.filter((item) => {
        return JSON.stringify(item).toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1
      })

      this.$set(this, 'filteredItems', filteredCategoryItems)
    },
    selectIngredient(itemName) {
      console.log({ itemName });
      const selectedIngredient = this.categoryItems.reduce((accu, { items }) => {
        accu.push(...items)
        return accu
      }, [])
      .find(item => item.name.toLowerCase() === itemName)

      this.$set(this, 'selectedIngredient', selectedIngredient)
      this.$set(this.currentReceipt, 'name', selectedIngredient.name)
    },
    getQuantityValue(quantityValue) {
      this.$set(this, 'quantityIsDisabled', false)

      this.$set(this, 'currentSelectedQuantity', quantityValue)
    },
    setQuantityValue(quantityValue) {
      this.$set(this.currentReceipt, 'quantity', quantityValue)

      const copyChoosen = [...this.completeRecipe.ingredients, this.currentReceipt]
      this.$set(this.completeRecipe, 'ingredients', copyChoosen),

      this.resetReceipt()

    },
    resetReceipt() {
      this.$set(this, 'searchQuery', '')
      this.$set(this, 'quantityIsDisabled', true)
      this.$set(this, 'selectedIngredient', {})
      this.$set(this, 'currentSelectedQuantity', '')
      this.$set(this, 'currentReceipt', {})
      this.$eventBus.$emit('reset')
    },
    showAddToRankingModal(val) {
      this.$set(this, 'isAddingToRanking', val)
    },
    setParticipentInfo({ name, email }) {
      return new Promise(resolve => {
        this.$set(this.completeRecipe, 'userName', name)
        this.$set(this.completeRecipe, 'email', email)
        resolve()
      })
    },
    addRecipeToRanglist(eventPayload) {
      this.setParticipentInfo(eventPayload)
        .then(() => {
          this.$http.post(`${conf.apiUrl}/campaign/recipes/create`, this.completeRecipe)
            .then(res => {
              console.log('post req to recipe with particpent: ', res)
            })
        })
    },
    setCocktailNameValue(nameValue) {
      this.$set(this.completeRecipe, 'name', nameValue)
    }
  }
}
</script>

<style lang="scss">
.app {
  padding-bottom: 80px;

  .item-selection {
    margin-top: 48px;

    .dropdown-section {
      max-width: 280px;
      max-height: 411px;

      .input-text {
        z-index: 1;
      }
    }

    .radio-list-section {
      margin-left: 32px;

      .button {
        margin-top: 8px;

        button {
          width: 100%;
        }
      }
    }
  }

  .recipe-column {
    position: relative;
    top: -136px;

    .about-the-cocktail {
      max-width: 480px;
      margin: 0 auto;
      padding: 24px;
      border: 2px solid #F0F2F7;
      border-radius: 2px;
      margin-top: 32px;

      textarea {
        border: none;
        outline: none;
        font-size: 15px;
        color: #363542;
        line-height: 22px;
        resize: none;
        width: 100%;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: none;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-to {
  transition: none;
}
</style>
