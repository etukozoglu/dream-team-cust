<template>
  <div class="language-switcher text-center m-5">
    <button class="btn btn-primary me-2" @click="changeLanguage('en')">English</button>
    <button class="btn btn-primary" @click="changeLanguage('fr')">Français</button>
  </div>

  <div class="container col-12 col-md-8 bg-light p-3">
    <h1 class="m-5 text-center">{{ $t('page_title') }}</h1>
    <form class="p-5 fs-5 text bg-light" @submit.prevent="submitForm">
      <div class="row align-items-end">
        <div class="mb-5 col-12 col-md-6">
          <label for="companyName" class="form-label fs-5">{{ $t('company_name') }}*</label>
          <input type="text" class="form-control" id="companyName" v-model="companyName" required>
        </div>
        <div class="mb-5 col-12 col-md-3">
          <label class="form-label fs-5" for="companySize">{{ $t('company_size') }}*</label>
          <select class="form-select w-100" v-model="companySize" id="companySize" required>
            <option value="LESS_THAN_1000">Less than 1000</option>
            <option value="FROM_1000_TO_10000">From 1000 to 10000</option>
            <option value="MORE_THAN_10000">More than 10000</option>
          </select>
        </div>
        
        <div class="mb-5 col-12 col-md-3">
          <label class="form-label fs-5" for="teamSize">{{ $t('number_of_developers') }}*</label>
          <select class="form-select w-100" v-model="teamSize" id="teamSize" required>
            <option value="LESS_THAN_200">Less than 200</option>
            <option value="FROM_200_TO_1000">From 200 to 1000</option>
            <option value="MORE_THAN_1000">More than 1000</option>
          </select>
        </div>
      </div>

      <div class="row align-items-end">
        <div class="mb-5 col-12 col-md-6">
          <label for="firstName" class="form-label fs-5">{{ $t('first_name') }}*</label>
          <input type="text" :placeholder="$t('placeholders.firstname')" class="form-control" id="firstName" v-model="firstName" required>
        </div>
        <div class="mb-5 col-12 col-md-6">
          <label for="lastName" class="form-label fs-5">{{ $t('last_name') }}*</label>
          <input type="text" :placeholder="$t('placeholders.lastname')" class="form-control" id="lastName" v-model="lastName" required>
        </div>
      </div>

      <div class="row align-items-end">
        <div class="mb-5 col-12">
          <label for="role" class="form-label fs-5">{{ $t('role') }}</label>
          <input type="text" :placeholder="$t('placeholders.role')" class="form-control" id="role" v-model="role">
        </div>
      </div>

      <div class="row align-items-end">
        <div class="mb-5 col-12 col-md-6">
          <label for="email" class="form-label fs-5">{{ $t('email') }}*</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="mb-5 col-12 col-md-6">
          <label for="phoneNumber" class="form-label fs-5">{{ $t('phone_number') }}*</label>
          <input type="tel" :placeholder="$t('placeholders.phone_number')" id="phoneNumber" class="form-control" v-model="phoneNumber" required>
        </div>
      </div>

      <div class="row align-items-end">
        <div class="mb-5 col-12">
          <label for="message" class="form-label fs-5">{{ $t('message') }}*</label>
          <textarea maxlength="2000" rows="5" :placeholder="$t('placeholders.message')" class="form-control" id="message" v-model="message" required></textarea>
        </div>
      </div>

<div class="row align-items-end">
        <!-- Full width button only in mobile view -->
        <div class="mb-5 col-12 d-block d-md-none">
          <button type="submit" class="btn btn-primary fs-5 w-100">{{ $t('button') }}</button>
        </div>
        <!-- Normal button in larger screens -->
        <div class="mb-5 col-12 col-md-6 offset-md-3 d-none d-md-block text-center">
          <button type="submit" class="btn btn-primary fs-5">{{ $t('button') }}</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyName: '',
      companySize: '',
      teamSize: '',  
      firstName: '',
      lastName: '',
      role: '',
      email: '',
      phoneNumber: '',
      message: ''
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
    async submitForm() {
      const formData = {
        companyName: this.companyName,
        companySize: this.companySize, 
        teamSize: this.teamSize,
        firstName: this.firstName,
        lastName: this.lastName,
        role: this.role,
        email: this.email,
        phoneNumber: this.phoneNumber,
        message: this.message
      };

      const json = JSON.stringify(formData);
      console.log(json);

      const options = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: json
      };

      try {
        const response = await fetch('http://localhost:8080/form', options); 
        if (response.status === 200) {
          this.resetForm();
          alert('You have submitted your request.');
        } else {
          alert('A client or server error has occurred!');
        }
      } catch (error) {
        alert('An unexpected error has occurred!');
      }
    },
    resetForm() {
      this.companyName = '';
      this.companySize = '';
      this.teamSize = '';
      this.firstName = '';
      this.lastName = '';
      this.role = '';
      this.email = '';
      this.phoneNumber = '';
      this.message = '';
    }
  }
};
</script>

<style scoped>
</style>
