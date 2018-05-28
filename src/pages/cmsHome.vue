<template>
<div class="container">
  <div class="choose-page">
    <button v-for="pageId in pages" @click="choosePage(pageId)">Home page</button>

    <div v-if="isSet">
      <section class="section" v-for="sectionKey in sectionKeys">
        <div>
          <div v-for="(value, key, idx) in $data[sectionKey]">

            <div v-if="typeof value === 'object'">

              <div v-for="(value, key, jdx) in value">

                <div v-if="typeof value === 'object'">
                  <div v-for="(value, key, jdx) in value">
                    {{ key }} : {{ value }}
                  </div>
                </div>

                <div v-else>
                  {{ key }} : {{ value }}
                </div>
              </div>
            </div>

            <div v-else>
              {{ key }} : {{ value }}
            </div>

          </div>
        </div>
        <br><br>
      </section>
    </div>

  </div>
</div>
</template>

<script>
import conf from '@/config'

export default {
  data: () => ({
    pages: ['5afc46024a04c38c80d4fca0'],
    selectedPageId: '',
    sectionKeys: [],
    heading: {},
    video: {},
    infoSection: {},
    drieluik: {},
    footer: {},
    isSet: false
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
          const sectionObjects = res.body.sections.map(({
            title
          }) => title)
          this.$set(this, 'sectionKeys', sectionObjects)

          const findSectionData = (sectionName, data) => data.body.sections.find(obj => obj.title === sectionName).contents

          this.$set(this, 'heading', findSectionData('heading', res))
          this.$set(this, 'video', findSectionData('video', res))
          this.$set(this, 'infoSection', findSectionData('infoSection', res))
          this.$set(this, 'drieluik', findSectionData('drieluik', res))
          this.$set(this, 'footer', findSectionData('footer', res))
          this.$set(this, 'isSet', true)
        })
    }
  },
  mounted() {
    setTimeout(() => this.$set(this, 'selectedPageId', '5afc46024a04c38c80d4fca0'), 50)
  }
}
</script>

<style lang="scss" scoped>
.section {
    width: 100%;
}
</style>
