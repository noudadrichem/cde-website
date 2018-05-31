<template>
  <div class="app">
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
                <DropdownItems v-else="searchQuery" :items="filteredItems"/>

            </div>
            <div class="radio-list-section">
              <Heading tag="h3" text="Hoeveel?"/>
              <RadioList :data="categories"/>
              <Button type="button" styling="secondary" disabled text="Button text"/>
            </div>
          </div>
        </div>
        <div class="col-6">
          <Recipe counter="35"/>
        </div>
      </div>
    </div>
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
    filteredItems: []
  }),
  components: {
    Heading,
    BodyText,
    InputText,
    Dropdown,
    RadioList,
    Recipe,
    Button,
    DropdownItems
  },
  mounted() {
    this.categoryItems = this.categories
  },
  methods: {
    getCategoryItems() {
      const allItemsInArray = this.categories.reduce(function(accu, item) {
         accu.push(...item.items)
         return accu
      }, [])
      const filteredCategoryItems = allItemsInArray.filter( (item) => {
        return JSON.stringify(item).toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1
      })
      this.filteredItems = filteredCategoryItems
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

  .recipe {
    top: -136px;
    position: relative;
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
