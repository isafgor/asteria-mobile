<template>
  <v-app class="ma-0 pa-0">
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
  @import 'assets/style/main'
  @import 'assets/style/fonts.css'

  #app
    width: 100%
    height: 100%
</style>
