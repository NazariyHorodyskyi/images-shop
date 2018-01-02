<template>
  <div class="picture">
    <img  v-bind:src="picture.url" />
  </div>
</template>

<script>
export default {
  name: 'PicturesItem',
  props: ['picture']
}
</script>

<style>
  .picture {
    
  }

  .picture>img {
    width: 180px;
   
  }
</style>
