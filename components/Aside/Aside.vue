<template>
  <aside
    class="absolute shadow top-0 bg-app-bg border-app-border"
    style="height: calc(100vh - 68px)"
  >
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'Aside',
  data() {
    return {}
  }
}
</script>
