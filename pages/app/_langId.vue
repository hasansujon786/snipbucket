<template>
  <div>
    <section class="text-center">
      <h2 class="text-4xl">{{ lang.title }}</h2>
      <p class="text-app-text">{{ lang.description }}</p>
    </section>
    <section class="mx-auto w-10/12" v-for="(topic, topicIndex) in lang.topics" :key="topicIndex">
      <h2 class="text-3xl my-6"># {{ topic.title }}</h2>
      <div class="mt-3" v-for="(item, itemIndex) in topic.items" :key="itemIndex">
        <h3 class="text-xl border-b border-app-border">{{ item.title }}</h3>
        <p class="my-3 text-app-text text-sm tracking-wide">{{ item.description }}</p>
        <div class="h-56 bg-gray-200 rounded border border-app-border "></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'app',
  name: 'langId',
  computed: {
    lang() {
      return this.$store.getters['lang/selectedLang']
    }
  },
  methods: {},
  created() {
    this.$store.dispatch('lang/getSelectedLang', this.$route.params.langId)
  }
}
</script>
