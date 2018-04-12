<template lang="html">
  <div class="grid">

    <!--Containers-->
    <div class="container-full-expand">
      <div class="row">
        Full expanded!
      </div>
    </div>

    <div class="container-full">
      <div class="row">
        Full grid width container
      </div>
    </div>

    <div class="container-l">
      <div class="row">
        This is a large container
      </div>
    </div>

    <div class="container-m">
      <div class="row">
        This is a medium container
      </div>
    </div>

    <div class="container-s">
      <div class="row">
        This is a small container
      </div>
    </div>

    <!-- Rows -->

    <div class="container-l">
      <div class="row">
        <div class="col-4">
          Aligned left
        </div>
        <div class="col-4">
          Aligned left
        </div>
      </div>
    </div>

    <div class="container-l">
      <div class="row align-right">
        <div class="col-4">
          Aligned right
        </div>
        <div class="col-4">
          Aligned right
        </div>
      </div>
    </div>

    <div class="container-l">
      <div class="row align-center">
        <div class="col-4">
          Aligned center
        </div>
        <div class="col-4">
          Aligned center
        </div>
      </div>
    </div>

    <div class="container-l">
      <div class="row align-spaced">
        <div class="col-4">
          Aligned spaced
        </div>
        <div class="col-4">
          Aligned spaced
        </div>
      </div>
    </div>

    <div class="container-l">
      <div class="row align-center">
        <div class="col-4">
          Aligned between
        </div>
        <div class="col-4">
          Aligned between
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Grid',
};
</script>

<style lang="scss">
.grid {
  min-height: 100vh;
  width: 100%;
  color: #111;

  .row {
    background-color: rgba(0,0,0,0.05);
  }
}
</style>
