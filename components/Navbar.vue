<template>
  <header
    class="pr-2 md:pl-2 md:pr-4 h-16 shadow flex justify-between items-center bg-app-bg border-b-2 border-app-border"
  >
    <div class="flex items-center">
      <nuxt-link to="/">
        <h1 class="text-xl font-semibold ml-3">SnipBucket</h1>
      </nuxt-link>
    </div>
    <nav class="flex items-center">
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <SearchBar v-if="$route.name == 'app-langId'" class="mr-1 hidden" style="width: 20rem" />
      </transition>
      <icon-btn @click="toggleTheme">
        <svg
          v-if="theme == 'dark'"
          class="feather feather-sun"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg
          v-else
          class="feather feather-moon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </icon-btn>
      <icon-btn class="ml-1 lg:hidden" @click="$emit('toggleMenu')">
        <svg
          class="absolute icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </icon-btn>
      <!-- <nuxt-link to="/app" class="hidden sm:block">
        <button class="btn bg-app-primary text-white" style="width: 152px;">
          Manage
        </button>
      </nuxt-link> -->
    </nav>
  </header>
</template>

<script>
import SearchBar from '~/components/SearchBar.vue'

export default {
  name: 'Navbar',

  data() {
    return {}
  },
  components: {
    SearchBar
  },
  computed: {
    theme() {
      return this.$store.getters.getTheme
    }
  },
  methods: {
    toggleTheme() {
      let theme
      const el = document.querySelector('body')
      el.getAttribute('data-theme') == 'light' ? (theme = 'dark') : (theme = 'light')
      el.setAttribute('data-theme', theme)
      localStorage.setItem('data-theme', theme)
      this.$store.dispatch('setTheme', theme)
    },
    detectThemeOnLoad() {
      const theme = localStorage.getItem('data-theme') || 'light'
      document.querySelector('body').setAttribute('data-theme', theme)
      this.$store.dispatch('setTheme', theme)
    }
  },
  created() {
    this.detectThemeOnLoad()
  }
}
</script>
