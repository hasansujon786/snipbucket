<template>
  <div class="top">
    <div class="mx-auto mt-20" style="width: 43.75rem">
      <textarea
        id="textarea-copy"
        v-model="codeContent"
        class="w-full border rounded-lg py-1 px-2 focus:shadow-outline focus:outline-none"
        rows="15"
      ></textarea>
      <div class="mt-3 flex justify-end items-center">
        <button @click="copyContent" class="btn-line text-app-primary w-32">Copy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // layout: 'app',
  name: 'app2',

  data() {
    return {
      codeContent: ''
    }
  },
  methods: {
    copyContent() {
      if (!this.codeContent) {
        return
      }
      const el = document.getElementById('textarea-copy')
      const str = JSON.stringify(this.codeContent)
      el.value = str
      el.select()
      document.execCommand('copy')
    }
  }
}
</script>
