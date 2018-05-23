<template>
  <div class="campaign" v-if="!loading">
    <Heading :data="heading"/>
    <StepsSection :data="drieluik" />
  </div>
</template>

<script>
import Heading from '@/components/custom/Heading'
import StepsSection from '@/components/custom/StepsSection'
import conf from '@/config'

export default {
  name: 'Campaign',
  data: () => ({
    loading: true,
    heading: {},
    drieluik: {}
  }),
  components: {
    Heading,
    StepsSection
  },
  mounted() {
    this.$http.get(conf.apiUrl + 'content/' + '5afc46024a04c38c80d4fca0' + '/sections')
      .then(data => {
        console.log(data.body);
        const findSectionData = (sectionName) => data.body.sections.find(obj => obj.title === sectionName).contents

        this.$set(this, 'heading', findSectionData('heading'))
        this.$set(this, 'drieluik', findSectionData('drieluik'))
        this.$set(this, 'loading', false)
      })
  }
}
</script>

<style lang="scss">
@import '~$styles/app';

.campaign {
  width: 100%;
}
</style>
