let ch = 'A';
let code = ch.charCodeAt(0);
if (code >=48 && code >= 57);{
    console.log("It is a number");
}if(code >= 65 && code <= 90){
    console.log("It is an uppercase letter");
}else if (code >= 97 && code <= 122){
    console.log("It is a lower case letter");
}else {
    console.log("Invald Input");
}


var number = prompt ("find larger one 40/20")
var num1 = (40)
var num2 = (20)
 if (num1 > num2){
    console.log(num1 + " is larger" );
}else if (num1 < num2){
    console.log(num2 + " is larger");
}
else {
    console.log("both are equal");
}

var value = prompt ("Which is correct (-5 > 0 , -5 < 0)")
let num = -5
if (num>0){
    console.log("It is positive");
}else if (num<0){
    console.log("It is negative");
}
else{
    console.log("Zero");
}
var vowel = prompt("e, is vowel (true/flase)")
let ch1 ='e';
if ("aeiouAEIOU".includes(ch1)){
    console.log("true");
}else {
    console.log("false");
}


var correctPasword = "website"
var userPassword = prompt("Enter your password");
if (userPassword === "" || userPassword === null){
    alert("Please enter your password")
} else if(userPassword === correctPassword){
    alert("Correct! The password you entered mathches the original password")
}else{
    alert("Incorrect Password")
}

var greeting;
var hour = 13;
if(hour <18){
    greeting = "Good Day"
}else {
    greeting = "Good Evening"
}


var time = prompt("Enter time in 24 hours format");
time = parseInt(time);
if (time >= 0 && time < 1200){
    console.log("AM");
}else if(time>= 12 && time < 5){
    console.log("Good Afternon (PM)");
}else if(time>= 5 && time < 9){
    console.log("Good Evening (PM)");
}else if(time>= 9 && time <= 10){
    console.log("Good Night (PM)");
}else{
    console.log("Invalid time");
}

