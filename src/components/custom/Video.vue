<template>
<div class="video hide-mobile">
<div class="container-l">
  <div class="row align-center">
    <div class="col-10">
      <div class="video-container">
        <vimeo-player ref="player" :video-id="videoID" @ready="onReady" :player-height="542" :player-width="1000"></vimeo-player>
      </div>
    </div>
  </div>
</div>
<div class="skewed-backdrop"></div>
</div>
</template>

<script>
export default {
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
.video {
  margin-top: 164px;
  z-index: 3;
  position: relative;

  .video-container {
    background: #fff;
    box-shadow: 0 6px 34px 0 rgba(0, 0, 0, .2);
    border-radius: 4px;
    padding: 16px;

    .vimeo-player-1 iframe {
      width: 100% !important;
      height: auto !important;
    }
  }

  .skewed-backdrop {
    background-image: linear-gradient(-180deg, rgba(235,235,235,0.80) 0%, rgba(248,248,248,0.00) 99%);
    height: 516px;
    width: 100%;
    transform: skewY(-16deg);
    position: absolute;
    top: 216px;
    z-index: -1;
  }
}
</style>
