<template>
<div class="hello">
    <h1>#KnowIt</h1>
    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" />
    <h2>School District Message</h2>
  </div>
</template>


<script>

import Navbar from '../../components/Navbar.vue'
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
