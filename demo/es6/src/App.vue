<template>
  <div id="app">
    <VueNoVNC websockify="" />
  </div>
</template>

<script>
import VueNoVNC from '../../../dist/vue-novnc'

export default {
  name: 'app',
  components: {
    VueNoVNC
  }
}
</script>
