<template>
  <div class="home">
    <h1 class="text-5xl mt-16 mb-6 text-center">Snip Bucket</h1>
    <div ref="searchBarWrapper" class="searchBarWrapper w-11/12 sm:w-4/5 md:w-3/5 mx-auto">
      <SearchBar @submit="jumpToApp" v-model="searchInput" />
    </div>

    <div
      v-show="!allLangList.length && searchInput"
      class="bg-app-bgWhite mt-8 py-12 mx-auto rounded-lg text-center max-w-md"
    >
      <p class="w-full overflow-hidden text-app-text">
        Nothing matched with "<span class="font-semibold">{{ searchInput }}</span
        >"
      </p>
    </div>

    <!-- grid -->
    <section class="sm:w-11/12 mt-12 mx-auto flex flex-wrap justify-center">
      <Card
        :class="{ 'first-card': i == 0 && searchInput }"
        :key="i"
        :lang="lang"
        v-for="(lang, i) in allLangList"
      />
      <Card
        :class="{ 'first-card': i == 0 && searchInput }"
        :key="i + 'hasan'"
        :lang="lang"
        v-for="(lang, i) in allLangList"
      />
    </section>

    <div class="h-20 md:h-32"></div>
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
      const searchBarWrapper = this.$refs.searchBarWrapper
      const input = document.querySelector('input')
      if (searchBarWrapper.offsetTop > 224) {
        searchBarWrapper.classList.add('width-full')
        input.style.borderRadius = '0px'
      } else {
        searchBarWrapper.classList.remove('width-full')
        input.style.borderRadius = '30px'
      }
    }
  }
}
</script>
<style scoped>
.home {
  background-image: url('~assets/img/home-bg-bottom.png');
  background-position: left bottom;
  background-size: contain;
  background-repeat: no-repeat;
}
.first-card {
  @apply shadow-outline;
}
.searchBarWrapper {
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
}
.width-full {
  width: 100% !important;
}
</style>
