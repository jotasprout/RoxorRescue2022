const date = new Date();

let searchDate = date.toDateString();
let searchTime = date.toLocaleTimeString();	

document.getElementById('date').value = searchDate;	
document.getElementById('time').value = searchTime; 

console.log('date is ', searchDate);
console.log('time is ', searchTime);
