<template>
<div class="video">
  <div class="container-md no-pad">
    <div class="grid center">
      <div class="col-10">
        <div class="video-container" ref="videoContainer">
          <!-- ff zo hoor Donnie <3 -->
          <video :src="data.videoId" controls></video>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    options: {},
    playerReady: false
  }),
  mounted() {
    window.addEventListener('scroll', e => {
      const windowTop = document.documentElement.scrollTop;
      const viewPortHeight = window.innerHeight
      const documentHeight = document.body.scrollHeight
      const maxScroll = (documentHeight - viewPortHeight)
      const scrollPercent = (windowTop / maxScroll) * 50

      this.$refs.videoContainer.style.transform = `translate3d(0, -${scrollPercent * 9}px, 0)`

    })
  }
}
</script>

<style lang="scss" >
@import '~$styles/app';

.video {
  margin-top: 160px;
  z-index: 3;
  position: relative;

  @include breakpoint(s) {
    margin-top: 80px;
  }

  .video-container {
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0 6px 34px 0 rgba(0, 0, 0, .2);
    border-radius: 4px;
    padding: 16px;
    min-height: 10px;

    video {
      max-width: 100%;
    }

    .vimeo-player-1 iframe {
      width: 100% !important;
      height: auto !important;
    }
  }
}
</style>
