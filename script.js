const counter = document.querySelector(".counter")
const dataInput = document.querySelector(".data-input")
let modifiedCounter;

// dataInput.addEventListener("input", (e) => {
//     modifiedCounter =
//     counter.innerHTML = modifiedCounter
//     console.log(e.target.value)
// })

function counterWord(e) {
    modifiedCounter = e.target.value
    counter.innerHTML = `Caracteres - ${modifiedCounter.length}`
}
dataInput.addEventListener("input", counterWord)