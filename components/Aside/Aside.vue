<template>
  <aside
    class="absolute shadow top-0 bg-app-bg border-app-border"
    style="height: calc(100vh - 64px); transition: all .3s ease;"
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
