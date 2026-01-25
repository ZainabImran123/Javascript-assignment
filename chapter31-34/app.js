var date = new Date()
dateStr = date.toString()
var time = dateStr.slice()
console.log(time);




var date = new Date();
var months = ["January","February","March","April","May","June","Julr","August","September","October","Novemebr","December"]
var currentMonth = months[date.getMonth(0-11)]
alert("Crrent month:" + currentMonth)






var date = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var today = days[date.getDay()]
var shortDay = today.slice(0,3)
alert("Today is " + shortDay)





var date = new Date();
var day = date.getDay()
if(day === 0 || day === 6){
    alert("It's fun day")
}

















