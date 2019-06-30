<template>
  <ul class="text-black">
    <li
      class="topic-list border border-app-border w-64"
      v-for="(topic, topicId) in topics"
      :key="topicId"
    >
      <input type="checkbox" class="hidden" :id="topic.title + 'check-box'" />
      <label
        class="font-semibold cursor-pointer flex justify-between px-2 py-3 opacity-75"
        :for="topic.title + 'check-box'"
      >
        <span>{{ topic.title }}</span>
        <svg
          class="icon-arrow-left"
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
      </label>

      <ul class="item-list text-sm">
        <li
          class="border-t border-b border-app-border py-3 pl-2 pr-2 cursor-pointer"
          v-for="(item, index) in topic.items"
          :key="index"
        >
          {{ index + 1 }}. {{ item.title }}
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
input:checked ~ label {
  opacity: 1;
}

.icon-arrow-left {
  transition: transform .2s ease-out;
}
input:checked ~ label svg.icon-arrow-left {
  transform: rotate(90deg)
}


.topic-list:hover label {
  opacity: 1;
}
.item-list li:hover {
  opacity: .75;
}
</style>
