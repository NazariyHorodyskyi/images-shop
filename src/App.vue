
<template>
  <div id="app">
  <div class="left">
 <form-wizard @on-complete="onComplete"
                       title="This is a new title"
                       subtitle="And a new subtitle"
                       shape="tab"
                       back-button-text="Go back!"
                       next-button-text="Go next!"
                       finish-button-text="We're there"
                       color="#9b59b6">
     <h2 slot="title"></h2> 
     <tab-content title="Изображение" icon="ti-user">
       <PicturesContainer
       v-bind:pictures="pictures"
       v-on:picture-select="p => handlePictureSelect(p)"
       />
     </tab-content>
     <tab-content title="Рамка" icon="ti-settings">
       <PicturesContainer
       v-bind:pictures="borders"
       v-on:picture-select="p => handleBorderSelect(p)"
       />
     </tab-content>
     <tab-content title="Заголовок" icon="ti-settings">
       <PictureData v-on:massageSaved="m => handleTitle(m)"/>
     </tab-content>
     <tab-content title="Цвет Отпечатков"
                  icon="ti-check">
        <PicturesContainer
       v-bind:pictures="marks"
       v-on:picture-select="p => handleMarksSelect(p)"
       multiple="true"
       />
     </tab-content>
     <button slot="prev">Назад</button>
    <button slot="next">Дальше</button>
    <button hidden slot="finish"></button>
 </form-wizard>
 </div>
 <div class="right">
   <ResultContainer 
   v-bind:resultObject="result"
   />
   </div>
  </div>
</template>

<script>
import PicturesContainer from './components/PicturesContainer'
import ResultContainer from './components/ResultContainer'
import PictureData from './components/PictureData'
import { getPicturesArray, getBordersArray, getMarksArray } from './utils'
 
export default {
  name: 'app',
  components: { PicturesContainer, ResultContainer, PictureData },
  methods: {
      onComplete: function(){
          alert('Yay. Done!');
       },
       handlePictureSelect(picture) {
         this.selectedPicture = picture;
         this.result = { picture, border: this.selectedBorder, mark: this.selectedMark, 
         message: this.message };
       },
       handleBorderSelect(border){
         this.selectedBorder = border;
         this.result = { border, picture: this.selectedPicture, mark: this.selectedMark,
         message: this.message };
       },
       handleTitle(message){
         console.log(message);
         this.message = message; 
         this.result = { message, border: this.selectedBorder, picture: this.selectedPicture, 
         mark: this.selectedMark };
       },
       handleMarksSelect(mark) {
         this.selectedMark = mark;
         this.result = { mark, border: this.selectedBorder, picture: this.selectedPicture,
         message: this.message };
       }
      },
      data() {
        return  {
          pictures: getPicturesArray(),
          borders: getBordersArray(),
          marks: getMarksArray(),
          result: null, 
          message: {},
          selectedPicture: null,
          selectedBorder: null,
          selectedMark: null
        }
      } 
}

</script>

<style>
  #app {
    display: flex;
    height: 100%;
  }

  #app>.right{
    width: 300px;
    min-width: 300px;
  }

  #app>.left {
    flex-grow: 1;
  }
</style>
