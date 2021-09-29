<template>
  <div class="max-w-6xl mx-auto flex sm:flex-row flex-col justify-between items-baseline gap-6 p-4">
      <my-sidebar></my-sidebar>
      <router-view v-slot="{ Component }">
        <transition name="fade-in" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
  </div>
  <my-footer></my-footer>
</template>

<script>
import MySidebar from './components/MySideBar.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MySidebar,
    MyFooter,
  }
}
</script>

<style scoped>
  .fade-in-enter-to,
  .fade-in-leave-from {
    transform: translateY(0px);
    opacity: 1;
  }
  .fade-in-enter-active,
  .fade-in-leave-active {
    transition: all 0.8s ease-in-out;
  }
  .fade-in-enter-from,
  .fade-in-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }
</style>
