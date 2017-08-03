<template>
  <div class="navbar">
      <h3>{{homeItem}}</h3>
  </div>
</template> 

<script>
import * as cms from '@/backend.js';

export default {
  name: 'navbar',
  data () { 
    return {
      homeItem: cms.GetHomeItem(),
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

</style>
