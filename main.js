let xCircle = 50
let yCircle = 50
let circleRadius = 5
let evenRow = false

function setup () {
  createCanvas(1000, 600)
  background(220)
  frameRate(60)
}

function draw () {
  if (xCircle < 944) {
    strokeWeight(1)
    stroke(255)
    // noStroke()
    fill(0)
    circle(xCircle, yCircle, circleRadius)
    yCircle > 150 && xCircle >= 726 && xCircle < 820 ? xCircle += 99 : xCircle += 6.6

  } else if (xCircle >= 944 && yCircle < 144) {
    if (evenRow) {
      xCircle = 50
      yCircle = yCircle + 7.4
      evenRow = false
    } else {
      xCircle = 52
      yCircle = yCircle + 7.4
      evenRow = true
    }
  } else if (xCircle >= 944 && yCircle >= 144 && yCircle < 300) {
    if (evenRow) {
      xCircle = 610
      yCircle = yCircle + 7.4
      evenRow = false
    } else {
      xCircle = 612
      yCircle = yCircle + 7.4
      evenRow = true
    }
  }
}