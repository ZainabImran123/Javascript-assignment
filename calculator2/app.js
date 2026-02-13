function writeOnly(cha){
    document.getElementById("input").value += cha;
}
function clearInput(){
    document.getElementById("input").value = "";
}
function deleteCha(){
    var words = document.getElementById("input").value;
    var finallength = words.slice(0,-1)
    document.getElementById("input").value = finallength;
}
let input = document.getElementById("input");

function calculate() {
    try {
        input.value = eval(input.value);
    } 
    catch {
        input.value = "Error";
    }
}
function calculate(){
    var [firstNumber , operator , lastNumber] = document.getElementById("input").value.split("")
    var firstNumber = Number(firstNumber)
    var lastNumber = Number(lastNumber)
    if(operator == "-"){
        document.getElementById("input").value = firstNumber - lastNumber
    }else if(operator == "+"){
        document.getElementById("input").value
    }
}