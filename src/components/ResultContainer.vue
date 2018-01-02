<template>
  <div class="selected-picture">
  <div v-if="resultObject" class="info">
    <p v-if="resultObject.picture">Зображення: <span> № {{ resultObject.picture.id }} </span></p>
    <p v-if="resultObject.border">Рама: <span> № {{ resultObject.border.id }} </span></p>
    <p v-if="resultObject.mark">Відпечатки: <img class="mark" v-for="m in resultObject.mark"  v-bind:src="m.url" /></p>
  </div>
    <div v-if="resultObject" class="preview">
      <img  v-bind:src="resultObject.picture && resultObject.picture.url" /> 
      <img  v-bind:src="resultObject.border &&  resultObject.border.url" />
      <span v-if="resultObject.message" class="title"> {{ resultObject.message.title }} </span>
      <span v-if="resultObject.message" class="signature"> {{ resultObject.message.signature }} </span>
      <span v-if="resultObject.message" class="date"> {{ resultObject.message.date }} </span>
    </div>
    
    <button v-if="isValid()" class="submit-btn" v-on:click="sendData">Відіслати</button>
  </div>
</template>

<script>
export default {
  name: 'ResultContainer',
  props:['resultObject'],
  methods: {
    sendData() {
      const formData = new FormData();
      formData.append('data', this.resultObject);


      fetch('https://someurl.com', {
        method: 'post',
        body: formData
      })
      .then(response => {
        console.log('RESPONSE: ', response);
      }, err => {
        console.log('ERROR: ', err);
      });
    },
    isValid() {
      return this.resultObject &&
      this.resultObject.picture &&
      this.resultObject.border;
    }
  }
}
</script>

<style>
  .selected-picture {
    width: 300px;
    -webkit-border-radius: 0 5px 5px 0;
    border-radius: 0 5px 5px 0;
    background-color: #e6e3e1;
    height: 100%;
  }
  
  .info {
    padding: 25px;
    color: #7e7165;
  }

  .info .mark {
    margin: 2px;
    margin-bottom: -6px;
    width: 20px;
  }

  .preview {
    position: relative;
    height: 300px;
    width: 240px;
    margin-top: 25px;
    background: white;
    margin: auto;
    -webkit-box-shadow: 0 2px 6px 0 rgba(0,0,0,0.13);
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.13);
  }

  .preview img {
    width: 220px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .preview span {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    font-size: 14px;
    color: #7e7165;
  }

  .preview .title {
    top: 50px;
  }

  .preview .signature {
    bottom: 64px;
  }

  .preview .date {
    bottom: 46px;
  }

  .submit-btn {
    width: 250px;
    height: 30px;
    background: GREEN;
    border-radius: 7px;
    color: white;
    font-weight: bold;
    border: none;
    margin: auto;
    margin-top: 20px;
    display: block;
  }
</style>