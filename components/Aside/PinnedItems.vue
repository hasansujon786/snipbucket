<template>
  <ul>
    <li
      class="border-b border-app-border"
      style=""
      v-for="(item, index) in pinnedItems"
      :key="index"
    >
      <nuxt-link class="p-4 inline-block" :to="`/app/${item.slug}`">
        <img
          class="h-8 w-8 object-contain"
          :src="require(`~/assets/img/lang/${item.logo}.svg`)"
          alt=""
        />
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    pinnedItems: {
      type: Array,
      required: true
    }
  }
}
</script>
