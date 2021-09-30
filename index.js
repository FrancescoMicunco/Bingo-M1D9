let tableNumber = document.querySelectorAll("div")[0]
let numero = tableNumber.innerText
console.log(tableNumber)
let test = function() {
        for (let num in tableNumber) {
            if (num !== generateRandomNumber) {
                return null
            } else {
                alert(num)
            }
        }
    }
    // generate table
let newDivForTable = function() {
    for (let i = 1; i <= 76; i++) {
        let newNumberCell = document.createElement("div");
        newNumberCell.innerText = (i);
        newNumberCell.classList.add("cell")
        tableNumber.appendChild(newNumberCell)
    }
}

// test number with random
let selectedDiv = document.querySelectorAll("div");

// generate random number
let generateRandomNumber = function() {
        let randomNumber = Math.floor(Math.random() * 75 + 1)
        let selectedNumber = document.getElementById("selectedNumber");
        selectedNumber.innerText = randomNumber
    }
    // generate button
let button = document.getElementById("btn")
button.addEventListener("click", generateRandomNumber)
    // onload functions
window.onload = function() {

    newDivForTable()


}