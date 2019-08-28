<template>
  <div>
    <section class="mt-3 text-center">
      <h2 class="text-4xl font-semibold">{{ lang.title }}</h2>
      <p class="text-app-text">{{ lang.description }}</p>
    </section>

    <section
      class="section-topic mt-16  mx-auto w-11/12 md:w-10/12"
      v-for="(topic, topicIndex) in lang.topics"
      :key="topicIndex"
    >
      <h2 class="text-3xl text-app-textDark"># {{ topic.title }}</h2>
      <div class="mt-6" v-for="(item, itemIndex) in topic.items" :key="itemIndex">
        <h3
          :id="item.title | splitJoin"
          class="text-2xl text-app-textDark ont-semibold py-2 border-b-2 border-app-border"
        >
          {{ item.title }}
        </h3>
        <p class="my-3 text-app-text text-sm tracking-wide">{{ item.description }}</p>
        <prism
          :id="(item.title + 'box') | splitJoin"
          class="prism-block rounded-lg hadow"
          :language="item.type"
          >{{ item.code }}</prism
        >
      </div>
    </section>
    <div class="h-20 md:h-32"></div>
  </div>
</template>

<script>
// import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'vue-prism-component'
import 'prismjs'
// import 'prismjs/themes/prism-coy.css'
// import 'prismjs/themes/prism.css'

export default {
  layout: 'app',
  name: 'langId',
  data: () => ({
    code: 'const a = b'
  }),
  computed: {
    lang() {
      return this.$store.getters['lang/selectedLang']
    }
  },
  components: {
    Prism
  },
  created() {
    this.$store.dispatch('lang/getSelectedLang', this.$route.params.langId)
  },
  filters: {
    splitJoin(text) {
      return text
        .toLowerCase()
        .split(' ')
        .join('')
    }
  }
}
</script>

<style lang="scss" scoped>
.scrollIntoView {
  // background-color: var(--label-bg);
  color: var(--primary);
}

h3 {
  transition: background-color 0.4s ease-out;
}

pre.prism-block {
  background-color: #283243;
  transition: all 0.3s ease-out;

  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      -webkit-box-shadow: inset 0 0 6px rgba(66, 66, 66, 0.3);
      background: #1d1d1d;
      &:active {
        background: hsl(0, 0%, 9%);
      }
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(136, 136, 136, 0.3);
      background: hsl(0, 0%, 25%);
    }
  }
}
</style>
