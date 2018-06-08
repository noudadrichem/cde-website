<template>
  <div class="ranking-list">
    <div class="ranking-heading">
      <Heading tag="h1" text="De Crazy Dutch Cocktail ranglijst"/>
      <Heading tag="h2" text="Hieronder bevindt zich de gehele ranglijst van wie de top 10 beste cocktail smaak heeft bedacht."/>
    </div>
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
          <td><a :href="rank.receiptUrl" @click="$eventBus.$emit('showRanking', rank._id)" target="_blank">Bekijk het recept</a></td>
          <td><VoteButton type="vote" :id="rank._id"/></td>
        </tr>
      </tbody>

      <tbody class="mobile">
        <tr v-for="(rank, index) in orderedRanking" :key="index">
          <td>{{ index + 1 }}.</td>
          <td>
            <span>{{ rank.name }}</span>
            <span>{{ rank.particepent.fullName }}</span>
            <span><a :href="rank.receiptUrl" @click="$eventBus.$emit('showRanking', rank._id)" target="_blank">Bekijk het recept</a></span>
          </td>
          <VoteButton type="vote" :id="rank._id"/>
        </tr>
      </tbody>
    </table>
    <div class="go-to-ranking-button" v-if="$route.path === '/campaign'">
      <Button type="button" styling="primary" @click.native="$router.push('/ranking')" text="Bekijk de complete ranglijst"/>
    </div>
  </div>
</template>

<script>
import VoteButton  from '@/components/custom/VoteButton'
import Heading from '@/components/common/Heading'
import Button from '@/components/common/Button'

export default {
  computed: {
    orderedRanking() {
      return this.all
      ? this.ranking
      : this.ranking.sort((firstRanking, secondRanking) => firstRanking.votes < secondRanking.votes).slice(0, 10)
    }
  },
  props: {
    ranking: {
      type: Array,
      required: true
    },
    all: {
      type: Boolean,
      required: false
    }
  },
  components: {
    VoteButton,
    Heading,
    Button
  },
  mounted() {
    console.log('ranking route', this.$route);
  }
}
</script>

<style lang="scss" >
@import '~$styles/app';

.ranking-heading {
  text-align: center;
  max-width: 520px;
  margin: 0 auto 64px;
}

.ranking-list {
  margin: 0 auto;

  .go-to-ranking-button {
    display: flex;
    justify-content: center;
  }

  table {
    border-collapse:  collapse;
    width: 100%;
    text-align: left;
    max-width: 968px;
    margin: 0 auto 64px;

    @include breakpoint(m) {
      width: calc(100% - 64px);
    }

    @media screen and (max-width: $bp-tablet-sm) {
      margin: 0;
      width: 100%;
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
            min-width: 24px;
            margin-right: 89p
          }

          &:nth-child(2) {
            display: inline-flex;
            align-items: flex-start;
            flex-direction: column;
            span {
              margin-bottom: 8px;

              &:nth-child(1) {
                font-weight: bold;
              }

              &:last-child {
                margin-bottom: 0;
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

      width: calc(100% - 32px);

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
