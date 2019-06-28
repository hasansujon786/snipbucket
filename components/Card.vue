<template>
  <nuxt-link
    :to="`/app/${lang.slug}`"
    class="mx-2 mb-6 bg-white shadow hover:bg-gray-200 focus:shadow-outline focus:outline-none"
  >
    <div class="w-40 h-56 text-center">
      <h4>{{ lang.title }}</h4>
      <p class="text-app-text text-sm">{{ lang.detail }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Card',
  props: {
    lang: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>
