<template>
  <header class="main-header">
    <h1>inDev. Collaborations,&nbsp;<span>a freelance development company</span></h1>
    <nav class="headerNav">
      <a href="">Gallery</a>
      <a href="">Contact</a>
      <a href="">Github</a>
      <a href="">Linkedin</a>
    </nav>
    <nav class="headerNav--social">
      <a href="https://github.com/allenjgreer"><img :src="require(`./github-mark.svg`)" height="50%"></a>
      <a href="https://www.linkedin.com/in/allen-greer"><img :src="require(`./linkedin.svg`)" height="50%"></a>
    </nav>
  </header>
</template>

<script>
  export default {}
</script>

<style lang="sass">
$main-header-background: linear-gradient(0deg, rgba(71,71,71,0.85) 75%, rgba(130,170,173,1) 75%)

.main-header
  align-items: center
  background: $main-header-background
  color: rgba(255, 255, 255, 0.8)
  display: flex
  flex-wrap: wrap
  height: 100px
  position: fixed
  width: calc(100% - 50px)
  z-index: 3

  a
    color: white
    display: flex
    flex-basis: 25%
    text-decoration: none
    padding: 10px

    @media (min-width: 480px)
      flex-basis: 0

    &:hover
      color: red

  h1
    display: flex
    flex-basis: 100%
    font-size: calc(10px + (18 - 10) * (100vw - 400px) / (2560 - 400))
    font-weight: bold
    height: 25%
    margin: 0 0 0 5px

  p
    display: flex
    flex: 1 1 calc(50% - 5px)
    font-size: calc(10px + (14 - 10) * (100vw - 400px) / (2560 - 400))
    font-style: italic
    font-weight: 100
    margin: 5px 0 0

.headerNav--social
  display: flex
  flex: 1
  justify-content: space-evenly

  img
    height: 5vh

.headerNav
  display: flex
  flex: 1
  flex-wrap: wrap
  height: 100%
  align-content: space-evenly
  width: 50vw

  img
    width: 50px
</style>