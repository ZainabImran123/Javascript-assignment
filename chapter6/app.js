var num = 10
console.log(++num);//11

console.log(num++);//11
console.log(num);//12

console.log(--num);//11
console.log(num--);//11
console.log(num);//10


var a = 2
var b = 1

console.log(--a);//1
console.log(--a - --b);//0
console.log(--a - --b + ++b);//0
console.log(--a - --b + ++b + b--);//-1


let userName = prompt("Enter your name")
if (userName){
     alert("Hello, "+userName+" Welcome!")
} else{
    alert("Hello! Welcome!")
}

let input = prompt("Enter a number to see its multiplication table")
if (isNaN){
     num = 5 ;//by default 5
}
document.write("<h2>"+"Multiplication table of "+num+"</h2>")
for(let i = 1; i <=10; i++){
    document.write(num + "x" + i + "=" + (num * i) + "<br>")
}


var Maths , Urdu , English;
var fullMarks = 100;
Maths = prompt("Enter the name of the first subject:")
Urdu = prompt("Enter the name of the second subject:")
English = prompt("Enter the name of the third subject:")

let Marks1 = Number(prompt("Enter marks obtained for the first subject:"))
let Marks2 = Number(prompt("Enter marks obtained for the second subject:"))
let Marks3 = Number(prompt("Enter marks obtained for the third subject:"))
let totalMarks = Marks1 + Marks2 + Marks3;
let grandtotalMarks = totalMarks * 3

const maths = 54;
const urdu = 48;
const english = 54
const totalMarksPerSubject = 100
const totalObtainedMarks = maths + urdu + english;
const totalPossibleMarks = 3 * totalMarksPerSubject;




