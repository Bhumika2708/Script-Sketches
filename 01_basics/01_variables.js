const accountId = 144553  //can't be change 
let accountEmail = "bhumi@gmail.com" 
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; //undefined : variable declared without value declaration 

//accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword = "292920"
accountCity = "Mumbai"

 console.log(accountId);

 /*
prefer not to use "var" 
because of the issue of block and functional scope
 */

 console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //result in tabular form
 