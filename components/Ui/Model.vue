<template>
<section class="flex flex-col bg-app-bg rounded shadow-lg" >
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
</template>
 
<script>
export default {
  name: 'model',
  data() {
    return {
    }
  },
}
</script>
 
<style lang="scss" scoped>
</style>