var inputValue = [];
function clickFunction(target){
    target_value = document.getElementById("calScreen").value += target;
}

function evaluation(){
    result = eval(target_value);
    document.getElementById("calScreen").value = result;
    equation = target_value + " = " + eval(target_value);
    document.getElementById("eval").value = equation;
    display(equation);
    frontendPost(equation);
}

function frontendPost(target_value){
    inputValue.push(target_value);
    // console.log(inputValue)
    inputValueLength = inputValue.length
    
}

function display(target_value){
    $('#showConsole').append(target_value);
  
}
 
function clean(){
    document.getElementById("calScreen").value = " ";
}



