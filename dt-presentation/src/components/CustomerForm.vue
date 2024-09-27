<template>
  <!-- <div class="language-switcher text-center m-3">
    <button class="btn btn-primary me-2" @click="changeLanguage('en')">English</button>
    <button class="btn btn-primary" @click="changeLanguage('fr')">Français</button>
  </div> -->

      <h1 class="m-3 text-center">{{ $t('page_title') }}</h1>

  <div class="container col-12 col-md-10 bg-light p-3">
    <form class="p-3 fs-5 text bg-light rounded-2" @submit.prevent="submitForm">
      <div class="row align-items-end">
        <div class="mb-5 col-12 col-md-6">
          <label for="companyName" class="form-label fs-5">{{ $t('company_name') }}*</label>
          <input type="text" class="form-control" :class="{'is-invalid': errors.company_name}" id="companyName" v-model="companyName">
          <div v-if="errors.company_name" class="invalid-feedback d-block" style="min-height: 1rem;">{{ $t('errors.company_name') }}</div>
        </div>
        <div class="mb-5 col-12 col-md-3">
          <label class="form-label fs-5" for="companySize">{{ $t('company_size') }}*</label>
          <select class="form-select w-100" :class="{'is-invalid': errors.company_size}" v-model="companySize" id="companySize" @change="updateDeveloperOptions">
            <option value="LESS_THAN_1000">Less than 1000</option>
            <option value="FROM_1000_TO_10000">From 1000 to 10000</option>
            <option value="MORE_THAN_10000">More than 10000</option>
          </select>
          <div v-if="errors.company_size" class="invalid-feedback d-block" style="min-height: 1rem;">{{ $t('errors.company_size') }}</div>
        </div>
        
        <div class="mb-5 col-12 col-md-3">
          <label class="form-label fs-5" for="teamSize">{{ $t('number_of_developers') }}*</label>
          <select class="form-select w-100" :class="{'is-invalid': errors.number_of_developers}" v-model="teamSize" id="teamSize">
            <option v-for="option in filteredDeveloperOptions" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>
          <div v-if="errors.number_of_developers" class="invalid-feedback d-block" style="min-height: 1rem;">{{ $t('errors.number_of_developers') }}</div>
        </div>
      </div>

      <div class="row align-items-end">
        <div class="mb-5 col-12 col-md-6">
          <label for="firstName" class="form-label fs-5">{{ $t('first_name') }}*</label>
          <input type="text" :class="{'is-invalid': errors.firstname}" :placeholder="$t('placeholders.firstname')" class="form-control" id="firstName" v-model="firstName">
          <div v-if="errors.firstname" class="invalid-feedback d-block" style="min-height: 1.5rem;">{{ $t('errors.firstname') }}</div>
        </div>
        <div class="mb-5 col-12 col-md-6">
          <label for="lastName" class="form-label fs-5">{{ $t('last_name') }}*</label>
          <input type="text" :class="{'is-invalid': errors.lastname}" :placeholder="$t('placeholders.lastname')" class="form-control" id="lastName" v-model="lastName">
          <div v-if="errors.lastname" class="invalid-feedback d-block" style="min-height: 1.5rem;">{{ $t('errors.lastname') }}</div>
        </div>
      </div>

      <div class="row align-items-end">
        <div class="mb-5 col-12">
          <label for="role" class="form-label fs-5">{{ $t('role') }}</label>
          <input type="text" :class="{'is-invalid': errors.role}" :placeholder="$t('placeholders.role')" class="form-control" id="role" v-model="role">
          <div v-if="errors.role" class="invalid-feedback d-block" style="min-height: 1.5rem;">{{ $t('errors.role') }}</div>
        </div>
      </div>

      <div class="row align-items-end">
        <div class="mb-5 col-12 col-md-6">
          <label for="email" class="form-label fs-5">{{ $t('email') }}*</label>
          <input type="email" :class="{'is-invalid': errors.email}" class="form-control" id="email" v-model="email">
          <div v-if="errors.email" class="invalid-feedback d-block" style="min-height: 1.5rem;">{{ $t('errors.email') }}</div>
        </div>
        <div class="mb-5 col-12 col-md-6">
          <label for="phoneNumber" class="form-label fs-5">{{ $t('phone_number') }}*</label>
          <input type="tel" :class="{'is-invalid': errors.phone_number}" :placeholder="$t('placeholders.phone_number')" id="phoneNumber" class="form-control" v-model="phoneNumber">
          <div v-if="errors.phone_number" class="invalid-feedback d-block" style="min-height: 1.5rem;">{{ $t('errors.phone_number') }}</div>
        </div>
      </div>

      <div class="row align-items-end">
        <div class="mb-5 col-12">
          <label for="message" class="form-label fs-5">{{ $t('message') }}*</label>
          <textarea maxlength="2000" :class="{'is-invalid': errors.message}" rows="5" :placeholder="$t('placeholders.message')" class="form-control" id="message" v-model="message"></textarea>
          <div v-if="errors.message" class="invalid-feedback d-block" style="min-height: 1.5rem;">{{ $t('errors.message') }}</div>
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
      message: '',
      errors: {},
      developerOptions: [
        { value: 'LESS_THAN_200', text: 'Less than 200' },
        { value: 'FROM_200_TO_1000', text: 'From 200 to 1000' },
        { value: 'MORE_THAN_1000', text: 'More than 1000' }
      ],
      filteredDeveloperOptions: []
    };
  },
  watch: {
    companySize() {
      this.updateDeveloperOptions();
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
        updateDeveloperOptions() {
      if (this.companySize === 'LESS_THAN_1000') {
        this.filteredDeveloperOptions = this.developerOptions.filter(option => option.value !== 'MORE_THAN_1000');
      } else {
        this.filteredDeveloperOptions = [...this.developerOptions];
      }
    },
    validateForm() {
      this.errors = {}; // Clear previous errors

      if (!this.companyName) {
        this.errors.company_name = this.$t('errors.company_name');
      }
      if (!this.companySize) {
        this.errors.company_size = this.$t('errors.company_size');
      }
      if (!this.teamSize) {
        this.errors.number_of_developers = this.$t('errors.number_of_developers');
      }
      if (!this.firstName) {
        this.errors.firstname = this.$t('errors.firstname');
      }
      if (!this.lastName) {
        this.errors.lastname = this.$t('errors.lastname');
      }
      if (!this.email || !this.validateEmail(this.email)) {
        this.errors.email = this.$t('errors.invalid_email_format');
      }
      if (!this.phoneNumber || !/^\+?[0-9\s\-]+$/.test(this.phoneNumber)) {
        this.errors.phone_number = this.$t('errors.invalid_phone_number_format');
      }
      if (!this.message) {
        this.errors.message = this.$t('errors.message');
      }

      return Object.keys(this.errors).length === 0;
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    async submitForm() {
      if (!this.validateForm()) {
        // Don't submit if the form is invalid
        return;
      }

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

      // convert the object to JSON.stringify for backend
      const json = JSON.stringify(formData);

      const options = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: json
      };

      try {
        const response = await fetch('http://localhost:8080/form', options); 
        if (response.status === 200) {
          this.resetForm();
          alert('Bravo, you have submitted your request.');
        } else {
          alert('An error has occurred!');
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
      this.errors = {};
    }
  }
};
</script>

<style scoped>
</style>
