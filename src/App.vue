<template>
  <div id="app">
    <router-view />

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {
    ...mapGetters([
      'isLogin',
    ]),
  },
  created() {
    console.log(1);
    if (this.isLogin) {
      this.$store.dispatch('getAvator');
    }
  },
};

</script>
