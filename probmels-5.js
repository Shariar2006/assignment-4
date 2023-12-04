// complet

// function canPay(changeArray, totalDue) {
//     if (!Array.isArray(changeArray) || typeof totalDue !== "number") {
//         return 'please provide me a valid array and a valid number'
//     }
//     else if (changeArray.length === 0) {
//         return 'please provide me a valid array'
//     }
//     else {
//         const additionarray = changeArray[0] + changeArray[1] + changeArray[2];

//         if (additionarray >= totalDue) {
//             return true;
//         }
//         return false;
//     }
// }


// console.log(canPay([1, 2, 5], 10))




function compare(a, b) {
 if (a.toString() === b) {
 return true;
 } else {
 return false;
 }
}
const result = compare(25, '25');
console.log(result);
