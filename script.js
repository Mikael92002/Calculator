let numbersArray = [];
let screenArray = [];
let operatorArray = [];

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
                }
                else {
                    screenArray[1] = +(screenArray[1] + numberDivs.textContent);
                }
                console.log("adding to position 1: " + screenArray);
            }

            else {
                if (typeof (screenArray[0]) === "undefined") {
                    screenArray[0] = +(numberDivs.textContent);
                }
                else {
                    screenArray[0] = (screenArray[0] + numberDivs.textContent);
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


    const zeroDiv = document.createElement("button");
    zeroDiv.textContent = "0";
    zeroDiv.style.display = "flex";
    zeroDiv.style.flex = "1 1 auto";
    zeroDiv.style.border = "2px solid black";
    zeroDiv.style.alignItems = "center";
    zeroDiv.style.justifyContent = "center";
    zeroDiv.style.marginLeft = "auto";
    zeroDiv.style.marginRight = "auto";
    zeroDiv.style.minWidth = "33.333333333%";
    zeroDiv.style.minHeight = "25%";
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
            }
        }
        else {
            if (typeof (screenArray[0]) === "undefined") {
                return;
            }
            else {
                screenArray[0] = +(screenArray[0] + zeroDiv.textContent);
            }
        }
    });

    const clearButton = document.createElement("div");
    clearButton.textContent = 'CLEAR';
    clearButton.style.display = 'flex';



    numbersEnclosure.appendChild(zeroDiv);
}


const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const decimal = document.querySelector(".decimal");
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
    }
});

multiply.addEventListener("click", () => {
    if (numbersArray.length > 0) {
        operatorArray[0] = "x";
    }
});

divide.addEventListener("click", () => {
    if (numbersArray.length > 0) {
        operatorArray[0] = "/";
    }
});

add.addEventListener("click", () => {
    if (numbersArray.length > 0) {
        operatorArray[0] = "+";
    }
});

subtract.addEventListener("click", () => {
    if (numbersArray.length > 0) {
        operatorArray[0] = "-";
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
        return +num1 / +num2;
    }
};