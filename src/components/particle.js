export default class Particle {
  constructor(color, opacity, position) {
    this.color = color
    this.opacity = opacity
    this.radius =
      (map.particles.size.random ? Math.random() : 1) * map.particles.size.value
    this.x = position ? position.x : Math.random() * map.canvas.width
    this.y = position ? position.y : Math.random() * map.canvas.height

    if (this.x > map.canvas.width - this.radius * 2) {
      this.x = this.x - this.radius
    } else if (this.x < this.radius * 2) {
      this.x = this.x + this.radius
    } else if (this.y > map.canvas.height - this.radius * 2) {
      this.y = this.y - this.radius
    } else if (this.y < this.radius * 2) {
      this.y = this.y + this.radius
    }

    this.vx = Math.random() - 0.5
    this.vy = Math.random() - 0.5
  }

  draw() {
    map.canvas.context.fillStyle = `rgba(255, 255, 255, ${map.particles.opacity})`
    map.canvas.context.beginPath()
    map.canvas.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    map.canvas.context.closePath()
    map.canvas.context.fill()
  }

  update() {
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
