<template>
  <div>
    <p>Password:
      <p>
        <input type="password" v-model="passwd" />

        <button @click="connect">Connect</button>
        <div id="view"></div>
  </div>
</template>

<script>
import RFB from '@novnc/novnc/core/rfb';

export default {

  props: {
    websockify: String
  },

  data() {
    return {
      rfb: null,
      passwd: ''
    };
  },

  methods: {
    connect() {
      this.rfb.sendCredentials({ password: this.passwd });
    },

    disconnect() {
      this.rfb.disconnect();
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.rfb = new RFB(this.$el.lastChild, this.websockify);
    });
  }
};
</script>
