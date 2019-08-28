<template>
  <div class="alertBG fixed">
    <transition-group
      enter-active-class="animated slideInRight faster"
      leave-active-class="animated slideOutRight faster"
    >
      <ui-alert
        @hide="hideAlert"
        v-for="alert in $store.getters['getAlerts']"
        :alert="alert"
        :key="alert._id"
      ></ui-alert>
    </transition-group>
    <button @click="add">add</button>
  </div>
</template>

<script>
import AlertVue from './Alert.vue'
export default {
  name: 'alertBG',
  data() {
    return {
      allErrors: []
    }
  },
  methods: {
    hideAlert(id) {
      this.$store.dispatch('deleteAlertById', id)
    },
    add() {
      const id = Math.random().toString()
      const al = {
        _id: id,
        name: 'Error name',
        body:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem blanditiis sunt, nulla fugit temporibus fugiat error provident sapiente ipsa inventore'
      }
      this.$store.dispatch('pushAlert', al)
      // setTimeout(() => this.$store.dispatch('deleteAlertById', al._id), 4000)
    }
  },
  components: {
    uiAlert: AlertVue
  },
  created() {}
}
</script>

<style lang="scss" scoped>
.alertBG {
  z-index: 100;
  top: 4rem;
  right: 0.6rem;
  width: 50%;
}
</style>
