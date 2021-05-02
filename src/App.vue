<template>
  <div class="max-w-6xl mx-auto flex flex-row justify-between gap-6 p-4">
      <my-sidebar></my-sidebar>
      <router-view></router-view>
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
