

var getOperation = function (operationSymbol){
    if (operationSymbol === '+') {
        return function (num1, num2){
            return (+num1) + (+num2);
        }
    } ;
    if (operationSymbol === '-') {
        return function (num1, num2) {
            return (+num1) - (+num2);
        }
    } ;
    if (operationSymbol === '×') {
        return function (num1, num2) {
            return (+num1) * (+num2);
        }
    } ;
    if (operationSymbol === '÷') {
        return function (num1, num2) {
            return (+num1) / (+num2);
        }
    } ;
}

var checkFirstChar = function () {
    if (input[0] === '÷' || input[0] === '×') {
        isValid = 'the first is operation';
    } else if (input[0] === '+' || input[0] === '-' || input[0] === '.') {
        input = '0' + input;
    }
}

var checkIfDividedByZero = function () {
    var divisionIndex;
    var zeroIndex;
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if(element === '0') { zeroIndex = i  };
        if(element === '÷') { divisionIndex = i} ;
    }
    isValid = (zeroIndex - divisionIndex) === 1  && 'division by zero isn\'t allowed' ;
}

var isOperator = function (value) {
    var ans = false;
    for (let i = 0; i < 4; i++) {
        if (value === ops[i]) {
            ans = true;
        }
    }
    return ans;
}

var checkIfInputIsAns = function () {
    console.log(input);
}

var checkInput = function (inputVal) {
    console.log(inputVal);
    for (let i = 0; i < inputVal.length; i++) {
        var check = isOperator(inputVal[i]); 
        if (!check) {
            if(!switchNum){
                oldNum += inputVal[i];
            }else {
                secondNum +=inputVal[i];
            }
        } else {
            switchNum = true ;
            opsFun = getOperation(inputVal[i]);
        }
    }
    ans = opsFun(oldNum, secondNum)
    // return ans
}
var input = '';
var isValid = '';
var ops = ['÷', '×', '+', '-'];
var oldNum = '';
var secondNum = '';
var switchNum = false;
var opsFun ;
var ans = 0;

var equalButton = document.getElementById("equals");
var numButtons = document.getElementsByClassName("number");
var opsButtons = document.getElementsByClassName("operator");
var display = document.getElementsByClassName('calculator__display')[0];
var empty = document.getElementsByClassName('clear')[0];

var numButtonsArray = Object.assign([], numButtons);
var opsButtonsArray = Object.assign([], opsButtons);

numButtonsArray.forEach(function (button) {
    button.onclick = function (event) {
        input += event.target.innerText;
        display.innerText = input
        // if(ans === 0 ) {
        // } else {
        //     input = event.target.innerText;
        //     display.innerText = input
        // }
    }
});

opsButtonsArray.forEach(function (button) {
    button.onclick = function (event) {
        input += event.target.innerText;
        display.innerText = input
    }
});

equalButton.onclick = function () {
    checkFirstChar();
    checkIfDividedByZero();
    checkIfInputIsAns();
    if (isValid.length > 0) {  
        display.innerText = isValid;
    } else {
        var ans = checkInput(input)
        //  checkInput(input)
        display.innerText = ans
        input = ans;
    }
};

empty.onclick = function () {
    input = '';
    isValid = '';
    ans = 0 ;
    display.innerText = 0;
};

/* var checkInput = function (inputVal) {
    //insert is unshift
    //pop is q[0]
    var q = [];
    var m;
    var zpm;
    var zmd;

    for (let i = 0; i < inputVal.length; i++) {
        const element = inputVal[i];

        if (i === 0) { // just in the first iteration

            if (inputVal[i] === zpm || inputVal === m) {
                q.unshift(inputVal[i]);
            } else return error;

        } else {
            let check = q[0]  // getQue() 
            if (inputVal === m) {
                q.unshift(inputVal[i]);

            }else if (check === z && inputVal[i] === z) {
                return error
            }else {

            }
        }

    }
} */

// function addNums(num1, num2) {
//     return (+num1) + (+num2);
// }


// function multiNums(num1, num2) {
//     return (+num1) * (+num2);
// }

// function divideNums(num1, num2) {
//     return (+num1) / (+num2);
// }