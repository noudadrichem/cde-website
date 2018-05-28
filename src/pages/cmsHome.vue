<template>
  <div class="container">
    <div class="choose-page">
      <button v-for="pageId in pages" @click="choosePage(pageId)">Home page</button>
    </div>
  </div>
</template>

<script>
import conf from '@/config'

export default {
  data: () => ({
    pages: ['5afc46024a04c38c80d4fca0'],
    selectedPageId: '',
    sections: [],
    heading: {},
    video: {},
    infoSection: {},
    drieluik: {},
    footer: {},
  }),
  methods: {
    choosePage(pageId) {
      this.$set(this, 'selectedPageId', pageId)
    },
    getAllPages() {
      this.$http.get(`${conf.apiUrl}content/pages`)
        .then(pages => {
          console.log(pages);
        })
    }
  },
  watch: {
    selectedPageId(pageId) {
      this.$http.get(`${conf.apiUrl}content/${pageId}/sections`)
        .then(res => {
          this.$set(this, 'sections', res.body.sections)

          const findSectionData = (sectionName, data) => data.body.sections.find(obj => obj.title === sectionName).contents

          this.$set(this, 'heading', findSectionData('heading', res))
          this.$set(this, 'video', findSectionData('video', res))
          this.$set(this, 'infoSection', findSectionData('infoSection', res))
          this.$set(this, 'drieluik', findSectionData('drieluik', res))
          this.$set(this, 'footer', findSectionData('footer', res))
        })
    }
  },
  mounted() {
    setTimeout(() => this.$set(this, 'selectedPageId', '5afc46024a04c38c80d4fca0'), 50)
  }
}
</script>

<style lang="scss" scoped></style>
