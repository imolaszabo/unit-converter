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

function convert() {
    let input = inputEl.value
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
