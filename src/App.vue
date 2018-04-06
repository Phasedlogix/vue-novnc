<template>
  <div id="app">
    <novnc-client websockify="ws://172.16.77.117:6080/" />
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
