<template>
  <section class="flex flex-col bg-app-bg rounded shadow-lg mt-2 pb-5 text-gray-500">
    <header
      class="flex justify-between items-center h-12 px-6 leading-none rounded-t border-app-border border-b-2"
    >
      <h3 class="font-semibold tracking-wide">{{ alert.name }}</h3>
      <button
        class="text-app-icon focus:text-red-500 hover:text-red-500 focus:outline-none"
        @click="$emit('hide', alert._id)"
      >
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
    <div class="text-sm px-6 pt-3" style="min-height: 5rem;">
      <p>{{ alert.body }}</p>
    </div>
    <!-- footer -->
    <div class="flex justify-end items-center px-8">
      <div>
        <ui-button>Cancel</ui-button>
        <ui-button @click="test" class="ml-0 " theme="text-app-primary">Save</ui-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'alert',
  data() {
    return {}
  },
  props: {
    alert: {
      type: Object,
      required: true
    }
  },
  methods: {
    test() {
      console.log('hey')
    }
  }
}
</script>

<style lang="scss" scoped></style>
