let numbersArray = [];
let screenArray = [];

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
            if (typeof (screenArray[screenArray.length-1]) === "number") {
                screenArray[screenArray.length - 1] = +(screenArray[screenArray.length - 1] + numberDivs.textContent);
                console.log("it's happening");
            }
            else { screenArray.push(+numberDivs.textContent); }
            console.log(screenArray);
        })
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


    const zeroDiv = document.createElement("button");
    zeroDiv.textContent = "0";
    zeroDiv.style.display = "flex";
    zeroDiv.style.flex = "1 1 auto";
    zeroDiv.style.alignItems = "center";
    zeroDiv.style.justifyContent = "center";
    zeroDiv.style.marginLeft = "auto";
    zeroDiv.style.marginRight = "auto";
    zeroDiv.style.minWidth = "100%";
    zeroDiv.style.minHeight = "25%";
    zeroDiv.style.backgroundColor = "yellow";
    zeroDiv.style.color = "black";
    zeroDiv.style.fontSize = "40px";
    zeroDiv.style.fontWeight = "900";

    zeroDiv.addEventListener("click", () => {
        screenArray.push(+zeroDiv.textContent);
    })


    numbersEnclosure.appendChild(zeroDiv);
}
