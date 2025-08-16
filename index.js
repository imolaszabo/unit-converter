/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const alertText = document.getElementById("alert-text")


inputEl.addEventListener("input", () => {
  inputEl.style.width = (inputEl.value.length + 1) + "ch";
});

function convert() {
    let input = inputEl.value
    let inputArr = input.split("")
    let characters = new Set(inputArr)
    let alphabet = new Set("abcdefghijklmnopqrstuvwxyz".split(''))
    if (characters.has(",")) {
        alertText.innerText = 'Fractional numbers should be entered with a ".", like: 0.5'
        lengthEl.innerText = ""
        volumeEl.innerText = ""
        massEl.innerText = ""
        return
    }
    for (let char of characters) {
    if (alphabet.has(char.toLowerCase())) {
        alertText.innerText = 'Please only enter numbers.'
        lengthEl.innerText = ""
        volumeEl.innerText = ""
        massEl.innerText = ""

        return
    }
    }
    lengthEl.innerText = `
                            ${input} meters = ${(input * 3.281).toFixed(2)} feet | ${input} feet = ${(input / 3.281).toFixed(2)} meters                        
                        `
    volumeEl.innerText = `
                            ${input} liter = ${(input * 0.264).toFixed(2)} gallon | ${input} gallon = ${(input / 0.264).toFixed(2)} liter                        
                        `
    massEl.innerText = `
                            ${input} kilogramm = ${(input * 2.204).toFixed(2)} pounds | ${input} pound = ${(input / 2.204).toFixed(2)} kilogramm                        
                        `
}

convertBtn.addEventListener('click', convert)

inputEl.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    convertBtn.click();
  }
});
