function clickFunction(target){
    target_value = document.getElementById("calScreen").value += target;
}

function evaluation(){
    result = eval(target_value);
    console.log(target_value)
    console.log(result)
    document.getElementById("calScreen").value = result;
    display(target_value);
}

function display(target_value){
    display_Update = document.getElementById('showConsole').innerHTML = target_value;
    $('#showConsole').append( " = " + eval(target_value));
}

function clean(){
    document.getElementById("calScreen").value = " ";
}
