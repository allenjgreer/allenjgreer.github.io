<template>
  <div class="container">
    <Header />
    <div class="starmap">
      <canvas ref="starmap" />
      <a href="#">
        <img src="assets/images/readMore-pill.svg">
      </a>
      <div class="left-wing" />
      <div class="right-wing" />
    </div>
  </div>
</template>

<script>
import Header from './header.vue'

export default {
  name: 'Starmap',
  components: {
    Header
  },
  data() {
    return {
      canvas: {
        context: null,
        width: null,
        height: null
      },
      particles: {
        array: [],
        colour: '255, 255, 255',
        number: 1000,
        opacity: 0.5,
        size: {
          random: true,
          value: 5
        }
      },
      pixelRatio: null
    }
  },
  mounted: function() {
    this.pixelRatio = window.devicePixelRatio || 1
    this.canvas.context = this.$refs.starmap.getContext('2d', { alpha: false })
    window.addEventListener('resize', this.handleResizeEvent.bind(this))
    this.setDimensions()
    this.createParticles()
    this.animate()
  },
  methods: {
    animate() {
      this.clearCanvas()
      this.updateParticles()
      this.drawParticles()
      // window.requestAnimationFrame(this.animate)
    },
    setDimensions() {
      let rect = this.$refs.starmap.parentNode.getBoundingClientRect()
      this.canvas.height = rect.height * this.pixelRatio
      this.canvas.width = rect.width * this.pixelRatio
      this.$refs.starmap.height = rect.height * this.pixelRatio
      this.$refs.starmap.width = rect.width * this.pixelRatio
    },
    createParticles() {
      for (let i = 0; i < this.particles.number; i++) {
        let radius =
          Math.floor((this.particles.size.random ? Math.random() : 1) * this.particles.size.value)
        let x = Math.floor(Math.random() * this.canvas.width)
        let y = Math.floor(Math.random() * this.canvas.height)
        let vx = Math.random() - 0.5
        let vy = Math.random() - 0.5
        this.particles.array.push({
          radius: radius,
          x: x,
          y: y,
          vx: vx,
          vy: vy
        })
      }
    },
    clearCanvas() {
      this.canvas.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.canvas.context.fillStyle = '#474747'
      this.canvas.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    },
    drawParticles() {
      for (let i = 0; i < this.particles.array.length; i++) {
        let context = this.canvas.context
        let particle = this.particles.array[i]
        context.fillStyle = `rgba(${this.particles.colour}, ${this.particles.opacity})`
        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.closePath()
        context.fill()
      }
    },
    handleResizeEvent() {
      let oldWidth = this.canvas.width
      let oldHeight = this.canvas.height
      this.setDimensions()
      for (let i = 0; i < this.particles.array.length; i++) {
        let particle = this.particles.array[i]
        particle.x *= this.canvas.width / oldWidth
        particle.y *= this.canvas.height / oldHeight
      }

      this.canvas.context.clearRect(0, 0, oldWidth, oldHeight)
      this.drawParticles()
    },
    updateParticles() {
      const ms = 0.5
      for (let i = 0; i < this.particles.array.length; i++) {
        let particle = this.particles.array[i]
        let x = particle.x - particle.radius + particle.vx * ms
        let y = particle.y - particle.radius + particle.vy * ms
        if (x < 0 || x > this.canvas.width - particle.radius * 2) {
          particle.vx *= -1
        } else if (y < 0 || y > this.canvas.height - particle.radius * 2) {
          particle.vy *= -1
        }
        particle.x += particle.vx * ms
        particle.y += particle.vy * ms
      }
    }
  }
}
</script>

<style lang="sass">
  .container
    height: 100vh

  .starmap
    height: 100%
    width: 100%

    canvas
      width: 100%
      height: 100%

    svg.down-nav
      position: absolute
      left: calc(50vw - 10px)
      bottom: 70px
      width: 20px

  .left-wing
    border-bottom: 15vw solid #fff
    border-right: 60vw solid transparent
    bottom: 0
    left: 0
    position: absolute

  .right-wing
    border-bottom: 15vw solid #fff
    border-left: 60vw solid transparent
    bottom: 0
    position: absolute
    right: 0
</style>
