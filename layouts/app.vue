<template>
  <div class="font-sans relative  min-h-screen text-app-textDark">
    <section class="fixed top-0 w-full">
      <Navbar @toggleMenu="toggleRightSideMenu" />
      <div class="relative">
        <Aside class="left-0 border-r-2 hidden md:block">
          <PinnedItems :pinnedItems="pinnedItems" />
          <!-- button section -->
          <div class="flex items-center justify-center pb-2 absolute bottom-0 w-full">
            <icon-btn @click="togglePopup">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="feather feather-settings"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path
                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                ></path>
              </svg>
            </icon-btn>
          </div>
        </Aside>
        <div
          @click="toggleRightSideMenu"
          v-show="showRightMenu"
          class="overlay-bg apply absolute top-0 left-0 w-screen h-screen"
        ></div>
        <Aside ref="rSMenu" class="right-0 border-l-2 rSMenuCls">
          <MenuList @link-clicked="toggleRightSideMenu" :showRightMenu="showRightMenu" />
        </Aside>
      </div>
    </section>
    <div class="md:pl-16 lg:pr-64 pt-16">
      <nuxt />
    </div>
    <model-bg @save="onSave" :show="isModelVisble" @cancel="closePopup"></model-bg>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Aside from '~/components/Aside/Aside.vue'
import MenuList from '~/components/Aside/MenuList.vue'
import PinnedItems from '~/components/Aside/PinnedItems.vue'
import ModelBg from '~/components/Ui/ModelBg.vue'

export default {
  name: 'app',

  data() {
    return {
      isModelVisble: false,
      pinnedItems: [],
      showRightMenu: false
    }
  },
  methods: {
    togglePopup() {
      this.isModelVisble = true
    },
    closePopup() {
      this.isModelVisble = false
    },
    onSave(data) {
      this.isModelVisble = false
      const filteredData = data.filter(item => {
        return item.pinned == true
      })
      this.pinnedItems = filteredData
    },
    toggleRightSideMenu() {
      const el = this.$refs.rSMenu.$el
      el.classList.toggle('translateX0')
      this.showRightMenu = !this.showRightMenu
    }
  },
  components: {
    Navbar,
    Aside,
    MenuList,
    PinnedItems,
    ModelBg
  },
  created() {
    this.$store.dispatch('lang/getAllLangList')
  },
  mounted() {
    const defaultData = [
      {
        id: '01',
        slug: 'html',
        title: 'HTML',
        detail: 'Usefull HTML cheetsheet',
        logo: 'html',
        pinned: true
      },
      {
        id: '02',
        slug: 'css',
        title: 'CSS',
        detail: 'Usefull CSS cheetsheet',
        logo: 'css',
        pinned: true
      },
      {
        id: '03',
        slug: 'js',
        title: 'JavaScript',
        detail: 'Usefull JS cheetsheet',
        logo: 'js',
        pinned: true
      },
      {
        id: '05',
        slug: 'react',
        title: 'React',
        detail: 'Usefull React.js cheetsheet',
        logo: 'react',
        pinned: true
      }
    ]
    const localData = JSON.parse(localStorage.getItem('pinnedItems')) || defaultData
    const filteredData = localData.filter(item => {
      return item.pinned == true
    })
    this.pinnedItems = filteredData
  }
}
</script>
<style>
body {
  overflow-x: hidden;
}
.btn,
.btn-line {
  @apply text-sm font-semibold rounded-lg h-10 px-3;
}
.btn:focus,
.btn-line:focus {
  @apply outline-none shadow-outline;
}
/* .btn:hover { } */
.btn-line {
  border-color: currentColor;
  @apply border-2;
}

.translateX0 {
  transform: translateX(0px) !important;
}

@media screen and (max-width: 1023px) {
  aside.rSMenuCls {
    transform: translateX(260px);
  }
}
</style>
