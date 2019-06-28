<template>
  <div class="font-sans bg-gray-100 min-h-screen text-app-textDark">
    <section class="sticky top-0 z-10">
      <Navbar />
      <div class="relative">
        <Aside class="left-0 border-r-2">
          <PinnedItems />
        </Aside>

        <Aside class="right-0 border-l-2">
          <MenuList />
        </Aside>
      </div>
    </section>
    <div class="pl-20 pr-64">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Aside from '~/components/Aside/Aside.vue'
import MenuList from '~/components/Aside/MenuList.vue'
import PinnedItems from '~/components/Aside/PinnedItems.vue'
export default {
  name: 'app',

  data() {
    return {}
  },
  components: {
    Navbar,
    Aside,
    MenuList,
    PinnedItems
  }
}
</script>
