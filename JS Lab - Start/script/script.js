function addValue(){
    // get the operands value
    const operandOne = document.getElementById("input_a").value
    const operandTwo = document.getElementById("input_b").value
    // parse to integer. You can use: parseInt(input, 10);
    const inputA = parseInt(operandOne)
    const inputB = parseInt(operandTwo)
    // perform operation
    answer = inputA + inputB
    // creating the text output
    const text = operandOne + " + " + operandTwo + " = " + answer
    // (if you want to check) print out in console

    // change the text area

    document.mycalculator.output.value = text;
}


function mulValue(){
    const operandOne = document.getElementById("input_a").value
    const operandTwo = document.getElementById("input_b").value
    const inputA = parseInt(operandOne)
    const inputB = parseInt(operandTwo)
    answer = inputA * inputB
    const text = operandOne + " * " + operandTwo + " = " + answer
    document.mycalculator.output.value = text;
}

function divValue(){
    const operandOne = document.getElementById("input_a").value
    const operandTwo = document.getElementById("input_b").value
    const inputA = parseInt(operandOne)
    const inputB = parseInt(operandTwo)
    answer = inputA / inputB
    const text = operandOne + " / " + operandTwo + " = " + answer
    document.mycalculator.output.value = text;
}
