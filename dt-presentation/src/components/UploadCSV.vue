<template>
  <h1 class="m-3 text-center">Upload Developers CSV</h1>
  <div class="container col-12 col-md-10 bg-light p-3">
    <form class="p-3 fs-5 text bg-light rounded-2" @submit.prevent="uploadFile">
      <input type="file" @change="handleFileUpload" accept=".csv" required class="form-control mb-3"/>
      <button class="btn btn-primary fs-5" type="submit">SEND</button>
    </form>

    <!-- Message de succès ou d'erreur -->
    <div v-if="message" :class="['mt-3', messageType === 'success' ? 'text-success' : 'text-danger']">
      {{ message }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      selectedFile: null,
      message: '',
      messageType: '',
    };
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },
    async uploadFile() {
      if (!this.selectedFile) {
        this.message = 'Please select a file';
        this.messageType = 'error';
        return;
      }

      const maxFileSize = 5 * 1024 * 1024; // 5MB
      if (this.selectedFile.size > maxFileSize) {
        this.message = 'The file size should not exceed 5MB';
        this.messageType = 'error';
        return;
      }

      const formData = new FormData();
      formData.append('file', this.selectedFile);

      try {
        const response = await axios.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        this.message = 'File uploaded successfully';
        this.messageType = 'success';
      } catch (error) {
        this.message = 'Error uploading file';
        this.messageType = 'error';
      }
    }
  }
};
</script>

<style scoped>
.upload-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>