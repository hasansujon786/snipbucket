<template>
  <nuxt-link
    :to="`/app/${lang.slug}`"
    class="mx-2 mb-6 bg-app-bgWhite shadow hover:shadow-lg focus:shadow-lg focus:outline-none"
  >
    <div class="w-40 py-5 h-56 flex flex-col justify-center items-center">
      <img
        class="h-16 flex-1 w-16 object-contain "
        :src="require(`~/assets/img/lang/${lang.logo}.svg`)"
        alt=""
      />
      <h4 class="font-semibold">{{ lang.title }}</h4>
      <p class="text-app-text mt-2 text-xs">{{ lang.detail }}</p>
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
