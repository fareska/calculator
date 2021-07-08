
class Calculator {
    constructor(answerEle, inputEle) {
        this.answerEle = answerEle
        this.inputEle = inputEle
        this.empty()
    }

    empty() {
        this.input = 0
        this.answer = 0
        this.operation = undefined

    }

    delete() {
        this.answer = this.answer.toString().slice(0, -1)
    }

    appendNum(number) {
        if (number === '.' && this.answer.includes('.')) return

        this.answer = this.answer.toString() + number.toString()
    }

    getOperation(operation) {
        if (this.answer === '') return
        if (this.input !== '') {
            this.compute()
        }
        this.operation = operation
        this.input = this.answer
        this.answer = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.input)
        const current = parseFloat(this.answer)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '÷':
                computation = prev / current
                break
            case '×':
                computation = prev * current
                break
            default:
                return
        }
        this.answer = computation 
        this.operation = undefined
        this.input = ''
    }

    getDisplayNumber(number) {
        const strNum = number.toString()
        const intDigits = parseFloat(strNum.split('.')[0])
        const decimalDigits = strNum.split('.')[1]
        let intDisplay
        if (isNaN(intDigits)) {
            intDisplay = ''
        } else {
            intDisplay = intDigits.toLocaleString('en', {maximumFractionDigits : 0})
        }
        if(decimalDigits != null){
            return `${intDisplay}.${decimalDigits}`
        }else{
            return intDisplay
        }
        // const floatNum = parseFloat(number)
        // if (isNaN(floatNum)) return ''
        // return floatNum.toLocaleString('en')
    }

    updateDisplay() {
        this.answerEle.innerText = this.getDisplayNumber(this.answer)
        if (this.operation !== undefined) { // !== null
            this.inputEle.innerText = `${this.getDisplayNumber(this.input)}${this.operation}`
        }else {
            this.inputEle.innerText =''
        }
    }


}


// const numberButtons = document.querySelectorAll('[number]')
const numButtons = document.getElementsByClassName("number");
const OpsButtons = document.getElementsByClassName("operator");
const equalsButton = document.getElementById("equals");
const empty = document.getElementsByClassName('clear')[0];
const answerEle = document.getElementsByClassName('input')[0];
const inputEle = document.getElementsByClassName('calculator__display')[0];
const deleteBtn = document.getElementsByClassName('deleteBtn')[0];

const calculator = new Calculator(answerEle, inputEle)

const numberButtons = [...numButtons]
const opsButtons = [...OpsButtons]

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText)
        calculator.updateDisplay()
    })
})

opsButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.getOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

empty.addEventListener('click', () => {
    calculator.empty()
    calculator.updateDisplay()
})

deleteBtn.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})