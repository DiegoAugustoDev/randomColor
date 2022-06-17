const colorArea = document.getElementById("colorArea")
const rgb = document.getElementById("rgb")

function colorChange(){
    colorArea.style.display = "flex"
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)

    rgb.innerHTML = `RGB(${red}, ${green}, ${blue})`

    document.body.style.backgroundColor = `RGB(${red}, ${green}, ${blue})`
}