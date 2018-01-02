<template>
  <div class="title">
    <label><input type="text" v-model="message.title" /> Заголовок Картины </label> 
    <label><input type="text" v-model="message.signature" /> Подпись </label>
    <label><input type="text" v-model="message.date" /> Дата События </label>
    <button type="button" v-on:click="saveMessage" > Submit </button>
    <section>
      <label> <input type="radio" v-model="message.font" value="Ariston" >Ariston </label>
      <label> <input type="radio" v-model="message.font" value="DaVinchi1">DaVinchi </label>
      <label> <input type="radio" v-model="message.font" value="Brody">Brody </label>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PictureData',
  data() {
    return{
        message: {
          title: "",
          signature: "",
          date: "",
          font:"Ariston"
        }
    }
  },
  methods: {
    saveMessage(){
      this.$emit('massageSaved', {...this.message});
    }
  }
}
</script>

<style>
.title>label {
  display: block;
}
.title .radio {
  display: inline-block;
}
  
</style>