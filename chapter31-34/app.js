var date = new Date()
dateStr = date.toString()
var time = dateStr.slice()
alert(time);




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





var first = new Date(1/1/2026)
var today = new Date()
var second = first.getDate() - today.getDay()
if(day === 15){
    alert("First fifteen days of the month")
}else{
    alert("last days of the month")
}






var currentTime = new Date()
var currentHour = currentTime.getHours()
if(time < 12){
    alert("It's am")
}else{
    alert("It's pm")
}





var day = new Date(2/18/2026)
var newDay = new Date(3/6/2026)
var newDate = day.getDay() - newDay.getDay()
alert("17 Days have passed since 1st Ramadan");



var datee = new Date(12/30/2025)
dateeStr = datee.toString()
var timee = dateeStr.slice()
alert(timee);





var dateee = new Date(12/5/2025)
var newDateee = dateee/12/30/24/60/60
alert(newDateee.toString+"second had passed since 2025")



//var dateeee = new Date()
//var oldDateeee = new Date(1/28/1926)
//alert(oldDateeee)
var dateeeeeeee = new Date(1/28/2026)
var dateeee = new Date(1/28/1926)
var dateeee = dateeeeeeee.getFullYear() - dateeee.getFullYear()
dateeeeeStr = dateeee.toString()
var timeee = dateeeeeStr.slice()
alert(timeee);



