<template>
  <div id="app">
    <novnc-client />
  </div>
</template>

<script>
import novncClient from './components/novnc-client.vue';

export default {
  name: 'app',
  components: {
    novncClient
  }
};
</script>

<style>
</style>
