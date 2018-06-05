  <template>
  <div :class="['vote-button', { voted: isVoted }]" @click="voteOnRecipe">
    <Icon name="vote" :active="isVoted" :width="16" :height="16" />
  </div>
</template>

<script>
import Icon from '@/components/common/Icon'
import conf from '@/config'

export default {
  name: 'VoteButton',
  data: () => ({
    isVoted: false
  }),
  props: {
    type: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    }
  },
  components: {
    Icon
  },
  methods: {
    voteOnRecipe() {
      if(this.id !== undefined) {
        if(localStorage.getItem('isVoted')) {
          console.log('HAS VOTED ALREADY');
        } else {
          this.$set(this, 'isVoted', !this.isVoted)
          localStorage.setItem('isVoted', this.id)

          this.$http.put(`${conf.apiUrl}campaign/recipes/like/${this.id}`)
            .then(res => {console.log(res);})
        }
      }
    }
  },
  mounted() {
    const hasVoted = localStorage.getItem('isVoted')
    if(hasVoted && hasVoted === this.id) {
      console.log('HOOOIII');
      this.$set(this, 'isVoted', true)
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
