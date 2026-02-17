function power(a,b){
    return Math.pow(a,b)
}
console.log(power(2,4));



var leapYear = prompt("Enter a year")
alert(leap(leapYear)) 
function leap(year){
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        return "leap year"
    }else{
        return "not a leap year"
    }
}


function calculateS(a,b,c){
    return (a+b+c)/2
}
function calculateArea(a,b,c){
    let S = calculateS(a,b,c)
    return Math.sqrt(S * (S - a) * (S - b) * (S - c))
}
console.log(calculateArea(3,4,5));


function myIndexOf(str , char){
    for(let i = 0; i < str.length; i++){
        if(str[i]===char){

        }
    }
    return-1
}
console.log(myIndexOf("hello","1"));


function toMeters(km){
    return km * 1000;
}
function toFeet(km){
    return km * 3280.84;
}
function toInches(km){
    return km * 39370.1;
}
function toCentimeters(km){
    return km * 100000;
}
let km = +prompt("Enter distance in kilometers:")
alert("Meters: " + toMeters(km))
alert("Feet: "+toFeet(km))
alert("Inches: "+toInches(km))
alert("Centimeters: "+toCentimeters)


function calculateTime(hours){
    if(hours > 40){
        let overtimeHours = hours - 40;
        return overtimeHours * 12;
    }else{
        return 0;
    }
}
let hoursWorked = +prompt("Enter total working hours:")
let overtimePay = calculateTime(hoursWorked)
alert("overtime Pay: Rs. " + overtimePay);



function currencyNotes(amount){
    let hundreds = Math.floor(amount / 100)
    amount = amount % 100;

    let fifties = Math.floor(amount / 50);
    amount = amount % 50;

    let tens = Math.floor(amount / 10);

    console.log("100 Notes: " + hundreds);
    console.log("50 Notes: " + fifties);
    console.log("10 Notes: " + tens);
}
let amount = +prompt("Enter amount to withdraw:")
currencyNotes(amount);


















