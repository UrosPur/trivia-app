<template>
  <div id="app">
    <router-view></router-view>
    <nav-bar/>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
      NavBar
  }
}
</script>
