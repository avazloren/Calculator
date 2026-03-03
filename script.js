let currentInput = "" //declares current input

function press(char) {
    currentInput += char
    document.getElementById("display").innerText = currentInput //adds the number into the calculator screen
}

function clearScreen() {
    currentInput = ""
    document.getElementById("display").innerText = "0" //clears the calculator display
}


function convertToList(userInput){ //converts the input into a list of values
    let valOps = []; 
    let currentValue = ""
    for(let i = 0; i < userInput.length; i++){
        if (["+", "-", "*", "/"].includes(userInput[i])) {
            valOps.push(currentValue)
            valOps.push(userInput[i])
            currentValue = ""
        }else { 
            currentValue += userInput[i];
        }
        if (i === userInput.length - 1 && currentValue !== ""){ //pushes the last value
            valOps.push(currentValue)
        }
    }
    return valOps
}

function operationPrimary(splitedOp){ // for multiplication and division
    let result = 0
    while(true){
        let found = false;
        for(let i = 0; i < splitedOp.length; i++){
            if(["*", "/"].includes(splitedOp[i])){
                let simbol = splitedOp[i]
                let value1 = parseFloat(splitedOp[i-1])
                let value2 = parseFloat(splitedOp[i+1])
                if(simbol == "*"){ // *
                    result = value1 * value2
                }else{ // /
                    result = value1 / value2
                }
                splitedOp[i-1] = result
                splitedOp.splice(i,2)
                found = true
                break
            }
        }
        if(!found){
            return splitedOp
        }
    }
}

function operationSecondary(splitedOp){ //for addition and subtraction
    let result = 0
    while(true){
        let found = false
        for(let i = 0; i < splitedOp.length; i++){
            if(["+","-"].includes(splitedOp[i])){
                let simbol = splitedOp[i]
                let value1 = parseFloat(splitedOp[i-1])
                let value2 = parseFloat(splitedOp[i+1])
                if(simbol == "+"){ //+
                    result = value1 + value2
                }else{ //-
                    result = value1 - value2
                }

                splitedOp[i-1] = result
                splitedOp.splice(i,2)
                found = true
                break
            }
        }
        if(!found){
            return splitedOp[0]
        }
    }
}

function calculate(){
    if(!currentInput) return //stops the function immediately if there is nothing to calculate.
    let list = convertToList(currentInput)
    list = operationPrimary(list)
    let finalResult = operationSecondary(list)
    
    document.getElementById("display").innerText = finalResult
    currentInput = finalResult.toString() //dicplays the result converted into a string
}