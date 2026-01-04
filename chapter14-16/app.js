var string = ["hadiya","abiha","zainab","maria","asma"]
console.log(string);

var number = [1,2,3,4,5]
console.log(number);

var boolean = [true,false]
console.log(boolean);

var mix = ["hania",75,"ayesha",true,93,"labiba"]
console.log(mix);




var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"]
console.log(qualification);
document.write("<h1>"+"Qualifications"+"</h1>"+"SSC "+"<br>"+"HSC "+"<br>"+"BCS "+"<br>"+"BS "+"<br>"+"BCOM "+"<br>"+"MS "+"<br>"+"M.Phil. "+"<br>"+"PhD "+"<br>"+"<br>"+"<br>")


var cities = ["karachi","lahore","islamabad","quetta","peshawar"]
console.log(cities);
var selectedcities = ["islamabad","quetta"]
console.log(selectedcities);

var single = ["This is my cat"]
console.log(single);


var studentNames = ["michael","john","tony"]
var studentScore = [320,230,480]
var percentage = ["64%","46%","96%"]
var totalMarks = 500

document.write("Score of michael is 320.Percentage:64%"+"<br>")
document.write("Score of john is 230.Percentage:46%"+"<br>")
document.write("Score of tony is 480.Percentage:96%"+"<br>"+"<br>"+"<br>")


var scores =[320,230,480,120]
var order = [120,230,320,480]
document.write("Score of student: "+scores+"<br>")
scores.sort(function(a,b){
     return a-b
});
document.write("Ordered score of student: "+order+"<br>"+"<br>"+"<br>")



let queue = []
queue.push(10)
queue.push(20)
queue.push(30)
queue.push(40)
document.write("Stored values: "+ queue+"<br>")
document.write("Removed: "+queue.shift()+"<br>")
document.write("Removed: "+queue.shift()+"<br>")
document.write("Removed: "+queue.shift()+"<br>")
document.write("Removed: "+queue.shift()+"<br>"+"<br>"+"<br>")

let stack = []
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
document.write("Stored values: "+ stack+"<br>")
document.write("Removed: "+stack.pop()+"<br>")
document.write("Removed: "+stack.pop()+"<br>")
document.write("Removed: "+stack.pop()+"<br>")
document.write("Removed: "+stack.pop()+"<br>")



