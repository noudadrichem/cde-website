<template>
<div class="app" id="app-section">
  <div class="container-md">
    <div class="grid">
      <div class="col-12-full text">
        <div class="col-5">
          <Heading tag="h1" :text="data.title" />
          <Heading tag="h2" :text="data.subTitle" />
          <BodyText :text="data.bodyText" />
        </div>
      </div>
    </div>
  </div>

  <div class="container-md apppie">
    <div class="scroll-container" ref="scrollContainer">
      <div class="grid app-container">
        <div class="col-6 ingredient-column">
          <div class="item-selection grid">
            <div class="dropdown-section">
              <Heading tag="h3" text="Welke ingrediënten?" />
              <div :class="['ingredient-block', hasChosenRecipe ? '' : 'active']">
                <InputText placeholder="Zoek ingrediënten..." type="search" iconType="search" v-model="searchQuery" @input="getCategoryItems" />
                <div :class="{ dropdown: true, active: currentReceipt.name }">
                  <Dropdown v-if="!searchQuery" :data="categories" />
                  <DropdownItems v-else :items="filteredItems" />
                </div>
              </div>
            </div>
            <div class="radio-list-section">
              <Heading tag="h3" text="Hoeveel?" />
              <RadioList :data="selectedIngredient" />
              <Button @click.native="setQuantityValue(currentSelectedQuantity)" type="button" styling="secondary" :disabled="quantityIsDisabled" text="Voeg toe" />
            </div>
          </div>
        </div>
        <div class="col-6 recipe-column">
          <Recipe :choosenIngredients="completeRecipe.ingredients" :counter="getTotalMililiters(completeRecipe, true)" />
          <div class="about-the-cocktail">
            <Heading tag="h3" text="vertel iets over deze cocktail" />
            <textarea v-model="completeRecipe.body" placeholder="Klik hier om wat te vertellen over jou zelf gemaakte cocktail."></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-app-navigation" v-if="isMobile">
      <div class="container-md">
        <div class="grid between">
          <Button @click.native="previousStep" text="Vorige stap" type="button" styling="secondary" :disabled="(isOnStep === 0)"/>
          <Button @click.native="nextStep" :text="nextBtnText" type="button" styling="primary" class="right"/>
        </div>
      </div>
    </div>
  </div>
  <Modal v-show="isAddingToRanking" :newRecipeId="newRecipeId" @close="$eventBus.$emit('openAddToModal', false)" />
</div>
</template>

<script>
import Heading from '../common/Heading'
import BodyText from '../common/BodyText'
import InputText from '../common/InputText'
import Dropdown from './Dropdown'
import RadioList from './RadioList'
import Recipe from './Recipe'
import Button from '../common/Button'
import DropdownItems from './DropdownItems'
import Modal from './/Modal'
import conf from '../../../config'

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    categories: {
      type: Array,
      required: false
    },
    getTotalMililiters: {
      type: Function,
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
      ingredients: ['35 ml Crazy Dutch Dry Gin'],
      userName: '',
      email: ''
    },
    newRecipeId: '',
    hasChosenRecipe: false,
    isMobile: false,
    nextBtnText: 'Volgende stap',
    isOnStep: 0
  }),
  watch: {
    isOnStep(stepToGo) {
      if(stepToGo === 2) {
        this.$set(this, 'nextBtnText', 'Voeg meer toe')
      } else {
        this.$set(this, 'nextBtnText', 'Volgende stap')
      }

      const scrollContainer = this.$refs.scrollContainer
      scrollContainer.style.scrollBehavior = 'smooth'

      const stepSize = window.innerWidth
      scrollContainer.scrollTo(stepToGo * stepSize, 0)
    }
  },
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
    if (window.innerWidth < 768) {
      this.$set(this, 'isMobile', true)
    }
  },
  created() {
    this.$eventBus.$on('getSelectedValue', this.selectIngredient)
    this.$eventBus.$on('giveQuantityValue', this.getQuantityValue)
    this.$eventBus.$on('openAddToModal', this.showAddToRankingModal)
    this.$eventBus.$on('participentInfo', this.addRecipeToRanglist)
    this.$eventBus.$on('cocktailNameInput', this.setCocktailNameValue)
    this.$eventBus.$on('deleteIngredient', this.deleteIngredient)
    this.$eventBus.$on('reset', this.checkIfFull)
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
      const selectedIngredient = this.categoryItems.reduce((accu, {
          items
        }) => {
          accu.push(...items)
          return accu
        }, [])
        .find(item => item.name.toLowerCase() === itemName)

      this.$set(this, 'selectedIngredient', selectedIngredient)
      this.$set(this.currentReceipt, 'name', selectedIngredient.name)

      this.$set(this, 'hasChosenRecipe', true)

      if(window.innerWidth < 768) {
        this.$set(this, 'isOnStep', 1)
      }
    },
    getQuantityValue(quantityValue) {
      this.$set(this, 'quantityIsDisabled', false)

      this.$set(this, 'currentSelectedQuantity', quantityValue)
    },
    setQuantityValue(quantityValue) {
      this.$set(this.currentReceipt, 'quantity', quantityValue)

      const recipeString = `${this.currentReceipt.quantity} ${this.currentReceipt.name}`
      console.log('recipeString: ', recipeString);
      const copyChoosen = [...this.completeRecipe.ingredients, recipeString]
      this.$set(this.completeRecipe, 'ingredients', copyChoosen),

      this.resetReceipt()
    },
    resetReceipt() {
      this.$set(this, 'searchQuery', '')
      this.$set(this, 'quantityIsDisabled', true)
      this.$set(this, 'hasChosenRecipe', false)
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
          this.$http.post(`${conf.apiUrl}campaign/recipes/create`, this.completeRecipe)
            .then(res => {
              const { message, succes } = res.body

              if(succes) {
                const { newRecipeId } = res.body
                this.$set(this, 'newRecipeId', newRecipeId)
                this.$eventBus.$emit('publishToRanking', succes)
                this.$eventBus.$emit('infoMessage', message)
                console.log({ newRecipeId });
              } else {
                this.$eventBus.$emit('infoMessage', message)
              }
            })
        })
    },
    setCocktailNameValue(nameValue) {
      this.$set(this.completeRecipe, 'name', nameValue)
    },
    deleteIngredient(indexToDelete) {
      const copy = [...this.completeRecipe.ingredients]
      copy.splice(indexToDelete, 1)
      this.$set(this.completeRecipe, 'ingredients', copy)
    },
    checkIfFull() {
      const ml = this.getTotalMililiters(this.completeRecipe, false)

      if (ml > 700) {
        this.$set(this, 'hasChosenRecipe', true)
      }

      if(window.innerWidth < 768) {
        this.$set(this, 'isOnStep', 2)
      }
    },
    nextStep() {
      if (this.isOnStep === 2) {
        this.$set(this, 'isOnStep', 0)
      } else {
        this.$set(this, 'isOnStep', this.isOnStep + 1)
      }
    },
    previousStep() {
      if (this.isOnStep === 1) {
        this.$set(this, 'isOnStep', 0)
      } else if (this.isOnStep === 2) {
        this.$set(this, 'isOnStep', 1)
      } else if (this.isOnStep === 0) {
        this.$set(this, 'isOnStep', 2)
      }
    }
  }
}
</script>

