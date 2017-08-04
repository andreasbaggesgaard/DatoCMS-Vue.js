<template>
  <div class="image-slider">
    <transition name="fade">
      <img v-bind:src="images[currentNumber % images.length]" class="img-responsive imageslider__img" v-bind:id="id" v-on:mouseleave="stopRotation" />
    </transition>
  </div>
</template> 

<script>

export default {
  name: 'image-slider',
  props: ['images', 'id'],
  data () { 
    return {
      currentNumber: 0,
      timer: null
    }
  },
  created: function() {
    this.startRotation();
  },
  methods: {
    startRotation: function() {
        this.timer = setInterval(this.next, 1600);
    },
    stopRotation: function() {
        clearTimeout(this.timer);
        this.timer = null;
        this.currentNumber = 0;
    },
    next: function() {
        this.currentNumber += 1
    }

  }
}
</script>

<style scoped>
  .image-slider {
    display: none;
  }
.fade-transition {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter, .fade-leave {
  opacity: 0;
  visibility: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
