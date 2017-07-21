<template>
  <div class="index">
    <div v-for="article in data">
        <h1>{{article}}</h1>
    </div>
  </div>
</template>

<script>
import  * as cms from '@/backend.js';

export default {
  name: 'index',
  data () {
    return {
      data: cms.GetItems()
    }
  },
  created:  function() {

  },
  methods: {

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
