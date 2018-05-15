<template>
<div class="video">
<div class="container-md no-pad">
  <div class="grid center">
    <div class="col-10">
      <div class="video-container">
        <!-- <vimeo-player ref="player" :video-id="videoID" @ready="onReady" :player-height="542" :player-width="1000"></vimeo-player> -->
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>
export default {
  props: ['data'],
  data: () => ({
    // videoID: '251775381', the real ID nibbaa
    videoID: '145837856',
    options: {},
    playerReady: false
  }),
  methods: {
    onReady() {
      this.playerReady = true
    },
    play() {
      this.$refs.player.play()
    },
    stop() {
      this.$refs.player.stop()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~$styles/app';

.video {
  margin-top: 164px;
  z-index: 3;
  position: relative;

  @media screen and (max-width: $bp-mobile-lg) {
    margin-top: 40px;
  }

  .video-container {
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0 6px 34px 0 rgba(0, 0, 0, .2);
    border-radius: 4px;
    padding: 16px;
    min-height: 10px;

    .vimeo-player-1 iframe {
      width: 100% !important;
      height: auto !important;
    }
  }
}
</style>
