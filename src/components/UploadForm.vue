<template>
  <div>
    <div class="dropper">
      <input type="file" />
      <span>Drag your file here!</span>
    </div>

    <br /><br />
    <div>
      Temp Upload url
      <input type="text" v-model="temp_image_url" />
      <button @click="uploadImages(temp_image_url)">Upload</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UploadForm',
  data() {
    return {
      temp_image_url: ''
    }
  },
  methods: mapActions(['uploadImages'])
};
</script>

<style scoped>
  .dropper {
    height: 30vh;
    border: 2px dashed black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .dropper:hover {
    background-color: #eee;
  }
  .dropper input {
    width: 30%;
    height: 30vh;
    position: absolute;
    opacity: 0;
  }
</style>