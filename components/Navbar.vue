<template>
  <header
    class="px-5 py-3 flex justify-between items-center bg-app-bg border-b-2 border-app-border"
  >
    <div class="flex items-center">
      <button class="text-app-icon ">
        <svg
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
      </button>
      <nuxt-link to="/">
        <h1 class="text-xl font-semibold ml-3">SnipBucket</h1>
      </nuxt-link>
    </div>
    <nav class="flex items-center">
      <button class="mr-3 text-app-icon border-0 border-app-icon rounded-full" style="padding: 2px">
        <svg
          v-if="!true"
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
      </button>
      <nuxt-link to="/app">
        <button class="bg-gray-500 py-2 px-8 rounded-full border border-gray-600 font-semibold">
          Open app
        </button>
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',

  data() {
    return {}
  }
}
</script>
