<template>
  <div class="font-sans min-h-screen text-app-textDark">
    <Navbar />
    <!-- <ui-alertBG></ui-alertBG> -->
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import AlertBGVue from '../components/Ui/AlertBG.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    uiAlertBG: AlertBGVue
  },
  created() {
    this.$store.dispatch('lang/getAllLangList')
  }
}
</script>
