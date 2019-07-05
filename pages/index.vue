<template>
  <div class="dbu">
    <section class="mt-16 mx-auto flex flex-col items-center">
      <h1 class="text-5xl">Snip Bucket</h1>
      <div class="w-full px-3 max-w-xl">
        <SearchBar @submit="jumpToApp" class="mt-2" v-model="searchInput" />
      </div>
    </section>
    <div
      v-if="!allLangList.length"
      class="bg-app-bgWhite py-12 mx-auto mt-20 rounded-lg text-center max-w-md"
    >
      <p class="w-full overflow-hidden text-app-text">
        Nothing matched with "<span class="font-semibold">{{ searchInput }}</span
        >"
      </p>
    </div>

    <!-- grid -->
    <section class="sm:w-11/12 mt-8 mx-auto flex flex-wrap justify-center">
      <Card
        :class="{ 'first-card': i == 0 && searchInput }"
        :key="i"
        :lang="lang"
        v-for="(lang, i) in allLangList"
      />
    </section>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import SearchBar from '~/components/SearchBar.vue'

export default {
  name: 'app',
  data: () => ({
    searchInput: ''
  }),
  computed: {
    allLangList() {
      return this.$store.getters['lang/allLangList'].filter(lang => {
        return lang.title.toLowerCase().match(this.searchInput.toLowerCase())
      })
    }
  },
  methods: {
    jumpToApp() {
      if (this.allLangList.length && this.searchInput) {
        this.$router.push({ name: 'app-langId', params: { langId: this.allLangList[0].slug } })
      }
    }
  },
  components: {
    Card,
    SearchBar
  }
}
</script>
<style scoped>
.first-card {
  @apply shadow-outline;
}
</style>
