<template>
  <button
    @mouseup="onMouseup($event)"
    v-bind="$attrs"
    v-on="$listeners"
    class="text-app-icon flex justify-center items-center w-10 h-10 rounded-full relative focus:outline-none"
  >
    <div class="rounded-full z-10 w-full h-full absolute top-0 left-0"></div>
    <slot></slot>
  </button>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onMouseup($event) {
      setTimeout(() => {
        $event.target.parentNode.blur()
      }, 300)
    }
  }
}
</script>

<style lang="css" scoped>
button {
  transition: background-color .3s ease-in;
}
button:focus {
  background-color: rgba(197, 197, 197, 0.6);
}
</style>
