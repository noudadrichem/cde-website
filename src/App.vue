<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import '~$styles/app';

#app {
  font-family:  -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #363542;
}
</style>