<style lang="scss">
.app {
    padding-bottom: 80px;
    background-image: url("../../assets/images/confetti@2x.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top center;

    .container-md {
        @media screen and (max-width: 767px) {
            &.apppie {
                padding: 0 !important;
            }
        }
    }

    .scroll-container {
        @media screen and (max-width: 767px) {
            width: 100vw;
            max-width: 100vw;
            overflow-x: hidden;
            overflow-y: hidden;
            padding: 32px 0;

            ::-webkit-scrollbar,
            ::-webkit-scrollbar-thumb,
            ::-webkit-scrollbar-track {
                display: none !important;
            }
        }
    }

    .app-container {
        @media screen and (max-width: 767px) {
            padding: 32px 0;
            width: 300vw;
            -webkit-overflow-scrolling: touch;

            .ingredient-column {
                flex-basis: auto !important;
                width: 200vw !important;
                display: inline-block !important;
                padding: 0;

                .dropdown-section {
                    width: 100vw;
                    max-width: 100vw;
                    padding: 0 6%;
                }

                .radio-list-section {
                    width: 100vw;
                    padding: 0 6%;
                    margin-left: 0;

                    .radio-list {
                        width: 100%;
                    }
                }
            }

            .recipe-column {
                flex-basis: auto !important;
                width: 100vw !important;
                display: inline-block !important;
                padding: 0 !important;

                .recipe {
                    width: 86% !important;
                }
            }
        }
    }

    .item-selection {
        margin-top: 48px;
        @media screen and (max-width: 767px) {
            margin-top: 0;
        }

        .ingredient-block {
            overflow: hidden;
            border-radius: 2px;
            border: 1px solid rgba(#EBEBEB, 1);
            pointer-events: none;

            &.active {
                border-color: #1072B8;
                pointer-events: all;
            }
        }

        .dropdown-section {
            max-width: 280px;
            max-height: 411px;
            background: #fff;

            .dropdown.active {
                opacity: 0.6;

                * {
                    user-select: none !important;
                }
            }

            .input-text {
                z-index: 1;
            }
        }

        .radio-list-section {
            margin-left: 32px;
            background: #fff;

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

        @media screen and (max-width: 1066px) {
            top: 0;
        }

        .about-the-cocktail {
            background: white;
            max-width: 480px;
            margin: 0 auto;
            padding: 24px;
            border: 2px solid #F0F2F7;
            border-radius: 2px;
            margin-top: 32px;

            @media screen and (max-width: 767px) {
                display: none !important;
            }

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

.fade-enter-active,
.fade-leave-active {
    transition: none;
}

.fade-enter {
    opacity: 0;
}

.fade-leave-to {
    transition: none;
}
</style>
