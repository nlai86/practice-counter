let barNum = 0;
let countNum = 0;
let fttCount = 0; 

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

function incCountFTT() {
    fttCount += 1;

    if (fttCount == 11) {
        fttCount = 0;
    }
    document.getElementById("ftt-count").innerText = "From the Top Count: " + fttCount;
}

function decCountFTT() {
    fttCount -= 1;

    if (fttCount < 0) {
        fttCount = 0;
    }

    document.getElementById("ftt-count").innerText = "From the Top Count: " + fttCount;
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
document.getElementById("ftt-plus-one").addEventListener("click", incCountFTT);
document.getElementById("ftt-minus-one").addEventListener("click", decCountFTT);
document.getElementById("reset").addEventListener("click", reset);