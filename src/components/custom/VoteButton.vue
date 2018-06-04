<template>
  <div :class="['vote-button', { voted: isVoted }]" @click="voteOnRecipe">
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
    },
    id: {
      type: String,
      required: true
    }
  },
  components: {
    Icon
  },
  methods: {
    voteOnRecipe() {
      this.$set(this, 'isVoted', !this.isVoted)
      console.log('id: ', this.id);
    }
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
  cursor: pointer;

  &.voted {
    cursor: default;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    margin-left: 1px;
  }
}
</style>
