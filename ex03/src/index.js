// Create myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array
// Create a funcation below this line
function myArrayFunction(myPets) {
    var myNewPets = ["Bird", "Fish"];
    var firstPet = "Bird";
    var lastPet = "Fish";
    myPetsArray = myNewPets;
    myNewPets.unshift(firstPet, lastPet); // ["Bird", "Fish"]
    myNewPets.unshift("Lion", firstPet); // ["Lion", Bird", "Fish"]
    return myNewPets
}
// End of creating a function
console.log(myArrayFunction(myNewPets));
module.exports = myArrayFunction;