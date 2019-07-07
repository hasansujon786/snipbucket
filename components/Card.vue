<template functional>
  <nuxt-link
    :to="`/app/${props.lang.slug}`"
    class="mx-2 mb-6 bg-app-bgWhite shadow hover:shadow-lg focus:shadow-lg focus:outline-none"
  >
    <div
      class="w-32 h-40 sm:w-40 sm:h-56 text-center py-5 px-2 flex flex-col justify-center items-center"
    >
      <img
        class="flex-1 w-10 h-10 sm:w-16 sm:h-16 object-contain "
        :src="require(`~/assets/img/lang/${props.lang.logo}.svg`)"
        alt=""
      />
      <h4 class="font-semibold">{{ props.lang.title }}</h4>
      <p class="text-app-text mt-2 text-xs">{{ props.lang.detail }}</p>
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
  }
}
</script>
