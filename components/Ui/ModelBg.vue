<template>
  <div class="">
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div
        @click="cancel"
        class="model-background absolute top-0 left-0 w-full h-full"
        v-show="show"
      ></div>
    </transition>
    <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <!-- Card -->
      <section
        v-show="show"
        class="model flex flex-col fixed rounded bg-white shadow border border-app-border"
      >
        <header
          class="flex justify-between items-center bg-gray-100 pl-3 rounded-t border-b border-app-border"
        >
          <h3 class="font-semibold text-sm tracking-wide">Pinned items</h3>
          <button class="p-2 text-app-icon focus:text-red-500 focus:outline-none" @click="cancel">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
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
        <div class="px-3 text-xs flex-grow">
          <ul class="ks-cboxtags pt-1">
            <li class="inline mx-1" v-for="(item, index) in pinnedItems" :key="index">
              <span :class="{ added: item.pinned }" @click="addToPinned(index)" :for="item.title">{{
                item.title
              }}</span>
            </li>
          </ul>
          <div></div>
        </div>
        <!-- footer -->
        <div class="flex justify-end items-center p-3">
          <button @click="save" class="bg-app-primary text-white px-4 py-1 rounded">Save</button>
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
      const filteredData = this.pinnedItems.filter(item => {
        return item.pinned == true
      })
      // send data to Aside
      this.$emit('save', filteredData)
      localStorage.setItem('pinnedItems', JSON.stringify(filteredData))
    },
    onCardMount() {
      // Clone form store to mutate the data independently
      this.pinnedItems = [...this.allLangList]
      // add "pinned" key to every item in arr
      this.pinnedItems.map(obj => {
        if (!obj.hasOwnProperty('pinned')) {
          obj.pinned = false
        }
      })
    },
    addToPinned(index) {
      this.pinnedItems[index].pinned = !this.pinnedItems[index].pinned
      this.pinnedItems.splice(index, 1, this.pinnedItems[index])
      // this.$set(this.pinnedItems, index, this.pinnedItems[index])
    }
  }
}
</script>

<style scoped>
.model-background {
  background: #64676b6b;
}
.model {
  top: 10rem;
  width: 400px;
  left: 50%;
  margin-left: -200px;
  min-height: 256px;
}

ul.ks-cboxtags li span {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(139, 139, 139, 0.3);
  color: #adadad;
  border-radius: 25px;
  white-space: nowrap;
  margin: 3px 0px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.2s;
}

ul.ks-cboxtags li span {
  padding: 8px 12px;
  cursor: pointer;
}

ul.ks-cboxtags li span::before {
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  font-size: 12px;
  padding: 2px 6px 2px 2px;
  content: '\2795';
  transition: transform 0.3s ease-in-out;
}

ul.ks-cboxtags li span.added::before {
  content: '\2796';
  transform: rotate(-360deg);
  transition: transform 0.3s ease-in-out;
}

ul.ks-cboxtags li span.added {
  border: 2px solid #1bdbf8;
  background-color: #12bbd4;
  color: #fff;
  transition: all 0.2s;
}
</style>
