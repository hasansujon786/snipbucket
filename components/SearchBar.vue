<template>
  <div class="text-app-textDark flex items-center">
    <input
      class="px-4 font-semibold border border-app-border rounded-full h-12 
      focus:outline-none bg-white focus:border-app-icon focus:shadow-md"
      style="width: 600px"
      type="text"
      placeholder="Searh here"
      onfocus="this.placeholder=''"
      onblur="this.placeholder='Search here'"
    />

    <svg
      class="-ml-10 text-app-icon"
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
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',

  data() {
    return {}
  }
}
</script>
