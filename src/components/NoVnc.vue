<template>
    <div>
        <p>noVNC Vue component!</p>
        <p>Desktop Name: {{ desktopName }}</p>
        <button @click="test">Test</button>
    </div>
</template>

<script>
import RFB from '@novnc/novnc/core/rfb';

export default {
  name: 'novnc',
  props: {
    name: String
  },
  data() {
    return {
      desktopName: this.$props.name
    };
  },
  methods: {
    updateDesktopName() {
      this.$data.desktopName = 'hello';
    },

    test() {
      new RFB(this.$el, 'ws://localhost:5000/');
    }
  }
};
</script>

<style scoped>
div {
  width: 100px;
}
</style>
