let numbersArray = [];
let screenArray = [];
let operatorArray = [];
let calculated = false;
let operaterInserted = false;

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
            if (operatorArray.length > 0) {
                if (typeof (screenArray[1]) === "undefined") {
                    screenArray[1] = +(numberDivs.textContent);
                    screen.textContent = screenArray[0] + " " + operatorArray[0] + " " + screenArray[1];
                }
                else {
                    screenArray[1] = +(screenArray[1] + numberDivs.textContent);
                    screen.textContent = screenArray[0] + " " + operatorArray[0] + " " + screenArray[1];
                }
                console.log("adding to position 1: " + screenArray);
            }

            else {
                if (typeof (screenArray[0]) === "undefined") {
                    screenArray[0] = +(numberDivs.textContent);
                    screen.textContent = screenArray[0];
                }
                else {
                    screenArray[0] = (screenArray[0] + numberDivs.textContent);
                    screen.textContent = screenArray[0];
                }
                console.log("adding to position 0: " + screenArray);
            }
            console.log("type is: " + typeof(screenArray[0]) + "type is: " + typeof(screenArray[1]));
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
    // zeroDiv.style.marginLeft = "auto";
    // zeroDiv.style.marginRight = "auto";
    // zeroDiv.style.minWidth = "33.333333333%";
    // zeroDiv.style.minHeight = "25%";
    zeroDiv.style.backgroundColor = "yellow";
    zeroDiv.style.color = "black";
    zeroDiv.style.fontSize = "40px";
    zeroDiv.style.fontWeight = "900";

    zeroDiv.addEventListener("click", () => {
        if (operatorArray.length > 0) {
            if (typeof (screenArray[1]) === "undefined") {
                return;
            }
            else {
                screenArray[1] = +(screenArray[1] + zeroDiv.textContent);
                screen.textContent = screenArray[0] + " " + operatorArray + " " + screenArray[1];
            }
        }
        else {
            if (typeof (screenArray[0]) === "undefined") {
                return;
            }
            else {
                screenArray[0] = +(screenArray[0] + zeroDiv.textContent);
                screen.textContent = screenArray[0];
            }
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
        screenArray = [];
        operatorArray = [];
        screen.textContent = "";
    })


    const decimal = document.querySelector(".decimal");
    decimal.addEventListener("click", () =>{
        if(typeof(screenArray[1])==="number"){
            screenArray[1] = screenArray[1] + ".";
        }
        else if(typeof(screenArray[0]) === "number"){
            screenArray[0] = screenArray[0] + ".";
        }
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

const screen = document.querySelector(".screen");

equals.addEventListener("click", () => {
    if (screenArray.length > 0) {
        const num1 = +screenArray[0];
        const num2 = +screenArray[1];
        const operator = operatorArray[0];
        console.log(typeof(num1));
        console.log(typeof(num2));
        console.log(typeof(operator));
        console.log(operator);
        const result = operate(num1, num2, operator);
        screen.textContent = `${result}`;
        screenArray = [result];
        operatorArray = [];
        operaterInserted = false;
    }
});

multiply.addEventListener("click", () => {
    if (screenArray.length > 0 && operaterInserted === false) {
        operatorArray[0] = "x";
        screen.textContent = screenArray[0] + " x ";
        operaterInserted = true;
    }
});

divide.addEventListener("click", () => {
    if (screenArray.length > 0 && operaterInserted === false) {
        operatorArray[0] = "/";
        screen.textContent = screenArray[0] + " / "
        operaterInserted = true;
    }
});

add.addEventListener("click", () => {
    if (screenArray.length > 0 && operaterInserted === false) {
        operatorArray[0] = "+";
        screen.textContent = screenArray[0] + " + ";
        operaterInserted = true;
    }
});

subtract.addEventListener("click", () => {
    if (screenArray.length > 0 && operaterInserted === false) {
        operatorArray[0] = "-";
        screen.textContent = screenArray[0] + " - "
        operaterInserted = true;
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
        if (num2 === 0) {
            return "can't do that cuh";
        }
        const result = +num1/+num2;
        return result.toFixed(5);
    }
};