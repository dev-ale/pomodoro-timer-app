<template>
  <v-app>

    <Navbar></Navbar>
    <v-content>
      <Timer class="mt-10"></Timer>
      <Tasks></Tasks>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '../src/components/Navbar'
import Timer from '../src/components/Timer'
import Tasks from '../src/components/Tasks'
export default {
  name: 'App',

  components: {
    Navbar,
    Timer,
    Tasks
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  .theme--light.v-application {
    background: #FF5252;
    color: rgba(0, 0, 0, 0.87);
  }
</style>
