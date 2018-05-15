<template>
  <div class="vote-button" @click="isVoted = !isVoted">
    <Icon name="vote" :active="isVoted" :width="16" :height="16" />
  </div>
</template>

<script>
import Icon from '@/components/common/Icon'

export default {
  name: 'VoteButton',
  data: () => ({
    isVoted: false
  }),
  props: {
    type: {
      type: String,
      required: true
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss">
@import '~$styles/app';

.vote-button {
  width: 24px;
  height: 24px;
  background-color: $template-color-white-light;
  border-radius: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    margin-left: 1px;
  }
}
</style>
