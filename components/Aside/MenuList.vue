<template>
  <ul class="font-semibold">
    <li
      class="py-3 px-2 border border-app-border cursor-pointer w-64 hover:text-app-primary"
      v-for="(topic, topicId) in topics"
      :key="topicId"
    >
      <input type="checkbox" class="hidden" :id="topic.title + 'check-box'" />
      <label class="flex" :for="topic.title + 'check-box'">
        <svg
          class="text-app-textDark"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        {{ topic.title }}
      </label>
      <ul class="item-list">
        <li v-for="(item, index) in topic.items" :key="index">
          {{ item.title }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    topics() {
      return this.$store.getters['lang/selectedLang'].topics
    }
  }
}
</script>

<style lang="css" scoped>
input:not(:checked) ~ ul.item-list {
  display: none;
}
</style>
