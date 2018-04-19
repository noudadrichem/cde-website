<template>
  <div class="stylekit">

    <h1>Stylekit page</h1>

    <h2>Common</h2>

      <!-- Checkbox -->
      <div class="component">
        <div class="component-name">Checkbox</div>
        <Checkbox labelText="Some label text" id="1"/>
      </div>

      <div class="component">
        <div class="component-name">Input Text</div>
        <InputText placeholder="mail@example.com"/>
      </div>

    <h2>Custom</h2>
  </div>
</template>

<script>
// Components
import Checkbox from '@/components/common/Checkbox';
import InputText from '@/components/common/InputText';

export default {
  name: 'Stylekit',
  components: {
    Checkbox,
    InputText,
  },
};
</script>

<style lang="scss">
@import '~$styles/app';

.stylekit {
  min-height: 100vh;
  width: 100%;
  text-align: center;

  h1 {
    margin: 16px 0;
  }

  .component {
    margin: 32px;

    .component-name {
      font-weight: bold;
      margin: 32px 16px 16px 16px;
    }
  }
}
</style>
