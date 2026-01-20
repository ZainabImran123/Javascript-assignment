var  text = prompt("Enter your name:")
var first = text.slice(0,1)
var last = text.slice(1)
var fullName = first.toUpperCase() + last.toLowerCase()
console.log(fullName);




var fav = prompt("Enter your favourite mobile phone model:")
var length = fav.length;
console.log("My favourite phone is " + fav);
console.log("<br>Length of string:" + length);




var first =  "Hello World"
var last = first.lastIndexOf("l")
document.write("The last index of 'l' in 'Hello World' is:" + last)




var city = "Hyderabad"
var newCity  = city.replace('Hyder','Islam')
console.log(newCity);



var  dry = prompt("Enter your favourite dryfruit:")
//var fruit = text.slice(0)
var dryName = dry.toUpperCase()
console.log(dryName);



var  java = prompt("Write a word")
var javascript = java.charAt(0).toUpperCase() + java.slice(1)
console.log("Title case: " + javascript);



var num = 35.36
var numstring = num.toString()
var displayString = numstring.replace(".","")
document.write("<br>" + displayString )





var message = "Ali and Sami are best friends." 
var messagee ="They play Cricket and Football together."
var result = message.replace("and","&")
var resultt = messagee.replace("and","&")
document.write("<br>"+result+resultt+"<br>")




var str = "472"
var numm = Number(str)
document.write("Value: "+str+"<br>")
document.write("Type: "+typeof str + "<br>")
document.write("Value: "+ numm  + "<br>")
document.write("Type: "+ typeof numm + "<br>")


























































