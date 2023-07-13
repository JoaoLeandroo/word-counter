const counter = document.querySelector(".counter")
const dataInput = document.querySelector(".data-input")
let modifiedCounter

function counterWord(e) {
    modifiedCounter = e.target.value
    counter.innerHTML = `Caracteres - ${modifiedCounter.length}`
}
dataInput.addEventListener("input", counterWord)
