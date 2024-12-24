const user = {
    username : "breezy",
    price : 199,

    welcomeMessage: function() {
        console.log(`${this.username} ,  welcome to website`);//this will refer to current contex }
        // console.log(this);
    }  
}

// user.welcomeMessage()
// user.username="sam"  //will print as current contetx(value is not committed)
// user.welcomeMessage()

// console.log(this); //current context will be empty (as in node enviorment)


// function chai(){
//     let username ="breezy"
//     console.log(this.username);
// }
// chai()

const chai= () => {
    let username ="breezy"
        console.log(this);
    }
 // chai()

//  const addTwo =(num1 ,num2) => {
//     return num1 + num2
//  }
 
// const addTwo =(num1 ,num2) => num1 + num2 //implicit return
 
// const addTwo = (num1 ,num2) => (num1 + num2) //no need to write return when use ()
 
const addTwo =(num1 ,num2) =>  num1 + num2 //to return any object () is must
 
 
 console.log(addTwo(3,4))


