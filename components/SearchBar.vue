<template>
  <div class="text-app-textDark flex items-center">
    <form @submit.prevent="$emit('submit')" class="w-full">
      <input
        class="px-4 h-12 w-full bg-app-bgWhite border border-app-border shadow rounded-full 
        focus:outline-none focus:shadow-md"
        type="text"
        placeholder="Searh here"
        onfocus="this.placeholder=''"
        onblur="this.placeholder='Search here'"
        v-bind="$attrs"
        @input="$emit('input', $event.target.value)"
      />
    </form>

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
  name: 'SearchBar'
}
</script>

<style scoped>
input {
  transition: box-shadow 0.3s ease;
}
</style>
