<template>
  <div class="dbu">
    <h1 class="text-5xl mt-16 mb-6 text-center">Snip Bucket</h1>
    <div ref="searchBar" class="searchBar mx-auto">
      <SearchBar @submit="jumpToApp" class="mt-2" v-model="searchInput" />
    </div>
    <div class="h-8"></div>

    <div
      v-if="!allLangList.length"
      class="bg-app-bgWhite py-12 mx-auto rounded-lg text-center max-w-md"
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
  },
  beforeDestroy() {
    window.onscroll = null
  },
  mounted() {
    window.onscroll = function() {
      scrollFunction()
    }

    const scrollFunction = () => {
      const searchBar = this.$refs.searchBar
      const input = document.querySelector('input')
      // if (document.body.scrollTop >  || document.documentElement.scrollTop > 100) {
      if (searchBar.offsetTop > 224) {
        searchBar.style.width = '100%'
        input.style.borderRadius = '0px'
      } else {
        searchBar.style.width = '90%'
        input.style.borderRadius = '30px'
      }
    }
  }
}
</script>
<style scoped>
.first-card {
  @apply shadow-outline;
}
.searchBar {
  /* background-color: antiquewhite; */
  width: 90%;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
}
</style>
