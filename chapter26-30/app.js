var num = prompt("Enter a positive number with decimal")
console.log(Math.random(num));
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));




var numm = prompt("Enter a negative number with decimal")
console.log(Math.random(numm));
console.log(Math.round(numm));
console.log(Math.floor(numm));
console.log(Math.ceil(numm));




var min = 1
var max = 100
var random = Math.floor(Math.random() * (max-min + 1)) +min
console.log(random);





var secret = Math.floor(Math.random()*10)+1
var guess = parseInt(prompt("Guess a number between 1 and 10:"))
if(guess === secret){
    console.log("Congratulations! you guessed a secret number!")
}





var dice = Math.floor(Math.random()*6)+1;
console.log(dice);




function tossCoin(){
    
    var randomValue = Math.random()
    var coinValue = (randomValue < 0.5) ? "heads" : "Tails"
    document.getElementById("result").innerHTML = "random coin value: " + coinValue;

}



var number = Math.floor(Math.random()*100)+1
document.getElementById("numberDisplay").textContent = "number"

























