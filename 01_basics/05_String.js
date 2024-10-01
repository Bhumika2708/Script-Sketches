const name = "Breezy"
const repoCount = 10

console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`); // string interpolation.

const gameName = new String ('Breezybh')
//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(4));
//console.log(gameName.indexOf(4));
const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newString1 = "      breezy     "
console.log(newString1);
console.log(newString1.trim());//remove the space

console.log(gameName.split('-')); //seperator and limit



