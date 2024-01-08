let barNum = 0;
let countNum = 0;

function incBar() {
    barNum += 1;
    document.getElementById("bar-count").innerText = "Bar: " + barNum;
}

function decBar() {
    barNum -= 1;

    if (barNum < 0) {
        barNum = 0;
    }
    document.getElementById("bar-count").innerText = "Bar: " + barNum;
}

function incCount() {
    countNum += 1;

    if (countNum == 11) {
        countNum = 0;
        barNum += 1;
    }
    document.getElementById("num-count").innerText = "Count: " + countNum;
    document.getElementById("bar-count").innerText = "Bar: " + barNum;
}

function decCount() {
    countNum -= 1;

    if (countNum < 0) {
        countNum = 0;
    }

    document.getElementById("num-count").innerText = "Count: " + countNum;
}

function reset(){
    countNum = 0;
    document.getElementById("num-count").innerText = "Count: " + countNum;
    barNum = 0;
    document.getElementById("bar-count").innerText = "Bar: " + barNum;
}

document.getElementById("next-button").addEventListener("click", incBar);
document.getElementById("prev-button").addEventListener("click", decBar);
document.getElementById("plus-one").addEventListener("click", incCount);
document.getElementById("minus-one").addEventListener("click", decCount);
document.getElementById("reset").addEventListener("click", reset);