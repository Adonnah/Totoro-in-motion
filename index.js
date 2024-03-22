console.log ("Eind Opdracht")

const totoro = document.getElementById('totoro')
const hart = document.getElementById('plus')

function veranderTotoro () {
    console.log('hart')
    totoro.src='image/totorolove.gif'
}
hart.addEventListener('click', veranderTotoro)


const myButton = document.getElementById('myButton')

function eating () {
    console.log('eat')
    totoro.src='image/totoroeating.gif'
    Geluid.play();
}
myButton.addEventListener('click', eating)

const hulButton = document.getElementById('hulButton')

function hulla () {
    console.log('hul')
    totoro.src='image/totorohulahoop.gif'
    Geluid.play();
}
hulButton.addEventListener('click', hulla)

const swimButton = document.getElementById('swimButton')

function swim () {
    console.log('swim')
    totoro.src='image/totoroswimming.gif'
    Geluid.play();
}
swimButton.addEventListener('click', swim)

const musButton = document.getElementById('musButton')

function music () {
    console.log('music')
    totoro.src='image/totoromusic.gif'
    Geluid.play();
}
musButton.addEventListener('click', music)

var getal = 0
const plusKnop = document.querySelector("#plus")
const getalVeld = document.querySelector("h2")

function verhoogGetal () {
    getal = getal + 1
    updateGetal()
}

function updateGetal (){
    console.log("getal: " + getal)
    getalVeld.textContent = getal
}

plusKnop.addEventListener('click', verhoogGetal)

const Geluid = new Audio('sounds/myneighbortotoro.mp3')
