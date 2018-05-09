function reverseNumber(number) {
    number = number.toString().split("").reverse().join(""); 
    return parseInt(number);
}

console.log(reverseNumber(356712));