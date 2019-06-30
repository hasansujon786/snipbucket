<template>
  <div class="model fixed h-64 rounded bg-white shadow">
    <header class="flex justify-between items-center pl-2 rounded-t bg-app-bg">
      <h3>Pinned items</h3>
      <icon-btn @click="closeModel">
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
          class="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </icon-btn>
    </header>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, excepturi?
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    closeModel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped>
.model {
  top: 10rem;
  width: 400px;
  left: 40%;
}
</style>
