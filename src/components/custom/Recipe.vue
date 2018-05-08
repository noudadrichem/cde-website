<template>
  <div class="recipe">
    <Heading tag="h1" text="Apple juice with pears" />
    <Heading tag="h2" text="Deze cocktail is gemaakt door John Doe." />
  </div>
</template>

<script>
import Heading from '@/components/common/Heading'
import Button from '@/components/common/Button'

export default {
  components: {
    Heading
  }
}
</script>

<style lang="scss">
@import '~$styles/app';

.recipe {
  padding: 24px;
  box-shadow: 0 14px 44px 10px rgba(#44515E, 0.16);
  max-width: 480px;
  text-align: left;
}
</style>
