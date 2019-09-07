<template>
  <div id="app">
    <Starmap />
    <div id="main-container" style="height: 200vh" />
    <Footer />
  </div>
</template>

<script>
    import Footer from './components/footer.vue'
    import Starmap from './components/starmap/Starmap.vue'

    export default {
        name: 'App',
        components: {
            Footer,
            Starmap
        }
    }
</script>

<style lang="sass">
  #app
    border: 25px solid rgb(116, 190, 196)
    border-top: 0
</style>
