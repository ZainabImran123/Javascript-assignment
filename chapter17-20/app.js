var empty = [] 
console.log(empty);


var matrix = [0,1,2,3]


fruits = ["apple","banana","mango","orange","strawberry"]
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
    
}


var food = ["cake","apple pie","cookie","chips","patties"]
var userInput = prompt("Enter an item to search for:")
userInput = userInput.toLowerCase()
for(var i = 0; i < food.length; i++){
    if (food[i] === userInput){
        document.write("Yes this is available in our bakery")
    }else{
        document.write("Yes this is available in our bakery")
    }
}

for(var i = 1; i<11; i++)
console.log(i);


var val =+prompt("Enter a number or a table",5) || 5
var len = +prompt("Enter a length for a table",10) || 10
for(var i = 1; i <= len; i++){
    document.write(val + " x "+i+" = "+val*i+"<br>")
}



for(var i = 1; i<= 15; i++){
    console.log(i);
}
for(var i = 10; i>= 15; i--){
    console.log(i);
}
for(var i = 0; i<= 20; i += 2){
    console.log(i);
}
for(var i = 1; i<= 19; i += 2){
    console.log(i);
}
for(var i = 1; i<= 10; i++){
    console.log(i * 2 + "k");
}




