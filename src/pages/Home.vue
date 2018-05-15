<template>
  <div class="home">
    <Heading/>
    <Video/>
    <InfoSection/>
    <Drieluik/>
    <Footing/>
  </div>
</template>

<script>
import Heading from '@/components/custom/Heading';
import Video from '@/components/custom/Video';
import InfoSection from '@/components/custom/InfoSection';
import Drieluik from '@/components/custom/Drieluik';
import Footing from '@/components/custom/Footing';

export default {
  name: 'Home',
  data: () => ({
    msg: 'Crazy Dutch Experience!'
  }),
  components: {
    Heading,
    Video,
    InfoSection,
    Drieluik,
    Footing
  }
}
</script>

<style lang="scss">
@import '~$styles/app';

</style>
