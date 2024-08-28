<template>

    <div class="language-switcher text-center">
      <button @click="changeLanguage('en')">English</button>
      <button @click="changeLanguage('fr')">Français</button>
    </div>
    
  <div class="container col-8 ">
    <h1 class="m-5 text-center ">Demande de devis</h1>
    <form class="p-5 fs-5 text bg-light">
      <div class="row align-items-end">
        <div class="mb-5 col-6">
          <label for="companyName" class="form-label">{{ $t('company_name') }}*</label>
          <input type="text"  class="form-control" id="companyName" name="companyName" required>
        </div>
        <div class="mb-5 col-3 flex-column">
          <label class="form-label " for="size">{{ $t('company_size') }}*</label>
          <select class="form-select w-100" name="size" id="size" required>
              <option value="">Less than 1000</option>
              <option value="">From 1000 to 10000</option>
              <option value="">More than 10000</option>
          </select>
        </div>
        <div class="mb-5 col-3 flex-column">
          <label class="form-label " for="devNumber">{{ $t('number_of_developers') }}*</label>
          <select class="form-select w-100" name="devNumber" id="devNumber" required>
              <option value="">Less than 200</option>
              <option value="">From 200 to 1000</option>
              <option value="">More than 1000</option>
          </select>
        </div>
      </div>
       
      <div class="row  align-items-end">
        <div class="mb-5 col">
          <label for="firstname" class="form-label">{{ $t('first_name') }}*</label>
          <input type="text" placeholder="max 100 caractères" class="form-control" id="firstname" name="firstname">
        </div>
        <div class="mb-5 col">
          <label for="lastname" class="form-label">{{ $t('last_name') }}*</label>
          <input type="text" placeholder="max 100 caractères"  class="form-control" id="lastname" name="lastname">
        </div>
      </div>  
        
    <div class="row  align-items-end">
      <div class="mb-5 col">
        <label for="role" class="form-label">{{ $t('role') }}</label>
        <input type="text" placeholder="Vôtre rôle dans la société" class="form-control" id="role" name="role">
      </div>
    </div>
    
    <div class="row  align-items-end">
      <div class="mb-5 col">
        <label for="email" class="form-label">{{ $t('email') }}*</label>
        <input type="email" class="form-control" id="email" name="email" required>
      </div>
      <div class="mb-5 col">
        <label for="phoneNumber" class="form-label">{{ $t('phone_number') }}*</label>
        <input type="tel" placeholder="10 chiffres"  id="phoneNumber" class="form-control" required>
      </div>
    </div>
     
    <div class="row  align-items-end">
      <div class="mb-5 msg">
        <label for="msg" class="form-label">{{ $t('message') }}*</label>
        <textarea maxlength="2000" rows="5" placeholder="Quelles informations supplémentaires souhaitez-vous nous communiquer ?"  class="form-control" id="msg" name="msg" required></textarea>
      </div>
    </div>    

    <div class="row  align-items-end">
      <div class=" mb-5 col-12 text-center">
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
    submitForm() {
      // Logique de soumission du formulaire
      console.log('Formulaire soumis:', this.companyName, this.size, this.devNumber, this.firstName, this.lastName, this.role, this.email, this.phoneNumber, this.message);
    }
  }
};
</script>

<style scoped>
</style>
