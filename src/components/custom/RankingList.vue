<template>
  <div class="ranking-list">
    <table class="table">
      <tbody class="normal">
        <tr>
          <th>Rang</th>
          <th>Cocktail naam</th>
          <th>Maker</th>
          <th>Recept</th>
          <th>Stem</th>
        </tr>
        <tr v-for="(rank, index) in orderedRanking" :key="index">
          <td>{{ index + 1 }}.</td>
          <td>{{ rank.name }}</td>
          <td>{{ rank.particepent.fullName }}</td>
          <td><a :href="rank.receiptUrl" target="_blank">Bekijk het recept</a></td>
          <td><VoteButton type="vote"/></td>
        </tr>
      </tbody>

      <tbody class="mobile">
        <tr v-for="(rank, index) in orderedRanking" :key="index">
          <td>{{ index + 1 }}.</td>
          <td>
            <span>{{ rank.cocktailName }}</span>
            <span>{{ rank.makerName }}</span>
            <span><a :href="rank.receiptUrl" target="_blank">Bekijk het recept</a></span>
          </td>
          <VoteButton type="vote"/>
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
      return this.ranking.sort((firstRanking, secondRanking) => firstRanking.votes < secondRanking.votes).slice(0, 10)
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

<style lang="scss" >
@import '~$styles/app';

.ranking-list {
  margin: 0 auto;

  table {
    border-collapse:  collapse;
    width: 100%;
    text-align: left;
    max-width: 968px;
    margin: 0 auto 128px;

    @media screen and (max-width: $bp-tablet-sm) {
      margin: 0;
    }

    .mobile {
      display: none;

      @media screen and (max-width: $bp-tablet-md) {
        display: block;
        padding: 16px;
      }

      tr {
        border-left: 1px solid $template-color-white-light;
        border-right: 1px solid $template-color-white-light;
        border-bottom: 1px solid $template-color-white-light;
        display: flex;
        position: relative;

        &:first-child {
          border-top: 1px solid $template-color-white-light;
          border-top-left-radius: 2px;
          border-top-right-radius: 2px;
        }

        &:nth-child(odd) {
          background-color: rgba($template-color-white-lighter, 0.5);
        }

        td {
          margin: 16px;
          display: inline-block;

          &:first-child {
            color: rgba($template-color-black-lighter, .4);
            font-weight: bold;
          }

          &:nth-child(2) {
            display: inline-flex;
            align-items: flex-start;
            flex-direction: column;
            span {
              margin-bottom: 16px;

              &:nth-child(1) {
                font-weight: bold;
              }

              &:last-child {
                margin-bottom: 40px;
              }

              a {
                color: $template-color-blue-default;
                font-weight: 700;
              }
            }
          }
        }

        .vote-button {
          align-self: flex-end;
          position: absolute;
          right: 16px;
          bottom: 16px;
        }
      }
    }

    .normal {
      // display: block;

      @media screen and (max-width: $bp-tablet-md) {
        display: none;
      }

      tr {
        transition: box-shadow .1s ease-in-out;

        &:not(:first-child):nth-child(odd) {
          background-color: rgba($template-color-white-lighter, 0.5);
        }

        &:not(:first-child) {
          border-left: 1px solid $template-color-white-light;
          border-right: 1px solid $template-color-white-light;
          border-bottom: 1px solid $template-color-white-light;
          border-top-left-radius: 2px;
          border-top-right-radius: 2px;

          td {
            &:first-child {
              color: rgba($template-color-black-lighter, .4);
              font-weight: bold;
            }
          }
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

            td {
              &:first-child {
                color: rgba($template-color-black-lighter, 1);
              }
            }
          }
        }

        td, th {
          padding: 28px;

          @include breakpoint(m) {
            padding: 16px;
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
}
</style>
