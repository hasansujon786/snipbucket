<template>
  <div>
    <section class="w-3/5 mt-16 mx-auto flex flex-col items-center">
      <h1 class="text-5xl">Snip Bucket</h1>
      <SearchBar class="mt-2" />
    </section>

    <!-- grid -->
    <section class="w-11/12 mt-8 mx-auto flex flex-wrap justify-center">
      <Card :key="i" :lang="lang" v-for="(lang, i) in $store.getters['lang/allLangList']" />
    </section>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import SearchBar from '~/components/SearchBar.vue'

export default {
  name: 'app',
  data: () => ({
    allLangList: []
  }),
  methods: {},
  components: {
    Card,
    SearchBar
  }
}
</script>
