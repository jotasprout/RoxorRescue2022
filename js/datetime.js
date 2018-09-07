const date = new Date();

let searchDate = date.toDateString();
let searchTime = date.toLocaleTimeString();

console.log('date is ', searchDate);
console.log('time is ', searchTime);

document.getElementById("time").innerHTML = searchTime;
document.getElementById("date").innerHTML = searchDate;