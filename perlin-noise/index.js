let start = 0
let inc = .01

function setup(){
    createCanvas(innerWidth, innerHeight)
}

function draw(){
    background(50)
    stroke(255)
    noFill()
    beginShape()
    let xoff = start
    for(let x = 0; x < width; x++){
        let y = noise(xoff) * height
        vertex(x, y)
        xoff += inc
    }
    start += inc
    endShape()
}