<template>
  <div class="index">

    <div class="container">

        <div class="col-3">
          <navbar></navbar>
        </div>

      <div class="col-9">
        <div class="flex-grid showcase">
            <div v-for="item in items" class="col showcase__item">

                <figure>
                  <div v-for="(img, index) in item.imageGallery" v-bind:class="item.title" v-if="index == 0">
                      <img v-bind:src="'https://www.datocms-assets.com' + removeMarks(JSON.stringify(img.path))" 
                      v-bind:alt="img.alt" v-bind:id="item.title" v-if="index == 0" 
                      v-on:mouseover="showInfo(item.title)" v-on:mouseleave="hideInfo"  />
                  </div>

                  <div class="showcase__images">                        
                      <div v-if="showArticleImages == item.title">
                
                            <div v-for="img in item.imageGallery">{{addImagesToSlider(img)}}</div> 
                            
                            <ImageSlider :images="sliderImages" :id="item.title"></ImageSlider>

                        </div>
                    </div>
                  
                    <div class="showcase__text">
                        <h6>{{item.title}}</h6>
                        <p>{{item.text}}</p>
                    </div> 
                </figure>

              </div> 
          </div>
      </div>

    </div>

  </div>
</template>

<script>
import * as cms from '@/backend.js';
import navbar from '@/components/Navbar' 
import ImageSlider from '@/components/ImageSlider' 
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

export default {
  name: 'index',
  data () {
    return {
      allItems: cms.GetAllItems(),
      items: cms.GetItems(),
      showArticleImages: '',
      firstImage: '',
      sliderImages: []
    }
  },
  created:  function() {

     window.setTimeout(function() {
        const selector = '.showcase';
        const itemSelector = '.showcase__item';
        const showcase = document.querySelector(selector);
        imagesLoaded(showcase).on('always', (instance, image) => {
          //console.log('images loaded')
          showcase.classList.remove('is-loading');
          //  percentPosition: true
          const masonry = new Masonry(showcase, { itemSelector });
          //masonry.appended(newItems);
          masonry.layout();
        });
      }, 1);    
  },
  methods: {
      removeMarks: function(text){
          let newString = text;
          return newString.toString().replace(/"/g, "");
      },
      showInfo: function(obj){
          //console.log(obj)
          this.showArticleImages = obj;   
          this.firstImage = jQuery('#' + obj).attr('src');

          setInterval(function(){
            let teaserImage = jQuery('#' + obj);
            let sliderImages = jQuery('.imageslider__img#' + obj).attr('src');
            teaserImage.attr('src', sliderImages)
          }, 300);         
      },
      hideInfo: function(obj){
          this.showArticleImages = '';
          this.sliderImages = []; 
          jQuery('#' + obj.fromElement.id).attr('src', this.firstImage);
      },
      addImagesToSlider: function(image){
          this.sliderImages.push("https://www.datocms-assets.com" + this.removeMarks(JSON.stringify(image.path)));
      }
  },
   components: {
    navbar,
    ImageSlider
  }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.showcase.is-loading {
    visibility: hidden 
}  
.showcase {
   transform: translate3d(0px, 0, 0);
    transition: transform 0.2s ease-in-out;
     flex: 1;
}
.flex-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  /*justify-content: flex-start;*/
  padding: 2%;
}
.col {
  width: 45%;
  margin-right: 20px;
}
figure img {
  max-width: 100%;
}
.showcase__item {
    box-shadow: 0 0 5px #ccc;
    background: white;
    margin-bottom: 30px;
}
.showcase__item img:hover {
  cursor: pointer;
}
.showcase__text {
  padding: 20px;
}
.showcase__images-img {
   /*position: absolute;
  transition: opacity .5s ease-in;
  max-width: 345px;*/
}
h6 {
      text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    color: #111;
}
p {
      color: #777;
    font-size: 14px;
    line-height: 1.4;
}
.container {
    display: flex;
    flex-wrap: wrap;
}
.col-3 {
  width: 30%
}
.col-9 {
 width: 70%;
}
@media (max-width: 480px){
  .col { 
      width: 100%;
  }
}
</style>
