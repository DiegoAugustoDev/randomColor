

function colorChange(i){
    let red = Math.floor(Math.random()*255)
let green = Math.floor(Math.random()*255)
let blue = Math.floor(Math.random()*255)

const rgb = document.getElementById("rgb")
rgb.innerText = `rgb(${red}, ${green}, ${blue})`

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}