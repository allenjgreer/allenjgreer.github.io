<template>
  <div class="banner">
    <div class="blurb-container">
      <div class="blurb">
        <h1>Hi! I am Allen Greer</h1>
        <p>I am a Software Developer Based out of Vancvouer, BC</p>
        <a href="#main-container"><img :src="require(`./readMore-pill.svg`)"></a>
        <a :href="require(`./Resume.pdf`)" target="_blank"><img :src="require(`./downloadCV-pill.svg`)"></a>
      </div>
    </div>
    <div class="headshot">
      <img :src="require(`./headshot.png`)">
    </div>
  </div>
</template>

<scrpit>
  export default {
  }
</scrpit>

<style lang="sass">
.banner
  @media (min-width: 480px)
    flex-direction: row

  color: white
  display: flex
  height: calc(100% - 15vmin - 100px)
  flex-direction: column
  position: absolute
  top: 100px

.blurb-container
  align-items: center
  display: flex
  flex: 1
  flex-direction: column
  justify-content: center

  img
    width: 100px

.headshot
  align-items: center
  display: flex
  flex: 1
  justify-content: center

  img
    width: 50%
</style>
