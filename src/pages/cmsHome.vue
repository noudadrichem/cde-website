<template>
<div class="container">
  <div class="choose-page">
    <button v-for="pageId in pages" @click="choosePage(pageId)">Home page</button>

    <div v-if="isSet">
      <section class="section heading">
        <div class="">
          <label>Heading title</label>
          <input type="text" name="" v-model="heading.title">

          <label>Heading sub title</label>
          <input type="text" name="" v-model="heading.subTitle">

          <label>Heading buttonText</label>
          <input type="text" name="" v-model="heading.buttonText">

          <label>Heading bodyText</label>
          <textarea type="text" name="" v-model="heading.bodyText"/>

          <label>Heading image URL</label>
          <input type="text" name="" v-model="heading.imageUrl"/>

          <label>Nav items</label>
          <div class="nav-items">
            <div v-for="navItem in heading.navbarItems" class="nav-item">
              <input type="text" v-model="navItem.text">
              <input type="text" v-model="navItem.link">
            </div>
          </div>

        </div>
      </section>

      <section class="section heading">
        <div>

          <label>Video</label>
          <input type="text" name="" v-model="heading.subTitle">

        </div>
      </section>

      <section class="section heading">
        <div>

          <label>Info section main title</label>
          <input type="text" name="" v-model="infoSection.mainTitle">

          <label>Info section sub title</label>
          <input type="text" name="" v-model="infoSection.subTitle">

          <label>Info section quote author</label>
          <input type="text" name="" v-model="infoSection.quoteAuthor">

          <label>Info section quote text</label>
          <input type="text" name="" v-model="infoSection.quoteText">

          <label>Info section text</label>
          <input type="text" name="" v-model="infoSection.text">

        </div>
      </section>

      <section class="section drieluik">
        <div>

          <div v-for="(luik, idx) in drieluik.luiken">

            <label>Heading</label>
            <input type="text" name="" v-model="drieluik.luiken[idx].heading">

            <label>Body text</label>
            <input type="text" name="" v-model="drieluik.luiken[idx].bodyText">

            <label>Read more link</label>
            <input type="text" name="" v-model="drieluik.luiken[idx].readMoreLink">

            <label>Image name</label>
            <input type="text" name="" v-model="drieluik.luiken[idx].imageName">

          </div>

        </div>
      </section>

    </div>

    <pre>{{ $data['drieluik'] }}</pre>

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
section {
  background: #F8F8F8;

  &:nth-child(odd) {
    background-color: #EBEBEB;
  }

  label,
  input {
    display: block;
  }
}
</style>
