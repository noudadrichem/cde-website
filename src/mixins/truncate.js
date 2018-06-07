export const truncate = {
  methods: {
    truncate(str, maxWords) {
      return str.split(' ').splice(0,maxWords).join(' ') + '...';
    }
  }
}
