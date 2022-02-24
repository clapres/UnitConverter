let inputNumber = 0
let input = document.getElementById("number")
let lenghtConversion = document.getElementById("length")
let volumeConversion = document.getElementById("volume")
let massConversion = document.getElementById("mass")

document.getElementById("number").value = 0

input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    inputNumber = document.getElementById("number").value
    if (Number.isInteger(Number(inputNumber))) {
        doIt();
    } else {
        errorMsg() ;
    }
  }
});

function lengthCalculate() {
    let metres = inputNumber / 3.281 
    let feet = inputNumber * 3.281
    
    // lenghtConversion.textContent = inputNumber + " meters = " +  metres + " feet | " + inputNumber + " feet = " +  feet + " meters"
    
    lenghtConversion.textContent = `${inputNumber} meters = ${feet.toFixed(3)} feet | ${inputNumber} feet = ${metres.toFixed(3)} meters`
}

function volumeCalculate() {
    let gallons = inputNumber / 3.785 
    let litres = inputNumber * 3.785
    
    volumeConversion.textContent = `${inputNumber} liters = ${gallons.toFixed(3)} gallons | ${inputNumber} gallons = ${litres.toFixed(3)} liters`    
}

function massCalculate() {
    let kilo = inputNumber / 2.205 
    let livre = inputNumber * 2.205
    
    massConversion.textContent = `${inputNumber} kilos = ${livre.toFixed(3)} pounds | ${inputNumber} pounds = ${kilo.toFixed(3)} kilos`        
}

function doIt() {
    document.getElementById("error-msg").textContent = ""
    lengthCalculate()
    volumeCalculate()
    massCalculate()
}

function errorMsg() {
    document.getElementById("error-msg").textContent = "Please enter un number!"
}

