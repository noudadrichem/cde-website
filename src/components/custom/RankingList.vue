<template>
  <div class="ranking-list">
    <table class="table">
      <tbody>
        <tr>
          <th>Rang</th>
          <th>Cocktail naam</th>
          <th>Maker</th>
          <th>Recept</th>
          <th>Stem</th>
        </tr>
        <tr v-for="(rank, index) in orderedRanking" :key="index">
          <td>{{ index + 1 }}.</td>
          <td>{{ rank.cocktailName }}</td>
          <td>{{ rank.makerName }}</td>
          <td><a :href="rank.receiptUrl" target="_blank">Bekijk het recept</a></td>
          <td><VoteButton type="vote"/></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import VoteButton  from '@/components/custom/VoteButton'

export default {
  computed: {
    orderedRanking() {
      return this.ranking.sort((a,b) => a.votes < b.votes).slice(0, 10)
    }
  },
  props: {
    ranking: {
      type: Array,
      required: true
    }
  },
  components: {
    VoteButton
  }
}
</script>

<style lang="scss" scoped>
@import '~$styles/app';

.ranking-list {
  margin: 0 auto;

  table {
    border-collapse:  collapse;
    width: 100%;
    text-align: left;
    max-width: 968px;

    tr {
      transition: box-shadow .1s ease-in-out;

      &:not(:first-child):nth-child(odd) {
        background-color: rgba($template-color-white-lighter, 0.9);
      }

      &:not(:first-child) {
        border-left: 1px solid $template-color-white-light;
        border-right: 1px solid $template-color-white-light;
        border-bottom: 1px solid $template-color-white-light;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
      }

      &:last-child {
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
      }

      &:nth-child(2) {
        border-top: 1px solid $template-color-white-light;
      }

      &:hover {
        border-radius: 2px;

        &:not(:first-child) {
          box-shadow: 0px 2px 14px 1px rgba($template-color-black-lighter, 0.4);
        }
      }

      td, th {
        padding: 28px;

        @include breakpoint(m) {
          padding: 16px;
        }

        @include breakpoint(s) {
          padding: 8px;
        }
      }

      td {
        a {
          color: $template-color-blue-default;
          font-weight: 700;
        }
      }

      th {
        font-size: 12px;
        color: $template-color-blue-default;
        font-weight: 700;
        text-transform: uppercase;
        padding-bottom: 4px;
      }
    }
  }
}
</style>
