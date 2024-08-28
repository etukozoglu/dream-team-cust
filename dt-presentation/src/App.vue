<template>
  <!-- <div id="app"> -->
    <Header />
    <CustomerForm />
  <!-- </div> -->
</template>

<script>
import CustomerForm from './components/CustomerForm.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    CustomerForm
   
  }
};
</script>

<style>
/* Our global styles here */
</style>

