const sketchFn = (s) => {
  let yOffset = 0

  s.setup = () => {
    // s.pixelDensity(s.displayDensity())
    s.createCanvas(s.windowWidth, 200)
    s.noStroke()
  }

  s.draw = () => {
    let xOffset = 0

    // s.background("#ff4d5d")
    s.clear()
    s.fill("rgba(255, 255, 255, 1)")

    s.beginShape()

    for (let x = 0; x <= s.width; x += 10) {
      let y = s.map(s.noise(xOffset, yOffset), 0, 1, s.height - 100, s.height - 200)
      s.vertex(x, y)
      xOffset += 0.05
    }

    // patch up to window width
    s.vertex(s.width, s.map(s.noise(xOffset, yOffset), 0, 1, s.height - 100, s.height - 200))

    yOffset += 0.01
    s.vertex(s.width, s.height)
    s.vertex(0, s.height)
    s.endShape(s.CLOSE)

  }

  s.windowResized = () => {
    s.resizeCanvas(s.windowWidth, 240);
  }
}

const myP5 = new p5(sketchFn, 'p5-canvas')

window.onload = () => {
  const gifLinks = document.querySelectorAll(".gif")
  GifLinks( gifLinks, {preload: true} )
}