// =========================
// Part 1: Get Elements from the Page (HTML Elements)
// =========================

const lengthElement = document.getElementById("length");
const upperCaseElement = document.getElementById("upperCase");
const lowerCaseElement = document.getElementById("lowerCase");
const numbersElement = document.getElementById("numbers");
const symbolsElement = document.getElementById("symbols");
const generate = document.getElementById("generate");
const resultElement = document.getElementById("result");

// =========================
// Part 2: Create Character Arrays for Password Options
// =========================
const UPPER_CASE = getArray("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const LOWER_CASE = getArray("abcdefghijklmnopqrstuvwxyz");
const NUMBERS = getArray("0123456789");
const SYMBOLS = getArray("~`!@#$%^&*()-_=+[{]}|;:,<>.?/");
// =========================
// Part 3: Convert a String to an Array of Characters
// =========================
function getArray(str){
    return str.split("");
} 
// =========================
// Part 4: Handle Generate Button Click
// =========================
generate.addEventListener("click", () => {
    const length = parseInt(lengthElement.value);
    const upperChecked = upperCaseElement.checked;
    const lowerChecked = lowerCaseElement.checked;
    const numbersChecked = numbersElement.checked;
    const symbolsChecked = symbolsElement.checked;

    const password = generatePassword(
        length,
        upperChecked,
        lowerChecked,
        numbersChecked,
        symbolsChecked
    )

    resultElement.textContent = password;
})


function generatePassword(
    length,
    upperChecked,
    lowerChecked,
    numbersChecked,
    symbolsChecked
) {
    if (length == 0) {
        alert("Invalid length!");
    }

    let array = [];
    
    if (upperChecked) array = array.concat(UPPER_CASE);
    if (lowerChecked) array = array.concat(LOWER_CASE);
    if (numbersChecked) array = array.concat(NUMBERS);
    if (symbolsChecked) array = array.concat(SYMBOLS);
    if(array.length == 0){alert("Please select an option!")} else{
    let randIndex;
    let result = [];
    for(i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * array.length);
    result.push(array[randIndex]);

    }
    return result.join("");
    }
}