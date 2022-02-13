<template>
  <!-- <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar> -->

    <!-- <v-main> -->
      <Nav/>
    <!-- </v-main>
  </v-app> -->
</template>

<script>
  import Nav from './components/Nav';

  export default {
    name: 'App',

    components: {
      Nav,
    },

    data: () => ({
      //
    }),
  };
</script>
