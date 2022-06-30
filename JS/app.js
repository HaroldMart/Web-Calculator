let display = document.getElementById("show-result");
let operation;
let number;
let number2;

let zero = document.getElementById("0");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let point = document.getElementById("point");

let ce = document.getElementById("ce");
let pow = document.getElementById("pow");
let equal = document.getElementById("equal");
let porcent = document.getElementById("porcent");
let mult = document.getElementById("multiplication");
let add = document.getElementById("addition");
let subt = document.getElementById("subtraction");
let divi = document.getElementById("division");
let record = document.getElementById("display-record")

zero.onclick = function () {
    display.textContent = display.textContent + zero.textContent
};
one.onclick = function () {
    display.textContent = display.textContent + one.textContent
};
two.onclick = function () {
    display.textContent = display.textContent + two.textContent
};
three.onclick = function () {
    display.textContent = display.textContent + three.textContent
};
four.onclick = function () {
    display.textContent = display.textContent + four.textContent
};
five.onclick = function () {
        display.textContent = display.textContent + five.textContent
};
six.onclick = function () {
    display.textContent = display.textContent + six.textContent
};
seven.onclick = function () {
    display.textContent = display.textContent + seven.textContent
};
eight.onclick = function () {
    display.textContent = display.textContent + eight.textContent
};
nine.onclick = function () {
    display.textContent = display.textContent + nine.textContent
};
point.onclick = function () {
    display.textContent = display.textContent + point.textContent
};

ce.onclick = function () {
    reset()
}


pow.onclick = function ()  {
    number = display.textContent;
    operation = "^x";
    clear();
};

add.onclick = function ()  {
    number = display.textContent;
    operation = "+";
    clear();
};

subt.onclick = function () {
    number = display.textContent;
    operation = "-";
    clear();
};

mult.onclick = function () {
    number = display.textContent;
    operation = "x";
    clear();
};

divi.onclick = function () {
    number = display.textContent;
    operation = "/";
    clear();
};

porcent.onclick = function () {
    number = display.textContent;
    operation = "%";
    clear();
};

equal.onclick = function () {
    number2 = display.textContent;
    solution();
}

function clear() {
    display.textContent = "";
};

function reset() {
    display.textContent = "";
    operation = "";
    number = 0;
    number2 = 0;
};

function solution() {
    var result;
    number = parseFloat(number);
    number2 = parseFloat(number2);
    var var_record;

    switch(operation) {
        case "^x":
            result = Math.pow(number, number2);
            var_record = number + "^" + number2 + " = " + result
            break;
        case "+":
            result = number + number2;
            var_record = number + " + " + number2 + " = " + result
            break;
        case "-":
            result = number - number2;
            var_record = number + " - " + number2 + " = " + result
            break;
        case "x":
            result = number * number2;
            var_record = number + " x " + number2 + " = " + result
            break;
        case "/":
            result = number / number2;
            recovar_recordrd = number + " / " + number2 + " = " + result
            break;
        case "%":
            var numberBefore = number
            number /= 100;
            result = number * number2;
            var_record = number2 + "% of " + numberBefore + " = " + result
    }

    reset();
    display.textContent = result;
    record.innerHTML = record.innerHTML + "<hr>" + var_record
};