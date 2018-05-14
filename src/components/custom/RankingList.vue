<template>
  <div class="ranking-list">
    <table class="table">
      <tbody>
        <tr>
          <th>Rang</th>
          <th>Cocktail naam</th>
          <th>Maker</th>
          <th>Recept</th>
          <th>Like/Dislike</th>
        </tr>
        <tr>
          <td>1.</td>
          <td>Mauris hendrerit</td>
          <td>Donec et</td>
          <td>Bekijk het recept</td>
          <td><| |></td>
        </tr>
        <tr>
          <td>2.</td>
          <td>Mauris hendrerit</td>
          <td>Donec et</td>
          <td>Bekijk het recept</td>
          <td><| |></td>
        </tr>
        <tr>
          <td>3.</td>
          <td>Mauris hendrerit</td>
          <td>Donec et</td>
          <td>Bekijk het recept</td>
          <td><| |></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
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
      &:not(:first-child):nth-child(odd) {
        background-color: $template-color-white-lighter;
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

      td, th {
        padding: 28px;

        @include breakpoint(m) {
          padding: 16px;
        }

        @include breakpoint(s) {
          padding: 8px;
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
