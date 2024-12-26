//Immediately  INvoked Function Expressions (IIFE)

(function chai(){
    //name IIFE
    console.log(`DB CONNECTED`)
})(); //need a semi colon as immediately invoke function dont know where to stop

// () =>Function defination ()=> execution

 ( (name)=> { //simple IIFE 
    console.log(`DB CONNECTED two ${name}`);
 })("Breezy")