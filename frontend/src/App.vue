<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'App',
  computed: {
    ...mapActions(['loadContractsList'])
  },
  mounted() {
      this.loadContracts();
  },
  methods: {
    loadContracts() {
      setTimeout( () => {
        this.$store?.dispatch('loadContractsList', this.$route.query);
      }, 10 )
    }
  }
});
</script>



<style lang="scss">
@import url('./scss/fonts.scss');

::selection {
  background: rgb(40, 148, 105);
  color: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'YanoneKaffeesatz-Regular';
  background: rgb(232, 232, 232);
  font-size: 22px;
}
</style>
