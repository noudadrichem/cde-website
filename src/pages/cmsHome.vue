<template>
<div class="container">

  <transition name="popup">
    <div class="update-popup" v-show="showUpdatePopup">
      <Icon :width="16" :height="16" name="check" /> Opgeslagen!
    </div>
  </transition>

  <div class="choose-page">
    <div class="container-lg navigation">
        <div class="name">
          <router-link tag="div" to="/">
            <a>CMS <span>CDE</span></a>
          </router-link>
        </div>
        <div class="logout">
          <router-link tag="div" to="/logout">
            <a>Uitloggen</a>
          </router-link>
        </div>
    </div>
  </div>

    <div v-if="isSet">
      <section class="section heading">
        <div class="container-lg">
          <div class="section-container heading">
            <div class="section-title">Heading</div>
              <div class="input">
                <label>Titel</label>
                <input type="text" name="" v-model="heading.title">
              </div>

              <div class="input">
                <label>Subtitel</label>
                <input type="text" name="" v-model="heading.subTitle">
              </div>

              <div class="input">
                <label>Button tekst</label>
                <input type="text" name="" v-model="heading.buttonText">
              </div>

              <div class="input">
                <label>Paragraaf</label>
                <textarea type="text" name="" v-model="heading.bodyText"/>
              </div>
            <!-- <label>Heading image URL</label>
            <input type="file"/> -->
          </div>
          <button type="button" @click="updateSection('heading')">Heading opslaan</button>
        </div>
      </section>

      <section class="section video">
        <div class="container-lg">
          <div class="section-container">
              <div class="section-title">Sectie 1</div>
              <div class="input">
                <label>Link naar video</label>
                <input type="text" name="" v-model="video.videoId">
              </div>
          </div>
        </div>
      </section>

      <section class="section info-section">
        <div class="container-lg">
          <div class="section-container">
            <div class="section-title">Sectie 2</div>
            <div class="input">
              <label>Titel</label>
              <input type="text" name="" v-model="infoSection.mainTitle">
            </div>

            <div class="input">
              <label>Subtitel</label>
              <input type="text" name="" v-model="infoSection.subTitle">
            </div>

            <div class="input">
              <label>Autheur tekst</label>
              <input type="text" name="" v-model="infoSection.quoteAuthor">
            </div>

            <div class="input">
              <label>Quote tekst</label>
              <input type="text" name="" v-model="infoSection.quoteText">
            </div>

            <div class="input">
              <label>Paragraaf</label>
              <textarea type="text" name="" v-model="infoSection.text"/>
            </div>
          </div>
          <button type="button" @click="updateSection('infoSection')">Sectie 2 opslaan</button>
        </div>
      </section>

      <section class="section drieluik">
        <div class="container-lg">
          <div class="section-container">
            <div class="section-title">Sectie 3</div>
            <div v-for="(luik, idx) in drieluik.luiken">
              <div class="section-title">
                {{ luik.heading}}
              </div>

              <div class="input file">
                <label>Afbeelding upload</label>
                <label :for="luik.heading.toLowerCase()">
                  Geen afbeelding
                </label>
                <input type="file" :id="luik.heading.toLowerCase()" @change="convertInputImageToBase64(idx)">
              </div>

              <div class="input">
                <label>Paragraaf</label>
                <textarea type="text" name="" v-model="drieluik.luiken[idx].bodyText"/>
              </div>

            </div>
          </div>
          <button type="button" @click="updateSection('drieluik')">Sectie 3 opslaan</button>
        </div>
      </section>

      <section class="section footer">
        <div class="container-lg">
          <div class="section-container">
            <div class="section-title">Footer</div>
            <div class="footer-container" v-for="(menuArray) in footer.footerNavigations">

              <div class="input" v-for="(menu, menuIndx) in menuArray">
                <label>Button tekst</label>
                <input type="text" v-model="menu.title">

                <label>Link</label>
                <input type="text" v-model="menu.link">
              </div>
            </div>
          </div>
          <button type="button" @click="updateSection('footer')">Footer opslaan</button>
        </div>
      </section>
    </div>
</div>
</template>

<script>
import conf from '@/config'

