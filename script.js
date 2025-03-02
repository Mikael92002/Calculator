const screen = document.querySelector(".screen");
let operatorInserted = false;
let invalidZeroIndex = true;
let numbersArray = [];
let operator = "";

createButtons();

function createButtons() {
    const numbersEnclosure = document.querySelector(".numbers");

    for (let i = 1; i <= 9; i++) {
        const numberDivs = document.createElement("button");
        numberDivs.textContent = `${i}`;
        numberDivs.style.backgroundColor = "yellow";
        numberDivs.style.border = "2px solid black"
        numberDivs.style.display = "flex";
        numberDivs.style.flex = "1 1 0";
        numberDivs.style.textAlign = "center";
        numberDivs.style.alignItems = "center";
        numberDivs.style.justifyContent = "center";
        numberDivs.style.fontSize = "40px";
        numberDivs.style.fontWeight = "900";
        numbersArray[i] = numberDivs;

        numberDivs.addEventListener("click", () => {
            screen.textContent = screen.textContent + numberDivs.textContent;
            invalidZeroIndex = false;
        });
    }

    let numbersArrayIndexIterator = 1;

    for (let i = 0; i < 3; i++) {
        const numberDivsRow = document.createElement("div");
        numberDivsRow.style.display = "flex";
        numberDivsRow.style.justifyContent = "space-between";
        numberDivsRow.style.minHeight = "25%";
        for (let j = numbersArrayIndexIterator; j < numbersArrayIndexIterator + 3; j++) {
            numberDivsRow.appendChild(numbersArray[j]);
        }
        numbersArrayIndexIterator += 3;
        numbersEnclosure.appendChild(numberDivsRow);
    }

    const bottomEnclosure = document.createElement("div");
    bottomEnclosure.style.display = "flex";
    bottomEnclosure.style.minHeight = "25%";
    bottomEnclosure.style.justifyContent = "space-between";


    const zeroDiv = document.createElement("button");
    zeroDiv.textContent = "0";
    zeroDiv.style.display = "flex";
    zeroDiv.style.flex = "1 1 0";
    zeroDiv.style.border = "2px solid black";
    zeroDiv.style.alignItems = "center";
    zeroDiv.style.justifyContent = "center";
    
    zeroDiv.style.backgroundColor = "yellow";
    zeroDiv.style.color = "black";
    zeroDiv.style.fontSize = "40px";
    zeroDiv.style.fontWeight = "900";

    zeroDiv.addEventListener("click", () => {
        if(invalidZeroIndex){
            return;
        }
        else{
            screen.textContent = screen.textContent + zeroDiv.textContent;
        }

    });

    const clearButton = document.createElement("button");
    clearButton.textContent = 'CLEAR';
    clearButton.style.display = 'flex';
    clearButton.style.flex = "1 0 0";
    clearButton.style.justifyContent = "center";
    clearButton.style.alignItems = "center";
    clearButton.style.border = "2px solid black";
    clearButton.style.backgroundColor = "yellow";
    clearButton.fontSize = "40px";

    clearButton.addEventListener("click", () => {
        screen.textContent = "";
        operatorInserted = false;
        invalidZeroIndex = true;
        operator = "";
    })


    const decimal = document.querySelector(".decimal");
    decimal.addEventListener("click", () =>{
        
    })


    bottomEnclosure.appendChild(decimal);
    bottomEnclosure.appendChild(zeroDiv);
    bottomEnclosure.appendChild(clearButton);
    



    numbersEnclosure.appendChild(bottomEnclosure);
}


const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const equals = document.querySelector(".equals");



equals.addEventListener("click", () => {
    if(operatorInserted){
    let screenArray = screen.textContent.split(operator);
    let num1 = screenArray[0];
    let num2 = screenArray[1];
    screen.textContent = operate(num1,num2, operator);
}
});

multiply.addEventListener("click", () => {
   if(operatorInserted===false && screen.textContent !== ""){
    screen.textContent = screen.textContent + "x";
    operatorInserted = true;
    invalidZeroIndex = true;
    operator = "x";
   }
});

divide.addEventListener("click", () => {
    if(operatorInserted===false && screen.textContent !== ""){
        screen.textContent = screen.textContent + "/";
        operatorInserted = true;
        invalidZeroIndex = true;
        operator = "/";
       }
});

add.addEventListener("click", () => {
    if(operatorInserted===false && screen.textContent !== ""){
        screen.textContent = screen.textContent + "+";
        operatorInserted = true;
        invalidZeroIndex = true;
        operator = "+";
       }
});

subtract.addEventListener("click", () => {
    if(operatorInserted===false && screen.textContent !== ""){
        screen.textContent = screen.textContent + "-";
        operatorInserted = true;
        invalidZeroIndex = true;
        operator = "-";
       }
});




function operate(num1, num2, operator) {
    if (operator === "+") {
        return +num1 + +num2;
    }
    if (operator === "-") {
        return +num1 - +num2;
    }
    if (operator === "x") {
        return +num1 * +num2;
    }
    if (operator === "/") {
        if (+num2 === 0) {
            return "can't do that cuh";
        }
        const result = +num1/+num2;
        return result.toFixed(5);
    }
};