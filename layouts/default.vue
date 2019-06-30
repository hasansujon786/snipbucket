<template>
  <div class="font-sans bg-gray-100 min-h-screen text-app-textDark">
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  },
  created() {
    this.$store.dispatch('lang/getAllLangList')
  }
}
</script>
