<template>
<div class="container">
  <div class="choose-page">
    <button v-for="pageId in pages" @click="choosePage(pageId)">Home page</button>
  </div>

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

          <!-- <label>Heading image URL</label>
          <input type="file"/> -->

          <label>Nav items</label>
          <div class="nav-items">
            <div v-for="navItem in heading.navbarItems" class="nav-item">
              <input type="text" v-model="navItem.text">
              <input type="text" v-model="navItem.link">
            </div>
          </div>
          <button type="button" @click="updateSection('heading')">Heading opslaan</button>
        </div>
      </section>

      <section class="section video">
        <div>

          <label>Source link naar video</label>
          <input type="text" name="" v-model="video.videoId">

        </div>

        <button type="button" @click="updateSection('video')">Video opslaan</button>
      </section>

      <section class="section info-section">
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
        <button type="button" @click="updateSection('infoSection')">Info sectie opslaan</button>
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
<!-- ____ -->
            <label>Image name</label>
            <!-- <input type="text" name="" v-model="drieluik.luiken[idx].imageName"> -->
            <input type="file" @change="convertInputImageToBase64(idx)">

            <br>
            <br>
            <br>

          </div>
          <button type="button" @click="updateSection('drieluik')">Drieluik opslaan</button>

        </div>
      </section>

      <section class="section footer">
        <div>

          <div v-for="(menuArray) in footer.footerNavigations">

            <div v-for="(menu, menuIndx) in menuArray">
              <label>Btn text</label>
              <input type="text" v-model="menu.title">

              <label>Link</label>
              <input type="text" v-model="menu.link">
            </div>
          </div>

          <button type="button" @click="updateSection('footer')">footer opslaan</button>

        </div>
      </section>

    </div>

    <pre>{{ $data['drieluik'] }}</pre>

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
    isSet: false,
    headingId: '',
    videoId: '',
    infoSectionId: '',
    drieluikId: '',
    footerId: '',
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
    },
    updateSection(section) {
      const sectionId = this.$data[`${section}Id`]
      console.log({ sectionId });
      this.$http.put(`${conf.apiUrl}content/update/${sectionId}`, this.$data[section])
        .then(res => {
          console.log(res);
        })
    },
    convertInputImageToBase64(idx) {
      const imageFile = event.target.files[0]
      const imgTypeReg = /gif|png|jpg|jpeg/
      const isImage = imgTypeReg.test(imageFile.name.split('.').pop())
      const FR = new FileReader();

      if(isImage) {
        FR.addEventListener("load", (e) => {
          this.drieluik.luiken[idx].imageName = e.target.result
          const message = 'succesfully uploaded and converted image'
          console.info({ message });
        });

        FR.readAsDataURL(imageFile);
      }
    }
  },
  watch: {
    selectedPageId(pageId) {
      this.$http.get(`${conf.apiUrl}content/${pageId}/sections`)
        .then(res => {
          const sectionObjects = res.body.sections.map(({ title }) => title)
          this.$set(this, 'sectionKeys', sectionObjects)

          const findSectionData = (sectionName, data) => data.body.sections.find(obj => obj.title === sectionName).contents
          const findSectionId = (sectionName, data) => data.body.sections.find(obj => obj.title === sectionName)._id

          this.$set(this, 'heading', findSectionData('heading', res))
          this.$set(this, 'video', findSectionData('video', res))
          this.$set(this, 'infoSection', findSectionData('infoSection', res))
          this.$set(this, 'drieluik', findSectionData('drieluik', res))
          this.$set(this, 'footer', findSectionData('footer', res))

          this.$set(this, 'headingId', findSectionId('heading', res))
          this.$set(this, 'videoId', findSectionId('video', res))
          this.$set(this, 'infoSectionId', findSectionId('infoSection', res))
          this.$set(this, 'drieluikId', findSectionId('drieluik', res))
          this.$set(this, 'footerId', findSectionId('footer', res))

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
@import '~$styles/app';

.choose-page {
  height: 100px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(156, 155, 161, .46);
}

section {
  background: #F8F8F8;
  padding: 64px 0;

  &:nth-child(odd) {
    background-color: #EBEBEB;
  }

  label,
  input {
    display: block;
  }
}
</style>
