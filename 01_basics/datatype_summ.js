// primitive

// 7 types : string,Number,Boolean,null,undefined,Symbol,Bigint

const score=100
const scoreValue=100.3
const isLoggedIn= false
let EmailId;

const id= Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 3456789213234n

//Js is dynamically typed

//Reference type (non-primitive)
// Array,Objects,Functions
const heros = ["shaktiman" , "naagraj" , "doga"]
let myObj = {
    name: "Breezy",
    age : 20,
}
const myFunction = function(){
    console.log("Hello ,World");
    
}

console.log(typeof isLoggedIn)
// function returns funtion

/* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */


// **********************************************************
//stack (primitive) => variable declared will get copy
// Heap (Non-Primitive) => varibale declared will get reference 

let myName= "Breezyb27.com"
