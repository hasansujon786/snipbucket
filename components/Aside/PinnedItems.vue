<template functional>
  <ul>
    <li class="" v-for="(item, index) in props.pinnedItems" :key="index">
      <nuxt-link class="p-4 block border-b border-app-border" :to="`/app/${item.slug}`">
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

<style scoped lang="css">
.nuxt-link-exact-active {
  background-color: var(--label-bg);
  @apply border-t border-b-2;
}
li:first-child a {
  border-top-width: 0;
}
</style>
