// // CÁCH 1
// const change = (digits) => {
//     lastIndex = digits.lastIndexOf(9);
//     if (lastIndex == digits.length - 1) {
//         firstIndex = digits.indexOf(9);
//         digits.fill(0, firstIndex, lastIndex+1);
//         if (firstIndex != 0)
//             digits[firstIndex-1]++;
//     } else {
//         digits[digits.length-1]++;
//     }
//     return digits;
// }

// CÁCH 2
const change = (digits) =>{
    number = digits.reduce((num, digit) => num * 10 + digit);
    number++;
    result = [];

    for (const i of number.toString()) {
        result.push(Number.parseInt(i))
    }
    if(result.length != digits.length)
        result.shift();
    return result;
}

const digits1 = [1, 2, 3];
const digits2 = [0];
const digits3 = [9];

console.log(change(digits1));
console.log(change(digits2));
console.log(change(digits3));
