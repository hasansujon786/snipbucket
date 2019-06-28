<template>
  <ul>
    <li
      class="border-b border-app-border"
      style=""
      v-for="(item, index) in pinnedItems"
      :key="index"
    >
      <nuxt-link class="p-4 inline-block" :to="`/app/${item.slug}`">
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
  data() {
    return {
      pinnedItems: [
        {
          id: '01',
          slug: 'html',
          title: 'HTML',
          detail: 'Usefull HTML cheetsheet',
          logo: 'html'
        },
        {
          id: '02',
          slug: 'css',
          title: 'CSS',
          detail: 'Usefull CSS cheetsheet',
          logo: 'css'
        },
        {
          id: '03',
          slug: 'js',
          title: 'JavaScript',
          detail: 'Usefull JS cheetsheet',
          logo: 'js'
        },
        {
          id: '04',
          slug: 'vue',
          title: 'vue.js',
          detail: 'Usefull Vue.js cheetsheet',
          logo: 'vue'
        },
        {
          id: '05',
          slug: 'react',
          title: 'React',
          detail: 'Usefull React.js cheetsheet',
          logo: 'react'
        }
      ]
    }
  },
  created() {}
}
</script>
