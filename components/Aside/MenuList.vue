<template>
  <ul class="text-app-textDark disable-select pb-32">
    <li class="topic-list w-64" v-for="(topic, topicId) in topics" :key="topicId">
      <input type="checkbox" checked class="hidden" :id="topic.title + 'check-box'" />
      <label
        class="font-semibold cursor-pointer flex justify-between border-app-border px-4 py-3 border-b border-t"
        :for="topic.title + 'check-box'"
      >
        <span class="text-sm">{{ topic.title }}</span>

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

      <ul class="item-list text-gray-500 text-sm">
        <li
          class="border-b border-app-border py-3 px-4 cursor-pointer"
          v-for="(item, index) in topic.items"
          :key="index"
          @click="scrollToView(item.title)"
        >
          {{ item.title }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    showRightMenu: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    topics() {
      return this.$store.getters['lang/selectedLang'].topics
    }
  },
  methods: {
    scrollToView(title) {
      this.showRightMenu ? this.$emit('link-clicked') : ''
      const id = title
        .toLowerCase()
        .split(' ')
        .join('')
      const h3 = document.getElementById(id)

      h3.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      })

      h3.classList.add('scrollIntoView')
      setTimeout(() => {
        h3.classList.remove('scrollIntoView')
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.topic-list {
  &:first-child label {
    border-top-width: 0;
  }

  label:hover {
    background-color: #1c2532;
  }

  &:last-child .item-list li:last-child {
    border-bottom-width: 1px;
  }
}

label {
  background-color: var(--label-bg);
}

input {
  &:not(:checked) ~ ul.item-list {
    display: none;
  }
  &:checked ~ label {
    opacity: 1;
  }
  &:checked ~ label svg.icon-arrow-left {
    transform: rotate(90deg);
  }
}

.item-list {
  li {
    &:hover {
      color: var(--label-hover);
    }

    &:last-child {
      border-width: 0;
    }
  }
}

.icon-arrow-left {
  transition: transform 0.3s ease-out;
}
</style>
