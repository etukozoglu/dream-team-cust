<template>
<div class="language-switcher text-center">
  <button class="btn btn-primary me-2" @click="changeLanguage('en')">English</button>
  <button class="btn btn-primary" @click="changeLanguage('fr')">Français</button>
</div>


<div class="container col-12 col-md-8">
  <h1 class="m-5 text-center">Demande de devis</h1>
  <form class="p-5 fs-5 text bg-light" id="form">
    <div class="row align-items-end">
      <div class="mb-5 col-12 col-md-6">
        <label for="companyName" class="form-label">{{ $t('company_name') }}*</label>
        <input type="text" class="form-control" id="companyName" name="companyName" required>
      </div>
      <div class="mb-5 col-12 col-md-3">
        <label class="form-label" for="size">{{ $t('company_size') }}*</label>
        <select class="form-select w-100" name="size" id="size" required>
          <option value="less than 1000">Less than 1000</option>
          <option value="from 1000 to 10000">From 1000 to 10000</option>
          <option value="more than 10000">More than 10000</option>
        </select>
      </div>
      <div class="mb-5 col-12 col-md-3">
        <label class="form-label" for="devNumber">{{ $t('number_of_developers') }}*</label>
        <select class="form-select w-100" name="devNumber" id="devNumber" required>
          <option value="less than 200">Less than 200</option>
          <option value="from 200 to 1000">From 200 to 1000</option>
          <option value="more than 1000">More than 1000</option>
        </select>
      </div>
    </div>

    <div class="row align-items-end">
      <div class="mb-5 col-12 col-md-6">
        <label for="firstname" class="form-label">{{ $t('first_name') }}*</label>
        <input type="text" :placeholder="$t('placeholders.firstname')" class="form-control" id="firstname" name="firstname">
      </div>
      <div class="mb-5 col-12 col-md-6">
        <label for="lastname" class="form-label">{{ $t('last_name') }}*</label>
        <input type="text" :placeholder="$t('placeholders.lastname')" class="form-control" id="lastname" name="lastname">
      </div>
    </div>

    <div class="row align-items-end">
      <div class="mb-5 col-12">
        <label for="role" class="form-label">{{ $t('role') }}</label>
        <input type="text" :placeholder="$t('placeholders.role')" class="form-control" id="role" name="role">
      </div>
    </div>

    <div class="row align-items-end">
      <div class="mb-5 col-12 col-md-6">
        <label for="email" class="form-label">{{ $t('email') }}*</label>
        <input type="email" class="form-control" id="email" name="email" required>
      </div>
      <div class="mb-5 col-12 col-md-6">
        <label for="phoneNumber" class="form-label">{{ $t('phone_number') }}*</label>
        <input type="tel" :placeholder="$t('placeholders.phone_number')" id="phoneNumber" class="form-control" required>
      </div>
    </div>

    <div class="row align-items-end">
      <div class="mb-5 col-12">
        <label for="msg" class="form-label">{{ $t('message') }}*</label>
        <textarea maxlength="2000" rows="5" :placeholder="$t('placeholders.message')"  class="form-control" id="msg" name="msg" required></textarea>
      </div>
    </div>

    <div class="row align-items-end">
      <div class="mb-5 col-12 text-center">
        <button type="submit" class="btn btn-primary fs-5 text" @click.prevent="submitForm">{{ $t('button') }}</button>
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
      size: '',
      devNumber: '',
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
      const form = document.querySelector('#form');

      const formData = new FormData(form);
        console.log(formData);
        const object = {};
        formData.forEach((value, key) => object[key] = value);
        const json = JSON.stringify(object);
        console.log(json);

        const options = {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: json
        }

//need to put the real URL in the fetch() =>
        try{
          const response = await fetch('http://localhost:8080/dreamTeamCust', options); 
          if (response.status === 200){
            form.reset();
            alert('You have submitted your request.');
          } else {
            alert('A client or server error has occured!');
          }
        } catch(er){
          alert('An unexpected error has occured!');
        }
      
      console.log('Formulaire soumis:', this.companyName, this.size, this.devNumber, this.firstName, this.lastName, this.role, this.email, this.phoneNumber, this.message);
    }
  }
};
</script>

<style scoped>
</style>
