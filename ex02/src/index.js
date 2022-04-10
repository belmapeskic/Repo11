// Only change code below this code
var myStr = "Paragon is the best!"
function useMethods(str) {
    var myReverse;
    var countCharacters;
    myStr = str.split(""); // ["Paragon", "is", "the", "best!"]
    myStr = myStr.reverse(); // ["!tseb", "eht", "si", "nogaraP"]
    myReverse = myStr.join(""); // "!tseb eht si nogaraP"
    countCharacters = [5, 3, 2, 7];
    myStr.map((s)=>s.length); 
    myStr=myStr.map((r)=>r.split("").reverse().join("")); 
    return {myReverse, countCharacters};
};
// Only change code above this code
console.log(useMethods(myStr));
module.export = useMethods;