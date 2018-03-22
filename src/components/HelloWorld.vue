<template>
  <div>
    <p>Hello world component</p>
    <novnc name="My Desktop Newdedame" />
  </div>
</template>

<script>
import novnc from './NoVnc.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    novnc
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
