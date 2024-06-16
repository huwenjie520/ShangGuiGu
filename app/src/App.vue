<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="this.$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from '@c/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style></style>
