<script>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'

export default {
	name: 'App',
	components: {
		Header
	}
}
</script>

<template>
	<Header />
	<RouterView />
</template>

<style >
</style>