import Icon from '@/components/common/Icon'

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
    showUpdatePopup: false
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
          console.log(res)
          this.showUpdatePopup = true;
          this.$set(this, 'showUpdatePopup', true)
          setTimeout(() => {
              this.$set(this, 'showUpdatePopup', false)
          }, 3000)
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
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
@import '~$styles/app';

.update-popup {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: lighten($template-color-green-lighter, 15%);
  font-size: 18px;
  color: darken($template-color-green-default, 20%);
  padding: 24px;
  display: inline-flex;
  align-items: center;
  cursor: default;

  .icon {
    margin-right: 8px;
  }
}

.choose-page {
  height: 100px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(156, 155, 161, .46);
  position: fixed;
  width: 100%;

  .navigation {
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;

    .name {
      a {
        text-decoration: none;
        font-size: 24px;

        span {
          font-size: 24px;
          color: $template-color-black-lighter;
          font-weight: 700;
        }
      }
    }

    a {
      color: $template-color-black-lighter;
    }
  }
}

section {
  background: #F8F8F8;
  padding: 64px;

  &:nth-child(odd) {
    background-color: #EBEBEB;
  }

  @include breakpoint(m) {
    padding: 32px;
  }

  @include breakpoint(s) {
    padding: 0;
  }

  .container-lg {
    @include breakpoint(s) {
      padding: 24px 0;
    }
  }

  .section-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &.heading {
      margin-top: 100px;
    }

    .section-title {
      font-size: 24px;
      font-weight: 700;
      color: $template-color;
      text-transform: uppercase;
      width: 100%;
      margin: 0 0 32px 0;
    }

    .input {
      margin-bottom: 24px;

      &.file {
        label:nth-child(2) {
          width: 100%;
          max-width: 280px;
          border: 1px solid rgba($template-color-black-lighter, .4);
          color: $template-color-black-lighter;
          background-color: #fff;
          background-image: url('/static/bestand.svg');
          background-repeat: no-repeat;
          background-size: 20px;
          background-position: 16px;
          border-radius: 2px;
          font-size: 15px;
          font-weight: 400;
          font-family: $template-font-family;
          padding: 16px 16px 16px 42px;
          cursor: pointer;
        }

        input {
          display: none;
        }
      }
    }

    .footer-container {
      display: flex;

      &:not(&:last-child) {
        margin-right: 64px;
      }

      .input {
        input {
          margin-bottom: 24px;
        }
      }
    }
  }

  label,
  input {
    display: block;
  }

  label {
    font-size: 18px;
    color: $template-font-color;
    font-weight: 700;
    padding-bottom: 8px;
  }

  input, textarea {
    padding: 16px;
    min-width: 280px;
    color: $template-color-black-lighter;
    outline: none;
    border: 1px solid rgba($template-color-black-lighter, .4);
    background-color: #fff;
    border-radius: 2px;
    font-size: 15px;
    font-family: $template-font-family;
    margin-right: 16px;

    &:placeholder {
      color: $template-font-color;
    }

    &:focus {
      color: $template-font-color;
    }
  }

  textarea {
    width: 476px;
    min-height: 186px;
  }

  button {
    border: none;
    outline: none;
    padding: 8px 12px;
    font-family: $template-font-family;
    font-weight: 700;
    text-align: center;
    font-size: $template-font-size;
    border-radius: $template-border-radius;
    box-shadow: 0 2px 6px rgba($template-color-black-lighter, 0.4);
    cursor: pointer;
    display: inline-block;
    transition: all .25s ease-in-out;
    background-color: $template-color-orange-default;
    color: $template-color-white-default;

    &:hover {
      box-shadow: 0 4px 8px rgba($template-color-black-lighter, 0.4);
      color: $template-color-white-default;
      transform: translateY(-1px);
    }

    &:active {
      box-shadow: 0 0 2px 0 rgba(156,155,161,0.46);
      transform: translateY(1px);
      background: $template-color-orange-default;
    }
  }
}

.popup-enter, .popup-leave-to {
  opacity: 0;
  bottom: 0;
}

.popup-enter-to, .popup-leave {
  opacity: 1;
  bottom: 16px;
}

.popup-enter-active, .popup-leave-active {
  transition: all .2s ease-in-out;
}
</style>
