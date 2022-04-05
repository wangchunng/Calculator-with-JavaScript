function addValue(){
    // get the operands value from the user input [Get method]
    let inputA = document.getElementById('input_a').value;
    let inputB = document.getElementById('input_b').value;

    // parse to integer [convert the text to integer]
    // val1 = parseInt(..., 10); 
    inputA = parseInt(inputA);
    inputB = parseInt(inputB);  

    // perform operation [insert formula]
    let sum = inputA + inputB;

    // creating the text output

    // (if you want to check) print out in console [present the operation steps on textbox]
    let add = inputA + " + "  + inputB + " = " + sum;

    // change the text area [ Print out the answer ]
    document.mycalculator.output.value = add;
    
}

function minValue(){
    let inputA = document.getElementById('input_a').value;
    let inputB = document.getElementById('input_b').value;

    // parse to integer
    // val1 = parseInt(..., 10); [convert the text to integer]
    inputA = parseInt(inputA);
    inputB = parseInt(inputB);  

    let minus = inputA - inputB; 

    let deduction = inputA + " - "  + inputB + " = " + minus; 

    document.mycalculator.output.value = deduction;
}


function mulValue(){
    let inputA = document.getElementById('input_a').value;
    let inputB = document.getElementById('input_b').value;

    // parse to integer
    // val1 = parseInt(..., 10); [convert the text to integer]
    inputA = parseInt(inputA);
    inputB = parseInt(inputB); 
    
    let multiply = inputA * inputB; 

    let multiple = inputA + " x "  + inputB + " = " + multiply;

    document.mycalculator.output.value = multiple;

}

function divValue(){

    let inputA = document.getElementById('input_a').value;
    let inputB = document.getElementById('input_b').value;

    // parse to integer
    // val1 = parseInt(..., 10); [convert the text to integer]
    inputA = parseInt(inputA);
    inputB = parseInt(inputB);  

    let divided = inputA / inputB ; 

    let division = inputA + "/" + inputB + " = " + divided;

    document.mycalculator.output.value = division;
    
}
