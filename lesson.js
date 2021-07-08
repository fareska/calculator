function addNums(num1,num2){
    return (+num1) + (+num2);
}
function subNums(num1,num2){
    return (+num1) - (+num2);
}

function multiNums(num1,num2){
    return (+num1) * (+num2);
}

function divideNums(num1,num2){
    return (+num1) / (+num2);
}

function clear(){
    display.innerText = 0;
    num1 = '';
    num2 = '';
    ans = '';
    operator = '';
    isNum1 = true;
}


var num1 = "";
var num2 = "";
var ans = "";
var operator = "+";
var isNum1 = true;

var equalButton = document.getElementById("equals");
var numButtons = document.getElementsByClassName("number");
var opsButtons = document.getElementsByClassName("operator");
var display = document.getElementsByClassName('calculator__display')[0];
var empty = document.getElementsByClassName('clear')[0];

var numButtonsArray = Object.assign([],numButtons);
var opsButtonsArray = Object.assign([],opsButtons);

numButtonsArray.forEach(function(button){
    button.onclick = function(event){
        if(isNum1){
            num1 += button.innerText;
            display.innerText = num1;   
        }else{
            num2 += button.innerText;
            display.innerText = num2;   
        }
        
    }
});

opsButtonsArray.forEach(function(button){
    button.onclick = function(event){
        console.log(operator.length);
        if( operator.length > 0){
            isNum1 = false;
        }
    }
});

equalButton.onclick = function(event){
    ans = addNums(num1, num2);
    display.innerText = ans;
    num1 = 0;
    num2 = 0;
};

empty.onclick = function(event){
    clear();
};