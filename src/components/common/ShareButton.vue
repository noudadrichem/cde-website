<template>
  <div @click="envokeAction" :class="['share-button', { facebook: iconName == 'facebook', twitter: iconName == 'twitter' }]">
    {{ text }}
    <Icon v-if="iconName" :width="16" :height="16" :name="iconName"/>
  </div>
</template>

<script>
import Icon from '@/components/common/Icon'

export default {
  props: {
    text: {
      required: true,
      type: String
    },
    iconName: {
      required: false,
      type: String
    },
    action: {
      type: String,
      required: false
    },
    socialUrl: {
      type: String,
      required: false
    }
  },
  components: {
    Icon
  },
  methods: {
    envokeAction() {
      switch (this.action) {
          case 'facebook':
            window.open(`https://www.facebook.com/sharer.php?u=${socialUrl}`)
            break
          case 'twitter':
            window.open(`https://twitter.com/intent/tweet?url=${socialUrl}`)
            break
          case 'copy':

        }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~$styles/app';

.share-button {
  display: inline-flex;
  padding: 6px 8px;
  width: auto;
  position: relative;
  align-items: center;
  background: $template-color-orange-default;
  border-radius: 2px;
  font-size: 12px;
  font-weight: bold;
  color: $template-color-white-default;
  transition: all .25s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba($template-color-black-lighter, 0.4);
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: 0 0 2px 0 rgba(156,155,161,0.46);
    transform: translateY(1px);
  }

  &.facebook {
    background: #4266B2;
  }

  &.twitter {
    background: #1DA1F2;
  }

  .icon {
    margin-left: 8px;
  }
}
</style>
