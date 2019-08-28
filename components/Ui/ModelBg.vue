<template>
  <div class="">
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div
        @click="cancel"
        class="overlay-bg absolute top-0 left-0 w-full h-full"
        v-show="show"
      ></div>
    </transition>
    <transition
      enter-active-class="animated fadeInUp faster"
      leave-active-class="animated fadeOutDown faster"
    >
      <!-- Card -->
      <section
        v-show="show"
        class="model flex flex-col fixed bg-app-bg rounded shadow-lg"
      >
        <header
          class="flex justify-between items-center text-app-text h-12 px-6 leading-none rounded-t border-app-border border-b-2"
        >
          <h3 class="font-semibold tracking-wide">Pinned items</h3>
          <button class="text-app-icon focus:text-red-500 hover:text-red-500 focus:outline-none" @click="cancel">
            <svg
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
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>
        <!-- body -->
        <div class="text-xs flex-grow">
          <ul class="">
            <li class="list-items px-8 border-b border-app-border flex justify-between items-center text-xl py-2 text-app-textDark" 
              v-for="(item, index) in pinnedItems" :key="index"> 

              <span >{{ item.title }}</span>
              <button class="checkbox" :class="{ added: item.pinned }"
              @click="addToPinned(index)">{{ item.pinned ? '&check;' : '' }}</button>
            </li>
          </ul>
          <div></div>
        </div>
        <!-- footer -->
        <div class="flex justify-end items-center px-8 py-5">
          <button @click="cancel" class="text-gray-600 mr-6 font-semibold focus:outline-none hover:text-blue-500">Cancel</button>
          <button @click="save" class="text-app-primary font-semibold focus:outline-none hover:text-blue-500">Save</button>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pinnedItems: []
    }
  },
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    allLangList() {
      return this.$store.getters['lang/allLangList']
    }
  },
  watch: {
    show() {
      this.show ? this.onCardMount() : ''
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    save() {
      // send data to Aside
      this.$emit('save', this.pinnedItems)
      localStorage.setItem('pinnedItems', JSON.stringify(this.pinnedItems))
    },
    onCardMount() {
      // Clone form store to mutate the data independently
      // go to vuex if localData is null
      this.pinnedItems = JSON.parse(localStorage.getItem('pinnedItems')) || [...this.allLangList]
      // add "pinned" key to every item in arr if hasn't
      this.pinnedItems.map(obj => {
        if (!obj.hasOwnProperty('pinned')) {
          obj.pinned = false
        }
      })
    },
    addToPinned(index) {
      // chnage pinned Boolean
      this.pinnedItems[index].pinned = !this.pinnedItems[index].pinned
      this.pinnedItems.splice(index, 1, this.pinnedItems[index])
      // this.$set(this.pinnedItems, index, this.pinnedItems[index])
    }
  }
}
</script>

<style lang="scss" scoped>
.model-background {
  background-color: rgba(28, 37, 50, .7);
}
.model {
  top: 10rem;
  width: 500px;
  left: 50%;
  margin-left: -250px;
  min-height: 256px;
}
.list-items:hover {
  background-color: var(--label-bg);
}

.checkbox {
  @apply border-2 text-white font-semibold rounded-app; 
  font-size: 17px;
  background-color: #D7E7FF;
  border-color: #C3DAFF;
  width: 28px;
  height: 28px;
  &:focus, &:hover {
    @apply outline-none shadow-outline;
  }
  &.added {
    @apply bg-app-primary border-app-primary;
  }

}
</style>
