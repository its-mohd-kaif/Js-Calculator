//Function to show input on display
function button(val) {
    document.getElementById("output").value+=val;
}
//Function to do operation according to condition
function operation() {
    var result=[];
    if(document.getElementById("output").value.includes("+")){
        result=document.getElementById("output").value.split("+");
        return parseInt(result[0]) + parseInt(result[1]);
    }else if(document.getElementById("output").value.includes("-")){
        result=document.getElementById("output").value.split("-");
        return parseInt(result[0]) - parseInt(result[1]);
    }else if(document.getElementById("output").value.includes("*")){
        result=document.getElementById("output").value.split("*");
        return parseInt(result[0]) * parseInt(result[1]);
    }else if(document.getElementById("output").value.includes("/")){
        result=document.getElementById("output").value.split("/");
        return parseInt(result[0]) / parseInt(result[1]);
    }
    
}
//Function to calculate vales and display
function equal() {
    var display=operation();
    document.getElementById("output").value=display;
}
//Function to reset all values 
function reset() {
    document.getElementById("output").value='';
}