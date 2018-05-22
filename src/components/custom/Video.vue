<template>
<div class="video">
<div class="container-md no-pad">
  <div class="grid center">
    <div class="col-10">
      <div class="video-container">
        <video src="http://crazydutchexperience.com/assets/videos/Crazy-Dutch-HID181-Afl-04.mp4" controls></video>
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
    options: {},
    playerReady: false
  })
}
</script>

<style lang="scss" >
@import '~$styles/app';

.video {
  margin-top: 164px;
  z-index: 3;
  position: relative;

  @media screen and (max-width: 414px) {
    margin-top: 40px;
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
