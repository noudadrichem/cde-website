<template>
  <div class="home" v-if="!loading">
    <Heading :data="heading"/>
    <Video :data="video"/>
    <InfoSection :data="infoSection"/>
    <Drieluik :data="drieluik"/>
    <Footing :data="footer"/>
  </div>
</template>

<script>
import Heading from '@/components/custom/Heading';
import Video from '@/components/custom/Video';
import InfoSection from '@/components/custom/InfoSection';
import Drieluik from '@/components/custom/Drieluik';
import Footing from '@/components/custom/Footing';
import conf from '@/config'

export default {
  name: 'Home',
  data: () => ({
    loading: true,
    heading: {},
    video: {},
    infoSection: {},
    drieluik: {},
    footer: {},
  }),
  components: {
    Heading,
    Video,
    InfoSection,
    Drieluik,
    Footing
  },
  mounted() {
    this.$http.get(conf.apiUrl + 'content/' + '5afc46024a04c38c80d4fca0' + '/sections')
      .then(data => {
        console.log(data.body);
        const findSectionData = (sectionName) => data.body.sections.find(obj => obj.title === sectionName).contents

        this.$set(this, 'heading', findSectionData('heading'))
        this.$set(this, 'video', findSectionData('video'))
        this.$set(this, 'infoSection', findSectionData('infoSection'))
        this.$set(this, 'drieluik', findSectionData('drieluik'))
        this.$set(this, 'footer', findSectionData('footer'))
        this.$set(this, 'loading', false)
      })
  }
}
</script>

<style lang="scss">

</style>
