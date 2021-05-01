<template>
  <div class="container mx-auto flex flex-row justify-between gap-6 p-4">
      <my-sidebar></my-sidebar>
      <router-view></router-view>
  </div>
</template>

<script>
import MySidebar from './components/MySideBar.vue'


export default {
  name: 'App',
  components: {
    MySidebar
  }
}
</script>
