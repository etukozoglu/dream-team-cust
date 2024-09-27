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
        return; // Don't submit if the form is invalid
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

      const json = JSON.stringify(formData);

      const options = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: json
      };

      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        console.log(apiUrl);
        const response = await fetch(`${apiUrl}/form`, options); 
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


<template>
  <h1 class="m-5 text-center">{{ $t('customerForm.pageTitle') }}</h1>

  <div class="container col-12 col-md-10 bg-light p-3">
    <form class="p-3 fs-5 text bg-light rounded-2" @submit.prevent="submitForm">
      <div class="row align-items-end">
        <div class="mb-5 col-12 col-md-6">
          <label for="companyName" class="form-label fs-5">{{ $t('customerForm.companyName') }}*</label>
          <input type="text" class="form-control" :class="{'is-invalid': errors.companyName}" id="companyName" v-model="companyName">
          <div v-if="errors.companyName" class="invalid-feedback d-block" style="min-height: 1rem;">{{ $t('customerForm.errors.companyName') }}</div>
        </div>
        <div class="mb-5 col-12 col-md-3">
          <label class="form-label fs-5" for="companySize">{{ $t('customerForm.companySize') }}*</label>
          <select class="form-select w-100" :class="{'is-invalid': errors.companySize}" v-model="companySize" id="companySize" @change="updateDeveloperOptions">
            <option value="LESS_THAN_1000">Less than 1000</option>
            <option value="FROM_1000_TO_10000">From 1000 to 10000</option>
            <option value="MORE_THAN_10000">More than 10000</option>
          </select>
          <div v-if="errors.companySize" class="invalid-feedback d-block" style="min-height: 1rem;">{{ $t('customerForm.errors.companySize') }}</div>
        </div>
        
        <div class="mb-5 col-12 col-md-3">
          <label class="form-label fs-5" for="teamSize">{{ $t('customerForm.numberOfDevelopers') }}*</label>
          <select class="form-select w-100" :class="{'is-invalid': errors.numberOfDevelopers}" v-model="teamSize" id="teamSize">
            <option v-for="option in filteredDeveloperOptions" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>
          <div v-if="errors.numberOfDevelopers" class="invalid-feedback d-block" style="min-height: 1rem;">{{ $t('customerForm.errors.numberOfDevelopers') }}</div>
        </div>
      </div>

      <div class="row align-items-end">
        <div class="mb-5 col-12 col-md-6">
          <label for="firstName" class="form-label fs-5">{{ $t('customerForm.firstName') }}*</label>
          <input type="text" :class="{'is-invalid': errors.firstName}" :placeholder="$t('customerForm.placeholders.firstName')" class="form-control" id="firstName" v-model="firstName">
          <div v-if="errors.firstName" class="invalid-feedback d-block" style="min-height: 1.5rem;">{{ $t('customerForm.errors.firstName') }}</div>
        </div>
        <div class="mb-5 col-12 col-md-6">
          <label for="lastName" class="form-label fs-5">{{ $t('customerForm.lastName') }}*</label>
          <input type="text" :class="{'is-invalid': errors.lastName}" :placeholder="$t('customerForm.placeholders.lastName')" class="form-control" id="lastName" v-model="lastName">
          <div v-if="errors.lastName" class="invalid-feedback d-block" style="min-height: 1.5rem;">{{ $t('customerForm.errors.lastName') }}</div>
        </div>
      </div>

      <div class="row align-items-end">
        <div class="mb-5 col-12">
          <label for="role" class="form-label fs-5">{{ $t('customerForm.role') }}</label>
          <input type="text" :class="{'is-invalid': errors.role}" :placeholder="$t('customerForm.placeholders.role')" class="form-control" id="role" v-model="role">
          <div v-if="errors.role" class="invalid-feedback d-block" style="min-height: 1.5rem;">{{ $t('customerForm.errors.role') }}</div>
        </div>
      </div>

      <div class="row align-items-end">
        <div class="mb-5 col-12 col-md-6">
          <label for="email" class="form-label fs-5">{{ $t('customerForm.email') }}*</label>
          <input type="email" :class="{'is-invalid': errors.email}" class="form-control" id="email" v-model="email">
          <div v-if="errors.email" class="invalid-feedback d-block" style="min-height: 1.5rem;">{{ $t('customerForm.errors.email') }}</div>
        </div>
        <div class="mb-5 col-12 col-md-6">
          <label for="phoneNumber" class="form-label fs-5">{{ $t('customerForm.phoneNumber') }}*</label>
          <input type="tel" :class="{'is-invalid': errors.phoneNumber}" :placeholder="$t('customerForm.placeholders.phoneNumber')" id="phoneNumber" class="form-control" v-model="phoneNumber">
          <div v-if="errors.phoneNumber" class="invalid-feedback d-block" style="min-height: 1.5rem;">{{ $t('customerForm.errors.phoneNumber') }}</div>
        </div>
      </div>

      <div class="row align-items-end">
        <div class="mb-5 col-12">
          <label for="message" class="form-label fs-5">{{ $t('customerForm.message') }}*</label>
          <textarea maxlength="2000" :class="{'is-invalid': errors.message}" rows="5" :placeholder="$t('customerForm.placeholders.message')" class="form-control" id="message" v-model="message"></textarea>
          <div v-if="errors.message" class="invalid-feedback d-block" style="min-height: 1.5rem;">{{ $t('customerForm.errors.message') }}</div>
        </div>
      </div>

      <div class="row align-items-end">
        <!-- Full width button only in mobile view -->
        <div class="mb-5 col-12 d-block d-md-none">
          <button type="submit" class="btn btn-primary fs-5 w-100">{{ $t('customerForm.button') }}</button>
        </div>
        <!-- Normal button in larger screens -->
        <div class="mb-5 col-12 col-md-6 offset-md-3 d-none d-md-block text-center">
          <button type="submit" class="btn btn-primary fs-5">{{ $t('customerForm.button') }}</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
</style>
