<template>

  <div>
    <!-- Button to change language -->
    <div class="language-switcher">
      <button @click="changeLanguage('en')">English</button>
      <button @click="changeLanguage('fr')">Français</button>
    </div>
    
<div>
<h1 class="text-primary text-center">Demande de devis</h1>
    <form class="bg-light">
      <div class="mb-5 soName">
        <label for="companyName" class="form-label">{{ $t('company_name') }} *</label>
        <input type="text" placeholder="{{ $t('company_name') }}" class="form-control" id="companyName" name="companyName" v-model="companyName">
      </div>
      <div class="mb-5 soSize">
        <label class="form-label " for="size">{{ $t('company_size') }} *</label>
        <select class="form-label" name="size" id="size" v-model="size">
          <option value="">Less than 1000</option>
          <option value="">From 1000 to 10000</option>
          <option value="">More than 10000</option>
        </select>
      </div>
      <div class="mb-5 soDev">
        <label class="form-label " for="devNumber">{{ $t('number_of_developers') }} *</label>
        <select name="devNumber" id="devNumber" v-model="devNumber">
          <option value="">Less than 200</option>
          <option value="">From 200 to 1000</option>
          <option value="">More than 1000</option>
        </select>
      </div>

      <div class="mb-5 firstName">
        <label for="firstname" class="form-label">{{ $t('first_name') }} *</label>
        <input type="text" placeholder="{{ $t('first_name') }}" class="form-control" id="firstname" name="firstname" v-model="firstName">
      </div>
      <div class="mb-5 lastName">
        <label for="lastname" class="form-label">{{ $t('last_name') }} *</label>
        <input type="text" placeholder="{{ $t('last_name') }}" class="form-control" id="lastname" name="lastname" v-model="lastName">
      </div>
      <div class="mb-5 role">
        <label for="role" class="form-label">{{ $t('role') }} *</label>
        <input type="text" placeholder="{{ $t('role') }}" class="form-control" id="role" name="role" v-model="role">
      </div>
      <div class="mb-5 email">
        <label for="email" class="form-label">{{ $t('email') }} *</label>
        <input type="email" placeholder="{{ $t('email') }}" class="form-control" id="email" name="email" v-model="email">
      </div>

      <div class="row g-3 align-items-center phone">
        <div class="col-auto">
          <label for="phoneNumber" class="col-form-label custom_width">{{ $t('phone_number') }} *</label>
        </div>
        <div class="col-auto">
          <input type="tel" placeholder="{{ $t('phone_number') }}" id="phoneNumber" class="form-control" v-model="phoneNumber">
        </div>
      </div>
      <div class="mb-5 msg">
        <label for="msg" class="form-label">{{ $t('message') }}</label>
        <textarea rows="5" placeholder="{{ $t('message') }}" class="form-control custom_width" id="msg" name="msg" v-model="message"></textarea>
      </div>
      <button type="submit" class="btn btn-primary send" @click.prevent="submitForm">Envoyer</button>
    </form>
  </div>
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

html {
  padding: 0;
  margin: 0;
  font-size: large;
}

form {
  display: grid;
  width: 60%;
  background-color: rgb(220, 230, 245);
  padding: 30px;
  margin: auto;
  grid-template-columns: 49% 20% 30%;
  grid-template-rows: 13% 13% 13% 13% 13% 20% 13%;
  grid-template-areas:
    "soName soSize soDev"
    "firstName lastName lastName"
    "role role role"
    "email email email"
    "phone phone phone"
    "msg msg msg"
    "send send send";
  gap: 10px;
}

.soName{
    grid-area: soName;
      background-color: rgb(220, 230, 245);
}
  
.soSize{
    grid-area: soSize;
      background-color: rgb(220, 230, 245);
}
.soDev{
    grid-area: soDev;
      background-color: rgb(220, 230, 245);
}

.firstName{
    grid-area: firstName;
      background-color: rgb(220, 230, 245);
}
  
.lastName{
    grid-area: lastName;
      background-color: rgb(220, 230, 245);
}
.role{
    grid-area: role;
      background-color: rgb(220, 230, 245);
}
.email{
    grid-area: email;
      background-color: rgb(220, 230, 245);
}
.phone{
    grid-area: phone;
      background-color: rgb(220, 230, 245);
}
.msg{
    grid-area: msg;
      background-color: rgb(220, 230, 245);
}
.send{
    grid-area: send;
    /* position: relative;
    top: 30px */
      background-color: rgb(220, 230, 245);
      height: 40%;
      width: 30%;
      margin: auto;
      margin-top: 0;
      background-color: blue;
      color: white;
}
#devNumber{
    width: 80%;
}
#size, #devNumber{
    margin-top: 1.4px;
    width: 100%;
    border: none;
    height: 2.3rem;
    border-radius: 7px;
}

@media (max-width: 1300px){
    form{
        display: grid;
        width: 60%;
        background-color: rgb(220, 230, 245);
        padding: 30px;
        margin: auto;
        grid-template-columns: 49% 49%;
        grid-template-rows: 13% 13% 13% 13% 13% 13% 20% 13%;
        grid-template-areas: 
            "soName soName"    
            "soSize  soDev"
            "firstName  lastName "
            "role       role     "
            "email      email     "
            "phone      phone     "
            "msg        msg    "
            "send      send     ";
            gap: 10px;
    }
}
@media (max-width: 835px){
    
    form{
        display: grid;
        width: 80%;
        background-color: rgb(220, 230, 245);
        padding: 30px;
        margin: auto;
        grid-template-columns: 100%;
        grid-template-rows: 9% 9% 9% 9% 9% 9% 9% 9% 18% 9%;
        grid-template-areas: 
            "soName"    
            "soSize"  
            "soDev"
            "firstName"  
            "lastName "
            "role"
            "email"
            "phone"
            "msg"
            "send";
            gap: 0px;
    }
}
    
</style>
