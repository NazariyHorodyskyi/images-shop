
<template>
  <div class="pictures-container">
   <PictureItem
      class="picture-item"
      v-for="picture in pictures"
      v-bind:picture="picture"
      v-bind:key="picture.id"
      v-bind:class="{ 'selected': isSelected(picture) }"
      v-on:click.native="handlePictureSelect(picture)"
    />
  </div>
</template>

<script>
import PictureItem from './PictureItem'
 
export default {
  name: 'PicturesContainer',
  props: ['pictures', 'multiple'],
  components: {PictureItem},
  methods: {
    handlePictureSelect(picture) {
      if(this.multiple) {
        if(this.selectedPictures.has(picture)) {
          this.selectedPictures.delete(picture);
          this.selectedPictures = new Set(this.selectedPictures);
        } else {
          this.selectedPictures.add(picture);
          this.selectedPictures = new Set(this.selectedPictures);
        }
        this.$emit('picture-select', [...this.selectedPictures]);
      } else {
        if(picture.id === (this.selectedPicture && this.selectedPicture.id)) {
          this.selectedPicture = null;
          this.$emit('picture-select', null);
        } else {
          this.selectedPicture = picture;
          this.$emit('picture-select', picture);
        }
      }
    },
    isSelected(picture) {
      if(this.multiple) {
        return this.selectedPictures.has(picture);
      } else {
        const p = this.selectedPicture;
        return p && (p.id === picture.id);
      }
    }
  },
  data() {
    return {
      selectedPicture: null,
      selectedPictures: new Set()
    }
  }
}

</script>

<style>

.pictures-container {
  display: flex;
  height: 400px;
  flex-wrap: wrap;
  overflow-y: auto;
}
.picture-item{
    border: solid grey 1px;
    margin: 7px;
    border-radius: 5px;
    overflow: hidden;
}
.picture-item:hover{
    box-shadow: 0 0 0 1px rgba(126,113,101,0.2), 0 4px 12px 0 rgba(0,0,0,0.13);
}

.picture-item.selected {
  border: solid green 1px;
 
 box-shadow: 0 0 0 2pt green;
}
</style>
