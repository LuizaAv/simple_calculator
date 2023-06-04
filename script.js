let screen = document.getElementById("screen")

let one = document.getElementById("one") 
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five") 
let six = document.getElementById("six")
let seven = document.getElementById("seven") 
let eight = document.getElementById("eight") 
let nine = document.getElementById("nine")
let plus = document.getElementById("plus") 
let minus = document.getElementById("minus") 
let times = document.getElementById("times") 
let devision = document.getElementById("devision")
let equal = document.getElementById("equal")

let firstNum 
let secondNum
let operand
let result

let numButtons = [one, two, three, four, five, six, seven, eight, nine]
let operandButtons = [plus, minus, times, devision]

function firstNumber(){
    numButtons.map(item => {
        item.addEventListener("click", () => {
           if(operand){
                secondNum += item.value
                screen.innerText = secondNum.substring(9)
           }else{
                firstNum += item.value
                screen.innerText = firstNum.substring(9)
           } 
        })
    })
}

firstNumber()

operandButtons.map(item => {
    item.addEventListener("click", () => {
        operand = item.value
        screen.innerText = operand
    })
})

equal.addEventListener("click", () => {
    firstNum = +(firstNum.substring(9))
    secondNum = (+secondNum.substring(9))

    if(operand === "+"){
        result = firstNum + secondNum
    }else if(operand === "-"){
        result = firstNum - secondNum
    }else if(operand === "*"){
        result = firstNum * secondNum
    }else if(operand === "/"){
        result = firstNum / secondNum
    }

    screen.innerText = result
})



