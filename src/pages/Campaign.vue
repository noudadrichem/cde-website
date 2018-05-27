<template>
<div class="campaign" v-if="!loading">
  <Heading :data="heading" :campaign="true" />
  <StepsSection :data="howTo" />
  <Footing :data="footer"/>
</div>
</template>

<script>
import Heading from '@/components/custom/Heading'
import StepsSection from '@/components/custom/StepsSection'
import Footing from '@/components/custom/Footing'
import conf from '@/config'

export default {
  name: 'Campaign',
  data: () => ({
    pageId: '5b0ac474bfb053002643a5a4',
    loading: true,
    heading: {},
    howTo: {},
    footer: {}
  }),
  components: {
    Heading,
    StepsSection,
    Footing
  },
  mounted() {
    this.$http.get(`${conf.apiUrl}content/${this.pageId}/sections`)
      .then(data => {
        console.log(data.body);
        const findSectionData = (sectionName, data) => data.body.sections.find(obj => obj.title === sectionName).contents

        this.$set(this, 'heading', findSectionData('heading', data))
        this.$set(this, 'howTo', findSectionData('howTo', data))


        this.$http.get(`${conf.apiUrl}content/5afc46024a04c38c80d4fca0/sections`)
          .then(res => {
            this.$set(this, 'footer', findSectionData('footer', res))

            this.$set(this, 'loading', false)
          })

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
