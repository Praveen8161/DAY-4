//Arrow Function
//Inputs
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 5, 7, 11, 13, 17, 19, 23, 1, 2, 3, 2, 4, 1, 5, 6, 5];
let str = ["apple", "banana", "cherry", "orange", "grape", "racecar", "level", "rotor", "madam", "civic"];

console.group("Odd numbers in array");
let odd = num.filter((x) => !(x%2 === 0));
console.log(odd);
console.groupEnd();

console.group("Convert all the strings to title caps in a string array");
let cap = str.map((str) => {return str[0].toUpperCase()+str.slice(1)});
console.log(cap);
console.groupEnd();

console.group("Sum of all numbers in an array");
let sum = num.reduce((total,nums) => total+nums,0);
console.log(sum);
console.groupEnd();

console.group("Return all the prime numbers in an array");
let prime = num.filter((x) => { 
    for(let i = 2; i < x ; i++){
        if(x % i === 0){
            return false;
        }
    }
        return x > 1;
})
console.log(prime);
console.groupEnd();

console.group("Return all the palindromes in an string  array");
let palindrome = str.filter((str1) => {
    strCopy = str1.split("").reverse().join("");
    if(strCopy === str1){
        return true;
    }else{
        return false;
    }
});
console.log(palindrome);
console.groupEnd();