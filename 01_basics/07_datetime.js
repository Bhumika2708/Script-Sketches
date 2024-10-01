// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

console.log(myDate) //Output : Wed Oct 02 2024 01:49:32 GMT+0530 
console.log(myDate.toString()) //Output Wed Oct 02 2024 01:49:32 GMT+0530

console.log(myDate.toLocaleString()) // Output : 10/2/2024, 1:49:32 AM
console.log(myDate.toLocaleDateString()) //Output : 10/2/2024

console.log(myDate.toLocaleTimeString()) // Output : 1:49:32 AM





// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
