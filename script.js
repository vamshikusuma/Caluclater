

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}
function evaluateu() {
    try{
    display.value=eval( display.value)}
    catch(error){
        display.value=error
    }
    
}

function cleard(){
    display.value="";
}
