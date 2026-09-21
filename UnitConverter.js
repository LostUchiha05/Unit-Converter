const ConvertBtn = document.getElementById("Convert-btn")
const NumberEl = document.getElementById("number-field")
let lengthEl = document.getElementById("Length")
let volumeEl = document.getElementById("Volume")
let massEl = document.getElementById("Mass")
ConvertBtn.addEventListener("click",function(){
    length()
    volume()
    mass()
})

function length(){
    let ans1 = NumberEl.value * 3.281
    let ans2 = NumberEl.value / 3.281
    lengthEl.innerHTML = `${NumberEl.value} meters = ${ans1.toFixed(3)} feet | ${NumberEl.value} feet = ${ans2.toFixed(3)} meters`

}

function volume(){
    let ans1 = NumberEl.value * 0.264
    let ans2 = NumberEl.value / 0.264
    volumeEl.innerHTML = `${NumberEl.value} liters = ${ans1.toFixed(3)} gallons | ${NumberEl.value} gallons = ${ans2.toFixed(3)} liters`
}

function mass(){
    let ans1 = NumberEl.value * 2.204
    let ans2 = NumberEl.value / 2.204
    massEl.innerHTML = `${NumberEl.value} kilos = ${ans1.toFixed(4)} pounds | ${NumberEl.value} pounds = ${ans2.toFixed(3)} kilos `
}