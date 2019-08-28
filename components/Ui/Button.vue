<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    @mouseup="onLeave"
    class="ui-button font-semibold px-6 py-2 rounded"
    :class="theme"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: '',
  props: {
    theme: {
      type: String,
      default: 'text-gray-600'
    }
  },
  methods: {
    onLeave($event) {
      $event.target.blur()
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-button {
  &:focus,
  &:hover {
    background-color: hsl(216, 31%, 28%);
    outline: none;
  }
  &:active {
    background-color: var(--border-color);
  }
}
</style>
