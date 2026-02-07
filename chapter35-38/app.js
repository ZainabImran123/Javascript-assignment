function newDfun(){
    alert("Wed Feb 04 2026 15:13:49 GMT+0500 (PTK)")
}
newDfun()





function fullName(){
    alert("Welcome "+fullName)
}
var Namee = prompt("Enter your First.Name")
var Nameee = prompt("Enter your Last.Name")
alert(Namee+" "+Nameee)






function calculator(num1 , num2 , operator){
    let result;
    if(operator === "+"){
        result=num1+num2
    }
    else if(operator === "-"){
        result=num1-num2
    }
    else if(operator === "*"){
        result=num1*num2
    }
    else if(operator === "/"){
        result=num1/num2
    }else{
        return "Invalid Operator"
    }
}
calculator()




function factorial(num){
    let result = 1;
    for (let i = 1; i <= num; i++){
        result = result*i
    }
    return result
}
var fact = Number(prompt("enter a numver for fcatorial"))
alert("Factorial is "+factorial(fact))






function sum(num1,num2){
    var add = num1+num2
    return add
}
var num1 = Number(prompt("enter a number"))
var num2 = Number(prompt("enter a number"))
console.log(sum(num1,num2));






function counting(start,end){
    for(let i = start; i <= end; i++){
        alert(i+"<br>")
    }
}
counting(1,10)



function rectangle(width,height){
    return width*height
}
alert("Area(values):"+rectangle(5,10))


let w = 7;
let h = 4;
function rectangle(width,height){
    return width*height
}
alert("Area(variable):"+rectangle(w,h))







function calculator(num1,num2,operator){
    var operation;
    if(operator == "+"){
        operation = num1+num2
    }
    else if(operator == "-"){
        operation = num1-num2
    }
    else if(operator == "*"){
        operation = num1*num2
    }
    else if(operator == "/"){
        operation = num1/num2
    }else{
        operation = "invalid operator"
    }
    return operation

}
var num3 = Number(prompt("enter a number"))
var num4 = Number(prompt("enter another number"))
var num5 = prompt("enter an operator (+ - * /)")

console.log(calculator(num3,num4,num5));













