let map = null

class Particle {
  constructor (color, opacity, position) {
    this.color = color
    this.opacity = opacity
    // this.position = position
    this.radius = (map.particles.size.random ? Math.random() : 1) * map.particles.size.value
    this.x = position ? position.x : Math.random() * map.canvas.width
    this.y = position ? position.y : Math.random() * map.canvas.height

    if (this.x > map.canvas.width - this.radius * 2) {
      this.x = this.x - this.radius
    } else if (this.x < this.radius * 2) {
      this.x = this.x + this.radius
    } if (this.y > map.canvas.height - this.radius * 2) {
      this.y = this.y - this.radius
    } else if (this.y < this.radius * 2) {
      this.y = this.y + this.radius
    }

    this.vx = Math.random() - 0.5
    this.vy = Math.random() - 0.5
  }


  draw () {
    map.canvas.context.fillStyle = `rgba(255, 255, 255, ${map.particles.opacity})`
    map.canvas.context.beginPath()
    map.canvas.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    map.canvas.context.closePath()
    map.canvas.context.fill()
  }

  update () {
    const ms = 0.5
    let x = this.x + this.vx * ms
    let y = this.y + this.vy * ms
    if (x < 0 || x > map.canvas.width) {
      this.vx *= -1
    } else if (y < 0 || y > map.canvas.height) {
      this.vy *= -1
    }
    this.x += this.vx * ms
    this.y += this.vy * ms
  }
}

class StarMap {
  constructor (canvas, options) {
    this.canvas = {
      context: canvas.getContext('2d'),
      el: canvas,
      height: canvas ? canvas.offsetHeight : 1,
      width: canvas ? canvas.offsetWidth : 1
    }
    this.particles = {
      array: [],
      color: '#fff',
      number: 1000,
      opacity: 0.3,
      size: {
        value: 1.5,
        random: true
      }
    }
    this.normalizeRetina()
    this.canvasSize()
  }

  createParticles () {
    for (let i = 0; i < this.particles.number; i++) {
      this.particles.array.push(new Particle(this.particles.color, this.particles.opacity))
    }
  }

  drawParticles () {
    this.canvas.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.updateParticles()
    for (let i = 0; i < this.particles.array.length; i++) {
      this.particles.array[i].draw(this.canvas.context)
    }
  }

  updateParticles () {
    for (let i = 0; i < this.particles.array.length; i++) {
      this.particles.array[i].update()
    }
  }

  canvasSize () {
    this.canvas.el.height = this.canvas.height
    this.canvas.el.width = this.canvas.width

    window.addEventListener('resize', function () {
      map.canvas.height = map.canvas.height * map.pixelRatio
      map.canvas.width = map.canvas.el.offsetWidth * map.pixelRatio
      map.canvas.el.height = map.canvas.height
      map.canvas.el.width = map.canvas.width
      map.particles.array = []
      map.createParticles()
      map.drawParticles()
      // TODO: Clear canvas and redraw when resize event happens
    })
  }

  normalizeRetina () {
    const canvas = this.canvas
    const pixelRatio = window.devicePixelRatio || 1
    window.canvas = canvas
    canvas.height = canvas.height * pixelRatio
    canvas.width = canvas.width * pixelRatio
    this.particles.size.value = this.particles.size.value * pixelRatio
    this.pixelRatio = pixelRatio
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.createElement('canvas')
  canvas.style.height = '100vh'
  canvas.style.width = '100vw'
  document.getElementById('starmap').appendChild(canvas)
  map = new StarMap(canvas)
  map.createParticles()
  map.drawParticles()

  let request
  function animate () {
    map.drawParticles()
    request = window.requestAnimationFrame(animate)
  }
  window.starmap = map

  let animateState = false
  document.getElementById('animation-toggle').onclick = function (event) {
    if (animateState) {
      window.cancelAnimationFrame(request)
      animateState = false
    } else {
      animate()
      animateState = true
    }
  }
  let mailto = document.getElementById('reach-me')
  // let mailto = document.createElement('a')
  // mailto.classList.add('starmap--link')
  mailto.href = '\x6d\x61\x69\x6c\x74\x6f\x3a\x61\x6c\x6c\x65\x6e\x2b\x70\x61\x67\x65\x73\x40\x69\x6e\x64\x65\x76\x63\x6f\x2e\x69\x6f'
  mailto.innerHTML = '\x61\x6c\x6c\x65\x6e\x40\x69\x6e\x64\x65\x76\x63\x6f\x2e\x69\x6f'
  // document.getElementById('occupation').appendChild(mailto)
})
