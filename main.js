const sketchFn = (s) => {
  let yOffset = 0

  s.setup = () => {
    s.createCanvas(s.windowWidth, 300)
    s.noStroke()
    s.pixelDensity(s.displayDensity())
  }

  s.draw = () => {
    s.background("#ff4d5d")
    s.fill("rgba(255, 255, 255, 1)")

    s.beginShape()

    let xOffset = 0

    // Iterate over horizontal pixels
    for (let x = 0; x <= s.width; x += 10) {
      let y = s.map(s.noise(xOffset, yOffset), 0, 1, s.height - 100, s.height - 200)

      // Set the vertex
      s.vertex(x, y)
      // Increment x dimension for noise
      xOffset += 0.05
    }

    // patch up to window width
    s.vertex(s.width, s.map(s.noise(xOffset, yOffset), 0, 1, s.height - 100, s.height - 200))

    // increment y dimension for noise
    yOffset += 0.01
    s.vertex(s.width, s.height)
    s.vertex(0, s.height)
    s.endShape(s.CLOSE)

  }

  s.windowResized = () => {
    s.resizeCanvas(s.windowWidth, 300);
  }
}

const myP5 = new p5(sketchFn, 'p5-canvas')