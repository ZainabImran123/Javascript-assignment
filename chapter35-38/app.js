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





function fullSum(){
    alert("the total is "+fullSum)
}
var Numm = prompt("Enter your First.Number")
var Nummm = prompt("Enter your Last.Number")
alert(Numm+Nummm)





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
alert("Factorial of 5 is "+factorial(5))




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



