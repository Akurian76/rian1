const result = document.getElementById("result")

//action button
const clear = document.getElementById("clear")
const uquals = document.getElementById("equals")

//input button
const satu = document.getElementById("satu")
const dua  = document.getElementById("dua")
const tiga = document.getElementById("tiga")
const empat = document.getElementById("empat")
const lima = document.getElementById("lima")
const enam = document.getElementById("enam")
const tujuh = document.getElementById("tujuh")
const delapan = document.getElementById("delapan")
const sembilan = document.getElementById("sembilan")
const nol = document.getElementById("nol")
const tambahan = document.getElementById("tambahan")
const pengurangan = document.getElementById("pengurangan")
const perkalian = document.getElementById("perkalian")
const pembagian = document.getElementById("pembagian")

//penyimpanan sementara
let currentNumber = "";
let previosNumber = "";
let operation = "";

satu.addEventListener("click", function () {
    currentNumber += "1";
    result.textContent = currentNumber;
});
dua.addEventListener("click", function () {
    currentNumber += "2";
    result.textContent = currentNumber;
});
tiga.addEventListener("click", function () {
    currentNumber += "3";
    result.textContent = currentNumber;
});
empat.addEventListener("click", function () {
    currentNumber += "4";
    result.textContent = currentNumber;
});
lima.addEventListener("click", function () {
    currentNumber += "5";
    result.textContent = currentNumber;
});
enam.addEventListener("click", function () {
    currentNumber += "6";
    result.textContent = currentNumber;
});
tujuh.addEventListener("click", function () {
    currentNumber += "7";
    result.textContent = currentNumber;
});
delapan.addEventListener("click", function () {
    currentNumber += "8";
    result.textContent = currentNumber;
});
sembilan.addEventListener("click", function () {
    currentNumber += "9";
    result.textContent = currentNumber;
});
nol.addEventListener("click", function () {
    currentNumber += "0";
    result.textContent = currentNumber;
});

tambahan.addEventListener("click", function () {
    previosNumber = currentNumber;
    currentNumber = "";
    operation = "+";
    result.textContent = operation;
});
pengurangan.addEventListener("click", function () {
    previosNumber = currentNumber;
    currentNumber = "";
    operation = "-";
    result.textContent = operation;
});
perkalian.addEventListener("click", function () {
    previosNumber = currentNumber;
    currentNumber = "";
    operation = "x";
    result.textContent = operation;
});
pembagian.addEventListener("click", function () {
    previosNumber = currentNumber;
    currentNumber = "";
    operation = ":";
    result.textContent = operation;
});
equals.addEventListener("click", function () {
    if (operation === "+") {
        let resultValue = parseFloat (previosNumber) + parseFloat (currentNumber);
        result.textContent = resultValue;
        currentNumber = resultValue.toString ();
    } else if (operation === "-") {
        let resultValue = parseFloat (previosNumber) - parseFloat (currentNumber);
        result.textContent = resultValue;
        currentNumber = resultValue.toString ();
    } else if (operation === "x") {
        let resultValue = parseFloat (previosNumber) * parseFloat (currentNumber);
        result.textContent = resultValue;
        currentNumber = resultValue.toString ();
    }else if (operation === ":") {
        let resultValue = parseFloat (previosNumber) / parseFloat (currentNumber);
        result.textContent = resultValue;
        currentNumber = resultValue.toString ();
    }
});
clear.addEventListener ("click", function () {
    currentNumber = "";
    previosNumber = "";
    operation = "";
    result.textContent = "masukkan angka pole bos!!";

});
