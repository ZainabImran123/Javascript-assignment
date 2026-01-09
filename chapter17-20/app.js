var arr = [];
let matrix = [
    [0,1,2,3]
    [1,0,1,2]
    [2,1,0,1]
]
document.write(matrix);
for (let i = 1; i <= 10; i++){
    console.log(i);
}

    

fruits = ["apple","banana","mango","orange","strawberry"]
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
    
}


var A = ["cake","apple pie","cookie","chips","patties"]
var userInput = prompt("Enter an item to search for:")
for(let i = 0; i < A.length; i++){
    if (A[i].toLowerCase() === userInput){
        found = true;
        break;
    }
}
if(found){
    alert(`Yes, "${userInput}"  is found in the list.`)
}else{
    alert(`No, "${userInput}"  is found not in the list.`)
}





